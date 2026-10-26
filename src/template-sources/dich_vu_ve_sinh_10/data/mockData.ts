export interface VMaxCleanEquipmentItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  unit: string;
  image: string;
  sku: string;
  rating?: number;
  badge?: string;
}

export interface VMaxCleanColorFeatureCard {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  ctaLabel: string;
  icon: 'flask' | 'cpu' | 'wrench' | 'calendar' | 'truck';
}

export interface VMaxCleanTopCategoryIcon {
  id: string;
  label: string;
  icon: 'droplet' | 'shield' | 'sparkles' | 'disc' | 'settings' | 'building';
}

export interface VMaxCleanGuaranteeBox {
  id: string;
  title: string;
  subtitle: string;
  icon: 'truck' | 'credit-card' | 'award' | 'clipboard' | 'refresh';
}

export interface VMaxCleanClientLogo {
  id: string;
  name: string;
  subtitle: string;
  color: string;
}

export interface VMaxCleanTemplateData {
  business: {
    name: string;
    brandTitle: string;
    tagline: string;
    address: string;
    phone: string[];
    email: string[];
    taxCode: string;
    copyright: string;
  };
  topUtilityLinks: string[];
  navigation: {
    label: string;
    href: string;
    active?: boolean;
  }[];
  topCategoryStrip: VMaxCleanTopCategoryIcon[];
  hero: {
    preTitle: string;
    mainTitle: string;
    description: string;
    backgroundImage: string;
  };
  coloredServiceCards: VMaxCleanColorFeatureCard[];
  tabbedShowcase: {
    tabs: string[];
    items: VMaxCleanEquipmentItem[];
  };
  dailyDeals: {
    title: string;
    items: VMaxCleanEquipmentItem[];
  };
  hotProducts: {
    title: string;
    items: VMaxCleanEquipmentItem[];
    guarantees: VMaxCleanGuaranteeBox[];
  };
  tripleColumns: {
    recentItems: VMaxCleanEquipmentItem[];
    featuredItems: VMaxCleanEquipmentItem[];
    topRatedItems: VMaxCleanEquipmentItem[];
  };
  corporateClients: VMaxCleanClientLogo[];
  footer: {
    newsletterHeading: string;
    categories: string[];
    bestSellerImages: string[];
    paymentMethods: string[];
  };
}

