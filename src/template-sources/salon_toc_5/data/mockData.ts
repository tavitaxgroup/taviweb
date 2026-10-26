import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SalonToc5Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  badges?: Array<{
    text: string;
    color: "red" | "green" | "olive";
  }>;
  swatches?: string[];
  image: string;
}

export interface SalonToc5Data extends ClonedTemplateBaseData {
  womenPortrait: string;
  womenProducts: SalonToc5Product[];
  midBanners: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
    bgClass: string;
  }>;
  menPortrait: string;
  menProducts: SalonToc5Product[];
  miniLists: {
    popular: SalonToc5Product[];
    bestseller: SalonToc5Product[];
    promo: SalonToc5Product[];
  };
  newestProducts: SalonToc5Product[];
  dealSpotlight: {
    title: string;
    oldPrice: string;
    price: string;
    sold: number;
    available: number;
    mainImage: string;
    thumbs: string[];
  };
  brandLogos: string[];
}

export const salonToc5DefaultData: SalonToc5Data = {
  business: {
    name: "coutura mona.",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00 | Thứ 7: 09:00 - 15:00 | Chủ nhật: 09:00 - 12:00",
    rating: 4.9,
    reviewCount: 410,
    aboutTitle: "Học Viện Tạo Mẫu Tóc, Trang Điểm & Phong Cách Thời Trang",
    aboutText: [
      "Coutura Mona định hình phong cách cá nhân toàn diện từ tạo mẫu tóc nghệ thuật, trang điểm chuyên nghiệp đến thời trang ứng dụng đương đại."
    ]
  },
  hero: {
    eyebrow: "M O N A   M E D I A",
    title: "Thu Đông & Tạo Mẫu 2026",
    subtitle: "Bộ sưu tập phong cách tạo mẫu tóc & thời trang thu đông mới nhất",
    ctaText: "MUA NGAY",
    ctaLink: "#moi-nhat",
    backgroundImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=85"
  },
  womenPortrait:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
  womenProducts: [
    {
      id: "wp-1",
      name: "Áo Khoác Len Tạo Kiểu Elessi",
      price: "589,000₫",
      badges: [
        { text: "HOT", color: "red" },
        { text: "PHỔ BIẾN", color: "red" }
      ],
      swatches: ["#3b82f6", "#e5e7eb", "#facc15"],
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wp-2",
      name: "Áo Nỉ Phong Cách Xanh Rêu",
      price: "390,000₫",
      oldPrice: "500,000₫",
      badges: [
        { text: "-22%", color: "green" },
        { text: "GIỚI HẠN", color: "olive" }
      ],
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wp-3",
      name: "Áo Len Kẻ Sọc Tay Phồng",
      price: "690,000₫",
      oldPrice: "800,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "red" },
        { text: "-14%", color: "green" },
        { text: "GIỚI HẠN", color: "olive" }
      ],
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wp-4",
      name: "Áo Choàng Pastel Hồng Phấn",
      price: "690,000₫",
      badges: [{ text: "PHỔ BIẾN", color: "red" }],
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wp-5",
      name: "Áo Khoác Hoodie Đen Cá Tính",
      price: "790,000₫",
      image:
        "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "wp-6",
      name: "Đầm Xòe Vàng Nghệ Thuật",
      price: "990,000₫",
      oldPrice: "1,090,000₫",
      badges: [
        { text: "-9%", color: "green" },
        { text: "GIỚI HẠN", color: "olive" }
      ],
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=80"
    }
  ],
  midBanners: [
    {
      id: "mb-1",
      title: "Túi Phụ Kiện Mini",
      subtitle: "Bộ Dụng Cụ & Phụ Kiện Tạo Mẫu",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
      bgClass: "bg-[#efefef]"
    },
    {
      id: "mb-2",
      title: "Khuyến mãi giới hạn",
      subtitle: "50% OFF",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=80",
      bgClass: "bg-[#f6dada]"
    }
  ],
  menPortrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
  menProducts: [
    {
      id: "mp-1",
      name: "Áo Thun Phối Màu Studio",
      price: "345,000₫",
      swatches: ["#f9a8d4", "#d1d5db"],
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mp-2",
      name: "Áo Hoodie Vàng Streetwear",
      price: "675,000₫",
      swatches: ["#f9a8d4", "#facc15"],
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mp-3",
      name: "Áo Thun Xám Tạo Kiểu Nam",
      price: "140,000₫",
      oldPrice: "160,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "red" },
        { text: "-13%", color: "green" },
        { text: "GIỚI HẠN", color: "olive" }
      ],
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mp-4",
      name: "Áo Len Mỏng Phong Cách Hàn",
      price: "589,000₫",
      badges: [
        { text: "HOT", color: "red" },
        { text: "PHỔ BIẾN", color: "red" }
      ],
      swatches: ["#3b82f6", "#e5e7eb", "#facc15"],
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mp-5",
      name: "Sơ Mi Hồng Pastel Thanh Lịch",
      price: "456,000₫",
      badges: [{ text: "PHỔ BIẾN", color: "red" }],
      swatches: ["#2563eb", "#f43f5e"],
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "mp-6",
      name: "Áo Thun Đen Coutura Signature",
      price: "190,000₫",
      oldPrice: "210,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "red" },
        { text: "-10%", color: "green" }
      ],
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80"
    }
  ],
  miniLists: {
    popular: [
      {
        id: "ml-1",
        name: "Áo Thun Đen Coutura Signature",
        price: "190,000₫",
        oldPrice: "210,000₫",
        image:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ml-2",
        name: "Áo Thun Cổ Điển Olive",
        price: "170,000₫",
        image:
          "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ml-3",
        name: "Áo Khoác Gió Vàng Năng Động",
        price: "290,000₫",
        image:
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80"
      }
    ],
    bestseller: [
      {
        id: "ml-4",
        name: "Áo Thun Xám Tạo Kiểu Nam",
        price: "140,000₫",
        oldPrice: "160,000₫",
        image:
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ml-5",
        name: "Áo Nỉ Phong Cách Xanh Rêu",
        price: "390,000₫",
        oldPrice: "500,000₫",
        image:
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ml-6",
        name: "Áo Len Kẻ Sọc Tay Phồng",
        price: "690,000₫",
        oldPrice: "800,000₫",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=300&q=80"
      }
    ],
    promo: [
      {
        id: "ml-7",
        name: "Áo Thun Đen Coutura Signature",
        price: "190,000₫",
        oldPrice: "210,000₫",
        image:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ml-8",
        name: "Áo Khoác Kaki Phong Cách",
        price: "690,000₫",
        oldPrice: "760,000₫",
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ml-9",
        name: "Áo Thun Xám Tạo Kiểu Nam",
        price: "140,000₫",
        oldPrice: "160,000₫",
        image:
          "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  newestProducts: [
    {
      id: "np-1",
      name: "Áo Thun Phối Màu Studio",
      price: "345,000₫",
      swatches: ["#f9a8d4", "#d1d5db"],
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-2",
      name: "Áo Khoác Len Tạo Kiểu Elessi",
      price: "589,000₫",
      badges: [
        { text: "HOT", color: "red" },
        { text: "PHỔ BIẾN", color: "red" }
      ],
      swatches: ["#3b82f6", "#e5e7eb", "#facc15"],
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-3",
      name: "Áo Hoodie Vàng Streetwear",
      price: "675,000₫",
      swatches: ["#f9a8d4", "#facc15"],
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-4",
      name: "Sơ Mi Hồng Pastel Thanh Lịch",
      price: "456,000₫",
      badges: [{ text: "PHỔ BIẾN", color: "red" }],
      swatches: ["#2563eb", "#f43f5e"],
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-5",
      name: "Áo Thun Xám Tạo Kiểu Nam",
      price: "140,000₫",
      oldPrice: "160,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "red" },
        { text: "-13%", color: "green" },
        { text: "GIỚI HẠN", color: "olive" }
      ],
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-6",
      name: "Áo Thun Đen Coutura Signature",
      price: "190,000₫",
      oldPrice: "210,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "red" },
        { text: "-10%", color: "green" }
      ],
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-7",
      name: "Áo Thun Cổ Điển Olive",
      price: "170,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "red" },
        { text: "SỐ LƯỢNG LỚN", color: "red" }
      ],
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-8",
      name: "Áo Phông Phối Sọc Ngang",
      price: "180,000₫",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-9",
      name: "Áo Khoác Gió Vàng Năng Động",
      price: "290,000₫",
      badges: [
        { text: "HOT", color: "red" },
        { text: "PHỔ BIẾN", color: "red" }
      ],
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "np-10",
      name: "Áo Thun Vàng Mù Tạt Basic",
      price: "129,000₫",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80"
    }
  ],
  dealSpotlight: {
    title: "Combo Tạo Kiểu & Áo Thun Xám Nam",
    oldPrice: "160,000₫",
    price: "140,000₫",
    sold: 36,
    available: 64,
    mainImage:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=700&q=80",
    thumbs: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80"
    ]
  },
  news: [
    {
      id: "st-n1",
      category: "TẠO MẪU & LÀM ĐẸP",
      title: "Phong Cách Tạo Mẫu Tóc Ngắn & Trang Điểm Cổ Điển Thanh Lịch",
      date: "13 Tháng Hai",
      excerpt: "Định hình diện mạo thanh thoát với kiểu tóc Bob tỉa layer kết hợp tông trang điểm...",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-n2",
      category: "PHONG CÁCH SỐNG",
      title: "Bí Quyết Phối Đồ & Chăm Sóc Tóc Chuẩn Quý Cô Hiện Đại",
      date: "13 Tháng Hai",
      excerpt: "Gợi ý lựa chọn trang phục dạo phố hài hòa cùng màu tóc nhuộm nâu trà sữa...",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-n3",
      category: "XU HƯỚNG MỚI",
      title: "Xu Hướng Màu Nhuộm Pastel & Phối Phụ Kiện Mùa Lễ Hội",
      date: "13 Tháng Hai",
      excerpt: "Khám phá bảng màu nhuộm dưỡng bóng mượt không tẩy tại học viện Coutura Mona...",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=600&q=80"
    }
  ],
  brandLogos: [
    "LADY & DADDY",
    "SCANDINAVIA CLUB",
    "MI CASA STUDIO",
    "OAK BARK SALON",
    "STYLING LAB",
    "THE BEAN ATELIER"
  ]
};

export const defaultData = salonToc5DefaultData;
export default salonToc5DefaultData;
