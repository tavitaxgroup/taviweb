import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VcnLightingScene {
  id: string;
  name: string;
  kelvin: string;
  luxReading: string;
  criIndex: string;
  ugrRating: string;
  controlProtocol: string;
  applicationArea: string;
  description: string;
  image: string;
  warmOverlayClass: string;
}

export interface VcnLightingSolution {
  id: string;
  code: string;
  title: string;
  targetSector: string;
  luxStandard: string;
  summary: string;
  technicalPoints: string[];
  image: string;
}

export interface VcnLuminaireProduct {
  id: string;
  modelCode: string;
  name: string;
  category: "DOWNLIGHT CHỐNG CHÓI" | "RAY NAM CHÂM 48V" | "ĐÈN MẶT DỰNG IP67" | "ĐÈN THẢ KIẾN TRÚC";
  power: string;
  beamAngles: string;
  cri: string;
  ugr: string;
  chipLed: string;
  priceEstimate: string;
  image: string;
  specs: string[];
}

export interface VcnProjectCase {
  id: string;
  title: string;
  category: string;
  location: string;
  fixtureCount: string;
  controlSystem: string;
  summary: string;
  image: string;
}

export interface XayDung34Data extends ClonedTemplateBaseData {
  header: {
    brandMain: string;
    brandSub: string;
    slogan: string;
    navItems: { label: string; href: string }[];
    ctaLabel: string;
  };
  luxSimulator: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    scenes: VcnLightingScene[];
  };
  solutionsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: VcnLightingSolution[];
  };
  luminairesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    products: VcnLuminaireProduct[];
  };
  projectsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    projects: VcnProjectCase[];
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const defaultData: XayDung34Data = {
  business: {
    name: "VCN LIGHT",
    tagline: "LIGHT DEFINES LUXURY — Giải Pháp Chiếu Sáng Kiến Trúc Cao Cấp",
    phone: ["0909 452 888", "028 3899 7788"],
    email: ["projects@vcnlight.vn", "dialux@vcnlight.vn"],
    address: "Tòa nhà VCN Lighting Center, Khu Đô Thị Sala, TP. Thủ Đức, TP.HCM",
    workingHours: "08:00 – 18:30 (Thứ 2 – Thứ 7) • Phòng Lab Thử Sáng Thực Tế",
    rating: 5.0,
    reviewCount: 245,
    aboutTitle: "LIGHT DEFINES LUXURY — ĐỊNH HÌNH ĐẲNG CẤP KIẾN TRÚC BẰNG ÁNH SÁNG",
    aboutText: [
      "VCN Light là đơn vị chuyên sâu trong tư vấn thiết kế kịch bản ánh sáng (Lighting Design), mô phỏng thông số kỹ thuật DIALux Evo và cung ứng trọn gói thiết bị chiếu sáng kiến trúc chuẩn Châu Âu cho chuỗi khách sạn 5 sao, cao ốc văn phòng hạng A và công trình biểu tượng công cộng.",
    ],
  },
  header: {
    brandMain: "VCN",
    brandSub: "L I G H T",
    slogan: "LIGHT DEFINES LUXURY",
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "MÔ PHỎNG LUX / KELVIN", href: "#mo-phong-lux" },
      { label: "GIẢI PHÁP CHIẾU SÁNG", href: "#giai-phap" },
      { label: "HỆ ĐÈN KỸ THUẬT", href: "#he-den" },
      { label: "CÔNG TRÌNH TIÊU BIỂU", href: "#cong-trinh" },
      { label: "LIÊN HỆ DIALUX", href: "#lien-he" },
    ],
    ctaLabel: "NHẬN FILE IES & BÁO GIÁ",
  },
  hero: {
    eyebrow: "VCN LIGHT • LIGHT DEFINES LUXURY",
    title: "GIẢI PHÁP CHIẾU SÁNG KIẾN TRÚC CAO CẤP",
    subtitle:
      "Tư vấn, thiết kế và cung ứng hệ chiếu sáng cho khách sạn, văn phòng và công trình công cộng",
    ctaText: "KHÁM PHÁ HỆ CHIẾU SÁNG",
    ctaLink: "#giai-phap",
    secondaryCtaText: "Thử Máy Đo Độ Rọi 452 LUX",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
  },
  stats: [
    { id: "st-1", value: "CRI 97+", label: "Chỉ số hoàn màu trung thực" },
    { id: "st-2", value: "UGR < 12", label: "Chuẩn chống chói mắt tối đa" },
    { id: "st-3", value: "452 LUX", label: "Chuẩn độ rọi Fine Dining 5*" },
    { id: "st-4", value: "50.000h", label: "Tuổi thọ Chip LED Bridgelux/Cree" },
  ],
  luxSimulator: {
    eyebrow: "PHÒNG LAB MÔ PHỎNG QUANG HỌC TRỰC TUYẾN",
    heading: "Trải Nghiệm Kịch Bản Nhiệt Độ Màu (Kelvin) & Độ Rọi (LUX)",
    subtitle:
      "Chuyển đổi giữa các kịch bản chiếu sáng tiêu chuẩn của VCN Light để quan sát sự thay đổi của bầu không khí kiến trúc và thông số đo quang học thực tế.",
    scenes: [
      {
        id: "scene-hotel-452",
        name: "Nhà Hàng & Sảnh Khách Sạn 5 Sao",
        kelvin: "2700K – 3000K (Warm Amber Gold)",
        luxReading: "452 LUX",
        criIndex: "Ra 98 / R9 > 95",
        ugrRating: "UGR < 10 (Deep Baffle)",
        controlProtocol: "DALI-2 Dimming (1% – 100%)",
        applicationArea: "Fine Dining, Sảnh đón tiếp VIP, Executive Lounge",
        description:
          "Kịch bản ánh sáng điểm (Accent Lighting) kết hợp đèn thả trang trí kim loại cắt CNC tạo độ tương phản chiều sâu 5:1, tôn vinh vân đá cẩm thạch, gỗ óc chó và màu sắc ẩm thực thượng hạng.",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        warmOverlayClass: "bg-amber-500/15",
      },
      {
        id: "scene-office-520",
        name: "Tòa Nhà Văn Phòng Hạng A (Human-Centric)",
        kelvin: "4000K (Neutral Daylight Tunable)",
        luxReading: "520 LUX",
        criIndex: "Ra 95",
        ugrRating: "UGR < 16 (Louver Optics)",
        controlProtocol: "KNX / Cảm biến ánh sáng tự nhiên",
        applicationArea: "Không gian làm việc mở, Phòng họp Hội đồng quản trị",
        description:
          "Hệ đèn Linear chống chói mắt kết hợp công nghệ chiếu sáng nhịp sinh học (Human-Centric Lighting) tự động điều chỉnh cường độ và nhiệt độ màu theo giờ trong ngày, giúp tăng 28% sự tập trung.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
        warmOverlayClass: "bg-sky-400/10",
      },
      {
        id: "scene-facade-180",
        name: "Mặt Dựng Tòa Tháp & Công Trình Công Cộng",
        kelvin: "3000K / RGBW DMX512",
        luxReading: "180 LUX",
        criIndex: "Ra 90+ (IP67 Outdoor)",
        ugrRating: "Asymmetric Optic Lens",
        controlProtocol: "DMX512 / RDM Central Matrix",
        applicationArea: "Mặt dựng cao ốc, Bảo tàng, Cầu biểu tượng đô thị",
        description:
          "Sử dụng thấu kính bất đối xứng quét sáng dọc theo các cột kiến trúc (Wall Grazing) mà không gây ô nhiễm ánh sáng vào bên trong cửa sổ phòng ngủ khách sạn.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
        warmOverlayClass: "bg-orange-500/15",
      },
    ],
  },
  solutionsSection: {
    eyebrow: "LĨNH VỰC TƯ VẤN & CUNG ỨNG TRỌN GÓI",
    heading: "4 Giải Pháp Chiếu Sáng Kiến Trúc Mũi Nhọn",
    subtitle:
      "Đồng hành cùng Chủ đầu tư, Kiến trúc sư và Tổng thầu Cơ điện (MEP) từ giai đoạn Concept, chạy mô phỏng DIALux Evo đến bàn giao nghiệm thu độ rọi thực tế.",
    items: [
      {
        id: "sol-hospitality",
        code: "SOL-01",
        title: "Chiếu Sáng Khách Sạn & Resort 5 Sao",
        targetSector: "Hospitality & Luxury Resort",
        luxStandard: "150 – 452 LUX (Đa kịch bản Ngày / Đêm)",
        summary:
          "Thiết kế chiếu sáng phân lớp (Ambient, Task, Accent) với chóa đèn âm trần sâu chống chói tuyệt đối, mang lại cảm giác thư thái xa hoa.",
        technicalPoints: [
          "Đèn Downlight âm trần sâu UGR < 12 không lộ nguồn sáng",
          "Tích hợp kịch bản Welcome Scene khi khách mở cửa phòng bằng thẻ từ",
          "Đèn ngoại thất sân vườn kháng muối biển tiêu chuẩn IP67 / IK08",
        ],
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "sol-office",
        code: "SOL-02",
        title: "Chiếu Sáng Cao Ốc Văn Phòng & Hội Nghị",
        targetSector: "Commercial Tower & Convention Center",
        luxStandard: "500 – 750 LUX (Chuẩn TCVN & EN 12464-1)",
        summary:
          "Giải pháp chiếu sáng tiết kiệm năng lượng đạt chứng chỉ công trình xanh LEED / LOTUS với hiệu suất quang thông lên tới 135 lm/W.",
        technicalPoints: [
          "Tự động giảm sáng (Daylight Harvesting) ở khu vực gần vách kính",
          "Hệ số nhấp nháy Flicker-Free < 1% bảo vệ thị lực nhân sự",
          "Điều khiển tập trung qua giao thức DALI-2 và BMS tòa nhà",
        ],
        image:
          "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "sol-public",
        code: "SOL-03",
        title: "Chiếu Sáng Công Trình Công Cộng & Bảo Tàng",
        targetSector: "Public Landmark, Museum & Gallery",
        luxStandard: "200 – 400 LUX (Không tia UV/IR hại hiện vật)",
        summary:
          "Tôn vinh giá trị nghệ thuật và hình khối kiến trúc công cộng bằng hệ đèn rọi Zoom tiêu cự linh hoạt từ 10° đến 55°.",
        technicalPoints: [
          "Chỉ số hoàn màu siêu thực CRI 98 giúp tái tạo chuẩn xác màu tranh & cổ vật",
          "Chống bụi, chống nước IP66/IP68 cho đài phun nước và quảng trường",
          "Tuổi thọ vận hành bền bỉ trên 50.000 giờ, bảo hành 5 năm 1 đổi 1",
        ],
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  luminairesSection: {
    eyebrow: "DANH MỤC THIẾT BỊ CHIẾU SÁNG CHUYÊN DỤNG",
    heading: "Hệ Đèn Kiến Trúc VCN Light Chuẩn Châu Âu",
    subtitle:
      "Mỗi cụm đèn được đúc từ hợp kim nhôm tản nhiệt nguyên khối, sử dụng Chip LED Cree / Bridgelux (Mỹ) và bộ nguồn Osram / Philips Flicker-Free.",
    products: [
      {
        id: "prd-downlight",
        modelCode: "VCN-DL90-PRO",
        name: "Đèn Âm Trần Chống Chói Sâu VCN Deep-Trim COB",
        category: "DOWNLIGHT CHỐNG CHÓI",
        power: "12W / 18W / 24W",
        beamAngles: "15° / 24° / 36°",
        cri: "CRI > 97 (R9 > 92)",
        ugr: "UGR < 12",
        chipLed: "Bridgelux Vesta Series (USA)",
        priceEstimate: "980.000 ₫ – 1.450.000 ₫",
        image:
          "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
        specs: [
          "Thiết kế chóa lùi sâu 42mm triệt tiêu hoàn toàn hiện tượng chói lóa góc nhìn ngang",
          "Thân nhôm đúc nguyên khối CNC tản nhiệt đa cánh, sơn tĩnh điện AkzoNobel",
          "Hỗ trợ Dimming Triac / 0-10V / DALI-2 mượt mà từ 1% đến 100%",
        ],
      },
      {
        id: "prd-magtrack",
        modelCode: "VCN-MAG48-SLIM",
        name: "Hệ Đèn Ray Nam Châm Âm Trần Siêu Mỏng 48V",
        category: "RAY NAM CHÂM 48V",
        power: "6W – 30W (Đa module)",
        beamAngles: "24° / 36° / Tán quang 120°",
        cri: "CRI > 95",
        ugr: "UGR < 14",
        chipLed: "Osram Oslon Square (Germany)",
        priceEstimate: "1.250.000 ₫ / Module",
        image:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
        specs: [
          "Điện áp thấp một chiều 48V DC an toàn tuyệt đối khi tháo lắp trên ray",
          "Khóa ngàm cơ học kép kết hợp từ tính Neodymium siêu cường",
          "Tích hợp điều khiển thông minh Zigbee 3.0 / Bluetooth Mesh / DALI",
        ],
      },
      {
        id: "prd-facade",
        modelCode: "VCN-WW100-IP67",
        name: "Đèn Thanh Hắt Mặt Dựng Tòa Nhà VCN Linear Grazing",
        category: "ĐÈN MẶT DỰNG IP67",
        power: "36W / 48W / 72W (1000mm)",
        beamAngles: "10°x45° / 15°x60° Asymmetric",
        cri: "CRI > 90 / RGBW",
        ugr: "Louver Visor Anti-Glare",
        chipLed: "Cree XP-G3 High Power",
        priceEstimate: "2.850.000 ₫ / Mét dài",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        specs: [
          "Đạt chuẩn kháng nước và bụi bẩn IP67, mặt kính cường lực dày 8mm chịu va đập IK09",
          "Van cân bằng áp suất chống đọng sương bên trong thấu kính",
          "Khoảng cách đẩy sáng vươn cao từ 8m đến 25m dọc mặt đứng công trình",
        ],
      },
      {
        id: "prd-pendant",
        modelCode: "VCN-ARTIS-GOLD",
        name: "Đèn Thả Lưới Đồng Kiến Trúc VCN Geometric Mesh",
        category: "ĐÈN THẢ KIẾN TRÚC",
        power: "35W Dual-Source (Up & Down)",
        beamAngles: "360° Ambient + 24° Table Spot",
        cri: "CRI > 97 (2700K)",
        ugr: "UGR < 11",
        chipLed: "Citizen COB CLU038 (Japan)",
        priceEstimate: "6.400.000 ₫ / Bộ",
        image:
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
        specs: [
          "Lồng kim loại mạ PVD màu Vàng Đồng (Brushed Champagne Gold) tạo hiệu ứng tán xạ lấp lánh",
          "Tích hợp 1 mắt COB chiếu thẳng xuống bàn ăn (452 LUX) không làm chói mắt người ngồi đối diện",
          "Nhận gia công kích thước Bespoke theo bản vẽ nội thất của khách sạn",
        ],
      },
    ],
  },
  projectsSection: {
    eyebrow: "HỒ SƠ DỰ ÁN ĐÃ NGHIỆM THU",
    heading: "Các Công Trình Chiếu Sáng Tiêu Biểu Của VCN Light",
    subtitle:
      "Hơn 180 dự án khách sạn 5 sao, trụ sở tập đoàn và công trình công cộng trên toàn quốc đã được VCN Light thiết kế và cung ứng thiết bị chiếu sáng.",
    projects: [
      {
        id: "prj-vcn-1",
        title: "Tổ Hợp Khách Sạn & Nhà Hàng 5 Sao Grand Aurelia",
        category: "Khách sạn & Fine Dining",
        location: "Quận 1, TP. Hồ Chí Minh",
        fixtureCount: "4.200+ Bộ đèn Downlight & Đèn thả Bespoke",
        controlSystem: "DALI-2 Lutron HomeWorks",
        summary:
          "Thiết kế và cung ứng toàn bộ hệ đèn âm trần chống chói UGR<10 và hệ đèn thả lồng đồng đạt chuẩn độ rọi 452 LUX tại khu vực nhà hàng chính.",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-vcn-2",
        title: "Trụ Sở Tập Đoàn Tài Chính & Văn Phòng Hạng A Nexus Tower",
        category: "Văn phòng Hạng A",
        location: "Khu Đô Thị Thủ Thiêm, TP.HCM",
        fixtureCount: "8.500+ Đèn Linear & Panel Chống Chói",
        controlSystem: "KNX Smart Building Automation",
        summary:
          "Giải pháp chiếu sáng Human-Centric 4000K-5000K giúp tòa nhà đạt chứng chỉ LEED Gold với mức tiết kiệm 42% điện năng chiếu sáng.",
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-vcn-3",
        title: "Chiếu Sáng Mặt Dựng & Quảng Trường Trung Tâm Hội Nghị Quốc Tế",
        category: "Công trình Công cộng",
        location: "TP. Đà Nẵng",
        fixtureCount: "1.600+ Thanh đèn Facade IP67 DMX512",
        controlSystem: "Pharos DMX Architectural Controller",
        summary:
          "Hệ thống chiếu sáng mặt dựng lập trình đổi màu theo các sự kiện ngoại giao quốc gia, chịu được môi trường gió biển khắc nghiệt.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  footer: {
    tagline:
      "VCN LIGHT — LIGHT DEFINES LUXURY. Đối tác chiến lược của các Kiến trúc sư, Chủ đầu tư và Nhà thầu Cơ điện hàng đầu Việt Nam.",
    copyright:
      "© Bản quyền thuộc về VCN Light Architectural Lighting. Thiết kế giao diện Chiếu Sáng Kiến Trúc XD034.",
  },
};
