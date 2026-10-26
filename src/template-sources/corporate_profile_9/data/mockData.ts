import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile9Data extends ClonedTemplateBaseData {
  heroBento: {
    cardTitle: string;
    customersCount: string;
    languagesCount: string;
    languagesLabel: string;
    audioLabel: string;
    rightImage: string;
    darkCardImage: string;
  };
  aboutCheckpoints: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  aboutImage: string;
  featuresGrid: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  solutionBanners: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const corporateProfile9DefaultData: CorporateProfile9Data = {
  business: {
    name: "THE MONA TECHNOLOGY",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "tech@themona.global"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:30 - 18:00",
    rating: 5.0,
    reviewCount: 10200,
    aboutTitle: "Giải pháp công nghệ sáng tạo",
    aboutText: [
      "Chúng tôi là tập đoàn công nghệ hàng đầu chuyên về phát triển phần mềm, dịch vụ công nghệ thông tin, trí tuệ nhân tạo (AI) và giải pháp chuyển đổi số toàn diện cho doanh nghiệp."
    ]
  },
  hero: {
    eyebrow: "CÔNG NGHỆ ĐỘT PHÁ",
    title: "Thúc đẩy doanh nghiệp lên tầm cao mới",
    subtitle:
      "Nâng tầm doanh nghiệp của bạn với phần mềm cải tiến của chúng tôi, cung cấp các giải pháp công nghệ tiên tiến được thiết kế để tối ưu hóa hoạt động",
    ctaText: "Khám phá",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85"
  },
  heroBento: {
    cardTitle: "Cung cấp các giải pháp công nghệ tiên tiến",
    customersCount: "10K+ Khách hàng",
    languagesCount: "17+",
    languagesLabel: "Ngôn ngữ hỗ trợ",
    audioLabel: "Nghe giới thiệu",
    rightImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    darkCardImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80"
  },
  aboutImage:
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
  aboutCheckpoints: [
    {
      id: "ac-1",
      title: "An toàn bảo mật thông tin",
      description:
        "Bảo vệ thông tin của bạn là trách nhiệm hàng đầu của chúng tôi. Chúng tôi cung cấp các giải pháp bảo mật hàng đầu để đảm bảo an toàn cho dữ liệu của bạn."
    },
    {
      id: "ac-2",
      title: "Trí tuệ Nhân tạo (AI) và Học máy",
      description:
        "Sử dụng công nghệ AI và Học máy chuyên sâu để tối ưu hóa quy trình kinh doanh và giúp bạn đưa ra những quyết định chiến lược."
    },
    {
      id: "ac-3",
      title: "Phát triển Ứng dụng Di động và Website",
      description:
        "Chúng tôi tạo ra các ứng dụng di động và nền tảng web đẳng cấp, giúp doanh nghiệp của bạn tiếp cận khách hàng một cách hiệu quả."
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Trí tuệ Nhân tạo (AI) và Học máy",
      category: "Dịch vụ • Tầm nhìn",
      description:
        "Huấn luyện mô hình AI chuyên biệt cho doanh nghiệp, tự động hóa phân tích dữ liệu lớn và cá nhân hóa hành trình khách hàng.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "srv-2",
      title: "An toàn và Bảo mật Thông tin",
      category: "Tối ưu hóa • Dịch vụ",
      description:
        "Giám sát an ninh mạng SOC 24/7, kiểm thử xâm nhập và mã hóa dữ liệu đa tầng đạt chuẩn quốc tế ISO/IEC 27001.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "srv-3",
      title: "Dịch vụ Đám mây (Cloud Computing)",
      category: "Tối ưu hóa • Dịch vụ",
      description:
        "Thiết kế kiến trúc hạ tầng đám mây linh hoạt, cân bằng tải tự động và tối ưu chi phí vận hành máy chủ.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80"
    }
  ],
  featuresGrid: [
    {
      id: "fg-1",
      title: "Tăng hiệu quả và năng suất",
      description:
        "Tự động hóa các quy trình công việc, giúp tăng hiệu quả và năng suất lao động."
    },
    {
      id: "fg-2",
      title: "Dự đoán và phân tích tốt",
      description:
        "Phân tích dữ liệu phức tạp và đưa ra dự đoán chính xác, giúp quyết định chiến lược một cách thông minh."
    },
    {
      id: "fg-3",
      title: "Cải thiện trải nghiệm",
      description:
        "Áp dụng AI trong dịch vụ khách hàng giúp cá nhân hóa trải nghiệm, cung cấp hỗ trợ tức thì và tăng cường tương tác."
    },
    {
      id: "fg-4",
      title: "Tối ưu hóa tiếp thị",
      description:
        "Tối ưu hóa chiến lược quảng cáo và tiếp thị dựa trên phân tích dữ liệu và hành vi người dùng."
    },
    {
      id: "fg-5",
      title: "Đảm bảo an ninh chặt chẽ",
      description:
        "Có thể phát hiện gian lận tài chính, gian lận thẻ tín dụng và cải thiện an ninh thông tin."
    },
    {
      id: "fg-6",
      title: "Dự báo và quản lý rủi ro",
      description:
        "Hỗ trợ trong việc dự báo rủi ro, quản lý danh mục đầu tư và tối ưu hóa chiến lược tài chính."
    },
    {
      id: "fg-7",
      title: "Tạo ra nội dung sáng tạo",
      description:
        "Tạo ra nội dung sáng tạo như âm nhạc, hình ảnh, văn bản dựa trên mô hình học máy."
    },
    {
      id: "fg-8",
      title: "Nghiên cứu và phát triển",
      description:
        "Tìm kiếm thông tin, phân tích dữ liệu và đưa ra dự đoán trong nhiều lĩnh vực nghiên cứu và phát triển."
    }
  ],
  solutionBanners: [
    {
      id: "sol-1",
      title: "Ứng dụng Di động Thương mại Điện tử",
      subtitle: "Nền tảng mua sắm đa kênh tích hợp gợi ý thông minh bằng AI",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=85"
    },
    {
      id: "sol-2",
      title: "Hệ thống Quản lý Khách hàng",
      subtitle: "Quản trị dữ liệu tập trung CRM & ERP thời gian thực",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Công ty làm việc trong lĩnh vực nào?",
      answer:
        "Chúng tôi là một công ty công nghệ hàng đầu chuyên về phát triển phần mềm, dịch vụ công nghệ thông tin và giải pháp số hóa cho doanh nghiệp."
    },
    {
      id: "faq-2",
      question: "Có những dự án nổi bật nào mà công ty đã thực hiện?",
      answer:
        "Chúng tôi đã triển khai hơn 350+ dự án chuyển đổi số, hệ thống ngân hàng số, siêu ứng dụng thương mại điện tử và nền tảng phân tích dữ liệu AI cho các tập đoàn lớn."
    },
    {
      id: "faq-3",
      question: "Công ty chúng tôi có phương châm làm việc là gì?",
      answer:
        "Lấy đổi mới sáng tạo và bảo mật tuyệt đối làm cốt lõi, đồng hành cùng khách hàng từ khâu tư vấn kiến trúc đến vận hành tăng trưởng bền vững."
    },
    {
      id: "faq-4",
      question: "Làm thế nào để hợp tác với công ty?",
      answer:
        "Quý doanh nghiệp chỉ cần để lại thông tin hoặc liên hệ hotline, đội ngũ kiến trúc sư giải pháp của chúng tôi sẽ tư vấn và gửi đề xuất kỹ thuật trong vòng 24 giờ."
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Nguyễn Thị Hương",
      rating: 5,
      content:
        "Dịch vụ triển khai nhanh chóng, nhân viên thân thiện và chu đáo. Giải pháp phần mềm tại đây luôn mang lại trải nghiệm tuyệt vời."
    },
    {
      id: "rv-2",
      author: "Phạm Thị Ánh",
      rating: 5,
      content:
        "Thiết kế tuyệt vời và tối ưu hóa cơ sở dữ liệu vượt trội. Đội ngũ hỗ trợ bàn giao hệ thống chìa khóa trao tay giúp doanh nghiệp khởi động nhanh chóng và dễ dàng."
    },
    {
      id: "rv-3",
      author: "Nguyễn Văn Hoàng",
      rating: 5,
      content:
        "Chất lượng sản phẩm rất tốt, dịch vụ chăm sóc khách hàng rất tận tâm. Sẽ tiếp tục hợp tác lâu dài. Họ luôn lắng nghe và giải quyết mọi vấn đề của khách hàng một cách nhanh chóng."
    },
    {
      id: "rv-4",
      author: "Trần Văn Nam",
      rating: 5,
      content:
        "Dịch vụ giao nhận hệ thống nhanh chóng, kỹ sư thân thiện và chu đáo. Hợp tác tại đây luôn là trải nghiệm tuyệt vời."
    },
    {
      id: "rv-5",
      author: "Trần Thị Mai",
      rating: 5,
      content:
        "Chất lượng sản phẩm rất tốt, dịch vụ chăm sóc khách hàng rất tận tâm. Luôn lắng nghe và giải quyết mọi bài toán kỹ thuật của doanh nghiệp một cách nhanh chóng."
    },
    {
      id: "rv-6",
      author: "Phạm Thị Hà",
      rating: 5,
      content:
        "Hệ thống vận hành ổn định, nhân viên thân thiện và chu đáo. Triển khai dự án tại đây luôn là trải nghiệm tuyệt vời."
    },
    {
      id: "rv-7",
      author: "Nguyễn Thị Lan",
      rating: 5,
      content:
        "Kiến trúc phần mềm tuyệt vời và tối ưu hóa hiệu năng cao, giúp bộ máy vận hành trơn tru và tăng trưởng doanh số rõ rệt."
    },
    {
      id: "rv-8",
      author: "Lê Đức Thành",
      rating: 5,
      content:
        "Tư vấn giải pháp nhanh chóng, đội ngũ chuyên gia giàu kinh nghiệm và hỗ trợ kỹ thuật 24/7 cực kỳ trách nhiệm."
    }
  ],
  clients: [
    { id: "cl-1", name: "MINIMIZE INTERIOR" },
    { id: "cl-2", name: "NORDYNE DEFENSE" },
    { id: "cl-3", name: "MATRIKA TECH" },
    { id: "cl-4", name: "QUO ENTERPRISE" },
    { id: "cl-5", name: "AGRIMAX CLOUD" },
    { id: "cl-6", name: "NOVA SYSTEMS" }
  ],
  news: [
    {
      id: "nw-1",
      title: "Tiềm năng và Triển vọng: Làm thế nào Công nghệ đang Thay đổi Thế giới",
      date: "15/01/2024",
      category: "/ AI / Doanh nghiệp /",
      excerpt: "Ứng dụng trí tuệ nhân tạo tạo sinh trong quản trị doanh nghiệp hiện đại.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Điểm Nhấn Công nghệ: Sự Đổi Mới và Sáng Tạo trong Doanh nghiệp",
      date: "15/01/2024",
      category: "/ AI / Mạng Nơ-ron /",
      excerpt: "Kiến trúc điện toán đám mây thế hệ mới bảo mật đa lớp.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Xu hướng Công nghệ 2024: Đường hướng cho Sự Phát triển",
      date: "15/01/2024",
      category: "/ Doanh nghiệp / Công nghệ /",
      excerpt: "Chiến lược chuyển đổi số giúp tối ưu 40% chi phí vận hành.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Phát triển Ứng dụng Di động: Bí quyết để Tạo Ra Trải nghiệm Người dùng Tốt nhất",
      date: "15/01/2024",
      category: "/ AI / Doanh nghiệp /",
      excerpt: "Tối ưu giao diện UI/UX và tốc độ phản hồi trên thiết bị di động.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-5",
      title: "Chuỗi khối (Blockchain) và Tiềm năng Cách mạng Hệ thống Giao dịch",
      date: "15/01/2024",
      category: "/ AI / Mạng Nơ-ron /",
      excerpt: "Hợp đồng thông minh minh bạch hóa chuỗi cung ứng toàn cầu.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-6",
      title: "Trí tuệ nhân tạo (AI): Phát triển và Ứng dụng trong Công nghệ",
      date: "15/01/2024",
      category: "/ Doanh nghiệp / Công nghệ /",
      excerpt: "Tự động hóa phân tích dữ liệu lớn và dự báo xu hướng thị trường.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export const defaultData = corporateProfile9DefaultData;
export const mockData = corporateProfile9DefaultData;
export default corporateProfile9DefaultData;
