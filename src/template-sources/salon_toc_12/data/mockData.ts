import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MonaStylishVoucher {
  id: string;
  title: string;
  minBill: string;
  discountValue: string;
  code: string;
  expiry: string;
}

export interface MonaStylishSpecPanel {
  id: string;
  modelName: string;
  skuCode: string;
  levelsLabel: string;
  image: string;
  bgColor: string;
}

export interface MonaStylishEditorialSection {
  id: string;
  title: string;
  titleColor: "red" | "dark";
  subtitle: string;
  primaryBtn: string;
  secondaryBtn: string;
  leftImage: string;
  rightImage: string;
}

export interface MonaStylishSaleItem {
  id: string;
  category: string;
  name: string;
  price: string;
  originalPrice?: string;
  isOnSale?: boolean;
  image: string;
  description: string;
}

export interface SalonToc12Data extends ClonedTemplateBaseData {
  promoTickerMessages: string[];
  vouchers: MonaStylishVoucher[];
  retroCollageLeftImage: string;
  retroCollageRightImage: string;
  editorialSections: MonaStylishEditorialSection[];
  specPanels: MonaStylishSpecPanel[];
  saleSectionTitle: string;
  saleSectionButton: string;
  saleProducts: MonaStylishSaleItem[];
  luxuryBrands: string[];
  newAccountOffer: {
    discountText: string;
    headline: string;
    buttonLabel: string;
    perks: { id: string; label: string; icon: string }[];
    floatingPills: string[];
  };
}

