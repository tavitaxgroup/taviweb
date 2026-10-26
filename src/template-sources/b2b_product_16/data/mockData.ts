import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ETechProductItem {
  id: string;
  title: string;
  category: string;
  discountBadge: string;
  price: string;
  oldPrice: string;
  availableCount: number;
  totalStock: number;
  rating: number;
  image: string;
  specs: string[];
}

export interface ETechCategoryBox {
  id: string;
  name: string;
  countLabel: string;
  iconType:
    | "gamepad"
    | "mouse"
    | "phone"
    | "watch"
    | "keyboard"
    | "monitor"
    | "laptop"
    | "smarthome";
}

export interface ETechMiniProduct {
  id: string;
  title: string;
  oldPrice: string;
  price: string;
  rating: number;
  image: string;
}

export interface B2bProduct16Data extends ClonedTemplateBaseData {
  subNavCategories: string[];
  heroBento: {
    topLeft: {
      priceLabel: string;
      title: string;
      description: string;
      discountText: string;
      ctaText: string;
      image: string;
    };
    topRight: {
      priceBadge: string;
      title: string;
      description: string;
      ctaText: string;
      image: string;
    };
    bottomLeft: {
      tag: string;
      title: string;
      ctaText: string;
      image: string;
    };
    bottomCenter: {
      badge: string;
      title: string;
      price: string;
      oldPrice: string;
      ctaText: string;
      image: string;
    };
    bottomRight: {
      tag: string;
      title: string;
      image: string;
    };
  };
  popularCategoriesSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    categories: ETechCategoryBox[];
  };
  midPromoBanners: {
    leftDark: {
      badge: string;
      title: string;
      price: string;
      oldPrice: string;
      ctaText: string;
      image: string;
    };
    rightLight: {
      title: string;
      ctaText: string;
      image: string;
    };
  };
  featuredProductsSection: {
    eyebrow: string;
    title: string;
    countdown: {
      days: string;
      hours: string;
      mins: string;
      secs: string;
    };
    products: ETechProductItem[];
  };
  yellowStripBanner: {
    title: string;
    ctaText: string;
    leftImage: string;
    rightImage: string;
  };
  tripleShowcaseSection: {
    leftBanner: {
      eyebrow: string;
      title: string;
      ctaText: string;
      image: string;
    };
    featuredMiniList: ETechMiniProduct[];
    promoMiniList: ETechMiniProduct[];
  };
  brandPartners: Array<{
    id: string;
    name: string;
    color: string;
  }>;
  smartWatchDealSection: {
    discountBadge: string;
    eyebrow: string;
    title: string;
    description: string;
    countdown: {
      days: string;
      hours: string;
      mins: string;
      secs: string;
    };
    ctaText: string;
    image: string;
  };
  serviceGuarantees: Array<{
    id: string;
    title: string;
    subtitle: string;
    iconName: "truck" | "headset" | "refund" | "gift";
  }>;
  droneNewsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    droneImage: string;
  };
}

