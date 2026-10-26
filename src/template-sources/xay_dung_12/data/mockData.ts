import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung12Data extends ClonedTemplateBaseData {
  introSection: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    towerImage: string;
  };
  overviewSection: {
    title: string;
    backgroundImage: string;
    specs: Array<{
      id: string;
      label: string;
      value: string;
      subItems?: string[];
    }>;
  };
  locationSection: {
    title: string;
    subtitle: string;
    description: string;
    nearbyTitle: string;
    nearbyImages: Array<{
      id: string;
      name: string;
      distance: string;
      image: string;
    }>;
  };
  goldenAmenities: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  floorPlans: Array<{
    id: string;
    tabLabel: string;
    badgeLabel: string;
    zoneSummary: string;
    unitCount: string;
    highlight: string;
  }>;
  apartmentGallery: {
    kitchen: {
      title: string;
      subtitle: string;
      image: string;
    };
    livingRoom: {
      title: string;
      subtitle: string;
      image: string;
    };
    bathroom: {
      title: string;
      subtitle: string;
      image: string;
    };
    thumbnails: Array<{
      id: string;
      title: string;
      image: string;
    }>;
  };
  consultantImage: string;
  supportPartners: Array<{
    id: string;
    name: string;
    subtext: string;
    badgeColor: string;
  }>;
}

