import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TourPackageItem {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  featured?: boolean;
  image: string;
}

export interface LeadGeneration7Data extends ClonedTemplateBaseData {
  searchOptions: {
    destinations: string[];
    activities: string[];
    durations: string[];
    budgets: string[];
  };
  tours: TourPackageItem[];
  aboutChecklist: string[];
  aboutCollage: string[];
  countdownOffer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    ctaText: string;
    videoImage: string;
  };
  greenFeatures: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  specialPromoBanner: {
    eyebrow: string;
    title: string;
    description: string;
    discountPercent: string;
    ctaText: string;
    image: string;
  };
  cities: Array<{
    id: string;
    name: string;
    tripsCount: string;
    image: string;
  }>;
  footerGallery: string[];
}

export const leadGeneration7DefaultData: LeadGeneration7Data = {
  business: {
    name: "TripHaven",
    phone: ["(+84) 0313728397", "1900 636 648"],
    email: ["info@themona.global", "booking@triphaven.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Hỗ trợ đặt tour 24/7",
    rating: 4.95,
    reviewCount: 50000,
    aboutTitle: "Chuyến Đi Tốt Nhất",
    aboutText: [
      "Chúng tôi đảm bảo chất lượng dịch vụ tốt nhất, đội ngũ hướng dẫn viên chuyên nghiệp và sự tỉ mỉ trong từng chi tiết. Chúng tôi sẽ là người đồng hành đáng tin cậy trong hành trình khám phá thế giới của bạn.",
      "Mỗi hành trình tại TripHaven được thiết kế cá nhân hóa, kết hợp nghỉ dưỡng sinh thái và trải nghiệm văn hóa bản địa đặc sắc."
    ],
    experienceYears: "15+"
  },
  hero: {
    eyebrow: "Khám Phá Ngay",
    title: "Hành Trình Thú Vị Đang Chờ Đợi",
    subtitle:
      "Chào mừng bạn đến với trang chủ của chúng tôi, nơi bạn có thể khám phá và trải nghiệm những chuyến du lịch tuyệt vời. Chúng tôi tự hào là một đơn vị hàng đầu trong ngành du lịch, mang đến cho bạn những trải nghiệm đáng nhớ và không thể quên.",
    ctaText: "XEM THÊM",
    ctaLink: "#goi-du-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=85"
  },
  searchOptions: {
    destinations: [
      "Tất cả điểm đến",
      "Vịnh Hạ Long - Quảng Ninh",
      "Đảo Ngọc Phú Quốc",
      "Đà Nẵng - Hội An",
      "Sapa - Tây Bắc"
    ],
    activities: [
      "Tất cả hoạt động",
      "Nghỉ dưỡng sinh thái",
      "Khám phá văn hóa",
      "Trekking & Chèo Kayak",
      "Du thuyền 5 sao"
    ],
    durations: ["0 Ngày - 8 Ngày", "3 Ngày 2 Đêm", "4 Ngày 3 Đêm", "5 Ngày 4 Đêm"],
    budgets: [
      "0đ - 19,999,000đ",
      "Dưới 3,000,000đ",
      "3,000,000đ - 6,000,000đ",
      "Trên 6,000,000đ"
    ]
  },
  tours: [
    {
      id: "tr-1",
      title: "Hành Trình Văn Hóa Tây Bắc: Khám Phá Đỉnh Fansipan Hùng Vĩ",
      location: "Sapa, Lào Cai, Việt Nam",
      duration: "5 Ngày - 4 Đêm",
      price: "2,500,000₫",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tr-2",
      title: "Kỳ Nghỉ Thiên Đường Biển Đảo Phú Quốc & Lặn Ngắm San Hô",
      location: "Phú Quốc, Kiên Giang",
      duration: "4 Ngày - 3 Đêm",
      price: "3,400,000₫",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tr-3",
      title: "Gói Trăng Mật Lãng Mạn Đà Lạt & Săn Mây Đồi Chè Cầu Đất",
      location: "Đà Lạt, Lâm Đồng",
      duration: "5 Ngày - 4 Đêm",
      price: "4,700,000₫",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    }
  ],
  aboutChecklist: [
    "Điểm đến độc đáo",
    "Trải nghiệm văn hóa",
    "Hoạt động thú vị",
    "Dịch vụ chất lượng",
    "Lịch trình linh hoạt",
    "Kỷ niệm đáng nhớ",
    "An toàn hàng đầu",
    "Hỗ trợ tận tâm 24/7"
  ],
  aboutCollage: [
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80"
  ],
  countdownOffer: {
    eyebrow: "Ưu Đãi Giới Hạn",
    title: "Nhận giảm giá lên đến 50%",
    subtitle: "Thời gian có hạn. Hãy khám phá ngay",
    days: "313",
    hours: "10",
    minutes: "17",
    seconds: "35",
    ctaText: "XEM THÊM",
    videoImage:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1000&q=80"
  },
  greenFeatures: [
    {
      id: "gf-1",
      title: "Hoạt động đặc biệt",
      description:
        "Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi.",
      icon: "sparkles"
    },
    {
      id: "gf-2",
      title: "Hướng dẫn tận tâm",
      description:
        "Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi.",
      icon: "compass"
    },
    {
      id: "gf-3",
      title: "Lịch trình linh hoạt",
      description:
        "Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi.",
      icon: "calendar"
    },
    {
      id: "gf-4",
      title: "Điểm đến đa dạng",
      description:
        "Chúng tôi cam kết mang đến cho bạn những hoạt động đặc biệt và độc đáo trong mỗi chuyến đi.",
      icon: "map"
    }
  ],
  specialPromoBanner: {
    eyebrow: "Khám Phá & Trải Nghiệm",
    title: "Ưu đãi đặc biệt",
    description:
      "Đặt sớm gói kỳ nghỉ mùa hè cùng gia đình để nhận ngay ưu đãi giảm trực tiếp 35% chi phí khách sạn 5 sao và vé tham quan.",
    discountPercent: "35%",
    ctaText: "NHẬN ƯU ĐÃI NGAY",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
  },
  cities: [
    {
      id: "ct-1",
      name: "Đảo Ngọc Phú Quốc",
      tripsCount: "03 Chuyến",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ct-2",
      name: "Vịnh biển Nha Trang",
      tripsCount: "02 Chuyến",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ct-3",
      name: "Vịnh Hạ Long Kỳ Quan",
      tripsCount: "04 Chuyến",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Trần Minh Quân",
      role: "Du khách quốc tế",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã có một trải nghiệm mua tour du lịch tuyệt vời qua trang web này và chắc chắn sẽ sử dụng dịch vụ của họ trong tương lai."
    },
    {
      id: "rv-2",
      author: "Lê Thanh Trúc",
      role: "Du khách quốc tế",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã có một trải nghiệm mua tour du lịch tuyệt vời qua trang web này và chắc chắn sẽ sử dụng dịch vụ của họ trong tương lai."
    }
  ],
  news: [
    {
      id: "nw-1",
      date: "12 Tháng Mười Hai, 2026",
      title: "10 Phụ Kiện Không Thể Thiếu Cho Kỳ Nghỉ Biển Trọn Vẹn Mùa Hè",
      excerpt:
        "Cẩm nang chuẩn bị hành lý gọn nhẹ, kem chống nắng và phụ kiện chụp ảnh cực chất cho chuyến du lịch biển đảo.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      date: "12 Tháng Mười Hai, 2026",
      title: "Kinh Nghiệm Du Lịch Đảo Ngọc Tháng 8: Thời Tiết Và Lịch Trình",
      excerpt:
        "Gợi ý lịch trình khám phá quần đảo An Thới, thưởng thức hải sản tươi sống và ngắm hoàng hôn đẹp nhất.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      date: "12 Tháng Mười Hai, 2026",
      title: "Hành Trình Khám Phá Thảo Nguyên Xanh: Trải Nghiệm Cắm Trại Đêm",
      excerpt:
        "Tận hưởng không khí trong lành trên thảo nguyên, săn mây bình minh và thưởng thức tiệc nướng BBQ ngoài trời.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80"
  ]
};

export default leadGeneration7DefaultData;
