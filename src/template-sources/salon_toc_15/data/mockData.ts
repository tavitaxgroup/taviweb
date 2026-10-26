import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface FlexStylePromoStrip {
  id: string;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  image: string;
  bgColor: string;
}

export interface FlexStyleProductItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  tab: "best-sellers" | "new-products" | "sales-products";
  image: string;
  summary: string;
}

export interface FlexStyleMagazineArticle {
  id: string;
  title: string;
  category: "Tạo mẫu tóc" | "Cảm hứng" | "Chăm sóc tóc";
  excerpt: string;
  image: string;
}

export interface SalonToc15Data extends ClonedTemplateBaseData {
  heroCollectionBox: {
    eyebrow: string;
    title: string;
    buttonLabel: string;
  };
  promoStripCards: FlexStylePromoStrip[];
  productTabs: {
    id: "best-sellers" | "new-products" | "sales-products";
    label: string;
  }[];
  catalogItems: FlexStyleProductItem[];
  womanLookbook: {
    seasonCode: string;
    title: string;
    leftImage: string;
    rightImage: string;
  };
  manLookbook: {
    seasonCode: string;
    title: string;
    leftImage: string;
    rightImage: string;
  };
  monthlyHotBanner: {
    topLabel: string;
    hotPrefix: string;
    boxedHighlight: string;
    buttonLabel: string;
    backgroundImage: string;
  };
  featuredTickerPosts: { id: string; title: string; image: string }[];
  magazineFilters: string[];
  magazineArticles: FlexStyleMagazineArticle[];
  consultationBanner: {
    eyebrow: string;
    title: string;
    placeholder: string;
    buttonLabel: string;
  };
}

