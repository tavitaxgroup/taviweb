import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym8Package {
  id: string;
  name: string;
  description: string;
  price: string;
  benefits: string[];
  theme: "silver" | "gold" | "royal";
  featured?: boolean;
}

export interface PhongGym8Data extends ClonedTemplateBaseData {
  blackBarText: string;
  blackBarCta: string;
  courseSectionTitle: string;
  courseSubheading: string;
  courseParagraphs: string[];
  courseImage: string;
  expertBannerBg: string;
  expertTitle: string;
  expertSubtitle: string;
  expertCta: string;
  packages: PhongGym8Package[];
  contactBgImage: string;
  contactSubtitle: string;
}

export const phongGym8DefaultData: PhongGym8Data = {
  business: {
    name: "MONA GOLF",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Mở cửa 7 ngày một tuần (05:30 - 22:00)",
    rating: 4.9,
    reviewCount: 210,
    aboutTitle: "Câu lạc bộ Golf & Thể Hình Chuyên Nghiệp",
    aboutText: [
      "Mona Golf kết hợp học viện đào tạo kỹ thuật Golf chuẩn PGA cùng trung tâm huấn luyện thể lực chuyên sâu giúp hội viên tối ưu sức mạnh cú đánh và sự dẻo dai."
    ]
  },
  hero: {
    eyebrow: "TRUNG TÂM THỂ HÌNH & CLB GOLF BRENTWOOD",
    title: "Hãy đăng ký thành viên tham gia ngay hôm nay",
    subtitle: "Trải nghiệm sân tập tiêu chuẩn quốc tế và huấn luyện viên chuyên nghiệp",
    ctaText: "Sự kiện",
    ctaLink: "#khoa-hoc",
    secondaryCtaText: "Thành viên",
    secondaryCtaLink: "#cac-goi-dao-tao",
    backgroundImage:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=85"
  },
  blackBarText: "Hãy đến với câu lạc bộ Golf chuyên nghiệp Mona",
  blackBarCta: "GIỚI THIỆU",
  courseSectionTitle: "Khóa học",
  courseSubheading: "Tham gia các khóa đào tạo chơi Golf chuyên nghiệp",
  courseParagraphs: [
    "Chương trình đào tạo tại học viện được thiết kế bài bản từ cấp độ nhập môn làm quen tư thế cầm gậy, xoay hông chuẩn sinh cơ học cho đến kỹ thuật kiểm soát quỹ đạo bóng chuyên sâu trên sân cỏ thực tế.",
    "Bên cạnh giờ học trên sân, học viên còn được rèn luyện các bài tập thể hình bổ trợ cột sống, cơ lõi và khớp vai tại phòng Gym tiêu chuẩn quốc tế, giúp phòng ngừa chấn thương và gia tăng khoảng cách phát bóng."
  ],
  courseImage:
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=85",
  expertBannerBg:
    "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1920&q=80",
  expertTitle: "Tham gia đào tạo cùng với các chuyên gia",
  expertSubtitle:
    "Đội ngũ huấn luyện viên chứng chỉ quốc tế trực tiếp phân tích video chuyển động tốc độ cao và hiệu chỉnh từng cú Swing cho học viên.",
  expertCta: "TÌM HIỂU NGAY",
  packages: [
    {
      id: "pkg-silver",
      name: "GÓI BẠC",
      description:
        "Phù hợp cho người mới bắt đầu làm quen bộ môn Golf và rèn luyện thể lực nền tảng mỗi tuần.",
      price: "4.000.000vnđ",
      benefits: [
        "Thẻ Golf không giới hạn",
        "Câu lạc bộ 24 giờ",
        "Sự kiện giảm giá",
        "Thẻ quà tặng 500.000đ"
      ],
      theme: "silver",
      featured: false
    },
    {
      id: "pkg-gold",
      name: "GÓI VÀNG",
      description:
        "Lựa chọn được yêu thích nhất dành cho hội viên nâng cao kỹ thuật và tham gia giải đấu định kỳ.",
      price: "6.000.000vnđ",
      benefits: [
        "Thẻ Golf không giới hạn",
        "Câu lạc bộ 24 giờ",
        "Sự kiện giảm giá",
        "Giải đấu hàng tháng",
        "Thẻ quà tặng 500.000đ"
      ],
      theme: "gold",
      featured: true
    },
    {
      id: "pkg-royal",
      name: "GÓI ROYAL",
      description:
        "Đặc quyền huấn luyện 1-kèm-1 cùng chuyên gia PGA và sử dụng trọn gói phòng tập 3D VIP.",
      price: "7.000.000vnđ",
      benefits: [
        "Thẻ Golf không giới hạn",
        "Câu lạc bộ 24 giờ",
        "Sự kiện giảm giá",
        "Thẻ quà tặng 500.000đ"
      ],
      theme: "royal",
      featured: false
    }
  ],
  contactBgImage:
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=80",
  contactSubtitle: "Tham gia với chúng tôi tại câu lạc bộ bảy ngày một tuần"
};

export const defaultData = phongGym8DefaultData;
export default phongGym8DefaultData;
