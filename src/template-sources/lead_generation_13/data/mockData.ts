import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface YokoProgramItem {
  id: string;
  numberWatermark: string;
  title: string;
  description: string;
  ctaText: string;
  image: string;
}

export interface LeadGeneration13Data extends ClonedTemplateBaseData {
  heroStamp: {
    line1: string;
    line2: string;
    line3: string;
    highlightPercent: string;
    line4: string;
  };
  programs: YokoProgramItem[];
  featuredArticle: {
    title: string;
    excerpt: string;
    image: string;
  };
  sideArticles: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
  partnerSchools: Array<{
    id: string;
    code: string;
    name: string;
    jpSubtitle: string;
  }>;
  videoResource: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  pressMentions: Array<{
    id: string;
    name: string;
    tagline: string;
    color: string;
  }>;
  bottomBannerImage: string;
}

export const leadGeneration13DefaultData: LeadGeneration13Data = {
  business: {
    name: "YokoEdu",
    phone: ["1900 636 648", "0909 384 589"],
    email: ["info@themona.global", "tuyensinh@yokoedu.vn"],
    address: "319 C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    rating: 4.98,
    reviewCount: 4200,
    aboutTitle: "Sản phẩm của chúng tôi",
    aboutText: [
      "Du học Nhật Bản YOKO là đơn vị đầu tiên tại Việt Nam áp dụng chương trình MIỄN hoàn toàn PHÍ DỊCH VỤ và PHÍ XỬ LÝ HỒ SƠ TRỊ GIÁ 1000 USD cùng nhiều hỗ trợ toàn diện trong suốt quá trình.",
      "Với mạng lưới hơn 250 trường Nhật ngữ và Đại học danh tiếng tại Tokyo, Osaka, Kyoto, Fukuoka, chúng tôi cam kết tỷ lệ đỗ COE/Visa đạt trên 98%."
    ],
    experienceYears: "10+"
  },
  hero: {
    eyebrow: "TRUNG TÂM DU HỌC NHẬT BẢN UY TÍN HÀNG ĐẦU",
    title: "TUYỂN SINH DU HỌC NHẬT BẢN KỲ THÁNG 10",
    subtitle:
      "Miễn phí 100% chi phí dịch vụ xử lý hồ sơ trị giá 1.000 USD, hỗ trợ săn học bổng toàn phần và giới thiệu việc làm thêm tại Nhật Bản.",
    ctaText: "ĐĂNG KÝ NGAY",
    ctaLink: "#dang-ky",
    backgroundImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
    ]
  },
  heroStamp: {
    line1: "TUYỂN SINH",
    line2: "DU HỌC",
    line3: "NHẬT BẢN KỲ THÁNG 10/2026",
    highlightPercent: "100%",
    line4: "CHI PHÍ DỊCH VỤ HỒ SƠ"
  },
  programs: [
    {
      id: "prg-1",
      numberWatermark: "1",
      title: "DU HỌC NHẬT BẢN CÙNG YOKO",
      description:
        "Du học Nhật Bản YOKO là đơn vị đầu tiên tại Việt Nam áp dụng chương trình MIỄN hoàn toàn PHÍ DỊCH VỤ và PHÍ XỬ LÝ HỒ SƠ TRỊ GIÁ 1000 USD cùng nhiều hỗ trợ toàn diện trong suốt quá trình từ chọn trường đến khi nhập học tại Nhật.",
      ctaText: "Xem chi tiết",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prg-2",
      numberWatermark: "2",
      title: "CHƯƠNG TRÌNH HỌC TIẾNG NHẬT HIỆN ĐẠI",
      description:
        "Nhằm trang bị vốn tiếng Nhật vững chắc cũng như kỹ năng sống và học tập tại Nhật Bản, trung tâm tiếng Nhật YOKO sáng tạo ra phương pháp đào tạo tiếng Nhật cấp tốc N5 - N2 hoàn toàn mới, kết hợp giao tiếp phản xạ cùng giáo viên bản xứ.",
      ctaText: "Tìm hiểu thêm",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prg-3",
      numberWatermark: "3",
      title: "HỌC TIẾNG NHẬT ONLINE CÙNG CHUYÊN GIA",
      description:
        "Chương trình đào tạo tiếng Nhật và kỹ năng đặc định Online của YOKO đặc biệt chú trọng vào chất lượng giảng dạy với giáo án được biên soạn chuẩn JLPT thực tế. Hệ thống lớp học trực tuyến tương tác trực tiếp cùng giảng viên giúp học viên đạt điểm số cao nhất.",
      ctaText: "Tìm hiểu thêm",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    }
  ],
  featuredArticle: {
    title: "CHI PHÍ DU HỌC NHẬT BẢN TẠI YOKO",
    excerpt:
      "LÀ TRUNG TÂM CÓ CHI PHÍ DU HỌC NHẬT BẢN MINH BẠCH NHẤT - MIỄN PHÍ DỊCH VỤ: Miễn phí tư vấn chọn trường và liên hệ trường, MIỄN PHÍ 100% PHÍ XỬ LÝ HỒ SƠ...",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  sideArticles: [
    {
      id: "sa-1",
      title: "HỒ SƠ DU HỌC NHẬT BẢN GỒM NHỮNG LOẠI GIẤY TỜ GÌ?",
      date: "16/04/2026",
      excerpt:
        "Tổng hợp danh mục giấy tờ cá nhân, bằng cấp và hồ sơ chứng minh tài chính cần chuẩn bị để đạt tỷ lệ đỗ COE cao nhất [...]",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sa-2",
      title: "ĐI DU HỌC NHẬT BẢN CÓ TỐT KHÔNG? CƠ HỘI VIỆC LÀM RA SAO?",
      date: "16/04/2026",
      excerpt:
        "Phân tích lộ trình học tập, chế độ làm thêm 28 giờ/tuần và cơ hội chuyển đổi visa kỹ sư làm việc lâu dài tại Nhật Bản [...]",
      image:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sa-3",
      title: "Du Học Nhật Bản Vừa Học Vừa Làm: Kinh Nghiệm Săn Học Bổng",
      date: "16/04/2026",
      excerpt:
        "Hiện nay, hình thức đi du học Nhật Bản vừa học vừa làm kết hợp học bổng báo chí, điều dưỡng giúp tiết kiệm tối đa chi phí [...]",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
    }
  ],
  partnerSchools: [
    {
      id: "ps-1",
      code: "ECC",
      name: "Học viện Quốc tế ECC Osaka",
      jpSubtitle: "ECC国際外語専門学校"
    },
    {
      id: "ps-2",
      code: "MCA",
      name: "Học viện Nhật ngữ Mitsumine",
      jpSubtitle: "ミツミネキャリアアカデミー"
    },
    {
      id: "ps-3",
      code: "WE",
      name: "Trường Nhật ngữ Waseda Edu",
      jpSubtitle: "早稲田EDU日本語学校"
    },
    {
      id: "ps-4",
      code: "AKM",
      name: "Trường Nhật ngữ Akamonkai",
      jpSubtitle: "赤門会日本語学校"
    },
    {
      id: "ps-5",
      code: "ARC",
      name: "Học viện Nhật ngữ ARC Tokyo",
      jpSubtitle: "ARC東京日本語学校"
    },
    {
      id: "ps-6",
      code: "HA",
      name: "Học viện Human Academy",
      jpSubtitle: "ヒューマンアカデミー"
    },
    {
      id: "ps-7",
      code: "J-K",
      name: "Học viện Quốc tế J-Kokusai",
      jpSubtitle: "J国際学院"
    },
    {
      id: "ps-8",
      code: "FFLC",
      name: "Cao đẳng Ngoại ngữ Fukuoka",
      jpSubtitle: "福岡外語専門学校"
    }
  ],
  videoResource: {
    title: "Học tiếng Nhật Online cùng cô giáo Du Hằng",
    subtitle: "Học tiếng Nhật online cùng cô Du Hằng.",
    ctaText: "Xem thêm video",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  },
  pressMentions: [
    {
      id: "pm-1",
      name: "DÂN TRÍ",
      tagline: "DIỄN ĐÀN DÂN TRÍ VIỆT NAM",
      color: "text-emerald-700"
    },
    {
      id: "pm-2",
      name: "Hànộimới",
      tagline: "BÁO ĐIỆN TỬ HÀ NỘI MỚI",
      color: "text-red-700"
    },
    {
      id: "pm-3",
      name: "Tiin.vn",
      tagline: "TRANG TIN GIỚI TRẺ & GIÁO DỤC",
      color: "text-pink-600"
    },
    {
      id: "pm-4",
      name: "SỨC KHỎE & ĐỜI SỐNG",
      tagline: "CƠ QUAN NGÔN LUẬN BỘ Y TẾ",
      color: "text-red-600"
    }
  ],
  bottomBannerImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
};

export default leadGeneration13DefaultData;
