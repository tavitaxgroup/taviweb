import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VienThongAProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  saleBadge?: boolean;
  ctaType: "cart" | "model";
  brand: string;
  image: string;
  specs: string[];
}

export interface VienThongACategorySection {
  id: string;
  title: string;
  brandLinks: string[];
  poster: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtext: string;
    image: string;
    bgClass: string;
  };
  topRowProducts: VienThongAProductItem[];
  bottomRowProducts: VienThongAProductItem[];
}

export interface B2bProduct20Data extends ClonedTemplateBaseData {
  topNavIcons: Array<{
    id: string;
    label: string;
    iconType:
      | "phone"
      | "laptop"
      | "tablet"
      | "accessory"
      | "promo"
      | "clearance"
      | "news";
  }>;
  heroSideBanners: {
    topBanner: {
      title: string;
      subtitle: string;
      note: string;
      image: string;
    };
    bottomBanner: {
      title: string;
      highlight: string;
      badge: string;
      image: string;
    };
  };
  newAndBestProducts: VienThongAProductItem[];
  phoneSection: {
    title: string;
    brandLinks: string[];
    poster: {
      title: string;
      subtitle: string;
      promoText: string;
      image: string;
    };
    products: VienThongAProductItem[];
  };
  tabletSection: VienThongACategorySection;
  laptopSection: VienThongACategorySection;
  accessorySection: VienThongACategorySection;
  bottomAccessoryBanner: {
    title: string;
    discountLabel: string;
    price: string;
    oldPrice: string;
    highlight: string;
    image: string;
  };
  footerTags: string[];
}

