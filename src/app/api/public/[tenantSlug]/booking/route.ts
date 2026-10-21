import { NextResponse } from 'next/server';
import '@/lib/supabase/pgRestEngine';
import { supabase } from '@/lib/supabase';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ tenantSlug: string }> }
) {
  try {
    const { tenantSlug: tenantId } = await params; // Receives tenant UUID from PublicBookingForm
    const body = await request.json();

    // 1. Create Booking Appointment
    const { data: appointment, error: appointmentError } = await supabase
      .from('booking_appointments')
      .insert([
        {
          resource_id: body.resource_id || null,
          service_id: body.service_id || null,
          service_name: body.service_name || null,
          customer_name: body.customer_name,
          customer_phone: body.customer_phone,
          start_time: body.start_time,
          end_time: body.end_time,
          status: body.status || 'pending',
          notes: body.notes || 'Đặt lịch trực tuyến trên Website',
          tenant_id: tenantId,
        },
      ])
      .select()
      .single();

    if (appointmentError) {
      if (
        appointmentError.message &&
        appointmentError.message.includes('double_booking_error')
      ) {
        return NextResponse.json(
          {
            error: 'double_booking',
            message:
              'Rất tiếc, khung giờ này vừa có người đặt trước. Vui lòng chọn khung giờ khác.',
          },
          { status: 409 }
        );
      }
      throw appointmentError;
    }

    // 2. Automations: Sync directly into CRM Contacts, Deals & Tasks
    try {
      let contactId: string | null = null;
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
            .insert([
              {
                tenant_id: tenantId,
                name: body.customer_name,
                phone: body.customer_phone,
                email: body.customer_email || null,
              },
            ])
            .select()
            .single();
          contactId = newContact?.id || null;
        }
      }

      if (contactId) {
        let dealValue = Number(body.service_price || 0);
        let resolvedServiceName = body.service_name || 'Dịch vụ tiêu chuẩn';
        if (body.service_id) {
          const { data: svcData } = await supabase
            .from('booking_services')
            .select('name, price')
            .eq('id', body.service_id)
            .maybeSingle();
          if (svcData) {
            if (!dealValue && svcData.price) {
              dealValue = Number(svcData.price) || 0;
            }
            if (!body.service_name && svcData.name) {
              resolvedServiceName = svcData.name;
            }
          }
        }

        let { data: stages } = await supabase
          .from('crm_stages')
          .select('id, name, pipeline_id, order')
          .eq('tenant_id', tenantId)
          .order('order', { ascending: true });

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
                  name: 'Đã liên hệ & Tư vấn',
                  order: 1,
                },
                {
                  tenant_id: tenantId,
                  pipeline_id: newPipeline.id,
                  name: 'Đã đặt lịch hẹn',
                  order: 2,
                },
              ])
              .select('id, name, pipeline_id, order')
              .order('order', { ascending: true });
            stages = createdStages || [];
          }
        }

        // Prefer stage matching "đặt lịch" if available, otherwise first stage
        const bookingStage =
          stages?.find((s: any) =>
            String(s.name || '')
              .toLowerCase()
              .includes('đặt lịch')
          ) || stages?.[0];

        const stageId = bookingStage ? bookingStage.id : null;
        const pipelineId = bookingStage ? (bookingStage as any).pipeline_id : null;

        const formattedTime = body.start_time
          ? new Date(body.start_time).toLocaleString('vi-VN', {
              hour: '2-digit',
              minute: '2-digit',
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          : '';

        const { data: deal } = await supabase
          .from('crm_deals')
          .insert([
            {
              tenant_id: tenantId,
              pipeline_id: pipelineId,
              contact_id: contactId,
              title: `${resolvedServiceName} — ${body.customer_name}`,
              value: dealValue,
              stage_id: stageId,
              custom_data: {
                'Nguồn khách hàng': 'Web Booking',
                'Dịch vụ quan tâm': resolvedServiceName,
                'Hạng thẻ Thành viên': 'Member',
                'Chi nhánh đăng ký': body.branch || 'Quận 1 - Đồng Khởi',
                'Giờ hẹn': formattedTime,
              },
            },
          ])
          .select()
          .single();

        if (deal) {
          await supabase.from('crm_activities').insert([
            {
              tenant_id: tenantId,
              deal_id: deal.id,
              type: 'appointment',
              content: `Khách đặt lịch trực tuyến trên Website.\n• Dịch vụ: ${resolvedServiceName}\n• Thời gian hẹn: ${formattedTime}\n• Ghi chú: ${body.notes || 'Không có'}`,
            },
            {
              tenant_id: tenantId,
              deal_id: deal.id,
              type: 'task',
              content: `Gọi xác nhận lịch hẹn ${resolvedServiceName} với ${body.customer_name} (${body.customer_phone})`,
              task_due_date: new Date(Date.now() + 3600 * 1000).toISOString(),
              is_completed: false,
            },
          ]);
        }
      }
    } catch (crmError) {
      console.error('CRM Automation Error:', crmError);
    }

    return NextResponse.json({ success: true, appointment });
  } catch (error: any) {
    console.error('Booking Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ tenantSlug: string }> }
) {
  try {
    const { tenantSlug: tenantId } = await params;
    const url = new URL(request.url);
    const date =
      url.searchParams.get('date') || new Date().toISOString().split('T')[0];
    const resourceId = url.searchParams.get('resourceId');

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

    const booked_slots = (appointments || []).map((a: any) => ({
      start: a.start_time,
      end: a.end_time,
    }));

    return NextResponse.json({ booked_slots }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
