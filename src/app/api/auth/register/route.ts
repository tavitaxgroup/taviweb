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

    // 5b. Auto-seed Default CRM Pipeline, Stages, and Booking Resources/Services for immediate 7-day trial experience
    try {
      const { data: defaultPipeline } = await adminSupabase
        .from('crm_pipelines')
        .insert([
          {
            tenant_id: tenant.id,
            name: 'Quy trình chuẩn',
            description: 'Quy trình chăm sóc khách hàng mặc định',
          },
        ])
        .select()
        .single();

      if (defaultPipeline) {
        await adminSupabase.from('crm_stages').insert([
          { tenant_id: tenant.id, pipeline_id: defaultPipeline.id, name: 'Mới (Leads)', order: 0 },
          { tenant_id: tenant.id, pipeline_id: defaultPipeline.id, name: 'Đang tư vấn', order: 1 },
          { tenant_id: tenant.id, pipeline_id: defaultPipeline.id, name: 'Đã gửi báo giá', order: 2 },
          { tenant_id: tenant.id, pipeline_id: defaultPipeline.id, name: 'Chốt thành công', order: 3 },
        ]);
      }

      const isMedicalOrDental = ['nha_khoa', 'phong_kham'].includes(templateKey);
      const isDining = ['nha_hang', 'quan_cafe'].includes(templateKey);

      const defaultResources = isMedicalOrDental
        ? [
            { tenant_id: tenant.id, name: 'BS. Nguyễn Minh Tuấn', type: 'resource', role_or_capacity: 'Bác sĩ Chuyên khoa I', status: 'active' },
            { tenant_id: tenant.id, name: 'BS. Trần Thanh Hà', type: 'resource', role_or_capacity: 'Bác sĩ Tư vấn & Điều trị', status: 'active' },
            { tenant_id: tenant.id, name: 'Phòng khám VIP 01', type: 'resource', role_or_capacity: 'Phòng tiêu chuẩn quốc tế', status: 'active' },
          ]
        : isDining
        ? [
            { tenant_id: tenant.id, name: 'Bàn VIP 01 (Cửa sổ)', type: 'resource', role_or_capacity: '4 - 6 Khách', status: 'active' },
            { tenant_id: tenant.id, name: 'Bàn Gia Đình 02', type: 'resource', role_or_capacity: '6 - 10 Khách', status: 'active' },
            { tenant_id: tenant.id, name: 'Phòng Riêng Private', type: 'resource', role_or_capacity: '10 - 15 Khách', status: 'active' },
          ]
        : [
            { tenant_id: tenant.id, name: 'Chuyên viên Minh Anh', type: 'resource', role_or_capacity: 'Senior Specialist', status: 'active' },
            { tenant_id: tenant.id, name: 'Chuyên viên Hoàng Nam', type: 'resource', role_or_capacity: 'Tư vấn trưởng', status: 'active' },
            { tenant_id: tenant.id, name: 'Phòng Dịch Vụ VIP 01', type: 'resource', role_or_capacity: 'Khu vực ưu tiên', status: 'active' },
          ];

      const defaultServices = isMedicalOrDental
        ? [
            { tenant_id: tenant.id, name: 'Khám & Tư vấn chuyên sâu 1-1', duration_minutes: 45, price: 300000 },
            { tenant_id: tenant.id, name: 'Gói Chăm sóc & Điều trị tiêu chuẩn', duration_minutes: 60, price: 1200000 },
            { tenant_id: tenant.id, name: 'Gói Thẩm mỹ / Phục hồi cao cấp', duration_minutes: 90, price: 3500000 },
          ]
        : isDining
        ? [
            { tenant_id: tenant.id, name: 'Đặt bàn Set Menu Trưa / Tối', duration_minutes: 90, price: 450000 },
            { tenant_id: tenant.id, name: 'Tiệc Kỷ niệm / Sinh nhật trang trí riêng', duration_minutes: 120, price: 1800000 },
            { tenant_id: tenant.id, name: 'Tiệc Tiếp đối tác Phòng VIP', duration_minutes: 120, price: 3500000 },
          ]
        : [
            { tenant_id: tenant.id, name: 'Tư vấn & Khảo sát nhu cầu trực tiếp', duration_minutes: 45, price: 0 },
            { tenant_id: tenant.id, name: 'Gói Dịch vụ Tiêu chuẩn (Standard)', duration_minutes: 60, price: 850000 },
            { tenant_id: tenant.id, name: 'Gói Dịch vụ Cao cấp (VIP / Trọn gói)', duration_minutes: 90, price: 2500000 },
          ];

      await adminSupabase.from('booking_resources').insert(defaultResources);
      await adminSupabase.from('booking_services').insert(defaultServices);
      await adminSupabase.from('crm_products').insert(
        defaultServices.map((s) => ({
          tenant_id: tenant.id,
          name: s.name,
          description: `Thời lượng dự kiến: ${s.duration_minutes} phút`,
          price: s.price || 1500000,
        }))
      );
    } catch (seedErr) {
      console.warn('Non-fatal seed error during registration:', seedErr);
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
