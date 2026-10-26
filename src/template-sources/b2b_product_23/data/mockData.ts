export interface BroProductItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  image: string;
  brand: string;
  category: string;
  specs: string;
  inStock: boolean;
}

export interface SplitCategoryBlock {
  id: string;
  mainTitle: string;
  subLinks: string[];
  products: BroProductItem[];
  promoBanner: {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
    bgClass: string;
  };
  sidebarTitle: string;
  sidebarItems: BroProductItem[];
}

export interface BroShopMockData {
  business: {
    name: string;
    brandMain: string;
    brandDot: string;
    brandSub: string;
    slogan: string;
    phone: string[];
    email: string[];
    address: string;
    companyLegal: string;
    taxInfo: string;
    workingHours: string;
  };
  topLinks: string[];
  mainNav: string[];
  verticalCategories: {
    id: string;
    label: string;
    subItems: string[];
  }[];
  hero: {
    centerBanner: {
      badge: string;
      title: string;
      subtitle: string;
      cta: string;
      image: string;
    };
    bottomCards: {
      id: string;
      title: string;
      subtitle: string;
      highlight: string;
    }[];
    rightPoster: {
      badge: string;
      title: string;
      subtitle: string;
      discount: string;
      image: string;
    };
  };
  trendSection: {
    title: string;
    brands: string[];
    items: BroProductItem[];
  };
  flashSaleSection: {
    title: string;
    items: BroProductItem[];
    wideCouponBanner: {
      badge: string;
      title: string;
      subtitle: string;
      code: string;
    };
  };
  splitSections: SplitCategoryBlock[];
  youMayLike: {
    id: string;
    name: string;
    count: string;
    image: string;
  }[];
  serviceCommitments: {
    id: string;
    title: string;
    subtitle: string;
  }[];
  footerColumns: {
    title: string;
    links: string[];
  }[];
}

