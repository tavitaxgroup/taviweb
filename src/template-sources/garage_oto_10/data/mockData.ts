import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto10ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  newBadge?: boolean;
  discountBadge?: string;
  soldOut?: boolean;
  tabCategory: "leo-nui" | "thanh-pho" | "xe-dien" | "tre-em";
  categoryName: string;
  specs: string;
  frameMaterial: string;
  warranty: string;
  description: string;
  image: string;
}

export interface GarageOto10ArticleItem {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image: string;
}

export interface GarageOto10CoreValue {
  id: string;
  title: string;
  description: string;
  icon: "star" | "seal" | "medal";
}

export interface GarageOto10TemplateData extends ClonedTemplateBaseData {
  aboutFeature: {
    image: string;
    intro: string;
    guideTitle: string;
    guideText: string;
    goalTitle: string;
    goalText: string;
    ctaText: string;
  };
  productTabs: Array<{ id: string; label: string }>;
  products: GarageOto10ProductItem[];
  midBannerImage: string;
  articles: GarageOto10ArticleItem[];
  coreValues: GarageOto10CoreValue[];
}

export const garageOto10DefaultData: GarageOto10TemplateData = {
  business: {
    name: "Mona Media",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 799 888"],
    email: ["info@themona.global", "cskh@xehiendai.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:30 - 21:00",
    rating: 4.9,
    reviewCount: 490,
    experienceYears: "12+",
    aboutTitle: "Về Chúng Tôi",
    aboutText: [
      "Trung tâm độ xe, nâng cấp phụ kiện thể thao carbon và phân phối chính hãng các dòng xe đạp điện địa hình hiệu suất cao hàng đầu Việt Nam."
    ]
  },
  hero: {
    eyebrow: "CHỦ ĐỀ THỂ THAO MẠNH MẼ",
    title: "XE ĐẠP ĐIỆN TỬ MONA",
    subtitle:
      "Phuộc treo hành trình lớn vượt qua các địa hình gồ ghề trong khi hệ thống truyền động 21 tốc độ giúp bạn dễ dàng tìm được tỉ số truyền phù hợp để đạt hiệu quả tối đa.",
    ctaText: "MUA NGAY BÂY GIỜ",
    ctaLink: "#xe-dap-pho-bien",
    secondaryCtaText: "VỀ CHÚNG TÔI",
    secondaryCtaLink: "#ve-chung-toi",
    backgroundImage:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  aboutFeature: {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=85",
    intro:
      "MONA cung cấp bánh xe và khung sườn carbon chắc chắn, nhẹ, bền cho mọi điều kiện — bao gồm xe đạp điện, xe leo núi và xe đường phố.",
    guideTitle: "Chúng tôi cung cấp hướng dẫn tốt nhất cho bạn",
    guideText:
      "Xe đạp địa hình nói riêng và các hoạt động thể chất ngoài trời nói chung là vô cùng cần thiết cho sự phát triển toàn diện. Vận động không chỉ giúp nâng cao sức khỏe dẻo dai mà còn mang lại tinh thần hăng hái, bứt phá giới hạn bản thân trên mọi cung đường.",
    goalTitle: "Mục tiêu của chúng tôi",
    goalText:
      "Đạt chất lượng kỹ thuật cao nhất với giá thành hợp lý. Mở rộng hệ thống xưởng dịch vụ bảo dưỡng và nâng cấp phụ kiện thể thao trên toàn quốc.",
    ctaText: "ĐỌC THÊM"
  },
  productTabs: [
    { id: "leo-nui", label: "XE ĐẠP LEO NÚI" },
    { id: "thanh-pho", label: "XE ĐẠP THÀNH PHỐ" },
    { id: "xe-dien", label: "XE ĐẠP ĐIỆN" },
    { id: "tre-em", label: "XE ĐẠP TRẺ EM" }
  ],
  products: [
    {
      id: "xhd-1",
      title: "Xe Đạp Thể Thao 9.8 GX AXS",
      price: "24,800,000 ₫",
      oldPrice: "31,000,000 ₫",
      newBadge: true,
      discountBadge: "-20%",
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Địa Hình Carbon",
      specs: "Bộ truyền động không dây SRAM GX Eagle AXS 12 cấp",
      frameMaterial: "Khung Sợi Carbon OCLV Mountain",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Phiên bản nâng cấp phuộc Fox Performance 36 Float và bộ sang số điện tử không dây siêu nhạy.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "xhd-2",
      title: "Xe Đạp Thể Thao 9.9 XX1 AXS",
      price: "28,000,000 ₫",
      newBadge: true,
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Leo Núi Đua",
      specs: "Phuộc RockShox Pike Ultimate + Vành Carbon",
      frameMaterial: "Full Carbon nguyên khối",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Siêu phẩm địa hình trọng lượng nhẹ dành cho các tay đua chuyên nghiệp và đam mê tốc độ.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "xhd-3",
      title: "Xe Đạp Thể Thao 9.9 XX1",
      price: "25,900,000 ₫",
      newBadge: true,
      tabCategory: "thanh-pho",
      categoryName: "Xe Đạp Thể Thao Đa Địa Hình",
      specs: "Phanh đĩa thủy lực 4 Piston + Lốp Tubeless",
      frameMaterial: "Khung Carbon Đen Nhám Stealth",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Thiết kế khí động học kết hợp hệ thống giảm xóc êm ái cho cả đường phố và đường mòn.",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "xhd-4",
      title: "Xe Đạp Địa Hình Top Fuel 9.9 X01",
      price: "19,600,000 ₫",
      oldPrice: "22,800,000 ₫",
      newBadge: true,
      discountBadge: "-14%",
      tabCategory: "xe-dien",
      categoryName: "Xe Đạp Điện Trợ Lực",
      specs: "Động cơ Bosch CX 85Nm + Pin 625Wh",
      frameMaterial: "Khung Carbon tích hợp khoang pin ẩn",
      warranty: "Bảo hành chính hãng 36 tháng",
      description:
        "Khả năng leo dốc vượt trội với mô-men xoắn 85Nm và màn hình điều khiển Kiox 300 thông minh.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "xhd-5",
      title: "Xe Đạp Thể Thao 9.9 XTR",
      price: "26,500,000 ₫",
      newBadge: true,
      soldOut: true,
      tabCategory: "tre-em",
      categoryName: "Xe Đạp Địa Hình Cao Cấp",
      specs: "Full Groupset Shimano XTR M9100",
      frameMaterial: "Khung Carbon siêu nhẹ",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Trang bị bộ truyền động và phanh Shimano XTR đầu bảng mang lại độ chính xác tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80"
    }
  ],
  midBannerImage:
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1800&q=85",
  articles: [
    {
      id: "art-1",
      title: "Đánh giá thế hệ xe đạp leo núi khung carbon mới nhất",
      date: "26 THÁNG MƯỜI MỘT, 2026",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Khám phá công nghệ dệt sợi carbon mô-đun cao giúp giảm 25% trọng lượng khung sườn mà vẫn tăng độ cứng vững.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-2",
      title: "Kinh nghiệm nâng cấp phuộc hơi và phanh đĩa thủy lực địa hình",
      date: "26 THÁNG MƯỜI MỘT, 2026",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Hướng dẫn cân chỉnh áp suất phuộc (SAG) và độ hồi (Rebound) phù hợp với trọng lượng cơ thể và địa hình.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-3",
      title: "Bí quyết duy trì thể lực bền bỉ trên những cung đường đèo dốc",
      date: "26 THÁNG MƯỜI MỘT, 2026",
      tags: ["XE ĐẠP ĐƯỜNG PHỐ", "XE ĐẠP LAI", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Kỹ thuật giữ nhịp đạp (Cadence) ổn định và phối hợp chế độ trợ lực điện để tiết kiệm pin tối đa.",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-4",
      title: "Trên đường tới tương lai của dòng phương tiện thể thao xanh",
      date: "26 THÁNG MƯỜI MỘT, 2026",
      tags: ["XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Xu hướng chuyển dịch sang các dòng E-Bike thông minh tích hợp định vị GPS và kết nối ứng dụng di động.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-5",
      title: "Một kiểu hẹn hò tốc độ cuối tuần cùng hội đam mê Off-Road",
      date: "26 THÁNG MƯỜI MỘT, 2026",
      tags: ["THIẾT BỊ", "XE ĐẠP LAI", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Tổng kết giải đua giao hữu địa hình cuối tuần quy tụ hơn 150 vận động viên và các bản độ xe ấn tượng.",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "art-6",
      title: "Đi đến những nơi chưa có dấu chân cùng lốp Tubeless chuyên dụng",
      date: "26 THÁNG MƯỜI MỘT, 2026",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Ưu điểm vượt trội của lốp không săm có keo tự vá khi băng qua rừng đá dăm và địa hình hiểm trở.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=700&q=80"
    }
  ],
  coreValues: [
    {
      id: "cv-1",
      title: "THÀNH TỰU",
      description:
        "Được người tiêu dùng yêu thích nhất, là sản phẩm Việt Nam chất lượng cao, thương hiệu uy tín toàn quốc.",
      icon: "star"
    },
    {
      id: "cv-2",
      title: "GIÁ TRỊ CỐT LÕI",
      description:
        "Được người tiêu dùng yêu thích nhất, cam kết chính hãng 100%, bảo dưỡng kỹ thuật tận tâm trọn đời.",
      icon: "seal"
    },
    {
      id: "cv-3",
      title: "MỤC TIÊU",
      description:
        "Được người tiêu dùng yêu thích nhất, tiên phong kiến tạo cộng đồng phương tiện thể thao bền vững.",
      icon: "medal"
    }
  ]
};

export default garageOto10DefaultData;
