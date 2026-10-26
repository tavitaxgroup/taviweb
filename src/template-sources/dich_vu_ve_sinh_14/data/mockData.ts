export interface NhaSachCoreServiceCard {
  id: string;
  title: string;
  shortDescription: string;
  fullDetails: string[];
  priceReference: string;
  icon: 'sparkles' | 'trees' | 'bug' | 'users';
}

export interface NhaSachRobotModel {
  id: string;
  name: string;
  modelCode: string;
  applicationArea: string;
  productivity: string;
  batteryRuntime: string;
  features: string[];
  image: string;
}

export interface NhaSachEnterpriseClient {
  id: string;
  name: string;
  subline: string;
  brandColor: string;
  fontStyle?: string;
}

export interface NhaSachTemplateData {
  business: {
    name: string;
    certification: string;
    brandFull: string;
    tagline: string;
    address: string;
    phone: string[];
    email: string[];
    workingHours: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
    mosaicImages: string[];
  };
  coreServicesSection: {
    smallLabel: string;
    heading: string;
    supervisorImage: string;
    locationCaption: string;
    robotBadgeText: string;
    cards: NhaSachCoreServiceCard[];
  };
  robot40Section: {
    badge: string;
    title: string;
    subtitle: string;
    models: NhaSachRobotModel[];
  };
  enterpriseClients: {
    title: string;
    subtitle: string;
    logos: NhaSachEnterpriseClient[];
  };
  trainingAcademy: {
    title: string;
    description: string;
    highlights: {
      title: string;
      detail: string;
    }[];
    gallery: string[];
  };
  footer: {
    services: string[];
    branches: {
      name: string;
      address: string;
    }[];
  };
}

