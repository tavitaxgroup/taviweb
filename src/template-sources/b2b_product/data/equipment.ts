export interface MachinerySpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Equipment {
  id: string;
  name: string;
  ref: string;
  category: 'laser' | 'robotics' | 'motion' | 'cnc';
  categoryLabel: string;
  tagline: string;
  badge?: string;
  description: string;
  imageUrl: string;
  specs: MachinerySpec[];
  keyParameters: {
    powerOrPayload: string;
    workingEnvelope: string;
    precision: string;
    weightKg: number;
    leadTimeWeeks: number;
    stockStatus: 'IN_STOCK' | 'LEAD_TIME' | 'DEMO_UNIT';
  };
  cadFiles: {
    name: string;
    format: string;
    sizeMb: number;
  }[];
  priceEstimateUsd: number;
}

export const EQUIPMENT_CATALOG: Equipment[] = [
  {
    id: 'fl-8000',
    name: 'FL-8000 Gantry Fiber Laser',
    ref: 'FL-8000-XXL',
    category: 'laser',
    categoryLabel: 'GIA CÔNG KIM LOẠI TẤM',
    tagline: 'Hệ thống cắt laser công suất cực đại tích hợp bàn nâng hạ thủy lực kép và hệ thống dẫn hướng tuyến tính cấp tôi cao tần.',
    badge: 'FLAGSHIP SERIES',
    description: 'FL-8000 là giải pháp cắt kim loại tấm khổ siêu lớn (đến 6,000 × 2,500 mm) dành cho ngành đóng tàu, kết cấu thép nặng và bồn bể áp lực. Tích hợp nguồn laser sợi quang IPG YLS 20,000W thế hệ mới với đầu cắt thông minh tự động hiệu chỉnh tiêu cự dynamic zoom và kiểm tra xuyên thủng quang học.',
    imageUrl: '/images/fiber-laser.jpg',
    specs: [
      { label: 'CÔNG SUẤT NGUỒN', value: '20kW IPG Photonics', highlight: true },
      { label: 'KHỔ LÀM VIỆC', value: '6,000 × 2,500 mm' },
      { label: 'GIA TỐC TRỤC', value: '2.8G High Acceleration' },
      { label: 'ĐỘ CHÍNH XÁC LẶP LẠI', value: '±0.015 mm' },
      { label: 'TẢI TRỌNG BÀN', value: '8,500 kg Thủy lực kép' },
      { label: 'ĐỘ DÀY CẮT TỐI ĐA', value: 'Thép Carbon 50mm / Inox 40mm' },
    ],
    keyParameters: {
      powerOrPayload: '20kW IPG',
      workingEnvelope: '6,000 × 2,500 mm',
      precision: '±0.015 mm',
      weightKg: 24000,
      leadTimeWeeks: 0, // In stock
      stockStatus: 'IN_STOCK',
    },
    cadFiles: [
      { name: 'VULCAN-FL8000-XXL-ASSEMBLY.step', format: 'STEP 3D', sizeMb: 68.4 },
      { name: 'VULCAN-FL8000-FOUNDATION-PLAN.dwg', format: 'AutoCAD DWG', sizeMb: 14.2 },
      { name: 'VULCAN-FL8000-TECH-MANUAL.pdf', format: 'Datasheet PDF', sizeMb: 5.1 },
    ],
    priceEstimateUsd: 185000,
  },
  {
    id: 'vr-25',
    name: 'V-Robotics 6-Axis Articulated Arm',
    ref: 'VR-25-1850',
    category: 'robotics',
    categoryLabel: 'ROBOT ĐA TRỤC CÔNG NGHIỆP',
    tagline: 'Cánh tay cơ điện tử 6 bậc tự do chuyên dụng cho gắp nhả tốc độ cao, hàn tự động và kiểm tra bề mặt bằng laser quét quang học.',
    badge: 'ROBOTICS AUTOMATION',
    description: 'Thiết kế khớp hợp kim nhôm đúc nguyên khối gia cường carbon. Được tối ưu hóa quán tính giúp đạt chu kỳ gắp 0.45s, tải trọng cổ tay 25kg và bán kính vươn 1,850mm. Đạt chuẩn bảo vệ IP67 chịu phôi dầu và bụi kim loại trong môi trường dập ép nóng.',
    imageUrl: '/images/robotics-arm.jpg',
    specs: [
      { label: 'TẢI TRỌNG NÂNG', value: '25 kg', highlight: true },
      { label: 'BÁN KÍNH THAO TÁC', value: '1,850 mm' },
      { label: 'ĐỘ LẶP LẠI', value: '±0.02 mm' },
      { label: 'SỐ TRỤC CHUYỂN ĐỘNG', value: '6 Trục (Articulated)' },
      { label: 'CẤP BẢO VỆ', value: 'IP67 / Chống tia hàn & phoi' },
      { label: 'BỘ ĐIỀU KHIỂN', value: 'Vulcan NextMotion Dual Core' },
    ],
    keyParameters: {
      powerOrPayload: '25 kg',
      workingEnvelope: 'R = 1,850 mm',
      precision: '±0.02 mm',
      weightKg: 245,
      leadTimeWeeks: 0,
      stockStatus: 'IN_STOCK',
    },
    cadFiles: [
      { name: 'V-ROBOTICS-VR25-KINEMATICS.step', format: 'STEP 3D', sizeMb: 42.1 },
      { name: 'VR25-MOUNTING-INTERFACE.dwg', format: 'AutoCAD DWG', sizeMb: 6.8 },
      { name: 'VR25-ROBOTICS-MANUAL.pdf', format: 'Datasheet PDF', sizeMb: 3.8 },
    ],
    priceEstimateUsd: 42000,
  },
  {
    id: 'cnc-5x-continuous',
    name: 'Continuous 5-Axis Precision Machining Center',
    ref: 'V-CNC-5X-PRO',
    category: 'cnc',
    categoryLabel: 'TRUNG TÂM PHAY 5 TRỤC LIÊN TỤC',
    tagline: 'Gia công chi tiết phức hợp hàng không vũ trụ, turbine và khuôn mẫu chính xác cao với trục chính direct-drive 24,000 RPM.',
    badge: 'SERIES 09 // FLAGSHIP',
    description: 'Thân máy đúc bằng vật liệu khoáng Polymer Concrete triệt tiêu rung động gấp 10 lần so với gang xám. Bàn xoay trục B/C sử dụng động cơ mô-men xoắn tích hợp trực tiếp, hệ thống hồi tiếp quang học Heidenhain độ phân giải nano mét.',
    imageUrl: '/images/cnc-5x.jpg',
    specs: [
      { label: 'TỐC ĐỘ TRỤC CHÍNH', value: '24,000 RPM (Built-in Spindle)', highlight: true },
      { label: 'ĐỘ CHÍNH XÁC ĐỊNH VỊ', value: '±0.0015 mm' },
      { label: 'HÀNH TRÌNH X / Y / Z', value: '1,200 × 900 × 650 mm' },
      { label: 'GÓC NGHIÊNG B / C', value: 'B: ±110° / C: 360° Liên tục' },
      { label: 'ĐÀI DAO TỰ ĐỘNG', value: '60 Vị trí dao (HSK-A63)' },
      { label: 'BÙ NHIỆT THÔNG MINH', value: '16 Cảm biến nhiệt chủ động' },
    ],
    keyParameters: {
      powerOrPayload: '45 kW / 24,000 RPM',
      workingEnvelope: 'Ø 850 mm × 600 mm',
      precision: '±0.0015 mm',
      weightKg: 18500,
      leadTimeWeeks: 4,
      stockStatus: 'DEMO_UNIT',
    },
    cadFiles: [
      { name: 'V-CNC-5X-FULL-ENCLOSURE.step', format: 'STEP 3D', sizeMb: 92.5 },
      { name: 'CNC-5X-INTERFERENCE-MAP.dwg', format: 'AutoCAD DWG', sizeMb: 18.0 },
      { name: 'CNC-5X-ACCURACY-REPORT.pdf', format: 'Datasheet PDF', sizeMb: 6.2 },
    ],
    priceEstimateUsd: 260000,
  },
  {
    id: 'motion-pg220',
    name: 'Precision Planetary Gearbox & Servo Assembly',
    ref: 'PG-220-HT-SERVO',
    category: 'motion',
    categoryLabel: 'TRUYỀN ĐỘNG CHÍNH XÁC & HỘP SỐ HÀNH TINH',
    tagline: 'Cụm truyền động đồng bộ servo mô-men xoắn cao với khe hở góc truyền động siêu thấp phục vụ các trục quay phay và cánh tay robot.',
    badge: 'HIGH-TORQUE ALLIANCE',
    description: 'Hệ thống bánh răng nghiêng xoắn chế tạo từ thép hợp kim crom-molypden được mài bóng chuẩn DIN 4. Tích hợp động cơ servo đồng bộ nam châm vĩnh cửu và phanh hãm an toàn điện từ cho phản ứng gia tốc tức thời.',
    imageUrl: '/images/planetary-servo.jpg',
    specs: [
      { label: 'MÔ-MEN XOẮN ĐỊNH MỨC', value: '1,850 Nm', highlight: true },
      { label: 'ĐỘ RƠ GÓC (BACKLASH)', value: '≤ 1 arcmin' },
      { label: 'TỈ SỐ TRUYỀN', value: 'i = 10, 25, 50, 100' },
      { label: 'HIỆU SUẤT TRUYỀN ĐỘNG', value: '≥ 97%' },
      { label: 'BẢO DƯỠNG', value: 'Bôi trơn trọn đời (Synthetic)' },
    ],
    keyParameters: {
      powerOrPayload: '1,850 Nm / 15kW',
      workingEnvelope: 'Shaft Ø 55 mm',
      precision: '≤ 1 arcmin',
      weightKg: 68,
      leadTimeWeeks: 0,
      stockStatus: 'IN_STOCK',
    },
    cadFiles: [
      { name: 'PG-220-3D-CAD-MODEL.step', format: 'STEP 3D', sizeMb: 24.3 },
      { name: 'PG-220-FLANGE-DIMENSIONS.dwg', format: 'AutoCAD DWG', sizeMb: 3.4 },
    ],
    priceEstimateUsd: 7800,
  },
  {
    id: 'fl-3015-compact',
    name: 'FL-3015 High-Speed Fiber Laser Cell',
    ref: 'FL-3015-SPEED',
    category: 'laser',
    categoryLabel: 'GIA CÔNG KIM LOẠI TẤM TIÊU CHUẨN',
    tagline: 'Máy cắt laser sợi quang nhỏ gọn gia tốc 3.0G cho xưởng gia công tấm mỏng và linh kiện cơ khí chính xác.',
    badge: 'POPULAR CHOICE',
    description: 'Tối ưu cho cắt nhanh inox, tole mạ kẽm và nhôm độ dày dưới 16mm. Bàn trao đổi tự động chỉ mất 9 giây, tiết kiệm 70% thời gian chết so với máy đơn bàn truyền thống.',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1U0hoHUpXpDcIQr2GHpnRiKE2exrE0PSiUryWPw1xjSKL8KnWIVxPCywahuNJlf3TYLfQvtE0VOSGOMhJ8N7vyg5bFdpNy9CzngImq-ttTvtONDkr-dK6R81eXCGYRoZz_10_ek8iEZg9XPFAv-7WxAwf3SVCxpNrXWw6Y2VnfoTv1niLfArZi9NQdfP9HtNwebkS9EnXuPy_t9H6ak-CURggs8ZhNa8qjCU0Fn1Yz54pLgUxelj_xWgEU',
    specs: [
      { label: 'CÔNG SUẤT NGUỒN', value: '6kW Fiber IPG/Raycus', highlight: true },
      { label: 'KHỔ BÀN CẮT', value: '3,000 × 1,500 mm' },
      { label: 'GIA TỐC TỐI ĐA', value: '3.0G' },
      { label: 'TỐC ĐỘ DI CHUYỂN', value: '140 m/min' },
      { label: 'ĐỘ LẶP LẠI', value: '±0.02 mm' },
    ],
    keyParameters: {
      powerOrPayload: '6kW Fiber',
      workingEnvelope: '3,000 × 1,500 mm',
      precision: '±0.02 mm',
      weightKg: 11500,
      leadTimeWeeks: 2,
      stockStatus: 'IN_STOCK',
    },
    cadFiles: [
      { name: 'FL3015-COMPACT-MODEL.step', format: 'STEP 3D', sizeMb: 52.8 },
      { name: 'FL3015-SPEC-SHEET.pdf', format: 'Datasheet PDF', sizeMb: 3.1 },
    ],
    priceEstimateUsd: 79000,
  },
  {
    id: 'vr-10-welding',
    name: 'V-Robotics Precise Laser Welding Cell',
    ref: 'VR-10-WELD',
    category: 'robotics',
    categoryLabel: 'ROBOT HÀN TỰ ĐỘNG CÔNG NGHỆ CAO',
    tagline: 'Cụm robot 6 trục tích hợp đầu hàn laser quét dao động wobble và camera bám đường hàn quang học real-time.',
    badge: 'WELDING AUTOMATION',
    description: 'Chuyên dụng cho hàn ống thép không gỉ, khung pin xe điện và linh kiện ô tô với mối hàn mịn, không biến dạng nhiệt và không cần mài lại sau khi hàn.',
    imageUrl: '/images/robotics-arm.jpg',
    specs: [
      { label: 'TẢI TRỌNG CỔ TAY', value: '10 kg' },
      { label: 'BÁN KÍNH VƯƠN', value: '1,420 mm' },
      { label: 'CÔNG SUẤT HÀN', value: '3kW Laser Hand/Arm' },
      { label: 'ĐỘ LẶP ĐƯỜNG HÀN', value: '±0.018 mm' },
    ],
    keyParameters: {
      powerOrPayload: '10 kg / 3kW Weld',
      workingEnvelope: 'R = 1,420 mm',
      precision: '±0.018 mm',
      weightKg: 190,
      leadTimeWeeks: 0,
      stockStatus: 'IN_STOCK',
    },
    cadFiles: [
      { name: 'VR10-WELD-CELL.step', format: 'STEP 3D', sizeMb: 39.4 },
    ],
    priceEstimateUsd: 38500,
  },
];

