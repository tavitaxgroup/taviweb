import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto7Product {
  id: string;
  name: string;
  categoryTab: string;
  isNew?: boolean;
  discountBadge?: string;
  outOfStock?: boolean;
  oldPrice?: string;
  price: string;
  image: string;
}

export interface GarageOto7ValuePillar {
  id: string;
  title: string;
  description: string;
  icon: "star" | "seal" | "medal";
}

export interface GarageOto7BlogArticle {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image: string;
}

export interface GarageOto7Data extends ClonedTemplateBaseData {
  aboutSection: {
    heading: string;
    image: string;
    intro: string;
    guideTitle: string;
    guideBody: string;
    goalTitle: string;
    goalBody: string;
    ctaText: string;
  };
  categoryTabs: string[];
  products: GarageOto7Product[];
  actionBannerImage: string;
  valuePillars: GarageOto7ValuePillar[];
  articles: GarageOto7BlogArticle[];
}

export const garageOto7DefaultData: GarageOto7Data = {
  business: {
    name: "Mona Motor Sport",
    phone: ["0909 820 999", "028 7300 8899"],
    email: ["cskh@monamotorsport.vn", "showroom@monamotorsport.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.9,
    reviewCount: 1420,
    aboutTitle: "Về Chúng Tôi",
    aboutText: [
      "Chúng tôi là hệ thống showroom phân phối và bảo dưỡng các dòng xe thể thao địa hình, xe điện hiệu suất cao và phụ tùng khung sườn Carbon chính hãng hàng đầu Việt Nam."
    ],
    highlights: [
      "Khung sườn sợi Carbon siêu nhẹ chuẩn khí động học",
      "Hệ thống phuộc treo Fox & truyền động điện tử 21 tốc độ",
      "Bảo dưỡng định kỳ trọn đời tại hệ thống xưởng dịch vụ"
    ]
  },
  hero: {
    eyebrow: "CHỦ ĐỀ THỂ THAO MẠNH MẼ",
    subtitle: "CHỦ ĐỀ THỂ THAO MẠNH MẼ",
    title: "XE ĐẠP ĐIỆN TỬ MONA",
    description:
      "Phuộc treo của 820 vượt qua các địa hình gồ ghề trong khi hệ thống truyền động 21 tốc độ giúp bạn dễ dàng tìm được số phù hợp để đạp hiệu quả.",
    ctaText: "MUA NGAY BÂY GIỜ",
    ctaLink: "#popular-vehicles",
    secondaryCtaText: "VỀ CHÚNG TÔI",
    secondaryCtaLink: "#about",
    backgroundImage:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=85"
  },
  aboutSection: {
    heading: "Về Chúng Tôi",
    image:
      "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=900&q=80",
    intro:
      "MONA cung cấp bánh xe và khung sườn carbon chắc chắn, nhẹ, bền cho mọi điều kiện — bao gồm xe đạp điện thể thao, xe leo núi và xe đường phố.",
    guideTitle: "Chúng tôi cung cấp hướng dẫn tốt nhất cho bạn",
    guideBody:
      "Xe thể thao địa hình nói riêng và các hoạt động thể chất ngoài trời nói chung là vô cùng cần thiết cho sự phát triển toàn diện của các bạn nhỏ cũng như người trưởng thành. Vận động không chỉ giúp nâng cao sức khỏe chống lại bệnh tật, mà còn giúp chúng ta có tinh thần hăng hái, học tập và làm việc hiệu quả hơn.",
    goalTitle: "Mục tiêu của chúng tôi",
    goalBody:
      "Đạt chất lượng cao với giá thành hợp lý. Mở rộng hệ thống showroom và trung tâm bảo dưỡng chuyên sâu trên toàn quốc cùng các dự án xuất khẩu ra nước ngoài.",
    ctaText: "ĐỌC THÊM"
  },
  categoryTabs: [
    "XE ĐẠP LEO NÚI",
    "XE ĐẠP THÀNH PHỐ",
    "XE ĐẠP ĐIỆN",
    "XE ĐẠP TRẺ EM"
  ],
  products: [
    {
      id: "v-1",
      name: "Xe Đạp Thể Thao 9.8 GX AXS",
      categoryTab: "XE ĐẠP LEO NÚI",
      isNew: true,
      discountBadge: "-20%",
      oldPrice: "32.000.000 ₫",
      price: "25.600.000 ₫",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "v-2",
      name: "Xe Đạp Thể Thao 9.9 XX1 AXS",
      categoryTab: "XE ĐẠP LEO NÚI",
      isNew: true,
      price: "34.500.000 ₫",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "v-3",
      name: "Xe Đạp Thể Thao 9.9 XX1 Carbon",
      categoryTab: "XE ĐẠP THÀNH PHỐ",
      isNew: true,
      price: "28.590.000 ₫",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "v-4",
      name: "Xe Đạp Địa Hình Top Fuel 9.9 X01",
      categoryTab: "XE ĐẠP ĐIỆN",
      isNew: true,
      discountBadge: "-14%",
      oldPrice: "27.000.000 ₫",
      price: "23.200.000 ₫",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "v-5",
      name: "Xe Đạp Thể Thao 9.9 XTR Pro",
      categoryTab: "XE ĐẠP TRẺ EM",
      isNew: true,
      outOfStock: true,
      price: "21.900.000 ₫",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=80"
    }
  ],
  actionBannerImage:
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1920&q=85",
  valuePillars: [
    {
      id: "vp-1",
      title: "THÀNH TỰU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu của Quốc gia.",
      icon: "star"
    },
    {
      id: "vp-2",
      title: "GIÁ TRỊ CỐT LÕI",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu của Quốc gia.",
      icon: "seal"
    },
    {
      id: "vp-3",
      title: "MỤC TIÊU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu của Quốc gia.",
      icon: "medal"
    }
  ],
  articles: [
    {
      id: "art-1",
      title: "Xe đạp leo núi mới 2026: Đột phá khung sườn Carbon siêu nhẹ",
      date: "26 THÁNG MƯỜI MỘT, 2025",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Khám phá cấu trúc khung sợi carbon thế hệ mới giúp giảm 25% trọng lượng tổng thể và tăng độ ổn định khi đổ đèo.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-2",
      title: "Hành trình chinh phục cung đường đèo hiểm trở cùng bộ truyền động AXS",
      date: "26 THÁNG MƯỜI MỘT, 2025",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Chia sẻ kinh nghiệm căn chỉnh áp suất phuộc hơi và lựa chọn lốp gai Tubeless cho các cung đường sỏi đá.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-3",
      title: "Bảo dưỡng hệ thống phanh đĩa thủy lực đúng chuẩn kỹ thuật tại nhà",
      date: "26 THÁNG MƯỜI MỘT, 2025",
      tags: ["XE ĐẠP ĐƯỜNG PHỐ", "XE ĐẠP LAI", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Quy trình vệ sinh đĩa phanh, kiểm tra độ mòn má phanh và xả gió dầu phanh đảm bảo an toàn tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-4",
      title: "Trên đường tới một tương lai di chuyển xanh với xe thể thao trợ lực điện",
      date: "26 THÁNG MƯỜI MỘT, 2025",
      tags: ["XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Công nghệ pin Lithium ẩn trong khung sườn mang lại quãng đường hỗ trợ lên tới 120km chỉ với một lần sạc đầy.",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-5",
      title: "Một kiểu hẹn hò tốc độ cuối tuần dành cho các cặp đôi đam mê vận động",
      date: "26 THÁNG MƯỜI MỘT, 2025",
      tags: ["THIẾT BỊ", "XE ĐẠP LAI", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Gợi ý 5 cung đường ven rừng và hồ sinh thái tuyệt đẹp gần TP.HCM lý tưởng cho chuyến đạp xe dã ngoại cuối tuần.",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-6",
      title: "Đi đến những nơi chưa có dấu chân với dòng xe Enduro chuyên nghiệp",
      date: "26 THÁNG MƯỜI MỘT, 2025",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Đánh giá chi tiết khả năng hấp thụ xung lực của hệ thống treo kép khi vượt địa hình dốc đá tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