export const b2bProduct16DefaultData: B2bProduct16Data = {
  business: {
    name: "E-Tech",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@etech-b2b.vn", "sales@etech-b2b.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 21:00",
    rating: 4.9,
    reviewCount: 2450,
    aboutTitle: "Phân Phối Thiết Bị Công Nghệ & Linh Kiện Điện Tử E-Tech",
    aboutText: [
      "Với chất lượng hàng đầu, chúng tôi cam kết mang đến cho khách hàng và đại lý doanh nghiệp những thiết bị công nghệ, linh kiện điện tử chính hãng với sự hài lòng tuyệt đối.",
    ],
  },
  subNavCategories: [
    "Phổ biến",
    "Điện thoại",
    "Máy tính",
    "Phụ kiện",
    "Tai nghe",
    "Smart Watch",
    "Web Cam",
  ],
  hero: {
    eyebrow: "Mua chỉ với 6,000,000 ₫",
    title: "Samsung Galaxy Tab A8",
    subtitle:
      "Samsung Galaxy Tab A8 64GB WiFi Grey là máy tính bảng tầm trung chuyên dụng cho doanh nghiệp và giáo dục",
    ctaText: "Mua Ngay",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85",
  },
  heroBento: {
    topLeft: {
      priceLabel: "Mua chỉ với 6,000,000 ₫",
      title: "Samsung Galaxy Tab A8",
      description:
        "Samsung Galaxy Tab A8 64GB WiFi Grey là máy tính bảng tầm trung hiệu năng ổn định",
      discountText: "-20% OFF",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    },
    topRight: {
      priceBadge: "Mua ngay chỉ với 4,990,000 ₫",
      title: "Meta Quest 2 256GB",
      description:
        "Kính thực tế ảo thế hệ mới thay thế Oculus, hỗ trợ trình chiếu 3D sắc nét",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
    },
    bottomLeft: {
      tag: "Hàng mới về",
      title: "Tai nghe AirPods Max Space Orange",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    },
    bottomCenter: {
      badge: "Ưu đãi hấp dẫn",
      title: "Đồng Hồ Thông Minh Watch Pro",
      price: "6,990,000 ₫",
      oldPrice: "9,990,000 ₫",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    bottomRight: {
      tag: "Hàng mới về",
      title: "Máy ảnh lấy liền Fujifilm",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80",
    },
  },
  popularCategoriesSection: {
    eyebrow: "DANH MỤC HÀNG ĐẦU",
    title: "Danh Mục Phổ Biến",
    description:
      "Hệ thống phân phối thiết bị công nghệ và linh kiện điện tử luôn tiên phong cập nhật các dòng thiết bị thông minh mới nhất cho đại lý và doanh nghiệp.",
    ctaText: "Khám Phá Ngay",
    categories: [
      {
        id: "cat-1",
        name: "Bộ điều khiển",
        countLabel: "2 Sản phẩm",
        iconType: "gamepad",
      },
      {
        id: "cat-2",
        name: "Chuột máy tính",
        countLabel: "3 Sản phẩm",
        iconType: "mouse",
      },
      {
        id: "cat-3",
        name: "Điện thoại",
        countLabel: "7 Sản phẩm",
        iconType: "phone",
      },
      {
        id: "cat-4",
        name: "Đồng hồ",
        countLabel: "2 Sản phẩm",
        iconType: "watch",
      },
      {
        id: "cat-5",
        name: "Bàn phím cơ",
        countLabel: "2 Sản phẩm",
        iconType: "keyboard",
      },
      {
        id: "cat-6",
        name: "Màn hình",
        countLabel: "3 Sản phẩm",
        iconType: "monitor",
      },
      {
        id: "cat-7",
        name: "Máy tính",
        countLabel: "8 Sản phẩm",
        iconType: "laptop",
      },
      {
        id: "cat-8",
        name: "Nhà thông minh",
        countLabel: "10 Sản phẩm",
        iconType: "smarthome",
      },
    ],
  },
  midPromoBanners: {
    leftDark: {
      badge: "Khuyến mãi lên đến 60%",
      title: "Sản phẩm công nghệ đa dạng",
      price: "26,000,000 ₫",
      oldPrice: "30,000,000 ₫",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    },
    rightLight: {
      title: "Tai nghe thịnh hành",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=700&q=80",
    },
  },
  featuredProductsSection: {
    eyebrow: "KHUYẾN MÃI LỚN",
    title: "Sản Phẩm Nổi Bật",
    countdown: {
      days: "101",
      hours: "21",
      mins: "31",
      secs: "13",
    },
    products: [
      {
        id: "prd-1",
        title: "Kính Thực Tế Ảo Sony PlayStation VR2 Góc Nhìn 110 Độ Chuẩn 4K HDR",
        category: "Thiết bị VR",
        discountBadge: "-15%",
        price: "1,150,000 ₫",
        oldPrice: "1,350,000 ₫",
        availableCount: 18,
        totalStock: 145,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Màn hình OLED 4K HDR tần số quét 120Hz",
          "Cảm biến theo dõi chuyển động mắt thông minh",
          "Bảo hành chính hãng 12 tháng 1 đổi 1",
        ],
      },
      {
        id: "prd-2",
        title: "Bộ Kính Thực Tế Ảo Meta Quest 2 128GB All-In-One Vi Xử Lý Tốc Độ Cao",
        category: "Thiết bị VR",
        discountBadge: "-3%",
        price: "925,000 ₫",
        oldPrice: "950,000 ₫",
        availableCount: 42,
        totalStock: 141,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Dung lượng bộ nhớ 128GB tích hợp sẵn",
          "Đi kèm 2 tay cầm điều khiển cảm ứng nhạy bén",
          "Hỗ trợ kết nối PC không dây Air Link",
        ],
      },
      {
        id: "prd-3",
        title: "Chuột Quang Văn Phòng Có Dây Rapoo N100 Thiết Kế Công Thái Học",
        category: "Chuột máy tính",
        discountBadge: "-40%",
        price: "600,000 ₫",
        oldPrice: "1,000,000 ₫",
        availableCount: 32,
        totalStock: 143,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Độ phân giải quang học 1600 DPI mượt mà",
          "Thiết kế đối xứng thuận cả hai tay",
          "Độ bền nút bấm lên đến 5 triệu lần click",
        ],
      },
      {
        id: "prd-4",
        title: "Chuột Gaming & Đồ Họa Fantech T533 Cảm Biến Quang Học Siêu Nhạy",
        category: "Chuột máy tính",
        discountBadge: "-25%",
        price: "1,500,000 ₫",
        oldPrice: "2,000,000 ₫",
        availableCount: 28,
        totalStock: 143,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
        specs: [
          "6 nút chức năng lập trình Macro linh hoạt",
          "Đèn LED RGB tự động chuyển màu",
          "Dây bọc dù chống đứt rối bền bỉ",
        ],
      },
      {
        id: "prd-5",
        title: "Flycam DJI Avata Fly Smart Combo Kèm Kính Điều Khiển Goggles V2",
        category: "Thiết bị bay",
        discountBadge: "-25%",
        price: "1,500,000 ₫",
        oldPrice: "2,000,000 ₫",
        availableCount: 15,
        totalStock: 145,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Quay video 4K/60fps chống rung RockSteady",
          "Khung bảo vệ cánh quạt an toàn trong nhà",
          "Truyền hình ảnh HD khoảng cách tới 10km",
        ],
      },
      {
        id: "prd-6",
        title: "Flycam DJI Mini 3 Pro Kèm Tay Cầm Điều Khiển Màn Hình RC Chuẩn",
        category: "Thiết bị bay",
        discountBadge: "-25%",
        price: "1,500,000 ₫",
        oldPrice: "2,000,000 ₫",
        availableCount: 19,
        totalStock: 144,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Cảm biến tránh vật cản 3 hướng an toàn",
          "Thời lượng bay tối đa 34 phút mỗi pin",
          "Hỗ trợ quay dọc True Vertical Shooting",
        ],
      },
      {
        id: "prd-7",
        title: "Flycam DJI Mavic Mini Bản Combo Định Vị GPS Tự Động Quay Về",
        category: "Thiết bị bay",
        discountBadge: "-25%",
        price: "1,500,000 ₫",
        oldPrice: "2,000,000 ₫",
        availableCount: 24,
        totalStock: 144,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Trọng lượng siêu nhẹ 249g gọn nhẹ du lịch",
          "Gimbal chống rung cơ học 3 trục",
          "Định vị GPS + GLONASS giữ độ cao chính xác",
        ],
      },
      {
        id: "prd-8",
        title: "Máy Sấy Tóc Ion Âm Công Suất Cao Vega Insta Glam 1000W Gấp Gọn",
        category: "Điện gia dụng",
        discountBadge: "-25%",
        price: "150,000 ₫",
        oldPrice: "200,000 ₫",
        availableCount: 54,
        totalStock: 145,
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=600&q=80",
        specs: [
          "Công nghệ sấy Ion âm bảo vệ độ ẩm tự nhiên",
          "2 chế độ nhiệt và chế độ sấy mát linh hoạt",
          "Tự ngắt khi quá nhiệt an toàn tuyệt đối",
        ],
      },
    ],
  },
  yellowStripBanner: {
    title: "Trung Tâm Phân Phối Thiết Bị Điện Tử Thân Thiện",
    ctaText: "Mua Ngay",
    leftImage:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  tripleShowcaseSection: {
    leftBanner: {
      eyebrow: "HÀNG MỚI VỀ",
      title: "Tai Nghe AirPod Max Space Orange",
      ctaText: "Khám Phá Ngay",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    featuredMiniList: [
      {
        id: "fm-1",
        title: "Kính Thực Tế Ảo Sony PlayStation VR2 4K...",
        oldPrice: "1,350,000 ₫",
        price: "1,150,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "fm-2",
        title: "Kính Thực Tế Ảo Meta Quest 2 128GB All-in...",
        oldPrice: "950,000 ₫",
        price: "925,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "fm-3",
        title: "Chuột Quang Có Dây Rapoo N100 Độ Phân Giải...",
        oldPrice: "1,000,000 ₫",
        price: "600,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80",
      },
    ],
    promoMiniList: [
      {
        id: "pm-1",
        title: "Máy Quay Chuyên Nghiệp Sony HXR-NX200 Full HD...",
        oldPrice: "1,000,000 ₫",
        price: "950,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "pm-2",
        title: "Smart TV Android Điều Khiển Giọng Nói 4K...",
        oldPrice: "2,500,000 ₫",
        price: "2,000,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "pm-3",
        title: "Màn Hình Tương Tác Thông Minh Cho Phòng Họp...",
        oldPrice: "2,000,000 ₫",
        price: "1,700,000 ₫",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  brandPartners: [
    { id: "bp-1", name: "BOSCH", color: "#dc2626" },
    { id: "bp-2", name: "SAMSUNG", color: "#1d4ed8" },
    { id: "bp-3", name: "SONY", color: "#0f172a" },
    { id: "bp-4", name: "LOGITECH", color: "#059669" },
    { id: "bp-5", name: "ASUS ROG", color: "#e11d48" },
    { id: "bp-6", name: "LENOVO", color: "#16a34a" },
    { id: "bp-7", name: "DELL TECH", color: "#ea580c" },
    { id: "bp-8", name: "RAKUTEN", color: "#b91c1c" },
    { id: "bp-9", name: "FEDEX EXPRESS", color: "#4f46e5" },
    { id: "bp-10", name: "FUJIFILM", color: "#e63b1f" },
  ],
  smartWatchDealSection: {
    discountBadge: "-20% OFF",
    eyebrow: "KHÁM PHÁ MỚI MẺ",
    title: "Smart Watch & Âm Thanh",
    description:
      "Hệ thống phân phối thiết bị đeo thông minh và tai nghe chống ồn chủ động thế hệ mới với mức chiết khấu sỉ hấp dẫn cho đại lý toàn quốc.",
    countdown: {
      days: "67",
      hours: "21",
      mins: "31",
      secs: "10",
    },
    ctaText: "Mua Ngay",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85",
  },
  serviceGuarantees: [
    {
      id: "sg-1",
      title: "Miễn Phí Giao Hàng",
      subtitle: "Từ Đơn Hàng Trên 1,000,000 ₫",
      iconName: "truck",
    },
    {
      id: "sg-2",
      title: "Hỗ Trợ 24/7",
      subtitle: "Nhận Hỗ Trợ Trực Tuyến 24/7",
      iconName: "headset",
    },
    {
      id: "sg-3",
      title: "Hoàn Tiền",
      subtitle: "Hoàn Trả Trong Vòng 15 Ngày",
      iconName: "refund",
    },
    {
      id: "sg-4",
      title: "Mã Quà Tặng",
      subtitle: "Nhận Mã Khuyến Mãi Đại Lý",
      iconName: "gift",
    },
  ],
  news: [
    {
      id: "et-news-1",
      title: "Cách Mạng Hóa Thiết Bị Điện Tử: Định Hình Lại Không Gian Làm Việc Số",
      date: "3 Phút Đọc",
      category: "Điện tử • 3 Bình luận",
      excerpt:
        "Máy tính bảng và thiết bị thực tế ảo thế hệ mới đang giúp doanh nghiệp tối ưu hóa hiệu suất đào tạo và vận hành từ xa...",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "et-news-2",
      title: "10 Ý Tưởng Thiết Lập Góc Giải Trí & Làm Việc Công Nghệ Tại Gia",
      date: "4 Phút Đọc",
      category: "Điện tử • 5 Bình luận",
      excerpt:
        "Tổng hợp những phụ kiện màn hình cong, bàn phím cơ và hệ thống chiếu sáng thông minh Smart Home đáng đầu tư nhất năm nay...",
      image:
        "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=80",
    },
  ],
  droneNewsletter: {
    title: "Nhận Mọi Cập Nhật",
    subtitle:
      "Trở thành thành viên đối tác VIP và nhận ngay ưu đãi giảm 20% cho đơn hàng linh kiện tiếp theo!",
    placeholder: "Nhập email...",
    buttonText: "Đăng Ký Ngay",
    droneImage:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=85",
  },
};
