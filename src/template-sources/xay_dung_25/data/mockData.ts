import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung25TopCard {
  id: string;
  title: string;
  description: string;
  areaSpec: string;
  image: string;
}

export interface XayDung25DarkFeature {
  id: string;
  title: string;
  description: string;
  icon: "utensils" | "key" | "map" | "calendar" | "bell" | "bed";
}

export interface XayDung25PriceCard {
  id: string;
  name: string;
  capacity: string;
  bedrooms: string;
  bathroom: string;
  climate: string;
  priceText: string;
  image: string;
}

export interface XayDung25TemplateData extends ClonedTemplateBaseData {
  heroWelcomeLabel: string;
  topHighlightCards: XayDung25TopCard[];
  mountainBanner: {
    scriptTitle: string;
    heading: string;
    ctaText: string;
    bgImage: string;
  };
  darkFeatures: XayDung25DarkFeature[];
  amenitiesDescription: string;
  amenitiesGallery: Array<{ id: string; title: string; image: string }>;
  priceCards: XayDung25PriceCard[];
  bookingBgImage: string;
  galleryImages: string[];
  awardsDescription: string;
}

export const xayDung25DefaultData: XayDung25TemplateData = {
  business: {
    name: "Mona Mount Resort",
    logo: "",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["demonhunterg@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:00 - 22:00",
    rating: 4.9,
    reviewCount: 340,
    experienceYears: "15+",
    aboutTitle: "Kiến Trúc & Thi Công Biệt Thự Nghỉ Dưỡng Đồi Thông",
    aboutText: [
      "Đến với Mona Mount Resort, du khách và chủ đầu tư sẽ được trải nghiệm không gian kiến trúc biệt thự gỗ đồi thông bốn mùa trong một ngày, chu du trên những tuyến cáp treo và đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh."
    ]
  },
  heroWelcomeLabel: "Chào mừng đến với",
  hero: {
    eyebrow: "KIẾN TRÚC NGHỈ DƯỠNG NÚI RỪNG",
    title: "Mona Mount Resort",
    subtitle:
      "Tổng thầu thiết kế, thi công và vận hành tổ hợp biệt thự nghỉ dưỡng đồi thông, bungalow gỗ tự nhiên và hồ bơi vô cực hướng núi.",
    ctaText: "ĐẶT NGAY",
    ctaLink: "#lien-he-dat-phong",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85"
  },
  topHighlightCards: [
    {
      id: "thc-1",
      title: "Hồ bơi vô cực",
      areaSpec: "Diện tích mặt nước 450m² • Hệ thống gia nhiệt 4 mùa",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh.",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "thc-2",
      title: "Biệt thự & Phòng nghỉ",
      areaSpec: "Kết cấu gỗ thông Bắc Âu & Đá tự nhiên bản địa",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "thc-3",
      title: "Nhà hàng cảnh quan",
      areaSpec: "Không gian vượt nhịp 600m² • Tầm nhìn thung lũng 360°",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
    }
  ],
  mountainBanner: {
    scriptTitle: "Tuyệt Tác Đỉnh Cao",
    heading:
      "Chinh phục đỉnh Phan Xi Păng – nóc nhà Đông Dương với độ cao 3.143m",
    ctaText: "Trải nghiệm",
    bgImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
  },
  darkFeatures: [
    {
      id: "df-1",
      title: "Ẩm thực đa dạng",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày",
      icon: "utensils"
    },
    {
      id: "df-2",
      title: "Không gian yên tĩnh",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày",
      icon: "key"
    },
    {
      id: "df-3",
      title: "Vị trí tốt nhất",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày",
      icon: "map"
    },
    {
      id: "df-4",
      title: "Đặt phòng đơn giản",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày",
      icon: "calendar"
    },
    {
      id: "df-5",
      title: "Phục vụ 24/7",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày",
      icon: "bell"
    },
    {
      id: "df-6",
      title: "Phòng nghỉ hiện đại",
      description:
        "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày",
      icon: "bed"
    }
  ],
  amenitiesDescription:
    "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh",
  amenitiesGallery: [
    {
      id: "am-1",
      title: "Khu hồ bơi khoáng nóng & Spa trong nhà",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "am-2",
      title: "Biệt thự nghỉ dưỡng ven suối tự nhiên",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "am-3",
      title: "Phòng ngủ Master ốp gỗ thông cao cấp",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "am-4",
      title: "Sân thượng ngắm mây & Lounge ngoài trời",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  priceCards: [
    {
      id: "prc-1",
      name: "BIỆT THỰ CỔ ĐIỂN",
      capacity: "Số lượng: 4 người",
      bedrooms: "2 giường ngủ lớn",
      bathroom: "1 Phòng tắm đá tự nhiên",
      climate: "1 Hệ thống điều hòa & sưởi",
      priceText: "1.500.000đ / đêm",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prc-2",
      name: "BIỆT THỰ HIỆN ĐẠI",
      capacity: "Số lượng: 4 người",
      bedrooms: "2 giường ngủ Panorama",
      bathroom: "1 Phòng tắm Jacuzzi",
      climate: "1 Hệ thống điều hòa & sưởi",
      priceText: "1.800.000đ / đêm",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prc-3",
      name: "BUNGALOW HOÀI CỔ",
      capacity: "Số lượng: 4 người",
      bedrooms: "2 giường ngủ gỗ mộc",
      bathroom: "1 Phòng tắm thảo mộc",
      climate: "1 Hệ thống điều hòa & sưởi",
      priceText: "1.650.000đ / đêm",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=700&q=80"
    }
  ],
  bookingBgImage:
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1920&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
  ],
  awardsDescription:
    "Đến với Mona Mount Resort, du khách sẽ được trải nghiệm khí hậu bốn mùa trong một ngày cùng cảnh quan thiên nhiên của những cánh rừng nguyên sinh"
};

export default xayDung25DefaultData;
