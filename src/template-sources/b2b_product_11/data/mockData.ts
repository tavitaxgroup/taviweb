import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2BProduct11MiniBanner {
  id: string;
  title: string;
  discount: string;
  image: string;
}

export interface B2BProduct11Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
}

export interface B2BProduct11CategoryGroup {
  id: string;
  number: string;
  title: string;
  items: string[];
  image: string;
}

export interface B2BProduct11TemplateData extends ClonedTemplateBaseData {
  heroRightPromo: {
    badge: string;
    title: string;
    discount: string;
    image: string;
  };
  miniBanners: B2BProduct11MiniBanner[];
  bestSellerLeftCard: {
    badge: string;
    title: string;
    discount: string;
    image: string;
  };
  bestSellerProducts: B2BProduct11Product[];
  popularProducts: B2BProduct11Product[];
  twinDarkBanners: Array<{
    id: string;
    title: string;
    priceText: string;
    image: string;
  }>;
  sidebarCategories: string[];
  onlineShoppingProducts: B2BProduct11Product[];
  stripProducts: B2BProduct11Product[];
  categoryGroups: B2BProduct11CategoryGroup[];
  rightTallPromo1: {
    eyebrow: string;
    title: string;
    price: string;
    image: string;
  };
  processorBanner: {
    badge: string;
    title: string;
    subtitle: string;
    discount: string;
    priceBadge: string;
    image: string;
  };
  rightTallPromo2: {
    eyebrow: string;
    title: string;
    price: string;
    image: string;
  };
}

