import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym7HistoryItem {
  year: string;
  description: string;
}

export interface PhongGym7ClubProduct {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface PhongGym7Data extends ClonedTemplateBaseData {
  heroCards: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  historyItems: PhongGym7HistoryItem[];
  historyBgImage: string;
  elevateTitle: string;
  elevateDesc: string;
  elevateImage: string;
  goldMetrics: Array<{
    id: string;
    title: string;
    description: string;
    icon: "ball" | "trophy" | "course" | "flags";
  }>;
  guideVideoThumb: string;
  guideTitle: string;
  guideDesc: string;
  facilities: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  freePlayBgImage: string;
  freePlayTitle: string;
  freePlaySubtitle: string;
  drivers: PhongGym7ClubProduct[];
  mapImage: string;
}

export const phongGym7DefaultData: PhongGym7Data = {
  business: {
    name: "MONA KING GOLF",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["info@monakinggolf.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "06:00 - 21:00 mỗi ngày",
    rating: 4.9,
    reviewCount: 285,
    aboutTitle: "Chào mừng đến với Câu lạc bộ Golf Triompher",
    aboutText: [
      "Tại Câu lạc bộ Golf Triompher, chúng tôi tự hào về chất lượng cao của giải vô địch golf, cảnh quan thiên nhiên nổi bật và dịch vụ huấn luyện xuất sắc mà chúng tôi cung cấp cho các hội viên thân quý. Chúng tôi đã làm việc chăm chỉ trong những năm qua để trở thành một phần quan trọng của cộng đồng thể thao, và trong quá trình đó, chúng tôi đã được công nhận là một trong những trải nghiệm chơi golf hàng đầu trong khu vực."
    ]
  },
  hero: {
    eyebrow: "CÂU LẠC BỘ THỂ THAO & HỌC VIỆN GOLF",
    title: "Lần Đầu Tiên",
    subtitle: "Kể Từ 1887",
    ctaText: "ĐẶT LỊCH HẸN",
    ctaLink: "#dat-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=85"
  },
  heroCards: [
    {
      id: "hc-1",
      title: "HUẤN LUYỆN VIÊN GOLF",
      image:
        "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hc-2",
      title: "TỔ CHỨC GIẢI ĐẤU GOLF",
      image:
        "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hc-3",
      title: "TRỞ THÀNH THÀNH VIÊN",
      image:
        "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hc-4",
      title: "KẾ HOẠCH CHO TIỆC CƯỚI",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
    }
  ],
  historyBgImage:
    "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1600&q=80",
  historyItems: [
    {
      year: "1877",
      description:
        "Được nhiều người coi là câu lạc bộ golf tư nhân tốt nhất, nhiệm vụ của những người sáng lập Triompher là xây dựng và duy trì một sân golf tiêu chuẩn quốc tế phù hợp cho việc tiến hành các giải vô địch quốc gia."
    },
    {
      year: "1892",
      description:
        "Mở rộng khu vực sân tập 18 hố tiêu chuẩn Championship cùng nhà câu lạc bộ cổ điển phục vụ các giải đấu giao hữu khu vực."
    },
    {
      year: "1921",
      description:
        "Khánh thành học viện đào tạo trẻ và khu phức hợp thể chất giúp hội viên nâng cao thể lực, kỹ thuật xoay người và kiểm soát gậy."
    },
    {
      year: "1956",
      description:
        "Đón nhận danh hiệu Sân Golf Danh Giá Quốc Gia với hệ thống mặt cỏ Bentgrass được chăm sóc tự động hóa."
    },
    {
      year: "1988",
      description:
        "Nâng cấp toàn diện khu vực Pro Shop, phòng tập Golf 3D trong nhà và trung tâm hội nghị tiệc cưới sang trọng."
    },
    {
      year: "2017",
      description:
        "Ứng dụng công nghệ cảm biến radar TrackMan và chương trình huấn luyện cá nhân hóa cho hơn 2.500 hội viên thường xuyên."
    }
  ],
  elevateTitle: "Đưa Trò Chơi Của Bạn Lên Cấp Độ Cao Hơn",
  elevateDesc:
    "Người chơi golf có kinh nghiệm, người chơi gần mới, tay golf chuyên nghiệp hay những tài năng tương lai. Đây là một khóa học cho tất cả mọi người. Đó là thử thách thú vị mang lại cảm giác gắn kết của tình bạn. Đó là nơi bạn có thể phát triển kỹ năng chơi của mình bằng những bài học chuyên sâu.",
  elevateImage:
    "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=80",
  goldMetrics: [
    {
      id: "gm-1",
      title: "Sân Golf 18 Điểm",
      description: "Thiết kế chuẩn quốc tế Par-72 uốn lượn quanh hồ nước tự nhiên.",
      icon: "ball"
    },
    {
      id: "gm-2",
      title: "Độc Đáo & Đẹp",
      description: "Cảnh quan đồi cỏ xanh mướt từng đạt nhiều giải thưởng kiến trúc.",
      icon: "trophy"
    },
    {
      id: "gm-3",
      title: "Trên 320 Hecta",
      description: "Không gian sinh thái rộng lớn tách biệt khỏi nhịp sống ồn ào.",
      icon: "course"
    },
    {
      id: "gm-4",
      title: "Thành Lập Từ 1877",
      description: "Bề dày truyền thống huấn luyện và tổ chức giải đấu chuyên nghiệp.",
      icon: "flags"
    }
  ],
  guideVideoThumb:
    "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=900&q=80",
  guideTitle: "Tải Xuống Hướng Dẫn",
  guideDesc:
    "Tải về hướng dẫn để khám phá các tính năng của cả thành viên golf và xã hội, bao gồm chơi gôn, ăn uống, các hoạt động thể chất và sự kiện. Bạn sẽ nhận được các điều khoản, biểu phí, các bước tiếp theo và lịch trình chi tiết.",
  facilities: [
    {
      id: "fac-1",
      title: "Cửa Hàng Chuyên Nghiệp",
      description:
        "Cửa hàng chuyên nghiệp của chúng tôi được cung cấp đầy đủ với các thiết bị gậy golf và quần áo thể thao chính hãng.",
      image:
        "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fac-2",
      title: "Cơ Sở Thực Hành",
      description:
        "Khu vực sân tập phát bóng, đồi cỏ Putting Green và thiết bị phân tích cú đánh hiện đại nhất từ các nhà sản xuất hàng đầu.",
      image:
        "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fac-3",
      title: "Nhà Hàng & Tiệc Nướng",
      description:
        "Không gian ẩm thực ngoài trời ấm cúng phục vụ thực đơn dinh dưỡng thể thao và tiệc BBQ cuối tuần cho hội viên.",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  freePlayBgImage:
    "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1920&q=80",
  freePlayTitle: "Tham Gia Để Được Miễn Phí Lượt Chơi và Lệ Phí Chơi Golf",
  freePlaySubtitle:
    "Ngoài ra, nhận được ưu đãi đặc biệt và quyền truy cập vào các sự kiện độc quyền.",
  drivers: [
    {
      id: "dr-1",
      name: "PROSTAFF IRONS STEEL 505-SW-P",
      price: "11,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-2",
      name: "CALLAWAY GBB EPIC SUB ZERO",
      price: "9,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-3",
      name: "COBRA KING LTD BLACK",
      price: "8,400,000 ₫",
      image:
        "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "dr-4",
      name: "PING G/LS TEC/SF TEC BLACK",
      price: "9,600,000 ₫",
      image:
        "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=500&q=80"
    }
  ],
  mapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80"
};

export const defaultData = phongGym7DefaultData;
export default phongGym7DefaultData;
