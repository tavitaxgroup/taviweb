import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh7Data extends ClonedTemplateBaseData {
  heroCircles: string[];
  trainingPrograms: Array<{
    id: string;
    title: string;
    image: string;
    category: string;
  }>;
  bilingualPromo: {
    titleTop: string;
    titleMain: string;
    description: string;
    tenReasons: string[];
    discountHighlight: string;
    countdown: Array<{ value: string; label: string }>;
  };
  scholarships: Array<{
    id: string;
    title: string;
    image: string;
    value: string;
  }>;
  whyChooseItems: {
    centerAdvisorImage: string;
    leftItems: Array<{ title: string; description: string }>;
    rightItems: Array<{ title: string; description: string }>;
  };
  languageSchools: {
    bannerImage: string;
    bannerCaption: string;
    schools: Array<{
      id: string;
      name: string;
      summary: string;
      image: string;
    }>;
  };
}

export const trungTamTiengAnh7DefaultData: TrungTamTiengAnh7Data = {
  business: {
    name: "Việt Nhật Edu",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["tuvan@vietnhatedu.vn", "info@vietnhatedu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 20:30",
    rating: 4.9,
    reviewCount: 3650,
    experienceYears: "12+ Năm",
    aboutTitle: "CHUYÊN ĐÀO TẠO NGOẠI NGỮ & TƯ VẤN DU HỌC NHẬT BẢN",
    aboutText: [
      "Việt Nhật Edu tự hào là trung tâm đào tạo song ngữ Anh - Nhật và tư vấn du học Nhật Bản uy tín hàng đầu, cam kết đồng hành cùng học viên từ bước luyện thi chứng chỉ ngoại ngữ đến khi nhận Visa và ổn định học tập tại Tokyo, Osaka, Kyoto."
    ],
    highlights: [
      "Cam kết tỉ lệ đỗ Visa du học Nhật Bản đạt chuẩn 100%",
      "Hỗ trợ săn học bổng 30% - 100% tại hơn 120 trường Nhật ngữ & Đại học",
      "Giáo trình đào tạo song ngữ Anh - Nhật thực tiễn cho mọi lứa tuổi",
      "Ưu đãi giảm tới 50% học phí khi đăng ký trực tuyến"
    ]
  },
  hero: {
    eyebrow: "CHUYÊN DU HỌC NHẬT BẢN",
    title: "Du học Nhật Bản nhanh nhất",
    subtitle: "Bao đỗ Visa 100%",
    description:
      "Lộ trình đào tạo ngoại ngữ cấp tốc và hoàn thiện hồ sơ du học Nhật Bản trọn gói, minh bạch chi phí, cam kết giới thiệu việc làm thêm tại Nhật.",
    ctaText: "ĐĂNG KÝ NGAY",
    ctaLink: "#dang-ky-khuyen-mai",
    secondaryCtaText: "ĐĂNG KÝ TƯ VẤN",
    secondaryCtaLink: "#dang-ky-khuyen-mai",
    backgroundImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=85"
    ]
  },
  heroCircles: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80"
  ],
  trainingPrograms: [
    {
      id: "tp-1",
      title: "Luyện thi đại học",
      category: "Luyện thi EJU & IELTS",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tp-2",
      title: "Trung học phổ thông",
      category: "Khối THPT",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tp-3",
      title: "Trung học cơ sở",
      category: "Khối THCS",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tp-4",
      title: "Tiểu học",
      category: "Ngoại ngữ thiếu nhi",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tp-5",
      title: "Kỹ năng mềm",
      category: "Phỏng vấn & Giao tiếp",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tp-6",
      title: "Tiếng Anh",
      category: "Giao tiếp & Học thuật",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80"
    }
  ],
  services: [
    {
      id: "s-1",
      title: "Luyện thi đại học & EJU Nhật Bản",
      description: "Lộ trình luyện thi đại học quốc tế và săn học bổng chính phủ MEXT."
    },
    {
      id: "s-2",
      title: "Khóa đào tạo song ngữ Anh - Nhật",
      description: "Thành thạo giao tiếp song ngữ Anh - Nhật cùng giảng viên bản xứ."
    },
    {
      id: "s-3",
      title: "Tư vấn hồ sơ du học Nhật Bản trọn gói",
      description: "Hỗ trợ chọn trường, luyện phỏng vấn Cục xuất nhập cảnh và xin Visa 100%."
    }
  ],
  bilingualPromo: {
    titleTop: "KHÓA ĐÀO TẠO SONG NGỮ",
    titleMain: "ANH – NHẬT",
    description:
      "Ở Việt Nam, số lượng người học tiếng Nhật và tiếng Anh tăng lên và đang trở thành ngôn ngữ 'hot' ngày càng được nhiều người lựa chọn. Việt Nhật Edu sẽ cho bạn biết 10 lý do bạn nên học song ngữ Anh - Nhật ngay hôm nay để nắm bắt cơ hội việc làm tốt nhất:",
    tenReasons: [
      "Cơ hội việc làm rộng mở",
      "Mức thu nhập cao vượt trội",
      "Du học tiết kiệm chi phí",
      "Khám phá và trải nghiệm nền văn hóa mới",
      "Dễ dàng đàm phán cơ hội kinh doanh",
      "Du lịch Nhật Bản tự túc dễ dàng",
      "Sống và làm việc tại Nhật Bản",
      "Tạo dựng được nhiều mối quan hệ",
      "Đọc sách xem phim không cần phiên dịch",
      "Tiếng Nhật giúp chúng ta thông minh hơn"
    ],
    discountHighlight: "50%",
    countdown: [
      { value: "1", label: "TUẦN" },
      { value: "1", label: "NGÀY" },
      { value: "3", label: "GIỜ" },
      { value: "2", label: "PHÚT" },
      { value: "5", label: "GIÂY" }
    ]
  },
  scholarships: [
    {
      id: "sch-1",
      title: "DU HỌC NHẬT BẢN VÀ CÁC LOẠI HỌC BỔNG DÀNH CHO DU HỌC SINH",
      value: "Học bổng MEXT & JASSO",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sch-2",
      title: "HỌC BỔNG TOÀN PHẦN SAU ĐẠI HỌC CHUYÊN NGÀNH DƯỢC HỌC",
      value: "Tài trợ 100% học phí",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sch-3",
      title: "HỌC BỔNG 300,000 YÊN TẠI ĐẠI HỌC QUỐC LẬP HIROSHIMA",
      value: "300,000 Yên / năm",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sch-4",
      title: "HỌC BỔNG TOÀN PHẦN DU HỌC NHẬT BẢN NGÀNH ĐIỀU DƯỠNG",
      value: "Miễn 100% học phí + KTX",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
    }
  ],
  whyChooseItems: {
    centerAdvisorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85",
    leftItems: [
      {
        title: "CHƯƠNG TRÌNH HỌC ĐA DẠNG",
        description:
          "Bên cạnh giáo trình chính được chọn lọc từ những giáo trình mới và tốt nhất hiện nay, trung tâm còn đưa vào giảng dạy thêm những giáo trình hỗ trợ phù hợp với mục tiêu khóa học nhằm giúp tăng cường kĩ năng."
      },
      {
        title: "NHIỀU HỌC BỔNG HẤP DẪN",
        description:
          "Bên cạnh giáo trình chính được chọn lọc từ những giáo trình mới và tốt nhất hiện nay, trung tâm còn đưa vào giảng dạy thêm những giáo trình hỗ trợ phù hợp với mục tiêu khóa học nhằm giúp tăng cường kĩ năng."
      }
    ],
    rightItems: [
      {
        title: "HỖ TRỢ THỦ TỤC DU HỌC",
        description:
          "Bên cạnh giáo trình chính được chọn lọc từ những giáo trình mới và tốt nhất hiện nay, trung tâm còn đưa vào giảng dạy thêm những giáo trình hỗ trợ phù hợp với mục tiêu khóa học nhằm giúp tăng cường kĩ năng."
      },
      {
        title: "ĐÀO TẠO ĐÚNG NHU CẦU",
        description:
          "Bên cạnh giáo trình chính được chọn lọc từ những giáo trình mới và tốt nhất hiện nay, trung tâm còn đưa vào giảng dạy thêm những giáo trình hỗ trợ phù hợp với mục tiêu khóa học nhằm giúp tăng cường kĩ năng."
      }
    ]
  },
  languageSchools: {
    bannerImage:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    bannerCaption: "TẠI SAO NÊN HỌC TIẾNG NHẬT?",
    schools: [
      {
        id: "ls-1",
        name: 'TIUJ – TRƯỜNG NHẬT NGỮ "HOT" NHẤT THỦ ĐÔ TOKYO',
        summary:
          "TIUJ – Hay còn được biết đến với tên Học viện Nhật ngữ trực thuộc Đại học Quốc tế Tokyo với cơ sở vật chất hiện đại.",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "ls-2",
        name: "TUYỂN SINH TRƯỜNG NHẬT NGỮ SENDAGAYA – TOKYO",
        summary:
          "Trường Nhật ngữ Sendagaya là một trong những trường Nhật ngữ lâu đời tại Nhật Bản có tỉ lệ đỗ Đại học cao nhất.",
        image:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  testimonials: [
    {
      id: "vn-t1",
      author: "Minh Thư (Du học sinh Tokyo)",
      role: "Học bổng JASSO Kỳ Tháng 4",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Trước khi tìm đến du học Việt Nhật Edu, tôi cũng tham khảo và đã đi qua rất nhiều đơn vị tư vấn du học khác nhau. Nhưng phần lớn họ đều có chi phí khá cao, một số đơn vị có giá thành thấp nhưng dịch vụ rất kém chất lượng. Riêng ở đây thì tôi nhận thấy được giá trị giữa dịch vụ mang lại và chi phí bỏ ra là tương đối hợp lý cũng như những thắc mắc về vấn đề du học Nhật Bản của tôi được giải đáp rất cụ thể. Đó là lý do mà tôi chọn Việt Nhật Edu để làm nơi tư vấn du học cho con tôi. Chúc công ty ngày một phát triển."
    }
  ],
  news: [
    {
      id: "vn-n1",
      title: "Danh sách câu hỏi phỏng vấn của Cục xuất nhập cảnh Nhật Bản",
      date: "15/09/2025",
      excerpt:
        "Trả lời phỏng vấn của Cục xuất nhập cảnh (XNC) Nhật Bản là bước rất quan trọng quyết định tỉ lệ cấp COE và Visa...",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vn-n2",
      title: "Điều kiện du học Nhật Bản mới nhất dành cho học sinh THPT",
      date: "10/09/2025",
      excerpt:
        "I – ĐIỀU KIỆN DU HỌC NHẬT BẢN CHƯƠNG TRÌNH THÔNG THƯỜNG: Tốt nghiệp THPT, điểm trung bình học bạ từ 6.5 trở lên...",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vn-n3",
      title: "Hướng dẫn làm thủ tục nhập cảnh và đăng ký thẻ ngoại kiều tại Nhật Bản",
      date: "05/09/2025",
      excerpt:
        "Thủ tục nhập cảnh vào Nhật Bản tại sân bay Narita, Haneda hoặc Kansai và xin giấy phép làm thêm 28h/tuần...",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "vn-n4",
      title: "Những điều nên làm khi mới sang Nhật để hòa nhập nhanh nhất",
      date: "01/09/2025",
      excerpt:
        "Đã sang đến Nhật, gia đình các bạn tại Việt Nam hẳn đang rất mong ngóng tin tức. Hãy hoàn tất đăng ký địa chỉ cư trú...",
      image:
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
