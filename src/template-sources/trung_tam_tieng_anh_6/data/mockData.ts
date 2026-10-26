import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LifeSkillsCorePillar {
  id: string;
  title: string;
  description: string;
  accentColor: "pink" | "teal" | "yellow" | "blue";
  iconName: "sun" | "star" | "thumbsUp" | "heart";
}

export interface LifeSkillsCampProgram {
  id: string;
  title: string;
  ageRange: string;
  category: "Phân tích" | "Nghệ thuật" | "Công nghệ" | "Quản lý";
  duration: string;
  schedule: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface LifeSkillsFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LifeSkillsFacilityItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface LifeSkillsTeacherItem {
  id: string;
  name: string;
  role: string;
  credentials: string;
  image: string;
}

export interface TrungTamTiengAnh6Data extends ClonedTemplateBaseData {
  heroPills: Array<{
    id: string;
    label: string;
    dotColor: string;
  }>;
  heroCollageImages: {
    leftMain: string;
    rightMain: string;
    rightSub: string;
  };
  corePillarsSection: {
    badge: string;
    title: string;
    subtitle: string;
    pillars: LifeSkillsCorePillar[];
  };
  aboutStorySection: {
    title: string;
    paragraphs: string[];
    ctaText: string;
    image: string;
    videoTitle: string;
  };
  campProgramsSection: {
    badge: string;
    title: string;
    subtitle: string;
    programs: LifeSkillsCampProgram[];
  };
  faqSection: {
    badge: string;
    title: string;
    sideImage: string;
    items: LifeSkillsFaqItem[];
  };
  facilitiesSection: {
    badge: string;
    title: string;
    items: LifeSkillsFacilityItem[];
  };
  teachersSection: {
    badge: string;
    title: string;
    subtitle: string;
    teachers: LifeSkillsTeacherItem[];
  };
  supervisionBanner: {
    badge: string;
    quote: string;
    backgroundImage: string;
  };
  gallerySection: {
    badge: string;
    title: string;
    images: Array<{
      id: string;
      title: string;
      category: string;
      image: string;
    }>;
  };
  videoBanner: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  newsletterSection: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    leftImage: string;
    rightImage: string;
  };
}

