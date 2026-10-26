import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu5Data extends ClonedTemplateBaseData {
  aboutBlocks: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  aboutImage: string;
  principles: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  ctaBanner: {
    title: string;
    subtitle: string;
    handshakeImage: string;
  };
}

export const luatSu5DefaultData: LuatSu5Data = {
  business: {
    name: "LawKing Legal",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["tuvan@lawking.vn", "info@lawking.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    rating: 4.9,
    reviewCount: 295,
    aboutTitle: "GIỚI THIỆU",
    aboutText: [
      "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Với đội ngũ luật sư giỏi, uy tín, giàu kinh nghiệm, am hiểu kiến thức xã hội, chúng tôi cung cấp dịch vụ tư vấn pháp luật trên phạm vi toàn quốc.",
      "Chúng tôi luôn đặt lợi ích hợp pháp và sự an toàn pháp lý của khách hàng lên hàng đầu trong mọi hồ sơ tư vấn và tranh tụng."
    ],
  },
  hero: {
    eyebrow: "CÔNG TY TƯ VẤN PHÁP LUẬT",
    title: "LawKing Legal",
    subtitle:
      "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
    ctaText: "Tìm hiểu ngay",
    ctaLink: "#linh-vuc",
    backgroundImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85",
  },
  services: [
    {
      id: "ls5-s1",
      title: "NGÂN HÀNG & TÀI CHÍNH",
      icon: "dollar",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn trong tái cấu trúc nợ, hợp đồng tín dụng và bảo lãnh ngân hàng.",
    },
    {
      id: "ls5-s2",
      title: "LUẬT QUỐC TẾ",
      icon: "scale",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn về đầu tư FDI, thương mại xuyên biên giới và trọng tài quốc tế.",
    },
    {
      id: "ls5-s3",
      title: "BẢO HIỂM & DOANH NGHIỆP",
      icon: "file",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn trong giải quyết bồi thường bảo hiểm và pháp chế doanh nghiệp.",
    },
    {
      id: "ls5-s4",
      title: "ĐẤT ĐAI & BẤT ĐỘNG SẢN",
      icon: "scale",
      description:
        "Tư vấn thủ tục pháp lý dự án bất động sản, sang tên sổ hồng, giải quyết tranh chấp quyền sử dụng đất và hợp đồng xây dựng.",
    },
    {
      id: "ls5-s5",
      title: "SỞ HỮU TRÍ TUỆ",
      icon: "file",
      description:
        "Đăng ký bảo hộ nhãn hiệu độc quyền, bản quyền tác giả, kiểu dáng công nghiệp và xử lý hành vi xâm phạm quyền sở hữu trí tuệ.",
    },
    {
      id: "ls5-s6",
      title: "TRANH TỤNG TÒA ÁN",
      icon: "dollar",
      description:
        "Cử luật sư trực tiếp tham gia tố tụng bảo vệ quyền và lợi ích hợp pháp trong các vụ án Dân sự, Kinh doanh thương mại và Lao động.",
    },
  ],
  aboutImage:
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85",
  aboutBlocks: [
    {
      id: "ab-1",
      title: "HÌNH THÀNH",
      icon: "user",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Với đội ngũ luật sư giỏi, uy tín, giàu kinh nghiệm, am hiểu kiến thức xã hội, chúng tôi cung cấp dịch vụ tư vấn pháp luật trên phạm vi toàn quốc.",
    },
    {
      id: "ab-2",
      title: "NHIỆM VỤ",
      icon: "scale",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Với đội ngũ luật sư giỏi, uy tín, giàu kinh nghiệm, am hiểu kiến thức xã hội, chúng tôi cung cấp dịch vụ tư vấn pháp luật trên phạm vi toàn quốc.",
    },
    {
      id: "ab-3",
      title: "TẦM NHÌN",
      icon: "gavel",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Với đội ngũ luật sư giỏi, uy tín, giàu kinh nghiệm, am hiểu kiến thức xã hội, chúng tôi cung cấp dịch vụ tư vấn pháp luật trên phạm vi toàn quốc.",
    },
  ],
  clients: [
    { id: "c-1", name: "CNM MEDIA" },
    { id: "c-2", name: "TimesLaw" },
    { id: "c-3", name: "NPBC NEWS" },
    { id: "c-4", name: "Sunrise" },
  ],
  principles: [
    {
      id: "pr-1",
      title: "TRAO ĐỔI",
      icon: "chat",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
    },
    {
      id: "pr-2",
      title: "TÌM HIỂU",
      icon: "search",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
    },
    {
      id: "pr-3",
      title: "THỰC HIỆN",
      icon: "building",
      description:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn",
    },
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Nga My",
      role: "Quản lý",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      content:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Luật sư tư vấn rất rõ ràng, tận tâm và giải quyết triệt để vướng mắc hợp đồng.",
    },
    {
      id: "rv-2",
      author: "Dương Quá",
      role: "Giám đốc vận tải",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      content:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Quy trình làm việc chuyên nghiệp, bảo mật và tiết kiệm thời gian cho doanh nghiệp.",
    },
    {
      id: "rv-3",
      author: "Thúy Yên",
      role: "Giám đốc",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      content:
        "Hãy để kinh nghiệm của chúng tôi trở thành định hướng cho hành động pháp lý của bạn. Đội ngũ luật sư giàu bản lĩnh đã bảo vệ thành công quyền lợi của công ty chúng tôi.",
    },
  ],
  stats: [
    { id: "st-1", number: "90", title: "HỢP ĐỒNG HOÀN THÀNH" },
    { id: "st-2", number: "120", title: "KHÁCH HÀNG HÀI LÒNG" },
    { id: "st-3", number: "50", title: "GIẢI THƯỞNG & DANH DỰ" },
    { id: "st-4", number: "240", title: "HỢP ĐỒNG PHÁP LÝ" },
  ],
  team: [
    {
      id: "tm-1",
      name: "Quỳnh Đỗ",
      position: "Thư ký pháp lý",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "tm-2",
      name: "Khánh Hùng",
      position: "Luật sư",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "tm-3",
      name: "Nam Vũ",
      position: "Quản trị viên",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "tm-4",
      name: "Sĩ Hùng",
      position: "Thư ký pháp lý",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  ],
  ctaBanner: {
    title: "Bạn có bất cứ vấn đề nào về pháp lý",
    subtitle: "Hãy gọi ngay cho chúng tôi để được giải quyết một cách hiệu quả nhất",
    handshakeImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85",
  },
  news: [
    {
      id: "n-1",
      title: "3 tháng, phân loại hơn 42 ngàn thông tin Lý lịch tư pháp",
      date: "29 Tháng Ba, 2026",
      excerpt:
        "(PLVN) – Chiều 27/3, Thứ trưởng Bộ Tư pháp Nguyễn Khánh Ngọc đã chủ trì cuộc họp đánh giá công tác xây dựng cơ sở dữ liệu lý lịch tư pháp...",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "n-2",
      title: "Vướng mắc trong xác định lãi suất chậm thi hành án",
      date: "29 Tháng Ba, 2026",
      excerpt:
        "(PLVN) – Trong các vụ việc thi hành án (THA) tín dụng ngân hàng, các cơ quan chuyên môn đang hoàn thiện hướng dẫn áp dụng mức lãi suất...",
      image:
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "n-3",
      title: "Quan tâm các giải pháp nâng cao chất lượng thẩm định",
      date: "29 Tháng Ba, 2026",
      excerpt:
        "(PLVN) – Ngày 28/3, Thứ trưởng Phan Chí Hiếu đã chủ trì cuộc họp với các đơn vị về nâng cao chất lượng thẩm định văn bản quy phạm pháp luật...",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = luatSu5DefaultData;
export default luatSu5DefaultData;
