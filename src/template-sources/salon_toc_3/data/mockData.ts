import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SalonToc3Product {
  id: string;
  category: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  tab: "HÀNG MỚI" | "BÁN CHẠY" | "GIẢM GIÁ";
  image: string;
  description: string;
}

export interface SalonToc3FeaturedSale {
  id: string;
  saleTag: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface SalonToc3Data extends ClonedTemplateBaseData {
  perks: Array<{
    id: string;
    icon: "truck" | "card" | "user" | "sun";
    title: string;
    subtitle: string;
  }>;
  hotCategories: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  products: SalonToc3Product[];
  quoteSection: {
    avatar: string;
    quote: string;
    author: string;
    backgroundImage: string;
  };
  featuredSales: SalonToc3FeaturedSale[];
  brandLogos: string[];
}

export const salonToc3DefaultData: SalonToc3Data = {
  business: {
    name: "Harosa Salon",
    phone: ["0126 922 0162", "0909 388 162"],
    email: ["contact@harosasalon.vn", "booking@harosasalon.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:30 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1120,
    aboutTitle: "Danh Mục HOT Trong Ngày",
    aboutText: [
      "Trải nghiệm dịch vụ tạo mẫu tóc chuẩn Hàn Quốc, phục hồi Keratin chuyên sâu và hệ sinh thái mỹ phẩm chăm sóc tóc hữu cơ chính hãng tại Harosa Salon."
    ],
  },
  hero: {
    eyebrow: "Ưu đãi mùa lễ hội đã bắt đầu...",
    title: "Ưu đãi lớn lên tới\n40% OFF",
    subtitle: "Trọn gói Uốn - Nhuộm Balayage - Phục hồi Olaplex & Tinh dầu dưỡng tóc cao cấp",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=85",
  },
  perks: [
    {
      id: "p-1",
      icon: "truck",
      title: "MIỄN PHÍ VẬN CHUYỂN",
      subtitle: "Miễn phí giao hàng toàn quốc",
    },
    {
      id: "p-2",
      icon: "card",
      title: "BẢO ĐẢM TÀI CHÍNH",
      subtitle: "Hoàn tiền trong 30 ngày",
    },
    {
      id: "p-3",
      icon: "user",
      title: "HỖ TRỢ TRỰC TUYẾN",
      subtitle: "Tư vấn mẫu tóc online 24/24",
    },
    {
      id: "p-4",
      icon: "sun",
      title: "THANH TOÁN AN TOÀN",
      subtitle: "Đảm bảo chính hãng 100%",
    },
  ],
  hotCategories: [
    {
      id: "hc-1",
      title: "Phái Yếu",
      description:
        "Tạo kiểu uốn sóng lơi Hàn Quốc, nhuộm tẩy an toàn và phục hồi cấu trúc tóc bóng mượt chuẩn salon.",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "hc-2",
      title: "Phái Mạnh",
      description:
        "Thiết kế kiểu tóc nam lịch lãm, uốn phồng Layer, nhuộm khói thời thượng và chăm sóc da đầu chuyên sâu.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "hc-3",
      title: "Sức Khỏe Mái Tóc",
      description:
        "Liệu trình gội đầu dưỡng sinh thảo mộc, thải độc da đầu và huyết thanh kích thích mọc tóc tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    },
  ],
  products: [
    {
      id: "st3-1",
      category: "DƯỠNG CHẤT",
      name: "Tảo Xoắn Dưỡng Tóc Spirulina Nhật Bản",
      price: "480,000 ₫",
      tab: "HÀNG MỚI",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      description:
        "Bổ sung axit amin và khoáng chất từ tảo xoắn Nhật Bản giúp nang tóc chắc khỏe, giảm gãy rụng rõ rệt.",
    },
    {
      id: "st3-2",
      category: "CHĂM SÓC TÓC",
      name: "Xịt Dưỡng Tóc Hương Hoa Bombshells In Bloom",
      price: "305,000 ₫",
      tab: "BÁN CHẠY",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      description:
        "Cấp ẩm tức thì, chống nhiệt máy sấy và lưu hương hoa cỏ thanh lịch trên mái tóc suốt 12 giờ.",
    },
    {
      id: "st3-3",
      category: "HAIR & BODY",
      name: "Sáp Dưỡng & Nước Hoa Tóc Khô Hương Tự Nhiên",
      price: "320,000 ₫",
      tab: "HÀNG MỚI",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
      description:
        "Định hình nếp tóc uốn mềm mại không gây bết dính, bảo vệ tóc khỏi tia UV.",
    },
    {
      id: "st3-4",
      category: "PHỤC HỒI CHUYÊN SÂU",
      name: "Kem Ủ Tóc Phục Hồi Collagen & Keratin",
      oldPrice: "205,000 ₫",
      price: "185,000 ₫",
      discountBadge: "-10%",
      tab: "GIẢM GIÁ",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description:
        "Phục hồi chuyên sâu tóc khô xơ, chẻ ngọn do uốn nhuộm hóa chất nhiều lần.",
    },
  ],
  quoteSection: {
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "Một mái tóc bồng bềnh, óng ả được nuôi dưỡng từ tinh chất thiên nhiên chính là trang sức quý giá nhất tôn lên thần thái rạng ngời của bạn...",
    author: "Harosa",
    backgroundImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
  },
  featuredSales: [
    {
      id: "fs-1",
      saleTag: "ƯU ĐÃI 30%",
      title: "GEL ĐỊNH HÌNH NẾP TÓC UỐN NSI BALANCE",
      description:
        "Giữ nếp sóng tóc bồng bềnh tự nhiên suốt cả ngày mà không làm khô cứng sợi tóc.",
      price: "390,000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "fs-2",
      saleTag: "ƯU ĐÃI 50%",
      title: "TINH DẦU DƯỠNG TÓC NUDE ARGAN OIL 100ML",
      description:
        "Chiết xuất dầu Argan nguyên chất giúp khóa ẩm, tạo độ bóng mượt tức thì cho tóc nhuộm.",
      price: "450,000 ₫",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "fs-3",
      saleTag: "ƯU ĐÃI 20%",
      title: "MẶT NẠ HẤP DẦU COLLAGEN PBM LUXURY",
      description:
        "Tái tạo liên kết Keratin bị đứt gãy, trả lại độ đàn hồi chắc khỏe từ gốc tới ngọn.",
      price: "520,000 ₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80",
    },
  ],
  news: [
    {
      id: "news-1",
      title: "TOP 6 màu nhuộm tôn da không bao giờ hết 'nóng' tại Salon",
      date: "27 Tháng Tám, 2025",
      category: "XU HƯỚNG TÓC",
      excerpt:
        "Từ nâu trà sữa ánh khói đến đỏ rượu vang quyến rũ, đâu là gam màu nhuộm sinh ra để giúp khuôn mặt bạn bừng sáng...",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-2",
      title: "Bí quyết bảo vệ mái tóc nhuộm luôn bền màu dưới ánh nắng mùa hè",
      date: "27 Tháng Tám, 2025",
      category: "CHĂM SÓC TÓC",
      excerpt:
        "Ánh nắng mặt trời và nhiệt độ cao có thể làm phai màu tóc nhuộm nhanh chóng nếu bạn bỏ qua bước xịt dưỡng chống tia UV...",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-3",
      title: "Quy trình phục hồi Keratin 5 bước chuẩn Nhật cho mái tóc tẩy hư tổn",
      date: "27 Tháng Tám, 2025",
      category: "PHỤC HỒI",
      excerpt:
        "Bằng sự nhạy bén, thấu hiểu cấu trúc sợi tóc Á Đông, đội ngũ chuyên gia tại Harosa Salon đã ứng dụng công nghệ cấp ẩm nano...",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    },
  ],
  brandLogos: ["CHANEL", "VERSACE", "HERMÈS", "D&G", "OLAPLEX", "MOROCCANOIL"],
};
