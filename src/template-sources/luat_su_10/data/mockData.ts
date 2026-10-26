import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu10VisaProgram {
  id: string;
  title: string;
  countryLocation: string;
  durationBadge: string;
  popularBadge?: boolean;
  price: string;
  oldPrice?: string;
  rating: number;
  sectionKey: "pho-bien" | "nghi-duong" | "gia-uu-dai";
  tabKey: string;
  visaType: string;
  processingTime: string;
  successRate: string;
  description: string;
  image: string;
}

export interface LuatSu10CommitmentItem {
  id: string;
  title: string;
  description: string;
  icon: "trophy" | "compass" | "shield" | "lock";
  iconBg: string;
  iconColor: string;
}

export interface LuatSu10TemplateData extends ClonedTemplateBaseData {
  aboutScriptEyebrow: string;
  aboutCheckmarks: string[];
  aboutMainImage: string;
  aboutCircleImage: string;
  redStripFeatures: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  popularSectionSubtitle: string;
  popularTabs: Array<{ id: string; label: string }>;
  residencySectionSubtitle: string;
  residencyTabs: Array<{ id: string; label: string }>;
  specialOfferSubtitle: string;
  visaPrograms: LuatSu10VisaProgram[];
  commitmentSection: {
    scriptEyebrow: string;
    heading: string;
    description: string;
    image: string;
    items: LuatSu10CommitmentItem[];
  };
  newsletterBannerText: string;
  footerGallery: string[];
}

