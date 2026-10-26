import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NewsArticleItem {
  id: string;
  numberBadge?: string;
  category: string;
  categoryColor?: string;
  title: string;
  excerpt?: string;
  author: string;
  date: string;
  comments?: string;
  shares?: string;
  duration?: string;
  image: string;
  isVideo?: boolean;
  trendingTag?: boolean;
}

export interface CategoryColumnGroup {
  id: string;
  title: string;
  items: NewsArticleItem[];
}

export interface LuatSu11Data {
  business: Record<string, any>;
  hero?: Record<string, any>;
  [key: string]: any;
  topBar: {
    breakingLabel: string;
    breakingTitle: string;
    currentDate: string;
    socials: string[];
  };
  navigation: {
    brandName: string;
    brandTagline: string;
    items: Array<{
      label: string;
      href: string;
      badge?: string;
    }>;
  };
  tickerBar: {
    topics: Array<{
      id: string;
      title: string;
      image: string;
    }>;
    tagLabel: string;
    tags: string[];
  };
  heroBento: {
    mainFeature: NewsArticleItem;
    latestTabArticles: NewsArticleItem[];
    trendingTabArticles: NewsArticleItem[];
    bottomCards: NewsArticleItem[];
  };
  popularNewsSection: {
    title: string;
    leftArticles: NewsArticleItem[];
    rightFeatured: NewsArticleItem;
    rightMiniVideo: NewsArticleItem;
  };
  trendingSection: {
    title: string;
    leftNumbered: NewsArticleItem[];
    centerPoster: NewsArticleItem;
    rightTabs: string[];
    rightTabArticles: Record<string, NewsArticleItem[]>;
  };
  circularDigestSection: {
    tabs: string[];
    items: NewsArticleItem[];
    newsletterBox: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
  };
  hotVideoSection: {
    title: string;
    leftVideos: NewsArticleItem[];
    centerMainVideo: NewsArticleItem;
    rightTallVideo: NewsArticleItem;
  };
  internationalLawSection: {
    title: string;
    leftNumbered: NewsArticleItem[];
    centerMain: NewsArticleItem;
    centerBottomVideo: NewsArticleItem;
    rightTabs: string[];
    rightNumbered: NewsArticleItem[];
  };
  bottomCategoryColumns: CategoryColumnGroup[];
  partnerLogos: Array<{
    id: string;
    name: string;
    subtitle: string;
  }>;
  footer: {
    description: string;
    worldLinks: NewsArticleItem[];
    legalLifeLinks: NewsArticleItem[];
    galleryImages: string[];
    bottomNav: string[];
    copyright: string;
  };
}

