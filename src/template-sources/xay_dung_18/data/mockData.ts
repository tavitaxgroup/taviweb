import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung18CorporatePillar {
  id: string;
  title: string;
  description: string;
  iconType: "founded" | "mission" | "vision" | "values";
}

export interface XayDung18EventItem {
  id: string;
  title: string;
  timeText: string;
  image: string;
}

export interface XayDung18Partner {
  id: string;
  name: string;
  subtitle: string;
  color: string;
}

export interface XayDung18Data extends ClonedTemplateBaseData {
  hotlineBanner: string;
  corporatePillars: XayDung18CorporatePillar[];
  featuredProjectsStrip: Array<{
    id: string;
    name: string;
    location: string;
    scale: string;
    image: string;
  }>;
  events: XayDung18EventItem[];
  partners: XayDung18Partner[];
  footerProjectsLeft: string[];
  footerProjectsRight: string[];
}

export const xayDung18DefaultData: XayDung18Data = {
  business: {
    name: "MONA MEDIA REAL ESTATE",
    phone: ["0902.848.440", "0938.460.400"],
    email: ["investmentland01@gmail.com", "info@investland.vn"],
    address:
      "Tầng lửng An Phú Plaza, 117 - 119 Lý Chính Thắng, Phường 07, Quận 3, Tp.HCM",
    workingHours: "Thứ 2 - Thứ 6: 08:00 am - 17:00 pm",
    rating: 4.9,
    reviewCount: 640,
    experienceYears: "12+",
    aboutTitle: "GIỚI THIỆU",
    aboutText: [
      "Công ty TNHH Investment Land được thành lập theo giấy phép đăng ký kinh doanh số 0313851136, chuyên đầu tư phát triển hạ tầng và phân phối các dự án khu đô thị trọng điểm.",
      "Mang đến cho khách hàng những giải pháp an cư và cơ hội đầu tư sinh lời bền vững với pháp lý minh bạch 100%."
    ],
    highlights: [
      "Phân phối độc quyền hơn 25 đại đô thị tại TP.HCM & vùng ven",
      "Đối tác chiến lược của Vinhomes, Khang Điền, Nam Long, Novaland",
      "Bảo lãnh tài chính bởi Vietcombank, VietinBank, MB, VPBank",
      "Pháp lý sổ hồng minh bạch và tiến độ thi công vượt cam kết"
    ]
  },
  hotlineBanner: "0902.848.440 - 0938.460.400",
  hero: {
    eyebrow: "CHỦ ĐẦU TƯ HẠ TẦNG & PHÁT TRIỂN KHU ĐÔ THỊ",
    title: "Kiến Tạo Đại Đô Thị Xanh Chuẩn Quốc Tế",
    subtitle:
      "Tiên phong phát triển các khu đô thị sinh thái thông minh, nâng tầm giá trị sống và sinh lời bền vững cho nhà đầu tư.",
    ctaText: "Xem tất cả dự án",
    ctaLink: "#du-an",
    secondaryCtaText: "Liên hệ tư vấn",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  corporatePillars: [
    {
      id: "cp-1",
      title: "THÀNH LẬP",
      description:
        "Công ty TNHH Investment Land được thành lập theo giấy phép đăng ký kinh doanh số 0313851136 ...",
      iconType: "founded"
    },
    {
      id: "cp-2",
      title: "SỨ MỆNH",
      description:
        "Mang đến cho khách hàng những giải pháp và sự lựa chọn tốt nhất, vì lợi ích của khách hàng, đối tác, chủ đầu tư...",
      iconType: "mission"
    },
    {
      id: "cp-3",
      title: "TẦM NHÌN",
      description:
        "Xây dựng Investment Land trở thành một doanh nghiệp hàng đầu trong lĩnh vực tư vấn, phân phối và tiếp thị bất động sản ...",
      iconType: "vision"
    },
    {
      id: "cp-4",
      title: "GIÁ TRỊ",
      description:
        "Minh bạch và trung thực để phát triển bền vững. Tin cậy, tôn trọng khách hàng và nhà đầu tư, đối tác. ...",
      iconType: "values"
    }
  ],
  featuredProjectsStrip: [
    {
      id: "fp-1",
      name: "Vincity",
      location: "TP. Thủ Đức (Quận 9)",
      scale: "Đại đô thị 271 ha",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "fp-2",
      name: "Swan Park",
      location: "Khu Đông Sài Gòn",
      scale: "Đô thị sinh thái 942 ha",
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "fp-3",
      name: "Villa Park",
      location: "Phú Hữu, Quận 9",
      scale: "Khu biệt thự compound",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "fp-4",
      name: "Gem Riverside",
      location: "Nam Rạch Chiếc, Quận 2",
      scale: "Tổ hợp 12 tháp ven sông",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "fp-5",
      name: "Saigon Sport City",
      location: "An Phú, Quận 2",
      scale: "Khu đô thị thể thao 64 ha",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=80"
    }
  ],
  events: [
    {
      id: "ev-1",
      title: "Mở bán căn hộ Gem Riverside",
      timeText: "Thời gian: tháng 03/2026 [...]",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-2",
      title: "Mở bán Vincity",
      timeText: "Thời gian: tháng 03 - 2026 [...]",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-3",
      title: "Mở bán Palm Heights ( giai đoạn 2)",
      timeText: "Thời gian: tháng 05-2026 [...]",
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-4",
      title: "Mở bán biệt thự Swan Bay",
      timeText: "Thời gian: tháng 05-2026 [...]",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-5",
      title: "Mở bán Swan Park (giai đoạn 2)",
      timeText: "Thời gian: tháng 02/2026 [...]",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-6",
      title: "Kick Off Swan Park",
      timeText: "Thời gian: 17h00 - ngày 26 tháng 01.2026 [...]",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    }
  ],
  partners: [
    {
      id: "p-1",
      name: "KHANG ĐIỀN",
      subtitle: "Nơi đặt niềm tin - Nơi xây tổ ấm",
      color: "#0066b3"
    },
    {
      id: "p-2",
      name: "MB",
      subtitle: "NGÂN HÀNG QUÂN ĐỘI",
      color: "#1e3a8a"
    },
    {
      id: "p-3",
      name: "MIK GROUP",
      subtitle: "REAL ESTATE DEVELOPER",
      color: "#1d4ed8"
    },
    {
      id: "p-4",
      name: "NAM LONG",
      subtitle: "SÀN GIAO DỊCH BĐS",
      color: "#b91c1c"
    },
    {
      id: "p-5",
      name: "NOVALAND",
      subtitle: "CHO CUỘC SỐNG BỪNG SÁNG",
      color: "#15803d"
    },
    {
      id: "p-6",
      name: "Vietcombank",
      subtitle: "Chung niềm tin vững tương lai",
      color: "#166534"
    },
    {
      id: "p-7",
      name: "VietinBank",
      subtitle: "Nâng giá trị cuộc sống",
      color: "#0369a1"
    },
    {
      id: "p-8",
      name: "VINHOMES",
      subtitle: "NƠI HẠNH PHÚC NGẬP TRÀN",
      color: "#b45309"
    },
    {
      id: "p-9",
      name: "VPBank",
      subtitle: "Vì một Việt Nam thịnh vượng",
      color: "#15803d"
    },
    {
      id: "p-10",
      name: "MASTERISE",
      subtitle: "HOMES & DEVELOPMENT",
      color: "#92400e"
    }
  ],
  news: [
    {
      id: "in-1",
      title: "CĂN HỘ TRUNG TÂM QUẬN 9",
      date: "23 Tháng Một, 2026",
      category: "Thị trường",
      excerpt:
        "Hạ tầng giao thông khu Đông TP.HCM bứt phá mạnh mẽ với tuyến Metro số 1 và Vành đai 3 giúp các dự án căn hộ trung tâm Quận 9 thu hút dòng vốn đầu tư lớn...",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85"
    },
    {
      id: "in-2",
      title: "AN CƯ HẠNG SANG NGAY TRUNG TÂM",
      date: "23 Tháng Một, 2026",
      category: "Bất động sản hạng sang",
      excerpt:
        "Không gian sống xanh chuẩn resort ngay lõi trung tâm tài chính Thủ Thiêm với hệ thống tiện ích bến du thuyền và công viên ven sông...",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "in-3",
      title: "DỰ ÁN MỚI ĐẦU NĂM 2026",
      date: "23 Tháng Một, 2026",
      category: "Dự án mới",
      excerpt:
        "Loạt dự án đại đô thị thông minh chính thức ra mắt giai đoạn mới với chính sách ân hạn nợ gốc 24 tháng...",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "in-4",
      title: "CĂN HỘ SẮP GIAO CHINH PHỤC NGƯỜI MUA.",
      date: "23 Tháng Một, 2026",
      category: "Tiến độ bàn giao",
      excerpt:
        "Phân khúc căn hộ đã cất nóc và chuẩn bị bàn giao sổ hồng luôn là tâm điểm săn đón của các gia đình trẻ...",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
    }
  ],
  footerProjectsLeft: [
    "Vincity",
    "Swan Park",
    "Villa Park",
    "Gem Riverside",
    "Swan Bay"
  ],
  footerProjectsRight: [
    "Saigon Sport City",
    "River Park 2",
    "Palm Heights",
    "Căn Hộ Đất Xanh"
  ]
};
