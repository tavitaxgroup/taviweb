export interface MallProduct {
  id: string;
  code: string;
  name: string;
  group: 'new' | 'bestseller' | 'honey-deals' | 'living-tech' | 'home-care' | 'viewed';
  categoryLabel: string;
  discountPercent?: number;
  price: number;
  oldPrice?: number;
  rating?: number;
  isBestBadge?: boolean;
  image: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
}

export interface NoiThat28TemplateData {
  business: {
    name: string;
    brandPrefix: string;
    brandNumber: string;
    brandSuffix: string;
    phone: string[];
    email: string[];
    address: string;
    skype: string;
    businessLicense: string;
    workingHours: string;
    searchPlaceholder: string;
  };
  categoriesSidebar: {
    id: string;
    label: string;
    targetId: string;
  }[];
  navLinks: string[];
  vipHero: {
    badge: string;
    title: string;
    discountLabel: string;
    subtitle: string;
    coupons: { code: string; percent: string }[];
    bottomLeftTitle: string;
    bottomLeftSub: string;
    bottomLeftImage: string;
    bottomRightBrand: string;
    bottomRightDiscount: string;
    bottomRightImage: string;
    sideGrid: {
      id: string;
      brand: string;
      subtitle: string;
      bgColor: string;
      textColor: string;
      image: string;
    }[];
  };
  categoryShowcase1: {
    headerTitle: string;
    accentColor: string;
    subTitle: string;
    subLinks: string[];
    brands: string[];
    posterBrand: string;
    posterTitle: string;
    posterDiscount: string;
    posterImage: string;
    bottomBanners: {
      title: string;
      priceText: string;
      bgColor: string;
      image: string;
    }[];
  };
  categoryShowcase2: {
    headerTitle: string;
    accentColor: string;
    subTitle: string;
    subLinks: string[];
    brands: string[];
    posterBrand: string;
    posterTitle: string;
    posterDiscount: string;
    posterImage: string;
    bottomBanners: {
      title: string;
      highlightText: string;
      bgColor: string;
      image: string;
    }[];
  };
  loungeSection: {
    heading: string;
    subHeading: string;
    luckyTitle: string;
    luckyTask: string;
    luckyPoints: string;
    cafeArticles: {
      id: string;
      title: string;
      excerpt: string;
      image: string;
    }[];
    membershipBenefits: string[];
  };
  bankAccounts: {
    bank: string;
    account: string;
  }[];
  products: MallProduct[];
}

