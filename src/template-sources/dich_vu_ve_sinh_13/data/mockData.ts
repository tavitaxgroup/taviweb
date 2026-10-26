export interface CleanSupplyWholesaleItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  retailPrice: string;
  wholesalePrice: string;
  moq: string;
  stockStatus: string;
  origin: string;
  image: string;
  badge?: string;
}

export interface CleanSupplyLiveNotice {
  id: string;
  date: string;
  title: string;
  tag: string;
}

export interface CleanSupplyTierRow {
  tierName: string;
  orderValue: string;
  discountRate: string;
  shippingPolicy: string;
  warrantySupport: string;
}

export interface CleanSupplyTemplateData {
  business: {
    name: string;
    domain: string;
    brandTitle: string;
    tagline: string;
    exchangeNotice: string;
    address: string;
    phone: string[];
    email: string[];
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
    hasDropdown?: boolean;
  }[];
  hero: {
    preTitle: string;
    mainTitle: string;
    subtitle: string;
    backgroundImage: string;
    catalogSources: string[];
    toolHeading: string;
    liveNotices: CleanSupplyLiveNotice[];
  };
  categories: {
    id: string;
    name: string;
    count: string;
    description: string;
    image: string;
  }[];
  wholesaleProducts: CleanSupplyWholesaleItem[];
  discountTiers: CleanSupplyTierRow[];
  warehouseSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  footer: {
    warehouses: {
      city: string;
      address: string;
    }[];
    policies: string[];
    supportGuides: string[];
  };
}

