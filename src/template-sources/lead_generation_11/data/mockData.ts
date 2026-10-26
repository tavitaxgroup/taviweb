import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface LetsTravelTourItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  duration?: string;
  image: string;
}

export interface LetsTravelLandmarkItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  description: string;
  image: string;
}

export interface LeadGeneration11Data extends ClonedTemplateBaseData {
  heroHighlightWord: string;
  attractiveTours: LetsTravelTourItem[];
  midPromoBanner: {
    discountText: string;
    title: string;
    dateRange: string;
    ctaText: string;
    backgroundImage: string;
  };
  popularGridTours: Array<{
    id: string;
    name: string;
    duration: string;
    image: string;
  }>;
  famousLandmarks: LetsTravelLandmarkItem[];
  northRegion: {
    title: string;
    description: string;
    citiesList: string[];
    cards: LetsTravelTourItem[];
  };
  southRegion: {
    title: string;
    description: string;
    citiesList: string[];
    cards: LetsTravelTourItem[];
  };
  footerGallery: string[];
}

export const leadGeneration11DefaultData: LeadGeneration11Data = {
  business: {
    name: "LET'S TRAVEL",
    phone: ["0126 922 0162", "1900 636 648"],
    email: ["info@themona.global", "booking@letstravel.vn"],
    address: "319 C16 Lý Thường Kiệt, Q.11, TP.HCM",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 2450,
    aboutTitle: "Chuyên tổ chức các tour du lịch trong nước",
    aboutText: [
      "Chúng tôi tự hào mang đến những hành trình khám phá vẻ đẹp Việt Nam từ vùng núi cao Tây Bắc hùng vĩ đến biển đảo miền Trung và miền Tây sông nước hữu tình với dịch vụ trọn gói chất lượng 5 sao.",
      "Đăng ký ngay hôm nay để nhận thông tin khuyến mãi vé máy bay, resort nghỉ dưỡng và các gói tour gia đình tiết kiệm đến 30%."
    ],
    experienceYears: "15+"
  },
  heroHighlightWord: "MONA",
  hero: {
    eyebrow: "CÔNG TY MONA TRAVEL",
    title: "Chuyên tổ chức các tour du lịch trong nước",
    subtitle:
      "Khám phá trọn vẹn vẻ đẹp thiên nhiên và di sản văn hóa Việt Nam qua những lịch trình được thiết kế chuyên nghiệp, dịch vụ lưu trú tiêu chuẩn cao cấp và chi phí hợp lý nhất.",
    ctaText: "XEM NGAY",
    ctaLink: "#tour-hap-dan",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
  },
  attractiveTours: [
    {
      id: "at-1",
      name: "Sapa – Lào Cai",
      price: "2,900,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-2",
      name: "Cố đô Huế",
      price: "3,200,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-3",
      name: "Vịnh Hạ Long",
      price: "3,500,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-4",
      name: "Miền Tây",
      price: "1,890,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-5",
      name: "Đà Lạt",
      price: "2,750,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "at-6",
      name: "Hội An",
      price: "3,800,000₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
    }
  ],
  midPromoBanner: {
    discountText: "Giảm giá 30%",
    title: "NGHỈ DƯỠNG TẠI PHÚ QUỐC",
    dateRange: "Từ 05/12 đến 12/12",
    ctaText: "XEM NGAY",
    backgroundImage:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85"
  },
  popularGridTours: [
    {
      id: "pg-1",
      name: "Sapa",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-2",
      name: "Nha Trang",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-3",
      name: "Hà Nội",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-4",
      name: "Sài Gòn",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-5",
      name: "Đà Lạt",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-6",
      name: "Cần Thơ",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-7",
      name: "Đà Nẵng",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-8",
      name: "Đảo Phú Quốc",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pg-9",
      name: "Kinh thành Huế",
      duration: "5 ngày 4 đêm",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80"
    }
  ],
  famousLandmarks: [
    {
      id: "fl-1",
      name: "BÀ NÀ HILLS",
      city: "Đà Nẵng",
      rating: 5,
      description:
        "Trải nghiệm tuyến cáp treo đạt kỷ lục thế giới, dạo bước trên Cầu Vàng giữa lưng chừng mây và khám phá Làng Pháp cổ kính.",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "fl-2",
      name: "VINPEARL LAND",
      city: "Nha Trang",
      rating: 5,
      description:
        "Thiên đường giải trí và nghỉ dưỡng trên đảo Hòn Tre với công viên nước, thủy cung hiện đại và bãi biển xanh trong vắt.",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "fl-3",
      name: "PHỐ CỔ HỘI AN",
      city: "Quảng Nam",
      rating: 5,
      description:
        "Di sản văn hóa thế giới lung linh ánh đèn lồng bên dòng sông Hoài thơ mộng cùng nền ẩm thực truyền thống đặc sắc.",
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80"
    }
  ],
  northRegion: {
    title: "Miền Bắc",
    description:
      "Hành trình khám phá vẻ đẹp thiên nhiên kỳ vĩ của núi rừng Tây Bắc, kỳ quan thiên nhiên thế giới Vịnh Hạ Long và dấu ấn văn hóa ngàn năm văn hiến tại thủ đô Hà Nội.",
    citiesList: ["Hà Nội", "Sa Pa", "Hạ Long", "Điện Biên", "Quảng Bình", "Thanh Hóa"],
    cards: [
      {
        id: "nr-1",
        name: "Sapa",
        price: "3,200,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nr-2",
        name: "Vịnh Hạ Long",
        price: "2,900,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nr-3",
        name: "Hà Nội",
        price: "2,400,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "nr-4",
        name: "Quảng Bình",
        price: "3,400,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  southRegion: {
    title: "Miền Nam",
    description:
      "Tận hưởng nhịp sống năng động của Sài Gòn hoa lệ, miền Tây sông nước miệt vườn trù phú, thành phố ngàn hoa Đà Lạt và thiên đường biển đảo Phú Quốc, Nha Trang.",
    citiesList: ["Đà Lạt", "Nha Trang", "TP.HCM", "Cần Thơ", "Phú Quốc", "Phan Thiết"],
    cards: [
      {
        id: "sr-1",
        name: "Cần Thơ",
        price: "2,100,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "sr-2",
        name: "Đà Lạt",
        price: "2,800,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "sr-3",
        name: "Sài Gòn",
        price: "2,500,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "sr-4",
        name: "Phú Quốc",
        price: "3,900,000₫ / người",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  footerGallery: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=300&q=80"
  ]
};

export default leadGeneration11DefaultData;