export const luatSu11DefaultData: LuatSu11Data = {
  business: {
    name: "Magezix Law",
    tagline: "Cổng Thông Tin Pháp Luật & Văn Phòng Luật Sư NewsFlash Law",
    phone: ["1900 6889", "0903 812 945"],
    email: ["banbientap@magezixlaw.vn", "tuvan@magezixlaw.vn"],
    address: "Tầng 16, Tòa nhà Saigon Centre, 65 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
    hours: "Thứ 2 - Thứ 7: 08:00 - 18:00 | Trực tuyến 24/7",
  },
  topBar: {
    breakingLabel: "TIÊU ĐIỂM PHÁP LÝ",
    breakingTitle:
      "Từ Pháp Lý Truyền Thống Đến Quản Trị Doanh Nghiệp Số: Góc Nhìn Từ Các Luật Sư Hàng Đầu",
    currentDate: "9 Tháng Mười, 2026",
    socials: ["FB", "TW", "IG", "YT", "IN"],
  },
  navigation: {
    brandName: "Magezix",
    brandTagline: "NEWSFLASH LEGAL PORTAL",
    items: [
      { label: "Pháp Luật", href: "#hero" },
      { label: "Dân Sự", href: "#popular" },
      { label: "Doanh Nghiệp", href: "#trending", badge: "HOT" },
      { label: "Video Tư Vấn", href: "#videos" },
      { label: "Hình Sự", href: "#digest", badge: "HOT" },
      { label: "Đất Đai", href: "#international" },
      { label: "Lao Động", href: "#categories" },
      { label: "Sở Hữu Trí Tuệ", href: "#categories", badge: "HOT" },
      { label: "Quốc Tế", href: "#international" },
    ],
  },
  tickerBar: {
    topics: [
      {
        id: "tk-1",
        title: "Quy định mới về cấp giấy chứng nhận quyền sử dụng đất 2026...",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=240&q=80",
      },
      {
        id: "tk-2",
        title: "Thủ tục giải quyết tranh chấp hợp đồng thương mại quốc tế...",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=240&q=80",
      },
      {
        id: "tk-3",
        title: "Bảo hộ nhãn hiệu và bản quyền phần mềm trong kỷ nguyên AI...",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=240&q=80",
      },
    ],
    tagLabel: "# Tags",
    tags: ["Luật Đất Đai", "Luật Doanh Nghiệp", "Trọng Tài Thương Mại"],
  },
  heroBento: {
    mainFeature: {
      id: "hero-main",
      category: "LUẬT ĐẤT ĐAI & ĐẦU TƯ",
      categoryColor: "#f21b3f",
      title:
        "Sự Thay Đổi Của Luật Đất Đai Sửa Đổi & Tác Động Trực Tiếp Đến Doanh Nghiệp Bất Động Sản Việt Nam",
      excerpt:
        "Phân tích chuyên sâu từ Hội đồng Luật sư Magezix về khung giá đất theo nguyên tắc thị trường, quy trình thu hồi đất và cơ chế bảo vệ quyền lợi nhà đầu tư dự án.",
      author: "LS. Trần Minh Quốc",
      date: "23 Tháng 10, 2026",
      comments: "28",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    latestTabArticles: [
      {
        id: "lat-1",
        numberBadge: "01",
        category: "DÂN SỰ",
        title:
          "Kinh nghiệm phân chia di sản thừa kế có yếu tố nước ngoài đúng trình tự pháp luật",
        author: "LS. Lê Hoàng Yến",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=360&q=80",
      },
      {
        id: "lat-2",
        numberBadge: "02",
        category: "DOANH NGHIỆP",
        title:
          "Cấu trúc vốn và điều khoản chống pha loãng cổ phần cho các công ty khởi nghiệp",
        author: "LS. Nguyễn Đình Bảo",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=360&q=80",
      },
      {
        id: "lat-3",
        numberBadge: "03",
        category: "HÌNH SỰ",
        title:
          "Quyền im lặng và sự tham gia của luật sư bào chữa ngay từ giai đoạn tạm giữ",
        author: "LS. Phạm Gia Hưng",
        date: "21 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=360&q=80",
      },
      {
        id: "lat-4",
        numberBadge: "04",
        category: "SỞ HỮU TRÍ TUỆ",
        title:
          "Xử lý hành vi xâm phạm quyền tác giả và bí mật kinh doanh trên sàn thương mại điện tử",
        author: "LS. Vũ Thu Hà",
        date: "20 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=360&q=80",
      },
    ],
    trendingTabArticles: [
      {
        id: "trd-1",
        numberBadge: "01",
        category: "THUẾ & TÀI CHÍNH",
        title:
          "Chính sách thuế tối thiểu toàn cầu và giải pháp ưu đãi đầu tư hợp pháp cho FDI",
        author: "LS. Trần Minh Quốc",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=360&q=80",
      },
      {
        id: "trd-2",
        numberBadge: "02",
        category: "LAO ĐỘNG",
        title:
          "Đơn phương chấm dứt hợp đồng lao động: Các lỗi sai phổ biến khiến doanh nghiệp thua kiện",
        author: "LS. Lê Hoàng Yến",
        date: "21 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=360&q=80",
      },
      {
        id: "trd-3",
        numberBadge: "03",
        category: "BẤT ĐỘNG SẢN",
        title:
          "Điều kiện chuyển nhượng toàn bộ hoặc một phần dự án bất động sản theo luật mới",
        author: "LS. Nguyễn Đình Bảo",
        date: "19 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=360&q=80",
      },
      {
        id: "trd-4",
        numberBadge: "04",
        category: "TRỌNG TÀI",
        title:
          "So sánh hiệu quả giải quyết tranh chấp tại VIAC và Tòa án nhân dân có thẩm quyền",
        author: "LS. Phạm Gia Hưng",
        date: "18 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=360&q=80",
      },
    ],
    bottomCards: [
      {
        id: "hb-1",
        category: "TRENDING",
        categoryColor: "#f21b3f",
        title:
          "Những Điểm Mới Trong Quy Trình Thẩm Định Pháp Lý Mua Bán & Sáp Nhập (M&A) Năm 2026",
        author: "LS. Trần Minh Quốc",
        date: "23 Tháng 10, 2026",
        trendingTag: true,
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hb-2",
        category: "TRENDING",
        categoryColor: "#f21b3f",
        title:
          "Bảo Vệ Dữ Liệu Cá Nhân Theo Nghị Định 13: Danh Mục Tuân Thủ Bắt Buộc Cho Ngân Hàng & Fintech",
        author: "LS. Vũ Thu Hà",
        date: "22 Tháng 10, 2026",
        trendingTag: true,
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hb-3",
        category: "VIDEO TƯ VẤN",
        categoryColor: "#2563eb",
        title:
          "[Talkshow Pháp Lý] Giải Đáp Trực Tiếp Các Vướng Mắc Về Cấp Sổ Hồng Chung Cư Thương Mại",
        author: "Ban Pháp Chế Magezix",
        date: "21 Tháng 10, 2026",
        isVideo: true,
        duration: "14:25",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "hb-4",
        category: "TRENDING",
        categoryColor: "#f21b3f",
        title:
          "Chiến Lược Bảo Hộ Sáng Chế & Nhãn Hiệu Quốc Tế Qua Hệ Thống Madrid Cho Doanh Nghiệp Xuất Khẩu",
        author: "LS. Nguyễn Đình Bảo",
        date: "20 Tháng 10, 2026",
        trendingTag: true,
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  popularNewsSection: {
    title: "Tin Tức Phổ Biến",
    leftArticles: [
      {
        id: "pop-1",
        category: "DOANH NGHIỆP",
        categoryColor: "#7c3aed",
        title:
          "Kiểm Soát Rủi Ro Pháp Lý Khi Ký Kết Hợp Đồng Đại Lý Độc Quyền Và Phân Phối Quốc Tế",
        excerpt:
          "Những điều khoản trọng yếu về luật áp dụng, giới hạn trách nhiệm bồi thường thiệt hại và cơ chế phạt vi phạm mà giám đốc điều hành cần đặc biệt lưu tâm.",
        author: "LS. Trần Minh Quốc",
        date: "23 Tháng 10, 2026",
        comments: "19",
        shares: "42",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80",
      },
      {
        id: "pop-2",
        category: "BẤT ĐỘNG SẢN",
        categoryColor: "#f21b3f",
        title:
          "Hướng Dẫn Chi Tiết Thủ Tục Chuyển Đổi Mục Đích Sử Dụng Đất Nông Nghiệp Sang Đất Ở Đô Thị",
        excerpt:
          "Tổng hợp hồ sơ, cách tính tiền sử dụng đất phải nộp và thời hạn giải quyết theo quy định mới nhất của Luật Đất đai hiện hành tại các đô thị lớn.",
        author: "LS. Lê Hoàng Yến",
        date: "22 Tháng 10, 2026",
        comments: "34",
        shares: "68",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80",
      },
      {
        id: "pop-3",
        category: "HÔN NHÂN & GIA ĐÌNH",
        categoryColor: "#0284c7",
        title:
          "Nguyên Tắc Xác Định Tài Sản Riêng Và Tài Sản Chung Của Vợ Chồng Đứng Tên Cổ Phần Công Ty",
        excerpt:
          "Án lệ và thực tiễn xét xử của Tòa án đối với trường hợp một bên dùng tài sản riêng góp vốn thành lập doanh nghiệp trong thời kỳ hôn nhân.",
        author: "LS. Vũ Thu Hà",
        date: "20 Tháng 10, 2026",
        comments: "15",
        shares: "29",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=640&q=80",
      },
    ],
    rightFeatured: {
      id: "pop-right-main",
      category: "TRANH TỤNG",
      categoryColor: "#7c3aed",
      title:
        "Kỹ Năng Thu Thập Vi Bằng Và Chứng Cứ Điện Tử Hợp Pháp Trong Các Vụ Án Kinh Doanh Thương Mại",
      excerpt:
        "Email, tin nhắn Zalo, dữ liệu ghi âm và giao dịch blockchain chỉ được Hội đồng xét xử chấp nhận khi đảm bảo tính nguyên vẹn và trình tự lập vi bằng chuẩn mực.",
      author: "LS. Phạm Gia Hưng",
      date: "23 Tháng 10, 2026",
      comments: "41",
      shares: "85",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    rightMiniVideo: {
      id: "pop-right-vid",
      category: "TƯ VẤN TRỰC TUYẾN",
      categoryColor: "#f21b3f",
      title:
        "5 Điều Khoản Bất Lợi Thường Gặp Trong Hợp Đồng Mua Bán Căn Hộ Hình Thành Trong Tương Lai",
      author: "LS. Lê Hoàng Yến",
      date: "21 Tháng 10, 2026",
      isVideo: true,
      duration: "09:40",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    },
  },
  trendingSection: {
    title: "Thịnh Hành",
    leftNumbered: [
      {
        id: "tr-left-1",
        numberBadge: "01",
        category: "PHÁP CHẾ",
        title: "Xây dựng quy chế quản trị nội bộ giúp phòng ngừa rủi ro tranh chấp cổ đông",
        author: "LS. Trần Minh Quốc",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "tr-left-2",
        numberBadge: "02",
        category: "THUẾ",
        title: "Quyết toán thuế thu nhập doanh nghiệp: Các khoản chi phí hợp lý được khấu trừ",
        author: "LS. Nguyễn Đình Bảo",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "tr-left-3",
        numberBadge: "03",
        category: "LAO ĐỘNG",
        title: "Thỏa ước bảo mật thông tin (NDA) và cam kết không cạnh tranh sau khi nghỉ việc",
        author: "LS. Vũ Thu Hà",
        date: "21 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "tr-left-4",
        numberBadge: "04",
        category: "ĐẦU TƯ",
        title: "Thủ tục xin cấp Giấy chứng nhận đăng ký đầu tư cho nhà đầu tư Singapore tại Việt Nam",
        author: "LS. Phạm Gia Hưng",
        date: "19 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=320&q=80",
      },
    ],
    centerPoster: {
      id: "tr-center",
      category: "#PHÁP LUẬT",
      categoryColor: "#f21b3f",
      title:
        "Diễn Đàn Pháp Lý Quốc Gia 2026: Hoàn Thiện Hành Lang Pháp Luật Cho Kinh Tế Xanh Và Tín Chỉ Carbon",
      author: "Hội Đồng Luật Sư Magezix",
      date: "23 Tháng 10, 2026",
      comments: "52",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=85",
    },
    rightTabs: ["Dân Sự", "Đời Sống", "Doanh Nghiệp"],
    rightTabArticles: {
      "Dân Sự": [
        {
          id: "tr-r-1",
          numberBadge: "01",
          category: "DÂN SỰ",
          title: "Thời hiệu khởi kiện yêu cầu chia di sản thừa kế là bất động sản",
          author: "LS. Lê Hoàng Yến",
          date: "23 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-r-2",
          numberBadge: "02",
          category: "DÂN SỰ",
          title: "Trách nhiệm bồi thường thiệt hại ngoài hợp đồng do nguồn nguy hiểm cao độ",
          author: "LS. Phạm Gia Hưng",
          date: "22 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-r-3",
          numberBadge: "03",
          category: "DÂN SỰ",
          title: "Hiệu lực của hợp đồng đặt cọc mua bán nhà đất khi chưa công chứng",
          author: "LS. Trần Minh Quốc",
          date: "20 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-r-4",
          numberBadge: "04",
          category: "DÂN SỰ",
          title: "Thủ tục yêu cầu Tòa án tuyên bố văn bản công chứng vô hiệu",
          author: "LS. Vũ Thu Hà",
          date: "18 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=320&q=80",
        },
      ],
      "Đời Sống": [
        {
          id: "tr-rl-1",
          numberBadge: "01",
          category: "ĐỜI SỐNG",
          title: "Quy định mới về định danh điện tử mức độ 2 khi thực hiện dịch vụ công",
          author: "LS. Vũ Thu Hà",
          date: "23 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-rl-2",
          numberBadge: "02",
          category: "ĐỜI SỐNG",
          title: "Quyền lợi bảo hiểm xã hội một lần và chế độ hưu trí theo luật sửa đổi",
          author: "LS. Lê Hoàng Yến",
          date: "21 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-rl-3",
          numberBadge: "03",
          category: "ĐỜI SỐNG",
          title: "Mức xử phạt hành vi phát tán thông tin sai sự thật trên mạng xã hội",
          author: "LS. Phạm Gia Hưng",
          date: "19 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-rl-4",
          numberBadge: "04",
          category: "ĐỜI SỐNG",
          title: "Hướng dẫn thủ tục đăng ký thường trú cho người mua căn hộ chung cư",
          author: "LS. Nguyễn Đình Bảo",
          date: "17 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=320&q=80",
        },
      ],
      "Doanh Nghiệp": [
        {
          id: "tr-rb-1",
          numberBadge: "01",
          category: "DOANH NGHIỆP",
          title: "Quy trình phát hành trái phiếu doanh nghiệp riêng lẻ đúng chuẩn pháp lý",
          author: "LS. Trần Minh Quốc",
          date: "23 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-rb-2",
          numberBadge: "02",
          category: "DOANH NGHIỆP",
          title: "Nghĩa vụ công bố thông tin của công ty đại chúng trên thị trường chứng khoán",
          author: "LS. Nguyễn Đình Bảo",
          date: "22 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-rb-3",
          numberBadge: "03",
          category: "DOANH NGHIỆP",
          title: "Giải pháp thu hồi công nợ khó đòi thông qua thương lượng và khởi kiện",
          author: "LS. Phạm Gia Hưng",
          date: "20 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=320&q=80",
        },
        {
          id: "tr-rb-4",
          numberBadge: "04",
          category: "DOANH NGHIỆP",
          title: "Thủ tục giải thể và phá sản doanh nghiệp: Quyền ưu tiên thanh toán",
          author: "LS. Vũ Thu Hà",
          date: "18 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=320&q=80",
        },
      ],
    },
  },
  circularDigestSection: {
    tabs: ["Thời Sự Pháp Lý", "Nhịp Sống", "An Ninh & Trật Tự"],
    items: [
      {
        id: "cd-1",
        numberBadge: "01",
        category: "THỜI SỰ",
        title: "Triển khai tòa án điện tử và xét xử trực tuyến trên phạm vi toàn quốc",
        author: "LS. Trần Minh Quốc",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "cd-2",
        numberBadge: "02",
        category: "AN NINH",
        title: "Cảnh báo thủ đoạn giả mạo văn bản cơ quan tố tụng để lừa đảo trực tuyến",
        author: "LS. Phạm Gia Hưng",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "cd-3",
        numberBadge: "03",
        category: "ĐẦU TƯ",
        title: "Cơ chế một cửa liên thông trong cấp phép xây dựng khu công nghiệp sinh thái",
        author: "LS. Nguyễn Đình Bảo",
        date: "21 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "cd-4",
        numberBadge: "04",
        category: "NHỊP SỐNG",
        title: "Trợ giúp pháp lý miễn phí cho người lao động và hộ gia đình chính sách",
        author: "LS. Lê Hoàng Yến",
        date: "20 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "cd-5",
        numberBadge: "05",
        category: "THƯƠNG MẠI",
        title: "Phòng vệ thương mại và chống bán phá giá đối với hàng xuất khẩu sang EU",
        author: "LS. Vũ Thu Hà",
        date: "19 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "cd-6",
        numberBadge: "06",
        category: "NGÂN HÀNG",
        title: "Quy định xử lý tài sản bảo đảm là bất động sản hình thành trong tương lai",
        author: "LS. Trần Minh Quốc",
        date: "18 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=300&q=80",
      },
    ],
    newsletterBox: {
      title: "Nhận Tin Tức Mới Nhất",
      subtitle:
        "Đăng ký nhận bản tin điểm báo pháp luật hàng tuần hoặc gửi câu hỏi cần luật sư Magezix tư vấn.",
      buttonText: "ĐĂNG KÝ NGAY",
    },
  },
  hotVideoSection: {
    title: "Video Hot",
    leftVideos: [
      {
        id: "vid-l1",
        category: "TRANH TỤNG",
        categoryColor: "#f21b3f",
        title: "Bản Lĩnh Luật Sư Bào Chữa Tại Phiên Tòa Hình Sự Sơ Thẩm & Phúc Thẩm",
        author: "LS. Phạm Gia Hưng",
        date: "23 Tháng 10, 2026",
        duration: "12:18",
        isVideo: true,
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "vid-l2",
        category: "DOANH NGHIỆP",
        categoryColor: "#2563eb",
        title: "Hướng Dẫn Thẩm Định Pháp Lý Dự Án Bất Động Sản Trước Khi Góp Vốn",
        author: "LS. Trần Minh Quốc",
        date: "21 Tháng 10, 2026",
        duration: "16:45",
        isVideo: true,
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      },
    ],
    centerMainVideo: {
      id: "vid-center",
      category: "TỌA ĐÀM ĐẶC BIỆT",
      categoryColor: "#f21b3f",
      title:
        "Toàn Cảnh Luật Đất Đai, Luật Nhà Ở & Luật Kinh Doanh Bất Động Sản: Cơ Hội Nào Cho Nhà Đầu Tư?",
      excerpt:
        "Phiên thảo luận chuyên sâu kéo dài 45 phút cùng các chuyên gia pháp lý đầu ngành và đại diện Hiệp hội Bất động sản.",
      author: "Ban Biên Tập Magezix TV",
      date: "23 Tháng 10, 2026",
      duration: "45:10",
      isVideo: true,
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=85",
    },
    rightTallVideo: {
      id: "vid-right",
      category: "GÓC LUẬT SƯ",
      categoryColor: "#7c3aed",
      title:
        "Kỹ Năng Đàm Phán Hợp Đồng Thương Mại Quốc Tế & Phòng Ngừa Rủi Ro Thanh Toán L/C",
      author: "LS. Nguyễn Đình Bảo",
      date: "22 Tháng 10, 2026",
      duration: "21:30",
      isVideo: true,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
    },
  },
  internationalLawSection: {
    title: "Thế Giới & Pháp Luật Quốc Tế",
    leftNumbered: [
      {
        id: "int-l1",
        numberBadge: "01",
        category: "CHÂU ÂU",
        title: "Đạo luật AI của Liên minh Châu Âu (EU AI Act) và nghĩa vụ tuân thủ xuyên biên giới",
        author: "LS. Vũ Thu Hà",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "int-l2",
        numberBadge: "02",
        category: "THƯƠNG MẠI",
        title: "Cơ chế điều chỉnh biên giới carbon (CBAM) tác động đến thép và xi măng xuất khẩu",
        author: "LS. Nguyễn Đình Bảo",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "int-l3",
        numberBadge: "03",
        category: "TRỌNG TÀI",
        title: "Công nhận và cho thi hành tại Việt Nam phán quyết của Trọng tài Quốc tế SIAC",
        author: "LS. Trần Minh Quốc",
        date: "20 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "int-l4",
        numberBadge: "04",
        category: "ĐẦU TƯ",
        title: "Hiệp định bảo hộ đầu tư EVIPA và cơ chế giải quyết tranh chấp Nhà nước - Nhà đầu tư",
        author: "LS. Phạm Gia Hưng",
        date: "18 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=320&q=80",
      },
    ],
    centerMain: {
      id: "int-center",
      category: "THƯƠNG MẠI QUỐC TẾ",
      categoryColor: "#f21b3f",
      title:
        "Doanh Nghiệp Việt Nam Trước Làn Sóng Điều Tra Phòng Vệ Thương Mại Toàn Cầu Năm 2026",
      excerpt:
        "Chuẩn bị hệ thống kế toán minh bạch, truy xuất nguồn gốc nguyên liệu và phối hợp chặt chẽ với luật sư thương mại quốc tế ngay từ khi có thông báo khởi xướng.",
      author: "LS. Trần Minh Quốc",
      date: "23 Tháng 10, 2026",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    },
    centerBottomVideo: {
      id: "int-vid",
      category: "PHÂN TÍCH QUỐC TẾ",
      categoryColor: "#2563eb",
      title:
        "Quy Trình Xin Visa Đầu Tư & Thành Lập Công Ty Con Tại Hoa Kỳ, Singapore Và Châu Âu",
      author: "LS. Lê Hoàng Yến",
      date: "21 Tháng 10, 2026",
      isVideo: true,
      duration: "18:05",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    },
    rightTabs: ["Chính Sách", "Lao Động", "Dân Sinh"],
    rightNumbered: [
      {
        id: "int-r1",
        numberBadge: "01",
        category: "CHÍNH SÁCH",
        title: "Miễn thị thực song phương và quy định cấp giấy phép lao động cho chuyên gia nước ngoài",
        author: "LS. Lê Hoàng Yến",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "int-r2",
        numberBadge: "02",
        category: "CHÍNH SÁCH",
        title: "Hiệp định tránh đánh thuế hai lần giữa Việt Nam và các đối tác chiến lược",
        author: "LS. Nguyễn Đình Bảo",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "int-r3",
        numberBadge: "03",
        category: "LAO ĐỘNG",
        title: "Tiêu chuẩn lao động xanh và trách nhiệm xã hội doanh nghiệp (ESG) trong chuỗi cung ứng",
        author: "LS. Vũ Thu Hà",
        date: "20 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=320&q=80",
      },
      {
        id: "int-r4",
        numberBadge: "04",
        category: "DÂN SINH",
        title: "Hợp pháp hóa lãnh sự giấy tờ hộ tịch và bằng cấp phục vụ định cư nước ngoài",
        author: "LS. Phạm Gia Hưng",
        date: "19 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=320&q=80",
      },
    ],
  },
  bottomCategoryColumns: [
    {
      id: "cat-col-1",
      title: "Luật Kinh Doanh",
      items: [
        {
          id: "cc-1-1",
          category: "M&A",
          title: "Thẩm định pháp lý chuyên sâu trong giao dịch mua bán cổ phần chi phối",
          author: "LS. Trần Minh Quốc",
          date: "23 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-1-2",
          category: "HỢP ĐỒNG",
          title: "Cơ chế điều chỉnh giá trong hợp đồng xây dựng EPC khi biến động vật liệu",
          author: "LS. Nguyễn Đình Bảo",
          date: "21 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-1-3",
          category: "CỔ ĐÔNG",
          title: "Quyền khởi kiện phái sinh của cổ đông thiểu số đối với người quản lý công ty",
          author: "LS. Vũ Thu Hà",
          date: "19 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-1-4",
          category: "TÀI CHÍNH",
          title: "Hành lang pháp lý cho hoạt động cho vay ngang hàng và Sandbox ngân hàng",
          author: "LS. Phạm Gia Hưng",
          date: "17 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=260&q=80",
        },
      ],
    },
    {
      id: "cat-col-2",
      title: "Luật Bất Động Sản",
      items: [
        {
          id: "cc-2-1",
          category: "QUY HOẠCH",
          title: "Quyền lợi của người sử dụng đất khi dự án treo quá thời hạn quy hoạch",
          author: "LS. Lê Hoàng Yến",
          date: "23 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-2-2",
          category: "CHUNG CƯ",
          title: "Giải quyết tranh chấp quỹ bảo trì 2% giữa Ban quản trị và Chủ đầu tư",
          author: "LS. Trần Minh Quốc",
          date: "22 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-2-3",
          category: "THUẾ ĐẤT",
          title: "Các trường hợp được miễn thuế thu nhập cá nhân khi chuyển nhượng nhà đất",
          author: "LS. Nguyễn Đình Bảo",
          date: "20 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-2-4",
          category: "CÔNG CHỨNG",
          title: "Thủ tục công chứng hợp đồng thế chấp quyền sử dụng đất của hộ gia đình",
          author: "LS. Vũ Thu Hà",
          date: "18 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=260&q=80",
        },
      ],
    },
    {
      id: "cat-col-3",
      title: "Tranh Tụng & Trọng Tài",
      items: [
        {
          id: "cc-3-1",
          category: "ÁN LỆ",
          title: "Tổng hợp 10 án lệ thương mại và dân sự quan trọng vừa được công bố",
          author: "LS. Phạm Gia Hưng",
          date: "23 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-3-2",
          category: "TRỌNG TÀI",
          title: "Soạn thảo thỏa thuận trọng tài mẫu tránh nguy cơ bị tuyên vô hiệu",
          author: "LS. Trần Minh Quốc",
          date: "21 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-3-3",
          category: "THI HÀNH ÁN",
          title: "Yêu cầu áp dụng biện pháp khẩn cấp tạm thời phong tỏa tài khoản ngân hàng",
          author: "LS. Lê Hoàng Yến",
          date: "19 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=260&q=80",
        },
        {
          id: "cc-3-4",
          category: "HÒA GIẢI",
          title: "Ưu thế của phương thức hòa giải thương mại trong tranh chấp cổ đông",
          author: "LS. Vũ Thu Hà",
          date: "16 Tháng 10, 2026",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=260&q=80",
        },
      ],
    },
  ],
  partnerLogos: [
    { id: "pl-1", name: "VIAC ARBITRATION", subtitle: "Đối tác Trọng tài" },
    { id: "pl-2", name: "LEGAL 500 ASIA", subtitle: "Xếp hạng Hãng luật" },
    { id: "pl-3", name: "CHAMBERS GLOBAL", subtitle: "Tư vấn Doanh nghiệp" },
    { id: "pl-4", name: "AMCHAM LEGAL", subtitle: "Hiệp hội Thương mại" },
    { id: "pl-5", name: "EUROCHAM VN", subtitle: "Ủy ban Pháp chế" },
    { id: "pl-6", name: "IPBA MEMBER", subtitle: "Luật sư Thái Bình Dương" },
  ],
  footer: {
    description:
      "Magezix Law là cổng thông tin chuyên sâu về pháp luật kinh doanh, dân sự, bất động sản và tranh tụng, được vận hành bởi đội ngũ Luật sư thành viên giàu kinh nghiệm thực chiến.",
    worldLinks: [
      {
        id: "fw-1",
        category: "QUỐC TẾ",
        title: "Xu hướng khung pháp lý tài sản số và tiền kỹ thuật số ngân hàng trung ương",
        author: "LS. Trần Minh Quốc",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "fw-2",
        category: "THƯƠNG MẠI",
        title: "Quy tắc xuất xứ hàng hóa trong Hiệp định CPTPP và RCEP",
        author: "LS. Nguyễn Đình Bảo",
        date: "21 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80",
      },
    ],
    legalLifeLinks: [
      {
        id: "fl-1",
        category: "DÂN SỰ",
        title: "Thủ tục lập di chúc hợp pháp tại văn phòng công chứng hoặc có người làm chứng",
        author: "LS. Lê Hoàng Yến",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "fl-2",
        category: "LAO ĐỘNG",
        title: "Chế độ thai sản và bảo hiểm thất nghiệp mới nhất năm 2026",
        author: "LS. Vũ Thu Hà",
        date: "19 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=240&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=240&q=80",
    ],
    bottomNav: [
      "Về Magezix Law",
      "Đội Ngũ Luật Sư",
      "Chính Sách Bảo Mật",
      "Điều Khoản Sử Dụng",
      "Liên Hệ Đặt Lịch",
    ],
    copyright: "© 2026 Magezix Legal Portal & Law Firm. Bảo lưu mọi quyền.",
  },
};
