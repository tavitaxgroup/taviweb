import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NamBinhServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyTasks: string[];
  image: string;
}

export interface AssociateLawyerItem {
  id: string;
  name: string;
  title: string;
  barAssociation: string;
  specialty: string;
  experienceYears: string;
  image: string;
}

export interface CaseActivityItem {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  outcomeBadge: string;
  image: string;
}

export interface LuatSu16Data {
  business: Record<string, any>;
  [key: string]: any;
  header: {
    logoMonogram: string;
    brandName: string;
    brandMotto: string;
    hotlineLabel: string;
    navItems: Array<{
      label: string;
      href: string;
      hasDropdown?: boolean;
    }>;
  };
  hero: {
    title: string;
    motto: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundImage: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  practiceGridSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    services: NamBinhServiceCard[];
  };
  managingPartnerSection: {
    badge: string;
    lawyerName: string;
    position: string;
    barMembership: string;
    quote: string;
    bioParagraphs: string[];
    achievements: string[];
    portraitImage: string;
  };
  teamSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lawyers: AssociateLawyerItem[];
  };
  activitiesSection: {
    eyebrow: string;
    title: string;
    cases: CaseActivityItem[];
  };
  consultationSection: {
    title: string;
    subtitle: string;
    topics: string[];
  };
}

