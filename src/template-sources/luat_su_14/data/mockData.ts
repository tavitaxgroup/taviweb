import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PracticePillarItem {
  id: string;
  code: string;
  title: string;
  metricBadge: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface MegaProjectLegalItem {
  id: string;
  category: "Đặc Khu & Đô Thị" | "Golf & Nghỉ Dưỡng" | "Năng Lượng & Khoáng Sản";
  name: string;
  location: string;
  scale: string;
  legalScope: string;
  status: string;
  image: string;
}

export interface CrossBorderStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SeniorCounselProfile {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  focus: string;
  image: string;
}

export interface LuatSu14Data {
  business: Record<string, any>;
  [key: string]: any;
  header: {
    foundedYear: string;
    brandMain: string;
    brandSub: string;
    navLinks: Array<{
      label: string;
      href: string;
    }>;
    ctaLabel: string;
  };
  hero: {
    crestYear: string;
    crestTitle: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundImage: string;
    welcomeLandmarkTitle: string;
    welcomeLandmarkSub: string;
    highlights: Array<{
      value: string;
      label: string;
    }>;
  };
  pillarsSection: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: PracticePillarItem[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    categories: Array<
      "Tất Cả" | "Đặc Khu & Đô Thị" | "Golf & Nghỉ Dưỡng" | "Năng Lượng & Khoáng Sản"
    >;
    projects: MegaProjectLegalItem[];
  };
  processSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: CrossBorderStep[];
  };
  counselSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    counsels: SeniorCounselProfile[];
  };
  insightsSection: {
    eyebrow: string;
    title: string;
    articles: Array<{
      id: string;
      category: string;
      date: string;
      title: string;
      excerpt: string;
      image: string;
    }>;
  };
  consultationSection: {
    title: string;
    subtitle: string;
    sectors: string[];
  };
}

