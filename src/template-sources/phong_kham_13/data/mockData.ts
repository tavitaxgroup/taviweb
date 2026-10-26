import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham13Product {
  id: string;
  name: string;
  subtitle: string;
  category: "Chống nắng" | "Chăm sóc cơ thể" | "Dưỡng da mặt";
  price: string;
  oldPrice?: string;
  badge?: string;
  volume: string;
  image: string;
}

export interface PhongKham13Data extends ClonedTemplateBaseData {
  slogan: string;
  heroFloatingProduct: {
    tags: string[];
    title: string;
    volume: string;
    price: string;
    image: string;
  };
  heroBottomCard: {
    title: string;
    description: string;
    image: string;
  };
  brandStorySection: {
    introText: string;
    quote: string;
    missionText: string;
    ctaText: string;
    leftProductImage: string;
    bentoCards: Array<{
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      bgClass: string;
      image: string;
    }>;
  };
  bestSellers: PhongKham13Product[];
  dermatologyTreatments: Array<{
    id: string;
    step: string;
    title: string;
    skinType: string;
    description: string;
    duration: string;
    image: string;
  }>;
  naturalIngredients: Array<{
    id: string;
    name: string;
    origin: string;
    benefit: string;
    percentage: string;
  }>;
  blogPosts: Array<{
    id: string;
    tag: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
  }>;
}