export const CATEGORIES_INFO = [
  {
    id: 'robotics',
    index: '01',
    title: 'Tự Động Hóa & Robotics',
    subtitle: '18 CẤU HÌNH',
    name: 'Cánh tay robot & Cụm gắp tự động',
    imageUrl: '/images/robotics-arm.jpg',
    description: 'Cánh tay robot 6 trục, gắp phôi CNC tự động, robot hàn laser sợi quang và giải pháp bốc dỡ phôi tự động hoá dây chuyền.',
  },
  {
    id: 'motion',
    index: '02',
    title: 'Truyền Động & Động Cơ Servo',
    subtitle: '24 HỆ THỐNG',
    name: 'Truyền động chính xác & Hộp số hành tinh',
    imageUrl: '/images/planetary-servo.jpg',
    description: 'Hộp số hành tinh độ rơ dưới 1 arcmin, động cơ servo không chổi than công suất cao, thanh trượt dẫn hướng bi tuyến tính và vít me bi mài cấp C3.',
  },
  {
    id: 'laser',
    index: '03',
    title: 'Hệ Thống Gia Công Tấm & Laser',
    subtitle: '12 MODEL',
    name: 'Máy cắt laser sợi quang khổ lớn',
    imageUrl: '/images/fiber-laser.jpg',
    description: 'Máy cắt laser sợi quang công suất 3kW đến 40kW, bàn đôi trao đổi tốc độ cao, máy vát mép ống laser đa năng và hệ thống lọc bụi chống cháy nổ.',
  },
];
