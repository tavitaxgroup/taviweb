import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa8ProductItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  discountTag?: string;
  colors?: string[];
  image: string;
}

export interface Spa8LimitedDeal {
  id: string;
  discountBadge: string;
  featuredBadge?: boolean;
  title: string;
  oldPrice: string;
  price: string;
  description: string;
  soldCount: number;
  totalStock: number;
  image: string;
}

export interface Spa8MiniBanner {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  priceText: string;
  bgClass: string;
  image: string;
}

export interface Spa8Data extends ClonedTemplateBaseData {
  heroRightBanners: Array<{
    id: string;
    eyebrow?: string;
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  }>;
  topMiniBanners: Spa8MiniBanner[];
  pinkPromoStripText: string;
  limitedDeals: Spa8LimitedDeal[];
  bestSellers: Spa8ProductItem[];
  patchCollectionBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  categoryTiles: Array<{
    id: string;
    label: string;
    subVi: string;
  }>;
  newestProducts: {
    sideBannerImage: string;
    items: Spa8ProductItem[];
    bottomMiniBanners: Spa8MiniBanner[];
  };
  trendingSection: {
    sideBannerImage: string;
    items: Spa8ProductItem[];
    bottomWideBanners: Spa8MiniBanner[];
  };
}

export const spa8DefaultData: Spa8Data = {
  business: {
    name: "Mona",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "cskh@beautyglow.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ hai – Chủ nhật: 09:00 sáng – 06:00 tối",
    rating: 4.9,
    reviewCount: 1240,
    experienceYears: "10+",
    aboutTitle: "Spa Trị Liệu & Dược Mỹ Phẩm Hữu Cơ Thiên Nhiên",
    aboutText: [
      "Chăm sóc làn da của bạn với những sản phẩm dược mỹ phẩm hữu cơ chiết xuất 100% từ thiên nhiên kết hợp liệu trình spa chuyên sâu.",
      "Cam kết bảng thành phần lành tính, không paraben, giúp nuôi dưỡng làn da căng bóng rạng rỡ từ sâu bên trong."
    ],
    highlights: [
      "TIẾT KIỆM THÊM 5-10% CHO MỌI ĐƠN HÀNG TRÊN 2TR",
      "100% dược mỹ phẩm hữu cơ nhập khẩu chính ngạch",
      "Tư vấn phác đồ chăm sóc da cá nhân hóa miễn phí"
    ]
  },
  hero: {
    eyebrow: "MỸ PHẨM HỮU CƠ",
    title: "Tự tin với nhan sắc\ntự nhiên",
    subtitle: "Chăm sóc làn da của bạn\nvới những sản phẩm mỹ phẩm hữu cơ lành tính",
    ctaText: "Mua ngay",
    ctaLink: "#san-pham-ban-chay",
    secondaryCtaText: "Khám phá",
    secondaryCtaLink: "#khuyen-mai",
    backgroundImage:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1200&q=85"
  },
  heroRightBanners: [
    {
      id: "hr-1",
      eyebrow: "FACE SERUM 100%",
      title: "Làn da rạng rỡ mọi lúc",
      subtitle: "Khuyến mãi 20%",
      ctaText: "Mua ngay",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hr-2",
      title: "Sắc màu và phong cách",
      subtitle: "Khám phá bộ sưu tập mỹ phẩm chống lão hóa",
      ctaText: "Mua ngay",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=800&q=80"
    }
  ],
  topMiniBanners: [
    {
      id: "tmb-1",
      title: "Chăm sóc da",
      subtitle: "Từ bên trong",
      priceText: "1,290,000₫",
      bgClass: "bg-[#f8f3ef]",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tmb-2",
      eyebrow: "990,000₫",
      title: "Thiên đường",
      subtitle: "Làn da hoàn hảo",
      priceText: "990,000₫",
      bgClass: "bg-[#fbf0ea]",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tmb-3",
      title: "Chăm sóc da",
      subtitle: "Chuyên sâu",
      priceText: "1,490,000₫",
      bgClass: "bg-[#eef5f7]",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  pinkPromoStripText: "TIẾT KIỆM THÊM 5-10% CHO MỌI ĐƠN HÀNG TRÊN 2TR",
  limitedDeals: [
    {
      id: "ld-1",
      discountBadge: "-12%",
      title: "Tinh Chất Phục Hồi Cosmo Cosmetics",
      oldPrice: "1,650,000₫",
      price: "1,460,000₫",
      description:
        "Tinh chất dưỡng sáng và cấp ẩm đa tầng chiết xuất từ tảo biển sâu và phức hợp peptide giúp phục hồi hàng rào bảo vệ da khỏe mạnh chỉ sau 14 ngày.",
      soldCount: 23,
      totalStock: 57,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ld-2",
      discountBadge: "-10%",
      featuredBadge: true,
      title: "Nước Hoa Hồng Hữu Cơ InstaNatural Rose",
      oldPrice: "2,100,000₫",
      price: "1,900,000₫",
      description:
        "Chiết xuất 100% cánh hoa hồng Damask chưng cất tinh khiết kết hợp Vitamin C tự nhiên giúp se khít lỗ chân lông và cân bằng độ pH dịu nhẹ.",
      soldCount: 16,
      totalStock: 51,
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bestSellers: [
    {
      id: "bs-1",
      name: "Tinh Chất Căng Bóng Glow",
      price: "2,600,000₫",
      rating: 5,
      reviewsCount: 3,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-2",
      name: "Sáp Tẩy Trang Bơ Hữu Cơ",
      price: "4,010,000₫",
      rating: 5,
      reviewsCount: 4,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-3",
      name: "Nước Cân Bằng Thảo Mộc Pixi",
      price: "2,400,000₫",
      rating: 5,
      reviewsCount: 2,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-4",
      name: "Kem Lót Kiềm Dầu Se Khít Lỗ Chân Lông",
      price: "3,300,000₫",
      rating: 5,
      reviewsCount: 2,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-5",
      name: "Kem Nền Khoáng Chất Che Phủ Hoàn Hảo",
      price: "1,690,000₫ – 1,990,000₫",
      rating: 5,
      reviewsCount: 5,
      colors: ["#2d7a89", "#f3d2c1", "#f8e5d8"],
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-6",
      name: "Tinh Chất Bắt Sáng Tươi Trẻ Fresh Face",
      price: "1,350,000₫ – 1,800,000₫",
      rating: 5,
      reviewsCount: 3,
      featured: true,
      colors: ["#2d7a89", "#f28b82"],
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-7",
      name: "Sữa Dưỡng Thể Hương Hoa Thiên Nhiên",
      price: "1,890,000₫ – 2,190,000₫",
      rating: 5,
      reviewsCount: 1,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-8",
      name: "Huyết Thanh Trẻ Hóa Cosmo Cosmetics",
      oldPrice: "1,650,000₫",
      price: "1,460,000₫",
      rating: 5,
      reviewsCount: 6,
      discountTag: "-12%",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    }
  ],
  patchCollectionBanner: {
    eyebrow: "P A T C H",
    title: "Bộ sưu tập mỹ\nphẩm đa dạng",
    subtitle:
      "Nâng tầm quy trình chăm sóc da của bạn với dòng sản phẩm hữu cơ thân thiện môi trường.",
    ctaText: "Mua ngay",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85"
  },
  categoryTiles: [
    { id: "ct-1", label: "Facial area", subVi: "Da mặt" },
    { id: "ct-2", label: "Hand zone", subVi: "Da tay" },
    { id: "ct-3", label: "Body care", subVi: "Toàn thân" },
    { id: "ct-4", label: "Zone of life", subVi: "Trẻ hóa" },
    { id: "ct-5", label: "Bikini area", subVi: "Vùng nhạy cảm" },
    { id: "ct-6", label: "Leg area", subVi: "Chăm sóc chân" }
  ],
  newestProducts: {
    sideBannerImage:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=700&q=85",
    items: [
      {
        id: "np-1",
        name: "Sữa Dưỡng Bắt Sáng Body Lava",
        price: "1,560,000₫ – 1,900,000₫",
        rating: 5,
        reviewsCount: 2,
        featured: true,
        colors: ["#2d7a89", "#f28b82", "#fce8e6"],
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "np-2",
        name: "Sáp Tẩy Trang Bơ Hữu Cơ",
        price: "4,010,000₫",
        rating: 5,
        reviewsCount: 3,
        featured: true,
        image:
          "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "np-3",
        name: "Tinh Chất Căng Bóng Glow",
        price: "2,600,000₫",
        rating: 5,
        reviewsCount: 3,
        featured: true,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "np-4",
        name: "Kem Dưỡng Ẩm Hằng Ngày Aveeno",
        price: "3,000,000₫",
        rating: 5,
        reviewsCount: 4,
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "np-5",
        name: "Tinh Chất Hoa Hồng Dịu Nhẹ",
        price: "2,400,000₫",
        rating: 5,
        reviewsCount: 2,
        featured: true,
        image:
          "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "np-6",
        name: "Serum Phục Hồi Ban Đêm Careful",
        price: "2,300,000₫",
        rating: 5,
        reviewsCount: 2,
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
      }
    ],
    bottomMiniBanners: [
      {
        id: "bmb-1",
        title: "Kem Phục Hồi",
        subtitle: "Ban Đêm",
        priceText: "890,000₫",
        bgClass: "bg-[#edf4f6]",
        image:
          "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "bmb-2",
        eyebrow: "890,000₫",
        title: "GEL DỊU NHẸ",
        subtitle: "Sữa rửa mặt thảo mộc",
        priceText: "890,000₫",
        bgClass: "bg-[#fbf1ec]",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "bmb-3",
        title: "BOTANICAL",
        subtitle: "Dưỡng da thực vật",
        priceText: "890,000₫",
        bgClass: "bg-[#f6f1eb]",
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  trendingSection: {
    sideBannerImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85",
    items: [
      {
        id: "tr-1",
        name: "Tinh Chất Căng Bóng Glow",
        price: "2,600,000₫",
        rating: 5,
        reviewsCount: 3,
        featured: true,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "tr-2",
        name: "Sáp Tẩy Trang Bơ Hữu Cơ",
        price: "4,010,000₫",
        rating: 5,
        reviewsCount: 4,
        featured: true,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "tr-3",
        name: "Phấn Má Hồng Khoáng Chất",
        price: "1,780,000₫",
        rating: 5,
        reviewsCount: 2,
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "tr-4",
        name: "Kem Nền Khoáng Chất Full Coverage",
        price: "1,690,000₫ – 1,990,000₫",
        rating: 5,
        reviewsCount: 5,
        colors: ["#2d7a89", "#f3d2c1", "#f8e5d8"],
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "tr-5",
        name: "Kem Lót Kiềm Dầu Poreless",
        price: "3,300,000₫",
        rating: 5,
        reviewsCount: 2,
        image:
          "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "tr-6",
        name: "Kem Dưỡng Ẩm Chuyên Sâu Aveeno",
        price: "3,000,000₫",
        rating: 5,
        reviewsCount: 4,
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
      }
    ],
    bottomWideBanners: [
      {
        id: "bwb-1",
        title: "Kem dưỡng ẩm",
        subtitle: "Ban đêm",
        priceText: "890,000₫",
        bgClass: "bg-[#f5eee6]",
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "bwb-2",
        title: "Combo",
        subtitle: "Kem dưỡng da",
        priceText: "1,490,000₫",
        bgClass: "bg-[#e8f3f4]",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
};
