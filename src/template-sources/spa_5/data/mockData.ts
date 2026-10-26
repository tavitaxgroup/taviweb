import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa5PackageItem {
  id: string;
  name: string;
  discountBadge: string;
  oldPrice: string;
  price: string;
  image: string;
}

export interface Spa5Data extends ClonedTemplateBaseData {
  heroHighlightLine: string;
  aboutImages: string[];
  galleryImages: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  packages: Spa5PackageItem[];
}

export const spa5DefaultData: Spa5Data = {
  business: {
    name: "FlySpa",
    phone: ["076 922 0162", "0909 558 168"],
    email: ["cskh@flyspa.vn", "booking@flyspa.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "9h - 18h (Thứ 2 - Thứ 6)",
    rating: 4.9,
    reviewCount: 1234,
    experienceYears: "10+ Năm",
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "Tọa lạc tại địa chỉ 319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP Hồ Chí Minh, FlySpa & Beauty Salon là địa chỉ làm đẹp đáng tin cậy với công nghệ và các chuyên gia hàng đầu về thẩm mỹ, thuận tiện cho khách hàng lui tới thăm khám và trải nghiệm dịch vụ.",
      "Chúng tôi kết hợp liệu pháp thảo mộc thiên nhiên thuần khiết cùng quy trình chăm sóc chuẩn Y khoa nhằm mang lại hiệu quả trị liệu tối ưu và sự thư giãn trọn vẹn cho từng khách hàng."
    ],
    highlights: [
      "Cam kết 100% hài lòng mọi khách hàng",
      "Đội ngũ hơn 30 chuyên gia và bác sĩ giàu kinh nghiệm",
      "Hệ thống hơn 40 gói dịch vụ trị liệu & chăm sóc sắc đẹp"
    ]
  },
  hero: {
    eyebrow: "Chào mừng đến với FlySpa & Beauty Salon",
    title: "CAM KẾT 100% HÀI LÒNG",
    subtitle:
      "Viện chăm sóc sắc đẹp & thư giãn thảo mộc cao cấp với đội ngũ chuyên gia giàu kinh nghiệm cùng không gian trị liệu chuẩn 5 sao.",
    ctaText: "TRẢI NGHIỆM NGAY",
    ctaLink: "#cac-dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85"
    ]
  },
  heroHighlightLine: "MỌI KHÁCH HÀNG",
  aboutImages: [
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80"
  ],
  services: [
    {
      id: "srv-1",
      title: "Massage mặt",
      category: "Facial Therapy",
      description:
        "Massage là phương pháp trị liệu bằng cách sử dụng các động tác day, ấn là chủ yếu, tập trung vào các huyệt đạo giúp nâng cơ và sáng mịn làn da.",
      price: "350,000 ₫",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-2",
      title: "Massage toàn thân",
      category: "Body Therapy",
      description:
        "Massage là phương pháp trị liệu bằng cách sử dụng các động tác day, ấn là chủ yếu, tập trung vào các huyệt đạo giúp giải tỏa mệt mỏi toàn diện.",
      price: "450,000 ₫",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-3",
      title: "Massage bằng đá nóng",
      category: "Hot Stone",
      description:
        "Massage là phương pháp trị liệu bằng cách sử dụng các động tác day, ấn là chủ yếu, kết hợp nhiệt năng từ đá núi lửa đả thông kinh lạc.",
      price: "520,000 ₫",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-4",
      title: "Tắm muối khoáng",
      category: "Body Detox",
      description:
        "Massage là phương pháp trị liệu bằng cách sử dụng muối khoáng Himalaya tinh khiết giúp thanh tẩy tế bào chết và nuôi dưỡng làn da hồng hào.",
      price: "480,000 ₫",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-5",
      title: "Massage chân",
      category: "Foot Reflexology",
      description:
        "Massage là phương pháp trị liệu bằng cách sử dụng các động tác day, ấn là chủ yếu, tập trung vào các huyệt đạo lòng bàn chân giúp ngủ ngon sâu giấc.",
      price: "320,000 ₫",
      image:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "srv-6",
      title: "Massage tinh dầu",
      category: "Aromatherapy",
      description:
        "Massage là phương pháp trị liệu bằng cách sử dụng các động tác day, ấn là chủ yếu, kết hợp tinh dầu thảo mộc hữu cơ giúp thư giãn hệ thần kinh.",
      price: "490,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  ],
  team: [
    {
      id: "team-1",
      name: "ThS. Nguyễn Minh Quân",
      position: "CEO và chuyên gia Spa",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "team-2",
      name: "TS. Trần Hoàng Nam",
      position: "Chuyên gia tư vấn",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "team-3",
      name: "ThS. Lê Bảo Ngọc",
      position: "Chuyên gia chăm sóc da",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "team-4",
      name: "TS. Phạm Thanh Tùng",
      position: "Chuyên gia vật lý trị liệu",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  galleryImages: [
    {
      id: "gal-1",
      title: "Đắp mặt nạ bùn khoáng thiên nhiên",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Massage thư giãn vùng đầu & cổ vai gáy",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Tẩy tế bào chết thảo mộc toàn thân",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Trị liệu túi chườm thảo dược ấm nóng",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Đả thông kinh lạc bằng đá nóng núi lửa",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Chăm sóc da mặt chuyên sâu chuẩn Hàn",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Hương Giang",
      role: "Khách hàng thân thiết",
      rating: 5,
      content: "Chất lượng tuyệt vời, tôi được hoàn toàn thư giãn sau những ngày làm việc căng thẳng.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "test-2",
      author: "Hồng Ngọc",
      role: "Doanh nhân",
      rating: 5,
      content: "Trải nghiệm không thể nào quên. Không gian thơm dịu nhẹ, chắc chắn sẽ quay lại.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "test-3",
      author: "Hà Phương",
      role: "Nhân viên văn phòng",
      rating: 5,
      content: "Hoàn toàn xứng đáng với số tiền bỏ ra, chất lượng liệu trình chăm sóc da rất tốt.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "test-4",
      author: "Kim Xuân",
      role: "Người mẫu ảnh",
      rating: 5,
      content: "Nhân viên phục vụ tận tình, chăm sóc chu đáo từ khâu đón tiếp đến khi kết thúc.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
    }
  ],
  stats: [
    { id: "st-1", number: "1234+", title: "Khách hàng" },
    { id: "st-2", number: "10+", title: "Năm kinh nghiệm" },
    { id: "st-3", number: "30", title: "Chuyên gia Spa" },
    { id: "st-4", number: "40", title: "Gói dịch vụ" }
  ],
  packages: [
    {
      id: "pkg-1",
      name: "Gói chăm sóc da",
      discountBadge: "-33%",
      oldPrice: "750,000 ₫",
      price: "500,000 ₫",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pkg-2",
      name: "Gói massage toàn thân",
      discountBadge: "-25%",
      oldPrice: "1,000,000 ₫",
      price: "750,000 ₫",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pkg-3",
      name: "Gói massage chân",
      discountBadge: "-30%",
      oldPrice: "500,000 ₫",
      price: "350,000 ₫",
      image:
        "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pkg-4",
      name: "Gói massage trị liệu",
      discountBadge: "-44%",
      oldPrice: "800,000 ₫",
      price: "450,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Bí quyết thiết kế không gian phòng trị liệu Spa chuẩn 5 sao",
      date: "06 Th5",
      category: "Không gian Spa",
      excerpt:
        "Ánh sáng dịu nhẹ kết hợp hương tinh dầu sả chanh giúp đánh thức mọi giác quan và mang lại sự thư thái sâu.",
      image:
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Công dụng tuyệt vời của liệu pháp massage đá nóng thảo dược",
      date: "06 Th5",
      category: "Kiến thức trị liệu",
      excerpt:
        "Sự kết hợp giữa nhiệt năng đá bazan và tinh dầu thiên nhiên giúp tuần hoàn máu và giảm đau mỏi vai gáy.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "5 bước thải độc làn da mùa hè với tinh chất thảo mộc tự nhiên",
      date: "06 Th5",
      category: "Chăm sóc da",
      excerpt:
        "Làm sạch sâu lỗ chân lông, cấp ẩm tức thì và bảo vệ hàng rào sinh học của làn da trước tia UV.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
