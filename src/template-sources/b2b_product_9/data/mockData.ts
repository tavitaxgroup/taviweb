import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2BProduct9PromoBanner {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface B2BProduct9Product {
  id: string;
  name: string;
  price: string;
  tab: "moi-nhat" | "giam-gia" | "ban-chay";
  unit: string;
  origin: string;
  image: string;
}

export interface B2BProduct9TemplateData extends ClonedTemplateBaseData {
  heroProductImage: string;
  promoBanners: B2BProduct9PromoBanner[];
  featuredProducts: B2BProduct9Product[];
  weeklyDealBgImage: string;
  weeklyDealCountdown: Array<{ value: string; label: string }>;
  weeklyDealProducts: B2BProduct9Product[];
  naturalBentoImages: {
    tallLeft: string;
    topCenterLeft: string;
    topCenterRight: string;
    topRight: string;
    bottomWideRight: string;
  };
  newsletterBgImage: string;
  instagramPhotos: string[];
}

export const b2bProduct9DefaultData: B2BProduct9TemplateData = {
  business: {
    name: "CleverFood",
    logo: "",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["demonhunterg@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 06:30 - 21:00",
    rating: 4.9,
    reviewCount: 380,
    experienceYears: "10+",
    aboutTitle: "Chuỗi Cung Ứng Thực Phẩm Sạch & Rau Quả Hữu Cơ 100% Tự Nhiên",
    aboutText: [
      "CleverFood chuyên cung cấp trái cây tươi, rau củ hữu cơ và nước ép tự nhiên đạt chuẩn VietGAP & GlobalGAP cho hệ thống cửa hàng thực phẩm sạch, nhà hàng, khách sạn và gia đình Việt."
    ]
  },
  hero: {
    eyebrow: "Nước Ép Trái Cây",
    title: "100% tự nhiên",
    subtitle: "Giảm giá khi đặt mua ngay hôm nay",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=85"
  },
  heroProductImage:
    "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85",
  promoBanners: [
    {
      id: "pb-1",
      eyebrow: "Sản phẩm hữu cơ",
      title: "Nước Ép Đóng Chai Tự Nhiên",
      subtitle: "Ưu đãi đến 40% toàn bộ dòng nước ép",
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pb-2",
      eyebrow: "Trái cây sạch",
      title: "Trái Cây Tươi Nông Trại",
      subtitle: "Thu hoạch trực tiếp từ vườn tự nhiên",
      image:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pb-3",
      eyebrow: "Nổi bật",
      title: "Rau Xanh Nông Trại Sạch",
      subtitle: "100% rau củ canh tác hữu cơ tự nhiên",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pb-4",
      eyebrow: "Khuyến mãi",
      title: "Giảm Thêm 20% Thực Phẩm",
      subtitle: "Áp dụng cho mọi đơn hàng cuối tuần",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
    }
  ],
  featuredProducts: [
    {
      id: "cf-1",
      name: "Táo xanh",
      price: "220,000 ₫",
      tab: "moi-nhat",
      unit: "Kg",
      origin: "Nông trại hữu cơ",
      image:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-2",
      name: "Nho xanh",
      price: "320,000 ₫",
      tab: "moi-nhat",
      unit: "Kg",
      origin: "Ninh Thuận VietGAP",
      image:
        "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-3",
      name: "Ớt",
      price: "450,000 ₫",
      tab: "giam-gia",
      unit: "Kg",
      origin: "Đà Lạt Organic",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-4",
      name: "Dưa leo",
      price: "50,000 ₫",
      tab: "ban-chay",
      unit: "Kg",
      origin: "Đà Lạt VietGAP",
      image:
        "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-5",
      name: "Xoài",
      price: "180,000 ₫",
      tab: "ban-chay",
      unit: "Kg",
      origin: "Cát Hòa Lộc",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-6",
      name: "Cà chua",
      price: "320,000 ₫",
      tab: "moi-nhat",
      unit: "Kg",
      origin: "Lâm Đồng Organic",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-7",
      name: "Đào",
      price: "330,000 ₫",
      tab: "giam-gia",
      unit: "Kg",
      origin: "Mộc Châu Sạch",
      image:
        "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cf-8",
      name: "Thơm (dứa)",
      price: "150,000 ₫",
      tab: "ban-chay",
      unit: "Trái",
      origin: "Tiền Giang",
      image:
        "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
    }
  ],
  weeklyDealBgImage:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
  weeklyDealCountdown: [
    { value: "5", label: "NGÀY" },
    { value: "2", label: "GIỜ" },
    { value: "13", label: "PHÚT" },
    { value: "22", label: "GIÂY" }
  ],
  weeklyDealProducts: [
    {
      id: "wd-1",
      name: "Dưa leo",
      price: "50,000 ₫",
      tab: "giam-gia",
      unit: "Kg",
      origin: "Đà Lạt Organic",
      image:
        "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "wd-2",
      name: "Ớt",
      price: "450,000 ₫",
      tab: "giam-gia",
      unit: "Kg",
      origin: "Đà Lạt Organic",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "wd-3",
      name: "Dừa sáp",
      price: "35,000 ₫",
      tab: "giam-gia",
      unit: "Trái",
      origin: "Trà Vinh",
      image:
        "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "wd-4",
      name: "Súp lơ",
      price: "350,000 ₫",
      tab: "giam-gia",
      unit: "Kg",
      origin: "Đà Lạt VietGAP",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
    }
  ],
  naturalBentoImages: {
    tallLeft:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
    topCenterLeft:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    topCenterRight:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    topRight:
      "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?auto=format&fit=crop&w=600&q=80",
    bottomWideRight:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80"
  },
  clients: [
    { id: "cl-1", name: "NATURE PRODUCT" },
    { id: "cl-2", name: "ORGANIC PRODUCT" },
    { id: "cl-3", name: "ORGANIC FOOD" },
    { id: "cl-4", name: "Organics" },
    { id: "cl-5", name: "NATURE PRODUCT" },
    { id: "cl-6", name: "ORGANIC PRODUCT" }
  ],
  newsletterBgImage:
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=1920&q=80",
  instagramPhotos: [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80"
  ]
};

export default b2bProduct9DefaultData;
