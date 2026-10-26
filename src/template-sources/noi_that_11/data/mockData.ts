import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat11Product {
  id: string;
  name: string;
  category: string;
  oldPrice?: string;
  price: string;
  discountBadge?: string;
  image: string;
}

export interface NoiThat11DecorPost {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface NoiThat11NewCollection {
  id: string;
  topTitle: string;
  collectionName: string;
  startingPrice: string;
  image: string;
}

export interface NoiThat11CategoryBanner {
  id: string;
  enHeading: string;
  enSub: string;
  titleVi: string;
  countText: string;
  image: string;
}

export interface NoiThat11Data extends ClonedTemplateBaseData {
  promoCampaign: {
    mainTitle: string;
    subTitle: string;
    dateRange: string;
    offers: Array<{
      id: string;
      heading: string;
      highlight: string;
      note?: string;
    }>;
  };
  featuredProducts: NoiThat11Product[];
  decorPosts: NoiThat11DecorPost[];
  newCollections: NoiThat11NewCollection[];
  categoryBanners: NoiThat11CategoryBanner[];
  storeLocator: {
    heading: string;
    description: string;
    ctaText: string;
    mapImage: string;
  };
  footerInfo: {
    companyFullName: string;
    businessLicense: string;
    legalRepresentative: string;
    productCategoriesLeft: string[];
    productCategoriesRight: string[];
  };
}

export const noiThat11DefaultData: NoiThat11Data = {
  business: {
    name: "Mona Living",
    phone: ["0126 922 0162", "1900 636 648"],
    email: ["cskh@monaliving.vn", "info@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08:00 - 21:30 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 1540,
    experienceYears: "15+",
    aboutTitle: "Siêu Thị Nội Thất & Trang Trí Nhà Cửa Hàng Đầu Việt Nam",
    aboutText: [
      "MONA hiện đang sở hữu hệ thống 16 Siêu thị Nội Thất và Trang Trí tại hai thành phố chính của Việt Nam là Hà Nội và TP.Hồ Chí Minh.",
      "Cung cấp hơn 5.000 sản phẩm bàn ghế gia đình, nội thất văn phòng, trường học, y tế và phụ kiện trang trí tổ ấm với mức giá tận xưởng."
    ],
    highlights: [
      "Hệ thống 16 siêu thị trưng bày tại Hà Nội & TP.HCM",
      "Miễn phí giao hàng & lắp đặt tận nơi trong 24h",
      "Bảo hành chính hãng từ 12 - 36 tháng",
      "Đổi trả linh hoạt trong vòng 30 ngày"
    ]
  },
  hero: {
    eyebrow: "SIÊU THỊ NỘI THẤT & TRANG TRÍ",
    title: "Thay lời tri ân — Mừng ngày của Mẹ",
    subtitle:
      "Ưu đãi lên đến 50% hàng trăm sản phẩm nệm, ghế thư giãn, bàn ăn và phụ kiện bếp xinh.",
    ctaText: "Săn ưu đãi ngay",
    ctaLink: "#san-pham",
    secondaryCtaText: "Hệ thống cửa hàng",
    secondaryCtaLink: "#dia-chi",
    backgroundImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85"
  },
  promoCampaign: {
    mainTitle: "Thay lời tri ân",
    subTitle: "Mừng ngày của Mẹ",
    dateRange: "10 - 13.05",
    offers: [
      {
        id: "of-1",
        heading: "CHO MẸ GIẤC NGỦ NGON",
        highlight: "Quà tặng xinh xắn khi mua nệm"
      },
      {
        id: "of-2",
        heading: "HOA YÊU THƯƠNG",
        highlight: "Mua 6 hoa Cherry* Tặng thêm 2",
        note: "(*) Chỉ áp dụng cho mã hàng 1081404"
      },
      {
        id: "of-3",
        heading: "CÙNG MẸ THƯ GIÃN",
        highlight: "Giảm 20 - 50% cho ghế bành & ghế đôn"
      },
      {
        id: "of-4",
        heading: "BẾP XINH CỦA MẸ",
        highlight: "Mua trên 7 sản phẩm cho bếp & phòng ăn Giảm ngay 5%"
      }
    ]
  },
  featuredProducts: [
    {
      id: "prd-1",
      name: "Bàn máy tính kèm kệ sách gỗ sồi",
      category: "NỘI THẤT GIA ĐÌNH",
      oldPrice: "2,100,000 ₫",
      price: "1,950,000 ₫",
      discountBadge: "-7%",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-2",
      name: "Tủ tài liệu gỗ cao cấp DC1350H1",
      category: "TỦ TÀI LIỆU",
      oldPrice: "3,520,000 ₫",
      price: "3,390,000 ₫",
      discountBadge: "-4%",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-3",
      name: "Giường y tế 1 tay quay Inox-02",
      category: "NỘI THẤT Y TẾ",
      price: "2,900,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-4",
      name: "Bàn ghế học sinh trung học BHS103",
      category: "TRƯỜNG HỌC",
      oldPrice: "700,000 ₫",
      price: "596,000 ₫",
      discountBadge: "-15%",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-5",
      name: "Bàn làm việc chân sắt HU12S",
      category: "BÀN",
      oldPrice: "1,050,000 ₫",
      price: "985,000 ₫",
      discountBadge: "-6%",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-6",
      name: "Bàn tròn để đầu giường sang trọng (trắng) size 50-37",
      category: "NỘI THẤT GIA ĐÌNH",
      oldPrice: "199,000 ₫",
      price: "140,000 ₫",
      discountBadge: "-30%",
      image:
        "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-7",
      name: "Ghế Phòng Họp Chân Quỳ Gỗ GH07",
      category: "GHẾ",
      oldPrice: "1,400,000 ₫",
      price: "1,235,000 ₫",
      discountBadge: "-12%",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "prd-8",
      name: "Bộ giường tủ phòng ngủ bé trai hiện đại",
      category: "NỘI THẤT GIA ĐÌNH",
      oldPrice: "5,500,000 ₫",
      price: "5,300,000 ₫",
      discountBadge: "-4%",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4efb?auto=format&fit=crop&w=700&q=80"
    }
  ],
  decorPosts: [
    {
      id: "dec-1",
      day: "10",
      month: "Th5",
      title: "Không gian đẹp nhờ kết hợp các phong cách nội thất khác biệt",
      excerpt:
        "Hiện tại, mọi người thường do dự trong việc kết hợp các gam màu tương phản cho phòng khách...",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dec-2",
      day: "10",
      month: "Th5",
      title: "Những căn phòng mang đậm phong cách Bohemian phóng khoáng",
      excerpt:
        "Hãy tham khảo các ý tưởng trang trí nội thất theo phong cách du mục ấm cúng và đầy nghệ thuật...",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dec-3",
      day: "10",
      month: "Th5",
      title: "Căn hộ 25m² đẹp với nội thất cực kỳ hợp lý và thoáng sáng",
      excerpt:
        "Nội thất đặt đóng riêng kết hợp cùng cách bài trí thông minh giúp tối ưu từng mét vuông diện tích...",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=700&q=80"
    }
  ],
  newCollections: [
    {
      id: "col-1",
      topTitle: "THẮP SÁNG KHÔNG GIAN",
      collectionName: "BỘ SƯU TẬP URBAN",
      startingPrice: "749",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "col-2",
      topTitle: "GIẢI PHÓNG KHÔNG GIAN\nLÀM ĐẸP TỔ ẤM",
      collectionName: "BỘ SƯU TẬP LIPIZAN",
      startingPrice: "699",
      image:
        "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "col-3",
      topTitle: "HƯƠNG THƠM LÃNG MẠN",
      collectionName: "BỘ SƯU TẬP ROMANTICA",
      startingPrice: "99",
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
    }
  ],
  categoryBanners: [
    {
      id: "cat-1",
      enHeading: "top tables",
      enSub: "xem mẫu bàn >",
      titleVi: "BÀN",
      countText: "9 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cat-2",
      enHeading: "comfort &\npracticality",
      enSub: "xem mẫu ghế >",
      titleVi: "GHẾ",
      countText: "10 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cat-3",
      enHeading: "living room",
      enSub: "tổ ấm hiện đại >",
      titleVi: "NỘI THẤT\nGIA ĐÌNH",
      countText: "13 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cat-4",
      enHeading: "education",
      enSub: "bàn ghế chuẩn >",
      titleVi: "TRƯỜNG\nHỌC",
      countText: "13 SẢN PHẨM",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
    }
  ],
  storeLocator: {
    heading: "ĐỊA CHỈ",
    description:
      "MONA hiện đang sở hữu hệ thống 16 Siêu thị Nội Thất và Trang Trí tại hai thành phố chính của Việt Nam là Hà Nội và TP.Hồ Chí Minh.",
    ctaText: "HỆ THỐNG CỬA HÀNG",
    mapImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=80"
  },
  footerInfo: {
    companyFullName: "CÔNG TY TNHH MONA MEDIA",
    businessLicense:
      "0313728397. Sở kế hoạch và đầu tư thành phố Hồ Chí Minh",
    legalRepresentative: "Mona",
    productCategoriesLeft: [
      "Bàn",
      "Ghế",
      "Giá Siêu Thị",
      "Nội Thất Công Cộng",
      "Nội Thất Hội Trường",
      "Trường Học",
      "Tủ Tài Liệu"
    ],
    productCategoriesRight: [
      "Đồ Gia Dụng",
      "Giá Sắt",
      "Két Sắt",
      "Nội Thất Gia Đình",
      "Nội Thất Y Tế",
      "Tủ",
      "Vách Ngăn"
    ]
  }
};
