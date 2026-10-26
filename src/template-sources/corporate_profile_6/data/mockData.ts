import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile6Property {
  id: string;
  badge: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  transactionType: string;
  image: string;
  description: string;
}

export interface CorporateProfile6Faq {
  id: string;
  question: string;
  answer: string;
}

export interface CorporateProfile6TemplateData extends ClonedTemplateBaseData {
  featuredProperties: CorporateProfile6Property[];
  faqs: CorporateProfile6Faq[];
  galleryImages: string[];
}

export const corporateProfile6DefaultData: CorporateProfile6TemplateData = {
  business: {
    name: "MonaLand",
    logo: "",
    phone: ["0908 313 728", "028 3823 8899"],
    email: ["info@monaland.vn", "invest@monaland.vn"],
    address: "88 Nguyễn Cơ Thạch, Khu đô thị Sala, TP. Thủ Đức, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.95,
    reviewCount: 360,
    experienceYears: "15+",
    aboutTitle: "ĐÁP ỨNG MỌI NHU CẦU MUA, BÁN, HOẶC THUÊ NHÀ",
    aboutText: [
      "Dù bạn đang tìm mua tổ ấm an cư, chuyển nhượng biệt thự sinh thái hay đầu tư bất động sản dòng tiền, MonaLand sẽ giúp bạn đơn giản hóa toàn bộ quy trình pháp lý và thẩm định giá trị thực qua từng bước một.",
      "Khám phá hệ sinh thái bất động sản cao cấp được tuyển chọn khắt khe của chúng tôi và trải nghiệm dịch vụ tư vấn 1-1 tận tâm để sở hữu ngôi nhà hoàn hảo chỉ trong vài bước đơn giản."
    ],
    highlights: [
      "Tìm mua căn hộ & biệt thự hoàn hảo",
      "Khai thác cho thuê căn hộ dòng tiền dễ dàng",
      "Tư vấn đầu tư bất động sản thương mại"
    ]
  },
  hero: {
    eyebrow: "KIẾN TẠO KHÔNG GIAN SỐNG THƯỢNG LƯU",
    title: "BẤT ĐỘNG SẢN MONALAND NGÔI NHÀ MƠ ƯỚC CỦA BẠN",
    subtitle:
      "Với không gian rộng rãi, cảnh quan tuyệt đẹp và tiện ích đa dạng, các khu đô thị và biệt thự của chúng tôi là điểm đến lý tưởng cho cuộc sống xa hoa.",
    ctaText: "KHÁM PHÁ",
    ctaLink: "#bat-dong-san",
    backgroundImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85"
  },
  services: [
    {
      id: "srv-1",
      title: "Tối ưu chi phí đầu tư",
      description:
        "Phân tích bài toán tài chính, thẩm định pháp lý 100% sổ hồng riêng và tối ưu hóa tỷ suất sinh lời dài hạn cho nhà đầu tư.",
      icon: "cost"
    },
    {
      id: "srv-2",
      title: "Biệt thự & Đô thị sinh thái",
      description:
        "Quy hoạch đồng bộ không gian sống xanh, bến du thuyền, công viên ven sông và hệ thống tiện ích nội khu chuẩn Resort 5 sao.",
      icon: "park"
    },
    {
      id: "srv-3",
      title: "Quản lý & Khai thác tài sản",
      description:
        "Dịch vụ quản lý vận hành bất động sản, tìm kiếm khách thuê chuyên gia nước ngoài và bảo trì tài sản trọn đời.",
      icon: "operation"
    }
  ],
  featuredProperties: [
    {
      id: "prop-1",
      badge: "Phổ biến",
      title: "Biển Xanh Oceanview Condos",
      price: "13,4 tỷ",
      location: "Khu Đô Thị Thủ Thiêm, TP.HCM",
      bedrooms: 4,
      bathrooms: 4,
      area: "140,9 m²",
      transactionType: "Mua / Thuê",
      description:
        "Biệt thự trên không tầm nhìn trực diện sông Sài Gòn, bàn giao nội thất nhập khẩu Ý và thang máy riêng.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "prop-2",
      badge: "Phổ biến",
      title: "Mặt Trời Golden Towers",
      price: "32 tỷ",
      location: "Khu Thảo Điền, TP. Thủ Đức",
      bedrooms: 4,
      bathrooms: 4,
      area: "295 m²",
      transactionType: "Mua / Thuê",
      description:
        "Dinh thự đơn lập có hồ bơi tràn viền riêng biệt, sân vườn nhiệt đới và hầm rượu vang sang trọng.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "prop-3",
      badge: "Phổ biến",
      title: "Thiên Nhiên Valley Villas",
      price: "19,4 tỷ",
      location: "Khu Phú Mỹ Hưng, Quận 7",
      bedrooms: 4,
      bathrooms: 4,
      area: "188 m²",
      transactionType: "Mua / Thuê",
      description:
        "Biệt thự song lập thiết kế hiện đại, liền kề công viên ven sông 2ha và trường quốc tế.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Tôi cần làm gì để bắt đầu tìm mua một căn hộ hoặc biệt thự?",
      answer:
        "Để bắt đầu tìm mua căn hộ hoặc biệt thự, bạn có thể khám phá danh mục dự án tuyển chọn trực tiếp trên trang web của MonaLand hoặc để lại thông tin liên hệ. Đội ngũ giám đốc tư vấn của chúng tôi sẽ gửi bộ hồ sơ pháp lý, bảng giá gốc chủ đầu tư và sắp xếp xe đưa đón tham quan thực tế dự án."
    },
    {
      id: "faq-2",
      question: "Làm sao để đăng ký ký gửi hoặc cho thuê bất động sản qua MonaLand?",
      answer:
        "Quý chủ nhà chỉ cần liên hệ Hotline hoặc gửi yêu cầu qua biểu mẫu tư vấn. Chuyên viên định giá của MonaLand sẽ khảo sát thực tế, chụp ảnh kiến trúc chuyên nghiệp và kết nối ngay với tệp khách thuê chuyên gia cao cấp trong vòng 48 giờ."
    },
    {
      id: "faq-3",
      question: "MonaLand có hỗ trợ thủ tục vay ngân hàng và sang tên sổ hồng không?",
      answer:
        "Có. Chúng tôi hợp tác chiến lược cùng các ngân hàng lớn (Vietcombank, Techcombank, BIDV) hỗ trợ gói vay ưu đãi lên đến 70% giá trị tài sản, đồng thời đại diện khách hàng hoàn tất trọn gói thủ tục công chứng và sang tên sổ hồng."
    }
  ],
  stats: [
    { id: "st-1", number: "200+", title: "Đối tác lớn" },
    { id: "st-2", number: "15+", title: "Thị trường trọng điểm" },
    { id: "st-3", number: "140+", title: "Tin đăng mỗi tháng" },
    { id: "st-4", number: "600+", title: "Lượt tìm kiếm mỗi ngày" }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
  ],
  testimonials: [
    {
      id: "rv-1",
      author: "Sâm Nguyễn",
      role: "Nhà đầu tư Biệt thự Sala",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tôi đã sử dụng dịch vụ mua nhà của MonaLand và rất ấn tượng với sự chuyên nghiệp, tận tâm của đội ngũ chuyên viên. Họ đã tìm hiểu rõ nhu cầu của gia đình tôi và tư vấn căn biệt thự ven sông hoàn hảo ngoài mong đợi.”"
    },
    {
      id: "rv-2",
      author: "Xuân Trung",
      role: "Chủ sở hữu Oceanview Condos",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Hồ sơ pháp lý minh bạch, quy trình đặt cọc và công chứng sang tên diễn ra nhanh gọn chỉ trong 1 tuần. Tôi đã mua được ngôi nhà mơ ước và không thể hài lòng hơn với sự đồng hành của MonaLand.”"
    },
    {
      id: "rv-3",
      author: "An An",
      role: "Khách hàng Golden Towers",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Nhờ đội ngũ quản lý tài sản của MonaLand, căn Penthouse của tôi luôn có khách chuyên gia nước ngoài thuê dài hạn với tỷ suất sinh lời ổn định hơn 7%/năm.”"
    }
  ]
};

export default corporateProfile6DefaultData;
