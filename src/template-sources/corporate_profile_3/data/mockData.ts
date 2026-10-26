import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile3Data extends ClonedTemplateBaseData {
  aboutTabs: Array<{
    id: string;
    label: string;
    title: string;
    content: string;
  }>;
  experienceSection: {
    eyebrow: string;
    title: string;
    highlightWord: string;
    description: string;
    activeClientsBadge: string;
    image: string;
    metrics: Array<{
      id: string;
      percent: number;
      title: string;
      description: string;
    }>;
  };
  processSteps: Array<{
    id: string;
    stepNumber: string;
    title: string;
    description: string;
  }>;
  partnerLogos: Array<{
    id: string;
    name: string;
    tagline: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const corporateProfile3DefaultData: CorporateProfile3Data = {
  business: {
    name: "FutureTech",
    phone: ["(+84) 0313-728-397", "0909 888 999"],
    email: ["info@themona.global", "contact@futuretech.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.95,
    reviewCount: 420,
    aboutTitle: "Phát Triển Bằng Các Chiến Lược Marketing",
    aboutText: [
      "Với sự kết hợp giữa sự sáng tạo, chuyên môn công nghệ và dữ liệu lớn, chúng tôi tạo ra những chiến lược Marketing và Chuyển đổi số độc đáo, hiệu quả cao.",
      "Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng và kinh nghiệm thực tế trong lĩnh vực công nghệ tiếp thị hiện đại, giúp doanh nghiệp bứt phá doanh thu bền vững."
    ],
    experienceYears: "24+"
  },
  hero: {
    eyebrow: "GIẢI PHÁP MARKETING & CHUYỂN ĐỔI SỐ MẠNH MẼ",
    title: "Nâng Tầm Doanh Nghiệp Với Các Chiến Lược Marketing Đột Phá",
    subtitle:
      "Với dịch vụ Marketing công nghệ của chúng tôi, bạn sẽ tận hưởng sự thăng hoa của doanh nghiệp. Chúng tôi cung cấp các giải pháp tăng trưởng mạnh mẽ để gia tăng hiệu quả kinh doanh của bạn.",
    ctaText: "TÌM HIỂU THÊM",
    ctaLink: "#dich-vu",
    secondaryCtaText: "Xem giới thiệu",
    secondaryCtaLink: "#gioi-thieu",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  aboutTabs: [
    {
      id: "diff",
      label: "SỰ KHÁC BIỆT",
      title:
        "Chúng tôi lắng nghe và hiểu rõ mục tiêu kinh doanh của bạn để xây dựng chiến lược",
      content:
        "Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng và kinh nghiệm thực tế trong lĩnh vực marketing công nghệ. Chúng tôi luôn cập nhật những xu hướng AI, dữ liệu khách hàng và tự động hóa tiên tiến nhất, giúp bạn tận dụng tối đa các cơ hội tiếp thị hiện đại."
    },
    {
      id: "value",
      label: "GIÁ TRỊ MANG ĐẾN",
      title:
        "Tối ưu hóa tỷ lệ chuyển đổi và cam kết tăng trưởng doanh thu đo lường được theo thời gian thực",
      content:
        "Mỗi chiến dịch đều được theo dõi qua hệ thống Dashboard trực quan 24/7. Chúng tôi tập trung vào hiệu suất ROI thực tế, tối ưu chi phí chuyển đổi trên từng điểm chạm và xây dựng tài sản thương hiệu số bền vững cho doanh nghiệp."
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Chiến lược tùy chỉnh",
      description:
        "Chúng tôi cung cấp các giải pháp Marketing tùy chỉnh, phù hợp với nhu cầu và mục tiêu kinh doanh đặc thù của bạn.",
      icon: "strategy"
    },
    {
      id: "srv-2",
      title: "Quảng cáo trực tuyến",
      description:
        "Chúng tôi tạo và triển khai các chiến dịch quảng cáo trực tuyến hiệu quả, từ mạng xã hội đến Google Ads đa kênh.",
      icon: "ads"
    },
    {
      id: "srv-3",
      title: "Tối ưu hóa trang web",
      description:
        "Chúng tôi xây dựng và tối ưu hóa trang web chuyên nghiệp chuẩn SEO để đảm bảo sự hiện diện trực tuyến mạnh mẽ.",
      icon: "web"
    },
    {
      id: "srv-4",
      title: "Nội dung sáng tạo",
      description:
        "Đội ngũ tài năng của chúng tôi tạo ra nội dung sáng tạo, hấp dẫn và tương tác cao, từ bài viết chuyên sâu đến video.",
      icon: "content"
    }
  ],
  experienceSection: {
    eyebrow: "MARKETING HIỆU QUẢ",
    title: "Hơn 24 Năm Kinh Nghiệm Dịch Vụ",
    highlightWord: "Marketing",
    description:
      "Chúng tôi chia sẻ những dự án thành công, tăng trưởng doanh số, tăng cường nhận diện thương hiệu, tương tác khách hàng và những đánh giá tích cực từ đối tác. Điều này giúp khách hàng tiềm năng hiểu rõ hơn về năng lực và sự chuyên nghiệp của chúng tôi trong việc cung cấp các giải pháp công nghệ tiếp thị chất lượng cao.",
    activeClientsBadge: "10k+",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    metrics: [
      {
        id: "m-1",
        percent: 90,
        title: "Dự án thành công",
        description: "Chiến lược tiếp thị áp dụng và kết quả vượt kỳ vọng"
      },
      {
        id: "m-2",
        percent: 95,
        title: "Phản hồi tích cực",
        description: "Những lời khen ngợi và nhận xét về chất lượng dịch vụ"
      }
    ]
  },
  pricing: [
    {
      id: "pkg-1",
      name: "Gói Cơ Bản",
      description: "Cung cấp các tính năng cần thiết",
      price: "3,990,000₫",
      badge: "/ tháng",
      features: [
        { title: "Chiến lược kỹ thuật số toàn diện", desc: "" },
        { title: "Phân tích dữ liệu và báo cáo tiếp thị", desc: "" },
        { title: "Xây dựng và quản lý nội dung sáng tạo", desc: "" },
        { title: "Quản lý tương tác khách hàng", desc: "" },
        { title: "Phân tích và nghiên cứu thị trường", desc: "" }
      ]
    },
    {
      id: "pkg-2",
      name: "Gói Tiên Tiến",
      description: "Cung cấp các tính năng nâng cao",
      price: "5,990,000₫",
      badge: "/ tháng",
      features: [
        { title: "Chiến lược kỹ thuật số toàn diện", desc: "" },
        { title: "Phân tích dữ liệu và báo cáo tiếp thị", desc: "" },
        { title: "Xây dựng và quản lý nội dung sáng tạo", desc: "" },
        { title: "Quản lý tương tác khách hàng đa kênh", desc: "" },
        { title: "Phân tích và nghiên cứu thị trường chuyên sâu", desc: "" }
      ]
    },
    {
      id: "pkg-3",
      name: "Gói Doanh Nghiệp",
      description: "Cung cấp giải pháp toàn diện",
      price: "7,990,000₫",
      badge: "/ tháng",
      features: [
        { title: "Chiến lược kỹ thuật số toàn diện", desc: "" },
        { title: "Phân tích dữ liệu và báo cáo tiếp thị", desc: "" },
        { title: "Xây dựng và quản lý nội dung sáng tạo", desc: "" },
        { title: "Quản lý tương tác khách hàng VIP 24/7", desc: "" },
        { title: "Phân tích và nghiên cứu thị trường toàn cầu", desc: "" }
      ]
    }
  ],
  processSteps: [
    {
      id: "pr-1",
      stepNumber: "01",
      title: "Phân tích yêu cầu",
      description:
        "Chúng tôi sẽ thảo luận về mục tiêu, đối tượng khách hàng, thông điệp cần truyền tải và yêu cầu đặc biệt khác."
    },
    {
      id: "pr-2",
      stepNumber: "02",
      title: "Lên kế hoạch",
      description:
        "Sau khi hiểu yêu cầu của bạn, chúng tôi sẽ tiến hành nghiên cứu sâu về ngành, đối thủ và khách hàng mục tiêu."
    },
    {
      id: "pr-3",
      stepNumber: "03",
      title: "Tạo nội dung",
      description:
        "Chúng tôi sẽ tạo ra nội dung sáng tạo, chất lượng và phù hợp với mục tiêu kinh doanh của bạn."
    },
    {
      id: "pr-4",
      stepNumber: "04",
      title: "Đánh giá tối ưu hóa",
      description:
        "Đánh giá hiệu quả của nội dung thông qua các phương tiện đo lường như phân tích và phản hồi khách hàng."
    }
  ],
  partnerLogos: [
    { id: "pl-1", name: "SUNTECH", tagline: "Giải pháp đám mây" },
    { id: "pl-2", name: "hi-TECH", tagline: "Hạ tầng số hóa" },
    { id: "pl-3", name: "GOTECH", tagline: "Nền tảng thông minh" },
    { id: "pl-4", name: "TechCube", tagline: "Dữ liệu doanh nghiệp" },
    { id: "pl-5", name: "DIGITECH", tagline: "Chuyển đổi toàn diện" }
  ],
  team: [
    {
      id: "tm-1",
      name: "Xuân Trung",
      position: "Giám đốc Sản phẩm",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-2",
      name: "Lê Hào",
      position: "Nhà sáng lập & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-3",
      name: "Văn Long",
      position: "Quản lý Dự án",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "ts-1",
      author: "Phúc Lộc",
      role: "Khách hàng Doanh nghiệp",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi."
    },
    {
      id: "ts-2",
      author: "Huy Vũ",
      role: "Giám đốc Kinh doanh",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi."
    },
    {
      id: "ts-3",
      author: "An An",
      role: "Nhà sáng lập Thương hiệu",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ marketing của công ty này thực sự xuất sắc! Họ đã xây dựng một chiến lược marketing toàn diện và hiệu quả cho doanh nghiệp của tôi."
    }
  ],
  faqs: [
    {
      id: "fq-1",
      question:
        "Dịch vụ của bạn có phù hợp với các doanh nghiệp quy mô nhỏ không?",
      answer:
        "Đúng vậy! Chúng tôi cung cấp dịch vụ linh hoạt phù hợp với mọi quy mô doanh nghiệp, bao gồm cả các doanh nghiệp quy mô nhỏ và Startup. Chúng tôi tạo ra các gói dịch vụ tùy chỉnh để đáp ứng nhu cầu và ngân sách của bạn."
    },
    {
      id: "fq-2",
      question: "Bạn có những kênh quảng cáo nào mà bạn tư vấn sử dụng?",
      answer:
        "Chúng tôi triển khai đa kênh tích hợp (Omni-channel) bao gồm Google Search, YouTube, Facebook, Instagram, TikTok, LinkedIn B2B và hệ thống Remarketing tự động dựa trên hành vi người dùng."
    },
    {
      id: "fq-3",
      question: "Bạn có thể cung cấp dịch vụ SEO tổng thể không?",
      answer:
        "Có! Dịch vụ SEO tổng thể của chúng tôi bao gồm kiểm toán kỹ thuật Website (Technical SEO), nghiên cứu từ khóa ngữ nghĩa, xây dựng nội dung chuẩn EEAT và tối ưu tỷ lệ chuyển đổi tự nhiên bền vững."
    },
    {
      id: "fq-4",
      question: "Bạn có hỗ trợ khách hàng sau khi hoàn thành dự án không?",
      answer:
        "Chúng tôi duy trì đội ngũ hỗ trợ kỹ thuật và cố vấn tăng trưởng đồng hành 24/7 ngay cả sau khi bàn giao chiến dịch, kèm báo cáo định kỳ hàng tuần và hàng tháng."
    },
    {
      id: "fq-5",
      question: "Bạn có nhận dự án quốc tế không?",
      answer:
        "Chúng tôi đã triển khai thành công hơn 120 dự án đa quốc gia tại Đông Nam Á, Úc, Mỹ và Châu Âu với đội ngũ chuyên gia thông thạo đa ngôn ngữ."
    },
    {
      id: "fq-6",
      question: "Bạn có thể cung cấp báo giá dịch vụ chi tiết của bạn không?",
      answer:
        "Ngay sau buổi tư vấn khảo sát 30 phút miễn phí, chúng tôi sẽ gửi bản đề xuất chiến lược (Proposal) kèm bảng dự toán ngân sách và cam kết KPI chi tiết cho doanh nghiệp của bạn."
    }
  ],
  news: [
    {
      id: "nw-1",
      category: "GIẢI PHÁP CNTT",
      date: "30/05/2026 • Không có bình luận",
      title: "Chiến Lược Chuyển Đổi Số Toàn Diện Giúp Doanh Nghiệp Bứt Phá",
      excerpt:
        "Tối ưu hóa quy trình vận hành và gia tăng trải nghiệm khách hàng đa điểm chạm bằng nền tảng dữ liệu đám mây.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      category: "THIẾT KẾ UI/UX",
      date: "30/05/2026 • Không có bình luận",
      title: "Xu Hướng Thiết Kế Giao Diện Trải Nghiệm Người Dùng Chuẩn Chuyển Đổi",
      excerpt:
        "Xây dựng hành trình khách hàng mượt mà trên thiết bị di động giúp tăng 180% tỷ lệ đăng ký tư vấn.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      category: "THIẾT KẾ UI/UX",
      date: "30/05/2026 • Không có bình luận",
      title: "Ứng Dụng Trí Tuệ Nhân Tạo AI Trong Cá Nhân Hóa Nội Dung Tiếp Thị",
      excerpt:
        "Cách các tập đoàn công nghệ hàng đầu phân tích hành vi người tiêu dùng theo thời gian thực để tối ưu quảng cáo.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-4",
      category: "GIẢI PHÁP CNTT",
      date: "13/02/2026 • 1 Bình luận",
      title: "Quản Trị Hệ Thống CRM Đa Kênh Cho Doanh Nghiệp Quy Mô Vừa Và Lớn",
      excerpt:
        "Đồng bộ hóa dữ liệu đội ngũ kinh doanh và bộ phận chăm sóc khách hàng trên một nền tảng duy nhất.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-5",
      category: "THIẾT KẾ UI/UX",
      date: "13/02/2026 • Không có bình luận",
      title: "Bí Quyết Tối Ưu Tốc Độ Tải Trang Và Core Web Vitals Lên Top Google",
      excerpt:
        "Cải thiện hiệu suất kỹ thuật website giúp giảm tỷ lệ thoát trang và nâng cao điểm chất lượng quảng cáo.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-6",
      category: "GIẢI PHÁP CLOUD",
      date: "13/02/2026 • Không có bình luận",
      title: "Bảo Mật Dữ Liệu Doanh Nghiệp Trong Kỷ Nguyên Điện Toán Đám Mây",
      excerpt:
        "Giải pháp kiến trúc bảo mật đa lớp bảo vệ tài sản số và thông tin khách hàng trước các rủi ro mạng.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80"
    }
  ]
};

export default corporateProfile3DefaultData;
