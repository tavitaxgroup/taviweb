import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TrungTamTiengAnh16Data extends ClonedTemplateBaseData {
  programs4: Array<{
    id: string;
    title: string;
    ageRange: string;
    description: string;
    bgColor: string;
    image: string;
  }>;
  processSteps3: Array<{
    id: string;
    title: string;
    description: string;
    badgeColor: string;
    image: string;
  }>;
  schoolActivities6: Array<{
    id: string;
    title: string;
    description: string;
    color: string;
  }>;
  dedicatedServices5: Array<{
    id: string;
    tabLabel: string;
    title: string;
    description: string;
    image: string;
  }>;
}

export const trungTamTiengAnh16DefaultData: TrungTamTiengAnh16Data = {
  business: {
    name: "Tiny Treasures",
    phone: ["(+84) 0313728397", "1900 636 648"],
    email: ["tuyensinh@tinytreasures.edu.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:00 - 17:30",
    rating: 4.9,
    reviewCount: 1250,
    aboutTitle: "Câu chuyện về chúng tôi",
    aboutText: [
      "Câu chuyện bắt đầu từ niềm tin vững chắc rằng mỗi đứa trẻ đều có quyền nhận được một môi trường học tập song ngữ an toàn, thân thiện và đầy yêu thương. Từ đó, chúng tôi xây dựng Trường Mầm non Quốc tế Tiny Treasures như ngôi nhà thứ hai cho trẻ, nơi bé phát triển toàn diện và khám phá tiềm năng bản thân."
    ],
    highlights: [
      "Môi trường học tập song ngữ đa dạng",
      "Sự quan tâm và chăm sóc cá nhân",
      "Học tập qua trải nghiệm thực tế"
    ]
  },
  hero: {
    eyebrow: "THẾ GIỚI ĐẦY CẢM HỨNG VÀ PHÁT TRIỂN",
    title: "Nuôi Dưỡng Tương Lai Với Sáng Tạo Và Yêu Thương",
    subtitle:
      "Với môi trường song ngữ Anh – Việt an toàn, thân thiện và đầy yêu thương, chúng tôi cam kết mang đến cho trẻ những trải nghiệm học tập đa dạng và phát triển toàn diện.",
    ctaText: "THAM GIA NGAY",
    ctaLink: "#goi-gia",
    secondaryCtaText: "TÌM HIỂU THÊM",
    secondaryCtaLink: "#chuong-trinh-hoc",
    backgroundImage:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
  },
  programs4: [
    {
      id: "prg-1",
      title: "Xã hội, cuộc sống",
      ageRange: "3 - 6 năm",
      description:
        "Xây dựng nền tảng kỹ năng sống, giao tiếp tự tin trong các lĩnh vực tiếng Việt, tiếng Anh, toán tư duy và khoa học.",
      bgColor: "bg-[#6366f1]",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prg-2",
      title: "Thể dục, ngoại khóa",
      ageRange: "3 - 6 năm",
      description:
        "Rèn luyện thể lực, vận động tinh và thô qua các hoạt động dã ngoại thiên nhiên, bơi lội và trò chơi đồng đội.",
      bgColor: "bg-[#84cc16]",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prg-3",
      title: "Năng khiếu, thể chất",
      ageRange: "3 - 10 năm",
      description:
        "Đánh thức cảm xúc nghệ thuật với hội họa, cảm thụ âm nhạc, múa hiện đại và kịch nghệ bằng tiếng Anh.",
      bgColor: "bg-[#f59e0b]",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prg-4",
      title: "Nền tảng kiến thức",
      ageRange: "2 - 5 năm",
      description:
        "Làm quen ngữ âm Phonics tiếng Anh chuẩn bản xứ, toán học Montessori và khám phá thế giới quan sinh động.",
      bgColor: "bg-[#0284c7]",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
    }
  ],
  processSteps3: [
    {
      id: "ps-1",
      title: "Tiếp nhận và tạo quan hệ",
      description:
        "Chúng tôi xây dựng môi trường thân thiện và đáng tin cậy để trẻ làm quen cô giáo, bạn bè một cách tự nhiên.",
      badgeColor: "bg-[#6366f1]",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ps-2",
      title: "Hướng dẫn và hỗ trợ",
      description:
        "Phương pháp giáo dục lấy trẻ làm trung tâm, khích lệ bé tự tay thực hành và đặt câu hỏi khám phá.",
      badgeColor: "bg-[#ef4444]",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "ps-3",
      title: "Theo dõi và đánh giá",
      description:
        "Sổ liên lạc điện tử cập nhật hình ảnh, thực đơn và biểu đồ phát triển ngôn ngữ – thể chất hàng tuần.",
      badgeColor: "bg-[#f97316]",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80"
    }
  ],
  schoolActivities6: [
    {
      id: "act-1",
      title: "Tham quan, khám phá",
      description:
        "Trẻ có cơ hội khám phá và tìm hiểu về thế giới xung quanh một cách thực tế và thú vị.",
      color: "border-sky-300 text-sky-500"
    },
    {
      id: "act-2",
      title: "Ngày hội gia đình",
      description:
        "Gắn kết yêu thương giữa ba mẹ, thầy cô và các bé qua những ngày hội cuối tuần sôi nổi.",
      color: "border-indigo-300 text-indigo-500"
    },
    {
      id: "act-3",
      title: "Biểu diễn, sự kiện",
      description:
        "Sân khấu nhạc kịch tiếng Anh giúp bé tự tin thể hiện tài năng trước đám đông.",
      color: "border-rose-300 text-rose-500"
    },
    {
      id: "act-4",
      title: "Hoạt động ngoài trời",
      description:
        "Sân chơi cỏ tự nhiên, khu vận động liên hoàn và vườn rau hữu cơ do chính tay bé chăm sóc.",
      color: "border-amber-300 text-amber-500"
    },
    {
      id: "act-5",
      title: "Hội thảo, thuyết trình",
      description:
        "Rèn luyện tư duy ngôn ngữ mạch lạc qua các buổi kể chuyện Show & Tell hàng tuần.",
      color: "border-lime-400 text-lime-600"
    },
    {
      id: "act-6",
      title: "Xã hội, từ thiện",
      description:
        "Nuôi dưỡng lòng nhân ái và biết sẻ chia thông qua các dự án thiện nguyện nhỏ phù hợp lứa tuổi.",
      color: "border-orange-300 text-orange-500"
    }
  ],
  team: [
    {
      id: "tc-1",
      name: "Linh Min",
      position: "Giáo Viên, Đồng Sáng Lập",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-2",
      name: "Văn Long",
      position: "Giáo Viên Song Ngữ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-3",
      name: "Bạch Ngân",
      position: "Giáo Viên Montessori",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "tc-4",
      name: "Thùy Dương",
      position: "Giáo Viên Năng Khiếu",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    }
  ],
  dedicatedServices5: [
    {
      id: "ds-1",
      tabLabel: "Tham quan",
      title: "Chương trình tham quan",
      description:
        "Chúng tôi tổ chức các chuyến tham quan thú vị và giáo dục để mở rộng kiến thức và trải nghiệm của trẻ. Chúng tôi chọn lựa các địa điểm tham quan phù hợp, bao gồm bảo tàng, công viên, vườn thú và trang trại nông nghiệp sinh thái.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ds-2",
      tabLabel: "Thực phẩm",
      title: "Thực đơn dinh dưỡng hữu cơ",
      description:
        "Bếp ăn một chiều chuẩn an toàn vệ sinh thực phẩm với nguồn nguyên liệu hữu cơ tươi sạch mỗi ngày, thực đơn được thiết kế bởi chuyên gia dinh dưỡng nhi khoa.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ds-3",
      tabLabel: "Đưa đón",
      title: "Xe buýt đưa đón tận nhà an toàn",
      description:
        "Hệ thống xe đưa đón đời mới có bảo mẫu đi kèm chăm sóc bé suốt hành trình và định vị GPS thông báo cho phụ huynh theo thời gian thực.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ds-4",
      tabLabel: "Âm nhạc",
      title: "Phòng cảm thụ âm nhạc & Nghệ thuật",
      description:
        "Trang bị đàn Piano, Ukulele và nhạc cụ gõ đa dạng giúp trẻ phát triển thính giác, nhịp điệu và trí thông minh cảm xúc EQ.",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ds-5",
      tabLabel: "Giáo viên",
      title: "Đội ngũ giáo viên bản ngữ & Việt Nam tận tâm",
      description:
        "100% giáo viên có bằng Sư phạm Mầm non và chứng chỉ giảng dạy quốc tế, giàu lòng yêu trẻ và thấu hiểu tâm lý từng độ tuổi.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "tt-1",
      author: "Nguyễn Văn Nam",
      role: "Phụ Huynh Bé Minh Khôi",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Trường mầm non này đáng tin cậy và chuyên nghiệp. Đội ngũ giáo viên luôn tạo môi trường yêu thương và hỗ trợ con tôi trong suốt quá trình học tập. Chúng tôi cảm nhận rõ sự tiến bộ giao tiếp tiếng Anh của con mỗi ngày."
    },
    {
      id: "tt-2",
      author: "Trần Thành Công",
      role: "Phụ Huynh Bé Bảo An",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Không gian lớp học tràn ngập ánh sáng tự nhiên, sân chơi rộng rãi. Các cô rất chu đáo gửi hình ảnh hoạt động và bữa ăn của bé hàng ngày giúp gia đình hoàn toàn yên tâm."
    },
    {
      id: "tt-3",
      author: "Trần Văn Hùng",
      role: "Phụ Huynh Bé Gia Hân",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Từ một cô bé nhút nhát, sau 6 tháng học tại Tiny Treasures con đã dạn dĩ, tự lập và rất hào hứng mỗi sáng đến trường. Cảm ơn ban giám hiệu và các cô giáo rất nhiều!"
    }
  ],
  pricing: [
    {
      id: "pr-1",
      name: "Gói tiêu chuẩn",
      price: "2,500,000₫",
      badge: "/ Tháng",
      description: "Chương trình Mầm non Chuẩn",
      features: [
        { title: "10 Giờ/Ngày Học Tập & Vui Chơi", desc: "" },
        { title: "Hoạt động ngoài trời hàng ngày", desc: "" },
        { title: "Làm quen Tiếng Anh giao tiếp", desc: "" },
        { title: "Dịch vụ đưa đón tận nhà", desc: "" },
        { title: "Thực đơn dinh dưỡng 4 bữa", desc: "" },
        { title: "Trò chơi vận động thể thao", desc: "" }
      ]
    },
    {
      id: "pr-2",
      name: "Gói nâng cao",
      price: "3,500,000₫",
      badge: "/ Tháng",
      description: "Chương trình Song Ngữ Montessori",
      features: [
        { title: "10 Giờ/Ngày Học Tập & Vui Chơi", desc: "" },
        { title: "Hoạt động ngoài trời & Dã ngoại", desc: "" },
        { title: "50% Thời lượng Tiếng Anh Bản Ngữ", desc: "" },
        { title: "Dịch vụ đưa đón tận nhà", desc: "" },
        { title: "Thực đơn hữu cơ 4 bữa/ngày", desc: "" },
        { title: "Cảm thụ âm nhạc & Mỹ thuật", desc: "" }
      ]
    },
    {
      id: "pr-3",
      name: "Gói siêu cấp",
      price: "4,500,000₫",
      badge: "/ Tháng",
      description: "Chương trình Quốc Tế Toàn Diện",
      features: [
        { title: "10 Giờ/Ngày Học Tập & Vui Chơi", desc: "" },
        { title: "Hoạt động ngoài trời & Bơi lội", desc: "" },
        { title: "100% Môi trường Tiếng Anh Quốc Tế", desc: "" },
        { title: "Miễn phí xe đưa đón tận nơi", desc: "" },
        { title: "Thực đơn hữu cơ cao cấp", desc: "" },
        { title: "Kèm cặp phát triển năng khiếu 1-1", desc: "" }
      ]
    }
  ],
  news: [
    {
      id: "tt-n1",
      title: "Phương pháp nuôi dưỡng trí tò mò và khả năng ngôn ngữ sớm cho trẻ từ 2-5 tuổi",
      date: "11 Th7, 2025",
      category: "Giáo dục sớm",
      excerpt:
        "Khám phá giai đoạn vàng phát triển ngôn ngữ song ngữ Anh - Việt giúp trẻ phát âm chuẩn tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tt-n2",
      title: "Bí quyết giúp ba mẹ đồng hành cùng con chuẩn bị tâm lý vững vàng khi ngày đầu đến lớp",
      date: "11 Th7, 2025",
      category: "Cẩm nang phụ huynh",
      excerpt:
        "Những thói quen nhỏ tại nhà giúp bé hào hứng làm quen với môi trường mầm non và bạn bè mới.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tt-n3",
      title: "Lợi ích của hoạt động trải nghiệm thiên nhiên đối với sự phát triển giác quan của trẻ",
      date: "11 Th7, 2025",
      category: "Hoạt động ngoại khóa",
      excerpt:
        "Tại sao trẻ thường xuyên vận động ngoài trời có hệ miễn dịch khỏe mạnh và khả năng sáng tạo vượt trội?",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
