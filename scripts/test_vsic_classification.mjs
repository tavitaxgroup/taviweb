import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

export function classifyBusiness(name = '', rawIndustry = '', code = '') {
  const n = (name || '').toLowerCase();
  const raw = (rawIndustry || '').toLowerCase();
  const c = (code || '').trim();

  // 1. Nha khoa
  if (
    n.includes('nha khoa') ||
    n.includes('răng hàm mặt') ||
    n.includes('dental') ||
    (c === '8620' && (raw.includes('nha khoa') || n.includes('nha')))
  ) {
    return { key: 'nha_khoa', label: 'Nha khoa' };
  }

  // 2. Thẩm mỹ viện (Phẫu thuật thẩm mỹ, viện thẩm mỹ)
  if (
    n.includes('thẩm mỹ viện') ||
    n.includes('viện thẩm mỹ') ||
    n.includes('phẫu thuật thẩm mỹ') ||
    n.includes('thẩm mỹ quốc tế')
  ) {
    return { key: 'tham_my_vien', label: 'Thẩm mỹ viện' };
  }

  // 3. Phòng khám & Y tế (Đa khoa, chuyên khoa, bệnh viện - loại trừ thú y)
  if (
    !n.includes('thú y') && !raw.includes('thú y') && (
      n.includes('phòng khám') ||
      n.includes('bệnh viện') ||
      n.includes('đa khoa') ||
      n.includes('chuyên khoa') ||
      n.includes('trung tâm y tế') ||
      n.includes('trạm y tế') ||
      c === '8610' ||
      (c === '8620' && !n.includes('nha khoa')) ||
      raw.includes('hoạt động của các phòng khám đa khoa, chuyên khoa') ||
      raw.includes('hoạt động của các bệnh viện, trạm y tế')
    )
  ) {
    return { key: 'phong_kham', label: 'Phòng khám & Y tế' };
  }

  // 4. Spa & Trị liệu dưỡng sinh
  if (
    n.includes('spa') ||
    n.includes('dưỡng sinh') ||
    n.includes('massage') ||
    n.includes('xông hơi') ||
    c === '9610' ||
    raw.includes('dịch vụ tắm hơi, massage')
  ) {
    return { key: 'spa', label: 'Spa & Trị liệu' };
  }

  // 5. Hair Salon & Nail
  if (
    n.includes('salon tóc') ||
    n.includes('hair salon') ||
    n.includes('cắt tóc') ||
    n.includes('tiệm tóc') ||
    n.includes('làm tóc') ||
    n.includes('làm đầu') ||
    n.includes('nail') ||
    c === '9631' ||
    raw.includes('cắt tóc, làm đầu, gội đầu')
  ) {
    return { key: 'salon_toc', label: 'Hair Salon & Nail' };
  }

  // 6. Quán Cafe & Đồ uống
  const isAgriWholesaleCoffee =
    (c === '0127' || c === '1077' || c === '4620' || c === '4632') &&
    !n.includes('cafe') && !n.includes('coffee') && !n.includes('trà sữa');

  if (!isAgriWholesaleCoffee) {
    if (
      c === '5630' ||
      raw.includes('dịch vụ phục vụ đồ uống') ||
      raw.includes('quán cà phê') ||
      n.includes('cafe') ||
      n.includes('cà phê') ||
      n.includes('coffee') ||
      n.includes('trà sữa') ||
      n.includes('tea & coffee') ||
      n.includes('coffee & tea')
    ) {
      return { key: 'quan_cafe', label: 'Quán Cafe & Đồ uống' };
    }
  }

  // 7. Nhà hàng & Ẩm thực
  const isPureWholesaleFood =
    (c === '4631' || c === '4632' || c === '1010' || c === '1020' || c === '1079') &&
    !n.includes('nhà hàng') && !n.includes('quán ăn') && !n.includes('ẩm thực') && !n.includes('restaurant') && !n.includes('buffet');

  if (!isPureWholesaleFood) {
    if (
      c === '5610' ||
      raw.includes('nhà hàng và các dịch vụ ăn uống') ||
      n.includes('nhà hàng') ||
      n.includes('quán ăn') ||
      n.includes('ẩm thực') ||
      n.includes('restaurant') ||
      n.includes('buffet') ||
      n.includes('cơm niêu') ||
      n.includes('lẩu & nướng') ||
      n.includes('nướng & lẩu')
    ) {
      return { key: 'nha_hang', label: 'Nhà hàng & Ẩm thực' };
    }
  }

  // 8. Phòng Gym & Fitness
  if (
    n.includes('gym') ||
    n.includes('fitness') ||
    n.includes('thể hình') ||
    n.includes('yoga') ||
    n.includes('pilates') ||
    (c === '9311' || c === '9312')
  ) {
    return { key: 'phong_gym', label: 'Phòng Gym & Fitness' };
  }

  // 9. Garage & Ô tô
  if (
    c === '4520' ||
    raw.includes('bảo dưỡng, sửa chữa ô tô') ||
    n.includes('garage') ||
    n.includes('gara ô tô') ||
    n.includes('gara xe') ||
    n.includes('bảo dưỡng ô tô') ||
    n.includes('sửa chữa ô tô') ||
    n.includes('auto care') ||
    n.includes('car care')
  ) {
    return { key: 'garage_oto', label: 'Garage & Ô tô' };
  }

  // 10. Studio & Nhiếp ảnh
  if (
    c === '7420' ||
    raw.includes('hoạt động nhiếp ảnh') ||
    n.includes('studio') ||
    n.includes('áo cưới') ||
    n.includes('nhiếp ảnh') ||
    n.includes('chụp ảnh') ||
    n.includes('wedding') ||
    n.includes('bridal')
  ) {
    return { key: 'studio_chup_anh', label: 'Studio & Nhiếp ảnh' };
  }

  // 11. Trung tâm Ngoại ngữ & Đào tạo
  if (
    n.includes('tiếng anh') ||
    n.includes('ngoại ngữ') ||
    n.includes('english') ||
    n.includes('anh ngữ') ||
    n.includes('ielts') ||
    n.includes('toeic') ||
    (c === '8559' && (n.includes('ngữ') || n.includes('dạy') || n.includes('học') || n.includes('edu')))
  ) {
    return { key: 'trung_tam_tieng_anh', label: 'Trung tâm Ngoại ngữ & Đào tạo' };
  }

  // 12. Luật sư & Tư vấn Pháp lý
  // Note: Ignore management consulting with "trừ tư vấn pháp luật"
  const isConsultingExclusion = raw.includes('trừ tư vấn pháp') || raw.includes('không bao gồm hoạt động tư vấn pháp');
  if (!isConsultingExclusion) {
    if (
      c === '6910' ||
      raw.includes('hoạt động pháp luật') ||
      n.includes('luật sư') ||
      n.includes('văn phòng luật') ||
      n.includes('công ty luật') ||
      n.includes('tư vấn pháp luật') ||
      n.includes('công chứng') ||
      (n.includes('luật') && !n.includes('kỷ luật'))
    ) {
      return { key: 'luat_su', label: 'Văn phòng Luật & Tư vấn Pháp lý' };
    }
  }

  // 13. Dịch vụ Vệ sinh Công nghiệp
  if (
    c === '8121' || c === '8129' ||
    raw.includes('vệ sinh chung nhà cửa') ||
    raw.includes('vệ sinh công nghiệp và các công trình chuyên biệt') ||
    n.includes('vệ sinh công nghiệp') ||
    n.includes('dịch vụ vệ sinh') ||
    n.includes('làm sạch') ||
    n.includes('diệt côn trùng')
  ) {
    return { key: 'dich_vu_ve_sinh', label: 'Dịch vụ Vệ sinh Công nghiệp' };
  }

  // 14. Thiết kế Nội thất & Decor
  if (
    n.includes('nội thất') ||
    n.includes('decor') ||
    n.includes('interior') ||
    c === '3100' ||
    (c === '7410' && (n.includes('nội thất') || raw.includes('nội thất'))) ||
    raw.includes('sản xuất giường, tủ, bàn, ghế') ||
    (raw.includes('bán buôn giường, tủ, bàn ghế') && n.includes('nội thất'))
  ) {
    return { key: 'noi_that', label: 'Thiết kế Nội thất & Decor' };
  }

  // 15. Công ty Xây dựng & Thi công
  // Only genuine construction contractors and builders
  const isConstructionCode = [
    '4100', '4101', '4102',
    '4210', '4220', '4290',
    '4311', '4312',
    '4330', '4390'
  ].includes(c);

  const hasConstructionRaw =
    raw.includes('xây dựng nhà để ở') ||
    raw.includes('xây dựng nhà không để ở') ||
    raw.includes('xây dựng công trình kỹ thuật dân dụng khác') ||
    raw.includes('xây dựng công trình đường sắt và đường bộ') ||
    raw.includes('xây dựng công trình công ích') ||
    raw.includes('hoàn thiện công trình xây dựng') ||
    raw.includes('phá dỡ') ||
    raw.includes('chuẩn bị mặt bằng');

  const hasConstructionName =
    n.includes('xây dựng') ||
    n.includes('thi công') ||
    n.includes('construction') ||
    n.includes('xây lắp');

  if (isConstructionCode || hasConstructionRaw || hasConstructionName) {
    return { key: 'cong_ty_xay_dung', label: 'Công ty Xây dựng & Thi công' };
  }

  // Otherwise: under development
  return { key: 'dang_phat_trien', label: 'Đang phát triển' };
}

async function run() {
  console.log('Testing VSIC + Keyword precision classifier on all 59,135 leads...');
  const res = await pool.query('SELECT id, name, raw_industry, industry_code FROM leads');

  const summary = {};
  let matched = 0;
  let unmatched = 0;

  for (const row of res.rows) {
    const resClass = classifyBusiness(row.name, row.raw_industry, row.industry_code);
    summary[resClass.label] = (summary[resClass.label] || 0) + 1;
    if (resClass.key === 'dang_phat_trien') {
      unmatched++;
    } else {
      matched++;
    }
  }

  console.log(`\n=== RESULTS ===`);
  console.log(`Matched to 15 templates: ${matched} (${((matched/res.rows.length)*100).toFixed(2)}%)`);
  console.log(`Đang phát triển: ${unmatched} (${((unmatched/res.rows.length)*100).toFixed(2)}%)`);
  console.table(
    Object.entries(summary)
      .sort((a,b) => b[1] - a[1])
      .map(([label, count]) => ({
        label,
        count,
        percentage: `${((count/res.rows.length)*100).toFixed(2)}%`
      }))
  );

  await pool.end();
}

run().catch(console.error);
