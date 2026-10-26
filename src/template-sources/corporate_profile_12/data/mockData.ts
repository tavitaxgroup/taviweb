import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface AdventureActivityTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  satisfiedRate: number;
  positiveRate: number;
}

export interface TourSpotCard {
  id: string;
  title: string;
  location: string;
  price: string;
  oldPrice?: string;
  badge: string;
  discountBadge?: string;
  rating: number;
  image: string;
}

export interface DestinationCard {
  id: string;
  country: string;
  tourCount: string;
  image: string;
  wide?: boolean;
}

export interface CorporateProfile12Data extends ClonedTemplateBaseData {
  popularActivities: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  aboutSection: {
    yearsNumber: string;
    yearsLabel: string;
    mainImage: string;
    insetImage: string;
    features: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  adventureTabs: AdventureActivityTab[];
  tourSpots: TourSpotCard[];
  serviceHighlights: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  videoBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
    backgroundImage: string;
    categories: string[];
  };
  destinations: DestinationCard[];
  galleryStrip: string[];
}

export const corporateProfile12DefaultData: CorporateProfile12Data = {
  business: {
    name: "Mona Tour",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "booking@monatour.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 21:00",
    rating: 4.9,
    reviewCount: 3500,
    aboutTitle: "Du lịch tuyệt vời",
    aboutText: [
      "Tập đoàn Lữ hành Quốc tế & Tổ chức Sự kiện Doanh nghiệp MICE hàng đầu, chuyên thiết kế các hành trình khám phá thiên nhiên hùng vĩ, nghỉ dưỡng sinh thái và team-building gắn kết đội ngũ."
    ]
  },
  hero: {
    eyebrow: "Du lịch & Lữ hành",
    title: "Khám phá vùng núi hùng vĩ",
    subtitle:
      "Tận hưởng những chuyến phiêu lưu đầy hấp dẫn và khám phá cảnh quan thiên nhiên tuyệt đẹp của các tour du lịch núi.",
    ctaText: "Bắt đầu ngay",
    ctaLink: "#cac-dia-diem",
    backgroundImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85"
  },
  popularActivities: [
    {
      id: "pa-1",
      title: "Dịch vụ cắm trại lều cao cấp",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pa-2",
      title: "Hành trình xe dã ngoại & RV",
      image:
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pa-3",
      title: "Phiêu lưu mạo hiểm & leo núi",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pa-4",
      title: "Cắm trại đôi & biệt thự gỗ",
      image:
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  aboutSection: {
    yearsNumber: "18",
    yearsLabel: "Năm kinh nghiệm",
    mainImage:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    insetImage:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=500&q=80",
    features: [
      {
        id: "af-1",
        title: "An toàn là ưu tiên",
        description:
          "Chúng tôi hiểu rằng khi bạn tham gia một hoạt động hay trải nghiệm, an toàn là yếu tố quan trọng nhất."
      },
      {
        id: "af-2",
        title: "Giá ưu đãi và hấp dẫn",
        description:
          "Chúng tôi hiểu rằng giá cả là một yếu tố quan trọng khi bạn lựa chọn một hoạt động hay trải nghiệm."
      },
      {
        id: "af-3",
        title: "Hướng dẫn viên đáng tin cậy",
        description:
          "Đội ngũ người hướng dẫn của chúng tôi được chọn lọc kỹ càng và có kinh nghiệm trong lĩnh vực."
      }
    ]
  },
  adventureTabs: [
    {
      id: "adv-1",
      label: "Cắm trại",
      title: "Cuộc phiêu lưu thực sự và tận hưởng những chuyến đi mơ ước của bạn.",
      description:
        "Chúng tôi đặt trái tim của mình vào việc tạo ra những trải nghiệm phiêu lưu độc đáo, nơi bạn có thể tận hưởng sự kết nối thân thiết với tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=700&q=80",
      satisfiedRate: 95,
      positiveRate: 90
    },
    {
      id: "adv-2",
      label: "Du lịch mạo hiểm",
      title: "Chinh phục những cung đường kỳ vĩ và thử thách giới hạn bản thân.",
      description:
        "Hành trình được thiết kế bài bản cùng chuyên gia an toàn quốc tế, trang thiết bị bảo hộ tiêu chuẩn châu Âu.",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=700&q=80",
      satisfiedRate: 98,
      positiveRate: 94
    },
    {
      id: "adv-3",
      label: "Đạp xe leo núi",
      title: "Băng qua rừng thông nguyên sinh và những sườn đồi ngập tràn nắng sớm.",
      description:
        "Cung cấp dòng xe địa hình chuyên nghiệp cùng lộ trình đa cấp độ phù hợp cho cả gia đình và đoàn doanh nghiệp.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=700&q=80",
      satisfiedRate: 96,
      positiveRate: 92
    },
    {
      id: "adv-4",
      label: "Khám phá thế giới",
      title: "Mở rộng tầm nhìn qua những nền văn hóa bản địa đặc sắc khắp năm châu.",
      description:
        "Dịch vụ trọn gói visa, vé máy bay hạng thương gia và khách sạn 5 sao tại hơn 40 quốc gia.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
      satisfiedRate: 97,
      positiveRate: 95
    },
    {
      id: "adv-5",
      label: "Câu cá & bơi lội",
      title: "Thư giãn giữa làn nước ngọc bích tại những vịnh đảo hoang sơ nhất.",
      description:
        "Trải nghiệm du thuyền riêng, lặn ngắm san hô và thưởng thức hải sản tươi ngon ngay trên boong tàu.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
      satisfiedRate: 94,
      positiveRate: 91
    },
    {
      id: "adv-6",
      label: "Đi bộ leo núi",
      title: "Hành trình trekking săn mây trên những đỉnh núi cao nhất Đông Dương.",
      description:
        "Đội ngũ porter và hướng dẫn viên bản địa giàu kinh nghiệm đồng hành chăm sóc suốt chuyến đi.",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80",
      satisfiedRate: 99,
      positiveRate: 96
    }
  ],
  tourSpots: [
    {
      id: "ts-1",
      title: "Tour Chèo Kayak Khám Phá Đảo Ngọc",
      location: "Vịnh Lan Hạ, Hải Phòng",
      price: "6,890,000₫",
      badge: "ĐẶC SẮC",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ts-2",
      title: "Nghỉ Dưỡng Biệt Thự Nổi Trên Vịnh",
      location: "Vương Quốc Anh",
      oldPrice: "450,000₫",
      price: "390,000₫",
      badge: "ĐẶC SẮC",
      discountBadge: "10% OFF",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ts-3",
      title: "Khám Phá Bán Đảo Yucatán & Biển Xanh",
      location: "Vịnh Caribe Quốc Tế",
      price: "1,290,000₫",
      badge: "ĐẶC SẮC",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ts-4",
      title: "Khu Phố Nhà Thuyền Cổ Điển",
      location: "Venice, Ý",
      price: "1,190,000₫",
      badge: "ĐẶC SẮC",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
    }
  ],
  serviceHighlights: [
    {
      id: "sh-1",
      title: "Chuyến đi tùy chỉnh",
      description:
        "Có thể chọn địa điểm, thời gian và hoạt động mà bạn muốn tham gia, và chúng tôi sẽ tạo ra một chuyến đi độc đáo dành riêng cho bạn."
    },
    {
      id: "sh-2",
      title: "Hướng dẫn viên chuyên nghiệp",
      description:
        "Đội ngũ hướng dẫn viên của chúng tôi là những chuyên gia có kiến thức sâu rộng về địa điểm du lịch và văn hóa địa phương."
    },
    {
      id: "sh-3",
      title: "Chất lượng dịch vụ cao",
      description:
        "Chúng tôi luôn đảm bảo rằng mọi khía cạnh của chuyến đi đều được chăm sóc tận tâm để đáp ứng sự mong đợi của bạn."
    },
    {
      id: "sh-4",
      title: "Địa điểm đa dạng",
      description:
        "Chúng tôi cung cấp một loạt các địa điểm du lịch hấp dẫn trên khắp thế giới phù hợp với sở thích và yêu cầu của mình."
    },
    {
      id: "sh-5",
      title: "Trải nghiệm độc đáo",
      description:
        "Chúng tôi không chỉ đưa bạn đến những địa điểm du lịch phổ biến mà còn mang đến cho bạn những trải nghiệm độc đáo và khác biệt."
    },
    {
      id: "sh-6",
      title: "Hỗ trợ dịch vụ 24/7",
      description:
        "Đội ngũ chăm sóc khách hàng của chúng tôi sẽ giải đáp mọi thắc mắc và xử lý mọi vấn đề mà bạn có thể gặp phải."
    }
  ],
  videoBanner: {
    eyebrow: "BẠN ĐÃ SẴN SÀNG ĐỂ ĐI DU LỊCH CHƯA ?",
    title: "Sẵn sàng du lịch với cuộc phiêu lưu thực sự",
    ctaText: "Đặt tour ngay",
    backgroundImage:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=85",
    categories: [
      "Chuyến tham quan động vật hoang dã",
      "Trải nghiệm nhảy dù",
      "Chuyến tham quan mạo hiểm",
      "Dù lượn thú vị"
    ]
  },
  destinations: [
    {
      id: "dst-1",
      country: "Thụy Sĩ",
      tourCount: "3 TOURS",
      image:
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dst-2",
      country: "Vương Quốc Anh",
      tourCount: "3 TOURS",
      wide: true,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "dst-3",
      country: "Pháp",
      tourCount: "3 TOURS",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dst-4",
      country: "Thái Lan",
      tourCount: "1 TOUR",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dst-5",
      country: "Singapore",
      tourCount: "2 TOURS",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dst-6",
      country: "Ý",
      tourCount: "3 TOURS",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
    }
  ],
  stats: [
    { id: "st-1", number: "3500+", title: "Du khách thân thiết" },
    { id: "st-2", number: "1650+", title: "Tour hoạt động" },
    { id: "st-3", number: "99.5%", title: "Đánh giá tích cực" },
    { id: "st-4", number: "62+", title: "Chuyên viên kinh nghiệm" }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Nguyễn Minh Châu",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Chúng tôi đã được trải qua những điểm đến đẹp và độc đáo, với các hướng dẫn viên rất chuyên nghiệp và tận tâm. Cảm ơn vì đã mang đến cho chúng tôi những kỷ niệm đáng nhớ!”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Những điểm đến khởi đầu hành trình du lịch khám phá thiên nhiên",
      date: "19 Th10",
      category: "Du lịch thành phố",
      excerpt:
        "Cẩm nang chuẩn bị hành trang trekking, cắm trại săn mây và khám phá văn hóa bản địa...",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Hành trình gắn kết tuyệt vời nhất khi đồng hành cùng những người bạn",
      date: "19 Th10",
      category: "Phong cách sống",
      excerpt:
        "Tổ chức tour team-building và MICE doanh nghiệp kết hợp nghỉ dưỡng sinh thái cao cấp...",
      image:
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Chiêm ngưỡng những kỳ quan thiên nhiên hùng vĩ đẹp nhất thế giới",
      date: "19 Th10",
      category: "Phong cách sống",
      excerpt:
        "Top 10 cung đường du lịch sinh thái và vịnh biển hoang sơ đáng trải nghiệm nhất năm nay...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  galleryStrip: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=500&q=80"
  ]
};

export const defaultData = corporateProfile12DefaultData;
export const mockData = corporateProfile12DefaultData;
export default corporateProfile12DefaultData;
