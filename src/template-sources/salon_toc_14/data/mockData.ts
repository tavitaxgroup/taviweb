import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ChronoBarberProduct {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  statusBadge?: "PHO_BIEN" | "HET_HANG";
  swatches?: string[];
  image: string;
  description: string;
}

export interface ChronoBarberReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ChronoBarberNews {
  id: string;
  category: string;
  title: string;
  author: string;
  comments: number;
  image: string;
  excerpt: string;
}

export interface SalonToc14Data extends ClonedTemplateBaseData {
  logoTextMain: string;
  logoTextDot: string;
  categoryDropdownLabel: string;
  recentViewedLabel: string;
  heroPartnersLabel: string;
  heroPartners: string[];
  modernSectionTitle: string;
  modernSectionDesc: string;
  modernLeftImage: string;
  modernRightImage: string;
  famousBrandsTitle: string;
  famousBrands: string[];
  limitedPromoTitle: string;
  limitedPromoItems: ChronoBarberProduct[];
  heritageTitle: string;
  heritageParagraph: string;
  heritageMainImage: string;
  heritageSubImage: string;
  heritageStats: { value: string; label: string }[];
  bestSellerTitle: string;
  bestSellerItems: ChronoBarberProduct[];
  midCtaBanner: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    backgroundImage: string;
  };
  newestSectionTitle: string;
  newestItems: ChronoBarberProduct[];
  craftsmanshipFeatures: {
    title: string;
    description: string;
    icon: "style" | "precision";
  }[];
  craftsmanshipImage: string;
  customerReviewsTitle: string;
  customerReviews: ChronoBarberReview[];
  newsSectionTitle: string;
  newsArticles: ChronoBarberNews[];
}

