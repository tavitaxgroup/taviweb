import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham10Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  saleBadge?: string;
  rating: number;
  category: "Thức ăn" | "Đồ chơi" | "Đồ dùng";
  image: string;
}

export interface PhongKham10PricingPlan {
  id: string;
  price: string;
  planName: string;
  petIcon: "cat" | "dog" | "hamster";
  features: string[];
}

export interface PhongKham10Data extends ClonedTemplateBaseData {
  heroQuickCards: Array<{
    id: string;
    title: string;
    subtitle: string;
    bgColor: string;
    iconType: "cat" | "vet" | "dog";
  }>;
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
    checklist: string[];
    experienceCount: string;
    experienceLabel: string;
    image: string;
  };
  diverseServices: Array<{
    id: string;
    title: string;
    description: string;
    iconType: "grooming" | "food" | "care" | "training";
  }>;
  featuredProducts: PhongKham10Product[];
  weeklyPromoBanner: {
    eyebrow: string;
    title: string;
    description: string;
    discountText: string;
    ctaText: string;
    leftImage: string;
    rightImage: string;
  };
  galleryImages: string[];
  pricingPlans: PhongKham10PricingPlan[];
  featuredNutritionBanner: {
    priceBadge: string;
    title: string;
    description: string;
    ctaText: string;
    productPackImage: string;
    petsGroupImage: string;
  };
  blogPosts: Array<{
    id: string;
    dateRibbon: string;
    category: string;
    commentsCount: number;
    title: string;
    excerpt: string;
    image: string;
  }>;
  footerGallery: string[];
}

