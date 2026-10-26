import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Luat9ClientCase {
  id: string;
  companyName: string;
  roleTitle: string;
  image: string;
}

export interface Luat9Data extends ClonedTemplateBaseData {
  companyTagline: string;
  aboutLongParagraph: string;
  clientCases: Luat9ClientCase[];
  principlesImage: string;
  operatingPrinciples: string[];
}

export const luatSu9DefaultData: Luat9Data = {
  business: {
    name: "YTTran Law",
    phone: ["076 922 0162", "028 3868 9999"],
    email: ["cskh@yttranlaw.vn", "legal@yttranlaw.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 08:00 - 17:30",
    rating: 4.9,
    reviewCount: 420,
    experienceYears: "16 Năm",
    aboutTitle: "Giới thiệu",
    aboutText: [
      "Việt Nam là thị trường lớn thứ ba ở Đông Nam Á và là một trong những nền kinh tế tăng trưởng nhanh nhất thế giới. Chi phí thấp và các quy định khuyến khích đầu tư nước ngoài chỉ là một số yếu tố chính thu hút các doanh nhân nước ngoài. Nền kinh tế Việt Nam liên quan đến một số lợi ích và rủi ro khác nhau mà các nhà đầu tư quốc tế nên xem xét cẩn thận. Mặc dù tốc độ tăng trưởng nhanh chóng của đất nước có thể thu hút các nhà đầu tư, họ nên xem xét cẩn thận hồ sơ rủi ro cao hơn, kiểm soát của chính phủ và dựa vào các ngành công nghiệp chính để hỗ trợ sự tăng trưởng đó trong dài hạn. Những yếu tố này có thể làm cho đất nước quá rủi ro cho một số danh mục đầu tư."
    ],
    highlights: [
      "Tư vấn pháp lý doanh nghiệp, M&A và tái cấu trúc vận hành",
      "Bảo hộ nhãn hiệu, bản quyền và sở hữu trí tuệ quốc tế",
      "Tư vấn đầu tư cổ phần, chứng khoán và chuẩn mực tài chính IFRS"
    ]
  },
  companyTagline: "Công ty tư vấn doanh nghiệp & sở hữu trí tuệ",
  aboutLongParagraph:
    "Việt Nam là thị trường lớn thứ ba ở Đông Nam Á và là một trong những nền kinh tế tăng trưởng nhanh nhất thế giới. Chi phí thấp và các quy định khuyến khích đầu tư nước ngoài chỉ là một số yếu tố chính thu hút các doanh nhân nước ngoài. Nền kinh tế Việt Nam liên quan đến một số lợi ích và rủi ro khác nhau mà các nhà đầu tư quốc tế nên xem xét cẩn thận. Mặc dù tốc độ tăng trưởng nhanh chóng của đất nước có thể thu hút các nhà đầu tư, họ nên xem xét cẩn thận hồ sơ rủi ro cao hơn, kiểm soát của chính phủ và dựa vào các ngành công nghiệp chính để hỗ trợ sự tăng trưởng đó trong dài hạn. Những yếu tố này có thể làm cho đất nước quá rủi ro cho một số danh mục đầu tư.",
  hero: {
    eyebrow: "CÔNG TY TƯ VẤN DOANH NGHIỆP",
    title: "YTTran Law",
    subtitle:
      "Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa & nhỏ trong các lĩnh vực như: tài chính, chứng khoán, luật, đầu tư, sở hữu trí tuệ...",
    ctaText: "Liên hệ ngay",
    ctaLink: "#lien-he",
    secondaryCtaText: "Xem dịch vụ",
    secondaryCtaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=85"
  },
  clientCases: [
    {
      id: "case-1",
      companyName: "Unilever Plc",
      roleTitle: "Cố vấn tài chính – Chương trình & Dự án",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "case-2",
      companyName: "H-C-S-Group",
      roleTitle: "Kiểm soát tài chính dự án (ERP SAP)",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "case-3",
      companyName: "TH True Milk JSC",
      roleTitle: "Trưởng phòng kế hoạch tài chính",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "case-4",
      companyName: "Vingroup Plc",
      roleTitle: "Giám đốc tài chính (bộ phận bán lẻ)",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    }
  ],
  principlesImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  operatingPrinciples: [
    "Tính khách quan, cá nhân hóa & sự tự tin, tuân thủ các Chuẩn mực Kế toán của Vương quốc Anh, cũng như IFRS",
    "Nhiệt tình, chu đáo, chuyên nghiệp và luôn bảo vệ các quyền hợp pháp của khách hàng",
    "Tối đa hóa giá trị gia tăng cho khách hàng",
    'Đặc biệt đánh giá cao "LÒNG TIN" bởi sự hài lòng của khách hàng.'
  ],
  services: [
    {
      id: "srv-1",
      title: "Chuyển đổi kinh doanh",
      category: "Business Transformation",
      description:
        "Tư vấn tái cấu trúc mô hình doanh nghiệp, mua bán sáp nhập (M&A), chuẩn hóa quy trình quản trị rủi ro và tuân thủ pháp lý.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "Tư vấn Marketing & Thương hiệu",
      category: "IP & Brand Strategy",
      description:
        "Đăng ký bảo hộ nhãn hiệu, kiểu dáng công nghiệp, bản quyền tác giả và xử lý hành vi xâm phạm quyền sở hữu trí tuệ.",
      image:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "Tư vấn đầu tư chứng khoán VN",
      category: "Capital & Securities",
      description:
        "Thẩm định pháp lý dự án đầu tư (Due Diligence), tư vấn phát hành cổ phiếu và tuân thủ quy định Ủy ban Chứng khoán.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
