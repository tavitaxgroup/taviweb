import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung9Data extends ClonedTemplateBaseData {
  overviewSpecs: Array<{
    id: string;
    icon: string;
    label: string;
    value: string;
  }>;
  overviewImage: string;
  locationDescription: string;
  nearbyPlaces: string[];
  mapImages: {
    vectorMap: string;
    satelliteMap: string;
  };
  developers: Array<{
    id: string;
    role: string;
    name: string;
    subtext: string;
  }>;
  views: Array<{
    id: string;
    direction: string;
    description: string;
    image: string;
  }>;
  amenities: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  coreValues: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  floorPlans: Array<{
    id: string;
    tabLabel: string;
    floorTitle: string;
    floorSubtitle: string;
    areaRange: string;
    image: string;
    units: Array<{
      code: string;
      type: string;
      netArea: string;
      grossArea: string;
      position: string;
    }>;
  }>;
}

export const xayDung9DefaultData: XayDung9Data = {
  business: {
    name: "THE PENTA",
    phone: ["076 922 0162", "0909 888 162"],
    email: ["cskh@thepenta-residence.vn", "info@monamedia.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 215,
    aboutTitle: "Chung cư cao cấp",
    aboutText: [
      "Lấy cảm hứng từ mong muốn bao quát được những góc nhìn tuyệt đẹp của chốn Sài thành, THE PENTA là sự hòa trộn của những đường thẳng vững chãi cùng những đường vạt góc độc đáo. Với vị trí liền kề Quận 1, cư dân của THE PENTA thỏa sức tận hưởng những tiện ích hiện hữu và phong phú chỉ trong vòng 5 phút đi xe."
    ],
    highlights: [
      "Vị trí tâm điểm kết nối Quận 1 - Bình Thạnh - Quận 11",
      "Tổng thầu xây dựng Hòa Bình bảo chứng chất lượng thi công",
      "Mật độ căn hộ thấp chỉ 5 căn/sàn, 100% căn góc thoáng sáng",
      "Pháp lý minh bạch, sổ hồng sở hữu lâu dài"
    ]
  },
  hero: {
    eyebrow: "TỔ HỢP CĂN HỘ CAO CẤP & KIẾN TRÚC ĐÔ THỊ",
    title: "THE PENTA RESIDENCE",
    subtitle: "Biểu tượng kiến trúc đương đại vững chãi giữa tâm điểm phồn hoa Sài Gòn, nơi hội tụ chuẩn sống thượng lưu chỉ cách Quận 1 đúng 5 phút di chuyển.",
    ctaText: "NHẬN BẢNG GIÁ CHI TIẾT",
    ctaLink: "#lien-he",
    secondaryCtaText: "XEM MẶT BẰNG TẦNG",
    secondaryCtaLink: "#mat-bang",
    backgroundImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  overviewSpecs: [
    {
      id: "spec-1",
      icon: "map-pin",
      label: "Vị trí",
      value: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM"
    },
    {
      id: "spec-2",
      icon: "maximize",
      label: "Tổng diện tích",
      value: "815,2 m²"
    },
    {
      id: "spec-3",
      icon: "pie-chart",
      label: "Mật độ xây dựng",
      value: "46,86 %"
    },
    {
      id: "spec-4",
      icon: "layers",
      label: "Kết cấu",
      value: "2 Tầng hầm + 20 Tầng cao"
    },
    {
      id: "spec-5",
      icon: "home",
      label: "Số lượng căn hộ",
      value: "83 căn hộ cao cấp"
    },
    {
      id: "spec-6",
      icon: "calendar",
      label: "Dự kiến bàn giao",
      value: "Quý 1/2026"
    }
  ],
  overviewImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
  locationDescription:
    "Tọa lạc tại số 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM – dự án căn hộ cao cấp THE PENTA sở hữu vị trí cực kỳ thuận lợi khi kết nối với khu trung tâm Quận 1 chỉ 10 phút. Hơn nữa, THE PENTA còn được bao quanh bởi nhiều tiện ích hiện hữu, đa dạng, mang đến cho những chủ nhân tương lai một cuộc sống hoàn hảo nhất tại \"ngôi nhà giữa lòng thành phố\".",
  nearbyPlaces: [
    "Trường tiểu học Nguyễn Bá Ngọc",
    "Chợ Cây Quéo",
    "Trường THPT Phan Đăng Lưu",
    "Công Viên Gia Định",
    "Trường Tiểu học - THCS Cao Bá Quát",
    "Trường THPT Hoàng Hoa Thám",
    "Công viên Phú Nhuận",
    "Bệnh viện Nhân dân Gia Định",
    "Bệnh viện Quốc Tế Columbia Asia",
    "Bệnh viện Ung Bướu",
    "Hồ bơi Đại Đồng",
    "Đại Học Mỹ Thuật TP.HCM",
    "Bệnh viện Hoàn Mỹ Sài Gòn",
    "Co.opmart Rạch Miễu",
    "Trung tâm TDTT Bình Thạnh",
    "Co.opmart Đinh Tiên Hoàng",
    "Chợ Bà Chiểu",
    "Co.opmart Nguyễn Kiệm",
    "Big C Hoàng Văn Thụ",
    "SVĐ Quân Khu 7"
  ],
  mapImages: {
    vectorMap: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80",
    satelliteMap: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80"
  },
  developers: [
    {
      id: "dev-1",
      role: "CHỦ ĐẦU TƯ",
      name: "HỒNG PHÚC LAND",
      subtext: "Bất Động Sản Bền Vững"
    },
    {
      id: "dev-2",
      role: "ĐƠN VỊ THI CÔNG",
      name: "HÒA BÌNH",
      subtext: "Hòa Bình Construction Group"
    },
    {
      id: "dev-3",
      role: "PHÂN PHỐI ĐỘC QUYỀN",
      name: "PAX LAND",
      subtext: "Hệ Thống Phân Phối BĐS"
    },
    {
      id: "dev-4",
      role: "HỢP TÁC ĐẦU TƯ",
      name: "TIẾN PHÁT",
      subtext: "Tien Phat Real Estate Corp"
    }
  ],
  views: [
    {
      id: "view-ne",
      direction: "VIEW ĐÔNG BẮC",
      description: "Toàn cảnh đại lộ Phạm Văn Đồng và mảng xanh Công viên Gia Định",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "view-se",
      direction: "VIEW ĐÔNG NAM",
      description: "Hướng nhìn trực diện trung tâm Quận 1, Bitexco và Landmark 81",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "view-nw",
      direction: "VIEW TÂY BẮC",
      description: "Tầm nhìn thoáng đãng về sân bay Tân Sơn Nhất và khu đô thị Phú Nhuận",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "view-sw",
      direction: "VIEW TÂY NAM",
      description: "Bao quát kênh Nhiêu Lộc - Thị Nghè và khu trung tâm Quận 3",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80"
    }
  ],
  amenities: [
    {
      id: "am-1",
      title: "Hầm gửi xe",
      description: "2 tầng hầm đỗ xe thông minh rộng rãi, tích hợp hệ thống kiểm soát thẻ từ tự động 24/7.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-2",
      title: "Khu mua sắm",
      description: "Tầng thương mại khối đế quy tụ siêu thị mini, cửa hàng tiện lợi và dịch vụ ẩm thực cao cấp.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-3",
      title: "Khu giữ trẻ",
      description: "Trường mầm non và khu vui chơi sáng tạo nội khu đạt chuẩn an toàn quốc tế cho trẻ nhỏ.",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-4",
      title: "Phòng sinh hoạt cộng đồng",
      description: "Không gian hội họp, thư viện đọc sách và giao lưu văn hóa sang trọng dành riêng cho cư dân.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-5",
      title: "Tận hưởng trọn vẹn những phút giây bên gia đình",
      description: "Sân vườn thượng uyển, khu tập Gym - Yoga và không gian thư giãn cuối tuần ngập tràn ánh sáng.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80"
    }
  ],
  coreValues: [
    {
      id: "val-1",
      title: "PHỒN VINH",
      description: "The Penta mang đến cho chủ nhân cuộc sống phồn vinh giữa lòng thành phố."
    },
    {
      id: "val-2",
      title: "PHONG PHÚ",
      description: "Tiện ích nội khu và ngoại khu hiện hữu, phong phú chỉ trong vòng 5 phút đi xe."
    },
    {
      id: "val-3",
      title: "PHONG CÁCH",
      description: "Phong cách thiết kế trẻ trung, hiện đại với những chi tiết tinh tế và thanh lịch."
    },
    {
      id: "val-4",
      title: "PHÙ HỢP",
      description: "Diện tích đa dạng phù hợp với nhiều đối tượng khách hàng mua ở, đầu tư, cho thuê."
    },
    {
      id: "val-5",
      title: "PHẢI CHĂNG",
      description: "Giá cả phải chăng thích hợp cho những ai đang muốn sở hữu căn hộ ngay khu trung tâm."
    }
  ],
  floorPlans: [
    {
      id: "floor-typical",
      tabLabel: "MẶT BẰNG TẦNG ĐIỂN HÌNH",
      floorTitle: "TẦNG ĐIỂN HÌNH",
      floorSubtitle: "TẦNG 4 - 19",
      areaRange: "44,32 m² – 86,58 m² (5 căn/sàn • 2 thang máy tốc độ cao)",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      units: [
        { code: "01", type: "02 PN", netArea: "76,22 m²", grossArea: "82,91 m²", position: "Góc Đông Bắc" },
        { code: "02", type: "02 PN", netArea: "59,66 m²", grossArea: "64,95 m²", position: "Hướng Bắc" },
        { code: "03", type: "02 PN", netArea: "78,41 m²", grossArea: "86,58 m²", position: "Góc Đông Nam" },
        { code: "04", type: "02 PN", netArea: "65,78 m²", grossArea: "71,33 m²", position: "Hướng Nam" },
        { code: "05", type: "01 PN", netArea: "44,32 m²", grossArea: "48,15 m²", position: "Hướng Tây Nam" }
      ]
    },
    {
      id: "floor-2pn",
      tabLabel: "MẶT BẰNG CĂN 2 PN",
      floorTitle: "CĂN HỘ 02 PHÒNG NGỦ",
      floorSubtitle: "MÃ CĂN 01 • 02 • 03 • 04",
      areaRange: "59,66 m² – 86,58 m² (2 Phòng ngủ • 2 WC • Ban công & Logia riêng)",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      units: [
        { code: "A1", type: "Phòng khách + Ăn", netArea: "24,50 m²", grossArea: "26,80 m²", position: "Liên thông ban công" },
        { code: "A2", type: "Phòng ngủ Master", netArea: "16,80 m²", grossArea: "18,20 m²", position: "Cửa sổ lớn Panoram" },
        { code: "A3", type: "Phòng ngủ 02", netArea: "11,40 m²", grossArea: "12,50 m²", position: "Đón nắng tự nhiên" },
        { code: "A4", type: "Khu Bếp & Logia", netArea: "8,90 m²", grossArea: "9,80 m²", position: "Tách biệt thông thoáng" }
      ]
    },
    {
      id: "floor-1pn",
      tabLabel: "MẶT BẰNG CĂN 1 PN",
      floorTitle: "CĂN HỘ 01 PHÒNG NGỦ",
      floorSubtitle: "MÃ CĂN 05 ĐIỂN HÌNH",
      areaRange: "44,32 m² – 48,15 m² (1 Phòng ngủ lớn • 1 Phòng đa năng • 1 WC)",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      units: [
        { code: "B1", type: "Không gian Sinh hoạt", netArea: "19,20 m²", grossArea: "21,00 m²", position: "Ban công hướng phố" },
        { code: "B2", type: "Phòng ngủ Chính", netArea: "14,10 m²", grossArea: "15,30 m²", position: "View thoáng không chắn" },
        { code: "B3", type: "Bếp chữ L + Sân phơi", netArea: "6,80 m²", grossArea: "7,40 m²", position: "Thông gió tự nhiên" },
        { code: "B4", type: "Phòng tắm cao cấp", netArea: "4,22 m²", grossArea: "4,45 m²", position: "Thiết bị Toto/Kohler" }
      ]
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Thiếu hụt nguồn cung căn hộ bình dân và trung cấp tại khu trung tâm",
      date: "25 Th12",
      category: "Thị trường BĐS",
      excerpt: "Hiệp hội Bất động sản TP. HCM (HoREA) cho biết áp lực thiếu nguồn cung căn hộ diện tích vừa phải liền kề Quận 1 đang khiến các dự án hoàn thiện pháp lý trở thành tâm điểm săn đón.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Khan hiếm nguồn cung, căn hộ quận Bình Thạnh hút giới đầu tư",
      date: "20 Th12",
      category: "Tiêu điểm đầu tư",
      excerpt: "Nằm liền kề trung tâm thành phố, căn hộ quận Bình Thạnh và trục giao thoa Quận 1 - Phú Nhuận được nhiều người lựa chọn nhờ biên độ tăng giá và tỷ suất cho thuê vượt trội.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
