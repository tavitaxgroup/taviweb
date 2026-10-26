import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  headerColor: string;
  side: "left" | "right";
  bullets: string[];
}

export interface TrungTamTiengAnh15Data extends ClonedTemplateBaseData {
  heroStats: Array<{ label: string; value: string }>;
  visionQuote: string;
  visionAuthor: string;
  visionImage: string;
  timeline: TimelineMilestone[];
}

export const trungTamTiengAnh15DefaultData: TrungTamTiengAnh15Data = {
  business: {
    name: "New Ocean Education",
    phone: ["1900 636 648", "0964 562 233"],
    email: ["info@newocean.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 10000,
    aboutTitle: "TẦM NHÌN VÀ SỨ MỆNH",
    aboutText: [
      "Sử dụng khẩu hiệu “Chắp cánh ước mơ”, Tổ chức Giáo dục Quốc tế New Ocean xác định sứ mệnh là cầu nối vững chắc với các nền giáo dục tiên tiến hiện đại, mở cánh cửa hội nhập nền văn minh thế giới.",
      "Chúng tôi đồng hành đào tạo ngoại ngữ học thuật IELTS/PTE và hoạch định lộ trình du học – săn học bổng toàn diện cho thế hệ trẻ Việt Nam vươn tầm quốc tế."
    ]
  },
  hero: {
    eyebrow: "TỔ CHỨC GIÁO DỤC QUỐC TẾ & NGOẠI NGỮ",
    title: "GIỚI THIỆU CHUNG",
    subtitle:
      "Tổ chức giáo dục quốc tế New Ocean thành lập ngày 17/01/2007 đến nay đã hoạt động liên tục hơn 18 năm qua. New Ocean hiện có hệ thống chi nhánh tại Hà Nội và TP. Hồ Chí Minh với quy mô hơn 60 chuyên viên & giảng viên.",
    ctaText: "ĐĂNG KÝ TƯ VẤN",
    ctaLink: "#dang-ky-tu-van",
    backgroundImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85"
  },
  heroStats: [
    { label: "Thành lập", value: "2007" },
    { label: "Nhân sự", value: "60+" },
    { label: "Chi nhánh", value: "2" }
  ],
  services: [
    {
      id: "no-s1",
      title: "ĐÀO TẠO IELTS & PTE",
      description:
        "Lộ trình luyện thi chứng chỉ quốc tế IELTS 6.5 - 8.0+ và PTE Academic tinh gọn cùng giảng viên 8.5 IELTS.",
      icon: "grad"
    },
    {
      id: "no-s2",
      title: "TƯ VẤN DU HỌC 12 QUỐC GIA",
      description:
        "Hoạch định lộ trình chọn trường, chọn ngành tại Úc, Mỹ, Canada, Anh, Thụy Sĩ, Hà Lan và Singapore.",
      icon: "info"
    },
    {
      id: "no-s3",
      title: "SĂN HỌC BỔNG 30% - 100%",
      description:
        "Hướng dẫn viết luận Personal Statement, hoàn thiện hồ sơ ngoại khóa và luyện phỏng vấn học bổng trực tiếp.",
      icon: "home"
    },
    {
      id: "no-s4",
      title: "TIẾNG ANH HỌC THUẬT",
      description:
        "Trang bị kỹ năng viết tiểu luận, thuyết trình và nghiên cứu bằng tiếng Anh trước khi nhập học đại học quốc tế.",
      icon: "book"
    },
    {
      id: "no-s5",
      title: "XỬ LÝ HỒ SƠ VISA",
      description:
        "Tư vấn chứng minh tài chính minh bạch và luyện phỏng vấn Visa chuyên sâu với tỷ lệ đậu trên 98%.",
      icon: "user"
    },
    {
      id: "no-s6",
      title: "DỊCH VỤ ĐỊNH CƯ & VIỆC LÀM",
      description:
        "Đồng hành hỗ trợ sinh viên tìm kiếm nhà ở, gia hạn visa ở lại làm việc và định cư sau tốt nghiệp.",
      icon: "globe"
    }
  ],
  stats: [
    { id: "st-1", number: "14+", title: "Năm kinh nghiệm" },
    { id: "st-2", number: "12+", title: "Quốc gia du học" },
    { id: "st-3", number: "900+", title: "Liên kết trường" },
    { id: "st-4", number: "10000+", title: "Hồ sơ thành công" }
  ],
  visionQuote:
    "Trở thành Tổ chức giáo dục toàn cầu, đại diện uy tín hàng đầu cho giáo dục quốc tế và đào tạo ngoại ngữ tại Việt Nam",
  visionAuthor: "CEO – LÊ HOÀNG LAN",
  visionImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
  team: [
    {
      id: "ld-1",
      name: "Bà Lê Hoàng Lan",
      position: "CEO • Nhà Sáng Lập",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ld-2",
      name: "Bà Hoàng Vĩnh Hường",
      position: "PGĐ Điều Hành",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ld-3",
      name: "Ông Phạm Duy Quế",
      position: "PGĐ Marketing",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ld-4",
      name: "Bà Phạm Nguyên Ly",
      position: "PGĐ Tư Vấn Giáo Dục",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ld-5",
      name: "Bà Trần Thị Phương",
      position: "PGĐ Hồ Sơ & Học Bổng",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ld-6",
      name: "Mr. David Mai",
      position: "PGĐ Đối Ngoại Quốc Tế",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    }
  ],
  timeline: [
    {
      id: "tl-1",
      year: "Năm 2007",
      title: "Thành lập công ty",
      headerColor: "bg-[#1a3cd4] text-white",
      side: "right",
      bullets: [
        "Thành lập Công ty Cổ phần Đầu tư Tân Đại Dương (New Ocean)",
        "Lĩnh vực hoạt động chính: Đào tạo Ngoại ngữ, Du học & Định cư",
        "Thiết lập mạng lưới đối tác trường đại học tại Úc và Anh Quốc",
        "Tổ chức thành công Hội thảo Học bổng Quốc tế đầu tiên tại Hà Nội"
      ]
    },
    {
      id: "tl-2",
      year: "Năm 2008",
      title: "Mở rộng thị trường đào tạo",
      headerColor: "bg-[#8bc49e] text-white",
      side: "left",
      bullets: [
        "Tổ chức chuỗi Ngày hội Tư vấn Ngoại ngữ & Du học tại Hải Phòng, Quảng Ninh, Nam Định",
        "Khai giảng các khóa luyện thi IELTS học thuật cấp tốc cam kết đầu ra",
        "Trao tặng hơn 150 suất học bổng du học trị giá lên đến 70% học phí"
      ]
    },
    {
      id: "tl-3",
      year: "Năm 2009",
      title: "Thêm chi nhánh tại TP.HCM",
      headerColor: "bg-[#f5c230] text-white",
      side: "right",
      bullets: [
        "Khai trương trụ sở chi nhánh tại TP. Hồ Chí Minh phục vụ học viên khu vực phía Nam",
        "Tham gia các sự kiện triển lãm giáo dục quốc tế Úc, New Zealand và Bắc Mỹ",
        "Đạt chứng nhận Đại diện Tuyển sinh Xuất sắc từ các Đại sứ quán"
      ]
    },
    {
      id: "tl-4",
      year: "Năm 2017 – 2025",
      title: "Kỷ niệm thành lập & Vươn tầm quốc tế",
      headerColor: "bg-[#ea5b50] text-white",
      side: "left",
      bullets: [
        "Nâng cấp nhận diện thương hiệu Tổ chức Giáo dục Quốc tế New Ocean",
        "Mở rộng hệ sinh thái luyện thi IELTS/PTE trực tuyến và trực tiếp",
        "Cán mốc 10.000+ hồ sơ học viên đạt chứng chỉ và Visa du học thành công"
      ]
    }
  ]
};