export const defaultNhaSachData: NhaSachTemplateData = {
  business: {
    name: 'Nhà Sạch',
    certification: 'ISO 9001 : 2015',
    brandFull: 'Nhà Sạch VS017 — Tiên Phong Robot 4.0 Vệ Sinh Công Nghiệp',
    tagline:
      'Doanh nghiệp tiên phong mang Robot 4.0 vào dịch vụ vệ sinh công nghiệp tại Việt Nam',
    address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['info@nhasach.com.vn', 'mon@mona.media'],
    workingHours: '07:30 - 18:00 (Thứ 2 - Thứ 7) | Trực vận hành 24/7',
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  navigation: [
    { label: 'Trang Chủ', href: '#top' },
    { label: 'Về Nhà Sạch', href: '#thong-ke' },
    { label: 'Dịch Vụ Của Nhà Sạch', href: '#dich-vu-nha-sach' },
    { label: 'Công Nghệ Robot 4.0', href: '#robot-40' },
    { label: 'Khách Hàng Tiêu Biểu', href: '#khach-hang' },
    { label: 'Đào Tạo Nhân Sự', href: '#dao-tao' },
    { label: 'Liên Hệ', href: '#lien-he' },
  ],
  hero: {
    badge: 'DOANH NGHIỆP ĐẠT CHUẨN QUẢN LÝ CHẤT LƯỢNG ISO 9001 : 2015',
    headline: 'DOANH NGHIỆP TIÊN PHONG MANG ROBOT 4.0',
    subheadline: 'VÀO VỆ SINH CÔNG NGHIỆP',
    description:
      'Với hơn 14 năm kinh nghiệm, 3.000+ nhân sự chính quy và dàn Robot vệ sinh tự hành AI thế hệ mới, Nhà Sạch tự hào đồng hành cùng hơn 300+ tập đoàn đa quốc gia, bệnh viện quốc tế và trung tâm thương mại trên toàn quốc.',
    stats: [
      { value: '14+', label: 'Năm Kinh Nghiệm' },
      { value: '300+', label: 'Khách Hàng' },
      { value: '3.000+', label: 'Nhân Sự' },
      { value: '1+', label: 'Cam Kết Chất Lượng' },
    ],
    mosaicImages: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1580256081112-e49377338b7f?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
    ],
  },
  coreServicesSection: {
    smallLabel: 'Dịch vụ của Nhà Sạch',
    heading: 'DỊCH VỤ CỦA NHÀ SẠCH',
    supervisorImage:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
    locationCaption: 'BỆNH VIỆN QUỐC TẾ CITY — CITY INTERNATIONAL HOSPITAL',
    robotBadgeText: 'Robot Vệ Sinh Tự Hành AI 4.0 Nhà Sạch',
    cards: [
      {
        id: 'ns-srv-1',
        title: 'DỊCH VỤ VỆ SINH',
        shortDescription:
          'Chúng tôi duy trì vệ sinh văn phòng, nhà máy, trường học, bệnh viện,... luôn sạch sẽ bằng hệ thống Robot 4.0 và quy trình chuẩn quốc tế.',
        fullDetails: [
          'Vệ sinh duy trì hàng ngày cho Bệnh viện Quốc tế, TTTM và Tòa nhà hạng A',
          'Vệ sinh nhà máy sản xuất điện tử, thực phẩm, dược phẩm chuẩn GMP / HACCP',
          'Tổng vệ sinh sau xây dựng, lau kính mặt dựng cao tầng và bảo dưỡng sàn đá',
        ],
        priceReference: 'Khảo sát & lập phương án miễn phí',
        icon: 'sparkles',
      },
      {
        id: 'ns-srv-2',
        title: 'CHĂM SÓC MẢNG XANH',
        shortDescription:
          'Thiết kế thi công vườn. Cho thuê, cung cấp, chăm sóc hoa và cây cảnh. Chăm sóc sân, bãi cỏ, cắt tỉa cây bóng mát khuôn viên nhà máy.',
        fullDetails: [
          'Cung cấp & bảo dưỡng cây xanh nội thất văn phòng định kỳ hàng tuần',
          'Chăm sóc thảm cỏ, cắt tỉa cây cảnh quan khu công nghiệp và khu đô thị',
          'Thiết kế tiểu cảnh xanh sảnh tòa nhà, bệnh viện và khu nghỉ dưỡng',
        ],
        priceReference: 'Trọn gói theo tháng / quý',
        icon: 'trees',
      },
      {
        id: 'ns-srv-3',
        title: 'KIỂM SOÁT CÔN TRÙNG',
        shortDescription:
          'Kiểm soát côn trùng, động vật gây hại cho các doanh nghiệp, nhà máy, tòa nhà, văn phòng,... đạt tiêu chuẩn an toàn sinh học.',
        fullDetails: [
          'Kiểm soát muỗi, ruồi, kiến, gián, chuột tổng hợp (IPM) cho nhà máy thực phẩm',
          'Phun khử khuẩn phòng dịch bệnh viện, trường học và khu chế xuất',
          'Sử dụng 100% chế phẩm được Bộ Y Tế cấp phép lưu hành và có MSDS',
        ],
        priceReference: 'Cam kết bảo hành định kỳ',
        icon: 'bug',
      },
      {
        id: 'ns-srv-4',
        title: 'DỊCH VỤ CUNG ỨNG LAO ĐỘNG',
        shortDescription:
          'Với kinh nghiệm trong ngành tuyển dụng nhân sự nhiều năm. Đội ngũ lao động phổ thông chất lượng cao, kỷ luật và gắn bó lâu dài.',
        fullDetails: [
          'Cung ứng nhân viên tạp vụ văn phòng, buồng phòng bệnh viện và công nhân đóng gói',
          '100% nhân sự được đào tạo tại Trung tâm Huấn luyện Nhà Sạch trước khi nhận việc',
          'Chịu trách nhiệm toàn bộ lương thưởng, BHXH, đồng phục và nhân sự thay thế ngay trong 2h',
        ],
        priceReference: 'Linh hoạt theo ca / toàn thời gian',
        icon: 'users',
      },
    ],
  },
  robot40Section: {
    badge: 'CÁCH MẠNG LÀM SẠCH THÔNG MINH 4.0',
    title: 'Đội Ngũ Robot Vệ Sinh Tự Hành AI Của Nhà Sạch',
    subtitle:
      'Kết hợp hoàn hảo giữa con người tận tâm và công nghệ tự động hóa LIDAR 3D giúp làm sạch sảnh bệnh viện, sân bay, siêu thị với hiệu suất gấp 4 lần phương pháp truyền thống.',
    models: [
      {
        id: 'rb-1',
        name: 'Robot Chà Sàn & Khử Khuẩn Tự Hành EcoBot 50',
        modelCode: 'NHASACH-BOT 01',
        applicationArea: 'Sảnh Bệnh Viện Quốc Tế & Trung Tâm Thương Mại',
        productivity: '2.200 m² / giờ',
        batteryRuntime: '6 giờ liên tục (Tự động về trạm sạc)',
        features: [
          'Cảm biến LiDAR 360 độ tự động tránh bệnh nhân và khách tham quan',
          'Hệ thống tái chế lọc nước tuần hoàn tiết kiệm 70% lượng nước tiêu thụ',
          'Gửi báo cáo bản đồ diện tích đã làm sạch trực tiếp về điện thoại quản lý',
        ],
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'rb-2',
        name: 'Robot Hút Bụi & Phun Sương Diệt Khuẩn PharBot UV',
        modelCode: 'NHASACH-BOT 02',
        applicationArea: 'Tòa Nhà Văn Phòng Hạng A & Nhà Máy Điện Tử',
        productivity: '1.800 m² / giờ',
        batteryRuntime: '8 giờ liên tục',
        features: [
          'Tích hợp đèn UV-C chiếu gầm sàn tiêu diệt 99.9% vi khuẩn bề mặt',
          'Độ ồn siêu tĩnh dưới 55dB hoạt động ngay trong giờ hành chính',
          'Tự động gọi thang máy di chuyển giữa các tầng tòa nhà',
        ],
        image:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  enterpriseClients: {
    title: 'Hơn 300+ Tập Đoàn Đa Quốc Gia Tin Tưởng Nhà Sạch',
    subtitle:
      'Đối tác chiến lược duy trì môi trường làm việc chuẩn quốc tế cho các thương hiệu hàng đầu thế giới tại Việt Nam',
    logos: [
      {
        id: 'ec-1',
        name: 'intel',
        subline: 'Intel Products Vietnam',
        brandColor: '#0071c5',
      },
      {
        id: 'ec-2',
        name: 'SAMSUNG',
        subline: 'Samsung Electronics HCMC',
        brandColor: '#1428a0',
      },
      {
        id: 'ec-3',
        name: 'HSBC',
        subline: 'Ngân hàng TNHH MTV HSBC',
        brandColor: '#db0011',
      },
      {
        id: 'ec-4',
        name: 'AEON MALL',
        subline: 'Hệ thống TTTM Aeon Mall',
        brandColor: '#9b1b6e',
      },
      {
        id: 'ec-5',
        name: 'Olam',
        subline: 'Olam International Vietnam',
        brandColor: '#4d8b31',
      },
      {
        id: 'ec-6',
        name: 'JABIL',
        subline: 'Jabil Circuit Khu Công Nghệ Cao',
        brandColor: '#005596',
      },
      {
        id: 'ec-7',
        name: 'H&M',
        subline: 'H&M Flagship Stores',
        brandColor: '#e50010',
      },
      {
        id: 'ec-8',
        name: 'Coca-Cola',
        subline: 'Coca-Cola Beverages Vietnam',
        brandColor: '#f40009',
        fontStyle: 'italic',
      },
    ],
  },
  trainingAcademy: {
    title: 'Văn Hóa Đào Tạo Chính Quy & Gắn Kết 3.000+ Nhân Sự',
    description:
      'Tại Nhà Sạch, mỗi nhân viên vệ sinh đều là một đại sứ thương hiệu. 100% nhân sự trải qua khóa đào tạo vận hành máy móc, giao tiếp ứng xử và an toàn lao động được cấp chứng chỉ tốt nghiệp trước khi đến công trình.',
    highlights: [
      {
        title: 'Học Viện Đào Tạo Nội Bộ Chuẩn 5S',
        detail: 'Lễ trao bằng tốt nghiệp định kỳ hàng tháng cho đội ngũ giám sát và nhân viên mới.',
      },
      {
        title: 'Phúc Lợi & Chế Độ Đãi Ngộ Bền Vững',
        detail: 'Đảm bảo thu nhập ổn định, bảo hiểm đầy đủ giúp tỷ lệ gắn bó nhân sự đạt trên 92%.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    ],
  },
  footer: {
    services: [
      'Dịch vụ vệ sinh bệnh viện & trường học',
      'Vệ sinh nhà máy & khu công nghệ cao',
      'Chăm sóc mảng xanh & cảnh quan',
      'Kiểm soát côn trùng tổng hợp IPM',
      'Cung ứng lao động phổ thông chất lượng cao',
    ],
    branches: [
      {
        name: 'Trụ sở chính TP. Hồ Chí Minh',
        address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
      },
      {
        name: 'Văn phòng Khu Công Nghệ Cao & Bình Dương',
        address: 'Khu Công Nghệ Cao Quận 9 & KCN VSIP 1, Bình Dương',
      },
      {
        name: 'Chi nhánh Miền Bắc & Miền Trung',
        address: 'Quận Cầu Giấy, TP. Hà Nội & Quận Hải Châu, TP. Đà Nẵng',
      },
    ],
  },
};
