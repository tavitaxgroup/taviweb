export function buildDemoPageData() {
  return {
    business: {
      name: "TỔNG CÔNG TY THƯƠNG MẠI & THIẾT BỊ KỸ THUẬT QUỐC TẾ",
      shortName: "THIẾT BỊ KỸ THUẬT B2B",
      taxId: "0319223344",
      phone: "098 765 4321",
      email: "inquiry@b2bequipment.vn",
      address: "Khu Công Nghệ Cao, Xa Lộ Hà Nội, TP. Thủ Đức, TP. Hồ Chí Minh",
      rating: 4.9,
      reviewCount: 185
    },
    hero: {
      eyebrow: "THIẾT BỊ PHÂN TÍCH & GIẢI PHÁP KỸ THUẬT CHUẨN QUỐC TẾ",
      title: "Hệ Thống Thiết Bị Kỹ Thuật & Nguồn Cung Ứng B2B Toàn Diện",
      subtitle: "Trực tiếp nhập khẩu và phân phối thiết bị quang phổ, máy móc phân tích và giải pháp tự động hóa phòng thí nghiệm chính hãng. Đầy đủ chứng nhận CO/CQ, chính sách chiết khấu đại lý và bảo hành 24 tháng.",
      image: {
        src: "/assets/sisbio/banner-1.png",
        alt: "Thiết bị kỹ thuật công nghệ cao"
      },
      primaryAction: {
        label: "Yêu Cầu Báo Giá (RFQ)",
        href: "#contact"
      },
      secondaryAction: {
        label: "Xem Danh Mục Thiết Bị",
        href: "#services"
      },
      primaryCta: {
        label: "Yêu Cầu Báo Giá (RFQ)",
        href: "#contact"
      },
      secondaryCta: {
        label: "Xem Danh Mục Thiết Bị",
        href: "#services"
      }
    },
    trust: {
      badges: [
        {
          icon: "file",
          title: "Chứng Từ CO/CQ Nhập Khẩu Đầy Đủ",
          description: "Minh bạch xuất xứ nguồn gốc, sẵn sàng hồ sơ phục vụ đấu thầu và nghiệm thu."
        },
        {
          icon: "shield",
          title: "Tiêu Chuẩn ISO 9001:2015 & CE Marking",
          description: "Thiết bị được kiểm định nghiêm ngặt theo các tiêu chuẩn đo lường quốc tế."
        },
        {
          icon: "wrench",
          title: "Bảo Hành 24 Tháng & Kỹ Sư Tận Nơi",
          description: "Cung cấp linh kiện thay thế chính hãng và đào tạo chuyển giao công nghệ toàn diện."
        }
      ]
    },
    stats: [
      { metric: "100x", title: "Độ Bền Vượt Trội", text: "Kiểm nghiệm vận hành liên tục trong môi trường khắc nghiệt" },
      { metric: "ISO/CE", title: "Chuẩn Quốc Tế", text: "Chứng nhận chất lượng và an toàn chuẩn hóa toàn cầu" },
      { metric: "24 Th", title: "Bảo Hành Chính Hãng", text: "Cung cấp linh kiện thay thế và hỗ trợ kỹ thuật tận nơi" },
      { metric: "100%", title: "Chứng Từ CO/CQ", text: "Minh bạch xuất xứ nguồn gốc và hồ sơ kiểm định" }
    ],
    about: {
      tagline: "NĂNG LỰC KỸ THUẬT & CUNG ỨNG",
      eyebrow: "NĂNG LỰC KỸ THUẬT & CUNG ỨNG",
      title: "Năng lực sản xuất, kiểm định và cung ứng chuỗi thiết bị toàn diện",
      description1: "Chúng tôi trực tiếp nhập khẩu, phân phối và cung ứng các dòng máy móc phân tích, thiết bị đo lường và vật tư kỹ thuật cao. Là đối tác chiến lược cho các viện nghiên cứu, trường đại học, nhà máy dược phẩm và các khu công nghiệp trọng điểm trên toàn quốc.",
      description2: "Với hệ sinh thái kho bãi tiêu chuẩn và đội ngũ kỹ sư chuyên môn cao, chúng tôi cam kết mang lại giải pháp công nghệ toàn diện từ khâu khảo sát, tư vấn chọn máy đến lắp đặt, hiệu chuẩn và bảo dưỡng dài hạn.",
      yearsOfExperience: "ISO",
      experienceLabel: "TIÊU CHUẨN ISO 13485 & CE MARKING",
      image: {
        src: "/assets/sisbio/cho-maxa5-plus.webp",
        alt: "Thiết bị kỹ thuật kiểm định"
      }
    },
    services: [
      {
        id: "p1",
        model: "SIS-IMAGER-4000X",
        title: "Thiết Bị Chụp Ảnh Tín Hiệu Sinh Học Signal-Direct Imager",
        category: "Thiết Bị Phân Tích & Đo Lường",
        description: "Hệ thống chụp ảnh phát quang và huỳnh quang độ nhạy cao, tối ưu cho nghiên cứu protein, sinh học phân tử và kiểm nghiệm vi sinh.",
        specs: "Cảm biến làm lạnh sâu -60°C | Độ nhạy femtogram | Phần mềm phân tích tự động",
        status: "Sẵn hàng tại kho",
        isPopular: true,
        image: {
          src: "/assets/sisbio/signal-direct-imager.webp",
          alt: "Signal-Direct Imager"
        },
        highlights: [
          "Độ nhạy quang học cực cao, phát hiện tín hiệu yếu",
          "Giao diện điều khiển cảm ứng trực quan đa ngôn ngữ",
          "Đầy đủ chứng chỉ CE Marking & CO/CQ nhà máy"
        ]
      },
      {
        id: "p2",
        model: "SPEC-MINI-4096",
        title: "Máy Quang Phổ Thu Nhỏ Độ Phân Giải 4096 Pixel",
        category: "Quang Phổ & Tự Động Hóa",
        description: "Dòng máy quang phổ kích thước siêu nhỏ tích hợp chip cảm biến CMOS 4096 pixel, cho phép phân tích dải phổ rộng từ 200nm đến 1100nm.",
        specs: "Độ phân giải 4096 Pixels | Dải phổ 200 - 1100 nm | Giao tiếp USB 3.0 / LAN",
        status: "Sẵn hàng tại kho",
        image: {
          src: "/assets/sisbio/may-quang-pho-thu-nho-4096pixel.jpg",
          alt: "Máy quang phổ thu nhỏ 4096 pixel"
        },
        highlights: [
          "Tốc độ lấy mẫu siêu tốc < 1ms",
          "Kích thước nhỏ gọn, dễ dàng tích hợp dây chuyền",
          "Hỗ trợ SDK tùy biến cho phần mềm công nghiệp"
        ]
      },
      {
        id: "p3",
        model: "MAXFA5-PLUS",
        title: "Hệ Thống Phân Tích Bioproduction MAXFA5 Plus",
        category: "Công Nghệ Sinh Học & Dược",
        description: "Giải pháp giám sát và định lượng tự động trong quy trình sản xuất sinh học và lên men công nghiệp quy mô pilot và thương mại.",
        specs: "Kiểm soát 8 kênh song song | Tự động hiệu chuẩn | Tương thích chuẩn GMP",
        status: "Nhập khẩu chính hãng",
        image: {
          src: "/assets/sisbio/cho-maxa5-plus.webp",
          alt: "MAXFA5 Plus"
        },
        highlights: [
          "Tuân thủ nghiêm ngặt hướng dẫn FDA 21 CFR Part 11",
          "Tích hợp cảm biến đo trực tuyến không xâm lấn",
          "Bảo hành chính hãng 24 tháng tận nơi"
        ]
      },
      {
        id: "p4",
        model: "MAXFA5-MOD",
        title: "Cụm Thiết Bị Đo Kiểm & Định Lượng Dòng Chảy Kỹ Thuật Số",
        category: "Vật Tư Kỹ Thuật Chuyên Dụng",
        description: "Cụm thiết bị cảm biến và van điều tiết áp lực cao, thiết kế chuyên biệt cho các môi trường dung môi hóa chất và dược phẩm khắt khe.",
        specs: "Thép không gỉ 316L & PTFE | Chịu áp lực đến 40 Bar | Chịu nhiệt 200°C",
        status: "Sẵn hàng tại kho",
        image: {
          src: "/assets/sisbio/maxfa5.webp",
          alt: "Cụm thiết bị đo kiểm"
        },
        highlights: [
          "Kháng ăn mòn hóa chất và dung môi hữu cơ",
          "Đạt chuẩn phòng sạch Cleanroom Class 100",
          "Cung ứng phụ tùng thay thế sẵn có trong 24h"
        ]
      }
    ],
    gallery: [
      {
        id: "d1",
        title: "Lắp Đặt Hệ Thống Quang Phổ Tại Viện Hàn Lâm KH&CN",
        client: "Viện Hàn Lâm Khoa Học & Công Nghệ",
        category: "Phòng Thí Nghiệm & R&D",
        location: "Hà Nội",
        image: {
          src: "/assets/sisbio/banner2.webp",
          alt: "Phòng thí nghiệm R&D"
        }
      },
      {
        id: "d2",
        title: "Triển Khai Dây Chuyền Giám Sát Lên Men Tự Động",
        client: "Nhà Máy Dược Phẩm Sinh Học",
        category: "Dược Phẩm & Y Sinh",
        location: "Khu Công Nghệ Cao TP.HCM",
        image: {
          src: "/assets/sisbio/banner3.webp",
          alt: "Dây chuyền dược phẩm"
        }
      },
      {
        id: "d3",
        title: "Tích Hợp Cảm Biến Đo Lường Dây Chuyền Đóng Gói",
        client: "Tập Đoàn Sản Xuất Tiêu Dùng Quốc Tế",
        category: "Dây Chuyền Nhà Máy",
        location: "Bình Dương",
        image: {
          src: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
          alt: "Dây chuyền đóng gói"
        }
      }
    ],
    whyChooseUs: {
      tagline: "TIÊU CHUẨN KỸ THUẬT VƯỢT TRỘI",
      title: "Vì Sao Khách Hàng B2B Chọn Thiết Bị Của Chúng Tôi?",
      items: [
        {
          icon: "cpu",
          title: "Độ Bền Vượt Trội 100x & Kiểm Định Khắt Khe",
          description: "Tất cả các dòng máy móc đều vượt qua các bài kiểm nghiệm hoạt động liên tục trong môi trường công nghiệp khắc nghiệt trước khi xuất xưởng."
        },
        {
          icon: "wrench",
          title: "Kỹ Sư Ứng Dụng Hỗ Trợ 24/7 & Chuyển Giao Tận Nơi",
          description: "Đội ngũ chuyên gia kỹ thuật và tiến sĩ chuyên ngành trực tiếp đào tạo vận hành, xây dựng quy trình SOP và bảo trì phòng ngừa định kỳ."
        },
        {
          icon: "warehouse",
          title: "Linh Kiện Thay Thế Sẵn Kho & Chiết Khấu Hấp Dẫn",
          description: "Chính sách giá đại lý cấp 1 minh bạch, bảo vệ giá thầu dự án và lưu trữ sẵn phụ tùng thay thế để xử lý sự cố trong vòng 24 giờ."
        }
      ]
    },
    reviews: [
      {
        id: "r1",
        rating: 5,
        text: "Máy quang phổ thu nhỏ 4096 pixel hoạt động rất ổn định trên dây chuyền QC của chúng tôi. Tốc độ lấy mẫu nhanh và dải phổ chính xác giúp giảm tỷ lệ hàng lỗi xuống dưới 0.1%.",
        authorName: "ThS. Đặng Hữu Phong",
        authorInitials: "HP",
        authorRole: "Trưởng Phòng R&D & QC | Dược Phẩm Sinh Học"
      },
      {
        id: "r2",
        rating: 5,
        text: "Hồ sơ thiết bị rất đầy đủ CO/CQ và Test Report gốc từ nhà máy, giúp quá trình nghiệm thu dự án thầu cấp nhà nước diễn ra suôn sẻ. Đội ngũ kỹ sư hỗ trợ chuyển giao rất nhiệt tình.",
        authorName: "KS. Lê Quốc Thắng",
        authorInitials: "QT",
        authorRole: "Kỹ Sư Trưởng Tự Động Hóa | Nhà Máy Chế Tạo Cơ Khí"
      },
      {
        id: "r3",
        rating: 5,
        text: "Chính sách chiết khấu đại lý và bảo hộ dự án rất minh bạch. Hàng hóa luôn có sẵn tại kho nên tiến độ giao hàng cho các công trình luôn chuẩn xác theo cam kết.",
        authorName: "Ông Nguyễn Văn Hậu",
        authorInitials: "VH",
        authorRole: "Giám Đốc Cung Ứng Vật Tư | Thiết Bị Công Nghiệp Miền Nam"
      }
    ],
    contact: {
      eyebrow: "HỖ TRỢ KỸ THUẬT & DỰ TOÁN B2B",
      title: "Nhận Báo Giá Dự Án & Hồ Sơ Kỹ Thuật (RFQ) Trong 2 Giờ",
      description: "Gửi thông số kỹ thuật yêu cầu hoặc liên hệ trực tiếp với bộ phận kỹ sư ứng dụng để nhận bảng báo giá chiết khấu đại lý tốt nhất.",
      primaryAction: {
        label: "Yêu Cầu Báo Giá Dự Án (RFQ)",
        href: "#contact"
      }
    },
    seo: {
      title: "Hệ Thống Thiết Bị Kỹ Thuật & Giải Pháp B2B Chuẩn Quốc Tế",
      description: "Nhà nhập khẩu và phân phối thiết bị đo lường, quang phổ và tự động hóa phòng thí nghiệm chính hãng với CO/CQ đầy đủ và bảo hành 24 tháng."
    }
  };
}
