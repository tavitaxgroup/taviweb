import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

export function classifyLead(name = '', rawIndustry = '', industryCode = '') {
  const nameLower = name.toLowerCase();
  const rawLower = (rawIndustry || '').toLowerCase();
  const text = `${nameLower} ${rawLower}`;

  // 1. Nha khoa
  if (
    nameLower.includes('nha khoa') ||
    nameLower.includes('răng hàm mặt') ||
    nameLower.includes('dental') ||
    rawLower.includes('nha khoa')
  ) {
    return { key: 'nha_khoa', label: 'Nha khoa' };
  }

  // 2. Thẩm mỹ viện (ưu tiên trước spa & phòng khám)
  if (
    nameLower.includes('thẩm mỹ viện') ||
    nameLower.includes('viện thẩm mỹ') ||
    nameLower.includes('phẫu thuật thẩm mỹ') ||
    nameLower.includes('bác sĩ thẩm mỹ')
  ) {
    return { key: 'tham_my_vien', label: 'Thẩm mỹ viện' };
  }

  // 3. Phòng khám & Y tế
  if (
    !text.includes('thú y') && (
      nameLower.includes('phòng khám') ||
      nameLower.includes('đa khoa') ||
      nameLower.includes('chuyên khoa') ||
      nameLower.includes('bệnh viện') ||
      nameLower.includes('trạm y tế') ||
      nameLower.includes('khám chữa bệnh') ||
      rawLower.includes('hoạt động của các phòng khám đa khoa, chuyên khoa') ||
      rawLower.includes('hoạt động của trạm y tế xã, phường, thị trấn')
    )
  ) {
    return { key: 'phong_kham', label: 'Phòng khám & Y tế' };
  }

  // 4. Spa & Trị liệu dưỡng sinh
  if (
    nameLower.includes('spa') ||
    nameLower.includes('dưỡng sinh') ||
    nameLower.includes('massage') ||
    nameLower.includes('xông hơi') ||
    rawLower.includes('dịch vụ tắm hơi, massage và các dịch vụ tăng cường sức khoẻ tương tự')
  ) {
    return { key: 'spa', label: 'Spa & Trị liệu' };
  }

  // 5. Salon tóc & Nail
  if (
    nameLower.includes('salon tóc') ||
    nameLower.includes('hair salon') ||
    nameLower.includes('cắt tóc') ||
    nameLower.includes('làm tóc') ||
    nameLower.includes('làm đầu') ||
    nameLower.includes('tiệm tóc') ||
    nameLower.includes('nail') ||
    rawLower.includes('cắt tóc, làm đầu, gội đầu')
  ) {
    return { key: 'salon_toc', label: 'Hair Salon & Nail' };
  }

  // 6. Quán Cafe & Đồ uống
  // Exclude pure coffee agriculture/wholesale/machinery
  const isWholesaleOrAgriCoffee =
    (rawLower.includes('nông, lâm sản') || rawLower.includes('bán buôn') || rawLower.includes('sản xuất')) &&
    !nameLower.includes('cafe') && !nameLower.includes('coffee') && !nameLower.includes('trà sữa');

  if (!isWholesaleOrAgriCoffee) {
    if (
      nameLower.includes('cafe') ||
      nameLower.includes('cà phê') ||
      nameLower.includes('coffee') ||
      nameLower.includes('trà sữa') ||
      rawLower.includes('dịch vụ phục vụ đồ uống') ||
      rawLower.includes('quán cà phê')
    ) {
      return { key: 'quan_cafe', label: 'Quán Cafe & Đồ uống' };
    }
  }

  // 7. Nhà hàng & Ẩm thực
  // Exclude wholesale/meat production if name is not restaurant
  const isFoodWholesaleOrMfg =
    (rawLower.includes('bán buôn thực phẩm') || rawLower.includes('sản xuất thức ăn') || rawLower.includes('chế biến bảo quản')) &&
    !nameLower.includes('nhà hàng') && !nameLower.includes('quán') && !nameLower.includes('ẩm thực') && !nameLower.includes('restaurant');

  if (!isFoodWholesaleOrMfg) {
    if (
      nameLower.includes('nhà hàng') ||
      nameLower.includes('ẩm thực') ||
      nameLower.includes('restaurant') ||
      nameLower.includes('quán ăn') ||
      nameLower.includes('buffet') ||
      nameLower.includes('cơm niêu') ||
      rawLower.includes('nhà hàng và các dịch vụ ăn uống')
    ) {
      return { key: 'nha_hang', label: 'Nhà hàng & Ẩm thực' };
    }
  }

  // 8. Phòng Gym & Fitness
  if (
    nameLower.includes('gym') ||
    nameLower.includes('fitness') ||
    nameLower.includes('thể hình') ||
    nameLower.includes('yoga') ||
    nameLower.includes('pilates')
  ) {
    return { key: 'phong_gym', label: 'Phòng Gym & Fitness' };
  }

  // 9. Garage & Ô tô
  if (
    nameLower.includes('garage') ||
    nameLower.includes('gara ô tô') ||
    nameLower.includes('gara xe') ||
    nameLower.includes('bảo dưỡng ô tô') ||
    nameLower.includes('sửa chữa ô tô') ||
    nameLower.includes('car care') ||
    nameLower.includes('auto care') ||
    rawLower.includes('bảo dưỡng, sửa chữa ô tô và xe có động cơ khác')
  ) {
    return { key: 'garage_oto', label: 'Garage & Ô tô' };
  }

  // 10. Studio & Nhiếp ảnh
  if (
    nameLower.includes('studio') ||
    nameLower.includes('áo cưới') ||
    nameLower.includes('nhiếp ảnh') ||
    nameLower.includes('chụp ảnh') ||
    nameLower.includes('wedding') ||
    rawLower.includes('hoạt động nhiếp ảnh')
  ) {
    return { key: 'studio_chup_anh', label: 'Studio & Nhiếp ảnh' };
  }

  // 11. Trung tâm Ngoại ngữ & Đào tạo
  if (
    nameLower.includes('tiếng anh') ||
    nameLower.includes('ngoại ngữ') ||
    nameLower.includes('english') ||
    nameLower.includes('anh ngữ') ||
    nameLower.includes('ielts') ||
    nameLower.includes('toeic')
  ) {
    return { key: 'trung_tam_tieng_anh', label: 'Trung tâm Ngoại ngữ & Đào tạo' };
  }

  // 12. Luật sư & Tư vấn Pháp lý
  if (
    nameLower.includes('luật') ||
    nameLower.includes('law') ||
    nameLower.includes('pháp lý') ||
    nameLower.includes('công chứng') ||
    rawLower.includes('hoạt động pháp luật')
  ) {
    return { key: 'luat_su', label: 'Văn phòng Luật & Tư vấn Pháp lý' };
  }

  // 13. Dịch vụ Vệ sinh
  if (
    nameLower.includes('vệ sinh công nghiệp') ||
    nameLower.includes('dịch vụ vệ sinh') ||
    nameLower.includes('làm sạch') ||
    nameLower.includes('diệt côn trùng') ||
    rawLower.includes('vệ sinh chung nhà cửa') ||
    rawLower.includes('vệ sinh công nghiệp và các công trình chuyên biệt')
  ) {
    return { key: 'dich_vu_ve_sinh', label: 'Dịch vụ Vệ sinh Công nghiệp' };
  }

  // 14. Thiết kế Nội thất & Decor
  if (
    nameLower.includes('nội thất') ||
    nameLower.includes('decor') ||
    nameLower.includes('interior') ||
    rawLower.includes('sản xuất giường, tủ, bàn, ghế') ||
    (rawLower.includes('bán buôn giường, tủ, bàn ghế') && nameLower.includes('nội thất'))
  ) {
    return { key: 'noi_that', label: 'Thiết kế Nội thất & Decor' };
  }

  // 15. Công ty Xây dựng & Thi công
  // Must be actual construction, not pure transport or unrelated trading
  const isActualConstruction =
    nameLower.includes('xây dựng') ||
    nameLower.includes('thi công') ||
    nameLower.includes('construction') ||
    nameLower.includes('xây lắp') ||
    rawLower.includes('xây dựng nhà để ở') ||
    rawLower.includes('xây dựng nhà không để ở') ||
    rawLower.includes('xây dựng công trình kỹ thuật dân dụng khác') ||
    rawLower.includes('xây dựng công trình đường sắt và đường bộ') ||
    rawLower.includes('xây dựng công trình công ích') ||
    rawLower.includes('hoàn thiện công trình xây dựng') ||
    rawLower.includes('phá dỡ') ||
    rawLower.includes('chuẩn bị mặt bằng') ||
    rawLower.includes('lắp đặt hệ thống xây dựng');

  if (isActualConstruction) {
    return { key: 'cong_ty_xay_dung', label: 'Công ty Xây dựng & Thi công' };
  }

  // Unmatched
  return { key: 'dang_phat_trien', label: 'Đang phát triển' };
}

async function test() {
  console.log('Fetching leads for refined test...');
  const res = await pool.query('SELECT id, name, raw_industry, industry_code FROM leads');
  console.log(`Analyzing ${res.rows.length} rows...`);

  const summary = {};
  let matched = 0;
  let unmatched = 0;

  for (const row of res.rows) {
    const resClass = classifyLead(row.name, row.raw_industry, row.industry_code);
    summary[resClass.label] = (summary[resClass.label] || 0) + 1;
    if (resClass.key === 'dang_phat_trien') {
      unmatched++;
    } else {
      matched++;
    }
  }

  console.log(`\nMatched: ${matched} (${((matched/res.rows.length)*100).toFixed(2)}%)`);
  console.log(`Unmatched: ${unmatched} (${((unmatched/res.rows.length)*100).toFixed(2)}%)`);
  console.table(
    Object.entries(summary)
      .sort((a,b) => b[1] - a[1])
      .map(([label, count]) => ({
        label,
        count,
        pct: `${((count/res.rows.length)*100).toFixed(2)}%`
      }))
  );

  await pool.end();
}

test().catch(console.error);
