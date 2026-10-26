import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PoolServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: "drain" | "inspect" | "clean" | "analyze";
  priceNote: string;
  details: string[];
}

export interface PoolCircleMetric {
  id: string;
  percentage: number;
  title: string;
  description: string;
}

export interface PoolExpertMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
}

export interface DichVuVeSinh4Data extends ClonedTemplateBaseData {
  welcomeNotice: string;
  heroPersonImage: string;
  bookingServicesList: string[];
  poolServicesSection: {
    eyebrow: string;
    title: string;
    items: PoolServiceCard[];
  };
  aboutHeritageSection: {
    experienceYearsNumber: string;
    experienceBadgeText: string;
    mainImage: string;
    secondaryImage: string;
    eyebrow: string;
    title: string;
    description: string;
    mission: {
      title: string;
      text: string;
    };
    vision: {
      title: string;
      text: string;
    };
    ctaText: string;
  };
  darkCalloutBanner: {
    eyebrow: string;
    title: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundImage: string;
  };
  whyChooseUsSection: {
    eyebrow: string;
    title: string;
    metrics: PoolCircleMetric[];
    subTitle: string;
    subDescription: string;
    highlights: Array<{
      id: string;
      title: string;
    }>;
    bulletPoints: string[];
    mainCircleImage: string;
    smallCircleImage: string;
  };
  expertsSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    members: PoolExpertMember[];
  };
  recentWorksSection: {
    eyebrow: string;
    title: string;
    images: Array<{
      id: string;
      title: string;
      location: string;
      image: string;
    }>;
  };
  newsletterBar: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
}

