import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface HowelloResortService {
  id: string;
  title: string;
  schedule: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface HowelloResortRoom {
  id: string;
  name: string;
  priceUsd: string;
  priceVnd: string;
  area: string;
  capacity: string;
  view: string;
  image: string;
  description: string;
  amenities: string[];
}

export interface HowelloNewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullText: string;
  image: string;
}

export interface HowelloHighlightEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
}

export interface XayDung32Data extends ClonedTemplateBaseData {
  header: {
    brandMain: string;
    brandSub: string;
    navItems: { label: string; href: string }[];
    ctaLabel: string;
  };
  heroBookingForm: {
    formTitle: string;
    submitLabel: string;
    guestOptions: string[];
  };
  attractiveServicesSection: {
    highlightWord: string;
    normalWord: string;
    subtitle: string;
    items: HowelloResortService[];
  };
  modernRoomsSection: {
    highlightWord: string;
    normalWord: string;
    subtitle: string;
    viewAllLabel: string;
    rooms: HowelloResortRoom[];
  };
  paradiseBanner: {
    heading: string;
    description: string;
    backgroundImage: string;
  };
  newsAndEventsSection: {
    newsHighlightWord: string;
    newsNormalWord: string;
    eventsHighlightWord: string;
    eventsNormalWord: string;
    articles: HowelloNewsArticle[];
    events: HowelloHighlightEvent[];
  };
  footer: {
    description: string;
    skypeHandle: string;
    galleryImages: string[];
    copyright: string;
  };
}

