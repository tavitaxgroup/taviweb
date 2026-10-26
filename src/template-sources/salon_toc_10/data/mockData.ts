import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SheinStyleBenefitItem {
  id: string;
  title: string;
  subtitle: string;
}

export interface SheinStyleVoucherKey {
  id: string;
  discount: string;
  condition: string;
  code: string;
}

export interface SheinStyleFavoriteCard {
  id: string;
  title: string;
  ctaLabel: string;
  category: string;
  price: string;
  image: string;
}

export interface SheinStyleBuyerShowItem {
  id: string;
  name: string;
  discountBadge: string;
  originalPrice: string;
  salePrice: string;
  image: string;
  stylistNote: string;
}

export interface SalonToc10Data extends ClonedTemplateBaseData {
  topMintPromoText: string;
  brandMainTitle: string;
  brandScriptSub: string;
  subCategories: string[];
  blackBarBenefits: SheinStyleBenefitItem[];
  cyberSaleRow1: string[];
  cyberSaleRow2: string[];
  cyberBannerSubline: string;
  cyberPromoCode: string;
  voucherKeys: SheinStyleVoucherKey[];
  pinkStripHeadline: string;
  pinkStripSubline: string;
  pinkStripImage: string;
  splitLeftTitle: string;
  splitLeftImage: string;
  splitRightTitle: string[];
  splitRightImage: string;
  flashMintDiscount: string;
  flashMintSub: string;
  flashMintRightText: string;
  occasionTitle: string;
  occasionSubtitle: string;
  occasionImage: string;
  secondItemDealTitle: string;
  secondItemPercent: string;
  favoriteTrioCards: SheinStyleFavoriteCard[];
  bentoFeatureLeft: {
    title: string;
    ctaLabel: string;
    image: string;
  };
  bentoFeatureTopRight: {
    title: string;
    ctaLabel: string;
    image: string;
  };
  bentoFeatureBottomRight: {
    title: string;
    subtitle: string;
    image: string;
  };
  genderSplitLeft: {
    title: string;
    ctaLabel: string;
    image: string;
  };
  genderSplitRight: {
    title: string;
    ctaLabel: string;
    image: string;
  };
  buyersShowItems: SheinStyleBuyerShowItem[];
}

