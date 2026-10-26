import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2BProduct10SectorCircle {
  id: string;
  title: string;
  iconType: "crop" | "aqua" | "livestock" | "environment";
  description: string;
}

export interface B2BProduct10ExclusiveProduct {
  id: string;
  name: string;
  price: string;
  packaging: string;
  application: string;
  origin: string;
  description: string;
  image: string;
}

export interface B2BProduct10ActivityTile {
  id: string;
  title: string;
  image: string;
}

export interface B2BProduct10TemplateData extends ClonedTemplateBaseData {
  solutionFormula: string;
  solutionSummary: string;
  solutionPromise: string;
  sectorCircles: B2BProduct10SectorCircle[];
  exclusiveProducts: B2BProduct10ExclusiveProduct[];
  activityTiles: B2BProduct10ActivityTile[];
  infoSectionBg: string;
  infoBoxTitle: string;
  infoBoxDescription: string;
}

export const b2bProduct10DefaultData: B2BProduct10TemplateData = {
  business: {
    name: "Bio-Mona Vietnam",
    logo: "",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["demonhunterg@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    rating: 4.9,
    reviewCount: 315,
    experienceYears: "15+",
    aboutTitle: "Giải pháp công nghệ",
    aboutText: [
      "Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam..."
    ]
  },
  hero: {
    eyebrow: "CHÀO MỪNG CÁC BẠN ĐẾN VỚI...",
    title: "BiO-MONA Vietnam",
    subtitle:
      "Chúng tôi tự hào là doanh nghiệp đem đến những giải pháp ứng dụng công nghệ vi sinh tiên tiến nhất của Mỹ một cách độc quyền; đảm bảo chất lượng cho nguồn lương thực tại Việt Nam...",
    ctaText: "TÌM HIỂU THÊM",
    ctaLink: "#giai-phap",
    backgroundImage:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=85"
  },
  solutionFormula: "AN TOÀN + HIỆU QUẢ = BỀN VỮNG",
  solutionSummary:
    "Phát sinh từ mong muốn giảm thiểu tối đa rủi ro mà người nông dân có thể gặp phải khi canh tác nông nghiệp cũng như thuỷ, hải sản tại Việt Nam; Đồng thời cũng hiểu được giá trị kinh tế từ thực phẩm đảm bảo chất lượng trước thực trạng xã hội hiện nay...",
  solutionPromise:
    "BIO-MONA VIETNAM SẼ LÀ GIẢI PHÁP ĐÁP ỨNG NHU CẦU & MONG MUỐN CỦA CÁC BẠN",
  sectorCircles: [
    {
      id: "sec-1",
      title: "Lĩnh vực nông nghiệp",
      iconType: "crop",
      description:
        "Cải tạo hệ vi sinh đất, kích thích bộ rễ phát triển mạnh và tăng năng suất cây trồng từ 15-30%."
    },
    {
      id: "sec-2",
      title: "Lĩnh vực thủy sản",
      iconType: "aqua",
      description:
        "Làm sạch đáy ao, phân hủy khí độc NH3/NO2 và ổn định môi trường nước nuôi tôm cá công nghệ cao."
    },
    {
      id: "sec-3",
      title: "Lĩnh vực gia súc",
      iconType: "livestock",
      description:
        "Hỗ trợ tiêu hóa đường ruột vật nuôi, giảm hệ số thức ăn FCR và khử mùi hôi chuồng trại sinh học."
    },
    {
      id: "sec-4",
      title: "Lĩnh vực môi trường",
      iconType: "environment",
      description:
        "Xử lý nước thải hữu cơ, ủ phân компоst vi sinh và phục hồi hệ sinh thái tự nhiên bền vững."
    }
  ],
  exclusiveProducts: [
    {
      id: "ep-1",
      name: "BiOWiSH® MANURE & ODOR",
      price: "600,000 ₫",
      packaging: "Gói 1 Kg",
      application: "Xử lý chất thải & Khử mùi chuồng trại",
      origin: "Công nghệ Hoa Kỳ",
      description:
        "Chế phẩm vi sinh hoạt tính cao chuyên phân hủy nhanh chất thải chăn nuôi và khử khí độc chuồng trại.",
      image:
        "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ep-2",
      name: "BiOWiSH® AQUA FOG",
      price: "800,000 ₫",
      packaging: "Gói 1 Kg",
      application: "Cải tạo đáy ao & Xử lý nước thủy sản",
      origin: "Công nghệ Hoa Kỳ",
      description:
        "Tăng cường vi khuẩn có lợi giúp ổn định màu nước, ức chế vi khuẩn gây bệnh phân trắng và hoại tử gan tụy.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ep-3",
      name: "BiOWiSH® CROP 16-40-0",
      price: "850,000 ₫",
      packaging: "Gói 500g",
      application: "Phân bón vi sinh kích rễ & Tạo mầm hoa",
      origin: "Công nghệ Hoa Kỳ",
      description:
        "Tối ưu khả năng hấp thu dinh dưỡng NPK trong đất, giúp cây ăn trái và cây công nghiệp phục hồi nhanh sau thu hoạch.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ep-4",
      name: "BiOWiSH® CROP LIQUID...",
      price: "1,000,000 ₫",
      packaging: "Bồn IBC 1000 Lít",
      application: "Hệ thống tưới nhỏ giọt trang trại lớn",
      origin: "Công nghệ Hoa Kỳ",
      description:
        "Dung dịch vi sinh đậm đặc dùng cho các nông trường cao su, cà phê, hồ tiêu, chè và cây ăn quả xuất khẩu.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ep-5",
      name: "BiOWiSH ® AQUA PRO",
      price: "1,500,000 ₫",
      packaging: "Thùng 5 Kg",
      application: "Nuôi tôm siêu thâm canh công nghệ cao",
      origin: "Công nghệ Hoa Kỳ",
      description:
        "Giải pháp vi sinh toàn diện cho trại nuôi tôm công nghệ Biofloc giúp tăng tỷ lệ sống và rút ngắn vụ nuôi.",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
    }
  ],
  activityTiles: [
    {
      id: "act-1",
      title: "Chăn nuôi gia cầm",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "act-2",
      title: "Cánh đồng lúa & Chè",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "act-3",
      title: "Nông sản xuất khẩu",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "act-4",
      title: "Chăn nuôi gia súc",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "act-5",
      title: "Cây ăn quả hữu cơ",
      image:
        "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "act-6",
      title: "Thủy hải sản công nghệ cao",
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Anh Hoàng Minh Tuấn / Chủ Trang Trại",
      role: "Hợp Tác Xã Chè Sạch Xuất Khẩu",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4,
      content:
        "Năng suất và sản lượng đúng là tăng hẳn từ lúc kết hợp dùng BiOWiSH™ Crop Liquid và các loại phân hữu cơ. Chè của tôi giờ đã đạt tiêu chuẩn đủ để có thể xuất khẩu ra rất nhiều nơi trên thế giới rồi. Cảm ơn các anh em của BiOWiSH™ Vietnam đã hỗ trợ tôi trong suốt thời gian qua..."
    },
    {
      id: "test-2",
      author: "Kỹ sư Trần Quốc Bảo / Giám Đốc Kỹ Thuật",
      role: "Khu Nuôi Tôm Công Nghệ Cao Bạc Liêu",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Sử dụng chế phẩm vi sinh BiOWiSH® Aqua giúp nước ao nuôi luôn trong, giảm hẳn khí độc NH3 và tiết kiệm hơn 25% chi phí xử lý môi trường trong suốt vụ nuôi."
    }
  ],
  infoSectionBg:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
  infoBoxTitle: "THÔNG TIN BIO-MONA™",
  infoBoxDescription:
    "Nơi chia sẻ những thông tin mới về các lĩnh vực xung quanh hoạt động nông nghiệp của Việt Nam. Những thông tin xác đáng sẽ được chúng tôi gửi đến các bạn hàng ngày như một tài liệu tham khảo cho chính hoạt động nông nghiệp của mình....",
  news: [
    {
      id: "nw-1",
      title: "Kỹ thuật canh tác măng tây xanh hữu cơ",
      date: "16 Tháng Năm, 2026",
      category: "KỸ THUẬT CANH TÁC",
      excerpt:
        "Hướng dẫn quy trình bón lót phân vi sinh và tưới nhỏ giọt giúp măng tây cho năng suất cao quanh năm...",
      image:
        "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Quy trình chăm sóc súp lơ xanh đạt chuẩn VietGAP",
      date: "16 Tháng Năm, 2026",
      category: "DINH DƯỠNG CÂY TRỒNG",
      excerpt:
        "Giải pháp bổ sung vi sinh vật có lợi giúp bộ rễ súp lơ xanh hấp thu tối đa khoáng chất tự nhiên...",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Yến mạch & cây họ đậu trong cải tạo đất nông nghiệp",
      date: "16 Tháng Năm, 2026",
      category: "NÔNG NGHIỆP BỀN VỮNG",
      excerpt:
        "Luân canh cây ngũ cốc kết hợp chế phẩm sinh học giúp phục hồi độ phì nhiêu cho đất canh tác lâu năm...",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export default b2bProduct10DefaultData;
