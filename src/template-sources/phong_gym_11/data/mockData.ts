import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Gym11CollectionCard {
  id: string;
  title: string;
  subtitle: string;
  brandTag: string;
  ctaText?: string;
  image: string;
}

export interface Gym11ProductItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  category: string;
  image: string;
}

export interface Gym11BrandItem {
  id: string;
  name: string;
  subText?: string;
  accentColor: string;
}

export interface Gym11CategorySpotlight {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Gym11Data extends ClonedTemplateBaseData {
  topPolicies: string[];
  saleDateRange: string;
  saleDiscountPercent: string;
  newCollections: Gym11CollectionCard[];
  bestSellers: Gym11ProductItem[];
  brands: Gym11BrandItem[];
  featuredCategories: Gym11CategorySpotlight[];
}

export const phongGym11DefaultData: Gym11Data = {
  business: {
    name: "Hoàng Phúc Sport",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["cskh@hoangphucsport.vn", "info@hoangphucsport.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:30 - 22:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1850,
    experienceYears: "15 Năm",
    aboutTitle: "Hệ Thống CLB Thể Thao & Trang Phục Fitness Chính Hãng",
    aboutText: [
      "Hoàng Phúc Sport là hệ thống phân phối trang phục tập luyện, giày thể thao và phụ kiện phòng Gym chính hãng từ các thương hiệu hàng đầu thế giới như Kappa, Ecko Unltd, Superga và Dr. Martens.",
      "Cam kết 100% sản phẩm chính hãng, đổi trả dễ dàng trong 7 ngày và giao hàng nhanh toàn quốc."
    ],
    highlights: [
      "7 NGÀY ĐỔI TRẢ MIỄN PHÍ",
      "GIAO HÀNG TOÀN QUỐC NHANH CHÓNG",
      "THANH TOÁN KHI NHẬN HÀNG (COD)",
      "CAM KẾT 100% CHÍNH HÃNG"
    ]
  },
  topPolicies: [
    "7 NGÀY ĐỔI TRẢ",
    "GIAO HÀNG TOÀN QUỐC",
    "THANH TOÁN NHẬN HÀNG",
    "100% CHÍNH HÃNG"
  ],
  saleDateRange: "từ 30.07 - đến 04.08",
  saleDiscountPercent: "50%",
  hero: {
    eyebrow: "SIÊU ƯU ĐÃI TRANG PHỤC & PHỤ KIỆN TẬP GYM",
    title: "BIG SALE ONLINE",
    subtitle:
      "Săn ngay bộ sưu tập quần áo tập Gym, giày Sneaker thể thao và phụ kiện huấn luyện chính hãng giảm giá lên đến 50%.",
    ctaText: "XEM NGAY",
    ctaLink: "#san-pham-ban-chay",
    backgroundImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85"
  },
  newCollections: [
    {
      id: "col-1",
      title: "DÉP & XĂNG ĐAN THỂ THAO",
      subtitle: "Êm ái sau mỗi buổi tập cường độ cao",
      brandTag: "Dr. Martens Sport",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "col-2",
      title: "TRY ALL THE NEW",
      subtitle: "NOW AVAILABLE IN-STORES",
      brandTag: "eckō unltd. Fitness",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "col-3",
      title: "GIÀY SNEAKER TẬP LUYỆN",
      subtitle: "Bám sàn vượt trội & thoáng khí",
      brandTag: "SUPERGA SPORT",
      ctaText: "XEM NGAY",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    }
  ],
  bestSellers: [
    {
      id: "bs-1",
      name: "Áo Thun Tập Gym Kappa K0812TD01-990",
      category: "Áo Thun Thể Thao",
      price: "890,000 ₫",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bs-2",
      name: "Lót Giày Thể Thao Premium Comfort Insole AC140001",
      category: "Phụ Kiện Chạy Bộ",
      price: "550,000 ₫",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bs-3",
      name: "Ecko Unltd Áo Thun Thể Hình Intricate Rhino IS18",
      category: "Áo Thun Gym",
      oldPrice: "690,000 ₫",
      price: "483,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bs-4",
      name: "Giày Sneaker Tập Luyện 2750 Classic S000010-F67",
      category: "Giày Thể Thao",
      price: "790,000 ₫",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80"
    }
  ],
  brands: [
    {
      id: "br-1",
      name: "Dr. AirWair Martens",
      subText: "Bouncing Soles",
      accentColor: "#f5c518"
    },
    {
      id: "br-2",
      name: "Kappa",
      subText: "SPORT & FITNESS",
      accentColor: "#e32229"
    },
    {
      id: "br-3",
      name: "eckō unltd.",
      subText: "WORLD FAMOUS RHINO",
      accentColor: "#cc181f"
    },
    {
      id: "br-4",
      name: "Clarks",
      subText: "ATHLETIC FOOTWEAR",
      accentColor: "#111111"
    },
    {
      id: "br-5",
      name: "UNITED COLORS OF BENETTON.",
      subText: "ACTIVEWEAR",
      accentColor: "#008f39"
    },
    {
      id: "br-6",
      name: "REPLAY",
      subText: "STREET & GYM",
      accentColor: "#c81920"
    },
    {
      id: "br-7",
      name: "S I S L E Y",
      subText: "SPORT EDITION",
      accentColor: "#111111"
    },
    {
      id: "br-8",
      name: "SUPERGA",
      subText: "PEOPLE'S SHOES OF ITALY",
      accentColor: "#0055a4"
    }
  ],
  featuredCategories: [
    {
      id: "fcat-1",
      title: "GIÀY & BỐT",
      description:
        "Những mẫu giày da, sneaker tập gym và bốt cổ cao từ 8 thương hiệu thể thao nổi tiếng",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fcat-2",
      title: "ÁO THUN & ÁO SƠ MI",
      description:
        "Chọn ngay cho bạn 1 phong cách năng động tại phòng tập hoặc lịch lãm với áo thun thể thao",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fcat-3",
      title: "DÉP & XĂNG ĐAN",
      description:
        "Dù là mùa hè hay sau giờ tập luyện, một mẫu dép hoặc xăng đan luôn mang đến sự thoải mái và tiện lợi",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fcat-4",
      title: "PHỤ KIỆN",
      description:
        "Phụ kiện nón thể thao, túi trống tập gym và dây lưng sẽ làm bạn trở nên ấn tượng và cuốn hút",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Cách chọn giày Sneaker tập Gym và nâng tạ chuẩn form bàn chân",
      date: "18 Tháng Năm, 2025",
      category: "Kinh nghiệm tập luyện",
      excerpt:
        "Một đôi giày đế bằng bám sàn tốt giúp bảo vệ khớp cổ chân và tối ưu lực đẩy trong các bài Squat, Deadlift.",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Xu hướng trang phục thể thao Athleisure năng động cho mùa hè",
      date: "14 Tháng Năm, 2025",
      category: "Thời trang Fitness",
      excerpt:
        "Chất liệu vải thun lạnh co giãn 4 chiều giúp thấm hút mồ hôi vượt trội khi tập Cardio và chạy bộ ngoài trời.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "5 phụ kiện không thể thiếu trong túi đồ của người tập thể hình",
      date: "10 Tháng Năm, 2025",
      category: "Phụ kiện Gym",
      excerpt:
        "Đai lưng cứng bảo vệ cột sống, găng tay chống trượt, bình lắc Whey và lót giày giảm chấn chuyên dụng.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-4",
      title: "Lịch trình tập luyện kết hợp chạy bộ ngoài trời đốt mỡ toàn thân",
      date: "05 Tháng Năm, 2025",
      category: "Huấn luyện thể lực",
      excerpt:
        "Kết hợp 3 buổi tập tạ kháng lực và 2 buổi chạy bộ bền giúp săn chắc cơ bắp và tăng sức bền tim mạch.",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
