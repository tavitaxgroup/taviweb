import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung13Data extends ClonedTemplateBaseData {
  overviewSpecs: Array<{
    label: string;
    value: string;
  }>;
  overviewBgImage: string;
  introImage: string;
  locationIntro: string;
  locationMapImage: string;
  locationCards: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  internalAmenitiesImage: string;
  internalAmenities: Array<{
    number: number;
    name: string;
  }>;
  externalAmenitiesImage: string;
  externalAmenities: Array<{
    number: number;
    name: string;
  }>;
  galleryCategories: string[];
  galleryItems: Array<{
    id: string;
    title: string;
    subtitle: string;
    category: string;
    image: string;
    featured?: "tall-left" | "main-center" | "thumb-center" | "tall-right";
  }>;
  advantages: Array<{
    id: string;
    icon: "award" | "map" | "price";
    title: string;
    description: string;
  }>;
  heroPins: Array<{
    id: string;
    label: string;
    top: string;
    left: string;
  }>;
}

export const xayDung13DefaultData: XayDung13Data = {
  business: {
    name: "MONA MEDIA CITI LAND",
    phone: ["076 922 0162", "0909 688 162"],
    email: ["lienhe@monacitiland.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6 (9h00 - 18h00)",
    rating: 4.9,
    reviewCount: 245,
    aboutTitle: "MONA CITI LAND",
    aboutText: [
      "Căn hộ Mona Citi Land tọa lạc tại trung tâm Khu đô thị Cát Lái, Phường Cát Lái, Quận 2 (TP. Thủ Đức), TP. Hồ Chí Minh. Tổng diện tích 152ha được quy hoạch đồng bộ và phát triển thành khu đô thị kiểu mẫu hoàn chỉnh với đầy đủ chức năng: bệnh viện quốc tế, hệ thống trường học liên cấp, trung tâm thương mại, khu vui chơi giải trí, công viên cây xanh rộng 4ha và trung tâm thể dục thể thao đa năng.",
      "Là một tuyệt phẩm kiến trúc mới tại khu đô thị Cát Lái, dự án được ví như viên ngọc sáng của khu Đông bởi sự hoàn hảo trong từng đường nét kết cấu và giải pháp thi công. Mọi cảnh quan bên trong và ngoài căn hộ, từ không gian sinh hoạt chung tới kiến trúc mặt dựng đều toát lên vẻ thời thượng, trẻ trung và bền vững của dự án."
    ]
  },
  hero: {
    eyebrow: "Dự án căn hộ & Khu đô thị kiểu mẫu",
    title: "KIẾN TRÚC KHU ĐÔ THỊ TRẺ TRUNG & HIỆN ĐẠI",
    subtitle: "Tổ hợp tháp đôi căn hộ cao cấp chuẩn xanh giữa lòng Khu đô thị Cát Lái 152ha",
    ctaText: "NHẬN BÁO GIÁ NGAY",
    ctaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  heroPins: [
    { id: "p1", label: "Tháp A - Khu căn hộ thương mại", top: "76%", left: "31%" },
    { id: "p2", label: "Công viên nội khu & Hồ bơi tràn bờ", top: "64%", left: "49%" },
    { id: "p3", label: "Trung tâm thương mại khối đế", top: "63%", left: "58%" },
    { id: "p4", label: "Quảng trường nhạc nước & Lối dạo bộ", top: "70%", left: "68%" }
  ],
  introImage:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  overviewBgImage:
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1920&q=80",
  overviewSpecs: [
    { label: "Tên dự án", value: "Mona Citi Land (CitiAlto)" },
    { label: "Chủ đầu tư", value: "Công ty TNHH Mona Media" },
    { label: "Vị trí", value: "Khu đô thị Cát Lái, Phường Cát Lái, Quận 2, TP. HCM" },
    { label: "Đơn vị tư vấn thiết kế", value: "MIA Design Studio" },
    { label: "Đơn vị thi công", value: "Tổng thầu xây dựng COSACO" },
    { label: "Tổng diện tích khu đất", value: "17.000 m²" },
    { label: "Mật độ xây dựng", value: "19%" },
    { label: "Tổng diện tích tầng hầm", value: "Full liên thông giữa 2 block" },
    { label: "Tổng số căn hộ", value: "675 căn hộ cao cấp" },
    { label: "Bàn giao dự kiến", value: "Quý 4/2026" }
  ],
  locationIntro:
    "Mona Citi Land tọa lạc ngay tâm điểm khu đô thị Cát Lái Quận 2. Chỉ cần không quá 15 phút di chuyển, cư dân có thể kết nối trực tiếp tới tất cả các tiện ích lân cận và trung tâm Quận 1. Trường học chuẩn quốc gia, bệnh viện, siêu thị, khu vui chơi giải trí, công viên 4ha kế bên... giúp bạn hiện thực hóa ước mơ sở hữu một tổ ấm ngay trung tâm thành phố, nơi an cư và đầu tư lý tưởng.",
  locationMapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  locationCards: [
    {
      id: "loc-1",
      title: "TRUNG TÂM QUẬN 1",
      description:
        "Từ CitiAlto chỉ 15 phút kết nối trực tiếp với trung tâm Quận 1 thông qua đại lộ Mai Chí Thọ và hầm Thủ Thiêm."
    },
    {
      id: "loc-2",
      title: "CÁC TIỆN ÍCH LÂN CẬN",
      description:
        "Chỉ chưa tới 1 phút chạy xe cư dân CitiAlto có thể tiếp cận cụm tiện ích khu đô thị Cát Lái: hệ thống giáo dục từ mầm non tới đại học, khu thể thao, khu mua sắm..."
    },
    {
      id: "loc-3",
      title: "CÁC TIỆN ÍCH QUẬN 2",
      description:
        "Chưa đến 8 phút khách hàng thuận tiện tới các tiện ích hiện hữu của Quận 2 – Trung tâm hành chính quận, Parkson Cantavil, Vincom Mega Mall Thảo Điền..."
    },
    {
      id: "loc-4",
      title: "PHÚ MỸ HƯNG",
      description:
        "Từ dự án liên kết nhanh chóng tới trung tâm khu đô thị Nam Sài Gòn – Phú Mỹ Hưng chỉ mất chưa tới 10 phút chạy xe qua cầu Phú Mỹ."
    }
  ],
  internalAmenitiesImage:
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
  internalAmenities: [
    { number: 1, name: "Công viên trung tâm" },
    { number: 7, name: "Sân bóng rổ tiêu chuẩn" },
    { number: 2, name: "Sân cầu lông ngoài trời" },
    { number: 8, name: "Lối đi bộ sinh thái" },
    { number: 3, name: "Vườn nướng BBQ" },
    { number: 9, name: "Sân cát vận động" },
    { number: 4, name: "Khu vui chơi trẻ em" },
    { number: 10, name: "Hồ bơi tràn bờ resort" },
    { number: 5, name: "Ghế nghỉ thư giãn" },
    { number: 11, name: "Sảnh đón sang trọng" },
    { number: 6, name: "Trung tâm thương mại" },
    { number: 12, name: "Hầm giữ xe thông minh" }
  ],
  externalAmenitiesImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  externalAmenities: [
    { number: 1, name: "Trung tâm thương mại" },
    { number: 7, name: "Bệnh viện đa khoa quốc tế" },
    { number: 2, name: "THPT Cát Lái" },
    { number: 8, name: "Trường Mẫu giáo Sơn Ca" },
    { number: 3, name: "Tiểu học Mỹ Thủy" },
    { number: 9, name: "THCS Cát Lái" },
    { number: 4, name: "Tòa án nhân dân cấp cao" },
    { number: 10, name: "Sân vận động thể thao" },
    { number: 5, name: "Cơ quan hành chính Quận" },
    { number: 11, name: "Câu lạc bộ văn hóa" },
    { number: 6, name: "Đại học Quản lý & Công nghệ (UMT)" },
    { number: 12, name: "Bưu điện trung tâm" }
  ],
  galleryCategories: ["CĂN HỘ", "MẶT BẰNG", "TIỆN ÍCH KHÁC"],
  galleryItems: [
    {
      id: "gal-1",
      title: "Phòng tắm",
      subtitle: "Căn hộ Mona Citi Land",
      category: "CĂN HỘ",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
      featured: "tall-left"
    },
    {
      id: "gal-2",
      title: "Phòng khách",
      subtitle: "Căn hộ Mona Citi Land",
      category: "CĂN HỘ",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      featured: "main-center"
    },
    {
      id: "gal-3",
      title: "Không gian sinh hoạt chung",
      subtitle: "Căn hộ Mona Citi Land",
      category: "CĂN HỘ",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
      featured: "thumb-center"
    },
    {
      id: "gal-4",
      title: "Bàn ăn & Bếp mở",
      subtitle: "Căn hộ Mona Citi Land",
      category: "MẶT BẰNG",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=700&q=80",
      featured: "thumb-center"
    },
    {
      id: "gal-5",
      title: "Phòng ngủ Master",
      subtitle: "Căn hộ Mona Citi Land",
      category: "TIỆN ÍCH KHÁC",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80",
      featured: "thumb-center"
    },
    {
      id: "gal-6",
      title: "Nhà bếp",
      subtitle: "Căn hộ Mona Citi Land",
      category: "CĂN HỘ",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
      featured: "tall-right"
    }
  ],
  advantages: [
    {
      id: "adv-1",
      icon: "award",
      title: "Chủ đầu tư uy tín",
      description:
        "Với uy tín và tâm huyết nhiều năm trên thị trường xây dựng và bất động sản, chủ đầu tư đã kiến tạo thương hiệu được khách hàng và đối tác đánh giá cao cùng nhiều giải thưởng quốc tế danh giá về phát triển đô thị bền vững."
    },
    {
      id: "adv-2",
      icon: "map",
      title: "Vị Trí Đẹp",
      description:
        "Mona Citi Land là một trong những dự án căn hộ hiếm hoi hiện nay tọa lạc ngay trung tâm Khu đô thị Cát Lái – một trong những khu đô thị quy hoạch bài bản và hoàn chỉnh bậc nhất tại khu Đông Sài Gòn."
    },
    {
      id: "adv-3",
      icon: "price",
      title: "Giá Bán Cạnh Tranh",
      description:
        "Sở hữu ưu thế vượt trội về vị trí, kết cấu xây dựng và hệ sinh thái tiện ích nhưng dự án lại có mức giá rất cạnh tranh cùng chính sách thanh toán linh hoạt, phù hợp với đông đảo gia đình trẻ và nhà đầu tư."
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Mona Media Công Bố Mở Bán Căn Hộ Citi Land Quận 2",
      date: "15/10/2026",
      category: "Sự kiện dự án",
      excerpt:
        "Lễ giới thiệu dự án Mona Citi Land tại Trung tâm Hội nghị Gem Center chính thức đón nhận hơn 1.200 khách hàng quan tâm...",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Giai Điệu Cuộc Sống Diệu Kỳ Tại Khu Đô Thị Mona Citi Land",
      date: "12/10/2026",
      category: "Không gian sống",
      excerpt:
        "Không khó để hiểu lý do vì sao dù chỉ mới ra mắt thị trường khu Đông nhưng dự án đã thu hút đông đảo gia đình tri thức trẻ...",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "Ngôi Nhà Dành Cho Người Trẻ Thành Đạt Và Bản Lĩnh",
      date: "08/10/2026",
      category: "Kiến trúc đô thị",
      excerpt:
        "Mona Citi Land – Ngôi nhà chuẩn mực của những cư dân trẻ thành đạt với thiết kế thông tầng đón nắng gió tự nhiên...",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-4",
      title: "Cơ Hội Sở Hữu Căn Hộ Cao Cấp Quận 2 Cho Gia Đình Trẻ",
      date: "02/10/2026",
      category: "Chính sách",
      excerpt:
        "Sở hữu căn hộ thiết kế hiện đại tại trung tâm Quận 2 với tiến độ thanh toán chuẩn chỉ từ 1%/tháng cùng ngân hàng bảo lãnh...",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export const defaultData = xayDung13DefaultData;
export default xayDung13DefaultData;
