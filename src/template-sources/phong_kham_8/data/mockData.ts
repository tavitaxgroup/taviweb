import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham8Product {
  id: string;
  name: string;
  price: string;
  tab: "Sơ sinh" | "Bé gái" | "Bé trai";
  image: string;
}

export interface PhongKham8Data extends ClonedTemplateBaseData {
  heroProductCallout: {
    name: string;
    price: string;
  };
  categories: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  bestSellers: PhongKham8Product[];
  editorialCollections: {
    left: {
      title: string;
      cta: string;
      image: string;
    };
    right: {
      title: string;
      cta: string;
      image: string;
    };
  };
  newArrivals: PhongKham8Product[];
  featuredPair: {
    leftProduct: PhongKham8Product;
    rightBanner: {
      title: string;
      cta: string;
      image: string;
    };
  };
  giftingSection: {
    heading: string;
    featuredGift: PhongKham8Product;
    ctaText: string;
    rightImage: string;
  };
  whyPillars: Array<{
    id: string;
    iconType: "cloud" | "flower" | "heart";
    title: string;
    description: string;
  }>;
  communityAndBlog: {
    communityTitle: string;
    communityDescription: string;
    communityCta: string;
    communityImage: string;
    blogTitle: string;
    blogCta: string;
    blogImage: string;
  };
  organicStory: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    image: string;
  };
  shippingPerks: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
}

