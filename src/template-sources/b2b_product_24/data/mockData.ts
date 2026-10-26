export interface BachLongProduct {
  id: string;
  name: string;
  sku: string;
  category: "apple" | "samsung" | "b2b_combo" | "accessory";
  price: string;
  oldPrice: string;
  b2bBulkPrice: string;
  discountPercent: number;
  installmentText: string;
  tradeInSubsidy: string;
  badge?: string;
  image: string;
  specs: string[];
  giftText: string;
  warranty: string;
}

export interface TradeInDeviceOption {
  id: string;
  model: string;
  brand: string;
  gradeAPrice: number;
  gradeBPrice: number;
  subsidyBonus: number;
}

export interface BachLongMockData {
  business: {
    name: string;
    brandLeft: string;
    brandRight: string;
    brandSince: string;
    brandSub: string;
    establishedYears: number;
    headline: string;
    subHeadline: string;
    phone: string[];
    email: string[];
    address: string;
    taxCode: string;
  };
  navigation: {
    id: string;
    label: string;
    badge?: string;
  }[];
  hero: {
    badge: string;
    titleLines: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mainImage: string;
    secondaryImage: string;
    milestones: {
      value: string;
      label: string;
    }[];
    rightPromos: {
      id: string;
      tag: string;
      title: string;
      desc: string;
      image: string;
    }[];
  };
  flashSale: {
    title: string;
    subtitle: string;
    items: BachLongProduct[];
  };
  catalogSections: {
    id: "apple" | "samsung" | "b2b_combo" | "accessory";
    title: string;
    subtitle: string;
    bannerTag: string;
    filterPills: string[];
  }[];
  products: BachLongProduct[];
  tradeInDevices: TradeInDeviceOption[];
  enterpriseBenefits: {
    id: string;
    title: string;
    desc: string;
    metric: string;
  }[];
  showrooms: {
    id: string;
    district: string;
    address: string;
    hours: string;
    hotline: string;
  }[];
}

