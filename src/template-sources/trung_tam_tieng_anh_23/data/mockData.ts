import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TravelVnPackage {
  id: string;
  title: string;
  oldPrice?: string;
  price: string;
  duration: string;
  category: "summer-camp" | "cultural" | "study-tour";
  saleBadge?: boolean;
  excerpt: string;
  image: string;
}

export interface TrungTamTiengAnh23Data extends ClonedTemplateBaseData {
  mustVisitDestinations: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  tourPackages: TravelVnPackage[];
  culturalSpecialties: Array<{
    id: string;
    name: string;
    image: string;
  }>;
  promoBanner: {
    eyebrow: string;
    title: string;
    priceInfo: string;
    backgroundImage: string;
  };
  checkerboardArticles: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
  }>;
  newsletterBg: string;
}

export const trungTamTiengAnh23DefaultData: TrungTamTiengAnh23Data = {
  business: {
    name: "Học Viện Trại Hè Quốc Tế & Du Học Trải Nghiệm TravelVN Edu",
    phone: ["0126 922 0162", "076 922 0162"],
    email: ["demonhunter@gmail.com", "edu@travelvn.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 920,
    aboutTitle: "ĐIỂM ĐẾN TRẠI HÈ ANH NGỮ & GIAO LƯU VĂN HÓA KHÔNG THỂ BỎ QUA",
    aboutText: [
      "TravelVN Edu kết hợp chương trình đào tạo ngoại ngữ thực tế với các hành trình trại hè di sản miền Trung, Hội An – Đà Nẵng và giao lưu văn hóa quốc tế giúp học viên tự tin sử dụng tiếng Anh trong đời sống."
    ],
    highlights: [
      "Hơn 50 lộ trình Trại hè Anh ngữ & Khám phá Di sản UNESCO",
      "100% hướng dẫn viên và mentor tiếng Anh đồng hành xuyên suốt",
      "Trải nghiệm văn hóa, ẩm thực bản địa và kỹ năng thuyết trình thực tế"
    ]
  },
  hero: {
    eyebrow: "TRẠI HÈ ANH NGỮ & VĂN HÓA DI SẢN",
    title: "“Lạc lối” xứ sở đèn lồng phố cổ Hội An",
    subtitle: "Giảm giá 30% cho học viên đăng ký sớm chương trình Trại hè & Study Tour",
    description:
      "Hành trình 7 ngày thực hành giao tiếp tiếng Anh với du khách quốc tế, làm lồng đèn truyền thống và khám phá văn hóa phố Hội.",
    ctaText: "TÌM KIẾM LỘ TRÌNH",
    ctaLink: "#packages",
    backgroundImage:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1920&q=85"
  },
  mustVisitDestinations: [
    {
      id: "dst-1",
      title: "Thánh địa Mỹ Sơn – Hành trình Khảo cổ Song ngữ",
      subtitle: "Tìm hiểu lịch sử Chăm Pa bằng tiếng Anh",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dst-2",
      title: "Tổ hợp Sáng tạo & Giao lưu Quốc tế Cocobay",
      subtitle: "Không gian hoạt động nhóm & Team Building",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dst-3",
      title: "Trại hè Kỹ năng Biển Mỹ Khê – Cù Lao Chàm",
      subtitle: "Sinh thái học biển & Thuyết trình môi trường",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    }
  ],
  tourPackages: [
    {
      id: "pkg-1",
      title: "Trại hè Anh ngữ Phố đèn lồng Hội An",
      oldPrice: "7,500,000 ₫",
      price: "6,800,000 ₫",
      duration: "5 ngày 4 đêm",
      category: "summer-camp",
      saleBadge: true,
      excerpt:
        "“Thiên đường văn hóa” Hội An là lớp học mở tuyệt vời để học viên luyện phỏng vấn tiếng Anh cùng du khách quốc tế và trải nghiệm làng nghề.",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pkg-2",
      title: "Study Tour Thượng ngoạn Bà Nà Hills & Châu Âu Thu Nhỏ",
      oldPrice: "70,000,000 ₫",
      price: "59,000,000 ₫",
      duration: "7 ngày 6 đêm",
      category: "study-tour",
      saleBadge: true,
      excerpt:
        "Trại hè cao cấp kết hợp học tiếng Anh giao tiếp, khám phá kiến trúc Pháp cổ trên đỉnh Bà Nà và rèn luyện kỹ năng lãnh đạo trẻ.",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pkg-3",
      title: "Nhiếp ảnh & Thuyết trình Song ngữ Cầu Tình Yêu Đà Nẵng",
      oldPrice: "5,200,000 ₫",
      price: "4,500,000 ₫",
      duration: "4 ngày 3 đêm",
      category: "cultural",
      saleBadge: true,
      excerpt:
        "Khóa ngoại khóa ngắn hạn giúp học viên thực hiện dự án Vlog du lịch bằng tiếng Anh dọc bờ sông Hàn và bán đảo Sơn Trà.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pkg-4",
      title: "Hành trình Di sản Cố đô Huế – Hội An – Đà Nẵng",
      oldPrice: "8,900,000 ₫",
      price: "7,400,000 ₫",
      duration: "6 ngày 5 đêm",
      category: "cultural",
      saleBadge: true,
      excerpt:
        "Khám phá Đại Nội Huế, lăng tẩm triều Nguyễn và luyện dịch thuật thuật ngữ lịch sử - văn hóa Việt Nam sang tiếng Anh.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
    }
  ],
  culturalSpecialties: [
    {
      id: "sp-1",
      name: "Mì Quảng ếch truyền thống",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-2",
      name: "Bún mắm nêm Đà Thành",
      image:
        "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-3",
      name: "Bánh xèo tôm nhảy giòn rụm",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-4",
      name: "Các loại bánh cung đình Huế",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-5",
      name: "Cua rang me biển Mỹ Khê",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-6",
      name: "Cơm gà Tam Kỳ phố cổ",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
    }
  ],
  promoBanner: {
    eyebrow: "KHUYẾN MÃI MÙA LỄ HỘI",
    title: "Tour thưởng ngoạn & Trại hè Đà Nẵng – Hội An",
    priceInfo: "19 TRIỆU / 2 HỌC VIÊN / 7 ĐÊM",
    backgroundImage:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1920&q=80"
  },
  checkerboardArticles: [
    {
      id: "cb-1",
      title: "10 điểm du lịch & học tập trải nghiệm hấp dẫn nhất",
      excerpt:
        "Tọa lạc trên cung đường di sản miền Trung với những bãi biển trong xanh quanh năm, chương trình ngoại khóa mang đến môi trường giao tiếp tiếng Anh tự nhiên...",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cb-2",
      title: "Bí quyết tự tin bắt chuyện với du khách nước ngoài tại Hội An",
      excerpt:
        "Với phương pháp học qua dự án thực tế, học viên được hướng dẫn bộ mẫu câu phỏng vấn văn hóa và thuyết trình lịch sử đầy cuốn hút...",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cb-3",
      title: "Cẩm nang chuẩn bị hành trang cho Trại hè Quốc tế 7 ngày",
      excerpt:
        "Danh sách vật dụng cá nhân, sổ tay từ vựng chủ đề du lịch - ẩm thực và kỹ năng làm việc nhóm giúp học viên tận hưởng trọn vẹn chuyến đi...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  newsletterBg:
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80"
};
