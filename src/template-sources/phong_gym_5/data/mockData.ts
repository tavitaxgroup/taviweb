import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym5DailyClass {
  id: string;
  title: string;
  description: string;
  schedule: string;
  image: string;
}

export interface PhongGym5WhyItem {
  number: string;
  title: string;
  description: string;
}

export interface PhongGym5Amenity {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PhongGym5Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

export interface PhongGym5Data extends ClonedTemplateBaseData {
  heroPriceNote: string;
  topGreenPillars: Array<{
    id: string;
    title: string;
    icon: "tech" | "trainer" | "friendly";
  }>;
  storySection: {
    eyebrow: string;
    title: string;
    leadUppercase: string;
    description: string;
    trainerPairImage: string;
    badges: Array<{
      id: string;
      label: string;
      icon: "dumbbell" | "muscle" | "yoga";
    }>;
  };
  programmeCards: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  promoBanner: {
    subtitle: string;
    discount: string;
    packageLabel: string;
    badgeText: string;
    description: string;
    circleImage: string;
  };
  dailyClasses: PhongGym5DailyClass[];
  whyBestSection: {
    eyebrow: string;
    title: string;
    image: string;
    items: PhongGym5WhyItem[];
  };
  amenities: PhongGym5Amenity[];
  appSection: {
    eyebrow: string;
    title: string;
    description: string;
    appImage: string;
  };
  trainersList: PhongGym5Trainer[];
  galleryImages: string[];
}

export const phongGym5DefaultData: PhongGym5Data = {
  business: {
    name: "Pelvan Fitness",
    phone: ["076 922 0162", "0909 558 162"],
    email: ["cskh@pelvanfitness.vn", "pt@pelvanfitness.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 05:30 - 22:30",
    rating: 4.9,
    reviewCount: 995,
    aboutTitle: "KINH NGHIỆM HUẤN LUYỆN TRÊN 30 NĂM",
    aboutText: [
      "Pelvan Fitness là trung tâm huấn luyện thể hình và PT cá nhân ứng dụng công nghệ phân tích sinh trắc học hiện đại hàng đầu Việt Nam."
    ],
    highlights: [
      "Hệ thống máy tập Technogym & Hammer Strength chuẩn Olympic",
      "Phác đồ dinh dưỡng & tập luyện cá nhân hóa 1-kèm-1",
      "Cam kết bảo hiểm tập luyện toàn phần và mở cửa 24/7"
    ]
  },
  hero: {
    eyebrow: "TRUNG TÂM HUẤN LUYỆN THỂ HÌNH & PT CÁ NHÂN",
    subtitle: "Bắt đầu với 490.000đ / tháng",
    title: "SĂN CHẮC CƠ VỚI CÔNG NGHỆ TỐT NHẤT.",
    description:
      "Đột phá giới hạn bản thân với hệ thống thiết bị đo lường cơ bắp thông minh và đội ngũ huấn luyện viên thể hình chuyên nghiệp.",
    ctaText: "ĐĂNG KÝ",
    ctaLink: "#trial-contact",
    secondaryCtaText: "XEM LỚP HỌC",
    secondaryCtaLink: "#programme",
    backgroundImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1920&q=85"
  },
  heroPriceNote: "Bắt đầu với 490.000đ / tháng",
  topGreenPillars: [
    { id: "p-1", title: "CÔNG NGHỆ CAO", icon: "tech" },
    { id: "p-2", title: "HLV CHUYÊN NGHIỆP", icon: "trainer" },
    { id: "p-3", title: "THÂN THIỆN", icon: "friendly" }
  ],
  storySection: {
    eyebrow: "CÂU CHUYỆN VỀ CHÚNG TÔI",
    title: "KINH NGHIỆM HUẤN LUYỆN TRÊN 30 NĂM",
    leadUppercase:
      "HỆ THỐNG PHÒNG TẬP THỂ HÌNH TIÊN PHONG ỨNG DỤNG KHOA HỌC CHUYỂN HÓA VÀ ĐO LƯỜNG CHỈ SỐ CƠ THỂ CHÍNH XÁC.",
    description:
      "Tại Pelvan Fitness, chúng tôi không chỉ cung cấp không gian tập luyện hiện đại mà còn xây dựng lộ trình thay đổi vóc dáng bền vững cho từng hội viên. Mỗi bài tập đều được giám sát kỹ lưỡng về tư thế, nhịp tim và mức tiêu hao năng lượng nhằm tối ưu hóa kết quả giảm mỡ - tăng cơ an toàn.",
    trainerPairImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    badges: [
      { id: "b-1", label: "GYM / FITNESS", icon: "dumbbell" },
      { id: "b-2", label: "THỂ HÌNH", icon: "muscle" },
      { id: "b-3", label: "LỚP YOGA", icon: "yoga" }
    ]
  },
  programmeCards: [
    {
      id: "prog-1",
      title: "CƯỜNG ĐỘ LỚN",
      image:
        "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prog-2",
      title: "LỚP HỌC YOGA",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prog-3",
      title: "LUYỆN TẬP HÌNH THỂ",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prog-4",
      title: "CHUYÊN NGHIỆP",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=80"
    }
  ],
  promoBanner: {
    subtitle: "Ưu đãi đặc biệt tại lớp Gym",
    discount: "30% OFF",
    packageLabel: "VỚI GÓI 2 NĂM",
    badgeText: "THỜI GIAN CÓ HẠN",
    description:
      "Tặng ngay 06 buổi tập 1-kèm-1 cùng Huấn luyện viên cá nhân (PT), đo chỉ số InBody định kỳ hàng tháng và sử dụng không giới hạn phòng xông hơi đá muối Himalaya.",
    circleImage:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
  },
  dailyClasses: [
    {
      id: "cls-1",
      title: "LỚP SỨC KHỎE",
      description:
        "Tăng cường sức bền tim mạch, cải thiện sự dẻo dai xương khớp và nạp năng lượng tích cực mỗi sáng.",
      schedule: "08:00 AM - 10:00 AM",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cls-2",
      title: "LỚP BOXING",
      description:
        "Rèn luyện phản xạ nhạy bén, giải tỏa căng thẳng và đốt cháy tới 750 calo mỗi buổi tập cùng võ sĩ chuyên nghiệp.",
      schedule: "10:00 AM - 12:00 PM",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cls-3",
      title: "GIẢM CÂN",
      description:
        "Tổ hợp bài tập HIIT & Tabata cường độ cao giúp kích hoạt quá trình đốt mỡ tự nhiên suốt 24 giờ sau tập.",
      schedule: "04:00 PM - 06:00 PM",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cls-4",
      title: "THỂ DỤC DỤNG CỤ",
      description:
        "Kết hợp bóng Bosu, dây kháng lực TRX và tạ ấm Kettlebell giúp săn chắc cơ lõi (Core) và cân bằng cơ thể.",
      schedule: "06:30 PM - 08:30 PM",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80"
    }
  ],
  whyBestSection: {
    eyebrow: "NHỮNG ĐIỂM NỔI BẬT Ở GYM CỦA BẠN",
    title: "NƠI TỐT NHẤT DÀNH CHO BẠN LUYỆN TẬP",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    items: [
      {
        number: "01.",
        title: "BẢO HIỂM TOÀN PHẦN",
        description:
          "Mọi hội viên đều được trang bị gói bảo hiểm an toàn thể thao toàn diện trong suốt thời gian luyện tập tại câu lạc bộ."
      },
      {
        number: "02.",
        title: "HUẤN LUYỆN VIÊN NỔI TIẾNG",
        description:
          "Đội ngũ HLV sở hữu chứng chỉ quốc tế, giàu kinh nghiệm thi đấu Men's Physique và Bikini Fitness trực tiếp kèm cặp."
      },
      {
        number: "03.",
        title: "CHÍNH SÁCH MỞ CỬA LINH HOẠT",
        description:
          "Mở cửa xuyên suốt từ 05:30 sáng đến 22:30 tối tất cả các ngày trong tuần, hỗ trợ bảo lưu thẻ tập miễn phí khi đi công tác."
      },
      {
        number: "04.",
        title: "CÔNG NGHỆ GYM CAO CẤP",
        description:
          "Hệ thống máy tập nhập khẩu 100% tích hợp màn hình cảm ứng theo dõi số hiệp, mức tạ và nhịp tim theo thời gian thực."
      }
    ]
  },
  stats: [
    { id: "s-1", number: "995K", title: "THÀNH VIÊN" },
    { id: "s-2", number: "48K", title: "HUẤN LUYỆN VIÊN" },
    { id: "s-3", number: "25", title: "LỚP HỌC" },
    { id: "s-4", number: "10+", title: "GIẢI THƯỞNG" }
  ],
  amenities: [
    {
      id: "am-1",
      title: "KHU VỰC MÁY TẬP THân DƯỚI & CARDIO",
      description:
        "Dàn máy chạy bộ, xe đạp địa hình và máy đạp đùi chuẩn sinh cơ học giúp bảo vệ khớp gối tối đa.",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-2",
      title: "KHU VỰC FREE WEIGHT & KETTLEBELL",
      description:
        "Hệ thống tạ đơn, tạ ấm và giàn Squat Rack đa năng đáp ứng mọi mức tạ từ người mới đến vận động viên.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-3",
      title: "KHÔNG GIAN TẬP LUYỆN RỘNG RÃI THOÁNG ĐÃNG",
      description:
        "Hệ thống lọc không khí tươi liên tục, tủ đồ thông minh khóa từ và khu vực Sauna thư giãn sau giờ tập.",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=700&q=80"
    }
  ],
  appSection: {
    eyebrow: "MẪU HỖ TRỢ ĐẦU TIÊN CỦA BẠN",
    title: "TẢI ỨNG DỤNG HỖ TRỢ",
    description:
      "Theo dõi lịch tập hàng tuần, đặt lịch hẹn cùng PT chỉ với 1 chạm, kiểm tra biểu đồ giảm mỡ InBody và nhận thực đơn dinh dưỡng chuẩn Calo ngay trên điện thoại của bạn.",
    appImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  trainersList: [
    {
      id: "tr-1",
      name: "AMARIAN JACKSON",
      role: "HLV BOXING & THỂ LỰC",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tr-2",
      name: "MR. STEFAN MOORE",
      role: "HLV THỂ HÌNH CHUYÊN NGHIỆP",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tr-3",
      name: "JANIE SMITH",
      role: "HLV FITNESS & YOGA",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
      featured: true
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "David Matheson",
      role: "C.E.O, Đối tác Doanh nghiệp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content:
        "Điều tuyệt vời nhận được từ các HLV chuyên nghiệp !! Chỉ sau 12 tuần tập luyện theo giáo trình cá nhân hóa tại Pelvan Fitness, tôi đã giảm được 9kg mỡ thừa và cải thiện hoàn toàn chứng đau lưng văn phòng."
    }
  ],
  pricing: [
    {
      id: "plan-1",
      name: "CƠ BẢN",
      price: "490.000đ / Tháng",
      description: "Gói khởi đầu lý tưởng",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      features: [
        { title: "3 Ngày / Tuần", desc: "" },
        { title: "Tập luyện khu vực máy Cardio & Cơ", desc: "" },
        { title: "Tủ đồ cá nhân & Phòng tắm nóng lạnh", desc: "" },
        { title: "Đo chỉ số InBody định kỳ", desc: "" }
      ]
    },
    {
      id: "plan-2",
      name: "TIÊU CHUẨN",
      badge: "PHỔ BIẾN",
      price: "690.000đ / Tháng",
      description: "Toàn diện mọi bộ môn",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
      features: [
        { title: "5 Ngày / Tuần", desc: "" },
        { title: "Toàn bộ lớp Yoga, Zumba & Boxing", desc: "" },
        { title: "Không giới hạn thời gian tập", desc: "" },
        { title: "Sử dụng phòng Sauna đá muối", desc: "" }
      ]
    },
    {
      id: "plan-3",
      name: "NÂNG CAO",
      price: "1.490.000đ / Tháng",
      description: "Huấn luyện 1-kèm-1 VIP",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
      features: [
        { title: "7 Ngày / Tuần (Full VIP)", desc: "" },
        { title: "Kèm PT cá nhân & Thực đơn riêng", desc: "" },
        { title: "Khăn tập & Nước khoáng miễn phí", desc: "" },
        { title: "Dẫn theo 1 người thân cuối tuần", desc: "" }
      ]
    }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  ]
};
