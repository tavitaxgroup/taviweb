import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  const res = await pool.query(`
    SELECT raw_industry, COUNT(*) as count 
    FROM leads 
    GROUP BY raw_industry 
    ORDER BY count DESC 
    LIMIT 30
  `);
  console.table(res.rows);
  await pool.end();
}

run().catch(console.error);
