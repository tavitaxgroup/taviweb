import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.afykilitmywbbgvwcsby:Tavitax%40123@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

export function classifyBusinessDetailed(name = '', rawIndustry = '', code = '') {
  const n = (name || '').toLowerCase();
  const raw = (rawIndustry || '').toLowerCase();
  const c = (code || '').trim();

  // 1. Nha khoa
  if (
    n.includes('nha khoa') ||
    n.includes('răng hàm mặt') ||
    n.includes('dental') ||
    (c.startsWith('862') && (raw.includes('nha khoa') || n.includes('nha')))
  ) {
    return { key: 'nha_khoa', label: 'Nha khoa' };
  }

  // 2. Thẩm mỹ viện
  if (
    n.includes('thẩm mỹ viện') ||
    n.includes('viện thẩm mỹ') ||
    n.includes('phẫu thuật thẩm mỹ') ||
    n.includes('thẩm mỹ quốc tế')
  ) {
    return { key: 'tham_my_vien', label: 'Thẩm mỹ viện' };
  }

  // 3. Phòng khám & Y tế (Đa khoa, chuyên khoa, bệnh viện - không lấy thú y)
  if (
    !n.includes('thú y') && !raw.includes('thú y') && (
      n.includes('phòng khám') ||
      n.includes('bệnh viện') ||
      n.includes('đa khoa') ||
      n.includes('chuyên khoa') ||
      n.includes('trung tâm y tế') ||
      n.includes('trạm y tế') ||
      c.startsWith('861') ||
      (c.startsWith('862') && !n.includes('nha khoa')) ||
      raw.includes('hoạt động của các phòng khám đa khoa, chuyên khoa') ||
      raw.includes('hoạt động của trạm y tế')
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
    c.startsWith('961') ||
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
    c.startsWith('9631') ||
    raw.includes('cắt tóc, làm đầu, gội đầu')
  ) {
    return { key: 'salon_toc', label: 'Hair Salon & Nail' };
  }

  // 6. Quán Cafe & Đồ uống
  const isAgriWholesaleCoffee =
    (c.startsWith('01') || c.startsWith('1077') || c.startsWith('462') || c.startsWith('463')) &&
    !n.includes('cafe') && !n.includes('coffee') && !n.includes('trà sữa');

  if (!isAgriWholesaleCoffee) {
    if (
      c.startsWith('563') ||
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
    (c.startsWith('463') || c.startsWith('101') || c.startsWith('102') || c.startsWith('1079')) &&
    !n.includes('nhà hàng') && !n.includes('quán ăn') && !n.includes('ẩm thực') && !n.includes('restaurant') && !n.includes('buffet');

  if (!isPureWholesaleFood) {
    if (
      c.startsWith('561') ||
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
    c.startsWith('931')
  ) {
    return { key: 'phong_gym', label: 'Phòng Gym & Fitness' };
  }

  // 9. Garage & Ô tô
  if (
    c.startsWith('452') ||
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
    c.startsWith('742') ||
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
    (c.startsWith('855') && (n.includes('ngữ') || n.includes('dạy') || n.includes('học') || n.includes('edu')))
  ) {
    return { key: 'trung_tam_tieng_anh', label: 'Trung tâm Ngoại ngữ & Đào tạo' };
  }

  // 12. Luật sư & Tư vấn Pháp lý
  const isConsultingExclusion = raw.includes('trừ tư vấn pháp') || raw.includes('không bao gồm hoạt động tư vấn pháp');
  if (!isConsultingExclusion) {
    if (
      c.startsWith('691') ||
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
    c.startsWith('812') ||
    raw.includes('vệ sinh chung nhà cửa') ||
    raw.includes('vệ sinh công nghiệp') ||
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
    c.startsWith('310') ||
    (c.startsWith('741') && (n.includes('nội thất') || raw.includes('nội thất'))) ||
    raw.includes('sản xuất giường, tủ, bàn, ghế') ||
    (raw.includes('bán buôn giường, tủ, bàn ghế') && n.includes('nội thất'))
  ) {
    return { key: 'noi_that', label: 'Thiết kế Nội thất & Decor' };
  }

  // 15. Công ty Xây dựng & Thi công
  // VSIC 41xx (Xây dựng nhà), 42xx (Xây dựng công trình), 43xx (Hoạt động xây dựng chuyên dụng, thi công, hoàn thiện)
  const isConstructionCode = c.startsWith('41') || c.startsWith('42') || c.startsWith('43');

  const hasConstructionRaw =
    raw.includes('xây dựng nhà để ở') ||
    raw.includes('xây dựng nhà không để ở') ||
    raw.includes('xây dựng công trình') ||
    raw.includes('hoàn thiện công trình') ||
    raw.includes('phá dỡ') ||
    raw.includes('chuẩn bị mặt bằng') ||
    raw.includes('lắp đặt hệ thống xây dựng');

  const hasConstructionName =
    n.includes('xây dựng') ||
    n.includes('thi công') ||
    n.includes('construction') ||
    n.includes('xây lắp');

  // Check exclusion for transport companies that only install or transport
  const isPureTransport = n.includes('vận tải') && !hasConstructionName;

  if (!isPureTransport && (isConstructionCode || hasConstructionRaw || hasConstructionName)) {
    return { key: 'cong_ty_xay_dung', label: 'Công ty Xây dựng & Thi công' };
  }

  // Unmatched
  return { key: 'dang_phat_trien', label: 'Đang phát triển' };
}

async function run() {
  const res = await pool.query('SELECT id, name, raw_industry, industry_code FROM leads');

  const summary = {};
  let matched = 0;
  let unmatched = 0;

  for (const row of res.rows) {
    const resClass = classifyBusinessDetailed(row.name, row.raw_industry, row.industry_code);
    summary[resClass.label] = (summary[resClass.label] || 0) + 1;
    if (resClass.key === 'dang_phat_trien') {
      unmatched++;
    } else {
      matched++;
    }
  }

  console.log(`\n=== REFINED MATCHING RESULTS ===`);
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
