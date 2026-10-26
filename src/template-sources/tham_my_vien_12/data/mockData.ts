import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LookPrettyCategoryCard {
  id: string;
  title: string;
  items: string[];
  image: string;
}

export interface LookPrettyProduct {
  id: string;
  name: string;
  category: "may-nang-co" | "anh-sang" | "duoc-my-pham" | "thiet-bi-spa";
  price: string;
  oldPrice: string;
  rating: number;
  image: string;
  description: string;
}

export interface LookPrettyBlogPost {
  id: string;
  category: string;
  comments: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export interface LookPrettyData extends ClonedTemplateBaseData {
  topBarMessage: string;
  navigation: Array<{ label: string; href: string; hasDropdown?: boolean }>;
  heroThumbImage: string;
  categoryCards: LookPrettyCategoryCard[];
  promoBento: {
    yellowBanner: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaText: string;
      image: string;
    };
    tealBanner: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaText: string;
      image: string;
    };
    redBanner: {
      eyebrow: string;
      title: string;
      price: string;
      subtitle: string;
      ctaText: string;
      image: string;
    };
    bentoProducts: LookPrettyProduct[];
  };
  featuredProductsSection: {
    title: string;
    tabs: Array<{
      id: "all" | "may-nang-co" | "anh-sang" | "duoc-my-pham" | "thiet-bi-spa";
      label: string;
    }>;
    products: LookPrettyProduct[];
  };
  monthlyDealBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  customerReviewsSection: {
    title: string;
    portraitImage: string;
    reviews: Array<{
      id: string;
      name: string;
      city: string;
      avatar: string;
      quote: string;
    }>;
  };
  latestNewsSection: {
    title: string;
    leftPosts: LookPrettyBlogPost[];
    rightFeaturedPost: LookPrettyBlogPost;
  };
  bluePerksBar: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
}

