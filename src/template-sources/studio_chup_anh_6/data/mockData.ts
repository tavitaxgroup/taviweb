import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DiamondProductItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  popular?: boolean;
  soldText?: string;
  soldPercent?: number;
  rating?: number;
  image: string;
}

export interface StudioChupAnh6Data extends ClonedTemplateBaseData {
  topPromoBanners: Array<{
    id: string;
    discount: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  flashSaleCountdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  flashSaleProducts: DiamondProductItem[];
  bestSellerProducts: DiamondProductItem[];
  idealCategories: Array<{
    id: string;
    name: string;
    countText: string;
    image: string;
  }>;
  collectionBanners: Array<{
    id: string;
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  popularProducts: DiamondProductItem[];
  recommendedMini: DiamondProductItem[];
}

export const studioChupAnh6DefaultData: StudioChupAnh6Data = {
  business: {
    name: "MONA DIAMOND",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "cskh@monadiamond.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "09:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 460,
    aboutTitle: "Studio Trang Sức Cưới & Nhiếp Ảnh Kim Cương Mona Diamond",
    aboutText: [
      "Chúng tôi mang đến những tuyệt tác trang sức kim cương cưới độc bản cùng dịch vụ nhiếp ảnh lookbook trang sức cao cấp, tôn vinh vẻ đẹp rạng ngời và đẳng cấp của bạn trong ngày trọng đại."
    ]
  },
  hero: {
    eyebrow: "02 / 03",
    title: "Thiên đường kim cương",
    subtitle:
      "Chúng tôi mang đến những món trang sức độc đáo để bạn tự tin và tỏa sáng",
    ctaText: "TÌM HIỂU",
    ctaLink: "#khuyen-mai",
    backgroundImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85"
  },
  topPromoBanners: [
    {
      id: "tpb-1",
      discount: "GIẢM 20%",
      title: "Nhẫn vàng đính kim cương",
      ctaText: "KHÁM PHÁ",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tpb-2",
      discount: "GIẢM 35%",
      title: "Phiên bản Vàng Hồng Độc Bản",
      ctaText: "KHÁM PHÁ",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80"
    }
  ],
  flashSaleCountdown: {
    days: "207",
    hours: "02",
    minutes: "34",
    seconds: "55"
  },
  flashSaleProducts: [
    {
      id: "fs-1",
      name: "Dây Chuyền Nơ Hồng Ngọc Nesting",
      brand: "Bộ sưu tập Elsa Peretti®",
      oldPrice: "3,900,000₫",
      price: "3,000,000₫",
      badge: "SALE",
      popular: true,
      soldText: "Đã bán: 12/57",
      soldPercent: 25,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-2",
      name: "Dây Chuyền Mặt Báo Đen Infinity",
      brand: "Bộ sưu tập Tiffany & Co.",
      oldPrice: "3,600,000₫",
      price: "3,200,000₫",
      badge: "SALE",
      rating: 5,
      soldText: "Đã bán: 13/58",
      soldPercent: 28,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-3",
      name: "Nhẫn Đôi Hoàng Gia Đính Đá Quý",
      brand: "Bộ sưu tập Schlumberger®",
      oldPrice: "3,000,000₫",
      price: "2,600,000₫",
      badge: "SALE",
      rating: 5,
      soldText: "Đã bán: 18/57",
      soldPercent: 35,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fs-4",
      name: "Mặt Dây Chuyền Ngọc Đen Velvet Box",
      brand: "Bộ sưu tập Schlumberger®",
      oldPrice: "4,600,000₫",
      price: "4,500,000₫",
      badge: "SALE",
      soldText: "Đã bán: 16/56",
      soldPercent: 30,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bestSellerProducts: [
    {
      id: "bs-1",
      name: "Nhẫn Kim Cương Schlumberger® Lynn",
      brand: "Schlumberger®",
      price: "2,650,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-2",
      name: "Vòng Tay Ngọc Trai Khóa Vàng 18K",
      brand: "Atlas® Bridal",
      price: "2,600,000₫",
      popular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-3",
      name: "Lắc Tay Kim Cương Maia Peretti®",
      brand: "Elsa Peretti®",
      price: "2,600,000₫",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-4",
      name: "Vòng Tay Mặt Ngọc Knot Vàng Ý",
      brand: "Paloma Picasso®",
      price: "3,500,000₫ – 4,000,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "WEDDING FILMS" },
    { id: "cl-2", name: "NATURE STUDIO" },
    { id: "cl-3", name: "ORGANIC GEM" },
    { id: "cl-4", name: "FLORAL DREAMS" },
    { id: "cl-5", name: "HANDCRAFTED" },
    { id: "cl-6", name: "PURE DIAMOND" }
  ],
  idealCategories: [
    {
      id: "ic-1",
      name: "Nhẫn Cưới",
      countText: "7 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ic-2",
      name: "Bông Tai",
      countText: "10 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ic-3",
      name: "Ngọc Trai",
      countText: "11 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ic-4",
      name: "Trang Sức Cưới",
      countText: "8 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ic-5",
      name: "Phụ Kiện",
      countText: "5 sản phẩm",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80"
    }
  ],
  collectionBanners: [
    {
      id: "cb-1",
      eyebrow: "BỘ SƯU TẬP",
      title: "Dây chuyền Queen Giảm 20%",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cb-2",
      eyebrow: "ƯU ĐÃI 20%",
      title: "Nhẫn ngọc trai ARDECO",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  popularProducts: [
    {
      id: "pp-1",
      name: "Nhẫn Kim Cương Schlumberger® Lynn",
      brand: "Schlumberger®",
      price: "2,650,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pp-2",
      name: "Vòng Tay Ngọc Trai Khóa Vàng 18K",
      brand: "Atlas® Bridal",
      price: "2,600,000₫",
      popular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pp-3",
      name: "Lắc Tay Kim Cương Maia Peretti®",
      brand: "Elsa Peretti®",
      price: "2,600,000₫",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pp-4",
      name: "Vòng Tay Mặt Ngọc Knot Vàng Ý",
      brand: "Paloma Picasso®",
      price: "3,500,000₫ – 4,000,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Dương Phạm",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Tôi đặc biệt ấn tượng với dịch vụ khách hàng chuyên nghiệp và chu đáo của họ. Tôi chắc chắn sẽ tiếp tục mua sắm ở đây và giới thiệu cho bạn bè của mình."
    },
    {
      id: "rv-2",
      author: "Nguyễn Thị Mai",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Tôi đặc biệt ấn tượng với dịch vụ khách hàng chuyên nghiệp và chu đáo của họ. Tôi chắc chắn sẽ tiếp tục mua sắm ở đây và giới thiệu cho bạn bè của mình."
    },
    {
      id: "rv-3",
      author: "Trần Anh Tuấn",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Tôi đặc biệt ấn tượng với dịch vụ khách hàng chuyên nghiệp và chu đáo của họ. Tôi chắc chắn sẽ tiếp tục mua sắm ở đây và giới thiệu cho bạn bè của mình."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Bí quyết chọn nhẫn cầu hôn kim cương hoàn hảo cho nàng",
      date: "04/01/2024",
      category: "Thời trang cưới",
      excerpt:
        "Khám phá tiêu chuẩn 4Cs của kim cương tự nhiên và cách chọn kiểu dáng tôn lên bàn tay cô dâu...",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Xu hướng trang sức cưới vàng hồng và ngọc trai mùa cưới năm nay",
      date: "04/01/2024",
      category: "Phong cách cô dâu",
      excerpt:
        "Sự kết hợp tinh tế giữa sắc vàng ấm áp và vẻ đẹp thanh khiết của ngọc trai tự nhiên trong bộ ảnh cưới...",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Cách phối trang sức kim cương cùng váy cưới chụp hình lookbook",
      date: "04/01/2024",
      category: "Nhiếp ảnh cưới",
      excerpt:
        "Bí quyết bắt sáng cho trang sức kim cương dưới ánh đèn studio giúp từng khung hình trở nên lộng lẫy...",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Hành trình chế tác thủ công một cặp nhẫn cưới kim cương độc bản",
      date: "04/01/2024",
      category: "Chế tác kim hoàn",
      excerpt:
        "Mỗi viên kim cương đều trải qua hàng trăm giờ mài giũa tỉ mỉ bởi những nghệ nhân kim hoàn lành nghề...",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  recommendedMini: [
    {
      id: "rm-1",
      name: "Mặt Dây Ngọc Đen Velvet Box",
      brand: "Schlumberger®",
      oldPrice: "4,600,000₫",
      price: "4,500,000₫",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rm-2",
      name: "Vương Miện Galleria of Gems",
      brand: "Atlas®",
      oldPrice: "3,400,000₫",
      price: "3,200,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rm-3",
      name: "Bông Tai Sao Đêm Diamond Band",
      brand: "Elsa Peretti®",
      oldPrice: "2,600,000₫",
      price: "2,000,000₫",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "rm-4",
      name: "Nhẫn Kim Cương Diamond Sea",
      brand: "Tiffany®",
      price: "2,300,000₫ – 3,800,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80"
    }
  ]
};

export const defaultData = studioChupAnh6DefaultData;
export const mockData = studioChupAnh6DefaultData;
export default studioChupAnh6DefaultData;
