import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DroneSpecCallout {
  id: string;
  value: string;
  label: string;
  side: "left" | "right";
  icon: "camera" | "clock" | "drone" | "speed" | "gimbal" | "signal";
}

export interface DroneDarkTab {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface DroneSpecRow {
  label: string;
  value: string;
}

export interface LeadGeneration3Data extends ClonedTemplateBaseData {
  topBarNotice: string;
  specCallouts: DroneSpecCallout[];
  centerDroneImage: string;
  perks: {
    featuredDiscountTitle: string;
    featuredDiscountDesc: string;
    cards: Array<{
      id: string;
      title: string;
      badgeText?: string;
      subtitle: string;
      image?: string;
      iconType?: "free" | "truck" | "image";
    }>;
  };
  darkShowcaseTabs: DroneDarkTab[];
  controllerSpecs: DroneSpecRow[];
  sensorGimbalSpecs: DroneSpecRow[];
  secondaryBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  limitedOffer: {
    title: string;
    price: string;
    originalPrice: string;
    ctaText: string;
    droneImage: string;
  };
  trustItems: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export const leadGeneration3DefaultData: LeadGeneration3Data = {
  business: {
    name: "Mona Drone Tech",
    phone: ["1900 636 648", "(+84) 0313-728-397"],
    email: ["info@themona.global", "support@monadrone.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00 | Thứ 7: 11:00 - 15:00",
    rating: 4.9,
    reviewCount: 640,
    aboutTitle: "Hệ Sinh Thái Flycam & Thiết Bị Bay Chuyên Nghiệp",
    aboutText: [
      "Với Flycam thế hệ mới, bạn có thể khám phá những góc nhìn mới mẻ trên không và tạo ra những tác phẩm nghệ thuật điện ảnh độc đáo. Mona Drone Tech phân phối chính hãng các dòng Flycam DJI với chế độ bảo hành tiêu chuẩn quốc tế."
    ],
    highlights: [
      "Quay video 4K/100fps HDR chân thực, chụp dọc 9:16 sắc nét",
      "Cảm biến tránh vật cản đa hướng toàn diện 360 độ an toàn",
      "Truyền hình ảnh Full HD O4 ổn định ở khoảng cách lên đến 20km"
    ]
  },
  topBarNotice: "Miễn phí giao hàng toàn quốc khi đặt mua Combo Flycam hôm nay",
  hero: {
    eyebrow: "KHÁM PHÁ THẾ GIỚI",
    subtitle: "DJI Mini 4 Pro với chất lượng hình ảnh đỉnh cao – Camera quay 4K /100fps",
    title: "Flycam DJI Mini 4 Pro",
    description:
      "DJI Mini 4 Pro với chất lượng hình ảnh đỉnh cao – Camera quay 4K /100fps cùng cảm biến vật cản đa hướng thông minh.",
    ctaText: "LIÊN HỆ NGAY",
    ctaLink: "#lead-form",
    secondaryCtaText: "THÔNG SỐ KỸ THUẬT",
    secondaryCtaLink: "#specs",
    backgroundImage:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=85"
  },
  centerDroneImage:
    "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=80",
  specCallouts: [
    {
      id: "sp-1",
      value: "48 MP",
      label: "ĐỘ PHÂN GIẢI CAMERA",
      side: "left",
      icon: "camera"
    },
    {
      id: "sp-2",
      value: "45 PHÚT",
      label: "THỜI LƯỢNG PIN TỐI ĐA",
      side: "left",
      icon: "clock"
    },
    {
      id: "sp-3",
      value: "70 CM",
      label: "KÍCH THƯỚC MỞ CÁNH",
      side: "left",
      icon: "drone"
    },
    {
      id: "sp-4",
      value: "16M/S",
      label: "TỐC ĐỘ TỐI ĐA",
      side: "right",
      icon: "speed"
    },
    {
      id: "sp-5",
      value: "±0.01°",
      label: "PHẠM VI RUNG GÓC",
      side: "right",
      icon: "gimbal"
    },
    {
      id: "sp-6",
      value: "20KM",
      label: "PHẠM VI TRUYỀN VIDEO",
      side: "right",
      icon: "signal"
    }
  ],
  perks: {
    featuredDiscountTitle: "Giá cả ưu đãi lên đến 10%",
    featuredDiscountDesc:
      "Tặng kèm thẻ nhớ tốc độ cao SanDisk Extreme 128GB và gói bảo hiểm rơi vỡ DJI Care Refresh 1 năm.",
    cards: [
      {
        id: "pk-1",
        title: "Miễn phí vận chuyển khi mua combo",
        badgeText: "FREE",
        subtitle: "Giao hỏa tốc 2h nội thành",
        iconType: "free"
      },
      {
        id: "pk-2",
        title: "Hoàn trả trong vòng 14 ngày",
        subtitle: "1 đổi 1 nếu phát sinh lỗi nhà sản xuất",
        image:
          "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80",
        iconType: "image"
      },
      {
        id: "pk-3",
        title: "Đảm bảo giao hàng nhanh chóng",
        subtitle: "Đóng gói chống sốc 3 lớp tiêu chuẩn",
        iconType: "truck"
      },
      {
        id: "pk-4",
        title: "Đảm bảo chính hãng và bảo hành",
        subtitle: "Nguyên seal chính hãng DJI Việt Nam",
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=500&q=80",
        iconType: "image"
      },
      {
        id: "pk-5",
        title: "Đa dạng mẫu mã và phụ kiện",
        subtitle: "Sẵn hàng kính lọc ND, pin Plus, Hub sạc",
        image:
          "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=500&q=80",
        iconType: "image"
      },
      {
        id: "pk-6",
        title: "Dịch vụ hậu đãi tận tâm",
        subtitle: "Hỗ trợ kỹ thuật và hướng dẫn bay 1-1",
        image:
          "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=500&q=80",
        iconType: "image"
      }
    ]
  },
  darkShowcaseTabs: [
    {
      id: "tab-1",
      eyebrow: "KHÁM PHÁ THẾ GIỚI",
      title: "Chế độ bay thông minh",
      description:
        "Tích hợp cảm biến vật cản đa hướng toàn diện kết hợp thuật toán ActiveTrack 360° thế hệ mới, giúp theo dõi chủ thể mượt mà và tự động quay về điểm xuất phát (Advanced RTH) an toàn tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1600&q=85",
      highlights: [
        "ActiveTrack 360° bám nét chủ thể thông minh",
        "Waypoint Flight lập trình đường bay tự động",
        "Cruise Control giữ tốc độ bay ổn định đường dài"
      ]
    },
    {
      id: "tab-2",
      eyebrow: "HÌNH ẢNH CẢI TIẾN",
      title: "Camera chất lượng cao",
      description:
        "Trang bị cảm biến CMOS 1/1.3-inch hỗ trợ Dual Native ISO Fusion, khẩu độ f/1.7 và chế độ màu 10-bit D-Log M tái hiện hơn 1 tỷ sắc thái màu sắc sống động cả ngày lẫn đêm.",
      image:
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=85",
      highlights: [
        "Quay Slow-Motion 4K/100fps cực kỳ mượt mà",
        "Chế độ Night Shots khử nhiễu cảnh đêm vượt trội",
        "True Vertical Shooting quay dọc 9:16 không giảm chất lượng"
      ]
    },
    {
      id: "tab-3",
      eyebrow: "ĐIỀU KHIỂN ỔN ĐỊNH",
      title: "Chống rung lắc hiện đại",
      description:
        "Hệ thống Gimbal cơ học 3 trục kết hợp công nghệ truyền sóng DJI O4 thế hệ mới cho phép truyền luồng video trực tiếp 1080p/60fps siêu mượt ở cự ly lên đến 20km.",
      image:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1600&q=85",
      highlights: [
        "Gimbal 3 trục xoay góc nghiêng lớn lên tới 60°",
        "Kháng gió cấp 5 (tốc độ gió 10.7 m/s) vững vàng",
        "Độ trễ truyền tín hiệu cực thấp chỉ khoảng 120ms"
      ]
    }
  ],
  controllerSpecs: [
    {
      label: "Thời gian hoạt động",
      value: "Không sạc bất kỳ thiết bị di động nào: 6 giờ | Khi sạc thiết bị di động: 3,5 giờ"
    },
    {
      label: "Zoom kỹ thuật số",
      value: "Ảnh 12MP: 1-2x | 4K: 1-3x | FHD: 1-4x"
    },
    {
      label: "Kích thước thiết bị di động được hỗ trợ tối đa",
      value: "180×86×10 mm (L×W×H)"
    },
    {
      label: "Nhiệt độ hoạt động",
      value: "-10° đến 40° C"
    },
    {
      label: "Nhiệt độ sạc",
      value: "5° đến 40° C"
    },
    {
      label: "Thời gian sạc",
      value: "2,5 giờ"
    },
    {
      label: "Loại sạc",
      value: "Nên sử dụng bộ sạc 5V/2A"
    },
    {
      label: "Hiệu suất pin",
      value: "18.72 Wh (3.6 V, 2600 mAh × 2)"
    },
    {
      label: "Góc nghiêng tối đa",
      value: "35°"
    },
    {
      label: "Loại cổng thiết bị di động được hỗ trợ",
      value: "Lightning, USB-C, Micro-USB"
    },
    {
      label: "Tần số hoạt động truyền video",
      value: "2.4000-2.4835 GHz | 5.170-5.250 GHz | 5.725-5.850 GHz"
    }
  ],
  sensorGimbalSpecs: [
    {
      label: "Loại cảm biến",
      value: "Cảm biến đa hướng, Bổ sung cảm biến hồng ngoại 3D ở dưới đáy máy bay"
    },
    {
      label: "Cảm biến trước và sau",
      value:
        "Phạm vi đo: 0,5-18 m | Phạm vi phát hiện: 0,5-200 m | Tốc độ cảm biến hiệu quả: Tốc độ bay ≤ 12 m/s | FOV: Ngang 90°, Dọc 72°"
    },
    {
      label: "Cảm biến bên",
      value:
        "Phạm vi đo: 0,5-12 m | Tốc độ cảm biến hiệu quả: Tốc độ bay ≤ 12 m/s | FOV: Ngang 90°, Dọc 72°"
    },
    {
      label: "Cảm biến trên và dưới",
      value:
        "Phạm vi đo: 0,5-15 m | Tốc độ cảm biến hiệu quả: Tốc độ bay ≤ 5 m/s | FOV: Trước và Sau 72°, Trái và Phải 90°"
    },
    {
      label: "Môi trường hoạt động",
      value: "Tiến, lùi, trái, phải và hướng lên: Các bề mặt có hoa văn rõ ràng và đủ ánh sáng"
    },
    {
      label: "Chống rung",
      value: "Cơ học 3 trục (tilt, roll, pan)"
    },
    {
      label: "Tốc độ điều khiển tối đa (tilt)",
      value: "100°/s"
    },
    {
      label: "Phạm vi có thể điều khiển",
      value: "Tilt: -90° to 60° | Roll: -90° or 0°"
    },
    {
      label: "Phạm vi cơ học",
      value: "Tilt: -135° to 80° | Roll: -135° to 45° | Pan: -30° to 30°"
    }
  ],
  secondaryBanner: {
    eyebrow: "CAMERA CHẤT LƯỢNG CAO",
    title: "DJI MAVIC 4 PRO",
    subtitle: "Nắm bắt mọi khung hình trên không với hệ thống 3 camera Hasselblad đỉnh cao",
    ctaText: "Khám phá",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1000&q=80"
  },
  limitedOffer: {
    title: "KHUYẾN MÃI GIỚI HẠN",
    price: "14,590,000₫",
    originalPrice: "16,990,000₫",
    ctaText: "Liên hệ ngay",
    droneImage:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1400&q=85"
  },
  trustItems: [
    {
      id: "tr-1",
      title: "Giao hàng toàn quốc",
      description: "Vận chuyển tin cậy đảm bảo giao hàng nhanh chóng và an toàn."
    },
    {
      id: "tr-2",
      title: "Thanh toán an toàn",
      description: "Bạn có thể thoải mái và tự tin thực hiện thanh toán trực tuyến một cách an toàn."
    },
    {
      id: "tr-3",
      title: "Bảo hành chính hãng",
      description: "Chất lượng và độ tin cậy của sản phẩm được đảm bảo trong thời gian bảo hành."
    }
  ]
};
