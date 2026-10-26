import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ChaoDinnerComboItem {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  unit: string;
  badgeText?: string;
  guestCount: string;
  coursesCount: string;
  highlights: string[];
  image: string;
}

export interface ChaoShowActItem {
  id: string;
  actNumber: string;
  title: string;
  region: string;
  instruments: string;
  culinaryPairing: string;
  duration: string;
  description: string;
  image: string;
}

export interface ChaoSeatingZone {
  id: string;
  name: string;
  priceNote: string;
  perks: string[];
  capacity: string;
  badge: string;
}

export interface LeadGeneration15Data extends ClonedTemplateBaseData {
  heroMeta: {
    showBrand: string;
    showTime: string;
    venueName: string;
    musicianImage: string;
    stageBackgroundImage: string;
    highlights: string[];
  };
  culturalActs: ChaoShowActItem[];
  comboCategories: string[];
  dinnerCombos: ChaoDinnerComboItem[];
  seatingZones: ChaoSeatingZone[];
  vipPartyPerks: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  galleryImages: string[];
}

export const leadGeneration15DefaultData: LeadGeneration15Data = {
  business: {
    name: "ChaoDinner — Chào Show",
    phone: ["0901 888 999", "1900 636 648"],
    email: ["booking@chaodinner.vn", "info@chaoshow.vn"],
    address: "Số 6 Nguyễn Siêu, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
    workingHours: "Mở cửa đón khách: 17:30 – 22:30 (Suất diễn chính: 19:00 – 21:15)",
    rating: 4.96,
    reviewCount: 1850,
    aboutTitle: "Tinh Hoa Nhạc Cụ Dân Tộc Kết Hợp Ẩm Thực Bản Địa Đương Đại",
    aboutText: [
      "ChaoDinner (Chào Show) là trải nghiệm dạ tiệc văn hóa độc bản tại trung tâm Sài Gòn, nơi thực khách thưởng thức thực đơn 9 món Bắc - Trung - Nam hòa quyện cùng dàn nhạc dân tộc 20 nhạc công biểu diễn trực tiếp.",
      "Tạo nên không gian thưởng lãm hiện đại, sang trọng nhưng vẫn đậm vị Việt Nam cho những buổi tiệc chiêu đãi đối tác quốc tế, kỷ niệm gia đình và sự kiện doanh nghiệp."
    ],
    experienceYears: "8+"
  },
  hero: {
    eyebrow: "CHÀO SHOW • FINE DINING & TRADITIONAL ART",
    title: "CHƯƠNG TRÌNH NGHỆ THUẬT ĐẬM BẢN SẮC DÂN TỘC",
    subtitle:
      "Thưởng thức đêm tiệc ẩm thực Việt Nam đương đại hòa quyện cùng thanh âm đàn T'rưng, K'ni, Đàn Bầu sống động dưới ánh đèn sân khấu giàu cảm xúc.",
    ctaText: "Đặt Bàn & Nhận Ưu Đãi -25%",
    ctaLink: "#dat-tiec",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
  },
  heroMeta: {
    showBrand: "CHÀO SHOW",
    showTime: "Suất diễn hàng đêm: 19:00 – 21:15",
    venueName: "Nhà Hát Ẩm Thực Chào Sài Gòn • Quận 1",
    musicianImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=85",
    stageBackgroundImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
    highlights: [
      "Trình diễn 12 nhạc cụ dân tộc nguyên bản",
      "Thực đơn Fine Dining 3 miền phục vụ theo từng chương nhạc",
      "Ưu đãi giảm tới 25% khi đặt bàn trực tuyến trước 24h"
    ]
  },
  culturalActs: [
    {
      id: "act-1",
      actNumber: "CHƯƠNG I",
      title: "Thanh Âm Đại Ngàn & Hồn Việt Phương Bắc",
      region: "Tây Bắc & Đồng Bằng Bắc Bộ",
      instruments: "Đàn T'rưng, Sáo Mèo, Đàn Đá, Trống Hội",
      culinaryPairing: "Khai vị Gỏi Bưởi Tôm Càng & Chả Cá Lã Vọng Thượng Hạng",
      duration: "40 phút",
      description:
        "Mở màn bằng âm hưởng hùng vĩ của núi rừng Tây Bắc và nét thanh tao của kinh thành Thăng Long xưa, đánh thức vị giác bằng các món khai vị thanh mát.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "act-2",
      actNumber: "CHƯƠNG II",
      title: "Dư Âm Kinh Kỳ & Nhã Nhạc Cố Đô",
      region: "Duyên Hải & Cố Đô Huế",
      instruments: "Đàn Bầu, Đàn Nguyệt, Đàn Tỳ Bà, Chén Ngọc",
      culinaryPairing: "Súp Bào Ngư Vi Cá Cung Đình & Bò Nướng Ống Tre",
      duration: "45 phút",
      description:
        "Đắm chìm trong giai điệu sâu lắng, uyển chuyển của Nhã nhạc cung đình Huế cùng các tuyệt phẩm ẩm thực được chế biến cầu kỳ theo công thức hoàng gia.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "act-3",
      actNumber: "CHƯƠNG III",
      title: "Sắc Màu Phương Nam Phồn Hoa Hội Tụ",
      region: "Tây Nguyên & Nam Bộ",
      instruments: "Đàn K'ni, Đàn Tranh, Đàn Kìm, Song Loan",
      culinaryPairing: "Cơm Sen Tôm Hùm Nướng Phô Mai & Chè Tổ Yến Hạt Sen",
      duration: "40 phút",
      description:
        "Khép lại đêm tiệc với nhịp điệu phóng khoáng, rộn ràng của đất phương Nam hiếu khách, nâng ly rượu men lá truyền thống chúc mừng đêm hội ngộ.",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
    }
  ],
  comboCategories: [
    "Tất cả Combo",
    "Tiệc Cặp Đôi & Gia Đình",
    "Đoàn Khách VIP & Doanh Nghiệp",
    "Vé Xem Show & Cocktail"
  ],
  dinnerCombos: [
    {
      id: "cb-1",
      name: "Set Tiệc Di Sản Hội Ngộ (Vé Show + Thực Đơn 7 Món)",
      category: "Tiệc Cặp Đôi & Gia Đình",
      price: "1.150.000đ",
      oldPrice: "1.450.000đ",
      unit: "/ thực khách",
      badgeText: "ƯU ĐÃI -20%",
      guestCount: "Từ 2 khách",
      coursesCount: "7 món Bắc - Trung - Nam",
      highlights: [
        "Ghế ngồi Hạng Thương Gia chính diện sân khấu",
        "Tặng 01 ly Welcome Cocktail bản địa cho mỗi thực khách",
        "Thực đơn 7 món tiêu chuẩn Fine Dining Việt Nam"
      ],
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cb-2",
      name: "Set Tiệc Hoàng Gia Chào Show (Vé VIP + Tôm Hùm & Rượu Vang)",
      category: "Tiệc Cặp Đôi & Gia Đình",
      price: "1.690.000đ",
      oldPrice: "2.250.000đ",
      unit: "/ thực khách",
      badgeText: "BÁN CHẠY NHẤT • -25%",
      guestCount: "Từ 2 khách",
      coursesCount: "9 món Thượng Hạng",
      highlights: [
        "Bàn VIP hàng đầu sát sân khấu giao lưu cùng nghệ sĩ",
        "Thực đơn 9 món có Tôm Hùm Nha Trang & Súp Bào Ngư",
        "Miễn phí trang trí bàn tiệc Kỷ niệm / Sinh nhật lãng mạn"
      ],
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cb-3",
      name: "Gói Chiêu Đãi Đối Tác Quốc Tế (Bàn Đoàn 6 - 10 Khách)",
      category: "Đoàn Khách VIP & Doanh Nghiệp",
      price: "9.800.000đ",
      oldPrice: "12.500.000đ",
      unit: "/ bàn 8 khách",
      badgeText: "TIỆC DOANH NGHIỆP",
      guestCount: "Bàn 8 – 10 khách",
      coursesCount: "9 món + 2 chai Vang Đỏ",
      highlights: [
        "Không gian khu vực VIP riêng tư, thuyết minh song ngữ Việt - Anh",
        "Tặng kèm 02 chai Rượu Vang thượng hạng & quà lưu niệm tre Việt",
        "Xuất hóa đơn VAT nhanh chóng cho doanh nghiệp"
      ],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cb-4",
      name: "Gói Private Gala Dinner & Biểu Diễn Theo Yêu Cầu",
      category: "Đoàn Khách VIP & Doanh Nghiệp",
      price: "35.000.000đ",
      oldPrice: "42.000.000đ",
      unit: "/ đoàn 25 khách",
      badgeText: "ĐỘC QUYỀN ĐOÀN",
      guestCount: "Từ 25 – 60 khách",
      coursesCount: "Tiệc Gala Trọn Gói",
      highlights: [
        "Thiết kế kịch bản chào mừng logo doanh nghiệp trên màn LED",
        "Giao lưu trải nghiệm đánh đàn T'rưng & Đàn Đá trên sân khấu",
        "Bao gồm hệ thống âm thanh, ánh sáng, MC song ngữ"
      ],
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cb-5",
      name: "Combo Thưởng Thức Chào Show & Tapas Bản Địa",
      category: "Vé Xem Show & Cocktail",
      price: "690.000đ",
      oldPrice: "850.000đ",
      unit: "/ thực khách",
      badgeText: "TRẢI NGHIỆM NHẸ",
      guestCount: "Từ 1 khách",
      coursesCount: "3 món Tapas + 1 Cocktail",
      highlights: [
        "Vé thưởng thức trọn vẹn 3 chương nghệ thuật Chào Show (125 phút)",
        "Khay Tapas 3 món đặc sản vùng miền & 01 Signature Cocktail",
        "Phù hợp du khách muốn thưởng nhạc nhẹ nhàng buổi tối"
      ],
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cb-6",
      name: "Combo Gia Đình Sum Vầy (4 Người Lớn + Miễn Phí 1 Trẻ Em)",
      category: "Tiệc Cặp Đôi & Gia Đình",
      price: "4.200.000đ",
      oldPrice: "5.400.000đ",
      unit: "/ gia đình 4-5 người",
      badgeText: "TẶNG VÉ TRẺ EM",
      guestCount: "4 người lớn + 1 bé",
      coursesCount: "8 món Gia Đình",
      highlights: [
        "Tặng ngay 01 phần ăn & vé xem show cho bé dưới 1m3",
        "Trải nghiệm chụp ảnh gia đình cùng nghệ nhân nhạc cụ dân tộc",
        "Thực đơn cân bằng dinh dưỡng, hợp khẩu vị cả 3 thế hệ"
      ],
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    }
  ],
  seatingZones: [
    {
      id: "zone-vip",
      name: "Khu Vực Hoàng Gia (Royal VIP Stage)",
      priceNote: "Hàng ghế A1 – A8 sát sân khấu",
      capacity: "Tối đa 32 thực khách / đêm",
      badge: "TẦM NHÌN ĐẸP NHẤT",
      perks: [
        "Góc nhìn trực diện không vật cản, thưởng thức trọn vẹn biểu cảm nghệ sĩ",
        "Chuyên viên phục vụ bàn 1:1 riêng biệt suốt buổi diễn",
        "Tặng quà lưu niệm sáo trúc thủ công khắc tên thực khách"
      ]
    },
    {
      id: "zone-center",
      name: "Khu Vực Thương Gia Trung Tâm (Grand Center)",
      priceNote: "Hàng ghế B1 – D12 trung tâm khán phòng",
      capacity: "Tối đa 60 thực khách / đêm",
      badge: "ĐƯỢC YÊU THÍCH",
      perks: [
        "Điểm hội tụ âm thanh vòm Acoustic tự nhiên chuẩn xác nhất",
        "Không gian bàn tròn ấm cúng cho cặp đôi, gia đình và nhóm bạn",
        "Đầy đủ quyền lợi thực đơn Fine Dining theo chương nhạc"
      ]
    },
    {
      id: "zone-balcony",
      name: "Khu Vực Ban Công Toàn Cảnh (Panorama Lounge)",
      priceNote: "Tầng lửng riêng tư nhìn toàn cảnh sân khấu",
      capacity: "Tối đa 28 thực khách / đêm",
      badge: "RIÊNG TƯ & SANG TRỌNG",
      perks: [
        "Tầm nhìn bao quát toàn bộ hiệu ứng ánh sáng và đội hình nhạc công",
        "Khu vực yên tĩnh phù hợp trao đổi công việc và tiếp khách ngoại giao",
        "Lối đi đón tiếp ưu tiên và quầy Bar riêng biệt"
      ]
    }
  ],
  vipPartyPerks: [
    {
      id: "perk-1",
      title: "Ưu Đãi Tới 25% Đặt Sớm",
      description: "Giảm ngay từ 20% – 25% tổng hóa đơn combo khi đặt giữ chỗ trực tuyến trước 16:00 hàng ngày."
    },
    {
      id: "perk-2",
      title: "Tặng Gói Trang Trí Kỷ Niệm",
      description: "Miễn phí nến, hoa tươi bàn tiệc và thiệp chúc mừng viết tay cho tiệc Sinh nhật hoặc Kỷ niệm ngày cưới."
    },
    {
      id: "perk-3",
      title: "Đón Tiếp Chuẩn Quốc Tế",
      description: "Đội ngũ lễ tân và MC giới thiệu chương trình bằng tiếng Việt - Anh - Nhật - Hàn chuyên nghiệp."
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Ông Trần Minh Quân",
      role: "Giám đốc Đối ngoại • Tập đoàn Liên doanh Việt - Nhật",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Mỗi lần có đoàn đối tác từ Tokyo sang TP.HCM, tôi đều đặt bàn VIP tại ChaoDinner. Khách quốc tế vô cùng ấn tượng khi từng món ăn được dâng lên đúng lúc tiếng đàn T'rưng và đàn Bầu ngân vang!"
    },
    {
      id: "rv-2",
      author: "Chị Nguyễn Hoàng Lan Anh",
      role: "Thực khách đặt tiệc kỷ niệm 10 năm ngày cưới",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Không gian đỏ son thếp vàng cực kỳ ấm cúng và sang trọng. Món tôm hùm cơm sen và súp bào ngư nóng hổi, vừa ăn vừa thưởng thức âm nhạc dân tộc sống động khiến cả gia đình tôi nhớ mãi."
    },
    {
      id: "rv-3",
      author: "David & Sarah Miller",
      role: "Du khách từ Melbourne, Úc (Đánh giá 5 sao TripAdvisor)",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Một đêm nghệ thuật đỉnh cao tại Sài Gòn! Nữ nghệ sĩ chơi đàn T'rưng và K'ni truyền cảm hứng tuyệt vời, kết hợp thực đơn 9 món giải thích rõ câu chuyện văn hóa từng vùng miền Việt Nam."
    }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80"
  ]
};

export default leadGeneration15DefaultData;
