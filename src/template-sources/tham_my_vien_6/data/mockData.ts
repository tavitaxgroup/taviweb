import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ThamMyVien6Product {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  badge?: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export interface ThamMyVien6Data extends ClonedTemplateBaseData {
  navCategories: string[];
  heroPromo: {
    badge: string;
    bigTitle: string;
    subtitle: string;
    giftLabel: string;
    giftHighlight: string;
    ctaText: string;
    productImage1: string;
    productImage2: string;
  };
  policies: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
  }>;
  newProducts: ThamMyVien6Product[];
  bestSellers: ThamMyVien6Product[];
  skincareBanner: {
    subtitle: string;
    title: string;
    tag: string;
    image: string;
  };
  skincareProducts: ThamMyVien6Product[];
  comboProducts: ThamMyVien6Product[];
  giftProducts: ThamMyVien6Product[];
  lipstickBanner: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  lipstickProducts: ThamMyVien6Product[];
  ingredients: Array<{
    id: string;
    name: string;
    description: string;
    bgColor: string;
    image: string;
    imagePosition: "top" | "bottom";
  }>;
  brandStory: {
    title: string;
    highlight: string;
    paragraphs: string[];
    image: string;
    certificates: Array<{
      id: string;
      title: string;
      image: string;
    }>;
  };
  instagramGallery: string[];
}

