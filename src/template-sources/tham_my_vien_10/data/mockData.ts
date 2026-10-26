import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrendBlendProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  isSale?: boolean;
  image: string;
  description: string;
}

export interface TrendBlendBannerCard {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
}

export interface TrendBlendCategoryColumn {
  heading: string;
  links: string[];
}

export interface TrendBlendDiscoverySection {
  title: string;
  description: string;
  ctaText: string;
  mainImage: string;
  overlapImage: string;
  smallThumbnails: string[];
}

export interface TrendBlendData extends ClonedTemplateBaseData {
  navigation: Array<{ label: string; href: string }>;
  topUtilityLinks: string[];
  heroStampText: string;
  heroSpotlightProduct: TrendBlendProduct;
  heroBottomBanner: TrendBlendBannerCard;
  heroRightTopBanner: TrendBlendBannerCard;
  heroRightBottomBanner: TrendBlendBannerCard;
  heroRightTextCallout: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  newProductsTitle: string;
  newProducts: TrendBlendProduct[];
  featuredCategoriesSection: {
    title: string;
    description: string;
    columns: TrendBlendCategoryColumn[];
    promoBanner: {
      eyebrow: string;
      title: string;
      ctaText: string;
      image: string;
    };
  };
  discoverySection: TrendBlendDiscoverySection;
  countdownDealSection: {
    eyebrow: string;
    title: string;
    ctaText: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    dealProducts: TrendBlendProduct[];
  };
  instagramSection: {
    handle: string;
    caption: string;
    photos: string[];
  };
  newsletterSection: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
  footerColumns: {
    links: string[];
    categories: string[];
    events: string[];
  };
}

