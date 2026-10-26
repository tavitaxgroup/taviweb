import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym6Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  rating?: number;
  image: string;
  category: "bestseller" | "newest" | "sale" | "accessory";
}

export interface PhongGym6CategoryBanner {
  id: string;
  badge: string;
  title: string;
  buttonText: string;
  image: string;
}

export interface PhongGym6Data extends ClonedTemplateBaseData {
  heroPromo: {
    scriptTitle: string;
    mainTitle: string;
    voucherLeft: string;
    centerOffer: string;
    discountRight: string;
    ctaText: string;
    hotlineLabel: string;
    podiumImage: string;
  };
  trustBadges: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  galaxyPromo: {
    flashTag: string;
    title: string;
    image: string;
  };
  products: PhongGym6Product[];
  categoryBanners: PhongGym6CategoryBanner[];
  partnerLogos: string[];
}

export const phongGym6DefaultData: PhongGym6Data = {
  business: {
    name: "GoSporty",
    phone: ["0313728397", "1900 636 648"],
    email: ["cskh@gosporty.vn", "info@gosporty.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 22:00",
    rating: 4.9,
    reviewCount: 1680,
    aboutTitle: "Về GoSporty",
    aboutText: [
      "Chúng tôi cung cấp đồ và phụ kiện thể thao chất lượng, giúp bạn chinh phục đam mê thể thao mỗi ngày. Khám phá các sản phẩm của chúng tôi để nâng cao trải nghiệm tập luyện của bạn!"
    ],
    highlights: [
      "Vận chuyển siêu tốc khu vực toàn quốc",
      "Cam kết chính hãng 100%, đổi trả miễn phí 30 ngày",
      "Đầy đủ dụng cụ bóng đá, bóng chuyền, cầu lông, chạy bộ & Gym"
    ]
  },
  hero: {
    eyebrow: "Săn sale đại lễ",
    subtitle: "MIỄN PHÍ GIAO HÀNG TOÀN QUỐC",
    title: "KHÔNG LO VỀ GIÁ",
    description:
      "Siêu hội mua sắm trang thiết bị tập luyện, giày chạy bộ, phụ kiện Gym và bóng thể thao chính hãng ưu đãi đến 80%.",
    ctaText: "ĐẶT HÀNG NGAY",
    ctaLink: "#bestsellers",
    secondaryCtaText: "KHÁM PHÁ NGAY",
    secondaryCtaLink: "#newest",
    backgroundImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85"
  },
  heroPromo: {
    scriptTitle: "Săn sale đại lễ",
    mainTitle: "KHÔNG LO VỀ GIÁ",
    voucherLeft: "VOUCHER\n200K",
    centerOffer: "MUA 2\nTẶNG 1",
    discountRight: "GIẢM GIÁ\n80%",
    ctaText: "ĐẶT HÀNG NGAY",
    hotlineLabel: "MIỄN PHÍ GIAO HÀNG",
    podiumImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
  },
  trustBadges: [
    {
      id: "tb-1",
      title: "Vận chuyển SIÊU TỐC",
      subtitle: "Khu vực TOÀN QUỐC"
    },
    {
      id: "tb-2",
      title: "Bảo hành CHÍNH HÃNG",
      subtitle: "Đổi trả 30 NGÀY"
    },
    {
      id: "tb-3",
      title: "Thanh toán LINH HOẠT",
      subtitle: "Nhận hàng KIỂM TRA"
    },
    {
      id: "tb-4",
      title: "Tư vấn CHUYÊN SÂU",
      subtitle: "Hỗ trợ 24/7 TOÀN QUỐC"
    }
  ],
  galaxyPromo: {
    flashTag: "DUY NHẤT 8/8",
    title: "NGẬP TRÀN KHUYẾN MÃI",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80"
  },
  products: [
    // Best sellers (4)
    {
      id: "bs-1",
      name: "Quả bóng chuyền V100 cho người mới bắt đầu",
      price: "268.000 ₫",
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=600&q=80",
      category: "bestseller"
    },
    {
      id: "bs-2",
      name: "Băng tay bóng chuyền chuyên nghiệp - VAP 100",
      price: "239.000 ₫",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
      category: "bestseller"
    },
    {
      id: "bs-3",
      name: "Quả bóng chuyền V100 Soft êm tay cho thiếu niên",
      price: "339.000 ₫",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
      category: "bestseller"
    },
    {
      id: "bs-4",
      name: "Quả bóng chuyền bãi biển cỡ 5 - BV100",
      oldPrice: "289.000 ₫",
      price: "229.000 ₫",
      discountBadge: "-21%",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
      category: "bestseller"
    },
    // Newest / Sale / Accessories (12)
    {
      id: "prd-1",
      name: "Quả bóng đá trẻ em cỡ 5 trọng lượng nhẹ",
      oldPrice: "349.000 ₫",
      price: "319.000 ₫",
      discountBadge: "-9%",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-2",
      name: "Quả bóng đá Sunny 300 cỡ 4 sân cỏ nhân tạo",
      price: "128.000 ₫",
      image:
        "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-3",
      name: "Quả bóng đá cỡ 5 - Phiên bản Tuyển Pháp",
      price: "249.000 ₫",
      image:
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-4",
      name: "Giày lặn & thể thao nước Aquashoe 120",
      oldPrice: "347.000 ₫",
      price: "299.000 ₫",
      discountBadge: "-14%",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-5",
      name: "Giày đi bộ & chạy bộ nam - Be Geared Up",
      oldPrice: "279.000 ₫",
      price: "256.000 ₫",
      discountBadge: "-8%",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-6",
      name: "Balo dã ngoại & tập Gym 10L - Arpenaz NH100",
      price: "356.000 ₫",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-7",
      name: "Balo du lịch dã ngoại 30L - NH Arpenaz 100",
      price: "414.000 ₫",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-8",
      name: "Băng bảo vệ đầu gối trái/phải gia cố hai bên",
      price: "199.000 ₫",
      image:
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-9",
      name: "Đai đeo hông chạy bộ cơ bản đựng điện thoại",
      price: "210.000 ₫",
      image:
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-10",
      name: "Vợt Pickleball sợi Carbon cao cấp chuẩn thi đấu",
      oldPrice: "957.000 ₫",
      price: "889.000 ₫",
      discountBadge: "-7%",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-11",
      name: "Dây nhảy thể lực tay cầm xốp êm ái - 500",
      oldPrice: "260.000 ₫",
      price: "219.000 ₫",
      discountBadge: "-16%",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    },
    {
      id: "prd-12",
      name: "Bộ 2 vợt cầu lông BR 190 kèm túi đựng tiện lợi",
      price: "966.000 ₫ – 992.000 ₫",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
      category: "newest"
    }
  ],
  categoryBanners: [
    {
      id: "cat-1",
      badge: "SALE ĐẾN 50%",
      title: "Phụ kiện thể thao",
      buttonText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-2",
      badge: "SALE ĐẾN 50%",
      title: "Quần áo",
      buttonText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-3",
      badge: "SALE ĐẾN 50%",
      title: "Chạy bộ",
      buttonText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=700&q=80"
    }
  ],
  news: [
    {
      id: "n-1",
      title: "Cách Tạo Động Lực Để Tập Thể Dục Với Trang Phục Thể Thao Đẹp",
      date: "23/11/2025",
      category: "Góc Tập Luyện",
      excerpt:
        "Lựa chọn một bộ đồ tập thoáng khí, co giãn 4 chiều vừa vặn không chỉ giúp bạn thoải mái vận động mà còn tạo hứng khởi mỗi khi bước vào phòng tập...",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-2",
      title: "So Sánh Các Thương Hiệu Đồ Thể Thao Nổi Tiếng: Ai Là Người Chiến Thắng",
      date: "23/11/2025",
      category: "Đánh Giá Thiết Bị",
      excerpt:
        "Phân tích chi tiết độ bền, công nghệ đệm đế và mức giá của các dòng giày chạy bộ, phụ kiện thể thao được ưa chuộng nhất năm nay...",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-3",
      title: "Chọn Mua Balo Thể Thao: Những Tiêu Chí Quan Trọng Cần Biết",
      date: "23/11/2025",
      category: "Kinh Nghiệm Mua Sắm",
      excerpt:
        "Một chiếc balo thể thao chuẩn cần có ngăn đựng giày tách biệt, chất liệu trượt nước nhẹ và quai đeo trợ lực bảo vệ cột sống...",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "n-4",
      title: "Lợi Ích Của Việc Tập Thể Dục Thường Xuyên Đối Với Sức Khỏe",
      date: "23/11/2025",
      category: "Sức Khỏe & Đời Sống",
      excerpt:
        "Duy trì 30 phút vận động mỗi ngày giúp tăng cường tuần hoàn máu, cải thiện giấc ngủ sâu và giữ vóc dáng săn chắc bền vững...",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
    }
  ],
  partnerLogos: [
    "KIPSTA PRO",
    "KALENJI RUN",
    "DOMYOS FITNESS",
    "ARTENGO SPORT",
    "QUECHUA OUTDOOR"
  ]
};
