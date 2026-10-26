import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface QuanCafe4Product {
  id: string;
  badgeTitle?: string;
  name: string;
  flavorTag?: string;
  price: string;
  image: string;
  type: "cake" | "tub" | "drink";
}

export interface QuanCafe4Data extends ClonedTemplateBaseData {
  heroPriceHighlight: string;
  heroRibbonText: string;
  heroCakeImage: string;
  pinkPillars: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  products: QuanCafe4Product[];
  footerColumns: {
    kem: string[];
    datHang: string[];
    gioiThieu: string[];
  };
}

export const quanCafe4DefaultData: QuanCafe4Data = {
  business: {
    name: "Sweet Gelato",
    phone: ["1900 2076", "0126 922 0162"],
    email: ["cskh@sweetgelato.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "09:00 - 22:30 mỗi ngày",
    rating: 4.9,
    reviewCount: 460,
    aboutTitle: "Tiệm Kem Tươi Ý, Trà Chiều & Bánh Kem Lạnh",
    aboutText: [
      "Sweet Gelato mang đến thế giới bánh kem lạnh 100% Gelato tươi chuẩn vị, thức uống đá xay mát lạnh và không gian trà chiều ngọt ngào dành cho giới trẻ và gia đình."
    ]
  },
  hero: {
    eyebrow: "TIỆM KEM TƯƠI & BÁNH NGỌT TRÁNG MIỆNG",
    title: "BÁNH 100% KEM LẠNH",
    subtitle: "Giao tận nơi siêu tốc giữ trọn độ lạnh hoàn hảo",
    ctaText: "ĐẶT BÁNH NGAY",
    ctaLink: "#danh-sach-san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85"
  },
  heroPriceHighlight: "150K",
  heroRibbonText: "BÁNH 100% KEM LẠNH",
  heroCakeImage:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  pinkPillars: [
    {
      id: "pk-1",
      title: "KHUYẾN MÃI",
      description:
        "Thưởng thức ngay mùi kem yêu thích của bạn với các chương trình khuyến mãi cực hấp dẫn mỗi tuần.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "pk-2",
      title: "TIN TỨC – SỰ KIỆN",
      description:
        "Những tin tức về những sự kiện lễ hội kem tươi như làn gió mát đưa đến kịp thời với bạn.",
      image:
        "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "pk-3",
      title: "HỆ THỐNG CỬA HÀNG",
      description:
        "Xem để khám phá cửa hàng Sweet Gelato & Trà Chiều gần bạn nhất trên toàn quốc.",
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=300&q=80"
    }
  ],
  products: [
    // Row 1
    {
      id: "gc-1",
      badgeTitle: "NGỌT NGÀO ĐÔI LỨA",
      name: "Bánh Kem Lạnh Ngọt Ngào",
      flavorTag: "Hạnh Nhân & Sô-cô-la Fudge",
      price: "540,000 ₫",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-2",
      badgeTitle: "DÂU TÂY NGỌT DỊU",
      name: "Bánh Kem Dâu Tây Phô Mai",
      flavorTag: "Sô-cô-la & Dâu Tây Cheesecake",
      price: "600,000 ₫",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-3",
      badgeTitle: "SINH NHẬT RỰC RỠ",
      name: "Bánh Kem Mừng Sinh Nhật",
      flavorTag: "Vani Ý & Kẹo Bông Ngọt",
      price: "600,000 ₫",
      image:
        "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-4",
      badgeTitle: "BÁNH QUY OREO",
      name: "Bánh Kem Lạnh Oreo Cookies",
      flavorTag: "Sô-cô-la Nguyên Chất",
      price: "540,000 ₫",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    // Row 2
    {
      id: "gc-5",
      badgeTitle: "OREO BẠC HÀ",
      name: "Bánh Kem Oreo Bạc Hà",
      flavorTag: "Bạc Hà & Sô-cô-la Chip",
      price: "370,000 ₫",
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-6",
      badgeTitle: "NÀNG TIÊN HỒNG",
      name: "Bánh Kem Nàng Tiên Hồng",
      flavorTag: "Dâu Tây & Bạc Hà Chip",
      price: "370,000 ₫",
      image:
        "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-7",
      badgeTitle: "VỊ NGỌT MÊ ĐẮM",
      name: "Bánh Kem Cacao Mê Đắm",
      flavorTag: "Bánh Quy Kem & Dâu Rừng",
      price: "370,000 ₫",
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-8",
      badgeTitle: "VƯỜN HỒNG TÌNH YÊU",
      name: "Bánh Kem Vườn Hồng",
      flavorTag: "Vani & Bạc Hà Sô-cô-la",
      price: "370,000 ₫",
      image:
        "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    // Row 3
    {
      id: "gc-9",
      badgeTitle: "THƯƠNG NHỚ NGỌT NGÀO",
      name: "Bánh Kem Tím Thương Nhớ",
      flavorTag: "Sô-cô-la & Vani Pháp",
      price: "370,000 ₫",
      image:
        "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-10",
      badgeTitle: "THANH LỊCH TINH KHÔI",
      name: "Bánh Kem Thanh Lịch",
      flavorTag: "Cà Phê Hạnh Nhân Fudge",
      price: "370,000 ₫",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-11",
      badgeTitle: "SẮC HỒNG VĨNH CỬU",
      name: "Bánh Kem Hồng Vĩnh Cửu",
      flavorTag: "Dâu Tây Mọng Nước",
      price: "320,000 ₫",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-12",
      badgeTitle: "BẠC HÀ MÁT LẠNH",
      name: "Bánh Kem Xanh Bạc Hà",
      flavorTag: "Bạc Hà Sô-cô-la Chip",
      price: "320,000 ₫",
      image:
        "https://images.unsplash.com/photo-1557925923-33b27f891f88?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    // Row 4
    {
      id: "gc-13",
      badgeTitle: "ANH ĐÀO RỪNG ĐỎ",
      name: "Bánh Kem Anh Đào Rừng",
      flavorTag: "Vani Kem Tươi",
      price: "320,000 ₫",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-14",
      badgeTitle: "CÔNG CHÚA NHỎ",
      name: "Bánh Kem Công Chúa (10cm)",
      flavorTag: "Bánh Quy Kem Sữa",
      price: "150,000 ₫",
      image:
        "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-15",
      badgeTitle: "TUXEDO SÔ-CÔ-LA",
      name: "Bánh Kem Tuxedo Sô-cô-la",
      flavorTag: "Hạt Điều Rang Bơ",
      price: "150,000 ₫",
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=500&q=80",
      type: "cake"
    },
    {
      id: "gc-16",
      name: "Hộp Kem Tươi Cỡ Lớn (L)",
      price: "290,000 ₫",
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=500&q=80",
      type: "tub"
    },
    // Row 5
    {
      id: "gc-17",
      name: "Hộp Kem Tươi Cỡ Vừa (M)",
      price: "210,000 ₫",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
      type: "tub"
    },
    {
      id: "gc-18",
      name: "Hộp Kem Tươi Cỡ Nhỏ (S)",
      price: "135,000 ₫",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=80",
      type: "tub"
    },
    {
      id: "gc-19",
      name: "Cappuccino Đá Xay Kem Ý",
      price: "85,000 ₫",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
      type: "drink"
    },
    {
      id: "gc-20",
      name: "Mocha Cappuccino Đá Xay",
      price: "89,000 ₫",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
      type: "drink"
    }
  ],
  news: [
    {
      id: "cn-1",
      title: "Sweet Gelato Vẽ Nên Con Đường Sắc Màu Cùng Đường Chạy Mùa Hè",
      date: "16/04/2026",
      excerpt: "Hàng ngàn bạn trẻ đã cùng thưởng thức 31 vị kem tươi mát lạnh trong ngày hội...",
      image:
        "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cn-2",
      title: "Sự Kiện Ra Mắt Bộ Sưu Tập KEM LẮC Trái Cây Nhiệt Đới Mới",
      date: "10/04/2026",
      excerpt: "Sweet Gelato mang đến sự kết hợp bùng nổ giữa kem tươi nguyên chất và xoài, dâu...",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cn-3",
      title: "Tiệc Kem 31 Mùi Vui Cùng Lễ Kỷ Niệm Ẩm Thực Quốc Tế Tại Việt Nam",
      date: "04/04/2026",
      excerpt: "Trải nghiệm đại tiệc bánh kem lạnh thủ công và trà chiều phong cách Ý...",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80"
    }
  ],
  footerColumns: {
    kem: [
      "Kem Lắc Trái Cây",
      "31 mùi kem đặc trưng",
      "Các loại Sundaes",
      "Các loại nước uống đá xay",
      "Kem mang về: Hộp Gia Đình",
      "Bánh kem lạnh nghệ thuật"
    ],
    datHang: [
      "GIAO HÀNG: 0126 922 0162",
      "Kem Lắc",
      "Bánh kem lạnh",
      "Kem viên tươi",
      "Hộp kem đóng gói sẵn"
    ],
    gioiThieu: ["Lịch sử hình thành", "Tiêu chuẩn Quốc tế"]
  }
};

export const defaultData = quanCafe4DefaultData;
export default quanCafe4DefaultData;
