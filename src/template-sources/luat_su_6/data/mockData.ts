import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu6CoreFeature {
  id: string;
  title: string;
  description: string;
  icon: "briefcase" | "scale" | "users" | "handshake" | "globe" | "shield";
}

export interface LuatSu6PracticeCard {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  bulletPoints: string[];
}

export interface LuatSu6Lawyer {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  experience: string;
  education: string;
  phone: string;
  email: string;
}

export interface LuatSu6Data extends ClonedTemplateBaseData {
  introSplit: {
    redTitle: string;
    redDescription: string;
    rightTitle: string;
    rightCtaText: string;
    rightBackgroundImage: string;
  };
  directorShowcase: {
    directorName: string;
    directorRole: string;
    directorImage: string;
    backgroundImage: string;
    features: LuatSu6CoreFeature[];
  };
  hotlineBanner: {
    question: string;
    subtext: string;
  };
  practiceAreas: LuatSu6PracticeCard[];
  lawyerProfiles: LuatSu6Lawyer[];
  consultationSection: {
    title: string;
    subtitle: string;
    lawyerImage: string;
    backgroundImage: string;
  };
}

export const luatSu6DefaultData: LuatSu6Data = {
  business: {
    name: "MONA LAWYER",
    phone: ["076 922 0162", "0909 922 016"],
    email: ["demonhunterg@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 640,
    aboutTitle: "Giới thiệu sơ lược",
    aboutText: [
      "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp. Mọi trường hợp đều rất quan trọng đối với chúng tôi và chúng tôi luôn quan tâm đến khách hàng một cách nghiêm túc. Chúng tôi có 98% khách hàng hài lòng."
    ],
    highlights: [
      "Hơn 20 năm kinh nghiệm thực chiến trong tư vấn pháp lý và đại diện tranh tụng",
      "Giải quyết thành công hơn 2.000 hồ sơ doanh nghiệp, dân sự và thương mại",
      "98% khách hàng cá nhân và doanh nghiệp hài lòng tuyệt đối về kết quả bảo vệ quyền lợi"
    ]
  },
  hero: {
    eyebrow: "Chào mừng đến với",
    subtitle: "Chào mừng đến với",
    title: "MONA LAWYER",
    description:
      "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
    ctaText: "Tìm hiểu ngay",
    ctaLink: "#practice-areas",
    secondaryCtaText: "Miễn phí tư vấn",
    secondaryCtaLink: "#free-consultation",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  introSplit: {
    redTitle: "Chúng tôi là công ty dịch vụ pháp lý đầy đủ tốt nhất có trụ sở tại TP.HCM",
    redDescription:
      "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp. Mọi trường hợp đều rất quan trọng đối với chúng tôi và chúng tôi luôn quan tâm đến họ một cách nghiêm túc. Chúng tôi có 98% khách hàng hài lòng.",
    rightTitle: "Giới thiệu sơ lược",
    rightCtaText: "Tìm hiểu ngay",
    rightBackgroundImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
  },
  directorShowcase: {
    directorName: "Thúy Yên",
    directorRole: "Giám đốc",
    directorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    backgroundImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80",
    features: [
      {
        id: "feat-1",
        title: "Thủ tục khởi kiện",
        description:
          "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp.",
        icon: "briefcase"
      },
      {
        id: "feat-2",
        title: "Giải quyết tranh chấp",
        description:
          "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp.",
        icon: "scale"
      },
      {
        id: "feat-3",
        title: "Giải quyết ly hôn",
        description:
          "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp.",
        icon: "users"
      },
      {
        id: "feat-4",
        title: "Luật doanh nghiệp",
        description:
          "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp.",
        icon: "handshake"
      },
      {
        id: "feat-5",
        title: "Kết hôn – Di trú",
        description:
          "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp.",
        icon: "globe"
      },
      {
        id: "feat-6",
        title: "Luật sở hữu trí tuệ",
        description:
          "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp.",
        icon: "shield"
      }
    ]
  },
  hotlineBanner: {
    question: "Bạn đang có vấn đề về pháp lý mà không biết cách giải quyết ?",
    subtext: "Hãy nhấc máy gọi ngay cho chúng tôi theo số:"
  },
  practiceAreas: [
    {
      id: "pa-1",
      title: "Ngân hàng và tài chính",
      category: "Tài chính – Tín dụng",
      description:
        "Tư vấn cấu trúc khoản vay, hợp đồng tín dụng, bảo lãnh ngân hàng, xử lý nợ xấu và đại diện giải quyết tranh chấp tài chính – ngân hàng.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Thẩm định pháp lý hồ sơ tín dụng và tài sản bảo đảm",
        "Đàm phán tái cơ cấu nợ và xử lý tài sản thế chấp",
        "Đại diện tranh tụng các vụ án tín dụng tại Tòa án"
      ]
    },
    {
      id: "pa-2",
      title: "Tai nạn xe hơi",
      category: "Bồi thường thiệt hại",
      description:
        "Bảo vệ quyền lợi hợp pháp cho nạn nhân và chủ phương tiện trong các vụ va chạm giao thông, giám định thiệt hại và đòi bồi thường bảo hiểm.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Xác định trách nhiệm dân sự và mức bồi thường thiệt hại",
        "Làm việc trực tiếp với cơ quan điều tra và công ty bảo hiểm",
        "Đại diện thương lượng hoặc khởi kiện yêu cầu bồi thường"
      ]
    },
    {
      id: "pa-3",
      title: "Vết thương cá nhân",
      category: "Dân sự – Bảo hiểm",
      description:
        "Tư vấn yêu cầu bồi thường thiệt hại về sức khỏe, chi phí y tế, tổn thất tinh thần và thu nhập bị mất do hành vi xâm phạm của bên thứ ba.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Thu thập hồ sơ giám định thương tật và chứng từ y tế",
        "Tính toán đầy đủ các khoản bồi thường theo luật định",
        "Bảo vệ quyền lợi nạn nhân trong suốt quá trình tố tụng"
      ]
    },
    {
      id: "pa-4",
      title: "Luật gia đình",
      category: "Hôn nhân – Thừa kế",
      description:
        "Giải quyết trọn gói thủ tục ly hôn thuận tình, đơn phương, giành quyền nuôi con, phân chia tài sản chung và lập di chúc thừa kế hợp pháp.",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Tư vấn phân chia tài sản vợ chồng trong và sau hôn nhân",
        "Bảo vệ quyền trực tiếp nuôi con và nghĩa vụ cấp dưỡng",
        "Khai nhận di sản thừa kế và giải quyết tranh chấp di chúc"
      ]
    },
    {
      id: "pa-5",
      title: "Luật thương mại",
      category: "Kinh doanh – Thương mại",
      description:
        "Soạn thảo, rà soát hợp đồng mua bán hàng hóa quốc tế, đại lý thương mại, nhượng quyền thương hiệu và логистиics.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Soạn thảo và rà soát rủi ro hợp đồng kinh tế song ngữ",
        "Tư vấn thủ tục xuất nhập khẩu, hải quan và thương mại quốc tế",
        "Đại diện giải quyết tranh chấp tại Trọng tài thương mại (VIAC)"
      ]
    },
    {
      id: "pa-6",
      title: "Luật lao động",
      category: "Nhân sự – Lao động",
      description:
        "Tư vấn xây dựng nội quy lao động, thỏa ước tập thể, hợp đồng lao động, bảo mật thông tin (NDA) và giải quyết tranh chấp sa thải, kỷ luật.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Xây dựng hệ thống quy chế lao động và thang bảng lương chuẩn luật",
        "Tư vấn quy trình xử lý kỷ luật lao động và chấm dứt hợp đồng",
        "Đại diện giải quyết tranh chấp lao động cá nhân và tập thể"
      ]
    },
    {
      id: "pa-7",
      title: "Luật doanh nghiệp",
      category: "Đầu tư – Pháp chế",
      description:
        "Đồng hành pháp chế thường xuyên cho doanh nghiệp: thành lập công ty, M&A, mua bán sáp nhập, tái cấu trúc cổ đông và tuân thủ pháp luật.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Tư vấn thành lập doanh nghiệp FDI, điều chỉnh giấy phép đầu tư",
        "Tư vấn cấu trúc quản trị cổ đông và thẩm định pháp lý M&A",
        "Dịch vụ phòng pháp chế thuê ngoài trọn gói cho doanh nghiệp"
      ]
    },
    {
      id: "pa-8",
      title: "Giải quyết tranh chấp",
      category: "Tranh tụng – Thi hành án",
      description:
        "Cử luật sư tranh tụng dày dạn kinh nghiệm trực tiếp tham gia bảo vệ quyền lợi tại Tòa án các cấp và theo sát giai đoạn thi hành án.",
      image:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80",
      bulletPoints: [
        "Phân tích hồ sơ chứng cứ và xây dựng chiến lược tranh tụng tối ưu",
        "Đại diện tham gia hòa giải, thương lượng và xét xử tại Tòa án",
        "Theo dõi, đôn đốc quá trình xác minh và cưỡng chế thi hành án"
      ]
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Đoàn Dự",
      role: "Tài xế / Chủ doanh nghiệp vận tải",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "Cơ sở luật sư có hơn 20 năm kinh nghiệm trong lĩnh vực này và chúng tôi đã giải quyết hơn 2000 trường hợp. Mọi trường hợp đều rất quan trọng đối với chúng tôi và các luật sư luôn quan tâm đến hồ sơ một cách nghiêm túc. Tôi hoàn toàn hài lòng với kết quả giải quyết."
    },
    {
      id: "test-2",
      author: "Trần Minh Quân",
      role: "Giám đốc Công ty XNK Hoàng Gia",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "Đội ngũ luật sư tư vấn vô cùng sắc bén, giúp doanh nghiệp chúng tôi thu hồi thành công khoản công nợ hợp đồng thương mại kéo dài hơn 2 năm chỉ sau 3 phiên làm việc chính thức."
    },
    {
      id: "test-3",
      author: "Nguyễn Thu Hà",
      role: "Nhà đầu tư Bất động sản",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "Sự tận tâm, bảo mật thông tin tuyệt đối và phản hồi nhanh chóng 24/7 của văn phòng luật sư giúp gia đình tôi hoàn tất thủ tục pháp lý nhà đất và thừa kế hết sức êm đẹp."
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Quan tâm các giải pháp nâng cao chất lượng thẩm định",
      date: "28/03/2025",
      category: "Pháp luật doanh nghiệp",
      excerpt:
        "(PLVN) – Ngày 28/3, Thứ trưởng Phan Chí Hiếu đã chủ trì cuộc họp với các đơn vị chuyên môn về nâng cao chất lượng thẩm định văn bản quy phạm pháp luật...",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "Vướng mắc trong xác định lãi suất chậm thi hành án",
      date: "25/03/2025",
      category: "Thi hành án dân sự",
      excerpt:
        "(PLVN) – Trong các vụ việc thi hành án (THA) tín dụng ngân hàng, các cơ quan thi hành án và đương sự cần lưu ý cách tính lãi suất theo án tuyên...",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "3 tháng, phân loại hơn 42 ngàn thông tin Lý lịch tư pháp",
      date: "20/03/2025",
      category: "Hành chính – Tư pháp",
      excerpt:
        "(PLVN) – Chiều 27/3, Thứ trưởng Bộ Tư pháp Nguyễn Khánh Ngọc đã chủ trì cuộc họp đánh giá kết quả số hóa và cấp phiếu lý lịch tư pháp trực tuyến...",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
    }
  ],
  lawyerProfiles: [
    {
      id: "law-1",
      name: "Khánh Hùng",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      bio: "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
      experience: "16 năm kinh nghiệm tranh tụng Hình sự, Dân sự và Thương mại",
      education: "Thạc sĩ Luật Kinh tế – Đại học Luật TP.HCM",
      phone: "076 922 0162",
      email: "khanhhung@monalaw.vn"
    },
    {
      id: "law-2",
      name: "Quỳnh Đỗ",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
      experience: "12 năm chuyên sâu Luật Hôn nhân Gia đình, Di trú và Thừa kế",
      education: "Cử nhân Luật Chất lượng cao – Học viện Tư pháp",
      phone: "076 922 0162",
      email: "quynhdo@monalaw.vn"
    },
    {
      id: "law-3",
      name: "Nam Vũ",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
      experience: "14 năm tư vấn Pháp chế Doanh nghiệp, Đầu tư FDI và Sở hữu trí tuệ",
      education: "Thạc sĩ Luật Thương mại Quốc tế",
      phone: "076 922 0162",
      email: "namvu@monalaw.vn"
    },
    {
      id: "law-4",
      name: "Sĩ Hùng",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
      bio: "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
      experience: "15 năm kinh nghiệm giải quyết tranh chấp Ngân hàng, Tài chính và Bất động sản",
      education: "Luật sư Đoàn Luật sư TP.HCM – Trọng tài viên thương mại",
      phone: "076 922 0162",
      email: "sihung@monalaw.vn"
    }
  ],
  consultationSection: {
    title: "MIỄN PHÍ TƯ VẤN",
    subtitle:
      "Luật là vấn đề phức tạp. Nó có thể gây ra cho bạn một vấn đề lớn nếu bạn bỏ qua nó. Hãy để chúng tôi giúp bạn!",
    lawyerImage:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=85",
    backgroundImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80"
  },
  clients: [
    { id: "cl-1", name: "AVOCADO" },
    { id: "cl-2", name: "Liquidity" },
    { id: "cl-3", name: "GLOBAL SYSTEM" },
    { id: "cl-4", name: "Streaming Line" },
    { id: "cl-5", name: "HighVision" }
  ]
};
