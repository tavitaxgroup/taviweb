import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface BlueUniVisionCard {
  id: string;
  title: string;
  description: string;
  bgColor: "red" | "blue";
  iconType: "vision" | "mission" | "motto";
}

export interface BlueUniMajorItem {
  id: string;
  title: string;
  code: string;
  duration: string;
  degree: string;
  image: string;
  summary: string;
  highlights: string[];
  careerOpportunities: string[];
  partnerSchools: string[];
}

export interface BlueUniScholarshipTier {
  id: string;
  percent: string;
  label: string;
  condition: string;
  quota: string;
  benefits: string[];
}

export interface BlueUniGraduatePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: "expertise" | "skills" | "ethics";
  metrics: string;
}

export interface BlueUniAdmissionNotice {
  id: string;
  title: string;
  category: string;
  date: string;
  intake: string;
  excerpt: string;
  image: string;
  isFeatured?: boolean;
  requirements: string[];
}

export interface BlueUniTestimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BlueUniNewsPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export interface TrungTamTiengAnh14Data extends Omit<ClonedTemplateBaseData, "business" | "hero" | "services"> {
  business: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    [key: string]: any;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundImage: string;
    [key: string]: any;
  };
  services?: Array<Record<string, any>>;
  header: {
    brandSub: string;
    address: string;
    phone: string;
    email: string;
    searchPlaceholder: string;
    navItems: { label: string; href: string; hasDropdown?: boolean }[];
  };
  visionBanner: BlueUniVisionCard[];
  majorsSection: {
    heading: string;
    subtitle: string;
    items: BlueUniMajorItem[];
  };
  scholarshipBanner: {
    noticeTag: string;
    heading: string;
    subtext: string;
    advisorImage: string;
    tiers: BlueUniScholarshipTier[];
  };
  graduateSection: {
    heading: string;
    subtitle: string;
    pillars: BlueUniGraduatePillar[];
  };
  admissionsSection: {
    heading: string;
    subtitle: string;
    notices: BlueUniAdmissionNotice[];
  };
  sharingCorner: {
    heading: string;
    bookDecorImage: string;
    testimonials: BlueUniTestimonial[];
  };
  newsSection: {
    heading: string;
    subtitle: string;
    posts: BlueUniNewsPost[];
  };
  footer: {
    officeTitle: string;
    majorsTitle: string;
    latestNewsTitle: string;
    subscribeTitle: string;
    subscribeDesc: string;
    copyright: string;
  };
}