export const trungTamTiengAnh6DefaultData: TrungTamTiengAnh6Data = {
  business: {
    name: "LIFE SKILLS",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@lifeskills.edu.vn", "tuyensinh@lifeskills.edu.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:30",
    rating: 4.9,
    reviewCount: 1280,
    aboutTitle: "Học Viện Anh Ngữ Trẻ Em & Trại Hè Kỹ Năng Quốc Tế",
    aboutText: [
      "Tất cả các hoạt động đều được giám sát bởi đội ngũ giảng viên bản ngữ và chuyên gia giáo dục giàu kinh nghiệm, đảm bảo sự an toàn và hỗ trợ tối đa cho các em.",
      "Học viện Anh ngữ & Trại hè Kỹ năng LIFE SKILLS tiên phong kết hợp chương trình tiếng Anh phản xạ tự nhiên với 6 nhóm kỹ năng thế kỷ 21 dành cho học viên từ 5 - 17 tuổi.",
    ],
  },
  hero: {
    eyebrow: "HỌC VIỆN ANH NGỮ & KỸ NĂNG QUỐC TẾ",
    title: "TRẠI HÈ KỸ NĂNG",
    subtitle:
      "Khơi dậy đam mê học hỏi, giao tiếp tiếng Anh tự nhiên và bùng nổ trải nghiệm mùa hè đáng nhớ cho trẻ từ 5 - 17 tuổi.",
    ctaText: "Đăng ký ngay",
    ctaLink: "#dang-ky",
    secondaryCtaText: "Khám phá chương trình",
    secondaryCtaLink: "#chuong-trinh",
    backgroundImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  },
  heroPills: [
    { id: "pill-1", label: "BÙNG NỔ TRẢI NGHIỆM", dotColor: "#ef476f" },
    { id: "pill-2", label: "TRAO ĐỔI KỸ NĂNG", dotColor: "#ef476f" },
    { id: "pill-3", label: "TRANG BỊ KỸ NĂNG", dotColor: "#2bb0a6" },
    { id: "pill-4", label: "BỒI ĐẮP CẢM XÚC", dotColor: "#f97316" },
  ],
  heroCollageImages: {
    leftMain:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    rightMain:
      "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?auto=format&fit=crop&w=900&q=80",
    rightSub:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
  },
  corePillarsSection: {
    badge: "BẮT ĐẦU KHÁM PHÁ HÀNH TRÌNH",
    title: "NHỮNG ĐIỀU CHỈ CÓ TẠI KỸ NĂNG TRẠI HÈ",
    subtitle:
      "Nơi khơi dậy đam mê học hỏi và trải nghiệm tuyệt vời! Chúng tôi tin rằng mỗi người đều có tiềm năng vô hạn và việc phát triển kỹ năng là chìa khóa để mở ra những cơ hội mới trong cuộc sống.",
    pillars: [
      {
        id: "pillar-1",
        title: "Bùng nổ trải nghiệm",
        description:
          "Trại Hè Kỹ Năng là sự kết hợp độc đáo giữa học tập Anh ngữ và trải nghiệm thực tế giúp trẻ từ 5 – 12 tuổi nhận ra khả năng không giới hạn của bản thân.",
        accentColor: "pink",
        iconName: "sun",
      },
      {
        id: "pillar-2",
        title: "Khơi mở thế mạnh",
        description:
          "Trại Hè Kỹ Năng là sự kết hợp độc đáo giữa học tập và trải nghiệm giúp trẻ từ 5 – 12 tuổi tự tin thuyết trình tiếng Anh và phát triển thế mạnh riêng.",
        accentColor: "teal",
        iconName: "star",
      },
      {
        id: "pillar-3",
        title: "Trang bị kỹ năng",
        description:
          "Trại Hè Kỹ Năng là sự kết hợp độc đáo giữa học tập và trải nghiệm giúp trẻ từ 5 – 12 tuổi làm chủ tư duy phản biện, làm việc nhóm và lãnh đạo.",
        accentColor: "yellow",
        iconName: "thumbsUp",
      },
      {
        id: "pillar-4",
        title: "Bồi đắp cảm xúc",
        description:
          "Trại Hè Kỹ Năng là sự kết hợp độc đáo giữa học tập và trải nghiệm giúp trẻ từ 5 – 12 tuổi nuôi dưỡng trí tuệ cảm xúc trong môi trường thân thiện.",
        accentColor: "blue",
        iconName: "heart",
      },
    ],
  },
  aboutStorySection: {
    title: "TRAU DỒI KỸ NĂNG, KHƠI MỞ THẾ MẠNH BẢN THÂN",
    paragraphs: [
      "Hãy tham gia các chương trình trại hè Anh ngữ & kỹ năng sôi động của chúng tôi! Đây là cơ hội tuyệt vời để các em gặp gỡ những người bạn mới, tham gia các dự án STEAM, nghệ thuật và thuyết trình thú vị trong môi trường an toàn và thân thiện.",
      "Mỗi tuần học tại LIFE SKILLS được thiết kế theo phương pháp Học Qua Dự Án (Project-Based Learning), giúp trẻ sử dụng tiếng Anh như ngôn ngữ thứ hai một cách tự nhiên, hào hứng và đầy cảm hứng sáng tạo.",
    ],
    ctaText: "Khám phá",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85",
    videoTitle: "Hành trình một ngày tại Trại Hè Anh Ngữ & Kỹ Năng LIFE SKILLS",
  },
  campProgramsSection: {
    badge: "KHÁM PHÁ TUYỆT VỜI",
    title: "CHƯƠNG TRÌNH TRẠI HÈ",
    subtitle:
      "Trong một thế giới không ngừng thay đổi, việc trang bị cho bản thân những kỹ năng mới không chỉ là một lựa chọn, mà là một nhu cầu thiết yếu",
    programs: [
      {
        id: "prog-1",
        title: "Trại hè Kỹ năng phân tích",
        ageRange: "6 - 17 tuổi",
        category: "Phân tích",
        duration: "4 - 8 tuần",
        schedule: "Thứ 2 - Thứ 6 (08:00 - 16:30)",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
        description:
          "Rèn luyện tư duy logic, đặt câu hỏi phản biện và tranh biện tiếng Anh (English Debate) thông qua các thí nghiệm khoa học vui và dự án thực tế.",
        highlights: [
          "Giao tiếp & tranh biện tiếng Anh học thuật",
          "Giải quyết tình huống thực tế theo nhóm",
          "Thực hành thí nghiệm khoa học STEAM",
        ],
      },
      {
        id: "prog-2",
        title: "Trại hè Kỹ năng mỹ thuật",
        ageRange: "6 - 17 tuổi",
        category: "Nghệ thuật",
        duration: "4 - 8 tuần",
        schedule: "Thứ 2 - Thứ 6 (08:00 - 16:30)",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
        description:
          "Đánh thức khả năng hội họa, thiết kế màu sắc và kể chuyện bằng hình ảnh (Visual Storytelling) kết hợp từ vựng tiếng Anh chuyên ngành nghệ thuật.",
        highlights: [
          "Hội họa màu nước, Acrylic & thủ công sáng tạo",
          "Triển lãm tác phẩm cá nhân cuối khóa",
          "Thuyết trình ý tưởng nghệ thuật bằng tiếng Anh",
        ],
      },
      {
        id: "prog-3",
        title: "Trại hè Kỹ năng âm nhạc",
        ageRange: "6 - 17 tuổi",
        category: "Nghệ thuật",
        duration: "4 - 8 tuần",
        schedule: "Thứ 2 - Thứ 6 (08:00 - 16:30)",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
        description:
          "Khám phá nhịp điệu, làm quen nhạc cụ (Piano, Violin, Guitar, Ukulele) và biểu diễn nhạc kịch tiếng Anh tự tin trên sân khấu lớn.",
        highlights: [
          "Thực hành nhạc cụ 1 kèm 1 và hòa tấu nhóm",
          "Luyện phát âm tiếng Anh qua bài hát & nhạc kịch",
          "Đêm Gala biểu diễn âm nhạc cuối mùa hè",
        ],
      },
      {
        id: "prog-4",
        title: "Trại hè Kỹ năng quản lý",
        ageRange: "6 - 17 tuổi",
        category: "Quản lý",
        duration: "4 - 8 tuần",
        schedule: "Thứ 2 - Thứ 6 (08:00 - 16:30)",
        image:
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
        description:
          "Hình thành thói quen quản lý thời gian, quản lý tài chính cá nhân và kỹ năng lãnh đạo đội nhóm (Young Leaders) chuẩn công dân toàn cầu.",
        highlights: [
          "Lập kế hoạch mục tiêu & quản lý thời gian",
          "Kỹ năng thuyết trình trước đám đông (Public Speaking)",
          "Xây dựng dự án khởi nghiệp nhí bằng tiếng Anh",
        ],
      },
      {
        id: "prog-5",
        title: "Trại hè Kỹ năng công nghệ",
        ageRange: "6 - 17 tuổi",
        category: "Công nghệ",
        duration: "4 - 8 tuần",
        schedule: "Thứ 2 - Thứ 6 (08:00 - 16:30)",
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
        description:
          "Làm chủ tư duy lập trình Scratch/Python, lắp ráp Robotics và ứng dụng công nghệ số an toàn, sáng tạo trong thời đại trí tuệ nhân tạo.",
        highlights: [
          "Lập trình game & điều khiển Robot thông minh",
          "Từ vựng tiếng Anh Công nghệ & Khoa học máy tính",
          "Cuộc thi sáng tạo công nghệ Robotics Challenge",
        ],
      },
      {
        id: "prog-6",
        title: "Trại hè Kỹ năng sáng tạo",
        ageRange: "6 - 17 tuổi",
        category: "Nghệ thuật",
        duration: "4 - 8 tuần",
        schedule: "Thứ 2 - Thứ 6 (08:00 - 16:30)",
        image:
          "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80",
        description:
          "Kết hợp ẩm thực nhí, làm bánh, pha chế, nhiếp ảnh và sáng tạo nội dung đa phương tiện giúp trẻ tự lập và phát triển đa giác quan.",
        highlights: [
          "Thực hành lớp học Đầu bếp nhí & Barista",
          "Sáng tạo kịch bản và quay dựng video tiếng Anh",
          "Rèn luyện tính tự lập và kỹ năng chăm sóc bản thân",
        ],
      },
    ],
  },
  stats: [
    { id: "stat-1", number: "1200", title: "Hội thảo kỹ năng" },
    { id: "stat-2", number: "1400", title: "Hoạt động ngoài trời" },
    { id: "stat-3", number: "80", title: "Dự án nhóm" },
    { id: "stat-4", number: "100%", title: "Chương trình nghệ thuật" },
  ],
  faqSection: {
    badge: "KHÁM PHÁ TUYỆT VỜI",
    title: "CÁC CÂU HỎI THƯỜNG GẶP",
    sideImage:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=900&q=85",
    items: [
      {
        id: "faq-1",
        question: "Các chương trình học có những chủ đề gì?",
        answer:
          "Chương trình bao gồm 6 nhóm chủ đề trọng tâm: Kỹ năng Phân tích & Tranh biện tiếng Anh, Mỹ thuật sáng tạo, Âm nhạc & Nhạc kịch, Kỹ năng Quản lý & Lãnh đạo nhí, Công nghệ & Robotics, cùng các buổi dã ngoại thực tế mỗi tuần.",
      },
      {
        id: "faq-2",
        question: "Ai là giảng viên của các khóa học?",
        answer:
          "100% lớp học được dẫn dắt bởi đội ngũ giảng viên bản ngữ có chứng chỉ TESOL/CELTA quốc tế kết hợp cùng các chuyên gia nghệ thuật, âm nhạc, công nghệ và điều phối viên chăm sóc học viên tận tâm.",
      },
      {
        id: "faq-3",
        question: "Trại hè có phù hợp với mọi lứa tuổi không?",
        answer:
          "Chương trình được chia thành 3 nhóm độ tuổi chuyên biệt: Kids (5 - 8 tuổi), Juniors (9 - 12 tuổi) và Teens (13 - 17 tuổi) với giáo trình và hoạt động thể chất thiết kế phù hợp từng giai đoạn phát triển.",
      },
      {
        id: "faq-4",
        question: "Chế độ dinh dưỡng và an toàn cho học viên được đảm bảo thế nào?",
        answer:
          "Học viên được phục vụ bữa trưa và 2 bữa xế dinh dưỡng chuẩn an toàn thực phẩm, có xe đưa đón tận nơi và đội ngũ y tế, giám sát viên theo sát tỉ lệ 1:6 trong suốt ngày học.",
      },
    ],
  },
  facilitiesSection: {
    badge: "KHÁM PHÁ TUYỆT VỜI",
    title: "CƠ SỞ VẬT CHẤT",
    items: [
      {
        id: "fac-1",
        title: "Bếp Thực Hành Ẩm Thực & Làm Bánh",
        subtitle: "Trang bị thiết bị an toàn chuẩn quốc tế cho học viên",
        image:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "fac-2",
        title: "Phòng Hòa Nhạc & Nhạc Cụ Hiện Đại",
        subtitle: "Hệ thống Piano, Violin, Guitar và âm thanh tiêu chuẩn",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "fac-3",
        title: "Xưởng Hội Họa & Mỹ Thuật Sáng Tạo",
        subtitle: "Không gian mở ngập tràn ánh sáng tự nhiên",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "fac-4",
        title: "Phòng Lab Công Nghệ & Robotics",
        subtitle: "Máy tính cấu hình cao và bộ kit lập trình STEAM",
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "fac-5",
        title: "Khu Thực Hành Pha Chế & Kỹ Năng Sống",
        subtitle: "Không gian rèn luyện tính tự lập và làm việc nhóm",
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "fac-6",
        title: "Studio Thu Âm & Sân Khấu Thuyết Trình",
        subtitle: "Nơi học viên tự tin tỏa sáng và ghi hình dự án",
        image:
          "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  teachersSection: {
    badge: "KHÁM PHÁ TUYỆT VỜI",
    title: "GIẢNG VIÊN CHUYÊN NGHIỆP",
    subtitle:
      "Trong một thế giới không ngừng thay đổi, việc trang bị cho bản thân những kỹ năng mới không chỉ là một lựa chọn, mà là một nhu cầu thiết yếu",
    teachers: [
      {
        id: "teacher-1",
        name: "GV. Trần Thị Lan",
        role: "Giảng viên Kỹ năng sống & Ẩm thực",
        credentials: "Thạc sĩ Giáo dục Kỹ năng • 8 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "teacher-2",
        name: "GV. Đinh Quốc Anh",
        role: "Giảng viên chuyên ngành Violin",
        credentials: "Tốt nghiệp Nhạc viện TP.HCM • 10 năm giảng dạy",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "teacher-3",
        name: "GV. Nguyễn Thị Bích",
        role: "Giảng viên Mỹ thuật Sáng tạo",
        credentials: "Cử nhân Mỹ thuật Tạo hình • Cố vấn triển lãm thiếu nhi",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "teacher-4",
        name: "GV. Lê Minh Khôi",
        role: "Giảng viên Tiếng Anh & Tranh biện",
        credentials: "Chứng chỉ TESOL Quốc tế • IELTS 8.5",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  supervisionBanner: {
    badge: "KHÁM PHÁ TUYỆT VỜI",
    quote:
      "Tất cả các hoạt động đều được giám sát bởi đội ngũ giảng viên và nhân viên chuyên nghiệp, đảm bảo sự an toàn và hỗ trợ tối đa cho các em.",
    backgroundImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
  },
  gallerySection: {
    badge: "KHÁM PHÁ TUYỆT VỜI",
    title: "THƯ VIỆN HÌNH ẢNH",
    images: [
      {
        id: "gal-1",
        title: "Lớp học thực hành làm bánh",
        category: "Kỹ năng sống",
        image:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-2",
        title: "Phòng tập hòa tấu nhạc cụ",
        category: "Âm nhạc",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-3",
        title: "Học viên lập trình dự án nhóm",
        category: "Công nghệ",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-4",
        title: "Xưởng vẽ tranh màu nước",
        category: "Mỹ thuật",
        image:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-5",
        title: "Giờ đọc sách tiếng Anh tương tác",
        category: "Anh ngữ",
        image:
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-6",
        title: "Phòng thực hành máy tính STEAM",
        category: "Công nghệ",
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-7",
        title: "Khu vực bếp thực hành tiêu chuẩn",
        category: "Cơ sở vật chất",
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-8",
        title: "Góc sáng tạo âm nhạc & thu âm",
        category: "Âm nhạc",
        image:
          "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "gal-9",
        title: "Giờ học Piano 1 kèm 1 cùng giảng viên",
        category: "Âm nhạc",
        image:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  videoBanner: {
    title: "Không Gian Học Tập Chuẩn Quốc Tế Tại LIFE SKILLS",
    subtitle:
      "Khám phá hệ thống phòng học tương tác, xưởng nghệ thuật và sân chơi kỹ năng hiện đại",
    backgroundImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85",
  },
  news: [
    {
      id: "news-1",
      title: "Kỹ Năng Kỹ Thuật Số: Bước Đệm Vững Chắc Cho Trẻ Trong Kỷ Nguyên Số",
      date: "17/02/2026",
      category: "Kỹ năng công nghệ",
      excerpt:
        "Trang bị tư duy lập trình và an toàn không gian mạng từ sớm giúp trẻ chủ động sáng tạo thay vì chỉ tiêu thụ nội dung thụ động.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-2",
      title: "Tư Duy Phản Biện: Cách Để Trẻ Tự Tin Tranh Biện Tiếng Anh Lưu Loát",
      date: "17/02/2026",
      category: "Anh ngữ học thuật",
      excerpt:
        "Phương pháp đặt câu hỏi mở 5W1H giúp học viên hình thành lập luận sắc bén và diễn đạt ý tưởng bằng tiếng Anh mạch lạc.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-3",
      title: "Sáng Tạo Mỗi Ngày: Khơi Dậy Tư Duy Nghệ Thuật & Cảm Xúc Cho Trẻ",
      date: "17/02/2026",
      category: "Giáo dục cảm xúc",
      excerpt:
        "Âm nhạc và hội họa không chỉ nuôi dưỡng tâm hồn mà còn kích thích phát triển ngôn ngữ và trí thông minh cảm xúc vượt trội.",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
    },
  ],
  newsletterSection: {
    title: "Đăng ký bản tin",
    subtitle: "Đăng ký ngay để nhận các tin tức mới nhất và ưu đãi học bổng trại hè từ chúng tôi",
    placeholder: "Nhập email...",
    buttonText: "Đăng ký",
    leftImage:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
  },
};
