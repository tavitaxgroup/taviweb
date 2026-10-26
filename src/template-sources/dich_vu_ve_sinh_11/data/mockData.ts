export interface CleanCampusServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  unit: string;
  image: string;
  sku: string;
}

export interface CleanCampusCouponBanner {
  id: string;
  badgeText: string;
  headline: string;
  subtext: string;
  code: string;
  discountPercent: string;
  bgGradient: string;
}

export interface CleanCampusSplitShowcase {
  id: string;
  sectionTitle: string;
  bannerPosition: 'left' | 'right';
  bannerBgColor: string;
  bannerTag: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerDiscount: string;
  bannerImage: string;
  items: CleanCampusServiceItem[];
}

export interface CleanCampusPartnerLogo {
  id: string;
  name: string;
  subline: string;
  color: string;
}

export interface CleanCampusTemplateData {
  business: {
    name: string;
    brandFull: string;
    tagline: string;
    address: string;
    phone: string[];
    email: string[];
    taxInfo: string;
    copyright: string;
  };
  topLinks: string[];
  navLinks: {
    label: string;
    href: string;
  }[];
  sidebarCategories: string[];
  hero: {
    programTag: string;
    title: string;
    subtitle: string;
    highlightNote: string;
    ctaLabel: string;
    backgroundImage: string;
    featuredPackages: {
      title: string;
      tag: string;
      image: string;
    }[];
  };
  couponBanners: CleanCampusCouponBanner[];
  horizontalRows: {
    id: string;
    title: string;
    items: CleanCampusServiceItem[];
  }[];
  splitShowcases: CleanCampusSplitShowcase[];
  educationPartners: CleanCampusPartnerLogo[];
  footer: {
    serviceLinks: string[];
    supportLinks: string[];
    accountLinks: string[];
    logisticsPartners: {
      name: string;
      tagline: string;
      color: string;
    }[];
  };
}