export const thamMyVien6DefaultData: ThamMyVien6Data = {
  business: {
    name: "Cosmetic Luxe",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@cosmeticluxe.vn", "cskh@cosmeticluxe.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "08:00 - 21:30 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 520,
    aboutTitle: "CHUYỆN CỦA COSMETIC LUXE",
    aboutText: [
      "Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản phẩm thuần túy, tối giản, chỉ tập trung vào mục đích sử dụng của chính nó.",
      "Nghĩa là sữa rửa mặt thì chỉ cần làm sạch dịu nhẹ, không cần quá nhiều bọt nhân tạo. Nghĩa là dưỡng da, dưỡng tóc thì để da tóc khỏe từ gốc chứ không cần cảm giác giả mướt tay từ silicon. Chúng tôi từ chối mọi sản phẩm chứa hạt vi nhựa, chỉ dùng cà phê xay mịn và muối biển để tẩy tế bào chết."
    ],
  },
  hero: {
    eyebrow: "RA MẮT MẶT NẠ ĐẤT SÉT THẢO MỘC",
    title: "BIG SIZE",
    subtitle: "SIZE LỚN HƠN, TIẾT KIỆM HƠN, DÙNG ĐÃ HƠN",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  },
  navCategories: [
    "Sale",
    "Trang điểm",
    "Da",
    "Tóc",
    "Cơ thể",
    "Em bé",
    "Hương thơm",
    "Quà tặng",
    "Bộ sản phẩm",
    "Khác",
  ],
  heroPromo: {
    badge: "RA MẮT MẶT NẠ ĐẤT SÉT",
    bigTitle: "BIG SIZE",
    subtitle: "SIZE LỚN HƠN, TIẾT KIỆM HƠN, DÙNG ĐÃ HƠN",
    giftLabel: "TẶNG",
    giftHighlight: "SỮA RỬA MẶT TƠ TẰM 70K",
    ctaText: "MUA NGAY",
    productImage1:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=800&q=85",
    productImage2:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85",
  },
  policies: [
    {
      id: "pol-1",
      title: "SHIP COD TOÀN QUỐC",
      subtitle: "Thanh toán khi nhận hàng. Phí 20-25k",
      icon: "truck",
    },
    {
      id: "pol-2",
      title: "MIỄN PHÍ ĐỔI - TRẢ",
      subtitle: "Đối với sản phẩm lỗi sản xuất hoặc vận chuyển",
      icon: "refresh",
    },
    {
      id: "pol-3",
      title: "ƯU ĐÃI THÀNH VIÊN",
      subtitle: "Đăng ký thành viên nhận nhiều ưu đãi",
      icon: "users",
    },
    {
      id: "pol-4",
      title: "ƯU ĐÃI COMBO",
      subtitle: "Mua theo combo khuyến mãi, càng mua càng rẻ",
      icon: "tag",
    },
  ],
  newProducts: [
    {
      id: "np-1",
      title: "Sữa rửa mặt sạch sâu chiết xuất Tơ Tằm & Rau Má dịu nhẹ",
      price: "290,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 12,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "np-2",
      title: "Dầu tẩy trang Hoa Cúc La Mã - Cho da sạch thoáng, mềm mịn",
      price: "360,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 18,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "np-3",
      title: "Sữa rửa mặt thuần chay cân bằng độ pH chiết xuất Trà Xanh",
      price: "350,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 9,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "np-4",
      title: "Tinh chất dưỡng sáng da Niacinamide & Quả Thanh Yên",
      price: "499,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 24,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "np-5",
      title: "Kem dưỡng ẩm phục hồi hàng rào bảo vệ da Rau Má Centella",
      price: "360,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 15,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    },
  ],
  bestSellers: [
    {
      id: "bs-1",
      title: "Kem dưỡng nâng cơ trẻ hóa da ban đêm thảo mộc thiên nhiên",
      price: "401,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 31,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "bs-2",
      title: "Tinh chất dưỡng trắng hồng tự nhiên chiết xuất Gạo & Tơ Tằm",
      price: "260,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 19,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "bs-3",
      title: "Dung dịch cấp ẩm chuyên sâu Hyaluronic Acid thực vật",
      price: "240,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 14,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "bs-4",
      title: "Son dưỡng môi Bơ Hạt Mỡ & Dầu Dừa hữu cơ mềm mịn",
      price: "160,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 42,
      category: "Son môi",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "bs-5",
      title: "Xịt khoáng kiềm dầu & làm dịu da nhạy cảm Kẽm Khoáng",
      price: "300,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 22,
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    },
  ],
  skincareBanner: {
    subtitle: "DỊU NHẸ VÀ CẤP ẨM TỰ NHIÊN CHO LÀN DA",
    title: "TINH CHẤT TRÀ XANH TƯƠI MÁT",
    tag: "TRẢI NGHIỆM DƯỢC MỸ PHẨM THUẦN KHIẾT",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  skincareProducts: [
    {
      id: "sk-1",
      title: "Kem dưỡng ẩm Trà Xanh cấp nước kiềm dầu 24h",
      price: "401,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 27,
      category: "Da",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sk-2",
      title: "Serum phục hồi da hư tổn Rau Má & B5 tinh khiết",
      price: "260,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 16,
      category: "Da",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sk-3",
      title: "Nước cân bằng Hoa Hồng Đá làm mềm & se khít lỗ chân lông",
      price: "240,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 21,
      category: "Da",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sk-4",
      title: "Mặt nạ đất sét Rau Má ngừa mụn & thanh lọc bã nhờn",
      price: "260,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 35,
      category: "Da",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sk-5",
      title: "Kem chống nắng vật lý nâng tông tự nhiên cho da nhạy cảm",
      price: "300,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 29,
      category: "Da",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    },
  ],
  comboProducts: [
    {
      id: "cb-1",
      title: "Combo Sữa dưỡng thể Hoa Bưởi sáng da & Tẩy tế bào chết",
      price: "460,000đ",
      oldPrice: "650,000đ",
      discountBadge: "-30%",
      rating: 5,
      reviews: 19,
      category: "Combo",
      image:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-2",
      title: "Bộ đôi Kem dưỡng cấp ẩm Hyaluronic Acid & Phấn nước mỏng nhẹ",
      price: "880,000đ",
      oldPrice: "1,000,000đ",
      discountBadge: "-12%",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 14,
      category: "Combo",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-3",
      title: "Combo Kem dưỡng ẩm dạng Gel & Nước thần Trà Xanh",
      price: "380,000đ",
      oldPrice: "480,000đ",
      discountBadge: "-21%",
      rating: 5,
      reviews: 11,
      category: "Combo",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-4",
      title: "Bộ trang điểm che khuyết điểm & Phấn phủ kiềm dầu thảo mộc",
      price: "580,000đ",
      oldPrice: "780,000đ",
      discountBadge: "-25%",
      rating: 5,
      reviews: 17,
      category: "Combo",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cb-5",
      title: "Combo Kem nền dưỡng ẩm tự nhiên & Xịt khóa nền khoáng chất",
      price: "360,000đ",
      oldPrice: "520,000đ",
      discountBadge: "-30%",
      rating: 5,
      reviews: 23,
      category: "Combo",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
    },
  ],
  giftProducts: [
    {
      id: "gf-1",
      title: "Hộp quà Tinh dầu Bưởi chăm sóc tóc dày mượt & Nước dưỡng da đầu",
      price: "460,000đ",
      oldPrice: "650,000đ",
      discountBadge: "-30%",
      rating: 5,
      reviews: 28,
      category: "Quà tặng",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "gf-2",
      title: "Set quà tặng Nàng Thơ: Phấn nước thảo mộc & Son dưỡng thiên nhiên",
      price: "880,000đ",
      oldPrice: "1,000,000đ",
      discountBadge: "-12%",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 16,
      category: "Quà tặng",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "gf-3",
      title: "Hộp quà Cấp Ẩm Chuyên Sâu: Kem dưỡng Tơ Tằm & Mặt nạ đất sét",
      price: "380,000đ",
      oldPrice: "480,000đ",
      discountBadge: "-21%",
      rating: 5,
      reviews: 20,
      category: "Quà tặng",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "gf-4",
      title: "Set quà Trang Điểm Thuần Chay cao cấp kèm túi vải Canvas",
      price: "580,000đ",
      oldPrice: "780,000đ",
      discountBadge: "-25%",
      rating: 5,
      reviews: 12,
      category: "Quà tặng",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "gf-5",
      title: "Bộ quà tặng Dưỡng Sáng Da Toàn Diện chiết xuất Cam Ngọt",
      price: "360,000đ",
      oldPrice: "520,000đ",
      discountBadge: "-30%",
      rating: 5,
      reviews: 19,
      category: "Quà tặng",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    },
  ],
  lipstickBanner: {
    title: "BỘ SƯU TẬP SON MÔI HỮU CƠ",
    subtitle: "SẮC MÀU TỰ NHIÊN • DƯỠNG MÔI MỀM MỊN",
    description:
      "Bảng màu thời thượng chiết xuất từ sáp ong rừng, bơ hạt mỡ và dầu quả bơ ép lạnh, không chứa chì, giữ đôi môi căng mọng suốt ngày dài.",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1400&q=85",
  },
  lipstickProducts: [
    {
      id: "lp-1",
      title: "Son kem lì dưỡng ẩm màu Đỏ Đất thời thượng không khô môi",
      price: "240,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 44,
      category: "Son môi",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lp-2",
      title: "Son thỏi thiên nhiên màu Hồng Trà Sữa dịu dàng tươi tắn",
      price: "260,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 31,
      category: "Son môi",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lp-3",
      title: "Son dưỡng có màu chiết xuất Dâu Tây & Dầu Hạnh Nhân",
      price: "195,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 27,
      category: "Son môi",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lp-4",
      title: "Mặt nạ ngủ ủ môi Gấc Đỏ & Mật Ong rừng giảm thâm môi",
      price: "180,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 38,
      category: "Son môi",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "lp-5",
      title: "Tẩy tế bào chết môi Cà Phê Đắk Lắk & Đường Nâu hữu cơ",
      price: "150,000đ",
      badge: "BEST SELLER",
      rating: 5,
      reviews: 52,
      category: "Son môi",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    },
  ],
  ingredients: [
    {
      id: "ing-1",
      name: "LÁ BẠC HÀ",
      description:
        "Lá Bạc hà sử dụng trong các sản phẩm mỹ phẩm như: cao dược liệu để gội đầu, lá tắm cho trẻ em, nước súc miệng kháng khuẩn mát lành...",
      bgColor: "#2E5A27",
      imagePosition: "top",
      image:
        "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ing-2",
      name: "TINH DẦU CAM NGỌT",
      description:
        "Tinh dầu Cam ngọt được sử dụng trong mỹ phẩm như một thành phần làm thơm tự nhiên, giàu vitamin C giúp làm sáng da và thư giãn tinh thần...",
      bgColor: "#C87A28",
      imagePosition: "bottom",
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ing-3",
      name: "DẦU QUẢ BƠ",
      description:
        "Được chiết từ quả bơ chín sau khi thu hoạch bằng phương pháp ép lạnh giữ nguyên dinh dưỡng và axit béo tốt giúp phục hồi da khô ráp.",
      bgColor: "#4E6E28",
      imagePosition: "top",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ing-4",
      name: "DẦU DỪA",
      description:
        "Dầu dừa nguyên chất được chiết xuất từ phần cùi trắng của quả dừa Bến Tre, dưỡng ẩm sâu cho làn da, đôi môi và mái tóc suôn mượt.",
      bgColor: "#9E8B76",
      imagePosition: "bottom",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
    },
  ],
  brandStory: {
    title: "CHUYỆN CỦA COSMETIC",
    highlight:
      "Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản phẩm thuần túy, tối giản, chỉ tập trung vào mục đích sử dụng của chính nó.",
    paragraphs: [
      "Nghĩa là nước giặt thì chỉ cần giặt sạch, chứ không cần phải nhiều bọt. Nghĩa là dưỡng da dưỡng tóc thì để da tóc khỏe từ gốc chứ không cần cảm giác giả mướt tay từ silicon. Tôi từ chối mọi sản phẩm chứa hạt vi nhựa, chỉ dùng cafe xay mịn và muối biển để tẩy tế bào chết.",
      "Tôi không dùng những hóa chất tẩy rửa mà thay bằng xà bông dầu dừa và quả bồ hòn xưa cũ..."
    ],
    image:
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=900&q=85",
    certificates: [
      {
        id: "cert-1",
        title: "Nhà máy sản xuất sản phẩm theo tiêu chuẩn cGMP",
        image:
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "cert-2",
        title: "Phòng Lab kiểm định nguyên liệu hữu cơ chuẩn Quốc Tế",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  instagramGallery: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
  ],
};

export const mockData = thamMyVien6DefaultData;
export default thamMyVien6DefaultData;