export const mockData: SalonToc14Data = {
  business: {
    name: "ChronoBarber Gentleman Salon",
    tagline: "Tận hưởng diện mạo lịch lãm và phụ kiện phong cách chuẩn Quý ông hiện đại",
    phone: ["(+84) 0313-728-397", "0909 789 888"],
    email: ["info@themona.global", "booking@chronobarber.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 1389,
    workingHours: "08:30 - 21:30 (Thứ 2 - Chủ Nhật)",
    aboutTitle: "HƠN 20 NĂM MỘT THƯƠNG HIỆU TẠO MẪU TÓC QUÝ ÔNG",
    aboutText: [
      "Chào mừng quý khách đến với ChronoBarber — Hệ thống Salon Tạo Mẫu Tóc Quý Ông, Chăm Sóc Râu Cổ Điển và Phụ Kiện Phong Cách chính hãng.",
      "Trải qua chặng đường hơn 20 năm định hình phong cách phái mạnh tại Sài Gòn, chúng tôi tự hào mang đến những kiểu tóc Pompadour, Side Part, Mohican sắc nét cùng hệ sinh thái sáp vuốt tóc, tinh dầu dưỡng râu và phụ kiện thượng lưu.",
    ],
  },
  hero: {
    eyebrow: "CHRONO BARBER BESPOKE",
    title: "KHÁM PHÁ THẾ GIỚI PHONG CÁCH QUÝ ÔNG",
    subtitle:
      "Khám phá nghệ thuật cắt tạo kiểu chuẩn Barber cổ điển kết hợp bộ sưu tập sản phẩm grooming & phụ kiện đẳng cấp mang đến trải nghiệm không thể nhầm lẫn.",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#khuyen-mai",
    secondaryCtaText: "Hỗ trợ →",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
  },
  navigation: [
    { label: "Trang chủ", href: "#trang-chu" },
    { label: "Giới thiệu", href: "#gioi-thieu" },
    { label: "Sản phẩm & Dịch vụ", href: "#khuyen-mai" },
    { label: "Tin tức", href: "#tin-tuc" },
    { label: "Liên hệ", href: "#lien-he" },
  ],
  stats: [
    { value: "1,745+", label: "Khách hàng thân thiết" },
    { value: "1,389+", label: "Đánh giá tích cực" },
  ],

  logoTextMain: "chrono barber",
  logoTextDot: ".",
  categoryDropdownLabel: "Danh mục",
  recentViewedLabel: "Đã xem gần đây",
  heroPartnersLabel: "ĐỐI TÁC NỔI BẬT",
  heroPartners: ["REUZEL", "WAHL 1919", "DYSON PRO", "MOROCCANOIL"],

  modernSectionTitle: "TẠO MẪU TÓC & GROOMING CHÍNH HÃNG",
  modernSectionDesc:
    "Chúng tôi tự hào là hệ thống Barber Salon & phân phối sản phẩm chăm sóc tóc quý ông uy tín hàng đầu, cam kết mang đến cho bạn diện mạo lịch lãm và dịch vụ tận tâm nhất.",
  modernLeftImage:
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
  modernRightImage:
    "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=900&q=80",

  famousBrandsTitle: "THƯƠNG HIỆU NỔI TIẾNG",
  famousBrands: [
    "REUZEL HOLLAND",
    "WAHL CLIPPER",
    "UPPERCUT DELUXE",
    "SUAVECITO",
    "BY VILAIN",
    "HANZ DE FUKO",
  ],

  limitedPromoTitle: "KHUYẾN MÃI GIỚI HẠN",
  limitedPromoItems: [
    {
      id: "lp-1",
      name: "COMBO CẮT TẠO KIỂU BESPOKE & GỘI DƯỠNG SINH",
      brand: "CHRONO SIGNATURE",
      price: "400,000₫",
      originalPrice: "480,000₫",
      discountBadge: "-17%",
      statusBadge: "PHO_BIEN",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
      description: "Tư vấn dáng tóc hợp khuôn mặt, cắt tạo kiểu, cạo mặt khăn nóng và đắp mặt nạ.",
    },
    {
      id: "lp-2",
      name: "SÁP VUỐT TÓC REUZEL EXTREME HOLD MATTE POMADE",
      brand: "REUZEL HOLLAND",
      price: "470,000₫",
      originalPrice: "540,000₫",
      discountBadge: "-13%",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      description: "Độ giữ nếp cực đại suốt 14 giờ, hoàn thiện mờ tự nhiên không bóng nhờn.",
    },
    {
      id: "lp-3",
      name: "TÔNG ĐƠ CHUYÊN NGHIỆP WAHL MAGIC CLIP CORDLESS",
      brand: "WAHL USA",
      price: "2,540,000₫",
      originalPrice: "2,990,000₫",
      discountBadge: "-15%",
      image:
        "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80",
      description: "Lưỡi răng lệch Stagger-Tooth giúp đi khung và fade tóc siêu mượt.",
    },
    {
      id: "lp-4",
      name: "MÁY CẠO KHÔ BABYLISS PRO FOILFX02 METAL",
      brand: "BABYLISS PRO",
      price: "2,800,000₫",
      originalPrice: "3,200,000₫",
      statusBadge: "PHO_BIEN",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      description: "Lưới cạo Titanium mạ vàng chống kích ứng da, cạo sát chân tóc trắng mịn.",
    },
    {
      id: "lp-5",
      name: "TINH DẦU DƯỠNG RÂU & TÓC ARGAN MOROCCANOIL",
      brand: "MOROCCANOIL",
      price: "890,000₫",
      originalPrice: "1,100,000₫",
      discountBadge: "-19%",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      description: "Làm mềm râu và phục hồi tóc uốn nhuộm với hương gỗ hổ phách nam tính.",
    },
    {
      id: "lp-6",
      name: "GÓI UỐN PREMLOCK / RUFFLE & PHỤC HỒI KERATIN",
      brand: "CHRONO SALON",
      price: "870,000₫",
      originalPrice: "1,050,000₫",
      discountBadge: "-17%",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      description: "Uốn sóng phồng tự nhiên, dễ dàng tạo kiểu tại nhà chỉ với 2 phút sấy.",
    },
    {
      id: "lp-7",
      name: "XỊT TẠO PHỒNG CHÂN TÓC BY VILAIN SIDEKICK ZERO",
      brand: "BY VILAIN DENMARK",
      price: "530,000₫",
      originalPrice: "620,000₫",
      discountBadge: "-15%",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      description: "Bảo vệ nhiệt máy sấy lên tới 200°C và tăng độ phồng gấp đôi cho tóc mỏng.",
    },
    {
      id: "lp-8",
      name: "BỘ KÉO CẮT & TỈA TÓC THÉP NHẬT VG10 MASTER",
      brand: "MIZUTANI STYLE",
      price: "1,819,000₫",
      originalPrice: "2,200,000₫",
      discountBadge: "-17%",
      image:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
      description: "Thép hợp kim Coban sắc bén, tay cầm công thái học giảm mỏi cổ tay.",
    },
    {
      id: "lp-9",
      name: "DẦU GỘI KHỬ VÀNG & GIỮ MÀU TÓC KHÓI OLAPLEX N4P",
      brand: "OLAPLEX USA",
      price: "680,000₫",
      originalPrice: "790,000₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description: "Duy trì sắc bạch kim, xám khói chuẩn salon và nối lại liên kết tủy tóc.",
    },
    {
      id: "lp-10",
      name: "NƯỚC HOA TÓC & SAU CẠO RÂU CLUBMAN PINAUD",
      brand: "CLUBMAN RESERVE",
      price: "380,000₫",
      originalPrice: "450,000₫",
      statusBadge: "PHO_BIEN",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80",
      description: "Làm dịu da tức thì sau khi cạo mặt, lưu hương rượu gỗ sồi cổ điển.",
    },
  ],

  heritageTitle: "HƠN 20 NĂM MỘT THƯƠNG HIỆU",
  heritageParagraph:
    "Chào mừng bạn đến với thương hiệu ChronoBarber của chúng tôi! Chúng tôi kết hợp nghệ thuật cắt tóc quý ông cổ điển cùng những dòng sản phẩm tạo kiểu và phụ kiện hàng đầu thế giới. Với sự đa dạng về phác đồ tạo mẫu, chất liệu sáp hữu cơ và kỹ thuật điêu luyện, chúng tôi tự tin giúp bạn khẳng định bản lĩnh riêng.",
  heritageMainImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  heritageSubImage:
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
  heritageStats: [
    { value: "1,745+", label: "Khách hàng thân thiết" },
    { value: "1,389+", label: "Đánh giá tích cực" },
  ],

  bestSellerTitle: "SẢN PHẨM BÁN CHẠY",
  bestSellerItems: [
    {
      id: "bs-1",
      name: "Sáp Vuốt Tóc Uppercut Deluxe Matte Pomade",
      brand: "Uppercut Australia",
      price: "470,000₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      description: "Giữ nếp trung bình – cao, dễ dàng gội sạch với nước ấm.",
    },
    {
      id: "bs-2",
      name: "Lược Tạo Phồng Chân Tóc Chuyên Dụng Quiff Roller",
      brand: "Chrono Gear",
      price: "230,000₫",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
      description: "Răng lược sợi nylon chịu nhiệt, cuộn phồng mái Pompadour dễ dàng.",
    },
    {
      id: "bs-3",
      name: "Gói Nhuộm Phủ Bạc Tự Nhiên Thảo Mộc Nhật Bản",
      brand: "Shiseido Men",
      price: "520,000₫ – 680,000₫",
      statusBadge: "PHO_BIEN",
      swatches: ["#1c1c1c", "#4a3728", "#6e5239"],
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
      description: "Phủ bạc 100% chỉ sau 35 phút, bóng mượt không khô da đầu.",
    },
    {
      id: "bs-4",
      name: "Tinh Chất Mọc Tóc & Dày Chân Mày Minoxidil 5%",
      brand: "Kirkland Signature",
      price: "630,000₫ – 750,000₫",
      swatches: ["#eb5757", "#2d3748"],
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      description: "Kích thích nang tóc phát triển mạnh mẽ sau 8 tuần sử dụng.",
    },
    {
      id: "bs-5",
      name: "Bộ Chăm Sóc Râu & Tóc Quý Ông Hoàng Gia 5 Món",
      brand: "Chrono Luxury",
      price: "1,350,000₫ – 2,150,000₫",
      statusBadge: "PHO_BIEN",
      swatches: ["#14532d", "#7f1d1d", "#1e293b"],
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description: "Bao gồm dầu gội, dầu dưỡng râu, lược gỗ đàn hương, sáp vuốt và kéo tỉa.",
    },
    {
      id: "bs-6",
      name: "Bột Tạo Phồng Tóc Tức Thì Slick Gorilla",
      brand: "Slick Gorilla UK",
      price: "400,000₫",
      statusBadge: "HET_HANG",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      description: "Tạo kết cấu texture tự nhiên không trọng lượng cho mái tóc mỏng.",
    },
    {
      id: "bs-7",
      name: "Gói Cắt Undercut & Điêu Khắc Hair Tattoo Nghệ Thuật",
      brand: "Master Barber",
      price: "440,000₫",
      originalPrice: "550,000₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      description: "Thực hiện bởi Giám đốc Kỹ thuật trên 10 năm kinh nghiệm.",
    },
    {
      id: "bs-8",
      name: "Sáp Vuốt Tóc Hanz de Fuko Claymation Siêu Giữ Nếp",
      brand: "Hanz de Fuko USA",
      price: "580,000₫ – 660,000₫",
      swatches: ["#0f172a", "#1e3a8a"],
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      description: "Chiết xuất đất sét tự nhiên kết hợp dầu Jojoba nuôi dưỡng chân tóc.",
    },
    {
      id: "bs-9",
      name: "Máy Sấy Tóc Chuyên Nghiệp Công Suất 2400W",
      brand: "Chrono Pro",
      price: "910,000₫",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      description: "Luồng gió mạnh tập trung giúp sấy ép side và dựng phồng cực nhanh.",
    },
    {
      id: "bs-10",
      name: "Dầu Gội Sạch Gàu & Mát Lạnh Bạc Hà Tigi Bed Head",
      brand: "Tigi For Men",
      price: "380,000₫",
      originalPrice: "460,000₫",
      discountBadge: "-17%",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      description: "Loại bỏ sạch sáp vuốt tóc và bã nhờn chỉ sau một lần gội.",
    },
  ],

  midCtaBanner: {
    title: "LIÊN HỆ NGAY NẾU CÓ THẮC MẮC",
    subtitle:
      "Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu đặt lịch riêng cùng Master Barber và chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    buttonLabel: "Liên hệ ngay →",
    backgroundImage:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1400&q=80",
  },

  newestSectionTitle: "SẢN PHẨM MỚI NHẤT",
  newestItems: [
    {
      id: "nw-1",
      name: "COMBO CẮT TẠO KIỂU BESPOKE & GỘI DƯỠNG SINH",
      brand: "CHRONO SIGNATURE",
      price: "400,000₫",
      originalPrice: "480,000₫",
      statusBadge: "PHO_BIEN",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
      description: "Trải nghiệm dịch vụ cắt tóc quý ông chuẩn mực quốc tế.",
    },
    {
      id: "nw-2",
      name: "SÁP VUỐT TÓC REUZEL EXTREME HOLD MATTE",
      brand: "REUZEL HOLLAND",
      price: "470,000₫",
      originalPrice: "540,000₫",
      discountBadge: "-13%",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      description: "Giữ nếp bền bỉ bất chấp mũ bảo hiểm và thời tiết nóng ẩm.",
    },
    {
      id: "nw-3",
      name: "TRỌN BỘ DỤNG CỤ MỞ SALON BARBER VIP 12 MÓN",
      brand: "CHRONO MASTER",
      price: "6,700,000₫",
      statusBadge: "PHO_BIEN",
      image:
        "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=600&q=80",
      description: "Đầy đủ tông đơ cắt, tông đơ chấn viền, máy cạo khô và bộ kéo Nhật.",
    },
    {
      id: "nw-4",
      name: "TÔNG ĐƠ CHUYÊN NGHIỆP WAHL MAGIC CLIP CORDLESS",
      brand: "WAHL USA",
      price: "2,540,000₫",
      originalPrice: "2,990,000₫",
      discountBadge: "-15%",
      image:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
      description: "Chiếc tông đơ huyền thoại có mặt tại mọi Barber Shop danh tiếng.",
    },
    {
      id: "nw-5",
      name: "MÁY CẠO KHÔ BABYLISS PRO FOILFX02 METAL",
      brand: "BABYLISS PRO",
      price: "2,800,000₫",
      originalPrice: "3,200,000₫",
      statusBadge: "PHO_BIEN",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      description: "Động cơ Ferrari 10.000 vòng/phút mạnh mẽ, vỏ kim loại nguyên khối.",
    },
  ],

  craftsmanshipFeatures: [
    {
      title: "Thể hiện phong cách",
      description:
        "Mái tóc và diện mạo chỉn chu không chỉ tôn vinh đường nét gương mặt mà còn tạo điểm nhấn thẩm mỹ và khí chất quý ông.",
      icon: "style",
    },
    {
      title: "Chuẩn xác từng khoảnh khắc",
      description:
        "Mỗi đường kéo, cữ lược và quy trình phục vụ tại ChronoBarber đều được căn chỉnh tỉ mỉ, đúng giờ hẹn của quý khách.",
      icon: "precision",
    },
  ],
  craftsmanshipImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",

  customerReviewsTitle: "KHÁCH HÀNG ĐÁNH GIÁ",
  customerReviews: [
    {
      id: "rev-1",
      name: "Anh Minh Hoàng",
      role: "Khách hàng VIP",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      quote:
        "Tôi đã cắt tóc tại ChronoBarber hơn 3 năm nay. Các bạn Master Barber cắt kiểu Side Part cổ điển rất sắc nét, lúc nào bước ra khỏi tiệm cũng tự tin hẳn.",
      rating: 5,
    },
    {
      id: "rev-2",
      name: "Anh Quốc Bảo",
      role: "Doanh nhân",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      quote:
        "Không gian cực kỳ lịch sự, mùi hương gỗ trầm thư giãn. Đặc biệt các dòng sáp vuốt tóc Reuzel và Hanz de Fuko tại đây đều chuẩn chính hãng 100%.",
      rating: 5,
    },
    {
      id: "rev-3",
      name: "Anh Tuấn Kiệt",
      role: "Kiến trúc sư",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      quote:
        "Dịch vụ đặt lịch trước rất đúng giờ, không phải chờ đợi. Combo cắt tạo kiểu kèm cạo mặt khăn nóng thực sự giúp xả stress sau giờ làm việc.",
      rating: 5,
    },
  ],

  newsSectionTitle: "CẬP NHẬT TIN TỨC",
  newsArticles: [
    {
      id: "news-1",
      category: "Bí quyết Quý ông",
      title: "Hoàn thiện phong cách lịch lãm: Chọn kiểu tóc hợp dáng khuôn mặt",
      author: "ChronoBarber",
      comments: 6,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
      excerpt: "Hướng dẫn chi tiết cách chọn kiểu tóc Pompadour, Undercut hay Layer cho từng dáng mặt.",
    },
    {
      id: "news-2",
      category: "Chăm sóc tóc Nam",
      title: "5 Bước sấy tạo độ phồng và vuốt sáp chuẩn Barber ngay tại nhà",
      author: "ChronoBarber",
      comments: 8,
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
      excerpt: "Bí quyết sử dụng xịt pre-styling và lược cuộn để mái tóc giữ nếp suốt 12 tiếng.",
    },
    {
      id: "news-3",
      category: "Xu hướng 2026",
      title: "Sự lên ngôi của phong cách Classic Gentleman & Textured Crop",
      author: "ChronoBarber",
      comments: 4,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
      excerpt: "Khám phá những xu hướng kiểu tóc nam được giới doanh nhân và nghệ sĩ ưa chuộng nhất.",
    },
  ],
};
