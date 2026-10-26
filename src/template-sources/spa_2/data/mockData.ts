import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa2Data extends ClonedTemplateBaseData {
  treatmentPillars: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  radialSteps: Array<{
    id: string;
    step: string;
    title: string;
    description: string;
    side: "left" | "right";
  }>;
  radialCenterImage: string;
  products: Array<{
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
  }>;
  menuFacial: Array<{
    name: string;
    duration: string;
    price: string;
    desc: string;
  }>;
  menuBody: Array<{
    name: string;
    duration: string;
    price: string;
    desc: string;
  }>;
}

export const spa2DefaultData: Spa2Data = {
  business: {
    name: "Beauty Blendz Spa",
    phone: ["0906 888 789", "028 3888 9999"],
    email: ["booking@beautyblendz.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 09:00 - 21:00",
    rating: 4.9,
    reviewCount: 2450,
    experienceYears: "25 Năm",
    aboutTitle: "Khám phá mới — 25 năm kinh nghiệm",
    aboutText: [
      "Chúng tôi đến cho bạn một trải nghiệm thư giãn tuyệt vời và chăm sóc toàn diện cho cơ thể và tâm hồn. Từng liệu trình tại Beauty Blendz Spa là sự giao thoa tinh tế giữa thảo mộc thiên nhiên thuần khiết và nghệ thuật trị liệu phương Đông.",
      "Với dịch vụ spa chất lượng cao và đội ngũ chuyên viên trị liệu giàu kinh nghiệm, chúng tôi cam kết mang đến cho bạn những giây phút thư thái và đắm chìm trong không gian yên bình."
    ],
    highlights: [
      "DỊCH VỤ CHẤT LƯỢNG CAO VÀ HIỆN ĐẠI NHẤT",
      "SPA CHUYÊN NGHIỆP, THOẢI MÁI VÀ SANG TRỌNG"
    ]
  },
  hero: {
    eyebrow: "Thư giãn & Tái tạo năng lượng",
    title: "Chăm Sóc Toàn Diện Cơ Thể & Tâm Hồn",
    subtitle:
      "Với sự kết hợp hoàn hảo giữa liệu pháp thảo mộc hữu cơ và nghệ thuật trị liệu chuyên sâu, Beauty Blendz Spa mang đến trải nghiệm đánh thức mọi giác quan giữa lòng thành phố.",
    ctaText: "Đặt Lịch Ngay",
    ctaLink: "#dat-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  treatmentPillars: [
    {
      id: "tp-1",
      title: "Điều trị ánh sáng LED sinh học",
      description:
        "Sử dụng ánh sáng sinh học đa bước sóng kích thích sản sinh collagen tự nhiên, làm mờ nếp nhăn, giảm mụn và phục hồi độ sáng mịn cho làn da.",
      icon: "led"
    },
    {
      id: "tp-2",
      title: "Trị liệu bằng tinh dầu thảo mộc",
      description:
        "Chiết xuất tinh dầu hoa oải hương, tràm trà và gỗ đàn hương hữu cơ giúp làm dịu hệ thần kinh, thanh lọc độc tố và nuôi dưỡng làn da mềm mượt.",
      icon: "oil"
    },
    {
      id: "tp-3",
      title: "Massage đá nóng Himalaya",
      description:
        "Kết hợp năng lượng khoáng chất từ đá muối núi lửa ấm nóng giúp đả thông kinh lạc, giải tỏa đau mỏi cổ vai gáy và kích thích tuần hoàn máu.",
      icon: "stone"
    }
  ],
  services: [
    {
      id: "spa-srv-1",
      title: "Chăm sóc da mặt chuyên sâu",
      category: "Facial Ritual",
      description:
        "Thanh lọc lỗ chân lông, cấy tinh chất tổ yến & thảo mộc tươi giúp da căng bóng ngậm nước.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      price: "450.000đ"
    },
    {
      id: "spa-srv-2",
      title: "Massage trị liệu cổ vai gáy",
      category: "Body Therapy",
      description:
        "Ấn huyệt chuyên sâu kết hợp tinh dầu gừng ấm và đá nóng Himalaya giúp tan biến căng cơ, đau đầu.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
      price: "520.000đ"
    },
    {
      id: "spa-srv-3",
      title: "Tắm trắng thảo dược hoàng cung",
      category: "Royal Herbal Bath",
      description:
        "Ủ dưỡng 18 vị thảo mộc cung đình và sữa non nguyên chất giúp bật tông da mịn màng, thơm dịu.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
      price: "780.000đ"
    }
  ],
  radialCenterImage:
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  radialSteps: [
    {
      id: "rs-1",
      step: "01",
      title: "01. Thanh lọc độc tố",
      description:
        "Xông hơi đá muối & thảo dược tươi giúp giãn nở lỗ chân lông, đào thải độc tố tích tụ dưới da.",
      side: "left"
    },
    {
      id: "rs-2",
      step: "02",
      title: "02. Cấp ẩm tầng sâu",
      description:
        "Đưa tinh chất Hyaluronic & chiết xuất hoa hồng vào sâu lớp trung bì, phục hồi hàng rào ẩm.",
      side: "left"
    },
    {
      id: "rs-3",
      step: "03",
      title: "03. Cân bằng nội tiết",
      description:
        "Hương thơm tinh dầu trị liệu kích hoạt hormone hạnh phúc, giảm căng thẳng cortisol hiệu quả.",
      side: "left"
    },
    {
      id: "rs-4",
      step: "04",
      title: "04. Đả thông kinh lạc",
      description:
        "Kỹ thuật bấm huyệt Shiatsu & Thụy Điển khơi thông dòng chảy năng lượng khắp cơ thể.",
      side: "right"
    },
    {
      id: "rs-5",
      step: "05",
      title: "05. Trẻ hóa làn da",
      description:
        "Kích thích tăng sinh sợi collagen và elastin mới, nâng cơ mặt săn chắc tự nhiên.",
      side: "right"
    },
    {
      id: "rs-6",
      step: "06",
      title: "06. Thư giãn giấc ngủ sâu",
      description:
        "Ngâm chân thảo dược ấm và massage đầu giúp cải thiện chứng mất ngủ ngay sau buổi đầu.",
      side: "right"
    }
  ],
  products: [
    {
      id: "prd-1",
      name: "Tinh Dầu Hoa Nhài & Gỗ Tuyết Tùng",
      category: "Aromatherapy Oil",
      price: "350.000đ",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prd-2",
      name: "Huyết Thanh Hoa Hồng Đá Cổ Điển",
      category: "Botanical Serum",
      price: "560.000đ",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prd-3",
      name: "Dầu Massage Thảo Mộc Organic",
      category: "Body Elixir",
      price: "420.000đ",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prd-4",
      name: "Kem Ủ Dưỡng Trắng Nghệ Tây & Sữa Ong Chúa",
      category: "Body Cream",
      price: "780.000đ",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "TAILOR BOTANICS" },
    { id: "cl-2", name: "L'ESSENCE PARIS" },
    { id: "cl-3", name: "BOUTIQUE SPA" },
    { id: "cl-4", name: "KNIGHTSBRIDGE" },
    { id: "cl-5", name: "LONAFLOR HERBAL" },
    { id: "cl-6", name: "AURA NATURALS" }
  ],
  testimonials: [
    {
      id: "sp-t1",
      author: "Thị An",
      role: "KHÁCH HÀNG THÂN THIẾT",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Da của tôi cảm thấy sảng khoái và căng mịn rõ rệt ngay sau liệu trình chăm sóc thảo mộc. Hương tinh dầu dịu nhẹ cùng tiếng nhạc thiền khiến mọi mệt mỏi tan biến."
    },
    {
      id: "sp-t2",
      author: "Bạch Ngân",
      role: "DOANH NHÂN",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Liệu trình massage đá nóng Himalaya và trị liệu cổ vai gáy tại Beauty Blendz Spa thực sự xuất sắc. Kỹ thuật viên ấn huyệt rất chuẩn, giúp mình ngủ ngon hơn hẳn."
    },
    {
      id: "sp-t3",
      author: "Linh Linh",
      role: "BEAUTY BLOGGER",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      content:
        "Không gian ấm cúng, sang trọng với tông màu kem và gỗ trầm. Các sản phẩm tinh dầu đều 100% hữu cơ nên da nhạy cảm của mình hoàn toàn yên tâm."
    }
  ],
  team: [
    {
      id: "sp-m1",
      name: "Emely Jonson",
      position: "CHUYÊN GIA TRỊ LIỆU CỔ VAI GÁY",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-m2",
      name: "Arika Murray",
      position: "CHUYÊN GIA CHĂM SÓC DA THẢO DƯỢC",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-m3",
      name: "Lola Jonson",
      position: "MASTER AROMATHERAPIST",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-m4",
      name: "Rose Marian",
      position: "CHUYÊN GIA MASSAGE ĐÁ NÓNG",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ],
  menuFacial: [
    {
      name: "Thanh lọc da thảo mộc & Xông hơi hoa cúc",
      duration: "60 phút",
      price: "350.000đ",
      desc: "Làm sạch sâu lỗ chân lông, hút bã nhờn và cân bằng độ pH"
    },
    {
      name: "Điện di tinh chất Vitamin C & Ánh sáng LED",
      duration: "75 phút",
      price: "490.000đ",
      desc: "Làm mờ thâm sạm, đều màu da và kích thích sản sinh collagen"
    },
    {
      name: "Trẻ hóa nâng cơ mặt Ngọc Bích Guasha",
      duration: "75 phút",
      price: "550.000đ",
      desc: "Massage nâng cơ bằng đá Ngọc Bích tự nhiên giúp thon gọn V-line"
    },
    {
      name: "Ủ mặt nạ vàng 24K & Huyết thanh Tổ Yến",
      duration: "90 phút",
      price: "680.000đ",
      desc: "Phục hồi làn da lão hóa, cấp ẩm tầng sâu và căng bóng tức thì"
    },
    {
      name: "Trị liệu xóa nhăn vùng mắt & Cấp ẩm môi",
      duration: "45 phút",
      price: "290.000đ",
      desc: "Giảm quầng thâm, bọng mắt bằng sóng RF ấm và tinh chất trà xanh"
    }
  ],
  menuBody: [
    {
      name: "Massage Full Body Đá Nóng Himalaya",
      duration: "90 phút",
      price: "520.000đ",
      desc: "Kết hợp tinh dầu thảo mộc ấm và đá muối khoáng giảm đau nhức cơ"
    },
    {
      name: "Trị liệu chuyên sâu Cổ - Vai - Gáy - Thắt lưng",
      duration: "60 phút",
      price: "420.000đ",
      desc: "Ấn huyệt đả thông kinh lạc, giải phóng căng cơ do ngồi văn phòng"
    },
    {
      name: "Tẩy tế bào chết Cà phê Đắk Lắk & Dầu Dừa",
      duration: "45 phút",
      price: "320.000đ",
      desc: "Loại bỏ da sần sùi, nuôi dưỡng làn da toàn thân mịn màng tươi sáng"
    },
    {
      name: "Tắm trắng Thảo Dược Hoàng Cung 18 vị",
      duration: "90 phút",
      price: "780.000đ",
      desc: "Ủ dưỡng thảo mộc tự nhiên, bật tông trắng hồng an toàn không bắt nắng"
    },
    {
      name: "Gội đầu dưỡng sinh Trung Hoa & Ngâm chân",
      duration: "65 phút",
      price: "360.000đ",
      desc: "Nước gội bồ kết sả chanh nấu tươi kết hợp bấm huyệt đầu giúp ngủ sâu"
    }
  ],
  news: [
    {
      id: "sp-n1",
      title: "Bí quyết thanh lọc cơ thể bằng liệu pháp thuỷ trị liệu & thảo mộc tươi",
      date: "16 THÁNG 08, 2025",
      category: "CẨM NANG SPA",
      excerpt:
        "Khám phá cách kết hợp xông hơi thảo dược cùng tinh dầu thiên nhiên giúp giải tỏa căng thẳng và làm sáng da từ bên trong.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sp-n2",
      title: "5 lợi ích tuyệt vời của massage đá nóng Himalaya đối với giấc ngủ",
      date: "12 THÁNG 08, 2025",
      category: "TRỊ LIỆU CƠ THỂ",
      excerpt:
        "Nhiệt lượng dịu êm từ đá muối núi lửa giúp thư giãn hệ thần kinh giao cảm, giảm đau mỏi vai gáy và đưa bạn vào giấc ngủ sâu.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sp-n3",
      title: "Nguồn gốc nghệ thuật xông hương & tắm thảo dược cung đình xưa",
      date: "05 THÁNG 08, 2025",
      category: "VĂN HÓA DƯỠNG SINH",
      excerpt:
        "Tìm hiểu các công thức làm đẹp cổ truyền từ hoa nhài, bạch phục linh và nghệ tây được tái hiện trọn vẹn tại Beauty Blendz.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
