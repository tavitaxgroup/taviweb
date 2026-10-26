export interface ProductCardItem {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: "Sale" | "New";
  brand: string;
  specs: string;
  warranty: string;
  category: string;
}

export interface NewsArticleItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export interface LaptopProMockData {
  business: {
    name: string;
    brandPrefix: string;
    brandSuffix: string;
    tagline: string;
    phone: string[];
    email: string[];
    address: string;
    branches: {
      name: string;
      address: string;
      phone: string;
    }[];
  };
  navigation: {
    id: string;
    label: string;
    icon: string;
  }[];
  searchCategories: string[];
  hero: {
    mainBanner: {
      badge: string;
      title: string;
      subtitle: string;
      highlight: string;
      cta: string;
      image: string;
    };
    sideBanners: {
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      bgGradient: string;
      image: string;
    }[];
  };
  topProducts: {
    bestSellers: ProductCardItem[];
    newArrivals: ProductCardItem[];
  };
  newsWidget: NewsArticleItem[];
  laptopSection: {
    title: string;
    filters: string[];
    items: ProductCardItem[];
  };
  desktopSection: {
    title: string;
    filters: string[];
    items: ProductCardItem[];
  };
  componentSection: {
    title: string;
    filters: string[];
    items: ProductCardItem[];
  };
  bottomPromoBanner: {
    badge: string;
    title: string;
    subtitle: string;
    highlight: string;
    image: string;
  };
  footer: {
    aboutLinks: string[];
    productLinks: string[];
    policyLinks: string[];
    seoKeywords: string[];
  };
}