export const phongKham13DefaultData: PhongKham13Data = {
  business: {
    name: "THE CAFUNÉ",
    phone: ["1900 636 648", "0909 882 345"],
    email: ["cskh@thecafune.vn", "clinic@mona.media"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "09:00 - 20:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 2840,
    experienceYears: "5+",
    aboutTitle: "The Cafuné — Dược Mỹ Phẩm Lành Tính & Phòng Khám Chăm Sóc Da Thuần Tự Nhiên",
    aboutText: [
      "The Cafuné là thương hiệu thuộc Công ty Cổ phần Dược Mỹ phẩm Cafuné. Với 5 năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến cho khách hàng những sản phẩm an toàn, hiệu quả, có nguồn gốc từ thiên nhiên.",
      "Với khẩu hiệu \"Feel Natural, Be Natural\", Cafuné định hướng trở thành thương hiệu dược mỹ phẩm & phòng khám da liễu thiên nhiên hàng đầu Việt Nam, chiết xuất hoàn toàn từ thực vật hữu cơ và cam kết bảo vệ môi trường."
    ],
    highlights: [
      "Chiết xuất 95%+ thành phần thực vật hữu cơ lành tính",
      "Kiểm nghiệm lâm sàng bởi Bác sĩ Da liễu — Không Paraben, Không Cồn khô",
      "Bao bì thân thiện môi trường & không thử nghiệm trên động vật"
    ]
  },
  slogan: "FEEL NATURAL, BE NATURAL",
  hero: {
    eyebrow: "DƯỢC MỸ PHẨM & CHĂM SÓC DA THUẦN KHIẾT",
    title: "FEEL NATURAL, BE NATURAL\nCÙNG THE CAFUNÉ",
    subtitle:
      "Đánh thức vẻ đẹp nguyên bản của làn da bằng nguồn dưỡng chất thực vật tinh khiết: Dầu hạt Jojoba hữu cơ, Chiết xuất Tre non 95% và Phức hợp phục hồi hàng rào sinh học.",
    ctaText: "Khám phá bộ sưu tập",
    ctaLink: "#best-sellers",
    backgroundImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85"
  },
  heroFloatingProduct: {
    tags: ["Thiên nhiên", "Bán chạy", "Hiệu quả"],
    title: "Kem Chống Nắng Jojoba Sunscreen SPF 50+",
    volume: "40g / 1.3 FL.OZ • PA++++",
    price: "360.000 ₫",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=85"
  },
  heroBottomCard: {
    title: "CHĂM SÓC CƠ THỂ",
    description:
      "The Cafuné là thương hiệu thuộc Công ty Cổ phần Dược Mỹ phẩm Cafuné. Với 5 năm kinh nghiệm trong nghiên cứu da liễu...",
    image:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=300&q=80"
  },
  brandStorySection: {
    introText:
      "The Cafuné là thương hiệu thuộc Công ty Cổ phần Dược Mỹ phẩm Cafuné. Với 5 năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến cho khách hàng những sản phẩm an toàn, hiệu quả, có nguồn gốc từ thiên nhiên. Với khẩu hiệu",
    quote: "\"Feel Natural, Be Natural\"",
    missionText:
      "Cafuné định hướng trở thành công ty mỹ phẩm thiên nhiên hàng đầu Việt Nam, chiết xuất hoàn toàn từ thiên nhiên và cam kết bảo vệ môi trường.",
    ctaText: "Tìm hiểu thêm",
    leftProductImage:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=85",
    bentoCards: [
      {
        id: "bc-1",
        badge: "HYDRATION & SUN CARE",
        title: "Màng Lọc Chống Nắng Sinh Học Từ Dầu Hạt Jojoba SPF 50+",
        subtitle: "Kiềm dầu thoáng mịn, nâng tông tự nhiên & cấp ẩm suốt 12 giờ",
        bgClass: "from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8]",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "bc-2",
        badge: "DETOX & BODY CARE",
        title: "Thanh Lọc Cơ Thể Với Sữa Tắm Tre Non 95% & Than Hoạt Tính",
        subtitle: "Làm sạch sâu lỗ chân lông, làm dịu viêm nang lông & giữ ẩm mềm mượt",
        bgClass: "from-[#fde68a] via-[#fed7aa] to-[#fdba74]",
        image:
          "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  bestSellers: [
    {
      id: "cf-1",
      name: "Kem Chống Nắng Jojoba Sunscreen SPF 50+",
      subtitle: "Chống nắng phổ rộng UVA/UVB, chiết xuất Jojoba & Rau má làm dịu da nhạy cảm",
      category: "Chống nắng",
      price: "360.000 ₫",
      oldPrice: "420.000 ₫",
      badge: "Best Seller",
      volume: "40g / 1.3 FL.OZ",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cf-2",
      name: "Sữa Tắm Tinh Chất Tre Non Cafuné Body Wash 95%",
      subtitle: "Cấp nước đa tầng, phục hồi làn da cơ thể khô ráp với 95% dịch chiết tre tươi",
      category: "Chăm sóc cơ thể",
      price: "295.000 ₫",
      badge: "95% Natural",
      volume: "300ml / 10.1 FL.OZ",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cf-3",
      name: "Bột Than Hoạt Tính & Thảo Mộc Trắng Răng / Detox",
      subtitle: "Hạt vi khoáng than tre hoạt tính làm sạch mảng bám & khử độc tố dịu nhẹ",
      category: "Chăm sóc cơ thể",
      price: "240.000 ₫",
      oldPrice: "280.000 ₫",
      badge: "Organic Detox",
      volume: "50g / 1.7 FL.OZ",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cf-4",
      name: "Tinh Chất Phục Hồi Hàng Rào Da B5 & Ceramide Thực Vật",
      subtitle: "Làm dịu tức thì làn da kích ứng, đỏ rát sau nắng hoặc sau liệu trình clinic",
      category: "Dưỡng da mặt",
      price: "410.000 ₫",
      badge: "Dermatologist Tested",
      volume: "30ml / 1.0 FL.OZ",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    }
  ],
  dermatologyTreatments: [
    {
      id: "dt-1",
      step: "PHÁC ĐỒ 01",
      title: "Soi Da Vi Điểm AI & Thiết Kế Routine Cá Nhân Hóa",
      skinType: "Mọi loại da, đặc biệt da nhạy cảm & nhiễm Corticoid",
      description:
        "Bác sĩ Da liễu phân tích độ ẩm, sắc tố Melanin và độ đàn hồi để kê phác đồ dược mỹ phẩm lành tính phù hợp nhất.",
      duration: "45 phút",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dt-2",
      step: "PHÁC ĐỒ 02",
      title: "Liệu Trình Detox Sinh Học & Phục Hồi Biểu Bì Jojoba",
      skinType: "Da dầu mụn ẩn, bít tắc lỗ chân lông, xỉn màu",
      description:
        "Thanh lọc bã nhờn bằng enzyme thực vật kết hợp điện di tinh chất Jojoba & Rau má tươi chuẩn y khoa.",
      duration: "60 phút",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dt-3",
      step: "PHÁC ĐỒ 03",
      title: "Trị Liệu Sáng Da Thuần Chay & Bảo Vệ Ánh Sáng Xanh",
      skinType: "Da thâm sạm, lão hóa sớm do tia UV & màn hình máy tính",
      description:
        "Cấp ẩm tầng sâu bằng dịch chiết tre non 95% và khóa màng bảo vệ kép chống nắng sinh học SPF 50+.",
      duration: "60 phút",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    }
  ],
  naturalIngredients: [
    {
      id: "ing-1",
      name: "Dầu Hạt Jojoba Hữu Cơ",
      origin: "Ép lạnh nguyên chất",
      benefit: "Cấu trúc tương đồng bã nhờn tự nhiên, cân bằng dầu – nước và khóa ẩm không gây bít tắc.",
      percentage: "98% Tinh khiết"
    },
    {
      id: "ing-2",
      name: "Dịch Chiết Tre Non (Bamboo)",
      origin: "Vùng nguyên liệu sinh thái",
      benefit: "Giàu Silica hữu cơ, axit amin và khoáng chất giúp làm dịu nhiệt da tức thì.",
      percentage: "95% Hàm lượng"
    },
    {
      id: "ing-3",
      name: "Chiết Xuất Rau Má & Cúc La Mã",
      origin: "Chuẩn dược điển xanh",
      benefit: "Kháng viêm tự nhiên, kích thích tổng hợp Collagen và phục hồi tổn thương vi điểm.",
      percentage: "100% Lành tính"
    },
    {
      id: "ing-4",
      name: "Than Tre Hoạt Tính Siêu Vi",
      origin: "Hoạt hóa ở 1.000°C",
      benefit: "Hấp phụ độc tố, kim loại nặng và bã nhờn dư thừa sâu trong cổ nang lông.",
      percentage: "0% Hóa chất tẩy"
    }
  ],
  blogPosts: [
    {
      id: "bl-1",
      tag: "Kiến thức Chống nắng",
      date: "18 Tháng 10, 2026",
      title: "Vì sao Kem Chống Nắng Jojoba SPF 50+ phù hợp nhất cho làn da nhạy cảm dễ nổi mụn?",
      excerpt:
        "Khám phá cơ chế màng lọc lai thế hệ mới kết hợp dầu Jojoba giúp bảo vệ da trước tia UVA/UVB mà không gây cay mắt hay bí da.",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bl-2",
      tag: "Chăm sóc Cơ thể",
      date: "12 Tháng 10, 2026",
      title: "Bí quyết dưỡng ẩm toàn thân mịn màng với 95% chiết xuất tre non tự nhiên",
      excerpt:
        "Thay thế các loại sữa tắm chứa Sulfate gây khô căng bằng công thức làm sạch sinh học từ thực vật.",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bl-3",
      tag: "Sống Xanh Bền Vững",
      date: "05 Tháng 10, 2026",
      title: "Hành trình 5 năm theo đuổi triết lý 'Feel Natural, Be Natural' của The Cafuné",
      excerpt:
        "Cam kết thu hồi vỏ chai tái chế và sử dụng 100% nguyên liệu phân hủy sinh học an toàn cho hệ sinh thái.",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