export const luatSu14DefaultData: LuatSu14Data = {
  business: {
    name: "KN VIENTIANE LEGAL GROUP",
    tagline:
      "Tập Đoàn Tư Vấn Pháp Lý Đầu Tư Golf, Bất Động Sản, Đặc Khu & Khoáng Sản Quốc Tế",
    phone: ["+84 28 3910 1978", "+856 21 415 888"],
    email: [
      "legalboard@knvientianegroup.com",
      "investment@knlegalgroup.vn",
    ],
    address:
      "Đặc khu Kinh tế Long Thành – Viêng Chăn & Tầng 18, Tòa nhà Lê Anh Xuân, Quận 1, TP. Hồ Chí Minh",
    hours: "Thứ 2 - Thứ 7: 08:00 - 17:30 (Hội đồng Pháp chế Xuyên biên giới)",
  },
  header: {
    foundedYear: "1978",
    brandMain: "KN VIENTIANE GROUP",
    brandSub: "MULTI-INDUSTRY INVESTMENT & LEGAL COUNSEL",
    navLinks: [
      { label: "Về Tập Đoàn", href: "#hero" },
      { label: "Lĩnh Vực Đầu Tư & Pháp Chế", href: "#pillars" },
      { label: "Dự Án Đặc Khu 557,28 Ha", href: "#projects" },
      { label: "Quy Trình Cấp Phép", href: "#process" },
      { label: "Hội Đồng Luật Sư", href: "#counsel" },
      { label: "Ấn Phẩm Pháp Lý", href: "#insights" },
      { label: "Liên Hệ Đầu Tư", href: "#contact" },
    ],
    ctaLabel: "Tư Vấn Pháp Chế Dự Án",
  },
  hero: {
    crestYear: "1978",
    crestTitle: "KN VIENTIANE GROUP",
    headline:
      "TẬP ĐOÀN ĐẦU TƯ & PHÁP CHẾ GOLF, BẤT ĐỘNG SẢN VÀ KHOÁNG SẢN TẠI LÀO & ĐÔNG DƯƠNG",
    subheadline:
      "Sân golf 27 hố tiêu chuẩn quốc tế và đại đô thị sinh thái trong Đặc khu Kinh tế Long Thành – Viêng Chăn quy mô 557,28 ha cùng hệ thống pháp chế đầu tư xuyên biên giới vững chắc.",
    primaryCta: "Hồ Sơ Pháp Lý Đặc Khu",
    secondaryCta: "Đặt Lịch Với Hội Đồng Luật Sư",
    backgroundImage:
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1600&q=85",
    welcomeLandmarkTitle: "WELCOME TO LONG VIEN GOLF CLUB & SEZ",
    welcomeLandmarkSub:
      "Quy hoạch 1/500 & Hiệp định Nhượng quyền Đầu tư Chính phủ 99 Năm",
    highlights: [
      { value: "1978", label: "Năm Khởi Nguồn Di Sản" },
      { value: "557,28 ha", label: "Đặc Khu Long Thành – Viêng Chăn" },
      { value: "27 Hố", label: "Tổ Hợp Sân Golf Quốc Tế" },
      { value: "1,5+ Tỷ USD", label: "Danh Mục Đầu Tư Đa Ngành" },
    ],
  },
  pillarsSection: {
    eyebrow: "LĨNH VỰC CHIẾN LƯỢC",
    title: "Hệ Sinh Thái Đầu Tư & Tư Vấn Pháp Chế Đa Ngành Chuẩn Quốc Tế",
    description:
      "Kết hợp năng lực phát triển đại dự án hạ tầng và đội ngũ luật sư quốc tế am hiểu sâu sắc khung pháp lý đầu tư Việt Nam – Lào – ASEAN.",
    pillars: [
      {
        id: "pil-1",
        code: "01",
        title: "Pháp Chế Đặc Khu Kinh Tế & Đại Đô Thị Sinh Thái",
        metricBadge: "Quy mô 557,28 ha",
        description:
          "Hoạch định toàn diện cấu trúc pháp lý khu đô thị phức hợp, cơ chế ưu đãi thuế đặc khu, quyền sở hữu bất động sản lâu dài cho nhà đầu tư quốc tế.",
        bullets: [
          "Hiệp định tô nhượng đất đai & phát triển hạ tầng với Chính phủ",
          "Quy chế quản trị vận hành Đặc khu Kinh tế chuyên biệt",
          "Cấu trúc hợp đồng mua bán, thuê dài hạn cho cư dân toàn cầu",
        ],
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "pil-2",
        code: "02",
        title: "Đầu Tư & Pháp Lý Tổ Hợp Sân Golf 27 Hố – Resort 5 Sao",
        metricBadge: "Chuẩn PGA Quốc tế",
        description:
          "Tư vấn cấp phép quy hoạch môi trường, tiêu chuẩn vận hành giải đấu quốc tế, hợp đồng quản lý khách sạn với các tập đoàn hospitality toàn cầu.",
        bullets: [
          "Thẩm định pháp lý môi trường (EIA) & sử dụng mặt nước",
          "Pháp lý thẻ hội viên Golf dài hạn & chuyển nhượng quốc tế",
          "Hợp đồng quản lý vận hành biệt thự nghỉ dưỡng ven hồ",
        ],
        image:
          "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "pil-3",
        code: "03",
        title: "Pháp Lý Thăm Dò, Khai Thác & Chế Biến Khoáng Sản",
        metricBadge: "Cấp phép Chính phủ",
        description:
          "Đại diện pháp lý xin giấy phép khảo sát địa chất, khai thác mỏ kim loại màu, vàng, đồng và khoáng sản chiến lược tuân thủ tiêu chuẩn ESG.",
        bullets: [
          "Hợp đồng chia sẻ sản lượng (PSA) & nghĩa vụ thuế tài nguyên",
          "Giấy phép xuất khẩu tinh quặng & logistics xuyên biên giới",
          "Tuân thủ an toàn lao động mỏ & phục hồi môi trường bền vững",
        ],
        image:
          "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "pil-4",
        code: "04",
        title: "Tư Vấn Đầu Tư Ra Nước Ngoài & M&A Xuyên Biên Giới",
        metricBadge: "Việt Nam – Lào – ASEAN",
        description:
          "Tư vấn trọn gói thủ tục cấp Giấy chứng nhận đăng ký đầu tư ra nước ngoài từ Bộ Kế hoạch & Đầu tư Việt Nam và Bộ Kế hoạch & Đầu tư Lào.",
        bullets: [
          "Cấu trúc vốn FDI, chuyển vốn hợp pháp qua ngân hàng trung ương",
          "Bảo hộ đầu tư theo Hiệp định song phương Việt – Lào",
          "Giải quyết tranh chấp thương mại quốc tế & trọng tài khu vực",
        ],
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  projectsSection: {
    eyebrow: "DANH MỤC DỰ ÁN TIÊU BIỂU",
    title: "Các Đại Dự Án Được Bảo Chứng Pháp Lý Bởi KN Vientiane Group",
    categories: [
      "Tất Cả",
      "Đặc Khu & Đô Thị",
      "Golf & Nghỉ Dưỡng",
      "Năng Lượng & Khoáng Sản",
    ],
    projects: [
      {
        id: "prj-1",
        category: "Đặc Khu & Đô Thị",
        name: "Đặc Khu Kinh Tế Long Thành – Viêng Chăn",
        location: "Thủ đô Viêng Chăn, CHDCND Lào",
        scale: "557,28 ha",
        legalScope:
          "Hoàn tất 100% Hiệp định Đặc khu, quy hoạch chi tiết 1/500 và cơ chế một cửa hải quan - thuế.",
        status: "Đang vận hành & Mở rộng GĐ 2",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-2",
        category: "Golf & Nghỉ Dưỡng",
        name: "Long Vien Golf Club (Tổ Hợp 27 Hố Quốc Tế)",
        location: "Đặc khu Long Thành – Viêng Chăn",
        scale: "165 ha mặt cỏ & hồ cảnh quan",
        legalScope:
          "Pháp lý sở hữu biệt thự sân golf, giấy phép tổ chức giải đấu quốc tế và vận hành Clubhouse 5 sao.",
        status: "Đã đi vào hoạt động",
        image:
          "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-3",
        category: "Năng Lượng & Khoáng Sản",
        name: "Tổ Hợp Khai Thác & Chế Biến Khoáng Sản Bắc Lào",
        location: "Tỉnh Xiêng Khoảng & Xaysomboun, Lào",
        scale: "320 ha vùng mỏ cấp phép",
        legalScope:
          "Giấy phép khai thác 30 năm của Chính phủ, hoàn tất đánh giá tác động môi trường quốc tế.",
        status: "Đang khai thác thương mại",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-4",
        category: "Đặc Khu & Đô Thị",
        name: "Khu Tài Chính Thương Mại & Biệt Thự Ngoại Giao",
        location: "Trung tâm Đặc khu Viêng Chăn",
        scale: "85 ha",
        legalScope:
          "Cấp giấy chứng nhận quyền sở hữu lâu dài cho chuyên gia, nhà đầu tư nước ngoài.",
        status: "Đang bàn giao phân khu 1",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-5",
        category: "Golf & Nghỉ Dưỡng",
        name: "Tổ Hợp Nghỉ Dưỡng Sinh Thái & Bến Du Thuyền Hồ Nam Ngum",
        location: "Vùng đô thị mở rộng Viêng Chăn",
        scale: "110 ha",
        legalScope:
          "Thẩm định pháp lý liên doanh quốc tế, hợp đồng nhượng quyền thương hiệu resort.",
        status: "Hoàn tất pháp lý đầu tư",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "prj-6",
        category: "Năng Lượng & Khoáng Sản",
        name: "Dự Án Năng Lượng Mặt Trời & Truyền Tải Điện Xuyên Biên Giới",
        location: "Nam Lào – Kết nối lưới điện Việt Nam",
        scale: "250 MWp",
        legalScope:
          "Hợp đồng mua bán điện (PPA) liên Chính phủ và cấu trúc tín dụng hợp vốn quốc tế.",
        status: "Đã ký kết PPA",
        image:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  processSection: {
    eyebrow: "LỘ TRÌNH PHÁP LÝ XUYÊN BIÊN GIỚI",
    title: "Quy Trình 5 Bước Thẩm Định & Cấp Phép Đầu Tư Đa Ngành",
    subtitle:
      "Đảm bảo tính minh bạch, an toàn dòng vốn và tối đa hóa ưu đãi thuế quan cho các tập đoàn đồng hành cùng KN Vientiane Group.",
    steps: [
      {
        stepNumber: "01",
        title: "Ký Kết Biên Bản Ghi Nhớ (MOU) & Khảo Sát Thực Địa",
        subtitle: "Giai đoạn Tiền khả thi",
        description:
          "Làm việc trực tiếp với Ủy ban Quản lý Đặc khu và Bộ Kế hoạch & Đầu tư để xác lập quyền nghiên cứu dự án độc quyền.",
      },
      {
        stepNumber: "02",
        title: "Thẩm Định Pháp Lý, Quy Hoạch & Đánh Giá Môi Trường (EIA)",
        subtitle: "Giai đoạn Nghiên cứu Khả thi (FS)",
        description:
          "Hoàn thiện báo cáo kinh tế - kỹ thuật, thẩm định trữ lượng khoáng sản hoặc quy hoạch chi tiết 1/500 khu đô thị.",
      },
      {
        stepNumber: "03",
        title: "Đàm Phán Hiệp Định Tô Nhượng (CA) & Ưu Đãi Thuế",
        subtitle: "Phê duyệt cấp Chính phủ",
        description:
          "Xác lập thời hạn dự án 50 - 99 năm, miễn giảm thuế thu nhập doanh nghiệp và thuế nhập khẩu máy móc thiết bị.",
      },
      {
        stepNumber: "04",
        title: "Cấp Phép Đầu Tư Ra Nước Ngoài & Chuyển Vốn Hợp Pháp",
        subtitle: "Tuân thủ Ngoại hối & Ngân hàng",
        description:
          "Hoàn tất giấy phép đầu tư tại Việt Nam và nước sở tại, mở tài khoản vốn đầu tư trực tiếp tại ngân hàng quốc tế.",
      },
      {
        stepNumber: "05",
        title: "Vận Hành Pháp Chế Thường Xuyên & Bảo Hộ Quyền Lợi",
        subtitle: "Đồng hành Trọn vòng đời Dự án",
        description:
          "Quản trị hợp đồng tổng thầu EPC, cấp sổ sở hữu cho khách hàng thứ cấp và bảo vệ pháp lý toàn diện.",
      },
    ],
  },
  counselSection: {
    eyebrow: "HỘI ĐỒNG CỐ VẤN PHÁP CHẾ",
    title: "Đội Ngũ Luật Sư & Chuyên Gia Pháp Lý Đầu Tư Quốc Tế",
    subtitle:
      "Quy tụ các luật sư kỳ cựu thôngạo luật pháp Việt Nam, Lào và quy chuẩn Trọng tài Quốc tế.",
    counsels: [
      {
        id: "cs-1",
        name: "LS. TS. Nguyễn Khắc Nghiêm",
        role: "Chủ tịch Hội đồng Pháp chế & Đầu tư",
        credentials: "Tiến sĩ Luật Kinh tế Quốc tế • 28 năm kinh nghiệm",
        experience:
          "Trực tiếp chủ trì đàm phán các Hiệp định Đặc khu Kinh tế, dự án sân golf và tô nhượng khoáng sản quy mô hàng trăm triệu USD tại Đông Dương.",
        focus: "Pháp lý Đặc khu, M&A Đa quốc gia & Hiệp định Chính phủ",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cs-2",
        name: "LS. Khamphone Vongsay",
        role: "Giám đốc Pháp chế Khu vực Viêng Chăn",
        credentials: "Đoàn Luật sư Quốc gia Lào • Cố vấn Cao cấp SEZ",
        experience:
          "Chuyên gia hàng đầu về Luật Đất đai, Luật Khoáng sản và cơ chế thuế quan ưu đãi tại CHDCND Lào cho các nhà đầu tư nước ngoài.",
        focus: "Tô nhượng Đất đai, Cấp phép Mỏ & Hải quan Đặc khu",
        image:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cs-3",
        name: "LS. Trần Minh Phương",
        role: "Luật sư Thành viên – Khối Bất Động Sản & Golf",
        credentials: "Thạc sĩ Luật Thương mại Quốc tế (LL.M, Anh Quốc)",
        experience:
          "Tư vấn cấu trúc pháp lý cho hơn 15 tổ hợp sân golf, khu đô thị nghỉ dưỡng và hợp đồng quản lý khách sạn 5 sao quốc tế.",
        focus: "Bất động sản Nghỉ dưỡng, Hợp đồng FIDIC & Tài chính Dự án",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  insightsSection: {
    eyebrow: "ẤN PHẨM & BẢN TIN ĐẦU TƯ",
    title: "Phân Tích Pháp Lý Đầu Tư Bất Động Sản, Golf & Khoáng Sản",
    articles: [
      {
        id: "ins-1",
        category: "PHÁP LÝ ĐẶC KHU",
        date: "22 Tháng 10, 2026",
        title:
          "Cơ Chế Ưu Đãi Thuế Và Quyền Sở Hữu Bất Động Sản Tại Đặc Khu Kinh Tế Long Thành – Viêng Chăn",
        excerpt:
          "Phân tích chi tiết chính sách miễn thuế thu nhập doanh nghiệp trong giai đoạn đầu và quyền cư trú dài hạn cho nhà đầu tư nước ngoài.",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "ins-2",
        category: "KHOÁNG SẢN & NĂNG LƯỢNG",
        date: "18 Tháng 10, 2026",
        title:
          "Quy Định Mới Về Cấp Phép Thăm Dò Và Chế Biến Sâu Khoáng Sản Chiến Lược Tại Đông Dương",
        excerpt:
          "Hướng dẫn quy trình tuân thủ môi trường ESG và thủ tục xuất khẩu sản phẩm khoáng sản đã qua tinh luyện.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "ins-3",
        category: "ĐẦU TƯ XUYÊN BIÊN GIỚI",
        date: "14 Tháng 10, 2026",
        title:
          "Thủ Tục Xin Cấp Giấy Chứng Nhận Đăng Ký Đầu Tư Ra Nước Ngoài Cho Doanh Nghiệp Việt Nam",
        excerpt:
          "Cẩm nang chuẩn bị hồ sơ chứng minh năng lực tài chính, phương án chuyển ngoại tệ và báo cáo Ngân hàng Nhà nước.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  consultationSection: {
    title: "Kết Nối Cùng Ban Pháp Chế & Đầu Tư KN Vientiane Group",
    subtitle:
      "Gửi yêu cầu thẩm định dự án, hợp tác đầu tư bất động sản đặc khu, sân golf hoặc khai thác khoáng sản để nhận tư vấn trực tiếp từ Hội đồng Luật sư.",
    sectors: [
      "Đầu tư Bất động sản & Khu đô thị Đặc khu (557,28 ha)",
      "Thẻ Hội viên & Biệt thự Sân Golf 27 Hố Long Viên",
      "Hợp tác Khai thác & Pháp lý Mỏ Khoáng sản",
      "Tư vấn Thủ tục Đầu tư Xuyên biên giới Việt – Lào",
    ],
  },
};
