import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SmartTechProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  oldPrice?: string;
  isOnSale?: boolean;
  discountPercent?: string;
  image: string;
  specs?: string;
}

export interface SplitCategorySectionBlock {
  id: string;
  leftTitle: string;
  rightTitle: string;
  leftProducts: SmartTechProductItem[];
  leftBanner: {
    badge: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    bgGradient: string;
    image: string;
  };
  rightProducts: SmartTechProductItem[];
}

export interface YouMayLikeItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface CorporateProfile20Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  headerLinks: { label: string; href: string }[];
  sidebarCategories: {
    id: string;
    label: string;
    iconName: string;
    count: string;
  }[];
  heroBanners: {
    mainBanner: {
      badge: string;
      title: string;
      subtitle: string;
      highlight: string;
      ctaText: string;
      image: string;
    };
    subBanners: {
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      bgClass: string;
    }[];
    rightTallBanner: {
      badge: string;
      title: string;
      subtitle: string;
      discountText: string;
      image: string;
    };
  };
  trendBrands: string[];
  trendProducts: SmartTechProductItem[];
  flashSaleProducts: SmartTechProductItem[];
  weeklyPromoBanner: {
    badge: string;
    title: string;
    subtitle: string;
    code: string;
    image: string;
  };
  splitCategoryBlocks: SplitCategorySectionBlock[];
  youMayLikeItems: YouMayLikeItem[];
  trustFeatures: {
    id: string;
    title: string;
    subtitle: string;
  }[];
  footerColumns: {
    title: string;
    links: string[];
  }[];
}

