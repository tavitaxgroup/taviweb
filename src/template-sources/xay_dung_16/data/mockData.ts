import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung16Pillar {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface XayDung16RoomItem {
  id: string;
  title: string;
  category: string;
  bedType: string;
  price: string;
  area: string;
  capacity: string;
  image: string;
  description: string;
}

export interface XayDung16NewsItem {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
}

export interface XayDung16Data extends ClonedTemplateBaseData {
  brandSubline: string;
  pillars: XayDung16Pillar[];
  rooms: XayDung16RoomItem[];
  aboutBannerBg: string;
  aboutInspiration: string;
  aboutQuote: string;
  hotelNews: XayDung16NewsItem[];
  galleryMainImage: string;
  galleryRightImages: string[];
  galleryBottomImages: string[];
  awardsNote: string;
  recentLinks: string[];
}

export const xayDung16DefaultData: XayDung16Data = {
  business: {
    name: "HOTEL MONA",
    phone: ["0126 922 0162", "0909 922 162"],
    email: ["booking@hotelmona.vn"],
    address: "319 C16 Lý Thường Kiệt, Q.11, TP.HCM",
    workingHours: "Phục vụ 24/7",
    rating: 5.0,
    reviewCount: 520,
    aboutTitle: "VÀI ĐIỀU VỀ MONA",
    aboutText: [
      "Được xây dựng và đưa vào hoạt động với hệ thống phòng ốc mới mẻ, kết cấu kiến trúc hiện đại và tiện nghi chuẩn 5 sao sẵn sàng phục vụ cho quý khách 24/7. Giá phòng và dịch vụ tại khách sạn MONA vừa tầm với tất cả mọi du khách."
    ]
  },
  brandSubline: "LUXURY HOTEL VIETNAM",
  hero: {
    eyebrow: "KIẾN TRÚC NGHỈ DƯỠNG & KHÁCH SẠN 5 SAO",
    title: "Thưởng Thức Bữa Tối Tuyệt Vời",
    subtitle: "Ẩm thực & không gian kiến trúc mang đậm phong cách Châu Âu",
    ctaText: "TÌM KIẾM",
    ctaLink: "#phong-khach-san",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  pillars: [
    {
      id: "pil-1",
      title: "HOÀN HẢO ĐỂ THƯ GIÃN",
      description:
        "Sự lựa chọn hoàn hảo cho quý khách yêu thích thiên nhiên và luôn mơ ước được tận hưởng một kỳ nghỉ sang trọng đẳng cấp.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pil-2",
      title: "PHÒNG SANG TRỌNG",
      description:
        "Thiết kế nội thất tinh tế kết hợp vật liệu gỗ tự nhiên và đá cẩm thạch mang lại không gian nghỉ dưỡng ấm cúng, riêng tư tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pil-3",
      title: "ẨM THỰC TINH TÚY",
      description:
        "Không gian nhà hàng Fine Dining sang trọng hội tụ tinh hoa ẩm thực Á – Âu được chế biến bởi đội ngũ bếp trưởng danh tiếng.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    }
  ],
  rooms: [
    {
      id: "rm-1",
      title: "STANDARD ROOM – ONE KING BED",
      category: "Phòng Tiêu Chuẩn",
      bedType: "Giường Đôi Lớn (King)",
      price: "1,000,000 ₫",
      area: "38 m²",
      capacity: "2 Người lớn",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      description:
        "Phòng Standard sở hữu ban công thoáng đãng hướng biển và hồ bơi, trang bị giường King size êm ái cùng phòng tắm vách kính hiện đại."
    },
    {
      id: "rm-2",
      title: "SUPERIOR ROOM – TWO DOUBLE BEDS",
      category: "Phòng Cao Cấp",
      bedType: "Hai Giường Đôi",
      price: "800,000 ₫",
      area: "45 m²",
      capacity: "4 Người lớn",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      description:
        "Phòng Superior thiết kế rộng rãi với 2 giường đôi lớn, khu vực tiếp khách riêng biệt và hệ thống ánh sáng ấm áp chuẩn Boutique 5 sao."
    },
    {
      id: "rm-3",
      title: "JUNIOR SUITE – ONE SINGLE BED",
      category: "Phòng Suite Hạng Sang",
      bedType: "Giường Hoàng Gia",
      price: "850,000 ₫",
      area: "52 m²",
      capacity: "2 Người lớn",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      description:
        "Junior Suite nằm trên tầng cao với cửa kính Panorama toàn cảnh thành phố và vịnh biển, tích hợp bồn tắm nằm thư giãn cao cấp."
    }
  ],
  aboutBannerBg:
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80",
  aboutInspiration: "Cảm hứng có thể được tìm thấy ở khắp mọi nơi",
  aboutQuote:
    "Được xây dựng và đưa vào hoạt động đầu năm 2016, với hệ thống phòng ốc mới mẻ, hiện đại và tiện nghi sẵn sàng phục vụ cho quý khách 24/7. Giá phòng tại khách sạn MONA vừa tầm với tất cả mọi du khách",
  hotelNews: [
    {
      id: "hn-1",
      day: "07",
      month: "Th12",
      title: "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
      excerpt:
        "1. Bán đảo Sơn Trà và chuỗi resort nghỉ dưỡng ven biển với những bãi cát trắng mịn trong xanh quanh năm..."
    },
    {
      id: "hn-2",
      day: "06",
      month: "Th12",
      title: "Du lịch Vũng Tàu: Cẩm nang từ A đến Z",
      excerpt:
        "Tổng quan du lịch Vũng Tàu cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 2 tiếng lái xe cao tốc với..."
    },
    {
      id: "hn-3",
      day: "06",
      month: "Th12",
      title: "Du lịch Phú Quốc: Cẩm nang từ A đến Z",
      excerpt:
        "Tổng quan du lịch Phú Quốc là quần đảo ngọc xinh đẹp nằm sâu trong vùng vịnh Thái Lan, thuộc tỉnh Kiên Giang..."
    }
  ],
  galleryMainImage:
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80",
  galleryRightImages: [
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=80"
  ],
  galleryBottomImages: [
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
  ],
  testimonials: [
    {
      id: "t-1",
      author: "Anh Tâm",
      role: "Phòng Luxury (LXR)",
      rating: 5,
      content:
        "Có không gian riêng, thoải mái, có ban công nhìn ra bờ sông hoặc thành phố. Nhân viên phục vụ thân thiện. Vị trí rất thuận tiện cho việc di chuyển đến các địa điểm du lịch khác."
    },
    {
      id: "t-2",
      author: "Chị Minh Khuê",
      role: "Phòng Junior Suite",
      rating: 5,
      content:
        "Kiến trúc khách sạn vô cùng sang trọng, hồ bơi vô cực và khu vực nhà hàng Âu buổi tối lãng mạn. Gia đình tôi chắc chắn sẽ quay lại trong kỳ nghỉ tới."
    }
  ],
  recentLinks: [
    "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
    "Du lịch Đà Lạt : Cẩm nang từ A - Z",
    "Du lịch Phú Quốc : Thiên đường trên mặt đất"
  ],
  awardsNote:
    "Giải thưởng Hotel Master Award trao giải cho các doanh nghiệp với thành tích xuất sắc cùng nhiều đóng góp tích cực cho ngành kiến trúc khách sạn & du lịch Việt Nam."
};

export const defaultData = xayDung16DefaultData;
export default xayDung16DefaultData;
