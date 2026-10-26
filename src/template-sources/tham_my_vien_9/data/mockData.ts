import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorvnBrandCard {
  id: string;
  name: string;
  subtitle: string;
  origin: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  tag: string;
}

export interface CorvnProductItem {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  image: string;
  category: "yeu-thich" | "trang-diem" | "cham-soc-da";
  summary: string;
}

export interface CorvnBeautyPost {
  id: string;
  title: string;
  excerpt: string;
  day: string;
  month: string;
  category: string;
  image: string;
}

export interface CorvnServicePerk {
  id: string;
  title: string;
  subtitle: string;
  icon: "truck" | "check" | "phone";
}

export interface ThamMyVien9Data extends Omit<ClonedTemplateBaseData, "business" | "hero" | "services"> {
  business?: any;
  hero?: any;
  services?: Array<Record<string, any>>;
  hotlineDisplay: string;
  searchPlaceholder: string;
  heroSaleHeadline: string;
  heroSaleSubline: string;
  heroLeftPortrait: string;
  heroRightProductImage: string;
  brandsSectionTitle: string;
  brandCards: CorvnBrandCard[];
  favoriteSectionTitle: string;
  favoriteProducts: CorvnProductItem[];
  makeupSectionTitle: string;
  makeupProducts: CorvnProductItem[];
  skincareSectionTitle: string;
  skincareProducts: CorvnProductItem[];
  journalSectionTitle: string;
  journalPosts: CorvnBeautyPost[];
  testimonialSectionTitle: string;
  testimonialBannerBg: string;
  servicePerks: CorvnServicePerk[];
}

