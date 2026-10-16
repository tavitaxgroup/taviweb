export function buildDemoPageData() {
  return {
    business: {
      name: "CÔNG TY DỊCH VỤ TRUYỀN THÔNG & GIẢI PHÁP TĂNG TRƯỞNG",
      shortName: "GIẢI PHÁP TĂNG TRƯỞNG NHANH",
      taxId: "0319556677",
      phone: "0938 112 233",
      email: "growth@leadgeneration.vn",
      address: "Tòa nhà Innovation Hub, Quận 1, TP. Hồ Chí Minh",
      rating: 5.0,
      reviewCount: 450
    },
    hero: {
      eyebrow: "GIẢI PHÁP TIẾP CẬN KHÁCH HÀNG NÓNG",
      title: "Đột Phá Doanh Thu & Tiếp Cận Khách Hàng Tiềm Năng Nhanh Chóng",
      subtitle: "Giải quyết triệt để bài toán thiếu hụt khách hàng, tối ưu chi phí chuyển đổi và tăng tốc doanh số vượt bậc ngay trong 14 ngày làm việc.",
      image: {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
        alt: "Tư vấn tăng trưởng chuyên nghiệp"
      },
      primaryAction: {
        label: "Đăng Ký Tư Vấn Miễn Phí",
        href: "#hero-form"
      },
      secondaryAction: {
        label: "Xem Bảng Giá & Cam Kết",
        href: "#services"
      },
      primaryCta: {
        label: "Đăng Ký Tư Vấn Miễn Phí",
        href: "#hero-form"
      },
      secondaryCta: {
        label: "Xem Bảng Giá & Cam Kết",
        href: "#services"
      }
    },
    trust: {
      badges: [
        {
          icon: "trending",
          title: "+45% Lượng Lead Tiềm Năng",
          description: "Tăng trưởng số lượng khách hàng nóng liên hệ trực tiếp mỗi tháng."
        },
        {
          icon: "target",
          title: "3.8x Tỷ Suất Hoàn Vốn (ROI)",
          description: "Tối ưu chi phí chuyển đổi và gia tăng doanh số thực tế có thể đo lường."
        },
        {
          icon: "users",
          title: "98.5% Tỷ Lệ Hài Lòng & Tái Ký",
          description: "Hơn 500+ doanh nghiệp vừa và nhỏ tin tưởng duy trì hợp tác dài hạn."
        }
      ]
    },
    about: {
      tagline: "PHƯƠNG PHÁP THỰC CHIẾN & ĐO LƯỜNG",
      eyebrow: "PHƯƠNG PHÁP THỰC CHIẾN & ĐO LƯỜNG",
      title: "Cam kết mang lại hiệu quả thực tế và khách hàng tiềm năng tức thì",
      description1: "Chúng tôi không chỉ cung cấp dịch vụ đơn thuần mà mang đến một giải pháp tăng trưởng toàn diện. Tập trung giải quyết trực diện vấn đề thiếu khách hàng, rút ngắn thời gian chốt đơn và tối ưu hóa chi phí trên mỗi cơ hội kinh doanh.",
      description2: "Mọi chiến dịch đều được kiểm soát bằng số liệu thực tế, tích hợp công cụ đo lường tự động và cam kết hoàn tiền 100% nếu không đạt các mốc chỉ tiêu đã thỏa thuận.",
      yearsOfExperience: "14",
      experienceLabel: "NGÀY ĐỂ KÍCH HOẠT VẬN HÀNH THẦN TỐC",
      image: {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        alt: "Chiến lược tăng trưởng"
      }
    },
    services: [
      {
        id: "pkg-1",
        name: "Gói Khởi Động (Basic)",
        title: "Gói Khởi Động (Basic)",
        price: "4.900.000đ",
        period: "trọn gói 1 lần",
        desc: "Phù hợp cho cá nhân kinh doanh hoặc doanh nghiệp mới cần tiếp cận khách hàng nhanh với chi phí tối ưu.",
        highlight: false,
        features: [
          "Landing Page tốc độ cao chuẩn SEO & Mobile",
          "Tích hợp nút Gọi Hotline & Chat Zalo 1-chạm",
          "Miễn phí tên miền quốc tế & Hosting năm đầu",
          "Bàn giao & kích hoạt trong 3 ngày làm việc",
          "Bảo hành kỹ thuật tiêu chuẩn 12 tháng"
        ],
        ctaText: "Chọn Gói Khởi Động"
      },
      {
        id: "pkg-2",
        name: "Gói Tăng Tốc (Growth Pro)",
        title: "Gói Tăng Tốc (Growth Pro)",
        price: "9.900.000đ",
        period: "khuyên dùng nhiều nhất",
        desc: "Giải pháp trọn gói hoàn hảo cho doanh nghiệp đang tăng tốc bán hàng, chạy quảng cáo và tối đa hóa tỷ lệ chốt đơn.",
        highlight: true,
        badge: "BÁN CHẠY NHẤT (BEST SELLER)",
        features: [
          "Thiết kế giao diện độc quyền tối ưu tỷ lệ chuyển đổi (CRO)",
          "Form thu thập lead tự động đồng bộ về Google Sheets & CRM",
          "Tích hợp mã đo lường Google Ads, Meta Pixel & TikTok",
          "Cam kết bàn giao trong 5 ngày làm việc",
          "Bảo hành kỹ thuật trọn đời & hỗ trợ 24/7",
          "Tặng gói tối ưu nội dung chuẩn bán hàng B2B"
        ],
        ctaText: "Đăng Ký Gói Tăng Tốc"
      },
      {
        id: "pkg-3",
        name: "Gói Doanh Nghiệp (Enterprise)",
        title: "Gói Doanh Nghiệp (Enterprise)",
        price: "18.900.000đ",
        period: "may đo chuyên sâu",
        desc: "Thiết kế cao cấp theo nhận diện thương hiệu và tính năng đặc thù cho các tập đoàn và chuỗi phân phối.",
        highlight: false,
        features: [
          "Toàn bộ quyền lợi của gói Growth Pro",
          "Lập trình module CRM & quản lý hợp đồng riêng biệt",
          "Tối ưu hóa phễu bán hàng đa kênh (Multi-funnel)",
          "Đội ngũ kỹ sư hỗ trợ riêng (Dedicated Support 24/7)",
          "Cam kết bảo mật dữ liệu tuyệt đối theo chuẩn quốc tế"
        ],
        ctaText: "Tư Vấn Gói Enterprise"
      }
    ],
    gallery: [
      {
        id: "c1",
        title: "Tăng 180% Lượng Lead Nóng Cho Hệ Thống Bán Lẻ",
        client: "Chuỗi Bán Buôn VinaTrade",
        category: "Thương Mại & Bán Lẻ",
        result: "+180% Lead Nóng / Tháng",
        image: {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          alt: "Case Study 1"
        }
      },
      {
        id: "c2",
        title: "Cắt Giảm 35% Chi Phí Quảng Cáo Cho Dịch Vụ Đào Tạo",
        client: "Tổ Chức Giáo Dục EduPro",
        category: "Dịch Vụ & Tư Vấn",
        result: "Giảm 35% CPA",
        image: {
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
          alt: "Case Study 2"
        }
      },
      {
        id: "c3",
        title: "Tối Ưu Hóa Phễu Bán Hàng & Chốt Hợp Đồng B2B",
        client: "Nhà Máy Cơ Điện & Tự Động Hóa",
        category: "Sản Xuất & B2B",
        result: "x2.5 Tỷ Lệ Chốt Thầu",
        image: {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          alt: "Case Study 3"
        }
      }
    ],
    whyChooseUs: {
      tagline: "CAM KẾT CHẤT LƯỢNG HÀNG ĐẦU",
      title: "4 Cam Kết Vàng Giúp Doanh Nghiệp Bạn Yên Tâm Đầu Tư",
      items: [
        {
          step: "01",
          title: "Tiết Kiệm 30% Chi Phí & Tối Đa Hóa ROI",
          desc: "Quy trình tinh gọn, loại bỏ các chi phí trung gian không cần thiết, tối đa hóa lượng khách hàng tiềm năng nhận được trên mỗi đồng ngân sách."
        },
        {
          step: "02",
          title: "Cam Kết Hoàn Tiền 100% Bằng Văn Bản",
          desc: "Mọi chỉ tiêu KPI về số lượng lead, thời gian phản hồi và chất lượng kỹ thuật đều được ghi rõ trong hợp đồng pháp lý minh bạch."
        },
        {
          step: "03",
          title: "Chuyên Gia Thực Chiến Phản Hồi Trong 15 Phút",
          desc: "Được hỗ trợ trực tiếp từ đội ngũ chuyên viên giàu kinh nghiệm, sẵn sàng giải quyết sự cố và tối ưu chiến dịch 24/7."
        },
        {
          step: "04",
          title: "Bàn Giao & Vận Hành Ngay Trong 14 Ngày",
          desc: "Hệ sinh thái landing page và form thu thập lead sẵn sàng kích hoạt tức thì, không làm gián đoạn bất kỳ hoạt động kinh doanh nào của bạn."
        }
      ]
    },
    reviews: [
      {
        id: "t1",
        rating: 5,
        text: "Từ khi triển khai trang landing page mới và cấu hình form thu thập tự động, lượng khách liên hệ qua Zalo tăng gấp đôi, chi phí trên mỗi khách hàng tiềm năng giảm tới 35%. Rất ấn tượng!",
        authorName: "Anh Trần Minh Tuấn",
        authorInitials: "MT",
        authorRole: "Giám Đốc Kinh Doanh | VinaTrade Bán Buôn"
      },
      {
        id: "t2",
        rating: 5,
        text: "Đội ngũ phản hồi cực kỳ nhanh chóng. Bản demo gửi trong ngày đầu tiên đã sát với mong đợi của công ty tôi. Hợp đồng rất rõ ràng minh bạch và cam kết tiến độ chuẩn xác.",
        authorName: "Chị Lê Hoàng Yến",
        authorInitials: "HY",
        authorRole: "Trưởng Phòng Marketing | EduPro Global"
      },
      {
        id: "t3",
        rating: 5,
        text: "Chính sách bảo hành và hỗ trợ sau bàn giao rất chu đáo. Mỗi khi cần cập nhật banner hay nội dung mới chỉ cần nhắn là được hỗ trợ ngay trong 15 phút. Rất hài lòng!",
        authorName: "Anh Vũ Đình Trọng",
        authorInitials: "ĐT",
        authorRole: "Chủ Chuỗi Dịch Vụ | Auto Express"
      }
    ],
    contact: {
      eyebrow: "HÀNH ĐỘNG NGAY HÔM NAY",
      title: "Đừng Để Đối Thủ Vượt Lên Trước Bạn!",
      description: "Đặt lịch tư vấn chẩn đoán mô hình tăng trưởng miễn phí 15 phút ngay hôm nay để nhận báo cáo phân tích và giải pháp tối ưu cho doanh nghiệp bạn.",
      primaryAction: {
        label: "Đăng Ký Tư Vấn 1:1 Ngay",
        href: "#hero-form"
      }
    },
    seo: {
      title: "Giải Pháp Tăng Trưởng Doanh Số & Chuyển Đổi Cao B2B",
      description: "Tối ưu hóa tỷ lệ chuyển đổi, tiếp cận khách hàng tiềm năng nhanh chóng với cam kết KPI bằng văn bản hợp đồng rõ ràng."
    }
  };
}
