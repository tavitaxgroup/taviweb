import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Luat8CountryFact {
  id: string;
  label: string;
  value: string;
  iconType: "area" | "population" | "language" | "currency";
}

export interface Luat8Data extends ClonedTemplateBaseData {
  aboutPortraitImage: string;
  factsBannerImage: string;
  countryFacts: Luat8CountryFact[];
  featuredNews: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  };
}

export const luatSu8DefaultData: Luat8Data = {
  business: {
    name: "Adept Law",
    phone: ["0903 728 397", "028 3888 6868"],
    email: ["info@adeptlaw.vn", "tuvan@adeptlaw.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    rating: 4.9,
    reviewCount: 540,
    experienceYears: "14 Năm",
    aboutTitle: "ĐỊNH CƯ TẠI ÚC",
    aboutText: [
      "Đất nước Úc được đánh giá là điểm đến hàng đầu dành cho người nhập cư. Nền kinh tế vững mạnh, thu nhập trung bình cao, tỷ lệ thất nghiệp thấp và chất lượng cuộc sống tại Úc cao.",
      "Hiện nay là thời điểm nộp hồ sơ định cư Úc lý tưởng. Chỉ tiêu thị thực định cư đang ở mức cao. Chính phủ Úc tạo điều kiện để thu hút người nhập cư đến sinh sống, kinh doanh & làm việc tại Úc, đồng thời ưu tiên cho các ứng viên nộp hồ sơ từ ngoài phạm vi nước Úc.",
      "Hộ chiếu Úc cho phép công dân đi đến 172 quốc gia và vùng lãnh thổ mà không cần xin thị thực du lịch.",
      "Mời quý vị cập nhật những tin tức pháp lý mới nhất về định cư – di trú Úc cùng đội ngũ luật sư di trú Adept Law."
    ],
    highlights: [
      "Luật sư di trú được cấp phép hành nghề quốc tế (MARA)",
      "Thẩm định hồ sơ định cư, lao động & đầu tư minh bạch 100%",
      "Đồng hành pháp lý trọn gói từ Việt Nam đến khi an cư tại Úc"
    ]
  },
  hero: {
    eyebrow: "Công Ty Luật Di Trú & Định Cư Quốc Tế",
    title: "ĐỊNH CƯ ÚC",
    subtitle:
      "Chuyên tư vấn pháp lý di trú, thị thực lao động tay nghề, đầu tư định cư và bảo lãnh gia đình tại Úc với lộ trình minh bạch và tỷ lệ thành công vượt trội.",
    ctaText: "ĐĂNG KÝ NGAY",
    ctaLink: "#dang-ky-tu-van",
    backgroundImage:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1800&q=85"
  },
  aboutPortraitImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  factsBannerImage:
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1800&q=80",
  countryFacts: [
    {
      id: "fact-1",
      label: "Diện tích",
      value: "~7 triệu km²",
      iconType: "area"
    },
    {
      id: "fact-2",
      label: "Dân số",
      value: "~26 triệu người",
      iconType: "population"
    },
    {
      id: "fact-3",
      label: "Ngôn Ngữ",
      value: "Tiếng Anh",
      iconType: "language"
    },
    {
      id: "fact-4",
      label: "Tiền Tệ",
      value: "AUD",
      iconType: "currency"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "VISA DU HỌC ÚC",
      category: "Student Visa 500",
      description:
        "Tư vấn chọn trường, ngành học ưu tiên định cư và hoàn thiện hồ sơ chứng minh tài chính Visa 500 tỷ lệ đậu cao.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "XUẤT KHẨU LAO ĐỘNG",
      category: "Skilled Visa 482 / 186",
      description:
        "Pháp lý bảo lãnh lao động tay nghề (TSS 482, ENS 186) làm việc hợp pháp tại các doanh nghiệp Úc với mức lương hấp dẫn.",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "ĐẦU TƯ ĐỊNH CƯ",
      category: "Business Innovation 188",
      description:
        "Tư vấn cấu trúc đầu tư, thành lập doanh nghiệp và chứng minh nguồn vốn diện Doanh nhân & Đầu tư định cư Úc.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-4",
      title: "HỖ TRỢ SAU ĐỊNH CƯ",
      category: "Settlement Legal Support",
      description:
        "Hỗ trợ thủ tục thuế, mua bất động sản, đăng ký trường học cho con và xin cấp Thường trú nhân (PR) – Quốc tịch Úc.",
      image:
        "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=800&q=80"
    }
  ],
  featuredNews: {
    id: "feat-news-1",
    title: "CHI PHÍ TƯ VẤN ĐỊNH CƯ & DU HỌC QUỐC TẾ TẠI ADEPT LAW",
    date: "20/05/2025",
    excerpt:
      "LÀ VĂN PHÒNG LUẬT DI TRÚ CÓ BIỂU PHÍ MINH BẠCH NHẤT — MIỄN PHÍ ĐÁNH GIÁ ĐIỂM DI TRÚ BAN ĐẦU: Tư vấn lộ trình thị thực, thẩm định hồ sơ pháp lý và đại diện làm việc trực tiếp với Bộ Di Trú.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
  },
  news: [
    {
      id: "news-1",
      title: "HỒ SƠ ĐỊNH CƯ ÚC DIỆN TAY NGHỀ GỒM NHỮNG LOẠI GIẤY TỜ GÌ?",
      date: "18/05/2025",
      category: "Cẩm nang di trú",
      excerpt:
        "Ở những bài viết trước chúng tôi đã giới thiệu chi tiết danh mục thẩm định tay nghề (Skills Assessment) và chứng chỉ tiếng Anh...",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "ĐI DU HỌC & LÀM VIỆC TẠI ÚC CÓ DỄ XIN THƯỜNG TRÚ NHÂN KHÔNG?",
      date: "14/05/2025",
      category: "Visa Du học & Lao động",
      excerpt:
        "Ngoài chia sẻ kiến thức về danh sách ngành nghề ưu tiên định cư (MLTSSL), luật sư Adept Law phân tích cơ hội chuyển tiếp Visa 485...",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "Chương Trình Lao Động & Học Tập Tại Úc Vừa Học Vừa Làm Hợp Pháp",
      date: "09/05/2025",
      category: "Lao động quốc tế",
      excerpt:
        "Hiện nay, chính sách làm thêm dành cho du học sinh và thị thực lao động kỳ nghỉ (Visa 462) mở ra cơ hội tích lũy tài chính...",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
