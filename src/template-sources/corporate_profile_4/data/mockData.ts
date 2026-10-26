import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile4Data extends ClonedTemplateBaseData {
  transportModes: Array<{
    id: string;
    label: string;
    icon: string;
  }>;
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
    checklist: string[];
    founderName: string;
    founderRole: string;
    founderAvatar: string;
    gallery: string[];
  };
  freightSolutions: Array<{
    id: string;
    title: string;
    description: string;
    bullets: string[];
    icon: string;
  }>;
  parallaxBanner: {
    title: string;
    ctaText: string;
    backgroundImage: string;
  };
  experienceSection: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    stats: Array<{
      id: string;
      number: string;
      label: string;
      color: "coral" | "cyan";
    }>;
  };
  whyChooseUs: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  fixedPricing: Array<{
    id: string;
    mode: string;
    price: string;
    unit: string;
    featured?: boolean;
    buttonStyle: "coral" | "cyan" | "navy";
    features: string[];
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  branches: Array<{
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
  }>;
  footerGallery: string[];
}

export const corporateProfile4DefaultData: CorporateProfile4Data = {
  business: {
    name: "MONA LOGISTICS",
    phone: ["031 3728 397", "1900 636 648"],
    email: ["info@themona.global", "logistics@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, Q.Tân Bình, TP.HCM",
    workingHours: "T2-T6: 8h-18h",
    rating: 4.9,
    reviewCount: 680,
    aboutTitle: "Vận Chuyển Nhanh Chóng",
    aboutText: [
      "Chúng tôi sẽ vận chuyển những đơn hàng của bạn một cách nhanh chóng và an toàn trên toàn mạng lưới giao thương quốc tế.",
      "Hãy bước lên và trở thành một trong những 49,494 khách hàng thành công của MONA LOGISTICS, để bạn có cơ hội đứng trên hàng đầu và tận hưởng những trải nghiệm chuỗi cung ứng tuyệt vời."
    ],
    experienceYears: "18+"
  },
  hero: {
    eyebrow: "Chào Mừng Đến Với Dịch Vụ Logistics Của Chúng Tôi!",
    title: "Giải Pháp Vận Tải Đa Phương Thức & Chuỗi Cung Ứng Toàn Cầu",
    subtitle:
      "Kết nối giao thương đường bộ, đường hàng không, đường biển và kho vận thông minh với độ chính xác tuyệt đối.",
    ctaText: "BÁO GIÁ VẬN CHUYỂN",
    ctaLink: "#gia-co-dinh",
    backgroundImage:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  transportModes: [
    { id: "tm-1", label: "Đường Bộ", icon: "truck" },
    { id: "tm-2", label: "Đường Không", icon: "plane" },
    { id: "tm-3", label: "Đường Thủy", icon: "ship" },
    { id: "tm-4", label: "Đường Sắt", icon: "train" },
    { id: "tm-5", label: "Tự Động", icon: "drone" },
    { id: "tm-6", label: "Đóng Gói", icon: "box" }
  ],
  aboutSection: {
    eyebrow: "Về Chúng Tôi",
    title: "Vận Chuyển Nhanh Chóng",
    description:
      "Chúng tôi sẽ vận chuyển những đơn hàng của bạn một cách nhanh chóng và an toàn.",
    checklist: [
      "Giá Cả Minh Bạch",
      "Hỗ Trợ Trực Tuyến 24/7",
      "Giao Hàng Đúng Thời Gian",
      "Tối Ưu Hóa Chi Phí",
      "Thời Gian Phản Hồi Nhanh",
      "Hoạt Động Kho Vận"
    ],
    founderName: "Xuân Trung",
    founderRole: "CEO & Founder, MONA LOGISTICS",
    founderAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80"
    ]
  },
  freightSolutions: [
    {
      id: "fs-1",
      title: "Đường Bộ",
      description:
        "Kinh nghiệm trong vận tải đường bộ và điều phối ngành công nghiệp.",
      icon: "truck",
      bullets: [
        "Bổ sung hàng & lấy hàng tận kho",
        "Đóng gói & phân phối toàn quốc",
        "Vận hành hệ thống kho bãi chuẩn"
      ]
    },
    {
      id: "fs-2",
      title: "Đường Hàng Không",
      description:
        "Kinh nghiệm tổ chức vận tải hàng không và điều phối ngành công nghiệp.",
      icon: "plane",
      bullets: [
        "Vận chuyển hàng hóa tổng hợp",
        "Dịch vụ thuê chuyến chuyên biệt",
        "Giám sát hành trình thời gian thực"
      ]
    },
    {
      id: "fs-3",
      title: "Đường Biển",
      description:
        "Kinh nghiệm xuất sắc trong tổ chức vận tải biển và điều phối ngành công nghiệp.",
      icon: "ship",
      bullets: [
        "Vận chuyển hàng lẻ (LCL)",
        "Vận chuyển nguyên container (FCL)",
        "Giải pháp vận tải đa phương thức"
      ]
    }
  ],
  parallaxBanner: {
    title: "Nhà Cung Cấp Dịch Vụ Logistics Hợp Đồng Hàng Đầu Thế Giới",
    ctaText: "Xem Thêm",
    backgroundImage:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
  },
  experienceSection: {
    eyebrow: "Trải Nghiệm",
    title: "Cung Cấp Các Dịch Vụ Chất Lượng",
    description:
      "Hãy bước lên và trở thành một trong những 49,494 khách hàng thành công của MONA LOGISTICS, để bạn có cơ hội đứng trên hàng đầu và tận hưởng những trải nghiệm tuyệt vời.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
    stats: [
      {
        id: "ex-1",
        number: "95%",
        label: "Chất Lượng",
        color: "coral"
      },
      {
        id: "ex-2",
        number: "25%",
        label: "Tiết Kiệm Thời Gian",
        color: "cyan"
      }
    ]
  },
  whyChooseUs: [
    {
      id: "wc-1",
      title: "Giá cả minh bạch",
      description:
        "Chúng tôi rõ ràng và minh bạch các vấn đề liên quan đến giá thành của dịch vụ của chúng tôi.",
      icon: "dollar"
    },
    {
      id: "wc-2",
      title: "Giao hàng đúng hẹn",
      description:
        "Chúng tôi cam kết hoàn thành tất cả các dự án đúng thời hạn được đề ra cùng với các khách hàng quý báu của chúng tôi.",
      icon: "truck"
    },
    {
      id: "wc-3",
      title: "Hỗ Trợ Trực Tuyến 24/7",
      description:
        "Chúng tôi sẽ có nhân viên túc trực 24/7 để hỗ trợ các bạn giải đáp các thắc mắc về các dịch vụ của chúng tôi.",
      icon: "headset"
    },
    {
      id: "wc-4",
      title: "Đối tác Logistics Toàn Cầu",
      description:
        "Chúng tôi đang mở rộng hợp tác các đối tác trong và ngoài nước với mục tiêu là có thể vận chuyển ra toàn cầu.",
      icon: "globe"
    },
    {
      id: "wc-5",
      title: "Bảo hiểm & cam kết",
      description:
        "Chúng tôi cam kết về chất lượng dịch vụ và thời gian vận chuyển sẽ đúng với cam kết ban đầu với khách hàng.",
      icon: "shield"
    }
  ],
  fixedPricing: [
    {
      id: "fp-1",
      mode: "Đường Bộ",
      price: "90.000 Đ",
      unit: "1 kg",
      buttonStyle: "coral",
      features: [
        "Phương tiện vận chuyển đa dạng.",
        "Quy trình làm việc nhanh chóng, hoạt động 24/24.",
        "100% đội xe được trang bị thiết bị định vị giám sát hành trình vận tải (GPS) và quản lý bằng phần mềm điều vận thông minh, luôn đảm bảo chất lượng dịch vụ cho khách hàng."
      ]
    },
    {
      id: "fp-2",
      mode: "Đường Không",
      price: "290.000 Đ",
      unit: "1 kg",
      featured: true,
      buttonStyle: "cyan",
      features: [
        "Chuyển phát quốc tế chỉ trong vòng 3 – 7 ngày.",
        "Vận chuyển tất cả mọi loại hàng hóa từ thực phẩm, tài liệu, thậm chí là cả cây cảnh.",
        "Cước phí vận chuyển trái cây bằng đường hàng không đảm bảo hợp lý nhất và cạnh tranh nhất.",
        "Thủ tục gửi hàng hóa đơn giản, nhanh gọn."
      ]
    },
    {
      id: "fp-3",
      mode: "Đường Biển",
      price: "199.000 Đ",
      unit: "1 kg",
      buttonStyle: "navy",
      features: [
        "Vận chuyển đường biển an toàn",
        "Giao hàng nhanh, đúng lịch dự kiến",
        "Giá cước vận chuyển tàu biển rẻ, cạnh tranh",
        "Chất lượng dịch vụ và phong cách chuyên nghiệp",
        "Sẵn sàng bồi thường tổn thất hàng hóa nếu do lỗi vận chuyển của chúng tôi."
      ]
    }
  ],
  team: [
    {
      id: "tm-1",
      name: "LÊ HÀO",
      position: "Nhà Sáng Lập",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-2",
      name: "QUỐC KHANG",
      position: "Giám Đốc Điều Hành",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-3",
      name: "VĂN LONG",
      position: "Quản Lý Khu Vực",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-4",
      name: "VĂN SÂM",
      position: "Kỹ Sư Vận Hành",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Xuân Trung",
      role: "Nhà sáng lập & CEO",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ logistics của họ rất chuyên nghiệp và đáng tin cậy. Tôi đã nhận được hàng hóa một cách an toàn và đúng hẹn mỗi lần sử dụng dịch vụ của họ."
    },
    {
      id: "rv-2",
      author: "Lê Hào",
      role: "Giám đốc Chuỗi cung ứng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Đội ngũ hỗ trợ khách hàng của họ rất tận tình và nhanh nhẹn. Tôi luôn nhận được sự giúp đỡ kịp thời mỗi khi có vấn đề phát sinh trong thông quan."
    }
  ],
  faqs: [
    {
      id: "fq-1",
      question:
        "Làm thế nào các công nghệ mới, như trí tuệ nhân tạo và blockchain, đang ảnh hưởng đến quy trình vận chuyển và quản lý kho trong ngành logistics?",
      answer:
        "Các công nghệ mới đang giúp tối ưu hóa quy trình vận chuyển bằng cách cải thiện dự đoán và quản lý cung ứng, giảm thiểu lỗi sai và tăng tính hiệu quả. Blockchain cũng giúp tăng cường an ninh và minh bạch trong quy trình giao nhận hàng hóa."
    },
    {
      id: "fq-2",
      question:
        "Thách thức chính của việc tích hợp hệ thống logistics với các giải pháp IoT (Internet Vạn Vật) là gì, và làm thế nào các doanh nghiệp đang giải quyết vấn đề này?",
      answer:
        "Chúng tôi trang bị cảm biến IoT theo dõi nhiệt độ, độ ẩm và định vị GPS thời gian thực trên toàn bộ container lạnh và đội xe đầu kéo, giúp khách hàng giám sát trạng thái lô hàng trực tuyến 24/7."
    },
    {
      id: "fq-3",
      question:
        "Làm thế nào ngành logistics đang thích ứng với các yêu cầu về bảo vệ môi trường và giảm khí thải carbon?",
      answer:
        "Chúng tôi áp dụng thuật toán tối ưu hóa lộ trình vận tải đa phương thức, kết hợp sử dụng bao bì tái chế và phương tiện tiêu chuẩn khí thải Euro 5 nhằm giảm 30% lượng phát thải CO2."
    },
    {
      id: "fq-4",
      question:
        "Tác động của sự chuyển đổi số trong ngành logistics là gì và làm thế nào các doanh nghiệp đang tận dụng cơ hội từ điều này?",
      answer:
        "Chuyển đổi số giúp tự động hóa chứng từ hải quan điện tử, rút ngắn 40% thời gian thông quan xuất nhập khẩu và tối ưu hóa tồn kho theo thời gian thực."
    }
  ],
  news: [
    {
      id: "nw-1",
      category: "Logistics",
      date: "26 Tháng Hai, 2026",
      title: "Công điện về tăng cường kết nối logistics thúc đẩy tiêu thụ",
      excerpt:
        "Công điện gửi Bộ trưởng các Bộ: Nông nghiệp và Phát triển nông thôn, Công Thương về mở rộng luồng xanh vận tải...",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      category: "Vận Tải Biển",
      date: "26 Tháng Hai, 2026",
      title: "‘Nóng’ đầu tư phát triển hạ tầng cảng biển toàn cầu",
      excerpt:
        "Trong năm ngoái, số dự án đầu tư trong lĩnh vực hạ tầng cảng nước sâu và trung tâm trung chuyển quốc tế tăng mạnh...",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      category: "Giao Nhận",
      date: "26 Tháng Hai, 2026",
      title: "Rộng đường kết nối lưu thông hàng hóa xuất nhập khẩu",
      excerpt:
        "Đây được xem là cơ sở thúc đẩy các hoạt động sản xuất công nghiệp và chuỗi cung ứng xuyên biên giới phát triển...",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=700&q=80"
    }
  ],
  branches: [
    {
      id: "br-1",
      name: "Công Ty TNHH MONA MEDIA",
      address: "1073/23 Đ. Cách Mạng Tháng 8, P.7, Tân Bình, Thành phố Hồ Chí Minh",
      phone: "0313728397",
      email: "info@themona.global"
    },
    {
      id: "br-2",
      name: "Công Ty TNHH PHẦN MỀM MONA",
      address: "1073/23 Đ. Cách Mạng Tháng 8, P.7, Tân Bình, Thành phố Hồ Chí Minh",
      phone: "0316894442",
      email: "info@themona.global"
    },
    {
      id: "br-3",
      name: "Công Ty TNHH MONA HOST",
      address: "1073/23 Đ. Cách Mạng Tháng 8, P.7, Tân Bình, Thành phố Hồ Chí Minh",
      phone: "0317401755",
      email: "info@themona.global"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=300&q=80"
  ]
};

export default corporateProfile4DefaultData;
