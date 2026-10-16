import pg from 'pg';
const pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
async function run() {
  await pool.query(`UPDATE tenants SET active_modules = '["crm", "booking", "cms", "lms", "chatbot", "edu"]' WHERE slug = 'sale-team-fb'`);
  await pool.query(`UPDATE crm_users SET role = 'admin' WHERE email = 'sale_fb'`);
  console.log('Fixed permissions and modules');
  pool.end();
}
run();
