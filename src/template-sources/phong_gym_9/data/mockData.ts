import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym9BikeProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  soldOut?: boolean;
  image: string;
}

export interface PhongGym9Data extends ClonedTemplateBaseData {
  mtbSpotlight: {
    title: string;
    quote: string;
    ctaText: string;
    image: string;
  };
  actionStripImages: string[];
  bikeCategories: string[];
  featuredBikes: PhongGym9BikeProduct[];
  sunlitBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  };
  adventureCollage: {
    cliffImage: string;
    cliffTitle: string;
    cliffSubtitle: string;
    jumpImage: string;
    vintageBikeImage: string;
    teamRideImage: string;
  };
  coreValues: Array<{
    id: string;
    title: string;
    description: string;
    icon: "star" | "seal" | "medal";
  }>;
  exploreForestBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
}

export const phongGym9DefaultData: PhongGym9Data = {
  business: {
    name: "MONA BICYCLE & SPORT",
    phone: ["076 922 0162", "0909 688 162"],
    email: ["cskh@monabicycle.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:30 mỗi ngày",
    rating: 4.9,
    reviewCount: 340,
    aboutTitle: "CLB Đạp Xe Thể Thao & Thiết Bị Fitness SpeedRiders",
    aboutText: [
      "Chúng tôi là đội ngũ kỹ sư và huấn luyện viên xe đạp thể thao đam mê tốc độ, chuyên phân phối dòng xe đạp địa hình khung Carbon, xe đạp đua đường trường và thiết bị tập luyện trong nhà chất lượng cao."
    ]
  },
  hero: {
    eyebrow: "CHỦ ĐỀ THỂ THAO MẠNH MẼ",
    title: "XE ĐẠP ĐIỆN TỬ MONA",
    subtitle:
      "Nổi bật với công nghệ sản xuất tiên tiến, tạo ra được chiếc Xe Đạp nhẹ, cứng cáp và bền bỉ. Đa dạng màu sắc, mỗi màu sắc đều có những điểm nổi bật độc đáo, cho phép bạn tự do tạo nên phong cách của riêng mình.",
    ctaText: "MUA NGAY BÂY GIỜ",
    ctaLink: "#xe-dap-noi-bat",
    backgroundImage:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=85"
  },
  mtbSpotlight: {
    title: "Xe đạp leo núi tốt nhất 2026",
    quote:
      "“Với những ai yêu thích chinh phục những cung đường đồi gồ ghề nhiều sỏi đá, một chiếc xe đạp leo núi chuyên dụng chắc chắn sẽ là trang bị vô cùng cần thiết...”",
    ctaText: "XEM TẤT CẢ",
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80"
  },
  actionStripImages: [
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80"
  ],
  bikeCategories: [
    "XE ĐẠP LEO NÚI",
    "XE ĐẠP ĐƯỜNG PHỐ",
    "XE ĐẠP ĐIỆN",
    "XE ĐẠP TRẺ EM"
  ],
  featuredBikes: [
    {
      id: "bk-1",
      name: "Xe Đạp Thể Thao 9.9 XX1 AXS",
      category: "XE ĐẠP LEO NÚI",
      price: "24,990,000 ₫",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bk-2",
      name: "Xe đạp leo núi Powerfly FS 9",
      category: "XE ĐẠP ĐIỆN",
      price: "28,990,000 ₫",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bk-3",
      name: "Xe Đạp Địa Hình Top Fuel 9.9 X01",
      category: "XE ĐẠP LEO NÚI",
      price: "25,990,000 ₫",
      oldPrice: "29,990,000 ₫",
      discountBadge: "-14%",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bk-4",
      name: "Xe Đạp Thể Thao 9.9 XX1 Carbon",
      category: "XE ĐẠP ĐƯỜNG PHỐ",
      price: "18,690,000 ₫",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bk-5",
      name: "Xe Đạp Thể Thao 9.9 XTR",
      category: "XE ĐẠP LEO NÚI",
      price: "21,500,000 ₫",
      soldOut: true,
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bk-6",
      name: "Xe Đạp Thể Thao 9.8 GX AXS",
      category: "XE ĐẠP ĐƯỜNG PHỐ",
      price: "22,790,000 ₫",
      oldPrice: "29,990,000 ₫",
      discountBadge: "-26%",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  sunlitBanner: {
    eyebrow: "Chính là bạn, nhanh hơn với",
    title: "Mona Bicycle",
    ctaText: "MUA SẮM NGAY",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1920&q=80"
  },
  adventureCollage: {
    cliffImage:
      "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1000&q=80",
    cliffTitle: "MUA SẮM VÀ GIAO HÀNG TRÊN KHẮP CẢ NƯỚC",
    cliffSubtitle: "Khám phá thế giới trên những bánh xe của chúng tôi.",
    jumpImage:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80",
    vintageBikeImage:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80",
    teamRideImage:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
  },
  coreValues: [
    {
      id: "cv-1",
      title: "THÀNH TỰU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu của Quốc gia.",
      icon: "star"
    },
    {
      id: "cv-2",
      title: "GIÁ TRỊ CỐT LÕI",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu của Quốc gia.",
      icon: "seal"
    },
    {
      id: "cv-3",
      title: "MỤC TIÊU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu của Quốc gia.",
      icon: "medal"
    }
  ],
  news: [
    {
      id: "bn-1",
      title: "Bảo dưỡng xe đạp: 10 mẹo hữu ích",
      date: "NGÀY 27 THÁNG 12",
      excerpt: "Hướng dẫn vệ sinh bộ truyền động, cân chỉnh phanh đĩa thủy lực và phuộc nhún...",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bn-2",
      title: "Xe đạp địa hình: Thách thức tự nhiên",
      date: "NGÀY 27 THÁNG 12",
      excerpt: "Kỹ năng kiểm soát trọng tâm cơ thể khi đổ đèo và vượt chướng ngại vật...",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bn-3",
      title: "Chọn xe đạp phù hợp với bạn",
      date: "NGÀY 27 THÁNG 12",
      excerpt: "Cách đo chiều cao khung sườn và lựa chọn dòng xe phù hợp mục tiêu thể lực...",
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=600&q=80"
    }
  ],
  exploreForestBanner: {
    title: "KHÁM PHÁ THẾ GIỚI XE ĐẠP",
    subtitle: "Tin tức, hướng dẫn và cảm hứng",
    ctaText: "XEM THÊM",
    image:
      "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1920&q=80"
  }
};

export const defaultData = phongGym9DefaultData;
export default phongGym9DefaultData;
