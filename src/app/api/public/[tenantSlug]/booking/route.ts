import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase'; // Important: server-side uses service_role key to bypass RLS for public insertions if needed.
// Wait, currently '@/lib/supabase' is a client. We can just use the regular client, but if RLS prevents inserts we might need service_role. 
// Assuming public insert to booking_appointments and crm_contacts/deals is allowed OR we use service_role.

export async function POST(request: Request, { params }: { params: Promise<{ tenantSlug: string }> }) {
  try {
    const { tenantSlug: tenantId } = await params; // It receives the UUID from frontend
    const body = await request.json();
    
    // 1. Create Booking Appointment
    const { data: appointment, error: appointmentError } = await supabase
      .from('booking_appointments')
      .insert([{
        ...body,
        tenant_id: tenantId
      }])
      .select()
      .single();

    if (appointmentError) {
      if (appointmentError.message && appointmentError.message.includes('double_booking_error')) {
        return NextResponse.json({ error: 'double_booking', message: 'Rất tiếc, khung giờ này vừa có người đặt trước. Vui lòng chọn khung giờ khác.' }, { status: 409 });
      }
      throw appointmentError;
    }

    // 2. Automations: CRM Integration
    try {
      // Find or create Contact by Phone
      let contactId = null;
      if (body.customer_phone) {
        const { data: existingContact } = await supabase
          .from('crm_contacts')
          .select('id')
          .eq('tenant_id', tenantId)
          .eq('phone', body.customer_phone)
          .maybeSingle();

        if (existingContact) {
          contactId = existingContact.id;
        } else {
          const { data: newContact } = await supabase
            .from('crm_contacts')
            .insert([{
              tenant_id: tenantId,
              name: body.customer_name,
              phone: body.customer_phone,
              source: 'Web Booking'
            }])
            .select()
            .single();
          contactId = newContact?.id;
        }
      }

      if (contactId) {
        // Resolve service price if service_id is provided
        let dealValue = Number(body.service_price || 0);
        if (!dealValue && body.service_id) {
          const { data: svcData } = await supabase
            .from('booking_services')
            .select('price')
            .eq('id', body.service_id)
            .maybeSingle();
          if (svcData?.price) {
            dealValue = Number(svcData.price) || 0;
          }
        }

        // Ensure default pipeline & stages exist so stage_id is never null
        let { data: stages } = await supabase
          .from('crm_stages')
          .select('id, pipeline_id')
          .eq('tenant_id', tenantId)
          .order('order', { ascending: true })
          .limit(1);

        if (!stages || stages.length === 0) {
          const { data: newPipeline } = await supabase
            .from('crm_pipelines')
            .insert([{
              tenant_id: tenantId,
              name: 'Quy trình chuẩn',
              description: 'Quy trình chăm sóc khách hàng mặc định'
            }])
            .select()
            .single();

          if (newPipeline) {
            const { data: createdStages } = await supabase
              .from('crm_stages')
              .insert([
                { tenant_id: tenantId, pipeline_id: newPipeline.id, name: 'Mới (Leads)', order: 0 },
                { tenant_id: tenantId, pipeline_id: newPipeline.id, name: 'Đang xử lý', order: 1 },
                { tenant_id: tenantId, pipeline_id: newPipeline.id, name: 'Hoàn thành', order: 2 }
              ])
              .select('id, pipeline_id')
              .order('order', { ascending: true });
            stages = createdStages || [];
          }
        }

        const stageId = stages && stages.length > 0 ? stages[0].id : null;
        const pipelineId = stages && stages.length > 0 ? (stages[0] as any).pipeline_id : null;

        const { data: deal } = await supabase
          .from('crm_deals')
          .insert([{
            tenant_id: tenantId,
            pipeline_id: pipelineId,
            contact_id: contactId,
            title: `Lịch hẹn: ${body.service_name || 'Dịch vụ'} - ${body.customer_name}`,
            value: dealValue,
            stage_id: stageId,
            custom_data: {
              'Nguồn': 'Web Booking',
              'Dịch vụ': body.service_name || 'Dịch vụ tiêu chuẩn',
              'Ngày Hẹn': body.start_time
            }
          }])
          .select()
          .single();

        if (deal) {
          // Log Activity (include tenant_id so CRM DealDetailModal can query it)
          await supabase.from('crm_activities').insert([{
            tenant_id: tenantId,
            deal_id: deal.id,
            type: 'note',
            content: `🎯 Hệ thống: Khách hàng đã đặt lịch hẹn trên Web.\nDịch vụ: ${body.service_name || 'Dịch vụ tiêu chuẩn'}\nThời gian: ${new Date(body.start_time).toLocaleString('vi-VN')}\nGhi chú: ${body.notes || 'Không có'}`
          }]);
        }
      }
    } catch (crmError) {
      console.error('CRM Automation Error:', crmError);
      // We don't fail the booking if CRM automation fails
    }

    return NextResponse.json({ success: true, appointment });

  } catch (error: any) {
    console.error('Booking Error:', error);
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ tenantSlug: string }> }) {
  try {
    const { tenantSlug: tenantId } = await params;
    const url = new URL(request.url);
    const date = url.searchParams.get('date') || new Date().toISOString().split('T')[0];
    const resourceId = url.searchParams.get('resourceId');
    
    // Fetch all appointments for the date
    let query = supabase
      .from('booking_appointments')
      .select('*')
      .eq('tenant_id', tenantId)
      .gte('start_time', `${date}T00:00:00.000Z`)
      .lt('start_time', `${date}T23:59:59.999Z`)
      .neq('status', 'cancelled');
      
    if (resourceId) {
       query = query.eq('resource_id', resourceId);
    }
    
    const { data: appointments, error } = await query.order('start_time');
    if (error) throw error;
    
    const booked_slots = (appointments || []).map((a: any) => ({ start: a.start_time, end: a.end_time }));
    
    return NextResponse.json({ booked_slots }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