export const b2bProduct20DefaultData: B2bProduct20Data = {
  business: {
    name: "VienThongA.vn",
    phone: ["0126 922 0162", "1900 54 54 46"],
    email: ["cskh@vienthonga.vn", "b2b@vienthonga.vn"],
    address: "151 Hồ Bá Kiện, Phường 15, Quận 10, TP.HCM",
    workingHours: "Từ 7h00 - 21h30 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 3420,
    aboutTitle: "Tổng Kho Phân Phối Thiết Bị Viễn Thông & Điện Tử ViễnThôngA",
    aboutText: [
      "Hệ thống tổng kho phân phối điện thoại di động, máy tính bảng, máy tính xách tay và phụ kiện công nghệ chính hãng bảo hành toàn quốc.",
    ],
  },
  topNavIcons: [
    { id: "tni-1", label: "ĐIỆN THOẠI", iconType: "phone" },
    { id: "tni-2", label: "LAPTOP", iconType: "laptop" },
    { id: "tni-3", label: "TABLET", iconType: "tablet" },
    { id: "tni-4", label: "PHỤ KIỆN", iconType: "accessory" },
    { id: "tni-5", label: "KHUYẾN MÃI", iconType: "promo" },
    { id: "tni-6", label: "XẢ HÀNG", iconType: "clearance" },
    { id: "tni-7", label: "TIN CÔNG NGHỆ", iconType: "news" },
  ],
  hero: {
    eyebrow: "Sắm Samsung Galaxy Chính Hãng",
    title: "Trúng 20 Sổ Tiết Kiệm Trị Giá 400 Triệu",
    subtitle: "Galaxy Note8 trợ giá đến 8 triệu • Trả góp 0% • Tặng Gear VR",
    ctaText: "Xem chi tiết",
    ctaLink: "#dien-thoai",
    backgroundImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
  },
  heroSideBanners: {
    topBanner: {
      title: "TRẢ GÓP 0%",
      subtitle: "100% NHẬN QUÀ",
      note: "Áp dụng Home Credit • HD Saison • FE Credit",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
    },
    bottomBanner: {
      title: "SẮM SAMSUNG",
      highlight: "400 triệu",
      badge: "TẶNG PMH PK 300K",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    },
  },
  newAndBestProducts: [
    {
      id: "nb-1",
      title: "Ốp Lưng Dẻo Cho iPhone 6 Plus/6s Plus",
      price: "90,000 ₫",
      oldPrice: "130,000 ₫",
      saleBadge: true,
      ctaType: "cart",
      brand: "Apple",
      image:
        "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=80",
      specs: ["Chất liệu TPU dẻo chống sốc", "Bảo vệ cụm camera tối ưu"],
    },
    {
      id: "nb-2",
      title: "Bao Da iPad Pro 10.5 inch UAG Metropolis",
      price: "1,034,000 ₫",
       ctaType: "cart",
      brand: "UAG",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
      specs: ["Đạt chuẩn chống sốc quân đội Mỹ", "Tích hợp khe giữ bút cảm ứng"],
    },
    {
      id: "nb-3",
      title: "Thiết Bị Kết Nối Bluetooth Với Điện Thoại Kashimura",
      price: "749,000 ₫",
      ctaType: "cart",
      brand: "Kashimura",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
      specs: ["Đàm thoại rảnh tay trên ô tô", "Pin chờ lên đến 150 giờ"],
    },
    {
      id: "nb-4",
      title: "HD Headphone Amplifier Creative Sound Blaster E3",
      price: "3,245,000 ₫",
      oldPrice: "3,550,000 ₫",
      saleBadge: true,
      ctaType: "cart",
      brand: "Creative",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
      specs: ["Bộ giải mã DAC 24-bit/96kHz", "Kết nối NFC & Bluetooth aptX"],
    },
    {
      id: "nb-5",
      title: "Máy Nghe Nhạc Di Động Astell & Kern AK 320 Xám",
      price: "43,279,000 ₫",
      oldPrice: "47,566,000 ₫",
      saleBadge: true,
      ctaType: "cart",
      brand: "Astell & Kern",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
      specs: ["Dual DAC AKM AK4490 chuẩn Hi-Res", "Bộ nhớ trong 128GB"],
    },
    {
      id: "nb-6",
      title: "Máy Nghe Nhạc Transcend TS8GMP710W",
      price: "1,520,000 ₫",
      oldPrice: "1,600,000 ₫",
      saleBadge: true,
      ctaType: "cart",
      brand: "Transcend",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
      specs: ["Tích hợp cảm biến đếm bước chân", "Ghi âm giọng nói chất lượng cao"],
    },
    {
      id: "nb-7",
      title: "Loa vi tính Logitech Z906 5.1 Công Suất 500W",
      price: "6,990,000 ₫",
      oldPrice: "7,990,000 ₫",
      saleBadge: true,
      ctaType: "cart",
      brand: "Logitech",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
      specs: ["Chứng nhận âm thanh vòm THX", "Giải mã Dolby Digital & DTS"],
    },
    {
      id: "nb-8",
      title: "Loa Bluetooth Sony SRS-X11 10W Siêu Nhỏ Gọn",
      price: "1,490,000 ₫",
      ctaType: "cart",
      brand: "Sony",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
      specs: ["Thiết kế khối lập phương độc đáo", "Thời lượng pin 12 giờ liên tục"],
    },
  ],
  news: [
    {
      id: "vta-news-1",
      title: "Trọn bộ hình nền Huawei Mate 10 đẹp “miễn chê” cho mọi smartphone",
      date: "22/02/2026",
      category: "Tin công nghệ",
      excerpt:
        "Tải ngay bộ hình nền độ phân giải Full HD+ sắc nét được trích xuất trực tiếp từ flagship mới nhất...",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "vta-news-2",
      title: "Rò rỉ thông tin Nokia 6: Màn hình tràn viền tỉ lệ 18:9, Snapdragon 6XX, RAM 4GB",
      date: "20/02/2026",
      category: "Tin đồn",
      excerpt: "Thiết kế khung nhôm nguyên khối bền bỉ cùng giao diện Android thuần mượt mà...",
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "vta-news-3",
      title: "Meizu Note 8 bất ngờ xuất hiện trong diện mạo đẹp hoàn hảo",
      date: "18/02/2026",
      category: "Đánh giá",
      excerpt: "Cụm camera kép xóa phông chuyên nghiệp kết hợp viên pin dung lượng lớn...",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "vta-news-4",
      title: "Tại sao nên mua “phiên bản thu nhỏ” Asus Zenfone 4 Max?",
      date: "15/02/2026",
      category: "Tư vấn chọn mua",
      excerpt: "Thời lượng pin ấn tượng lên tới 2 ngày làm việc liên tục cho nhân viên kinh doanh...",
      image:
        "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=400&q=80",
    },
  ],
  phoneSection: {
    title: "ĐIỆN THOẠI",
    brandLinks: ["Apple", "Samsung", "Motorola", "BlackBerry", "Nokia"],
    poster: {
      title: "SAMSUNG GALAXY J7+",
      subtitle: "Camera kép xóa phông chuyên nghiệp • Thiết kế kim loại nguyên khối",
      promoText: "VÒNG QUAY TỪ 500.000đ - 1.000.000đ HOẶC TRẢ GÓP 0%",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=85",
    },
    products: [
      {
        id: "ph-1",
        title: "Điện Thoại Nokia 5 – Hàng Chính Hãng",
        price: "3,750,000 ₫",
        oldPrice: "4,260,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Nokia",
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình IPS LCD 5.2 inch", "Cảm biến vân tay một chạm"],
      },
      {
        id: "ph-2",
        title: "Điện Thoại BlackBerry KEYone Chính Hãng",
        price: "14,990,000 ₫",
        ctaType: "cart",
        brand: "BlackBerry",
        image:
          "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=500&q=80",
        specs: ["Bàn phím QWERTY vật lý cảm ứng", "Bảo mật DTEK độc quyền"],
      },
      {
        id: "ph-3",
        title: "Điện Thoại Motorola Moto G5S Plus",
        price: "6,280,000 ₫ – 6,290,000 ₫",
        saleBadge: true,
        ctaType: "model",
        brand: "Motorola",
        image:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
        specs: ["Camera kép 13MP chụp xóa phông", "Sạc nhanh TurboPower"],
      },
      {
        id: "ph-4",
        title: "Điện Thoại Motorola Moto Z2 Play",
        price: "9,650,000 ₫",
        oldPrice: "10,990,000 ₫",
        saleBadge: true,
        ctaType: "model",
        brand: "Motorola",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
        specs: ["Thiết kế siêu mỏng 5.99mm", "Tương thích nắp lưng Moto Mods"],
      },
      {
        id: "ph-5",
        title: "Điện Thoại Samsung Galaxy J7 Pro",
        price: "5,860,000 ₫ – 6,050,000 ₫",
        saleBadge: true,
        ctaType: "model",
        brand: "Samsung",
        image:
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80",
        specs: ["Camera khẩu độ lớn f/1.7", "Màn hình Super AMOLED 5.5 inch"],
      },
      {
        id: "ph-6",
        title: "Điện Thoại Samsung Galaxy Note 8",
        price: "19,990,000 ₫",
        oldPrice: "22,490,000 ₫",
        saleBadge: true,
        ctaType: "model",
        brand: "Samsung",
        image:
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80",
        specs: ["Bút S-Pen thông minh thế hệ mới", "Màn hình vô cực 6.3 inch"],
      },
      {
        id: "ph-7",
        title: "Điện Thoại Samsung Galaxy Note FE",
        price: "13,990,000 ₫",
        ctaType: "model",
        brand: "Samsung",
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80",
        specs: ["Kháng nước kháng bụi IP68", "Bảo mật quét mống mắt"],
      },
      {
        id: "ph-8",
        title: "Điện Thoại Samsung Galaxy S8 Chính Hãng",
        price: "15,990,000 ₫",
        oldPrice: "18,490,000 ₫",
        saleBadge: true,
        ctaType: "model",
        brand: "Samsung",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình vô cực Infinity Display", "Camera Dual Pixel 12MP"],
      },
    ],
  },
  tabletSection: {
    id: "may-tinh-bang",
    title: "MÁY TÍNH BẢNG",
    brandLinks: [
      "Apple",
      "Samsung",
      "Kindle",
      "Mobell",
      "Itel",
      "Huawei",
      "Cutepad",
      "Beneve",
    ],
    poster: {
      eyebrow: "Sắm SAMSUNG GALAXY TAB E 9.6",
      title: "Trúng 20 sổ tiết kiệm tổng trị giá 400 triệu",
      highlight: "Tặng PMH LPK 200.000đ - 500.000đ",
      subtext: "Hỗ trợ trả góp 0% lãi suất",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
      bgClass: "from-[#1d5ca8] to-[#38bdf8]",
    },
    topRowProducts: [
      {
        id: "tb-1",
        title: "Máy Đọc Sách Kindle 2017 (8th) – Đen",
        price: "2,790,000 ₫",
        ctaType: "cart",
        brand: "Kindle",
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình E-Ink chống chói như giấy thật", "Pin dùng hàng tuần"],
      },
      {
        id: "tb-2",
        title: "Máy Tính Bảng CutePad Tab 4 M9601",
        price: "2,099,000 ₫",
        oldPrice: "3,190,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Cutepad",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình 9.6 inch HD", "Hỗ trợ khe cắm SIM 3G/4G"],
      },
      {
        id: "tb-3",
        title: "iPad Pro 9.7 inch Wifi Cellular 32GB",
        price: "16,320,000 ₫",
        oldPrice: "18,790,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Apple",
        image:
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
        specs: ["Chip Apple A9X 64-bit mạnh mẽ", "Hệ thống 4 loa Stereo"],
      },
      {
        id: "tb-4",
        title: "iPad WiFi 128GB New 2017 Chính Hãng",
        price: "10,990,000 ₫",
        ctaType: "cart",
        brand: "Apple",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình Retina 9.7 inch sắc nét", "Cảm biến vân tay Touch ID"],
      },
    ],
    bottomRowProducts: [
      {
        id: "tb-5",
        title: "Máy Tính Bảng cutePAD M7089",
        price: "1,449,000 ₫",
        oldPrice: "2,300,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Cutepad",
        image:
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
        specs: ["Nhỏ gọn 7 inch tiện lợi", "Kết nối WiFi tốc độ cao"],
      },
      {
        id: "tb-6",
        title: "Máy Tính Bảng Beneve M1022H",
        price: "4,490,000 ₫",
        oldPrice: "5,500,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Beneve",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình 10.1 inch IPS", "Pin dung lượng 6000mAh"],
      },
      {
        id: "tb-7",
        title: "Máy Tính Bảng Samsung Galaxy Tab E T561",
        price: "4,690,000 ₫",
        oldPrice: "5,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Samsung",
        image:
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình 9.6 inch rộng rãi", "Chế độ đa nhiệm chia đôi màn hình"],
      },
      {
        id: "tb-8",
        title: "Máy Tính Bảng Itel it1703 Chính Hãng",
        price: "2,190,000 ₫",
        oldPrice: "2,290,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Itel",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
        specs: ["Đàm thoại như smartphone", "Vỏ kim loại sang trọng"],
      },
      {
        id: "tb-9",
        title: "Máy Tính Bảng Mobell Tab 8s",
        price: "2,190,000 ₫",
        oldPrice: "2,490,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Mobell",
        image:
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình 8 inch HD IPS", "Hỗ trợ 2 SIM 2 sóng"],
      },
      {
        id: "tb-10",
        title: "Máy Tính Bảng Huawei MediaPad T3 8.0",
        price: "3,990,000 ₫",
        oldPrice: "4,290,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Huawei",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
        specs: ["Vi xử lý Qualcomm Snapdragon", "Chế độ bảo vệ mắt thông minh"],
      },
    ],
  },
  laptopSection: {
    id: "may-tinh-xach-tay",
    title: "MÁY TÍNH XÁCH TAY",
    brandLinks: ["Apple", "Asus", "HP", "Lenovo", "Dell"],
    poster: {
      eyebrow: "LAPTOP DELL Inspiron N3567A",
      title: "11.140.000Đ",
      highlight: "Trả góp 0% + Phiếu mua hàng 200.000đ",
      subtext: "Tặng thêm Gói Gia hạn bảo hành",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
      bgClass: "from-slate-100 to-sky-100 text-slate-900",
    },
    topRowProducts: [
      {
        id: "lp-1",
        title: "Laptop ASUS ROG Strix SCAR GL503VS-EI037T",
        price: "45,570,000 ₫",
        oldPrice: "49,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Asus",
        image:
          "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình 144Hz chuyên Game", "Card đồ họa GTX 1070 8GB"],
      },
      {
        id: "lp-2",
        title: "Laptop Asus Rog G752VS-BA263",
        price: "50,740,000 ₫",
        oldPrice: "55,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Asus",
        image:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
        specs: ["Tản nhiệt buồng hơi 3D Vapor Chamber", "RAM 32GB DDR4"],
      },
      {
        id: "lp-3",
        title: "Laptop Dell Inspiron 7567 N7567A",
        price: "25,980,000 ₫",
        oldPrice: "28,790,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Dell",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
        specs: ["Core i7-7700HQ mạnh mẽ", "Hệ thống tản nhiệt kép"],
      },
      {
        id: "lp-4",
        title: "Laptop Dell Vostro V3568 XF6C61",
        price: "12,200,000 ₫",
        oldPrice: "14,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Dell",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
        specs: ["Bảo mật vân tay cho doanh nghiệp", "Màn hình 15.6 inch chống chói"],
      },
    ],
    bottomRowProducts: [
      {
        id: "lp-5",
        title: "Laptop HP ProBook 440 G3 T9S24PA Bạc",
        price: "10,920,000 ₫",
        oldPrice: "11,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "HP",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
        specs: ["Khung hợp kim nhôm siêu bền", "Bàn phím chống tràn nước"],
      },
      {
        id: "lp-6",
        title: "Laptop HP Envy 13-ad074TU 2LR92PA",
        price: "24,280,000 ₫",
        oldPrice: "26,590,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "HP",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
        specs: ["Viền màn hình siêu mỏng Micro-Edge", "Âm thanh Bang & Olufsen"],
      },
      {
        id: "lp-7",
        title: "Laptop Lenovo ThinkPad T470 Doanh Nghiệp",
        price: "29,690,000 ₫",
        ctaType: "cart",
        brand: "Lenovo",
        image:
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
        specs: ["Pin kép Power Bridge lên tới 18 giờ", "Bàn phím ThinkPad trứ danh"],
      },
      {
        id: "lp-8",
        title: "Laptop Lenovo IdeaPad Y520 Gaming",
        price: "21,920,000 ₫",
        oldPrice: "23,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Lenovo",
        image:
          "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
        specs: ["Loa Harman Dolby Audio Premium", "Đèn nền bàn phím đỏ rực"],
      },
      {
        id: "lp-9",
        title: "Apple Macbook Pro 2017 13.3 Inch MPXU2",
        price: "46,600,000 ₫",
        oldPrice: "52,830,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Apple",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
        specs: ["Màn hình Retina dải màu P3", "Cổng Thunderbolt 3 tốc độ cao"],
      },
      {
        id: "lp-10",
        title: "Apple Macbook Air 2017 13.3 inch MQD32",
        price: "20,890,000 ₫",
        oldPrice: "24,750,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Apple",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
        specs: ["Pin 12 giờ làm việc liên tục", "Thiết kế mỏng nhẹ 1.35kg"],
      },
    ],
  },
  accessorySection: {
    id: "linh-phu-kien",
    title: "LINH PHỤ KIỆN",
    brandLinks: [
      "Bao da – Ốp lưng – Miếng dán màn hình",
      "Loa",
      "Máy nghe nhạc",
      "Phụ kiện âm thanh",
      "Tai nghe",
    ],
    poster: {
      eyebrow: "Đế sạc nhanh không dây",
      title: "iPearl Chuẩn QI",
      highlight: "Giảm 25% • 599.000đ",
      subtext: "Giá gốc: 799.000đ",
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=700&q=80",
      bgClass: "from-teal-700 to-cyan-600",
    },
    topRowProducts: [
      {
        id: "pk-1",
        title: "Tai Nghe JBL T450BT – Hàng Chính Hãng",
        price: "1,600,000 ₫",
        ctaType: "cart",
        brand: "JBL",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        specs: ["Âm trầm JBL Pure Bass", "Kết nối Bluetooth 4.0 gập gọn"],
      },
      {
        id: "pk-2",
        title: "Tai Nghe Bluetooth Plantronics Explorer 50",
        price: "679,000 ₫",
        oldPrice: "799,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Plantronics",
        image:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
        specs: ["Kết nối 2 điện thoại cùng lúc", "Lọc tiếng ồn gió hiệu quả"],
      },
      {
        id: "pk-3",
        title: "Loa Bluetooth Sony SRS-X11 10W",
        price: "1,490,000 ₫",
        ctaType: "cart",
        brand: "Sony",
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
        specs: ["Ghép nối Stereo 2 loa", "Tích hợp NFC một chạm"],
      },
      {
        id: "pk-4",
        title: "Loa vi tính Logitech Z906 5.1",
        price: "6,990,000 ₫",
        oldPrice: "7,990,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Logitech",
        image:
          "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80",
        specs: ["Công suất RMS 500W", "Điều khiển từ xa tiện lợi"],
      },
    ],
    bottomRowProducts: [
      {
        id: "pk-5",
        title: "Ốp Lưng Dẻo Cho iPhone 6 Plus/6s Plus",
        price: "90,000 ₫",
        oldPrice: "130,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Apple",
        image:
          "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=80",
        specs: ["Ôm sát thân máy", "Họa tiết trẻ trung"],
      },
      {
        id: "pk-6",
        title: "Bao Da iPad Pro 10.5 inch UAG Metropolis",
        price: "1,034,000 ₫",
        ctaType: "cart",
        brand: "UAG",
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
        specs: ["Chống va đập chuẩn MIL-STD", "Chân đế gập nhiều góc"],
      },
      {
        id: "pk-7",
        title: "Thiết Bị Kết Nối Bluetooth Kashimura",
        price: "749,000 ₫",
        ctaType: "cart",
        brand: "Kashimura",
        image:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
        specs: ["Chuẩn Bluetooth 4.1", "Âm thanh HD Voice"],
      },
      {
        id: "pk-8",
        title: "HD Headphone Amplifier Creative E3",
        price: "3,245,000 ₫",
        oldPrice: "3,550,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Creative",
        image:
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
        specs: ["Khuếch đại tai nghe trở kháng 600 Ohm", "Siêu nhẹ 44g"],
      },
      {
        id: "pk-9",
        title: "Máy Nghe Nhạc Di Động Astell & Kern AK 320",
        price: "43,279,000 ₫",
        oldPrice: "47,566,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Astell & Kern",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
        specs: ["Vỏ hợp kim nhôm nguyên khối", "Hỗ trợ nhạc Lossless DSD"],
      },
      {
        id: "pk-10",
        title: "Máy Nghe Nhạc Transcend TS8GMP710W",
        price: "1,520,000 ₫",
        oldPrice: "1,600,000 ₫",
        saleBadge: true,
        ctaType: "cart",
        brand: "Transcend",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        specs: ["Dung lượng 8GB", "Kèm tai nghe thể thao chống mồ hôi"],
      },
    ],
  },
  bottomAccessoryBanner: {
    title: "Đế sạc nhanh không dây iPearl Chuẩn QI",
    discountLabel: "Giảm 25%",
    price: "599.000đ",
    oldPrice: "799.000đ",
    highlight: "PHỤ KIỆN GIẢM GIÁ LÊN TỚI 50%",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=900&q=80",
  },
  footerTags: [
    "Apple",
    "Bao da - Ốp lưng - Dán màn hình",
    "BlackBerry",
    "Laptop",
    "Laptop Asus",
    "Laptop Dell",
    "Laptop HP",
    "Laptop Lenovo",
    "Loa",
    "Macbook",
    "Motorola",
    "Máy nghe nhạc",
    "Nokia",
    "Phụ kiện",
    "Phụ kiện âm thanh",
    "Samsung",
    "Tablet",
    "Tablet Beneve",
    "Tablet Cutepad",
    "Tablet Huawei",
    "Tablet Ipad",
    "Tablet Itel",
    "Tablet Kindle",
    "Tablet Mobell",
    "Tablet Samsung",
    "Tai nghe",
    "Điện thoại",
  ],
};
