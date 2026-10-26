import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface QuanCafe3Data extends ClonedTemplateBaseData {
  brandTagline: string;
  footerTagline: string;
  storyCards: Array<{
    id: string;
    title: string;
    date: string;
    comments: string;
    image: string;
  }>;
  spongeCakeFeature: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    ctaLabel: string;
  };
  staggeredGallery: string[];
  categoryHighlights: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  bakeryMenu: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
  }>;
  videoBannerImage: string;
  portfolioTabs: Array<{
    id: string;
    label: string;
    leftLargeImage: string;
    middleTallImage: string;
    rightTopImage: string;
    rightBottomImage: string;
  }>;
  bakerBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
}

export const quanCafe3DefaultData: QuanCafe3Data = {
  business: {
    name: "Mona Bakery",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@themona.global", "datbanh@monabakery.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "6:30 - 22:00",
    rating: 4.9,
    reviewCount: 3120,
    experienceYears: "12+ Năm",
    aboutTitle: "Bánh tươi ngon, tốt cho sức khỏe, nhiều vị!",
    aboutText: [
      "Bánh được làm từ những nguyên liệu tươi ngon, chất lượng cao, đảm bảo hương vị thơm ngon, hấp dẫn.",
      "Bánh có hương vị đậm đà, đặc trưng của bánh bông lan trứng muối, mang đến cho người thưởng thức cảm giác ngon miệng."
    ],
    highlights: [
      "Bánh nướng mới ra lò mỗi sáng từ 6:30",
      "100% bơ lạt Pháp Anchor & bột mì hữu cơ thượng hạng",
      "Công thức Bông Lan Trứng Muối sốt phô mai độc quyền",
      "Nhận đặt bánh kem sinh nhật & tiệc trà doanh nghiệp"
    ]
  },
  brandTagline: "Thưởng thức hôm nay, nhớ mãi ngày mai",
  footerTagline: "Tình yêu bắt đầu bằng chiếc bánh thơm",
  hero: {
    eyebrow: "Chúng tôi làm ra bánh thơm ngon",
    title: "Mona Bakery",
    subtitle: "Chúng tôi làm ra bánh thơm ngon",
    description:
      "Tiệm bánh thủ công mang hương vị ấm áp của gia đình với hàng chục dòng bánh mì hoa cúc Pháp, bông lan trứng muối và mousse trái cây tươi mỗi ngày.",
    ctaText: "Về chúng tôi",
    ctaLink: "#bong-lan-trung-muoi",
    secondaryCtaText: "Thực đơn bánh",
    secondaryCtaLink: "#thuc-don-banh",
    backgroundImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  storyCards: [
    {
      id: "st-1",
      title: "Chuyện về bánh Flan & Cheesecake Pháp",
      date: "14 Tháng Mười Hai, 2025",
      comments: "0 Bình luận",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "st-2",
      title: "Brioche Pháp (bánh mì hoa cúc Pháp)",
      date: "14 Tháng Mười Hai, 2025",
      comments: "0 Bình luận",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "st-3",
      title: "Câu chuyện bánh Macaron hạnh nhân",
      date: "14 Tháng Mười Hai, 2025",
      comments: "0 Bình luận",
      image:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=700&q=80"
    }
  ],
  spongeCakeFeature: {
    eyebrow: "BÔNG LAN TRỨNG MUỐI",
    title: "Bánh tươi ngon, tốt cho sức khỏe, nhiều vị!",
    paragraph1:
      "Bánh được làm từ những nguyên liệu tươi ngon, chất lượng cao, đảm bảo hương vị thơm ngon, hấp dẫn.",
    paragraph2:
      "Bánh có hương vị đậm đà, đặc trưng của bánh bông lan trứng muối, mang đến cho người thưởng thức cảm giác ngon miệng.",
    ctaLabel: "Tìm hiểu thêm"
  },
  staggeredGallery: [
    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
  ],
  categoryHighlights: [
    {
      id: "ch-1",
      title: "Bánh BLTM truyền thống",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ch-2",
      title: "Bánh BLTM mix sốt & phô mai",
      image:
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ch-3",
      title: "Cộng đồng yêu bánh thủ công",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=700&q=80"
    }
  ],
  bakeryMenu: [
    {
      id: "bm-1",
      name: "Set Cup Mousse Tim",
      price: "100,000đ",
      category: "Mousse",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-2",
      name: "Set Cup Mousse Vuông",
      price: "80,000đ",
      category: "Mousse",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-3",
      name: "Mousse Xoài Mix Đào",
      price: "30,000đ",
      category: "Mousse",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-4",
      name: "Bánh Tart Mix Trái Cây",
      price: "30,000đ",
      category: "Tart",
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-5",
      name: "Set Su Kem",
      price: "30,000đ",
      category: "Choux",
      image:
        "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-6",
      name: "Bánh Mì Chà Bông Sốt Phô Mai tan chảy",
      price: "20,000đ",
      category: "BLTM",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-7",
      name: "Bánh Mì Chà Bông Sốt Hoàng Kim",
      price: "20,000đ",
      category: "BLTM",
      image:
        "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bm-8",
      name: "Bánh Mì Chà Bông sốt bơ trứng",
      price: "15,000đ",
      category: "BLTM",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
    }
  ],
  services: [
    {
      id: "s-bm1",
      title: "Set Cup Mousse Tim",
      description: "Set 4 bánh mousse trái cây tươi tạo hình trái tim ngọt ngào",
      price: "100,000đ"
    },
    {
      id: "s-bm2",
      title: "Set Cup Mousse Vuông",
      description: "Set 4 bánh mousse trà xanh, chanh dây, dâu tây và socola Bỉ",
      price: "80,000đ"
    },
    {
      id: "s-bm3",
      title: "Bánh Mì Chà Bông Sốt Phô Mai tan chảy",
      description: "Cốt bánh mềm mịn kết hợp sốt phô mai béo ngậy và chà bông heo",
      price: "20,000đ"
    }
  ],
  videoBannerImage:
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1800&q=85",
  portfolioTabs: [
    {
      id: "pastry",
      label: "Bánh Ngọt Pháp",
      leftLargeImage:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
      middleTallImage:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
      rightTopImage:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
      rightBottomImage:
        "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "desserts",
      label: "Tráng Miệng",
      leftLargeImage:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85",
      middleTallImage:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=80",
      rightTopImage:
        "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=700&q=80",
      rightBottomImage:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bread",
      label: "Bánh Mì Tươi",
      leftLargeImage:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
      middleTallImage:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80",
      rightTopImage:
        "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80",
      rightBottomImage:
        "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cake",
      label: "Bánh Kem",
      leftLargeImage:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
      middleTallImage:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
      rightTopImage:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80",
      rightBottomImage:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "cf-t1",
      author: "Nguyễn Minh Khang",
      role: "Khách hàng thân thiết • Quận 3, TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Mỗi sáng ghé Mona Bakery chọn một ổ bánh mì hoa cúc Pháp nóng hổi cùng hộp bông lan trứng muối sốt phô mai tan chảy đã trở thành thói quen của cả gia đình mình. Cốt bánh mềm tơi, thơm lừng mùi bơ Pháp tự nhiên mà vị ngọt cực kỳ thanh nhẹ.\n\nĐội ngũ thợ làm bánh ở đây thực sự đặt trọn tâm huyết vào từng mẻ bánh mới ra lò. Dù đặt bánh kem sinh nhật hay set mousse cho tiệc trà công ty đều được đóng gói chỉn chu, giao hàng đúng giờ."
    },
    {
      id: "cf-t2",
      author: "Trần Bảo Ngọc",
      role: "Food Blogger • Quận 1, TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Set Cup Mousse Tim và Bánh Tart Mix Trái Cây tại Mona Bakery là lựa chọn số 1 mỗi khi mình tổ chức tiệc cuối tuần. Lớp kem mousse mịn mướt hòa quyện cùng sốt xoài đào chua ngọt tự nhiên khiến ai thưởng thức cũng tấm tắc khen.\n\nĐặc biệt bánh mì chà bông sốt hoàng kim giá cực kỳ hạt dẻ mà chất lượng vượt trội, phần sốt trứng muối béo thơm đậm đà không nơi nào sánh bằng."
    },
    {
      id: "cf-t3",
      author: "Lê Thanh Hương",
      role: "Quản lý Văn phòng • Tân Bình, TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Công ty mình đặt tiệc Tea Break định kỳ tại Mona Bakery suốt 3 năm nay. Các dòng bánh su kem, macaron và bông lan trứng muối luôn tươi mới trong ngày, hoàn toàn không dùng chất bảo quản nên đồng nghiệp ai cũng yên tâm thưởng thức.\n\nKhông gian tiệm ấm cúng, thơm phức mùi bột mì nướng mới mỗi sáng sớm từ 6h30."
    }
  ],
  bakerBanner: {
    eyebrow: "MONA BAKERY XIN CHÀO",
    title: "Những người thợ làm bánh,\nBánh được làm bằng sự tận tâm_",
    subtitle:
      "Tiệm bánh lấy cảm hứng từ những người thợ làm bánh gia đình, những người luôn tâm huyết với nghề và mong muốn tạo ra những chiếc bánh thơm ngon, chất lượng.",
    backgroundImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=85"
  }
};
