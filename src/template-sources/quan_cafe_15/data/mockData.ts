export interface DalatMilkProduct {
  id: string
  name: string
  category: 'Sữa Tươi Thanh Trùng' | 'Sữa Tươi Tiệt Trùng' | 'Trà Sữa & Sữa Chua Đà Lạt'
  volume: string
  price: string
  badge: string
  description: string
  image: string
}

export interface DalatNewsEvent {
  id: string
  bannerBadge: string
  bannerHighlight: string
  title: string
  excerpt: string
  image: string
}

export interface DalatFarmStandard {
  id: string
  title: string
  subtitle: string
  metric: string
}

export interface QuanCafe15TemplateData {
  business: {
    name: string
    parentBrand: string
    slogan: string
    subSlogan: string
    phone: string[]
    email: string[]
    address: string
  }
  navigation: {
    label: string
    href: string
  }[]
  storyHero: {
    sectionTitle: string
    brandBadge: string
    headlineBig: string
    headlineSub: string
    storyLead: string
    storyBody: string
    ctaText: string
    farmImage: string
  }
  productsSection: {
    heading: string
    subtitle: string
    categories: (
      | 'Sữa Tươi Thanh Trùng'
      | 'Sữa Tươi Tiệt Trùng'
      | 'Trà Sữa & Sữa Chua Đà Lạt'
    )[]
    items: DalatMilkProduct[]
  }
  newsSection: {
    heading: string
    items: DalatNewsEvent[]
  }
  farmStandards: DalatFarmStandard[]
}

