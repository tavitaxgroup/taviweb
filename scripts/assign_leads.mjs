import pg from 'pg';
const pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
import bcrypt from 'bcryptjs';

async function run() {
  const mainTenantId = '6064025b-7fe4-4840-a27f-2d5da65e15fa';
  const email = 'sale_fb';
  
  // 1. Ensure sale_fb is in the main tenant and has role = 'sale'
  const hash = await bcrypt.hash('123456', 10);
  await pool.query(`
    UPDATE crm_users 
    SET tenant_id = $1, role = 'sale', password_hash = $2
    WHERE email = $3
  `, [mainTenantId, hash, email]);
  
  // Get the user ID of sale_fb
  const { rows: uRows } = await pool.query(`SELECT id FROM crm_users WHERE email = $1`, [email]);
  const saleFbId = uRows[0].id;
  
  // 2. Assign leads that have a Facebook URL to sale_fb
  const { rows } = await pool.query(`
    UPDATE leads 
    SET assigned_to = $1 
    WHERE (facebook_url IS NOT NULL AND facebook_url != '') 
       OR (website ILIKE '%facebook.com%')
    RETURNING id
  `, [saleFbId]);
  
  // Also assign 10 random non-facebook leads to sale1
  const { rows: u1Rows } = await pool.query(`SELECT id FROM crm_users WHERE email = 'sale1'`);
  if (u1Rows.length > 0) {
    await pool.query(`
      UPDATE leads SET assigned_to = $1 
      WHERE assigned_to IS NULL 
      AND id IN (SELECT id FROM leads WHERE assigned_to IS NULL LIMIT 10)
    `, [u1Rows[0].id]);
  }
  
  // Assign 10 to sale2
  const { rows: u2Rows } = await pool.query(`SELECT id FROM crm_users WHERE email = 'sale2'`);
  if (u2Rows.length > 0) {
    await pool.query(`
      UPDATE leads SET assigned_to = $1 
      WHERE assigned_to IS NULL 
      AND id IN (SELECT id FROM leads WHERE assigned_to IS NULL LIMIT 10)
    `, [u2Rows[0].id]);
  }
  
  console.log('Done assigning to sale1 and sale2');
  pool.end();
}
run();
