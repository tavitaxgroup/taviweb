import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto15RouteCard {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface GarageOto15Data extends ClonedTemplateBaseData {
  featuredRoutes: GarageOto15RouteCard[];
  famousSpots: Array<{
    id: string;
    title: string;
    city: string;
    description: string;
    image: string;
  }>;
  northRegion: {
    title: string;
    description: string;
    citiesList: string[];
    cards: GarageOto15RouteCard[];
  };
  southRegion: {
    title: string;
    description: string;
    citiesList: string[];
    cards: GarageOto15RouteCard[];
  };
  paymentInfo: {
    accountNumber: string;
    bankName: string;
    accountHolder: string;
  };
}

export const garageOto15DefaultData: GarageOto15Data = {
  business: {
    name: "MonaJourney Auto",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@monajourney.vn", "booking@monajourney.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "06:00 - 22:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 510,
    aboutTitle: "ĐỘI XE DU LỊCH HẠNG SANG & TRUNG TÂM BẢO DƯỠNG HÀNH TRÌNH",
    aboutText: [
      "MonaJourney Auto chuyên cung cấp dịch vụ cho thuê xe Limousine, xe du lịch 7-45 chỗ đời mới, xe tự lái hạng sang và hệ thống xưởng bảo dưỡng kỹ thuật tiêu chuẩn quốc tế trên khắp 3 miền.",
      "Đội ngũ tài xế chuyên nghiệp cùng quy trình kiểm định an toàn nghiêm ngặt giúp mọi hành trình của gia đình và doanh nghiệp luôn êm ái, đúng giờ và trọn vẹn."
    ],
  },
  hero: {
    eyebrow: "CÔNG TY ĐỘI XE & LỮ HÀNH",
    title: "CÔNG TY MONA JOURNEY",
    subtitle: "Chuyên tổ chức đội xe du lịch hạng sang & tour đường bộ trong nước",
    description:
      "Chúng tôi sở hữu dàn xe Limousine DCar, Sedona, Carnival và xe khách Universe đời mới nhất, được bảo dưỡng định kỳ tại xưởng dịch vụ chính hãng trước mỗi chuyến khởi hành.",
    ctaText: "XEM NGAY",
    ctaLink: "#cac-tuyen-xe",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  },
  featuredRoutes: [
    {
      id: "fr-1",
      name: "Sapa – Lào Cai",
      price: "4.500.000đ",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fr-2",
      name: "Cố Đô Huế",
      price: "4.900.000đ",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fr-3",
      name: "Vịnh Hạ Long",
      price: "5.500.000đ",
      image:
        "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fr-4",
      name: "Miền Tây",
      price: "2.400.000đ",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fr-5",
      name: "Đà Lạt",
      price: "5.200.000đ",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fr-6",
      name: "Hội An",
      price: "6.500.000đ",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
  ],
  famousSpots: [
    {
      id: "fs-1",
      title: "BÀ NÀ HILLS",
      city: "Đà Nẵng",
      description:
        "Dịch vụ đưa đón sân bay Đà Nẵng và tham quan Bà Nà Hills trọn gói bằng dòng xe Carnival & Limousine 9 chỗ ghế massage cao cấp.",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fs-2",
      title: "VINPEARL LAND",
      city: "Nha Trang",
      description:
        "Hành trình nghỉ dưỡng biển Nha Trang êm ái với đội xe du lịch đời mới, hỗ trợ kiểm tra kỹ thuật và cứu hộ hành trình 24/7.",
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "fs-3",
      title: "PHỐ CỔ HỘI AN",
      city: "Quảng Nam",
      description:
        "Khám phá vẻ đẹp cổ kính của Phố cổ Hội An và di sản miền Trung cùng đội ngũ tài xế bản địa tận tâm, thông thuộc mọi cung đường.",
      image:
        "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=800&q=80",
    },
  ],
  northRegion: {
    title: "Miền Bắc",
    description:
      "Hệ thống trạm bảo dưỡng và đội xe Limousine khu vực phía Bắc phục vụ đưa đón sân bay Nội Bài, hành trình núi cao Tây Bắc và các khu công nghiệp trọng điểm với chất lượng kỹ thuật hoàn hảo.",
    citiesList: [
      "Hà Nội",
      "Sa Pa",
      "Hạ Long",
      "Điện Biên",
      "Quảng Bình",
      "Thanh Hóa",
    ],
    cards: [
      {
        id: "nr-1",
        name: "Sapa",
        price: "3.000.000đ",
        image:
          "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "nr-2",
        name: "Vịnh Hạ Long",
        price: "3.000.000đ",
        image:
          "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "nr-3",
        name: "Hà Nội",
        price: "2.000.000đ",
        image:
          "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "nr-4",
        name: "Quảng Bình",
        price: "3.000.000đ",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  southRegion: {
    title: "Miền Nam",
    description:
      "Trung tâm điều hành đội xe và xưởng chăm sóc ô tô khu vực phía Nam đáp ứng nhanh chóng nhu cầu thuê xe hợp đồng doanh nghiệp, xe cưới hạng sang và hành trình nghỉ dưỡng biển đảo.",
    citiesList: [
      "Đà Lạt",
      "Nha Trang",
      "TPHCM",
      "Cần Thơ",
      "Phú Quốc",
      "Phan Thiết",
    ],
    cards: [
      {
        id: "sr-1",
        name: "Cần Thơ",
        price: "2.000.000đ",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "sr-2",
        name: "Đà Lạt",
        price: "3.000.000đ",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "sr-3",
        name: "Sài Gòn",
        price: "3.000.000đ",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "sr-4",
        name: "Phú Quốc",
        price: "3.000.000đ",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  paymentInfo: {
    accountNumber: "123456789",
    bankName: "Ngân hàng Thương mại Cổ phần Á Châu (ACB)",
    accountHolder: "Công ty TNHH MonaJourney Auto",
  },
};

export const mockData = garageOto15DefaultData;
export default garageOto15DefaultData;
