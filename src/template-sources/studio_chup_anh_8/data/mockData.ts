import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DazzleJewelryItem {
  id: string;
  name: string;
  brand: string;
  oldPrice?: string;
  price: string;
  isSale?: boolean;
  isPopular?: boolean;
  hasTimer?: boolean;
  rating?: number;
  image: string;
}

export interface StudioChupAnh8Data extends ClonedTemplateBaseData {
  threePromoBanners: Array<{
    id: string;
    eyebrow: string;
    title: string;
    ctaText: string;
    image: string;
  }>;
  handcraftedStory: {
    title: string;
    blocks: Array<{
      heading: string;
      text: string;
    }>;
    image: string;
  };
  limitedSaleProducts: DazzleJewelryItem[];
  categoryColumns: Array<{
    id: string;
    title: string;
    image: string;
    subItems: string[];
  }>;
  featuredJewelry: DazzleJewelryItem[];
  worldBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  diamondRingCuts: Array<{
    id: string;
    name: string;
    image: string;
  }>;
}

export const studioChupAnh8DefaultData: StudioChupAnh8Data = {
  business: {
    name: "MONA DAZZLE JEWELS",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "dazzle@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "09:00 - 21:00 (Tất cả các ngày trong tuần)",
    rating: 5.0,
    reviewCount: 640,
    aboutTitle: "Trang sức được làm thủ công và chuyên nghiệp",
    aboutText: [
      "Chúng tôi đặc biệt tôn trọng sự đa dạng và cá nhân hóa. Do đó, chúng tôi cung cấp cả những món trang sức đơn giản và tinh tế cho những ai yêu thích phong cách tối giản, đến những thiết kế phức tạp và lộng lẫy cho những ai muốn thu hút mọi ánh nhìn."
    ]
  },
  hero: {
    eyebrow: "01 / 03",
    title: "Bộ sưu tập trang sức kim cương",
    subtitle:
      "Sự kết hợp đương đại trên nền ngọc trai cổ điển và kim cương tinh tuyển cho mùa cưới rạng ngời.",
    ctaText: "TÌM HIỂU THÊM",
    ctaLink: "#giam-gia",
    backgroundImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85"
  },
  threePromoBanners: [
    {
      id: "tpb-1",
      eyebrow: "KỲ QUAN ĐÁ QUÝ",
      title: "Trang sức đá quý rừng xanh",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tpb-2",
      eyebrow: "BỘ SƯU TẬP 2024",
      title: "BỘ SƯU TẬP SALE 20%",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tpb-3",
      eyebrow: "ƯU ĐÃI 20%",
      title: "Nhẫn hoàn hảo của vẻ đẹp",
      ctaText: "MUA NGAY",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    }
  ],
  handcraftedStory: {
    title: "Trang sức được làm thủ công và chuyên nghiệp",
    blocks: [
      {
        heading: "GIÁ HỢP LÝ",
        text: "Chúng tôi đặc biệt tôn trọng sự đa dạng và cá nhân hóa. Do đó, chúng tôi cung cấp cả những món trang sức đơn giản và tinh tế cho những ai yêu thích phong cách tối giản, đến những thiết kế phức tạp và lộng lẫy cho những ai muốn thu hút mọi ánh nhìn."
      },
      {
        heading: "CHẤT LƯỢNG CAO",
        text: "Chúng tôi đặc biệt tôn trọng sự đa dạng và cá nhân hóa. Do đó, chúng tôi cung cấp cả những món trang sức đơn giản và tinh tế cho những ai yêu thích phong cách tối giản, đến những thiết kế phức tạp và lộng lẫy cho những ai muốn thu hút mọi ánh nhìn."
      }
    ],
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
  },
  limitedSaleProducts: [
    {
      id: "ls-1",
      name: "Vòng Tay Kim Cương & Đá Onyx Đen",
      brand: "Tiffany & Co.",
      oldPrice: "3,750,000₫",
      price: "2,600,000₫",
      isSale: true,
      hasTimer: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-2",
      name: "Mặt Dây Chuyền Ngọc Đen Velvet Box",
      brand: "Schlumberger®",
      oldPrice: "4,600,000₫",
      price: "4,500,000₫",
      isSale: true,
      hasTimer: true,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-3",
      name: "Nhẫn Vương Miện Galleria of Gems",
      brand: "Atlas®",
      oldPrice: "3,400,000₫",
      price: "3,200,000₫",
      isSale: true,
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-4",
      name: "Hoa Tai Ngôi Sao Sapphire Xanh",
      brand: "Schlumberger®",
      oldPrice: "2,600,000₫",
      price: "2,000,000₫",
      isSale: true,
      hasTimer: true,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-5",
      name: "Lắc Tay Vàng Hồng 18K Serpenti",
      brand: "Atlas®",
      oldPrice: "2,600,000₫",
      price: "2,200,000₫",
      isSale: true,
      isPopular: true,
      hasTimer: true,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-6",
      name: "Nhẫn Đôi Hoàng Gia Đính Đá Quý",
      brand: "Schlumberger®",
      oldPrice: "3,000,000₫",
      price: "2,600,000₫",
      isSale: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-7",
      name: "Dây Chuyền Mặt Báo Đen Infinity",
      brand: "Tiffany & Co.",
      oldPrice: "3,600,000₫",
      price: "3,200,000₫",
      isSale: true,
      hasTimer: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ls-8",
      name: "Dây Chuyền Nơ Hồng Ngọc Nesting",
      brand: "Elsa Peretti®",
      oldPrice: "3,900,000₫",
      price: "3,000,000₫",
      isSale: true,
      isPopular: true,
      hasTimer: true,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  categoryColumns: [
    {
      id: "cc-1",
      title: "Nhẫn Cưới",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
      subItems: [
        "Nhẫn cầu hôn",
        "Nhẫn cặp lễ cưới",
        "Nhẫn kim cương",
        "Nhẫn đá màu",
        "Nhẫn ngọc trai",
        "Nhẫn trơn tối giản",
        "Nhẫn Unisex"
      ]
    },
    {
      id: "cc-2",
      title: "Bông Tai",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
      subItems: [
        "Bông tai nụ",
        "Khuyên tròn nhỏ",
        "Khuyên tròn bản lớn",
        "Kẹp vành tai",
        "Bông tai dáng dài",
        "Bông tai kim cương",
        "Bông tai đá quý"
      ]
    },
    {
      id: "cc-3",
      title: "Vòng Tay",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80",
      subItems: [
        "Vòng kiềng cứng",
        "Lắc tay mềm",
        "Vòng kim cương",
        "Vòng đá quý",
        "Vòng trơn 18K",
        "Vòng Unisex"
      ]
    },
    {
      id: "cc-4",
      title: "Dây Chuyền",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
      subItems: [
        "Dây mảnh 18K",
        "Dây ngắn Choker",
        "Dây dáng dài",
        "Mặt huy chương",
        "Dây kim cương",
        "Dây đá màu"
      ]
    },
    {
      id: "cc-5",
      title: "Mặt Dây & Charm",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
      subItems: ["Mặt dây chuyền", "Hạt Charm vàng"]
    },
    {
      id: "cc-6",
      title: "Phụ Kiện",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
      subItems: ["Hộp đựng trang sức", "Túi nhung du lịch"]
    }
  ],
  featuredJewelry: [
    {
      id: "fj-1",
      name: "Dây Chuyền Nơ Hồng Ngọc Nesting",
      brand: "Elsa Peretti®",
      oldPrice: "3,900,000₫",
      price: "3,000,000₫",
      isSale: true,
      isPopular: true,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-2",
      name: "Khuyên Tai La Bàn Vàng 18K",
      brand: "Atlas®",
      price: "3,600,000₫",
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-3",
      name: "Nhẫn Kim Cương Hồng Divas Dream",
      brand: "Paloma Picasso®",
      oldPrice: "4,600,000₫",
      price: "4,000,000₫",
      isSale: true,
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-4",
      name: "Vòng Tay Rắn Đính Đá Crystal",
      brand: "Elsa Peretti®",
      price: "2,600,000₫",
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-5",
      name: "Lắc Tay Vàng Hồng 18K Serpenti",
      brand: "Atlas®",
      oldPrice: "2,600,000₫",
      price: "2,200,000₫",
      isSale: true,
      isPopular: true,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-6",
      name: "Vòng Tay Nam Khóa Vàng Trắng",
      brand: "Paloma Picasso®",
      price: "2,600,000₫",
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-7",
      name: "Nhẫn Vương Miện Galleria of Gems",
      brand: "Atlas®",
      oldPrice: "3,400,000₫",
      price: "3,200,000₫",
      isSale: true,
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fj-8",
      name: "Nhẫn Hồng Ngọc Ruby Stone Appeal",
      brand: "Elsa Peretti®",
      price: "3,500,000₫",
      isPopular: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    }
  ],
  worldBanner: {
    title: "Thế giới trang sức đa dạng",
    subtitle:
      "Đảm bảo trang sức đều được tạo ra với sự tỉ mỉ và chất lượng cao nhất.",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=85"
  },
  diamondRingCuts: [
    {
      id: "drc-1",
      name: "Giác cắt Princess",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "drc-2",
      name: "Giác cắt Halo Round",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "drc-3",
      name: "Giác cắt Giọt Nước",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "drc-4",
      name: "Giác cắt Marquise",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "drc-5",
      name: "Giác cắt Radiant",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "drc-6",
      name: "Giác cắt Emerald",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

export const defaultData = studioChupAnh8DefaultData;
export const mockData = studioChupAnh8DefaultData;
export default studioChupAnh8DefaultData;
