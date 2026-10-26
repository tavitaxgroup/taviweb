import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ThamMyVien2Data extends ClonedTemplateBaseData {
  facilityImages: string[];
  facilityChecklist: string[];
  processSteps: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
  }>;
  galleryStrip: string[];
}

export const thamMyVien2DefaultData: ThamMyVien2Data = {
  business: {
    name: "Thẩm Mỹ Viện Elegant Beauty",
    phone: ["0903 999 888", "1900 9988"],
    email: ["tuvan@elegantbeauty.vn"],
    address: "245 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    workingHours: "08:30 - 20:30 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 8000,
    experienceYears: "15+ Năm",
    aboutTitle: "GIỚI THIỆU VỀ THẨM MỸ VIỆN HÀNG ĐẦU",
    aboutText: [
      "Chúng tôi tự hào là thẩm mỹ viện công nghệ cao hàng đầu, cam kết mang đến cho bạn sự hài lòng tuyệt đối với phác đồ trẻ hóa và kiến tạo đường nét tự nhiên chuẩn Hàn Quốc.",
      "Với đội ngũ bác sĩ chuyên khoa thẩm mỹ giàu kinh nghiệm và hệ thống máy móc đạt chứng nhận FDA Hoa Kỳ, Thẩm Mỹ Viện Elegant Beauty đồng hành cùng hàng ngàn phụ nữ Việt đánh thức vẻ đẹp rạng ngời."
    ],
    highlights: [
      "Công nghệ chuẩn FDA Hoa Kỳ",
      "Phòng dịch vụ VIP riêng tư 1:1",
      "100% dược mỹ phẩm chính hãng",
      "Bác sĩ da liễu trên 15 năm kinh nghiệm",
      "Cam kết hiệu quả bằng văn bản"
    ]
  },
  hero: {
    eyebrow: "THẨM MỸ CÔNG NGHỆ CAO CHUẨN HÀN",
    title: "BIẾN ƯỚC MƠ NHAN SẮC THÀNH HIỆN THỰC",
    subtitle:
      "Tôn vinh vẻ đẹp độc bản bằng các phác đồ thẩm mỹ nội khoa không xâm lấn, nâng cơ trẻ hóa tầng sâu và tinh chỉnh đường nét thanh tú.",
    ctaText: "KHÁM PHÁ THÊM",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  services: [
    {
      id: "tmv-s1",
      title: "Nâng cơ trẻ hóa Ultherapy",
      category: "Trẻ hóa công nghệ cao",
      description:
        "Sóng siêu âm hội tụ vi điểm tác động sâu đến lớp cân cơ SMAS 4.5mm giúp nâng cơ chảy xệ, xóa nhăn chỉ sau 60 phút.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80",
      price: "Từ 18.000.000đ"
    },
    {
      id: "tmv-s2",
      title: "Căng bóng da Meso Exosome",
      category: "Thẩm mỹ nội khoa",
      description:
        "Cấy tinh chất Exosome tinh khiết kết hợp HA phân tử nhỏ giúp tái tạo tế bào da mới, thu nhỏ lỗ chân lông và căng mướt.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
      price: "Từ 6.500.000đ"
    },
    {
      id: "tmv-s3",
      title: "Tạo hình môi & Cằm V-Line",
      category: "Tinh chỉnh đường nét",
      description:
        "Điêu khắc dáng môi cánh đào mềm mại và cằm V-Line hài hòa nhân tướng học bằng hoạt chất sinh học chuẩn Thụy Sĩ.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      price: "Từ 5.500.000đ"
    },
    {
      id: "tmv-s4",
      title: "Trị nám PicoSure Pro",
      category: "Điều trị sắc tố",
      description:
        "Xung cực ngắn Picosecond phá vỡ hắc sắc tố Melanin thành hạt siêu nhỏ mà không gây tổn thương nhiệt cho mô lành.",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d171c222?auto=format&fit=crop&w=700&q=80",
      price: "Từ 4.200.000đ"
    },
    {
      id: "tmv-s5",
      title: "Giảm béo công nghệ SculpSure",
      category: "Điêu khắc vóc dáng",
      description:
        "Hủy mỡ tầng sâu bằng bước sóng Laser 1060nm không phẫu thuật, siết gọn vòng eo 6-10cm và làm săn chắc vùng da chùng.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80",
      price: "Từ 8.900.000đ"
    },
    {
      id: "tmv-s6",
      title: "Phun xăm thẩm mỹ tự nhiên",
      category: "Phun thêu Hàn Quốc",
      description:
        "Điêu khắc chân mày Hairstroke sợi mảnh tự nhiên và phun môi Collagen hữu cơ giúp gương mặt tươi tắn không cần trang điểm.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
      price: "Từ 3.500.000đ"
    }
  ],
  facilityImages: [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80"
  ],
  facilityChecklist: [
    "Công nghệ chuẩn FDA Hoa Kỳ",
    "Phòng dịch vụ VIP riêng tư 1:1",
    "100% dược mỹ phẩm chính hãng",
    "Bác sĩ da liễu trên 15 năm kinh nghiệm",
    "Cam kết hiệu quả bằng văn bản"
  ],
  testimonials: [
    {
      id: "tmv-t1",
      author: "Phúc Phúc",
      role: "KHÁCH HÀNG VIP",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ tư vấn ban đầu rất chi tiết và tôi cảm thấy được lắng nghe, thấu hiểu rõ về tình trạng lão hóa da. Kết quả nâng cơ Ultherapy vượt xa mong đợi, đường viền hàm thon gọn ngay sau khi làm."
    },
    {
      id: "tmv-t2",
      author: "Linh Linh",
      role: "DOANH NHÂN",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Liệu trình Meso Exosome và trị nám PicoSure Pro tại Elegant Beauty giúp làn da mình sáng mịn, căng bóng như gương. Phòng VIP riêng tư, bác sĩ làm cực kỳ êm tay."
    },
    {
      id: "tmv-t3",
      author: "Trang Trang",
      role: "NGƯỜI MẪU ẢNH",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      content:
        "Mình rất ưng ý dáng môi và cằm V-Line được bác sĩ tinh chỉnh tại đây. Tự nhiên, mềm mại và hài hòa với tổng thể gương mặt mà không hề bị đơ cứng."
    }
  ],
  processSteps: [
    {
      id: "pr-1",
      number: "01",
      title: "01. Thăm khám & Soi da AI",
      description:
        "Phân tích đa tầng cấu trúc da bằng máy VISIA thế hệ mới để xác định chính xác độ tuổi sinh học và sắc tố ẩn dưới da.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pr-2",
      number: "02",
      title: "02. Phác đồ cá nhân hóa",
      description:
        "Bác sĩ chuyên khoa trực tiếp thiết kế phác đồ kết hợp đa công nghệ phù hợp riêng với cơ địa và mong muốn của từng khách hàng.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pr-3",
      number: "03",
      title: "03. Thực hiện & Chăm sóc sau liệu trình",
      description:
        "Thực hiện nhẹ nhàng trong phòng VIP vô khuẩn 1:1 và đồng hành theo dõi phục hồi định kỳ cùng chuyên viên riêng.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
    }
  ],
  stats: [
    {
      id: "tmv-st1",
      number: "326+",
      title: "Công nghệ & Giải thưởng",
      subtitle: "Chứng nhận chuyển giao độc quyền từ Hoa Kỳ & Hàn Quốc"
    },
    {
      id: "tmv-st2",
      number: "8000+",
      title: "Khách hàng lột xác thành công",
      subtitle: "Tỷ lệ hài lòng đạt 99.4% qua khảo sát thực tế"
    }
  ],
  news: [
    {
      id: "tmv-n1",
      title: "Xu hướng trẻ hóa không xâm lấn Ultherapy kết hợp Exosome năm 2025",
      date: "15 Tháng Chín 2025",
      category: "Trẻ hóa",
      excerpt:
        "Sự kết hợp kép giữa nâng cơ tầng sâu SMAS và tái tạo tế bào gốc mang lại hiệu quả trẻ ra 5-10 tuổi chỉ sau một buổi.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tmv-n2",
      title: "Bí quyết chăm sóc làn da sau liệu trình Laser PicoSure Pro giúp duy trì độ trắng sáng",
      date: "10 Tháng Chín 2025",
      category: "Chăm sóc da",
      excerpt:
        "Hướng dẫn cấp ẩm phục hồi màng bảo vệ da và chống nắng phổ rộng chuẩn y khoa từ bác sĩ da liễu Elegant Beauty.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tmv-n3",
      title: "Tại sao tinh chỉnh gương mặt tỷ lệ vàng không phẫu thuật ngày càng được ưa chuộng?",
      date: "05 Tháng Chín 2025",
      category: "Thẩm mỹ",
      excerpt:
        "Không cần nghỉ dưỡng, thấy ngay kết quả tự nhiên sau 30 phút thực hiện cùng hoạt chất sinh học cao cấp.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    }
  ],
  galleryStrip: [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512290900672-1f84d171c222?auto=format&fit=crop&w=600&q=80"
  ]
};
