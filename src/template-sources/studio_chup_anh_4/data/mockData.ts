import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface StudioChupAnh4Product {
  id: string;
  name: string;
  category: string;
  oldPrice?: string;
  price: string;
  discountBadge?: string;
  isTopProduct?: boolean;
  image: string;
  description: string;
}

export interface StudioChupAnh4Data extends ClonedTemplateBaseData {
  topPromos: Array<{
    id: string;
    scriptEyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  trustPerks: Array<{
    id: string;
    icon: "truck" | "clock" | "dollar" | "percent";
    title: string;
    subtitle: string;
  }>;
  products: StudioChupAnh4Product[];
  splitBanners: Array<{
    id: string;
    scriptEyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  galleryStrip: string[];
}

export const studioChupAnh4DefaultData: StudioChupAnh4Data = {
  business: {
    name: "Floda Bridal",
    phone: ["(028) 800 456 789", "0909 456 987"],
    email: ["contact@flodabridal.vn", "studio@flodabridal.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:00 (Mỗi ngày)",
    rating: 4.9,
    reviewCount: 860,
    aboutTitle: "Chào mừng đến với cửa hàng trực tuyến Floda Bridal",
    aboutText: [
      "Floda Bridal chuyên thiết kế hoa cưới nghệ thuật, hộp quà kỷ niệm và thực hiện các bộ ảnh cưới ngoại cảnh lãng mạn."
    ],
  },
  hero: {
    eyebrow: "Món quà Valentine",
    title: "Thay Đổi Suy Nghĩ\nvà Cảm Nhận Tình Yêu",
    subtitle: "Sản phẩm mới, ý tưởng mới, phong cách mới, vẻ đẹp mới",
    ctaText: "Mua Ngay",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=85",
  },
  topPromos: [
    {
      id: "tp-1",
      scriptEyebrow: "ứu Đãi Thứ Sáu",
      title: "Hồng Vàng Gold",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "tp-2",
      scriptEyebrow: "Bộ Sưu Tập Mới",
      title: "Hoa Lan Cưới",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "tp-3",
      scriptEyebrow: "Giảm Giá 10%",
      title: "Hoa Tulip Hồng",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
    },
  ],
  trustPerks: [
    {
      id: "perk-1",
      icon: "truck",
      title: "MIỄN PHÍ VẬN CHUYỂN",
      subtitle: "Miễn Phí Tất Cả Đơn Hàng",
    },
    {
      id: "perk-2",
      icon: "clock",
      title: "HỖ TRỢ 24/7",
      subtitle: "Hỗ Trợ 24 Giờ Một Ngày",
    },
    {
      id: "perk-3",
      icon: "dollar",
      title: "HOÀN TIỀN",
      subtitle: "Hoàn Tiền Trong 30 Ngày",
    },
    {
      id: "perk-4",
      icon: "percent",
      title: "GIẢM GIÁ",
      subtitle: "Với Đơn Hàng Trên 1 Triệu",
    },
  ],
  products: [
    {
      id: "fl-1",
      name: "Bó Hoa Dạ Lan Hương Trắng & Hồng Phấn",
      category: "Hoa cưới",
      oldPrice: "590,000 ₫",
      price: "550,000 ₫",
      discountBadge: "-7%",
      isTopProduct: true,
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
      description:
        "Bó hoa cầm tay kết hợp dạ lan hương trắng và hồng phấn Đà Lạt kèm gói chụp hình ngoại cảnh.",
    },
    {
      id: "fl-2",
      name: "Bó Hoa Cúc Mẫu Đơn Hồng & Hồng Nhung",
      category: "Hoa Valentine",
      price: "460,000 ₫",
      isTopProduct: true,
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      description:
        "Sự giao hòa rực rỡ giữa sắc đỏ nhung nồng nàn và hồng kem thanh lịch.",
    },
    {
      id: "fl-3",
      name: "Bó Hoa Cưới Blossom Tím Lavender",
      category: "Hoa cưới",
      oldPrice: "980,000 ₫",
      price: "790,000 ₫",
      discountBadge: "-19%",
      isTopProduct: true,
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
      description:
        "Bó hoa gói giấy lụa tím pastel mang phong cách lãng mạn Pháp.",
    },
    {
      id: "fl-4",
      name: "Trọn Gói Hoa Cưới & Album Pre-Wedding",
      category: "Hoa cưới",
      price: "5,600,000 ₫",
      isTopProduct: true,
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
      description:
        "Trọn gói hoa cầm tay cô dâu, hoa cài áo chú rể và buổi chụp Pre-Wedding tại phim trường.",
    },
    {
      id: "fl-5",
      name: "Bó Hoa Cúc Họa Mi & Cát Tường Tím",
      category: "Hoa của mẹ",
      price: "770,000 ₫",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế trang nhã dành tặng mẹ và người thương trong dịp lễ kỷ niệm.",
    },
    {
      id: "fl-6",
      name: "Bình Hoa Lan Vũ Nữ & Ly Vàng Nghệ Thuật",
      category: "Hoa Sale",
      oldPrice: "950,000 ₫",
      price: "690,000 ₫",
      discountBadge: "-27%",
      image:
        "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?auto=format&fit=crop&w=600&q=80",
      description:
        "Bình thủy tinh cắm hoa lan nghệ thuật trang trí bàn tiệc cưới và phòng khách.",
    },
    {
      id: "fl-7",
      name: "Bó Hoa Cưới Linh Lan & Tulip Trắng",
      category: "Hoa cưới",
      oldPrice: "1,450,000 ₫",
      price: "1,160,000 ₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
      description:
        "Bó hoa cưới cao cấp biểu tượng cho hạnh phúc thuần khiết trở về.",
    },
    {
      id: "fl-8",
      name: "Bó Hoa Cẩm Chướng Hồng Tím Dịu Dàng",
      category: "Hoa Tựu Trường",
      oldPrice: "850,000 ₫",
      price: "650,000 ₫",
      discountBadge: "-24%",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
      description:
        "Sắc hồng tím tươi tắn lưu giữ nét thanh xuân rạng ngời.",
    },
  ],
  splitBanners: [
    {
      id: "sb-1",
      scriptEyebrow: "Dành Tặng Bạn",
      title: "Tháp Hoa Tulip",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "sb-2",
      scriptEyebrow: "Dành Tặng Bạn",
      title: "Hoa & Hộp Quà",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=700&q=80",
    },
  ],
  galleryStrip: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
  ],
};
