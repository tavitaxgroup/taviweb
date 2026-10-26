import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MillaMonaProduct {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge?: "SALE!" | "NEW";
  outOfStock?: boolean;
  image: string;
}

export interface SalonToc8Data extends ClonedTemplateBaseData {
  heroThumbnails: string[];
  featuredCategories: Array<{
    id: string;
    title: string;
    itemCount: string;
    image: string;
  }>;
  newArrivals: MillaMonaProduct[];
  studioCollection: {
    eyebrow: string;
    title: string;
    leftImage: string;
    rightImage: string;
    promoTitle: string;
    promoSubtitle: string;
  };
  partnerBrands: string[];
  catalogItems: MillaMonaProduct[];
}

export const salonToc8DefaultData: SalonToc8Data = {
  business: {
    name: "MILLAMONA",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["info@themona.global", "cskh@millamona.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "09:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 365,
    aboutTitle: "Viện Tạo Mẫu Tóc, Makeup & Thời Trang Cao Cấp Millamona",
    aboutText: [
      "Millamona là thương hiệu tạo mẫu tóc nghệ thuật và thời trang cao cấp dành cho phụ nữ hiện đại. Chúng tôi mang đến những dịch vụ chăm sóc sắc đẹp tinh tế, sang trọng và đẳng cấp, giúp tôn lên vẻ đẹp tự nhiên của người phụ nữ."
    ],
    highlights: [
      "Không gian Salon & Studio kiến trúc vòm Nghệ thuật chuẩn Châu Âu",
      "Chuyên gia tạo mẫu tóc & Makeup Artist tu nghiệp tại Hàn Quốc, Pháp",
      "Dòng sản phẩm chăm sóc tóc L'Oréal Professionnel & Kerastase chính hãng",
      "Ưu đãi 30% cho khách hàng đặt lịch hẹn trực tuyến qua Website"
    ]
  },
  hero: {
    eyebrow: "CHÀO MỪNG ĐẾN CỬA HÀNG & SALON CỦA MILLAMONA",
    title: "CỬA HÀNG MILLAMONA",
    subtitle: "Bộ sưu tập tạo mẫu tóc & thời trang cao cấp cho phong cách cá tính & năng động.",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#san-pham-moi",
    backgroundImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  heroThumbnails: [
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80"
  ],
  featuredCategories: [
    {
      id: "fc-1",
      title: "TẠO KIỂU",
      itemCount: "12 gói dịch vụ",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fc-2",
      title: "BEAUTY & SPA",
      itemCount: "14 liệu trình",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fc-3",
      title: "EDITORIAL",
      itemCount: "32 mẫu tóc",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fc-4",
      title: "PHỤ KIỆN",
      itemCount: "48 sản phẩm",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
    }
  ],
  newArrivals: [
    {
      id: "na-1",
      name: "COMBO UỐN SÓNG LƠI & TẠO KIỂU LINEN",
      price: "999,000₫ – 1,299,000₫",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "na-2",
      name: "NHUỘM BALAYAGE & PHỤC HỒI CHUYÊN SÂU",
      price: "1,499,000₫",
      oldPrice: "1,799,000₫",
      badge: "SALE!",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "na-3",
      name: "GÓI STYLING THƯỢNG LƯU & MAKEUP DỰ TIỆC",
      price: "2,199,000₫",
      oldPrice: "2,599,000₫",
      badge: "SALE!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  studioCollection: {
    eyebrow: "Bộ sưu tập \"Mùa hè\"",
    title: "STUDIO COLLECTION",
    leftImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
    rightImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    promoTitle: "ƯU ĐÃI 30% TẤT CẢ",
    promoSubtitle: "Sự kiện diễn ra trong tháng này, khi đặt lịch & mua sắm tại website MILLAMONA"
  },
  partnerBrands: [
    "L'ORÉAL",
    "KERASTASE",
    "OLAPLEX",
    "MOROCCANOIL",
    "DYSON",
    "DAVINES",
    "SHISEIDO",
    "GHD",
    "BALMAIN HAIR"
  ],
  catalogItems: [
    {
      id: "cat-1",
      name: "TẠO KIỂU TÓC CÔNG SỞ & BLAZER THANH LỊCH",
      price: "999,000₫ – 1,299,000₫",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-2",
      name: "GÓI STYLING & MAKEUP DỰ TIỆC TỐI",
      price: "2,199,000₫",
      oldPrice: "2,599,000₫",
      badge: "SALE!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-3",
      name: "BỘ TINH CHẤT DƯỠNG BÓNG TÓC RUBY ĐỎ",
      price: "999,000₫",
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-4",
      name: "BỘ 3 PHỤ KIỆN CÀI TÓC ÁNH KIM",
      price: "599,000₫",
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-5",
      name: "COMBO UỐN SÓNG LƠI & DƯỠNG KERATIN",
      price: "999,000₫ – 1,299,000₫",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-6",
      name: "LIỆU TRÌNH NHUỘM NÂU TÂY CAO CẤP",
      price: "1,499,000₫",
      outOfStock: true,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-7",
      name: "SET CHĂM SÓC TÓC UỐN NHUỘM CHUYÊN SÂU",
      price: "1,199,000₫",
      oldPrice: "1,299,000₫",
      badge: "SALE!",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-8",
      name: "BỘ KẸP & PHỤ KIỆN TẠO KIỂU STUDIO",
      price: "1,690,000₫",
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  news: [
    {
      id: "n-1",
      title: "7 BÍ QUYẾT CHĂM SÓC TÓC BÓNG MƯỢT SUỐT MÙA HÈ NẮNG NÓNG",
      date: "17 THÁNG CHÍN, 2025",
      category: "LÀM ĐẸP",
      excerpt: "Bảo vệ mái tóc trước tia UV và nhiệt độ cao với quy trình dưỡng ẩm chuyên sâu...",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-2",
      title: "NHỮNG KIỂU TÓC UỐN SÓNG LƠI TÔN LÊN NÉT DỊU DÀNG PHÁI ĐẸP",
      date: "17 THÁNG CHÍN, 2025",
      category: "XU HƯỚNG",
      excerpt: "Khám phá xu hướng tóc xoăn lơi tự nhiên chuẩn Hàn Quốc đang làm mưa làm gió...",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-3",
      title: "GỢI Ý PHỐI ĐỒ & TẠO KIỂU TÓC THANH LỊCH CHO QUÝ CÔ CÔNG SỞ",
      date: "17 THÁNG CHÍN, 2025",
      category: "PHONG CÁCH",
      excerpt: "Sự giao thoa hoàn hảo giữa kiểu tóc búi thấp tinh tế và trang phục tối giản...",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
