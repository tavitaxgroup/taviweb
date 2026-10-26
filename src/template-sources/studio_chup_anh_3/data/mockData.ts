import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface StudioChupAnh3Combo {
  id: string;
  title: string;
  price: string;
  subtitle: string;
  headerBg: string;
  buttonBg: string;
  items: Array<{ name: string; price: string }>;
}

export interface StudioChupAnh3Product {
  id: string;
  code: string;
  name: string;
  price: string;
  badge?: string;
  section: "newest" | "celebration" | "color";
  colorTone?: string;
  image: string;
  description: string;
}

export interface StudioChupAnh3Faq {
  id: string;
  question: string;
  answer: string;
}

export interface StudioChupAnh3Data extends ClonedTemplateBaseData {
  combos: StudioChupAnh3Combo[];
  featuredCategories: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  perks: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  products: StudioChupAnh3Product[];
  bentoTiles: Array<{
    id: string;
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
    darkText?: boolean;
  }>;
  faqs: StudioChupAnh3Faq[];
}

export const studioChupAnh3DefaultData: StudioChupAnh3Data = {
  business: {
    name: "Flora Wedding Studio",
    phone: ["0909 686 388", "028 3822 9988"],
    email: ["hello@florawedding.vn", "booking@florawedding.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 740,
    aboutTitle: "Tạo Ra Lối Sống Sức Khỏe Và Hạnh Phúc",
    aboutText: [
      "Flora Wedding Studio là sự giao thoa tinh tế giữa nghệ thuật thiết kế hoa cưới cao cấp, trang trí sự kiện và nhiếp ảnh cưới phong cách Fine Art Hàn Quốc.",
      "Mỗi bó hoa cầm tay cô dâu và từng khung hình đều được đội ngũ nghệ nhân, nhiếp ảnh gia chăm chút tỉ mỉ nhằm lưu giữ trọn vẹn khoảnh khắc hạnh phúc thuần khiết nhất."
    ],
  },
  hero: {
    eyebrow: "HOA TƯƠI & ẢNH CƯỚI NGHỆ THUẬT",
    title: "Thay Đổi Cách Nhìn Về Thế Giới Xung Quanh",
    subtitle: "Tạo Ra Lối Sống Sức Khỏe Và Hạnh Phúc",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=85",
  },
  combos: [
    {
      id: "combo-1",
      title: "COMBO 1",
      price: "999,000",
      subtitle: "Giao Hàng Miễn Phí",
      headerBg: "#386632",
      buttonBg: "#386632",
      items: [
        { name: "Hoa cưới cầm tay Hồng Ohara Pastel", price: "490,000 ₫" },
        { name: "Hoa cài áo chú rể & thông gia đồng bộ", price: "270,000 ₫" },
        { name: "Gói chụp lookbook hoa tươi tại Studio", price: "497,700 ₫" },
      ],
    },
    {
      id: "combo-2",
      title: "COMBO 2",
      price: "1,299,000",
      subtitle: "Giao Hàng Miễn Phí",
      headerBg: "#e9be6b",
      buttonBg: "#e9be6b",
      items: [
        { name: "Hoa cưới Mẫu Đơn & Thảo Đường Hoàng Gia", price: "690,000 ₫" },
        { name: "Trang trí bàn Gallery đón khách Tiệc Cưới", price: "770,000 ₫" },
        { name: "Chụp ảnh Pre-Wedding Concept Nàng Thơ", price: "497,700 ₫" },
      ],
    },
    {
      id: "combo-3",
      title: "COMBO 3",
      price: "1,599,000",
      subtitle: "Giao Hàng Miễn Phí",
      headerBg: "#c81e24",
      buttonBg: "#c81e24",
      items: [
        { name: "Trọn bộ Hoa Cưới + Kết Xe Hoa Sang Trọng", price: "890,000 ₫" },
        { name: "Cổng hoa tươi thiết kế riêng theo yêu cầu", price: "770,000 ₫" },
        { name: "Quay chụp phóng sự lễ gia tiên chuẩn 4K", price: "697,700 ₫" },
      ],
    },
  ],
  featuredCategories: [
    {
      id: "cat-1",
      title: "Hoa Hồng",
      subtitle: "Hoa cưới & Trang trí",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cat-2",
      title: "Hoa Lan",
      subtitle: "Lan Hồ Điệp sang trọng",
      image:
        "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cat-3",
      title: "Hoa Cúc",
      subtitle: "Cúc Mẫu Đơn & Tana",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cat-4",
      title: "Hoa Tulip",
      subtitle: "Tulip Hà Lan tinh khôi",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
    },
  ],
  perks: [
    {
      id: "perk-1",
      title: "Miễn Phí Giao Hàng",
      subtitle: "Đến Trang chủ và Cửa hàng nội thành",
    },
    {
      id: "perk-2",
      title: "Mua Ngay Hôm Nay",
      subtitle: "Đặt lịch trực tuyến và tư vấn tại Studio",
    },
    {
      id: "perk-3",
      title: "Chuyển Phát Nhanh Tận Nhà",
      subtitle: "Bảo quản hoa tươi hoàn hảo trong 2-3 giờ",
    },
  ],
  products: [
    // Newest (8 items: HC103 - HC094)
    {
      id: "new-1",
      code: "HC103",
      name: "Bó Hoa Cưới Cẩm Tú Cầu & Hồng Kem Pastel",
      price: "1,400,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế tròn đầy đặn kết hợp cẩm tú cầu xanh nhạt và hồng kem Đà Lạt tuyển chọn cho ngày trọng đại.",
    },
    {
      id: "new-2",
      code: "HC102",
      name: "Bó Hoa Hồng Đỏ Nhung Ecuador 99 Bông",
      price: "1,350,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      description:
        "Biểu tượng tình yêu nồng cháy với 99 đóa hồng đỏ nhung nhập khẩu thích hợp cầu hôn và kỷ niệm ngày cưới.",
    },
    {
      id: "new-3",
      code: "HC101",
      name: "Bó Hoa Cưới Thảo Nguyên Trắng Tinh Khôi",
      price: "2,200,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
      description:
        "Phối hợp tinh tế giữa hoa phi yến trắng, tulip trắng và lá bạc khuynh diệp thơm dịu.",
    },
    {
      id: "new-4",
      code: "HC100",
      name: "Bó Hoa Baby Hồng Phấn Mix Hồng Juliet",
      price: "990,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
      description:
        "Sắc hồng pastel ngọt ngào tôn lên nét dịu dàng, trong trẻo cho cô dâu trong bộ ảnh Pre-Wedding.",
    },
    {
      id: "new-5",
      code: "HC099",
      name: "Bình Hoa Hồng Champagne Trang Trí Bàn Tiệc",
      price: "1,200,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
      description:
        "Bình pha lê chân cao cắm hoa hồng Champagne sang trọng dùng cho bàn Gallery tiệc cưới.",
    },
    {
      id: "new-6",
      code: "HC097",
      name: "Giỏ Hoa Mẫu Đơn Hồng Phấn Chúc Mừng",
      price: "1,150,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
      description:
        "Giỏ hoa nghệ thuật phối sắc hồng phấn và trắng kem sang trọng dành tặng sự kiện kỷ niệm.",
    },
    {
      id: "new-7",
      code: "HC096",
      name: "Bó Hoa Cưới Cúc Mẫu Đơn Xanh Bơ Hiện Đại",
      price: "950,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
      description:
        "Tone xanh trắng thanh mát phù hợp với tiệc cưới ngoài trời (Outdoor Garden Wedding).",
    },
    {
      id: "new-8",
      code: "HC094",
      name: "Lẵng Hoa Hồng Đỏ & Baby Trắng Khai Trương",
      price: "1,100,000₫",
      badge: "NEW",
      section: "newest",
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
      description:
        "Lẵng hoa để bàn rực rỡ mang thông điệp may mắn, thịnh vượng và hạnh phúc viên mãn.",
    },

    // Celebration (8 items: HB308 - HB281)
    {
      id: "cel-1",
      code: "HB308",
      name: "Bó Hoa Chúc Mừng Rực Rỡ Sắc Cam Đỏ",
      price: "620,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
      description: "Bó hoa gói giấy lụa xanh ngọc phối nơ đỏ nổi bật.",
    },
    {
      id: "cel-2",
      code: "HB306",
      name: "Bó Hoa Cúc Tana Trắng Tinh Khôi Nàng Thơ",
      price: "650,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
      description: "Vẻ đẹp mộc mạc, thanh thuần cho buổi chụp hình ngoại cảnh.",
    },
    {
      id: "cel-3",
      code: "HB305",
      name: "Bó Hoa Cúc Họa Mi Nhỏ Xinh Chụp Kỷ Yếu",
      price: "300,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
      description: "Phụ kiện cầm tay hoàn hảo cho các concept chụp ảnh nhẹ nhàng.",
    },
    {
      id: "cel-4",
      code: "HB300",
      name: "Bó Hoa Hồng Đỏ Gói Giấy Đen Huyền Bí",
      price: "650,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      description: "Sự tương phản sang trọng giữa sắc đỏ nhung và giấy gói đen.",
    },
    {
      id: "cel-5",
      code: "HB295",
      name: "Bó Hoa Hồng Phối Cẩm Chướng Cao Cấp",
      price: "1,200,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
      description: "Bó hoa cỡ lớn dành cho lễ đính hôn và sự kiện đặc biệt.",
    },
    {
      id: "cel-6",
      code: "HB294",
      name: "Bó Hoa Hồng Cam Spirit Năng Lượng Tích Cực",
      price: "490,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
      description: "Sắc cam ấm áp rạng rỡ trong từng khung hình.",
    },
    {
      id: "cel-7",
      code: "HB292",
      name: "Bó Hoa Hồng Đỏ Phối Lá Bạc Bắc Âu",
      price: "720,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
      description: "Thiết kế hiện đại, thanh lịch cho ngày kỷ niệm tình yêu.",
    },
    {
      id: "cel-8",
      code: "HB281",
      name: "Bó Hoa Hồng Kem Dâu Ngọt Ngào",
      price: "550,000₫",
      badge: "NEW",
      section: "celebration",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
      description: "Tone kem pastel Hàn Quốc được các cô dâu yêu thích nhất.",
    },

    // By Color (8 items: HB300 - HB254)
    {
      id: "col-1",
      code: "HB300",
      name: "Sắc Đỏ Quyến Rũ — Hồng Nhung & Đen Tuyền",
      price: "650,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Đỏ",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      description: "Tone đỏ quyến rũ nổi bật.",
    },
    {
      id: "col-2",
      code: "HB294",
      name: "Sắc Cam Hoàng Hôn — Hồng Spirit Đà Lạt",
      price: "490,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Cam",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
      description: "Tone cam ấm áp đầy sức sống.",
    },
    {
      id: "col-3",
      code: "HB292",
      name: "Sắc Đỏ Sapphire — Hồng Nhập Khẩu",
      price: "720,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Đỏ",
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
      description: "Phối giấy xanh navy và nơ lụa đỏ sang trọng.",
    },
    {
      id: "col-4",
      code: "HB281",
      name: "Sắc Kem Champagne — Hồng Pastel Hàn Quốc",
      price: "550,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Kem",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=600&q=80",
      description: "Tone kem thanh lịch nhẹ nhàng.",
    },
    {
      id: "col-5",
      code: "HB290",
      name: "Sắc Tím Lavender — Cát Tường & Hồng Tím",
      price: "590,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Tím",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
      description: "Biểu tượng của sự thủy chung và lãng mạn.",
    },
    {
      id: "col-6",
      code: "HB289",
      name: "Sắc Đỏ Trắng Giao Hòa — Hồng & Cúc Pingpong",
      price: "700,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Đỏ",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80",
      description: "Thiết kế tươi sáng, rạng rỡ.",
    },
    {
      id: "col-7",
      code: "HB274",
      name: "Sắc Trắng Tinh Khôi — Baby & Hồng Trắng",
      price: "390,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Trắng",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
      description: "Tinh khôi như sương mai.",
    },
    {
      id: "col-8",
      code: "HB254",
      name: "Sắc Vàng Nắng Mai — Hướng Dương & Hồng Vàng",
      price: "490,000₫",
      badge: "NEW",
      section: "color",
      colorTone: "Vàng",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
      description: "Mang lại niềm vui và nguồn năng lượng tươi mới.",
    },
  ],
  bentoTiles: [
    {
      id: "bento-1",
      eyebrow: "NỔI BẬT",
      title: "Khám Phá Hoa Tự Nhiên",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=80",
      darkText: true,
    },
    {
      id: "bento-2",
      eyebrow: "MỚI VỀ",
      title: "Khám Phá Lối Sống",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=700&q=80",
      darkText: false,
    },
    {
      id: "bento-3",
      eyebrow: "MỚI VỀ",
      title: "Concept Hoa & Ảnh Cưới",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=80",
      darkText: true,
    },
    {
      id: "bento-4",
      eyebrow: "NỔI BẬT",
      title: "Khám Phá Hoa Tự Nhiên",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80",
      darkText: false,
    },
    {
      id: "bento-5",
      eyebrow: "MỚI VỀ",
      title: "Khám Phá Không Gian Cưới",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      darkText: false,
    },
  ],
  news: [
    {
      id: "news-1",
      title: "Mùa hè là thời điểm tuyệt vời nhất để tổ chức tiệc cưới sân vườn",
      date: "06 Tháng Sáu, 2025",
      category: "KHÔNG Gian CƯỚI",
      excerpt:
        "Khám phá cách phối màu hoa tươi pastel dịu mát kết hợp ánh sáng tự nhiên giúp bộ ảnh cưới ngoài trời trở nên sống động và đầy cảm xúc...",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "news-2",
      title: "Nghệ thuật bài trí hoa tươi bàn tiệc & góc chụp Check-in sang trọng",
      date: "06 Tháng Sáu, 2025",
      category: "TRANG TRÍ",
      excerpt:
        "Sự kết hợp hài hòa giữa chất liệu gốm mộc, nến thơm và các dòng hoa nhập khẩu mang lại vẻ đẹp thanh lịch chuẩn phong cách Bắc Âu...",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "news-3",
      title: "6 xu hướng bó hoa cưới cầm tay giúp cô dâu tỏa sáng trong mọi khung hình",
      date: "06 Tháng Sáu, 2025",
      category: "HOA CƯỚI",
      excerpt:
        "Từ dáng hoa thác đổ cổ điển đến bó hoa tròn tối giản gồm linh lan và tulip trắng, đâu là thiết kế sinh ra để dành riêng cho chiếc váy cưới của bạn...",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=80",
    },
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Studio của bạn cung cấp những dòng hoa tươi và dịch vụ cưới nào?",
      answer:
        "Chúng tôi cung cấp trọn gói các dòng hoa tươi nhập khẩu & Đà Lạt tuyển chọn như hoa hồng Ohara, hoa lan hồ điệp, cẩm tú cầu, cúc mẫu đơn, hoa tulip, hoa linh lan cùng dịch vụ trang trí gia tiên, xe hoa và chụp ảnh cưới nghệ thuật.",
    },
    {
      id: "faq-2",
      question: "Làm thế nào để chọn mẫu hoa cưới phù hợp với dáng váy và concept chụp ảnh?",
      answer:
        "Đội ngũ Stylist và Florist tại Flora Wedding sẽ tư vấn 1-1 dựa trên phom dáng váy cưới (A-line, đuôi cá, công chúa), tone trang điểm và bối cảnh chụp hình để thiết kế bó hoa tôn dáng cô dâu nhất.",
    },
    {
      id: "faq-3",
      question: "Chúng tôi có thể đặt lịch trước và nhận hoa vào một ngày giờ cụ thể không?",
      answer:
        "Hoàn toàn được! Bạn có thể đặt lịch trước từ 3 - 30 ngày. Hoa cưới và phụ kiện sẽ được xử lý cấp ẩm chuyên sâu và giao tận nơi đúng khung giờ làm lễ hoặc buổi chụp hình của bạn.",
    },
  ],
};