export const quanCafe15MockData: QuanCafe15TemplateData = {
  business: {
    name: 'Đà Lạt True Milk',
    parentBrand: 'VPMilk • Đà Lạt True Milk',
    slogan: 'NGON',
    subSlogan: '100% TỪ ĐÀ LẠT',
    phone: ['1900 555 889', '028 7300 8899'],
    email: ['cskh@dalattruemilk.vn', 'info@vpmilk.vn'],
    address: 'Nông Trại Cao Nguyên Đơn Dương, Lâm Đồng & Chuỗi Cửa Hàng TP.HCM – Hà Nội',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'CÂU CHUYỆN ĐÀ LẠT TRUE MILK', href: '#story' },
    { label: 'SẢN PHẨM SỮA & TRÀ SỮA', href: '#products' },
    { label: 'NÔNG TRẠI XANH', href: '#standards' },
    { label: 'TIN TỨC & SỰ KIỆN', href: '#news' },
    { label: 'HỆ THỐNG CỬA HÀNG', href: '#footer' },
  ],
  storyHero: {
    sectionTitle: 'CÂU CHUYỆN ĐÀ LẠT TRUE MILK',
    brandBadge: 'Đà Lạt True Milk',
    headlineBig: 'NGON',
    headlineSub: '100% TỪ ĐÀ LẠT',
    storyLead:
      'Từ cao nguyên Đà Lạt ở độ cao hơn 1.500m – nơi có khí hậu trong lành, mát mẻ quanh năm và những đồng cỏ xanh mướt trải dài.',
    storyBody:
      'Nguồn sữa tươi nguyên chất 100% từ đàn bò hạnh phúc tại nông trại Đà Lạt được thu hoạch và chế biến khép kín trong vòng 24 giờ, giữ trọn vị béo thơm tự nhiên và dưỡng chất quý giá cho mọi gia đình Việt.',
    ctaText: 'KHÁM PHÁ NÔNG TRẠI',
    farmImage:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=80',
  },
  productsSection: {
    heading: 'DÒNG SẢN PHẨM SỮA TƯƠI & TRÀ SỮA ĐÀ LẠT TRUE MILK',
    subtitle:
      'Trọn vẹn hương vị thuần khiết từ nông trại cao nguyên Đà Lạt đến từng ly sữa tươi và trà sữa thanh mát mỗi ngày',
    categories: [
      'Sữa Tươi Thanh Trùng',
      'Sữa Tươi Tiệt Trùng',
      'Trà Sữa & Sữa Chua Đà Lạt',
    ],
    items: [
      {
        id: 'dl-1',
        name: 'Sữa Tươi Thanh Trùng Đà Lạt True Milk Nguyên Chất',
        category: 'Sữa Tươi Thanh Trùng',
        volume: 'Chai 950ml & 450ml',
        price: '44,000 ₫',
        badge: '100% TƯƠI NGUYÊN CHẤT',
        description:
          'Thanh trùng ở nhiệt độ thấp giúp bảo toàn lớp váng sữa béo ngậy và hệ vitamin tự nhiên.',
        image:
          'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'dl-2',
        name: 'Thùng Sữa Tươi Tiệt Trùng Đà Lạt True Milk Có Đường',
        category: 'Sữa Tươi Tiệt Trùng',
        volume: 'Lốc 4 hộp x 180ml',
        price: '36,000 ₫',
        badge: 'GIÀU CANXI & VITAMIN D',
        description:
          'Tiện lợi cho bé mang đến trường mỗi ngày, thơm ngon chuẩn vị sữa tươi cao nguyên Đà Lạt.',
        image:
          'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'dl-3',
        name: 'Sữa Chua Uống Lên Men Tự Nhiên Vị Dâu Đà Lạt',
        category: 'Trà Sữa & Sữa Chua Đà Lạt',
        volume: 'Chai 300ml',
        price: '28,000 ₫',
        badge: 'TỐT CHO TIÊU HÓA',
        description:
          'Kết hợp sữa tươi Đà Lạt lên men tự nhiên cùng mứt dâu tây Đà Lạt chín mọng.',
        image:
          'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'dl-4',
        name: 'Trà Sữa Ô Long Cầu Đất Pha Cùng Sữa Tươi Thanh Trùng',
        category: 'Trà Sữa & Sữa Chua Đà Lạt',
        volume: 'Ly 500ml tại cửa hàng',
        price: '49,000 ₫',
        badge: 'SIGNATURE TẠI QUÁN',
        description:
          'Hương trà Ô Long rang đậm đà quyện cùng sữa tươi thanh trùng Đà Lạt True Milk béo thanh, không dùng bột béo.',
        image:
          'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'dl-5',
        name: 'Sữa Tươi Thanh Trùng Đà Lạt True Milk Ít Đường',
        category: 'Sữa Tươi Thanh Trùng',
        volume: 'Chai 950ml',
        price: '44,000 ₫',
        badge: 'ÍT NGỌT THANH MÁT',
        description:
          'Giảm 30% lượng đường, giữ trọn hậu vị ngọt thanh tự nhiên của sữa bò tươi vùng cao.',
        image:
          'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'dl-6',
        name: 'Combo Gia Đình: 02 Thùng Sữa Tươi Tặng Giỏ Rau Sạch Đà Lạt',
        category: 'Sữa Tươi Tiệt Trùng',
        volume: '02 Thùng 48 hộp 180ml',
        price: '680,000 ₫',
        badge: 'TẶNG RAU SẠCH ĐÀ LẠT',
        description:
          'Ưu đãi đặc biệt giao tận nhà kèm 01 túi rau củ hữu cơ thu hoạch trực tiếp từ nông trại Đà Lạt.',
        image:
          'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  newsSection: {
    heading: 'TIN TỨC & SỰ KIỆN',
    items: [
      {
        id: 'ev-1',
        bannerBadge: 'KHẢO SÁT CHUẨN SỮA NGON',
        bannerHighlight: 'NHẬN QUÀ CỰC "NGON"',
        title: 'Tổng kết chương trình "Khảo sát sữa ngon VPMilk"',
        excerpt:
          'VPMilk đã làm một cuộc khảo sát trên 2000 mẹ ở khu vực TP Hồ Chí Minh và Hà Nội thông qua một chương trình dùng thử sữa tươi Đà Lạt True Milk...',
        image:
          'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'ev-2',
        bannerBadge: 'MÓN QUÀ CHO GIA ĐÌNH',
        bannerHighlight: 'Sữa ngon tặng Rau ngon',
        title: 'MUA SỮA NGON ĐÀ LẠT TRUE MILK TẶNG RAU NGON ĐÀ LẠT',
        excerpt:
          'Hoà cùng tinh thần vui khoẻ cùng nhau vượt qua mùa dịch và san sẻ một phần nỗi lo thiếu hụt nguồn rau xanh sạch tươi ngon mỗi ngày...',
        image:
          'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'ev-3',
        bannerBadge: 'KHẢO SÁT CHUẨN SỮA NGON',
        bannerHighlight: 'NHẬN QUÀ CỰC "NGON"',
        title: 'KHẢO SÁT "CHUẨN SỮA NGON" – NHẬN QUÀ CỰC NGON TỪ VPMILK ĐÀ LẠT TRUE MILK',
        excerpt:
          'Từ cao nguyên Đà Lạt – nơi có khí hậu trong lành, sạch sẽ và mát mẻ quanh năm, chúng tôi khởi đầu cả hành trình mang dòng sữa mát lành...',
        image:
          'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  farmStandards: [
    {
      id: 'fs-1',
      title: 'Độ Cao Cao Nguyên Lý Tưởng',
      subtitle: 'Khí hậu ôn đới mát mẻ 18–22°C quanh năm tại Đơn Dương – Đà Lạt',
      metric: '1.500m+',
    },
    {
      id: 'fs-2',
      title: 'Quy Trình Lạnh Khép Kín',
      subtitle: 'Từ nông trại đến nhà máy và hệ thống cửa hàng ở nhiệt độ 2–4°C',
      metric: '24 Giờ',
    },
    {
      id: 'fs-3',
      title: 'Sữa Tươi Nguyên Bản Thuần Khiết',
      subtitle: 'Không chất bảo quản, không dư lượng kháng sinh, giàu đạm & canxi tự nhiên',
      metric: '100% Tươi',
    },
    {
      id: 'fs-4',
      title: 'Hệ Thống Điểm Bán & Cửa Hàng',
      subtitle: 'Phủ sóng toàn quốc cùng dịch vụ giao sữa tươi & trà sữa tận nhà mỗi sáng',
      metric: '500+ Điểm',
    },
  ],
}
