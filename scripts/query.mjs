import pg from 'pg';
const { Pool } = pg;
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function run() {
  const { rows: fbTenants } = await pool.query(`
    SELECT id, name, slug, contact_info
    FROM tenants
    WHERE contact_info->>'facebook' IS NOT NULL 
      AND contact_info->>'facebook' != ''
      AND contact_info->>'facebook' != 'https://facebook.com/'
  `);
  console.log("TENANTS WITH FB COUNT:", fbTenants.length);
  console.log("SAMPLE:", fbTenants.slice(0, 2));

  pool.end();
}

run().catch(console.error);
