import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PaintProductItem {
  id: string;
  name: string;
  brand: string;
  badgeText: string;
  subBadgeText: string;
  bucketTheme: "silver-green" | "blue-yellow" | "silver-teal" | "purple-orange" | "blue-white" | "red-blue";
  volume: string;
  price: string;
  coverage: string;
  description: string;
  image: string;
}

export interface XayDung11Data extends ClonedTemplateBaseData {
  features: Array<{
    id: string;
    icon: "quality" | "efficiency" | "palette" | "durability";
    color: string;
    title: string;
    description: string;
  }>;
  aboutBanner: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    backgroundImage: string;
  };
  mainProducts: PaintProductItem[];
  auxiliaryProducts: PaintProductItem[];
  ideas: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
  partners: Array<{
    id: string;
    name: string;
    slogan: string;
    primaryColor: string;
    secondaryColor: string;
  }>;
}

export const xayDung11DefaultData: XayDung11Data = {
  business: {
    name: "MONA PAINTING",
    phone: ["0126 922 0162", "0909 777 162"],
    email: ["cskh@monapainting.vn", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08:00 - 17:00",
    rating: 4.9,
    reviewCount: 284,
    aboutTitle: "Về Chúng Tôi",
    aboutText: [
      "MONA PAINTING là tổng đại lý phân phối sơn nước chính hãng cấp 1 của AkzoNobel (Dulux, Maxilite) và đơn vị thi công sơn hoàn thiện uy tín hàng đầu cho nhà phố, biệt thự và dự án dân dụng.",
      "Chúng tôi cam kết cung cấp 100% sản phẩm xuất xưởng trực tiếp từ nhà máy, hỗ trợ phối màu 3D ngoại thất miễn phí, pha màu vi tính tự động chuẩn xác và bảo hành màng sơn lên đến 10 năm."
    ],
    highlights: [
      "Cam kết 100% sơn chính hãng từ nhà máy AkzoNobel Việt Nam",
      "Hệ thống máy pha màu tự động chính hãng hơn 2.000 mã màu",
      "Tư vấn định mức vật tư & phối màu 3D mặt tiền miễn phí",
      "Đội ngũ thợ thi công sơn bả lành nghề, bảo hành bong tróc 5 năm"
    ]
  },
  hero: {
    eyebrow: "TỔNG ĐẠI LÝ PHÂN PHỐI & THI CÔNG SƠN NƯỚC",
    title: "MONA PAINTING",
    subtitle: "Đại Lý Sơn Cao Cấp",
    description:
      "Chuyên cung cấp các dòng sơn nội ngoại thất cao cấp Dulux, Maxilite chính hãng và giải pháp chống thấm toàn diện, mang lại diện mạo sang trọng, bền màu vượt thời gian cho mọi công trình Việt.",
    ctaText: "XEM THÊM",
    ctaLink: "#san-pham",
    secondaryCtaText: "MUA NGAY",
    secondaryCtaLink: "#phu-tro",
    backgroundImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  features: [
    {
      id: "feat-1",
      icon: "quality",
      color: "#7ac143",
      title: "Luôn Nâng Cao Chất Lượng",
      description:
        "Cam kết phân phối 100% sơn chính hãng từ nhà máy với màng sơn co giãn, che lấp khe nứt nhỏ và chống bong tróc tối ưu."
    },
    {
      id: "feat-2",
      icon: "efficiency",
      color: "#f9b233",
      title: "Mang Lại Hiệu Quả Lớn",
      description:
        "Độ phủ thực tế cao, dễ thi công chùi rửa và chống bám bẩn vượt trội giúp chủ đầu tư tiết kiệm đáng kể chi phí bảo trì."
    },
    {
      id: "feat-3",
      icon: "palette",
      color: "#f37021",
      title: "Tạo Nhiều Sự Lựa Chọn",
      description:
        "Ngân hàng hơn 2.000 sắc màu xu hướng cùng các dòng sơn hiệu ứng đá cẩm thạch, vải đũi đáp ứng mọi thiết kế nội thất."
    },
    {
      id: "feat-4",
      icon: "durability",
      color: "#d91c5c",
      title: "Tuổi Thọ Sơn Cao Hơn",
      description:
        "Công nghệ KeepCool™ làm mát đến 5°C và Alkali Guard chống kiềm hóa giúp bảo vệ công trình bền đẹp suốt 8 - 10 năm."
    }
  ],
  aboutBanner: {
    title: "MONA PAINTING",
    subtitle: "Về Chúng Tôi",
    description:
      "Với hơn 12 năm đồng hành cùng hàng ngàn ngôi nhà Việt, chúng tôi không chỉ cung cấp những thùng sơn chất lượng nhất mà còn mang đến giải pháp phối màu phong thủy, khảo sát độ ẩm tường thực tế và quy trình thi công chuẩn kỹ thuật.",
    ctaText: "XEM THÊM",
    backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
  },
  mainProducts: [
    {
      id: "prod-1",
      name: "Dulux Weathershield",
      brand: "Dulux",
      badgeText: "WEATHER SHIELD",
      subBadgeText: "MULTI SURFACE • PURE BRILLIANT WHITE",
      bucketTheme: "silver-green",
      volume: "Thùng 15 Lít",
      price: "3.450.000 đ",
      coverage: "12 - 14 m²/lít/lớp",
      description: "Sơn ngoại thất cao cấp bề mặt bóng, chống phai màu và chống rêu mốc gấp 2 lần.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-2",
      name: "Dulux Weathershield Chất Chống Thấm",
      brand: "Dulux",
      badgeText: "Weathershield",
      subBadgeText: "CHẤT CHỐNG THẤM CAO CẤP",
      bucketTheme: "blue-yellow",
      volume: "Thùng 20 Kg",
      price: "2.280.000 đ",
      coverage: "4 - 5 m²/kg/2 lớp",
      description: "Công nghệ Hydroshield tạo lớp màng ngăn thấm nước hoàn hảo cho tường đứng ngoại thất.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-3",
      name: "Dulux Ambiance Special Effects Paints (Marble)",
      brand: "Dulux TRADE",
      badgeText: "DURABLE FLAT MATT",
      subBadgeText: "HIỆU ỨNG ĐÁ CẨM THẠCH MARBLE",
      bucketTheme: "silver-teal",
      volume: "Lon 5 Lít",
      price: "1.890.000 đ",
      coverage: "9 - 11 m²/lít/lớp",
      description: "Sơn hiệu ứng nội thất cao cấp tái hiện vân đá cẩm thạch tự nhiên sang trọng và tinh tế.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-4",
      name: "Dulux Ambiance Special Effects Paints (Linen)",
      brand: "Dulux",
      badgeText: "AMBIANCE",
      subBadgeText: "SPECIAL EFFECTS • VẢI ĐŨI LINEN",
      bucketTheme: "purple-orange",
      volume: "Lon 5 Lít",
      price: "1.950.000 đ",
      coverage: "9 - 11 m²/lít/lớp",
      description: "Sơn hiệu ứng bề mặt vải Linen mềm mại, tạo chiều sâu nghệ thuật cho phòng khách và phòng ngủ.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    }
  ],
  auxiliaryProducts: [
    {
      id: "aux-1",
      name: "Sơn Lót Nội Thất Cao Cấp Dulux",
      brand: "Dulux",
      badgeText: "SƠN LÓT NỘI THẤT",
      subBadgeText: "CHỐNG KIỀM • TĂNG ĐỘ BÁM DÍNH",
      bucketTheme: "blue-white",
      volume: "Thùng 18 Lít",
      price: "2.150.000 đ",
      coverage: "12 - 14 m²/lít/lớp",
      description: "Sơn lót chống kiềm nội thất giúp lớp sơn phủ lên màu chuẩn xác và đều màu.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aux-2",
      name: "Dulux Weathershield Powerflexx",
      brand: "Dulux",
      badgeText: "Weathershield",
      subBadgeText: "POWERFLEXX CO GIÃN GẤP 6 LẦN",
      bucketTheme: "blue-yellow",
      volume: "Thùng 15 Lít",
      price: "3.680.000 đ",
      coverage: "11 - 13 m²/lít/lớp",
      description: "Màng sơn co giãn siêu việt che phủ vết nứt chân chim, chống thấm mưa tạt tuyệt đối.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aux-3",
      name: "Bột Trét Cao Cấp Dulux Nội Ngoại Thất",
      brand: "Dulux",
      badgeText: "BỘT TRÉT CAO CẤP",
      subBadgeText: "DỄ THI CÔNG • BỀ MẶT SIÊU MỊN",
      bucketTheme: "blue-white",
      volume: "Bao 40 Kg",
      price: "495.000 đ",
      coverage: "1 - 1.2 m²/kg/2 lớp",
      description: "Bột bả tường cao cấp tạo bề mặt phẳng mịn hoàn hảo trước khi lăn sơn lót.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "aux-4",
      name: "Sơn Nước Trong Nhà Maxilite Kinh Tế",
      brand: "MAXILITE",
      badgeText: "MAXILITE",
      subBadgeText: "SƠN NƯỚC TRONG NHÀ • TỪ DULUX",
      bucketTheme: "red-blue",
      volume: "Thùng 15 Lít",
      price: "1.190.000 đ",
      coverage: "10 - 12 m²/lít/lớp",
      description: "Giải pháp sơn nội thất kinh tế, độ phủ cao, màu sắc tươi sáng lâu phai từ AkzoNobel.",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  ideas: [
    {
      id: "idea-1",
      title: "4 cách để thay áo cho phòng khách của bạn với Màu Dulux của Năm",
      date: "8 Tháng Ba, 2026",
      excerpt:
        "4 cách để thay áo cho phòng khách của bạn với Màu Dulux của Năm, bốn bảng màu pa-lết mới dễ thử nghiệm cho mọi diện tích căn hộ...",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "idea-2",
      title: "Dẫn đầu xu hướng với sắc trắng mang bản sắc riêng",
      date: "12 Tháng Ba, 2026",
      excerpt:
        "Thách thức mọi quy luật thời gian và dễ dàng ứng dụng, so với vô vàn sắc màu khác, trắng luôn mang trong mình vẻ thanh lịch vượt thời gian...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "idea-3",
      title: "Khám phá vẻ đẹp của thiên nhiên từ màu nâu trầm ấm",
      date: "15 Tháng Ba, 2026",
      excerpt:
        "Khi trang trí nhà cửa, dường như màu nâu hiếm khi nằm trong gam màu bạn nghĩ đến. Dù nâu cũng nằm trong bảng màu đất ấm áp và sang trọng...",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "idea-4",
      title: "Những cách tuyệt vời để ngôi nhà của bạn có điểm nhấn cá tính",
      date: "19 Tháng Ba, 2026",
      excerpt:
        "Không cần phải dọn nhà! Những ý tưởng sơn thông minh sẽ thổi hơi thở cuộc sống mới vào những bức tường đơn điệu chỉ trong một ngày cuối tuần...",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "idea-5",
      title: "Xu hướng màu sắc: Sang trọng tinh tế",
      date: "22 Tháng Ba, 2026",
      excerpt:
        "Xu hướng này nắm bắt và phản ánh một lối sống, một phong cách tiêu dùng mới: giá trị không nằm ở vật chất phô trương mà ở sự tinh giản...",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "idea-6",
      title: "Xu hướng màu sắc: Lãng mạn cùng thiên nhiên",
      date: "26 Tháng Ba, 2026",
      excerpt:
        "Khi môi trường đang là vấn đề trọng tâm được cả thế giới chú trọng đến, xu hướng này đã kịp thời nắm bắt sắc xanh lá và xanh rêu dịu mát...",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=700&q=80"
    }
  ],
  partners: [
    {
      id: "p-1",
      name: "PeopleConnect",
      slogan: "Architecture & Build",
      primaryColor: "#9c27b0",
      secondaryColor: "#0095da"
    },
    {
      id: "p-2",
      name: "ecocare",
      slogan: "Green Coating Standard",
      primaryColor: "#7ac143",
      secondaryColor: "#f9b233"
    },
    {
      id: "p-3",
      name: "Peoplecare",
      slogan: "Interior Solutions",
      primaryColor: "#29b6f6",
      secondaryColor: "#8bc34a"
    },
    {
      id: "p-4",
      name: "FREEDOM WORLD",
      slogan: "Color Innovation",
      primaryColor: "#e91e63",
      secondaryColor: "#3f51b5"
    },
    {
      id: "p-5",
      name: "BeautyCare",
      slogan: "Home Aesthetics",
      primaryColor: "#0088cc",
      secondaryColor: "#66bb6a"
    }
  ]
};
