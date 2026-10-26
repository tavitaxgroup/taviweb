import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTam13MajorCard {
  id: string;
  title: string;
  degree: string;
  duration: string;
  description: string;
  image: string;
}

export interface TrungTam13FacultyTab {
  id: string;
  tabLabel: string;
  majors: TrungTam13MajorCard[];
}

export interface TrungTam13AdvisoryTile {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  iconType: "major" | "admission" | "scholarship" | "dorm";
}

export interface TrungTam13TemplateData extends ClonedTemplateBaseData {
  facultyTabs: TrungTam13FacultyTab[];
  advisoryTiles: TrungTam13AdvisoryTile[];
}

export const trungTam13DefaultData: TrungTam13TemplateData = {
  business: {
    name: "GreenUni International",
    logo: "",
    phone: ["0907 922 016", "028 3922 0169"],
    email: ["tuyensinh@greenuni.edu.vn", "international@greenuni.edu.vn"],
    address: "319 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6 (08:30 - 18:00) & Thứ 7 (08:30 - 12:00)",
    rating: 4.95,
    reviewCount: 460,
    experienceYears: "20+",
    aboutTitle: "VÀI NÉT VỀ CHÚNG TÔI",
    aboutText: [
      "Thành lập từ năm 2004, Trường Quốc Tế & Đào Tạo Ngoại Ngữ GreenUni trong suốt hơn 20 năm qua đã trở thành điểm đến giáo dục tin cậy và uy tín của hàng chục ngàn sinh viên và phụ huynh. Chúng tôi là cầu nối học thuật giữa sinh viên Việt Nam và hệ thống các trường đại học quốc tế hàng đầu.",
      "Đội ngũ giảng viên và cố vấn học thuật của GreenUni giàu kinh nghiệm thực tiễn, giảng dạy 100% bằng tiếng Anh chuẩn quốc tế. Sinh viên được lựa chọn chương trình Cử nhân tại chỗ hoặc chuyển tiếp 2+2 sang hơn 30 quốc gia phát triển như Anh, Úc, Mỹ, Canada và Thụy Sỹ."
    ]
  },
  hero: {
    eyebrow: "Trường đại học & đào tạo ngoại ngữ quốc tế",
    title: "GREENUNI INTERNATIONAL",
    subtitle: "Thành công của tương lai bắt đầu từ hôm nay",
    ctaText: "TÌM HIỂU NGAY",
    ctaLink: "#chuyen-nganh",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=85"
  },
  facultyTabs: [
    {
      id: "fac-it",
      tabLabel: "CÔNG NGHỆ THÔNG TIN",
      majors: [
        {
          id: "m-se",
          title: "Kỹ thuật phần mềm",
          degree: "Cử nhân Quốc tế (BSc)",
          duration: "3.5 - 4 năm",
          description:
            "Đào tạo kiến trúc phần mềm doanh nghiệp, phát triển hệ thống Full-stack, Cloud Computing và Trí tuệ nhân tạo ứng dụng.",
          image:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-sec",
          title: "An ninh mạng",
          degree: "Cử nhân Quốc tế (BSc)",
          duration: "3.5 - 4 năm",
          description:
            "Chuyên sâu về bảo mật hệ thống mạng, kiểm thử xâm nhập (PenTest), mật mã học và phòng chống tấn công mạng.",
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-web",
          title: "Thiết kế Website",
          degree: "Cử nhân / Cao đẳng Quốc tế",
          duration: "2.5 - 3.5 năm",
          description:
            "Thiết kế giao diện UI/UX hiện đại, lập trình Front-end/Back-end và thương mại điện tử đa nền tảng.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-mob",
          title: "Lập trình di động",
          degree: "Cử nhân Quốc tế (BSc)",
          duration: "3.5 năm",
          description:
            "Phát triển ứng dụng gốc iOS (Swift), Android (Kotlin) và đa nền tảng Flutter/React Native tích hợp AI.",
          image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "fac-biz",
      tabLabel: "KINH DOANH & QUẢN LÝ",
      majors: [
        {
          id: "m-ba",
          title: "Quản trị Kinh doanh Quốc tế",
          degree: "Cử nhân Quốc tế (BBA)",
          duration: "3.5 năm",
          description:
            "Chiến lược điều hành doanh nghiệp đa quốc gia, khởi nghiệp đổi mới sáng tạo và quản trị nhân sự hiện đại.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-fin",
          title: "Tài chính & Ngân hàng Số",
          degree: "Cử nhân Quốc tế (BFin)",
          duration: "3.5 năm",
          description:
            "Phân tích đầu tư tài chính, quản trị rủi ro ngân hàng và công nghệ tài chính FinTech chuẩn CFA.",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-mkt",
          title: "Digital Marketing & Truyền thông",
          degree: "Cử nhân Quốc tế (BA)",
          duration: "3.5 năm",
          description:
            "Xây dựng thương hiệu toàn cầu, quảng cáo đa kênh dữ liệu lớn và quản trị truyền thông số.",
          image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-log",
          title: "Logistics & Chuỗi cung ứng",
          degree: "Cử nhân Quốc tế (BBA)",
          duration: "3.5 năm",
          description:
            "Quản trị vận tải quốc tế, xuất nhập khẩu hải quan và vận hành kho bãi thương mại điện tử xuyên biên giới.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      id: "fac-hosp",
      tabLabel: "DU LỊCH, KHÁCH SẠN, NHÀ HÀNG",
      majors: [
        {
          id: "m-hm",
          title: "Quản trị Khách sạn & Resort 5 Sao",
          degree: "Cử nhân Chuẩn Thụy Sỹ",
          duration: "3 năm (2 kỳ thực tập)",
          description:
            "Chương trình liên kết học viện Thụy Sỹ với 2 học kỳ thực tập hưởng lương tại chuỗi khách sạn Marriott, Accor, IHG.",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-tour",
          title: "Quản trị Dịch vụ Du lịch & Lữ hành",
          degree: "Cử nhân Quốc tế (BA)",
          duration: "3.5 năm",
          description:
            "Thiết kế tour nghỉ dưỡng cao cấp, điều hành lữ hành quốc tế và phát triển du lịch bền vững.",
          image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-cul",
          title: "Quản trị Nhà hàng & Nghệ thuật Ẩm thực",
          degree: "Cử nhân / Văn bằng Cao cấp",
          duration: "2.5 - 3 năm",
          description:
            "Đào tạo kỹ năng quản lý vận hành chuỗi F&B, pha chế rượu vang Sommelier và nghệ thuật ẩm thực Âu - Á.",
          image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "m-evt",
          title: "Quản trị Sự kiện & Giải trí Quốc tế",
          degree: "Cử nhân Quốc tế (BA)",
          duration: "3.5 năm",
          description:
            "Tổ chức hội nghị MICE quốc tế, lễ hội văn hóa, triển lãm thương mại và truyền thông sự kiện.",
          image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  ],
  advisoryTiles: [
    {
      id: "adv-1",
      title: "Tư vấn chọn ngành",
      description:
        "Trắc nghiệm định hướng nghề nghiệp Holland và tư vấn 1-1 chọn chuyên ngành phù hợp năng lực, đam mê.",
      bgColor: "bg-[#008a00]",
      iconType: "major"
    },
    {
      id: "adv-2",
      title: "Thủ tục nhập học",
      description:
        "Hướng dẫn xét tuyển học bạ THPT, kiểm tra tiếng Anh đầu vào và hoàn tất thủ tục nhập học nhanh gọn.",
      bgColor: "bg-[#f0b429]",
      iconType: "admission"
    },
    {
      id: "adv-3",
      title: "Chương trình học bổng",
      description:
        "Quỹ học bổng Tài năng GreenUni trị giá 25%, 50%, 75% đến 100% học phí cho tân sinh viên có IELTS từ 6.0.",
      bgColor: "bg-[#2b7de9]",
      iconType: "scholarship"
    },
    {
      id: "adv-4",
      title: "Hỗ trợ ký túc xá",
      description:
        "Ký túc xá sinh viên chuẩn quốc tế ngay trong khuôn viên trường với thư viện 24/7, khu thể thao và căng-tin.",
      bgColor: "bg-[#e53935]",
      iconType: "dorm"
    }
  ],
  testimonials: [
    {
      id: "st-rv-1",
      author: "Diệp Trọng Tín",
      role: "ngành Quản trị kinh doanh",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Tín chân thành cảm ơn sự hỗ trợ của cô Tuyết – Giảng viên tại trường Đại học Quốc tế GreenUni đã hỗ trợ và giúp đỡ Tín thực hiện được 1 chặng đường học tập và chuyển tiếp du học đầy ý nghĩa. Trong tương lai, Tín sẽ tận dụng những kiến thức học được tại trường kết hợp với kinh nghiệm thực tiễn từ những kỳ thực tập để thành lập công ty riêng. Cảm ơn trường Đại học GreenUni!”"
    },
    {
      id: "st-rv-2",
      author: "Trần Minh Khôi",
      role: "ngành Kỹ thuật phần mềm",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "“Môi trường học tập 100% tiếng Anh cùng các dự án thực tế tại phòng Lab AI đã giúp mình trúng tuyển vị trí Kỹ sư phần mềm tại tập đoàn công nghệ đa quốc gia ngay khi vừa bảo vệ đồ án tốt nghiệp.”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "XIN VISA DU HỌC CHUYỂN TIẾP CANADA MỚI NHẤT 2026",
      date: "15 Tháng Năm, 2026",
      category: "DU HỌC CHUYỂN TIẾP",
      excerpt:
        "Với môi trường ổn định, chất lượng giáo dục tốt và nhiều ưu đãi từ chương trình liên kết 2+2 Canada...",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "HƯỚNG DẪN LÀM THỦ TỤC XÉT DUYỆT VISA SSVF DU HỌC ÚC",
      date: "18 Tháng Năm, 2026",
      category: "CHƯƠNG TRÌNH ÚC",
      excerpt:
        "Cập nhật quy trình xét duyệt Visa du học Úc SSVF dành cho sinh viên chuyển tiếp từ GreenUni...",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "NHỮNG ĐIỀU CẦN BIẾT VỀ CHƯƠNG TRÌNH CỬ NHÂN ANH QUỐC",
      date: "21 Tháng Năm, 2026",
      category: "LIÊN KẾT ANH QUỐC",
      excerpt:
        "Du học Anh mở ra con đường tương lai rộng mở với bằng Cử nhân danh giá chỉ trong 3 năm học...",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "CÁC BƯỚC CHUẨN BỊ ĐỂ SĂN HỌC BỔNG ĐẠI HỌC QUỐC TẾ",
      date: "25 Tháng Năm, 2026",
      category: "CẨM NANG HỌC BỔNG",
      excerpt:
        "Săn được học bổng đầu vào từ 50% - 100% sẽ giúp sinh viên tiết kiệm đáng kể chi phí học tập...",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export default trungTam13DefaultData;
