import { NextResponse } from 'next/server';
import '@/lib/supabase/pgRestEngine';
import { adminSupabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tavi-super-secret-key-for-jwt-123';
const TRIAL_DAYS = 7;

function slugifyVietnamese(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      businessName,
      name,
      email,
      phone,
      address,
      tagline,
      password,
      templateKey = 'noi_that',
    } = body;

    if (!businessName || !email || !password) {
      return NextResponse.json(
        { error: 'Vui lòng nhập đầy đủ Tên doanh nghiệp/cửa hàng, Email và Mật khẩu.' },
        { status: 400 }
      );
    }

    if (String(password).length < 6) {
      return NextResponse.json(
        { error: 'Mật khẩu phải có ít nhất 6 ký tự.' },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    // 1. Check if email already exists in crm_users
    const { data: existingUser } = await adminSupabase
      .from('crm_users')
      .select('id')
      .ilike('email', normalizedEmail)
      .maybeSingle();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email này đã được đăng ký. Vui lòng đăng nhập hoặc dùng email khác.' },
        { status: 409 }
      );
    }

    // 2. Generate unique slug from businessName
    let baseSlug = slugifyVietnamese(businessName);
    if (!baseSlug || baseSlug.length < 2) {
      baseSlug = `web-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    let finalSlug = baseSlug;
    const { data: existingSlug } = await adminSupabase
      .from('tenants')
      .select('id')
      .eq('slug', finalSlug)
      .maybeSingle();

    if (existingSlug) {
      finalSlug = `${baseSlug}-${Math.floor(100 + Math.random() * 900)}`;
    }

    // 3. Calculate 7-day free trial expiration
    const trialExpiresAt = new Date(
      Date.now() + TRIAL_DAYS * 24 * 60 * 60 * 1000
    ).toISOString();

    const trimmedBusinessName = String(businessName).trim();
    const trimmedAddress = address ? String(address).trim() : 'Việt Nam';
    const trimmedPhone = phone ? String(phone).trim() : '';
    const trimmedTagline = tagline ? String(tagline).trim() : '';

    const websiteOverrides: Record<string, any> = {
      business: {
        name: trimmedBusinessName,
        address: trimmedAddress,
        phone: trimmedPhone || '0901234567',
        email: normalizedEmail,
      },
    };

    if (trimmedTagline) {
      websiteOverrides.hero = {
        title: trimmedBusinessName,
        subtitle: trimmedTagline,
      };
    }

    // 4. Create Tenant Workspace with 7-day trial
    const { data: tenant, error: tenantErr } = await adminSupabase
      .from('tenants')
      .insert([
        {
          name: trimmedBusinessName,
          slug: finalSlug,
          template_key: templateKey || 'noi_that',
          active_modules: ['crm', 'ecommerce', 'booking', 'cms', 'chatbot'],
          contact_info: {
            phone: trimmedPhone,
            email: normalizedEmail,
            address: trimmedAddress,
          },
          theme_config: {
            website_overrides: websiteOverrides,
          },
          package_id: null,
          package_name: 'Dùng thử 7 ngày (Free Trial)',
          ai_quota: 100,
          ai_used: 0,
          package_expires_at: trialExpiresAt,
        },
      ])
      .select()
      .single();

    if (tenantErr || !tenant) {
      console.error('Error creating tenant during register:', tenantErr);
      return NextResponse.json(
        { error: tenantErr?.message || 'Không thể khởi tạo không gian làm việc.' },
        { status: 500 }
      );
    }

    // 5. Create Admin User for this Tenant
    const hashedPassword = await bcrypt.hash(String(password), 10);
    const displayName = name ? String(name).trim() : trimmedBusinessName;

    const { data: newUser, error: userErr } = await adminSupabase
      .from('crm_users')
      .insert([
        {
          email: normalizedEmail,
          password_hash: hashedPassword,
          name: displayName,
          role: 'admin',
          tenant_id: tenant.id,
        },
      ])
      .select('id, name, email, role, tenant_id')
      .single();

    if (userErr || !newUser) {
      console.error('Error creating user during register:', userErr);
      await adminSupabase.from('tenants').delete().eq('id', tenant.id);
      return NextResponse.json(
        { error: userErr?.message || 'Không thể tạo tài khoản quản trị.' },
        { status: 500 }
      );
    }

    // 6. Sign JWT and set crm_token cookie
    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        name: newUser.name,
        tenant_id: tenant.id,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        tenant_id: tenant.id,
        tenant: {
          id: tenant.id,
          name: tenant.name,
          slug: tenant.slug,
          template_key: tenant.template_key,
          active_modules: tenant.active_modules,
          package_name: tenant.package_name,
          package_expires_at: tenant.package_expires_at,
        },
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
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'Lỗi hệ thống khi đăng ký tài khoản.' },
      { status: 500 }
    );
  }
}