export const dichVuVeSinh4DefaultData: DichVuVeSinh4Data = {
  business: {
    name: "Bể Bơi Xanh",
    phone: ["1900 636 648", "0909 888 648"],
    email: ["info@beboixanh.vn", "cskh@beboixanh.vn"],
    address:
      "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    workingHours: "Thứ 2 - Chủ Nhật: 07:00 - 19:30",
    rating: 4.9,
    reviewCount: 2985,
    aboutTitle: "Dịch Vụ Vệ Sinh Hồ Bơi, Cảnh Quan & Tòa Nhà Chuyên Nghiệp",
    aboutText: [
      "Chúng tôi cung cấp dịch vụ vệ sinh, xử lý nước và bảo dưỡng chuyên biệt để bảo vệ hồ bơi, cảnh quan biệt thự và tòa nhà của bạn quanh năm luôn trong xanh, an toàn chuẩn y tế.",
    ],
  },
  welcomeNotice: "Chào mừng bạn đến với Bể Bơi Xanh",
  hero: {
    eyebrow: "LÀM MỚI, THƯ GIÃN, TƯƠI MỚI",
    title: "Bể bơi hoàn hảo",
    subtitle:
      "Hiểu rõ về dịch vụ mà chúng tôi cung cấp, bao gồm vệ sinh định kỳ, bảo dưỡng thiết bị, sửa chữa và các liệu pháp cân bằng hóa chất nước đặc biệt.",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#dich-vu",
    secondaryCtaText: "DỊCH VỤ",
    secondaryCtaLink: "#dat-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=85",
  },
  heroPersonImage:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
  bookingServicesList: [
    "Vệ sinh & Hút cặn hồ bơi định kỳ",
    "Xử lý nước đục, rêu tảo & Cân bằng pH",
    "Bảo trì máy bơm, bình lọc cát & Đèn âm nước",
    "Tổng vệ sinh cảnh quan biệt thự & Tòa nhà",
  ],
  poolServicesSection: {
    eyebrow: "Dịch Vụ Tốt Nhất",
    title: "Dịch vụ hồ bơi tốt nhất dành cho bạn!",
    items: [
      {
        id: "srv-1",
        title: "Thoát nước",
        description:
          "Dịch vụ bảo dưỡng hồ bơi đáng tin cậy để bạn có thể tận hưởng hồ bơi một cách dễ dàng và không gặp phiền toái.",
        iconName: "drain",
        priceNote: "Từ 800.000đ / lần",
        details: [
          "Xả cặn đáy hồ và vệ sinh rãnh tràn toàn diện",
          "Kiểm tra van đáy, đường ống xả và hệ thống chống thấm",
          "Cấp nước mới và cân bằng khoáng chất ban đầu",
        ],
      },
      {
        id: "srv-2",
        title: "Kiểm tra hồ bơi",
        description:
          "Dịch vụ bảo dưỡng hồ bơi đáng tin cậy để bạn có thể tận hưởng hồ bơi một cách dễ dàng và không gặp phiền toái.",
        iconName: "inspect",
        priceNote: "Từ 500.000đ / lần",
        details: [
          "Kiểm tra áp suất bình lọc cát và lưu lượng máy bơm",
          "Đo kiểm tra an toàn điện hệ thống đèn LED âm nước",
          "Báo cáo chi tiết tình trạng thiết bị và khuyến nghị bảo trì",
        ],
      },
      {
        id: "srv-3",
        title: "Làm sạch hồ bơi",
        description:
          "Dịch vụ bảo dưỡng hồ bơi đáng tin cậy để bạn có thể tận hưởng hồ bơi một cách dễ dàng và không gặp phiền toái.",
        iconName: "clean",
        priceNote: "Từ 1.500.000đ / tháng",
        details: [
          "Chà thành bể, hút cặn đáy bằng robot chuyên dụng",
          "Vớt lá cây, vệ sinh giỏ lọc rác (Skimmer) và sàn tràn",
          "Đánh bóng thang inox và gạch mosaic viền bể",
        ],
      },
      {
        id: "srv-4",
        title: "Phân tích",
        description:
          "Dịch vụ bảo dưỡng hồ bơi đáng tin cậy để bạn có thể tận hưởng hồ bơi một cách dễ dàng và không gặp phiền toái.",
        iconName: "analyze",
        priceNote: "Từ 450.000đ / lần",
        details: [
          "Đo chỉ số pH (7.2 - 7.6) và nồng độ Clo dư tiêu chuẩn",
          "Phân tích độ cứng canxi, độ kiềm tổng và kim loại nặng",
          "Xử lý nước xanh rêu hoặc đục trắng trong vòng 12 giờ",
        ],
      },
    ],
  },
  aboutHeritageSection: {
    experienceYearsNumber: "25+",
    experienceBadgeText:
      "Kinh nghiệm nhiều năm trong dịch vụ bảo dưỡng hồ bơi.",
    mainImage:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    eyebrow: "Về Công Ty Chúng Tôi",
    title: "Một di sản về dịch vụ bể bơi xuất sắc",
    description:
      "Đội ngũ của chúng tôi bao gồm kỹ thuật viên có chứng chỉ và có kinh nghiệm phong phú trong việc bảo dưỡng và bảo trì hồ bơi. Chúng tôi luôn cập nhật thông tin về các xu hướng và các phương pháp tốt nhất trong ngành công nghiệp.",
    mission: {
      title: "Sứ mệnh",
      text: "Thời gian của bạn rất quý báu, đó là lý do tại sao chúng tôi cam kết luôn hoàn thành sớm nhất.",
    },
    vision: {
      title: "Tầm nhìn",
      text: "Chúng tôi luôn tận tâm vào mỗi dự án để phản ánh sự độc đáo của từng hồ bơi.",
    },
    ctaText: "VỀ CHÚNG TÔI",
  },
  darkCalloutBanner: {
    eyebrow: "Hãy Thoải Mái Liên Hệ Với Chúng Tôi.",
    title: "Nhận dịch vụ hồ bơi cao cấp từ chúng tôi!",
    primaryCta: "DỊCH VỤ CỦA CHÚNG TÔI",
    secondaryCta: "LIÊN HỆ",
    backgroundImage:
      "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1600&q=80",
  },
  whyChooseUsSection: {
    eyebrow: "Tại Sao Nên Chọn Chúng Tôi",
    title: "Đầu ngành trong lĩnh vực bảo dưỡng hồ bơi",
    metrics: [
      {
        id: "metric-1",
        percentage: 85,
        title: "Nhiều giải pháp",
        description: "Chúng tôi hiểu rằng mỗi hồ bơi là duy nhất.",
      },
      {
        id: "metric-2",
        percentage: 95,
        title: "Kinh nghiệm",
        description:
          "Đội ngũ của chúng tôi bao gồm các kỹ thuật viên có chứng chỉ.",
      },
      {
        id: "metric-3",
        percentage: 90,
        title: "Tin cậy",
        description:
          "Chúng tôi đặt ra mục tiêu làm việc hiệu quả và đáng tin cậy.",
      },
    ],
    subTitle:
      "Chúng tôi là một công ty dịch vụ và cải tạo hồ bơi chuyên nghiệp và thân thiện.",
    subDescription:
      "Các kỹ thuật viên được chứng nhận của chúng tôi thực hiện việc làm sạch và lọc hồ bơi định kỳ. Điều này bao gồm việc loại bỏ rác, lá cây và bất kỳ vật dụng nào từ bề mặt hồ bơi và bộ lọc để đảm bảo sự lưu thông nước đúng đắn.",
    highlights: [
      { id: "hl-1", title: "Dịch vụ cá nhân hóa" },
      { id: "hl-2", title: "Nhanh chóng, không chậm trễ" },
    ],
    bulletPoints: [
      "Làm sạch và hớt váng thường xuyên",
      "Đánh bóng và hút bụi đáy bể chuyên sâu",
    ],
    mainCircleImage:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=85",
    smallCircleImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80",
  },
  stats: [
    { id: "st-1", number: "2,565+", title: "Dự án hoàn thành thành công" },
    { id: "st-2", number: "164+", title: "Thành viên nhóm chuyên gia" },
    { id: "st-3", number: "2,985+", title: "Khách hàng hài lòng" },
    { id: "st-4", number: "85+", title: "Giải thưởng" },
  ],
  expertsSection: {
    eyebrow: "Thành Viên",
    title: "Những chuyên gia của chúng tôi",
    description:
      "Đội ngũ của chúng tôi bao gồm các kỹ thuật viên được chứng nhận có nhiều kinh nghiệm trong việc bảo trì và bảo trì hồ bơi. Chúng tôi luôn cập nhật các xu hướng mới nhất của ngành và các phương pháp hay nhất để mang lại kết quả đặc biệt.",
    ctaText: "XEM THÊM",
    members: [
      {
        id: "mem-1",
        name: "Minh Tuấn",
        role: "Chuyên gia xử lý nước",
        experience: "12 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "mem-2",
        name: "Đức Thịnh",
        role: "Kỹ sư hệ thống lọc",
        experience: "10 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "mem-3",
        name: "Anh Dũng",
        role: "Kỹ thuật viên trưởng",
        experience: "9 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "mem-4",
        name: "Hoàng Sơn",
        role: "Chuyên viên bảo dưỡng",
        experience: "8 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  recentWorksSection: {
    eyebrow: "Hình Ảnh Nổi Bật",
    title: "Công việc bảo dưỡng hồ bơi gần đây",
    images: [
      {
        id: "wk-1",
        title: "Vệ sinh thang Inox & Thành bể Villa Quận 2",
        location: "Thảo Điền, TP. Thủ Đức",
        image:
          "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wk-2",
        title: "Vận hành Robot hút đáy hồ bơi tự động",
        location: "Khu đô thị Phú Mỹ Hưng, Quận 7",
        image:
          "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wk-3",
        title: "Kiểm tra & Cân bằng độ trong nguồn nước",
        location: "Resort Hồ Tràm, Bà Rịa - Vũng Tàu",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wk-4",
        title: "Bảo dưỡng hồ bơi tràn viền căn hộ Penthouse",
        location: "Vinhomes Central Park, Bình Thạnh",
        image:
          "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  testimonials: [
    {
      id: "test-1",
      author: "Ông Khôi",
      role: "Chủ biệt thự Thảo Điền",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Chúng tôi ở đây để giúp bạn dễ dàng và không phiền phức trong việc bảo dưỡng hồ bơi. Liên hệ với chúng tôi ngay hôm nay để lên lịch dịch vụ hoặc tìm hiểu thêm về kế hoạch bảo dưỡng của chúng tôi. Cảm ơn bạn đã xem xét sử dụng dịch vụ của chúng tôi.",
    },
    {
      id: "test-2",
      author: "Anh Long",
      role: "Quản lý Khu căn hộ Quận 7",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Đội ngũ kỹ thuật viên làm việc cực kỳ đúng giờ, đo độ pH và Clo dư rất bài bản mỗi tuần. Nước hồ bơi khu căn hộ của chúng tôi luôn trong vắt và không hề có mùi hóa chất nồng như trước đây.",
    },
    {
      id: "test-3",
      author: "Anh Hoàng",
      role: "Chủ chuỗi Homestay Nghỉ dưỡng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ vệ sinh hồ bơi và cảnh quan rất chuyên nghiệp. Hệ thống máy lọc được bảo trì định kỳ nên vận hành êm ái, tiết kiệm điện năng và chi phí sửa chữa đáng kể.",
    },
  ],
  newsletterBar: {
    title: "Đăng ký để nhận cập nhật và tin tức về chúng tôi.",
    placeholder: "Nhập email",
    buttonText: "ĐĂNG KÝ",
  },
  news: [
    {
      id: "blog-1",
      title: "Khoa Học Xử Lý Nước Hồ Bơi: Bí Quyết Giữ Nước Luôn Trong Xanh",
      date: "02 TH10, 2026",
      category: "Bởi Bể Bơi Xanh",
      excerpt:
        "Hướng dẫn kiểm soát nồng độ pH, độ kiềm tổng và lượng Clo dư an toàn giúp ngăn ngừa rêu tảo phát triển trong mùa mưa nắng thất thường.",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "blog-2",
      title: "Quy Trình Hút Cặn Đáy Và Vệ Sinh Hệ Thống Lọc Tuần Hoàn Chuẩn Kỹ Thuật",
      date: "02 TH10, 2026",
      category: "Bởi Bể Bơi Xanh",
      excerpt:
        "Các bước rửa ngược (Backwash) bình lọc cát và vệ sinh giỏ lọc máy bơm định kỳ giúp kéo dài tuổi thọ thiết bị gấp 2 lần.",
      image:
        "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "blog-3",
      title: "Cách Cải Tạo Không Gian Hồ Bơi Gia Đình Thành Khu Nghỉ Dưỡng Phong Cách",
      date: "02 TH10, 2026",
      category: "Bởi Bể Bơi Xanh",
      excerpt:
        "Kết hợp hệ thống đèn LED đổi màu âm nước, thác tràn phong thủy và cây xanh nhiệt đới nâng tầm đẳng cấp không gian sống.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
