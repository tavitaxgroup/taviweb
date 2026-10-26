import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaHang3Data extends ClonedTemplateBaseData {
  aboutSection: {
    eyebrow: string;
    title: string;
    description: string;
    weekdayHours: string;
    saturdayHours: string;
    ctaLabel: string;
    lanternImage: string;
    sushiBoardImage: string;
  };
  menuItems: Array<{
    id: string;
    name: string;
    vietnameseSub: string;
    price: string;
    category: "nigiri" | "roll" | "yakitori";
    column: "left" | "right";
  }>;
  masonryShowcase: {
    mainChefImage: string;
    topMiddleImage: string;
    topRightImage: string;
    bottomMiddleImage: string;
    bottomRightImage: string;
  };
  asianDiningSection: {
    eyebrow: string;
    title: string;
    description: string;
    backImage: string;
    frontImage: string;
    highlights: Array<{
      id: string;
      title: string;
      description: string;
      icon: "menu" | "cocktail";
    }>;
  };
}

export const nhaHang3DefaultData: NhaHang3Data = {
  business: {
    name: "Mona Sushi",
    phone: ["1900 636 648", "0909 888 648"],
    email: ["info@themona.global", "datban@monasushi.vn"],
    address:
      "Công ty TNHH – MONA MEDIA, 1073/23 Đ. Cách Mạng Tháng 8, P.7, Tân Bình, Thành phố Hồ Chí Minh",
    workingHours: "Thứ Hai–Thứ Sáu: 9 AM – 22 PM | Thứ Bảy: 9 AM – 20 PM",
    rating: 4.9,
    reviewCount: 2450,
    experienceYears: "10+ Năm",
    aboutTitle: "Chúng tôi yêu thích ẩm thực cổ điển Nhật Bản",
    aboutText: [
      "Nếu bạn là một người yêu thích ẩm thực, chắc chắn bạn sẽ không thể bỏ qua ẩm thực cổ điển Nhật Bản. Hãy một lần thưởng thức những món ăn này để cảm nhận được sự tinh tế, thanh tao và trọn vẹn của nền ẩm thực này."
    ],
    highlights: [
      "Hải sản tươi sống nhập khẩu đường hàng không từ chợ cá Toyosu",
      "Bếp trưởng Itamae hơn 15 năm kinh nghiệm chế biến Omakase",
      "Không gian phòng VIP Tatami riêng tư chuẩn Kyoto",
      "Quầy Sake thượng hạng & Cocktail thủ công Nhật Bản"
    ]
  },
  hero: {
    eyebrow: "Tinh Hoa Ẩm Thực Nhật Bản",
    title: "Nhà hàng\nSushi",
    subtitle:
      "Nghệ thuật nắm sushi thủ công kết hợp nguyên liệu hải sản theo mùa tươi ngon bậc nhất từ vùng biển Hokkaido.",
    ctaText: "Về chúng tôi",
    ctaLink: "#gioi-thieu",
    secondaryCtaText: "Đặt bàn Omakase",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  aboutSection: {
    eyebrow: "NHÀ HÀNG CỦA CHÚNG TÔI",
    title: "Chúng tôi yêu thích ẩm thực cổ điển Nhật Bản",
    description:
      "Nếu bạn là một người yêu thích ẩm thực, chắc chắn bạn sẽ không thể bỏ qua ẩm thực cổ điển Nhật Bản. Hãy một lần thưởng thức những món ăn này để cảm nhận được sự tinh tế, thanh tao và trọn vẹn của nền ẩm thực này.",
    weekdayHours: "THỨ HAI–THỨ SÁU: 9 AM – 22 PM",
    saturdayHours: "THỨ BẢY: 9 AM – 20 PM",
    ctaLabel: "Giới thiệu",
    lanternImage:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=85",
    sushiBoardImage:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=85"
  },
  menuItems: [
    {
      id: "ms-1",
      name: "Spicy Dragon Roll",
      vietnameseSub: "Cuộn lươn Nhật nướng sốt Kabayaki, bơ tươi và trứng cá chuồn cay nồng",
      price: "899.000đ",
      category: "roll",
      column: "left"
    },
    {
      id: "ms-2",
      name: "Sashimi Salad",
      vietnameseSub: "Cá hồi Na Uy, cá ngừ đại dương dùng kèm rau mầm hữu cơ sốt mè Yuzu",
      price: "789.000đ",
      category: "nigiri",
      column: "left"
    },
    {
      id: "ms-3",
      name: "King Fish Nigiri",
      vietnameseSub: "Cơm giấm đỏ Akazu nắm tay cùng cá cam Nhật Bản Hamachi béo ngậy",
      price: "699.000đ",
      category: "nigiri",
      column: "left"
    },
    {
      id: "ms-4",
      name: "Tempura Hand Rolls",
      vietnameseSub: "Tôm sú chiên giòn Tempura cuộn phễu rong biển Nori nướng giòn rụm",
      price: "899.000đ",
      category: "roll",
      column: "right"
    },
    {
      id: "ms-5",
      name: "Kansai Special Roll",
      vietnameseSub: "Cuộn đặc biệt vùng Kansai với cua tuyết Hokkaido và cá hồi áp chảo",
      price: "599.000đ",
      category: "roll",
      column: "right"
    },
    {
      id: "ms-6",
      name: "Yakitori Chicken",
      vietnameseSub: "Thịt đùi gà hữu cơ xiên nướng than hoa Binchotan phết sốt Tare cổ truyền",
      price: "999.000đ",
      category: "yakitori",
      column: "right"
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Spicy Dragon Roll",
      category: "Maki & Roll",
      description: "Cuộn lươn Nhật nướng sốt Kabayaki, bơ tươi và trứng cá chuồn cay nồng",
      price: "899.000đ"
    },
    {
      id: "srv-2",
      title: "Sashimi Salad",
      category: "Sashimi",
      description: "Cá hồi Na Uy, cá ngừ đại dương dùng kèm rau mầm hữu cơ sốt mè Yuzu",
      price: "789.000đ"
    },
    {
      id: "srv-3",
      title: "King Fish Nigiri",
      category: "Nigiri",
      description: "Cơm giấm đỏ Akazu nắm tay cùng cá cam Nhật Bản Hamachi béo ngậy",
      price: "699.000đ"
    },
    {
      id: "srv-4",
      title: "Tempura Hand Rolls",
      category: "Temaki",
      description: "Tôm sú chiên giòn Tempura cuộn phễu rong biển Nori nướng giòn rụm",
      price: "899.000đ"
    },
    {
      id: "srv-5",
      title: "Kansai Special Roll",
      category: "Maki & Roll",
      description: "Cuộn đặc biệt vùng Kansai với cua tuyết Hokkaido và cá hồi áp chảo",
      price: "599.000đ"
    },
    {
      id: "srv-6",
      title: "Yakitori Chicken",
      category: "Robatayaki",
      description: "Thịt đùi gà hữu cơ xiên nướng than hoa Binchotan phết sốt Tare cổ truyền",
      price: "999.000đ"
    }
  ],
  masonryShowcase: {
    mainChefImage:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=85",
    topMiddleImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
    topRightImage:
      "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=700&q=80",
    bottomMiddleImage:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=700&q=80",
    bottomRightImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80"
  },
  asianDiningSection: {
    eyebrow: "TƯƠI & NGON",
    title: "Thưởng thức ẩm thực châu Á đích thực",
    description:
      "Ẩm thực châu Á là một trong những nền ẩm thực đa dạng và phong phú nhất thế giới. Nó được hình thành bởi sự giao thoa của nhiều nền văn hóa khác nhau, từ Trung Quốc, Nhật Bản, Hàn Quốc, Thái Lan đến Ấn Độ, Indonesia,... Mỗi quốc gia, vùng miền lại có những nét đặc trưng riêng trong ẩm thực, tạo nên một bức tranh ẩm thực châu Á vô cùng sinh động và hấp dẫn.",
    backImage:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=700&q=80",
    frontImage:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=85",
    highlights: [
      {
        id: "ad-1",
        title: "Thực đơn đa dạng",
        description:
          "Tuyển chọn hơn 80 món Sashimi, Nigiri, Maki và set Omakase biến tấu theo mùa.",
        icon: "menu"
      },
      {
        id: "ad-2",
        title: "Cocktail Bar",
        description:
          "Bộ sưu tập rượu Sake Junmai Daiginjo và cocktail Yuzu pha chế thủ công.",
        icon: "cocktail"
      }
    ]
  }
};
