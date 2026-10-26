export const mockData = {
  business: {
    name: 'PROSOCCER GYM & KIT',
    tagline: 'HỌC VIỆN BÓNG ĐÁ, THỂ LỰC & TRANG PHỤC THỂ THAO',
    domain: 'PROSOCCER.VN',
    phone: ['0908 668 116', '1900 636 816'],
    email: ['contact@prosoccer.vn', 'inanao@prosoccer.vn'],
    address: 'Khu Liên Hợp Thể Thao ProSoccer, 268 Lý Thường Kiệt, Quận 10, TP. Hồ Chí Minh',
    hours: 'Thứ 2 - Chủ Nhật: 06:00 - 22:30',
    copyright: '© 2026 PROSOCCER.VN - Học Viện Thể Lực Bóng Đá & Trang Phục Thi Đấu Chuyên Nghiệp.'
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#top' },
    { label: 'THIẾT KẾ ÁO ĐẤU', href: '#configurator' },
    { label: 'PHỤ KIỆN & DỤNG CỤ', href: '#products' },
    { label: 'HLV THỂ LỰC BÓNG ĐÁ', href: '#programs' },
    { label: 'BẢNG GIÁ IN ẤN', href: '#pricing' },
    { label: 'LIÊN HỆ', href: '#contact' }
  ],
  hero: {
    eyebrow: 'PROSOCCER.VN',
    headlineLines: [
      'HỆ THỐNG',
      'HUẤN LUYỆN THỂ LỰC',
      '& PHỤ KIỆN BÓNG ĐÁ',
      'UY TÍN TẠI TPHCM'
    ],
    subheadline: 'Đào tạo thể lực bóng đá chuyên sâu, kinh doanh dụng cụ luyện tập tốc độ - sức bền và dịch vụ thiết kế, in ấn áo đấu CLB theo yêu cầu.',
    ctaPrimary: 'KHÁM PHÁ & ĐẶT ÁO NGAY',
    ctaSecondary: 'ĐĂNG KÝ TEST THỂ LỰC',
    backgroundStadium: 'https://images.unsplash.com/photo-1518605368461-1ee7e5437630?auto=format&fit=crop&w=1800&q=85',
    jerseyImage: 'https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=1000&q=85',
    ballImage: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=800&q=85',
    badges: [
      { label: '500+ ĐỘI BÓNG PHỦI & CHUYÊN NGHIỆP', value: 'Đối tác trang phục & HLV thể lực' },
      { label: 'IN CHUYỂN NHIỆT 3D & DECAL HÀN QUỐC', value: 'Bảo hành vĩnh viễn không bong tróc' },
      { label: 'PHÒNG LAB SỨC BỀN VO2 MAX', value: 'Giáo trình chuẩn FIFA 11+ & S&C' }
    ]
  },
  jerseyConfigurator: {
    title: 'TRạm Thiết Kế & In Ấn Áo Đấu Theo Yêu Cầu',
    subtitle: 'Tùy chỉnh tên đội bóng, số áo cầu thủ, chất liệu vải dệt mè thoáng khí và công nghệ in decal cao cấp ngay trên nền tảng trực tuyến.',
    colorSwatches: [
      { id: 'white-teal', name: 'Trắng Phối Xanh Ngọc (Aura)', primary: '#ffffff', accent: '#0d9488', text: '#0f172a' },
      { id: 'amber-black', name: 'Vàng Hoàng Kim Sân Vận Động', primary: '#f59e0b', accent: '#111111', text: '#111111' },
      { id: 'purple-gold', name: 'Tím Điện Tử ProSoccer', primary: '#7c3aed', accent: '#fbbf24', text: '#ffffff' },
      { id: 'crimson-black', name: 'Đỏ Đô Chiến Binh', primary: '#dc2626', accent: '#18181b', text: '#ffffff' }
    ],
    fabricTiers: [
      {
        id: 'thai-pro',
        name: 'Vải Mè Thái Lan Pro-Dry',
        pricePerSet: 165000,
        desc: 'Thoáng khí 4 chiều, kháng khuẩn khử mùi, form slim-fit tôn dáng cầu thủ.'
      },
      {
        id: 'jacquard-elite',
        name: 'Vải Dệt Kim Jacquard Siêu Nhẹ',
        pricePerSet: 235000,
        desc: 'Vân dệt lục giác thoát mồ hôi tức thì, co giãn 8 chiều chuẩn giải đấu chuyên nghiệp.'
      },
      {
        id: 'player-issue',
        name: 'Bản Cầu Thủ Player Issue (Ép Nhiệt)',
        pricePerSet: 320000,
        desc: 'Đường may ép seam không ma sát, lỗ thông hơi laser sườn áo, logo silicon 3D nổi.'
      }
    ],
    printOptions: [
      { id: 'sublimation', name: 'In Chuyển Nhiệt Toàn Thân 3D (+20.000₫/bộ)', extraPrice: 20000 },
      { id: 'korean-decal', name: 'In Decal Nhiệt Hàn Quốc Phản Quang (+35.000₫/bộ)', extraPrice: 35000 },
      { id: 'flock-velvet', name: 'In Nhung Nổi Cao Cấp Chuẩn Ngoại Hạng (+50.000₫/bộ)', extraPrice: 50000 }
    ]
  },
  productCategories: [
    { id: 'all', label: 'Tất Cả Sản Phẩm' },
    { id: 'kits', label: 'Áo Đấu & Trang Phục' },
    { id: 'agility', label: 'Dụng Cụ Thể Lực & Tốc Độ' },
    { id: 'boots-balls', label: 'Giày Đinh & Bóng Thi Đấu' }
  ],
  products: [
    {
      id: 'ps-01',
      name: 'Bộ Áo Đấu ProSoccer Aura Trắng Phối Xanh Ngọc',
      category: 'kits',
      categoryLabel: 'ÁO ĐẤU CLB',
      price: '235.000₫',
      oldPrice: '290.000₫',
      badge: 'MẪU HOT NHẤT',
      specs: 'Vải dệt kim Jacquard • Miễn phí in Tên + Số khi đặt từ 10 bộ',
      image: 'https://images.unsplash.com/photo-1577212017184-80cc0da11082?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-02',
      name: 'Bóng Thi Đấu ProSoccer Match Pro Số 5 Chuẩn FIFA Quality',
      category: 'boots-balls',
      categoryLabel: 'BÓNG THI ĐẤU',
      price: '790.000₫',
      oldPrice: '950.000₫',
      badge: 'ÉP NHIỆT KHÔNG ĐƯỜNG MAY',
      specs: 'Da PU Microfiber Nhật Bản • Quỹ đạo bay ổn định mọi thời tiết',
      image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-03',
      name: 'Bộ Thang Dây Tập Tốc Độ Chân & Nấm Chiến Thuật (6m - 12 Bậc)',
      category: 'agility',
      categoryLabel: 'DỤNG CỤ THỂ LỰC',
      price: '345.000₫',
      oldPrice: '420.000₫',
      badge: 'COMBO TỐC ĐỘ',
      specs: '1 Thang dây PP dẻo + 20 Nấm nhựa đàn hồi + Túi đựng chuyên dụng',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-04',
      name: 'Giày Đá Bóng Sân Cỏ Nhân Tạo Đế TF Đinh Dăm Chống Trượt',
      category: 'boots-balls',
      categoryLabel: 'GIÀY ĐÁ BÓNG',
      price: '1.150.000₫',
      oldPrice: '1.450.000₫',
      badge: 'ĐẾ ĐỆM EVA ÊM ÁI',
      specs: 'Cổ thun ôm cổ chân • Đế cao su non bám sân ướt cực tốt',
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-05',
      name: 'Dù Kháng Lực Chạy Nước Rút Speed Chute 56 Inch',
      category: 'agility',
      categoryLabel: 'DỤNG CỤ THỂ LỰC',
      price: '280.000₫',
      oldPrice: '350.000₫',
      badge: 'BỨT TỐC 30M',
      specs: 'Lực cản 11-15kg • Đai lưng xoay 360 độ luyện bứt tốc đoạn ngắn',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-06',
      name: 'Bộ Quần Áo Giữ Nhiệt Bó Cơ Compression Pro-Shield',
      category: 'kits',
      categoryLabel: 'TRANG PHỤC BỔ TRỢ',
      price: '420.000₫',
      oldPrice: '520.000₫',
      badge: 'CHỐNG CHUỘT RÚT',
      specs: 'Sợi Spandex nén cơ giảm rung lắc cơ đùi • Chống tia UV UPF50+',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-07',
      name: 'Bộ Rào Nhảy Plyometric Tăng Sức Bật Tranh Chấp Bóng Bổng',
      category: 'agility',
      categoryLabel: 'DỤNG CỤ THỂ LỰC',
      price: '580.000₫',
      oldPrice: '700.000₫',
      badge: 'SET 5 RÀO',
      specs: 'Điều chỉnh 3 mức độ cao 15-23-30cm • Nhựa ABS chịu lực va đập',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80'
    },
    {
      id: 'ps-08',
      name: 'Găng Tay Thủ Môn ProGrip Latex Đức 4mm Có Xương Ngón',
      category: 'boots-balls',
      categoryLabel: 'PHỤ KIỆN THỦ MÔN',
      price: '690.000₫',
      oldPrice: '850.000₫',
      badge: 'BẮT DÍNH MỌI THỜI TIẾT',
      specs: 'Mút Contact Latex 4mm siêu dính • 5 xương bảo vệ chốngật ngón',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80'
    }
  ],
  conditioningPrograms: [
    {
      code: 'S&C-01',
      title: 'Bứt Tốc Độ & Đổi Hướng Đột Ngột (Speed & Agility)',
      duration: '8 Tuần • 24 Buổi (Sân cỏ + Phòng Gym)',
      target: 'Tiền đạo cánh, Hậu vệ biên, Cầu thủ sân 7',
      metrics: 'Giảm 0.25s cự ly chạy 20m đầu • Tăng 32% tốc độ xoay trụ',
      desc: 'Kết hợp bài tập thang dây tần số bước chân, dù kháng lực và tạ đòn Trap-bar Deadlift giúp cầu thủ bứt tốc vượt qua hậu vệ chỉ trong 3 bước đầu tiên.',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80'
    },
    {
      code: 'S&C-02',
      title: 'Sức Bền Thể Lực 90 Phút Không Hụt Hơi (VO2 Max Engine)',
      duration: '6 Tuần • 18 Buổi Chuyên Sâu',
      target: 'Tiền vệ trung tâm (Box-to-Box), Đội bóng đá giải phong trào',
      metrics: 'Tăng 18% chỉ số VO2 Max • Phục hồi nhịp tim nhanh gấp 1.6 lần',
      desc: 'Áp dụng phương pháp chạy biến tốc HIIT Eurofit kết hợp xe đạp gió Assault Bike giúp duy trì nền tảng thể lực sung mãn suốt 2 hiệp đấu.',
      image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=80'
    },
    {
      code: 'S&C-03',
      title: 'Sức Mạnh Tỳ Đè & Phòng Chống Chấn Thương Dây Chằng ACL',
      duration: '10 Tuần • Cá Nhân Hóa 1-Kèm-1',
      target: 'Trung vệ, Tiền đạo cắm, Cầu thủ sau phẫu thuật gối/cổ chân',
      metrics: 'Giảm 65% nguy cơ lật sơ-mi & đứt dây chằng chéo trước (ACL)',
      desc: 'Phác đồ FIFA 11+ kết hợp bài tập Nordic Hamstring, giữ thăng bằng Bosu và tăng cường nhóm cơ Core - Mông - Đùi sau cực kỳ vững chắc.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80'
    }
  ],
  teamPackages: [
    {
      name: 'GÓI ĐỘI BÓNG PHONG TRÀO (TỪ 10 BỘ)',
      price: '165.000₫',
      unit: '/ bộ hoàn chỉnh',
      highlight: false,
      perks: [
        'Tặng 100% chi phí in Tên + Số + Logo CLB ngực trái',
        'Tặng 01 Băng đội trưởng + 01 Túi đựng bóng lưới',
        'Thiết kế demo 3D phối màu miễn phí trong 2 giờ',
        'Giao hàng hỏa tốc nội thành TP.HCM trong 48h'
      ]
    },
    {
      name: 'GÓI CLB CHUYÊN NGHIỆP & CÔNG TY (TỪ 20 BỘ)',
      price: '215.000₫',
      unit: '/ bộ vải Jacquard cao cấp',
      highlight: true,
      perks: [
        'Vải dệt kim Jacquard thoáng khí + In Decal Hàn Quốc',
        'Tặng 01 Quả bóng thi đấu FIFA Quality trị giá 790.000₫',
        'Tặng 02 buổi HLV Thể lực Bóng đá khởi động chuyên nghiệp cho cả đội',
        'Bảo hành in ấn trọn đời — Đổi mới nếu bong tróc'
      ]
    },
    {
      name: 'GÓI ĐÀO TẠO THỂ LỰC TOÀN ĐỘI (PRE-SEASON)',
      price: '6.900.000₫',
      unit: '/ đội (15 cầu thủ - 8 buổi)',
      highlight: false,
      perks: [
        'HLV S&C bằng cấp AFC trực tiếp huấn luyện tại sân hoặc phòng Gym',
        'Đo lường tốc độ bứt tốc bằng cổng laser quang học',
        'Cung cấp toàn bộ dụng cụ: Thang dây, Rào nhảy, Dù kháng lực',
        'Tặng 15 áo bib tập luyện phân đội 2 màu dạ quang'
      ]
    }
  ]
};
