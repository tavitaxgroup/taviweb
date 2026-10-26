import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat13RoomItem {
  id: string;
  title: string;
  category: string;
  priceText: string;
  image: string;
  description: string;
}

export interface NoiThat13CheckerboardRow {
  id: string;
  title: string;
  description: string;
  image: string;
  imageOnLeft: boolean;
}

export interface NoiThat13TourPackage {
  id: string;
  title: string;
  priceText: string;
  description: string;
  image: string;
}

export interface NoiThat13TemplateData extends ClonedTemplateBaseData {
  lifestyleStripImages: string[];
  waveSectionTitle: string;
  waveSectionParagraphs: string[];
  waveVideoImage: string;
  roomCategories: string[];
  rooms: NoiThat13RoomItem[];
  checkerboardRows: NoiThat13CheckerboardRow[];
  tourPackages: NoiThat13TourPackage[];
}

export const noiThat13DefaultData: NoiThat13TemplateData = {
  business: {
    name: "MONA BEACH",
    logo: "",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["info@monabeach.vn", "booking@monabeach.vn"],
    address: "319 C16 Lý Thường Kiệt, Quận 11, TP.HCM",
    workingHours: "Phục vụ 24/7",
    rating: 5.0,
    reviewCount: 274,
    experienceYears: "14+",
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "MONA Beach là một bức tranh hoàn mỹ của nghệ thuật kiến trúc, nội thất nghỉ dưỡng và xây dựng ven biển. Ngay cạnh bãi biển là hồ bơi rộng lớn, được bao bọc bởi hàng dừa xanh mượt.",
      "MONA Beach Resort gồm 57 Rooms & Suites được thiết kế nội thất theo phong cách Châu Âu đương đại kết hợp chất liệu nhiệt đới tọa lạc ngay sát bờ biển."
    ],
    highlights: [
      "57 Phòng & Biệt thự biển thiết kế chuẩn Châu Âu",
      "Nội thất gỗ tự nhiên & vải lanh cao cấp đón gió biển",
      "Hồ bơi tràn bờ hướng thẳng ra vịnh biển xanh ngọc",
      "Trọn gói dịch vụ nghỉ dưỡng, ẩm thực & lướt sóng"
    ]
  },
  hero: {
    eyebrow: "CHÀO MỪNG ĐẾN VỚI MONA BEACH",
    title: "THIÊN ĐƯỜNG NGHỈ DƯỠNG",
    subtitle: "Đặt phòng trên bãi biển chỉ từ 1.250.000đ / đêm",
    ctaText: "ĐẶT NGAY",
    ctaLink: "#hotel-resort",
    secondaryCtaText: "KHÁM PHÁ NGAY",
    secondaryCtaLink: "#tan-huong",
    backgroundImage:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  lifestyleStripImages: [
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
  ],
  waveSectionTitle: "Chinh phục những ngọn sóng",
  waveSectionParagraphs: [
    "Lướt sóng là môn thể thao mạo hiểm được rất nhiều người ưa thích. Nếu yêu thích môn thể thao này, bạn hãy đến với chúng tôi để có được những trải nghiệm ấn tượng nhất.",
    "Bạn đã bao giờ thử cảm giác “bay” trên mặt nước chưa? Với tấm ván đặc biệt mang tên eFoil, bạn sẽ trải nghiệm cảm giác bay thực sự như với chiếc thảm thần kỳ trong cổ tích."
  ],
  waveVideoImage:
    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80",
  roomCategories: ["Tất cả", "Cặp đôi", "Gia đình", "Sang trọng", "Giá rẻ"],
  rooms: [
    {
      id: "rm-1",
      title: "Phòng Suite Cặp Đôi Nội Thất Gỗ Ấm Áp",
      category: "Cặp đôi",
      priceText: "1.450.000 ₫ / đêm",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      description:
        "Thiết kế nội thất tông xanh olive dịu mát kết hợp giường King phủ vải cotton Ai Cập và quạt trần nhiệt đới."
    },
    {
      id: "rm-2",
      title: "Phòng Ngủ Minimalist Trắng Tinh Khôi",
      category: "Giá rẻ",
      priceText: "1.250.000 ₫ / đêm",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      description:
        "Không gian tối giản ngập tràn ánh sáng tự nhiên với hệ cửa chớp gỗ trắng nhìn thẳng ra vườn biển."
    },
    {
      id: "rm-3",
      title: "Biệt Thự Biển Giường Màn Hoàng Gia",
      category: "Sang trọng",
      priceText: "3.200.000 ₫ / đêm",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      description:
        "Phòng ngủ Master với giường bốn cọc buông rèm voan trắng lãng mạn và ban công riêng sát mép biển."
    },
    {
      id: "rm-4",
      title: "Phòng Gia Đình Hiên Nắng Nhiệt Đới",
      category: "Gia đình",
      priceText: "2.350.000 ₫ / đêm",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      description:
        "Không gian rộng 65 m² thiết kế mở liên thông khu vực nghỉ ngơi và hiên tắm nắng riêng biệt."
    },
    {
      id: "rm-5",
      title: "Phòng Deluxe Tông Xanh Lá Dừa Tươi Mát",
      category: "Cặp đôi",
      priceText: "1.550.000 ₫ / đêm",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      description:
        "Điểm xuyết sắc xanh nhiệt đới trên nền nội thất trắng kem, mang hơi thở biển cả vào từng giấc ngủ."
    },
    {
      id: "rm-6",
      title: "Bungalow Gỗ Teak Tự Nhiên Hướng Biển",
      category: "Sang trọng",
      priceText: "2.950.000 ₫ / đêm",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description:
        "Sàn và trần ốp gỗ Teak tự nhiên kết hợp giường màn khung gỗ cổ điển tạo vẻ sang trọng vượt thời gian."
    }
  ],
  checkerboardRows: [
    {
      id: "cb-1",
      title: "NHỮNG ĐIỂM ĐẾN THÚ VỊ",
      description:
        "Tọa lạc trên đảo Hòn Tre với những bãi biển trong xanh quanh năm, khu nghỉ dưỡng được biết đến như thiên đường giao thoa văn hóa và kiến trúc di sản.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80",
      imageOnLeft: false
    },
    {
      id: "cb-2",
      title: "THAM QUAN TÒA LÂU ĐÀI",
      description:
        "Tọa lạc trên đồi cao với những bãi biển trong xanh quanh năm, quần thể kiến trúc lâu đài Châu Âu cổ điển mang lại góc nhìn ngoạn mục.",
      image:
        "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=1000&q=80",
      imageOnLeft: true
    },
    {
      id: "cb-3",
      title: "TẬN HƯỞNG HƠI THỞ BIỂN",
      description:
        "Trải nghiệm hệ thống biệt thự nổi trên mặt nước biển trong vắt cùng các hoạt động lặn biển ngắm rạn san hô đa sắc màu ngay dưới chân phòng nghỉ.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      imageOnLeft: false
    },
    {
      id: "cb-4",
      title: "VỀ CHÚNG TÔI",
      description:
        "MONA Beach Resort gồm 57 Rooms & Suites được thiết kế theo phong cách Châu Âu tọa lạc cạnh biển với bảng màu kiến trúc rực rỡ và tràn đầy sức sống.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
      imageOnLeft: true
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Khách hàng Minh Anh",
      role: "Nhà thám hiểm",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Chuyến đi vô cùng tuyệt vời. Cảm ơn đơn vị dịch vụ MONA Beach cung cấp không gian biệt thự biển tuyệt đẹp và chu đáo."
    }
  ],
  tourPackages: [
    {
      id: "tour-1",
      title: "Chụp ảnh cưới cầu tình yêu",
      priceText: "4,500,000 ₫",
      description:
        "“Thiên đường tình yêu” là mỹ từ xứng tụng Đà Nẵng quả không sai. Bờ biển buông lơi, uốn cong theo từng cơn sóng vỗ được điểm tô bởi những hàng cọ, hàng dừa.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tour-2",
      title: "Tour thượng ngoạn Bà Nà Hill",
      priceText: "7,000,000 ₫",
      description:
        "“Thiên đường tình yêu” là mỹ từ xứng tụng Đà Nẵng quả không sai. Bờ biển buông lơi, uốn cong theo từng cơn sóng vỗ được điểm tô bởi những hàng cọ, hàng dừa.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tour-3",
      title: "Lễ hội hoa đăng Hội An",
      priceText: "1,200,000 ₫",
      description:
        "“Thiên đường tình yêu” là mỹ từ xứng tụng Đà Nẵng quả không sai. Bờ biển buông lơi, uốn cong theo từng cơn sóng vỗ được điểm tô bởi những hàng cọ, hàng dừa.",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  news: [
    {
      id: "n-1",
      title: "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
      date: "10/05/2026",
      excerpt: "Cẩm nang khám phá kiến trúc và bãi biển đẹp nhất miền Trung.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "n-2",
      title: "Du lịch Đà Lạt : Cẩm nang từ A-Z",
      date: "15/05/2026",
      excerpt: "Khám phá những căn biệt thự nghỉ dưỡng trên đồi thông.",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "n-3",
      title: "Du lịch Phú Quốc : Thiên đường trên mặt đất",
      date: "20/05/2026",
      excerpt: "Trải nghiệm chuỗi bungalow gỗ ven biển hoàng hôn.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=75"
    }
  ]
};

export default noiThat13DefaultData;
