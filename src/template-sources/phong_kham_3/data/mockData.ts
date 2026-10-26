import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham3ValueProp {
  id: string;
  title: string;
  description: string;
  iconType: "accuracy" | "security" | "cost" | "support";
}

export interface PhongKham3FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PhongKham3ServiceCard {
  id: string;
  title: string;
  description: string;
  badgeColor: string;
  iconType: "dna" | "legal" | "grandpa" | "grandma" | "sibling" | "relative";
  price: string;
}

export interface PhongKham3CorePillar {
  id: string;
  title: string;
  description: string;
  badgeColor: string;
}

export interface PhongKham3Data extends ClonedTemplateBaseData {
  workingSchedule: Array<{ label: string; hours: string }>;
  valueProps: PhongKham3ValueProp[];
  faqs: PhongKham3FaqItem[];
  dnaServices: PhongKham3ServiceCard[];
  labGallery: string[];
  expertPillars: PhongKham3CorePillar[];
  doctorBackdropImage: string;
  bookingDoctorImage: string;
}

export const phongKham3DefaultData: PhongKham3Data = {
  business: {
    name: "MonaHealthCare",
    phone: ["0313728397", "1900 636 648"],
    email: ["info@themona.global", "xetnghiem@monahealthcare.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 1892,
    experienceYears: "20+",
    aboutTitle: "TRUNG TÂM MONAHEALTHCARE",
    aboutText: [
      "Đơn vị xét nghiệm & chẩn đoán y khoa trực thuộc công ty TNHH MonaHealthCare, được thành lập bởi đội ngũ lãnh đạo là những chuyên gia trong ngành Công Nghệ Sinh Học di truyền và có kinh nghiệm lâu năm trong lĩnh vực xét nghiệm gen.",
      "“Tận tâm – Chính xác – Bảo mật” là phương châm hoạt động của chúng tôi. MonaHealthCare là trung tâm xét nghiệm huyết thống được xây dựng với cơ sở vật chất hiện đại, đội ngũ kỹ thuật viên nhiều năm kinh nghiệm cùng với quy trình xét nghiệm tiên tiến."
    ],
    highlights: [
      "Bộ kit PowerPlex Fusion (Promega – Mỹ) chính xác 99,999999998%",
      "Bảo mật tuyệt đối dữ liệu khách hàng bằng mã hóa đa lớp",
      "Thu mẫu tận nhà nhanh chóng trên khắp 63 tỉnh thành",
      "Giá trị pháp lý toàn diện cho thủ tục khai sinh, hành chính, đại sứ quán"
    ]
  },
  hero: {
    eyebrow: "CHÀO MỪNG BẠN ĐẾN VỚI",
    title: "TRUNG TÂM MONAHEALTHCARE",
    subtitle:
      "Đơn vị xét nghiệm trực thuộc công ty TNHH MonaHealthCare, được thành lập bởi đội ngũ lãnh đạo là những chuyên gia trong ngành Công Nghệ Sinh Học di truyền và có kinh nghiệm lâu năm trong lĩnh vực xét nghiệm gen.",
    ctaText: "Về chúng tôi",
    ctaLink: "#gioi-thieu",
    secondaryCtaText: "Đặt lịch thu mẫu",
    secondaryCtaLink: "#dat-hen",
    backgroundImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  workingSchedule: [
    { label: "Thứ Hai – Thứ Sáu:", hours: "08:00 – 20:00" },
    { label: "Thứ Bảy:", hours: "09:00 – 17:00" },
    { label: "Chủ Nhật:", hours: "08:00 – 15:00" }
  ],
  valueProps: [
    {
      id: "vp-1",
      title: "Chính Xác",
      description:
        "Là giá trị đầu tiên chúng tôi luôn mong muốn đem đến với độ chính xác 99,9999%.",
      iconType: "accuracy"
    },
    {
      id: "vp-2",
      title: "Bảo Mật",
      description:
        "Tất cả thông tin của khách hàng đều được mã hóa và bảo mật tuyệt đối.",
      iconType: "security"
    },
    {
      id: "vp-3",
      title: "Chi Phí",
      description:
        "Thời gian biết kết quả nhanh và mức chi phí hợp lý, minh bạch nhất.",
      iconType: "cost"
    },
    {
      id: "vp-4",
      title: "Hỗ Trợ Khách Hàng",
      description: "Thu Mẫu Tại Nhà khắp 26 tỉnh thành và tư vấn 24/7.",
      iconType: "support"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Chi phí xét nghiệm ADN có đắt không?",
      answer:
        "Chi phí xét nghiệm ADN tại MonaHealthCare được niêm yết minh bạch chỉ từ 2.500.000đ/mẫu tùy theo mục đích dân sự tự nguyện hay hành chính pháp lý, cam kết không phát sinh phụ phí."
    },
    {
      id: "faq-2",
      question: "Thời gian trả kết quả xét nghiệm có lâu không?",
      answer:
        "Kết quả tiêu chuẩn được trả sau 24 - 48 giờ làm việc. Ngoài ra, trung tâm hỗ trợ gói xét nghiệm Hỏa Tốc nhận kết quả ngay sau 4 - 6 giờ."
    },
    {
      id: "faq-3",
      question: "Kết quả xét nghiệm có sử dụng được cho mục đích pháp lý hay không?",
      answer:
        "Có. Bản kết quả xét nghiệm ADN Pháp Lý của MonaHealthCare có đầy đủ dấu đỏ pháp nhân, được chấp nhận tại UBND các cấp, Tòa án và Đại sứ quán các nước."
    },
    {
      id: "faq-4",
      question: "Đăng ký xét nghiệm như thế nào?",
      answer:
        "Quý khách có thể đến trực tiếp trung tâm, đặt lịch qua Hotline 0313728397 hoặc điền biểu mẫu Đặt Hẹn Thu Mẫu Tại Nhà để chuyên viên y tế đến tận nơi lấy mẫu."
    }
  ],
  dnaServices: [
    {
      id: "dna-1",
      title: "Xét nghiệm ADN Cha/Mẹ – Con",
      description:
        "So sánh 24 vị trí gen, sử dụng bộ kit PowerPlex Fusion (Promega – Mỹ) kết quả chính xác lên đến 99,999999998%",
      badgeColor: "#00acc1",
      iconType: "dna",
      price: "2.500.000đ"
    },
    {
      id: "dna-2",
      title: "Xét nghiệm ADN Làm Khai Sinh",
      description:
        "Trường hợp làm xét nghiệm ADN Pháp Lý để làm thủ tục cha nhận con, nhập tịch nước ngoài.",
      badgeColor: "#039be5",
      iconType: "legal",
      price: "3.500.000đ"
    },
    {
      id: "dna-3",
      title: "Xét nghiệm ADN Ông – Cháu",
      description:
        "Phân Tích Nhiễm Sắc Thể Y Ông Nội – Cháu Trai xác định huyết thống theo dòng nội chính xác.",
      badgeColor: "#4a148c",
      iconType: "grandpa",
      price: "4.000.000đ"
    },
    {
      id: "dna-4",
      title: "Xét nghiệm ADN Bà – Cháu",
      description:
        "Phân Tích Mối Quan Hệ Bà Nội – Cháu Gái, Chị – Em gái cùng cha dựa trên nhiễm sắc thể X.",
      badgeColor: "#e91e63",
      iconType: "grandma",
      price: "4.200.000đ"
    },
    {
      id: "dna-5",
      title: "Xét nghiệm ADN Anh/ Chị Em",
      description:
        "Phân Tích Mối Quan Hệ Theo Dòng Mẹ Chị – Em( Cần xác định cùng mẹ) Bà Ngoại – Cháu Gái, Chị em gái của mẹ với cháu",
      badgeColor: "#fbc02d",
      iconType: "sibling",
      price: "4.500.000đ"
    },
    {
      id: "dna-6",
      title: "Xét nghiệm ADN Họ Hàng",
      description:
        "Phân tích trình tự gen ty thể (mtDNA) và gen di truyền chuyên sâu giúp xác minh huyết thống họ hàng nhiều thế hệ.",
      badgeColor: "#455a64",
      iconType: "relative",
      price: "5.000.000đ"
    }
  ],
  labGallery: [
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80"
  ],
  stats: [
    { id: "st-1", number: "26 +", title: "Điểm thu mẫu" },
    { id: "st-2", number: "18,920 +", title: "Mẫu xét nghiệm" },
    { id: "st-3", number: "100 %", title: "Kết quả chính xác" },
    { id: "st-4", number: "100 %", title: "Sự hài lòng" }
  ],
  team: [
    {
      id: "doc-1",
      name: "Dr Tân",
      position: "Trưởng khoa Xét Nghiệm",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "doc-2",
      name: "TS.BS Minh Quân",
      position: "Trưởng khoa Xét Nghiệm Di Truyền",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "doc-3",
      name: "ThS.BS Hoàng Khang",
      position: "Chuyên gia Phân tích Gen & ADN",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80"
    }
  ],
  expertPillars: [
    {
      id: "pil-1",
      title: "Sứ Mệnh, Tầm Nhìn",
      description: "Luôn vì khách hàng là phương châm hoạt động của chúng tôi",
      badgeColor: "#00bfa5"
    },
    {
      id: "pil-2",
      title: "Dịch Vụ Chuyên Nghiệp",
      description:
        "Với hơn 26 điểm thu mẫu, khách hàng chỉ cần liên hệ đặt lịch, chuyên viên chúng tôi sẽ đến tận nơi làm thủ tục",
      badgeColor: "#0288d1"
    },
    {
      id: "pil-3",
      title: "Hỗ Trợ Tận Tình – Tư Vấn Chuyên Sâu",
      description:
        "Các chuyên gia hơn 14 năm kinh nghiệm hoạt động trong lĩnh vực xét nghiệm DNA sẽ tận tình giải đáp mọi thắc mắc của khách hàng",
      badgeColor: "#f57c00"
    },
    {
      id: "pil-4",
      title: "Mô Hình Chăm Sóc Sức Khỏe",
      description:
        "Quy trình khép kín tiêu chuẩn ISO 15189 đảm bảo kiểm soát chất lượng đối chiếu kép trên từng mẫu phân tích.",
      badgeColor: "#d81b60"
    }
  ],
  doctorBackdropImage:
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=80",
  bookingDoctorImage:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  news: [
    {
      id: "n-1",
      title: "Thủ Tục Đăng Ký Khai Sinh Cho Con",
      date: "1 Tháng Mười Một, 2025",
      category: "TIN TỨC",
      excerpt:
        "Không đăng ký kết hôn có làm giấy khai sinh cho con được không? Hướng dẫn chi tiết quy trình xét nghiệm ADN pháp lý làm khai sinh...",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "n-2",
      title: "Xét Nghiệm ADN Ở Long An & TP.HCM",
      date: "26 Tháng Mười, 2025",
      category: "TIN TỨC",
      excerpt:
        "Với 20 năm hoạt động trong lĩnh vực công nghệ sinh học. Chúng tôi luôn mang đến những giá trị cao nhất và dịch vụ thu mẫu tận nơi...",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "n-3",
      title: "Xét Nghiệm ADN Có Thể Sai Không?",
      date: "15 Tháng Mười, 2025",
      category: "TIN TỨC",
      excerpt:
        "Với 20 năm hoạt động trong lĩnh vực công nghệ sinh học. Chúng tôi luôn mang đến những giá trị cao nhất cùng độ chính xác 99,9999%...",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
