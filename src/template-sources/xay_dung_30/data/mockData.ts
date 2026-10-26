import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface HotecPromoCard {
  id: string;
  title: string;
  linkLabel: string;
  image: string;
  summary: string;
  highlights: string[];
}

export interface HotecNewsItem {
  id: string;
  day: string;
  month: string;
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
}

export interface HotecLuxuryRoom {
  id: string;
  title: string;
  category: "SANG TRỌNG" | "CẶP ĐÔI" | "GIA ĐÌNH" | "GIÁ RẺ";
  price: string;
  area: string;
  view: string;
  bedType: string;
  image: string;
  description: string;
  specs: string[];
}

export interface XayDung30Data extends ClonedTemplateBaseData {
  header: {
    topLinks: { label: string; href: string }[];
    brandMain: string;
    brandSub: string;
    navItems: { label: string; href: string; hasDropdown?: boolean }[];
    ctaButton: string;
  };
  promoCards: HotecPromoCard[];
  aboutTower: {
    heading: string;
    towerImage: string;
    paragraphs: string[];
    signatureText: string;
    keyMetrics: { label: string; value: string }[];
  };
  sidebarNews: {
    heading: string;
    items: HotecNewsItem[];
  };
  luxuryRoomsSection: {
    heading: string;
    rooms: HotecLuxuryRoom[];
  };
  newsletterBar: {
    promptText: string;
    placeholder: string;
    buttonLabel: string;
  };
  footer: {
    hotelColTitle: string;
    linksColTitle: string;
    roomTypesColTitle: string;
    galleryColTitle: string;
    roomCategories: string[];
    galleryImages: string[];
    copyright: string;
  };
}

