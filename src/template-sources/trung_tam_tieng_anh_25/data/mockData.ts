import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MonaSchoolProgramCard {
  id: string;
  title: string;
  price: string;
  classSize: string;
  ageRange: string;
  monthlyFeeBadge: string;
  studyTime: string;
  description: string;
  image: string;
}

export interface TrungTamTiengAnh25Data extends ClonedTemplateBaseData {
  topColorCards: Array<{
    id: string;
    title: string;
    bgColor: string;
    icon: "teach" | "cert" | "program" | "bus";
  }>;
  introSection: {
    title: string;
    description: string;
    image: string;
  };
  darkStats: Array<{
    id: string;
    value: string;
    label: string;
    icon: "student" | "room" | "bus" | "teacher";
  }>;
  trainingPrograms: MonaSchoolProgramCard[];
  teachers: Array<{
    id: string;
    name: string;
    role: string;
    image: string;
  }>;
  reasonsLeft: Array<{
    id: string;
    title: string;
    subtitle: string;
    color: string;
  }>;
  reasonsRight: Array<{
    id: string;
    title: string;
    subtitle: string;
    color: string;
  }>;
  studentStories: Array<{
    id: string;
    name: string;
    achievement: string;
    quote: string;
    avatar: string;
  }>;
  parentReviews: Array<{
    id: string;
    name: string;
    channel: string;
    quote: string;
    avatar: string;
  }>;
  mintNews: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
  partners: Array<{
    id: string;
    name: string;
    bgColor: string;
  }>;
}

