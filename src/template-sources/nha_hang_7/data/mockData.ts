import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaHang7Voucher {
  id: string;
  title: string;
  billText: string;
  discountText: string;
  code: string;
  validDate: string;
}

export interface NhaHang7CraftCard {
  id: string;
  title: string;
  description: string;
  icon: "grape" | "barrel" | "bottle";
}

export interface NhaHang7WineProduct {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  rating: number;
  vintageNote: string;
  image: string;
}

export interface NhaHang7Data extends ClonedTemplateBaseData {
  vouchers: NhaHang7Voucher[];
  fineDrinkSection: {
    eyebrow: string;
    title: string;
    description: string;
    leftPortraitImage: string;
    rightVineyardImage: string;
  };
  craftSection: {
    eyebrow: string;
    title: string;
    cards: NhaHang7CraftCard[];
  };
  portfolioSection: {
    eyebrow: string;
    title: string;
    description: string;
    images: string[];
  };
  tourQuote: {
    eyebrow: string;
    quote: string;
    highlightWord: string;
    author: string;
    role: string;
  };
  wineProducts: NhaHang7WineProduct[];
  decanterVideoImage: string;
  instagramStrip: string[];
}

export const nhaHang7DefaultData: NhaHang7Data = {
  business: {
    name: "Mona Winery",
    phone: ["0909 888 797", "028 3822 9988"],
    email: ["sommelier@monawinery.vn", "booking@monawinery.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 10:00 - 23:30",
    rating: 4.9,
    reviewCount: 840,
    aboutTitle: "Nhà máy rượu cổ điển của chúng tôi dựa trên kỹ thuật truyền thống",
    aboutText: [
      "Chúng tôi cung cấp những chai rượu cao cấp, tạo nên trải nghiệm thưởng thức đẳng cấp. Khám phá bộ sưu tập đa dạng và chọn lựa những chai rượu tinh túy từ các vùng đất nổi tiếng trên thế giới."
    ],
    highlights: [
      "100% nho hữu cơ thu hoạch thủ công từ những vùng trồng trứ danh",
      "Ủ trong thùng gỗ sồi Pháp từ 24 đến 60 tháng ở nhiệt độ tiêu chuẩn",
      "Không gian hầm rượu cổ điển kết hợp ẩm thực Âu Fine Dining"
    ]
  },
  hero: {
    eyebrow: "Thế Giới Rượu Vang Chất Lượng",
    subtitle: "Thế Giới Rượu Vang Chất Lượng",
    title: "Rượu Hữu Cơ Chất Lượng",
    description:
      "Tuyển chọn những dòng vang đỏ, vang trắng và Champagne thượng hạng được ủ theo phương pháp truyền thống lâu đời.",
    ctaText: "Khám Phá Ngay",
    ctaLink: "#wine-shop",
    secondaryCtaText: "Cuộn Xuống",
    secondaryCtaLink: "#vouchers",
    backgroundImage:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1920&q=85"
  },
  vouchers: [
    {
      id: "v-1",
      title: "VOUCHER 1",
      billText: "Hóa đơn: 5.000.000₫",
      discountText: "Giảm ngay: 500.000₫",
      code: "LO-2314VIP",
      validDate: "30 Th12 2026"
    },
    {
      id: "v-2",
      title: "VOUCHER 2",
      billText: "Hóa đơn: 5.000.000₫",
      discountText: "Giảm ngay: 500.000₫",
      code: "LO-2314WINE",
      validDate: "30 Th12 2026"
    },
    {
      id: "v-3",
      title: "VOUCHER 3",
      billText: "Hóa đơn: 5.000.000₫",
      discountText: "Giảm ngay: 500.000₫",
      code: "LO-2314CELLAR",
      validDate: "30 Th12 2026"
    },
    {
      id: "v-4",
      title: "VOUCHER 4",
      billText: "Hóa đơn: 5.000.000₫",
      discountText: "Giảm ngay: 500.000₫",
      code: "LO-2314GOLD",
      validDate: "30 Th12 2026"
    }
  ],
  fineDrinkSection: {
    eyebrow: "ĐỒ UỐNG TUYỆT VỜI",
    title: "Chúng tôi cung cấp những chai rượu cao cấp",
    description:
      "Chúng tôi cung cấp những chai rượu cao cấp, tạo nên trải nghiệm thưởng thức đẳng cấp. Khám phá bộ sưu tập đa dạng và chọn lựa những chai rượu tinh túy từ các vùng đất nổi tiếng trên thế giới.",
    leftPortraitImage:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    rightVineyardImage:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80"
  },
  craftSection: {
    eyebrow: "CHÚNG TÔI LÀ",
    title: "Nhà máy rượu cổ điển của chúng tôi dựa trên kỹ thuật truyền thống",
    cards: [
      {
        id: "cr-1",
        title: "Nho chất lượng",
        description:
          "Nho được trồng trên những vùng đất đặc biệt, được chọn lựa một cách kỹ lưỡng để đảm bảo chất lượng và hương vị tốt nhất.",
        icon: "grape"
      },
      {
        id: "cr-2",
        title: "Sản xuất",
        description:
          "Từ việc ép nho, lên men, lên men thứ hai, cho đến việc ủ và lưu trữ, mỗi bước đều được thực hiện với sự tỉ mỉ và chuyên nghiệp.",
        icon: "barrel"
      },
      {
        id: "cr-3",
        title: "Rượu sưu tầm",
        description:
          "Các chuyên gia và nhà sưu tầm rượu đã dành thời gian và công sức để tìm kiếm những chai rượu độc đáo từ khắp nơi.",
        icon: "bottle"
      }
    ]
  },
  portfolioSection: {
    eyebrow: "DANH MỤC ĐẦU TƯ",
    title: "Hãy nhìn vào công việc",
    description:
      "Khi xây dựng hầm rượu cổ điển, yếu tố quan trọng nhất cần xem xét là quy trình ủ rượu chuẩn mực. Nghệ thuật làm vang là cốt lõi của chúng tôi, và hiệu suất cũng như chất lượng của quá trình ủ thùng gỗ sồi tạo nên hương vị độc bản.",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=700&q=80"
    ]
  },
  tourQuote: {
    eyebrow: "CHUYẾN THAM QUAN",
    quote:
      "Rượu vang chọn lọc, cảnh quan tuyệt đẹp và bầu không khí thân thiện dành cho những ai yêu",
    highlightWord: "thiên nhiên",
    author: "Peter Bowman",
    role: "Chủ Hầm Rượu & Sommelier"
  },
  wineProducts: [
    {
      id: "w-1",
      name: "Cabernet Sauvignon",
      price: "1.650.000 ₫",
      rating: 5,
      vintageNote: "Niên vụ 2018 • Vang Đỏ Bordeaux",
      image:
        "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "w-2",
      name: "Prosecco Label Reserve",
      oldPrice: "990.000 ₫",
      price: "890.000 ₫",
      discountBadge: "-10%",
      rating: 5,
      vintageNote: "Vang Sủi Ý Thượng Hạng",
      image:
        "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "w-3",
      name: "Chardonnay Montonico",
      price: "1.490.000 ₫",
      rating: 5,
      vintageNote: "Niên vụ 2020 • Vang Trắng Thanh Khiết",
      image:
        "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "w-4",
      name: "Sauvignon Red Grand Cru",
      price: "1.250.000 ₫ – 1.650.000 ₫",
      rating: 5,
      vintageNote: "Niên vụ 2017 • Ủ Thùng Gỗ Sồi Pháp",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80"
    }
  ],
  decanterVideoImage:
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85",
  stats: [
    { id: "st-1", number: "98", title: "Công Nhân" },
    { id: "st-2", number: "25", title: "Loại Rượu Vang" },
    { id: "st-3", number: "10", title: "Năm Rượu Vang" },
    { id: "st-4", number: "30", title: "Vườn nho" }
  ],
  news: [
    {
      id: "news-1",
      title: "Bí quyết chăm sóc vườn nho hữu cơ trù phú qua nhiều thập kỷ",
      date: "21 Tháng Tư, 2026",
      category: "LỊCH SỬ RƯỢU VANG",
      excerpt:
        "Tìm hiểu cách kiểm soát độ ẩm đất, tỉa cành mùa xuân và thu hoạch nho vào lúc bình minh để giữ trọn hàm lượng đường tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Quy trình ủ rượu vang truyền thống tuyệt đẹp trong hầm gỗ sồi",
      date: "21 Tháng Tư, 2026",
      category: "LỊCH SỬ RƯỢU VANG",
      excerpt:
        "Sự giao thoa kỳ diệu giữa tannin tự nhiên của gỗ sồi Pháp và dịch nho lên men chậm tạo nên tầng hương vani, khói và quả mọng.",
      image:
        "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Hướng dẫn bảo quản các dòng rượu vang đúng chuẩn nhiệt độ tại nhà",
      date: "21 Tháng Tư, 2026",
      category: "LỊCH SỬ RƯỢU VANG",
      excerpt:
        "Vì sao cần đặt chai rượu nằm ngang ở nhiệt độ 12-16 độ C và thời gian thở trong bình Decanter lý tưởng cho từng giống nho.",
      image:
        "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=700&q=80"
    }
  ],
  instagramStrip: [
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&w=500&q=80"
  ]
};
