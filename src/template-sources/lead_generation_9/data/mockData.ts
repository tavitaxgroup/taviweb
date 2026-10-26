import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CreativeCourseItem {
  id: string;
  title: string;
  discountBadge: string;
  level: string;
  duration: string;
  startDate: string;
  oldPrice: string;
  price: string;
  image: string;
}

export interface CreativeToolkitItem {
  id: string;
  title: string;
  discountBadge: string;
  format: string;
  software: string;
  versionCount: string;
  oldPrice?: string;
  price: string;
  image: string;
}

export interface LeadGeneration9Data extends ClonedTemplateBaseData {
  topPromoBannerText: string;
  whyChooseReasons: Array<{
    id: string;
    title: string;
    icon: string;
  }>;
  bentoProjects: Array<{
    id: string;
    title: string;
    subtitle: string;
    badge?: string;
    image: string;
    featured?: boolean;
  }>;
  serviceItems: Array<{
    id: string;
    title: string;
  }>;
  splitShowcases: Array<{
    id: string;
    title: string;
    description?: string;
    bullets?: string[];
    ctaText: string;
    image: string;
  }>;
  videoBanner: {
    subtitle: string;
    title: string;
    image: string;
  };
  courses: CreativeCourseItem[];
  toolkits: CreativeToolkitItem[];
}

