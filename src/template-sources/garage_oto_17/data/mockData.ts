import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto17BatteryProduct {
  id: string;
  name: string;
  brand: "VARTA" | "ROCKET" | "GS" | "DELKOR";
  voltageCapacity: string;
  terminalType: string;
  warranty: string;
  compatibleCars: string;
  price: string;
  tradeInPrice: string;
  badge?: string;
  image: string;
}

export interface GarageOto17RescueService {
  id: string;
  title: string;
  responseTime: string;
  priceNote: string;
  description: string;
}

export interface GarageOto17Data extends ClonedTemplateBaseData {
  categoryMenu: string[];
  batteryProducts: GarageOto17BatteryProduct[];
  rescueServices: GarageOto17RescueService[];
}

export const garageOto17DefaultData: GarageOto17Data = {
  business: {
    name: "Ắc Quy Việt Nhật Auto",
    phone: ["0763 100 100", "0707 838 383"],
    email: ["cskh@acquyvietnhat.vn", "cuuho247@acquyvietnhat.vn"],
    address: "666/64/29 Đường 3/2, Phường 14, Quận 10, TP.HCM",
    workingHours: "Phục vụ 24/7 (Cứu hộ kích bình & thay bình tận nơi sau 15 phút)",
    rating: 4.9,
    reviewCount: 685,
    aboutTitle: "ĐẠI LÝ PHÂN PHỐI ẮC QUY Ô TÔ CHÍNH HÃNG & CỨU HỘ 24/7 VIỆT NHẬT AUTO",
    aboutText: [
      "Ắc Quy Việt Nhật Auto chuyên nhập khẩu và phân phối chính hãng các dòng ắc quy ô tô hàng đầu thế giới như VARTA (Đức), ROCKET & DELKOR (Hàn Quốc), GS (Nhật Bản), AMARON (Mỹ) với đầy đủ tem bảo hành điện tử và date sản xuất mới nhất.",
      "Với phương châm 'Phục vụ là niềm vui', đội ngũ kỹ thuật viên lưu động của Việt Nhật Auto trực chiến 24/7 khắp các quận huyện TP.HCM, hỗ trợ câu bình, kích nổ, đo kiểm máy phát điện và lắp đặt ắc quy tận nơi hoàn toàn miễn phí công thay."
    ],
  },
  hero: {
    eyebrow: "CỨU HỘ ẮC QUY TP.HCM 24/7",
    title: "Câu bình, kích nổ bình, thay bình ắc quy tận nơi tại TP.HCM 24/7",
    subtitle:
      "Cam kết 100% ắc quy chính hãng mới nguyên hộp • Thu mua bình cũ giá cao • Miễn phí đo kiểm dòng sạc Dynamo & lắp đặt tận nơi chỉ trong 15 - 20 phút.",
    ctaText: "GỌI CỨU HỘ NGAY: 0763 100 100",
    ctaLink: "tel:0763100100",
    secondaryCtaText: "XEM BẢNG GIÁ ẮC QUY",
    secondaryCtaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=85",
  },
  categoryMenu: [
    "Ắc Quy VARTA (CHLB Đức)",
    "Ắc Quy ROCKET (Hàn Quốc)",
    "Ắc Quy GS Liên Doanh Nhật",
    "Ắc Quy DELKOR Chính Hãng",
    "Ắc Quy AGM Start-Stop (Merc/BMW)",
    "Ắc Quy Xe Tải & Tàu Thuyền",
    "Máy Sạc & Phụ Kiện Kích Bình",
  ],
  stats: [
    { id: "st-1", number: "15 Phút", title: "CÓ MẶT CỨU HỘ TẬN NƠI" },
    { id: "st-2", number: "100%", title: "CHÍNH HÃNG DATE MỚI NHẤT" },
    { id: "st-3", number: "12 - 24 Tháng", title: "BẢO HÀNH ĐIỆN TỬ TOÀN QUỐC" },
    { id: "st-4", number: "0đ", title: "MIỄN PHÍ LẮP ĐẶT TẠI TP.HCM" },
  ],
  batteryProducts: [
    {
      id: "bat-1",
      name: "Ắc Quy Varta 55D23LR (12V-60Ah)",
      brand: "VARTA",
      voltageCapacity: "12V - 60Ah",
      terminalType: "Cọc L / R tiêu chuẩn JIS",
      warranty: "Bảo hành 12 tháng",
      compatibleCars: "Mazda 3, Mazda CX-5, Kia Cerato, Hyundai Tucson, Toyota Camry",
      price: "1,560,000đ",
      tradeInPrice: "1,360,000đ (Thu bình cũ)",
      badge: "Bán chạy #1",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-2",
      name: "Ắc Quy VARTA 80D26L (12V-75Ah)",
      brand: "VARTA",
      voltageCapacity: "12V - 75Ah",
      terminalType: "Cọc L (Cọc to)",
      warranty: "Bảo hành 12 tháng",
      compatibleCars: "Toyota Fortuner, Hyundai SantaFe, Mitsubishi Pajero, Lexus RX350",
      price: "1,780,000đ",
      tradeInPrice: "1,530,000đ (Thu bình cũ)",
      badge: "Chính hãng Đức",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-3",
      name: "Ắc Quy ROCKET NX120-7 (12V-90Ah)",
      brand: "ROCKET",
      voltageCapacity: "12V - 90Ah",
      terminalType: "Cọc L / R chịu tải cao",
      warranty: "Bảo hành 12 tháng",
      compatibleCars: "Ford Everest, Ford Ranger, Hyundai Starex, Kia Sedona, Xe tải nhẹ",
      price: "1,900,000đ",
      tradeInPrice: "1,620,000đ (Thu bình cũ)",
      badge: "Nhập khẩu Hàn Quốc",
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-4",
      name: "Ắc Quy VARTA 56030 DIN60 (12V-60Ah)",
      brand: "VARTA",
      voltageCapacity: "12V - 60Ah (Cọc chìm DIN)",
      terminalType: "DIN60 Chuẩn Châu Âu",
      warranty: "Bảo hành 12 tháng",
      compatibleCars: "Ford EcoSport, Ford Focus, Peugeot 3008, VinFast Fadil, Kona",
      price: "1,690,000đ",
      tradeInPrice: "1,470,000đ (Thu bình cũ)",
      badge: "Cọc chìm DIN",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-5",
      name: "Ắc Quy VARTA 58014 DIN80 (12V-80Ah)",
      brand: "VARTA",
      voltageCapacity: "12V - 80Ah (DIN80)",
      terminalType: "Cọc chìm DIN chuẩn Âu",
      warranty: "Bảo hành 12 tháng",
      compatibleCars: "Ford Ranger Wildtrak, Everest Bi-Turbo, VinFast Lux A2.0/SA2.0, Audi",
      price: "2,150,000đ",
      tradeInPrice: "1,850,000đ (Thu bình cũ)",
      badge: "Dòng phóng CCA cao",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-6",
      name: "Ắc Quy GS MF 46B24LS (12V-45Ah)",
      brand: "GS",
      voltageCapacity: "12V - 45Ah",
      terminalType: "Cọc L (Bình khô miễn bảo dưỡng)",
      warranty: "Bảo hành 09 tháng",
      compatibleCars: "Toyota Vios, Honda City, Honda CR-V, Yaris, Innova",
      price: "1,220,000đ",
      tradeInPrice: "1,050,000đ (Thu bình cũ)",
      badge: "Phổ thông bền bỉ",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-7",
      name: "Ắc Quy DELKOR DF80L (12V-80Ah)",
      brand: "DELKOR",
      voltageCapacity: "12V - 80Ah",
      terminalType: "Lưới PowerFrame độc quyền",
      warranty: "Bảo hành 12 tháng",
      compatibleCars: "Kia Carnival, Sorento máy dầu, SantaFe máy dầu, Toyota Hilux",
      price: "1,850,000đ",
      tradeInPrice: "1,600,000đ (Thu bình cũ)",
      badge: "Siêu bền Hàn Quốc",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat-8",
      name: "Ắc Quy VARTA AGM LN4 (12V-80Ah)",
      brand: "VARTA",
      voltageCapacity: "12V - 80Ah AGM (800 CCA)",
      terminalType: "Chuyên dụng Start-Stop / i-Stop",
      warranty: "Bảo hành 15 tháng",
      compatibleCars: "Mercedes C-Class, E-Class, GLC, BMW 320i, 520i, Porsche",
      price: "4,350,000đ",
      tradeInPrice: "3,950,000đ (Thu bình cũ)",
      badge: "Cao cấp AGM",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    },
  ],
  rescueServices: [
    {
      id: "rs-1",
      title: "Câu Bình & Kích Nổ Ô Tô Khẩn Cấp 24/7",
      responseTime: "Có mặt sau 15 phút",
      priceNote: "Chỉ từ 150.000đ / lần",
      description:
        "Hỗ trợ kích nổ bình ắc quy xe hết điện do quên tắt đèn, xe để lâu ngày tại hầm chung cư, bãi xe hoặc trên đường tại tất cả các quận TP.HCM.",
    },
    {
      id: "rs-2",
      title: "Thay Bình Ắc Quy Ô Tô Tận Nơi Miễn Phí Lắp Đặt",
      responseTime: "Lắp đặt chuẩn kỹ thuật 10 phút",
      priceNote: "Miễn phí công thay & vận chuyển",
      description:
        "Nuôi nguồn ECU giữ nguyên cài đặt màn hình, ghế nhớ và hộp số khi thay bình cho các dòng xe sang Mercedes, BMW, Audi, Lexus, Mazda.",
    },
    {
      id: "rs-3",
      title: "Kiểm Tra Máy Phát Điện (Dynamo) & Dòng Rò",
      responseTime: "Chẩn đoán bằng máy chuyên dụng",
      priceNote: "Miễn phí 100% khi thay bình",
      description:
        "Đo kiểm chính xác tuổi thọ ắc quy (SOH), mức nạp (SOC), dòng đề khởi động (CCA) và điện áp sạc của máy phát điện.",
    },
    {
      id: "rs-4",
      title: "Thu Mua Bình Ắc Quy Cũ Đổi Bình Mới Giá Cao",
      responseTime: "Khấu trừ trực tiếp vào hóa đơn",
      priceNote: "Hỗ trợ từ 150.000đ - 450.000đ/bình",
      description:
        "Thu hồi ắc quy chì cũ theo quy chuẩn bảo vệ môi trường, giúp khách hàng tiết kiệm tối đa chi phí khi nâng cấp bình mới.",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "5 Dấu hiệu cảnh báo ắc quy ô tô sắp hỏng cần kiểm tra ngay trước chuyến đi xa",
      date: "14/05/2026",
      category: "KINH NGHIỆM ẮC QUY",
      excerpt:
        "Đèn báo ắc quy trên taplo sáng, tiếng đề máy yếu vào buổi sáng hoặc đầu cọc bình xuất hiện muối trắng là những tín hiệu không thể bỏ qua...",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "So sánh ắc quy Varta (Đức) và Rocket (Hàn Quốc): Nên chọn loại nào cho xe SUV?",
      date: "21/05/2026",
      category: "TƯ VẤN CHỌN BÌNH",
      excerpt:
        "Phân tích chi tiết dòng phóng khởi động lạnh (CCA), độ bền bản cực và mức giá thực tế của hai thương hiệu ắc quy bán chạy nhất hiện nay...",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Vì sao các dòng xe có chế độ i-Stop / Start-Stop bắt buộc phải dùng ắc quy EFB hoặc AGM?",
      date: "29/05/2026",
      category: "KỸ THUẬT ĐIỆN Ô TÔ",
      excerpt:
        "Lắp nhầm ắc quy thường cho xe Mazda i-Stop hoặc Mercedes sẽ khiến hệ thống báo lỗi tam giác vàng và giảm tuổi thọ bình chỉ còn vài tháng...",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = garageOto17DefaultData;
export default garageOto17DefaultData;
