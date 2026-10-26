import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CourseProItem {
  id: string;
  title: string;
  instructor: string;
  level: string;
  price: string;
  badges: string[];
  categoryTab: string;
  lessons?: string;
  duration?: string;
  excerpt?: string;
  rating?: number;
  image: string;
}

export interface TrungTamTiengAnh18Data extends ClonedTemplateBaseData {
  heroCounters3: Array<{
    id: string;
    number: string;
    label: string;
  }>;
  popularCourses8: CourseProItem[];
  goalCounters4: Array<{
    id: string;
    number: string;
    label: string;
  }>;
  upcomingEvents3: CourseProItem[];
  studentReviews4: Array<{
    id: string;
    headline: string;
    content: string;
    author: string;
    role: string;
    avatar: string;
  }>;
  blogQuickLinks: string[];
}

export const trungTamTiengAnh18DefaultData: TrungTamTiengAnh18Data = {
  business: {
    name: "MONA COURSE PRO",
    phone: ["031 3728 397", "1900 636 648"],
    email: ["info@coursepro.edu.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Hỗ trợ trực tuyến 24/7",
    rating: 4.9,
    reviewCount: 800,
    aboutTitle: "Đạt Được Mục Tiêu Của Bạn Với CoursePro",
    aboutText: [
      "Học viện Đào tạo Ngoại ngữ & Kỹ năng Trực tuyến CoursePro kết nối hơn 250.000 học viên với 50+ giảng viên bản ngữ và chuyên gia đầu ngành."
    ]
  },
  hero: {
    eyebrow: "ONLINE ACADEMY & BOOKSTORE",
    title: "Học điều gì MỚI hôm nay",
    subtitle: "Bạn muốn học gì? Tìm kiếm hơn 1,205+ khóa học IELTS, TOEIC, Giao tiếp & Kỹ năng...",
    ctaText: "Bắt đầu",
    ctaLink: "#khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85"
  },
  heroCounters3: [
    { id: "hc-1", number: "1,205+", label: "Khóa học Online" },
    { id: "hc-2", number: "50+", label: "Giảng viên hàng đầu" },
    { id: "hc-3", number: "800+", label: "Đánh giá tích cực" }
  ],
  popularCourses8: [
    {
      id: "cp-1",
      title: "Tiếng Anh Chuyên Ngành Tài Chính & Phân Tích Đầu Tư (Phần 2)",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      price: "Miễn phí",
      badges: ["ĐẶC SẮC", "MIỄN PHÍ"],
      categoryTab: "Đang hot",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-2",
      title: "Làm chủ Ngữ pháp & Tư duy Tiếng Anh Học thuật một cách dễ dàng!",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      price: "450,000₫",
      badges: [],
      categoryTab: "Phổ biến",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-3",
      title: "Tiếng Anh Chuyên Ngành Kỹ Thuật Cơ Khí & Điện Công Nghiệp",
      instructor: "Mona Teacher",
      level: "Sơ cấp",
      price: "840,000₫",
      badges: [],
      categoryTab: "Đặc sắc",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-4",
      title: "Luyện Thi TOEIC 4 Kỹ Năng Cấp Tốc Cho Người Đi Làm",
      instructor: "Mona Teacher",
      level: "Sơ cấp",
      price: "250,000₫",
      badges: ["ĐẶC SẮC"],
      categoryTab: "Đang hot",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-5",
      title: "Đàm phán thành công: Làm chủ kỹ năng đàm phán Tiếng Anh thương mại",
      instructor: "Mona Teacher",
      level: "Tất cả trình độ",
      price: "390,000₫",
      badges: ["ĐẶC SẮC"],
      categoryTab: "Phổ biến",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-6",
      title: "Tư duy phản biện & Giải quyết vấn đề trong IELTS Writing Task 2",
      instructor: "Mona Teacher",
      level: "Sơ cấp",
      price: "Miễn phí",
      badges: ["ĐẶC SẮC", "MIỄN PHÍ"],
      categoryTab: "Đặc sắc",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-7",
      title: "Khóa học Tiếng Anh Kinh Doanh Thông Minh & Viết Báo Cáo 2025",
      instructor: "Mona Teacher",
      level: "Tất cả trình độ",
      price: "Miễn phí",
      badges: ["ĐẶC SẮC", "MIỄN PHÍ"],
      categoryTab: "Đang hot",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cp-8",
      title: "Quản lý thời gian & Phương pháp tự học IELTS 7.5+ ít căng thẳng hơn",
      instructor: "Mona Teacher",
      level: "Tất cả trình độ",
      price: "299,900₫",
      badges: ["ĐẶC SẮC"],
      categoryTab: "Phổ biến",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    }
  ],
  goalCounters4: [
    { id: "gc-1", number: "253,085+", label: "Học Sinh Đã Ghi Danh" },
    { id: "gc-2", number: "18,099+", label: "Lớp Học Đã Hoàn Thành" },
    {
      id: "gc-3",
      number: "88%",
      label: "Người Học Báo Cáo Lợi Ích Nghề Nghiệp"
    },
    {
      id: "gc-4",
      number: "4,038+",
      label: "Khoá Học Từ Giảng Viên Hàng Đầu"
    }
  ],
  upcomingEvents3: [
    {
      id: "ev-1",
      title: "Hội thảo: Chiến thuật đọc hiểu báo cáo tài chính bằng Tiếng Anh",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      lessons: "5 Bài học",
      duration: "5.2 Giờ",
      excerpt:
        "Học cách phân tích thuật ngữ tài chính và trình bày báo cáo đầu tư chuyên nghiệp...",
      price: "Miễn phí",
      badges: ["ĐẶC SẮC", "MIỄN PHÍ"],
      categoryTab: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ev-2",
      title: "Chuyên đề: Làm chủ Ngữ pháp Học thuật & Viết luận Đại học Quốc tế",
      instructor: "Hùng Nguyễn",
      level: "Sơ cấp",
      lessons: "6 Bài học",
      duration: "8.5 Giờ",
      excerpt:
        "Khóa học này sẽ bắt đầu với tổng quan về cấu trúc câu học thuật và cách lập luận sắc bén...",
      price: "450,000₫",
      badges: [],
      categoryTab: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ev-3",
      title: "Workshop: Tiếng Anh Kỹ thuật Cơ khí & Tự động hóa cho Kỹ sư",
      instructor: "Mona Teacher",
      level: "Sơ cấp",
      lessons: "5 Bài học",
      duration: "9.5 Giờ",
      excerpt:
        "Trang bị trọn bộ thuật ngữ đọc bản vẽ kỹ thuật và giao tiếp trong nhà máy đa quốc gia...",
      price: "840,000₫",
      badges: [],
      categoryTab: "Sự kiện",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    }
  ],
  studentReviews4: [
    {
      id: "sr-1",
      headline: "Chất lượng tuyệt vời!",
      content:
        "Tôi muốn đánh giá 5 sao vì sự hỗ trợ nhiệt tình của đội ngũ giảng viên. Họ đã giải đáp thắc mắc ngữ pháp của tôi chỉ trong vòng vài giờ!",
      author: "Minh Hoàng",
      role: "/ Chuyên viên Thiết kế, TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sr-2",
      headline: "Giáo trình bài bản",
      content:
        "Nền tảng xứng đáng nhận được 5 sao vì các tính năng luyện nghe thông minh, lộ trình rõ ràng và kho đề thi thử sát thực tế.",
      author: "Quốc Bảo",
      role: "/ Phóng viên, Hà Nội",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sr-3",
      headline: "Hỗ trợ khách hàng",
      content:
        "Tôi rất ấn tượng với dịch vụ chăm sóc học viên. Các trợ giảng sửa bài nói IELTS Speaking rất chi tiết từng lỗi phát âm.",
      author: "Thanh Thảo",
      role: "/ Chuyên viên Nhân sự, Đà Nẵng",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sr-4",
      headline: "Thiết kế trực quan",
      content:
        "Đây là nền tảng học ngoại ngữ trực tuyến mượt mà nhất mà tôi từng trải nghiệm. Không bao giờ hối tiếc vì đã đăng ký gói học trọn năm.",
      author: "Tuấn Kiệt",
      role: "/ Kỹ sư Phần mềm, TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    }
  ],
  blogQuickLinks: [
    "Lộ trình tự học IELTS từ 0 lên 7.0+ tại nhà cho người bận rộn",
    "Tầm quan trọng của động lực nội tại đối với sinh viên học ngoại ngữ",
    "Phương pháp đánh giá năng lực viết tiếng Anh hiện đại và hiệu quả",
    "Đã đến lúc thay đổi tư duy học từ vựng tiếng Anh theo ngữ cảnh thực tế"
  ],
  news: [
    {
      id: "cp-n1",
      title: "Kỹ năng giao tiếp cảm xúc bằng tiếng Anh khi quay lại trường học",
      date: "10 Tháng Mười, 2025",
      category: "737 lượt xem",
      excerpt:
        "Khi học sinh bước vào năm học mới, việc kết hợp âm nhạc và nhịp điệu giúp tiếp thu từ vựng nhanh gấp đôi...",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cp-n2",
      title: "Thách thức và cơ hội của xu hướng học tập toàn cầu hóa trực tuyến",
      date: "10 Tháng Mười, 2025",
      category: "101 lượt xem",
      excerpt:
        "Trong môi trường học thuật quốc tế hiện nay, kỹ năng tự học qua nền tảng số đóng vai trò quyết định...",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cp-n3",
      title: "Công nghệ AI hỗ trợ luyện đọc hiểu tiếng Anh hiệu quả như thế nào?",
      date: "10 Tháng Mười, 2025",
      category: "89 lượt xem",
      excerpt:
        "Thông qua các ứng dụng phân tích từ vựng thông minh, người đọc có thể nắm bắt ý chính nhanh chóng...",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
