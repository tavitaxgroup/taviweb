import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung22PillarCard {
  id: string;
  title: string;
  icon: "garden" | "urban" | "maintenance" | "event";
  image: string;
  description: string;
}

export interface XayDung22WorkItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface XayDung22TemplateData extends ClonedTemplateBaseData {
  studioHeadline: string;
  pillarCards: XayDung22PillarCard[];
  checklistColumns: string[][];
  whyChooseCopy: string;
  whyChooseTeamImage: string;
  craftBox: {
    title: string;
    description: string;
    ctaText: string;
  };
  historyBox: {
    title: string;
    paragraphs: string[];
  };
  philosophyBox: {
    title: string;
    text: string;
    author: string;
  };
  workCategories: string[];
  works: XayDung22WorkItem[];
  clientLeftCard: {
    image: string;
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
  };
}

export const xayDung22DefaultData: XayDung22TemplateData = {
  business: {
    name: "Mona.Land",
    logo: "",
    phone: ["1900 90009", "076 922 0162"],
    email: ["tuvan@monaland.vn", "info@monaland.vn"],
    address: "319 - C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "09:00 - 17:00 (Thứ 2 - Thứ 7)",
    rating: 5.0,
    reviewCount: 268,
    experienceYears: "35+",
    aboutTitle: "Tại sao chọn chúng tôi?",
    aboutText: [
      "Mona.Land là một công ty thiết kế và thi công cảnh quan sân vườn dân cư & thương mại đầy đủ dịch vụ. Các hệ thống sinh thái của chúng tôi cho phép cung cấp các giải pháp chăm sóc thảm cỏ, hồ cá Koi và cảnh quan hàng đầu trong ngành. Được xây dựng dựa trên truyền thống nghệ thuật sân vườn gia đình, chúng tôi được thúc đẩy bởi niềm đam mê vượt quá sự mong đợi của khách hàng và luôn mang đến sự hài lòng tuyệt đối."
    ],
    highlights: [
      "Thiết kế & mô hình cảnh quan 3D trực quan",
      "Thi công hồ cá Koi, thác nước & vườn đứng",
      "Hệ thống tưới tự động & thoát nước thông minh",
      "Chăm sóc, cắt tỉa và bảo dưỡng cây xanh định kỳ"
    ]
  },
  hero: {
    eyebrow: "KIẾN TRÚC CẢNH QUAN & SÂN VƯỜN NGHỆ THUẬT",
    title: "Kiến tạo sắc màu",
    subtitle: "sân vườn",
    description:
      "Giải pháp quy hoạch cảnh quan sinh thái, thiết kế sân vườn biệt thự, vườn trên mái và bảo dưỡng cây xanh chuyên nghiệp.",
    ctaText: "Báo Giá Miễn Phí",
    ctaLink: "#lien-he",
    secondaryCtaText: "Xem Công Việc",
    secondaryCtaLink: "#cong-viec",
    backgroundImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  studioHeadline:
    "Chúng tôi là Studio thiết kế cảnh quan hàng đầu, cung cấp biến đổi sân vườn miễn phí khảo sát với các giải pháp nghệ thuật.",
  pillarCards: [
    {
      id: "pil-1",
      title: "Vườn",
      icon: "garden",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80",
      description:
        "Thiết kế và thi công sân vườn biệt thự, vườn Nhật Bản, hồ cá Koi và tiểu cảnh thác nước."
    },
    {
      id: "pil-2",
      title: "Thành thị",
      icon: "urban",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80",
      description:
        "Giải pháp mặt đứng xanh, vườn ban công chung cư, vườn trên mái (Rooftop Garden) cho tòa nhà."
    },
    {
      id: "pil-3",
      title: "Bảo trì",
      icon: "maintenance",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=80",
      description:
        "Chăm sóc, cắt tỉa tạo dáng bonsai, bón phân hữu cơ và kiểm soát sâu bệnh định kỳ hàng tuần."
    },
    {
      id: "pil-4",
      title: "Sự kiện",
      icon: "event",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
      description:
        "Trang trí hoa tươi và thiết kế không gian cảnh quan ngoài trời cho tiệc sân vườn & khu nghỉ dưỡng."
    }
  ],
  checklistColumns: [
    [
      "Quản lý dự án đầy đủ",
      "Thiết kế và mô hình 3D",
      "Kỹ thuật địa hình"
    ],
    [
      "Xây dựng cảnh quan",
      "Quản lý nước mưa",
      "Giấy phép và kiểm tra"
    ],
    [
      "Thủy lợi và Thoát nước",
      "Trồng và tuyển chọn cây",
      "Vệ sinh & Cắt tỉa định kỳ"
    ]
  ],
  whyChooseCopy:
    "Mona.Land là một công ty chăm sóc cảnh quan dân cư đầy đủ dịch vụ. Các hệ thống được thành lập của chúng tôi cho phép chúng tôi cung cấp các giải pháp chăm sóc cỏ và cảnh quan hàng đầu trong ngành cho các khách hàng thương mại và dân cư. Được xây dựng dựa trên truyền thống chăm sóc gia đình, chúng tôi được thúc đẩy bởi niềm đam mê vượt quá sự mong đợi của khách hàng và luôn mang đến sự hài lòng cho khách hàng.",
  whyChooseTeamImage:
    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=85",
  craftBox: {
    title: "Nghề thủ công",
    description:
      "Chúng tôi tại Mona.Land tự hào cung cấp các cảnh quan được thiết kế cẩn thận phù hợp với khách hàng thương mại và biệt thự của chúng tôi, ưu tiên cho sự bền vững sinh thái.",
    ctaText: "Làm việc như thế nào"
  },
  historyBox: {
    title: "Chúng tôi là từ năm 1987!",
    paragraphs: [
      "Mona.Land luôn tập trung vào một điều: sự hài lòng tuyệt đối của khách hàng yêu thiên nhiên.",
      "Chúng tôi cung cấp sự hài lòng đó thông qua phạm vi toàn diện của chúng tôi về dịch vụ chăm sóc thảm cỏ và kiến trúc cảnh quan chuyên gia, bao gồm cả thương mại và dân cư."
    ]
  },
  philosophyBox: {
    title: "Triết học",
    text: "Tất cả mọi thứ làm chúng ta chậm lại và buộc sự kiên nhẫn, tất cả mọi thứ đưa chúng ta trở lại vào vòng tròn hài hòa của tự nhiên đều là một sự trợ giúp quý giá. Làm vườn là một nghệ thuật nuôi dưỡng tâm hồn.",
    author: "– KTS. Minh Quân"
  },
  workCategories: [
    "Tất cả",
    "Sự kiện",
    "Vườn",
    "Nội thất",
    "Bảo trì",
    "Thành thị"
  ],
  works: [
    {
      id: "wk-1",
      title: "Khu Vườn Nhiệt Đới Biệt Thự Thảo Điền",
      category: "Vườn",
      location: "TP. Thủ Đức, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80",
      description:
        "Kết hợp lối đi đá tự nhiên, dương xỉ cổ thụ và hệ thống phun sương tự động."
    },
    {
      id: "wk-2",
      title: "Cảnh Quan Hồ Cá Koi & Vườn Nhật Bản",
      category: "Bảo trì",
      location: "Quận 7, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      description:
        "Thi công hồ cá Koi 45 khối chuẩn hệ lọc Nhật Bản cùng tùng La Hán cắt tỉa nghệ thuật."
    },
    {
      id: "wk-3",
      title: "Sân Vườn Cafe & Không Gian Thư Giãn Xanh",
      category: "Thành thị",
      location: "Quận 3, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80",
      description:
        "Biến khoảng sân sau đô thị thành ốc đảo xanh mát với giàn hoa leo và bàn trà gỗ."
    },
    {
      id: "wk-4",
      title: "Thi Công Vườn Ươm & Nhà Kính Sinh Thái",
      category: "Bảo trì",
      location: "Đà Lạt, Lâm Đồng",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      description:
        "Ươm dưỡng các giống cây cảnh quý hiếm và hoa hồng ngoại chuẩn hữu cơ."
    },
    {
      id: "wk-5",
      title: "Trang Trí Hoa Hồng Leo & Sân Khấu Ngoài Trời",
      category: "Sự kiện",
      location: "Quận 2, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
      description:
        "Thiết kế vòm hoa hồng tự nhiên cho sự kiện tiệc cưới sân vườn cao cấp."
    },
    {
      id: "wk-6",
      title: "Bộ Sưu Tập Xương Rồng & Sen Đá Nội Thất",
      category: "Nội thất",
      location: "Quận 1, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
      description:
        "Bố trí tiểu cảnh terrarium và xương rồng nghệ thuật cho sảnh tòa nhà văn phòng."
    }
  ],
  clientLeftCard: {
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=700&q=80",
    eyebrow: "KHÁCH HÀNG CỦA CHÚNG TÔI",
    title: "Chúng tôi làm việc với dự án lớn và nhỏ.",
    description:
      "Cho dù bạn ký hợp đồng với chúng tôi để cài đặt hệ thống thoát nước hoặc thiết kế và lắp đặt cảnh quan đầy đủ tính năng, bạn sẽ luôn nhận được chất lượng xứng tầm chi phí.",
    ctaText: "LIÊN HỆ CHÚNG TÔI"
  },
  testimonials: [
    {
      id: "rev-1",
      author: "Gia đình Anh Hoàng",
      role: "Facebook",
      rating: 5,
      content:
        "Khu vườn chung và sân sau biệt thự của gia đình tôi sau khi được đội ngũ Mona.Land cải tạo đã trở nên xanh mát và tràn đầy sức sống! Hệ thống tưới tự động và hồ cá Koi vận hành cực kỳ êm ái, dịch vụ bảo dưỡng định kỳ hàng tháng rất tận tâm."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "“Bảng vàng” 7 Loại cây hút khí độc và mang tài lộc cho ngôi nhà",
      date: "30/03/2026",
      excerpt:
        "Đừng quá lo lắng vì không khí trong nhà bạn có thể trong lành hơn khi trồng các loại cây lọc không khí tự nhiên này...",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Cách trồng và chăm sóc hoa hồng bụi cổ thụ nở rộ quanh năm",
      date: "30/03/2026",
      excerpt:
        "Hoa hồng thuộc cây thân gỗ bụi lâu năm, có thể trồng quanh năm nhưng phát triển đẹp nhất vào tiết trời mát mẻ...",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      title: "Vì sao nghệ thuật cây cảnh Bonsai và tiểu cảnh sân vườn được yêu thích?",
      date: "30/03/2026",
      excerpt:
        "Nghệ thuật tạo tác cây thế và bố trí non bộ giúp cân bằng phong thủy, mang lại sự tĩnh tại và thư thái cho gia chủ...",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80"
    }
  ]
};

export default xayDung22DefaultData;
