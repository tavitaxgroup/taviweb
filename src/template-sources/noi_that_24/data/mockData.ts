export interface ShowroomProduct {
  id: string;
  code: string;
  name: string;
  categoryGroup: 'khuyen-mai' | 'goi-y' | 'gia-dinh' | 'ban';
  subTab?: 'moi-noi-bat' | 'ban-chay' | 'giam-gia';
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  onSale?: boolean;
  image: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
}

export interface NoiThat24TemplateData {
  business: {
    name: string;
    brandTitle: string;
    brandSub: string;
    hotline: string;
    phone: string[];
    email: string[];
    officeAddress: string;
    returnCenterAddress: string;
    businessLicense: string;
    workingHours: string;
    searchPlaceholder: string;
  };
  topPromoBar: {
    appLabel: string;
    highlights: string[];
  };
  categories: {
    id: string;
    label: string;
    count: number;
    targetSection: string;
  }[];
  trustBadges: {
    id: string;
    title: string;
    subtitle: string;
  }[];
  heroSlides: {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    brandTag: string;
    image: string;
  }[];
  familyBanner: {
    brandName: string;
    brandSlogan: string;
    headlineLine1: string;
    headlineLine2: string;
    topImage: string;
    bottomImage: string;
  };
  tableBanner: {
    titleTop: string;
    titleHighlight: string;
    titleBottom: string;
    mainImage: string;
    detailImages: string[];
  };
  products: ShowroomProduct[];
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonLabel: string;
  };
}

