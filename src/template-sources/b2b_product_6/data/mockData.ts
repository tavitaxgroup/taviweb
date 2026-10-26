import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TechProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating?: number;
  image: string;
}

export interface B2BProduct6Data extends ClonedTemplateBaseData {
  promoTriplet: Array<{
    id: string;
    title: string;
    subtitle: string;
    discount: string;
    image: string;
  }>;
  flashDeals: TechProductItem[];
  securityCameras: TechProductItem[];
  sidebarFeatured: TechProductItem[];
  bestSellerPhones: TechProductItem[];
  laptopCatalog: TechProductItem[];
  techCategories: string[];
}

export const b2bProduct6DefaultData: B2BProduct6Data = {
  business: {
    name: "MONACOMPUTER",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["b2b@monacomputer.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.9,
    reviewCount: 3420,
    aboutTitle: "Hệ Thống Phân Phối Thiết Bị CNTT, Laptop & Camera Doanh Nghiệp",
    aboutText: [
      "MONACOMPUTER chuyên cung cấp sỉ & triển khai trọn gói hạ tầng CNTT, máy trạm Workstation, Laptop doanh nghiệp, hệ thống Camera AI giám sát an ninh và linh kiện chính hãng cho văn phòng, nhà máy và trường học.",
      "Cam kết 100% hàng chính hãng đầy đủ CO/CQ, xuất hóa đơn VAT và bảo hành tận nơi."
    ]
  },
  hero: {
    eyebrow: "Đừng bỏ lỡ",
    title: "Sản phẩm giới hạn Tuyệt vời",
    subtitle: "Discount 30% Off cho đơn hàng trang bị văn phòng & dự án doanh nghiệp",
    ctaText: "Mua ngay",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85"
  },
  promoTriplet: [
    {
      id: "pt-1",
      title: "iPhone Doanh Nghiệp 128GB",
      subtitle: "Bảo hành Apple chính hãng VN/A",
      discount: "40% OFF",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pt-2",
      title: "Balo & Túi Da Laptop",
      subtitle: "100% Da thật chống sốc 15.6 inch",
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pt-3",
      title: "Combo Thiết Bị Phòng Họp",
      subtitle: "Webcam 4K & Loa hội nghị đa hướng",
      discount: "30% OFF",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80"
    }
  ],
  flashDeals: [
    {
      id: "fd-1",
      name: "TAI NGHE BLUETOOTH ANKER SOUNDBUDS SPORT NB10",
      category: "Phụ kiện",
      price: "900,000₫",
      oldPrice: "1,000,000₫",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fd-2",
      name: "Túi Chống Nước Anker Chuẩn IPX8 - A7095",
      category: "Phụ kiện",
      price: "200,000₫",
      oldPrice: "300,000₫",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fd-3",
      name: "Bộ 2 Túi Chống Nước Điện Thoại Anker - B7095",
      category: "Phụ kiện",
      price: "350,000₫",
      oldPrice: "500,000₫",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fd-4",
      name: "Pin Dự Phòng Doanh Nghiệp Anker PowerCore 10000",
      category: "Phụ kiện",
      price: "180,000₫",
      oldPrice: "260,000₫",
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fd-5",
      name: "Pin Dự Phòng Sạc Nhanh Anker PowerCore 20000",
      category: "Phụ kiện",
      price: "220,000₫",
      oldPrice: "350,000₫",
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=500&q=80"
    }
  ],
  securityCameras: [
    {
      id: "cam-1",
      name: "Camera IP không dây Dahua IPC-C15P Chuẩn HD Góc Rộng",
      category: "Camera An Ninh",
      price: "550,000₫",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cam-2",
      name: "Camera EZVIZ CS-CV248 (1080P, C6T tích hợp trung tâm báo động)",
      category: "Camera An Ninh",
      price: "1,550,000₫",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cam-3",
      name: "Camera Vantech AI-V2020 (Tích hợp trí tuệ nhân tạo nhận diện)",
      category: "Camera An Ninh",
      price: "750,000₫",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cam-4",
      name: "Camera HikVision SH-2CD2822G0-IW (Không dây / Có dây H.265+)",
      category: "Camera An Ninh",
      price: "550,000₫",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cam-5",
      name: "Bộ Kit 4 Camera Vantech 450CVI+ Ổ Cứng Chuyên Dụng Nhà Xưởng",
      category: "Camera An Ninh",
      price: "2,150,000₫",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cam-6",
      name: "Camera Hành Trình YI Dash Camera - Dark Grey 2K Ultra",
      category: "Camera An Ninh",
      price: "1,110,000₫",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80"
    }
  ],
  sidebarFeatured: [
    {
      id: "sf-1",
      name: "Bộ kit Camera Vantech 450CVI+ 4 Camera",
      category: "Camera",
      price: "2,150,000₫",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "sf-2",
      name: "Camera Hành trình YI Dash Camera Dark Grey 2K",
      category: "Camera",
      price: "1,110,000₫",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "sf-3",
      name: "Camera Xiaomi Yi Cloud Dome 1080P Xoay 360",
      category: "Camera",
      price: "1,250,000₫",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "sf-4",
      name: "Camera IP không dây Dahua IPC-C35P 3.0Mp",
      category: "Camera",
      price: "1,550,000₫",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "sf-5",
      name: "Camera EZVIZ CS-CV248 1080P Báo Động",
      category: "Camera",
      price: "1,550,000₫",
      image:
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "sf-6",
      name: "Camera Vantech AI-V2020 Trí Tuệ Nhân Tạo",
      category: "Camera",
      price: "750,000₫",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=200&q=80"
    }
  ],
  bestSellerPhones: [
    {
      id: "ph-1",
      name: "iPhone X 256GB Chính Hãng VN/A",
      category: "Điện thoại",
      price: "23,990,000₫",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-2",
      name: "iPhone XR 64GB Chính Hãng",
      category: "Điện thoại",
      price: "18,490,000₫",
      image:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-3",
      name: "iPhone XS 64GB Max Gold",
      category: "Điện thoại",
      price: "27,790,000₫",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-4",
      name: "iPhone XS 64GB Space Gray",
      category: "Điện thoại",
      price: "25,490,000₫",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-5",
      name: "Điện Thoại BlackBerry KEYone – Hàng Chính Hãng",
      category: "Điện thoại",
      price: "14,990,000₫",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-6",
      name: "Điện Thoại Motorola Moto Z2 Play – Hàng Chính Hãng",
      category: "Điện thoại",
      price: "9,650,000₫",
      oldPrice: "10,990,000₫",
      discount: "-12%",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-7",
      name: "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng",
      category: "Điện thoại",
      price: "19,990,000₫",
      oldPrice: "22,490,000₫",
      discount: "-11%",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-8",
      name: "Điện Thoại Samsung Galaxy S8 – Hàng Chính Hãng",
      category: "Điện thoại",
      price: "15,990,000₫",
      oldPrice: "18,490,000₫",
      discount: "-14%",
      image:
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-9",
      name: "Điện Thoại iPhone 7 32GB – Hàng Chính Hãng",
      category: "Điện thoại",
      price: "14,300,000₫",
      oldPrice: "17,990,000₫",
      discount: "-21%",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ph-10",
      name: "Điện Thoại iPhone X 64GB – Hàng Chính Hãng",
      category: "Điện thoại",
      price: "29,990,000₫",
      oldPrice: "31,990,000₫",
      discount: "-6%",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    }
  ],
  laptopCatalog: [
    {
      id: "lp-1",
      name: "MacBook Pro Retina 13 inch Space Gray MPXT2 New",
      category: "Laptop",
      price: "33,900,000₫",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-2",
      name: "MacBook Pro Retina 13 inch Silver MPXU2 New",
      category: "Laptop",
      price: "33,900,000₫",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-3",
      name: "MacBook Air 13.3 inch 128GB (Open Box)",
      category: "Laptop",
      price: "27,500,000₫",
      oldPrice: "32,500,000₫",
      discount: "-15%",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-4",
      name: "MacBook Air 128GB Chính Hãng Apple Việt Nam",
      category: "Laptop",
      price: "28,500,000₫",
      oldPrice: "35,500,000₫",
      discount: "-20%",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-5",
      name: "Laptop HP ProBook 440 G3 T9S24PA Bạc Doanh Nghiệp",
      category: "Laptop",
      price: "10,920,000₫",
      oldPrice: "11,990,000₫",
      discount: "-9%",
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-6",
      name: "Laptop HP Envy 13-ad074TU Core i5-7200U/Win10 (13.3 inch)",
      category: "Laptop",
      price: "24,290,000₫",
      oldPrice: "26,590,000₫",
      discount: "-9%",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-7",
      name: "Apple MacBook Pro 13.3 inch Touch Bar & ID MPXW2 Gray",
      category: "Laptop",
      price: "46,600,000₫",
      oldPrice: "52,620,000₫",
      discount: "-11%",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-8",
      name: "Apple MacBook Air 13.3 inch MQD32 – Hàng Chính Hãng",
      category: "Laptop",
      price: "20,890,000₫",
      oldPrice: "24,790,000₫",
      discount: "-16%",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-9",
      name: "Laptop Dell Vostro V3568 XF6C61 Core i5-7200U",
      category: "Laptop",
      price: "12,200,000₫",
      oldPrice: "14,990,000₫",
      discount: "-19%",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "lp-10",
      name: "Laptop Dell Inspiron 7567 N7567A – Core i7-7700HQ/Win10",
      category: "Laptop",
      price: "25,980,000₫",
      oldPrice: "28,790,000₫",
      discount: "-10%",
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80"
    }
  ],
  techCategories: [
    "Best Seller",
    "New Arrivals",
    "Desktop PC",
    "Laptop Doanh Nghiệp",
    "Smartphones",
    "Tablets",
    "Storage & Memory",
    "PC Component",
    "Computer Accessories",
    "Game Accessories",
    "Sales & Deals B2B"
  ]
};
