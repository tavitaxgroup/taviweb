import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaHang5Product {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  image: string;
  section?: "quality" | "bestseller" | "promo";
}

export interface NhaHang5Data extends ClonedTemplateBaseData {
  heroPromoCard: {
    discount: string;
    label: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: "fresh" | "organic" | "quality" | "natural";
  }>;
  qualityBanner: {
    title: string;
    ctaText: string;
    image: string;
  };
  midPromoStrip: {
    discount: string;
    title: string;
    ctaText: string;
    image: string;
  };
  bestsellerBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  trioBanners: Array<{
    id: string;
    title: string;
    highlight: string;
    subtitle?: string;
    ctaText?: string;
    image: string;
    theme: "green" | "red" | "avocado";
  }>;
  promoChalkBanner: {
    eyebrow: string;
    title: string;
    image: string;
  };
  products: NhaHang5Product[];
}

export const nhaHang5DefaultData: NhaHang5Data = {
  business: {
    name: "Mona Fruit",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00 | Thứ 7: 09:00 - 14:00 | Chủ nhật: 09:00 - 12:00",
    rating: 4.9,
    reviewCount: 320,
    aboutTitle: "Trang trại Thực phẩm tươi sạch & 100% Hữu cơ",
    aboutText: [
      "Mona Fruit chuyên cung cấp nông sản hữu cơ, trái cây tươi nhập khẩu, salad dinh dưỡng và thực phẩm xanh chuẩn GlobalGAP được thu hoạch trực tiếp mỗi sáng từ nông trại sinh thái."
    ]
  },
  hero: {
    eyebrow: "NÔNG TRẠI XANH & NHÀ HÀNG HEALTHY",
    title: "Trang trại Thực phẩm tươi sạch & 100% Hữu cơ",
    subtitle: "Thực phẩm hữu cơ tươi ngon mỗi ngày cho gia đình bạn",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85"
  },
  heroPromoCard: {
    discount: "30%",
    label: "SALE OFF",
    subtitle: "Ưu đãi trái cây tươi đầu mùa",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80"
  },
  features: [
    {
      id: "f1",
      title: "Tươi sạch",
      description: "Thu hoạch mới mỗi sáng từ nông trại chuẩn xanh",
      icon: "fresh"
    },
    {
      id: "f2",
      title: "Hữu cơ",
      description: "Cam kết 100% canh tác hữu cơ không hóa chất",
      icon: "organic"
    },
    {
      id: "f3",
      title: "Chất lượng",
      description: "Kiểm định nghiêm ngặt, giữ trọn vị ngon tự nhiên",
      icon: "quality"
    },
    {
      id: "f4",
      title: "Tự nhiên",
      description: "An toàn lành mạnh cho thực đơn Eat Clean mỗi ngày",
      icon: "natural"
    }
  ],
  qualityBanner: {
    title: "Trái cây tự nhiên mỗi ngày",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=700&q=80"
  },
  midPromoStrip: {
    discount: "20% OFF",
    title: "Rau quả hữu cơ",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1600&q=80"
  },
  bestsellerBanner: {
    title: "Thực phẩm bán chạy",
    subtitle: "Tuyển chọn những nông sản & món salad xanh được yêu thích nhất tuần qua",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
  },
  trioBanners: [
    {
      id: "tb-1",
      title: "Rau củ tươi sạch",
      highlight: "Giảm ngay 25%",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
      theme: "green"
    },
    {
      id: "tb-2",
      title: "Dầu táo Mona",
      subtitle: "Gia vị vàng cho món Salad thanh mát",
      highlight: "99,000₫",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80",
      theme: "red"
    },
    {
      id: "tb-3",
      title: "Trái cây chất lượng",
      highlight: "GIẢM 30% MÙA HÈ",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=700&q=80",
      theme: "avocado"
    }
  ],
  promoChalkBanner: {
    eyebrow: "ƯU ĐÃI TUẦN NÀY",
    title: "Trái cây & Rau củ",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=80"
  },
  products: [
    {
      id: "p1",
      name: "Nho xanh mẫu đơn",
      category: "Trái cây",
      price: "320,000₫",
      image:
        "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p2",
      name: "Đào tiên má hồng",
      category: "Trái cây",
      price: "290,000₫",
      oldPrice: "330,000₫",
      discountBadge: "-12%",
      image:
        "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p3",
      name: "Chanh dây tím Đà Lạt",
      category: "Trái cây",
      price: "190,000₫",
      image:
        "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p4",
      name: "Chuối Laba hữu cơ",
      category: "Trái cây",
      price: "120,000₫",
      oldPrice: "150,000₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p5",
      name: "Dưa leo baby giòn",
      category: "Rau củ",
      price: "50,000₫",
      image:
        "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p6",
      name: "Ớt đỏ hữu cơ",
      category: "Rau củ",
      price: "32,000₫",
      oldPrice: "45,000₫",
      discountBadge: "-29%",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p7",
      name: "Dừa sáp Cầu Kè",
      category: "Trái cây",
      price: "35,000₫",
      image:
        "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p8",
      name: "Súp lơ xanh Đà Lạt",
      category: "Rau củ",
      price: "350,000₫",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p9",
      name: "Cà chua hữu cơ",
      category: "Rau củ",
      price: "25,000₫",
      oldPrice: "320,000₫",
      discountBadge: "-92%",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "p10",
      name: "Lựu đỏ ngọt hạt mềm",
      category: "Trái cây",
      price: "170,000₫",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=500&q=80"
    }
  ],
  news: [
    {
      id: "nw-1",
      category: "DINH DƯỠNG XANH",
      title: "Bí Quyết Lựa Chọn Rau Củ Hữu Cơ Tươi Ngon Cho Thực Đơn Eat Clean",
      date: "15 Tháng Năm",
      excerpt: "Khám phá tiêu chuẩn thu hoạch nông sản hữu cơ mỗi sáng tại nông trại Mona Fruit...",
      image:
        "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      category: "SỨC KHỎE",
      title: "5 Công Thức Nước Ép Táo Xanh & Cần Tây Thanh Lọc Cơ Thể Mỗi Sáng",
      date: "15 Tháng Năm",
      excerpt: "Sự kết hợp hoàn hảo giữa táo xanh giòn ngọt và cần tây hữu cơ giúp tăng đề kháng...",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      category: "LỐI SỐNG XANH",
      title: "Lợi Ích Của Nha Đam Và Các Loại Thảo Mộc Tươi Trong Chế Độ Ăn Lành Mạnh",
      date: "15 Tháng Năm",
      excerpt: "Cung cấp vitamin tự nhiên và chất chống oxy hóa dồi dào từ thực vật tươi...",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      category: "NÔNG TRẠI HỮU CƠ",
      title: "Hành Trình Từ Nông Trại Xanh Mona Fruit Đến Bàn Ăn Gia Đình Việt",
      date: "15 Tháng Năm",
      excerpt: "Quy trình trồng trọt khép kín không thuốc bảo vệ thực vật của đội ngũ kỹ sư...",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export const defaultData = nhaHang5DefaultData;
export default nhaHang5DefaultData;
