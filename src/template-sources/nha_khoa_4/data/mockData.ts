import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DentalShopItem {
  id: string;
  category: string;
  name: string;
  oldPrice?: string;
  price: string;
  discountBadge?: string;
  image: string;
  description: string;
}

export interface NhaKhoa4Data extends ClonedTemplateBaseData {
  navCategories: string[];
  promoBanner: {
    topTitle: string;
    highlightTitle: string;
    subtitle: string;
    ctaText: string;
    validUntil: string;
    images: string[];
  };
  specialOffers: DentalShopItem[];
  suggestedItems: DentalShopItem[];
  bestSellers: DentalShopItem[];
  newArrivals: DentalShopItem[];
}

export const nhaKhoa4DefaultData: NhaKhoa4Data = {
  business: {
    name: "Mona Dental Shop",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["cskh@monadental.vn", "info@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08:00 - 20:00",
    rating: 4.9,
    reviewCount: 420,
    aboutTitle: "Trung Tâm Nha Khoa Thẩm Mỹ & Chăm Sóc Răng Miệng Chính Hãng",
    aboutText: [
      "Mona Dental Shop là hệ thống trung tâm nha khoa thẩm mỹ kết hợp phân phối các dòng sản phẩm chăm sóc răng miệng, máy tăm nước, bàn chải điện và tinh chất làm trắng răng cao cấp chính hãng.",
      "Chúng tôi cam kết mang lại nụ cười rạng rỡ chuẩn y khoa cùng hơn 33.000 sản phẩm và gói dịch vụ nha khoa thẩm mỹ uy tín hàng đầu."
    ],
    highlights: [
      "Phân phối chính hãng thiết bị chăm sóc răng miệng & thẩm mỹ nụ cười",
      "Ưu đãi lên đến 70% các gói tẩy trắng răng Laser & chăm sóc nha chu",
      "Miễn phí tư vấn phác đồ chăm sóc răng miệng trực tuyến 24/7",
      "Giao hàng nhanh toàn quốc – Cam kết chính hãng 100%"
    ]
  },
  hero: {
    eyebrow: "TRUNG TÂM CHĂM SÓC NỤ CƯỜI & THẨM MỸ",
    title: "Top 40 Tháng 2",
    subtitle: "Giảm đến 70%",
    description:
      "Philips Sonicare, Oral-B, Marvis, Liệu trình Tẩy trắng Laser Whitening & nhiều thương hiệu nha khoa thẩm mỹ khác!",
    ctaText: "MUA NGAY",
    ctaLink: "#khuyen-mai",
    backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85"
  },
  navCategories: [
    "CHĂM SÓC NướU",
    "CHĂM SÓC CHO NAM",
    "TẨY TRẮNG RĂNG",
    "NƯỚC SÚC MIỆNG",
    "BÀN CHẢI ĐIỆN",
    "THƠM MIỆNG",
    "THẨM MỸ RĂNG",
    "ĐẶC BIỆT",
    "MỚI"
  ],
  promoBanner: {
    topTitle: "Top 40 Tháng 2",
    highlightTitle: "Giảm đến 70%",
    subtitle: "Philips Sonicare, Oral-B, Marvis & các gói thẩm mỹ nha khoa cao cấp!",
    ctaText: "MUA NGAY",
    validUntil: "Đến 28/2/2026",
    images: [
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    ]
  },
  specialOffers: [
    {
      id: "sp-1",
      category: "DỤNG CỤ & PHỤ KIỆN",
      name: "Đầu Bàn Chải Điện Siêu Mềm Dạng Xoay M10",
      oldPrice: "100,000 đ",
      price: "45,000 đ",
      discountBadge: "-55%",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=500&q=80",
      description: "Đầu lông Dupont kháng khuẩn bảo vệ men răng và nướu nhạy cảm."
    },
    {
      id: "sp-2",
      category: "TINH DẦU THẢO DƯỢC",
      name: "Tinh Dầu Tràm Trà Sát Khuẩn Nướu Răng – 50ml",
      oldPrice: "140,000 đ",
      price: "110,000 đ",
      discountBadge: "-21%",
      image: "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=500&q=80",
      description: "Chiết xuất thảo mộc thiên nhiên giúp làm dịu viêm lợi và hơi thở thơm mát."
    },
    {
      id: "sp-3",
      category: "DỤNG CỤ NHA KHOA",
      name: "Miếng Dán Trắng Răng Cấp Tốc Size S (Hộp 20 Miếng)",
      oldPrice: "73,000 đ",
      price: "45,000 đ",
      discountBadge: "-38%",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
      description: "Bật tông răng trắng sáng tự nhiên sau 7 ngày sử dụng tại nhà."
    },
    {
      id: "sp-4",
      category: "VỆ SINH RĂNG MIỆNG",
      name: "Nước Súc Miệng Diệt Khuẩn Bảo Vệ Men Răng 473ml",
      oldPrice: "155,000 đ",
      price: "105,000 đ",
      discountBadge: "-32%",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      description: "Loại bỏ 99.9% vi khuẩn gây mảng bám và ngăn ngừa sâu răng suốt 12 giờ."
    },
    {
      id: "sp-5",
      category: "CHĂM SÓC TOÀN DIỆN",
      name: "Dung Dịch Súc Miệng Khoáng Chất Power Scrub – 473ml",
      oldPrice: "150,000 đ",
      price: "100,000 đ",
      discountBadge: "-33%",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80",
      description: "Tái khoáng hóa men răng, giảm ê buốt hiệu quả cho răng nhạy cảm."
    },
    {
      id: "sp-6",
      category: "GEL ĐẶC TRỊ",
      name: "Gel Bôi Giảm Ê Buốt & Săn Chắc Nướu – 150ml",
      oldPrice: "120,000 đ",
      price: "90,000 đ",
      discountBadge: "-25%",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
      description: "Công thức dịu nhẹ chuyên dùng sau khi lấy cao răng hoặc tẩy trắng."
    },
    {
      id: "sp-7",
      category: "BỘ CHĂM SÓC RĂNG",
      name: "Tinh Chất Thảo Mộc Ngừa Chảy Máu Chân Răng – 300ml",
      oldPrice: "286,000 đ",
      price: "250,000 đ",
      discountBadge: "-13%",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80",
      description: "Chiết xuất hữu cơ từ Pháp giúp nuôi dưỡng mô nướu khỏe mạnh."
    },
    {
      id: "sp-8",
      category: "LIỆU TRÌNH CAO CẤP",
      name: "Bộ Kit Tẩy Trắng Răng Đèn LED Chuẩn Phòng Khám",
      oldPrice: "2,945,000 đ",
      price: "2,420,000 đ",
      discountBadge: "-18%",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80",
      description: "Công nghệ ánh sáng lạnh kết hợp gel Peroxide an toàn tuyệt đối cho men răng."
    },
    {
      id: "sp-9",
      category: "XỊT THƠM MIỆNG",
      name: "Xịt Thơm Miệng Kháng Khuẩn Bạc Hà Đậm Đặc 100ml",
      oldPrice: "1,195,000 đ",
      price: "770,000 đ",
      discountBadge: "-36%",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80",
      description: "Mang lại hơi thở thơm mát tức thì, tự tin giao tiếp suốt ngày dài."
    },
    {
      id: "sp-10",
      category: "BỘ QUÀ TẶNG NỤ CƯỜI",
      name: "Bộ Chăm Sóc Răng Sứ Thẩm Mỹ RoMansu 55ml",
      oldPrice: "449,000 đ",
      price: "255,000 đ",
      discountBadge: "-43%",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
      description: "Dưỡng bóng bề mặt răng sứ Veneer và ngăn ngừa bám màu thực phẩm."
    },
    {
      id: "sp-11",
      category: "TINH CHẤT LÀM TRẮNG",
      name: "Serum Dưỡng Trắng Răng Ngọc Trai Euphoria 125ml",
      oldPrice: "1,845,000 đ",
      price: "1,120,000 đ",
      discountBadge: "-39%",
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=500&q=80",
      description: "Tinh chất bột ngọc trai tự nhiên giúp đánh bật vết ố vàng do trà và cà phê."
    },
    {
      id: "sp-12",
      category: "XỊT KHOÁNG NHA KHOA",
      name: "Tinh Dầu Xịt Thơm Miệng Thảo Dược Rừng – 200ml",
      oldPrice: "700,000 đ",
      price: "595,000 đ",
      discountBadge: "-15%",
      image: "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=500&q=80",
      description: "Hương lá thông và bạc hà tự nhiên giúp sảng khoái khoang miệng tức thì."
    }
  ],
  suggestedItems: [
    {
      id: "sug-1",
      category: "KHUẾCH TÁN THẢO DƯỢC",
      name: "Tinh Dầu Tràm Trà Sát Khuẩn Nướu – 50ml",
      oldPrice: "140,000 đ",
      price: "110,000 đ",
      discountBadge: "-21%",
      image: "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=500&q=80",
      description: "Kháng viêm tự nhiên, hỗ trợ điều trị nhiệt miệng và viêm lợi."
    },
    {
      id: "sug-2",
      category: "XỊT THƠM MIỆNG",
      name: "Tinh Dầu Dạng Xịt Kháng Khuẩn – 200ml",
      oldPrice: "700,000 đ",
      price: "595,000 đ",
      discountBadge: "-15%",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      description: "Khử mùi hôi miệng tức thì sau bữa ăn với tinh chất khuynh diệp."
    },
    {
      id: "sug-3",
      category: "SERUM NHA KHOA",
      name: "Serum Trắng Răng Ngọc Trai Endless Euphoria 125ml",
      oldPrice: "1,845,000 đ",
      price: "1,120,000 đ",
      discountBadge: "-39%",
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=500&q=80",
      description: "Dưỡng trắng chuyên sâu không gây ê buốt."
    },
    {
      id: "sug-4",
      category: "BỘ CHĂM SÓC SỨ",
      name: "Tinh Chất Bảo Vệ Răng Sứ Misumi RoMansu 55ml",
      oldPrice: "449,000 đ",
      price: "255,000 đ",
      discountBadge: "-43%",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
      description: "Giữ độ bóng sáng như mới cho mão răng toàn sứ."
    }
  ],
  bestSellers: [
    {
      id: "best-1",
      category: "TINH DẦU NHA KHOA",
      name: "Tinh Dầu Mù U & Tràm Trà Sát Khuẩn – 50ml",
      oldPrice: "140,000 đ",
      price: "110,000 đ",
      discountBadge: "-21%",
      image: "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=500&q=80",
      description: "Sản phẩm bán chạy số 1 cho người niềng răng chỉnh nha."
    },
    {
      id: "best-2",
      category: "BỘ DƯỠNG MÔI & NỤ CƯỜI",
      name: "Combo Gel Ủ Trắng Răng Ban Đêm & Mặt Nạ Ngủ Môi Mini",
      price: "98,000 đ",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=500&q=80",
      description: "Chăm sóc trọn vẹn nụ cười hồng hào, răng trắng sáng."
    },
    {
      id: "best-3",
      category: "BẢO VỆ MEN RĂNG",
      name: "Kem Đánh Răng Khoáng Chất Fiji Fresher Collection 473ml",
      price: "100,000 đ",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80",
      description: "Bổ sung Fluoride và Canxi hữu cơ ngừa sâu răng."
    },
    {
      id: "best-4",
      category: "VIÊN NGẬM TRẮNG RĂNG",
      name: "Viên Ngậm Sạch Mảng Bám & Dưỡng Nướu Vitamin E",
      price: "17,000 đ",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
      description: "Tiện lợi mang theo khi đi du lịch hoặc công tác."
    }
  ],
  newArrivals: [
    {
      id: "new-1",
      category: "TINH DẦU THẢO DƯỢC",
      name: "Tinh Dầu Mù U Kháng Khuẩn Nướu – 50ml",
      oldPrice: "140,000 đ",
      price: "110,000 đ",
      discountBadge: "-21%",
      image: "https://images.unsplash.com/photo-1608248597359-0e6d526a68b8?auto=format&fit=crop&w=500&q=80",
      description: "Phiên bản mới tăng cường tinh chất bạc hà the mát."
    },
    {
      id: "new-2",
      category: "XỊT THƠM MIỆNG",
      name: "Tinh Dầu Dạng Xịt Thảo Mộc – 200ml",
      oldPrice: "700,000 đ",
      price: "595,000 đ",
      discountBadge: "-15%",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      description: "Thiết kế vòi xịt phun sương siêu mịn."
    },
    {
      id: "new-3",
      category: "SERUM TRẮNG RĂNG",
      name: "Serum Trắng Răng Endless Euphoria 125ml",
      oldPrice: "1,845,000 đ",
      price: "1,120,000 đ",
      discountBadge: "-39%",
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=500&q=80",
      description: "Công thức cải tiến giảm ố vàng chỉ sau 5 lần chải."
    },
    {
      id: "new-4",
      category: "CHĂM SÓC RĂNG SỨ",
      name: "Tinh Chất Dưỡng Răng Sứ Misumi RoMansu 55ml",
      oldPrice: "449,000 đ",
      price: "255,000 đ",
      discountBadge: "-43%",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
      description: "Bảo vệ toàn diện răng sứ thẩm mỹ và trụ Implant."
    }
  ]
};
