import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile2Data extends ClonedTemplateBaseData {
  aboutFeature: {
    badge: string;
    titleHighlight: string;
    partnerTitle: string;
    partnerDesc: string;
    mainImage: string;
    secondaryImage: string;
  };
  solutions: {
    badge: string;
    title: string;
    description: string;
    images: string[];
    progressBars: Array<{
      id: string;
      label: string;
      percentage: number;
    }>;
    galleryStrip: Array<{
      id: string;
      title: string;
      category: string;
      image: string;
    }>;
  };
  approach: {
    badge: string;
    title: string;
    description: string;
    checkpoints: string[];
    image: string;
  };
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  faqImages: {
    main: string;
    inset: string;
  };
  contactFeatures: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export const corporateProfile2DefaultData: CorporateProfile2Data = {
  business: {
    name: "Mona Elitebiz",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "contact@elitebiz.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    rating: 4.9,
    reviewCount: 240,
    aboutTitle: "Giải Pháp Năng Lượng Mặt Trời của Mona Elitebiz",
    aboutText: [
      "Tại Mona Elitebiz, chúng tôi cung cấp dịch vụ tư vấn đẳng cấp thế giới với trọng tâm là các giải pháp năng lượng bền vững.",
      "Hãy để chúng tôi dẫn dắt doanh nghiệp của bạn đến một tương lai sáng lạn và xanh hơn nhờ sức mạnh của mặt trời."
    ],
    highlights: [
      "Giảm Chi Phí Điện Năng",
      "Nguồn Năng Lượng Bền Vững",
      "Bảo Vệ Môi Trường Xanh",
      "Tăng Giá Trị Doanh Nghiệp"
    ]
  },
  hero: {
    eyebrow: "MONA ELITEBIZ",
    title: "Cung cấp giải pháp tái tạo năng lượng",
    subtitle:
      "Sử dụng năng lượng mặt trời không chỉ giúp tiết kiệm chi phí mà còn bảo vệ môi trường và nâng cao giá trị thương hiệu.",
    description:
      "Tập đoàn tiên phong trong lĩnh vực tư vấn, thiết kế EPC và vận hành hệ thống điện mặt trời áp mái, điện gió và lưu trữ năng lượng công nghiệp.",
    ctaText: "Liên Hệ",
    ctaLink: "#lien-he",
    secondaryCtaText: "Khám Phá Ngay",
    secondaryCtaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  aboutFeature: {
    badge: "GIẢI PHÁP NĂNG LƯỢNG MẶT TRỜI",
    titleHighlight: "Năng Lượng Mặt Trời",
    partnerTitle: "Đối Tác Năng Lượng Mặt Trời Uy Tín",
    partnerDesc:
      "Mona Elitebiz kết hợp công nghệ tiên tiến với chuyên môn vượt trội để cung cấp dịch vụ tư vấn và thi công năng lượng mặt trời hàng đầu.",
    mainImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80"
  },
  stats: [
    { id: "st-1", number: "10+", title: "ĐỐI TÁC UY TÍN, CHẤT LƯỢNG" },
    { id: "st-2", number: "100+", title: "NHÂN VIÊN, KỸ THUẬT VIÊN" },
    { id: "st-3", number: "500+", title: "HỆ THỐNG ĐÃ LẮP ĐẶT" },
    { id: "st-4", number: "5,000+", title: "TỔNG SỐ KW ĐIỆN TẠO RA" }
  ],
  projects: [
    {
      id: "prj-1",
      title: "Dự án công ty cổ phần hàng hóa TP TA",
      category: "Điện Mặt Trời Áp Mái",
      location: "KCN Tân Bình, TP.HCM",
      description:
        "Hệ thống điện mặt trời hòa lưới công suất 1.2 MWp giúp nhà máy tiết kiệm 35% chi phí vận hành hàng năm.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prj-2",
      title: "Dự án điện năng lượng mặt trời RTI",
      category: "Trạm Năng Lượng Xanh",
      location: "Bình Dương",
      description:
        "Giải pháp EPC trọn gói tích hợp biến tần hiệu suất cao và hệ thống giám sát SCADA thời gian thực.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prj-3",
      title: "Dự án 300 KWP tại nhà máy sản xuất TP Hà Nội",
      category: "Nhà Máy Công Nghiệp",
      location: "KCN Bắc Thăng Long, Hà Nội",
      description:
        "Lắp đặt tấm pin Mono Half-cell hai mặt kính chịu lực cao, tối ưu sản lượng điện trong điều kiện bức xạ miền Bắc.",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prj-4",
      title: "Dự án công ty cổ phần hàng hóa Sài Gòn",
      category: "Hệ Thống Lưu Trữ ESS",
      location: "Quận 7, TP.HCM",
      description:
        "Tích hợp hệ thống pin lưu trữ công nghiệp BESS đảm bảo nguồn điện liên tục 24/7 cho kho lạnh logistics.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80"
    }
  ],
  solutions: {
    badge: "GIẢI PHÁP",
    title: "Giải pháp năng lượng xanh tại Mona Elitebiz",
    description:
      "Sử dụng năng lượng mặt trời không chỉ giúp tiết kiệm chi phí mà còn bảo vệ môi trường và nâng cao giá trị thương hiệu.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=500&q=80"
    ],
    progressBars: [
      { id: "pb-1", label: "Năng Lượng Mặt Trời", percentage: 85 },
      { id: "pb-2", label: "Năng Lượng Gió", percentage: 95 },
      { id: "pb-3", label: "Năng Lượng Tái Sử Dụng", percentage: 70 }
    ],
    galleryStrip: [
      {
        id: "gal-1",
        title: "Trạm biến áp & Hòa lưới thông minh",
        category: "Hạ tầng, Kỹ thuật",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-2",
        title: "Tổ hợp Điện gió & Mặt trời kết hợp",
        category: "Năng lượng tái tạo",
        image:
          "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-3",
        title: "Giải pháp Mobility",
        category: "Tài chính, Chiến lược",
        image:
          "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-4",
        title: "Hệ thống Pin quang điện hiệu suất cao",
        category: "Công nghệ sạch",
        image:
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "gal-5",
        title: "Bảo trì & Vận hành O&M chuyên sâu",
        category: "Dịch vụ kỹ thuật",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  team: [
    {
      id: "tm-1",
      name: "Phạm Minh Khôi",
      position: "Trưởng phòng Kỹ thuật",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-2",
      name: "Lê Hoàng Yến",
      position: "Chủ tịch Hội đồng quản trị",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-3",
      name: "Nguyễn Văn An",
      position: "Giám đốc điều hành",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tm-4",
      name: "Trần Thị Bích Hằng",
      position: "Giám đốc tài chính",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    }
  ],
  approach: {
    badge: "NĂNG LƯỢNG XANH",
    title: "Cách tiếp cận năng lượng sạch",
    description:
      "Chúng tôi giúp khách hàng tái định hình, cải tiến và làm mới các giải pháp năng lượng để tạo nên những doanh nghiệp bền vững và linh hoạt.",
    checkpoints: [
      "Giảm Chi Phí Điện Năng",
      "Nguồn Năng Lượng Bền Vững",
      "Bảo Vệ Môi Trường Xanh",
      "Tăng Giá Trị Doanh Nghiệp"
    ],
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
  },
  faqs: [
    {
      id: "faq-1",
      question: "Năng lượng sạch là gì?",
      answer:
        "Năng lượng sạch là các nguồn năng lượng tái tạo, không gây ô nhiễm môi trường trong quá trình sản xuất và sử dụng. Các nguồn này bao gồm năng lượng mặt trời, gió, thủy điện, và năng lượng sinh khối."
    },
    {
      id: "faq-2",
      question: "Tại sao năng lượng sạch quan trọng?",
      answer:
        "Năng lượng sạch giúp doanh nghiệp cắt giảm tới 40-60% chi phí điện năng giờ cao điểm, đạt chứng chỉ xanh quốc tế (LEED, I-REC) phục vụ xuất khẩu và giảm phát thải khí nhà kính bền vững."
    },
    {
      id: "faq-3",
      question: "Năng lượng mặt trời có ưu điểm gì?",
      answer:
        "Hệ thống có tuổi thọ khai thác trên 25 năm, thời gian hoàn vốn nhanh chỉ từ 3.5 - 4.5 năm, vận hành tự động hoàn toàn và làm mát mái nhà xưởng từ 4 - 6 độ C."
    },
    {
      id: "faq-4",
      question: "Tương lai của năng lượng sạch sẽ như thế nào?",
      answer:
        "Chuyển dịch năng lượng xanh kết hợp lưu trữ thông minh (BESS) và quản trị năng lượng bằng AI đang trở thành tiêu chuẩn bắt buộc của mọi khu công nghiệp và tập đoàn sản xuất toàn cầu."
    }
  ],
  faqImages: {
    main: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=800&q=80",
    inset:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=500&q=80"
  },
  contactFeatures: [
    {
      id: "cf-1",
      title: "Hỗ trợ 24/7",
      description: "Giải đáp các thắc mắc kỹ thuật trong vòng 24 giờ"
    },
    {
      id: "cf-2",
      title: "Bảo vệ thông tin",
      description: "Chúng tôi luôn bảo mật thông tin dự án của khách hàng"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Trần Thị Bích Hằng",
      role: "Giám đốc tài chính",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Đội ngũ Mona Elitebiz đã tư vấn và lắp đặt hệ thống năng lượng mặt trời cho nhà máy của chúng tôi một cách nhanh chóng và hiệu quả."
    },
    {
      id: "rv-2",
      author: "Phạm Minh Khôi",
      role: "Trưởng phòng Kỹ thuật",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Đội ngũ Mona Elitebiz đã tư vấn và lắp đặt hệ thống năng lượng mặt trời cho nhà máy của chúng tôi một cách nhanh chóng và hiệu quả."
    },
    {
      id: "rv-3",
      author: "Lê Hoàng Yến",
      role: "Chủ tịch Hội đồng quản trị",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Đội ngũ Mona Elitebiz đã tư vấn và lắp đặt hệ thống năng lượng mặt trời cho nhà máy của chúng tôi một cách nhanh chóng và hiệu quả."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Giải pháp tối ưu sản lượng điện mặt trời cho nhà xưởng công nghiệp",
      date: "24 Th5",
      category: "Công nghệ xanh",
      excerpt:
        "Ứng dụng công nghệ biến tần thông minh và hệ thống giám sát từ xa giúp tăng 18% hiệu suất phát điện.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Xu hướng đầu tư tín chỉ carbon và năng lượng tái tạo cho doanh nghiệp FDI",
      date: "24 Th5",
      category: "Tài chính xanh",
      excerpt:
        "Các tiêu chuẩn ESG và chứng chỉ năng lượng tái tạo I-REC mở ra cơ hội tiếp cận nguồn vốn ưu đãi quốc tế.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      title: "Chiến lược thu hút đối tác chuỗi cung ứng toàn cầu nhờ nhà máy xanh",
      date: "24 Th5",
      category: "Chiến lược B2B",
      excerpt:
        "Chuyển đổi sang sử dụng năng lượng mặt trời áp mái giúp doanh nghiệp nâng cao năng lực cạnh tranh xuất khẩu.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "SolarTech Global" },
    { id: "cl-2", name: "EcoGrid Vietnam" },
    { id: "cl-3", name: "SunPower Industrial" },
    { id: "cl-4", name: "GreenVortex Energy" },
    { id: "cl-5", name: "Apex Renewables" }
  ]
};

export const defaultData = corporateProfile2DefaultData;
export const mockData = corporateProfile2DefaultData;
export default corporateProfile2DefaultData;
