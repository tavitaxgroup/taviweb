import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LuatSu4Data extends ClonedTemplateBaseData {
  aboutQuote: {
    quote: string;
    subtext: string;
    author: string;
    lawyerPortrait: string;
  };
  historyMilestones: Array<{
    id: string;
    year: string;
    title: string;
    description: string;
  }>;
  helpLinks: string[];
  helpBannerImage: string;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  internshipCta: {
    title: string;
    description: string;
    buttonText: string;
  };
  offices: Array<{
    city: string;
    hotline: string;
    address: string;
    email: string;
  }>;
}

export const luatSu4DefaultData: LuatSu4Data = {
  business: {
    name: "Attorneys Law",
    phone: ["1900 638 648", "0903 889 648"],
    email: ["contact@attorneyslaw.vn", "tuvan@attorneyslaw.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    rating: 4.9,
    reviewCount: 410,
    aboutTitle: "CHÚNG TÔI LÀ AI",
    aboutText: [
      "Việt Nam hội nhập sâu rộng vào nền kinh tế thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết sâu sắc và bản lĩnh tranh tụng vững vàng.",
      "Đội ngũ luật sư, chuyên gia tài chính và cố vấn thuế của Attorneys Law luôn đồng hành bảo vệ quyền lợi hợp pháp tối đa cho khách hàng cá nhân và doanh nghiệp."
    ],
  },
  hero: {
    eyebrow: "CÔNG TY LUẬT & ĐẠI DIỆN TRANH TỤNG",
    title: "Chúng tôi cung cấp\ntrợ giúp pháp lý cho",
    subtitle: "Doanh nghiệp • Đầu tư Quốc tế • Dân sự & Hình sự",
    ctaText: "Xem thêm",
    ctaLink: "#linh-vuc",
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  },
  stats: [
    { id: "st-1", number: "1700+", title: "KHÁCH HÀNG" },
    { id: "st-2", number: "980 TỶ", title: "THU HỒI THÀNH CÔNG" },
    { id: "st-3", number: "97%", title: "TỈ LỆ THÀNH CÔNG" },
    { id: "st-4", number: "10600+", title: "HỒ SƠ PHÁP LÝ" },
  ],
  services: [
    {
      id: "sv-1",
      title: "Hôn nhân và gia đình",
      icon: "family",
      description:
        "Liên tục nghiên cứu văn bản pháp luật mới nhất về Hôn nhân, Thừa kế và Phân chia tài sản cùng quy trình bảo mật tuyệt đối thông tin khách hàng.",
    },
    {
      id: "sv-2",
      title: "Doanh nghiệp",
      icon: "briefcase",
      description:
        "Liên tục nghiên cứu văn bản pháp luật mới nhất về Thuế – Luật – Kế toán cùng với việc áp dụng công nghệ thông tin trong cung cấp dịch vụ tư vấn hiệu quả nhất.",
    },
    {
      id: "sv-3",
      title: "Dịch vụ nước ngoài",
      icon: "plane",
      description:
        "Tư vấn cấp giấy chứng nhận đầu tư FDI, mua bán sáp nhập M&A xuyên biên giới, giấy phép lao động và đại diện thương mại quốc tế.",
    },
    {
      id: "sv-4",
      title: "Tố tụng dân sự",
      icon: "users",
      description:
        "Cử luật sư tranh tụng dày dạn kinh nghiệm trực tiếp bảo vệ quyền và lợi ích hợp pháp tại Tòa án nhân dân các cấp và Trọng tài thương mại.",
    },
  ],
  aboutQuote: {
    quote:
      "“Công ty Luật – ATTORNEYS LAW được lập ra để đáp ứng nhu cầu cho các Doanh nghiệp về mặt Pháp lý – Thuế – Tài chính – Kế toán.”",
    subtext:
      "Chúng tôi cam kết mang lại giải pháp pháp lý chuẩn xác, minh bạch và tối ưu hóa rủi ro quản trị cho từng khách hàng.",
    author: "NGUYỄN THÀNH TỰU",
    lawyerPortrait:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  historyMilestones: [
    {
      id: "hm-1",
      year: "1998",
      title: "Thành lập công ty",
      description:
        "Việt Nam hội nhập vào nền kinh tế Thế giới và gia nhập các tổ chức thương mại quốc tế đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết.",
    },
    {
      id: "hm-2",
      year: "2005",
      title: "Mở chi nhánh thứ 2",
      description:
        "Mở rộng văn phòng đại diện tại Hà Nội, chuyên trách mảng tư vấn đầu tư nước ngoài, sở hữu trí tuệ và giải quyết tranh chấp thương mại.",
    },
    {
      id: "hm-3",
      year: "2018",
      title: "Hoàn tất 10 chi nhánh tại VN",
      description:
        "Khẳng định vị thế hãng luật uy tín hàng đầu với mạng lưới 10 văn phòng trên toàn quốc cùng hơn 60 luật sư và chuyên gia pháp chế.",
    },
  ],
  helpLinks: [
    "Tố tụng dân sự",
    "Tài chính doanh nghiệp",
    "Đầu tư vốn nước ngoài",
    "Giấy phép kinh doanh",
    "Tư vấn Thuế",
  ],
  helpBannerImage:
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80",
  faqs: [
    {
      id: "faq-1",
      question: "Câu hỏi 1 : Quy trình tư vấn và đại diện tranh tụng diễn ra như thế nào?",
      answer:
        "Việt Nam hội nhập vào nền kinh tế Thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết. Chúng tôi tiếp nhận hồ sơ, đánh giá chứng cứ độc lập và xây dựng luận cứ bảo vệ khách hàng qua 4 bước tiêu chuẩn.",
    },
    {
      id: "faq-2",
      question: "Câu hỏi 2 : Chi phí dịch vụ luật sư được tính theo hình thức nào?",
      answer:
        "Chi phí được thỏa thuận minh bạch trong Hợp đồng dịch vụ pháp lý dựa trên tính chất phức tạp của vụ việc (theo gói cố định, theo giờ làm việc của luật sư hoặc phí kết quả thu hồi công nợ).",
    },
    {
      id: "faq-3",
      question: "Câu hỏi 3 : Doanh nghiệp có thể thuê phòng pháp chế thường xuyên không?",
      answer:
        "Có. Gói Luật sư riêng cho Doanh nghiệp giúp rà soát toàn bộ hợp đồng thương mại, quy chế lao động và cảnh báo sớm rủi ro thuế hàng tháng với chi phí tiết kiệm hơn 60% so với nhân sự nội bộ.",
    },
  ],
  clients: [
    { id: "cl-1", name: "LEGAL CORP" },
    { id: "cl-2", name: "WOO COMMERCE LAW" },
    { id: "cl-3", name: "ENVATO PARTNERS" },
    { id: "cl-4", name: "GLOBAL TRUST" },
    { id: "cl-5", name: "PACIFIC VENTURES" },
  ],
  news: [
    {
      id: "nw-1",
      title: "Thông qua thông tư quyết định số 45/TT-BTC về chính sách thuế doanh nghiệp mới",
      date: "08 Tháng Ba, 2026",
      category: "TIN TỨC",
      excerpt:
        "Với một đội ngũ Luật sư, kế toán trưởng, chuyên viên thuế giỏi có tư cách đạo đức, có trách nhiệm nghề nghiệp cao phân tích chi tiết các điểm mới...",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Chỉnh sửa điều khoản Bộ luật Thương mại & Đầu tư quốc tế năm 2026",
      date: "15 Tháng Ba, 2026",
      category: "TIN TỨC",
      excerpt:
        "Với một đội ngũ Luật sư, kế toán trưởng, chuyên viên thuế giỏi có tư cách đạo đức, có trách nhiệm tổng hợp những lưu ý pháp lý quan trọng...",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Minh Trang",
      role: "Giám đốc Điều hành",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      content:
        "Việt Nam hội nhập vào nền kinh tế Thế giới đã tạo ra nhu cầu thiết yếu về các chuyên gia tư vấn pháp lý có tầm hiểu biết. Chuyên gia tư vấn pháp lý của công ty làm việc vô cùng tận tâm, chặt chẽ và bảo vệ thành công quyền lợi của doanh nghiệp chúng tôi.",
    },
  ],
  team: [
    {
      id: "law-1",
      name: "NGUYỄN THÀNH TỰU",
      position: "GIÁM ĐỐC ĐIỀU HÀNH",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "law-2",
      name: "PHẠM THỊ THOA",
      position: "LUẬT SƯ CỘNG SỰ",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "law-3",
      name: "NGUYỄN DUY LINH",
      position: "GIÁM ĐỐC TÀI CHÍNH",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "law-4",
      name: "NGUYỄN THÀNH THIỆU",
      position: "LUẬT SƯ THÀNH VIÊN",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
  ],
  internshipCta: {
    title: "Bạn muốn trở thành một thực tập sinh với chúng tôi",
    description:
      "Chúng tôi luôn chào đón các cử nhân Luật tài năng, nhiệt huyết tham gia chương trình đào tạo Luật sư tập sự chuyên nghiệp trong môi trường thực chiến.",
    buttonText: "Ứng tuyển ngay",
  },
  offices: [
    {
      city: "Hồ Chí Minh",
      hotline: "1900.638.648",
      address: "319 C16 Lý Thường Kiệt, phường 15, quận 11, TP. HCM",
      email: "contact@attorneyslaw.vn",
    },
    {
      city: "Hà Nội",
      hotline: "1900.638.648",
      address: "Tầng 12 Tòa nhà Lotte Center, 54 Liễu Giai, Quận Ba Đình, Hà Nội",
      email: "hanoi@attorneyslaw.vn",
    },
  ],
};

export const mockData = luatSu4DefaultData;
export default luatSu4DefaultData;
