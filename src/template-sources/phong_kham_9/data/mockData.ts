import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham9Data extends ClonedTemplateBaseData {
  serviceCards: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    iconType: "medical" | "training" | "boarding" | "nutrition";
  }>;
  statCounters: Array<{
    id: string;
    number: string;
    label: string;
    borderColor: string;
    bgColor: string;
    iconColor: string;
  }>;
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    features: Array<{
      title: string;
      text: string;
    }>;
    image: string;
  };
  galleryStrip: string[];
  partnerLogos: string[];
  videoPreviewImage: string;
  specialists: Array<{
    id: string;
    name: string;
    role: string;
    blobColor: string;
    roleColor: string;
    image: string;
  }>;
  quoteFormOptions: {
    petTypes: string[];
    serviceTypes: string[];
  };
  blogPosts: Array<{
    id: string;
    dateRibbon: string;
    category: string;
    commentsCount: number;
    title: string;
    excerpt: string;
    image: string;
  }>;
  footerGallery: string[];
}

export const phongKham9DefaultData = {
  business: {
    name: "PET PLANET",
    phone: ["(+84) 0313728397", "1900 636 648"],
    email: ["info@themona.global", "cskh@petplanet.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00",
    rating: 5.0,
    reviewCount: 180,
    experienceYears: "25+",
    aboutTitle: "Chăm sóc thú cưng an toàn và chất lượng",
    aboutText: [
      "Bệnh viện & Phòng khám Thú y Quốc tế PET PLANET cung cấp dịch vụ khám chữa bệnh nội ngoại khoa, tiêm phòng vắc-xin, siêu âm xét nghiệm, spa grooming và khách sạn lưu trú chuẩn 5 sao.",
      "Đội ngũ bác sĩ thú y giàu kinh nghiệm cùng trang thiết bị chẩn đoán hình ảnh hiện đại giúp người bạn nhỏ của bạn luôn khỏe mạnh, năng động và hạnh phúc."
    ],
    highlights: [
      "Hơn 25 năm kinh nghiệm điều trị & chăm sóc thú y",
      "Chứng nhận quốc tế & đội ngũ 28+ chuyên gia tận tâm"
    ]
  },
  hero: {
    eyebrow: "BỆNH VIỆN & PHÒNG KHÁM THÚ Y PET PLANET",
    title: "Chăm sóc\nthú cưng.",
    subtitle:
      "Hệ thống phòng khám thú y, tiêm phòng, spa làm đẹp và khách sạn lưu trú chuẩn quốc tế — nơi thú cưng được yêu thương như thành viên gia đình.",
    ctaText: "Khám phá",
    ctaLink: "#dich-vu-tan-tam",
    backgroundImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85"
  },
  serviceCards: [
    {
      id: "srv-1",
      title: "Chăm sóc\ny tế",
      description:
        "Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.",
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80",
      iconType: "medical"
    },
    {
      id: "srv-2",
      title: "Chăm sóc\nvà huấn luyện",
      description:
        "Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80",
      iconType: "training"
    },
    {
      id: "srv-3",
      title: "Nơi ở\nvà bảo mẫu",
      description:
        "Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.",
      image:
        "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=500&q=80",
      iconType: "boarding"
    },
    {
      id: "srv-4",
      title: "Thức ăn\nvà đồ chơi",
      description:
        "Cung cấp kiểm tra sức khỏe định kỳ, tiêm phòng, điều trị bệnh, và các dịch vụ y tế khác cho thú cưng của bạn.",
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80",
      iconType: "nutrition"
    }
  ],
  statCounters: [
    {
      id: "st-1",
      number: "180",
      label: "Đánh giá tích cực",
      borderColor: "border-[#38bdf8]",
      bgColor: "bg-[#f0f9ff]",
      iconColor: "text-[#0284c7]"
    },
    {
      id: "st-2",
      number: "68+",
      label: "Sản phẩm",
      borderColor: "border-[#fbbf24]",
      bgColor: "bg-[#fffbeb]",
      iconColor: "text-[#d97706]"
    },
    {
      id: "st-3",
      number: "28+",
      label: "Chuyên gia",
      borderColor: "border-[#4ade80]",
      bgColor: "bg-[#f0fdf4]",
      iconColor: "text-[#16a34a]"
    }
  ],
  aboutSection: {
    eyebrow: "GIỚI THIỆU",
    title: "Chăm sóc thú cưng an toàn và chất lượng",
    description:
      "Phòng khám được trang bị hệ thống xét nghiệm sinh hóa máu, siêu âm màu 4D và phòng phẫu thuật vô trùng tiêu chuẩn quốc tế, mang lại sự an tâm tuyệt đối cho mọi chủ nuôi.",
    quote:
      "\"Các thành phần dinh dưỡng và phác đồ điều trị được lựa chọn khắt khe dựa trên thể trạng riêng biệt của từng bé thú cưng.\"",
    features: [
      {
        title: "Hơn 25 năm\nkinh nghiệm",
        text: "Đội ngũ bác sĩ thú y đầu ngành trực tiếp thăm khám và theo dõi hồ sơ sức khỏe trọn đời."
      },
      {
        title: "Chứng nhận &\nchuyên gia",
        text: "Quy trình tiêm chủng, tẩy ký sinh trùng và cắt tỉa lông đạt chuẩn Hiệp hội Thú y Quốc tế."
      }
    ],
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=85"
  },
  galleryStrip: [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=500&q=80"
  ],
  partnerLogos: [
    "ROYAL CANIN",
    "SmartHeart",
    "PEDIGREE",
    "WHISKAS",
    "ORIJEN"
  ],
  testimonials: [
    {
      name: "Christine Eve",
      role: "Chủ nuôi bé Corgi & Mèo Anh",
      content:
        "Trang web có rất nhiều dịch vụ hữu ích và đa dạng cho thú cưng. Tôi đã sử dụng dịch vụ chăm sóc và huấn luyện và nhận được hỗ trợ tốt từ nhân viên. Một nơi tuyệt vời để tìm các dịch vụ chất lượng cho thú cưng của bạn.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Nguyễn Hoàng Nam",
      role: "Chủ nuôi bé Golden Retriever",
      content:
        "Bác sĩ tại Pet Planet rất nhẹ nhàng và chẩn đoán chính xác. Bé nhà mình đi tiêm phòng và tắm cắt tỉa lông về lúc nào cũng thơm tho, vui vẻ.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    }
  ],
  videoPreviewImage:
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=900&q=85",
  specialists: [
    {
      id: "sp-1",
      name: "Thùy Dương",
      role: "NHÂN VIÊN CHĂM SÓC",
      blobColor: "#f15a24",
      roleColor: "text-[#f15a24]",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sp-2",
      name: "Vân Long",
      role: "NHÂN VIÊN CHĂM SÓC",
      blobColor: "#5eb946",
      roleColor: "text-[#5eb946]",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "sp-3",
      name: "Linh Min",
      role: "NHÂN VIÊN CHĂM SÓC",
      blobColor: "#00839b",
      roleColor: "text-[#00839b]",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    }
  ],
  quoteFormOptions: {
    petTypes: ["Chó cưng (Dog)", "Mèo cưng (Cat)", "Thú nhỏ (Hamster / Thỏ)"],
    serviceTypes: [
      "Khám tổng quát & Tiêm phòng vắc-xin",
      "Spa Tắm Gội & Cắt Tỉa Lông 8 Bước",
      "Khách sạn Lưu Trú Thú Cưng 24/7",
      "Huấn Luyện Kỹ Năng & Dinh Dưỡng"
    ]
  },
  blogPosts: [
    {
      id: "bl-1",
      dateRibbon: "04 TH5",
      category: "Chăm sóc tại nhà",
      commentsCount: 0,
      title: "Hướng dẫn theo dõi dấu hiệu sức khỏe thú cưng tại nhà",
      excerpt:
        "Cách kiểm tra nhiệt độ, màu sắc nướu và thói quen ăn uống để phát hiện sớm bệnh lý ở chó mèo.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bl-2",
      dateRibbon: "04 TH5",
      category: "Dinh dưỡng",
      commentsCount: 0,
      title: "Lợi ích tinh thần tuyệt vời khi nuôi một chú cún trong gia đình",
      excerpt:
        "Nghiên cứu y khoa cho thấy việc gắn bó với thú cưng giúp giảm căng thẳng và tăng cường vận động mỗi ngày.",
      image:
        "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bl-3",
      dateRibbon: "04 TH5",
      category: "Grooming",
      commentsCount: 0,
      title: "Bí quyết giúp cún con làm quen với buổi cắt tỉa lông đầu tiên",
      excerpt:
        "Chuẩn bị tâm lý nhẹ nhàng và quy trình tắm massage ấm áp giúp cún con không còn sợ máy sấy.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bl-4",
      dateRibbon: "04 TH5",
      category: "Thú y",
      commentsCount: 0,
      title: "Giải pháp chăm sóc răng miệng và lông bóng mượt mỗi ngày",
      excerpt:
        "Bổ sung Omega-3, Lysine tự nhiên và vệ sinh tai mắt định kỳ giúp phòng ngừa 90% bệnh da liễu.",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=250&q=80"
  ]
};
