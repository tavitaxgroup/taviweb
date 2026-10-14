import { NextRequest, NextResponse } from 'next/server';
import { adminSupabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      tenant_id,
      customer_name,
      customer_phone,
      customer_email,
      customer_address,
      payment_method = 'cod',
      notes = '',
      items = [],
    } = body;

    if (!tenant_id || !customer_name || !customer_phone || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin người nhận và sản phẩm trong giỏ hàng.' },
        { status: 400 }
      );
    }

    // 1. Fetch Tenant Store Settings for shipping fee calculation
    const { data: tenant } = await adminSupabase
      .from('tenants')
      .select('id, name, theme_config, active_modules')
      .eq('id', tenant_id)
      .single();

    const storeSettings = tenant?.theme_config?.store_settings || {};
    const defaultShippingFee = Number(storeSettings.shipping_fee ?? 30000);
    const freeShipThreshold = Number(storeSettings.free_shipping_threshold ?? 500000);

    const subtotal_amount = items.reduce(
      (sum: number, item: any) => sum + Number(item.price || 0) * Number(item.quantity || 1),
      0
    );
    const shipping_fee =
      freeShipThreshold > 0 && subtotal_amount >= freeShipThreshold ? 0 : defaultShippingFee;
    const total_amount = subtotal_amount + shipping_fee;

    const order_code = 'DH' + Math.floor(100000 + Math.random() * 900000);

    // 2. Sync with Tenant's CRM (crm_contacts & crm_deals)
    let crmContactId: string | null = null;
    let crmDealId: string | null = null;

    try {
      const { data: existingContacts } = await adminSupabase
        .from('crm_contacts')
        .select('id')
        .eq('tenant_id', tenant_id)
        .eq('phone', customer_phone)
        .limit(1);

      if (existingContacts && existingContacts.length > 0) {
        crmContactId = existingContacts[0].id;
      } else {
        const { data: newContact } = await adminSupabase
          .from('crm_contacts')
          .insert([
            {
              tenant_id,
              name: customer_name,
              phone: customer_phone,
              email: customer_email || '',
              source: 'Website Bán Hàng (E-commerce)',
            },
          ])
          .select()
          .single();

        if (newContact) crmContactId = newContact.id;
      }

      // Find default pipeline and first stage of the tenant
      const { data: pipelines } = await adminSupabase
        .from('crm_pipelines')
        .select('id')
        .eq('tenant_id', tenant_id)
        .order('created_at', { ascending: true })
        .limit(1);

      if (pipelines && pipelines.length > 0 && crmContactId) {
        const pipelineId = pipelines[0].id;
        const { data: stages } = await adminSupabase
          .from('crm_stages')
          .select('id')
          .eq('tenant_id', tenant_id)
          .eq('pipeline_id', pipelineId)
          .order('order', { ascending: true })
          .limit(1);

        const stageId = stages?.[0]?.id || null;
        const summaryItems = items
          .map((i: any) => `${i.name}${i.variant ? ` (${i.variant})` : ''} x${i.quantity}`)
          .join(', ');

        const { data: newDeal } = await adminSupabase
          .from('crm_deals')
          .insert([
            {
              tenant_id,
              pipeline_id: pipelineId,
              stage_id: stageId,
              contact_id: crmContactId,
              title: `[Đơn #${order_code}] ${customer_name}`,
              value: total_amount,
              custom_data: {
                order_code,
                payment_method,
                customer_address,
                items_summary: summaryItems,
                notes,
              },
            },
          ])
          .select()
          .single();

        if (newDeal) crmDealId = newDeal.id;
      }
    } catch (crmErr) {
      console.warn('CRM auto-sync warning on store order:', crmErr);
    }

    // 3. Create Order record in public.orders
    const { data: newOrder, error: orderError } = await adminSupabase
      .from('orders')
      .insert([
        {
          tenant_id,
          order_code,
          customer_name,
          customer_phone,
          customer_email: customer_email || '',
          customer_address: customer_address || '',
          items,
          subtotal_amount,
          shipping_fee,
          total_amount,
          status: 'pending',
          payment_method,
          payment_status: 'unpaid',
          crm_contact_id: crmContactId,
          crm_deal_id: crmDealId,
          notes,
        },
      ])
      .select()
      .single();

    if (orderError) throw orderError;

    // 4. Decrement stock for ordered products
    for (const item of items) {
      if (item.product_id) {
        const { data: prod } = await adminSupabase
          .from('products')
          .select('id, stock')
          .eq('id', item.product_id)
          .single();
        if (prod && typeof prod.stock === 'number') {
          const nextStock = Math.max(0, prod.stock - Number(item.quantity || 1));
          await adminSupabase
            .from('products')
            .update({
              stock: nextStock,
              status: nextStock === 0 ? 'out_of_stock' : 'active',
            })
            .eq('id', prod.id);
        }
      }
    }

    return NextResponse.json({
      success: true,
      order: newOrder,
      store_bank: {
        bank_bin: storeSettings.bank_bin || 'MB',
        bank_name: storeSettings.bank_name || 'MBBank',
        bank_account: storeSettings.bank_account || '0901234567',
        bank_owner: storeSettings.bank_owner || tenant?.name || 'CHU CUA HANG',
      },
    });
  } catch (err: any) {
    console.error('Store Order POST Error:', err);
    return NextResponse.json(
      { error: err?.message || 'Lỗi tạo đơn hàng' },
      { status: 500 }
    );
  }
}
