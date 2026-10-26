import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh9Data extends ClonedTemplateBaseData {
  heroYear: string;
  graduateImage: string;
  universityStats: Array<{
    id: string;
    value: string;
    label: string;
    icon: "users" | "globe" | "landmark" | "handshake";
  }>;
  missionQuote: string;
  faculties: Array<{
    id: string;
    name: string;
    image: string;
  }>;
  philosophyBanner: {
    statement: string;
    ctaLabel: string;
    backgroundImage: string;
  };
  lecturerReviews: Array<{
    id: string;
    name: string;
    role: string;
    avatar: string;
    quote: string;
  }>;
  admissionFormStudentImage: string;
  alumniReviews: Array<{
    id: string;
    name: string;
    role: string;
    avatar: string;
    quote: string;
  }>;
  footerGallery: string[];
}

export const trungTamTiengAnh9DefaultData: TrungTamTiengAnh9Data = {
  business: {
    name: "Đại học Global University",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["tuyensinh@globaluni.edu.vn", "info@globaluni.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:30 - 17:30",
    rating: 5.0,
    reviewCount: 5400,
    experienceYears: "20+ Năm",
    aboutTitle: "VỚI TRIẾT LÝ GIÁO DỤC HIỆN ĐẠI VÀ GẮN LIỀN VỚI THỰC TẾ",
    aboutText: [
      "Ở Đại học Global University, chương trình đào tạo được thiết kế theo tiêu chuẩn quốc tế QS Stars, giúp sinh viên nắm bắt và ghi nhớ được kiến thức chuyên môn, để sau này có thể áp dụng ngay vào công việc tại các tập đoàn đa quốc gia."
    ],
    highlights: [
      "100% sinh viên đi thực tập hưởng lương tại doanh nghiệp từ năm 3",
      "20% sinh viên làm việc tại Nhật Bản, Singapore, Đức và Hoa Kỳ",
      "Liên kết trao đổi học tập với 86 trường Đại học trên thế giới",
      "358 doanh nghiệp ký kết cam kết tuyển dụng sinh viên tốt nghiệp"
    ]
  },
  hero: {
    eyebrow: "TUYỂN SINH",
    title: "Liên thông",
    subtitle: "Cao đẳng - Đại học",
    description:
      "Chương trình đào tạo chuẩn quốc tế QS Stars chú trọng thực hành doanh nghiệp và trang bị song ngữ cho sinh viên.",
    ctaText: "ĐĂNG KÝ HỌC",
    ctaLink: "#dang-ky-xet-tuyen",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85"
  },
  heroYear: "2 0 2 5",
  graduateImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  universityStats: [
    {
      id: "us-1",
      value: "100%",
      label: "Đi làm từ năm 3",
      icon: "users"
    },
    {
      id: "us-2",
      value: "20%",
      label: "Sinh viên làm việc ở nước ngoài",
      icon: "globe"
    },
    {
      id: "us-3",
      value: "Liên kết",
      label: "86 trường ĐH trên thế giới",
      icon: "landmark"
    },
    {
      id: "us-4",
      value: "358 doanh nghiệp",
      label: "Hợp tác tuyển dụng trực tiếp",
      icon: "handshake"
    }
  ],
  missionQuote:
    "“Với mục tiêu sinh viên Đại học Global University ra trường có đủ khả năng làm việc tại bất cứ đâu trên thế giới”",
  faculties: [
    {
      id: "fac-1",
      name: "Công nghệ thông tin",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fac-2",
      name: "Kinh tế – Xã hội",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fac-3",
      name: "Ngôn ngữ",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fac-4",
      name: "Mỹ thuật",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  services: [
    {
      id: "gu-s1",
      title: "Công nghệ thông tin & Trí tuệ nhân tạo",
      description: "Chương trình kỹ sư phần mềm chuẩn quốc tế Microsoft & Aptech."
    },
    {
      id: "gu-s2",
      title: "Kinh tế – Quản trị kinh doanh quốc tế",
      description: "Thực tập trực tiếp tại mạng lưới 358 doanh nghiệp đối tác."
    },
    {
      id: "gu-s3",
      title: "Ngôn ngữ Anh - Nhật - Hàn thương mại",
      description: "Thành thạo 2 ngoại ngữ trước khi tốt nghiệp."
    },
    {
      id: "gu-s4",
      title: "Thiết kế Mỹ thuật số & Đa phương tiện",
      description: "Thực hành tại xưởng studio sáng tạo hiện đại."
    }
  ],
  philosophyBanner: {
    statement:
      "VỚI TRIẾT LÝ GIÁO DỤC HIỆN ĐẠI VÀ GẮN LIỀN VỚI THỰC TẾ, ĐẠI HỌC GLOBAL UNIVERSITY MONG MUỐN SINH VIÊN SẼ PHÁT HUY ĐƯỢC HẾT NHỮNG TỐ CHẤT VÀ THẾ MẠNH CỦA BẢN THÂN",
    ctaLabel: "ĐĂNG KÝ HỌC",
    backgroundImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80"
  },
  lecturerReviews: [
    {
      id: "lr-1",
      name: "ThS. Lê Minh Tâm",
      role: "Giảng viên Mỹ thuật",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      quote:
        "“Ở ĐH Global University, chương trình đào tạo được thiết kế theo tiêu chuẩn quốc tế, giúp sinh viên nắm bắt và ghi nhớ được kiến thức chuyên môn, để sau này có thể áp dụng được trong công việc. Cộng thêm việc các bạn sinh viên đều có 2 ngoại ngữ nên cơ hội có mức lương cao sau khi ra trường là rất lớn”"
    },
    {
      id: "lr-2",
      name: "TS. Nguyễn Hoàng Nam",
      role: "Giảng viên Công nghệ thông tin",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      quote:
        "“Ở ĐH Global University, chương trình đào tạo được thiết kế theo tiêu chuẩn quốc tế, giúp sinh viên nắm bắt và ghi nhớ được kiến thức chuyên môn, để sau này có thể áp dụng được trong công việc. Cộng thêm việc các bạn sinh viên đều có 2 ngoại ngữ nên cơ hội có mức lương cao sau khi ra trường là rất lớn”"
    },
    {
      id: "lr-3",
      name: "ThS. Trần Thu Thủy",
      role: "Giảng viên Ngoại ngữ",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      quote:
        "“Ở ĐH Global University, chương trình đào tạo được thiết kế theo tiêu chuẩn quốc tế, giúp sinh viên nắm bắt và ghi nhớ được kiến thức chuyên môn, để sau này có thể áp dụng được trong công việc. Cộng thêm việc các bạn sinh viên đều có 2 ngoại ngữ nên cơ hội có mức lương cao sau khi ra trường là rất lớn”"
    }
  ],
  admissionFormStudentImage:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=85",
  news: [
    {
      id: "gu-n1",
      title:
        "Dự án Start Up của cựu sinh viên giành giải cao nhất tại Ideas Show Apec",
      date: "20/09/2025",
      excerpt:
        "Vượt qua 39 đại diện đến từ Đài Loan, Hàn Quốc, Nhật Bản và Singapore, nhóm sinh viên khoa Công nghệ thông tin đã xuất sắc giành cúp vàng...",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "gu-n2",
      title: "“Trường học 4.0”: ai cũng biết nhưng hiểu thế nào thì mới đúng ?",
      date: "14/09/2025",
      excerpt:
        "Cuộc cách mạng công nghiệp 4.0 đặt ra thách thức ngành giáo dục đại học phải thay đổi phương pháp giảng dạy gắn liền với dự án thực tế...",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "gu-n3",
      title:
        "Giáo sư đại học hàng đầu Malaysia đến chia sẻ chuyên đề về IoT & AI",
      date: "08/09/2025",
      excerpt:
        "Ngày 26/3 tới đây, PGS.TS Mohd Haris từ trường đại học công nghệ đối tác sẽ có buổi hội thảo học thuật cùng sinh viên...",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
    }
  ],
  alumniReviews: [
    {
      id: "al-1",
      name: "Nguyễn Thảo Vy",
      role: "Sinh viên ngành Mỹ Thuật",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      quote:
        "“Ở ĐH Global University, chương trình đào tạo được thiết kế theo tiêu chuẩn quốc tế, giúp sinh viên nắm bắt và ghi nhớ được kiến thức chuyên môn, để sau này có thể áp dụng được trong công việc. Cộng thêm việc các bạn sinh viên đều có 2 ngoại ngữ nên cơ hội có mức lương cao sau khi ra trường là rất lớn”"
    },
    {
      id: "al-2",
      name: "Phạm Quốc Bảo",
      role: "Sinh viên ngành Kinh Tế",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      quote:
        "“Ở ĐH Global University, chương trình đào tạo được thiết kế theo tiêu chuẩn quốc tế, giúp sinh viên nắm bắt và ghi nhớ được kiến thức chuyên môn, để sau này có thể áp dụng được trong công việc. Cộng thêm việc các bạn sinh viên đều có 2 ngoại ngữ nên cơ hội có mức lương cao sau khi ra trường là rất lớn”"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80"
  ]
};
