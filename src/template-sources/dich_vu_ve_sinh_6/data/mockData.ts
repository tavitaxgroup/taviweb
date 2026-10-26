import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VeSinh6ActionCard {
  id: string;
  title: string;
  description: string;
}

export interface VeSinh6FundMetric {
  id: string;
  value: string;
  label: string;
  percent: number;
}

export interface VeSinh6Data extends ClonedTemplateBaseData {
  heroTitleLine1: string;
  heroTitleLine2Prefix: string;
  heroTitleHighlight: string;
  heroVideoCoverImage: string;
  greenActions: VeSinh6ActionCard[];
  aboutChecklist: string[];
  aboutMainImage: string;
  aboutInsetImage: string;
  fundTitle: string;
  fundDescription: string;
  fundImage: string;
  fundMetrics: VeSinh6FundMetric[];
  galleryImages: Array<{
    id: string;
    title: string;
    image: string;
    tall?: boolean;
  }>;
}

export const dichVuVeSinh6DefaultData: VeSinh6Data = {
  business: {
    name: "EcoStream",
    phone: ["0909 318 686", "1900 6869"],
    email: ["contact@ecostream.vn", "duan@ecostream.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "07:30 - 18:00 (Thứ 2 - Thứ 7)",
    rating: 4.9,
    reviewCount: 950,
    experienceYears: "12 Năm",
    aboutTitle: "Hành Trình Xanh - Cùng Giảm Thiểu Rác Thải, Bảo Vệ Môi Trường Sống",
    aboutText: [
      "Tham gia cùng chúng tôi trong các hoạt động thu gom, tái chế rác thải và giáo dục cộng đồng về ý thức bảo vệ môi trường, giúp xây dựng một thế giới xanh, sạch hơn."
    ],
    highlights: [
      "Hơn 500 doanh nghiệp & khu đô thị đối tác xử lý chất thải",
      "Công nghệ phân loại và tái chế rác thải đạt chuẩn ISO 14001",
      "Đội ngũ kỹ thuật viên vệ sinh môi trường chuyên nghiệp 24/7"
    ]
  },
  heroTitleLine1: "Cùng nhau xây dựng một tương lai xanh",
  heroTitleLine2Prefix: "Giải pháp ",
  heroTitleHighlight: "quản lý rác thải hiệu quả",
  hero: {
    eyebrow: "Công Ty Vệ Sinh Môi Trường & Xử Lý Chất Thải",
    title: "Cùng nhau xây dựng một tương lai xanh — Giải pháp quản lý rác thải hiệu quả",
    subtitle:
      "Hợp tác cùng cộng đồng và doanh nghiệp để áp dụng các biện pháp giảm thiểu, tái chế và xử lý rác thải, tạo nên một môi trường sống lành mạnh cho thế hệ mai sau.",
    ctaText: "Khám Phá Ngay",
    ctaLink: "#giai-phap",
    backgroundImage:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=85"
  },
  heroVideoCoverImage:
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=85",
  greenActions: [
    {
      id: "act-1",
      title: "Cùng Chung Tay Vì Môi Trường",
      description:
        "Triển khai thu gom, phân loại chất thải rắn sinh hoạt và công nghiệp ngay tại nguồn."
    },
    {
      id: "act-2",
      title: "Sự Kiện Xanh - Hành Trình Mới",
      description:
        "Đồng hành cùng khu dân cư, trường học và nhà máy trong các chiến dịch vệ sinh môi trường."
    },
    {
      id: "act-3",
      title: "Sự Kiện Xanh Một Phần Của Thay Đổi",
      description:
        "Ứng dụng công nghệ sinh học và tái chế tuần hoàn nhằm giảm thiểu tối đa rác thải chôn lấp."
    }
  ],
  aboutChecklist: [
    "Cùng tham gia các chiến dịch thu gom rác thải tại khu vực bạn sống, làm sạch môi trường và nâng cao ý thức cộng đồng.",
    "Học cách tái chế những đồ vật cũ thành sản phẩm hữu ích, giảm thiểu rác thải và tiết kiệm tài nguyên.",
    "Khuyến khích mọi người áp dụng các thói quen xanh như dùng túi vải, bình nước tái sử dụng, và giảm sử dụng nhựa một lần."
  ],
  aboutMainImage:
    "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
  aboutInsetImage:
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80",
  services: [
    {
      id: "srv-1",
      title: "Chuyển Đổi Rác Thành Năng Lượng",
      category: "Waste to Energy",
      description:
        "Biến rác thải thành tài nguyên năng lượng quý giá. Hãy tham gia vào sứ mệnh của chúng tôi để chuyển đổi rác thải thành năng lượng bền vững.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "Phát Triển Hạ Tầng Tái Chế",
      category: "Recycling Infrastructure",
      description:
        "Xây dựng hệ thống tái chế hiệu quả. Hỗ trợ chúng tôi trong việc phát triển cơ sở hạ tầng tái chế tiên tiến để xử lý và tái sử dụng nhiều loại chất thải hơn.",
      image:
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "Chương Trình Giảm Thiểu Rác Thải",
      category: "Zero Waste Program",
      description:
        "Giáo dục và khuyến khích cộng đồng giảm thiểu rác thải. Các sáng kiến của chúng tôi tập trung vào việc giảm rác thải từ nguồn thông qua giáo dục.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-4",
      title: "Sáng Kiến Dọn Sạch Đại Dương",
      category: "Ocean Clean-up",
      description:
        "Bảo vệ hệ sinh thái biển bằng cách xử lý rác thải đại dương. Tham gia vào các dự án của chúng tôi nhằm dọn sạch đại dương và ngăn chặn ô nhiễm.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
    }
  ],
  fundTitle: "Quỹ Hỗ Trợ Giảm Thiểu Rác Thải Nhựa",
  fundDescription:
    "Tham gia quyên góp cho quỹ giảm thiểu rác thải nhựa để bảo vệ đại dương và môi trường sống. Mỗi đóng góp nhỏ của bạn sẽ tạo nên sự thay đổi lớn.",
  fundImage:
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
  fundMetrics: [
    {
      id: "fm-1",
      value: "400k",
      label: "Chiến dịch gây quỹ đã huy động được",
      percent: 50
    },
    {
      id: "fm-2",
      value: "1M",
      label: "Mục tiêu quỹ cần đạt",
      percent: 30
    },
    {
      id: "fm-3",
      value: "50",
      label: "Lượt quyên góp từ tổ chức",
      percent: 40
    },
    {
      id: "fm-4",
      value: "235",
      label: "Ngày còn lại để đạt mục tiêu",
      percent: 70
    }
  ],
  galleryImages: [
    {
      id: "gal-1",
      title: "Phân loại rác thải tái chế tại nguồn",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      tall: true
    },
    {
      id: "gal-2",
      title: "Thu gom chai nhựa & thủy tinh",
      image:
        "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&w=800&q=80",
      tall: false
    },
    {
      id: "gal-3",
      title: "Thùng phân loại chất thải tiêu chuẩn",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      tall: false
    },
    {
      id: "gal-4",
      title: "Chiến dịch làm sạch rừng & công viên",
      image:
        "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80",
      tall: true
    },
    {
      id: "gal-5",
      title: "Trạm thu gom giấy & bìa carton",
      image:
        "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=800&q=80",
      tall: true
    },
    {
      id: "gal-6",
      title: "Đội ngũ tình nguyện viên môi trường",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
      tall: false
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Văn Long",
      role: "Cư dân Khu đô thị EcoPark",
      content:
        "Chúng tôi đã tham gia chương trình phân loại rác thải tại nhà và cảm thấy thật sự hài lòng. Chỉ với vài bước đơn giản mỗi ngày, gia đình tôi đã giảm đáng kể lượng rác thải sinh hoạt và đóng góp vào việc bảo vệ môi trường.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "test-2",
      author: "Hào Lê",
      role: "Trưởng Ban Quản Lý Tòa Nhà",
      content:
        "Từ khi tham gia chương trình thu gom rác thải của khu phố, tôi cảm nhận được sự thay đổi tích cực. Đường phố sạch sẽ hơn, không còn rác bừa bãi. Chương trình đã gắn kết cộng đồng và tạo nên một môi trường sống trong lành.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "test-3",
      author: "Sâm Lại",
      role: "Chủ chuỗi cửa hàng F&B Xanh",
      content:
        "Ban đầu tôi cảm thấy việc phân loại rác khá phiền phức, nhưng sau khi hiểu rõ ý nghĩa, tôi đã làm điều này hàng ngày. Thật tuyệt khi biết rác thải mình phân loại sẽ được tái chế đúng cách, góp phần giảm ô nhiễm.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Giải pháp khơi thông thoát nước và xử lý vệ sinh môi trường sau mưa ngập đô thị",
      date: "20/05/2025",
      category: "Tin tức môi trường",
      excerpt:
        "Quy trình thu gom bùn thải, khử khuẩn nguồn nước và thông tắc hệ thống cống thoát nước đô thị nhanh chóng.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Làm Thế Nào Để Doanh Nghiệp Tối Ưu Hóa Chi Phí Xử Lý Rác Thải Công Nghiệp?",
      date: "15/05/2025",
      category: "Giải pháp doanh nghiệp",
      excerpt:
        "Áp dụng mô hình phân loại tại nguồn và thu hồi phế liệu tái chế giúp nhà máy tiết kiệm đến 35% chi phí vận hành.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Sự Trỗi Dậy Của Lối Sống Xanh Không Rác Thải Nhựa Trong Giới Trẻ Việt Nam",
      date: "10/05/2025",
      category: "Cộng đồng xanh",
      excerpt:
        "Hàng ngàn bạn trẻ hào hứng tham gia các trạm đổi rác lấy quà và sử dụng vật liệu thân thiện với môi trường.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
