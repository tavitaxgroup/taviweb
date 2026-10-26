import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MonnaProductItem {
  id: string;
  name: string;
  tab: "cham-soc-da" | "lieu-trinh" | "phu-kien";
  price: string;
  oldPrice?: string;
  isSale?: boolean;
  image: string;
  description: string;
}

export interface MonnaValuePillar {
  id: string;
  shape: "diamond-solid" | "circle-solid" | "diamond-outline" | "star-burst";
  title: string;
  description: string;
}

export interface MonnaClinicData extends ClonedTemplateBaseData {
  topAnnouncement: string;
  navigation: Array<{ label: string; href: string; hasDropdown?: boolean }>;
  heroYearWatermark: string;
  heroHeadingLines: {
    line1: string;
    line2Italic: string;
    line3: string;
  };
  marqueeText: string;
  bestSellersSection: {
    title: string;
    subtitle: string;
    tabs: Array<{ id: "cham-soc-da" | "lieu-trinh" | "phu-kien"; label: string }>;
    products: MonnaProductItem[];
  };
  blackPromoSection: {
    title: string;
    description: string;
    ctaText: string;
    tiltedPortrait: string;
    insetProductImage: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  aboutMonnaSection: {
    title: string;
    subtitle: string;
    pillars: MonnaValuePillar[];
  };
  founderQuote: {
    quote: string;
    author: string;
    role: string;
  };
  editorialFeature: {
    image: string;
    verticalWords: string[];
    starLabel: string;
  };
  partnerBrands: Array<{ name: string; sub?: string }>;
  lookbookStrip: string[];
  footerLinks: string[];
  footerSupport: string[];
}

export const thamMyVien11DefaultData: MonnaClinicData = {
  business: {
    name: "MONNA",
    tagline: "Viện Thẩm Mỹ Quốc Tế & Chăm Sóc Sắc Đẹp Monna Clinic",
    phone: ["(+84) 313728397", "1900 636 648"],
    email: ["info@themona.global", "booking@monnaclinic.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    workingHours: "09:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 2150,
    experienceYears: "12+",
    aboutTitle: "VỀ MONNA CLINIC",
    aboutText: [
      "Đón đầu xu hướng thẩm mỹ quốc tế, bứt phá khỏi vùng an toàn để kiến tạo vẻ đẹp nguyên bản và thần thái sang trọng cho mỗi khách hàng.",
      "Monna Clinic quy tụ đội ngũ bác sĩ da liễu thẩm mỹ tu nghiệp tại Pháp & Hàn Quốc cùng bộ sưu tập dược mỹ phẩm độc quyền."
    ],
    highlights: [
      "Xu hướng thẩm mỹ hàng đầu",
      "Sản phẩm & Liệu trình chuẩn Y khoa",
      "Miễn phí vận chuyển toàn quốc",
      "Hỗ trợ tư vấn trực tuyến 24/7"
    ]
  },
  topAnnouncement:
    "Chương trình ưu đãi sắc đẹp theo mùa đã bắt đầu! Giảm giá tới 50%! Mua ngay",
  navigation: [
    { label: "TRANG CHỦ", href: "#top" },
    { label: "VỀ CHÚNG TÔI", href: "#ve-monna" },
    { label: "SẢN PHẨM", href: "#san-pham-ban-chay", hasDropdown: true },
    { label: "TIN TỨC", href: "#bo-suu-tap" },
    { label: "FAQS", href: "#uu-dai-mua-xuan" },
    { label: "LIÊN HỆ", href: "#footer-monna" }
  ],
  heroYearWatermark: "2026",
  heroHeadingLines: {
    line1: "ĐÓN",
    line2Italic: "XUÂN",
    line3: "COLLECTION"
  },
  hero: {
    eyebrow: "VIỆN THẨM MỸ QUỐC TẾ MONNA CLINIC",
    title: "ĐÓN XUÂN COLLECTION",
    subtitle:
      "Bộ sưu tập liệu trình trẻ hóa làn da & dược mỹ phẩm cao cấp đón Xuân 2026.",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham-ban-chay",
    backgroundImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
  },
  marqueeText: "ĐÓN XUÂN",
  bestSellersSection: {
    title: "SẢN PHẨM BÁN CHẠY",
    subtitle:
      "Bộ sưu tập chăm sóc sắc đẹp mùa Xuân đa dạng mẫu mã, đặt ngay nhận ưu đãi lớn",
    tabs: [
      { id: "cham-soc-da", label: "CHĂM SÓC DA" },
      { id: "lieu-trinh", label: "LIỆU TRÌNH SPA" },
      { id: "phu-kien", label: "PHỤ KIỆN LÀM ĐẸP" }
    ],
    products: [
      {
        id: "mn-1",
        name: "TINH CHẤT CĂNG BÓNG DA HYALURONIC VER.2",
        tab: "cham-soc-da",
        price: "500.000 ₫",
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        description:
          "Serum cấp nước đa tầng giúp làn da căng bóng, mịn màng ngay sau lần đầu thoa."
      },
      {
        id: "mn-2",
        name: "KEM DƯỠNG KHÓA ẨM PHỤC HỒI ĐÊM MONNA VER.2",
        tab: "cham-soc-da",
        price: "329.000 ₫",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
        description:
          "Nuôi dưỡng hàng rào bảo vệ da suốt 8 giờ ngủ đêm với Peptide và Ceramide."
      },
      {
        id: "mn-3",
        name: "BỘ ĐÔI TRẺ HÓA COLLAGEN TƯƠI & RETINOL VER.2",
        tab: "cham-soc-da",
        price: "999.000 ₫",
        oldPrice: "1.250.000 ₫",
        isSale: true,
        image:
          "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
        description:
          "Phác đồ chống lão hóa chuyên sâu giúp mờ nếp nhăn mảnh và se khít lỗ chân lông."
      },
      {
        id: "mn-4",
        name: "SỮA RỬA MẶT DỊU NHẸ CÂN BẰNG PH MONNA",
        tab: "cham-soc-da",
        price: "329.000 ₫",
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
        description:
          "Làm sạch sâu bụi mịn và bã nhờn mà không gây khô căng hay kích ứng da."
      },
      {
        id: "mn-5",
        name: "LIỆU TRÌNH THANH LỌC DA OXY TƯƠI HÀN QUỐC",
        tab: "lieu-trinh",
        price: "325.000 ₫",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
        description:
          "Cung cấp oxy tinh khiết áp suất cao giúp thải độc lỗ chân lông và sáng bừng sắc diện."
      },
      {
        id: "mn-6",
        name: "TINH DẦU DƯỠNG THỂ HƯƠNG TRẦM PHÁP MONNA",
        tab: "phu-kien",
        price: "500.000 ₫",
        image:
          "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
        description:
          "Dưỡng ẩm da toàn thân mềm mượt như lụa cùng hương thơm thanh lịch suốt ngày dài."
      },
      {
        id: "mn-7",
        name: "VOUCHER NÂNG CƠ TRẺ HÓA THERMAGE ĐÓN XUÂN",
        tab: "lieu-trinh",
        price: "999.000 ₫",
        oldPrice: "1.250.000 ₫",
        isSale: true,
        image:
          "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=600&q=80",
        description:
          "Trải nghiệm công nghệ sóng tần số vô tuyến trẻ hóa vùng mắt và rãnh cười."
      },
      {
        id: "mn-8",
        name: "MÁY ĐIỆN DI TINH CHẤT NÂNG CƠ CẦM TAY MONNA",
        tab: "phu-kien",
        price: "499.000 ₫",
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
        description:
          "Thiết bị hỗ trợ đẩy sâu dưỡng chất gấp 5 lần so với thoa tay thông thường."
      }
    ]
  },
  blackPromoSection: {
    title: "ƯU ĐÃI TỚI 45%",
    description:
      "Đừng bỏ lỡ bộ sưu tập chăm sóc sắc đẹp mùa Xuân với ưu đãi lên tới 45%. Dược mỹ phẩm, liệu trình trẻ hóa, phụ kiện spa...",
    ctaText: "MUA NGAY",
    tiltedPortrait:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80",
    insetProductImage:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=500&q=80",
    countdown: {
      days: "324",
      hours: "14",
      minutes: "50",
      seconds: "43"
    }
  },
  aboutMonnaSection: {
    title: "VỀ MONNA",
    subtitle: "Đón đầu xu hướng thẩm mỹ, bứt phá khỏi vùng an toàn",
    pillars: [
      {
        id: "pil-1",
        shape: "diamond-solid",
        title: "XU HƯỚNG HÀNG ĐẦU",
        description:
          "Xu hướng có thể thay đổi theo mùa nhưng vẻ đẹp nguyên bản và thần thái riêng biệt của bạn sẽ luôn tỏa sáng bền vững."
      },
      {
        id: "pil-2",
        shape: "circle-solid",
        title: "SẢN PHẨM CHẤT LƯỢNG",
        description:
          "Tuyển chọn khắt khe các dòng dược mỹ phẩm chuẩn Y khoa và công nghệ trẻ hóa đạt chứng nhận an toàn quốc tế."
      },
      {
        id: "pil-3",
        shape: "diamond-outline",
        title: "MIỄN PHÍ VẬN CHUYỂN",
        description:
          "Giao hàng tận tay nhanh chóng trên toàn quốc, đóng gói tiêu chuẩn boutique sang trọng và bảo mật tuyệt đối."
      },
      {
        id: "pil-4",
        shape: "star-burst",
        title: "HỖ TRỢ ONLINE",
        description:
          "Đội ngũ bác sĩ và chuyên viên da liễu Monna Clinic luôn sẵn sàng lắng nghe, giải đáp và theo dõi sát sao làn da bạn."
      }
    ]
  },
  founderQuote: {
    quote:
      "TÔI LUÔN LUÔN TÌM THẤY VẺ ĐẸP TRONG NHỮNG ĐƯỜNG NÉT TỰ NHIÊN VÀ ĐỘC BẢN NHẤT. CHÚNG LUÔN THÚ VỊ HƠN NHIỀU.",
    author: "LÊ NHỰT",
    role: "Founder & CEO"
  },
  editorialFeature: {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1100&q=85",
    verticalWords: ["LIỆU TRÌNH", "MỸ PHẨM"],
    starLabel: "COLLECTIONS"
  },
  partnerBrands: [
    { name: "BURBERRY" },
    { name: "ALEXANDER", sub: "McQUEEN" },
    { name: "BALMAIN", sub: "PARIS" },
    { name: "HERMÈS", sub: "PARIS" },
    { name: "PRADA" }
  ],
  lookbookStrip: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
  ],
  footerLinks: ["Trang chủ", "Liên hệ", "Tin tức", "Về chúng tôi", "Danh mục SP", "FaQs"],
  footerSupport: [
    "Tư vấn online",
    "Vận chuyển",
    "Thanh toán",
    "Quy chế hoạt động",
    "CS Bảo mật",
    "CS Đổi trả",
    "CS Hoàn tiền"
  ]
};
