import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MonaFashionCategoryChip {
  id: string;
  label: string;
  image: string;
}

export interface MonaFashionProductCard {
  id: string;
  name: string;
  priceRange: string;
  originalPrice?: string;
  isSale?: boolean;
  tab?: "best-seller" | "giam-gia";
  category: string;
  image: string;
  summary: string;
}

export interface MonaFashionValuePerk {
  id: string;
  title: string;
  description: string;
  iconType: "heart" | "dollar" | "circle" | "star";
}

export interface SalonToc13Data extends ClonedTemplateBaseData {
  heroTopLabel: string;
  heroMainHeadline: string;
  heroBottomLabel: string;
  categoryChips: MonaFashionCategoryChip[];
  topTabs: { id: "best-seller" | "giam-gia"; label: string }[];
  topTabProducts: MonaFashionProductCard[];
  marqueeText: string;
  newestSectionTitle: string;
  newestProducts: MonaFashionProductCard[];
  countdownBanner: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    image: string;
    timer: {
      weeks: number;
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  };
  spotlightSectionTitle: string;
  spotlightProducts: MonaFashionProductCard[];
  aboutSectionHeading: string;
  aboutSectionSub: string;
  valuePerks: MonaFashionValuePerk[];
  contactPortraitImage: string;
  contactFormHeading: string;
  contactFormSubheading: string;
  newAccountPromo: {
    topHighlight: string;
    mainHeading: string;
    buttonLabel: string;
    trustBadges: { id: string; label: string; icon: string }[];
  };
}

