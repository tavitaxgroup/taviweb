import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham2Data extends ClonedTemplateBaseData {
  servicePillars: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    icon: string;
  }>;
  qualityCheckmarks: string[];
  departments: Array<{
    id: string;
    badge: string;
    title: string;
    description: string;
    image: string;
  }>;
  footerGallery: string[];
}

export const phongKham2DefaultData: PhongKham2Data = {
  business: {
    name: "Phòng Khám Đa Khoa LifeCare",
    phone: ["1900 6868", "028 3899 6868"],
    email: ["cskh@lifecareclinic.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:30 - 19:00 | Chủ Nhật: 08:00 - 12:00",
    rating: 4.9,
    reviewCount: 200000,
    experienceYears: "30+",
    aboutTitle: "Bất ngờ với dịch vụ chăm sóc sức khỏe chuẩn quốc tế",
    aboutText: [
      "Đồng hành cùng bạn và gia đình trên hành trình chăm sóc sức khỏe chủ động, tầm soát bệnh lý sớm và tạo nền tảng cho một cuộc sống khỏe mạnh bền vững.",
      "Phòng Khám Đa Khoa LifeCare quy tụ đội ngũ Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa đầu ngành cùng hệ thống xét nghiệm sinh hóa tự động và chẩn đoán hình ảnh thế hệ mới."
    ],
    highlights: [
      "Quy trình khám nhanh gọn không chờ đợi",
      "Xét nghiệm trả kết quả trực tuyến",
      "Thanh toán Bảo hiểm Y tế & Bảo lãnh viện phí",
      "100% bảo mật hồ sơ bệnh án điện tử",
      "Bác sĩ chuyên khoa đầu ngành",
      "Hơn 30 năm kinh nghiệm y khoa"
    ]
  },
  hero: {
    eyebrow: "CHĂM SÓC SỨC KHỎE TOÀN DIỆN",
    title: "Kinh Nghiệm Chăm Sóc Y Tế Hàng Đầu",
    subtitle:
      "Sự chăm sóc sức khỏe toàn diện chuẩn quốc tế: Chúng tôi cam kết cung cấp dịch vụ y tế chất lượng cao, chẩn đoán chính xác và tận tâm để đảm bảo sự an tâm cho mọi bệnh nhân.",
    ctaText: "Xem dịch vụ",
    ctaLink: "#dich-vu",
    secondaryCtaText: "Đặt lịch khám",
    secondaryCtaLink: "#dat-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  servicePillars: [
    {
      id: "pk-p1",
      title: "Khám Tổng Quát & Tầm Soát",
      description:
        "Gói khám sức khỏe định kỳ toàn diện, tầm soát ung thư sớm và đánh giá chức năng các cơ quan chuyên sâu.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
      icon: "clipboard"
    },
    {
      id: "pk-p2",
      title: "Chẩn Đoán Hình Ảnh Kỹ Thuật Cao",
      description:
        "Hệ thống chụp cộng hưởng từ MRI, CT Scanner đa lát cắt, siêu âm Doppler màu 4D và nội soi tiêu hóa không đau.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=80",
      icon: "activity"
    },
    {
      id: "pk-p3",
      title: "Cấp Cứu & Bác Sĩ Gia Đình 24/7",
      description:
        "Đội ngũ phản ứng nhanh trực cấp cứu 24/7, theo dõi bệnh lý mạn tính và chăm sóc sức khỏe tận nhà cho người cao tuổi.",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
      icon: "stethoscope"
    }
  ],
  stats: [
    {
      id: "pk-st1",
      number: "30+",
      title: "Năm kinh nghiệm điều trị",
      subtitle:
        "Hơn ba thập kỷ đồng hành cùng hàng trăm ngàn gia đình Việt trên hành trình bảo vệ sức khỏe."
    },
    {
      id: "pk-st2",
      number: "100+",
      title: "Bác sĩ chuyên khoa đầu ngành",
      subtitle:
        "Đội ngũ Phó Giáo sư, Tiến sĩ, Bác sĩ CKI-CKII từng công tác tại các bệnh viện tuyến cuối."
    },
    {
      id: "pk-st3",
      number: "200k+",
      title: "Bệnh nhân hài lòng",
      subtitle:
        "Tỷ lệ hài lòng đạt trên 99% nhờ quy trình khám khoa học, tận tâm và chi phí minh bạch."
    }
  ],
  qualityCheckmarks: [
    "Quy trình khám nhanh gọn không chờ đợi",
    "Xét nghiệm trả kết quả trực tuyến",
    "Thanh toán Bảo hiểm Y tế & Bảo lãnh viện phí",
    "100% bảo mật hồ sơ bệnh án điện tử",
    "Bác sĩ chuyên khoa đầu ngành",
    "Hơn 30 năm kinh nghiệm y khoa"
  ],
  departments: [
    {
      id: "dep-1",
      badge: "Chuyên khoa mũi nhọn",
      title: "Khoa Tim Mạch & Nội Tiết",
      description:
        "Chẩn đoán và điều trị tăng huyết áp, bệnh mạch vành, rối loạn nhịp tim và đái tháo đường.",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "dep-2",
      badge: "Nội soi không đau",
      title: "Khoa Tiêu Hóa - Gan Mật",
      description:
        "Nội soi dạ dày - đại tràng dải tần hẹp NBI êm ái, tầm soát viêm gan siêu vi và bệnh lý đường tiêu hóa.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "dep-3",
      badge: "Thân thiện với trẻ nhỏ",
      title: "Khoa Nhi & Tiêm Chủng",
      description:
        "Khám dinh dưỡng, hô hấp nhi khoa hạn chế kháng sinh và hệ thống phòng tiêm vắc-xin chuẩn GSP.",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "pk-t1",
      author: "Văn Sâm",
      role: "Bệnh nhân Khoa Tim Mạch",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi đã tìm thấy tất cả những dịch vụ y tế chất lượng cao mà gia đình tôi cần tại Phòng Khám Đa Khoa LifeCare. Thủ tục bảo lãnh viện phí cực kỳ nhanh gọn, bác sĩ giải thích kết quả xét nghiệm rất tận tình."
    },
    {
      id: "pk-t2",
      author: "Văn Long",
      role: "Khách hàng Khám Tổng Quát",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Gói tầm soát sức khỏe tổng quát được sắp xếp khoa học, không phải xếp hàng chờ đợi. Kết quả trả qua ứng dụng điện thoại rất tiện lợi để theo dõi các chỉ số định kỳ hàng năm."
    }
  ],
  news: [
    {
      id: "pk-n1",
      title: "Những dấu hiệu cảnh báo sớm bệnh lý tim mạch và đột quỵ không nên chủ quan",
      date: "23 Th10 2025",
      category: "Tim Mạch",
      excerpt:
        "Tìm hiểu các chỉ số huyết áp, mỡ máu và lịch tầm soát tim mạch định kỳ được khuyến cáo bởi Hội Tim mạch học.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pk-n2",
      title: "Lợi ích của nội soi tiêu hóa không đau NBI trong tầm soát sớm ung thư dạ dày",
      date: "20 Th10 2025",
      category: "Tiêu Hóa",
      excerpt:
        "Công nghệ nội soi phóng đại dải tần ánh sáng hẹp giúp phát hiện tổn thương niêm mạc từ giai đoạn rất sớm.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pk-n3",
      title: "Lịch tiêm chủng vắc-xin đầy đủ và chế độ dinh dưỡng tăng đề kháng cho trẻ giao mùa",
      date: "15 Th10 2025",
      category: "Nhi Khoa",
      excerpt:
        "Hướng dẫn cha mẹ cách chăm sóc đường hô hấp cho trẻ nhỏ và lịch nhắc tiêm các mũi vắc-xin quan trọng.",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80"
  ]
};
