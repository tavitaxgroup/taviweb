import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CardinalNewServiceCard {
  id: string;
  title: string;
  image: string;
  description: string;
  priceRange: string;
}

export interface CardinalCriterionItem {
  id: string;
  title: string;
  iconName:
    | "clock"
    | "settings"
    | "calendar"
    | "dollar"
    | "thumbsUp"
    | "shield";
}

export interface CardinalMainServiceTab {
  id: "PHO_BIEN" | "NOI_THAT" | "NGOAI_THAT";
  tabLabel: string;
  heading: string;
  description: string;
  items: Array<{
    id: string;
    label: string;
    iconType: "computer" | "wrench" | "fuel" | "steering" | "road" | "exhaust";
  }>;
}

export interface CardinalCarBrandShowcase {
  id: string;
  brand: string;
  modelName: string;
  colorHex: string;
  accentHex: string;
}

export interface CardinalFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GarageOto5Data extends ClonedTemplateBaseData {
  newServicesSection: {
    title: string;
    items: CardinalNewServiceCard[];
  };
  criteriaSection: {
    title: string;
    items: CardinalCriterionItem[];
  };
  mainServicesSection: {
    title: string;
    mechanicImage: string;
    tabs: CardinalMainServiceTab[];
  };
  carBrandsSection: {
    title: string;
    brands: CardinalCarBrandShowcase[];
  };
  faqSection: {
    title: string;
    items: CardinalFaqItem[];
    carImage: string;
  };
  footerGallery: string[];
}

