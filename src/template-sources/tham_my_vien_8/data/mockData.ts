import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ThamMyVien8Product {
  id: string;
  discountCircle: string;
  category: string;
  name: string;
  oldPrice: string;
  price: string;
  image: string;
}

export interface ThamMyVien8CategoryBlock {
  id: string;
  title: string;
  iconType: "heart" | "arrow";
  tabs: string[];
  leftPoster: {
    brand: string;
    headline: string;
    ctaText: string;
    bgClass: string;
    textDark?: boolean;
    image: string;
  };
  topSubBanners: Array<{
    id: string;
    heading: string;
    sub: string;
    bgClass: string;
    image: string;
  }>;
  products: ThamMyVien8Product[];
}

export interface ThamMyVien8Data extends ClonedTemplateBaseData {
  slogan: string;
  supportHotline: string;
  sidebarCategories: string[];
  trustGuarantees: Array<{
    id: string;
    title: string;
  }>;
  activeDeals: ThamMyVien8Product[];
  featuredBrands: Array<{
    id: string;
    name: string;
    sub: string;
    color: string;
  }>;
  categoryShowcaseBlocks: ThamMyVien8CategoryBlock[];
  suggestedProducts: ThamMyVien8Product[];
  recentlyViewed: Array<{
    id: string;
    discount?: string;
    image: string;
  }>;
  topSearchTags: string[];
}

