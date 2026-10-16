import pg from 'pg';
const { Pool } = pg;
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  const tenants = [
    {
      slug: 'beauty-spa',
      name: 'Tavi Beauty Spa',
      email: 'admin@beautyspa.com',
      password: 'demo',
      modules: '["crm", "booking", "ai"]',
      ai_prompt: 'Bạn là chuyên viên tư vấn của Tavi Beauty Spa. Xưng hô là "Em" và gọi khách là "Chị". Luôn vui vẻ, nhiệt tình tư vấn các gói làm đẹp, chăm sóc da.'
    },
    {
      slug: 'english-center',
      name: 'Tavi English Center',
      email: 'admin@english.com',
      password: 'demo',
      modules: '["crm", "edu", "ai"]',
      ai_prompt: 'Bạn là giáo vụ tư vấn khóa học của Tavi English Center. Tư vấn các khóa IELTS, TOEIC, tiếng Anh giao tiếp. Gọi khách là "Bạn" hoặc "Anh/Chị".'
    },
    {
      slug: 'b2b-consulting',
      name: 'Tavi B2B Consulting',
      email: 'admin@b2b.com',
      password: 'demo',
      modules: '["crm", "ai"]',
      ai_prompt: 'Bạn là chuyên viên tư vấn tài chính và pháp lý của Tavi Consulting. Trả lời chuyên nghiệp, khách quan, trích dẫn luật nếu cần. Xưng hô "Chúng tôi" và "Quý khách".'
    },
    {
      slug: 'nha-khoa-tavi',
      name: 'Nha Khoa Tavi',
      email: 'admin@nhakhoa.com',
      password: 'demo',
      modules: '["crm", "booking", "ai"]',
      ai_prompt: 'Bạn là lễ tân phòng khám Nha Khoa Tavi. Xin chào bệnh nhân. Hỗ trợ đặt lịch hẹn khám răng, nhổ răng, niềng răng. Xưng hô nhẹ nhàng, chu đáo.'
    }
  ];

  for (const t of tenants) {
    const tenantId = uuidv4();
    console.log(`Creating ${t.name}...`);
    
    // 1. Create Tenant
    await pool.query(
      `INSERT INTO tenants (id, name, slug, ai_quota, ai_used, active_modules, system_prompt)
       VALUES ($1, $2, $3, 1000, 0, $4, $5)
       ON CONFLICT (slug) DO UPDATE SET active_modules = EXCLUDED.active_modules, system_prompt = EXCLUDED.system_prompt
       RETURNING id`,
      [tenantId, t.name, t.slug, t.modules, t.ai_prompt]
    );

    // Get actual tenant id in case it existed
    const res = await pool.query(`SELECT id FROM tenants WHERE slug = $1`, [t.slug]);
    const actualTenantId = res.rows[0].id;

    // 2. Create User
    await pool.query(`DELETE FROM crm_users WHERE email = $1`, [t.email]);
    const hash = await bcrypt.hash(t.password, 10);
    await pool.query(
      `INSERT INTO crm_users (id, tenant_id, email, password_hash, name, role)
       VALUES ($1, $2, $3, $4, $5, 'admin')`,
      [uuidv4(), actualTenantId, t.email, hash, t.name + ' Admin']
    );
  }

  console.log('Successfully created demo tenants!');
  pool.end();
}

run().catch(console.error);
