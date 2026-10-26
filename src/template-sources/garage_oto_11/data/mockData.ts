import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto11PromoCard {
  id: string;
  eyebrow: string;
  title: string;
  ctaText: string;
  image: string;
}

export interface GarageOto11BikeItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  newBadge?: boolean;
  saleBadge?: boolean;
  featuredLarge?: boolean;
  tabCategory: "leo-nui" | "duong-pho" | "xe-dien" | "tre-em";
  categoryName: string;
  specs: string;
  frameMaterial: string;
  warranty: string;
  description: string;
  image: string;
}

export interface GarageOto11ExperiencePost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featuredTall?: boolean;
  image: string;
}

export interface GarageOto11ValueBlock {
  id: string;
  title: string;
  description: string;
}

export interface GarageOto11TemplateData extends ClonedTemplateBaseData {
  tensioPromos: GarageOto11PromoCard[];
  productTabs: Array<{ id: string; label: string }>;
  bikes: GarageOto11BikeItem[];
  energyShowcase: {
    heading: string;
    description: string;
    ctaText: string;
    watermarkLine1: string;
    watermarkLine2: string;
    image: string;
  };
  experiencePosts: GarageOto11ExperiencePost[];
  actionBannerImage: string;
  oliveValues: GarageOto11ValueBlock[];
}

