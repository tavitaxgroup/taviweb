import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto2Product {
  id: string;
  title: string;
  category: string;
  tab: "Mới nhất" | "Phổ biến" | "Bán chạy" | "Khuyến mãi";
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  brand: string;
  vehicleType: string;
  image: string;
  description: string;
}

export interface GarageOto2DealItem {
  id: string;
  category: string;
  title: string;
  oldPrice: string;
  price: string;
  image: string;
  countdown: {
    days: string;
    hours: string;
    mins: string;
    secs: string;
  };
  description: string;
}

export interface GarageOto2Data extends ClonedTemplateBaseData {
  vehicleBrands: string[];
  vehicleModels: string[];
  serviceTypes: string[];
  partnerBadges: Array<{
    id: string;
    name: string;
    tagline: string;
  }>;
  promoBanners: Array<{
    id: string;
    titleLine1: string;
    titleLine2Bold: string;
    titleLine2Light: string;
    pricePrefix: string;
    priceHighlight: string;
    highlightColor: "green" | "red";
    ctaText: string;
    image: string;
  }>;
  products: GarageOto2Product[];
  shellBanner: {
    eyebrow: string;
    title: string;
    subtitlePrefix: string;
    discountHighlight: string;
    subtitleSuffix: string;
    ctaText: string;
    image: string;
  };
  featuredDeals: GarageOto2DealItem[];
  sideMiniDeals: Array<{
    id: string;
    title: string;
    oldPrice: string;
    price: string;
    image: string;
  }>;
  trustBadges: Array<{
    id: string;
    icon: "truck" | "headset" | "refresh" | "shield";
    title: string;
    subtitle: string;
  }>;
}

