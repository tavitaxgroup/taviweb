import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SalyCourseItem {
  id: string;
  code: string;
  title: string;
  category: "Trà Trái Cây & Trà Sữa" | "Cà Phê & Kem Muối" | "Tổng Hợp Mở Quán" | "Khóa Online";
  mode: "ONLINE" | "TRỰC TIẾP & ONLINE";
  drinksCount: string;
  price: string;
  oldPrice?: string;
  badgeText: string;
  highlights: string[];
  image: string;
}

export interface LeadGeneration18Data extends ClonedTemplateBaseData {
  heroShowcase: {
    scriptEyebrow: string;
    brandDisplay: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    instructorName: string;
    instructorTitle: string;
    instructorImage: string;
    floatingDrinkImages: string[];
  };
  courseCategories: string[];
  courses: SalyCourseItem[];
  ecosystemPillars: Array<{
    id: string;
    title: string;
    description: string;
    metric: string;
  }>;
  ingredientPackages: Array<{
    id: string;
    name: string;
    usage: string;
    price: string;
    image: string;
  }>;
}

export const leadGeneration18DefaultData: LeadGeneration18Data = {
  business: {
    name: "SALY ACADEMY — Ly Phạm Dạy Pha Chế",
    phone: ["0934 556 789", "1900 636 648"],
    email: ["tuvan@salyacademy.vn", "lypham@saly.vn"],
    address: "Số 18 Đường D2, Khu Đô Thị Mới, Quận Bình Thạnh, TP. Hồ Chí Minh",
    workingHours: "Lớp học Trực tiếp & Hỗ trợ Online: 08:00 – 21:30 (T2 – CN)",
    rating: 4.99,
    reviewCount: 6800,
    aboutTitle: "Học Viện Đào Tạo Pha Chế & Kinh Doanh F&B Thực Chiến Cùng Ly Phạm",
    aboutText: [
      "Saly Academy (Ly Phạm - Dạy Pha Chế) là cái nôi đào tạo hơn 20.000 chủ quán Cà phê, Trà sữa, Trà trái cây thành công trên khắp 63 tỉnh thành và cộng đồng người Việt tại nước ngoài.",
      "Công thức chuẩn định lượng gram/ml, cốt trà đậm vị, giá cost tối ưu từ 6.000đ – 9.000đ/ly giúp chủ quán thu hồi vốn nhanh và giữ chân khách hàng bền vững."
    ],
    experienceYears: "8+"
  },
  hero: {
    eyebrow: "Học viện đào tạo pha chế",
    title: "SALY ACADEMY",
    subtitle: "Khởi nguồn đam mê pha chế và hiện thực hoá giấc mơ kinh doanh",
    ctaText: "Các khóa học",
    ctaLink: "#cac-khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=85"
  },
  heroShowcase: {
    scriptEyebrow: "Học viện đào tạo pha chế",
    brandDisplay: "SALY ACADEMY",
    tagline: "Khởi nguồn đam mê pha chế và hiện thực hoá giấc mơ kinh doanh",
    primaryCta: "Các khóa học",
    secondaryCta: "Tư vấn miễn phí",
    instructorName: "Giảng viên Ly Phạm",
    instructorTitle: "Founder Saly Academy • Chuyên gia R&D Đồ Uống & Cố vấn Mở Quán F&B",
    instructorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    floatingDrinkImages: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    ]
  },
  courseCategories: [
    "Tất cả khóa học",
    "Trà Trái Cây & Trà Sữa",
    "Cà Phê & Kem Muối",
    "Tổng Hợp Mở Quán",
    "Khóa Online"
  ],
  courses: [
    {
      id: "saly-1",
      code: "CHUYÊN ĐỀ 01",
      title: "Chuyên Đề Trà Trái Cây Nhiệt Đới Tươi Mát & Cốt Trà Ủ Lạnh",
      category: "Trà Trái Cây & Trà Sữa",
      mode: "ONLINE",
      drinksCount: "35+ công thức Hot Trend",
      price: "990.000đ",
      oldPrice: "1.650.000đ",
      badgeText: "BEST SELLER MÙA HÈ",
      highlights: [
        "Bí quyết ủ cốt trà Lài, Ô Long, Hồng Trà thơm đậm không bị đắng chát",
        "Công thức nấu mứt trái cây tươi giữ nguyên màu sắc và bảo quản 15 ngày",
        "Tính sẵn bảng giá Cost từng ly chỉ từ 6.500đ – 8.500đ"
      ],
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "saly-2",
      code: "CHUYÊN ĐỀ 02",
      title: "Chuyên Đề Trà Sữa Đậm Vị Truyền Thống & 12 Loại Topping Thủ Công",
      category: "Trà Trái Cây & Trà Sữa",
      mode: "ONLINE",
      drinksCount: "40+ công thức & Topping",
      price: "1.190.000đ",
      oldPrice: "1.990.000đ",
      badgeText: "ĐẬM VỊ TRÀ",
      highlights: [
        "Công thức pha Trà Sữa Nướng, Ô Long Khói, Hồng Trà Sữa chuẩn chuỗi lớn",
        "Hướng dẫn làm Khúc Bạch, Pudding Trứng, Trân Châu Hoàng Kim mềm dẻo cả ngày",
        "Cập nhật miễn phí công thức mới trọn đời trong nhóm học viên kín"
      ],
      image:
        "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "saly-3",
      code: "CHUYÊN ĐỀ 03",
      title: "Chuyên Đề Cà Phê Pha Máy, Phin Truyền Thống & Kem Muối Biển",
      category: "Cà Phê & Kem Muối",
      mode: "TRỰC TIẾP & ONLINE",
      drinksCount: "28+ món Cà Phê & Kem béo",
      price: "1.090.000đ",
      oldPrice: "1.800.000đ",
      badgeText: "CHUYÊN ĐỀ CÀ PHÊ",
      highlights: [
        "Kỹ thuật chiết xuất Espresso chuẩn Crema và ủ cà phê Phin lớn cho quán đông khách",
        "Công thức đánh Kem Muối, Kem Phô Mai Macchiato sánh mịn giữ form 6 tiếng",
        "Tư vấn chọn dòng máy pha và máy xay phù hợp ngân sách từ 15 triệu"
      ],
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "saly-4",
      code: "CHUYÊN ĐỀ 04",
      title: "Chuyên Đề Matcha Nhật Bản, Cacao Đậm Đặc & Đá Xay Hiện Đại",
      category: "Khóa Online",
      mode: "ONLINE",
      drinksCount: "25+ món Matcha & Ice Blended",
      price: "890.000đ",
      oldPrice: "1.450.000đ",
      badgeText: "XU HƯỚNG GIỚI TRẺ",
      highlights: [
        "Cách đánh Matcha Latte phân tầng đẹp mắt, không tanh, giữ màu xanh ngọc",
        "Công thức Cacao Dầm Kem Trứng Nướng & Đá Xay không bị tách lớp",
        "Học linh hoạt qua Video 4K quay cận cảnh từng thao tác đong đếm"
      ],
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "saly-5",
      code: "KHÓA TOÀN DIỆN",
      title: "Khóa Học Tổng Hợp Mở Quán Thực Chiến (Trọn Bộ 150+ Món Quán Đắt Khách)",
      category: "Tổng Hợp Mở Quán",
      mode: "TRỰC TIẾP & ONLINE",
      drinksCount: "150+ món + Setup Menu 1:1",
      price: "2.990.000đ",
      oldPrice: "5.500.000đ",
      badgeText: "TIẾT KIỆM 45% • TẶNG BỘ MENU",
      highlights: [
        "Bao gồm toàn bộ 6 chuyên đề: Trà Trái Cây, Trà Sữa, Cà Phê, Matcha, Nước Ép, Sữa Chua",
        "Giảng viên Ly Phạm & đội ngũ hỗ trợ thiết kế Menu, định giá bán theo khu vực",
        "Tặng bộ tài liệu Vận hành quán, Quản lý thất thoát nguyên liệu & Marketing khai trương"
      ],
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "saly-6",
      code: "CHUYÊN ĐỀ MÙA ĐÔNG",
      title: "Chuyên Đề Đồ Uống Nóng, Trà Thảo Mộc Dưỡng Nhan & Sữa Hạt",
      category: "Khóa Online",
      mode: "ONLINE",
      drinksCount: "30+ công thức 4 mùa",
      price: "790.000đ",
      oldPrice: "1.350.000đ",
      badgeText: "GIỮ DOANH THU MÙA LẠNH",
      highlights: [
        "Giúp quán giữ vững doanh số vào mùa mưa lạnh và dịp Lễ Tết",
        "Công thức Trà Gừng Đường Nâu, Táo Đỏ Kỷ Tử, Cacao Nóng Marshmallow",
        "Nguyên liệu dễ tìm, tận dụng ngay quầy bar sẵn có không cần mua thêm máy"
      ],
      image:
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
    }
  ],
  ecosystemPillars: [
    {
      id: "eco-1",
      title: "20.000+ Học Viên Mở Quán",
      description:
        "Cộng đồng chủ quán F&B lớn mạnh khắp Việt Nam, Mỹ, Úc, Đài Loan, Nhật Bản cùng chia sẻ kinh nghiệm kinh doanh mỗi ngày.",
      metric: "20.000+"
    },
    {
      id: "eco-2",
      title: "Công Thức Chuẩn Gram / ML",
      description:
        "Mọi công thức đều được chuẩn hóa định lượng chính xác để bất kỳ nhân viên pha chế nào cũng pha ra 100 ly đồng đều như 1.",
      metric: "100% Chuẩn Vị"
    },
    {
      id: "eco-3",
      title: "Kho Nguyên Liệu Saly Giá Sỉ",
      description:
        "Cung cấp trọn bộ cốt trà bản quyền, bột kem béo, siro và dụng cụ quầy bar chính hãng với chiết khấu đặc quyền cho học viên.",
      metric: "Giá Gốc Tận Xưởng"
    },
    {
      id: "eco-4",
      title: "Đồng Hành Sửa Bài 1 Kèm 1",
      description:
        "Đội ngũ giảng viên và trợ giảng Saly Academy theo sát giải đáp thắc mắc, duyệt hình ảnh thành phẩm và tư vấn chiến lược khai trương.",
      metric: "Hỗ Trợ Trọn Đời"
    }
  ],
  ingredientPackages: [
    {
      id: "ing-1",
      name: "Combo Cốt Trà Bản Quyền Saly (Trà Lài Thượng Hạng, Ô Long Rang, Hồng Trà)",
      usage: "Pha được 250 – 300 ly Trà Trái Cây & Trà Sữa đậm vị",
      price: "485.000đ / bộ 3 gói lớn",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ing-2",
      name: "Bộ Dụng Cụ Quầy Bar Cơ Bản Cho Người Mới Bắt Đầu (14 Món Inox Chuẩn)",
      usage: "Shaker 700ml, Ca đong, Muỗng khuấy, Thảm bar, Bình ủ trà giữ nhiệt",
      price: "890.000đ / trọn bộ",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ing-3",
      name: "Gói Nguyên Liệu Thực Hành Tại Nhà (Đầy Đủ Siro, Mứt & Bột Kem)",
      usage: "Chia sẵn định lượng để học viên thực hành ngay 30 món bán chạy nhất",
      price: "650.000đ / thùng",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Chị Nguyễn Thị Kim Ngân",
      role: "Chủ quán Tiệm Trà Tháng Tư • Đà Nẵng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Mình học khóa Tổng Hợp Online của cô Ly Phạm khi đang làm văn phòng. Nhờ công thức chuẩn từng ml và bảng tính cost chi tiết, tuần khai trương quán mình bán hơn 450 ly/ngày mà không hề bị rối!"
    },
    {
      id: "rv-2",
      author: "Anh Trương Quốc Toàn",
      role: "Chủ chuỗi 3 Xe Cà Phê & Trà Trái Cây • Bình Dương",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Món Cà phê kem muối và Trà mãng cầu học từ Saly Academy đã trở thành món 'hái ra tiền' giúp mình mở rộng từ 1 xe nhỏ lên 3 điểm bán chỉ sau 5 tháng."
    },
    {
      id: "rv-3",
      author: "Chị Lê Ngọc Hân",
      role: "Học viên Việt kiều mở tiệm Boba & Fruit Tea tại Texas, Mỹ",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Ở nước ngoài học online mà cảm giác như cô Ly đứng ngay cạnh chỉ bài. Video quay cực nét, nguyên liệu nào bên Mỹ không có đều được đội ngũ Saly hướng dẫn loại thay thế tương đương."
    }
  ]
};

export default leadGeneration18DefaultData;