export const defaultCleanCampusData: CleanCampusTemplateData = {
  business: {
    name: 'MONA',
    brandFull: 'CleanCampus VS014',
    tagline: 'Dịch vụ vệ sinh trường học, thư viện & cơ sở giáo dục chuẩn quốc tế',
    address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['demonhunterg@gmail.com', 'mon@mona.media'],
    taxInfo:
      'Chuyên cung cấp nhân sự tạp vụ trường học, hút bụi – khử nấm mốc kho sách thư viện đại học và vật tư vệ sinh hữu cơ đạt chuẩn an toàn Bộ Y Tế.',
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  topLinks: [
    'Tài khoản của tôi',
    'Danh sách yêu thích',
    'Thanh toán',
    'Đăng nhập',
  ],
  navLinks: [
    { label: 'Ưu Đãi Hôm Nay', href: '#uu-dai-coupon' },
    { label: 'Giới thiệu', href: '#noi-bat' },
    { label: 'Cẩm Nang Học Đường', href: '#khuon-vien-thu-vien' },
  ],
  sidebarCategories: [
    'Vệ Sinh Giảng Đường & Lớp Học',
    'Khử Khuẩn Thư Viện & Kho Sách',
    'Vệ Sinh Trường Mầm Non Chuẩn Y Tế',
    'Làm Sạch Phòng Lab & Thí Nghiệm',
    'Bảo Trì Sân Thể Chất & Nhà Đa Năng',
    'Vệ Sinh Ký Túc Xá & Căng Tin',
    'Giặt Thảm Hội Trường & Phòng Họp',
    'Hóa Chất Sinh Học An Toàn Cho Trẻ',
    'Máy Lọc Khí & Đèn UV Lớp Học',
    'Tổng Vệ Sinh Trước Năm Học Mới',
  ],
  hero: {
    programTag: 'CHƯƠNG TRÌNH CHUẨN HÓA VỆ SINH HỌC ĐƯỜNG QUỐC TẾ',
    title: 'GIẢI PHÁP LÀM SẠCH TRƯỜNG HỌC, THƯ VIỆN & KHUÔN VIÊN GIÁO DỤC',
    subtitle:
      'Đồng hành cùng hơn 180+ trường quốc tế, đại học và hệ thống thư viện tại Việt Nam kiến tạo môi trường học tập sạch khuẩn, trong lành.',
    highlightNote: 'ƯU ĐÃI ĐẶC BIỆT MÙA TỰU TRƯỜNG LÊN ĐẾN 40%',
    ctaLabel: 'ĐẶT LỊCH KHẢO SÁT',
    backgroundImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=85',
    featuredPackages: [
      {
        title: 'Khử Nấm Mốc Thư Viện',
        tag: 'Tiêu chuẩn ISO',
        image:
          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80',
      },
      {
        title: 'Vệ Sinh Lớp Học 5S',
        tag: 'An toàn Sinh học',
        image:
          'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80',
      },
      {
        title: 'Khử Khuẩn Trường Mầm Non',
        tag: '100% Hữu cơ',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
      },
    ],
  },
  couponBanners: [
    {
      id: 'cp-1',
      badgeText: 'CÙNG CLEANCAMPUS',
      headline: 'SĂN COUPON KHỬ KHUẨN THƯ VIỆN',
      subtext: 'Áp dụng cho gói hút bụi kệ sách & khử ẩm phòng đọc',
      code: 'LIBRARY50',
      discountPercent: '50%',
      bgGradient: 'from-[#0d47a1] via-[#1565c0] to-[#1e88e5]',
    },
    {
      id: 'cp-2',
      badgeText: 'NHẬP MÃ CAMPUS15',
      headline: 'HỢP ĐỒNG TẠP VỤ TRƯỜNG HỌC',
      subtext: 'Giảm trực tiếp cho hợp đồng định kỳ từ 6 tháng',
      code: 'CAMPUS15',
      discountPercent: '15%',
      bgGradient: 'from-[#1e3a8a] via-[#1d4ed8] to-[#0284c7]',
    },
    {
      id: 'cp-3',
      badgeText: 'NHẬP MÃ MAMNON12',
      headline: 'COMBO HÓA CHẤT HỮU CƠ MẦM NON',
      subtext: 'Nước lau sàn & rửa đồ chơi sinh học không kích ứng',
      code: 'MAMNON12',
      discountPercent: '12%',
      bgGradient: 'from-[#0f172a] via-[#1e40af] to-[#2563eb]',
    },
  ],
  horizontalRows: [
    {
      id: 'noi-bat',
      title: 'NỔI BẬT',
      items: [
        {
          id: 'nb-1',
          name: 'Gói hút bụi chuyên sâu & khử nấm mốc kệ sách thư viện (100m²)',
          category: 'Khử Khuẩn Thư Viện & Kho Sách',
          price: '1,350,000 ₫',
          originalPrice: '1,450,000 ₫',
          discountBadge: '-7%',
          unit: 'Gói 100m²',
          image:
            'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-NB01',
        },
        {
          id: 'nb-2',
          name: 'Dịch vụ vệ sinh phòng học & đánh bóng bàn ghế gỗ học sinh',
          category: 'Vệ Sinh Giảng Đường & Lớp Học',
          price: '890,000 ₫',
          originalPrice: '1,020,000 ₫',
          discountBadge: '-13%',
          unit: 'Phòng tiêu chuẩn',
          image:
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-NB02',
        },
        {
          id: 'nb-3',
          name: 'Dung dịch lau sàn hữu cơ sả chanh an toàn cho trường mầm non 5L',
          category: 'Hóa Chất Sinh Học An Toàn Cho Trẻ',
          price: '215,000 ₫',
          originalPrice: '358,000 ₫',
          discountBadge: '-40%',
          unit: 'Can 5 Lít',
          image:
            'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-NB03',
        },
        {
          id: 'nb-4',
          name: 'Gói khử trùng đồ chơi & thảm xốp lớp mầm non bằng hơi nước nóng',
          category: 'Vệ Sinh Trường Mầm Non Chuẩn Y Tế',
          price: '650,000 ₫',
          originalPrice: '780,000 ₫',
          discountBadge: '-17%',
          unit: 'Lớp 50m²',
          image:
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-NB04',
        },
        {
          id: 'nb-5',
          name: 'Vệ sinh kính mặt ngoài giảng đường đại học & tòa nhà hiệu bộ',
          category: 'Vệ Sinh Giảng Đường & Lớp Học',
          price: '1,850,000 ₫',
          unit: 'Gói 100m²',
          image:
            'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-NB05',
        },
        {
          id: 'nb-6',
          name: 'Máy hút bụi siêu êm độ ồn thấp 52dB chuyên dùng cho thư viện',
          category: 'Khử Khuẩn Thư Viện & Kho Sách',
          price: '3,490,000 ₫',
          originalPrice: '3,850,000 ₫',
          discountBadge: '-9%',
          unit: 'Máy 15L',
          image:
            'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-NB06',
        },
      ],
    },
    {
      id: 'vat-tu-truong-hoc',
      title: 'VẬT TƯ VỆ SINH TRƯỜNG HỌC',
      items: [
        {
          id: 'vt-1',
          name: 'Bộ thùng rác phân loại 3 ngăn (Hữu cơ - Tái chế - Vô cơ) sân trường',
          category: 'Bảo Trì Sân Thể Chất & Nhà Đa Năng',
          price: '1,120,000 ₫',
          originalPrice: '1,290,000 ₫',
          discountBadge: '-13%',
          unit: 'Bộ 3 ngăn 60L',
          image:
            'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-VT01',
        },
        {
          id: 'vt-2',
          name: 'Xe đẩy vắt cây lau sàn hành lang lớp học 2 xô kèm biển báo',
          category: 'Vệ Sinh Giảng Đường & Lớp Học',
          price: '1,450,000 ₫',
          unit: 'Xe đôi 46L',
          image:
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-VT02',
        },
        {
          id: 'vt-3',
          name: 'Bình xịt cồn rửa tay cảm ứng tự động treo tường hành lang lớp học',
          category: 'Máy Lọc Khí & Đèn UV Lớp Học',
          price: '320,000 ₫',
          originalPrice: '390,000 ₫',
          discountBadge: '-18%',
          unit: 'Bình 1000ml',
          image:
            'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-VT03',
        },
        {
          id: 'vt-4',
          name: 'Combo 10 khăn lau bảng từ & màn hình tương tác thông minh Microfiber',
          category: 'Vệ Sinh Giảng Đường & Lớp Học',
          price: '101,000 ₫',
          originalPrice: '120,000 ₫',
          discountBadge: '-16%',
          unit: 'Lốc 10 khăn',
          image:
            'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-VT04',
        },
        {
          id: 'vt-5',
          name: 'Nước rửa tay bọt tuyết kháng khuẩn dịu nhẹ cho học sinh tiểu học',
          category: 'Hóa Chất Sinh Học An Toàn Cho Trẻ',
          price: '135,000 ₫',
          originalPrice: '150,000 ₫',
          discountBadge: '-10%',
          unit: 'Can 4 Lít',
          image:
            'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-VT05',
        },
        {
          id: 'vt-6',
          name: 'Cây đẩy bụi khô bản rộng 90cm lau sàn nhà thi đấu đa năng trường học',
          category: 'Bảo Trì Sân Thể Chất & Nhà Đa Năng',
          price: '285,000 ₫',
          unit: 'Cây Inox 90cm',
          image:
            'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-VT06',
        },
      ],
    },
    {
      id: 'thiet-bi-khu-khuan',
      title: 'THIẾT BỊ LỌC KHÍ & KHỬ KHUẨN',
      items: [
        {
          id: 'tb-1',
          name: 'Đèn UV-C khử khuẩn không khí phòng đọc thư viện & phòng y tế',
          category: 'Máy Lọc Khí & Đèn UV Lớp Học',
          price: '1,690,000 ₫',
          originalPrice: '1,950,000 ₫',
          discountBadge: '-13%',
          unit: 'Đèn di động',
          image:
            'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-TB01',
        },
        {
          id: 'tb-2',
          name: 'Máy hút ẩm công nghiệp chống mốc tài liệu lưu trữ thư viện 50L/ngày',
          category: 'Khử Khuẩn Thư Viện & Kho Sách',
          price: '5,490,000 ₫',
          originalPrice: '6,600,000 ₫',
          discountBadge: '-17%',
          unit: 'Máy 50L',
          image:
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-TB02',
        },
        {
          id: 'tb-3',
          name: 'Máy phun sương khử khuẩn Cloramin B khuôn viên trường học 16L',
          category: 'Tổng Vệ Sinh Trước Năm Học Mới',
          price: '2,250,000 ₫',
          originalPrice: '2,500,000 ₫',
          discountBadge: '-10%',
          unit: 'Máy đeo vai',
          image:
            'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-TB03',
        },
        {
          id: 'tb-4',
          name: 'Tủ khử trùng cốc uống nước & khay ăn inox cho căng tin trường học',
          category: 'Vệ Sinh Ký Túc Xá & Căng Tin',
          price: '3,890,000 ₫',
          unit: 'Tủ 2 cánh',
          image:
            'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-TB04',
        },
        {
          id: 'tb-5',
          name: 'Máy chà sàn liên hợp mini làm sạch hành lang lớp học và sảnh trường',
          category: 'Vệ Sinh Giảng Đường & Lớp Học',
          price: '8,900,000 ₫',
          originalPrice: '9,800,000 ₫',
          discountBadge: '-9%',
          unit: 'Máy đẩy tay',
          image:
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-TB05',
        },
        {
          id: 'tb-6',
          name: 'Tủ sấy tiệt trùng sách & học liệu thư viện bằng tia cực tím Ozone',
          category: 'Khử Khuẩn Thư Viện & Kho Sách',
          price: '6,750,000 ₫',
          unit: 'Tủ 60 cuốn',
          image:
            'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
          sku: 'CC-TB06',
        },
      ],
    },
  ],
  splitShowcases: [
    {
      id: 'khuon-vien-thu-vien',
      sectionTitle: 'KHUÔN VIÊN & THƯ VIỆN',
      bannerPosition: 'left',
      bannerBgColor: '#5cb88a',
      bannerTag: 'CHUẨN BẢO QUẢN HỌC LIỆU',
      bannerTitle: 'VỆ SINH & KHỬ NẤM MỐC THƯ VIỆN ĐẠI HỌC',
      bannerSubtitle:
        'Quy trình hút bụi màng lọc HEPA và kiểm soát độ ẩm bảo vệ hàng vạn đầu sách quý.',
      bannerDiscount: 'GIẢM ĐẾN 25%',
      bannerImage:
        'https://images.unsplash.com/photo-1507842229356-51c61504d3ab?auto=format&fit=crop&w=800&q=80',
      items: [
        {
          id: 'kv-1',
          name: 'Hút bụi kệ sách cao tầng & lau khử khuẩn bàn đọc thư viện',
          category: 'Thư viện',
          price: '1,200,000 ₫',
          originalPrice: '1,450,000 ₫',
          discountBadge: '-17%',
          unit: 'Gói 100m²',
          image:
            'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-KV1',
        },
        {
          id: 'kv-2',
          name: 'Giặt ghế nỉ phòng đọc đa phương tiện & phòng tự học',
          category: 'Thư viện',
          price: '450,000 ₫',
          unit: 'Combo 10 ghế',
          image:
            'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-KV2',
        },
        {
          id: 'kv-3',
          name: 'Túi hút ẩm Silica Gel chuyên dụng đặt kệ lưu trữ luận văn',
          category: 'Vật tư thư viện',
          price: '95,000 ₫',
          originalPrice: '115,000 ₫',
          discountBadge: '-17%',
          unit: 'Bịch 1kg',
          image:
            'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-KV3',
        },
        {
          id: 'kv-4',
          name: 'Chổi lông vũ tĩnh điện quét bụi gáy sách & giá tài liệu cổ',
          category: 'Vật tư thư viện',
          price: '85,000 ₫',
          unit: 'Cây cán dài',
          image:
            'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-KV4',
        },
        {
          id: 'kv-5',
          name: 'Cắt tỉa thảm cỏ & thu gom lá rụng sân trường đại học định kỳ',
          category: 'Khuôn viên',
          price: '1,650,000 ₫',
          originalPrice: '1,900,000 ₫',
          discountBadge: '-13%',
          unit: 'Gói 500m²',
          image:
            'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-KV5',
        },
        {
          id: 'kv-6',
          name: 'Dung dịch xịt khử mùi ẩm mốc phòng lưu trữ hồ sơ học vụ',
          category: 'Thư viện',
          price: '165,000 ₫',
          unit: 'Chai 1 Lít',
          image:
            'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-KV6',
        },
      ],
    },
    {
      id: 'phong-lab-hoi-truong',
      sectionTitle: 'PHÒNG LAB & HỘI TRƯỜNG',
      bannerPosition: 'right',
      bannerBgColor: '#f59e0b',
      bannerTag: 'CHUYÊN SÂU & CHÍNH XÁC',
      bannerTitle: 'LÀM SẠCH PHÒNG THÍ NGHIỆM & GIẶT THẢM HỘI TRƯỜNG',
      bannerSubtitle:
        'Xử lý vết hóa chất mặt bàn Epoxy phòng Lab và giặt khô thảm nỉ hội trường lớn.',
      bannerDiscount: 'ƯU ĐÃI 20%',
      bannerImage:
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      items: [
        {
          id: 'pl-1',
          name: 'Vệ sinh mặt bàn kháng hóa chất Phenolic phòng thí nghiệm Hóa - Sinh',
          category: 'Phòng Lab',
          price: '1,450,000 ₫',
          originalPrice: '1,680,000 ₫',
          discountBadge: '-14%',
          unit: 'Phòng Lab',
          image:
            'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-PL1',
        },
        {
          id: 'pl-2',
          name: 'Giặt thảm trải sàn hội trường & ghế nhung khán phòng trường học',
          category: 'Hội trường',
          price: '2,100,000 ₫',
          originalPrice: '2,500,000 ₫',
          discountBadge: '-16%',
          unit: 'Gói 150m²',
          image:
            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-PL2',
        },
        {
          id: 'pl-3',
          name: 'Làm sạch bụi tĩnh điện dàn máy tính phòng thực hành Tin học',
          category: 'Phòng Lab',
          price: '750,000 ₫',
          unit: 'Combo 30 máy',
          image:
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-PL3',
        },
        {
          id: 'pl-4',
          name: 'Đánh bóng sàn Vinyl chống tĩnh điện phòng Lab công nghệ cao',
          category: 'Phòng Lab',
          price: '1,890,000 ₫',
          originalPrice: '2,200,000 ₫',
          discountBadge: '-14%',
          unit: 'Gói 100m²',
          image:
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-PL4',
        },
        {
          id: 'pl-5',
          name: 'Thùng chứa chất thải y tế & thực hành thí nghiệm có đạp chân 30L',
          category: 'Phòng Lab',
          price: '245,000 ₫',
          unit: 'Thùng chuẩn Bộ Y Tế',
          image:
            'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-PL5',
        },
        {
          id: 'pl-6',
          name: 'Vệ sinh hệ thống rèm sân khấu & vách tiêu âm hội trường đại học',
          category: 'Hội trường',
          price: '1,320,000 ₫',
          unit: 'Trọn gói bộ rèm',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-PL6',
        },
      ],
    },
    {
      id: 'mam-non-tieu-hoc',
      sectionTitle: 'TRƯỜNG MẦM NON & TIỂU HỌC',
      bannerPosition: 'left',
      bannerBgColor: '#4caf82',
      bannerTag: '100% HỮU CƠ DỊU NHẸ',
      bannerTitle: 'CHĂM SÓC KHÔNG GIAN TRƯỜNG MẦM NON AN TOÀN',
      bannerSubtitle:
        'Khử trùng nhà bóng, đồ chơi gỗ, nệm ngủ trưa và nhà vệ sinh trẻ em bằng dung dịch sinh học.',
      bannerDiscount: 'COMBO TIẾT KIỆM 30%',
      bannerImage:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      items: [
        {
          id: 'mn-1',
          name: 'Gói giặt nệm ngủ trưa & gối trẻ mầm non khử khuẩn bằng tia UV',
          category: 'Mầm non',
          price: '550,000 ₫',
          originalPrice: '650,000 ₫',
          discountBadge: '-15%',
          unit: 'Combo 25 bộ',
          image:
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-MN1',
        },
        {
          id: 'mn-2',
          name: 'Vệ sinh nhà liên hoàn & khử khuẩn 5.000 bóng nhựa khu vui chơi',
          category: 'Mầm non',
          price: '1,150,000 ₫',
          originalPrice: '1,350,000 ₫',
          discountBadge: '-15%',
          unit: 'Trọn gói khu chơi',
          image:
            'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-MN2',
        },
        {
          id: 'mn-3',
          name: 'Dung dịch xịt khử khuẩn đồ chơi trẻ em không cần rửa lại với nước',
          category: 'Hóa chất hữu cơ',
          price: '145,000 ₫',
          unit: 'Chai 750ml',
          image:
            'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-MN3',
        },
        {
          id: 'mn-4',
          name: 'Làm sạch thảm cỏ nhân tạo sân chơi ngoài trời trường mầm non',
          category: 'Mầm non',
          price: '980,000 ₫',
          unit: 'Gói 100m²',
          image:
            'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-MN4',
        },
        {
          id: 'mn-5',
          name: 'Vệ sinh bếp ăn bán trú một chiều đạt chuẩn An toàn Thực phẩm',
          category: 'Bán trú',
          price: '1,750,000 ₫',
          originalPrice: '2,100,000 ₫',
          discountBadge: '-17%',
          unit: 'Khu bếp trường',
          image:
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-MN5',
        },
        {
          id: 'mn-6',
          name: 'Thảm chùi chân kháng khuẩn chống trượt cửa nhà vệ sinh tiểu học',
          category: 'Vật tư mầm non',
          price: '190,000 ₫',
          unit: 'Tấm 60x90cm',
          image:
            'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-MN6',
        },
      ],
    },
    {
      id: 'y-te-an-toan-hoc-duong',
      sectionTitle: 'Y TẾ & AN TOÀN HỌC ĐƯỜNG',
      bannerPosition: 'right',
      bannerBgColor: '#f97316',
      bannerTag: 'PHÒNG DỊCH CHỦ ĐỘNG',
      bannerTitle: 'PHUN KHỬ KHUẨN & KIỂM SOÁT CÔN TRÙNG TRƯỜNG HỌC',
      bannerSubtitle:
        'Diệt muỗi phòng sốt xuất huyết, khử khuẩn Cloramin B định kỳ cuối tuần toàn trường.',
      bannerDiscount: 'GIẢM NGAY 18%',
      bannerImage:
        'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80',
      items: [
        {
          id: 'yt-1',
          name: 'Phun thuốc diệt muỗi sinh học phòng sốt xuất huyết khuôn viên trường',
          category: 'Y tế học đường',
          price: '1,250,000 ₫',
          originalPrice: '1,500,000 ₫',
          discountBadge: '-17%',
          unit: 'Gói 500m²',
          image:
            'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-YT1',
        },
        {
          id: 'yt-2',
          name: 'Khử trùng bề mặt tay vịn cầu thang, tay nắm cửa & nhà vệ sinh học sinh',
          category: 'Y tế học đường',
          price: '850,000 ₫',
          unit: 'Toàn dãy phòng học',
          image:
            'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-YT2',
        },
        {
          id: 'yt-3',
          name: 'Vệ sinh & súc rửa bể nước ngầm, bồn nước inox trường học định kỳ',
          category: 'An toàn nguồn nước',
          price: '1,600,000 ₫',
          originalPrice: '1,850,000 ₫',
          discountBadge: '-14%',
          unit: 'Bể 10m³',
          image:
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-YT3',
        },
        {
          id: 'yt-4',
          name: 'Hộp sơ cứu y tế học đường nhôm cao cấp trang bị sẵn 24 vật tư',
          category: 'Y tế học đường',
          price: '420,000 ₫',
          unit: 'Hộp tiêu chuẩn',
          image:
            'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-YT4',
        },
        {
          id: 'yt-5',
          name: 'Trạm rửa tay dã ngoại Inox 3 vòi lắp đặt sân thể chất trường học',
          category: 'An toàn học đường',
          price: '4,250,000 ₫',
          unit: 'Trạm 3 vòi',
          image:
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-YT5',
        },
        {
          id: 'yt-6',
          name: 'Tổng vệ sinh toàn diện trường học trước lễ Khai giảng năm học mới',
          category: 'Tổng vệ sinh',
          price: '5,900,000 ₫',
          originalPrice: '6,800,000 ₫',
          discountBadge: '-13%',
          unit: 'Trọn gói 1.000m²',
          image:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80',
          sku: 'CC-YT6',
        },
      ],
    },
  ],
  educationPartners: [
    { id: 'ep-1', name: 'CAMBRIDGE', subline: 'International School System', color: '#0f172a' },
    { id: 'ep-2', name: 'CENGAGE', subline: 'Learning & Library Partner', color: '#0284c7' },
    { id: 'ep-3', name: 'HarperCollins', subline: 'Academic Library Hub', color: '#dc2626' },
    { id: 'ep-4', name: 'hachette', subline: 'Education Campus', color: '#1e293b' },
    { id: 'ep-5', name: 'McGraw Hill', subline: 'Education Vietnam', color: '#b91c1c' },
    { id: 'ep-6', name: 'macmillan', subline: 'education campus', color: '#dc2626' },
    { id: 'ep-7', name: 'OXFORD', subline: 'UNIVERSITY PRESS', color: '#1e3a8a' },
    { id: 'ep-8', name: 'Parragon', subline: 'School Library Network', color: '#7c3aed' },
    { id: 'ep-9', name: 'PEARSON', subline: 'Longman Academy', color: '#ea580c' },
    { id: 'ep-10', name: 'Penguin', subline: 'Random House Library', color: '#f97316' },
    { id: 'ep-11', name: 'STERLING', subline: 'Educational Facilities', color: '#334155' },
    { id: 'ep-12', name: 'USBORNE', subline: 'Kindergarten Partner', color: '#ec4899' },
  ],
  footer: {
    serviceLinks: [
      'Điều khoản hợp đồng tạp vụ',
      'Tiêu chuẩn an toàn hóa chất học đường',
      'Quy trình bảo quản sách thư viện',
      'Giới thiệu hệ thống CleanCampus',
      'Mạng lưới chi nhánh toàn quốc',
    ],
    supportLinks: [
      'Các câu hỏi thường gặp',
      'Chính sách bảo hành dịch vụ 48h',
      'Lịch khảo sát ngoài giờ hành chính',
      'Hướng dẫn nghiệm thu vệ sinh 5S',
      'Biểu phí định kỳ cho trường công lập',
    ],
    accountLinks: [
      'Đăng nhập cổng nhà trường',
      'Quản lý lịch trực tạp vụ',
      'Sổ theo dõi khử khuẩn định kỳ',
      'Tải hồ sơ năng lực & chứng nhận ISO',
    ],
    logisticsPartners: [
      { name: 'NINJA VAN', tagline: 'Giao vật tư nhanh 2h', color: '#dc2626' },
      { name: 'SPEEDLINK', tagline: 'Vận chuyển thiết bị trường học', color: '#1e3a8a' },
      { name: 'KERRY EXPRESS', tagline: 'Đối tác cung ứng toàn quốc', color: '#ea580c' },
    ],
  },
};
