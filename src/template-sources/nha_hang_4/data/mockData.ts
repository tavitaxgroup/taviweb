import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DishItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  category: string;
  dietType?: "fastfood" | "healthy";
  rating?: number;
  image: string;
}

export interface NhaHang4Data extends ClonedTemplateBaseData {
  topBarPromo: string;
  aboutSection: {
    discountBadge: string;
    title: string;
    description: string;
    image: string;
    features: Array<{ id: string; label: string }>;
  };
  popularDishes: DishItem[];
  signatureDishes: DishItem[];
  mustTryDishes: DishItem[];
  promoBanners: Array<{
    id: string;
    title: string;
    subtitle: string;
    discountText: string;
    ctaText: string;
    bgColor: string;
    image: string;
  }>;
  specialOfferBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    discountPercent: string;
    image: string;
  };
  menuCategories: Array<{
    id: string;
    label: string;
  }>;
  tabbedMenuItems: DishItem[];
  galleryImages: Array<{
    id: string;
    title: string;
    image: string;
  }>;
}

export const nhaHang4DefaultData: NhaHang4Data = {
  business: {
    name: "BiteBlitz",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "order@biteblitz.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "09:00 - 23:00 (Giao hàng siêu tốc 30 phút)",
    rating: 4.9,
    reviewCount: 1580,
    aboutTitle: "NƠI TIN CẬY CHO ĐỒ ĂN NHANH CHẤT LƯỢNG",
    aboutText: [
      "Chúng tôi cam kết mang đến cho bạn những món ăn nhanh ngon miệng, tươi ngon và giá cả hợp lý. Từ những món ăn kinh điển đến hương vị mới lạ, mỗi miếng ăn đều là một trải nghiệm thú vị.",
      "Nguyên liệu thịt bò Mỹ thượng hạng, gà tươi nóng mỗi ngày cùng công thức nước sốt độc quyền giúp BiteBlitz chinh phục hàng chục ngàn thực khách sành ăn."
    ],
    experienceYears: "12+"
  },
  topBarPromo: "Miễn phí vận chuyển cho đơn hàng trên 300k",
  hero: {
    eyebrow: "Chào mừng đến với BiteBlitz",
    title: "MỖI NGÀY MỘT HƯƠNG VỊ",
    subtitle:
      "Thưởng thức Burger bò nướng lửa hồng, gà rán giòn tan và pizza phô mai kéo sợi nóng hổi giao tận tay chỉ trong 25 phút.",
    ctaText: "XEM MENU",
    ctaLink: "#thuc-don",
    secondaryCtaText: "ĐẶT HÀNG NGAY",
    secondaryCtaLink: "#dat-hang",
    backgroundImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
    ]
  },
  aboutSection: {
    discountBadge: "40% GIẢM",
    title: "NƠI TIN CẬY CHO ĐỒ ĂN NHANH CHẤT LƯỢNG",
    description:
      "Chúng tôi cam kết mang đến cho bạn những món ăn nhanh ngon miệng, tươi ngon và giá cả hợp lý. Từ những món ăn kinh điển đến hương vị mới lạ, mỗi miếng ăn đều là một trải nghiệm thú vị.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    features: [
      { id: "ft-1", label: "NGON MIỆNG" },
      { id: "ft-2", label: "TƯƠI NGON" },
      { id: "ft-3", label: "GIÁ TỐT" }
    ]
  },
  popularDishes: [
    {
      id: "pd-1",
      name: "Phở Ly Siêu Tốc",
      subtitle: "Nước dùng hầm xương bò đậm đà chuẩn vị",
      price: "270,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pd-2",
      name: "Pizza Mini Vị Đậm",
      subtitle: "Đế giòn kiểu Ý phủ phô mai Mozzarella",
      price: "390,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pd-3",
      name: "Mỳ Xào Sốt Mắm Tỏi",
      subtitle: "Sợi mì tươi dai thấm đẫm sốt bơ tỏi",
      price: "270,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pd-4",
      name: "Mì Xào Siêu Tốc",
      subtitle: "Mì xào bò Mỹ áp chảo kèm rau củ tươi",
      price: "270,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    }
  ],
  signatureDishes: [
    {
      id: "sd-1",
      name: "Cánh Gà Sốt Mật Ong",
      subtitle: "Cánh gà chiên giòn phủ sốt mật ong rừng",
      price: "210,000₫",
      category: "GÀ RÁN",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sd-2",
      name: "Chảo Nghêu Ăn Liền",
      subtitle: "Nghêu tươi hấp bơ tỏi ớt cay nồng",
      price: "340,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sd-3",
      name: "Súp Nấm Kem Trắng",
      subtitle: "Nấm Truffle nấu kem tươi béo ngậy",
      price: "170,000₫",
      oldPrice: "290,000₫",
      discountBadge: "41% SALE",
      category: "RAU CỦ",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sd-4",
      name: "Bánh Cuộn Gà Cay",
      subtitle: "Bánh Tortilla cuộn gà nướng phô mai",
      price: "130,000₫",
      category: "BÁNH CUỘN",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  mustTryDishes: [
    {
      id: "mt-1",
      name: "Burger Gà Sốt Tiêu",
      subtitle: "Ức gà phi lê giòn rụm sốt tiêu đen",
      price: "110,000₫",
      oldPrice: "200,000₫",
      discountBadge: "45% SALE",
      category: "GÀ RÁN",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mt-2",
      name: "Chảo Nghêu Bơ Tỏi",
      subtitle: "Hải sản tươi nướng phô mai đút lò",
      price: "340,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mt-3",
      name: "Sữa Chua Hộp Nhỏ",
      subtitle: "Sữa chua Hy Lạp phủ phô mai bốn vị",
      price: "180,000₫",
      category: "TRÁNG MIỆNG",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "mt-4",
      name: "Pizza Gấp Kiểu Ý",
      subtitle: "Bò bít tết nướng kèm khoai tây chiên",
      price: "170,000₫",
      category: "COMBO",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    }
  ],
  promoBanners: [
    {
      id: "pb-1",
      title: "Thưởng Thức Vị Burger Đỉnh Cao",
      subtitle: "Giảm ngay 20% cho tuần này",
      discountText: "Deal Burger Bò Mỹ",
      ctaText: "MUA NGAY",
      bgColor: "bg-[#E3001B] text-white",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pb-2",
      title: "Khoai Tây Chiên",
      subtitle: "Khoai Tây Chiên Giòn Rụm - Deal Hot 30%",
      discountText: "Phô Mai Lắc Đặc Biệt",
      ctaText: "MUA NGAY",
      bgColor: "bg-[#F5B400] text-slate-950",
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pb-3",
      title: "Mỳ Ý",
      subtitle: "Mỳ Ý Đậm Đà - Ưu Đãi giảm giá 25% ngay hôm nay",
      discountText: "Sốt Bò Bằm Bolognese",
      ctaText: "MUA NGAY",
      bgColor: "bg-[#1B8E3E] text-white",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
    }
  ],
  specialOfferBanner: {
    eyebrow: "Ưu Đãi Đặc Biệt Hôm Nay",
    title: "BÙNG NỔ VỊ NGON BURGER SIÊU HOT!",
    subtitle: "GIẢM GIÁ CỰC SỐC 32%",
    discountPercent: "32%",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=85"
  },
  menuCategories: [
    { id: "ALL", label: "TẤT CẢ" },
    { id: "GÀ RÁN", label: "GÀ RÁN" },
    { id: "COMBO", label: "COMBO" },
    { id: "TRÁNG MIỆNG", label: "TRÁNG MIỆNG" },
    { id: "BÁNH CUỘN", label: "BÁNH CUỘN" },
    { id: "RAU CỦ", label: "RAU CỦ" }
  ],
  tabbedMenuItems: [
    {
      id: "tm-1",
      name: "Chảo Nghêu Ăn Liền",
      subtitle: "Nghêu tươi hấp sốt bơ tỏi cay nồng kèm bánh mì nướng giòn tan",
      price: "340,000₫",
      category: "COMBO",
      dietType: "fastfood",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-2",
      name: "Sữa Chua Hộp Nhỏ",
      subtitle: "Sữa chua Hy Lạp mịn màng kết hợp hạt dinh dưỡng và trái cây tươi",
      price: "180,000₫",
      category: "TRÁNG MIỆNG",
      dietType: "healthy",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-3",
      name: "Snack Xốp Giòn",
      subtitle: "Khoai tây múi cau chiên giòn lắc phô mai Cheddar thơm béo",
      price: "170,000₫",
      category: "GÀ RÁN",
      dietType: "fastfood",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-4",
      name: "Pizza Gấp Kiểu Ý",
      subtitle: "Thăn bò Mỹ áp chảo sốt tiêu đen dùng kèm khoai tây chiên giòn",
      price: "170,000₫",
      category: "COMBO",
      dietType: "fastfood",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-5",
      name: "Súp Nấm Kem Trắng",
      subtitle: "Súp nấm hương và kem tươi nấu chậm giàu dinh dưỡng ấm nóng",
      price: "170,000₫",
      oldPrice: "290,000₫",
      category: "RAU CỦ",
      dietType: "healthy",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-6",
      name: "Chả Giò Hải Sản",
      subtitle: "Chả giò tôm cua chiên giòn rụm chấm sốt Mayonnaise trứng cá",
      price: "280,000₫",
      oldPrice: "320,000₫",
      category: "BÁNH CUỘN",
      dietType: "fastfood",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-7",
      name: "Burger Gà Sốt Tiêu",
      subtitle: "Burger gà rán giòn nguyên miếng kẹp phô mai và xà lách tươi",
      price: "110,000₫",
      oldPrice: "200,000₫",
      category: "GÀ RÁN",
      dietType: "fastfood",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tm-8",
      name: "Bánh Cuộn Gà Nướng",
      subtitle: "Bánh cuộn ức gà nướng thảo mộc kèm sốt bơ xanh thanh mát",
      price: "130,000₫",
      category: "BÁNH CUỘN",
      dietType: "healthy",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80"
    }
  ],
  galleryImages: [
    {
      id: "gal-1",
      title: "Gà Nguyên Con Nướng Mật Ong",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Cơm Chiên Hải Sản Hoàng Kim",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Pizza Pepperoni Phô Mai Kéo Sợi",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Salad Viên Giòn Sốt Mè Rang",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Hoàng Minh Tuấn",
      role: "Thực khách tại Quận 1, TP.HCM",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Burger bò nướng ở đây cực kỳ mọng nước, vỏ bánh mềm thơm bơ và phô mai tan chảy ngập tràn. Đặt giao hàng buổi trưa chỉ mất chưa đầy 20 phút mà khoai tây chiên vẫn giòn rụm nóng hổi!"
    },
    {
      id: "rev-2",
      author: "Nguyễn Bảo Ngọc",
      role: "Food Reviewer tại TP.HCM",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Cánh gà sốt mật ong và pizza đế giòn thực sự xuất sắc! Hương vị đậm đà vừa miệng, đóng gói hộp giấy vô cùng chỉn chu sạch sẽ. Chắc chắn sẽ tiếp tục ủng hộ quán dài lâu."
    }
  ],
  news: [
    {
      id: "blog-1",
      date: "16 Th11, 2026",
      category: "2 Bình luận",
      title: "Bí Quyết Làm Nên Chiếc Burger Bò Mỹ Phô Mai Tan Chảy Chuẩn Vị",
      excerpt:
        "Khám phá quy trình nướng thịt bò lửa hồng giữ trọn độ ngọt tự nhiên kết hợp lớp sốt phô mai Cheddar béo ngậy độc quyền.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blog-2",
      date: "16 Th11, 2026",
      category: "2 Bình luận",
      title: "Top 5 Combo Gà Rán & Pizza Được Giới Trẻ Sài Gòn Săn Đón Nhất",
      excerpt:
        "Tổng hợp những phần ăn nhóm tiết kiệm đến 40% dành cho các buổi tiệc liên hoan văn phòng và họp mặt cuối tuần.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blog-3",
      date: "16 Th11, 2026",
      category: "2 Bình luận",
      title: "Xu Hướng Đồ Ăn Nhanh Healthy: Ngon Miệng Mà Vẫn Đủ Dinh Dưỡng",
      excerpt:
        "Sự kết hợp hoàn hảo giữa ức gà nướng thảo mộc, rau xanh hữu cơ và các loại sốt ít béo cho bữa trưa năng động.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

export default nhaHang4DefaultData;
