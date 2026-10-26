import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ENewsArticleCard {
  id: string;
  categories: Array<{
    label: string;
    color: string;
  }>;
  title: string;
  excerpt?: string;
  author: string;
  date: string;
  views?: string;
  duration?: string;
  image: string;
}

export interface FooterCategoryCol {
  id: string;
  title: string;
  links: string[];
}

export interface LuatSu13Data {
  business: Record<string, any>;
  hero?: Record<string, any>;
  [key: string]: any;
  header: {
    topLinks: string[];
    logoPrefix: string;
    logoHighlight: string;
    socials: string[];
    navItems: Array<{
      label: string;
      href: string;
    }>;
  };
  heroGrid: {
    mainLeft: ENewsArticleCard;
    stackedRight: ENewsArticleCard[];
  };
  topCampaignBanner: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    hotline: string;
  };
  dailyNewsSection: {
    title: string;
    viewAllText: string;
    cards: ENewsArticleCard[];
  };
  hotVideosSection: {
    title: string;
    viewAllText: string;
    featuredVideo: ENewsArticleCard;
    sideVideos: ENewsArticleCard[];
  };
  mainFeedSection: {
    title: string;
    articles: ENewsArticleCard[];
    sidebar: {
      highlightBannerTitle: string;
      highlightBannerSubtitle: string;
      featuredCategoriesTitle: string;
      featuredCategories: Array<{
        number: string;
        name: string;
        count: string;
        image: string;
      }>;
      tabs: string[];
      tabArticles: Record<string, ENewsArticleCard[]>;
      editorialPoster: {
        badge: string;
        title: string;
        quote: string;
        author: string;
        image: string;
      };
    };
  };
  redPromoBanner: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
  };
  forYouSection: {
    title: string;
    viewAllText: string;
    cards: ENewsArticleCard[];
  };
  footer: {
    columns: FooterCategoryCol[];
    copyright: string;
  };
}

