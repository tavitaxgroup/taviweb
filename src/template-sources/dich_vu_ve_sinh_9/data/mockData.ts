export interface OfficeCleanProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  unit: string;
  image: string;
  badge?: string;
  sku: string;
}

export interface OfficeCleanGuaranteeItem {
  id: string;
  title: string;
  subtitle: string;
  icon: 'award' | 'layers' | 'laptop' | 'shield';
}

export interface OfficeCleanBlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface OfficeCleanPartnerLogo {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
}

export interface OfficeCleanTemplateData {
  business: {
    name: string;
    brandHighlight: string;
    tagline: string;
    address: string;
    phone: string[];
    email: string[];
    website: string;
    workingHours: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
    hasDropdown?: boolean;
    isHighlight?: boolean;
  }[];
  hero: {
    leadText: string;
    discountBig: string;
    description: string;
    ctaLabel: string;
    badgeLabel: string;
    backgroundImage: string;
    showcaseImage: string;
    floatingTags: {
      label: string;
      position: string;
    }[];
  };
  firstShowcase: {
    tabs: string[];
    items: OfficeCleanProductItem[];
  };
  guarantees: {
    backgroundImage: string;
    items: OfficeCleanGuaranteeItem[];
  };
  secondShowcase: {
    tabs: string[];
    items: OfficeCleanProductItem[];
  };
  newsSection: {
    title: string;
    backgroundImage: string;
    posts: OfficeCleanBlogPost[];
  };
  partners: OfficeCleanPartnerLogo[];
  footer: {
    bestSellers: {
      id: string;
      name: string;
      image: string;
      price: string;
    }[];
    menuLinks: string[];
    categoryColumns: string[][];
  };
}

