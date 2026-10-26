import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile5OrderStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface CorporateProfile5FeeItem {
  id: string;
  title: string;
  description: string;
  unitRate: string;
}

export interface CorporateProfile5Commitment {
  id: string;
  title: string;
  description: string;
}

export interface CorporateProfile5TemplateData extends ClonedTemplateBaseData {
  orderSteps: CorporateProfile5OrderStep[];
  feeItems: CorporateProfile5FeeItem[];
  commitments: CorporateProfile5Commitment[];
  guarantees: Array<{ id: string; title: string; description: string }>;
}

export const corporateProfile5DefaultData: CorporateProfile5TemplateData = {
  business: {
    name: "ShipFast Logistics",
    logo: "",
    phone: ["0909 313 728", "028 3811 7288"],
    email: ["info@shipfast.vn", "care@shipfast.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 340,
    experienceYears: "10+",
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "ShipFast Logistics là đơn vị chuyên nghiệp hàng đầu trong lĩnh vực vận chuyển quốc tế, ủy thác xuất nhập khẩu và quản trị chuỗi cung ứng toàn diện. Với nền tảng công nghệ theo dõi vận đơn thời gian thực và hệ thống kho bãi hiện đại, chúng tôi tự tin đáp ứng mọi nhu cầu vận chuyển đường biển, đường hàng không và đường bộ của doanh nghiệp.",
      "Chúng tôi cam kết tối ưu hóa thời gian thông quan, đảm bảo an toàn hàng hóa 100% và minh bạch mọi khoản cước phí vận tải."
    ],
    highlights: [
      "Vận chuyển nhanh chóng, an toàn đúng lịch trình",
      "Bảo mật thông tin đơn hàng và nguồn hàng tuyệt đối"
    ]
  },
  hero: {
    eyebrow: "LOGISTICS ĐÁNG TIN CẬY",
    title: "Đồng Hành Cùng Bạn Trên Con Đường Thành Công!",
    subtitle:
      "Dịch vụ Logistics chuyên nghiệp và toàn diện của ShipFast đảm bảo sự hiệu quả và tin cậy cho mọi hoạt động xuất nhập khẩu, vận chuyển và lưu kho hàng hóa của doanh nghiệp bạn.",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#dich-vu",
    secondaryCtaText: "TÍNH CƯỚC VẬN CHUYỂN",
    secondaryCtaLink: "#bang-gia",
    backgroundImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=85"
  },
  stats: [
    { id: "st-1", number: "10+", title: "Năm kinh nghiệm" },
    { id: "st-2", number: "6+", title: "Kho hàng lớn" },
    { id: "st-3", number: "12k+", title: "Khách hàng doanh nghiệp" }
  ],
  services: [
    {
      id: "srv-1",
      title: "Nhập hàng chính ngạch",
      description:
        "Đảm bảo an toàn pháp lý, đầy đủ chứng từ CO/CQ và hóa đơn VAT cho hàng hóa nhập khẩu chính ngạch.",
      price: "Từ 1.5% phí ủy thác"
    },
    {
      id: "srv-2",
      title: "Vận chuyển hàng hóa",
      description:
        "Vận chuyển đa phương thức đường biển (FCL/LCL), đường hàng không và đường bộ xuyên biên giới đúng tiến độ.",
      price: "Từ 18.000đ/kg"
    },
    {
      id: "srv-3",
      title: "Lưu trữ và quản lý kho",
      description:
        "Hệ thống kho ngoại quan và kho phân phối tiêu chuẩn quốc tế tích hợp phần mềm quản lý tồn kho WMS.",
      price: "Miễn phí 7 ngày đầu"
    },
    {
      id: "srv-4",
      title: "Quản lý chuỗi cung ứng",
      description:
        "Tối ưu hóa quy trình thu mua, đóng gói, thông quan và phân phối hàng hóa đến tận tay đại lý toàn quốc.",
      price: "Giải pháp trọn gói"
    }
  ],
  orderSteps: [
    {
      id: "ord-1",
      number: "01",
      title: "Tạo đơn hàng",
      description:
        "Liên hệ hoặc sử dụng hệ thống đặt hàng trực tuyến để gửi thông tin kiện hàng, tuyến vận chuyển và kiểm tra báo giá."
    },
    {
      id: "ord-2",
      number: "02",
      title: "Xác nhận & thanh toán",
      description:
        "Xác nhận thông tin vận đơn, lịch tàu/bay, chọn phương thức thanh toán linh hoạt và hoàn tất thủ tục ký gửi."
    },
    {
      id: "ord-3",
      number: "03",
      title: "Xử lý & vận chuyển",
      description:
        "Kho quốc tế tiếp nhận hàng hóa, kiểm đếm, đóng gói gia cố chống sốc, khai báo hải quan và vận chuyển về Việt Nam."
    },
    {
      id: "ord-4",
      number: "04",
      title: "Nhận hàng & xác nhận",
      description:
        "Giao hàng tận nơi đến kho hoặc địa chỉ của khách hàng, đồng kiểm biên bản bàn giao và tất toán đơn hàng."
    }
  ],
  feeItems: [
    {
      id: "fee-1",
      title: "Phí vận chuyển quốc tế",
      description:
        "Phí vận chuyển quốc tế bao gồm cước phí đường biển hoặc đường hàng không từ quốc gia xuất xứ về cảng Việt Nam.",
      unitRate: "Từ 18.000đ/kg hoặc 1.850.000đ/m³"
    },
    {
      id: "fee-2",
      title: "Phí xử lý hải quan",
      description:
        "Phí lập tờ khai hải quan điện tử VNACCS, kiểm tra chuyên ngành và hoàn tất thủ tục thông quan chính ngạch.",
      unitRate: "Trọn gói từ 1.200.000đ/tờ khai"
    },
    {
      id: "fee-3",
      title: "Phí lưu kho",
      description:
        "Phí lưu kho phụ thuộc vào diện tích CBM thực tế. Miễn phí lưu kho 7 ngày đầu tiên cho mọi lô hàng.",
      unitRate: "Miễn phí 7 ngày đầu"
    },
    {
      id: "fee-4",
      title: "Phí xử lý nội địa",
      description:
        "Phí bốc xếp, dán nhãn phụ hàng hóa, đóng kiện gỗ và trung chuyển nội địa từ cảng về kho khách hàng.",
      unitRate: "Theo biểu phí khu vực"
    },
    {
      id: "fee-5",
      title: "Phí bảo hiểm hàng hóa",
      description:
        "Bảo hiểm rủi ro hàng hóa 100% giá trị khai báo trong suốt hành trình vận chuyển quốc tế và nội địa.",
      unitRate: "Từ 0.3% giá trị lô hàng"
    }
  ],
  guarantees: [
    {
      id: "g-1",
      title: "Tối ưu chất lượng",
      description:
        "Quy trình đóng gói, bốc xếp chuẩn quốc tế, an toàn và phù hợp với đặc thù từng nhóm hàng hóa."
    },
    {
      id: "g-2",
      title: "Đảm bảo và bảo hành",
      description:
        "Chính sách bảo hiểm đền bù 100% giá trị hàng hóa nếu xảy ra thất lạc hoặc hư hỏng do vận chuyển."
    },
    {
      id: "g-3",
      title: "Trợ giúp và hỗ trợ 24/7",
      description:
        "Chuyên viên điều phối vận đơn theo sát lô hàng và hỗ trợ giải đáp mọi thủ tục hải quan 24/7."
    }
  ],
  commitments: [
    {
      id: "cm-1",
      title: "Chất lượng hàng đầu",
      description:
        "Cam kết cung cấp dịch vụ vận tải và thông quan chất lượng cao, đáp ứng vượt kỳ vọng của doanh nghiệp."
    },
    {
      id: "cm-2",
      title: "Hỗ trợ tận tâm",
      description:
        "Đội ngũ chuyên viên xuất nhập khẩu tư vấn mã HS Code, thuế suất và chứng từ tận tâm cho khách hàng."
    },
    {
      id: "cm-3",
      title: "Đáp ứng thời gian",
      description:
        "Tuân thủ nghiêm ngặt lịch tàu và cam kết thời gian toàn trình đã ký kết trong hợp đồng vận chuyển."
    }
  ],
  clients: [
    { id: "cl-1", name: "MAERSK LINE" },
    { id: "cl-2", name: "DHL GLOBAL" },
    { id: "cl-3", name: "PERTAMINA LOGISTICS" },
    { id: "cl-4", name: "KYOCERA SUPPLY" },
    { id: "cl-5", name: "COSCO SHIPPING" }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Lê Hào",
      role: "Giám đốc Thu mua • Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi rất hài lòng với dịch vụ vận chuyển chính ngạch của ShipFast! Nhân viên hỗ trợ khai báo hải quan rất nhiệt tình và thân thiện. Mọi thắc mắc về chứng từ CO/CQ đều được giải đáp chi tiết và dễ hiểu.”"
    },
    {
      id: "rv-2",
      author: "Nguyễn Sâm",
      role: "Chủ chuỗi bán lẻ • Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Hàng về kho đúng tiến độ cam kết, kiện hàng được đóng pallet gỗ rất chắc chắn không hề móp méo. Hệ thống tra cứu mã vận đơn trực tuyến giúp công ty tôi chủ động kế hoạch phân phối.”"
    },
    {
      id: "rv-3",
      author: "Bạch Ngân",
      role: "Trưởng phòng XNK • Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Biểu phí vận chuyển quốc tế và phí ủy thác cực kỳ minh bạch, không phát sinh phụ phí ẩn. Đội ngũ chăm sóc khách hàng hỗ trợ 24/7 kể cả ngoài giờ hành chính.”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Giải pháp vận chuyển hàng hóa xuyên biên giới tối ưu chi phí 2026",
      date: "11 TH4",
      category: "VẬN TẢI QUỐC TẾ",
      excerpt:
        "Cập nhật các tuyến vận tải biển và đường bộ kết nối trực tiếp từ các trung tâm sản xuất Châu Á về cảng Cát Lái và Hải Phòng.",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-2",
      title: "Quy trình thủ tục hải quan nhập khẩu chính ngạch doanh nghiệp cần biết",
      date: "18 TH4",
      category: "THỦ TỤC HẢI QUAN",
      excerpt:
        "Hướng dẫn chuẩn bị bộ chứng từ Invoice, Packing List, Bill of Lading và C/O form E, D để hưởng ưu đãi thuế nhập khẩu.",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nw-3",
      title: "Xu hướng số hóa quản trị kho bãi và chuỗi cung ứng thông minh",
      date: "25 TH4",
      category: "CHUỖI CUNG ỨNG",
      excerpt:
        "Ứng dụng hệ thống quản lý kho WMS và định vị container thời gian thực giúp doanh nghiệp giảm 30% chi phí lưu kho.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default corporateProfile5DefaultData;
