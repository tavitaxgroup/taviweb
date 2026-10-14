import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/supabase/pgRestEngine';

export async function POST(req: NextRequest) {
  const pool = getPool();
  const client = await pool.connect();

  try {
    const body = await req.json();
    const {
      tenant_id,
      customer_name,
      customer_phone,
      customer_email = '',
      customer_address = '',
      payment_method = 'cod',
      notes = '',
      items = [],
    } = body;

    if (
      !tenant_id ||
      !customer_name?.trim() ||
      !customer_phone?.trim() ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin người nhận và sản phẩm trong giỏ hàng.' },
        { status: 400 }
      );
    }

    await client.query('BEGIN');

    // 1. Fetch Tenant Store Settings
    const tenantRes = await client.query(
      'SELECT id, name, theme_config FROM public.tenants WHERE id = $1 LIMIT 1',
      [tenant_id]
    );
    const tenant = tenantRes.rows[0];
    if (!tenant) {
      await client.query('ROLLBACK');
      return NextResponse.json({ error: 'Không tìm thấy cửa hàng.' }, { status: 404 });
    }

    const storeSettings = tenant.theme_config?.store_settings || {};
    const defaultShippingFee = Number(storeSettings.shipping_fee ?? 30000);
    const freeShipThreshold = Number(storeSettings.free_shipping_threshold ?? 500000);

    // 2. Group total requested quantity per product_id & sort product IDs to prevent deadlocks
    const qtyByProductId = new Map<string, number>();
    for (const item of items) {
      const qty = Math.max(1, Math.floor(Number(item.quantity || 1)));
      if (item.product_id) {
        qtyByProductId.set(item.product_id, (qtyByProductId.get(item.product_id) || 0) + qty);
      }
    }

    const sortedProductIds = Array.from(qtyByProductId.keys()).sort();
    const lockedProducts = new Map<string, any>();

    // 3. Row-level lock (SELECT ... FOR UPDATE) on each product to prevent Race Condition / Overselling
    for (const pid of sortedProductIds) {
      const prodRes = await client.query(
        `SELECT id, name, sku, price, stock, status, images
         FROM public.products
         WHERE id = $1 AND tenant_id = $2
         FOR UPDATE`,
        [pid, tenant_id]
      );

      const prod = prodRes.rows[0];
      const requestedQty = qtyByProductId.get(pid) || 0;

      if (!prod || prod.status === 'draft') {
        await client.query('ROLLBACK');
        return NextResponse.json(
          {
            error: `Sản phẩm trong giỏ hàng không còn tồn tại hoặc đã ngừng kinh doanh.`,
            code: 'PRODUCT_UNAVAILABLE',
          },
          { status: 409 }
        );
      }

      if (Number(prod.stock) < requestedQty) {
        await client.query('ROLLBACK');
        return NextResponse.json(
          {
            error:
              Number(prod.stock) <= 0
                ? `Rất tiếc, sản phẩm "${prod.name}" vừa hết hàng (khách khác vừa đặt mua sản phẩm cuối cùng)!`
                : `Sản phẩm "${prod.name}" hiện chỉ còn ${prod.stock} sản phẩm trong kho (bạn đang chọn ${requestedQty}). Vui lòng giảm số lượng!`,
            code: 'INSUFFICIENT_STOCK',
            product_id: prod.id,
            available_stock: Number(prod.stock),
          },
          { status: 409 }
        );
      }

      lockedProducts.set(pid, prod);
    }

    // 4. Deduct stock atomically inside the transaction
    for (const pid of sortedProductIds) {
      const prod = lockedProducts.get(pid)!;
      const deductQty = qtyByProductId.get(pid)!;
      const nextStock = Number(prod.stock) - deductQty;

      await client.query(
        `UPDATE public.products
         SET stock = $1,
             status = CASE WHEN $1 <= 0 THEN 'out_of_stock' ELSE status END,
             updated_at = now()
         WHERE id = $2 AND tenant_id = $3`,
        [nextStock, pid, tenant_id]
      );
    }

    // 5. Build authoritative order items using Database prices (preventing client-side price tampering)
    const verifiedItems = items.map((item: any) => {
      const qty = Math.max(1, Math.floor(Number(item.quantity || 1)));
      const dbProd = item.product_id ? lockedProducts.get(item.product_id) : null;
      const unitPrice = dbProd ? Number(dbProd.price) : Number(item.price || 0);
      const prodName = dbProd ? dbProd.name : item.name;
      const prodSku = dbProd ? dbProd.sku : item.sku || '';
      const prodImg =
        dbProd && Array.isArray(dbProd.images) && dbProd.images[0]
          ? dbProd.images[0]
          : item.image || '';

      return {
        product_id: item.product_id || null,
        name: prodName,
        sku: prodSku,
        price: unitPrice,
        quantity: qty,
        variant: item.variant || '',
        image: prodImg,
      };
    });

    const subtotal_amount = verifiedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping_fee =
      freeShipThreshold > 0 && subtotal_amount >= freeShipThreshold ? 0 : defaultShippingFee;
    const total_amount = subtotal_amount + shipping_fee;
    const order_code = 'DH' + Math.floor(100000 + Math.random() * 900000);

    // 6. Sync Customer & Deal into Tenant's CRM inside the same transaction
    let crmContactId: string | null = null;
    let crmDealId: string | null = null;

    const existingContactRes = await client.query(
      `SELECT id FROM public.crm_contacts WHERE tenant_id = $1 AND phone = $2 LIMIT 1`,
      [tenant_id, customer_phone.trim()]
    );

    if (existingContactRes.rows.length > 0) {
      crmContactId = existingContactRes.rows[0].id;
    } else {
      const newContactRes = await client.query(
        `INSERT INTO public.crm_contacts (tenant_id, name, phone, email, source)
         VALUES ($1, $2, $3, $4, 'Website Bán Hàng (E-commerce)')
         RETURNING id`,
        [tenant_id, customer_name.trim(), customer_phone.trim(), customer_email.trim()]
      );
      crmContactId = newContactRes.rows[0]?.id || null;
    }

    const pipeRes = await client.query(
      `SELECT id FROM public.crm_pipelines WHERE tenant_id = $1 ORDER BY created_at ASC LIMIT 1`,
      [tenant_id]
    );

    if (pipeRes.rows.length > 0 && crmContactId) {
      const pipelineId = pipeRes.rows[0].id;
      const stageRes = await client.query(
        `SELECT id FROM public.crm_stages WHERE tenant_id = $1 AND pipeline_id = $2 ORDER BY "order" ASC LIMIT 1`,
        [tenant_id, pipelineId]
      );
      const stageId = stageRes.rows[0]?.id || null;
      const summaryItems = verifiedItems
        .map(i => `${i.name}${i.variant ? ` (${i.variant})` : ''} x${i.quantity}`)
        .join(', ');

      const newDealRes = await client.query(
        `INSERT INTO public.crm_deals (tenant_id, pipeline_id, stage_id, contact_id, title, value, custom_data)
         VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb)
         RETURNING id`,
        [
          tenant_id,
          pipelineId,
          stageId,
          crmContactId,
          `[Đơn #${order_code}] ${customer_name.trim()}`,
          total_amount,
          JSON.stringify({
            order_code,
            payment_method,
            customer_address: customer_address.trim(),
            items_summary: summaryItems,
            notes,
          }),
        ]
      );
      crmDealId = newDealRes.rows[0]?.id || null;
    }

    // 7. Insert Order into public.orders
    const orderRes = await client.query(
      `INSERT INTO public.orders (
         tenant_id, order_code, customer_name, customer_phone, customer_email,
         customer_address, items, subtotal_amount, shipping_fee, total_amount,
         status, payment_method, payment_status, crm_contact_id, crm_deal_id, notes
       ) VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $9, $10, 'pending', $11, 'unpaid', $12, $13, $14)
       RETURNING *`,
      [
        tenant_id,
        order_code,
        customer_name.trim(),
        customer_phone.trim(),
        customer_email.trim(),
        customer_address.trim(),
        JSON.stringify(verifiedItems),
        subtotal_amount,
        shipping_fee,
        total_amount,
        payment_method,
        crmContactId,
        crmDealId,
        notes,
      ]
    );

    await client.query('COMMIT');

    return NextResponse.json({
      success: true,
      order: orderRes.rows[0],
      store_bank: {
        bank_bin: storeSettings.bank_bin || 'MB',
        bank_name: storeSettings.bank_name || 'MBBank',
        bank_account: storeSettings.bank_account || '0901234567',
        bank_owner: storeSettings.bank_owner || tenant.name || 'CHU CUA HANG',
      },
    });
  } catch (err: any) {
    try {
      await client.query('ROLLBACK');
    } catch {}
    console.error('Store Order Transaction Error:', err);
    return NextResponse.json({ error: err?.message || 'Lỗi tạo đơn hàng' }, { status: 500 });
  } finally {
    client.release();
  }
}

