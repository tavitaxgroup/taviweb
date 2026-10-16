import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

// Mapping definitions for our 15 templates based on Vietnamese industry keywords & codes
function classifyLead(name = '', rawIndustry = '', industryCode = '') {
  const text = `${name} ${rawIndustry}`.toLowerCase();
  const raw = rawIndustry.toLowerCase();

  // 1. Nha khoa
  if (
    text.includes('nha khoa') ||
    text.includes('răng hàm mặt') ||
    text.includes('dental')
  ) {
    return 'nha_khoa';
  }

  // 2. Phòng khám & Y tế
  if (
    text.includes('phòng khám') ||
    text.includes('đa khoa') ||
    text.includes('chuyên khoa') ||
    text.includes('bệnh viện') ||
    text.includes('trạm y tế') ||
    text.includes('khám chữa bệnh') ||
    raw.includes('hoạt động của các phòng khám đa khoa, chuyên khoa') ||
    raw.includes('hoạt động y tế khác')
  ) {
    return 'phong_kham';
  }

  // 3. Thẩm mỹ viện
  if (
    text.includes('thẩm mỹ viện') ||
    text.includes('viện thẩm mỹ') ||
    text.includes('phẫu thuật thẩm mỹ') ||
    text.includes('cosmetic')
  ) {
    return 'tham_my_vien';
  }

  // 4. Spa & Trị liệu
  if (
    text.includes('spa') ||
    text.includes('dưỡng sinh') ||
    text.includes('massage') ||
    text.includes('xông hơi') ||
    raw.includes('dịch vụ tắm hơi, massage và các dịch vụ tăng cường sức khoẻ tương tự')
  ) {
    return 'spa';
  }

  // 5. Salon tóc & Nail
  if (
    text.includes('salon tóc') ||
    text.includes('hair salon') ||
    text.includes('cắt tóc') ||
    text.includes('làm đầu') ||
    text.includes('nail') ||
    raw.includes('cắt tóc, làm đầu, gội đầu')
  ) {
    return 'salon_toc';
  }

  // 6. Quán cafe & Đồ uống
  if (
    text.includes('cafe') ||
    text.includes('cà phê') ||
    text.includes('coffee') ||
    text.includes('trà sữa') ||
    raw.includes('dịch vụ phục vụ đồ uống') ||
    raw.includes('quán cà phê')
  ) {
    return 'quan_cafe';
  }

  // 7. Nhà hàng & Ẩm thực
  if (
    text.includes('nhà hàng') ||
    text.includes('ẩm thực') ||
    text.includes('restaurant') ||
    text.includes('quán ăn') ||
    raw.includes('nhà hàng và các dịch vụ ăn uống') ||
    raw.includes('dịch vụ ăn uống khác')
  ) {
    return 'nha_hang';
  }

  // 8. Phòng Gym & Fitness
  if (
    text.includes('gym') ||
    text.includes('fitness') ||
    text.includes('thể hình') ||
    text.includes('yoga') ||
    raw.includes('hoạt động của các câu lạc bộ thể thao')
  ) {
    return 'phong_gym';
  }

  // 9. Garage & Ô tô
  if (
    text.includes('garage') ||
    text.includes('gara ô tô') ||
    text.includes('gara xe') ||
    text.includes('bảo dưỡng ô tô') ||
    text.includes('sửa chữa ô tô') ||
    text.includes('auto') ||
    raw.includes('bảo dưỡng, sửa chữa ô tô và xe có động cơ khác')
  ) {
    return 'garage_oto';
  }

  // 10. Studio & Nhiếp ảnh
  if (
    text.includes('studio') ||
    text.includes('áo cưới') ||
    text.includes('nhiếp ảnh') ||
    text.includes('chụp ảnh') ||
    text.includes('wedding') ||
    raw.includes('hoạt động nhiếp ảnh')
  ) {
    return 'studio_chup_anh';
  }

  // 11. Trung tâm Ngoại ngữ & Đào tạo
  if (
    text.includes('tiếng anh') ||
    text.includes('ngoại ngữ') ||
    text.includes('english') ||
    text.includes('anh ngữ') ||
    text.includes('du học') ||
    raw.includes('giáo dục khác chưa được phân vào đâu') && (text.includes('ngữ') || text.includes('dạy'))
  ) {
    return 'trung_tam_tieng_anh';
  }

  // 12. Luật sư & Pháp lý
  if (
    text.includes('luật') ||
    text.includes('law') ||
    text.includes('pháp lý') ||
    text.includes('công chứng') ||
    raw.includes('hoạt động pháp luật')
  ) {
    return 'luat_su';
  }

  // 13. Dịch vụ Vệ sinh
  if (
    text.includes('vệ sinh công nghiệp') ||
    text.includes('dịch vụ vệ sinh') ||
    text.includes('làm sạch') ||
    text.includes('diệt côn trùng') ||
    raw.includes('vệ sinh chung nhà cửa') ||
    raw.includes('vệ sinh công nghiệp và các công trình chuyên biệt')
  ) {
    return 'dich_vu_ve_sinh';
  }

  // 14. Thiết kế Nội thất
  if (
    text.includes('nội thất') ||
    text.includes('decor') ||
    text.includes('interior') ||
    raw.includes('hoạt động thiết kế chuyên dụng') && text.includes('nội thất') ||
    raw.includes('sản xuất giường, tủ, bàn, ghế') ||
    raw.includes('bán buôn giường, tủ, bàn ghế và đồ dùng nội thất tương tự')
  ) {
    return 'noi_that';
  }

  // 15. Công ty Xây dựng
  if (
    text.includes('xây dựng') ||
    text.includes('thi công') ||
    text.includes('construction') ||
    raw.includes('xây dựng nhà để ở') ||
    raw.includes('xây dựng nhà không để ở') ||
    raw.includes('xây dựng công trình kỹ thuật dân dụng khác') ||
    raw.includes('xây dựng công trình đường sắt và đường bộ') ||
    raw.includes('xây dựng công trình công ích') ||
    raw.includes('hoàn thiện công trình xây dựng') ||
    raw.includes('phá dỡ') ||
    raw.includes('chuẩn bị mặt bằng') ||
    raw.includes('bán buôn vật liệu, thiết bị lắp đặt khác trong xây dựng')
  ) {
    return 'cong_ty_xay_dung';
  }

  // NOT MATCHING ANY TEMPLATE
  return null;
}

async function run() {
  console.log('Fetching leads from database...');
  const res = await pool.query(`SELECT id, name, raw_industry, industry_code, industry FROM leads`);
  console.log(`Loaded ${res.rows.length} leads. Running classification simulation...`);

  const counts = {};
  let matched = 0;
  let unmatched = 0;

  for (const row of res.rows) {
    const key = classifyLead(row.name || '', row.raw_industry || '', row.industry_code || '');
    if (key) {
      matched++;
      counts[key] = (counts[key] || 0) + 1;
    } else {
      unmatched++;
      counts['dang_phat_trien (chua co template)'] = (counts['dang_phat_trien (chua co template)'] || 0) + 1;
    }
  }

  console.log('\n=== SIMULATION RESULTS (Total: ' + res.rows.length + ') ===');
  console.log(`Matched to templates: ${matched} (${((matched / res.rows.length) * 100).toFixed(1)}%)`);
  console.log(`Unmatched (Chưa có template): ${unmatched} (${((unmatched / res.rows.length) * 100).toFixed(1)}%)`);

  console.table(
    Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([industry, count]) => ({
        industry,
        count,
        percentage: `${((count / res.rows.length) * 100).toFixed(2)}%`
      }))
  );

  await pool.end();
}

run().catch(console.error);
