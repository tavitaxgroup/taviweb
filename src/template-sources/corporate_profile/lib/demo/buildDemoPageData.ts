export function buildDemoPageData() {
  return {
    business: {
      name: "TẬP ĐOÀN ĐẦU TƯ & DỊCH VỤ DOANH NGHIỆP",
      shortName: "TẬP ĐOÀN ĐỐI TÁC CHIẾN LƯỢC",
      taxId: "0318998877",
      phone: "090 123 4567",
      email: "contact@corporategroup.vn",
      address: "Tòa nhà Landmark Tower, Số 10 Mai Chí Thọ, TP. Thủ Đức, TP. Hồ Chí Minh",
      rating: 4.9,
      reviewCount: 320
    },
    hero: {
      eyebrow: "HỒ SƠ NĂNG LỰC DOANH NGHIỆP",
      title: "Kiến Tạo Giá Trị Bền Vững & Giải Pháp Chiến Lược Toàn Diện",
      subtitle: "Đồng hành cùng hơn 500+ doanh nghiệp trong nước và quốc tế kiến tạo chuẩn mực quản trị, tối ưu nguồn lực và bứt phá tăng trưởng.",
      image: {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        alt: "Trụ sở tập đoàn hiện đại"
      },
      primaryAction: {
        label: "Liên hệ hợp tác",
        href: "#contact"
      },
      secondaryAction: {
        label: "Tải Profile Công Ty (PDF)",
        href: "#profile-download"
      },
      primaryCta: {
        label: "Liên hệ hợp tác",
        href: "#contact"
      },
      secondaryCta: {
        label: "Tải Profile Công Ty (PDF)",
        href: "#profile-download"
      }
    },
    trust: {
      badges: [
        {
          icon: "shield",
          title: "Pháp Lý & Hợp Đồng Minh Bạch",
          description: "Mọi cam kết đều được cụ thể hóa bằng văn bản và điều khoản pháp lý chặt chẽ."
        },
        {
          icon: "award",
          title: "Năng Lực Triển Khai Thực Chiến",
          description: "Đội ngũ chuyên gia giàu kinh nghiệm thực tiễn qua hơn 500+ dự án quy mô lớn."
        },
        {
          icon: "target",
          title: "Cam Kết Đo Lường Theo KPI",
          description: "Giải pháp gắn liền với hiệu quả kinh tế và chỉ số ROI rõ ràng cho doanh nghiệp."
        }
      ]
    },
    stats: [
      { value: "15+", label: "Năm kinh nghiệm thực chiến", desc: "Thành lập và phát triển vững chắc" },
      { value: "500+", label: "Khách hàng & Đối tác", desc: "Doanh nghiệp SMB & FDI tin tưởng" },
      { value: "99%", label: "Tỷ lệ dự án đúng tiến độ", desc: "Cam kết chất lượng theo KPI" },
      { value: "24/7", label: "Hỗ trợ & Đồng hành", desc: "Đội ngũ chuyên gia chuyên trách" }
    ],
    about: {
      tagline: "VỀ CHÚNG TÔI",
      eyebrow: "VỀ CHÚNG TÔI",
      title: "Khẳng định vị thế bằng năng lực triển khai và chuẩn mực quốc tế",
      description1: "Chúng tôi xây dựng uy tín dựa trên hiệu quả thực tế và cam kết đồng hành lâu dài. Với đội ngũ chuyên gia giàu kinh nghiệm cùng hệ thống quản trị hiện đại, chúng tôi cung cấp giải pháp toàn diện giúp doanh nghiệp tối ưu chi phí và gia tăng năng lực cạnh tranh.",
      description2: "Mọi hợp tác đều được cụ thể hóa bằng văn bản pháp lý minh bạch, quy trình kiểm soát chất lượng nghiêm ngặt và tinh thần trách nhiệm cao nhất.",
      yearsOfExperience: "15+",
      experienceLabel: "NĂM VỮNG VÀNG VỊ THẾ & ĐỒNG HÀNH",
      mission: "Kiến tạo giá trị thực chất và mang lại giải pháp đột phá cho từng bài toán kinh doanh của đối tác.",
      coreValues: "Minh bạch trong pháp lý, chuẩn xác trong cam kết, bền vững trong mối quan hệ hợp tác dài hạn.",
      values: [
        { title: "Chuyên nghiệp & Minh bạch", desc: "Cam kết chuẩn mực đạo đức kinh doanh và tính chuẩn xác trong mọi cam kết." },
        { title: "Hiệu quả đo lường được", desc: "Mọi đề xuất giải pháp đều gắn liền với chỉ số ROI và hiệu quả kinh tế thực tế." },
        { title: "Đồng hành bền vững", desc: "Không dừng lại ở việc bàn giao, chúng tôi cam kết bảo trợ và hỗ trợ sau triển khai." }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        alt: "Văn phòng làm việc chuyên nghiệp"
      }
    },
    services: [
      {
        id: "s1",
        title: "Tư Vấn Quản Trị & Chiến Lược Doanh Nghiệp",
        description: "Khảo sát thực trạng, tái cấu trúc vận hành và thiết lập lộ trình tăng trưởng bền vững cho doanh nghiệp trong kỷ nguyên mới.",
        isPopular: true,
        image: {
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
          alt: "Tư vấn quản trị"
        },
        highlights: [
          "Hoạch định chiến lược kinh doanh 3 - 5 năm",
          "Tái cấu trúc sơ đồ tổ chức & quy chế vận hành",
          "Thiết lập hệ thống KPI & kiểm soát nội bộ"
        ]
      },
      {
        id: "s2",
        title: "Quản Lý & Giám Sát Dự Án Chuyên Sâu",
        description: "Kiểm soát tiến độ, dự toán ngân sách và đảm bảo tiêu chuẩn nghiệm thu chặt chẽ từng hạng mục cam kết trong hợp đồng.",
        image: {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          alt: "Quản lý dự án"
        },
        highlights: ["Kiểm toán tiến độ theo tuần", "Tối ưu chi phí thực hiện"]
      },
      {
        id: "s3",
        title: "Tư Vấn Pháp Lý Doanh Nghiệp & Xúc Tiến M&A",
        description: "Thẩm định hợp đồng thương mại, thủ tục pháp nhân, sở hữu trí tuệ và quản trị rủi ro pháp lý toàn diện cho ban lãnh đạo.",
        image: {
          src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
          alt: "Pháp lý M&A"
        },
        highlights: ["Thẩm định pháp lý M&A", "Bảo hộ tài sản trí tuệ"]
      },
      {
        id: "s4",
        title: "Chuỗi Cung Ứng & Kho Vận B2B Toàn Diện",
        description: "Giải pháp giao nhận, kho bãi tiêu chuẩn và tối ưu hóa chi phí vận chuyển liên vùng với năng lực logistics vững mạnh.",
        image: {
          src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          alt: "Kho vận logistics"
        },
        highlights: ["Mạng lưới kho bãi 3 miền", "Tối ưu 20% chi phí lưu kho"]
      }
    ],
    gallery: [
      {
        id: "p1",
        title: "Dự Án Tái Cấu Trúc Vận Hành Chuỗi Cung Ứng",
        client: "Tập đoàn VinaLog Logistics",
        category: "Chuỗi Cung Ứng",
        location: "TP. Hồ Chí Minh",
        result: "Cắt giảm 22% chi phí lưu kho",
        image: {
          src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          alt: "Chuỗi cung ứng"
        }
      },
      {
        id: "p2",
        title: "Tư Vấn & Triển Khai Hệ Thống Quản Trị Số",
        client: "Công ty Cổ phần Cơ điện Á Châu",
        category: "Chuyển Đổi Số",
        location: "Hà Nội",
        result: "Rút ngắn 35% thời gian phê duyệt",
        image: {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
          alt: "Quản trị số"
        }
      },
      {
        id: "p3",
        title: "Xúc Tiến Đầu Tư & Mạng Lưới Đối Tác FDI",
        client: "Tổng công ty Thương mại Quốc tế",
        category: "Đối Tác FDI",
        location: "Đà Nẵng & Bình Dương",
        result: "Kết nối thành công 18 đối tác FDI",
        image: {
          src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
          alt: "Đối tác FDI"
        }
      }
    ],
    whyChooseUs: {
      tagline: "VỊ THẾ & NĂNG LỰC CẠNH TRANH",
      title: "Vì Sao Đối Tác Lựa Chọn Chúng Tôi?",
      items: [
        {
          icon: "shield",
          title: "Pháp Lý Vững Chắc & Hợp Đồng Rõ Ràng",
          description: "Mọi hợp tác được xác lập trên nền tảng pháp lý chuẩn mực, bảo đảm tuyệt đối quyền lợi và bảo mật thông tin cho doanh nghiệp."
        },
        {
          icon: "chart",
          title: "Cam Kết Hiệu Quả Đo Lường Được (ROI)",
          description: "Tất cả các mốc chỉ tiêu, ngân sách dự toán và tiến độ thực thi đều được lượng hóa theo KPI cụ thể, minh bạch trong báo cáo định kỳ."
        },
        {
          icon: "award",
          title: "Đội Ngũ Cố Vấn Cấp Cao Thực Chiến",
          description: "Tập hợp các chuyên gia hơn 15 năm kinh nghiệm trong ngành, trực tiếp khảo sát thực địa và đồng hành giải quyết từng vấn đề cốt lõi."
        }
      ]
    },
    reviews: [
      {
        id: "r1",
        rating: 5,
        text: "Sự chuyên nghiệp và minh bạch trong từng điều khoản hợp đồng khiến ban lãnh đạo chúng tôi hoàn toàn an tâm. Tiến độ thực hiện dự án hoàn thành sớm hơn 2 tuần so với kế hoạch ban đầu.",
        authorName: "Ông Trần Minh Tuấn",
        authorInitials: "TM",
        authorRole: "Tổng Giám Đốc | VinaLog Logistics"
      },
      {
        id: "r2",
        rating: 5,
        text: "Đội ngũ chuyên gia có năng lực thực chiến xuất sắc. Họ không chỉ dừng lại ở tư vấn lý thuyết mà trực tiếp tham gia tái cấu trúc và gỡ bỏ các nút thắt vận hành cho nhà máy chúng tôi.",
        authorName: "Bà Nguyễn Thị Mai Lan",
        authorInitials: "ML",
        authorRole: "Phó Chủ Tịch | Cơ Điện & Kỹ Thuật Á Châu"
      },
      {
        id: "r3",
        rating: 5,
        text: "Hồ sơ năng lực rất rõ ràng và chuẩn mực. Việc hợp tác đã giúp công ty chúng tôi kết nối thành công với 3 đối tác cung ứng FDI lớn trong khu vực. Rất đáng tin cậy!",
        authorName: "Ông Hoàng Văn Đức",
        authorInitials: "VD",
        authorRole: "Giám Đốc Phát Triển Dự Án | Global Trade"
      }
    ],
    contact: {
      eyebrow: "LIÊN HỆ HỢP TÁC",
      title: "Sẵn Sàng Đồng Hành Cùng Doanh Nghiệp Bạn Vươn Xa",
      description: "Hãy để lại yêu cầu hoặc liên hệ trực tiếp, đội ngũ cố vấn cấp cao của chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.",
      primaryAction: {
        label: "Đặt Lịch Tư Vấn Trực Tiếp",
        href: "#contact"
      }
    },
    seo: {
      title: "Hồ Sơ Năng Lực Doanh Nghiệp | Đối Tác Chiến Lược B2B",
      description: "Hồ sơ năng lực doanh nghiệp, năng lực triển khai thực tế và cam kết đồng hành cùng doanh nghiệp phát triển bền vững."
    }
  };
}
