import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LogisticsServiceTab {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  bullets: string[];
  mainImage: string;
  subImage1: string;
  subImage2: string;
}

export interface CorporateProfile10Data extends ClonedTemplateBaseData {
  orangeStripFeatures: Array<{
    id: string;
    text: string;
    iconType: "truck" | "ship" | "plane";
  }>;
  aboutSection: {
    yearsNumber: string;
    yearsLabel: string;
    image: string;
    checkpoints: string[];
  };
  serviceTabs: LogisticsServiceTab[];
  ctaBanner: {
    title: string;
    description: string;
    buttonText: string;
    backgroundImage: string;
  };
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
  faqShipImage: string;
  bottomConsultImage: string;
}

export const corporateProfile10DefaultData: CorporateProfile10Data = {
  business: {
    name: "TRANZIX",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "logistics@tranzix.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 380,
    aboutTitle: "GIAO HÀNG NHANH CHÓNG VÀ AN TOÀN",
    aboutText: [
      "Chúng tôi đã tạo ra một trải nghiệm mới trong lĩnh vực logistics, kết hợp giữa dịch vụ vận chuyển chất lượng cao nhất cùng với dịch vụ khách hàng xuất sắc. Khách hàng doanh nghiệp được hỗ trợ khai báo hải quan và theo dõi lộ trình hàng hóa 24/7.",
      "Khi có yêu cầu, đội ngũ chuyên viên điều phối của chúng tôi sẽ cung cấp hướng dẫn chi tiết cho các kiện hàng đặc biệt và chứng nhận bảo hiểm hàng hóa quốc tế."
    ]
  },
  hero: {
    eyebrow: "VẬN TẢI ĐA PHƯƠNG THỨC QUỐC TẾ",
    title: "Giải Pháp Logistics Hiệu Quả Suôn Sẻ",
    subtitle:
      "Kết nối chuỗi cung ứng toàn cầu bằng hệ thống vận tải đường bộ, đường biển, đường hàng không và kho bãi thông minh.",
    ctaText: "LIÊN HỆ",
    ctaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=85"
  },
  orangeStripFeatures: [
    {
      id: "osf-1",
      iconType: "truck",
      text: "Đường bộ vận tải nhanh chóng giúp kết nối hiệu quả các khu vực"
    },
    {
      id: "osf-2",
      iconType: "ship",
      text: "Liên kết đường thủy với các hãng tàu lớn cung cấp dịch vụ vận tải chất lượng"
    },
    {
      id: "osf-3",
      iconType: "plane",
      text: "Chỉ mất 2 ngày vận tải châu Âu nhanh chóng qua đường hàng không"
    }
  ],
  aboutSection: {
    yearsNumber: "20",
    yearsLabel: "Năm kinh nghiệm",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    checkpoints: ["Tập Trung Vào Khách Hàng", "Dịch Vụ Xuất Sắc"]
  },
  serviceTabs: [
    {
      id: "tab-road",
      tabLabel: "VẬN TẢI ĐƯỜNG BỘ",
      title: "VẬN TẢI ĐƯỜNG BỘ",
      description:
        "Hệ thống đội xe đầu kéo container và xe tải lạnh chuyên dụng phủ sóng 63 tỉnh thành và tuyến vận tải xuyên biên giới Việt Nam - Lào - Campuchia - Trung Quốc.",
      bullets: ["Tận Tâm", "Đúng Tiến Độ"],
      mainImage:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
      subImage1:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=80",
      subImage2:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tab-sea",
      tabLabel: "VẬN TẢI ĐƯỜNG BIỂN",
      title: "VẬN TẢI ĐƯỜNG BIỂN",
      description:
        "Cung cấp dịch vụ vận chuyển hàng nguyên container (FCL) và hàng lẻ (LCL) kết nối trực tiếp tới các cảng biển lớn tại Châu Á, Châu Âu và Bắc Mỹ với cước phí tối ưu.",
      bullets: ["An Toàn Cao", "Chi Phí Tối Ưu"],
      mainImage:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
      subImage1:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=80",
      subImage2:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tab-air",
      tabLabel: "VẬN TẢI HÀNG KHÔNG",
      title: "VẬN TẢI HÀNG KHÔNG",
      description:
        "Là lựa chọn tốt nhất cho các loại hàng hóa có giá trị cao, yêu cầu giao nhanh hoặc nhạy cảm về thời gian. Vận tải đường hàng không mang lại sự tiện lợi với tốc độ vận chuyển nhanh chóng nhưng có chi phí cao hơn so với vận tải đường bộ và đường biển.",
      bullets: ["Tận Tâm", "Uy tín"],
      mainImage:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      subImage1:
        "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=500&q=80",
      subImage2:
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tab-rail",
      tabLabel: "VẬN TẢI ĐƯỜNG SẮT",
      title: "VẬN TẢI ĐƯỜNG SẮT",
      description:
        "Giải pháp vận chuyển khối lượng lớn ổn định Bắc - Nam và liên vận quốc tế bằng tàu nhanh chuyên tuyến, đảm bảo an toàn tuyệt đối và không phụ thuộc thời tiết.",
      bullets: ["Ổn Định", "Khối Lượng Lớn"],
      mainImage:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
      subImage1:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
      subImage2:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tab-warehouse",
      tabLabel: "DỊCH VỤ KHO BÃI",
      title: "DỊCH VỤ KHO BÃI",
      description:
        "Hệ thống kho ngoại quan, kho mát và kho thương mại điện tử vận hành bằng phần mềm WMS hiện đại, hỗ trợ đóng gói, dán nhãn và phân phối hoàn tất đơn hàng.",
      bullets: ["Quản Lý WMS", "Bảo Mật 24/7"],
      mainImage:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      subImage1:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
      subImage2:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=500&q=80"
    }
  ],
  ctaBanner: {
    title: "Cần Giúp Đỡ Tìm Giải Pháp Tốt Nhất Để Vận Hành Doanh Nghiệp Của Bạn?",
    description:
      "Chúng tôi giúp khách hàng thành công bằng cách xây dựng các giải pháp logistics toàn diện, từ quản lý chuỗi cung ứng, tối ưu hóa quy trình vận tải đến phát triển các công cụ quản lý hiệu quả.",
    buttonText: "XEM THÊM",
    backgroundImage:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=85"
  },
  clients: [
    { id: "pt-1", name: "SMATRIC" },
    { id: "pt-2", name: "utopix" },
    { id: "pt-3", name: "Palm Marina" },
    { id: "pt-4", name: "minimal" },
    { id: "pt-5", name: "SAUTER" },
    { id: "pt-6", name: "SMATRIC GLOBAL" }
  ],
  faqShipImage:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
  faqs: [
    {
      id: "faq-1",
      question: "Logistics là gì?",
      answer:
        "Logistics là quá trình quản lý, lưu trữ, vận chuyển hàng hóa và nguyên vật liệu từ điểm xuất phát đến điểm đích cuối cùng. Nó bao gồm nhiều hoạt động như vận tải, kho bãi, phân phối, và quản lý chuỗi cung ứng."
    },
    {
      id: "faq-2",
      question: "Sự khác nhau giữa 3PL và 4PL là gì?",
      answer:
        "3PL tập trung vào thực thi các khâu vận tải, kho bãi và thủ tục hải quan; trong khi 4PL đóng vai trò tích hợp và điều phối toàn bộ chuỗi cung ứng chiến lược cho doanh nghiệp."
    },
    {
      id: "faq-3",
      question: "Các phương thức vận tải phổ biến trong logistics là gì?",
      answer:
        "Bao gồm vận tải đường bộ, đường biển, đường hàng không, đường sắt và vận tải đa phương thức kết hợp linh hoạt giúp tối ưu thời gian và chi phí."
    },
    {
      id: "faq-4",
      question: "Làm thế nào để giảm chi phí logistics cho doanh nghiệp?",
      answer:
        "Doanh nghiệp có thể tối ưu hóa qua việc gom hàng (consolidation), hoạch định tuyến đường thông minh, tự động hóa kho bãi WMS và ký hợp đồng vận chuyển dài hạn."
    },
    {
      id: "faq-5",
      question: "Vai trò của công nghệ trong ngành logistics là gì?",
      answer:
        "Hệ thống định vị GPS thời gian thực, IoT giám sát nhiệt độ kho lạnh và phần mềm quản trị ERP/WMS giúp minh bạch hóa 100% hành trình đơn hàng."
    }
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Xuân Trung",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Giải pháp logistics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp."
    },
    {
      id: "rv-2",
      author: "An An",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Giải pháp logistics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Chiến lược tối ưu chuỗi cung ứng thương mại điện tử xuyên biên giới",
      date: "30 Th9",
      excerpt:
        "Giải pháp hoàn tất đơn hàng (Fulfillment) và vận tải hàng không tốc độ cao giúp doanh nghiệp mở rộng thị trường xuất khẩu...",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Giải pháp giảm 25% chi phí cước vận tải biển cho doanh nghiệp xuất nhập khẩu",
      date: "08 Th3",
      excerpt:
        "Lựa chọn lịch tàu phù hợp và kết hợp vận tải đa phương thức giúp doanh nghiệp chủ động nguồn nguyên vật liệu...",
      image:
        "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Tiêu chuẩn đóng gói và bảo quản hàng hóa công nghiệp xuất khẩu đi Châu Âu",
      date: "03 Th2",
      excerpt:
        "Quy trình đóng kiện gỗ hun trùng, chống ẩm và niêm phong container đạt tiêu chuẩn an toàn hàng hải quốc tế...",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
    }
  ],
  bottomConsultImage:
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
};

export const defaultData = corporateProfile10DefaultData;
export const mockData = corporateProfile10DefaultData;
export default corporateProfile10DefaultData;
