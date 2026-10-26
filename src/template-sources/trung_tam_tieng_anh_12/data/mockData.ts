import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTam12CountryGuide {
  id: string;
  name: string;
  flagEmoji: string;
  color: string;
  highlight: string;
  programs: string[];
}

export interface TrungTam12ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface TrungTam12TemplateData extends ClonedTemplateBaseData {
  countryCarousel: TrungTam12CountryGuide[];
  featuredEvents: TrungTam12ArticleItem[];
  scholarshipItems: TrungTam12ArticleItem[];
  essentialGuides: TrungTam12ArticleItem[];
  vocationalPrograms: TrungTam12ArticleItem[];
}

export const trungTam12DefaultData: TrungTam12TemplateData = {
  business: {
    name: "Học Viện AMEC",
    logo: "",
    phone: ["0906 922 016", "028 3922 0168"],
    email: ["info@amec.edu.vn", "duhoc@amec.edu.vn"],
    address: "319 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:30",
    rating: 4.9,
    reviewCount: 385,
    experienceYears: "18+",
    aboutTitle: "TỔ CHỨC GIÁO DỤC & DU HỌC QUỐC TẾ AMEC",
    aboutText: [
      "Học Viện Anh Ngữ & Du Học Quốc Tế AMEC là đại diện tuyển sinh chính thức của hơn 350 trường Đại học, Cao đẳng và Học viện danh tiếng tại Canada, Mỹ, Anh, Úc, Đức, Hàn Quốc, Nhật Bản và Singapore.",
      "Chúng tôi cung cấp lộ trình đào tạo ngoại ngữ (IELTS, Tiếng Đức B1/B2, Tiếng Hàn TOPIK) kết hợp tư vấn hồ sơ học bổng, du học nghề hưởng lương và định cư làm việc dài hạn."
    ]
  },
  hero: {
    eyebrow: "CANADA",
    title: "ĐỊNH CƯ TRONG TẦM TAY — TẶNG PHÍ GHI DANH $200",
    subtitle:
      "Cơ hội xét duyệt Visa ưu tiên không chứng minh tài chính, thực tập hưởng lương Co-op và ở lại làm việc đến 3 năm sau tốt nghiệp.",
    ctaText: "ĐĂNG KÝ NGAY",
    ctaLink: "#dang-ky",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=85"
  },
  countryCarousel: [
    {
      id: "cc-sg",
      name: "Singapore",
      flagEmoji: "🇸🇬",
      color: "bg-red-600",
      highlight: "Chuyển tiếp Đại học Úc & Anh tiết kiệm 40% chi phí",
      programs: [
        "Học viện Quản lý Singapore (SIM)",
        "Đại học James Cook Singapore",
        "Học viện Kaplan Singapore"
      ]
    },
    {
      id: "cc-jp",
      name: "Nhật Bản",
      flagEmoji: "🇯🇵",
      color: "bg-rose-600",
      highlight: "Học bổng báo Asahi, Điều dưỡng & Kỹ sư CNTT hưởng lương",
      programs: [
        "Trường Nhật ngữ Tokyo & Osaka",
        "Đại học Quốc tế Waseda",
        "Chương trình Kỹ sư cầu nối Nhật Bản"
      ]
    },
    {
      id: "cc-es",
      name: "Tây Ban Nha",
      flagEmoji: "🇪🇸",
      color: "bg-amber-500",
      highlight: "Chi phí sinh hoạt thấp nhất Châu Âu, tự do đi lại 27 nước Schengen",
      programs: [
        "Đại học UCAM Murcia",
        "Đại học Autónoma de Madrid",
        "Trường Kinh doanh EU Business School"
      ]
    },
    {
      id: "cc-cn",
      name: "Trung Quốc",
      flagEmoji: "🇨🇳",
      color: "bg-red-700",
      highlight: "Học bổng Chính phủ CSC miễn 100% học phí + Ký túc xá + Trợ cấp",
      programs: [
        "Đại học Bắc Kinh & Thanh Hoa",
        "Đại học Giao thông Thượng Hải",
        "Đại học Chiết Giang"
      ]
    },
    {
      id: "cc-ch",
      name: "Thụy Sỹ",
      flagEmoji: "🇨🇭",
      color: "bg-red-500",
      highlight: "Cái nôi Quản trị Khách sạn thế giới, thực tập 60 triệu VNĐ/tháng",
      programs: [
        "Học viện BHMS Lucerne",
        "Học viện SHMS & César Ritz",
        "Học viện HTMi Switzerland"
      ]
    },
    {
      id: "cc-nz",
      name: "New Zealand",
      flagEmoji: "🇳🇿",
      color: "bg-blue-800",
      highlight: "Học bổng Chính phủ NZUA & Chính sách đưa gia đình đi cùng",
      programs: [
        "University of Auckland",
        "University of Otago",
        "Victoria University of Wellington"
      ]
    }
  ],
  featuredEvents: [
    {
      id: "ev-main",
      title: "Chứng minh tài chính du học nghề Đức 2026 và những điều cần biết",
      excerpt:
        "Hướng dẫn mở tài khoản phong tỏa Sperrkonto, điều kiện miễn chứng minh tài chính khi đạt trình độ tiếng Đức B1 và mức lương học nghề từ 1.100 - 1.350 Euro/tháng.",
      category: "SỰ KIỆN NỔI BẬT",
      date: "20/05/2026",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ev-2",
      title: "DU HỌC TÂY BAN NHA TẠI ĐẠI HỌC UCAM CHỈ TỪ 76 TRIỆU/NĂM",
      excerpt: "Gặp gỡ trực tiếp đại diện trường UCAM và xét học bổng tại chỗ.",
      category: "HỘI THẢO CHÂU ÂU",
      date: "22/05/2026",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ev-3",
      title: "TƯNG BỪNG MÙA LỄ HỘI CÙNG AMEC – NHẬN NGAY GÓI VISA DU LỊCH CANADA",
      excerpt: "Ưu đãi tặng phí dịch thuật và lệ phí xét hồ sơ cho 30 học sinh đầu tiên.",
      category: "ƯU ĐÃI DU HỌC",
      date: "25/05/2026",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ev-4",
      title: "XU HƯỚNG HỌC ONLINE: “VUI HỌC TIẾNG HÀN – HOÀN TOÀN MIỄN PHÍ”",
      excerpt: "Lớp luyện giao tiếp sơ cấp TOPIK I trực tuyến cùng giáo viên bản xứ.",
      category: "LỚP HỌC MIỄN PHÍ",
      date: "28/05/2026",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    }
  ],
  scholarshipItems: [
    {
      id: "sc-1",
      title: "Tưng bừng tuyển sinh du học Hàn Quốc tại Đại học Quốc gia Pusan kỳ Xuân",
      excerpt:
        "Top 1 trường đại học công lập trọng điểm tại thành phố cảng Busan với học bổng giảm 30% - 100% học phí kỳ đầu cho sinh viên có TOPIK 3 trở lên.",
      category: "HỌC BỔNG HÀN QUỐC",
      date: "14/05/2026",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "sc-2",
      title: "ĐẠI HỌC CALIFORNIA LUTHERAN TẠI MỸ VỚI HỌC BỔNG TỚI 100%",
      excerpt:
        "Đại học California Lutheran mang đến chương trình học bổng Presidential trị giá tới 100% học phí dành cho sinh viên bậc Đại học và Thạc sĩ xuất sắc.",
      category: "HỌC BỔNG MỸ",
      date: "16/05/2026",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sc-3",
      title: "CƠ HỘI HỌC BỔNG TOÀN PHẦN TẠI VƯƠNG QUỐC ANH – GIẤC MƠ CÓ THẬT",
      excerpt:
        "Nằm trong top 5 trường đại học hàng đầu thế giới theo bảng xếp hạng QS World University, học bổng mở ra cánh cửa nghiên cứu danh giá.",
      category: "HỌC BỔNG ANH QUỐC",
      date: "19/05/2026",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80"
    }
  ],
  essentialGuides: [
    {
      id: "eg-1",
      title: "HÀNH TRANG DU HỌC HÀN QUỐC BẠN CẦN BIẾT!",
      excerpt:
        "Tổng hợp danh sách giấy tờ nhập cảnh, kinh nghiệm thuê ký túc xá, mở thẻ ngân hàng và đăng ký thẻ người nước ngoài ARC tại Hàn Quốc.",
      category: "CẨM NANG HÀN QUỐC",
      date: "10/05/2026",
      image:
        "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "eg-2",
      title: "DU HỌC MỸ NÊN CHỌN BANG NÀO TỐI ƯU CHI PHÍ & VIỆC LÀM?",
      excerpt:
        "Hoa Kỳ là quốc gia rộng lớn gồm 50 tiểu bang với thế mạnh kinh tế khác nhau. Cùng phân tích ưu nhược điểm của California, Texas, Massachusetts và Washington.",
      category: "KINH NGHIỆM DU HỌC MỸ",
      date: "12/05/2026",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "eg-3",
      title: "HỌC TẬP NHƯ THẾ NÀO ĐỂ ĐẠT ĐƯỢC KẾT QUẢ TỐT NHẤT TẠI HÀN QUỐC",
      excerpt:
        "Trong quá trình học tập tại Trường Đại học Khoa học Kỹ thuật Quốc gia Seoul (SeoulTech), cựu học viên AMEC chia sẻ bí quyết duy trì GPA 4.2/4.5.",
      category: "CHIA SẺ DU HỌC SINH",
      date: "15/05/2026",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
    }
  ],
  vocationalPrograms: [
    {
      id: "vp-1",
      title: "Bạn đã đủ điều kiện tham gia chương trình du học nghề tại Đức?",
      excerpt:
        "Miễn 100% học phí chuyên ngành, hưởng trợ cấp thực hành ngay từ tháng đầu tiên từ 28 - 35 triệu VNĐ/tháng và cam kết việc làm chính thức sau tốt nghiệp.",
      category: "DU HỌC NGHỀ ĐỨC",
      date: "08/05/2026",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "vp-2",
      title: "DU HỌC NGHỀ ĐIỀU DƯỠNG – PHỎNG VẤN TRỰC TIẾP VỚI TẬP ĐOÀN AZURIT",
      excerpt:
        "Tài chính không còn là rào cản lớn với các bạn học sinh Việt Nam nhờ gói tài trợ vé máy bay và khóa học tiếng Đức B2 tại Đức từ Tập đoàn Azurit.",
      category: "NGÀNH ĐIỀU DƯỠNG",
      date: "11/05/2026",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-3",
      title: "HỌC BỔNG BẠT NGÀN DU HỌC NGHỀ NHÀ HÀNG KHÁCH SẠN ĐỨC",
      excerpt:
        "Du học nghề Nhà hàng – Khách sạn tại CHLB Đức mở ra cơ hội làm việc tại các chuỗi khách sạn 5 sao Châu Âu và xin thẻ định cư vĩnh viễn sau 5 năm.",
      category: "NHÀ HÀNG KHÁCH SẠN",
      date: "17/05/2026",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"
    }
  ]
};

export default trungTam12DefaultData;
