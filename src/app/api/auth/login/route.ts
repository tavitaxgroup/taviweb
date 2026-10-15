import { NextResponse } from 'next/server';
import { adminSupabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Vui lòng nhập đầy đủ tài khoản/email và mật khẩu' },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    const { data: user, error } = await adminSupabase
      .from('crm_users')
      .select('id, name, email, role, password_hash, tenant_id, tenant:tenants(id, name, slug, template_key, active_modules)')
      .ilike('email', normalizedEmail)
      .maybeSingle();

    if (error || !user) {
      return NextResponse.json(
        { error: 'Tài khoản hoặc mật khẩu không chính xác' },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return NextResponse.json(
        { error: 'Tài khoản hoặc mật khẩu không chính xác' },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        tenant_id: user.tenant_id || '00000000-0000-0000-0000-000000000000',
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const tenantData = Array.isArray(user.tenant) ? user.tenant[0] : user.tenant;

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        tenant_id: user.tenant_id || '00000000-0000-0000-0000-000000000000',
        tenant: tenantData || undefined,
      },
    });

    response.cookies.set({
      name: 'crm_token',
      value: token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Lỗi hệ thống khi đăng nhập' }, { status: 500 });
  }
}