export const leadGeneration9DefaultData: LeadGeneration9Data = {
  business: {
    name: "CreativeSpot",
    phone: ["0313728397", "1900 636 648"],
    email: ["info@themona.global", "academy@creativespot.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "9:00 - 20:00, Thứ 2 – CN",
    rating: 4.95,
    reviewCount: 1850,
    aboutTitle: "TẠI SAO CHỌN CREATIVE SPOT?",
    aboutText: [
      "Trong thời điểm tuyệt vời và chưa từng có như ngày nay khi thế giới đang thay đổi rất nhanh chóng, sáng tạo, thích nghi và linh hoạt là những thuộc tính mà chúng tôi đang hướng tới. Chúng tôi làm việc cùng nhau để cung cấp cho khách hàng các giải pháp sáng tạo hiệu quả với ngân sách khiêm tốn nhưng không phải thỏa hiệp về chất lượng sản phẩm và dịch vụ.",
      "Chúng tôi hướng đến phát triển tập trung vào lĩnh vực tư vấn các giải pháp sáng tạo và cạnh tranh cho các doanh nghiệp và cá nhân, đào tạo và phát triển con người đạt đến tiềm năng tối ưu."
    ],
    experienceYears: "12+"
  },
  topPromoBannerText:
    "KHAI TRƯƠNG CƠ SỞ MỚI — DEAL SỐC HỌC PHÍ GIẢM ĐẾN 52% — ÁP DỤNG ĐĂNG KÝ TRỰC TIẾP TRONG TUẦN NÀY",
  hero: {
    eyebrow: "GIA NHẬP CREATIVE SPOT",
    title: "Đặt lịch học ngay",
    subtitle:
      "Làm chủ bộ công cụ thiết kế đồ họa Adobe Photoshop, Illustrator, InDesign, Premiere và After Effects cùng chuyên gia Art Director thực chiến.",
    ctaText: "TÌM HIỂU THÊM",
    ctaLink: "#khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1600&q=85"
  },
  whyChooseReasons: [
    {
      id: "wc-1",
      title: "Chất lượng cao với ngân sách khiêm tốn",
      icon: "award"
    },
    {
      id: "wc-2",
      title: "Quy trình và thủ tục tinh gọn",
      icon: "clipboard"
    },
    {
      id: "wc-3",
      title: "Đội ngũ tư vấn giàu kinh nghiệm",
      icon: "users"
    },
    {
      id: "wc-4",
      title: "Làm việc xuyên Lễ và cuối tuần",
      icon: "clock"
    },
    {
      id: "wc-5",
      title: "Đa dạng phong cách và cá tính",
      icon: "palette"
    },
    {
      id: "wc-6",
      title: "Đóng góp 5% lợi nhuận cho hoạt động thiện nguyện",
      icon: "heart"
    }
  ],
  bentoProjects: [
    {
      id: "bp-1",
      title: "KHÓA HỌC THIẾT KẾ ĐỒ HỌA",
      subtitle: "Tuyển sinh khóa mới — Ưu đãi 35% học phí thực hành 1 kèm 1",
      badge: "Ưu đãi 35%",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "bp-2",
      title: "KHÓA HỌC DỰNG PHIM CĂN BẢN",
      subtitle: "Làm chủ Adobe Premiere & Kỹ xảo After Effects thực chiến",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "bp-3",
      title: "KHÓA HỌC THIẾT KẾ ĐỒ HỌA NÂNG CAO",
      subtitle: "Xây dựng bộ nhận diện thương hiệu & Art Direction",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bp-4",
      title: "KHÓA HỌC THIẾT KẾ NỘI THẤT & DIỄN HỌA KIẾN TRÚC",
      subtitle: "3ds Max, SketchUp, V-Ray & Corona Render chuyên sâu",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    }
  ],
  serviceItems: [
    { id: "sv-1", title: "Phát Triển Ý Tưởng" },
    { id: "sv-2", title: "Trưng Bày Cửa Hàng" },
    { id: "sv-3", title: "Phát Triển Nội Dung" },
    { id: "sv-4", title: "Trang Trí Dịp Lễ" },
    { id: "sv-5", title: "Triển Khai Thiết Kế" },
    { id: "sv-6", title: "Dịch Thuật Anh-Nhật-Việt" },
    { id: "sv-7", title: "Chụp Hình Quảng Cáo" },
    { id: "sv-8", title: "Triển Khai Nội Dung (Copywriting)" }
  ],
  splitShowcases: [
    {
      id: "ss-1",
      title: "Trưng Bày Cửa Hàng & Trang Trí Sự Kiện",
      description:
        "Từ lúc khách hàng bước vào, mọi điểm chạm thị giác đều được thiết kế chỉn chu. Thực hiện hành trình khám phá và kết nối câu chuyện thương hiệu thông qua không gian trưng bày nghệ thuật đầy cảm hứng.",
      ctaText: "LIÊN HỆ",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ss-2",
      title: "Sáng Tạo Nội Dung & Biên Dịch Đa Ngữ",
      description:
        "Xây dựng thông điệp truyền thông sắc bén, giàu cảm xúc và chuẩn văn phong bản địa Anh - Nhật - Việt. Chuyển hóa ý tưởng phức tạp thành câu chữ lôi cuốn giúp gia tăng tỷ lệ chuyển đổi vượt trội.",
      ctaText: "LIÊN HỆ",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ss-3",
      title: "Nhiếp Ảnh Thương Mại & Studio",
      bullets: [
        "BẤT ĐỘNG SẢN & NỘI THẤT",
        "SỰ KIỆN & HOẠT ĐỘNG DOANH NGHIỆP",
        "SẢN PHẨM & TRƯNG BÀY THƯƠNG MẠI",
        "HỒ SƠ NĂNG LỰC & KỶ YẾU"
      ],
      ctaText: "LIÊN HỆ",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  videoBanner: {
    subtitle: "KHÁM PHÁ KIẾN THỨC MỚI",
    title: "Lạc vào một thế giới khác của những thiết kế đi cùng với thời đại",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80"
  },
  courses: [
    {
      id: "cr-1",
      title: "Khóa học thiết kế đồ họa & dựng phim cho người mới bắt đầu",
      discountBadge: "Ưu đãi 35%",
      level: "Cơ bản",
      duration: "3 tháng",
      startDate: "18/08/2026",
      oldPrice: "1.990.000 ₫",
      price: "1.290.000 ₫",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cr-2",
      title: "Khóa học thiết kế đồ họa chuyên nghiệp từ con số 0",
      discountBadge: "Ưu đãi 15%",
      level: "Cơ bản đến Nâng cao",
      duration: "16 Tuần",
      startDate: "30/08/2026",
      oldPrice: "2.200.000 ₫",
      price: "1.900.000 ₫",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cr-3",
      title: "Khóa học thiết kế đồ họa quảng cáo & thương hiệu",
      discountBadge: "Ưu đãi 52%",
      level: "Nâng cao",
      duration: "20 Tuần",
      startDate: "10/09/2026",
      oldPrice: "1.450.000 ₫",
      price: "695.000 ₫",
      image:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=700&q=80"
    }
  ],
  toolkits: [
    {
      id: "tk-1",
      title: "Bộ Tài Nguyên Thiết Kế Đồ Họa Nâng Cao (Full Preset & Brush)",
      discountBadge: "Ưu đãi 21%",
      format: "PSD, AI, EPS",
      software: "Adobe CC",
      versionCount: "5 Bộ",
      oldPrice: "200.000 ₫",
      price: "159.000 ₫",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tk-2",
      title: "Bộ Giáo Trình & Mockup Nhận Diện Thương Hiệu Doanh Nghiệp",
      discountBadge: "Mới nhất",
      format: "PSD, INDD",
      software: "Photoshop & InDesign",
      versionCount: "6 Bộ",
      price: "200.000 ₫",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tk-3",
      title: "Gói Học Liệu & Kho Template Thiết Kế Truyền Thông Đa Kênh",
      discountBadge: "Ưu đãi 13%",
      format: "AI, PSD, PRPROJ",
      software: "Full Adobe Suite",
      versionCount: "12 Bộ",
      oldPrice: "800.000 ₫",
      price: "695.000 ₫",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=80"
    }
  ],
  news: [
    {
      id: "nw-1",
      category: "MARKETING SỰ NGHIỆP & THĂNG TIẾN",
      date: "20/05/2026",
      title: "LÀM SAO LỰA CHỌN GIỮA MỘT CÔNG TY QUẢNG CÁO VÀ MỘT FREELANCER?",
      excerpt:
        "Quyết định lựa chọn công ty Agency hay Freelancer tự do cho việc thiết kế quảng cáo của bạn phụ thuộc vào quy mô dự án...",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      category: "HỌC HÀNH & SÁNG TẠO ĐỒ HỌA",
      date: "18/05/2026",
      title: "TRÍ TUỆ NHÂN TẠO ĐƯA RA “LỜI KHUYÊN” KHI HỌC THIẾT KẾ TRỰC TUYẾN",
      excerpt:
        "Trong thời đại công nghệ phát triển nhanh chóng như hiện nay, các công cụ AI đang dần hoàn thiện và hỗ trợ đắc lực...",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      category: "THÀNH TIẾN THIẾT KẾ ĐỒ HỌA",
      date: "15/05/2026",
      title: "THÁCH THỨC ĐỐI VỚI CÁC NHÀ SÁNG TẠO VIỆT LÀM VIỆC TỰ DO",
      excerpt:
        "Là một nhà sáng tạo tự do tại Việt Nam không hề đơn giản. Bên cạnh những cơ hội và tiềm năng, các nhà thiết kế cần...",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=700&q=80"
    }
  ]
};

export default leadGeneration9DefaultData;
