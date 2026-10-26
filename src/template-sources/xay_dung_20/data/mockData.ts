import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung20RoomCard {
  id: string;
  title: string;
  priceText: string;
  areaText: string;
  colSpan: "wide" | "narrow";
  image: string;
  description: string;
}

export interface XayDung20AlternatingService {
  id: string;
  title: string;
  description: string;
  image: string;
  imageOnLeft: boolean;
}

export interface XayDung20TemplateData extends ClonedTemplateBaseData {
  welcomeGallery: string[];
  roomCards: XayDung20RoomCard[];
  alternatingServices: XayDung20AlternatingService[];
  footerGallery: string[];
}

export const xayDung20DefaultData: XayDung20TemplateData = {
  business: {
    name: "MONA RESORT",
    logo: "",
    phone: ["076 922 0162", "0909 686 888"],
    email: ["booking@monaresort.vn", "info@monaresort.vn"],
    address: "319 - C16 Lý Thường Kiệt, P.15, Q.11, TP.HCM",
    workingHours: "Phục vụ 24/7 (Đặt phòng & Tư vấn nghỉ dưỡng)",
    rating: 4.9,
    reviewCount: 298,
    experienceYears: "12+",
    aboutTitle: "MONA RESORT",
    aboutText: [
      "Tự hào với tiêu chuẩn cao trong thiết kế kiến trúc thân thiện với thiên nhiên, Mona Resort Phú Quốc có vị trí đắc địa, nằm giữa trung tâm thị trấn Dương Đông sầm uất nhất tại Phú Quốc, được ẩn mình trên một ngọn đồi xanh mát có thể nhìn ngắm cảnh núi non trùng điệp và cảnh biển bao la rộng lớn."
    ],
    highlights: [
      "Kiến trúc sinh thái ẩn mình trên đồi hướng biển Phú Quốc",
      "Hệ thống Bungalow gỗ tự nhiên & Biệt thự sân vườn riêng tư",
      "Chuỗi tiện ích 5 sao: Nhà hàng đỉnh đồi, Spa thảo mộc, Gym & Lặn biển",
      "Dịch vụ đón tiễn sân bay và tổ chức sự kiện trọn gói"
    ]
  },
  hero: {
    eyebrow: "THIÊN ĐƯỜNG NGHỈ DƯỠNG SINH THÁI BIỂN ĐẢO",
    title: "MONA RESORT",
    subtitle:
      "Thiên đường nghỉ dưỡng dành cho mọi du khách. Quý khách sẽ được ngắm ánh bình minh và chiều hoàng hôn trên bãi biển của khu nghỉ dưỡng, và tận hưởng những tiện nghi sang trọng bậc nhất tại đây.",
    ctaText: "Xem phòng",
    ctaLink: "#phong-nghi",
    secondaryCtaText: "ĐẶT PHÒNG",
    secondaryCtaLink: "#dat-phong",
    backgroundImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  welcomeGallery: [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
  ],
  roomCards: [
    {
      id: "rm-1",
      title: "Twin Garden View",
      priceText: "1.650.000đ / đêm",
      areaText: "42 m² • 2 Giường đơn",
      colSpan: "wide",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      description:
        "Phòng đôi hướng vườn nhiệt đới xanh mát với hiên gỗ riêng tư và nội thất mây tre đan thủ công."
    },
    {
      id: "rm-2",
      title: "Deluxe Double Panorama",
      priceText: "2.150.000đ / đêm",
      areaText: "48 m² • 1 Giường King",
      colSpan: "narrow",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      description:
        "Tầm nhìn toàn cảnh từ đỉnh đồi xuống vịnh biển Phú Quốc với cửa kính trượt lớn đón gió biển."
    },
    {
      id: "rm-3",
      title: "Bungalow Double Ocean View",
      priceText: "2.850.000đ / đêm",
      areaText: "60 m² • Bungalow mái tranh",
      colSpan: "narrow",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      description:
        "Bungalow biệt lập kiến trúc gỗ và mái lá truyền thống hướng thẳng ra bờ biển hoàng hôn."
    },
    {
      id: "rm-4",
      title: "Executive Twin Garden View",
      priceText: "3.450.000đ / đêm",
      areaText: "75 m² • Biệt thự sân vườn",
      colSpan: "wide",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
      description:
        "Không gian nghỉ dưỡng rộng rãi dành cho gia đình với ban công gỗ lớn bao quanh bởi rừng cây nhiệt đới."
    }
  ],
  alternatingServices: [
    {
      id: "as-1",
      title: "Nhà Hàng",
      description:
        "Nhà hàng nằm ở đỉnh đồi của khu nghỉ dưỡng vì vậy bạn có thể tận hưởng bữa ăn của mình giữa khung cảnh núi rừng và biển cả bao quanh của Phú Quốc.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      imageOnLeft: false
    },
    {
      id: "as-2",
      title: "Spa & Massage",
      description:
        "Nằm tại khu vực sân cỏ yên bình, Mona Spa là một nơi hoàn hảo để thư giãn và làm tươi mới lại sức sống trong cơ thể và tâm hồn qua những âm điệu của tiếng nhạc du dương cùng những chuyển động nhịp nhàng của đội ngũ nhân viên phục vụ đầy chuyên nghiệp.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
      imageOnLeft: true
    },
    {
      id: "as-3",
      title: "Phòng Gym",
      description:
        "Phòng tập của Mona Resort được trang bị những dụng cụ thể dục thể thao hiện đại, với thiết kế mở lấy trực tiếp khí trời. Đây sẽ là nơi mang đến cho chúng ta sức khỏe, sự dẻo dai cũng như yên bình khi được sống và hòa mình trong vòng tay của thiên nhiên.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      imageOnLeft: false
    },
    {
      id: "as-4",
      title: "Lặn biển",
      description:
        "Bạn có thể khám phá Phú Quốc bằng cách tự mình trải nghiệm hoặc tham gia các tour lặn ngắm san hô. Từ bắc tới nam đảo, mỗi hướng đến sẽ đem lại những trải nghiệm khác nhau cũng như những điểm đến nổi tiếng như: Bãi Sao, Hòn Móng Tay, Hòn Mây Rút, Suối Tranh...",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      imageOnLeft: true
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Khách hàng Thanh Tâm",
      role: "Du khách TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Tự hào với tiêu chuẩn cao trong thiết kế thân thiện với thiên nhiên, Mona Resort Phú Quốc có vị trí đắc địa, nằm giữa trung tâm thị trấn Dương Đông sầm uất nhất tại Phú Quốc được ẩn mình trên 1 ngọn đồi có thể nhìn ngắm cảnh núi non xanh mát và cảnh biển bao la rộng lớn."
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Làm thế nào để kinh doanh khách sạn có đông khách quanh năm?",
      date: "12/05/2026",
      category: "Quản trị Resort",
      excerpt:
        "Đa phần chủ đầu tư khách sạn khi bắt đầu kinh doanh và vận hành khu nghỉ dưỡng đều chú trọng vào kiến trúc xanh và trải nghiệm bản địa...",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "TIÊU CHUẨN THIẾT KẾ & QUẢNG CÁO KHÁCH SẠN 4 SAO",
      date: "18/05/2026",
      category: "Kiến trúc nghỉ dưỡng",
      excerpt:
        "Rất nhiều khách sạn đang hoạt động ở Việt Nam ở phân khúc khách sạn 4 - 5 sao đang nâng cấp không gian cảnh quan hồ bơi vô cực...",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "10 mẹo tìm kiếm Khách sạn & Resort đẹp trên Google",
      date: "25/05/2026",
      category: "Cẩm nang du lịch",
      excerpt:
        "Khi muốn tìm được khách sạn như ý, hãy tìm đến thương hiệu khu nghỉ dưỡng có đánh giá thực tế cao và vị trí thuận tiện...",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=300&q=75",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=75"
  ]
};

export default xayDung20DefaultData;
