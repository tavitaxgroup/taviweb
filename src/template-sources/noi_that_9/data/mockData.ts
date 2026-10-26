import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat9HeroSlide {
  id: string;
  slideNumber: string;
  eyebrow: string;
  title: string;
  ctaText: string;
  mainImage: string;
  nextPreviewTitle: string;
  nextPreviewImage: string;
}

export interface NoiThat9ProductItem {
  id: string;
  title: string;
  price: string;
  hotBadge?: boolean;
  categoryKey: "ghe" | "ban" | "luu-tru" | "den" | "phu-kien";
  categoryName: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
  image: string;
}

export interface NoiThat9FeaturedSpotlight {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
}

export interface NoiThat9ExploreCategory {
  id: string;
  name: string;
  filterKey: "ghe" | "ban" | "luu-tru" | "den" | "phu-kien";
  image: string;
}

export interface NoiThat9TemplateData extends ClonedTemplateBaseData {
  freeShippingNotice: string;
  heroSlides: NoiThat9HeroSlide[];
  editorialSplitBanners: Array<{
    id: string;
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
    spanCols: "wide" | "narrow";
  }>;
  newsletterHeading: string;
  newsletterSubtext: string;
  allProductsSubtitle: string;
  products: NoiThat9ProductItem[];
  featuredSpotlights: NoiThat9FeaturedSpotlight[];
  exploreCategories: NoiThat9ExploreCategory[];
}

