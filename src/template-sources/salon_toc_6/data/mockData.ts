import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface StyleThreadItem {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  badges?: string[];
  rating: number;
  reviews: number;
  image: string;
}

export interface SalonToc6Data extends ClonedTemplateBaseData {
  topNotice: string;
  flashSaleItems: StyleThreadItem[];
  newProductTabs: string[];
  newProducts: StyleThreadItem[];
  bestSellerItems: StyleThreadItem[];
  categoryCards: Array<{
    id: string;
    name: string;
    count: number;
    image: string;
  }>;
  womenShowcase: {
    bannerEyebrow: string;
    bannerTitle: string;
    bannerImage: string;
    items: StyleThreadItem[];
  };
  menShowcase: {
    bannerEyebrow: string;
    bannerTitle: string;
    bannerImage: string;
    items: StyleThreadItem[];
  };
  socialGallery: string[];
}

export const salonToc6DefaultData: SalonToc6Data = {
  business: {
    name: "Fana Salon & Style",
    phone: ["0313728397", "076 922 0162"],
    email: ["info@themona.global", "cskh@fanasalon.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "09:00 - 20:00",
    rating: 4.9,
    reviewCount: 380,
    aboutTitle: "Học Viện Tạo Mẫu Tóc & Phong Cách Thời Trang Fana",
    aboutText: [
      "Fana Salon & Style là điểm đến hàng đầu kết hợp giữa nghệ thuật tạo mẫu tóc chuyên nghiệp, chăm sóc tóc chuẩn salon quốc tế và định hình phong cách thời trang trẻ trung.",
      "Chúng tôi liên tục cập nhật những bộ sưu tập kiểu tóc uốn sóng lơi, nhuộm Balayage thời thượng và các dòng tinh chất dưỡng tóc cao cấp giúp bạn tự tin tỏa sáng mỗi ngày."
    ],
    highlights: [
      "Đội ngũ Giám đốc sáng tạo & Stylist trên 10 năm kinh nghiệm",
      "Sử dụng 100% thuốc uốn nhuộm & tinh chất Olaplex, Kerastase chính hãng",
      "Tư vấn thiết kế kiểu tóc cá nhân hóa theo khuôn mặt và phong cách",
      "Bảo hành nếp tóc miễn phí trong 30 ngày"
    ]
  },
  topNotice: "MIỄN PHÍ VẬN CHUYỂN & TẶNG HẤP DƯỠNG CHO HÓA ĐƠN TRÊN 500K - ĐẶT NGAY!",
  hero: {
    eyebrow: "Đón Chào Ngày Mới",
    title: "Bộ sưu tập mới nhất dành cho bạn",
    subtitle: "Tạo mẫu tóc thời thượng & phong cách trẻ trung. Hãy là chính bạn giữa nắng vàng!",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#san-pham-moi",
    backgroundImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
  },
  flashSaleItems: [
    {
      id: "fs-1",
      name: "Combo Uốn Sóng Lơi Hàn Quốc & Phục Hồi Collagen",
      category: "Bộ sưu tập",
      price: "390.000 ₫",
      oldPrice: "420.000 ₫",
      badges: ["Best seller", "-7%"],
      rating: 5,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-2",
      name: "Nhuộm Nâu Tây Ánh Khói & Cắt Thiết Kế Layer",
      category: "Nhuộm màu",
      price: "320.000 ₫",
      oldPrice: "370.000 ₫",
      badges: ["Best seller", "-13%"],
      rating: 5,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-3",
      name: "Bộ Dầu Gội & Tinh Chất Bưởi Kích Mọc Tóc Cao Cấp",
      category: "Dưỡng tóc",
      price: "350.000 ₫ – 420.000 ₫",
      badges: ["Sale"],
      rating: 5,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-4",
      name: "Phục Hồi Tóc Hư Tổn Chuyên Sâu Keratin B2",
      category: "Dưỡng tóc",
      price: "245.000 ₫",
      oldPrice: "320.000 ₫",
      badges: ["-23%"],
      rating: 5,
      reviews: 7,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-5",
      name: "Tạo Kiểu Tóc Dự Tiệc & Trang Điểm Tự Nhiên",
      category: "Tạo kiểu",
      price: "260.000 ₫",
      oldPrice: "400.000 ₫",
      badges: ["-35%"],
      rating: 5,
      reviews: 11,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    }
  ],
  newProductTabs: ["Bộ sưu tập", "Phụ kiện tóc", "Tạo kiểu", "Dưỡng tóc", "Nhuộm màu"],
  newProducts: [
    {
      id: "np-1",
      name: "Tạo Kiểu Tóc Layer Phồng Tự Nhiên Phong Cách Pháp",
      category: "Bộ sưu tập",
      price: "300.000 ₫",
      oldPrice: "320.000 ₫",
      badges: ["Best seller", "-6%"],
      rating: 5,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-2",
      name: "Uốn Cúp Đuôi Chữ C Bồng Bềnh & Hấp Dưỡng Tơ Tằm",
      category: "Tạo kiểu",
      price: "320.000 ₫",
      oldPrice: "350.000 ₫",
      badges: ["-9%"],
      rating: 5,
      reviews: 6,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-3",
      name: "Gói Nhuộm Highlight Balayage Thời Thượng",
      category: "Nhuộm màu",
      price: "260.000 ₫",
      rating: 5,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-4",
      name: "Hấp Dầu Phục Hồi Olaplex Số 3 Chuyên Sâu",
      category: "Dưỡng tóc",
      price: "390.000 ₫",
      oldPrice: "450.000 ₫",
      badges: ["-13%"],
      rating: 5,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-5",
      name: "Combo Cắt Tóc Nữ & Gội Đầu Dưỡng Sinh Thảo Dược",
      category: "Bộ sưu tập",
      price: "390.000 ₫",
      oldPrice: "420.000 ₫",
      badges: ["Best seller", "-7%"],
      rating: 5,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-6",
      name: "Tinh Dầu Dưỡng Bóng Tóc Argan Oil Morocco 100ml",
      category: "Phụ kiện tóc",
      price: "260.000 ₫",
      badges: ["Best seller"],
      rating: 5,
      reviews: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-7",
      name: "Xịt Bảo Vệ Tóc Khỏi Nhiệt Máy Uốn & Sấy",
      category: "Dưỡng tóc",
      price: "240.000 ₫",
      rating: 5,
      reviews: 4,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-8",
      name: "Nhuộm Phủ Bạc Thảo Dược Tự Nhiên Không Amoniac",
      category: "Nhuộm màu",
      price: "260.000 ₫",
      badges: ["Best seller"],
      rating: 5,
      reviews: 11,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-9",
      name: "Uốn Phồng Chân Tóc Hàn Quốc Giữ Nếp 6 Tháng",
      category: "Tạo kiểu",
      price: "265.000 ₫",
      rating: 5,
      reviews: 7,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-10",
      name: "Mặt Nạ Ủ Tóc Bơ Hạt Mỡ Phục Hồi Khô Xơ",
      category: "Phụ kiện tóc",
      price: "285.000 ₫",
      rating: 5,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bestSellerItems: [
    {
      id: "bs-1",
      name: "Tạo Kiểu Tóc Layer Phồng Tự Nhiên",
      category: "Tạo kiểu",
      price: "300.000 ₫",
      oldPrice: "320.000 ₫",
      badges: ["Best seller", "-6%"],
      rating: 5,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-2",
      name: "Uốn Cúp Đuôi Chữ C & Dưỡng Tơ Tằm",
      category: "Tạo kiểu",
      price: "320.000 ₫",
      oldPrice: "350.000 ₫",
      badges: ["-9%"],
      rating: 5,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-3",
      name: "Nhuộm Hồng Đào Pastel Thời Thượng Quyến Rũ",
      category: "Nhuộm màu",
      price: "290.000 ₫",
      oldPrice: "360.000 ₫",
      badges: ["Best seller", "-19%"],
      rating: 5,
      reviews: 21,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-4",
      name: "Uốn Sóng Nước Hippie Cá Tính Trẻ Trung",
      category: "Tạo kiểu",
      price: "400.000 ₫",
      oldPrice: "460.000 ₫",
      badges: ["Best seller", "-13%"],
      rating: 5,
      reviews: 16,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-5",
      name: "Cắt Tóc Bob Ngắn Hiện Đại & Ép Duỗi Tự Nhiên",
      category: "Tạo kiểu",
      price: "280.000 ₫",
      oldPrice: "300.000 ₫",
      badges: ["-7%"],
      rating: 5,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-6",
      name: "Gói Phục Hồi Tóc Nát & Chẻ Ngọn Keratin",
      category: "Dưỡng tóc",
      price: "260.000 ₫",
      badges: ["Best seller"],
      rating: 5,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-7",
      name: "Nhuộm Nâu Lạnh Ánh Rêu Không Cần Tẩy",
      category: "Nhuộm màu",
      price: "220.000 ₫",
      oldPrice: "260.000 ₫",
      badges: ["Best seller", "-15%"],
      rating: 5,
      reviews: 11,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-8",
      name: "Tạo Kiểu Tóc Xoăn Lơi Hàn Quốc Mềm Mượt",
      category: "Tạo kiểu",
      price: "320.000 ₫",
      badges: ["Best seller"],
      rating: 5,
      reviews: 10,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-9",
      name: "Gói Chăm Sóc Da Đầu Detox & Trị Gàu",
      category: "Dưỡng tóc",
      price: "260.000 ₫",
      badges: ["Best seller"],
      rating: 5,
      reviews: 13,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-10",
      name: "Combo Hấp Dầu Collagen & Cắt Tỉa Đuôi Tóc",
      category: "Dưỡng tóc",
      price: "390.000 ₫",
      oldPrice: "450.000 ₫",
      badges: ["-13%"],
      rating: 5,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80"
    }
  ],
  categoryCards: [
    {
      id: "cat-1",
      name: "Uốn sóng lơi",
      count: 12,
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cat-2",
      name: "Nhuộm thời trang",
      count: 7,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cat-3",
      name: "Phục hồi Keratin",
      count: 8,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "cat-4",
      name: "Tạo kiểu dự tiệc",
      count: 14,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    }
  ],
  womenShowcase: {
    bannerEyebrow: "Bộ sưu tập phổ biến 2026",
    bannerTitle: "Phong cách Mùa hè",
    bannerImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    items: [
      {
        id: "ws-1",
        name: "Uốn Sóng Lơi Layer Hàn Quốc",
        category: "Tạo kiểu",
        price: "260.000 ₫",
        badges: ["Best seller"],
        rating: 5,
        reviews: 9,
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ws-2",
        name: "Nhuộm Nâu Lạnh Ánh Khói Sáng Da",
        category: "Nhuộm màu",
        price: "220.000 ₫",
        oldPrice: "260.000 ₫",
        badges: ["Best seller", "-15%"],
        rating: 5,
        reviews: 14,
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ws-3",
        name: "Duỗi Hơi Nước Tự Nhiên Mềm Mượt",
        category: "Tạo kiểu",
        price: "290.000 ₫",
        rating: 5,
        reviews: 7,
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ws-4",
        name: "Phục Hồi Tóc Chuyên Sâu Collagen",
        category: "Dưỡng tóc",
        price: "290.000 ₫",
        rating: 5,
        reviews: 11,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  menShowcase: {
    bannerEyebrow: "Xu hướng tóc nam 2026",
    bannerTitle: "Giảm ngay 20% cho khách hàng đặt lịch lần đầu",
    bannerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    items: [
      {
        id: "ms-1",
        name: "Combo Cắt Tóc Nam Undercut & Gội Massage",
        category: "Nam giới",
        price: "300.000 ₫",
        oldPrice: "320.000 ₫",
        badges: ["Best seller", "-6%"],
        rating: 5,
        reviews: 15,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ms-2",
        name: "Uốn Ruffled / Side Part Hàn Quốc Nam",
        category: "Nam giới",
        price: "320.000 ₫",
        oldPrice: "350.000 ₫",
        badges: ["-9%"],
        rating: 5,
        reviews: 12,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ms-3",
        name: "Sáp Vuốt Tóc Nam Giữ Nếp Tự Nhiên Cao Cấp",
        category: "Phụ kiện",
        price: "290.000 ₫",
        oldPrice: "360.000 ₫",
        badges: ["Best seller", "-19%"],
        rating: 5,
        reviews: 19,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ms-4",
        name: "Nhuộm Khói Xám Lịch Lãm Cho Phái Mạnh",
        category: "Nam giới",
        price: "400.000 ₫",
        oldPrice: "460.000 ₫",
        badges: ["Best seller", "-13%"],
        rating: 5,
        reviews: 8,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  news: [
    {
      id: "news-1",
      title: "BÍ QUYẾT CHỌN KIỂU TÓC LAYER PHÙ HỢP VỚI TỪNG DÁNG MẶT",
      date: "6 Tháng Mười Hai, 2025",
      excerpt: "Kiểu tóc Layer kết hợp mái bay luôn là lựa chọn hoàn hảo giúp gương mặt thon gọn, trẻ trung và thanh thoát hơn...",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-2",
      title: "5 MÀU NHUỘM TÔN DA KHÔNG CẦN TẨY ĐƯỢC YÊU THÍCH NHẤT",
      date: "10 Tháng Mười Hai, 2025",
      excerpt: "Từ nâu trà sữa, nâu lạnh ánh khói đến nâu socola trầm ấm, đâu là tông màu giúp làn da bạn bật tông rạng rỡ...",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-3",
      title: "CÁCH CHĂM SÓC TÓC UỐN SÓNG LƠI GIỮ NẾP BỒNG BỀNH TẠI NHÀ",
      date: "15 Tháng Mười Hai, 2025",
      excerpt: "Chỉ với 5 phút sấy xoắn nhẹ cùng vài giọt tinh dầu Argan mỗi tối, mái tóc uốn của bạn sẽ luôn vào nếp chuẩn salon...",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "news-4",
      title: "XU HƯỚNG TẠO MẪU TÓC & PHỐI ĐỒ DẠO PHỐ MÙA LỄ HỘI",
      date: "20 Tháng Mười Hai, 2025",
      excerpt: "Sự kết hợp tinh tế giữa kiểu tóc buộc nửa đầu dịu dàng và trang phục tối giản mang lại vẻ ngoài cuốn hút...",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
    }
  ],
  socialGallery: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80"
  ]
};
