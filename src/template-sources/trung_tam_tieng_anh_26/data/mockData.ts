import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface EducacionCourse {
  id: string;
  title: string;
  category: "ielts" | "business" | "cambridge" | "coding-ai";
  level: string;
  lessons: number;
  students: string;
  rating: number;
  price: string;
  oldPrice: string;
  instructor: string;
  instructorAvatar: string;
  image: string;
}

export interface TrungTamTiengAnh26Data extends ClonedTemplateBaseData {
  heroStats: Array<{
    id: string;
    value: string;
    label: string;
  }>;
  aiPillars: Array<{
    id: string;
    badge: string;
    title: string;
    description: string;
    icon: "mic" | "video" | "cpu" | "award";
  }>;
  onlineCourses: EducacionCourse[];
  cefrRoadmap: Array<{
    id: string;
    stage: string;
    cefr: string;
    target: string;
    duration: string;
    skills: string[];
  }>;
  mentors: Array<{
    id: string;
    name: string;
    credential: string;
    specialty: string;
    avatar: string;
  }>;
  pricingPlans: Array<{
    id: string;
    name: string;
    price: string;
    period: string;
    popular?: boolean;
    features: string[];
  }>;
  reviews: Array<{
    id: string;
    student: string;
    score: string;
    quote: string;
    avatar: string;
  }>;
}