export const mockData: LaptopProMockData = {
  business: {
    name: "LaptopPro Workstation & Enterprise",
    brandPrefix: "LAPTOP",
    brandSuffix: "PRO",
    tagline: "Nhà Phân Phối Máy Trạm Workstation, Laptop Doanh Nghiệp & Linh Kiện Server Chính Hãng",
    phone: ["0909 888 567", "028 3868 9999"],
    email: ["kinhdoanh@laptoppro.vn", "cskh@laptoppro.vn"],
    address: "Số 60A Đường 3 Tháng 2, Phường 12, Quận 10, TP. Hồ Chí Minh",
    branches: [
      {
        name: "CN TP. Hồ Chí Minh",
        address: "60A Đường 3/2, Phường 12, Quận 10, TP.HCM",
        phone: "0909 888 567",
      },
      {
        name: "CN Cần Thơ",
        address: "132 Nguyễn Văn Cừ, Quận Ninh Kiều, TP. Cần Thơ",
        phone: "0909 777 456",
      },
      {
        name: "CN Đồng Nai",
        address: "458 Phạm Văn Thuận, P. Trung Dũng, TP. Biên Hòa",
        phone: "0909 666 345",
      },
    ],
  },
  navigation: [
    { id: "san-pham", label: "SẢN PHẨM", icon: "laptop" },
    { id: "linh-kien", label: "LINH KIỆN", icon: "cpu" },
    { id: "khuyen-mai", label: "KHUYẾN MÃI", icon: "gift" },
    { id: "tin-tuc", label: "TIN TỨC", icon: "newspaper" },
    { id: "dich-vu", label: "DỊCH VỤ", icon: "wrench" },
    { id: "lien-he", label: "LIÊN HỆ", icon: "phone" },
  ],
  searchCategories: [
    "Tất cả",
    "Laptop Workstation",
    "Laptop Doanh Nghiệp",
    "Máy Trạm Desktop Tower",
    "Màn Hình Đồ Họa DreamColor",
    "Linh Kiện & Docking Station",
  ],
  hero: {
    mainBanner: {
      badge: "BUY 1 GET 1 FREE",
      title: "Miễn phí Cân màu màn hình Spyder5 Elite",
      subtitle: "Chuẩn hóa 99% dải màu sRGB & AdobeRGB True Screen Color khi mua mọi dòng Laptop Đồ Họa & Máy Trạm tại LaptopPro",
      highlight: "Tặng kèm Gói Bảo Dưỡng MX-4 Trọn Đời + Balo Chống Sốc Cao Cấp",
      cta: "XEM CHI TIẾT CHƯƠNG TRÌNH",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
    },
    sideBanners: [
      {
        id: "side-1",
        badge: "TRẢ GÓP LÃI SUẤT 0%",
        title: "Tự tin sắm Laptop Workstation",
        subtitle: "Xét duyệt hồ sơ trong 15 phút • Hỗ trợ thẻ tín dụng 25 ngân hàng toàn quốc",
        bgGradient: "from-[#1e3a70] to-[#2b4c8c]",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "side-2",
        badge: "DỊCH VỤ ĐỘC QUYỀN",
        title: "Miễn phí vệ sinh Laptop TRỌN ĐỜI",
        subtitle: "Tra keo tản nhiệt Arctic MX-4 chính hãng định kỳ 6 tháng/lần hoàn toàn miễn phí",
        bgGradient: "from-[#0d9488] to-[#115e59]",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  topProducts: {
    bestSellers: [
      {
        id: "top-1",
        name: "Dell Docking Station PR02X E-Port Plus USB 3.0",
        price: "650.000 ₫",
        oldPrice: "950.000 ₫",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Mở rộng 2 cổng DisplayPort, DVI, VGA, 5x USB 3.0, LAN Gigabit cho Dell Latitude & Precision",
        warranty: "12 Tháng 1 đổi 1",
        category: "Docking",
      },
      {
        id: "top-2",
        name: "HP 120W Advanced Docking Station A7E36AA",
        price: "750.000 ₫",
        oldPrice: "1.100.000 ₫",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Chuẩn kết nối chuyên dụng cho HP EliteBook & ZBook Workstation, tích hợp khe cắm SATA nâng cấp",
        warranty: "12 Tháng 1 đổi 1",
        category: "Docking",
      },
      {
        id: "top-3",
        name: "Dell Latitude 5590 Core i7-8650U 16GB NVMe 512GB",
        price: "16.500.000 ₫",
        oldPrice: "18.900.000 ₫",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
        badge: "New",
        brand: "Dell",
        specs: "Intel Core i7-8650U, RAM 16GB DDR4, SSD 512GB NVMe, VGA Nvidia MX130, 15.6 inch FHD IPS",
        warranty: "12 Tháng Toàn Diện",
        category: "Laptop",
      },
      {
        id: "top-4",
        name: "HP Z440 Workstation Tower Xeon E5-1650v3 Quadro M4000",
        price: "23.500.000 ₫",
        oldPrice: "26.900.000 ₫",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Intel Xeon E5-1650v3 (6 Core/12 Thread), RAM 32GB ECC DDR4, SSD 512GB + HDD 2TB, Quadro M4000 8GB",
        warranty: "24 Tháng Phần Cứng",
        category: "Desktop",
      },
      {
        id: "top-5",
        name: "Dell Precision T5610 Basic Tower Dual Xeon E5-2670v2",
        price: "19.800.000 ₫",
        oldPrice: "22.500.000 ₫",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=500&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "2x Intel Xeon E5-2670v2 (20 Core/40 Thread), RAM 32GB ECC Reg, SSD 512GB, NVIDIA Quadro K4000 3GB",
        warranty: "24 Tháng Phần Cứng",
        category: "Desktop",
      },
      {
        id: "top-6",
        name: "Dell Precision M4800 Mobile Workstation i7-4910MQ K2100M",
        price: "12.900.000 ₫",
        oldPrice: "14.500.000 ₫",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Intel Core i7-4910MQ 2.9GHz, RAM 16GB, SSD 256GB + HDD 500GB, Quadro K2100M 2GB, 15.6\" FHD UltraSharp",
        warranty: "12 Tháng Toàn Diện",
        category: "Laptop",
      },
      {
        id: "top-7",
        name: "HP Elitebook 840 G4 Ultrabook Doanh Nhân Core i7-7600U",
        price: "11.500.000 ₫",
        oldPrice: "13.200.000 ₫",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
        badge: "New",
        brand: "HP",
        specs: "Intel Core i7-7600U, RAM 8GB DDR4, SSD 256GB NVMe, Màn hình 14 inch FHD chống chói, Bảo mật vân tay",
        warranty: "12 Tháng Toàn Diện",
        category: "Laptop",
      },
      {
        id: "top-8",
        name: "Nguồn Máy Trạm Dell Precision T5610 Power Supply 685W",
        price: "2.450.000 ₫",
        oldPrice: "2.900.000 ₫",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Công suất thực 685W chuẩn 80 Plus Gold tháo máy zin 100%, hỗ trợ Dual CPU và VGA Quadro/GTX cao cấp",
        warranty: "12 Tháng 1 đổi 1",
        category: "Linh Kiện",
      },
    ],
    newArrivals: [
      {
        id: "new-1",
        name: "Dell Precision 7720 Mobile Workstation Xeon E3-1535M v6",
        price: "34.500.000 ₫",
        oldPrice: "38.900.000 ₫",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
        badge: "New",
        brand: "Dell",
        specs: "Intel Xeon E3-1535M v6, RAM 32GB ECC, SSD 1TB NVMe, NVIDIA Quadro P4000 8GB, 17.3\" 4K IGZO",
        warranty: "24 Tháng Toàn Diện",
        category: "Laptop",
      },
      {
        id: "new-2",
        name: "HP ZBook 17 G2 Extreme Workstation i7-4940MX K5100M",
        price: "19.500.000 ₫",
        oldPrice: "21.900.000 ₫",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
        badge: "New",
        brand: "HP",
        specs: "Core i7-4940MX Extreme, RAM 32GB, SSD 512GB, Quadro K5100M 8GB GDDR5, Màn hình DreamColor 17.3\"",
        warranty: "12 Tháng Toàn Diện",
        category: "Laptop",
      },
      {
        id: "new-3",
        name: "Màn Hình Đồ Họa HP DreamColor Z32x 31.5 inch 4K UHD IPS",
        price: "18.900.000 ₫",
        oldPrice: "22.500.000 ₫",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
        badge: "New",
        brand: "HP",
        specs: "Độ phân giải 4K UHD (3840x2160), 10-bit màu, 99.5% AdobeRGB, cân chỉnh màu phần cứng chuyên nghiệp",
        warranty: "12 Tháng Chính Hãng",
        category: "Linh Kiện",
      },
      {
        id: "new-4",
        name: "Chuột Đồ Họa 3Dconnexion SpaceMouse Enterprise Kit",
        price: "6.800.000 ₫",
        oldPrice: "7.500.000 ₫",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80",
        badge: "New",
        brand: "3Dconnexion",
        specs: "Cảm biến 6 bậc tự do (6DoF), màn hình LCD hiển thị phím tắt cho AutoCAD, SolidWorks, Maya, Revit",
        warranty: "24 Tháng Chính Hãng",
        category: "Linh Kiện",
      },
    ],
  },
  newsWidget: [
    {
      id: "news-1",
      title: "Các thành phần cơ bản của hệ thống máy tính Workstation chuyên nghiệp",
      date: "20/10/2026",
      excerpt:
        "Tìm hiểu chi tiết sự khác biệt giữa CPU Intel Xeon, bộ nhớ RAM ECC tự sửa lỗi và card đồ họa NVIDIA Quadro trên các dòng máy trạm Dell Precision & HP Z-Series.",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
      featured: true,
    },
    {
      id: "news-2",
      title: "Workstation là gì? Vì sao kỹ sư dựng phim 3D và kiến trúc sư bắt buộc phải dùng?",
      date: "18/10/2026",
      excerpt: "So sánh hiệu năng render thực tế giữa PC Gaming thông thường và Máy trạm Workstation chạy liên tục 24/7.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "news-3",
      title: "Lựa chọn RAM máy tính! Phân biệt RAM ECC Registered và RAM Non-ECC thông thường",
      date: "15/10/2026",
      excerpt: "Cơ chế kiểm soát lỗi bit dữ liệu giúp máy trạm không bao giờ bị màn hình xanh khi đang xuất file nặng.",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "news-4",
      title: "Lựa chọn ổ cứng máy tính! Giải pháp RAID 0/1/5 kết hợp SSD NVMe và HDD Enterprise",
      date: "11/10/2026",
      excerpt: "Tối ưu tốc độ đọc ghi project 4K/8K và bảo toàn dữ liệu tuyệt đối cho doanh nghiệp thiết kế.",
      image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=300&q=80",
    },
  ],
  laptopSection: {
    title: "LAPTOP",
    filters: ["Dell", "HP", "Lenovo", "Xem tất cả >>"],
    items: [
      {
        id: "lap-1",
        name: "HP Elitebook 8560P Core i7-2620M RAM 8GB SSD 240GB",
        price: "5.800.000 ₫",
        oldPrice: "6.500.000 ₫",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i7-2620M, RAM 8GB, SSD 240GB, VGA AMD Radeon HD 6470M, 15.6 inch HD+ vỏ nhôm nguyên khối",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-2",
        name: "HP ZBook 17 G2 Workstation Core i7-4810MQ Quadro K3100M",
        price: "15.900.000 ₫",
        oldPrice: "17.800.000 ₫",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i7-4810MQ, RAM 16GB, SSD 256GB + HDD 1TB, NVIDIA Quadro K3100M 4GB, 17.3\" FHD IPS",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-3",
        name: "Dell Precision 7720 Core i7-7820HQ RAM 32GB Quadro P3000",
        price: "28.900.000 ₫",
        oldPrice: "32.000.000 ₫",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "Dell",
        specs: "Core i7-7820HQ, RAM 32GB DDR4, SSD 512GB NVMe, NVIDIA Quadro P3000 6GB, 17.3\" UltraSharp FHD",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-4",
        name: "Lenovo ThinkPad T440 Ultrabook Core i5-4300U SSD 240GB",
        price: "6.200.000 ₫",
        oldPrice: "7.100.000 ₫",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Lenovo",
        specs: "Core i5-4300U, RAM 8GB, SSD 240GB, Màn hình 14 inch HD+, Pin kép PowerBridge bền bỉ",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-5",
        name: "Lenovo ThinkPad T450S Core i7-5600U RAM 8GB SSD 256GB",
        price: "8.400.000 ₫",
        oldPrice: "9.500.000 ₫",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Lenovo",
        specs: "Core i7-5600U, RAM 8GB, SSD 256GB, Màn hình 14 inch FHD IPS, Bàn phím ThinkPad gõ êm nhất phân khúc",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-6",
        name: "Lenovo ThinkPad X260 Siêu Di Động Core i5-6300U 12.5 FHD",
        price: "8.900.000 ₫",
        oldPrice: "10.200.000 ₫",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "Lenovo",
        specs: "Core i5-6300U, RAM 8GB DDR4, SSD 256GB, Màn hình 12.5 inch FHD IPS, Trọng lượng chỉ 1.3kg",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-7",
        name: "HP Elitebook 8570W Mobile Workstation i7-3720QM K1000M",
        price: "8.800.000 ₫",
        oldPrice: "9.900.000 ₫",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i7-3720QM (4 Core/8 Thread), RAM 8GB, SSD 240GB, Quadro K1000M 2GB, 15.6\" FHD chống chói",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-8",
        name: "HP Elitebook Folio 9470m Core i7-3687U RAM 8GB SSD 256GB",
        price: "6.500.000 ₫",
        oldPrice: "7.400.000 ₫",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i7-3687U, RAM 8GB, SSD 256GB, Màn hình 14 inch HD+, Thiết kế mỏng nhẹ vỏ nhôm bạc sang trọng",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-9",
        name: "HP Elitebook Folio 9480m Core i7-4600U RAM 8GB SSD 256GB",
        price: "7.200.000 ₫",
        oldPrice: "8.200.000 ₫",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i7-4600U, RAM 8GB, SSD 256GB, Màn hình 14 inch HD+, Đèn nền bàn phím, chuẩn quân đội MIL-STD",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-10",
        name: "HP Elitebook 840 G1 Core i5-4300U RAM 8GB SSD 240GB",
        price: "6.400.000 ₫",
        oldPrice: "7.300.000 ₫",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i5-4300U, RAM 8GB, SSD 240GB, 14 inch HD+, Dòng laptop văn phòng siêu bền bỉ chuẩn Mỹ",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-11",
        name: "HP Elitebook 840 G2 Core i5-5300U RAM 8GB SSD 256GB FHD",
        price: "7.500.000 ₫",
        oldPrice: "8.500.000 ₫",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "HP",
        specs: "Core i5-5300U, RAM 8GB, SSD 256GB, Màn hình 14 inch Full HD IPS sắc nét, Pin 5 giờ liên tục",
        warranty: "12 Tháng",
        category: "Laptop",
      },
      {
        id: "lap-12",
        name: "HP Elitebook 840 G2 Core i7-5600U VGA R7 M260X Đồ Họa",
        price: "8.900.000 ₫",
        oldPrice: "9.800.000 ₫",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Core i7-5600U, RAM 8GB, SSD 256GB, Card rời AMD Radeon R7 M260X 2GB, Màn hình 14 inch FHD",
        warranty: "12 Tháng",
        category: "Laptop",
      },
    ],
  },
  desktopSection: {
    title: "DESKTOP",
    filters: ["Dell Workstation", "HP Workstation", "Lenovo Workstation", "Xem tất cả >>"],
    items: [
      {
        id: "desk-1",
        name: "Dell Optiplex 990 Tower Core i7-2600 RAM 8GB SSD 240GB",
        price: "5.200.000 ₫",
        oldPrice: "6.000.000 ₫",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Intel Core i7-2600 3.4GHz, RAM 8GB DDR3, SSD 240GB, Nguồn công suất thực bền bỉ cho văn phòng & kế toán",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-2",
        name: "Dell Precision T5600 MID Tower Dual Xeon E5-2660 Quadro 4000",
        price: "15.500.000 ₫",
        oldPrice: "17.900.000 ₫",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "2x Xeon E5-2660 (16 Core/32 Thread), RAM 32GB ECC, SSD 256GB + HDD 1TB, NVIDIA Quadro 4000 2GB",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-3",
        name: "Dell Precision T3610 Basic Tower Xeon E5-1620v2 Quadro K2000",
        price: "11.900.000 ₫",
        oldPrice: "13.500.000 ₫",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Intel Xeon E5-1620v2 3.7GHz, RAM 16GB ECC, SSD 256GB + HDD 1TB, NVIDIA Quadro K2000 2GB chuyên AutoCAD",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-4",
        name: "HP Z440 Workstation Tower Xeon E5-2680v3 RAM 32GB GTX 1070",
        price: "25.900.000 ₫",
        oldPrice: "28.500.000 ₫",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "HP",
        specs: "Intel Xeon E5-2680v3 (12 Core/24 Thread), RAM 32GB DDR4 ECC, SSD 512GB NVMe, NVIDIA GTX 1070 8GB",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-5",
        name: "Dell Precision T5610 High End Tower Dual E5-2690v2 Quadro M4000",
        price: "29.500.000 ₫",
        oldPrice: "33.000.000 ₫",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "Dell",
        specs: "2x Xeon E5-2690v2 (20 Core/40 Thread 3.0GHz), RAM 64GB ECC, SSD 512GB + HDD 2TB, Quadro M4000 8GB",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-6",
        name: "Dell Precision T5610 K4000 Tower Dual E5-2670v2 RAM 32GB",
        price: "20.500.000 ₫",
        oldPrice: "23.200.000 ₫",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "2x Xeon E5-2670v2, RAM 32GB ECC Reg, SSD 256GB + HDD 1TB, NVIDIA Quadro K4000 3GB Render 3DsMax",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-7",
        name: "Dell Precision T5610 CPU Render Tower Dual E5-2680v2 40 Threads",
        price: "22.800.000 ₫",
        oldPrice: "25.500.000 ₫",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "2x Xeon E5-2680v2 (20 Core/40 Thread), RAM 32GB ECC, SSD 512GB, VGA Quadro K2000 chuyên V-Ray Corona",
        warranty: "24 Tháng",
        category: "Desktop",
      },
      {
        id: "desk-8",
        name: "Dell Precision T5610 Basic Tower Single Xeon E5-2670v2 16GB",
        price: "14.900.000 ₫",
        oldPrice: "16.800.000 ₫",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "1x Xeon E5-2670v2 (hỗ trợ nâng cấp CPU thứ 2), RAM 16GB ECC, SSD 256GB, Quadro K2000 2GB",
        warranty: "24 Tháng",
        category: "Desktop",
      },
    ],
  },
  componentSection: {
    title: "LINH KIỆN",
    filters: ["Docking", "Ổ Cứng", "RAM", "Linh Kiện", "Đồ Chơi Công Nghệ", "Xem tất cả >>"],
    items: [
      {
        id: "comp-1",
        name: "Màn Hình Đồ Họa HP ZR2240w 21.5 inch Full HD S-IPS",
        price: "2.350.000 ₫",
        oldPrice: "2.800.000 ₫",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Tấm nền S-IPS chuẩn màu đồ họa, cổng HDMI, DisplayPort, DVI, VGA, Chân đế xoay dọc 90 độ",
        warranty: "12 Tháng",
        category: "Linh Kiện",
      },
      {
        id: "comp-2",
        name: "Màn Hình Đồ Họa HP ZR2440w 24 inch WUXGA 1920x1200 IPS",
        price: "3.450.000 ₫",
        oldPrice: "4.100.000 ₫",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Tỷ lệ vàng 16:10 (1920x1200) tối ưu không gian làm việc CAD/PTS, tấm nền H-IPS 97% sRGB",
        warranty: "12 Tháng",
        category: "Linh Kiện",
      },
      {
        id: "comp-3",
        name: "Chuột Không Dây Logitech MX Master 2S Wireless Darkfield",
        price: "1.690.000 ₫",
        oldPrice: "2.150.000 ₫",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "Logitech",
        specs: "Cảm biến 4000 DPI di trên mặt kính, công nghệ Logitech Flow điều khiển 3 máy tính cùng lúc",
        warranty: "12 Tháng",
        category: "Đồ Chơi Công Nghệ",
      },
      {
        id: "comp-4",
        name: "Màn Hình HP DreamColor Z32x 31.5 inch 4K UHD Chuyên Dựng Phim",
        price: "18.900.000 ₫",
        oldPrice: "22.500.000 ₫",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "HP",
        specs: "Màn hình tham chiếu 4K 10-bit 1.07 tỷ màu, chuẩn DCI-P3 & AdobeRGB cho Studio Color Grading",
        warranty: "12 Tháng",
        category: "Linh Kiện",
      },
      {
        id: "comp-5",
        name: "Bộ Nguồn Dell Precision T5600 Power Supply 635W 80 Plus Gold",
        price: "2.150.000 ₫",
        oldPrice: "2.600.000 ₫",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Nguồn tháo máy trạm Dell T3600/T5600 zin nguyên bản, thiết kế Hot-Swap tháo lắp nhanh",
        warranty: "12 Tháng",
        category: "Linh Kiện",
      },
      {
        id: "comp-6",
        name: "Bộ Nguồn Dell Precision T5610 Power Supply 685W 80 Plus Gold",
        price: "2.450.000 ₫",
        oldPrice: "2.900.000 ₫",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "Dell",
        specs: "Nguồn zin theo máy Dell T3610/T5610/T5810 công suất thực 685W cấp nguồn ổn định 24/7",
        warranty: "12 Tháng",
        category: "Linh Kiện",
      },
      {
        id: "comp-7",
        name: "Chuột 3D Connexion SpaceMouse Enterprise Chuyên Gia CAD/CAM",
        price: "6.800.000 ₫",
        oldPrice: "7.500.000 ₫",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "3Dconnexion",
        specs: "Thiết bị điều hướng mô hình 3D chuyên sâu, tăng 40% tốc độ thiết kế cơ khí & kiến trúc",
        warranty: "24 Tháng",
        category: "Đồ Chơi Công Nghệ",
      },
      {
        id: "comp-8",
        name: "HP ZBook Dock with Thunderbolt 3 200W Chính Hãng",
        price: "2.850.000 ₫",
        oldPrice: "3.500.000 ₫",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=450&q=80",
        badge: "New",
        brand: "HP",
        specs: "Hỗ trợ xuất 2 màn hình 4K @ 60Hz, cấp nguồn sạc 200W cho HP ZBook 15/17 G3, G4, G5",
        warranty: "12 Tháng",
        category: "Docking",
      },
      {
        id: "comp-9",
        name: "HP UltraSlim Docking Station 2013 D9Y32AA Cho EliteBook",
        price: "590.000 ₫",
        oldPrice: "890.000 ₫",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Tương thích HP EliteBook 820, 840, 850 G1/G2/G3/G4, ZBook 14/15u, tích hợp 2x DisplayPort, 4x USB 3.0",
        warranty: "12 Tháng",
        category: "Docking",
      },
      {
        id: "comp-10",
        name: "HP 230W Advanced Docking Station A7E38AA Kèm Adapter 230W",
        price: "1.150.000 ₫",
        oldPrice: "1.550.000 ₫",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Trạm mở rộng công suất lớn 230W chuyên trị HP Elitebook 8570w, 8770w, ZBook 15/17 G1 G2",
        warranty: "12 Tháng",
        category: "Docking",
      },
      {
        id: "comp-11",
        name: "HP 120W Docking Station A7E32AA Đầy Đủ Cổng Kết Nối",
        price: "680.000 ₫",
        oldPrice: "950.000 ₫",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Giải pháp biến Laptop thành Máy bàn chỉ với 1 nút nhấn, kèm sạc HP 120W Kim To chính hãng",
        warranty: "12 Tháng",
        category: "Docking",
      },
      {
        id: "comp-12",
        name: "HP 90W Docking Station VB041AA Cho Elitebook 8460p 8470p",
        price: "490.000 ₫",
        oldPrice: "750.000 ₫",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=450&q=80",
        badge: "Sale",
        brand: "HP",
        specs: "Mở rộng cổng COM RS232, LPT, DisplayPort, DVI, VGA, LAN cho kỹ sư lập trình PLC & tự động hóa",
        warranty: "12 Tháng",
        category: "Docking",
      },
    ],
  },
  bottomPromoBanner: {
    badge: "PHỤ KIỆN GIẢM GIÁ LÊN TỚI 50%",
    title: "Đế sạc nhanh không dây iPearl Chuẩn QI Cao Cấp",
    subtitle: "Tương thích hoàn hảo với iPhone, Samsung Galaxy & các thiết bị hỗ trợ sạc không dây chuẩn Qi quốc tế",
    highlight: "Giá ưu đãi khi mua kèm Laptop chỉ 350.000 ₫ (Giá gốc 700.000 ₫)",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=900&q=80",
  },
  footer: {
    aboutLinks: [
      "Giới thiệu về LaptopPro",
      "Tầm nhìn & Sứ mệnh",
      "Hệ thống Showroom toàn quốc",
      "Khách hàng Doanh nghiệp B2B",
      "Tuyển dụng nhân sự kỹ thuật",
    ],
    productLinks: [
      "Laptop Mobile Workstation",
      "Laptop Doanh nhân Ultrabook",
      "Máy trạm Desktop Workstation",
      "Màn hình Đồ họa chuyên nghiệp",
      "Linh kiện Server & Docking Station",
    ],
    policyLinks: [
      "Chính sách bảo hành 1 đổi 1",
      "Chính sách dùng thử 15 ngày",
      "Hướng dẫn mua hàng trả góp 0%",
      "Chính sách giao hàng & thu tiền COD",
      "Dịch vụ cân màu màn hình Spyder5",
    ],
    seoKeywords: [
      "Laptop Workstation",
      "Dell Precision",
      "HP ZBook",
      "Lenovo ThinkPad",
      "HP Elitebook",
      "Dell Latitude",
      "Máy trạm đồ họa",
      "Dell Precision T5610",
      "HP Z440 Workstation",
      "Màn hình HP DreamColor",
      "Docking Station Dell HP",
      "RAM ECC Server",
    ],
  },
};
