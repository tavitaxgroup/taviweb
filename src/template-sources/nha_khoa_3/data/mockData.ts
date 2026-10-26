import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa3Milestone {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metricNumber: string;
  metricLabel: string;
  image: string;
}

export interface NhaKhoa3ProgramTab {
  id: string;
  number: string;
  badgeText: string;
  heading: string;
  description: string;
  subHeading: string;
  cards: Array<{
    id: string;
    title: string;
    description: string;
    highlight?: boolean;
  }>;
}

export interface NhaKhoa3Partner {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
  style: "red-bold" | "stripe-dark" | "circle-red" | "blue-gold" | "orange-box" | "navy-wave" | "sky-clean" | "seal-red" | "serif-academic" | "ribbon-blue" | "kr-tech" | "crimson-serif";
}

export interface NhaKhoa3Data extends ClonedTemplateBaseData {
  slogan: string;
  fax: string;
  milestones: NhaKhoa3Milestone[];
  programs: NhaKhoa3ProgramTab[];
  partners: NhaKhoa3Partner[];
}

export const nhaKhoa3DefaultData: NhaKhoa3Data = {
  business: {
    name: "HỆ THỐNG NHA KHOA QUỐC TẾ DENTARIO",
    phone: ["(024) 3519-0591", "1900 6933"],
    email: ["info@dentario.edu.vn", "cskh@nhakhoadentario.vn"],
    address:
      "Tầng 4, Tòa nhà 25T2, Đường Nguyễn Thị Thập, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 6850,
    experienceYears: "12 NĂM",
    aboutTitle: "HÀNH TRÌNH 12 NĂM",
    aboutText: [
      "Đi qua chặng đường 12 năm, Hệ thống Nha Khoa Quốc Tế Dentario đã để lại nhiều dấu ấn trong sự nghiệp chăm sóc và kiến tạo nụ cười, góp phần thay đổi chuẩn mực nha khoa kỹ thuật số tại Việt Nam...",
      "Với triết lý 'Chăm sóc chủ động - Cười rạng rỡ tích cực', Dentario quy tụ đội ngũ Tiến sĩ, Thạc sĩ Răng Hàm Mặt tu nghiệp tại châu Âu cùng hệ thống trang thiết bị chẩn đoán 3D hiện đại bậc nhất."
    ],
    highlights: [
      "Phác đồ điều trị 1 kèm 1 cá nhân hóa bằng AI 3D",
      "100% vật liệu trụ Implant & sứ thẩm mỹ chính hãng Thụy Sĩ, Đức",
      "Đánh giá tiến độ chỉnh nha & sức khỏe nụ cười hàng tháng",
      "Hệ thống 12 đối tác công nghệ nha khoa toàn cầu"
    ]
  },
  slogan: "Chăm sóc chủ động - Nụ cười tích cực",
  fax: "+84 (24) 3519-0587",
  hero: {
    eyebrow: "ACHIEVEMENTS",
    title: "HÀNH TRÌNH 12 NĂM",
    subtitle:
      "Đi qua chặng đường 12 năm, Nha Khoa Quốc Tế Dentario đã để lại nhiều dấu ấn trong sự nghiệp chăm sóc và phục hình răng hàm mặt, góp phần nâng tầm chuẩn mực nha khoa Việt Nam...",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#chuong-trinh",
    secondaryCtaText: "Đặt lịch khám 1:1",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  milestones: [
    {
      id: "ms-01",
      number: "01.",
      title: "KHỞI NGUỒN SỨ MỆNH NỤ CƯỜI",
      subtitle: "Đặt nền móng nha khoa tiêu chuẩn châu Âu",
      description:
        "Thành lập trung tâm nha khoa kỹ thuật số đầu tiên với phòng vô trùng áp lực dương và đội ngũ bác sĩ chuyên khoa Răng Hàm Mặt giàu tâm huyết.",
      metricNumber: "50.000+",
      metricLabel: "Khách hàng tin chọn",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "ms-02",
      number: "02.",
      title: "TIÊN PHONG CÔNG NGHỆ 3D",
      subtitle: "Chuyển đổi số toàn diện quy trình chẩn đoán",
      description:
        "Ứng dụng đồng bộ hệ thống chụp CT ConeBeam 3D và máy quét dấu răng quang học iTero 5D giúp khách hàng xem trước kết quả điều trị chỉ sau 60 giây.",
      metricNumber: "99,8%",
      metricLabel: "Tỷ lệ cấy ghép thành công",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "ms-03",
      number: "03.",
      title: "HÀNH TRÌNH 12 NĂM",
      subtitle: "Dấu ấn vàng son trong ngành Nha khoa Việt Nam",
      description:
        "Đi qua chặng đường 12 năm, Nha Khoa Quốc Tế Dentario đã để lại nhiều dấu ấn trong sự nghiệp chăm sóc và thẩm mỹ nụ cười, góp phần thay đổi diện mạo nha khoa hiện đại tại Việt Nam...",
      metricNumber: "12 NĂM",
      metricLabel: "Kiến tạo nụ cười Việt",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "ms-04",
      number: "04.",
      title: "HỘI ĐỒNG CHUYÊN GIA QUỐC TẾ",
      subtitle: "Hợp tác chuyển giao kỹ thuật Thụy Sĩ & Đức",
      description:
        "Ký kết hợp tác chiến lược độc quyền với các tập đoàn nha khoa hàng đầu thế giới Straumann, Invisalign và Ivoclar Vivadent.",
      metricNumber: "45+",
      metricLabel: "Thạc sĩ & Bác sĩ chuyên khoa",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "ms-05",
      number: "05.",
      title: "HỆ SINH THÁI DENTARIO CARE",
      subtitle: "Bảo hành điện tử trọn đời trên toàn hệ thống",
      description:
        "Phát triển cổng hồ sơ nha khoa số hóa giúp theo dõi định kỳ sức khỏe răng miệng trọn đời cho cả gia đình.",
      metricNumber: "100%",
      metricLabel: "Bảo hành chính hãng",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  programs: [
    {
      id: "prog-01",
      number: "01.",
      badgeText: "Implant",
      heading: "DENTARIO IMPLANT - TRỒNG RĂNG KHÔNG ĐAU 3D",
      description:
        "Giải pháp phục hồi răng mất toàn diện với trụ Titanium nguyên chất nhập khẩu từ Thụy Sĩ. Máng hướng dẫn phẫu thuật 3D giúp đặt trụ chính xác tuyệt đối chỉ trong 15 phút/trụ.",
      subHeading: "Các đặc điểm nổi trội của Dentario Implant:",
      cards: [
        {
          id: "p1-c1",
          title: "PHẪU THUẬT ĐỊNH VỊ MÁNG 3D",
          description: "Với 100% Bác sĩ Trưởng khoa Implant trực tiếp thực hiện."
        },
        {
          id: "p1-c2",
          title: "PHÁC ĐỒ CÁ NHÂN HÓA",
          description:
            "Được tùy chỉnh theo mật độ xương hàm và tình trạng sức khỏe của từng khách hàng.",
          highlight: true
        },
        {
          id: "p1-c3",
          title: "TÍCH HỢP XƯƠNG NHANH CHÓNG",
          description: "Với bộ tiêu chuẩn vô trùng khép kín và bảo hành trọn đời."
        }
      ]
    },
    {
      id: "prog-02",
      number: "02.",
      badgeText: "Veneer",
      heading: "DENTARIO COUTURE - THẨM MỸ SỨ VENEER SIÊU MỎNG",
      description:
        "Công nghệ thiết kế nụ cười Digital Smile Design (DSD) bảo tồn tối đa răng thật, không ê buốt, mang lại sắc trắng trong tự nhiên chuẩn tỷ lệ vàng.",
      subHeading: "Các đặc điểm nổi trội của Dentario Couture:",
      cards: [
        {
          id: "p2-c1",
          title: "BẢO TỒN RĂNG GỐC TỐI ĐA",
          description: "Mặt dán sứ siêu mỏng 0.2mm chế tác bằng công nghệ CAD/CAM 3D."
        },
        {
          id: "p2-c2",
          title: "THIẾT KẾ NỤ CƯỜI DSD",
          description:
            "Được tùy chỉnh và cá nhân hóa theo đường cười và thần thái riêng của bạn.",
          highlight: true
        },
        {
          id: "p2-c3",
          title: "ĐỘ BỀN GẤP 5 LẦN RĂNG THẬT",
          description: "Với phôi sứ Emax Press chính hãng từ Đức & Thụy Sĩ."
        }
      ]
    },
    {
      id: "prog-03",
      number: "03.",
      badgeText: "Smile up",
      heading: "SMILEUP.VN - CHỈNH NHA CÁ NHÂN HÓA 1 KÈM 1",
      description:
        "Smileup.vn là mô hình chỉnh nha & chăm sóc răng miệng 1 kèm 1 trực tiếp với 100% chuyên gia chỉnh nha quốc tế. Khác với nhiều đơn vị nha khoa hiện nay trên thị trường, phác đồ tại Smileup.vn được cá nhân hóa theo cấu trúc xương hàm và mục tiêu thẩm mỹ của từng khách hàng.",
      subHeading: "Các đặc điểm nổi trội của Smileup.vn:",
      cards: [
        {
          id: "p3-c1",
          title: "CHỈNH NHA CHUYÊN SÂU 1 KÈM 1",
          description: "Với 100% Bác sĩ Chuyên khoa Chỉnh nha chứng chỉ quốc tế."
        },
        {
          id: "p3-c2",
          title: "PHÁC ĐỒ ĐIỀU TRỊ",
          description:
            "Được tùy chỉnh và cá nhân hóa theo trình độ khớp cắn và mục tiêu của khách hàng.",
          highlight: true
        },
        {
          id: "p3-c3",
          title: "ĐÁNH GIÁ MỨC ĐỘ TIẾN BỘ HÀNG THÁNG",
          description: "Với bộ tiêu chí dịch chuyển răng 3D cụ thể, toàn diện."
        }
      ]
    },
    {
      id: "prog-04",
      number: "04.",
      badgeText: "Kids Care",
      heading: "DENTARIO KIDS - NHA KHOA TRẺ EM KHÔNG ĐAU",
      description:
        "Chương trình tầm soát thay răng và tiền chỉnh nha sớm cho trẻ từ 6 - 12 tuổi, giúp định hướng xương hàm phát triển hài hòa và phòng ngừa lệch lạc răng.",
      subHeading: "Các đặc điểm nổi trội của Dentario Kids:",
      cards: [
        {
          id: "p4-c1",
          title: "BÁC SĨ TÂM LÝ TRẺ EM",
          description: "Giúp bé hợp tác vui vẻ, nhẹ nhàng không lo sợ khi đến nha khoa."
        },
        {
          id: "p4-c2",
          title: "LỘ TRÌNH THEO DÕI THAY RĂNG",
          description:
            "Được tùy chỉnh và cá nhân hóa theo từng giai đoạn phát triển xương hàm của trẻ.",
          highlight: true
        },
        {
          id: "p4-c3",
          title: "TẦM SOÁT ĐỊNH KỲ HÀNG THÁNG",
          description: "Với bộ tiêu chí dự phòng sâu răng và lệch khớp cắn toàn diện."
        }
      ]
    }
  ],
  partners: [
    {
      id: "pt-1",
      name: "GGE",
      tagline: "DENTAL BIOTECH JAPAN",
      accentColor: "#d9232e",
      style: "red-bold"
    },
    {
      id: "pt-2",
      name: "EF",
      tagline: "EUROPEAN DENTAL FEDERATION",
      accentColor: "#1f2937",
      style: "stripe-dark"
    },
    {
      id: "pt-3",
      name: "Lotte Med",
      tagline: "HEALTHCARE GROUP",
      accentColor: "#e11d48",
      style: "circle-red"
    },
    {
      id: "pt-4",
      name: "Viettel CARE",
      tagline: "Hồ sơ sức khỏe điện tử .vn",
      accentColor: "#0284c7",
      style: "blue-gold"
    },
    {
      id: "pt-5",
      name: "justKids",
      tagline: "Nha khoa Trẻ em Quốc tế",
      accentColor: "#f97316",
      style: "orange-box"
    },
    {
      id: "pt-6",
      name: "megastudy",
      tagline: "DENTAL ACADEMY",
      accentColor: "#0066b3",
      style: "navy-wave"
    },
    {
      id: "pt-7",
      name: "SACE",
      tagline: "Dental College Vietnam",
      accentColor: "#0284c7",
      style: "sky-clean"
    },
    {
      id: "pt-8",
      name: "HỘI RHM VIỆT NAM",
      tagline: "CHỨNG NHẬN Y KHOA",
      accentColor: "#dc2626",
      style: "seal-red"
    },
    {
      id: "pt-9",
      name: "Academic Consulting & Dental",
      tagline: "SWISS IMPLANT BOARD",
      accentColor: "#0369a1",
      style: "serif-academic"
    },
    {
      id: "pt-10",
      name: "TỦ SÁCH Y KHOA",
      tagline: "LAM SƠN MEDICAL",
      accentColor: "#b91c1c",
      style: "ribbon-blue"
    },
    {
      id: "pt-11",
      name: "NR (주)노리소프트",
      tagline: "3D CAD/CAM KOREA",
      accentColor: "#1e3a8a",
      style: "kr-tech"
    },
    {
      id: "pt-12",
      name: "ACSL",
      tagline: "ADVANCED CLINICAL LAB",
      accentColor: "#dc2626",
      style: "crimson-serif"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: 'Những "trái ngọt" từ chương trình Chào Đón Nụ Cười Mới 2026',
      date: "20/10/2025",
      category: "Sự kiện Nha khoa",
      excerpt:
        "Có được lối sống chủ động, thói quen chăm sóc răng miệng chuẩn khoa học và nụ cười rạng rỡ tự tin cùng đội ngũ bác sĩ...",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "nw-2",
      title: 'Những "trái ngọt" từ hành trình 12 năm Kiến Tạo Nụ Cười Việt',
      date: "15/10/2025",
      category: "Dấu ấn 12 năm",
      excerpt:
        "Có được lối sống chủ động, khả năng thẩm mỹ nụ cười cá nhân hóa và sự tận tâm đồng hành trọn đời cùng khách hàng...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "nw-3",
      title: "Hội thảo Chuyển giao Công nghệ Chỉnh nha & Implant Kỹ thuật số",
      date: "08/10/2025",
      category: "Hợp tác Quốc tế",
      excerpt:
        "Cập nhật phác đồ cấy ghép Implant định vị 3D và chỉnh nha khay trong suốt thế hệ mới nhất cùng chuyên gia châu Âu...",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80"
    }
  ]
};
