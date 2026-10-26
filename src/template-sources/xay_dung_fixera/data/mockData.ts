import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung3ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface XayDung3ProgressMetric {
  id: string;
  label: string;
  percentage: number;
}

export interface XayDung3FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface XayDung3PricingPackage {
  id: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  pricePerM2: string;
  unitNote: string;
  description: string;
  image: string;
  highlights: Array<{
    title: string;
    desc: string;
  }>;
  checklist: string[];
}

export interface XayDung3TemplateData extends ClonedTemplateBaseData {
  processSteps: XayDung3ProcessStep[];
  progressMetrics: XayDung3ProgressMetric[];
  featureCards: XayDung3FeatureCard[];
  pricingPackages: XayDung3PricingPackage[];
  projectCategories: string[];
}

export const xayDung3DefaultData: XayDung3TemplateData = {
  business: {
    name: "Fixera Construction",
    logo: "",
    phone: ["0909 686 888", "028 3811 6868"],
    email: ["info@fixera.vn", "duan@fixera.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 286,
    experienceYears: "25+",
    aboutTitle: "Giải pháp tối ưu về thiết kế xây dựng và sửa chữa",
    aboutText: [
      "Fixera Construction cung cấp đầy đủ các dịch vụ thiết kế kiến trúc, thi công xây dựng trọn gói, sửa chữa và cải tạo công trình cho cả gia đình, biệt thự và công nghiệp. Chúng tôi mang đến phân tích chuyên sâu, dự toán minh bạch và giải pháp kỹ thuật tối ưu hóa cho từng dự án.",
      "Với hơn 25 năm kinh nghiệm thực chiến cùng đội ngũ kỹ sư, kiến trúc sư giàu tâm huyết, Fixera cam kết đồng hành cùng chủ đầu tư kiến tạo những công trình bền vững, thẩm mỹ và đúng tiến độ 100%."
    ],
    highlights: [
      "Được chuyên gia chứng nhận",
      "Đội ngũ kỹ sư kinh nghiệm",
      "Được khách hàng tin tưởng",
      "Sử dụng thiết bị hiện đại",
      "Hỗ trợ nhanh chóng, hiệu quả",
      "Chi phí siêu tiết kiệm"
    ]
  },
  hero: {
    eyebrow: "ĐỒNG HÀNH CÙNG MỌI CÔNG TRÌNH",
    title: "Giải Pháp Thiết Kế & Thi Công Xây Dựng Trọn Gói",
    subtitle:
      "Hãy liên hệ Fixera Construction để nhận được sự tư vấn kiến trúc chuyên sâu, bảng dự toán chi tiết và dịch vụ thi công chuẩn mực quốc tế.",
    ctaText: "NHẬN BÁO GIÁ",
    ctaLink: "#bao-gia",
    secondaryCtaText: "XEM DỰ ÁN TIÊU BIỂU",
    secondaryCtaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  stats: [
    {
      id: "stat-1",
      number: "100+",
      title: "Dự án lớn",
      subtitle: "Đang triển khai toàn quốc"
    },
    {
      id: "stat-2",
      number: "88+",
      title: "Kỹ sư giỏi",
      subtitle: "Chứng chỉ hành nghề hạng I"
    },
    {
      id: "stat-3",
      number: "20k+",
      title: "Hoàn thiện",
      subtitle: "Mét vuông sàn xây dựng"
    },
    {
      id: "stat-4",
      number: "100%",
      title: "Hài lòng",
      subtitle: "Khách hàng đánh giá 5 sao"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Thiết kế kiến trúc",
      category: "THIẾT KẾ XÂY DỰNG",
      description:
        "Tư vấn quy hoạch mặt bằng công năng, thiết kế phối cảnh 3D ngoại thất, kết cấu M&E và hồ sơ xin phép xây dựng trọn gói.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      icon: "compass",
      price: "Từ 180.000đ/m²"
    },
    {
      id: "srv-2",
      title: "Thi công xây dựng",
      category: "THI CÔNG TRỌN GÓI",
      description:
        "Thi công xây dựng phần thô và chìa khóa trao tay cho nhà phố, biệt thự, tòa nhà văn phòng với vật tư chính hãng 100%.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80",
      icon: "hardhat",
      price: "Từ 3.650.000đ/m²"
    },
    {
      id: "srv-3",
      title: "Sửa chữa & Cải tạo",
      category: "NÂNG CẤP CÔNG TRÌNH",
      description:
        "Gia cố kết cấu, nâng tầng, cải tạo mặt tiền, chống thấm chuyên sâu và hoàn thiện lại toàn bộ không gian nội ngoại thất.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
      icon: "wrench",
      price: "Khảo sát báo giá"
    }
  ],
  projectCategories: [
    "Tất cả",
    "Đã hoàn thành",
    "Đang thi công",
    "Dự án nhà phố"
  ],
  projects: [
    {
      id: "prj-1",
      title: "Tổ Hợp Cao Ốc Văn Phòng Fixera Tower",
      category: "Đang thi công",
      location: "Quận 1, TP.HCM",
      description:
        "Thi công kết cấu bê tông cốt thép và hệ mặt dựng kính Low-E 18 tầng tiêu chuẩn xanh LEED.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80",
      price: "Quy mô: 12.500 m²"
    },
    {
      id: "prj-2",
      title: "Khu Biệt Thự Phố Thương Mại Lakeview",
      category: "Đang thi công",
      location: "TP. Thủ Đức, TP.HCM",
      description:
        "Thi công phần thô và hoàn thiện mặt ngoài dãy 16 căn shophouse & biệt thự song lập.",
      image:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=900&q=80",
      price: "Quy mô: 6.800 m²"
    },
    {
      id: "prj-3",
      title: "Nhà Phố Hiện Đại 4 Tầng Lê Văn Sỹ",
      category: "Dự án nhà phố",
      location: "Quận Phú Nhuận, TP.HCM",
      description:
        "Thiết kế và thi công trọn gói nhà phố lệch tầng kết hợp lam chắn nắng thông gió tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      price: "Quy mô: 420 m²"
    },
    {
      id: "prj-4",
      title: "Biệt Thự Nghỉ Dưỡng Đồi Thông Hilltop",
      category: "Đã hoàn thành",
      location: "Đà Lạt, Lâm Đồng",
      description:
        "Biệt thự nghỉ dưỡng mái thái hiện đại kết hợp sân vườn cảnh quan và hệ khung kính toàn cảnh.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      price: "Quy mô: 650 m²"
    },
    {
      id: "prj-5",
      title: "Biệt Thự Vườn Tân Cổ Điển Riverside",
      category: "Đã hoàn thành",
      location: "Quận 7, TP.HCM",
      description:
        "Công trình biệt thự đơn lập 3 tầng hoàn thiện chìa khóa trao tay với hồ bơi tràn viền.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      price: "Quy mô: 820 m²"
    },
    {
      id: "prj-6",
      title: "Nhà Phố Kết Hợp Văn Phòng Tân Bình",
      category: "Dự án nhà phố",
      location: "Quận Tân Bình, TP.HCM",
      description:
        "Giải pháp nhà phố 1 hầm 5 tầng tích hợp thang máy kính và không gian làm việc hiện đại.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
      price: "Quy mô: 560 m²"
    }
  ],
  processSteps: [
    {
      id: "step-1",
      number: "01",
      title: "01. Khảo sát & Tư vấn",
      description:
        "Đo đạc hiện trạng khu đất, kiểm tra địa chất, lắng nghe nhu cầu công năng và tư vấn giải pháp pháp lý xây dựng."
    },
    {
      id: "step-2",
      number: "02",
      title: "02. Thiết kế & Dự toán",
      description:
        "Lập phương án kiến trúc 3D, hồ sơ kỹ thuật thi công chi tiết và bảng bóc tách dự toán vật tư cam kết không phát sinh."
    },
    {
      id: "step-3",
      number: "03",
      title: "03. Thi công & Nghiệm thu",
      description:
        "Tổ chức thi công chuẩn ISO, giám sát kỹ sư hiện trường 24/7, nghiệm thu từng giai đoạn và bàn giao bảo hành 10 năm."
    }
  ],
  progressMetrics: [
    { id: "pm-1", label: "An toàn lao động", percentage: 100 },
    { id: "pm-2", label: "Đúng tiến độ", percentage: 99 },
    { id: "pm-3", label: "Tối ưu chi phí", percentage: 98 }
  ],
  featureCards: [
    {
      id: "feat-1",
      title: "Vật tư chính hãng",
      description:
        "Cam kết 100% thép Việt Nhật, xi măng Holcim/Hà Tiên, cáp điện Cadivi có biên bản kiểm định đầu vào rõ ràng.",
      icon: "shield"
    },
    {
      id: "feat-2",
      title: "Đội ngũ kỹ sư giàu kinh nghiệm",
      description:
        "Kỹ sư chỉ huy trưởng trên 10 năm kinh nghiệm trực tiếp giám sát tại công trường mỗi ngày.",
      icon: "users"
    },
    {
      id: "feat-3",
      title: "Hợp đồng minh bạch",
      description:
        "Bóc tách khối lượng chi tiết từng hạng mục, cam kết bằng văn bản không phát sinh chi phí ngoài hợp đồng.",
      icon: "file-check"
    },
    {
      id: "feat-4",
      title: "Bảo hành kết cấu 10 năm",
      description:
        "Chế độ bảo hành kết cấu lên đến 10 năm, chống thấm 5 năm và bảo trì định kỳ mỗi 6 tháng.",
      icon: "award"
    }
  ],
  team: [
    {
      id: "team-1",
      name: "KS. Văn Long",
      position: "CEO & Giám đốc điều hành",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "team-2",
      name: "KS. Hào Lê",
      position: "Kỹ sư trưởng kết cấu",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "team-3",
      name: "KTS. Sâm Lại",
      position: "Kiến trúc sư chủ trì",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "team-4",
      name: "KS. Lộc Nguyễn",
      position: "Quản lý dự án cao cấp",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
    }
  ],
  pricingPackages: [
    {
      id: "pkg-1",
      tabLabel: "Xây nhà phần thô",
      eyebrow: "GÓI TIÊU CHUẨN KẾT CẤU",
      title: "Xây nhà phần thô & Nhân công hoàn thiện",
      pricePerM2: "3.650.000đ",
      unitNote: "/ m² sàn xây dựng",
      description:
        "Bao gồm toàn bộ vật tư phần thô chuẩn thương hiệu hàng đầu (Thép Việt Nhật, Xi măng Insee, Gạch Tuynel Bình Dương) và nhân công hoàn thiện trọn gói.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=800&q=80",
      highlights: [
        {
          title: "Miễn phí 100% hồ sơ thiết kế",
          desc: "Tặng bộ bản vẽ kết cấu, kiến trúc 3D và xin giấy phép xây dựng khi ký hợp đồng thi công."
        },
        {
          title: "Bảo hành kết cấu 10 năm",
          desc: "Kiểm định bê tông thương phẩm từng đợt đổ sàn và bảo hành chống thấm 5 năm."
        }
      ],
      checklist: [
        "Tổ chức công trường, lán trại, bao che an toàn toàn bộ công trình",
        "Đào móng, thi công cốt pha, cốt thép và đổ bê tông móng, dầm, sàn, cột",
        "Xây tô tường bao, tường ngăn phòng đúng tiêu chuẩn kỹ thuật",
        "Lắp đặt hệ thống ống điện âm tường, cấp thoát nước Bình Minh"
      ]
    },
    {
      id: "pkg-2",
      tabLabel: "Xây nhà trọn gói",
      eyebrow: "CHÌA KHÓA TRAO TAY",
      title: "Xây nhà trọn gói cao cấp",
      pricePerM2: "5.850.000đ",
      unitNote: "/ m² sàn xây dựng",
      description:
        "Giải pháp chìa khóa trao tay từ xin phép xây dựng, thiết kế 3D, thi công phần thô đến hoàn thiện thiết bị vệ sinh, gạch ốp lát, sơn nước và cửa nhôm Xingfa.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      highlights: [
        {
          title: "Miễn phí thiết kế & Xin phép",
          desc: "Bao trọn thủ tục xin phép xây dựng, hoàn công và bộ hồ sơ thiết kế nội ngoại thất."
        },
        {
          title: "Bảo hành kết cấu 10 năm",
          desc: "Cam kết không phát sinh chi phí, bàn giao nhà sạch sẽ sẵn sàng dọn vào ở ngay."
        }
      ],
      checklist: [
        "Trọn gói vật tư phần thô loại 1 + Vật tư hoàn thiện chính hãng",
        "Sơn nước Dulux/Jotun, gạch ốp lát Vietceramics/Đồng Tâm, thiết bị TOTO/Inax",
        "Hệ cửa nhôm Xingfa tem đỏ kính cường lực, lan can cầu thang hoàn chỉnh",
        "Hệ thống chiếu sáng Panasonic, trần thạch cao Vĩnh Tường chống ẩm"
      ]
    },
    {
      id: "pkg-3",
      tabLabel: "Thiết kế kiến trúc",
      eyebrow: "HỒ SƠ BẢN VẼ KỸ THUẬT",
      title: "Thiết kế kiến trúc & Phối cảnh 3D",
      pricePerM2: "180.000đ",
      unitNote: "/ m² sàn thiết kế",
      description:
        "Bộ hồ sơ thiết kế toàn diện gồm phối cảnh 3D mặt tiền, bản vẽ triển khai kiến trúc, kết cấu, điện nước M&E và dự toán chi tiết từng hạng mục.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      highlights: [
        {
          title: "Tối ưu phong thủy & Công năng",
          desc: "Bố trí mặt bằng chuẩn phong thủy khoa học, tối ưu thông gió và ánh sáng tự nhiên."
        },
        {
          title: "Hoàn tiền 100% phí thiết kế",
          desc: "Khấu trừ toàn bộ chi phí thiết kế khi khách hàng ký hợp đồng thi công xây dựng."
        }
      ],
      checklist: [
        "Hồ sơ phối cảnh 3D ngoại thất và mặt bằng bố trí vật dụng các tầng",
        "Bản vẽ kết cấu móng, dầm, cột, sàn tính toán tải trọng an toàn",
        "Hồ sơ kỹ thuật điện, chiếu sáng, internet, camera, cấp thoát nước",
        "Bảng dự toán bóc tách khối lượng vật tư chính xác đến 99%"
      ]
    },
    {
      id: "pkg-4",
      tabLabel: "Cải tạo & Nội thất",
      eyebrow: "NÂNG CẤP KHÔNG GIAN SỐNG",
      title: "Cải tạo nâng tầng & Hoàn thiện nội thất",
      pricePerM2: "2.950.000đ",
      unitNote: "/ m² diện tích cải tạo",
      description:
        "Dịch vụ khảo sát kiểm định kết cấu, gia cố móng cột, nâng thêm tầng, thay đổi mặt tiền và thi công nội thất gỗ An Cường may đo theo yêu cầu.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      highlights: [
        {
          title: "Kiểm định kết cấu an toàn",
          desc: "Siêu âm bê tông, đánh giá khả năng chịu lực trước khi lên phương án cải tạo nâng tầng."
        },
        {
          title: "Thi công nhanh gọn, sạch sẽ",
          desc: "Che chắn chống bụi, hạn chế tiếng ồn và đảm bảo tiến độ bàn giao nhanh chóng."
        }
      ],
      checklist: [
        "Đập phá, tháo dỡ, vận chuyển xà bần và gia cố hệ khung kết cấu thép/bê tông",
        "Xử lý chống thấm sàn mái, nhà vệ sinh, tường ngoài triệt để 100%",
        "Cải tạo hệ thống điện nước, lát sàn gỗ, ốp đá cầu thang và mặt tiền",
        "Sản xuất và lắp đặt nội thất phòng khách, bếp, phòng ngủ tại xưởng riêng"
      ]
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Nguyễn Văn Hùng",
      role: "Giám đốc Dự án Công ty",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Dịch vụ rất chuyên nghiệp. Từ khâu tư vấn, thiết kế đến thi công đều được thực hiện đúng tiến độ và đạt chất lượng cao. Tôi rất hài lòng và chắc chắn sẽ hợp tác lâu dài.”"
    },
    {
      id: "rev-2",
      author: "Trần Thị Mai",
      role: "Quản lý Khu đô thị Hòa Bình",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Đội ngũ kỹ sư giám sát rất sát sao, báo cáo hình ảnh công trường mỗi ngày qua nhóm Zalo. Vật tư đưa vào công trình đúng chuẩn cam kết trong hợp đồng, không phát sinh chi phí.”"
    },
    {
      id: "rev-3",
      author: "Lê Quốc Dũng",
      role: "Chủ đầu tư Biệt thự Sunrise Villas",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Căn biệt thự gia đình tôi được bàn giao sớm hơn 10 ngày so với dự kiến. Đường nét hoàn thiện sắc sảo, hệ thống chống thấm và điện nước vận hành cực kỳ ổn định.”"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Biệt thự phong cách Châu Âu còn được ưa chuộng hiện nay?",
      date: "12/05/2026",
      category: "KIẾN TRÚC BIỆT THỰ",
      excerpt:
        "Khám phá xu hướng thiết kế biệt thự tân cổ điển Châu Âu kết hợp vật liệu hiện đại giúp tối ưu chi phí bảo trì và giữ vẻ sang trọng vượt thời gian.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Biệt thự phong cách Địa Trung Hải có gì thu hút gia chủ?",
      date: "18/05/2026",
      category: "XU HƯỚNG XÂY DỰNG",
      excerpt:
        "Không gian mở ngập tràn nắng gió, mái vòm tinh tế và bảng màu đất nung ấm áp tạo nên sức hút đặc biệt của kiến trúc Địa Trung Hải đương đại.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "Kinh nghiệm tính chi phí xây mẫu nhà biệt thự vườn 1 tầng đẹp",
      date: "24/05/2026",
      category: "CẨM NANG XÂY NHÀ",
      excerpt:
        "Hướng dẫn chi tiết cách tính diện tích xây dựng, lựa chọn gói vật tư phần thô và dự trù ngân sách hoàn thiện cho biệt thự nhà vườn 1 tầng.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default xayDung3DefaultData;