export const defaultData: XayDung30Data = {
  business: {
    name: "HOTEC — MONA HOTELS & RESORTS",
    tagline: "Chủ Đầu Tư & Xây Dựng Tổ Hợp Khách Sạn 5 Sao Chuẩn Quốc Tế",
    phone: ["1900 636 648", "0126 922 0162"],
    email: ["demophunter@gmail.com", "info@hotecresort.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "24/7 — Đặt phòng & Tư vấn Khai thác Tổ hợp",
    rating: 4.9,
    reviewCount: 333,
    aboutTitle: "KHÁCH SẠN LUXURY VÀ BOUTIQUE",
    aboutText: [
      "Khách sạn MONA HOTEC là tổ hợp khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim thương mại và kiến trúc của TP. Hồ Chí Minh.",
      "Quý khách chỉ mất 35 phút lái xe từ khách sạn tới sân bay Quốc tế Tân Sơn Nhất và 8 phút để tới khu trung tâm thương mại, hội nghị và giải trí của thành phố. Với 333 phòng tiêu chuẩn và phòng hạng sang được thiết kế và thi công tỉ mỉ tới từng chi tiết, công trình mang lại sự tiện nghi và thoải mái tối đa cho cả kỳ nghỉ dưỡng lẫn chuyến công tác thượng lưu.",
    ],
  },
  header: {
    topLinks: [
      { label: "DỰ ÁN", href: "#khach-san-luxury" },
      { label: "ĐẶT PHÒNG", href: "#phong-luxury" },
      { label: "GIỚI THIỆU", href: "#khach-san-luxury" },
    ],
    brandMain: "MONA",
    brandSub: "★ HOTELS & RESORTS ★",
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "LOẠI PHÒNG", href: "#phong-luxury", hasDropdown: true },
      { label: "TIN TỨC", href: "#tin-tuc-mona" },
      { label: "GIỚI THIỆU", href: "#khach-san-luxury" },
      { label: "LIÊN HỆ", href: "#lien-he" },
    ],
    ctaButton: "ĐẶT PHÒNG",
  },
  hero: {
    eyebrow: "TỔ HỢP KIẾN TRÚC KHÁCH SẠN & TRUNG TÂM HỘI NGHỊ QUỐC TẾ",
    title: "SANG TRỌNG KÍN ĐÁO & HÀI HÒA PHƯƠNG ĐÔNG",
    subtitle:
      "333 phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết",
    ctaText: "ĐẶT PHÒNG NGAY",
    ctaLink: "#phong-luxury",
    backgroundImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85",
  },
  promoCards: [
    {
      id: "promo-1",
      title: "CHỌN HOTEC ĐỂ CÓ 1 KỲ NGHỈ TUYỆT VỜI",
      linkLabel: "Xem thêm về Hotec +",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      summary:
        "Tổ hợp nghỉ dưỡng và lưu trú doanh nhân với kiến trúc Á Đông đương đại, kết hợp hệ thống cách âm 3 lớp và không gian xanh tĩnh lặng giữa lòng đô thị.",
      highlights: [
        "333 phòng nghỉ và Suite tổng thống tầm nhìn Panorama thành phố",
        "Hệ thống điều khiển ánh sáng & rèm tự động Smart-Room",
        "Hồ bơi nước ấm bốn mùa và khu vườn thiền phương Đông",
      ],
    },
    {
      id: "promo-2",
      title: "THƯỞNG THỨC BUFFET HOTEC MỖI SÁNG",
      linkLabel: "Xem thêm về Hotec +",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
      summary:
        "Chuỗi nhà hàng ẩm thực 5 sao được thiết kế không gian bếp mở hiện đại, phục vụ hơn 80 món Buffet Á - Âu chế biến trực tiếp bởi Bếp trưởng quốc tế.",
      highlights: [
        "Nguyên liệu hữu cơ tươi sạch nhập khẩu trực tiếp mỗi ngày",
        "Phòng VIP Dining riêng biệt dành cho tiếp khách ngoại giao",
        "Quầy Sky Lounge & Cigar Bar tại tầng 42 của tòa tháp",
      ],
    },
    {
      id: "promo-3",
      title: "CHECK GIÁ VÀ ĐẶT PHÒNG ĐƠN GIẢN",
      linkLabel: "Xem thêm về Hotec +",
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80",
      summary:
        "Hệ thống tra cứu giá phòng, hội trường sự kiện và xác nhận đặt chỗ tự động trong 30 giây cùng chính sách hoàn hủy linh hoạt dành cho khách đoàn & doanh nghiệp.",
      highlights: [
        "Báo giá minh bạch trọn gói đã bao gồm Buffet sáng & Spa",
        "Tổ hợp 6 phòng họp Hội nghị Quốc tế sức chứa đến 800 khách",
        "Ưu đãi 25% cho đối tác doanh nghiệp ký hợp đồng lưu trú dài hạn",
      ],
    },
  ],
  aboutTower: {
    heading: "KHÁCH SẠN LUXURY VÀ BOUTIQUE",
    towerImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    paragraphs: [
      "Khách sạn MONA là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Quý khách chỉ mất 35 phút lái xe từ khách sạn tới sân bay Tân Sơn Nhất, 8 phút để tới khu trung tâm thương mại và giải trí của thành phố.",
      "Với 333 phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết kết cấu, mặt dựng kính phản quang và nội thất gỗ tự nhiên sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác.",
    ],
    signatureText: "Mona hotels & resorts",
    keyMetrics: [
      { label: "Quy mô tòa tháp", value: "45 Tầng nổi" },
      { label: "Tổng số phòng hạng sang", value: "333 Phòng" },
      { label: "Trung tâm hội nghị", value: "2.400 m²" },
    ],
  },
  sidebarNews: {
    heading: "TIN TỨC VỀ MONA",
    items: [
      {
        id: "news-hotec-1",
        day: "07",
        month: "Th12",
        title: "Tổng quan về kiến trúc & quy hoạch MONA Hotel",
        excerpt:
          "1. Tổ hợp tháp khách sạn tọa lạc tại vị trí kim cương với thiết kế mặt dựng kính hiện đại...",
        fullContent:
          "Dự án MONA Hotel & Resort (Hotec Tower) được quy hoạch theo mô hình phức hợp Khách sạn 5 sao - Trung tâm Hội nghị Quốc tế - Sky Bar. Công trình ứng dụng công nghệ thi công lõi cứng bê tông cốt thép dự ứng lực và hệ mặt dựng nhôm kính Unitized cách âm, cách nhiệt tiêu chuẩn Châu Âu.",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "news-hotec-2",
        day: "06",
        month: "Th12",
        title: "Đà Lạt & Vũng Tàu : Cẩm nang nghỉ dưỡng từ A – Z",
        excerpt:
          "Tổng quan chuỗi resort liên kết nghỉ dưỡng cách trung tâm thành phố Hồ Chí Minh...",
        fullContent:
          "Bên cạnh tòa tháp khách sạn trung tâm tại TP.HCM, hệ sinh thái Hotec còn sở hữu chuỗi biệt thự nghỉ dưỡng sinh thái tại Đà Lạt và Vũng Tàu, mang đến đặc quyền trao đổi kỳ nghỉ linh hoạt cho chủ thẻ thành viên hạng Kim Cương.",
        image:
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "news-hotec-3",
        day: "06",
        month: "Th12",
        title: "Trải nghiệm không gian sang trọng tại MONA Oriental Suite",
        excerpt:
          "Tổng quan thiết kế nội thất giao thoa phong cách Á Đông và tiện nghi đương đại...",
        fullContent:
          "Hạng phòng Oriental Suite tại tầng 35-40 của tòa tháp gây ấn tượng mạnh với vách ngăn gỗ chạm khắc thủ công, bồn tắm hướng thẳng ra đường chân trời thành phố và dịch vụ Quản gia riêng (Personal Butler) phục vụ 24/24.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  luxuryRoomsSection: {
    heading: "PHÒNG LUXURY",
    rooms: [
      {
        id: "lux-oriental",
        title: "CLUB DELUXE ROOM – ORIENTAL SUITE",
        category: "SANG TRỌNG",
        price: "500,000 ₫",
        area: "52 m²",
        view: "Hướng toàn cảnh trung tâm Quận 1",
        bedType: "01 Giường King cỡ lớn + Sofa Lounge",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        description:
          "Không gian nghỉ dưỡng mang đậm triết lý thiền định Phương Đông với sàn gỗ tếch tự nhiên, khu vực thư giãn榻榻米 (Tatami) hiện đại và phòng xông hơi riêng.",
        specs: [
          "Diện tích 52m² tại các tầng cao (Tầng 28 – 36)",
          "Miễn phí sử dụng Executive Club Lounge & Trà chiều",
          "Phòng tắm đá cẩm thạch tích hợp bồn sục thủy lực",
        ],
      },
      {
        id: "lux-two-queen",
        title: "LUXURY ROOM – TWO QUEEN BED",
        category: "GIA ĐÌNH",
        price: "1,000,000 ₫",
        area: "68 m²",
        view: "Hướng đại lộ & Hồ bơi tràn viền",
        bedType: "02 Giường Queen cao cấp",
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
        description:
          "Thiết kế sang trọng với phòng khách tiếp khách riêng biệt, bộ sofa hoàng gia và 2 giường đôi cỡ lớn, lý tưởng cho gia đình hoặc đoàn chuyên gia công tác.",
        specs: [
          "Diện tích 68m² với khu vực tiếp khách & bàn làm việc lớn",
          "Hệ thống âm thanh vòm giải trí & Smart TV 65 inch",
          "Trọn gói Buffet sáng cho 04 người lớn",
        ],
      },
      {
        id: "lux-one-king",
        title: "STANDARD ROOM – ONE KING BED",
        category: "CẶP ĐÔI",
        price: "1,000,000 ₫",
        area: "44 m²",
        view: "Ban công riêng hướng Vườn treo",
        bedType: "01 Giường King Luxury",
        image:
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        description:
          "Phòng nghỉ tiêu chuẩn 5 sao với ban công kính rộng mở đón gió trời, rèm voan hai lớp lãng mạn và nội thất gỗ ấm cúng tinh tế.",
        specs: [
          "Diện tích 44m² có ban công ghế nghỉ riêng tư",
          "Giường nệm lông vũ tiêu chuẩn khách sạn 5 sao quốc tế",
          "Tặng kèm gói Welcome Fruit & rượu vang thượng hạng",
        ],
      },
    ],
  },
  newsletterBar: {
    promptText: "Đăng kí để nhận được ưu đãi đặc biệt :",
    placeholder: "Email của bạn",
    buttonLabel: "THEO DÕI",
  },
  footer: {
    hotelColTitle: "KHÁCH SẠN HOTEC",
    linksColTitle: "LIÊN KẾT TRANG WEB",
    roomTypesColTitle: "LOẠI PHÒNG",
    galleryColTitle: "BỘ SƯU TẬP",
    roomCategories: ["SANG TRỌNG", "CẶP ĐÔI", "GIA ĐÌNH", "GIÁ RẺ"],
    galleryImages: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=300&q=80",
    ],
    copyright: "© All rights reserved. Thiết kế website Mona Media - Hotec XD030",
  },
};