export const mockData = {
  business: {
    name: "MonaStylish Hair Academy",
    tagline: "Học Viện Tạo Mẫu Tóc Quốc Tế & Thiết Bị Salon Thượng Lưu",
    phone: ["0313728397", "0909 888 779"],
    email: ["info@themona.global", "academy@monastylish.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 920,
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    aboutTitle: "MonaStylish — Biểu Tượng Tạo Mẫu Tóc Đường Phố & Thiết Bị Salon Đỉnh Cao",
    aboutText: [
      "MonaStylish kết hợp Học viện đào tạo Hair Stylist chuẩn quốc tế cùng hệ thống phân phối thiết bị tạo kiểu công nghệ cao và dòng sản phẩm tạo mẫu tóc thời thượng.",
      "Tất cả thiết bị máy sấy siêu âm, tông đơ không dây, máy uốn nhiệt gốm và mỹ phẩm tóc đều được bảo chứng nguồn gốc chính hãng 100%.",
    ],
  },
  hero: {
    eyebrow: "MONA STYLISH PRO",
    badge: "GIẢM NGAY 250K",
    title: "TUYỆT TÁC TẠO KIỂU & THIẾT BỊ SALON THƯỢNG LƯU",
    subtitle:
      "Chinh phục những xu hướng tóc Streetwear, Undercut, Balayage và sở hữu bộ sưu tập dụng cụ Hair Stylist giới hạn.",
    ctaText: "Khám Phá Ngay",
    ctaLink: "#sale-grid",
    backgroundImage:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1400&q=80",
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "VỀ HỌC VIỆN", href: "#bo-suu-tap" },
    { label: "CỬA HÀNG", href: "#sale-grid" },
    { label: "THƯƠNG HIỆU", href: "#thuong-hieu" },
    { label: "DỤNG CỤ TÓC", href: "#thiet-bi-pro" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ],
  stats: [
    { value: "250K", label: "Ưu đãi đơn hàng giới hạn" },
    { value: "16+", label: "Thương hiệu quốc tế đối tác" },
    { value: "30%", label: "Giảm giá tài khoản mới" },
    { value: "100%", label: "Bảo hành chính hãng" },
  ],

  promoTickerMessages: [
    "GIẢM NGAY 250K | Số lượng giới hạn | Liên hệ: 0313728397",
    "TẶNG KHÓA TẠO KIỂU CÁ NHÂN KHI MUA BỘ DỤNG CỤ PRO SALON",
    "MIỄN PHÍ GIAO HÀNG SIÊU TỐC TOÀN QUỐC CHO ĐƠN TỪ 1.000.000 Đ",
  ],

  vouchers: [
    {
      id: "v-1",
      title: "VOUCHER 1",
      minBill: "1.000.000 Đ",
      discountValue: "100.000 Đ",
      code: "LO-2314XXX",
      expiry: "30 Th12 2026",
    },
    {
      id: "v-2",
      title: "VOUCHER 2",
      minBill: "1.000.000 Đ",
      discountValue: "100.000 Đ",
      code: "LO-2315XXX",
      expiry: "30 Th12 2026",
    },
    {
      id: "v-3",
      title: "VOUCHER 3",
      minBill: "1.000.000 Đ",
      discountValue: "100.000 Đ",
      code: "LO-2316XXX",
      expiry: "30 Th12 2026",
    },
    {
      id: "v-4",
      title: "VOUCHER 4",
      minBill: "1.000.000 Đ",
      discountValue: "100.000 Đ",
      code: "LO-2317XXX",
      expiry: "30 Th12 2026",
    },
  ],

  retroCollageLeftImage:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  retroCollageRightImage:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",

  editorialSections: [
    {
      id: "ed-1",
      title: "AIR STYLING PRO 270",
      titleColor: "red",
      subtitle:
        "Đột phá công nghệ luồng khí Coanda và tạo mẫu tóc đa tầng giúp mái tóc bồng bềnh tự nhiên ở mọi góc nhìn.",
      primaryBtn: "Mẫu Mới Nhất",
      secondaryBtn: "Xem Tất Cả",
      leftImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ed-2",
      title: "VAPORMAX KERATIN FLYKNIT 2",
      titleColor: "red",
      subtitle:
        "Kỹ thuật dệt sợi Keratin và tạo phồng cấu trúc tóc qua 7 năm nghiên cứu của Học viện MonaStylish.",
      primaryBtn: "BÁN CHẠY NHẤT",
      secondaryBtn: "Xem Bộ Sưu Tập",
      leftImage:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ed-3",
      title: "PHONG CÁCH TÓC THẾ HỆ TRẺ NĂNG ĐỘNG",
      titleColor: "dark",
      subtitle:
        "Từ những kiểu cắt Layer cổ điển năm 87 đến xu hướng tẩy nhuộm Streetwear cá tính dành cho giới trẻ hiện đại.",
      primaryBtn: "Xu Hướng Nữ",
      secondaryBtn: "Xu Hướng Nam",
      leftImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    },
  ],

  specPanels: [
    {
      id: "sp-1",
      modelName: "Máy Tạo Kiểu & Sấy Ion Âm Dyson 4DFWD Pulse | ASAS0510ZVL",
      skuCode: "36 36⅔ 37⅓ 38 38⅔ 39⅓ 40 40⅔ 41⅓ 42 42⅔ 43⅓ 44 45",
      levelsLabel: "Dải cấp độ nhiệt & phụ kiện đầu sấy chuyên dụng",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=80",
      bgColor: "#efefef",
    },
    {
      id: "sp-2",
      modelName: "TÔNG ĐƠ & BỘ CẮT PRO ALPHABOUNCE HPC AMS M 2405G25",
      skuCode: "36 37⅓ 38 39⅓ 40 41⅓ 42 43⅓ 44 45⅓",
      levelsLabel: "Chuẩn cữ lược Titanium dành cho Master Barber",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      bgColor: "#e6e6e6",
    },
  ],

  saleSectionTitle: "SALE",
  saleSectionButton: "Xem Tất Cả Sản Phẩm Ưu Đãi",
  saleProducts: [
    {
      id: "sale-1",
      category: "THƯƠNG HIỆU",
      name: "MÁY SẤY TẠO KIỂU MONA AIR HUARACHE PRO",
      price: "1.890.000 Đ",
      originalPrice: "2.400.000 Đ",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      description: "Công nghệ kiểm soát nhiệt thông minh 100 lần/giây bảo vệ độ bóng của tóc.",
    },
    {
      id: "sale-2",
      category: "THƯƠNG HIỆU",
      name: "TÔNG ĐƠ KHÔNG DÂY MD RUNNER BARBER 2",
      price: "1.450.000 Đ",
      originalPrice: "1.850.000 Đ",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
      description: "Lưỡi cắt thép carbon phủ DLC sắc bén, pin Lithium hoạt động liên tục 4 giờ.",
    },
    {
      id: "sale-3",
      category: "THƯƠNG HIỆU",
      name: "MÁY UỐN SÓNG NƯỚC CERAMIC LUNARSOLO",
      price: "1.290.000 Đ",
      originalPrice: "1.650.000 Đ",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      description: "Trục gốm Tourmaline giải phóng ion âm giúp sóng tóc bóng mượt không khô xơ.",
    },
    {
      id: "sale-4",
      category: "PHỤ KIỆN SALON",
      name: "BALO ĐỰNG DỤNG CỤ STYLIST MONA BRASILIA",
      price: "790.000 Đ",
      originalPrice: "990.000 Đ",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      description: "Thiết kế ngăn chống sốc chuyên biệt cho kéo cắt, tông đơ và máy sấy.",
    },
    {
      id: "sale-5",
      category: "ĐỒNG PHỤC STYLIST",
      name: "ÁO KHOÁC CHỐNG HÓA CHẤT MONA SPORTSWEAR",
      price: "680.000 Đ",
      originalPrice: "890.000 Đ",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
      description: "Chất vải trượt nước, chống bám thuốc tẩy nhuộm và thoáng khí cả ngày.",
    },
    {
      id: "sale-6",
      category: "PHỤ KIỆN SALON",
      name: "TÚI ĐỰNG ĐỒ NGHỀ TÓC MONA GRAPHIC",
      price: "390.000 Đ",
      originalPrice: "520.000 Đ",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
      description: "Gọn nhẹ, chống thấm nước, phù hợp cho Stylist đi làm tóc sự kiện.",
    },
    {
      id: "sale-7",
      category: "ĐỒNG PHỤC STYLIST",
      name: "ÁO HOODIE HỌC VIỆN TÓC ADVANCE 15",
      price: "750.000 Đ",
      originalPrice: "980.000 Đ",
      isOnSale: true,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
      description: "Form dáng Streetwear năng động dành cho học viên và Master Stylist.",
    },
    {
      id: "sale-8",
      category: "PHỤ KIỆN SALON",
      name: "ÁO CHOÀNG CẮT TÓC CHỐNG TĨNH ĐIỆN PRO",
      price: "350.000 Đ",
      originalPrice: "450.000 Đ",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
      description: "Vải lụa tổng hợp siêu nhẹ không bám tóc con, khóa cài cổ êm ái.",
    },
  ],

  luxuryBrands: [
    "L'ORÉAL",
    "FILA STYLE",
    "Dior Beauty",
    "CONVERSE",
    "BALENCIAGA",
    "OLAPLEX",
    "KERASTASE",
    "GUCCI HAIR",
    "VERSACE",
    "VANS STUDIO",
    "Supreme",
    "DAVINES",
    "SHISEIDO",
    "DYSON PRO",
    "MOROCCANOIL",
    "GHD LONDON",
  ],

  newAccountOffer: {
    discountText: "ƯU ĐÃI GIẢM ĐẾN 30%",
    headline: "TÀI KHOẢN MỚI",
    buttonLabel: "ĐĂNG KÝ NGAY !",
    perks: [
      { id: "p-1", label: "Chất lượng cao", icon: "👍" },
      { id: "p-2", label: "Cam kết chính hãng", icon: "🏅" },
      { id: "p-3", label: "Giao nhanh siêu tốc", icon: "🚚" },
      { id: "p-4", label: "Đổi trả dễ dàng", icon: "📦" },
    ],
    floatingPills: [
      "Khách hàng tin tưởng",
      "Sản phẩm đa dạng",
      "Ưu đãi không giới hạn",
    ],
  },
};
