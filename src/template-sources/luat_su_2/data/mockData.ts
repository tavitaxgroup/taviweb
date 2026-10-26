import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu2PillarCard {
  id: string;
  title: string;
  description: string;
  icon: "heart" | "scale" | "thumbsUp";
}

export interface LuatSu2PracticeArea {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
}

export interface LuatSu2FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LuatSu2AwardItem {
  id: string;
  date: string;
  title: string;
  issuer: string;
}

export interface LuatSu2Data extends ClonedTemplateBaseData {
  pillars: LuatSu2PillarCard[];
  quoteBanner: {
    quote: string;
    description: string;
    author: string;
  };
  practiceAreas: LuatSu2PracticeArea[];
  faqs: LuatSu2FaqItem[];
  aboutSplit: {
    bannerImage: string;
    whoWeAreTitle: string;
    whoWeAreText: string;
    responsibilityTitle: string;
    responsibilityText: string;
    signatureName: string;
  };
  internshipBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  consultationBg: string;
  awards: LuatSu2AwardItem[];
}

export const luatSu2DefaultData: LuatSu2Data = {
  business: {
    name: "Hãng Luật Mona Law",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["luatsu@monalaw.vn", "tuvan@monalaw.vn"],
    address: "319 C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Thứ 2 đến Thứ 6: Từ 8h00 (sáng) - 18h00 (chiều) | Thứ 7 & Chủ Nhật: Nghỉ",
    rating: 4.9,
    reviewCount: 580,
    aboutTitle: "Giới thiệu",
    aboutText: [
      "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Với đội ngũ luật sư giỏi, uy tín, giàu kinh nghiệm tranh tụng và am hiểu sâu sắc hệ thống pháp luật, chúng tôi cung cấp dịch vụ tư vấn pháp luật toàn diện trên phạm vi toàn quốc."
    ],
    highlights: [
      "Hơn 15 năm kinh nghiệm đại diện tranh tụng và tư vấn pháp chế doanh nghiệp",
      "Bảo mật tuyệt đối 100% hồ sơ, thông tin và bí mật thương mại của thân chủ",
      "Tư vấn sơ bộ miễn phí 24/7 và minh bạch biểu phí ngay từ khi tiếp nhận hồ sơ"
    ]
  },
  hero: {
    eyebrow: "CÔNG TY TƯ VẤN PHÁP LUẬT",
    subtitle: "CÔNG TY TƯ VẤN PHÁP LUẬT",
    title: "Hãng Luật Mona Law",
    description:
      "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Bảo vệ quyền và lợi ích hợp pháp tối đa cho cá nhân và doanh nghiệp.",
    ctaText: "Tìm hiểu ngay",
    ctaLink: "#practice-areas",
    secondaryCtaText: "ĐĂNG KÝ TƯ VẤN",
    secondaryCtaLink: "#consultation",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=85"
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Lòng tin",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng vững chắc cho mọi quyết định pháp lý của bạn.",
      icon: "heart"
    },
    {
      id: "pillar-2",
      title: "Trung tâm",
      description:
        "Đặt quyền và lợi ích hợp pháp của thân chủ làm trọng tâm trong từng hồ sơ tư vấn và tranh tụng.",
      icon: "scale"
    },
    {
      id: "pillar-3",
      title: "Hỗ trợ",
      description:
        "Đồng hành pháp lý 24/7 tận tâm, kịp thời tháo gỡ rủi ro cho cá nhân và doanh nghiệp trên toàn quốc.",
      icon: "thumbsUp"
    }
  ],
  quoteBanner: {
    quote:
      "“Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn”",
    description:
      "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Với đội ngũ luật sư giỏi, uy tín, giàu kinh nghiệm, am hiểu kiến thức xã hội, chúng tôi cung cấp dịch vụ tư vấn pháp luật trên phạm vi toàn quốc.",
    author: "Hãng Luật Mona Law"
  },
  practiceAreas: [
    {
      id: "area-1",
      title: "Pháp lý Cá nhân & Dân sự",
      shortLabel: "Cá nhân & Dân sự",
      description:
        "Tư vấn thừa kế, di chúc, hôn nhân gia đình, tranh chấp hợp đồng dân sự và quyền sở hữu tài sản.",
      image:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "area-2",
      title: "Luật Quốc tế & Đầu tư",
      shortLabel: "Luật quốc tế",
      description:
        "Tư vấn đầu tư nước ngoài FDI, thương mại quốc tế, giải quyết tranh chấp tại Trọng tài Quốc tế.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "area-3",
      title: "Tranh chấp Bảo hiểm",
      shortLabel: "Bảo hiểm",
      description:
        "Đại diện yêu cầu bồi thường bảo hiểm thương mại, bảo hiểm hàng hải, tài sản và trách nhiệm dân sự.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "area-4",
      title: "Tài chính & Ngân hàng",
      shortLabel: "Ngân hàng",
      description:
        "Tư vấn cấu trúc tín dụng, thế chấp tài sản, xử lý nợ xấu và tuân thủ pháp luật ngân hàng.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "area-5",
      title: "Thuế & Tiền tệ",
      shortLabel: "Thuế & Tiền tệ",
      description:
        "Tư vấn hoạch định thuế doanh nghiệp, quyết toán thuế, hoàn thuế và quy định quản lý ngoại hối.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "area-6",
      title: "Pháp chế Doanh nghiệp & Kinh doanh",
      shortLabel: "Kinh doanh",
      description:
        "Tư vấn M&A, quản trị cổ đông, soạn thảo hợp đồng thương mại và phòng ngừa rủi ro pháp lý.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Liên hệ tư vấn pháp lý như thế nào?",
      answer:
        "Quý khách có thể liên hệ trực tiếp qua Hotline 24/7 hoặc gửi thông tin tại biểu mẫu Tư vấn miễn phí. Luật sư chuyên trách của chúng tôi sẽ tiếp nhận hồ sơ và phản hồi phương án pháp lý trong vòng 30 phút."
    },
    {
      id: "faq-2",
      question: "Các khoản phí cho các vụ án dân sự & hình sự?",
      answer:
        "Chi phí dịch vụ pháp lý được niêm yết minh bạch bằng Hợp đồng dịch vụ pháp lý chính thức dựa trên mức độ phức tạp của hồ sơ, tuyệt đối không phát sinh chi phí ngoài thỏa thuận."
    },
    {
      id: "faq-3",
      question: "Quy trình đại diện tranh tụng tại Tòa án?",
      answer:
        "Bao gồm 5 bước chuẩn mực: Nghiên cứu hồ sơ chứng cứ -> Xây dựng luận cứ bảo vệ -> Thu thập tài liệu bổ sung -> Đại diện tham gia hòa giải & xét xử tại Tòa án -> Theo dõi thi hành án."
    }
  ],
  aboutSplit: {
    bannerImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    whoWeAreTitle: "Chúng tôi là ai?",
    whoWeAreText:
      "Tổ chức hành nghề luật sư uy tín quy tụ các Luật sư thành viên thuộc Đoàn Luật sư TP.HCM và Hà Nội với bề dày kinh nghiệm thực chiến.",
    responsibilityTitle: "Trách nhiệm",
    responsibilityText:
      "Thượng tôn pháp luật, tận tâm bảo vệ quyền lợi chính đáng của thân chủ và giữ gìn chuẩn mực đạo đức nghề nghiệp luật sư.",
    signatureName: "Ls. Nguyễn Hoàng Minh"
  },
  stats: [
    { id: "st-1", number: "5800", title: "Khách hàng hài lòng" },
    { id: "st-2", number: "8260", title: "Vấn đề giải quyết" },
    { id: "st-3", number: "2930", title: "Đối tác doanh nghiệp" },
    { id: "st-4", number: "25", title: "Luật sư tranh tụng" },
    { id: "st-5", number: "10", title: "Giải thưởng uy tín" }
  ],
  team: [
    {
      id: "law-1",
      name: "Quỳnh Đỗ",
      position: "Luật sư Dân sự & Hôn nhân",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "law-2",
      name: "Khánh Hùng",
      position: "Luật sư Tranh tụng Hình sự",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "law-3",
      name: "Nam Vũ",
      position: "Luật sư Doanh nghiệp & M&A",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "law-4",
      name: "Sĩ Hùng",
      position: "Cố vấn Pháp lý Cấp cao",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ],
  internshipBanner: {
    title: "Bạn là sinh viên ngành luật đã tốt nghiệp và đang có ý định thực tập?",
    subtitle:
      "Hãy liên hệ ngay với chúng tôi để nộp hồ sơ ứng tuyển. Cùng rèn luyện kỹ năng hành nghề luật sư thực tế dưới sự hướng dẫn trực tiếp từ các Luật sư trưởng phòng.",
    ctaText: "Gửi hồ sơ",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  testimonials: [
    {
      id: "rev-1",
      author: "Nga My",
      role: "QUẢN LÝ NGÂN HÀNG",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content:
        "Đội ngũ luật sư đã hỗ trợ doanh nghiệp chúng tôi rà soát toàn bộ hợp đồng tín dụng và giải quyết dứt điểm vụ tranh chấp thương mại kéo dài hơn 2 năm một cách thuyết phục."
    },
    {
      id: "rev-2",
      author: "Đoàn Dự",
      role: "GIÁM ĐỐC VẬN TẢI",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content:
        "Sự tận tâm, phân tích sắc bén và chiến lược pháp lý rõ ràng của Hãng Luật giúp công ty tôi bảo vệ toàn vẹn quyền lợi trong vụ việc bồi thường bảo hiểm hàng hải."
    },
    {
      id: "rev-3",
      author: "Thủy Tiên",
      role: "NHÀ ĐẦU TƯ BĐS",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      content:
        "Mọi thủ tục pháp lý dự án bất động sản và thừa kế tài sản gia đình đều được các luật sư tư vấn cặn kẽ, nhanh chóng và bảo mật tuyệt đối."
    }
  ],
  consultationBg:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85",
  clients: [
    { id: "cl-1", name: "LawClub" },
    { id: "cl-2", name: "IRONThemes" },
    { id: "cl-3", name: "STARCOM" },
    { id: "cl-4", name: "Royal & Sons" },
    { id: "cl-5", name: "LEOSPORTS" },
    { id: "cl-6", name: "BACKBONE" }
  ],
  awards: [
    {
      id: "aw-1",
      date: "Tháng 01 năm 2024",
      title: "TƯ VẤN PHÁP LÝ TỐT NHẤT",
      issuer: "Hiệp hội Pháp chế Doanh nghiệp"
    },
    {
      id: "aw-2",
      date: "Tháng 06 năm 2024",
      title: "HÃNG LUẬT TRANH TỤNG TIÊU BIỂU",
      issuer: "Diễn đàn Luật sư Thương mại"
    },
    {
      id: "aw-3",
      date: "Tháng 01 năm 2025",
      title: "TƯ VẤN PHÁP LÝ TỐT NHẤT",
      issuer: "Giải thưởng Thương hiệu Luật Uy tín"
    }
  ]
};
