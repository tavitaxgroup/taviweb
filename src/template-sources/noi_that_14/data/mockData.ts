import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat14FeaturedRoom {
  id: string;
  badge: string;
  title: string;
  guestsText: string;
  areaText: string;
  description: string;
  priceText: string;
  image: string;
}

export interface NoiThat14SmallRoomCard {
  id: string;
  title: string;
  priceBadge: string;
  description: string;
  image: string;
}

export interface NoiThat14TemplateData extends ClonedTemplateBaseData {
  aboutCollageImages: string[];
  featuredRoom: NoiThat14FeaturedRoom;
  smallRoomCards: NoiThat14SmallRoomCard[];
  locationQuadImages: string[];
  locationHeading: string;
  locationColumns: string[];
  diningBlock: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
  lobbyBlock: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };
  paradiseBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
    backgroundImage: string;
  };
  centerAnnouncementText: string;
  overlayNewsCards: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  footerGallery: string[];
}

export const noiThat14DefaultData: NoiThat14TemplateData = {
  business: {
    name: "Mona Media Resort",
    logo: "",
    phone: ["076 922 0162", "0909 686 888"],
    email: ["info@monasuite.vn", "booking@monasuite.vn"],
    address: "319 - C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Phục vụ 24/7",
    rating: 5.0,
    reviewCount: 318,
    experienceYears: "15+",
    aboutTitle: "Mona Media Resort",
    aboutText: [
      "Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh, Mona Media Resort gồm 105 phòng nghỉ theo tiêu chuẩn 4 sao được trang bị nội thất hiện đại và sang trọng, 2 khu nhà hàng, hồ bơi thật rộng và nhất là chuỗi Bungalow thật độc đáo bởi thiết kế cách điệu từ kiến trúc tháp Chăm huyền bí."
    ],
    highlights: [
      "105 Phòng nghỉ & Căn hộ dịch vụ tiêu chuẩn 4 - 5 sao",
      "Thiết kế nội thất gỗ ấm áp kết hợp khung cửa kính chạm trần",
      "2 Khu nhà hàng ẩm thực Á - Âu & Sảnh tiếp khách sang trọng",
      "Chuỗi Bungalow kiến trúc tháp Chăm độc bản hướng biển"
    ]
  },
  hero: {
    eyebrow: "KHÁCH SẠN THƯỢNG LƯU & RESORT NGHỈ DƯỠNG",
    title: "MONA MEDIA",
    subtitle:
      "Không gian nội thất căn hộ dịch vụ, Penthouse và Boutique Resort đẳng cấp.",
    ctaText: "Xem phòng",
    ctaLink: "#loai-phong",
    secondaryCtaText: "ĐẶT PHÒNG",
    secondaryCtaLink: "#dat-phong",
    backgroundImage:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  aboutCollageImages: [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
  ],
  featuredRoom: {
    id: "feat-room",
    badge: "MONA MEDIA ★★★",
    title: "Tiêu chuẩn",
    guestsText: "1 khách",
    areaText: "15m2",
    description:
      "Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh với nội thất tinh tế.",
    priceText: "750.000đ/đêm",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80"
  },
  smallRoomCards: [
    {
      id: "sr-1",
      title: "PHÒNG GIA ĐÌNH",
      priceBadge: "750.000Đ/ĐÊM",
      description:
        "Không gian phòng ngủ gia đình rộng rãi với nội thất gỗ sồi và ánh sáng tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sr-2",
      title: "PHÒNG ĐÔI DELUXE",
      priceBadge: "850.000Đ/ĐÊM",
      description:
        "Phòng đôi cửa kính toàn cảnh nhìn ra thành phố với rèm lụa hai lớp cao cấp.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sr-3",
      title: "PHÒNG LUXURY SUITE",
      priceBadge: "1.250.000Đ/ĐÊM",
      description:
        "Suite hạng sang tích hợp phòng khách riêng biệt, sofa da Ý và bàn trà cẩm thạch.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sr-4",
      title: "CĂN HỘ STUDIO",
      priceBadge: "1.500.000Đ/ĐÊM",
      description:
        "Căn hộ dịch vụ đầy đủ tiện nghi bếp, bàn ăn và đèn thả trần đương đại.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  locationQuadImages: [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80"
  ],
  locationHeading: "Khám phá vị trí",
  locationColumns: [
    "Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh, Mona Media Resort gồm 105 phòng nghỉ theo tiêu chuẩn 4 sao được trang bị nội thất hiện đại và sang trọng, 2 khu nhà hàng, hồ bơi thật rộng và nhất là chuỗi Bungalow thật độc đáo bởi thiết kế cách điệu từ kiến trúc tháp Chăm huyền bí.",
    "Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh, Mona Media Resort gồm 105 phòng nghỉ theo tiêu chuẩn 4 sao được trang bị nội thất hiện đại và sang trọng, 2 khu nhà hàng, hồ bơi thật rộng và nhất là chuỗi Bungalow thật độc đáo bởi thiết kế cách điệu từ kiến trúc tháp Chăm huyền bí."
  ],
  diningBlock: {
    eyebrow: "ẨM THỰC",
    title: "Nhà hàng",
    description:
      "Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh, Mona Media Resort gồm 105 phòng nghỉ theo tiêu chuẩn 4 sao được trang bị nội thất hiện đại và sang trọng, 2 khu nhà hàng, hồ bơi thật rộng và nhất là chuỗi Bungalow thật độc đáo bởi thiết kế cách điệu từ kiến trúc tháp Chăm huyền bí.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
  },
  lobbyBlock: {
    eyebrow: "LỄ TÂN",
    title: "Sảnh tiếp khách",
    description:
      "Tọa lạc ngay vịnh Mũi Né xinh đẹp và trông ra đảo Hòn Lao hoang sơ giữa biển xanh, Mona Media Resort gồm 105 phòng nghỉ theo tiêu chuẩn 4 sao được trang bị nội thất hiện đại và sang trọng, 2 khu nhà hàng, hồ bơi thật rộng và nhất là chuỗi Bungalow thật độc đáo bởi thiết kế cách điệu từ kiến trúc tháp Chăm huyền bí.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
  },
  paradiseBanner: {
    eyebrow: "MONA HOTEL & RESORT",
    title: "Thiên đường nghỉ dưỡng",
    ctaText: "Trải nghiệm",
    backgroundImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85"
  },
  centerAnnouncementText: "Khai trương khách sạn Vinpearl Cần Thơ",
  news: [
    {
      id: "nw-1",
      title: "Khách sạn Hòn Ngư giá phòng ưu đãi chỉ từ 750.000đ",
      date: "14/05/2026",
      excerpt:
        "Liên hệ đặt phòng khách sạn cuối năm tại Cửa Lò với giá rẻ nhất chỉ từ 750.000 VNĐ/đêm, vui lòng liên hệ khách sạn Hòn Ngư...",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Hacinco Hotel – Khách sạn tổ chức tiệc cưới sang trọng",
      date: "18/05/2026",
      excerpt:
        "Khách sạn Hacinco là nơi tổ chức tiệc cưới sang trọng, có không gian ấn tượng và tràn ngập niềm vui tại Hà Nội. Khách sạn sở hữu 2 hội trường lớn...",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      title: "Khuyến mãi ngắn hạn tại khách sạn Gold",
      date: "22/05/2026",
      excerpt:
        "KHUYẾN MÃI NGẮN HẠN TẠI KHÁCH SẠN GOLD – TRẢI NGHIỆM THU VÀNG TRÊN XỨ KINH KỲ HUẾ Ưu đãi dành cho khách Việt Nam...",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=700&q=80"
    }
  ],
  overlayNewsCards: [
    {
      id: "ov-1",
      title: "Quảng cáo Resort hiệu quả",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ov-2",
      title: "Làm thế nào để bán phòng khách sạn không qua trung gian",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=75"
  ]
};

export default noiThat14DefaultData;
