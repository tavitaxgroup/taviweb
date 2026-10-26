import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto9BikeItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  newBadge?: boolean;
  discountBadge?: string;
  soldOut?: boolean;
  tabCategory: "leo-nui" | "thanh-pho" | "xe-dien" | "tre-em";
  categoryName: string;
  motorSpec: string;
  batteryRange: string;
  frameMaterial: string;
  warranty: string;
  description: string;
  image: string;
}

export interface GarageOto9EventItem {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image: string;
}

export interface GarageOto9TemplateData extends ClonedTemplateBaseData {
  highlightSection: {
    title: string;
    quote: string;
    ctaText: string;
    image: string;
  };
  productTabs: Array<{ id: string; label: string }>;
  bikes: GarageOto9BikeItem[];
  videoBannerImage: string;
  events: GarageOto9EventItem[];
  customerSpotlight: {
    image: string;
    quote: string;
    author: string;
    role: string;
    rating: number;
  };
  cityGalleryImages: string[];
}

export const garageOto9DefaultData: GarageOto9TemplateData = {
  business: {
    name: "MONA E-BIKE",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 688 799"],
    email: ["info@themona.global", "cskh@xetienich.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:30 - 21:00",
    rating: 4.9,
    reviewCount: 380,
    experienceYears: "10+",
    aboutTitle: "Showroom Phương Tiện Xanh & Bảo Dưỡng Xe Điện Chuyên Nghiệp",
    aboutText: [
      "Chúng tôi là hệ thống showroom phân phối chính hãng các dòng xe đạp điện trợ lực, xe địa hình khung carbon và trung tâm bảo dưỡng pin - động cơ điện tiêu chuẩn châu Âu.",
      "Mỗi phương tiện trước khi bàn giao đều trải qua 18 bước kiểm định kỹ thuật nghiêm ngặt, đồng hành đáng tin cậy trên mọi cung đường đô thị và địa hình."
    ]
  },
  hero: {
    eyebrow: "CHỦ ĐỀ THỂ THAO MẠNH MẼ",
    title: "XE ĐẠP ĐIỆN TỬ MONA",
    subtitle:
      "Nổi bật với công nghệ sản xuất tiên tiến, tạo ra được chiếc Xe Đạp Điện nhẹ, cứng cáp và bền bỉ. Đa dạng màu sắc, mỗi màu sắc đều có những điểm nổi bật độc đáo, cho phép bạn tự do tạo nên phong cách của riêng mình.\nXe đạp điện tử MONA - người bạn đồng hành đáng tin cậy và luôn tin tưởng bạn trên mọi nẻo đường.",
    ctaText: "MUA NGAY BÂY GIỜ",
    ctaLink: "#san-pham",
    secondaryCtaText: "ĐẶT LỊCH BẢO DƯỠNG",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  highlightSection: {
    title: "Xe Đạp Leo Núi\nTốt Nhất 2026",
    quote:
      "“Năm 2026 đã đến, và với sự phát triển không ngừng của công nghệ trợ lực điện thông minh, thế giới phương tiện xanh đang chứng kiến sự xuất hiện của những mẫu xe địa hình siêu nhẹ...”",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=85"
  },
  productTabs: [
    { id: "leo-nui", label: "XE ĐẠP LEO NÚI" },
    { id: "thanh-pho", label: "XE ĐẠP THÀNH PHỐ" },
    { id: "xe-dien", label: "XE ĐẠP ĐIỆN" },
    { id: "tre-em", label: "XE ĐẠP TRẺ EM" }
  ],
  bikes: [
    {
      id: "eb-1",
      title: "Xe Đạp Thể Thao 9.9 XX1 AXS",
      price: "18,500,000 ₫",
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Leo Núi Carbon",
      motorSpec: "Trợ lực điện Bosch Performance Line CX 85Nm",
      batteryRange: "Quãng đường 120km / 1 lần sạc đầy",
      frameMaterial: "Khung Carbon OCLV Mountain siêu nhẹ",
      warranty: "Bảo hành khung 5 năm, Pin 24 tháng",
      description:
        "Trang bị bộ truyền động không dây SRAM XX1 Eagle AXS cùng hệ thống giảm xóc khí nén RockShox cao cấp.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eb-2",
      title: "Xe Đạp Leo Núi Powerfly FS 9",
      price: "21,000,000 ₫",
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Điện Địa Hình",
      motorSpec: "Động cơ điện 500W không chổi than",
      batteryRange: "Pin Lithium tháo rời 625Wh (130km)",
      frameMaterial: "Hợp kim Nhôm Alpha Platinum",
      warranty: "Bảo hành chính hãng 36 tháng",
      description:
        "Thiết kế phuộc nhún kép toàn phần giúp chinh phục mượt mà các cung đường đồi dốc và địa hình sỏi đá.",
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eb-3",
      title: "Xe Đạp Địa Hình Top Fuel 9.9 X01",
      price: "16,000,000 ₫",
      oldPrice: "18,600,000 ₫",
      newBadge: true,
      discountBadge: "-14%",
      tabCategory: "leo-nui",
      categoryName: "Xe Đạp Leo Núi",
      motorSpec: "Truyền động 12 cấp tốc độ SRAM X01",
      batteryRange: "Trợ lực thông minh 4 chế độ Eco/Tour/eMTB/Turbo",
      frameMaterial: "Full Carbon nguyên khối",
      warranty: "Bảo hành chính hãng 36 tháng",
      description:
        "Sự kết hợp hoàn hảo giữa tốc độ của dòng xe Cross-Country và sự linh hoạt bền bỉ của xe Trail.",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eb-4",
      title: "Xe Đạp Thể Thao 9.9 XX1",
      price: "15,990,000 ₫",
      newBadge: true,
      tabCategory: "thanh-pho",
      categoryName: "Xe Đạp Đô Thị & Thể Thao",
      motorSpec: "Trợ lực điện 350W vận hành êm ái",
      batteryRange: "Pin ẩn trong khung 500Wh",
      frameMaterial: "Khung Carbon khí động học",
      warranty: "Bảo hành chính hãng 36 tháng",
      description:
        "Trọng lượng siêu nhẹ chỉ 14.2kg, phù hợp di chuyển hàng ngày trong thành phố và rèn luyện thể thao cuối tuần.",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eb-5",
      title: "Xe Đạp Thể Thao 9.9 XTR",
      price: "22,500,000 ₫",
      newBadge: true,
      soldOut: true,
      tabCategory: "xe-dien",
      categoryName: "Xe Đạp Điện Cao Cấp",
      motorSpec: "Shimano EP801 85Nm + Bộ đề Shimano XTR",
      batteryRange: "Pin 750Wh thế hệ mới",
      frameMaterial: "Khung Carbon sợi mô-đun cao",
      warranty: "Bảo hành chính hãng 60 tháng",
      description:
        "Phiên bản giới hạn trang bị phanh đĩa thủy lực 4 piston Shimano XTR và vành bánh carbon siêu bền.",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eb-6",
      title: "Xe Đạp Thể Thao 9.8 GX AXS",
      price: "25,900,000 ₫",
      oldPrice: "29,000,000 ₫",
      newBadge: true,
      discountBadge: "-11%",
      tabCategory: "tre-em",
      categoryName: "Xe Đạp Địa Hình Khung Cam",
      motorSpec: "Hệ thống sang số điện tử không dây GX AXS",
      batteryRange: "Quãng đường hỗ trợ đến 140km",
      frameMaterial: "Khung Carbon sơn tĩnh điện Cam Thể Thao",
      warranty: "Bảo hành chính hãng 36 tháng",
      description:
        "Sắc cam rực rỡ nổi bật cùng khả năng leo dốc mạnh mẽ, có sẵn các cỡ khung S/M/L cho mọi thành viên gia đình.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=800&q=80"
    }
  ],
  videoBannerImage:
    "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1800&q=85",
  events: [
    {
      id: "ev-1",
      title: "Khám phá cung đường rừng nguyên sinh thực sự khác lạ",
      date: "3 THÁNG MỘT, 2026",
      tags: ["XE ĐẠP ĐƯỜNG PHỐ", "XE ĐẠP LAI", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Hành trình chinh phục 45km đường mòn xuyên rừng thông cùng đội ngũ kỹ thuật viên bảo dưỡng lưu động.",
      image:
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-2",
      title: "Trải nghiệm xe đạp điện trợ lực: Món quà cho sức khỏe xanh",
      date: "2 THÁNG MỘT, 2026",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP ĐƯỜNG PHỐ"],
      excerpt:
        "Sự kiện lái thử miễn phí toàn bộ dòng E-Bike thế hệ mới và kiểm tra bảo dưỡng pin miễn phí tại showroom.",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-3",
      title: "Tại sao ngày càng nhiều người chọn đạp xe 100km mỗi tuần?",
      date: "29 THÁNG MƯỜI HAI, 2025",
      tags: ["THIẾT BỊ", "XE ĐẠP ĐIỆN", "XE ĐẠP LEO NÚI"],
      excerpt:
        "Chia sẻ từ các vận động viên phong trào về lợi ích tim mạch và cách bảo dưỡng hệ truyền động bền bỉ.",
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=700&q=80"
    }
  ],
  customerSpotlight: {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    quote:
      "Sau khi sử dụng chiếc xe đạp leo núi trợ lực điện này, tôi đã có những trải nghiệm không thể nào quên. Không chỉ giúp tôi vượt qua những con đường gồ ghề một cách dễ dàng, mà nó còn mang lại sự cảm giác tự do và khám phá tuyệt vời. Hệ thống treo tiên tiến và khung xe nhẹ giúp tôi cảm nhận được sự ổn định và an toàn. Tôi đã tìm thấy niềm đam mê mới trong việc khám phá thiên nhiên và sẵn sàng trải nghiệm nhiều hơn.",
    author: "Thùy Dương",
    role: "FOUNDER & CEO",
    rating: 5
  },
  cityGalleryImages: [
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=600&q=80"
  ],
  clients: [
    { id: "cl-1", name: "BIKE LOCAL" },
    { id: "cl-2", name: "MOUNTAIN BIKE" },
    { id: "cl-3", name: "DOWNHILL" },
    { id: "cl-4", name: "BIKE SHOP" },
    { id: "cl-5", name: "ADVENTURE" }
  ]
};

export default garageOto9DefaultData;
