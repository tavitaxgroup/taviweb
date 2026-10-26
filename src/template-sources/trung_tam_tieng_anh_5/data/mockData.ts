import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TiengAnh5CategoryCard {
  id: string;
  title: string;
  courseCount: string;
  icon: "megaphone" | "palette" | "code" | "layout";
}

export interface TiengAnh5CourseCard {
  id: string;
  title: string;
  duration: string;
  rating: string;
  lessons: number;
  students: number;
  level: string;
  instructor: string;
  price: string;
  oldPrice?: string;
  image: string;
  description: string;
}

export interface TiengAnh5InstructorCard {
  id: string;
  name: string;
  role: string;
  courses: string;
  students: string;
  image: string;
}

export interface TiengAnh5EventCard {
  id: string;
  title: string;
  speaker: string;
  speakerRole: string;
  speakerAvatar: string;
  location: string;
  time: string;
  image: string;
}

export interface TiengAnh5Data extends ClonedTemplateBaseData {
  heroBadge: {
    prefix: string;
    discount: string;
  };
  categories: TiengAnh5CategoryCard[];
  aboutCollage: {
    badgeNumber: string;
    badgeText: string;
    images: string[];
    videoThumb: string;
    bullets: string[];
  };
  courses: TiengAnh5CourseCard[];
  onlineCtaBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    activeStudentsLabel: string;
    features: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  promoDiscountBanner: {
    eyebrow: string;
    discountHighlight: string;
    redHighlight: string;
    titleLine2: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
  };
  instructors: TiengAnh5InstructorCard[];
  events: TiengAnh5EventCard[];
  partnerSection: {
    eyebrow: string;
    titlePrefix: string;
    highlightCount: string;
    titleSuffix: string;
    partners: string[];
  };
  dualPromoBanners: {
    left: {
      eyebrow: string;
      title: string;
      ctaText: string;
      image: string;
    };
    right: {
      eyebrow: string;
      title: string;
      ctaText: string;
      image: string;
    };
  };
}