export const luatSu10DefaultData: LuatSu10TemplateData = {
  business: {
    name: "ROAMLAW",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 888 996"],
    email: ["info@themona.global", "ditru@roamlaw.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 680,
    experienceYears: "15+",
    aboutTitle:
      "TƯ VẤN LUẬT DI TRÚ ĐỘC ĐÁO VÀ HỒ SƠ ĐỊNH CƯ QUỐC TẾ VỮNG CHẮC",
    aboutText: [
      "Chúng tôi tự hào là văn phòng luật chuyên sâu về di trú, quốc tịch và đầu tư định cư toàn cầu, nơi các gia đình và doanh nhân Việt được thẩm định hồ sơ trực tiếp bởi hội đồng luật sư quốc tế giàu kinh nghiệm.",
      "Với sự tận tâm và chuẩn mực pháp lý nghiêm ngặt, chúng tôi cam kết đồng hành trọn vẹn từ khâu hoạch định tài chính, chứng minh nguồn tiền đến khi cả gia đình nhận thẻ thường trú nhân."
    ]
  },
  hero: {
    eyebrow: "VĂN PHÒNG LUẬT DI TRÚ & ĐỊNH CƯ QUỐC TẾ",
    title: "Giải pháp Visa & Định cư toàn diện",
    subtitle:
      "Đồng hành pháp lý chuẩn mực cho hồ sơ định cư Mỹ, Canada, Úc và Châu Âu với tỷ lệ chấp thuận 99.2%",
    ctaText: "Tìm kiếm",
    ctaLink: "#chuong-trinh-pho-bien",
    secondaryCtaText: "Tư vấn trực tiếp",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  aboutScriptEyebrow: "Khám Phá Thế Giới Pháp Lý",
  aboutCheckmarks: [
    "Thẩm định hồ sơ chuẩn xác theo luật di trú sở tại",
    "Luật sư di trú quốc tế trực tiếp đại diện pháp lý",
    "Dịch vụ trọn gói, minh bạch tiến độ 24/7"
  ],
  aboutMainImage:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
  aboutCircleImage:
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
  redStripFeatures: [
    {
      id: "rf-1",
      title: "Đa dạng chương trình",
      subtitle:
        "Tư vấn pháp lý Visa & thẻ xanh tại hơn 25 quốc gia phát triển trên toàn thế giới."
    },
    {
      id: "rf-2",
      title: "Chi phí minh bạch",
      subtitle:
        "Tiết kiệm thời gian với biểu phí pháp lý niêm yết rõ ràng và hợp đồng bảo vệ quyền lợi."
    },
    {
      id: "rf-3",
      title: "Dịch vụ đáng tin cậy",
      subtitle:
        "Trải nghiệm dịch vụ luật sư chuyên nghiệp và hỗ trợ thẩm định hồ sơ khẩn 24/7."
    }
  ],
  popularSectionSubtitle:
    "Khám phá các chương trình tư vấn Visa và thẻ thường trú nhân có tỷ lệ xét duyệt nhanh nhất",
  popularTabs: [
    { id: "chau-au", label: "Châu Âu" },
    { id: "bac-my", label: "Bắc Mỹ" },
    { id: "chau-uc", label: "Châu Úc" },
    { id: "doanh-nhan", label: "Doanh Nhân" }
  ],
  residencySectionSubtitle:
    "Hoạch định tương lai học tập, sinh sống và đầu tư an toàn cho cả 3 thế hệ gia đình tại các quốc gia tiên tiến",
  residencyTabs: [
    { id: "america", label: "Mỹ & Canada" },
    { id: "scandinavia", label: "Bắc Âu" },
    { id: "east-asia", label: "Châu Á - Úc" },
    { id: "europe", label: "Liên Minh EU" }
  ],
  specialOfferSubtitle:
    "Ưu đãi phí dịch vụ luật sư thẩm định hồ sơ lần đầu cho các chương trình Visa trọng điểm trong tháng",
  visaPrograms: [
    // Section 1: CÁC CHUYẾN ĐI / HỒ SƠ PHỔ BIẾN (8 items)
    {
      id: "vp-1",
      title: "Hồ Sơ Visa Lao Động Tay Nghề & Định Cư Copenhagen",
      countryLocation: "Copenhagen, Đan Mạch",
      durationBadge: "4 tháng",
      popularBadge: true,
      price: "15,500,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "chau-au",
      visaType: "Work Permit & Schengen Residence",
      processingTime: "3 - 4 tháng làm việc",
      successRate: "99.4%",
      description:
        "Tư vấn trọn gói hợp đồng lao động, thẩm định bằng cấp và đại diện nộp hồ sơ cư trú dài hạn tại Đan Mạch.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-2",
      title: "Tư Vấn Thẻ Cư Trú Bắc Âu Đan Mạch - Phần Lan 7 Năm",
      countryLocation: "Copenhagen - Helsinki",
      durationBadge: "7 tháng",
      price: "33,900,000₫",
      oldPrice: "39,000,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "chau-au",
      visaType: "EU Blue Card / Thường trú nhân",
      processingTime: "6 - 7 tháng",
      successRate: "98.9%",
      description:
        "Hỗ trợ pháp lý toàn diện cho chuyên gia kỹ thuật và gia đình hưởng đầy đủ phúc lợi y tế, giáo dục miễn phí Bắc Âu.",
      image:
        "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-3",
      title: "Chương Trình Visa Khởi Nghiệp Sáng Tạo Hà Lan",
      countryLocation: "Amsterdam, Hà Lan",
      durationBadge: "3 tháng",
      price: "23,300,000₫",
      oldPrice: "25,000,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "doanh-nhan",
      visaType: "Dutch Startup & Business Visa",
      processingTime: "3 tháng",
      successRate: "99.1%",
      description:
        "Soạn thảo đề án kinh doanh chuẩn pháp luật Hà Lan, đăng ký thương nhân và xin thẻ cư trú cho cả gia đình.",
      image:
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-4",
      title: "Tư Vấn Pháp Lý Đầu Tư Doanh Nghiệp Tại Cảng Hamburg",
      countryLocation: "Hamburg, CHLB Đức",
      durationBadge: "3 tháng",
      popularBadge: true,
      price: "22,200,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "chau-au",
      visaType: "Visa Đầu Tư & Thành Lập Công Ty Đức",
      processingTime: "3 - 4 tháng",
      successRate: "99.5%",
      description:
        "Luật sư thương mại Đức trực tiếp lập điều lệ công ty GmbH, mở tài khoản ngân hàng và xin thẻ cư trú doanh nhân.",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-5",
      title: "Hồ Sơ Visa Thương Mại & Công Tác Liên Bang Nga",
      countryLocation: "Moscow - Saint Petersburg",
      durationBadge: "5 tuần",
      price: "28,000,000₫",
      oldPrice: "33,000,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "doanh-nhan",
      visaType: "Multi-Entry Business Visa 1 - 3 Năm",
      processingTime: "4 - 5 tuần",
      successRate: "99.2%",
      description:
        "Xử lý thư mời bộ ngoại giao, hợp pháp hóa lãnh sự và tư vấn pháp luật đầu tư thương mại song phương.",
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-6",
      title: "Định Cư Diện Lao Động Định Cư Bang Georgia Hoa Kỳ",
      countryLocation: "Alpharetta, Georgia, Mỹ",
      durationBadge: "4 tháng",
      popularBadge: true,
      price: "69,500,000₫",
      oldPrice: "80,000,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "bac-my",
      visaType: "EB-3 / L-1A Thẻ Xanh Mỹ",
      processingTime: "Xét duyệt ưu tiên Premium",
      successRate: "98.8%",
      description:
        "Luật sư di trú Mỹ bảo vệ hồ sơ chứng nhận lao động PERM và đơn I-140 cho đương đơn cùng vợ/chồng và con dưới 21 tuổi.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-7",
      title: "Visa Thương Mại & Thẩm Định Đối Tác Bắc Kinh - Thượng Hải",
      countryLocation: "Bắc Kinh - Thượng Hải",
      durationBadge: "9 ngày",
      price: "19,900,000₫",
      oldPrice: "23,000,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "chau-uc",
      visaType: "Visa Thương Mại M & Thẩm Định Pháp Lý",
      processingTime: "7 - 9 ngày làm việc",
      successRate: "99.8%",
      description:
        "Bao gồm dịch vụ luật sư kiểm tra tư cách pháp nhân nhà máy đối tác và soạn thảo hợp đồng ngoại thương song ngữ.",
      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-8",
      title: "Chương Trình Đầu Tư Quốc Tịch Vùng Caribbean & Khối Thịnh Vượng",
      countryLocation: "Bridgetown, Barbados",
      durationBadge: "60 ngày",
      price: "44,000,000₫",
      rating: 5,
      sectionKey: "pho-bien",
      tabKey: "bac-my",
      visaType: "Second Passport & Tax Residency",
      processingTime: "60 - 90 ngày",
      successRate: "99.5%",
      description:
        "Giải pháp quốc tịch thứ hai giúp miễn thị thực hơn 150 quốc gia, tối ưu thuế quốc tế hợp pháp cho nhà đầu tư.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },

    // Section 2: CHƯƠNG TRÌNH ĐỊNH CƯ & THẺ XANH (8 items)
    {
      id: "vp-9",
      title: "Visa Đầu Tư Khởi Nghiệp & Thẻ Cư Trú Hà Lan",
      countryLocation: "Amsterdam, Hà Lan",
      durationBadge: "3 tháng",
      popularBadge: true,
      price: "23,300,000₫",
      oldPrice: "25,000,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "europe",
      visaType: "Thẻ Cư Trú Châu Âu",
      processingTime: "3 tháng",
      successRate: "99.2%",
      description:
        "Hộ chiếu thông hành tự do 27 nước khối Schengen cùng môi trường giáo dục đại học chuẩn quốc tế.",
      image:
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-10",
      title: "Định Cư Diện Chuyên Gia & Kỹ Sư CHLB Đức (EU Blue Card)",
      countryLocation: "Hamburg, CHLB Đức",
      durationBadge: "3 tháng",
      popularBadge: true,
      price: "22,200,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "europe",
      visaType: "Thẻ Xanh Liên Minh Châu Âu",
      processingTime: "3 tháng",
      successRate: "99.5%",
      description:
        "Lộ trình lên thẳng thường trú nhân vĩnh viễn tại Đức chỉ sau 21 - 27 tháng làm việc hợp pháp.",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-11",
      title: "Tư Vấn Pháp Lý Đầu Tư Bất Động Sản & Cư Trú Châu Âu",
      countryLocation: "Moscow - Đông Âu",
      durationBadge: "5 tháng",
      price: "28,000,000₫",
      oldPrice: "33,000,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "scandinavia",
      visaType: "Golden Visa Đầu Tư Bất Động Sản",
      processingTime: "4 - 5 tháng",
      successRate: "99.0%",
      description:
        "Thẩm định pháp lý quyền sở hữu bất động sản thương mại và hoàn tất thủ tục nhận thẻ cư trú dài hạn.",
      image:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-12",
      title: "Hồ Sơ Định Cư Mỹ Diện Nhân Tài & Quản Lý Cấp Cao EB-1C",
      countryLocation: "Alpharetta, Georgia, Mỹ",
      durationBadge: "4 tháng",
      popularBadge: true,
      price: "69,500,000₫",
      oldPrice: "80,000,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "america",
      visaType: "Thẻ Xanh Vĩnh Viễn Hoa Kỳ",
      processingTime: "4 - 6 tháng",
      successRate: "98.9%",
      description:
        "Dành cho chủ doanh nghiệp và giám đốc điều hành mở chi nhánh tại Hoa Kỳ, nhận thẻ xanh trực tiếp cho cả gia đình.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-13",
      title: "Tư Vấn Thẻ Cư Trú Thuế Ưu Đãi Vùng Caribbean",
      countryLocation: "Barbados",
      durationBadge: "1 tháng",
      price: "14,000,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "america",
      visaType: "Global Business & Remote Visa",
      processingTime: "3 - 4 tuần",
      successRate: "99.7%",
      description:
        "Hỗ trợ pháp lý thành lập công ty quốc tế và xin giấy phép cư trú dài hạn nhanh chóng.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-14",
      title: "Visa Đầu Tư Kinh Doanh & Quản Lý Tại Kyoto Nhật Bản",
      countryLocation: "Kyoto, Nhật Bản",
      durationBadge: "2 tháng",
      popularBadge: true,
      price: "25,900,000₫",
      oldPrice: "29,000,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "east-asia",
      visaType: "Business Manager Visa Nhật Bản",
      processingTime: "8 tuần",
      successRate: "99.3%",
      description:
        "Luật sư hành chính Gyoseishoshi Nhật Bản trực tiếp lập hồ sơ thành lập pháp nhân Kabushiki Kaisha và bảo lãnh gia đình.",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-15",
      title: "Chương Trình Đầu Tư EB-5 Trung Tâm Vùng Bang Nevada Mỹ",
      countryLocation: "Nevada, Hoa Kỳ",
      durationBadge: "4 tháng",
      price: "79,000,000₫",
      oldPrice: "90,000,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "america",
      visaType: "Đầu Tư Định Cư EB-5 Rural",
      processingTime: "Xét duyệt ưu tiên I-526E",
      successRate: "99.6%",
      description:
        "Kiểm toán chứng minh nguồn tiền hợp pháp và thẩm định pháp lý dự án hạ tầng được Sở Di trú Mỹ (USCIS) phê duyệt.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-16",
      title: "Tư Vấn Pháp Lý Thẻ Thường Trú Nhân Cho Chuyên Gia Nước Ngoài",
      countryLocation: "Vịnh Hạ Long - Hà Nội",
      durationBadge: "3 tuần",
      popularBadge: true,
      price: "11,000,000₫",
      oldPrice: "12,200,000₫",
      rating: 5,
      sectionKey: "nghi-duong",
      tabKey: "east-asia",
      visaType: "Giấy Phép Lao Động & Thẻ Tạm Trú Đầu Tư",
      processingTime: "15 - 20 ngày",
      successRate: "99.9%",
      description:
        "Đại diện pháp lý xin Giấy phép lao động (Work Permit), Visa ĐT và Thẻ tạm trú 2-5 năm cho nhà đầu tư nước ngoài tại Việt Nam.",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80"
    },

    // Section 3: GIÁ ƯU ĐÃI (4 items)
    {
      id: "vp-17",
      title: "Visa Chương Trình Ngôi Nhà Thứ Hai Malaysia (MM2H)",
      countryLocation: "Sabah - Kuala Lumpur, Malaysia",
      durationBadge: "2 tháng",
      popularBadge: true,
      price: "18,000,000₫",
      rating: 5,
      sectionKey: "gia-uu-dai",
      tabKey: "east-asia",
      visaType: "Visa Cư Trú Dài Hạn 10 Năm",
      processingTime: "6 - 8 tuần",
      successRate: "99.5%",
      description:
        "Chương trình cư trú dài hạn linh hoạt tại Đông Nam Á dành cho gia đình và nhà đầu tư nghỉ hưu.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-18",
      title: "Hồ Sơ Định Cư Diện Tay Nghề & Du Học Định Cư Đan Mạch",
      countryLocation: "Copenhagen, Đan Mạch",
      durationBadge: "4 tháng",
      popularBadge: true,
      price: "15,500,000₫",
      rating: 5,
      sectionKey: "gia-uu-dai",
      tabKey: "chau-au",
      visaType: "Schengen Residence Permit",
      processingTime: "3 - 4 tháng",
      successRate: "99.4%",
      description:
        "Hỗ trợ toàn diện từ khâu thẩm định hồ sơ học thuật, chứng minh tài chính đến phỏng vấn đại sứ quán.",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-19",
      title: "Tư Vấn Thành Lập Văn Phòng Đại Diện Tại Hamburg Đức",
      countryLocation: "Hamburg, CHLB Đức",
      durationBadge: "3 tháng",
      popularBadge: true,
      price: "22,200,000₫",
      rating: 5,
      sectionKey: "gia-uu-dai",
      tabKey: "chau-au",
      visaType: "Business Investor Residence",
      processingTime: "3 tháng",
      successRate: "99.5%",
      description:
        "Cầu nối pháp lý giúp doanh nghiệp xuất nhập khẩu Việt Nam mở rộng thị trường trực tiếp vào Liên minh Châu Âu.",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-20",
      title: "Gói Luật Sư Thẩm Định Hồ Sơ Định Cư Bang Georgia Mỹ",
      countryLocation: "Alpharetta, Georgia, Mỹ",
      durationBadge: "4 tháng",
      popularBadge: true,
      price: "69,500,000₫",
      oldPrice: "80,000,000₫",
      rating: 5,
      sectionKey: "gia-uu-dai",
      tabKey: "bac-my",
      visaType: "EB-3 / L-1A Green Card",
      processingTime: "4 tháng",
      successRate: "98.8%",
      description:
        "Ưu đãi đặc biệt phí thẩm định hồ sơ ban đầu cùng luật sư di trú thành viên Hiệp hội AILA Hoa Kỳ.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80"
    }
  ],
  commitmentSection: {
    scriptEyebrow: "Cam Kết Của Chúng Tôi",
    heading: "ĐẢM BẢO LỘ TRÌNH PHÁP LÝ ĐỊNH CƯ TỐT NHẤT CHO BẠN",
    description:
      "Chúng tôi cam kết cung cấp giải pháp tư vấn luật di trú minh bạch, an toàn và hiệu quả nhất — từ bước đánh giá điểm di trú ban đầu đến khi gia đình bạn an cư tại quốc gia mới.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        id: "cm-1",
        title: "Biểu phí minh bạch",
        description:
          "Chúng tôi cam kết chi phí pháp lý rõ ràng theo từng mốc phê duyệt của cơ quan di trú.",
        icon: "trophy",
        iconBg: "#e0f7ef",
        iconColor: "#00a870"
      },
      {
        id: "cm-2",
        title: "Đa dạng diện định cư",
        description:
          "Cung cấp hơn 30 chương trình đầu tư quốc tịch, thẻ xanh và lao động tay nghề toàn cầu.",
        icon: "compass",
        iconBg: "#ffe8ea",
        iconColor: "#ef3f49"
      },
      {
        id: "cm-3",
        title: "Pháp lý chuẩn mực",
        description:
          "Hợp tác trực tiếp với các hãng luật di trú bản địa uy tín để bảo vệ tối đa quyền lợi hồ sơ.",
        icon: "shield",
        iconBg: "#fff4dc",
        iconColor: "#f59e0b"
      },
      {
        id: "cm-4",
        title: "Bảo mật thông tin",
        description:
          "Mọi hồ sơ tài sản, thuế và thông tin nhân thân của khách hàng đều được mã hóa và bảo mật tuyệt đối.",
        icon: "lock",
        iconBg: "#f5e8ff",
        iconColor: "#a855f7"
      }
    ]
  },
  stats: [
    { id: "st-1", number: "28k", title: "Khách hàng thân thiết" },
    { id: "st-2", number: "5k", title: "Hồ sơ định cư quốc tế" },
    { id: "st-3", number: "30k", title: "Đánh giá tích cực" },
    { id: "st-4", number: "20", title: "Danh hiệu, giải thưởng" }
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Phúc Phúc",
      role: "Khách hàng định cư Canada",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content:
        "Trải nghiệm pháp lý tuyệt vời! Tôi rất hài lòng với sự chuyên nghiệp và chu đáo của đội ngũ luật sư di trú. Họ đã tận tâm chuẩn bị hồ sơ chứng minh tài chính và giúp gia đình tôi nhận PR đúng tiến độ mong đợi."
    },
    {
      id: "tm-2",
      author: "Lê Hào",
      role: "Nhà đầu tư EB-5 Hoa Kỳ",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content:
        "Trải nghiệm tuyệt vời! Đội ngũ luật sư thẩm định nguồn tiền cực kỳ bài bản và chi tiết. Mọi thắc mắc về luật thuế và di trú Mỹ đều được giải đáp rõ ràng. Chắc chắn sẽ giới thiệu cho bạn bè doanh nhân của tôi."
    },
    {
      id: "tm-3",
      author: "An An",
      role: "Khách hàng Visa Châu Âu",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      content:
        "Hồ sơ xin thẻ cư trú Đức của tôi được xử lý nhanh hơn dự kiến 3 tuần. Các chuyên viên pháp lý chuẩn bị kỹ lưỡng từng bản dịch công chứng và luyện phỏng vấn đại sứ quán rất sát thực tế."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Quy trình chuẩn bị hồ sơ chứng minh tài chính định cư Bắc Mỹ",
      date: "01/07/2026",
      category: "Cẩm nang di trú",
      excerpt:
        "Hướng dẫn chi tiết các chứng từ thuế, sổ tiết kiệm và tài sản doanh nghiệp hợp lệ theo tiêu chuẩn xét duyệt mới.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Những giấy tờ pháp lý quan trọng cần hợp pháp hóa lãnh sự",
      date: "01/07/2026",
      category: "Hồ sơ Visa",
      excerpt:
        "Danh mục lý lịch tư pháp, giấy khai sinh, đăng ký kết hôn và bằng cấp cần dịch thuật công chứng trước khi nộp đơn.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "So sánh quyền lợi Thẻ Xanh Châu Âu (EU Blue Card) và Golden Visa",
      date: "01/07/2026",
      category: "Đầu tư quốc tế",
      excerpt:
        "Phân tích ưu nhược điểm, mức vốn yêu cầu và thời gian xét nhập quốc tịch của các chương trình cư trú Châu Âu.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Kinh nghiệm phỏng vấn Visa định cư đạt tỷ lệ chấp thuận ngay lần đầu",
      date: "01/07/2026",
      category: "Kinh nghiệm pháp lý",
      excerpt:
        "Chia sẻ từ luật sư di trú về cách trả lời câu hỏi của viên chức lãnh sự mạch lạc, trung thực và thuyết phục.",
      image:
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80"
    }
  ],
  newsletterBannerText:
    "Đăng ký ngay để nhận các ưu đãi đặc biệt, cẩm nang pháp lý và tin tức mới nhất về luật di trú quốc tế",
  footerGallery: [
    "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80"
  ]
};

export default luatSu10DefaultData;