export const mockData: SalonToc15Data = {
  business: {
    name: "FlexStyle Hair & Fashion Studio",
    tagline: "FLEXSTYLE là sự lựa chọn hoàn hảo cho mái tóc và định hình phong cách cá nhân của bạn.",
    phone: ["0313728397", "0909 668 999"],
    email: ["info@themona.global", "studio@flexstyle.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 850,
    workingHours: "09:00 - 21:00 (Mỗi ngày)",
    aboutTitle: "FlexStyle Studio — Nghệ Thuật Tạo Mẫu Tóc & Định Hình Phong Cách Cá Nhân",
    aboutText: [
      "FlexStyle kết hợp dịch vụ thiết kế kiểu tóc đương đại cùng tư vấn định hình phong cách thời trang cá nhân (Personal Styling) dành cho cả Nam và Nữ.",
      "Mỗi bộ sưu tập theo mùa (Spring/Summer & Fall/Winter) tại FlexStyle đều mang hơi thở tối giản, thanh lịch và tôn vinh nét đẹp tự nhiên.",
    ],
  },
  hero: {
    eyebrow: "FLEXSTYLE STUDIO",
    title: 'Bộ sưu tập "Mùa xuân"',
    subtitle: "Định hình kiểu tóc Layer bay bổng & phong cách tối giản đương đại",
    ctaText: "ĐẾN CỬA HÀNG",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80",
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "CỬA HÀNG", href: "#san-pham" },
    { label: "VỀ CHÚNG TÔI", href: "#lookbook" },
    { label: "BỘ SƯU TẬP", href: "#lookbook" },
    { label: "TIN TỨC", href: "#tap-chi" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ],
  stats: [
    { value: "19SS", label: "Bộ sưu tập Lookbook mới" },
    { value: "50%", label: "Ưu đãi lễ hội cuối năm" },
    { value: "100%", label: "Tư vấn Stylist 1:1 miễn phí" },
    { value: "4.9★", label: "Đánh giá từ khách hàng" },
  ],

  heroCollectionBox: {
    eyebrow: "MONA FLEXSTYLE",
    title: 'Bộ sưu tập "Mùa xuân"',
    buttonLabel: "ĐẾN CỬA HÀNG",
  },

  promoStripCards: [
    {
      id: "ps-1",
      title: "Tạo kiểu thiết kế",
      ctaLabel: "XEM NGAY",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      bgColor: "#f2f3f5",
    },
    {
      id: "ps-2",
      title: "Giảm 50%",
      subtitle: "Sale cuối năm",
      ctaLabel: "XEM NGAY",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      bgColor: "#e4e6eb",
    },
    {
      id: "ps-3",
      title: "Bộ sưu tập",
      subtitle: '"Summer Hot"',
      ctaLabel: "XEM NGAY",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      bgColor: "#f5f6f8",
    },
  ],

  productTabs: [
    { id: "best-sellers", label: "Bán chạy nhất" },
    { id: "new-products", label: "Sản phẩm mới" },
    { id: "sales-products", label: "Đang giảm giá" },
  ],

  catalogItems: [
    {
      id: "fs-1",
      name: "Combo Uốn Sóng Lơi & Phục Hồi Olaplex",
      price: "430.000₫",
      tab: "best-sellers",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      summary: "Tạo sóng tóc bồng bềnh mềm mại chuẩn phong cách Hàn Quốc.",
    },
    {
      id: "fs-2",
      name: "Mũ Beret & Kẹp Tóc Thiết Kế Minimalist",
      price: "150.000₫ – 185.000₫",
      tab: "best-sellers",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
      summary: "Phụ kiện phối đồ tinh tế giúp tôn lên mái tóc uốn sóng.",
    },
    {
      id: "fs-3",
      name: "Máy Sấy Tạo Kiểu Ion Âm Pastel Rose",
      price: "610.000₫",
      tab: "best-sellers",
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
      summary: "Sấy khô nhanh mà không làm mất độ ẩm tự nhiên của sợi tóc.",
    },
    {
      id: "fs-4",
      name: "Gói Nhuộm Nâu Đào & Khóa Màu Collagen",
      price: "425.000₫",
      originalPrice: "530.000₫",
      discountBadge: "-20%",
      tab: "sales-products",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      summary: "Tông màu tôn trắng da, phù hợp với mọi phong cách trang điểm.",
    },
    {
      id: "fs-5",
      name: "Tinh Dầu Dưỡng Tóc Hoa Trà & Hạnh Nhân",
      price: "280.000₫",
      tab: "new-products",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Nuôi dưỡng ngọn tóc suôn mượt và tỏa hương thơm dịu nhẹ.",
    },
    {
      id: "fs-6",
      name: "Dầu Gội Thuần Chay Bưởi Non & Trà Xanh",
      price: "232.000₫",
      tab: "new-products",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      summary: "Làm sạch da đầu dịu nhẹ và giảm gãy rụng hiệu quả.",
    },
    {
      id: "fs-7",
      name: "Gói Cắt Layer Thiết Kế & Gội Thư Giãn",
      price: "215.000₫",
      tab: "best-sellers",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      summary: "Cắt tỉa đa tầng giúp gương mặt thon gọn và trẻ trung.",
    },
    {
      id: "fs-8",
      name: "Túi Tote Đựng Mỹ Phẩm & Phụ Kiện Tóc Azure",
      price: "290.000₫",
      originalPrice: "360.000₫",
      discountBadge: "-20%",
      tab: "sales-products",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
      summary: "Thiết kế tối giản thanh lịch, đựng vừa máy uốn tóc cá nhân.",
    },
  ],

  womanLookbook: {
    seasonCode: "19SS",
    title: "Bộ Sưu Tập Tóc Nữ",
    leftImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },

  manLookbook: {
    seasonCode: "19SS",
    title: "Bộ Sưu Tập Tóc Nam",
    leftImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },

  monthlyHotBanner: {
    topLabel: "CHỈ TRONG THÁNG NÀY",
    hotPrefix: "HOT !!!",
    boxedHighlight: "Giảm 40%|",
    buttonLabel: "XEM NGAY",
    backgroundImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
  },

  featuredTickerPosts: [
    {
      id: "ft-1",
      title: "Bí quyết phối kiểu tóc Layer với trang phục công sở...",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "ft-2",
      title: "Xu hướng màu nhuộm Nâu Trà Sữa dẫn đầu năm nay...",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "ft-3",
      title: "Top 5 kiểu tóc ngắn Hime & Bob cá tính cho mùa lễ hội...",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "ft-4",
      title: "5 Thương hiệu dưỡng tóc hữu cơ được Stylist khuyên dùng...",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=200&q=80",
    },
  ],

  magazineFilters: ["Tất cả", "Tạo mẫu tóc", "Cảm hứng", "Chăm sóc tóc"],

  magazineArticles: [
    {
      id: "mag-1",
      title: "TUYỂN TẬP KIỂU TÓC ĐẸP NHẤT TUẦN QUA TẠI FLEXSTYLE",
      category: "Chăm sóc tóc",
      excerpt:
        "Khám phá sự kết hợp hài hòa giữa kiểu tóc suôn thẳng tự nhiên cùng phong cách blazer tối giản dành cho các cặp đôi hiện đại...",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "mag-2",
      title: "5 XU HƯỚNG MÀU NHUỘM BÙNG NỔ TRONG MÙA HÈ NÀY",
      category: "Cảm hứng",
      excerpt:
        "Những gam màu nâu khói ánh rêu và vàng mật ong giúp làn da rạng rỡ hơn dưới ánh nắng tự nhiên mà không cần tẩy tóc nhiều lần...",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "mag-3",
      title: "CẨM NANG CHỌN PHỤ KIỆN TÓC CHO MÙA THU LÃNG MẠN",
      category: "Cảm hứng",
      excerpt:
        "Chỉ với một chiếc kẹp ngọc trai hoặc băng đô lụa, mái tóc uốn sóng lơi của bạn sẽ trở nên cuốn hút trong mọi buổi tiệc chiều...",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "mag-4",
      title: "PHONG CÁCH TÓC STREET STYLE NĂNG ĐỘNG TỪ NEW YORK",
      category: "Cảm hứng",
      excerpt:
        "Sự phóng khoáng của những lọn tóc xoăn hippie nhẹ nhàng kết hợp trang phục họa tiết mang lại nguồn năng lượng trẻ trung...",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "mag-5",
      title: "BIẾN HÓA MÁI TÓC NGẮN CÙNG ÁO KHOÁC DÁNG DÀI MÙA ĐÔNG",
      category: "Tạo mẫu tóc",
      excerpt:
        "Kiểu tóc Bob ôm nhẹ xương quai hàm giúp phần cổ trông cao ráo hơn khi diện khăn choàng len và áo khoác măng tô...",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "mag-6",
      title: "GỢI Ý TẠO KIỂU TÓC PIXIE & BOB TỐI GIẢN CHO NÀNG CÔNG SỞ",
      category: "Chăm sóc tóc",
      excerpt:
        "Tiết kiệm tối đa thời gian chuẩn bị mỗi buổi sáng với phác đồ cắt cấu trúc chuẩn xác từ Giám đốc Sáng tạo FlexStyle...",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
    },
  ],

  consultationBanner: {
    eyebrow: "Ưu đãi đặc biệt",
    title: "Nhận tư vấn miễn phí với các chuyên gia của FLEXSTYLE",
    placeholder: "Nhập email của bạn...",
    buttonLabel: "Đăng ký",
  },
};