export const mockData: BroShopMockData = {
  business: {
    name: "Showroom Thiết Bị Công Nghệ & Điện Tử Cao Cấp BroShop",
    brandMain: "BRO",
    brandDot: ".",
    brandSub: "SHOP",
    slogan: "BELONG TO TECH",
    phone: ["1900 636 648", "0909 999 648"],
    email: ["cskh@broshop.vn", "lienhe@broshop.vn"],
    address: "140 Nguyễn Trãi, Phường 3, Quận 5, TP. Hồ Chí Minh",
    companyLegal: "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ CÔNG NGHỆ BROSHOP VIỆT NAM",
    taxInfo: "GPKD số 0314567890 do Sở KH & ĐT TP. Hồ Chí Minh cấp ngày 15/06/2018",
    workingHours: "09:00 - 21:30 (Thứ 2 - Chủ Nhật)",
  },
  topLinks: ["Tìm kiếm", "Kiểm tra đơn hàng", "Liên hệ"],
  mainNav: [
    "TRANG CHỦ",
    "GIỚI THIỆU",
    "SẢN PHẨM",
    "KINH NGHIỆM HAY",
    "LIÊN HỆ",
    "HỆ THỐNG SIÊU THỊ",
  ],
  verticalCategories: [
    {
      id: "cat-1",
      label: "Điện thoại",
      subItems: ["iPhone XS / XS Max", "iPhone X / XR", "Samsung Galaxy S10", "BlackBerry Key2"],
    },
    {
      id: "cat-2",
      label: "Laptop",
      subItems: ["MacBook Air 2018/2019", "MacBook Pro Touch Bar", "Surface Pro 6", "Dell XPS 13"],
    },
    {
      id: "cat-3",
      label: "Tablet",
      subItems: ["iPad Pro 11 / 12.9 inch", "iPad Mini 5", "iPad Gen 6 9.7 inch", "Amazon Kindle"],
    },
    {
      id: "cat-4",
      label: "Phụ kiện",
      subItems: ["Cáp sạc Anker", "Ốp lưng Spigen", "Ốp chống sốc UAG", "Balo Tomtoc"],
    },
    {
      id: "cat-5",
      label: "SmartWatch",
      subItems: ["Garmin Fenix 5 Plus", "Garmin Forerunner", "Garmin Vivofit 4", "Fitbit Versa"],
    },
    {
      id: "cat-6",
      label: "Apple Watch",
      subItems: ["Apple Watch Series 4", "Apple Watch Series 3", "Apple Watch Nike+", "Dây đeo Apple Watch"],
    },
    {
      id: "cat-7",
      label: "Thiết bị văn phòng",
      subItems: ["Apple TV 4K", "Ổ cứng di động SSD", "Bộ phát WiFi Mesh", "Hub chuyển đổi USB-C"],
    },
    {
      id: "cat-8",
      label: "Máy tính bộ",
      subItems: ["iMac 4K / 5K Retina", "Mac Mini 2018", "Mac Pro Workstation", "Màn hình LG UltraFine"],
    },
    {
      id: "cat-9",
      label: "Tai nghe",
      subItems: ["Apple AirPods 2", "Bose QuietComfort", "Sony WH-1000XM3", "Sennheiser Momentum"],
    },
  ],
  hero: {
    centerBanner: {
      badge: "SIÊU PHẨM CÔNG NGHỆ MỚI NHẤT",
      title: "ĐÃ CÓ HÀNG TẠI BROSHOP.VN",
      subtitle: "KHUYẾN MÃI CỰC KHỦNG • THU CŨ ĐỔI MỚI TRỢ GIÁ LÊN ĐẾN 3.000.000Đ",
      cta: "KHÁM PHÁ NGAY",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
    },
    bottomCards: [
      {
        id: "hc-1",
        title: "TRẢ GÓP LÃI SUẤT THẤP",
        subtitle: "Xét duyệt nhanh qua CMND + Bằng lái hoặc Thẻ tín dụng 0% lãi suất",
        highlight: "Duyệt hồ sơ 15 phút",
      },
      {
        id: "hc-2",
        title: "MIỄN PHÍ THANH TOÁN THẺ",
        subtitle: "Hỗ trợ cà thẻ VISA / MASTER / JCB / ATM nội địa không thu phụ phí",
        highlight: "0% Phí quẹt thẻ",
      },
    ],
    rightPoster: {
      badge: "OFFICIAL STORE",
      title: "PHỤ KIỆN CHÍNH HÃNG GIẢM GIÁ",
      subtitle: "Anker • Spigen • UAG • Apple • Garmin",
      discount: "SALE UP TO 40%",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    },
  },
  trendSection: {
    title: "TREND",
    brands: ["Apple", "BlackBerry", "Motorola", "Nokia", "Samsung"],
    items: [
      {
        id: "trend-1",
        name: "Apple iPhone XS 64GB Quốc Tế Chính Hãng LL/A",
        price: "23.490.000₫",
        oldPrice: "25.990.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80",
        brand: "Apple",
        category: "Điện thoại",
        specs: "Màn hình OLED Super Retina 5.8 inch, Chip A12 Bionic, Face ID thế hệ mới, Nguyên seal chưa Active",
        inStock: true,
      },
      {
        id: "trend-2",
        name: "Apple iPhone X 256GB Quốc Tế Mỹ Mới 100%",
        price: "20.890.000₫",
        oldPrice: "23.500.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
        brand: "Apple",
        category: "Điện thoại",
        specs: "Bộ nhớ lớn 256GB, Khung thép không gỉ, Camera kép 12MP chống rung OIS kép, Bảo hành 12 tháng",
        inStock: true,
      },
      {
        id: "trend-3",
        name: "Vòng Đeo Tay Thông Minh Garmin Vivofit 4 Chính Hãng FPT",
        price: "1.990.000₫",
        oldPrice: "2.290.000₫",
        discountBadge: "Hot",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80",
        brand: "Garmin",
        category: "SmartWatch",
        specs: "Pin dùng liên tục 1 năm không cần sạc, màn hình màu luôn hiển thị, chống nước bơi lội 5ATM",
        inStock: true,
      },
      {
        id: "trend-4",
        name: "Vòng Đeo Tay Thể Thao Garmin Vivofit 4 Bản Đặc Biệt",
        price: "1.990.000₫",
        oldPrice: "2.350.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
        brand: "Garmin",
        category: "SmartWatch",
        specs: "Theo dõi bước chân, giấc ngủ, lượng calo tiêu thụ chuẩn xác với công nghệ Garmin Move IQ",
        inStock: true,
      },
    ],
  },
  flashSaleSection: {
    title: "FLASH SALE",
    items: [
      {
        id: "fs-1",
        name: "Máy Chơi Game Sony PlayStation 4 Pro 1TB Bundle FIFA 19",
        price: "9.890.000₫",
        oldPrice: "11.490.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=80",
        brand: "Sony",
        category: "Play Station",
        specs: "Phiên bản PS4 Pro CUH-7218B mới nhất siêu êm, xuất hình 4K HDR kèm đĩa game FIFA 19 bản quyền",
        inStock: true,
      },
      {
        id: "fs-2",
        name: "Ốp Lưng SPIGEN Samsung Galaxy S10 Plus Neo Hybrid",
        price: "590.000₫",
        oldPrice: "750.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&w=500&q=80",
        brand: "Spigen",
        category: "Phụ kiện",
        specs: "Thiết kế 2 lớp nhựa TPU dẻo và viền Polycarbonate chống sốc chuẩn quân đội Mỹ, ôm sát thân máy",
        inStock: true,
      },
      {
        id: "fs-3",
        name: "Apple MacBook Air 2018 13.3 inch 128GB MRE82 Touch ID",
        price: "26.490.000₫",
        oldPrice: "29.990.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
        brand: "Apple",
        category: "Laptop",
        specs: "Màn hình Retina 13.3 inch viền mỏng, Bảo mật vân tay Touch ID, Intel Core i5 Gen 8, 2 cổng Thunderbolt 3",
        inStock: true,
      },
      {
        id: "fs-4",
        name: "Ốp Lưng SPIGEN Samsung Galaxy S10 Silicone Fit Chính Hãng",
        price: "450.000₫",
        oldPrice: "590.000₫",
        discountBadge: "Giảm giá",
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=500&q=80",
        brand: "Spigen",
        category: "Phụ kiện",
        specs: "Chất liệu Silicone cao cấp mềm mịn chống bám vân tay, bên trong lót nhung microfiber bảo vệ mặt lưng",
        inStock: true,
      },
    ],
    wideCouponBanner: {
      badge: "DEAL HOT MỖI TUẦN",
      title: "TỔNG HỢP MÃ GIẢM GIÁ - CHƯƠNG TRÌNH KHUYẾN MÃI TRONG TUẦN",
      subtitle: "Nhập mã BROTECH200 giảm ngay 200.000đ cho đơn hàng phụ kiện từ 1.500.000đ",
      code: "BROTECH200",
    },
  },
  splitSections: [
    {
      id: "split-macbook",
      mainTitle: "MACBOOK",
      subLinks: ["MacBook Air", "MacBook Pro", "iMac & Mac Mini", "Xem tất cả"],
      products: [
        {
          id: "mac-1",
          name: "MacBook Pro 13 inch 2018 Touch Bar 256GB MR9Q2",
          price: "38.990.000₫",
          oldPrice: "42.500.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
          brand: "Apple",
          category: "MacBook",
          specs: "Core i5 Quad-Core 2.3GHz, RAM 8GB, SSD 256GB, Màn hình Retina True Tone, 4 cổng Thunderbolt 3",
          inStock: true,
        },
        {
          id: "mac-2",
          name: "MacBook Air 13 inch 2018 256GB MREA2 Silver Mới 100%",
          price: "30.490.000₫",
          oldPrice: "33.900.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80",
          brand: "Apple",
          category: "MacBook",
          specs: "Thiết kế nhôm tái chế siêu mỏng nhẹ 1.25kg, màn hình Retina sắc nét, thời lượng pin 12 giờ",
          inStock: true,
        },
        {
          id: "mac-3",
          name: "MacBook Pro 15 inch 2018 Touch Bar Core i7 256GB MR932",
          price: "51.990.000₫",
          oldPrice: "55.900.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
          brand: "Apple",
          category: "MacBook",
          specs: "Core i7 6 nhân 2.2GHz, RAM 16GB DDR4, SSD 256GB, Card đồ họa Radeon Pro 555X 4GB GDDR5",
          inStock: true,
        },
      ],
      promoBanner: {
        badge: "APPLE AUTHORIZED",
        title: "CHUYÊN TRANG MACBOOK & IMAC CHÍNH HÃNG",
        subtitle: "Cài đặt phần mềm bản quyền miễn phí trọn đời • Bảo hành Apple Care chính hãng",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
        bgClass: "from-zinc-900 via-zinc-800 to-orange-950",
      },
      sidebarTitle: "LAPTOP KHÁC",
      sidebarItems: [
        {
          id: "side-lap-1",
          name: "Microsoft Surface Pro 6 Core i5 8GB 128GB Kèm Type Cover",
          price: "22.990.000₫",
          oldPrice: "25.500.000₫",
          image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80",
          brand: "Microsoft",
          category: "Laptop",
          specs: "Intel Core i5-8250U, Màn hình cảm ứng PixelSense 12.3 inch 3K",
          inStock: true,
        },
        {
          id: "side-lap-2",
          name: "Dell XPS 13 9370 Core i7-8550U 16GB 512GB 4K Touch",
          price: "35.490.000₫",
          oldPrice: "38.900.000₫",
          image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=300&q=80",
          brand: "Dell",
          category: "Laptop",
          specs: "Viền màn hình InfinityEdge siêu mỏng, độ phân giải 4K UHD cảm ứng",
          inStock: true,
        },
        {
          id: "side-lap-3",
          name: "ASUS ZenBook 13 UX333FA Core i5-8265U Siêu Viền Mỏng",
          price: "19.890.000₫",
          oldPrice: "21.990.000₫",
          image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=300&q=80",
          brand: "ASUS",
          category: "Laptop",
          specs: "Bàn phím số cảm ứng NumberPad tích hợp trên Touchpad độc đáo",
          inStock: true,
        },
        {
          id: "side-lap-4",
          name: "LG Gram 14Z980 Core i5-8250U Trọng Lượng 995 Gram",
          price: "24.500.000₫",
          oldPrice: "27.900.000₫",
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=300&q=80",
          brand: "LG",
          category: "Laptop",
          specs: "Hợp kim Magie Nano Carbon nhẹ nhất thế giới, pin 21 giờ",
          inStock: true,
        },
      ],
    },
    {
      id: "split-applewatch",
      mainTitle: "APPLE WATCH",
      subLinks: ["Series 4", "Series 3", "Nike+ Edition", "Xem tất cả"],
      products: [
        {
          id: "aw-1",
          name: "Apple Watch Series 4 44mm GPS Viền Nhôm Xám Dây Sport Loop",
          price: "10.690.000₫",
          oldPrice: "11.990.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
          brand: "Apple",
          category: "Apple Watch",
          specs: "Màn hình tràn viền lớn hơn 30%, Cảm biến đo điện tâm đồ ECG, phát hiện té ngã thông minh",
          inStock: true,
        },
        {
          id: "aw-2",
          name: "Apple Watch Series 4 40mm GPS Gold Aluminum Pink Sand",
          price: "10.290.000₫",
          oldPrice: "11.490.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80",
          brand: "Apple",
          category: "Apple Watch",
          specs: "Chip S4 64-bit nhanh gấp đôi, Digital Crown có phản hồi xúc giác Haptic Feedback",
          inStock: true,
        },
        {
          id: "aw-3",
          name: "Apple Watch Series 4 44mm GPS + Cellular Thép Không Gỉ Milanese",
          price: "18.490.000₫",
          oldPrice: "20.990.000₫",
          discountBadge: "Hot",
          image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500&q=80",
          brand: "Apple",
          category: "Apple Watch",
          specs: "Mặt kính Sapphire chống trầy, khung thép bóng sang trọng kèm dây thép đan Milanese Loop",
          inStock: true,
        },
      ],
      promoBanner: {
        badge: "APPLE WATCH SERIES 4",
        title: "ĐỒNG HỒ THÔNG MINH BÁN CHẠY SỐ 1 THẾ GIỚI",
        subtitle: "Đủ màu sắc 40mm & 44mm • Tặng kèm dán màn hình PPF full cong trị giá 250.000đ",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",
        bgClass: "from-slate-900 via-zinc-900 to-orange-900",
      },
      sidebarTitle: "PHỤ KIỆN",
      sidebarItems: [
        {
          id: "side-aw-1",
          name: "Dây Đeo UAG Active Strap Cho Apple Watch 44mm/42mm",
          price: "1.350.000₫",
          oldPrice: "1.550.000₫",
          image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=300&q=80",
          brand: "UAG",
          category: "Phụ kiện",
          specs: "Vải Nylon dệt siêu bền kết hợp khóa thép không gỉ hầm hố",
          inStock: true,
        },
        {
          id: "side-aw-2",
          name: "Ốp Bảo Vệ Spigen Rugged Armor Apple Watch Series 4 44mm",
          price: "420.000₫",
          oldPrice: "550.000₫",
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=300&q=80",
          brand: "Spigen",
          category: "Phụ kiện",
          specs: "Chống va đập tuyệt đối cho viền đồng hồ khi tập thể thao",
          inStock: true,
        },
        {
          id: "side-aw-3",
          name: "Đế Sạc Apple Watch Magnetic Charging Dock Chính Hãng",
          price: "1.890.000₫",
          oldPrice: "2.290.000₫",
          image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=300&q=80",
          brand: "Apple",
          category: "Phụ kiện",
          specs: "Sạc ở chế độ nằm phẳng hoặc dựng nghiêng Nightstand Mode",
          inStock: true,
        },
        {
          id: "side-aw-4",
          name: "Dây Milanese Loop Thép Đan Nam Châm Cao Cấp 40mm/44mm",
          price: "490.000₫",
          oldPrice: "690.000₫",
          image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=300&q=80",
          brand: "Coteetci",
          category: "Phụ kiện",
          specs: "Thoáng khí, khóa từ hút cực chắc, dễ dàng điều chỉnh kích cỡ cổ tay",
          inStock: true,
        },
      ],
    },
    {
      id: "split-smartwatch",
      mainTitle: "SMART WATCH",
      subLinks: ["Garmin", "Fitbit", "Samsung Gear", "Xem tất cả"],
      products: [
        {
          id: "sw-1",
          name: "Đồng Hồ Thể Thao Garmin Fenix 5 Plus Sapphire Titanium",
          price: "18.990.000₫",
          oldPrice: "21.490.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
          brand: "Garmin",
          category: "SmartWatch",
          specs: "Bản đồ TOPO màu tích hợp sẵn, bộ nhớ lưu 500 bài hát, định vị GPS + GLONASS + Galileo",
          inStock: true,
        },
        {
          id: "sw-2",
          name: "Đồng Hồ Chạy Bộ Garmin Forerunner 645 Music Chính Hãng FPT",
          price: "9.490.000₫",
          oldPrice: "10.990.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80",
          brand: "Garmin",
          category: "SmartWatch",
          specs: "Phân tích chuyên sâu Running Dynamics, phát nhạc trực tiếp qua tai nghe Bluetooth không cần điện thoại",
          inStock: true,
        },
        {
          id: "sw-3",
          name: "Đồng Hồ Thông Minh Garmin Instinct Chuẩn Quân Đội Mỹ",
          price: "6.890.000₫",
          oldPrice: "7.590.000₫",
          discountBadge: "Hot",
          image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
          brand: "Garmin",
          category: "SmartWatch",
          specs: "Đạt chuẩn MIL-STD-810G chống sốc, chống nhiệt, chống nước 100m, tính năng TrackBack dẫn đường",
          inStock: true,
        },
      ],
      promoBanner: {
        badge: "GARMIN VIỆT NAM",
        title: "ĐỒNG HỒ THỂ THAO CHUYÊN NGHIỆP GARMIN",
        subtitle: "Bảo hành chính hãng FPT 12 tháng • Giao diện Tiếng Việt 100%",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
        bgClass: "from-zinc-900 via-slate-800 to-amber-950",
      },
      sidebarTitle: "LOA",
      sidebarItems: [
        {
          id: "side-spk-1",
          name: "Loa Bluetooth JBL Charge 4 Chống Nước IPX7 Pin 20 Giờ",
          price: "3.490.000₫",
          oldPrice: "3.990.000₫",
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80",
          brand: "JBL",
          category: "Loa",
          specs: "Công suất 30W âm trầm mạnh mẽ, kiêm sạc dự phòng 7500mAh",
          inStock: true,
        },
        {
          id: "side-spk-2",
          name: "Loa Harman Kardon Onyx Studio 5 Thiết Kế Sang Trọng",
          price: "4.690.000₫",
          oldPrice: "5.900.000₫",
          image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=300&q=80",
          brand: "Harman Kardon",
          category: "Loa",
          specs: "Quai xách nhôm nguyên khối bọc vải cao cấp, công suất 50W",
          inStock: true,
        },
        {
          id: "side-spk-3",
          name: "Loa Bose SoundLink Mini II Special Edition Chính Hãng",
          price: "4.490.000₫",
          oldPrice: "4.990.000₫",
          image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&q=80",
          brand: "Bose",
          category: "Loa",
          specs: "Cổng sạc USB-C mới, thời lượng pin tăng thêm 20% lên 12 giờ",
          inStock: true,
        },
        {
          id: "side-spk-4",
          name: "Tai Nghe True Wireless Apple AirPods 2 Hộp Sạc Không Dây",
          price: "4.690.000₫",
          oldPrice: "5.290.000₫",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
          brand: "Apple",
          category: "Tai nghe",
          specs: "Chip H1 kết nối siêu tốc, gọi Hey Siri rảnh tay, hộp sạc chuẩn Qi",
          inStock: true,
        },
      ],
    },
    {
      id: "split-playstation",
      mainTitle: "PLAY STATION",
      subLinks: ["Máy PS4 Pro / Slim", "Đĩa Game PS4", "Tay Cầm DualShock 4", "Xem tất cả"],
      products: [
        {
          id: "ps-1",
          name: "Máy Chơi Game Sony PS4 Pro 1TB CUH-7218B Chính Hãng Sony VN",
          price: "9.490.000₫",
          oldPrice: "10.990.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=80",
          brand: "Sony",
          category: "Play Station",
          specs: "Cấu hình GPU 4.20 TFLOPS chiến game 4K 60fps mượt mà, bảo hành Sony Việt Nam 24 tháng",
          inStock: true,
        },
        {
          id: "ps-2",
          name: "Máy Chơi Game Sony PS4 Slim 1TB Mega Pack 3 Đĩa Game Độc Quyền",
          price: "7.890.000₫",
          oldPrice: "8.990.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=500&q=80",
          brand: "Sony",
          category: "Play Station",
          specs: "Tặng kèm 3 siêu phẩm God of War, Horizon Zero Dawn, The Last of Us + Thẻ PS Plus 3 tháng",
          inStock: true,
        },
        {
          id: "ps-3",
          name: "Máy Chơi Game Sony PlayStation Classic Tích Hợp 20 Game Huyền Thoại",
          price: "1.690.000₫",
          oldPrice: "2.990.000₫",
          discountBadge: "Sale Sốc",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80",
          brand: "Sony",
          category: "Play Station",
          specs: "Phiên bản kỷ niệm thu nhỏ 45% so với PS1 năm 1994, kèm 2 tay cầm có dây và cáp HDMI",
          inStock: true,
        },
      ],
      promoBanner: {
        badge: "SONY PLAYSTATION CENTER",
        title: "THẾ GIỚI CONSOLE PS4 PRO & ĐĨA GAME BẢN QUYỀN",
        subtitle: "Luôn cập nhật các tựa game AAA mới nhất ngày phát hành • Thu đổi đĩa game cũ giá tốt",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80",
        bgClass: "from-blue-950 via-slate-900 to-zinc-900",
      },
      sidebarTitle: "KHÁC",
      sidebarItems: [
        {
          id: "side-ps-1",
          name: "Tay Cầm PS4 DualShock 4 Wave Blue Chính Hãng Sony",
          price: "1.190.000₫",
          oldPrice: "1.390.000₫",
          image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=300&q=80",
          brand: "Sony",
          category: "Phụ kiện PS4",
          specs: "Dải đèn LightBar trên Touchpad, kết nối Bluetooth với PC & iOS",
          inStock: true,
        },
        {
          id: "side-ps-2",
          name: "Đĩa Game PS4 Sekiro: Shadows Die Twice Hệ Asia",
          price: "1.250.000₫",
          oldPrice: "1.450.000₫",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80",
          brand: "Activision",
          category: "Game PS4",
          specs: "Siêu phẩm hành động chặt chém Nhật Bản từ cha đẻ Dark Souls",
          inStock: true,
        },
        {
          id: "side-ps-3",
          name: "Đĩa Game PS4 Red Dead Redemption 2 Bản Đặc Biệt",
          price: "1.150.000₫",
          oldPrice: "1.390.000₫",
          image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=300&q=80",
          brand: "Rockstar",
          category: "Game PS4",
          specs: "Gồm 2 đĩa Blu-ray + Bản đồ thế giới viễn tây cực chi tiết",
          inStock: true,
        },
        {
          id: "side-ps-4",
          name: "Đế Tản Nhiệt Kiêm Sạc 2 Tay Cầm Dobe Cho PS4 Pro/Slim",
          price: "450.000₫",
          oldPrice: "590.000₫",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
          brand: "Dobe",
          category: "Phụ kiện PS4",
          specs: "Dựng đứng máy tiết kiệm diện tích, tích hợp khay để 12 đĩa game",
          inStock: true,
        },
      ],
    },
    {
      id: "split-switch",
      mainTitle: "NINTENDO SWITCH",
      subLinks: ["Máy Nintendo Switch", "Game Thẻ Switch", "Phụ Kiện Switch", "Xem tất cả"],
      products: [
        {
          id: "swi-1",
          name: "Máy Chơi Game Nintendo Switch Neon Blue & Red Joy-Con",
          price: "7.590.000₫",
          oldPrice: "8.290.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=80",
          brand: "Nintendo",
          category: "Nintendo Switch",
          specs: "Chuyển đổi linh hoạt giữa máy cầm tay Handheld 6.2 inch và xuất hình TV Full HD qua Dock",
          inStock: true,
        },
        {
          id: "swi-2",
          name: "Máy Nintendo Switch Super Smash Bros. Ultimate Limited Edition",
          price: "8.990.000₫",
          oldPrice: "9.890.000₫",
          discountBadge: "Limited",
          image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=500&q=80",
          brand: "Nintendo",
          category: "Nintendo Switch",
          specs: "Phiên bản giới hạn khắc họa tiết đấu sĩ trên Dock và cặp Joy-Con, kèm code tải game gốc",
          inStock: true,
        },
        {
          id: "swi-3",
          name: "Tay Cầm Nintendo Switch Pro Controller Chính Hãng",
          price: "1.590.000₫",
          oldPrice: "1.850.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=500&q=80",
          brand: "Nintendo",
          category: "Nintendo Switch",
          specs: "Cảm giác cầm nắm công thái học tuyệt vời, tích hợp rung HD Rumble, cảm biến NFC Amiibo, pin 40 giờ",
          inStock: true,
        },
      ],
      promoBanner: {
        badge: "NINTENDO SWITCH WORLD",
        title: "TRẢI NGHIỆM GAME CẦM TAY ĐỈNH CAO MỌI LÚC MỌI NƠI",
        subtitle: "Kho thẻ game Zelda, Mario Odyssey, Pokemon Let's Go sẵn hàng • Bảo hành 12 tháng",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=900&q=80",
        bgClass: "from-red-950 via-zinc-900 to-slate-900",
      },
      sidebarTitle: "BỔ SUNG",
      sidebarItems: [
        {
          id: "side-swi-1",
          name: "Thẻ Game Nintendo Switch The Legend of Zelda: Breath of the Wild",
          price: "1.250.000₫",
          oldPrice: "1.390.000₫",
          image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=300&q=80",
          brand: "Nintendo",
          category: "Game Switch",
          specs: "Tựa game xuất sắc nhất năm Game of the Year không thể bỏ lỡ",
          inStock: true,
        },
        {
          id: "side-swi-2",
          name: "Bao Đựng Chống Sốc Tomtoc Slim Case Cho Nintendo Switch",
          price: "490.000₫",
          oldPrice: "620.000₫",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
          brand: "Tomtoc",
          category: "Phụ kiện Switch",
          specs: "Siêu mỏng nhưng bảo vệ hoàn hảo 2 cần Analog không bị trôi",
          inStock: true,
        },
        {
          id: "side-swi-3",
          name: "Bộ Tay Cầm Đôi Nintendo Joy-Con Neon Pink / Neon Green",
          price: "1.850.000₫",
          oldPrice: "2.090.000₫",
          image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=300&q=80",
          brand: "Nintendo",
          category: "Phụ kiện Switch",
          specs: "Màu sắc cá tính, mở rộng lên 4 người chơi Party Game cùng lúc",
          inStock: true,
        },
        {
          id: "side-swi-4",
          name: "Thẻ Nhớ MicroSDXC SanDisk 128GB For Nintendo Switch",
          price: "690.000₫",
          oldPrice: "890.000₫",
          image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=300&q=80",
          brand: "SanDisk",
          category: "Phụ kiện Switch",
          specs: "Chứng nhận chính thức bởi Nintendo, tốc độ đọc 100MB/s tải game cực nhanh",
          inStock: true,
        },
      ],
    },
    {
      id: "split-phukien",
      mainTitle: "PHỤ KIỆN",
      subLinks: ["Anker", "Spigen", "UAG", "Tomtoc", "Xem tất cả"],
      products: [
        {
          id: "pk-1",
          name: "Pin Sạc Dự Phòng Anker PowerCore II 10000mAh PowerIQ 2.0",
          price: "790.000₫",
          oldPrice: "990.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=500&q=80",
          brand: "Anker",
          category: "Phụ kiện",
          specs: "Công nghệ sạc nhanh PowerIQ 2.0 18W tương thích Quick Charge 3.0, đèn LED 8 nấc báo pin",
          inStock: true,
        },
        {
          id: "pk-2",
          name: "Cáp Sạc Anker PowerLine+ II Lightning 0.9m Chuẩn MFi Apple",
          price: "380.000₫",
          oldPrice: "450.000₫",
          discountBadge: "Giảm giá",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80",
          brand: "Anker",
          category: "Phụ kiện",
          specs: "Bọc sợi Nylon bện đôi siêu bền chịu lực uốn cong 30.000 lần, tặng kèm túi da đựng cáp",
          inStock: true,
        },
        {
          id: "pk-3",
          name: "Ốp Lưng Chống Sốc UAG Monarch Cho iPhone XS Max Carbon",
          price: "1.390.000₫",
          oldPrice: "1.590.000₫",
          discountBadge: "Hot",
          image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&w=500&q=80",
          brand: "UAG",
          category: "Phụ kiện",
          specs: "Cấu trúc 5 lớp bảo vệ bằng sợi Carbon, da thật và ốc kim loại, bảo hành chính hãng 10 năm",
          inStock: true,
        },
      ],
      promoBanner: {
        badge: "ANKER • UAG • SPIGEN",
        title: "ĐẠI LÝ ỦY QUYỀN PHỤ KIỆN CAO CẤP CHÍNH HÃNG",
        subtitle: "Bảo hành 1 đổi 1 lên đến 18 tháng • Cam kết chính hãng 100% hoàn tiền gấp đôi nếu giả",
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=900&q=80",
        bgClass: "from-orange-950 via-zinc-900 to-slate-900",
      },
      sidebarTitle: "KHÁC",
      sidebarItems: [
        {
          id: "side-pk-1",
          name: "Củ Sạc Nhanh Anker PowerPort Atom PD 1 30W Công Nghệ GaN",
          price: "750.000₫",
          oldPrice: "900.000₫",
          image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=300&q=80",
          brand: "Anker",
          category: "Phụ kiện",
          specs: "Chất bán dẫn Gallium Nitride nhỏ gọn bằng củ sạc 5W nhưng mạnh 30W",
          inStock: true,
        },
        {
          id: "side-pk-2",
          name: "Túi Chống Sốc Tomtoc 360° Protective Cho MacBook Pro 13 inch",
          price: "680.000₫",
          oldPrice: "790.000₫",
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
          brand: "Tomtoc",
          category: "Balo - Túi xách",
          specs: "Đệm cao su CornerArmor ở 4 góc bảo vệ MacBook khi rơi rớt",
          inStock: true,
        },
        {
          id: "side-pk-3",
          name: "Đầu Giải Mã Apple TV 4K 32GB MQD22 Chính Hãng",
          price: "4.390.000₫",
          oldPrice: "4.990.000₫",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
          brand: "Apple",
          category: "APPLE TV",
          specs: "Xuất hình ảnh 4K HDR Dolby Vision, điều khiển Siri Remote cảm ứng",
          inStock: true,
        },
        {
          id: "side-pk-4",
          name: "Hub Chuyển Đổi HyperDrive 7-in-2 USB-C Cho MacBook Pro/Air",
          price: "2.090.000₫",
          oldPrice: "2.390.000₫",
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80",
          brand: "HyperDrive",
          category: "Phụ kiện",
          specs: "Vỏ nhôm CNC tiệp màu Space Gray/Silver, hỗ trợ HDMI 4K & Thunderbolt 3",
          inStock: true,
        },
      ],
    },
  ],
  youMayLike: [
    {
      id: "yml-1",
      name: "Anker",
      count: "48 sản phẩm",
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-2",
      name: "Balo - Túi xách",
      count: "32 sản phẩm",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-3",
      name: "UAG",
      count: "56 sản phẩm",
      image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-4",
      name: "SPIGEN",
      count: "64 sản phẩm",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-5",
      name: "APPLE TV",
      count: "12 sản phẩm",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-6",
      name: "Phụ kiện Game",
      count: "45 sản phẩm",
      image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-7",
      name: "Phụ kiện PS4",
      count: "38 sản phẩm",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "yml-8",
      name: "Phụ kiện Nintendo Switch",
      count: "41 sản phẩm",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=300&q=80",
    },
  ],
  serviceCommitments: [
    {
      id: "srv-1",
      title: "Hỗ trợ 24/24",
      subtitle: "Tư vấn kỹ thuật & giải đáp mọi thắc mắc nhanh chóng",
    },
    {
      id: "srv-2",
      title: "Hotline 1900 636 648",
      subtitle: "Tổng đài CSKH & Đặt hàng hoạt động từ 09:00 - 21:30",
    },
    {
      id: "srv-3",
      title: "Ship Hàng COD",
      subtitle: "Giao hàng thu tiền tận nơi trên toàn quốc an toàn",
    },
    {
      id: "srv-4",
      title: "Miễn phí thanh toán",
      subtitle: "Không thu phí cà thẻ Visa, Master, JCB & ATM nội địa",
    },
  ],
  footerColumns: [
    {
      title: "THÔNG TIN CÔNG TY",
      links: [
        "Giới thiệu về BroShop.vn",
        "Hệ thống Showroom & Đại lý",
        "Tuyển dụng nhân sự đam mê Tech",
        "Khách hàng Doanh nghiệp B2B",
        "Liên hệ hợp tác kinh doanh",
      ],
    },
    {
      title: "CHÍNH SÁCH MUA HÀNG",
      links: [
        "Chính sách bảo hành chính hãng",
        "Chính sách đổi trả trong 15 ngày",
        "Chính sách vận chuyển & Giao nhận",
        "Chính sách bảo mật thông tin",
        "Quy định thanh toán & Trả góp",
      ],
    },
    {
      title: "HỖ TRỢ KHÁCH HÀNG",
      links: [
        "Hướng dẫn mua hàng Online",
        "Hướng dẫn trả góp 0% lãi suất",
        "Kiểm tra tình trạng đơn hàng",
        "Tra cứu thông tin bảo hành",
        "Câu hỏi thường gặp (FAQs)",
      ],
    },
    {
      title: "DANH MỤC NỔI BẬT",
      links: [
        "Apple iPhone / iPad / MacBook",
        "Đồng hồ Apple Watch & Garmin",
        "Máy chơi game PS4 & Switch",
        "Phụ kiện Anker / Spigen / UAG",
        "Balo & Túi chống sốc Tomtoc",
      ],
    },
  ],
};
