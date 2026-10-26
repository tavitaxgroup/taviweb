import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DichVuVeSinh3FeaturePoint {
  id: string;
  title: string;
  description: string;
  icon: "diamond" | "home" | "user" | "umbrella";
  position: "left-top" | "left-bottom" | "right-top" | "right-bottom";
}

export interface DichVuVeSinh3PillarTab {
  id: string;
  label: string;
  icon: "users" | "leaf" | "handshake";
  content: string;
}

export interface DichVuVeSinh3PricingPlan {
  id: string;
  name: string;
  price: string;
  unit: string;
  features: string[];
  highlighted?: boolean;
}

export interface DichVuVeSinh3Data extends ClonedTemplateBaseData {
  circleHighlight: {
    sectionTitle: string;
    sectionSubtitle: string;
    centerImage: string;
    features: DichVuVeSinh3FeaturePoint[];
  };
  pillarBanner: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    tabs: DichVuVeSinh3PillarTab[];
  };
  aboutCollage: {
    title: string;
    leadText: string;
    paragraphs: string[];
    tallImage: string;
    smallTopImage: string;
    smallBottomImage: string;
    ctaText: string;
  };
  statsBannerImage: string;
  galleryServices: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
  }>;
  testimonialBannerImage: string;
  pricingPlans: DichVuVeSinh3PricingPlan[];
  footerAlbum: string[];
}

