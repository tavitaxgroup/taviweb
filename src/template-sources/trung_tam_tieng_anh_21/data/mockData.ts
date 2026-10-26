import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh21Data extends ClonedTemplateBaseData {
  activityCards: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    titleColor: string;
  }>;
  innovationMethods: Array<{
    id: string;
    title: string;
    description: string;
    icon: "sound" | "method" | "ebook" | "online";
  }>;
  innovationPhoto: string;
  chalkboardBannerImage: string;
  teachers: Array<{
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar: string;
  }>;
  galleryItems: Array<{
    id: string;
    title: string;
    category: "facility" | "activity" | "opening";
    image: string;
  }>;
  februaryNews: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    buttonColor: string;
    image: string;
  }>;
  callCenterKidImage: string;
}

export const trungTamTiengAnh21DefaultData = {
  business: {
    name: "Học Viện Anh Ngữ Thiếu Nhi & Luyện Chữ KidsMona School",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["mon@mona.media", "tuyensinh@kidsmona.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:30 - 18:00",
    rating: 4.9,
    reviewCount: 720,
    aboutTitle: "MẪU GIÁO & ANH NGỮ KIDS SCHOOL CHO MỌI TRẺ EM",
    aboutText: [
      "Học viện Anh ngữ Thiếu nhi & Tiền tiểu học KidsMona mang đến phương pháp học tập đổi mới, kết hợp nghe âm thanh chuẩn Phonics, sách điện tử tương tác và rèn chữ đẹp cho trẻ từ 3 - 10 tuổi."
    ],
    highlights: [
      "Đội ngũ giáo viên giàu kinh nghiệm, yêu trẻ và chuẩn sư phạm quốc tế",
      "Môi trường năng động phát triển tài năng nhí: hội họa, âm nhạc, thuyết trình tiếng Anh",
      "Hệ thống phòng học đa phương tiện và khu vui chơi sáng tạo an toàn tuyệt đối"
    ]
  },
  hero: {
    eyebrow: "Mẫu giáo",
    title: "Kids School",
    subtitle: "cho mọi trẻ em",
    description:
      "Khơi dậy niềm vui đến trường mỗi ngày với chương trình Anh ngữ sinh động và nghệ thuật sáng tạo.",
    ctaText: "Đăng ký tư vấn trực tiếp",
    ctaLink: "#contact-register",
    backgroundImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=85"
  },
  activityCards: [
    {
      id: "act-1",
      title: "Thỏa sức sáng tạo",
      description:
        "Các hoạt động mỹ thuật, thủ công Origami và kể chuyện tiếng Anh giúp bé phát triển trí tưởng tượng phong phú.",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80",
      titleColor: "#e6004c"
    },
    {
      id: "act-2",
      title: "Môi trường năng động",
      description:
        "Không gian lớp học mở tràn ngập ánh sáng tự nhiên cùng các trò chơi vận động nhóm rèn kỹ năng giao tiếp.",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80",
      titleColor: "#7ab82e"
    },
    {
      id: "act-3",
      title: "Ưu đãi hấp dẫn",
      description:
        "Tặng ngay bộ học phẩm KidsMona và ưu đãi 20% học phí khóa Anh ngữ Hè & Tiền tiểu học khi đăng ký sớm.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80",
      titleColor: "#0081c9"
    },
    {
      id: "act-4",
      title: "Tài năng nhí của con",
      description:
        "Sân khấu biểu diễn cuối tuần giúp mỗi học sinh tự tin tỏa sáng với ca hát, đóng kịch và hùng biện song ngữ.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80",
      titleColor: "#ff9800"
    }
  ],
  innovationMethods: [
    {
      id: "im-1",
      title: "Học cách nghe âm thanh",
      description:
        "Luyện phản xạ ngữ âm Phonics chuẩn bản xứ qua bài hát, nhịp điệu và hội thoại sinh động.",
      icon: "sound"
    },
    {
      id: "im-2",
      title: "Phương pháp tiên tiến",
      description:
        "Áp dụng giáo trình STEAM và Montessori giúp trẻ chủ động khám phá thế giới xung quanh.",
      icon: "method"
    },
    {
      id: "im-3",
      title: "Sách điện tử",
      description:
        "Kho truyện tranh tương tác có giọng đọc bản ngữ giúp con ôn bài vui vẻ cùng bố mẹ tại nhà.",
      icon: "ebook"
    },
    {
      id: "im-4",
      title: "Học trực tuyến",
      description:
        "Hệ thống bài tập trò chơi hóa trực tuyến kết nối chặt chẽ giữa giáo viên và phụ huynh.",
      icon: "online"
    }
  ],
  innovationPhoto:
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  chalkboardBannerImage:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  teachers: [
    {
      id: "tc-1",
      name: "TRẦN HOÀNG ANH",
      role: "HIỆU TRƯỞNG",
      bio: "Thạc sĩ Quản lý Giáo dục Mầm non & Song ngữ với 15 năm kinh nghiệm xây dựng chương trình thiếu nhi.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "tc-2",
      name: "NGUYỄN THỊ THU HẰNG",
      role: "KHỐI TRƯỞNG MẪU GIÁO BÉ",
      bio: "Chuyên gia tâm lý trẻ em và phát triển ngôn ngữ đầu đời qua nghệ thuật kể chuyện.",
      avatar:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "tc-3",
      name: "ĐẶNG THỊ NGỌC ANH",
      role: "PHỤ TRÁCH LỚP ANH NGỮ & LUYỆN CHỮ",
      bio: "Chứng chỉ giảng dạy tiếng Anh trẻ em TESOL quốc tế và giải Nhất viết chữ đẹp cấp Thành phố.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "tc-4",
      name: "NGUYỄN THỊ HỒNG HƯƠNG",
      role: "KHỐI TRƯỞNG NHÀ TRẺ",
      bio: "Hơn 10 năm kinh nghiệm chăm sóc dinh dưỡng và hướng dẫn vận động tinh cho trẻ 18 - 36 tháng.",
      avatar:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80"
    }
  ],
  galleryItems: [
    {
      id: "gl-1",
      title: "Góc học tập sắc màu chuẩn quốc tế",
      category: "facility",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-2",
      title: "Giờ học vẽ tranh và thủ công sáng tạo",
      category: "activity",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-3",
      title: "Ngày hội Khai giảng năm học mới",
      category: "opening",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-4",
      title: "Thư viện truyện tranh song ngữ thiếu nhi",
      category: "facility",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-5",
      title: "Tiết học phát âm tiếng Anh cùng giáo viên",
      category: "activity",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-6",
      title: "Khu vui chơi vận động liên hoàn trong nhà",
      category: "facility",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-7",
      title: "Biểu diễn văn nghệ chào đón tân học sinh",
      category: "opening",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gl-8",
      title: "Rèn nét chữ nết người chuẩn bị vào lớp 1",
      category: "activity",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80"
    }
  ],
  februaryNews: [
    {
      id: "fn-1",
      title: "Những điều cần biết khi chọn trường mầm non",
      date: "15 Tháng 2, 2026",
      excerpt:
        "Kinh nghiệm giúp phụ huynh đánh giá chương trình học song ngữ, cơ sở vật chất và chế độ dinh dưỡng cho bé...",
      buttonColor: "#ff5c8a",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-2",
      title: "Làm sao để trẻ thích thú khi đến trường mỗi sáng?",
      date: "18 Tháng 2, 2026",
      excerpt:
        "Bí quyết tâm lý nhẹ nhàng giúp con tạm biệt nỗi sợ xa bố mẹ và hào hứng hòa nhập cùng bạn bè...",
      buttonColor: "#7ab82e",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-3",
      title: "Phương pháp dạy bé học tiếng Anh và luyện chữ từ 4 tuổi",
      date: "22 Tháng 2, 2026",
      excerpt:
        "Kết hợp trò chơi ngữ âm, thẻ Flashcard và bài tập cầm bút đúng tư thế giúp bé tự tin bước vào lớp 1...",
      buttonColor: "#0081c9",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
    }
  ],
  callCenterKidImage:
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
};