export const noiThat9DefaultData: NoiThat9TemplateData = {
  business: {
    name: "MONA DECOR",
    logo: "",
    phone: ["0313 728 397", "0909 778 899"],
    email: ["info@themona.global", "cskh@monadecor.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 09:00 - 21:00",
    rating: 4.9,
    reviewCount: 286,
    experienceYears: "12+",
    aboutTitle: "Showroom Nội Thất Hiện Đại & Thi Công Trọn Gói",
    aboutText: [
      "MONA DECOR kiến tạo không gian sống đương đại dựa trên triết lý tối giản Bắc Âu — tôn vinh đường nét mộc mạc của gỗ tự nhiên, ánh sáng ấm áp và công năng tinh tế.",
      "Chúng tôi đồng hành cùng gia chủ từ khâu tư vấn ý tưởng, sản xuất đồ rời theo yêu cầu đến thi công hoàn thiện nội thất căn hộ, biệt thự và studio."
    ]
  },
  hero: {
    eyebrow: "GHẾ",
    title: "Ghế Nhẹ MONA",
    subtitle:
      "Thiết kế khung gỗ sồi uốn cong thủ công thanh thoát, nhẹ nhàng và bền bỉ cho không gian phòng ăn đương đại.",
    ctaText: "MUA NGAY",
    ctaLink: "#cua-hang",
    secondaryCtaText: "KHÁM PHÁ THÊM",
    secondaryCtaLink: "#kham-pha",
    backgroundImage:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  freeShippingNotice: "Giao Hàng Miễn Phí Cho Đơn Hàng Trên 1.000.000 ₫",
  heroSlides: [
    {
      id: "hs-1",
      slideNumber: "02",
      eyebrow: "GHẾ",
      title: "Ghế Nhẹ MONA",
      ctaText: "MUA NGAY",
      mainImage:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85",
      nextPreviewTitle: "Ghế Lưới MONA",
      nextPreviewImage:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "hs-2",
      slideNumber: "03",
      eyebrow: "ĐÔN GỖ",
      title: "Ghế Lưới MONA",
      ctaText: "MUA NGAY",
      mainImage:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=85",
      nextPreviewTitle: "Ghế Bành Bắc Âu",
      nextPreviewImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "hs-3",
      slideNumber: "01",
      eyebrow: "PHÒNG KHÁCH",
      title: "Ghế Bành Bắc Âu",
      ctaText: "MUA NGAY",
      mainImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
      nextPreviewTitle: "Ghế Nhẹ MONA",
      nextPreviewImage:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80"
    }
  ],
  editorialSplitBanners: [
    {
      id: "eb-1",
      eyebrow: "PHỤ KIỆN",
      title: "Đế Đỡ Nến\nMàu Trắng",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
      spanCols: "wide"
    },
    {
      id: "eb-2",
      eyebrow: "GHẾ",
      title: "Ghế Xếp\nBằng Gỗ",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80",
      spanCols: "narrow"
    }
  ],
  newsletterHeading: "Đăng Ký Giảm Ngay 25%",
  newsletterSubtext: "Chỉ áp dụng cho lần đăng ký đầu tiên.",
  allProductsSubtitle:
    "Khám phá bộ sưu tập đồ nội thất chất lượng cao và đa dạng, mang đến không gian sống tuyệt vời cho ngôi nhà của bạn",
  products: [
    {
      id: "md-1",
      title: "Tượng Gỗ Trang Trí Bắc Âu",
      price: "325,000 ₫",
      categoryKey: "phu-kien",
      categoryName: "Phụ kiện trang trí",
      dimensions: "Cao 16cm x Rộng 14cm",
      material: "Gỗ Sồi Đan Mạch tiện thủ công mịn màng",
      warranty: "12 tháng chính hãng",
      description:
        "Phụ kiện decor gỗ sồi tự nhiên mang lại nét chấm phá ấm áp trên kệ sách, bàn trà hoặc bàn làm việc.",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-2",
      title: "Đèn Bàn Tối Giản Tribeca",
      price: "820,000 ₫",
      categoryKey: "den",
      categoryName: "Đèn trang trí",
      dimensions: "Cao 48cm x Đế 18cm",
      material: "Thép sơn tĩnh điện đen mờ kết hợp bóng Edison ấm",
      warranty: "24 tháng chính hãng",
      description:
        "Thiết kế hình học tối giản lấy cảm hứng từ studio kiến trúc New York, tạo ánh sáng dịu nhẹ cho góc đọc sách.",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-3",
      title: "Bình Giữ Nhiệt Bàn Trà To Go",
      price: "390,000 ₫",
      categoryKey: "phu-kien",
      categoryName: "Phụ kiện bàn ăn",
      dimensions: "Dung tích 500ml — Cao 21cm",
      material: "Inox 304 hai lớp chân không kèm dây đeo silicone",
      warranty: "12 tháng chính hãng",
      description:
        "Giữ nóng và lạnh lên đến 12 giờ với kiểu dáng tối giản chuẩn Đan Mạch.",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-4",
      title: "Ghế Ăn Gỗ Sồi Synnes",
      price: "2,250,000 ₫",
      hotBadge: true,
      categoryKey: "ghe",
      categoryName: "Ghế phòng ăn",
      dimensions: "Rộng 48cm x Sâu 49cm x Cao 80cm",
      material: "Gỗ Sồi uốn cong nhiều lớp phủ sơn mờ tự nhiên",
      warranty: "36 tháng chính hãng",
      description:
        "Tựa lưng gỗ uốn cong mềm mại ôm lấy lưng người ngồi, là biểu tượng của thiết kế Bắc Âu đương đại.",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-5",
      title: "Bộ Chổi & Ky Gỗ Sồi Thủ Công",
      price: "269,000 ₫",
      categoryKey: "phu-kien",
      categoryName: "Phụ kiện tiện ích",
      dimensions: "Dài 32cm x Rộng 22cm",
      material: "Cán gỗ Sồi tự nhiên kết hợp lông chổi thảo mộc mềm",
      warranty: "12 tháng chính hãng",
      description:
        "Giúp việc vệ sinh bàn ăn, mặt bàn làm việc và sofa trở nên nhẹ nhàng và thẩm mỹ.",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-6",
      title: "Ghế Đôn Gỗ Sồi 3 Chân Stool 60",
      price: "1,150,000 ₫",
      categoryKey: "ghe",
      categoryName: "Ghế & Đôn gỗ",
      dimensions: "Đường kính 38cm x Cao 44cm",
      material: "Chân gỗ Bạch Dương uốn chữ L, mặt ngồi phủ Laminate đen",
      warranty: "36 tháng chính hãng",
      description:
        "Có thể xếp chồng gọn gàng, dùng làm ghế ngồi bàn ăn hoặc bàn phụ đầu giường.",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-7",
      title: "Đồng Hồ Treo Tường Thép Tối Giản",
      price: "950,000 ₫",
      categoryKey: "phu-kien",
      categoryName: "Đồng hồ & Decor",
      dimensions: "Đường kính 30cm x Dày 4cm",
      material: "Mặt hợp kim nhôm аноdized xám bạc, máy Quartz kim trôi",
      warranty: "24 tháng chính hãng",
      description:
        "Vận hành êm ái tuyệt đối không tiếng tích tắc, phù hợp cho phòng ngủ và không gian làm việc yên tĩnh.",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "md-8",
      title: "Ghế Gỗ Đệm Da Odin",
      price: "2,450,000 ₫",
      categoryKey: "ghe",
      categoryName: "Ghế thiết kế",
      dimensions: "Rộng 52cm x Sâu 50cm x Cao 78cm",
      material: "Khung thép đen kết hợp tựa lưng gỗ Sồi và mặt nệm da",
      warranty: "36 tháng chính hãng",
      description:
        "Sự kết hợp cá tính giữa khung kim loại mảnh mai và tựa lưng gỗ sồi ấm áp.",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=700&q=80"
    }
  ],
  featuredSpotlights: [
    {
      id: "fs-1",
      title: "Đèn Thả Gỗ Nghệ Thuật Diva Smoked",
      subtitle: "Chế tác từ 32 nan gỗ sồi uốn lượn thủ công tạo hiệu ứng ánh sáng ấm áp",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fs-2",
      title: "Ghế Bành Thư Giãn Nordic Lounge",
      subtitle: "Khung gỗ tần bì nguyên khối kết hợp đệm vải bố dệt thủ công",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fs-3",
      title: "Bàn Ăn Gỗ Sồi Tự Nhiên Atelier",
      subtitle: "Tâm điểm gắn kết mọi bữa cơm gia đình trong không gian mở",
      ctaText: "KHÁM PHÁ NGAY",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85"
    }
  ],
  exploreCategories: [
    {
      id: "ec-1",
      name: "Ghế",
      filterKey: "ghe",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ec-2",
      name: "Bàn",
      filterKey: "ban",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ec-3",
      name: "Đồ lưu trữ",
      filterKey: "luu-tru",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ec-4",
      name: "Đèn",
      filterKey: "den",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ec-5",
      name: "Phụ kiện",
      filterKey: "phu-kien",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Ý Tưởng Phối Màu Sơn & Nội Thất Cho Căn Hộ Mới",
      date: "6 THÁNG NĂM, 2026",
      category: "CẢM HỨNG",
      excerpt:
        "Sự kết hợp hài hòa giữa tường trắng kem, sàn gỗ sồi sáng và nội thất tối giản giúp mở rộng thị giác cho căn hộ đô thị.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-2",
      title: "Bí Quyết Sắp Xếp Tủ Kệ Lưu Trữ Gọn Gàng & Thẩm Mỹ",
      date: "6 THÁNG NĂM, 2026",
      category: "CẢM HỨNG",
      excerpt:
        "Ứng dụng hệ tủ mô-đun nhiều ngăn màu sắc trung tính giúp phòng khách luôn ngăn nắp và giàu tính nghệ thuật.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-3",
      title: "Thiết Kế Góc Làm Việc Tại Gia Tràn Ngập Ánh Sáng",
      date: "2 THÁNG NĂM, 2026",
      category: "CẢM HỨNG",
      excerpt:
        "Bố trí bàn làm việc cạnh cửa sổ kết hợp ghế thư giãn êm ái mang lại nguồn năng lượng tích cực mỗi ngày.",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default noiThat9DefaultData;
