import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SpeakerHubCategoryItem {
  id: string;
  name: string;
  image: string;
}

export interface SpeakerHubAudioProduct {
  id: string;
  title: string;
  discountBadge: string;
  pricePrefix: string;
  oldPrice?: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
  section: "promo" | "karaoke" | "bluetooth" | "accessory";
  specs: string[];
}

export interface B2bProduct17Data extends ClonedTemplateBaseData {
  topAnnouncement: string;
  marqueeItems: string[];
  audioCategories: SpeakerHubCategoryItem[];
  promoProducts: SpeakerHubAudioProduct[];
  orangeCountdownBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    countdown: {
      days: string;
      hours: string;
      mins: string;
      secs: string;
    };
    ctaText: string;
    image: string;
  };
  karaokeProducts: SpeakerHubAudioProduct[];
  bluetoothProducts: SpeakerHubAudioProduct[];
  slateAccessoryBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
  };
  accessoryProducts: SpeakerHubAudioProduct[];
  audioBrands: string[];
  trustFeatures: Array<{
    id: string;
    title: string;
    subtitle: string;
    iconType: "box" | "card" | "return" | "headset";
  }>;
}

const sharedProductsPool: SpeakerHubAudioProduct[] = [
  {
    id: "sp-1",
    title: "Dàn Karaoke Hội Trường Sân Khấu DT TT291 Công Suất Lớn",
    discountBadge: "-26%",
    pricePrefix: "Chỉ từ:",
    oldPrice: "119.000 ₫",
    price: "89.000 ₫",
    rating: 5,
    reviewCount: 12,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Cấu hình Full Array chuyên dụng cho hội trường & sự kiện",
      "Tích hợp vang số chống hú tự động DSP thế hệ mới",
      "Bảo hành chính hãng 24 tháng tận nơi",
    ],
  },
  {
    id: "sp-2",
    title: "Dàn nghe nhạc Hi-Fi 603 S2 + Amply PMA 1600NE Cao Cấp",
    discountBadge: "-11%",
    pricePrefix: "Chỉ từ:",
    price: "340.000 ₫",
    rating: 5,
    reviewCount: 8,
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Âm thanh chuẩn Audiophile chi tiết 3 dải tần",
      "Kết nối Optical, Coaxial, USB-DAC độ phân giải cao",
      "Thùng loa gỗ sồi chống cộng hưởng âm học",
    ],
  },
  {
    id: "sp-3",
    title: "Dây cáp âm thanh AV 3.5mm ra 2 đầu bông sen mạ vàng",
    discountBadge: "-29%",
    pricePrefix: "Chỉ từ:",
    oldPrice: "345.000 ₫",
    price: "245.000 ₫",
    rating: 5,
    reviewCount: 19,
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Lõi đồng nguyên chất OFC 99.99% chống nhiễu",
      "Đầu giắc mạ vàng 24K truyền dẫn tín hiệu ổn định",
      "Vỏ bọc lưới chống gãy gập cao cấp",
    ],
  },
  {
    id: "sp-4",
    title: "Loa Bluetooth Di Động JBL Flip 6 Chống Nước IP67",
    discountBadge: "-14%",
    pricePrefix: "Chỉ từ:",
    price: "259.000 ₫",
    rating: 5,
    reviewCount: 24,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Hệ thống loa 2 đường tiếng JBL Original Pro Sound",
      "Thời lượng pin lên đến 12 giờ phát nhạc liên tục",
      "Chuẩn kháng nước và bụi IP67 siêu bền",
    ],
  },
  {
    id: "sp-5",
    title: "Loa Bluetooth JBL Flip 4 Âm Bass Mạnh Mẽ",
    discountBadge: "-3%",
    pricePrefix: "Chỉ từ:",
    price: "350.000 ₫",
    rating: 5,
    reviewCount: 15,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Kết nối JBL Connect+ ghép nối hàng trăm loa cùng lúc",
      "Tích hợp micro đàm thoại hội nghị lọc ồn",
      "Thiết kế nhỏ gọn bọc vải dệt bền bỉ",
    ],
  },
  {
    id: "sp-6",
    title: "Loa Karaoke Chuyên Nghiệp Paramax PRO V30",
    discountBadge: "-36%",
    pricePrefix: "Chỉ từ:",
    oldPrice: "550.000 ₫",
    price: "350.000 ₫",
    rating: 5,
    reviewCount: 11,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Loa 2 đường tiếng củ loa Bass 30cm uy lực",
      "Treble còi nén Titanium cho giọng hát sáng rõ",
      "Phù hợp phòng họp, hội trường và karaoke gia đình",
    ],
  },
  {
    id: "sp-7",
    title: "Loa kéo công suất lớn Prosing W-Silver-E Kèm 2 Micro UHF",
    discountBadge: "-20%",
    pricePrefix: "Chỉ từ:",
    price: "396.000 ₫",
    rating: 5,
    reviewCount: 9,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Công suất cực đại 800W đáp ứng không gian ngoài trời",
      "Đi kèm 2 micro không dây UHF vỏ nhôm hút âm",
      "Bình ắc quy 20A tích hợp dùng 6 - 8 giờ",
    ],
  },
  {
    id: "sp-8",
    title: "Loa kéo di động Prosing W15-Super 10 Bass 4 Tấc",
    discountBadge: "-15%",
    pricePrefix: "Chỉ từ:",
    oldPrice: "149.000 ₫",
    price: "127.000 ₫",
    rating: 5,
    reviewCount: 14,
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Thùng gỗ sơn sần chống trầy xước cao cấp",
      "Kết nối Bluetooth 5.0, USB, Thẻ nhớ, Guitar In",
      "Bánh xe xoay 360 độ có khóa cố định",
    ],
  },
  {
    id: "sp-9",
    title: "Hệ thống Loa Soundbar JBL Bar 1000 Chuẩn Dolby Atmos 7.1.4",
    discountBadge: "-7%",
    pricePrefix: "Chỉ từ:",
    oldPrice: "300.000 ₫",
    price: "279.000 ₫",
    rating: 5,
    reviewCount: 21,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "2 loa vòm tháo rời không dây tiện lợi",
      "Loa Subwoofer 10 inch không dây âm trầm sâu",
      "Tổng công suất 880W chuẩn rạp chiếu phim tại gia",
    ],
  },
  {
    id: "sp-10",
    title: "Loa Sub Điện Hội Trường DT Alpha118 Bass 50cm",
    discountBadge: "-8%",
    pricePrefix: "Chỉ từ:",
    oldPrice: "490.000 ₫",
    price: "450.000 ₫",
    rating: 5,
    reviewCount: 17,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    section: "promo",
    specs: [
      "Củ loa Subwoofer 18 inch (50cm) từ Neo cao cấp",
      "Mạch khuếch đại Class D hiệu suất cao",
      "Tái tạo dải trầm 32Hz - 150Hz mạnh mẽ",
    ],
  },
];

