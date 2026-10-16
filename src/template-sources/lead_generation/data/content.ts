export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tagColor?: string;
  details: {
    duration: string;
    scope: string[];
    deliverables: string[];
    idealFor: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  typology: 'office' | 'showroom' | 'residence';
  location: string;
  coordinates: string;
  area: string;
  year: string;
  image: string;
  description: string;
  client: string;
  materials: string[];
}

export const IMAGES = {
  logo: '/images/logo.png',
  heroStrategist: '/images/hero.jpg',
  atelierRoom: '/images/atelier.jpg',
  service01: '/images/service01.jpg',
  service02: '/images/service02.jpg',
  service03: '/images/service03.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'strategic-consultation',
    number: '01',
    title: 'Tư Vấn & Hoạch Định Chiến Lược Không Gian',
    description: 'Khảo sát hiện trạng, tư vấn giải pháp vật liệu & dự toán ngân sách minh bạch từng hạng mục.',
    image: IMAGES.service01,
    alt: 'Tư Vấn & Hoạch Định Chiến Lược Không Gian',
    details: {
      duration: '7 — 14 ngày làm việc',
      scope: [
        'Khảo sát hiện trạng mặt bằng thực địa và đo đạc laser 3D chi tiết',
        'Phân tích định vị văn hoá thương hiệu doanh nghiệp vào kiến trúc',
        'Bóc tách ngân sách đầu tư sơ bộ và dự báo dòng tiền theo tiến độ',
        'Tư vấn định hướng vật liệu cao cấp, sinh thái và chứng chỉ bền vững',
      ],
      deliverables: [
        'Tài liệu báo cáo phân tích mặt bằng và lưu lượng người dùng',
        'Moodboard định hướng phong cách và mẫu thực tế vật liệu (Material Board)',
        'Bảng dự toán sơ bộ minh bạch không phát sinh',
      ],
      idealFor: 'Các doanh nghiệp chuẩn bị thuê mặt bằng, mở rộng văn phòng đại bản doanh hoặc tái định vị.',
    },
  },
  {
    id: 'brand-spatial-design',
    number: '02',
    title: 'Thiết Kế Trải Nghiệm Thương Hiệu & Không Gian',
    description: 'Phát triển bản vẽ 3D chi tiết, kiến trúc công năng & thẩm mỹ bản sắc độc bản cho doanh nghiệp.',
    image: IMAGES.service02,
    alt: 'Thiết Kế Trải Nghiệm Thương Hiệu & Không Gian',
    tagColor: 'bg-primary-container',
    details: {
      duration: '15 — 25 ngày làm việc',
      scope: [
        'Mặt bằng bố trí công năng tổng thể (Master Space Planning) tối ưu năng suất',
        'Phối cảnh không gian 3D Photorealistic sắc nét từ nhiều góc độ',
        'Hệ thống chiếu sáng kiến trúc nghệ thuật (Architectural Lighting Concept)',
        'Hồ sơ bản vẽ kỹ thuật thi công MEP, nội thất và cấu kiện độc bản',
      ],
      deliverables: [
        'Bộ hồ sơ thiết kế kỹ thuật thi công đầy đủ (Construction Documents)',
        'Album ảnh render 3D chuẩn 4K và video 360 virtual tour',
        'Quy chuẩn chi tiết từng vật liệu, thiết bị điện nước và gia công bespoke',
      ],
      idealFor: 'Thương hiệu muốn khẳng định vị thế dẫn đầu qua không gian trải nghiệm đẳng cấp quốc tế.',
    },
  },
  {
    id: 'turnkey-construction',
    number: '03',
    title: 'Thi Công Trọn Gói & Giám Sát Vận Hành',
    description: 'Cam kết đúng tiến độ hoàn thiện, quy trình nghiệm thu tiêu chuẩn cao và bàn giao chìa khoá trao tay.',
    image: IMAGES.service03,
    alt: 'Thi Công Trọn Gói & Giám Sát Vận Hành',
    details: {
      duration: '30 — 60 ngày hoàn thiện bàn giao',
      scope: [
        'Tổng thầu thi công xây dựng và hoàn thiện nội thất trọn gói',
        'Giám sát tác giả và kiểm soát chất lượng 24/7 với camera trực tuyến',
        'Gia công sản xuất nội thất thủ công tại xưởng chuyên biệt của Origin',
        'Thử nghiệm vận hành toàn bộ hệ thống cơ điện (MEP) và chiếu sáng trước bàn giao',
      ],
      deliverables: [
        'Công trình hoàn thiện 100% chuẩn từng milimet so với bản vẽ 3D',
        'Bộ hồ sơ hoàn công và chứng nhận chất lượng vật tư nguồn gốc',
        'Chính sách bảo hành 3 năm và bảo trì định kỳ trọn vòng đời',
      ],
      idealFor: 'Chủ doanh nghiệp cần tiến độ chuẩn xác, bàn giao chìa khoá trao tay không lo phát sinh.',
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tiếp Nhận & Khảo Sát Hiện Trạng',
    duration: 'Ngày 1 - 3',
    description: 'Đội ngũ chuyên gia kiến trúc khảo sát thực địa, lắng nghe tầm nhìn và định vị của doanh nghiệp.',
  },
  {
    step: '02',
    title: 'Quy Hoạch Công Năng & Ý Tưởng 3D',
    duration: 'Ngày 4 - 12',
    description: 'Phát triển Layout mặt bằng tối ưu luồng di chuyển và phối cảnh 3D trực quan sống động.',
  },
  {
    step: '03',
    title: 'Dự Toán Minh Bạch & Trình Duyệt Vật Liệu',
    duration: 'Ngày 13 - 17',
    description: 'Bóc tách 100% khối lượng, trải nghiệm mẫu vật liệu thực tế tại Gallery và chốt ngân sách cam kết.',
  },
  {
    step: '04',
    title: 'Triển Khai Thi Công & Giám Sát Chuẩn Mực',
    duration: 'Ngày 18 - 28',
    description: 'Đội ngũ nghệ nhân lành nghề hiện thực hoá công trình với nhật ký giám sát cập nhật theo ngày.',
  },
  {
    step: '05',
    title: 'Nghiệm Thu Khắt Khe & Bàn Giao Vận Hành',
    duration: 'Ngày 29 - 30',
    description: 'Vệ sinh công nghiệp cao cấp, kiểm tra vi khí hậu, bàn giao chìa khoá và kích hoạt bảo hành trọn đời.',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'finovate-hq',
    title: 'Trụ Sở Finovate Capital Headquarters',
    typology: 'office',
    location: 'Quận 1, TP. Hồ Chí Minh',
    coordinates: "10°46'37.2\"N 106°42'09.4\"E",
    area: '850 m²',
    year: '2025',
    image: IMAGES.atelierRoom,
    description: 'Không gian làm việc mở phong cách Brutalist tinh tế với đá Travertine Ý và gỗ sồi tự nhiên.',
    client: 'Finovate Holdings Asia',
    materials: ['Đá Travertine Navona', 'Gỗ sồi Bắc Mỹ', 'Thép sơn tĩnh điện đen', 'Kính hộp cách âm Low-E'],
  },
  {
    id: 'origin-flagship',
    title: 'Atelier ORIGIN Gallery & Studio',
    typology: 'showroom',
    location: 'Hoàn Kiếm, Hà Nội',
    coordinates: "21°01'49.3\"N 105°51'08.2\"E",
    area: '420 m²',
    year: '2024',
    image: IMAGES.service02,
    description: 'Khối kiến trúc sắp đặt với ánh sáng xanh Cobalt và cột bê tông thô tôn vinh chiều sâu không gian.',
    client: 'Origin Studio Collective',
    materials: ['Bê tông trần Microcement', 'Khối thép uốn Cobalt Blue', 'Hệ thống đèn Erco', 'Vải linen mộc'],
  },
  {
    id: 'travertine-villa',
    title: 'Sanctuary Villa Thảo Điền',
    typology: 'residence',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    coordinates: "10°48'14.6\"N 106°43'55.1\"E",
    area: '620 m²',
    year: '2024',
    image: IMAGES.service03,
    description: 'Biệt thự sân vườn biệt lập tôn vinh sự thư thái qua các đường nét hình học tối giản và vật liệu mộc.',
    client: 'Gia đình Giám đốc Sáng tạo tư nhân',
    materials: ['Đá mài Terrazzo nguyên khối', 'Gỗ Teak chống ẩm', 'Kính trượt lùa Panorama', 'Vữa thạch cao hữu cơ'],
  },
  {
    id: 'consultation-workshop',
    title: 'Executive Workshop & Strategy Suite',
    typology: 'office',
    location: 'Ba Đình, Hà Nội',
    coordinates: "21°02'05.1\"N 105°49'44.8\"E",
    area: '340 m²',
    year: '2025',
    image: IMAGES.heroStrategist,
    description: 'Phòng cố vấn chiến lược cấp cao với bàn gỗ nguyên tấm 6m và rèm linen đón ánh sáng tự nhiên.',
    client: 'Nexus Global Advisory',
    materials: ['Gỗ tần bì nguyên khối', 'Vải linen dệt thô', 'Bản lề giấu Blum', 'Đèn rọi điểm Flos'],
  },
];