export const garageOto11DefaultData: GarageOto11TemplateData = {
  business: {
    name: "MONA SPORT AUTO",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 556 789"],
    email: ["info@themona.global", "kythuat@monasport.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.9,
    reviewCount: 410,
    experienceYears: "14+",
    aboutTitle: "Showroom & Xưởng Dịch Vụ Kỹ Thuật Xe Địa Hình",
    aboutText: [
      "Chúng tôi là hệ thống showroom và xưởng dịch vụ kỹ thuật chuyên sâu về xe đạp điện địa hình (e-MTB), khung sườn carbon và phụ kiện bảo hộ thể thao tiêu chuẩn quốc tế."
    ]
  },
  hero: {
    eyebrow: "CHỦ ĐỀ THỂ THAO MẠNH MẼ",
    title: "XE ĐẠP ĐIỆN TỬ MONA",
    subtitle:
      "Phuộc treo của 820 vượt qua các địa hình gồ ghề trong khi hệ thống truyền động 21 tốc độ giúp bạn dễ dàng tìm được số phù hợp để đạt hiệu quả tối đa.",
    ctaText: "MUA NGAY BÂY GIỜ",
    ctaLink: "#xe-dap-noi-bat",
    secondaryCtaText: "XEM TÀI LIỆU KỸ THUẬT",
    secondaryCtaLink: "#nang-luong",
    backgroundImage:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  tensioPromos: [
    {
      id: "tp-1",
      eyebrow: "Xe đạp điện",
      title: "XE ĐẠP THIẾT KẾ\nTENSIO",
      ctaText: "Xem Tất Cả",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-2",
      eyebrow: "Xe đạp điện",
      title: "XE ĐẠP THIẾT KẾ\nTENSIO",
      ctaText: "Xem Tất Cả",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-3",
      eyebrow: "Xe đạp điện",
      title: "XE ĐẠP THIẾT KẾ\nTENSIO",
      ctaText: "Xem Tất Cả",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
    }
  ],
  productTabs: [
    { id: "leo-nui", label: "XE ĐẠP LEO NÚI" },
    { id: "duong-pho", label: "XE ĐẠP ĐƯỜNG PHỐ" },
    { id: "xe-dien", label: "XE ĐẠP ĐIỆN" },
    { id: "tre-em", label: "XE ĐẠP TRẺ EM" }
  ],
  bikes: [
    {
      id: "msa-1",
      title: "Xe Đạp Địa Hình Top Fuel 9.9 X01",
      price: "15,990,000 ₫",
      oldPrice: "18,990,000 ₫",
      newBadge: true,
      saleBadge: true,
      featuredLarge: true,
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Địa Hình Chủ Lực",
      specs: "Truyền động SRAM X01 Eagle 12 cấp + Giảm xóc kép RockShox",
      frameMaterial: "Khung Carbon OCLV Mountain siêu nhẹ",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Mẫu xe đạp địa hình full-suspension đầu bảng kết hợp tốc độ bứt phá và khả năng kiểm soát địa hình hiểm trở tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "msa-2",
      title: "Xe đạp leo núi Powerfly FS 9",
      price: "24,990,000 ₫",
      newBadge: true,
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Điện Địa Hình",
      specs: "Động cơ Bosch Performance Line CX + Pin 625Wh",
      frameMaterial: "Hợp kim Nhôm Alpha Platinum",
      warranty: "Bảo hành chính hãng 36 tháng",
      description:
        "Tích hợp hệ thống trợ lực điện thông minh giúp chinh phục các cung đường đèo dốc dài mà không tốn quá nhiều sức.",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "msa-3",
      title: "Xe Đạp Thể Thao 9.8 GX",
      price: "24,990,000 ₫",
      newBadge: true,
      tabCategory: "duong-pho",
      categoryName: "Xe Đạp Thể Thao Carbon",
      specs: "Bộ truyền động SRAM GX Eagle + Phanh thủy lực 4 Piston",
      frameMaterial: "Khung Carbon nguyên khối",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Thiết kế tối ưu độ cứng vững và truyền lực tức thì trong từng vòng đạp.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "msa-4",
      title: "Xe Đạp Thể Thao 9.8 GX AXS",
      price: "19,990,000 ₫",
      oldPrice: "24,990,000 ₫",
      newBadge: true,
      saleBadge: true,
      tabCategory: "xe-dien",
      categoryName: "Xe Đạp Địa Hình Không Dây",
      specs: "Sang số điện tử không dây SRAM GX AXS",
      frameMaterial: "Khung Carbon Cam/Vàng Thể Thao",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Nổi bật trên mọi cung đường với phối màu thể thao mạnh mẽ và công nghệ chuyển số điện tử chính xác.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "msa-5",
      title: "Xe Đạp Thể Thao 9.9 XTR",
      price: "27,500,000 ₫",
      newBadge: true,
      tabCategory: "tre-em",
      categoryName: "Xe Đạp Đua Địa Hình",
      specs: "Full Groupset Shimano XTR M9100",
      frameMaterial: "Khung Carbon OCLV cao cấp",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Cấu hình thi đấu chuyên nghiệp với trọng lượng siêu nhẹ và độ bền vượt thời gian.",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=700&q=80"
    }
  ],
  energyShowcase: {
    heading: "HOẠT ĐỘNG ĐẦY ĐỦ NĂNG LƯỢNG CỦA XE ĐẠP ĐIỆN",
    description:
      "Đây là một phần của cuộc đua và đây là một phần của Đội Đua Địa Hình Orbea FOX — nơi công nghệ trợ lực điện kết hợp cùng khung sườn khí động học.",
    ctaText: "XEM TÀI LIỆU",
    watermarkLine1: "TURBO",
    watermarkLine2: "COMO",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=85"
  },
  experiencePosts: [
    {
      id: "exp-1",
      title: "Đam mê lành mạnh",
      date: "27 THÁNG 8",
      author: "ZWIFT WATOPIA",
      excerpt: "Rèn luyện sức bền cùng hội nhóm đạp xe mỗi sáng cuối tuần.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-2",
      title: "Sức khoẻ mỗi ngày",
      date: "27 THÁNG 8",
      author: "ZWIFT WATOPIA",
      excerpt: "Chinh phục những con dốc cao giúp cải thiện tim mạch hiệu quả.",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-3",
      title: "Thời gian chất lượng bên người thân yêu của bạn",
      date: "27 THÁNG 8",
      author: "ZWIFT WATOPIA",
      excerpt: "Hành trình dã ngoại xuyên rừng cùng gia đình trên chiếc E-Bike.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-4",
      title: "Vẫn là quê hương của những ngày nghỉ lễ",
      date: "27 THÁNG 8",
      author: "ZWIFT WATOPIA",
      excerpt: "Khám phá những cung đường đèo yên bình dịp nghỉ lễ dài ngày.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-5",
      title: "Buổi sáng tuyệt vời nhất",
      date: "27 THÁNG 8",
      author: "ZWIFT WATOPIA",
      featuredTall: true,
      excerpt:
        "Đón bình minh giữa rừng Bạch Dương trên chiếc xe địa hình full-suspension thế hệ mới.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=900&q=85"
    }
  ],
  actionBannerImage:
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1800&q=85",
  oliveValues: [
    {
      id: "ov-1",
      title: "GIÁ TRỊ CỐT LÕI",
      description:
        "Tận tâm với khách hàng, trung thực, làm việc với tinh thần đồng đội, máu lửa và nhiệt huyết trong công việc."
    },
    {
      id: "ov-2",
      title: "THÀNH TỰU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu uy tín của Quốc gia."
    },
    {
      id: "ov-3",
      title: "MỤC TIÊU CỦA CHÚNG TÔI",
      description:
        "Đạt chất lượng cao với giá thành hợp lý. Mở rộng thị trường với các dự án xuất khẩu ra nước ngoài."
    },
    {
      id: "ov-4",
      title: "GIÁ TRỊ CỐT LÕI",
      description:
        "Tận tâm với khách hàng, trung thực, làm việc với tinh thần đồng đội, máu lửa và nhiệt huyết trong công việc."
    },
    {
      id: "ov-5",
      title: "THÀNH TỰU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam tốt nhất, là Thương hiệu uy tín của Quốc gia."
    },
    {
      id: "ov-6",
      title: "MỤC TIÊU CỦA CHÚNG TÔI",
      description:
        "Đạt chất lượng cao với giá thành hợp lý. Mở rộng thị trường với các dự án xuất khẩu ra nước ngoài."
    }
  ],
  clients: [
    { id: "cl-1", name: "BIKE LOCAL" },
    { id: "cl-2", name: "BICYCLE" },
    { id: "cl-3", name: "ADVENTURE" },
    { id: "cl-4", name: "BIKE SHOP" },
    { id: "cl-5", name: "DOWNHILL" },
    { id: "cl-6", name: "MOUNTAIN BIKE" }
  ]
};

export default garageOto11DefaultData;
