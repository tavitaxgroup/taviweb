import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Gym14WatchCategory {
  id: string;
  name: string;
  countText: string;
  image: string;
}

export interface Gym14WatchProduct {
  id: string;
  code: string;
  name: string;
  discountBadge: string;
  oldPrice: string;
  price: string;
  image: string;
}

export interface Gym14Data extends ClonedTemplateBaseData {
  heroTitleLine1: string;
  heroTitleLine2: string;
  trustBadges: Array<{
    id: string;
    title: string;
    iconType: "support" | "delivery" | "gift";
  }>;
  watchCategories: Gym14WatchCategory[];
  saleWatches: Gym14WatchProduct[];
  featuredWatches: Gym14WatchProduct[];
}

export const phongGym14DefaultData: Gym14Data = {
  business: {
    name: "G-Watch Sport",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["cskh@gwatchsport.vn", "support@gwatchsport.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 22:00 (Phục vụ 24/7 Online)",
    rating: 4.9,
    reviewCount: 1920,
    experienceYears: "12 Năm",
    aboutTitle: "Trung Tâm Đồng Hồ Thể Thao, Bấm Giờ & Đo Nhịp Tim Chính Hãng",
    aboutText: [
      "Chuyên phân phối đồng hồ thể thao chống sốc G-Shock, Baby-G, Edifice bấm giờ huấn luyện Mỹ / Nhật chính hãng giá cạnh tranh nhất."
    ],
    highlights: [
      "Phục vụ tư vấn kỹ thuật 24/7",
      "Giao hàng tận nơi toàn quốc",
      "Miễn phí vận chuyển & Bảo hành 5 năm"
    ]
  },
  heroTitleLine1: "G-SHOCK",
  heroTitleLine2: "VIỆT NAM",
  hero: {
    eyebrow: "ĐỒNG HỒ THỂ THAO & HUẤN LUYỆN CHỐNG SỐC",
    title: "G-SHOCK VIỆT NAM",
    subtitle:
      "Chuyên phân phối đồng hồ thể thao Casio Mỹ / Nhật chính hãng chống nước 200M, bấm giờ tập Gym & chạy bộ giá cạnh tranh nhất",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham-giam-gia",
    backgroundImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=85"
  },
  trustBadges: [
    { id: "tb-1", title: "Phục vụ 24/7", iconType: "support" },
    { id: "tb-2", title: "Giao hàng tận nơi", iconType: "delivery" },
    { id: "tb-3", title: "Miễn phí vận chuyển", iconType: "gift" }
  ],
  watchCategories: [
    {
      id: "wcat-1",
      name: "AVIATOR",
      countText: "12 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "wcat-2",
      name: "BABY-G",
      countText: "18 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "wcat-3",
      name: "EDIFICE",
      countText: "15 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "wcat-4",
      name: "G-SHOCK",
      countText: "24 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80"
    }
  ],
  saleWatches: [
    {
      id: "sw-1",
      code: "GA-1100-2BDR",
      name: "Đồng Hồ Thể Thao Chống Sốc GA-1100-2BDR",
      discountBadge: "-33%",
      oldPrice: "7,779,000 ₫",
      price: "5,199,000 ₫",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sw-2",
      code: "GG-1000RG-1ADR",
      name: "Đồng Hồ Địa Hình Mudmaster GG-1000RG-1ADR",
      discountBadge: "-38%",
      oldPrice: "8,878,000 ₫",
      price: "5,499,000 ₫",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sw-3",
      code: "BA-110PP-7ADR",
      name: "Đồng Hồ Chạy Bộ Nữ Baby-G BA-110PP-7ADR",
      discountBadge: "-22%",
      oldPrice: "4,230,000 ₫",
      price: "3,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sw-4",
      code: "GWG-1000-1A3DR",
      name: "Đồng Hồ Huấn Luyện Mặt Sapphire GWG-1000-1A3DR",
      discountBadge: "-31%",
      oldPrice: "21,597,000 ₫",
      price: "14,999,000 ₫",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    }
  ],
  featuredWatches: [
    {
      id: "fw-1",
      code: "GA-1100SC-3ADR",
      name: "Đồng Hồ Thể Thao Quân Đội GA-1100SC-3ADR",
      discountBadge: "-36%",
      oldPrice: "8,327,000 ₫",
      price: "5,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fw-2",
      code: "BGA-190BL-7BDR",
      name: "Đồng Hồ Tập Gym & Bơi Lội BGA-190BL-7BDR",
      discountBadge: "-24%",
      oldPrice: "4,324,000 ₫",
      price: "3,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fw-3",
      code: "GWG-1000-1A3DR",
      name: "Đồng Hồ Cảm Biến Bộ Ba GWG-1000-1A3DR",
      discountBadge: "-31%",
      oldPrice: "21,597,000 ₫",
      price: "14,999,000 ₫",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fw-4",
      code: "GG-1000-1A8DR",
      name: "Đồng Hồ Bấm Giờ Thể Lực GG-1000-1A8DR",
      discountBadge: "-29%",
      oldPrice: "9,100,000 ₫",
      price: "6,499,000 ₫",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Cách sử dụng chức năng Stopwatch bấm giờ hiệp tập HIIT và Tabata",
      date: "19/05/2025",
      category: "Kinh nghiệm huấn luyện",
      excerpt:
        "Kiểm soát chính xác thời gian nghỉ giữa các hiệp tập tạ và chạy nước rút giúp tối ưu hiệu quả đốt mỡ.",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Top 5 mẫu đồng hồ G-Shock chống va đập và kháng nước 200M cho Gymer",
      date: "14/05/2025",
      category: "Đánh giá sản phẩm",
      excerpt:
        "Thiết kế vỏ sợi carbon siêu bền bảo vệ bộ máy tuyệt đối trong các bài tập tạ nặng, Crossfit và bơi lội.",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Hướng dẫn phân biệt đồng hồ G-Shock chính hãng và chế độ bảo hành pin 5 năm",
      date: "08/05/2025",
      category: "Cẩm nang chính hãng",
      excerpt:
        "Kiểm tra tem chống giả, mã khắc nắp lưng thép không gỉ và thẻ bảo hành điện tử toàn quốc tại G-Watch Sport.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "fb-1",
      author: "Anh Triều",
      role: "HLV Thể Hình",
      rating: 5,
      content:
        "Mình đeo chiếc GWG-1000 đi dạy học viên ở phòng Gym suốt 2 năm nay, va chạm tạ hay rửa nước liên tục vẫn bền bỉ như mới. Chế độ bấm giờ cực nhạy!",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fb-2",
      author: "Chị Tuyết",
      role: "Sinh viên & Runner",
      rating: 5,
      content:
        "Dòng Baby-G lên tay rất khỏe khoắn, nhẹ nhàng khi chạy bộ buổi sáng. Nhân viên tư vấn nhiệt tình, giao hàng nhanh và đóng gói cực kỳ kỹ lưỡng.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fb-3",
      author: "Anh Xuân",
      role: "Doanh nhân",
      rating: 5,
      content:
        "Rất ưng ý mẫu Mudmaster chính hãng tại shop, mức giá ưu đãi tốt hơn hẳn thị trường lại kèm bảo hành 5 năm nên hoàn toàn yên tâm sử dụng.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ]
};
