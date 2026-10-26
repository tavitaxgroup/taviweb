import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym4Data extends ClonedTemplateBaseData {
  heroStats: {
    ratingScore: string;
    memberBadge: string;
    membersCount: string;
    membersLabel: string;
    coachesCount: string;
    coachesLabel: string;
    videoCaption: string;
    courtImage: string;
    playerImage: string;
  };
  aboutFeatures: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  aboutGallery: string[];
  courtServices: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    featured?: boolean;
  }>;
  memberships: Array<{
    id: string;
    name: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  }>;
  clubHighlights: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  ctaBanner: {
    title: string;
    description: string;
    buttonText: string;
    image: string;
  };
}

export const phongGym4DefaultData: PhongGym4Data = {
  business: {
    name: "Mona Pickleball",
    phone: ["(+84) 0313-728-397", "0909 686 868"],
    email: ["info@themona.global", "booking@monapickleball.vn"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "06:00 - 22:30 (Tất cả các ngày trong tuần)",
    rating: 4.95,
    reviewCount: 2000,
    aboutTitle: "Điều thú vị về CLB Mona Pickleball",
    aboutText: [
      "Chào mừng bạn đến với Mona Pickleball, chúng tôi cung cấp chương trình huấn luyện pickleball đẳng cấp quốc tế và cơ sở vật chất hiện đại cho mọi lứa tuổi và trình độ.",
      "Pickleball không chỉ là một môn thể thao, mà còn là một cộng đồng đam mê kết nối. Chúng tôi cung cấp các dịch vụ đa dạng gồm cụm sân tập tiêu chuẩn USAPA, lớp học chuyên nghiệp, huấn luyện viên tận tâm và các giải đấu giao lưu sôi động hàng tháng."
    ],
    experienceYears: "20+",
    highlights: [
      "Mặt sân thảm Acrylic 8 lớp tiêu chuẩn thi đấu quốc tế USAPA",
      "Hệ thống mái che di động & đèn LED chống chói chuẩn truyền hình",
      "Đội ngũ hơn 80 HLV có chứng chỉ PPR & IPTPA quốc tế",
      "Khu vực Pro-Shop, phòng thay đồ & Lounge phục hồi năng lượng"
    ]
  },
  hero: {
    eyebrow: "TỔ HỢP THỂ THAO & CÂU LẠC BỘ PICKLEBALL HIỆN ĐẠI",
    title: "Khám phá giới hạn mới với Mona Pickleball",
    subtitle:
      "Pickleball không chỉ là một môn thể thao, mà còn là một cộng đồng đam mê kết nối. Trên trang web của chúng tôi, chúng tôi không chỉ cung cấp thông tin về cách chơi và các chiến thuật trong trò chơi này mà còn tạo ra một không gian kết nối cho những người yêu thích pickleball. Chúng tôi cung cấp các dịch vụ pickleball đa dạng và chất lượng, bao gồm sân tập hiện đại, lớp học chuyên nghiệp, huấn luyện viên tận tâm, và cơ hội tham gia vào các giải đấu thú vị.",
    description:
      "Hãy đến với chúng tôi để trải nghiệm niềm vui và sự hứng khởi của môn thể thao pickleball!",
    ctaText: "THAM GIA NGAY",
    ctaLink: "#goi-hoi-vien",
    secondaryCtaText: "ĐẶT SÂN NGAY",
    secondaryCtaLink: "#thue-san",
    backgroundImage:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  heroStats: {
    ratingScore: "4.95 / 5",
    memberBadge: "2K+",
    membersCount: "2,000+",
    membersLabel: "Học viên",
    coachesCount: "80+",
    coachesLabel: "Huấn luyện viên chuyên nghiệp",
    videoCaption:
      "Xem video giới thiệu và nâng cao kỹ năng, chiến lược chơi pickleball của bạn!",
    courtImage:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80",
    playerImage:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=80"
  },
  aboutFeatures: [
    {
      id: "af-1",
      title: "Sân tập luyện",
      description:
        "Phát triển kỹ năng Pickleball với trang thiết bị hiện đại và mặt sân chuẩn quốc tế.",
      icon: "court"
    },
    {
      id: "af-2",
      title: "Huấn luyện viên",
      description:
        "Đội ngũ huấn luyện viên nhiều năm kinh nghiệm, tận tâm chỉnh sửa từng động tác.",
      icon: "coach"
    },
    {
      id: "af-3",
      title: "Lịch trình linh hoạt",
      description:
        "Cung cấp buổi tập và khung giờ đặt sân phù hợp với mọi lịch trình cá nhân của bạn.",
      icon: "calendar"
    },
    {
      id: "af-4",
      title: "Giá cả phải chăng",
      description:
        "Tận hưởng chương trình huấn luyện chất lượng cao và dịch vụ thuê sân hợp lý.",
      icon: "price"
    }
  ],
  aboutGallery: [
    "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560012057-4372e14c5085?auto=format&fit=crop&w=800&q=80"
  ],
  courtServices: [
    {
      id: "cs-1",
      title: "Thuê Sân Theo Giờ",
      description:
        "Cung cấp sân pickleball chất lượng, phục vụ cho nhu cầu chơi thể thao của bạn. Đặt sân dễ dàng theo giờ, linh hoạt theo thời gian bạn chọn.",
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: "cs-2",
      title: "Gói Thuê Sân Theo Tuần",
      description:
        "Tiết kiệm chi phí với gói thuê sân pickleball hàng tuần. Cơ hội chơi pickleball thường xuyên với mức giá ưu đãi và khung giờ cố định.",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: "cs-3",
      title: "Sân cho đội và nhóm",
      description:
        "Dành riêng sân pickleball cho đội và nhóm, phục vụ cho các giải đấu hoặc sự kiện đặc biệt. Đảm bảo không gian riêng tư và thoải mái cho các nhóm lớn.",
      image:
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
      featured: false
    },
    {
      id: "cs-4",
      title: "Cho thuê thiết bị chơi",
      description:
        "Cung cấp cho thuê vợt Carbon, bóng thi đấu và các thiết bị chơi pickleball chất lượng. Đảm bảo bạn có đầy đủ trang thiết bị để tham gia trận đấu.",
      image:
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=80",
      featured: false
    },
    {
      id: "cs-5",
      title: "Tổ chức giải đấu",
      description:
        "Hỗ trợ tổ chức giải đấu pickleball, tạo cơ hội giao lưu và thi đấu cho cộng đồng yêu thể thao. Chăm sóc chi tiết từ việc đặt sân đến trao giải.",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
      featured: false
    }
  ],
  memberships: [
    {
      id: "plan-basic",
      name: "Cơ Bản",
      description: "Tiếp cận sân tập cơ bản, tham gia giải đấu nội bộ",
      price: "149k",
      period: "/Tháng",
      features: [
        "8 buổi học mỗi tháng",
        "Kỹ thuật cơ bản & cách chơi",
        "Đào tạo cơ bản dành cho người mới bắt đầu"
      ]
    },
    {
      id: "plan-advanced",
      name: "Nâng Cao",
      description:
        "Sử dụng sân tập cao cấp, tham gia lớp học chuyên sâu, giảm giá cho dịch vụ huấn luyện.",
      price: "410k",
      period: "/Tháng",
      popular: true,
      features: [
        "12 buổi học mỗi tháng",
        "Đào tạo chuyên sâu chiến thuật",
        "Tham gia các trận đấu và giải đấu CLB"
      ]
    },
    {
      id: "plan-pro",
      name: "Chuyên Nghiệp",
      description:
        "Ưu đãi độc quyền, hướng dẫn cá nhân từ huấn luyện viên chuyên nghiệp, tham gia các sự kiện đặc biệt.",
      price: "700k",
      period: "/Tháng",
      features: [
        "3 giờ/buổi học cường độ cao",
        "10 buổi học mỗi tháng cùng HLV trưởng",
        "Đào tạo chuyên sâu & phân tích video",
        "Tham gia các trận đấu và giải đấu mở rộng"
      ]
    }
  ],
  clubHighlights: [
    {
      id: "ch-1",
      number: "20+",
      title: "Năm kinh nghiệm",
      description: "Chúng tôi tự hào mang đến dịch vụ chất lượng và uy tín"
    },
    {
      id: "ch-2",
      number: "20+",
      title: "Chương trình học",
      description: "Đáp ứng mọi nhu cầu học tập từ cơ bản đến nâng cao."
    },
    {
      id: "ch-3",
      number: "2K+",
      title: "Học viên",
      description: "Trải nghiệm chuyên nghiệp và đa dạng của chương trình học."
    },
    {
      id: "ch-4",
      number: "80+",
      title: "Huấn luyện viên",
      description: "Chúng tôi cam kết sự phát triển tối đa cho học viên."
    }
  ],
  stats: [
    { id: "st-1", number: "20+", title: "Năm kinh nghiệm", subtitle: "Vận hành thể thao uy tín" },
    { id: "st-2", number: "20+", title: "Chương trình học", subtitle: "Từ Newbie đến Pro" },
    { id: "st-3", number: "2K+", title: "Học viên", subtitle: "Cộng đồng năng động" },
    { id: "st-4", number: "80+", title: "Huấn luyện viên", subtitle: "Chứng chỉ quốc tế" }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Nguyễn Văn An",
      role: "Giám đốc Marketing",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      content:
        "Tôi đã tham gia lớp Pickleball tại Mona Pickleball và thật sự rất ấn tượng với chương trình học. Huấn luyện viên chuyên nghiệp, nhiệt tình và luôn sẵn sàng giúp tôi cải thiện kỹ năng. Đây là nơi lý tưởng cho những ai muốn nâng cao trình độ!"
    },
    {
      id: "rv-2",
      author: "Trần Minh Hoàng",
      role: "Doanh nhân & VĐV Phong trào",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      content:
        "Mặt sân đạt chuẩn thi đấu quốc tế, độ nảy bóng cực chuẩn và hệ thống đèn chiếu sáng buổi tối không hề gây chói mắt. Cuối tuần nào nhóm mình cũng đặt cố định 3 sân tại đây để giao lưu."
    },
    {
      id: "rv-3",
      author: "Lê Thu Thảo",
      role: "Hội viên Gói Nâng Cao",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      content:
        "Chỉ sau 1 tháng theo học lộ trình Cơ Bản, mình đã nắm vững kỹ thuật Dink, Volley trên lưới và tự tin tham gia giải đấu nội bộ của CLB. Không khí tại sân luôn vui vẻ và tràn đầy năng lượng."
    }
  ],
  news: [
    {
      id: "nw-1",
      category: "PICKLEBALL",
      date: "18/05/2026",
      title: "Hành Trình Pickleball: Từ Sân Chơi Đến Sân Đấu Chuyên Nghiệp",
      excerpt:
        "Khám phá lộ trình rèn luyện bài bản giúp người chơi mới làm chủ kỹ thuật kiểm soát bóng và bản lĩnh thi đấu giải.",
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nw-2",
      category: "GUIDE",
      date: "14/05/2026",
      title: "Pickleball Cho Mọi Lứa Tuổi: Sức Khỏe Và Sự Vui Vẻ",
      excerpt:
        "Vì sao Pickleball trở thành môn thể thao gắn kết gia đình và đốt cháy năng lượng hiệu quả nhất hiện nay?",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nw-3",
      category: "GUIDE",
      date: "09/05/2026",
      title: "Cộng Đồng Pickleball: Giao Lưu, Học Hỏi Và Chia Sẻ Kinh Nghiệm",
      excerpt:
        "Tham gia các buổi Social Night hàng tuần để cọ xát trình độ DUPR và mở rộng mạng lưới bạn bè cùng đam mê.",
      image:
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nw-4",
      category: "PICKLEBALL",
      date: "02/05/2026",
      title: "Nguyên Tắc Cơ Bản Và Nâng Cao Trong Pickleball: Học Và Thực Hành",
      excerpt:
        "Bí quyết làm chủ khu vực Non-Volley Zone (Kitchen) và cú đánh thứ 3 (Third Shot Drop) chuẩn xác.",
      image:
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=900&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "1. Tôi cần chuẩn bị gì khi mới bắt đầu chơi Pickleball?",
      answer:
        "Bạn chỉ cần chuẩn bị trang phục thể thao thoải mái và giày thể thao đế bằng có độ bám tốt. Chúng tôi sẽ cung cấp đầy đủ các dụng cụ cần thiết như vợt Carbon và bóng thi đấu trong quá trình học. Nếu bạn muốn mua vợt riêng, đội ngũ HLV cũng sẽ tư vấn dòng vợt phù hợp nhất cho người mới bắt đầu."
    },
    {
      id: "faq-2",
      question: "2. Pickleball khác gì so với quần vợt (Tennis) và cầu lông?",
      answer:
        "Sân Pickleball có kích thước tương đương sân cầu lông đôi, lưới thấp như quần vợt và sử dụng vợt mặt đặc cùng bóng nhựa đục lỗ. Nhờ đó, tốc độ bóng vừa phải, ít gây áp lực lên khớp gối nhưng vẫn đòi hỏi phản xạ nhanh nhạy và chiến thuật đồng đội vô cùng hấp dẫn."
    },
    {
      id: "faq-3",
      question: "3. Tôi có thể tham gia lớp học nhóm không nếu chưa biết chơi Pickleball?",
      answer:
        "Hoàn toàn được! CLB mở các lớp Newbie định kỳ mỗi tuần dành riêng cho người mới bắt đầu từ con số 0. Bạn sẽ được học luật chơi, cách cầm vợt Continental, giao bóng và di chuyển chiến thuật cùng những học viên đồng trang lứa."
    },
    {
      id: "faq-4",
      question: "4. Tôi có thể tham gia thi đấu Pickleball sau bao lâu học tập?",
      answer:
        "Thông thường chỉ sau 4 đến 6 buổi tập luyện cùng huấn luyện viên, học viên đã nắm vững luật tính điểm và các kỹ thuật cơ bản để tự tin tham gia các trận giao lưu Social Match hoặc giải đấu nội bộ hàng tháng của câu lạc bộ."
    }
  ],
  ctaBanner: {
    title: "Kết Nối Với Câu Lạc Bộ Pickleball",
    description:
      "Tham gia câu lạc bộ pickleball để gặp gỡ những người đam mê thể thao, chia sẻ kinh nghiệm, và tham gia vào các hoạt động thú vị. Hãy cùng chúng tôi tạo nên một cộng đồng sôi động và hứng khởi trong thế giới pickleball!",
    buttonText: "LIÊN HỆ NGAY",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
  }
};

export default phongGym4DefaultData;
