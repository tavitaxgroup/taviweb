import { XayDung3Data } from "../../types/demo";

export const xayDung3DefaultData: XayDung3Data = {
  business: {
    name: "BIM.",
    tagline: "Khẳng định đẳng cấp sống thượng lưu với giải pháp kiến trúc và hoàn thiện nội thất độc bản, tiên phong ứng dụng công nghệ BIM.",
    logo: "/templates/xay-dung-3/logo.png",
    logoWhite: "/templates/xay-dung-3/logo-light.png",
    phone: "0988 123 456",
    email: "contact@bimcreative.vn",
    address: "Số 18 Hoàng Hoa Thám, Quận Ba Đình, Hà Nội",
    workHours: "Thứ 2 - Thứ 7: 08:00 - 18:30"
  },

  hero: {
    titlePrefix: "Kiến Trúc",
    titleOutline: "Hiện Đại",
    titleHighlight: "Đột Phá",
    description: "Chúng tôi phát triển phương pháp tiếp cận toàn diện, kết hợp hài hòa giữa kiến trúc biểu tượng, quy hoạch đô thị và cảnh quan sinh thái.",
    ctaText: "KHÁM PHÁ DỰ ÁN",
    ctaLink: "#portfolio",
    secondaryCtaText: "VỀ CHÚNG TÔI",
    secondaryCtaLink: "#about",
    backgroundImage: "/templates/xay-dung-3/2.jpg",
    sliderImages: [
      "/templates/xay-dung-3/2.jpg",
      "/templates/xay-dung-3/04.jpg"
    ]
  },

  about: {
    badge: "VỀ CHÚNG TÔI",
    experienceYears: "21",
    experienceLabel: "Năm Kinh Nghiệm",
    title: "Kiến Tạo Không Gian",
    highlightTitle: "Kiến Trúc Hoàn Mỹ Cho Bạn.",
    paragraphs: [
      "Với hơn 2 thập kỷ định hình các công trình biểu tượng, chúng tôi không chỉ xây dựng những ngôi nhà mà còn kiến tạo những không gian sống giàu cảm xúc và bền vững cùng thời gian.",
      "Mỗi giải pháp thiết kế từ BIM Creative đều là sự giao thoa tinh tế giữa công nghệ mô hình hóa tiên tiến và ngôn ngữ nghệ thuật đương đại, đảm bảo tính thẩm mỹ vượt bậc và công năng tối ưu."
    ],
    specialties: [
      "KIẾN TRÚC",
      "THIẾT KẾ NỘI THẤT",
      "SẢN XUẤT ĐỒ GỖ"
    ],
    ctaText: "TÌM HIỂU THÊM",
    ctaLink: "#services",
    image: "/templates/xay-dung-3/exp.jpg"
  },

  services: {
    badge: "DỊCH VỤ NỔI BẬT",
    title: "Giải Pháp Thiết Kế & Xây Dựng",
    items: [
      {
        id: "s1",
        number: "01",
        title: "Thiết Kế Kiến Trúc",
        category: "Kiến Trúc",
        description: "Quy hoạch tổng thể, giải pháp mặt bằng và dựng phối cảnh kiến trúc đón đầu xu hướng thẩm mỹ quốc tế.",
        link: "#services"
      },
      {
        id: "s2",
        number: "02",
        title: "Thiết Kế Nội Thất",
        category: "Nội Thất",
        description: "Bố trí không gian khoa học, chọn lọc vật liệu thượng hạng và phối màu chuẩn mực cho từng phong cách.",
        link: "#services"
      },
      {
        id: "s3",
        number: "03",
        title: "Mô Hình Hóa 3D BIM",
        category: "Công Nghệ BIM",
        description: "Ứng dụng công nghệ BIM tiên tiến phát hiện xung đột kết cấu, quản lý khối lượng và thi công chuẩn xác tuyệt đối.",
        link: "#services"
      },
      {
        id: "s4",
        number: "04",
        title: "Sản Xuất & Thi Công Đồ Gỗ",
        category: "Đồ Gỗ May Đo",
        description: "Xưởng sản xuất nội thất gỗ cao cấp may đo độc bản theo bản vẽ, đảm bảo tiêu chuẩn hoàn thiện khắt khe.",
        link: "#services"
      }
    ]
  },

  portfolioStrip: {
    badge: "DỰ ÁN TIÊU BIỂU",
    title: "CÔNG TRÌNH THỰC TẾ",
    items: [
      {
        id: "p1",
        category: "NGOẠI THẤT",
        title: "Biệt Thự Cảnh Quan",
        subtitle: "Kiến Trúc Ngoại Thất",
        image: "/templates/xay-dung-3/port1-3.jpg",
        link: "#portfolio"
      },
      {
        id: "p2",
        category: "NỘI THẤT",
        title: "Penthouse Sang Trọng",
        subtitle: "Thiết Kế Nội Thất",
        image: "/templates/xay-dung-3/port2-2.jpg",
        link: "#portfolio"
      },
      {
        id: "p3",
        category: "CẢI TẠO",
        title: "Cải Tạo Căn Hộ Cao Cấp",
        subtitle: "Cải Tạo Kiến Trúc",
        image: "/templates/xay-dung-3/port5-1.jpg",
        link: "#portfolio"
      },
      {
        id: "p4",
        category: "KIẾN TRÚC",
        title: "Dinh Thự Phong Cách Tối Giản",
        subtitle: "Kiến Trúc Đương Đại",
        image: "/templates/xay-dung-3/port6-2.jpg",
        link: "#portfolio"
      }
    ]
  },

  team: {
    badge: "ĐỘI NGŨ CHUYÊN GIA",
    title: "Nhân Sự Chủ Chốt",
    description: "Hội tụ những kiến trúc sư, kỹ sư kết cấu và chuyên gia nội thất dày dặn kinh nghiệm sáng tạo.",
    members: [
      {
        id: "tm1",
        name: "KTS. Tomas Kiên",
        role: "Nhà Sáng Lập & CEO",
        image: "/templates/xay-dung-3/P6.jpg",
        phone: "0988 123 456",
        socials: {
          facebook: "#",
          linkedin: "#",
          instagram: "#"
        }
      },
      {
        id: "tm2",
        name: "KTS. Hải Nam",
        role: "Giám Đốc Quản Lý Dự Án",
        image: "/templates/xay-dung-3/P7.jpg",
        phone: "0988 123 456",
        socials: {
          facebook: "#",
          linkedin: "#",
          instagram: "#"
        }
      },
      {
        id: "tm3",
        name: "KTS. Tuấn Minh",
        role: "Kiến Trúc Sư Trưởng",
        image: "/templates/xay-dung-3/P1.jpg",
        phone: "0988 123 456",
        socials: {
          facebook: "#",
          linkedin: "#",
          instagram: "#"
        }
      }
    ]
  },

  beforeAfter: {
    badge: "HIỆN THỰC HÓA Ý TƯỞNG",
    title: "Kéo Thanh Trượt Để So Sánh Sự Chuyển Đổi Không Gian",
    description: "Từ bản vẽ phác thảo kỹ thuật số đến công trình hoàn thiện sắc nét ngoài đời thực.",
    beforeLabel: "BẢN VẼ",
    afterLabel: "THỰC TẾ",
    beforeImage: "/templates/xay-dung-3/before.jpg",
    afterImage: "/templates/xay-dung-3/after.jpg"
  },

  stats: [
    {
      id: "st1",
      value: "352",
      label: "DỰ ÁN HOÀN THÀNH",
      icon: "building"
    },
    {
      id: "st2",
      value: "567",
      label: "KHÁCH HÀNG HÀI LÒNG",
      icon: "handshake"
    },
    {
      id: "st3",
      value: "656",
      label: "CÔNG TRÌNH BÀN GIAO",
      icon: "chart"
    },
    {
      id: "st4",
      value: "17",
      label: "GIẢI THƯỞNG DANH GIÁ",
      icon: "award"
    }
  ],

  articles: {
    badge: "GÓC CHIA SẺ",
    title: "Tin Tức & Xu Hướng Mới",
    items: [
      {
        id: "a1",
        title: "Gu thẩm mỹ đỉnh cao: Tôn vinh kiến trúc đương đại thời đại mới",
        excerpt: "BIM Creative vinh dự nhận giải thưởng thiết kế kiến trúc đương đại với giải pháp tối ưu ánh sáng tự nhiên và giải pháp năng lượng xanh.",
        category: "Nội Thất | Hiện Đại",
        date: "26 Tháng 02, 2026",
        author: "Ban Biên Tập",
        image: "/templates/xay-dung-3/03.jpg"
      },
      {
        id: "a2",
        title: "5 nguyên tắc vàng khi lựa chọn nội thất gỗ cho căn hộ cao cấp",
        excerpt: "Kinh nghiệm thực tiễn từ chuyên gia giúp gia chủ lựa chọn chất liệu gỗ bền bỉ, an toàn sức khỏe và giữ trọn vân gỗ tự nhiên sang trọng.",
        category: "Đồ Gỗ Cao Cấp",
        date: "20 Tháng 02, 2026",
        author: "KTS. Tuấn Minh",
        image: "/templates/xay-dung-3/02.jpg"
      },
      {
        id: "a3",
        title: "Bố trí phòng khách tinh tế mang lại cảm giác thư thái tối đa",
        excerpt: "Giải pháp kết nối không gian mở giữa phòng khách, ban công và khu vực bếp giúp tăng cường luồng sinh khí cho toàn bộ ngôi nhà.",
        category: "Không Gian Sống",
        date: "15 Tháng 02, 2026",
        author: "KTS. Hải Nam",
        image: "/templates/xay-dung-3/port1-3.jpg"
      }
    ]
  },

  contact: {
    badge: "KẾT NỐI VỚI CHÚNG TÔI",
    title: "Liên Hệ Tư Vấn",
    subtitle: "Đội ngũ chuyên gia luôn sẵn sàng đồng hành cùng công trình ước mơ của bạn.",
    cards: {
      call: {
        title: "Hotline Tư Vấn",
        lines: ["0988 123 456", "024 3888 9999"]
      },
      email: {
        title: "Hòm Thư Điện Tử",
        lines: ["contact@bimcreative.vn", "duan@bimcreative.vn"]
      },
      address: {
        title: "Địa Chỉ Văn Phòng",
        lines: ["Số 18 Hoàng Hoa Thám, Quận Ba Đình, Hà Nội"]
      }
    }
  }
};