export const trungTamTiengAnh25DefaultData: TrungTamTiengAnh25Data = {
  business: {
    name: "Trường Tiểu Học & Mầm Non Song Ngữ Quốc Tế Mona Kids",
    phone: ["0313728397", "091 2345 678"],
    email: ["info@themona.global", "demo@gmail.com"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:00 - 17:30",
    rating: 4.9,
    reviewCount: 840,
    aboutTitle: "Giới thiệu về trung tâm",
    aboutText: [
      "Trường Mầm Non & Tiểu Học Song Ngữ MONA KIDS được thành lập với sứ mệnh kiến tạo môi trường chuẩn Châu Âu. Các bé sẽ được học tập và sinh hoạt với các giáo viên nói tiếng Anh giọng bản ngữ, có bằng cấp chuyên môn, nhiều kinh nghiệm và yêu thương trẻ nhỏ theo phương châm: “Học Mà Chơi, Chơi Mà Học”."
    ],
    highlights: [
      "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      "Hệ thống 25 tuyến xe bus đưa đón học sinh an toàn tận nhà",
      "Theo dõi sức khỏe định kỳ và thực đơn dinh dưỡng chuẩn quốc tế"
    ]
  },
  hero: {
    eyebrow: "CHUẨN GIÁO DỤC CHÂU ÂU",
    title: "Chào mừng các bé đến với MONA KIDS",
    subtitle: "Học Mà Chơi, Chơi Mà Học",
    description:
      "Môi trường song ngữ toàn diện kết hợp Toán Tư Duy, Tiếng Việt, Anh Ngữ Bản Xứ và Nghệ Thuật Sáng Tạo.",
    ctaText: "Nhập học ngay",
    ctaLink: "#programs",
    backgroundImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=85"
  },
  topColorCards: [
    {
      id: "tc-1",
      title: "Chất lượng giảng dạy",
      bgColor: "#e74c3c",
      icon: "teach"
    },
    {
      id: "tc-2",
      title: "Cam kết đầu ra",
      bgColor: "#f1c40f",
      icon: "cert"
    },
    {
      id: "tc-3",
      title: "Chương trình hiện đại",
      bgColor: "#e67e22",
      icon: "program"
    },
    {
      id: "tc-4",
      title: "Xe đưa đón",
      bgColor: "#8e44ad",
      icon: "bus"
    }
  ],
  introSection: {
    title: "Giới thiệu về trung tâm",
    description:
      "Trường Mầm Non & Tiểu Học Song Ngữ MONA KIDS được thành lập từ năm 2006. Các bé sẽ được học tập và sinh hoạt với các giáo viên nói tiếng Anh giọng bản ngữ, có bằng cấp chuyên môn, nhiều kinh nghiệm và yêu thương trẻ nhỏ theo phương châm: “Học Mà Chơi, Chơi Mà Học”.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
  },
  darkStats: [
    {
      id: "ds-1",
      value: "400+",
      label: "Học viên",
      icon: "student"
    },
    {
      id: "ds-2",
      value: "16",
      label: "Phòng học",
      icon: "room"
    },
    {
      id: "ds-3",
      value: "25",
      label: "Xe đưa đón",
      icon: "bus"
    },
    {
      id: "ds-4",
      value: "31",
      label: "Giáo viên",
      icon: "teacher"
    }
  ],
  trainingPrograms: [
    {
      id: "prg-1",
      title: "KHAI GIẢNG LỚP MẦM",
      price: "500,000 ₫",
      classSize: "15 - 20",
      ageRange: "3 - 4",
      monthlyFeeBadge: "500K/tháng",
      studyTime: "7h đến 17h",
      description:
        "Trường mầm non MONA Kids là nơi mà trẻ có thể học tập, vui chơi một cách sáng tạo cùng bạn bè đến từ nhiều quốc gia khác nhau với mức học phí vô cùng hợp lý.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prg-2",
      title: "KHAI GIẢNG LỚP CHỒI",
      price: "700,000 ₫",
      classSize: "15 - 20",
      ageRange: "4 - 5",
      monthlyFeeBadge: "700K/tháng",
      studyTime: "7h đến 17h",
      description:
        "Trường mầm non MONA Kids là nơi mà trẻ có thể học tập, vui chơi một cách sáng tạo cùng bạn bè đến từ nhiều quốc gia khác nhau với mức học phí vô cùng hợp lý.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prg-3",
      title: "KHAI GIẢNG LỚP LÁ & TIỀN TIỂU HỌC",
      price: "900,000 ₫",
      classSize: "15 - 20",
      ageRange: "5 - 6",
      monthlyFeeBadge: "900K/tháng",
      studyTime: "7h đến 17h",
      description:
        "Trường mầm non MONA Kids là nơi mà trẻ có thể học tập, vui chơi một cách sáng tạo cùng bạn bè đến từ nhiều quốc gia khác nhau với mức học phí vô cùng hợp lý.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
    }
  ],
  teachers: [
    {
      id: "tc-1",
      name: "Ms. Sarah Jenkins",
      role: "Giáo viên Bản ngữ Anh Quốc",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-2",
      name: "Ms. Nguyễn Thu Hà",
      role: "Tổ trưởng Chuyên môn Toán - Văn",
      image:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-3",
      name: "Ms. Emily Watson",
      role: "Giáo viên Giao tiếp & Phonics",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-4",
      name: "Ms. Trần Minh Thư",
      role: "Giáo viên Nghệ thuật & Kỹ năng",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80"
    }
  ],
  reasonsLeft: [
    {
      id: "rl-1",
      title: "Giáo viên trung tâm",
      subtitle: "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      color: "#f1c40f"
    },
    {
      id: "rl-2",
      title: "Cơ sở vật chất",
      subtitle: "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      color: "#e67e22"
    },
    {
      id: "rl-3",
      title: "Âm thanh, hình ảnh",
      subtitle: "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      color: "#3498db"
    }
  ],
  reasonsRight: [
    {
      id: "rr-1",
      title: "Học phí phù hợp",
      subtitle: "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      color: "#2ecc71"
    },
    {
      id: "rr-2",
      title: "Môi trường năng động",
      subtitle: "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      color: "#9b59b6"
    },
    {
      id: "rr-3",
      title: "Hỗ trợ 24/7",
      subtitle: "Đáp ứng đầy đủ nhu cầu học tập theo tiêu chuẩn Châu Âu",
      color: "#e84393"
    }
  ],
  studentStories: [
    {
      id: "st-1",
      name: "Lê Hào",
      achievement: "BÍ QUYẾT ÔN THI VÀO LỚP 10 MÔN TOÁN ĐẠT 9,5",
      quote:
        "Lê Hào hiện đang theo học tại Trung tâm MONA. Từ một học sinh còn nhiều lỗ hổng kiến thức vươn lên đạt 9,5 điểm thi vào lớp 10. Cùng lắng nghe chia sẻ từ Lê Hào về bí quyết ôn thi đạt điểm cao nhé!",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "st-2",
      name: "Nguyễn Bảo Ngọc",
      achievement: "HUY CHƯƠNG VÀNG CAMBRIDGE FLYERS 15/15 KHIÊN",
      quote:
        "Nhờ các giờ học giao tiếp 100% cùng giáo viên bản ngữ tại MONA Kids, em đã tự tin đạt điểm tuyệt đối kỳ thi Cambridge Flyers ngay từ lớp 4.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80"
    }
  ],
  parentReviews: [
    {
      id: "pr-1",
      name: "Chị Marry",
      channel: "Facebook",
      quote:
        "Dịch vụ hỗ trợ chất lượng cao: 20 tuyến xe bus đưa đón học sinh trên khắp thành phố giúp bố mẹ có thể hoàn toàn yên tâm và tiết kiệm thời gian. Học sinh được theo dõi khám sức khỏe định kì 2 lần/năm học.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "pr-2",
      name: "Chị Jany",
      channel: "Facebook",
      quote:
        "Dịch vụ hỗ trợ chất lượng cao: 20 tuyến xe bus đưa đón học sinh trên khắp thành phố giúp bố mẹ có thể hoàn toàn yên tâm và tiết kiệm thời gian. Học sinh được theo dõi khám sức khỏe định kì 2 lần/năm học.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  ],
  mintNews: [
    {
      id: "mn-1",
      title: "Lịch sử, không còn là môn học “khó nhằn” nữa...",
      date: "16 Tháng Một, 2026",
      excerpt:
        "Vào một chiều cuối thu, có một cậu học trò đến bên cạnh tôi thì thầm về niềm vui khám phá lịch sử qua tranh ảnh...",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mn-2",
      title: "Back to school: Chào mừng ngày tựu trường năm học mới",
      date: "16 Tháng Một, 2026",
      excerpt:
        "Năm học mới là năm học vô cùng ý nghĩa và đặc biệt với nhiều hoạt động ngoại khóa song ngữ Châu Âu...",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mn-3",
      title: "Hello Grade 1 with MONA Kids – Cùng con tự tin vào lớp 1",
      date: "16 Tháng Một, 2026",
      excerpt:
        "Thời gian: 09:00 – 12:00, Thứ 7 tuần này tại Trường Mầm Non MONA Kids, 319 Lý Thường Kiệt...",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
    }
  ],
  partners: [
    { id: "pt-1", name: "SearchLight", bgColor: "#0a2e46" },
    { id: "pt-2", name: "Mylove", bgColor: "#c0292b" },
    { id: "pt-3", name: "SPACE ENGINE", bgColor: "#192a56" },
    { id: "pt-4", name: "collector", bgColor: "#d63031" },
    { id: "pt-5", name: "SPACE BROOM", bgColor: "#0984e3" }
  ]
};
