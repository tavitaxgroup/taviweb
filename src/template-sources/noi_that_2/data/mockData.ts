import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat2StyleTab {
  id: string;
  tabName: string;
  title: string;
  description: string;
  characteristics: string[];
  image: string;
}

export interface NoiThat2TemplateData extends ClonedTemplateBaseData {
  interiorStyles: NoiThat2StyleTab[];
  projectCategories: string[];
}

export const noiThat2DefaultData: NoiThat2TemplateData = {
  business: {
    name: "AMORE ARCHITECTURE",
    logo: "",
    phone: ["0938 666 888", "028 3829 6688"],
    email: ["info@amorearch.vn", "studio@amorearch.vn"],
    address: "156 Nguyễn Văn Thủ, Đa Kao, Quận 1, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:30 - 18:00",
    rating: 4.9,
    reviewCount: 245,
    experienceYears: "12+",
    aboutTitle: "Nâng tầm giá trị cho mọi không gian sống",
    aboutText: [
      "Với hơn 12 năm kinh nghiệm hoạt động trong ngành kiến trúc và nội thất cao cấp, AMORE ARCHITECTURE cung cấp đầy đủ các dịch vụ tư vấn thiết kế và thi công nội thất trọn gói cho biệt thự, căn hộ penthouse, nhà phố và văn phòng hạng sang.",
      "Mỗi một công trình của AMORE ARCHITECTURE không chỉ dừng lại ở thẩm mỹ tinh tế và công năng chuẩn mực mà còn mang lại giá trị cảm xúc bền vững cho tổ ấm của bạn."
    ]
  },
  hero: {
    eyebrow: "KIẾN TRÚC & NỘI THẤT THƯỢNG LƯU",
    title: "Tuyệt Tác Không Gian Sống Tân Cổ Điển & Đương Đại",
    subtitle:
      "Khắc họa phong cách sống vương giả qua từng đường nét phào chỉ thủ công, vật liệu gỗ tự nhiên tuyển chọn và nghệ thuật ánh sáng đèn chùm pha lê.",
    ctaText: "NHẬN TƯ VẤN THIẾT KẾ",
    ctaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85"
  },
  services: [
    {
      id: "srv-1",
      title: "Thiết kế nội thất",
      description:
        "Sáng tạo không gian nội thất may đo riêng biệt theo gu thẩm mỹ, cá tính và phong thủy của từng gia chủ.",
      icon: "sofa"
    },
    {
      id: "srv-2",
      title: "Thiết kế kiến trúc",
      description:
        "Quy hoạch tổng thể mặt bằng, thiết kế mặt tiền biệt thự, dinh thự và tòa nhà thương mại đẳng cấp.",
      icon: "landmark"
    },
    {
      id: "srv-3",
      title: "Thi công nội thất",
      description:
        "Sở hữu nhà máy sản xuất gỗ 3.500m² trang bị máy CNC hiện đại, cam kết chuẩn xác 99% so với bản vẽ 3D.",
      icon: "hammer"
    }
  ],
  interiorStyles: [
    {
      id: "style-hien-dai",
      tabName: "HIỆN ĐẠI",
      title: "HIỆN ĐẠI (MODERN LUXURY)",
      description:
        "Phong cách thiết kế nội thất Hiện Đại đề cao các đường nét hình học thanh thoát, không gian mở ngập tràn ánh sáng tự nhiên kết hợp cùng vật liệu kính, kim loại mạ PVD và đá cẩm thạch vân mây.",
      characteristics: [
        "Tối ưu hóa diện tích và luồng di chuyển liên hoàn",
        "Bảng màu trung tính sang trọng kết hợp điểm nhấn kim loại",
        "Tích hợp hệ thống chiếu sáng thông minh Smart Home"
      ],
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "style-tan-co-dien",
      tabName: "TÂN CỔ ĐIỂN",
      title: "TÂN CỔ ĐIỂN (NEOCLASSICAL)",
      description:
        "Sự giao thoa hoàn mỹ giữa tỷ lệ vàng cổ điển Châu Âu và hơi thở tiện nghi hiện đại. Những đường phào chỉ tinh giản kết hợp sofa bọc da Ý và đèn chùm pha lê tạo nên vẻ đẹp quý phái vượt thời gian.",
      characteristics: [
        "Tỷ lệ mảng tường và phào chỉ đối xứng chuẩn mực vàng",
        "Chất liệu gỗ óc chó, da bò Ý và đá tự nhiên cao cấp",
        "Sang trọng, ấm cúng và khẳng định vị thế gia chủ"
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "style-co-dien",
      tabName: "CỔ ĐIỂN",
      title: "CỔ ĐIỂN (ROYAL CLASSIC)",
      description:
        "Lấy cảm hứng từ các cung điện hoàng gia Châu Âu với nghệ thuật chạm khắc thủ công tinh xảo, dát vàng 24K và những thức cột vương giả dành riêng cho các dinh thự và lâu đài bề thế.",
      characteristics: [
        "Chạm khắc hoa văn thủ công bởi nghệ nhân lành nghề",
        "Hệ rèm nhung, thảm dệt Ba Tư và đèn chùm đại sảnh",
        "Vẻ đẹp trường tồn, bề thế và độc bản"
      ],
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "style-duong-dai",
      tabName: "ĐƯƠNG ĐẠI",
      title: "ĐƯƠNG ĐẠI (CONTEMPORARY)",
      description:
        "Tập trung vào hình khối không gian đầy tính nghệ thuật, đường cong mềm mại và sự tương phản chất liệu độc đáo giữa bê tông mài, gỗ ấm và vải bố cao cấp.",
      characteristics: [
        "Đường nét phóng khoáng, giàu tính điêu khắc đương đại",
        "Đồ nội thất rời mang tính biểu tượng (Iconic Furniture)",
        "Không gian sống như một phòng triển lãm nghệ thuật"
      ],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "style-art-decor",
      tabName: "ART DECOR",
      title: "ART DECOR (NGHỆ THUẬT THƯỢNG LƯU)",
      description:
        "Bản giao hưởng táo bạo của những họa tiết hình học đối xứng, chất liệu nhung lụa, đồng thau bóng gương và bảng màu giàu kịch tính như đỏ crimson, xanh lục bảo và vàng ánh kim.",
      characteristics: [
        "Họa tiết kỷ hà, đường viền kim loại đồng và gương ghép",
        "Màu sắc cá tính, sang trọng và đầy chất điện ảnh",
        "Thích hợp cho Penthouse, Lounge và Biệt thự nghệ thuật"
      ],
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  projectCategories: [
    "TẤT CẢ",
    "BIỆT THỰ",
    "CĂN HỘ PENTHOUSE",
    "NHÀ PHỐ",
    "VĂN PHÒNG & SHOWROOM"
  ],
  projects: [
    {
      id: "nt2-p1",
      title: "Văn Phòng Sáng Tạo Design Agency",
      category: "VĂN PHÒNG & SHOWROOM",
      location: "Quận 1, TP.HCM",
      price: "450 m²",
      description:
        "Không gian làm việc mở kết hợp khu vực lounge tiếp khách chuẩn 5 sao.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p2",
      title: "Biệt Thự Đơn Lập Vinhomes Riverside",
      category: "BIỆT THỰ",
      location: "Long Biên, Hà Nội",
      price: "680 m²",
      description:
        "Nội thất tân cổ điển sang trọng với phòng khách thông tầng và đèn chùm pha lê.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p3",
      title: "Penthouse The Marq Quận 1",
      category: "CĂN HỘ PENTHOUSE",
      location: "Đa Kao, Quận 1",
      price: "360 m²",
      description:
        "Căn hộ Penthouse phong cách Modern Luxury sử dụng gỗ óc chó và đá Marble Ý.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p4",
      title: "Nhà Phố Hiện Đại Khu Sala",
      category: "NHÀ PHỐ",
      location: "Thủ Thiêm, TP.HCM",
      price: "420 m²",
      description:
        "Thiết kế nội thất nhà phố 4 tầng tối ưu giếng trời và cây xanh trong nhà.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p5",
      title: "Không Gian Bếp & Phòng Ăn Hoàng Gia",
      category: "BIỆT THỰ",
      location: "Quận 7, TP.HCM",
      price: "520 m²",
      description:
        "Hệ tủ bếp gỗ sồi sơn trắng ánh kim kết hợp bàn đảo đá thạch anh nguyên khối.",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p6",
      title: "Căn Hộ Duplex Empire City",
      category: "CĂN HỘ PENTHOUSE",
      location: "TP. Thủ Đức, TP.HCM",
      price: "290 m²",
      description:
        "Nội thất đương đại ấm cúng với sofa da bò Ý và hệ vách ốp gỗ veneer tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p7",
      title: "Showroom Thời Trang & Trang Sức",
      category: "VĂN PHÒNG & SHOWROOM",
      location: "Đồng Khởi, Quận 1",
      price: "310 m²",
      description:
        "Showroom cao cấp phong cách Art Decor với hệ tủ kính viền đồng mạ vàng.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p8",
      title: "Biệt Thự Nghỉ Dưỡng Thảo Điền",
      category: "BIỆT THỰ",
      location: "Thảo Điền, TP.HCM",
      price: "750 m²",
      description:
        "Không gian phòng khách mở liền kề hồ bơi sân vườn mang hơi thở Resort 5 sao.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p9",
      title: "Nhà Phố Tân Cổ Điển Phú Mỹ Hưng",
      category: "NHÀ PHỐ",
      location: "Quận 7, TP.HCM",
      price: "380 m²",
      description:
        "Sự kết hợp hài hòa giữa phào chỉ PU tinh tế và đồ nội thất nhập khẩu Châu Âu.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p10",
      title: "Phòng Ngủ Master Suite Biệt Thự",
      category: "BIỆT THỰ",
      location: "Quận 2, TP.HCM",
      price: "110 m²",
      description:
        "Phòng ngủ Master tích hợp phòng thay đồ Walk-in Closet cánh kính đèn LED ấm.",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p11",
      title: "Penthouse Feliz En Vista",
      category: "CĂN HỘ PENTHOUSE",
      location: "TP. Thủ Đức, TP.HCM",
      price: "410 m²",
      description:
        "Thiết kế cầu thang xoắn nghệ thuật trở thành tâm điểm của căn hộ thông tầng.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nt2-p12",
      title: "Lounge & Phòng Họp Chủ Tịch Tập Đoàn",
      category: "VĂN PHÒNG & SHOWROOM",
      location: "Quận 1, TP.HCM",
      price: "500 m²",
      description:
        "Không gian điều hành sang trọng khẳng định đẳng cấp thương hiệu dẫn đầu.",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
    }
  ],
  news: [
    {
      id: "news-main",
      title: "Thiết kế nội thất văn phòng – Công ty truyền thông & sáng tạo",
      date: "15/05/2026",
      category: "XU HƯỚNG NỘI THẤT",
      excerpt:
        "Không gian làm việc chuyên nghiệp, giàu cảm hứng nghệ thuật giúp kích thích tư duy sáng tạo của đội ngũ nhân sự và nâng tầm hình ảnh doanh nghiệp trong mắt đối tác.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "news-2",
      title: "Thiết kế, thi công nội thất showroom thời trang cao cấp",
      date: "18/05/2026",
      category: "SHOWROOM LUXURY",
      excerpt:
        "Sự tinh tế, thời thượng bắt mắt và nghệ thuật trưng bày ánh sáng biến showroom thành điểm đến sang trọng.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Bí quyết bố trí ánh sáng và vật liệu cho căn hộ Penthouse",
      date: "21/05/2026",
      category: "CĂN HỘ CAO CẤP",
      excerpt:
        "Phối hợp nhịp nhàng giữa ánh sáng tự nhiên và đèn trang trí giúp tôn vinh từng đường vân đá tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-4",
      title: "Thiết kế, thi công biệt thự nghỉ dưỡng đồi thông tại Đà Lạt",
      date: "25/05/2026",
      category: "BIỆT THỰ NGHỈ DƯỠNG",
      excerpt:
        "Ngôi biệt thự mang đậm âm hưởng đương đại kết hợp chất liệu gỗ ấm áp và tầm nhìn toàn cảnh thiên nhiên.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Anh Thắng",
      role: "Dự án Biệt thự Thảo Điền",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi có dịp hợp tác với AMORE ARCHITECTURE trong dự án thiết kế và thi công nội thất biệt thự gia đình. Đội ngũ kiến trúc sư tư vấn rất kỹ lưỡng về vật liệu gỗ, đá tự nhiên nên khi hoàn thiện thực tế còn đẹp và sắc nét hơn cả bản vẽ 3D.”"
    },
    {
      id: "test-2",
      author: "Chị Quỳnh",
      role: "Penthouse Gemek Premium",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Với sự tư vấn tận tâm của các kiến trúc sư, tôi đã sở hữu được không gian sống tân cổ điển đúng ý mình, vừa sang trọng quý phái vừa tiện nghi cho sinh hoạt gia đình. Từng đường chỉ may sofa và phào chỉ đều được chăm chút tỉ mỉ.”"
    },
    {
      id: "test-3",
      author: "Anh Cường",
      role: "Dự án An Bình City",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi rất hài lòng với sản phẩm nội thất may đo và thái độ làm việc chuyên nghiệp của đội ngũ giám sát. Tiến độ sản xuất tại xưởng và lắp đặt tại công trình cực kỳ chuẩn xác, chế độ bảo hành nhanh chóng.”"
    }
  ]
};

export default noiThat2DefaultData;