export const dichVuVeSinh3DefaultData: DichVuVeSinh3Data = {
  business: {
    name: "CleanMate",
    phone: ["076 922 0162", "0909 884 112"],
    email: ["cskh@cleanmate.vn", "info@cleanmate.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 08:00 - 17:00",
    rating: 4.9,
    reviewCount: 1500,
    aboutTitle: "GIỚI THIỆU",
    aboutText: [
      "CleanMate tự hào là đơn vị tiên phong cung cấp giải pháp vệ sinh căn hộ, biệt thự và văn phòng theo tiêu chuẩn xanh an toàn tuyệt đối cho sức khỏe gia đình Việt.",
      "Với đội ngũ nhân sự được đào tạo bài bản cùng hệ thống máy móc làm sạch bằng hơi nước nóng công nghệ Đức và dung dịch hữu cơ sinh học, chúng tôi cam kết mang lại không gian sống tinh tươm, thoáng đãng và tràn đầy năng lượng mỗi ngày."
    ],
    highlights: [
      "Vệ sinh mái nhà & sân thượng",
      "Dọn dẹp nhà tắm khử khuẩn",
      "Dọn hồ bơi & tiểu cảnh",
      "Vệ sinh nhà bếp chuyên sâu",
      "Lau bụi cửa sổ & mặt kính",
      "Bảo vệ không gian xanh",
      "Vận chuyển & sắp xếp vật dụng"
    ]
  },
  hero: {
    eyebrow: "Thân thiện với người dùng – Đơn giản – Tuyệt vời",
    subtitle: "Thân thiện với người dùng – Đơn giản – Tuyệt vời",
    title: "DỌN DẸP CĂN NHÀ CỦA BẠN\nXEM CHI PHÍ",
    description:
      "Giải pháp làm sạch tổ ấm toàn diện với chi phí minh bạch, quy trình 5S chuẩn Nhật Bản và hóa chất hữu cơ an toàn cho trẻ nhỏ & thú cưng.",
    ctaText: "Dịch vụ thanh toán",
    ctaLink: "#pricing",
    secondaryCtaText: "Đặt lịch khảo sát",
    secondaryCtaLink: "#contact",
    backgroundImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  circleHighlight: {
    sectionTitle: "LÝ DO CHỌN CHÚNG TÔI",
    sectionSubtitle:
      "Chúng tôi kết hợp thiết bị làm sạch hiện đại cùng dung dịch thảoomộc tự nhiên giúp bảo vệ sức khỏe cả gia đình và thú cưng của bạn.",
    centerImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    features: [
      {
        id: "feat-1",
        title: "CÔNG NGHỆ LÀM SẠCH",
        description:
          "Ứng dụng máy hút bụi HEPA lọc 99.97% bụi mịn và máy phun hơi nước nóng diệt khuẩn sâu trên từng bề mặt thảm, nệm.",
        icon: "diamond",
        position: "left-top"
      },
      {
        id: "feat-2",
        title: "AN TOÀN CHO TỔ ẤM",
        description:
          "Sử dụng 100% dung dịch tẩy rửa hữu cơ chiết xuất thiên nhiên, không gây kích ứng da cho trẻ nhỏ và vật nuôi.",
        icon: "home",
        position: "left-bottom"
      },
      {
        id: "feat-3",
        title: "ĐỘI NGŨ TẬN TÂM",
        description:
          "Nhân sự lý lịch rõ ràng, được đào tạo quy trình vệ sinh 5S khắt khe và luôn phục vụ với thái độ tận tình, chu đáo.",
        icon: "user",
        position: "right-top"
      },
      {
        id: "feat-4",
        title: "BẢO HÀNH CHẤT LƯỢNG",
        description:
          "Cam kết làm sạch lại miễn phí trong vòng 48 giờ nếu khách hàng chưa hài lòng với bất kỳ hạng mục nghiệm thu nào.",
        icon: "umbrella",
        position: "right-bottom"
      }
    ]
  },
  pillarBanner: {
    title: "LÝ DO CHỌN CHÚNG TÔI",
    subtitle:
      "Cam kết đồng hành lâu dài cùng hàng ngàn gia đình và doanh nghiệp với 3 giá trị cốt lõi bền vững.",
    backgroundImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1800&q=80",
    tabs: [
      {
        id: "tab-customer",
        label: "KHÁCH HÀNG",
        icon: "users",
        content:
          "Sự hài lòng của khách hàng là thước đo duy nhất cho chất lượng dịch vụ của CleanMate. Mọi gói dọn dẹp đều được thiết kế linh hoạt theo diện tích thực tế và thói quen sinh hoạt riêng của từng gia đình, đi kèm biên bản nghiệm thu chi tiết từng phòng."
      },
      {
        id: "tab-env",
        label: "MÔI TRƯỜNG",
        icon: "leaf",
        content:
          "Tiên phong áp dụng xu hướng Eco-Cleaning tại Việt Nam, chúng tôi loại bỏ hoàn toàn hóa chất gốc Clo độc hại, thay thế bằng chế phẩm sinh học tự phân hủy giúp bảo vệ nguồn nước và bầu không khí trong lành cho ngôi nhà bạn."
      },
      {
        id: "tab-comm",
        label: "GIAO TIẾP",
        icon: "handshake",
        content:
          "Tổng đài chăm sóc khách hàng và đội ngũ giám sát hiện trường luôn lắng nghe, phản hồi yêu cầu trong vòng 15 phút. Báo giá trọn gói minh bạch ngay từ đầu, cam kết không phát sinh bất kỳ phụ phí ẩn nào."
      }
    ]
  },
  services: [
    {
      id: "srv-1",
      title: "DỌN DẸP NHÀ Ở & CĂN HỘ",
      category: "Vệ sinh định kỳ",
      description:
        "Làm sạch toàn diện phòng khách, phòng ngủ, nhà bếp và phòng tắm theo giờ hoặc định kỳ hàng tuần giúp tổ ấm luôn gọn gàng.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "TỔNG VỆ SINH SAU XÂY DỰNG",
      category: "Công trình mới",
      description:
        "Xử lý triệt để bụi xi măng, vết sơn bám, keo silicon trên kính và đánh bóng sàn đá bằng máy chà sàn công nghiệp công suất lớn.",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "CHĂM SÓC NỘI THẤT & SOFA",
      category: "Khử khuẩn hơi nước",
      description:
        "Giặt ghế sofa, nệm ngủ, thảm trải sàn và rèm cửa bằng công nghệ phun hút hơi nước nóng loại bỏ 99.9% nấm mốc, mạt bụi.",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
    }
  ],
  aboutCollage: {
    title: "GIỚI THIỆU",
    leadText: "Kiến tạo không gian sống chuẩn mực, tinh khiết và an tâm tuyệt đối",
    paragraphs: [
      "Trải qua hơn 8 năm hoạt động trong lĩnh vực vệ sinh dân dụng và công nghiệp tại TP.HCM, CleanMate hiểu rằng một ngôi nhà sạch không chỉ dừng lại ở bề mặt sáng bóng mà còn phải thực sự trong lành ở từng hơi thở.",
      "Chúng tôi chuẩn hóa quy trình làm sạch 5 bước thông minh, kết hợp đội ngũ kỹ thuật viên giàu kinh nghiệm và hệ thống máy móc nhập khẩu từ châu Âu, giúp tiết kiệm tối đa thời gian để bạn tận hưởng những khoảnh khắc trọn vẹn bên người thân."
    ],
    tallImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80",
    smallTopImage:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&q=80",
    smallBottomImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80",
    ctaText: "Xem thêm"
  },
  stats: [
    {
      id: "stat-1",
      number: "1500",
      title: "Khách hàng thường xuyên"
    },
    {
      id: "stat-2",
      number: "300",
      title: "Nhân viên 24/7"
    },
    {
      id: "stat-3",
      number: "9000",
      title: "Hợp đồng hoàn thành"
    },
    {
      id: "stat-4",
      number: "2200",
      title: "Căn nhà được vệ sinh"
    }
  ],
  statsBannerImage:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80",
  galleryServices: [
    {
      id: "gal-1",
      title: "Giặt Sofa & Đệm Hơi Nước Nóng",
      category: "Khử khuẩn chuyên sâu",
      image:
        "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Chăm Sóc Sân Vườn & Cây Cảnh",
      category: "Không gian xanh",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Di Dời & Sắp Xếp Nội Thất Trọn Gói",
      category: "Chuyển nhà nhẹ nhàng",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonialBannerImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
  testimonials: [
    {
      id: "test-1",
      author: "TÂN – NHÀ LÁ VILLA",
      role: "Chủ biệt thự Thảo Điền",
      content:
        "Đội ngũ CleanMate làm việc vô cùng tỉ mỉ và đúng giờ. Sau một buổi tổng vệ sinh và giặt toàn bộ rèm cửa, sofa của gia đình tôi như mới hoàn toàn, mùi hương tinh dầu sả chanh dịu nhẹ rất dễ chịu."
    },
    {
      id: "test-2",
      author: "CHỊ LAN ANH – VINHOMES CENTRAL PARK",
      role: "Khách hàng gói định kỳ",
      content:
        "Tôi đã đăng ký gói vệ sinh định kỳ hàng tháng suốt 2 năm qua. Các bạn nhân viên rất trung thực, cẩn thận từng góc bếp đến ban công, giúp vợ chồng tôi yên tâm tận hưởng cuối tuần bên các con."
    },
    {
      id: "test-3",
      author: "ANH MINH ĐỨC – CÔNG TY KIẾN TRÚC K-HOME",
      role: "Đối tác bàn giao công trình",
      content:
        "Mỗi khi hoàn thiện nội thất biệt thự cho khách, chúng tôi đều tin tưởng giao phần vệ sinh công nghiệp cuối cùng cho CleanMate. Bề mặt kính, sàn gỗ và đá tự nhiên luôn được xử lý hoàn hảo."
    }
  ],
  pricingPlans: [
    {
      id: "plan-basic",
      name: "DỊCH VỤ CƠ BẢN",
      price: "2, 65",
      unit: "triệu / tháng",
      features: [
        "Vệ sinh 1 phòng tắm",
        "Dọn dẹp 3 phòng ngủ",
        "Vệ sinh 1 phòng khách",
        "Bếp nhỏ",
        "2 phòng bổ sung"
      ]
    },
    {
      id: "plan-standard",
      name: "DỊCH VỤ TIÊU CHUẨN",
      price: "4, 18",
      unit: "triệu / tháng",
      highlighted: true,
      features: [
        "Vệ sinh 1 phòng tắm",
        "Dọn dẹp 3 phòng ngủ",
        "Vệ sinh 1 phòng khách",
        "Bếp nhỏ",
        "2 phòng bổ sung",
        "Dọn dẹp sân vườn"
      ]
    },
    {
      id: "plan-premium",
      name: "DỊCH VỤ CAO CẤP",
      price: "11, 93",
      unit: "triệu / tháng",
      features: [
        "Vệ sinh 1 phòng tắm",
        "Dọn dẹp 3 phòng ngủ",
        "Vệ sinh 1 phòng khách",
        "Bếp nhỏ",
        "2 phòng bổ sung",
        "Dọn tủ lạnh",
        "Dọn hồ bơi"
      ]
    }
  ],
  footerAlbum: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
  ]
};
