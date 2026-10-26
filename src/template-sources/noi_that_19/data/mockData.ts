import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat19Product {
  id: string;
  section: "featured" | "dining" | "fridge" | "stove";
  tab: "SẢN PHẨM MỚI" | "BÁN CHẠY NHẤT" | "ĐANG KHUYẾN MÃI";
  category: string;
  name: string;
  oldPrice: string;
  price: string;
  discountBadge: string;
  image: string;
  ctaLabel?: string;
  description: string;
}

export interface NoiThat19Data extends ClonedTemplateBaseData {
  sidebarCategories: string[];
  products: NoiThat19Product[];
  brandLogos: Array<{ id: string; name: string; sub: string }>;
}

export const noiThat19DefaultData: NoiThat19Data = {
  business: {
    name: "KitchenLux Furniture",
    phone: ["0126 922 0162", "0909 888 162"],
    email: ["cskh@kitchenlux.vn", "tuvan@kitchenlux.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Từ 7h30 - 22h hàng ngày (Cả thứ 7 & Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1640,
    aboutTitle: "Siêu Thị Nội Thất Tủ Bếp & Thiết Bị Nhà Bếp KitchenLux",
    aboutText: [
      "Chuyên thiết kế, sản xuất thi công tủ bếp hiện đại chuẩn Nhật - Châu Âu và phân phối chính hãng bàn ghế ăn, thiết bị nhà bếp thông minh."
    ],
  },
  hero: {
    eyebrow: "THIẾT KẾ & THI CÔNG TỦ BẾP TRỌN GÓI",
    title: "Không Gian Bếp Hiện Đại & Đẳng Cấp Cho Gia Đình Việt",
    subtitle: "Tặng ngay gói thiết kế 3D & bộ phụ kiện thông minh khi đặt đóng tủ bếp trong tháng này",
    ctaText: "XEM BÁO GIÁ TỦ BẾP",
    ctaLink: "#san-pham-noi-bat",
    backgroundImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
  },
  sidebarCategories: [
    "Tủ Bếp",
    "Bàn Ăn",
    "Ghế Ăn",
    "Tủ Lạnh",
    "Lò Vi Sóng",
    "Các Loại Bếp",
    "Máy Hút Mùi",
    "Đèn Nhà Bếp",
    "Các Máy Khác",
    "Phụ Kiện Nhà Bếp",
    "Chậu Rửa - Vòi Rửa",
  ],
  products: [
    // Featured (5 items)
    {
      id: "nt19-f1",
      section: "featured",
      tab: "SẢN PHẨM MỚI",
      category: "LÒ VI SÓNG",
      name: "Lò vi sóng âm tủ có nướng đối lưu Sharp",
      oldPrice: "5,420,000 ₫",
      price: "5,120,000 ₫",
      discountBadge: "-6%",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=500&q=80",
      description:
        "Lò vi sóng tích hợp nướng đối lưu lắp âm tủ bếp sang trọng, dung tích 25 lít.",
    },
    {
      id: "nt19-f2",
      section: "featured",
      tab: "BÁN CHẠY NHẤT",
      category: "TỦ BẾP",
      name: "Tủ bếp Takara Standard – EDEL màu ESI",
      oldPrice: "20,598,000 ₫",
      price: "20,198,000 ₫",
      discountBadge: "-2%",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
      description:
        "Hệ tủ bếp thép tráng men kính cao cấp chống ẩm mốc, chống cháy và dễ vệ sinh trọn đời.",
    },
    {
      id: "nt19-f3",
      section: "featured",
      tab: "SẢN PHẨM MỚI",
      category: "TỦ LẠNH",
      name: "Tủ lạnh âm tủ Aqua Inverter 4 cánh",
      oldPrice: "7,535,000 ₫",
      price: "7,248,000 ₫",
      discountBadge: "-4%",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=500&q=80",
      description:
        "Thiết kế phẳng tối giản đồng bộ với hệ tủ bếp hiện đại, tiết kiệm điện năng Inverter.",
    },
    {
      id: "nt19-f4",
      section: "featured",
      tab: "ĐANG KHUYẾN MÃI",
      category: "GHẾ ĂN",
      name: "Ghế ăn Bắc Âu Eames PVC biznoithat",
      oldPrice: "985,200 ₫",
      price: "785,000 ₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
      description:
        "Ghế phòng ăn chân gỗ sồi tự nhiên kết hợp mặt đệm êm ái chuẩn công thái học.",
    },
    {
      id: "nt19-f5",
      section: "featured",
      tab: "BÁN CHẠY NHẤT",
      category: "MÁY HÚT MÙI",
      name: "Máy hút mùi đảo bếp Electrolux EFB90680BX",
      oldPrice: "15,050,000 ₫",
      price: "14,534,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
      description:
        "Công suất hút mạnh mẽ 1100m3/h, vận hành siêu êm với bộ lọc than hoạt tính khử mùi triệt để.",
    },

    // Dining Sets (8 items)
    {
      id: "nt19-d1",
      section: "dining",
      tab: "SẢN PHẨM MỚI",
      category: "BÀN ĂN",
      name: "Bộ bàn ăn 6 ghế mặt đá biznoithat BA-013a",
      oldPrice: "15,698,000 ₫",
      price: "15,247,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=80",
      description: "Bàn ăn mặt đá Ceramic chống trầy xước kèm 6 ghế bọc da cao cấp.",
    },
    {
      id: "nt19-d2",
      section: "dining",
      tab: "SẢN PHẨM MỚI",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn trắng hiện đại 4 ghế",
      oldPrice: "3,569,000 ₫",
      price: "3,398,000 ₫",
      discountBadge: "-5%",
      image:
        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=500&q=80",
      description: "Thiết kế nhỏ gọn tối ưu cho căn hộ chung cư hiện đại.",
    },
    {
      id: "nt19-d3",
      section: "dining",
      tab: "BÁN CHẠY NHẤT",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ cao su Manoo 6 ghế",
      oldPrice: "7,856,000 ₫",
      price: "7,658,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=500&q=80",
      description: "Gỗ tự nhiên tẩm sấy chống mối mọt, sơn PU 5 lớp bền đẹp.",
    },
    {
      id: "nt19-d4",
      section: "dining",
      tab: "BÁN CHẠY NHẤT",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn tròn xoay gỗ sồi Nga",
      oldPrice: "9,589,000 ₫",
      price: "9,267,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=500&q=80",
      description: "Bàn tròn mâm xoay ấm cúng cho bữa cơm sum họp gia đình.",
    },
    {
      id: "nt19-d5",
      section: "dining",
      tab: "ĐANG KHUYẾN MÃI",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ cao su tự nhiên 4 ghế",
      oldPrice: "5,050,000 ₫",
      price: "4,956,000 ₫",
      discountBadge: "-2%",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=500&q=80",
      description: "Kiểu dáng thanh lịch, đệm ghế bọc nỉ êm ái.",
    },
    {
      id: "nt19-d6",
      section: "dining",
      tab: "SẢN PHẨM MỚI",
      category: "BÀN ĂN",
      name: "Bộ bàn ghế ăn gỗ xoan đào chạm khắc",
      oldPrice: "6,549,000 ₫",
      price: "6,324,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=500&q=80",
      description: "Vân gỗ xoan đào đỏ trầm sang trọng, kết cấu mộng gỗ chắc chắn.",
    },
    {
      id: "nt19-d7",
      section: "dining",
      tab: "BÁN CHẠY NHẤT",
      category: "BÀN ĂN",
      name: "Bộ bàn ăn 6 ghế xuất khẩu Nhật BG-137B",
      oldPrice: "11,098,000 ₫",
      price: "10,980,000 ₫",
      discountBadge: "-1%",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=80",
      description: "Tiêu chuẩn xuất khẩu Nhật Bản tỉ mỉ từng đường nét bo góc.",
    },
    {
      id: "nt19-d8",
      section: "dining",
      tab: "ĐANG KHUYẾN MÃI",
      category: "BÀN ĂN",
      name: "Bộ bàn ăn xuất khẩu Nhật biznoithat BG-145",
      oldPrice: "8,575,000 ₫",
      price: "8,256,000 ₫",
      discountBadge: "-4%",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=500&q=80",
      description: "Gỗ tần bì nhập khẩu kết hợp mặt bàn phủ Melamine chống thấm.",
    },

    // Refrigerators (8 items)
    {
      id: "nt19-r1",
      section: "fridge",
      tab: "SẢN PHẨM MỚI",
      category: "TỦ LẠNH",
      name: "Tủ lạnh 3 cánh Electrolux Inverter",
      oldPrice: "20,050,000 ₫",
      price: "19,850,000 ₫",
      discountBadge: "-1%",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=500&q=80",
      description: "Ngăn đông mềm TasteSeal giữ thực phẩm tươi ngon 7 ngày không cần rã đông.",
    },
    {
      id: "nt19-r2",
      section: "fridge",
      tab: "BÁN CHẠY NHẤT",
      category: "TỦ LẠNH",
      name: "Tủ lạnh Panasonic PrimeFresh+ 322 lít",
      oldPrice: "8,545,000 ₫",
      price: "8,324,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=500&q=80",
      description: "Công nghệ kháng khuẩn Ag Clean bảo vệ sức khỏe gia đình.",
    },
    {
      id: "nt19-r3",
      section: "fridge",
      tab: "SẢN PHẨM MỚI",
      category: "TỦ LẠNH",
      name: "Tủ lạnh Aqua Magic Cooling mặt gương",
      oldPrice: "7,535,000 ₫",
      price: "7,248,000 ₫",
      discountBadge: "-4%",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=500&q=80",
      description: "Mặt kính tráng gương sang trọng hài hòa với tủ bếp Acrylic.",
    },
    {
      id: "nt19-r4",
      section: "fridge",
      tab: "ĐANG KHUYẾN MÃI",
      category: "TỦ LẠNH",
      name: "Tủ lạnh LG Smart Inverter DoorCooling",
      oldPrice: "5,789,000 ₫",
      price: "5,429,000 ₫",
      discountBadge: "-6%",
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=500&q=80",
      description: "Làm lạnh từ cánh tủ giúp đồ uống mát lạnh nhanh chóng.",
    },
    {
      id: "nt19-r5",
      section: "fridge",
      tab: "BÁN CHẠY NHẤT",
      category: "TỦ LẠNH",
      name: "Tủ lạnh Hitachi R-W660FPGV3X 540 lít",
      oldPrice: "38,579,000 ₫",
      price: "35,028,000 ₫",
      discountBadge: "-9%",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=500&q=80",
      description: "4 cánh mặt gương đen tích hợp lấy nước bên ngoài đẳng cấp.",
    },
    {
      id: "nt19-r6",
      section: "fridge",
      tab: "SẢN PHẨM MỚI",
      category: "TỦ LẠNH",
      name: "Tủ lạnh Hitachi Side-by-Side nhập khẩu",
      oldPrice: "72,586,000 ₫",
      price: "72,024,000 ₫",
      discountBadge: "-1%",
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=500&q=80",
      description: "Ngăn chân không độc quyền bảo toàn dưỡng chất thực phẩm.",
    },
    {
      id: "nt19-r7",
      section: "fridge",
      tab: "ĐANG KHUYẾN MÃI",
      category: "TỦ LẠNH",
      name: "Tủ lạnh Samsung RT38K5982SL 394 lít",
      oldPrice: "14,500,000 ₫",
      price: "14,250,000 ₫",
      discountBadge: "-2%",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=500&q=80",
      description: "Hai dàn lạnh độc lập Twin Cooling Plus không lẫn mùi thực phẩm.",
    },
    {
      id: "nt19-r8",
      section: "fridge",
      tab: "BÁN CHẠY NHẤT",
      category: "TỦ LẠNH",
      name: "Tủ lạnh Samsung Bespoke âm tường",
      oldPrice: "37,589,000 ₫",
      price: "37,050,000 ₫",
      discountBadge: "-1%",
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=500&q=80",
      description: "Phối màu mặt kính Bespoke theo đúng màu cánh tủ bếp gia chủ.",
    },

    // Stoves (8 items)
    {
      id: "nt19-s1",
      section: "stove",
      tab: "SẢN PHẨM MỚI",
      category: "CÁC LOẠI BẾP",
      name: "Bếp 3 Từ Âm Mặt Kính Schott Ceran AS 9503B",
      oldPrice: "6,578,000 ₫",
      price: "6,420,000 ₫",
      discountBadge: "-2%",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
      description: "Bếp từ 3 vùng nấu Booster siêu tốc, mặt kính Đức chịu nhiệt 1000 độ C.",
    },
    {
      id: "nt19-s2",
      section: "stove",
      tab: "ĐANG KHUYẾN MÃI",
      category: "CÁC LOẠI BẾP",
      name: "Bếp điện từ đơn bàn đảo Legend",
      oldPrice: "1,420,000 ₫",
      price: "1,254,000 ₫",
      discountBadge: "-12%",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=500&q=80",
      description: "Thiết kế siêu mỏng cảm ứng nhạy bén.",
    },
    {
      id: "nt19-s3",
      section: "stove",
      tab: "BÁN CHẠY NHẤT",
      category: "CÁC LOẠI BẾP",
      name: "Bếp từ kết hợp hồng ngoại ba vùng nấu Faber",
      oldPrice: "9,200,000 ₫",
      price: "8,650,000 ₫",
      discountBadge: "-6%",
      ctaLabel: "ĐỌC TIẾP",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
      description: "Nhập khẩu nguyên chiếc từ Ý, tích hợp khóa trẻ em an toàn.",
    },
    {
      id: "nt19-s4",
      section: "stove",
      tab: "ĐANG KHUYẾN MÃI",
      category: "CÁC LOẠI BẾP",
      name: "Bếp đôi âm mặt đá Electrolux",
      oldPrice: "1,852,000 ₫",
      price: "1,578,000 ₫",
      discountBadge: "-15%",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
      description: "Tiết kiệm nhiên liệu, tự động ngắt an toàn khi tràn nước.",
    },
    {
      id: "nt19-s5",
      section: "stove",
      tab: "SẢN PHẨM MỚI",
      category: "CÁC LOẠI BẾP",
      name: "Bếp âm kính cường lực Taka BG02A",
      oldPrice: "2,748,000 ₫",
      price: "2,478,200 ₫",
      discountBadge: "-10%",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
      description: "Lắp âm phẳng mặt đá bếp, kiềng gang đúc chống trượt nồi.",
    },
    {
      id: "nt19-s6",
      section: "stove",
      tab: "BÁN CHẠY NHẤT",
      category: "CÁC LOẠI BẾP",
      name: "Bếp đôi âm kính cao cấp Apex",
      oldPrice: "6,987,000 ₫",
      price: "6,575,000 ₫",
      discountBadge: "-6%",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=500&q=80",
      description: "Mặt kính vát 4 cạnh sang trọng, bảng điều khiển trượt Slide.",
    },
    {
      id: "nt19-s7",
      section: "stove",
      tab: "SẢN PHẨM MỚI",
      category: "CÁC LOẠI BẾP",
      name: "Bếp từ đôi âm tủ Goldsun Inverter",
      oldPrice: "6,950,000 ₫",
      price: "6,742,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80",
      description: "Công nghệ biến tần Inverter giữ nhiệt độ sôi liu riu ổn định.",
    },
    {
      id: "nt19-s8",
      section: "stove",
      tab: "BÁN CHẠY NHẤT",
      category: "CÁC LOẠI BẾP",
      name: "Bếp từ âm bàn bếp Electrolux EHI7260BB",
      oldPrice: "4,520,000 ₫",
      price: "4,399,000 ₫",
      discountBadge: "-3%",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
      description: "Hẹn giờ nấu độc lập cho từng vùng nấu tiện lợi.",
    },
  ],
  news: [
    {
      id: "n-1",
      title: "Kinh nghiệm chọn kích thước tủ bếp chuẩn phong thủy và công thái học cho người Việt",
      date: "18/05/2025",
      category: "CẨM NANG NHÀ BẾP",
      excerpt:
        "Không cần mất nhiều thời gian hay công sức, bạn có thể áp dụng ngay quy tắc tam giác bếp (Tủ lạnh - Chậu rửa - Bếp nấu) để việc nấu nướng thuận tiện nhất [...]",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "n-2",
      title: "So sánh tủ bếp gỗ công nghiệp MDF lõi xanh chống ẩm An Cường và tủ bếp Inox cánh kính",
      date: "15/05/2025",
      category: "VẬT LIỆU TỦ BẾP",
      excerpt:
        "Trước khí hậu nóng ẩm tại Việt Nam, việc lựa chọn cốt vật liệu thùng tủ bếp quyết định trực tiếp đến độ bền 15-20 năm của toàn bộ gian bếp [...]",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "n-3",
      title: "Khám phá 7 phụ kiện tủ bếp thông minh giúp nhân đôi diện tích lưu trữ cho bếp nhỏ",
      date: "12/05/2025",
      category: "PHỤ KIỆN BẾP",
      excerpt:
        "Bạn sẽ bất ngờ với giá bát nâng hạ tự động, kệ góc liên hoàn và thùng gạo âm tủ giúp căn bếp luôn gọn gàng ngăn nắp chuẩn Nhật Bản [...]",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "n-4",
      title: "Bí quyết chọn đá mặt bếp Thạch Anh nhân tạo chống thấm ố và chịu nhiệt hoàn hảo",
      date: "09/05/2025",
      category: "THIẾT KẾ NỘI THẤT",
      excerpt:
        "Từ nay những vết ố từ nghệ, cà phê hay dầu mỡ trên bàn đảo bếp sẽ không còn là nỗi lo ngại đối với người nội trợ hiện đại [...]",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ],
  brandLogos: [
    { id: "bl-1", name: "HÄFELE", sub: "GERMANY HARDWARE" },
    { id: "bl-2", name: "BLUM", sub: "AUSTRIA MOTION" },
    { id: "bl-3", name: "TAKARA", sub: "STANDARD JAPAN" },
    { id: "bl-4", name: "ELECTROLUX", sub: "SWEDEN APPLIANCES" },
    { id: "bl-5", name: "AN CƯỜNG", sub: "WOOD WORKING" },
    { id: "bl-6", name: "BOSCH", sub: "INVENTED FOR LIFE" },
    { id: "bl-7", name: "MALLOCA", sub: "SMART KITCHEN" },
  ],
};
