export interface PrecitaProductItem {
  id: string;
  name: string;
  code: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeVariant?: 'aqua' | 'hot';
  image: string;
  specs: string;
}

export interface PrecitaCategoryItem {
  id: string;
  title: string;
  countLabel: string;
  image: string;
}

export interface PrecitaBlogItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface StudioChupAnh12Data {
  business: {
    name: string;
    subName: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string[];
    address: string;
    installmentNote: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
    isHighlight?: boolean;
  }[];
  hero: {
    discountLabel: string;
    discountPercent: string;
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
  };
  bestSellers: {
    title: string;
    items: PrecitaProductItem[];
  };
  categoriesSection: {
    title: string;
    items: PrecitaCategoryItem[];
  };
  collectionSplit: {
    title: string;
    leftBanner: {
      title: string;
      subtitle: string;
      image: string;
    };
    rightBanner: {
      scriptTitle: string;
      subtitle: string;
      image: string;
    };
  };
  ringsSection: {
    title: string;
    items: PrecitaProductItem[];
  };
  earringsSection: {
    title: string;
    items: PrecitaProductItem[];
  };
  newArrivalsSection: {
    title: string;
    items: PrecitaProductItem[];
  };
  coreValuesSection: {
    title: string;
    values: {
      title: string;
      description: string;
    }[];
  };
  latestNewsSection: {
    title: string;
    posts: PrecitaBlogItem[];
  };
  newsletterSection: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
  footer: {
    col1Links: string[];
    col2Links: string[];
    col3Links: string[];
    paymentBadges: string[];
  };
}

