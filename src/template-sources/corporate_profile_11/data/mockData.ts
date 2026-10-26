import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile11Data extends ClonedTemplateBaseData {
  corePillars: Array<{
    id: string;
    title: string;
    description: string;
    iconType: "consult" | "train" | "research";
  }>;
  featuredNews: {
    title: string;
    date: string;
    excerpt: string;
    image: string;
  };
  highlightNewsList: Array<{
    id: string;
    title: string;
    date: string;
    image: string;
  }>;
  workshopGallery: string[];
  hanoiAddress: string;
  fax: string;
}

export const corporateProfile11DefaultData: CorporateProfile11Data = {
  business: {
    name: "T&C Consulting",
    phone: ["1900 636 648", "(+84-24) 3762 2256"],
    email: ["tcadmin@tc-consulting.com.vn", "info@tc-consulting.com.vn"],
    address: "319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM",
    workingHours: "Thứ 2 - Thứ 6: 08:00 - 17:30",
    rating: 5.0,
    reviewCount: 215,
    aboutTitle: "CÔNG TY TƯ VẤN QUẢN LÝ VÀ CHUYỂN ĐỔI TỔ CHỨC",
    aboutText: [
      "T&C Consulting cung cấp dịch vụ Tư vấn về phát triển và chuyển đổi tổ chức, xây dựng chiến lược, tích hợp hệ thống quản lý với cơ cấu và văn hoá tổ chức, phát triển nguồn nhân lực từ các khu vực kinh tế tư nhân năng động đến các cơ quan quản lý nhà nước."
    ]
  },
  hanoiAddress:
    "Tầng 3, Số 1/51 Phố Đốc Ngữ, Phường Liễu Giai, Quận Ba Đình, Hà Nội, Việt Nam",
  fax: "(+84-24) 3762 2258",
  hero: {
    eyebrow: "TƯ VẤN CHIẾN LƯỢC • ĐÀO TẠO • NGHIÊN CỨU",
    title: "Đồng Hành Chuyển Đổi Tổ Chức & Phát Triển Bền Vững",
    subtitle:
      "Kết nối tri thức quản trị hiện đại với thực tiễn vận hành tại Việt Nam cho các tập đoàn tư nhân, doanh nghiệp nhà nước và tổ chức quốc tế.",
    ctaText: "TÌM HIỂU DỊCH VỤ",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85"
  },
  stats: [
    { id: "st-1", number: "200+", title: "DỰ ÁN" },
    { id: "st-2", number: "150+", title: "ĐỐI TÁC" },
    { id: "st-3", number: "500+", title: "ĐIỀU TRA VIÊN" },
    { id: "st-4", number: "20+", title: "ẤN PHẨM" }
  ],
  corePillars: [
    {
      id: "cp-1",
      iconType: "consult",
      title: "CHÚNG TÔI TƯ VẤN",
      description:
        "T&C Consulting cung cấp dịch vụ Tư vấn về phát triển và chuyển đổi tổ chức, xây dựng chiến lược, tích hợp hệ thống quản lý với cơ cấu và văn hoá tổ chức, phát triển nguồn nhân lực từ các khu vực kinh tế tư nhân năng động đến các cơ quan quản lý nhà nước."
    },
    {
      id: "cp-2",
      iconType: "train",
      title: "CHÚNG TÔI ĐÀO TẠO",
      description:
        "T&C Consulting cung cấp dịch vụ Đào tạo- Huấn luyện chuyên sâu từ các khía cạnh phát triển năng lực cá nhân; các chức năng quản lý nội bộ tổ chức đến các yếu tố tác động từ môi trường bên ngoài."
    },
    {
      id: "cp-3",
      iconType: "research",
      title: "CHÚNG TÔI NGHIÊN CỨU",
      description:
        "T&C Consulting cung cấp dịch vụ Nghiên cứu – Khảo sát – Điều tra xã hội học với quy mô lớn trong các lĩnh vực cho khu vực Công và khu vực Tư."
    }
  ],
  featuredNews: {
    title:
      "Đánh giá cuối kỳ dự án “Thúc đẩy hoà nhập người khuyết tật tại Việt Nam” tại tỉnh Thái Nguyên",
    date: "07/05/2020",
    excerpt:
      "Tháng 11/2017, T&C Consulting đã triển khai Nghiên cứu đánh giá cuối kỳ dự án “Thúc đẩy hòa nhập người khuyết tật (NKT) Việt Nam” tại tỉnh Thái Nguyên. Các chuyên gia tư vấn đã thực hiện khảo sát thực địa và phỏng vấn sâu các bên liên quan...",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
  },
  highlightNewsList: [
    {
      id: "hn-1",
      title:
        "Hội thảo lập kế hoạch và Xây dựng tinh thần đồng đội cho Aus4Skills Việt Nam",
      date: "07/05/2020",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "hn-2",
      title: "Buổi tổng kết và tiệc cuối năm của T&C Consulting",
      date: "07/05/2020",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "hn-3",
      title:
        "Đào tạo BSC- KPI ở Ban Quản lý Dự án các Công trình Điện Miền Trung",
      date: "07/05/2020",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "hn-4",
      title:
        "Chương trình ngoại khóa T&C Consulting vì một năm mới gắn kết và yêu thương",
      date: "07/05/2020",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "hn-5",
      title:
        "Dự án Tư vấn chuyển đổi tổ chức và quản trị chiến lược tổng thể tại Công ty Esoft Việt Nam",
      date: "07/05/2020",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "hn-6",
      title:
        "T&C CONSULTING chuyển sang chế độ làm việc trực tuyến linh hoạt",
      date: "07/05/2020",
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=400&q=80"
    }
  ],
  clients: [
    { id: "pt-1", name: "THYGESEN TEXTILE" },
    { id: "pt-2", name: "JICA" },
    { id: "pt-3", name: "orbis" },
    { id: "pt-4", name: "NSRP" },
    { id: "pt-5", name: "VTV" },
    { id: "pt-6", name: "ADB BANK" },
    { id: "pt-7", name: "PLAN INTERNATIONAL" },
    { id: "pt-8", name: "BỘ Y TẾ" },
    { id: "pt-9", name: "esoft" },
    { id: "pt-10", name: "OXFAM NOVIB" }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Ban Giám đốc Công ty Esoft Việt Nam",
      role: "Đối tác Tư vấn Chiến lược",
      rating: 5,
      content:
        "Báo cáo Đánh giá hiện trạng tổ chức và phương pháp luận triển khai BSC-KPI do T&C Consulting thực hiện đã giúp Esoft Việt Nam nâng cao năng suất lao động và kiện toàn bộ máy quản trị."
    },
    {
      id: "rv-2",
      author:
        "Bà Nguyễn Thị Hồng Nga, Cán bộ chương trình Quản trị, Tổ chức Oxfam Novib",
      role: "Tổ chức Oxfam Novib",
      rating: 5,
      content:
        "“Báo cáo Đánh giá cuối kỳ Dự án M-score do T&C Consulting thực hiện được viết một cách chuyên nghiệp, khách quan, khoa học và cẩn thận. Kết quả đánh giá toàn diện và phù hợp, đáp ứng đầy đủ các vấn đề nghiên cứu yêu cầu. Nhóm đánh giá đã làm rõ và điều chỉnh báo cáo kịp thời và chất lượng sau khi nhận được phản hồi từ các bên liên quan khác nhau. Chất lượng báo cáo đánh giá này rất tốt!”"
    },
    {
      id: "rv-3",
      author: "Ông Ngô Mạnh Hùng, Phó Cục trưởng",
      role: "Cơ quan Quản lý Dự án",
      rating: 5,
      content:
        "“Chúng tôi đã chứng kiến và ấn tượng với năng lực làm việc khoa học, hiệu quả và phong cách chuyên nghiệp của T&C Consulting trong quá trình triển khai hỗ trợ kỹ thuật và khảo sát xã hội học quy mô lớn.”"
    }
  ],
  workshopGallery: [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
  ]
};

export const defaultData = corporateProfile11DefaultData;
export const mockData = corporateProfile11DefaultData;
export default corporateProfile11DefaultData;
