import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Gym12ShoeProduct {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  swatches: string[];
  image: string;
}

export interface Gym12PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
}

export interface Gym12Data extends ClonedTemplateBaseData {
  heroTitleBrand: string;
  heroTitleAccent: string;
  trustItems: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  flashSaleProducts: Gym12ShoeProduct[];
  topWeekProducts: Gym12ShoeProduct[];
  dualBanners: Gym12PromoBanner[];
  newestProducts: Gym12ShoeProduct[];
  videoBannerImage: string;
  partnerLogos: string[];
}

export const phongGym12DefaultData: Gym12Data = {
  business: {
    name: "Dualeo Sport",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["cskh@dualeosport.vn", "support@dualeosport.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 22:00 (Mỗi ngày)",
    rating: 4.9,
    reviewCount: 2380,
    experienceYears: "12 Năm",
    aboutTitle: "CLB Chạy Bộ, Thể Hình & Giày Thể Thao Chính Hãng",
    aboutText: [
      "Chúng tôi chuyên cung cấp các dòng giày chạy bộ Marathon, giày tập Gym Cross-Training và phụ kiện thể thao chính hãng chất lượng tốt đạt chuẩn quốc tế."
    ],
    highlights: [
      "Miễn phí vận chuyển cho đơn hàng > 500.000đ",
      "Mua 2 được giảm giá 10% cho đơn hàng tiếp theo",
      "Chứng nhận chất lượng sản phẩm chính hãng 100%"
    ]
  },
  heroTitleBrand: "DUALEO",
  heroTitleAccent: "SPORT",
  hero: {
    eyebrow: "CLB Chạy Bộ & Giày Thể Thao Hiệu Suất Cao",
    title: "DUALEO SPORT",
    subtitle: "Bứt phá tốc độ – Sải bước êm ái – Chinh phục mọi đường chạy",
    ctaText: "Xem ngay",
    ctaLink: "#sieu-khuyen-mai",
    backgroundImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=85"
  },
  trustItems: [
    {
      id: "tr-1",
      title: "Miễn phí vận chuyển",
      subtitle: "Cho đơn hàng > 500.000đ"
    },
    {
      id: "tr-2",
      title: "Mua 2 được giảm giá",
      subtitle: "10% cho đơn hàng tiếp"
    },
    {
      id: "tr-3",
      title: "Chứng nhận chất lượng",
      subtitle: "Sản phẩm chất lượng"
    },
    {
      id: "tr-4",
      title: "Hotline : 1900 636 648",
      subtitle: "Hỗ trợ trực tiếp nhanh chóng"
    }
  ],
  countdown: {
    days: "5",
    hours: "8",
    minutes: "56",
    seconds: "9"
  },
  flashSaleProducts: [
    {
      id: "fs-1",
      name: "Giày Chạy Bộ Dualeo Pro Run Carbon Đỏ Đô",
      price: "1,340,000₫",
      swatches: ["#111111", "#8b0000"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-2",
      name: "Giày Tập Gym Nữ Ultra Flex Đỏ Coral",
      oldPrice: "1,399,000₫",
      price: "1,049,000₫",
      discountBadge: "-25%",
      swatches: ["#ef4444", "#111111", "#f472b6"],
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-3",
      name: "Giày Chạy Trail Địa Hình Navy Grip",
      price: "1,390,000₫",
      swatches: ["#2563eb", "#dc2626", "#1e3a8a"],
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-4",
      name: "Giày Sneaker Cardio Air Cushion Kem",
      price: "1,340,000₫",
      swatches: ["#f472b6"],
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-5",
      name: "Giày Tập Luyện Đa Năng Grey Trainer",
      oldPrice: "1,350,000₫",
      price: "1,130,000₫",
      discountBadge: "-16%",
      swatches: ["#111111", "#f472b6", "#9ca3af"],
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    }
  ],
  topWeekProducts: [
    {
      id: "tw-1",
      name: "Giày Chạy Bộ Marathon Speed Light",
      oldPrice: "1,250,000₫",
      price: "975,000₫",
      discountBadge: "-22%",
      swatches: ["#111111", "#eab308"],
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tw-2",
      name: "Giày Tập Nữ Cloud Foam Pastel",
      price: "1,340,000₫",
      swatches: ["#ec4899"],
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tw-3",
      name: "Giày Thể Hình Squat & Deadlift Pro",
      price: "1,390,000₫",
      swatches: ["#2563eb", "#dc2626", "#1e3a8a"],
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tw-4",
      name: "Giày Chạy Bộ Emerald Nitrolite",
      price: "1,420,000₫",
      swatches: ["#22c55e"],
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tw-5",
      name: "Giày Tennis & Cardio Crimson Bounce",
      price: "1,500,000₫",
      swatches: ["#dc2626"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    }
  ],
  dualBanners: [
    {
      id: "db-1",
      title: "NEW SHOES",
      subtitle: "Giày chạy bộ & tập gym thế hệ mới dành cho hội viên",
      ctaText: "Xem ngay",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "db-2",
      title: "DUALEO SHOES",
      subtitle: "Giảm giá 5% khi bạn đặt hàng online hôm nay",
      ctaText: "Xem ngay",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    }
  ],
  newestProducts: [
    {
      id: "np-1",
      name: "Giày Chạy Bộ Marathon Speed Light",
      oldPrice: "1,250,000₫",
      price: "975,000₫",
      discountBadge: "-22%",
      swatches: ["#111111", "#eab308"],
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-2",
      name: "Giày Chạy Nước Rút Midnight Blaze",
      oldPrice: "990,000₫",
      price: "690,000₫",
      discountBadge: "-30%",
      swatches: ["#dc2626", "#22c55e", "#eab308"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-3",
      name: "Giày Tập Cardio Đỏ Ruby 5cm",
      price: "1,500,000₫",
      swatches: ["#dc2626"],
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-4",
      name: "Giày Tập Luyện Pro Carbon Black",
      oldPrice: "1,000,000₫",
      price: "850,000₫",
      discountBadge: "-15%",
      swatches: ["#eab308", "#111111"],
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-5",
      name: "Giày Đi Bộ Thể Thao Sand Comfort",
      price: "890,000₫",
      swatches: ["#111111", "#eab308"],
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-6",
      name: "Giày Tập Gym Đế Bằng Core Black",
      price: "759,000₫",
      swatches: ["#111111"],
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-7",
      name: "Giày Chạy Bộ Đỏ Burgundy Air",
      price: "840,000₫",
      swatches: ["#111111", "#991b1b"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-8",
      name: "Giày Chạy Trail Kháng Nước Obsidian",
      price: "950,000₫",
      swatches: ["#111111", "#991b1b"],
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-9",
      name: "Giày Tập Aerobic & Zumba Hoa Xanh",
      price: "860,000₫",
      swatches: ["#22c55e", "#2563eb", "#9333ea"],
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-10",
      name: "Giày Chạy Giải Marathon Limited 01",
      price: "1,350,000₫",
      swatches: ["#ec4899", "#9333ea"],
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-11",
      name: "Giày Chạy Bộ Xanh Ngọc Lục Bảo",
      price: "920,000₫",
      swatches: ["#22c55e"],
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-12",
      name: "Giày Tập Nữ Ultra Flex Đỏ Coral",
      oldPrice: "999,000₫",
      price: "749,000₫",
      discountBadge: "-25%",
      swatches: ["#ef4444", "#111111", "#f472b6"],
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-13",
      name: "Giày Cổ Cao Boxing & Tập Thể Hình",
      oldPrice: "1,200,000₫",
      price: "950,000₫",
      discountBadge: "-21%",
      swatches: ["#ef4444", "#22c55e", "#991b1b"],
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-14",
      name: "Giày Tập Luyện Đa Năng Grey Trainer",
      oldPrice: "950,000₫",
      price: "795,000₫",
      discountBadge: "-16%",
      swatches: ["#111111", "#f472b6", "#9ca3af"],
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-15",
      name: "Giày Chạy Bộ Oxford Sport Xám Khói",
      oldPrice: "950,000₫",
      price: "845,000₫",
      discountBadge: "-11%",
      swatches: ["#111111", "#f472b6"],
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
    }
  ],
  videoBannerImage:
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1800&q=80",
  news: [
    {
      id: "news-1",
      title: "Lý do những đôi giày chạy bộ đế Carbon lại có độ nảy độc nhất vô nhị",
      date: "7 Tháng Năm, 2025",
      category: "Công nghệ giày",
      excerpt:
        "Khi bạn hỏi một vận động viên chạy Marathon chuyên nghiệp đâu là bí quyết duy trì tốc độ bền bỉ suốt 42km...",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Lộ diện các mẫu giày tập Gym và chạy bộ êm ái nhất dành cho người mới",
      date: "7 Tháng Năm, 2025",
      category: "Tư vấn chọn giày",
      excerpt:
        "Bạn mới bắt đầu lịch tập thể hình và chạy bộ giảm cân? Việc chọn đúng độ êm của đệm đế sẽ bảo vệ đầu gối...",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Có gì đặc biệt ở dòng giày thể thao siêu nhẹ chống trượt mới ra mắt?",
      date: "7 Tháng Năm, 2025",
      category: "Xu hướng",
      excerpt:
        "Sau một thời gian nghiên cứu thử nghiệm tại phòng Gym, thiết kế lưới thoáng khí kết hợp đế cao su nguyên khối...",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80"
    }
  ],
  partnerLogos: [
    "NIKE RUN",
    "ADIDAS BOOST",
    "PUMA FIT",
    "ASICS PRO",
    "NEW BALANCE",
    "REEBOK GYM"
  ]
};
