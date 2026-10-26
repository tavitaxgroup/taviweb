export interface BathProduct {
  id: string;
  code: string;
  name: string;
  brand: string;
  category: 'bon-tam' | 'voi-sen' | 'ban-cau' | 'lavabo' | 'phu-kien';
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  discountBadge?: string;
  image: string;
  dimensions: string;
  material: string;
  warranty: string;
  origin: string;
  highlights: string[];
  description: string;
}

export interface UsefulArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  tagline: string;
  country: string;
  accentColor: string;
}

export interface NoiThat23TemplateData {
  business: {
    name: string;
    shortName: string;
    subtitle: string;
    tagline: string;
    phone: string[];
    supportPhone: string;
    warrantyPhone: string;
    email: string[];
    address: string;
    workingHours: string;
    skype: string;
    searchPlaceholder: string;
  };
  navigation: {
    id: string;
    label: string;
    categoryKey: string;
    isPromo?: boolean;
  }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    mainImage: string;
    sideBanners: {
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      ctaText: string;
      image: string;
      theme: 'light' | 'cyan';
    }[];
  };
  usefulNews: {
    heading: string;
    viewAllLabel: string;
    articles: UsefulArticle[];
  };
  brands: {
    heading: string;
    items: BrandPartner[];
  };
  sections: {
    bathtubs: {
      heading: string;
      viewAllLabel: string;
      poster: {
        badge: string;
        title: string;
        subtitle: string;
        footerNote: string;
        image: string;
      };
    };
    showers: {
      heading: string;
      viewAllLabel: string;
      poster: {
        magazineTitle: string;
        issueTag: string;
        boothLabel: string;
        subtitle: string;
        image: string;
      };
    };
    accessories: {
      heading: string;
      viewAllLabel: string;
    };
    recentlyViewed: {
      heading: string;
    };
  };
  products: BathProduct[];
  recentlyViewedItems: {
    id: string;
    name: string;
    price: number;
    image: string;
    categoryLabel: string;
  }[];
  categoryTags: string[];
}