export const defaultStudioChupAnh12Data: StudioChupAnh12Data = {
  business: {
    name: 'PRECITA BRIDAL',
    subName: 'MONA FINE JEWELRY & STUDIO',
    tagline: 'Chế Tác Nhẫn Cầu Hôn Kim Cương GIA & Nhiếp Ảnh Cưới Tinh Tế',
    description:
      'Precita Bridal tôn vinh khoảnh khắc cầu hôn và lễ thành hôn bằng những tuyệt tác vỏ nhẫn kim cương chế tác thủ công cùng bộ ảnh cưới chuẩn phong cách tối giản thanh lịch.',
    phone: ['0126 922 0162', '0908 661 882'],
    email: ['demonhunter@gmail.com', 'cskh@precitabridal.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    installmentNote: 'Trả Góp 0% Lãi Suất • Đổi Trả Trọn Đời',
    copyright: '© Bản quyền thuộc về Precita Bridal & Studio. Thiết kế bởi Mona Media.',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#trang-chu' },
    { label: 'TRANG SỨC', href: '#san-pham-ban-chay' },
    { label: 'TRANG SỨC CƯỚI', href: '#bo-suu-tap' },
    { label: 'NHẪN KIM CƯƠNG', href: '#nhan-cuoi' },
    { label: 'HOA TAI CÔ DÂU', href: '#hoa-tai' },
    { label: 'Lộc Ưu Đãi Đến 50%', href: '#hang-moi-ve', isHighlight: true },
  ],
  hero: {
    discountLabel: 'GIẢM',
    discountPercent: '30%',
    title: 'VỎ NHẪN KIM CƯƠNG & GÓI CHỤP CƯỚI',
    subtitle: 'DÀNH CHO 20 CẶP ĐÔI ĐẦU TIÊN ĐẶT LỊCH THỬ NHẪN TRONG THÁNG NÀY',
    ctaText: 'Xem trang sức',
    backgroundImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85',
  },
  bestSellers: {
    title: 'SẢN PHẨM BÁN CHẠY',
    items: [
      {
        id: 'bs-1',
        name: 'Dây chuyền Vàng trắng 18K đính Kim cương Solitaire',
        code: 'DC-101',
        price: '4,299,000 ₫',
        oldPrice: '8,600,000 ₫',
        badge: '-50%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
        specs: 'Vàng trắng 18K • Mặt kim cương thiên nhiên',
      },
      {
        id: 'bs-2',
        name: 'Nhẫn đôi Vàng 18K đính Kim cương tấm Harmony',
        code: 'ND-204',
        price: '12,698,000 ₫',
        oldPrice: '25,400,000 ₫',
        badge: '-50%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
        specs: 'Cặp nhẫn cưới khắc tên • Bảo hành trọn đời',
      },
      {
        id: 'bs-3',
        name: 'Nhẫn Vàng trắng 14K đính đá Emerald Ngọc Lục Bảo',
        code: 'NE-309',
        price: '6,850,000 ₫',
        image:
          'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80',
        specs: 'Ngọc lục bảo thiên nhiên • Thiết kế Hoàng gia',
      },
      {
        id: 'bs-4',
        name: 'Hoa tai Vàng hồng 18K Giọt Sương Mai Cô Dâu',
        code: 'HT-412',
        price: '1,399,000 ₫',
        oldPrice: '2,866,000 ₫',
        badge: '-51%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        specs: 'Bắt sáng góc nghiêng chụp ảnh Pre-Wedding',
      },
      {
        id: 'bs-5',
        name: 'Mặt dây chuyền Vàng 18K Trái Tim Đại Dương',
        code: 'MD-518',
        price: '2,950,000 ₫',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
        specs: 'Đá Topaz xanh biển sâu • Kèm hộp quà cao cấp',
      },
    ],
  },
  categoriesSection: {
    title: 'DANH MỤC SẢN PHẨM',
    items: [
      {
        id: 'pcat-1',
        title: 'QUÀ TẶNG KỶ NIỆM',
        countLabel: '10 SẢN PHẨM',
        image:
          'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'pcat-2',
        title: 'TRANG SỨC CÔ DÂU',
        countLabel: '20 SẢN PHẨM',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'pcat-3',
        title: 'TRANG SỨC CƯỚI',
        countLabel: '12 SẢN PHẨM',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'pcat-4',
        title: 'TRANG SỨC KIM CƯƠNG',
        countLabel: '8 SẢN PHẨM',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  collectionSplit: {
    title: 'BỘ SƯU TẬP MÙA CƯỚI',
    leftBanner: {
      title: 'Bản Giao Hưởng Ánh Sáng Pha Lê & Kim Cương',
      subtitle: 'Tặng kèm khung ảnh để bàn Pha lê cao cấp khi mua trọn bộ trang sức cưới',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    },
    rightBanner: {
      scriptTitle: 'Shades of Love',
      subtitle: 'Sắc Màu Tình Yêu • Bộ sưu tập nhẫn cưới & Lookbook ngoại cảnh lãng mạn',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    },
  },
  ringsSection: {
    title: 'NHẪN',
    items: [
      {
        id: 'rg-1',
        name: 'Nhẫn đôi Kim cương Vàng trắng 18K Eternal',
        code: 'NC-701',
        price: '12,698,000 ₫',
        oldPrice: '25,400,000 ₫',
        badge: '-50%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
        specs: 'Vàng trắng 18K • Khắc laser nhịp tim',
      },
      {
        id: 'rg-2',
        name: 'Nhẫn cầu hôn Vàng 18K đính đá Emerald xanh',
        code: 'NC-702',
        price: '6,850,000 ₫',
        image:
          'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80',
        specs: 'Chấu 4 cạnh thanh lịch • Chuẩn size tay Á Đông',
      },
      {
        id: 'rg-3',
        name: 'Vỏ nhẫn Kim cương Solitaire Vàng hồng 18K',
        code: 'NC-703',
        price: '8,200,000 ₫',
        image:
          'https://images.unsplash.com/photo-1598560917505-59a3655c1592?auto=format&fit=crop&w=700&q=80',
        specs: 'Phù hợp viên chủ từ 4.5ly đến 6.3ly',
      },
      {
        id: 'rg-4',
        name: 'Nhẫn nữ Vương Miện Công Chúa Vàng trắng 14K',
        code: 'NC-704',
        price: '5,490,000 ₫',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
        specs: 'Đính 24 viên kim cương tấm lấp lánh',
      },
    ],
  },
  earringsSection: {
    title: 'HOA TAI',
    items: [
      {
        id: 'er-1',
        name: 'Hoa tai Vàng trắng 18K Nụ Kim Cương Tinh Khiết',
        code: 'HT-801',
        price: '1,399,000 ₫',
        oldPrice: '2,866,000 ₫',
        badge: '-51%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        specs: 'Chốt vặn chắc chắn • Đeo êm tai cả ngày',
      },
      {
        id: 'er-2',
        name: 'Hoa tai Ngọc trai Akoya phối Vàng hồng 18K',
        code: 'HT-802',
        price: '4,626,000 ₫',
        image:
          'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
        specs: 'Ngọc trai Nhật Bản ánh hồng tự nhiên',
      },
      {
        id: 'er-3',
        name: 'Hoa tai dáng dài Chandelier Cô Dâu Dự Tiệc',
        code: 'HT-803',
        price: '11,648,000 ₫',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
        specs: 'Thiết kế riêng cho váy cưới cúp ngực',
      },
      {
        id: 'er-4',
        name: 'Hoa tai Vàng 18K Cỏ 4 Lá May Mắn Đính Đá',
        code: 'HT-804',
        price: '3,890,000 ₫',
        image:
          'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80',
        specs: 'Biểu tượng hạnh phúc viên mãn',
      },
    ],
  },
  newArrivalsSection: {
    title: 'HÀNG MỚI VỀ',
    items: [
      {
        id: 'na-1',
        name: 'Dây chuyền Vàng trắng 18K Mặt Kim Cương Halo',
        code: 'HM-901',
        price: '4,299,000 ₫',
        oldPrice: '8,600,000 ₫',
        badge: '-50%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
        specs: 'Mẫu mới nhất mùa cưới năm nay',
      },
      {
        id: 'na-2',
        name: 'Nhẫn đôi Vàng 18K Tình Yêu Vĩnh Cửu Precita',
        code: 'HM-902',
        price: '12,698,000 ₫',
        oldPrice: '25,400,000 ₫',
        badge: 'Hot',
        badgeVariant: 'hot',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
        specs: 'Tặng kèm gói chụp ảnh Pre-Wedding',
      },
      {
        id: 'na-3',
        name: 'Nhẫn Nữ Đá Quý Emerald Vàng Trắng 14K',
        code: 'HM-903',
        price: '6,850,000 ₫',
        badge: 'Hot',
        badgeVariant: 'hot',
        image:
          'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=700&q=80',
        specs: 'Kiểm định đá quý chuẩn quốc tế',
      },
      {
        id: 'na-4',
        name: 'Hoa tai Kim Cương tấm Vàng hồng 18K',
        code: 'HM-904',
        price: '1,399,000 ₫',
        oldPrice: '2,866,000 ₫',
        badge: '-51%',
        badgeVariant: 'aqua',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        specs: 'Sắc vàng hồng tôn da trắng hồng',
      },
      {
        id: 'na-5',
        name: 'Mặt dây chuyền Sapphire Xanh Biển Vàng 18K',
        code: 'HM-905',
        price: '5,120,000 ₫',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
        specs: 'Tinh xảo từng chi tiết chấu giữ đá',
      },
    ],
  },
  coreValuesSection: {
    title: 'GIÁ TRỊ NỔI BẬT',
    values: [
      {
        title: 'Đạt Chuẩn',
        description: 'Đủ chứng nhận chất lượng kim cương quốc tế GIA',
      },
      {
        title: 'Chất Lượng',
        description: 'Đúng trọng lượng và hàm lượng vàng cam kết',
      },
      {
        title: 'Cam Kết',
        description: 'Thu mua đổi trang sức cưới trọn đời minh bạch',
      },
      {
        title: 'Miễn Phí',
        description: 'Làm sạch, đánh bóng & khắc tên trọn đời',
      },
    ],
  },
  latestNewsSection: {
    title: 'TIN TỨC MỚI NHẤT',
    posts: [
      {
        id: 'pnews-1',
        title: 'TÌM HIỂU VỀ THẠCH ANH VÀNG (CITRINE) TRONG CHẾ TÁC TRANG SỨC CƯỚI HIỆN ĐẠI',
        date: '19/10/2026',
        excerpt:
          'Thạch anh vàng (Citrine) mang sắc nắng ấm áp, biểu trưng cho sự thịnh vượng và niềm vui viên mãn khi được điểm xuyết trên bộ trang sức cô dâu ngày vu quy...',
        image:
          'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pnews-2',
        title: 'KIM CƯƠNG THIÊN NHIÊN: LỊCH SỬ VÀ Ý NGHĨA VĨNH CỬU TRONG LỄ CẦU HÔN',
        date: '12/10/2026',
        excerpt:
          'Từ hàng thế kỷ qua, chiếc nhẫn kim cương Solitaire trao tay trong khoảnh khắc cầu hôn luôn là lời hứa gắn kết trọn đời không thể phai mờ giữa hai tâm hồn...',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'pnews-3',
        title: 'TOP 4 MẪU NHẪN CƯỚI KIM CƯƠNG ĐƯỢC CÁC CẶP ĐÔI YÊU THÍCH NHẤT NĂM 2026',
        date: '05/10/2026',
        excerpt:
          'Khám phá 4 thiết kế nhẫn cưới vàng trắng và vàng hồng 18K vừa thanh lịch khi đeo hàng ngày, vừa lộng lẫy trong bộ ảnh phóng sự cưới của bạn...',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  newsletterSection: {
    title: 'KẾT NỐI YÊU THƯƠNG VỚI CHÚNG TÔI',
    placeholder: 'Nhập email của bạn để nhận ưu đãi 30%...',
    buttonText: 'ĐĂNG KÝ',
  },
  footer: {
    col1Links: [
      'Câu chuyện thương hiệu Precita',
      'Hệ thống Showroom & Studio cưới',
      'Tuyển dụng nghệ nhân kim hoàn',
      'Liên hệ đặt lịch tư vấn riêng',
    ],
    col2Links: [
      'Chính sách thu đổi trọn đời',
      'Hướng dẫn đo size nhẫn tại nhà',
      'Chính sách trả góp 0% lãi suất',
      'Bảo hành làm sạch miễn phí',
    ],
    col3Links: [
      'Cẩm nang chọn nhẫn cầu hôn',
      'Kinh nghiệm chụp ảnh Pre-Wedding',
      'Kiến thức kim cương 4Cs GIA',
      'Xu hướng trang sức cưới 2026',
    ],
    paymentBadges: ['VISA', 'MasterCard', 'JCB', 'OnePAY', 'Trả Góp 0%'],
  },
};