export const luatSu13DefaultData: LuatSu13Data = {
  business: {
    name: "THE MONA NEWS - ENews Legal",
    tagline: "Văn Phòng Luật Sư Doanh Nghiệp & Sở Hữu Trí Tuệ Toàn Cầu",
    phone: ["1900 636 648", "0908 456 789"],
    email: ["ip-practice@themonalegal.vn", "corporate@themonalegal.vn"],
    address: "Tầng 22, Tòa nhà Vietcombank Tower, 5 Công Trường Mê Linh, Quận 1, TP. Hồ Chí Minh",
    hours: "Thứ 2 - Thứ 6: 08:00 - 18:00 | Thứ 7: 08:30 - 12:00",
  },
  header: {
    topLinks: ["Bản tin pháp chế", "Đầu tư FDI", "Trực tiếp 24/7"],
    logoPrefix: "THE MONA",
    logoHighlight: "NEWS",
    socials: ["FB", "TW", "IG", "YT"],
    navItems: [
      { label: "Doanh Nghiệp", href: "#hero" },
      { label: "Sở Hữu Trí Tuệ", href: "#daily" },
      { label: "Hợp Đồng", href: "#feed" },
      { label: "Xã Hội", href: "#feed" },
      { label: "Đầu Tư FDI", href: "#for-you" },
      { label: "Thuế & Tài Chính", href: "#for-you" },
      { label: "Lao Động", href: "#footer" },
      { label: "Video", href: "#videos" },
    ],
  },
  heroGrid: {
    mainLeft: {
      id: "hero-l",
      categories: [
        { label: "DOANH NGHIỆP", color: "#f59e0b" },
        { label: "M&A QUỐC TẾ", color: "#e51c23" },
      ],
      title:
        "Chiến Lược Bảo Hộ Tài Sản Trí Tuệ Và Thẩm Định Pháp Lý Trong Các Thương Vụ M&A Công Nghệ Tỷ Đô",
      excerpt:
        "Định giá bằng độc quyền sáng chế, kiểm toán mã nguồn phần mềm và chuyển giao nhãn hiệu là bước quyết định thành bại khi quỹ đầu tư ngoại rót vốn vào doanh nghiệp Việt.",
      author: "LS. Trương Hoàng Nam",
      date: "23 Tháng 10, 2026",
      views: "4.2K lượt xem",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    stackedRight: [
      {
        id: "hero-r1",
        categories: [{ label: "SỞ HỮU TRÍ TUỆ", color: "#a855f7" }],
        title:
          "Đăng Ký Nhãn Hiệu Quốc Tế Theo Nghị Định Thư Madrid: Lộ Trình Bảo Hộ Tại 130 Quốc Gia",
        author: "LS. Đặng Minh Châu",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "hero-r2",
        categories: [
          { label: "VIDEO PHÁP CHẾ", color: "#e51c23" },
          { label: "HỢP ĐỒNG", color: "#1f2937" },
        ],
        title:
          "Cơ Chế Giải Quyết Tranh Chấp Cổ Đông Sáng Lập Và Quyền Phủ Quyết Trong Điều Lệ Công Ty",
        author: "LS. Nguyễn Quốc Khánh",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  topCampaignBanner: {
    badge: "THE MONA LEGAL ADVISORY",
    title: "TƯ VẤN PHÁP CHẾ DOANH NGHIỆP & ĐẠI DIỆN SỞ HỮU CÔNG NGHIỆP",
    subtitle:
      "Đồng hành bảo vệ thương hiệu, kiểu dáng công nghiệp, bản quyền tác giả và cấu trúc hợp đồng thương mại chuẩn quốc tế.",
    ctaText: "NHẬN BÁO GIÁ DỊCH VỤ",
    hotline: "1900 636 648",
  },
  dailyNewsSection: {
    title: "Tin Tức Trong Ngày",
    viewAllText: "XEM TOÀN BỘ SỰ KIỆN",
    cards: [
      {
        id: "dn-1",
        categories: [{ label: "SỞ HỮU TRÍ TUỆ", color: "#a855f7" }],
        title:
          "Xử Lý Hành Vi Xâm Phạm Quyền Đối Với Tên Thương Mại Và Tên Miền Thương Hiệu Trên Không Gian Mạng",
        author: "LS. Đặng Minh Châu",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "dn-2",
        categories: [{ label: "DOANH NGHIỆP", color: "#f59e0b" }],
        title:
          "Quy Trình Cấp Giấy Chứng Nhận Đăng Ký Đầu Tư (IRC) Cho Dự Án Sản Xuất Công Nghệ Cao",
        author: "LS. Trương Hoàng Nam",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "dn-3",
        categories: [{ label: "THUẾ & TÀI CHÍNH", color: "#e51c23" }],
        title:
          "Kiểm Soát Rủi Ro Giao Dịch Liên Kết Và Hồ Sơ Xác Định Giá Thị Trường Cho Tập Đoàn Đa Quốc Gia",
        author: "LS. Nguyễn Quốc Khánh",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "dn-4",
        categories: [{ label: "TRANH TỤNG", color: "#1f2937" }],
        title:
          "Thi Hành Phán Quyết Trọng Tài Thương Mại Quốc Tế Đối Với Tài Sản Của Bên Phải Thi Hành Tại Việt Nam",
        author: "LS. Lê Thanh Tùng",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  hotVideosSection: {
    title: "Videos Hot",
    viewAllText: "XEM TẤT CẢ VIDEO",
    featuredVideo: {
      id: "hv-main",
      categories: [
        { label: "TALKSHOW PHÁP CHẾ", color: "#e51c23" },
        { label: "SỞ HỮU TRÍ TUỆ", color: "#a855f7" },
      ],
      title:
        "Bàn Tròn Luật Sư: Bảo Vệ Bí Mật Kinh Doanh Và Chống Cạnh Tranh Không Lành Mạnh Trong Ngành Dược & FMCG",
      excerpt:
        "Phân tích thực tiễn giải quyết tranh chấp giữa doanh nghiệp và nhân sự cấp cao vi phạm thỏa thuận bảo mật thông tin (NDA).",
      author: "Ban Pháp Chế THE MONA NEWS",
      date: "23 Tháng 10, 2026",
      duration: "28:45",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=85",
    },
    sideVideos: [
      {
        id: "hv-1",
        categories: [{ label: "NHƯỢNG QUYỀN", color: "#f59e0b" }],
        title:
          "Hồ Sơ Pháp Lý Nhượng Quyền Thương Mại (Franchise) Cho Chuỗi F&B Và Bán Lẻ",
        author: "LS. Đặng Minh Châu",
        date: "22 Tháng 10, 2026",
        duration: "14:10",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hv-2",
        categories: [{ label: "DOANH NGHIỆP", color: "#e51c23" }],
        title:
          "Cấu Trúc Hợp Đồng Quyền Chọn Mua Cổ Phần Cho Người Lao Động (ESOP) Hiệu Quả",
        author: "LS. Trương Hoàng Nam",
        date: "21 Tháng 10, 2026",
        duration: "19:30",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "hv-3",
        categories: [{ label: "SÁNG CHẾ", color: "#a855f7" }],
        title:
          "Hướng Dẫn Tra Cứu Khả Năng Bảo Hộ Nhãn Hiệu Trước Khi Ra Mắt Sản Phẩm Mới",
        author: "LS. Nguyễn Quốc Khánh",
        date: "20 Tháng 10, 2026",
        duration: "11:55",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  mainFeedSection: {
    title: "Có Thể Bạn Quan Tâm",
    articles: [
      {
        id: "mf-1",
        categories: [
          { label: "DOANH NGHIỆP", color: "#f59e0b" },
          { label: "QUẢN TRỊ", color: "#1f2937" },
        ],
        title:
          "Trách Nhiệm Của Người Đại Diện Theo Pháp Luật Khi Ký Kết Hợp Đồng Vượt Quá Thẩm Quyền Điều Lệ",
        excerpt:
          "Phân tích hệ quả pháp lý đối với hiệu lực hợp đồng và nghĩa vụ liên đới bồi thường thiệt hại của Giám đốc hoặc Tổng giám đốc công ty.",
        author: "LS. Trương Hoàng Nam",
        date: "23 Tháng 10, 2026",
        views: "1.8K lượt xem",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-2",
        categories: [{ label: "SỞ HỮU TRÍ TUỆ", color: "#a855f7" }],
        title:
          "Quy Trình Yêu Cầu Giám Định Sở Hữu Công Nghiệp Và Xử Phạt Hành Chính Hàng Hóa Sao Chép Kiểu Dáng",
        excerpt:
          "Phối hợp với Quản lý thị trường, Thanh tra Khoa học & Công nghệ và cơ quan Hải quan để tạm dừng thông quan lô hàng xâm phạm.",
        author: "LS. Đặng Minh Châu",
        date: "22 Tháng 10, 2026",
        views: "2.4K lượt xem",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-3",
        categories: [{ label: "HỢP ĐỒNG", color: "#e51c23" }],
        title:
          "Điều Khoản Giới Hạn Trách Nhiệm Và Phạt Vi Phạm Trong Hợp Đồng Gia Công Phần Mềm Quốc Tế",
        excerpt:
          "So sánh quy định của Luật Thương mại Việt Nam (mức trần phạt 8%) và Bộ luật Dân sự nhằm tối ưu hóa quyền lợi cho doanh nghiệp xuất khẩu IT.",
        author: "LS. Nguyễn Quốc Khánh",
        date: "21 Tháng 10, 2026",
        views: "1.5K lượt xem",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-4",
        categories: [{ label: "ĐẦU TƯ FDI", color: "#f59e0b" }],
        title:
          "Thủ Tục Mua Cổ Phần, Phần Vốn Góp Của Nhà Đầu Tư Nước Ngoài Trong Doanh Nghiệp Phân Phối Bán Lẻ",
        excerpt:
          "Các tiêu chí kiểm tra nhu cầu kinh tế (ENT) và quy trình xin cấp Giấy phép kinh doanh đối với cơ sở bán lẻ thứ hai trở đi.",
        author: "LS. Lê Thanh Tùng",
        date: "20 Tháng 10, 2026",
        views: "1.9K lượt xem",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-5",
        categories: [{ label: "LAO ĐỘNG", color: "#1f2937" }],
        title:
          "Xây Dựng Nội Quy Lao Động Và Quy Trình Xử Lý Kỷ Luật Sa Thải Đúng Trình Tự Bộ Luật Lao Động",
        excerpt:
          "Tránh rủi ro bị Tòa án tuyên quyết định sa thải trái pháp luật dẫn đến nghĩa vụ nhận người lao động trở lại làm việc và bồi thường lương.",
        author: "LS. Đặng Minh Châu",
        date: "19 Tháng 10, 2026",
        views: "3.1K lượt xem",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-6",
        categories: [{ label: "BẢN QUYỀN", color: "#a855f7" }],
        title:
          "Hợp Đồng Chuyển Nhượng Quyền Tác Giả Và Hợp Đồng Li-xăng Nhãn Hiệu: Những Điểm Khác Biệt Cốt Lõi",
        excerpt:
          "Các điều khoản bắt buộc về phạm vi lãnh thổ, thời hạn độc quyền, mức phí bản quyền (Royalty) và nghĩa vụ đăng ký tại Cục Sở hữu trí tuệ.",
        author: "LS. Trương Hoàng Nam",
        date: "18 Tháng 10, 2026",
        views: "1.3K lượt xem",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-7",
        categories: [{ label: "THUẾ & HẢI QUAN", color: "#e51c23" }],
        title:
          "Chính Sách Ưu Đãi Thuế Thu Nhập Doanh Nghiệp Đối Với Doanh Nghiệp Khoa Học Công Nghệ Và R&D",
        excerpt:
          "Hướng dẫn chuẩn bị hồ sơ chứng minh tỷ lệ doanh thu từ sản phẩm khoa học công nghệ để hưởng mức thuế suất ưu đãi 10% trong 15 năm.",
        author: "LS. Nguyễn Quốc Khánh",
        date: "17 Tháng 10, 2026",
        views: "2.0K lượt xem",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
      },
      {
        id: "mf-8",
        categories: [{ label: "BẤT ĐỘNG SẢN CÔNG NGHIỆP", color: "#f59e0b" }],
        title:
          "Pháp Lý Thuê Lại Đất Trong Khu Công Nghiệp Và Thế Chấp Tài Sản Gắn Liền Với Đất Tại Ngân Hàng",
        excerpt:
          "So sánh quyền lợi pháp lý giữa hình thức thuê đất trả tiền một lần cho cả thời gian thuê và thuê đất trả tiền hàng năm.",
        author: "LS. Lê Thanh Tùng",
        date: "16 Tháng 10, 2026",
        views: "1.7K lượt xem",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
      },
    ],
    sidebar: {
      highlightBannerTitle: "SỰ KIỆN NỔI BẬT HÔM NAY",
      highlightBannerSubtitle: "Cập nhật văn bản pháp luật mới có hiệu lực",
      featuredCategoriesTitle: "Chuyên Mục Đáng Quan Tâm",
      featuredCategories: [
        {
          number: "1",
          name: "An Sinh & Dân Sự",
          count: "48 Chuyên đề",
          image:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80",
        },
        {
          number: "2",
          name: "Luật Quốc Tế",
          count: "36 Chuyên đề",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
        },
        {
          number: "3",
          name: "Bản Tin Pháp Chế",
          count: "64 Chuyên đề",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80",
        },
        {
          number: "4",
          name: "Sở Hữu Trí Tuệ",
          count: "52 Chuyên đề",
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80",
        },
      ],
      tabs: ["DOANH NGHIỆP", "SỞ HỮU TRÍ TUỆ", "ĐỜI SỐNG"],
      tabArticles: {
        "DOANH NGHIỆP": [
          {
            id: "sb-dn-1",
            categories: [{ label: "M&A", color: "#f59e0b" }],
            title: "Thẩm định pháp lý khoản nợ tiềm tàng trước khi mua lại công ty mục tiêu",
            author: "LS. Trương Hoàng Nam",
            date: "23/10/2026",
            image:
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-dn-2",
            categories: [{ label: "CỔ ĐÔNG", color: "#e51c23" }],
            title: "Thể thức triệu tập cuộc họp Đại hội đồng cổ đông bất thường hợp lệ",
            author: "LS. Nguyễn Quốc Khánh",
            date: "22/10/2026",
            image:
              "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-dn-3",
            categories: [{ label: "FDI", color: "#f59e0b" }],
            title: "Quy định chuyển lợi nhuận ra nước ngoài của nhà đầu tư nước ngoài",
            author: "LS. Lê Thanh Tùng",
            date: "20/10/2026",
            image:
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-dn-4",
            categories: [{ label: "HỢP ĐỒNG", color: "#1f2937" }],
            title: "Soạn thảo điều khoản bất khả kháng và hoàn cảnh thay đổi cơ bản",
            author: "LS. Đặng Minh Châu",
            date: "18/10/2026",
            image:
              "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=240&q=80",
          },
        ],
        "SỞ HỮU TRÍ TUỆ": [
          {
            id: "sb-ip-1",
            categories: [{ label: "NHÃN HIỆU", color: "#a855f7" }],
            title: "Thủ tục phản đối đơn đăng ký nhãn hiệu trùng hoặc tương tự gây nhầm lẫn",
            author: "LS. Đặng Minh Châu",
            date: "23/10/2026",
            image:
              "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-ip-2",
            categories: [{ label: "SÁNG CHẾ", color: "#a855f7" }],
            title: "Đăng ký bằng độc quyền giải pháp hữu ích cho quy trình kỹ thuật mới",
            author: "LS. Trương Hoàng Nam",
            date: "21/10/2026",
            image:
              "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-ip-3",
            categories: [{ label: "BẢN QUYỀN", color: "#e51c23" }],
            title: "Bảo hộ quyền tác giả đối với bộ nhận diện thương hiệu và giao diện ứng dụng",
            author: "LS. Nguyễn Quốc Khánh",
            date: "19/10/2026",
            image:
              "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-ip-4",
            categories: [{ label: "TÊN MIỀN", color: "#1f2937" }],
            title: "Giải quyết tranh chấp thu hồi tên miền quốc gia .vn bị đăng ký chiếm giữ",
            author: "LS. Lê Thanh Tùng",
            date: "17/10/2026",
            image:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=240&q=80",
          },
        ],
        "ĐỜI SỐNG": [
          {
            id: "sb-lf-1",
            categories: [{ label: "LAO ĐỘNG", color: "#f59e0b" }],
            title: "Quy định nghỉ phép năm và cách tính tiền lương những ngày chưa nghỉ hết",
            author: "LS. Đặng Minh Châu",
            date: "23/10/2026",
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-lf-2",
            categories: [{ label: "THUẾ TNCN", color: "#e51c23" }],
            title: "Hướng dẫn đăng ký giảm trừ gia cảnh và quyết toán thuế thu nhập cá nhân",
            author: "LS. Nguyễn Quốc Khánh",
            date: "21/10/2026",
            image:
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-lf-3",
            categories: [{ label: "DÂN SỰ", color: "#1f2937" }],
            title: "Thủ tục ủy quyền quản lý bất động sản cho người thân khi đi công tác nước ngoài",
            author: "LS. Lê Thanh Tùng",
            date: "19/10/2026",
            image:
              "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=240&q=80",
          },
          {
            id: "sb-lf-4",
            categories: [{ label: "DỮ LIỆU", color: "#a855f7" }],
            title: "Quyền yêu cầu xóa dữ liệu cá nhân khỏi hệ thống tiếp thị quảng cáo",
            author: "LS. Trương Hoàng Nam",
            date: "17/10/2026",
            image:
              "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=240&q=80",
          },
        ],
      },
      editorialPoster: {
        badge: "CHUYÊN ĐỀ ĐẶC BIỆT",
        title: "Vai Trò Của Pháp Chế & Báo Chí Pháp Luật Trong Quản Trị Minh Bạch",
        quote:
          "Một hệ thống pháp chế vững mạnh không chỉ bảo vệ doanh nghiệp trước rủi ro kiện tụng mà còn kiến tạo lợi thế cạnh tranh bền vững trên thị trường quốc tế.",
        author: "Hội Đồng Luật Sư THE MONA NEWS",
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=85",
      },
    },
  },
  redPromoBanner: {
    badge: "CHƯƠNG TRÌNH ĐỒNG HÀNH CÙNG DOANH NGHIỆP VIỆT",
    title: "MỪNG ĐẠI LỄ — ƯU ĐÃI 30% GÓI PHÁP CHẾ THƯỜNG XUYÊN & ĐĂNG KÝ NHÃN HIỆU",
    subtitle:
      "Miễn phí tra cứu khả năng bảo hộ 05 nhãn hiệu và kiểm toán rủi ro hợp đồng lao động cho 50 doanh nghiệp đăng ký đầu tiên.",
    ctaText: "ĐĂNG KÝ NHẬN ƯU ĐÃI",
  },
  forYouSection: {
    title: "Tin Dành Cho Bạn",
    viewAllText: "XEM TOÀN BỘ SỰ KIỆN",
    cards: [
      {
        id: "fy-1",
        categories: [{ label: "DOANH NGHIỆP", color: "#f59e0b" }],
        title:
          "Cẩm Nang Pháp Lý Cho Startup Gọi Vốn Vòng Seed Và Series A Từ Quỹ Đầu Tư Mạo Hiểm",
        author: "LS. Trương Hoàng Nam",
        date: "23 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "fy-2",
        categories: [{ label: "SỞ HỮU TRÍ TUỆ", color: "#a855f7" }],
        title:
          "Bảo Hộ Chỉ Dẫn Địa Lý Và Nhãn Hiệu Tập Thể Cho Nông Sản Việt Xuất Khẩu Sang Châu Âu",
        author: "LS. Đặng Minh Châu",
        date: "22 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "fy-3",
        categories: [{ label: "HỢP ĐỒNG", color: "#e51c23" }],
        title:
          "Những Rủi Ro Pháp Lý Khi Sử Dụng Hợp Đồng Mẫu Nước Ngoài Mà Chưa Nội Địa Hóa Theo Luật Việt Nam",
        author: "LS. Nguyễn Quốc Khánh",
        date: "21 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "fy-4",
        categories: [{ label: "TRANH TỤNG", color: "#1f2937" }],
        title:
          "Kinh Nghiệm Tham Gia Phiên Họp Giải Quyết Tranh Chấp Thương Mại Trực Tuyến Tại Trọng Tài VIAC",
        author: "LS. Lê Thanh Tùng",
        date: "20 Tháng 10, 2026",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  footer: {
    columns: [
      {
        id: "fc-1",
        title: "Pháp Chế Doanh Nghiệp",
        links: [
          "Thành lập & Tái cấu trúc",
          "Tư vấn M&A & Thẩm định",
          "Quản trị Cổ đông & HĐQT",
          "Pháp chế Thường xuyên",
        ],
      },
      {
        id: "fc-2",
        title: "Sở Hữu Trí Tuệ",
        links: [
          "Đăng ký Nhãn hiệu Quốc tế",
          "Bằng Độc quyền Sáng chế",
          "Bản quyền Tác giả & Phần mềm",
          "Xử lý Xâm phạm SHTT",
        ],
      },
      {
        id: "fc-3",
        title: "Đầu Tư & Thương Mại",
        links: [
          "Giấy phép Đầu tư FDI",
          "Hợp đồng Thương mại Quốc tế",
          "Nhượng quyền Thương mại",
          "Phòng vệ Thương mại",
        ],
      },
      {
        id: "fc-4",
        title: "Thuế & Lao Động",
        links: [
          "Tư vấn Thuế & Giao dịch liên kết",
          "Nội quy & Thỏa ước Lao động",
          "Giấy phép Lao động Nước ngoài",
          "Bảo mật NDA & Không cạnh tranh",
        ],
      },
      {
        id: "fc-5",
        title: "Giải Quyết Tranh Chấp",
        links: [
          "Trọng tài Thương mại VIAC/SIAC",
          "Tranh tụng Tòa Kinh tế",
          "Hòa giải Thương mại",
          "Thi hành Án & Thu hồi Công nợ",
        ],
      },
      {
        id: "fc-6",
        title: "Về THE MONA NEWS",
        links: [
          "Hội đồng Luật sư Thành viên",
          "Bản tin Pháp chế Hàng tuần",
          "Chính sách Bảo mật Thông tin",
          "Liên hệ Đặt lịch Tư vấn",
        ],
      },
    ],
    copyright:
      "© 2026 THE MONA NEWS - Văn Phòng Luật Sư Doanh Nghiệp & Sở Hữu Trí Tuệ ENews Legal. All rights reserved.",
  },
};
