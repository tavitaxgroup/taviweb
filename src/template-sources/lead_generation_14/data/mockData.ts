import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ElearningCourseItem {
  id: string;
  title: string;
  instructor: string;
  level: string;
  category: string;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  badgeType?: "discount" | "free";
  rating: number;
  reviewsCount: number;
  image: string;
}

export interface LeadGeneration14Data extends ClonedTemplateBaseData {
  heroHighlights: {
    coursesCount: string;
    instructorsCount: string;
    collageImages: string[];
  };
  blueFeatureStrip: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  topCategories: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  courseTabs: string[];
  courses: ElearningCourseItem[];
  helpBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
  };
  dualPromoCards: {
    instructorCard: {
      title: string;
      description: string;
      buttonText: string;
      image: string;
    };
    studentCard: {
      title: string;
      description: string;
      buttonText: string;
      image: string;
    };
  };
  partnerInstitutions: Array<{
    id: string;
    name: string;
    subtitle: string;
    color: string;
  }>;
}

export const leadGeneration14DefaultData = {
  business: {
    name: "M.S/eLearning",
    phone: ["031 3728 397", "1900 636 648"],
    email: ["info@themona.global", "support@mselearning.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Hỗ trợ học viên trực tuyến 24/7",
    rating: 4.95,
    reviewCount: 5500,
    aboutTitle: "Học Viên Nói Gì Về M.S/eLearning",
    aboutText: [
      "Giải pháp đào tạo trực tuyến toàn diện cho mọi trung tâm, trường học và học viên cá nhân. Hàng chục ngàn học viên yêu thích nền tảng bởi lộ trình bài bản và tính ứng dụng thực tiễn cao.",
      "Nâng tầm tổ chức đào tạo và sự nghiệp của bạn lên một tầm cao mới."
    ],
    experienceYears: "10+"
  },
  hero: {
    eyebrow: "KHỞI ĐẦU THÀNH CÔNG",
    title: "Truy Cập Hơn 5500+ Khóa Học Từ 480 Giảng Viên & Học Viện",
    subtitle: "Đưa tổ chức học tập và năng lực chuyên môn của bạn lên một tầm cao mới.",
    ctaText: "Bắt đầu ngay",
    ctaLink: "#khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
  },
  heroHighlights: {
    coursesCount: "5500+",
    instructorsCount: "480",
    collageImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    ]
  },
  blueFeatureStrip: [
    {
      id: "bf-1",
      title: "Làm Chủ",
      subtitle: "Kỹ Năng Thiết Yếu"
    },
    {
      id: "bf-2",
      title: "Nhận Chứng Chỉ",
      subtitle: "Và Bằng Cấp Quốc Tế"
    },
    {
      id: "bf-3",
      title: "Sẵn Sàng Cho",
      subtitle: "Sự Nghiệp Tương Lai"
    },
    {
      id: "bf-4",
      title: "Tinh Thông",
      subtitle: "Đa Lĩnh Vực Chuyên Môn"
    }
  ],
  topCategories: [
    { id: "cat-1", name: "Thiết Kế & Đồ Họa", icon: "palette" },
    { id: "cat-2", name: "Lập Trình Phần Mềm", icon: "code" },
    { id: "cat-3", name: "Phong Cách Sống", icon: "sparkles" },
    { id: "cat-4", name: "Phát Triển Bản Thân", icon: "lightbulb" },
    { id: "cat-5", name: "Quản Trị Kinh Doanh", icon: "briefcase" },
    { id: "cat-6", name: "Tài Chính & Đầu Tư", icon: "chart" },
    { id: "cat-7", name: "Tiếp Thị Số (Marketing)", icon: "megaphone" },
    { id: "cat-8", name: "Nhiếp Ảnh & Dựng Phim", icon: "camera" },
    { id: "cat-9", name: "Khoa Học Dữ Liệu", icon: "database" },
    { id: "cat-10", name: "Sức Khỏe & Thể Hình", icon: "heart" },
    { id: "cat-11", name: "Âm Nhạc & Nghệ Thuật", icon: "music" },
    { id: "cat-12", name: "Giảng Dạy & Học Thuật", icon: "graduation" }
  ],
  courseTabs: ["Tất cả", "Xu hướng", "Phổ biến", "Nổi bật", "Thiết kế"],
  courses: [
    {
      id: "c-1",
      title: "Kỹ Thuật Cơ Khí & Thiết Kế Mô Hình 3D Thực Chiến",
      instructor: "Giảng viên Mona",
      level: "Trung cấp",
      category: "Xu hướng",
      price: "50,000₫",
      oldPrice: "69,000₫",
      badgeText: "-28%",
      badgeType: "discount",
      rating: 5,
      reviewsCount: 12,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-2",
      title: "Đầu Tư Chứng Khoán Bằng Phân Tích Kỹ Thuật Chuyên Sâu",
      instructor: "Giảng viên Mona",
      level: "Cơ bản",
      category: "Phổ biến",
      price: "250,000₫",
      rating: 5,
      reviewsCount: 18,
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-3",
      title: "Nghệ Thuật Đàm Phán Thương Lượng Đỉnh Cao Trong Kinh Doanh",
      instructor: "Giảng viên Mona",
      level: "Mọi cấp độ",
      category: "Nổi bật",
      price: "390,000₫",
      rating: 5,
      reviewsCount: 9,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-4",
      title: "Làm Chủ Quản Lý Thời Gian: Tăng Gấp Đôi Hiệu Suất Làm Việc",
      instructor: "Giảng viên Mona",
      level: "Mọi cấp độ",
      category: "Xu hướng",
      price: "299,900₫",
      rating: 5,
      reviewsCount: 15,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-5",
      title: "Lập Trình Angular Toàn Tập — Xây Dựng Ứng Dụng Web Thực Tế",
      instructor: "Giảng viên Mona",
      level: "Cơ bản",
      category: "Phổ biến",
      price: "499,900₫",
      rating: 5,
      reviewsCount: 24,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-6",
      title: "Phương Pháp Tư Duy Giải Quyết Vấn Đề Của Chuyên Gia Tư Vấn",
      instructor: "Giảng viên Mona",
      level: "Cơ bản",
      category: "Thiết kế",
      price: "Miễn phí",
      badgeText: "MIỄN PHÍ",
      badgeType: "free",
      rating: 5,
      reviewsCount: 31,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-7",
      title: "Phân Tích Dữ Liệu Kinh Doanh (Business Intelligence) Toàn Diện",
      instructor: "Giảng viên Mona",
      level: "Mọi cấp độ",
      category: "Nổi bật",
      price: "Miễn phí",
      badgeText: "MIỄN PHÍ",
      badgeType: "free",
      rating: 5,
      reviewsCount: 19,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-8",
      title: "Trở Thành Giám Đốc Sản Phẩm (Product Manager) Từ Con Số 0",
      instructor: "Giảng viên Mona",
      level: "Mọi cấp độ",
      category: "Thiết kế",
      price: "Miễn phí",
      badgeText: "MIỄN PHÍ",
      badgeType: "free",
      rating: 5,
      reviewsCount: 27,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-9",
      title: "Tự Động Hóa Quy Trình Sản Xuất & Thiết Kế Hệ Thống Điện",
      instructor: "Giảng viên Mona",
      level: "Cơ bản",
      category: "Xu hướng",
      price: "840,000₫",
      rating: 5,
      reviewsCount: 14,
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c-10",
      title: "Toán Đại Số Tuyến Tính & Giải Tích Ứng Dụng Cho Trí Tuệ Nhân Tạo",
      instructor: "Giảng viên Mona",
      level: "Cơ bản",
      category: "Phổ biến",
      price: "450,000₫",
      rating: 5,
      reviewsCount: 21,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    }
  ],
  helpBanner: {
    eyebrow: "Để Chúng Tôi Hỗ Trợ Bạn",
    title: "Tìm Kiếm Khóa Học Phù Hợp Nhất Với Bạn",
    ctaText: "Bắt đầu ngay"
  },
  testimonials: [
    {
      id: "rv-1",
      author: "Nhóm Thiết Kế",
      role: "Chuyên viên UI/UX & Lập trình",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Chất lượng bài giảng tuyệt vời! Đội ngũ giảng viên và bộ phận hỗ trợ giải đáp thắc mắc ngay trong ngày giúp tôi áp dụng ngay vào dự án thực tế. Xứng đáng 5 sao!"
    },
    {
      id: "rv-2",
      author: "Minh Hoàng",
      role: "Nhà thiết kế sản phẩm số",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Nền tảng học trực tuyến mượt mà, tài liệu đính kèm chi tiết và lộ trình từ cơ bản đến nâng cao rất rõ ràng. Tôi đã hoàn thành 4 chứng chỉ tại đây!"
    },
    {
      id: "rv-3",
      author: "Duyên Nguyễn",
      role: "Chuyên viên Marketing",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Hệ thống xứng đáng 5 sao nhờ kho tính năng học tập thông minh, chất lượng video sắc nét, học mọi lúc mọi nơi linh hoạt và dịch vụ chăm sóc học viên tận tâm!"
    }
  ],
  dualPromoCards: {
    instructorCard: {
      title: "Trở Thành Giảng Viên",
      description:
        "Đội ngũ giảng viên hàng đầu từ khắp nơi đang truyền đạt kiến thức cho hàng triệu học viên trên hệ thống.",
      buttonText: "Đăng ký giảng dạy",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
    },
    studentCard: {
      title: "Chuyển Đổi Tương Lai Qua Giáo Dục",
      description:
        "Tạo tài khoản miễn phí ngay hôm nay để nhận bản tin học thuật, gợi ý lộ trình khóa học và ưu đãi học bổng.",
      buttonText: "Đăng ký miễn phí",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
    }
  },
  partnerInstitutions: [
    { id: "pi-1", name: "ĐẠI HỌC QUỐC GIA", subtitle: "Hợp tác đào tạo", color: "bg-red-700" },
    { id: "pi-2", name: "STUDENTCHAT", subtitle: "Cộng đồng sinh viên", color: "bg-teal-600" },
    { id: "pi-3", name: "BEST COLLEGE", subtitle: "Học viện công nghệ", color: "bg-blue-800" },
    { id: "pi-4", name: "TECH UNIVERSITY", subtitle: "Đại học Kỹ thuật", color: "bg-sky-600" },
    { id: "pi-5", name: "BRIGHT SCHOOL", subtitle: "Trường quốc tế", color: "bg-slate-900" },
    { id: "pi-6", name: "UNION ACADEMY", subtitle: "Liên minh giáo dục", color: "bg-amber-700" },
    { id: "pi-7", name: "GLOBAL EDU", subtitle: "Chứng chỉ toàn cầu", color: "bg-rose-700" },
    { id: "pi-8", name: "CREATIVE BOOK", subtitle: "Thư viện số", color: "bg-cyan-600" },
    { id: "pi-9", name: "OWL SIGN", subtitle: "Viện ngôn ngữ", color: "bg-slate-800" },
    { id: "pi-10", name: "OWLBOOK", subtitle: "Học liệu mở", color: "bg-orange-600" },
    { id: "pi-11", name: "EDU FIRST", subtitle: "Tiên phong đổi mới", color: "bg-emerald-600" },
    { id: "pi-12", name: "SCIENCE LAB", subtitle: "Viện nghiên cứu", color: "bg-indigo-900" }
  ]
};

export default leadGeneration14DefaultData;
