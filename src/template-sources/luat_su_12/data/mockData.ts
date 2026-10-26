import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface EditorialBriefItem {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  commentsCount: string;
  category?: string;
  image: string;
}

export interface EditorialSectionSplit {
  id: string;
  title: string;
  featured: EditorialBriefItem;
  sideItems: EditorialBriefItem[];
}

export interface EditorialSectionGrid6 {
  id: string;
  title: string;
  items: EditorialBriefItem[];
}

export interface LuatSu12Data {
  business: Record<string, any>;
  hero?: Record<string, any>;
  [key: string]: any;
  topWeatherBar: {
    temperature: string;
    city: string;
    dateText: string;
    socials: string[];
  };
  masthead: {
    logoPrefix: string;
    logoMain: string;
    subtitle: string;
    bannerHighlight: string;
    navItems: Array<{
      label: string;
      href: string;
    }>;
  };
  topLeadSection: {
    mainStory: EditorialBriefItem;
    rightBriefs: EditorialBriefItem[];
  };
  thoiSuSection: {
    title: string;
    cards: EditorialBriefItem[];
  };
  tieuDiemSection: {
    title: string;
    topPair: EditorialBriefItem[];
    bottomList: EditorialBriefItem[];
  };
  splitSections: EditorialSectionSplit[];
  gridSections: EditorialSectionGrid6[];
  sidebar: {
    mostReadTitle: string;
    mostReadItems: Array<{
      id: string;
      title: string;
      date: string;
    }>;
    realEstatePoster: {
      badge: string;
      title: string;
      subtitle: string;
      hotline: string;
      image: string;
    };
    weatherWidget: {
      city: string;
      currentTemp: string;
      condition: string;
      humidity: string;
      wind: string;
      forecast: Array<{
        day: string;
        temp: string;
      }>;
    };
    videoPlaylist: {
      headerTitle: string;
      items: Array<{
        id: string;
        title: string;
        duration: string;
        image: string;
      }>;
    };
    enterpriseBanner: {
      badge: string;
      title: string;
      points: string[];
      ctaText: string;
      image: string;
    };
    consultationPromo: {
      title: string;
      subtitle: string;
      phone: string;
      image: string;
    };
    canBietSection: {
      title: string;
      items: EditorialBriefItem[];
    };
  };
  footer: {
    aboutDescription: string;
    copyright: string;
  };
}

