export interface KNICCleanServicePackage {
  id: string;
  title: string;
  category: string;
  capacity: string;
  equipment: string;
  price: string;
  unit: string;
  badge?: string;
  image: string;
  highlights: string[];
}

export interface KNICCleanZoneHotspot {
  id: string;
  zoneCode: string;
  name: string;
  areaScale: string;
  standard: string;
  description: string;
}

export interface KNICCleanCaseStudy {
  id: string;
  parkName: string;
  location: string;
  scale: string;
  scope: string;
  certification: string;
  image: string;
}

export interface KNICCleanWorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface KNICCleanTemplateData {
  business: {
    name: string;
    brandCode: string;
    tagline: string;
    address: string;
    phone: string[];
    email: string[];
    certifications: string[];
    workingHours: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    panoramaImage: string;
    mascotBadgeTitle: string;
    mascotBadgeSubtitle: string;
    kpis: {
      value: string;
      label: string;
    }[];
    zoneHotspots: KNICCleanZoneHotspot[];
  };
  serviceSection: {
    subtitle: string;
    title: string;
    tabs: string[];
    packages: KNICCleanServicePackage[];
  };
  solarAndEnvironment: {
    badge: string;
    title: string;
    description: string;
    image: string;
    metrics: {
      label: string;
      value: string;
      detail: string;
    }[];
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: KNICCleanWorkflowStep[];
  };
  caseStudies: {
    title: string;
    subtitle: string;
    items: KNICCleanCaseStudy[];
  };
  footer: {
    quickLinks: string[];
    industrialServices: string[];
    regionalOffices: {
      region: string;
      address: string;
    }[];
  };
}

