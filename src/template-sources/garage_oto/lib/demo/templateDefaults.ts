import { DemoPageData } from '../../types/demo';

export const defaultAutoGarageData: DemoPageData = {
  business: {
    name: 'APEX AUTO & MOTO LAB',
    phone: '0909 888 911',
    phoneAlt: '1900 6891',
    email: 'atelier@apexmotorsport.vn',
    address: '68 Đại lộ Mai Chí Thọ, Khu đô thị Sala, TP. Thủ Đức, TP. Hồ Chí Minh',
  },
  template: {
    key: 'auto-garage',
    name: 'Motorsport Telemetry Atelier',
  },
  hero: {
    title: 'Đánh Thức Bản Năng Cỗ Máy Của Bạn',
    subtitle:
      'Tổ hợp Chăm sóc Detailing, Dán phim PPF bảo vệ sơn, Bảo dưỡng chuyên sâu và Nâng cấp hiệu suất chuẩn Motorsport dành riêng cho Ô tô hạng sang & Mô tô Phân khối lớn.',
    image: {
      src: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=1800&auto=format&fit=crop',
      alt: 'Porsche 911 GT3 trong phòng studio detailing ánh sáng chuẩn quốc tế',
    },
    primaryAction: {
      label: 'Đặt lịch khoang dịch vụ',
      href: '/apex-garage/booking',
    },
    stats: {
      badge: 'ATELIER TELEMETRY',
      title: 'Chuẩn Mực Kỹ Thuật Đức',
      values: [
        { value: '4.800+', label: 'Ô tô & PKL đã hoàn thiện' },
        { value: '99.6 GU', label: 'Độ bóng sơn tiêu chuẩn gương' },
        { value: '08 KHOANG', label: 'Phòng sạch PPF & Cầu nâng' },
      ],
    },
  },
  trust: {
    badges: [
      {
        icon: 'shield',
        title: 'Phòng Sạch Dán PPF & Ceramic Chuẩn ISO',
        description:
          'Kiểm soát nhiệt độ, độ ẩm và lọc bụi tĩnh điện riêng biệt cho từng khoang Ô tô & Mô tô PKL.',
      },
      {
        icon: 'gauge',
        title: 'Chẩn Đoán ECU & Bảo Dưỡng Minh Bạch',
        description:
          'Quét lỗi chuyên sâu bằng máy chẩn đoán hãng, lưu trữ toàn bộ lịch sử ODO & biển số xe trên CRM.',
      },
      {
        icon: 'wrench',
        title: 'Kỹ Thuật Viên Trưởng Chứng Chỉ Quốc Tế',
        description:
          'Đội ngũ Master Detailing & Kỹ sư máy gầm giàu kinh nghiệm với siêu xe, xe sang và Hyperbike.',
      },
    ],
  },
  about: {
    label: 'APEX PERFORMANCE & DETAILING',
    title: 'Không Chỉ Là Garage — Đây Là Phòng Lab Chăm Sóc & Nâng Cấp Xe Chuẩn Quốc Tế',
    description1:
      'Mỗi chiếc Ô tô hay Mô tô phân khối lớn khi tiến vào khoang dịch vụ của APEX đều được lập hồ sơ định danh theo Biển số & số ODO. Chúng tôi đo độ dày lớp sơn bằng máy đo bước sóng siêu âm trước khi chạm máy đánh bóng.',
    description2:
      'Từ gói Rửa xe chi tiết 18 bước, Hiệu chỉnh bề mặt sơn, Dán PPF TPU 8.5mil tự phục hồi vết xước cho đến Bảo dưỡng định kỳ, Độ pô Titanium và Phuộc Ohlins — tất cả đều tuân thủ quy trình kiểm định khắt khe.',
    points: [
      'Quản lý hồ sơ xe điện tử theo Biển số, Dòng xe & Lịch sử bảo dưỡng định kỳ',
      'Khu vực chuyên biệt cho cả Ô tô siêu sang (Supercar/SUV) và Xe máy - Mô tô PKL',
      'Cam kết vật tư chính hãng 100%: XPEL, Gyeon Quartz, Liqui Moly, Brembo, Akrapovič',
      'Đặt lịch chọn trước Khoang dịch vụ & Kỹ thuật viên trưởng, không phải chờ đợi',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=85&w=1400&auto=format&fit=crop',
      alt: 'Kỹ thuật viên đang hiệu chỉnh sơn và kiểm tra bề mặt phủ Ceramic',
    },
    badge: {
      label: 'BẢO HÀNH ĐIỆN TỬ',
      value: 'Tra Cứu Theo Biển Số Xe',
    },
  },
  services: [
    {
      id: 'svc-ppf-car',
      title: 'Dán Phim PPF TPU 8.5Mil Toàn Xe Ô Tô (Tự Phục Hồi)',
      description:
        'Bảo vệ tuyệt đối lớp sơn zin khỏi đá văng, va quệt nhẹ. Màng TPU cao cấp tự lành vết xước dăm ở nhiệt độ 60°C, cắt CNC chuẩn form không phạm sơn.',
      icon: 'shield',
      vehicleType: 'car',
      priceLabel: '38.000.000 ₫',
      durationLabel: '480 phút',
      tag: 'BẢO HÀNH 10 NĂM',
    },
    {
      id: 'svc-ceramic-car',
      title: 'Hiệu Chỉnh Sơn 3 Bước & Phủ Ceramic Graphene 10H',
      description:
        'Xóa 95% vết xước xoáy mạng nhện (Swirl Marks), khôi phục độ sâu màu sơn nguyên bản và khóa bóng bằng lớp phủ Graphene hiệu ứng lá sen siêu kỵ nước.',
      icon: 'sparkles',
      vehicleType: 'car',
      priceLabel: '12.500.000 ₫',
      durationLabel: '240 phút',
      tag: 'SIÊU BÓNG 99.6 GU',
    },
    {
      id: 'svc-maint-car',
      title: 'Bảo Dưỡng Định Kỳ Tổng Thể Ô Tô & Chẩn Đoán Điện Tử',
      description:
        'Thay dầu tổng hợp toàn phần Liqui Moly/Mobil 1, vệ sinh buồng đốt, bảo dưỡng phanh đĩa, kiểm tra gầm máy 45 hạng mục và xóa lỗi hệ thống ECU.',
      icon: 'wrench',
      vehicleType: 'car',
      priceLabel: '3.200.000 ₫',
      durationLabel: '90 phút',
      tag: 'CHUẨN HÃNG',
    },
    {
      id: 'svc-interior-car',
      title: 'Detailing Khoang Máy & Spa Phục Hồi Nội Thất Da Nappa',
      description:
        'Làm sạch khoang động cơ bằng hơi nước nóng an toàn tuyệt đối, dưỡng da ghế Nappa/Alcantara cao cấp, khử khuẩn nội thất bằng Ozone.',
      icon: 'spray',
      vehicleType: 'car',
      priceLabel: '2.800.000 ₫',
      durationLabel: '150 phút',
      tag: 'HOT',
    },
    {
      id: 'svc-moto-detail',
      title: 'Full Detailing Rã Dàn Áo & Phủ Ceramic Mô Tô PKL / Xe Tay Ga Cao Cấp',
      description:
        'Tháo dàn áo vệ sinh chi tiết lốc máy, cổ pô Titanium, nhông sên dĩa, hiệu chỉnh sơn bình xăng và phủ Ceramic bảo vệ chống bám bẩn toàn diện.',
      icon: 'bike',
      vehicleType: 'moto',
      priceLabel: '2.400.000 ₫',
      durationLabel: '180 phút',
      tag: 'PKL & SCOOTER',
    },
    {
      id: 'svc-moto-tuning',
      title: 'Bảo Dưỡng Chuyên Sâu Mô Tô PKL & Cân Chỉnh Phuộc / Phanh Hiệu Suất Cao',
      description:
        'Thay nhớt Racing, vệ sinh kim phun họng ga, bảo dưỡng heo dầu Brembo, cân chỉnh tải trọng phuộc Ohlins và kiểm tra an toàn tốc độ cao.',
      icon: 'gauge',
      vehicleType: 'moto',
      priceLabel: '3.600.000 ₫',
      durationLabel: '120 phút',
      tag: 'PERFORMANCE',
    },
  ],
  gallery: [
    {
      image: {
        src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=1400&auto=format&fit=crop',
        alt: 'Porsche 911 Carrera S hoàn thiện gói dán PPF TPU và phủ Ceramic mâm phanh',
      },
      caption: 'Porsche 911 Carrera S — Full PPF TPU 8.5Mil & Phủ Ceramic Mâm Phanh',
      size: 'large',
      category: 'car',
      vehicleModel: 'Porsche 911 Carrera S (992)',
      licensePlate: '51K-888.99',
      ownerName: 'Anh Hoàng Minh (Quận 1)',
      workSummary: [
        'Hiệu chỉnh bề mặt sơn 3 bước chuẩn Gương (99.6 GU)',
        'Dán Full PPF XPEL Ultimate Plus 8.5mil cắt CNC chuẩn form',
        'Phủ Ceramic chịu nhiệt heo phanh & mâm RS Spyder',
      ],
      completionTime: '2.5 Ngày',
      packagePrice: '45.000.000 ₫',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=85&w=1200&auto=format&fit=crop',
        alt: 'Ducati Panigale V4S gói Detailing rã dàn áo và lên cổ pô Full Titanium',
      },
      caption: 'Ducati Panigale V4S — Rã Dàn Áo Detailing, Dán PPF & Bảo Dưỡng Brembo',
      size: 'normal',
      category: 'moto',
      vehicleModel: 'Ducati Panigale V4S',
      licensePlate: '59-A3 388.88',
      ownerName: 'Anh Quốc Tuấn (Thảo Điền)',
      workSummary: [
        'Tháo full dàn áo vệ sinh chi tiết lốc máy Desmosedici Stradale',
        'Dán PPF bình xăng, đầu đèn & ốp Carbon chống đá văng',
        'Bảo dưỡng heo Brembo Stylema & thay dầu phanh Racing DOT 5.1',
      ],
      completionTime: '6 Giờ',
      packagePrice: '6.800.000 ₫',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=85&w=1200&auto=format&fit=crop',
        alt: 'BMW M4 Competition phủ Ceramic Graphene 10H bóng gương',
      },
      caption: 'BMW M4 Competition — Hiệu Chỉnh Sơn & Phủ Ceramic Graphene 10H',
      size: 'normal',
      category: 'ppf',
      vehicleModel: 'BMW M4 Competition G82',
      licensePlate: '30K-668.68',
      ownerName: 'Anh Đức Huy (KĐT Sala)',
      workSummary: [
        'Xử lý xước xoáy toàn bộ thân vỏ màu Black Sapphire',
        'Phủ 3 lớp Ceramic Graphene 10H siêu kỵ nước',
        'Spa dưỡng da nội thất Merino & vệ sinh khoang máy',
      ],
      completionTime: '8 Giờ',
      packagePrice: '15.300.000 ₫',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=85&w=1200&auto=format&fit=crop',
        alt: 'BMW S1000RR bảo dưỡng tổng thể và nâng cấp hiệu suất',
      },
      caption: 'BMW S1000RR M-Package — Bảo Dưỡng Định Kỳ 10.000Km & Phủ Ceramic Nhám',
      size: 'normal',
      category: 'moto',
      vehicleModel: 'BMW S1000RR M-Package',
      licensePlate: '59-A3 799.99',
      ownerName: 'Anh Gia Bảo (Quận 7)',
      workSummary: [
        'Thay nhớt Motul 300V Factory Line & lọc nhớt chính hãng',
        'Vệ sinh sên M-Endurance & cân chỉnh trục bánh bằng tia Laser',
        'Phủ Ceramic chuyên dụng cho bề mặt sơn & dàn chân Carbon',
      ],
      completionTime: '4 Giờ',
      packagePrice: '4.500.000 ₫',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=85&w=1200&auto=format&fit=crop',
        alt: 'Mercedes-AMG G63 bảo dưỡng định kỳ và dán phim cách nhiệt quang học',
      },
      caption: 'Mercedes-AMG G63 — Bảo Dưỡng Gầm Máy, Dán PPF Matte & Spa Nội Thất',
      size: 'large',
      category: 'tuning',
      vehicleModel: 'Mercedes-AMG G63 Edition 1',
      licensePlate: '51H-999.19',
      ownerName: 'Chị Thanh Hằng (Phú Mỹ Hưng)',
      workSummary: [
        'Dán PPF Satin Matte bảo vệ lớp sơn đen nhám Magno nguyên bản',
        'Bảo dưỡng định kỳ động cơ V8 Biturbo & kiểm tra hệ thống treo',
        'Phục hồi & phủ dưỡng ghế da Designo Exclusive Nappa',
      ],
      completionTime: '3 Ngày',
      packagePrice: '52.000.000 ₫',
    },
    {
      image: {
        src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=85&w=1200&auto=format&fit=crop',
        alt: 'Honda SH350i & Vespa 946 chăm sóc chi tiết và dán PPF bảo vệ',
      },
      caption: 'Vespa 946 & SH350i Sport — Dán PPF Trong Suốt & Detailing Toàn Diện',
      size: 'normal',
      category: 'moto',
      vehicleModel: 'Vespa 946 Christian Dior / SH350i',
      licensePlate: '59-T2 686.86',
      ownerName: 'Anh Nhật Nam (Quận 3)',
      workSummary: [
        'Rửa chi tiết không chạm pH trung tính bảo vệ ốc tán nguyên bản',
        'Dán PPF TPU chống trầy xước toàn bộ thân vỏ kim loại liền khối',
        'Bảo dưỡng nồi, thay nhớt máy - nhớt láp tổng hợp cao cấp',
      ],
      completionTime: '4 Giờ',
      packagePrice: '3.800.000 ₫',
    },
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'Anh Hoàng Minh',
      authorInitials: 'HM',
      vehicle: 'Porsche 911 Carrera S · 51K-888.99',
      text: 'Điểm mình ấn tượng nhất là đặt lịch trên web xong tới nơi khoang PPF phòng sạch đã chờ sẵn. Anh em kỹ thuật lưu biển số và ODO trên hệ thống rất chuyên nghiệp, tới kỳ bảo dưỡng tự động nhắn nhắc lịch.',
      rating: 5,
    },
    {
      id: 'rev-2',
      author: 'Anh Quốc Tuấn',
      authorInitials: 'QT',
      vehicle: 'Ducati Panigale V4S · 59-A3 388.88',
      text: 'Rất hiếm xưởng nào vừa có khu Detailing chuẩn cho Ô tô vừa có khoang riêng với bàn nâng thuỷ lực chuyên cho Mô tô PKL như APEX. Rã dàn áo vệ sinh từng con ốc nhìn sướng mắt!',
      rating: 5,
    },
    {
      id: 'rev-3',
      author: 'Anh Đức Huy',
      authorInitials: 'ĐH',
      vehicle: 'BMW M4 Competition & SH350i',
      text: 'Mình đem cả chiếc M4 lẫn chiếc SH350i qua đây chăm sóc định kỳ. Hồ sơ trong CRM của xưởng quản lý cả 2 xe chung 1 tài khoản SĐT của mình, tra cứu lịch sử thay dầu hay bảo hành PPF cực kỳ tiện.',
      rating: 5,
    },
  ],
  contact: {
    title: 'Đặt Lịch Khoang Dịch Vụ & Tư Vấn Kỹ Thuật',
    address: '68 Đại lộ Mai Chí Thọ, Khu đô thị Sala, TP. Thủ Đức, TP. Hồ Chí Minh',
    phone: '0909 888 911',
    phoneAlt: '1900 6891',
    hours: ['Thứ 2 – Chủ Nhật: 08:00 – 20:00 (Có nhận xe ngoài giờ đặt trước)'],
    mapImage: {
      src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop',
      alt: 'Không gian xưởng dịch vụ APEX Auto & Moto Lab',
    },
    location: 'TP. Hồ Chí Minh',
    primaryAction: {
      label: 'Đặt lịch khoang dịch vụ ngay',
      href: '/apex-garage/booking',
    },
  },
  seo: {
    title: 'APEX AUTO & MOTO LAB | Hệ Thống Detailing, PPF & Bảo Dưỡng Ô Tô - Xe Máy Cao Cấp',
    description:
      'Tổ hợp chăm sóc xe hơi hạng sang, mô tô phân khối lớn, dán PPF TPU, phủ Ceramic 10H và bảo dưỡng kỹ thuật chuẩn Motorsport. Đặt lịch khoang dịch vụ trực tuyến.',
  },
};
