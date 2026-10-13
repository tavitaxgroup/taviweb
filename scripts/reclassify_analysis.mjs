import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  const currentDist = await pool.query(`
    SELECT industry, template_name, demo_status, COUNT(*) as count
    FROM leads
    GROUP BY industry, template_name, demo_status
    ORDER BY count DESC
  `);
  console.log('=== Current Industry Distribution in leads ===');
  console.table(currentDist.rows);

  // Check unique raw_industry counts
  const rawStats = await pool.query(`
    SELECT COUNT(DISTINCT raw_industry) as distinct_raw_industries,
           COUNT(*) FILTER (WHERE raw_industry IS NULL OR raw_industry = '') as empty_raw_industries
    FROM leads
  `);
  console.log('\nRaw industry stats:', rawStats.rows[0]);

  // Check top raw_industry across all 59k leads
  const topRaw = await pool.query(`
    SELECT raw_industry, COUNT(*) as c
    FROM leads
    GROUP BY raw_industry
    ORDER BY c DESC
    LIMIT 30
  `);
  console.log('\nTop 30 raw_industry across all leads:');
  console.table(topRaw.rows);

  await pool.end();
}

main().catch(console.error);
