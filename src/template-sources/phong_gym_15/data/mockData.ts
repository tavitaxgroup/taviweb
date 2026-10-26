import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Gym15PolaroidCard {
  id: string;
  caption: string;
  subCaption: string;
  image: string;
}

export interface Gym15EquipmentItem {
  id: string;
  name: string;
  code: string;
  category: "CARDIO" | "STRENGTH" | "FREEWEIGHT" | "CROSSFIT";
  price: string;
  warranty: string;
  image: string;
}

export interface Gym15SetupStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface Gym15Data extends ClonedTemplateBaseData {
  companyFullName: string;
  purpleBannerText: string;
  pinkBannerText: string;
  coachPortraitImage: string;
  polaroidCards: Gym15PolaroidCard[];
  equipmentCatalog: Gym15EquipmentItem[];
  setupWorkflow: Gym15SetupStep[];
}

export const phongGym15DefaultData: Gym15Data = {
  business: {
    name: "VMT Fitness",
    phone: ["0909 888 765", "1900 636 889"],
    email: ["setup@vmtfitness.vn", "cskh@vmtfitness.vn"],
    address: "20 Cộng Hòa, Phường 12, Quận Tân Bình, TP.HCM",
    workingHours: "08:00 - 21:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1450,
    experienceYears: "12 Năm",
    aboutTitle: "Cầu Nối Cung Ứng Thiết Bị Phòng Tập & Huấn Luyện Thể Hình Quốc Tế",
    aboutText: [
      "VMT Fitness Co., Ltd là đơn vị tiên phong trong lĩnh vực tư vấn thiết kế 3D, nhập khẩu trực tiếp máy tập thể hình thương mại và vận hành hệ thống CLB Fitness chuẩn quốc tế tại Việt Nam.",
      "Với phương châm 'Work smart. Get it done.', chúng tôi giúp các chủ đầu tư tối ưu hóa chi phí setup phòng Gym từ A-Z, đảm bảo tiến độ bàn giao nhanh chóng và cam kết bảo hành kỹ thuật dài hạn."
    ],
    highlights: [
      "Nhập khẩu trực tiếp thiết bị Cardio & Strength từ nhà máy quốc tế",
      "Thiết kế mặt bằng 2D/3D miễn phí & tối ưu công năng diện tích",
      "Quản lý tiến độ đơn hàng & lịch tập thông minh qua ứng dụng di động"
    ]
  },
  companyFullName: "VÕ MINH THIÊN FITNESS CO., LTD.",
  purpleBannerText: "CẦU NỐI CUNG ỨNG THIẾT BỊ GYM",
  pinkBannerText: "SETUP PHÒNG TẬP AN TOÀN, TIẾT KIỆM CÙNG VMT FITNESS",
  hero: {
    eyebrow: "TRUNG TÂM THỂ HÌNH & THIẾT BỊ PHÒNG TẬP QUỐC TẾ",
    title: "CẦU NỐI CUNG ỨNG THIẾT BỊ GYM",
    subtitle:
      "Giải pháp trọn gói từ tư vấn mặt bằng, nhập khẩu máy tập thể hình thương mại chính ngạch đến đào tạo vận hành CLB Gym chuyên nghiệp.",
    ctaText: "Nhận Báo Giá Setup Gym",
    ctaLink: "#bao-gia-setup",
    secondaryCtaText: "Xem Danh Mục Máy Tập",
    secondaryCtaLink: "#thiet-bi-gym",
    backgroundImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85"
  },
  coachPortraitImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  polaroidCards: [
    {
      id: "pol-1",
      caption: "Quản Lý Bằng App",
      subCaption: "Theo dõi bảo trì & lịch tập 24/7",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pol-2",
      caption: "FAST FORWARD TOGETHER",
      subCaption: "Đội ngũ chuyên gia Setup & HLV",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pol-3",
      caption: "Work smart. Get it done.",
      subCaption: "Tư vấn thiết kế mặt bằng 3D",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pol-4",
      caption: "Kiểm Định Chất Lượng",
      subCaption: "Đạt chuẩn an toàn phòng tập",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    }
  ],
  stats: [
    { id: "st-1", number: "380+", title: "Dự Án Phòng Gym Toàn Quốc" },
    { id: "st-2", number: "1.500+", title: "Thiết Bị Sẵn Kho Giao Ngay" },
    { id: "st-3", number: "30%", title: "Tiết Kiệm Chi Phí Đầu Tư" },
    { id: "st-4", number: "5 Năm", title: "Bảo Hành Khung Sườn Máy" }
  ],
  services: [
    {
      id: "srv-1",
      title: "Setup Phòng Gym Thương Mại Trọn Gói",
      category: "Turnkey Gym Setup",
      description:
        "Khảo sát mặt bằng, lên bản vẽ phối cảnh 3D, lắp đặt hệ thống máy tập và bàn giao quy trình vận hành sinh lời.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "Nhập Khẩu & Phân Phối Máy Tập Chính Ngạch",
      category: "Equipment Supply",
      description:
        "Cung ứng trực tiếp từ nhà máy các dòng máy chạy bộ AC công suất lớn, giàn tạ khối Impulse/Morgiana với giá gốc.",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "Thiết Kế Phòng Tập Private & Home Gym Biệt Thự",
      category: "Private Studio",
      description:
        "Giải pháp phòng tập đa năng cao cấp ngay tại nhà hoặc vănocheck doanh nghiệp với thiết bị nhỏ gọn, sang trọng.",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-4",
      title: "Huấn Luyện Thể Hình & Đào Tạo HLV Cá Nhân",
      category: "Personal Training",
      description:
        "Đào tạo nghiệp vụ PT thực chiến, chuyển giao phần mềm quản lý hội viên và chiến lược marketing thu hút khách hàng.",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
    }
  ],
  equipmentCatalog: [
    {
      id: "eq-1",
      name: "Máy Chạy Bộ Thương Mại VMT-T900 Pro AC 5.0HP",
      code: "VMT-T900",
      category: "CARDIO",
      price: "42,500,000 ₫",
      warranty: "Bảo hành 5 năm",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-2",
      name: "Giàn Tạ Đa Năng 8 Vị Trí VMT Multi-Jungle MJ8",
      code: "VMT-MJ8",
      category: "STRENGTH",
      price: "89,000,000 ₫",
      warranty: "Bảo hành 5 năm",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-3",
      name: "Khung Gánh Tạ Đa Năng Power Rack VMT-PR500",
      code: "VMT-PR500",
      category: "STRENGTH",
      price: "28,900,000 ₫",
      warranty: "Bảo hành 5 năm",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-4",
      name: "Bộ Tạ Tay Urethane Cao Cấp Kèm Giá Đỡ 2.5-30kg",
      code: "VMT-DB30",
      category: "FREEWEIGHT",
      price: "36,000,000 ₫",
      warranty: "Bảo hành 3 năm",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-5",
      name: "Xe Đạp Tập Thể Lực Kháng Từ VMT Spin Bike S7",
      code: "VMT-S7",
      category: "CARDIO",
      price: "14,800,000 ₫",
      warranty: "Bảo hành 3 năm",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-6",
      name: "Máy Đạp Đùi 45 Độ VMT Leg Press LP-700",
      code: "VMT-LP700",
      category: "STRENGTH",
      price: "34,500,000 ₫",
      warranty: "Bảo hành 5 năm",
      image:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-7",
      name: "Khung Tập CrossFit & Calisthenics Tổ Hợp VMT-CF12",
      code: "VMT-CF12",
      category: "CROSSFIT",
      price: "65,000,000 ₫",
      warranty: "Bảo hành 5 năm",
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eq-8",
      name: "Máy Chèo Thuyền Kháng Khí VMT Air Rower AR2",
      code: "VMT-AR2",
      category: "CROSSFIT",
      price: "19,500,000 ₫",
      warranty: "Bảo hành 3 năm",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80"
    }
  ],
  setupWorkflow: [
    {
      id: "step-1",
      stepNumber: "01",
      title: "Khảo Sát & Lên Bản Vẽ 3D",
      description:
        "Đo đạc thực tế mặt bằng, phân khu chức năng Cardio – Free Weight – Locker và dựng phối cảnh 3D trực quan."
    },
    {
      id: "step-2",
      stepNumber: "02",
      title: "Nhập Khẩu & Vận Chuyển Tận Nơi",
      description:
        "Đặt hàng trực tiếp từ nhà máy, kiểm định chất lượng nghiêm ngặt và vận chuyển an toàn về tận công trình."
    },
    {
      id: "step-3",
      stepNumber: "03",
      title: "Lắp Đặt & Cân Chỉnh Kỹ Thuật",
      description:
        "Đội ngũ kỹ sư cơ điện lắp đặt hoàn thiện thảm sàn cao su, hệ thống máy tập và kiểm tra tải trọng an toàn."
    },
    {
      id: "step-4",
      stepNumber: "04",
      title: "Chuyển Giao Vận Hành & Bảo Trì",
      description:
        "Hướng dẫn sử dụng thiết bị, bàn giao phần mềm quản lý hội viên và bảo dưỡng định kỳ 6 tháng/lần."
    }
  ]
};
