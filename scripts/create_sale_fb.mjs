import pg from 'pg';
const { Pool } = pg;
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  const tenantId = uuidv4();
  const email = 'sale_fb';
  const password = 'demo'; // 123456 would be better but demo is fine
  const hash = await bcrypt.hash('123456', 10);
  
  // 1. Create a dedicated tenant for this sale account
  await pool.query(
    `INSERT INTO tenants (id, name, slug, ai_quota, ai_used, active_modules)
     VALUES ($1, 'Đội Sale Facebook', 'sale-team-fb', 1000, 0, '["crm"]')
     ON CONFLICT (slug) DO NOTHING`,
    [tenantId]
  );
  
  // Get actual tenant ID
  const { rows: tRows } = await pool.query(`SELECT id FROM tenants WHERE slug = 'sale-team-fb'`);
  const actualTenantId = tRows[0].id;

  // 2. Create the sale user
  await pool.query(`DELETE FROM crm_users WHERE email = $1`, [email]);
  await pool.query(
    `INSERT INTO crm_users (id, tenant_id, email, password_hash, name, role)
     VALUES ($1, $2, $3, $4, 'Sale Chuyên Facebook', 'sale')`,
    [uuidv4(), actualTenantId, email, hash]
  );

  // 3. Get leads with facebook from the 3300+ database
  const { rows: fbTenants } = await pool.query(`
    SELECT name, contact_info
    FROM tenants
    WHERE contact_info->>'facebook' IS NOT NULL 
      AND contact_info->>'facebook' != ''
      AND contact_info->>'facebook' != 'https://facebook.com/'
  `);

  // 4. Insert into crm_contacts for the new tenant
  // First clear old contacts if any
  await pool.query(`DELETE FROM crm_contacts WHERE tenant_id = $1`, [actualTenantId]);

  for (const t of fbTenants) {
    const phone = t.contact_info?.phone?.replace('Phone:', '') || '';
    const fb = t.contact_info?.facebook || '';
    await pool.query(`
      INSERT INTO crm_contacts (id, tenant_id, name, phone, email, source, facebook_url, created_at)
      VALUES (gen_random_uuid(), $1, $2, $3, '', 'Quét từ Data 6000', $4, NOW())
    `, [actualTenantId, t.name, phone, fb]);
  }

  console.log(`Created sale_fb with ${fbTenants.length} leads!`);
  pool.end();
}

run().catch(console.error);
