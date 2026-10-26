import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TravelTipCard {
  id: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface TravelSparkTour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  badge?: string;
  image: string;
}

export interface LeadGeneration8Data extends ClonedTemplateBaseData {
  travelTips: TravelTipCard[];
  tours: TravelSparkTour[];
  amazingCitiesSection: {
    eyebrow: string;
    title: string;
    description: string;
    smallImages: string[];
    videoImage: string;
  };
  orangeFeatures: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  specialOfferBanner: {
    eyebrow: string;
    title: string;
    description: string;
    discountPercent: string;
    ctaText: string;
    image: string;
  };
  beautifulCities: Array<{
    id: string;
    name: string;
    tripsLabel: string;
    image: string;
  }>;
  bottomCtaBanner: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  instagramGallery: string[];
}

export const leadGeneration8DefaultData: LeadGeneration8Data = {
  business: {
    name: "TravelSpark",
    phone: ["1900 636 648", "(+84) 0313-728-397"],
    email: ["info@themona.global", "hello@travelspark.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:00 - 22:00 (Tất cả các ngày)",
    rating: 4.95,
    reviewCount: 2850,
    aboutTitle: "Những thành phố tuyệt vời",
    aboutText: [
      "Chào mừng bạn đến với gói du lịch tốt nhất của chúng tôi! Nếu bạn đang tìm kiếm một hành trình đáng nhớ và tiện lợi, đây là lựa chọn hoàn hảo dành cho bạn.",
      "Nếu bạn đam mê khám phá những điểm đến độc đáo và trải nghiệm văn hóa mới, chúng tôi sẽ dẫn bạn đến những thành phố tuyệt vời nhất trên hành trình đáng nhớ này."
    ],
    experienceYears: "14+"
  },
  hero: {
    eyebrow: "Lên đường ngay",
    title: "Khám phá thế giới",
    subtitle:
      "Tận hưởng những hành trình nghỉ dưỡng biển đảo, săn mây khinh khí cầu và khám phá di sản văn hóa thế giới với chi phí tối ưu nhất.",
    ctaText: "ĐẶT VÉ NGAY",
    ctaLink: "#goi-du-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=85",
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    ]
  },
  travelTips: [
    {
      id: "tip-1",
      tag: "Cẩm nang",
      date: "12 Tháng Mười Hai, 2026",
      title: "10 Mẹo Chuẩn Bị Hành Lý Cho Kỳ Nghỉ Biển Dài Ngày Và Leo Núi",
      excerpt:
        "Bí quyết sắp xếp trang phục gọn nhẹ, phụ kiện chống nắng và thiết bị quay chụp giúp chuyến đi của bạn luôn thoải mái.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "tip-2",
      tag: "Khám phá",
      date: "12 Tháng Mười Hai, 2026",
      title: "Kinh Nghiệm Du Lịch Đảo Nhiệt Đới Tháng 8: Thời Tiết Và Lịch Trình",
      excerpt:
        "Thời điểm vàng để trải nghiệm chèo thuyền Kayak qua các vịnh đá vôi và thưởng thức ẩm thực bản địa ven biển.",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80"
    }
  ],
  tours: [
    {
      id: "ts-1",
      title: "Hành Trình Khám Phá Văn Hóa Tây Bắc & Đỉnh Hoàng Liên Sơn",
      location: "Sapa, Lào Cai",
      duration: "5 Ngày - 4 Đêm",
      price: "2,500,000₫",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ts-2",
      title: "Kỳ Nghỉ Thiên Đường Đảo Ngọc Phú Quốc & Du Thuyền Hoàng Hôn",
      location: "Phú Quốc, Kiên Giang",
      duration: "4 Ngày - 3 Đêm",
      price: "3,400,000₫",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ts-3",
      title: "Gói Trăng Mật Lãng Mạn Cao Nguyên Lâm Viên & Đồi Chè Sương Sớm",
      location: "Đà Lạt, Lâm Đồng",
      duration: "5 Ngày - 4 Đêm",
      price: "4,700,000₫",
      badge: "Nổi bật",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    }
  ],
  amazingCitiesSection: {
    eyebrow: "Đi & Khám Phá",
    title: "Những thành phố tuyệt vời",
    description:
      "Nếu bạn đam mê khám phá những điểm đến độc đáo và trải nghiệm văn hóa mới, chúng tôi sẽ dẫn bạn đến những thành phố tuyệt vời nhất trên hành trình đáng nhớ này.",
    smallImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    ],
    videoImage:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1000&q=80"
  },
  orangeFeatures: [
    {
      id: "of-1",
      title: "Các hoạt động đặc biệt",
      description:
        "Các hoạt động đặc biệt mang đến trải nghiệm khác biệt và độc đáo"
    },
    {
      id: "of-2",
      title: "Hướng dẫn viên",
      description:
        "Các hoạt động đặc biệt mang đến trải nghiệm khác biệt và độc đáo"
    },
    {
      id: "of-3",
      title: "Đặt vé máy bay",
      description:
        "Các hoạt động đặc biệt mang đến trải nghiệm khác biệt và độc đáo"
    },
    {
      id: "of-4",
      title: "Quản lý vị trí",
      description:
        "Các hoạt động đặc biệt mang đến trải nghiệm khác biệt và độc đáo"
    }
  ],
  specialOfferBanner: {
    eyebrow: "Đi & Khám Phá",
    title: "Ưu đãi đặc biệt",
    description:
      "Khám phá những ưu đãi đặc biệt độc đáo và tiết kiệm hấp dẫn chỉ dành riêng cho bạn.",
    discountPercent: "35%",
    ctaText: "NHẬN ƯU ĐÃI NGAY",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
  },
  beautifulCities: [
    {
      id: "bc-1",
      name: "Santorini Hy Lạp",
      tripsLabel: "02 Chuyến",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bc-2",
      name: "Bờ Biển Phú Quốc",
      tripsLabel: "04 Chuyến",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bc-3",
      name: "Vịnh Đảo Địa Trung Hải",
      tripsLabel: "03 Chuyến",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Khánh An",
      role: "Pháp",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "TravelSpark xử lý mọi tình huống một cách chuyên nghiệp và cẩn thận. Tôi thực sự hài lòng vì chuyến đi."
    },
    {
      id: "rv-2",
      author: "Minh Khôi",
      role: "TP. Hồ Chí Minh",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Lịch trình tham quan rất hợp lý, khách sạn 5 sao view biển tuyệt đẹp và hướng dẫn viên vô cùng nhiệt tình."
    }
  ],
  news: [
    {
      id: "nw-1",
      date: "12 Tháng Mười Hai, 2026",
      title: "10 Vật Dụng Cần Thiết Cho Chuyến Đi Biển Và Dã Ngoại Đường Dài",
      excerpt:
        "Danh sách những món đồ nhỏ gọn nhưng cực kỳ hữu ích giúp bạn tận hưởng trọn vẹn kỳ nghỉ bên bờ biển.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      date: "12 Tháng Mười Hai, 2026",
      title: "Cẩm Nang Du Lịch Quần Đảo Nhiệt Đới: Thời Gian Đẹp Nhất Trong Năm",
      excerpt:
        "Khám phá những vịnh biển hoang sơ, làn nước trong vắt như pha lê và ẩm thực hải sản địa phương.",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      date: "12 Tháng Mười Hai, 2026",
      title: "Trải Nghiệm Khám Phá Thảo Nguyên Xanh: Hành Trình Về Với Thiên Nhiên",
      excerpt:
        "Chiêm ngưỡng khung cảnh thiên nhiên hùng vĩ và tận hưởng bầu không khí yên bình trên thảo nguyên.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
    }
  ],
  bottomCtaBanner: {
    title: "Bạn đã sẵn sàng",
    subtitle: "Chỉ mất vài phút để đăng ký tài khoản du lịch MIỄN PHÍ.",
    buttonText: "ĐĂNG KÝ TÀI KHOẢN"
  },
  instagramGallery: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=300&q=80"
  ]
};

export default leadGeneration8DefaultData;
