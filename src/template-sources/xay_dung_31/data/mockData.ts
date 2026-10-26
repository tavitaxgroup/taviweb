import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuxuryMosaicSpace {
  id: string;
  title: string;
  subtitle: string;
  area: string;
  architect: string;
  image: string;
  description: string;
  materials: string[];
}

export interface LuxurySpecialOffer {
  id: string;
  title: string;
  ctaLabel: string;
  pricePackage: string;
  duration: string;
  image: string;
  description: string;
  perks: string[];
}

export interface LuxuryReviewItem {
  id: string;
  headline: string;
  quote: string;
  guestName: string;
  guestTitle: string;
  staySuite: string;
}

export interface XayDung31Data extends ClonedTemplateBaseData {
  header: {
    brandTitle: string;
    establishedText: string;
    navItems: { label: string; href: string }[];
  };
  heritageSection: {
    heading: string;
    body: string;
    directorSignature: string;
    directorNameAndRole: string;
    leftImage: string;
    rightImage: string;
  };
  interiorMosaic: LuxuryMosaicSpace[];
  livingSpaceSection: {
    heading: string;
    subHeading: string;
    leftColumnText: string;
    rightColumnText: string;
    buttonText: string;
    triptychImages: {
      id: string;
      title: string;
      caption: string;
      image: string;
    }[];
  };
  specialOffersSection: {
    heading: string;
    subHeading: string;
    offers: LuxurySpecialOffer[];
  };
  reviewsSection: {
    topHeading: string;
    topSubHeading: string;
    ctaLinkText: string;
    verticalFeatureImage: string;
    topRightImage: string;
    bottomRightImage: string;
    reviews: LuxuryReviewItem[];
  };
  footer: {
    addressTitle: string;
    bookingTitle: string;
    newsletterTitle: string;
    awardsTitle: string;
    hotelNameLine: string;
    faxNumber: string;
    awards: { title: string; year: string; org: string }[];
    copyright: string;
  };
}

