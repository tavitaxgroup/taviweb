import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh22Data extends ClonedTemplateBaseData {
  heroTrustBar: Array<{
    id: string;
    title: string;
    subtitle: string;
    iconColor: string;
  }>;
  creativityPillars: Array<{
    id: string;
    title: string;
    description: string;
    buttonColor: string;
    image: string;
  }>;
  aspirationSlides: Array<{
    id: string;
    initial: string;
    title: string;
    description: string;
    image: string;
  }>;
  mosaicData: {
    leftLargePhoto: string;
    leftBottomQuoteTitle: string;
    leftBottomQuoteText: string;
    rightTopQuoteTitle: string;
    rightTopQuoteText: string;
    rightMidPhoto: string;
    rightMidBadge: string;
    rightBottomQuoteTitle: string;
    rightBottomQuoteText: string;
  };
  whyChooseCards: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  februaryNews: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
  courses: Array<{
    id: string;
    title: string;
    price: string;
    schedule: string;
    ageGroup: string;
    description: string;
    image: string;
  }>;
}

export const trungTamTiengAnh22DefaultData = {
  business: {
    name: "Hệ Thống Trường Song Ngữ Quốc Tế KidsMona Campus",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["mon@mona.media", "campus@kidsmona.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:30 - 18:00",
    rating: 5.0,
    reviewCount: 890,
    aboutTitle: "PHÁT TRIỂN TƯ DUY VỚI BỘ NÃO SÁNG TẠO",
    aboutText: [
      "Hệ thống Trường Song ngữ Quốc tế KidsMona Campus nuôi dưỡng sự sáng tạo của trẻ nhỏ qua chương trình tiếng Anh học thuật, nghệ thuật biểu diễn và tư duy phản biện chuẩn quốc tế."
    ],
    highlights: [
      "Các lớp học được xây dựng tiên tiến với học cụ thông minh",
      "Giáo viên hướng dẫn kèm cặp 1-1 mỗi em phát huy tối đa năng khiếu",
      "Tạo thói quen đọc sách song ngữ từ nhỏ theo tiêu chuẩn quốc tế"
    ]
  },
  hero: {
    eyebrow: "Thinking • Invent • Study",
    title: "Phát triển tư duy với Bộ não sáng tạo",
    subtitle: "Hệ Thống Trường Song Ngữ & Năng Khiếu Quốc Tế KidsMona",
    description:
      "Khơi dậy tiềm năng trí tuệ, ngôn ngữ và nghệ thuật cho trẻ từ 3 - 12 tuổi trong môi trường học tập giàu cảm hứng.",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#courses",
    backgroundImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=85"
  },
  heroTrustBar: [
    {
      id: "ht-1",
      title: "Các lớp học được xây dựng tiên tiến",
      subtitle: "Phòng học STEAM & мульти-media chuẩn quốc tế",
      iconColor: "#e6004c"
    },
    {
      id: "ht-2",
      title: "Giáo viên hướng dẫn kèm cặp 1-1 mỗi em",
      subtitle: "Theo sát tiến độ phát âm & tâm lý từng học sinh",
      iconColor: "#7ab82e"
    },
    {
      id: "ht-3",
      title: "Tạo thói quen đọc sách từ nhỏ cho trẻ",
      subtitle: "Thư viện hơn 2.000 đầu sách truyện tiếng Anh",
      iconColor: "#00acc1"
    },
    {
      id: "ht-4",
      title: "Đào tạo theo tiêu chuẩn quốc tế",
      subtitle: "Giáo trình Cambridge & Nghệ thuật sáng tạo",
      iconColor: "#f5c518"
    }
  ],
  creativityPillars: [
    {
      id: "cp-1",
      title: "Xây dựng niềm tin",
      description:
        "Giúp trẻ tự tin thuyết trình trước đám đông bằng tiếng Anh và mạnh dạn thể hiện quan điểm cá nhân.",
      buttonColor: "#ff5c8a",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-2",
      title: "Biểu hiện sáng tạo",
      description:
        "Khuyến khích trí tưởng tượng qua hội họa, âm nhạc, múa Bale và các dự án thủ công đa chất liệu.",
      buttonColor: "#7ab82e",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-3",
      title: "Rèn luyện thể thao",
      description:
        "Phát triển tầm vóc, sự dẻo dai và tinh thần đồng đội qua các giờ thể chất ngoài trời mỗi ngày.",
      buttonColor: "#00acc1",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-4",
      title: "Học tập tương tác",
      description:
        "Ứng dụng bảng tương tác thông minh và trò chơi phản xạ ngôn ngữ giúp giờ học luôn sôi nổi.",
      buttonColor: "#ff9800",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
    }
  ],
  aspirationSlides: [
    {
      id: "asp-1",
      initial: "K",
      title: "Khát vọng của chúng tôi",
      description:
        "Kiến tạo ngôi trường hạnh phúc nơi mỗi đứa trẻ đều được lắng nghe, tôn trọng sự khác biệt và phát triển toàn diện cả trí tuệ, ngoại ngữ lẫn tâm hồn.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "asp-2",
      initial: "M",
      title: "Môi trường song ngữ chuẩn mực",
      description:
        "100% thời lượng giao tiếp và hoạt động dự án cùng giáo viên nước ngoài và giáo viên Việt Nam giàu kinh nghiệm.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "asp-3",
      initial: "S",
      title: "Sáng tạo không giới hạn",
      description:
        "Đánh thức tiềm năng nghệ thuật và tư duy logic thông qua hệ thống phòng chức năng Vẽ, Múa Bale và Thanh nhạc.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80"
    }
  ],
  mosaicData: {
    leftLargePhoto:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    leftBottomQuoteTitle: "“Bé học nhanh mọi thứ xung quanh”",
    leftBottomQuoteText:
      "Phương pháp tiếp cận đa giác quan giúp trẻ ghi nhớ từ vựng và khái niệm khoa học hoàn toàn tự nhiên.",
    rightTopQuoteTitle: "“Cách học sáng tạo”",
    rightTopQuoteText:
      "Mỗi bài học là một hành trình khám phá đầy ắp tiếng cười, âm nhạc và sắc màu.",
    rightMidPhoto:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80",
    rightMidBadge: "Tư duy Sáng tạo 360°",
    rightBottomQuoteTitle: "“Giống như sự chăm sóc của mẹ”",
    rightBottomQuoteText:
      "Chế độ dinh dưỡng học đường chuẩn khoa học và sự ân cần của cô giáo giúp bố mẹ hoàn toàn yên tâm."
  },
  whyChooseCards: [
    {
      id: "wc-1",
      title: "Rèn luyện thói quen",
      description:
        "Hình thành nề nếp tự lập, lễ phép, yêu thích đọc sách và chủ động giao tiếp tiếng Anh mỗi ngày.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wc-2",
      title: "Tìm kiếm tài năng nhí",
      description:
        "Phát hiện sớm và bồi dưỡng năng khiếu Hội họa, Múa Bale, Thanh nhạc và Hùng biện song ngữ của từng bé.",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wc-3",
      title: "Phương pháp hiện đại",
      description:
        "Kết hợp tinh hoa giáo dục Montessori, STEAM và giáo trình Anh ngữ Quốc tế giúp trẻ phát triển vượt trội.",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  februaryNews: [
    {
      id: "fn-1",
      title: "Những điều cần biết khi chọn trường mầm non",
      date: "12 Tháng 2, 2026",
      excerpt:
        "Tiêu chí đánh giá chương trình song ngữ, tỷ lệ giáo viên/học sinh và không gian vận động an toàn cho trẻ...",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-2",
      title: "Làm sao để trẻ tự tin giao tiếp tiếng Anh từ 3 tuổi?",
      date: "19 Tháng 2, 2026",
      excerpt:
        "Bí quyết tạo môi trường tắm ngôn ngữ tự nhiên qua bài hát, truyện kể và trò chơi đóng vai hàng ngày...",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-3",
      title: "Lợi ích của các bộ môn năng khiếu nghệ thuật đối với não bộ trẻ",
      date: "25 Tháng 2, 2026",
      excerpt:
        "Vẽ tranh, múa Bale và thanh nhạc giúp cân bằng hai bán cầu não và nâng cao chỉ số cảm xúc EQ...",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80"
    }
  ],
  courses: [
    {
      id: "crs-1",
      title: "LỚP NĂNG KHIẾU VẼ & MỸ THUẬT SÁNG TẠO",
      price: "600,000 ₫",
      schedule: "3 buổi / tuần",
      ageGroup: "4 - 10 tuổi",
      description:
        "Khám phá màu nước, sáp dầu, thủ công tạo hình và từ vựng mỹ thuật tiếng Anh cùng họa sĩ hướng dẫn.",
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "crs-2",
      title: "LỚP NĂNG KHIẾU MÚA BALE & HÌNH THỂ",
      price: "700,000 ₫",
      schedule: "3 buổi / tuần",
      ageGroup: "3 - 9 tuổi",
      description:
        "Rèn luyện vóc dáng mềm mại, cảm thụ âm nhạc cổ điển và sự tự tin biểu diễn trên sân khấu lớn.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "crs-3",
      title: "LỚP NĂNG KHIẾU THANH NHẠC & HỢP XƯỚNG ANH NGỮ",
      price: "500,000 ₫",
      schedule: "2 buổi / tuần",
      ageGroup: "4 - 11 tuổi",
      description:
        "Luyện thanh, hát hợp xướng các ca khúc thiếu nhi quốc tế giúp bé phát âm tiếng Anh chuẩn và truyền cảm.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
