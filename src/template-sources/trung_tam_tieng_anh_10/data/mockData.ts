import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh10Data extends ClonedTemplateBaseData {
  heroBubbles: Array<{
    id: string;
    label: string;
    image: string;
    size: "small" | "large";
  }>;
  aboutCollageImages: string[];
  curriculumSlides: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
    bullets: string[];
    image: string;
  }>;
  admissionPromo: {
    scriptEyebrow: string;
    title: string;
    highlightBadge: string;
    perks: string[];
    kidsImage: string;
  };
  communityNews: Array<{
    id: string;
    tagAndDate: string;
    title: string;
    excerpt: string;
    image: string;
  }>;
}

export const trungTamTiengAnh10DefaultData: TrungTamTiengAnh10Data = {
  business: {
    name: "Creative Preschool",
    phone: ["1900 636 648", "0909 636 648"],
    email: ["info@themona.global", "tuyensinh@creativepreschool.edu.vn"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "8:00 - 17:00 (Thứ 2 - Thứ 7)",
    rating: 5.0,
    reviewCount: 2000,
    experienceYears: "10+ Năm",
    aboutTitle: "CREATIVE PRESCHOOL",
    aboutText: [
      "Trường Mầm Non Quốc Tế Creative Preschool là một môi trường giáo dục ấm cúng và đầy sáng tạo, nơi các trẻ nhỏ được khám phá và phát triển toàn diện.",
      "Chúng tôi cam kết đem đến sự chăm sóc tận tâm và cơ hội học tập thú vị cho trẻ, từ những năm đầu đời quan trọng của các bé."
    ],
    highlights: [
      "Giáo viên tận tâm và chuyên nghiệp",
      "Chương trình học đa dạng và phong cách giảng dạy sáng tạo",
      "Môi trường học tập độc đáo"
    ]
  },
  hero: {
    eyebrow: "Vì sao chọn chúng tôi",
    title: "CREATIVE\nPRESCHOOL",
    subtitle: "“Nuôi dưỡng Tương Lai với Sáng Tạo và Yêu Thương!”",
    description:
      "Hệ thống trường mầm non song ngữ quốc tế ứng dụng phương pháp Montessori & STEAM giúp bé phát triển ngôn ngữ tự nhiên và tư duy sáng tạo mỗi ngày.",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#gioi-thieu",
    backgroundImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85"
  },
  heroBubbles: [
    {
      id: "hb-1",
      label: "Phương pháp giảng dạy",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80",
      size: "small"
    },
    {
      id: "hb-2",
      label: "Tuyển sinh 2025-2026",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80",
      size: "small"
    },
    {
      id: "hb-3",
      label: "Vì sao chọn chúng tôi",
      image:
        "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80",
      size: "large"
    }
  ],
  stats: [
    { id: "cp-s1", number: "1000+", title: "Học sinh" },
    { id: "cp-s2", number: "300+", title: "Giáo viên" },
    { id: "cp-s3", number: "04+", title: "Chương trình học" }
  ],
  aboutCollageImages: [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80"
  ],
  curriculumSlides: [
    {
      id: "cur-6",
      number: "06",
      title: "Chương trình dã ngoại theo chủ đề",
      description:
        "Chương trình: Khám phá ngữ âm Tiếng Anh tự nhiên, giao tiếp phản xạ cùng giáo viên bản ngữ và trải nghiệm thực tế.",
      bullets: [
        "Giáo viên bản ngữ, có chuyên môn cao.",
        "Học sinh được chia thành các giai đoạn từ: 3-4 tuổi, 4-5 tuổi, 5-6 tuổi"
      ],
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "cur-1",
      number: "01",
      title: "Chương trình Song ngữ Anh - Việt",
      description:
        "Bé thẩm thấu Tiếng Anh tự nhiên qua âm nhạc, kể chuyện và trò chơi vận động hàng ngày cùng giáo viên bản xứ.",
      bullets: [
        "100% giáo viên nước ngoài có chứng chỉ sư phạm mầm non quốc tế.",
        "Phát triển phát âm chuẩn và phản xạ giao tiếp tự nhiên."
      ],
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "cur-2",
      number: "02",
      title: "Giáo dục sớm Montessori & STEAM",
      description:
        "Kích thích 5 giác quan, rèn luyện tính tự lập và tư duy khám phá khoa học qua hệ thống giáo cụ trực quan.",
      bullets: [
        "Phòng chức năng Montessori tiêu chuẩn quốc tế.",
        "Khơi dậy trí tò mò và khả năng giải quyết vấn đề cho trẻ."
      ],
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
    }
  ],
  services: [
    {
      id: "s-cp1",
      title: "Chương trình dã ngoại theo chủ đề",
      description: "Học tập qua trải nghiệm thiên nhiên và giao tiếp cùng giáo viên bản ngữ."
    },
    {
      id: "s-cp2",
      title: "Lớp Mầm Non Song Ngữ (3 - 6 tuổi)",
      description: "Chương trình tích hợp Montessori, STEAM và Tiếng Anh phản xạ."
    },
    {
      id: "s-cp3",
      title: "Cảm thụ Âm nhạc & Mỹ thuật Sáng tạo",
      description: "Nuôi dưỡng tâm hồn nghệ thuật và sự tự tin trước đám đông."
    }
  ],
  team: [
    {
      id: "tc-1",
      name: "Cô giáo Ái Vy",
      position: "Giáo viên Giảng dạy",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-2",
      name: "Cô giáo Minh Tâm",
      position: "Giáo viên Tiếng Anh",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-3",
      name: "Cô giáo Thanh Trúc",
      position: "Bảo Mẫu Chuyên trách",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-4",
      name: "Cô giáo Thảo Linh",
      position: "Giáo viên Dạy vẽ",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
    }
  ],
  admissionPromo: {
    scriptEyebrow: "Trường mầm non song ngữ CREATIVE PRESCHOOL",
    title: "TUYỂN SINH NĂM HỌC MỚI\n2025 - 2026",
    highlightBadge: "“MIỄN PHÍ HỌC THỬ 1 TUẦN”",
    perks: [
      "Miễn 100% cơ sở vật chất",
      "Giảm 10% khi đóng học phí trọn kỳ",
      "Giảm 5% khi đóng học phí 6 tháng"
    ],
    kidsImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85"
  },
  communityNews: [
    {
      id: "cn-1",
      tagAndDate: "Tin hội thảo cộng đồng • 25/10/2025",
      title:
        "Chương Trình Học Đa Dạng tại Creative Preschool: Khám Phá Sự Sáng Tạo Của Trẻ",
      excerpt:
        "Kính gửi Quý Phụ huynh, Để tăng cường chăm sóc sức khỏe một cách an toàn nhất cho học sinh, Nhà trường xin cập nhật đến Quý Phụ huynh...",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cn-2",
      tagAndDate: "Tin hội thảo cộng đồng • 18/10/2025",
      title:
        "Phương Pháp Giảng Dạy Sáng Tạo: Học Hỏi Qua Trò Chơi tại Creative Preschool",
      excerpt:
        "Kính gửi Quý Phụ huynh, Để tăng cường chăm sóc sức khỏe một cách an toàn nhất cho học sinh, Nhà trường xin cập nhật đến Quý Phụ huynh...",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  testimonials: [
    {
      id: "pr-1",
      author: "Ba Trần Văn Đức",
      role: "Phụ huynh của bé Quang Huy",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Con tôi rất yêu môi trường ấm áp tại Creative Preschool. Đội ngũ giáo viên tận tâm và phương pháp giảng dạy đa dạng đã giúp con phát triển kỹ năng toàn diện.\nChúng tôi đã thấy sự thay đổi tích cực trong con từ khi tham gia Creative Preschool. Con đã tự tin hơn, học hỏi nhiều điều mới và kỹ năng xã hội ngày càng tốt."
    },
    {
      id: "pr-2",
      author: "Mẹ Nguyễn Thu Hà",
      role: "Phụ huynh của bé Bảo An (Lớp Dolphin)",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Sau 1 tuần học thử miễn phí tại Creative Preschool, bé Bảo An thích mê các giờ học Tiếng Anh cùng giáo viên bản ngữ và hoạt động vẽ tranh ngoài trời. Thực đơn dinh dưỡng ở trường cũng rất phong phú, bé ăn ngon miệng và tăng cân đều."
    },
    {
      id: "pr-3",
      author: "Mẹ Lê Phương Thảo",
      role: "Phụ huynh của bé Gia Khiêm (Lớp Sunny)",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Cơ sở vật chất của trường cực kỳ sạch đẹp, ngập tràn ánh sáng tự nhiên. Các cô giáo luôn gửi hình ảnh nhật ký hoạt động của con mỗi ngày qua ứng dụng nên gia đình hoàn toàn yên tâm."
    }
  ]
};
