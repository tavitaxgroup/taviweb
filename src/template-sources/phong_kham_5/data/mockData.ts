import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham5Data extends ClonedTemplateBaseData {
  nutritionPillars: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: "scale" | "calories" | "menu" | "workout";
  }>;
  expertSection: {
    scriptEyebrow: string;
    title: string;
    description: string;
    image: string;
    stat1Number: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Number: string;
    stat2Label: string;
    stat2Desc: string;
  };
  videoBanner: {
    scriptEyebrow: string;
    title: string;
    backgroundImage: string;
  };
  benefitsSection: {
    scriptEyebrow: string;
    title: string;
    description: string;
    steps: string[];
    image: string;
    badgeText: string;
  };
  patientStory: {
    scriptEyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    author: string;
    location: string;
    avatar: string;
    backgroundImage: string;
  };
  featuredBlog: {
    badge: string;
    day: string;
    month: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

export const phongKham5DefaultData: PhongKham5Data = {
  business: {
    name: "Mona Dietitian",
    phone: ["1900 636 648", "0909 636 648"],
    email: ["info@themona.global", "tuvan@monadietitian.vn"],
    address:
      "Công ty TNHH – MONA MEDIA, 1073/23 Đ. Cách Mạng Tháng 8, P.7, Tân Bình, Thành phố Hồ Chí Minh",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 1250,
    experienceYears: "12+ Năm",
    aboutTitle:
      "Giao phó chế độ ăn uống và sức khỏe của bạn cho các chuyên gia thực sự",
    aboutText: [
      "Tại Mona Dietitian, chúng tôi cung cấp các dịch vụ khám và tư vấn dinh dưỡng lâm sàng đa dạng, giúp bạn cải thiện sức khỏe chuyển hóa và vóc dáng một cách khoa học. Với đội ngũ bác sĩ và chuyên gia dinh dưỡng hàng đầu Việt Nam, chúng tôi cam kết mang đến phác đồ thực đơn cá nhân hóa tốt nhất."
    ],
    highlights: [
      "Phân tích thành phần cơ thể InBody chuyên sâu",
      "Thiết kế thực đơn cá nhân hóa theo chỉ số xét nghiệm",
      "Kiểm soát cân nặng khoa học không cần nhịn ăn cực đoan",
      "Đồng hành 1:1 cùng Bác sĩ Dinh dưỡng suốt lộ trình"
    ]
  },
  hero: {
    eyebrow: "Thay đổi lối sống của bạn",
    title: "Luôn khỏe mạnh với Chế độ ăn kiêng của chúng tôi",
    subtitle: "Tư vấn bởi những chuyên gia dinh dưỡng hàng đầu của chúng tôi",
    description:
      "Khám phá phác đồ dinh dưỡng cân bằng giúp thanh lọc cơ thể, tăng cường miễn dịch và duy trì vóc dáng thon gọn bền vững.",
    ctaText: "Xem giới thiệu",
    ctaLink: "#gioi-thieu",
    secondaryCtaText: "Liên hệ",
    secondaryCtaLink: "#dat-lich-hen",
    backgroundImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=85"
  },
  nutritionPillars: [
    {
      id: "np-1",
      title: "Giảm cân",
      subtitle: "Mục tiêu & kế hoạch",
      icon: "scale"
    },
    {
      id: "np-2",
      title: "Lộ trình cá nhân",
      subtitle: "Lượng calo",
      icon: "calories"
    },
    {
      id: "np-3",
      title: "Đề án dinh dưỡng",
      subtitle: "Thực đơn của bạn",
      icon: "menu"
    },
    {
      id: "np-4",
      title: "Hoạt động thể chất",
      subtitle: "Bài tập",
      icon: "workout"
    }
  ],
  expertSection: {
    scriptEyebrow: "đạt được kết quả tốt hơn",
    title:
      "Giao phó chế độ ăn uống và sức khỏe của bạn cho các chuyên gia thực sự",
    description:
      "Tại Mona Dietitian, chúng tôi cung cấp các dịch vụ dinh dưỡng đa dạng, giúp bạn cải thiện sức khỏe và vóc dáng. Với đội ngũ chuyên gia dinh dưỡng hàng đầu Việt Nam, chúng tôi cam kết mang đến cho bạn những dịch vụ dinh dưỡng tốt nhất.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    stat1Number: "1000+",
    stat1Label: "Khách hàng",
    stat1Desc: "Cải thiện vóc dáng và chỉ số sức khỏe bền vững",
    stat2Number: "20+",
    stat2Label: "Chuyên gia",
    stat2Desc: "Bác sĩ và Cử nhân Dinh dưỡng giàu kinh nghiệm"
  },
  videoBanner: {
    scriptEyebrow: "kế hoạch & công thức nấu ăn",
    title:
      "Hãy thử một chút và thấy rằng chế độ ăn uống lành mạnh có thể trở nên ngon miệng!",
    backgroundImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1800&q=85"
  },
  benefitsSection: {
    scriptEyebrow: "thay đổi cuộc sống của bạn",
    title: "Lợi ích sức khỏe của chế độ ăn uống của chúng ta",
    description:
      "Chế độ dinh dưỡng chuẩn y khoa giúp cân bằng hệ vi sinh đường ruột, ổn định đường huyết, giảm mỡ nội tạng và mang lại nguồn năng lượng dồi dào cho cả ngày làm việc.",
    steps: ["01. Chiến lược dinh dưỡng", "02. Chuyển đổi dần dần"],
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=85",
    badgeText: "Bây giờ hãy thử điều gì đó khác biệt"
  },
  services: [
    {
      id: "pk5-s1",
      title: "Chế độ dinh dưỡng cân đối",
      description:
        "Thiết kế khẩu phần đa dạng dưỡng chất phù hợp với thể trạng và thói quen sinh hoạt của từng cá nhân.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pk5-s2",
      title: "Ước tính trọng lượng",
      description:
        "Đo lường tỷ lệ cơ - mỡ - nước bằng thiết bị InBody hiện đại để xây dựng mục tiêu giảm mỡ chuẩn xác.",
      image:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pk5-s3",
      title: "Công thức nấu ăn lành mạnh",
      description:
        "Hơn 200 công thức chế biến món ăn Eat Clean giữ trọn hương vị tự nhiên, dễ dàng chuẩn bị tại nhà.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80"
    }
  ],
  patientStory: {
    scriptEyebrow: "cảm nhận khách hàng",
    title: "Khách hàng của chúng tôi",
    paragraph1:
      "Sau 3 tháng đồng hành cùng bác sĩ dinh dưỡng tại phòng khám, tôi đã giảm được 8kg mỡ thừa mà cơ thể vẫn tràn đầy năng lượng, làn da sáng khỏe và giấc ngủ sâu hơn rất nhiều.",
    paragraph2:
      "Thực đơn được thiết kế từ những nguyên liệu gần gũi, dễ nấu và hợp khẩu vị gia đình Việt Nam nên tôi duy trì thói quen ăn uống lành mạnh mỗi ngày một cách hoàn toàn thoải mái.",
    author: "Cô Mai Hương",
    location: "Quận 3, TP.HCM",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1800&q=85"
  },
  featuredBlog: {
    badge: "Tư duy",
    day: "21",
    month: "Th4",
    title: "Những thứ phải có trong Sách Công thức nấu ăn cho mùa hè của bạn",
    excerpt:
      "Tổng hợp các loại trái cây giàu chất chống oxy hóa, sinh tố rau xanh thanh nhiệt và cách kết hợp protein thực vật giúp giữ dáng trong ngày hè.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  news: [
    {
      id: "pk5-n1",
      title: "Tất cả các chế độ ăn kiêng tuyệt vời nhất đều thực sự đơn giản",
      date: "21 Tháng Tư, 2025",
      category: "Tư duy",
      excerpt: "Bí quyết duy trì vóc dáng cân đối mà không cần kiêng khem hà khắc.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pk5-n2",
      title: "Cách hỗ trợ hệ thống miễn dịch của bạn trong mùa đông này",
      date: "18 Tháng Tư, 2025",
      category: "Tư duy",
      excerpt: "Nhóm vitamin C, kẽm và thực phẩm lên men tự nhiên tốt cho đề kháng.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pk5-n3",
      title: "Nếu tâm trí bạn cần một kỳ nghỉ thì cơ thể bạn cũng vậy",
      date: "12 Tháng Tư, 2025",
      category: "Tư duy",
      excerpt: "Liệu pháp Detox thanh lọc hệ tiêu hóa nhẹ nhàng cuối tuần.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80"
    }
  ]
};
