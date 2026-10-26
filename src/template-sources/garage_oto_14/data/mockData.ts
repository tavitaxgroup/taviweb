import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto14Product {
  id: string;
  category: string;
  title: string;
  oldPrice?: string;
  price: string;
  discount?: string;
  image: string;
}

export interface GarageOto14Data extends ClonedTemplateBaseData {
  primaryCollectionTitle: string;
  primaryProducts: GarageOto14Product[];
  secondaryCollectionTitle: string;
  secondaryProducts: GarageOto14Product[];
  comboCollectionTitle: string;
  comboProducts: GarageOto14Product[];
  accessoryProducts: GarageOto14Product[];
  splitBanners: {
    leftTitle: string;
    leftSubtitle: string;
    leftImage: string;
    rightTitle: string;
    rightSubtitle: string;
    rightImage: string;
  };
}

export const garageOto14DefaultData: GarageOto14Data = {
  business: {
    name: "SmartCar",
    phone: ["0126 922 0162", "1900 636 648"],
    email: ["cskh@smartcar.vn", "info@smartcar.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 540,
    aboutTitle: "TRUNG TÂM ĐIỆN TỬ Ô TÔ, CAMERA HÀNH TRÌNH & SMARTCAR",
    aboutText: [
      "SmartCar chuyên phân phối và lắp đặt thiết bị điện tử ô tô cao cấp: Màn hình Android thông minh, Camera hành trình 4K, Camera 360 độ, Đồng hồ HUD hiển thị kính lái và Phụ kiện xe sang chính hãng.",
      "Cam kết lắp đặt cắm giắc zin 100%, giữ nguyên bảo hành hãng và nâng tầm đẳng cấp khoang lái cho mọi dòng xe."
    ],
  },
  hero: {
    eyebrow: "CÔNG NGHỆ ĐIỆN TỬ Ô TÔ THƯỢNG HẠNG",
    title: "STYLISH ETERNAL\nSMART CAR TECH",
    subtitle: "BỘ SƯU TẬP THIẾT BỊ BUỒNG LÁI THÔNG MINH & ĐỒNG HỒ ĐO ÁP SUẤT",
    ctaText: "KHÁM PHÁ",
    ctaLink: "#bo-suu-tap-1",
    backgroundImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=85",
  },
  primaryCollectionTitle: "MÀN HÌNH & ĐỒNG HỒ HUD Ô TÔ",
  primaryProducts: [
    {
      id: "mp-1",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "MÀN HÌNH ANDROID OLEDPRO X8S LIỀN CAMERA 360 ĐỘ 4K",
      oldPrice: "20,217,000 ₫",
      price: "18,195,300 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-2",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "ĐỒNG HỒ HUD HIỂN THỊ TỐC ĐỘ KÍNH LÁI VIETMAP H1X",
      oldPrice: "5,600,000 ₫",
      price: "5,040,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-3",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "MÀN HÌNH GIẢI TRÍ ZESTECH ZX10+ BẢN GIỚI HẠN",
      price: "21,940,000 ₫",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-4",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "CẢM BIẾN ÁP SUẤT LỐP VAN TRONG STEELMATE TP-MT11",
      price: "3,684,000 ₫",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-5",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "ANDROID BOX CHUYỂN ĐỔI CARPLAY THÔNG MINH BS10",
      oldPrice: "3,042,000 ₫",
      price: "2,737,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-6",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "CỤM ĐỒNG HỒ KỸ THUẬT SỐ DIGITAL COCKPIT MERCEDES",
      oldPrice: "7,680,000 ₫",
      price: "6,912,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-7",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "ĐỒNG HỒ ĐO TURBO & NHIỆT ĐỘ DẦU ĐỘNG CƠ DEFI",
      oldPrice: "4,738,000 ₫",
      price: "4,264,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "mp-8",
      category: "ĐỒNG HỒ & HUD Ô TÔ",
      title: "BỘ ĐỊNH VỊ GPS QUẢN LÝ HÀNH TRÌNH Ô TÔ HỢP CHUẨN",
      oldPrice: "1,863,000 ₫",
      price: "1,677,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80",
    },
  ],
  secondaryCollectionTitle: "CAMERA HÀNH TRÌNH & CẢM BIẾN",
  secondaryProducts: [
    {
      id: "sp-1",
      category: "CAMERA HÀNH TRÌNH",
      title: "CAMERA HÀNH TRÌNH VIETMAP SPEEDMAP M1 CẢNH BÁO TỐC ĐỘ",
      price: "17,640,000 ₫",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-2",
      category: "CAMERA HÀNH TRÌNH",
      title: "CAMERA HÀNH TRÌNH 70MAI A810 4K HDR GHI HÌNH TRƯỚC SAU",
      oldPrice: "6,800,000 ₫",
      price: "6,120,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-3",
      category: "CAMERA HÀNH TRÌNH",
      title: "CAMERA 360 ĐỘ ELLIVIEW V5-P HỖ TRỢ ĐÁNH LÁI THEO VÔ LĂNG",
      price: "9,384,000 ₫",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-4",
      category: "CAMERA HÀNH TRÌNH",
      title: "CAMERA GƯƠNG CHIẾU HẬU ĐIỆN TỬ AI ADAS CHỐNG CHÓI",
      oldPrice: "4,440,000 ₫",
      price: "3,996,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-5",
      category: "CAMERA HÀNH TRÌNH",
      title: "CẢM BIẾN ĐỖ XE 8 MẮT TRƯỚC SAU HIỂN THỊ MÀN HÌNH ZIN",
      price: "5,900,000 ₫",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-6",
      category: "CAMERA HÀNH TRÌNH",
      title: "HỆ THỐNG CẢNH BÁO ĐIỂM MÙ BSM TRÊN GƯƠNG CHIẾU HẬU",
      oldPrice: "4,700,000 ₫",
      price: "4,230,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-7",
      category: "CAMERA HÀNH TRÌNH",
      title: "CAMERA HÀNH TRÌNH BLACKVUE DR970X-2CH LTE CLOUD",
      price: "4,393,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-8",
      category: "CAMERA HÀNH TRÌNH",
      title: "CAMERA LÙI HỒNG NGOẠI SIÊU NÉT GÓC RỘNG 170 ĐỘ",
      oldPrice: "851,000 ₫",
      price: "766,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80",
    },
  ],
  splitBanners: {
    leftTitle: "Đẳng cấp\nkhoang lái",
    leftSubtitle: "KHẲNG ĐỊNH PHONG CÁCH CHỦ NHÂN & TIỆN NGHI",
    leftImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    rightTitle: "Analog &\nDigital",
    rightSubtitle: "ĐỒNG HỒ THÔNG MINH & MÀN HÌNH ĐA NHIỆM THẾ HỆ MỚI",
    rightImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
  },
  comboCollectionTitle: "COMBO NÂNG CẤP ĐÔI",
  comboProducts: [
    {
      id: "cb-1",
      category: "COMBO NÂNG CẤP",
      title: "BỘ ĐÔI MÀN HÌNH ANDROID + CAMERA HÀNH TRÌNH TRƯỚC SAU",
      price: "6,080,000 ₫",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-2",
      category: "COMBO NÂNG CẤP",
      title: "COMBO CẢM BIẾN ÁP SUẤT LỐP + ĐỒNG HỒ HUD KÍNH LÁI",
      oldPrice: "4,700,000 ₫",
      price: "4,230,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-3",
      category: "COMBO NÂNG CẤP",
      title: "COMBO ĐỘ ĐÈN BI LED LASER + ĐÈN VIỀN NỘI THẤT AMBIENT",
      oldPrice: "7,728,000 ₫",
      price: "6,955,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-4",
      category: "COMBO NÂNG CẤP",
      title: "BỘ ĐÔI CHÌA KHÓA THÔNG MINH START/STOP & ĐỀ NỔ TỪ XA",
      price: "5,140,000 ₫",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    },
  ],
  accessoryProducts: [
    {
      id: "ac-1",
      category: "KHẮC LASER CHÌA KHÓA",
      title: "Dịch Vụ Khắc Laser Logo Doanh Nghiệp Lên Smartkey Ô Tô",
      price: "Liên hệ",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ac-2",
      category: "CÁ NHÂN HÓA GIAO DIỆN",
      title: "Dịch Vụ Cài Đặt Giao Diện Màn Hình Theo Phong Cách Chủ Xe",
      price: "Miễn phí",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ac-3",
      category: "HỘP PHỤ KIỆN CAO CẤP",
      title: "HỘP BẢO QUẢN CHÌA KHÓA CHỐNG SÓNG RFID & SẠC KHÔNG DÂY",
      price: "10,500,000 ₫",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ac-4",
      category: "BAO DA SMARTKEY",
      title: "BAO DA BÒ THẬT KHÂU TAY BẢO VỆ CHÌA KHÓA XE SANG",
      oldPrice: "710,000 ₫",
      price: "639,000 ₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "RA MẮT THẾ HỆ MÀN HÌNH Ô TÔ 2K TÍCH HỢP AI GIỌNG NÓI TIẾNG VIỆT",
      date: "14/05/2026",
      excerpt:
        "Điều khiển bản đồ dẫn đường, cảnh báo phạt nguội và giải trí đa phương tiện hoàn toàn bằng giọng nói...",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "KINH NGHIỆM CHỌN CAMERA HÀNH TRÌNH GHI HÌNH ĐÊM SIÊU NÉT SONY STARVIS",
      date: "20/05/2026",
      excerpt:
        "So sánh chi tiết cảm biến ảnh và góc quay của các dòng camera hành trình cao cấp được ưa chuộng nhất...",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "VÌ SAO LẮP ĐẶT CẮM GIẮC ZIN 100% GIÚP GIỮ NGUYÊN BẢO HÀNH HÃNG?",
      date: "28/05/2026",
      excerpt:
        "Tìm hiểu quy trình thi công điện tử ô tô chuẩn an toàn châu Âu tại hệ thống kỹ thuật SmartCar...",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = garageOto14DefaultData;
export default garageOto14DefaultData;