export const luatSu12DefaultData: LuatSu12Data = {
  business: {
    name: "Người Đưa Tin Pháp Lý - Mona Law",
    tagline: "Chuyên Trang Pháp Luật Bảo Hiểm, Dân Sự & Tranh Tụng Toàn Quốc",
    phone: ["0976 968 279", "1900 636 648"],
    email: ["toasoan@nguoiduatinphaply.vn", "tuvan@monalaw.vn"],
    address: "Số 1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh",
    hours: "Thứ 2 - Chủ Nhật: 07:30 - 21:00 (Đường dây nóng Tranh tụng 24/7)",
  },
  topWeatherBar: {
    temperature: "31°C",
    city: "TP. Hồ Chí Minh",
    dateText: "Thứ Năm, Ngày 23 Tháng 10, 2026",
    socials: ["f", "G+", "P", "𝕏"],
  },
  masthead: {
    logoPrefix: "news",
    logoMain: "MONA",
    subtitle: "NGƯỜI ĐƯA TIN PHÁP LÝ & TRANH TỤNG",
    bannerHighlight:
      "TỔNG ĐÀI LUẬT SƯ TRANH TỤNG & BẢO HIỂM DÂN SỰ: 0976 968 279",
    navItems: [
      { label: "XÃ HỘI", href: "#xa-hoi" },
      { label: "PHÁP LUẬT", href: "#phap-luat" },
      { label: "THẾ GIỚI", href: "#the-gioi" },
      { label: "THỜI SỰ", href: "#thoi-su" },
      { label: "KINH DOANH", href: "#kinh-doanh" },
      { label: "ĐỜI SỐNG", href: "#doi-song" },
      { label: "HỒ SƠ ÁN LỆ", href: "#ho-so" },
      { label: "GIAO THÔNG", href: "#giao-thong" },
      { label: "CÔNG NGHỆ", href: "#cong-nghe" },
      { label: "CẦN BIẾT", href: "#can-biet" },
    ],
  },
  topLeadSection: {
    mainStory: {
      id: "lead-main",
      category: "DIỄN ĐÀN PHÁP LÝ",
      title:
        'Diễn Đàn Pháp Lý & Vinh Danh Luật Sư Tranh Tụng Xuất Sắc Năm 2026 "Charm Of Law"',
      excerpt:
        "Hội nghị thường niên quy tụ hơn 300 luật sư tranh tụng, thẩm phán cao cấp và chuyên gia bảo hiểm thương mại nhằm thảo luận các án lệ mới nhất về bồi thường thiệt hại dân sự, bảo hiểm hàng hải và giải quyết tranh chấp hợp đồng tín dụng.",
      date: "23/10/2026",
      commentsCount: "12",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85",
    },
    rightBriefs: [
      {
        id: "rb-1",
        title:
          "Quy trình yêu cầu bồi thường bảo hiểm cháy nổ bắt buộc đối với nhà xưởng sản xuất",
        date: "23/10/2026",
        commentsCount: "4",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=260&q=80",
      },
      {
        id: "rb-2",
        title:
          "Tòa án nhân dân tối cao ban hành hướng dẫn mới về giải quyết tranh chấp hợp đồng vay tài sản",
        date: "23/10/2026",
        commentsCount: "0",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=260&q=80",
      },
      {
        id: "rb-3",
        title:
          "Luật sư chỉ rõ 5 trường hợp doanh nghiệp bảo hiểm không được từ chối chi trả viện phí",
        date: "22/10/2026",
        commentsCount: "8",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=260&q=80",
      },
      {
        id: "rb-4",
        title:
          "Kinh nghiệm lập vi bằng ghi nhận hiện trạng công trình xây dựng liền kề gây lún nứt",
        date: "22/10/2026",
        commentsCount: "3",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=260&q=80",
      },
      {
        id: "rb-5",
        title:
          "Bảo vệ quyền lợi hợp pháp của người thứ ba ngay tình trong giao dịch chuyển nhượng nhà đất",
        date: "21/10/2026",
        commentsCount: "6",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=260&q=80",
      },
    ],
  },
  thoiSuSection: {
    title: "Thời sự",
    cards: [
      {
        id: "ts-1",
        title:
          "Đẩy mạnh cải cách tư pháp và ứng dụng hồ sơ số hóa trong tố tụng dân sự, hành chính",
        excerpt:
          "Các đương sự có thể nộp đơn khởi kiện, tài liệu chứng cứ và theo dõi tiến độ thụ lý vụ án trực tuyến trên cổng dịch vụ công tư pháp.",
        date: "23/10/2026",
        commentsCount: "5",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "ts-2",
        title:
          "Tăng cường giám sát hoạt động tư vấn phát hành trái phiếu và đại lý bảo hiểm qua ngân hàng",
        excerpt:
          "Bộ Tài chính phối hợp Ngân hàng Nhà nước siết chặt quy trình minh bạch thông tin nhằm bảo vệ quyền lợi người gửi tiền.",
        date: "22/10/2026",
        commentsCount: "2",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "ts-3",
        title:
          "Hội thảo toàn quốc về hoàn thiện pháp luật thi hành án dân sự và thu hồi tài sản tham nhũng",
        excerpt:
          "Rút ngắn thời gian kê biên, định giá và đấu giá tài sản bảo đảm để nâng cao tỷ lệ thu hồi nợ xấu cho hệ thống tổ chức tín dụng.",
        date: "21/10/2026",
        commentsCount: "9",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  tieuDiemSection: {
    title: "Tiêu điểm",
    topPair: [
      {
        id: "td-1",
        title:
          "Giải Mã Án Lệ Số 56 Về Tranh Chấp Hợp Đồng Bảo Hiểm Nhân Thọ Khi Kê Khai Hồ Sơ Sức Khỏe",
        excerpt:
          "Phân tích ranh giới pháp lý giữa lỗi cố ý che giấu bệnh nền của bên mua bảo hiểm và nghĩa vụ giải thích rõ điều khoản loại trừ của tư vấn viên.",
        date: "23/10/2026",
        commentsCount: "14",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "td-2",
        title:
          "Tranh Chấp Hợp Đồng Đặt Cọc Mua Bán Nhà Đất: Khi Nào Được Miễn Trách Nhiệm Phạt Cọc?",
        excerpt:
          "Các trường hợp bất khả kháng hoặc trở ngại khách quan do thay đổi quy hoạch sử dụng đất của cơ quan nhà nước có thẩm quyền.",
        date: "22/10/2026",
        commentsCount: "11",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
      },
    ],
    bottomList: [
      {
        id: "td-b1",
        title: "Thủ tục yêu cầu giám định chữ ký và con dấu trên hợp đồng chuyển nhượng",
        date: "21/10/2026",
        commentsCount: "3",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=240&q=80",
      },
      {
        id: "td-b2",
        title: "Quy định về lãi suất chậm trả và giới hạn lãi suất trong hợp đồng vay dân sự",
        date: "20/10/2026",
        commentsCount: "7",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=240&q=80",
      },
      {
        id: "td-b3",
        title: "Trình tự khởi kiện yêu cầu bồi thường thiệt hại do xâm phạm uy tín, danh dự",
        date: "19/10/2026",
        commentsCount: "2",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=240&q=80",
      },
      {
        id: "td-b4",
        title: "Cách thức ủy quyền hợp pháp cho luật sư đại diện tham gia tố tụng tại Tòa án",
        date: "18/10/2026",
        commentsCount: "0",
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=240&q=80",
      },
    ],
  },
  splitSections: [
    {
      id: "xa-hoi",
      title: "Xã hội",
      featured: {
        id: "xh-main",
        title:
          "Triển Khai Mạng Lưới Luật Sư Trợ Giúp Pháp Lý Lưu Động Cho Công Nhân Các Khu Công Nghiệp",
        excerpt:
          "Hơn 15.000 lượt tư vấn miễn phí về bảo hiểm xã hội, tai nạn lao động và giải quyết tranh chấp tiền lương đã được thực hiện trong quý vừa qua.",
        date: "23/10/2026",
        commentsCount: "6",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
      },
      sideItems: [
        {
          id: "xh-1",
          title: "Quyền lợi hưởng bảo hiểm tai nạn lao động khi di chuyển từ nơi ở đến nơi làm việc",
          date: "22/10/2026",
          commentsCount: "2",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "xh-2",
          title: "Xử lý nghiêm hành vi giữ bản chính giấy tờ tùy thân và bằng cấp của người lao động",
          date: "21/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "xh-3",
          title: "Chính sách hỗ trợ vay vốn mua nhà ở xã hội với lãi suất ưu đãi năm 2026",
          date: "20/10/2026",
          commentsCount: "1",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "xh-4",
          title: "Hướng dẫn đăng ký giám hộ đương nhiên và giám hộ cử cho người mất năng lực hành vi",
          date: "19/10/2026",
          commentsCount: "0",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=240&q=80",
        },
      ],
    },
    {
      id: "phap-luat",
      title: "Pháp luật",
      featured: {
        id: "pl-main",
        title:
          "Nâng Cao Vai Trò Tranh Tụng Của Luật Sư Bào Chữa Tại Phiên Tòa Hình Sự Theo Tinh Thần Cải Cách Tư Pháp",
        excerpt:
          "Mọi chứng cứ buộc tội và gỡ tội đều phải được thẩm tra công khai tại phiên tòa; phán quyết của Hội đồng xét xử căn cứ toàn diện vào kết quả tranh tụng.",
        date: "23/10/2026",
        commentsCount: "18",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80",
      },
      sideItems: [
        {
          id: "pl-1",
          title: "Phân biệt tội lừa đảo chiếm đoạt tài sản và lạm dụng tín nhiệm chiếm đoạt tài sản",
          date: "23/10/2026",
          commentsCount: "9",
          image:
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "pl-2",
          title: "Điều kiện được hưởng án treo và miễn trách nhiệm hình sự khi khắc phục hậu quả",
          date: "21/10/2026",
          commentsCount: "5",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "pl-3",
          title: "Trình tự kháng cáo bản án sơ thẩm và thời hạn nộp đơn kháng cáo đúng luật",
          date: "20/10/2026",
          commentsCount: "3",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "pl-4",
          title: "Quy định về bảo lãnh tại ngoại và thay đổi biện pháp ngăn chặn trong giai đoạn điều tra",
          date: "18/10/2026",
          commentsCount: "7",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=240&q=80",
        },
      ],
    },
    {
      id: "kinh-doanh",
      title: "Kinh doanh & Bảo hiểm",
      featured: {
        id: "kd-main",
        title:
          "Giải Quyết Tranh Chấp Bảo Hiểm Hàng Hải & Tổn Thất Hàng Hóa Xuất Nhập Khẩu Bằng Đường Biển",
        excerpt:
          "Kinh nghiệm giám định tổn thất độc lập, bảo lưu quyền khiếu nại người chuyên chở và yêu cầu công ty bảo hiểm bồi thường tổn thất chung.",
        date: "23/10/2026",
        commentsCount: "10",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
      },
      sideItems: [
        {
          id: "kd-1",
          title: "Rà soát điều khoản miễn trừ trách nhiệm trong hợp đồng bảo hiểm công trình xây dựng",
          date: "22/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "kd-2",
          title: "Thủ tục yêu cầu mở thủ tục phá sản đối với đối tác chây ỳ thanh toán công nợ",
          date: "21/10/2026",
          commentsCount: "6",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "kd-3",
          title: "Bồi thường bảo hiểm gián đoạn kinh doanh sau sự cố hỏa hoạn tại khu chế xuất",
          date: "19/10/2026",
          commentsCount: "1",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "kd-4",
          title: "Trách nhiệm pháp lý của thành viên Hội đồng quản trị trong giao dịch với bên liên quan",
          date: "17/10/2026",
          commentsCount: "2",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=240&q=80",
        },
      ],
    },
    {
      id: "ho-so",
      title: "Hồ sơ & Án lệ",
      featured: {
        id: "hs-main",
        title:
          "Hồ Sơ Vụ Án Điển Hình: Thắng Kiện Đòi Bồi Thường 42 Tỷ Đồng Bảo Hiểm Thân Tàu Và Trách Nhiệm Dân Sự",
        excerpt:
          "Nhìn lại hành trình 18 tháng thu thập dữ liệu hải trình, nhật ký boong tàu và tranh luận pháp lý sắc bén của Đoàn Luật sư Mona Law tại Tòa Kinh tế.",
        date: "23/10/2026",
        commentsCount: "21",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
      },
      sideItems: [
        {
          id: "hs-1",
          title: "Án lệ về công nhận hợp đồng chuyển nhượng quyền sử dụng đất vi phạm hình thức",
          date: "22/10/2026",
          commentsCount: "5",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "hs-2",
          title: "Phân tích vụ tranh chấp quyền sở hữu sáng chế dây chuyền sản xuất dược phẩm",
          date: "20/10/2026",
          commentsCount: "3",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "hs-3",
          title: "Bản án phúc thẩm hủy quyết định thu hồi đất trái trình tự thông báo giải phóng mặt bằng",
          date: "18/10/2026",
          commentsCount: "8",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "hs-4",
          title: "Giải quyết tranh chấp hợp đồng tín dụng khi tài sản thế chấp bị kê biên ở vụ án khác",
          date: "16/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=240&q=80",
        },
      ],
    },
    {
      id: "cong-nghe",
      title: "Công nghệ Pháp lý",
      featured: {
        id: "cn-main",
        title:
          "Chữ Ký Số, Hợp Đồng Thông Minh (Smart Contract) Và Giá Trị Chứng Cứ Trong Xét Xử Thương Mại",
        excerpt:
          "Cách thức xác thực danh tính người ký điện tử và quy trình giám định kỹ thuật số khi phát sinh tranh chấp giao dịch thương mại điện tử xuyên biên giới.",
        date: "23/10/2026",
        commentsCount: "7",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=700&q=80",
      },
      sideItems: [
        {
          id: "cn-1",
          title: "Tuân thủ Nghị định bảo vệ dữ liệu cá nhân đối với ứng dụng tài chính tiêu dùng",
          date: "22/10/2026",
          commentsCount: "2",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "cn-2",
          title: "Bản quyền tác phẩm âm nhạc và hình ảnh có sự hỗ trợ của trí tuệ nhân tạo",
          date: "21/10/2026",
          commentsCount: "5",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "cn-3",
          title: "Trách nhiệm pháp lý của sàn thương mại điện tử khi để lọt hàng giả nhãn hiệu",
          date: "19/10/2026",
          commentsCount: "1",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=240&q=80",
        },
        {
          id: "cn-4",
          title: "Phòng chống tấn công mạng và quy trình thông báo vi phạm dữ liệu trong 72 giờ",
          date: "17/10/2026",
          commentsCount: "0",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=240&q=80",
        },
      ],
    },
  ],
  gridSections: [
    {
      id: "the-gioi",
      title: "Thế giới",
      items: [
        {
          id: "tg-1",
          title: "Tòa án Trọng tài Quốc tế ICC cập nhật quy tắc giải quyết tranh chấp rút gọn",
          date: "23/10/2026",
          commentsCount: "3",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tg-2",
          title: "Mỹ và EU siết chặt quy định chống rửa tiền đối với giao dịch bất động sản cao cấp",
          date: "22/10/2026",
          commentsCount: "1",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tg-3",
          title: "Singapore ban hành khung pháp lý mới cho quỹ tín thác gia đình và quản lý gia sản",
          date: "21/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tg-4",
          title: "Phán quyết lịch sử tại Châu Âu về trách nhiệm bảo hiểm khí hậu của các tập đoàn năng lượng",
          date: "20/10/2026",
          commentsCount: "2",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tg-5",
          title: "Nhật Bản sửa đổi luật lao động nhằm thu hút chuyên gia kỹ thuật và luật sư quốc tế",
          date: "19/10/2026",
          commentsCount: "0",
          image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tg-6",
          title: "Công ước Singapore về Hòa giải: Bước tiến cho thi hành thỏa thuận thương mại quốc tế",
          date: "18/10/2026",
          commentsCount: "5",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      id: "doi-song",
      title: "Đời sống Pháp lý",
      items: [
        {
          id: "ds-1",
          title: "Thủ tục phân chia tài sản chung của vợ chồng trong thời kỳ hôn nhân để đầu tư riêng",
          date: "23/10/2026",
          commentsCount: "6",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ds-2",
          title: "Những lưu ý pháp lý khi lập di chúc định đoạt sổ tiết kiệm và cổ phiếu tại ngân hàng",
          date: "22/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ds-3",
          title: "Giải quyết tranh chấp quyền trực tiếp nuôi con dưới 36 tháng tuổi sau khi ly hôn",
          date: "21/10/2026",
          commentsCount: "8",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ds-4",
          title: "Quyền yêu cầu đổi họ cho con theo họ của cha hoặc mẹ kế trong hộ tịch điện tử",
          date: "20/10/2026",
          commentsCount: "1",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ds-5",
          title: "Bồi thường thiệt hại khi cơ sở thẩm mỹ hoặc phòng khám tư nhân để xảy ra tai biến",
          date: "19/10/2026",
          commentsCount: "9",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "ds-6",
          title: "Trách nhiệm dân sự của chủ vật nuôi khi để thú cưng gây thương tích cho người khác",
          date: "18/10/2026",
          commentsCount: "3",
          image:
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    {
      id: "giao-thong",
      title: "Luật Giao thông & Xe",
      items: [
        {
          id: "gt-1",
          title: "Quy trình giám định hiện trường và đòi bồi thường bảo hiểm thân vỏ ô tô sau va chạm",
          date: "23/10/2026",
          commentsCount: "11",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "gt-2",
          title: "Mức chế tài trừ điểm giấy phép lái xe và thủ tục phục hồi điểm trên ứng dụng VNeID",
          date: "22/10/2026",
          commentsCount: "7",
          image:
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "gt-3",
          title: "Trách nhiệm bồi thường của chủ xe khi giao phương tiện cho người không đủ điều kiện lái",
          date: "21/10/2026",
          commentsCount: "5",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "gt-4",
          title: "Thủ tục sang tên đổi chủ xe ô tô biển số định danh khi mua bán khác tỉnh thành",
          date: "20/10/2026",
          commentsCount: "2",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "gt-5",
          title: "Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới: Mức chi trả tối đa 2026",
          date: "19/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "gt-6",
          title: "Cách khiếu nại thông báo phạt nguội khi xe đã bán nhưng chưa làm thủ tục thu hồi biển",
          date: "18/10/2026",
          commentsCount: "6",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  ],
  sidebar: {
    mostReadTitle: "Đọc nhiều nhất",
    mostReadItems: [
      {
        id: "mr-1",
        title: "Toàn văn hướng dẫn mức thu án phí dân sự và kinh doanh thương mại năm 2026",
        date: "23/10/2026",
      },
      {
        id: "mr-2",
        title: "Mẫu đơn yêu cầu khởi kiện buộc công ty bảo hiểm chi trả tiền bảo hiểm tai nạn",
        date: "23/10/2026",
      },
      {
        id: "mr-3",
        title: "Đất hộ gia đình thiếu chữ ký của một thành viên khi chuyển nhượng có bị vô hiệu?",
        date: "22/10/2026",
      },
      {
        id: "mr-4",
        title: "Mức phạt vi phạm nồng độ cồn và quy trình tạm giữ phương tiện hành chính",
        date: "22/10/2026",
      },
      {
        id: "mr-5",
        title: "Chứng cứ ghi âm cuộc gọi đòi nợ có được dùng để tố giác tội cưỡng đoạt tài sản?",
        date: "21/10/2026",
      },
      {
        id: "mr-6",
        title: "Thủ tục xóa thế chấp sổ đỏ sau khi tất toán khoản vay ngân hàng thương mại",
        date: "20/10/2026",
      },
      {
        id: "mr-7",
        title: "Quy định thời hiệu khởi kiện tranh chấp hợp đồng bảo hiểm theo Luật Kinh doanh bảo hiểm",
        date: "19/10/2026",
      },
    ],
    realEstatePoster: {
      badge: "PHÁP LÝ BẤT ĐỘNG SẢN",
      title: "TƯ VẤN PHÁP LÝ DỰ ÁN & KHU ĐÔ THỊ SINH THÁI",
      subtitle:
        "Thẩm định quy hoạch 1/500, tháo gỡ vướng mắc cấp sổ hồng và đại diện giải quyết tranh chấp hợp đồng mua bán",
      hotline: "0976 968 279",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    },
    weatherWidget: {
      city: "TP. HỒ CHÍ MINH",
      currentTemp: "31°C",
      condition: "Nắng nhẹ, mây thay đổi",
      humidity: "Độ ẩm: 68%",
      wind: "Gió: Đông Nam 12 km/h",
      forecast: [
        { day: "T6", temp: "36°" },
        { day: "T7", temp: "38°" },
        { day: "CN", temp: "38°" },
        { day: "T2", temp: "37°" },
        { day: "T3", temp: "36°" },
      ],
    },
    videoPlaylist: {
      headerTitle: "Bản Tin Pháp Luật 24h",
      items: [
        {
          id: "vp-1",
          title:
            "Trực tiếp phiên tòa phúc thẩm vụ tranh chấp bồi thường bảo hiểm hàng hải quốc tế",
          duration: "15:40",
          image:
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80",
        },
        {
          id: "vp-2",
          title:
            "Luật sư giải đáp trực tiếp: Thủ tục khởi kiện đòi nợ cá nhân khi chỉ có giấy biên nhận viết tay",
          duration: "11:20",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "vp-3",
          title:
            "Cảnh báo pháp lý: Cẩn trọng các điều khoản phạt vi phạm ẩn trong hợp đồng vay tiêu dùng",
          duration: "08:55",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
    enterpriseBanner: {
      badge: "DỊCH VỤ PHÁP CHẾ THƯỜNG XUYÊN",
      title: "Tư Vấn Pháp Chế Doanh Nghiệp & Giấy Phép Đầu Tư Quốc Tế",
      points: [
        "Rà soát 100% hợp đồng thương mại & lao động",
        "Đại diện làm việc với cơ quan Thuế, Hải quan, Bảo hiểm",
        "Tham gia tranh tụng tại Tòa án & Trọng tài VIAC",
      ],
      ctaText: "ĐẶT LỊCH LUẬT SƯ NGAY",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    consultationPromo: {
      title: "ĐOÀN LUẬT SƯ TRANH TỤNG MONA LAW",
      subtitle: "Tư vấn trực tiếp tại văn phòng hoặc qua Video Call toàn quốc",
      phone: "1900 636 648",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    },
    canBietSection: {
      title: "Cần biết",
      items: [
        {
          id: "cb-1",
          title: "Danh sách các Trung tâm Trọng tài Thương mại uy tín tại TP.HCM và Hà Nội",
          date: "23/10/2026",
          commentsCount: "2",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80",
        },
        {
          id: "cb-2",
          title: "Biểu phí công chứng hợp đồng mua bán, tặng cho quyền sử dụng đất mới nhất",
          date: "21/10/2026",
          commentsCount: "5",
          image:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=200&q=80",
        },
        {
          id: "cb-3",
          title: "Quy định thời hạn cấp trích lục bản án, quyết định của Tòa án cho đương sự",
          date: "19/10/2026",
          commentsCount: "1",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=200&q=80",
        },
        {
          id: "cb-4",
          title: "Hướng dẫn tra cứu thông tin ngăn chặn giao dịch nhà đất trước khi đặt cọc",
          date: "17/10/2026",
          commentsCount: "4",
          image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=200&q=80",
        },
      ],
    },
  },
  footer: {
    aboutDescription:
      "Chuyên trang Người Đưa Tin Pháp Lý - Hãng Luật Mona Law cung cấp thông tin pháp luật chính thống, phân tích án lệ chuyên sâu và dịch vụ luật sư tranh tụng, bảo hiểm, dân sự uy tín hàng đầu.",
    copyright:
      "© Bản quyền thuộc về Người Đưa Tin Pháp Lý - Mona Law. Cấm sao chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.",
  },
};
