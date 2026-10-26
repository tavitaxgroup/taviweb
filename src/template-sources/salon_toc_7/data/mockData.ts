import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrendLuxeItem {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  badges?: Array<{ text: string; isHot?: boolean }>;
  rating: number;
  reviews: number;
  hasCountdown?: boolean;
  sizes?: string[];
  swatches?: string[];
  image: string;
}

export interface SalonToc7Data extends ClonedTemplateBaseData {
  bentoCategories: {
    leftCard: { label: string; image: string };
    topRightCard: { label: string; image: string };
    bottomLeftCard: { label: string; image: string };
    bottomRightCard: { label: string; image: string };
  };
  flashSaleItems: TrendLuxeItem[];
  hotTrendTabs: string[];
  hotTrendItems: TrendLuxeItem[];
  menItems: TrendLuxeItem[];
  womenItems: TrendLuxeItem[];
  instagramPhotos: string[];
}

export const salonToc7DefaultData: SalonToc7Data = {
  business: {
    name: "Mona Media",
    phone: ["076 922 0162", "0909 555 162"],
    email: ["cskh@trendluxe-salon.vn", "info@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "09:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 410,
    aboutTitle: "Mona Luxe — Sành Điệu Mọi Lúc Mọi Nơi",
    aboutText: [
      "Mona Media TrendLuxe là tổ hợp Salon tạo mẫu tóc nghệ thuật và Boutique thời trang cao cấp, nơi tôn vinh thần thái sang trọng, thanh lịch cho quý cô hiện đại.",
      "Mỗi kiểu tóc và thiết kế trang phục tại TrendLuxe đều được chăm chút tỉ mỉ bởi đội ngũ Stylist hàng đầu, giúp bạn tự tin tỏa sáng từ công sở đến những buổi tiệc tối."
    ],
    highlights: [
      "Miễn phí vận chuyển & tặng gói hấp dưỡng từ 2 đơn hàng trở lên",
      "Thời gian bảo hành nếp tóc & đổi trả sản phẩm lên tới 30 ngày",
      "Hỗ trợ đa dạng phương thức thanh toán linh hoạt, tiện lợi",
      "Không gian Salon & Studio chuẩn Luxury tại trung tâm TP.HCM"
    ]
  },
  hero: {
    eyebrow: "TREND LUXE SALON & BOUTIQUE",
    title: "Mona Media",
    subtitle: "fashion & hair collection",
    ctaText: "Mua Ngay",
    ctaLink: "#hot-trend",
    backgroundImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=85"
  },
  bentoCategories: {
    leftCard: {
      label: "Tạo Kiểu Tóc",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    topRightCard: {
      label: "Phụ Kiện",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    bottomLeftCard: {
      label: "Dưỡng Tóc",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    bottomRightCard: {
      label: "Nhuộm Màu",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    }
  },
  flashSaleItems: [
    {
      id: "fs-1",
      name: "Combo Cắt Layer & Uốn Phồng Chân Tóc Hàn Quốc",
      category: "Tạo kiểu",
      price: "320,000 ₫",
      oldPrice: "350,000 ₫",
      badges: [{ text: "-9%" }],
      rating: 5,
      reviews: 12,
      hasCountdown: true,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-2",
      name: "Gói Nhuộm Hồng Đào & Phục Hồi Collagen Hiện Đại",
      category: "Nhuộm màu",
      price: "290,000 ₫",
      oldPrice: "360,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-19%" }],
      rating: 5,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-3",
      name: "Liệu Trình Hấp Dầu Keratin Siêu Bóng Mượt",
      category: "Dưỡng tóc",
      price: "320,000 ₫",
      oldPrice: "340,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-6%" }],
      rating: 5,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-4",
      name: "Tinh Dầu Dưỡng Tóc Bóng Mượt Steel City 100ml",
      category: "Phụ kiện",
      price: "200,000 ₫",
      oldPrice: "260,000 ₫",
      badges: [{ text: "-23%" }],
      rating: 5,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  hotTrendTabs: ["Uốn Sóng", "Nhuộm Màu", "Cắt Layer", "Phục Hồi"],
  hotTrendItems: [
    {
      id: "ht-1",
      name: "Tạo Kiểu Tóc Xoăn Sóng Lơi & Trang Phục Gile V Dreamy",
      category: "Uốn Sóng",
      price: "1,200,000 ₫",
      oldPrice: "1,500,000 ₫",
      badges: [{ text: "-20%" }],
      rating: 5,
      reviews: 14,
      sizes: ["L", "M", "S"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ht-2",
      name: "Combo Tạo Mẫu Tóc Quý Cô & Set Tweed Muse Cao Cấp",
      category: "Cắt Layer",
      price: "1,000,000 ₫",
      rating: 5,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ht-3",
      name: "Kiểu Tóc Bob Ngắn Thanh Lịch & Phối Đồ Công Sở",
      category: "Cắt Layer",
      price: "590,000 ₫",
      rating: 5,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ht-4",
      name: "Gói Nhuộm Đỏ Rượu Vang & Tạo Kiểu Dự Tiệc",
      category: "Nhuộm Màu",
      price: "1,200,000 ₫",
      oldPrice: "1,500,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-20%" }],
      rating: 5,
      reviews: 21,
      swatches: ["#b91c1c", "#1d4ed8", "#f472b6"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    }
  ],
  menItems: [
    {
      id: "m-1",
      name: "Combo Tạo Kiểu & Áo Thun Cổ Chéo Chữ V Cao Cấp",
      category: "Nam",
      price: "1,200,000 ₫",
      oldPrice: "1,500,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-20%" }],
      rating: 5,
      reviews: 11,
      swatches: ["#b91c1c", "#1d4ed8", "#f472b6"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-2",
      name: "Gói Chăm Sóc Tóc & Set Thanh Lịch SOLAR 2 Lớp",
      category: "Nam",
      price: "800,000 ₫",
      oldPrice: "850,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-6%" }],
      rating: 5,
      reviews: 7,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-3",
      name: "Liệu Trình Phục Hồi Nang Tóc & Tạo Kiểu Sang Trọng",
      category: "Nam",
      price: "400,000 ₫",
      oldPrice: "500,000 ₫",
      badges: [{ text: "-20%" }],
      rating: 5,
      reviews: 16,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-4",
      name: "Combo Styling & Set Tweed Muse Chuẩn Studio",
      category: "Nam",
      price: "1,000,000 ₫",
      rating: 5,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
    }
  ],
  womenItems: [
    {
      id: "w-1",
      name: "Combo Tạo Kiểu Tóc & Set Tweed Muse Thượng Lưu",
      category: "Nữ",
      price: "1,000,000 ₫",
      rating: 5,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "w-2",
      name: "Uốn Sóng Nước & Đầm Cổ V Xếp Hoa Eo Tinh Tế",
      category: "Nữ",
      price: "400,000 ₫",
      oldPrice: "500,000 ₫",
      badges: [{ text: "-20%" }],
      rating: 5,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "w-3",
      name: "Nhuộm Đỏ Ruby & Tạo Kiểu Dự Tiệc Sang Trọng",
      category: "Nữ",
      price: "1,200,000 ₫",
      oldPrice: "1,500,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-20%" }],
      rating: 5,
      reviews: 23,
      swatches: ["#b91c1c", "#1d4ed8", "#f472b6"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "w-4",
      name: "Tạo Kiểu Tóc Duỗi Tự Nhiên & Set SOLAR 2 Lớp",
      category: "Nữ",
      price: "800,000 ₫",
      oldPrice: "850,000 ₫",
      badges: [{ text: "HOT", isHot: true }, { text: "-6%" }],
      rating: 5,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "t-1",
      author: "Minh Anh",
      rating: 5,
      content:
        "\"Kiểu tóc và trang phục ở đây luôn bắt kịp xu hướng, mỗi lần ghé salon đều mang lại cảm giác tự tin và phong cách. Tôi rất hài lòng!\""
    },
    {
      id: "t-2",
      author: "Bảo Khánh",
      rating: 5,
      content:
        "\"Tôi rất thích sự tỉ mỉ trong từng đường cắt tỉa và tư vấn tạo kiểu. Thuốc dưỡng thơm dịu, tóc sau khi uốn mềm mượt và giữ nếp rất lâu.\""
    },
    {
      id: "t-3",
      author: "Ngọc Hà",
      rating: 5,
      content:
        "\"Dịch vụ rất đa dạng và dễ dàng kết hợp cho nhiều dịp khác nhau. Đội ngũ Stylist nhiệt tình, không gian sang trọng chuẩn quốc tế.\""
    }
  ],
  news: [
    {
      id: "n-1",
      title: "Bí Quyết Chọn Tinh Dầu Dưỡng Tóc Phù Hợp Cho Tóc Uốn Nhuộm",
      date: "14/12/2025",
      excerpt:
        "Sứ mệnh của chúng tôi luôn là truyền cảm hứng, chăm sóc và nuôi dưỡng mái tóc chắc khỏe từ sâu bên trong...",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-2",
      title: "Top Các Thương Hiệu Chăm Sóc Tóc Cao Cấp Bạn Nên Biết",
      date: "18/12/2025",
      excerpt:
        "Khám phá những dòng sản phẩm phục hồi Keratin và Collagen giúp tái tạo cấu trúc sợi tóc hư tổn nhanh chóng...",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-3",
      title: "Phong Cách Tạo Kiểu Tóc Thanh Lịch & Năng Động Cho Mọi Mùa",
      date: "22/12/2025",
      excerpt:
        "Những gợi ý tạo kiểu tóc nhanh gọn nhưng vẫn giữ trọn nét cuốn hút cho quý cô bận rộn mỗi sáng...",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  instagramPhotos: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
  ]
};