export const garageOto5DefaultData: GarageOto5Data = {
  business: {
    name: "Cardinal Auto",
    phone: ["076 922 0162", "0908 922 162"],
    email: ["cskh@cardinalauto.vn", "dichvu@cardinalauto.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - thứ 6 (9h - 18h)",
    rating: 4.9,
    reviewCount: 1650,
    aboutTitle: "Trung Tâm Chăm Sóc, Detailing & Bảo Dưỡng Ô Tô Chuyên Nghiệp",
    aboutText: [
      "Chuyên sửa chữa, bảo trì, nâng cấp các loại ô tô từ phổ thông đến hạng sang của các hãng xe nổi tiếng trên thế giới.",
    ],
  },
  hero: {
    eyebrow: "TRUNG TÂM CHĂM SÓC & BẢO DƯỠNG Ô TÔ",
    title: "TRUNG TÂM BẢO DƯỠNG SỬA CHỮA ÔTÔ CHUYÊN NGHIỆP",
    subtitle:
      "Chuyên sửa chữa, bảo trì, nâng cấp các loại ôtô từ phổ thông đến hạng sang của các hãng xe nổi tiếng trên thế giới.",
    ctaText: "ĐẶT HẸN",
    ctaLink: "#dat-hen",
    secondaryCtaText: "LIÊN HỆ",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=85",
  },
  newServicesSection: {
    title: "DỊCH VỤ MỚI",
    items: [
      {
        id: "ns-1",
        title: "Dịch vụ rửa xe hơi ô tô",
        image:
          "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=700&q=80",
        description:
          "Rửa xe bọt tuyết chi tiết 12 bước, tẩy ố kính, vệ sinh mâm lốp và dưỡng bóng sơn tiêu chuẩn Detailing.",
        priceRange: "Từ 150.000đ",
      },
      {
        id: "ns-2",
        title: "Dịch vụ đồng sơn",
        image:
          "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=700&q=80",
        description:
          "Đồng sơn phục hồi va chạm, đánh bóng hiệu chỉnh bề mặt sơn và phủ Ceramic bảo vệ sơn bóng đẹp dài lâu.",
        priceRange: "Từ 800.000đ",
      },
      {
        id: "ns-3",
        title: "Bảo dưỡng, sửa chữa xe ô tô",
        image:
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=700&q=80",
        description:
          "Bảo dưỡng định kỳ các cấp 5.000km – 100.000km, đại tu động cơ, hộp số, hệ thống treo và điện lạnh ô tô.",
        priceRange: "Từ 650.000đ",
      },
      {
        id: "ns-4",
        title: "Bảo hiểm Ôtô",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
        description:
          "Tư vấn gói bảo hiểm vật chất thân vỏ ưu đãi và hỗ trợ giám định bồi thường trực tiếp tại xưởng.",
        priceRange: "Hỗ trợ 24/7",
      },
    ],
  },
  criteriaSection: {
    title: "TIÊU CHÍ HOẠT ĐỘNG",
    items: [
      {
        id: "cr-1",
        title: "Không để khách hàng đợi lâu",
        iconName: "clock",
      },
      {
        id: "cr-2",
        title: "Ưu tiên sửa chữa, hạn chế thay thế",
        iconName: "settings",
      },
      {
        id: "cr-3",
        title: "Đặt hẹn online",
        iconName: "calendar",
      },
      {
        id: "cr-4",
        title: "Cam kết đúng giá",
        iconName: "dollar",
      },
      {
        id: "cr-5",
        title: "Đội ngũ thợ hơn 10 năm kinh nghiệm",
        iconName: "thumbsUp",
      },
      {
        id: "cr-6",
        title: "Bảo hành lâu dài",
        iconName: "shield",
      },
    ],
  },
  mainServicesSection: {
    title: "DỊCH VỤ CHÍNH",
    mechanicImage:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=85",
    tabs: [
      {
        id: "PHO_BIEN",
        tabLabel: "PHỔ BIẾN",
        heading: "Công ty TNHH Cardinal Auto",
        description:
          "Chuyên sửa chữa, bảo trì, nâng cấp các loại ôtô từ phổ thông đến hạng sang của các hãng xe nổi tiếng trên thế giới.",
        items: [
          {
            id: "ms-1",
            label: "Chẩn đoán máy tính hoàn chỉnh",
            iconType: "computer",
          },
          {
            id: "ms-2",
            label: "Phân tích an toàn hoàn chỉnh",
            iconType: "wrench",
          },
          {
            id: "ms-3",
            label: "Dịch vụ hệ thống nhiên liệu",
            iconType: "fuel",
          },
          {
            id: "ms-4",
            label: "Cân chỉnh thước lái & Hệ thống treo",
            iconType: "steering",
          },
          {
            id: "ms-5",
            label: "Chuyên sửa chữa phanh",
            iconType: "road",
          },
          {
            id: "ms-6",
            label: "Bộ giảm thanh và Hệ thống xả",
            iconType: "exhaust",
          },
        ],
      },
      {
        id: "NOI_THAT",
        tabLabel: "NỘI THẤT",
        heading: "Chăm Sóc & Phục Hồi Nội Thất Cao Cấp",
        description:
          "Làm sạch sâu từng chi tiết da, nỉ, taplo và khử khuẩn hệ thống điều hòa bằng công nghệ hơi nước nóng chuẩn Detailing quốc tế.",
        items: [
          {
            id: "ms-7",
            label: "Vệ sinh nội thất hơi nước nóng",
            iconType: "computer",
          },
          {
            id: "ms-8",
            label: "Dưỡng mềm & Phủ Ceramic ghế da",
            iconType: "wrench",
          },
          {
            id: "ms-9",
            label: "Khử mùi Ozone & Diệt khuẩn dàn lạnh",
            iconType: "fuel",
          },
          {
            id: "ms-10",
            label: "Bọc ghế da Nappa & Khâu vô lăng",
            iconType: "steering",
          },
          {
            id: "ms-11",
            label: "Cách âm chống ồn toàn diện 3M",
            iconType: "road",
          },
          {
            id: "ms-12",
            label: "Nâng cấp màn hình Android & Âm thanh",
            iconType: "exhaust",
          },
        ],
      },
      {
        id: "NGOAI_THAT",
        tabLabel: "NGOẠI THẤT",
        heading: "Đồng Sơn, Hiệu Chỉnh Sơn & Phủ Ceramic",
        description:
          "Bảo vệ lớp sơn nguyên bản khỏi tia UV, mưa axit và vết trầy xước dăm với quy trình hiệu chỉnh bề mặt sơn 3 bước chuyên sâu.",
        items: [
          {
            id: "ms-13",
            label: "Đánh bóng hiệu chỉnh bề mặt sơn",
            iconType: "computer",
          },
          {
            id: "ms-14",
            label: "Phủ gốm Ceramic Pro 9H bóng gương",
            iconType: "wrench",
          },
          {
            id: "ms-15",
            label: "Dán PPF bảo vệ sơn chống trầy xước",
            iconType: "fuel",
          },
          {
            id: "ms-16",
            label: "Phục hồi & Đánh bóng đèn pha",
            iconType: "steering",
          },
          {
            id: "ms-17",
            label: "Tẩy ố mốc kính & Phủ Nano trượt nước",
            iconType: "road",
          },
          {
            id: "ms-18",
            label: "Phủ gầm chống rỉ sét gốc cao su non",
            iconType: "exhaust",
          },
        ],
      },
    ],
  },
  carBrandsSection: {
    title: "CHUYÊN PHỤC VỤ & SỬA CHỮA CÁC HÃNG XE",
    brands: [
      {
        id: "br-1",
        brand: "FORD",
        modelName: "Luxury Sedan & SUV",
        colorHex: "#e2e8f0",
        accentHex: "#64748b",
      },
      {
        id: "br-2",
        brand: "TOYOTA",
        modelName: "MPV & Crossover",
        colorHex: "#cbd5e1",
        accentHex: "#0284c7",
      },
      {
        id: "br-3",
        brand: "FERRARI",
        modelName: "Sports & Supercar",
        colorHex: "#38bdf8",
        accentHex: "#0369a1",
      },
      {
        id: "br-4",
        brand: "JEEP",
        modelName: "4x4 Off-Road SUV",
        colorHex: "#f97316",
        accentHex: "#9a3412",
      },
    ],
  },
  faqSection: {
    title: "CÂU HỎI THƯỜNG GẶP",
    carImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
    items: [
      {
        id: "fq-1",
        question: "Tại sao phanh kêu ?",
        answer:
          "Tiếng kêu rít khi đạp phanh thường do má phanh đã mòn tới vạch cảnh báo kim loại, đĩa phanh bị bám cát bẩn/rỉ sét sau mưa hoặc bề mặt đĩa phanh bị xước không đều. Bạn nên đưa xe tới xưởng để kiểm tra độ dày má phanh và láng đĩa phanh kịp thời.",
      },
      {
        id: "fq-2",
        question: "Có nên làm nóng máy trước khi đi ?",
        answer:
          "Với các dòng xe phun xăng điện tử hiện đại, bạn chỉ cần khởi động chờ khoảng 30 – 60 giây để dầu bôi trơn bơm đều lên các chi tiết máy rồi di chuyển nhẹ nhàng ở tốc độ thấp trong 1 – 2km đầu tiên.",
      },
      {
        id: "fq-3",
        question: "ABS hoạt động như thế nào và những lưu ý?",
        answer:
          "Hệ thống chống bó cứng phanh ABS tự động nhấp nhả phanh liên tục hàng chục lần mỗi giây khi phanh gấp, giúp bánh xe không bị khóa cứng và người lái vẫn đánh lái tránh chướng ngại vật an toàn.",
      },
      {
        id: "fq-4",
        question: "Tại sao xe nhả khói vào buổi sáng ?",
        answer:
          "Khói trắng mỏng tan nhanh vào buổi sáng sớm thường là hơi nước ngưng tụ trong ống xả. Tuy nhiên nếu khói trắng đặc kéo dài, khói xanh hoặc khói đen kèm mùi khét thì cần kiểm tra xéc-măng, phớt git xu-páp hoặc kim phun nhiên liệu.",
      },
    ],
  },
  testimonials: [
    {
      id: "tes-1",
      author: "KHÁCH HÀNG MINH ANH",
      role: "24 tuổi",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi thực sự hài lòng vì dịch vụ ở đây giúp tôi tiết kiệm rất nhiều thời gian. Chi phí sửa chữa & thay thế phụ tùng rất hợp lý. Nhân viên, thợ máy ở đây rất nhiệt tình, tư vấn rõ ràng, báo giá cụ thể, minh bạch",
    },
    {
      id: "tes-2",
      author: "ANH QUỐC TRƯỞNG",
      role: "35 tuổi",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Gói phủ Ceramic và vệ sinh khoang máy tại Cardinal Auto thực hiện cực kỳ tỉ mỉ. Xe nhận lại sáng bóng như lúc mới dắt từ showroom ra, chế độ bảo hành điện tử rất chu đáo.",
    },
  ],
  news: [
    {
      id: "n-1",
      title: "NHỮNG MẸO LÁI Ô TÔ AN TOÀN CƠ BẢN",
      date: "19/02/2026",
      category: "An toàn giao thông",
      excerpt:
        "Sắp xếp thời gian, không phân tâm, sử dụng GPS, là những thói quen cùng kỹ năng quan sát điểm mù giúp mọi chuyến đi an toàn...",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "n-2",
      title: "THỬ NGHIỆM VÀ ĐÁNH GIÁ TOYOTA LAND CRUISER",
      date: "15/02/2026",
      category: "Đánh giá xe",
      excerpt:
        "Toyota Land Cruiser có khả năng off-road tốt và độ tin cậy cao trong mọi điều kiện địa hình khắc nghiệt...",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "n-3",
      title: "NHỮNG ĐIỀU CẦN LƯU Ý KHI MUA XE ĐÃ QUA SỬ DỤNG",
      date: "10/02/2026",
      category: "Kinh nghiệm mua xe",
      excerpt:
        "Việc mua lại ôtô cũ để tiết kiệm chi phí không còn quá xa lạ, tuy nhiên cần kiểm tra kỹ lịch sử bảo dưỡng và khung gầm...",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "n-4",
      title: "NHỮNG MẪU XE CỠ NHỎ MỚI ĐÁNG MUA NHẤT HIỆN NAY",
      date: "05/02/2026",
      category: "Tư vấn xe",
      excerpt:
        "Ford Focus, Mazda 3, Honda Civic và các dòng xe đô thị tiết kiệm nhiên liệu đều nằm trong danh sách được ưa chuộng...",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    },
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=400&q=75",
  ],
};
