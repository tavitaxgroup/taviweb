import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung19RoomSuite {
  id: string;
  title: string;
  priceText: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface XayDung19ServiceCard {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface XayDung19AwardItem {
  id: string;
  topText: string;
  mainTitle: string;
  subText: string;
}

export interface XayDung19TemplateData extends ClonedTemplateBaseData {
  welcomeWatermark: string;
  welcomeHeading: string;
  welcomeLinkText: string;
  welcomeImages: string[];
  roomSuites: XayDung19RoomSuite[];
  serviceCards: XayDung19ServiceCard[];
  awards: XayDung19AwardItem[];
  discountBanner: {
    watermark: string;
    title: string;
    ctaText: string;
    backgroundImage: string;
  };
}

export const xayDung19DefaultData: XayDung19TemplateData = {
  business: {
    name: "MONA LUX",
    logo: "",
    phone: ["076 922 0162", "0909 686 888"],
    email: ["info@monalux.vn", "lienhe@monalux.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Phục vụ 24/7 (Lễ tân & Tư vấn dự án)",
    rating: 5.0,
    reviewCount: 333,
    experienceYears: "15+",
    aboutTitle: "KHÁCH SẠN TUYỆT VỜI Ở TRUNG TÂM THÀNH PHỐ.",
    aboutText: [
      "Khách sạn MONA LUX là tổ hợp kiến trúc khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Quý khách chỉ mất 35 phút lái xe từ khách sạn tới sân bay Tân Sơn Nhất, 8 phút để tới khu trung tâm thương mại và giải trí của thành phố. Với 333 phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác."
    ],
    highlights: [
      "Tổ hợp 333 phòng & suite tiêu chuẩn 5 sao quốc tế",
      "Kiến trúc nội thất đương đại kết hợp nghệ thuật trưng bày",
      "Tiện ích đặc quyền: Spa Salon, Hồ bơi vô cực, Nhà hàng Fine Dining",
      "Tọa lạc ngay giao điểm trung tâm thương mại Sài Gòn"
    ]
  },
  hero: {
    eyebrow: "BỘ SƯU TẬP KHÁCH SẠN THƯỢNG LƯU",
    title: "Đặt phòng trong tích tắc",
    subtitle:
      "Trải nghiệm tuyệt tác kiến trúc nghỉ dưỡng và không gian nội thất 5 sao tinh tế bậc nhất ngay giữa trung tâm thành phố.",
    ctaText: "TÌM HIỂU THÊM",
    ctaLink: "#loai-phong",
    secondaryCtaText: "ĐẶT NGAY",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  welcomeWatermark: "Welcome",
  welcomeHeading: "KHÁCH SẠN TUYỆT VỜI Ở TRUNG TÂM THÀNH PHỐ.",
  welcomeLinkText: "Xem dịch vụ của chúng tôi",
  welcomeImages: [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  ],
  roomSuites: [
    {
      id: "suite-1",
      title: "LUXURY SINGLE ROOM ART SUITE",
      priceText: "1.900.000 ₫",
      subtitle: "Căn phòng chất lượng với tầm nhìn toàn cảnh thành phố & biển",
      description:
        "Luxury Art Suite sở hữu giường đôi cỡ lớn êm ái, khu vực tiếp khách sang trọng, bàn làm việc tiêu chuẩn doanh nhân và phòng tắm đá cẩm thạch riêng biệt với vòi sen tắm đứng và bồn tắm nằm thư giãn cùng bảng màu trung tính đương đại.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "suite-2",
      title: "ROYAL EXECUTIVE PANORAMA SUITE",
      priceText: "3.200.000 ₫",
      subtitle: "Không gian thông tầng sang trọng dành cho thượng khách",
      description:
        "Thiết kế mặt dựng kính chạm sàn 180 độ kết hợp sàn gỗ óc chó tự nhiên, đèn chùm pha lê thủ công và hệ thống điều khiển ánh sáng thông minh chuẩn khách sạn 5 sao.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "suite-3",
      title: "PRESIDENTIAL PENTHOUSE VILLA",
      priceText: "6.500.000 ₫",
      subtitle: "Đỉnh cao kiến trúc thượng lưu với hồ bơi riêng trên cao",
      description:
        "Sở hữu diện tích 240 m² gồm 2 phòng ngủ Master, phòng ăn riêng biệt, quầy bar rượu vang và sân hiên ngắm cảnh hoàng hôn tuyệt mỹ.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "suite-4",
      title: "DELUXE HERITAGE DOUBLE STUDIO",
      priceText: "1.450.000 ₫",
      subtitle: "Giao thoa kiến trúc Đông Dương và tiện nghi hiện đại",
      description:
        "Không gian ấm cúng với vật liệu gỗ tự nhiên, gạch bông nghệ thuật và ban công thoáng đãng nhìn ra khu vườn nhiệt đới.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85"
    }
  ],
  serviceCards: [
    {
      id: "srv-1",
      title: "SPA SALON",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
      description: "Liệu trình trị liệu thảo dược và chăm sóc sắc đẹp 5 sao"
    },
    {
      id: "srv-2",
      title: "HỒ BƠI",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80",
      description: "Hồ bơi vô cực nước ấm bốn mùa với quầy bar nổi"
    },
    {
      id: "srv-3",
      title: "NHÀ HÀNG",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
      description: "Ẩm thực Á - Âu thượng hạng từ bếp trưởng Michelin"
    },
    {
      id: "srv-4",
      title: "VUI CHƠI",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
      description: "Trung tâm Fitness, Yoga và tổ hợp giải trí thể thao"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Chị Ngân",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Không gian kiến trúc và nội thất tại MONA LUX thực sự tinh tế đến từng đường nét. Từ sảnh đón tiếp ngập tràn ánh sáng đến căn phòng Art Suite yên tĩnh đều mang lại cảm giác thư thái trọn vẹn như một tác phẩm nghệ thuật."
    }
  ],
  awards: [
    {
      id: "aw-1",
      topText: "World Boutique",
      mainTitle: "HOTEL AWARDS",
      subText: "LUXURY ARCHITECTURE"
    },
    {
      id: "aw-2",
      topText: "2025",
      mainTitle: "TRAVELLERS' CHOICE",
      subText: "TRIPADVISOR AWARD"
    },
    {
      id: "aw-3",
      topText: "WORLD LUXURY",
      mainTitle: "SPA AWARDS",
      subText: "WINNER"
    },
    {
      id: "aw-4",
      topText: "EUROPEAN",
      mainTitle: "HOTEL DESIGN",
      subText: "AWARDS"
    }
  ],
  discountBanner: {
    watermark: "Discount",
    title: "TẬN DỤNG ƯU ĐÃI ĐẶC BIỆT THEO MÙA CỦA CHÚNG TÔI.",
    ctaText: "Nhận ngay Ưu đãi",
    backgroundImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=85"
  }
};

export default xayDung19DefaultData;
