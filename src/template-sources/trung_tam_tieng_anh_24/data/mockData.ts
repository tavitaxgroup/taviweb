import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TravelWpTourCard {
  id: string;
  region: string;
  title: string;
  price: string;
  duration: string;
  image: string;
}

export interface TrungTamTiengAnh24Data extends ClonedTemplateBaseData {
  paradiseCircles: Array<{
    id: string;
    country: string;
    subtitle: string;
    image: string;
  }>;
  internationalTours: TravelWpTourCard[];
  whyChooseItems: Array<{
    id: string;
    title: string;
    description: string;
    badgeType: "hotel" | "support" | "price";
  }>;
  achievementStats: Array<{
    id: string;
    value: string;
    label: string;
    icon: "globe" | "users" | "map" | "bus";
  }>;
  domesticTours: TravelWpTourCard[];
  flashSale: {
    headline: string;
    highlightBadge: string;
    hours: number;
    minutes: number;
    seconds: number;
    backgroundImage: string;
  };
  testimonialCard: {
    name: string;
    trip: string;
    quote: string;
    avatar: string;
  };
  guideArticles: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
}

export const trungTamTiengAnh24DefaultData: TrungTamTiengAnh24Data = {
  business: {
    name: "Chương Trình Giao Lưu Văn Hóa & Du Học Quốc Tế Mona TravelWP",
    phone: ["0126 922 0162", "076 922 0162"],
    email: ["demonhunter@gmail.com", "international@monatravel.edu.vn"],
    address: "319 - C16 Lý Thường Kiệt, Q.11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 5.0,
    reviewCount: 1240,
    aboutTitle: "LÝ DO CHỌN MONA TRAVEL & GIAO LƯU QUỐC TẾ",
    aboutText: [
      "Mona Travel đồng hành cùng học viên và gia đình trên mọi nẻo đường khám phá thế giới, kết hợp các chương trình giao lưu văn hóa, trại hè ngôn ngữ tại Mỹ, Canada, Anh Quốc và hành trình trải nghiệm nội địa."
    ],
    highlights: [
      "Hơn 20.549+ hành trình du học trải nghiệm và tour quốc tế hoàn thành",
      "60.419+ học viên và khách hàng hài lòng trên toàn quốc",
      "Hỗ trợ thủ tục visa, vé máy bay và mentor song ngữ 24/7"
    ]
  },
  hero: {
    eyebrow: "MONA TRAVEL – ĐI VÀ TRẢI NGHIỆM MỌI THỨ",
    title: "ĐỒNG HÀNH CÙNG BẠN MỌI NẺO ĐƯỜNG",
    subtitle: "Hành trình Giao lưu Văn hóa, Trại hè Quốc tế & Khám phá Năm Châu",
    description:
      "Mở rộng tầm nhìn toàn cầu với những chuyến đi kết hợp thực hành ngoại ngữ và khám phá văn hóa bản địa đặc sắc.",
    ctaText: "KHÁM PHÁ LỘ TRÌNH",
    ctaLink: "#international-tours",
    backgroundImage:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1920&q=85"
  },
  paradiseCircles: [
    {
      id: "pc-1",
      country: "USA",
      subtitle: "Giao lưu Văn hóa Bờ Tây & Bờ Đông",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pc-2",
      country: "CUBA",
      subtitle: "Khám phá Di sản Kiến trúc La Habana",
      image:
        "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pc-3",
      country: "PHILIPPINES",
      subtitle: "Trại hè Tiếng Anh Chuyên sâu Cebu",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pc-4",
      country: "CANADA",
      subtitle: "Hành trình Du học Trải nghiệm Vancouver",
      image:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pc-5",
      country: "BRAZIL",
      subtitle: "Giao lưu Văn hóa Nam Mỹ Sôi động",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=500&q=80"
    }
  ],
  internationalTours: [
    {
      id: "int-1",
      region: "DU LỊCH & TRẠI HÈ CANADA",
      title: "DU LỊCH CANADA GIÁ TỐT KHỞI HÀNH TỪ SÀI GÒN",
      price: "97,900,000 ₫",
      duration: "10 ngày 9 đêm",
      image:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "int-2",
      region: "GIAO LƯU VĂN HÓA CHÂU MỸ",
      title: "DU LỊCH BỜ TÂY HOA KỲ 7 NGÀY LOS ANGELES",
      price: "34,900,000 ₫",
      duration: "7 ngày 6 đêm",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "int-3",
      region: "TRẠI HÈ & DU LỊCH ANH QUỐC",
      title: "DU LỊCH ANH – SCOTLAND 8 NGÀY 7 ĐÊM GIÁ TỐT",
      price: "59,900,000 ₫",
      duration: "8 ngày 7 đêm",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80"
    }
  ],
  whyChooseItems: [
    {
      id: "wc-1",
      title: "Khách sạn & Ký túc xá tốt nhất",
      description:
        "Để mọi người mọi nhà đều có thể đi du lịch và học tập trải nghiệm với chất lượng lưu trú an toàn, tiện nghi nhất.",
      badgeType: "hotel"
    },
    {
      id: "wc-2",
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ điều hành tour và cố vấn học viên túc trực 24/7 suốt hành trình trong và ngoài nước.",
      badgeType: "support"
    },
    {
      id: "wc-3",
      title: "Giá luôn tốt nhất",
      description:
        "Để mọi người mọi nhà đều có thể tham gia chương trình giao lưu quốc tế với chi phí hợp lý nhất.",
      badgeType: "price"
    }
  ],
  achievementStats: [
    {
      id: "st-1",
      value: "20,549+",
      label: "Tour hoàn thành",
      icon: "globe"
    },
    {
      id: "st-2",
      value: "60,419+",
      label: "Khách hàng",
      icon: "users"
    },
    {
      id: "st-3",
      value: "5,000+",
      label: "Điểm tham quan",
      icon: "map"
    },
    {
      id: "st-4",
      value: "856+",
      label: "Phương tiện",
      icon: "bus"
    }
  ],
  domesticTours: [
    {
      id: "dom-1",
      region: "DU LỊCH MIỀN BẮC",
      title: "DU LỊCH MIỀN BẮC – SAPA – FANSIPAN 5 NGÀY",
      price: "10,999,000 ₫",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dom-2",
      region: "DU LỊCH CÔN ĐẢO",
      title: "DU LỊCH CÔN ĐẢO 2 NGÀY 1 ĐÊM BAY TỪ SÀI GÒN",
      price: "5,299,000 ₫",
      duration: "2 ngày 1 đêm",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dom-3",
      region: "DU LỊCH ĐÀ NẴNG",
      title: "TOUR MIỀN TRUNG, TẶNG VÉ CÁP TREO, BUFFET",
      price: "4,699,000 ₫",
      duration: "4 ngày 3 đêm",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80"
    }
  ],
  flashSale: {
    headline: "Ưu đãi đặc biệt cho 50 khách hàng đầu tiên đặt Tour nước ngoài",
    highlightBadge: "Giảm ngay 40%",
    hours: 14,
    minutes: 38,
    seconds: 52,
    backgroundImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80"
  },
  testimonialCard: {
    name: "Kim Chi",
    trip: "Tour & Trại hè Singapore",
    quote:
      "Tôi đi Singapore vào đợt vừa rồi và cảm thấy các dịch vụ khá ổn từ khách sạn, nhà hàng, phương tiện di chuyển đến hành trình tham quan học tập. Mong rằng công ty sẽ phát huy tốt những điều này và tốt hơn.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  guideArticles: [
    {
      id: "gd-1",
      title: "TẤT TẦN TẬT NHỮNG KINH NGHIỆM BẠN CẦN BIẾT TRƯỚC KHI DU LỊCH BÌNH BA",
      date: "7 Tháng Mười Hai, 2025",
      excerpt:
        "Giới thiệu sơ lược về đảo Bình Ba: Bình Ba là một đảo nhỏ diện tích hơn 3km² tuyệt đẹp cho các hoạt động ngoại khóa...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "gd-2",
      title: "VÌ SAO BẠN PHẢI ĐẾN ĐÀI LOAN MỘT LẦN TRONG ĐỜI?",
      date: "7 Tháng Mười Hai, 2025",
      excerpt:
        "Khung cảnh tuyệt đẹp: Đài Loan được bao phủ bởi màu xanh của cây cối, những ngôi trường đại học hiện đại và ẩm thực chợ đêm...",
      image:
        "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
