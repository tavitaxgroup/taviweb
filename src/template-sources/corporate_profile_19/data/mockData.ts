import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface BestSellerTourItem {
  id: string;
  category: string;
  title: string;
  price: string;
  duration: string;
  transport: string;
  image: string;
  stampText: string;
}

export interface PopularDestinationCard {
  id: string;
  cityTitle: string;
  subtitle: string;
  price: string;
  image: string;
  badgeText?: string;
}

export interface WhyChooseReasonItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TravelGuidePostItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface CustomerReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface GalleryPhotoItem {
  id: string;
  title: string;
  location: string;
  image: string;
}

export interface PartnerBrandItem {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
}

export interface CorporateProfile19Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  topbar: {
    address: string;
    email: string;
    phone: string;
    ctaLabel: string;
  };
  navigation: {
    label: string;
    href: string;
    hasDropdown?: boolean;
    badge?: string;
  }[];
  heroSlides: {
    id: string;
    subtitle: string;
    title: string;
    description: string;
    ctaText: string;
    image: string;
  }[];
  searchFilterOptions: {
    categories: string[];
    priceRanges: string[];
    durations: string[];
    departures: string[];
  };
  bestSellerTours: BestSellerTourItem[];
  countdownPromo: {
    title: string;
    highlight: string;
    subtitle: string;
    backgroundImage: string;
    ctaLabel: string;
    initialHours: number;
    initialMinutes: number;
    initialSeconds: number;
  };
  popularDestinations: PopularDestinationCard[];
  whyChooseReasons: WhyChooseReasonItem[];
  whyChooseBgImage: string;
  travelGuides: TravelGuidePostItem[];
  customerReviews: CustomerReviewItem[];
  reviewsBgImage: string;
  paradiseGallery: GalleryPhotoItem[];
  newsletterBanner: {
    title: string;
    placeholder: string;
    backgroundImage: string;
  };
  partnerBrands: PartnerBrandItem[];
  footerPopularThumbnails: string[];
}