export const garageOto2DefaultData: GarageOto2Data = {
  business: {
    name: "AUTO SPOT GARAGE",
    phone: ["0908 777 111", "028 3999 8888"],
    email: ["service@autospot.vn", "parts@autospot.vn"],
    address: "319 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 20:00 (Cứu hộ 24/7)",
    rating: 4.9,
    reviewCount: 1850,
    aboutTitle: "Trung tâm Phụ tùng & Chăm sóc Ô tô Chính hãng",
    aboutText: [
      "AUTO SPOT GARAGE là hệ thống phân phối phụ tùng hiệu suất cao, nâng cấp ánh sáng, mâm lốp thể thao và bảo dưỡng chăm sóc ô tô toàn diện theo tiêu chuẩn hãng tại TP.HCM."
    ],
  },
  hero: {
    eyebrow: "LỰA CHỌN CHẤT LƯỢNG",
    title: "Lựa chọn chất lượng",
    subtitle: "HƠN 100,000 PHỤ TÙNG & DỊCH VỤ CHĂM SÓC Ô TÔ CHÍNH HÃNG",
    ctaText: "LỰA CHỌN",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  },
  vehicleBrands: [
    "Tất cả thương hiệu",
    "Porsche",
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Lexus",
    "Toyota / Mazda / Honda",
    "VinFast / Ford / Hyundai",
  ],
  vehicleModels: [
    "Tất cả dòng xe",
    "Sedan Hạng Sang",
    "SUV / Crossover 7 Chỗ",
    "Coupe Thể Thao",
    "Hatchback Đô Thị",
    "Bán Tải Pickup",
  ],
  serviceTypes: [
    "Tất cả phụ tùng & dịch vụ",
    "Hệ thống phanh hiệu suất cao",
    "Mâm đúc & Lốp thể thao",
    "Đèn pha Bi-LED / Laser",
    "Nội thất & Ghế thể thao",
    "Bảo dưỡng & Phủ Ceramic",
  ],
  partnerBadges: [
    { id: "pb-1", name: "Brembo Racing", tagline: "BRAKE SYSTEMS" },
    { id: "pb-2", name: "Scandinavia", tagline: "AUTO CLUB" },
    { id: "pb-3", name: "Mi Casa Auto", tagline: "PERFORMANCE PARTS" },
    { id: "pb-4", name: "Oak Bark", tagline: "CUSTOM FORGED" },
    { id: "pb-5", name: "Apex Tuning", tagline: "MOTORSPORT LAB" },
    { id: "pb-6", name: "Grand Prix", tagline: "GERMAN ENGINEERING" },
  ],
  promoBanners: [
    {
      id: "promo-1",
      titleLine1: "Mâm Lốp Thể Thao",
      titleLine2Bold: "Moteri",
      titleLine2Light: "Gold Custom",
      pricePrefix: "Chỉ với",
      priceHighlight: "12,000,000₫",
      highlightColor: "green",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "promo-2",
      titleLine1: "Combo Bảo Dưỡng",
      titleLine2Bold: "Lọc Nhớt",
      titleLine2Light: "& Phụ Gia",
      pricePrefix: "Khuyến mãi",
      priceHighlight: "25% Off",
      highlightColor: "red",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    },
  ],
  products: [
    {
      id: "prd-1",
      title: "Bộ Phanh Đĩa Thể Thao Brembo",
      category: "Hệ thống phanh hiệu suất cao",
      tab: "Mới nhất",
      price: "1,400,000₫",
      brand: "Porsche",
      vehicleType: "Coupe Thể Thao",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
      description:
        "Bộ đĩa phanh khoan lỗ tản nhiệt kết hợp má phanh gốm hiệu suất cao, giúp rút ngắn quãng đường phanh và chống phai nhiệt.",
    },
    {
      id: "prd-2",
      title: 'Mâm Đúc Hợp Kim Gunmetal 19"',
      category: "Mâm đúc & Lốp thể thao",
      tab: "Bán chạy",
      price: "3,400,000₫",
      brand: "Mercedes-Benz",
      vehicleType: "Sedan Hạng Sang",
      image:
        "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=600&q=80",
      description:
        "Mâm đúc hợp kim nhôm CNC nguyên khối siêu nhẹ sơn tĩnh điện Gunmetal, tăng độ bám đường và vẻ đẹp thể thao.",
    },
    {
      id: "prd-3",
      title: "Đèn Bi-LED Gầm Siêu Sáng",
      category: "Đèn pha Bi-LED / Laser",
      tab: "Mới nhất",
      price: "2,800,000₫",
      brand: "BMW",
      vehicleType: "SUV / Crossover 7 Chỗ",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=600&q=80",
      description:
        "Cặp đèn Bi-LED Projector phá sương 3 nhiệt màu, mặt cắt ánh sáng chuẩn văn minh không gây chói mắt xe đối diện.",
    },
    {
      id: "prd-4",
      title: "Ghế Da Thể Thao Elite-X",
      category: "Nội thất & Ghế thể thao",
      tab: "Bán chạy",
      price: "2,500,000₫",
      brand: "Audi",
      vehicleType: "Coupe Thể Thao",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      description:
        "Ghế Bucket Seat bọc da Nappa cao cấp ôm sát lưng người lái, hỗ trợ tư thế ngồi vững chãi khi vào cua tốc độ cao.",
    },
    {
      id: "prd-5",
      title: "Ốp Heo Dầu Phanh Thể Thao",
      category: "Hệ thống phanh hiệu suất cao",
      tab: "Phổ biến",
      price: "2,100,000₫",
      brand: "Lexus",
      vehicleType: "Sedan Hạng Sang",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      description:
        "Bộ ốp cùm phanh hợp kim nhôm chịu nhiệt cao cấp sơn vàng thể thao, bảo vệ cụm phanh khỏi bụi bẩn và đá văng.",
    },
    {
      id: "prd-6",
      title: "Mâm Đúc Custom Gold RTS",
      category: "Mâm đúc & Lốp thể thao",
      tab: "Phổ biến",
      price: "4,100,000₫",
      brand: "Porsche",
      vehicleType: "Coupe Thể Thao",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
      description:
        "Mâm đúc đa chấu mạ vàng Racing Gold chuẩn JDM & Euro Tuning, chịu tải trọng lớn và cân bằng động tuyệt đối.",
    },
    {
      id: "prd-7",
      title: "Nắp Capo Carbon Thể Thao",
      category: "Nội thất & Ghế thể thao",
      tab: "Mới nhất",
      price: "1,900,000₫",
      brand: "BMW",
      vehicleType: "Coupe Thể Thao",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80",
      description:
        "Nắp capo sợi Carbon Fiber kết hợp khe thoát gió khí động học giúp tản nhiệt khoang máy tối ưu.",
    },
    {
      id: "prd-8",
      title: "Bộ Đĩa Phanh Hiệu Suất Cao",
      category: "Hệ thống phanh hiệu suất cao",
      tab: "Bán chạy",
      price: "2,400,000₫",
      brand: "Mercedes-Benz",
      vehicleType: "SUV / Crossover 7 Chỗ",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
      description:
        "Bộ đĩa phanh 2 mảnh hợp kim thép carbon cao cấp kết hợp heo dầu 6-Piston chính hãng.",
    },
    {
      id: "prd-9",
      title: "Gói Rửa Xe & Phủ Ceramic Chi Tiết",
      category: "Bảo dưỡng & Phủ Ceramic",
      tab: "Khuyến mãi",
      oldPrice: "1,900,000₫",
      price: "1,500,000₫",
      discountBadge: "-21%",
      brand: "Tất cả thương hiệu",
      vehicleType: "Tất cả dòng xe",
      image:
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80",
      description:
        "Quy trình Detailing 12 bước kết hợp phủ gốm Ceramic 9H tạo hiệu ứng lá sen chống bám nước và bảo vệ sơn zin bóng sâu.",
    },
    {
      id: "prd-10",
      title: "Đèn Pha Bi-Laser Projector",
      category: "Đèn pha Bi-LED / Laser",
      tab: "Khuyến mãi",
      price: "2,700,000₫",
      brand: "Audi",
      vehicleType: "SUV / Crossover 7 Chỗ",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
      description:
        "Tăng sáng gấp 500% với tâm Laser chiếu xa tới 800m, lắp đặt giắc cắm zin 100% an toàn cho hệ thống điện.",
    },
  ],
  shellBanner: {
    eyebrow: "Ưu Đãi Đặc Biệt",
    title: "SHELL MOTOR OILS",
    subtitlePrefix: "Bảo dưỡng thay dầu động cơ giảm tới",
    discountHighlight: "30%",
    subtitleSuffix: "Off",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1635773054018-22c38854f721?auto=format&fit=crop&w=900&q=80",
  },
  featuredDeals: [
    {
      id: "deal-1",
      category: "HỆ THỐNG PHANH, PHỤ TÙNG ĐỘ",
      title: "Bộ Đĩa Phanh Thể Thao Imola Series",
      oldPrice: "3,400,000₫",
      price: "2,300,000₫",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
      countdown: {
        days: "382",
        hours: "16",
        mins: "18",
        secs: "25",
      },
      description:
        "Phiên bản giới hạn Imola Series với rãnh thoát nhiệt kép, miễn phí công lắp đặt và cân chỉnh thước lái tại xưởng.",
    },
    {
      id: "deal-2",
      category: "NÂNG CẤP ÁNH SÁNG, NỘI THẤT",
      title: "Combo Đèn Bi-Laser & Phủ Gầm Chống Rỉ",
      oldPrice: "5,200,000₫",
      price: "3,850,000₫",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=80",
      countdown: {
        days: "145",
        hours: "09",
        mins: "42",
        secs: "10",
      },
      description:
        "Combo nâng cấp toàn diện tầm nhìn ban đêm và bảo vệ khung gầm chống ăn mòn, cách âm gầm hiệu quả.",
    },
  ],
  sideMiniDeals: [
    {
      id: "mini-1",
      title: "Bộ Đĩa Phanh Thể Thao Imola Series",
      oldPrice: "3,400,000₫",
      price: "2,300,000₫",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "mini-2",
      title: "Bộ Phuộc Nhún Hạ Gầm Thể Thao",
      oldPrice: "900,000₫",
      price: "690,000₫",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "mini-3",
      title: "Đèn Pha Bi-Xenon Projector",
      oldPrice: "3,100,000₫",
      price: "2,800,000₫",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "mini-4",
      title: "Gương Chiếu Hậu Carbon Thể Thao",
      oldPrice: "2,300,000₫",
      price: "1,800,000₫",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80",
    },
  ],
  trustBadges: [
    {
      id: "tb-1",
      icon: "truck",
      title: "Miễn Phí Vận Chuyển",
      subtitle: "Cho tất cả đơn hàng & cứu hộ nội thành",
    },
    {
      id: "tb-2",
      icon: "headset",
      title: "Hỗ Trợ 24/7",
      subtitle: "Hỗ trợ kỹ thuật tận tâm mọi lúc",
    },
    {
      id: "tb-3",
      icon: "refresh",
      title: "Hoàn Tiền",
      subtitle: "Đổi trả linh hoạt trong vòng 30 ngày",
    },
    {
      id: "tb-4",
      icon: "shield",
      title: "Thanh Toán An Toàn",
      subtitle: "Bảo mật thanh toán & bảo hành điện tử",
    },
  ],
  news: [
    {
      id: "news-1",
      title:
        "Kinh nghiệm bảo dưỡng hệ thống phanh đĩa và nhận biết dấu hiệu má phanh mòn sớm",
      date: "08 Tháng Ba",
      category: "TIN TỨC",
      excerpt:
        "Hệ thống phanh đóng vai trò sống còn trên mỗi hành trình. Cùng kỹ thuật viên trưởng tại Auto Spot kiểm tra 5 dấu hiệu cảnh báo cần bảo dưỡng phanh ngay.",
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-2",
      title:
        "So sánh mâm đúc hợp kim Forged và Cast: Đâu là lựa chọn tối ưu khi nâng cấp xe?",
      date: "08 Tháng Ba",
      category: "TIN TỨC",
      excerpt:
        "Việc nâng cấp bộ mâm lốp không chỉ thay đổi diện mạo thể thao mà còn ảnh hưởng trực tiếp tới cảm giác lái, độ êm ái và khả năng tăng tốc của xe.",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-3",
      title:
        "Quy trình phủ Ceramic 9H chuẩn Detailing giúp bảo vệ lớp sơn zin bền đẹp 5 năm",
      date: "08 Tháng Ba",
      category: "TIN TỨC",
      excerpt:
        "Tìm hiểu quy trình hiệu chỉnh bề mặt sơn 3 bước và phủ gốm Ceramic chuyên sâu giúp xe luôn bóng sâu như mới, chống tia UV và mưa axit hiệu quả.",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
