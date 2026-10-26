import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ThamMyVien3Data extends ClonedTemplateBaseData {
  heroMechanism: {
    scriptTitle: string;
    mainTitle: string;
    subTitle: string;
    highlights: Array<{ bold: string; rest: string }>;
    advantagesTitle: string;
    advantages: string[];
    techTitle: string;
    techPoints: string[];
    modelImage: string;
  };
  featuredVideo: {
    title: string;
    subtitle: string;
    thumbnail: string;
    duration: string;
  };
  techLogos: Array<{
    id: string;
    name: string;
    tagline?: string;
    style: "aqua-pill" | "blue-tech" | "navy-badge" | "berry-dots" | "red-dot" | "minimal-dark";
  }>;
  infoBoxes: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: "card" | "clock" | "phone";
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const thamMyVien3DefaultData: ThamMyVien3Data = {
  business: {
    name: "Orient Skincare",
    phone: ["0126 922 0162", "1900 636 648"],
    email: ["tuvan@orientskincare.vn", "info@orientskincare.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ nhật / 9:00 - 21:00",
    rating: 5.0,
    reviewCount: 4280,
    experienceYears: "12+ Năm",
    aboutTitle: "VIỆN ĐIỀU TRỊ & TRẺ HÓA DA ORIENT SKINCARE",
    aboutText: [
      "Orient Skincare tự hào là viện điều trị da liễu và trẻ hóa công nghệ cao hàng đầu, kết hợp phác đồ y khoa chuẩn quốc tế cùng liệu pháp thư giãn Á Đông chuyên sâu.",
      "Chúng tôi cam kết mang đến cho bạn sự tự tin bền vững theo thời gian thông qua đội ngũ Thạc sĩ - Bác sĩ Chuyên khoa II trực tiếp thăm khám 1:1 và hệ thống thiết bị chính hãng FDA Hoa Kỳ."
    ],
    highlights: [
      "Thăm khám 1:1 cùng Bác sĩ Chuyên khoa Da liễu",
      "Công nghệ Hydralift, Fotona & Fraxel chuẩn FDA",
      "Không đau - Không đỏ - Không cần nghỉ dưỡng",
      "Thẻ thành viên ưu đãi giảm 20% phí dịch vụ"
    ]
  },
  hero: {
    eyebrow: "Hydralift Skin",
    title: "TĂNG SINH COLLAGEN",
    subtitle: "PHỤC HỒI DA & DƯỠNG ẨM TỐI ƯU",
    description:
      "Liệu pháp thủy phân đa tầng kết hợp sóng siêu âm hội tụ giúp thanh lọc độc tố, kích thích sản sinh sợi Collagen tự nhiên và khóa ẩm sâu từ bên trong.",
    ctaText: "ĐẶT LỊCH SOI DA MIỄN PHÍ",
    ctaLink: "#dat-lich-tu-van",
    secondaryCtaText: "XEM BẢNG GIÁ DỊCH VỤ",
    secondaryCtaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1512290900672-1f84d171c222?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1512290900672-1f84d171c222?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  heroMechanism: {
    scriptTitle: "Hydralift Skin",
    mainTitle: "TĂNG SINH COLLAGEN",
    subTitle: "PHỤC HỒI DA & DƯỠNG ẨM TỐI ƯU",
    highlights: [
      { bold: "Loại bỏ", rest: "tế bào chết và bã nhờn tích tụ sâu" },
      { bold: "Kích thích", rest: "tăng sinh collagen & elastin nội sinh" },
      { bold: "Dưỡng ẩm", rest: "da căng bóng đa tầng từ bên trong" }
    ],
    advantagesTitle: "Ưu điểm",
    advantages: [
      "Không đau rát",
      "Không ửng đỏ",
      "Không xâm lấn",
      "Không cần nghỉ dưỡng"
    ],
    techTitle: "Công nghệ tiên tiến",
    techPoints: [
      "Cung cấp oxy tươi tinh khiết",
      "Làm sạch sâu lỗ chân lông",
      "Săn chắc cơ mặt chảy xệ",
      "Thẩm thấu Hyaluronic Acid"
    ],
    modelImage:
      "https://images.unsplash.com/photo-1512290900672-1f84d171c222?auto=format&fit=crop&w=1200&q=85"
  },
  services: [
    {
      id: "os-s1",
      title: "TẨY DA CHẾT TOÀN THÂN",
      category: "Thanh lọc cơ thể",
      description:
        "Hầu hết mọi người đều nhớ đến các bước chăm sóc da mặt cơ bản nhưng lại quên thanh lọc tế bào sừng toàn thân bằng muối khoáng biển Chết và tinh dầu hoa hồng.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      price: "650.000đ / buổi"
    },
    {
      id: "os-s2",
      title: "MASSAGE CHÂN THƯ GIÃN",
      category: "Trị liệu huyệt đạo",
      description:
        "Bàn chân là cơ quan nhỏ bé so với toàn bộ cơ thể, tuy nhiên lại tập trung hơn 60 huyệt đạo quan trọng giúp đả thông kinh lạc và cải thiện giấc ngủ sâu.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      price: "450.000đ / buổi"
    },
    {
      id: "os-s3",
      title: "MASSAGE TOÀN THÂN",
      category: "Thư giãn đá nóng",
      description:
        "Massage đem lại niềm vui và nhiều lợi ích cho sức khỏe của bạn. Khi cơ bắp bị căng cứng, liệu pháp đá nóng núi lửa kết hợp tinh dầu thảo mộc giúp phục hồi năng lượng tức thì.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      price: "790.000đ / buổi"
    },
    {
      id: "os-s4",
      title: "THANH LỌC DA LIGHT EMITTING DIODE",
      category: "Ánh sáng sinh học",
      description:
        "Mỗi ngày da phải tiếp xúc với rất nhiều tác hại như ánh nắng mặt trời, bụi mịn PM2.5. Công nghệ ánh sáng sinh học LED đa bước sóng giúp dịu da và tiêu viêm nhân mụn.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      price: "950.000đ / buổi"
    },
    {
      id: "os-s5",
      title: "MẶT NẠ DƯỠNG DA THẢO DƯỢC",
      category: "Cấp ẩm chuyên sâu",
      description:
        "Mặt nạ bùn khoáng tảo biển có tác dụng làm thông thoáng và tuần hoàn vi mạch máu dưới da, giúp da săn chắc, thu nhỏ lỗ chân lông và sáng hồng tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      price: "550.000đ / buổi"
    },
    {
      id: "os-s6",
      title: "CHĂM SÓC DA CƠ BẢN PHONO",
      category: "Điện di tinh chất",
      description:
        "Chăm sóc da theo phương pháp Phono: Kỹ thuật này dựa trên cơ chế chuyển ion bằng sóng siêu âm đưa Hyaluronic Acid và Vitamin C thẩm thấu sâu gấp 20 lần.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      price: "850.000đ / buổi"
    }
  ],
  team: [
    {
      id: "doc-1",
      name: "ThS. Bác Sĩ Hồ Xuân Vương",
      position: "Giám đốc Chuyên môn Da liễu - Hơn 15 năm kinh nghiệm điều trị sắc tố & trẻ hóa Laser",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "doc-2",
      name: "Bác Sĩ CK II Trần Công Tính",
      position: "Trưởng khoa Thẩm mỹ Nội khoa - Chuyên gia phác đồ Hydralift, Ultherapy & Fotona 4D",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80"
    }
  ],
  featuredVideo: {
    title: "Cận cảnh quy trình trẻ hóa & cấp ẩm tầng sâu Hydralift Skin chuẩn Y khoa",
    subtitle: "Trải nghiệm thực tế 60 phút lấy lại làn da căng bóng ngậm nước tại phòng điều trị VIP Orient Skincare",
    thumbnail:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    duration: "03:45"
  },
  news: [
    {
      id: "os-n1",
      title: "TRỌN BỘ CÁCH LÀM SÁNG DA TỰ NHIÊN TẠI NHÀ CHUẨN BÁC SĨ DA LIỄU",
      date: "18/09/2025",
      category: "Cẩm nang dưỡng sáng",
      excerpt:
        "Bí quyết kết hợp hoạt chất dưỡng trắng an toàn cùng thói quen chống nắng phổ rộng giúp nâng tông da khỏe mạnh mà không gây bào mòn.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "os-n2",
      title: "CÁCH TRỊ TÀN NHANG NHANH CHÓNG VÀ NGĂN NGỪA TÁI PHÁT HIỆU QUẢ",
      date: "12/09/2025",
      category: "Điều trị sắc tố",
      excerpt:
        "Phân biệt đốm nâu, tàn nhang di truyền và nám chân sâu để lựa chọn bước sóng Laser Fotona hay Fraxel tối ưu nhất.",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d171c222?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "os-n3",
      title: "BẬT MÍ CÁCH XÓA XĂM AN TOÀN KHÔNG ĐỂ LẠI SẸO BẰNG LASER XUNG NGẮN",
      date: "06/09/2025",
      category: "Công nghệ cao",
      excerpt:
        "Công nghệ quang cơ học phá vỡ hạt mực xăm thành phân tử siêu vi để hệ bạch huyết đào thải tự nhiên, bảo toàn tuyệt đối mô da lành.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "os-n4",
      title: "TẠI SAO BẠN LẠI THẤT BẠI TRONG VIỆC TRỊ MỤN DÙ ĐÃ DÙNG NHIỀU MỸ PHẨM?",
      date: "01/09/2025",
      category: "Bác sĩ giải đáp",
      excerpt:
        "5 sai lầm phổ biến khiến hàng rào bảo vệ da suy yếu và phác đồ lấy nhân mụn chuẩn y khoa kết hợp ánh sáng sinh học LED.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80"
    }
  ],
  techLogos: [
    {
      id: "tech-1",
      name: "OxyGeneo™",
      tagline: "TECHNOLOGY",
      style: "aqua-pill"
    },
    {
      id: "tech-2",
      name: "eMatrix™",
      tagline: "Sublative Rejuvenation",
      style: "blue-tech"
    },
    {
      id: "tech-3",
      name: "Lumenis®",
      tagline: "Energy to Healthcare",
      style: "navy-badge"
    },
    {
      id: "tech-4",
      name: "fraxel®",
      tagline: "Fractional Laser",
      style: "berry-dots"
    },
    {
      id: "tech-5",
      name: "Fotona®",
      tagline: "choose perfection",
      style: "red-dot"
    },
    {
      id: "tech-6",
      name: "elōs™",
      tagline: "Electro-Optical Synergy",
      style: "minimal-dark"
    }
  ],
  testimonials: [
    {
      id: "os-t1",
      author: "Mie Nguyễn",
      role: "Chuyên viên Truyền thông • Quận 3, TP.HCM",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Gần đây Mie đi làm nhiều, trang điểm và ra nắng khiến da nhìn mệt mỏi và sạm đi trông thấy... Đã vậy còn có mấy cái mụn do thời tiết Sài Gòn nóng nực nữa. Nhờ mấy hôm trước đi Orient chăm sóc cho da thường xuyên hơn thì hôm nay da đẹp lên trông thấy. Làn da đẹp nhìn khuôn mặt cũng rạng rỡ hơn hẳn. Cám ơn Orient."
    },
    {
      id: "os-t2",
      author: "Thanh Trúc",
      role: "Giám đốc Kinh doanh • Quận 1, TP.HCM",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Liệu trình Hydralift Skin tại Orient thực sự khác biệt hoàn toàn so với các spa mình từng đi. Bác sĩ Hồ Xuân Vương soi da rất kỹ, làm xong da căng bóng ẩm mượt ngay tức thì mà không hề châm chích hay ửng đỏ."
    },
    {
      id: "os-t3",
      author: "Hoàng Yến",
      role: "MC & Người mẫu ảnh • Quận 7, TP.HCM",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      content:
        "Mình đăng ký Thẻ Thành Viên của Orient được giảm 20% mọi dịch vụ. Thích nhất là liệu trình Thanh lọc da LED kết hợp đắp mặt nạ thảo dược, mỗi cuối tuần ghé đây vừa trị liệu da vừa thư giãn tuyệt đối."
    }
  ],
  infoBoxes: [
    {
      id: "ib-1",
      title: "THẺ THÀNH VIÊN",
      subtitle: "Giảm 20% phí dịch vụ",
      icon: "card"
    },
    {
      id: "ib-2",
      title: "THỜI GIAN MỞ CỬA",
      subtitle: "Thứ 2 - Chủ nhật / 9:00 - 21:00",
      icon: "clock"
    },
    {
      id: "ib-3",
      title: "HOTLINE",
      subtitle: "0126 922 0162",
      icon: "phone"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Liệu trình Hydralift Skin có cần nghỉ dưỡng hay kiêng trang điểm không?",
      answer:
        "Hoàn toàn không. Công nghệ Hydralift Skin sử dụng áp lực dòng nước xoáy kết hợp điện di tinh chất không xâm lấn, không gây bong tróc hay ửng đỏ. Bạn có thể trang điểm và sinh hoạt bình thường ngay sau khi rời phòng điều trị."
    },
    {
      id: "faq-2",
      question: "Da nhạy cảm hoặc đang có mụn viêm có thực hiện được không?",
      answer:
        "Có. Trước khi thực hiện, Bác sĩ Chuyên khoa Da liễu sẽ trực tiếp soi da để điều chỉnh nồng độ dưỡng chất và kết hợp ánh sáng sinh học LED giúp làm dịu da, kháng viêm và phục hồi màng ẩm tự nhiên."
    },
    {
      id: "faq-3",
      question: "Quyền lợi của Thẻ Thành Viên Orient Skincare gồm những gì?",
      answer:
        "Khách hàng sở hữu Thẻ Thành Viên được giảm trực tiếp 20% trên toàn bộ bảng giá dịch vụ chăm sóc & điều trị da, miễn phí soi da định kỳ hàng tháng cùng Bác sĩ và nhận quà tặng dược mỹ phẩm nhân dịp sinh nhật."
    }
  ]
};
