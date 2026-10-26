import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface HichiSmartLockProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  oldPrice: string;
  discountBadge: string;
  unlockMethods: string[];
  doorRequirement: string;
  warranty: string;
  image: string;
}

export interface SmartUnlockTechnologyItem {
  id: string;
  code: "fingerprint" | "keypad" | "key" | "wifi";
  title: string;
  subtitle: string;
  description: string;
}

export interface ActualInstallationCase {
  id: string;
  projectTitle: string;
  customerName: string;
  lockModel: string;
  doorType: string;
  location: string;
  image: string;
}

export interface CorporateProfile23Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  navLinks: { label: string; href: string }[];
  unlockTechnologies: SmartUnlockTechnologyItem[];
  authorizedBrands: {
    id: string;
    name: string;
    origin: string;
  }[];
  productCategories: string[];
  smartLockProducts: HichiSmartLockProduct[];
  installationGallery: ActualInstallationCase[];
  serviceCommitments: {
    id: string;
    title: string;
    subtitle: string;
  }[];
}

export const corporateProfile23MockData: CorporateProfile23Data = {
  templateKey: "corporate_profile_23",
  business: {
    name: "HichiHome — Khóa Vân Tay Chính Hãng",
    tagline:
      "Giải Pháp Công Nghệ Khóa Cửa Điện Tử Hàng Đầu Việt Nam — Kết Hợp An Ninh Và Thẩm Mỹ, Mang Lại Trải Nghiệm Tuyệt Vời Cho Mọi Gia Chủ",
    description:
      "Hệ thống phân phối và lắp đặt khóa cửa vân tay, khóa nhận diện khuôn mặt 3D Face ID, khóa thẻ từ khách sạn và thiết bị an ninh SmartHome chính hãng Bosch, Philips, Kaadas, Solity, Samsung trên toàn quốc.",
    phone: ["0983 605 386", "1900 636 648"],
    email: ["cskh@hichihome.vn", "duan@hichihome.vn"],
    address: "Showroom HichiHome SmartLock, 319 Lý Thường Kiệt, Quận 11, TP. Hồ Chí Minh",
    website: "https://hichihome.monamedia.net",
    workingHours: "08:00 - 21:00 (Hỗ trợ kỹ thuật & mở khóa khẩn cấp 24/7)",
    taxCode: "0315478921",
  },
  navLinks: [
    { label: "TRANG CHỦ", href: "#" },
    { label: "KHÓA VÂN TAY", href: "#bo-suu-tap-khoa" },
    { label: "KHÓA FACE ID 3D", href: "#bo-suu-tap-khoa" },
    { label: "CÔNG NGHỆ AN NINH", href: "#cong-nghe-mo-khoa" },
    { label: "CÔNG TRÌNH LẮP ĐẶT", href: "#cong-trinh-thuc-te" },
    { label: "BẢO HÀNH 24/7", href: "#lien-he-hichihome" },
  ],
  hero: {
    badge: "HICHIHOME • KHÓA VÂN TAY CHÍNH HÃNG",
    title: "GIẢI PHÁP CÔNG NGHỆ KHÓA CỬA ĐIỆN TỬ HÀNG ĐẦU VIỆT NAM",
    subtitle:
      "Kết hợp an ninh và thẩm mỹ, mang lại trải nghiệm tuyệt vời cho mọi gia chủ",
    primaryCta: "KHÁM PHÁ BỘ SƯU TẬP",
    secondaryCta: "TƯ VẤN LẮP ĐẶT TẬN NƠI",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85",
  },
  unlockTechnologies: [
    {
      id: "tech-1",
      code: "fingerprint",
      title: "Vân Tay Sinh Trắc Học FPC Thụy Điển",
      subtitle: "Nhận diện siêu nhạy < 0.3 giây",
      description:
        "Cảm biến bán dẫn 360 độ nhận diện qua nhiệt độ, điện dung và áp suất da người sống, chống làm giả vân tay silicon 100%.",
    },
    {
      id: "tech-2",
      code: "keypad",
      title: "Mã Số Ảo Chống Nhìn Trộm",
      subtitle: "Bảo mật mật khẩu tối đa 32 ký tự",
      description:
        "Cho phép nhập dãy số ngẫu nhiên trước và sau mật khẩu thật trên màn hình cảm ứng kính cường lực chống bám vân tay.",
    },
    {
      id: "tech-3",
      code: "key",
      title: "Lõi Khóa Cấp Độ C & Chìa Cơ CNC",
      subtitle: "Chống cắt phá & sao chép tuyệt đối",
      description:
        "Thân khóa hợp kim kẽm nguyên khối kết hợp 5 chốt inox 304 chống cạy cửa và chìa cơ rãnh xoắn CNC bảo mật ngân hàng.",
    },
    {
      id: "tech-4",
      code: "wifi",
      title: "Điều Khiển Qua App WiFi & Face ID 3D",
      subtitle: "Cấp mã mở cửa từ xa & Lịch sử ra vào",
      description:
        "Tích hợp chuông hình camera góc rộng, đàm thoại 2 chiều và mở khóa từ xa cho khách qua ứng dụng điện thoại mọi lúc mọi nơi.",
    },
  ],
  authorizedBrands: [
    { id: "br-1", name: "BOSCH", origin: "CHLB Đức" },
    { id: "br-2", name: "PHILIPS", origin: "Hà Lan" },
    { id: "br-3", name: "KAADAS", origin: "CHLB Đức" },
    { id: "br-4", name: "SOLITY", origin: "Hàn Quốc" },
    { id: "br-5", name: "SAMSUNG", origin: "Hàn Quốc" },
    { id: "br-6", name: "HAFELE", origin: "CHLB Đức" },
  ],
  productCategories: [
    "Tất cả",
    "Khóa Vân Tay Push-Pull",
    "Khóa Face ID 3D & Camera",
    "Khóa Cửa Nhôm Xingfa",
    "Khóa Biệt Thự Đại Sảnh",
  ],
  smartLockProducts: [
    {
      id: "lock-1",
      name: "Khóa Điện Tử Bosch ID30B / FU780 Push-Pull Cao Cấp",
      brand: "BOSCH",
      category: "Khóa Vân Tay Push-Pull",
      oldPrice: "18.500.000 ₫",
      price: "13.900.000 ₫",
      discountBadge: "-25%",
      unlockMethods: ["Vân tay FPC", "Mã số ảo", "Thẻ từ", "App WiFi", "Chìa cơ"],
      doorRequirement: "Cửa gỗ, cửa thép chống cháy (Đố cửa ≥ 10cm)",
      warranty: "Bảo hành chính hãng 24 tháng tận nhà",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lock-2",
      name: "Khóa Nhận Diện Khuôn Mặt 3D Philips DDL702-8HWS",
      brand: "PHILIPS",
      category: "Khóa Face ID 3D & Camera",
      oldPrice: "22.900.000 ₫",
      price: "17.490.000 ₫",
      discountBadge: "-24%",
      unlockMethods: ["Face ID 3D", "Vân tay", "Mã số", "App WiFi", "Chìa cơ"],
      doorRequirement: "Cửa gỗ, cửa đại sảnh chung cư cao cấp",
      warranty: "Bảo hành chính hãng 24 tháng tận nhà",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lock-3",
      name: "Khóa Vân Tay Kaadas K9-5W Push-Pull Thiết Kế BMW",
      brand: "KAADAS",
      category: "Khóa Vân Tay Push-Pull",
      oldPrice: "14.200.000 ₫",
      price: "10.800.000 ₫",
      discountBadge: "-24%",
      unlockMethods: ["Vân tay trên tay cầm", "Mã số", "Thẻ từ", "App", "Chìa cơ"],
      doorRequirement: "Cửa gỗ, cửa nhựa Composite, cửa thép",
      warranty: "Bảo hành 24 tháng 1 đổi 1 trong 30 ngày",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lock-4",
      name: "Khóa Chuông Hình Tích Hợp Face ID Bosch EL600VF",
      brand: "BOSCH",
      category: "Khóa Face ID 3D & Camera",
      oldPrice: "26.500.000 ₫",
      price: "20.900.000 ₫",
      discountBadge: "-21%",
      unlockMethods: ["Face ID 3D", "Màn hình IPS 4 inch", "Vân tay", "App WiFi"],
      doorRequirement: "Cửa biệt thự, căn hộ Penthouse, chung cư",
      warranty: "Bảo hành 24 tháng chính hãng Bosch",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lock-5",
      name: "Khóa Vân Tay Chống Nước Cửa Nhôm Xingfa Philips DDL608-5HWS",
      brand: "PHILIPS",
      category: "Khóa Cửa Nhôm Xingfa",
      oldPrice: "9.800.000 ₫",
      price: "7.450.000 ₫",
      discountBadge: "-24%",
      unlockMethods: ["Vân tay", "Mã số", "Thẻ từ", "App WiFi", "Chống nước IP65"],
      doorRequirement: "Cửa nhôm Xingfa, cửa sắt hộp, cửa lùa (Đố ≥ 5.5cm)",
      warranty: "Bảo hành 24 tháng tận nơi",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lock-6",
      name: "Khóa Đại Sảnh Biệt Thự Tân Cổ Điển Mạ Vàng 24K Kaadas 6001",
      brand: "KAADAS",
      category: "Khóa Biệt Thự Đại Sảnh",
      oldPrice: "35.000.000 ₫",
      price: "27.900.000 ₫",
      discountBadge: "VIP LUXURY",
      unlockMethods: ["Nắp trượt tự động", "Vân tay FPC", "Mã số", "Thẻ từ"],
      doorRequirement: "Cửa gỗ tự nhiên nguyên tấm biệt thự, lâu đài",
      warranty: "Bảo hành VIP 36 tháng định kỳ",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ],
  installationGallery: [
    {
      id: "inst-1",
      projectTitle: "Lắp Đặt Khóa Bosch FU780 Tại Biệt Thự Vinhomes Riverside",
      customerName: "Gia đình Anh Minh Quân",
      lockModel: "Bosch FU780 Đen Viền Đồng",
      doorType: "Cửa gỗ Lim Nam Phi nguyên khối",
      location: "Long Biên, Hà Nội",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "inst-2",
      projectTitle: "Bàn Giao 45 Bộ Khóa Philips Face ID Tại Căn Hộ Empire City",
      customerName: "Chủ đầu tư Khu căn hộ Thủ Thiêm",
      lockModel: "Philips DDL702-8HWS Face ID 3D",
      doorType: "Cửa gỗ chống cháy 3 lớp",
      location: "TP. Thủ Đức, TP. Hồ Chí Minh",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "inst-3",
      projectTitle: "Giải Pháp Khóa Vân Tay Kaadas K9 Cho Khu Đô Thị Ecopark",
      customerName: "Chị Thanh Hằng — Biệt thự Đảo",
      lockModel: "Kaadas K9-5W Push-Pull",
      doorType: "Cửa chính 2 cánh gỗ Gõ Đỏ",
      location: "Khu đô thị Ecopark",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    },
  ],
  serviceCommitments: [
    {
      id: "sc-1",
      title: "Miễn Phí Lắp Đặt Trong 2 Giờ",
      subtitle: "Đội ngũ 50+ kỹ thuật viên có mặt ngay tại Hà Nội & TP.HCM",
    },
    {
      id: "sc-2",
      title: "Chính Hãng 100% CO, CQ",
      subtitle: "Đền gấp 10 lần nếu phát hiện hàng giả, hàng kém chất lượng",
    },
    {
      id: "sc-3",
      title: "Bảo Hành Tận Nhà 24 Tháng",
      subtitle: "Hỗ trợ kỹ thuật khẩn cấp 24/7 kể cả ngày Lễ & Tết",
    },
    {
      id: "sc-4",
      title: "Trả Góp 0% Lãi Suất",
      subtitle: "Hỗ trợ quẹt thẻ Visa/MasterCard tại nhà tiện lợi",
    },
  ],
  stats: [
    { value: "25.000+", label: "Gia Đình Việt Đã Lắp Đặt" },
    { value: "0.3 Giây", label: "Tốc Độ Nhận Diện Vân Tay FPC" },
    { value: "2 Giờ", label: "Thời Gian Khảo Sát & Lắp Đặt" },
    { value: "24 Tháng", label: "Bảo Hành Chính Hãng Tận Nhà" },
  ],
  services: [
    {
      title: "Khóa Cửa Vân Tay & Face ID 3D Cao Cấp",
      description:
        "Phân phối chính hãng các dòng khóa Push-Pull tự động Bosch, Philips, Kaadas mở khóa bằng khuôn mặt 3D và vân tay.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Khóa Cửa Nhôm Xingfa & Kính Cường Lực",
      description:
        "Giải pháp khóa vân tay chống nước chuẩn IP65 chuyên dụng cho cửa nhôm kính, cửa sắt cổng biệt thự.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Giải Pháp Khóa Thẻ Từ Khách Sạn & Resort",
      description:
        "Cung cấp hệ thống khóa thẻ từ kết hợp phần mềm quản lý buồng phòng thông minh cho khách sạn 3-5 sao.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  projects: [
    {
      title: "Lắp Đặt Khóa Bosch FU780 Tại Biệt Thự Vinhomes Riverside",
      category: "Biệt thự cao cấp",
      summary: "Thi công trọn gói khóa vân tay Push-Pull Bosch cho hệ cửa gỗ Lim nguyên khối.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      name: "Anh Minh Quân",
      role: "Cư dân Vinhomes Riverside",
      quote:
        "Mình lắp bộ khóa Bosch tại HichiHome rất ưng ý. Kỹ thuật viên khoan đục cửa gỗ cực kỳ khéo léo, khóa nhận vân tay nhạy và nhìn sang trọng hẳn căn nhà!",
      rating: 5,
    },
  ],
  news: [
    {
      title: "Top 5 mẫu khóa vân tay Bosch và Philips đáng mua nhất cho chung cư và biệt thự năm 2026",
      date: "21/10/2026",
      category: "Tư vấn khóa điện tử",
      excerpt:
        "So sánh chi tiết công nghệ nhận diện khuôn mặt 3D Face ID, cảm biến vân tay FPC và tính năng chuông hình từ xa.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
