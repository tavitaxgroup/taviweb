import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat7CategoryCircle {
  id: string;
  name: string;
  filterKey: string;
  image: string;
}

export interface NoiThat7ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  brandName: string;
  sectionKey: "flash-sale" | "moi-nhat" | "sua-hat" | "noi-chien" | "ban-chay";
  categoryName: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
  image: string;
}

export interface NoiThat7PromoCard {
  id: string;
  eyebrow: string;
  title: string;
  ctaText: string;
  image: string;
  accentBg: string;
}

export interface NoiThat7HotspotItem {
  id: string;
  title: string;
  price: string;
  description: string;
  topPercent: number;
  leftPercent: number;
  image: string;
}

export interface NoiThat7TemplateData extends ClonedTemplateBaseData {
  subHeroBanners: Array<{
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    discountText: string;
    image: string;
    theme: "maroon" | "royal";
  }>;
  categoryCircles: NoiThat7CategoryCircle[];
  flashSaleTimerText: string;
  products: NoiThat7ProductItem[];
  bentoPromos: NoiThat7PromoCard[];
  steamerShowcaseBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  };
  airFryerShowcaseBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  };
  kitchenHotspotScene: {
    backgroundImage: string;
    hotspots: NoiThat7HotspotItem[];
  };
  dualBottomBanners: Array<{
    id: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  qualityHeading: string;
  qualityDescription: string;
  newsletterPromo: {
    eyebrow: string;
    title: string;
    discount: string;
    heading: string;
    note: string;
    image: string;
  };
  servicePolicies: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
}