export const defaultOfficeCleanData: OfficeCleanTemplateData = {
  business: {
    name: 'OfficeMona',
    brandHighlight: 'OfficeClean VS012',
    tagline: 'Vệ sinh & Vật tư văn phòng chuyên dụng',
    address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['demonhunterg@gmail.com', 'mon@mona.media'],
    website: 'officeclean.monamedia.net',
    workingHours: '07:30 - 18:30 (Thứ 2 - Thứ 7)',
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  navigation: [
    { label: 'GIÚP BẠN CHỌN', href: '#chon-nhanh', isHighlight: true },
    { label: 'DỤNG CỤ VỆ SINH', href: '#dung-cu', hasDropdown: true },
    { label: 'TẠP VỤ THEO GIỜ', href: '#tap-vu', hasDropdown: true },
    { label: 'GIẶT THẢM GHẾ', href: '#giat-tham', hasDropdown: true },
    { label: 'HÓA CHẤT SẠCH', href: '#hoa-chat', hasDropdown: true },
    { label: 'KHỬ KHUẨN', href: '#khu-khuan', hasDropdown: true },
    { label: 'LƯU TRỮ', href: '#luu-tru', hasDropdown: true },
    { label: 'THIẾT BỊ', href: '#thiet-bi', hasDropdown: true },
    { label: 'TIỆN ÍCH', href: '#tien-ich', hasDropdown: true },
    { label: 'BẢO TRÌ ĐỊNH KỲ', href: '#bao-tri', hasDropdown: true },
  ],
  hero: {
    leadText: 'Ưu đãi lên đến ...',
    discountBig: '10% off',
    description:
      'Chuyên cung ứng tạp vụ văn phòng định kỳ, dịch vụ giặt thảm – ghế xoay và trọn bộ dụng cụ vệ sinh công sở chính hãng giúp không gian làm việc luôn sạch bóng, chuyên nghiệp.',
    ctaLabel: 'Mua Ngay',
    badgeLabel: 'YOUR OFFICE',
    backgroundImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85',
    showcaseImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85',
    floatingTags: [
      { label: 'Tạp vụ chuẩn 5S', position: 'top-left' },
      { label: 'Hóa chất Sinh học An toàn', position: 'bottom-left' },
      { label: 'Giặt ghế & Thảm văn phòng', position: 'top-right' },
    ],
  },
  firstShowcase: {
    tabs: [
      'DỤNG CỤ VỆ SINH',
      'TẠP VỤ VĂN PHÒNG',
      'GIẶT THẢM',
      'HÓA CHẤT',
      'KHĂN GIẤY',
    ],
    items: [
      {
        id: 'oc-1',
        name: 'Bộ cây lau sàn công nghiệp vắt cực khô Inox 304',
        category: 'DỤNG CỤ VỆ SINH',
        price: '800,000 ₫',
        originalPrice: '920,000 ₫',
        unit: 'Bộ tiêu chuẩn',
        image:
          'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80',
        badge: 'Bán chạy',
        sku: 'OM-CL01',
      },
      {
        id: 'oc-2',
        name: 'Combo dung dịch lau kính & khử khuẩn bàn làm việc 5L',
        category: 'HÓA CHẤT',
        price: '140,000 ₫',
        unit: 'Can 5 Lít',
        image:
          'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-CH02',
      },
      {
        id: 'oc-3',
        name: 'Gói giặt ghế xoay lưới văn phòng khử mùi diệt khuẩn',
        category: 'GIẶT THẢM',
        price: '210,000 ₫',
        unit: 'Combo 5 ghế',
        image:
          'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=700&q=80',
        badge: '-10%',
        sku: 'OM-GT03',
      },
      {
        id: 'oc-4',
        name: 'Bộ chổi gạt kính chuyên dụng kèm bông lau sợi Microfiber',
        category: 'DỤNG CỤ VỆ SINH',
        price: '350,000 ₫',
        unit: 'Bộ 3 món',
        image:
          'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-CL04',
      },
      {
        id: 'oc-5',
        name: 'Thùng rác văn phòng nắp lật Inox 304 chống bám vân tay',
        category: 'DỤNG CỤ VỆ SINH',
        price: '295,000 ₫',
        unit: 'Cái 12L',
        image:
          'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-TR05',
      },
      {
        id: 'oc-6',
        name: 'Gói tạp vụ văn phòng theo giờ (4 giờ/ca - Nhân sự cố định)',
        category: 'TẠP VỤ VĂN PHÒNG',
        price: '360,000 ₫',
        originalPrice: '420,000 ₫',
        unit: 'Ca 4 giờ',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
        badge: 'Hot',
        sku: 'OM-TV06',
      },
      {
        id: 'oc-7',
        name: 'Hộp đựng khăn giấy lau tay treo tường nhựa ABS cao cấp',
        category: 'KHĂN GIẤY',
        price: '125,000 ₫',
        unit: 'Hộp đôi',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-KG07',
      },
      {
        id: 'oc-8',
        name: 'Dịch vụ giặt thảm trải sàn văn phòng bằng hơi nước nóng',
        category: 'GIẶT THẢM',
        price: '185,000 ₫',
        unit: 'Gói 20m²',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-GT08',
      },
      {
        id: 'oc-9',
        name: 'Bộ khăn lau đa năng Microfiber 3M không để lại bụi vải',
        category: 'DỤNG CỤ VỆ SINH',
        price: '45,000 ₫',
        unit: 'Lốc 5 khăn',
        image:
          'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-CL09',
      },
      {
        id: 'oc-10',
        name: 'Thùng khăn giấy rút lụa phòng họp 2 lớp mềm mịn (20 gói)',
        category: 'KHĂN GIẤY',
        price: '28,000 ₫',
        unit: 'Gói 280 tờ',
        image:
          'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-KG10',
      },
    ],
  },
  guarantees: {
    backgroundImage:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=80',
    items: [
      {
        id: 'gr-1',
        title: 'CUNG CẤP TẠP VỤ & VPP CHUYÊN DỤNG',
        subtitle: 'Đội ngũ đào tạo bài bản, hồ sơ lý lịch rõ ràng',
        icon: 'award',
      },
      {
        id: 'gr-2',
        title: 'TRANG THIẾT BỊ ĐA DẠNG',
        subtitle: 'Hơn 500+ danh mục vật tư làm sạch văn phòng sẵn kho',
        icon: 'layers',
      },
      {
        id: 'gr-3',
        title: 'ĐẶT DỊCH VỤ HIỆN ĐẠI',
        subtitle: '– THUẬN TIỆN – Khảo sát và báo giá nhanh trong 15 phút',
        icon: 'laptop',
      },
      {
        id: 'gr-4',
        title: 'THANH TOÁN AN TOÀN',
        subtitle: '– DỄ DÀNG – Xuất hóa đơn VAT đầy đủ theo tháng/quý',
        icon: 'shield',
      },
    ],
  },
  secondShowcase: {
    tabs: [
      'LƯU TRỮ & VỆ SINH',
      'THIẾT BỊ',
      'TIỆN ÍCH',
      'VẬT TƯ TIÊU HAO',
    ],
    items: [
      {
        id: 'sc-1',
        name: 'Tủ đựng dụng cụ vệ sinh & hóa chất văn phòng 2 cánh sắt sơn tĩnh điện',
        category: 'LƯU TRỮ & VỆ SINH',
        price: '360,000 ₫',
        unit: 'Kệ 3 tầng',
        image:
          'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-LT01',
      },
      {
        id: 'sc-2',
        name: 'Khay phân loại rác tái chế văn phòng 3 ngăn chuẩn xanh',
        category: 'LƯU TRỮ & VỆ SINH',
        price: '125,000 ₫',
        unit: 'Bộ 3 ngăn',
        image:
          'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-LT02',
      },
      {
        id: 'sc-3',
        name: 'Máy xịt thơm phòng tự động cảm biến ánh sáng kèm bình tinh dầu',
        category: 'THIẾT BỊ',
        price: '185,000 ₫',
        unit: 'Bộ máy + Sạc',
        image:
          'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80',
        badge: 'Mới',
        sku: 'OM-TB03',
      },
      {
        id: 'sc-4',
        name: 'Kệ để bình nước rửa tay & khăn giấy khu vực Pantry văn phòng',
        category: 'TIỆN ÍCH',
        price: '45,000 ₫',
        unit: 'Khay đôi',
        image:
          'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-TI04',
      },
      {
        id: 'sc-5',
        name: 'Cuộn túi rác phân hủy sinh học đen/xanh dùng cho sảnh tòa nhà',
        category: 'VẬT TƯ TIÊU HAO',
        price: '28,000 ₫',
        unit: 'Cuộn 1kg',
        image:
          'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-VT05',
      },
      {
        id: 'sc-6',
        name: 'Bình xịt bọt tuyết rửa tay tự động cảm ứng hồng ngoại 450ml',
        category: 'THIẾT BỊ',
        price: '55,000 ₫',
        unit: 'Bình tiêu chuẩn',
        image:
          'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-TB06',
      },
      {
        id: 'sc-7',
        name: 'Xe đẩy thu gom đồ dùng & làm vệ sinh hành lang công sở 3 tầng',
        category: 'LƯU TRỮ & VỆ SINH',
        price: '420,000 ₫',
        unit: 'Xe đa năng',
        image:
          'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=700&q=80',
        sku: 'OM-LT07',
      },
    ],
  },
  newsSection: {
    title: 'TIN TỨC',
    backgroundImage:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80',
    posts: [
      {
        id: 'news-1',
        title: 'Quy trình 5 bước vệ sinh văn phòng chuẩn 5S giúp tăng 30% hiệu suất nhân sự',
        date: '15 Tháng Mười, 2026',
        category: 'Cẩm nang 5S',
        excerpt:
          'Không gian bàn làm việc, phòng họp và khu Pantry luôn sạch thơm là yếu tố then chốt giúp nâng tầm hình ảnh thương hiệu trong mắt đối tác.',
        image:
          'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'news-2',
        title: 'Kinh nghiệm lựa chọn gói tạp vụ theo giờ hay tạp vụ toàn thời gian cho doanh nghiệp',
        date: '12 Tháng Mười, 2026',
        category: 'Giải pháp Tạp vụ',
        excerpt:
          'Phân tích chi phí vận hành, định mức vật tư tiêu hao và lịch trình làm sạch tối ưu cho văn phòng quy mô từ 50m² đến 1.000m².',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'news-3',
        title: 'Bao lâu nên giặt thảm văn phòng và ghế xoay nhân viên một lần để khử sạch nấm mốc?',
        date: '08 Tháng Mười, 2026',
        category: 'Bảo trì Định kỳ',
        excerpt:
          'Thảm nỉ và ghế lưới văn phòng tích tụ hàng triệu vi khuẩn mỗi tuần. Công nghệ phun hút hơi nước nóng giúp làm sạch sâu và khô ngay sau 2 giờ.',
        image:
          'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  partners: [
    { id: 'pt-1', name: 'PHILIPS', tagline: 'UV-C Disinfection', accentColor: '#00529b' },
    { id: 'pt-2', name: 'CASIO', tagline: 'Office Solutions', accentColor: '#003da5' },
    { id: 'pt-3', name: 'EPSON', tagline: 'EXCEED YOUR VISION', accentColor: '#003399' },
    { id: 'pt-4', name: 'KW-triO', tagline: 'Office Equipment', accentColor: '#1e293b' },
    { id: 'pt-5', name: 'logitech', tagline: 'Workspace Partner', accentColor: '#334155' },
    { id: 'pt-6', name: 'MARCO', tagline: 'Facility Supplies', accentColor: '#1d4ed8' },
  ],
  footer: {
    bestSellers: [
      {
        id: 'bs-1',
        name: 'Bộ cây lau sàn công nghiệp Inox',
        image:
          'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=300&q=80',
        price: '800,000 ₫',
      },
      {
        id: 'bs-2',
        name: 'Dung dịch khử khuẩn văn phòng 5L',
        image:
          'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80',
        price: '140,000 ₫',
      },
      {
        id: 'bs-3',
        name: 'Gói giặt ghế xoay văn phòng',
        image:
          'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=300&q=80',
        price: '210,000 ₫',
      },
      {
        id: 'bs-4',
        name: 'Bộ gạt kính Microfiber 3M',
        image:
          'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=300&q=80',
        price: '350,000 ₫',
      },
      {
        id: 'bs-5',
        name: 'Thùng rác nắp lật Inox 304',
        image:
          'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80',
        price: '295,000 ₫',
      },
      {
        id: 'bs-6',
        name: 'Máy xịt thơm phòng tự động',
        image:
          'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=300&q=80',
        price: '185,000 ₫',
      },
    ],
    menuLinks: [
      'Trang chủ',
      'Giới thiệu',
      'Cửa hàng vật tư',
      'Bảng giá tạp vụ',
      'Tin tức & Cẩm nang',
      'Liên hệ khảo sát',
    ],
    categoryColumns: [
      [
        'Dụng cụ vệ sinh',
        'Tạp vụ theo giờ',
        'Giặt thảm văn phòng',
        'Hóa chất sinh học',
        'Khăn giấy & Túi rác',
      ],
      [
        'Lưu trữ & Phân loại',
        'Thiết bị khử mùi',
        'Tiện ích Pantry',
        'Bảo trì định kỳ',
      ],
    ],
  },
};
