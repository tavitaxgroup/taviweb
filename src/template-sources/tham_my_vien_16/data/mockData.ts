import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface AforexEssentialOilCard {
  id: string;
  posterHeading: string;
  posterSub: string;
  fullTitle: string;
  volumes: string;
  price: string;
  oldPrice: string;
  discountBadge: string;
  badgeColor: string;
  posterBg: string;
  posterTextDark?: boolean;
  benefits: string[];
  giftNote: string;
  image: string;
}

export interface AforexSpaTreatment {
  id: string;
  title: string;
  duration: string;
  price: string;
  herbsUsed: string;
  description: string;
  image: string;
}

export interface AforexBotanicalData extends ClonedTemplateBaseData {
  navigation: Array<{ label: string; href: string }>;
  heroPurpleRibbon: string;
  heroPinkRibbon: string;
  darkBadgeCard: {
    langLabel: string;
    heading: string;
    goldScript: string;
  };
  essentialOilCards: AforexEssentialOilCard[];
  spaTreatments: AforexSpaTreatment[];
  distillationSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
}

export const thamMyVien16DefaultData: AforexBotanicalData = {
  business: {
    name: "AFOREX CO.,LTD®",
    tagline:
      "Viện Thẩm Mỹ Thảo Mộc & Sản Xuất Tinh Dầu Hồi Quế Tự Nhiên Aforex Botanical Beauty",
    phone: ["0918 686 397", "0205 387 9999"],
    email: ["info@aforex.vn", "export@aforexbotanical.com"],
    address: "Khu Công Nghiệp Đồng Bành, Huyện Chi Lăng, Tỉnh Lạng Sơn & Showroom Quận 1, TP.HCM",
    workingHours: "08:00 - 20:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1940,
    experienceYears: "14+",
    aboutTitle: "Hồi Quế Lạng Sơn — Tinh Hoa Dược Liệu Chăm Sóc Sắc Đẹp Xứ Lạng",
    aboutText: [
      "Aforex Botanical Beauty là đơn vị tiên phong khai thác, chưng cất tinh dầu Hoa Hồi – Quế Chi hữu cơ tại vùng nguyên liệu Lạng Sơn và ứng dụng trực tiếp vào các liệu trình trị liệu thẩm mỹ, xông hơi giải độc và chăm sóc da tự nhiên.",
      "Đạt chứng nhận hữu cơ quốc tế USDA/EU Organic, mỗi giọt tinh dầu Aforex giữ trọn hàm lượng hoạt chất Anethole và Cinnamaldehyde quý giá giúp lưu thông khí huyết, trẻ hóa làn da và thư giãn tâm trí."
    ],
    highlights: [
      "100% Tinh dầu nguyên chất chưng cất hơi nước từ vùng nguyên liệu Lạng Sơn",
      "Không pha hương liệu tổng hợp — An toàn cho xông mặt, massage spa & trị liệu",
      "Quà tặng thảo mộc đặc biệt cho mọi đơn hàng từ 200.000 ₫"
    ]
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#top" },
    { label: "GIA VỊ & DƯỢC LIỆU", href: "#bo-suu-tap-tinh-dau" },
    { label: "TINH DẦU SPA", href: "#bo-suu-tap-tinh-dau" },
    { label: "LIỆU TRÌNH THẨM MỸ", href: "#lieu-trinh-thao-moc" },
    { label: "NÔNG LÂM SẢN", href: "#quy-trinh-chung-cat" },
    { label: "LIÊN HỆ", href: "#footer-aforex" }
  ],
  heroPurpleRibbon: "ĐƠN VỊ SẢN XUẤT HỒI QUẾ & TINH DẦU",
  heroPinkRibbon: "HÀNG ĐẦU VIỆT NAM",
  darkBadgeCard: {
    langLabel: "VN",
    heading: "HỒI QUẾ LẠNG SƠN",
    goldScript: "Tinh hoa xứ Lạng"
  },
  hero: {
    eyebrow: "TINH HOA DƯỢC LIỆU TỰ NHIÊN XỨ LẠNG",
    title: "Đơn Vị Sản Xuất Hồi Quế & Tinh Dầu Spa Hàng Đầu Việt Nam",
    subtitle:
      "Đánh thức vẻ đẹp nguyên bản và cân bằng thân – tâm – trí bằng nguồn tinh dầu thảo mộc hữu cơ nguyên chất 100% từ núi rừng Lạng Sơn.",
    ctaText: "Khám Phá Bộ Sưu Tập Tinh Dầu",
    ctaLink: "#bo-suu-tap-tinh-dau",
    backgroundImage:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=85"
  },
  essentialOilCards: [
    {
      id: "oil-1",
      posterHeading: "TINH DẦU\nHOA HỒI",
      posterSub: "Special for your health & skin",
      fullTitle: "TINH DẦU AFOREX HOA HỒI DUNG TÍCH 10ML / 20ML / 50ML / 100ML",
      volumes: "10ML / 20ML / 50ML / 100ML",
      price: "140.000 ₫",
      oldPrice: "200.000 ₫",
      discountBadge: "-30%",
      badgeColor: "#e60012",
      posterBg: "#f5dec4",
      posterTextDark: true,
      benefits: [
        "Xông mặt thải độc & làm sạch sâu lỗ chân lông",
        "Làm ấm cơ thể, giảm nhức mỏi cơ khớp tại Spa",
        "Hỗ trợ làm dịu da kích ứng & thư giãn giấc ngủ"
      ],
      giftNote: "ĐƠN HÀNG TỪ 200K",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "oil-2",
      posterHeading: "TINH DẦU\nQUẾ",
      posterSub: "Special for your health & spa",
      fullTitle: "TINH DẦU AFOREX QUẾ CINNAMON 10ML / 20ML / 50ML / 100ML",
      volumes: "10ML / 20ML / 50ML / 100ML",
      price: "155.000 ₫",
      oldPrice: "220.000 ₫",
      discountBadge: "-30%",
      badgeColor: "#e60012",
      posterBg: "#b85d38",
      posterTextDark: false,
      benefits: [
        "Massage đánh tan mỡ bụng & săn chắc vòng eo",
        "Khử mùi phòng ốc, thanh lọc không khí phòng Spa",
        "Kích thích tuần hoàn máu giúp sắc diện hồng hào"
      ],
      giftNote: "ĐƠN HÀNG TỪ 200K",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "oil-3",
      posterHeading: "THẢO MỘC QUẾ\n& BÁNH TRÁNG QUẾ",
      posterSub: "Đặc sản dưỡng sinh xứ Lạng",
      fullTitle: "BỘT Ủ THẢO MỘC & BÁNH TRÁNG QUẾ HỮU CƠ AFOREX",
      volumes: "Gói 250G / Hộp 500G",
      price: "120.000 ₫",
      oldPrice: "170.000 ₫",
      discountBadge: "-30%",
      badgeColor: "#e60012",
      posterBg: "#faf3e8",
      posterTextDark: true,
      benefits: [
        "Bột quế hữu cơ mịn 100% dùng đắp body & tẩy tế bào chết",
        "Giàu chất chống oxy hóa Polyphenol làm sáng mịn làn da",
        "Thưởng thức trà quế & bánh tráng quế ấm bụng dưỡng nhan"
      ],
      giftNote: "ĐƠN HÀNG TỪ 200K",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "oil-4",
      posterHeading: "TINH DẦU\nSẢ CHANH",
      posterSub: "Lemongrass Detox Spa Oil",
      fullTitle: "TINH DẦU AFOREX SẢ CHANH DUNG TÍCH 10ML / 20ML / 50ML",
      volumes: "10ML / 20ML / 50ML",
      price: "135.000 ₫",
      oldPrice: "150.000 ₫",
      discountBadge: "-10%",
      badgeColor: "#9a5b13",
      posterBg: "#dff2e3",
      posterTextDark: true,
      benefits: [
        "Xông hơi giải cảm, giảm tiết dầu nhờn và ngừa mụn ẩn",
        "Hương thơm tươi mát xua đuổi côn trùng tự nhiên",
        "Ngâm chân thảo dược thư giãn sau ngày dài đi giày cao gót"
      ],
      giftNote: "ĐƠN HÀNG TỪ 200K",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "oil-5",
      posterHeading: "TINH DẦU\nBẠC HÀ",
      posterSub: "Peppermint Cooling Therapy",
      fullTitle: "TINH DẦU AFOREX BẠC HÀ DUNG TÍCH 20ML / 50ML / 100ML",
      volumes: "20ML / 50ML / 100ML",
      price: "145.000 ₫",
      oldPrice: "210.000 ₫",
      discountBadge: "-30%",
      badgeColor: "#e60012",
      posterBg: "#bde6cf",
      posterTextDark: true,
      benefits: [
        "Làm dịu mát làn da cháy nắng & se khít lỗ chân lông",
        "Giảm căng thẳng vùng thái dương, mang lại sự tỉnh táo",
        "Kháng khuẩn da đầu, giảm gàu và ngứa chân tóc hiệu quả"
      ],
      giftNote: "ĐƠN HÀNG TỪ 200K",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "oil-6",
      posterHeading: "TINH DẦU\nVỎ BƯỞI RỪNG",
      posterSub: "Pomelo Hair & Scalp Revival",
      fullTitle: "TINH DẦU AFOREX VỎ BƯỞI DƯỠNG TÓC DUNG TÍCH 20ML / 50ML",
      volumes: "20ML / 50ML",
      price: "160.000 ₫",
      oldPrice: "200.000 ₫",
      discountBadge: "-20%",
      badgeColor: "#e60012",
      posterBg: "#fef3c7",
      posterTextDark: true,
      benefits: [
        "Kích thích nang tóc con mọc dày và giảm gãy rụng sau sinh",
        "Nuôi dưỡng mái tóc bóng mượt, thơm dịu hương bưởi non",
        "Massage da đầu lưu thông tuần hoàn máu mỗi tối"
      ],
      giftNote: "ĐƠN HÀNG TỪ 200K",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    }
  ],
  spaTreatments: [
    {
      id: "spa-1",
      title: "Liệu Trình Massage Đá Nóng & Tinh Dầu Quế Chi Giảm Mỡ Chuyên Sâu",
      duration: "90 phút",
      price: "550.000 ₫",
      herbsUsed: "Tinh dầu Quế Lạng Sơn + Đá Bazan núi lửa",
      description:
        "Sự kết hợp giữa nhiệt năng đá nóng và tinh dầu quế nguyên chất giúp hóa lỏng mô mỡ dưới da, làm săn chắc vùng bụng – đùi và đả thông kinh lạc.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "spa-2",
      title: "Xông Hơi Thảo Dược Hoa Hồi & Chăm Sóc Da Mặt Thanh Lọc Độc Tố",
      duration: "75 phút",
      price: "480.000 ₫",
      herbsUsed: "Tinh dầu Hoa Hồi + Sả Chanh + Mặt nạ thảo mộc",
      description:
        "Hơi nước ấm quyện tinh dầu Hoa Hồi mở thoáng lỗ chân lông, đẩy sạch bã nhờn và bụi mịn, trả lại làn da sáng hồng rạng rỡ.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "spa-3",
      title: "Gội Đầu Dưỡng Sinh Tinh Dầu Vỏ Bưởi – Bồ Kết & Ấn Huyệt Cổ Vai Gáy",
      duration: "60 phút",
      price: "350.000 ₫",
      herbsUsed: "Tinh dầu Vỏ Bưởi + Bạc Hà + Nước cốt Bồ Kết",
      description:
        "Làm sạch da đầu bằng thảo mộc nấu thủ công, kết hợp massage ấn huyệt giúp giảm đau mỏi vai gáy và nuôi dưỡng mái tóc dày suôn mượt.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
    }
  ],
  distillationSteps: [
    {
      step: "01",
      title: "Thu Hoạch Hồi – Quế Rừng Lạng Sơn",
      desc: "Tuyển chọn những cánh hoa hồi 8 cánh căng mọng và vỏ quế trên 10 năm tuổi tại vùng núi Văn Quan, Chi Lăng."
    },
    {
      step: "02",
      title: "Chưng Cất Lôi Cuốn Hơi Nước Kép",
      desc: "Sử dụng hệ thống tháp chưng cất inox chuẩn GMP giúp tách chiết tinh dầu tinh khiết ở nhiệt độ tối ưu."
    },
    {
      step: "03",
      title: "Kiểm Định Hàm Lượng Hoạt Chất",
      desc: "Phân tích sắc ký khí GC-MS đảm bảo độ tinh khiết 100%, không tạp chất và đạt chuẩn xuất khẩu châu Âu."
    },
    {
      step: "04",
      title: "Ứng Dụng Trị Liệu Sắc Đẹp & Spa",
      desc: "Đóng chai thủy tinh tối màu chống oxy hóa, phân phối tới hệ thống viện thẩm mỹ, spa và gia đình Việt."
    }
  ]
};
