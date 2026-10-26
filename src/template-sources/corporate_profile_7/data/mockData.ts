import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile7Listing {
  id: string;
  title: string;
  address: string;
  typeBadge: string;
  statusBadge: "Đang bán" | "Cho thuê";
  bedrooms: number;
  bathrooms: number;
  area: string;
  price: string;
  date: string;
  image: string;
  isPopular?: boolean;
}

export interface CorporateProfile7CategoryCard {
  id: string;
  name: string;
  countLabel: string;
  image: string;
  wide?: boolean;
}

export interface CorporateProfile7VisionCard {
  id: string;
  title: string;
  description: string;
}

export interface CorporateProfile7TemplateData extends ClonedTemplateBaseData {
  listings: CorporateProfile7Listing[];
  categoryBento: CorporateProfile7CategoryCard[];
  visionCards: CorporateProfile7VisionCard[];
}

export const corporateProfile7DefaultData: CorporateProfile7TemplateData = {
  business: {
    name: "PrimeLuxe",
    logo: "",
    phone: ["0909 313 728", "028 3811 9988"],
    email: ["info@primeluxe.vn", "sales@primeluxe.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.95,
    reviewCount: 520,
    experienceYears: "15+",
    aboutTitle: "CHÀO MỪNG ĐẾN VỚI PRIMELUXE",
    aboutText: [
      "Với sứ mệnh kết nối chủ đầu tư và khách hàng thượng lưu, PrimeLuxe cung cấp nền tảng giao dịch và phát triển bất động sản đáng tin cậy để bạn dễ dàng tìm kiếm, thẩm định và sở hữu bất động sản một cách thông minh.",
      "Thế mạnh về đội ngũ chuyên gia giàu kinh nghiệm trên 15 năm cùng hơn 500 bất động sản hạng sang đã giao dịch thành công trên toàn quốc."
    ]
  },
  hero: {
    eyebrow: "Khám phá căn hộ mơ ước của bạn",
    title: "Tìm ngôi nhà lý tưởng của bạn",
    subtitle:
      "Khám phá cơ hội đầu tư bất động sản hấp dẫn và tìm kiếm ngôi nhà hoàn hảo ngay hôm nay để bắt đầu cuộc sống mới của bạn",
    ctaText: "Liên hệ tư vấn",
    ctaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85"
  },
  listings: [
    {
      id: "lst-1",
      title: "Nhà mặt phố Tôn Đức Thắng",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      typeBadge: "Nhà phố",
      statusBadge: "Đang bán",
      bedrooms: 8,
      bathrooms: 6,
      area: "340 m²",
      price: "15,000,000,000 ₫",
      date: "16/08/2026",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: "lst-2",
      title: "Nhà mặt phố Quận 2",
      address: "Khu Đô Thị Sala, TP. Thủ Đức, TP.HCM",
      typeBadge: "Nhà phố",
      statusBadge: "Đang bán",
      bedrooms: 9,
      bathrooms: 6,
      area: "450 m²",
      price: "25,400,000,000 ₫",
      date: "16/08/2026",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: "lst-3",
      title: "Biệt thự Premier Luxury Kiểu Pháp",
      address: "Khu Thảo Điền, TP. Thủ Đức, TP.HCM",
      typeBadge: "Biệt thự hiện đại",
      statusBadge: "Đang bán",
      bedrooms: 5,
      bathrooms: 5,
      area: "320 m²",
      price: "25,480,000,000 ₫",
      date: "16/08/2026",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: "lst-4",
      title: "Cho thuê căn hộ The Art",
      address: "523A Đỗ Xuân Hợp, TP. Thủ Đức, TP.HCM",
      typeBadge: "Căn hộ",
      statusBadge: "Cho thuê",
      bedrooms: 4,
      bathrooms: 2,
      area: "140 m²",
      price: "35,000,000 ₫/tháng",
      date: "16/08/2026",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: "lst-5",
      title: "Căn hộ cao cấp gần Hồ Tây",
      address: "Đường Xuân Diệu, Quận Tây Hồ, Hà Nội",
      typeBadge: "Căn hộ",
      statusBadge: "Đang bán",
      bedrooms: 5,
      bathrooms: 3,
      area: "220 m²",
      price: "37,500,000,000 ₫",
      date: "16/08/2026",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: "lst-6",
      title: "Biệt thự sân vườn gần sân bay",
      address: "Khu Biệt Thự Hồng Hà, Quận Tân Bình, TP.HCM",
      typeBadge: "Biệt thự hiện đại",
      statusBadge: "Đang bán",
      bedrooms: 6,
      bathrooms: 5,
      area: "500 m²",
      price: "70,000,000,000 ₫",
      date: "16/08/2026",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      isPopular: true
    }
  ],
  categoryBento: [
    {
      id: "cat-1",
      name: "Nhà vườn",
      countLabel: "12 Dự án",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      wide: true
    },
    {
      id: "cat-2",
      name: "Chung cư",
      countLabel: "14 Dự án",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-3",
      name: "Nhà phố",
      countLabel: "15 Dự án",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-4",
      name: "Căn hộ",
      countLabel: "16 Dự án",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-5",
      name: "Biệt thự hiện đại",
      countLabel: "14 Dự án",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-6",
      name: "Shophouse",
      countLabel: "10 Dự án",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      wide: true
    }
  ],
  visionCards: [
    {
      id: "vis-1",
      title: "Tầm nhìn",
      description:
        "PrimeLuxe quyết tâm vươn mình trở thành tập đoàn tư vấn mua, bán và đầu tư bất động sản hạng sang uy tín hàng đầu tại Việt Nam."
    },
    {
      id: "vis-2",
      title: "Sứ mệnh",
      description:
        "Sứ mệnh “Bất động sản thật – Giá trị thật” với quy trình pháp lý minh bạch và giải pháp thanh khoản bất động sản nhanh chóng trong 30 ngày."
    },
    {
      id: "vis-3",
      title: "Giá trị cốt lõi",
      description:
        "Thế mạnh về đội ngũ chuyên gia thẩm định trên 15 năm kinh nghiệm cùng hơn 500 bất động sản cao cấp đã bàn giao thành công."
    }
  ],
  stats: [
    { id: "st-1", number: "15+", title: "Năm kinh nghiệm" },
    { id: "st-2", number: "530+", title: "Dự án đã bán" },
    { id: "st-3", number: "190+", title: "Bất động sản cho thuê" },
    { id: "st-4", number: "28+", title: "Giải thưởng dự án" }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "An An",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi rất hài lòng với dịch vụ của PrimeLuxe. Tôi đã tìm thấy căn nhà mơ ước của mình trong thời gian ngắn nhờ vào sự hỗ trợ chuyên nghiệp của đội ngũ tư vấn. Cảm ơn bạn rất nhiều!”"
    },
    {
      id: "rv-2",
      author: "Lê Hào",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi rất hài lòng với dịch vụ của PrimeLuxe. Tôi đã tìm thấy căn biệt thự mơ ước của mình trong thời gian ngắn nhờ vào sự hỗ trợ chuyên nghiệp của đội ngũ tư vấn. Cảm ơn bạn rất nhiều!”"
    },
    {
      id: "rv-3",
      author: "Bạch Ngân",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi rất hài lòng với dịch vụ của PrimeLuxe. Tôi đã tìm thấy căn hộ cao cấp mơ ước của mình trong thời gian ngắn nhờ vào sự hỗ trợ chuyên nghiệp của đội ngũ tư vấn. Cảm ơn bạn rất nhiều!”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Chi phí hoàn thiện nội thất căn hộ cao cấp năm 2026 là bao nhiêu?",
      date: "31/03/2026",
      category: "CẨM NANG BĐS",
      excerpt:
        "Phân tích chi tiết bảng dự toán hoàn thiện nội thất căn hộ từ 2 đến 4 phòng ngủ giúp nhà đầu tư tối ưu dòng vốn.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-2",
      title: "6 Bí quyết nâng cấp không gian căn hộ giúp tăng giá trị cho thuê 30%",
      date: "31/03/2026",
      category: "ĐẦU TƯ CHO THUÊ",
      excerpt:
        "Những cải tạo thông minh về ánh sáng, ban công và phòng bếp giúp thu hút khách thuê chuyên gia nước ngoài.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-3",
      title: "Cẩm nang toàn diện về pháp lý khi Mua, Bán và Cho thuê Bất động sản",
      date: "31/03/2026",
      category: "PHÁP LÝ NHÀ ĐẤT",
      excerpt:
        "Cập nhật các quy định mới nhất của Luật Kinh doanh Bất động sản bảo vệ quyền lợi người mua nhà và nhà đầu tư.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default corporateProfile7DefaultData;
