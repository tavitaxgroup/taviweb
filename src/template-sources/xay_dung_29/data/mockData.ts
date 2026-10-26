import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MonaHotelAmenity {
  id: string;
  title: string;
  description: string;
  iconName: "shuttle" | "parking" | "room-service" | "pool" | "wifi" | "breakfast";
}

export interface MonaHotelRoomItem {
  id: string;
  name: string;
  beds: number;
  baths: number;
  area: string;
  perk: string;
  pricePerDay: string;
  numericPrice: number;
  maxGuests: number;
  image: string;
  architecturalStyle: string;
  description: string;
  features: string[];
}

export interface MonaHotelChessService {
  id: string;
  eyebrow: string;
  title: string;
  quote: string;
  detail: string;
  openingHours: string;
  locationFloor: string;
  image: string;
}

export interface MonaHotelBlogPost {
  id: string;
  title: string;
  category: string;
  commentsCount: number;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface XayDung29Data extends ClonedTemplateBaseData {
  header: {
    navItems: { label: string; href: string; hasDropdown?: boolean }[];
    bookCta: string;
  };
  aboutSection: {
    eyebrow: string;
    heading: string;
    leadText: string;
    bodyText: string;
    primaryImage: string;
    secondaryImage: string;
    architecturalHighlights: { label: string; value: string }[];
  };
  amenitiesSection: {
    eyebrow: string;
    heading: string;
    items: MonaHotelAmenity[];
  };
  roomsSection: {
    eyebrow: string;
    heading: string;
    rooms: MonaHotelRoomItem[];
  };
  testimonialsSection: {
    eyebrow: string;
    heading: string;
  };
  chessServices: MonaHotelChessService[];
  blogSection: {
    eyebrow: string;
    heading: string;
    posts: MonaHotelBlogPost[];
  };
  footer: {
    description: string;
    quickLinks: { label: string; href: string }[];
    mapLinkText: string;
    copyright: string;
  };
}

export const defaultData: XayDung29Data = {
  business: {
    name: "MONA HOTEL ARCHITECTURE",
    tagline: "Kiến Trúc & Thi Công Tổ Hợp Khách Sạn Nghỉ Dưỡng Hạng Sang",
    phone: ["(+84) 0313-728-397", "0909 686 888"],
    email: ["info@themona.global", "kientruc@monahotel.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "24/7 — Lễ tân & Tư vấn Chủ đầu tư",
    rating: 4.9,
    reviewCount: 320,
    aboutTitle: "Nơi khởi đầu cho một trải nghiệm nghỉ dưỡng tuyệt vời!",
    aboutText: [
      "Nơi đây là điểm đến lý tưởng cho những ai đang tìm kiếm sự hoàn hảo trong mỗi chuyến đi cũng như chuẩn mực kiến trúc khách sạn 5 sao đương đại.",
      "Vị trí đắc địa của chúng tôi nằm ngay tại trái tim thành phố, được thiết kế và thi công đồng bộ từ kết cấu mặt dựng kính Low-E, cảnh quan hồ bơi tràn viền cho đến nội thất gỗ óc chó sang trọng, giúp quý khách tận hưởng trọn vẹn từng khoảnh khắc.",
    ],
  },
  header: {
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "GIỚI THIỆU", href: "#gioi-thieu" },
      { label: "DANH SÁCH PHÒNG", href: "#danh-sach-phong" },
      { label: "DỊCH VỤ", href: "#dich-vu", hasDropdown: true },
      { label: "TIN TỨC", href: "#tin-tuc" },
      { label: "LIÊN HỆ", href: "#lien-he" },
    ],
    bookCta: "ĐẶT PHÒNG NGAY",
  },
  hero: {
    eyebrow: "KIẾN TRÚC & KHÔNG GIAN KHÁCH SẠN 5 SAO",
    title: "Hòa mình vào thiên đường nghỉ dưỡng khách sạn sang trọng",
    subtitle: "Nơi mang đến trải nghiệm sang trọng và đẳng cấp",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#danh-sach-phong",
    backgroundImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
  },
  aboutSection: {
    eyebrow: "GIỚI THIỆU",
    heading: "Nơi khởi đầu cho một trải nghiệm nghỉ dưỡng tuyệt vời!",
    leadText:
      "Nơi đây là điểm đến lý tưởng cho những ai đang tìm kiếm sự hoàn hảo trong mỗi chuyến đi.",
    bodyText:
      "Vị trí đắc địa của chúng tôi nằm ngay tại trái tim thành phố, giúp bạn dễ dàng tiếp cận với các điểm tham quan nổi tiếng, nhà hàng, cửa hàng mua sắm và hoạt động giải trí sôi động. Công trình được kiến tạo bởi đội ngũ kiến trúc sư hàng đầu với tiêu chuẩn cách âm, chiếu sáng tự nhiên và vật liệu sinh thái bền vững.",
    primaryImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
    architecturalHighlights: [
      { label: "Tổng diện tích sàn xây dựng", value: "18.500 m²" },
      { label: "Tiêu chuẩn thiết kế & vận hành", value: "5 Sao Quốc Tế" },
      { label: "Tổ hợp phòng & Penthouse", value: "168 Phòng" },
    ],
  },
  amenitiesSection: {
    eyebrow: "DỊCH VỤ CHUYÊN NGHIỆP",
    heading: "Các dịch vụ tiện nghi",
    items: [
      {
        id: "am-1",
        title: "Đưa đón",
        description:
          "Dịch vụ đưa đón tiện lợi từ sân bay đến khách sạn và ngược lại bằng dòng xe Limousine sang trọng, đảm bảo hành trình êm ái.",
        iconName: "shuttle",
      },
      {
        id: "am-2",
        title: "Chỗ đậu xe",
        description:
          "Tầng hầm đỗ xe thông minh rộng rãi và an ninh 24/7, tích hợp trạm sạc xe điện hiện đại trong suốt thời gian lưu trú.",
        iconName: "parking",
      },
      {
        id: "am-3",
        title: "Dịch vụ phòng",
        description:
          "Chăm sóc và dọn dẹp phòng nghỉ 2 lần/ngày theo tiêu chuẩn khách sạn 5 sao quốc tế, giữ không gian luôn tinh tươm.",
        iconName: "room-service",
      },
      {
        id: "am-4",
        title: "Hồ bơi",
        description:
          "Hồ bơi vô cực nước ấm tràn viền với hệ thống lọc khoáng sinh học và không gian ghế tắm nắng thư giãn tuyệt đối.",
        iconName: "pool",
      },
      {
        id: "am-5",
        title: "Internet cáp quang",
        description:
          "Kết nối Internet cáp quang Wi-Fi 6 tốc độ cao phủ sóng toàn bộ khuôn viên khách sạn và khu vực hội nghị.",
        iconName: "wifi",
      },
      {
        id: "am-6",
        title: "Bữa ăn sáng",
        description:
          "Khởi đầu ngày mới đầy năng lượng với thực đơn Buffet Á - Âu hơn 60 món tươi ngon và đặc sản bản địa chọn lọc.",
        iconName: "breakfast",
      },
    ],
  },
  roomsSection: {
    eyebrow: "PHÒNG TỐT CHO NGHỈ DƯỠNG",
    heading: "Phòng nghỉ đẳng cấp",
    rooms: [
      {
        id: "room-single-2",
        name: "Single Room 2",
        beds: 2,
        baths: 1,
        area: "36 m²",
        perk: "Bãi đỗ xe",
        pricePerDay: "1,000,000đ",
        numericPrice: 1000000,
        maxGuests: 2,
        architecturalStyle: "Minimalist Contemporary (Hiện đại Tối giản)",
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
        description:
          "Không gian phòng tiêu chuẩn cao cấp được thiết kế mở với hệ cửa kính kịch trần đón nắng tự nhiên, sàn gỗ sồi ấm áp và nội thất tối ưu công năng.",
        features: [
          "Hệ thống điều hòa âm trần Daikin Inverter siêu tĩnh",
          "Cửa kính hộp 2 lớp cách âm tuyệt đối chuẩn khách sạn 5 sao",
          "Phòng tắm vách kính cường lực & thiết bị vệ sinh Kohler",
          "Ban công hướng công viên nội khu thoáng đãng",
        ],
      },
      {
        id: "room-vip",
        name: "VIP Room",
        beds: 2,
        baths: 2,
        area: "55 m²",
        perk: "Car Parking",
        pricePerDay: "3,000,000đ",
        numericPrice: 3000000,
        maxGuests: 4,
        architecturalStyle: "Neo-Classic Luxury Suite (Bán cổ điển Hạng sang)",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
        description:
          "Tuyệt tác kiến trúc nội thất dành cho doanh nhân và gia đình thượng lưu với phòng khách tách biệt, bồn tắm nằm đá cẩm thạch và tầm nhìn Panorama toàn cảnh thành phố.",
        features: [
          "Phòng khách Lounge riêng biệt ốp gỗ veneer óc chó Bắc Mỹ",
          "Bồn tắm Jacuzzi đá tự nhiên & hệ thống chiếu sáng thông minh",
          "Đặc quyền sử dụng Executive Sky Lounge & đưa đón sân bay",
          "2 phòng tắm chuẩn Spa với bộ mỹ phẩm hữu cơ cao cấp",
        ],
      },
      {
        id: "room-vintage",
        name: "Vintage Room",
        beds: 1,
        baths: 1,
        area: "48 m²",
        perk: "Motorcycle / Car",
        pricePerDay: "1,100,000đ",
        numericPrice: 1100000,
        maxGuests: 3,
        architecturalStyle: "Indochine Boutique Heritage (Đông Dương Đương đại)",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
        description:
          "Sự giao thoa tinh tế giữa nét hoài cổ Đông Dương và tiện nghi hiện đại. Từng chi tiết gạch bông thủ công, mây đan mắt cáo và ánh đèn vàng ấm tạo nên cảm xúc khó quên.",
        features: [
          "Khu vực sofa đọc sách cạnh khung cửa sổ vòm nghệ thuật",
          "Nội thất gỗ tự nhiên chế tác thủ công kết hợp đồng thau",
          "Hệ thống âm thanh Bluetooth Marshall & quầy Minibar riêng",
          "Trọn gói bữa sáng Buffet và trà chiều tại sảnh sân vườn",
        ],
      },
    ],
  },
  testimonialsSection: {
    eyebrow: "ĐÁNH GIÁ CHẤT LƯỢNG",
    heading: "TRẢI NGHIỆM KHÁCH HÀNG",
  },
  testimonials: [
    {
      id: "tes-1",
      name: "Hào Lê",
      role: "CEO Themforest & Chủ đầu tư BĐS",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Khách sạn này thực sự là một điểm đến đáng để ghé thăm! Dịch vụ đưa đón từ sân bay rất thuận tiện và nhân viên rất thân thiện. Thiết kế kiến trúc phòng nghỉ cực kỳ sang trọng, cách âm tuyệt vời và hồ bơi vô cực đẹp xuất sắc!",
    },
    {
      id: "tes-2",
      name: "Bạch Ngân",
      role: "CTO Themforest & Kiến trúc sư Nội thất",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Khách sạn này thực sự là một điểm đến đáng để ghé thăm! Từng đường nét thi công nội thất, ánh sáng hành lang cho đến khu vực nhà hàng và Spa đều đạt độ hoàn thiện chuẩn 5 sao quốc tế. Tôi chắc chắn sẽ quay lại!",
    },
    {
      id: "tes-3",
      name: "Linh Linh",
      role: "CEO chuỗi Boutique Resort",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Khách sạn này thực sự là một điểm đến đáng để ghé thăm! Dịch vụ đưa đón từ sân bay rất thuận tiện và nhân viên rất thân thiện. Phòng nghỉ rất sạch sẽ và thoải mái. Hồ bơi tuyệt vời và tôi đã có một bữa sáng ngon lành!",
    },
  ],
  chessServices: [
    {
      id: "chess-gym",
      eyebrow: "DỊCH VỤ CHẤT LƯỢNG",
      title: "Phòng gym",
      quote:
        "Trang bị đầy đủ các thiết bị hiện đại và chuyên nghiệp, không gian rộng rãi, bạn có thể tập luyện và rèn luyện cơ thể một cách hiệu quả.",
      detail:
        "Khu phức hợp Fitness Center rộng 450m² tại tầng 3 được thiết kế mặt kính hướng vườn treo, trang bị 100% máy tập Technogym nhập khẩu Ý cùng huấn luyện viên cá nhân (PT) túc trực hướng dẫn.",
      openingHours: "05:30 – 22:30 hàng ngày",
      locationFloor: "Tầng 3 — Khu Sky Wellness",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chess-restaurant",
      eyebrow: "DỊCH VỤ CHẤT LƯỢNG",
      title: "Nhà hàng",
      quote:
        "Với thực đơn đa dạng từ các món ăn địa phương đến ẩm thực quốc tế, bạn sẽ được thưởng thức các món ăn tươi ngon và hương vị độc đáo.",
      detail:
        "Nhà hàng La Maison với sức chứa 220 thực khách sở hữu kiến trúc trần cao 6m, đèn chùm pha lê Tiệp Khắc và khu bếp mở (Open Kitchen) phục vụ ẩm thực Fine Dining Âu - Á.",
      openingHours: "06:00 – 23:00 hàng ngày",
      locationFloor: "Tầng Trệt & Sân thượng Sân Vườn",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chess-spa",
      eyebrow: "DỊCH VỤ CHẤT LƯỢNG",
      title: "Spa",
      quote:
        "Trong không gian yên tĩnh và thư giãn của spa, bạn có thể tận hưởng các liệu pháp spa tuyệt vời để làm dịu cơ thể và tinh thần.",
      detail:
        "Tổ hợp trị liệu Mona Zen Spa sử dụng vật liệu đá bazan tự nhiên, gỗ tuyết tùng và tinh dầu thảo mộc hữu cơ, bao gồm phòng xông hơi đá muối Himalaya, bể sục Onsen và 12 phòng trị liệu VIP.",
      openingHours: "09:00 – 22:00 hàng ngày",
      locationFloor: "Tầng 4 — Khu Trị Liệu Tĩnh Tâm",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chess-pool",
      eyebrow: "DỊCH VỤ CHẤT LƯỢNG",
      title: "Hồ bơi",
      quote:
        "Với nước trong xanh và không gian xung quanh thoáng đãng, bạn có thể tắm nắng, tập thể dục hoặc đơn giản là thư giãn trong nước.",
      detail:
        "Hồ bơi vô cực tràn viền dài 35m trên tầng thượng với kết cấu đáy kính cường lực độc đáo, tích hợp Pool Bar phục vụ cocktail nhiệt đới ngắm hoàng hôn toàn cảnh thành phố.",
      openingHours: "06:00 – 21:00 hàng ngày",
      locationFloor: "Tầng Thượng (Rooftop Infinity Pool)",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    },
  ],
  blogSection: {
    eyebrow: "TIN TỨC & BLOG",
    heading: "Trải nghiệm tuyệt vời",
    posts: [
      {
        id: "blog-1",
        title: "Xu hướng thiết kế kiến trúc khách sạn xanh & nghỉ dưỡng sinh thái",
        category: "Travel & Architecture",
        commentsCount: 0,
        date: "18/05/2025",
        excerpt:
          "Khám phá giải pháp kiến trúc mặt dựng thông gió tự nhiên, sử dụng vật liệu bản địa và hệ thống tiết kiệm năng lượng chuẩn LEED trong các tổ hợp khách sạn 5 sao...",
        content:
          "Trong kỷ nguyên du lịch bền vững, kiến trúc khách sạn cao cấp không chỉ dừng lại ở vẻ đẹp xa hoa mà còn chú trọng vào trải nghiệm giao hòa cùng thiên nhiên. Tại Mona Hotel, 45% diện tích dự án được dành cho mảng xanh cảnh quan, mặt nước điều hòa vi khí hậu và hệ kính cản nhiệt Low-E giúp giảm 35% điện năng tiêu thụ.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "blog-2",
        title: "Cẩm nang chuẩn bị hành lý & tận hưởng kỳ nghỉ thượng lưu trọn vẹn",
        category: "Travel",
        commentsCount: 2,
        date: "12/05/2025",
        excerpt:
          "Bí quyết sắp xếp lịch trình nghỉ dưỡng kết hợp chăm sóc sức khỏe Spa, thưởng thức ẩm thực Fine Dining và khám phá văn hóa bản địa ngay trung tâm thành phố...",
        content:
          "Một kỳ nghỉ hoàn hảo bắt đầu từ việc lựa chọn không gian lưu trú phù hợp nhu cầu. Với các gói dịch vụ cá nhân hóa tại Mona Hotel, quý khách được hỗ trợ từ khâu đưa đón sân bay bằng xe Limousine, check-in riêng tại phòng VIP Suite cho đến thực đơn bữa sáng thiết kế theo chế độ dinh dưỡng riêng.",
        image:
          "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "blog-3",
        title: "Hướng dẫn đặt phòng trực tuyến & nhận đặc quyền nâng hạng VIP Suite",
        category: "Travel",
        commentsCount: 5,
        date: "05/05/2025",
        excerpt:
          "Đặt phòng trực tiếp trên hệ thống website chính thức của Mona Hotel để nhận ưu đãi miễn phí đưa đón sân bay, tặng kèm voucher Spa và nâng hạng phòng tự động...",
        content:
          "Khi đặt phòng trực tuyến qua cổng thông tin chính thức của Mona Hotel, hệ thống sẽ tự động kiểm tra tình trạng phòng trống theo thời gian thực và áp dụng mức giá ưu đãi tới 20% so với các kênh OTA trung gian, đồng thời tặng kèm gói trà chiều tại khu vườn nhiệt đới.",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  footer: {
    description:
      "Chúng tôi khởi nguồn xây dựng và vận hành chuỗi khách sạn tiêu chuẩn quốc tế từ năm 1995. Đến nay, Mona Hotel tự hào là biểu tượng kiến trúc nghỉ dưỡng và dịch vụ lưu trú hàng đầu.",
    quickLinks: [
      { label: "Giới thiệu", href: "#gioi-thieu" },
      { label: "Liên hệ", href: "#lien-he" },
      { label: "Điều khoản & Chính sách", href: "#danh-sach-phong" },
      { label: "Trung tâm Hỗ trợ 24/7", href: "#dich-vu" },
    ],
    mapLinkText: "Xem Google Map",
    copyright: "© Thiết kế và lập trình bởi MONA.Media / Website Khách Sạn XD029",
  },
};
