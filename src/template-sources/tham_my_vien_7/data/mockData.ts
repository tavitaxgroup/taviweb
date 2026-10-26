import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ThamMyVien7Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  saleBadge?: boolean;
  rating?: number;
  image: string;
}

export interface ThamMyVien7CircleCategory {
  id: string;
  name: string;
  image: string;
}

export interface ThamMyVien7Data extends ClonedTemplateBaseData {
  navCategories: string[];
  bestSellerFeaturedCard: {
    caption: string;
    ctaText: string;
    image: string;
  };
  bestSellers: ThamMyVien7Product[];
  flashOffers: {
    heading: string;
    highlightText: string;
    subText: string;
    ctaText: string;
    items: ThamMyVien7Product[];
  };
  circleCategories: ThamMyVien7CircleCategory[];
  qaBanner: {
    heading: string;
    subText: string;
    ctaText: string;
  };
  recommendedProducts: ThamMyVien7Product[];
  topSearchTags: string[];
  campaignPosters: Array<{
    id: string;
    title: string;
    sub: string;
    image: string;
  }>;
  trustSeals: Array<{
    id: string;
    title: string;
    badgeText: string;
  }>;
}

export const thamMyVien7DefaultData: ThamMyVien7Data = {
  business: {
    name: "FLAWLESS",
    phone: ["1900 636 648", "(+84) 0313-728-397"],
    email: ["info@themona.global", "cskh@flawlessskin.vn"],
    address: "1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:30 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 980,
    experienceYears: "10+",
    aboutTitle: "Phòng Khám Da Liễu & Dược Mỹ Phẩm Hữu Cơ Flawless Skin",
    aboutText: [
      "Chúng tôi rất vui mừng khi được đồng hành cùng bạn trên hành trình chăm sóc sắc đẹp và nuôi dưỡng từng tế bào làn da mịn màng.",
      "100% dược mỹ phẩm chuẩn phòng khám da liễu giúp phục hồi hàng rào bảo vệ da và chống nắng toàn diện."
    ],
    highlights: [
      "Thanh toán khi nhận hàng toàn quốc",
      "Giao nhanh NowFree 2H nội thành",
      "100% thành phần thiên nhiên lành tính",
      "Cam kết hàng chính hãng có tem Bộ Y Tế"
    ]
  },
  navCategories: [
    "KEM CHỐNG NẮNG",
    "DƯỠNG DA",
    "BỘ CHĂM SÓC DA",
    "XỊT CHỐNG NẮNG",
    "KEM DƯỠNG",
    "SERUM DƯỠNG",
    "SÁP DƯỠNG",
    "DẦU DƯỠNG"
  ],
  hero: {
    eyebrow: "NUÔI DƯỠNG TỪNG TẾ BÀO",
    title: "Làn Da Mịn Màng",
    subtitle:
      "Bộ sưu tập dược mỹ phẩm hữu cơ chiết xuất hoa anh đào & Hyaluronic Acid cấp ẩm sâu.",
    ctaText: "Mua ngay",
    ctaLink: "#ban-chay",
    secondaryCtaText: "Đặt câu hỏi",
    secondaryCtaLink: "#hoi-dap",
    backgroundImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85"
  },
  bestSellerFeaturedCard: {
    caption: "Chất lượng thật - giá trị thật",
    ctaText: "Mua ngay",
    image:
      "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=800&q=85"
  },
  bestSellers: [
    {
      id: "fl-bs-1",
      name: "Kem Nền Dưỡng Ẩm Neo Nude",
      price: "209.000 ₫",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fl-bs-2",
      name: "Kem Dưỡng Sáng Da Glow Tinted",
      oldPrice: "215.000 ₫",
      price: "189.000 ₫",
      saleBadge: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fl-bs-3",
      name: "Tinh Chất Cấp Ẩm Neo Nude",
      price: "149.000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fl-bs-4",
      name: "Sữa Rửa Mặt Tẩy Trang Dịu Nhẹ",
      price: "246.000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    }
  ],
  flashOffers: {
    heading: "ƯU ĐÃI HẤP DẪN",
    highlightText: "Tiết kiệm 50%.",
    subText: "Giới hạn hôm nay",
    ctaText: "Mua ngay",
    items: [
      {
        id: "fl-fo-1",
        name: "Kem Dưỡng Sáng Da Glow Tinted",
        oldPrice: "215.000 ₫",
        price: "189.000 ₫",
        saleBadge: true,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fl-fo-2",
        name: "Mặt Nạ Đất Sét Thanh Lọc Vinopure",
        oldPrice: "567.000 ₫",
        price: "456.000 ₫",
        saleBadge: true,
        image:
          "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fl-fo-3",
        name: "Kem Dưỡng Da Tay Glycerin Hữu Cơ",
        oldPrice: "321.000 ₫",
        price: "222.000 ₫",
        saleBadge: true,
        image:
          "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "fl-fo-4",
        name: "Dầu Dưỡng Squalane + Vitamin C Hoa Hồng",
        oldPrice: "442.000 ₫",
        price: "359.000 ₫",
        saleBadge: true,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  circleCategories: [
    {
      id: "cc-1",
      name: "Kem chống nắng",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-2",
      name: "Dưỡng da",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-3",
      name: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-4",
      name: "Kem dưỡng",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-5",
      name: "Serum dưỡng",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-6",
      name: "Sáp dưỡng",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-7",
      name: "Dầu dưỡng",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cc-8",
      name: "Dưỡng thể",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80"
    }
  ],
  qaBanner: {
    heading: "ĐẶT CÂU HỎI NẾU CÓ THẮC MẮC",
    subText: "Hãy đặt câu hỏi tại đây nếu bạn có thắc mắc gì với sản phẩm.",
    ctaText: "Đặt câu hỏi"
  },
  recommendedProducts: [
    {
      id: "rec-1",
      name: "Kem Nền Dưỡng Ẩm Neo Nude",
      price: "209.000 ₫",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec-2",
      name: "Kem Dưỡng Sáng Da Glow Tinted",
      oldPrice: "215.000 ₫",
      price: "189.000 ₫",
      saleBadge: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec-3",
      name: "Tinh Chất Cấp Ẩm Neo Nude",
      price: "149.000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec-4",
      name: "Sữa Rửa Mặt Tẩy Trang Dịu Nhẹ",
      price: "246.000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec-5",
      name: "Sữa Rửa Mặt Chiết Xuất Đậu Nành",
      price: "183.000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "rec-6",
      name: "Mặt Nạ Đất Sét Thanh Lọc Vinopure",
      oldPrice: "567.000 ₫",
      price: "456.000 ₫",
      saleBadge: true,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  topSearchTags: [
    "Chăm sóc cơ thể",
    "Dưỡng tóc",
    "Phục hồi da",
    "Son dưỡng",
    "Kem chống nắng",
    "Trang điểm",
    "Tinh chất B5",
    "Nước hoa",
    "Trị liệu Spa"
  ],
  campaignPosters: [
    {
      id: "cp-1",
      title: "Cấp Ẩm Chuyên Sâu",
      sub: "HYDRATING FORMULA",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-2",
      title: "Phục Hồi Da Y Khoa",
      sub: "SKIN TREATMENT",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-3",
      title: "Kem Dưỡng Ban Ngày",
      sub: "DAY CREAM SERUM",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-4",
      title: "Tinh Chất Vàng 24K",
      sub: "PREMIUM GOLD",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-5",
      title: "Thanh Tẩy Thảo Mộc",
      sub: "ORGANIC SPA",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80"
    }
  ],
  news: [
    {
      id: "fl-nw-1",
      title: "Top 5 Kem Chống Nắng Hiệu Quả Nhất 2026",
      date: "Tin tức mới nhất",
      category: "Xem thêm",
      excerpt:
        "Bí quyết bảo vệ làn da trước tia UV và ánh sáng xanh cùng dòng kem chống nắng phổ rộng chuẩn y khoa.",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "fl-nw-2",
      title: "Sản Phẩm Dưỡng Da Không Thể Thiếu Mùa Hè",
      date: "Sự kiện nổi bật",
      category: "Xem thêm",
      excerpt:
        "Cấp nước tức thì và làm dịu làn da cháy nắng với bộ đôi xịt khoáng thảo mộc và serum Hyaluronic Acid.",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85"
    }
  ],
  testimonials: [
    {
      id: "fl-rv-1",
      author: "Ngọc Anh",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      content:
        "Tôi đã thử nhiều loại kem chống nắng nhưng chưa loại nào mang lại hiệu quả kiềm dầu và mịn nhẹ như sản phẩm này."
    },
    {
      id: "fl-rv-2",
      author: "Minh Tuấn",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content:
        "Tôi đã thử nhiều loại kem chống nắng nhưng chưa loại nào mang lại hiệu quả như sản phẩm này."
    },
    {
      id: "fl-rv-3",
      author: "Hương Giang",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content:
        "Tôi đã thử nhiều loại kem chống nắng nhưng chưa loại nào mang lại hiệu quả như sản phẩm này."
    }
  ],
  trustSeals: [
    {
      id: "ts-1",
      title: "Thanh toán khi nhận hàng",
      badgeText: "COD 100%"
    },
    {
      id: "ts-2",
      title: "Giao nhanh miễn phí 2H",
      badgeText: "NowFree 2H"
    },
    {
      id: "ts-3",
      title: "100% thiên nhiên lành tính",
      badgeText: "100% NATURAL"
    },
    {
      id: "ts-4",
      title: "Cam kết hàng chính hãng",
      badgeText: "AUTHENTIC"
    }
  ]
};
