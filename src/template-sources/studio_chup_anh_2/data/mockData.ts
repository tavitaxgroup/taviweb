import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface StudioChupAnh2Silhouette {
  id: string;
  code: "mermaid" | "straight" | "sheath" | "princess" | "mini";
  nameEn: string;
  nameVi: string;
  tagline: string;
  description: string;
  recommendedFor: string;
  sampleGowns: Array<{
    id: string;
    name: string;
    collection: string;
    price: string;
    image: string;
  }>;
}

export interface StudioChupAnh2Banner {
  id: string;
  labelEn: string;
  titleVi: string;
  description: string;
  ctaText: string;
  image: string;
  tag: string;
}

export interface StudioChupAnh2ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface StudioChupAnh2Data extends ClonedTemplateBaseData {
  featuredBanners: StudioChupAnh2Banner[];
  silhouettes: StudioChupAnh2Silhouette[];
  atelierSection: {
    titleEn: string;
    titleVi: string;
    description: string;
    topStripImage: string;
    craftImage: string;
    steps: StudioChupAnh2ProcessStep[];
  };
  onlineStorePromo: {
    brandTitle: string;
    brandSub: string;
    tagline: string;
    description: string;
    ctaText: string;
    image: string;
  };
}

export const studioChupAnh2DefaultData: StudioChupAnh2Data = {
  business: {
    name: "Mona Dress Wedding",
    phone: ["0909 888 789", "1900 636 648"],
    email: ["couture@monadresswedding.vn", "booking@monadresswedding.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 09:00 - 21:00 (Đặt lịch hẹn riêng)",
    rating: 5.0,
    reviewCount: 420,
    experienceYears: "12+",
    aboutTitle: "Tuyệt Tác Váy Cưới Haute Couture & Nhiếp Ảnh Cưới Nghệ Thuật",
    aboutText: [
      "Mona Dress Wedding là thương hiệu váy cưới Haute Couture và studio nhiếp ảnh cưới cao cấp dành cho những cô dâu yêu chuộng vẻ đẹp thanh lịch, sang trọng vượt thời gian.",
      "Mỗi thiết kế tại Mona đều được chế tác thủ công từ chất liệu lụa Mikado Ý, ren Pháp Chantilly và pha lê Swarovski đính kết tỉ mỉ qua hàng trăm giờ làm việc của các nghệ nhân lành nghề."
    ],
    highlights: [
      "Thử váy riêng tư 1:1 tại VIP Bridal Lounge",
      "Chế tác & tinh chỉnh số đo độc bản theo vóc dáng cô dâu",
      "Ekip nhiếp ảnh Pre-Wedding & Phóng sự cưới Fine Art",
      "Hơn 300+ mẫu váy cưới Couture & Đầm dạ hội nhập khẩu"
    ]
  },
  hero: {
    eyebrow: "HAUTE COUTURE BRIDAL COLLECTION",
    title: "HONEY LEE",
    subtitle:
      "Giao thoa giữa nghệ thuật chế tác thủ công và vẻ đẹp kiêu sa: Bộ sưu tập Honey Lee tôn vinh khí chất thanh tao của nàng dâu hiện đại.",
    description:
      "Khám phá những thiết kế váy cưới đính kết ngọc trai và pha lê thủ công độc bản cùng gói chụp ảnh cưới Fine Art đẳng cấp quốc tế.",
    ctaText: "KHÁM PHÁ BỘ SƯU TẬP MỚI",
    ctaLink: "#bo-suu-tap",
    secondaryCtaText: "ĐẶT LỊCH THỬ VÁY VIP",
    secondaryCtaLink: "#dat-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  featuredBanners: [
    {
      id: "banner-wedding",
      labelEn: "WEDDING",
      titleVi: "VÁY CƯỚI COUTURE",
      description:
        "Đa dạng thiết kế váy cưới thời thượng tôn vinh đường nét thanh khiết của cô dâu hiện đại.",
      ctaText: "KHÁM PHÁ",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=85",
      tag: "BST Mùa Cưới 2026"
    },
    {
      id: "banner-evening",
      labelEn: "EVENING",
      titleVi: "ĐẦM DẠ HỘI THƯỢNG LƯU",
      description:
        "Những thiết kế đầm dạ hội đính kết lấp lánh giúp nàng trở thành tâm điểm trong mọi đêm tiệc.",
      ctaText: "XEM CHI TIẾT",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1400&q=85",
      tag: "Evening & After-Party"
    }
  ],
  silhouettes: [
    {
      id: "sil-mermaid",
      code: "mermaid",
      nameEn: "MERMAID",
      nameVi: "Dáng Đuôi Cá Quyến Rũ",
      tagline: "Tôn vinh đường cong đồng hồ cát đầy mê hoặc",
      description:
        "Thiết kế ôm sát từ phần ngực qua hông và xòe rộng mềm mại từ đầu gối, mang lại vẻ đẹp kiêu kỳ, sang trọng cho cô dâu trong lễ đường.",
      recommendedFor: "Dáng đồng hồ cát, dáng quả lê cân đối",
      sampleGowns: [
        {
          id: "m-1",
          name: "Celeste Pearl Mermaid",
          collection: "Honey Lee Couture",
          price: "28.000.000đ",
          image:
            "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "m-2",
          name: "Aurelia Lace Sirene",
          collection: "Royal Whisper",
          price: "32.000.000đ",
          image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "m-3",
          name: "Vivienne Crystal Gown",
          collection: "Honey Lee Couture",
          price: "35.000.000đ",
          image:
            "https://images.unsplash.com/photo-1546193430-c2d207739ed7?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      id: "sil-straight",
      code: "straight",
      nameEn: "STRAIGHT",
      nameVi: "Dáng Suông Cổ Điển",
      tagline: "Thanh lịch, phóng khoáng và tinh giản chuẩn châu Âu",
      description:
        "Phom váy rủ thẳng tự nhiên theo cơ thể bằng chất liệu lụa Satin cao cấp, mang đến sự thoải mái tuyệt đối mà vẫn giữ trọn nét quý phái.",
      recommendedFor: "Mọi vóc dáng, đặc biệt cô dâu yêu phong cách Minimalist",
      sampleGowns: [
        {
          id: "s-1",
          name: "Margaux Silk Column",
          collection: "Minimalist Muse",
          price: "22.000.000đ",
          image:
            "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "s-2",
          name: "Élodie Draped Satin",
          collection: "Parisian Grace",
          price: "24.500.000đ",
          image:
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "s-3",
          name: "Camille Off-Shoulder",
          collection: "Minimalist Muse",
          price: "26.000.000đ",
          image:
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      id: "sil-sheath",
      code: "sheath",
      nameEn: "SHEATH",
      nameVi: "Dáng Ôm Tinh Tế",
      tagline: "Nhẹ nhàng ôm lấy từng chuyển động thanh thoát",
      description:
        "Sự kết hợp hoàn hảo giữa phom suông và đường chiết eo tinh tế, rất lý tưởng cho tiệc cưới ngoài trời, bãi biển hoặc chụp Pre-Wedding.",
      recommendedFor: "Cô dâu mảnh mai, tiệc cưới sân vườn & biển",
      sampleGowns: [
        {
          id: "sh-1",
          name: "Seraphina Chiffon Sheath",
          collection: "Ocean Breeze",
          price: "21.000.000đ",
          image:
            "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "sh-2",
          name: "Ophelia Beaded Tulles",
          collection: "Honey Lee Couture",
          price: "29.000.000đ",
          image:
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "sh-3",
          name: "Claire Illusion Back",
          collection: "Parisian Grace",
          price: "25.000.000đ",
          image:
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      id: "sil-princess",
      code: "princess",
      nameEn: "PRINCESS",
      nameVi: "Dáng Công Chúa Bồng Xòe",
      tagline: "Lộng lẫy như bước ra từ cổ tích hoàng gia",
      description:
        "Phần corset định hình vòng eo thon gọn kết hợp cùng chân váy tùng xòe nhiều lớp voan tơ và pha lê lấp lánh dưới ánh đèn sảnh tiệc.",
      recommendedFor: "Sảnh tiệc Grand Ballroom, che khuyết điểm vòng hông",
      sampleGowns: [
        {
          id: "p-1",
          name: "Empress Victoria Ballgown",
          collection: "Royal Whisper",
          price: "42.000.000đ",
          image:
            "https://images.unsplash.com/photo-1546193430-c2d207739ed7?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "p-2",
          name: "Rosalie Organza Cloud",
          collection: "Honey Lee Couture",
          price: "38.000.000đ",
          image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "p-3",
          name: "Anastasia Swarovski Crown",
          collection: "Royal Whisper",
          price: "48.000.000đ",
          image:
            "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80"
        }
      ]
    },
    {
      id: "sil-mini",
      code: "mini",
      nameEn: "MINI",
      nameVi: "Váy Cưới Ngắn After-Party",
      tagline: "Trẻ trung, cá tính cho khoảnh khắc khiêu vũ tưng bừng",
      description:
        "Thiết kế váy cưới ngắn trên gối đính lông vũ hoặc nơ bản lớn, giúp cô dâu tự do tỏa sáng trong tiệc tối After-Party và bộ ảnh Street Style.",
      recommendedFor: "Tiệc After-Party, chụp ảnh Pre-Wedding phóng khoáng",
      sampleGowns: [
        {
          id: "mi-1",
          name: "Juliette Bow Mini Dress",
          collection: "After-Party Chic",
          price: "14.500.000đ",
          image:
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "mi-2",
          name: "Coco Feather Couture Mini",
          collection: "After-Party Chic",
          price: "16.800.000đ",
          image:
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
        },
        {
          id: "mi-3",
          name: "Bella Pearl Corset Mini",
          collection: "Honey Lee Couture",
          price: "18.000.000đ",
          image:
            "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80"
        }
      ]
    }
  ],
  atelierSection: {
    titleEn: "CREATING PROCESS",
    titleVi: "QUY TRÌNH CHẾ TÁC THỦ CÔNG",
    description:
      "Mỗi thiết kế váy cưới đều được chế tác thủ công bằng cả trái tim trong từng chi tiết nhỏ nhất, từ đường kim mũi chỉ đầu tiên cho đến khâu đóng gói hoàn thiện.",
    topStripImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
    craftImage:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1800&q=85",
    steps: [
      {
        id: "st-1",
        stepNumber: "01",
        title: "Phác Thảo Độc Bản & Chọn Chất Liệu",
        description:
          "Nhà thiết kế lắng nghe câu chuyện tình yêu của cô dâu, phác thảo phom dáng và tuyển chọn lụa Ý, ren Pháp phù hợp nhất."
      },
      {
        id: "st-2",
        stepNumber: "02",
        title: "Dựng Phom Corset 3D Chuẩn Số Đo",
        description:
          "Kỹ thuật dựng gọng corset ẩn giúp thu gọn vòng eo từ 4-6cm mà vẫn êm ái, nhẹ nhàng suốt 8 tiếng cử hành hôn lễ."
      },
      {
        id: "st-3",
        stepNumber: "03",
        title: "Đính Kết Pha Lê & Ngọc Trai Thủ Công",
        description:
          "Hơn 200 giờ đính kết thủ công tỉ mỉ từng viên pha lê Swarovski và cườm Nhật để tạo hiệu ứng bắt sáng 360 độ."
      },
      {
        id: "st-4",
        stepNumber: "04",
        title: "Fitting & Nhiếp Ảnh Pre-Wedding",
        description:
          "Buổi thử váy VIP riêng tư kết hợp cùng ekip stylist và nhiếp ảnh gia ghi lại trọn vẹn khoảnh khắc rạng ngời nhất."
      }
    ]
  },
  onlineStorePromo: {
    brandTitle: "MONA",
    brandSub: "DRESS WEDDING",
    tagline: "Sở hữu tuyệt tác váy cưới & đầm dạ hội thiết kế trực tuyến",
    description:
      "Đặt lịch thử váy riêng tư tại Showroom hoặc đặt may đo trực tuyến cùng chuyên gia tư vấn hình ảnh cưới hàng đầu của chúng tôi.",
    ctaText: "CỬA HÀNG TRỰC TUYẾN",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=85"
  },
  services: [
    {
      id: "srv-1",
      title: "Thuê & May Đo Váy Cưới Haute Couture",
      category: "Bridal Couture",
      description:
        "Trải nghiệm bộ sưu tập váy cưới thiết kế độc bản, tinh chỉnh số đo chuẩn xác theo vóc dáng riêng của từng cô dâu.",
      price: "Từ 18.000.000đ",
      image:
        "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "srv-2",
      title: "Gói Chụp Ảnh Pre-Wedding Editorial",
      category: "Fine Art Studio",
      description:
        "Concept chụp ảnh cưới phong cách tạp chí thời trang cao cấp tại studio ánh sáng tự nhiên hoặc ngoại cảnh Đà Lạt, Phú Quốc.",
      price: "Từ 25.000.000đ",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "srv-3",
      title: "Đầm Dạ Hội & Phụ Kiện Cưới Thủ Công",
      category: "Evening & Veil",
      description:
        "Thiết kế đầm dạ hội đi bàn, váy ngắn After-Party cùng lúp cưới thêu tay và vương miện pha lê đồng bộ.",
      price: "Từ 9.500.000đ",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
    }
  ],
  projects: [
    {
      id: "look-1",
      title: "La Vie En Rose — Bộ Sưu Tập Thu Đông",
      category: "Váy Cưới Couture",
      location: "Showroom TP.HCM",
      price: "32.000.000đ",
      description: "Váy cưới trễ vai đính ngọc trai thủ công kết hợp lúp dài 3m.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "look-2",
      title: "Lumière De Paris — Pre-Wedding",
      category: "Nhiếp Ảnh Cưới",
      location: "Studio & Ngoại Cảnh",
      price: "29.000.000đ",
      description: "Bộ ảnh cưới phong cách cổ điển châu Âu với 3 thiết kế váy Luxury.",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "look-3",
      title: "Starlight Serenade — Đầm Dạ Hội",
      category: "Đầm Dạ Hội",
      location: "Showroom TP.HCM",
      price: "19.500.000đ",
      description: "Đầm dạ hội cổ cao đính sequin vàng hồng quyến rũ.",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "look-4",
      title: "Pure Swan — Váy Cưới Tối Giản",
      category: "Váy Cưới Couture",
      location: "Showroom Hà Nội",
      price: "24.000.000đ",
      description: "Thiết kế lụa Mikado phom dáng đuôi cá thanh lịch.",
      image:
        "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=900&q=80"
    }
  ]
};