export const mockData: BachLongMockData = {
  business: {
    name: "Hệ Thống Phân Phối Thiết Bị Công Nghệ Bạch Long Pro",
    brandLeft: "bach",
    brandRight: "long",
    brandSince: "since 2006",
    brandSub: "mobile & B2B pro",
    establishedYears: 18,
    headline:
      "DOANH NGHIỆP 18 NĂM DẪN ĐẦU THỊ TRƯỜNG SMARTPHONE VÀ THIẾT BỊ CÔNG NGHỆ",
    subHeadline: "Mang lại trải nghiệm công nghệ tốt nhất cho bạn & Doanh nghiệp",
    phone: ["1900 63 64 69", "0908 038 038"],
    email: ["b2b@bachlongmobile.com", "cskh@bachlongmobile.com"],
    address: "134 - 136 Trần Phú, Phường 4, Quận 5, TP. Hồ Chí Minh",
    taxCode: "0304678912",
  },
  navigation: [
    { id: "flash-sale", label: "GIỜ VÀNG 18 NĂM", badge: "HOT" },
    { id: "apple", label: "APPLE VN/A (AAR)" },
    { id: "samsung", label: "SAMSUNG FLAGSHIP" },
    { id: "b2b_combo", label: "CUNG ỨNG B2B DOANH NGHIỆP", badge: "VAT 10%" },
    { id: "accessory", label: "PHỤ KIỆN & TRẠM SẠC" },
    { id: "trade-in", label: "THU CŨ ĐỔI MỚI 100%" },
    { id: "showrooms", label: "HỆ THỐNG 15 SHOWROOM" },
  ],
  hero: {
    badge: "KỶ NIỆM 18 NĂM UY TÍN (2006 - 2024)",
    titleLines: [
      "DOANH NGHIỆP 18 NĂM",
      "DẪN ĐẦU THỊ TRƯỜNG",
      "SMARTPHONE VÀ",
      "THIẾT BỊ CÔNG NGHỆ",
    ],
    subtitle: "Mang lại trải nghiệm công nghệ tốt nhất cho bạn",
    ctaPrimary: "BÁO GIÁ SỈ & DỰ ÁN B2B",
    ctaSecondary: "SĂN DEAL KỶ NIỆM 18 NĂM",
    mainImage:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=900&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    milestones: [
      { value: "18 Năm", label: "Tiên phong phân phối Smartphone chính hãng" },
      { value: "Apple AAR", label: "Đại lý Ủy quyền Chính thức Apple Việt Nam" },
      { value: "2.500+", label: "Đối tác Doanh nghiệp & Tập đoàn B2B" },
      { value: "1 Đổi 1", label: "Bảo hành Toàn diện 12 tháng Lỗi là Đổi mới" },
    ],
    rightPromos: [
      {
        id: "rp-1",
        tag: "APPLE AUTHORIZED RESELLER",
        title: "Cung Ứng iPhone / iPad / MacBook Số Lượng Lớn Cho Doanh Nghiệp",
        desc: "Chiết khấu B2B lên đến 12% • Hỗ trợ cài đặt MDM quản lý thiết bị từ xa • Xuất hóa đơn VAT điện tử trong ngày",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "rp-2",
        tag: "THU CŨ ĐỔI MỚI LÊN ĐỜI",
        title: "Trợ Giá Thu Máy Cũ Lên Đến 4.000.000đ • Không Lo Bù Tiền",
        desc: "Thẩm định máy nhanh trong 5 phút tại 15 Showroom Bạch Long • Hỗ trợ trả góp 0% qua 26 ngân hàng",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  flashSale: {
    title: "ĐẠI TIỆC SINH NHẬT 18 NĂM - DEAL SỐC GIỜ VÀNG",
    subtitle: "Cam kết giá tốt nhất thị trường • Hoàn tiền gấp đôi nếu ở đâu rẻ hơn",
    items: [
      {
        id: "fs-bl-1",
        name: "iPhone 15 Pro Max 256GB Titan Tự Nhiên Chính Hãng VN/A",
        sku: "BL-IP15PM-256",
        category: "apple",
        price: "28.890.000 ₫",
        oldPrice: "34.990.000 ₫",
        b2bBulkPrice: "27.990.000 ₫ (Từ 5 máy)",
        discountPercent: 17,
        installmentText: "Trả góp 0% • Trả trước 2.880.000đ",
        tradeInSubsidy: "Trợ giá thu cũ 3.500.000đ",
        badge: "Giá Sốc 18 Năm",
        image:
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        specs: ["Chip A17 Pro 3nm", "Khung Titan Cấp Độ 5", "Zoom Quang 5x"],
        giftText: "Tặng Củ sạc nhanh Apple 20W + Ốp lưng MagSafe chính hãng",
        warranty: "12 tháng Chính hãng Apple VN/A",
      },
      {
        id: "fs-bl-2",
        name: "iPhone 15 Plus 128GB Hồng Pastel Chính Hãng VN/A",
        sku: "BL-IP15PL-128",
        category: "apple",
        price: "21.690.000 ₫",
        oldPrice: "25.990.000 ₫",
        b2bBulkPrice: "20.990.000 ₫ (Từ 5 máy)",
        discountPercent: 16,
        installmentText: "Trả góp 0% • Trả trước 2.100.000đ",
        tradeInSubsidy: "Trợ giá thu cũ 2.500.000đ",
        badge: "Bán Chạy #1",
        image:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80",
        specs: ["Màn hình 6.7\" Dynamic Island", "Camera 48MP", "Cổng USB-C"],
        giftText: "Tặng Dán cường lực KingKong + Gói bảo hành VIP 24 tháng",
        warranty: "12 tháng Chính hãng Apple VN/A",
      },
      {
        id: "fs-bl-3",
        name: "Samsung Galaxy S24 Ultra 5G 12GB/256GB Chính Hãng SSVN",
        sku: "BL-S24U-256",
        category: "samsung",
        price: "25.490.000 ₫",
        oldPrice: "33.990.000 ₫",
        b2bBulkPrice: "24.590.000 ₫ (Từ 5 máy)",
        discountPercent: 25,
        installmentText: "Trả góp 0% • Duyệt hồ sơ 10 phút",
        tradeInSubsidy: "Trợ giá thu cũ 4.000.000đ",
        badge: "Galaxy AI",
        image:
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
        specs: ["Snapdragon 8 Gen 3 For Galaxy", "Khung Titan", "Bút S-Pen AI"],
        giftText: "Tặng Củ sạc Samsung 45W + Bao da Smart View Wallet Case",
        warranty: "12 tháng Samsung Việt Nam + Samsung Care+",
      },
      {
        id: "fs-bl-4",
        name: "MacBook Air M3 13.6 inch 2024 8GB/256GB Chính Hãng SA/A",
        sku: "BL-MBA-M3-256",
        category: "apple",
        price: "25.790.000 ₫",
        oldPrice: "28.990.000 ₫",
        b2bBulkPrice: "24.890.000 ₫ (Từ 5 máy)",
        discountPercent: 11,
        installmentText: "Trả góp 0% qua Thẻ Tín Dụng",
        tradeInSubsidy: "Trợ giá thu cũ 3.000.000đ",
        badge: "Mới 2024",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        specs: ["Chip Apple M3 8-Core", "Pin 18 Giờ", "Hỗ trợ 2 màn hình rời"],
        giftText: "Tặng Túi chống sốc Tomtoc + Chuột Bluetooth Logitech",
        warranty: "12 tháng Chính hãng Apple Việt Nam",
      },
    ],
  },
  catalogSections: [
    {
      id: "apple",
      title: "ĐẠI LÝ ỦY QUYỀN APPLE CHÍNH HÃNG VN/A (AAR)",
      subtitle: "Cam kết 100% nguyên seal Apple Việt Nam • Bảo hành tại trung tâm ủy quyền toàn quốc",
      bannerTag: "APPLE AUTHORIZED RESELLER",
      filterPills: ["Tất cả", "iPhone 15 Series", "iPad Pro / Air", "MacBook M3", "Apple Watch"],
    },
    {
      id: "samsung",
      title: "CHUYÊN TRANG SAMSUNG GALAXY & FLAGSHIP ANDROID",
      subtitle: "Trải nghiệm quyền năng Galaxy AI • Chính sách chiết khấu đặc quyền cho khách hàng Doanh nghiệp",
      bannerTag: "SAMSUNG PREMIUM PARTNER",
      filterPills: ["Tất cả", "Galaxy S24 Series", "Galaxy Z Fold / Flip", "Galaxy Tab S9", "Điện thoại 5G"],
    },
    {
      id: "b2b_combo",
      title: "GÓI CUNG ỨNG THIẾT BỊ CÔNG NGHỆ DOANH NGHIỆP (B2B ENTERPRISE)",
      subtitle: "Giải pháp trang bị đồng bộ Smartphone, Tablet POS, Laptop & Quà tặng đối tác có xuất VAT 10%",
      bannerTag: "B2B CORPORATE SOLUTIONS",
      filterPills: ["Tất cả", "Combo Tablet POS", "Smartphone Đội Sales", "Laptop Văn Phòng", "Quà Tặng Khắc Logo"],
    },
    {
      id: "accessory",
      title: "PHỤ KIỆN CHÍNH HÃNG & TRẠM SẠC VĂN PHÒNG",
      subtitle: "Đầy đủ phụ kiện Apple, Anker, Belkin, UAG, Mophie bảo hành 1 đổi 1 trong 18 tháng",
      bannerTag: "GENUINE ACCESSORIES",
      filterPills: ["Tất cả", "Sạc Nhanh GaN", "Pin Dự Phòng", "Tai Nghe AirPods", "Hub & Cáp Chuyển"],
    },
  ],
  products: [
    // APPLE (4 items)
    {
      id: "bl-ap-1",
      name: "iPhone 15 Pro 128GB Titan Xanh Chính Hãng VN/A",
      sku: "AP-15P-128BL",
      category: "apple",
      price: "24.690.000 ₫",
      oldPrice: "28.990.000 ₫",
      b2bBulkPrice: "23.950.000 ₫",
      discountPercent: 15,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 3.000.000đ",
      badge: "VN/A",
      image:
        "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=500&q=80",
      specs: ["Màn hình 6.1\" 120Hz ProMotion", "Chip A17 Pro", "Nút Action Button"],
      giftText: "Giảm thêm 500.000đ khi thanh toán chuyển khoản B2B",
      warranty: "12 tháng Apple VN/A",
    },
    {
      id: "bl-ap-2",
      name: "iPad Air 6 M2 11 inch WiFi 128GB Chính Hãng VN/A",
      sku: "AP-IPADAIR6-128",
      category: "apple",
      price: "15.890.000 ₫",
      oldPrice: "16.990.000 ₫",
      b2bBulkPrice: "15.290.000 ₫",
      discountPercent: 7,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 2.000.000đ",
      badge: "Chip M2",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
      specs: ["Chip Apple M2 mạnh mẽ", "Hỗ trợ Apple Pencil Pro", "Camera ngang 12MP"],
      giftText: "Tặng Bao da thông minh trị giá 690.000đ",
      warranty: "12 tháng Apple VN/A",
    },
    {
      id: "bl-ap-3",
      name: "MacBook Pro 14 inch M3 Pro 18GB/512GB Space Black",
      sku: "AP-MBP14-M3P",
      category: "apple",
      price: "47.490.000 ₫",
      oldPrice: "52.990.000 ₫",
      b2bBulkPrice: "45.900.000 ₫",
      discountPercent: 10,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 4.000.000đ",
      badge: "Enterprise",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
      specs: ["Chip M3 Pro 11-Core CPU", "RAM 18GB Unified", "Màn Liquid Retina XDR"],
      giftText: "Tặng phần mềm Office 365 Bản quyền + Balo Bạch Long",
      warranty: "12 tháng Apple VN/A",
    },
    {
      id: "bl-ap-4",
      name: "Apple Watch Series 9 41mm GPS Viền Nhôm Dây Cao Su",
      sku: "AP-AWS9-41",
      category: "apple",
      price: "8.990.000 ₫",
      oldPrice: "10.490.000 ₫",
      b2bBulkPrice: "8.590.000 ₫",
      discountPercent: 14,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 1.000.000đ",
      badge: "Chính Hãng",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
      specs: ["Chip S9 SiP", "Chạm hai lần Double Tap", "Độ sáng 2000 nits"],
      giftText: "Tặng Dán PPF full màn hình miễn phí",
      warranty: "12 tháng Apple VN/A",
    },

    // SAMSUNG (4 items)
    {
      id: "bl-ss-1",
      name: "Samsung Galaxy Z Fold6 5G 12GB/256GB Xám Tuyệt Tác",
      sku: "SS-ZFOLD6-256",
      category: "samsung",
      price: "38.990.000 ₫",
      oldPrice: "43.990.000 ₫",
      b2bBulkPrice: "37.490.000 ₫",
      discountPercent: 11,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 5.000.000đ",
      badge: "Flagship VIP",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80",
      specs: ["Màn hình gập 7.6 inch Dynamic AMOLED 2X", "Trợ lý Note Assist AI", "Kháng nước IP48"],
      giftText: "Tặng gói Samsung Care+ 1 năm + Bảo hành 24 tháng",
      warranty: "24 tháng Samsung Việt Nam",
    },
    {
      id: "bl-ss-2",
      name: "Samsung Galaxy Z Flip6 5G 12GB/256GB Xanh Mint",
      sku: "SS-ZFLIP6-256",
      category: "samsung",
      price: "23.990.000 ₫",
      oldPrice: "28.990.000 ₫",
      b2bBulkPrice: "22.900.000 ₫",
      discountPercent: 17,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 3.500.000đ",
      badge: "Hot Trend",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
      specs: ["Camera 50MP FlexCam", "Màn hình phụ FlexWindow 3.4\"", "Pin 4000mAh"],
      giftText: "Tặng Ốp lưng Flipsuit chính hãng + Củ sạc 25W",
      warranty: "12 tháng Samsung Việt Nam",
    },
    {
      id: "bl-ss-3",
      name: "Samsung Galaxy Tab S9 Ultra 5G 12GB/256GB Kèm Bút S-Pen",
      sku: "SS-TABS9U-256",
      category: "samsung",
      price: "24.490.000 ₫",
      oldPrice: "32.990.000 ₫",
      b2bBulkPrice: "23.500.000 ₫",
      discountPercent: 26,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 3.000.000đ",
      badge: "Giảm Sâu",
      image:
        "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
      specs: ["Màn hình khổng lồ 14.6 inch", "Kháng nước IP68 cả máy & bút", "Samsung DeX như Laptop"],
      giftText: "Ưu đãi mua kèm Bao da bàn phím Book Cover giảm 50%",
      warranty: "12 tháng Samsung Việt Nam",
    },
    {
      id: "bl-ss-4",
      name: "Samsung Galaxy A55 5G 8GB/128GB Viền Kim Loại Cao Cấp",
      sku: "SS-A55-128",
      category: "samsung",
      price: "8.690.000 ₫",
      oldPrice: "9.990.000 ₫",
      b2bBulkPrice: "8.190.000 ₫",
      discountPercent: 13,
      installmentText: "Trả góp 0%",
      tradeInSubsidy: "Trợ giá 1.000.000đ",
      badge: "Bán Chạy",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
      specs: ["Bảo mật Samsung Knox Vault", "Khung viền kim loại", "Camera chống rung OIS"],
      giftText: "Chiết khấu đặc biệt cho đơn hàng trang bị nhân viên",
      warranty: "12 tháng Samsung Việt Nam",
    },

    // B2B COMBO (4 items)
    {
      id: "bl-b2b-1",
      name: "Gói 10 Máy Tính Bảng iPad Gen 10 64GB Cho Chuỗi Nhà Hàng / POS",
      sku: "B2B-IPAD10-PACK10",
      category: "b2b_combo",
      price: "89.900.000 ₫",
      oldPrice: "104.900.000 ₫",
      b2bBulkPrice: "8.990.000 ₫ / máy (Bộ 10 máy)",
      discountPercent: 14,
      installmentText: "Hợp đồng công nợ B2B linh hoạt",
      tradeInSubsidy: "Tặng kèm chân đế POS chống trộm",
      badge: "Combo B2B",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
      specs: ["10x iPad Gen 10 10.9\" WiFi", "Tích hợp sẵn MDM quản trị", "Xuất VAT 10% hợp lệ"],
      giftText: "Miễn phí cài đặt phần mềm Order/POS & Giao tận chuỗi cửa hàng",
      warranty: "12 tháng Apple VN/A + Hỗ trợ kỹ thuật Onsite",
    },
    {
      id: "bl-b2b-2",
      name: "Lô 20 Smartphone Samsung Galaxy A15 128GB Cho Đội Ngũ Sales / DMS",
      sku: "B2B-SSA15-PACK20",
      category: "b2b_combo",
      price: "79.800.000 ₫",
      oldPrice: "99.800.000 ₫",
      b2bBulkPrice: "3.990.000 ₫ / máy (Bộ 20 máy)",
      discountPercent: 20,
      installmentText: "Chiết khấu thương mại trực tiếp",
      tradeInSubsidy: "Tặng SIM Data 4G Doanh nghiệp",
      badge: "B2B Best Seller",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
      specs: ["Pin 5000mAh định vị GPS liên tục", "Màn hình Super AMOLED rõ ngoài trời", "Quản lý Knox"],
      giftText: "Tặng sẵn ốp lưng chống sốc + Dán cường lực cho cả 20 máy",
      warranty: "12 tháng Chính hãng toàn quốc",
    },
    {
      id: "bl-b2b-3",
      name: "Combo 05 Laptop MacBook Air M2 13.6 inch Trang Bị Khối Văn Phòng",
      sku: "B2B-MBAM2-PACK5",
      category: "b2b_combo",
      price: "114.500.000 ₫",
      oldPrice: "134.950.000 ₫",
      b2bBulkPrice: "22.900.000 ₫ / máy (Bộ 5 máy)",
      discountPercent: 15,
      installmentText: "Hỗ trợ thuê mua tài chính Doanh nghiệp",
      tradeInSubsidy: "Thu đổi dàn PC/Laptop cũ văn phòng",
      badge: "Giá Sỉ Dự Án",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
      specs: ["05x MacBook Air M2 Chính hãng", "Tặng 05 Hub Type-C 7-in-1", "Bảo hành tận nơi"],
      giftText: "Khắc Laser tên/logo công ty miễn phí lên vỏ máy",
      warranty: "12 tháng Apple VN/A",
    },
    {
      id: "bl-b2b-4",
      name: "Bộ 50 Pin Sạc Dự Phòng Anker MagGo 10000mAh Khắc Logo Quà Tặng VIP",
      sku: "B2B-ANKER-GIFT50",
      category: "b2b_combo",
      price: "49.500.000 ₫",
      oldPrice: "65.000.000 ₫",
      b2bBulkPrice: "990.000 ₫ / bộ (Đơn 50 bộ)",
      discountPercent: 24,
      installmentText: "Thiết kế hộp quà doanh nghiệp riêng",
      tradeInSubsidy: "Miễn phí khắc Laser UV",
      badge: "Quà Tặng B2B",
      image:
        "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=500&q=80",
      specs: ["Chuẩn sạc không dây Qi2 15W", "Tích hợp chân đế gập", "In ấn logo thương hiệu sắc nét"],
      giftText: "Tặng kèm túi giấy mỹ thuật & Thiệp tri ân đối tác",
      warranty: "18 tháng 1 đổi 1 Chính hãng Anker",
    },

    // ACCESSORIES (4 items)
    {
      id: "bl-acc-1",
      name: "Tai Nghe Apple AirPods Pro 2 Cổng Sạc MagSafe USB-C VN/A",
      sku: "ACC-APP2-USBC",
      category: "accessory",
      price: "5.590.000 ₫",
      oldPrice: "6.190.000 ₫",
      b2bBulkPrice: "5.350.000 ₫",
      discountPercent: 10,
      installmentText: "Giao nhanh 2 giờ",
      tradeInSubsidy: "Thu cũ AirPods đời đầu",
      badge: "Chính Hãng",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
      specs: ["Chống ồn chủ động ANC gấp 2 lần", "Kháng bụi & nước IP54", "Chip H2 âm thanh không gian"],
      giftText: "Tặng Case bảo vệ chống sốc cao cấp",
      warranty: "12 tháng Apple VN/A",
    },
    {
      id: "bl-acc-2",
      name: "Trạm Sạc Để Bàn Anker Prime 240W GaNPrime 4 Cổng Cho Văn Phòng",
      sku: "ACC-ANKER-240W",
      category: "accessory",
      price: "3.290.000 ₫",
      oldPrice: "4.190.000 ₫",
      b2bBulkPrice: "2.990.000 ₫",
      discountPercent: 21,
      installmentText: "Sẵn hàng tại 15 Showroom",
      tradeInSubsidy: "Bảo hành 18 tháng 1 đổi 1",
      badge: "GaN 240W",
      image:
        "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=500&q=80",
      specs: ["3 cổng USB-C + 1 cổng USB-A", "Sạc cùng lúc 2 chiếc MacBook Pro", "Kiểm soát nhiệt ActiveShield 2.0"],
      giftText: "Tặng cáp sạc nhanh USB-C to USB-C 100W",
      warranty: "18 tháng 1 đổi 1",
    },
    {
      id: "bl-acc-3",
      name: "Ốp Lưng Chống Sốc UAG Monarch Pro Kevlar Cho iPhone 15 Pro Max",
      sku: "ACC-UAG-15PM",
      category: "accessory",
      price: "1.890.000 ₫",
      oldPrice: "2.320.000 ₫",
      b2bBulkPrice: "1.690.000 ₫",
      discountPercent: 18,
      installmentText: "Hàng chính hãng UAG Mỹ",
      tradeInSubsidy: "Tích hợp vòng từ MagSafe",
      badge: "Chống Sốc 7.6m",
      image:
        "https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&w=500&q=80",
      specs: ["Sợi DuPont Kevlar siêu bền", "Chống rơi rớt từ độ cao 7.6 mét", "Bảo hành 10 năm"],
      giftText: "Giảm thêm 15% khi mua kèm máy tại Bạch Long",
      warranty: "10 năm Chính hãng",
    },
    {
      id: "bl-acc-4",
      name: "Hub Chuyển Đổi Belkin USB-C 7-in-1 Multiport Adapter HDMI 4K",
      sku: "ACC-BELKIN-7IN1",
      category: "accessory",
      price: "1.390.000 ₫",
      oldPrice: "1.790.000 ₫",
      b2bBulkPrice: "1.190.000 ₫",
      discountPercent: 22,
      installmentText: "Chuẩn Apple Store",
      tradeInSubsidy: "Bảo hành 24 tháng",
      badge: "Bán Chạy",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80",
      specs: ["Cổng HDMI 4K, 2x USB-A 3.0", "Sạc truyền qua PD 100W", "Khe đọc thẻ SD / MicroSD"],
      giftText: "Tặng túi nhung đựng phụ kiện du lịch",
      warranty: "24 tháng 1 đổi 1",
    },
  ],
  tradeInDevices: [
    {
      id: "ti-1",
      model: "iPhone 14 Pro Max 256GB VN/A",
      brand: "Apple",
      gradeAPrice: 21500000,
      gradeBPrice: 19200000,
      subsidyBonus: 3500000,
    },
    {
      id: "ti-2",
      model: "iPhone 13 Pro Max 128GB",
      brand: "Apple",
      gradeAPrice: 14800000,
      gradeBPrice: 13100000,
      subsidyBonus: 2500000,
    },
    {
      id: "ti-3",
      model: "Samsung Galaxy S23 Ultra 256GB",
      brand: "Samsung",
      gradeAPrice: 15900000,
      gradeBPrice: 14200000,
      subsidyBonus: 4000000,
    },
    {
      id: "ti-4",
      model: "MacBook Pro M1 13 inch 256GB",
      brand: "Apple",
      gradeAPrice: 17500000,
      gradeBPrice: 15800000,
      subsidyBonus: 3000000,
    },
  ],
  enterpriseBenefits: [
    {
      id: "eb-1",
      title: "Chiết Khấu Thương Mại B2B Lên Đến 15%",
      desc: "Báo giá sỉ cạnh tranh nhất thị trường cho đơn hàng từ 05 thiết bị trở lên, kèm hợp đồng nguyên tắc minh bạch.",
      metric: "Tiết kiệm 15%",
    },
    {
      id: "eb-2",
      title: "Hồ Sơ Pháp Lý & Hóa Đơn VAT 10% Chuẩn Chỉnh",
      desc: "Đầy đủ chứng nhận CO/CQ, tờ khai hải quan và hóa đơn GTGT điện tử xuất ngay trong ngày bàn giao thiết bị.",
      metric: "100% CO/CQ",
    },
    {
      id: "eb-3",
      title: "Triển Khai Apple Business Manager & Samsung Knox",
      desc: "Đội ngũ kỹ sư Bạch Long Pro hỗ trợ cấu hình quản trị thiết bị tập trung (MDM) miễn phí cho phòng IT doanh nghiệp.",
      metric: "Hỗ trợ IT 24/7",
    },
    {
      id: "eb-4",
      title: "Bảo Hành VIP 1 Đổi 1 & Cho Mượn Máy Dự Phòng",
      desc: "Cam kết cung cấp thiết bị thay thế tương đương trong suốt thời gian chờ bảo hành để không gián đoạn công việc.",
      metric: "1 Đổi 1 Ngay",
    },
  ],
  showrooms: [
    {
      id: "sr-1",
      district: "Trụ Sở Quận 5 (Flagship Apple AAR)",
      address: "134 - 136 Trần Phú, Phường 4, Quận 5, TP.HCM",
      hours: "08:30 - 21:30 (T2 - CN)",
      hotline: "1900 63 64 69 (Nhánh 101)",
    },
    {
      id: "sr-2",
      district: "Trung Tâm B2B Quận 1",
      address: "225 Trần Quang Khải, Phường Tân Định, Quận 1, TP.HCM",
      hours: "08:30 - 21:30 (T2 - CN)",
      hotline: "1900 63 64 69 (Nhánh 102)",
    },
    {
      id: "sr-3",
      district: "Showroom Quận 3",
      address: "194 Võ Văn Tần, Phường 5, Quận 3, TP.HCM",
      hours: "08:30 - 21:30 (T2 - CN)",
      hotline: "1900 63 64 69 (Nhánh 103)",
    },
    {
      id: "sr-4",
      district: "Showroom Quận Tân Bình",
      address: "316 - 318 Ba Tháng Hai, Phường 12, Quận 10, TP.HCM",
      hours: "08:30 - 21:30 (T2 - CN)",
      hotline: "1900 63 64 69 (Nhánh 104)",
    },
  ],
};