export const defaultData: XayDung32Data = {
  business: {
    name: "MONA MEDIA Resorts",
    tagline: "Kiến Trúc & Thi Công Tổ Hợp Biệt Thự Nghỉ Dưỡng Biển Howello",
    phone: ["076 922 0162", "0909 686 888"],
    email: ["demonhunterg@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "24/7 — Đặt phòng Villa & Tư vấn Đầu tư",
    rating: 4.9,
    reviewCount: 430,
    aboutTitle: "THIÊN ĐƯỜNG NGHỈ DƯỠNG BIỂN NHIỆT ĐỚI",
    aboutText: [
      "Đến với Khu nghỉ dưỡng Premier Village Mona Media, quý khách sẽ được trải nghiệm dịch vụ Spa cao cấp, trung tâm thể hình hiện đại và các hoạt động giải trí trên biển cùng kiến trúc biệt thự hướng biển độc bản.",
    ],
  },
  header: {
    brandMain: "MONA MEDIA",
    brandSub: "Resorts",
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "GIỚI THIỆU", href: "#thien-duong" },
      { label: "PHÒNG", href: "#phong-nghi" },
      { label: "TIN TỨC", href: "#tin-tuc" },
      { label: "LIÊN HỆ", href: "#lien-he" },
    ],
    ctaLabel: "ĐẶT PHÒNG",
  },
  hero: {
    eyebrow: "PREMIER VILLAGE & OCEANFRONT RESORT ARCHITECTURE",
    title: "Kiệt Tác Biệt Thự Nghỉ Dưỡng Giữa Lòng Đại Dương",
    subtitle:
      "Tổ hợp Villa sinh thái mặt biển với thiết kế mở đón trọn gió biển và nắng ấm nhiệt đới",
    ctaText: "ĐẶT PHÒNG",
    ctaLink: "#phong-nghi",
    backgroundImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=85",
  },
  heroBookingForm: {
    formTitle: "ĐẶT PHÒNG",
    submitLabel: "GỬI",
    guestOptions: [
      "01 Người lớn",
      "02 Người lớn (Cặp đôi)",
      "Gia đình (2 Người lớn + 2 Trẻ em)",
      "Đoàn Villa (6 - 10 Khách)",
    ],
  },
  attractiveServicesSection: {
    highlightWord: "DỊCH VỤ",
    normalWord: "HẤP DẪN",
    subtitle:
      "Đến với Khu nghỉ dưỡng Premier Village Mona Media, quý khách sẽ được trải nghiệm dịch vụ Spa cao cấp, trung tâm thể hình hiện đại và các hoạt động giải trí trên biển",
    items: [
      {
        id: "srv-restaurant",
        title: "Nhà hàng",
        schedule: "06:00 – 23:00 hàng ngày",
        location: "Khu Biệt Thự Mặt Biển & Teppanyaki Pavilion",
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        description:
          "Trải nghiệm nghệ thuật trình diễn ẩm thực lửa Teppanyaki và hải sản tươi sống đánh bắt trong ngày tại không gian nhà hàng gỗ tre hướng thẳng ra vịnh biển.",
        highlights: [
          "Trình diễn chế biến Teppanyaki & Flambé tại bàn bởi Bếp trưởng 5 sao",
          "Hầm rượu vang dưới lòng đất với hơn 180 nhãn vang danh tiếng",
          "Tiệc BBQ hải sản bãi biển riêng tư dưới ánh hoàng hôn",
        ],
      },
      {
        id: "srv-spa",
        title: "Spa & Massage",
        schedule: "08:30 – 22:00 hàng ngày",
        location: "Ốc Đảo Sen — Khu Vườn Nhiệt Đới",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
        description:
          "Các chòi trị liệu Spa nổi trên mặt hồ sen với kiến trúc mái tranh sinh thái, mang lại liệu trình phục hồi năng lượng bằng đá nóng núi lửa và thảo dược bản địa.",
        highlights: [
          "10 Bungalow trị liệu riêng biệt nằm giữa hồ sen tĩnh lặng",
          "Liệu pháp massage đá nóng bazan & tinh dầu dừa nguyên chất",
          "Khu xông hơi thảo mộc, bồn sục Jacuzzi ngoài trời và lớp Yoga bình minh",
        ],
      },
      {
        id: "srv-parasailing",
        title: "Dù lượn",
        schedule: "07:30 – 17:30 hàng ngày",
        location: "Bãi Biển Riêng Howello Beach Club",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        description:
          "Thỏa sức chinh phục bầu trời và ngắm nhìn toàn cảnh quần thể kiến trúc biệt thự nghỉ dưỡng từ độ cao 80m với dịch vụ cano kéo dù lượn an toàn tuyệt đối.",
        highlights: [
          "Trang thiết bị dù bay & áo phao tiêu chuẩn an toàn quốc tế",
          "Đội ngũ huấn luyện viên thể thao biển chuyên nghiệp đi kèm",
          "Đa dạng hoạt động: Dù lượn đôi, mô tô nước Jetski, chèo SUP & lặn ngắm san hô",
        ],
      },
    ],
  },
  modernRoomsSection: {
    highlightWord: "PHÒNG NGHỈ",
    normalWord: "HIỆN ĐẠI",
    subtitle: "Chọn phòng phù hợp với bạn",
    viewAllLabel: "Xem tất cả",
    rooms: [
      {
        id: "room-silver",
        name: "SILVER ROOM",
        priceUsd: "50$",
        priceVnd: "1.250.000 ₫",
        area: "46 m²",
        capacity: "02 Người lớn + 01 Trẻ em",
        view: "Hướng Vườn Nhiệt Đới & Hồ Bơi",
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
        description:
          "Không gian nghỉ dưỡng hiện đại với cửa kính trượt lớn mở ra hiên tắm nắng riêng, kết hợp nội thất gỗ sáng màu và thảm dệt xanh biển tươi mát.",
        amenities: [
          "Giường King-size nệm cao su thiên nhiên êm ái",
          "Hiên nghỉ riêng hướng thẳng ra vườn cọ và hồ bơi trung tâm",
          "Miễn phí Buffet sáng và sử dụng phòng Gym & Hồ bơi vô cực",
        ],
      },
      {
        id: "room-platinum",
        name: "PLATINUM ROOM",
        priceUsd: "80$",
        priceVnd: "2.000.000 ₫",
        area: "72 m²",
        capacity: "04 Người lớn (2 Giường đôi lớn)",
        view: "Trực Diện Biển (Oceanfront Panorama)",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        description:
          "Hạng phòng cao cấp nhất dành cho gia đình hoặc nhóm bạn với ban công vòm nhìn thẳng ra bãi biển, trần cao thoáng đãng và phòng tắm bồn nằm sang trọng.",
        amenities: [
          "02 Giường Queen cỡ lớn & khu vực ghế nghỉ đọc sách cạnh cửa sổ",
          "Tặng gói đưa đón sân bay hai chiều & trà chiều tại Beach Club",
          "Ưu đãi giảm 30% dịch vụ Dù lượn và Spa trị liệu đá nóng",
        ],
      },
      {
        id: "room-bronze",
        name: "BRONZE ROOM",
        priceUsd: "40$",
        priceVnd: "1.000.000 ₫",
        area: "38 m²",
        capacity: "02 Người lớn",
        view: "Hướng Nội Khu Sinh Thái Ấm Cúng",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
        description:
          "Thiết kế ấm cúng với hệ lam gỗ trang trí nghệ thuật, ánh sáng vàng dịu nhẹ và đầy đủ tiện nghi chuẩn resort 5 sao với chi phí tối ưu nhất.",
        amenities: [
          "Không gian yên tĩnh tuyệt đối với hệ vách cách âm tiêu chuẩn",
          "Bàn làm việc kết hợp góc pha cà phê Espresso tại phòng",
          "Trọn gói bữa sáng tự chọn và xe điện di chuyển nội khu 24/7",
        ],
      },
    ],
  },
  paradiseBanner: {
    heading: "THIÊN ĐƯỜNG NGHỈ DƯỠNG",
    description:
      "Quý khách sẽ được ngắm ánh bình minh và chiều hoàng hôn trên bãi biển của khu nghỉ dưỡng, và tận hưởng những tiện nghi sang trọng bậc nhất tại đây. Đến với Khu nghỉ dưỡng Premier Village Đà Nẵng, quý khách sẽ được trải nghiệm dịch vụ Spa cao cấp, trung tâm thể hình hiện đại và các hoạt động giải trí trên biển.",
    backgroundImage:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85",
  },
  stats: [
    { id: "st-1", value: "712", label: "Khách mới" },
    { id: "st-2", value: "254", label: "Khách quốc tế" },
    { id: "st-3", value: "430", label: "Đánh giá 5 sao" },
    { id: "st-4", value: "50", label: "Nhân viên phục vụ" },
  ],
  newsAndEventsSection: {
    newsHighlightWord: "TIN TỨC",
    newsNormalWord: "MỚI NHẤT",
    eventsHighlightWord: "SỰ KIỆN",
    eventsNormalWord: "NỔI BẬT",
    articles: [
      {
        id: "art-vung-tau",
        title: "Thành phố biển Vũng Tàu — Điểm đến nghỉ dưỡng cuối tuần",
        date: "8 Tháng Ba, 2025",
        excerpt:
          "Những sắc màu của biển, của di tích, của lịch sử... pha trộn vào nhau tạo nên sức hút khó cưỡng cho tổ hợp biệt thự biển...",
        fullText:
          "Chỉ cách TP.HCM chưa đầy 2 giờ di chuyển qua cao tốc, tổ hợp nghỉ dưỡng biển tại Vũng Tàu mang đến không gian giao hòa giữa kiến trúc Địa Trung Hải hiện đại và bờ biển trải dài thơ mộng. Du khách có thể tận hưởng trọn vẹn kỳ nghỉ cuối tuần với hồ bơi tràn viền nước mặn, bến du thuyền riêng và lễ hội ẩm thực biển đêm thứ Bảy.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "art-phu-quoc",
        title: "Đảo ngọc Phú Quốc — Tuyệt tác kiến trúc Villa sinh thái",
        date: "8 Tháng Ba, 2025",
        excerpt:
          "Phú Quốc có nhiều bãi tắm đẹp với phong cảnh hoang sơ, trong lành thu hút hàng triệu du khách quốc tế và nhà đầu tư...",
        fullText:
          "Quần thể biệt thự nghỉ dưỡng tại Bãi Kem và Mũi Ông Đội (Phú Quốc) được thiết kế nương theo địa hình ghềnh đá tự nhiên và rừng nguyên sinh, đảm bảo 100% căn biệt thự đều sở hữu tầm nhìn hai mặt biển đón cả bình minh lẫn hoàng hôn tuyệt mỹ.",
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
      },
    ],
    events: [
      {
        id: "ev-1",
        title: "Đến Nha Trang, nhận ưu đãi lớn với gói Villa & Spa...",
        date: "Tháng 06/2025",
        location: "Khu Nghỉ Dưỡng Biển Nha Trang",
        summary:
          "Tặng ngay gói trị liệu Vincharm Spa 60 phút và vé vui chơi thể thao biển không giới hạn khi đặt từ 02 đêm nghỉ tại hệ thống phòng Platinum Room.",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "ev-2",
        title: "Gói dịch vụ Stay & Play: Chơi golf và nghỉ dưỡng tại khách sạn...",
        date: "Tháng 06 – 08/2025",
        location: "Sân Golf 18 Hố Ven Biển",
        summary:
          "Trọn gói 3 ngày 2 đêm nghỉ dưỡng hạng sang kết hợp 02 vòng Golf 18 hố tiêu chuẩn Championship thiết kế bởi huyền thoại quốc tế, bao gồm xe Buggy và Caddie riêng.",
        image:
          "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "ev-3",
        title: "Giới thiệu Khu du lịch sinh thái suối nước khoáng nóng Onsen...",
        date: "Mở cửa quanh năm",
        location: "Phân Khu Khoáng Nóng Tự Nhiên",
        summary:
          "Khánh thành tổ hợp tắm khoáng nóng Onsen chuẩn Nhật Bản nằm giữa rừng thông và suối đá tự nhiên, giúp thanh lọc cơ thể và phục hồi sức khỏe xương khớp.",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=80",
      },
    ],
  },
  footer: {
    description:
      "Đến với Khu nghỉ dưỡng Premier Village Mona Media, quý khách sẽ được trải nghiệm dịch vụ Spa cao cấp, trung tâm thể hình hiện đại và các hoạt động giải trí trên biển.",
    skypeHandle: "demonhunterp",
    galleryImages: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=300&q=80",
    ],
    copyright: "© Bản quyền thuộc về . Thiết kế website Mona Media - Resort XD032",
  },
};