export const mockData = {
  business: {
    name: "MonaFashion Hair & Style Studio",
    tagline: "Phong cách tạo mẫu tóc & thời trang độc đáo. Tự tin và nổi bật.",
    phone: ["0313728397", "0909 555 889"],
    email: ["info@themona.global", "booking@monafashion.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 1180,
    workingHours: "08:30 - 21:30 (Tất cả các ngày trong tuần)",
    aboutTitle: "VỀ MONA FASHION",
    aboutText: [
      "MonaFashion là tổ hợp Studio Tạo Mẫu Tóc, Makeup Thời Trang và Phụ Kiện Phong Cách hàng đầu tại TP.HCM. Chúng tôi kiến tạo diện mạo đồng bộ từ mái tóc, làn da đến trang phục.",
      "Mỗi sản phẩm chăm sóc tóc và gói dịch vụ tạo kiểu tại MonaFashion đều được định giá công bằng, minh bạch cùng cam kết bảo hành hài lòng 100%.",
    ],
  },
  hero: {
    eyebrow: "UP TO 50% OFF",
    badge: "LIMITED STOCKS ONLY!",
    title: "BIG SALE",
    subtitle: "ƯU ĐÃI LÊN ĐẾN 50% TOÀN BỘ COMBO TẠO MẪU TÓC & SẢN PHẨM STYLING",
    ctaText: "XEM TẤT CẢ",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "GIỚI THIỆU", href: "#ve-mona" },
    { label: "SẢN PHẨM & DỊCH VỤ", href: "#san-pham-moi" },
    { label: "TIN TỨC", href: "#spotlight" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ],
  stats: [
    { value: "50%", label: "Ưu đãi đại tiệc Big Sale" },
    { value: "12+", label: "Nhóm dịch vụ & sản phẩm" },
    { value: "35%", label: "Giảm giá tuần lễ vàng" },
    { value: "24/7", label: "Tư vấn Stylist trực tuyến" },
  ],

  heroTopLabel: "UP TO 50% OFF",
  heroMainHeadline: "BIG SALE",
  heroBottomLabel: "ƯU ĐÃI SỐ LƯỢNG CÓ HẠN!",

  categoryChips: [
    {
      id: "chip-1",
      label: "UỐN SÓNG HÀN",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-2",
      label: "NHUỘM BALAYAGE",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-3",
      label: "PHỤC HỒI KERATIN",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-4",
      label: "CẮT LAYER NỮ",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-5",
      label: "BALO & TÚI SALON",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-6",
      label: "PHỤ KIỆN TÓC",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-7",
      label: "MÁY TẠO KIỂU",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-8",
      label: "MŨ & NÓN THỜI TRANG",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-9",
      label: "DẦU GỘI HỮU CƠ",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-10",
      label: "TINH DẦU DƯỠNG",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-11",
      label: "TẠO KIỂU NAM",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "chip-12",
      label: "COMBO STYLING",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    },
  ],

  topTabs: [
    { id: "best-seller", label: "BEST SELLER" },
    { id: "giam-gia", label: "GIẢM GIÁ" },
  ],

  topTabProducts: [
    {
      id: "top-1",
      name: "Combo Cắt Layer & Uốn Phồng Chân Tóc Hàn Quốc",
      priceRange: "300,000 ₫ – 320,000 ₫",
      category: "UỐN SÓNG HÀN",
      tab: "best-seller",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      summary: "Tạo độ phồng tự nhiên và tỉa layer ôm gọn đường nét khuôn mặt.",
    },
    {
      id: "top-2",
      name: "Tinh Chất Dưỡng Bóng Tóc Argan Gold Luxury",
      priceRange: "236,000 ₫",
      category: "TINH DẦU DƯỠNG",
      tab: "best-seller",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Phục hồi tóc khô xơ, mang lại mái tóc bóng mượt không bết dính.",
    },
    {
      id: "top-3",
      name: "Gói Nhuộm Balayage Khói & Khóa Màu Olaplex",
      priceRange: "509,000 ₫ – 536,000 ₫",
      category: "NHUỘM BALAYAGE",
      tab: "best-seller",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      summary: "Kỹ thuật nhuộm chuyển màu chuẩn Pháp, giữ tóc mềm mượt.",
    },
    {
      id: "top-4",
      name: "Bộ Lược & Ví Đựng Phụ Kiện Tóc Da Thật",
      priceRange: "359,000 ₫",
      category: "PHỤ KIỆN TÓC",
      tab: "best-seller",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
      summary: "Chất liệu da bò thật sang trọng, bền bỉ theo thời gian.",
    },
    {
      id: "top-5",
      name: "Túi Xách Nhỏ Đựng Mỹ Phẩm & Dụng Cụ Tóc Hồng Pastel",
      priceRange: "459,000 ₫",
      originalPrice: "569,000 ₫",
      isSale: true,
      category: "BALO & TÚI SALON",
      tab: "giam-gia",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      summary: "Thiết kế thời trang nhỏ gọn, tiện lợi mang theo mỗi ngày.",
    },
  ],

  marqueeText:
    "Fashion  •  Hair Studio  •  Fashion  •  Hair Studio  •  Fashion  •  Hair Studio  •  Fashion",

  newestSectionTitle: "Sản phẩm mới nhất",
  newestProducts: [
    {
      id: "new-1",
      name: "Combo Cắt Layer & Uốn Phồng Chân Tóc Hàn Quốc",
      priceRange: "300,000 ₫ – 320,000 ₫",
      category: "UỐN SÓNG HÀN",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      summary: "Combo tạo kiểu tóc nữ được yêu thích nhất tại MonaFashion.",
    },
    {
      id: "new-2",
      name: "Tinh Chất Dưỡng Bóng Tóc Argan Gold Luxury",
      priceRange: "236,000 ₫",
      category: "TINH DẦU DƯỠNG",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Chiết xuất dầu Argan hữu cơ ép lạnh bảo vệ sợi tóc.",
    },
    {
      id: "new-3",
      name: "Gói Nhuộm Balayage Khói & Khóa Màu Olaplex",
      priceRange: "509,000 ₫ – 536,000 ₫",
      category: "NHUỘM BALAYAGE",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      summary: "Lên màu chuẩn sắc sảo và bảo vệ cấu trúc tủy tóc.",
    },
    {
      id: "new-4",
      name: "Bộ Lược & Ví Đựng Phụ Kiện Tóc Da Bò",
      priceRange: "359,000 ₫",
      category: "PHỤ KIỆN TÓC",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
      summary: "Phụ kiện cao cấp dành riêng cho tín đồ làm đẹp.",
    },
    {
      id: "new-5",
      name: "Túi Xách Nhỏ Đeo Vai Đựng Đồ Trang Điểm & Tóc",
      priceRange: "459,000 ₫",
      originalPrice: "569,000 ₫",
      isSale: true,
      category: "BALO & TÚI SALON",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      summary: "Phom dáng thanh lịch, sắc hồng nhẹ nhàng tôn dáng.",
    },
    {
      id: "new-6",
      name: "Nón Signature Ballcap Bảo Vệ Tóc Nhuộm Ngoài Trời",
      priceRange: "329,000 ₫ – 349,000 ₫",
      category: "MŨ & NÓN THỜI TRANG",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
      summary: "Chống tia UV làm phai màu tóc nhuộm khi di chuyển ngoài nắng.",
    },
    {
      id: "new-7",
      name: "Máy Sấy Tóc Siêu Thanh Ion Âm Response Super",
      priceRange: "499,000 ₫",
      originalPrice: "529,000 ₫",
      isSale: true,
      category: "MÁY TẠO KIỂU",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      summary: "Sấy khô nhanh gấp 2 lần mà vẫn giữ độ ẩm tự nhiên cho tóc.",
    },
    {
      id: "new-8",
      name: "Bộ Kẹp Phân Chia Tóc Chuyên Nghiệp Denis",
      priceRange: "298,000 ₫",
      category: "PHỤ KIỆN TÓC",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
      summary: "Cố định tóc chắc chắn không để lại vết hằn khi tạo kiểu.",
    },
    {
      id: "new-9",
      name: "Balo Đựng Dụng Cụ Tóc & Makeup GUBAG Pro",
      priceRange: "389,000 ₫ – 399,000 ₫",
      category: "BALO & TÚI SALON",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      summary: "Chống thấm nước tuyệt đối, ngăn chia khoa học.",
    },
    {
      id: "new-10",
      name: "Áo Choàng Salon Lụa Đen Cổ Cao Chống Bám Tóc",
      priceRange: "419,000 ₫ – 439,000 ₫",
      category: "COMBO STYLING",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
      summary: "Thiết kế sang trọng chuẩn Hair Studio cao cấp.",
    },
    {
      id: "new-11",
      name: "Gói Hấp Phục Hồi Keratin Thủy Phân Chuyên Sâu",
      priceRange: "379,000 ₫ – 389,000 ₫",
      category: "PHỤC HỒI KERATIN",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      summary: "Tái sinh mái tóc hư tổn nặng trở nên mềm mượt óng ả.",
    },
    {
      id: "new-12",
      name: "Sáp Vuốt Tóc Nam Matte Clay Giữ Nếp 24H",
      priceRange: "419,000 ₫",
      category: "TẠO KIỂU NAM",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      summary: "Tạo phồng vượt trội, hương nước hoa nam tính lịch lãm.",
    },
    {
      id: "new-13",
      name: "Bộ Dầu Gội – Xả Thảo Mộc Bưởi & Hương Thảo",
      priceRange: "339,000 ₫ – 349,000 ₫",
      category: "DẦU GỘI HỮU CƠ",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      summary: "Ngăn ngừa gãy rụng và nuôi dưỡng nang tóc chắc khỏe.",
    },
    {
      id: "new-14",
      name: "Xịt Khoáng Bảo Vệ Nhiệt & Dưỡng Bóng Tóc",
      priceRange: "260,000 ₫",
      category: "TINH DẦU DƯỠNG",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      summary: "Màng chắn nhiệt độ cao khi dùng máy uốn và máy kẹp.",
    },
  ],

  countdownBanner: {
    title: "ƯU ĐÃI LÊN TỚI 35%",
    subtitle:
      "Tạo mẫu tóc & thời trang đẳng cấp với mức chi phí hợp lý. Đặt lịch và mua sắm ngay để nhận ưu đãi giảm giá tốt nhất tuần này...",
    ctaLabel: "MUA NGAY >",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    timer: {
      weeks: 14,
      days: 3,
      hours: 7,
      minutes: 18,
      seconds: 11,
    },
  },

  spotlightSectionTitle: "Spotlight",
  spotlightProducts: [
    {
      id: "sp-1",
      name: "Bộ Kẹp Phân Chia Tóc Chuyên Nghiệp Denis",
      priceRange: "298,000 ₫",
      category: "PHỤ KIỆN TÓC",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
      summary: "Dụng cụ không thể thiếu tại mọi Hair Studio chuyên nghiệp.",
    },
    {
      id: "sp-2",
      name: "Xịt Khoáng Bảo Vệ Nhiệt & Dưỡng Bóng Tóc",
      priceRange: "260,000 ₫",
      category: "TINH DẦU DƯỠNG",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      summary: "Giữ nếp suôn mượt tự nhiên suốt cả ngày dài.",
    },
    {
      id: "sp-3",
      name: "Bộ Dầu Gội – Xả Thảo Mộc Bưởi & Hương Thảo",
      priceRange: "339,000 ₫ – 349,000 ₫",
      category: "DẦU GỘI HỮU CƠ",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      summary: "Làm sạch sâu dịu nhẹ, kích thích mọc tóc con.",
    },
    {
      id: "sp-4",
      name: "Nón Signature Ballcap Bảo Vệ Tóc Nhuộm Ngoài Trời",
      priceRange: "329,000 ₫ – 349,000 ₫",
      category: "MŨ & NÓN THỜI TRANG",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
      summary: "Phụ kiện thời trang năng động kết hợp bảo vệ tóc.",
    },
    {
      id: "sp-5",
      name: "Tinh Chất Dưỡng Bóng Tóc Argan Gold Luxury",
      priceRange: "236,000 ₫",
      category: "TINH DẦU DƯỠNG",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Nuôi dưỡng ngọn tóc mềm mại và thơm ngát hương hoa.",
    },
    {
      id: "sp-6",
      name: "Combo Cắt Layer & Uốn Phồng Chân Tóc Hàn Quốc",
      priceRange: "300,000 ₫ – 320,000 ₫",
      category: "UỐN SÓNG HÀN",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      summary: "Kiểu tóc quốc dân tôn lên đường nét thanh tú.",
    },
    {
      id: "sp-7",
      name: "Bộ Lược & Ví Đựng Phụ Kiện Tóc Da Bò",
      priceRange: "359,000 ₫",
      category: "PHỤ KIỆN TÓC",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
      summary: "Thiết kế thủ công tinh xảo từ da bò nguyên tấm.",
    },
    {
      id: "sp-8",
      name: "Túi Xách Nhỏ Đeo Vai Đựng Đồ Trang Điểm & Tóc",
      priceRange: "459,000 ₫",
      originalPrice: "569,000 ₫",
      isSale: true,
      category: "BALO & TÚI SALON",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
      summary: "Màu hồng phấn thời thượng, dây đeo chắc chắn.",
    },
    {
      id: "sp-9",
      name: "Máy Sấy Tóc Siêu Thanh Ion Âm Response Super",
      priceRange: "499,000 ₫",
      originalPrice: "529,000 ₫",
      isSale: true,
      category: "MÁY TẠO KIỂU",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      summary: "Bảo vệ biểu bì tóc tối đa khi sấy tạo kiểu hằng ngày.",
    },
    {
      id: "sp-10",
      name: "Áo Choàng Salon Lụa Đen Cổ Cao Chống Bám Tóc",
      priceRange: "419,000 ₫ – 439,000 ₫",
      category: "COMBO STYLING",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
      summary: "Thoáng mát, chống tĩnh điện và dễ dàng vệ sinh.",
    },
  ],

  aboutSectionHeading: "VỀ MONA FASHION",
  aboutSectionSub: "Phong cách tạo mẫu tóc & thời trang độc đáo. Tự tin và nổi bật.",

  valuePerks: [
    {
      id: "vp-1",
      title: "SẢN PHẨM CHẤT LƯỢNG",
      description:
        "Khám phá bộ sưu tập dịch vụ tóc & phụ kiện đa dạng tại MonaFashion. Chúng tôi tự hào cung cấp những sản phẩm chất lượng đáng tin cậy.",
      iconType: "heart",
    },
    {
      id: "vp-2",
      title: "GIÁ CẢ HỢP LÝ",
      description:
        "Mỗi dịch vụ và sản phẩm tại MonaFashion được định giá với sự công bằng và hợp lý, mang đến cho bạn sự trải nghiệm thú vị và tiết kiệm.",
      iconType: "dollar",
    },
    {
      id: "vp-3",
      title: "VẬN CHUYỂN MIỄN PHÍ",
      description:
        "Mua sắm dễ dàng hơn với vận chuyển toàn quốc để đảm bảo bạn nhận được sản phẩm chăm sóc tóc một cách nhanh chóng và thuận tiện.",
      iconType: "circle",
    },
    {
      id: "vp-4",
      title: "HỖ TRỢ ONLINE",
      description:
        "Đội ngũ Stylist và chăm sóc khách hàng của chúng tôi luôn sẵn sàng 24/7 để giải đáp mọi thắc mắc và hỗ trợ bạn trong suốt quá trình làm đẹp.",
      iconType: "star",
    },
  ],

  contactPortraitImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  contactFormHeading: "GỬI TIN NHẮN NGAY CHO MONAFASHION",
  contactFormSubheading: "KHI BẠN CẦN HỖ TRỢ HOẶC CÓ THẮC MẮC NHÉ!",

  newAccountPromo: {
    topHighlight: "ƯU ĐÃI GIẢM ĐẾN 50%",
    mainHeading: "TÀI KHOẢN MỚI",
    buttonLabel: "ĐĂNG KÝ NGAY",
    trustBadges: [
      { id: "tb-1", label: "Sản phẩm chính hãng", icon: "👍" },
      { id: "tb-2", label: "Dễ dàng đổi trả", icon: "📦" },
      { id: "tb-3", label: "Giao hàng siêu tốc", icon: "🚚" },
      { id: "tb-4", label: "Thanh toán dễ dàng", icon: "💸" },
    ],
  },
};
