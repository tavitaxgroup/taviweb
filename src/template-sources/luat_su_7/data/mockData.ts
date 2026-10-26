import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu7PracticeBox {
  id: string;
  title: string;
  icon: "truck" | "landmark" | "accessibility" | "banknote";
  description: string;
  details: string[];
}

export interface LuatSu7OfficeBranch {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface LuatSu7LawyerMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: string;
}

export interface LuatSu7Data extends ClonedTemplateBaseData {
  recoverySection: {
    heading: string;
    prefixText: string;
    highlightAmount: string;
    sinceLabel: string;
    columns: string[];
  };
  practiceBoxes: LuatSu7PracticeBox[];
  helpBanner: {
    title: string;
    lines: string[];
    backgroundImage: string;
  };
  teamSection: {
    title: string;
    quote: string;
    members: LuatSu7LawyerMember[];
  };
  branchesBanner: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    branches: LuatSu7OfficeBranch[];
  };
  questionBanner: {
    title: string;
    description: string;
    ctaText: string;
    backgroundImage: string;
  };
}

export const luatSu7DefaultData: LuatSu7Data = {
  business: {
    name: "MONA LAWYERS",
    phone: ["1900 636 648", "0909 636 648"],
    email: ["mon@mona.media", "luatsu@monalawyers.vn"],
    address: "319 C16 Lý Thường Kiệt, phường 15, quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 720,
    aboutTitle: "Công ty chúng tôi đã phục hồi hơn 3.000.000.000 VNĐ",
    aboutText: [
      "Việt Nam hội nhập vào nền kinh tế Thế giới và gia nhập vào tổ chức kinh tế Thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết, tầm nhìn và kinh nghiệm chuyên môn sâu rộng trong và ngoài nước nhằm hỗ trợ hiệu quả về sự phát triển thuận lợi và vững chắc cho các Doanh nghiệp, các Nhà đầu tư."
    ],
    highlights: [
      "Hơn 20 năm hoạt động kể từ năm 1999 với hơn 10.000 khách hàng doanh nghiệp và cá nhân",
      "Chuyên sâu Pháp lý – Thuế – Tài chính – Kế toán và thu hồi quyền lợi bảo hiểm",
      "Hệ thống văn phòng đại diện tại TP. Hồ Chí Minh, Hà Nội và Huế"
    ]
  },
  hero: {
    eyebrow: "LIÊN ĐOÀN LUẬT SƯ TRANH TỤNG & BẢO VỆ QUYỀN LỢI",
    subtitle: "QUYỀN LỢI BẢO HIỂM",
    title: "Chúng tôi cung cấp trợ giúp pháp lý cho",
    description:
      "Bảo vệ tối đa quyền lợi bảo hiểm, bồi thường thiệt hại, tai nạn lao động và giải quyết tranh chấp thuế cho cá nhân, doanh nghiệp trên toàn quốc.",
    ctaText: "Xem thêm",
    ctaLink: "#practice-areas",
    secondaryCtaText: "Liên hệ ngay",
    secondaryCtaLink: "#contact-form",
    backgroundImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=85"
  },
  recoverySection: {
    heading: "Công ty chúng tôi đã phục hồi",
    prefixText: "hơn",
    highlightAmount: "3.000.000.000 VNĐ",
    sinceLabel: "TỪ NĂM 1999",
    columns: [
      "Việt Nam hội nhập vào nền kinh tế Thế giới và gia nhập vào tổ chức kinh tế Thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết, tầm nhìn và kinh nghiệm chuyên môn sâu rộng trong và ngoài nước nhằm hỗ trợ hiệu quả về sự phát triển thuận lợi và vững chắc cho các Doanh nghiệp, các Nhà đầu tư.",
      "Việt Nam hội nhập vào nền kinh tế Thế giới và gia nhập vào tổ chức kinh tế Thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết, tầm nhìn và kinh nghiệm chuyên môn sâu rộng trong và ngoài nước nhằm hỗ trợ hiệu quả về sự phát triển thuận lợi và vững chắc cho các Doanh nghiệp, các Nhà đầu tư.",
      "Việt Nam hội nhập vào nền kinh tế Thế giới và gia nhập vào tổ chức kinh tế Thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết, tầm nhìn và kinh nghiệm chuyên môn sâu rộng trong và ngoài nước nhằm hỗ trợ hiệu quả về sự phát triển thuận lợi và vững chắc cho các Doanh nghiệp, các Nhà đầu tư."
    ]
  },
  practiceBoxes: [
    {
      id: "pb-1",
      title: "Bảo hiểm ô tô",
      icon: "truck",
      description:
        "Đại diện yêu cầu bồi thường bảo hiểm thân vỏ, trách nhiệm dân sự chủ xe cơ giới và giải quyết tranh chấp từ chối bồi thường bảo hiểm.",
      details: [
        "Giám định độc lập mức độ thiệt hại phương tiện",
        "Đàm phán trực tiếp với doanh nghiệp bảo hiểm",
        "Khởi kiện yêu cầu chi trả100% quyền lợi hợp đồng bảo hiểm"
      ]
    },
    {
      id: "pb-2",
      title: "Bồi thường tiền",
      icon: "landmark",
      description:
        "Thu hồi công nợ khó đòi, yêu cầu bồi thường thiệt hại ngoài hợp đồng, vi phạm nghĩa vụ thanh toán và phạt vi phạm thương mại.",
      details: [
        "Rà soát hồ sơ công nợ và xác minh năng lực tài sản bên nợ",
        "Áp dụng biện pháp khẩn cấp tạm thời phong tỏa tài sản",
        "Đại diện thi hành án thu hồi dòng tiền nhanh chóng"
      ]
    },
    {
      id: "pb-3",
      title: "Tai nạn lao động",
      icon: "accessibility",
      description:
        "Bảo vệ quyền lợi người lao động và tư vấn trách nhiệm người sử dụng lao động trong các vụ tai nạn lao động, bệnh nghề nghiệp.",
      details: [
        "Hoàn thiện hồ sơ giám định suy giảm khả năng lao động",
        "Yêu cầu chi trả trợ cấp bảo hiểm tai nạn lao động và bồi thường",
        "Đại diện hòa giải và tranh tụng tranh chấp lao động tại Tòa án"
      ]
    },
    {
      id: "pb-4",
      title: "Tranh chấp thuế",
      icon: "banknote",
      description:
        "Tư vấn thanh tra quyết toán thuế, khiếu nại quyết định truy thu thuế, hoàn thuế GTGT và hoạch định cấu trúc thuế doanh nghiệp.",
      details: [
        "Rà soát rủi ro hồ sơ kế toán – thuế trước kỳ thanh tra",
        "Soạn thảo văn bản giải trình và khiếu nại quyết định ấn định thuế",
        "Đại diện khởi kiện vụ án hành chính về quản lý thuế"
      ]
    }
  ],
  helpBanner: {
    title: "Chúng tôi ở đây để giúp đỡ",
    lines: [
      "Công ty Luật – MONA LAWYERS được lập ra để đáp ứng nhu cầu cho các Doanh nghiệp về mặt Pháp lý – Thuế – Tài chính – Kế toán.",
      "Công ty Luật – MONA LAWYERS được lập ra để đáp ứng nhu cầu cho các Doanh nghiệp về mặt Pháp lý – Thuế – Tài chính – Kế toán."
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80"
  },
  teamSection: {
    title: "Thành phần luật sư",
    quote:
      "“Bắt đầu ở nơi bạn đứng và làm việc với bất kỳ công cụ nào bạn có thể có trong lệnh của bạn, và các công cụ tốt hơn sẽ được tìm thấy khi bạn đi dọc theo”",
    members: [
      {
        id: "mem-1",
        name: "NGUYỄN THANH TỰU",
        role: "GIÁM ĐỐC ĐIỀU HÀNH",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
        specialty: "Luật Doanh nghiệp, Bảo hiểm & Tranh tụng Thương mại",
        bio: "Hơn 22 năm kinh nghiệm điều hành hãng luật và trực tiếp bảo vệ quyền lợi cho các tập đoàn lớn."
      },
      {
        id: "mem-2",
        name: "LÊ KIM TÂM",
        role: "LUẬT SƯ CỘNG SỰ",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        specialty: "Bồi thường thiệt hại, Bảo hiểm Ô tô & Lao động",
        bio: "Chuyên gia đàm phán và giải quyết các vụ việc bồi thường bảo hiểm phức tạp."
      },
      {
        id: "mem-3",
        name: "VÕ AN NHIÊN",
        role: "GIÁM ĐỐC TÀI CHÍNH",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
        specialty: "Tư vấn Thuế, Kiểm toán & Cấu trúc Tài chính Doanh nghiệp",
        bio: "Kế toán trưởng kiêm Chuyên gia tư vấn thuế cao cấp với hơn 18 năm kinh nghiệm."
      },
      {
        id: "mem-4",
        name: "TRẦN LAN NGA",
        role: "LUẬT SƯ THÀNH VIÊN",
        image:
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
        specialty: "Tố tụng Dân sự, Hành chính & Giải quyết Tranh chấp Thuế",
        bio: "Đại diện tranh tụng xuất sắc với tỷ lệ thu hồi công nợ và thắng kiện vượt trội."
      }
    ]
  },
  branchesBanner: {
    title: "Liên hệ",
    subtitle: "Liên hệ bất kì khi nào bạn cần đến chúng tôi",
    backgroundImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80",
    branches: [
      {
        id: "br-hcm",
        city: "HỒ CHÍ MINH",
        address: "319 C16, Lý Thường Kiệt, phường 15, quận 11",
        phone: "1900 636 648",
        email: "mon@mona.media"
      },
      {
        id: "br-hn",
        city: "HÀ NỘI",
        address: "319 C16, Lý Thường Kiệt, phường 15, quận 11",
        phone: "1900 636 648",
        email: "mon@mona.media"
      },
      {
        id: "br-hue",
        city: "HUẾ",
        address: "319 C16, Lý Thường Kiệt, phường 15, quận 11",
        phone: "1900 636 648",
        email: "mon@mona.media"
      }
    ]
  },
  testimonials: [
    {
      id: "rev-1",
      author: "Anh Luật",
      role: "Khách hàng thân thiết",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "Với một đội ngũ Luật sư, kế toán trưởng, chuyên viên thuế giỏi có tư cách đạo đức, có trách nhiệm cao trong công việc sẽ đem đến cho Quý doanh nghiệp những dịch vụ tốt nhất. Sau 20 năm hoạt động kể từ năm 1999, MONA Lawyers đã có hơn 10.000 khách hàng."
    },
    {
      id: "rev-2",
      author: "Chị Minh Châu",
      role: "Giám đốc Tài chính Tập đoàn Á Châu",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content:
        "Nhờ sự hỗ trợ quyết liệt của đoàn luật sư, công ty chúng tôi đã giải quyết dứt điểm tranh chấp bảo hiểm hàng hóa vận chuyển quốc tế và thu hồi đầy đủ hơn 1,8 tỷ đồng tiền bồi thường."
    }
  ],
  questionBanner: {
    title: "Đặt câu hỏi cho chúng tôi ?",
    description:
      "Chất lượng – Uy tín – Bảo Mật luôn tạo niềm tin cho quý doanh nghiệp. Liên tục nghiên cứu văn bản pháp luật mới nhất về Thuế – Luật – Kế toán cùng với việc áp dụng công nghệ thông tin trong việc cung cấp dịch vụ tư vấn hiệu quả nhất.",
    ctaText: "Gửi câu hỏi",
    backgroundImage:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80"
  }
};
