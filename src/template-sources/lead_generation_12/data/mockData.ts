import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GetawayTourCard {
  id: string;
  regionTag: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountRibbon?: string;
  image: string;
}

export interface LeadGeneration12Data extends ClonedTemplateBaseData {
  bentoMosaic: {
    highlightTitle: string;
    highlightDesc: string;
    images: string[];
  };
  continentsGrid: Array<{
    id: string;
    scriptTitle: string;
    vnTitle: string;
    description: string;
    theme: "yellow" | "black";
    image: string;
  }>;
  bestSellingTours: GetawayTourCard[];
  underwaterVideoImage: string;
  domesticTours: GetawayTourCard[];
  quoteSplit: {
    leftScriptText: string;
    reviewContent: string;
    reviewerName: string;
    reviewerSource: string;
  };
  stripGallery: string[];
}

export const leadGeneration12DefaultData: LeadGeneration12Data = {
  business: {
    name: "Getaway Deal",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "vip@getawaydeal.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:00 - 21:30 (Tất cả các ngày)",
    rating: 4.95,
    reviewCount: 1680,
    aboutTitle: "Những điểm đến THÚ VỊ đang CHỜ ĐÓN bạn KHÁM PHÁ !",
    aboutText: [
      "Bạn quá ngột ngạt với khói bụi thành phố, mệt mỏi với những lo toan thường ngày. Đặt ngay chuyến du lịch để tạm xa thành phố, hòa mình vào thiên nhiên tươi đẹp.",
      "Chuyên trang săn ưu đãi nghỉ dưỡng cao cấp trong nước và quốc tế với mức giá độc quyền."
    ],
    experienceYears: "12+"
  },
  hero: {
    eyebrow: "Chiêm ngưỡng vẻ đẹp",
    title: "VỊNH HẠ LONG",
    subtitle: "Giảm giá 30% cho 100 khách đăng ký đầu tiên trong tháng này",
    ctaText: "Đặt ngay",
    ctaLink: "#best-selling",
    backgroundImage:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85"
  },
  bentoMosaic: {
    highlightTitle: "THIÊN ĐƯỜNG NGHỈ DƯỠNG MALDIVES",
    highlightDesc:
      "Quốc đảo xinh đẹp Maldives nằm bên bờ Ấn Độ Dương với những rạn san hô rực rỡ, làn nước ngọc bích trong vắt và chuỗi biệt thự trên mặt nước sang trọng bậc nhất thế giới.",
    images: [
      "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80"
    ]
  },
  continentsGrid: [
    {
      id: "cont-eu",
      scriptTitle: "Châu Âu",
      vnTitle: "Du lịch Châu Âu",
      description:
        "Khám phá vẻ đẹp lộng lẫy của các thành phố cổ kính nổi tiếng: Paris - Bruxelles - Amsterdam - Rome.",
      theme: "yellow",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cont-as",
      scriptTitle: "Châu Á",
      vnTitle: "Du lịch Châu Á",
      description:
        "Là châu lục lớn nhất thế giới với vô vàn danh lam thắng cảnh tuyệt đẹp tại Hàn Quốc, Nhật Bản, Việt Nam, Singapore...",
      theme: "black",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cont-am",
      scriptTitle: "Châu Mỹ",
      vnTitle: "Du lịch Châu Mỹ",
      description:
        "Châu Mỹ được mệnh danh là Tân Thế Giới. Hiện nay các hành trình khám phá Bờ Đông - Bờ Tây nước Mỹ được rất nhiều du khách quan tâm.",
      theme: "yellow",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
    }
  ],
  bestSellingTours: [
    {
      id: "bs-1",
      regionTag: "DU LỊCH CHÂU Á",
      title: "Du Lịch Hàn Quốc mùa hoa anh đào khởi hành từ Sài Gòn",
      price: "14,999,000 ₫",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bs-2",
      regionTag: "DU LỊCH ANH",
      title: "Du lịch Anh - Scotland 8 ngày 7 đêm khởi hành từ TP.HCM giá tốt",
      price: "59,900,000 ₫",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bs-3",
      regionTag: "DU LỊCH CANADA",
      title: "Du lịch Canada 10 ngày mùa thu lá đỏ khởi hành từ Sài Gòn",
      price: "97,900,000 ₫",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
    }
  ],
  underwaterVideoImage:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
  domesticTours: [
    {
      id: "dm-1",
      regionTag: "DU LỊCH ĐÀ NẴNG",
      title: "Tour Miền Trung: Tặng vé cáp treo, Buffet trưa, tối & KS 4* tại Bà Nà",
      price: "4,699,000 ₫",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dm-2",
      regionTag: "DU LỊCH MIỀN TRUNG",
      title: "Du Lịch Phú Yên - Quy Nhơn 3 ngày 2 đêm giá tiết kiệm dịp Lễ",
      price: "4,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "dm-3",
      regionTag: "DU LỊCH MIỀN NAM",
      title: "Du lịch Phú Quốc - Nam Đảo 3 ngày 2 đêm nghỉ dưỡng Resort 5 sao",
      oldPrice: "6,200,000 ₫",
      price: "4,099,000 ₫",
      discountRibbon: "Giảm giá!",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    }
  ],
  quoteSplit: {
    leftScriptText: "Kỳ nghỉ dưỡng đẳng cấp trong tầm tay bạn",
    reviewContent:
      "Tôi đi Singapore vào dịp lễ vừa rồi và cảm thấy các dịch vụ khá ổn từ khách sạn, nhà hàng, phương tiện di chuyển đến hành trình tham quan. Mong rằng công ty sẽ phát huy tốt những điều này và tốt hơn nữa.",
    reviewerName: "Hoàng Minh Tuấn",
    reviewerSource: "Khách hàng thân thiết"
  },
  news: [
    {
      id: "nw-1",
      date: "18/05/2026",
      title: "Cẩm Nang Săn Vé & Combo Nghỉ Dưỡng Châu Âu Mùa Thu Vàng",
      excerpt:
        "Bí quyết đặt sớm gói tour liên tuyến Pháp - Thụy Sĩ - Ý tiết kiệm đến 25% chi phí.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      date: "14/05/2026",
      title: "Top 5 Vịnh Biển Đẹp Nhất Việt Nam Cho Kỳ Nghỉ Gia Đình",
      excerpt:
        "Khám phá Vịnh Hạ Long, Vịnh Vĩnh Hy và Đảo Ngọc Phú Quốc với loạt resort 5 sao ưu đãi.",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      date: "10/05/2026",
      title: "Trải Nghiệm Biệt Thự Nghỉ Dưỡng Riêng Tư Giữa Lòng Nhiệt Đới",
      excerpt:
        "Tận hưởng không gian hồ bơi vô cực riêng biệt và ẩm thực Fine Dining đẳng cấp.",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    }
  ],
  stripGallery: [
    "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=400&q=80"
  ]
};

export default leadGeneration12DefaultData;