export const phongKham8DefaultData: PhongKham8Data = {
  business: {
    name: "MonaKid",
    phone: ["(84) 123-456-789", "1900 636 648"],
    email: ["cskh@monakid-debebe.vn", "hello@mona.media"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "08:30 - 20:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 3420,
    experienceYears: "10+",
    aboutTitle: "Trung Tâm Chăm Sóc Sơ Sinh, Lớp Học Tiền Sản & Đồ Hữu Cơ Chuẩn Y Khoa",
    aboutText: [
      "MonaKid (DE BEBE) đồng hành cùng ba mẹ từ những tuần thai đầu tiên với chuỗi lớp học tiền sản, tư vấn giấc ngủ sơ sinh bởi Bác sĩ Nhi khoa và dòng sản phẩm cotton hữu cơ đạt chuẩn GOTS quốc tế.",
      "Làn da trẻ sơ sinh mỏng hơn người lớn gấp 5 lần — vì vậy từng sợi vải và sản phẩm chăm sóc tại MonaKid đều cam kết 100% không hóa chất tẩy nhuộm, nâng niu bé yêu như vòng tay mẹ."
    ],
    highlights: [
      "Mềm Mại Như Mây — Dịu nhẹ tuyệt đối cho làn da sơ sinh",
      "Chuẩn Hữu Cơ GOTS — 100% bông organic không hóa chất",
      "Lớp Học Tiền Sản & Nhi Khoa — Trực tiếp & trực tuyến hàng tuần"
    ]
  },
  hero: {
    eyebrow: "XUÂN HÈ / 2026",
    title: "Bộ sưu tập sơ sinh\n& chăm sóc bé\ngiới hạn đã ra mắt",
    subtitle:
      "Thiết kế tối giản chuẩn Bắc Âu từ sợi bông hữu cơ GOTS được các chuyên gia Da liễu Nhi khoa khuyên dùng.",
    ctaText: "Khám phá ngay",
    ctaLink: "#best-sellers",
    backgroundImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1500&q=85"
  },
  heroProductCallout: {
    name: "Áo kẻ sọc hữu cơ",
    price: "370,000 ₫"
  },
  categories: [
    {
      id: "cat-baby-boy",
      title: "Bé Trai Sơ Sinh",
      subtitle: "0 – 24 tháng",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-baby-girl",
      title: "Bé Gái Sơ Sinh",
      subtitle: "0 – 24 tháng",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-boys",
      title: "Thời Trang Bé Trai",
      subtitle: "2 – 6 tuổi",
      image:
        "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cat-girls",
      title: "Thời Trang Bé Gái",
      subtitle: "2 – 6 tuổi",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bestSellers: [
    {
      id: "bs-1",
      name: "Quần Short Bermuda Hoạ Tiết Tự Nhiên",
      price: "340,000₫",
      tab: "Bé trai",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-2",
      name: "Bộ Pijama Cotton Hữu Cơ 3 Chi Tiết",
      price: "210,000₫",
      tab: "Sơ sinh",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-3",
      name: "Áo Khoác Nỉ Tai Gấu Organic",
      price: "250,000₫",
      tab: "Sơ sinh",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bs-4",
      name: "Set 2 Món Sơ Sinh Kháng Khuẩn",
      price: "120,000₫ - 250,000₫",
      tab: "Bé gái",
      image:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  editorialCollections: {
    left: {
      title: "Phối Đồ Sáng Tạo Cho Bé",
      cta: "Khám phá ngay",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80"
    },
    right: {
      title: "Êm Ái & An Toàn Cho Da Sơ Sinh",
      cta: "Khám phá ngay",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80"
    }
  },
  newArrivals: [
    {
      id: "na-1",
      name: "Áo Len Đan Hoạ Tiết Cừu Non",
      price: "340,000₫",
      tab: "Sơ sinh",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "na-2",
      name: "Giày Tập Đi Đế Mềm Chống Trượt",
      price: "340,000₫",
      tab: "Bé gái",
      image:
        "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "na-3",
      name: "Áo Khoác Cardigan Đan Chéo",
      price: "210,000₫",
      tab: "Sơ sinh",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "na-4",
      name: "Bộ Liền Thân Túi Kangaroo",
      price: "340,000₫",
      tab: "Bé trai",
      image:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=500&q=80"
    }
  ],
  featuredPair: {
    leftProduct: {
      id: "fp-1",
      name: "Yếm Nhung Tăm Hữu Cơ",
      price: "340,000₫",
      tab: "Sơ sinh",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80"
    },
    rightBanner: {
      title: "Bộ sưu tập Anh Chị Em gắn kết",
      cta: "Xem bộ sưu tập",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
    }
  },
  giftingSection: {
    heading: "Quà tặng đầy tháng & sơ sinh",
    featuredGift: {
      id: "gift-1",
      name: "Áo Len Đan Hoạ Tiết Cừu Non",
      price: "340,000₫",
      tab: "Sơ sinh",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=500&q=80"
    },
    ctaText: "Xem tất cả hộp quà",
    rightImage:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=85"
  },
  whyPillars: [
    {
      id: "wp-1",
      iconType: "cloud",
      title: "Mềm Mại Như Mây",
      description: "Êm ái tuyệt đối như cái ôm của mẹ, bảo vệ làn da nhạy cảm của trẻ sơ sinh."
    },
    {
      id: "wp-2",
      iconType: "flower",
      title: "Thân Thiện & Thuần Khiết",
      description: "100% sợi bông hữu cơ đạt chứng nhận GOTS y khoa, không chất tẩy trắng."
    },
    {
      id: "wp-3",
      iconType: "heart",
      title: "Bền Bỉ Cùng Năm Tháng",
      description: "Kháng khuẩn tự nhiên, thấm hút mồ hôi vượt trội, không xù lông sau nhiều lần giặt."
    }
  ],
  communityAndBlog: {
    communityTitle: "Tham gia cộng đồng & lớp học tiền sản trực tuyến",
    communityDescription:
      "Đồng hành cùng ba mẹ từ giai đoạn thai kỳ đến những năm tháng đầu đời của bé. Với các lớp học trực tuyến và trực tiếp cùng Bác sĩ Nhi khoa, ba mẹ sẽ tự tin chăm sóc bé yêu phát triển toàn diện.",
    communityCta: "Xem lịch lớp học",
    communityImage:
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
    blogTitle: "Cẩm nang giấc ngủ & dinh dưỡng sơ sinh từ chuyên gia",
    blogCta: "Đọc cẩm nang",
    blogImage:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80"
  },
  organicStory: {
    eyebrow: "CÂU CHUYỆN CỦA CHÚNG TÔI",
    title: "Vì sao chất liệu hữu cơ quan trọng với trẻ sơ sinh",
    description:
      "Làn da trẻ sơ sinh không chỉ mỏng manh mà còn hấp thụ trực tiếp mọi thứ chạm vào da. Đó là lý do chúng tôi chỉ sử dụng bông hữu cơ đạt chuẩn GOTS tinh khiết nhất — hoàn toàn không thuốc trừ sâu và không hóa chất độc hại.",
    ctaText: "Tìm hiểu thêm",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=85"
  },
  shippingPerks: [
    {
      id: "sp-1",
      title: "Giao hàng nhanh chóng",
      subtitle: "Giao tận nơi toàn quốc trong vòng 2–5 ngày làm việc."
    },
    {
      id: "sp-2",
      title: "Miễn phí vận chuyển",
      subtitle: "Miễn phí giao hàng cho mọi đơn hàng từ 2.000.000₫."
    },
    {
      id: "sp-3",
      title: "Tư vấn tận tâm",
      subtitle: "Chuyên viên chăm sóc mẹ & bé luôn sẵn sàng hỗ trợ qua Email & Hotline."
    }
  ]
};
