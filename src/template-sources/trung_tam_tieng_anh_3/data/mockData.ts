import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh3HeroCard {
  id: string;
  title: string;
  description: string;
  icon: "users" | "rating" | "pass" | "class";
}

export interface TrungTamTiengAnh3FeatureTab {
  id: string;
  title: string;
  heading: string;
  description: string;
  bulletPoints: string[];
  image: string;
}

export interface TrungTamTiengAnh3Tutor {
  id: string;
  name: string;
  shortRole: string;
  avatar: string;
  portrait: string;
  credentials: Array<{
    icon: "degree" | "score" | "award" | "uni";
    title: string;
    subtitle: string;
  }>;
}

export interface TrungTamTiengAnh3FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrungTamTiengAnh3Data extends ClonedTemplateBaseData {
  heroCards: TrungTamTiengAnh3HeroCard[];
  subjectRows: string[][];
  featureTabs: TrungTamTiengAnh3FeatureTab[];
  tutors: TrungTamTiengAnh3Tutor[];
  faqs: TrungTamTiengAnh3FaqItem[];
}

export const trungTamTiengAnh3DefaultData: TrungTamTiengAnh3Data = {
  business: {
    name: "Mona Academy",
    phone: ["0123 456 789", "0909 688 789"],
    email: ["tuyensinh@monaacademy.edu.vn", "info@monaacademy.edu.vn"],
    address: "1073/23 CMT8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:30",
    rating: 4.9,
    reviewCount: 1000,
    aboutTitle: "Về Mona Academy",
    aboutText: [
      "Học viện Anh ngữ & Đào tạo Học thuật Quốc tế đồng hành cùng sinh viên đại học chinh phục IELTS, Tiếng Anh học thuật và các môn chuyên ngành bằng tiếng Anh."
    ],
    highlights: [
      "Lộ trình tinh gọn rút ngắn 50% thời gian tự ôn tập",
      "Hệ thống tài liệu song ngữ biên soạn độc quyền chuẩn giáo trình quốc tế",
      "Mentor & Giảng viên IELTS 8.0+ và Thạc sĩ từ các đại học danh tiếng"
    ]
  },
  hero: {
    eyebrow: "1,000+ sinh viên tin tưởng và yêu quý",
    subtitle: "Đồng hành cùng bạn chinh phục IELTS & các môn học thuật đại học quốc tế",
    title: "Chinh phục mục tiêu học tập đại học của bạn với",
    description: "Tài liệu đa dạng.",
    ctaText: "Đăng ký tư vấn lộ trình",
    ctaLink: "#contact",
    secondaryCtaText: "Khám phá khoá học",
    secondaryCtaLink: "#subjects",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
  },
  heroCards: [
    {
      id: "hc-1",
      title: "1,000+ học viên",
      description:
        "Bắt đầu chỉ với 10 bạn học viên ở lớp đầu tiên. Nhờ sự nỗ lực không ngừng nghỉ của đội ngũ nhà Uni, ngày càng nhiều bạn sinh viên biết đến và tin tưởng hơn.",
      icon: "users"
    },
    {
      id: "hc-2",
      title: "Điểm đánh giá 9/10",
      description:
        "Dựa trên đánh giá 500 bạn học viên. Bật mí là hầu hết học viên đều thích sự tận tâm của Tutor và tài liệu học tập nhà Uni đó!",
      icon: "rating"
    },
    {
      id: "hc-3",
      title: "98% sinh viên pass môn",
      description:
        "Với giảng viên chất lượng, sẽ hỗ trợ và giúp đảm bảo đầu ra cho sinh viên đạt điểm A/Distinction các môn học thuật.",
      icon: "pass"
    },
    {
      id: "hc-4",
      title: "50+ lớp học",
      description:
        "Số lượng phòng học đa dạng và phù hợp với từng cấp bậc của sinh viên từ nền tảng đến chuyên sâu.",
      icon: "class"
    }
  ],
  subjectRows: [
    [
      "Tiếng Anh Học Thuật (EAP)",
      "Nguyên Lý Kế Toán Song Ngữ",
      "Thống Kê Kinh Doanh",
      "Nguyên Lý Kinh Tế Học",
      "Kinh Tế Lượng Ứng Dụng",
      "Tài Chính Công Ty Quốc Tế",
      "Luyện Thi IELTS Academic 7.5+"
    ],
    [
      "Nguyên Lý Kế Toán",
      "Tài Chính Doanh Nghiệp",
      "Kinh Tế Vi Mô",
      "Kinh Tế Vĩ Mô",
      "Kinh Tế Lượng",
      "Xác Suất Thống Kê"
    ],
    [
      "Mô Hình Tài Chính",
      "Quản Trị Nguồn Nhân Lực",
      "Nguyên Lý Quản Trị",
      "Nguyên Lý Marketing",
      "Hành Vi Khách Hàng",
      "Kinh Doanh Quốc Tế",
      "Viết Luận Học Thuật (Essay Writing)"
    ]
  ],
  featureTabs: [
    {
      id: "tab-1",
      title: "Rút ngắn thời gian ôn tập",
      heading: "Hệ thống hóa kiến thức trọng tâm trong 1/3 thời gian",
      description:
        "Thay vì phải tự đọc hàng trăm trang giáo trình tiếng Anh chuyên ngành dày đặc, đội ngũ Mentor đã chắt lọc sơ đồ tư duy (Mindmap) và công thức cốt lõi nhất cho từng chương.",
      bulletPoints: [
        "Tóm tắt từ vựng học thuật và thuật ngữ chuyên ngành theo từng chủ đề",
        "Video bài giảng cô đọng 15-20 phút dễ dàng xem lại mọi lúc",
        "Chiến thuật phân bổ thời gian làm bài thi giữa kỳ và cuối kỳ hiệu quả"
      ],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "tab-2",
      title: "Tài liệu bài bản, cô đọng, dễ hiểu",
      heading: "Kho học liệu song ngữ biên soạn chuẩn giáo trình quốc tế",
      description:
        "Mọi khái niệm trừu tượng đều được minh họa bằng ví dụ thực tế sinh động, bảng biểu trực quan và chú thích thuật ngữ Anh - Việt rõ ràng.",
      bulletPoints: [
        "Sổ tay công thức & cấu trúc viết báo cáo học thuật chuẩn Harvard/APA",
        "Ngân hàng bài tập phân loại từ cơ bản đến nâng cao có lời giải chi tiết",
        "Cập nhật liên tục theo đề cương mới nhất của RMIT, ISB, WSU, UEH"
      ],
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "tab-3",
      title: "Hỗ trợ và giải đáp thắc mắc 1:1",
      heading: "Đồng hành sát sao 24/7 cùng đội ngũ Tutor tận tâm",
      description:
        "Không còn cảm giác bơ vơ khi gặp bài tập khó trước ngày thi. Bạn có thể đặt câu hỏi trực tiếp cho giảng viên và nhận phản hồi chi tiết ngay trong ngày.",
      bulletPoints: [
        "Sửa bài Writing, Assignment và thuyết trình 1-kèm-1 chi tiết từng lỗi",
        "Nhóm học tập riêng biệt cho từng lớp với trợ giảng túc trực hàng ngày",
        "Buổi phụ đạo miễn phí tăng cường trước kỳ thi Final Exam"
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "tab-4",
      title: "Học cùng giảng viên xuất sắc",
      heading: "Đội ngũ Thạc sĩ & Thủ khoa tốt nghiệp loại Xuất sắc",
      description:
        "100% giảng viên sở hữu IELTS 8.0+ và điểm tổng kết GPA 3.8/4.0 trở lên tại các trường đại học quốc tế hàng đầu, truyền cảm hứng học tập tích cực.",
      bulletPoints: [
        "Phương pháp sư phạm gần gũi, giải thích vấn đề phức tạp cực kỳ dễ hiểu",
        "Chia sẻ kinh nghiệm săn học bổng và thực tập tại các tập đoàn đa quốc gia",
        "Theo dõi sát tiến độ học tập cá nhân hóa của từng học viên"
      ],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "tab-5",
      title: "Nội dung ôn tập",
      heading: "Bám sát 100% khung chương trình đại học & chuẩn đầu ra",
      description:
        "Chương trình học được thiết kế khớp hoàn toàn với lịch trình từng tuần trên trường đại học, giúp sinh viên nắm chắc kiến thức ngay trên lớp.",
      bulletPoints: [
        "Tổng hợp Case Study thực tế tại thị trường Việt Nam và quốc tế",
        "Hướng dẫn kỹ năng tra cứu tài liệu học thuật và trích dẫn chuẩn xác",
        "Luyện kỹ năng thuyết trình tiếng Anh tự tin trước hội đồng giám khảo"
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "tab-6",
      title: "Đề thi thử",
      heading: "Luyện tập thực chiến với bộ đề thi thử sát đề thật 95%",
      description:
        "Đánh giá chính xác năng lực hiện tại qua các kỳ thi Mock Test định kỳ dưới áp lực thời gian thực, giúp tâm lý vững vàng khi bước vào phòng thi.",
      bulletPoints: [
        "Bộ đề dự đoán cập nhật mới mỗi học kỳ kèm đáp án chấm điểm chi tiết",
        "Phân tích lỗi sai thường gặp khiến sinh viên mất điểm đáng tiếc",
        "Cam kết hỗ trợ học lại miễn phí nếu chưa đạt mục tiêu đầu ra"
      ],
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=900&q=80"
    }
  ],
  tutors: [
    {
      id: "tutor-1",
      name: "Phạm Trung Kiên",
      shortRole: "Tutor nguyên lý kế toán ISB, WSU",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      portrait:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      credentials: [
        {
          icon: "degree",
          title: "Thạc sĩ",
          subtitle: "Giảng dạy ngôn ngữ"
        },
        {
          icon: "score",
          title: "8.0",
          subtitle: "IELTS Overall"
        },
        {
          icon: "award",
          title: "IELTS Musketeer",
          subtitle: "The IELTS Face-off mùa 4"
        },
        {
          icon: "uni",
          title: "Cử nhân",
          subtitle: "RMIT"
        }
      ]
    },
    {
      id: "tutor-2",
      name: "Trần Vĩnh Luân",
      shortRole: "Tutor Kinh tế vi mô & IELTS Academic",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      portrait:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      credentials: [
        {
          icon: "degree",
          title: "Thạc sĩ",
          subtitle: "Tài chính Quốc tế (Úc)"
        },
        {
          icon: "score",
          title: "8.5",
          subtitle: "IELTS Overall (9.0 Reading)"
        },
        {
          icon: "award",
          title: "Học bổng 100%",
          subtitle: "Western Sydney University"
        },
        {
          icon: "uni",
          title: "Thủ khoa",
          subtitle: "Viện Đào tạo Quốc tế ISB"
        }
      ]
    },
    {
      id: "tutor-3",
      name: "Nguyễn Minh Anh",
      shortRole: "Giảng viên Academic Writing & Marketing",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      portrait:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      credentials: [
        {
          icon: "degree",
          title: "Thạc sĩ",
          subtitle: "Truyền thông & Marketing"
        },
        {
          icon: "score",
          title: "8.0",
          subtitle: "IELTS Overall (8.5 Speaking)"
        },
        {
          icon: "award",
          title: "Chứng chỉ TESOL",
          subtitle: "Chuẩn giảng dạy quốc tế"
        },
        {
          icon: "uni",
          title: "Cử nhân",
          subtitle: "Đại học RMIT Việt Nam"
        }
      ]
    },
    {
      id: "tutor-4",
      name: "Lê Hoàng Nam",
      shortRole: "Tutor Tài chính Doanh nghiệp & Kinh tế lượng",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      portrait:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      credentials: [
        {
          icon: "degree",
          title: "CFA Level 2",
          subtitle: "Phân tích Tài chính"
        },
        {
          icon: "score",
          title: "8.0",
          subtitle: "IELTS Overall"
        },
        {
          icon: "award",
          title: "500+ học viên",
          subtitle: "Đạt High Distinction"
        },
        {
          icon: "uni",
          title: "Cử nhân",
          subtitle: "Đại học Ngoại Thương"
        }
      ]
    },
    {
      id: "tutor-5",
      name: "Võ Thảo Vy",
      shortRole: "Giảng viên IELTS & Thống kê Kinh doanh",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      portrait:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      credentials: [
        {
          icon: "degree",
          title: "Thạc sĩ",
          subtitle: "Ngôn ngữ học Ứng dụng"
        },
        {
          icon: "score",
          title: "8.5",
          subtitle: "IELTS Overall"
        },
        {
          icon: "award",
          title: "Top 1% GPA",
          subtitle: "Danh hiệu Dean's List"
        },
        {
          icon: "uni",
          title: "Cử nhân",
          subtitle: "University of Melbourne"
        }
      ]
    },
    {
      id: "tutor-6",
      name: "Đặng Quốc Bảo",
      shortRole: "Tutor Kinh tế vĩ mô & Quản trị học",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
      portrait:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      credentials: [
        {
          icon: "degree",
          title: "Thạc sĩ",
          subtitle: "Quản trị Kinh doanh MBA"
        },
        {
          icon: "score",
          title: "8.0",
          subtitle: "IELTS Academic"
        },
        {
          icon: "award",
          title: "6 năm kinh nghiệm",
          subtitle: "Luyện thi chương trình liên kết"
        },
        {
          icon: "uni",
          title: "Cử nhân",
          subtitle: "RMIT"
        }
      ]
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Minh Khôi",
      role: "Sinh viên Thiết kế",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Giảng viên nhiệt tình hỗ trợ, vui vẻ và giảng dạy rất dễ hiểu, giúp tôi theo kịp tiến độ của môn học tại trường."
    },
    {
      id: "rev-2",
      author: "Mỹ Duyên",
      role: "Sinh viên Marketing",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Giảng viên nhiệt tình hỗ trợ, vui vẻ và giảng dạy rất dễ hiểu, giúp tôi theo kịp tiến độ của môn học tại trường."
    },
    {
      id: "rev-3",
      author: "Kiên Cường",
      role: "Sinh viên Quản trị",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Giảng viên nhiệt tình hỗ trợ, vui vẻ và giảng dạy rất dễ hiểu, giúp tôi theo kịp tiến độ của môn học tại trường."
    },
    {
      id: "rev-4",
      author: "Phúc Lộc",
      role: "Sinh viên năm 3",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Nhờ bộ tài liệu tóm tắt Nguyên lý kế toán và đề thi thử sát thực tế của học viện mà mình đã đạt điểm Distinction kỳ vừa rồi."
    },
    {
      id: "rev-5",
      author: "Ngọc Trâm",
      role: "Sinh viên Tài chính",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Các anh chị Tutor sửa bài Essay từng câu chữ rất kỹ, chỉ ra lỗi lập luận giúp điểm Writing học thuật của mình tăng vượt bậc."
    },
    {
      id: "rev-6",
      author: "Gia Huy",
      role: "Sinh viên Kinh doanh Quốc tế",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Lớp học tương tác sôi nổi, không khí thoải mái và có video record đầy đủ để ôn lại trước ngày thi cuối kỳ."
    },
    {
      id: "rev-7",
      author: "Hoàng Vũ",
      role: "Sinh viên năm 1",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Mới vào năm nhất học hoàn toàn bằng tiếng Anh mình khá choáng, nhưng nhờ lộ trình kèm 1:1 tại đây mình đã bắt nhịp cực nhanh."
    },
    {
      id: "rev-8",
      author: "Hải Đăng",
      role: "Du học sinh Úc",
      avatar:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Dù lệch múi giờ khi du học tại Sydney nhưng mình vẫn học online buổi tối rất thuận tiện và được giải đáp bài tập siêu nhanh."
    },
    {
      id: "rev-9",
      author: "Thanh Mỹ",
      role: "Du học sinh",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Giảng viên nhiệt tình hỗ trợ, vui vẻ và giảng dạy rất dễ hiểu, giúp tôi đạt IELTS 7.5 và vượt qua các môn chuyên ngành xuất sắc."
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Thời gian hoàn thành khoá học trong bao lâu ?",
      answer:
        "Mỗi khoá học tiêu chuẩn kéo dài từ 8 đến 12 tuần (tương đương 1 học kỳ đại học). Ngoài ra, học viện có các khoá ôn tập cấp tốc 3 - 4 tuần trước kỳ thi giữa kỳ (Midterm) và cuối kỳ (Final) giúp sinh viên hệ thống hóa toàn bộ kiến thức trọng tâm nhanh nhất."
    },
    {
      id: "faq-2",
      question: "Chi phí theo cấp bậc có chênh lệch nhiều không?",
      answer:
        "Học phí được thiết kế rất hợp lý dành cho sinh viên và chia theo từng gói môn học đơn lẻ hoặc combo học kỳ. Khi đăng ký theo nhóm từ 2 bạn trở lên hoặc đăng ký combo 2-3 môn, học viên được ưu đãi giảm ngay từ 15% đến 25% học phí."
    },
    {
      id: "faq-3",
      question: "Các khoá học cấp tốc cho người đi du học nào tốt nhất ?",
      answer:
        "Đối với các bạn chuẩn bị du học Úc, Anh, Mỹ, Canada, gói combo 'IELTS Academic Intensive + Academic Writing & Research Skills + Môn cơ sở ngành (Kinh tế/Kế toán/Tài chính)' là lựa chọn tối ưu giúp bạn tự tin hòa nhập ngay học kỳ đầu tiên."
    },
    {
      id: "faq-4",
      question: "Tôi ở xa, có mở khoá học online tại nhà vào ban đêm không?",
      answer:
        "Có! Học viện tổ chức song song các lớp Offline tại TP.HCM và lớp Online tương tác trực tiếp qua Zoom vào khung giờ tối (18:30 - 21:30) phù hợp cho cả sinh viên bận lịch trên trường lẫn du học sinh ở các múi giờ khác nhau."
    },
    {
      id: "faq-5",
      question: "Có lớp học vào riêng thứ 7 và chủ nhật hay không?",
      answer:
        "Hoàn toàn có. Chúng tôi mở đều đặn các lớp chuyên đề cuối tuần vào sáng và chiều Thứ 7, Chủ Nhật hàng tuần dành cho các bạn sinh viên có lịch học dày đặc các ngày trong tuần."
    },
    {
      id: "faq-6",
      question: "Thời gian mở lớp là khi nào?",
      answer:
        "Lớp mới được khai giảng liên tục vào đầu mỗi tháng và đầu mỗi học kỳ (Spring, Summer, Fall). Bạn có thể liên hệ hotline hoặc đăng ký trực tiếp trên website để nhận lịch khai giảng lớp gần nhất."
    }
  ]
};
