import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung6HeroStripItem {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  icon: "villa" | "building" | "house";
}

export interface XayDung6WelcomeFeature {
  id: string;
  title: string;
  icon: "schedule" | "palette" | "clean" | "cert";
}

export interface XayDung6ServiceHotspot {
  id: string;
  title: string;
  surface: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface XayDung6TemplateData extends ClonedTemplateBaseData {
  heroStripItems: XayDung6HeroStripItem[];
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeFeatures: XayDung6WelcomeFeature[];
  whyChooseTitle: string;
  whyChooseText: string;
  whyChooseImage: string;
  projectCategories: string[];
  serviceHotspots: XayDung6ServiceHotspot[];
  latestProjectTitle: string;
  latestProjectText: string;
  beforeAfterImages: {
    before: string;
    after: string;
  };
  footerGallery: string[];
}

export const xayDung6DefaultData: XayDung6TemplateData = {
  business: {
    name: "Mona Media Painting",
    logo: "",
    phone: ["076 922 0162", "0909 886 648"],
    email: ["baogia@monapainting.vn", "info@monapainting.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 5.0,
    reviewCount: 245,
    experienceYears: "18+",
    aboutTitle: "Chào mừng đến với MONA PAINTING",
    aboutText: [
      "Mona Media Painters là một công ty sơn nội ngoại thất và cải tạo xây dựng đầy đủ dịch vụ, luôn tin tưởng và chăm sóc từng công trình của khách hàng tận tâm như chính ngôi nhà của gia đình mình."
    ],
    highlights: [
      "Tùy chọn lập lịch linh hoạt",
      "Tư vấn màu miễn phí",
      "Nơi làm việc sạch sẽ",
      "Thành viên được PDCA chứng nhận"
    ]
  },
  hero: {
    eyebrow: "DỊCH VỤ SƠN NƯỚC & CẢI TẠO CÔNG TRÌNH",
    title: "MONA MEDIA PAINTING",
    subtitle:
      "Chuyên nhận thi công sơn nước, sơn dầu, sơn epoxy, sơn nền xưởng, sửa chữa nhà cửa chống thấm, xây dựng đóng trần thạch cao nhôm kiếng ALU và cung cấp vật tư bột trét sơn nước chính hãng.",
    ctaText: "Xem dịch vụ",
    ctaLink: "#dich-vu",
    secondaryCtaText: "Dự án hoàn thành",
    secondaryCtaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  heroStripItems: [
    {
      id: "strip-1",
      title: "BIỆT THỰ",
      description:
        "Từ tấm thạch cao lộng lẫy mang phong cách cổ điển và phào chỉ tinh xảo đến vật liệu sơn hiệu ứng đương đại và mọi chi tiết hoàn thiện cao cấp.",
      bgColor: "bg-[#8d99ae]",
      icon: "villa"
    },
    {
      id: "strip-2",
      title: "TÒA NHÀ CAO ỐC",
      description:
        "Chúng tôi hiểu rõ thời gian và quy trình an toàn cần thiết để hoàn thành một dự án sơn tòa nhà đẹp, mang lại chất lượng vượt trội xứng đáng với chi phí.",
      bgColor: "bg-[#4a6fa5]",
      icon: "building"
    },
    {
      id: "strip-3",
      title: "NHÀ Ở CÁ NHÂN",
      description:
        "Giống như dịch vụ sơn thương mại quy mô lớn, dịch vụ sơn nhà ở cá nhân của chúng tôi cam kết chất lượng bề mặt láng mịn cao nhất và bảo hành dài hạn.",
      bgColor: "bg-[#1d4e89]",
      icon: "house"
    }
  ],
  welcomeTitle: "Chào mừng đến với MONA PAINTING",
  welcomeSubtitle:
    "Mona Media Painters là một công ty sơn nội ngoại thất đầy đủ dịch vụ, tin tưởng đối xử với khách hàng của chúng tôi như gia đình.",
  welcomeFeatures: [
    {
      id: "wf-1",
      title: "Tùy chọn lập lịch linh hoạt.",
      icon: "schedule"
    },
    {
      id: "wf-2",
      title: "Tư vấn màu miễn phí",
      icon: "palette"
    },
    {
      id: "wf-3",
      title: "Nơi làm việc sạch sẽ",
      icon: "clean"
    },
    {
      id: "wf-4",
      title: "Thành viên được PDCA chứng nhận.",
      icon: "cert"
    }
  ],
  whyChooseTitle: "Tại sao chọn chúng tôi",
  whyChooseText:
    "Mona Media Company là một công ty dịch vụ sơn đầy đủ phục vụ khu vực trung tâm Sài Gòn và các tỉnh lân cận. Chúng tôi tự hào cung cấp dịch vụ khách hàng cao cấp và tay nghề chuyên nghiệp. Chất lượng là một trong những khía cạnh quan trọng nhất của hội họa kiến trúc, chúng tôi có các quy trình ổn định để đảm bảo chất lượng hoàn thiện cao trên cơ sở nhất quán.",
  whyChooseImage:
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=1000&q=85",
  projectCategories: ["TẤT CẢ", "NGOẠI THẤT", "NỘI THẤT", "CẦU THANG"],
  projects: [
    {
      id: "prj-1",
      title: "Phòng Khách Hiện Đại Sơn Trắng Kem Bắc Âu",
      category: "NỘI THẤT",
      location: "Quận 2, TP.HCM",
      description:
        "Thi công bả phẳng 2 lớp và sơn phủ Dulux Ambiance 5in1 bóng mờ sang trọng kết hợp vách kệ âm tường.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      price: "Hoàn thiện: 320 m²"
    },
    {
      id: "prj-2",
      title: "Biệt Thự Phố Sơn Ngoại Thất Chống Thấm Cao Cấp",
      category: "NGOẠI THẤT",
      location: "Quận 7, TP.HCM",
      description:
        "Sơn ngoại thất Jotun Jotashield bền màu 10 năm kết hợp xử lý chống thấm ban công và mặt tiền.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      price: "Hoàn thiện: 580 m²"
    },
    {
      id: "prj-3",
      title: "Cầu Thang Xoắn Ốc & Phào Chỉ Trần Thạch Cao",
      category: "CẦU THANG",
      location: "Quận Phú Nhuận, TP.HCM",
      description:
        "Thi công trần thạch cao uốn vòm nghệ thuật, sơn lót kháng kiềm và sơn phủ bóng ngọc trai khu vực sảnh thang.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      price: "Hoàn thiện: 240 m²"
    },
    {
      id: "prj-4",
      title: "Không Gian Bếp & Phòng Ăn Sơn Chống Bám Bẩn",
      category: "NỘI THẤT",
      location: "Quận Bình Thạnh, TP.HCM",
      description:
        "Sử dụng dòng sơn lau chùi hiệu quả chống dầu mỡ, kháng khuẩn cho toàn bộ khu vực bếp và bàn đảo.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
      price: "Hoàn thiện: 190 m²"
    },
    {
      id: "prj-5",
      title: "Penthouse Thông Tầng Sơn Hiệu Ứng & Cầu Thang Kính",
      category: "CẦU THANG",
      location: "TP. Thủ Đức, TP.HCM",
      description:
        "Thi công sơn hiệu ứng bê tông nghệ thuật kết hợp sơn tĩnh điện khung cầu thang và trần thạch cao phẳng.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      price: "Hoàn thiện: 450 m²"
    },
    {
      id: "prj-6",
      title: "Biệt Thự Nghỉ Dưỡng Ven Sông Sơn Chống Kiềm Muối",
      category: "NGOẠI THẤT",
      location: "Nhà Bè, TP.HCM",
      description:
        "Hệ sơn ngoại thất kháng muối kiềm và chống tia UV bảo vệ toàn diện hệ mặt dựng và khung cửa lớn.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
      price: "Hoàn thiện: 720 m²"
    }
  ],
  serviceHotspots: [
    {
      id: "hs-1",
      title: "Trần Thạch Cao & Sơn Lót Chống Ẩm",
      surface: "Hệ trần nội thất",
      description:
        "Thi công đóng trần thạch cao Vĩnh Tường kết hợp xử lý mối nối chống nứt và sơn trắng siêu mịn.",
      xPercent: 44,
      yPercent: 52
    },
    {
      id: "hs-2",
      title: "Tường Sơn Nước Bóng Mờ Lau Chùi",
      surface: "Mảng tường phòng khách",
      description:
        "Màng sơn bóng mờ sang trọng, chống bám bẩn, không mùi độc hại và giữ màu bền đẹp trên 10 năm.",
      xPercent: 29,
      yPercent: 72
    },
    {
      id: "hs-3",
      title: "Sơn Gỗ PU & Bảo Dưỡng Nội Thất",
      surface: "Bàn ăn & Nội thất gỗ",
      description:
        "Phun sơn PU 5 lớp chống trầy xước, giữ nguyên vân gỗ tự nhiên ấm áp và chống mối mọt.",
      xPercent: 60,
      yPercent: 61
    },
    {
      id: "hs-4",
      title: "Sơn Chống Thấm & Kháng Khuẩn",
      surface: "Tường ngăn & Hành lang",
      description:
        "Ngăn ngừa ẩm mốc từ chân tường, kháng khuẩn 99% đạt tiêu chuẩn an toàn xanh Singapore.",
      xPercent: 79,
      yPercent: 54
    },
    {
      id: "hs-5",
      title: "Sơn Phào Chỉ & Khung Cửa Tinh Xảo",
      surface: "Chi tiết viền trang trí",
      description:
        "Đường cắt sơn sắc nét bằng băng keo chuyên dụng Nhật Bản, không lem màu ra khung tranh và phào chỉ.",
      xPercent: 91,
      yPercent: 53
    }
  ],
  latestProjectTitle: "Dự án mới nhất",
  latestProjectText:
    "Mona Media Company là một công ty dịch vụ sơn đầy đủ phục vụ phía bắc và trung tâm Sài Gòn. Chúng tôi tự hào cung cấp dịch vụ khách hàng cao cấp và tay nghề chuyên nghiệp. Chất lượng là một trong những khía cạnh quan trọng nhất của hội họa, chúng tôi có các quy trình và quy chuẩn ổn định để đảm bảo chất lượng hoàn thiện cao trên cơ sở nhất quán.",
  beforeAfterImages: {
    before:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
  },
  news: [
    {
      id: "news-1",
      title: "5 Cách kiểm tra kết quả sơn nhà sơn tường chuẩn kỹ thuật",
      date: "10/04/2026",
      category: "Kỹ thuật sơn",
      excerpt:
        "Tường mới sơn có thể rất đẹp khi nhìn từ xa nhưng liệu lớp sơn đã đủ độ dày, độ phẳng và độ bám dính tiêu chuẩn dưới ánh đèn chiếu xiên?",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Những mẹo sửa chữa điện nước hiệu quả trước khi sơn lại nhà",
      date: "16/04/2026",
      category: "Cải tạo nhà",
      excerpt:
        "Lắp đặt điện nước, dây dẫn âm trong tường cần phải bọc ống cách điện và kiểm tra áp lực nước kỹ lưỡng trước khi trét bột hoàn thiện.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "6 Bước Đơn Giản Để Căn Nhà Bạn Cuốn Hút Hơn Với Màu Sơn Mới",
      date: "24/04/2026",
      category: "Tư vấn phối màu",
      excerpt:
        "Màu sắc sơn nhà thường có tác động không nhỏ đến tâm lý, cảm xúc thư giãn và sức khỏe của các thành viên trong gia đình mỗi ngày.",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Khách hàng Minh Thư",
      role: "Chủ biệt thự Quận 7",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Công ty Mona Media đã thực hiện nhiều dự án cho chúng tôi trong vài năm qua. Họ làm một công việc đẹp, chất lượng và rất dễ làm việc. Từ đầu đến cuối, công việc của đội ngũ tuyệt vời này vượt quá mong đợi của tôi. Những lời khuyên chuyên nghiệp trong việc lựa chọn màu sắc và vật liệu là tuyệt vời!"
    }
  ],
  clients: [
    { id: "br-1", name: "Europro Painting" },
    { id: "br-2", name: "Dulux" },
    { id: "br-3", name: "Perennial Painting" },
    { id: "br-4", name: "Pentopaint" }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=75"
  ]
};

export default xayDung6DefaultData;