/**
 * PATCH /api/store/orders
 * Updates order status/payment_status atomically and automatically restores product stock
 * when an order is cancelled (or re-deducts stock if un-cancelled).
 */
export async function PATCH(req: NextRequest) {
  const pool = getPool();
  const client = await pool.connect();

  try {
    const body = await req.json();
    const { tenant_id, order_id, status, payment_status, notes } = body;

    if (!tenant_id || !order_id) {
      return NextResponse.json({ error: 'Thiếu thông tin đơn hàng' }, { status: 400 });
    }

    await client.query('BEGIN');

    const ordRes = await client.query(
      `SELECT * FROM public.orders WHERE id = $1 AND tenant_id = $2 FOR UPDATE`,
      [order_id, tenant_id]
    );
    const currentOrder = ordRes.rows[0];
    if (!currentOrder) {
      await client.query('ROLLBACK');
      return NextResponse.json({ error: 'Không tìm thấy đơn hàng' }, { status: 404 });
    }

    const oldStatus = currentOrder.status;
    const nextStatus = status || oldStatus;
    const nextPaymentStatus = payment_status || currentOrder.payment_status;
    const nextNotes = notes !== undefined ? notes : currentOrder.notes;
    const orderItems: any[] = Array.isArray(currentOrder.items) ? currentOrder.items : [];

    // Case 1: Order transitions from active -> 'cancelled' => Restore stock to inventory
    if (oldStatus !== 'cancelled' && nextStatus === 'cancelled') {
      for (const item of orderItems) {
        if (item.product_id) {
          const qty = Math.max(1, Number(item.quantity || 1));
          await client.query(
            `UPDATE public.products
             SET stock = stock + $1,
                 status = CASE WHEN status = 'out_of_stock' AND (stock + $1) > 0 THEN 'active' ELSE status END,
                 updated_at = now()
             WHERE id = $2 AND tenant_id = $3`,
            [qty, item.product_id, tenant_id]
          );
        }
      }
    }

    // Case 2: Order transitions from 'cancelled' -> active => Verify & re-deduct stock
    if (oldStatus === 'cancelled' && nextStatus !== 'cancelled') {
      for (const item of orderItems) {
        if (item.product_id) {
          const qty = Math.max(1, Number(item.quantity || 1));
          const prodRes = await client.query(
            `SELECT id, name, stock FROM public.products WHERE id = $1 AND tenant_id = $2 FOR UPDATE`,
            [item.product_id, tenant_id]
          );
          const prod = prodRes.rows[0];
          if (prod && Number(prod.stock) < qty) {
            await client.query('ROLLBACK');
            return NextResponse.json(
              {
                error: `Không thể khôi phục đơn hàng vì sản phẩm "${prod.name}" chỉ còn ${prod.stock} trong kho (cần ${qty}).`,
              },
              { status: 409 }
            );
          }
          if (prod) {
            const afterStock = Number(prod.stock) - qty;
            await client.query(
              `UPDATE public.products
               SET stock = $1,
                   status = CASE WHEN $1 <= 0 THEN 'out_of_stock' ELSE status END,
                   updated_at = now()
               WHERE id = $2 AND tenant_id = $3`,
              [afterStock, item.product_id, tenant_id]
            );
          }
        }
      }
    }

    const updatedRes = await client.query(
      `UPDATE public.orders
       SET status = $1, payment_status = $2, notes = $3, updated_at = now()
       WHERE id = $4 AND tenant_id = $5
       RETURNING *`,
      [nextStatus, nextPaymentStatus, nextNotes, order_id, tenant_id]
    );

    await client.query('COMMIT');
    return NextResponse.json({ success: true, order: updatedRes.rows[0] });
  } catch (err: any) {
    try {
      await client.query('ROLLBACK');
    } catch {}
    console.error('Store Order PATCH Error:', err);
    return NextResponse.json({ error: err?.message || 'Lỗi cập nhật đơn hàng' }, { status: 500 });
  } finally {
    client.release();
  }
}