export const corporateProfile19MockData: CorporateProfile19Data = {
  templateKey: "corporate_profile_19",
  business: {
    name: "MONA Travel — Trabble Corp",
    tagline: "Mở mang tầm mắt cùng MONA Travel — Khám phá thế giới & Kết nối giao thương toàn cầu",
    description:
      "Hệ thống đặt tour du lịch trong nước, quốc tế, dịch vụ lữ hành thương mại và vận tải hành khách chất lượng cao uy tín hàng đầu Việt Nam.",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["demonhunterg@gmail.com", "booking@monatravel.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    website: "https://monatravel.monamedia.net",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 21:30 (Hỗ trợ đặt tour 24/7)",
    taxCode: "0315894210",
  },
  topbar: {
    address: "319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM",
    email: "demonhunterg@gmail.com",
    phone: "076 922 0162",
    ctaLabel: "Đặt Tour Online",
  },
  navigation: [
    { label: "TOUR NỘI ĐỊA", href: "#tour-mua-nhieu", hasDropdown: true },
    { label: "GIỚI THIỆU", href: "#ly-do-chon" },
    { label: "TOUR NƯỚC NGOÀI", href: "#diem-den-pho-bien", hasDropdown: true, badge: "HOT" },
    { label: "TIN TỨC", href: "#cam-nang-du-lich" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ],
  hero: {
    badge: "MỞ MANG TẦM MẮT CÙNG MONA TRAVEL",
    title: "KHÁM PHÁ THẾ GIỚI",
    subtitle:
      "Hơn 350+ hành trình du lịch khám phá châu Á, châu Âu, châu Mỹ và thiên đường biển đảo Việt Nam với mức giá trọn gói ưu đãi nhất.",
    primaryCta: "CHỌN TOUR",
    secondaryCta: "ĐẶT TOUR ONLINE",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  },
  heroSlides: [
    {
      id: "slide-1",
      subtitle: "Mở mang tầm mắt cùng MONA Travel",
      title: "KHÁM PHÁ THẾ GIỚI",
      description:
        "Trải nghiệm kỳ nghỉ thiên đường tại những vịnh biển ngọc bích, danh thắng kỳ vĩ và các thành phố sôi động bậc nhất năm châu.",
      ctaText: "CHỌN TOUR",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    },
    {
      id: "slide-2",
      subtitle: "Hành trình đẳng cấp 5 sao quốc tế",
      title: "CHÂU ÂU HOA LỆ",
      description:
        "Khám phá Pháp - Thụy Sĩ - Ý - Vatican 10 ngày 9 đêm bay thẳng hàng không Quốc gia, khách sạn trung tâm tiêu chuẩn 4-5 sao.",
      ctaText: "CHỌN TOUR",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1800&q=85",
    },
    {
      id: "slide-3",
      subtitle: "Kỳ nghỉ biển đảo nhiệt đới tuyệt mỹ",
      title: "THIÊN ĐƯỜNG BIỂN ĐẢO",
      description:
        "Tận hưởng làn nước trong vắt tại Phú Quốc, Côn Đảo, Nha Trang và Vịnh Hạ Long cùng dịch vụ nghỉ dưỡng trọn gói cao cấp.",
      ctaText: "CHỌN TOUR",
      image:
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1800&q=85",
    },
  ],
  searchFilterOptions: {
    categories: [
      "Danh mục",
      "Du lịch Châu Á",
      "Du lịch Châu Âu",
      "Du lịch Châu Mỹ",
      "Du lịch Canada - Anh",
      "Tour Nội Địa Đặc Sắc",
    ],
    priceRanges: [
      "Giá",
      "Dưới 10.000.000 ₫",
      "10.000.000 ₫ - 30.000.000 ₫",
      "30.000.000 ₫ - 60.000.000 ₫",
      "Trên 60.000.000 ₫",
    ],
    durations: [
      "Số ngày",
      "2 Ngày 1 Đêm",
      "4 Ngày 3 Đêm",
      "5 Ngày 4 Đêm",
      "7 Ngày 6 Đêm",
      "10 Ngày 9 Đêm",
    ],
    departures: [
      "Nơi khởi hành",
      "TP. Hồ Chí Minh",
      "Thủ đô Hà Nội",
      "TP. Đà Nẵng",
      "TP. Cần Thơ",
    ],
  },
  bestSellerTours: [
    {
      id: "bst-1",
      category: "DU LỊCH CHÂU Á",
      title: "DU LỊCH NHẬT BẢN MÙA HOA ANH ĐÀO: TOKYO - NÚI PHÚ SĨ - KYOTO - OSAKA",
      price: "14.999.000 ₫",
      duration: "5 Ngày 4 Đêm",
      transport: "Máy bay khứ hồi",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      stampText: "TOKYO JAPAN",
    },
    {
      id: "bst-2",
      category: "DU LỊCH CHÂU MỸ",
      title: "DU LỊCH HOA KỲ LIÊN TUYẾN ĐÔNG TÂY: NEW YORK - WASHINGTON D.C - LAS VEGAS",
      price: "37.999.000 ₫",
      duration: "9 Ngày 8 Đêm",
      transport: "Hàng không 5 sao",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
      stampText: "USA TRAVEL",
    },
    {
      id: "bst-3",
      category: "DU LỊCH CHÂU ÂU",
      title: "KHÁM PHÁ BẮC ÂU HUYỀN BÍ: ĐAN MẠCH - NA UY - THỤY ĐIỂN - PHẦN LAN",
      price: "34.900.000 ₫",
      duration: "8 Ngày 7 Đêm",
      transport: "Du thuyền & Máy bay",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800&q=80",
      stampText: "EURO TOUR",
    },
    {
      id: "bst-4",
      category: "DU LỊCH CHÂU ÂU",
      title: "HÀNH TRÌNH ĐỊA TRUNG HẢI: SANTORINI HY LẠP - ROME - VENICE - MILAN",
      price: "49.900.000 ₫",
      duration: "9 Ngày 8 Đêm",
      transport: "Máy bay quốc tế",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      stampText: "GREECE ITALY",
    },
    {
      id: "bst-5",
      category: "DU LỊCH CANADA",
      title: "DU LỊCH CANADA MÙA LÁ ĐỎ: VANCOUVER - VICTORIA - MONTREAL - THÁC NIAGARA",
      price: "97.900.000 ₫",
      duration: "10 Ngày 9 Đêm",
      transport: "Hàng không EVA Air",
      image:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
      stampText: "CANADA VIP",
    },
    {
      id: "bst-6",
      category: "DU LỊCH ANH",
      title: "VƯƠNG QUỐC ANH & SCOTLAND: LONDON - OXFORD - MANCHESTER - EDINBURGH",
      price: "59.900.000 ₫",
      duration: "8 Ngày 7 Đêm",
      transport: "Vietnam Airlines",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      stampText: "LONDON UK",
    },
  ],
  countdownPromo: {
    title: "Ưu đãi ĐẶC BIỆT cho mùa Lễ hội.",
    highlight: "Giảm giá 30%",
    subtitle: "Cho 50 khách hàng đầu tiên đặt Tour nước ngoài",
    backgroundImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=85",
    ctaLabel: "ĐẶT NGAY",
    initialHours: 14,
    initialMinutes: 38,
    initialSeconds: 52,
  },
  popularDestinations: [
    {
      id: "pop-1",
      cityTitle: "DU LỊCH ĐÀ NẴNG",
      subtitle: "TOUR MIỀN TRUNG, TẶNG VÉ CÁP TREO, BUFFET -",
      price: "4,699,000 ₫",
      badgeText: "BÁN CHẠY",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "pop-2",
      cityTitle: "DU LỊCH HẠ LONG",
      subtitle: "TOUR MIỀN BẮC - HÀ NỘI - HẠ LONG - SAPA -",
      price: "7,599,000 ₫",
      badgeText: "ƯU ĐÃI",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "pop-3",
      cityTitle: "DU LỊCH CÔN ĐẢO",
      subtitle: "DU LỊCH CÔN ĐẢO 2 NGÀY 1 ĐÊM BAY TỪ SÀI GÒN -",
      price: "5,299,000 ₫",
      badgeText: "HOT",
      image:
        "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=900&q=80",
    },
  ],
  whyChooseReasons: [
    {
      id: "reason-1",
      number: "01.",
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ chuyên viên tư vấn lữ hành và điều hành tour trực chiến 24/7, đồng hành hỗ trợ quý khách suốt hành trình trong và ngoài nước.",
    },
    {
      id: "reason-2",
      number: "02.",
      title: "Nhiều ưu đãi",
      description:
        "Tặng ngay voucher nghỉ dưỡng, bảo hiểm du lịch quốc tế hạn mức 1 tỷ đồng cùng quà tặng độc quyền khi đăng ký theo nhóm.",
    },
    {
      id: "reason-3",
      number: "03.",
      title: "Giá rẻ",
      description:
        "Đối tác chiến lược hạng Bạch Kim của hơn 40 hãng hàng không và chuỗi khách sạn quốc tế, cam kết mức giá tốt nhất thị trường.",
    },
    {
      id: "reason-4",
      number: "04.",
      title: "Hài lòng 100%",
      description:
        "Lịch trình thiết kế khoa học, ẩm thực bản địa phong phú, hướng dẫn viên giàu kinh nghiệm mang lại trải nghiệm trọn vẹn nhất.",
    },
    {
      id: "reason-5",
      number: "05.",
      title: "Uy tín",
      description:
        "Hơn 12 năm thương hiệu lữ hành quốc tế hàng đầu, cam kết hoàn tiền 100% nếu dịch vụ không đúng như hợp đồng đã ký kết.",
    },
    {
      id: "reason-6",
      number: "06.",
      title: "Nhanh chóng",
      description:
        "Thủ tục đặt tour trực tuyến chỉ trong 3 phút, hỗ trợ hồ sơ xin Visa Châu Âu, Mỹ, Canada, Nhật Bản với tỷ lệ đậu lên tới 99%.",
    },
  ],
  whyChooseBgImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80",
  travelGuides: [
    {
      id: "guide-1",
      title: "TẤT TẦN TẬT NHỮNG KINH NGHIỆM BẠN CẦN BIẾT TRƯỚC KHI DU LỊCH BÌNH BA",
      date: "7 Tháng Ba, 2026",
      category: "Cẩm nang biển đảo",
      excerpt:
        "Đảo tôm hùm Bình Ba (Cam Ranh) cuốn hút du khách bởi bãi Nhà Cũ trong vắt, bãi Chướng bình minh tuyệt đẹp và hải sản tươi ngon...",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "guide-2",
      title: "VÌ SAO BẠN PHẢI ĐẾN ĐÀI LOAN MỘT LẦN TRONG ĐỜI?",
      date: "7 Tháng Ba, 2026",
      category: "Du lịch Châu Á",
      excerpt:
        "Từ phố cổ Cửu Phần lung linh đèn lồng đỏ, hồ Nhật Nguyệt thơ mộng đến thiên đường ẩm thực chợ đêm Tây Môn Đình sầm uất...",
      image:
        "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "guide-3",
      title: "DU LỊCH NHA TRANG: 10 ĐIỂM DU LỊCH THAM QUAN HẤP DẪN NHẤT",
      date: "7 Tháng Ba, 2026",
      category: "Kinh nghiệm du lịch",
      excerpt:
        "Tổng hợp những tọa độ check-in không thể bỏ lỡ tại vịnh biển Nha Trang: Hòn Mun, VinWonders, Tháp Bà Ponagar và Viện Hải Dương Học...",
      image:
        "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
    },
  ],
  customerReviews: [
    {
      id: "rev-1",
      name: "Võ Thị Thùy Trang",
      role: "Khách hàng Tour Châu Âu",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      comment:
        "Chuyến đi Pháp - Thụy Sĩ - Ý cùng MONA Travel thực sự vượt ngoài mong đợi của gia đình mình. Khách sạn ngay trung tâm, hướng dẫn viên nhiệt tình và am hiểu lịch sử!",
    },
    {
      id: "rev-2",
      name: "Phạm Nhật Thành",
      role: "Giám đốc Doanh nghiệp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      comment:
        "Công ty chúng tôi đã chọn MONA Travel tổ chức đoàn MICE 80 người đi Nhật Bản. Mọi khâu từ xin visa đoàn, vé máy bay đến Gala Dinner đều cực kỳ chu đáo.",
    },
    {
      id: "rev-3",
      name: "Lê Ngọc Phương Uyên",
      role: "Travel Blogger",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      comment:
        "Mình rất ấn tượng với dịch vụ hỗ trợ 24/7 của MONA Travel. Giá tour cạnh tranh, không phát sinh chi phí ẩn và lịch trình tham quan rất thoải mái, nhiều điểm đẹp.",
    },
  ],
  reviewsBgImage:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80",
  paradiseGallery: [
    {
      id: "gal-1",
      title: "Nhà Hát Opera Sydney",
      location: "Sydney, Australia",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gal-2",
      title: "Bờ Biển Amalfi Coast",
      location: "Positano, Italy",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gal-3",
      title: "Lâu Đài Cổ Tích Neuschwanstein",
      location: "Bavaria, Germany",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gal-4",
      title: "Khinh Khí Cầu Cappadocia",
      location: "Cappadocia, Thổ Nhĩ Kỳ",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gal-5",
      title: "Cầu Cổng Vàng Golden Gate",
      location: "San Francisco, Hoa Kỳ",
      image:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gal-6",
      title: "Vịnh Hạ Long Kỳ Quan",
      location: "Quảng Ninh, Việt Nam",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    },
  ],
  newsletterBanner: {
    title: "ĐĂNG KÍ ĐỂ NHẬN ƯU ĐÃI MỚI NHẤT",
    placeholder: "Email của bạn...",
    backgroundImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80",
  },
  partnerBrands: [
    {
      id: "partner-1",
      name: "tripadvisor",
      tagline: "know better. book better. go better.",
      accentColor: "#00af87",
    },
    {
      id: "partner-2",
      name: "Greenline",
      tagline: "TOURS & TRAVEL SERVICE",
      accentColor: "#27ae60",
    },
    {
      id: "partner-3",
      name: "România",
      tagline: "explore the Carpathian garden",
      accentColor: "#2ecc71",
    },
    {
      id: "partner-4",
      name: "ExcitingVacations",
      tagline: "It's All About The Experience",
      accentColor: "#2980b9",
    },
  ],
  footerPopularThumbnails: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=300&q=80",
  ],
  stats: [
    { value: "350+", label: "Tuyến Tour Nội Địa & Quốc Tế" },
    { value: "99%", label: "Khách Hàng Hài Lòng Tuyệt Đối" },
    { value: "45.000+", label: "Lượt Khách Phục Vụ Mỗi Năm" },
    { value: "24/7", label: "Hỗ Trợ Đặt Vé & Visa Toàn Cầu" },
  ],
  services: [
    {
      title: "Tour Du Lịch Quốc Tế Trọn Gói",
      description:
        "Tổ chức các hành trình du lịch Châu Á, Châu Âu, Châu Mỹ, Canada, Úc với dịch vụ hàng không và khách sạn 4-5 sao.",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tour Du Lịch Biển Đảo Nội Địa",
      description:
        "Khám phá Đà Nẵng, Hội An, Vịnh Hạ Long, Sapa, Phú Quốc và Côn Đảo với mức giá ưu đãi trực tiếp từ lữ hành.",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dịch Vụ Visa & Đoàn Doanh Nghiệp MICE",
      description:
        "Tư vấn hồ sơ thị thực chuyên sâu và thiết kế chương trình hội nghị, khảo sát thương mại quốc tế theo yêu cầu.",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    },
  ],
  projects: [
    {
      title: "Đoàn Du Lịch Châu Âu Mùa Thu Vàng 2025",
      category: "Tour Châu Âu",
      summary: "Hành trình 10 ngày khám phá Pháp - Thụy Sĩ - Ý cho đoàn 45 khách hàng VIP.",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Hành Trình Hoa Anh Đào Nhật Bản",
      category: "Tour Châu Á",
      summary: "Trải nghiệm cung đường vàng Tokyo - Phú Sĩ - Kyoto mùa lễ hội hoa anh đào nở rộ.",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      name: "Võ Thị Thùy Trang",
      role: "Khách hàng Tour Châu Âu",
      quote:
        "Chuyến đi Pháp - Thụy Sĩ - Ý cùng MONA Travel thực sự vượt ngoài mong đợi của gia đình mình. Khách sạn ngay trung tâm, hướng dẫn viên nhiệt tình!",
      rating: 5,
    },
    {
      name: "Phạm Nhật Thành",
      role: "Giám đốc Doanh nghiệp",
      quote:
        "Công ty chúng tôi đã chọn MONA Travel tổ chức đoàn MICE 80 người đi Nhật Bản. Mọi khâu từ xin visa đoàn đến Gala Dinner đều cực kỳ chu đáo.",
      rating: 5,
    },
  ],
  news: [
    {
      title: "Tất tần tật những kinh nghiệm bạn cần biết trước khi du lịch Bình Ba",
      date: "07/03/2026",
      category: "Cẩm nang du lịch",
      excerpt:
        "Đảo tôm hùm Bình Ba cuốn hút du khách bởi bãi Nhà Cũ trong vắt, bãi Chướng bình minh tuyệt đẹp và hải sản tươi ngon.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Vì sao bạn phải đến Đài Loan một lần trong đời?",
      date: "07/03/2026",
      category: "Cẩm nang du lịch",
      excerpt:
        "Từ phố cổ Cửu Phần lung linh đèn lồng đỏ, hồ Nhật Nguyệt thơ mộng đến thiên đường ẩm thực chợ đêm Tây Môn Đình sầm uất.",
      image:
        "https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
