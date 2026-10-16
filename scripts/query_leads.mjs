import pg from 'pg';
const pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
async function run() {
  const { rows: columns } = await pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'leads'`);
  console.log("LEADS COLUMNS:", columns.map(c => c.column_name));
  const { rows: sample } = await pool.query(`SELECT * FROM leads LIMIT 1`);
  console.log("SAMPLE:", sample);
  pool.end();
}
run();
