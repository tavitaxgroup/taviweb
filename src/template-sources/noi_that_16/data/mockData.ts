import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat16PackageTab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface NoiThat16CategoryCard {
  id: string;
  prefix: string;
  name: string;
  image: string;
}

export interface NoiThat16Data extends ClonedTemplateBaseData {
  aboutImage: string;
  statRows: Array<{
    id: string;
    number: string;
    title: string;
    description: string;
  }>;
  packageTabs: NoiThat16PackageTab[];
  designCategories: NoiThat16CategoryCard[];
  constructionCategories: NoiThat16CategoryCard[];
  pressLogos: Array<{ id: string; name: string; color: string }>;
  projectStripImages: string[];
  featuredNews: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

export const noiThat16DefaultData: NoiThat16Data = {
  business: {
    name: "Nhà Đẹp Ở Đây",
    phone: ["0313 728 397", "0909 728 397"],
    email: ["info@themona.global", "thietke@nhadepoday.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 1020,
    aboutTitle: "Giới thiệu Nhà Đẹp Ở Đây",
    aboutText: [
      "Với trên 10 năm kinh nghiệm hoạt động trong ngành xây dựng và kiến trúc, chúng tôi cung cấp đầy đủ các dịch vụ thiết kế và thi công nội thất trọn gói. Mỗi một công trình không chỉ dừng lại ở thẩm mỹ mà còn mang lại nhiều giá trị bền vững hơn cho cuộc sống của bạn."
    ],
    highlights: [
      "Tiết kiệm trên 30% chi phí nhờ xưởng sản xuất nội thất trực tiếp 2.500m²",
      "Cam kết bản vẽ 3D sát thực tế thi công 99%, đúng tiến độ bàn giao",
      "Bảo hành 5 năm kết cấu gỗ An Cường và bảo trì trọn đời"
    ]
  },
  hero: {
    eyebrow: "MONA STORE INTERIOR",
    subtitle: "THIẾT KẾ ĐỘC ĐÁO - THI CÔNG CHÍNH XÁC",
    title: "NHÀ ĐẸP Ở ĐÂY",
    description:
      "Thiết kế thi công nội thất trọn gói giúp bạn tiết kiệm thời gian, tiết kiệm chi phí >30%, tránh được sai sót không đồng nhất.",
    ctaText: "GỬI LỜI NHẮN",
    ctaLink: "#consult-form",
    backgroundImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85"
  },
  aboutImage:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  statRows: [
    {
      id: "sr-1",
      number: "10 +",
      title: "Kinh nghiệm",
      description:
        "Với hơn 10 năm kinh nghiệm trong lĩnh vực thiết kế thi công nội thất, chúng tôi cam kết đem đến những giá trị tốt nhất."
    },
    {
      id: "sr-2",
      number: "1 K+",
      title: "Dự án",
      description:
        "Hơn 1.000 công trình căn hộ chung cư, biệt thự, nhà phố và văn phòng đã được bàn giao hoàn thiện trên toàn quốc."
    },
    {
      id: "sr-3",
      number: "1 K+",
      title: "Khách hàng hài lòng",
      description:
        "Sự hài lòng của gia chủ về thẩm mỹ, công năng và chất lượng vật liệu là thước đo uy tín hàng đầu của chúng tôi."
    }
  ],
  packageTabs: [
    {
      id: "tab-chung-cu",
      label: "Chung cư",
      title: "Thiết kế thi công nội thất chung cư",
      description:
        "Kiến tạo không gian căn hộ chung cư của bạn trở nên đẳng cấp với không gian sống đẹp mắt và đầy đủ tiện nghi. Lựa chọn chúng tôi, quý khách sẽ có được những giải pháp tối ưu về không gian, màu sắc, vật liệu và bố trí nội thất.",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
      highlights: [
        "Tối ưu diện tích cho căn hộ 1PN, 2PN, 3PN, Penthouse & Duplex",
        "Miễn phí 100% phí thiết kế 3D khi ký hợp đồng thi công trọn gói"
      ]
    },
    {
      id: "tab-biet-thu",
      label: "Biệt thự",
      title: "Thiết kế thi công nội thất biệt thự cao cấp",
      description:
        "Khẳng định vị thế gia chủ với các phong cách Tân cổ điển, Luxury đương đại, Indochine hoặc Modern Villa sử dụng gỗ óc chó Bắc Mỹ và đá tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      highlights: [
        "May đo độc bản từng chi tiết phào chỉ, đèn chùm và đồ rời",
        "Đội ngũ nghệ nhân mộc lành nghề trên 15 năm kinh nghiệm"
      ]
    },
    {
      id: "tab-nha-pho",
      label: "Nhà phố",
      title: "Thiết kế thi công nội thất nhà phố hiện đại",
      description:
        "Giải pháp thông tầng, giếng trời đón sáng tự nhiên và bố trí liên hoàn phòng khách - bếp giúp nhà phố luôn thoáng đãng, sang trọng.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      highlights: [
        "Giải pháp chống ẩm, cách âm và chiếu sáng thông minh",
        "Thi công đồng bộ từ phần thô cải tạo đến hoàn thiện nội thất"
      ]
    },
    {
      id: "tab-van-phong",
      label: "Văn phòng",
      title: "Thiết kế thi công nội thất văn phòng chuyên nghiệp",
      description:
        "Nâng tầm nhận diện thương hiệu doanh nghiệp và truyền cảm hứng làm việc với không gian văn phòng mở chuẩn công thái học.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      highlights: [
        "Tối ưu phòng họp, khu làm việc chung, Pantry và phòng Giám đốc",
        "Thi công nhanh gọn đúng tiến độ khai trương văn phòng"
      ]
    },
    {
      id: "tab-phong-khach",
      label: "Phòng khách",
      title: "Thiết kế thi công nội thất phòng khách sang trọng",
      description:
        "Trái tim của ngôi nhà được chăm chút với hệ vách ốp tivi lam gỗ, đá vân mây kết hợp bộ sofa da/nỉ cao cấp tôn vinh gu thẩm mỹ gia chủ.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      highlights: [
        "Phối màu hài hòa hợp phong thủy bản mệnh gia chủ",
        "Bảo hành 5 năm toàn bộ hệ tủ kệ và sofa may đo"
      ]
    },
    {
      id: "tab-phong-ngu",
      label: "Phòng ngủ",
      title: "Thiết kế thi công nội thất phòng ngủ ấm cúng",
      description:
        "Không gian nghỉ ngơi thư thái với hệ tủ áo kịch trần cánh kính, giường bọc nệm êm ái và bàn trang điểm tinh tế.",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
      highlights: [
        "Cốt gỗ MDF chống ẩm chuẩn E1 an toàn tuyệt đối cho giấc ngủ",
        "Tích hợp đèn LED cảm biến thông minh trong khoang tủ áo"
      ]
    }
  ],
  designCategories: [
    {
      id: "dc-1",
      prefix: "Thiết kế nội thất",
      name: "CĂN HỘ CHUNG CƯ",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-2",
      prefix: "Thiết kế nội thất",
      name: "BIỆT THỰ, VILA",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-3",
      prefix: "Thiết kế nội thất",
      name: "PHÒNG KHÁCH",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-4",
      prefix: "Thiết kế nội thất",
      name: "PHÒNG TRẺ EM",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-5",
      prefix: "Thiết kế nội thất",
      name: "NHÀ PHỐ",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-6",
      prefix: "Thiết kế nội thất",
      name: "VĂN PHÒNG CÔNG TY",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-7",
      prefix: "Thiết kế nội thất",
      name: "PHÒNG NGỦ",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dc-8",
      prefix: "Thiết kế nội thất",
      name: "NHÀ BẾP",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  constructionCategories: [
    {
      id: "cc-1",
      prefix: "Thi công nội thất",
      name: "CĂN HỘ CHUNG CƯ",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-2",
      prefix: "Thi công nội thất",
      name: "BIỆT THỰ, VILA",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-3",
      prefix: "Thi công nội thất",
      name: "PHÒNG KHÁCH",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-4",
      prefix: "Thi công nội thất",
      name: "PHÒNG TRẺ EM",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-5",
      prefix: "Thi công nội thất",
      name: "NHÀ PHỐ",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-6",
      prefix: "Thi công nội thất",
      name: "VĂN PHÒNG CÔNG TY",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-7",
      prefix: "Thi công nội thất",
      name: "PHÒNG NGỦ",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-8",
      prefix: "Thi công nội thất",
      name: "NHÀ BẾP",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  pressLogos: [
    { id: "pr-1", name: "Báo Tiền Phong", color: "text-red-600" },
    { id: "pr-2", name: "CAFEF", color: "text-[#00467f]" },
    { id: "pr-3", name: "afamily", color: "text-rose-500" },
    { id: "pr-4", name: "24h.com.vn", color: "text-emerald-600" },
    { id: "pr-5", name: "VNEXPRESS", color: "text-[#8b1e24]" },
    { id: "pr-6", name: "DÂN TRÍ", color: "text-green-700" }
  ],
  projectStripImages: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Anh Hào",
      role: "Dự án thiết kế nội thất",
      content:
        "Tôi được dịp hợp tác với Nhà Đẹp Ở Đây trong một dự án thiết kế nội thất căn hộ. Tôi rất hài lòng về sự chuyên nghiệp và đúng hẹn."
    },
    {
      id: "rev-2",
      author: "Chị An",
      role: "Gemek Premium",
      content:
        "Với sự tư vấn tận tình của đội ngũ kiến trúc sư, tôi đã có được một thiết kế đúng ý mình, không gian trong nhà vừa đẹp lại vừa tiện dụng."
    },
    {
      id: "rev-3",
      author: "Anh Lộc",
      role: "Dự án An Bình City",
      content:
        "Tôi rất hài lòng với sản phẩm và dịch vụ thi công trọn gói, đặc biệt là thái độ nhiệt tình và chuyên nghiệp của kỹ sư giám sát."
    }
  ],
  featuredNews: {
    id: "fn-main",
    title: "7 Tiêu chí mua nhà và bố trí nội thất giúp bạn sở hữu ngôi nhà mơ ước",
    excerpt:
      "Tầm quan trọng của các tiêu chí phong thủy, ánh sáng tự nhiên và phân bổ công năng nội thất khi nhận bàn giao nhà mới...",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  news: [
    {
      id: "fn-1",
      title: "Ứng dụng công nghệ AI và VR 360 vào thiết kế & quản lý dự án nội thất",
      date: "18/02/2026",
      excerpt:
        "Trải nghiệm trực quan từng góc căn hộ trước khi bấm nút sản xuất tại xưởng...",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fn-2",
      title: "Hoàn thiện nội thất căn hộ Sapphire 2 Vinhomes Ocean Park",
      date: "12/02/2026",
      excerpt: "Thiết kế tối giản hiện đại tối ưu không gian cho gia đình trẻ...",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fn-3",
      title: "Khám phá phong cách Zen Nhật Bản tại tổ hợp căn hộ cao cấp",
      date: "05/02/2026",
      excerpt: "Chất liệu gỗ sáng màu và ánh sáng tự nhiên mang lại bình yên...",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
