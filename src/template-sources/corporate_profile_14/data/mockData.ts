import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface CorporateProfile14Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  excerpt: string;
  image: string;
}

export interface CorporateProfile14Data extends ClonedTemplateBaseData {
  hotDeals: Array<{
    id: string;
    destination: string;
    price: string;
    duration: string;
    image: string;
  }>;
  popularTours: CorporateProfile14Tour[];
  commitments: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  featuredDestinations: Array<{
    id: string;
    name: string;
    subtitle: string;
    image: string;
  }>;
  luxuryResort: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    features: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  tripGallery: string[];
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

export const corporateProfile14DefaultData: CorporateProfile14Data = {
  business: {
    name: "PeakJourneys",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@peakjourneys.vn", "booking@peakjourneys.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 680,
    aboutTitle: "TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO VÀ KỶ NIỆM KHÓ QUÊN",
    aboutText: [
      "Chúng tôi tự hào giới thiệu với bạn những hành trình lữ hành và sự kiện MICE đẳng cấp, nơi bạn có thể khám phá những điểm đến độc đáo, trải nghiệm văn hóa bản địa đa dạng và tận hưởng cảnh quan thiên nhiên tuyệt đẹp.",
      "Với sự tận tâm và chuyên nghiệp, PeakJourneys cam kết mang đến cho khách hàng cá nhân và doanh nghiệp những kỷ niệm vô giá và độc đáo trên mỗi hành trình."
    ],
  },
  hero: {
    eyebrow: "Khám phá thế giới cùng",
    title: "PeakJourneys",
    subtitle: "Chúng tôi mang đến dịch vụ lữ hành & sự kiện hoàn hảo nhất",
    ctaText: "ĐẶT NGAY",
    ctaLink: "#chuyen-di-pho-bien",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  },
  hotDeals: [
    {
      id: "hd-1",
      destination: "Hà Giang",
      price: "1,599,000đ",
      duration: "3 Ngày 2 Đêm • Khởi hành thứ 6 hàng tuần",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hd-2",
      destination: "Hà Nội",
      price: "1,899,000đ",
      duration: "3 Ngày 2 Đêm • Di sản ngàn năm văn hiến",
      image:
        "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hd-3",
      destination: "Đà Nẵng",
      price: "2,499,000đ",
      duration: "4 Ngày 3 Đêm • Bà Nà Hills - Phố cổ Hội An",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hd-4",
      destination: "Ninh Thuận",
      price: "2,199,000đ",
      duration: "3 Ngày 2 Đêm • Vịnh Vĩnh Hy - Đồi Cát Nam Cương",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hd-5",
      destination: "Đà Lạt",
      price: "1,799,000đ",
      duration: "3 Ngày 2 Đêm • Săn mây Cầu Đất - Nghỉ dưỡng thông reo",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
  ],
  popularTours: [
    {
      id: "tour-1",
      title: "Tour vòng cung Đông Bắc: Hà Giang - Cao Bằng - Lạng Sơn",
      location: "Hà Giang",
      duration: "5 Ngày",
      price: "2,199,000đ",
      oldPrice: "2,799,000đ",
      badge: "Nổi bật",
      excerpt:
        "Chào mừng bạn đến với hành trình khám phá vẻ đẹp hùng vĩ của cao nguyên đá Đồng Văn và thác Bản Giốc...",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tour-2",
      title: "Tour miền Bắc: Hà Nội - Sapa - Ninh Bình - Hạ Long",
      location: "Hà Nội",
      duration: "4 Ngày",
      price: "2,399,000đ",
      excerpt:
        "Khám phá vẻ đẹp của miền Bắc Việt Nam qua hành trình Hà Nội - Sapa - Ninh Bình - Vịnh Hạ Long di sản thiên nhiên...",
      image:
        "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tour-3",
      title: "Tour Đà Nẵng - Hội An - Quảng Bình - Cố Đô Huế",
      location: "Đà Nẵng",
      duration: "4 Ngày",
      price: "2,799,000đ",
      excerpt:
        "Chào mừng bạn đến với hành trình di sản miền Trung khám phá vẻ đẹp hài hòa giữa thiên nhiên biển đảo và văn hóa...",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
  ],
  commitments: [
    {
      id: "cm-1",
      title: "Đa dạng phong phú",
      description:
        "Cung cấp hàng nghìn tour du lịch trong nước và quốc tế, chuyến đi nghỉ dưỡng sang trọng.",
      icon: "globe",
    },
    {
      id: "cm-2",
      title: "Cam Kết Chất Lượng",
      description:
        "Cung cấp hàng nghìn tour du lịch trong nước và quốc tế, chuyến đi nghỉ dưỡng sang trọng.",
      icon: "check",
    },
    {
      id: "cm-3",
      title: "Đặt Tour Nhanh Chóng",
      description:
        "Cung cấp hàng nghìn tour du lịch trong nước và quốc tế, chuyến đi nghỉ dưỡng sang trọng.",
      icon: "zap",
    },
    {
      id: "cm-4",
      title: "An Toàn & Uy Tín",
      description:
        "Cung cấp hàng nghìn tour du lịch trong nước và quốc tế, chuyến đi nghỉ dưỡng sang trọng.",
      icon: "shield",
    },
  ],
  featuredDestinations: [
    {
      id: "fd-1",
      name: "Đà Lạt",
      subtitle: "Thành phố ngàn hoa & sương mù lãng mạn",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fd-2",
      name: "Hà Nội",
      subtitle: "Thủ đô nghìn năm văn hiến & ẩm thực phố cổ",
      image:
        "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fd-3",
      name: "Hà Giang",
      subtitle: "Tuyệt tác cao nguyên đá & cung đường hạnh phúc",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fd-4",
      name: "Ninh Thuận",
      subtitle: "Vịnh biển Vĩnh Hy nguyên sơ & nắng gió miền Trung",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
    },
  ],
  luxuryResort: {
    eyebrow: "Dịch vụ cao cấp",
    title: "KHU NGHỈ MÁT SANG TRỌNG",
    description:
      "Chúng tôi cam kết cung cấp cho bạn trải nghiệm du lịch tuyệt vời và đáng nhớ, từ việc đặt vé đến khám phá điểm đến. Với những cam kết của chúng tôi, bạn có thể yên tâm rằng chúng tôi sẽ luôn đồng hành và đảm bảo sự hài lòng của bạn.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
    features: [
      {
        id: "lf-1",
        title: "Đa dạng điểm đến",
        description:
          "Chúng tôi cung cấp một loạt các điểm đến hấp dẫn trên toàn thế giới",
      },
      {
        id: "lf-2",
        title: "Giá cả tốt nhất",
        description:
          "Chúng tôi cung cấp mức giá ưu đãi trực tiếp từ hệ thống resort 5 sao",
      },
      {
        id: "lf-3",
        title: "Dịch vụ chất lượng",
        description:
          "Đội ngũ điều hành tour và hướng dẫn viên tận tâm hỗ trợ 24/7",
      },
    ],
  },
  tripGallery: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  ],
  stats: [
    { id: "st-1", number: "12", title: "Năm kinh nghiệm" },
    { id: "st-2", number: "98%", title: "Đánh giá tích cực" },
    { id: "st-3", number: "2k", title: "Khách thân thiết" },
    { id: "st-4", number: "400+", title: "Tour hoạt động" },
  ],
  faqs: [
    {
      id: "fq-1",
      question: "Chúng tôi có thể tùy chỉnh tour du lịch theo nhu cầu riêng không?",
      answer:
        "Có! Chúng tôi luôn sẵn sàng lắng nghe yêu cầu của bạn và điều chỉnh lịch trình, điểm đến, khách sạn cũng như kịch bản Gala Dinner theo sở thích cá nhân hoặc doanh nghiệp.",
    },
    {
      id: "fq-2",
      question: "Các tour của các bạn có bao gồm những dịch vụ gì?",
      answer:
        "Trọn gói tour bao gồm vé máy bay/xe du lịch đời mới, khách sạn/resort tiêu chuẩn 4-5 sao, các bữa ăn đặc sản bản địa, vé tham quan, hướng dẫn viên suốt tuyến và bảo hiểm du lịch.",
    },
    {
      id: "fq-3",
      question: "Có cần phải mua bảo hiểm du lịch không?",
      answer:
        "Tất cả các hành trình của PeakJourneys đều đã bao gồm gói Bảo hiểm Du lịch toàn diện để quý khách hoàn toàn an tâm tận hưởng chuyến đi.",
    },
    {
      id: "fq-4",
      question: "Làm thế nào để đặt tour nhanh nhất?",
      answer:
        "Quý khách có thể đặt trực tiếp trên website hoặc liên hệ hotline để chuyên viên tư vấn giữ chỗ và gửi lịch trình chi tiết trong 5 phút.",
    },
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Phạm Mỹ Duyên",
      role: "Khách hàng thân thiết",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      content:
        "Tôi rất ấn tượng với dịch vụ đặt tour trên website. Giao diện dễ sử dụng và thông tin rõ ràng. Tôi đã có một chuyến đi tuyệt vời đến Đà Nẵng!",
    },
    {
      id: "tm-2",
      author: "Xuân Trung",
      role: "Giám đốc Nhân sự",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      content:
        "Tôi rất ấn tượng với dịch vụ đặt tour trên website. Giao diện dễ sử dụng và thông tin rõ ràng. Tôi đã có một chuyến đi tuyệt vời đến Đà Nẵng!",
    },
    {
      id: "tm-3",
      author: "Trần Thu Nga",
      role: "Khách hàng Doanh nghiệp",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      content:
        "Tôi rất ấn tượng với dịch vụ đặt tour trên website. Giao diện dễ sử dụng và thông tin rõ ràng. Tôi đã có một chuyến đi tuyệt vời đến Đà Nẵng!",
    },
  ],
  clients: [
    { id: "c-1", name: "BLUELAKE" },
    { id: "c-2", name: "LIFE ADVENTURES" },
    { id: "c-3", name: "MOUNTAIN EXPEDITION" },
    { id: "c-4", name: "WANDERLUST" },
    { id: "c-5", name: "EXPLORER" },
  ],
  news: [
    {
      id: "nw-1",
      title: "Khám Phá Các Tour Du Lịch Đặc Biệt Dành Cho Mùa Hè Này",
      date: "Th7 09, 2026 • 5 Phút Đọc",
      excerpt:
        "Tổng hợp những cung đường biển đảo và nghỉ dưỡng núi cao lý tưởng nhất cho kỳ nghỉ gia đình và công ty...",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Top 10 Kinh Nghiệm Du Lịch Bền Vững Nên Trang Bị Trước Chuyến Đi",
      date: "Th7 10, 2026 • 3 Phút Đọc",
      excerpt:
        "Cách chuẩn bị hành lý gọn nhẹ, bảo vệ cảnh quan thiên nhiên và tôn trọng văn hóa bản địa tại mỗi điểm đến...",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Hành Trình Ẩm Thực: Du Lịch Qua Mỗi Món Ăn Đặc Sản Ba Miền",
      date: "Th7 12, 2026 • 4 Phút Đọc",
      excerpt:
        "Thưởng thức tinh hoa ẩm thực từ cao nguyên đá Hà Giang, phố cổ Hội An đến miền Tây sông nước trù phú...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = corporateProfile14DefaultData;
export default corporateProfile14DefaultData;