export const luatSu16DefaultData: LuatSu16Data = {
  business: {
    name: "CÔNG TY LUẬT TNHH NAM BÌNH",
    tagline: "Vì Công Lý - Vì Con Người | Đoàn Luật Sư Thành Phố Hà Nội",
    phone: ["1900 6588", "0913 246 890"],
    email: ["luatsuhacongnam@luatnambinh.vn", "lienhe@luatnambinh.vn"],
    address:
      "Tầng 5, Tòa nhà Thái Hà Building, Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội",
    hours: "Thứ 2 - Thứ 7: 08:00 - 17:30 (Tư vấn khẩn cấp Hình sự & Đất đai 24/7)",
  },
  header: {
    logoMonogram: "NB",
    brandName: "NAM BINH LAW FIRM",
    brandMotto: "for justice, for the people",
    hotlineLabel: "Tổng đài Toàn quốc: 1900 6588",
    navItems: [
      { label: "TRANG CHỦ", href: "#hero" },
      { label: "GIỚI THIỆU", href: "#founder" },
      { label: "DỊCH VỤ", href: "#services", hasDropdown: true },
      { label: "ĐỘI NGŨ LUẬT SƯ", href: "#team" },
      { label: "HOẠT ĐỘNG", href: "#activities", hasDropdown: true },
      { label: "TUYỂN DỤNG", href: "#contact" },
      { label: "LIÊN HỆ", href: "#contact" },
    ],
  },
  hero: {
    title: "CÔNG TY LUẬT NAM BÌNH",
    motto: "VÌ CÔNG LÝ - VÌ CON NGƯỜI",
    description:
      "Dưới sự dẫn dắt của Luật sư Hà Công Nam — Đoàn Luật sư TP. Hà Nội, Công ty Luật Nam Bình tự hào là điểm tựa pháp lý vững chắc trong lĩnh vực Doanh nghiệp, Đầu tư M&A, Đất đai, Hôn nhân gia đình và Tranh tụng Dân sự - Hình sự trên toàn quốc.",
    primaryCta: "Đặt Lịch Tư Vấn Luật Sư",
    secondaryCta: "Hồ Sơ Năng Lực Hãng Luật",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85",
    stats: [
      { value: "18+ Năm", label: "Kinh Nghiệm Hành Nghề Luật Sư" },
      { value: "3.500+", label: "Vụ Việc Tranh Tụng & Tư Vấn Thành Công" },
      { value: "600+", label: "Doanh Nghiệp Pháp Chế Thường Xuyên" },
      { value: "100%", label: "Tận Tâm Bảo Vệ Quyền Lợi Hợp Pháp" },
    ],
  },
  practiceGridSection: {
    eyebrow: "LĨNH VỰC HOẠT ĐỘNG TRỌNG TÂM",
    title: "6 Chuyên Ngành Pháp Lý Mũi Nhọn Tại Công Ty Luật Nam Bình",
    subtitle:
      "Giải pháp pháp lý chuẩn xác, thực chiến và bảo mật tuyệt đối cho khách hàng cá nhân lẫn doanh nghiệp.",
    services: [
      {
        id: "nb-srv-1",
        title: "Doanh nghiệp",
        subtitle: "Pháp chế Thường xuyên & Quản trị Nội bộ",
        description:
          "Tư vấn thành lập, tái cấu trúc doanh nghiệp, xây dựng điều lệ công ty, quy chế Hội đồng quản trị và rà soát toàn diện rủi ro hợp đồng thương mại.",
        keyTasks: [
          "Pháp chế doanh nghiệp thường xuyên hàng tháng",
          "Giải quyết tranh chấp nội bộ giữa các cổ đông, thành viên góp vốn",
          "Tư vấn tuân thủ thuế, bảo hiểm và giấy phép con ngành nghề có điều kiện",
        ],
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "nb-srv-2",
        title: "Đầu tư - M&A",
        subtitle: "Mua Bán, Sáp Nhập & Dự Án FDI",
        description:
          "Thẩm định pháp lý chuyên sâu (Legal Due Diligence), cấu trúc giao dịch chuyển nhượng cổ phần, dự án bất động sản và xin cấp Giấy chứng nhận đăng ký đầu tư.",
        keyTasks: [
          "Thẩm định pháp lý toàn diện doanh nghiệp mục tiêu",
          "Soạn thảo & đàm phán Hợp đồng Mua bán Cổ phần (SPA)",
          "Tư vấn thủ tục đầu tư nước ngoài (FDI) và ưu đãi đầu tư",
        ],
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "nb-srv-3",
        title: "Đất đai",
        subtitle: "Tranh Chấp Quyền Sử Dụng Đất & Nhà Ở",
        description:
          "Đại diện giải quyết tranh chấp ranh giới đất, đòi lại đất bị lấn chiếm, khiếu nại quyết định thu hồi đất, bồi thường giải phóng mặt bằng và thủ tục cấp sổ đỏ.",
        keyTasks: [
          "Khởi kiện tranh chấp hợp đồng chuyển nhượng, đặt cọc nhà đất",
          "Khiếu nại hành chính về thu hồi đất và phương án đền bù tái định cư",
          "Phân chia di sản thừa kế là quyền sử dụng đất và tài sản gắn liền với đất",
        ],
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "nb-srv-4",
        title: "Hôn nhân và gia đình",
        subtitle: "Ly Hôn, Quyền Nuôi Con & Chia Tài Sản",
        description:
          "Tư vấn và bảo vệ quyền lợi hợp pháp trong các vụ việc ly hôn đơn phương, thuận tình, giành quyền trực tiếp nuôi con và phân chia tài sản chung phức tạp.",
        keyTasks: [
          "Xác minh và phân chia tài sản chung là bất động sản, cổ phần doanh nghiệp",
          "Bảo vệ quyền trực tiếp nuôi con và nghĩa vụ cấp dưỡng sau ly hôn",
          "Thủ tục ly hôn có yếu tố nước ngoài và nhận nuôi con nuôi",
        ],
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "nb-srv-5",
        title: "Lao động",
        subtitle: "Tranh Chấp Hợp Đồng Lao Động & Kỷ Luật",
        description:
          "Tư vấn xây dựng Nội quy lao động, thỏa ước lao động tập thể, giải quyết tranh chấp đơn phương chấm dứt hợp đồng lao động và bồi thường tai nạn lao động.",
        keyTasks: [
          "Đại diện người lao động hoặc doanh nghiệp tại Hòa giải viên & Tòa Lao động",
          "Kiểm soát quy trình xử lý kỷ luật sa thải đúng Bộ luật Lao động",
          "Soạn thảo Thỏa thuận bảo mật (NDA) và cam kết không cạnh tranh",
        ],
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "nb-srv-6",
        title: "Tố tụng Dân sự - Hình sự",
        subtitle: "Luật Sư Bào Chữa & Bảo Vệ Tại Phiên Tòa",
        description:
          "Tham gia tố tụng ngay từ giai đoạn điều tra, truy tố, xét xử sơ thẩm, phúc thẩm, giám đốc thẩm nhằm minh oan, giảm nhẹ hình phạt và bảo vệ quyền lợi đương sự.",
        keyTasks: [
          "Luật sư bào chữa trong các vụ án Hình sự, Kinh tế, Tham nhũng",
          "Đại diện theo ủy quyền trong vụ án Dân sự, Kinh doanh thương mại, Hành chính",
          "Hỗ trợ pháp lý giai đoạn Thi hành án dân sự và thu hồi công nợ",
        ],
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  managingPartnerSection: {
    badge: "NGƯỜI SÁNG LẬP & ĐIỀU HÀNH",
    lawyerName: "LUẬT SƯ HÀ CÔNG NAM",
    position: "Giám đốc Công ty Luật TNHH Nam Bình",
    barMembership: "Luật sư Thành viên Đoàn Luật sư Thành phố Hà Nội",
    quote:
      "“Mỗi hồ sơ vụ án không chỉ là những trang văn bản pháp quy, mà là sinh mệnh chính trị, tài sản và danh dự của thân chủ. Người luật sư chân chính phải giữ trọn tâm sáng và bản lĩnh thép trước công đường.”",
    bioParagraphs: [
      "Luật sư Hà Công Nam có gần hai thập kỷ trực tiếp tham gia tranh tụng và tư vấn pháp lý chiến lược tại Hà Nội cũng như các tỉnh thành trên cả nước. Ông từng đảm nhiệm vai trò luật sư bào chữa và bảo vệ quyền lợi trong hàng trăm vụ án hình sự, kinh tế, tranh chấp đất đai và thương mại phức tạp.",
      "Với phương châm hoạt động “Vì Công Lý - Vì Con Người”, Luật sư Hà Công Nam đã xây dựng Công ty Luật Nam Bình trở thành địa chỉ tin cậy của cộng đồng doanh nghiệp và người dân khi cần tìm kiếm sự bảo vệ pháp lý công minh, kịp thời.",
    ],
    achievements: [
      "Bằng khen của Liên đoàn Luật sư Việt Nam & Đoàn Luật sư TP. Hà Nội",
      "Chuyên gia tư vấn pháp luật thường xuyên trên các diễn đàn báo chí, truyền hình",
      "Cố vấn pháp chế cấp cao cho hơn 150 tập đoàn bất động sản, xây dựng & thương mại",
    ],
    portraitImage:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=85",
  },
  teamSection: {
    eyebrow: "ĐỘI NGŨ NHÂN SỰ",
    title: "Luật Sư Cộng Sự & Chuyên Gia Pháp Lý Nam Bình",
    subtitle:
      "Sự kết hợp giữa các luật sư tranh tụng dày dạn kinh nghiệm và đội ngũ chuyên viên pháp chế năng động, tận tụy.",
    lawyers: [
      {
        id: "lw-1",
        name: "LS. Nguyễn Trọng Hiếu",
        title: "Phó Giám đốc – Trưởng Ban Tố tụng Hình sự",
        barAssociation: "Đoàn Luật sư TP. Hà Nội",
        specialty: "Bào chữa Hình sự, Án Kinh tế & Chức vụ",
        experienceYears: "15 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "lw-2",
        name: "LS. Lê Thị Mai Hương",
        title: "Trưởng Ban Đất đai & Hôn nhân Gia đình",
        barAssociation: "Đoàn Luật sư TP. Hà Nội",
        specialty: "Tranh chấp Đất đai, Thừa kế & Chia tài sản Ly hôn",
        experienceYears: "13 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "lw-3",
        name: "LS. Phạm Đức Thành",
        title: "Trưởng Ban Pháp chế Doanh nghiệp & Đầu tư M&A",
        barAssociation: "Đoàn Luật sư TP. Hà Nội",
        specialty: "Tư vấn Doanh nghiệp, Hợp đồng Thương mại & Đầu tư FDI",
        experienceYears: "12 năm kinh nghiệm",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  activitiesSection: {
    eyebrow: "HOẠT ĐỘNG & ÁN LỆ THỰC TIỄN",
    title: "Các Vụ Việc Điển Hình & Hoạt Động Trợ Giúp Pháp Lý",
    cases: [
      {
        id: "cs-1",
        category: "TỐ TỤNG ĐẤT ĐAI",
        date: "20/10/2026",
        title:
          "Bảo Vệ Thành Công Quyền Lợi Hộ Gia Đình Trong Vụ Án Hành Chính Khiếu Kiện Quyết Định Thu Hồi 1.200m² Đất Ở",
        summary:
          "Sau hai cấp xét xử, Tòa án đã chấp nhận toàn bộ luận cứ của Luật sư Nam Bình, tuyên hủy quyết định hành chính trái pháp luật và buộc bồi thường theo giá thị trường.",
        outcomeBadge: "Thắng kiện Phúc thẩm",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cs-2",
        category: "TRANH CHẤP M&A - DOANH NGHIỆP",
        date: "15/10/2026",
        title:
          "Đại Diện Cổ Đông Sáng Lập Thu Hồi 68 Tỷ Đồng Vốn Góp Trong Tranh Chấp Hợp Đồng Chuyển Nhượng Cổ Phần",
        summary:
          "Áp dụng kịp thời biện pháp khẩn cấp tạm thời phong tỏa tài sản và đàm phán hòa giải thành công tại Trung tâm Trọng tài.",
        outcomeBadge: "Thu hồi 100% Công nợ",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "cs-3",
        category: "BÀO CHỮA HÌNH SỰ",
        date: "08/10/2026",
        title:
          "Luật Sư Hà Công Nam Trực Tiếp Bào Chữa Đề Nghị Thay Đổi Tội Danh Và Hưởng Án Treo Cho Bị Cáo Trong Vụ Án Kinh Tế",
        summary:
          "Làm rõ các tình tiết giảm nhẹ đặc biệt và vai trò thứ yếu của thân chủ, giúp bị cáo sớm đoàn tụ cùng gia đình.",
        outcomeBadge: "Hưởng Án treo tại Tòa",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  consultationSection: {
    title: "Đặt Lịch Tư Vấn Trực Tiếp Cùng Luật Sư Hà Công Nam",
    subtitle:
      "Quý khách hàng có thể đặt lịch làm việc trực tiếp tại Trụ sở Cầu Giấy - Hà Nội hoặc tư vấn trực tuyến qua tổng đài 1900 6588.",
    topics: [
      "Tố tụng Dân sự - Hình sự (Mời Luật sư bào chữa / bảo vệ)",
      "Tranh chấp Đất đai, Thừa kế & Khiếu nại Thu hồi đất",
      "Tư vấn Pháp chế Doanh nghiệp & Đầu tư - M&A",
      "Tư vấn Hôn nhân Gia đình & Phân chia Tài sản Ly hôn",
      "Tranh chấp Lao động & Hợp đồng Thương mại",
    ],
  },
};