export const defaultKNICCleanData: KNICCleanTemplateData = {
  business: {
    name: 'THE MONA KNIC',
    brandCode: 'KNIC Clean VS015',
    tagline:
      'Quản lý vận hành, cảnh quan môi trường & vệ sinh khu công nghiệp chuẩn ESG',
    address:
      'Khu Công Nghiệp Hiệp Phước, Nhà Bè & 319 Lý Thường Kiệt, Quận 11, TP. Hồ Chí Minh',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['kcn@mona.media', 'demonhunterg@gmail.com'],
    certifications: ['ISO 14001:2015', 'ISO 9001:2015', 'HSE Zero-Accident'],
    workingHours: 'Vận hành 24/7 (3 ca trực Khu Công Nghiệp)',
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  navigation: [
    { label: 'Tổng Quan KCN', href: '#tong-quan' },
    { label: 'Dịch Vụ Nhà Xưởng', href: '#dich-vu-kcn' },
    { label: 'Vệ Sinh Điện Mặt Trời', href: '#dien-mat-troi' },
    { label: 'Quy Trình HSE', href: '#quy-trinh-hse' },
    { label: 'Dự Án Tiêu Biểu', href: '#du-an-kcn' },
    { label: 'Báo Giá Thầu', href: '#bao-gia-thau' },
  ],
  hero: {
    badge: 'CHUẨN KHU CÔNG NGHIỆP XANH & BỀN VỮNG ESG',
    title: 'Quản Lý Vận Hành, Môi Trường & Vệ Sinh Khu Công Nghiệp',
    highlight: 'THE MONA KNIC VS015',
    description:
      'Giải pháp cơ giới hóa đồng bộ cho khu công nghiệp và nhà máy FDI: Quét hút bụi đường nội khu, vệ sinh tấm pin năng lượng mặt trời áp mái, chăm sóc hành lang cây xanh và làm sạch nhà xưởng chuẩn phòng sạch.',
    primaryCta: 'Nhận Hồ Sơ Năng Lực & Báo Giá',
    secondaryCta: 'Khảo Sát Thực Địa KCN',
    panoramaImage:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85',
    mascotBadgeTitle: 'Kỹ Sư Vận Hành THE MONA',
    mascotBadgeSubtitle: 'Giám sát an toàn lao động HSE & chất lượng 5S 24/7',
    kpis: [
      { value: '45+', label: 'Khu Công Nghiệp & Cụm Nhà Máy' },
      { value: '1.800 ha', label: 'Diện Tích Cảnh Quan & Hạ Tầng' },
      { value: '120 MWp', label: 'Hệ Thống Pin Mặt Trời Bảo Dưỡng' },
      { value: '100%', label: 'Đạt Chuẩn Kiểm Toán ESG / ROHS' },
    ],
    zoneHotspots: [
      {
        id: 'zh-1',
        zoneCode: 'ZONE A',
        name: 'Tổ Hợp Nhà Xưởng Sản Xuất & Phòng Sạch',
        areaScale: '25.000 m²/xưởng',
        standard: 'Chuẩn 5S & Chống tĩnh điện ESD',
        description:
          'Chà sàn Epoxy bằng máy liên hợp ngồi lái, hút bụi trần kèo thép trên cao và duy trì phòng sạch.',
      },
      {
        id: 'zh-2',
        zoneCode: 'ZONE B',
        name: 'Hệ Thống Pin Năng Lượng Mặt Trời Áp Mái',
        areaScale: '50.000 tấm pin',
        standard: 'Nước khử khoáng RO & Robot chổi xoay',
        description:
          'Làm sạch bụi công nghiệp bám trên tấm Solar giúp tăng 15% - 22% hiệu suất phát điện.',
      },
      {
        id: 'zh-3',
        zoneCode: 'ZONE C',
        name: 'Trục Đường Nội Khu & Hành Lang Cây Xanh',
        areaScale: '18 km đường trục',
        standard: 'Xe quét hút đường cơ giới 6m³',
        description:
          'Quét rác, phun nước dập bụi đường nội khu và cắt tỉa cây xanh cách ly khu công nghiệp.',
      },
      {
        id: 'zh-4',
        zoneCode: 'ZONE D',
        name: 'Kênh Thoát Nước & Trạm Xử Lý Môi Trường',
        areaScale: 'Chuẩn QCVN 40:2011',
        standard: 'Vớt rác mặt kênh & khử mùi sinh học',
        description:
          'Nạo vét bùn hố ga, duy trì dòng chảy kênh sinh thái và thu gom chất thải rắn công nghiệp.',
      },
    ],
  },
  serviceSection: {
    subtitle: 'DANH MỤC HẠNG MỤC THẦU KHU CÔNG NGHIỆP',
    title: 'Giải Pháp Vệ Sinh & Quản Lý Hạ Tầng Toàn Diện',
    tabs: [
      'Tất cả hạng mục',
      'Nhà xưởng & Kho vận',
      'Pin mặt trời (Solar)',
      'Hạ tầng & Cảnh quan KCN',
    ],
    packages: [
      {
        id: 'pkg-1',
        title: 'Vệ Sinh Sàn Epoxy Nhà Xưởng & Kho Logistics Bằng Máy Ngồi Lái',
        category: 'Nhà xưởng & Kho vận',
        capacity: '15.000 - 30.000 m²/ca',
        equipment: 'Máy chà sàn ngồi lái Ride-on 120L',
        price: '6,500 ₫',
        unit: '/ m²',
        badge: 'Chuẩn FDI',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        highlights: [
          'Tẩy sạch vết dầu mỡ máy móc và vệt bánh xe nâng Forklift',
          'Hóa chất trung tính không ăn mòn lớp phủ sơn Epoxy',
          'Thi công linh hoạt theo ca nghỉ hoặc cuối tuần',
        ],
      },
      {
        id: 'pkg-2',
        title: 'Vệ Sinh Hệ Thống Điện Mặt Trời Áp Mái Nhà Xưởng (Solar Rooftop)',
        category: 'Pin mặt trời (Solar)',
        capacity: '2 MWp - 5 MWp / ngày',
        equipment: 'Robot lau pin Solar + Hệ thống lọc nước RO DI',
        price: '4,200,000 ₫',
        unit: '/ MWp',
        badge: 'Tăng 18% Điện năng',
        image:
          'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
        highlights: [
          'Sử dụng 100% nước tinh khiết khử khoáng không để lại cặn vôi',
          'Chổi sợi Carbon mềm chống trầy xước lớp kính cường lực AR',
          'Kèm báo cáo ảnh nhiệt Drone kiểm tra điểm nóng (Hotspot)',
        ],
      },
      {
        id: 'pkg-3',
        title: 'Quét Hút Bụi Đường Nội Khu & Tưới Nước Dập Bụi Khu Công Nghiệp',
        category: 'Hạ tầng & Cảnh quan KCN',
        capacity: '25 km tuyến đường / ngày',
        equipment: 'Xe quét đường hút chân không chuyên dụng',
        price: '38,000,000 ₫',
        unit: '/ tháng',
        badge: 'Cơ giới hóa',
        image:
          'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=800&q=80',
        highlights: [
          'Thu gom triệt để cát sỏi, lá cây và bụi mịn PM10 trên trục chính',
          'Hệ thống phun sương áp lực giảm nhiệt độ mặt đường nhựa',
          'Định vị GPS theo dõi lộ trình xe quét theo thời gian thực',
        ],
      },
      {
        id: 'pkg-4',
        title: 'Quét Mạng Nhện & Hút Bụi Kết Cấu Kèo Thép Trần Nhà Xưởng Trên Cao',
        category: 'Nhà xưởng & Kho vận',
        capacity: 'Độ cao 8m - 18m',
        equipment: 'Xe nâng người cắt kéo Scissor Lift + Máy hút công suất lớn',
        price: '12,000 ₫',
        unit: '/ m² sàn',
        image:
          'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
        highlights: [
          'Làm sạch bụi bám trên máng cáp điện, ống thông gió HVAC và đèn Highbay',
          '100% kỹ thuật viên có chứng chỉ làm việc trên cao & PCCC',
          'Che chắn bạt bảo vệ dây chuyền máy móc bên dưới tuyệt đối',
        ],
      },
      {
        id: 'pkg-5',
        title: 'Chăm Sóc Thảm Cỏ, Cắt Tỉa Cây Xanh Cách Ly & Kênh Sinh Thái KCN',
        category: 'Hạ tầng & Cảnh quan KCN',
        capacity: 'Từ 5 Hecta - 100 Hecta',
        equipment: 'Xe cắt cỏ ngồi lái + Máy tỉa cành tầm cao',
        price: '2,800 ₫',
        unit: '/ m² / tháng',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80',
        highlights: [
          'Duy trì mảng xanh chuẩn Khu Công Nghiệp Sinh Thái (Eco-Industrial Park)',
          'Phát quang hành lang an toàn lưới điện trước mùa mưa bão',
          'Ủ phân hữu cơ tuần hoàn từ lá cây và cỏ cắt tỉa',
        ],
      },
      {
        id: 'pkg-6',
        title: 'Vệ Sinh Kính Mặt Dựng & Tòa Nhà Điều Hành Trung Tâm KCN',
        category: 'Nhà xưởng & Kho vận',
        capacity: 'Tòa nhà 3 - 15 tầng',
        equipment: 'Hệ thống Rope Access & Cây gạt kính Pure Water',
        price: '18,000 ₫',
        unit: '/ m² kính',
        image:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        highlights: [
          'Tẩy ố vẩy cá và xử lý keo silicone mặt dựng Alu – Kính',
          'Đảm bảo diện mạo sang trọng cho khu văn phòng đón tiếp đối tác quốc tế',
          'Bảo hiểm trách nhiệm công cộng trị giá 10 tỷ VNĐ',
        ],
      },
    ],
  },
  solarAndEnvironment: {
    badge: 'CÔNG NGHỆ XANH CHO NHÀ MÁY HIỆN ĐẠI',
    title: 'Đồng Hành Cùng Doanh Nghiệp FDI Đạt Chứng Chỉ Xanh LEED & ESG',
    description:
      'Lấy cảm hứng từ mô hình Khu Công Nghiệp Sinh Thái thế hệ mới với mái nhà xưởng phủ kín điện mặt trời và khuôn viên xanh mát, THE MONA KNIC cung cấp quy trình làm sạch không phát thải thứ cấp.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=85',
    metrics: [
      {
        label: 'Tiết kiệm nước nhờ công nghệ tuần hoàn',
        value: '35%',
        detail: 'Hệ thống xe chà sàn tái lọc nước thông minh',
      },
      {
        label: 'Gia tăng sản lượng điện Solar áp mái',
        value: '+19.4%',
        detail: 'Sau chu kỳ vệ sinh định kỳ mỗi 45 ngày',
      },
      {
        label: 'An toàn lao động HSE',
        value: '0 Sự cố',
        detail: 'Tuân thủ nghiêm ngặt quy trình Lockout/Tagout nhà máy',
      },
    ],
  },
  workflow: {
    title: 'Quy Trình Triển Khai Chuẩn An Toàn HSE Quốc Tế',
    subtitle:
      'Được thiết kế chuyên biệt cho các nhà máy sản xuất điện tử, dược phẩm, thực phẩm và ban quản lý khu công nghiệp',
    steps: [
      {
        stepNumber: '01',
        title: 'Khảo Sát Bản Vẽ & Thực Địa KCN',
        description:
          'Đo đạc diện tích sàn nhà xưởng, mái Solar, tuyến đường nội khu và đánh giá rủi ro an toàn HSE.',
      },
      {
        stepNumber: '02',
        title: 'Lập Phương Án Thi Công & Hồ Sơ Thầu',
        description:
          'Đệ trình bảng phân bổ máy móc cơ giới, danh mục hóa chất có MSDS và chứng chỉ vận hành thiết bị.',
      },
      {
        stepNumber: '03',
        title: 'Tập Kết Máy Móc & Huấn Luyện An Toàn',
        description:
          'Phổ biến nội quy nhà máy, trang bị đầy đủ mũ bảo hộ, giày mũi thép, dây đai an toàn toàn thân.',
      },
      {
        stepNumber: '04',
        title: 'Nghiệm Thu Số Hóa & Báo Cáo Định Kỳ',
        description:
          'Kiểm tra độ sạch bằng máy đo ATP/độ bóng sàn và bàn giao biên bản nghiệm thu điện tử.',
      },
    ],
  },
  caseStudies: {
    title: 'Dự Án Khu Công Nghiệp & Nhà Máy Tiêu Biểu',
    subtitle:
      'Hơn 45 ban quản lý khu công nghiệp và tập đoàn sản xuất đa quốc gia tin tưởng lựa chọn',
    items: [
      {
        id: 'cs-1',
        parkName: 'Tổ Hợp Nhà Máy Điện Tử & Solar KCN VSIP II',
        location: 'Bình Dương',
        scale: '85.000 m² sàn & 6 MWp Solar',
        scope: 'Vệ sinh nhà xưởng định kỳ, lau pin mặt trời & chăm sóc cảnh quan',
        certification: 'Đạt chuẩn RBA & ISO 14001',
        image:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'cs-2',
        parkName: 'Khu Công Nghiệp Sinh Thái Hiệp Phước – Giai Đoạn 2',
        location: 'TP. Hồ Chí Minh',
        scale: '320 Hecta hạ tầng chung',
        scope: 'Quét hút bụi đường nội khu, cắt tỉa cây xanh & vớt rác kênh thoát nước',
        certification: 'Eco-Industrial Park Standard',
        image:
          'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'cs-3',
        parkName: 'Trung Tâm Kho Vận Lạnh & Logistics Long Hậu',
        location: 'Long An',
        scale: '42.000 m² kho cao tầng',
        scope: 'Quét mạng nhện kèo thép độ cao 16m & đánh bóng sàn bê tông Lithium',
        certification: 'HACCP & BRC Logistics',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  footer: {
    quickLinks: [
      'Hồ sơ năng lực (Profile PDF)',
      'Chứng nhận an toàn HSE',
      'Tiêu chuẩn hóa chất MSDS',
      'Bảng giá thầu vệ sinh KCN',
      'Chính sách bảo mật NDA nhà máy',
    ],
    industrialServices: [
      'Vệ sinh nhà xưởng sản xuất',
      'Rửa pin năng lượng mặt trời',
      'Quét đường nội khu KCN',
      'Duy trì cảnh quan & cây xanh',
      'Cung ứng tạp vụ nhà máy FDI',
    ],
    regionalOffices: [
      {
        region: 'Trụ sở Miền Nam',
        address: 'KCN Hiệp Phước, Nhà Bè & 319 Lý Thường Kiệt, Q.11, TP.HCM',
      },
      {
        region: 'Chi nhánh Bình Dương - Đồng Nai',
        address: 'Đại lộ Tự Do, KCN VSIP 1, TP. Thuận An, Bình Dương',
      },
      {
        region: 'Chi nhánh Miền Bắc',
        address: 'KCN Yên Phong, Huyện Yên Phong, Tỉnh Bắc Ninh',
      },
    ],
  },
};
