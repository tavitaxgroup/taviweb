import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NgaDangModuleItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  lessonsCount: string;
  points: string[];
}

export interface NgaDangBenefitBox {
  id: string;
  title: string;
  description: string;
  icon: "target" | "script" | "camera" | "chart";
}

export interface LeadGeneration16Data extends ClonedTemplateBaseData {
  funnelHero: {
    videoCountBadge: string;
    topLeadLine: string;
    bannerTitle: string;
    bannerSpeakerLine: string;
    speakerName: string;
    speakerRole: string;
    speakerImage: string;
    classroomVideoThumbnail: string;
    classroomVideoCaption: string;
    highlightParagraph: string;
  };
  rightFormCard: {
    topHeaderTitle: string;
    topHeaderSubtitle: string;
    greenNoticeBanner: string;
    securityBadge: string;
    formTitle: string;
    ctaButtonText: string;
    businessCategories: string[];
  };
  coreFeatureBoxes: NgaDangBenefitBox[];
  keyTakeawaysChecklist: string[];
  courseModules: NgaDangModuleItem[];
  studentResults: Array<{
    id: string;
    name: string;
    shopName: string;
    revenueMetric: string;
    quote: string;
    avatar: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const leadGeneration16DefaultData: LeadGeneration16Data = {
  business: {
    name: "NGADANG.VN — Nga Đặng Academy",
    phone: ["0909 686 889", "1900 636 648"],
    email: ["contact@ngadang.vn", "hocvien@ngadang.vn"],
    address: "Tầng 8, Tòa nhà Rivera Park, Quận 10, TP. Hồ Chí Minh",
    workingHours: "Hỗ trợ học viên: 08:30 – 22:00 (Thứ 2 – Chủ Nhật)",
    rating: 4.98,
    reviewCount: 4200,
    aboutTitle: "Giải Pháp Đào Tạo Kỹ Thuật Livestream Nghìn Đơn Chuyên Nghiệp",
    aboutText: [
      "Nga Đặng Academy đồng hành cùng hơn 15.000 chủ shop, nhà sáng tạo nội dung và doanh nghiệp SMEs làm chủ kỹ thuật Livestream đa sàn TikTok Shop, Shopee Live và xây dựng thương hiệu cá nhân triệu view.",
      "Công thức kịch bản thực chiến giúp bạn tiếp cận khách hàng tiềm năng không giới hạn và bứt phá doanh số ngay trong phiên live đầu tiên."
    ],
    experienceYears: "9+"
  },
  hero: {
    eyebrow: "NGADANG.VN • LIVESTREAM NGHÌN ĐƠN",
    title: "KHÓA HỌC ĐÀO TẠO KỸ THUẬT LIVESTREAM CHUYÊN NGHIỆP",
    subtitle:
      "Giải pháp giúp bạn tiếp cận khách hàng tiềm năng không giới hạn, làm chủ kịch bản giữ chân mắt xem và bùng nổ đơn hàng tự nhiên.",
    ctaText: "Đăng ký miễn phí ngay",
    ctaLink: "#dang-ky-funnel",
    backgroundImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85"
  },
  funnelHero: {
    videoCountBadge: "200+ VIDEOS",
    topLeadLine:
      "Hướng dẫn chi tiết, đơn giản giúp bạn tiếp cận khách hàng tiềm năng không giới hạn trên Livestream",
    bannerTitle:
      "KHÓA ĐÀO TẠO LIVESTREAM NGHÌN ĐƠN TỪNG BƯỚC GIÚP BẠN KINH DOANH THÀNH CÔNG TRÊN ONLINE",
    bannerSpeakerLine:
      "Từ Nga Đặng - Diễn Giả Ngôi Sao - Co-founder & Chuyên Gia Huấn Luyện Livestream Thực Chiến",
    speakerName: "Chuyên gia Nga Đặng",
    speakerRole: "Nhà sáng lập Nga Đặng Academy • Cố vấn chiến lược Livestream cho 500+ nhãn hàng",
    speakerImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
    classroomVideoThumbnail:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=85",
    classroomVideoCaption:
      "Hơn 500 học viên thực hành trực tiếp kỹ thuật chốt đơn Livestream tại hội trường Nga Đặng Academy",
    highlightParagraph:
      "Nga Đặng đúc kết 100% quy trình thực chiến đã giúp hàng ngàn học viên tự tin đứng trước ống kính, xóa bỏ nỗi sợ bí từ, đẩy mắt xem tự nhiên lên hàng ngàn người và bùng nổ doanh số từ Livestream mỗi ngày."
  },
  rightFormCard: {
    topHeaderTitle: "KHÓA ĐÀO TẠO LIVESTREAM NGHÌN ĐƠN MIỄN PHÍ",
    topHeaderSubtitle: "Thực tế - Đơn giản - Áp dụng được ngay!",
    greenNoticeBanner:
      "Khóa học hoàn toàn MIỄN PHÍ nhưng số lượng tài khoản và suất Zoom hỗ trợ 1-1 có hạn. Đăng ký giữ chỗ ngay!",
    securityBadge: "CHỐNG SPAM - BẢO MẬT THÔNG TIN 100%",
    formTitle: "ĐIỀN THÔNG TIN NHẬN VÉ THAM DỰ & BỘ KỊCH BẢN MẪU",
    ctaButtonText: "ĐĂNG KÝ NHẬN KHOÁ HỌC NGAY",
    businessCategories: [
      "Thời trang & Phụ kiện nữ/nam",
      "Mỹ phẩm, Chăm sóc da & Làm đẹp",
      "Mẹ & Bé / Đồ gia dụng thông minh",
      "Thực phẩm sạch / F&B / Đặc sản",
      "Người mới bắt đầu chưa có sản phẩm"
    ]
  },
  coreFeatureBoxes: [
    {
      id: "fb-1",
      title: "Tìm kiếm sản phẩm phù hợp và xác định đúng đối tượng khách hàng",
      description:
        "Phân tích sản phẩm mồi (Key Hook), sản phẩm chủ lực và sản phẩm lợi nhuận cao giúp khách vào phiên live là chốt đơn liên tục.",
      icon: "target"
    },
    {
      id: "fb-2",
      title: "Xây dựng kịch bản Livestream cuốn hút và chốt đơn thần tốc",
      description:
        "Công thức 15 giây giữ chân người xem mới, kịch bản tung Deal chớp nhoáng (Flash Sale) tạo hiệu ứng đám đông mua hàng.",
      icon: "script"
    },
    {
      id: "fb-3",
      title: "Thiết lập phòng Live chuẩn Studio chỉ với 1 chiếc điện thoại",
      description:
        "Bí quyết bố trí ánh sáng tôn da, âm thanh thu âm trong trẻo và góc máy chuyên nghiệp với chi phí tiết kiệm nhất.",
      icon: "camera"
    },
    {
      id: "fb-4",
      title: "Làm chủ thuật toán phân phối Traffic tự nhiên TikTok & Shopee",
      description:
        "Hiểu rõ các chỉ số giữ chân, tương tác, tỷ lệ nhấp giỏ hàng để thuật toán tự động bơm hàng chục ngàn lượt xem miễn phí.",
      icon: "chart"
    }
  ],
  keyTakeawaysChecklist: [
    "Các kỹ thuật xử lý tình huống khi phiên live bị tụt mắt xem hoặc bị bóp tương tác đột ngột",
    "Phương pháp luyện giọng nói nội lực, truyền cảm hứng, nói liên tục 3-4 tiếng không bị khàn giọng",
    "Bộ 36 kịch bản minigame, tung mã giảm giá và tạo sự khan hiếm khiến khách hàng comment chốt đơn ngay",
    "Cách xây dựng chuỗi video ngắn (Short Video) kéo khách hàng tiềm năng vào lịch hẹn Livestream",
    "Quy trình vận hành đội ngũ Host phụ, ghim sản phẩm và chăm sóc đơn hàng sau Livestream giảm tỷ lệ hoàn hủy"
  ],
  courseModules: [
    {
      id: "mod-1",
      number: "HỌC PHẦN 01",
      title: "Tư Duy Đúng & Chuẩn Bị Nền Tảng Livestream Nghìn Đơn",
      duration: "45 video bài giảng",
      lessonsCount: "12 bài thực hành",
      points: [
        "Giải mã thuật toán phân phối người xem trên TikTok Shop & Facebook Reels/Live",
        "Định vị phong cách cá nhân của Host: Năng lượng cao, Chuyên gia tư vấn hay Tâm sự gần gũi",
        "Checklist 18 bước chuẩn bị trước giờ bấm nút Go Live"
      ]
    },
    {
      id: "mod-2",
      number: "HỌC PHẦN 02",
      title: "Nghệ Thuật Kịch Bản Vàng & Kỹ Thuật Giữ Chân Mắt Xem",
      duration: "60 video bài giảng",
      lessonsCount: "18 mẫu kịch bản",
      points: [
        "Cấu trúc vòng lặp 10 phút/lần trên Livestream để đón luồng khách mới liên tục",
        "Ngôn từ thôi miên và 9 cụm từ kích hoạt cảm xúc mua hàng ngay lập tức",
        "Cách phối hợp nhịp nhàng giữa Host chính và trợ lý đọc comment/rung chuông"
      ]
    },
    {
      id: "mod-3",
      number: "HỌC PHẦN 03",
      title: "Chiến Lược Ma Trận Sản Phẩm & Tối Ưu Quảng Cáo Livestream",
      duration: "55 video bài giảng",
      lessonsCount: "15 case study",
      points: [
        "Cách sắp xếp thứ tự giỏ hàng: Sản phẩm phễu kéo mắt xem -> Sản phẩm biên lợi nhuận cao",
        "Kỹ thuật kết hợp Live Ads ngân sách nhỏ để mồi thuật toán đẩy đề xuất tự nhiên",
        "Đọc bảng dữ liệu sau phiên Live để nhân bản phiên Live trăm triệu tiếp theo"
      ]
    },
    {
      id: "mod-4",
      number: "HỌC PHẦN 04",
      title: "Xây Dựng Thương Hiệu Cá Nhân Đa Kênh Bền Vững",
      duration: "40 video bài giảng",
      lessonsCount: "10 bộ template",
      points: [
        "Biến khách mua 1 lần thành fan trung thành quay lại xem Live mỗi tối",
        "Tuyển dụng và đào tạo đội ngũ nhân sự Livestream in-house cho chủ shop bận rộn",
        "Quy trình bảo vệ tài khoản, tránh các lỗi vi phạm chính sách nền tảng"
      ]
    }
  ],
  studentResults: [
    {
      id: "sr-1",
      name: "Chị Nguyễn Bảo Ngọc",
      shopName: "Founder Bảo Ngọc Fashion",
      revenueMetric: "Đạt 1.250 đơn / phiên Live 3 tiếng",
      quote:
        "Trước khi học cô Nga Đặng, mình mở live chỉ lác đác 5-10 người xem. Áp dụng đúng công thức vòng lặp kịch bản 10 phút và sản phẩm mồi, phiên live tối qua của shop đã cán mốc hơn 1.200 đơn!",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sr-2",
      name: "Anh Lê Hoàng Nam",
      shopName: "CEO Hệ thống Gia Dụng Thông Minh",
      revenueMetric: "Tăng trưởng 380% doanh thu TikTok Shop",
      quote:
        "Bộ tài liệu 200+ video và buổi coaching của Nga Đặng Academy cực kỳ sát thực tế. Đội ngũ 4 bạn Host bên mình học xong đều biết cách đẩy năng lượng và chốt sale dứt khoát.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sr-3",
      name: "Chị Trần Thu Hà",
      shopName: "Chủ thương hiệu Mỹ Phẩm Thiên Nhiên",
      revenueMetric: "Từ 0 lên 850 triệu/tháng sau 6 tuần",
      quote:
        "Cô Nga chỉ từng chi tiết từ cách đặt đèn, chỉnh góc máy đến từng câu kêu gọi bấm vào giỏ hàng. Khóa học miễn phí đầu phễu mà giá trị còn hơn nhiều khóa thu phí đắt đỏ mình từng học.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Tôi chưa từng đứng trước ống kính và rất ngại nói thì có học được không?",
      answer:
        "Hoàn toàn được! Hơn 70% học viên của Nga Đặng Academy bắt đầu từ con số 0. Khóa học có sẵn kịch bản từng chữ (word-by-word) và bài tập luyện giọng 10 phút mỗi ngày giúp bạn tự tin ngay trong tuần đầu tiên."
    },
    {
      id: "faq-2",
      question: "Sau khi đăng ký trên trang này, tôi sẽ nhận khóa học bằng cách nào?",
      answer:
        "Ngay sau khi bạn điền form đăng ký, hệ thống sẽ gửi tài khoản truy cập kho 200+ video hướng dẫn qua Email/Zalo kèm vé tham dự buổi Zoom trực tiếp cùng chuyên gia Nga Đặng."
    },
    {
      id: "faq-3",
      question: "Cần chuẩn bị thiết bị đắt tiền mới bắt đầu Livestream được phải không?",
      answer:
        "Không cần! Trong Học phần 1, Nga Đặng hướng dẫn bạn tận dụng ngay chiếc smartphone sẵn có kết hợp 1-2 đèn chiếu sáng cơ bản là đã có hình ảnh sắc nét, chuyên nghiệp."
    }
  ]
};

export default leadGeneration16DefaultData;
