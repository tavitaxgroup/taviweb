import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung5CategoryCard {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface XayDung5WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: "roller" | "bucket" | "board" | "droplet" | "swatch" | "brush";
  gradient: string;
}

export interface XayDung5GalleryRoom {
  id: string;
  title: string;
  colorTone: string;
  paintCode: string;
  image: string;
}

export interface XayDung5FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface XayDung5TemplateData extends ClonedTemplateBaseData {
  categoryCards: XayDung5CategoryCard[];
  introHeadline: string;
  introHighlights: string[];
  whyChooseItems: XayDung5WhyChooseItem[];
  galleryRooms: XayDung5GalleryRoom[];
  faqs: XayDung5FaqItem[];
  ctaBannerPhone: string;
}

export const xayDung5DefaultData: XayDung5TemplateData = {
  business: {
    name: "Mona Paint",
    logo: "",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["tuvan@monapaint.vn", "baogia@monapaint.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 20:00",
    rating: 4.9,
    reviewCount: 342,
    experienceYears: "15+",
    aboutTitle: "Chúng tôi cung cấp dịch vụ sơn dân cư và thương mại",
    aboutText: [
      "Dịch vụ Sơn Nhà Đẳng Cấp của Mona Paint được thiết kế dành riêng cho những khách hàng mong muốn trải nghiệm các dòng sơn chính hãng tốt nhất và quy trình thi công hoàn hảo nhất. Với dịch vụ sơn nhà trọn gói, bạn không cần lo lắng bất cứ điều gì và thoải mái tận hưởng không gian sống đỉnh cao."
    ],
    highlights: [
      "Chất lượng hoàn thiện",
      "Hỗ trợ tốt nhất",
      "Giá tốt hơn"
    ]
  },
  hero: {
    eyebrow: "DỊCH VỤ SƠN NHÀ & PHỐI MÀU CHUYÊN NGHIỆP",
    title: "Mang Sắc Màu Mơ Ước Đến Ngôi Nhà Bạn",
    subtitle:
      "Chuyên thi công sơn nước nội ngoại thất, chống thấm chuyên sâu, xử lý bề mặt tường và phối màu 3D chuẩn phong thủy cho căn hộ, biệt thự và văn phòng.",
    ctaText: "YÊU CẦU BÁO GIÁ",
    ctaLink: "#bao-gia",
    secondaryCtaText: "BỘ SƯU TẬP MÀU SƠN",
    secondaryCtaLink: "#bo-suu-tap",
    backgroundImage:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  categoryCards: [
    {
      id: "cat-1",
      title: "DỰ ÁN THƯƠNG MẠI",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      description:
        "Thi công sơn văn phòng, showroom, trung tâm thương mại, tòa nhà cao tầng và nhà xưởng chuẩn tiến độ."
    },
    {
      id: "cat-2",
      title: "DỰ ÁN KHU DÂN CƯ",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      description:
        "Tư vấn bảng màu phong thủy, sơn mới và cải tạo căn hộ chung cư, nhà phố, biệt thự gia đình."
    },
    {
      id: "cat-3",
      title: "DỰ ÁN TRỌN GÓI",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
      description:
        "Bao gồm khảo sát độ ẩm tường, bả bột trét 2 lớp, sơn lót kháng kiềm, sơn phủ hoàn thiện và vệ sinh bàn giao."
    }
  ],
  introHeadline: "Chúng tôi cung cấp dịch vụ sơn dân cư và thương mại",
  introHighlights: [
    "Chất lượng hoàn thiện",
    "Hỗ trợ tốt nhất",
    "Giá tốt hơn"
  ],
  whyChooseItems: [
    {
      id: "why-1",
      title: "Sơn nước",
      description:
        "Thi công sơn nước nội thất bóng mịn, lau chùi vượt trội, kháng khuẩn và an toàn tuyệt đối cho sức khỏe gia đình.",
      icon: "roller",
      gradient: "from-[#f59e0b] to-[#ea580c]"
    },
    {
      id: "why-2",
      title: "Chống thấm nước",
      description:
        "Xử lý chống thấm tường ngoài, sân thượng, ban công và nhà vệ sinh bằng vật liệu Kova, Sika, Dulux Weathershield.",
      icon: "bucket",
      gradient: "from-[#3b82f6] to-[#8b5cf6]"
    },
    {
      id: "why-3",
      title: "Demo màu sơn",
      description:
        "Hỗ trợ phối màu 3D trực quan trên hình chụp thực tế ngôi nhà và sơn thử mẫu trực tiếp lên tường trước khi thi công.",
      icon: "board",
      gradient: "from-[#ec4899] to-[#f97316]"
    },
    {
      id: "why-4",
      title: "Loại bỏ nấm mốc",
      description:
        "Cạo bỏ lớp sơn bong tróc, xử lý hóa chất diệt rêu mốc tận gốc và phủ lớp lót kháng kiềm chuyên dụng.",
      icon: "droplet",
      gradient: "from-[#10b981] to-[#06b6d4]"
    },
    {
      id: "why-5",
      title: "Bảng màu đa dạng",
      description:
        "Hơn 2.000 mã màu quạt sơn Dulux, Jotun, Nippon, Mykolor pha máy vi tính chính hãng chuẩn sắc độ 100%.",
      icon: "swatch",
      gradient: "from-[#8b5cf6] to-[#ec4899]"
    },
    {
      id: "why-6",
      title: "Sơn ngoại thất",
      description:
        "Màng sơn co giãn che phủ vết nứt chân chim, chống tia UV giảm nhiệt và bền màu lên đến 8 - 10 năm trước mưa nắng.",
      icon: "brush",
      gradient: "from-[#06b6d4] to-[#2563eb]"
    }
  ],
  galleryRooms: [
    {
      id: "room-1",
      title: "Phòng khách Xanh Đại Dương",
      colorTone: "Ocean Blue",
      paintCode: "DLX-45BB 21/340",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-2",
      title: "Phòng sinh hoạt Xanh Lá Nhiệt Đới",
      colorTone: "Fresh Lime Green",
      paintCode: "DLX-70GY 35/420",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-3",
      title: "Không gian Studio Tím Lavender Đương Đại",
      colorTone: "Royal Violet",
      paintCode: "DLX-50RB 18/310",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-4",
      title: "Căn hộ thông tầng Kem Ánh Kim",
      colorTone: "Warm Ivory Loft",
      paintCode: "DLX-30YY 78/090",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-5",
      title: "Phòng khách Cam Hoàng Hôn Ấm Áp",
      colorTone: "Sunset Amber",
      paintCode: "DLX-20YR 28/550",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-6",
      title: "Phòng nghỉ Xanh Ngọc Bích Pastel",
      colorTone: "Mint Turquoise",
      paintCode: "DLX-90GG 52/240",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-7",
      title: "Phòng đọc sách Nâu Olive Tự Nhiên",
      colorTone: "Natural Olive",
      paintCode: "DLX-40YY 41/175",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "room-8",
      title: "Phòng ăn Đỏ San Hô & Trắng Sứ",
      colorTone: "Coral Terracotta",
      paintCode: "DLX-10YR 21/435",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Lợi ích việc sử dụng sơn chất lượng cao cho ngôi nhà",
      date: "8 Tháng Ba, 2026",
      category: "Kinh nghiệm chọn sơn",
      excerpt:
        "Sử dụng sơn chính hãng cao cấp giúp bảo vệ kết cấu tường khỏi thấm dột, chống bám bẩn, giữ màu tươi mới suốt 10 năm và tiết kiệm chi phí bảo trì.",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Dịch vụ sơn nhà trọn gói nhanh chóng, sạch sẽ",
      date: "14 Tháng Ba, 2026",
      category: "Dịch vụ thi công",
      excerpt:
        "Quy trình che chắn nội thất kỹ lưỡng, xả nhám hút bụi công nghiệp và thi công chuẩn định mức giúp bàn giao công trình nhanh gọn trong 2 - 4 ngày.",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "3 cách bảo quản sơn đúng cách hợp lý sau khi mở nắp",
      date: "22 Tháng Ba, 2026",
      category: "Mẹo hay nhà đẹp",
      excerpt:
        "Hướng dẫn cách vệ sinh viền thùng sơn, bọc màng kín khí và lưu trữ ở nhiệt độ thoáng mát để sơn dư luôn giữ nguyên chất lượng cho lần dặm vá sau.",
      image:
        "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=800&q=80"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Có một quy trình chuẩn nào để sơn một căn phòng không?",
      answer:
        "Quy trình chuẩn 5 bước bao gồm: (1) Che chắn đồ đạc & sàn nhà bằng bạt chuyên dụng; (2) Vệ sinh, xử lý chống thấm và xả nhám phẳng bề mặt tường; (3) Thi công 2 lớp bột trét làm phẳng; (4) Lăn 1 lớp sơn lót kháng kiềm; (5) Lăn 2 lớp sơn phủ màu hoàn thiện và vệ sinh bàn giao."
    },
    {
      id: "faq-2",
      question: "Đối với bề mặt hồ vữa mới, tôi nên chuẩn bị trước khi sơn như thế nào?",
      answer:
        "Tường hồ vữa mới xây cần thời gian bảo dưỡng khô tự nhiên từ 21 - 28 ngày để độ ẩm tường giảm xuống dưới 16% (đo bằng máy đo độ ẩm Protimeter). Sau đó dùng đá mài làm sạch cát thừa, bụi bẩn trước khi trét bột và lăn sơn lót kháng kiềm."
    },
    {
      id: "faq-3",
      question: "Sơn lót chống kiềm ngoài trời có dùng để sơn lót trong nhà không?",
      answer:
        "Hoàn toàn dùng được và rất tốt! Sơn lót chống kiềm ngoại thất có độ kháng kiềm, chống ẩm mốc và độ bám dính cao hơn dòng nội thất. Tuy nhiên để tối ưu chi phí, khu vực trong nhà thông thoáng bạn chỉ cần dùng sơn lót nội thất chuyên dụng."
    },
    {
      id: "faq-4",
      question: "Tôi có thể tìm thấy các giải pháp cho các vấn đề về sơn ở đâu?",
      answer:
        "Bạn có thể liên hệ trực tiếp hotline kỹ thuật của chúng tôi. Kỹ sư sẽ đến tận nơi khảo sát miễn phí các hiện tượng tường bị phấn hóa, bong tróc, muối hóa hay thấm chân tường và lập phương án xử lý triệt để."
    },
    {
      id: "faq-5",
      question: "Làm thế nào tôi có thể chắc chắn tôi chọn sơn chuẩn chất lượng?",
      answer:
        "Toàn bộ thùng sơn đưa vào công trình đều nguyên đai nguyên kiện từ nhà máy Dulux, Jotun, Nippon, Kova, có đầy đủ chứng nhận CO/CQ, hóa đơn VAT và mã QR kiểm tra hàng chính hãng ngay tại công trình."
    },
    {
      id: "faq-6",
      question: "Hình thức thanh toán khi tôi mua sơn và thuê thi công?",
      answer:
        "Khách hàng thanh toán linh hoạt theo từng giai đoạn nghiệm thu thực tế: Tạm ứng 30% khi tập kết vật tư chính hãng đến công trình, 40% sau khi hoàn thành lớp bả & sơn lót, và 30% còn lại sau khi nghiệm thu bàn giao hoàn thiện."
    }
  ],
  clients: [
    { id: "cl-1", name: "COPENHAGEN DESIGN" },
    { id: "cl-2", name: "KINGSMEN TY" },
    { id: "cl-3", name: "JULIO STEVE" },
    { id: "cl-4", name: "RYAN MANSION" }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Chị Nga",
      role: "Facebook",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Nếu khách hàng cần giải pháp cho bất kỳ sự cố hoặc các vấn đề về sơn: sơn nước, sơn dầu, sơn tàu, sơn cầu, sơn đường, sơn chống thấm, sơn sàn epoxy, sơn chịu mặn cho miền biển, sơn kháng hà... các vấn đề về phong thủy màu sắc... khách hàng chỉ cần vào website hoặc gọi trực tiếp cho tư vấn của website khách hàng sẽ được giải đáp mọi thắc mắc."
    }
  ],
  ctaBannerPhone: "1900 636 648"
};

export default xayDung5DefaultData;
