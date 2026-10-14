const { Client } = require('pg');

async function check() {
  const connectionString = process.env.DATABASE_URL || "postgresql://postgres.llposvgrqjsrqktahrtw:SwZczgd%21q%233%2Fn.5@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres";
  const client = new Client({ connectionString });
  await client.connect();
  const res = await client.query(`SELECT * FROM leads LIMIT 1;`);
  console.log(res.rows);
  await client.end();
}

check();
