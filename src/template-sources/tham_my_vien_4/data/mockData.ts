import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Thamy4GiftBox {
  id: string;
  badgeTop: string;
  discountText: string;
  serviceName: string;
}

export interface Thamy4PrivilegeBox {
  id: string;
  ribbonText: string;
  valueText: string;
  unitText?: string;
  subText: string;
}

export interface Thamy4TransformationCase {
  id: string;
  personName: string;
  personTitle: string;
  servicePerformed: string;
  afterImage: string;
  beforeImage: string;
  storyQuote: string;
}

export interface Thamy4TimelineSlot {
  id: string;
  time: string;
  activity: string;
}

export interface Thamy4Data extends ClonedTemplateBaseData {
  eventScriptTagline: string;
  eventSubTitle: string;
  eventMainTitle: string;
  freeSurgeryBoxes: Thamy4GiftBox[];
  extraGiftBoxes: Thamy4GiftBox[];
  attendeePrivileges: Thamy4PrivilegeBox[];
  transformationCases: Thamy4TransformationCase[];
  eventDateText: string;
  eventVenueText: string;
  timelineSlots: Thamy4TimelineSlot[];
  hotlineGala: string;
  coupleBannerImage1: string;
  coupleBannerImage2: string;
  videoThumbnailImage: string;
}

