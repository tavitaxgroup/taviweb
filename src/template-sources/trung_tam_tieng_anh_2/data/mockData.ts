import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh2Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  schedule: string;
  tuition: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface TrungTamTiengAnh2Benefit {
  id: string;
  icon: "document" | "award" | "timer" | "teacher" | "review" | "monitor";
  title: string;
  description: string;
}

export interface TrungTamTiengAnh2Activity {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface TrungTamTiengAnh2ScheduleItem {
  id: string;
  courseName: string;
  code: string;
  campus: string;
  days: string;
  time: string;
  startDate: string;
  slotsLeft: number;
}

export interface TrungTamTiengAnh2Data extends ClonedTemplateBaseData {
  actionBarItems: Array<{
    id: string;
    label: string;
    target: string;
  }>;
  aboutSection: {
    brandHeading: string;
    subHeading: string;
    illustrationImage: string;
    ctaText: string;
  };
  benefits: TrungTamTiengAnh2Benefit[];
  courses: TrungTamTiengAnh2Course[];
  activities: TrungTamTiengAnh2Activity[];
  schedules: TrungTamTiengAnh2ScheduleItem[];
  campuses: Array<{
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
  }>;
  workingHoursList: Array<{
    days: string;
    hours: string;
  }>;
}

export const trungTamTiengAnh2DefaultData: TrungTamTiengAnh2Data = {
  business: {
    name: "Anh Ngữ New York",
    phone: ["0909 126 922", "028 3868 7999"],
    email: ["tuyensinh@newyorkenglish.edu.vn", "daotao@newyorkenglish.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 08:00 - 21:00 | Thứ 7 - CN: 09:00 - 21:00",
    rating: 4.9,
    reviewCount: 1420,
    aboutTitle: "Chúng tôi là ai",
    aboutText: [
      "Ngay từ khoảnh khắc bạn quyết định chinh phục tiếng Anh, việc lựa chọn một môi trường học tập chuẩn quốc tế đóng vai trò quyết định. Tại Anh Ngữ New York, chúng tôi thiết kế lộ trình cá nhân hóa giúp học viên xóa bỏ tâm lý sợ sai, rèn luyện phản xạ giao tiếp tự nhiên và bứt phá điểm số IELTS, TOEIC trong thời gian ngắn nhất.",
      "Với phương pháp đào tạo Quick Reaction độc quyền kết hợp đội ngũ giảng viên 100% có chứng chỉ TESOL, CELTA quốc tế, hàng chục ngàn sinh viên và người đi làm đã tự tin sử dụng tiếng Anh như ngôn ngữ thứ hai trong học tập cũng như môi trường doanh nghiệp đa quốc gia."
    ],
  },
  hero: {
    eyebrow: "SMART ENGLISH CENTER",
    title: "Làm sao để luyện nói tiếng Anh giao tiếp mỗi ngày hiệu quả?",
    subtitle:
      "Khám phá phương pháp phản xạ tự nhiên Quick Reaction cùng 100% giáo viên bản ngữ giàu kinh nghiệm. Xóa bỏ rào cản ngôn ngữ, chuẩn hóa phát âm IPA và tự tin thuyết trình tiếng Anh chỉ sau 8 tuần học tập.",
    ctaText: "Xem thêm",
    ctaLink: "#khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
  },
  actionBarItems: [
    { id: "act-1", label: "TIẾNG ANH GIAO TIẾP", target: "#khoa-hoc" },
    { id: "act-2", label: "LUYỆN THI IELTS, TOEIC", target: "#khoa-hoc" },
    { id: "act-3", label: "LỊCH KHAI GIẢNG", target: "#lich-khai-giang" },
    { id: "act-4", label: "BÍ QUYẾT HỌC TIẾNG ANH", target: "#hoat-dong" },
  ],
  aboutSection: {
    brandHeading: "Anh ngữ New York",
    subHeading: "Chúng tôi là ai",
    illustrationImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    ctaText: "Xem thêm",
  },
  benefits: [
    {
      id: "ben-1",
      icon: "document",
      title: "Các quyền lợi hấp dẫn",
      description:
        "Học thử miễn phí 2 buổi trải nghiệm thực tế, kiểm tra trình độ 4 kỹ năng 1-1 cùng chuyên gia và hỗ trợ bảo lưu, chuyển ca học linh hoạt.",
    },
    {
      id: "ben-2",
      icon: "award",
      title: "Cam kết chất lượng",
      description:
        "Cam kết chuẩn đầu ra bằng văn bản theo khung tham chiếu châu Âu CEFR, Cambridge và mục tiêu điểm số IELTS/TOEIC quốc tế.",
    },
    {
      id: "ben-3",
      icon: "timer",
      title: "Phương pháp Quick Reaction",
      description:
        "Phương pháp phản xạ giao tiếp 100% cùng giáo viên bản ngữ giúp học viên suy nghĩ và bật nói tiếng Anh tự nhiên không cần dịch ngầm.",
    },
    {
      id: "ben-4",
      icon: "teacher",
      title: "Đội ngũ giảng viên chuyên nghiệp",
      description:
        "100% giảng viên bản ngữ và Việt Nam tận tâm, tốt nghiệp đại học danh tiếng và sở hữu chứng chỉ giảng dạy quốc tế TESOL, CELTA.",
    },
    {
      id: "ben-5",
      icon: "review",
      title: "Cảm nhận học viên",
      description:
        "Hơn 15.000 học viên tự tin giao tiếp, chinh phục học bổng du học và thăng tiến vượt bậc tại các tập đoàn đa quốc gia hàng đầu.",
    },
    {
      id: "ben-6",
      icon: "monitor",
      title: "Cơ sở vật chất hiện đại",
      description:
        "Phòng học tương tác thông minh chuẩn quốc tế, thư viện học liệu số phong phú và khu vực English Zone thực hành giao tiếp mỗi ngày.",
    },
  ],
  courses: [
    {
      id: "course-1",
      title: "Tiếng Anh Giao Tiếp Phản Xạ Cho Người Đi Làm",
      category: "Giao tiếp",
      level: "Cơ bản - Nâng cao",
      duration: "10 tuần (30 buổi)",
      schedule: "Tối 2-4-6 hoặc 3-5-7 (18:30 - 20:30)",
      tuition: "3.900.000đ / khóa",
      description:
        "Làm chủ ngữ âm chuẩn IPA, thực hành hội thoại công sở, đàm phán thương mại, viết email chuyên nghiệp và thuyết trình tự tin trước đám đông.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "100% thời lượng thực hành nghe nói phản xạ trên lớp",
        "Sửa lỗi phát âm chi tiết từng âm vị cùng giáo viên bản ngữ",
        "Tặng kèm thẻ tham gia CLB English Coffee cuối tuần miễn phí",
      ],
    },
    {
      id: "course-2",
      title: "Luyện Thi IELTS Học Thuật Cam Kết Đầu Ra 6.5 - 8.0+",
      category: "IELTS & TOEIC",
      level: "Foundation - Intensive",
      duration: "12 tuần (36 buổi)",
      schedule: "Tối 2-4-6 hoặc Thứ 7 - CN",
      tuition: "5.400.000đ / khóa",
      description:
        "Chiến thuật xử lý toàn diện 4 kỹ năng Listening, Reading, Writing, Speaking theo bộ đề thi thật mới nhất của IDP & British Council.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Chấm chữa bài Writing & Speaking 1-1 không giới hạn",
        "Thi thử phòng máy chuẩn quốc tế định kỳ 2 tuần/lần",
        "Cam kết đầu ra bằng hợp đồng đào tạo, học lại miễn phí nếu chưa đạt",
      ],
    },
    {
      id: "course-3",
      title: "Tiếng Anh Thiếu Nhi & Thiếu Niên Chuẩn Cambridge",
      category: "Thiếu nhi",
      level: "Starters - Movers - Flyers - KET/PET",
      duration: "12 tuần (24 buổi)",
      schedule: "Thứ 7 & Chủ nhật (08:30 - 10:30 / 15:00 - 17:00)",
      tuition: "3.600.000đ / khóa",
      description:
        "Khơi dậy niềm đam mê ngôn ngữ tự nhiên cho trẻ từ 6-15 tuổi thông qua dự án sáng tạo, trò chơi tương tác và giáo trình chuẩn Cambridge Quốc tế.",
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
      highlights: [
        "Phát triển đồng đều tư duy ngôn ngữ, kỹ năng thuyết trình và làm việc nhóm",
        "Sổ liên lạc điện tử cập nhật video phát âm của bé sau mỗi buổi học",
        "Luyện thi chứng chỉ Cambridge Starters, Movers, Flyers đạt khiên tối đa",
      ],
    },
  ],
  activities: [
    {
      id: "act-img-1",
      title: "Hoạt động ngoại khóa Summer English Camp",
      category: "Ngoại khóa",
      date: "15/05/2025",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-2",
      title: "Học viên thực hành giao tiếp tại hành lang English Zone",
      category: "Lớp học",
      date: "12/05/2025",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-3",
      title: "Lớp học tương tác cùng giáo viên bản ngữ Anh - Mỹ",
      category: "Lớp học",
      date: "10/05/2025",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-4",
      title: "Lễ vinh danh học viên đạt IELTS 7.5 - 8.5 xuất sắc",
      category: "Sự kiện",
      date: "08/05/2025",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-5",
      title: "Giờ học sôi nổi của các bé khối Cambridge Flyers",
      category: "Thiếu nhi",
      date: "05/05/2025",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-6",
      title: "Phòng Lab luyện nghe & thi thử IELTS trên máy tính",
      category: "Cơ sở vật chất",
      date: "02/05/2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-7",
      title: "Hướng dẫn học viên cá nhân hóa lộ trình luyện thi",
      category: "Tư vấn",
      date: "29/04/2025",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-8",
      title: "Kỳ thi đánh giá năng lực định kỳ chuẩn Cambridge",
      category: "Kiểm tra",
      date: "25/04/2025",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-9",
      title: "Câu lạc bộ tiếng Anh cuối tuần New York Speaking Club",
      category: "CLB Tiếng Anh",
      date: "21/04/2025",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-10",
      title: "Ứng dụng học tập thông minh tích hợp AI luyện phát âm",
      category: "Công nghệ",
      date: "18/04/2025",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-11",
      title: "Workshop kỹ năng viết CV và phỏng vấn bằng tiếng Anh",
      category: "Hội thảo",
      date: "14/04/2025",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "act-img-12",
      title: "Góc tự học và thảo luận nhóm tại thư viện trung tâm",
      category: "Thư viện",
      date: "10/04/2025",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
  ],
  schedules: [
    {
      id: "sch-1",
      courseName: "Tiếng Anh Giao Tiếp Phản Xạ Quick Reaction",
      code: "QR-205",
      campus: "Cơ sở 1 - Quận 11",
      days: "Thứ 2 - 4 - 6",
      time: "18:30 - 20:00",
      startDate: "28/05/2025",
      slotsLeft: 4,
    },
    {
      id: "sch-2",
      courseName: "Luyện Thi IELTS Intensive 6.5+",
      code: "IE-65B",
      campus: "Cơ sở 1 - Quận 11",
      days: "Thứ 3 - 5 - 7",
      time: "19:00 - 21:00",
      startDate: "30/05/2025",
      slotsLeft: 3,
    },
    {
      id: "sch-3",
      courseName: "Luyện Thi TOEIC Cấp Tốc 750+",
      code: "TO-75A",
      campus: "Cơ sở 2 - Quận 3",
      days: "Thứ 2 - 4 - 6",
      time: "18:00 - 19:30",
      startDate: "02/06/2025",
      slotsLeft: 5,
    },
    {
      id: "sch-4",
      courseName: "Tiếng Anh Thiếu Nhi Cambridge Movers",
      code: "CB-MOV",
      campus: "Cơ sở 2 - Quận 3",
      days: "Thứ 7 - Chủ nhật",
      time: "09:00 - 11:00",
      startDate: "01/06/2025",
      slotsLeft: 6,
    },
  ],
  campuses: [
    {
      id: "campus-1",
      name: "CƠ SỞ 1",
      address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
      phone: "(+84) 909 126 922",
      email: "tuyensinh@newyorkenglish.edu.vn",
    },
    {
      id: "campus-2",
      name: "CƠ SỞ 2",
      address: "215 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, TP.HCM",
      phone: "(+84) 28 3868 7999",
      email: "coso2@newyorkenglish.edu.vn",
    },
  ],
  workingHoursList: [
    { days: "Thứ hai - thứ sáu", hours: "08:00am - 21:00pm" },
    { days: "Thứ bảy - Chủ nhật", hours: "09:00am - 21:00pm" },
  ],
};
