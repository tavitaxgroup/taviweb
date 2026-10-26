import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym2Program {
  id: string;
  title: string;
  subtitle: string;
  schedule: string;
  level: string;
  caloriesBurn: string;
  description: string;
  image: string;
  reverseRow?: boolean;
  highlights: string[];
}

export interface PhongGym2Facility {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface PhongGym2Data extends ClonedTemplateBaseData {
  programs: PhongGym2Program[];
  memberBenefitsIntro: string;
  memberBenefits: string[];
  facilities: PhongGym2Facility[];
}

export const phongGym2DefaultData: PhongGym2Data = {
  business: {
    name: "Mona Sport Club",
    phone: ["076 922 0162", "0909 888 162"],
    email: ["contact@monasport.vn", "hlv@monasport.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 05:30 - 22:00",
    rating: 4.9,
    reviewCount: 980,
    aboutTitle: "Tiện nghi",
    aboutText: [
      "Bất cứ khi nào bạn đang chọn một cơ sở đào tạo võ thuật và thể hình, một trong những cân nhắc quan trọng nhất là chất lượng và tính chất toàn diện của các trang thiết bị. Câu lạc bộ thể thao Mona Sport Club được trang bị đầy đủ các thiết bị hàng đầu để giúp bạn nhanh chóng đạt được mục tiêu tập thể dục, tăng cường sức bền hoặc khám phá kiến thức võ thuật thực chiến cho tất cả các cấp độ kinh nghiệm và kỹ năng."
    ],
  },
  hero: {
    eyebrow: "MONA SPORTS CLUB",
    subtitle: "CÂU LẠC BỘ THỂ DỤC THỂ THAO",
    title: "Mona Sport Club",
    description:
      "Hệ thống câu lạc bộ Võ thuật thực chiến (Boxing, Muay Thái, MMA) và Cử tạ - Thể hình chuyên sâu chuẩn quốc tế.",
    ctaText: "Tìm hiểu ngay",
    ctaLink: "#khoa-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85",
    ],
  },
  programs: [
    {
      id: "prog-1",
      title: "Võ thuật",
      subtitle: "Boxing, Muay Thái & Kickboxing thực chiến",
      schedule: "Ca sáng & tối mỗi ngày (06:00 - 21:00)",
      level: "Nhập môn đến Chuyên nghiệp",
      caloriesBurn: "800 - 1.000 kcal / giờ",
      description:
        "Chương trình Võ thuật của chúng tôi được thiết kế cho mọi người từ người mới nhập môn đến thậm chí là các vận động viên và huấn luyện viên cao cấp muốn hoàn thiện đòn thế.",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80",
      reverseRow: false,
      highlights: [
        "Huấn luyện kỹ thuật đấm, đá, chỏ, gối chuẩn Muay Thái & Boxing",
        "Thực hành phản xạ né đòn trên đích đấm (Pad work) 1-1 cùng HLV",
        "Rèn luyện sức bền tim mạch và khả năng tự vệ trong tình huống thực tế",
      ],
    },
    {
      id: "prog-2",
      title: "Cử tạ & thể hình",
      subtitle: "Tăng cơ giảm mỡ & Sức mạnh toàn diện",
      schedule: "Tự do & kèm PT 1-1 (05:30 - 22:00)",
      level: "Mọi cấp độ thể lực",
      caloriesBurn: "600 - 850 kcal / giờ",
      description:
        "Đối với những người đang tìm cách nâng cao hiệu suất cá nhân của bạn như một vận động viên chiến đấu hoặc đơn giản là giảm mỡ và xây dựng cơ bắp săn chắc.",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
      reverseRow: false,
      highlights: [
        "Đo chỉ số InBody phân tích tỷ lệ cơ - mỡ định kỳ hàng tháng",
        "Giáo án Strength & Conditioning cá nhân hóa theo thể trạng",
        "Tư vấn thực đơn dinh dưỡng chuẩn Macro giúp siết cơ nhanh chóng",
      ],
    },
    {
      id: "prog-3",
      title: "Huấn luyện thi đấu",
      subtitle: "Chương trình Chiến binh độc quyền",
      schedule: "Thứ 2 - Thứ 7 (17:30 - 20:30)",
      level: "Nâng cao & Bán chuyên / Chuyên nghiệp",
      caloriesBurn: "1.000+ kcal / giờ",
      description:
        "Đối với những thành viên muốn nâng cao kỹ năng cạnh tranh tổng thể của mình lên một tầm cao mới, chúng tôi cung cấp Chương trình Chiến binh độc quyền cho các thành viên có tầm cỡ.",
      image:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=900&q=80",
      reverseRow: true,
      highlights: [
        "Sparring thực chiến trên sàn đài chuẩn quốc tế có bảo hộ an toàn",
        "Chiến thuật kiểm soát cự ly, khóa siết Grappling & BJJ nâng cao",
        "Đồng hành trực tiếp cùng đội ngũ kiện tướng võ thuật quốc gia",
      ],
    },
    {
      id: "prog-4",
      title: "Chương trình trẻ em",
      subtitle: "Phát triển thể chất, kỷ luật & sự tự tin",
      schedule: "Thứ 7 & Chủ Nhật (08:30 - 10:30 / 15:30 - 17:30)",
      level: "Trẻ em từ 6 - 15 tuổi",
      caloriesBurn: "500 - 700 kcal / buổi",
      description:
        "Chương trình Kids Martial Arts của chúng tôi được thiết kế để khuyến khích những khía cạnh có lợi, mang đến cho con bạn cơ hội mở khóa sự chính trực, tự tin và ý thức làm việc nhóm.",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
      reverseRow: true,
      highlights: [
        "Phát triển chiều cao, sự linh hoạt và phản xạ vận động tự nhiên",
        "Trang bị kỹ năng tự vệ chống bắt nạt học đường an toàn, lành mạnh",
        "Xây dựng tính kỷ luật, sự tôn trọng và tinh thần đồng đội tích cực",
      ],
    },
  ],
  memberBenefitsIntro:
    "Lợi ích của Câu lạc bộ thể thao Mona rất phong phú, cả về thể chất và tinh thần, nhưng một số lợi ích quý giá nhất mà chúng tôi cung cấp cho các thành viên của chúng tôi bao gồm:",
  memberBenefits: [
    "Đạt được mục tiêu giảm cân của bạn và loại bỏ mỡ cơ thể nhanh chóng",
    "Đốt cháy tới 1.000 calo mỗi giờ tập luyện cường độ cao",
    "Có được dáng vóc tốt nhất cho cuộc sống năng động của bạn",
    "Trang bị kỹ năng tự vệ thực chiến cho các tình huống thực tế",
    "Phát triển lòng tự trọng và sự tự tin vượt bậc",
    "Cải thiện sự tập trung, kỷ luật và sức mạnh tinh thần",
    "Giảm căng thẳng một cách lành mạnh và tăng mức năng lượng mỗi ngày",
    "Kết bạn suốt đời, những người sẽ giúp bạn trên hành trình đạt đến đỉnh cao sức khỏe",
    "Tham gia cộng đồng các vận động viên và huấn luyện viên đầy đam mê",
  ],
  facilities: [
    {
      id: "fac-1",
      title: "Sàn đài Boxing & MMA chuẩn quốc tế",
      subtitle: "Không gian đối kháng chuyên nghiệp",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fac-2",
      title: "Thảm cỏ Functional Turf",
      subtitle: "Khu vực HIIT, Sled Push & Cross-Training",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fac-3",
      title: "Khu tạ tự do & Máy tập hiện đại",
      subtitle: "Hệ thống Squat Rack, Kettlebell & Bao cát hạng nặng",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Nga My",
      role: "Hội viên Boxing & TFW",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi là Nga My, tôi đã giảm được 6kg mỡ thừa với chương trình TFW & Boxing tại câu lạc bộ. Những buổi tập đầu tiên đầy thử thách nhưng sau khi vượt qua giới hạn bản thân, cơ thể săn chắc và tràn đầy năng lượng thực sự xứng đáng.",
    },
    {
      id: "test-2",
      author: "Tiêu Phong",
      role: "Hội viên Muay Thái & Thể hình",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Xin chào, tôi là Tiêu Phong, tôi đã giảm gần 6kg chỉ sau 1 tháng tập luyện Boxing kết hợp Cử tạ. Bây giờ tôi cảm thấy tự tin, khỏe khoắn và sảng khoái hơn mỗi ngày khi bước vào phòng tập.",
    },
    {
      id: "test-3",
      author: "Thủy Yên",
      role: "Hội viên Kickboxing",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi là Thủy Yên, tôi đã giảm 6kg với lộ trình Kickboxing & Conditioning. Đội ngũ huấn luyện viên cực kỳ tận tâm chỉnh sửa từng động tác giúp tôi xả stress hiệu quả sau giờ làm việc và yêu thích thể thao hơn bao giờ hết.",
    },
  ],
  news: [
    {
      id: "news-1",
      title: "Điểm mặt 4 trận tứ kết của giải đấu ONE Flyweight World Grand Prix",
      date: "31/03/2025",
      category: "Sự kiện MMA",
      excerpt:
        "Tại sự kiện ONE: A New Era diễn ra tại Nhật Bản sắp tới, những người đam mê võ thuật đối kháng chắc chắn sẽ không thể rời mắt khỏi 4 cặp đấu tứ kết nảy lửa...",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-2",
      title: "ONE Championship và câu chuyện khai phá thị trường MMA Nhật Bản",
      date: "28/03/2025",
      category: "Tin võ thuật",
      excerpt:
        "Với 4 trận tranh đai vô địch và hàng loạt cuộc đối đầu đỉnh cao của các hào thủ trong giới MMA Châu Á và thế giới, ONE: A New Era đánh dấu cột mốc lịch sử...",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-3",
      title:
        "Bí quyết phân phối thể lực và nhịp thở trong 5 hiệp đấu Boxing cường độ cao",
      date: "24/03/2025",
      category: "Kiến thức tập luyện",
      excerpt:
        "Làm thế nào để duy trì tốc độ ra đòn, sức mạnh cú đấm và sự tỉnh táo chiến thuật xuyên suốt các hiệp đấu? Cùng HLV trưởng Mona Sport Club phân tích...",
      image:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