export const thamMyVien10DefaultData: TrendBlendData = {
  business: {
    name: "TrendBlend Beauty",
    tagline: "Viện Thẩm Mỹ & Tạo Hình Phong Cách TrendBlend",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "cskh@trendblend.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    workingHours: "08:30 - 20:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1420,
    experienceYears: "10+",
    aboutTitle: "Khám Phá Sự Kì Diệu Của Thẩm Mỹ & Tạo Hình Phong Cách",
    aboutText: [
      "TrendBlend Beauty kết hợp hài hòa giữa công nghệ trẻ hóa da chuẩn Y khoa, tạo hình thẩm mỹ tinh tế và các dòng dược mỹ phẩm – hương thơm cao cấp.",
      "Mỗi phác đồ làm đẹp và bộ sản phẩm chăm sóc cá nhân tại TrendBlend đều được thiết kế riêng nhằm tôn vinh khí chất thanh lịch, rạng rỡ của phụ nữ hiện đại."
    ],
    highlights: [
      "Đội ngũ bác sĩ tạo hình & da liễu trên 10 năm kinh nghiệm",
      "Dược mỹ phẩm & nước hoa nhập khẩu chính hãng 100%",
      "Chính sách hoàn trả & bảo hành dịch vụ trong 15 ngày"
    ]
  },
  navigation: [
    { label: "Trang chủ", href: "#top" },
    { label: "Giới thiệu", href: "#kham-pha" },
    { label: "Sản phẩm", href: "#san-pham-moi" },
    { label: "Ưu đãi", href: "#uu-dai-gioi-han" },
    { label: "Tin tức", href: "#instagram-feed" },
    { label: "Liên hệ", href: "#footer-contact" }
  ],
  topUtilityLinks: ["Tin tức", "Đơn hàng", "Liên hệ", "Địa chỉ"],
  hero: {
    eyebrow: "VIỆN THẨM MỸ & TẠO HÌNH PHONG CÁCH",
    title: "Chương trình ưu đãi\nGiảm ngay 50%",
    subtitle:
      "Tận hưởng đặc quyền làm đẹp toàn diện: Trẻ hóa làn da chuẩn Hàn, tạo hình đường nét thanh tú và sở hữu bộ sưu tập mỹ phẩm xu hướng mới nhất.",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
  },
  heroStampText: "NÂNG TẦM NHAN SẮC • TRENDBLEND BEAUTY CLINIC •",
  heroSpotlightProduct: {
    id: "spot-1",
    name: "TINH CHẤT CĂNG BÓNG DA GLASS SKIN AMPULE",
    category: "Chăm sóc chuyên sâu",
    price: "1,299,000 ₫",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    description:
      "Tinh chất cô đặc Hyaluronic Acid đa phân tử kết hợp Niacinamide giúp làn da căng mướt, sáng hồng ngay sau 7 ngày."
  },
  heroBottomBanner: {
    id: "hb-women",
    title: "Vẻ Đẹp Phái Nữ",
    subtitle: "Tôn vinh khí chất thanh lịch & đường nét kiêu sa!",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
  },
  heroRightTopBanner: {
    id: "hr-top",
    title: "Tạo Hình Phong Cách",
    subtitle: "Định hình thần thái sang trọng & cuốn hút!",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  heroRightBottomBanner: {
    id: "hr-bottom",
    title: "Đại Tiệc Làm Đẹp Mùa Hè",
    subtitle: "Đánh thức làn da tươi mát với ưu đãi tiết kiệm tới 50%!",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
  },
  heroRightTextCallout: {
    title: "Sản phẩm & Liệu trình theo xu hướng mới nhất",
    subtitle: "Khuyến mãi ưu đãi đặc quyền!",
    ctaText: "MUA NGAY"
  },
  newProductsTitle: "Sản phẩm mới",
  newProducts: [
    {
      id: "np-1",
      name: "SERUM TRẺ HÓA COLLAGEN TƯƠI ĐA TẦNG",
      category: "Tinh chất trẻ hóa",
      price: "1,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      description:
        "Bổ sung sợi Collagen thủy phân giúp làm đầy rãnh cười và tăng độ đàn hồi da."
    },
    {
      id: "np-2",
      name: "TÚI ĐỰNG MỸ PHẨM DA MỀM CAO CẤP",
      category: "Phụ kiện làm đẹp",
      price: "1,499,000 ₫",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế thanh lịch, chống thấm nước, bảo quản trọn bộ đồ trang điểm & skincare."
    },
    {
      id: "np-3",
      name: "NƯỚC HOA VIOLET BLOSSOM 90 ML",
      category: "Nước hoa Pháp",
      price: "599,000 ₫",
      oldPrice: "799,000 ₫",
      isSale: true,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      description:
        "Nốt hương hoa tím Pháp quyện xạ hương trắng thanh khiết, lưu hương suốt 12 giờ."
    },
    {
      id: "np-4",
      name: "THANH LĂN MASSAGE NÂNG CƠ ĐÁ THẠCH ANH",
      category: "Dụng cụ tạo hình",
      price: "599,000 ₫",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
      description:
        "Hỗ trợ lưu thông tuần hoàn máu, giảm sưng bọng mắt và thon gọn đường viền hàm V-line."
    },
    {
      id: "np-5",
      name: "BỘ ĐÔI DƯỠNG THỂ TRẮNG HỒNG TOÀN THÂN",
      category: "Chăm sóc cơ thể",
      price: "1,799,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      description:
        "Kết hợp tẩy tế bào chết hạt mơ và sữa dưỡng thể Arbutin giúp da bật tông mịn màng."
    },
    {
      id: "np-6",
      name: "KEM DƯỠNG PHỤC HỒI DA SAU LASER & PEEL",
      category: "Dược mỹ phẩm Y khoa",
      price: "1,690,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description:
        "Làm dịu tức thì làn da nhạy cảm với Panthenol B5 10%, Ceramide và chiết xuất rau má."
    },
    {
      id: "np-7",
      name: "TINH DẦU THẢO MỘC THƯ GIÃN AROMA SPA",
      category: "Trị liệu hương thơm",
      price: "1,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      description:
        "Chiết xuất oải hương và cam bergamot nguyên chất giúp giải tỏa căng thẳng, ngủ ngon sâu."
    },
    {
      id: "np-8",
      name: "SON KEM LÌ DƯỠNG MÔI RUBY VELVET ĐỎ ĐẤT",
      category: "Trang điểm cao cấp",
      price: "999,000 ₫",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
      description:
        "Giàu tinh dầu tầm xuân giúp làm đầy rãnh môi, lên màu chuẩn sang trọng không khô môi."
    },
    {
      id: "np-9",
      name: "MẶT NẠ CẤP ẨM & NÂNG CƠ VÀNG 24K (HỘP 10 MIẾNG)",
      category: "Mặt nạ chuyên sâu",
      price: "1,199,000 ₫",
      oldPrice: "1,299,000 ₫",
      isSale: true,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
      description:
        "Tinh chất vàng 24K nano hỗ trợ thải độc tố, làm mờ nếp nhăn li ti và bừng sáng sắc da."
    },
    {
      id: "np-10",
      name: "LIỆU TRÌNH CẤY HA CĂNG BÓNG MULGWANG HÀN QUỐC",
      category: "Liệu trình thẩm mỹ",
      price: "999,000 ₫",
      oldPrice: "1,299,000 ₫",
      isSale: true,
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=600&q=80",
      description:
        "Voucher trải nghiệm buổi đầu cấy tinh chất HA đa tầng kết hợp chiếu ánh sáng sinh học."
    }
  ],
  featuredCategoriesSection: {
    title: "Danh mục\nnổi bật",
    description:
      "Hệ thống danh mục giải pháp thẩm mỹ công nghệ cao, dược mỹ phẩm chính hãng và phụ kiện định hình phong cách tại TrendBlend Beauty.",
    columns: [
      {
        heading: "Thẩm mỹ & Chăm sóc da",
        links: [
          "Trẻ hóa nâng cơ Thermage",
          "Cấy tinh chất Meso căng bóng",
          "Điều trị nám & sắc tố Laser",
          "Tạo hình khuôn mặt V-Line",
          "Chăm sóc da chuẩn Y khoa"
        ]
      },
      {
        heading: "Mỹ phẩm & Phong cách",
        links: [
          "Dược mỹ phẩm phục hồi B5",
          "Nước hoa Pháp chính hãng",
          "Trang điểm cao cấp",
          "Chăm sóc dưỡng trắng toàn thân",
          "Máy làm đẹp cá nhân tại nhà"
        ]
      }
    ],
    promoBanner: {
      eyebrow: "ĐẶC QUYỀN LÀM ĐẸP",
      title: "Ưu Đãi Liệu Trình & Mỹ Phẩm Giảm Sâu Tới 50%!",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    }
  },
  discoverySection: {
    title: "Khám phá sự kì diệu của thẩm mỹ & phong cách",
    description:
      "Tại TrendBlend Beauty, chúng tôi tin rằng vẻ đẹp hoàn mỹ nhất là sự kết hợp giữa làn da khỏe mạnh từ bên trong và phong cách tự tin tỏa sáng bên ngoài. Đội ngũ chuyên gia luôn đồng hành tư vấn giải pháp cá nhân hóa cho riêng bạn.",
    ctaText: "Tìm hiểu thêm",
    mainImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    overlapImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    smallThumbnails: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
    ]
  },
  countdownDealSection: {
    eyebrow: "ƯU ĐÃI GIỚI HẠN",
    title: "Chương trình giảm giá",
    ctaText: "Đặt hàng ngay",
    countdown: {
      days: "605",
      hours: "08",
      minutes: "15",
      seconds: "51"
    },
    dealProducts: [
      {
        id: "dp-1",
        name: "SERUM TRẺ HÓA COLLAGEN TƯƠI ĐA TẦNG",
        category: "Tinh chất",
        price: "1,299,000 ₫",
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        description: "Tinh chất Collagen thủy phân căng bóng da."
      },
      {
        id: "dp-2",
        name: "TÚI ĐỰNG MỸ PHẨM DA MỀM CAO CẤP",
        category: "Phụ kiện",
        price: "1,499,000 ₫",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
        description: "Túi đựng mỹ phẩm chống thấm thanh lịch."
      },
      {
        id: "dp-3",
        name: "NƯỚC HOA VIOLET BLOSSOM 90 ML",
        category: "Nước hoa",
        price: "599,000 ₫",
        oldPrice: "799,000 ₫",
        isSale: true,
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
        description: "Nước hoa Pháp hương hoa tím quyến rũ."
      }
    ]
  },
  instagramSection: {
    handle: "@trendblend.beauty",
    caption:
      "Cập nhật mỗi ngày những khoảnh khắc biến hóa nhan sắc, bí quyết dưỡng da chuẩn Hàn và xu hướng làm đẹp thịnh hành nhất.",
    photos: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
    ]
  },
  testimonials: [
    {
      id: "rev-1",
      name: "Chị Nguyễn Minh Thư",
      role: "@minhthu.beauty",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Trải nghiệm liệu trình cấy căng bóng Glass Skin và bộ serum phục hồi tại TrendBlend Beauty thực sự vượt mong đợi. Da mình sáng mịn, đều màu chỉ sau 2 tuần và các chuyên viên tư vấn cực kỳ tận tâm!"
    },
    {
      id: "rev-2",
      name: "Chị Trần Bảo Ngọc",
      role: "@baongoc.style",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Nước hoa Violet Blossom lưu hương rất lâu và sang. Đặt hàng online giao nhanh trong ngày, đóng gói chỉn chu như một hộp quà cao cấp."
    },
    {
      id: "rev-3",
      name: "Chị Lê Hoàng Yến",
      role: "@hoangyen.glow",
      avatar:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Không gian viện thẩm mỹ hiện đại, sạch chuẩn Y khoa. Bác sĩ soi da kỹ lưỡng và lên phác đồ trẻ hóa rất hợp với làn da nhạy cảm của mình."
    }
  ],
  newsletterSection: {
    eyebrow: "BẢN TIN LÀM ĐẸP",
    title: "Đăng ký và nhận giảm giá 10%",
    description:
      "Nhận ngay voucher ưu đãi 10% cho đơn hàng dược mỹ phẩm hoặc liệu trình spa đầu tiên cùng cẩm nang chăm sóc sắc đẹp hàng tuần.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
  },
  footerColumns: {
    links: [
      "Hỗ trợ khách hàng",
      "Chính sách bảo mật",
      "Chính sách mua hàng",
      "Chính sách thanh toán",
      "Chính sách hoàn trả",
      "Điều khoản và điều kiện"
    ],
    categories: [
      "Trang chủ",
      "Giới thiệu",
      "Sản phẩm",
      "Tin tức",
      "Liên hệ"
    ],
    events: [
      "Sự kiện phổ biến",
      "Sự kiện giảm giá",
      "Mùa hè nổi bật",
      "Bộ sưu tập mới",
      "Đặc quyền hội viên"
    ]
  }
};
