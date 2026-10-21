import { XayDung2Data } from "@/template-sources/xay_dung_2/types/demo";

export const xayDung2DefaultData: XayDung2Data = {
  business: {
    name: "PRAGUE ARCHITECTS",
    logo: "/templates/xay-dung-2/logo-white.png",
    phone: ["0912 345 678", "024 3988 9999"],
    email: ["lienhe@prague-arch.vn", "duan@prague-arch.vn"],
    skype: ["zalo: 0912 345 678", "support_prague"],
    address: "Tầng 8, Tòa nhà Văn phòng Tổng công ty, Số 68 Đường Cầu Giấy, Cầu Giấy, Hà Nội",
    aboutText: [
      "Prague Architects đảm nhiệm trọn vẹn quy trình xây dựng, từ ý tưởng ban đầu, nghiên cứu concept kiến trúc đến thi công hoàn thiện trên thực địa. Chúng tôi trân trọng các giá trị bền vững và dung hòa tinh tế cùng xu hướng kiến trúc đương đại.",
      "Mỗi khách hàng và chủ đầu tư chính là linh hồn của dự án. Sứ mệnh của chúng tôi là khắc họa trọn vẹn phong cách sống, đẳng cấp và cá tính riêng biệt qua từng đường nét không gian."
    ]
  },
  hero: {
    subtitle: "THIẾT KẾ KIẾN TRÚC & THI CÔNG NỘI THẤT CAO CẤP",
    title: "Kiến Tạo Không Gian Sống Đẳng Cấp",
    ctaText: "XEM DỰ ÁN",
    ctaLink: "#projects",
    backgroundImage: "/templates/xay-dung-2/hero-banner.jpg"
  },
  stats: [
    { id: "1", number: "150+", title: "DỰ ÁN HOÀN THÀNH" },
    { id: "2", number: "98%", title: "KHÁCH HÀNG HÀI LÒNG" },
    { id: "3", number: "15+", title: "NĂM KINH NGHIỆM" },
    { id: "4", number: "28", title: "GIẢI THƯỞNG KIẾN TRÚC" }
  ],
  projects: [
    {
      id: "p1",
      title: "Biệt thự Đảo Seascape",
      category: "Kiến trúc Biệt thự",
      location: "Hạ Long, Quảng Ninh",
      image: "/templates/xay-dung-2/project-1.jpg"
    },
    {
      id: "p2",
      title: "Tòa nhà Văn phòng Eco Plaza",
      category: "Tòa nhà Thương mại",
      location: "Cầu Giấy, Hà Nội",
      image: "/templates/xay-dung-2/project-2.jpg"
    },
    {
      id: "p3",
      title: "Villa Nghỉ dưỡng Lakeview",
      category: "Biệt thự Sinh thái",
      location: "Đà Lạt, Lâm Đồng",
      image: "/templates/xay-dung-2/project-3.jpg"
    },
    {
      id: "p4",
      title: "Tổ hợp Văn hóa Nghệ thuật",
      category: "Công trình Công cộng",
      location: "Sơn Trà, Đà Nẵng",
      image: "/templates/xay-dung-2/project-4.jpg"
    },
    {
      id: "p5",
      title: "Căn hộ Penthouse Sky Villa",
      category: "Thiết kế Nội thất",
      location: "Quận 1, TP. Hồ Chí Minh",
      image: "/templates/xay-dung-2/project-5.jpg"
    },
    {
      id: "p6",
      title: "Khách sạn Boutique Riverside",
      category: "Khách sạn & Resort",
      location: "Hội An, Quảng Nam",
      image: "/templates/xay-dung-2/project-6.jpg"
    },
    {
      id: "p7",
      title: "Bảo tàng Nghệ thuật Đương đại",
      category: "Công trình Văn hóa",
      location: "TP. Huế, Thừa Thiên Huế",
      image: "/templates/xay-dung-2/project-7.jpg"
    },
    {
      id: "p8",
      title: "Nhà hát Biểu diễn & Âm nhạc",
      category: "Công trình Biểu diễn",
      location: "Nha Trang, Khánh Hòa",
      image: "/templates/xay-dung-2/project-8.jpg"
    },
    {
      id: "p9",
      title: "Dinh thự Cổ điển Pháp Riviera",
      category: "Kiến trúc Cổ điển",
      location: "Tây Hồ, Hà Nội",
      image: "/templates/xay-dung-2/project-9.jpg"
    }
  ],
  services: [
    {
      id: "s1",
      title: "Quy hoạch & Kiến trúc",
      icon: "compass",
      description: "Tư vấn lập quy hoạch tổng thể và thiết kế kiến trúc sáng tạo, tối ưu không gian sử dụng, đón gió và ánh sáng tự nhiên.",
      link: "#contact"
    },
    {
      id: "s2",
      title: "Thiết kế Nội thất",
      icon: "lightbulb",
      description: "Kiến tạo phong cách nội thất tinh tế, bespoke theo gu thẩm mỹ của gia chủ với vật liệu tự nhiên cao cấp và công năng hoàn mỹ.",
      link: "#contact"
    },
    {
      id: "s3",
      title: "Xây dựng Trọn gói",
      icon: "layers",
      description: "Tổng thầu thi công xây dựng chìa khóa trao tay, kiểm soát chất lượng kỹ thuật nghiêm ngặt, minh bạch tiến độ và bảo hành dài hạn.",
      link: "#contact"
    }
  ],
  team: [
    {
      id: "t1",
      name: "KTS. Trần Hoàng Anh",
      position: "Kiến trúc sư Trưởng",
      image: "/templates/xay-dung-2/team-1.jpg"
    },
    {
      id: "t2",
      name: "KTS. Lê Minh Đức",
      position: "Chủ trì Thiết kế Kết cấu",
      image: "/templates/xay-dung-2/team-2.jpg"
    },
    {
      id: "t3",
      name: "Vũ Hải Đăng",
      position: "Giám đốc Nghệ thuật & Cảnh quan",
      image: "/templates/xay-dung-2/team-3.jpg"
    },
    {
      id: "t4",
      name: "Nguyễn Tuấn Kiệt",
      position: "Chuyên gia Giám sát Thi công",
      image: "/templates/xay-dung-2/team-4.jpg"
    },
    {
      id: "t5",
      name: "KTS. Phạm Thu Trang",
      position: "Trưởng nhóm Thiết kế Nội thất",
      image: "/templates/xay-dung-2/team-5.jpg"
    },
    {
      id: "t6",
      name: "Đỗ Quốc Bảo",
      position: "Kỹ sư Trưởng Cơ điện & Hạ tầng",
      image: "/templates/xay-dung-2/team-6.jpg"
    }
  ],
  awards: [
    {
      id: "a1",
      year: "2024",
      title: "Giải Nhất Giải thưởng Kiến trúc Quốc gia",
      subtitle: "Hạng mục Công trình Biệt thự Nghỉ dưỡng Hiện đại"
    },
    {
      id: "a2",
      year: "2023",
      title: "Vietnam Property Awards",
      subtitle: "Thiết kế Kiến trúc Tòa nhà Thương mại Xuất sắc"
    },
    {
      id: "a3",
      year: "2022",
      title: "Top 10 Công ty Kiến trúc Hàng đầu BCI Asia",
      subtitle: "BCI Asia Awards Vietnam"
    },
    {
      id: "a4",
      year: "2020",
      title: "Ashui Awards - Công trình của Năm",
      subtitle: "Tổ hợp Không gian Văn hóa & Cảnh quan Xanh"
    },
    {
      id: "a5",
      year: "2018",
      title: "Giải thưởng Thiết kế Nội thất VMark",
      subtitle: "Hạng mục Căn hộ Penthouse Cao cấp"
    },
    {
      id: "a6",
      year: "2016",
      title: "Giải thưởng Kiến trúc Xanh Việt Nam",
      subtitle: "Giải pháp ứng dụng năng lượng tái tạo và thông gió tự nhiên"
    },
    {
      id: "a7",
      year: "2014",
      title: "Vinh danh Doanh nghiệp Xây dựng Uy tín",
      subtitle: "Hiệp hội Doanh nghiệp Xây dựng Việt Nam"
    },
    {
      id: "a8",
      year: "2012",
      title: "Huy chương Vàng Vietbuild",
      subtitle: "Giải pháp Ứng dụng Vật liệu Xây dựng Bền vững"
    }
  ],
  clients: [
    {
      id: "c1",
      name: "Tập đoàn VinGroup",
      logo: "/templates/xay-dung-2/client-hp.png",
      link: "#"
    },
    {
      id: "c2",
      name: "Sun Group",
      logo: "/templates/xay-dung-2/client-dreamworks.png",
      link: "#"
    },
    {
      id: "c3",
      name: "Ecopark Corporation",
      logo: "/templates/xay-dung-2/client-youtube.png",
      link: "#"
    },
    {
      id: "c4",
      name: "Novaland Group",
      logo: "/templates/xay-dung-2/client-burgerking.png",
      link: "#"
    }
  ],
  testimonials: [
    {
      id: "tm1",
      author: "Ông Nguyễn Văn Long - Tổng Giám đốc Techcom Capital",
      content: "Đội ngũ Prague Architects đã hiện thực hóa hoàn hảo kỳ vọng của chúng tôi về một căn biệt thự nghỉ dưỡng vừa riêng tư, vừa hòa mình trọn vẹn vào thiên nhiên. Phong cách làm việc rất chuẩn mực, tỉ mỉ và tận tâm."
    },
    {
      id: "tm2",
      author: "Bà Trần Mai Phương - Giám đốc Chuỗi Khách sạn Heritage",
      content: "Chất lượng hoàn thiện từ bản vẽ phối cảnh 3D đến khi bàn giao thực tế đồng nhất đến từng chi tiết. Khả năng làm chủ ánh sáng và vật liệu tự nhiên của Prague Architects thực sự ở đẳng cấp rất cao."
    },
    {
      id: "tm3",
      author: "Ông Lê Hoàng Nam - Chủ tịch Tập đoàn Địa ốc Nam Long",
      content: "Một đối tác tư vấn thiết kế và thi công đáng tin cậy. Các giải pháp quy hoạch kết cấu không chỉ đảm bảo thẩm mỹ trường tồn mà còn giúp tối ưu ngân sách đầu tư rất hiệu quả."
    },
    {
      id: "tm4",
      author: "Ông Đoàn Quốc Cường - Gia chủ Biệt thự Ciputra Tây Hồ",
      content: "Gia đình tôi vô cùng ưng ý với tổ ấm mới. Từ khâu tư vấn phong thủy, bố trí mặt bằng đến thi công hoàn thiện, đội ngũ kiến trúc sư luôn lắng nghe và đưa ra phương án xử lý xuất sắc."
    }
  ]
};
