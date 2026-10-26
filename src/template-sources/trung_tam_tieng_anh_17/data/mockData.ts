import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LearnProCourseItem {
  id: string;
  title: string;
  instructor: string;
  level: string;
  price: string;
  badges: string[];
  rating: number;
  image: string;
}

export interface TrungTamTiengAnh17Data extends ClonedTemplateBaseData {
  mentorSection: {
    greeting: string;
    quote: string;
    col1Title: string;
    col1Desc: string;
    col2Title: string;
    col2Desc: string;
    image: string;
  };
  platformFeatures4: Array<{
    id: string;
    title: string;
  }>;
  skillTracks3: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  courses6: LearnProCourseItem[];
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const trungTamTiengAnh17DefaultData: TrungTamTiengAnh17Data = {
  business: {
    name: "LEARN PRO",
    phone: ["1900 636 648", "0908 555 999"],
    email: ["support@learnpro.edu.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Hỗ trợ học viên 24/7",
    rating: 4.9,
    reviewCount: 200000,
    aboutTitle: "Nền Tảng Học Ngoại Ngữ & Kỹ Năng Trực Tuyến Hàng Đầu",
    aboutText: [
      "Hãy cùng chúng tôi khám phá và mở rộng kiến thức của bạn thông qua các khóa học trực tuyến chất lượng, đáng tin cậy và tiện lợi. Hãy đăng ký và bắt đầu hành trình chinh phục ngoại ngữ của bạn ngay hôm nay."
    ]
  },
  hero: {
    eyebrow: "MONA LEARN PRO",
    title: "Khám Phá Và Đăng Ký Khóa Học Chất Lượng Cao",
    subtitle:
      "Với mục tiêu mang đến cho bạn những kiến thức, kỹ năng ngoại ngữ và cơ hội phát triển cá nhân, chúng tôi cung cấp một loạt các khóa học đa dạng trong nhiều lĩnh vực khác nhau.",
    ctaText: "ĐĂNG KÝ NGAY",
    ctaLink: "#khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85"
  },
  mentorSection: {
    greeting: "Xin chào, tôi là Văn Long 👋",
    quote:
      "“Tôi biết rõ cuộc đấu tranh, sự phấn đấu và hành trình tươi đẹp mà bạn đang đi.”",
    col1Title: "Tìm hiểu kiến thức chuyên sâu.",
    col1Desc:
      "Được hợp tác với các chuyên gia ngôn ngữ và giảng viên đã làm việc nhiều năm tại các trường đại học quốc tế nổi tiếng.",
    col2Title: "Nhận một lộ trình hữu ích.",
    col2Desc:
      "Cá nhân hóa lộ trình từ mất gốc đến thành thạo giao tiếp và đạt chứng chỉ IELTS/TOEIC mục tiêu.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
  },
  platformFeatures4: [
    {
      id: "pf-1",
      title: "Hỗ trợ đa nền tảng cho việc dạy và học mọi lúc mọi nơi"
    },
    {
      id: "pf-2",
      title: "Nhanh chóng và dễ dàng để bắt đầu khóa học đầu tiên của bạn"
    },
    {
      id: "pf-3",
      title: "Tham gia nhiều khóa học ngoại ngữ & kỹ năng cùng một lúc"
    },
    {
      id: "pf-4",
      title: "Theo dõi tiến độ học tập AI và nhận phản hồi chấm bài nhanh chóng"
    }
  ],
  skillTracks3: [
    {
      id: "sk-1",
      title: "Kỹ năng giao tiếp hiệu quả",
      description:
        "Khóa học này sẽ giúp bạn giao tiếp tiếng Anh trôi chảy hơn trong cả môi trường công việc và cuộc sống cá nhân.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sk-2",
      title: "Luyện thi IELTS Học thuật",
      description:
        "Chiến thuật làm bài Reading, Listening và chấm chữa Writing/Speaking chi tiết giúp bứt phá band điểm 7.0+.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sk-3",
      title: "Tiếng Anh thương mại B2B",
      description:
        "Viết email chuyên nghiệp, đàm phán hợp đồng và thuyết trình dự án tự tin trước đối tác đa quốc gia.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80"
    }
  ],
  courses6: [
    {
      id: "c-1",
      title: "Khóa học Tiếng Anh cho Lập trình viên & IT toàn cầu",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      price: "1,290,000₫",
      badges: ["ĐẶC SẮC"],
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-2",
      title: "Khóa học Từ vựng & Giao tiếp Chuyên ngành Thiết kế",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      price: "450,000₫",
      badges: [],
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-3",
      title: "Khóa học Đọc hiểu Tài chính & Đầu tư bằng Tiếng Anh",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      price: "840,000₫",
      badges: [],
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-4",
      title: "Khóa học Tiếng Anh Giao tiếp Phản xạ Bản xứ",
      instructor: "Mona Teacher",
      level: "Sơ cấp",
      price: "250,000₫",
      badges: ["ĐẶC SẮC"],
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-5",
      title: "Khóa học Viết Content & Marketing Quốc tế bằng Tiếng Anh",
      instructor: "Mona Teacher",
      level: "Tất cả trình độ",
      price: "390,000₫",
      badges: ["ĐẶC SẮC"],
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-6",
      title: "Khóa học Kỹ năng Thuyết trình Tiếng Anh Trước Đám Đông",
      instructor: "Mona Teacher",
      level: "Sơ cấp",
      price: "Miễn phí",
      badges: ["ĐẶC SẮC", "MIỄN PHÍ"],
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "lp-t1",
      author: "Nguyễn Anh",
      role: "/ Học Viên",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã đăng ký một khóa học trên website này và tôi rất hài lòng với trải nghiệm của mình. Giao diện trang web thân thiện và dễ sử dụng, cho phép tôi dễ dàng tìm kiếm và chọn lựa khóa học phù hợp."
    },
    {
      id: "lp-t2",
      author: "Trần Bình",
      role: "/ Học Viên",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã tham gia một khóa học trực tuyến trên trang web này và tổng thể, tôi rất hài lòng với trải nghiệm của mình. Nội dung khóa học rất cung cấp nhiều kiến thức thực tế và đáng giá so với chi phí."
    },
    {
      id: "lp-t3",
      author: "Mai Hương",
      role: "/ Học Viên",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã tham gia khóa Tiếng Anh giao tiếp trên trang web này và rất ấn tượng với sự hỗ trợ chấm phát âm tận tình từ đội ngũ giảng viên."
    },
    {
      id: "lp-t4",
      author: "Phạm Thành",
      role: "/ Học Viên",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Lộ trình học rất rõ ràng từng tuần, có bài tập thực hành tương tác ngay sau mỗi video. Đội ngũ hỗ trợ giải đáp câu hỏi rất nhanh chóng."
    }
  ],
  news: [
    {
      id: "lp-n1",
      title: "Phương pháp Shadowing là gì? Quy trình luyện nói tiếng Anh chuẩn bản xứ tại nhà",
      date: "20 Th10, 2025",
      category: "Video & Tips",
      excerpt: "Hướng dẫn chi tiết kỹ thuật nhại giọng giúp cải thiện ngữ điệu và phản xạ.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "lp-n2",
      title: "Tầm quan trọng của động lực nội tại khi tự học ngoại ngữ trực tuyến",
      date: "18 Th10, 2025",
      category: "Phương pháp học",
      excerpt: "Cách duy trì thói quen học 30 phút mỗi ngày mà không bị bỏ cuộc giữa chừng.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "lp-n3",
      title: "Giải pháp đánh giá năng lực viết luận tiếng Anh hiện đại dành cho sinh viên",
      date: "15 Th10, 2025",
      category: "Kinh doanh & Học thuật",
      excerpt: "Ứng dụng tiêu chí chấm điểm IELTS Writing để nâng cấp kỹ năng viết học thuật.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Những khóa học nào được bao gồm trong tài khoản đăng ký của tôi?",
      answer:
        "Tài khoản học viên được truy cập trọn đời toàn bộ video bài giảng Full HD, kho tài liệu PDF, bài tập tương tác và phòng luyện phát âm AI của khóa học đã đăng ký."
    },
    {
      id: "faq-2",
      question: "Các khóa học video có thể tải xuống học ngoại tuyến được không?",
      answer:
        "Có, bạn có thể tải bài giảng về ứng dụng di động LearnPro trên iOS và Android để học mọi lúc ngay cả khi không có kết nối Internet."
    },
    {
      id: "faq-3",
      question: "Tôi cần chuẩn bị gì để bắt đầu học tiếng Anh cho người mới?",
      answer:
        "Bạn chỉ cần làm bài kiểm tra xếp lớp miễn phí 10 phút trên hệ thống, nền tảng sẽ tự động gợi ý lộ trình khởi đầu phù hợp nhất với trình độ của bạn."
    },
    {
      id: "faq-4",
      question: "Tôi có nhận được phản hồi sửa bài từ giảng viên không?",
      answer:
        "Mỗi bài tập nói và viết của bạn đều được đội ngũ giảng viên và trợ giảng 8.0+ IELTS chấm điểm, sửa lỗi chi tiết trong vòng 24 giờ."
    }
  ]
};