export const b2bProduct11DefaultData: B2BProduct11TemplateData = {
  business: {
    name: "MONA SMART",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global", "b2b@monasmart.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:30",
    rating: 4.9,
    reviewCount: 640,
    experienceYears: "10+",
    aboutTitle: "Hệ Thống Phân Phối Thiết Bị Thông Minh & Điện Tử B2B",
    aboutText: [
      "Hãy khám phá bộ sưu tập sản phẩm công nghệ của chúng tôi ngay hôm nay và trải nghiệm mua sắm trực tuyến tuyệt vời tại trang chủ của chúng tôi."
    ]
  },
  hero: {
    eyebrow: "Màn hình rộng chuẩn 4K",
    title: "CÔNG NGHỆ ĐỘT PHÁ VÀ TIÊN TIẾN",
    subtitle: "Sang trọng, hiện đại, hấp dẫn....",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85"
  },
  heroRightPromo: {
    badge: "MỚI",
    title: "MUA SẮM THUẬN TIỆN VÀ ĐƠN GIẢN",
    discount: "70%",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"
  },
  miniBanners: [
    {
      id: "mb-1",
      title: "LAPTOP ĐA DẠNG",
      discount: "65%",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mb-2",
      title: "ĐIỆN THOẠI THÔNG MINH",
      discount: "35%",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mb-3",
      title: "HOÀN HẢO HƠN VỚI IPAD",
      discount: "45%",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "mb-4",
      title: "MÀN HÌNH TV HIỆN ĐẠI",
      discount: "69%",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80"
    }
  ],
  bestSellerLeftCard: {
    badge: "MỚI",
    title: "HIỆU SUẤT CAO VÀ TIỆN ÍCH",
    discount: "40%",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
  },
  bestSellerProducts: [
    {
      id: "bs-1",
      name: "Tai Nghe Không Dây Skullcandy Dime True In-Ear",
      price: "390,000₫",
      oldPrice: "500,000₫",
      rating: 5,
      reviews: 12,
      category: "Tai nghe",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-2",
      name: "Máy Tính Bảng Tab M10 Plus FHD Android 32GB",
      price: "18,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 8,
      category: "Thiết bị",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-3",
      name: "Máy Tính Bảng Fire HD 10 Màn Hình 10.1 Inch Full HD",
      price: "18,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 15,
      category: "Thiết bị",
      image:
        "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-4",
      name: "Máy Tính Bảng Samsung Galaxy Tab A7 Lite 8.7 Inch",
      price: "15,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 9,
      category: "Điện thoại",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-5",
      name: "Máy Xay Sinh Tố Đa Năng Ninja Compact Smoothie",
      price: "390,000₫",
      oldPrice: "500,000₫",
      rating: 4,
      reviews: 6,
      category: "Thiết bị",
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  popularProducts: [
    {
      id: "pp-1",
      name: "Màn Hình Máy Tính Acer SB220Q 21.5 Inch Full HD IPS",
      price: "20,000,000₫",
      oldPrice: "30,000,000₫",
      rating: 4,
      reviews: 24,
      category: "Thiết bị",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pp-2",
      name: "Máy Lọc Không Khí Khử Khuẩn Phòng Ngủ Thông Minh",
      price: "590,000₫",
      oldPrice: "690,000₫",
      rating: 5,
      reviews: 19,
      category: "Phụ kiện",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pp-3",
      name: "Bộ Dụng Cụ Điện Đa Năng DEWALT 20V MAX XR 3 Tốc Độ",
      price: "1,800,000₫",
      oldPrice: "2,000,000₫",
      rating: 4,
      reviews: 11,
      category: "Phụ kiện",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pp-4",
      name: "Máy Tính Bảng Lenovo Tab P11 Plus Màn Hình 11 Inch 2K",
      price: "18,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 14,
      category: "Điện thoại",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pp-5",
      name: "Máy Điều Hòa Không Khí Inverter Tiết Kiệm Điện",
      price: "2,400,000₫",
      oldPrice: "2,500,000₫",
      rating: 4,
      reviews: 7,
      category: "Thiết bị",
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=500&q=80"
    }
  ],
  twinDarkBanners: [
    {
      id: "tdb-1",
      title: "TÍNH NĂNG THÔNG MINH TIỆN ÍCH",
      priceText: "5,690,000₫",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tdb-2",
      title: "THIẾT KẾ ĐẸP MẮT",
      priceText: "1,490,000₫",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  sidebarCategories: [
    "Loa Bluetooth Không Dây",
    "Máy Ảnh Kỹ Thuật Số",
    "Máy Cạo Râu Thông Minh",
    "Ổ Cứng Di Động SSD",
    "Thiết Bị Điện Gia Dụng",
    "Máy In Laser Văn Phòng",
    "Nồi Cơm Điện Cao Tần",
    "Robot Hút Bụi Lau Nhà",
    "Tivi & Màn Hình 4K",
    "Máy Giặt Lồng Ngang",
    "Tai Nghe Chụp Tai",
    "Thiết Bị Điện Tử IoT"
  ],
  onlineShoppingProducts: [
    {
      id: "os-1",
      name: "Bộ Phát WiFi Băng Tần Kép TP-Link Tốc Độ Cao",
      price: "590,000₫",
      oldPrice: "650,000₫",
      rating: 5,
      reviews: 18,
      category: "Thiết bị",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-2",
      name: "Tai Nghe Nhét Tai Skullcandy Dime True In-Ear",
      price: "390,000₫",
      oldPrice: "500,000₫",
      rating: 5,
      reviews: 21,
      category: "Tai nghe",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-3",
      name: "Máy Giặt Lồng Ngang Thông Minh COMFEE 9.5Kg",
      price: "18,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 10,
      category: "Gia dụng",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-4",
      name: "Máy Xay Sinh Tố Đa Năng Ninja Compact",
      price: "390,000₫",
      oldPrice: "500,000₫",
      rating: 4,
      reviews: 9,
      category: "Gia dụng",
      image:
        "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-5",
      name: "Tai Nghe Chụp Tai Không Dây JBL 510BT PureBass",
      price: "1,800,000₫",
      oldPrice: "2,000,000₫",
      rating: 5,
      reviews: 32,
      category: "Tai nghe",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-6",
      name: "Đồng Hồ Thông Minh Theo Dõi Sức Khỏe Chống Nước",
      price: "1,800,000₫",
      oldPrice: "2,000,000₫",
      rating: 5,
      reviews: 14,
      category: "Đồng hồ",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-7",
      name: "Laptop Cảm Ứng Xoay 360 Độ Chromebook 14 Inch Full HD",
      price: "18,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 16,
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-8",
      name: "Tai Nghe Chụp Tai Chống Ồn Chủ Động Philips H8506",
      price: "1,800,000₫",
      oldPrice: "2,000,000₫",
      rating: 5,
      reviews: 22,
      category: "Tai nghe",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-9",
      name: "Đồng Hồ Apple Watch Series 6 GPS + Cellular 40mm",
      price: "1,800,000₫",
      oldPrice: "2,000,000₫",
      rating: 5,
      reviews: 45,
      category: "Đồng hồ",
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "os-10",
      name: "Máy Tỉa Râu Không Dây Chuyên Nghiệp Pin Sạc Nhanh",
      price: "2,000,000₫",
      rating: 5,
      reviews: 11,
      category: "Phụ kiện",
      image:
        "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=500&q=80"
    }
  ],
  stripProducts: [
    {
      id: "sp-1",
      name: "Tai Nghe Không Dây Skullcandy Dime True In-Ear",
      price: "390,000₫",
      oldPrice: "500,000₫",
      rating: 5,
      reviews: 12,
      category: "Tai nghe",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sp-2",
      name: "Máy Làm Mát Không Khí Di Động Tiết Kiệm Điện",
      price: "1,400,000₫",
      oldPrice: "1,500,000₫",
      rating: 5,
      reviews: 8,
      category: "Gia dụng",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sp-3",
      name: "Điều Hòa Không Khí Thông Minh Điều Khiển Từ Xa",
      price: "2,400,000₫",
      oldPrice: "2,500,000₫",
      rating: 4,
      reviews: 6,
      category: "Gia dụng",
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sp-4",
      name: "Máy Giặt Sấy Lồng Ngang Màn Hình LED Cảm Ứng",
      price: "18,000,000₫",
      oldPrice: "20,000,000₫",
      rating: 5,
      reviews: 19,
      category: "Gia dụng",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sp-5",
      name: "Tai Nghe Bluetooth Chụp Tai JBL Tune 510BT",
      price: "590,000₫",
      oldPrice: "690,000₫",
      rating: 5,
      reviews: 27,
      category: "Tai nghe",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sp-6",
      name: "Điện Thoại Apple iPhone 12 Pro 128GB Xanh Pacific",
      price: "5,900,000₫",
      oldPrice: "6,900,000₫",
      rating: 5,
      reviews: 52,
      category: "Điện thoại",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
    }
  ],
  categoryGroups: [
    {
      id: "cg-1",
      number: "01",
      title: "Thiết Bị Di Động Thông Minh",
      items: [
        "Loa Bluetooth",
        "Máy ảnh số",
        "Robot hút bụi",
        "Màn hình Tivi"
      ],
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cg-2",
      number: "02",
      title: "Laptop & Máy Tính Bảng",
      items: [
        "Loa Bluetooth",
        "Máy ảnh số",
        "Robot hút bụi",
        "Màn hình Tivi"
      ],
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cg-3",
      number: "02",
      title: "Thiết Bị Gia Dụng Tiện Ích",
      items: [
        "Loa Bluetooth",
        "Máy ảnh số",
        "Robot hút bụi",
        "Màn hình Tivi"
      ],
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cg-4",
      number: "02",
      title: "Máy Ảnh & Quay Phim 4K",
      items: [
        "Loa Bluetooth",
        "Máy ảnh số",
        "Robot hút bụi",
        "Màn hình Tivi"
      ],
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cg-5",
      number: "02",
      title: "Camera An Ninh & SmartHome",
      items: [
        "Loa Bluetooth",
        "Máy ảnh số",
        "Robot hút bụi",
        "Màn hình Tivi"
      ],
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cg-6",
      number: "02",
      title: "Màn Hình & Bảng Vẽ Đồ Họa",
      items: [
        "Loa Bluetooth",
        "Máy ảnh số",
        "Robot hút bụi",
        "Màn hình Tivi"
      ],
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80"
    }
  ],
  rightTallPromo1: {
    eyebrow: "TIẾT KIỆM 39%",
    title: "Vẻ Đẹp Đơn Giản Và Hiện Đại",
    price: "35,990,000₫",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
  },
  processorBanner: {
    badge: "Hiệu suất mạnh mẽ",
    title: "Bộ vi xử lý tiên tiến với công nghệ cao",
    subtitle: "Hình ảnh hiển thị sắc nét và màu sắc sống động",
    discount: "30% OFF",
    priceBadge: "CHỈ TỪ 9.99TR",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85"
  },
  rightTallPromo2: {
    eyebrow: "TIẾT KIỆM 20%",
    title: "Chất Lượng Cao Và Mạnh Mẽ",
    price: "17,990,000₫",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
  },
  clients: [
    { id: "cl-1", name: "LIVE WORLD" },
    { id: "cl-2", name: "TV NEWS" },
    { id: "cl-3", name: "SPORTS LIVE" },
    { id: "cl-4", name: "M NEWS" },
    { id: "cl-5", name: "ARMY TECH" },
    { id: "cl-6", name: "M TECH" }
  ]
};

export default b2bProduct11DefaultData;
