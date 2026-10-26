import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung7OverviewTab {
  id: string;
  tabLabel: string;
  heading: string;
  paragraphs: string[];
  image: string;
}

export interface XayDung7TravelColumn {
  id: string;
  timeLabel: string;
  places: string[];
}

export interface XayDung7GoldenValueSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface XayDung7TemplateData extends ClonedTemplateBaseData {
  overviewTabs: XayDung7OverviewTab[];
  locationParagraphs: string[];
  locationMapImage: string;
  travelColumns: XayDung7TravelColumn[];
  goldenValueSlides: XayDung7GoldenValueSlide[];
  amenitiesIntro: string;
  amenitiesLeft: string[];
  amenitiesRight: string[];
  amenitiesImage: string;
  ecosystemParagraphs: string[];
  ecosystemGallery: string[];
  legalNote: string;
}

export const xayDung7DefaultData: XayDung7TemplateData = {
  business: {
    name: "Sunshine City Saigon",
    logo: "",
    phone: ["076 922 0162", "1800 6559"],
    email: ["info@sunshinecitysaigon.vn", "cskh@sunshinegroup.vn"],
    address:
      "Tầng 2, 319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM (Dự án: Đường Phú Thuận, P. Tân Phú, Quận 7)",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 412,
    experienceYears: "15+",
    aboutTitle: "TỔNG QUAN SUNSHINE CITY SAIGON",
    aboutText: [
      "Lấy cảm hứng từ những thành phố thịnh vượng châu Âu, Sunshine City Sài Gòn tiếp nối thành công của chuỗi khu đô thị hạng sang, trở thành biểu tượng kiến trúc thượng lưu tại tâm điểm Nam Sài Gòn.",
      "Được bao bọc bởi dòng sông Cả Cấm hiền hòa cùng hệ cảnh quan sinh thái nội khu chuẩn resort 5 sao, dự án kiến tạo chuẩn mực sống thông minh Smart Living 4.0 dành riêng cho cộng đồng tinh hoa."
    ],
    highlights: [
      "Kiến trúc kính Low-E chạm sàn 360 độ",
      "Hệ sinh thái Smart Home 4.0 toàn diện",
      "Hơn 60 tiện ích nội khu chuẩn 5 sao quốc tế",
      "Vị trí tâm điểm liền kề Phú Mỹ Hưng Quận 7"
    ]
  },
  hero: {
    eyebrow: "BIỂU TƯỢNG KIẾN TRÚC THƯỢNG LƯU NAM SÀI GÒN",
    title: "SUNSHINE CITY SAIGON",
    subtitle: "Tinh hoa Châu Âu – Khởi đầu thịnh vượng",
    ctaText: "XEM VIDEO DỰ ÁN",
    ctaLink: "#tong-quan",
    secondaryCtaText: "TRẢI NGHIỆM 360°",
    secondaryCtaLink: "#gia-tri-vang",
    backgroundImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  overviewTabs: [
    {
      id: "tab-gioi-thieu",
      tabLabel: "GIỚI THIỆU",
      heading: "GIỚI THIỆU",
      paragraphs: [
        "Lấy cảm hứng từ những thành phố thịnh vượng châu Âu, Sunshine City Sài Gòn tiếp nối thành công của Sunshine City Hà Nội ở phía Bắc, trở thành biểu tượng thượng lưu ở phía Nam.",
        "Quy mô dự án gồm 9 tòa tháp cao từ 26 – 38 tầng được phủ kính Low-E 3 lớp chống tia UV, kết hợp hệ thống vườn treo liên tòa, hồ cảnh quan và thác tràn nghệ thuật rộng hơn 10.000 m²."
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
    },
    {
      id: "tab-chu-dau-tu",
      tabLabel: "CHỦ ĐẦU TƯ",
      heading: "CHỦ ĐẦU TƯ",
      paragraphs: [
        "Tập đoàn Sunshine Group là một trong những nhà phát triển bất động sản và tổng thầu xây dựng tiên phong ứng dụng công nghệ 4.0 vào quản lý vận hành đô thị thông minh tại Việt Nam.",
        "Với tiềm lực tài chính vững mạnh và danh mục hàng chục dự án biểu tượng trải dài từ Hà Nội, Đà Nẵng, Nha Trang đến TP.HCM, chủ đầu tư cam kết chất lượng bàn giao chuẩn khách sạn 5 sao quốc tế."
      ],
      image:
        "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1200&q=85"
    }
  ],
  locationParagraphs: [
    "Sunshine City Sài Gòn tọa lạc tại Quận 7 – một trong những quận trung tâm và có tốc độ phát triển hạ tầng nhanh nhất của TP. Hồ Chí Minh.",
    "Dự án có vị trí đắc địa nhìn ra dòng sông Cả Cấm hiền hòa, thuận tiện kết nối vào trung tâm thông qua hệ thống cầu đường hiện đại bắc qua những kênh rạch tự nhiên của thành phố.",
    "Liền kề Khu đô thị Phú Mỹ Hưng, vùng lõi huyết mạch của Quận 7, Sunshine City Sài Gòn được thừa hưởng toàn bộ tiện ích của khu vực với những bệnh viện, trường học quốc tế hàng đầu, bên cạnh đó là các điểm giải trí đẳng cấp phục vụ cuộc sống thượng lưu."
  ],
  locationMapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80",
  travelColumns: [
    {
      id: "tc-1",
      timeLabel: "2 phút",
      places: [
        "Trung tâm Tài chính Phú Mỹ Hưng",
        "Trung tâm hành chính Quận 7",
        "Trường Quốc tế Nhật Bản",
        "Trường Quốc tế Hàn Quốc",
        "Trường Quốc tế Đài Loan"
      ]
    },
    {
      id: "tc-2",
      timeLabel: "4 phút",
      places: [
        "Trung tâm Triển lãm SECC",
        "Crescent Mall",
        "Công viên Hồ Bán Nguyệt",
        "Trường liên cấp Nam Sài Gòn",
        "Trường Đinh Thiện Lý",
        "Trường Quốc tế liên cấp Việt Úc"
      ]
    },
    {
      id: "tc-3",
      timeLabel: "10 phút",
      places: ["Trung tâm Quận 1", "Phố đi bộ Nguyễn Huệ"]
    },
    {
      id: "tc-4",
      timeLabel: "5 phút",
      places: [
        "Bệnh viện Quận 7",
        "Bệnh viện FV",
        "Bệnh viện Tim Tâm Đức",
        "Sân tập Golf Phú Mỹ Hưng"
      ]
    },
    {
      id: "tc-5",
      timeLabel: "8 phút",
      places: ["Đại học Tôn Đức Thắng", "Đại học Quốc tế RMIT"]
    },
    {
      id: "tc-6",
      timeLabel: "25 phút",
      places: ["Cảng hàng không Quốc tế Tân Sơn Nhất"]
    }
  ],
  goldenValueSlides: [
    {
      id: "gv-1",
      title: "KIẾN TRÚC CHÂU ÂU ẤN TƯỢNG",
      description:
        "Tuyệt tác kiến trúc Sunshine City Sài Gòn là sự giao thoa của những thành phố thịnh vượng bậc nhất trên thế giới. Đó là cuộc sống giàu có ven sông của Monaco, sự phồn hoa của Paris hay kết tinh truyền thống và hiện đại của London thanh lịch. Sunshine City được bao bọc bởi dòng sông xanh tươi, với mật độ xây dựng cực thấp, như một nét chấm phá độc đáo giữa lòng Sài Gòn vội vã.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "gv-2",
      title: "HỆ KÍNH LOW-E CHẠM SÀN 360 ĐỘ",
      description:
        "Toàn bộ 9 tòa tháp được bao phủ bởi hệ mặt dựng kính hộp Low-E 3 lớp nhập khẩu giúp cản nhiệt, chống tia cực tím tuyệt đối nhưng vẫn mở rộng tầm nhìn panorama không giới hạn ra sông Sài Gòn và khu đô thị Phú Mỹ Hưng.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "gv-3",
      title: "NỘI THẤT MẠ VÀNG TINH XẢO",
      description:
        "Mỗi căn hộ được hoàn thiện tỉ mỉ với thiết bị vệ sinh Kohler mạ vàng 24K, hệ khóa cửa thông minh Hafele nhận diện khuôn mặt, sàn gỗ nhập khẩu Châu Âu và hệ tủ bếp nguyên khối sang trọng.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: "gv-4",
      title: "MẬT ĐỘ CÂY XANH & MẶT NƯỚC LÝ TƯỞNG",
      description:
        "Dành hơn 70% diện tích đất cho cảnh quan cây xanh, hồ điều hòa, đường dạo bộ ven sông và vườn thượng uyển trên mái, kiến tạo ốc đảo nghỉ dưỡng trong lành giữa trung tâm Quận 7.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
    }
  ],
  amenitiesIntro:
    "Với diện tích lớn dành cho không gian cảnh quan và tiện ích, Sunshine City Sài Gòn là xứ sở của cuộc sống hiện đại, dẫn đầu xu hướng tương lai. Dịch vụ chuẩn 5 sao quốc tế cùng hệ thống quản lý – vận hành ứng dụng công nghệ thông minh được khai thác hoàn hảo tại Sunshine City, nơi hội tụ trọn vẹn của những chuẩn mực giá trị sống.",
  amenitiesLeft: [
    "Sân chơi thể thao đa năng",
    "Hồ cảnh quan",
    "Sảnh lounge đón khách",
    "Hầm để xe liên tòa",
    "Bể bơi vô cực",
    "Thư viện",
    "Thác tràn nghệ thuật",
    "Rooftop City Bar",
    "S – Cafe"
  ],
  amenitiesRight: [
    "Trường mầm non Maple Bear",
    "Nhà hàng Á-Âu",
    "S – Mart",
    "S – Fitness and Spa",
    "Khu vui chơi trẻ em",
    "Khu vận động sáng tạo",
    "Vườn nướng BBQ",
    "Cầu đi bộ liên tòa"
  ],
  amenitiesImage:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
  ecosystemParagraphs: [
    "Không đứng ngoài xu hướng của thời đại, Sunshine Group tiên phong dẫn đầu công nghệ 4.0, mang đến một cuộc sống thông minh đúng nghĩa tại Sunshine City Sài Gòn.",
    "Thẻ cư dân thông minh tích hợp những tiện ích trong khu căn hộ, cho phép cư dân ra vào tòa nhà cũng như các không gian công cộng, đồng thời mang tính năng của một chiếc thẻ ngân hàng với hạn mức lên đến 300 triệu đồng để cư dân thỏa sức mua sắm, chi tiêu cho cuộc sống.",
    "Ngoài ra, cư dân có thể điều khiển các thiết bị trong căn hộ thông qua ứng dụng Sunshine Home tiện lợi. Đồng thời giữ liên lạc với chủ đầu tư, Đơn vị quản lý cũng như gọi các dịch vụ khác chỉ thông qua một ứng dụng duy nhất trên chiếc điện thoại nhỏ của mình."
  ],
  ecosystemGallery: [
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
  ],
  news: [
    {
      id: "news-1",
      title:
        "SUNSHINE GROUP MANG TRẢI NGHIỆM ĐẲNG CẤP HOÀN TOÀN MỚI CHO THỊ TRƯỜNG BĐS SÀI GÒN",
      date: "25 TH12",
      category: "TIN TỨC DỰ ÁN",
      excerpt:
        "Gia nhập vào thị trường bất động sản Sài Gòn bằng kế hoạch Nam tiến, mang theo những kinh nghiệm kiến tạo đô thị thông minh...",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "SUNSHINE CITY – CHUẨN MỰC SỐNG THƯỢNG LƯU THỜI ĐẠI 4.0",
      date: "25 TH12",
      category: "CÔNG NGHỆ 4.0",
      excerpt:
        "Tại Sunshine City – một trong những dự án trọng điểm thuộc dòng Sunshine Apartment của Sunshine Group...",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title:
        "SUNSHINE CITY SÀI GÒN GHI ĐIỂM BẰNG NHỮNG TIỆN ÍCH ĐẲNG CẤP CHUẨN RESORT",
      date: "25 TH12",
      category: "TIỆN ÍCH 5 SAO",
      excerpt:
        "Nằm trên đường Phú Thuận (phường Tân Phú, Quận 7, Sài Gòn), dự án Sunshine City Sài Gòn hội tụ hơn 60 tiện ích...",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    }
  ],
  legalNote:
    "* Hình ảnh chỉ mang tính chất minh họa. Căn hộ/biệt thự và các trang thiết bị kèm theo Căn hộ/Biệt thự sẽ được bàn giao theo đúng quy định tại Hợp đồng mua bán ký kết."
};

export default xayDung7DefaultData;
