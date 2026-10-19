import { getAllLeads } from '@/lib/data';
import LeadsClientView from './LeadsClientView';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SYSTEM_TENANT_IDS = new Set([
  '00000000-0000-0000-0000-000000000000',
  '6064025b-7fe4-4840-a27f-2d5da65e15fa',
]);

export default async function LeadsDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('crm_token')?.value;

  if (!token) {
    return (
      <div className="p-8">
        <h2>Chưa đăng nhập. Vui lòng quay lại trang đăng nhập.</h2>
      </div>
    );
  }

  let user: any = null;
  try {
    user = jwt.verify(token, process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123');
  } catch (err) {
    return <div className="p-8">Phiên đăng nhập không hợp lệ.</div>;
  }

  if (!user?.tenant_id) {
    return <div className="p-8">Không tìm thấy thông tin tenant.</div>;
  }

  const isSuperAdmin =
    user.role === 'superadmin' ||
    (user.role === 'admin' && SYSTEM_TENANT_IDS.has(user.tenant_id));
  const isSale = user.role === 'sale';

  if (!isSuperAdmin && !isSale) {
    return (
      <div className="p-8">
        <h2>Bạn không có quyền truy cập trang này.</h2>
      </div>
    );
  }

  const leads = await getAllLeads(user.tenant_id, isSuperAdmin, isSale ? user.id : undefined);

  let salesUsers: any[] = [];
  if (isSuperAdmin) {
    const { supabase } = await import('@/lib/supabase');
    const { data } = await supabase.from('crm_users').select('id, name').eq('role', 'sale');
    if (data) salesUsers = data;
  }

  return (
    <div className="min-h-full bg-slate-50 p-6 md:p-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Kho Dữ Liệu Khách Hàng Tiềm Năng (Leads)
            </h1>
            <p className="text-slate-500 mt-1 text-sm font-medium">
              Quản lý, lọc website/fanpage, tạo link Demo tự động và phân bổ cho đội ngũ Sale.
            </p>
          </div>
        </div>

        <LeadsClientView leads={leads} isSuperAdmin={isSuperAdmin} salesUsers={salesUsers} />
      </div>
    </div>
  );
}