export const defaultNoiThat24Data: NoiThat24TemplateData = {
  business: {
    name: 'Showroom Nội Thất Sáng Tạo MONA',
    brandTitle: 'Furniture',
    brandSub: 'MONA',
    hotline: '0126 922 0162',
    phone: ['0126 922 0162', '0909 686 151'],
    email: ['cskh@monafurniture.vn', 'duan@monafurniture.vn'],
    officeAddress: '151 Hồ Bá Kiện, P15, Q10, TP. Hồ Chí Minh',
    returnCenterAddress: 'Trung tâm xử lý đơn hàng MONA - 151 Hồ Bá Kiện, Phường 15, Quận 10, TP. Hồ Chí Minh',
    businessLicense: 'Giấy phép kinh doanh: 0313728397. Sở kế hoạch và đầu tư thành phố Hồ Chí Minh',
    workingHours: '1000đ/phút , 8-21h kể cả T7, CN',
    searchPlaceholder: 'Tìm sản phẩm, thương hiệu và tên shop'
  },
  topPromoBar: {
    appLabel: 'Mona App - Ưu đãi ngay trên tay',
    highlights: [
      'Khuyến mãi HOT',
      'Tặng đến 3.000.000đ khi mở thẻ tín dụng',
      'Ưu đãi cho chủ thẻ ngân hàng',
      'Bán hàng cùng Mona'
    ]
  },
  categories: [
    { id: 'cat-y-te', label: 'Nội Thất Y Tế', count: 48, targetSection: 'section-goi-y' },
    { id: 'cat-gia-dinh', label: 'Nội Thất Gia Đình', count: 165, targetSection: 'section-gia-dinh' },
    { id: 'cat-hoi-truong', label: 'Nội Thất Hội Trường', count: 72, targetSection: 'section-khuyen-mai' },
    { id: 'cat-truong-hoc', label: 'Trường Học', count: 64, targetSection: 'section-ban' },
    { id: 'cat-tu-tai-lieu', label: 'Tủ Tài Liệu', count: 93, targetSection: 'section-goi-y' },
    { id: 'cat-ban', label: 'Bàn', count: 140, targetSection: 'section-ban' },
    { id: 'cat-ghe', label: 'Ghế', count: 118, targetSection: 'section-khuyen-mai' },
    { id: 'cat-do-gia-dung', label: 'Đồ Gia Dụng', count: 85, targetSection: 'section-gia-dinh' },
    { id: 'cat-gia-sat', label: 'Giá Sắt', count: 39, targetSection: 'section-gia-dinh' },
    { id: 'cat-gia-sieu-thi', label: 'Giá Siêu Thị', count: 27, targetSection: 'section-goi-y' },
    { id: 'cat-ket-sat', label: 'Két Sắt', count: 32, targetSection: 'section-goi-y' }
  ],
  trustBadges: [
    {
      id: 'tb-1',
      title: '2-tiếng giao hàng',
      subtitle: 'Hàng chục nghìn sản phẩm'
    },
    {
      id: 'tb-2',
      title: 'Tất cả sản phẩm',
      subtitle: '100% chính hãng'
    },
    {
      id: 'tb-3',
      title: '30 ngày',
      subtitle: 'đổi trả dễ dàng'
    }
  ],
  heroSlides: [
    {
      id: 'slide-1',
      badge: 'SHOWROOM NỘI THẤT SÁNG TẠO 2026',
      title: 'Không Gian Sống Bắc Âu & Văn Phòng Hiện Đại',
      subtitle: 'Giải pháp nội thất trọn gói cho căn hộ, văn phòng, hội trường và trường học với giá xuất xưởng.',
      brandTag: 'DECOX INTERIOR',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85'
    },
    {
      id: 'slide-2',
      badge: 'ƯU ĐÃI TRỌN BỘ PHÒNG KHÁCH & PHÒNG ĂN',
      title: 'Tinh Hoa Gỗ Tự Nhiên & Thiết Kế Công Thái Học',
      subtitle: 'Miễn phí khảo sát mặt bằng 3D và lắp đặt tận nơi trong vòng 2 giờ tại nội thành.',
      brandTag: 'MONA STUDIO',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85'
    },
    {
      id: 'slide-3',
      badge: 'DỰ ÁN HỘI TRƯỜNG & DOANH NGHIỆP',
      title: 'Nâng Tầm Không Gian Làm Việc Chuyên Nghiệp',
      subtitle: 'Chiết khấu đến 25% cho đơn hàng dự án văn phòng, trường học và bệnh viện.',
      brandTag: 'TOP DECOR',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85'
    }
  ],
  familyBanner: {
    brandName: 'TOP DECOR',
    brandSlogan: 'Fulfill your dream',
    headlineLine1: 'NỘI THẤT VĂN PHÒNG & GIA ĐÌNH CAO CẤP',
    headlineLine2: 'HÀNG ĐÃ CHẤT GIÁ LẠI RẺ',
    topImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    bottomImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
  },
  tableBanner: {
    titleTop: 'BỘ BÀN ĂN',
    titleHighlight: 'NỘI THẤT',
    titleBottom: 'PHÒNG ĂN',
    mainImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=900&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=400&q=80'
    ]
  },
  products: [
    // 1. KHUYẾN MÃI HẤP DẪN (5 products)
    {
      id: 'km-1',
      code: 'LT04',
      name: 'Bục phát biểu LT04',
      categoryGroup: 'khuyen-mai',
      categoryLabel: 'NỘI THẤT HỘI TRƯỜNG',
      price: 4889000,
      oldPrice: 5059000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80',
      dimensions: '800 x 600 x 1200 mm',
      material: 'Gỗ công nghiệp sơn PU cao cấp chạm hoa văn',
      warranty: '12 tháng chính hãng',
      description: 'Bục phát biểu hội trường LT04 thiết kế trang trọng với thân trụ vững chãi, mặt để tài liệu nghiêng chuẩn tầm mắt.'
    },
    {
      id: 'km-2',
      code: 'TC06B',
      name: 'Ghế hội trường TC06B',
      categoryGroup: 'khuyen-mai',
      categoryLabel: 'NỘI THẤT HỘI TRƯỜNG',
      price: 4399000,
      oldPrice: 4589000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80',
      dimensions: '660 x 740-860 x 1000 mm',
      material: 'Khung thép sơn tĩnh điện, đệm mút đúc bọc nỉ đỏ',
      warranty: '24 tháng chính hãng',
      description: 'Ghế hội trường cao cấp tích hợp bàn viết gỗ gập gọn trong hộp tay vịn, đệm ngồi tự lật êm ái.'
    },
    {
      id: 'km-3',
      code: 'TC10',
      name: 'Ghế rạp chiếu phim TC10',
      categoryGroup: 'khuyen-mai',
      categoryLabel: 'NỘI THẤT HỘI TRƯỜNG',
      price: 2582000,
      oldPrice: 2750000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80',
      dimensions: '1250 x 720 x 1020 mm (Đôi)',
      material: 'Nỉ chống cháy cao cấp, tay vịn tích hợp khay để cốc',
      warranty: '24 tháng chính hãng',
      description: 'Ghế đôi rạp chiếu phim & trung tâm hội nghị TC10 thiết kế tựa lưng cao nâng đỡ cột sống tối ưu.'
    },
    {
      id: 'km-4',
      code: 'G894',
      name: 'Ghế khung thép G894',
      categoryGroup: 'khuyen-mai',
      categoryLabel: 'NỘI THẤT HỘI TRƯỜNG',
      price: 385000,
      oldPrice: 405000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80',
      dimensions: '460 x 510 x 820 mm',
      material: 'Khung thép mạ Crom sáng bóng, tựa nhựa ABS nguyên sinh',
      warranty: '12 tháng chính hãng',
      description: 'Ghế phòng họp & đào tạo G894 có thể xếp chồng gọn gàng, độ bền cơ học cao.'
    },
    {
      id: 'km-5',
      code: 'MC02',
      name: 'Ghế hội trường MC02',
      categoryGroup: 'khuyen-mai',
      categoryLabel: 'NỘI THẤT HỘI TRƯỜNG',
      price: 485000,
      oldPrice: 500000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
      dimensions: '450 x 520 x 880 mm',
      material: 'Khung ống thép 20x20 sơn tĩnh điện, nệm nhung đỏ',
      warranty: '12 tháng chính hãng',
      description: 'Ghế khánh tiết hội trường MC02 kiểu dáng truyền thống sang trọng, đệm mút dày chống xẹp lún.'
    },

    // 2. GỢI Ý DÀNH RIÊNG CHO BẠN (5 products)
    {
      id: 'gy-1',
      code: 'XDY-01',
      name: 'Xe đẩy y tế inox 3 tầng',
      categoryGroup: 'goi-y',
      categoryLabel: 'NỘI THẤT Y TẾ',
      price: 1322000,
      onSale: false,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
      dimensions: '800 x 500 x 900 mm',
      material: 'Inox SUS 304 chuẩn y tế chống ăn mòn hóa chất',
      warranty: '36 tháng chính hãng',
      description: 'Xe đẩy dụng cụ y tế 2 tầng có lan can bảo vệ và 4 bánh xe xoay 360 độ có khóa hãm.'
    },
    {
      id: 'gy-2',
      code: 'HR1800-2B',
      name: 'Tủ HR1800-2B',
      categoryGroup: 'goi-y',
      categoryLabel: 'TỦ TÀI LIỆU',
      price: 3425000,
      oldPrice: 3500000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
      dimensions: '1800 x 400 x 1960 mm',
      material: 'Gỗ Melamine vân sồi chống trầy xước, chống ẩm',
      warranty: '24 tháng chính hãng',
      description: 'Tủ kệ hồ sơ kết hợp kệ trưng bày Royal HR1800-2B thiết kế hiện đại cho phòng giám đốc.'
    },
    {
      id: 'gy-3',
      code: 'GPC03',
      name: 'Ghế Phòng Chờ',
      categoryGroup: 'goi-y',
      categoryLabel: 'GHẾ',
      price: 2090000,
      oldPrice: 2150000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=600&q=80',
      dimensions: '1800 x 650 x 780 mm (Băng 3 chỗ)',
      material: 'Inox đột lỗ thoáng khí + Chân hợp kim mạ Crom',
      warranty: '24 tháng chính hãng',
      description: 'Ghế băng chờ 3 chỗ ngồi chuyên dụng cho sảnh bệnh viện, ngân hàng và trung tâm hành chính.'
    },
    {
      id: 'gy-4',
      code: 'LT01',
      name: 'Bục phát biểu LT01',
      categoryGroup: 'goi-y',
      categoryLabel: 'NỘI THẤT HỘI TRƯỜNG',
      price: 2589000,
      oldPrice: 2750000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
      dimensions: '750 x 550 x 1180 mm',
      material: 'Gỗ công nghiệp sơn PU màu cánh gián đậm',
      warranty: '12 tháng chính hãng',
      description: 'Bục phát biểu hội nghị LT01 kiểu dáng vát chữ V hiện đại, có ngăn để micro và laptop.'
    },
    {
      id: 'gy-5',
      code: 'BKB02',
      name: 'Bàn khám bệnh BKB02',
      categoryGroup: 'goi-y',
      categoryLabel: 'NỘI THẤT Y TẾ',
      price: 1850000,
      oldPrice: 2100000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      dimensions: '1900 x 650 x 680 mm',
      material: 'Khung thép sơn tĩnh điện/Inox, đệm mút bọc giả da y tế',
      warranty: '24 tháng chính hãng',
      description: 'Giường bàn khám bệnh nâng hạ đầu đa cấp độ, chân đế bọc cao su chống trượt chắc chắn.'
    },

    // 3. NỘI THẤT GIA ĐÌNH (5 products)
    {
      id: 'gd-1',
      code: 'GSB-01',
      name: 'Giá để sách báo',
      categoryGroup: 'gia-dinh',
      subTab: 'moi-noi-bat',
      categoryLabel: 'NỘI THẤT GIA ĐÌNH',
      price: 975000,
      oldPrice: 1100000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=600&q=80',
      dimensions: '800 x 300 x 1600 mm',
      material: 'Gỗ MDF lõi xanh chống ẩm phủ Melamine trắng',
      warranty: '12 tháng chính hãng',
      description: 'Kệ sách 5 tầng chia ô thông minh giúp lưu trữ sách báo và đồ decor phòng khách gọn gàng.'
    },
    {
      id: 'gd-2',
      code: 'TQA-03',
      name: 'Tủ quần áo',
      categoryGroup: 'gia-dinh',
      subTab: 'moi-noi-bat',
      categoryLabel: 'NỘI THẤT GIA ĐÌNH',
      price: 5420000,
      oldPrice: 5500000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=600&q=80',
      dimensions: '1600 x 600 x 2050 mm',
      material: 'Gỗ thông/sồi tự nhiên đã qua tẩm sấy chống mối mọt',
      warranty: '36 tháng chính hãng',
      description: 'Tủ quần áo 3 cánh gỗ tự nhiên vân sáng ấm cúng, thiết kế buồng treo rộng rãi và ngăn kéo khóa an toàn.'
    },
    {
      id: 'gd-3',
      code: 'KTV-08',
      name: 'Kệ tivi',
      categoryGroup: 'gia-dinh',
      subTab: 'moi-noi-bat',
      categoryLabel: 'NỘI THẤT GIA ĐÌNH',
      price: 3850000,
      oldPrice: 4000000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
      dimensions: '1800 x 420 x 1650 mm',
      material: 'Gỗ công nghiệp An Cường kết hợp kệ trang trí đa tầng',
      warranty: '24 tháng chính hãng',
      description: 'Tủ kệ tivi liền vách trang trí phòng khách hiện đại, tối ưu diện tích cho căn hộ chung cư.'
    },
    {
      id: 'gd-4',
      code: 'BGT-PN01',
      name: 'Bộ giường tủ phòng ngủ',
      categoryGroup: 'gia-dinh',
      subTab: 'ban-chay',
      categoryLabel: 'NỘI THẤT GIA ĐÌNH',
      price: 4590000,
      oldPrice: 4700000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Giường 1m8x2m + Tủ 2m + Tab đầu giường',
      material: 'Gỗ MDF phủ Acrylic bóng gương phối vân gỗ',
      warranty: '36 tháng chính hãng',
      description: 'Combo nội thất phòng ngủ đồng bộ gồm giường ngủ hiện đại, tủ áo cánh lùa và bàn trang điểm.'
    },
    {
      id: 'gd-5',
      code: 'BGT-BG02',
      name: 'Bộ giường tủ phòng ngủ bé gái',
      categoryGroup: 'gia-dinh',
      subTab: 'ban-chay',
      categoryLabel: 'NỘI THẤT GIA ĐÌNH',
      price: 5100000,
      oldPrice: 5260000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Giường tầng 1m2 + Cầu thang hộp + Bàn học',
      material: 'Gỗ MDF sơn Inchem cao cấp không chì an toàn cho bé',
      warranty: '24 tháng chính hãng',
      description: 'Bộ phòng ngủ màu hồng pastel ngọt ngào tích hợp giường ngủ, tủ áo và góc học tập thông minh.'
    },

    // 4. BÀN (5 products)
    {
      id: 'ban-1',
      code: 'HU12S',
      name: 'Bàn làm việc chân sắt HU12S',
      categoryGroup: 'ban',
      subTab: 'moi-noi-bat',
      categoryLabel: 'BÀN',
      price: 985000,
      oldPrice: 1050000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 600 x 750 mm',
      material: 'Mặt gỗ Laminate chống nước, khung thép sơn tĩnh điện ghi sáng',
      warranty: '12 tháng chính hãng',
      description: 'Bàn làm việc nhân viên chân sắt có yếm lửng và hộc tủ di động tiện lợi.'
    },
    {
      id: 'ban-2',
      code: 'CT2412H7',
      name: 'Bàn họp sơn PU CT2412H7',
      categoryGroup: 'ban',
      subTab: 'moi-noi-bat',
      categoryLabel: 'BÀN',
      price: 9350000,
      oldPrice: 9540000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      dimensions: '2400 x 1200 x 760 mm (8-10 người)',
      material: 'Gỗ công nghiệp sơn PU 5 lớp màu nâu đỏ sang trọng',
      warranty: '24 tháng chính hãng',
      description: 'Bàn họp оваl cao cấp dành cho phòng họp lãnh đạo, tích hợp nắp luồn dây điện hợp kim nhôm.'
    },
    {
      id: 'ban-3',
      code: 'NTH4315',
      name: 'Bàn họp Newtrend NTH4315',
      categoryGroup: 'ban',
      subTab: 'ban-chay',
      categoryLabel: 'BÀN',
      price: 8950000,
      oldPrice: 9500000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
      dimensions: '4300 x 1500 x 750 mm (16-20 người)',
      material: 'Gỗ Laminate phối màu vân gỗ & đen quyền lực',
      warranty: '24 tháng chính hãng',
      description: 'Bàn hội nghị cỡ lớn Newtrend thiết kế quây rỗng giữa để trang trí hoa tươi và hệ thống micro.'
    },
    {
      id: 'ban-4',
      code: 'AT202',
      name: 'Bàn máy tính AT202',
      categoryGroup: 'ban',
      subTab: 'giam-gia',
      categoryLabel: 'BÀN',
      price: 1580000,
      oldPrice: 1700000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 600 x 750 mm',
      material: 'Gỗ Melamine vân sồi sáng có khay bàn phím và kệ CPU',
      warranty: '12 tháng chính hãng',
      description: 'Bàn vi tính đa năng tích hợp ngăn kéo có khóa, khay trượt bàn phím và hộc để cây máy tính.'
    },
    {
      id: 'ban-5',
      code: 'BK206',
      name: 'Bàn học sinh liền giá sách BK206',
      categoryGroup: 'ban',
      subTab: 'giam-gia',
      categoryLabel: 'BÀN',
      price: 1675000,
      oldPrice: 1800000,
      onSale: true,
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=600&q=80',
      dimensions: '1000 x 550 x 1800 mm',
      material: 'Gỗ Melamine cao cấp chống ẩm mốc, bản lề giảm chấn',
      warranty: '24 tháng chính hãng',
      description: 'Bàn học liền kệ sách cao kịch trần giúp tối ưu không gian lưu trữ sách vở và đồ dùng học tập.'
    }
  ],
  newsletter: {
    title: 'Đăng ký nhận bản tin Mona',
    subtitle: 'Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn',
    placeholder: 'Địa chỉ email của bạn',
    buttonLabel: 'ĐĂNG KÝ'
  }
};