export const corporateProfile20MockData: CorporateProfile20Data = {
  templateKey: "corporate_profile_20",
  business: {
    name: "Mona SmartTech",
    tagline: "Hệ Thống Bán Lẻ Thiết Bị Công Nghệ Thông Minh & Phụ Kiện Chính Hãng",
    description:
      "Chuyên phân phối iPhone, iPad, MacBook, Apple Watch, Laptop Gaming, máy chơi game PlayStation, Nintendo Switch và phụ kiện công nghệ chính hãng bảo hành toàn quốc.",
    phone: ["0313728397", "1900 636 648"],
    email: ["demonhunterg@gmail.com", "cskh@monasmarttech.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    website: "https://smarttech.monamedia.net",
    workingHours: "08:00 - 22:00 (Tất cả các ngày trong tuần)",
    taxCode: "0313728397",
  },
  headerLinks: [
    { label: "TRANG CHỦ", href: "#" },
    { label: "GIỚI THIỆU", href: "#gioi-thieu" },
    { label: "SẢN PHẨM", href: "#trend-section" },
    { label: "KINH NGHIỆM HAY", href: "#co-the-ban-thich" },
    { label: "LIÊN HỆ", href: "#footer-section" },
  ],
  sidebarCategories: [
    { id: "cat-phone", label: "Điện thoại", iconName: "Smartphone", count: "128" },
    { id: "cat-laptop", label: "Laptop", iconName: "Laptop", count: "94" },
    { id: "cat-tablet", label: "Tablet", iconName: "Tablet", count: "46" },
    { id: "cat-accessory", label: "Phụ kiện", iconName: "Cable", count: "310" },
    { id: "cat-smartwatch", label: "SmartWatch", iconName: "Watch", count: "75" },
    { id: "cat-applewatch", label: "Apple Watch", iconName: "Watch", count: "52" },
    {
      id: "cat-office",
      label: "Thiết bị văn phòng, máy in",
      iconName: "Printer",
      count: "64",
    },
    {
      id: "cat-pc",
      label: "Máy tính bộ, màn hình",
      iconName: "Monitor",
      count: "88",
    },
    { id: "cat-audio", label: "Tai nghe", iconName: "Headphones", count: "140" },
  ],
  hero: {
    badge: "TRẢ GÓP ONLINE 0%",
    title: "TRẢ GÓP ONLINE - NHẬN HÀNG TẠI NHÀ",
    subtitle: "Áp dụng cho hóa đơn trên 3 triệu — Xét duyệt hồ sơ nhanh trong 15 phút",
    primaryCta: "MUA NGAY",
    secondaryCta: "XEM KHUYẾN MÃI",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",
  },
  heroBanners: {
    mainBanner: {
      badge: "SIÊU ƯU ĐÃI CÔNG NGHỆ",
      title: "TRẢ GÓP ONLINE",
      subtitle: "NHẬN HÀNG TẠI NHÀ",
      highlight: "ÁP DỤNG CHO HÓA ĐƠN TRÊN 3 TRIỆU",
      ctaText: "XEM CHI TIẾT",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85",
    },
    subBanners: [
      {
        id: "sub-1",
        badge: "HỖ TRỢ TÀI CHÍNH",
        title: "TRẢ GÓP LÃI SUẤT THẤP",
        subtitle: "XÉT DUYỆT HỒ SƠ ONLINE TRONG 15 PHÚT",
        bgClass: "from-[#0a2e65] to-[#0052cc]",
      },
      {
        id: "sub-2",
        badge: "THANH TOÁN TIỆN LỢI",
        title: "MIỄN PHÍ THANH TOÁN",
        subtitle: "THẺ VISA / MASTER / ATM NỘI ĐỊA",
        bgClass: "from-[#0d3b66] to-[#0066ff]",
      },
    ],
    rightTallBanner: {
      badge: "CHÍNH HÃNG 100%",
      title: "PHỤ KIỆN CHÍNH HÃNG GIẢM GIÁ",
      subtitle: "Sạc nhanh Anker, Ốp lưng UAG, Tai nghe AirPods Pro",
      discountText: "GIẢM ĐẾN 45%",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
  },
  trendBrands: ["Apple", "BlackBerry", "Motorola", "Nokia", "Samsung"],
  trendProducts: [
    {
      id: "trend-1",
      name: "iPhone 15 Pro Max 256GB Chính Hãng VN/A",
      brand: "Apple",
      category: "Điện thoại",
      oldPrice: "34.990.000 ₫",
      price: "29.490.000 ₫",
      isOnSale: true,
      discountPercent: "-16%",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
      specs: "Chip A17 Pro • Khung Titan • Camera 5x",
    },
    {
      id: "trend-2",
      name: "Samsung Galaxy S24 Ultra 5G 12GB/256GB",
      brand: "Samsung",
      category: "Điện thoại",
      oldPrice: "33.990.000 ₫",
      price: "26.990.000 ₫",
      isOnSale: true,
      discountPercent: "-21%",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
      specs: "Galaxy AI • Bút S-Pen • Camera 200MP",
    },
    {
      id: "trend-3",
      name: "iPad Pro M4 11 inch WiFi 256GB 2024",
      brand: "Apple",
      category: "Tablet",
      oldPrice: "28.990.000 ₫",
      price: "25.890.000 ₫",
      isOnSale: true,
      discountPercent: "-11%",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
      specs: "Màn hình Ultra Retina XDR OLED • Chip M4",
    },
    {
      id: "trend-4",
      name: "Motorola Razr 50 Ultra 5G Màn Hình Gập",
      brand: "Motorola",
      category: "Điện thoại",
      oldPrice: "24.990.000 ₫",
      price: "21.490.000 ₫",
      isOnSale: true,
      discountPercent: "-14%",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      specs: "Màn ngoài 4.0 inch pOLED 165Hz",
    },
  ],
  flashSaleProducts: [
    {
      id: "fs-1",
      name: "iPhone 14 Pro Max 128GB Quốc Tế Mới 100%",
      brand: "Apple",
      category: "Điện thoại",
      oldPrice: "27.990.000 ₫",
      price: "23.590.000 ₫",
      isOnSale: true,
      discountPercent: "-16%",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "fs-2",
      name: "Samsung Galaxy Z Fold6 5G 12GB/256GB",
      brand: "Samsung",
      category: "Điện thoại",
      oldPrice: "43.990.000 ₫",
      price: "37.490.000 ₫",
      isOnSale: true,
      discountPercent: "-15%",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "fs-3",
      name: "iPad Air 6 M2 11 inch WiFi 128GB Chính Hãng",
      brand: "Apple",
      category: "Tablet",
      oldPrice: "16.990.000 ₫",
      price: "14.790.000 ₫",
      isOnSale: true,
      discountPercent: "-13%",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "fs-4",
      name: "Nokia XR21 5G Chống Nước Chuẩn Quân Đội IP69K",
      brand: "Nokia",
      category: "Điện thoại",
      oldPrice: "12.990.000 ₫",
      price: "9.890.000 ₫",
      isOnSale: true,
      discountPercent: "-24%",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },
  ],
  weeklyPromoBanner: {
    badge: "SĂN DEAL CÔNG NGHỆ MỖI NGÀY",
    title: "TỔNG HỢP MÃ GIẢM GIÁ - CHƯƠNG TRÌNH KHUYẾN MÃI TRONG TUẦN",
    subtitle: "Nhập mã SMARTTECH500 giảm thêm 500.000đ cho đơn hàng từ 10 triệu",
    code: "SMARTTECH500",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  },
  splitCategoryBlocks: [
    // BLOCK 1: MACBOOK (Left) | LAPTOP KHÁC (Right)
    {
      id: "block-macbook",
      leftTitle: "MACBOOK",
      rightTitle: "LAPTOP KHÁC",
      leftProducts: [
        {
          id: "mb-1",
          name: "MacBook Air M3 13 inch 2024 8GB/256GB",
          brand: "Apple",
          category: "Laptop",
          oldPrice: "27.990.000 ₫",
          price: "25.490.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "mb-2",
          name: "MacBook Pro 14 inch M3 Pro 18GB/512GB",
          brand: "Apple",
          category: "Laptop",
          oldPrice: "49.990.000 ₫",
          price: "45.990.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "mb-3",
          name: "iMac 24 inch M3 4.5K Retina 8GB/256GB",
          brand: "Apple",
          category: "Máy tính bộ, màn hình",
          oldPrice: "36.990.000 ₫",
          price: "33.890.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
        },
      ],
      leftBanner: {
        badge: "CHUYÊN GIA ĐỒ HỌA",
        title: "MACBOOK PRO & IMAC M3 SERIES",
        subtitle: "Giảm ngay 3.000.000đ cho Sinh viên & Designer",
        ctaLabel: "KHÁM PHÁ NGAY",
        bgGradient: "from-[#0f172a] via-[#1e3a8a] to-[#0066ff]",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      },
      rightProducts: [
        {
          id: "lap-1",
          name: "Dell XPS 13 Plus 9320 Core i7 OLED",
          brand: "Dell",
          category: "Laptop",
          oldPrice: "42.900.000 ₫",
          price: "38.500.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "lap-2",
          name: "ASUS ROG Zephyrus G16 RTX 4070",
          brand: "ASUS",
          category: "Laptop",
          oldPrice: "52.990.000 ₫",
          price: "47.990.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "lap-3",
          name: "ThinkPad X1 Carbon Gen 11 Siêu Nhẹ",
          brand: "Lenovo",
          category: "Laptop",
          oldPrice: "44.500.000 ₫",
          price: "39.900.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "lap-4",
          name: "HP Spectre x360 14 2-in-1 Cảm Ứng",
          brand: "HP",
          category: "Laptop",
          oldPrice: "39.990.000 ₫",
          price: "35.490.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    // BLOCK 2: APPLE WATCH (Left) | PHỤ KIỆN (Right)
    {
      id: "block-applewatch",
      leftTitle: "APPLE WATCH",
      rightTitle: "PHỤ KIỆN",
      leftProducts: [
        {
          id: "aw-1",
          name: "Apple Watch Series 9 GPS 41mm Viền Nhôm",
          brand: "Apple",
          category: "Apple Watch",
          oldPrice: "10.490.000 ₫",
          price: "8.990.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "aw-2",
          name: "Apple Watch Ultra 2 GPS + Cellular 49mm Titan",
          brand: "Apple",
          category: "Apple Watch",
          oldPrice: "21.990.000 ₫",
          price: "19.690.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "aw-3",
          name: "Apple Watch SE 2024 GPS 40mm Dây Thể Thao",
          brand: "Apple",
          category: "Apple Watch",
          oldPrice: "6.490.000 ₫",
          price: "5.690.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=600&q=80",
        },
      ],
      leftBanner: {
        badge: "THEO DÕI SỨC KHỎE TOÀN DIỆN",
        title: "APPLE WATCH SERIES 9 & ULTRA 2",
        subtitle: "Tặng kèm dây đeo Milanese Loop cao cấp trị giá 990.000đ",
        ctaLabel: "MUA NGAY",
        bgGradient: "from-[#111827] via-[#1f2937] to-[#374151]",
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      },
      rightProducts: [
        {
          id: "aw-acc-1",
          name: "Dây đeo Apple Watch Milanese Thép Không Gỉ",
          brand: "Apple",
          category: "Phụ kiện",
          oldPrice: "1.290.000 ₫",
          price: "790.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "aw-acc-2",
          name: "Đế sạc từ tính nhanh Apple Watch USB-C",
          brand: "Apple",
          category: "Phụ kiện",
          oldPrice: "990.000 ₫",
          price: "750.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "aw-acc-3",
          name: "Ốp bảo vệ UAG chống sốc cho Apple Watch 45mm",
          brand: "UAG",
          category: "Phụ kiện",
          oldPrice: "690.000 ₫",
          price: "490.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    // BLOCK 3: SMART WATCH (Left) | LOA (Right)
    {
      id: "block-smartwatch",
      leftTitle: "SMART WATCH",
      rightTitle: "LOA",
      leftProducts: [
        {
          id: "sw-1",
          name: "Garmin Fenix 7 Pro Sapphire Solar Đa Môn Thể Thao",
          brand: "Garmin",
          category: "SmartWatch",
          oldPrice: "23.990.000 ₫",
          price: "19.990.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "sw-2",
          name: "Samsung Galaxy Watch6 Classic 47mm Viền Xoay",
          brand: "Samsung",
          category: "SmartWatch",
          oldPrice: "8.990.000 ₫",
          price: "6.490.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "sw-3",
          name: "Garmin Forerunner 265 Music Màn Hình AMOLED",
          brand: "Garmin",
          category: "SmartWatch",
          oldPrice: "11.690.000 ₫",
          price: "10.290.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
        },
      ],
      leftBanner: {
        badge: "ĐỒNG HỒ THỂ THAO CHUYÊN NGHIỆP",
        title: "GARMIN & GALAXY WATCH CHÍNH HÃNG",
        subtitle: "Pin lên đến 21 ngày • Định vị GPS băng tần kép chuẩn xác",
        ctaLabel: "XEM BỘ SƯU TẬP",
        bgGradient: "from-[#0c2340] via-[#004e92] to-[#0066ff]",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      },
      rightProducts: [
        {
          id: "sp-1",
          name: "Loa Bluetooth Marshall Stanmore III Chính Hãng",
          brand: "Marshall",
          category: "Tai nghe",
          oldPrice: "10.990.000 ₫",
          price: "8.890.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "sp-2",
          name: "Loa Harman Kardon Aura Studio 4 LED 360 Độ",
          brand: "Harman Kardon",
          category: "Tai nghe",
          oldPrice: "6.990.000 ₫",
          price: "5.990.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "sp-3",
          name: "Loa Di Động JBL Charge 5 Chống Nước IP67",
          brand: "JBL",
          category: "Tai nghe",
          oldPrice: "3.990.000 ₫",
          price: "3.290.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    // BLOCK 4: PLAY STATION (Left) | KHÁC (Right)
    {
      id: "block-playstation",
      leftTitle: "PLAY STATION",
      rightTitle: "KHÁC",
      leftProducts: [
        {
          id: "ps-1",
          name: "Máy Chơi Game Sony PlayStation 5 Slim Bản Đĩa",
          brand: "Sony",
          category: "Phụ kiện",
          oldPrice: "15.990.000 ₫",
          price: "13.490.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "ps-2",
          name: "Combo PS5 Slim + 2 Tay Cầm DualSense Trắng Đen",
          brand: "Sony",
          category: "Phụ kiện",
          oldPrice: "17.990.000 ₫",
          price: "15.190.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "ps-3",
          name: "Kính Thực Tế Ảo Sony PlayStation VR2 4K HDR",
          brand: "Sony",
          category: "Phụ kiện",
          oldPrice: "16.490.000 ₫",
          price: "13.990.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80",
        },
      ],
      leftBanner: {
        badge: "THẾ GIỚI GAME ĐỈNH CAO 4K 120FPS",
        title: "SONY PLAYSTATION 5 SLIM CHÍNH HÃNG",
        subtitle: "Tặng ngay 01 đĩa game AAA tự chọn khi mua combo máy PS5",
        ctaLabel: "ĐẶT MUA PS5",
        bgGradient: "from-[#091540] via-[#1d4ed8] to-[#2563eb]",
        image:
          "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
      },
      rightProducts: [
        {
          id: "ps-acc-1",
          name: "Tay Cầm Sony DualSense Edge Wireless Pro",
          brand: "Sony",
          category: "Phụ kiện",
          oldPrice: "5.490.000 ₫",
          price: "4.790.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ps-acc-2",
          name: "Đĩa Game PS5 EA Sports FC 25 Nguyên Seal",
          brand: "Sony",
          category: "Phụ kiện",
          oldPrice: "1.690.000 ₫",
          price: "1.390.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ps-acc-3",
          name: "Trạm Sạc Đôi Tay Cầm DualSense Charging Station",
          brand: "Sony",
          category: "Phụ kiện",
          oldPrice: "990.000 ₫",
          price: "790.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    // BLOCK 5: NINTENDO SWITCH (Left) | BỔ SUNG (Right)
    {
      id: "block-nintendo",
      leftTitle: "NINTENDO SWITCH",
      rightTitle: "BỔ SUNG",
      leftProducts: [
        {
          id: "ns-1",
          name: "Máy Game Nintendo Switch OLED Model Neon Red/Blue",
          brand: "Nintendo",
          category: "Phụ kiện",
          oldPrice: "8.990.000 ₫",
          price: "7.490.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "ns-2",
          name: "Nintendo Switch OLED Zelda Tears of the Kingdom Edition",
          brand: "Nintendo",
          category: "Phụ kiện",
          oldPrice: "9.490.000 ₫",
          price: "8.190.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "ns-3",
          name: "Máy Chơi Game Cầm Tay Nintendo Switch Lite Coral",
          brand: "Nintendo",
          category: "Phụ kiện",
          oldPrice: "5.290.000 ₫",
          price: "4.390.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=600&q=80",
        },
      ],
      leftBanner: {
        badge: "GIẢI TRÍ MỌI LÚC MỌI NƠI",
        title: "NINTENDO SWITCH OLED MODEL",
        subtitle: "Màn hình OLED 7 inch rực rỡ • Bảo hành 12 tháng 1 đổi 1",
        ctaLabel: "CHỌN MÁY NGAY",
        bgGradient: "from-[#7f1d1d] via-[#b91c1c] to-[#ef4444]",
        image:
          "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
      },
      rightProducts: [
        {
          id: "ns-acc-1",
          name: "Bộ Tay Cầm Joy-Con Nintendo Switch Pastel Purple/Green",
          brand: "Nintendo",
          category: "Phụ kiện",
          oldPrice: "2.190.000 ₫",
          price: "1.790.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ns-acc-2",
          name: "Tay Cầm Nintendo Switch Pro Controller Chính Hãng",
          brand: "Nintendo",
          category: "Phụ kiện",
          oldPrice: "1.890.000 ₫",
          price: "1.550.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ns-acc-3",
          name: "Thẻ Game Mario Kart 8 Deluxe Nintendo Switch",
          brand: "Nintendo",
          category: "Phụ kiện",
          oldPrice: "1.450.000 ₫",
          price: "1.190.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },

    // BLOCK 6: PHỤ KIỆN (Left) | KHÁC (Right)
    {
      id: "block-accessories",
      leftTitle: "PHỤ KIỆN",
      rightTitle: "KHÁC",
      leftProducts: [
        {
          id: "pk-1",
          name: "Tai Nghe Apple AirPods Pro 2 USB-C MagSafe 2024",
          brand: "Apple",
          category: "Tai nghe",
          oldPrice: "6.490.000 ₫",
          price: "5.590.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "pk-2",
          name: "Pin Dự Phòng Anker Prime 20.000mAh Sạc Nhanh 200W",
          brand: "Anker",
          category: "Phụ kiện",
          oldPrice: "3.490.000 ₫",
          price: "2.790.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "pk-3",
          name: "Chuột Không Dây Logitech MX Master 3S Cho Mac & PC",
          brand: "Logitech",
          category: "Phụ kiện",
          oldPrice: "2.690.000 ₫",
          price: "2.190.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
        },
      ],
      leftBanner: {
        badge: "PHỤ KIỆN CÔNG NGHỆ CHÍNH HÃNG",
        title: "ANKER • UAG • SPIGEN • LOGITECH",
        subtitle: "Đồng loạt giảm giá đến 40% • Bảo hành đổi mới 18 tháng",
        ctaLabel: "SĂN DEAL PHỤ KIỆN",
        bgGradient: "from-[#1e293b] via-[#0f172a] to-[#0066ff]",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      },
      rightProducts: [
        {
          id: "pk-other-1",
          name: "Apple TV 4K 128GB WiFi + Ethernet Gen 3",
          brand: "Apple",
          category: "Phụ kiện",
          oldPrice: "4.990.000 ₫",
          price: "4.190.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "pk-other-2",
          name: "Bàn Phím Cơ Không Dây Keychron K2 Pro QMK/VIA",
          brand: "Keychron",
          category: "Phụ kiện",
          oldPrice: "2.590.000 ₫",
          price: "2.090.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "pk-other-3",
          name: "Thiết Bị Định Vị Thông Minh Apple AirTag Pack 4",
          brand: "Apple",
          category: "Phụ kiện",
          oldPrice: "2.790.000 ₫",
          price: "2.250.000 ₫",
          isOnSale: true,
          image:
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  ],
  youMayLikeItems: [
    {
      id: "yml-1",
      title: "Anker",
      subtitle: "Sạc nhanh & Cáp bền bỉ",
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-2",
      title: "Balo - túi xách",
      subtitle: "Chống sốc Laptop 14-16\"",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-3",
      title: "UAG",
      subtitle: "Ốp lưng chống sốc chuẩn Quân đội",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-4",
      title: "SPIGEN",
      subtitle: "Kính cường lực & Ốp trong suốt",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-5",
      title: "APPLE TV",
      subtitle: "Giải trí rạp phim 4K Dolby Atmos",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-6",
      title: "Phụ kiện Game",
      subtitle: "Tai nghe & Ghế Gaming RGB",
      image:
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-7",
      title: "Phụ kiện PS4",
      subtitle: "Tay cầm DualShock & Đĩa game",
      image:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-8",
      title: "Nintendo Switch",
      subtitle: "Joy-Con, Túi đựng & Thẻ Game",
      image:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=300&q=80",
    },
  ],
  trustFeatures: [
    {
      id: "tf-1",
      title: "Hỗ trợ 24/24",
      subtitle: "Tư vấn kỹ thuật & bảo hành tận tâm",
    },
    {
      id: "tf-2",
      title: "Hotline (+84) 0313728397",
      subtitle: "Tổng đài mua hàng miễn phí cước gọi",
    },
    {
      id: "tf-3",
      title: "Ship Hàng COD",
      subtitle: "Kiểm tra hàng trước khi thanh toán",
    },
    {
      id: "tf-4",
      title: "Ưu đãi đến 30%",
      subtitle: "Dành cho khách hàng thành viên VIP",
    },
  ],
  footerColumns: [
    {
      title: "HỖ TRỢ KHÁCH HÀNG",
      links: [
        "Thẻ ưu đãi thành viên",
        "Trung tâm bảo hành ủy quyền",
        "Thanh toán và giao hàng",
        "Dịch vụ sửa chữa và bảo trì",
        "Doanh nghiệp thân thiết",
      ],
    },
    {
      title: "CHÍNH SÁCH MUA HÀNG",
      links: [
        "Quy định chung và bảo mật",
        "Chính sách Bảo hành - Đổi trả",
        "Chính sách trả góp 0% lãi suất",
        "Chính sách vận chuyển toàn quốc",
        "Chính sách kiểm hàng chính hãng",
      ],
    },
    {
      title: "THÔNG TIN MONA SMARTTECH",
      links: [
        "Giới thiệu Mona SmartTech",
        "Hệ thống 25 showroom toàn quốc",
        "Thông tin liên hệ hợp tác B2B",
        "Tuyển dụng nhân sự công nghệ",
        "Tin tức & Đánh giá công nghệ",
      ],
    },
    {
      title: "CỘNG ĐỒNG SMARTTECH",
      links: [
        "Gọi mua hàng: 0313728397",
        "Gọi khiếu nại: 1900 636 648",
        "Gọi bảo hành: 1900 636 649",
        "Hỗ trợ kỹ thuật Online 24/7",
        "Cộng đồng Apple & Gaming Việt Nam",
      ],
    },
  ],
  stats: [
    { value: "25+", label: "Showroom Công Nghệ Toàn Quốc" },
    { value: "100%", label: "Sản Phẩm Chính Hãng Nguyên Seal" },
    { value: "15 Phút", label: "Duyệt Hồ Sơ Trả Góp Online" },
    { value: "24/7", label: "Hỗ Trợ Kỹ Thuật & Bảo Hành" },
  ],
  services: [
    {
      title: "Bán Lẻ Thiết Bị Apple Ủy Quyền",
      description:
        "Cung cấp đầy đủ iPhone, iPad, MacBook, iMac, Apple Watch và phụ kiện Apple chính hãng VN/A.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Thế Giới Console & Gaming Gear",
      description:
        "Phân phối máy chơi game Sony PlayStation 5, Nintendo Switch OLED và phụ kiện gaming cao cấp.",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Trả Góp Online 0% & Thu Cũ Đổi Mới",
      description:
        "Trợ giá lên đời thiết bị công nghệ lên đến 3.000.000đ, xét duyệt hồ sơ trả góp tại nhà.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
  ],
  projects: [
    {
      title: "Cung Cấp 250 MacBook Cho Tập Đoàn Sáng Tạo Số",
      category: "Dự án Doanh nghiệp B2B",
      summary: "Triển khai gói thiết bị MacBook Pro M3 kèm dịch vụ bảo hành tận nơi 24 tháng.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      name: "Anh Minh Hoàng",
      role: "Khách hàng mua MacBook Pro M3",
      quote:
        "Mua MacBook tại Mona SmartTech giá tốt hơn thị trường gần 2 triệu, máy nguyên seal VN/A, giao nhanh trong 2 giờ tại TP.HCM!",
      rating: 5,
    },
  ],
  news: [
    {
      title: "Tổng hợp mã giảm giá và chương trình khuyến mãi công nghệ trong tuần",
      date: "23/10/2026",
      category: "Khuyến mãi",
      excerpt:
        "Săn ngay voucher giảm thêm đến 1.500.000đ khi mua iPhone 15 Pro Max, MacBook Air M3 và PlayStation 5 Slim.",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