export const defaultData: XayDung31Data = {
  business: {
    name: "MONA HOTEL",
    tagline: "SINCE 1896 — Tuyệt Tác Kiến Trúc & Thi Công Khách Sạn Di Sản",
    phone: ["076 922 0162", "0909 686 888"],
    email: ["mon@mona.media", "concierge@monahotel1896.vn"],
    address: "319 C16 Lý Thường Kiệt, Quận 11, TP. Hồ Chí Minh",
    workingHours: "24/7 — Private Butler & Architectural Concierge",
    rating: 5.0,
    reviewCount: 412,
    aboutTitle: "Khách sạn sang trọng nhất tọa lạc trung tâm thành phố",
    aboutText: [
      "Chúng tôi tự hào nói rằng kể từ khi mở cửa vào năm 1896, chúng tôi đã phục vụ du khách thượng lưu và giới kiến trúc quốc tế theo chuẩn mực hoàn mỹ nhất. Trong tổ hợp khách sạn Mona Luxury, mỗi một trong số 17 hạng Suite di sản của chúng tôi — với cá tính kiến trúc và phong cách nội thất độc bản — sẽ giúp bạn cảm thấy như ở nhà và sống trọn vẹn trải nghiệm nghệ thuật chưa từng có.",
    ],
  },
  header: {
    brandTitle: "MONA HOTEL",
    establishedText: "SINCE 1896",
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "DI SẢN KIẾN TRÚC", href: "#di-san" },
      { label: "KHÔNG GIAN NỘI THẤT", href: "#khong-gian-song" },
      { label: "ƯU ĐÃI ĐẶC QUYỀN", href: "#uu-dai" },
      { label: "NHẬN XÉT", href: "#nhan-xet" },
      { label: "LIÊN HỆ ĐẶT CHỖ", href: "#lien-he" },
    ],
  },
  hero: {
    eyebrow: "SINCE 1896 • BESPOKE LUXURY ARCHITECTURE",
    title: "Nghệ thuật trong thành phố",
    subtitle: "Trải nghiệm tuyệt vời nhất cho bạn ngày lễ",
    ctaText: "XEM CHI TIẾT",
    ctaLink: "#di-san",
    backgroundImage:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=85",
  },
  heritageSection: {
    heading: "Khách sạn sang trọng nhất tọa lạc trung tâm thành phố",
    body: "Chúng tôi tự hào nói rằng kể từ khi mở cửa vào năm 1896, chúng tôi đã phục vụ khách truy cập theo cách tốt nhất có thể. Trong khách sạn Monavi, nơi mỗi một trong số 17 phòng của chúng tôi – với cá tính và phong cách riêng – sẽ giúp bạn cảm thấy như ở nhà và sống trải nghiệm Monavi như bạn sẽ không bao giờ tưởng tượng được.",
    directorSignature: "Richard Morgan",
    directorNameAndRole: "RICARD MORGAN – TỔNG GIÁM ĐỐC",
    leftImage:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    rightImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  interiorMosaic: [
    {
      id: "mosaic-1",
      title: "Nordic Atelier Bedroom Suite",
      subtitle: "Thiết kế Tối giản Bắc Âu & Ánh sáng Điểm",
      area: "64 m²",
      architect: "KTS. Julian Vance & Mona Studio",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1100&q=80",
      description:
        "Không gian phòng ngủ Master sử dụng bảng màu trung tính tinh khiết, kết hợp đèn đọc sách đồng đen chế tác thủ công và bàn đầu giường gỗ tần bì tự nhiên.",
      materials: [
        "Gỗ tần bì Bắc Âu xử lý bề mặt mờ tự nhiên",
        "Vải lanh Bỉ dệt thủ công 600 sợi/inch",
        "Đèn bàn nghệ thuật hợp kim nhôm sơn tĩnh điện",
      ],
    },
    {
      id: "mosaic-2",
      title: "The Gallery Penthouse Living",
      subtitle: "Phòng khách Triển lãm Nghệ thuật Đương đại",
      area: "115 m²",
      architect: "KTS. Trần Minh Khôi",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1100&q=80",
      description:
        "Tổ hợp phòng khách Penthouse ngập tràn ánh sáng tự nhiên với hệ cửa kính lớn, rèm nhung xanh Midnight và bộ sưu tập tranh đồ họa đương đại trưng bày như một phòng triển lãm tư nhân.",
      materials: [
        "Sàn gỗ sồi xương cá Pháp (Herringbone Oak)",
        "Sofa bọc nỉ Bouclé Ý & bàn trà mặt đá cẩm thạch",
        "Hệ kính cách âm 3 lớp chống tia UV 99%",
      ],
    },
    {
      id: "mosaic-3",
      title: "Heritage Loft Dining & Boardroom",
      subtitle: "Không gian Hội họp & Tiệc tối Kiến trúc Vòm",
      area: "92 m²",
      architect: "Mona Heritage Design Team",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80",
      description:
        "Phòng ăn và hội nghị riêng tư mang âm hưởng Loft New York với ba khung cửa sổ cao kịch trần, bàn gỗ nguyên tấm 8 ghế và thảm dệt hình học tương phản.",
      materials: [
        "Bàn gỗ óc chó nguyên tấm dài 3.2m",
        "Khung cửa thép sơn đen tĩnh điện chuẩn công nghiệp",
        "Hệ thống âm thanh hội nghị ẩn trần Bang & Olufsen",
      ],
    },
    {
      id: "mosaic-4",
      title: "Bespoke Creative Studio Suite",
      subtitle: "Không gian Lưu trú & Sáng tạo Nghệ thuật",
      area: "58 m²",
      architect: "KTS. Elena Rostova",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1100&q=80",
      description:
        "Được thiết kế dành riêng cho các nhà sáng tạo, kiến trúc sư và doanh nhân trẻ với bàn làm việc gỗ ấm áp, đèn sàn chụp vải cổ điển và góc thư giãn ngập nắng.",
      materials: [
        "Bàn студия gỗ Teak tự nhiên hoàn thiện sáp ong",
        "Thảm dệt thủ công Morocco màu Indigo",
        "Hệ thống chiếu sáng CRI > 97 tôn vinh màu sắc nội thất",
      ],
    },
  ],
  livingSpaceSection: {
    heading: "Không gian sống đỉnh cao",
    subHeading: "TẠI HỒ CHÍ MINH",
    leftColumnText:
      "Khách sạn Đệ Nhất Mona tọa lạc gần sân bay quốc tế và quốc nội Tân Sơn Nhất của thành phố Hồ Chí Minh và khu vực phía Nam. Là cánh cửa đầu tiên của TP. HCM mở ra đón bạn bè quốc tế đến với các di sản thiên nhiên – văn hóa nổi tiếng thế giới và các trung tâm thương mại lớn của Việt Nam.",
    rightColumnText:
      "Khách sạn được chia thành 5 hạng phòng kiến trúc khác nhau, được du khách yêu thích bởi sự sạch sẽ và dịch vụ phòng hoàn hảo. Ngoài ra, khách sạn còn trang bị phòng tập thể hình, hồ bơi nước ấm, 3 sân tennis tiêu chuẩn quốc tế, CLB giải trí có thưởng (dành cho khách quốc tế) & khu massage – xông hơi đá muối để phục vụ quý khách lưu trú.",
    buttonText: "KHÁM PHÁ THÊM",
    triptychImages: [
      {
        id: "trip-1",
        title: "Ẩm thực Fine Dining Michelin",
        caption: "Nghệ thuật trình bày ẩm thực Pháp - Việt đương đại",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "trip-2",
        title: "Lò sưởi & Không gian Tiếp khách",
        caption: "Kiến trúc tối giản với lò sưởi kính xuyên thấu 3 mặt",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "trip-3",
        title: "Vaulted Wine & Coffee Lounge",
        caption: "Trần vòm di sản từ năm 1896 kết hợp ánh sáng ấm",
        image:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  specialOffersSection: {
    heading: "Ưu đãi đặc biệt",
    subHeading: "TẬN HƯỞNG ĐẶC QUYỀN CAO CẤP CỦA MONA",
    offers: [
      {
        id: "offer-3d2n",
        title: "Khuyến mãi 3 ngày 2 đêm",
        ctaLabel: "ĐỌC THÊM",
        pricePackage: "4.800.000 ₫ / Kỳ nghỉ 2 Khách",
        duration: "3 Ngày 2 Đêm tại Heritage Suite",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
        description:
          "Kỳ nghỉ thiết kế trọn gói dành cho cặp đôi hoặc doanh nhân muốn tái tạo năng lượng cuối tuần trong không gian kiến trúc di sản giữa lòng Sài Gòn.",
        perks: [
          "02 đêm nghỉ tại hạng phòng Nordic Atelier hoặc Creative Studio",
          "Đưa đón 2 chiều bằng xe sang từ Sân bay Tân Sơn Nhất",
          "Tặng 01 liệu trình Aroma Spa 90 phút cho 02 khách",
        ],
      },
      {
        id: "offer-buffet",
        title: "Buffet món Âu mỗi sáng",
        ctaLabel: "ĐỌC THÊM",
        pricePackage: "Miễn phí đi kèm mọi hạng Suite",
        duration: "06:00 – 10:30 hàng ngày",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        description:
          "Thưởng thức thực đơn điểm tâm kiểu Pháp - Ý tinh tế dưới mái vòm kiến trúc cổ điển cùng cà phê Specialty rang xay tại chỗ.",
        perks: [
          "Hơn 50 món bánh nướng Pháp, trứng Benedict, phô mai & thịt nguội nhập khẩu",
          "Phục vụ tại sảnh vòm di sản hoặc mang trực tiếp lên giường (In-bed Breakfast)",
          "Menu Detox hữu cơ ép lạnh chuẩn bị riêng theo yêu cầu",
        ],
      },
      {
        id: "offer-honeymoon",
        title: "Gói tuần trăng mật 5 đêm",
        ctaLabel: "ĐỌC THÊM",
        pricePackage: "12.500.000 ₫ / Trọn gói Cặp đôi",
        duration: "5 Đêm tại The Gallery Penthouse",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
        description:
          "Không gian lãng mạn bậc nhất với hoa tươi, nến thơm, rượu Champagne Pháp và bữa tối Fine Dining riêng tư dưới ánh nến.",
        perks: [
          "05 đêm lưu trú tại The Gallery Penthouse rộng 115m²",
          "Trang trí phòng tân hôn bằng hoa hồng Ecuador & rượu Moët & Chandon",
          "Bữa tối 5 món chuẩn Michelin dành riêng cho hai người",
        ],
      },
    ],
  },
  reviewsSection: {
    topHeading: "Nhận xét",
    topSubHeading:
      "NHỮNG KHÁCH HÀNG HÀI LÒNG CỦA CHÚNG TÔI ĐÃ NÓI GÌ VỀ CHÚNG TÔI",
    ctaLinkText: "XEM NHẬN XÉT",
    verticalFeatureImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    topRightImage:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    bottomRightImage:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    reviews: [
      {
        id: "rev-1",
        headline: "Khách sạn tuyệt đẹp với tầm nhìn đáng kinh ngạc",
        quote:
          "Tôi đã đặt khách sạn này dựa trên các đánh giá về dịch vụ kiến trúc và địa điểm trung tâm. Và khách sạn hoàn toàn vượt xa kỳ vọng của tôi từ sảnh đón tiếp lịch lãm cho đến hồ bơi nước ấm tuyệt đẹp.",
        guestName: "Alexander Nguyễn",
        guestTitle: "Giám đốc Sáng tạo — Studio Kiến trúc Châu Á",
        staySuite: "The Gallery Penthouse Living",
      },
      {
        id: "rev-2",
        headline: "Sự giao thoa hoàn mỹ giữa di sản 1896 và nội thất tối giản",
        quote:
          "Hiếm có công trình khách sạn nào giữ được linh hồn kiến trúc cổ điển từ thế kỷ 19 mà vẫn mang lại cảm giác hiện đại, tinh khiết và tiện nghi chuẩn 5 sao như Mona Hotel.",
        guestName: "Madame Claire Dubois",
        guestTitle: "Nhà phê bình Nghệ thuật & Du lịch Quốc tế",
        staySuite: "Nordic Atelier Bedroom Suite",
      },
      {
        id: "rev-3",
        headline: "Dịch vụ Quản gia & Ẩm thực Fine Dining xứng tầm quốc tế",
        quote:
          "Kỳ nghỉ trăng mật 5 đêm của vợ chồng tôi tại Mona Hotel thật sự hoàn hảo. Bữa tối dưới mái vòm cổ điển và khu Spa xông hơi trầm hương khiến chúng tôi nhớ mãi.",
        guestName: "Hoàng Bách & Minh Thư",
        guestTitle: "Doanh nhân TP.HCM",
        staySuite: "Bespoke Creative Studio Suite",
      },
    ],
  },
  footer: {
    addressTitle: "ĐỊA CHỈ",
    bookingTitle: "ĐẶT CHỖ",
    newsletterTitle: "NHẬN TIN",
    awardsTitle: "GIẢI THƯỞNG",
    hotelNameLine: "HOTEL Mona Beach",
    faxNumber: "076 922 0162",
    awards: [
      {
        title: "TRAVELLERS' CHOICE",
        year: "2024",
        org: "TripAdvisor Luxury",
      },
      {
        title: "BOUTIQUE HOTEL AWARDS",
        year: "WINNER",
        org: "World Architecture",
      },
    ],
    copyright: "© All rights reserved. Thiết kế website Mona Media - Luxury Hotel XD031",
  },
};
