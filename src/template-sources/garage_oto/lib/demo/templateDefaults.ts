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
    name: 'Dark-Luxury Automotive Atelier',
  },
  hero: {
    title: 'Đánh Thức Đẳng Cấp Cỗ Máy Của Bạn',
    subtitle:
      'Tổ hợp Chăm sóc Detailing, Dán phim PPF bảo vệ sơn, Bảo dưỡng chuyên sâu và Nâng cấp hiệu suất chuẩn Châu Âu dành cho Ô tô hạng sang & Mô tô Phân khối lớn.',
    image: {
      src: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=85&w=1800&auto=format&fit=crop',
      alt: 'Porsche 911 GT3 trong phòng studio detailing ánh sáng chuẩn quốc tế',
    },
    primaryAction: {
      label: 'Đặt lịch ngay',
      href: '/apex-garage/booking',
    },
    stats: {
      badge: 'ATELIER PRECISION',
      title: 'Chuẩn Mực Kỹ Thuật Đức',
      values: [
        { value: '12+ Năm', label: 'Kinh nghiệm xe sang & PKL' },
        { value: '4.800+', label: 'Phương tiện đã hoàn thiện' },
        { value: '10 Năm', label: 'Bảo hành điện tử chính hãng' },
      ],
    },
  },
  trust: {
    badges: [
      {
        icon: 'shield',
        title: 'Phòng Sạch Dán PPF & Ceramic Chuẩn ISO',
        description:
          'Kiểm soát nhiệt độ, độ ẩm và lọc bụi tĩnh điện riêng biệt cho từng khu vực Ô tô & Mô tô PKL.',
      },
      {
        icon: 'gauge',
        title: 'Chẩn Đoán Điện Tử & Quy Trình Minh Bạch',
        description:
          'Quét lỗi chuyên sâu bằng máy chẩn đoán hãng, lưu trữ lịch sử bảo dưỡng theo từng mốc ODO.',
      },
      {
        icon: 'wrench',
        title: 'Kỹ Thuật Viên Trưởng Chứng Chỉ Quốc Tế',
        description:
          'Đội ngũ Master Detailing & Kỹ sư máy gầm giàu kinh nghiệm với xe sang Châu Âu và Hyperbike.',
      },
    ],
  },
  about: {
    label: 'APEX ATELIER & PERFORMANCE',
    title: 'Chuẩn Mực Của Một Xưởng Chế Tác & Chăm Sóc Xe Hạng Sang',
    description1:
      'Mỗi chiếc Ô tô hay Mô tô phân khối lớn khi tiến vào xưởng của APEX đều được kiểm tra độ dày lớp sơn bằng thiết bị đo siêu âm và lập hồ sơ theo dõi định kỳ.',
    description2:
      'Từ gói Rửa xe chi tiết 18 bước, Hiệu chỉnh bề mặt sơn, Dán PPF TPU 8.5mil tự phục hồi vết xước cho đến Bảo dưỡng định kỳ, Độ pô Titanium và Phuộc Ohlins — tất cả đều tuân thủ quy trình kiểm định khắt khe.',
    points: [
      'Lưu trữ lịch sử chăm sóc & nhắc lịch bảo dưỡng định kỳ theo số ODO',
      'Khu vực chuyên biệt cho cả Ô tô hạng sang và Xe máy - Mô tô PKL',
      'Cam kết vật tư chính hãng 100%: XPEL, Gyeon Quartz, Liqui Moly, Brembo, Akrapovič',
      'Đặt lịch trực tuyến chọn trước khu vực & Kỹ thuật viên trưởng, không phải chờ đợi',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=85&w=1400&auto=format&fit=crop',
      alt: 'Kỹ thuật viên đang hiệu chỉnh sơn và kiểm tra bề mặt phủ Ceramic',
    },
    badge: {
      label: 'BẢO HÀNH ĐIỆN TỬ',
      value: 'Cam Kết Chất Lượng 10 Năm',
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
      durationLabel: '240 phút',
      tag: 'FLAGSHIP · BẢO HÀNH 10 NĂM',
    },
    {
      id: 'svc-ceramic-car',
      title: 'Hiệu Chỉnh Sơn 3 Bước & Phủ Ceramic Graphene 10H',
      description:
        'Xóa 95% vết xước xoáy mạng nhện (Swirl Marks), khôi phục độ sâu màu sơn nguyên bản và khóa bóng bằng lớp phủ Graphene hiệu ứng lá sen siêu kỵ nước.',
      icon: 'sparkles',
      vehicleType: 'car',
      priceLabel: '12.500.000 ₫',
      durationLabel: '180 phút',
      tag: 'FLAGSHIP · ĐỘ BÓNG 99.6 GU',
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
      durationLabel: '120 phút',
      tag: 'CHĂM SÓC NỘI THẤT',
    },
    {
      id: 'svc-moto-detail',
      title: 'Full Detailing Rã Dàn Áo & Phủ Ceramic Mô Tô PKL / SH350i',
      description:
        'Tháo dàn áo vệ sinh chi tiết lốc máy, cổ pô Titanium, nhông sên dĩa, hiệu chỉnh sơn bình xăng và phủ Ceramic bảo vệ chống bám bẩn toàn diện.',
      icon: 'bike',
      vehicleType: 'moto',
      priceLabel: '2.400.000 ₫',
      durationLabel: '150 phút',
      tag: 'PKL & SCOOTER',
    },
    {
      id: 'svc-moto-tuning',
      title: 'Bảo Dưỡng Chuyên Sâu Mô Tô PKL & Cân Chỉnh Phuộc / Phanh',
      description:
        'Thay nhớt Racing, vệ sinh kim phun họng ga, bảo dưỡng heo dầu Brembo, cân chỉnh tải trọng phuộc Ohlins và kiểm tra an toàn tốc độ cao.',
      icon: 'gauge',
      vehicleType: 'moto',
      priceLabel: '3.600.000 ₫',
      durationLabel: '120 phút',
      tag: 'PERFORMANCE LAB',
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
      ownerName: 'Anh Hoàng Minh · Quận 1',
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
      ownerName: 'Anh Quốc Tuấn · Thảo Điền',
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
      ownerName: 'Anh Đức Huy · KĐT Sala',
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
      ownerName: 'Anh Gia Bảo · Quận 7',
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
      ownerName: 'Chị Thanh Hằng · Phú Mỹ Hưng',
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
      vehicleModel: 'Vespa 946 Dior & SH350i',
      ownerName: 'Anh Nhật Nam · Quận 3',
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
      vehicle: 'Chủ xe Porsche 911 Carrera S (992)',
      text: 'Điểm mình ấn tượng nhất là đặt lịch trên website xong tới nơi phòng sạch PPF đã chuẩn bị sẵn sàng. Cố vấn kỹ thuật đo độ dày sơn từng vị trí, báo giá minh bạch và lưu lịch sử ODO để nhắc kỳ bảo dưỡng tiếp theo rất chu đáo.',
      rating: 5,
    },
    {
      id: 'rev-2',
      author: 'Anh Quốc Tuấn',
      authorInitials: 'QT',
      vehicle: 'Chủ xe Ducati Panigale V4S & Mercedes GLC300',
      text: 'Rất hiếm xưởng dịch vụ nào tại Sài Gòn vừa có phòng sạch chuẩn ISO cho Ô tô vừa có khu bàn nâng thủy lực và dụng cụ lực siết chuẩn cho Mô tô PKL như APEX. Rã dàn áo vệ sinh từng chi tiết máy thực sự xứng đáng từng đồng.',
      rating: 5,
    },
    {
      id: 'rev-3',
      author: 'Chị Thanh Hằng',
      authorInitials: 'TH',
      vehicle: 'Chủ xe Mercedes-AMG G63 Edition 1',
      text: 'Màu sơn đen nhám Magno của G63 rất kén thợ, nhưng đội ngũ kỹ thuật viên trưởng tại APEX thi công lớp PPF Satin Matte cực kỳ sắc nét, mép gấp giấu kín hoàn toàn. Không gian xưởng sạch và sang trọng như showroom chính hãng.',
      rating: 5,
    },
  ],
  contact: {
    title: 'Đặt Lịch Hẹn & Tư Vấn Kỹ Thuật',
    address: '68 Đại lộ Mai Chí Thọ, Khu đô thị Sala, TP. Thủ Đức, TP. Hồ Chí Minh',
    phone: '0909 888 911',
    phoneAlt: '1900 6891',
    hours: [
      'Thứ 2 – Thứ 7: 08:00 – 19:30',
      'Chủ Nhật: 08:30 – 17:30 (Nhận xe đặt lịch trước)',
    ],
    mapImage: {
      src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop',
      alt: 'Không gian xưởng dịch vụ APEX Auto & Moto Lab',
    },
    location: 'Khu đô thị Sala, TP. Thủ Đức, TP.HCM',
    primaryAction: {
      label: 'Đặt lịch ngay',
      href: '/apex-garage/booking',
    },
  },
  seo: {
    title: 'APEX AUTO & MOTO LAB | Xưởng Detailing, PPF & Bảo Dưỡng Ô Tô - Mô Tô Hạng Sang',
    description:
      'Tổ hợp chăm sóc xe hơi hạng sang, mô tô phân khối lớn, dán PPF TPU, phủ Ceramic 10H và bảo dưỡng kỹ thuật chuẩn Châu Âu. Đặt lịch hẹn trực tuyến.',
  },
};