export const thamMyVien12DefaultData: LookPrettyData = {
  business: {
    name: "Mona Media LookPretty",
    tagline: "Phòng Khám Da Liễu & Thiết Bị Thẩm Mỹ Công Nghệ Cao",
    phone: ["0313728397", "(+84) 0313728397"],
    email: ["info@themona.global", "cskh@lookpretty.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00",
    rating: 4.9,
    reviewCount: 3280,
    experienceYears: "10+",
    aboutTitle: "Phòng Khám Da Liễu & Thẩm Mỹ Công Nghệ Cao LookPretty",
    aboutText: [
      "LookPretty tiên phong cung cấp giải pháp trẻ hóa da chuẩn Y khoa và phân phối các dòng thiết bị thẩm mỹ cá nhân công nghệ cao đạt chuẩn FDA.",
      "Sự lựa chọn đa dạng từ các thương hiệu làm đẹp hàng đầu giúp bạn dễ dàng tìm thấy thiết bị và liệu trình phù hợp với làn da và ngân sách của mình."
    ],
    highlights: [
      "Miễn phí giao hàng từ đơn trên 1,000,000 ₫",
      "Hỗ trợ chuyên viên da liễu trực tuyến 24/7",
      "Hoàn tiền đảm bảo trong vòng 15 ngày",
      "Nhận mã quà tặng ưu đãi thành viên 20%"
    ]
  },
  topBarMessage: "Giao hàng miễn phí từ đơn hàng trên 1,000,000 ₫",
  navigation: [
    { label: "Trang Chủ", href: "#top" },
    { label: "Giới Thiệu", href: "#danh-muc" },
    { label: "Sản Phẩm", href: "#san-pham-noi-bat", hasDropdown: true },
    { label: "Tin Tức", href: "#tin-tuc-moi" },
    { label: "Liên Hệ", href: "#footer-lookpretty" }
  ],
  hero: {
    badge: "TIẾT KIỆM 60%",
    eyebrow: "TIẾT KIỆM 60%",
    title: "Thẩm Mỹ Công Nghệ\nThân Thiện",
    subtitle:
      "Sự lựa chọn đa dạng và các thương hiệu thiết bị làm đẹp hàng đầu, bạn có thể tìm thấy sản phẩm chăm sóc da phù hợp với phong cách và ngân sách của mình.",
    ctaText: "Khám Phá Ngay",
    ctaLink: "#san-pham-noi-bat",
    secondaryCtaText: "Xem Tất Cả",
    secondaryCtaLink: "#danh-muc",
    backgroundImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85"
  },
  heroThumbImage:
    "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=400&q=80",
  categoryCards: [
    {
      id: "cat-1",
      title: "Trẻ Hóa Da",
      items: [
        "Máy nâng cơ RF",
        "Điện di tinh chất",
        "Sóng âm Hifu Mini",
        "Thanh lăn vi dòng",
        "Trẻ hóa vùng mắt"
      ],
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cat-2",
      title: "Ánh Sáng Sinh Học",
      items: [
        "Mặt nạ LED 7 màu",
        "Vòm ánh sáng Omega",
        "Trị mụn Blue Light",
        "Kích thích Collagen",
        "Phục hồi sau Laser"
      ],
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cat-3",
      title: "Phân Tích & Soi Da",
      items: [
        "Máy soi da AI 3D",
        "Đo độ ẩm biểu bì",
        "Phân tích sắc tố nám",
        "Màn hình tư vấn Clinic",
        "Phác đồ cá nhân hóa"
      ],
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "cat-4",
      title: "Thiết Bị Spa Tại Nhà",
      items: [
        "Máy rửa mặt sóng âm",
        "Máy xông hơi Nano",
        "Máy hút mụn chân không",
        "Máy triệt lông lạnh IPL",
        "Máy sấy tóc Ion âm"
      ],
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80"
    }
  ],
  promoBento: {
    yellowBanner: {
      eyebrow: "KHÁM PHÁ",
      title: "Thiết Bị\nĐo Chỉ Số Da",
      subtitle: "Giảm Tới 70% & Giao Hàng\nMiễn Phí",
      ctaText: "Khám Phá Ngay",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    tealBanner: {
      eyebrow: "CHẤT LƯỢNG",
      title: "Đèn Trị Liệu\nThẩm Mỹ",
      subtitle: "Giảm Tới 70% & Giao Hàng\nMiễn Phí",
      ctaText: "Khám Phá Ngay",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },
    redBanner: {
      eyebrow: "Tiết Kiệm",
      title: "Máy Xông Nano",
      price: "899,000 ₫",
      subtitle: "Giảm Tới 70% & Giao Hàng\nMiễn Phí",
      ctaText: "Khám Phá Ngay",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80"
    },
    bentoProducts: [
      {
        id: "bp-1",
        name: "Mặt Nạ Ánh Sáng Sinh Học LookPretty VR Pro 7 Bước Sóng Trẻ Hóa Da",
        category: "anh-sang",
        oldPrice: "1,205,000 ₫",
        price: "1,150,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
        description:
          "Mặt nạ quang học 7 phổ ánh sáng giúp kích thích sản sinh Collagen và giảm viêm mụn."
      },
      {
        id: "bp-2",
        name: "Kính Massage Mắt Nhiệt Ấm & Sóng Rung Thư Giãn Xóa Quầng Thâm 128GB",
        category: "thiet-bi-spa",
        oldPrice: "950,000 ₫",
        price: "925,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=500&q=80",
        description:
          "Thiết bị massage túi khí và chườm ấm 42 độ C giúp giảm bọng mắt và nếp nhăn đuôi mắt."
      }
    ]
  },
  featuredProductsSection: {
    title: "Sản phẩm nổi bật",
    tabs: [
      { id: "all", label: "Tất cả" },
      { id: "may-nang-co", label: "Máy nâng cơ" },
      { id: "anh-sang", label: "Ánh sáng sinh học" },
      { id: "duoc-my-pham", label: "Dược mỹ phẩm" },
      { id: "thiet-bi-spa", label: "Thiết bị Spa" }
    ],
    products: [
      {
        id: "fp-1",
        name: "Mặt Nạ Ánh Sáng Sinh Học LookPretty VR Pro 7 Bước Sóng Trẻ Hóa Da",
        category: "anh-sang",
        oldPrice: "1,205,000 ₫",
        price: "1,150,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
        description: "Công nghệ LED sinh học chuẩn phòng khám da liễu."
      },
      {
        id: "fp-2",
        name: "Kính Massage Mắt Nhiệt Ấm & Sóng Rung Thư Giãn Xóa Quầng Thâm",
        category: "thiet-bi-spa",
        oldPrice: "950,000 ₫",
        price: "925,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=500&q=80",
        description: "Thư giãn vùng mắt và giảm mỏi mắt chuyên sâu."
      },
      {
        id: "fp-3",
        name: "Máy Rửa Mặt Sóng Âm Tần Số Cao LookPretty Sonic Clean Đẩy Tinh Chất",
        category: "thiet-bi-spa",
        oldPrice: "1,000,000 ₫",
        price: "600,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
        description: "Đầu cọ kháng khuẩn siêu mềm làm sạch sâu 99.5% bụi bẩn."
      },
      {
        id: "fp-4",
        name: "Máy Điện Di Tinh Chất Nóng Lạnh Ion Đa Cực Nâng Cơ Mặt V-Line",
        category: "may-nang-co",
        oldPrice: "2,000,000 ₫",
        price: "1,500,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
        description: "Kết hợp nhiệt nóng 45°C mở lỗ chân lông và lạnh -10°C khóa ẩm."
      },
      {
        id: "fp-5",
        name: "Trọn Bộ Thiết Bị Chăm Sóc Da Đa Năng 4 Đầu Thay Thế Chuẩn Spa",
        category: "may-nang-co",
        oldPrice: "2,000,000 ₫",
        price: "1,500,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=500&q=80",
        description: "Tích hợp nâng cơ EMS, sóng RF và ánh sáng đỏ trẻ hóa."
      },
      {
        id: "fp-6",
        name: "Bộ Tinh Chất Cấy Trắng & Phục Hồi Da Chuyên Sâu Sau Liệu Trình Laser",
        category: "duoc-my-pham",
        oldPrice: "2,000,000 ₫",
        price: "1,500,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80",
        description: "Bộ ống huyết thanh HA + B5 cô đặc dùng kèm máy điện di."
      },
      {
        id: "fp-7",
        name: "Máy Triệt Lông Lạnh Đá Sapphire IPL 999.999 Xung Trẻ Hóa Vùng Da",
        category: "anh-sang",
        oldPrice: "2,000,000 ₫",
        price: "1,500,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80",
        description: "Đầu lạnh 5°C êm ái không châm chích, hiệu quả rõ rệt sau 4 tuần."
      },
      {
        id: "fp-8",
        name: "Máy Sấy Tóc Tạo Kiểu VEGA INSTA GLAM 1000W Ion Âm Dưỡng Ẩm Tóc",
        category: "thiet-bi-spa",
        oldPrice: "200,000 ₫",
        price: "150,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
        description: "Luồng gió ion âm bảo vệ biểu bì tóc bóng mượt không xơ rối."
      }
    ]
  },
  monthlyDealBanner: {
    title: "Ưu đãi tháng này",
    subtitle: "Cung cấp ưu đãi hấp dẫn",
    ctaText: "Khám Phá Ngay",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85",
    countdown: {
      days: "701",
      hours: "14",
      minutes: "58",
      seconds: "06"
    }
  },
  customerReviewsSection: {
    title: "Khách Hàng Đánh Giá",
    portraitImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    reviews: [
      {
        id: "cr-1",
        name: "Trần Vân Anh",
        city: "Hồ Chí Minh",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        quote:
          "Dịch vụ tư vấn khách hàng rất tuyệt vời, chuyên viên nhiệt tình và chuyên nghiệp. Tôi chắc chắn sẽ quay lại LookPretty cho các nhu cầu thiết bị làm đẹp của tôi."
      },
      {
        id: "cr-2",
        name: "Nguyễn Thị Hương",
        city: "Hà Nội",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        quote:
          "Dịch vụ khách hàng cũng rất tuyệt vời, nhân viên nhiệt tình và chuyên nghiệp. Máy điện di nâng cơ cầm đầm tay, dùng cùng serum căng bóng thấy rõ."
      },
      {
        id: "cr-3",
        name: "Phạm Minh Đức",
        city: "Hải Phòng",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        quote:
          "Mình mua bộ mặt nạ ánh sáng sinh học tặng bà xã, đóng gói cực kỳ kỹ lưỡng, có phiếu bảo hành chính hãng 24 tháng nên hoàn toàn yên tâm."
      },
      {
        id: "cr-4",
        name: "Hoàng Vân Lâm",
        city: "Đà Lạt",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        quote:
          "Dịch vụ khách hàng cũng rất tuyệt vời, nhân viên nhiệt tình và chuyên nghiệp. Tôi chắc chắn sẽ quay lại cửa hàng này cho các nhu cầu chăm sóc da của gia đình."
      }
    ]
  },
  latestNewsSection: {
    title: "Tin Tức Mới Nhất",
    leftPosts: [
      {
        id: "ln-1",
        category: "Công Nghệ Làm Đẹp",
        comments: "3 Bình Luận",
        readTime: "3 Phút Đọc",
        title: "Cách mạng hóa quy trình trẻ hóa da tại nhà bằng sóng RF & Ion...",
        excerpt:
          "Các thiết bị nâng cơ vi dòng thế hệ mới được thiết kế để tối ưu hiệu quả hấp thụ tinh chất chuẩn spa ngay tại phòng ngủ của bạn...",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ln-2",
        category: "Chăm Sóc Da Khoa Học",
        comments: "0 Bình Luận",
        readTime: "4 Phút Đọc",
        title: "10 Bí quyết thiết lập góc chăm sóc sắc đẹp thư giãn tại gia...",
        excerpt:
          "Những gợi ý thiết thực giúp bạn sắp xếp tủ lạnh mỹ phẩm, máy xông mặt nano và ánh sáng dịu nhẹ cho buổi tối thư giãn...",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
      }
    ],
    rightFeaturedPost: {
      id: "ln-3",
      category: "Cẩm Nang Thẩm Mỹ",
      comments: "0 Bình Luận",
      readTime: "4 Phút Đọc",
      title: "Tiêu chuẩn thiết kế không gian phòng khám da liễu & spa hiện đại...",
      excerpt:
        "Tuổi thọ và hiệu quả của các liệu trình chăm sóc sắc đẹp phụ thuộc lớn vào quy trình kiểm chuẩn thiết bị, ánh sáng trị liệu và môi trường vô khuẩn...",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  },
  bluePerksBar: [
    {
      id: "pk-1",
      title: "Miễn Phí Giao Hàng",
      subtitle: "Từ Đơn Hàng Trên 1,000,000 ₫"
    },
    {
      id: "pk-2",
      title: "Hỗ Trợ 24/7",
      subtitle: "Nhận Hỗ Trợ Trực Tuyến 24/7"
    },
    {
      id: "pk-3",
      title: "Hoàn Tiền",
      subtitle: "Hoàn Trả Trong Vòng 15 Ngày"
    },
    {
      id: "pk-4",
      title: "Mã Quà Tặng",
      subtitle: "Nhận Mã Khuyến Mãi"
    }
  ]
};
