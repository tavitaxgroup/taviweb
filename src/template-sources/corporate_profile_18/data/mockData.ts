import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Corp18TourCard {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  oldPrice?: string;
  popularBadge?: boolean;
  countryTab: string;
  image: string;
  itinerary: string;
}

export interface Corp18ReviewCard {
  id: string;
  badgeTitle: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
}

export interface Corp18Data extends ClonedTemplateBaseData {
  heroFramedImages: {
    leftImage: string;
    rightImage: string;
  };
  popularFilterTabs: string[];
  popularTours: Corp18TourCard[];
  tealFeatureStrip: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  experienceSection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    yearsCount: string;
    yearsLabel: string;
    image: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  vacationFilterTabs: string[];
  vacationTours: Corp18TourCard[];
  guaranteeSection: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
      colorClass: string;
    }>;
  };
  videoBanner: {
    eyebrow: string;
    title: string;
    backgroundImage: string;
  };
  specialOfferTours: Corp18TourCard[];
  customerReviews: Corp18ReviewCard[];
  footerGallery: string[];
}

export const corporateProfile18DefaultData: Corp18Data = {
  business: {
    name: "THE MONA",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global", "travel@themona.global"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.9,
    reviewCount: 1680,
    aboutTitle: "TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO VÀ KỶ NIỆM KHÓ QUÊN",
    aboutText: [
      "Chúng tôi tự hào giới thiệu với bạn một trải nghiệm du lịch tuyệt vời, nơi bạn có thể khám phá những điểm đến độc đáo, trải nghiệm văn hóa đa dạng và tận hưởng cảnh quan thiên nhiên tuyệt đẹp.",
      "Với sự tận tâm và chuyên nghiệp, chúng tôi cam kết mang đến cho bạn những kỷ niệm vô giá và độc đáo trên mỗi hành trình lữ hành quốc tế và MICE doanh nghiệp."
    ],
    highlights: [
      "Đa dạng điểm đến trên 5 châu lục",
      "Giá cả ưu đãi trực tiếp từ hãng hàng không & hệ thống resort 5 sao",
      "Dịch vụ đáng tin cậy và hỗ trợ visa – lịch trình 24/7"
    ]
  },
  hero: {
    eyebrow: "Khám Phá Thế Giới",
    subtitle: "Tận hưởng những kỳ nghỉ đáng nhớ.",
    title: "Trải nghiệm du lịch tuyệt vời",
    description:
      "Tận hưởng những kỳ nghỉ đáng nhớ cùng các chương trình lữ hành quốc tế, nghỉ dưỡng cao cấp và du lịch khen thưởng MICE doanh nghiệp.",
    ctaText: "Khám phá thêm",
    ctaLink: "#popular-tours",
    secondaryCtaText: "Liên hệ",
    secondaryCtaLink: "#newsletter-section",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85"
  },
  heroFramedImages: {
    leftImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
  },
  popularFilterTabs: ["Pháp", "Ai Cập", "Đức", "Canada"],
  popularTours: [
    {
      id: "pt-1",
      title: "Khám Phá Thủ Đô Bắc Âu Copenhagen – 4 Giờ",
      location: "Copenhagen, Đan Mạch",
      duration: "4 giờ",
      price: "1,500,000₫",
      popularBadge: true,
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=600&q=80",
      itinerary: "Tham quan bến cảng Nyhavn cổ kính, Cung điện Amalienborg và tượng Nàng Tiên Cá."
    },
    {
      id: "pt-2",
      title: "Hành Trình Bắc Âu Copenhagen – Helsinki 7 Ngày",
      location: "Copenhagen, Đan Mạch",
      duration: "7 ngày",
      price: "3,390,000₫",
      oldPrice: "3,900,000₫",
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80",
      itinerary: "Du thuyền xuyên biển Baltic kết hợp tham quan kiến trúc Bắc Âu đặc sắc."
    },
    {
      id: "pt-3",
      title: "Đạp Xe Khám Phá Amsterdam & Hồ IJssel – 5 Ngày",
      location: "Amsterdam, Hà Lan",
      duration: "5 ngày",
      price: "2,350,000₫",
      oldPrice: "2,500,000₫",
      countryTab: "Đức",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      itinerary: "Trải nghiệm kênh đào Amsterdam, làng cối xay gió Zaanse Schans và hồ IJssel."
    },
    {
      id: "pt-4",
      title: "Tham Quan Cảng Lịch Sử Hamburg & Wunderland",
      location: "Hamburg, Đức",
      duration: "3 ngày",
      price: "2,220,000₫",
      popularBadge: true,
      countryTab: "Đức",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
      itinerary: "Khám phá khu kho cảng Speicherstadt được UNESCO công nhận di sản thế giới."
    },
    {
      id: "pt-5",
      title: "Du Thuyền Vịnh Hạ Long – 3 Ngày 2 Đêm 5 Sao",
      location: "Vịnh Hạ Long, Việt Nam",
      duration: "3 ngày",
      price: "1,100,000₫",
      oldPrice: "1,220,000₫",
      popularBadge: true,
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
      itinerary: "Nghỉ dưỡng trên du thuyền 5 sao, chèo kayak hang Sửng Sốt và đảo Ti Tốp."
    },
    {
      id: "pt-6",
      title: "Khám Phá Phim Trường Lịch Sử Hollywood – 5 Ngày",
      location: "Los Angeles, Hoa Kỳ",
      duration: "5 ngày",
      price: "1,100,000₫",
      oldPrice: "1,200,000₫",
      countryTab: "Canada",
      image:
        "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=600&q=80",
      itinerary: "Tham quan Đại lộ Danh vọng Hollywood, Universal Studios và đồi Beverly Hills."
    },
    {
      id: "pt-7",
      title: "Khám Phá Vùng Đất Bắc Âu Scandinavia – 3 Ngày",
      location: "Đan Mạch – Thụy Điển",
      duration: "3 ngày",
      price: "1,500,000₫",
      countryTab: "Ai Cập",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      itinerary: "Hành trình ngắm vịnh hẹp Fjord hùng vĩ và kiến trúc hoàng gia Bắc Âu."
    },
    {
      id: "pt-8",
      title: "Nghỉ Dưỡng Thiên Đường Đảo Virgin – 4 Ngày 3 Đêm",
      location: "Quần đảo Virgin, Hoa Kỳ",
      duration: "4 ngày",
      price: "1,090,000₫",
      oldPrice: "1,300,000₫",
      countryTab: "Canada",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      itinerary: "Tận hưởng bãi biển cát trắng mịn, lặn ngắm san hô và nghỉ dưỡng biệt thự biển."
    }
  ],
  tealFeatureStrip: [
    {
      id: "tf-1",
      title: "Đa dạng điểm đến",
      description: "Khám phá hàng trăm điểm đến hấp dẫn trên toàn thế giới."
    },
    {
      id: "tf-2",
      title: "Giá cả ưu đãi",
      description: "Tiết kiệm tiền với giá cả cạnh tranh và ưu đãi đặc biệt."
    },
    {
      id: "tf-3",
      title: "Dịch vụ đáng tin",
      description: "Trải nghiệm dịch vụ chuyên nghiệp và hỗ trợ khách hàng 24/7."
    }
  ],
  experienceSection: {
    eyebrow: "Khám Phá Thế Giới",
    title: "TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO VÀ KỶ NIỆM KHÓ QUÊN",
    paragraphs: [
      "Chúng tôi tự hào giới thiệu với bạn một trải nghiệm du lịch tuyệt vời, nơi bạn có thể khám phá những điểm đến độc đáo, trải nghiệm văn hóa đa dạng và tận hưởng cảnh quan thiên nhiên tuyệt đẹp.",
      "Với sự tận tâm và chuyên nghiệp, chúng tôi cam kết mang đến cho bạn những kỷ niệm vô giá và độc đáo trên mỗi hành trình."
    ],
    yearsCount: "10",
    yearsLabel: "Năm kinh nghiệm",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    features: [
      {
        title: "Hướng dẫn chuyên nghiệp",
        description:
          "Đội ngũ hướng dẫn viên quốc tế am hiểu lịch sử, văn hóa và tận tâm phục vụ."
      },
      {
        title: "Dịch vụ chất lượng",
        description:
          "Hệ thống khách sạn 4-5 sao, phương tiện vận chuyển đời mới và bảo hiểm toàn cầu."
      }
    ]
  },
  vacationFilterTabs: ["Hoa Kỳ", "Đức", "Úc", "Pháp"],
  vacationTours: [
    {
      id: "vt-1",
      title: "Đạp Xe Khám Phá Amsterdam & Hồ IJssel – 5 Ngày",
      location: "Amsterdam, Hà Lan",
      duration: "5 ngày",
      price: "2,350,000₫",
      oldPrice: "2,500,000₫",
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      itinerary: "Khám phá vẻ đẹp yên bình của vùng ngoại ô Hà Lan và hệ thống kênh đào."
    },
    {
      id: "vt-2",
      title: "Tham Quan Cảng Lịch Sử Hamburg & Wunderland",
      location: "Hamburg, Đức",
      duration: "3 ngày",
      price: "2,220,000₫",
      popularBadge: true,
      countryTab: "Đức",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
      itinerary: "Trải nghiệm thành phố cảng sôi động bậc nhất nước Đức."
    },
    {
      id: "vt-3",
      title: "Tuyệt Tác Kiến Trúc Saint Petersburg & Moscow",
      location: "Moscow, Nga",
      duration: "5 ngày",
      price: "2,800,000₫",
      oldPrice: "3,500,000₫",
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=600&q=80",
      itinerary: "Chiêm ngưỡng Quảng trường Đỏ, Điện Kremlin và Cung điện Mùa Đông."
    },
    {
      id: "vt-4",
      title: "Hành Trình Khám Phá Đỉnh Núi Caucasus Hùng Vĩ",
      location: "Dãy Caucasus, Georgia",
      duration: "4 ngày",
      price: "695,000₫",
      oldPrice: "1,000,000₫",
      popularBadge: true,
      countryTab: "Úc",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      itinerary: "Chinh phục cung đường núi tuyết hùng vĩ và thưởng thức ẩm thực bản địa."
    },
    {
      id: "vt-5",
      title: "Trải Nghiệm Câu Cá Biển Sâu Đảo Barbados – 1 Ngày",
      location: "Đảo Barbados, Caribbean",
      duration: "1 ngày",
      price: "1,400,000₫",
      countryTab: "Hoa Kỳ",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      itinerary: "Du thuyền riêng ra khơi câu cá đại dương và tắm biển làn nước ngọc bích."
    },
    {
      id: "vt-6",
      title: "Tour Văn Hóa Cố Đô Kyoto – 2 Ngày 1 Đêm",
      location: "Kyoto, Nhật Bản",
      duration: "2 ngày",
      price: "2,590,000₫",
      oldPrice: "2,900,000₫",
      popularBadge: true,
      countryTab: "Úc",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      itinerary: "Tham quan chùa Thanh Thủy, rừng trúc Arashiyama và phố cổ Gion."
    },
    {
      id: "vt-7",
      title: "Khám Phá Vườn Quốc Gia Đại Sa Mạc Hoa Kỳ – 4 Ngày",
      location: "Nevada, Hoa Kỳ",
      duration: "4 ngày",
      price: "790,000₫",
      oldPrice: "900,000₫",
      countryTab: "Hoa Kỳ",
      image:
        "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=600&q=80",
      itinerary: "Chiêm ngưỡng hẻm núi Grand Canyon và bầu trời sao rực rỡ trên sa mạc."
    },
    {
      id: "vt-8",
      title: "Du Thuyền Vịnh Hạ Long – 3 Ngày 2 Đêm Nghỉ Dưỡng",
      location: "Vịnh Hạ Long, Việt Nam",
      duration: "3 ngày",
      price: "1,100,000₫",
      oldPrice: "1,220,000₫",
      popularBadge: true,
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
      itinerary: "Thưởng thức hải sản thượng hạng và ngắm hoàng hôn trên kỳ quan thiên nhiên."
    }
  ],
  guaranteeSection: {
    eyebrow: "Cam Kết Của Chúng Tôi",
    title: "ĐẢM BẢO TRẢI NGHIỆM DU LỊCH TỐT NHẤT CHO BẠN",
    description:
      "Chúng tôi cam kết cung cấp cho bạn trải nghiệm du lịch tuyệt vời và đáng nhớ, từ việc đặt vé đến khám phá điểm đến. Với những cam kết của chúng tôi, bạn có thể yên tâm rằng chúng tôi sẽ luôn đồng hành và đảm bảo sự hài lòng của bạn.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    cards: [
      {
        id: "gc-1",
        title: "Giá tốt nhất",
        description:
          "Chúng tôi cam kết mang đến cho bạn giá cả cạnh tranh và ưu đãi đặc biệt.",
        colorClass: "bg-teal-100 text-[#009688]"
      },
      {
        id: "gc-2",
        title: "Đa dạng điểm đến",
        description:
          "Chúng tôi cung cấp một loạt các điểm đến hấp dẫn trên toàn thế giới.",
        colorClass: "bg-rose-100 text-rose-500"
      },
      {
        id: "gc-3",
        title: "Dịch vụ chất lượng",
        description:
          "Chúng tôi cam kết hợp tác với các đối tác uy tín để đảm bảo chất lượng.",
        colorClass: "bg-amber-100 text-amber-500"
      },
      {
        id: "gc-4",
        title: "Bảo mật thông tin",
        description:
          "Mọi giao dịch và thông tin cá nhân đều được mã hóa và bảo mật.",
        colorClass: "bg-purple-100 text-purple-500"
      }
    ]
  },
  videoBanner: {
    eyebrow: "Video",
    title: "TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
  },
  specialOfferTours: [
    {
      id: "so-1",
      title: "Khám Phá Thủ Đô Bắc Âu Copenhagen – 4 Giờ",
      location: "Copenhagen, Đan Mạch",
      duration: "4 giờ",
      price: "1,500,000₫",
      popularBadge: true,
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=600&q=80",
      itinerary: "Chuyến tham quan ngắn ngày khám phá trọn vẹn trung tâm Copenhagen."
    },
    {
      id: "so-2",
      title: "Hành Trình Bắc Âu Copenhagen – Helsinki 7 Ngày",
      location: "Copenhagen, Đan Mạch",
      duration: "7 ngày",
      price: "3,390,000₫",
      oldPrice: "3,900,000₫",
      countryTab: "Pháp",
      image:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80",
      itinerary: "Ưu đãi đặc biệt mùa lễ hội cho hành trình liên tuyến Đan Mạch – Phần Lan."
    },
    {
      id: "so-3",
      title: "Đạp Xe Khám Phá Amsterdam & Hồ IJssel – 5 Ngày",
      location: "Amsterdam, Hà Lan",
      duration: "5 ngày",
      price: "2,350,000₫",
      oldPrice: "2,500,000₫",
      countryTab: "Đức",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
      itinerary: "Tour sinh thái khám phá xứ sở hoa Tulip và cối xay gió."
    },
    {
      id: "so-4",
      title: "Tham Quan Cảng Lịch Sử Hamburg & Wunderland",
      location: "Hamburg, Đức",
      duration: "3 ngày",
      price: "2,220,000₫",
      popularBadge: true,
      countryTab: "Đức",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
      itinerary: "Khám phá mô hình đường sắt thu nhỏ lớn nhất thế giới tại Hamburg."
    }
  ],
  customerReviews: [
    {
      id: "cr-1",
      badgeTitle: "Tuyệt vời",
      author: "Bạch Ngân",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Trải nghiệm tuyệt vời! Tôi rất hài lòng với dịch vụ chuyên nghiệp và chu đáo của đội ngũ nhân viên. Họ đã tận tâm tư vấn và đáp ứng đúng mong đợi của tôi. Chắc chắn sẽ quay lại và giới thiệu cho bạn bè của tôi."
    },
    {
      id: "cr-2",
      badgeTitle: "Rất tốt",
      author: "Phúc Phúc",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80",
      content:
        "Trải nghiệm tuyệt vời! Tôi rất hài lòng với dịch vụ chuyên nghiệp và chu đáo của đội ngũ nhân viên. Họ đã tận tâm tư vấn và đáp ứng đúng mong đợi của tôi. Chắc chắn sẽ quay lại và giới thiệu cho bạn bè của tôi."
    },
    {
      id: "cr-3",
      badgeTitle: "Tuyệt vời",
      author: "Lê Hào",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Trải nghiệm tuyệt vời! Tôi rất hài lòng với dịch vụ chuyên nghiệp và chu đáo của đội ngũ nhân viên. Họ đã tận tâm tư vấn và đáp ứng đúng mong đợi của tôi. Chắc chắn sẽ quay lại và giới thiệu cho bạn bè của tôi."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Kinh Nghiệm Chuẩn Bị Hồ Sơ & Bản Đồ Du Lịch Châu Âu Tự Túc",
      date: "09/07/2025",
      category: "monamedia",
      excerpt: "Hướng dẫn chi tiết thủ tục xin visa Schengen và lịch trình di chuyển thuận tiện nhất.",
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Bí Quyết Sắp Xếp Hành Lý Gọn Nhẹ Trước Chuyến Bay Dài",
      date: "09/07/2025",
      category: "monamedia",
      excerpt: "Danh sách những vật dụng thiết yếu và giấy tờ hộ chiếu cần lưu ý khi xuất cảnh.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Khám Phá Những Điểm Ngắm Hoàng Hôn Đẹp Nhất Thế Giới",
      date: "09/07/2025",
      category: "monamedia",
      excerpt: "Tổng hợp các tọa độ săn hoàng hôn lãng mạn dành cho kỳ nghỉ dưỡng cặp đôi.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Cẩm Nang Nghỉ Dưỡng Sinh Thái Hòa Mình Cùng Thiên Nhiên",
      date: "09/07/2025",
      category: "monamedia",
      excerpt: "Trải nghiệm kỳ nghỉ xanh yên bình tại những vịnh biển hoang sơ tuyệt đẹp.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=200&q=80"
  ]
};