export const thamMyVien8DefaultData: ThamMyVien8Data = {
  business: {
    name: "MONA SHOP",
    phone: ["1900 636 900", "0126 922 0162"],
    email: ["cskh@hasakibeauty.vn", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "8-21h kể cả T7, CN",
    rating: 4.9,
    reviewCount: 8900,
    experienceYears: "12+",
    aboutTitle: "Hệ Thống Clinic Làm Đẹp & Siêu Thị Mỹ Phẩm Chính Hãng",
    aboutText: [
      "MONA SHOP — Chất lượng cho tất cả! Hệ thống phân phối dược mỹ phẩm chính hãng kết hợp dịch vụ chăm sóc da, điều trị chuyên sâu và triệt lông công nghệ cao.",
      "Cam kết 100% hàng chính hãng có hóa đơn VAT, giao nhanh dưới 120 phút nội thành và đổi trả miễn phí trong 14 ngày."
    ],
    highlights: [
      "Thanh toán khi nhận hàng",
      "Giao hàng dưới 120 phút",
      "14 ngày đổi trả miễn phí",
      "Hàng chính hãng 100%"
    ]
  },
  slogan: "Chất lượng cho tất cả !",
  supportHotline: "0126 922 0162",
  sidebarCategories: [
    "Dưỡng da",
    "Dưỡng da cho nam",
    "Dưỡng tóc",
    "Nước hoa nam",
    "Nước hoa nữ",
    "Thơm nhà",
    "Trang điểm",
    "Giảm béo",
    "Mẹ và Bé",
    "Sức khỏe làm đẹp",
    "Triệt lông"
  ],
  hero: {
    eyebrow: "CHƯƠNG TRÌNH TÍCH ĐIỂM",
    title: "KHÁCH HÀNG THÂN THIẾT",
    subtitle:
      "Tích điểm đổi quà và nhận ưu đãi giảm tới 55% cho hàng ngàn dược mỹ phẩm & dịch vụ Clinic làm đẹp.",
    ctaText: "Xem Thêm",
    ctaLink: "#deal-dang-dien-ra",
    backgroundImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
  },
  trustGuarantees: [
    { id: "tg-1", title: "Thanh toán khi\nnhận hàng" },
    { id: "tg-2", title: "Giao hàng dưới\n120 phút" },
    { id: "tg-3", title: "14 ngày đổi trả\nmiễn phí" },
    { id: "tg-4", title: "Hàng\nchính hãng" }
  ],
  activeDeals: [
    {
      id: "dl-1",
      discountCircle: "-55%",
      category: "CÔNG CỤ & PHỤ KIỆN",
      name: "Cọ Má Hồng Dạng Vặn M10",
      oldPrice: "100,000 ₫",
      price: "45,000 ₫",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "dl-2",
      discountCircle: "-21%",
      category: "KHUẾCH TÁN",
      name: "Tinh Dầu Mù U – 50ml",
      oldPrice: "140,000 ₫",
      price: "110,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "dl-3",
      discountCircle: "-38%",
      category: "CÔNG CỤ & PHỤ KIỆN",
      name: "Miếng Dán Kích Mí Vacosi Size S 500 Miếng",
      oldPrice: "73,000 ₫",
      price: "45,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "dl-4",
      discountCircle: "-32%",
      category: "BỘ DƯỠNG DA",
      name: "Sữa Tắm Nam Body Odor Shield 473ml",
      oldPrice: "155,000 ₫",
      price: "105,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "dl-5",
      discountCircle: "-33%",
      category: "BỘ DƯỠNG DA",
      name: "Sữa Tắm Nam Power Scrub – 473ml",
      oldPrice: "150,000 ₫",
      price: "100,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "dl-6",
      discountCircle: "-25%",
      category: "BỘ CHĂM SÓC TÓC",
      name: "Gel Vuốt Giữ Nếp Tóc – 150ml",
      oldPrice: "120,000 ₫",
      price: "90,000 ₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80"
    }
  ],
  featuredBrands: [
    { id: "fb-1", name: "clé de peau", sub: "BEAUTÉ", color: "#8c734b" },
    { id: "fb-2", name: "Kanebo", sub: "TOKYO", color: "#111111" },
    { id: "fb-3", name: "KEWPIE", sub: "JAPAN", color: "#e11d48" },
    { id: "fb-4", name: "MENARD", sub: "JAPAN, SINCE 1959", color: "#1e293b" },
    { id: "fb-5", name: "nagano", sub: "ながの", color: "#b91c1c" },
    { id: "fb-6", name: "Maris", sub: "COSMETICS", color: "#111111" },
    { id: "fb-7", name: "ROHTO", sub: "NEVER SAY NEVER", color: "#0369a1" },
    { id: "fb-8", name: "TRANSINO", sub: "WHITENING", color: "#334155" }
  ],
  categoryShowcaseBlocks: [
    {
      id: "blk-skincare",
      title: "SẢN PHẨM DƯỠNG DA",
      iconType: "heart",
      tabs: ["Bộ dưỡng da", "Cổ & Vùng ngực", "Chống nắng"],
      leftPoster: {
        brand: "Cetaphil",
        headline: "Dịu nhẹ\ncho làn da",
        ctaText: "Khám phá ▸",
        bgClass: "bg-[#eaf4fb]",
        textDark: true,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
      },
      topSubBanners: [
        {
          id: "sb-1",
          heading: "SỮA & DINH DƯỠNG",
          sub: "Nguồn dinh dưỡng bổ sung\nCho bé khỏe mạnh, phát triển",
          bgClass: "bg-[#f2f9f6]",
          image:
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sb-2",
          heading: "DA DẺ MỊN MÀNG",
          sub: "Hương Thơm Lan Tỏa",
          bgClass: "bg-[#f9f6f0]",
          image:
            "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sb-3",
          heading: "CHĂM SÓC DA MẶT",
          sub: "Da đẹp từng centimet",
          bgClass: "bg-[#fbf3f1]",
          image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80"
        }
      ],
      products: [
        {
          id: "sk-1",
          discountCircle: "-21%",
          category: "KHUẾCH TÁN",
          name: "Tinh Dầu Mù U – 50ml",
          oldPrice: "140,000 ₫",
          price: "110,000 ₫",
          image:
            "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sk-2",
          discountCircle: "-15%",
          category: "PHUN THƠM NHÀ",
          name: "Tinh Dầu Dạng Xịt – 200ml",
          oldPrice: "700,000 ₫",
          price: "595,000 ₫",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sk-3",
          discountCircle: "-39%",
          category: "BỘ NƯỚC HOA",
          name: "Nước Hoa Nữ Endless Euphoria 125ml",
          oldPrice: "1,845,000 ₫",
          price: "1,120,000 ₫",
          image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "sk-4",
          discountCircle: "-43%",
          category: "BỘ NƯỚC HOA",
          name: "Nước Hoa Nữ Misumi RoMansu 55ml",
          oldPrice: "449,000 ₫",
          price: "255,000 ₫",
          image:
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "blk-hairbody",
      title: "SẢN PHẨM CHĂM SÓC TÓC",
      iconType: "arrow",
      tabs: ["Dưỡng tóc", "Bộ chăm sóc tóc", "Điều trị chuyên sâu", "Triệt lông"],
      leftPoster: {
        brand: "MAYBELLINE NEW YORK",
        headline: "PHÉP MÀU MAKE UP\nTHU HÚT ÁNH NHÌN",
        ctaText: "Khám phá ▸",
        bgClass: "bg-[#1a1a1a]",
        textDark: false,
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
      },
      topSubBanners: [
        {
          id: "hb-1",
          heading: "Ủ DƯỠNG BODY",
          sub: "Bí quyết da trắng rạng rỡ",
          bgClass: "bg-[#eef7fc]",
          image:
            "https://images.unsplash.com/photo-1512290900672-1f04d660c456?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "hb-2",
          heading: "LÔNG ĐI NHẸ NHÀNG",
          sub: "Làn Da Láng Mượt",
          bgClass: "bg-[#fdf1f5]",
          image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "hb-3",
          heading: "TRIỆT LÔNG VĨNH VIỄN",
          sub: "Tiêu diệt tận gốc",
          bgClass: "bg-[#fcf3f0]",
          image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80"
        }
      ],
      products: [
        {
          id: "hb-p1",
          discountCircle: "-21%",
          category: "KHUẾCH TÁN",
          name: "Tinh Dầu Mù U – 50ml",
          oldPrice: "140,000 ₫",
          price: "110,000 ₫",
          image:
            "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "hb-p2",
          discountCircle: "-15%",
          category: "PHUN THƠM NHÀ",
          name: "Tinh Dầu Dạng Xịt – 200ml",
          oldPrice: "700,000 ₫",
          price: "595,000 ₫",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "hb-p3",
          discountCircle: "-39%",
          category: "BỘ NƯỚC HOA",
          name: "Nước Hoa Nữ Endless Euphoria 125ml",
          oldPrice: "1,845,000 ₫",
          price: "1,120,000 ₫",
          image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "hb-p4",
          discountCircle: "-43%",
          category: "BỘ NƯỚC HOA",
          name: "Nước Hoa Nữ Misumi RoMansu 55ml",
          oldPrice: "449,000 ₫",
          price: "255,000 ₫",
          image:
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "blk-perfume",
      title: "NƯỚC HOA ĐẲNG CẤP",
      iconType: "arrow",
      tabs: ["Dưỡng tóc", "Bộ chăm sóc tóc", "Điều trị chuyên sâu", "Triệt lông"],
      leftPoster: {
        brand: "PURITÉ BY PROVENCE",
        headline: "Mùi thơm nồng nàn\ntừ nước Pháp",
        ctaText: "Khám phá ▸",
        bgClass: "bg-[#fef6f6]",
        textDark: true,
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80"
      },
      topSubBanners: [
        {
          id: "pf-1",
          heading: "LỚP NỀN CĂNG MƯỚT",
          sub: "Má Ửng Hồng Xinh",
          bgClass: "bg-[#fcf5f2]",
          image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "pf-2",
          heading: "LỚP NỀN CĂNG MƯỚT",
          sub: "Má Ửng Hồng Xinh",
          bgClass: "bg-[#fcf5f2]",
          image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "pf-3",
          heading: "SON MÔI",
          sub: "Vũ Khí Bí Mật\nCho Nàng Rạng Rỡ",
          bgClass: "bg-[#fdf0f5]",
          image:
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80"
        }
      ],
      products: [
        {
          id: "pf-p1",
          discountCircle: "-21%",
          category: "KHUẾCH TÁN",
          name: "Tinh Dầu Mù U – 50ml",
          oldPrice: "140,000 ₫",
          price: "110,000 ₫",
          image:
            "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "pf-p2",
          discountCircle: "-15%",
          category: "PHUN THƠM NHÀ",
          name: "Tinh Dầu Dạng Xịt – 200ml",
          oldPrice: "700,000 ₫",
          price: "595,000 ₫",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "pf-p3",
          discountCircle: "-39%",
          category: "BỘ NƯỚC HOA",
          name: "Nước Hoa Nữ Endless Euphoria 125ml",
          oldPrice: "1,845,000 ₫",
          price: "1,120,000 ₫",
          image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
        },
        {
          id: "pf-p4",
          discountCircle: "-43%",
          category: "BỘ NƯỚC HOA",
          name: "Nước Hoa Nữ Misumi RoMansu 55ml",
          oldPrice: "449,000 ₫",
          price: "255,000 ₫",
          image:
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ],
  suggestedProducts: [
    {
      id: "sg-1",
      discountCircle: "-21%",
      category: "KHUẾCH TÁN",
      name: "Tinh Dầu Mù U – 50ml",
      oldPrice: "140,000 ₫",
      price: "110,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sg-2",
      discountCircle: "-15%",
      category: "PHUN THƠM NHÀ",
      name: "Tinh Dầu Dạng Xịt – 200ml",
      oldPrice: "700,000 ₫",
      price: "595,000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sg-3",
      discountCircle: "-39%",
      category: "BỘ NƯỚC HOA",
      name: "Nước Hoa Nữ Endless Euphoria 125ml",
      oldPrice: "1,845,000 ₫",
      price: "1,120,000 ₫",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sg-4",
      discountCircle: "-43%",
      category: "BỘ NƯỚC HOA",
      name: "Nước Hoa Nữ Misumi RoMansu 55ml",
      oldPrice: "449,000 ₫",
      price: "255,000 ₫",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "sg-5",
      discountCircle: "-36%",
      category: "DƯỠNG THỂ",
      name: "Nước Hoa Nam One Red 100ml",
      oldPrice: "1,195,000 ₫",
      price: "770,000 ₫",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=400&q=80"
    }
  ],
  recentlyViewed: [
    {
      id: "rv-1",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-2",
      discount: "-21%",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-3",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-4",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-5",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-6",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-7",
      discount: "-33%",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rv-8",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
    }
  ],
  topSearchTags: [
    "Bộ chăm sóc tóc",
    "Bộ dưỡng da",
    "Bộ nước hoa",
    "Bộ trang điểm",
    "Chống nắng",
    "Công cụ & Phụ kiện",
    "Cổ & Vùng ngực",
    "Dưỡng da",
    "Dưỡng da cho nam",
    "Dưỡng thể",
    "Dưỡng tóc",
    "Khuếch tán",
    "Nước hoa nam",
    "Nước hoa nữ",
    "Phun thơm nhà",
    "Thơm nhà",
    "Trang điểm",
    "Điều trị chuyên sâu"
  ]
};
