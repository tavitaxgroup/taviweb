import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface WokuSoftwareProduct {
  id: string;
  name: string;
  subtitle: string;
  categoryGroup: string;
  subCategory: string;
  brand: string;
  price: string;
  oldPrice: string;
  discountBadge: string;
  StartingFromBadge: string;
  duration: string;
  cardBgGradient: string;
  accentColor: string;
  badgeText: string;
  image: string;
  features: string[];
}

export interface WokuCategorySidebarItem {
  id: string;
  label: string;
  iconName: string;
  subItems?: string[];
}

export interface CorporateProfile21Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  topPromoBanner: {
    leftText: string;
    highlightBrand: string;
    saleText: string;
    priceText: string;
    ctaLabel: string;
  };
  navLinks: { label: string; href: string }[];
  heroFeaturedCards: {
    id: string;
    brandName: string;
    planLabel: string;
    saleBadge: string;
    priceBadge: string;
    bgGradient: string;
    accentHex: string;
    description: string;
  }[];
  brandQuickPills: {
    id: string;
    name: string;
    dotColor: string;
    categoryFilter: string;
  }[];
  sidebarCategories: WokuCategorySidebarItem[];
  sidebarPromoBanners: {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    price: string;
    bgGradient: string;
    image: string;
  }[];
  softwareProducts: WokuSoftwareProduct[];
  b2bAdvantages: {
    id: string;
    number: string;
    title: string;
    description: string;
  }[];
}