export const trungTamTiengAnh5DefaultData: TiengAnh5Data = {
  business: {
    name: "Mona Media",
    phone: ["0313728397", "0909 728 397"],
    email: ["info@themona.global", "academy@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 9:00 - 18:00",
    rating: 4.9,
    reviewCount: 1250,
    aboutTitle: "Chào Mừng Đến Mona Media",
    aboutText: [
      "Bạn muốn nâng cao kiến thức và kỹ năng của mình? Bạn muốn học những khóa học chất lượng từ những chuyên gia hàng đầu trong ngành? Hãy ghé thăm Website Bán Khóa Học và Đào Tạo Quốc Tế của chúng tôi!",
      "Chúng tôi là một nền tảng học trực tuyến cung cấp một loạt các khóa học đa dạng và chất lượng, từ ngoại ngữ giao tiếp, IELTS học thuật, marketing, kinh doanh, phát triển cá nhân đến kỹ năng sống. Với đội ngũ giảng viên giàu kinh nghiệm và kiến thức chuyên môn sâu rộng, chúng tôi cam kết mang đến cho bạn những khóa học chất lượng cao và mang tính thực tiễn."
    ],
    highlights: [
      "Được tiếp cận hơn 1000 khóa học hàng đầu",
      "Các chủ đề phổ biến để tìm hiểu ngay bây giờ",
      "Tìm người hướng dẫn phù hợp cho bạn"
    ]
  },
  heroBadge: {
    prefix: "HỌC TỪ HÔM NAY",
    discount: "GIẢM GIÁ 30%"
  },
  hero: {
    eyebrow: "HỌC TỪ HÔM NAY - GIẢM GIÁ 30%",
    subtitle:
      "Giáo dục có thể được coi là sự truyền tải các giá trị và kiến thức tích lũy của xã hội.",
    title: "Giáo Dục Là Tạo Ra Tương Lai Tốt Đẹp Hơn.",
    description:
      "Giáo dục có thể được coi là sự truyền tải các giá trị và kiến thức tích lũy của xã hội.",
    ctaText: "BẮT ĐẦU",
    ctaLink: "#popular-courses",
    secondaryCtaText: "LIÊN HỆ",
    secondaryCtaLink: "#footer-contact",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
  },
  categories: [
    {
      id: "cat-1",
      title: "Marketing kỹ thuật số",
      courseCount: "51+ Khóa học",
      icon: "megaphone"
    },
    {
      id: "cat-2",
      title: "Thiết kế đồ họa",
      courseCount: "24+ Khóa học",
      icon: "palette"
    },
    {
      id: "cat-3",
      title: "Phát triển Web",
      courseCount: "56+ Khóa học",
      icon: "code"
    },
    {
      id: "cat-4",
      title: "Thiết kế UI/UX",
      courseCount: "36+ Khóa học",
      icon: "layout"
    }
  ],
  aboutCollage: {
    badgeNumber: "10k+",
    badgeText: "HỌC VIÊN TÍCH CỰC TRONG CÁC KHÓA HỌC CỦA CHÚNG TÔI",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    ],
    videoThumb:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80",
    bullets: [
      "Được tiếp cận hơn 1000 khóa học hàng đầu",
      "Các chủ đề phổ biến để tìm hiểu ngay bây giờ",
      "Tìm người hướng dẫn phù hợp cho bạn"
    ]
  },
  courses: [
    {
      id: "crs-1",
      title: "Phần mềm giáo dục và tập lệnh hệ thống PHP và JS",
      duration: "4h",
      rating: "5.00",
      lessons: 6,
      students: 2,
      level: "Tất cả trình độ",
      instructor: "monamedia",
      price: "2,100,000 ₫",
      oldPrice: "3,100,000 ₫",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80",
      description:
        "Làm chủ quy trình xây dựng nền tảng học trực tuyến LMS và ứng dụng thực tiễn với lộ trình bài bản từ giảng viên chuyên gia."
    },
    {
      id: "crs-2",
      title: "Tìm hiểu Figma – Đào tạo cơ bản về thiết kế UI/UX",
      duration: "22h 30m",
      rating: "5.00",
      lessons: 6,
      students: 2,
      level: "Trung cấp",
      instructor: "monamedia",
      price: "Miễn phí",
      oldPrice: "500,000 ₫",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=700&q=80",
      description:
        "Khóa đào tạo trực quan giúp học viên nắm vững tư duy thiết kế giao diện chuẩn quốc tế và thực hành dự án thực tế."
    },
    {
      id: "crs-3",
      title: "Khóa học phát triển Android 12 & Kotlin nâng cao",
      duration: "7h 30m",
      rating: "4.00",
      lessons: 6,
      students: 1,
      level: "Sơ cấp",
      instructor: "monamedia",
      price: "3,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=80",
      description:
        "Phát triển ứng dụng di động hiện đại với kiến trúc chuẩn, tích hợp thuật ngữ chuyên ngành Tiếng Anh CNTT toàn diện."
    },
    {
      id: "crs-4",
      title: "Khóa học lập kế hoạch kinh doanh hoàn chỉnh bao gồm hơn 20 mẫu",
      duration: "18h 30m",
      rating: "4.00",
      lessons: 6,
      students: 2,
      level: "Trung cấp",
      instructor: "monamedia",
      price: "1,900,000 ₫",
      oldPrice: "2,900,000 ₫",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
      description:
        "Xây dựng bản kế hoạch kinh doanh, thuyết trình gọi vốn song ngữ Anh - Việt cùng hơn 20 biểu mẫu thực chiến."
    }
  ],
  onlineCtaBanner: {
    title: "Nhận khóa học trực tuyến",
    subtitle:
      "Bạn muốn tiếp cận với kiến thức mới mỗi ngày và phát triển bản thân? Bạn muốn học tập linh hoạt và tiện lợi ngay tại nhà? Hãy đăng ký nhận khóa học trực tuyến ngay hôm nay!",
    ctaText: "THAM GIA"
  },
  whyChooseUs: {
    eyebrow: "LÝ DO CHỌN CHÚNG TÔI",
    title: "Hàng Trăm Chuyên Gia Trên Khắp Thế Giới Sẵn Sàng Trợ Giúp",
    description:
      "Chúng tôi tự hào có một đội ngũ hàng trăm chuyên gia đáng tin cậy và giàu kinh nghiệm từ khắp nơi trên thế giới. Đây là một trong những lý do tại sao bạn nên lựa chọn chúng tôi để hỗ trợ và truyền cảm hứng cho hành trình học tập của bạn.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    activeStudentsLabel: "10k+ Học Viên Tích Cực",
    features: [
      {
        id: "w-1",
        title: "Giảng Viên Chuyên Nghiệp",
        description:
          "Với đội ngũ giảng viên chuyên nghiệp và giàu kinh nghiệm, chúng tôi đảm bảo bạn nhận được sự hướng dẫn tận tâm và kiến thức chất lượng cao."
      },
      {
        id: "w-2",
        title: "Dễ Dàng Học Tập",
        description:
          "Với đội ngũ giảng viên chuyên nghiệp và giàu kinh nghiệm, chúng tôi đảm bảo bạn nhận được sự hướng dẫn tận tâm và kiến thức chất lượng cao."
      },
      {
        id: "w-3",
        title: "Thời Gian Linh Hoạt",
        description:
          "Với thời gian học linh hoạt, bạn có thể tự do sắp xếp lịch trình học tập phù hợp với cuộc sống bận rộn của mình mà không phải gặp khó khăn."
      },
      {
        id: "w-4",
        title: "Giá Cả Hợp Lý",
        description:
          "Chúng tôi cam kết mang đến giá cả hợp lý và cạnh tranh, đảm bảo rằng bạn nhận được giá trị tốt nhất cho sự đầu tư vào việc học tập của mình."
      }
    ]
  },
  stats: [
    { id: "st-1", number: "3.9k+", title: "Thành công đào tạo" },
    { id: "st-2", number: "15.8k+", title: "Khóa học hoàn thành" },
    { id: "st-3", number: "97.5k+", title: "Đánh giá hài lòng" },
    { id: "st-4", number: "100.2k+", title: "Cộng đồng học viên" }
  ],
  promoDiscountBanner: {
    eyebrow: "BẠN ĐÃ SẴN SÀNG CHO ƯU ĐÃI NÀY CHƯA",
    discountHighlight: "Ưu đãi 40%",
    redHighlight: "Cho 100 học viên đầu tiên",
    titleLine2: "đăng ký tài khoản",
    subtitle: "Chủ đề theo danh mục giáo dục",
    description:
      "Nhận quyền truy cập không giới hạn vào hơn 6.000 khóa học hàng đầu cho nhóm của bạn. Tìm hiểu và nâng cao các kỹ năng về ngoại ngữ, kinh doanh, công nghệ, thiết kế, v.v.",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
  },
  instructors: [
    {
      id: "ins-1",
      name: "Hoàng Vy",
      role: "Giảng viên",
      courses: "5 Khóa học",
      students: "80+ Học viên",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ins-2",
      name: "Thảo Linh",
      role: "Giảng viên",
      courses: "6 Khóa học",
      students: "95+ Học viên",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ins-3",
      name: "Bạch Ngân",
      role: "Giảng viên",
      courses: "3 Khóa học",
      students: "50+ Học viên",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ins-4",
      name: "Lê Hào",
      role: "Giảng viên",
      courses: "4 Khóa học",
      students: "70+ Học viên",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  events: [
    {
      id: "ev-1",
      title: "Nghệ thuật Giao tiếp và Thuyết trình",
      speaker: "Văn Long",
      speakerRole: "Giảng viên",
      speakerAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      location: "Mona Software - Công ty TNHH Phần Mềm Mona",
      time: "08:00 sáng - 10:00 sáng",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ev-2",
      title: "Công nghệ Trí tuệ nhân tạo và Tương lai của Công việc",
      speaker: "Văn Long",
      speakerRole: "Giảng viên",
      speakerAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      location: "Mona Software - Công ty TNHH Phần Mềm Mona",
      time: "08:00 sáng - 10:00 sáng",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ev-3",
      title: "Kỹ năng Quản lý Dự án Hiệu quả",
      speaker: "Văn Long",
      speakerRole: "Giảng viên",
      speakerAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      location: "Mona Software - Công ty TNHH Phần Mềm Mona",
      time: "08:00 sáng - 10:00 sáng",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  partnerSection: {
    eyebrow: "ĐỐI TÁC ĐÁNG TIN CẬY CỦA CHÚNG TÔI",
    titlePrefix: "Chúng Tôi Có Hơn",
    highlightCount: "4263+",
    titleSuffix: "Đối Tác Toàn Cầu",
    partners: [
      "EDUCATION",
      "UNIVERSITY",
      "BEST ONLINE",
      "EDUCENTER",
      "ACADEMY",
      "GLOBAL EDU",
      "CAMBRIDGE",
      "SCHOLARS"
    ]
  },
  dualPromoBanners: {
    left: {
      eyebrow: "KHÓA HỌC PHỔ BIẾN",
      title: "Nhận Các Khóa Học Tốt Nhất Nâng Cấp Kỹ Năng Của Bạn",
      ctaText: "LIÊN HỆ",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    right: {
      eyebrow: "KHÓA HỌC PHỔ BIẾN",
      title: "Các Khóa Học Hấp Dẫn Để Khám Phá Trí Tuệ",
      ctaText: "KHÁM PHÁ KHÓA HỌC",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
    }
  },
  testimonials: [
    {
      id: "rev-1",
      author: "Trần Văn Bình",
      role: "Sinh viên IT",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "“Khóa học ‘Kỹ năng Quản lý Dự án Hiệu quả’ đã giúp tôi nắm vững các kỹ năng quản lý dự án. Tôi đã học được cách lập kế hoạch, phân công công việc và kiểm soát tiến độ dự án một cách hiệu quả. Giảng viên rất giỏi và tận tâm trong việc truyền đạt kiến thức.”"
    },
    {
      id: "rev-2",
      author: "Nguyễn Thị Anh",
      role: "Học viên",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "“Khóa học ‘Digital Marketing Mastery’ thực sự tuyệt vời! Tôi đã học được rất nhiều về các chiến lược tiếp thị kỹ thuật số và cách áp dụng chúng vào công việc của mình. Nội dung khóa học rất cung cấp và giảng viên rất tận tâm. Tôi đã có thể áp dụng những kiến thức này ngay từ ngày đầu tiên sau khóa học.”"
    }
  ],
  news: [
    {
      id: "blog-1",
      title: "Bồi Dưỡng Tư Duy Ngoại Ngữ & Định Hướng Giáo Dục Tương Lai",
      date: "11 Th11, 2023",
      category: "Bởi Monamedia",
      excerpt:
        "Khám phá phương pháp học tập chủ động giúp học viên phát triển tư duy phản biện, giao tiếp quốc tế tự tin và xây dựng lộ trình sự nghiệp bền vững.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-2",
      title: "Bí Quyết Đồng Hành Cùng Học Viên Chinh Phục Chuẩn Đầu Ra Quốc Tế",
      date: "11 Th11, 2023",
      category: "Bởi Monamedia",
      excerpt:
        "Những chia sẻ thực tế từ đội ngũ cố vấn học thuật về cách duy trì động lực học tập trực tuyến và tối ưu hóa thời gian biểu mỗi ngày.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-3",
      title: "Khai Giảng Chuỗi Lớp Học Kỹ Năng Giao Tiếp & Học Thuật Mùa Mới",
      date: "11 Th11, 2023",
      category: "Bởi Monamedia",
      excerpt:
        "Cập nhật lịch khai giảng các chương trình đào tạo trực tuyến kết hợp thực hành chuyên sâu cùng đội ngũ giảng viên hàng đầu.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