export const phongKham10DefaultData: PhongKham10Data = {
  business: {
    name: "MONA MEDIA",
    phone: ["(+84) 0313728397", "1900 636 648"],
    email: ["info@themona.global", "cskh@petjoyclinic.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00",
    rating: 5.0,
    reviewCount: 520,
    experienceYears: "25+",
    aboutTitle: "Dịch vụ chăm sóc thú cưng hoàn hảo",
    aboutText: [
      "Phòng khám Chăm sóc Sức khỏe & Dinh dưỡng Thú cưng MONA MEDIA (PetJoy) mang đến giải pháp toàn diện từ khám bệnh thú y, spa cắt tỉa lông nghệ thuật đến siêu thị dinh dưỡng hữu cơ nhập khẩu.",
      "Với hơn 25 năm kinh nghiệm cùng đội ngũ bác sĩ thú y giỏi nhất, chúng tôi cam kết đồng hành bảo vệ sức khỏe cho những người bạn nhỏ bốn chân."
    ],
    highlights: [
      "Nhân viên chuyên nghiệp",
      "Bác sĩ giỏi nhất",
      "Chăm sóc tận tình",
      "Thực phẩm chất lượng"
    ]
  },
  hero: {
    eyebrow: "WELCOME TO PET CARE",
    title: "Best Care of\nOur Little Friends",
    subtitle:
      "Trung tâm khám chữa bệnh thú y, spa grooming và dinh dưỡng chuẩn quốc tế dành riêng cho thú cưng của bạn.",
    ctaText: "Khám phá",
    ctaLink: "#san-pham-noi-bat",
    backgroundImage:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1500&q=85"
  },
  heroQuickCards: [
    {
      id: "hq-1",
      title: "Chăm sóc Mèo (Cat care)",
      subtitle: "Khám nội khoa, tiêm phòng & dinh dưỡng chuyên biệt cho mèo",
      bgColor: "#f6b93b",
      iconType: "cat"
    },
    {
      id: "hq-2",
      title: "Bác sĩ Thú y (Vet tips)",
      subtitle: "Tư vấn sức khỏe, xét nghiệm & cấp cứu thú y 24/7",
      bgColor: "#f36f45",
      iconType: "vet"
    },
    {
      id: "hq-3",
      title: "Chăm sóc Chó (Dog care)",
      subtitle: "Spa tắm cắt tỉa lông, huấn luyện & phác đồ phòng bệnh",
      bgColor: "#6ab04c",
      iconType: "dog"
    }
  ],
  aboutSection: {
    eyebrow: "GIỚI THIỆU",
    title: "Dịch vụ chăm sóc thú cưng hoàn hảo",
    description:
      "Chúng tôi kết hợp y học thú y hiện đại với chế độ dinh dưỡng khoa học và không gian spa thư giãn không tiếng ồn, giúp thú cưng luôn cảm thấy an toàn và thoải mái.",
    checklist: [
      "Nhân viên chuyên nghiệp",
      "Bác sĩ giỏi nhất",
      "Chăm sóc tận tình",
      "Thực phẩm chất lượng"
    ],
    experienceCount: "25+",
    experienceLabel: "Years Experience",
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=85"
  },
  diverseServices: [
    {
      id: "ds-1",
      title: "Cắt tỉa,\nchải lông",
      description:
        "Tắm thảo dược khử mùi, vệ sinh tuyến hôi, cắt móng và tạo kiểu lông chuẩn salon.",
      iconType: "grooming"
    },
    {
      id: "ds-2",
      title: "Thức ăn\nchất lượng",
      description:
        "Khẩu phần hạt hữu cơ, pate tươi và thực phẩm bổ sung Lysine tăng đề kháng.",
      iconType: "food"
    },
    {
      id: "ds-3",
      title: "Chăm sóc\nthú cưng",
      description:
        "Khám tổng quát định kỳ, siêu âm, xét nghiệm máu và tiêm vắc-xin trọn gói.",
      iconType: "care"
    },
    {
      id: "ds-4",
      title: "Chương trình\nhuấn luyện",
      description:
        "Huấn luyện kỹ năng giao tiếp, đi vệ sinh đúng chỗ và phản xạ vâng lời tích cực.",
      iconType: "training"
    }
  ],
  featuredProducts: [
    {
      id: "fp-1",
      name: "Thức ăn cho chó",
      price: "250.000₫",
      rating: 5,
      category: "Thức ăn",
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-2",
      name: "Lysine tự nhiên cho thú cưng",
      price: "229.000₫",
      oldPrice: "250.000₫",
      saleBadge: "Sale!",
      rating: 5,
      category: "Thức ăn",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-3",
      name: "Hạt Reflex cho chó",
      price: "500.000₫",
      rating: 5,
      category: "Thức ăn",
      image:
        "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-4",
      name: "Pik thực phẩm tự nhiên",
      price: "250.000₫",
      rating: 5,
      category: "Thức ăn",
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-5",
      name: "Áo len xám",
      price: "50.000₫",
      rating: 5,
      category: "Đồ dùng",
      image:
        "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-6",
      name: "Thức ăn đặc biệt",
      price: "500.000₫",
      rating: 5,
      category: "Thức ăn",
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-7",
      name: "Ball on rope toy",
      price: "250.000₫",
      rating: 5,
      category: "Đồ chơi",
      image:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "fp-8",
      name: "Multipatel pet food",
      price: "50.000₫",
      rating: 5,
      category: "Thức ăn",
      image:
        "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=400&q=80"
    }
  ],
  weeklyPromoBanner: {
    eyebrow: "ƯU ĐÃI HÀNG TUẦN",
    title: "Dịch vụ chăm sóc\ntận tâm",
    description:
      "Giảm ngay 30% gói tắm spa thảo dược, cắt tỉa lông tạo kiểu và khám kiểm tra sức khỏe tổng quát trong tuần này.",
    discountText: "30%\noff",
    ctaText: "Khám phá",
    leftImage:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80"
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80"
  ],
  pricingPlans: [
    {
      id: "plan-1",
      price: "350,000₫",
      planName: "Gói Cơ Bản",
      petIcon: "cat",
      features: ["Spa & tắm rửa", "Cắt tỉa & chải chuốt", "Chăm sóc & huấn luyện"]
    },
    {
      id: "plan-2",
      price: "450,000₫",
      planName: "Gói Nâng Cấp",
      petIcon: "dog",
      features: ["Spa & tắm rửa", "Cắt tỉa & chải chuốt", "Chăm sóc & huấn luyện"]
    },
    {
      id: "plan-3",
      price: "550,000₫",
      planName: "Gói Cao Cấp",
      petIcon: "hamster",
      features: ["Spa & tắm rửa", "Cắt tỉa & chải chuốt", "Chăm sóc & huấn luyện"]
    }
  ],
  featuredNutritionBanner: {
    priceBadge: "399,000₫",
    title: "Thức ăn thú cưng\nchất lượng hàng đầu",
    description:
      "Bộ đôi hạt dinh dưỡng Reflex Lamb & Rice kết hợp viên nhai PetNaturals L-Lysine giúp tăng cường miễn dịch, tiêu hóa khỏe và lông bóng mượt.",
    ctaText: "Mua ngay",
    productPackImage:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=85",
    petsGroupImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=85"
  },
  blogPosts: [
    {
      id: "bp-1",
      dateRibbon: "04 TH5",
      category: "Pet Care",
      commentsCount: 0,
      title: "Những khoảnh khắc đáng yêu khi thú cưng chơi nhạc cùng chủ",
      excerpt:
        "Tương tác âm nhạc và trò chơi trí tuệ mỗi ngày giúp cún cưng phát triển trí thông minh cảm xúc vượt trội.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bp-2",
      dateRibbon: "04 TH5",
      category: "Cat's Nap",
      commentsCount: 2,
      title: "Tầm quan trọng của thời gian vận động mỗi ngày đối với mèo",
      excerpt:
        "Dành 20 phút vận động với cần câu mèo và bóng dây thừng giúp phòng tránh béo phì và stress ở mèo nuôi trong nhà.",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bp-3",
      dateRibbon: "04 TH5",
      category: "Health Care",
      commentsCount: 0,
      title: "Bí quyết làm việc tại nhà hiệu quả cùng người bạn bốn chân",
      excerpt:
        "Thiết lập góc nghỉ ngơi êm ái và khung giờ ăn cố định giúp bạn vừa tập trung làm việc vừa gắn kết với thú cưng.",
      image:
        "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=500&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=250&q=80"
  ]
};
