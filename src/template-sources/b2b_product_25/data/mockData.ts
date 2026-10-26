export interface FBShopProduct {
  id: string;
  name: string;
  sku: string;
  brand: "Yonex" | "Lining" | "Victor" | "Mizuno" | "Kawasaki";
  category: "vot-cau-long" | "giay-cau-long" | "balo-tui" | "phu-kien-may-dan";
  price: number;
  priceFormatted: string;
  oldPriceFormatted?: string;
  discountBadge?: string;
  specs: {
    weight: string;
    balance: string;
    stiffness: string;
    maxTension: string;
  };
  image: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface FBShopMockData {
  business: {
    name: string;
    brandShort: string;
    tagline: string;
    subTagline: string;
    phone: string[];
    email: string[];
    address: string;
    website: string;
    socialHandle: string;
  };
  navItems: {
    id: string;
    label: string;
    hasDropdown?: boolean;
    highlight?: boolean;
  }[];
  branchesTicker: string[];
  hero: {
    bgBigTextLines: string[];
    scriptHeadline: string;
    subBadge: string;
    passionText: string;
    shuttlecockImage: string;
    leftPolaroid: string;
    rightPolaroid: string;
  };
  searchCategories: {
    id: string;
    label: string;
  }[];
  brands: ("Yonex" | "Lining" | "Victor" | "Mizuno" | "Kawasaki")[];
  products: FBShopProduct[];
  trainingCourses: {
    id: string;
    title: string;
    coach: string;
    schedule: string;
    fee: string;
    location: string;
    spotsLeft: number;
  }[];
  storeBranches: {
    id: string;
    name: string;
    address: string;
    hotline: string;
    stringingMachines: string;
  }[];
  sampleOrders: {
    orderCode: string;
    customerName: string;
    phone: string;
    status: string;
    items: string;
    stringTension: string;
    updatedAt: string;
  }[];
}

export const mockData: FBShopMockData = {
  business: {
    name: "Hệ Thống Phân Phối Dụng Cụ Thể Thao Chuyên Dụng FBShop",
    brandShort: "FBSHOP",
    tagline: "HỆ THỐNG CỬA HÀNG DỤNG CỤ CẦU LÔNG CHÍNH HÃNG TOÀN QUỐC",
    subTagline: "FBSHOP.VN - ĐỒNG HÀNH CÙNG ĐAM MÊ!",
    phone: ["0979 170 274", "0868 989 679"],
    email: ["info@fbshop.vn", "b2b@fbshop.vn"],
    address: "Số 70 Ngõ 102 Trường Chinh, Quận Đống Đa, TP. Hà Nội",
    website: "fbshop.vn",
    socialHandle: "@fbshop.vn",
  },
  navItems: [
    { id: "top", label: "TRANG CHỦ" },
    { id: "san-pham", label: "SẢN PHẨM", hasDropdown: true },
    { id: "cua-hang", label: "CỬA HÀNG" },
    { id: "dao-tao", label: "ĐÀO TẠO" },
    { id: "tra-cuu", label: "TRA CỨU ĐƠN HÀNG" },
    { id: "tin-tuc", label: "TIN TỨC" },
    { id: "tuyen-dung", label: "TUYỂN DỤNG", highlight: true },
    { id: "lien-he", label: "LIÊN HỆ" },
  ],
  branchesTicker: [
    "FBSHOP TRƯỜNG CHINH",
    "FBSHOP LONG BIÊN",
    "FBSHOP TÂN PHÚ",
    "FBSHOP TÂN BÌNH",
    "FBSHOP HỒ TÙNG MẬU",
    "FBSHOP CẦU GIẤY",
    "FBSHOP QUẬN 10",
  ],
  hero: {
    bgBigTextLines: ["BAD", "MIN", "TON"],
    scriptHeadline: "CHÀO HÈ RỰC RỠ",
    subBadge: "FBSHOP.VN",
    passionText: "ĐỒNG HÀNH CÙNG ĐAM MÊ !",
    shuttlecockImage:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80",
    leftPolaroid:
      "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=500&q=80",
    rightPolaroid:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=500&q=80",
  },
  searchCategories: [
    { id: "ALL", label: "Tất cả danh mục" },
    { id: "vot-cau-long", label: "Vợt Cầu Lông Chính Hãng" },
    { id: "giay-cau-long", label: "Giày Cầu Lông Chuyên Dụng" },
    { id: "balo-tui", label: "Bao Vợt & Balo Cầu Lông" },
    { id: "phu-kien-may-dan", label: "Máy Đan Vợt & Quả Cầu Lông B2B" },
  ],
  brands: ["Yonex", "Lining", "Victor", "Mizuno", "Kawasaki"],
  products: [
    {
      id: "fb-1",
      name: "Vợt Cầu Lông Yonex Astrox 100ZZ Kurenai Chính Hãng (JP/VN)",
      sku: "YX-AX100ZZ-KR",
      brand: "Yonex",
      category: "vot-cau-long",
      price: 4350000,
      priceFormatted: "4.350.000 ₫",
      oldPriceFormatted: "4.890.000 ₫",
      discountBadge: "-11%",
      specs: {
        weight: "3U / 4U (83g)",
        balance: "Nặng đầu (305mm)",
        stiffness: "Siêu cứng (Extra Stiff)",
        maxTension: "12.5 kg (28 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 5.0,
      reviewsCount: 142,
    },
    {
      id: "fb-2",
      name: "Vợt Cầu Lông Yonex Arcsaber 11 Pro Chính Hãng Kiểm Soát Cầu",
      sku: "YX-ARC11PRO",
      brand: "Yonex",
      category: "vot-cau-long",
      price: 4190000,
      priceFormatted: "4.190.000 ₫",
      oldPriceFormatted: "4.650.000 ₫",
      discountBadge: "-10%",
      specs: {
        weight: "4U (83g)",
        balance: "Cân bằng (295mm)",
        stiffness: "Cứng (Stiff)",
        maxTension: "12.0 kg (27 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1613918431703-aa50889e3be9?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.9,
      reviewsCount: 98,
    },
    {
      id: "fb-3",
      name: "Vợt Cầu Lông Lining Axforce 90 Max Dragon / Tiger",
      sku: "LN-AX90MAX",
      brand: "Lining",
      category: "vot-cau-long",
      price: 4450000,
      priceFormatted: "4.450.000 ₫",
      oldPriceFormatted: "5.100.000 ₫",
      discountBadge: "-13%",
      specs: {
        weight: "4U (84g)",
        balance: "Nặng đầu (308mm)",
        stiffness: "Cứng trung bình",
        maxTension: "13.5 kg (30 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 5.0,
      reviewsCount: 76,
    },
    {
      id: "fb-4",
      name: "Vợt Cầu Lông Victor Thruster Ryuga II (TK-Ryuga 2) Chính Hãng",
      sku: "VT-RYUGA2",
      brand: "Victor",
      category: "vot-cau-long",
      price: 3690000,
      priceFormatted: "3.690.000 ₫",
      oldPriceFormatted: "4.200.000 ₫",
      discountBadge: "-12%",
      specs: {
        weight: "4U (83g)",
        balance: "Nặng đầu (302mm)",
        stiffness: "Cứng",
        maxTension: "14.0 kg (31 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.9,
      reviewsCount: 64,
    },
    {
      id: "fb-5",
      name: "Vợt Cầu Lông Lining Halbertec 8000 Công Thủ Toàn Diện",
      sku: "LN-HB8000",
      brand: "Lining",
      category: "vot-cau-long",
      price: 3850000,
      priceFormatted: "3.850.000 ₫",
      oldPriceFormatted: "4.350.000 ₫",
      discountBadge: "-11%",
      specs: {
        weight: "4U (83g)",
        balance: "Cân bằng (295mm)",
        stiffness: "Cứng vừa",
        maxTension: "13.5 kg (30 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1613918431703-aa50889e3be9?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.8,
      reviewsCount: 53,
    },
    {
      id: "fb-6",
      name: "Vợt Cầu Lông Yonex Nanoflare 800 Pro Phản Tạt Tốc Độ",
      sku: "YX-NF800PRO",
      brand: "Yonex",
      category: "vot-cau-long",
      price: 4050000,
      priceFormatted: "4.050.000 ₫",
      oldPriceFormatted: "4.590.000 ₫",
      discountBadge: "-12%",
      specs: {
        weight: "4U (83g)",
        balance: "Nhẹ đầu (288mm)",
        stiffness: "Cứng",
        maxTension: "12.5 kg (28 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.9,
      reviewsCount: 47,
    },
    {
      id: "fb-7",
      name: "Giày Cầu Lông Yonex Power Cushion 65Z3 Men Trắng Đỏ",
      sku: "YX-SHB65Z3",
      brand: "Yonex",
      category: "giay-cau-long",
      price: 2650000,
      priceFormatted: "2.650.000 ₫",
      oldPriceFormatted: "3.100.000 ₫",
      discountBadge: "-15%",
      specs: {
        weight: "Size 38 - 44",
        balance: "Power Cushion+",
        stiffness: "Đế Radial Blade chống trượt",
        maxTension: "Form Wide thoải mái",
      },
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 5.0,
      reviewsCount: 115,
    },
    {
      id: "fb-8",
      name: "Giày Cầu Lông Mizuno Wave Claw EL 2 Siêu Nhẹ Bám Sân",
      sku: "MZ-WAVECLAW2",
      brand: "Mizuno",
      category: "giay-cau-long",
      price: 2390000,
      priceFormatted: "2.390.000 ₫",
      oldPriceFormatted: "2.850.000 ₫",
      discountBadge: "-16%",
      specs: {
        weight: "Trọng lượng 285g",
        balance: "Công nghệ Mizuno Wave",
        stiffness: "Đệm Enerzy đàn hồi cao",
        maxTension: "Đế cao su XG Rubber",
      },
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.9,
      reviewsCount: 68,
    },
    {
      id: "fb-9",
      name: "Vợt Cầu Lông Kawasaki Passion P25 Cho Người Mới & CLB Phong Trào",
      sku: "KW-P25",
      brand: "Kawasaki",
      category: "vot-cau-long",
      price: 890000,
      priceFormatted: "890.000 ₫",
      oldPriceFormatted: "1.150.000 ₫",
      discountBadge: "-23%",
      specs: {
        weight: "4U (84g)",
        balance: "Cân bằng dễ thuần",
        stiffness: "Dẻo trợ lực tốt",
        maxTension: "11.0 kg (24 LBS)",
      },
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.8,
      reviewsCount: 184,
    },
    {
      id: "fb-10",
      name: "Bao Vợt Cầu Lông Yonex Pro Racquet Bag 92426EX (Đựng 6 Vợt)",
      sku: "YX-BAG92426",
      brand: "Yonex",
      category: "balo-tui",
      price: 1750000,
      priceFormatted: "1.750.000 ₫",
      oldPriceFormatted: "2.150.000 ₫",
      discountBadge: "-19%",
      specs: {
        weight: "2 Ngăn lớn + Ngăn giày riêng",
        balance: "Lớp lót cách nhiệt Thermo",
        stiffness: "Chống thấm nước",
        maxTension: "Kích thước 78x28x34cm",
      },
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 4.9,
      reviewsCount: 41,
    },
    {
      id: "fb-11",
      name: "Thùng 50 Ống Quả Cầu Lông Thi Đấu Hải Yến / Thành Công (Giá Sỉ CLB)",
      sku: "B2B-SHUTTLE-50",
      brand: "Victor",
      category: "phu-kien-may-dan",
      price: 9200000,
      priceFormatted: "9.200.000 ₫",
      oldPriceFormatted: "10.500.000 ₫",
      discountBadge: "Giá Sỉ CLB",
      specs: {
        weight: "Thùng 50 ống (600 quả)",
        balance: "Lông vũ tự nhiên loại 1",
        stiffness: "Tốc độ 76 / 77 chuẩn sân VN",
        maxTension: "Quỹ đạo bay cực đầm",
      },
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 5.0,
      reviewsCount: 89,
    },
    {
      id: "fb-12",
      name: "Máy Đan Vợt Điện Tử Victor VE-50 Pro Chuẩn BWF Cho Cửa Hàng",
      sku: "B2B-STRINGER-VE50",
      brand: "Victor",
      category: "phu-kien-may-dan",
      price: 68000000,
      priceFormatted: "68.000.000 ₫",
      oldPriceFormatted: "75.000.000 ₫",
      discountBadge: "B2B Setup",
      specs: {
        weight: "Đầu kéo điện tử chính xác 0.1 LBS",
        balance: "Hệ thống 6 điểm kẹp chống méo khung",
        stiffness: "Chuyển giao công nghệ đan 4 nút",
        maxTension: "Bảo hành 24 tháng tận nơi",
      },
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=500&q=80",
      inStock: true,
      rating: 5.0,
      reviewsCount: 19,
    },
  ],
  trainingCourses: [
    {
      id: "tr-1",
      title: "Khóa Đào Tạo Cầu Lông Cơ Bản Đến Nâng Cao (Kèm Chỉnh Kỹ Thuật)",
      coach: "HLV Kiện Tướng Quốc Gia Nguyễn Tiến Minh Team",
      schedule: "Tối Thứ 2 - 4 - 6 (18:30 - 20:30)",
      fee: "1.500.000 ₫ / tháng",
      location: "Cụm Sân FBShop Trường Chinh & Cầu Giấy",
      spotsLeft: 5,
    },
    {
      id: "tr-2",
      title: "Khóa Học Nghề Đan Vợt Điện Tử Chuẩn Quốc Tế (Mở Shop Cầu Lông)",
      coach: "Chuyên Gia Stringer trưởng hệ thống FBShop",
      schedule: "Khóa cấp tốc 07 ngày thực hành 1-1 trên máy Victor/Yonex",
      fee: "5.000.000 ₫ / khóa (Miễn phí khi mua máy đan vợt tại FBShop)",
      location: "Trung tâm Kỹ thuật FBShop Hà Nội & TP.HCM",
      spotsLeft: 3,
    },
  ],
  storeBranches: [
    {
      id: "br-1",
      name: "FBSHOP TRƯỜNG CHINH (TRỤ SỞ CHÍNH)",
      address: "Số 70 Ngõ 102 Trường Chinh, Đống Đa, Hà Nội",
      hotline: "0979 170 274",
      stringingMachines: "03 Máy đan điện tử Yonex Precision 9.0",
    },
    {
      id: "br-2",
      name: "FBSHOP LONG BIÊN",
      address: "Số 412 Nguyễn Văn Cừ, Quận Long Biên, Hà Nội",
      hotline: "0868 989 679",
      stringingMachines: "02 Máy đan điện tử Victor VE-50",
    },
    {
      id: "br-3",
      name: "FBSHOP HỒ TÙNG MẬU - CẦU GIẤY",
      address: "Số 128 Hồ Tùng Mậu, Quận Cầu Giấy, Hà Nội",
      hotline: "0964 112 345",
      stringingMachines: "02 Máy đan điện tử Lining E5000",
    },
    {
      id: "br-4",
      name: "FBSHOP TÂN PHÚ - TP.HCM",
      address: "Số 245 Lũy Bán Bích, Quận Tân Phú, TP. Hồ Chí Minh",
      hotline: "0938 776 543",
      stringingMachines: "02 Máy đan điện tử Yonex ProTech 8",
    },
    {
      id: "br-5",
      name: "FBSHOP TÂN BÌNH - TP.HCM",
      address: "Số 88 Cộng Hòa, Phường 4, Quận Tân Bình, TP. Hồ Chí Minh",
      hotline: "0902 554 321",
      stringingMachines: "02 Máy đan điện tử Victor VE-80",
    },
  ],
  sampleOrders: [
    {
      orderCode: "FB8892",
      customerName: "Nguyễn Hoàng Nam",
      phone: "0988123456",
      status: "Đang đan cước Yonex BG65 Titanium - Sẵn sàng giao trong 2 giờ",
      items: "01 Vợt Yonex Astrox 100ZZ Kurenai 4U + Cước BG65Ti",
      stringTension: "11.0 kg (24.5 LBS) - Đan 4 nút chuẩn Yonex",
      updatedAt: "Hôm nay, 14:30",
    },
    {
      orderCode: "FB9901",
      customerName: "CLB Cầu Lông Điện Lực",
      phone: "0912345678",
      status: "Đã xuất kho B2B & Xuất hóa đơn VAT",
      items: "02 Thùng cầu Hải Yến S70 + 10 Vợt Kawasaki Passion P25",
      stringTension: "10.5 kg đồng bộ cho CLB",
      updatedAt: "Hôm nay, 10:15",
    },
  ],
};
