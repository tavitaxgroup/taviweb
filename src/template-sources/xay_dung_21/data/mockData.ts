import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung21ServiceTile {
  id: string;
  title: string;
  category: string;
  colSpan: "wide" | "medium" | "third";
  image: string;
  description: string;
}

export interface XayDung21ReviewCard {
  id: string;
  headline: string;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface XayDung21ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: "calendar" | "handshake" | "wrench" | "home";
}

export interface XayDung21PricingTicket {
  id: string;
  packageName: string;
  subtitle: string;
  note: string;
  conditionText: string;
}

export interface XayDung21BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
}

export interface XayDung21TemplateData extends ClonedTemplateBaseData {
  hotlineBannerTitle: string;
  hotlineNumber: string;
  hotlineSubtext: string;
  serviceTiles: XayDung21ServiceTile[];
  reviewCards: XayDung21ReviewCard[];
  processSteps: XayDung21ProcessStep[];
  pricingTickets: XayDung21PricingTicket[];
  beforeAfterProjects: XayDung21BeforeAfterProject[];
  appFeatures: string[];
}

export const xayDung21DefaultData: XayDung21TemplateData = {
  business: {
    name: "MONA HOMEFIX",
    logo: "",
    phone: ["1900 - 636 - 648", "0313 728 397"],
    email: ["info@themona.global", "baogia@monahomefix.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "T2 - T6 : 9 A.M - 6 P.M",
    rating: 4.9,
    reviewCount: 5126,
    experienceYears: "9+",
    aboutTitle: "Thành quả của chúng tôi trong 9 năm qua",
    aboutText: [
      "Hãy để những chuyên gia trong lĩnh vực chăm sóc, sửa chữa và cải tạo cho ngôi nhà của bạn. Cam kết hài lòng 100% mọi khách hàng với đội ngũ kỹ sư trực chiến khắp các quận."
    ],
    highlights: [
      "Khảo sát tận nơi trong 30 phút",
      "Báo giá minh bạch trước khi làm",
      "Vật tư chính hãng có bảo hành",
      "Hỗ trợ khẩn cấp 24/7"
    ]
  },
  hero: {
    eyebrow: "DỊCH VỤ SỬA CHỮA & CẢI TẠO NHÀ TRỌN GÓI",
    title: "Việc chăm sóc NHÀ CỦA BẠN hãy để chúng tôi",
    subtitle:
      "Chuyên sửa chữa điện nước, chống thấm mái, lát sàn gỗ, sơn sửa cải tạo nhà phố và bảo trì hệ thống kỹ thuật tòa nhà.",
    ctaText: "TÌM HIỂU",
    ctaLink: "#dich-vu",
    secondaryCtaText: "ĐẶT LỊCH HẸN ONLINE",
    secondaryCtaLink: "#dat-dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  hotlineBannerTitle: "Một cuộc gọi có thể giải quyết tất cả vấn đề nhà của bạn",
  hotlineNumber: "1900 – 636 – 648",
  hotlineSubtext: "Các bạn còn có thể tìm kiếm chúng tôi trên smartphone",
  serviceTiles: [
    {
      id: "st-1",
      title: "Dịch vụ ống nước",
      category: "Cấp thoát nước",
      colSpan: "wide",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1000&q=80",
      description:
        "Xử lý rò rỉ đường ống âm tường, thông nghẹt, lắp đặt thiết bị vệ sinh và máy nước nóng năng lượng mặt trời."
    },
    {
      id: "st-2",
      title: "Dịch vụ điện",
      category: "Điện dân dụng",
      colSpan: "medium",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      description:
        "Sửa chữa chập điện, nâng cấp tủ điện aptomat, đi lại đường dây âm tường và lắp đặt đèn chiếu sáng."
    },
    {
      id: "st-3",
      title: "Vệ sinh mái",
      category: "Chống thấm & Mái",
      colSpan: "third",
      image:
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=700&q=80",
      description:
        "Vệ sinh mái ngói, xử lý chống thấm dột sàn mái, thay tôn cách nhiệt và máng xối thoát nước mưa."
    },
    {
      id: "st-4",
      title: "Lát sàn",
      category: "Hoàn thiện sàn",
      colSpan: "third",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=700&q=80",
      description:
        "Thi công lát sàn gỗ công nghiệp, sàn nhựa giả gỗ chống nước và ốp lát gạch men cao cấp."
    },
    {
      id: "st-5",
      title: "Dịch vụ khác",
      category: "Sửa chữa tổng hợp",
      colSpan: "third",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80",
      description:
        "Sửa khóa cửa, đóng trần thạch cao, sơn dặm vá tường, lắp đặt rèm cửa và cải tạo nội thất trọn gói."
    }
  ],
  stats: [
    { id: "s-1", number: "5126+", title: "KHÁCH HÀNG" },
    { id: "s-2", number: "842+", title: "DỰ ÁN HOÀN THÀNH" },
    { id: "s-3", number: "23+", title: "QUỐC GIA & TỈNH THÀNH" },
    { id: "s-4", number: "67+", title: "KĨ SƯ" }
  ],
  reviewCards: [
    {
      id: "rc-1",
      headline: "Chất lượng dịch vụ tốt, hiện đại",
      content:
        "Chất lượng xây dựng và sửa chữa ở đây rất hoàn thiện. Bảo trì thường xuyên và tiếp nhận phản hồi khách hàng nhanh chóng.",
      author: "CHỊ VÂN",
      role: "Nhân viên văn phòng",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rc-2",
      headline: "Tác phong làm việc chuyên nghiệp",
      content:
        "Chất lượng xây dựng ở đây rất hoàn thiện. Đội ngũ kỹ thuật đến đúng giờ, làm việc gọn gàng và vệ sinh sạch sẽ sau khi bàn giao.",
      author: "ANH LONG",
      role: "Nhân viên văn phòng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rc-3",
      headline: "Thời gian hoàn thành nhanh chóng",
      content:
        "Báo giá rõ ràng ngay từ đầu, không phát sinh chi phí phụ. Hệ thống chống thấm và điện nước hoạt động rất ổn định.",
      author: "CHỊ NGA",
      role: "Nhân viên văn phòng",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  ],
  processSteps: [
    {
      id: "ps-1",
      title: "1. Đặt dịch vụ online",
      description:
        "Các bước dịch vụ cam kết thực hiện đúng tiêu chuẩn đã được đề cập trong hợp đồng.",
      icon: "calendar"
    },
    {
      id: "ps-2",
      title: "2. Xác nhận dịch vụ",
      description:
        "Các bước dịch vụ cam kết thực hiện đúng tiêu chuẩn đã được đề cập trong hợp đồng.",
      icon: "handshake"
    },
    {
      id: "ps-3",
      title: "3. Bắt đầu làm việc",
      description:
        "Các bước dịch vụ cam kết thực hiện đúng tiêu chuẩn đã được đề cập trong hợp đồng.",
      icon: "wrench"
    },
    {
      id: "ps-4",
      title: "4. Hoàn tất, thanh toán",
      description:
        "Các bước dịch vụ cam kết thực hiện đúng tiêu chuẩn đã được đề cập trong hợp đồng.",
      icon: "home"
    }
  ],
  pricingTickets: [
    {
      id: "pt-1",
      packageName: "GÓI 800K",
      subtitle: "Vệ sinh các hệ thống trong nhà",
      note: "Xem chi tiết trong phần dịch vụ của chúng tôi",
      conditionText: "* Điều kiện áp dụng"
    },
    {
      id: "pt-2",
      packageName: "GÓI 2 TRIỆU",
      subtitle: "Bảo trì các hệ thống điện và nước",
      note: "Xem chi tiết trong phần dịch vụ của chúng tôi",
      conditionText: "* Điều kiện áp dụng"
    },
    {
      id: "pt-3",
      packageName: "GÓI 5 TRIỆU",
      subtitle: "Trọn gói tất cả các dịch vụ cung cấp",
      note: "Xem chi tiết trong phần dịch vụ của chúng tôi",
      conditionText: "* Điều kiện áp dụng"
    }
  ],
  beforeAfterProjects: [
    {
      id: "ba-1",
      title: "Cải tạo mặt tiền nhà phố 3 tầng",
      category: "Cải tạo ngoại thất",
      beforeImage:
        "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ba-2",
      title: "Nâng cấp sân vườn & Lối vào biệt thự",
      category: "Sân vườn & Mặt tiền",
      beforeImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ba-3",
      title: "Cải tạo chống thấm & Ốp lát phòng tắm",
      category: "Phòng tắm & Nước",
      beforeImage:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ba-4",
      title: "Sơn mới & Lát sàn gỗ phòng khách",
      category: "Nội thất phòng khách",
      beforeImage:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ba-5",
      title: "Nâng cấp hệ tủ bếp & Đèn LED âm trần",
      category: "Không gian bếp",
      beforeImage:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ba-6",
      title: "Xử lý chống thấm & Sơn hiệu ứng phòng ngủ",
      category: "Sơn & Chống thấm",
      beforeImage:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
    }
  ],
  appFeatures: [
    "Chức năng 1 : Đặt lịch thợ sửa chữa chỉ trong 30 giây",
    "Chức năng 2 : Theo dõi vị trí kỹ thuật viên theo thời gian thực",
    "Chức năng 3 : Tra cứu bảng giá vật tư minh bạch niêm yết",
    "Chức năng 4 : Quản lý sổ bảo hành điện tử lên tới 5 năm"
  ],
  news: [
    {
      id: "nw-1",
      title: "Dịch vụ Lắp đặt, sửa chữa điện lạnh dân dụng",
      date: "25 Th1",
      excerpt: "Bảo dưỡng điều hòa, máy giặt, bình nóng lạnh tại nhà.",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "nw-2",
      title: "Dịch vụ Vệ sinh nhà cửa sau xây dựng trọn gói",
      date: "25 Th1",
      excerpt: "Làm sạch sơn bám, đánh bóng sàn đá và khử khuẩn.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "nw-3",
      title: "Dịch vụ Sửa chữa ống nước & Chống thấm triệt để",
      date: "25 Th1",
      excerpt: "Siêu âm dò tìm rò rỉ nước ngầm không cần đục phá.",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=75"
    }
  ]
};

export default xayDung21DefaultData;
