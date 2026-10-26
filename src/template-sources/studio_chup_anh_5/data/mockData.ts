import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface StudioChupAnh5Item {
  id: string;
  name: string;
  collection: string;
  price: string;
  oldPrice?: string;
  badges?: Array<"SALE" | "PHỔ BIẾN">;
  rating: number;
  reviewCount: number;
  soldCount?: number;
  totalStock?: number;
  image: string;
}

export interface StudioChupAnh5Data extends ClonedTemplateBaseData {
  guarantees: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: "truck" | "shield" | "headset";
  }>;
  topBanners: Array<{
    id: string;
    discount: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  flashSaleItems: StudioChupAnh5Item[];
  bestsellerItems: StudioChupAnh5Item[];
  popularCategories: Array<{
    id: string;
    name: string;
    countLabel: string;
    image: string;
  }>;
  orangeBanners: Array<{
    id: string;
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  popularSliderItems: StudioChupAnh5Item[];
  studioBadges: string[];
}

export const studioChupAnh5DefaultData: StudioChupAnh5Data = {
  business: {
    name: "MONA JEWELRY",
    phone: ["(+84) 0313728397", "0909 728 397"],
    email: ["info@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "09:00 - 18:00 Từ thứ hai đến thứ sáu",
    rating: 5.0,
    reviewCount: 380,
    aboutTitle: "Bộ sưu tập trang sức kim cương & Nhiếp ảnh cưới Luxury",
    aboutText: [
      "Mona Jewelry & Bridal Studio kết hợp chế tác trang sức kim cương, ngọc trai thượng hạng cùng dịch vụ nhiếp ảnh cưới Fine Art tôn vinh khoảnh khắc vĩnh cửu."
    ]
  },
  hero: {
    eyebrow: "TRANG SỨC CƯỚI & STUDIO NHIẾP ẢNH LUXURY",
    title: "Bộ sưu tập trang sức kim cương",
    subtitle:
      "Thổi hồn đương đại vào những viên ngọc trai và kim cương cổ điển. Nơi những giấc mơ ngày cưới trở thành hiện thực.",
    ctaText: "TÌM HIỂU",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=85"
  },
  guarantees: [
    {
      id: "g1",
      title: "Miễn phí giao hàng",
      subtitle: "Với đơn hàng trên 10,000,000₫",
      icon: "truck"
    },
    {
      id: "g2",
      title: "Thanh toán tối ưu",
      subtitle: "Bảo mật an toàn khi thanh toán",
      icon: "shield"
    },
    {
      id: "g3",
      title: "Hỗ trợ 24/7",
      subtitle: "Hỗ trợ tận tâm và nhiệt tình",
      icon: "headset"
    }
  ],
  topBanners: [
    {
      id: "tb1",
      discount: "20% OFF",
      title: "Nhẫn vàng đính kim cương",
      ctaText: "KHÁM PHÁ",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tb2",
      discount: "35% OFF",
      title: "Phiên bản FORGED Carbon",
      ctaText: "KHÁM PHÁ",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
    }
  ],
  countdown: {
    days: "243",
    hours: "01",
    minutes: "45",
    seconds: "50"
  },
  flashSaleItems: [
    {
      id: "fs-1",
      name: "Dây Chuyền Nơ Hồng Ngọc Cưới",
      collection: "Bộ Sưu Tập Elsa",
      price: "3,000,000₫",
      oldPrice: "3,200,000₫",
      badges: ["SALE", "PHỔ BIẾN"],
      rating: 5,
      reviewCount: 2,
      soldCount: 12,
      totalStock: 57,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-2",
      name: "Dây Chuyền Vàng Hồng Ánh Kim",
      collection: "Chế Tác Thủ Công",
      price: "3,200,000₫",
      oldPrice: "3,500,000₫",
      badges: ["SALE"],
      rating: 5,
      reviewCount: 1,
      soldCount: 13,
      totalStock: 58,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-3",
      name: "Nhẫn Hoàng Kim Đính Đá Quý",
      collection: "Bộ Sưu Tập Hoàng Gia",
      price: "2,600,000₫",
      oldPrice: "3,000,000₫",
      badges: ["SALE"],
      rating: 5,
      reviewCount: 1,
      soldCount: 18,
      totalStock: 57,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-4",
      name: "Mặt Dây Chuyền Bạch Kim Đen",
      collection: "Bộ Sưu Tập Kỷ Niệm",
      price: "4,500,000₫",
      oldPrice: "4,600,000₫",
      badges: ["SALE"],
      rating: 5,
      reviewCount: 3,
      soldCount: 16,
      totalStock: 56,
      image:
        "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bestsellerItems: [
    {
      id: "bs-1",
      name: "Khuyên Tai Vàng Hồng 18K",
      collection: "Bộ Sưu Tập Atlas",
      price: "4,200,000₫",
      rating: 5,
      reviewCount: 1,
      image:
        "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-2",
      name: "Nhẫn Kim Cương Đại Dương",
      collection: "Bộ Sưu Tập Elsa",
      price: "2,100,000₫ – 3,800,000₫",
      badges: ["SALE", "PHỔ BIẾN"],
      rating: 5,
      reviewCount: 1,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-3",
      name: "Nhẫn Đá Citrine Vàng Ánh Nắng",
      collection: "Bộ Sưu Tập Elsa",
      price: "2,200,000₫",
      badges: ["PHỔ BIẾN"],
      rating: 5,
      reviewCount: 2,
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-4",
      name: "Nhẫn Bạch Kim Nghệ Thuật Lynn",
      collection: "Bộ Sưu Tập Schlumberger",
      price: "2,650,000₫",
      rating: 5,
      reviewCount: 1,
      image:
        "https://images.unsplash.com/photo-1598560917505-59a3655c1592?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-5",
      name: "Lắc Tay Kim Cương & Đá Onyx",
      collection: "Chế Tác Thủ Công",
      price: "2,600,000₫",
      oldPrice: "2,700,000₫",
      badges: ["SALE"],
      rating: 5,
      reviewCount: 2,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-6",
      name: "Vòng Tay Ngọc Trai Ánh Vàng",
      collection: "Bộ Sưu Tập Atlas",
      price: "2,600,000₫",
      badges: ["PHỔ BIẾN"],
      rating: 5,
      reviewCount: 2,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-7",
      name: "Lắc Vàng Đính Kim Cương Maia",
      collection: "Bộ Sưu Tập Elsa",
      price: "2,600,000₫",
      badges: ["PHỔ BIẾN"],
      rating: 5,
      reviewCount: 4,
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-8",
      name: "Dây Chuyền Khóa Vàng 18K",
      collection: "Bộ Sưu Tập Schlumberger",
      price: "2,600,000₫",
      rating: 5,
      reviewCount: 3,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  popularCategories: [
    {
      id: "cat-1",
      name: "Nhẫn Cưới",
      countLabel: "7 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-2",
      name: "Bông Tai",
      countLabel: "10 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-3",
      name: "Ngọc Trai",
      countLabel: "11 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-4",
      name: "Trang Sức Cưới",
      countLabel: "8 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cat-5",
      name: "Phụ Kiện",
      countLabel: "5 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80"
    }
  ],
  orangeBanners: [
    {
      id: "ob-1",
      eyebrow: "BỘ SƯU TẬP",
      title: "Dây chuyền Queen Giảm 20%",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ob-2",
      eyebrow: "20% OFF",
      title: "Nhẫn ngọc trai ARDECO",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
    }
  ],
  popularSliderItems: [
    {
      id: "ps-1",
      name: "Mặt Dây Chuyền Cá Ngựa Vàng",
      collection: "Bộ Sưu Tập Schlumberger",
      price: "2,600,000₫ – 3,800,000₫",
      badges: ["SALE", "PHỔ BIẾN"],
      rating: 5,
      reviewCount: 1,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ps-2",
      name: "Nhẫn Đá Quý Hoàng Kim",
      collection: "Bộ Sưu Tập Elsa",
      price: "2,200,000₫",
      badges: ["PHỔ BIẾN"],
      rating: 5,
      reviewCount: 2,
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ps-3",
      name: "Nhẫn Bạch Kim Nghệ Thuật Lynn",
      collection: "Bộ Sưu Tập Schlumberger",
      price: "2,650,000₫",
      rating: 5,
      reviewCount: 1,
      image:
        "https://images.unsplash.com/photo-1598560917505-59a3655c1592?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ps-4",
      name: "Vòng Tay Ngọc Trai Cưới",
      collection: "Bộ Sưu Tập Atlas",
      price: "2,600,000₫",
      badges: ["PHỔ BIẾN"],
      rating: 5,
      reviewCount: 2,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Nguyễn Thị Mai",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đặc biệt ấn tượng với dịch vụ tư vấn trang sức cưới và chụp hình lookbook chuyên nghiệp của studio. Đội ngũ luôn sẵn sàng giúp tôi tìm ra cặp nhẫn kim cương phù hợp nhất với phong cách ngày trọng đại."
    },
    {
      id: "tm-2",
      author: "Trần Anh Tuấn",
      role: "Khách hàng",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Chế tác tinh xảo, giấy kiểm định kim cương GIA rõ ràng và bộ ảnh cưới trang sức được thực hiện vô cùng sang trọng. Tôi chắc chắn sẽ tiếp tục lựa chọn và giới thiệu cho bạn bè của mình."
    }
  ],
  studioBadges: [
    "K&C ATELIER",
    "PHIM CƯỚI NGHỆ THUẬT",
    "KIM CƯƠNG TỰ NHIÊN",
    "CHẾ TÁC THỦ CÔNG",
    "HOA CƯỚI CAO CẤP",
    "STUDIO HẠNG SANG"
  ]
};

export const defaultData = studioChupAnh5DefaultData;
export default studioChupAnh5DefaultData;
