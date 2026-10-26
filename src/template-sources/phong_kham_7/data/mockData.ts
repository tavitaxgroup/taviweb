import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham7Product {
  id: string;
  discountBadge?: string;
  category: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  image: string;
}

export interface PhongKham7CategoryBlock {
  id: string;
  title: string;
  headerBg: string;
  bannerBg: string;
  bannerTitle: string;
  bannerSubtitle: string;
  badgeLabel: string;
  badgeValue: string;
  bannerImage: string;
  subCategories: string[];
  products: PhongKham7Product[];
}

export interface PhongKham7Data extends ClonedTemplateBaseData {
  topSystemCount: string;
  cskhPhone: string;
  regionLabel: string;
  sidebarCategories: Array<{
    id: string;
    label: string;
    hasChildren?: boolean;
  }>;
  promoSubBanners: Array<{
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    hotlineOrCta: string;
    bgClass: string;
    accentColor: string;
    image: string;
  }>;
  brands: Array<{
    id: string;
    name: string;
    tagline: string;
    color: string;
  }>;
  categoryBlocks: PhongKham7CategoryBlock[];
  qaList: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  newsArticles: Array<{
    id: string;
    title: string;
    summary: string;
    image: string;
  }>;
  recentlyViewed: PhongKham7Product[];
  serviceCommitments: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  storeBranches: {
    hanoi: string[];
    haiPhong: string[];
    otherNorthCentral: Array<{ city: string; address: string }>;
    hcm: string[];
    otherSouth: Array<{ city: string; address: string }>;
  };
}

