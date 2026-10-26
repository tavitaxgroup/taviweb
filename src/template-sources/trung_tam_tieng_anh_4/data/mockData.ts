import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TiengAnh4ProgramCard {
  id: string;
  title: string;
  description: string;
  image: string;
  colorHex: string;
  iconType: "puzzle" | "rocket" | "ruler" | "layers";
  details: string[];
}

export interface TiengAnh4TeacherCard {
  id: string;
  name: string;
  role: string;
  phone: string;
  image: string;
  bio: string;
}

export interface TiengAnh4FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TiengAnh4Data extends ClonedTemplateBaseData {
  heroBadges: Array<{
    id: string;
    title: string;
    icon: "cap" | "notes" | "badge";
  }>;
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
    collageImages: string[];
    pillars: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  programs: TiengAnh4ProgramCard[];
  teachers: TiengAnh4TeacherCard[];
  contactSection: {
    title: string;
    checklists: string[];
    collageImages: string[];
  };
  faqSection: {
    eyebrow: string;
    title: string;
    studentImage: string;
    faqs: TiengAnh4FaqItem[];
  };
  footerGallery: string[];
}

export const trungTamTiengAnh4DefaultData: TiengAnh4Data = {
  business: {
    name: "The Mona Education",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global", "tuyensinh@themona.global"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 đến Thứ 6: 08:00 - 17:00 | Thứ 7, Chủ Nhật: Nghỉ",
    rating: 4.9,
    reviewCount: 820,
    aboutTitle: "GIỚI THIỆU TRUNG TÂM ÔN THI THPT & IELTS SMARTSUMMER",
    aboutText: [
      "Với đội ngũ giảng viên giàu kinh nghiệm, phương pháp giảng dạy khoa học và hệ thống tài liệu bám sát đề thi chính thức, chúng tôi cam kết mang đến môi trường học tập hiệu quả, giúp học sinh không chỉ nắm vững kiến thức mà còn tự tin bước vào kỳ thi với phong thái tốt nhất."
    ],
    highlights: [
      "Đội ngũ chuyên nghiệp",
      "Khuyến khích học tập",
      "Lộ trình phù hợp",
      "Tầm nhìn vượt trội"
    ]
  },
  hero: {
    eyebrow: "TRUNG TÂM LUYỆN THI IELTS & ANH NGỮ HỌC THUẬT SMARTSUMMER",
    subtitle: "Nắm Vững Kiến Thức, Tự Tin Vào Kỳ Thi!",
    title: "Trung Tâm Luyện thi THPT Quốc Gia",
    description:
      "Hệ thống đào tạo Anh ngữ Học thuật, luyện thi IELTS và bồi dưỡng kiến thức THPT Quốc gia toàn diện với cam kết đầu ra bằng văn bản.",
    ctaText: "Khám Phá Ngay",
    ctaLink: "#programs",
    secondaryCtaText: "Liên Hệ Ngay",
    secondaryCtaLink: "#contact-section",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
  },
  heroBadges: [
    {
      id: "hb-1",
      title: "Khóa học chất lượng",
      icon: "cap"
    },
    {
      id: "hb-2",
      title: "Chương trình đặc biệt",
      icon: "notes"
    },
    {
      id: "hb-3",
      title: "Cam kết đầu ra",
      icon: "badge"
    }
  ],
  aboutSection: {
    eyebrow: "BƯỚC ĐỆM VỮNG CHẮC",
    title: "GIỚI THIỆU TRUNG TÂM ÔN THI THPT",
    description:
      "Với đội ngũ giảng viên giàu kinh nghiệm, phương pháp giảng dạy khoa học và hệ thống tài liệu bám sát đề thi chính thức, chúng tôi cam kết mang đến môi trường học tập hiệu quả, giúp học sinh không chỉ nắm vững kiến thức mà còn tự tin bước vào kỳ thi với phong thái tốt nhất.",
    collageImages: [
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    ],
    pillars: [
      {
        id: "pil-1",
        title: "Giáo Viên Tận Tâm",
        description:
          "Đồng hành cùng học sinh trên hành trình chinh phục kỳ thi với tâm thế vững vàng và kiến thức chắc chắn."
      },
      {
        id: "pil-2",
        title: "Tầm Nhìn - Sứ Mệnh",
        description:
          "Đồng hành cùng học sinh trên hành trình chinh phục kỳ thi với tâm thế vững vàng và kiến thức chắc chắn."
      }
    ]
  },
  programs: [
    {
      id: "prog-1",
      title: "Luyện Đề Chuyên Sâu",
      description:
        "Giải đề theo từng chuyên đề, giúp học sinh làm chủ kiến thức trong thời gian ngắn.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
      colorHex: "#0b224c",
      iconType: "puzzle",
      details: [
        "Ngân hàng 200+ đề thi chuẩn cấu trúc mới nhất của Bộ GD&ĐT và Cambridge IELTS",
        "Chữa chi tiết từng bẫy ngữ pháp, đọc hiểu và chiến thuật phân bổ thời gian",
        "Thi thử định kỳ hàng tuần có chấm chữa 1-1 cùng giảng viên"
      ]
    },
    {
      id: "prog-2",
      title: "Luyện Thi Cấp Tốc",
      description:
        "Giải đề theo từng chuyên đề, giúp học sinh làm chủ kiến thức trong thời gian ngắn.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80",
      colorHex: "#e31e24",
      iconType: "rocket",
      details: [
        "Tăng tốc 1.5 - 2.0 band điểm IELTS hoặc +3 điểm môn Tiếng Anh THPT trong 8 tuần",
        "Hệ thống hóa trọng tâm kiến thức cốt lõi hay xuất hiện trong đề thi",
        "Kèm cặp sát sao mỗi ngày cùng trợ giảng học thuật"
      ]
    },
    {
      id: "prog-3",
      title: "Lớp Học Kèm 1-1",
      description:
        "Giải đề theo từng chuyên đề, giúp học sinh làm chủ kiến thức trong thời gian ngắn.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
      colorHex: "#f4b740",
      iconType: "ruler",
      details: [
        "Thiết kế giáo trình cá nhân hóa 100% theo năng lực đầu vào của từng học viên",
        "Tập trung lấp đầy lỗ hổng kiến thức và bứt phá kỹ năng Speaking - Writing",
        "Lịch học linh hoạt theo thời gian biểu của học sinh"
      ]
    },
    {
      id: "prog-4",
      title: "Ôn Luyện Tổ Hợp",
      description:
        "Giải đề theo từng chuyên đề, giúp học sinh làm chủ kiến thức trong thời gian ngắn.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80",
      colorHex: "#67d4d8",
      iconType: "layers",
      details: [
        "Kết hợp toàn diện Tiếng Anh Học Thuật, IELTS xét tuyển thẳng và Tổ hợp Đánh giá năng lực",
        "Bồi dưỡng tư duy phản biện, đọc hiểu học thuật và giải quyết vấn đề",
        "Tư vấn chiến lược chọn nguyện vọng vào các trường Đại học tốp đầu"
      ]
    }
  ],
  teachers: [
    {
      id: "tch-1",
      name: "Cô Giáo Hoàng Vy",
      role: "Giáo Viên Giảng Dạy",
      phone: "(+84) 0313-728-397",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Thạc sĩ Phương pháp Giảng dạy Tiếng Anh (TESOL), 10 năm kinh nghiệm luyện thi THPT Quốc gia & IELTS 8.5."
    },
    {
      id: "tch-2",
      name: "Cô Giáo Bạch Ngân",
      role: "Giáo Viên Giảng Dạy",
      phone: "(+84) 0313-728-397",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
      bio: "Chuyên gia luyện đề chuyên sâu và chiến thuật đạt điểm 9+ môn Tiếng Anh & Ngữ Văn THPT."
    },
    {
      id: "tch-3",
      name: "Cô Giáo Thảo Linh",
      role: "Cô Giáo Tiếng Anh",
      phone: "(+84) 0313-728-397",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      bio: "Cử nhân Sư phạm Anh loại Xuất sắc, sở hữu chứng chỉ IELTS 8.0 và CELTA quốc tế."
    },
    {
      id: "tch-4",
      name: "Cô Giáo Thanh An",
      role: "Bảo Mẫu",
      phone: "(+84) 0313-728-397",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
      bio: "Quản nhiệm học tập tận tâm, theo sát tiến độ chuyên cần và hỗ trợ tâm lý mùa thi cho từng học viên."
    }
  ],
  testimonials: [
    {
      id: "stu-1",
      author: "Bạch Ngân",
      role: "Học viên đạt 9.4 Tiếng Anh THPT",
      rating: 5,
      content:
        "“SmartSummer không chỉ dạy lý thuyết mà còn có nhiều hoạt động thực tế. Tôi đã học được nhiều kỹ năng hữu ích mà tôi có thể áp dụng ngay vào cuộc sống và tự tin chinh phục kỳ thi.”"
    },
    {
      id: "stu-2",
      author: "Lê Hào",
      role: "Học viên đạt IELTS 7.5",
      rating: 5,
      content:
        "“SmartSummer không chỉ dạy lý thuyết mà còn có nhiều hoạt động thực tế. Tôi đã học được nhiều kỹ năng hữu ích mà tôi có thể áp dụng ngay vào cuộc sống và đạt kết quả vượt mong đợi.”"
    },
    {
      id: "stu-3",
      author: "Phúc Lộc",
      role: "Tân sinh viên ĐH Ngoại Thương",
      rating: 5,
      content:
        "“SmartSummer không chỉ dạy lý thuyết mà còn có nhiều hoạt động thực tế. Tôi đã học được nhiều kỹ năng hữu ích mà tôi có thể áp dụng ngay vào cuộc sống và đỗ nguyện vọng 1.”"
    }
  ],
  contactSection: {
    title: "LIÊN HỆ VỚI CHÚNG TÔI",
    checklists: [
      "Đội ngũ chuyên nghiệp",
      "Khuyến khích học tập",
      "Lộ trình phù hợp",
      "Tầm nhìn vượt trội"
    ],
    collageImages: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
    ]
  },
  faqSection: {
    eyebrow: "ĐỒNG HÀNH CÙNG HỌC VIÊN",
    title: "CÁC CÂU HỎI VÀ TRẢ LỜI THƯỜNG GẶP",
    studentImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=85",
    faqs: [
      {
        id: "faq-1",
        question: "Chương trình học tại SmartSummer có gì đặc biệt?",
        answer:
          "Chương trình học tại SmartSummer được thiết kế đa dạng, kết hợp giữa lý thuyết và thực hành, giúp học sinh phát triển toàn diện cả về kiến thức nền tảng, kỹ năng giải đề tốc độ và phản xạ Anh ngữ học thuật."
      },
      {
        id: "faq-2",
        question: "Ai là giảng viên của SmartSummer?",
        answer:
          "100% giảng viên tại SmartSummer đều tốt nghiệp Đại học Sư phạm, Đại học Ngoại ngữ danh tiếng, sở hữu chứng chỉ IELTS 8.0+ / TESOL và có tối thiểu 5 năm kinh nghiệm luyện thi THPT Quốc gia."
      },
      {
        id: "faq-3",
        question: "Thời gian học và lịch học như thế nào?",
        answer:
          "Trung tâm có các ca học linh hoạt vào buổi sáng, chiều, tối từ Thứ 2 đến Chủ Nhật, bao gồm cả lớp tiêu chuẩn 12-15 học viên và lớp kèm 1-1 theo lịch cá nhân."
      },
      {
        id: "faq-4",
        question: "Làm thế nào để đăng ký tham gia chương trình học?",
        answer:
          "Phụ huynh và học sinh chỉ cần điền thông tin tại biểu mẫu Liên Hệ Ngay trên website hoặc gọi trực tiếp hotline (+84) 0313-728-397 để được xếp lịch kiểm tra năng lực đầu vào hoàn toàn miễn phí."
      },
      {
        id: "faq-5",
        question: "SmartSummer có cung cấp chứng chỉ sau khi hoàn thành khóa học không?",
        answer:
          "Có. Sau khi hoàn thành khóa học và vượt qua bài thi đánh giá cuối khóa, học viên được cấp Chứng nhận hoàn thành chương trình từ SmartSummer và hỗ trợ đăng ký thi IELTS / THPT Quốc gia."
      }
    ]
  },
  news: [
    {
      id: "blog-1",
      title: "Bí Quyết Luyện Thi THPT Quốc Gia – Lộ Trình Học Tập...",
      date: "09/08/2025",
      category: "Kinh nghiệm ôn thi",
      excerpt:
        "Tổng hợp phương pháp phân bổ thời gian ôn tập 3 giai đoạn Nền tảng - Tổng ôn - Luyện đề giúp sĩ tử bứt phá điểm 9+ môn Tiếng Anh và các môn tổ hợp.",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-2",
      title: "5 Sai Lầm Khi Ôn Thi THPT Khiến Bạn Mất Điểm Oan...",
      date: "09/08/2025",
      category: "Cẩm nang mùa thi",
      excerpt:
        "Điểm danh những lỗi chủ quan thường gặp khi làm bài thi trắc nghiệm Tiếng Anh và cách rèn luyện kỹ năng kiểm soát tâm lý phòng thi vững vàng.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-3",
      title: "Cập Nhật Mới Nhất: Cấu Trúc Đề Thi THPT Quốc...",
      date: "09/08/2025",
      category: "Tin tức giáo dục",
      excerpt:
        "Phân tích chi tiết ma trận đề thi tham khảo mới nhất của Bộ Giáo dục & Đào tạo cùng danh mục từ vựng học thuật trọng tâm cần nắm vững.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80"
  ]
};