export const trungTamTiengAnh26DefaultData: TrungTamTiengAnh26Data = {
  business: {
    name: "Học Viện Giáo Dục Trực Tuyến & Ngoại Ngữ Quốc Tế Educacion",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["support@educacion.mona.media", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Hỗ trợ học trực tuyến 24/7",
    rating: 5.0,
    reviewCount: 1580,
    aboutTitle: "CHUYỂN ĐỔI SỐ GIÁO DỤC & ĐÀO TẠO NGOẠI NGỮ TRỌN GÓI",
    aboutText: [
      "Educacion (The Mona EdTech Group) là hệ sinh thái học ngoại ngữ trực tuyến, phòng học ảo Live Class 1-1 và trợ lý chấm chữa phát âm AI tự động hóa giúp học viên Việt Nam chinh phục IELTS, Business English và chứng chỉ quốc tế ngay tại nhà."
    ],
    highlights: [
      "Nền tảng LMS thông minh tích hợp AI chấm phát âm & sửa lỗi Writing tức thì",
      "Lớp học trực tuyến tương tác 2 chiều 1-kèm-1 và nhóm nhỏ cùng giảng viên 8.5+ IELTS",
      "Cam kết chuẩn đầu ra CEFR/IELTS bằng hợp đồng đào tạo điện tử"
    ]
  },
  hero: {
    eyebrow: "THE MONA EDTECH GROUP • EDUCACION",
    title: "Đào tạo Ngoại ngữ & Kỹ năng số trọn gói cho thế hệ toàn cầu",
    subtitle: "Live Class 1-1 · Luyện thi IELTS AI · Tiếng Anh Doanh Nghiệp · Tự động hóa lộ trình",
    description:
      "Bứt phá năng lực tiếng Anh học thuật và giao tiếp quốc tế với nền tảng giáo dục trực tuyến thế hệ mới tích hợp trí tuệ nhân tạo.",
    ctaText: "Trải nghiệm học thử miễn phí",
    ctaLink: "#courses",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=85"
  },
  heroStats: [
    { id: "hs-1", value: "48,500+", label: "Học viên trực tuyến toàn cầu" },
    { id: "hs-2", value: "240+", label: "Khóa học Ngoại ngữ & Kỹ năng" },
    { id: "hs-3", value: "98.4%", label: "Đạt mục tiêu IELTS / TOEIC" },
    { id: "hs-4", value: "24/7", label: "Trợ lý AI chấm bài tức thì" }
  ],
  aiPillars: [
    {
      id: "ai-1",
      badge: "AI SPEECH LAB",
      title: "Chấm phát âm AI chuẩn IPA từng âm tiết",
      description:
        "Công nghệ nhận diện giọng nói phân tích trọng âm, ngữ điệu và khẩu hình giúp học viên sửa lỗi phát âm tiếng Anh ngay lập tức.",
      icon: "mic"
    },
    {
      id: "ai-2",
      badge: "LIVE INTERACTIVE CLASS",
      title: "Phòng học trực tuyến 1-1 & Nhóm nhỏ HD",
      description:
        "Tương tác trực tiếp cùng giảng viên bản ngữ và chuyên gia IELTS 8.5+ với bảng trắng thông minh và kho học liệu số hóa.",
      icon: "video"
    },
    {
      id: "ai-3",
      badge: "ADAPTIVE LEARNING",
      title: "Lộ trình cá nhân hóa tự động theo năng lực",
      description:
        "Thuật toán AI tự động điều chỉnh bài tập từ vựng, ngữ pháp và đề thi thử sát với điểm yếu của từng học viên.",
      icon: "cpu"
    },
    {
      id: "ai-4",
      badge: "GLOBAL CERTIFICATE",
      title: "Chứng chỉ Quốc tế & Cam kết đầu ra",
      description:
        "Hệ thống đánh giá định kỳ theo khung tham chiếu châu Âu CEFR (A1 – C2) và bảo hành học lại miễn phí nếu chưa đạt band điểm.",
      icon: "award"
    }
  ],
  onlineCourses: [
    {
      id: "ed-1",
      title: "IELTS Academic Masterclass 7.5+ (Full 4 Kỹ Năng + AI Writing)",
      category: "ielts",
      level: "B2 → C1",
      lessons: 64,
      students: "4,280 học viên",
      rating: 5.0,
      price: "4,900,000 ₫",
      oldPrice: "7,500,000 ₫",
      instructor: "ThS. David Morrison (IELTS 9.0)",
      instructorAvatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ed-2",
      title: "Business English & Đàm Phán Thương Mại Quốc Tế Trọn Gói",
      category: "business",
      level: "B1 → B2+",
      lessons: 48,
      students: "3,150 học viên",
      rating: 4.9,
      price: "3,600,000 ₫",
      oldPrice: "5,200,000 ₫",
      instructor: "Ms. Nguyễn Lan Hương (MBA UK)",
      instructorAvatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ed-3",
      title: "Cambridge Starters – Movers – Flyers Trực Tuyến 1 Kèm 1",
      category: "cambridge",
      level: "A1 → A2",
      lessons: 50,
      students: "5,620 học viên",
      rating: 5.0,
      price: "3,200,000 ₫",
      oldPrice: "4,800,000 ₫",
      instructor: "Ms. Emma Clarke (CELTA)",
      instructorAvatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ed-4",
      title: "Tiếng Anh Chuyên Ngành Công Nghệ, Lập Trình & AI Prompting",
      category: "coding-ai",
      level: "B1 → C1",
      lessons: 40,
      students: "2,890 học viên",
      rating: 4.9,
      price: "2,900,000 ₫",
      oldPrice: "4,500,000 ₫",
      instructor: "Mr. Trần Minh Quân (Tech Lead)",
      instructorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ed-5",
      title: "Luyện Phản Xạ Giao Tiếp Tiếng Anh Bản Xứ 1-1 (365 Ngày)",
      category: "business",
      level: "A2 → B2",
      lessons: 90,
      students: "6,400 học viên",
      rating: 5.0,
      price: "4,200,000 ₫",
      oldPrice: "6,500,000 ₫",
      instructor: "Mr. Michael Evans (TESOL)",
      instructorAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ed-6",
      title: "IELTS Intensive Speaking & Writing Chữa Bài Chi Tiết 1-1",
      category: "ielts",
      level: "B1 → C1",
      lessons: 36,
      students: "3,740 học viên",
      rating: 5.0,
      price: "3,800,000 ₫",
      oldPrice: "5,500,000 ₫",
      instructor: "Ms. Hoàng Bảo Trâm (IELTS 8.5)",
      instructorAvatar:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    }
  ],
  cefrRoadmap: [
    {
      id: "rm-1",
      stage: "Chặng 1: Nền tảng Ngữ âm & Phản xạ",
      cefr: "A1 – A2 (Foundation)",
      target: "IELTS 4.0 – 5.0 / Giao tiếp tự tin",
      duration: "8 tuần",
      skills: [
        "Chuẩn hóa 44 âm IPA cùng AI Speech Lab",
        "1.500 từ vựng cốt lõi & cấu trúc câu giao tiếp",
        "Nghe hiểu hội thoại đời sống và công sở cơ bản"
      ]
    },
    {
      id: "rm-2",
      stage: "Chặng 2: Tăng tốc Học thuật & Thuyết trình",
      cefr: "B1 – B2 (Intermediate)",
      target: "IELTS 6.0 – 6.5 / TOEIC 750+",
      duration: "10 tuần",
      skills: [
        "Kỹ thuật viết Academic Essay Task 1 & Task 2",
        "Thuyết trình, phản biện và đàm phán bằng tiếng Anh",
        "Luyện bộ đề thi thật trên phòng thi máy tính ảo"
      ]
    },
    {
      id: "rm-3",
      stage: "Chặng 3: Làm chủ Ngôn ngữ Toàn cầu",
      cefr: "C1 – C2 (Mastery)",
      target: "IELTS 7.5 – 8.5+ / Học bổng Du học",
      duration: "10 tuần",
      skills: [
        "Tư duy ngôn ngữ học thuật chuyên sâu như người bản xứ",
        "Chiến thuật xử lý câu hỏi khó Speaking Part 3 & Reading",
        "Hoàn thiện hồ sơ phỏng vấn học bổng và tập đoàn đa quốc gia"
      ]
    }
  ],
  mentors: [
    {
      id: "mt-1",
      name: "ThS. David Morrison",
      credential: "IELTS 9.0 • Cựu Giám khảo Quốc tế",
      specialty: "Chuyên gia Academic Writing & Speaking",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mt-2",
      name: "ThS. Nguyễn Lan Hương",
      credential: "MBA University of Leeds (UK) • IELTS 8.5",
      specialty: "Tiếng Anh Doanh nghiệp & Thuyết trình C-Level",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mt-3",
      name: "Ms. Emma Clarke",
      credential: "Chứng chỉ CELTA Cambridge • 12 năm KN",
      specialty: "Phát âm Chuẩn Anh - Anh & Cambridge Thiếu nhi",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mt-4",
      name: "Ms. Hoàng Bảo Trâm",
      credential: "IELTS 8.5 Overall (9.0 Reading & Listening)",
      specialty: "Chiến thuật Luyện thi IELTS Cấp tốc",
      avatar:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80"
    }
  ],
  pricingPlans: [
    {
      id: "pl-1",
      name: "Gói Tự Học Thông Minh AI",
      price: "1,990,000 ₫",
      period: "/ 6 tháng",
      features: [
        "Truy cập toàn bộ 240+ khóa học video HD",
        "Không giới hạn lượt chấm phát âm & Writing AI",
        "Kho 200+ đề thi thử IELTS/TOEIC trên máy tính",
        "Cấp chứng chỉ hoàn thành khóa học trực tuyến"
      ]
    },
    {
      id: "pl-2",
      name: "Gói Chuyên Sâu Trọn Gói",
      price: "4,900,000 ₫",
      period: "/ trọn khóa",
      popular: true,
      features: [
        "36 buổi Live Class tương tác trực tiếp cùng Giảng viên",
        "Trợ lý AI + Giảng viên chấm chữa bài Writing 1-1",
        "Cam kết đầu ra IELTS/CEFR bằng văn bản",
        "Tặng tài khoản AI Speech Lab VIP 12 tháng"
      ]
    },
    {
      id: "pl-3",
      name: "Gói VIP 1-Kèm-1 Doanh Nhân",
      price: "8,900,000 ₫",
      period: "/ lộ trình riêng",
      features: [
        "Lịch học linh hoạt 100% theo giờ rảnh của học viên",
        "1 Giảng viên Bản ngữ / IELTS 8.5+ kèm riêng 1 học viên",
        "Thiết kế giáo trình cá nhân hóa theo ngành nghề",
        "Bảo hành kết quả và hỗ trợ học thuật 24/7"
      ]
    }
  ],
  reviews: [
    {
      id: "rv-1",
      student: "Lê Minh Khôi – Kỹ sư Phần mềm",
      score: "Đạt 7.5 IELTS sau 12 tuần",
      quote:
        "Nhờ tính năng chấm bài Writing AI kết hợp các buổi học Live 1-1 trên Educacion, mình đã nâng band Writing từ 5.5 lên 7.0 dù bận đi làm toàn thời gian.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rv-2",
      student: "Trần Ngọc Thảo Vy – Sinh viên ĐH Ngoại Thương",
      score: "Đạt 8.0 IELTS & Học bổng trao đổi Châu Âu",
      quote:
        "Giao diện phòng học trực tuyến cực kỳ mượt mà, kho đề thi thử giống hệt kỳ thi IELTS trên máy tính của IDP/BC giúp mình bước vào phòng thi đầy tự tin.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
