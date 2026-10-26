import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SongTraCatalogItem {
  id: string;
  name: string;
  category: "may-nang-co" | "laser-tre-hoa" | "duoc-my-pham" | "goi-4s";
  price: string;
  swatches: string[];
  specs: Array<{ label: string; value: string }>;
  image: string;
  isFeaturedSpecCard?: boolean;
}

export interface SongTra4SPillar {
  code: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SongTraAestheticData extends ClonedTemplateBaseData {
  navigation: Array<{ label: string; href: string; active?: boolean }>;
  heroPurpleRibbon: string;
  heroPinkRibbon: string;
  heroPanoramaBanner: {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
  };
  catalogTabs: Array<{
    id: "all" | "may-nang-co" | "laser-tre-hoa" | "duoc-my-pham" | "goi-4s";
    label: string;
  }>;
  catalogItems: SongTraCatalogItem[];
  pillars4S: SongTra4SPillar[];
  branches: Array<{
    id: string;
    name: string;
    address: string;
    hotline: string;
  }>;
}

export const thamMyVien15DefaultData: SongTraAestheticData = {
  business: {
    name: "SÔNG TRÀ",
    tagline:
      "Hệ Thống Thẩm Mỹ Công Nghệ Cao & Phân Phối Thiết Bị Chuẩn 4S Sông Trà Aesthetic",
    phone: ["1800 9007", "0255 382 9999"],
    email: ["cskh@songtraaesthetic.vn", "info@songtra.com.vn"],
    address: "270 Quang Trung, Phường Lê Hồng Phong, TP. Quảng Ngãi",
    workingHours: "07:30 - 20:00 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 3850,
    experienceYears: "15+",
    aboutTitle: "Hệ Thống Thẩm Mỹ & Bảo Hành Dịch Vụ Chuẩn 4S Hàng Đầu Quảng Ngãi",
    aboutText: [
      "Sông Trà Aesthetic tự hào là đơn vị tiên phong áp dụng mô hình chăm sóc sắc đẹp và phân phối thiết bị thẩm mỹ chuẩn 4S quốc tế tại khu vực Quảng Ngãi và miền Trung.",
      "Với hệ thống 10 chi nhánh đồng bộ, chúng tôi cam kết mang đến công nghệ nâng cơ – trẻ hóa chính hãng cùng chế độ bảo hành kết quả minh bạch dài hạn."
    ],
    highlights: [
      "Hệ thống 10 trung tâm thẩm mỹ & bảo hành chuẩn 4S",
      "100% thiết bị công nghệ cao & dược mỹ phẩm chính hãng",
      "Tổng đài CSKH miễn phí cước 1800 9007 hỗ trợ 24/7"
    ]
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#top" },
    { label: "VỀ SÔNG TRÀ", href: "#tieu-chuan-4s" },
    { label: "DỊCH VỤ 4S", href: "#tieu-chuan-4s" },
    { label: "SẢN PHẨM & MÁY", href: "#danh-muc-san-pham", active: true },
    { label: "BẢO HÀNH", href: "#he-thong-chi-nhanh" },
    { label: "KHUYẾN MÃI", href: "#hero-showcase" },
    { label: "TIN TỨC", href: "#he-thong-chi-nhanh" },
    { label: "LIÊN HỆ", href: "#footer-songtra" }
  ],
  heroPurpleRibbon: "HỆ THỐNG THẨM MỸ & BẢO HÀNH DỊCH VỤ",
  heroPinkRibbon: "HÀNG ĐẦU QUẢNG NGÃI",
  hero: {
    eyebrow: "THỜI GIAN KHUYẾN MÃI GIỜ VÀNG • 26 PHÚT",
    title: "Hệ Thống Thẩm Mỹ & Bảo Hành Dịch Vụ Hàng Đầu Quảng Ngãi",
    subtitle:
      "Trải nghiệm chuẩn mực làm đẹp 4S: Dịch vụ chuyên sâu – Thiết bị chính hãng – Chăm sóc tận tâm – Bảo hành uy tín.",
    ctaText: "MUA HÀNG & ĐẶT LỊCH NGAY",
    ctaLink: "#danh-muc-san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
  },
  heroPanoramaBanner: {
    badge: "CÔNG NGHỆ THẨM MỸ 160+ ĐẦU TIP",
    title: "THERMAGE PRO 160 — ĐỈNH CAO TRẺ HÓA TOÀN DIỆN",
    subtitle: "Bảo hành chính hãng trên toàn hệ thống 10 chi nhánh Sông Trà",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85"
  },
  catalogTabs: [
    { id: "all", label: "TẤT CẢ" },
    { id: "may-nang-co", label: "MÁY NÂNG CƠ" },
    { id: "laser-tre-hoa", label: "TRẺ HÓA LASER" },
    { id: "duoc-my-pham", label: "DƯỢC MỸ PHẨM" },
    { id: "goi-4s", label: "GÓI BẢO HÀNH 4S" }
  ],
  catalogItems: [
    {
      id: "st-1",
      name: "Máy Nâng Cơ Vi Dòng Sông Trà Vario Beauty 160",
      category: "may-nang-co",
      price: "Từ 51,719,500 VNĐ",
      swatches: ["#111111", "#1d4ed8", "#dc2626", "#9ca3af", "#d97706"],
      specs: [
        { label: "Công nghệ", value: "RF Đa Cực 4.0MHz" },
        { label: "Đầu điều trị", value: "03 Đầu Tip Mặt & Mắt" },
        { label: "Bảo hành", value: "36 Tháng Chuẩn 4S" }
      ],
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-2",
      name: "Thiết Bị Ánh Sáng Sinh Học Alpha Glow RS 110",
      category: "laser-tre-hoa",
      price: "Từ 24,780,000 VNĐ",
      swatches: ["#eab308", "#16a34a", "#2563eb", "#ffffff"],
      specs: [
        { label: "Bước sóng", value: "415nm - 830nm" },
        { label: "Chế độ", value: "Trị mụn & Trẻ hóa" },
        { label: "Bảo hành", value: "24 Tháng Chính Hãng" }
      ],
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-3",
      name: "Máy Điện Di Lạnh Cấp Ẩm Chuyên Sâu LEAD Pro",
      category: "may-nang-co",
      price: "Từ 39,557,455 VNĐ",
      swatches: ["#dc2626", "#1d4ed8", "#111111", "#ffffff"],
      specs: [
        { label: "Nhiệt độ lạnh", value: "-15°C Khóa Tinh Chất" },
        { label: "Nhiệt độ nóng", value: "+42°C Mở Biểu Bì" },
        { label: "Bảo hành", value: "24 Tháng Chuẩn 4S" }
      ],
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-4",
      name: "Hệ Thống Soi Da & Trẻ Hóa SH Mode Aesthetic 2026",
      category: "goi-4s",
      price: "Từ 57,132,000 VNĐ",
      swatches: ["#dc2626", "#111111", "#16a34a", "#1e3a8a"],
      specs: [
        { label: "Phân tích AI", value: "12 Chỉ Số Tầng Sâu" },
        { label: "Màn hình", value: "Cảm Ứng 15.6 Inch 4K" },
        { label: "Bảo hành", value: "36 Tháng Tận Nơi" }
      ],
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      isFeaturedSpecCard: true
    },
    {
      id: "st-5",
      name: "Bộ Tinh Chất Trẻ Hóa Toàn Diện Vision Glass Skin",
      category: "duoc-my-pham",
      price: "Từ 31,113,818 VNĐ",
      swatches: ["#111111", "#2563eb"],
      specs: [
        { label: "Hoạt chất", value: "Exosome + HA Đa Phân Tử" },
        { label: "Quy cách", value: "Hộp 20 Ống Vô Khuẩn" },
        { label: "Xuất xứ", value: "Hàn Quốc Chính Ngạch" }
      ],
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-6",
      name: "Máy Laser Xóa Sắc Tố & Nám AirBlade Pico 125/160",
      category: "laser-tre-hoa",
      price: "Từ 42,012,000 VNĐ",
      swatches: [
        "#111111",
        "#374151",
        "#dc2626",
        "#1d4ed8",
        "#9ca3af",
        "#047857",
        "#b91c1c"
      ],
      specs: [
        { label: "Xung Laser", value: "Pico Giây Siêu Ngắn" },
        { label: "Ứng dụng", value: "Trị Nám, Tàn Nhang, Trẻ Hóa" },
        { label: "Bảo hành", value: "36 Tháng Chuẩn 4S" }
      ],
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-7",
      name: "Gói Trẻ Hóa & Tạo Hình V-Line Wave RSX Luxury",
      category: "goi-4s",
      price: "Từ 22,032,000 VNĐ",
      swatches: ["#111111", "#dc2626", "#1d4ed8", "#6b7280", "#ffffff"],
      specs: [
        { label: "Số buổi", value: "10 Buổi Chuyên Sâu" },
        { label: "Tặng kèm", value: "Bộ Dưỡng B5 Phục Hồi" },
        { label: "Cam kết", value: "Văn Bản Bảo Hành 4S" }
      ],
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-8",
      name: "Đài Phun Oxy Tươi & Hút Mụn Thủy Lực SH350i Clinic",
      category: "may-nang-co",
      price: "Từ 150,990,000 VNĐ",
      swatches: ["#111111", "#dc2626", "#1d4ed8", "#9ca3af", "#d1d5db"],
      specs: [
        { label: "Đầu chức năng", value: "08 Đầu Aqua Peel & Oxy" },
        { label: "Công suất", value: "Chuyên Dụng Viện Thẩm Mỹ" },
        { label: "Bảo hành", value: "5 Năm Toàn Hệ Thống" }
      ],
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80"
    }
  ],
  pillars4S: [
    {
      code: "1S",
      title: "Sales — Tư Vấn & Sản Phẩm Chính Hãng",
      subtitle: "Minh bạch nguồn gốc 100%",
      description:
        "Phân phối thiết bị thẩm mỹ, dược mỹ phẩm và liệu trình làm đẹp có đầy đủ chứng nhận CO/CQ và tem bảo hành điện tử."
    },
    {
      code: "2S",
      title: "Service — Dịch Vụ Bảo Hành & Chăm Sóc",
      subtitle: "Đội ngũ kỹ thuật & bác sĩ chuyên môn cao",
      description:
        "Quy trình thăm khám, vận hành máy và bảo trì định kỳ đạt chuẩn quốc tế trên toàn hệ thống 10 chi nhánh Sông Trà."
    },
    {
      code: "3S",
      title: "Spare Parts — Linh Kiện & Dược Liệu Chuẩn",
      subtitle: "Luôn sẵn có đầu Tip & tinh chất chính hãng",
      description:
        "Cam kết sử dụng 100% đầu tip Thermage/Hifu nguyên tem và tinh chất cấy dưỡng nhập khẩu chính ngạch."
    },
    {
      code: "4S",
      title: "Safety & Satisfaction — An Toàn & Hài Lòng",
      subtitle: "Đồng hành trọn đời cùng khách hàng",
      description:
        "Hướng dẫn quy trình chăm sóc da an toàn tại nhà và tổng đài miễn phí 1800 9007 lắng nghe khách hàng 24/7."
    }
  ],
  branches: [
    {
      id: "br-1",
      name: "Sông Trà Aesthetic 1 — Trung Tâm TP. Quảng Ngãi",
      address: "270 Quang Trung, P. Lê Hồng Phong, TP. Quảng Ngãi",
      hotline: "1800 9007 (Nhánh 1)"
    },
    {
      id: "br-2",
      name: "Sông Trà Aesthetic 2 — Chi Nhánh Hùng Vương",
      address: "118 Hùng Vương, P. Trần Phú, TP. Quảng Ngãi",
      hotline: "1800 9007 (Nhánh 2)"
    },
    {
      id: "br-3",
      name: "Sông Trà Aesthetic 3 — Chi Nhánh Đức Phổ",
      address: "412 Nguyễn Nghiêm, Thị xã Đức Phổ, Quảng Ngãi",
      hotline: "1800 9007 (Nhánh 3)"
    }
  ]
};
