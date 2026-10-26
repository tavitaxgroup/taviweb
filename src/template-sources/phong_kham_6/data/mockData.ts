import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface JapanaProductItem {
  id: string;
  categoryLabel: string;
  name: string;
  oldPrice?: string;
  price: string;
  discountBadge?: string;
  image: string;
}

export interface PhongKham6Data extends ClonedTemplateBaseData {
  sidebarCategories: string[];
  subPromoBanners: Array<{
    id: string;
    title: string;
    highlight: string;
    subText: string;
    image: string;
    theme: "pink" | "aqua";
  }>;
  featuredProducts: JapanaProductItem[];
  catalogProducts: JapanaProductItem[];
  consumerNews: Array<{
    id: string;
    day: string;
    month: string;
    title: string;
    image: string;
  }>;
  japaneseBrands: Array<{
    id: string;
    name: string;
    sub?: string;
    color: string;
  }>;
}

export const phongKham6DefaultData: PhongKham6Data = {
  business: {
    name: "Japana Care",
    phone: ["0126 922 0162", "1900 636 648"],
    email: ["tuvan@japanacare.vn", "info@japanacare.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Từ 7h30 - 22h hàng ngày (Cả thứ 7 & Chủ Nhật)",
    rating: 4.9,
    reviewCount: 6420,
    experienceYears: "10+ Năm",
    aboutTitle: "TRUNG TÂM CHĂM SÓC SỨC KHỎE & DƯỢC MỸ PHẨM NHẬT BẢN JAPANA",
    aboutText: [
      "Hệ thống phân phối thực phẩm bảo vệ sức khỏe, nước uống Collagen, tảo lục hoàng gia và dược mỹ phẩm nội địa Nhật Bản chính hãng 100%, cam kết bảo vệ người mua hàng và thanh toán khi nhận hàng."
    ],
    highlights: [
      "100% bảo vệ người mua hàng - Đền bù 200% nếu phát hiện hàng giả",
      "Thanh toán khi nhận hàng (COD) trên toàn quốc",
      "Dược sĩ chuyên môn tư vấn liệu trình Collagen & Tảo biển 24/7",
      "Ưu đãi Mua 1 Tặng 1 các dòng thực phẩm chăm sóc sức khỏe Nhật Bản"
    ]
  },
  hero: {
    eyebrow: "QUYỀN NĂNG PHÁI ĐẸP",
    title: "SALE ĐẾN 40%",
    subtitle: "MUA 1 TẶNG 1",
    description:
      "Đại tiệc ưu đãi dược mỹ phẩm, nước uống Collagen và thực phẩm bảo vệ sức khỏe nội địa Nhật Bản.",
    ctaText: "XEM NGAY",
    ctaLink: "#san-pham-noi-bat",
    backgroundImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
  },
  sidebarCategories: [
    "Dưỡng da",
    "Dưỡng da cho nam",
    "Dưỡng tóc",
    "Nước hoa nam",
    "Nước hoa nữ",
    "Thơm nhà",
    "Trang điểm",
    "Mẹ và Bé",
    "Nhà cửa và Đời sống",
    "Thời trang",
    "Thực phẩm chức năng"
  ],
  subPromoBanners: [
    {
      id: "spb-1",
      title: "KEM DƯỠNG DA MẶT",
      highlight: "MUA 1 TẶNG 1",
      subText: "Dược mỹ phẩm phục hồi chuyên sâu",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      theme: "pink"
    },
    {
      id: "spb-2",
      title: "NƯỚC UỐNG COLLAGEN",
      highlight: "GIẢM 10%",
      subText: "MUA 1 TẶNG 1",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      theme: "aqua"
    }
  ],
  featuredProducts: [
    {
      id: "fp-1",
      categoryLabel: "KHUẾCH TÁN",
      name: "Tinh Dầu Mù U – 50ml",
      oldPrice: "140,000 ₫",
      price: "110,000 ₫",
      discountBadge: "-21%",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6858?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fp-2",
      categoryLabel: "BỘ DƯỠNG DA",
      name: "Combo Mặt Nạ Ngủ Cung Cấp Nước Và Mặt Nạ Ngủ Môi Mini",
      price: "98,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fp-3",
      categoryLabel: "CHỐNG NẮNG",
      name: "Sữa Tắm Nam Fiji Fresher Collection 473 ml",
      price: "100,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fp-4",
      categoryLabel: "BỘ DƯỠNG DA",
      name: "Mặt Nạ Dưỡng Da Vitamin E",
      price: "17,000 ₫",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "fp-5",
      categoryLabel: "BỘ CHĂM SÓC TÓC",
      name: "Gel Vuốt Giữ Nếp Tóc – 150ml",
      oldPrice: "120,000 ₫",
      price: "90,000 ₫",
      discountBadge: "-25%",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    }
  ],
  catalogProducts: [
    {
      id: "cp-1",
      categoryLabel: "KHUẾCH TÁN",
      name: "Tinh Dầu Mù U – 50ml",
      oldPrice: "140,000 ₫",
      price: "110,000 ₫",
      discountBadge: "-21%",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6858?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-2",
      categoryLabel: "PHUN THƠM NHÀ",
      name: "Tinh Dầu Dạng Xịt – 200ml",
      oldPrice: "700,000 ₫",
      price: "595,000 ₫",
      discountBadge: "-15%",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-3",
      categoryLabel: "BỘ NƯỚC HOA",
      name: "Nước Hoa Nữ Endless Euphoria 125ml",
      oldPrice: "1,845,000 ₫",
      price: "1,120,000 ₫",
      discountBadge: "-39%",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-4",
      categoryLabel: "BỘ NƯỚC HOA",
      name: "Nước Hoa Nữ Misumi RoMansu 55ml",
      oldPrice: "449,000 ₫",
      price: "255,000 ₫",
      discountBadge: "-43%",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-5",
      categoryLabel: "DƯỠNG THỂ",
      name: "Nước Hoa Nam One Red 100ml",
      oldPrice: "1,195,000 ₫",
      price: "770,000 ₫",
      discountBadge: "-36%",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-6",
      categoryLabel: "BỘ NƯỚC HOA",
      name: "Nước Hoa Nam Bleu De 100ml",
      oldPrice: "2,945,000 ₫",
      price: "2,420,000 ₫",
      discountBadge: "-18%",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-7",
      categoryLabel: "ĐIỀU TRỊ CHUYÊN SÂU",
      name: "Huyết Thanh Dành Cho Tóc Khô, Hư Tổn – 12 x 10ml",
      price: "390,000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cp-8",
      categoryLabel: "BỘ CHĂM SÓC TÓC",
      name: "Dầu Gội Đầu Chống Rụng Tóc Hiệu Quả – 300ml",
      oldPrice: "286,000 ₫",
      price: "250,000 ₫",
      discountBadge: "-13%",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80"
    }
  ],
  services: [
    {
      id: "s-jp1",
      title: "Nước uống Collagen Gold 10,000mg Nhật Bản",
      description: "Trẻ hóa làn da, mờ nếp nhăn và tăng độ đàn hồi chỉ sau 4 tuần.",
      price: "890,000 ₫"
    },
    {
      id: "s-jp2",
      title: "Viên uống nhau thai Resvera Placenta",
      description: "Cân bằng nội tiết tố và dưỡng trắng sáng da từ cấp độ tế bào.",
      price: "1,250,000 ₫"
    },
    {
      id: "s-jp3",
      title: "Tảo lục Hoàng gia Chlorella Royal DX",
      description: "Bổ sung vitamin, khoáng chất và thanh lọc cơ thể cho cả gia đình.",
      price: "650,000 ₫"
    }
  ],
  consumerNews: [
    {
      id: "cn-1",
      day: "05",
      month: "Th3",
      title: "Chắc khỏe xương với phương pháp đơn giản bất ngờ",
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cn-2",
      day: "05",
      month: "Th3",
      title:
        'Bất ngờ với công dụng "thần thánh" mà thực phẩm chức năng mang lại',
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cn-3",
      day: "05",
      month: "Th3",
      title:
        "Khám phá công dụng bất ngờ đến khó tin về tảo lục hoàng gia Nhật Bản",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cn-4",
      day: "05",
      month: "Th3",
      title: "Công dụng của Collagen trứng cá hồi có gì vượt trội?",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    }
  ],
  japaneseBrands: [
    { id: "jb-1", name: "clé de peau", sub: "BEAUTÉ", color: "#8c734b" },
    { id: "jb-2", name: "Kanebo", color: "#111111" },
    { id: "jb-3", name: "KEWPIE", color: "#e31837" },
    { id: "jb-4", name: "MENARD", sub: "JAPAN, SINCE 1959", color: "#333333" },
    { id: "jb-5", name: "Nagano", sub: "ながの", color: "#8b1e24" },
    { id: "jb-6", name: "Maris", color: "#1e293b" },
    { id: "jb-7", name: "ROHTO", sub: "NEVER SAY NEVER", color: "#005bac" }
  ]
};
