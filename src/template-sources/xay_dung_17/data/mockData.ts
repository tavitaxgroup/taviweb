import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung17RoomCard {
  id: string;
  title: string;
  adults: number;
  area: string;
  description: string;
  price: string;
  image: string;
}

export interface XayDung17NumberedService {
  id: string;
  number: string;
  title: string;
  description: string;
  iconType: "pool" | "spa" | "conference" | "restaurant";
}

export interface XayDung17Data extends ClonedTemplateBaseData {
  amenityStrip: Array<{
    id: string;
    label: string;
    iconType: "shuttle" | "spa" | "wifi" | "gym" | "dining" | "pool";
  }>;
  aboutCircleSection: {
    eyebrow: string;
    title: string;
    description: string;
    mainCircleImage: string;
    topLeftThumb: string;
    bottomRightThumb: string;
    checkmarks: string[];
  };
  hotelRooms: XayDung17RoomCard[];
  numberedServices: XayDung17NumberedService[];
  bentoGallery: string[];
  videoBannerImage: string;
  footerGalleryStrip: string[];
}

export const xayDung17DefaultData: XayDung17Data = {
  business: {
    name: "Golden Hotel",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@goldenhotel.vn", "duan@goldencons.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Phục vụ 24/7 (Lễ tân & Ban Quản Lý Dự Án)",
    rating: 5.0,
    reviewCount: 480,
    experienceYears: "15+",
    aboutTitle: "CHÀO MỪNG ĐẾN VỚI ĐIỂM DỪNG CHÂN LÝ TƯỞNG GOLDEN HOTEL",
    aboutText: [
      "Chào mừng bạn đến với Golden Hotel – điểm dừng chân lý tưởng và kiệt tác kiến trúc nghỉ dưỡng cho mọi chuyến du lịch của bạn. Với không gian ấm áp, dịch vụ chuyên nghiệp và vị trí thuận lợi, cam kết mang đến cho bạn trải nghiệm không gian nghỉ dưỡng tuyệt vời.",
      "Được thiết kế và thi công bởi đội ngũ kiến trúc sư Golden Cons, tổ hợp khách sạn 5 sao kết hợp hài hòa giữa phong cách tân cổ điển châu Âu và cảnh quan nhiệt đới xanh mát."
    ],
    highlights: [
      "Trải nghiệm sang trọng",
      "Dịch vụ chuyên nghiệp",
      "An ninh an toàn",
      "Tiện nghi đa dạng"
    ]
  },
  hero: {
    eyebrow: "KIẾN TRÚC KHÁCH SẠN & NGHỈ DƯỠNG 5 SAO",
    title: "Nghỉ dưỡng đẳng cấp\nvới Golden Hotel",
    subtitle:
      "Đắm chìm trong sự thư giãn và làm mới bản thân tại tổ hợp khách sạn & Spa của chúng tôi.",
    ctaText: "Khám phá",
    ctaLink: "#phong-khach-san",
    secondaryCtaText: "Đặt lịch",
    secondaryCtaLink: "#tim-kiem",
    backgroundImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  amenityStrip: [
    { id: "am-1", label: "Đưa đón", iconType: "shuttle" },
    { id: "am-2", label: "SPA", iconType: "spa" },
    { id: "am-3", label: "Wifi miễn phí", iconType: "wifi" },
    { id: "am-4", label: "GYM", iconType: "gym" },
    { id: "am-5", label: "Nhà hàng", iconType: "dining" },
    { id: "am-6", label: "Bể bơi", iconType: "pool" }
  ],
  aboutCircleSection: {
    eyebrow: "Đẳng cấp và sang trọng",
    title: "CHÀO MỪNG ĐẾN VỚI ĐIỂM DỪNG CHÂN LÝ TƯỞNG GOLDEN HOTEL",
    description:
      "Chào mừng bạn đến với Golden Hotel – điểm dừng chân lý tưởng cho mọi chuyến du lịch của bạn. Với không gian ấm áp, dịch vụ chuyên nghiệp và vị trí thuận lợi, cam kết mang đến cho bạn trải nghiệm không gian nghỉ dưỡng tuyệt vời.",
    mainCircleImage:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=85",
    topLeftThumb:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80",
    bottomRightThumb:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80",
    checkmarks: [
      "Trải nghiệm sang trọng",
      "Dịch vụ chuyên nghiệp",
      "An ninh an toàn",
      "Tiện nghi đa dạng"
    ]
  },
  hotelRooms: [
    {
      id: "rm-1",
      title: "Phòng Superior",
      adults: 4,
      area: "60 m²",
      description:
        "Tất cả phòng nghỉ đều có cửa sổ kính lớn giúp bạn tận hưởng trọn vẹn tầm nhìn thoáng đãng và ánh sáng tự nhiên.",
      price: "570,000₫",
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-2",
      title: "Phòng Standard",
      adults: 2,
      area: "40 m²",
      description:
        "Thiết kế nội thất hiện đại, trang nhã với ban công hướng vườn nhiệt đới và đầy đủ tiện nghi chuẩn 5 sao.",
      price: "650,000₫",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-3",
      title: "Phòng President Suite",
      adults: 3,
      area: "50 m²",
      description:
        "Không gian nghỉ dưỡng thượng lưu với trần gỗ nghệ thuật, phòng khách riêng biệt và bồn tắm cẩm thạch.",
      price: "590,000₫",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-4",
      title: "Phòng Premium River Deluxe",
      adults: 2,
      area: "40 m²",
      description:
        "Tầm nhìn panorama hướng sông thơ mộng về đêm, mang đến khoảnh khắc thư thái tuyệt đối cho kỳ nghỉ.",
      price: "490,000₫",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-5",
      title: "Phòng Premium City Deluxe",
      adults: 2,
      area: "20 m²",
      description:
        "Kiến trúc vòm gỗ ấm cúng kết hợp nội thất cao cấp, lý tưởng cho các cặp đôi và doanh nhân công tác.",
      price: "670,000₫",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-6",
      title: "Phòng Luxury",
      adults: 3,
      area: "50 m²",
      description:
        "Tuyệt tác kiến trúc tân cổ điển với đèn chùm pha lê, giường King-size êm ái và dịch vụ quản gia riêng.",
      price: "690,000₫",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80"
    }
  ],
  numberedServices: [
    {
      id: "ns-1",
      number: "03",
      title: "Bể bơi ngoài trời",
      description:
        "Thư giãn và tận hưởng không gian xanh mát tại hồ bơi ngoài trời tiện nghi.",
      iconType: "pool"
    },
    {
      id: "ns-2",
      number: "04",
      title: "SPA & Wellness",
      description:
        "Cung cấp các liệu pháp spa chất lượng cao và chăm sóc sức khỏe toàn diện.",
      iconType: "spa"
    },
    {
      id: "ns-3",
      number: "05",
      title: "Phòng Hội Nghị",
      description:
        "Không gian chu đáo, tiện nghi và lý tưởng cho các sự kiện quy mô nhỏ đến lớn.",
      iconType: "conference"
    },
    {
      id: "ns-4",
      number: "01",
      title: "Nhà hàng 5 sao",
      description:
        "Thưởng thức ẩm thực tinh tế và đa dạng tại nhà hàng sang trọng của chúng tôi.",
      iconType: "restaurant"
    }
  ],
  bentoGallery: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
  ],
  videoBannerImage:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=85",
  testimonials: [
    {
      id: "tes-1",
      author: "Bạch Ngân",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
      content:
        "Trải nghiệm tuyệt vời! Phòng sạch sẽ, nhân viên thân thiện và dịch vụ chuyên nghiệp. Chắc chắn sẽ quay lại lần nữa!"
    },
    {
      id: "tes-2",
      author: "Lệ Hảo",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
      content:
        "Trải nghiệm tuyệt vời! Phòng sạch sẽ, nhân viên thân thiện và dịch vụ chuyên nghiệp. Chắc chắn sẽ quay lại lần nữa!"
    },
    {
      id: "tes-3",
      author: "An An",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80",
      content:
        "Trải nghiệm tuyệt vời! Phòng sạch sẽ, nhân viên thân thiện và dịch vụ chuyên nghiệp. Chắc chắn sẽ quay lại lần nữa!"
    },
    {
      id: "tes-4",
      author: "Linh Linh",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=250&q=80",
      content:
        "Trải nghiệm tuyệt vời! Phòng sạch sẽ, nhân viên thân thiện và dịch vụ chuyên nghiệp. Chắc chắn sẽ quay lại lần nữa!"
    }
  ],
  news: [
    {
      id: "gn-1",
      title: "Xu Hướng Thiết Kế Kiến Trúc Tổ Hợp Khách Sạn & Resort Xanh 2026",
      date: "19/07/2025",
      category: "Kiến trúc",
      excerpt:
        "Khám phá giải pháp quy hoạch không gian mở, kết hợp vật liệu gỗ tự nhiên và năng lượng tái tạo tại các khu nghỉ dưỡng...",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gn-2",
      title: "Bí Quyết Quản Lý Vận Hành & Tối Ưu Công Suất Phòng Khách Sạn 5 Sao",
      date: "31/07/2025",
      category: "Quản trị",
      excerpt:
        "Tiêu chuẩn dịch vụ cá nhân hóa và quy trình bảo trì kỹ thuật toàn diện giúp nâng cao sự hài lòng của du khách quốc tế...",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gn-3",
      title: "Trải Nghiệm Kỳ Nghỉ Thượng Lưu Bên Bờ Biển Cùng Gia Đình",
      date: "31/07/2025",
      category: "Nghỉ dưỡng",
      excerpt:
        "Tận hưởng trọn vẹn kỳ nghỉ cuối tuần với chuỗi tiện ích bể bơi vô cực, spa trị liệu và ẩm thực Á - Âu tinh tế...",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGalleryStrip: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80"
  ]
};
