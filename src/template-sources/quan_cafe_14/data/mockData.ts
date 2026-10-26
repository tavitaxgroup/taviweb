export interface KienNamMachineItem {
  id: string
  name: string
  brand: string
  origin: string
  category:
    | 'Máy Pha Cà Phê Chuyên Nghiệp'
    | 'Máy Xay Cà Phê'
    | 'Máy Sinh Tố & Quầy Bar'
    | 'Linh Kiện Chính Hãng'
  specs: string
  price: string
  oldPrice?: string
  badge?: string
  image: string
}

export interface KienNamComboSetup {
  id: string
  name: string
  targetScale: string
  price: string
  itemsIncluded: string[]
  highlight?: boolean
}

export interface KienNamServiceItem {
  id: string
  title: string
  description: string
}

export interface QuanCafe14TemplateData {
  business: {
    name: string
    tagline: string
    phone: string[]
    email: string[]
    address: string
  }
  navigation: {
    label: string
    href: string
    hasDropdown?: boolean
  }[]
  hero: {
    featuredBrandLogo: string
    featuredBrandMotto: string
    modelTitle: string
    headlineHighlight: string
    description: string
    machineImage: string
    specsBadges: string[]
  }
  authorizedBrands: {
    name: string
    country: string
  }[]
  catalogSection: {
    heading: string
    subtitle: string
    categories: (
      | 'Tất Cả'
      | 'Máy Pha Cà Phê Chuyên Nghiệp'
      | 'Máy Xay Cà Phê'
      | 'Máy Sinh Tố & Quầy Bar'
      | 'Linh Kiện Chính Hãng'
    )[]
    items: KienNamMachineItem[]
  }
  turnkeyCombos: KienNamComboSetup[]
  technicalServices: KienNamServiceItem[]
}

