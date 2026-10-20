import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { adminSupabase } from '@/lib/supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('crm_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const tenantId = decoded.tenant_id;

    if (!tenantId) {
      return NextResponse.json({ error: 'No tenant context' }, { status: 400 });
    }

    const [bookingsRes, remindersRes, dealsRes] = await Promise.all([
      adminSupabase
        .from('booking_appointments')
        .select('id, customer_name, service_name, start_time, created_at, status')
        .eq('tenant_id', tenantId)
        .order('created_at', { ascending: false })
        .limit(5),
      adminSupabase
        .from('crm_activities')
        .select('id, deal_id, content, created_at')
        .eq('tenant_id', tenantId)
        .ilike('content', '⏰ NHẮC LỊCH:%')
        .order('created_at', { ascending: false })
        .limit(5),
      adminSupabase
        .from('crm_deals')
        .select('id, title, value, created_at')
        .eq('tenant_id', tenantId)
        .order('created_at', { ascending: false })
        .limit(4),
    ]);

    const notifications: any[] = [];

    if (bookingsRes.data) {
      bookingsRes.data.forEach((b: any) => {
        notifications.push({
          id: `book-${b.id}`,
          title: `Lịch hẹn: ${b.customer_name || 'Khách vãng lai'}`,
          message: `${b.service_name || 'Dịch vụ'} · ${new Date(b.start_time).toLocaleString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
          })}`,
          created_at: b.created_at,
          time: new Date(b.created_at).getTime(),
          type: 'booking',
          link: '/admin/booking/admin',
        });
      });
    }

    if (remindersRes.data) {
      remindersRes.data.forEach((r: any) => {
        const cleanText = String(r.content || '').replace(/^⏰\s*NHẮC LỊCH:\s*/i, '');
        notifications.push({
          id: `rem-${r.id}`,
          title: 'Nhắc lịch chăm sóc khách (CRM)',
          message: cleanText,
          created_at: r.created_at,
          time: new Date(r.created_at).getTime(),
          type: 'reminder',
          link: '/admin/crm',
        });
      });
    }

    if (dealsRes.data) {
      dealsRes.data.forEach((d: any) => {
        const valFormatted = new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(d.value || 0);
        notifications.push({
          id: `deal-${d.id}`,
          title: `Cơ hội mới: ${d.title}`,
          message: `Giá trị dự kiến: ${valFormatted}`,
          created_at: d.created_at,
          time: new Date(d.created_at).getTime(),
          type: 'deal',
          link: '/admin/crm',
        });
      });
    }

    notifications.sort((a, b) => b.time - a.time);

    return NextResponse.json({ notifications: notifications.slice(0, 10) });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
