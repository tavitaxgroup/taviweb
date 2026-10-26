import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface KidsStoreProduct {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  ageGroup: "infant" | "toddler" | "preschool";
  saleBadge?: boolean;
  rating: number;
  image: string;
}

export interface TrungTamTiengAnh20Data extends ClonedTemplateBaseData {
  stripCards: Array<{
    id: string;
    label: string;
    type: "image" | "color";
    bgColor?: string;
    image?: string;
    iconType?: "sun" | "cloud" | "rain";
  }>;
  colorBanners: Array<{
    id: string;
    title: string;
    subtitle: string;
    ctaText: string;
    bgColor: string;
    image: string;
    align: "left" | "right";
  }>;
  onlineStoreCategoriesLeft: string[];
  onlineStoreCategoriesRight: string[];
  classroomStrips: Array<{
    id: string;
    title: string;
    caption: string;
    image: string;
  }>;
  popularProducts: KidsStoreProduct[];
  galleryImages: string[];
  latestPosts: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
}

export const trungTamTiengAnh20DefaultData = {
  business: {
    name: "Trường Mầm Non & Anh Ngữ Năng Khiếu KidsMona Sport",
    phone: ["076 922 0162", "1900 636 648"],
    email: ["mon@mona.media", "tuyensinh@kidsmona.edu.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:00 - 18:00",
    rating: 5.0,
    reviewCount: 640,
    aboutTitle: "KHÔNG GIAN HỌC TẬP & VẬN ĐỘNG SONG NGỮ CHO TRẺ",
    aboutText: [
      "KidsMona Sport kết hợp giáo dục mầm non chuẩn quốc tế, tiếng Anh phản xạ tự nhiên và hệ thống học cụ thông minh giúp bé phát triển toàn diện thể chất lẫn trí tuệ."
    ],
    highlights: [
      "Chương trình vừa học vừa chơi kích thích tư duy sáng tạo mỗi ngày",
      "Đội ngũ giáo viên bản ngữ và sư phạm mầm non đào tạo bài bản",
      "Cửa hàng học cụ, sách truyện song ngữ và đồ dùng an toàn chính hãng"
    ]
  },
  hero: {
    eyebrow: "Làm cho con bạn hạnh phúc hơn",
    title: "Trải nghiệm không gian học tập thú vị",
    subtitle: "Đăng kí nhập học",
    description:
      "Đặt câu hỏi hoặc gọi ngay cho chúng tôi HOTLINE : 1900 636 648 để tham quan lớp học thực tế và nhận ưu đãi học phí.",
    ctaText: "Đăng kí nhập học",
    ctaLink: "#enroll-section",
    backgroundImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=85"
  },
  stripCards: [
    {
      id: "st-1",
      label: "Vừa học vừa chơi",
      type: "image",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-2",
      label: "Thỏa sức sáng tạo",
      type: "color",
      bgColor: "#f3c623",
      iconType: "sun"
    },
    {
      id: "st-3",
      label: "Đào tạo chất lượng",
      type: "image",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-4",
      label: "Giáo viên bài bản",
      type: "color",
      bgColor: "#f06292",
      iconType: "cloud"
    },
    {
      id: "st-5",
      label: "Dinh dưỡng hợp lý",
      type: "image",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "st-6",
      label: "Sức khỏe dẻo dai",
      type: "color",
      bgColor: "#00acc1",
      iconType: "rain"
    }
  ],
  colorBanners: [
    {
      id: "cb-1",
      title: "Chọn danh mục sản phẩm của chúng tôi",
      subtitle:
        "Học cụ thông minh, khối gỗ lắp ráp Montessori và bộ thẻ học từ vựng tiếng Anh cho bé từ 1 - 6 tuổi.",
      ctaText: "CHỌN LỚP HỌC NGAY",
      bgColor: "#00a3b4",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      align: "right"
    },
    {
      id: "cb-2",
      title: "Khám phá sản phẩm",
      subtitle:
        "Đồ chơi vận động thể chất, xe mô hình gỗ an toàn và bộ dụng cụ mỹ thuật kích thích não bộ.",
      ctaText: "CHỌN LỚP HỌC NGAY",
      bgColor: "#e6004c",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
      align: "left"
    },
    {
      id: "cb-3",
      title: "Tùy chỉnh giỏ hàng của bạn",
      subtitle:
        "Combo trọn bộ đồ dùng nhập học mầm non song ngữ, Rubik tư duy logic và học liệu luyện phát âm Phonics.",
      ctaText: "CHỌN LỚP HỌC NGAY",
      bgColor: "#95b851",
      image:
        "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=800&q=80",
      align: "right"
    }
  ],
  onlineStoreCategoriesLeft: [
    "Sách và Truyện tranh",
    "CD bài hát mẫu giáo",
    "Balô đi học",
    "Bình đựng nước",
    "Giày và sandal"
  ],
  onlineStoreCategoriesRight: [
    "Hộp hình học",
    "Bút và Bút chì",
    "Tẩy",
    "Cà vạt và vớ",
    "Váy và váy liền thân"
  ],
  classroomStrips: [
    {
      id: "cs-1",
      title: "Giờ học Mỹ thuật & Sáng tạo Sắc màu",
      caption: "Rèn luyện vận động tinh và khả năng biểu đạt cảm xúc bằng tiếng Anh.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "cs-2",
      title: "Hoạt động Thể chất & Kết nối Đồng đội KidsWorld Sport",
      caption: "Tăng cường chiều cao, sức bền và tinh thần làm việc nhóm từ lứa tuổi mầm non.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80"
    }
  ],
  popularProducts: [
    {
      id: "prd-1",
      name: "Ghế an toàn trẻ em trên xe ô tô",
      price: "4,100,000 ₫",
      oldPrice: "4,650,000 ₫",
      ageGroup: "infant",
      saleBadge: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "prd-2",
      name: "Bình Lắc SHAKE IT Lock&Lock",
      price: "199,000 ₫",
      oldPrice: "250,000 ₫",
      ageGroup: "toddler",
      saleBadge: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "prd-3",
      name: "Ghế an toàn trẻ em QBORN",
      price: "4,900,000 ₫",
      oldPrice: "5,400,000 ₫",
      ageGroup: "infant",
      saleBadge: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "prd-4",
      name: "Bút Chì Sáp Màu Thân Nhựa Sakura",
      price: "40,000 ₫",
      oldPrice: "55,000 ₫",
      ageGroup: "preschool",
      saleBadge: true,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
    }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=300&q=80"
  ],
  latestPosts: [
    {
      id: "lp-1",
      title: "Những điều cần biết khi chọn trường mầm non song ngữ",
      date: "14 Tháng Hai, 2026",
      excerpt:
        "Chọn môi trường đầu đời giúp con tự tin giao tiếp tiếng Anh và phát triển vận động...",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "lp-2",
      title: "Làm sao để trẻ hứng thú học từ vựng qua trò chơi vận động?",
      date: "10 Tháng Hai, 2026",
      excerpt:
        "Phương pháp Total Physical Response (TPR) giúp bé ghi nhớ từ vựng gấp 3 lần...",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
