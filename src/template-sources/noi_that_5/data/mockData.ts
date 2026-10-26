import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat5ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface NoiThat5HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface NoiThat5TemplateData extends ClonedTemplateBaseData {
  corporationTagline: string;
  heroSlides: NoiThat5HeroSlide[];
  processSteps: NoiThat5ProcessStep[];
  projectCategories: string[];
  processBackgroundImage: string;
  clientsBackgroundImage: string;
  skypeAccount: string;
}

export const noiThat5DefaultData: NoiThat5TemplateData = {
  business: {
    name: "ADT DECOR",
    logo: "",
    phone: ["0126 922 0162", "0909 882 162"],
    email: ["demonhunter@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Thứ 2 – Thứ 6 | 08:00 – 17:00",
    rating: 4.9,
    reviewCount: 280,
    experienceYears: "15+",
    aboutTitle: "ADT DECOR CUNG CẤP",
    aboutText: [
      "ADT DECOR là một trong những chuyên gia hàng đầu trong lĩnh vực thiết kế và thi công nội thất văn phòng, nhà hàng, bar, cafe, spa, nhà ở. Với hơn 15 năm kinh nghiệm trong ngành, chúng tôi đem đến cho khách hàng một không gian sống và làm việc không chỉ mang tính thẩm mỹ cao, đảm bảo công năng sử dụng mà trên hết còn thể hiện được nét riêng và văn hóa của mỗi gia đình, mỗi doanh nghiệp."
    ]
  },
  corporationTagline: "CORPORATION",
  hero: {
    eyebrow: "THẾ MẠNH CỦA CHÚNG TÔI LÀ",
    title: "THIẾT KẾ NỘI THẤT",
    subtitle:
      "Kiến tạo không gian văn phòng sáng tạo, chuỗi nhà hàng - cafe, showroom và biệt thự hiện đại với giải pháp thiết kế & thi công trọn gói chuẩn mực.",
    ctaText: "DỰ ÁN CỦA CHÚNG TÔI",
    ctaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=85"
  },
  heroSlides: [
    {
      id: "slide-1",
      eyebrow: "THẾ MẠNH CỦA CHÚNG TÔI LÀ",
      title: "THIẾT KẾ NỘI THẤT",
      subtitle:
        "Kiến tạo không gian văn phòng sáng tạo, chuỗi nhà hàng - cafe, showroom và biệt thự hiện đại với giải pháp thiết kế & thi công trọn gói chuẩn mực.",
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=85"
    },
    {
      id: "slide-2",
      eyebrow: "GIẢI PHÁP KHÔNG GIAN THƯƠNG MẠI",
      title: "THI CÔNG TRỌN GÓI",
      subtitle:
        "Sở hữu xưởng sản xuất nội thất quy mô lớn cùng đội ngũ kỹ sư giám sát giàu kinh nghiệm, cam kết tiến độ và chất lượng hoàn thiện sắc nét.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85"
    },
    {
      id: "slide-3",
      eyebrow: "NÂNG TẦM GIÁ TRỊ THƯƠNG HIỆU",
      title: "KIẾN TRÚC ĐƯƠNG ĐẠI",
      subtitle:
        "Mỗi bản vẽ là một tác phẩm độc bản phản ánh bản sắc văn hóa doanh nghiệp và phong cách sống tinh tế của từng gia chủ.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "THIẾT KẾ VÀ THI CÔNG NỘI THẤT",
      description:
        "Dịch vụ trọn gói cung cấp thiết kế và thi công nội thất tại ADT Decor là một sự lựa chọn hoàn hảo cho khách hàng bởi công ty luôn sáng tạo với những ý tưởng thiết kế mới lạ và hoàn hảo trong việc thi công theo bản vẽ thiết kế.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "THIẾT KẾ NỘI THẤT",
      description:
        "Với đội ngũ kiến trúc sư nội thất dồi dào kinh nghiệm, công ty sẽ mang đến cho khách hàng những ý tưởng thiết kế tuyệt vời phù hợp với công năng và nhu cầu sử dụng đồng thời thể hiện được giá trị thương hiệu trong từng thiết kế.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "THIẾT KẾ VÀ THI CÔNG NỘI THẤT",
      description:
        "Công ty sở hữu xưởng gỗ quy mô với đội ngũ thi công và giám sát lành nghề, luôn đảm bảo tiến độ hoàn thành dự án đúng quy định và độ tinh xảo vượt trội so với bản vẽ thiết kế của khách hàng.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
    }
  ],
  processBackgroundImage:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
  processSteps: [
    {
      id: "step-1",
      stepNumber: "01",
      title: "TÌM HIỂU &\nTHẢO LUẬN\nYÊU CẦU",
      description:
        "Nhận yêu cầu khách hàng thông qua gặp gỡ trực tiếp, hai bên sẽ thảo luận để thống nhất được nhu cầu chung cho thiết kế",
      deliverables: "Biên bản khảo sát hiện trạng & Nhiệm vụ thiết kế"
    },
    {
      id: "step-2",
      stepNumber: "02",
      title: "ĐỀ XUẤT &\nTHẢO LUẬN\nPHƯƠNG ÁN",
      description:
        "Kiến trúc sư lên mặt bằng bố trí công năng 2D và moodboard ý tưởng vật liệu, màu sắc chủ đạo để thảo luận chi tiết cùng khách hàng.",
      deliverables: "Bản vẽ mặt bằng 2D & Concept Moodboard"
    },
    {
      id: "step-3",
      stepNumber: "03",
      title: "DUYỆT\nPHƯƠNG ÁN\nTHIẾT KẾ",
      description:
        "Hoàn thiện phối cảnh 3D sắc nét cho từng không gian và hồ sơ bản vẽ kỹ thuật thi công chi tiết để khách hàng nghiệm thu phê duyệt.",
      deliverables: "Phối cảnh 3D hoàn chỉnh & Hồ sơ kỹ thuật thi công"
    },
    {
      id: "step-4",
      stepNumber: "04",
      title: "DUYỆT BÁO\nGIÁ THI\nCÔNG",
      description:
        "Lập bảng dự toán bóc tách khối lượng thi công minh bạch, trình mẫu vật liệu gỗ, đá, kim loại thực tế tại văn phòng hoặc công trình.",
      deliverables: "Bảng dự toán chi tiết & Bảng mẫu vật liệu thực tế"
    },
    {
      id: "step-5",
      stepNumber: "05",
      title: "KÝ HỢP\nĐỒNG",
      description:
        "Hai bên tiến hành ký kết hợp đồng thi công nội thất với cam kết rõ ràng về tiến độ bàn giao, chất lượng sản xuất tại xưởng và chế độ bảo hành.",
      deliverables: "Hợp đồng thi công & Tiến độ triển khai chi tiết"
    }
  ],
  projectCategories: [
    "TẤT CẢ DỰ ÁN",
    "NHÀ PHỐ",
    "CĂN HỘ",
    "BIỆT THỰ",
    "VĂN PHÒNG"
  ],
  projects: [
    {
      id: "nt5-p1",
      title: "Văn Phòng Sáng Tạo Design & Form",
      category: "VĂN PHÒNG",
      location: "Quận 1, TP.HCM",
      price: "420 m²",
      description:
        "Thiết kế sảnh đón và khu vực thảo luận mở sử dụng mảng tường gỗ ấm kết hợp sofa vàng năng động cho công ty sáng tạo.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p2",
      title: "Showroom Thời Trang & Studio MonaMoon",
      category: "VĂN PHÒNG",
      location: "Quận 3, TP.HCM",
      price: "280 m²",
      description:
        "Không gian trưng bày thời trang cao cấp với hệ đèn thả nghệ thuật, sofa cong mềm mại và ánh sáng tôn vinh sản phẩm.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p3",
      title: "Trụ Sở Tập Đoàn Công Nghệ Iconic",
      category: "VĂN PHÒNG",
      location: "Quận 7, TP.HCM",
      price: "650 m²",
      description:
        "Không gian làm việc hiện đại sử dụng vách kính cường lực, tông màu trắng - xanh chủ đạo tạo cảm giác chuyên nghiệp và thoáng đãng.",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p4",
      title: "Biệt Thự Tân Cổ Điển Phú Mỹ Hưng",
      category: "BIỆT THỰ",
      location: "Quận 7, TP.HCM",
      price: "540 m²",
      description:
        "Phòng khách biệt thự sang trọng kết hợp vách lam gỗ, phào chỉ tinh tế và bộ sofa kem thanh lịch.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p5",
      title: "Không Gian Bếp & Phòng Ăn Nhà Phố Sala",
      category: "NHÀ PHỐ",
      location: "TP. Thủ Đức, TP.HCM",
      price: "320 m²",
      description:
        "Thiết kế bếp mở kết hợp bàn đảo quầy bar ốp gỗ tự nhiên và cửa kính lớn đón trọn ánh sáng sân vườn.",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p6",
      title: "Căn Hộ Duplex Hiện Đại Vinhomes",
      category: "CĂN HỘ",
      location: "Bình Thạnh, TP.HCM",
      price: "185 m²",
      description:
        "Phòng khách căn hộ phong cách tối giản đương đại với sofa chữ L rộng rãi và chất liệu bê tông mài cá tính.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p7",
      title: "Biệt Thự Nghỉ Dưỡng & Thư Viện Gia Đình",
      category: "BIỆT THỰ",
      location: "Thảo Điền, TP.HCM",
      price: "600 m²",
      description:
        "Hệ kệ sách kịch trần quy mô lớn kết hợp không gian sinh hoạt chung ấm cúng ngập tràn cây xanh.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt5-p8",
      title: "Penthouse Panorama View Sông Sài Gòn",
      category: "CĂN HỘ",
      location: "Quận 2, TP.HCM",
      price: "310 m²",
      description:
        "Không gian phòng khách nối liền bàn ăn với hệ cửa kính toàn cảnh hướng sông và nội thất gỗ óc chó.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
    }
  ],
  clientsBackgroundImage:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
  clients: [
    { id: "cl-iconic", name: "iconic" },
    { id: "cl-fpt", name: "FPT" },
    { id: "cl-kobe", name: "KOBE BBQ" },
    { id: "cl-monhue", name: "MÓN HUẾ" }
  ],
  news: [
    {
      id: "news-1",
      title: "Thiết kế nội thất văn phòng – công ty quảng cáo",
      date: "12/05/2026",
      category: "VĂN PHÒNG",
      excerpt: "Không gian làm việc chuyên nghiệp, sáng tạo...",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "news-2",
      title: "Thiết kế, thi công nội thất showroom thời trang MonaMoon",
      date: "18/05/2026",
      category: "SHOWROOM",
      excerpt: "Sự tinh tế, thời thượng bắt mắt...",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "news-3",
      title: "Thiết kế, thi công nội thất cửa hàng 365 Nail",
      date: "24/05/2026",
      category: "SPA & SALON",
      excerpt: "Tiệm nail được thiết kế theo phong cách...",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80"
    }
  ],
  skypeAccount: "demonhunterp"
};

export default noiThat5DefaultData;
