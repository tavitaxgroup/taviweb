import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile13Data extends ClonedTemplateBaseData {
  whyChooseUs: {
    title: string;
    description: string;
    buttonText: string;
    backgroundImage: string;
    metrics: Array<{
      id: string;
      number: string;
      unit: string;
      title: string;
      description: string;
    }>;
  };
  careerOpportunities: Array<{
    id: string;
    title: string;
    location: string;
    salary: string;
    image: string;
  }>;
  caseStudy: {
    title: string;
    description: string;
    buttonText: string;
    backgroundImage: string;
  };
  globalOffices: Array<{
    id: string;
    name: string;
    address?: string;
    phone?: string;
    email: string;
  }>;
}

export const corporateProfile13DefaultData: CorporateProfile13Data = {
  business: {
    name: "AsiaWhiteCollar",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@asiawhitecollar.vn", "executive@asiawhitecollar.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "08:00 - 18:00 (Thứ 2 - Thứ 6)",
    rating: 4.9,
    reviewCount: 340,
    aboutTitle: "VÌ SAO CHỌN CHÚNG TÔI?",
    aboutText: [
      "Đội ngũ chuyên gia săn đầu người (Executive Search) của chúng tôi kết hợp sự am hiểu sâu sắc đặc thù từng ngành công nghiệp với bộ công cụ đánh giá năng lực hiện đại và phương pháp tiếp cận cá nhân hóa.",
      "Chúng tôi giới thiệu danh sách ứng viên lãnh đạo tiềm năng chỉ trong vòng 05 ngày làm việc cho mỗi yêu cầu tuyển dụng, đồng thời cam kết bảo hành thay thế nhân sự lên đến 06 tháng — gấp ba lần tiêu chuẩn thông thường trên thị trường."
    ],
  },
  hero: {
    eyebrow: "TẬP ĐOÀN GIẢI PHÁP NHÂN SỰ & CÔNG NGHỆ",
    title: "AsiaWhiteCollar",
    subtitle: "Cánh cửa kết nối doanh nghiệp với những nhân tài kiệt xuất nhất",
    description: "Giải pháp Săn đầu người C-Level • Tư vấn Chuyên gia • Quản trị Nhân sự Quốc tế",
    ctaText: "XEM DỊCH VỤ",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  },
  services: [
    {
      id: "srv-1",
      title: "TUYỂN DỤNG CẤP CAO (EXECUTIVE SEARCH)",
      icon: "mail",
      description:
        "Tìm kiếm và thẩm định đội ngũ lãnh đạo cấp cao (CEO, CFO, CTO, Giám đốc Khối) cho các tập đoàn đa quốc gia và doanh nghiệp đầu ngành tại Việt Nam.",
    },
    {
      id: "srv-2",
      title: "KẾT NỐI CHUYÊN GIA (EXPERT CALL SERVICE)",
      icon: "users",
      description:
        "Kết nối trực tiếp doanh nghiệp và quỹ đầu tư với mạng lưới hơn 5.000 chuyên gia cố vấn độc lập giàu kinh nghiệm thực chiến theo từng lĩnh vực.",
    },
    {
      id: "srv-3",
      title: "DỊCH VỤ NHÂN SỰ QUỐC TẾ (RELOCATION)",
      icon: "gift",
      description:
        "Hỗ trợ trọn gói giấy phép lao động, thị thực đầu tư, định cư và hòa nhập văn hóa cho chuyên gia nước ngoài làm việc tại Việt Nam & Châu Á.",
    },
  ],
  whyChooseUs: {
    title: "VÌ SAO CHỌN CHÚNG TÔI?",
    description:
      "Đội ngũ chuyên gia tư vấn của chúng tôi kết hợp sự am hiểu sâu sắc từng ngành nghề với công cụ đánh giá hiện đại. Chúng tôi giới thiệu ứng viên tiềm năng trong vòng 05 ngày làm việc cho mỗi vị trí và cam kết bảo hành nhân sự lên đến 06 tháng so với mức 02 tháng thông thường trên thị trường.",
    buttonText: "XEM THÊM",
    backgroundImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    metrics: [
      {
        id: "m-1",
        number: "05",
        unit: "năm+",
        title: "Chuyên môn hóa sâu",
        description:
          "Các chuyên gia tư vấn kết hợp hiểu biết chuyên sâu theo ngành với công cụ thẩm định hiện đại và quy trình săn nhân tài riêng biệt.",
      },
      {
        id: "m-2",
        number: "05",
        unit: "ngày",
        title: "Tốc độ & Hiệu quả",
        description:
          "Chúng tôi đệ trình hồ sơ các ứng viên sáng giá nhất chỉ trong vòng 05 ngày làm việc kể từ khi tiếp nhận yêu cầu tuyển dụng.",
      },
      {
        id: "m-3",
        number: "06",
        unit: "Tháng",
        title: "Cam kết chất lượng",
        description:
          "Chính sách bảo hành và thay thế ứng viên miễn phí lên đến 06 tháng, vượt trội hoàn toàn so với tiêu chuẩn 02 tháng của thị trường.",
      },
    ],
  },
  clients: [
    { id: "cl-1", name: "Katalon" },
    { id: "cl-2", name: "ALPHA PANDA" },
    { id: "cl-3", name: "Soken Group" },
    { id: "cl-4", name: "SS Prestige" },
    { id: "cl-5", name: "Student Lifecare" },
    { id: "cl-6", name: "Sun Life" },
    { id: "cl-7", name: "VNP Corp" },
  ],
  careerOpportunities: [
    {
      id: "job-1",
      title: "TỔNG QUAN CÔNG NGHỆ & VỊ TRÍ GIÁM ĐỐC KHỐI SỐ HÓA KING LTD.",
      location: "TP. Hồ Chí Minh • Toàn thời gian",
      salary: "4.500$ - 6.500$ / tháng",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "job-2",
      title: "CHIẾN LƯỢC CHUYỂN ĐỔI CÔNG NGHỆ COBRA TECH: XƯA VÀ NAY",
      location: "Hà Nội & Singapore • Hybrid",
      salary: "3.800$ - 5.200$ / tháng",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "job-3",
      title: "BÀI HỌC QUẢN TRỊ ĐIỀU HÀNH CÙNG CHUYÊN GIA QUỐC TẾ WILLY MAC",
      location: "TP. Hồ Chí Minh • C-Level",
      salary: "Thỏa thuận cạnh tranh",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  caseStudy: {
    title: "DỰ ÁN ĐIỂN HÌNH (CASE STUDY)",
    description:
      "Mang lại kết quả kinh doanh vượt trội thông qua việc kế thừa hàng chục năm kinh nghiệm, mạng lưới quan hệ cấp cao và sự thấu hiểu thị trường sâu sắc từ đội ngũ Cố vấn & Đối tác chiến lược của chúng tôi tại Việt Nam cũng như trên toàn thế giới.",
    buttonText: "ĐỌC CHI TIẾT",
    backgroundImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=80",
  },
  news: [
    {
      id: "nw-1",
      title: "TỔNG QUAN XU HƯỚNG TUYỂN DỤNG LÃNH ĐẠO CÔNG NGHỆ KING LTD.",
      date: "15/05/2026",
      category: "BÁO CÁO NHÂN SỰ",
      excerpt:
        "Phân tích toàn diện nhu cầu nhân sự cấp cao ngành công nghệ thông tin, trí tuệ nhân tạo và bán dẫn tại thị trường Việt Nam năm 2026...",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "ĐỐI THOẠI CHIẾN LƯỢC QUẢN TRỊ NHÂN TÀI COBRA TECH: XƯA VÀ NAY",
      date: "20/05/2026",
      category: "GÓC NHÌN LÃNH ĐẠO",
      excerpt:
        "Cách các tập đoàn đa quốc gia tái cấu trúc bộ máy vận hành và giữ chân nhân sự chủ chốt trước làn sóng chuyển đổi số toàn cầu...",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "BÀI HỌC XÂY DỰNG VĂN HÓA HIỆU SUẤT CAO CHO DOANH NGHIỆP FDI",
      date: "28/05/2026",
      category: "TƯ VẤN QUẢN TRỊ",
      excerpt:
        "Chia sẻ thực tiễn từ các chuyên gia tư vấn nhân sự hàng đầu về việc thiết lập hệ thống KPI và đãi ngộ cạnh tranh cho đội ngũ quản lý...",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  globalOffices: [
    {
      id: "off-1",
      name: "Trụ Sở Chính",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "(+84) 0313728397",
      email: "info@asiawhitecollar.vn",
    },
    {
      id: "off-2",
      name: "Văn Phòng TP.HCM",
      phone: "(+84) 0313728397",
      email: "hcm@asiawhitecollar.vn",
    },
    {
      id: "off-3",
      name: "Văn Phòng Canada",
      phone: "(+1) 0313728397",
      email: "canada@asiawhitecollar.vn",
    },
    {
      id: "off-4",
      name: "Văn Phòng Hàn Quốc",
      email: "korea@asiawhitecollar.vn",
    },
    {
      id: "off-5",
      name: "Văn Phòng Hồng Kông / Trung Quốc",
      email: "hk@asiawhitecollar.vn",
    },
  ],
};

export const mockData = corporateProfile13DefaultData;
export default corporateProfile13DefaultData;
