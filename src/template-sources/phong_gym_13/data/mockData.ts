import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Gym13FeaturedTrio {
  id: string;
  headerTitle: string;
  badgeSub: string;
  name: string;
  image: string;
}

export interface Gym13Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  tabCategory?: "NEW" | "BEST" | "POPULAR";
  image: string;
}

export interface Gym13Data extends ClonedTemplateBaseData {
  featuredTrio: Gym13FeaturedTrio[];
  tabSneakers: Gym13Product[];
  accessories: Gym13Product[];
  promoBannerTitleWhite: string;
  promoBannerTitleYellow: string;
  promoBannerImage: string;
  saleSneakers: Gym13Product[];
}

export const phongGym13DefaultData: Gym13Data = {
  business: {
    name: "ConverseFit",
    phone: ["076 922 0162", "0909 888 100"],
    email: ["cskh@conversefit.vn", "store@conversefit.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "09:00 - 22:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1640,
    experienceYears: "10 Năm",
    aboutTitle: "GIỚI THIỆU",
    aboutText: [
      "Chào mừng bạn đến với ngôi nhà ConverseFit! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Street Workout & Sneaker 100 năm, và đang không ngừng phát triển lớn mạnh."
    ],
    highlights: [
      "Giày đế bằng phẳng chuẩn mực cho Squat, Deadlift & Street Workout",
      "Trang phục Hoodie, Jogger & Túi trống tập Gym chính hãng",
      "Ưu đãi giảm giá lên đến 50% cho hội viên CLB"
    ]
  },
  hero: {
    eyebrow: "TRUNG TÂM STREET WORKOUT, CALISTHENICS & SNEAKER",
    title: "CONVERSEFIT SNE☆KER",
    subtitle:
      "Chào mừng bạn đến với ngôi nhà ConverseFit! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử 100 năm, và đang không ngừng phát triển lớn mạnh.",
    ctaText: "Xem sản phẩm",
    ctaLink: "#san-pham-giam-gia",
    backgroundImage:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1600&q=85"
  },
  featuredTrio: [
    {
      id: "trio-1",
      headerTitle: "TEMPORA",
      badgeSub: "SNE☆KER",
      name: "ConverseFit Classic Low Navy",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "trio-2",
      headerTitle: "LABORE' T",
      badgeSub: "SNE☆KER",
      name: "ConverseFit Street High Grey",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "trio-3",
      headerTitle: "Calis Pro",
      badgeSub: "SNE☆KER",
      name: "ConverseFit All Star Red Lift",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
    }
  ],
  tabSneakers: [
    {
      id: "ts-1",
      name: "Chuck Taylor Classic All Black",
      price: "1,250,000 ₫",
      tabCategory: "NEW",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ts-2",
      name: "Chuck Taylor Classic Crimson",
      price: "1,250,000 ₫",
      tabCategory: "NEW",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ts-3",
      name: "Chuck Taylor Classic Navy",
      price: "1,250,000 ₫",
      tabCategory: "BEST",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ts-4",
      name: "Chuck Taylor Classic Black/White",
      price: "1,250,000 ₫",
      tabCategory: "POPULAR",
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
    }
  ],
  accessories: [
    {
      id: "acc-1",
      name: "Quần Jogger Tập Gym Star Chevron",
      price: "950,000 ₫",
      image:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-2",
      name: "Áo Hoodie Street Workout Metal Cons",
      price: "1,400,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-3",
      name: "Áo Thun Dài Tay Tập Luyện X-Tendencies",
      price: "700,000 ₫",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-4",
      name: "Áo Thun Collegiate Text SS Tee",
      price: "600,000 ₫",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-5",
      name: "Balo Thể Thao Poly Chuck Plus 1.0",
      price: "770,000 ₫",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-6",
      name: "Balo Phòng Tập Speed 2 Backpack",
      price: "700,000 ₫",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-7",
      name: "Túi Trống Tập Gym Lil Duffel",
      price: "700,000 ₫",
      image:
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "acc-8",
      name: "Túi Trống Thể Thao Sport Duffel Camo",
      price: "1,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    }
  ],
  promoBannerTitleWhite: "KHUYẾN MÃI ",
  promoBannerTitleYellow: "GIẢM GIÁ 50%",
  promoBannerImage:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
  saleSneakers: [
    {
      id: "ss-1",
      name: "Jack Purcell Pro Training",
      oldPrice: "1,500,000 ₫",
      price: "1,050,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-2",
      name: "One Star Pro OG Update Red",
      oldPrice: "1,500,000 ₫",
      price: "1,050,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-3",
      name: "Chuck Taylor All Star 70 Poplin",
      oldPrice: "1,600,000 ₫",
      price: "1,120,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-4",
      name: "84 Thunderbolt Breathable Mesh",
      oldPrice: "1,600,000 ₫",
      price: "1,120,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-5",
      name: "Chuck Taylor All Star Ox Flyknit",
      oldPrice: "2,000,000 ₫",
      price: "1,400,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-6",
      name: "Break Point Foundational Leather",
      oldPrice: "1,600,000 ₫",
      price: "1,120,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-7",
      name: "Cons Auckland Ultra Runner",
      oldPrice: "1,300,000 ₫",
      price: "910,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ss-8",
      name: "Cons PL 76 Foundational Leather",
      oldPrice: "1,500,000 ₫",
      price: "1,050,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
