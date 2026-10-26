import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto3HighlightCard {
  id: string;
  title: string;
  image: string;
}

export interface GarageOto3PriceCard {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  image: string;
  priceRange?: string;
}

export interface GarageOto3Data extends ClonedTemplateBaseData {
  highlightCards: GarageOto3HighlightCard[];
  aboutBanner: {
    sectionSubtitle: string;
    cardTitle: string;
    leadText: string;
    subText: string;
    backgroundImage: string;
    lineupBannerImage: string;
  };
  priceTableCards: GarageOto3PriceCard[];
  whyChooseBannerImage: string;
}

export const garageOto3DefaultData: GarageOto3Data = {
  business: {
    name: "Gia Khang Auto",
    phone: ["0313728397", "0909 728 397"],
    email: ["cskh@giakhangauto.vn", "thumuaxe@giakhangauto.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 20:00",
    rating: 4.9,
    reviewCount: 1500,
    aboutTitle: "VỀ GIA KHANG AUTO",
    aboutText: [
      "Gia Khang Auto là địa chỉ mua bán, trao đổi và bảo dưỡng xe ô tô cũ uy tín, chính hãng, giá tốt toàn quốc.",
      "Thủ tục nhanh chóng, bảo hành dài hạn, hỗ trợ ký gửi, nhiều mẫu mã đa dạng từ các dòng Sedan 4 chỗ, Hatchback, CUV đến SUV 7 chỗ đời mới."
    ],
    highlights: [
      "Mua bán ô tô cũ đảm bảo pháp lý rõ ràng",
      "Xe được thẩm định kỹ 160 hạng mục, không đâm đụng, ngập nước",
      "Thủ tục sang tên và giải ngân nhanh chóng trong 30 phút"
    ]
  },
  hero: {
    eyebrow: "SHOWROOM & TRUNG TÂM BẢO DƯỠNG Ô TÔ UY TÍN",
    subtitle: "Định giá minh bạch – Thu mua tận nơi – Giải ngân liền tay",
    title: "Gia Khang Auto – Dịch Vụ Thu Mua Ô Tô Cũ Giá Cao",
    description:
      "Chuyên thu mua, trao đổi và ký gửi các dòng xe ô tô đã qua sử dụng từ 4 đến 16 chỗ với mức giá cao hơn thị trường từ 15 - 30 triệu đồng, kiểm định tận nơi miễn phí.",
    ctaText: "XEM THÊM",
    ctaLink: "#about",
    secondaryCtaText: "BẢNG GIÁ THU MUA",
    secondaryCtaLink: "#pricing",
    backgroundImage:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=85"
  },
  highlightCards: [
    {
      id: "hl-1",
      title: "MUA BÁN Ô TÔ CŨ ĐẢM BẢO PHÁP LÝ RÕ RÀNG",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hl-2",
      title: "XE ĐƯỢC THẨM ĐỊNH KỸ, KHÔNG ĐÂM ĐỤNG, NGẬP NƯỚC",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hl-3",
      title: "THỦ TỤC MUA BÁN XE NHANH CHÓNG",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80"
    }
  ],
  aboutBanner: {
    sectionSubtitle:
      "Gia Khang Auto đã giúp nhiều chủ xe thanh lý ô tô cũ của mình được giá cao hơn các đơn vị khác.",
    cardTitle: "Gia Khang Auto – Thu Mua Ô Tô Cũ Giá Cao",
    leadText:
      "là địa chỉ mua bán xe ô tô cũ uy tín, chính hãng, giá tốt toàn quốc.",
    subText:
      "Thủ tục nhanh chóng, bảo hành dài, hỗ trợ kí gửi, nhiều mẫu mã đa dạng, nhiều loại xe từ mới tới cũ.",
    backgroundImage:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=85",
    lineupBannerImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85"
  },
  priceTableCards: [
    {
      id: "price-1",
      day: "24",
      month: "Th5",
      title: "Bảng giá xe Hyundai cũ",
      excerpt:
        "Bảng giá xe Hyundai cũ cập nhật mới nhất các dòng Grand i10, Accent, Elantra, Tucson và SantaFe chính chủ...",
      priceRange: "320 - 980 Triệu",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "price-2",
      day: "24",
      month: "Th5",
      title: "Bảng giá bán xe Hàn Quốc cũ",
      excerpt:
        "Bảng giá bán xe Hàn Quốc cũ trong 10 năm trở lại đây gồm Kia Morning, K3, Seltos, Sorento và Carnival lướt...",
      priceRange: "285 - 1.150 Triệu",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "price-3",
      day: "24",
      month: "Th5",
      title: "Bảng giá xe Honda cũ",
      excerpt:
        "Hiện xe ô tô Honda là một trong những hãng xe lớn nhất của Nhật Bản với City, Civic, HR-V và CR-V bền bỉ...",
      priceRange: "390 - 1.050 Triệu",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
    }
  ],
  stats: [
    {
      id: "st-1",
      number: "1,500",
      title: "Không ép giá khách hàng"
    },
    {
      id: "st-2",
      number: "50",
      title: "Đến tận nơi thu mua"
    },
    {
      id: "st-3",
      number: "1,000",
      title: "Thủ tục nhanh chóng"
    },
    {
      id: "st-4",
      number: "100",
      title: "Giao dịch minh bạch"
    }
  ],
  whyChooseBannerImage:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85",
  news: [
    {
      id: "news-1",
      title: "Chuyên Mua Xe 4 Chỗ Cũ",
      date: "23 Th5",
      category: "Thu Mua Ô Tô",
      excerpt:
        "Quý Khách Cần Bán Xe Ô Tô Cũ Phải Không ? Và đang tìm nơi thu mua xe 4 chỗ giá cao, thanh toán 1 lần tận nhà...",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Bảng giá xe Hyundai cũ",
      date: "24 Th5",
      category: "Kinh Nghiệm Định Giá",
      excerpt:
        "Bảng giá xe Hyundai cũ đến năm 2026, tổng hợp kinh nghiệm kiểm tra khung gầm, hộp số và lịch sử bảo dưỡng hãng...",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "Bảng giá bán xe Hàn Quốc cũ",
      date: "24 Th5",
      category: "Thị Trường Xe Lướt",
      excerpt:
        "Bảng giá bán xe Hàn Quốc cũ trong 10 năm trở lại đây: Vì sao các dòng xe Hàn ngày càng giữ giá và giàu công nghệ...",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
