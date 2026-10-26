import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat12SuiteCard {
  id: string;
  badge: string;
  title: string;
  price: string;
  area: string;
  capacity: string;
  image: string;
}

export interface NoiThat12AmenityCard {
  id: string;
  title: string;
  image: string;
  iconName: "garden" | "bar" | "room24" | "security" | "airport" | "tour";
}

export interface NoiThat12DiverseService {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface NoiThat12HighlightRow {
  id: string;
  title: string;
  description: string;
}

export interface NoiThat12Data extends ClonedTemplateBaseData {
  aboutCollageImages: string[];
  featuredSuites: NoiThat12SuiteCard[];
  amenitiesGrid: NoiThat12AmenityCard[];
  achievementSection: {
    eyebrow: string;
    title: string;
    description: string;
    highlightText: string;
    image: string;
  };
  diverseServices: NoiThat12DiverseService[];
  experienceCollage: {
    eyebrow: string;
    title: string;
    quoteTitle: string;
    quoteSub: string;
    tallImage: string;
    topRightImage: string;
    features: NoiThat12HighlightRow[];
  };
  hotelGallery: string[];
  nightPromoBanner: {
    title: string;
    subtitle: string;
    description: string;
    ribbonTitle: string;
    ribbonBullets: string[];
    backgroundImage: string;
  };
}

export const noiThat12DefaultData: NoiThat12Data = {
  business: {
    name: "LUXURY",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "booking@peakviewluxury.vn"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Lễ tân & Tư vấn nội thất nghỉ dưỡng: 24/7",
    rating: 5.0,
    reviewCount: 260,
    experienceYears: "15+",
    aboutTitle: "PHÒNG NGHỈ SANG TRỌNG VÀ TIỆN NGHI",
    aboutText: [
      "Tại Luxuria Hotel & PeakView Interior, chúng tôi tự hào về không gian nghỉ dưỡng sang trọng và thiết kế nội thất tinh tế trong từng chi tiết. Từ các phòng nghỉ đẳng cấp đến dịch vụ spa thư giãn, chúng tôi luôn chú trọng đến sự thoải mái và hài lòng của khách hàng.",
      "Được bình chọn là 'Khách Sạn & Tổ Hợp Nghỉ Dưỡng Phục Vụ Tốt Nhất' tại Giải Thưởng Du Lịch Quốc Gia và nhận giải thưởng 'Thiết Kế Nội Thất Khách Sạn Sang Trọng Nhất' của Hiệp Hội Du Lịch Địa Phương."
    ],
    highlights: [
      "ĐIỂM ĐẾN CHO NHỮNG TRẢI NGHIỆM ĐÁNG NHỚ",
      "Phòng nghỉ: Đầy đủ tiện nghi nội thất 5 sao",
      "Dịch vụ: Đa dạng & cá nhân hóa 24/7"
    ]
  },
  hero: {
    eyebrow: "TRẢI NGHIỆM TUYỆT VỜI",
    title: "LUXURY HOTEL",
    subtitle: "LUXURY & BEST HOTEL",
    ctaText: "ĐẶT PHÒNG",
    ctaLink: "#dat-phong",
    secondaryCtaText: "KHÁM PHÁ",
    secondaryCtaLink: "#gioi-thieu",
    backgroundImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  aboutCollageImages: [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80"
  ],
  featuredSuites: [
    {
      id: "suite-1",
      badge: "PHỔ BIẾN",
      title: "Double Room",
      price: "1.690.000đ",
      area: "25m2",
      capacity: "4",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "suite-2",
      badge: "PHỔ BIẾN",
      title: "Master Suit Room",
      price: "2.590.000đ",
      area: "45m2",
      capacity: "6",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85"
    }
  ],
  amenitiesGrid: [
    {
      id: "am-1",
      title: "Khuôn Viên Xanh Mát",
      iconName: "garden",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-2",
      title: "Bar và Lounge Chất Lượng",
      iconName: "bar",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-3",
      title: "Dịch Vụ Phòng 24/7",
      iconName: "room24",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-4",
      title: "Hệ Thống An Ninh Hiện Đại",
      iconName: "security",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-5",
      title: "Dịch Vụ Đưa Đón Sân Bay",
      iconName: "airport",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-6",
      title: "Dịch Vụ Đặt Tour và Thuê Xe",
      iconName: "tour",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    }
  ],
  achievementSection: {
    eyebrow: "THÀNH TỰU KHÁCH SẠN",
    title: "CHỨNG NHẬN VÀ UY TÍN",
    description:
      "Được bình chọn là 'Khách Sạn Phục Vụ Tốt Nhất' tại Giải Thưởng Du Lịch Quốc Gia. Nhận giải thưởng 'Khách Sạn Sang Trọng Nhất' của Hội Du Lịch Địa Phương.",
    highlightText: "Tham quan và tận hưởng cuộc sống chất lượng",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85"
  },
  stats: [
    { id: "st-1", number: "320+", title: "Phòng nghỉ" },
    { id: "st-2", number: "100+", title: "Nhân viên" },
    { id: "st-3", number: "260+", title: "Đánh giá tích cực" }
  ],
  diverseServices: [
    {
      id: "ds-1",
      category: "NGHỈ DƯỠNG",
      title: "Hồ bơi ngoài trời",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ds-2",
      category: "GIA ĐÌNH",
      title: "Đặt tour du lịch",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ds-3",
      category: "KHÁM PHÁ",
      title: "Hướng dẫn du lịch",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ds-4",
      category: "DI CHUYỂN",
      title: "Đưa đón sân bay",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ds-5",
      category: "TIỆN ÍCH",
      title: "Thu đổi ngoại tệ",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ds-6",
      category: "THUÊ XE VIP",
      title: "Cho thuê xe",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=700&q=80"
    }
  ],
  experienceCollage: {
    eyebrow: "TIỆN NGHI",
    title: "TRẢI NGHIỆM TUYỆT VỜI",
    quoteTitle: "Khoảnh khắc đẹp\nkhó quên",
    quoteSub: "KHÁCH SẠN SANG TRỌNG TINH TẾ",
    tallImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    topRightImage:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80",
    features: [
      {
        id: "ef-1",
        title: "Nhà hàng chuyên nghiệp",
        description:
          "Nhà hàng của chúng tôi chuyên phục vụ các món ăn ngon miệng từ địa phương đến quốc tế."
      },
      {
        id: "ef-2",
        title: "Bãi đỗ xe rộng rãi",
        description:
          "Đội ngũ nhân viên chuyên nghiệp sẽ hỗ trợ khách hàng với dịch vụ đậu xe valet tiện lợi."
      },
      {
        id: "ef-3",
        title: "Hồ bơi ngoài trời",
        description:
          "Với ghế nằm và dịch vụ phục vụ tận nơi, khách hàng có thể thư giãn và tận hưởng không gian yên bình bên hồ bơi."
      }
    ]
  },
  hotelGallery: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
  ],
  nightPromoBanner: {
    title: "TRẢI NGHIỆM SỰ CHĂM SÓC ĐẶC BIỆT TỪ LUXURY HOTEL",
    subtitle: "LUXURY & BEST HOTEL",
    description:
      "Được bình chọn là 'Khách Sạn Phục Vụ Tốt Nhất' tại Giải Thưởng Du Lịch Quốc Gia. Nhận giải thưởng 'Khách Sạn Sang Trọng Nhất' của Hội Du Lịch Địa Phương.",
    ribbonTitle: "Dịch vụ\nphòng 24/7",
    ribbonBullets: [
      "Views đẹp toàn cảnh biển & đồi thông",
      "Đặt phòng trực tuyến tức thì",
      "Giảm giá đến 30% mùa lễ hội"
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80"
  },
  testimonials: [
    {
      id: "rv-1",
      author: "Lê Minh Tuấn",
      role: "Doanh nhân BĐS",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Luxuria Hotel thật sự là một điểm đến lưu trú tuyệt vời. Phòng đẹp, nội thất gỗ sang trọng, dịch vụ chuyên nghiệp và nhân viên thân thiện. Một trải nghiệm đáng nhớ!"
    },
    {
      id: "rv-2",
      author: "Nguyễn Đình Hùng",
      role: "Kiến trúc sư trưởng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Luxuria Hotel thật sự là một điểm đến lưu trú tuyệt vời. Phòng đẹp, thiết kế tinh tế trong từng đường nét, dịch vụ chuyên nghiệp và nhân viên thân thiện. Một trải nghiệm đáng nhớ!"
    },
    {
      id: "rv-3",
      author: "Nguyễn Thị Hương",
      role: "Nhà đầu tư Resort",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Luxuria Hotel thật sự là một điểm đến lưu trú tuyệt vời. Phòng đẹp, dịch vụ chuyên nghiệp và nhân viên thân thiện. Một trải nghiệm đáng nhớ!"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Tham khảo Top 6 khách sạn và biệt thự sang trọng nhất thế giới",
      date: "19 Th12",
      category: "Kiến trúc Resort",
      excerpt:
        "Khám phá xu hướng thiết kế nội thất nghỉ dưỡng cao cấp kết hợp vật liệu tự nhiên và tầm nhìn vô cực...",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Hành trình được gợi ý tốt nhất để đi nghỉ dưỡng cùng bạn bè",
      date: "19 Th12",
      category: "Trải nghiệm",
      excerpt:
        "Tận hưởng kỳ nghỉ trọn vẹn tại hệ thống bể bơi vô cực, spa thảo mộc và ẩm thực chuẩn 5 sao...",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      title: "Khách sạn và khu nghỉ dưỡng có nội thất tốt nhất thế giới",
      date: "19 Th12",
      category: "Giải thưởng",
      excerpt:
        "Những tiêu chuẩn vàng trong bố trí ánh sáng, chất liệu gỗ óc chó và đá cẩm thạch tại sảnh đón khách...",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
