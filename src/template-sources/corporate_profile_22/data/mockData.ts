import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VietkingHeroPillarItem {
  id: string;
  title: string;
  subtitle: string;
  pixelRange: string;
  brightness: string;
  application: string;
  image: string;
  badgeText: string;
}

export interface VietkingLedProductItem {
  id: string;
  name: string;
  category: string;
  pixelPitch: string;
  brightness: string;
  refreshRate: string;
  ipRating: string;
  cabinetSize: string;
  priceEstimate: string;
  image: string;
  highlights: string[];
}

export interface VietkingProjectShowcase {
  id: string;
  title: string;
  client: string;
  location: string;
  ledType: string;
  areaSize: string;
  year: string;
  image: string;
}

export interface CorporateProfile22Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  navLinks: { label: string; href: string }[];
  heroPillars: VietkingHeroPillarItem[];
  ledCategories: string[];
  ledProducts: VietkingLedProductItem[];
  completedProjects: VietkingProjectShowcase[];
  technologyPartners: {
    id: string;
    name: string;
    role: string;
  }[];
  installationSteps: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const corporateProfile22MockData: CorporateProfile22Data = {
  templateKey: "corporate_profile_22",
  business: {
    name: "VIETKING® — Công Nghệ Hiển Thị Màn Hình LED",
    tagline:
      "Doanh Nghiệp Hơn 10 Năm Kinh Nghiệm Cung Cấp Giải Pháp Màn Hình LED — Lựa Chọn Số 1 Trong Ngành Công Nghệ Hiển Thị",
    description:
      "Tập đoàn chuyên tư vấn, thiết kế, nhập khẩu và thi công trọn gói hệ thống Màn hình LED Trong nhà, Màn hình LED Ngoài trời, Màn hình LED 3D Sáng tạo và Màn hình ghép Videowall đạt chuẩn ISO 9001:2015.",
    phone: ["0909 422 558", "1900 636 648"],
    email: ["info@vietkingled.vn", "duan@vietkingled.vn"],
    address: "Tòa nhà VIETKING LED Center, 319 Lý Thường Kiệt, Quận 11, TP. Hồ Chí Minh",
    website: "https://vietking.monamedia.net",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00 (Hỗ trợ kỹ thuật sự kiện 24/7)",
    taxCode: "0312458963",
  },
  navLinks: [
    { label: "VỀ VIETKING", href: "#ve-vietking" },
    { label: "MÀN HÌNH LED NGOÀI TRỜI", href: "#danh-muc-led" },
    { label: "MÀN HÌNH LED TRONG NHÀ", href: "#danh-muc-led" },
    { label: "MÀN HÌNH LED SÁNG TẠO", href: "#danh-muc-led" },
    { label: "DỰ TOÁN KÍCH THƯỚC", href: "#du-toan-led" },
    { label: "CÔNG TRÌNH TIÊU BIỂU", href: "#cong-trinh-led" },
    { label: "LIÊN HỆ", href: "#lien-he-vietking" },
  ],
  hero: {
    badge: "VIETKING® LED DISPLAY SCREEN",
    title: "CUNG CẤP CÁC GIẢI PHÁP HIỂN THỊ CHUYÊN NGHIỆP VỀ MÀN HÌNH LED",
    subtitle:
      "Doanh nghiệp hơn 10 năm kinh nghiệm cung cấp giải pháp màn hình LED hội trường, quảng trường, mặt dựng tòa nhà và LED 3D sáng tạo số 1 Việt Nam.",
    primaryCta: "NHẬN BÁO GIÁ DỰ ÁN",
    secondaryCta: "HỒ SƠ NĂNG LỰC (PDF)",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=85",
  },
  heroPillars: [
    {
      id: "pillar-outdoor",
      title: "MÀN HÌNH LED NGOÀI TRỜI",
      subtitle: "Outdoor Billboard & Mặt Dựng Tòa Nhà",
      pixelRange: "P3 / P4 / P5 / P8 / P10 Outdoor",
      brightness: "≥ 6.500 - 10.000 cd/m²",
      application:
        "Chống nước chuẩn IP65/IP68, hiển thị siêu sắc nét dưới ánh nắng trực tiếp tại quảng trường, cao tốc và tòa nhà thương mại.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      badgeText: "CHUẨN CHỐNG NƯỚC IP65",
    },
    {
      id: "pillar-indoor",
      title: "MÀN HÌNH LED TRONG NHÀ",
      subtitle: "Hội Trường, Phòng Họp & Trung Tâm Hội Nghị",
      pixelRange: "P1.25 / P1.53 / P1.86 / P2.0 / P2.5",
      brightness: "800 - 1.200 cd/m² • 3840Hz",
      application:
        "Độ phân giải 4K/8K siêu mịn không đường viền, góc nhìn 160 độ cho phòng họp Chính phủ, sảnh khách sạn 5 sao và đài truyền hình.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      badgeText: "SIÊU MỊN 4K COB/SMD",
    },
    {
      id: "pillar-creative",
      title: "MÀN HÌNH LED SÁNG TẠO",
      subtitle: "LED 3D Mắt Thường, LED Cong & Trong Suốt",
      pixelRange: "Flexible Module / Transparent Glass LED",
      brightness: "Độ xuyên sáng 75% • Hiệu ứng 3D sâu",
      application:
        "Thiết kế uốn cong góc 90 độ trình chiếu hiệu ứng cá mập 3D vượt khung, màn hình LED trong suốt cho showroom luxury & trung tâm thương mại.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      badgeText: "CÔNG NGHỆ 3D NAKED-EYE",
    },
  ],
  ledCategories: [
    "Tất cả",
    "Màn Hình LED Trong Nhà",
    "Màn Hình LED Ngoài Trời",
    "Màn Hình LED Sáng Tạo",
    "Standee LED & Videowall",
  ],
  ledProducts: [
    {
      id: "led-p125",
      name: "Màn Hình LED Trong Nhà P1.25 COB Siêu Mịn 4K",
      category: "Màn Hình LED Trong Nhà",
      pixelPitch: "1.25 mm",
      brightness: "1.000 cd/m²",
      refreshRate: "3.840 Hz - 7.680 Hz",
      ipRating: "IP43 Chống ẩm & va đập",
      cabinetSize: "600 x 337.5 mm (Tỷ lệ 16:9)",
      priceEstimate: "Liên hệ báo giá dự án",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Công nghệ封装 COB chống va đập trực diện",
        "Độ tương phản 10.000:1 thay thế hoàn hảo TV ghép",
        "Phù hợp Trung tâm chỉ huy & Phòng họp Chủ tịch",
      ],
    },
    {
      id: "led-p2",
      name: "Màn Hình LED Hội Trường P2.0 SMD NationStar",
      category: "Màn Hình LED Trong Nhà",
      pixelPitch: "2.0 mm",
      brightness: "1.200 cd/m²",
      refreshRate: "3.840 Hz",
      ipRating: "IP31 Indoor",
      cabinetSize: "640 x 480 mm Nhôm đúc",
      priceEstimate: "Từ 14.500.000 ₫ / m²",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Bóng LED NationStar đồng nguyên chất tuổi thọ 100.000h",
        "Quay phim chụp ảnh sự kiện không bị sọc nhiễu",
        "Bảo trì mặt trước từ tính siêu nhanh",
      ],
    },
    {
      id: "led-p3-out",
      name: "Màn Hình LED Ngoài Trời P3.0 Độ Sáng Cao Chống Nước",
      category: "Màn Hình LED Ngoài Trời",
      pixelPitch: "3.0 mm Outdoor",
      brightness: "6.500 cd/m²",
      refreshRate: "3.840 Hz",
      ipRating: "IP65 Toàn diện trước/sau",
      cabinetSize: "960 x 960 mm Thép sơn tĩnh điện",
      priceEstimate: "Từ 18.900.000 ₫ / m²",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Hiển thị rõ nét dưới nắng gắt 12 giờ trưa",
        "Cảm biến tự động điều chỉnh độ sáng ngày/đêm",
        "Tiết kiệm 35% điện năng tiêu thụ",
      ],
    },
    {
      id: "led-p4-out",
      name: "Màn Hình LED Quảng Cáo Ngoài Trời P4.0 Billboard",
      category: "Màn Hình LED Ngoài Trời",
      pixelPitch: "4.0 mm Outdoor",
      brightness: "7.000 cd/m²",
      refreshRate: "3.840 Hz",
      ipRating: "IP65 / IP68",
      cabinetSize: "960 x 960 mm Nhôm đúc",
      priceEstimate: "Từ 15.200.000 ₫ / m²",
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Lựa chọn số 1 cho bảng quảng cáo trụ đơn & mặt tiền tòa nhà",
        "Hoạt động bền bỉ trong môi trường mưa bão, độ ẩm cao",
        "Quản lý nội dung từ xa qua 4G/Cloud",
      ],
    },
    {
      id: "led-3d",
      name: "Màn Hình LED 3D Mắt Thường Góc Cong 90 Độ",
      category: "Màn Hình LED Sáng Tạo",
      pixelPitch: "P2.5 / P3.91 / P4.81 Góc Cong",
      brightness: "7.500 cd/m² HDR10+",
      refreshRate: "3.840 Hz",
      ipRating: "IP65 Outdoor Creative",
      cabinetSize: "Thiết kế uốn cong liền mạch",
      priceEstimate: "Thiết kế theo kiến trúc",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Hiệu ứng chiều sâu 3D sống động không cần kính chuyên dụng",
        "Tạo biểu tượng check-in viral cho Trung tâm thương mại",
        "Bao gồm gói dựng phim 3D Naked-Eye độc quyền",
      ],
    },
    {
      id: "led-standee",
      name: "Standee LED Điện Tử Chân Đứng P1.86 / P2.0 Thông Minh",
      category: "Standee LED & Videowall",
      pixelPitch: "1.86 mm / 2.0 mm",
      brightness: "1.200 cd/m²",
      refreshRate: "3.840 Hz",
      ipRating: "Kính cường lực & Keo GOB bảo vệ",
      cabinetSize: "640 x 1920 mm Siêu mỏng",
      priceEstimate: "32.000.000 ₫ / Bộ",
      image:
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Ghép nối liên hoàn 2-6 tấm thành màn hình lớn không viền",
        "Điều khiển thay đổi poster qua điện thoại trong 5 giây",
        "Khung hợp kim nhôm sang trọng cho sảnh sự kiện & showroom",
      ],
    },
  ],
  completedProjects: [
    {
      id: "proj-1",
      title: "Hệ Thống Màn Hình LED 3D Góc Cong Trung Tâm Thương Mại Quận 1",
      client: "Tập đoàn Bất động sản Quốc tế",
      location: "Quận 1, TP. Hồ Chí Minh",
      ledType: "LED 3D Outdoor P4.0 (Góc cong 90°)",
      areaSize: "240 m²",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "proj-2",
      title: "Màn Hình LED Hội Trường Chính 4K Trung Tâm Hội Nghị Quốc Gia",
      client: "Ban Quản lý Trung tâm Hội nghị",
      location: "Quận Nam Từ Liêm, Hà Nội",
      ledType: "LED Indoor P1.53 SMD NationStar",
      areaSize: "85 m²",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "proj-3",
      title: "Tổ Hợp 18 Standee LED & Màn Hình Lớn Sân Bay Quốc Tế Tân Sơn Nhất",
      client: "Cảng Hàng Không Quốc Tế",
      location: "Quận Tân Bình, TP. Hồ Chí Minh",
      ledType: "LED P2.0 GOB & Outdoor P3.0",
      areaSize: "160 m²",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
  ],
  technologyPartners: [
    { id: "tp-1", name: "NATIONSTAR", role: "Đối tác Bóng LED Vàng & Đồng" },
    { id: "tp-2", name: "NOVASTAR", role: "Hệ thống Bộ xử lý hình ảnh 4K/8K" },
    { id: "tp-3", name: "QIANGLI JUCAI", role: "Nhà phân phối Module chính hãng" },
    { id: "tp-4", name: "MEAN WELL", role: "Bộ nguồn công suất cao chuẩn UL" },
  ],
  installationSteps: [
    {
      step: "01",
      title: "Khảo Sát Hiện Trường & Tư Vấn Giải Pháp",
      description:
        "Kỹ sư Vietking khảo sát trực tiếp khoảng cách nhìn, ánh sáng môi trường và kết cấu chịu lực để chọn Pixel Pitch tối ưu.",
    },
    {
      step: "02",
      title: "Thiết Kế Bản Vẽ Kỹ Thuật 2D & Mô Phỏng 3D",
      description:
        "Cung cấp bản vẽ AutoCAD chi tiết hệ khung sắt/nhôm định hình, sơ đồ cấp nguồn 3 pha và sơ đồ cáp tín hiệu quang.",
    },
    {
      step: "03",
      title: "Nhập Khẩu Chính Ngạch Đầy Đủ CO, CQ",
      description:
        "100% module LED, card thu phát Novastar và nguồn Mean Well đều có chứng nhận xuất xứ CO và chất lượng CQ chính hãng.",
    },
    {
      step: "04",
      title: "Thi Công Lắp Đặt, Cân Chỉnh Màu & Bảo Hành 36 Tháng",
      description:
        "Lắp đặt an toàn tuyệt đối, cân chỉnh màu sắc đồng nhất bằng máy chuyên dụng và bảo hành tận nơi trong 24-36 tháng.",
    },
  ],
  stats: [
    { value: "10+ Năm", label: "Kinh Nghiệm Ngành Công Nghệ Hiển Thị" },
    { value: "1.800+", label: "Dự Án Màn Hình LED Hoàn Thành" },
    { value: "3.840Hz", label: "Tần Số Quét Hình Ảnh Chuyên Nghiệp" },
    { value: "100%", label: "Module Chính Hãng Có CO, CQ" },
  ],
  services: [
    {
      title: "Màn Hình LED Ngoài Trời (Outdoor)",
      description:
        "Giải pháp màn hình LED quảng cáo ngoài trời P3, P4, P5, P8, P10 chống nước chuẩn IP65, độ sáng cực đại 10.000 nits.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Màn Hình LED Trong Nhà (Indoor)",
      description:
        "Màn hình LED hội trường, phòng họp, sảnh tiệc cưới P1.25, P1.53, P2.0, P2.5 độ phân giải 4K/8K siêu nét.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Màn Hình LED Sáng Tạo 3D & Trong Suốt",
      description:
        "Thi công màn hình LED 3D mắt thường góc cong, màn hình LED trong suốt vách kính và Standee LED điện tử.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
  ],
  projects: [
    {
      title: "Màn Hình LED 3D Góc Cong Trung Tâm Thương Mại Quận 1",
      category: "Màn Hình LED Sáng Tạo",
      summary: "Thi công 240m² màn hình LED ngoài trời góc cong hiệu ứng cá mập 3D sống động.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      name: "Ông Nguyễn Hoàng Nam",
      role: "Giám đốc Kỹ thuật — Trung tâm Hội nghị Quốc tế",
      quote:
        "Hệ thống màn hình LED P1.53 do VIETKING thi công hoạt động bền bỉ suốt 3 năm qua, màu sắc rực rỡ và đội ngũ bảo trì phản ứng cực kỳ nhanh chóng.",
      rating: 5,
    },
  ],
  news: [
    {
      title: "Kinh nghiệm chọn màn hình LED hội trường P1.53, P2.0 hay P2.5 phù hợp diện tích và ngân sách",
      date: "20/10/2026",
      category: "Tư vấn kỹ thuật LED",
      excerpt:
        "Hướng dẫn công thức tính khoảng cách nhìn tối ưu và lựa chọn bóng LED NationStar hay Kinglight cho dự án doanh nghiệp.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