export const mockData: ThamMyVien9Data = {
  companyName: "Viện Thẩm Mỹ & Mỹ Phẩm Hàn Quốc CorVN",
  tagline: "Chuẩn mực chăm sóc làn da Hàn Quốc & Phân phối dược mỹ phẩm chính hãng 100%",
  phone: "0126 922 0162",
  email: "demonhunter@gmail.com",
  address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
  heroTitle: "SALE UP TO 40%",
  heroSubtitle:
    "Ưu đãi toàn bộ liệu trình chăm sóc da chuyên sâu chuẩn Hàn và bộ sưu tập dược mỹ phẩm chính hãng từ COSRX, Laneige, Su:m37°, Missha.",
  heroCta: "Khám phá ưu đãi ngay",
  heroImage:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  aboutTitle: "Viện Thẩm Mỹ & Dược Mỹ Phẩm Thiên Nhiên Hàn Quốc CorVN",
  aboutText:
    "CorVN kết hợp liệu trình spa chuẩn Y khoa Hàn Quốc cùng chuỗi phân phối mỹ phẩm chiết xuất thảo mộc thiên nhiên lành tính, giúp phục hồi làn da căng bóng, mịn màng từ gốc.",
  aboutImage:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
  navigation: [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "TRANG ĐIỂM", href: "#trang-diem" },
    { label: "CHĂM SÓC DA", href: "#cham-soc-da" },
    { label: "CHĂM SÓC CƠ THỂ", href: "#yeu-thich" },
    { label: "CHĂM SÓC TÓC", href: "#yeu-thich" },
    { label: "NƯỚC HOA", href: "#yeu-thich" },
    { label: "TẠP CHÍ LÀM ĐẸP", href: "#tap-chi" },
    { label: "KHUYẾN MÃI", href: "#khuyen-mai" },
  ],
  stats: [
    { value: "100%", label: "Mỹ phẩm Hàn Quốc chính hãng" },
    { value: "45.000+", label: "Khách hàng làm đẹp tin chọn" },
    { value: "35+", label: "Thương hiệu K-Beauty độc quyền" },
    { value: "63 Tỉnh", label: "Giao hàng COD toàn quốc" },
  ],
  services: [
    {
      title: "Liệu Trình Căng Bóng Da Glass Skin Hàn Quốc",
      description:
        "Cấy tinh chất HA đa phân tử và điện di lạnh giúp làn da ngậm nước, sáng mịn trong veo tức thì.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Thanh Lọc Da Thảo Mộc Ngải Cứu Hanyul",
      description:
        "Làm dịu da kích ứng, se khít lỗ chân lông và kiểm soát bã nhờn bằng mặt nạ ngải cứu tươi lên men.",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Soi Da AI & Kê Phác Đồ Skincare Cá Nhân Hóa",
      description:
        "Phân tích 8 chỉ số tầng sâu của da để thiết kế chu trình dưỡng da ngày – đêm chuẩn xác nhất.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    },
  ],
  highlights: [
    {
      title: "Chiết Xuất Thảo Mộc Lành Tính",
      description: "Tuyển chọn bảng thành phần thuần chay, không cồn khô, không Paraben, an toàn cho cả làn da nhạy cảm.",
    },
    {
      title: "Bảo Chứng Chính Hãng 200%",
      description: "Đầy đủ tem phụ tiếng Việt và hóa đơn nhập khẩu trực tiếp từ các tập đoàn Amorepacific, LG Household.",
    },
    {
      title: "Chuyên Viên Da Liễu Tư Vấn 1:1",
      description: "Đồng hành theo dõi tình trạng cải thiện của làn da trong suốt quá trình sử dụng sản phẩm.",
    },
  ],
  testimonials: [
    {
      name: "Chị Nguyễn Thảo Nhi",
      role: "Khách hàng thân thiết tại Quận 3, TP.HCM",
      quote:
        "Mình cực kỳ ấn tượng với dịch vụ tư vấn soi da và các dòng mặt nạ ngải cứu Hanyul, bông tẩy da chết COSRX tại CorVN. Giao hàng siêu nhanh, đóng gói thơm phức và sản phẩm chuẩn Hàn 100%, dùng xong da mịn căng thấy rõ!",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Chị Lê Khánh Linh",
      role: "Beauty Blogger / Hà Nội",
      quote:
        "CorVN luôn cập nhật nhanh nhất các bảng mắt và dòng son lì mới từ Laneige, 3CE. Giá ưu đãi rất tốt mà hoàn toàn yên tâm về nguồn gốc chính hãng.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Chị Trần Ngọc Hân",
      role: "Nhân viên văn phòng / Đà Nẵng",
      quote:
        "Nhờ bài viết hướng dẫn trị mụn và bộ đôi BHA COSRX mua tại CorVN mà làn da dầu mụn của mình đã phục hồi láng mịn chỉ sau 4 tuần kiên trì.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
  ],
  gallery: [
    {
      title: "Showroom mỹ phẩm & soi da CorVN",
      category: "Showroom",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bộ sưu tập trang điểm K-Beauty",
      category: "Trang điểm",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dược mỹ phẩm chăm sóc da thảo mộc",
      category: "Chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Đăng Ký Nhận Ưu Đãi 40% & Cẩm Nang Chăm Sóc Da Chuẩn Hàn",
  ctaDescription:
    "Để lại email hoặc liên hệ Hotline 0126 922 0162 để được chuyên viên thẩm mỹ CorVN tư vấn chu trình dưỡng da miễn phí.",

  hotlineDisplay: "0126 922 0162",
  searchPlaceholder: "Tìm kiếm sản phẩm, thương hiệu, liệu trình...",
  heroSaleHeadline: "SALE UP TO 40%",
  heroSaleSubline: "Ưu đãi toàn bộ mỹ phẩm & liệu trình",
  heroLeftPortrait:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  heroRightProductImage:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",

  brandsSectionTitle: "THƯƠNG HIỆU",
  brandCards: [
    {
      id: "brand-cosrx",
      name: "COSRX",
      subtitle: "EXPECTING TOMORROW",
      origin: "KOREA DERMA",
      bgColor: "#ffffff",
      textColor: "#1a1a1a",
      accentColor: "#229263",
      tag: "Dược mỹ phẩm trị mụn",
    },
    {
      id: "brand-sum37",
      name: "su:m37°",
      subtitle: "NATURAL FERMENTATION",
      origin: "LG HOUSEHOLD",
      bgColor: "#faf7f2",
      textColor: "#4a3b32",
      accentColor: "#b58d3d",
      tag: "Mỹ phẩm lên men tự nhiên",
    },
    {
      id: "brand-peripera",
      name: "peripera",
      subtitle: "INK VELVET LIP MAKEUP",
      origin: "SEOUL TREND",
      bgColor: "#f39cbb",
      textColor: "#ffffff",
      accentColor: "#ffffff",
      tag: "Trang điểm trẻ trung",
    },
    {
      id: "brand-mamonde",
      name: "Mamonde",
      subtitle: "FLOWER SCIENCE BEAUTY",
      origin: "AMOREPACIFIC",
      bgColor: "#f7ce3e",
      textColor: "#2b2410",
      accentColor: "#2b2410",
      tag: "Chiết xuất hoa thiên nhiên",
    },
    {
      id: "brand-missha",
      name: "MISSHA",
      subtitle: "TIME REVOLUTION SKIN",
      origin: "K-BEAUTY ICON",
      bgColor: "#fdf2f4",
      textColor: "#8f2424",
      accentColor: "#c23b5a",
      tag: "Chống lão hóa chuyên sâu",
    },
    {
      id: "brand-laneige",
      name: "LANEIGE",
      subtitle: "WATER BANK MOISTURE",
      origin: "LUMINOUS SKIN",
      bgColor: "#8098c9",
      textColor: "#ffffff",
      accentColor: "#e8f0fe",
      tag: "Cấp ẩm khóa nước số 1",
    },
    {
      id: "brand-3ce",
      name: "3CE",
      subtitle: "STYLENANDA SEOUL",
      origin: "MAKEUP STUDIO",
      bgColor: "#fff5f7",
      textColor: "#1f1f1f",
      accentColor: "#d61f69",
      tag: "Bảng màu thời thượng",
    },
    {
      id: "brand-agapan",
      name: "AGAPAN",
      subtitle: "COSMETICS KOREA",
      origin: "VELVET MATTE",
      bgColor: "#141414",
      textColor: "#ffffff",
      accentColor: "#ff2e7e",
      tag: "Son kem lì cao cấp",
    },
  ],

  favoriteSectionTitle: "MỸ PHẨM ĐƯỢC YÊU THÍCH",
  favoriteProducts: [
    {
      id: "fav-1",
      name: "Tinh dầu nước hoa Dubai Sharija Hoàng Gia",
      brand: "Sharija Perfumes",
      price: "200,000 ₫",
      originalPrice: "270,000 ₫",
      discountBadge: "-26%",
      category: "yeu-thich",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80",
      summary: "Hương gỗ trầm ấm pha quyện hoa nhài phương Đông, lưu hương đậm đặc suốt 18 giờ.",
    },
    {
      id: "fav-2",
      name: "Bộ Dầu Gội – Xả Biotin & Collagen Phục Hồi Tóc",
      brand: "OGX Beauty",
      price: "195,000 ₫",
      originalPrice: "260,000 ₫",
      discountBadge: "-25%",
      category: "yeu-thich",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=700&q=80",
      summary: "Bổ sung Vitamin B7 và Collagen thủy phân giúp mái tóc dày bồng bềnh, giảm gãy rụng.",
    },
    {
      id: "fav-3",
      name: "Dưỡng da tay và dưỡng môi A'pieu Perfume Signal",
      brand: "A'pieu Korea",
      price: "140,000 ₫",
      category: "yeu-thich",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
      summary: "Thiết kế 2 trong 1 tiện lợi với bơ hạt mỡ dưỡng mềm da tay và sáp môi hồng tự nhiên.",
    },
    {
      id: "fav-4",
      name: "Sữa dưỡng thể Skin Barista 2in1 White Body Perfection",
      brand: "Skin Barista",
      price: "280,000 ₫",
      category: "yeu-thich",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
      summary: "Dưỡng trắng body nâng tông tự nhiên kết hợp màng chống nắng bảo vệ da toàn diện.",
    },
  ],

  makeupSectionTitle: "TRANG ĐIỂM",
  makeupProducts: [
    {
      id: "mk-1",
      name: "Son Two Tone Matte Lip Bar Laneige Hàn Quốc",
      brand: "LANEIGE",
      price: "400,000 ₫",
      category: "trang-diem",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
      summary: "Thiết kế son 2 màu ombre độc quyền giúp đôi môi căng mọng chuẩn phong cách Hàn Quốc.",
    },
    {
      id: "mk-2",
      name: "Son Thỏi Lì MAC Matte Lipstick Chính Hãng",
      brand: "MAC Cosmetics",
      price: "440,000 ₫",
      category: "trang-diem",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
      summary: "Chất son mịn như nhung, lên màu chuẩn xác ngay từ lần lướt đầu tiên và giữ màu 8 tiếng.",
    },
    {
      id: "mk-3",
      name: "Bảng phấn mắt Revolution Reloaded Newtrals 2",
      brand: "Makeup Revolution",
      price: "220,000 ₫",
      originalPrice: "250,000 ₫",
      discountBadge: "-12%",
      category: "trang-diem",
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80",
      summary: "15 ô màu tông hồng đất – cam đào thời thượng, hạt phấn siêu mịn bám lâu suốt ngày dài.",
    },
    {
      id: "mk-4",
      name: "Kem lót mắt Catrice Prime & Fine Eyeshadow Base Longlasting",
      brand: "Catrice",
      price: "110,000 ₫",
      originalPrice: "140,000 ₫",
      discountBadge: "-21%",
      category: "trang-diem",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
      summary: "Kiềm dầu vùng mí mắt, giúp phấn mắt lên màu rực rỡ hơn và chống lem trôi hiệu quả.",
    },
  ],

  skincareSectionTitle: "CHĂM SÓC DA",
  skincareProducts: [
    {
      id: "sk-1",
      name: "Mặt nạ ngò Kiehl's Cilantro & Orange Extract Pollutant Defending",
      brand: "Kiehl's",
      price: "160,000 ₫",
      originalPrice: "220,000 ₫",
      discountBadge: "-27%",
      category: "cham-soc-da",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=80",
      summary: "Mặt nạ ngủ chiết xuất rau ngò và cam đắng giúp thải độc bụi mịn, tái tạo hàng rào ẩm.",
    },
    {
      id: "sk-2",
      name: "Mặt nạ giấy cấp ẩm sâu Dr.Morita Platinum Colloid",
      brand: "Dr.Morita",
      price: "32,000 ₫",
      category: "cham-soc-da",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
      summary: "Tinh chất keo bạch kim và Hyaluronic Acid cấp nước tức thì cho làn da khô sần thiếu sức sống.",
    },
    {
      id: "sk-3",
      name: "Mặt nạ Ngải Cứu HANYUL Pure Artemisia Purifying Mask",
      brand: "HANYUL",
      price: "350,000 ₫",
      originalPrice: "420,000 ₫",
      discountBadge: "-17%",
      category: "cham-soc-da",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=700&q=80",
      summary: "Chiết xuất lá ngải cứu non đảo 강화 Hàn Quốc làm dịu mẩn đỏ, thanh lọc lỗ chân lông.",
    },
    {
      id: "sk-4",
      name: "Bông tẩy da chết COSRX One Step Moisture Up Pad",
      brand: "COSRX",
      price: "260,000 ₫",
      originalPrice: "320,000 ₫",
      discountBadge: "-19%",
      category: "cham-soc-da",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
      summary: "Miếng pad thấm đẫm keo ong Propolis và BHA tự nhiên vừa làm sạch tế bào chết vừa cấp ẩm.",
    },
  ],

  journalSectionTitle: "TẠP CHÍ LÀM ĐẸP",
  journalPosts: [
    {
      id: "post-1",
      title: "7 Bước trị mụn ngày đèn đỏ đơn giản mà hiệu quả",
      excerpt:
        "Có một quy luật bất biến mà hầu như chị em nào cũng gặp phải trước kỳ nguyệt san: nội tiết tố thay đổi khiến tuyến bã nhờn hoạt động mạnh...",
      day: "29",
      month: "Th8",
      category: "Trị mụn chuẩn Y khoa",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "post-2",
      title: "Nguyên tắc chăm sóc da không thể bỏ qua trong mùa hè",
      excerpt:
        "Bước vào mùa nắng nóng đỉnh điểm, làn da rất dễ mất nước ngầm và sạm nám nếu bạn chỉ thoa kem chống nắng một lần duy nhất trong ngày...",
      day: "29",
      month: "Th8",
      category: "Bí quyết dưỡng da",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "post-3",
      title: "Bí quyết chăm sóc da cần phải biết trước khi trang điểm",
      excerpt:
        "Trang điểm giúp tạo nên vẻ ngoài hoàn hảo nhưng lớp nền chỉ thực sự mịn mướt, không mốc phấn khi làn da được cấp ẩm đúng quy trình...",
      day: "29",
      month: "Th8",
      category: "Cẩm nang Makeup",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "post-4",
      title: "Các bước đánh má hồng đơn giản nhưng cực kì hoàn hảo",
      excerpt:
        "Đánh phấn má hồng tưởng chừng đơn giản nhưng lại quyết định độ thon gọn và sắc thái tươi tắn của từng dáng khuôn mặt tròn, dài hay trái xoan...",
      day: "29",
      month: "Th8",
      category: "Xu hướng K-Beauty",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
    },
  ],

  testimonialSectionTitle: "Ý KIẾN KHÁCH HÀNG",
  testimonialBannerBg:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80",

  servicePerks: [
    {
      id: "perk-1",
      title: "GIAO HÀNG TOÀN QUỐC",
      subtitle: "Ship COD tất cả tỉnh thành",
      icon: "truck",
    },
    {
      id: "perk-2",
      title: "CAM KẾT 100% CHÍNH HÃNG",
      subtitle: "Sản phẩm đảm bảo chất lượng",
      icon: "check",
    },
    {
      id: "perk-3",
      title: "HỖ TRỢ TƯ VẤN KHÁCH HÀNG",
      subtitle: "Hotline: 0126 922 0162",
      icon: "phone",
    },
  ],
};
