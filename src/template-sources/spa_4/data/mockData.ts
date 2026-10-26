import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa4PromoItem {
  id: string;
  tag: string;
  title: string;
  dateRange: string;
  description: string;
  image: string;
}

export interface Spa4YogaItem {
  id: string;
  title: string;
  price: string;
  schedule: string;
  image: string;
}

export interface Spa4MainService {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Spa4Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
}

export interface Spa4Data extends ClonedTemplateBaseData {
  resortIntroImage: string;
  promoBannerImage: string;
  promotions: Spa4PromoItem[];
  yogaClasses: Spa4YogaItem[];
  mainServices: Spa4MainService[];
  products: Spa4Product[];
  roomTypes: string[];
  bookingServices: string[];
}

export const spa4DefaultData: Spa4Data = {
  business: {
    name: "Victoria Spa",
    phone: ["076 922 0162", "0908 668 999"],
    email: ["cskh@victoriaspa.vn", "booking@victoriaspa.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:30 - 21:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 680,
    experienceYears: "12 Năm",
    aboutTitle: "DỊCH VỤ NGHỈ DƯỠNG RESORT & SPA",
    aboutText: [
      "Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại cùng những mảng màu xanh ngát của thiên nhiên.",
      "Tại Victoria Spa, mỗi liệu trình đều được thiết kế riêng biệt kết hợp thảo dược thiên nhiên quý hiếm cùng kỹ thuật trị liệu chuẩn quốc tế, mang lại sự thư thái tuyệt đối cho cả cơ thể và tâm trí."
    ],
    highlights: [
      "Không gian Resort xanh mát, tách biệt khói bụi đô thị",
      "100% tinh chất thảo dược hữu cơ an toàn cho làn da",
      "Đội ngũ kỹ thuật viên giàu kinh nghiệm, tận tâm"
    ]
  },
  hero: {
    eyebrow: "Resort & Spa Trị Liệu Thảo Dược",
    title: "VICTORIA SPA & RESORT",
    subtitle:
      "Thiên đường nghỉ dưỡng và chăm sóc sức khỏe toàn diện cho mọi người với không gian hiện đại cùng những mảng màu xanh ngát của thiên nhiên",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#dat-dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  resortIntroImage:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
  promoBannerImage:
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
  roomTypes: [
    "Tiêu chuẩn (Standard Spa Room)",
    "Phòng đôi (Couple Suite)",
    "Phòng VIP Thảo Dược (Herbal VIP)",
    "Biệt thự Nghỉ dưỡng (Garden Villa)"
  ],
  bookingServices: [
    "Chăm sóc da chuyên sâu",
    "Massage đá nóng thảo dược",
    "Tắm trắng phi thuyền Hoàng gia",
    "Căng bóng da Hàn Quốc Aqua Peel",
    "Gội đầu dưỡng sinh Trung Hoa"
  ],
  promotions: [
    {
      id: "promo-1",
      tag: "Khuyến mãi",
      title: "Dịch vụ Massage",
      dateRange: "01/05/2025 – 30/06/2025",
      description:
        "Ưu đãi 35% gói Massage thảo dược đá nóng đả thông kinh lạc và giải tỏa căng thẳng vùng cổ vai gáy.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "promo-2",
      tag: "Khuyến mãi",
      title: "Chăm sóc da",
      dateRange: "01/05/2025 – 30/06/2025",
      description:
        "Tặng liệu trình đắp mặt nạ vàng 24K phục hồi chuyên sâu khi đăng ký gói chăm sóc da mặt toàn diện.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
    }
  ],
  yogaClasses: [
    {
      id: "yoga-1",
      title: "Hatha Yoga Trị Liệu",
      price: "720.000vnđ",
      schedule: "Thứ 2 - Thứ 4 - Thứ 6 (06:30 - 07:45)",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "yoga-2",
      title: "Ashtanga Yoga Năng Lượng",
      price: "720.000vnđ",
      schedule: "Thứ 3 - Thứ 5 - Thứ 7 (07:00 - 08:15)",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "yoga-3",
      title: "Yin Yoga Phục Hồi",
      price: "720.000vnđ",
      schedule: "Thứ 2 - Thứ 4 - Thứ 6 (17:30 - 18:45)",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "yoga-4",
      title: "Vinyasa Flow Thư Giãn",
      price: "720.000vnđ",
      schedule: "Thứ 3 - Thứ 5 - Chủ Nhật (18:00 - 19:15)",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80"
    }
  ],
  mainServices: [
    {
      id: "ms-1",
      title: "Tắm trắng",
      description:
        "Ủ trắng thảo mộc thiên nhiên kết hợp tinh chất ngọc trai giúp bật tông da an toàn, mịn màng tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ms-2",
      title: "Chăm sóc da mặt",
      description:
        "Làm sạch sâu, hút chì thải độc và cấp ẩm đa tầng mang lại làn da căng mướt, rạng rỡ.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ms-3",
      title: "Massage thư giãn",
      description:
        "Liệu pháp ấn huyệt cổ truyền kết hợp tinh dầu sả chanh và đá nóng núi lửa giúp phục hồi sinh lực.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ms-4",
      title: "Căng da Hàn Quốc",
      description:
        "Công nghệ cấy tinh chất collagen thủy phân giúp nâng cơ trẻ hóa và xóa mờ nếp nhăn hiệu quả.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Tắm trắng thảo dược Hoàng gia",
      category: "Body Care",
      description:
        "Sử dụng 18 vị thảo mộc cung đình kết hợp sữa non cô đặc nuôi dưỡng làn da trắng hồng tự nhiên.",
      price: "850,000 ₫",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "srv-2",
      title: "Chăm sóc da mặt chuyên sâu",
      category: "Facial Care",
      description:
        "Thanh lọc độc tố, điện di tinh chất HA và đắp mặt nạ tảo xoắn Nhật Bản cấp ẩm sâu.",
      price: "490,000 ₫",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "srv-3",
      title: "Massage thư giãn đá nóng",
      category: "Body Therapy",
      description:
        "Đả thông kinh lạc toàn thân bằng đá bazan ấm nóng và tinh dầu hoa oải hương nguyên chất.",
      price: "420,000 ₫",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "srv-4",
      title: "Căng da Hàn Quốc Mulgwang",
      category: "High-Tech",
      description:
        "Trẻ hóa đa tầng với tinh chất Peptide và HA phân tử siêu nhỏ giúp da bóng khỏe như sương.",
      price: "1,250,000 ₫",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80"
    }
  ],
  products: [
    {
      id: "prod-1",
      name: "Máy rửa mặt Spin Spa",
      category: "Thiết bị làm đẹp",
      price: "250,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-2",
      name: "Kem dưỡng trắng Glow Cream",
      category: "Chăm sóc da mặt",
      price: "250,000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-3",
      name: "Máy massage mắt Ion",
      category: "Thiết bị làm đẹp",
      price: "250,000 ₫",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-4",
      name: "Dầu gội thảo mộc bồ kết",
      category: "Chăm sóc tóc",
      price: "250,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-5",
      name: "Tinh dầu dưỡng Tsubaki Spa",
      category: "Chăm sóc tóc",
      price: "250,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Phép màu của công nghệ Lăn kim tế bào gốc tự thân",
      date: "15/05/2025",
      category: "Công nghệ làm đẹp",
      excerpt:
        "Giải pháp tái tạo bề mặt da sẹo rỗ, thu nhỏ lỗ chân lông và kích thích sản sinh collagen mạnh mẽ.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "Trẻ hóa da công nghệ cao IPL Elight thế hệ mới",
      date: "10/05/2025",
      category: "Trẻ hóa da",
      excerpt:
        "Đánh bay sắc tố melanin, làm mờ thâm nám và cải thiện độ đàn hồi cho làn da chỉ sau 1 liệu trình.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "AQUA CÔNG NGHỆ TRẺ HÓA CĂNG BÓNG DA HÀN QUỐC",
      date: "04/05/2025",
      category: "Xu hướng Spa",
      excerpt:
        "Bí quyết sở hữu làn da ngậm nước, căng bóng mịn màng chuẩn sao Hàn không cần xâm lấn.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