export const corporateProfile21MockData: CorporateProfile21Data = {
  templateKey: "corporate_profile_21",
  business: {
    name: "WOKU Corp — Phần Mềm Bản Quyền Chính Hãng",
    tagline: "Đơn Vị Chuyên Cung Cấp Phần Mềm Chính Hãng Hàng Đầu Việt Nam",
    description:
      "Trọn bộ phần mềm bản quyền chính hãng: Công cụ AI (ChatGPT Plus, Claude, Midjourney), Thiết kế đồ họa (Adobe Full App, Canva Pro), Văn phòng (Microsoft 365, Windows 11) và Giải trí (YouTube Premium, Spotify, Netflix).",
    phone: ["0938 779 168", "1900 636 648"],
    email: ["support@woku.vn", "b2b@woku.vn"],
    address: "Tòa nhà WOKU Digital Tower, 319 Lý Thường Kiệt, Quận 11, TP. Hồ Chí Minh",
    website: "https://woku.monamedia.net",
    workingHours: "08:00 - 23:30 (Kích hoạt tự động 24/7)",
    taxCode: "0316892415",
  },
  topPromoBanner: {
    leftText: "Nâng cấp tài khoản",
    highlightBrand: "YouTube Premium Chính Hãng 1 Năm",
    saleText: "Sale 40%",
    priceText: "359.000đ",
    ctaLabel: "Mua ngay",
  },
  navLinks: [
    { label: "Trang chủ", href: "#" },
    { label: "Giới thiệu", href: "#uu-diem-woku" },
    { label: "Sản phẩm", href: "#workspace-catalog" },
    { label: "Chính sách bảo hành", href: "#uu-diem-woku" },
    { label: "Tin tức", href: "#tin-tuc-phan-mem" },
    { label: "Liên hệ", href: "#lien-he-woku" },
  ],
  hero: {
    badge: "SALE OFF 15% • BẢN QUYỀN CHÍNH HÃNG",
    title: "Trải nghiệm YouTube Premium chỉ từ 20k/tháng",
    subtitle:
      "Xem video không quảng cáo, phát nhạc trong nền, tải xuống ngoại tuyến và tận hưởng YouTube Music Premium trên mọi thiết bị.",
    primaryCta: "Khám phá ngay",
    secondaryCta: "Báo giá Doanh nghiệp",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
  },
  heroFeaturedCards: [
    {
      id: "hero-yt",
      brandName: "YouTube",
      planLabel: "Premium",
      saleBadge: "SALE OFF 15%",
      priceBadge: "CHỈ TỪ 2X.000",
      bgGradient: "from-[#2b0508] via-[#4a0910] to-[#140406]",
      accentHex: "#ff0033",
      description: "Không quảng cáo • YouTube Music • Phát trong nền",
    },
    {
      id: "hero-spotify",
      brandName: "Spotify",
      planLabel: "Premium",
      saleBadge: "SALE OFF 15%",
      priceBadge: "CHỈ TỪ 2X.000",
      bgGradient: "from-[#042412] via-[#093d20] to-[#04140b]",
      accentHex: "#1db954",
      description: "Nghe nhạc Lossless • Tải nhạc Offline • Không gián đoạn",
    },
  ],
  brandQuickPills: [
    { id: "pill-all", name: "Tất cả", dotColor: "#ef4444", categoryFilter: "Tất cả" },
    { id: "pill-chatgpt", name: "ChatGPT", dotColor: "#10a37f", categoryFilter: "Công Cụ AI" },
    { id: "pill-vpn", name: "VPN", dotColor: "#3b82f6", categoryFilter: "VPN" },
    { id: "pill-jetbrains", name: "JetBrains", dotColor: "#f97316", categoryFilter: "Lập Trình" },
    { id: "pill-microsoft", name: "Microsoft", dotColor: "#00a4ef", categoryFilter: "Microsoft" },
    { id: "pill-spotify", name: "Spotify", dotColor: "#1db954", categoryFilter: "Giải Trí" },
    { id: "pill-netflix", name: "Netflix", dotColor: "#e50914", categoryFilter: "Giải Trí" },
    { id: "pill-adobe", name: "Adobe", dotColor: "#ff0000", categoryFilter: "Thiết Kế / Đồ Họa" },
    { id: "pill-canva", name: "Canva Pro", dotColor: "#8b5cf6", categoryFilter: "Thiết Kế / Đồ Họa" },
    { id: "pill-capcut", name: "CapCut Pro", dotColor: "#111827", categoryFilter: "Thiết Kế / Đồ Họa" },
    { id: "pill-windows", name: "Windows", dotColor: "#0284c7", categoryFilter: "Windows" },
    { id: "pill-quizlet", name: "Quizlet", dotColor: "#4f46e5", categoryFilter: "Học Tập" },
    { id: "pill-duolingo", name: "Duolingo", dotColor: "#58cc02", categoryFilter: "Học Tập" },
  ],
  sidebarCategories: [
    {
      id: "side-work",
      label: "Làm Việc",
      iconName: "Briefcase",
      subItems: ["Thiết Kế / Đồ Họa", "Lập Trình", "Công Cụ AI"],
    },
    { id: "side-ent", label: "Giải Trí", iconName: "Gamepad2" },
    { id: "side-study", label: "Học Tập", iconName: "GraduationCap" },
    { id: "side-ms", label: "Microsoft", iconName: "LayoutGrid" },
    { id: "side-win", label: "Windows", iconName: "Monitor" },
    { id: "side-vpn", label: "VPN", iconName: "Shield" },
    { id: "side-av", label: "Diệt Virus", iconName: "ShieldAlert" },
    { id: "side-util", label: "Tiện Ích", iconName: "Wrench" },
  ],
  sidebarPromoBanners: [
    {
      id: "spb-1",
      badge: "BẢN QUYỀN VĨNH VIỄN",
      title: "Microsoft Office 365",
      subtitle: "1TB OneDrive + Full Word, Excel, PowerPoint chính hãng",
      price: "290.000đ / năm",
      bgGradient: "from-[#4f46e5] via-[#7c3aed] to-[#db2777]",
      image:
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "spb-2",
      badge: "ÔN LUYỆN THÔNG MINH",
      title: "Quizlet Plus & Elsa Pro",
      subtitle: "Trợ lý AI học ngoại ngữ và ghi nhớ từ vựng siêu tốc",
      price: "349.000đ / năm",
      bgGradient: "from-[#0f172a] via-[#1e1b4b] to-[#312e81]",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
  ],
  softwareProducts: [
    // CÔNG CỤ AI (4 cards matching screenshot row)
    {
      id: "ai-1",
      name: "Tài khoản ChatGPT Plus 4o Chính Hãng",
      subtitle: "OpenAI GPT-4o, DALL-E 3, Phân tích dữ liệu chuyên sâu",
      categoryGroup: "Làm Việc",
      subCategory: "Công Cụ AI",
      brand: "ChatGPT",
      price: "450.000 ₫",
      oldPrice: "550.000 ₫",
      discountBadge: "SALE OFF 18%",
      StartingFromBadge: "CHỈ TỪ 150K",
      duration: "1 Tháng / 1 Năm",
      cardBgGradient: "from-[#052e22] via-[#0a4a38] to-[#041b14]",
      accentColor: "#10a37f",
      badgeText: "ChatGPT Plus",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
      features: ["Truy cập GPT-4o tốc độ cao", "Tạo ảnh DALL-E 3", "Bảo hành 1 đổi 1"],
    },
    {
      id: "ai-2",
      name: "Tài khoản Claude 3.5 Sonnet Pro Anthropic",
      subtitle: "Trợ lý AI lập trình, viết lách & phân tích tài liệu dài",
      categoryGroup: "Làm Việc",
      subCategory: "Công Cụ AI",
      brand: "Claude",
      price: "490.000 ₫",
      oldPrice: "600.000 ₫",
      discountBadge: "SALE OFF 18%",
      StartingFromBadge: "HOT AI",
      duration: "1 Tháng / 6 Tháng",
      cardBgGradient: "from-[#3b2314] via-[#5c3720] to-[#24150c]",
      accentColor: "#d97757",
      badgeText: "Claude Pro",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
      features: ["Claude 3.5 Sonnet & Opus", "Context 200K tokens", "Artifacts trực quan"],
    },
    {
      id: "ai-3",
      name: "Tài khoản Midjourney Pro AI V6.1",
      subtitle: "Sáng tạo hình ảnh nghệ thuật & thiết kế 8K bằng AI",
      categoryGroup: "Làm Việc",
      subCategory: "Công Cụ AI",
      brand: "Midjourney",
      price: "290.000 ₫",
      oldPrice: "450.000 ₫",
      discountBadge: "SALE OFF 35%",
      StartingFromBadge: "RENDER NHANH",
      duration: "1 Tháng / 1 Năm",
      cardBgGradient: "from-[#171926] via-[#252a40] to-[#0e1018]",
      accentColor: "#fbbf24",
      badgeText: "Midjourney V6",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      features: ["Fast GPU Hours", "Tạo ảnh thương mại", "Hỗ trợ Web & Discord"],
    },
    {
      id: "ai-4",
      name: "Tài khoản Poe AI Subscription All-In-One",
      subtitle: "Tích hợp GPT-4o, Claude 3.5, Gemini 1.5 Pro, Llama 3",
      categoryGroup: "Làm Việc",
      subCategory: "Công Cụ AI",
      brand: "Poe",
      price: "390.000 ₫",
      oldPrice: "520.000 ₫",
      discountBadge: "SALE OFF 25%",
      StartingFromBadge: "ĐA MÔ HÌNH",
      duration: "1 Tháng / 1 Năm",
      cardBgGradient: "from-[#1e1038] via-[#341a63] to-[#110821]",
      accentColor: "#a855f7",
      badgeText: "Poe Pro",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
      features: ["1.000.000 compute points", "Tất cả bot AI hàng đầu", "Đồng bộ đa nền tảng"],
    },

    // THIẾT KẾ / ĐỒ HỌA
    {
      id: "des-1",
      name: "Adobe Creative Cloud All Apps Bản Quyền 1 Năm",
      subtitle: "Trọn bộ 20+ phần mềm: Photoshop, Illustrator, Premiere, After Effects",
      categoryGroup: "Làm Việc",
      subCategory: "Thiết Kế / Đồ Họa",
      brand: "Adobe",
      price: "1.190.000 ₫",
      oldPrice: "2.400.000 ₫",
      discountBadge: "SALE OFF 50%",
      StartingFromBadge: "100GB CLOUD",
      duration: "1 Năm Chính Chủ",
      cardBgGradient: "from-[#360508] via-[#630810] to-[#1c0305]",
      accentColor: "#ff0000",
      badgeText: "Adobe Full App",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
      features: ["1000 Credits Generative Fill AI", "Cập nhật trực tiếp Creative Cloud", "Dùng cho 2 thiết bị"],
    },
    {
      id: "des-2",
      name: "Nâng Cấp Canva Pro Chính Chủ 1 Năm",
      subtitle: "Mở khóa 100 triệu tài nguyên Premium, xóa nền AI 1 chạm",
      categoryGroup: "Làm Việc",
      subCategory: "Thiết Kế / Đồ Họa",
      brand: "Canva Pro",
      price: "249.000 ₫",
      oldPrice: "1.200.000 ₫",
      discountBadge: "SALE OFF 79%",
      StartingFromBadge: "CHỈ 20K/THÁNG",
      duration: "1 Năm Chính Chủ",
      cardBgGradient: "from-[#0f172a] via-[#1e1b4b] to-[#3b0764]",
      accentColor: "#00c4cc",
      badgeText: "Canva Pro",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80",
      features: ["Magic Studio AI trọn bộ", "Tải thiết kế PNG nền trong", "Brand Kit thương hiệu"],
    },
    {
      id: "des-3",
      name: "Tài Khoản CapCut Pro Bản Quyền PC & Mobile",
      subtitle: "Chỉnh sửa video chuyên nghiệp, phụ đề tự động AI, hiệu ứng Pro",
      categoryGroup: "Làm Việc",
      subCategory: "Thiết Kế / Đồ Họa",
      brand: "CapCut Pro",
      price: "390.000 ₫",
      oldPrice: "890.000 ₫",
      discountBadge: "SALE OFF 56%",
      StartingFromBadge: "PC & MOBILE",
      duration: "1 Năm",
      cardBgGradient: "from-[#090d16] via-[#111827] to-[#1f2937]",
      accentColor: "#38bdf8",
      badgeText: "CapCut Pro",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
      features: ["Xóa phông video AI mượt mà", "Kho nhạc & hiệu ứng bản quyền", "100GB Cloud lưu trữ"],
    },

    // MICROSOFT & WINDOWS & LẬP TRÌNH
    {
      id: "ms-1",
      name: "Microsoft 365 Family / Personal Bản Quyền 1 Năm",
      subtitle: "Word, Excel, PowerPoint, Outlook + 1TB OneDrive + Copilot AI",
      categoryGroup: "Microsoft",
      subCategory: "Microsoft",
      brand: "Microsoft",
      price: "290.000 ₫",
      oldPrice: "1.290.000 ₫",
      discountBadge: "SALE OFF 77%",
      StartingFromBadge: "1TB ONEDRIVE",
      duration: "1 Năm Chính Chủ",
      cardBgGradient: "from-[#082f49] via-[#0369a1] to-[#0c4a6e]",
      accentColor: "#38bdf8",
      badgeText: "Microsoft 365",
      image:
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=600&q=80",
      features: ["Kích hoạt trên email cá nhân", "1TB lưu trữ đám mây OneDrive", "Hỗ trợ Windows, Mac, iPad"],
    },
    {
      id: "win-1",
      name: "Key Bản Quyền Windows 11 Pro Retail Vĩnh Viễn",
      subtitle: "Kích hoạt trực tiếp Microsoft, bảo mật BitLocker & Remote Desktop",
      categoryGroup: "Windows",
      subCategory: "Windows",
      brand: "Windows",
      price: "250.000 ₫",
      oldPrice: "3.990.000 ₫",
      discountBadge: "BẢN QUYỀN SỐ",
      StartingFromBadge: "VĨNH VIỄN",
      duration: "Trọn Đời Theo Máy",
      cardBgGradient: "from-[#0a192f] via-[#112240] to-[#1e3a8a]",
      accentColor: "#00a4ef",
      badgeText: "Windows 11 Pro",
      image:
        "https://images.unsplash.com/photo-1624571409108-e9a41746af53?auto=format&fit=crop&w=600&q=80",
      features: ["Key Retail chính hãng Microsoft", "Update Windows tự động", "Xuất hóa đơn VAT doanh nghiệp"],
    },
    {
      id: "dev-1",
      name: "JetBrains All Products Pack Bản Quyền 1 Năm",
      subtitle: "IntelliJ IDEA Ultimate, PyCharm, WebStorm, PhpStorm, DataGrip",
      categoryGroup: "Làm Việc",
      subCategory: "Lập Trình",
      brand: "JetBrains",
      price: "590.000 ₫",
      oldPrice: "4.500.000 ₫",
      discountBadge: "DEVELOPER PRO",
      StartingFromBadge: "FULL 16 IDE",
      duration: "1 Năm Chính Chủ",
      cardBgGradient: "from-[#271105] via-[#431407] to-[#180904]",
      accentColor: "#f97316",
      badgeText: "JetBrains Pack",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      features: ["Đầy đủ 16 IDE chuyên nghiệp", "Kích hoạt email cá nhân", "Hỗ trợ macOS, Windows, Linux"],
    },

    // GIẢI TRÍ & HỌC TẬP & VPN
    {
      id: "ent-1",
      name: "Gói Nâng Cấp YouTube Premium + Music 1 Năm",
      subtitle: "Xem video 4K không quảng cáo, nghe nhạc tắt màn hình trên iOS/Android/TV",
      categoryGroup: "Giải Trí",
      subCategory: "Giải Trí",
      brand: "YouTube",
      price: "359.000 ₫",
      oldPrice: "590.000 ₫",
      discountBadge: "SALE OFF 40%",
      StartingFromBadge: "CHỈ 29K/THÁNG",
      duration: "1 Năm Chính Chủ",
      cardBgGradient: "from-[#2b0508] via-[#4a0910] to-[#140406]",
      accentColor: "#ff0033",
      badgeText: "YouTube Premium",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80",
      features: ["Nâng cấp chính chủ trên Gmail", "Tặng kèm YouTube Music", "Bảo hành trọn gói 365 ngày"],
    },
    {
      id: "ent-2",
      name: "Tài Khoản Netflix Premium 4K Ultra HD 1 Năm",
      subtitle: "Profile riêng có mã PIN bảo mật, xem phim 4K Dolby Vision phụ đề Việt",
      categoryGroup: "Giải Trí",
      subCategory: "Giải Trí",
      brand: "Netflix",
      price: "69.000 ₫",
      oldPrice: "260.000 ₫",
      discountBadge: "SIÊU TIẾT KIỆM",
      StartingFromBadge: "4K ULTRA HD",
      duration: "1 Tháng / 1 Năm",
      cardBgGradient: "from-[#1f0406] via-[#450a0a] to-[#0f0203]",
      accentColor: "#e50914",
      badgeText: "Netflix 4K",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80",
      features: ["Chất lượng 4K HDR cao nhất", "Hỗ trợ Smart TV, Laptop, Điện thoại", "Không giới hạn thiết bị đăng nhập"],
    },
  ],
  b2bAdvantages: [
    {
      id: "adv-1",
      number: "01",
      title: "Bản Quyền Chính Hãng 100%",
      description:
        "Cung cấp license key và nâng cấp trực tiếp trên email chính chủ của cá nhân & doanh nghiệp, nói không với phần mềm lậu.",
    },
    {
      id: "adv-2",
      number: "02",
      title: "Kích Hoạt Tự Động Trong 3 Phút",
      description:
        "Hệ thống giao nhận key và nâng cấp tài khoản tự động 24/7 ngay sau khi thanh toán qua QR Banking hoặc cổng doanh nghiệp.",
    },
    {
      id: "adv-3",
      number: "03",
      title: "Bảo Hành 1 Đổi 1 Toàn Thời Hạn",
      description:
        "Cam kết bảo hành 1 đổi 1 hoặc hoàn tiền 100% trong suốt thời gian đăng ký gói 6 tháng, 1 năm hoặc vĩnh viễn.",
    },
    {
      id: "adv-4",
      number: "04",
      title: "Hợp Đồng & Hóa Đơn VAT Doanh Nghiệp",
      description:
        "Đối tác cung ứng phần mềm số lượng lớn cho hơn 800+ doanh nghiệp, trường học và agency thiết kế với đầy đủ hóa đơn VAT.",
    },
  ],
  stats: [
    { value: "120.000+", label: "Khách Hàng Tin Dùng Toàn Quốc" },
    { value: "850+", label: "Đối Tác Doanh Nghiệp & Agency" },
    { value: "3 Phút", label: "Thời Gian Kích Hoạt Bản Quyền" },
    { value: "99.9%", label: "Tỷ Lệ Bảo Hành Hài Lòng" },
  ],
  services: [
    {
      title: "Bản Quyền Công Cụ AI Thế Hệ Mới",
      description:
        "Cung cấp tài khoản ChatGPT Plus, Claude 3.5 Pro, Midjourney, Cursor AI, GitHub Copilot cho đội ngũ nhân sự.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Giải Pháp Phần Mềm Thiết Kế & Sáng Tạo",
      description:
        "Adobe Creative Cloud All Apps, Canva Pro फॉर Teams, CapCut Pro, Figma Professional chính hãng.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cấp Phép Microsoft & Bảo Mật Doanh Nghiệp",
      description:
        "Microsoft 365 Business, Windows 11 Pro, Kaspersky Endpoint Security và NordVPN Teams.",
      image:
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=800&q=80",
    },
  ],
  projects: [
    {
      title: "Triển Khai 200 Tài Khoản Adobe & Canva Pro Cho Tập Đoàn Truyền Thông",
      category: "Khách hàng Doanh nghiệp",
      summary: "Đồng bộ bản quyền thiết kế đám mây giúp tiết kiệm 60% chi phí vận hành hàng năm.",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      name: "Anh Trần Quốc Bảo",
      role: "Creative Director — Nova Studio",
      quote:
        "Cả team thiết kế 25 người của mình đều mua gói Adobe Full App và Midjourney tại WOKU. Kích hoạt ngay trên mail công ty, có hóa đơn VAT rất chuyên nghiệp!",
      rating: 5,
    },
  ],
  news: [
    {
      title: "So sánh ChatGPT Plus GPT-4o và Claude 3.5 Sonnet: Đâu là trợ lý AI tốt nhất cho công việc?",
      date: "22/10/2026",
      category: "Công nghệ AI",
      excerpt:
        "Đánh giá chi tiết hiệu năng lập trình, xử lý dữ liệu và sáng tạo nội dung của bộ đôi AI hàng đầu thế giới hiện nay.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