export const defaultNoiThat28Data: NoiThat28TemplateData = {
  business: {
    name: 'Mona24 — Trung Tâm Mua Sắm Nội Thất & Trang Trí Nhà Cửa',
    brandPrefix: 'MONA',
    brandNumber: '24',
    brandSuffix: '.COM',
    phone: ['028 5411 9000', '0126 922 0162'],
    email: ['cskh@mona24.vn', 'support@mona.media'],
    address: '151 Hồ Bá Kiện, Phường 15, Quận 10, TP. Hồ Chí Minh',
    skype: 'mona24.living',
    businessLicense: 'Giấy phép kinh doanh: 0313728397 – Sở Kế hoạch và Đầu tư TP.HCM',
    workingHours: 'Thứ hai đến thứ sáu 08:00 ~ 20:00 (Nghỉ vào các ngày Lễ và Chủ nhật)',
    searchPlaceholder: 'Tìm sản phẩm nội thất, thương hiệu và tên showroom'
  },
  categoriesSidebar: [
    { id: 'c-1', label: 'Nội thất phòng khách', targetId: 'section-showcase-1' },
    { id: 'c-2', label: 'Bàn đầu giường & Kệ decor', targetId: 'section-bestseller' },
    { id: 'c-3', label: 'Đồng hồ & Tranh treo tường', targetId: 'section-honey-deals' },
    { id: 'c-4', label: 'Ghế thư giãn & Ghế hơi', targetId: 'section-viewed' },
    { id: 'c-5', label: 'Chăn ga gối nệm cao cấp', targetId: 'section-new' },
    { id: 'c-6', label: 'Đèn bàn & Đèn trang trí', targetId: 'section-showcase-1' },
    { id: 'c-7', label: 'Bàn ghế làm việc tại nhà', targetId: 'section-showcase-1' },
    { id: 'c-8', label: 'Tủ sách & Kệ đa năng', targetId: 'section-bestseller' },
    { id: 'c-9', label: 'Gia dụng thông minh Lock&Lock', targetId: 'section-showcase-2' },
    { id: 'c-10', label: 'Phụ kiện phòng tắm & Nhà bếp', targetId: 'section-showcase-2' },
    { id: 'c-11', label: 'Chăm sóc nhà cửa & Tinh dầu', targetId: 'section-showcase-2' },
    { id: 'c-12', label: 'Thiết bị điện gia dụng', targetId: 'section-showcase-1' }
  ],
  navLinks: [
    'Thương hiệu',
    'Membership',
    'Café Style Nội Thất',
    'Honey Deals',
    'Top Seller',
    'Todaysales'
  ],
  vipHero: {
    badge: 'VÌ BẠN LÀ',
    title: 'V.I.P',
    discountLabel: 'UP TO 50% OFF',
    subtitle: 'ƯU ĐÃI LỚN TRI ÂN KHÁCH HÀNG THÂN THIẾT SHOWROOM NỘI THẤT',
    coupons: [
      { code: 'VIP10', percent: '10%' },
      { code: 'VIP12', percent: '12%' }
    ],
    bottomLeftTitle: 'Bộ Chăn Ga Cotton Lụa',
    bottomLeftSub: 'Ưu đãi từ 360K',
    bottomLeftImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=500&q=80',
    bottomRightBrand: 'LOCK&LOCK',
    bottomRightDiscount: 'SALE UP TO 50%',
    bottomRightImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80',
    sideGrid: [
      {
        id: 'sg-1',
        brand: 'NORDIC LAMP',
        subtitle: 'Giá chỉ từ 169K',
        bgColor: '#fbcfe8',
        textColor: '#831843',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'sg-2',
        brand: 'DECOR HOLIC',
        subtitle: 'Giảm đến 20%',
        bgColor: '#d6bcfa',
        textColor: '#3b0764',
        image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'sg-3',
        brand: 'QUÀ TẶNG TÂN GIA',
        subtitle: 'SALE TÁO BẠO',
        bgColor: '#f3f4f6',
        textColor: '#1f2937',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'sg-4',
        brand: 'LIVING MODA',
        subtitle: 'Giảm hơn 50%',
        bgColor: '#065f46',
        textColor: '#ffffff',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  categoryShowcase1: {
    headerTitle: 'NỘI THẤT & THIẾT BỊ',
    accentColor: '#29b674',
    subTitle: 'PHÒNG KHÁCH & LÀM VIỆC',
    subLinks: [
      'Bàn trà sofa',
      'Kệ tivi treo tường',
      'Bàn làm việc tại nhà',
      'Ghế công thái học',
      'Tủ đầu giường',
      'Đèn cây đọc sách',
      'Kệ sách lắp ghép',
      'Gương soi toàn thân',
      'Phụ kiện bàn làm việc'
    ],
    brands: ['IBE Home', 'TADA Decor'],
    posterBrand: 'PHILIPS & IBE',
    posterTitle: 'Không gian sáng tạo chuẩn Châu Âu',
    posterDiscount: '30%',
    posterImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80',
    bottomBanners: [
      {
        title: 'Đèn bàn chống cận Bắc Âu - Mua là có quà',
        priceText: 'Chỉ từ 425K',
        bgColor: '#e2e8f0',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Phụ kiện trang trí bàn làm việc',
        priceText: 'Giảm đến 50%',
        bgColor: '#5eead4',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  categoryShowcase2: {
    headerTitle: 'GIA DỤNG & ĐỜI SỐNG',
    accentColor: '#d9538f',
    subTitle: 'CHĂM SÓC NHÀ CỬA',
    subLinks: [
      'Hộp bảo quản thực phẩm',
      'Bộ nồi chảo bếp từ',
      'Nước giặt rèm & sofa',
      'Tinh dầu thơm phòng',
      'Khăn tắm sợi tre',
      'Giỏ đựng đồ giặt',
      'Kệ gia vị nhà bếp',
      'Thảm chùi chân siêu thấm'
    ],
    brands: ['Lock&Lock', '3M Home'],
    posterBrand: 'LOCK&LOCK LIVING',
    posterTitle: 'Căn bếp gọn gàng chuẩn Hàn Quốc',
    posterDiscount: '50%',
    posterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80',
    bottomBanners: [
      {
        title: 'Bách Hóa Nhà Cửa Online New',
        highlightText: 'Hot Deal',
        bgColor: '#f1f5f9',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'TINH DẦU THƠM PHÒNG • Không gian thư thái',
        highlightText: 'Mua 1 Tặng 1',
        bgColor: '#f472b6',
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  loungeSection: {
    heading: 'HỘI QUÁN MONA',
    subHeading: 'Hội yêu nhà - Trang trí - Săn quà',
    luckyTitle: 'Kẹo Sao MÓN QUÀ MAY MẮN',
    luckyTask: 'SĂN VOUCHER DECOR NHÀ ĐẸP',
    luckyPoints: '4000 sao',
    cafeArticles: [
      {
        id: 'ca-1',
        title: 'Bí quyết phối màu pastel cho phòng khách căn hộ 60m² thoáng rộng',
        excerpt: 'Sử dụng bàn trà tròn trắng kết hợp kệ treo tường giúp ăn gian diện tích cực hiệu quả...',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'ca-2',
        title: '5 góc làm việc tại nhà tối giản giúp tăng 200% cảm hứng sáng tạo',
        excerpt: 'Chỉ cần một chiếc bàn Rec-F gọn gàng, đèn bàn ánh sáng ấm và chậu cây xanh...',
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300&q=80'
      }
    ],
    membershipBenefits: [
      'Gia tăng giá trị ưu đãi theo hạng thẻ',
      'Thêm YesPoint & Kẹo Sao mỗi đơn hàng',
      'Chính sách đổi trả & lắp đặt ưu tiên',
      'Mã giảm giá nội thất độc quyền hàng tháng'
    ]
  },
  bankAccounts: [
    { bank: 'Vietcombank', account: '009-000-000-000' },
    { bank: 'Agribank', account: '11101122022220' },
    { bank: 'Techcombank', account: '456-7898-8956' },
    { bank: 'Đông Á', account: '222-333-555-999' },
    { bank: 'Á Châu (ACB)', account: '1110-11220-22220' },
    { bank: 'VietinBank', account: '123-156-236-789' }
  ],
  products: [
    // SẢN PHẨM MỚI (5 items)
    {
      id: 'np-1',
      code: 'OMO-27K',
      name: 'Bộ 2 nước giặt chăm sóc vải nội thất & rèm cửa 2.7kg',
      group: 'new',
      categoryLabel: 'CHĂM SÓC NHÀ CỬA',
      price: 314000,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
      dimensions: '2 túi x 2.7kg',
      material: 'Tinh chất hương hoa thiên nhiên',
      warranty: 'Chính hãng',
      description: 'Giặt sạch vết bẩn trên vỏ đệm sofa, rèm cửa và thảm trải sàn.'
    },
    {
      id: 'np-2',
      code: 'GLASS-SET',
      name: 'Bộ 6 ly thủy tinh pha lê bàn ăn sang trọng Châu Âu',
      group: 'new',
      categoryLabel: 'PHÒNG ĂN & BẾP',
      discountPercent: 23,
      price: 317000,
      oldPrice: 412000,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Dung tích 350ml x 6 ly',
      material: 'Thủy tinh pha lê không chì',
      warranty: '12 tháng',
      description: 'Điểm nhấn hoàn hảo cho bàn tiệc gia đình hiện đại.'
    },
    {
      id: 'np-3',
      code: 'PLANT-MINI',
      name: 'Bộ 3 chậu cây tiểu cảnh để bàn làm việc & kệ tivi',
      group: 'new',
      categoryLabel: 'TRANG TRÍ NHÀ CỬA',
      discountPercent: 25,
      price: 127000,
      oldPrice: 170000,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Cao 18cm x Rộng 12cm',
      material: 'Chậu gốm sứ trắng men mờ',
      warranty: 'Đổi trả 30 ngày',
      description: 'Mang sắc xanh tươi mát vào không gian phòng khách và bàn học.'
    },
    {
      id: 'np-4',
      code: 'DIFF-290',
      name: 'Hộp quà tinh dầu thơm phòng & nến thơm thư giãn Nhật Bản',
      group: 'new',
      categoryLabel: 'HƯƠNG THƠM PHÒNG NGỦ',
      price: 290000,
      isBestBadge: true,
      image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Hộp quà 20 x 15 x 8 cm',
      material: 'Sáp đậu nành tự nhiên & Tinh dầu nguyên chất',
      warranty: 'Chính hãng Nhật Bản',
      description: 'Món quà tân gia tinh tế mang lại giấc ngủ sâu mỗi tối.'
    },
    {
      id: 'np-5',
      code: 'LINEN-145',
      name: 'Bộ khăn trải bàn & vỏ gối tựa sofa vải Linen thêu họa tiết',
      group: 'new',
      categoryLabel: 'PHỤ KIỆN SOFA',
      discountPercent: 50,
      price: 145000,
      oldPrice: 290000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Khăn 140x200cm + 2 Vỏ gối 45x45cm',
      material: 'Vải đũi Linen thoáng mát',
      warranty: '6 tháng',
      description: 'Làm mới diện mạo bộ sofa và bàn ăn chỉ trong tích tắc.'
    },

    // SẢN PHẨM BÁN CHẠY (4 items + 1 promo card in UI)
    {
      id: 'bs-1',
      code: 'ART-FIG',
      name: 'Tượng decor nghệ thuật trang trí kệ tivi & tủ rượu Bắc Âu',
      group: 'bestseller',
      categoryLabel: 'ĐỒ DECOR CAO CẤP',
      price: 1600000,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Cao 38cm x Rộng 22cm',
      material: 'Composite đúc đặc mạ màu thủ công',
      warranty: '24 tháng',
      description: 'Điểm nhấn nghệ thuật độc bản cho kệ tivi phòng khách sang trọng.'
    },
    {
      id: 'bs-2',
      code: 'RUG-158',
      name: 'Thảm trải sàn lông ngắn chống trượt trang trí chân sofa',
      group: 'bestseller',
      categoryLabel: 'THẢM TRẢI SÀN',
      price: 158000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80',
      dimensions: '1200 x 1600 mm',
      material: 'Sợi tổng hợp dệt kim, đế hạt cao su chống trượt',
      warranty: '12 tháng',
      description: 'Êm chân, dễ dàng hút bụi và giặt sạch tại nhà.'
    },
    {
      id: 'bs-3',
      code: 'TAB-140',
      name: 'Bàn tròn để đầu giường sang trọng (trắng) size 50×37',
      group: 'bestseller',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 30,
      price: 140000,
      oldPrice: 199000,
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=500&q=80',
      dimensions: '500 x 370 x 370 mm',
      material: 'Gỗ nhựa WPC chống nước',
      warranty: '12 tháng',
      description: 'Sản phẩm nội thất lắp ghép bán chạy nhất hệ thống Mona24.'
    },
    {
      id: 'bs-4',
      code: 'BOX-69K',
      name: 'Túi hộp vải khung thép đựng chăn màn & quần áo gọn gàng',
      group: 'bestseller',
      categoryLabel: 'LƯU TRỮ THÔNG MINH',
      discountPercent: 42,
      price: 69000,
      oldPrice: 118000,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500&q=80',
      dimensions: '500 x 400 x 330 mm (Dung tích 66L)',
      material: 'Vải Oxford chống thấm + Khung thép chịu lực',
      warranty: '6 tháng',
      description: 'Xếp chồng gọn gàng trong tủ quần áo, có cửa sổ trong suốt dễ tìm đồ.'
    },

    // HONEY DEALS (4 items)
    {
      id: 'hd-1',
      code: 'HD-LINEN',
      name: 'Bộ rèm cửa chống nắng & voan trắng phòng khách cao cấp',
      group: 'honey-deals',
      categoryLabel: 'RÈM CỬA NỘI THẤT',
      discountPercent: 50,
      price: 450000,
      oldPrice: 900000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Ngang 2m5 x Cao 2m7',
      material: 'Vải bố dệt 3 lớp cản sáng 95%',
      warranty: '24 tháng',
      description: 'Cách nhiệt hiệu quả và tạo vẻ mềm mại thanh lịch cho phòng khách.'
    },
    {
      id: 'hd-2',
      code: 'HD-POLISH',
      name: 'Chai sáp dưỡng bóng gỗ tự nhiên & da sofa chuyên dụng 800ml',
      group: 'honey-deals',
      categoryLabel: 'CHĂM SÓC NỘI THẤT',
      discountPercent: 40,
      price: 95000,
      oldPrice: 159000,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Chai 800ml',
      material: 'Sáp ong tự nhiên & Tinh dầu cam',
      warranty: 'Chính hãng',
      description: 'Phục hồi độ bóng mịn và chống nứt nẻ cho đồ gỗ & sofa da.'
    },
    {
      id: 'hd-3',
      code: 'HD-LOCK',
      name: 'Khóa cửa thông minh vân tay & mật mã cho căn hộ hiện đại',
      group: 'honey-deals',
      categoryLabel: 'NHÀ THÔNG MINH',
      discountPercent: 10,
      price: 2690000,
      oldPrice: 3000000,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=500&q=80',
      dimensions: '360 x 75 x 24 mm',
      material: 'Hợp kim kẽm nguyên khối + Kính cường lực',
      warranty: '24 tháng tận nhà',
      description: 'Mở khóa bằng vân tay siêu nhạy 0.3 giây, thẻ từ, mã số và chìa cơ.'
    },
    {
      id: 'hd-4',
      code: 'HD-3M',
      name: 'Bộ 6 sản phẩm vệ sinh & đánh bóng nội thất 3M Thái Lan',
      group: 'honey-deals',
      categoryLabel: 'CHĂM SÓC NHÀ CỬA',
      discountPercent: 27,
      price: 721000,
      oldPrice: 990000,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
      dimensions: 'Trọn bộ 6 chai',
      material: 'Nhập khẩu chính hãng 3M Thái Lan',
      warranty: 'Chính hãng',
      description: 'Giải pháp làm sạch toàn diện cho mọi bề mặt gỗ, da, kính và inox.'
    },

    // LIVING TECH (3 items for Showcase 1)
    {
      id: 'lt-1',
      code: 'IBE-DESK1',
      name: 'Bàn làm việc gỗ sồi chân sắt chữ U kèm kệ sách mini',
      group: 'living-tech',
      categoryLabel: 'NỘI THẤT PHÒNG LÀM VIỆC',
      discountPercent: 33,
      price: 2761999,
      oldPrice: 4127732,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=500&q=80',
      dimensions: '1400 x 600 x 750 mm',
      material: 'Gỗ Sồi tự nhiên + Khung thép sơn tĩnh điện',
      warranty: '24 tháng',
      description: 'Thiết kế rộng rãi đặt vừa 2 màn hình máy tính và dàn âm thanh.'
    },
    {
      id: 'lt-2',
      code: 'SOFA-BED',
      name: 'Sofa giường thông minh gấp gọn bọc vải bố Bắc Âu',
      group: 'living-tech',
      categoryLabel: 'NỘI THẤT PHÒNG KHÁCH',
      discountPercent: 19,
      price: 5684000,
      oldPrice: 6990000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80',
      dimensions: '1800 x 950 x 820 mm (Ngả thành giường 1m2)',
      material: 'Khung gỗ thông sấy + Đệm mút D40 + Vải bố thoáng khí',
      warranty: '36 tháng',
      description: 'Chuyển đổi linh hoạt từ ghế sofa tiếp khách sang giường nằm êm ái.'
    },
    {
      id: 'lt-3',
      code: 'CHAIR-ERG',
      name: 'Ghế xoay làm việc công thái học tựa lưới chống mỏi lưng',
      group: 'living-tech',
      categoryLabel: 'GHẾ VĂN PHÒNG',
      price: 1590000,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80',
      dimensions: '620 x 600 x 1150 mm',
      material: 'Lưới chịu lực thoáng khí + Piston cấp 3 an toàn',
      warranty: '24 tháng',
      description: 'Hỗ trợ thắt lưng chuẩn cột sống cho người làm việc 8 tiếng/ngày.'
    }
  ]
};
