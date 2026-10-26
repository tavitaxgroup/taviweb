import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile8Pillar {
  id: string;
  title: string;
  description: string;
  color: "cyan" | "orange" | "green";
}

export interface CorporateProfile8SkillBar {
  id: string;
  label: string;
  percentage: number;
  colorClass: string;
}

export interface CorporateProfile8PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  gradientClass: string;
  features: string[];
}

export interface CorporateProfile8ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  badgeColor: string;
}

export interface CorporateProfile8TemplateData extends ClonedTemplateBaseData {
  pillars: CorporateProfile8Pillar[];
  skillBars: CorporateProfile8SkillBar[];
  pricingPlans: CorporateProfile8PricingPlan[];
  processSteps: CorporateProfile8ProcessStep[];
}

export const corporateProfile8DefaultData: CorporateProfile8TemplateData = {
  business: {
    name: "TechSolutions",
    logo: "",
    phone: ["0909 313 728", "028 3811 6688"],
    email: ["info@techsolutions.vn", "growth@techsolutions.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:30 - 18:00",
    rating: 4.95,
    reviewCount: 280,
    experienceYears: "12+",
    aboutTitle: "Mở rộng sự hiện diện số của doanh nghiệp",
    aboutText: [
      "Với hơn 12 năm kinh nghiệm trong lĩnh vực Công nghệ & Digital Marketing, TechSolutions đã xây dựng hàng ngàn chiến dịch chuyển đổi số và tăng trưởng toàn diện, giúp bóc tách từng lớp giá trị cốt lõi để thấu hiểu, kết nối và dẫn đầu thị trường của bạn."
    ]
  },
  hero: {
    eyebrow: "Giới thiệu dịch vụ",
    title: "Cung cấp giải pháp marketing",
    subtitle:
      "Với chiến lược SEO chuyên sâu, thiết kế UI/UX chuẩn chuyển đổi và giải pháp công nghệ số, chúng tôi giúp nâng cao thứ hạng trang web của bạn trên các công cụ tìm kiếm.",
    ctaText: "KHÁM PHÁ THÊM",
    ctaLink: "#bang-gia",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85"
  },
  pillars: [
    {
      id: "pil-1",
      title: "Ý tưởng độc đáo",
      description:
        "Xây dựng mối quan hệ bền vững và chia sẻ giá trị cốt lõi của doanh nghiệp bạn thông qua nội dung sáng tạo được thiết kế riêng cho từng nhóm khách hàng.",
      color: "cyan"
    },
    {
      id: "pil-2",
      title: "Giá cả minh bạch",
      description:
        "Đầu tư hiệu quả với ngân sách hợp lý, cam kết KPIs rõ ràng bằng hợp đồng và mang lại tỷ suất lợi nhuận (ROI) vượt trội qua từng chiến dịch.",
      color: "orange"
    },
    {
      id: "pil-3",
      title: "Bảo mật thông tin",
      description:
        "Bảo vệ hình ảnh thương hiệu và dữ liệu khách hàng tuyệt đối bằng hạ tầng đám mây bảo mật đa lớp, giúp doanh nghiệp an tâm trước sự cạnh tranh khốc liệt.",
      color: "green"
    }
  ],
  skillBars: [
    {
      id: "sk-1",
      label: "Phân tích SEO & Dữ liệu",
      percentage: 92,
      colorClass: "bg-[#00aeff]"
    },
    {
      id: "sk-2",
      label: "Kiểm tra Kỹ thuật & Tốc độ Web",
      percentage: 90,
      colorClass: "bg-[#84cc16]"
    },
    {
      id: "sk-3",
      label: "Tối ưu hóa Tỷ lệ Chuyển đổi (CRO)",
      percentage: 95,
      colorClass: "bg-[#ff5a26]"
    }
  ],
  clients: [
    { id: "cl-1", name: "BALKAN" },
    { id: "cl-2", name: "ADVEITS" },
    { id: "cl-3", name: "SWIGER" },
    { id: "cl-4", name: "THE MANDALA" },
    { id: "cl-5", name: "NEXUS TECH" }
  ],
  services: [
    {
      id: "srv-1",
      title: "Thiết Kế UI/UX & Sản Phẩm",
      description:
        "Bạn đang muốn cải thiện giao diện và trải nghiệm người dùng của website hoặc ứng dụng? Đội ngũ Product Designer của chúng tôi tối ưu từng điểm chạm.",
      icon: "uiux"
    },
    {
      id: "srv-2",
      title: "Thiết Kế Ứng Dụng Di Động",
      description:
        "Chúng tôi chuyên cung cấp giải pháp phát triển ứng dụng iOS/Android đa nền tảng hiện đại, mang lại trải nghiệm mượt mà và tốc độ vượt trội.",
      icon: "mobile"
    },
    {
      id: "srv-3",
      title: "Xây Dựng Thương Hiệu & SEO",
      description:
        "Hãy để chúng tôi đồng hành cùng bạn trong việc xây dựng bộ nhận diện thương hiệu mạnh mẽ, nổi bật và phủ sóng Top 1 Google bền vững.",
      icon: "brand"
    }
  ],
  stats: [
    { id: "st-1", number: "240+", title: "Dự án thành công" },
    { id: "st-2", number: "150+", title: "Khách hàng doanh nghiệp" },
    { id: "st-3", number: "12+", title: "Chi nhánh & Đối tác" },
    { id: "st-4", number: "99%", title: "Khách hàng hài lòng" }
  ],
  pricingPlans: [
    {
      id: "plan-basic",
      name: "GÓI CƠ BẢN",
      subtitle: "Cung cấp các tính năng cần thiết",
      price: "3,990,000",
      unit: "đ/tháng",
      gradientClass: "from-[#00c6ff] to-[#0072ff]",
      features: [
        "Chiến lược kỹ thuật số toàn diện",
        "Phân tích dữ liệu và báo cáo tiếp thị",
        "Xây dựng và quản lý nội dung sáng tạo",
        "Quản lý tương tác khách hàng đa kênh"
      ]
    },
    {
      id: "plan-enterprise",
      name: "GÓI DOANH NGHIỆP",
      subtitle: "Cung cấp giải pháp toàn diện",
      price: "8,990,000",
      unit: "đ/tháng",
      gradientClass: "from-[#ff8008] via-[#ff5a26] to-[#ff416c]",
      features: [
        "Chiến lược kỹ thuật số & SEO tổng thể",
        "Phân tích dữ liệu và báo cáo tiếp thị",
        "Xây dựng và quản lý nội dung sáng tạo",
        "Quản lý tương tác khách hàng & Automation"
      ]
    },
    {
      id: "plan-pro",
      name: "GÓI NÂNG CAO",
      subtitle: "Cung cấp các tính năng nâng cao",
      price: "5,990,000",
      unit: "đ/tháng",
      gradientClass: "from-[#ec008c] to-[#7928ca]",
      features: [
        "Chiến lược kỹ thuật số toàn diện",
        "Phân tích dữ liệu và báo cáo tiếp thị",
        "Xây dựng và quản lý nội dung sáng tạo",
        "Quản lý tương tác khách hàng chuyên sâu"
      ]
    }
  ],
  processSteps: [
    {
      id: "pr-1",
      number: "01",
      title: "Phân tích yêu cầu",
      description:
        "Chúng tôi lắng nghe và tìm hiểu chi tiết về mục tiêu doanh số, chân dung khách hàng và thông điệp cốt lõi cần truyền tải.",
      badgeColor: "bg-[#ff5a26]"
    },
    {
      id: "pr-2",
      number: "02",
      title: "Lên kế hoạch chi tiết",
      description:
        "Khi nắm rõ yêu cầu, đội ngũ sẽ thực hiện nghiên cứu kỹ lưỡng về thị trường, ngành hàng, đối thủ cạnh tranh và từ khóa mục tiêu.",
      badgeColor: "bg-[#00aeff]"
    },
    {
      id: "pr-3",
      number: "03",
      title: "Triển khai nội dung",
      description:
        "Dựa trên kế hoạch, chúng tôi bắt đầu sáng tạo nội dung chất lượng, thiết kế UI/UX độc đáo và tối ưu chiến dịch quảng cáo.",
      badgeColor: "bg-[#84cc16]"
    },
    {
      id: "pr-4",
      number: "04",
      title: "Đánh giá tối ưu",
      description:
        "Sau khi triển khai, chúng tôi phân tích kết quả bằng hệ thống đo lường Real-time và liên tục tối ưu hóa tỷ lệ chuyển đổi.",
      badgeColor: "bg-[#d900ff]"
    }
  ],
  projects: [
    {
      id: "pj-1",
      title: "Chiến dịch Tăng trưởng Đa kênh FinTech",
      category: "DIGITAL STRATEGY",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pj-2",
      title: "Tối ưu Hóa Chuyển đổi Sàn Thương mại Điện tử",
      category: "UI/UX & CRO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pj-3",
      title: "Hệ thống Quản trị Nội dung & SEO Tổng thể",
      category: "SEO MASTER",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pj-4",
      title: "Thiết kế Ứng dụng Ngân hàng Số Thế hệ mới",
      category: "MOBILE APP",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pj-5",
      title: "Tự động Hóa Social Media & AI Chatbot",
      category: "MARTECH AI",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pj-6",
      title: "Phân tích Dữ liệu Tăng trưởng Doanh nghiệp B2B",
      category: "DATA ANALYTICS",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Nguyễn Văn Hưng",
      role: "Giám đốc kinh doanh",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi rất hài lòng với dịch vụ marketing mà công ty cung cấp. Chiến lược quảng bá bài bản và hiệu quả, giúp tăng trưởng doanh số vượt mong đợi chỉ sau 3 tháng. Đội ngũ rất chuyên nghiệp và luôn sẵn sàng hỗ trợ khi cần.”"
    },
    {
      id: "rv-2",
      author: "Trần Thanh Tâm",
      role: "CEO Chuỗi Bán Lẻ",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Website mới do TechSolutions thiết kế vừa chuẩn UX/UI vừa đạt điểm tốc độ Google PageSpeed 99/100. Lượng khách hàng tự nhiên từ Google đã tăng gấp 3 lần.”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "5 Xu hướng Tiếp thị số sẽ Thống trị năm 2026",
      date: "18/07/2026",
      category: "Digital Products",
      excerpt:
        "Khám phá cách Trí tuệ nhân tạo (AI), tìm kiếm giọng nói và cá nhân hóa đa kênh đang định hình lại thị trường Digital Marketing.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-2",
      title: "Cách Xây dựng Chiến lược Content Marketing Hiệu quả",
      date: "18/07/2026",
      category: "Digital Marketing",
      excerpt:
        "Bí quyết xây dựng phễu nội dung thu hút đúng khách hàng tiềm năng và gia tăng tỷ lệ chuyển đổi đơn hàng bền vững.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-3",
      title: "10 Công cụ SEO Miễn phí mà Bạn Nên Sử dụng",
      date: "18/07/2026",
      category: "Digital SEO",
      excerpt:
        "Tổng hợp các công cụ nghiên cứu từ khóa, kiểm tra backlink và tối ưu On-page giúp website bứt phá thứ hạng nhanh chóng.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default corporateProfile8DefaultData;
