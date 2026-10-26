import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung10Data extends ClonedTemplateBaseData {
  heroHighlights: Array<{
    id: string;
    title: string;
    bullets: string[];
  }>;
  locationSection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaText: string;
    mapBgImage: string;
  };
  investmentReasons: Array<{
    id: string;
    number: string;
    icon: string;
    description: string;
  }>;
  villaCollection: {
    eyebrow: string;
    title: string;
    description: string;
    backgroundImage: string;
    villas: Array<{
      id: string;
      name: string;
      subtitle: string;
      area: string;
      zone: string;
      image: string;
      floorPlanImage: string;
    }>;
  };
  masterPlanSection: {
    title: string;
    description: string;
    ctaText: string;
    items: Array<{
      id: string;
      label: string;
      description: string;
      image: string;
    }>;
  };
  gallerySection: {
    title: string;
    subtitle: string;
    videoCard: {
      label: string;
      caption: string;
      image: string;
    };
    modelHouseCard: {
      label: string;
      caption: string;
      image: string;
    };
    panoramaCard: {
      label: string;
      caption: string;
      image: string;
    };
  };
}

export const xayDung10DefaultData: XayDung10Data = {
  business: {
    name: "MonaHills",
    phone: ["076 922 0162", "0909 555 162"],
    email: ["cskh@monahills-muine.vn", "info@monaland.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08:00 - 21:00 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 312,
    aboutTitle: "Tuyệt tác biệt thự nghỉ dưỡng đồi hướng biển",
    aboutText: [
      "Tọa lạc trên địa thế \"tựa sơn, hướng thủy\" ấn tượng tại cung đường resort Huỳnh Thúc Kháng, MonaHills Mũi Né Resort & Villas sở hữu những ưu thế độc tôn để trở thành một điểm đến hoàn hảo tại Phan Thiết.",
      "Từ đây dễ dàng kết nối giao thông đến sân bay và nhà Ga Phan Thiết... MonaHills Mũi Né Resort & Villas cũng là tâm điểm để kết nối đến hơn 50 danh thắng nổi tiếng, mang đến những trải nghiệm khám phá, giải trí, nghỉ dưỡng trọn vẹn."
    ],
    highlights: [
      "Quy mô 43 ha tại trung tâm thủ phủ resort Mũi Né - Phan Thiết",
      "Kiến trúc Tây Ban Nha Địa Trung Hải phóng khoáng trên cao độ 92m",
      "100% Biệt thự đơn lập có hồ bơi riêng và tầm nhìn hướng biển",
      "Hồ bơi tràn 3 tầng dài 250m & Câu lạc bộ biển chuẩn 5 sao quốc tế"
    ]
  },
  hero: {
    eyebrow: "MUI NE RESORT & VILLAS",
    title: "Tuyệt tác nghỉ dưỡng trên từng cao độ",
    subtitle: "Sự giao hòa tuyệt mỹ giữa kiến trúc Tây Ban Nha phóng khoáng cùng địa thế đồi núi, vịnh biển liền kề tại tâm điểm du lịch Mũi Né - Phan Thiết.",
    ctaText: "ĐĂNG KÝ TƯ VẤN",
    ctaLink: "#lien-he",
    secondaryCtaText: "KHÁM PHÁ BIỆT THỰ",
    secondaryCtaLink: "#biet-thu",
    backgroundImage: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  heroHighlights: [
    {
      id: "hl-1",
      title: "TỔNG QUAN",
      bullets: ["43 ha", "Vị trí: Trung tâm khu du lịch Mũi Né"]
    },
    {
      id: "hl-2",
      title: "TIỆN ÍCH ĐẲNG CẤP",
      bullets: ["Khu tổ hợp giải trí", "Hồ bơi tràn thác nước"]
    },
    {
      id: "hl-3",
      title: "CẢNH QUAN – KIẾN TRÚC",
      bullets: [
        "Tựa đồi hướng biển",
        "Phong cách thiết kế Tây Ban Nha",
        "100% Biệt thự đơn lập"
      ]
    },
    {
      id: "hl-4",
      title: "GIÁ TRỊ CỘNG HƯỞNG",
      bullets: [
        "Dự án được phát triển bởi Mona Land",
        "Quản lí vận hành bởi thương hiệu quốc tế"
      ]
    }
  ],
  locationSection: {
    eyebrow: "Vị trí đẹp",
    title: "CHO VẠN KẾT NỐI",
    paragraphs: [
      "Tọa lạc trên địa thế \"tựa sơn, hướng thủy\" ấn tượng tại cung đường resort – Huỳnh Thúc Kháng, MonaHills Mũi Né Resort & Villas sở hữu những ưu thế độc tôn để trở thành một điểm đến hoàn hảo tại Phan Thiết.",
      "Từ đây dễ dàng kết nối giao thông đến sân bay và nhà Ga Phan Thiết... MonaHills Mũi Né Resort & Villas cũng là tâm điểm để kết nối đến hơn 50 danh thắng nổi tiếng, mang đến những trải nghiệm khám phá, giải trí, nghỉ dưỡng trọn vẹn."
    ],
    ctaText: "TÌM HIỂU THÊM",
    mapBgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
  },
  investmentReasons: [
    {
      id: "reason-1",
      number: "01",
      icon: "award",
      description:
        "Vị trí đắc địa, \"vừa đủ gần – đủ xa\" để đón trọn nhu cầu của cả du khách trong và ngoài nước."
    },
    {
      id: "reason-2",
      number: "02",
      icon: "compass",
      description:
        "Khu nghỉ dưỡng tiên phong quy hoạch và thiết kế theo phong cách Tây Ban Nha, đáp ứng tiêu chuẩn chặt chẽ của vận hành nghỉ dưỡng chuẩn quốc tế với không gian riêng tư và hài hòa cùng thiên nhiên."
    },
    {
      id: "reason-3",
      number: "03",
      icon: "building",
      description:
        "Cảm hứng từ thành phố biển số 1 thế giới Barcelona với những dãy biệt thự phân tầng rực rỡ nắng vàng."
    },
    {
      id: "reason-4",
      number: "04",
      icon: "sun",
      description:
        "Villa đậm chất Tây Ban Nha phóng khoáng với thiết kế ưu việt trên từng cao độ, mở rộng tầm nhìn hướng biển trọn vẹn."
    }
  ],
  villaCollection: {
    eyebrow: "Kiến trúc Tây Ban Nha",
    title: "KHÁC BIỆT VÀ ẤN TƯỢNG",
    description:
      "Sự giao hòa tuyệt mỹ giữa kiến trúc Tây Ban Nha ấn tượng cùng địa thế đồi núi, vịnh biển liền kề, MonaHills Mũi Né Resort & Villas chắc chắn sẽ mang đến du khách không gian nghỉ dưỡng yên bình, đẳng cấp thực sự.",
    backgroundImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    villas: [
      {
        id: "villa-1",
        name: "Biệt thự",
        subtitle: "2 phòng ngủ",
        area: "Diện tích: 200 m² • 1 tầng - 1 chìa khóa",
        zone: "Phân khu Đồi Vịnh Biển (Cao độ 25m - 45m)",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
        floorPlanImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "villa-2",
        name: "Biệt thự",
        subtitle: "2 phòng ngủ",
        area: "Diện tích: 250 m² • 2 tầng - 2 chìa khóa (Dual-Key)",
        zone: "Phân khu Hồ Bơi Tràn Thác Nước (Cao độ 45m - 68m)",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        floorPlanImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "villa-3",
        name: "Biệt thự",
        subtitle: "2 phòng ngủ",
        area: "Diện tích: 300 m² • Đơn lập VIP Hồ bơi riêng",
        zone: "Phân khu Đỉnh Đồi Panorama (Cao độ 68m - 92m)",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        floorPlanImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80"
      }
    ]
  },
  masterPlanSection: {
    title: "MẶT BẰNG TIỆN ÍCH",
    description:
      "MonaHills Mũi Né Resort & Villas hội tụ chuỗi tiện ích đẳng cấp và nổi bật tại khu vực như hồ bơi 3 tầng, công viên nước, khu công viên, khu thương mại – ẩm thực... chắc chắn sẽ mang đến những trải nghiệm nghỉ dưỡng đẳng cấp tại Phan Thiết.",
    ctaText: "TÌM HIỂU THÊM",
    items: [
      {
        id: "mp-1",
        label: "Center",
        description: "Trung tâm hội nghị & sảnh đón tiếp sang trọng phong cách hoàng gia Tây Ban Nha.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "mp-2",
        label: "Mặt bằng tổng thể",
        description: "Quy hoạch phân tầng theo sườn đồi tự nhiên từ cao độ 15m lên tới 92m.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "mp-3",
        label: "Central Park",
        description: "Hồ bơi tràn bờ 3 tầng dài 250m uốn lượn như dòng thác nối liền đỉnh đồi và đại dương.",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "mp-4",
        label: "Club house",
        description: "Tổ hợp nhà hàng Địa Trung Hải, quầy bar hoàng hôn và khu Spa chăm sóc sức khỏe.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  gallerySection: {
    title: "THƯ VIỆN",
    subtitle:
      "Villa đậm chất Tây Ban Nha phóng khoáng với thiết kế ưu việt trên từng cao độ, mở rộng tầm nhìn hướng biển trọn vẹn.",
    videoCard: {
      label: "Video",
      caption: "Phim giới thiệu toàn cảnh kiến trúc đồi hướng biển MonaHills Mũi Né",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85"
    },
    modelHouseCard: {
      label: "Nhà mẫu",
      caption: "Không gian nội thất Địa Trung Hải tinh tế với vòm cửa cong và gỗ tự nhiên",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
    },
    panoramaCard: {
      label: "Toàn khu",
      caption: "Góc nhìn flycam 360 độ quần thể hơn 600 căn biệt thự đơn lập ven vịnh Mũi Né",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85"
    }
  },
  news: [
    {
      id: "news-1",
      title: "Biệt thự đồi hướng biển phong cách Tây Ban Nha độc đáo tại Phan Thiết",
      date: "14 Th12",
      category: "Kiến trúc nghỉ dưỡng",
      excerpt:
        "Cùng với đó, tỉnh tập trung xây dựng, nâng cao chất lượng các sản phẩm du lịch nghỉ dưỡng cao cấp dọc cung đường biển Huỳnh Thúc Kháng...",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Biệt thự đồi hướng biển – vừa nghỉ dưỡng vừa đầu tư",
      date: "14 Th12",
      category: "Xu hướng đầu tư",
      excerpt:
        "Sinh sống và làm việc tại Việt Nam, các nhà đầu tư đánh giá cao dòng sản phẩm biệt thự đơn lập đồi biển nhờ tiềm năng khai thác lưu trú 4 mùa...",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Tập đoàn chính thức giới thiệu dự án biệt thự đồi biển MonaHills",
      date: "14 Th12",
      category: "Sự kiện mở bán",
      excerpt:
        "Với quy mô gần 43ha, MonaHills Mũi Né Resort & Villas có khoảng 600 căn biệt thự đơn lập sang trọng vươn mình trên cao độ 92m...",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