export const xayDung12DefaultData: XayDung12Data = {
  business: {
    name: "MONA MEDIA CAPELLA",
    phone: ["076 922 0162", "0909 666 162"],
    email: ["cskh@asianacapella.vn", "mon@mona.media"],
    address: "184 Trần Văn Kiểu, Phường 10, Quận 6, Tp.HCM",
    workingHours: "08:00 - 20:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 276,
    aboutTitle: "GIỚI THIỆU DỰ ÁN",
    aboutText: [
      "Mona Media Capella là dự án dành cho phân khúc nhà ở cao cấp kết hợp không gian thương mại, mọi tiện nghi bên trong đều được xây dựng không chỉ hướng đến đẳng cấp khác biệt mà còn phục vụ nhu cầu tối ưu hóa công năng sử dụng.",
      "Dự án Mona Media Capella tạo sự khác biệt trong quy hoạch và thiết kế mang tính tiên phong trong việc kết nối giữa nhu cầu ở của gia đình và hoạt động kinh doanh, giúp cư dân tìm thấy sự hài hòa giữa công việc và cuộc sống khi có 4 loại hình căn hộ.",
      "Thừa hưởng địa thế chiến lược, mặt tiền đường Trần Văn Kiểu, trung tâm khu dân cư Bình Phú hiện đại và sầm uất những khu nhà phố, biệt thự cùng cộng đồng doanh nhân gắn kết, Mona Media Capella được hình thành với sứ mệnh kiến tạo một tương lai mới giữa khu Sài Gòn – Chợ Lớn, với hoài bão hiện thực hóa về một nơi an cư hoàn hảo, lạc nghiệp trong tầm tay."
    ],
    highlights: [
      "Mặt tiền Trần Văn Kiểu – Trung tâm khu dân cư Bình Phú Quận 6",
      "Kiến trúc mặt dựng lam đứng hiện đại tối ưu đối lưu gió và ánh sáng",
      "4 dòng sản phẩm độc bản: Luxhome, Smart Office, Sky Duplex, Multi-Shop",
      "Tổng thầu xây dựng An Phong & Ngân hàng IVB bảo lãnh tiến độ"
    ]
  },
  hero: {
    eyebrow: "BIỂU TƯỢNG KIẾN TRÚC KHU TÂY SÀI GÒN",
    title: "MONA MEDIA CAPELLA RESIDENCE",
    subtitle:
      "Siêu dự án hiện đại nhất khu Sài Gòn - Chợ Lớn. Dự án bao gồm: căn hộ thông thường, căn hộ Duplex, Shophouse và Officetel.",
    ctaText: "ĐĂNG KÝ TƯ VẤN",
    ctaLink: "#tu-van",
    secondaryCtaText: "XEM MẶT BẰNG",
    secondaryCtaLink: "#mat-bang",
    backgroundImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  introSection: {
    title: "GIỚI THIỆU DỰ ÁN",
    subtitle: "3 phân khu – 18 tiện ích",
    paragraphs: [
      "Mona Media Capella là dự án dành cho phân khúc nhà ở cao cấp kết hợp không gian thương mại, mọi tiện nghi bên trong đều được xây dựng không chỉ hướng đến đẳng cấp khác biệt mà còn phục vụ nhu cầu tối ưu hóa công năng sử dụng.",
      "Dự án Mona Media Capella tạo sự khác biệt trong quy hoạch và thiết kế mang tính tiên phong trong việc kết nối giữa nhu cầu ở của gia đình và hoạt động kinh doanh, giúp cư dân tìm thấy sự hài hòa giữa công việc và cuộc sống khi có 4 loại hình căn hộ.",
      "Thừa hưởng địa thế chiến lược, mặt tiền đường Trần Văn Kiểu, trung tâm khu dân cư Bình Phú hiện đại và sầm uất những khu nhà phố, village cùng cộng đồng doanh nhân gắn kết, Mona Media Capella được hình thành với sứ mệnh kiến tạo một tương lai mới giữa khu Sài Gòn – Chợ Lớn, với hoài bão hiện thực hóa về một nơi an cư hoàn hảo, lạc nghiệp trong tầm tay."
    ],
    towerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85"
  },
  overviewSection: {
    title: "TỔNG QUAN DỰ ÁN",
    backgroundImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85",
    specs: [
      { id: "ov-1", label: "Tên dự án", value: "Mona Media Capella Residence" },
      { id: "ov-2", label: "Vị trí", value: "184 Trần Văn Kiểu, P. 10, Q. 6, Tp.HCM" },
      { id: "ov-3", label: "Chủ đầu tư", value: "Công ty TNHH Mona Media" },
      { id: "ov-4", label: "Nhà thầu thi công", value: "Công ty Cổ phần Xây dựng An Phong" },
      { id: "ov-5", label: "Đơn vị thiết kế", value: "TTT Architect" },
      { id: "ov-6", label: "Đơn vị giám sát", value: "FQM" },
      { id: "ov-7", label: "Thời gian hoàn thành", value: "Quý 4/2025" },
      { id: "ov-8", label: "Diện tích dự án", value: "4.274,1 m2" },
      { id: "ov-9", label: "Mật độ xây dựng", value: "40% khối tháp" },
      {
        id: "ov-10",
        label: "Quy mô dự án",
        value: "373 căn (19 tầng nổi, 2 tầng hầm, 1 tầng KT), trong đó:",
        subItems: [
          "+ Luxhome: 293 căn DT từ 48,23 m2 – 82,78 m2 (căn hộ tiêu chuẩn)",
          "+ Smart Office: 56 căn DT từ 27,80 m2 – 77,57 m2 (nhà ở & KD)",
          "+ Sky Duplex: 22 căn DT từ 46,23 m2 – 82,78 m2",
          "+ Multi-Shop: 20 căn (4 shop tiêu chuẩn, 16 shop duplex)"
        ]
      },
      { id: "ov-11", label: "Giá bán", value: "35 – 42 triệu/m2 (từ 1,85 tỷ/căn)" },
      { id: "ov-12", label: "Thời hạn sở hữu", value: "Lâu dài" }
    ]
  },
  locationSection: {
    title: "VỊ TRÍ ĐẮC ĐỊA",
    subtitle: "Ngay trung tâm quận 6",
    description:
      "Dự án Mona Media Capella sở hữu vị thế vàng mặt tiền đường Trần Văn Kiểu (khu dân cư Bình Phú, Quận 6), một trong những khu vực tập trung dân cư và thương mại sầm uất, sôi động bậc nhất tại khu Tây TP.HCM. Với hạ tầng hiện hữu, đồng bộ, từ Asiana Capella, cư dân có thể dễ dàng di chuyển đến các quận như Quận 5, Quận 1 chỉ từ 10-15 phút theo tuyến Đại lộ Võ Văn Kiệt, cũng như Quận 11, Tân Phú, Tân Bình với khoảng cách tương đương.",
    nearbyTitle: "Liên kết với các nơi:",
    nearbyImages: [
      {
        id: "nb-1",
        name: "MM Mega Market Bình Phú",
        distance: "2 phút",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-2",
        name: "Nhà thiếu nhi & Khu TDTT Quận 6",
        distance: "3 phút",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-3",
        name: "Siêu thị Co.opmart Phú Lâm",
        distance: "5 phút",
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-4",
        name: "Công viên Bình Phú 10ha",
        distance: "1 phút",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-5",
        name: "Chợ Bình Tây (Chợ Lớn)",
        distance: "6 phút",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-6",
        name: "Công viên Văn hóa Đầm Sen",
        distance: "10 phút",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-7",
        name: "Cảng Hàng không Tân Sơn Nhất",
        distance: "20 phút",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nb-8",
        name: "Bến xe Miền Tây & Bệnh viện Quốc tế",
        distance: "7 phút",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  goldenAmenities: [
    {
      id: "ga-1",
      title: "Ngoài trời",
      description:
        "Nơi lý tưởng để mở các bữa tiệc BBQ ngoài trời cùng bạn bè, gia đình, người thân.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-2",
      title: "Công viên",
      description:
        "Không gian vườn dạo bộ nội khu xanh mát kết nối trực tiếp lá phổi xanh Công viên Bình Phú.",
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-3",
      title: "Hồ bơi",
      description:
        "Hồ bơi tràn bờ chân mây diện tích hơn 300m² tại tầng tiện ích với làn bơi chuẩn Olympic.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-4",
      title: "Khu vui chơi trẻ em",
      description:
        "Sân chơi liên hoàn ngoài trời và nhà trẻ nội khu giúp phát triển thể chất toàn diện cho bé.",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-5",
      title: "Phòng Gym & Yoga",
      description:
        "Phòng tập thể hình và Yoga tầm nhìn Panorama hướng thẳng ra hồ bơi và vườn nhiệt đới.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-6",
      title: "Phòng Massage & Spa",
      description:
        "Tổ hợp chăm sóc sắc đẹp, trị liệu thư giãn chuyên sâu dành riêng cho cộng đồng cư dân.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-7",
      title: "Phòng Xông hơi",
      description:
        "Hệ thống phòng xông hơi đá muối Himalaya và Sauna gỗ thông Phần Lan chuẩn 5 sao.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "ga-8",
      title: "Trung tâm thương mại",
      description:
        "Khu phố thương mại Multi-Shop sầm uất ngay khối đế tầng 1 - 2 quy tụ các thương hiệu lớn.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80"
    }
  ],
  floorPlans: [
    {
      id: "fp-1",
      tabLabel: "Tầng 1",
      badgeLabel: "TẦNG 01",
      zoneSummary: "Khu Thương Mại Multi-Shop & Sảnh Đón Resort 5 Sao",
      unitCount: "20 căn Shophouse thương mại (DT 55 m² – 130 m²)",
      highlight: "Tiếp giáp mặt tiền Trần Văn Kiểu & Công viên nội khu"
    },
    {
      id: "fp-2",
      tabLabel: "Tầng 2",
      badgeLabel: "TẦNG 02",
      zoneSummary: "Tầng Duplex Thương Mại Multi-Shop & Nhà Trẻ Nội Khu",
      unitCount: "16 căn Shop Duplex thông tầng + Khu sinh hoạt cộng đồng",
      highlight: "Kết nối trực tiếp thang cuốn thương mại và sảnh văn phòng"
    },
    {
      id: "fp-3",
      tabLabel: "Tầng 3",
      badgeLabel: "TẦNG 03",
      zoneSummary: "Tổ Hợp Tiện Ích Hồ Bơi Tràn Bờ & Căn Hộ Smart Office",
      unitCount: "28 căn Smart Office (DT 27,80 m² – 77,57 m²)",
      highlight: "Hồ bơi chân mây, Phòng Gym, Vườn BBQ ngoài trời"
    },
    {
      id: "fp-4",
      tabLabel: "Tầng 4",
      badgeLabel: "TẦNG 04",
      zoneSummary: "Khu Căn Hộ Thương Mại Dịch Vụ Smart Office",
      unitCount: "28 căn Smart Office vừa ở vừa đăng ký kinh doanh",
      highlight: "Sảnh thang máy riêng biệt, hành lang thông gió tự nhiên"
    },
    {
      id: "fp-5-18",
      tabLabel: "Tầng 5 - 18",
      badgeLabel: "TẦNG 05 - 18",
      zoneSummary: "Mặt Bằng Tầng Căn Hộ Điển Hình Luxhome",
      unitCount: "21 căn/sàn • Tổng 293 căn Luxhome (1PN - 2PN - 3PN)",
      highlight: "Thiết kế hình chữ U đón trọn gió mát từ kênh Lò Gốm & Công viên Bình Phú"
    },
    {
      id: "fp-19",
      tabLabel: "Tầng 19",
      badgeLabel: "TẦNG 19",
      zoneSummary: "Bộ Sưu Tập Biệt Thự Trên Không Sky Duplex",
      unitCount: "22 căn Sky Duplex thông tầng (DT 46,23 m² – 82,78 m²)",
      highlight: "Tầm nhìn Panorama 360 độ toàn cảnh Sài Gòn – Chợ Lớn"
    }
  ],
  apartmentGallery: {
    kitchen: {
      title: "Nhà bếp",
      subtitle: "Nhà mẫu Asiana Capella",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85"
    },
    livingRoom: {
      title: "Phòng khách",
      subtitle: "Nhà mẫu Asiana Capella",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
    },
    bathroom: {
      title: "Nhà vệ sinh",
      subtitle: "Nhà mẫu Asiana Capella",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85"
    },
    thumbnails: [
      {
        id: "thumb-1",
        title: "Ban công đón nắng",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "thumb-2",
        title: "Phòng ngủ Master",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "thumb-3",
        title: "Bàn ăn gia đình",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  consultantImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
  news: [
    {
      id: "news-1",
      title: "5 thông tin quan trọng về STCity và quy hoạch đô thị khu Tây",
      date: "18/12/2025",
      category: "Tin thị trường",
      excerpt:
        "Từ căn hộ tiêu chuẩn 5 sao đến không gian kiến trúc xanh mở, khu vực trung tâm Quận 6 đang chứng kiến làn sóng nâng cấp hạ tầng mạnh mẽ...",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "Metro Star và hạ tầng giao thông kết nối khi nào hoàn thiện?",
      date: "20/12/2025",
      category: "Hạ tầng đô thị",
      excerpt:
        "Hiện nay, bất động sản dọc các trục đại lộ huyết mạch Võ Văn Kiệt và tuyến Metro đang thu hút dòng vốn đầu tư dài hạn nhờ tính thanh khoản cao...",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "Vị trí Asiana Capella có gì đặc biệt?",
      date: "24/12/2025",
      category: "Phân tích dự án",
      excerpt:
        "Dự án Asiana Capella Quận 6 được đánh giá là một khu căn hộ vừa có giá trị an cư lý tưởng vừa khai thác kinh doanh thương mại sầm uất...",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  supportPartners: [
    {
      id: "sp-1",
      name: "An Phong",
      subtext: "TỔNG THẦU THI CÔNG",
      badgeColor: "#dc2626"
    },
    {
      id: "sp-2",
      name: "FQM",
      subtext: "TƯ VẤN GIÁM SÁT",
      badgeColor: "#d97706"
    },
    {
      id: "sp-3",
      name: "TTT CORPORATION",
      subtext: "THIẾT KẾ KIẾN TRÚC",
      badgeColor: "#1d4ed8"
    },
    {
      id: "sp-4",
      name: "IVB",
      subtext: "INDOVINA BANK BẢO LÃNH",
      badgeColor: "#0284c7"
    }
  ]
};
