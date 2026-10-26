import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LeadGeneration2Data extends ClonedTemplateBaseData {
  founderQuote: {
    quote: string;
    name: string;
    role: string;
    avatar: string;
  };
  visionMission: {
    title: string;
    description: string;
  };
  aboutHighlight: {
    yearsNumber: string;
    yearsLabel: string;
    image: string;
  };
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  processSteps: Array<{
    id: string;
    step: string;
    title: string;
    description: string;
  }>;
  completedProjectsCount: string;
  ctaGallery: {
    leftImage: string;
    rightImage: string;
  };
  teamMembersDetailed: Array<{
    id: string;
    index: string;
    name: string;
    role: string;
    bio: string;
    badge: string;
  }>;
  serviceOptions: string[];
}

export const leadGeneration2DefaultData: LeadGeneration2Data = {
  business: {
    name: "MONA DREAM",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "contact@monadream.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 5.0,
    reviewCount: 280,
    aboutTitle: "Phù hợp với nhu cầu và mong muốn",
    aboutText: [
      "Chúng tôi kiến tạo không gian sống bằng ánh sáng và nghệ thuật kiến trúc đương đại. Mỗi dự án bất động sản từ biệt thự nghỉ dưỡng, mặt tiền thương mại đến khu đô thị thông minh đều kết hợp hài hòa giữa giá trị thẩm mỹ và tiềm năng sinh lời bền vững."
    ]
  },
  hero: {
    eyebrow: "THIẾT KẾ NỘI THẤT & BẤT ĐỘNG SẢN",
    title: "Đội ngũ giàu kinh nghiệm và chuyên nghiệp",
    subtitle:
      "Tận tâm hỗ trợ khách hàng từ khi bắt đầu tìm kiếm bất động sản mơ ước cho đến khi hoàn tất giao dịch và bàn giao không gian sống hoàn mỹ.",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#gioi-thieu",
    secondaryCtaText: "Xem dự án",
    secondaryCtaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85"
  },
  founderQuote: {
    quote:
      "Tất cả các dự án đều được lựa chọn kỹ lưỡng và đáp ứng những tiêu chuẩn cao về chất lượng, thiết kế và vị trí.",
    name: "Robert Jhon",
    role: "Nhà sáng lập & CEO",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
  },
  visionMission: {
    title: "Tầm Nhìn → Sứ Mệnh",
    description:
      "Tận tâm để hỗ trợ khách hàng từ khi bắt đầu tìm kiếm cho đến khi hoàn tất giao dịch"
  },
  aboutHighlight: {
    yearsNumber: "24",
    yearsLabel: "NĂM KINH NGHIỆM",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
  },
  services: [
    {
      id: "srv-1",
      title: "Tư vấn và mua",
      description:
        "Với đội ngũ chuyên viên giàu kinh nghiệm cung cấp tư vấn toàn diện về quy trình mua bán bất động sản."
    },
    {
      id: "srv-2",
      title: "Dịch vụ cho thuê",
      description:
        "Với đội ngũ chuyên viên giàu kinh nghiệm cung cấp tư vấn toàn diện về quy trình khai thác và cho thuê bất động sản."
    },
    {
      id: "srv-3",
      title: "Dịch vụ quản lý",
      description:
        "Với đội ngũ chuyên viên giàu kinh nghiệm cung cấp giải pháp vận hành và quản lý tài sản bất động sản."
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Có thể nhờ tư vấn về quy trình mua bán bất động sản không?",
      answer:
        "Tất nhiên! Chúng tôi có đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng tư vấn và hỗ trợ bạn trong quá trình mua bán bất động sản. Chúng tôi sẽ giúp bạn từ việc tìm kiếm căn nhà phù hợp, đàm phán giá cả, kiểm tra pháp lý cho đến hoàn tất giao dịch. Với sự tận tâm và chuyên nghiệp, chúng tôi sẽ đảm bảo bạn có trải nghiệm mua bán an lành và thành công."
    },
    {
      id: "faq-2",
      question: "Có dịch vụ cho thuê bất động sản không?",
      answer:
        "Có. Chúng tôi hỗ trợ chủ sở hữu tìm kiếm khách thuê cao cấp, thẩm định hợp đồng thuê dài hạn và tối ưu hóa tỷ suất lợi nhuận khai thác dòng tiền hàng năm."
    },
    {
      id: "faq-3",
      question: "Có thể nhờ quản lý bất động sản của tôi không?",
      answer:
        "Dịch vụ quản lý tài sản trọn gói của chúng tôi bao gồm bảo trì kỹ thuật định kỳ, quản lý cư dân/khách thuê, thu hộ và báo cáo tài chính minh bạch hàng tháng."
    },
    {
      id: "faq-4",
      question: "Tôi muốn đầu tư vào bất động sản, liệu có thể tư vấn cho tôi không?",
      answer:
        "Chuyên gia phân tích đầu tư của chúng tôi sẽ xây dựng danh mục bất động sản đón đầu quy hoạch hạ tầng với biên độ tăng giá và tính thanh khoản vượt trội."
    }
  ],
  processSteps: [
    {
      id: "ps-1",
      step: "01",
      title: "Tư vấn và định hình nhu cầu",
      description:
        "Gửi tin nhắn hoặc đặt lịch hẹn trực tiếp để chuyên gia phân tích khẩu vị đầu tư và ngân sách của bạn."
    },
    {
      id: "ps-2",
      step: "02",
      title: "Tìm kiếm và lựa chọn phù hợp",
      description:
        "Chọn lọc danh mục dự án đắt giá nhất, khảo sát thực tế và đánh giá chi tiết tiềm năng tăng trưởng."
    },
    {
      id: "ps-3",
      step: "03",
      title: "Hỗ trợ và hoàn tất giao dịch",
      description:
        "Đàm phán điều khoản tối ưu, hoàn thiện hồ sơ pháp lý minh bạch và bàn giao trọn gói chìa khóa trao tay."
    }
  ],
  completedProjectsCount: "2,000",
  projects: [
    {
      id: "prj-1",
      title: "Colombus House",
      category: "Thiết kế nội thất",
      location: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prj-2",
      title: "Colombus House",
      category: "Thiết kế nội thất",
      location: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prj-3",
      title: "Colombus House",
      category: "Thiết kế nội thất",
      location: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prj-4",
      title: "Colombus House",
      category: "Thiết kế nội thất",
      location: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prj-5",
      title: "Colombus House",
      category: "Thiết kế nội thất",
      location: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prj-6",
      title: "Colombus House",
      category: "Thiết kế nội thất",
      location: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    }
  ],
  stats: [
    { id: "st-1", number: "82", title: "Dự Án Thành Công" },
    { id: "st-2", number: "42", title: "Khách Hàng Hài Lòng" },
    { id: "st-3", number: "24", title: "Năm Kinh Nghiệm" },
    { id: "st-4", number: "37", title: "Phần Thưởng Danh Dự" }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Nguyễn Văn Long",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Tôi rất hài lòng với dịch vụ tư vấn của công ty. Đội ngũ nhân viên rất chuyên nghiệp và tận tâm. Họ lắng nghe và hiểu rõ nhu cầu của tôi, và tìm được căn nhà hoàn hảo cho tôi"
    }
  ],
  ctaGallery: {
    leftImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
  },
  teamMembersDetailed: [
    {
      id: "tm-1",
      index: "/1",
      name: "John Nguyen",
      role: "Giám đốc điều hành",
      bio: "John có kiến thức sâu rộng về thị trường bất động sản và luôn đưa ra những chiến lược đổi mới để đáp ứng nhu cầu của khách hàng.",
      badge: "Toàn thời gian"
    },
    {
      id: "tm-2",
      index: "/2",
      name: "Maxwell Tran",
      role: "Chuyên viên tư vấn",
      bio: "Anh có khả năng nhận diện và đánh giá tiềm năng tăng trưởng của các dự án bất động sản.",
      badge: "Toàn thời gian"
    },
    {
      id: "tm-3",
      index: "/3",
      name: "Michael Nguyen",
      role: "Chuyên gia pháp lý",
      bio: "Anh có khả năng nhận diện và đánh giá tiềm năng tăng trưởng cùng tính minh bạch pháp lý của các dự án bất động sản.",
      badge: "Toàn thời gian"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Xu hướng kiến trúc biệt thự xanh bền vững và tối ưu ánh sáng tự nhiên",
      date: "04",
      category: "PHÁT TRIỂN THIẾT KẾ",
      excerpt: "Th11",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Chiến lược hoạch định danh mục đầu tư bất động sản hạng sang năm nay",
      date: "04",
      category: "QUY HOẠCH DỰ ÁN",
      excerpt: "Th11",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  serviceOptions: [
    "Tư vấn và mua",
    "Dịch vụ quản lý",
    "Tư vấn đầu tư",
    "Khác"
  ]
};

export const defaultData = leadGeneration2DefaultData;
export const mockData = leadGeneration2DefaultData;
export default leadGeneration2DefaultData;