export const defaultNoiThat23Data: NoiThat23TemplateData = {
  business: {
    name: 'MONA Furniture & Bath',
    shortName: 'MONA',
    subtitle: 'Furniture & Bath',
    tagline: 'Hệ Thống Phân Phối Thiết Bị Vệ Sinh & Nội Thất Phòng Tắm Chính Hãng',
    phone: ['0909 922 016', '028 3812 0162'],
    supportPhone: '0909 922 016',
    warrantyPhone: '1800 6892',
    email: ['cskh@monabath.vn', 'duan@monabath.vn'],
    address: '151 Hồ Bá Kiện, Phường 15, Quận 10, TP. Hồ Chí Minh',
    workingHours: '08:00 - 22:00 (Tất cả các ngày trong tuần)',
    skype: 'monabath.support',
    searchPlaceholder: 'Nhập tên bồn tắm, vòi sen, bàn cầu, phụ kiện... cần tìm'
  },
  navigation: [
    { id: 'nav-bon-tam', label: 'BỒN TẮM', categoryKey: 'bon-tam' },
    { id: 'nav-voi-sen', label: 'VÒI SEN', categoryKey: 'voi-sen' },
    { id: 'nav-ban-cau', label: 'BÀN CẦU', categoryKey: 'ban-cau' },
    { id: 'nav-lavabo', label: 'LAVABO', categoryKey: 'lavabo' },
    { id: 'nav-phu-kien', label: 'PHỤ KIỆN', categoryKey: 'phu-kien' },
    { id: 'nav-khuyen-mai', label: 'KHUYẾN MÃI', categoryKey: 'all', isPromo: true }
  ],
  hero: {
    eyebrow: 'KHÔNG GIAN PHÒNG TẮM THƯỢNG LƯU',
    title: 'PHÒNG TẮM ĐẲNG CẤP',
    subtitle: 'GIÁ TỐT CHÍNH HÃNG CÙNG DỊCH VỤ KHẢO SÁT, TƯ VẤN & LẮP ĐẶT TẬN TÂM',
    ctaLabel: 'MUA NGAY',
    mainImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
    sideBanners: [
      {
        id: 'promo-1',
        badge: 'ƯU ĐÃI ĐẾN 12.000.000Đ',
        title: 'Trọn gói combo bồn tắm & sen âm tường Victoria & Albert',
        subtitle: 'Tặng kèm gói lắp đặt chuẩn kỹ thuật Nhật Bản tại nhà',
        ctaText: 'XEM CHI TIẾT',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=80',
        theme: 'light'
      },
      {
        id: 'promo-2',
        badge: 'GIẢI PHÁP THÔNG MINH',
        title: 'Giải Pháp Phòng Tắm & Nhà Bếp Hiện Đại',
        subtitle: 'Công nghệ men sứ Aqua Ceramic & khử khuẩn Ewater+',
        ctaText: 'KHÁM PHÁ',
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80',
        theme: 'cyan'
      }
    ]
  },
  usefulNews: {
    heading: 'THÔNG TIN HỮU ÍCH',
    viewAllLabel: 'Xem tất cả',
    articles: [
      {
        id: 'news-1',
        title: 'Trọn bộ cẩm nang chọn bồn tắm nằm độc lập chuẩn kích thước cho căn hộ & biệt thự',
        date: '22/10/2026',
        category: 'Tư vấn phòng tắm',
        excerpt: 'Khám phá cách bố trí đường cấp thoát nước và lựa chọn chất liệu Acrylic ngọc trai bền đẹp theo năm tháng.',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'news-2',
        title: 'Xu hướng vòi sen nhiệt độ thông minh 2026: An toàn tuyệt đối cho người già & trẻ nhỏ',
        date: '19/10/2026',
        category: 'Công nghệ mới',
        excerpt: 'Công nghệ khóa nhiệt 38 độ C chống bỏng cùng bát sen trộn khí giúp tiết kiệm 35% lượng nước tiêu thụ.',
        image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  brands: {
    heading: 'TOP THƯƠNG HIỆU NỘI THẤT PHÒNG TẮM',
    items: [
      { id: 'brand-toto', name: 'TOTO', tagline: 'Công nghệ Nhật Bản', country: 'Nhật Bản', accentColor: '#004b93' },
      { id: 'brand-caesar', name: 'caesar', tagline: 'Sứ vệ sinh cao cấp', country: 'Đài Loan', accentColor: '#4b5563' },
      { id: 'brand-picenza', name: 'PICENZA', tagline: 'Phong cách Ý sang trọng', country: 'Việt - Ý', accentColor: '#d97706' },
      { id: 'brand-inax', name: 'INAX', tagline: 'Live Well - Sống khỏe', country: 'Nhật Bản', accentColor: '#0284c7' },
      { id: 'brand-kohler', name: 'KOHLER', tagline: 'Chuẩn mực thượng lưu Mỹ', country: 'Hoa Kỳ', accentColor: '#111827' },
      { id: 'brand-amstd', name: 'American Standard', tagline: 'Thiết kế đương đại', country: 'Hoa Kỳ', accentColor: '#1e293b' }
    ]
  },
  sections: {
    bathtubs: {
      heading: 'BỒN TẮM ĐƯỢC QUAN TÂM',
      viewAllLabel: 'Xem tất cả bồn tắm',
      poster: {
        badge: 'BỘ SƯU TẬP 2026',
        title: 'NGHỆ THUẬT THƯ GIÃN TẠI GIA',
        subtitle: 'Bồn tắm ngọc trai & hệ thống sục thủy lực êm ái',
        footerNote: 'Trưng bày trực tiếp tại Showroom Quận 10',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=80'
      }
    },
    showers: {
      heading: 'VÒI SEN ĐƯỢC QUAN TÂM',
      viewAllLabel: 'Xem tất cả vòi sen',
      poster: {
        magazineTitle: 'top fair',
        issueTag: 'Chic • Antique • Nordic Bath',
        boothLabel: 'Halle B5.0 • Stand A28',
        subtitle: 'Bộ sưu tập vòi sen mạ Niken-Crom 5 lớp sáng bóng vượt thời gian',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80'
      }
    },
    accessories: {
      heading: 'PHỤ KIỆN HOT',
      viewAllLabel: 'Xem tất cả Phụ kiện'
    },
    recentlyViewed: {
      heading: 'SẢN PHẨM BẠN VỪA XEM'
    }
  },
  products: [
    // Bồn tắm (3 main + 1 extra)
    {
      id: 'bt-1',
      code: 'PAY1780D#W/DB501R-2B',
      name: 'Bồn Tắm Đặt Sàn TOTO PAY1780D#W/DB501R-2B',
      brand: 'TOTO',
      category: 'bon-tam',
      categoryLabel: 'Bồn Tắm',
      price: 9759000,
      oldPrice: 9850000,
      discountBadge: 'Giảm giá',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
      dimensions: '1700 x 800 x 600 mm',
      material: 'Nhựa Acrylic ngọc trai chống bám bẩn',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Nhật Bản / Việt Nam',
      highlights: [
        'Thiết kế oval nguyên khối sang trọng, ôm sát đường cong cơ thể',
        'Bề mặt chống trơn trượt an toàn, giữ nhiệt nước lâu hơn 40%',
        'Bao gồm bộ xả nhấn mạ Crom cao cấp đồng bộ'
      ],
      description: 'Mẫu bồn tắm nằm độc lập TOTO PAY1780D mang phong cách spa hiện đại vào phòng tắm gia đình với độ sâu tiêu chuẩn giúp ngâm mình thư giãn toàn diện.'
    },
    {
      id: 'bt-2',
      code: 'PAY1770DH#W/DB501R-2B',
      name: 'Bồn Tắm Âm Sàn Có Tay Vịn TOTO PAY1770DH#W/DB501R-2B',
      brand: 'TOTO',
      category: 'bon-tam',
      categoryLabel: 'Bồn Tắm',
      price: 10890000,
      oldPrice: 11050000,
      discountBadge: 'Giảm giá',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=700&q=80',
      dimensions: '1700 x 750 x 558 mm',
      material: 'Acrylic gia cường sợi thủy tinh cao cấp',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Công nghệ Nhật Bản',
      highlights: [
        'Tích hợp đôi tay vịn inox 304 mạ Crom tiện lợi khi bước ra vào',
        'Đáy bồn xử lý nhám chống trượt đạt tiêu chuẩn an toàn quốc tế',
        'Lắp đặt âm bàn đá tạo cảm giác liền mạch, rộng rãi'
      ],
      description: 'Giải pháp bồn tắm xây âm bàn lý tưởng cho phòng tắm master, kết hợp tay vịn chắc chắn và lòng bồn rộng rãi.'
    },
    {
      id: 'bt-3',
      code: 'AMAZON-TP-7009',
      name: 'Bồn Tắm Nằm Massage Thủy Lực Amazon TP-7009',
      brand: 'CAESAR',
      category: 'bon-tam',
      categoryLabel: 'Bồn Tắm',
      price: 7849000,
      oldPrice: 7950000,
      discountBadge: 'Giảm giá',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=80',
      dimensions: '1700 x 850 x 600 mm',
      material: 'Galaxy Ngọc Trai siêu bóng chống ố vàng',
      warranty: '36 tháng thân bồn, 12 tháng máy bơm',
      origin: 'Việt Nam - Linh kiện Châu Âu',
      highlights: [
        'Hệ thống 6 mắt sục thủy lực massage vùng lưng, vai và bàn chân',
        'Tặng kèm 2 gối tựa đầu cao su non êm ái và sen vòi gắn thành bồn',
        'Khung chân Inox 304 chịu lực lên đến 450kg'
      ],
      description: 'Bồn tắm massage Amazon TP-7009 tích hợp máy bơm sục xoáy mạnh mẽ giúp giải tỏa căng thẳng cơ bắp sau ngày làm việc.'
    },

    // Vòi sen (3 main)
    {
      id: 'vs-1',
      code: 'TBS02202B',
      name: 'Vòi Sen Bồn Tắm Nóng Lạnh TOTO TBS02202B',
      brand: 'TOTO',
      category: 'voi-sen',
      categoryLabel: 'Vòi Sen',
      price: 10920000,
      oldPrice: 11050000,
      discountBadge: 'Giảm giá',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=700&q=80',
      dimensions: 'Cao 225 mm • Tâm xả 185 mm',
      material: 'Đồng thau nguyên chất mạ Niken-Crom 5 lớp',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Nhật Bản',
      highlights: [
        'Van đĩa sứ siêu bền vận hành êm ái trên 500.000 lần đóng mở',
        'Đi kèm bát sen cầm tay đa chế độ phun massage dịu nhẹ',
        'Lớp mạ Crom chống bám cặn canxi và chống ăn mòn trong môi trường ẩm'
      ],
      description: 'Bộ vòi xả bồn kèm sen cầm tay gắn thành bồn TOTO TBS02202B với đường cong vòm cổ điển thanh lịch.'
    },
    {
      id: 'vs-2',
      code: 'TBG02202B',
      name: 'Vòi Sen Gắn Bồn Tắm Cao Cấp TOTO TBG02202B সিরিজ GR',
      brand: 'TOTO',
      category: 'voi-sen',
      categoryLabel: 'Vòi Sen',
      price: 15658000,
      oldPrice: 15985000,
      discountBadge: 'Giảm giá',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80',
      dimensions: 'Cao 198 mm • Thiết kế vuông góc cạnh',
      material: 'Đồng thau Hpb59-1 mạ Crom Kim Cương',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Nhật Bản',
      highlights: [
        'Thiết kế ngôn ngữ hình học vuông vức đạt giải thưởng Red Dot Design',
        'Công nghệ trộn bọt khí Comfort Glide điều chỉnh nhiệt độ mượt mà',
        'Áp lực nước 0.05 MPa - 0.75 MPa tương thích mọi hệ thống bơm'
      ],
      description: 'Thuộc dòng GR cao cấp của TOTO, mẫu vòi bồn tắm TBG02202B mang nét kiến trúc đương đại sắc sảo cho phòng tắm penthouse.'
    },
    {
      id: 'vs-3',
      code: 'TLS02201B',
      name: 'Vòi Lavabo & Sen Nóng Lạnh Cổ Cao TOTO TLS02201B',
      brand: 'TOTO',
      category: 'voi-sen',
      categoryLabel: 'Vòi Sen',
      price: 5550000,
      oldPrice: 5760000,
      discountBadge: 'Giảm giá',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=700&q=80',
      dimensions: 'Cao 260 mm • Xoay 180 độ linh hoạt',
      material: 'Đồng đúc nguyên khối mạ Crom bóng gương',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Nhật Bản / Việt Nam',
      highlights: [
        'Đầu vòi tạo bọt Neoperl Thụy Sĩ chống văng bắn nước ra bàn đá',
        'Tay gạt tách rời điều khiển lưu lượng và nhiệt độ chính xác',
        'Tặng kèm bộ trụ xả nhấn đồng bộ chính hãng'
      ],
      description: 'Vòi cổ cao TOTO TLS02201B kết hợp hoàn hảo với các dòng chậu lavabo đặt nổi trên mặt đá tự nhiên.'
    },

    // Phụ kiện HOT (4 main)
    {
      id: 'pk-1',
      code: 'VA-500-STK',
      name: 'Giàn Vắt Khăn Tắm Đa Năng Daeshin VA-500 STK',
      brand: 'KOHLER',
      category: 'phu-kien',
      categoryLabel: 'Phụ Kiện',
      price: 1750000,
      image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=700&q=80',
      dimensions: '620 x 240 x 150 mm',
      material: 'Inox SUS 304 đúc đặc chống gỉ vĩnh viễn',
      warranty: '60 tháng chống gỉ sét',
      origin: 'Hàn Quốc',
      highlights: [
        'Tầng trên xếp khăn sạch gọn gàng, tầng dưới tích hợp 6 móc treo tiện lợi',
        'Khớp gập 90 độ áp sát tường khi không sử dụng giúp tiết kiệm không gian',
        'Chịu tải trọng tới 25kg, ốc vít âm tường thẩm mỹ'
      ],
      description: 'Giàn vắt khăn 2 tầng Daeshin Hàn Quốc là phụ kiện không thể thiếu trong các căn hộ cao cấp và khách sạn 5 sao.'
    },
    {
      id: 'pk-2',
      code: 'KK-2T-652',
      name: 'Kệ Kính Phòng Tắm 2 Tầng Cường Lực Viền Inox',
      brand: 'INAX',
      category: 'phu-kien',
      categoryLabel: 'Phụ Kiện',
      price: 652000,
      image: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=700&q=80',
      dimensions: '520 x 135 x 380 mm',
      material: 'Kính cường lực 8mm + Thanh chắn Inox 304',
      warranty: '36 tháng chính hãng',
      origin: 'Việt Nam',
      highlights: [
        'Kính cường lực mài cạnh kim cương an toàn, chịu lực va đập mạnh',
        'Lan can chắn inox phía trước giữ chai lọ mỹ phẩm không bị rơi vỡ',
        'Dễ dàng vệ sinh lau chùi, luôn sáng bóng trong môi trường ẩm ướt'
      ],
      description: 'Kệ kính đôi giúp sắp xếp gọn gàng toàn bộ dầu gội, sữa tắm và mỹ phẩm chăm sóc da ngay cạnh khu vực sen tắm.'
    },
    {
      id: 'pk-3',
      code: 'YTT902V',
      name: 'Vòng Treo Khăn Vuông TOTO YTT902V Mạ Crom',
      brand: 'TOTO',
      category: 'phu-kien',
      categoryLabel: 'Phụ Kiện',
      price: 1400000,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
      dimensions: '260 x 72 x 42 mm',
      material: 'Hợp kim kẽm & đồng mạ Niken-Crom',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Nhật Bản',
      highlights: [
        'Kiểu dáng thanh ngang chữ nhật tối giản, phù hợp treo khăn mặt cạnh lavabo',
        'Đế bắt tường giấu vít hoàn toàn mang lại vẻ đẹp tinh tế',
        'Bề mặt mạ bóng gương chống bám vân tay'
      ],
      description: 'Thanh vòng treo khăn vuông TOTO YTT902V đồng bộ hoàn hảo với các dòng vòi lavabo vuông góc cạnh.'
    },
    {
      id: 'pk-4',
      code: 'YTT406V',
      name: 'Vòng Treo Khăn Tròn Cổ Điển TOTO YTT406V',
      brand: 'TOTO',
      category: 'phu-kien',
      categoryLabel: 'Phụ Kiện',
      price: 1752000,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80',
      dimensions: 'Đường kính 170 mm • Nhô tường 75 mm',
      material: 'Đồng thau mạ Crom cao cấp',
      warranty: '24 tháng chính hãng TOTO',
      origin: 'Nhật Bản',
      highlights: [
        'Khớp xoay linh hoạt có đệm giảm chấn êm ái không gây tiếng ồn',
        'Thiết kế vòng tròn mềm mại an toàn cho gia đình có trẻ nhỏ',
        'Độ bền lớp mạ trên 10 năm sử dụng'
      ],
      description: 'Vòng treo khăn tròn TOTO mang nét thanh lịch vượt thời gian, giữ khăn mặt luôn khô thoáng.'
    }
  ],
  recentlyViewedItems: [
    {
      id: 'rv-1',
      name: 'Kệ Kính 2 Tầng Inox 304',
      price: 652000,
      categoryLabel: 'Phụ Kiện',
      image: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'rv-2',
      name: 'Vòi Xịt Vệ Sinh Tăng Áp TOTO THX20MCRB',
      price: 780000,
      categoryLabel: 'Vòi Sen',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'rv-3',
      name: 'Kệ Ly Đánh Răng Kính Mờ Cao Cấp',
      price: 540000,
      categoryLabel: 'Phụ Kiện',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'rv-4',
      name: 'Kệ Góc Tam Giác Inox Đựng Dầu Gội',
      price: 690000,
      categoryLabel: 'Phụ Kiện',
      image: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'rv-5',
      name: 'Khay Đựng Xà Phòng Thủy Tinh Gắn Tường',
      price: 490000,
      categoryLabel: 'Phụ Kiện',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'rv-6',
      name: 'Rổ Đựng Đồ Phòng Tắm Đa Năng Inox 304',
      price: 820000,
      categoryLabel: 'Phụ Kiện',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80'
    }
  ],
  categoryTags: [
    'Bàn Cầu',
    'Bồn Tắm',
    'Sen Cây Nhiệt Độ',
    'Lavabo',
    'Phụ Kiện',
    'Vòi Sen'
  ]
};
