import { NextResponse } from 'next/server';
import '@/lib/supabase/pgRestEngine';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Resolve target tenant by tenantId or tenantSlug, falling back to 'tavi'
    let tenantId: string | null = body.tenantId || null;

    if (!tenantId && body.tenantSlug) {
      const { data: bySlug } = await supabase
        .from('tenants')
        .select('id')
        .eq('slug', body.tenantSlug)
        .maybeSingle();
      tenantId = bySlug?.id || null;
    }

    if (!tenantId) {
      const { data: taviTenant } = await supabase
        .from('tenants')
        .select('id')
        .in('slug', ['tavi', 'taviweb'])
        .limit(1)
        .maybeSingle();
      tenantId = taviTenant?.id || null;
    }

    if (!tenantId) {
      const { data: firstTenant } = await supabase
        .from('tenants')
        .select('id')
        .order('created_at', { ascending: true })
        .limit(1)
        .maybeSingle();
      tenantId = firstTenant?.id || null;
    }

    if (!tenantId) {
      return NextResponse.json(
        { error: 'System not initialized (no tenant found)' },
        { status: 500 }
      );
    }

    // 2. Find or create Contact in CRM
    let contactId: string | null = null;
    if (body.phone) {
      const { data: existingContact } = await supabase
        .from('crm_contacts')
        .select('id')
        .eq('tenant_id', tenantId)
        .eq('phone', body.phone)
        .maybeSingle();

      if (existingContact) {
        contactId = existingContact.id;
      } else {
        const { data: newContact } = await supabase
          .from('crm_contacts')
          .insert([
            {
              tenant_id: tenantId,
              name: body.name || 'Khách hàng Website',
              phone: body.phone,
              email: body.email || null,
            },
          ])
          .select()
          .single();
        contactId = newContact?.id || null;
      }
    }

    let createdDealId: string | null = null;

    if (contactId) {
      let { data: stages } = await supabase
        .from('crm_stages')
        .select('id, pipeline_id, order')
        .eq('tenant_id', tenantId)
        .order('order', { ascending: true })
        .limit(1);

      if (!stages || stages.length === 0) {
        const { data: newPipeline } = await supabase
          .from('crm_pipelines')
          .insert([
            {
              tenant_id: tenantId,
              name: 'Quy trình chuẩn',
              description: 'Quy trình chăm sóc khách hàng mặc định',
            },
          ])
          .select()
          .single();

        if (newPipeline) {
          const { data: createdStages } = await supabase
            .from('crm_stages')
            .insert([
              {
                tenant_id: tenantId,
                pipeline_id: newPipeline.id,
                name: 'Mới tiếp nhận (Leads)',
                order: 0,
              },
              {
                tenant_id: tenantId,
                pipeline_id: newPipeline.id,
                name: 'Đang xử lý',
                order: 1,
              },
              {
                tenant_id: tenantId,
                pipeline_id: newPipeline.id,
                name: 'Hoàn thành',
                order: 2,
              },
            ])
            .select('id, pipeline_id, order')
            .order('order', { ascending: true });
          stages = createdStages || [];
        }
      }

      const stageId = stages && stages.length > 0 ? stages[0].id : null;
      const pipelineId =
        stages && stages.length > 0 ? (stages[0] as any).pipeline_id : null;

      const serviceLabel = body.service || 'Tư vấn chuyên sâu 1:1';
      const dealValue = Number(body.servicePrice || 0);
      const vehicleModel = body.vehicleModel || body.vehicle_model || '';
      const licensePlate = body.licensePlate || body.license_plate || '';
      const vehicleType = body.vehicleType || body.vehicle_type || '';
      const odoKm = body.odoKm || body.odo_km || '';

      const dealTitle = licensePlate
        ? `[${licensePlate}] ${vehicleModel ? `${vehicleModel} — ` : ''}${serviceLabel} — ${body.name || body.phone}`
        : body.name
        ? `${serviceLabel} — ${body.name}`
        : `Liên hệ mới: ${body.phone}`;

      const customData: Record<string, any> = {
        'Nguồn khách hàng': body.source || 'Web Booking',
        'Dịch vụ quan tâm': serviceLabel,
        'Hạng thẻ Thành viên': body.memberTier || 'Member',
        'Ghi chú': body.message || '',
      };
      if (vehicleType) customData['Loại phương tiện'] = vehicleType;
      if (vehicleModel) customData['Dòng xe'] = vehicleModel;
      if (licensePlate) customData['Biển số xe'] = licensePlate;
      if (odoKm) customData['Số ODO (Km)'] = odoKm;
      if (body.branch) customData['Chi nhánh đăng ký'] = body.branch;

      const { data: deal } = await supabase
        .from('crm_deals')
        .insert([
          {
            tenant_id: tenantId,
            pipeline_id: pipelineId,
            contact_id: contactId,
            title: dealTitle,
            value: dealValue,
            stage_id: stageId,
            custom_data: customData,
          },
        ])
        .select()
        .single();

      if (deal) {
        createdDealId = deal.id;
        const vehicleLine =
          vehicleModel || licensePlate
            ? `\n• Phương tiện: [${vehicleType || 'Xe'}] ${vehicleModel} · Biển số: ${licensePlate || 'Chưa rõ'}${odoKm ? ` · ODO: ${odoKm}km` : ''}`
            : '';
        await supabase.from('crm_activities').insert([
          {
            tenant_id: tenantId,
            deal_id: deal.id,
            type: 'note',
            content: `Khách hàng gửi form đăng ký từ Website.\n• Họ tên: ${body.name}\n• SĐT: ${body.phone}${vehicleLine}\n• Dịch vụ quan tâm: ${serviceLabel}\n• Lời nhắn: ${body.message || 'Cần tư vấn kỹ thuật & báo giá'}`,
          },
          {
            tenant_id: tenantId,
            deal_id: deal.id,
            type: 'task',
            content: `Gọi tư vấn ngay trong 15 phút cho ${body.name} (${body.phone})${licensePlate ? ` - Xe ${licensePlate}` : ''} về ${serviceLabel}`,
            task_due_date: new Date(Date.now() + 2 * 3600 * 1000).toISOString(),
            is_completed: false,
          },
        ]);
      }
    }

    return NextResponse.json({
      success: true,
      dealId: createdDealId,
      message: 'Đã tiếp nhận thông tin tư vấn vào hệ thống CRM!',
    });
  } catch (error: any) {
    console.error('Submit Lead Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal error' },
      { status: 500 }
    );
  }
}
