import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh8Data extends ClonedTemplateBaseData {
  visionPillars: Array<{
    id: string;
    title: string;
    description: string;
    theme: "red" | "blue";
    icon: "vision" | "mission" | "motto";
  }>;
  popularMajors: Array<{
    id: string;
    title: string;
    image: string;
    salaryRange: string;
  }>;
  promoBanner: {
    benefits: string[];
    salaryHighlight: string;
    mainTitle: string;
    toriiImage: string;
    studentImage: string;
  };
  partnerAcademies: Array<{
    id: string;
    name: string;
    location: string;
    image: string;
    isEmblem?: boolean;
  }>;
  admissionsSection: {
    featuredCard: {
      title: string;
      image: string;
    };
    sideNotices: Array<{
      id: string;
      title: string;
      excerpt: string;
      image: string;
    }>;
  };
}

export const trungTamTiengAnh8DefaultData: TrungTamTiengAnh8Data = {
  business: {
    name: "Nhật Anh Edu",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["tuvan@nhatanhedu.vn", "info@nhatanhedu.vn"],
    address: "319 C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 2890,
    experienceYears: "14+ Năm",
    aboutTitle: "HỌC VIỆN NGÔN NGỮ & TƯ VẤN HỌC BỔNG DU HỌC NHẬT ANH EDU",
    aboutText: [
      "Cầu nối giúp học sinh, sinh viên Việt Nam tiếp cận các chương trình du học Nhật Bản uy tín và chất lượng tại các trường Nhật Bản, đất nước mặt trời mọc, xứ sở hoa anh đào."
    ],
    highlights: [
      "Miễn phí 100% phí tư vấn & dịch thuật hồ sơ du học",
      "Đảm bảo giới thiệu việc làm thêm tại Nhật > 25 triệu VNĐ/tháng",
      "Liên kết trực tiếp Học viện Quốc tế ATYS, Mito, ECC Nagoya",
      "Tỷ lệ đạt COE & Visa du học Nhật Bản cao hàng đầu"
    ]
  },
  hero: {
    eyebrow: "Chắp cánh ước mơ !",
    title: "DU HỌC NHẬT BẢN",
    subtitle: "Miễn phí làm hồ sơ du học • Đảm bảo công việc tại Nhật",
    description:
      "Học viện Ngôn ngữ & Tư vấn Học bổng Du học Nhật Anh Edu đồng hành cùng học sinh Việt Nam chinh phục cánh cửa các trường Đại học danh giá tại Tokyo, Kyoto, Osaka và Nagoya.",
    ctaText: "GỌI NGAY ĐỂ ĐƯỢC TƯ VẤN TỐT NHẤT",
    ctaLink: "#dang-ky-tu-van",
    backgroundImage:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
    ]
  },
  visionPillars: [
    {
      id: "vp-1",
      title: "Tầm nhìn",
      description:
        "Cầu nối giúp học sinh, sinh viên Việt Nam tiếp cận các chương trình du học Nhật Bản uy tín và chất lượng tại các trường Nhật Bản, đất nước mặt trời mọc, xứ sở hoa anh đào, xứ phù tang.",
      theme: "red",
      icon: "vision"
    },
    {
      id: "vp-2",
      title: "Sứ mệnh",
      description:
        "Cung cấp dịch vụ du học Nhật Bản chất lượng và hiệu quả, chi phí du học hợp lý, tỉ lệ đỗ visa du học cao, giúp học sinh, sinh viên yên tâm hoàn thành mục tiêu đặt ra trong thời gian ngắn nhất.",
      theme: "blue",
      icon: "mission"
    },
    {
      id: "vp-3",
      title: "Phương châm",
      description:
        "Định hướng tương lai giúp học sinh, sinh viên có thể học tập, quyết định ngành học cũng như lựa chọn công việc phù hợp sở thích, tiềm năng của bản thân trong quá trình du học tại Nhật Bản.",
      theme: "red",
      icon: "motto"
    }
  ],
  popularMajors: [
    {
      id: "mj-1",
      title: "Điều dưỡng",
      salaryRange: "Học bổng 100% học phí",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mj-2",
      title: "Công nghệ thông tin",
      salaryRange: "Cơ hội kỹ sư tại Tokyo",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mj-3",
      title: "Nhà hàng – Khách sạn",
      salaryRange: "Thực tập hưởng lương cao",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mj-4",
      title: "Cơ khí – Kỹ thuật ôtô",
      salaryRange: "Làm việc tại tập đoàn lớn",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mj-5",
      title: "Đầu bếp",
      salaryRange: "Ẩm thực Nhật Bản chuyên nghiệp",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mj-6",
      title: "Xây dựng",
      salaryRange: "Đầu ra việc làm 100%",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80"
    }
  ],
  services: [
    {
      id: "na-s1",
      title: "Du học Nhật Bản ngành Điều dưỡng",
      description: "Chương trình học bổng toàn phần miễn 100% học phí và ký túc xá."
    },
    {
      id: "na-s2",
      title: "Du học Nhật Bản ngành Công nghệ thông tin",
      description: "Đào tạo song ngữ Anh - Nhật và chuyển tiếp Đại học công nghệ hàng đầu."
    },
    {
      id: "na-s3",
      title: "Du học vừa học vừa làm tại Nhật Bản",
      description: "Hỗ trợ giới thiệu việc làm thêm thu nhập từ 25 triệu VNĐ/tháng."
    }
  ],
  promoBanner: {
    benefits: [
      "CHI PHÍ THẤP",
      "BẰNG QUỐC TẾ",
      "TỶ LỆ ĐẠT VISA CAO",
      "THỦ TỤC ĐƠN GIẢN"
    ],
    salaryHighlight: "LƯƠNG LÀM THÊM > 25tr VNĐ",
    mainTitle: "DU HỌC NHẬT BẢN",
    toriiImage:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    studentImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  partnerAcademies: [
    {
      id: "pa-1",
      name: "HỌC VIỆN QUỐC TẾ ATYS",
      location: "Tokyo, Nhật Bản",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
      isEmblem: true
    },
    {
      id: "pa-2",
      name: "Trường Nhật Ngữ Quốc Tế Mito",
      location: "Ibaraki, Nhật Bản",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pa-3",
      name: "Trường Nhật ngữ Utsunomiya Nikken",
      location: "Tochigi, Nhật Bản",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pa-4",
      name: "Trường Nhật ngữ ECC Nagoya",
      location: "Nagoya, Nhật Bản",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    }
  ],
  admissionsSection: {
    featuredCard: {
      title: "Tuyển sinh du học Nhật Bản kỳ tháng 7 & tháng 10",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    sideNotices: [
      {
        id: "sn-1",
        title: "THÔNG BÁO TUYỂN DU HỌC SINH VỪA HỌC VỪA LÀM TẠI NHẬT BẢN.",
        excerpt:
          "1. Điều kiện đăng ký: Tốt nghiệp THPT trở lên, tuổi từ 18 – 30, có nguyện vọng học tập và làm việc lâu dài tại Nhật Bản...",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "sn-2",
        title: "Tuyển 200 học sinh du học Nhật Bản kỳ mùa xuân & mùa thu",
        excerpt:
          "ĐỐI TƯỢNG TUYỂN SINH DU HỌC NHẬT BẢN KHÓA MỚI: Tất cả học sinh tốt nghiệp THPT, Cao đẳng, Đại học trên toàn quốc...",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  testimonials: [
    {
      id: "na-t1",
      author: "Hoàng Yến (Du học sinh Kyoto University)",
      role: "Học viên khóa N2 & Du học Nhật Bản",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Trước khi tìm đến du học Nhật Anh Edu, tôi cũng tham khảo và đã đi qua rất nhiều đơn vị tư vấn du học khác nhau. Nhưng phần lớn họ đều có chi phí khá cao, một số đơn vị có giá thành thấp nhưng dịch vụ rất kém chất lượng. Riêng ở đây thì tôi nhận thấy được giá trị giữa dịch vụ mang lại và chi phí bỏ ra là tương đối hợp lý cũng như những thắc mắc về vấn đề du học Nhật Bản của tôi được giải đáp rất cụ thể. Đó là lý do mà tôi chọn Nhật Anh Edu để làm nơi tư vấn du học cho con tôi. Chúc công ty ngày một phát triển."
    }
  ],
  news: [
    {
      id: "na-n1",
      title: "Danh sách câu hỏi phỏng vấn của Cục xuất nhập cảnh Nhật Bản",
      date: "18/09/2025",
      excerpt:
        "Trả lời phỏng vấn của Cục xuất nhập cảnh (XNC) Nhật Bản là bước rất quan trọng để xét duyệt tư cách lưu trú COE...",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "na-n2",
      title: "Điều kiện du học Nhật Bản mới nhất dành cho học sinh Việt Nam",
      date: "12/09/2025",
      excerpt:
        "I – ĐIỀU KIỆN DU HỌC NHẬT BẢN CHƯƠNG TRÌNH THÔNG THƯỜNG: Nam/nữ độ tuổi từ 18 - 30, đã tốt nghiệp THPT...",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "na-n3",
      title: "Hướng dẫn làm thủ tục nhập cảnh vào Nhật Bản tại sân bay",
      date: "06/09/2025",
      excerpt:
        "Thủ tục nhập cảnh vào Nhật Bản là thủ tục bắt buộc phải làm đối với toàn bộ tân du học sinh khi đặt chân tới sân bay...",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
