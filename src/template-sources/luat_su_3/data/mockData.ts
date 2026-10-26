import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu3Data extends ClonedTemplateBaseData {
  heroPillars: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: "lawyer" | "support" | "shield";
  }>;
  aboutData: {
    eyebrow: string;
    title: string;
    badgeCount: string;
    badgeLabel: string;
    portraitImage: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    description: string;
    founderName: string;
    founderRole: string;
    founderAvatar: string;
  };
  processSteps: Array<{
    id: string;
    title: string;
    description: string;
    icon: "briefcase" | "file" | "gavel" | "scale";
    staggered: boolean;
  }>;
  commitments: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  negotiationSection: {
    eyebrow: string;
    title: string;
    col1Text: string;
    col2Text: string;
    videoThumbnail: string;
  };
  footerGallery: string[];
}

export const luatSu3DefaultData: LuatSu3Data = {
  business: {
    name: "Mona Law",
    phone: ["(+84) 0313 728 397", "1900 636 648"],
    email: ["info@themona.global", "tuvan@monalaw.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 1500,
    experienceYears: "18+ Năm",
    aboutTitle: "Giữ gìn các mối quan hệ là nền tảng thành công",
    aboutText: [
      "Chúng tôi đại diện cho cá nhân và doanh nghiệp trong các vụ việc pháp lý phức tạp, đồng thời tư vấn chiến lược quản trị rủi ro toàn diện. Với kỹ năng tranh tụng sắc bén và kinh nghiệm thực chiến, đội ngũ luật sư luôn bảo vệ tối đa quyền và lợi ích hợp pháp của thân chủ."
    ],
    highlights: [
      "Luật sư chuyên môn trên 15 năm kinh nghiệm",
      "Tư vấn thẩm định hồ sơ ban đầu miễn phí",
      "Cam kết bảo mật tuyệt đối & minh bạch biểu phí",
      "Hơn 1500+ vụ việc và dự án pháp lý thành công"
    ]
  },
  hero: {
    eyebrow: "THE LAW",
    title: "Dịch vụ hỗ trợ chất lượng thành công",
    subtitle: "Dịch vụ của chúng tôi tạo nên khác biệt",
    description:
      "Đồng hành pháp lý chuẩn mực, bảo vệ quyền lợi hợp pháp cho doanh nghiệp và cá nhân trong mọi lĩnh vực dân sự, thương mại, đầu tư và sở hữu trí tuệ.",
    ctaText: "Liên Hệ Với Chúng Tôi",
    ctaLink: "#tu-van-mien-phi",
    secondaryCtaText: "Đặt Ngay",
    secondaryCtaLink: "#tu-van-mien-phi",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  heroPillars: [
    {
      id: "hp-1",
      title: "Luật sư chuyên môn",
      subtitle: "Được nhiều hơn bạn bỏ ra",
      icon: "lawyer"
    },
    {
      id: "hp-2",
      title: "Tư vấn miễn phí",
      subtitle: "Được nhiều hơn bạn bỏ ra",
      icon: "support"
    },
    {
      id: "hp-3",
      title: "Bảo hiểm bảo vệ",
      subtitle: "Được nhiều hơn bạn bỏ ra",
      icon: "shield"
    }
  ],
  aboutData: {
    eyebrow: "Giới thiệu",
    title: "Giữ gìn các mối quan hệ là nền tảng thành công",
    badgeCount: "1500+",
    badgeLabel: "Dự án Thành công",
    portraitImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    features: [
      {
        title: "Tư vấn pháp lý",
        description:
          "Cung cấp tư vấn pháp lý chuyên sâu và giải pháp thông minh cho doanh nghiệp."
      },
      {
        title: "Giải quyết tranh chấp",
        description:
          "Cung cấp tư vấn pháp lý chuyên sâu và giải pháp hòa giải, tranh tụng hiệu quả."
      }
    ],
    description:
      "Chúng tôi sẽ đại diện cho bạn trong các vụ việc pháp lý và tư vấn về các quy trình pháp lý. Với kỹ năng và kinh nghiệm của chúng tôi, chúng tôi sẽ bảo vệ quyền lợi và lợi ích của bạn trong quá trình xử lý vụ việc.",
    founderName: "Luật sư Trần Minh Đức",
    founderRole: "Chủ tịch & Luật sư Điều hành",
    founderAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  services: [
    {
      id: "law-s1",
      title: "Tư vấn pháp lý",
      category: "Tư vấn thường xuyên",
      description:
        "Dịch vụ tư vấn pháp lý cung cấp sự chỉ dẫn và hỗ trợ cho cá nhân và doanh nghiệp trong việc hiểu và tuân thủ quy định pháp luật."
    },
    {
      id: "law-s2",
      title: "Đại diện pháp lý",
      category: "Tranh tụng & Tố tụng",
      description:
        "Dịch vụ tư vấn pháp lý cung cấp sự chỉ dẫn và hỗ trợ cho cá nhân và doanh nghiệp trong việc hiểu và tuân thủ quy định pháp luật."
    },
    {
      id: "law-s3",
      title: "Soạn thảo hợp đồng",
      category: "Thương mại & Giao dịch",
      description:
        "Dịch vụ tư vấn pháp lý cung cấp sự chỉ dẫn và hỗ trợ cho cá nhân và doanh nghiệp trong việc hiểu và tuân thủ quy định pháp luật."
    },
    {
      id: "law-s4",
      title: "Đăng ký doanh nghiệp",
      category: "Đầu tư & Doanh nghiệp",
      description:
        "Dịch vụ tư vấn pháp lý cung cấp sự chỉ dẫn và hỗ trợ cho cá nhân và doanh nghiệp trong việc hiểu và tuân thủ quy định pháp luật."
    },
    {
      id: "law-s5",
      title: "Quyền sở hữu trí tuệ",
      category: "Nhãn hiệu & Bản quyền",
      description:
        "Dịch vụ tư vấn pháp lý cung cấp sự chỉ dẫn và hỗ trợ cho cá nhân và doanh nghiệp trong việc hiểu và tuân thủ quy định pháp luật."
    },
    {
      id: "law-s6",
      title: "Giải quyết tranh chấp",
      category: "Trọng tài & Tòa án",
      description:
        "Dịch vụ tư vấn pháp lý cung cấp sự chỉ dẫn và hỗ trợ cho cá nhân và doanh nghiệp trong việc hiểu và tuân thủ quy định pháp luật."
    }
  ],
  processSteps: [
    {
      id: "ps-1",
      title: "Tư vấn đánh giá",
      description:
        "Đánh giá tình huống và xác định các phương pháp tiếp cận phù hợp nhất.",
      icon: "briefcase",
      staggered: false
    },
    {
      id: "ps-2",
      title: "Xây dựng chiến lược",
      description:
        "Đánh giá tình huống và xác định các phương pháp tiếp cận phù hợp nhất.",
      icon: "file",
      staggered: true
    },
    {
      id: "ps-3",
      title: "Thực hiện giám sát",
      description:
        "Đánh giá tình huống và xác định các phương pháp tiếp cận phù hợp nhất.",
      icon: "gavel",
      staggered: false
    },
    {
      id: "ps-4",
      title: "Đánh giá hoàn thiện",
      description:
        "Đánh giá tình huống và xác định các phương pháp tiếp cận phù hợp nhất.",
      icon: "scale",
      staggered: true
    }
  ],
  commitments: {
    eyebrow: "Khách hàng chọn chúng tôi",
    title: "Cam kết bảo vệ quyền lợi tuyệt đối",
    description:
      "Với cam kết tuyệt đối, chúng tôi tự hào đứng vững bảo vệ quyền lợi của bạn, đồng hành và đảm bảo rằng mọi khía cạnh pháp lý đều được xem xét và bảo vệ một cách tận tâm và chuyên nghiệp.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85",
    items: [
      {
        title: "Cam kết với khách hàng",
        description:
          "Bảo mật tuyệt đối toàn bộ hồ sơ, chứng cứ và thông tin doanh nghiệp trong suốt quá trình đại diện pháp lý."
      },
      {
        title: "Không tính thêm phí",
        description:
          "Biểu phí dịch vụ pháp lý được niêm yết rõ ràng trong hợp đồng dịch vụ, cam kết không phát sinh chi phí ẩn."
      }
    ]
  },
  stats: [
    { id: "ls-st1", number: "20k+", title: "Luật Sư" },
    { id: "ls-st2", number: "20k+", title: "Thành Công" },
    { id: "ls-st3", number: "20k+", title: "Người Hài Lòng" },
    { id: "ls-st4", number: "20k+", title: "Giải Thưởng" }
  ],
  team: [
    {
      id: "at-1",
      name: "Luật sư Hoàng Bách",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-2",
      name: "Luật sư Thanh Thảo",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-3",
      name: "Luật sư Quốc Tuấn",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "LIÊN ĐOÀN LUẬT SƯ" },
    { id: "cl-2", name: "TRỌNG TÀI QUỐC TẾ" },
    { id: "cl-3", name: "BRANDON LEGAL 1986" },
    { id: "cl-4", name: "HỘI ĐỒNG THƯƠNG MẠI" }
  ],
  negotiationSection: {
    eyebrow: "Lịch sử",
    title: "Thỏa hiệp với luật sư với giá tốt nhất",
    col1Text:
      "Chúng tôi cam kết đem đến cho bạn sự thỏa hiệp với luật sư với giá tốt nhất, đảm bảo rằng bạn sẽ nhận được dịch vụ chất lượng cao với mức phí hợp lý và công bằng nhất.",
    col2Text:
      "Chúng tôi cam kết đem đến cho bạn sự thỏa hiệp với luật sư với giá tốt nhất, đảm bảo rằng bạn sẽ nhận được dịch vụ chất lượng cao với mức phí hợp lý và công bằng nhất.",
    videoThumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
  },
  testimonials: [
    {
      id: "lt-1",
      author: "Ông Nguyễn Minh Khôi",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã nhận được sự hỗ trợ tuyệt vời từ đội ngũ luật sư tại công ty. Họ không chỉ bảo vệ quyền lợi của tôi một cách tối đa, mà còn đồng hành và giúp đỡ tôi qua mọi khía cạnh pháp lý. Tôi rất hài lòng với sự chuyên nghiệp và tận tâm của họ."
    },
    {
      id: "lt-2",
      author: "Ông Lê Hoàng Nam",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã nhận được sự hỗ trợ tuyệt vời từ đội ngũ luật sư tại công ty. Họ không chỉ bảo vệ quyền lợi của tôi một cách tối đa, mà còn đồng hành và giúp đỡ tôi qua mọi khía cạnh pháp lý. Tôi rất hài lòng với sự chuyên nghiệp và tận tâm của họ."
    },
    {
      id: "lt-3",
      author: "Bà Phạm Thu Hà",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã nhận được sự hỗ trợ tuyệt vời từ đội ngũ luật sư tại công ty. Họ không chỉ bảo vệ quyền lợi của tôi một cách tối đa, mà còn đồng hành và giúp đỡ tôi qua mọi khía cạnh pháp lý. Tôi rất hài lòng với sự chuyên nghiệp và tận tâm của họ."
    }
  ],
  news: [
    {
      id: "ln-1",
      title: "Quy trình giải quyết tranh chấp hợp đồng thương mại tại Trọng tài Quốc tế",
      date: "20 Tháng Chín, 2025",
      category: "TRANH CHẤP THƯƠNG MẠI",
      excerpt:
        "Những lưu ý quan trọng về điều khoản trọng tài và thu thập chứng cứ hợp pháp giúp doanh nghiệp rút ngắn thời gian tố tụng.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ln-2",
      title: "Hướng dẫn phân chia tài sản chung và quyền nuôi con theo Luật Hôn nhân mới",
      date: "14 Tháng Chín, 2025",
      category: "TƯ VẤN HÔN NHÂN",
      excerpt:
        "Giải đáp chi tiết nguyên tắc bảo vệ quyền lợi hợp pháp của phụ nữ và trẻ em khi giải quyết ly hôn đơn phương hoặc thuận tình.",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ln-3",
      title: "Thủ tục đăng ký bảo hộ nhãn hiệu độc quyền và xử lý hành vi xâm phạm SHTT",
      date: "08 Tháng Chín, 2025",
      category: "SỞ HỮU TRÍ TUỆ",
      excerpt:
        "Các bước tra cứu khả năng phân biệt của nhãn hiệu và quy trình yêu cầu cơ quan chức năng xử lý hàng giả, hàng nhái.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80"
  ]
};