export const b2bProduct17DefaultData: B2bProduct17Data = {
  business: {
    name: "SpeakerHub",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@speakerhub.vn", "b2b@speakerhub.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:30",
    rating: 4.9,
    reviewCount: 1940,
    aboutTitle: "Phân Phối Thiết Bị Âm Thanh, Hội Trường & Hội Nghị SpeakerHub",
    aboutText: [
      "Nhà phân phối chính thức các thiết bị âm thanh hội trường, loa karaoke gia đình, loa di động Bluetooth và giải pháp âm thanh phòng họp chính hãng giá sỉ tốt nhất.",
    ],
  },
  topAnnouncement: "Thiết bị điện tử & âm thanh chính hãng với giá tốt nhất !",
  hero: {
    eyebrow: "GIẢM GIÁ CHO NHIỀU SẢN PHẨM KHÁC.",
    title: "ƯU ĐÃI LÊN ĐẾN 40%",
    subtitle:
      "Hệ thống phân phối sỉ & lẻ loa Bluetooth, dàn âm thanh hội trường, karaoke chuyên nghiệp và thiết bị âm thanh hội nghị 100% chính hãng.",
    ctaText: "Xem sản phẩm",
    ctaLink: "#san-pham-khuyen-mai",
    backgroundImage:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1400&q=85",
  },
  marqueeItems: [
    "CHẤT LƯỢNG ÂM THANH HOT NHẤT TRÊN THỊ TRƯỜNG",
    "LUÔN CÓ GIÁ TỐT NHẤT !",
    "CAM KẾT NGUỒN HÀNG 100% CHÍNH HÃNG",
    "CHÍNH SÁCH CHIẾT KHẤU ĐẠI LÝ HẤP DẪN",
  ],
  audioCategories: [
    {
      id: "ac-1",
      name: "Loa Bluetooth",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-2",
      name: "Loa di động",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-3",
      name: "Loa karaoke",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-4",
      name: "Amply Karaoke",
      image:
        "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-5",
      name: "Loa Sub",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-6",
      name: "Loa kéo",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-7",
      name: "Phụ kiện",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "ac-8",
      name: "Soundbar",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=300&q=80",
    },
  ],
  promoProducts: sharedProductsPool,
  orangeCountdownBanner: {
    eyebrow: "CÁC THIẾT BỊ ÂM THANH",
    title: "Giảm lên đến 60%",
    subtitle:
      "Tìm những tiện ích mới nhất và tuyệt vời nhất để nâng cấp thiết bị điện tử & âm thanh của bạn.",
    countdown: {
      days: "30",
      hours: "12",
      mins: "12",
      secs: "02",
    },
    ctaText: "Xem sản phẩm",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=900&q=85",
  },
  karaokeProducts: [
    sharedProductsPool[4],
    sharedProductsPool[1],
    sharedProductsPool[6],
    sharedProductsPool[5],
    sharedProductsPool[3],
    sharedProductsPool[0],
    sharedProductsPool[7],
    sharedProductsPool[2],
    sharedProductsPool[8],
    sharedProductsPool[9],
  ],
  bluetoothProducts: [
    sharedProductsPool[5],
    sharedProductsPool[3],
    sharedProductsPool[0],
    sharedProductsPool[7],
    sharedProductsPool[2],
    sharedProductsPool[8],
    sharedProductsPool[9],
    {
      ...sharedProductsPool[1],
      id: "bt-8",
      title: "Combo dàn âm thanh karaoke gia đình cao cấp",
      price: "300.000 ₫",
      discountBadge: "-18%",
    },
    {
      ...sharedProductsPool[0],
      id: "bt-9",
      title: "Combo dàn âm thanh karaoke tại nhà chống hú",
      price: "159.000 ₫",
      discountBadge: "-22%",
    },
    {
      ...sharedProductsPool[8],
      id: "bt-10",
      title: "Loa soundbar bar JBL 1000 chuẩn rạp phim",
      price: "199.000 ₫",
      discountBadge: "-12%",
    },
  ],
  slateAccessoryBanner: {
    eyebrow: "PHỤ KIỆN ÂM THANH",
    title: "Giảm lên đến 40%",
    subtitle:
      "Tìm những tiện ích mới nhất và tuyệt vời nhất để nâng cấp thiết bị điện tử của bạn.",
    ctaText: "Xem tất cả",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85",
  },
  accessoryProducts: [
    sharedProductsPool[4],
    sharedProductsPool[1],
    sharedProductsPool[6],
    sharedProductsPool[0],
    sharedProductsPool[7],
    sharedProductsPool[2],
    sharedProductsPool[8],
    sharedProductsPool[9],
    {
      ...sharedProductsPool[1],
      id: "acc-9",
      title: "Combo dàn âm thanh karaoke chuyên nghiệp",
      price: "300.000 ₫",
      discountBadge: "-15%",
    },
    {
      ...sharedProductsPool[0],
      id: "acc-10",
      title: "Combo dàn âm thanh karaoke tại nhà",
      price: "159.000 ₫",
      discountBadge: "-20%",
    },
  ],
  news: [
    {
      id: "sp-news-1",
      title: "Dàn loa karaoke cho gia đình đáng đầu tư nhất hiện nay",
      date: "20/02/2026",
      category: "CÔNG NGHỆ",
      excerpt:
        "Hướng dẫn phối ghép loa karaoke, cục đẩy công suất và vang số chuẩn âm học cho phòng khách gia đình từ 20 - 40m2.",
      image:
        "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-news-2",
      title: "Dây điện - phụ kiện thay thế tốt nhất cho các sản phẩm âm thanh",
      date: "18/02/2026",
      category: "THIẾT KẾ",
      excerpt:
        "Lựa chọn dây tín hiệu lõi đồng chống nhiễu giúp giảm suy hao âm thanh và loại bỏ hoàn toàn tiếng ù nền khó chịu.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-news-3",
      title: "Điểm danh các loại loa sub tốt nhất cho mọi nhà",
      date: "15/02/2026",
      category: "PHỤ KIỆN",
      excerpt:
        "So sánh loa Sub điện và Sub hơi: Khi nào nên chọn củ loa Bass 30cm hay Bass 40cm để tối ưu dải âm trầm uy lực.",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sp-news-4",
      title: "Loa soundbar được ưa chuộng cho việc setup bàn làm việc",
      date: "10/02/2026",
      category: "THIẾT KẾ",
      excerpt:
        "Top các mẫu loa Soundbar nhỏ gọn tích hợp Bluetooth 5.3 và cổng quang Optical mang lại không gian giải trí tối giản.",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    },
  ],
  audioBrands: [
    "Bang & Olufsen",
    "YAMAHA",
    "SoundKing",
    "SONY",
    "MONSTER",
    "Marshall",
    "JBL",
    "Jamo",
    "harman/kardon",
    "Fender",
    "EDIFIER",
    "DEVIALET",
    "DENON",
    "BOSE",
  ],
  trustFeatures: [
    {
      id: "tf-1",
      title: "Miễn phí vận chuyển",
      subtitle: "Cho đơn hàng từ 2.000.000vnđ",
      iconType: "box",
    },
    {
      id: "tf-2",
      title: "Thanh toán linh hoạt",
      subtitle: "Sử dụng cho nhiều thẻ tín dụng",
      iconType: "card",
    },
    {
      id: "tf-3",
      title: "Hoàn trả trong 14 ngày",
      subtitle: "Trong vòng 30 ngày để trao đổi",
      iconType: "return",
    },
    {
      id: "tf-4",
      title: "Hỗ trợ cao cấp",
      subtitle: "Hỗ trợ kỹ thuật âm thanh vượt trội",
      iconType: "headset",
    },
  ],
};
