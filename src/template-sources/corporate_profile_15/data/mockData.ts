import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile15Data extends ClonedTemplateBaseData {
  principles: Array<{
    id: string;
    title: string;
    description: string;
    badgeColor: string;
    icon: string;
  }>;
  expertSection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaText: string;
  };
  whyChooseSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    image: string;
  };
}

export const corporateProfile15DefaultData: CorporateProfile15Data = {
  business: {
    name: "TKW Thương Hiệu",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["contact@tkwthuonghieu.vn", "support@tkwthuonghieu.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    workingHours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    rating: 4.9,
    reviewCount: 450,
    aboutTitle: "Chúng tôi có một đội ngũ chuyên viên nhiều kinh nghiệm",
    aboutText: [
      "Dành cho các doanh nghiệp khởi nghiệp và tập đoàn đang tăng trưởng, đội ngũ chuyên gia công nghệ của chúng tôi xây dựng chiến lược chuyển đổi số toàn diện giúp bạn mở rộng và giữ chân tệp khách hàng trung thành.",
      "Cố vấn kỹ thuật số của chúng tôi đồng hành cùng doanh nghiệp triển khai các chiến dịch truyền thông và tối ưu hóa hiệu suất đầu tư ngân sách marketing."
    ],
  },
  hero: {
    eyebrow: "Thiết Kế Web TKW Thương Hiệu !",
    title: "Công ty thiết kế website TKW Thương Hiệu\nCao cấp – Chuẩn SEO – Responsive",
    subtitle:
      "Điều đặc biệt nhất khi thiết kế website ở TKW Thương Hiệu là bạn không cần phải lo lắng về trình độ kỹ thuật, thẩm mỹ thiết kế hay hậu mãi, bảo trì, bảo hành, bảo mật... Tất cả những gì bạn cần chuẩn bị một ý tưởng rõ ràng để cùng Project Manager của chúng tôi trao đổi tư vấn cho bạn.",
    ctaText: "XEM THÊM",
    ctaLink: "#nguyen-tac",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  },
  principles: [
    {
      id: "pr-1",
      title: "Tư vấn và triển khai theo nhu cầu và yêu cầu",
      description:
        "Phân tích chuyên sâu mô hình kinh doanh, chân dung khách hàng mục tiêu để kiến tạo giải pháp phần mềm và website may đo sát thực tế nhất.",
      badgeColor: "#F5B841",
      icon: "user",
    },
    {
      id: "pr-2",
      title: "Giao diện thiết kế độc quyền",
      description:
        "Thiết kế UI/UX sáng tạo riêng biệt theo bộ nhận diện thương hiệu của doanh nghiệp, tuyệt đối không sử dụng lại các mẫu giao diện đại trà.",
      badgeColor: "#19C37D",
      icon: "crown",
    },
    {
      id: "pr-3",
      title: "Cấu trúc web chuẩn SEO",
      description:
        "Tối ưu hóa toàn diện Schema, tốc độ tải trang Core Web Vitals và cấu trúc HTML5 ngữ nghĩa giúp từ khóa nhanh chóng đạt Top Google.",
      badgeColor: "#24B0F3",
      icon: "award",
    },
    {
      id: "pr-4",
      title: "Hiển thị tốt trên các thiết bị di động",
      description:
        "Công nghệ Responsive thông minh tự động tương thích hoàn hảo trên mọi kích thước màn hình Smartphone, Tablet, Laptop và PC.",
      badgeColor: "#4D8AF0",
      icon: "smartphone",
    },
    {
      id: "pr-5",
      title: "Tối ưu trải nghiệm người dùng, tốc độ website.",
      description:
        "Ứng dụng kiến trúc hạ tầng đám mây hiện đại, nén tài nguyên tự động giúp thời gian phản hồi trang dưới 1 giây và tăng tỷ lệ chuyển đổi.",
      badgeColor: "#F25C66",
      icon: "rocket",
    },
    {
      id: "pr-6",
      title: "Dễ dàng quản lý website",
      description:
        "Hệ thống quản trị CMS trực quan bằng tiếng Việt, phân quyền linh hoạt giúp đội ngũ nhân sự dễ dàng cập nhật nội dung chỉ sau 15 phút hướng dẫn.",
      badgeColor: "#F27D42",
      icon: "settings",
    },
  ],
  expertSection: {
    eyebrow: "Thiết Kế Web TKW Thương Hiệu",
    title: "Chúng tôi có một đội ngũ chuyên viên nhiều kinh nghiệm",
    paragraphs: [
      "Đối với các doanh nghiệp mới thành lập và đang mở rộng quy mô, chuyên gia giải pháp số của chúng tôi giúp hoạch định lộ trình phát triển nền tảng trực tuyến bài bản để thu hút và giữ chân khách hàng bền vững.",
      "Đội ngũ kỹ sư phần mềm và cố vấn SEO luôn sẵn sàng kích hoạt các chiến dịch tăng trưởng lưu lượng truy cập tự nhiên, tối ưu hóa tối đa ngân sách tiếp thị của bạn."
    ],
    ctaText: "XEM THÊM",
  },
  whyChooseSection: {
    eyebrow: "Lý do bạn nên chọn chúng tôi",
    title: "Hãy liên hệ với chúng tôi để biến các ý tưởng của bạn thành hiện thực",
    description:
      "Chúng tôi tự hào đồng hành cùng hơn 1.500 doanh nghiệp trong và ngoài nước xây dựng hệ sinh thái website, cổng thông tin tập đoàn và ứng dụng thương mại điện tử đạt tiêu chuẩn bảo mật quốc tế.",
    ctaText: "XEM THÊM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  services: [
    {
      id: "sv-1",
      title: "SEO Chuyên Nghiệp",
      icon: "search",
      description:
        "Chiến lược SEO tổng thể bền vững đưa hàng trăm từ khóa ngành hàng lên trang nhất Google, gia tăng khách hàng tiềm năng tự nhiên.",
    },
    {
      id: "sv-2",
      title: "Thiết Kế Website",
      icon: "layout",
      description:
        "Thiết kế và lập trình website doanh nghiệp, thương mại điện tử, bất động sản, giáo dục với giao diện độc quyền chuẩn UI/UX.",
    },
    {
      id: "sv-3",
      title: "Tư Vấn Thương Hiệu",
      icon: "presentation",
      description:
        "Định vị hình ảnh thương hiệu số, xây dựng thông điệp truyền thông nhất quán và tối ưu điểm chạm khách hàng trên môi trường Internet.",
    },
    {
      id: "sv-4",
      title: "Xây Dựng Thương Hiệu",
      icon: "rocket",
      description:
        "Phát triển đồng bộ hệ thống nhận diện số, hồ sơ năng lực điện tử (E-Profile) và giải pháp chuyển đổi số toàn diện cho doanh nghiệp.",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "Thiết kế web thương hiệu tại TKW Thương Hiệu",
      date: "29 Tháng Ba, 2026",
      excerpt:
        "Website sinh ra vô kể nhưng để đọng lại ấn tượng trong lòng người xem thì cần sự khác biệt đặc biệt, hơn thế nữa là...",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Thiết kế website học trực tuyến chuẩn SEO chất lượng cao",
      date: "29 Tháng Ba, 2026",
      excerpt:
        "Học trực tuyến đã trở thành một xu hướng phổ biến trên khắp thế giới hiện nay, và tất nhiên các cơ sở giáo dục tại...",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Sai lầm cần tránh và lợi ích khi thiết kế website du lịch",
      date: "29 Tháng Ba, 2026",
      excerpt:
        "Kể từ khi internet ra đời đến sự xuất hiện của điện thoại thông minh, rồi đến cách mạng công nghiệp 4.0, thế giới...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = corporateProfile15DefaultData;
export default corporateProfile15DefaultData;