export const phongKham7DefaultData = {
  business: {
    name: "MONA KIDS SHOP",
    phone: ["1800 1090", "0126 922 0162"],
    email: ["cskh@monakidsshop.vn", "lienhe@mona.media"],
    address: "Số 166 Nguyễn Thái Học, P. Quang Trung, TP. Vinh, Nghệ An",
    workingHours: "08:00 - 21:30 (Tất cả các ngày trong tuần)",
    rating: 5.0,
    reviewCount: 10450,
    experienceYears: "15+",
    aboutTitle: "Hệ Thống Chăm Sóc Sức Khỏe Nhi Khoa & Siêu Thị Mẹ Bé Hàng Đầu",
    aboutText: [
      "MONA KIDS SHOP (Shop Trẻ Thơ) là hệ thống 36 cửa hàng kết hợp trung tâm tư vấn dinh dưỡng nhi khoa, lớp học tiền sản và lớp học ăn dặm miễn phí cho hàng triệu gia đình Việt.",
      "Cung cấp hơn 10.000+ sản phẩm chính hãng từ 400+ thương hiệu uy tín toàn cầu như Aptamil, HiPP, Medela, Farlin, Combi, Merries với cam kết đổi trả 15 ngày miễn phí."
    ],
    highlights: [
      "10.000+ Sản phẩm tốt nhất cho Mẹ & Bé",
      "400+ Thương hiệu nổi tiếng toàn cầu",
      "Giao hàng toàn quốc — Thanh toán khi nhận",
      "Đổi hàng 15 ngày hoàn toàn miễn phí"
    ]
  },
  topSystemCount: "Hệ thống 36 cửa hàng",
  cskhPhone: "0126 922 0162",
  regionLabel: "Miền Nam",
  sidebarCategories: [
    { id: "cat-1", label: "Đồ cho bé ăn", hasChildren: true },
    { id: "cat-2", label: "Đồ bé chơi", hasChildren: true },
    { id: "cat-3", label: "Đồ cho bé mặc", hasChildren: true },
    { id: "cat-4", label: "Đồ cho bé ngủ", hasChildren: true },
    { id: "cat-5", label: "Đồ cho bé an toàn" },
    { id: "cat-6", label: "Vệ sinh cho bé" },
    { id: "cat-7", label: "Đồ cho mẹ", hasChildren: true },
    { id: "cat-8", label: "Gợi ý quà tặng" },
    { id: "cat-9", label: "Khuyến mãi hấp dẫn" }
  ],
  hero: {
    eyebrow: "TRUNG TÂM DINH DƯỠNG NHI & MẸ BÉ",
    title: "Đồng Hành Cùng Bé Yêu Khôn Lớn Khỏe Mạnh",
    subtitle:
      "Tư vấn dinh dưỡng sơ sinh, lịch tiêm chủng, lớp học tiền sản miễn phí cùng hơn 10.000 sản phẩm chuẩn y khoa cho Mẹ & Bé.",
    ctaText: "Khám Phá Ưu Đãi Ngay",
    ctaLink: "#do-cho-be-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1400&q=85"
  },
  promoSubBanners: [
    {
      id: "pb-1",
      badge: "Tư Vấn Bác Sĩ Sản Nhi",
      title: "Lớp Học Tiền Sản Miễn Phí",
      subtitle: "Cập nhật kiến thức thai giáo, vượt cạn an toàn & chăm sóc trẻ sơ sinh",
      hotlineOrCta: "Hotline: 0912 931 028",
      bgClass: "from-[#fdf2f8] via-[#fce7f3] to-[#f3e8ff]",
      accentColor: "#d81b60",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pb-2",
      badge: "Hot",
      title: "Chính Sách Khách Hàng Thân Thiết",
      subtitle: "ƯU ĐÃI LÊN TỚI 10% — Tích điểm tự động trên toàn hệ thống 36 cơ sở",
      hotlineOrCta: "XEM NGAY",
      bgClass: "from-[#eff6ff] via-[#e0f2fe] to-[#fff7ed]",
      accentColor: "#ff6600",
      image:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pb-3",
      badge: "Chuyên Gia Dinh Dưỡng",
      title: "LỚP HỌC ĂN DẶM MIỄN PHÍ",
      subtitle: "Thực hành chế biến thực đơn ăn dặm kiểu Nhật & BLW giàu vi chất cho bé",
      hotlineOrCta: "> Đăng ký ngay",
      bgClass: "from-[#e0f7fa] via-[#b2ebf2] to-[#e0f2fe]",
      accentColor: "#0288d1",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80"
    }
  ],
  brands: [
    { id: "br-1", name: "Bobby", tagline: "DIAPERS JAPAN", color: "#1e40af" },
    { id: "br-2", name: "FARLIN", tagline: "SINCE 1972", color: "#dc2626" },
    { id: "br-3", name: "fatz", tagline: "BABY CARE", color: "#65a30d" },
    { id: "br-4", name: "HiPP", tagline: "ORGANIC", color: "#db2777" },
    { id: "br-5", name: "Aptamil", tagline: "NUTRICIA", color: "#0369a1" },
    { id: "br-6", name: "IQ Baby", tagline: "Best for your baby!", color: "#0284c7" },
    { id: "br-7", name: "Simba", tagline: "TAIWAN PREMIUM", color: "#92400e" },
    { id: "br-8", name: "Merries", tagline: "KAO JAPAN", color: "#ec4899" }
  ],
  categoryBlocks: [
    {
      id: "do-cho-be-an",
      title: "Đồ cho bé ăn",
      headerBg: "#6a328a",
      bannerBg: "from-[#fff3b0] via-[#ffe066] to-[#ffd43b]",
      bannerTitle: "ĐỒ CHO BÉ ĂN",
      bannerSubtitle: "Sữa bột, Bình sữa, Ghế ăn, Bánh ăn dặm...",
      badgeLabel: "Giá",
      badgeValue: "tốt",
      bannerImage:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
      subCategories: [
        "Bình sữa",
        "Bột ăn dặm",
        "Ghế ngồi ăn",
        "Ly uống nước",
        "Máy hâm sữa",
        "Máy hút sữa"
      ],
      products: [
        {
          id: "eat-1",
          category: "BỘT ĂN DẶM",
          name: "Bột ăn dặm Ridielac bò rau củ HG 200G",
          price: "48,500 ₫",
          image:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "eat-2",
          category: "SỮA BỘT CHO BÉ",
          name: "Enfamil A+ 3 Vani Brain Plus 400g",
          price: "95,000 ₫ – 135,000 ₫",
          image:
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "eat-3",
          category: "BÌNH SỮA",
          name: "Bộ bình 2 chiếc – 250ml",
          price: "390,000 ₫",
          image:
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "eat-4",
          category: "SỮA BỘT CHO BÉ",
          name: "Sữa bột dinh dưỡng Aptamil Đức",
          price: "765,000 ₫",
          image:
            "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "eat-5",
          discountBadge: "-5%",
          category: "BÌNH SỮA",
          name: "Bình sữa baby one nano silver cổ rộng 260ml",
          oldPrice: "280,000 ₫",
          price: "265,000 ₫",
          rating: 5,
          image:
            "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "eat-6",
          category: "LY UỐNG NƯỚC",
          name: "Bình tập uống Avent cho trẻ từ 12 tháng",
          price: "255,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "do-cho-be-mac",
      title: "Đồ cho bé mặc",
      headerBg: "#d81b60",
      bannerBg: "from-[#fce4ec] via-[#f8bbd0] to-[#f48fb1]",
      bannerTitle: "ĐỒ SƠ SINH",
      bannerSubtitle: "Quần áo, Khăn xô, Tã lót, Mũ thóp",
      badgeLabel: "Giảm tới",
      badgeValue: "25%",
      bannerImage:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80",
      subCategories: [
        "Giày dép",
        "Giày tập đi bé gái",
        "Giày tập đi bé trai",
        "Nón, yếm, vớ",
        "Quần áo bé gái",
        "Quần áo bé trai"
      ],
      products: [
        {
          id: "wear-1",
          category: "QUẦN ÁO BÉ TRAI",
          name: "Bộ bông lông body 2 lớp thú xuất khẩu",
          price: "140,000 ₫",
          image:
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "wear-2",
          category: "QUẦN ÁO BÉ GÁI",
          name: "Bộ body dài tay viền hồng liền tất in hình",
          price: "138,000 ₫",
          image:
            "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "wear-3",
          category: "QUẦN ÁO BÉ GÁI",
          name: "Bộ Body dài tay viền xanh liền tất in hình",
          price: "142,000 ₫",
          image:
            "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "wear-4",
          category: "QUẦN ÁO BÉ GÁI",
          name: "Set Carter 5 bộ body chi tiết màu",
          price: "180,000 ₫",
          image:
            "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "wear-5",
          discountBadge: "-5%",
          category: "QUẦN ÁO BÉ GÁI",
          name: "Set fisher price body Thái Lan",
          oldPrice: "195,000 ₫",
          price: "185,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "wear-6",
          category: "QUẦN ÁO BÉ GÁI",
          name: "Set 3 chi tiết áo khoác mũ JR195 Thái lan",
          price: "268,000 ₫",
          image:
            "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "do-cho-be-ngu",
      title: "Đồ cho bé ngủ",
      headerBg: "#26a65b",
      bannerBg: "from-[#e0f7fa] via-[#b2ebf2] to-[#80deea]",
      bannerTitle: "ĐỒ CHO BÉ NGỦ",
      bannerSubtitle: "Giường cũi, túi ngủ, Ga quây đệm",
      badgeLabel: "Giảm tới",
      badgeValue: "20%",
      bannerImage:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80",
      subCategories: [
        "Cũi",
        "Ghế nằm",
        "Giường",
        "Gối",
        "Nôi xách tay",
        "Tấm lót sàn"
      ],
      products: [
        {
          id: "sleep-1",
          category: "TẤM LÓT SÀN",
          name: "Chiếu cói cho bé hình lá",
          price: "80,000 ₫",
          image:
            "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sleep-2",
          category: "GỐI",
          name: "Gối chặn bông Bibos",
          price: "80,000 ₫",
          image:
            "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sleep-3",
          category: "GỐI",
          name: "Gối ôm cá ngựa Kym 75cm",
          price: "175,000 ₫",
          image:
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sleep-4",
          discountBadge: "-11%",
          category: "GỐI",
          name: "Gối sơ sinh Tomtom",
          oldPrice: "180,000 ₫",
          price: "160,000 ₫",
          image:
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sleep-5",
          category: "GỐI",
          name: "Gối ôm thú bông đeo nơ",
          price: "230,000 ₫",
          image:
            "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sleep-6",
          category: "GỐI",
          name: "Gối sơ sinh TomTom Thái Lan",
          price: "98,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "do-dung-cho-me",
      title: "Đồ dùng cho mẹ",
      headerBg: "#1565c0",
      bannerBg: "from-[#fff3e0] via-[#ffe0b2] to-[#ffcc80]",
      bannerTitle: "ĐỒ DÙNG CHO MẸ",
      bannerSubtitle: "Quần áo, sữa bầu, túi, máy hút sữa",
      badgeLabel: "Giảm tới",
      badgeValue: "20%",
      bannerImage:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=600&q=80",
      subCategories: [
        "Đồ dùng gia đình",
        "Đồ lót bầu sau sinh",
        "Gen nịt bụng",
        "Miếng lót thấm sữa",
        "Sách nuôi dạy con",
        "Sữa tắm, gội"
      ],
      products: [
        {
          id: "mom-1",
          discountBadge: "-8%",
          category: "SÁCH NUÔI DẠY CON",
          name: "30 việc cha mẹ nên làm cùng con",
          oldPrice: "85,000 ₫",
          price: "78,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "mom-2",
          category: "SÁCH NUÔI DẠY CON",
          name: "Sách ăn dặm cho bé",
          price: "45,000 ₫",
          image:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "mom-3",
          category: "SÁCH NUÔI DẠY CON",
          name: "Sách mang thai thành công 280 ngày",
          price: "85,000 ₫",
          image:
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "mom-4",
          discountBadge: "-13%",
          category: "SÁCH NUÔI DẠY CON",
          name: "Thực đơn giúp trẻ thông minh",
          oldPrice: "32,000 ₫",
          price: "28,000 ₫",
          image:
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "mom-5",
          category: "SÁCH NUÔI DẠY CON",
          name: "Thực đơn cho bà mẹ mang thai",
          price: "35,000 ₫",
          image:
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "mom-6",
          discountBadge: "-11%",
          category: "SÁCH NUÔI DẠY CON",
          name: "Sách cẩm nang toàn tập mẹ và bé",
          oldPrice: "188,000 ₫",
          price: "168,000 ₫",
          image:
            "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ],
  qaList: [
    {
      id: "qa-1",
      question:
        "Tôi mua sản phẩm A sau đó tôi không có nhu cầu sử dụng và muốn đổi sang sản phẩm B có giá trị tương đương?",
      answer:
        "Chào ba mẹ, hệ thống hỗ trợ đổi trả miễn phí trong vòng 15 ngày kể từ ngày mua hàng với điều kiện sản phẩm còn nguyên tem mác và hóa đơn."
    },
    {
      id: "qa-2",
      question: "Bé gái có sử dụng đồ chơi lắp ráp được không?",
      answer:
        "Đồ chơi lắp ráp giúp phát triển tư duy không gian, vận động tinh và sự khéo léo cho cả bé trai và bé gái từ 18 tháng tuổi trở lên."
    },
    {
      id: "qa-3",
      question: "Xe đẩy 3 bánh có gấp lại được không?",
      answer:
        "Hầu hết các dòng xe đẩy 3 bánh thông minh tại MONA KIDS SHOP đều có chốt gập gọn chỉ với 1 thao tác để mang đi du lịch."
    },
    {
      id: "qa-4",
      question: "So sánh sự giống và khác nhau giữa xe đẩy với xe đẩy 3 bánh?",
      answer:
        "Xe đẩy truyền thống phù hợp cho bé từ sơ sinh đến 36 tháng (có tư thế nằm ngả 175 độ), còn xe đẩy 3 bánh phù hợp cho bé từ 9 tháng tuổi đã ngồi vững."
    }
  ],
  newsArticles: [
    {
      id: "nw-1",
      title: "\"Thành phố sắc màu\", thắp sáng ngày hội trăng rằm",
      summary: "Chuỗi sự kiện vui Tết Trung Thu và khám dinh dưỡng nhi khoa miễn phí cho hơn 2.000 bé yêu.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "nw-2",
      title: "Nấu cà ri cực đơn giản và nhanh với nồi nấu tự động Healsio của Sharp",
      summary: "Bí quyết chuẩn bị bữa ăn dặm giàu dinh dưỡng cho bé không tốn thời gian của mẹ bận rộn.",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "nw-3",
      title: "Hỏi đáp các vấn đề trong thai kỳ để mẹ bầu khỏe đẹp",
      summary: "Bác sĩ Sản Nhi giải đáp lịch bổ sung Sắt, Canxi, DHA và lịch khám thai định kỳ từng tam cá nguyệt.",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=300&q=80"
    }
  ],
  recentlyViewed: [
    {
      id: "rv-1",
      discountBadge: "-8%",
      category: "SÁCH NUÔI DẠY CON",
      name: "30 việc cha mẹ nên làm cùng con",
      oldPrice: "85,000 ₫",
      price: "78,000 ₫",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "rv-2",
      category: "SÁCH NUÔI DẠY CON",
      name: "Sách ăn dặm cho bé",
      price: "45,000 ₫",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "rv-3",
      category: "SÁCH NUÔI DẠY CON",
      name: "Sách mang thai thành công 280 ngày",
      price: "85,000 ₫",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "rv-4",
      discountBadge: "-13%",
      category: "SÁCH NUÔI DẠY CON",
      name: "Thực đơn giúp trẻ thông minh",
      oldPrice: "32,000 ₫",
      price: "28,000 ₫",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "rv-5",
      category: "SÁCH NUÔI DẠY CON",
      name: "Thực đơn cho bà mẹ mang thai",
      price: "35,000 ₫",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80"
    }
  ],
  serviceCommitments: [
    {
      id: "sc-1",
      title: "10.000+ Sản phẩm",
      subtitle: "Tốt nhất cho Mẹ & Bé"
    },
    {
      id: "sc-2",
      title: "400+ Thương hiệu nổi tiếng",
      subtitle: "Medela, Farlin, Combi..."
    },
    {
      id: "sc-3",
      title: "Giao hàng toàn quốc",
      subtitle: "Thanh toán khi nhận hàng"
    },
    {
      id: "sc-4",
      title: "Đổi hàng 15 ngày",
      subtitle: "Hoàn toàn miễn phí"
    }
  ],
  testimonials: [
    {
      name: "Ms Nhàn",
      role: "27/09/2025 — Khách hàng thân thiết",
      content:
        "Shop này bán đúng giá gốc, giao hàng nhanh và phục vụ dễ thương hơn các shop kids khác. Rất hài lòng.",
      rating: 5
    },
    {
      name: "Chị Minh Thư",
      role: "14/10/2025 — Mẹ bé Bắp (Quận 3, TP.HCM)",
      content:
        "Mình từng tham gia lớp học tiền sản miễn phí của Mona Kids Shop, bác sĩ tư vấn rất tận tình. Sữa Aptamil và bình sữa ở đây luôn có tem chính hãng.",
      rating: 5
    }
  ],
  storeBranches: {
    hanoi: [
      "Tầng 1 Tòa CT4, KĐT Văn Khê, Hà Đông, Hà Nội",
      "Số 8, tòa nhà CT5-X2, Bắc Linh Đàm, Hoàng Mai, Hà Nội",
      "Số 227 Đội Cấn, Q.Ba Đình, Hà Nội",
      "Số 376 Thái Hà, P.Trung Liệt, Q.Đống Đa, Hà Nội",
      "Tầng 1, tòa T11 Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội",
      "Số 9, B7 Lưu Hữu Phước, Mỹ Đình 1, Nam Từ Liêm, Hà Nội",
      "Số 108 Lê Lợi, Hà Đông, Hà Nội",
      "Số 109 Trần Duy Hưng, Q.Cầu Giấy, Hà Nội",
      "Số 49 Nguyễn Phong Sắc, Q.Cầu Giấy, Hà Nội",
      "Số 623 Hoàng Hoa Thám, Q.Ba Đình, Hà Nội",
      "Số 195G Minh Khai, Q.Hai Bà Trưng, Hà Nội"
    ],
    haiPhong: [
      "Số 707–709 Trường Chinh, P.Quán Trữ, Q.Kiến An, Hải Phòng",
      "Số 11 Hai Bà Trưng, Q.Lê Chân, Hải Phòng"
    ],
    otherNorthCentral: [
      { city: "Bình Phước", address: "Số 539, Quốc lộ 14, P.Tân Bình, TX.Đồng Xoài, Bình Phước" },
      { city: "Đồng Nai", address: "Số 165 CMT8, P.Hòa Bình, TP.Biên Hòa, Đồng Nai" },
      { city: "Phú Thọ", address: "Số 363 Châu Phong, TP. Việt Trì, Phú Thọ" },
      { city: "Thanh Hóa", address: "Số 419 Lê Hoàn, TP. Thanh Hóa, Thanh Hóa" }
    ],
    hcm: [
      "Số 326 Phan Đình Phùng, Phường 1, Quận Phú Nhuận, TP Hồ Chí Minh",
      "Số 972 Kha Vạn Cân, Phường Linh Chiểu, Quận Thủ Đức, TP Hồ Chí Minh",
      "Số 278 Lê Văn Khương, P.Thới An, Q.12, TP Hồ Chí Minh",
      "Số 541 Nguyễn Duy Trinh, P.Bình Trưng Đông, Q.2, TP Hồ Chí Minh",
      "Số 1004 Hậu Giang, P.12, Q.6, TP.HCM",
      "Số 131 Nguyễn Thị Thập, P.Tân Phú, Q.7, TP Hồ Chí Minh",
      "Số 253 Lũy Bán Bích, P.Hiệp Tân, Q.Tân Phú, TP Hồ Chí Minh",
      "Số 292 Lê Trọng Tấn, P.Tây Thạnh, Q.Tân Phú, TP Hồ Chí Minh",
      "Số 865 Phan Văn Trị, P.7, Q.Gò Vấp, TP Hồ Chí Minh",
      "Số 77 Lê Văn Việt, P.Hiệp Phú, Q.9, TP.HCM",
      "Số 729 đường CMT8, P.6, Q.Tân Bình, TP Hồ Chí Minh",
      "Số 107 Nguyễn Chí Thanh, P.9, Q.5, TP Hồ Chí Minh",
      "Số 338 Nguyễn Thị Minh Khai, P.5, Q.3, TP Hồ Chí Minh",
      "Số 49G Phan Đăng Lưu, P.3, Q.Bình Thạnh, TP Hồ Chí Minh"
    ],
    otherSouth: [
      { city: "Bình Dương", address: "Số 412 CMT8, P.Phú Cường, TP.Thủ Dầu Một, Bình Dương" },
      { city: "Cần Thơ", address: "Số 267 Nguyễn Văn Cừ, Q. Ninh Kiều, Cần Thơ" },
      { city: "Ninh Bình", address: "Số 923 Trần Hưng Đạo, P.Vân Giang, TP.Ninh Bình, Ninh Bình" },
      { city: "Quảng Ninh", address: "Số 22 Trần Hưng Đạo, P.Trần Hưng Đạo, TP.Hạ Long, Quảng Ninh" },
      { city: "Tiền Giang", address: "Số 303 Ấp Bắc, P.5, TP.Mỹ Tho, Tiền Giang" }
    ]
  }
};