export const quanCafe14MockData: QuanCafe14TemplateData = {
  business: {
    name: 'KIEN NAM BARISTA',
    tagline: 'Đơn Vị Phân Phối Máy Pha Cà Phê & Giải Pháp Thiết Bị Quầy Bar Hàng Đầu Việt Nam',
    phone: ['0905 555 909', '028 6275 8899'],
    email: ['info@kiennambarista.com', 'kythuat@kiennambarista.com'],
    address: '81 Nguyễn Cửu Vân, Phường 17, Quận Bình Thạnh, TP.HCM',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'VỀ CHÚNG TÔI', href: '#brands' },
    { label: 'MÁY PHA CÀ PHÊ VÀ THIẾT BỊ', href: '#catalog', hasDropdown: true },
    { label: 'LINH KIỆN', href: '#catalog' },
    { label: 'DỊCH VỤ', href: '#services' },
    { label: 'LIÊN HỆ', href: '#footer' },
    { label: 'TIN TỨC', href: '#combos', hasDropdown: true },
  ],
  hero: {
    featuredBrandLogo: 'BFC',
    featuredBrandMotto: 'Per farne un piacere!',
    modelTitle: 'BFC GALILEO',
    headlineHighlight: 'ĐƠN VỊ PHÂN PHỐI MÁY PHA CÀ PHÊ HÀNG ĐẦU VIỆT NAM',
    description:
      'Kiến Nam Barista là một trong những doanh nghiệp hàng đầu chuyên cung cấp giải pháp trọn gói máy móc pha chế cà phê cho các hệ thống quán cafe, nhà hàng, khách sạn, siêu thị, cửa hàng và cho người dùng trực tiếp. Tự hào là một trong những nhà phân phối độc quyền các thương hiệu máy pha cà phê, máy xay cà phê, máy sinh tố, máy nước nóng, máy pha trà hàng đầu thế giới: La Marzocco, BFC, Fiorenzato, Anfim, Ditting, Hamilton Beach Commercial, Egro...',
    machineImage:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1100&q=80',
    specsBadges: [
      '2 Group E61 Nhập Khẩu Ý 100%',
      'Boiler Đồng Nguyên Chất 14 Lít',
      'Công Suất 4000W • Áp Suất Chuẩn 9 Bar',
    ],
  },
  authorizedBrands: [
    { name: 'La Marzocco', country: 'Florence, Italy' },
    { name: 'BFC Coffee Machines', country: 'Treviso, Italy' },
    { name: 'FIORENZATO', country: 'Venezia, Italy' },
    { name: 'ANFIM', country: 'Milano, Italy' },
    { name: 'DITTING', country: 'Switzerland' },
    { name: 'Hamilton Beach', country: 'Commercial USA' },
    { name: 'EGRO', country: 'Swiss Fully Automatic' },
  ],
  catalogSection: {
    heading: 'MÁY PHA CÀ PHÊ VÀ THIẾT BỊ QUẦY BAR CHÍNH HÃNG',
    subtitle:
      'Nhập khẩu nguyên chiếc từ Ý, Thụy Sĩ & Mỹ – Bảo hành chính hãng 24 tháng kèm hỗ trợ kỹ thuật 24/7 trên toàn quốc',
    categories: [
      'Tất Cả',
      'Máy Pha Cà Phê Chuyên Nghiệp',
      'Máy Xay Cà Phê',
      'Máy Sinh Tố & Quầy Bar',
      'Linh Kiện Chính Hãng',
    ],
    items: [
      {
        id: 'kn-1',
        name: 'Máy Pha Cà Phê BFC Galileo 2 Group Automatic',
        brand: 'BFC',
        origin: 'Made in Italy',
        category: 'Máy Pha Cà Phê Chuyên Nghiệp',
        specs: '2 Group • Boiler 14L • 4000W • 300 ly/ngày',
        price: '78,500,000 ₫',
        oldPrice: '85,000,000 ₫',
        badge: 'FLAGSHIP BFC',
        image:
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-2',
        name: 'Máy Pha Cà Phê La Marzocco Linea PB 2 Group',
        brand: 'La Marzocco',
        origin: 'Florence, Italy',
        category: 'Máy Pha Cà Phê Chuyên Nghiệp',
        specs: 'Dual Boiler • PID Control • Thép không gỉ 304',
        price: '215,000,000 ₫',
        badge: 'SPECIALTY STANDARD',
        image:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-3',
        name: 'Máy Pha Cà Phê BFC Lira 2 Group Tall Cup',
        brand: 'BFC',
        origin: 'Made in Italy',
        category: 'Máy Pha Cà Phê Chuyên Nghiệp',
        specs: '2 Group • Boiler 11L • Tối ưu ly Take-away',
        price: '69,000,000 ₫',
        oldPrice: '74,000,000 ₫',
        badge: 'BÁN CHẠY',
        image:
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-4',
        name: 'Máy Xay Cà Phê Fiorenzato F64E Điện Tử',
        brand: 'Fiorenzato',
        origin: 'Made in Italy',
        category: 'Máy Xay Cà Phê',
        specs: 'Lưỡi dao phẳng 64mm • Màn hình cảm ứng LCD',
        price: '16,800,000 ₫',
        oldPrice: '18,500,000 ₫',
        badge: 'HOT DEAL',
        image:
          'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-5',
        name: 'Máy Xay Cà Phê Đặc Sản Ditting 807 Lab Sweet',
        brand: 'Ditting',
        origin: 'Made in Switzerland',
        category: 'Máy Xay Cà Phê',
        specs: 'Đĩa xay 80mm Cast Steel • Chuẩn Cupping & Pour-over',
        price: '64,500,000 ₫',
        badge: 'SWISS PRECISION',
        image:
          'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-6',
        name: 'Máy Sinh Tố Công Nghiệp Hamilton Beach Eclipse HBH755',
        brand: 'Hamilton Beach',
        origin: 'USA Commercial',
        category: 'Máy Sinh Tố & Quầy Bar',
        specs: 'Hộp chống ồn QuietBlend • Động cơ 3 HP',
        price: '21,900,000 ₫',
        image:
          'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-7',
        name: 'Máy Pha Cà Phê Tự Động Egro Next Pure Coffee',
        brand: 'Egro',
        origin: 'Switzerland',
        category: 'Máy Sinh Tố & Quầy Bar',
        specs: 'Màn hình Android 10 inch • Dành cho Khách sạn 5 sao',
        price: '168,000,000 ₫',
        image:
          'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'kn-8',
        name: 'Bộ Tay Pha Portafilter & Lưới Lọc IMS Competition E61',
        brand: 'IMS / BFC',
        origin: 'Made in Italy',
        category: 'Linh Kiện Chính Hãng',
        specs: 'Chuẩn họng 58mm • Thép không gỉ đúc nguyên khối',
        price: '1,850,000 ₫',
        image:
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  turnkeyCombos: [
    {
      id: 'cb-1',
      name: 'COMBO KHỞI NGHIỆP QUÁN CAFE VỪA & NHỎ',
      targetScale: 'Công suất 120 – 180 ly/ngày',
      price: '54,900,000 ₫',
      itemsIncluded: [
        '01 Máy pha BFC Junior Plus 1 Group (Italy)',
        '01 Máy xay Fiorenzato F5G tiêu chuẩn Ý',
        'Trọn bộ dụng cụ Barista chuyên nghiệp (Tamper, Knockbox, Ca đánh sữa)',
        'Tặng 10kg Cà phê hạt Espresso Rang Mộc + Khóa đào tạo pha chế',
      ],
    },
    {
      id: 'cb-2',
      name: 'COMBO QUÁN CAFE CHUYÊN NGHIỆP BFC GALILEO',
      targetScale: 'Công suất 250 – 400 ly/ngày',
      price: '92,000,000 ₫',
      highlight: true,
      itemsIncluded: [
        '01 Máy pha BFC Galileo 2 Group Automatic (Italy)',
        '01 Máy xay cảm ứng Fiorenzato F64E (Italy)',
        '01 Máy sinh tố chống ồn Hamilton Beach + Hệ thống lọc nước 3M',
        'Bảo trì định kỳ miễn phí 24 tháng + Chuyển giao công thức menu quán',
      ],
    },
    {
      id: 'cb-3',
      name: 'COMBO SPECIALTY COFFEE & ROASTERY LAB',
      targetScale: 'Công suất trên 500 ly/ngày',
      price: '265,000,000 ₫',
      itemsIncluded: [
        '01 Máy pha La Marzocco Linea PB 2 Group',
        '01 Máy xay Anfim SP II + 01 Máy xay đơn liều Ditting',
        'Thiết kế mặt bằng công năng quầy bar 3D chuẩn luồng vận hành',
        'Hỗ trợ kỹ thuật ưu tiên 24/7 & máy thay thế dự phòng',
      ],
    },
  ],
  technicalServices: [
    {
      id: 'sv-1',
      title: 'Bảo Trì & Vệ Sinh Chuyên Sâu Định Kỳ',
      description:
        'Kiểm tra áp suất bơm, tẩy cặn boiler, thay ron cao su họng pha và cân chỉnh nhiệt độ nước định kỳ hàng quý.',
    },
    {
      id: 'sv-2',
      title: 'Cứu Hộ Kỹ Thuật Máy Pha 24/7',
      description:
        'Đội ngũ kỹ sư có mặt nhanh chóng và hỗ trợ cho mượn máy pha dự phòng để quán không bị gián đoạn kinh doanh.',
    },
    {
      id: 'sv-3',
      title: 'Tư Vấn Setup Quầy Bar & Đào Tạo Barista',
      description:
        'Từ thiết kế sơ đồ điện nước quầy bar đến đào tạo kỹ năng chiết xuất Espresso, Latte Art và xây dựng menu lợi nhuận cao.',
    },
    {
      id: 'sv-4',
      title: 'Kho Linh Kiện Chính Hãng 100% Từ Ý',
      description:
        'Sẵn kho hàng ngàn linh kiện bo mạch, bơm Ulka/Fluid-o-Tech, van điện từ, lưỡi dao máy xay chính hãng.',
    },
  ],
}