export const mockData = {
  business: {
    name: "SheinStyle Hair & Fashion",
    tagline: "Tổ hợp Salon Tạo Mẫu Tóc & Phong Cách Thời Trang Quốc Tế",
    phone: ["0909 686 888", "028 7300 9999"],
    email: ["booking@sheinstyle.vn", "cskh@sheinstyle.vn"],
    address: "Số 218 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 1420,
    workingHours: "09:00 - 21:30 (Thứ 2 - Chủ Nhật)",
    aboutTitle: "SheinStyle — Hệ Sinh Thái Tạo Mẫu Tóc & Thời Trang Chuẩn Quốc Tế",
    aboutText: [
      "SheinStyle kết hợp nghệ thuật tạo mẫu tóc thời thượng (Uốn sóng lơi Hàn Quốc, Nhuộm Balayage Pháp, Phục hồi Keratin thủy phân) cùng bộ sưu tập phụ kiện và thời trang cá tính.",
      "Với đội ngũ Giám đốc Sáng tạo giàu kinh nghiệm và hệ thống sản phẩm chăm sóc tóc chính hãng, SheinStyle mang đến diện mạo hoàn hảo trong mọi khoảnh khắc.",
    ],
  },
  hero: {
    eyebrow: "SALE CYBER MONDAY",
    badge: "GIẢM 60%",
    title: "TOÀN BỘ DỊCH VỤ TÓC & SẢN PHẨM GIẢM 60%",
    subtitle:
      "Bùng nổ đại tiệc làm đẹp & phong cách lớn nhất năm tại SheinStyle Salon — Nhận ngay voucher giảm trực tiếp đến 439K.",
    ctaText: "MUA NGAY >",
    ctaLink: "#yeu-thich",
    backgroundImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  },
  navigation: [
    { label: "Khuyến mãi", href: "#cyber-sale" },
    { label: "Tạo mẫu tóc Nữ", href: "#yeu-thich" },
    { label: "Uốn & Nhuộm VIP", href: "#bento-style" },
    { label: "Dưỡng tóc Salon", href: "#buyers-show" },
    { label: "Phụ kiện & Thời trang", href: "#buyers-show" },
  ],
  stats: [
    { value: "60%", label: "Ưu đãi đại tiệc Cyber Sale" },
    { value: "99K", label: "Đồng giá phụ kiện & hấp tóc" },
    { value: "35.000+", label: "Khách hàng check-in thực tế" },
    { value: "100%", label: "Bảo hành nếp tóc 30 ngày" },
  ],
  services: [
    {
      id: "srv-1",
      title: "Combo Cắt Thiết Kế & Uốn Sóng Lơi Hàn Quốc",
      category: "Tạo mẫu tóc Nữ",
      description:
        "Tạo độ phồng chân tóc tự nhiên và sóng lơi mềm mại giúp gương mặt thanh thoát, trẻ trung.",
      price: "499.000₫",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "srv-2",
      title: "Nhuộm Balayage Ánh Khói & Phục Hồi Olaplex",
      category: "Nhuộm thời trang",
      description:
        "Kỹ thuật chuyển màu đa tầng tự nhiên kết hợp khóa màu collagen không gây khô xơ.",
      price: "799.000₫",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "srv-3",
      title: "Trị Liệu Bọc Keratin Bóng Mượt Như Lụa",
      category: "Phục hồi chuyên sâu",
      description:
        "Lấp đầy cấu trúc tủy tóc hư tổn do tẩy nhuộm, trả lại suối tóc óng ả ngay sau 90 phút.",
      price: "550.000₫",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    },
  ],

  topMintPromoText: "KHUYẾN MÃI CUỐI THÁNG GIÁ CHỈ TỪ 69K MUA NGAY",
  brandMainTitle: "MONA",
  brandScriptSub: "SheinStyle Salon",
  subCategories: [
    "Khuyến mãi",
    "Tạo mẫu tóc",
    "Uốn & Nhuộm",
    "Dưỡng tóc",
    "Phụ kiện",
  ],

  blackBarBenefits: [
    {
      id: "bb-1",
      title: "GIẢM THÊM 10%",
      subtitle: "NHẬP MÃ: SVN10 CHO ĐH TỪ 699K",
    },
    {
      id: "bb-2",
      title: "THANH TOÁN KHI NHẬN HÀNG",
      subtitle: "ĐẶT LỊCH TRƯỚC KHÔNG CẦN CỌC",
    },
    {
      id: "bb-3",
      title: "GIAO HÀNG TIẾT KIỆM MIỄN PHÍ",
      subtitle: "ĐƠN HÀNG MỸ PHẨM TỪ 930K",
    },
    {
      id: "bb-4",
      title: "GÓI CHĂM SÓC VIP MIỄN PHÍ",
      subtitle: "HÓA ĐƠN COMBO TỪ 2222K",
    },
  ],

  cyberSaleRow1: ["S", "A", "L", "E"],
  cyberSaleRow2: ["C", "Y", "B", "E", "R", "M", "O", "N", "D", "A", "Y"],
  cyberBannerSubline: "TOÀN BỘ SẢN PHẨM & COMBO TÓC GIẢM 60%",
  cyberPromoCode: "BFVN",

  voucherKeys: [
    {
      id: "vk-1",
      discount: "GIẢM 139K",
      condition: "ĐƠN HÀNG TỪ 1099K >",
      code: "SHEIN139",
    },
    {
      id: "vk-2",
      discount: "GIẢM 239K",
      condition: "ĐƠN HÀNG TỪ 1599K >",
      code: "SHEIN239",
    },
    {
      id: "vk-3",
      discount: "GIẢM 439K",
      condition: "ĐƠN HÀNG TỪ 2699K >",
      code: "SHEIN439",
    },
  ],

  pinkStripHeadline: "GIÁ RẺ KHÔNG THỂ TƯỞNG TƯỢNG ĐƯỢC",
  pinkStripSubline: "ĐỒNG GIÁ 99K",
  pinkStripImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",

  splitLeftTitle: "PHONG CÁCH TUYỆT ĐẸP",
  splitLeftImage:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  splitRightTitle: ["DANH SÁCH", "XU HƯỚNG", "BÁN CHẠY"],
  splitRightImage:
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",

  flashMintDiscount: "GIẢM 70%",
  flashMintSub: "DUY NHẤT 6 GIỜ",
  flashMintRightText: "MỖI SẢN PHẨM & DỊCH VỤ",

  occasionTitle: "XU HƯỚNG MÙA LỄ HỘI :",
  occasionSubtitle: "Mùa đông này chọn kiểu tóc & outfit gì?",
  occasionImage:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",

  secondItemDealTitle: "SẢN PHẨM THỨ 2 GIẢM",
  secondItemPercent: "99%",

  favoriteTrioCards: [
    {
      id: "fav-1",
      title: "Hoàn hảo trong mọi hoàn cảnh",
      ctaLabel: "Đặt Tóc Dự Tiệc >",
      category: "Uốn sóng quyến rũ",
      price: "390.000₫",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "fav-2",
      title: "Trời đang chuyển lạnh",
      ctaLabel: "Chọn Màu Nhuộm Ấm >",
      category: "Nhuộm nâu trà sữa",
      price: "450.000₫",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "fav-3",
      title: "Ấm áp & Phong cách",
      ctaLabel: "Mua Tinh Dưỡng Tóc >",
      category: "Chăm sóc tóc bóng mượt",
      price: "290.000₫",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
    },
  ],

  bentoFeatureLeft: {
    title: "Sang trọng và Trẻ trung",
    ctaLabel: "Khám Phá Tạo Kiểu >",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  },
  bentoFeatureTopRight: {
    title: "Hiển thị cá tính của bạn",
    ctaLabel: "Chọn Kiểu Layer >",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80",
  },
  bentoFeatureBottomRight: {
    title: "MIX & MATCH",
    subtitle: "cực kỳ xinh xắn",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  },

  genderSplitLeft: {
    title: "KHÔNG THỂ THIẾU CHO PHÁI MẠNH",
    ctaLabel: "Tạo Mẫu Tóc Nam >",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  genderSplitRight: {
    title: "DỄ THƯƠNG GIÁ RẺ",
    ctaLabel: "Tạo Kiểu Trẻ Em >",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },

  buyersShowItems: [
    {
      id: "bs-1",
      name: "Kính mát & Tạo kiểu tóc Bob Pháp",
      discountBadge: "-96%",
      originalPrice: "₫1,340,000.00",
      salePrice: "₫50,000.00",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
      stylistNote: "Feedback thực tế từ Chị Minh Ngọc",
    },
    {
      id: "bs-2",
      name: "Combo Hấp Phục Hồi & Phụ Kiện Kính Thời Trang",
      discountBadge: "-63%",
      originalPrice: "₫416,515.00",
      salePrice: "₫154,846.00",
      image:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=600&q=80",
      stylistNote: "Feedback thực tế từ Chị Bảo Hân",
    },
    {
      id: "bs-3",
      name: "Tinh Chất Dưỡng Bóng Tóc Argan Moroccan",
      discountBadge: "-85%",
      originalPrice: "₫653,000.00",
      salePrice: "₫100,000.00",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      stylistNote: "Feedback thực tế từ Chị Thanh Trúc",
    },
    {
      id: "bs-4",
      name: "Xịt Bảo Vệ Nhiệt & Giữ Nếp Sóng Nước 24H",
      discountBadge: "-76%",
      originalPrice: "₫653,000.00",
      salePrice: "₫154,846.00",
      image:
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
      stylistNote: "Feedback thực tế từ Chị Khánh Vy",
    },
    {
      id: "bs-5",
      name: "Bộ Kẹp Tóc Ngọc Trai & Lược Gỡ Rối Cao Cấp",
      discountBadge: "-95%",
      originalPrice: "₫934,000.00",
      salePrice: "₫50,000.00",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
      stylistNote: "Feedback thực tế từ Chị Phương Nhi",
    },
  ],
};
