import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import '@/lib/supabase/pgRestEngine';
import { adminSupabase } from '@/lib/supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';
export const DEFAULT_SYSTEM_TENANT_ID = '00000000-0000-0000-0000-000000000000';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('crm_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Không tìm thấy phiên đăng nhập' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;

    const { data: user, error } = await adminSupabase
      .from('crm_users')
      .select('id, name, email, role, role_id, tenant_id, role_data:crm_roles(*), tenant:tenants(id, name, slug, template_key, active_modules, package_name, package_expires_at)')
      .eq('id', decoded.id)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: 'Tài khoản không tồn tại' }, { status: 401 });
    }

    const roleData = Array.isArray(user.role_data) ? user.role_data[0] : user.role_data;
    const tenantData = Array.isArray(user.tenant) ? user.tenant[0] : user.tenant;

    const userData = {
      ...user,
      tenant_id: user.tenant_id || DEFAULT_SYSTEM_TENANT_ID,
      permissions: roleData?.permissions || [],
      role_data: roleData,
      tenant: tenantData || {
        name: 'TAVIWEB',
        slug: 'tavi',
        template_key: 'fashion',
        active_modules: ['crm', 'ecommerce', 'booking', 'leads', 'cms', 'lms', 'edu', 'chatbot'],
      },
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    return NextResponse.json({ error: 'Phiên đăng nhập hết hạn hoặc không hợp lệ' }, { status: 401 });
  }
}
