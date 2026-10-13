import pg from 'pg';
import { classifyBusinessDetailed } from './test_vsic_detailed.mjs';

const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

const TEMPLATE_NAMES = {
  cong_ty_xay_dung: 'Công ty Xây dựng & Thi công',
  noi_that: 'Thiết kế Nội thất & Decor',
  phong_kham: 'Phòng khám & Y tế',
  quan_cafe: 'Quán Cafe & Đồ uống',
  nha_hang: 'Nhà hàng & Ẩm thực',
  luat_su: 'Văn phòng Luật & Tư vấn Pháp lý',
  trung_tam_tieng_anh: 'Trung tâm Ngoại ngữ & Đào tạo',
  studio_chup_anh: 'Studio & Nhiếp ảnh',
  dich_vu_ve_sinh: 'Dịch vụ Vệ sinh Công nghiệp',
  phong_gym: 'Phòng Gym & Fitness',
  garage_oto: 'Garage & Ô tô',
  spa: 'Spa & Trị liệu',
  nha_khoa: 'Nha khoa',
  salon_toc: 'Hair Salon & Nail',
  tham_my_vien: 'Thẩm mỹ viện',
  dang_phat_trien: 'Đang phát triển'
};

async function executeMigration() {
  console.log('--- STARTING LEADS RECLASSIFICATION MIGRATION ---');
  console.log('Fetching all leads from Supabase...');
  const res = await pool.query('SELECT id, name, raw_industry, industry_code FROM leads ORDER BY id ASC');
  const total = res.rows.length;
  console.log(`Loaded ${total} leads.`);

  const updates = [];
  let matchedCount = 0;
  let devCount = 0;

  for (const row of res.rows) {
    const classification = classifyBusinessDetailed(row.name, row.raw_industry, row.industry_code);
    const industry = classification.key;
    const templateName = TEMPLATE_NAMES[industry] || 'Đang phát triển';
    const demoStatus = industry === 'dang_phat_trien' ? 'pending' : 'ready';

    if (industry === 'dang_phat_trien') {
      devCount++;
    } else {
      matchedCount++;
    }

    updates.push({
      id: row.id,
      industry,
      template_name: templateName,
      demo_status: demoStatus
    });
  }

  console.log(`Classified: ${matchedCount} matched 15 templates, ${devCount} set to 'dang_phat_trien'.`);

  // Batch update in chunks of 2,000
  const BATCH_SIZE = 2000;
  console.log(`Starting batch updates (batch size: ${BATCH_SIZE})...`);

  for (let i = 0; i < updates.length; i += BATCH_SIZE) {
    const batch = updates.slice(i, i + BATCH_SIZE);
    
    // Construct parameterized query
    // v(id, industry, template_name, demo_status)
    const valuePlaceholders = [];
    const params = [];
    
    batch.forEach((item, idx) => {
      const baseIdx = idx * 4;
      valuePlaceholders.push(`($${baseIdx + 1}::bigint, $${baseIdx + 2}::text, $${baseIdx + 3}::text, $${baseIdx + 4}::text)`);
      params.push(item.id, item.industry, item.template_name, item.demo_status);
    });

    const query = `
      UPDATE leads AS l
      SET 
        industry = v.industry,
        template_name = v.template_name,
        demo_status = v.demo_status,
        updated_at = NOW()
      FROM (VALUES ${valuePlaceholders.join(', ')}) AS v(id, industry, template_name, demo_status)
      WHERE l.id = v.id;
    `;

    await pool.query(query, params);
    console.log(`Updated batch ${Math.floor(i / BATCH_SIZE) + 1} / ${Math.ceil(updates.length / BATCH_SIZE)} (${Math.min(i + BATCH_SIZE, total)} / ${total})`);
  }

  console.log('\n--- VERIFYING POST-UPDATE DISTRIBUTION ---');
  const verifyRes = await pool.query(`
    SELECT industry, template_name, demo_status, COUNT(*) as count 
    FROM leads 
    GROUP BY industry, template_name, demo_status 
    ORDER BY count DESC
  `);
  console.table(verifyRes.rows);

  await pool.end();
  console.log('--- RECLASSIFICATION COMPLETE! ---');
}

executeMigration().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