export const defaultData: TrungTamTiengAnh14Data = {
  business: {
    name: "Học Viện Giáo Dục & Ngoại Ngữ BlueUni",
    tagline: "Đại học Quốc tế BlueUni — Thành công của tương lai bắt đầu từ hôm nay",
    phone: "0905 922 016",
    email: "tuyensinh@blueuni.edu.vn",
    address: "319 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
  },
  header: {
    brandSub: "ĐẠI HỌC QUỐC TẾ BLUEUNI",
    address: "319 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    phone: "0905 922 016",
    email: "tuyensinh@blueuni.edu.vn",
    searchPlaceholder: "Tìm kiếm ngành học, học bổng...",
    navItems: [
      { label: "GIỚI THIỆU", href: "#gioi-thieu" },
      { label: "HỘI THẢO", href: "#hoi-thao", hasDropdown: true },
      { label: "THÔNG TIN NGÀNH HỌC", href: "#chuyen-nganh", hasDropdown: true },
      { label: "TUYỂN SINH", href: "#tuyen-sinh" },
      { label: "TIN TỨC", href: "#tin-tuc" },
      { label: "LIÊN HỆ", href: "#lien-he" },
    ],
  },
  hero: {
    badge: "HỆ THỐNG ĐÀO TẠO NGOẠI NGỮ & DU HỌC QUỐC TẾ UY TÍN",
    title: "HỌC VIỆN QUỐC TẾ BLUEUNI",
    subtitle: "Thành công của tương lai bắt đầu từ hôm nay",
    primaryCta: "Đăng Ký Xét Học Bổng",
    secondaryCta: "Khám Phá Ngành Học",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
  },
  visionBanner: [
    {
      id: "vision",
      title: "Tầm nhìn",
      description:
        "Trở thành cầu nối giáo dục hàng đầu giúp học sinh, sinh viên Việt Nam tiếp cận các chương trình đào tạo ngoại ngữ, cao đẳng nghề và đại học uy tín tại Nhật Bản, Hàn Quốc, Úc và Châu Âu.",
      bgColor: "red",
      iconType: "vision",
    },
    {
      id: "mission",
      title: "Sứ mệnh",
      description:
        "Đào tạo nguồn nhân lực chất lượng cao, thành thạo ngoại ngữ IELTS / JLPT / TOPIK với chi phí hợp lý, tỉ lệ đỗ Visa trên 99%, giúp học viên hoàn thành mục tiêu du học trong thời gian ngắn nhất.",
      bgColor: "blue",
      iconType: "mission",
    },
    {
      id: "motto",
      title: "Phương châm",
      description:
        "Định hướng tương lai cá nhân hóa giúp học sinh, sinh viên học tập hiệu quả, quyết định đúng chuyên ngành và lựa chọn công việc phù hợp sở thích, tiềm năng phát triển lâu dài.",
      bgColor: "red",
      iconType: "motto",
    },
  ],
  majorsSection: {
    heading: "CHUYÊN NGÀNH ĐÀO TẠO",
    subtitle:
      "Chương trình đào tạo song ngữ chuẩn quốc tế kết hợp chuyển tiếp du học hưởng lương và cam kết việc làm tại các tập đoàn đa quốc gia",
    items: [
      {
        id: "major-nursing",
        title: "Điều dưỡng Quốc tế",
        code: "BU-NUR01",
        duration: "3 - 4 Năm (1 năm tại VN + 2-3 năm tại Nhật/Đức)",
        degree: "Cử nhân Thực hành Điều dưỡng & Chứng chỉ Quốc gia",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
        summary:
          "Đào tạo chuyên sâu kiến thức y khoa cơ sở, kỹ năng chăm sóc điều dưỡng chuẩn Nhật Bản - CHLB Đức cùng năng lực ngoại ngữ JLPT N3/N2 hoặc tiếng Đức B2.",
        highlights: [
          "Tài trợ 100% học phí chuyên ngành từ các tập đoàn Y tế lớn tại Tokyo & Osaka",
          "Thực tập hưởng lương từ 28 - 35 triệu VNĐ/tháng ngay trong quá trình học",
          "Cam kết 100% việc làm chính thức tại bệnh viện quốc tế sau tốt nghiệp",
        ],
        careerOpportunities: [
          "Điều dưỡng viên quốc tế tại Nhật Bản, CHLB Đức, Úc",
          "Chuyên viên quản lý chăm sóc sức khỏe tại bệnh viện quốc tế",
          "Giảng viên hướng dẫn thực hành điều dưỡng & biên dịch y khoa",
        ],
        partnerSchools: [
          "Học viện Y khoa Quốc tế Tokyo (Nhật Bản)",
          "Tập đoàn Điều dưỡng Asklepios (CHLB Đức)",
        ],
      },
      {
        id: "major-it",
        title: "Công nghệ thông tin",
        code: "BU-IT02",
        duration: "3.5 - 4 Năm (Đào tạo song ngữ Anh - Nhật)",
        degree: "Kỹ sư Phần mềm & Chứng chỉ Kỹ sư CNTT Quốc tế FE",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
        summary:
          "Chương trình Kỹ sư Cầu nối (BrSE) kết hợp lập trình Full-stack, Trí tuệ nhân tạo (AI) cùng tiếng Anh học thuật IELTS 6.5+ và tiếng Nhật chuyên ngành CNTT.",
        highlights: [
          "Học dự án thực chiến (Project-based Learning) cùng mentor từ các công ty IT Nhật - Mỹ",
          "Chuyển tiếp 2+2 sang các trường Đại học Công nghệ tại Tokyo, Fukuoka hoặc Melbourne",
          "Lương khởi điểm kỹ sư BrSE từ 45 - 65 triệu VNĐ/tháng sau khi tốt nghiệp",
        ],
        careerOpportunities: [
          "Kỹ sư cầu nối (BrSE) Việt Nam - Nhật Bản",
          "Kỹ sư phát triển phần mềm Full-stack / Cloud / AI",
          "Chuyên viên phân tích nghiệp vụ (Business Analyst) quốc tế",
        ],
        partnerSchools: [
          "Học viện Công nghệ HAL Tokyo & Osaka",
          "Đại học Kỹ thuật Swinburne (Úc)",
        ],
      },
      {
        id: "major-hospitality",
        title: "Nhà hàng – Khách sạn",
        code: "BU-HOS03",
        duration: "2.5 - 3.5 Năm (50% Lý thuyết + 50% Thực tập hưởng lương)",
        degree: "Cử nhân Quản trị Khách sạn & Du lịch Quốc tế",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
        summary:
          "Đào tạo nghiệp vụ quản trị khách sạn 5 sao, nghệ thuật ẩm thực, tổ chức sự kiện quốc tế và giao tiếp đa ngôn ngữ Anh - Nhật - Hàn chuyên nghiệp.",
        highlights: [
          "Thực tập hưởng lương (Paid Internship) tại hệ thống resort 5 sao Nhật Bản, Thụy Sĩ & Singapore",
          "Chứng chỉ nghiệp vụ khách sạn quốc tế AHLEI & tiếng Anh thương mại chuẩn quốc tế",
          "Cơ hội chuyển đổi Visa Kỹ năng đặc định / Kỹ sư lưu trú dài hạn tại nước ngoài",
        ],
        careerOpportunities: [
          "Quản lý tiền sảnh (Front Office Manager) tại chuỗi khách sạn 5 sao",
          "Chuyên viên điều hành sự kiện & dịch vụ lữ hành quốc tế",
          "Giám sát bộ phận F&B tại resort cao cấp Nhật Bản, Singapore",
        ],
        partnerSchools: [
          "Trường Chuyên môn Khách sạn & Du lịch YMCA Tokyo",
          "Học viện Quản trị Khách sạn Quốc tế SHMS",
        ],
      },
      {
        id: "major-accounting",
        title: "Kế toán – Tài chính",
        code: "BU-FIN04",
        duration: "3.5 - 4 Năm (Tích hợp chứng chỉ ACCA / Nissho Boki)",
        degree: "Cử nhân Kế toán – Tài chính Quốc tế",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        summary:
          "Trang bị kiến thức chuẩn mực kế toán quốc tế IFRS, phân tích tài chính doanh nghiệp, kiểm toán và tiếng Anh/tiếng Nhật chuyên ngành thương mại.",
        highlights: [
          "Miễn giảm đến 5 môn thi chứng chỉ Kế toán Công chứng Anh Quốc ACCA",
          "Luyện thi chứng chỉ kế toán Nhật Bản Nissho Boki cấp độ 3 & 2 ngay tại trường",
          "Thực tập tại các công ty kiểm toán Big4 và doanh nghiệp FDI Nhật Bản, Hàn Quốc",
        ],
        careerOpportunities: [
          "Chuyên viên kiểm toán & tư vấn thuế tại các tập đoàn đa quốc gia",
          "Chuyên viên phân tích tài chính & đầu tư doanh nghiệp FDI",
          "Kế toán tổng hợp song ngữ Anh - Nhật",
        ],
        partnerSchools: [
          "Đại học Kinh tế Quốc tế Tokyo (TIU)",
          "Học viện Kinh doanh & Tài chính Ohara (Nhật Bản)",
        ],
      },
    ],
  },
  scholarshipBanner: {
    noticeTag: "Thông báo",
    heading: "HỌC BỔNG KHUYẾN HỌC BLUEUNI",
    subtext:
      "Quỹ học bổng tài năng & khuyến học trị giá 15 tỷ đồng dành cho học sinh THPT, sinh viên có thành tích học tập tốt hoặc chứng chỉ IELTS / JLPT xuất sắc kỳ nhập học 2025.",
    advisorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    tiers: [
      {
        id: "tier-25",
        percent: "25%",
        label: "Học bổng Khởi đầu",
        condition: "Điểm TB lớp 12 từ 6.5+ hoặc đăng ký nhập học sớm trước 30 ngày",
        quota: "150 suất học bổng",
        benefits: [
          "Giảm 25% học phí khóa đào tạo ngoại ngữ nền tảng (IELTS / JLPT)",
          "Tặng bộ giáo trình bản quyền quốc tế & tài khoản luyện thi trực tuyến",
          "Miễn phí 100% lệ phí dịch thuật và xử lý hồ sơ du học ban đầu",
        ],
      },
      {
        id: "tier-50",
        percent: "50%",
        label: "Học bổng Vươn xa",
        condition: "Điểm TB lớp 12 từ 7.5+ hoặc có chứng chỉ IELTS 5.5 / JLPT N4",
        quota: "80 suất học bổng",
        benefits: [
          "Giảm 50% học phí năm đầu tiên tại Học viện Quốc tế BlueUni",
          "Hỗ trợ 50% phí ký túc xá 6 tháng đầu khi chuyển tiếp sang trường đối tác",
          "Luyện phỏng vấn 1-1 cùng chuyên gia khảo thí và cựu du học sinh",
        ],
      },
      {
        id: "tier-75",
        percent: "75%",
        label: "Học bổng Tinh hoa",
        condition: "Điểm TB lớp 12 từ 8.2+ hoặc có chứng chỉ IELTS 6.0 / JLPT N3",
        quota: "40 suất học bổng",
        benefits: [
          "Giảm 75% học phí toàn khóa đào tạo ngoại ngữ & chuyên ngành tại Việt Nam",
          "Tặng vé máy bay 1 chiều sang Nhật Bản / Hàn Quốc / Úc khi có Visa",
          "Giới thiệu việc làm thêm đúng chuyên ngành ngay tuần đầu nhập học",
        ],
      },
      {
        id: "tier-100",
        percent: "100%",
        label: "Học bổng Toàn phần BlueUni",
        condition: "Điểm TB lớp 12 từ 8.8+, IELTS 6.5+ / JLPT N2 hoặc đạt giải HSG cấp Tỉnh/Thành phố",
        quota: "15 suất đặc biệt",
        benefits: [
          "Tài trợ 100% học phí toàn chương trình đào tạo và phí hồ sơ Visa",
          "Trợ cấp sinh hoạt phí hàng tháng từ Quỹ Khuyến học Doanh nghiệp Đối tác",
          "Cam kết tuyển dụng thẳng vào vị trí Quản trị viên tập sự sau tốt nghiệp",
        ],
      },
    ],
  },
  graduateSection: {
    heading: "SINH VIÊN SAU TỐT NGHIỆP",
    subtitle:
      "Mô hình đào tạo Kiềng 3 Chân: Chuyên môn vững — Kỹ năng đa dạng — Đạo đức chuẩn mực giúp sinh viên BlueUni tự tin hội nhập toàn cầu",
    pillars: [
      {
        id: "pillar-expertise",
        title: "Chuyên môn giỏi",
        subtitle: "Lý thuyết vững vàng, thực hành thành thạo",
        description:
          "100% sinh viên tốt nghiệp nắm vững kiến thức chuyên ngành theo chuẩn quốc tế, có việc làm chính thức ngay trong năm đầu tiên tại Việt Nam hoặc nước ngoài.",
        iconType: "expertise",
        metrics: "100% Có việc làm sau tốt nghiệp",
      },
      {
        id: "pillar-skills",
        title: "Kỹ năng đa dạng",
        subtitle: "Phát triển tối đa năng lực bản thân",
        description:
          "Trang bị đầy đủ các kỹ năng mềm thiết yếu: thông thạo tiếng Anh IELTS / tiếng Nhật JLPT, Tin học văn phòng chuẩn quốc tế MOS, kỹ năng làm việc nhóm và thuyết trình đa văn hóa.",
        iconType: "skills",
        metrics: "Chuẩn ngoại ngữ IELTS 6.5+ / JLPT N2",
      },
      {
        id: "pillar-ethics",
        title: "Đạo đức chuẩn mực",
        subtitle: "Rèn luyện trong môi trường kỷ luật & nhân văn",
        description:
          "Xây dựng nhân cách người công dân toàn cầu: Hiếu thảo với cha mẹ, Thượng tôn pháp luật nước sở tại, Tác phong chuyên nghiệp chuẩn Nhật Bản và tinh thần phụng sự xã hội.",
        iconType: "ethics",
        metrics: "Tác phong chuẩn Doanh nghiệp Quốc tế",
      },
    ],
  },
  admissionsSection: {
    heading: "THÔNG TIN TUYỂN SINH",
    subtitle:
      "Cập nhật các đợt tuyển sinh du học học bổng, chương trình vừa học vừa làm và đào tạo ngoại ngữ cấp tốc mới nhất tại BlueUni",
    notices: [
      {
        id: "adm-featured",
        title: "Tuyển sinh du học Nhật Bản & Quốc tế kỳ mùa Thu — Học bổng đến 100%",
        category: "TUYỂN SINH TRỌNG ĐIỂM",
        date: "15/05/2025",
        intake: "Kỳ nhập học Tháng 09 & Tháng 10/2025",
        excerpt:
          "Chương trình tuyển sinh liên kết trực tiếp với hơn 85 trường Nhật ngữ, Cao đẳng và Đại học hàng đầu tại Tokyo, Osaka, Nagoya. Hỗ trợ chứng minh tài chính, đào tạo tiếng Nhật N5-N3 và cam kết việc làm thêm hợp pháp 28h/tuần.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
        isFeatured: true,
        requirements: [
          "Tốt nghiệp THPT trở lên (điểm trung bình từ 6.0 trở lên)",
          "Độ tuổi từ 18 - 28 tuổi, sức khỏe tốt, không có tiền án tiền sự",
          "Hoàn thành khóa tiếng Nhật dự bị tối thiểu 150 giờ tại BlueUni",
        ],
      },
      {
        id: "adm-work-study",
        title: "THÔNG BÁO TUYỂN DU HỌC SINH VỪA HỌC VỪA LÀM TẠI NHẬT BẢN",
        category: "VỪA HỌC VỪA LÀM",
        date: "10/05/2025",
        intake: "Đợt nhận hồ sơ: Liên tục hàng tháng",
        excerpt:
          "BlueUni thông báo tuyển sinh chương trình Du học Vừa học vừa làm (học bổng báo Asahi, Yomiuri, học bổng Điều dưỡng và Nhà hàng khách sạn). Miễn 100% tiền ký túc xá và hỗ trợ lương thực tập từ 22 - 28 triệu VNĐ/tháng.",
        image:
          "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=700&q=80",
        requirements: [
          "Học sinh tốt nghiệp THPT, Trung cấp, Cao đẳng hoặc Đại học",
          "Cam kết vừa học tại trường Nhật ngữ vừa làm việc đúng quy định",
          "Được đào tạo phỏng vấn 1-1 với đại diện tập đoàn tài trợ Nhật Bản",
        ],
      },
      {
        id: "adm-scholarship-200",
        title: "Tuyển 200 học sinh du học học bổng khóa tháng 01 – 04 năm tới",
        category: "HỌC BỔNG KHUYẾN HỌC",
        date: "02/05/2025",
        intake: "Kỳ nhập học Tháng 01 & Tháng 04",
        excerpt:
          "Dành riêng 200 chỉ tiêu học bổng nợ học phí 0% lãi suất và học bổng toàn phần chuyên ngành Điều dưỡng, CNTT, Cơ khí ô tô và Quản trị khách sạn. Tỉ lệ đỗ COE/Visa 99.4% trong 5 năm liên tiếp.",
        image:
          "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=700&q=80",
        requirements: [
          "Nộp hồ sơ xét duyệt sớm để giữ suất học bổng trường đối tác",
          "Tham gia bài kiểm tra năng lực tư duy & định hướng ngành học miễn phí",
          "Hỗ trợ hoàn thiện hồ sơ xin COE và luyện phỏng vấn Cục Xuất nhập cảnh",
        ],
      },
    ],
  },
  sharingCorner: {
    heading: "GÓC CHIA SẺ",
    bookDecorImage:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    testimonials: [
      {
        id: "share-1",
        name: "Cô Nguyễn Thị Ngọc Lan",
        role: "Phụ huynh du học sinh Trần Minh Quân (ĐH Quốc tế Tokyo)",
        program: "Học bổng 75% Chuyên ngành Công nghệ thông tin",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        quote:
          "Gia đình tôi từng rất lo lắng khi cho con đi du học tự túc vì sợ chi phí phát sinh và con bỡ ngỡ nơi đất khách. Nhờ sự tận tâm của các thầy cô tại Học viện BlueUni, cháu Quân không chỉ đạt JLPT N2 và IELTS 6.5 chỉ sau 10 tháng mà còn giành được học bổng 75% học phí. Sang Nhật 2 tuần cháu đã có việc làm thêm đúng ngành, thường xuyên gọi về khoe môi trường học tập rất tốt.",
        rating: 5,
      },
      {
        id: "share-2",
        name: "Bạn Lê Hoàng Bảo Trâm",
        role: "Sinh viên năm 2 — Học viện Y khoa Quốc tế Osaka",
        program: "Học bổng Toàn phần 100% Điều dưỡng Quốc tế",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        quote:
          "Thời gian học tập tại BlueUni là bước đệm tuyệt vời nhất của em. Thầy cô không chỉ dạy ngoại ngữ sát thực tế mà còn rèn luyện kỹ năng phỏng vấn, văn hóa ứng xử trong bệnh viện Nhật Bản. Nhờ vậy em đã vượt qua kỳ phỏng vấn học bổng 100% ngay lần đầu tiên và hoàn toàn tự lập tài chính tại Osaka.",
        rating: 5,
      },
      {
        id: "share-3",
        name: "Bạn Phạm Đức Anh",
        role: "Quản trị viên tập sự — Chuỗi Khách sạn Prince Hotel Tokyo",
        program: "Cử nhân Quản trị Nhà hàng – Khách sạn",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        quote:
          "Chương trình 50% lý thuyết kết hợp 50% thực tập hưởng lương của BlueUni giúp mình tích lũy kinh nghiệm làm việc thực tế tại khách sạn 5 sao ngay khi còn ngồi trên ghế nhà trường. Ngay sau khi tốt nghiệp, mình đã được giữ lại làm việc chính thức với mức đãi ngộ vượt kỳ vọng.",
        rating: 5,
      },
    ],
  },
  newsSection: {
    heading: "TIN TỨC",
    subtitle:
      "Cẩm nang phỏng vấn Visa, kinh nghiệm săn học bổng và thông tin đời sống du học sinh mới nhất",
    posts: [
      {
        id: "news-1",
        title: "Danh sách câu hỏi phỏng vấn của Cục xuất nhập cảnh Nhật Bản",
        category: "CẨM NANG VISA",
        date: "18/05/2025",
        readTime: "6 phút đọc",
        excerpt:
          "Tổng hợp 35 câu hỏi phỏng vấn tiếng Nhật và câu hỏi xác minh người bảo lãnh thường gặp nhất từ Cục Xuất nhập cảnh Nhật Bản giúp hồ sơ đạt COE tỉ lệ 100%...",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "news-2",
        title: "Điều kiện du học Nhật Bản & Học bổng khuyến học mới nhất 2025",
        category: "THÔNG TIN DU HỌC",
        date: "12/05/2025",
        readTime: "5 phút đọc",
        excerpt:
          "Cập nhật quy định mới nhất về độ tuổi, điểm GPA, chứng chỉ năng lực tiếng Nhật JLPT/NAT-TEST và thủ tục chứng minh tài chính du học kỳ tháng 10 & tháng 04...",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "news-3",
        title: "Hướng dẫn thủ tục nhập cảnh, đăng ký thẻ lưu trú và làm thêm tại Nhật",
        category: "ĐỜI SỐNG DU HỌC",
        date: "05/05/2025",
        readTime: "7 phút đọc",
        excerpt:
          "Quy trình chi tiết từ khi hạ cánh tại sân bay Narita/Kansai: nhận thẻ ngoại kiều (Zairyu Card), xin giấy phép làm thêm 28h/tuần (Shikakugai) và mở tài khoản ngân hàng...",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  footer: {
    officeTitle: "VĂN PHÒNG CHÍNH",
    majorsTitle: "NGÀNH HỌC",
    latestNewsTitle: "TIN MỚI NHẤT",
    subscribeTitle: "ĐĂNG KÝ NHẬN TIN",
    subscribeDesc:
      "Đăng ký email để nhận thông báo lịch hội thảo du học và các suất học bổng khuyến học BlueUni sớm nhất.",
    copyright:
      "© Bản quyền thuộc về Học Viện Giáo Dục & Ngoại Ngữ Quốc Tế BlueUni. Thiết kế chuẩn giao diện Giáo Dục.",
  },
  services: [
    {
      title: "Điều dưỡng Quốc tế",
      description: "Chương trình đào tạo Điều dưỡng chuẩn Nhật - Đức tài trợ 100% học phí.",
    },
    {
      title: "Công nghệ thông tin (BrSE)",
      description: "Đào tạo Kỹ sư Cầu nối CNTT song ngữ Anh - Nhật cam kết việc làm.",
    },
    {
      title: "Nhà hàng – Khách sạn",
      description: "Thực tập hưởng lương tại hệ thống khách sạn & resort 5 sao quốc tế.",
    },
    {
      title: "Kế toán – Tài chính",
      description: "Chương trình tích hợp chứng chỉ kế toán quốc tế ACCA & Nissho Boki.",
    },
  ],
  stats: [
    { label: "Tỉ lệ đỗ Visa / COE", value: "99.4%" },
    { label: "Sinh viên có việc làm", value: "100%" },
    { label: "Trường ĐH & CĐ đối tác", value: "85+" },
    { label: "Quỹ học bổng mỗi năm", value: "15 Tỷ" },
  ],
  testimonials: [
    {
      name: "Cô Nguyễn Thị Ngọc Lan",
      role: "Phụ huynh du học sinh ĐH Quốc tế Tokyo",
      quote:
        "Nhờ sự tận tâm của các thầy cô tại Học viện BlueUni, con tôi không chỉ đạt JLPT N2 mà còn giành được học bổng 75% học phí.",
    },
    {
      name: "Lê Hoàng Bảo Trâm",
      role: "Học bổng 100% Điều dưỡng Osaka",
      quote:
        "Thời gian học tập tại BlueUni là bước đệm tuyệt vời giúp em vượt qua kỳ phỏng vấn học bổng toàn phần ngay lần đầu tiên.",
    },
  ],
};