export const defaultCleanSupplyData: CleanSupplyTemplateData = {
  business: {
    name: 'CleanSupply.vn',
    domain: 'tongkhovesinh.vn',
    brandTitle: 'Tổng Kho Thiết Bị Vệ Sinh Công Nghiệp VS016',
    tagline: 'Hơn 10+ năm kinh nghiệm nhập khẩu & phân phối sỉ thiết bị làm sạch tận xưởng',
    exchangeNotice: 'Chiết khấu đại lý: Lên đến 35% (Giá gốc nhà máy)',
    address: 'Kho Tổng: Quốc Lộ 1A, Quận 12 & 319 Lý Thường Kiệt, Quận 11, TP. Hồ Chí Minh',
    phone: ['0961 700 894', '076 922 0162'],
    email: ['tongkho@mona.media', 'demonhunterg@gmail.com'],
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  navigation: [
    { label: 'Giới thiệu', href: '#gioi-thieu' },
    { label: 'Dịch vụ & Thiết bị', href: '#kho-thiet-bi', hasDropdown: true },
    { label: 'Bảng giá sỉ', href: '#bang-gia-si' },
    { label: 'Chính sách đại lý', href: '#chinh-sach' },
    { label: 'Hướng dẫn đặt hàng', href: '#quy-trinh-nhap' },
    { label: 'Liên hệ kho', href: '#lien-he-kho' },
  ],
  hero: {
    preTitle: 'DỊCH VỤ CUNG ỨNG & PHÂN PHỐI SỈ',
    mainTitle: 'THIẾT BỊ VỆ SINH CÔNG NGHIỆP TẬN XƯỞNG',
    subtitle:
      'Tổng kho nhập khẩu trực tiếp máy chà sàn liên hợp, máy hút bụi công nghiệp 3 motor, xe vắt móp và phụ tùng thay thế chính hãng với giá sỉ tận gốc cho đại lý và công ty dịch vụ vệ sinh.',
    backgroundImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=85',
    catalogSources: [
      'KHO MÁY CHÀ SÀN',
      'KHO MÁY HÚT BỤI',
      'XE ĐẨY & DỤNG CỤ',
      'PHỤ TÙNG MOTOR & PAD',
    ],
    toolHeading: 'CÔNG CỤ ĐẶT HÀNG SỈ & TRA CỨU TỒN KHO NHANH',
    liveNotices: [
      {
        id: 'ln-1',
        date: '18/10/2026',
        title:
          'Kinh nghiệm chọn motor máy hút bụi Ametek chuẩn đồng 100% cho đại lý mới',
        tag: 'Cẩm nang sỉ',
      },
      {
        id: 'ln-2',
        date: '12/10/2026',
        title:
          'Tổng Kho VS016 thông báo điều chỉnh GIẢM 12% giá lô máy chà sàn liên hợp tháng 10/2026',
        tag: 'Thông báo giá',
      },
      {
        id: 'ln-3',
        date: '05/10/2026',
        title:
          'Danh mục phụ tùng bàn chải cước, lá cao su gạt nước sẵn hàng tại kho Hà Nội & TP.HCM',
        tag: 'Tồn kho mới',
      },
    ],
  },
  categories: [
    {
      id: 'cat-1',
      name: 'Máy Chà Sàn Đơn & Liên Hợp',
      count: '120+ mẫu sẵn kho',
      description: 'Đầy đủ dòng đẩy tay và ngồi lái 50L - 150L nhập khẩu nguyên đai.',
      image:
        'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cat-2',
      name: 'Máy Hút Bụi Công Nghiệp Inox',
      count: '85+ mẫu sẵn kho',
      description: 'Thùng Inox 30L, 70L, 80L công suất 1200W - 3600W siêu khỏe.',
      image:
        'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cat-3',
      name: 'Xe Vắt Móp & Xe Làm Buồng',
      count: '210+ mẫu sẵn kho',
      description: 'Xe vắt đơn 36L, xe đôi 46L khung Inox và xe đẩy khách sạn 3 tầng.',
      image:
        'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cat-4',
      name: 'Hóa Chất Vệ Sinh Can Sỉ 20L',
      count: '95+ mã MSDS',
      description: 'Nước lau sàn, hóa chất bóc sàn, phủ bóng đá Granite & giặt thảm.',
      image:
        'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    },
  ],
  wholesaleProducts: [
    {
      id: 'wp-1',
      name: 'Máy chà sàn đơn công nghiệp Camry BF-522 (Nguyên thùng 4 phụ kiện)',
      sku: 'VS16-BF522',
      category: 'KHO MÁY CHÀ SÀN',
      retailPrice: '6,850,000 ₫',
      wholesalePrice: '5,150,000 ₫',
      moq: 'Giá sỉ từ 03 máy',
      stockStatus: 'Sẵn 48 máy tại kho',
      origin: 'Nhập khẩu chính ngạch CO/CQ',
      badge: 'Chiết khấu 25%',
      image:
        'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-2',
      name: 'Máy hút bụi nước công nghiệp 3 Motor 3600W thùng Inox 80L Hiclean',
      sku: 'VS16-HC80',
      category: 'KHO MÁY HÚT BỤI',
      retailPrice: '5,400,000 ₫',
      wholesalePrice: '3,980,000 ₫',
      moq: 'Giá sỉ từ 03 máy',
      stockStatus: 'Sẵn 65 máy tại kho',
      origin: 'Bảo hành motor 18 tháng',
      badge: 'Bán chạy #1',
      image:
        'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-3',
      name: 'Lô 10 Xe vắt móp đơn 36L nhựa ABS chịu lực cao cấp cho công ty vệ sinh',
      sku: 'VS16-MOP36',
      category: 'XE ĐẨY & DỤNG CỤ',
      retailPrice: '9,500,000 ₫',
      wholesalePrice: '6,800,000 ₫',
      moq: 'Lô 10 chiếc',
      stockStatus: 'Sẵn 320 chiếc',
      origin: 'Giá xuất xưởng trực tiếp',
      badge: 'Siêu lời',
      image:
        'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-4',
      name: 'Máy chà sàn liên hợp đẩy tay dùng bình ắc quy 50L công suất 2200m²/h',
      sku: 'VS16-LH50B',
      category: 'KHO MÁY CHÀ SÀN',
      retailPrice: '24,500,000 ₫',
      wholesalePrice: '18,900,000 ₫',
      moq: 'Giá đại lý từ 01 máy',
      stockStatus: 'Sẵn 19 máy tại kho',
      origin: 'Đầy đủ hóa đơn VAT + CO/CQ',
      image:
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-5',
      name: 'Thùng 20 Motor hút bụi công nghiệp Ametek 1200W - 1500W hai tầng cánh',
      sku: 'VS16-MT12',
      category: 'PHỤ TÙNG MOTOR & PAD',
      retailPrice: '13,000,000 ₫',
      wholesalePrice: '9,200,000 ₫',
      moq: 'Thùng 20 cục',
      stockStatus: 'Sẵn 150 thùng',
      origin: 'Dây đồng nguyên chất 100%',
      badge: 'Linh kiện OEM',
      image:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-6',
      name: 'Combo 10 Thùng Pad chà sàn 3M 17 inch (Đỏ / Đen / Trắng đủ mã)',
      sku: 'VS16-PAD3M',
      category: 'PHỤ TÙNG MOTOR & PAD',
      retailPrice: '4,800,000 ₫',
      wholesalePrice: '3,350,000 ₫',
      moq: 'Combo 10 thùng',
      stockStatus: 'Sẵn 500 thùng',
      origin: 'Hàng chính hãng 3M',
      image:
        'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-7',
      name: 'Máy giặt thảm phun hút công nghiệp thùng Inox 40L cần hút thảm thép',
      sku: 'VS16-GT40',
      category: 'KHO MÁY HÚT BỤI',
      retailPrice: '6,900,000 ₫',
      wholesalePrice: '5,190,000 ₫',
      moq: 'Giá sỉ từ 02 máy',
      stockStatus: 'Sẵn 34 máy tại kho',
      origin: 'Tặng kèm bộ đầu hút ghế sofa',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'wp-8',
      name: 'Pallet 20 Can hóa chất tẩy sàn & đánh bóng đá công nghiệp đậm đặc 20L',
      sku: 'VS16-CHEM20',
      category: 'XE ĐẨY & DỤNG CỤ',
      retailPrice: '15,600,000 ₫',
      wholesalePrice: '10,800,000 ₫',
      moq: 'Pallet 20 can',
      stockStatus: 'Sẵn kho 3 miền',
      origin: 'Có giấy kiểm định MSDS',
      image:
        'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=700&q=80',
    },
  ],
  discountTiers: [
    {
      tierName: 'Khách Sỉ Khởi Nghiệp',
      orderValue: 'Từ 10 - 30 Triệu VNĐ',
      discountRate: 'Chiết khấu 15% - 20%',
      shippingPolicy: 'Miễn phí giao nội thành TP.HCM & Hà Nội',
      warrantySupport: 'Bảo hành 12 tháng tại kho',
    },
    {
      tierName: 'Đại Lý Khu Vực Cấp 2',
      orderValue: 'Từ 30 - 100 Triệu VNĐ',
      discountRate: 'Chiết khấu 22% - 28%',
      shippingPolicy: 'Hỗ trợ 50% cước xe tải liên tỉnh',
      warrantySupport: 'Bảo hành 18 tháng + Đổi mới 30 ngày',
    },
    {
      tierName: 'Tổng Đại Lý Phân Phối Cấp 1',
      orderValue: 'Trên 100 Triệu VNĐ / tháng',
      discountRate: 'Chiết khấu kịch trần 35%',
      shippingPolicy: 'Giao container / xe tải tận kho miễn phí',
      warrantySupport: 'Hỗ trợ công nợ 30 ngày + Kỹ thuật tận nơi',
    },
  ],
  warehouseSteps: [
    {
      step: 'BƯỚC 01',
      title: 'Chọn Mã Máy & Tạo Đơn Sỉ',
      description:
        'Tra cứu mã thiết bị trực tiếp trên thanh công cụ hoặc tải file báo giá Excel dành riêng cho đại lý.',
    },
    {
      step: 'BƯỚC 02',
      title: 'Xác Nhận Chiết Khấu & CO/CQ',
      description:
        'Chuyên viên tổng kho gửi báo giá nét theo số lượng kèm đầy đủ chứng từ hải quan và VAT.',
    },
    {
      step: 'BƯỚC 03',
      title: 'Kiểm Đếm & Test Máy Tại Kho',
      description:
        'Kỹ thuật viên chạy thử tải motor, áp lực nước và đóng kiện gỗ chống sốc trước khi xuất kho.',
    },
    {
      step: 'BƯỚC 04',
      title: 'Bàn Giao Trong 24h - 48h',
      description:
        'Theo dõi hành trình xe vận chuyển trực tuyến bằng mã vận đơn trên hệ thống CleanSupply.',
    },
  ],
  footer: {
    warehouses: [
      {
        city: 'Tổng Kho Miền Nam (TP.HCM)',
        address: 'Quốc lộ 1A, P. Tân Thới Nhất, Quận 12 & 319 Lý Thường Kiệt, Q.11',
      },
      {
        city: 'Tổng Kho Miền Bắc (Hà Nội & Hải Phòng)',
        address: 'KCN Ngọc Hồi, Thanh Trì, Hà Nội & Cảng Đình Vũ, Hải Phòng',
      },
      {
        city: 'Tổng Kho Miền Trung (Đà Nẵng)',
        address: 'Đường Trường Sơn, Quận Cẩm Lệ, TP. Đà Nẵng',
      },
    ],
    policies: [
      'Chính sách chiết khấu đại lý 2026',
      'Quy định bảo hành motor & bo mạch',
      'Chính sách đổi trả hàng lỗi 1 đổi 1',
      'Hỗ trợ hồ sơ thầu CO/CQ bản gốc',
    ],
    supportGuides: [
      'Tải tiện ích đặt hàng Chrome / Cốc Cốc',
      'Hướng dẫn tra cứu mã vận đơn lô hàng',
      'Bảng quy đổi thông số pad & bàn chải',
      'Đăng ký làm trạm bảo hành ủy quyền',
    ],
  },
};
