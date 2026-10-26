import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat10ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  sectionKey:
    | "sidebar-bestseller"
    | "sidebar-sale"
    | "tieu-bieu"
    | "tuong-phong-thuy"
    | "go-lien-tam";
  categoryName: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
  image: string;
}

export interface NoiThat10PromoBanner {
  id: string;
  line1: string;
  line2: string;
  ctaText: string;
  image: string;
}

export interface NoiThat10TemplateData extends ClonedTemplateBaseData {
  featuredSubtitle: string;
  statuesSubtitle: string;
  solidSlabsSubtitle: string;
  sidebarMegaSalePercent: string;
  promoBanners: NoiThat10PromoBanner[];
  products: NoiThat10ProductItem[];
}

export const noiThat10DefaultData: NoiThat10TemplateData = {
  business: {
    name: "MONA WOODEN",
    logo: "",
    phone: ["0126 - 922 - 0162", "0909 889 998"],
    email: ["info@themona.global", "cskh@monawooden.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "9h - 18h : Thứ 2 - Thứ 6",
    rating: 4.9,
    reviewCount: 465,
    experienceYears: "15+",
    aboutTitle: "Chế Tác Nội Thất Gỗ Tự Nhiên & Điêu Khắc Phong Thủy Cao Cấp",
    aboutText: [
      "MONA WOODEN là xưởng chế tác và showroom chuyên cung cấp nội thất gỗ tự nhiên nguyên tấm Tây Nguyên, tượng gỗ phong thủy mỹ nghệ và vật phẩm trang trí phòng khách sang trọng.",
      "Mỗi tác phẩm đều được các nghệ nhân lành nghề chạm khắc thủ công từ những khối gỗ Hương, gỗ Cẩm, gỗ Trắc và gỗ Gõ Đỏ tuyển chọn kỹ lưỡng, bảo hành chất lượng gỗ trọn đời."
    ]
  },
  hero: {
    eyebrow: "VẺ ĐẸP SANG TRỌNG",
    title: "THIẾT KẾ KHÔNG GIAN ĐẸP",
    subtitle:
      "Tuyển chọn những tuyệt tác nội thất gỗ tự nhiên nguyên tấm, tượng gỗ phong thủy và phụ kiện trang trí thủ công nâng tầm đẳng cấp không gian sống.",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham-tieu-bieu",
    secondaryCtaText: "XEM THÊM",
    secondaryCtaLink: "#tuong-go-phong-thuy",
    backgroundImage:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  featuredSubtitle:
    "Tuyển chọn các tác phẩm điêu khắc gỗ mỹ nghệ và vật phẩm phong thủy chế tác thủ công tinh xảo.",
  statuesSubtitle:
    "Tác phẩm điêu khắc thủ công từ gỗ quý Tây Nguyên mang lại tài lộc, bình an và thịnh vượng cho gia chủ.",
  solidSlabsSubtitle:
    "Bàn ăn gỗ nguyên tấm, sập chiếu ngựa và phản gỗ tự nhiên Tây Nguyên vân tuyển chọn độc bản.",
  sidebarMegaSalePercent: "29%",
  promoBanners: [
    {
      id: "pb-1",
      line1: "TRANG TRÍ",
      line2: "PHÒNG KHÁCH",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pb-2",
      line1: "GỖ MỸ NGHỆ",
      line2: "THƯỞNG TRÀ",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    }
  ],
  products: [
    // Sidebar Bestsellers (6 items)
    {
      id: "mw-sb-1",
      title: "Tượng Khổng Minh Gỗ Hương",
      price: "10,500,000 ₫",
      sectionKey: "sidebar-bestseller",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 70cm x Rộng 26cm x Sâu 22cm",
      material: "Gỗ Hương Đá Tây Nguyên liền khối 100%",
      warranty: "Bảo hành gỗ 10 năm",
      description:
        "Tượng Gia Cát Khổng Minh biểu trưng cho trí tuệ uyên bác, công danh thuận lợi và sự nghiệp hanh thông.",
      image:
        "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-sb-2",
      title: "Bàn Ăn Gỗ Tự Nhiên Nguyên Tấm",
      price: "55,000,000 ₫",
      oldPrice: "70,000,000 ₫",
      discountBadge: "-21%",
      sectionKey: "sidebar-bestseller",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Dài 320cm x Rộng 105cm x Dày 16cm",
      material: "Gỗ Cẩm Lai tự nhiên nguyên tấm không chắp ghép",
      warranty: "Bảo hành trọn đời",
      description:
        "Mặt bàn gỗ tự nhiên nguyên tấm vân chun sụn cực hiếm, khẳng định vị thế và đẳng cấp phòng khách biệt thự.",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-sb-3",
      title: "Tượng Di Lặc Cưỡi Cá Chép Gỗ Hương",
      price: "14,000,000 ₫",
      sectionKey: "sidebar-bestseller",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 65cm x Rộng 58cm x Sâu 38cm",
      material: "Gỗ Hương Đỏ Gia Lai nguyên khối",
      warranty: "Bảo hành gỗ 10 năm",
      description:
        "Hình tượng Phật Di Lặc hoan hỷ cưỡi cá chép vượt vũ môn thu hút vượng khí, tài lộc và phú quý viên mãn.",
      image:
        "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-sb-4",
      title: "Ván Ngựa Chiếu Ngựa Gỗ Cẩm",
      price: "Liên hệ báo giá",
      sectionKey: "sidebar-bestseller",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Dài 300cm x Rộng 200cm x Dày 20cm (2 tấm ghép)",
      material: "Gỗ Cẩm Hồng tự nhiên nguyên khối",
      warranty: "Bảo hành trọn đời",
      description:
        "Bộ sập chiếu ngựa gỗ cẩm vân núi tuyển chọn, chế tác chuẩn mộng cổ truyền Việt Nam.",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-sb-5",
      title: "Tượng Tế Công Gỗ Trắc Đỏ Đen",
      price: "2,800,000 ₫",
      sectionKey: "sidebar-bestseller",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 38cm x Rộng 18cm x Sâu 16cm",
      material: "Gỗ Trắc Đỏ Đen tự nhiên quý hiếm",
      warranty: "Bảo hành gỗ 10 năm",
      description:
        "Nét đục thần thái tự tại, hóa giải hung khí và mang lại bình an, vui vẻ cho gia đạo.",
      image:
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-sb-6",
      title: "Tượng Đạt Ma Sư Tổ Gỗ Hương",
      price: "16,000,000 ₫",
      sectionKey: "sidebar-bestseller",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 95cm x Rộng 48cm x Sâu 35cm",
      material: "Gỗ Hương Ta gốc lũa tự nhiên nguyên khối",
      warranty: "Bảo hành gỗ 10 năm",
      description:
        "Tác phẩm Đạt Ma quá hải trấn trạch trừ tà mạnh mẽ, thích hợp bài trí tại sảnh lớn hoặc phòng khách.",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
    },

    // Main 3x3 Featured Grid ("SẢN PHẨM TIÊU BIỂU" - 9 items)
    {
      id: "mw-tb-1",
      title: "Cóc Thần Tài Gỗ Nu Hương",
      price: "4,800,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Vật Phẩm Phong Thủy",
      dimensions: "Dài 38cm x Rộng 34cm x Cao 28cm",
      material: "Gỗ Nu Hương Gia Lai hoa nu kín mặt",
      warranty: "Bảo hành 10 năm",
      description:
        "Thiềm Thừ 3 chân ngậm đồng tiền vàng chiêu tài giữ lộc cho quầy thu ngân, bàn thần tài và phòng khách.",
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-2",
      title: "Quả Cầu Đá Mắt Mèo Xanh Phong Thủy",
      price: "1,500,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Vật Phẩm Phong Thủy",
      dimensions: "Đường kính 14cm kèm đế gỗ Hương chạm hoa sen",
      material: "Đá thạch anh mắt mèo xanh tự nhiên",
      warranty: "Bảo hành 5 năm",
      description:
        "Hội tụ năng lượng dương tích cực, đặt trên bàn làm việc giúp minh mẫn tinh thần và hanh thông công việc.",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-3",
      title: "Đôi Hổ Gỗ Hương Phong Thủy",
      price: "900,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Tượng Gỗ Mỹ Nghệ",
      dimensions: "Dài 32cm x Rộng 14cm x Cao 18cm",
      material: "Gỗ Hương Đỏ nguyên khối chạm tay",
      warranty: "Bảo hành 5 năm",
      description:
        "Biểu tượng của quyền uy, bản lĩnh và sự thăng tiến vững chắc cho người lãnh đạo.",
      image:
        "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-4",
      title: "Hộp Đựng Giấy Ăn Gỗ Hương Ba Ngăn",
      price: "200,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Đồ Gỗ Tiện Ích",
      dimensions: "Dài 26cm x Rộng 18cm x Cao 12cm",
      material: "Gỗ Hương tự nhiên ghép mộng, sơn PU bóng mờ",
      warranty: "Bảo hành 24 tháng",
      description:
        "Thiết kế 3 ngăn thông minh vừa đựng khăn giấy vừa để điều khiển tivi, điện thoại gọn gàng trên bàn trà.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-5",
      title: "Tượng Chim Công Gỗ Hương Nguyên Khối",
      price: "3,800,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Tượng Gỗ Mỹ Nghệ",
      dimensions: "Cao 55cm x Rộng 42cm x Sâu 24cm",
      material: "Gỗ Hương Đá Tây Nguyên đục kênh bong sắc nét",
      warranty: "Bảo hành 10 năm",
      description:
        "Chim Khổng Tước xòe đuôi rực rỡ tượng trưng cho vẻ đẹp vương giả, hạnh phúc viên mãn và phú quý.",
      image:
        "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-6",
      title: "Tượng Di Lặc Cưỡi Cá Chép Gỗ Hương",
      price: "14,000,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 65cm x Rộng 58cm x Sâu 38cm",
      material: "Gỗ Hương Đỏ Gia Lai nguyên khối",
      warranty: "Bảo hành 10 năm",
      description:
        "Tuyệt tác điêu khắc Phật Di Lặc cưỡi cá chép mang lại nụ cười an nhiên và tài lộc dồi dào.",
      image:
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-7",
      title: "Bình Hoa Sen Gỗ Hương Đỏ 19 Cành",
      price: "6,000,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Đồ Thờ & Trang Trí",
      dimensions: "Cao 82cm x Đường kính tán hoa 50cm",
      material: "100% Gỗ Hương Đỏ tiện và chạm khắc thủ công",
      warranty: "Bảo hành 10 năm",
      description:
        "Bình hoa sen 19 cành thanh tao, tỏa hương gỗ tự nhiên dịu nhẹ nơi không gian phòng khách và phòng thờ.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-8",
      title: "Cặp Đèn Thờ Gỗ Hương Chạm Rồng",
      price: "4,000,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Đồ Thờ Gỗ Quý",
      dimensions: "Cao 68cm x Đường kính bầu 22cm (Bộ 2 cây)",
      material: "Gỗ Hương Đỏ nguyên khối tích hợp bóng LED ánh vàng ấm",
      warranty: "Bảo hành 5 năm",
      description:
        "Cặp đèn thờ gỗ hương tiện lục bình chạm lọng tinh xảo, tôn nghiêm không gian thờ tự gia tiên.",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-tb-9",
      title: "Tranh Gỗ Bát Mã Truy Phong Điêu Khắc Nổi",
      price: "6,500,000 ₫",
      sectionKey: "tieu-bieu",
      categoryName: "Tranh Gỗ Phong Thủy",
      dimensions: "Dài 127cm x Rộng 67cm x Dày 5cm",
      material: "Gỗ Hương Đỏ nguyên tấm đục sâu kênh bong 3D",
      warranty: "Bảo hành 10 năm",
      description:
        "Tranh gỗ Mã Đáo Thành Công khắc họa 8 chú ngựa phi nước đại mang lại khí thế bứt phá và thành công.",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=600&q=80"
    },

    // Section: TƯỢNG GỖ PHONG THỦY (5 items)
    {
      id: "mw-pt-1",
      title: "Đồng Nhi Chúc Phúc Gỗ Hương",
      price: "4,900,000 ₫",
      sectionKey: "tuong-phong-thuy",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 45cm x Rộng 30cm (Cặp Kim Đồng - Ngọc Nữ)",
      material: "Gỗ Hương Đá Tây Nguyên nguyên khối",
      warranty: "Bảo hành 10 năm",
      description:
        "Cặp tượng Đồng Nhi Chúc Phúc mang lại niềm vui con cháu sum vầy, gia đình êm ấm thuận hòa.",
      image:
        "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-pt-2",
      title: "Lão Vọng Câu Cá Gỗ Hương Đỏ",
      price: "6,800,000 ₫",
      sectionKey: "tuong-phong-thuy",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Dài 75cm x Rộng 38cm x Cao 32cm",
      material: "Gỗ Hương Đỏ lũa tự nhiên nguyên khối",
      warranty: "Bảo hành 10 năm",
      description:
        "Khắc họa hình ảnh Khương Tử Nha câu cá ung dung tự tại, biểu trưng cho sự kiên nhẫn và thời vận rực rỡ.",
      image:
        "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-pt-3",
      title: "Tượng Tế Công Gỗ Trắc",
      price: "2,800,000 ₫",
      sectionKey: "tuong-phong-thuy",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 38cm x Rộng 18cm x Sâu 16cm",
      material: "Gỗ Trắc Đỏ Đen tự nhiên",
      warranty: "Bảo hành 10 năm",
      description:
        "Đường nét chạm khắc sống động, giữ nguyên vân gỗ Trắc tự nhiên quý giá.",
      image:
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-pt-4",
      title: "Tượng Khổng Minh Gia Cát Lượng",
      price: "10,500,000 ₫",
      sectionKey: "tuong-phong-thuy",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 70cm x Rộng 26cm x Sâu 22cm",
      material: "Gỗ Hương Đá Tây Nguyên nguyên khối",
      warranty: "Bảo hành 10 năm",
      description:
        "Tượng gỗ phong thủy鎮 trạch và hỗ trợ đắc lực cho công danh, học vấn và kinh doanh.",
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-pt-5",
      title: "Tượng Trần Quốc Tuấn Gỗ Hương",
      price: "8,500,000 ₫",
      sectionKey: "tuong-phong-thuy",
      categoryName: "Tượng Gỗ Phong Thủy",
      dimensions: "Cao 75cm x Rộng 28cm x Sâu 24cm",
      material: "Gỗ Hương Đỏ nguyên khối chạm tay kỹ",
      warranty: "Bảo hành 10 năm",
      description:
        "Tượng Đức Thánh Trần uy nghiêm lẫm liệt giúp trấn trạch, xua đuổi tà khí và bảo hộ gia đình.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },

    // Section: GỖ LIỀN TẤM (5 items)
    {
      id: "mw-glt-1",
      title: "Phản Gỗ Cẩm Lai Nguyên Tấm Vân Tuyển",
      price: "68,000,000 ₫",
      oldPrice: "80,000,000 ₫",
      discountBadge: "-15%",
      sectionKey: "go-lien-tam",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Dài 310cm x Rộng 185cm x Dày 18cm",
      material: "Gỗ Cẩm Lai tự nhiên nguyên tấm",
      warranty: "Bảo hành trọn đời",
      description:
        "Phản gỗ nguyên tấm bề mặt bóng mịn như gương, vân gỗ xoáy tự nhiên độc bản.",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-glt-2",
      title: "Mặt Bàn Trà Gỗ Me Tây Nguyên Tấm Cạnh Tự Nhiên",
      price: "12,500,000 ₫",
      sectionKey: "go-lien-tam",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Dài 220cm x Rộng 92cm x Dày 10cm",
      material: "Gỗ Me Tây nguyên tấm sấy khô tiêu chuẩn xuất khẩu",
      warranty: "Bảo hành 10 năm",
      description:
        "Giữ trọn đường biên gỗ uốn lượn tự nhiên đầy nghệ thuật cho bàn ăn hoặc bàn họp lớn.",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-glt-3",
      title: "Bàn Ăn Tròn Gỗ Gõ Đỏ Nguyên Khối",
      price: "29,000,000 ₫",
      oldPrice: "58,000,000 ₫",
      discountBadge: "-50%",
      sectionKey: "go-lien-tam",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Đường kính 160cm x Dày 15cm kèm chân trụ đặc",
      material: "Gỗ Gõ Đỏ Pachy nguyên khối 100%",
      warranty: "Bảo hành trọn đời",
      description:
        "Bàn tròn nguyên tấm không chắp ghép, vân gỗ đỏ vàng vương giả.",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-glt-4",
      title: "Bàn K3 Gỗ Hương Đá Nguyên Tấm",
      price: "41,000,000 ₫",
      oldPrice: "50,000,000 ₫",
      discountBadge: "-18%",
      sectionKey: "go-lien-tam",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Bàn 280x98x14cm + 2 băng ghế dài nguyên tấm",
      material: "Gỗ Hương Đá nhập khẩu nguyên khối",
      warranty: "Bảo hành trọn đời",
      description:
        "Bộ bàn ghế K3 nguyên tấm bề thế, phù hợp cho cả không gian phòng khách và phòng ăn lớn.",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mw-glt-5",
      title: "Mặt Bàn Họp Gỗ Cẩm Hồng Nguyên Tấm",
      price: "45,000,000 ₫",
      oldPrice: "90,000,000 ₫",
      discountBadge: "-50%",
      sectionKey: "go-lien-tam",
      categoryName: "Gỗ Liền Tấm",
      dimensions: "Dài 360cm x Rộng 115cm x Dày 16cm",
      material: "Gỗ Cẩm Hồng nguyên tấm liền lạc không tâm rác",
      warranty: "Bảo hành trọn đời",
      description:
        "Khẳng định uy thế phòng chủ tịch và phòng khách biệt thự với tấm gỗ cẩm liền khối cỡ đại.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export default noiThat10DefaultData;