export const noiThat7DefaultData: NoiThat7TemplateData = {
  business: {
    name: "MOKITCHEN",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 886 779"],
    email: ["info@themona.global", "cskh@mokitchen.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:30",
    rating: 4.9,
    reviewCount: 540,
    experienceYears: "10+",
    aboutTitle: "Nội Thất Tiện Ích & Thiết Bị Bếp Cao Cấp",
    aboutText: [
      "MOKITCHEN tự hào là hệ thống showroom chuyên cung cấp nội thất phòng bếp thông minh, thiết bị gia dụng hiện đại và phụ kiện tủ bếp chuẩn châu Âu.",
      "Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ 24/7. Với tỷ lệ giải quyết vấn đề thành công đạt 99.9%, chúng tôi luôn lắng nghe và đồng hành cùng bạn kiến tạo gian bếp ấm cúng, tiện nghi hơn mỗi ngày."
    ]
  },
  hero: {
    eyebrow: "LỄ HỘI MUA SẮM NỘI THẤT & BẾP HIỆN ĐẠI 11.11",
    title: "Nâng Tầm Gian Bếp Việt Hiện Đại & Tiện Nghi",
    subtitle:
      "Ưu đãi lên đến 50% trọn bộ thiết bị nhà bếp thông minh, nồi chiên không dầu, bộ nồi Inox 304 và phụ kiện tủ bếp cao cấp.",
    ctaText: "SĂN ƯU ĐÃI NGAY",
    ctaLink: "#san-sale",
    secondaryCtaText: "XEM DANH MỤC",
    secondaryCtaLink: "#danh-muc",
    backgroundImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  subHeroBanners: [
    {
      id: "sub-1",
      badge: "FLASH SALE",
      title: "Gia Dụng Thông Minh Cho Căn Bếp Hiện Đại",
      subtitle: "Giảm sâu duy nhất hôm nay cho dòng nồi chiên & bếp từ âm",
      discountText: "GIẢM ĐẾN 35%",
      image:
        "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=80",
      theme: "maroon"
    },
    {
      id: "sub-2",
      badge: "BLACK FRIDAY SALE",
      title: "Trọn Bộ Thiết Bị Nội Thất Bếp Châu Âu",
      subtitle: "Miễn phí lắp đặt & bảo hành chính hãng 36 tháng tận nhà",
      discountText: "TIẾT KIỆM 40%",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80",
      theme: "royal"
    }
  ],
  categoryCircles: [
    {
      id: "cat-1",
      name: "Ấm Đa Năng Cao Cấp",
      filterKey: "tat-ca",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-2",
      name: "Đồ Gia Dụng",
      filterKey: "flash-sale",
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-3",
      name: "Lò Nướng",
      filterKey: "moi-nhat",
      image:
        "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-4",
      name: "Máy Làm Sữa Hạt",
      filterKey: "sua-hat",
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-5",
      name: "Máy Nhồi Bột",
      filterKey: "ban-chay",
      image:
        "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-6",
      name: "Máy Xay Sinh Tố",
      filterKey: "sua-hat",
      image:
        "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-7",
      name: "Nồi Áp Suất",
      filterKey: "noi-chien",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80"
    }
  ],
  flashSaleTimerText: "Kết thúc sau: 48h : 20p : 29s",
  products: [
    {
      id: "mk-1",
      title: "Chảo Chống Dính Đáy Từ MONA PRO 28cm",
      price: "1,590,000₫",
      oldPrice: "2,390,000₫",
      discountBadge: "-33%",
      rating: 5,
      reviewCount: 12,
      brandName: "DYSON",
      sectionKey: "flash-sale",
      categoryName: "Dụng Cụ Nấu Ăn",
      dimensions: "Đường kính 28cm x Sâu 6.5cm",
      material: "Hợp kim nhôm đúc 5 lớp phủ đá Granite chống dính chuẩn Đức",
      warranty: "24 tháng chính hãng",
      description:
        "Chảo chống dính đáy từ MONA PRO dẫn nhiệt nhanh, dùng tốt trên mọi loại bếp từ và bếp hồng ngoại, an toàn tuyệt đối cho sức khỏe.",
      image:
        "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mk-2",
      title: "Nồi Chiên Không Dầu Điện Tử MONA600 6.5L",
      price: "1,400,000₫",
      oldPrice: "1,550,000₫",
      discountBadge: "-10%",
      rating: 5,
      reviewCount: 19,
      brandName: "SHARP",
      sectionKey: "flash-sale",
      categoryName: "Nồi Chiên Không Dầu",
      dimensions: "Dung tích 6.5 Lít — Công suất 1800W",
      material: "Vỏ Inox 304 chống bám vân tay, lòng nồi phủ Ceramic",
      warranty: "24 tháng tận nhà",
      description:
        "Công nghệ luân chuyển khí nóng Rapid Air 360 độ giúp giảm đến 85% lượng dầu mỡ thừa, giữ trọn hương vị giòn rụm bên ngoài mềm ngọt bên trong.",
      image:
        "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mk-3",
      title: "Nồi Chiên Không Dầu Kiêm Lò Nướng MONA777 12L",
      price: "1,100,000₫",
      oldPrice: "1,260,000₫",
      discountBadge: "-13%",
      rating: 5,
      reviewCount: 28,
      brandName: "BOSCH",
      sectionKey: "flash-sale",
      categoryName: "Nồi Chiên Không Dầu",
      dimensions: "Dung tích 12 Lít — Cửa kính cường lực 2 lớp",
      material: "Khoang lò Inox 304 kèm 5 phụ kiện quay nướng",
      warranty: "24 tháng chính hãng",
      description:
        "Tích hợp 10 chế độ nướng tự động với cửa kính quan sát trực quan, dễ dàng quay gà nguyên con hoặc nướng bánh cho gia đình 4-6 người.",
      image:
        "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mk-4",
      title: "Lò Nướng Điện MONA K4602 Đối Lưu 46 Lít Đa Năng",
      price: "1,340,000₫",
      oldPrice: "1,450,000₫",
      discountBadge: "-8%",
      rating: 5,
      reviewCount: 15,
      brandName: "TEFAL",
      sectionKey: "flash-sale",
      categoryName: "Lò Nướng Đa Năng",
      dimensions: "Dung tích 46 Lít — 55 x 40 x 36 cm",
      material: "Thép sơn tĩnh điện đen mờ, thanh nhiệt kép Inox",
      warranty: "36 tháng chính hãng",
      description:
        "Lò nướng đối lưu dung tích lớn 46 lít giúp nhiệt lượng tỏa đều khắp khoang lò, lý tưởng cho nướng bánh mì, pizza và thịt quay gia đình.",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mk-5",
      title: "Nồi Hấp Điện Đa Năng 3 Tầng MONA560",
      price: "1,240,000₫",
      oldPrice: "1,490,000₫",
      discountBadge: "-17%",
      rating: 5,
      reviewCount: 21,
      brandName: "BOSCH",
      sectionKey: "sua-hat",
      categoryName: "Thiết Bị Hấp & Sữa Hạt",
      dimensions: "Dung tích tổng 18 Lít — 3 tầng tháo rời",
      material: "Khay hấp nhựa nguyên sinh PP chịu nhiệt & đế Inox",
      warranty: "24 tháng chính hãng",
      description:
        "Tạo hơi nhiệt siêu tốc chỉ trong 15 giây giúp giữ trọn vitamin và khoáng chất tự nhiên trong rau củ, hải sản và dimsum.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mk-6",
      title: "Nồi Hấp Thủy Nhiệt & Làm Sữa Hạt Đa Năng",
      price: "1,433,000₫",
      oldPrice: "1,680,000₫",
      discountBadge: "-15%",
      rating: 5,
      reviewCount: 34,
      brandName: "TEFAL",
      sectionKey: "sua-hat",
      categoryName: "Thiết Bị Hấp & Sữa Hạt",
      dimensions: "Dung tích 10 Lít — Bảng điều khiển cảm ứng Việt hóa",
      material: "Thủy tinh Borosilicate dày 8mm kết hợp mâm nhiệt gốm",
      warranty: "24 tháng chính hãng",
      description:
        "Thiết kế sang trọng đặt ngay tại bàn ăn, kết hợp hoàn hảo giữa lẩu hơi thủy nhiệt lành mạnh và chế biến cháo dưỡng sinh.",
      image:
        "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=80"
    }
  ],
  bentoPromos: [
    {
      id: "bp-1",
      eyebrow: "Hiện đại và tiện nghi",
      title: "Bếp Nhà Hiện Đại",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80",
      accentBg: "#eef2f5"
    },
    {
      id: "bp-2",
      eyebrow: "Khuyến Mãi Cực Lớn",
      title: "Chất Lượng Cao, Giá Ưu Đãi",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=700&q=80",
      accentBg: "#f5efeb"
    },
    {
      id: "bp-3",
      eyebrow: "Thiết kế đẳng cấp",
      title: "Nội Thất Tinh Tế",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80",
      accentBg: "#f3f4f6"
    },
    {
      id: "bp-4",
      eyebrow: "Tiện nghi và an toàn",
      title: "Nội Thất Bếp Đẳng Cấp Tiện Nghi",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      accentBg: "#eef4f0"
    },
    {
      id: "bp-5",
      eyebrow: "Thiết kế đẳng cấp",
      title: "Phụ Kiện Bếp Tinh Tế",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=700&q=80",
      accentBg: "#f4f4f6"
    },
    {
      id: "bp-6",
      eyebrow: "Hiện đại và tiện nghi",
      title: "Tủ Bếp & Gia Dụng Xanh",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=700&q=80",
      accentBg: "#eff3f6"
    }
  ],
  steamerShowcaseBanner: {
    eyebrow: "THIẾT KẾ ĐỘC ĐÁO, CHẤT LƯỢNG CAO CẤP",
    title: "Bộ Nội Thất Bếp Tinh Tế và Hiện Đại",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80"
  },
  airFryerShowcaseBanner: {
    eyebrow: "THƯỞNG THỨC MÓN ĂN NGON",
    title: "Nồi Chiên Không Dầu Tiện Lợi",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80"
  },
  kitchenHotspotScene: {
    backgroundImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    hotspots: [
      {
        id: "hs-1",
        title: "Nồi hấp MONA560",
        price: "1,240,000₫",
        description: "Bộ nồi Inox 304 đáy từ 5 lớp giữ nhiệt vượt trội",
        topPercent: 48,
        leftPercent: 52,
        image:
          "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "hs-2",
        title: "Chảo Chống Dính MONA PRO",
        price: "1,590,000₫",
        description: "Chảo chống dính vân đá siêu bền dùng cho bếp từ",
        topPercent: 68,
        leftPercent: 32,
        image:
          "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "hs-3",
        title: "Bộ Xay Tiêu Gỗ Sồi Tự Nhiên",
        price: "380,000₫",
        description: "Lõi nghiền gốm Ceramic điều chỉnh độ mịn linh hoạt",
        topPercent: 62,
        leftPercent: 71,
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "hs-4",
        title: "Thớt Gỗ Teak Nguyên Khối",
        price: "650,000₫",
        description: "Gỗ Teak tự nhiên kháng khuẩn, hạn chế vết cắt",
        topPercent: 54,
        leftPercent: 84,
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },
  dualBottomBanners: [
    {
      id: "dbb-1",
      title: "BỘ NỒI INOX VỮNG CHẮC VÀ BỀN BỈ",
      ctaText: "XEM TẤT CẢ",
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "dbb-2",
      title: "BỘ ĐỒ DÙNG NHÀ BẾP THÔNG MINH",
      ctaText: "XEM TẤT CẢ",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80"
    }
  ],
  qualityHeading: "DỤNG CỤ NẤU ĂN CHẤT LƯỢNG",
  qualityDescription:
    "Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ 24/7. Với tỷ lệ giải quyết vấn đề thành công đạt 95%, chúng tôi luôn lắng nghe và đồng hành cùng bạn trong mọi thắc mắc. Hãy cùng chúng tôi biến không gian bếp của bạn trở nên đẹp hơn và tiện nghi hơn mỗi ngày.",
  stats: [
    { id: "st-1", number: "28K+", title: "Khách hàng tin dùng" },
    { id: "st-2", number: "99.9%", title: "Đảm bảo hài lòng" },
    { id: "st-3", number: "85K+", title: "Sản phẩm đã bán" },
    { id: "st-4", number: "20+", title: "Chi nhánh toàn quốc" }
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Anh Tuấn",
      role: "Khách hàng tại TP.HCM",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content:
        "Thật tuyệt vời! Sản phẩm đẹp và chất lượng cao, dịch vụ giao hàng nhanh chóng và chu đáo. Rất ấn tượng với sự đa dạng và uy tín của showroom nội thất bếp này."
    },
    {
      id: "tm-2",
      author: "Linh Chi",
      role: "Khách hàng tại Hà Nội",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      content:
        "Mình đã mua nhiều thiết bị bếp từ website này và rất hài lòng. Sản phẩm chính hãng, giá cả phải chăng và giao lắp tận nơi. Chắc chắn sẽ quay lại ủng hộ thêm!"
    },
    {
      id: "tm-3",
      author: "Đức Huy",
      role: "Khách hàng tại Đà Nẵng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content:
        "Sản phẩm đẹp, chất lượng tốt. Mình rất ấn tượng với thiết kế tinh tế của bộ nồi Inox và nồi chiên không dầu. Nhân viên tư vấn kỹ thuật rất nhiệt tình và chu đáo."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "2 dòng máy ép chậm mini được yêu thích nhất 2026",
      date: "18/09/2026",
      category: "Kiến Thức",
      excerpt:
        "Khám phá thiết kế nhỏ gọn, dễ tháo lắp vệ sinh và khả năng giữ trọn 98% dưỡng chất từ rau củ quả tươi cho gia đình hiện đại.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "6 lưu ý khi chọn mua thiết bị bếp cho gia đình 3-4 người",
      date: "15/09/2026",
      category: "Kiến Thức",
      excerpt:
        "Bí quyết tối ưu diện tích mặt bàn bếp với các thiết bị đa năng, tiết kiệm điện năng và đồng bộ màu sắc nội thất phòng ăn.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      title: "Hướng dẫn vệ sinh và bảo quản dụng cụ nấu ăn Inox luôn sáng bóng",
      date: "10/09/2026",
      category: "Kiến Thức",
      excerpt:
        "Mẹo làm sạch vết ố nhiệt trên nồi chảo Inox 304 bằng nguyên liệu tự nhiên có sẵn trong gian bếp giúp kéo dài tuổi thọ sản phẩm.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80"
    }
  ],
  newsletterPromo: {
    eyebrow: "Đồng hành cùng tổ ấm Việt",
    title: "KHUYẾN MÃI GIỚI HẠN",
    discount: "15%",
    heading: "NHẬN ƯU ĐÃI",
    note: "*Đăng ký ngay để nhận tin tức mới nhất từ chúng tôi.",
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80"
  },
  servicePolicies: [
    {
      id: "sp-1",
      title: "Miễn phí vận chuyển",
      subtitle: "Đơn hàng trên 5 triệu"
    },
    {
      id: "sp-2",
      title: "Hỗ trợ khách hàng",
      subtitle: "Tư vấn Online 24/7"
    },
    {
      id: "sp-3",
      title: "Bảo mật thanh toán",
      subtitle: "100% thanh toán an toàn"
    },
    {
      id: "sp-4",
      title: "Đổi trả & hoàn tiền",
      subtitle: "Hoàn trả trong 5 ngày"
    }
  ]
};

export default noiThat7DefaultData;
