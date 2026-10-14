import pg from 'pg';
import bcrypt from 'bcryptjs';

const { Client } = pg;

const CONNECTION_STRING = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!CONNECTION_STRING) {
  throw new Error('Missing DIRECT_URL or DATABASE_URL environment variable');
}

const DEFAULT_TENANT_ID = '00000000-0000-0000-0000-000000000000';

async function main() {
  const client = new Client({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  console.log('Connected to PostgreSQL (afykilitmywbbgvwcsby)');

  const schemaSql = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS "vector";

    -- 0. Ensure leads table has all columns used by both Demo Renderer and Admin Leads Table
    ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS website TEXT;
    ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS facebook_url TEXT;
    ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS facebook_followers INTEGER;
    ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS facebook_email TEXT;
    ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new';
    ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS assigned_to UUID;

    -- 1. PACKAGES
    CREATE TABLE IF NOT EXISTS public.packages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      tier INTEGER NOT NULL,
      added_quota INTEGER NOT NULL,
      price_prod INTEGER NOT NULL,
      price_test INTEGER NOT NULL,
      features TEXT[] DEFAULT '{}',
      is_recommended BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 2. TENANTS
    CREATE TABLE IF NOT EXISTS public.tenants (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      custom_domain TEXT UNIQUE,
      template_key TEXT DEFAULT 'nha_khoa',
      active_modules JSONB DEFAULT '["crm", "booking", "leads", "cms", "lms", "edu", "chatbot"]'::jsonb,
      theme_config JSONB DEFAULT '{}'::jsonb,
      package_id UUID REFERENCES public.packages(id) ON DELETE SET NULL,
      package_name TEXT DEFAULT 'Gói Enterprise',
      ai_quota INTEGER DEFAULT 1000000,
      ai_used INTEGER DEFAULT 0,
      package_expires_at TIMESTAMPTZ,
      contact_info JSONB DEFAULT '{}'::jsonb,
      system_prompt TEXT,
      developer_api_key TEXT,
      webhook_url TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 3. TRANSACTIONS
    CREATE TABLE IF NOT EXISTS public.transactions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
      package_id UUID REFERENCES public.packages(id) ON DELETE SET NULL,
      transaction_code TEXT UNIQUE NOT NULL,
      amount INTEGER NOT NULL,
      duration_months INTEGER NOT NULL DEFAULT 1,
      status TEXT DEFAULT 'pending',
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 4. AUDIT LOGS
    CREATE TABLE IF NOT EXISTS public.audit_logs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID REFERENCES public.tenants(id) ON DELETE CASCADE,
      actor_id UUID,
      actor_type TEXT NOT NULL DEFAULT 'system',
      action TEXT NOT NULL,
      payload JSONB DEFAULT '{}'::jsonb,
      ip_address INET,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 5. AI KEYS
    CREATE TABLE IF NOT EXISTS public.ai_keys (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      key TEXT DEFAULT '',
      is_default BOOLEAN DEFAULT FALSE,
      status TEXT DEFAULT 'active',
      updated_at TIMESTAMPTZ DEFAULT now()
    );

    -- 6. KNOWLEDGE CHUNKS & RAG ANALYTICS
    CREATE TABLE IF NOT EXISTS public.knowledge_chunks (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
      content TEXT NOT NULL,
      embedding vector(768),
      source_type TEXT NOT NULL DEFAULT 'custom',
      fts tsvector GENERATED ALWAYS AS (to_tsvector('english', coalesce(content, ''))) STORED,
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS knowledge_chunks_fts_idx ON public.knowledge_chunks USING GIN (fts);

    CREATE TABLE IF NOT EXISTS public.rag_analytics (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
      question TEXT NOT NULL,
      answer TEXT,
      is_answered BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 7. CRM ROLES & USERS
    CREATE TABLE IF NOT EXISTS public.crm_roles (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      description TEXT,
      permissions JSONB NOT NULL DEFAULT '[]'::jsonb,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      email TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'sale',
      role_id UUID REFERENCES public.crm_roles(id) ON DELETE SET NULL,
      created_at TIMESTAMPTZ DEFAULT now(),
      UNIQUE (tenant_id, email)
    );

    -- 8. SYSTEM AUDIT LOGS
    CREATE TABLE IF NOT EXISTS public.system_audit_logs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      user_id UUID REFERENCES public.crm_users(id) ON DELETE SET NULL,
      module VARCHAR(50) NOT NULL,
      action VARCHAR(100) NOT NULL,
      entity_type VARCHAR(50),
      entity_id VARCHAR(255),
      description TEXT,
      details JSONB,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 9. CRM PIPELINES, STAGES, CONTACTS, DEALS, ACTIVITIES, CUSTOM FIELDS
    CREATE TABLE IF NOT EXISTS public.crm_pipelines (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      description TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_stages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      pipeline_id UUID REFERENCES public.crm_pipelines(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      "order" INTEGER NOT NULL DEFAULT 0,
      color TEXT DEFAULT 'bg-slate-200 text-slate-800',
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_contacts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      website TEXT,
      facebook_url TEXT,
      source TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_deals (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      pipeline_id UUID REFERENCES public.crm_pipelines(id) ON DELETE SET NULL,
      contact_id UUID REFERENCES public.crm_contacts(id) ON DELETE CASCADE,
      stage_id UUID REFERENCES public.crm_stages(id) ON DELETE SET NULL,
      assignee_id UUID REFERENCES public.crm_users(id) ON DELETE SET NULL,
      title TEXT NOT NULL,
      value NUMERIC DEFAULT 0,
      custom_data JSONB DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_activities (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      deal_id UUID REFERENCES public.crm_deals(id) ON DELETE CASCADE,
      user_id UUID REFERENCES public.crm_users(id) ON DELETE SET NULL,
      type TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_custom_fields (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      pipeline_id UUID REFERENCES public.crm_pipelines(id) ON DELETE CASCADE,
      entity_type TEXT DEFAULT 'deal',
      name TEXT NOT NULL,
      label TEXT NOT NULL DEFAULT '',
      type TEXT NOT NULL DEFAULT 'text',
      field_type TEXT DEFAULT 'text',
      options JSONB,
      required BOOLEAN DEFAULT FALSE,
      order_index INTEGER DEFAULT 0,
      "order" INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 10. CRM PRODUCTS, QUOTES, QUOTE ITEMS, KPIS
    CREATE TABLE IF NOT EXISTS public.crm_products (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      description TEXT,
      price NUMERIC NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_quotes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      deal_id UUID REFERENCES public.crm_deals(id) ON DELETE CASCADE,
      status TEXT NOT NULL DEFAULT 'draft',
      total_amount NUMERIC NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_quote_items (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      quote_id UUID REFERENCES public.crm_quotes(id) ON DELETE CASCADE,
      product_id UUID REFERENCES public.crm_products(id) ON DELETE SET NULL,
      product_name TEXT NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      unit_price NUMERIC NOT NULL DEFAULT 0,
      total NUMERIC NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_kpis (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      user_id UUID REFERENCES public.crm_users(id) ON DELETE CASCADE,
      target_deals INTEGER DEFAULT 10,
      target_revenue NUMERIC NOT NULL DEFAULT 0,
      period TEXT DEFAULT 'month',
      month INTEGER DEFAULT EXTRACT(MONTH FROM CURRENT_DATE),
      year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
      start_date DATE DEFAULT CURRENT_DATE,
      end_date DATE DEFAULT (CURRENT_DATE + INTERVAL '30 days')::date,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 11. BOOKING TABLES
    CREATE TABLE IF NOT EXISTS public.booking_resources (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      type TEXT NOT NULL DEFAULT 'staff',
      role_or_capacity TEXT DEFAULT 'Kỹ thuật viên',
      capacity INTEGER DEFAULT 1,
      status TEXT DEFAULT 'active',
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.booking_services (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      description TEXT DEFAULT '',
      duration_minutes INTEGER NOT NULL DEFAULT 60,
      price NUMERIC DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.booking_customers (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.booking_appointments (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      customer_id UUID REFERENCES public.booking_customers(id) ON DELETE SET NULL,
      customer_name TEXT,
      customer_phone TEXT,
      resource_id UUID REFERENCES public.booking_resources(id) ON DELETE SET NULL,
      service_id UUID REFERENCES public.booking_services(id) ON DELETE SET NULL,
      service_name TEXT,
      start_time TIMESTAMPTZ NOT NULL,
      end_time TIMESTAMPTZ NOT NULL,
      status TEXT DEFAULT 'pending',
      notes TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 12. CMS TABLES
    CREATE TABLE IF NOT EXISTS public.posts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      slug TEXT NOT NULL,
      content TEXT,
      author_id UUID,
      status TEXT DEFAULT 'draft',
      thumbnail_url TEXT,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now(),
      UNIQUE(tenant_id, slug)
    );

    CREATE TABLE IF NOT EXISTS public.categories (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      UNIQUE(tenant_id, slug)
    );

    CREATE TABLE IF NOT EXISTS public.post_categories (
      post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE,
      category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
      PRIMARY KEY (post_id, category_id)
    );

    CREATE TABLE IF NOT EXISTS public.media (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      url TEXT NOT NULL,
      alt_text TEXT,
      uploaded_by UUID,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    -- 13. LMS & EDU TABLES
    CREATE TABLE IF NOT EXISTS public.courses (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      slug TEXT NOT NULL,
      description TEXT,
      thumbnail_url TEXT,
      price NUMERIC(12, 2) DEFAULT 0,
      status TEXT DEFAULT 'draft',
      instructor_id UUID,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now(),
      UNIQUE(tenant_id, slug)
    );

    CREATE TABLE IF NOT EXISTS public.modules (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      order_index INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.lessons (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      module_id UUID NOT NULL REFERENCES public.modules(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      content TEXT,
      video_url TEXT,
      order_index INTEGER DEFAULT 0,
      is_free_preview BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.enrollments (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
      student_id UUID NOT NULL,
      status TEXT DEFAULT 'active',
      enrolled_at TIMESTAMPTZ DEFAULT now(),
      UNIQUE(course_id, student_id)
    );

    CREATE TABLE IF NOT EXISTS public.progress (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      enrollment_id UUID NOT NULL REFERENCES public.enrollments(id) ON DELETE CASCADE,
      lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
      is_completed BOOLEAN DEFAULT FALSE,
      last_accessed TIMESTAMPTZ DEFAULT now(),
      UNIQUE(enrollment_id, lesson_id)
    );

    CREATE TABLE IF NOT EXISTS public.crm_courses (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DECIMAL(12, 2) DEFAULT 0,
      status VARCHAR(50) DEFAULT 'active',
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_classes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      course_id UUID REFERENCES public.crm_courses(id) ON DELETE CASCADE,
      teacher_id UUID REFERENCES public.crm_users(id) ON DELETE SET NULL,
      name VARCHAR(255) NOT NULL,
      schedule_desc TEXT,
      google_meet_link VARCHAR(255),
      status VARCHAR(50) DEFAULT 'upcoming',
      start_date DATE,
      end_date DATE,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_enrollments (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      contact_id UUID REFERENCES public.crm_contacts(id) ON DELETE CASCADE,
      class_id UUID REFERENCES public.crm_classes(id) ON DELETE CASCADE,
      deal_id UUID REFERENCES public.crm_deals(id) ON DELETE SET NULL,
      payment_status VARCHAR(50) DEFAULT 'pending',
      amount_paid DECIMAL(12, 2) DEFAULT 0,
      status VARCHAR(50) DEFAULT 'active',
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_materials (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      class_id UUID REFERENCES public.crm_classes(id) ON DELETE CASCADE,
      course_id UUID REFERENCES public.crm_courses(id) ON DELETE CASCADE,
      title VARCHAR(255) NOT NULL,
      file_url TEXT NOT NULL,
      file_type VARCHAR(50),
      is_ai_embedded BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_class_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      class_id UUID NOT NULL REFERENCES public.crm_classes(id) ON DELETE CASCADE,
      title TEXT NOT NULL,
      date TIMESTAMPTZ NOT NULL,
      status TEXT DEFAULT 'scheduled',
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS public.crm_attendance (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      tenant_id UUID NOT NULL DEFAULT '${DEFAULT_TENANT_ID}' REFERENCES public.tenants(id) ON DELETE CASCADE,
      session_id UUID REFERENCES public.crm_class_sessions(id) ON DELETE CASCADE,
      class_id UUID REFERENCES public.crm_classes(id) ON DELETE CASCADE,
      contact_id UUID NOT NULL REFERENCES public.crm_contacts(id) ON DELETE CASCADE,
      date DATE DEFAULT CURRENT_DATE,
      status TEXT NOT NULL DEFAULT 'present',
      notes TEXT,
      note TEXT,
      created_at TIMESTAMPTZ DEFAULT now(),
      UNIQUE(session_id, contact_id)
    );

    -- 14. RPC FUNCTIONS
    CREATE OR REPLACE FUNCTION increment_ai_used(tenant_id uuid, amount int)
    RETURNS void AS $$
    BEGIN
      UPDATE public.tenants
      SET ai_used = COALESCE(ai_used, 0) + amount
      WHERE id = tenant_id;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;

    CREATE OR REPLACE FUNCTION hybrid_search_knowledge(
        query_text text,
        query_embedding vector(768),
        match_count int,
        p_tenant_id uuid
    ) RETURNS TABLE (
        id uuid,
        tenant_id uuid,
        content text,
        source_type text,
        embedding vector(768),
        created_at timestamptz,
        similarity float,
        rank int
    )
    LANGUAGE plpgsql
    AS $$
    BEGIN
        RETURN QUERY
        WITH semantic_search AS (
            SELECT kc.*, 1 - (kc.embedding <=> query_embedding) AS similarity, 
            ROW_NUMBER() OVER(ORDER BY kc.embedding <=> query_embedding) AS rank_semantic
            FROM public.knowledge_chunks kc
            WHERE kc.tenant_id = p_tenant_id
            ORDER BY kc.embedding <=> query_embedding
            LIMIT match_count * 2
        ),
        keyword_search AS (
            SELECT kc.*, ts_rank(kc.fts, plainto_tsquery('english', query_text)) AS similarity,
            ROW_NUMBER() OVER(ORDER BY ts_rank(kc.fts, plainto_tsquery('english', query_text)) DESC) AS rank_keyword
            FROM public.knowledge_chunks kc
            WHERE kc.tenant_id = p_tenant_id AND kc.fts @@ plainto_tsquery('english', query_text)
            ORDER BY ts_rank(kc.fts, plainto_tsquery('english', query_text)) DESC
            LIMIT match_count * 2
        ),
        rrf AS (
            SELECT COALESCE(ss.id, ks.id) as chunk_id,
            COALESCE(1.0 / (60 + ss.rank_semantic), 0.0) + COALESCE(1.0 / (60 + ks.rank_keyword), 0.0) as rrf_score
            FROM semantic_search ss
            FULL OUTER JOIN keyword_search ks ON ss.id = ks.id
        )
        SELECT kc.id, kc.tenant_id, kc.content, kc.source_type, kc.embedding, kc.created_at, rrf.rrf_score::float as similarity,
        ROW_NUMBER() OVER(ORDER BY rrf.rrf_score DESC)::int as rank
        FROM rrf
        JOIN public.knowledge_chunks kc ON kc.id = rrf.chunk_id
        ORDER BY rrf.rrf_score DESC
        LIMIT match_count;
    END;
    $$;
  `;

  await client.query(schemaSql);
  console.log('All tables and RPC functions created/verified.');

  // Seed Packages
  const { rowCount: pkgCount } = await client.query('SELECT 1 FROM public.packages LIMIT 1');
  if (!pkgCount) {
    await client.query(`
      INSERT INTO public.packages (name, tier, added_quota, price_prod, price_test, features, is_recommended) VALUES
      ('Gói Cơ Bản', 1, 100000, 199000, 2000, '{"1 Website chuyên nghiệp", "Hỗ trợ chuẩn SEO", "100.000 Token AI"}', false),
      ('Gói Tiêu Chuẩn', 2, 500000, 499000, 5000, '{"Tất cả tính năng Gói Cơ Bản", "Hỗ trợ đa ngôn ngữ", "Hỗ trợ kỹ thuật 24/7", "500.000 Token AI"}', true),
      ('Gói Nâng Cao', 3, 2000000, 999000, 10000, '{"Tất cả tính năng Gói Tiêu Chuẩn", "Bảo mật nâng cao", "Cấu hình Server riêng", "2.000.000 Token AI"}', false),
      ('Gói Enterprise', 4, 10000000, 4999000, 50000, '{"Tất cả tính năng Gói Nâng Cao", "Thiết kế giao diện độc quyền", "Đội ngũ support riêng biệt", "Không giới hạn Token AI"}', false);
    `);
    console.log('Seeded packages.');
  }

  // Seed Default Tenant + Sample Tenants
  await client.query(`
    INSERT INTO public.tenants (id, name, slug, template_key, active_modules, ai_quota, package_name, system_prompt)
    VALUES (
      '${DEFAULT_TENANT_ID}',
      'TAVI SaaS',
      'tavi',
      'nha_khoa',
      '["crm", "booking", "leads", "cms", "lms", "edu", "chatbot"]'::jsonb,
      5000000,
      'Gói Enterprise',
      'Bạn là trợ lý ảo chăm sóc khách hàng và tư vấn dịch vụ của TaviWeb.'
    )
    ON CONFLICT (slug) DO UPDATE SET
      active_modules = '["crm", "booking", "leads", "cms", "lms", "edu", "chatbot"]'::jsonb,
      ai_quota = GREATEST(public.tenants.ai_quota, 5000000);
  `);

  // Seed Roles
  let adminRoleId, saleRoleId;
  const { rows: existingRoles } = await client.query('SELECT id, name FROM public.crm_roles WHERE tenant_id = $1', [DEFAULT_TENANT_ID]);
  if (existingRoles.length === 0) {
    const r1 = await client.query(
      `INSERT INTO public.crm_roles (tenant_id, name, description, permissions)
       VALUES ($1, 'Quản trị viên', 'Có toàn quyền trên hệ thống', '["view_all_deals", "edit_all_deals", "delete_deals", "manage_pipelines", "manage_users", "manage_roles", "manage_settings"]'::jsonb)
       RETURNING id`,
      [DEFAULT_TENANT_ID]
    );
    const r2 = await client.query(
      `INSERT INTO public.crm_roles (tenant_id, name, description, permissions)
       VALUES ($1, 'Nhân viên Sale', 'Quyền xem và xử lý Deal được giao', '["view_own_deals", "edit_own_deals"]'::jsonb)
       RETURNING id`,
      [DEFAULT_TENANT_ID]
    );
    adminRoleId = r1.rows[0].id;
    saleRoleId = r2.rows[0].id;
  } else {
    adminRoleId = existingRoles.find(r => r.name === 'Quản trị viên')?.id || existingRoles[0].id;
    saleRoleId = existingRoles.find(r => r.name === 'Nhân viên Sale')?.id || existingRoles[0].id;
  }

  // Seed Users (admin / admin123, sale1 / pass1, sale2 / pass2)
  const adminHash = await bcrypt.hash('admin123', 10);
  const sale1Hash = await bcrypt.hash('pass1', 10);
  const sale2Hash = await bcrypt.hash('pass2', 10);

  const usersToSeed = [
    { email: 'admin', name: 'Super Admin', role: 'admin', roleId: adminRoleId, hash: adminHash },
    { email: 'admin@taviweb.com', name: 'Super Admin (Email)', role: 'admin', roleId: adminRoleId, hash: adminHash },
    { email: 'sale1', name: 'Nguyễn Văn Sale 1', role: 'sale', roleId: saleRoleId, hash: sale1Hash },
    { email: 'sale2', name: 'Trần Thị Sale 2', role: 'sale', roleId: saleRoleId, hash: sale2Hash },
  ];

  for (const u of usersToSeed) {
    await client.query(
      `INSERT INTO public.crm_users (tenant_id, email, password_hash, name, role, role_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (tenant_id, email) DO UPDATE SET
         password_hash = EXCLUDED.password_hash,
         role = EXCLUDED.role,
         role_id = EXCLUDED.role_id`,
      [DEFAULT_TENANT_ID, u.email, u.hash, u.name, u.role, u.roleId]
    );
  }
  console.log('Seeded crm_users: admin/admin123, sale1/pass1, sale2/pass2.');

  // Seed Default Pipeline & Stages
  const { rows: pipelines } = await client.query('SELECT id FROM public.crm_pipelines WHERE tenant_id = $1 LIMIT 1', [DEFAULT_TENANT_ID]);
  if (pipelines.length === 0) {
    const { rows: newPipe } = await client.query(
      `INSERT INTO public.crm_pipelines (tenant_id, name, description)
       VALUES ($1, 'Quy trình Sale Chuẩn', 'Pipeline bán hàng mặc định') RETURNING id`,
      [DEFAULT_TENANT_ID]
    );
    const pipeId = newPipe[0].id;
    const stages = [
      { name: 'Khách Mới', order: 1, color: 'bg-blue-100 text-blue-800' },
      { name: 'Đã Gọi Tư Vấn', order: 2, color: 'bg-indigo-100 text-indigo-800' },
      { name: 'Đã Gửi Demo / Báo Giá', order: 3, color: 'bg-amber-100 text-amber-800' },
      { name: 'Đang Đàm Phán', order: 4, color: 'bg-purple-100 text-purple-800' },
      { name: 'Chốt Deal (Won)', order: 5, color: 'bg-emerald-100 text-emerald-800' },
      { name: 'Từ Chối (Lost)', order: 6, color: 'bg-rose-100 text-rose-800' },
    ];
    for (const st of stages) {
      await client.query(
        `INSERT INTO public.crm_stages (tenant_id, pipeline_id, name, "order", color)
         VALUES ($1, $2, $3, $4, $5)`,
        [DEFAULT_TENANT_ID, pipeId, st.name, st.order, st.color]
      );
    }
    console.log('Seeded default pipeline and stages.');
  }

  // Seed Default Products
  const { rowCount: prodCount } = await client.query('SELECT 1 FROM public.crm_products WHERE tenant_id = $1 LIMIT 1', [DEFAULT_TENANT_ID]);
  if (!prodCount) {
    await client.query(
      `INSERT INTO public.crm_products (tenant_id, name, description, price) VALUES
       ($1, 'Gói Web Cơ Bản', 'Website giới thiệu chuẩn SEO, giao diện mẫu ngành', 3500000),
       ($1, 'Gói Web + CRM + Booking', 'Website kèm hệ thống quản lý khách hàng & đặt lịch', 7500000),
       ($1, 'Gói All-in-One AI Pro', 'Full tính năng Website, CRM, Booking, CMS AI & Chatbot RAG', 15000000)`,
      [DEFAULT_TENANT_ID]
    );
    console.log('Seeded crm_products.');
  }

  // Seed Default Booking Services & Resources
  const { rowCount: srvCount } = await client.query('SELECT 1 FROM public.booking_services WHERE tenant_id = $1 LIMIT 1', [DEFAULT_TENANT_ID]);
  if (!srvCount) {
    await client.query(
      `INSERT INTO public.booking_services (tenant_id, name, description, duration_minutes, price) VALUES
       ($1, 'Tư vấn Giải pháp Website & AI', 'Buổi demo trực tiếp 1-1 cùng chuyên gia', 45, 0),
       ($1, 'Khám & Tư vấn Nha khoa Tổng quát', 'Dịch vụ mẫu cho ngành Nha khoa', 60, 300000),
       ($1, 'Chăm sóc da chuyên sâu Luxury', 'Dịch vụ mẫu cho ngành Spa / Thẩm mỹ', 90, 650000)`,
      [DEFAULT_TENANT_ID]
    );
    await client.query(
      `INSERT INTO public.booking_resources (tenant_id, name, type, role_or_capacity, capacity, status) VALUES
       ($1, 'Chuyên viên Tư vấn 01', 'staff', 'Senior Consultant', 1, 'active'),
       ($1, 'Bác sĩ Minh Quân', 'staff', 'Trưởng khoa', 1, 'active'),
       ($1, 'Phòng VIP 01', 'room', '2 giường', 2, 'active')`,
      [DEFAULT_TENANT_ID]
    );
    console.log('Seeded booking services and resources.');
  }

  // Seed AI Keys providers
  const { rowCount: aiKeyCount } = await client.query('SELECT 1 FROM public.ai_keys LIMIT 1');
  if (!aiKeyCount) {
    await client.query(`
      INSERT INTO public.ai_keys (id, name, key, is_default, status) VALUES
      ('gemini', 'Google Gemini', '', true, 'active'),
      ('openai', 'OpenAI GPT', '', false, 'inactive'),
      ('anthropic', 'Anthropic Claude', '', false, 'inactive')
      ON CONFLICT (id) DO NOTHING;
    `);
  }

  await client.end();
  console.log('=== UNIFIED DB INITIALIZATION COMPLETE ===');
}

main().catch(err => {
  console.error('Fatal DB Init Error:', err);
  process.exit(1);
});