export const defaultVMaxCleanData: VMaxCleanTemplateData = {
  business: {
    name: 'Mona Media',
    brandTitle: 'VMax Clean VS013',
    tagline: 'Hệ thống vệ sinh công nghiệp & thiết bị làm sạch tòa nhà',
    address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['demonhunterg@gmail.com', 'mon@mona.media'],
    taxCode: '0314589210',
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  topUtilityLinks: [
    'Tài khoản của tôi',
    'Danh sách tôi yêu thích',
    'Thanh toán',
    'Đăng nhập',
  ],
  navigation: [
    { label: 'TRANG CHỦ', href: '#top', active: true },
    { label: 'GIỚI THIỆU', href: '#gioi-thieu' },
    { label: 'TIN TỨC', href: '#uu-dai' },
    { label: 'LIÊN HỆ', href: '#lien-he' },
  ],
  topCategoryStrip: [
    { id: 'tc-1', label: 'HÓA CHẤT TẨY RỬA', icon: 'droplet' },
    { id: 'tc-2', label: 'THIẾT BỊ CHÍNH HÃNG', icon: 'shield' },
    { id: 'tc-3', label: 'GIẶT THẢM GHẾ', icon: 'sparkles' },
    { id: 'tc-4', label: 'MÁY CHÀ SÀN', icon: 'disc' },
    { id: 'tc-5', label: 'THIẾT BỊ CÔNG NGHỆ', icon: 'settings' },
    { id: 'tc-6', label: 'VỆ SINH TÒA NHÀ', icon: 'building' },
  ],
  hero: {
    preTitle: 'Hệ thống vệ sinh & thiết bị tòa nhà',
    mainTitle: 'Mona Media',
    description:
      'Chúng tôi chuyên cung cấp dịch vụ vệ sinh công nghiệp, quản lý vận hành tòa nhà và phân phối máy chà sàn, máy hút bụi công suất lớn chính hãng.',
    backgroundImage:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
  },
  coloredServiceCards: [
    {
      id: 'cs-1',
      title: 'HÓA CHẤT VỆ SINH',
      description:
        'Cung cấp dung dịch tẩy rửa sàn đá, hóa chất phủ bóng và khử khuẩn tòa nhà đạt chuẩn an toàn MSDS quốc tế.',
      bgColor: '#4a3b5c',
      ctaLabel: 'Tìm hiểu thêm',
      icon: 'flask',
    },
    {
      id: 'cs-2',
      title: 'THIẾT BỊ LÀM SẠCH TÒA NHÀ',
      description:
        'Phân phối máy chà sàn liên hợp, máy hút bụi công nghiệp 3 motor và máy phun rửa áp lực cao chính hãng.',
      bgColor: '#2b6e58',
      ctaLabel: 'Tìm hiểu thêm',
      icon: 'cpu',
    },
    {
      id: 'cs-3',
      title: 'VẬT TƯ VỆ SINH',
      description:
        'Đầy đủ xe đẩy vắt móp đôi, xe làm buồng khách sạn, cây gạt kính inox và pad chà sàn 3M chuyên dụng.',
      bgColor: '#2b353e',
      ctaLabel: 'Tìm hiểu thêm',
      icon: 'wrench',
    },
    {
      id: 'cs-4',
      title: 'DỊCH VỤ BẢO TRÌ ĐỊNH KỲ',
      description:
        'Tổng vệ sinh sau xây dựng, đánh bóng phục hồi sàn đá Marble, Granite và lau kính mặt dựng cao tầng.',
      bgColor: '#8c4a32',
      ctaLabel: 'Tìm hiểu thêm',
      icon: 'calendar',
    },
    {
      id: 'cs-5',
      title: 'DỊCH VỤ CHO THUÊ MÁY CHÀ SÀN',
      description:
        'Giải pháp cho thuê máy chà sàn ngồi lái, máy quét rác nhà xưởng theo ngày và theo tháng tối ưu ngân sách.',
      bgColor: '#1a7f96',
      ctaLabel: 'Tìm hiểu thêm',
      icon: 'truck',
    },
  ],
  tabbedShowcase: {
    tabs: [
      'VỆ SINH CÔNG NGHIỆP',
      'HÓA CHẤT CHÍNH HÃNG',
      'MÁY CHÀ SÀN',
      'VẬT TƯ TÒA NHÀ',
      'CHO THUÊ MÁY',
    ],
    items: [
      {
        id: 'ts-1',
        name: 'Xe vắt móp đơn công nghiệp 36L khung nhựa ABS siêu bền',
        category: 'VỆ SINH CÔNG NGHIỆP',
        price: '1,250,000 ₫',
        originalPrice: '1,450,000 ₫',
        unit: 'Bộ xe 36L',
        image:
          'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-101',
        badge: 'Bán chạy',
      },
      {
        id: 'ts-2',
        name: 'Bộ thùng hóa chất phủ bóng sàn đá Granite & Marble Klenco 20L',
        category: 'HÓA CHẤT CHÍNH HÃNG',
        price: '1,161,000 ₫',
        unit: 'Can 20 Lít',
        image:
          'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-102',
      },
      {
        id: 'ts-3',
        name: 'Máy hút bụi hút nước công nghiệp 1800W thùng Inox 30 Lít',
        category: 'MÁY CHÀ SÀN',
        price: '3,097,000 ₫',
        originalPrice: '3,550,000 ₫',
        unit: 'Máy nguyên chiếc',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-103',
        badge: '-13%',
      },
      {
        id: 'ts-4',
        name: 'Bộ cây gạt kính tòa nhà ống nối nhôm 6m kèm đầu xoay 360 độ',
        category: 'VẬT TƯ TÒA NHÀ',
        price: '987,000 ₫',
        unit: 'Bộ 6 mét',
        image:
          'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-104',
      },
    ],
  },
  dailyDeals: {
    title: 'ƯU ĐÃI MỖI NGÀY',
    items: [
      {
        id: 'dd-1',
        name: 'Máy phun rửa áp lực cao vệ sinh sảnh tòa nhà Karcher HD 5/15C',
        category: 'MÁY CHÀ SÀN',
        price: '5,097,000 ₫',
        originalPrice: '5,890,000 ₫',
        unit: 'Máy 150 Bar',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-DD01',
      },
      {
        id: 'dd-2',
        name: 'Máy giặt thảm phun hút công nghiệp Hiclean HC 401 cho hội trường',
        category: 'MÁY CHÀ SÀN',
        price: '6,197,000 ₫',
        originalPrice: '6,900,000 ₫',
        unit: 'Máy 40 Lít',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-DD02',
      },
      {
        id: 'dd-3',
        name: 'Máy chà sàn đơn công nghiệp tạ rời đánh bóng đá Camry BF-522',
        category: 'MÁY CHÀ SÀN',
        price: '6,499,000 ₫',
        unit: 'Trọn bộ phụ kiện',
        image:
          'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-DD03',
      },
      {
        id: 'dd-4',
        name: 'Máy chà sàn liên hợp đẩy tay nhà xưởng công suất 2500m²/giờ',
        category: 'MÁY CHÀ SÀN',
        price: '14,087,000 ₫',
        originalPrice: '16,500,000 ₫',
        unit: 'Máy bình ắc quy',
        image:
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-DD04',
      },
      {
        id: 'dd-5',
        name: 'Gói tổng vệ sinh mặt dựng kính tòa nhà cao tầng trọn gói (500m²)',
        category: 'VỆ SINH CÔNG NGHIỆP',
        price: '12,150,000 ₫',
        unit: 'Gói 500m²',
        image:
          'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-DD05',
      },
      {
        id: 'dd-6',
        name: 'Xe đẩy phục vụ vệ sinh buồng phòng & hành lang tòa nhà 3 tầng',
        category: 'VẬT TƯ TÒA NHÀ',
        price: '2,598,000 ₫',
        unit: 'Xe 2 túi bạt',
        image:
          'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-DD06',
      },
    ],
  },
  hotProducts: {
    title: 'SẢN PHẨM HOT',
    items: [
      {
        id: 'hp-1',
        name: 'Máy hút bụi công nghiệp 3 Motor 3600W thùng Inox 80 Lít',
        category: 'MÁY CHÀ SÀN',
        price: '4,897,000 ₫',
        unit: 'Máy 80L',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-HP01',
      },
      {
        id: 'hp-2',
        name: 'Máy sấy thảm công nghiệp 3 tốc độ gió thổi khô sàn sảnh',
        category: 'MÁY CHÀ SÀN',
        price: '5,097,000 ₫',
        unit: 'Máy 1200W',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-HP02',
      },
      {
        id: 'hp-3',
        name: 'Máy phun khử khuẩn ULV đeo vai diệt khuẩn tòa nhà văn phòng',
        category: 'HÓA CHẤT CHÍNH HÃNG',
        price: '2,390,000 ₫',
        unit: 'Bình 16L',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-HP03',
      },
      {
        id: 'hp-4',
        name: 'Máy chà sàn thảm liên hợp Karcher BD 50/50 C Bp Classic',
        category: 'MÁY CHÀ SÀN',
        price: '6,499,000 ₫',
        unit: 'Gói thuê tháng',
        image:
          'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-HP04',
      },
      {
        id: 'hp-5',
        name: 'Gói đánh bóng phục hồi sàn đá Marble sảnh khách sạn (100m²)',
        category: 'VỆ SINH CÔNG NGHIỆP',
        price: '12,150,000 ₫',
        unit: 'Trọn gói 100m²',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80',
        sku: 'VM-HP05',
      },
    ],
    guarantees: [
      {
        id: 'gb-1',
        title: 'Giao hàng',
        subtitle: 'Miễn phí nội thành',
        icon: 'truck',
      },
      {
        id: 'gb-2',
        title: 'Thanh toán',
        subtitle: 'Nhiều loại hình',
        icon: 'credit-card',
      },
      {
        id: 'gb-3',
        title: 'Bảo hành',
        subtitle: 'Miễn phí 12 tháng',
        icon: 'award',
      },
      {
        id: 'gb-4',
        title: 'Quản lí',
        subtitle: 'Đơn hàng online',
        icon: 'clipboard',
      },
      {
        id: 'gb-5',
        title: 'Hỗ trợ',
        subtitle: 'Đổi trả linh hoạt',
        icon: 'refresh',
      },
    ],
  },
  tripleColumns: {
    recentItems: [
      {
        id: 'rc-1',
        name: 'Thùng rác đá hoa cương sảnh thang máy tòa nhà viền vàng',
        category: 'VẬT TƯ TÒA NHÀ',
        price: '1,250,000 ₫',
        unit: 'Cái',
        image:
          'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-RC1',
      },
      {
        id: 'rc-2',
        name: 'Hóa chất giặt thảm ít bọt diệt khuẩn Goodmaid Pro GMP 340',
        category: 'HÓA CHẤT CHÍNH HÃNG',
        price: '1,161,000 ₫',
        unit: 'Can 20L',
        image:
          'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-RC2',
      },
      {
        id: 'rc-3',
        name: 'Máy hút bụi nước công nghiệp Hiclean HC 30P chính hãng',
        category: 'MÁY CHÀ SÀN',
        price: '3,097,000 ₫',
        unit: 'Chiếc',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-RC3',
      },
    ],
    featuredItems: [
      {
        id: 'ft-1',
        name: 'Máy chà sàn đơn công nghiệp tốc độ cao đánh bóng đá',
        category: 'MÁY CHÀ SÀN',
        price: '6,197,000 ₫',
        unit: 'Chiếc',
        image:
          'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-FT1',
      },
      {
        id: 'ft-2',
        name: 'Máy quét rác đẩy tay nhà xưởng Karcher KM 70/20 C',
        category: 'MÁY CHÀ SÀN',
        price: '6,499,000 ₫',
        unit: 'Chiếc',
        image:
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-FT2',
      },
      {
        id: 'ft-3',
        name: 'Máy chà sàn liên hợp ngồi lái cho trung tâm thương mại',
        category: 'CHO THUÊ MÁY',
        price: '14,087,000 ₫',
        unit: 'Gói tháng',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-FT3',
      },
    ],
    topRatedItems: [
      {
        id: 'tr-1',
        name: 'Bộ pad chà sàn 3M Đỏ - Đen - Trắng đường kính 17 inch',
        category: 'VẬT TƯ TÒA NHÀ',
        price: '1,250,000 ₫',
        unit: 'Thùng 5 miếng',
        image:
          'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-TR1',
        rating: 5,
      },
      {
        id: 'tr-2',
        name: 'Xe vắt nước 2 xô 46L khung Inox cho bệnh viện & tòa nhà',
        category: 'VẬT TƯ TÒA NHÀ',
        price: '2,598,000 ₫',
        unit: 'Bộ đôi',
        image:
          'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-TR2',
        rating: 5,
      },
      {
        id: 'tr-3',
        name: 'Máy hút bụi công nghiệp 2 Motor dung tích 70L siêu khỏe',
        category: 'MÁY CHÀ SÀN',
        price: '4,897,000 ₫',
        unit: 'Chiếc',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=400&q=80',
        sku: 'VM-TR3',
        rating: 5,
      },
    ],
  },
  corporateClients: [
    { id: 'cl-1', name: 'ACB', subtitle: 'Ngân hàng Á Châu', color: '#004b9b' },
    { id: 'cl-2', name: 'LaVie', subtitle: 'Aelen Nestlé Waters', color: '#1d4ed8' },
    { id: 'cl-3', name: 'CGV', subtitle: 'Cinemas Complex', color: '#dc2626' },
    { id: 'cl-4', name: 'MB BANK', subtitle: 'Ngân hàng Quân Đội', color: '#1e3a8a' },
    { id: 'cl-5', name: 'EVN NPC', subtitle: 'Tổng Công ty Điện lực', color: '#1e40af' },
    { id: 'cl-6', name: 'AIA', subtitle: 'Tập đoàn Bảo hiểm', color: '#b91c1c' },
  ],
  footer: {
    newsletterHeading: 'NHẬN THÔNG TIN HỮU ÍCH CHO DOANH NGHIỆP',
    categories: [
      'Trang chủ',
      'Giới thiệu',
      'Hóa chất vệ sinh',
      'Máy chà sàn công nghiệp',
      'Dịch vụ vệ sinh tòa nhà',
    ],
    bestSellerImages: [
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80',
    ],
    paymentMethods: [
      'VISA',
      'MasterCard',
      'PayPal',
      'JCB',
      'Chuyển khoản',
      'Hợp đồng VAT',
    ],
  },
};
