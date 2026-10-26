import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TranAnhProduct {
  id: string;
  title: string;
  discountBadge?: string;
  price: string;
  image: string;
  specs: string[];
}

export interface TranAnhCategorySection {
  id: string;
  title: string;
  subLinks: string[];
  columns: 4 | 5;
  products: TranAnhProduct[];
}

export interface B2bProduct21Data extends ClonedTemplateBaseData {
  sidebarCategories: string[];
  storeLocations: Array<{
    id: string;
    address: string;
  }>;
  rightPromoBanners: {
    topTitle: string;
    topSubtitle: string;
    bottomTitle: string;
    bottomSubtitle: string;
  };
  sections: TranAnhCategorySection[];
}

export const b2bProduct21DefaultData: B2bProduct21Data = {
  business: {
    name: "TRANANH",
    phone: ["0126 922 0162", "1900 545 546"],
    email: ["cskh@trananh-dienmay.vn", "b2b@trananh-dienmay.vn"],
    address: "Số 1174 Đường Láng, Phường Láng Thượng, Quận Đống Đa, TP. Hà Nội",
    workingHours: "Mở cửa 08:00 - 21:30",
    rating: 4.9,
    reviewCount: 4120,
    aboutTitle: "Trung Tâm Phân Phối Điện Máy & Thiết Bị Công Nghiệp Trần Anh",
    aboutText: [
      "Chuyên gia điện máy – Hệ thống siêu thị phân phối Tivi, Tủ lạnh, Điều hòa, Gia dụng, Điện thoại và Thiết bị văn phòng chính hãng.",
    ],
  },
  sidebarCategories: [
    "Điện thoại",
    "Laptop",
    "Tablet",
    "Phụ kiện",
    "Điện gia dụng",
    "Tivi, Âm thanh",
    "Tủ lạnh",
    "Điều hòa",
    "Thiết bị văn phòng, máy in",
    "Máy tính bộ, màn hình",
  ],
  hero: {
    eyebrow: "LỘC CUỐI NĂM",
    title: "Sắm hàng to - Rinh quà lớn - TRÚNG 8 XE SH",
    subtitle: "Lộc cuối năm - Sắm hàng to - Rinh quà lớn • Giảm 5-20% • Tặng quà 200 ngàn - 2 triệu",
    ctaText: "Sắm ngay",
    ctaLink: "#dien-thoai",
    backgroundImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
  },
  storeLocations: [
    {
      id: "st-1",
      address: "Số 1174 Đường Láng, P. Láng Thượng, Q. Đống Đa, Tp. Hà Nội",
    },
    {
      id: "st-2",
      address: "Số 159 Thái Hà, P. Láng Hạ, Q. Đống Đa, Tp. Hà Nội",
    },
  ],
  rightPromoBanners: {
    topTitle: "Máy nước nóng Ariston",
    topSubtitle: "Tặng Bàn là khô Delites",
    bottomTitle: "GIA DỤNG SIÊU NHIỀU",
    bottomSubtitle: "GIÁ SIÊU TIẾT KIỆM",
  },
  sections: [
    {
      id: "dien-thoai",
      title: "ĐIỆN THOẠI",
      subLinks: ["Apple", "BlackBerry", "Motorola", "Nokia", "Samsung"],
      columns: 5,
      products: [
        {
          id: "ta-ph-1",
          title: "Điện Thoại Nokia 5 – Hàng Chính Hãng",
          discountBadge: "-12%",
          price: "3,750,000 ₫",
          image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình 5.2 inch IPS HD", "Vỏ nhôm nguyên khối bền bỉ"],
        },
        {
          id: "ta-ph-2",
          title: "Điện Thoại BlackBerry KEYone – Hàng Chính Hãng",
          price: "14,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=500&q=80",
          specs: ["Bàn phím thông minh cảm ứng", "Pin 3505mAh sạc nhanh"],
        },
        {
          id: "ta-ph-3",
          title: "Điện Thoại Motorola Moto G5S Plus – Hàng Chính Hãng",
          discountBadge: "-10%",
          price: "6,280,000 ₫ – 6,290,000 ₫",
          image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
          specs: ["Camera kép 13MP xóa phông", "Khung kim loại nguyên khối"],
        },
        {
          id: "ta-ph-4",
          title: "Điện Thoại Motorola Moto Z2 Play – Hàng Chính Hãng",
          discountBadge: "-12%",
          price: "9,650,000 ₫",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình Super AMOLED 5.5 inch", "Tương thích Moto Mods"],
        },
        {
          id: "ta-ph-5",
          title: "Điện Thoại Samsung Galaxy J7 Pro – Hàng Chính Hãng",
          discountBadge: "-16%",
          price: "5,860,000 ₫ – 6,050,000 ₫",
          image:
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80",
          specs: ["Camera khẩu độ f/1.7 chụp tối", "Pin 3600mAh bền bỉ"],
        },
        {
          id: "ta-ph-6",
          title: "Điện Thoại Samsung Galaxy Note 8 – Hàng Chính Hãng",
          discountBadge: "-11%",
          price: "19,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80",
          specs: ["Bút S-Pen đa năng", "Chống rung quang học kép OIS"],
        },
        {
          id: "ta-ph-7",
          title: "Điện Thoại Samsung Galaxy Note FE – Hàng Chính Hãng",
          price: "13,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80",
          specs: ["Kháng nước IP68", "Bảo mật mống mắt Iris Scanner"],
        },
        {
          id: "ta-ph-8",
          title: "Điện Thoại Samsung Galaxy S8 – Hàng Chính Hãng",
          discountBadge: "-14%",
          price: "15,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình vô cực 5.8 inch", "Vi xử lý Exynos 8895 10nm"],
        },
        {
          id: "ta-ph-9",
          title: "Điện Thoại iPhone 7 32GB – Hàng Chính Hãng",
          discountBadge: "-21%",
          price: "14,300,000 ₫",
          image:
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80",
          specs: ["Chip Apple A10 Fusion", "Loa kép Stereo sống động"],
        },
        {
          id: "ta-ph-10",
          title: "Điện Thoại iPhone X 64GB Chính Hãng VN/A",
          discountBadge: "-6%",
          price: "29,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình Super Retina OLED", "Nhận diện khuôn mặt Face ID"],
        },
      ],
    },
    {
      id: "laptop",
      title: "LAPTOP",
      subLinks: ["Macbook", "Asus", "Dell", "HP", "Lenovo"],
      columns: 4,
      products: [
        {
          id: "ta-lp-1",
          title: "Laptop HP ProBook 440 G3 T9S24PA Bạc",
          discountBadge: "-9%",
          price: "10,920,000 ₫",
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
          specs: ["Core i5 Skylake", "Thiết kế mỏng nhẹ doanh nhân"],
        },
        {
          id: "ta-lp-2",
          title: "Laptop HP Envy 13-ad074TU 2LR92PA Core i7-7500U/Win10 (13.3 inch) – Hàng Chính Hãng",
          discountBadge: "-9%",
          price: "24,280,000 ₫",
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
          specs: ["Viền màn hình siêu mỏng", "Ổ cứng SSD 256GB PCIe"],
        },
        {
          id: "ta-lp-3",
          title: "Laptop Lenovo ThinkPad T470 20HEA03LVA Core i5-7200U/DOS 14 inch – Hàng Chính Hãng",
          price: "29,690,000 ₫",
          image:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
          specs: ["Độ bền chuẩn quân đội", "Bảo hành 3 năm chính hãng"],
        },
        {
          id: "ta-lp-4",
          title: "Laptop Lenovo IdeaPad Y520-15IKBN 80WK00GBVN Core i7-7700HQ / Free Dos (15.6inch) – Hàng Chính Hãng",
          discountBadge: "-9%",
          price: "21,920,000 ₫",
          image:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
          specs: ["Card rời GTX 1050 4GB", "Bàn phím LED đỏ chuyên Game"],
        },
      ],
    },
    {
      id: "may-tinh-bang",
      title: "MÁY TÍNH BẢNG",
      subLinks: [
        "Ipad",
        "Samsung",
        "Kindle",
        "Mobell",
        "Huawei",
        "Beneve",
        "Cutepad",
        "Itel",
      ],
      columns: 5,
      products: [
        {
          id: "ta-tb-1",
          title: "Máy Tính Bảng cutePAD M7089 – Hàng Chính Hãng",
          discountBadge: "-37%",
          price: "1,449,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình 7 inch", "Kết nối WiFi học tập"],
        },
        {
          id: "ta-tb-2",
          title: "Máy Tính Bảng Beneve M1022H – Hàng Chính Hãng",
          discountBadge: "-18%",
          price: "4,490,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình 10.1 inch", "RAM 2GB / ROM 16GB"],
        },
        {
          id: "ta-tb-3",
          title: "Máy Tính Bảng Samsung Galaxy Tab E T561 – Hàng Chính Hãng",
          discountBadge: "-22%",
          price: "4,690,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình 9.6 inch", "Hỗ trợ khe SIM 3G"],
        },
        {
          id: "ta-tb-4",
          title: "Máy Tính Bảng Itel it1703 – Hàng Chính Hãng",
          discountBadge: "-4%",
          price: "2,190,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
          specs: ["Đàm thoại 2 SIM", "Pin 3500mAh"],
        },
        {
          id: "ta-tb-5",
          title: "Máy Tính Bảng Mobell Tab 8s – Hàng Chính Hãng",
          discountBadge: "-12%",
          price: "2,190,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình 8 inch IPS", "Thiết kế viền mỏng"],
        },
        {
          id: "ta-tb-6",
          title: "Máy Tính Bảng Huawei MediaPad T3 8.0 (Vàng) – Hàng Chính Hãng",
          discountBadge: "-7%",
          price: "3,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
          specs: ["Vỏ nhôm nguyên khối", "Kết nối 4G LTE"],
        },
        {
          id: "ta-tb-7",
          title: "iPad WiFi 128GB New 2017 – Hàng Nhập Khẩu",
          price: "10,990,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình Retina 9.7 inch", "Bộ nhớ 128GB"],
        },
        {
          id: "ta-tb-8",
          title: "iPad Pro 9.7 inch Wifi Cellular 32GB – Hàng Chính Hãng",
          discountBadge: "-13%",
          price: "16,320,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
          specs: ["Hỗ trợ Apple Pencil", "Màn hình True Tone"],
        },
        {
          id: "ta-tb-9",
          title: "Máy Tính Bảng CutePad Tab 4 M9601 – Hàng Chính Hãng",
          discountBadge: "-34%",
          price: "2,099,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=500&q=80",
          specs: ["Màn hình 9.6 inch", "Hỗ trợ thẻ nhớ 64GB"],
        },
        {
          id: "ta-tb-10",
          title: "Máy Đọc Sách Kindle 2017 (8th) – Đen",
          price: "2,790,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
          specs: ["Chống mỏi mắt tuyệt đối", "Lưu trữ hàng ngàn cuốn sách"],
        },
      ],
    },
    {
      id: "gia-dung",
      title: "GIA DỤNG",
      subLinks: [
        "Lò vi sóng",
        "Máy hút bụi",
        "Máy lọc nước",
        "Máy xay – Máy ép",
        "Nồi cơm điện",
      ],
      columns: 5,
      products: [
        {
          id: "ta-gd-1",
          title: "Máy Lọc Nước IRO 2.0 Karofi K9IQ -2",
          discountBadge: "-10%",
          price: "8,380,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=500&q=80",
          specs: ["9 cấp lọc thông minh", "Màn hình cảm ứng hiển thị TDS"],
        },
        {
          id: "ta-gd-2",
          title: "Máy Lọc Nước Pureit – 9L",
          discountBadge: "-12%",
          price: "2,099,000 ₫",
          image:
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
          specs: ["Không dùng điện", "Dung tích bình chứa 9 Lít"],
        },
        {
          id: "ta-gd-3",
          title: "Máy Hút Bụi Hitachi CV-SH18 Công Suất 1800W",
          discountBadge: "-21%",
          price: "1,899,000 ₫",
          image:
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&q=80",
          specs: ["Màng lọc HEPA kháng khuẩn", "Hộp chứa bụi 1.6 Lít"],
        },
        {
          id: "ta-gd-4",
          title: "Máy Hút Bụi Electrolux ZLUX1811 – Tím",
          discountBadge: "-41%",
          price: "1,399,000 ₫",
          image:
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=500&q=80",
          specs: ["Công nghệ lốc xoáy Cyclonic", "Thiết kế không túi chứa bụi"],
        },
        {
          id: "ta-gd-5",
          title: "Máy Vắt Cam DAEWOO DWJ-603 – Xanh",
          discountBadge: "-34%",
          price: "250,000 ₫",
          image:
            "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=500&q=80",
          specs: ["Tự động đảo chiều vắt kiệt nước", "Chất liệu nhựa nguyên sinh"],
        },
        {
          id: "ta-gd-6",
          title: "Máy Đánh Trứng Bluestone HMB-6333S",
          price: "590,000 ₫",
          image:
            "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=500&q=80",
          specs: ["Thân máy Inox 304 bền đẹp", "6 tốc độ đánh kem & nhồi bột"],
        },
        {
          id: "ta-gd-7",
          title: "Lò Vi Sóng Cơ Sharp R-21A1(S)VN – 22L",
          discountBadge: "-21%",
          price: "1,569,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=500&q=80",
          specs: ["Công suất 800W rã đông nhanh", "Khoang lò tráng men dễ lau chùi"],
        },
        {
          id: "ta-gd-8",
          title: "Lò Vi Sóng Điện Tử Sharp R-29D2(G)VN (22L)",
          discountBadge: "-31%",
          price: "1,999,000 ₫",
          image:
            "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=500&q=80",
          specs: ["Tích hợp chức năng nướng", "Bảng điều khiển tiếng Việt"],
        },
        {
          id: "ta-gd-9",
          title: "Nồi Cơm Điện Tử Philips HD3060 (0.7L) – Đen",
          discountBadge: "-15%",
          price: "1,439,000 ₫",
          image:
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
          specs: ["6 chế độ nấu tự động", "Lòng nồi chống dính 5 lớp"],
        },
        {
          id: "ta-gd-10",
          title: "Nồi Cơm Điện Philips HD3128/68 (2L) – Màu Đồng",
          discountBadge: "-15%",
          price: "1,279,000 ₫",
          image:
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
          specs: ["Lòng nồi tráng gương ProCeramic", "Giữ ấm tự động 48 giờ"],
        },
      ],
    },
    {
      id: "phu-kien",
      title: "PHỤ KIỆN",
      subLinks: [
        "Bao da – Ốp lưng – Dán màn hình",
        "Loa",
        "Máy nghe nhạc",
        "Phụ kiện âm thanh",
        "Tai nghe",
      ],
      columns: 5,
      products: [
        {
          id: "ta-pk-1",
          title: "Ốp Lưng Dẻo Cho iPhone 6 Plus/6s Plus – Gấu Kèm Thú Nổi",
          discountBadge: "-31%",
          price: "90,000 ₫",
          image:
            "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=500&q=80",
          specs: ["Silicone dẻo ôm khít máy", "Chống trầy xước mặt lưng"],
        },
        {
          id: "ta-pk-2",
          title: "Bao Da iPad Pro 10.5 inch UAG Metropolis – Hàng Chính Hãng",
          price: "1,034,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
          specs: ["Chống sốc chuẩn quân đội", "Tự động tắt/mở màn hình"],
        },
        {
          id: "ta-pk-3",
          title: "Thiết Bị Kết Nối Bluetooth Với Điện Thoại Kashimura BL-40 3.0",
          price: "749,000 ₫",
          image:
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
          specs: ["Thương hiệu Nhật Bản", "Đàm thoại rõ nét"],
        },
        {
          id: "ta-pk-4",
          title: "HD Headphone Amplifier Creative Sound Blaster E3 – Hàng Chính Hãng",
          discountBadge: "-9%",
          price: "3,245,000 ₫",
          image:
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
          specs: ["USB DAC/Amp di động", "Kết nối Bluetooth không dây"],
        },
        {
          id: "ta-pk-5",
          title: "Máy Nghe Nhạc Di Động Astell & Kern AK 320 Xám",
          discountBadge: "-9%",
          price: "43,279,000 ₫",
          image:
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
          specs: ["Chuẩn âm thanh phòng thu", "Bộ nhớ 128GB mở rộng"],
        },
      ],
    },
  ],
};
