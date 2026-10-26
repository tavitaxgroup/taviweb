import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DichVuVeSinh2AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface DichVuVeSinh2Data extends ClonedTemplateBaseData {
  aboutCollage: {
    badgeNumber: string;
    badgeLabel: string;
    images: string[];
    pillars: Array<{ title: string; icon: "shield" | "award" }>;
    checklist: Array<{ label: string; desc: string }>;
  };
  whyChooseCards: Array<{
    id: string;
    title: string;
    description: string;
    icon: "shield" | "sparkles" | "spray" | "factory" | "sofa" | "building";
  }>;
  featuredServices: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  dedicationSection: {
    title: string;
    description: string;
    specialistImage: string;
    accordions: DichVuVeSinh2AccordionItem[];
  };
  featuredArticle: {
    id: string;
    title: string;
    date: string;
    comments: string;
    excerpt: string;
    image: string;
  };
}

export const dichVuVeSinh2DefaultData: DichVuVeSinh2Data = {
  business: {
    name: "CleanGlow Dịch Vụ Vệ Sinh",
    phone: ["(+84) 0313-728-397", "0909 397 728"],
    email: ["info@themona.global", "cskh@cleanglow.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 1050,
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "CleanGlow là đơn vị cung cấp dịch vụ vệ sinh công nghiệp và dân dụng chuyên nghiệp hàng đầu. Chúng tôi đã đồng hành cùng hơn 1.000 hộ gia đình, tòa nhà văn phòng và nhà xưởng cải thiện môi trường sống và làm việc xanh - sạch - an toàn, góp phần nâng cao chất lượng cuộc sống và hiệu suất lao động."
    ],
    highlights: [
      "Hóa chất sinh học đạt chuẩn an toàn sức khỏe Bộ Y Tế",
      "Máy chà sàn, hút bụi công nghiệp & thiết bị đu dây đạt chuẩn quốc tế",
      "Nghiệm thu hài lòng 100% mới thanh toán chi phí dịch vụ"
    ]
  },
  hero: {
    eyebrow: "DỊCH VỤ UY TÍN - CHẤT LƯỢNG HÀNG ĐẦU",
    subtitle: "CHUYÊN GIA VỆ SINH CÔNG NGHIỆP & DÂN DỤNG",
    title: "Giải Pháp Vệ Sinh Toàn Diện",
    description:
      "Mang lại không gian sống và làm việc trong lành với đội ngũ nhân sự lành nghề, trang thiết bị hiện đại và quy trình làm sạch chuẩn 5S Nhật Bản.",
    ctaText: "KHÁM PHÁ",
    ctaLink: "#services",
    secondaryCtaText: "NHẬN BÁO GIÁ",
    secondaryCtaLink: "#contact",
    backgroundImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=85"
  },
  aboutCollage: {
    badgeNumber: "1000+",
    badgeLabel: "Khách hàng được phục vụ",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80"
    ],
    pillars: [
      { title: "Cung cấp các giải pháp vệ sinh", icon: "shield" },
      { title: "Châm ngôn là tận tâm uy tín", icon: "award" }
    ],
    checklist: [
      {
        label: "Vệ sinh gia đình:",
        desc: "Mang đến không gian sống sạch sẽ và trong lành."
      },
      {
        label: "Vệ sinh công nghiệp:",
        desc: "Đảm bảo nhà xưởng và văn phòng luôn gọn gàng, sạch sẽ."
      },
      {
        label: "Khử trùng chuyên nghiệp:",
        desc: "Diệt khuẩn và khử mùi an toàn, hiệu quả."
      }
    ]
  },
  whyChooseCards: [
    {
      id: "why-1",
      title: "Dịch Vụ Vệ Sinh Gia Đình",
      description:
        "Chăm sóc căn hộ, biệt thự và không gian sinh hoạt luôn sạch sẽ, an toàn và tuân thủ các tiêu chuẩn vệ sinh khắt khe.",
      icon: "shield"
    },
    {
      id: "why-2",
      title: "Dịch Vụ Vệ Sinh Kính",
      description:
        "Làm sạch mặt dựng kính tòa nhà cao tầng và showroom sáng bóng không vệt ố với đội ngũ kỹ thuật viên chứng chỉ an toàn cao độ.",
      icon: "sparkles"
    },
    {
      id: "why-3",
      title: "Dịch Vụ Khử Trùng",
      description:
        "Phun khử khuẩn Cloramin B và dung dịch thảo dược an toàn giúp tiêu diệt 99.9% vi khuẩn, nấm mốc và mùi hôi.",
      icon: "spray"
    },
    {
      id: "why-4",
      title: "Dịch Vụ Vệ Sinh Công Nghiệp",
      description:
        "Chăm sóc nhà xưởng, kho bãi và các khu vực sản xuất luôn sạch sẽ, an toàn và tuân thủ các tiêu chuẩn vệ sinh công nghiệp.",
      icon: "factory"
    },
    {
      id: "why-5",
      title: "Dịch Vụ Giặt Thảm & Ghế Sofa",
      description:
        "Giặt hơi nước nóng công nghệ Đức đánh bay vết bẩn sâu, khử khuẩn và bảo vệ sợi vải, da cao cấp nguyên trạng.",
      icon: "sofa"
    },
    {
      id: "why-6",
      title: "Dịch Vụ Vệ Sinh Văn Phòng",
      description:
        "Cung cấp tạp vụ định kỳ theo giờ hoặc trọn gói giúp môi trường làm việc doanh nghiệp luôn chuyên nghiệp, sáng sạch.",
      icon: "building"
    }
  ],
  featuredServices: [
    {
      id: "feat-srv-1",
      title: "Tổng vệ sinh công trình",
      subtitle: "Làm sạch sau xây dựng & cải tạo trọn gói",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "feat-srv-2",
      title: "Lau kính tòa nhà trên cao",
      subtitle: "Đội ngũ đu dây chuyên nghiệp chuẩn an toàn",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "feat-srv-3",
      title: "Vệ sinh nội thất chuyên sâu",
      subtitle: "Giặt sofa, thảm văn phòng, rèm cửa & nệm",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Đỗ Hữu Tài",
      role: "Khách hàng Doanh nghiệp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Tôi rất ấn tượng với sự chuyên nghiệp của đội ngũ vệ sinh. Nhà xưởng của chúng tôi luôn được duy trì ở tình trạng sạch sẽ và an toàn. CleanGlow đã giúp chúng tôi tuân thủ tốt các quy định về vệ sinh công nghiệp."
    },
    {
      id: "test-2",
      author: "Nguyễn Thị Minh Anh",
      role: "Khách hàng Căn hộ",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Gia đình mình sử dụng gói tổng vệ sinh sau cải tạo và giặt sofa hơi nước nóng. Các bạn nhân viên làm việc cực kỳ tỉ mỉ từng khe cửa sổ, sàn gạch sáng bóng và thơm dịu dễ chịu."
    },
    {
      id: "test-3",
      author: "Lê Văn Hùng",
      role: "Quản lý Tòa nhà Văn phòng",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Đội ngũ lau kính trên cao của CleanGlow làm việc rất bài bản, đầy đủ trang bị bảo hộ và hoàn thành đúng tiến độ cam kết. Kính mặt dựng tòa nhà 15 tầng trong suốt như mới."
    }
  ],
  dedicationSection: {
    title: "CHÚNG TÔI TẬN TÂM MANG LẠI KHÔNG GIAN SẠCH SẼ",
    description:
      "Việc duy trì một môi trường sạch sẽ và an toàn đóng vai trò quan trọng trong việc nâng cao hiệu suất làm việc và bảo vệ sức khỏe cho mọi người. Hãy để chúng tôi giúp bạn kiến tạo không gian sống và làm việc lý tưởng.",
    specialistImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    accordions: [
      {
        id: "acc-1",
        title: "An Toàn Vệ Sinh & Bảo Vệ Sức Khỏe",
        content:
          "Nâng cao chất lượng không gian sống với đội ngũ vệ sinh hàng đầu. Chúng tôi sử dụng 100% dung dịch làm sạch sinh học thân thiện môi trường, an toàn cho trẻ nhỏ và thú cưng."
      },
      {
        id: "acc-2",
        title: "Vệ Sinh Gia Đình Theo Giờ & Trọn Gói",
        content:
          "Linh hoạt lựa chọn gói dọn dẹp theo giờ định kỳ hoặc tổng vệ sinh toàn diện căn hộ, biệt thự trước lễ Tết, chuyển nhà mới với mức chi phí minh bạch."
      },
      {
        id: "acc-3",
        title: "Vệ Sinh Công Nghiệp Nhà Xưởng",
        content:
          "Hệ thống máy chà sàn liên hợp, máy phun rửa áp lực cao giúp xử lý triệt để dầu mỡ công nghiệp, bụi bẩn trên trần cao và đánh bóng sàn bê tông, đá Marble."
      },
      {
        id: "acc-4",
        title: "Quy Trình Nghiệm Thu 5 Bước",
        content:
          "Khảo sát miễn phí tận nơi -> Báo giá chi tiết -> Thi công chuẩn 5S có giám sát trưởng -> Nghiệm thu từng hạng mục cùng khách hàng -> Bảo hành chất lượng sau dịch vụ."
      }
    ]
  },
  featuredArticle: {
    id: "news-main",
    title: "5 cách treo áo thun không bị giãn, giữ chuẩn form dáng",
    date: "17 Th1 2026",
    comments: "0 bình luận",
    excerpt:
      "Bí quyết gấp và móc treo quần áo đúng kỹ thuật giúp tủ đồ gia đình luôn phẳng phiu, bền đẹp như mới.",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80"
  },
  news: [
    {
      id: "news-1",
      title: "Mẹo tẩy vết dơ cứng đầu trên sàn nhà nhanh chóng",
      date: "17 Th1 2026",
      category: "Mẹo Vệ Sinh",
      excerpt:
        "Hướng dẫn xử lý vết ố trà, cà phê, rỉ sét và sơn bám trên sàn gạch men, sàn gỗ tự nhiên chỉ trong 10 phút.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-2",
      title: "Cách tẩy keo nến trên quần áo không làm hỏng sợi vải",
      date: "17 Th1 2026",
      category: "Chăm Sóc Gia Đình",
      excerpt:
        "Sử dụng đá lạnh, bàn ủi hơi nước và cồn y tế để bóc tách hoàn toàn lớp keo nến bám chặt trên bề mặt vải.",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-3",
      title: "Dịch vụ vệ sinh công nghiệp dành cho đối tượng nào?",
      date: "17 Th1 2026",
      category: "Kiến Thức Ngành",
      excerpt:
        "Tổng hợp các hạng mục vệ sinh công nghiệp thiết yếu cho tòa nhà văn phòng, bệnh viện, trường học và nhà máy.",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
