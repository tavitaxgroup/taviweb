import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung8SpecItem {
  label: string;
  value: string;
}

export interface XayDung8HighlightAmenity {
  boldLead: string;
  text: string;
}

export interface XayDung8LandmarkItem {
  id: string;
  name: string;
  timeText: string;
  distanceKm: string;
  image: string;
}

export interface XayDung8InternalZone {
  id: string;
  number: number;
  title: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface XayDung8FloorPlanTab {
  id: string;
  tabLabel: string;
  code: string;
  areaText: string;
  bedrooms: string;
  bathrooms: string;
  direction: string;
  description: string;
  image: string;
}

export interface XayDung8PaymentStep {
  stepNumber: number;
  text: string;
}

export interface XayDung8TemplateData extends ClonedTemplateBaseData {
  introSectionTitle: string;
  introSectionSubtitle: string;
  introParagraphs: string[];
  introVideoImage: string;
  overviewSpecs: XayDung8SpecItem[];
  highlightAmenities: XayDung8HighlightAmenity[];
  locationBullets: string[];
  landmarks: XayDung8LandmarkItem[];
  internalZones: XayDung8InternalZone[];
  floorPlanTabs: XayDung8FloorPlanTab[];
  paymentSteps: XayDung8PaymentStep[];
  galleryImages: string[];
}

export const xayDung8DefaultData: XayDung8TemplateData = {
  business: {
    name: "Mona Park Views",
    logo: "",
    phone: ["076 922 0162", "0909 686 888"],
    email: ["phongbanhang@monaparkviews.vn", "info@monaparkviews.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:30 (24/7)",
    rating: 4.9,
    reviewCount: 389,
    experienceYears: "20+",
    aboutTitle: "Mona Park View – Cầu Giấy",
    aboutText: [
      "Chuẩn bị ra mắt dự án Khu căn hộ cao cấp – Chung cư Mona Park View – Đây là dự án căn hộ cao cấp bậc nhất tại khu vực trung tâm. Với tầm view rộng và đẹp ra 2 hồ điều hòa Công Viên càng làm tăng thêm vẻ đẹp cuốn hút cho dự án.",
      "Sống xanh – trong lành ngay tại khu vực trung tâm thủ đô chắc chắn sẽ là điểm đến lý tưởng khi con người được hòa mình với thiên nhiên, tận hưởng một bầu không khí trong lành. Hồ nước và không gian xanh bao bọc, mỗi ngày sống sẽ như một ngày nghỉ dưỡng, được chạm tay vào những điều tinh túy nhất của tự nhiên."
    ],
    highlights: [
      "Tầm view trực diện công viên & hồ điều hòa 32ha",
      "Tổng thầu thi công kết cấu tiêu chuẩn hạng A",
      "Thiết kế căn hộ 2 Logia thông thoáng tự nhiên",
      "Bàn giao nội thất nhập khẩu Đức & Châu Âu"
    ]
  },
  hero: {
    eyebrow: "Căn hộ cao cấp tại trung tâm Sài Gòn",
    title: "MONA PARK VIEW",
    subtitle: "Xứng đáng với đẳng cấp của bạn",
    ctaText: "ĐĂNG KÝ THAM QUAN",
    ctaLink: "#lien-he",
    secondaryCtaText: "XEM MẶT BẰNG",
    secondaryCtaLink: "#mat-bang",
    backgroundImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  introSectionTitle: "Mona Park View – Cầu Giấy",
  introSectionSubtitle: "Phong cách sống đẳng cấp cùng thiên nhiên",
  introParagraphs: [
    "Chuẩn bị ra mắt dự án Khu căn hộ cao cấp – Chung cư Mona Park View – Đây là dự án căn hộ cao cấp bậc nhất tại khu vực Cầu Giấy. Với tầm view rộng và đẹp ra 2 hồ điều hòa Công Viên càng làm tăng thêm vẻ đẹp cuốn hút cho dự án.",
    "Sống xanh – trong lành ngay tại khu vực trung tâm chắc chắn sẽ là điểm đến lý tưởng khi con người được hòa mình với thiên nhiên, tận hưởng một bầu không khí trong lành. Hồ nước và không gian xanh bao bọc, mỗi ngày sống sẽ như một ngày nghỉ dưỡng, được chạm tay vào những điều tinh túy nhất của tự nhiên."
  ],
  introVideoImage:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
  overviewSpecs: [
    {
      label: "Tên dự án",
      value: "Mona Park View (Chung cư Mona Park View)"
    },
    {
      label: "Chủ đầu tư dự án",
      value: "Công ty CP Đầu tư Phú Nguyên"
    },
    {
      label: "Vị trí dự án",
      value: "Ô D32 – ĐTM Cầu Giấy – Yên Hòa – Quận Cầu Giấy"
    },
    {
      label: "Đơn vị thiết kế",
      value: "Công ty CP Kiến trúc và ĐTXD Việt Nam"
    },
    {
      label: "Thẩm tra thiết kế",
      value: "Công ty TNHH MTV Kỹ thuật Xây dựng Việt Nam"
    },
    {
      label: "Đơn vị thi công",
      value: "Công ty CP Đầu tư – Xây dựng Vĩnh Phát"
    },
    {
      label: "Tư vấn giám sát",
      value: "Công ty CP Tư vấn Đô thị Việt Nam – VinaCity"
    },
    {
      label: "Tổng diện tích dự án",
      value: "1,6 ha"
    },
    {
      label: "Diện tích sàn xây dựng",
      value: "30.796,94 m²"
    },
    {
      label: "Diện tích hầm",
      value: "5.424,83 m²"
    },
    {
      label: "Diện tích TTTM, văn phòng từ tầng 1 đến tầng 8",
      value: "1.144,61 m²"
    },
    {
      label: "Diện tích sàn căn hộ từ tầng 9 đến tầng 25",
      value: "893 m²"
    }
  ],
  highlightAmenities: [
    {
      boldLead: "Không gian xanh nội khu",
      text: "được thiết kế như khu vườn đầy ánh sáng tạo với trên 50 tiện ích: Hồ bơi sinh thái, Đảo thiên đường trẻ thơ, Khu cafe ngoài trời, Phố BBQ, Đồng cỏ xanh, các khu Gym ngoài trời..."
    },
    {
      boldLead: "Thiết kế căn hộ thông minh",
      text: "từ 2-4 phòng ngủ, 90% căn hộ có ban công kính."
    },
    {
      boldLead: "Trải nghiệm cuộc sống Đẳng cấp hơn",
      text: "với thiết kế căn Duplex có view nhìn toàn công viên."
    },
    {
      boldLead: "Nội thất sang trọng",
      text: "với Sàn gỗ, Hệ thống Intercom và thiết bị vệ sinh được nhập khẩu từ Đức."
    },
    {
      boldLead: "Khu vực lễ tân với sảnh sang trọng",
      text: "hệ thống Camera 24/7 đảm bảo an ninh."
    },
    {
      boldLead: "Trải nghiệm trên 100 tiện ích",
      text: "có tại Khu đô thị từ Sức khỏe, Giáo dục, Mua sắm, Giải trí, Văn hóa..."
    }
  ],
  locationBullets: [
    "Dự án Mona Park View có vị trí kim cương khi có tầm View trực diện Công Viên Cầu Giấy.",
    "Dự án gần bệnh viện 198: 2 km, cách bệnh viện Giao thông vận tải 1,5 km.",
    "Cạnh chợ Cầu Giấy, chợ Yên Hòa; Cách công viên Cầu Giấy 1 km; Cách hệ thống trường Chuyên Amsterdam 1,3 km.",
    "Cách trường PTDL Lương Thế Vinh và các trường quốc tế lân cận 1 km, trường ĐH Phương Đông 700m, Cách siêu thị Big C 1,2 km...",
    "Từ dự án việc di chuyển đến các địa điểm trong và ngoài thành phố vô cùng thuận tiện, nhanh chóng."
  ],
  landmarks: [
    {
      id: "lm-1",
      name: "Chợ Xanh",
      timeText: "5 phút tới",
      distanceKm: "0.5 km",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-2",
      name: "ĐH Sư Phạm",
      timeText: "5 phút tới",
      distanceKm: "0.8 km",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-3",
      name: "ĐH Quốc Gia",
      timeText: "7 phút tới",
      distanceKm: "1.2 km",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-4",
      name: "Công viên CV1",
      timeText: "5 phút tới",
      distanceKm: "0.6 km",
      image:
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-5",
      name: "BV 198",
      timeText: "12 phút tới",
      distanceKm: "2.0 km",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-6",
      name: "Bến xe Miền Đông",
      timeText: "10 phút tới",
      distanceKm: "1.6 km",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-7",
      name: "Big C Thăng Long",
      timeText: "20 phút tới",
      distanceKm: "2.2 km",
      image:
        "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=400&q=75"
    },
    {
      id: "lm-8",
      name: "Sân bay Tân Sơn Nhất",
      timeText: "35 phút tới",
      distanceKm: "8.5 km",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=75"
    }
  ],
  internalZones: [
    {
      id: "iz-1",
      number: 1,
      title: "Cổng chào chính / Lối vào đại lộ",
      description:
        "Cổng chào kiến trúc vòm sang trọng tích hợp trạm kiểm soát an ninh thẻ từ thông minh 24/7.",
      xPercent: 22,
      yPercent: 78
    },
    {
      id: "iz-2",
      number: 2,
      title: "Điểm đón trả khách tại sảnh & Phố đi bộ",
      description:
        "Sảnh đón trả khách tiêu chuẩn khách sạn 5 sao kết nối trực tiếp tuyến phố đi bộ nội khu rợp bóng cây.",
      xPercent: 35,
      yPercent: 64
    },
    {
      id: "iz-3",
      number: 3,
      title: "Mini-clubhouse / Nhà chờ, khu Café",
      description:
        "Không gian clubhouse thư giãn bên hồ với tầm nhìn toàn cảnh ra mặt nước xanh mát.",
      xPercent: 48,
      yPercent: 32
    },
    {
      id: "iz-4",
      number: 4,
      title: "Café ngoài trời / Café ánh sao",
      description:
        "Sân thượng cafe ngoài trời lung linh ánh đèn về đêm dành cho cư dân thưởng thức ẩm thực.",
      xPercent: 62,
      yPercent: 28
    },
    {
      id: "iz-5",
      number: 5,
      title: "Pool Deck / Hồ bơi sinh thái tràn bờ",
      description:
        "Hồ bơi sinh thái trung tâm rộng 600 m² ứng dụng công nghệ điện phân muối an toàn cho làn da.",
      xPercent: 52,
      yPercent: 52
    },
    {
      id: "iz-6",
      number: 6,
      title: "Hồ bơi trẻ em & Khu vui chơi dưới nước",
      description:
        "Khu vực mực nước nông an toàn tích hợp cầu trượt nước và đài phun nước sinh động cho bé.",
      xPercent: 68,
      yPercent: 56
    },
    {
      id: "iz-7",
      number: 7,
      title: "Khu vận động / Đảo thiên đường trẻ thơ",
      description:
        "Tổ hợp trò chơi vận động liên hoàn trên thảm cỏ tự nhiên giúp trẻ phát triển thể chất toàn diện.",
      xPercent: 76,
      yPercent: 42
    },
    {
      id: "iz-8",
      number: 8,
      title: "Pavilion / Lầu nghỉ chân vọng cảnh",
      description:
        "Chòi nghỉ chân kiến trúc gỗ giữa đảo cây xanh, nơi đọc sách và tập dưỡng sinh mỗi buổi sáng.",
      xPercent: 40,
      yPercent: 46
    }
  ],
  floorPlanTabs: [
    {
      id: "fp-all",
      tabLabel: "Mặt bằng điển hình",
      code: "MẶT BẰNG TẦNG 9 ĐẾN 25",
      areaText: "63,95 m² – 131,02 m² (Diện tích tim tường)",
      bedrooms: "2 – 4 Phòng ngủ",
      bathrooms: "2 – 3 WC",
      direction: "Đông Nam – Tây Bắc (View hồ 32ha)",
      description:
        "Mặt bằng tầng điển hình bố trí 9 căn hộ/sàn với 4 thang máy tốc độ cao và 2 thang thoát hiểm, 100% căn hộ đều sở hữu 2 logia đón sáng tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-01",
      tabLabel: "Căn 01 – 70.5m2",
      code: "CĂN HỘ CH-01 (70,50 m²)",
      areaText: "70,50 m² tim tường • 65,20 m² thông thủy",
      bedrooms: "2 Phòng ngủ",
      bathrooms: "2 WC",
      direction: "Ban công Đông Nam mát mẻ",
      description:
        "Căn hộ 2 phòng ngủ vuông vắn, phòng khách liên thông bàn ăn rộng rãi và bếp tách biệt nối liền logia phơi đồ.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-02",
      tabLabel: "Căn 02 – 118.36m2",
      code: "CĂN HỘ GÓC CH-02 (118,36 m²)",
      areaText: "118,36 m² tim tường • 110,40 m² thông thủy",
      bedrooms: "3 Phòng ngủ + 1 Phòng đa năng",
      bathrooms: "2 WC",
      direction: "Căn góc 2 mặt thoáng Đông Nam – Đông Bắc",
      description:
        "Căn góc 3 phòng ngủ tầm nhìn panorama trực diện hồ điều hòa 32ha, phòng ngủ Master có phòng thay đồ riêng.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-03",
      tabLabel: "Căn 03 – 131.02m2",
      code: "CĂN HỘ HẠNG SANG CH-03 (131,02 m²)",
      areaText: "131,02 m² tim tường • 122,80 m² thông thủy",
      bedrooms: "4 Phòng ngủ",
      bathrooms: "3 WC",
      direction: "Căn góc Đẹp Nhất Dự Án – View Công Viên",
      description:
        "Căn hộ 4 phòng ngủ diện tích lớn nhất dành cho gia đình đa thế hệ, sảnh đệm riêng tư và ban công kính dài 6,5m.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-04",
      tabLabel: "Căn 04 – 102.63m2",
      code: "CĂN HỘ CH-04 (102,63 m²)",
      areaText: "102,63 m² tim tường • 95,50 m² thông thủy",
      bedrooms: "3 Phòng ngủ",
      bathrooms: "2 WC",
      direction: "Ban công Tây Nam – View Hồ Bơi Nội Khu",
      description:
        "Thiết kế 3 phòng ngủ tối ưu không góc chết, tất cả các phòng ngủ đều có cửa sổ lớn đón gió tươi tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-06",
      tabLabel: "Căn 06 – 70.22m2",
      code: "CĂN HỘ CH-06 (70,22 m²)",
      areaText: "70,22 m² tim tường • 64,90 m² thông thủy",
      bedrooms: "2 Phòng ngủ",
      bathrooms: "2 WC",
      direction: "Ban công Đông Bắc – View Quảng Trường",
      description:
        "Lựa chọn hoàn hảo cho gia đình trẻ hoặc đầu tư cho thuê với suất đầu tư hợp lý và thanh khoản cao.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-08",
      tabLabel: "Căn 08 – 63.95m2",
      code: "CĂN HỘ CH-08 (63,95 m²)",
      areaText: "63,95 m² tim tường • 59,10 m² thông thủy",
      bedrooms: "2 Phòng ngủ",
      bathrooms: "2 WC",
      direction: "Ban công Nam – Mát mẻ quanh năm",
      description:
        "Căn hộ 2 phòng ngủ bố trí thông minh, tối ưu hóa diện tích sinh hoạt chung và logia phơi phóng kín đáo.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "fp-09",
      tabLabel: "Căn 09 – 106.56m2",
      code: "CĂN HỘ GÓC CH-09 (106,56 m²)",
      areaText: "106,56 m² tim tường • 99,20 m² thông thủy",
      bedrooms: "3 Phòng ngủ",
      bathrooms: "2 WC",
      direction: "Căn góc Đông Nam – Tây Nam",
      description:
        "Căn góc 3 phòng ngủ sở hữu tầm nhìn kép vừa hướng ra hồ điều hòa vừa bao quát bể bơi sinh thái nội khu.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"
    }
  ],
  paymentSteps: [
    {
      stepNumber: 1,
      text: "Đặt cọc căn hộ: 100 triệu đồng"
    },
    {
      stepNumber: 2,
      text: "Thanh toán 25% Giá bán căn hộ và thuế GTGT tương ứng (đã bao gồm khoản tiền đặt cọc)"
    },
    {
      stepNumber: 3,
      text: "Thanh toán: 10% Giá bán căn hộ và thuế GTGT tương ứng."
    },
    {
      stepNumber: 4,
      text: "Thanh toán: 15% Giá bán căn hộ và thuế GTGT tương ứng."
    },
    {
      stepNumber: 5,
      text: "Thanh toán: 10% Giá bán căn hộ và thuế GTGT tương ứng."
    },
    {
      stepNumber: 6,
      text: "Thanh toán: 10% Giá bán căn hộ và thuế GTGT tương ứng."
    },
    {
      stepNumber: 7,
      text: "Thanh toán: 25% Giá bán căn hộ, thuế GTGT tương ứng và khoản kinh phí bảo trì phần sở hữu chung."
    },
    {
      stepNumber: 8,
      text: "Thanh toán: 5% Giá bán căn hộ và thuế GTGT tương ứng."
    }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  ],
  news: [
    {
      id: "news-1",
      title: "Mona Park View Cầu Giấy có gì hấp dẫn khách hàng?",
      date: "24 Tháng Mười Hai, 2026",
      category: "Điểm nhấn dự án",
      excerpt:
        "Chung cư Mona Park View Cầu Giấy đang tạo nên sức hút lớn trên thị trường nhờ vị trí đối diện công viên hồ điều hòa 32ha...",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "Mona Park View mang đến cho quý khách hàng điều tuyệt vời gì?",
      date: "24 Tháng Mười Hai, 2026",
      category: "Tiện ích nội khu",
      excerpt:
        "TIỆN ÍCH NGOẠI KHU & NỘI KHU CHUNG CƯ MONA PARK VIEW Dự án Mona Park View là một trong những tổ hợp xanh chuẩn mực...",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "Chính sách bán hàng hấp dẫn nhất của Mona Park View",
      date: "24 Tháng Mười Hai, 2026",
      category: "Chính sách ưu đãi",
      excerpt:
        "Mona Park View Cầu Giấy được Đầu tư bởi chủ đầu tư Phú Nguyên với gói chiết khấu thanh toán sớm lên đến 6% giá trị căn hộ...",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-4",
      title: "Chính sách ngân hàng vô cùng ưu đãi tại Mona Park View",
      date: "24 Tháng Mười Hai, 2026",
      category: "Hỗ trợ tài chính",
      excerpt:
        "Giá bán và chính sách bán hàng tại Mona Park Views trong giai đoạn đầu ra hàng hỗ trợ lãi suất 0% cho tới khi bàn giao nhà...",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export default xayDung8DefaultData;
