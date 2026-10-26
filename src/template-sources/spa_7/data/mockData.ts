import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa7ReasonItem {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  iconType: "expertise" | "tech" | "diverse" | "safety" | "space" | "value";
}

export interface Spa7CommitmentNode {
  id: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export interface Spa7EventItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Spa7Data extends ClonedTemplateBaseData {
  aboutCollage: {
    badgeYears: string;
    badgeLabel: string;
    customerCountText: string;
    images: string[];
    valuePoints: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  reasonsToChoose: Spa7ReasonItem[];
  commitments: {
    centerDoctorImage: string;
    nodes: Spa7CommitmentNode[];
  };
  bookingConsultantImage: string;
  relatedEvents: Spa7EventItem[];
  partnerBrands: Array<{ id: string; name: string; sub: string }>;
}

export const spa7DefaultData: Spa7Data = {
  business: {
    name: "TRUNG TÂM THẨM MỸ MONA",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["Info@Themona.Global", "tuvan@blissbeauty.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:30 - 20:30",
    rating: 5.0,
    reviewCount: 20000,
    experienceYears: "10",
    aboutTitle: "TRUNG TÂM THẨM MỸ MONA",
    aboutText: [
      "Với hơn 10 năm kinh nghiệm trong lĩnh vực thẩm mỹ, chúng tôi tự hào là một địa chỉ uy tín và đáng tin cậy cho những ai muốn tìm kiếm sự hoàn thiện và cải thiện vẻ đẹp của bản thân.",
      "Với sự kết hợp của kỹ thuật chuyên nghiệp và các sản phẩm chất lượng cao, chúng tôi cam kết mang đến cho bạn những trải nghiệm thẩm mỹ vượt trội, giúp bạn tự tin và rạng rỡ hơn bao giờ hết."
    ],
    highlights: [
      "Công nghệ trẻ hóa da Thermage FLX & Ultherapy chuẩn FDA",
      "Đội ngũ 80+ bác sĩ chuyên khoa Da liễu & Thẩm mỹ nội khoa",
      "Không gian trị liệu chuẩn 5 sao riêng tư, vô khuẩn",
      "Cam kết hiệu quả bằng văn bản và bảo hành chu đáo"
    ]
  },
  hero: {
    eyebrow: "PHỤC VỤ TẬN TÂM",
    title: "Diện mạo như ý\nkhông lo chi phí",
    subtitle:
      "Cung cấp những phương pháp thẩm mỹ hàng đầu. Kết hợp công nghệ tiên tiến và tư vấn chuyên nghiệp. Đội ngũ bác sĩ và chuyên gia thẩm mỹ hàng đầu. Tự tin tạo nét đẹp tự nhiên và tươi trẻ.",
    ctaText: "KHÁM PHÁ",
    ctaLink: "#dich-vu",
    secondaryCtaText: "Xem Video",
    secondaryCtaLink: "#gioi-thieu",
    backgroundImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  aboutCollage: {
    badgeYears: "10",
    badgeLabel: "Năm kinh nghiệm\nchuyên ngành",
    customerCountText: "20k Khách hàng",
    images: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
    ],
    valuePoints: [
      {
        id: "vp-1",
        title: "Đánh giá tích cực từ khách hàng",
        description:
          "Chúng tôi tự hào khi nhận được nhiều đánh giá tích cực từ khách hàng đã sử dụng dịch vụ của chúng tôi."
      },
      {
        id: "vp-2",
        title: "Tư vấn chuyên nghiệp",
        description:
          "Đội ngũ tư vấn của chúng tôi luôn sẵn sàng lắng nghe và tư vấn khách hàng một cách chuyên nghiệp và tận tâm."
      }
    ]
  },
  services: [
    {
      id: "srv-1",
      title: "Trẻ Hóa Da Đa Tầng",
      category: "Nâng Cơ",
      description:
        "Tái tạo cấu trúc sợi collagen tự thân bằng sóng siêu âm hội tụ vi điểm giúp xóa nhăn và nâng cơ tức thì.",
      price: "3.500.000đ",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "Thon Gọn Cơ Thể",
      category: "Hút Mỡ",
      description:
        "Công nghệ hủy mỡ tầng sâu không xâm lấn giúp kiến tạo vòng eo thon gọn và săn chắc đường nét cơ thể.",
      price: "4.800.000đ",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "Điều Trị Sắc Tố Laser",
      category: "Trị Nám",
      description:
        "Phác đồ Laser Pico chuẩn y khoa đánh bật chân nám sâu, tàn nhang và phục hồi làn da trắng hồng.",
      price: "2.900.000đ",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
    }
  ],
  reasonsToChoose: [
    {
      id: "rs-1",
      title: "Kinh nghiệm chuyên môn",
      description:
        "Thẩm mỹ viện của chúng tôi có đội ngũ chuyên gia giàu kinh nghiệm và được đào tạo chuyên sâu trong lĩnh vực thẩm mỹ.",
      iconType: "expertise"
    },
    {
      id: "rs-2",
      title: "Công nghệ tiên tiến",
      description:
        "Từ các thiết bị hiện đại đến các phương pháp mới nhất, chúng tôi cam kết mang đến những trải nghiệm tốt nhất và kết quả đáng mong đợi cho khách hàng.",
      featured: true,
      iconType: "tech"
    },
    {
      id: "rs-3",
      title: "Dịch vụ đa dạng",
      description:
        "Chúng tôi cung cấp một loạt các dịch vụ thẩm mỹ đa dạng, bao gồm chăm sóc da, điều trị nám, trẻ hóa da, thon gọn cơ thể, phẫu thuật thẩm mỹ và nhiều hơn nữa.",
      iconType: "diverse"
    },
    {
      id: "rs-4",
      title: "Chuẩn mực an toàn",
      description:
        "Luôn tuân thủ nghiêm ngặt các quy trình vệ sinh và an toàn để đảm bảo môi trường làm việc và các dịch vụ đạt chuẩn cao nhất.",
      iconType: "safety"
    },
    {
      id: "rs-5",
      title: "Không gian thoải mái",
      description:
        "Thẩm mỹ viện của chúng tôi được thiết kế để mang lại không gian thoải mái và tiện nghi cho khách hàng.",
      iconType: "space"
    },
    {
      id: "rs-6",
      title: "Giá trị hiệu quả",
      description:
        "Chúng tôi cam kết mang đến giá trị và hiệu quả cho khách hàng. Chất lượng dịch vụ và kết quả cuối cùng là ưu tiên hàng đầu của chúng tôi.",
      iconType: "value"
    }
  ],
  commitments: {
    centerDoctorImage:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
    nodes: [
      {
        id: "cm-1",
        title: "Chất lượng dịch vụ",
        description:
          "Chúng tôi cam kết mang đến dịch vụ chất lượng cao, đáp ứng đúng nhu cầu và mong muốn của khách hàng.",
        side: "left"
      },
      {
        id: "cm-2",
        title: "Tư vấn chuyên nghiệp",
        description:
          "Chúng tôi cam kết cung cấp tư vấn chuyên nghiệp, tận tâm và khách quan đến từ đội ngũ chuyên viên và bác sĩ.",
        side: "left"
      },
      {
        id: "cm-3",
        title: "Hậu đãi chu đáo",
        description:
          "Chúng tôi sẽ tiếp tục tư vấn, kiểm tra và hỗ trợ khách hàng trong quá trình phục hồi và duy trì kết quả làm đẹp lâu dài.",
        side: "left"
      },
      {
        id: "cm-4",
        title: "An toàn sức khỏe",
        description:
          "Chúng tôi sử dụng các thiết bị và công nghệ tiên tiến nhất để đảm bảo quá trình làm đẹp an toàn và hiệu quả.",
        side: "right"
      },
      {
        id: "cm-5",
        title: "Bảo mật thông tin",
        description:
          "Mọi thông tin khách hàng cung cấp sẽ được bảo mật tuyệt đối và chỉ sử dụng cho mục đích thẩm mỹ.",
        side: "right"
      },
      {
        id: "cm-6",
        title: "Đội ngũ chuyên nghiệp",
        description:
          "Đội ngũ chuyên gia có trình độ chuyên môn cao và kinh nghiệm trong lĩnh vực thẩm mỹ.",
        side: "right"
      }
    ]
  },
  stats: [
    { id: "st-1", number: "15K+", title: "Khách hàng hài lòng" },
    { id: "st-2", number: "15K+", title: "Phẫu thuật thành công" },
    { id: "st-3", number: "80+", title: "Bác sĩ chuyên môn" },
    { id: "st-4", number: "155+", title: "Thiết bị tiên tiến" }
  ],
  bookingConsultantImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
  news: [
    {
      id: "nw-1",
      title: "Những Điều Cần Biết Khi Lựa Chọn Liệu Trình Trẻ Hóa Da Công Nghệ Cao",
      date: "01/07/2025",
      category: "monamedia",
      excerpt:
        "Thay đổi diện mạo làn da cùng đội ngũ chuyên gia da liễu hàng đầu. Phác đồ cá nhân hóa giúp tái sinh làn da căng bóng...",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nw-2",
      title: "Bí Quyết Tối Ưu Hóa Quy Trình Chăm Sóc Da Ban Đêm Cho Phụ Nữ Hiện Đại",
      date: "01/07/2025",
      category: "monamedia",
      excerpt:
        "Kết hợp tinh chất phục hồi chuyên sâu và thói quen sinh hoạt khoa học giúp làn da luôn tươi trẻ rạng ngời...",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Cân Bằng Thân - Tâm - Trí: Liệu Pháp Thư Giãn Toàn Diện Tại Thẩm Mỹ Viện",
      date: "01/07/2025",
      category: "monamedia",
      excerpt:
        "Không gian trị liệu hương thảo mộc kết hợp massage đả thông kinh lạc mang lại nguồn năng lượng tích cực...",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Xu Hướng Thẩm Mỹ Nội Khoa Không Xâm Lấn Được Ưa Chuộng Nhất 2026",
      date: "01/07/2025",
      category: "monamedia",
      excerpt:
        "Làm đẹp an toàn không cần nghỉ dưỡng với công nghệ nâng cơ vi điểm và cấy tinh chất căng bóng chuẩn Hàn...",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80"
    }
  ],
  relatedEvents: [
    {
      id: "ev-1",
      date: "01/07/2025",
      title: "Hội Thảo Chuyên Đề: Công Nghệ Trẻ Hóa Da Đa Tầng Thế Hệ Mới",
      excerpt:
        "Cập nhật giải pháp thẩm mỹ tiên tiến nhất cùng đội ngũ bác sĩ chuyên khoa giàu kinh nghiệm và nhận quà tặng hấp dẫn.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ev-2",
      date: "01/07/2025",
      title: "Ngày Hội Soi Da AI 3D & Tư Vấn Phác Đồ Trị Nám Miễn Phí",
      excerpt:
        "Trải nghiệm máy phân tích da đa phổ hiện đại giúp phát hiện chính xác sắc tố ẩn dưới da và thiết kế liệu trình riêng.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ev-3",
      date: "01/07/2025",
      title: "Tuần Lễ Tri Ân Khách Hàng VIP: Ưu Đãi Tới 50% Dịch Vụ Thon Gọn",
      excerpt:
        "Tận hưởng đặc quyền làm đẹp chuẩn 5 sao với chi phí tiết kiệm nhất dành riêng cho hội viên thân thiết của trung tâm.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
    }
  ],
  partnerBrands: [
    { id: "pb-1", name: "ONIC TEXT", sub: "SWISS DERMA" },
    { id: "pb-2", name: "SCIENCE HERB", sub: "BIO LABS" },
    { id: "pb-3", name: "OXY GA", sub: "MEDICAL SPA" },
    { id: "pb-4", name: "SCIENCE HERB", sub: "CLINICAL" },
    { id: "pb-5", name: "ONIC TEXT", sub: "AESTHETIC" },
    { id: "pb-6", name: "OXY GA", sub: "PURE SKIN" },
    { id: "pb-7", name: "SCIENCE HERB", sub: "ORGANIC" }
  ]
};