export const thamMyVien4DefaultData: Thamy4Data = {
  business: {
    name: "Viện Thẩm Mỹ Hàn Quốc JW",
    phone: ["076 922 0162", "1900 0027"],
    email: ["cskh@thammyhanquoc.vn", "tuvan@thammyhanquoc.vn"],
    address: "1A Tôn Thất Tùng, P. Phạm Ngũ Lão, Quận 1, TP.HCM",
    workingHours: "07:30 - 19:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 3600,
    experienceYears: "18 Năm",
    aboutTitle: "600 CƠ HỘI PHẪU THUẬT MIỄN PHÍ",
    aboutText: [
      "Viện Thẩm Mỹ Hàn Quốc JW tiên phong chuyển giao công nghệ tạo hình khuôn mặt, phẫu thuật hàm mặt và trẻ hóa da toàn diện chuẩn Hàn Quốc tại Việt Nam.",
      "Chương trình Đại Hội Thẩm Mỹ - Tỏa Sáng Cùng Sao quy tụ đội ngũ Giáo sư, Tiến sĩ, Bác sĩ đầu ngành quốc tế cùng hàng trăm suất tài trợ thẩm mỹ miễn phí 100%."
    ],
    highlights: [
      "600 cơ hội phẫu thuật & trẻ hóa da tài trợ 100% chi phí",
      "Hội tụ đội ngũ Giáo sư, Tiến sĩ thẩm mỹ hàng đầu Hàn Quốc & Quốc tế",
      "Giảm đến 40% toàn bộ dịch vụ thẩm mỹ công nghệ cao cho khách tham dự"
    ]
  },
  eventScriptTagline: "Nhan sắc mới - Khởi đầu mới",
  eventSubTitle: "ĐẠI HỘI THẨM MỸ",
  eventMainTitle: "TỎA SÁNG CÙNG SAO",
  hotlineGala: "1900 0027",
  hero: {
    eyebrow: "Nhan sắc mới - Khởi đầu mới",
    title: "TỎA SÁNG CÙNG SAO",
    subtitle:
      "Đại hội thẩm mỹ công nghệ Hàn Quốc lớn nhất năm — Cơ hội gặp gỡ trực tiếp các chuyên gia tạo hình hàng đầu và nhận tài trợ 100% chi phí thẩm mỹ.",
    ctaText: "ĐĂNG KÝ THAM DỰ NGAY",
    ctaLink: "#dang-ky-dai-hoi",
    backgroundImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85"
  },
  coupleBannerImage1:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  coupleBannerImage2:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  videoThumbnailImage:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  freeSurgeryBoxes: [
    {
      id: "fs-1",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Trẻ hóa da toàn diện"
    },
    {
      id: "fs-2",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Trẻ hóa da toàn diện"
    },
    {
      id: "fs-3",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Trẻ hóa da toàn diện"
    },
    {
      id: "fs-4",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Trẻ hóa da toàn diện"
    }
  ],
  extraGiftBoxes: [
    {
      id: "eg-1",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Thẩm mỹ mắt toàn diện"
    },
    {
      id: "eg-2",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Thẩm mỹ răng sứ Veneer không mài"
    },
    {
      id: "eg-3",
      badgeTop: "MIỄN PHÍ",
      discountText: "100%",
      serviceName: "Trẻ hóa da toàn diện"
    }
  ],
  attendeePrivileges: [
    {
      id: "priv-1",
      ribbonText: "Giảm đến",
      valueText: "40%",
      subText: "Tất cả dịch vụ thẩm mỹ"
    },
    {
      id: "priv-2",
      ribbonText: "Tặng thẻ tiền mặt",
      valueText: "500.000",
      unitText: "vnđ",
      subText: "Áp dụng ngay tại sự kiện"
    },
    {
      id: "priv-3",
      ribbonText: "Nhận tiền mặt",
      valueText: "2.000.000",
      unitText: "vnđ",
      subText: "Khi tham gia vòng quay"
    }
  ],
  transformationCases: [
    {
      id: "case-1",
      personName: "DUY PHƯƠNG",
      personTitle: "Thạc sĩ nghệ thuật",
      servicePerformed:
        "Dịch vụ: Phẫu thuật hàm móm (2 hàm) chỉnh trục cằm lệch, trượt cằm, niềng răng",
      afterImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      storyQuote:
        "Sau ca đại phẫu chỉnh hàm mặt tại Viện Thẩm Mỹ Hàn Quốc, gương mặt tôi hoàn toàn cân đối và sự nghiệp thăng hoa."
    },
    {
      id: "case-2",
      personName: "MINH YẾN",
      personTitle: "Người mẫu tự do",
      servicePerformed:
        "Dịch vụ: Nâng mũi cấu trúc S-Line sụn sườn, cắt mí mắt Plasma và trẻ hóa da Meso",
      afterImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
      storyQuote:
        "Góc nghiêng thanh thoát tự nhiên giúp tôi tự tin trước ống kính mà không cần chỉnh sửa ảnh."
    },
    {
      id: "case-3",
      personName: "KHÁNH LINH",
      personTitle: "Doanh nhân",
      servicePerformed:
        "Dịch vụ: Căng chỉ collagen vàng 24K toàn mặt kết hợp thẩm mỹ răng sứ Veneer",
      afterImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      beforeImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
      storyQuote:
        "Làn da trẻ ra 10 tuổi cùng nụ cười rạng rỡ giúp tôi luôn tràn đầy năng lượng trong công việc."
    }
  ],
  team: [
    {
      id: "doc-1",
      name: "GS.BS Paulo Godoy",
      position: "Chuyên gia thẩm mỹ tạo hình quốc tế",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "doc-2",
      name: "TS.BS Nguyễn Phan Tú Dung",
      position: "Chuyên gia thẩm mỹ hàng đầu Việt Nam",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "doc-3",
      name: "GS.BS Brian Kinney",
      position: "Chuyên gia tạo hình & trẻ hóa công nghệ cao",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  eventDateText: "7h00 ngày 8 tháng 12",
  eventVenueText:
    "Trung tâm hội nghị THE ADORA DYNASTY - 1A Tôn Thất Tùng, P.Phạm Ngũ Lão, Q.1, TP.HCM (Đối diện Bệnh Viện Thẩm Mỹ JW Hàn Quốc)",
  timelineSlots: [
    { id: "tl-1", time: "7h00 – 8h00", activity: "Đón khách và check in" },
    { id: "tl-2", time: "8h00 – 9h00", activity: "Tư Vấn" },
    { id: "tl-3", time: "9h00 – 10h30", activity: "Đại Hội Thẩm Mỹ" },
    { id: "tl-4", time: "10h30 – 11h00", activity: "Bế Mạc, Tea break" },
    { id: "tl-5", time: "11h00 – 12h00", activity: "Tư Vấn" }
  ]
};
