import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface QuanCafe6WColumn {
  id: string;
  color: string;
  title: string;
  description: string;
}

export interface QuanCafe6Product {
  id: string;
  name: string;
  volume: string;
  flavorTag: string;
  categoryTab: string;
  price: string;
  image: string;
}

export interface QuanCafe6DeliveryStep {
  id: string;
  title: string;
  subtitle: string;
  icon: "select" | "quote" | "sample" | "order";
}

export interface QuanCafe6Data extends ClonedTemplateBaseData {
  wColumns: QuanCafe6WColumn[];
  beetrootFeature: {
    badgeText: string;
    title: string;
    description: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    canImage: string;
  };
  productTabs: string[];
  juiceProducts: QuanCafe6Product[];
  deliveryProcess: {
    title: string;
    subtitle: string;
    centerBottleImage: string;
    steps: QuanCafe6DeliveryStep[];
  };
  certifications: string[];
}

export const quanCafe6DefaultData: QuanCafe6Data = {
  business: {
    name: "MonaJuice",
    phone: ["0313 728 397", "0909 728 397"],
    email: ["info@themona.global", "export@monajuice.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 22:00",
    rating: 4.9,
    reviewCount: 1580,
    aboutTitle: "MONA JUICE - CHUYÊN CUNG CẤP ĐỒ UỐNG HÀNG ĐẦU VIỆT NAM",
    aboutText: [
      "MonaJuice là nhà phát triển và sản xuất nước ép trái cây tươi, sinh tố, trà thảo mộc và nước giải khát đóng lon cao cấp có trụ sở tại TP. Hồ Chí Minh và Bình Dương."
    ],
    highlights: [
      "100% trái cây nhiệt đới tươi tuyển chọn từ nông trại chuẩn VietGAP",
      "Công nghệ ép lạnh Cold-Pressed giữ trọn Vitamin & Enzyme tự nhiên",
      "Đạt chứng nhận quốc tế FDA, HALAL, ISO 22000 & HACCP"
    ]
  },
  hero: {
    eyebrow: "100% TRÁI CÂY NHIỆT ĐỚI TƯƠI MÁT",
    subtitle: "SỰ TƯƠI MÁT TỪ THIÊN NHIÊN TRONG TỪNG GIỌT",
    title: "THE MONA JUICE",
    description:
      "Bộ sưu tập nước ép trái cây nguyên chất, sinh tố Detox và nước dừa tươi đóng lon chuẩn xuất khẩu.",
    ctaText: "KHÁM PHÁ SẢN PHẨM",
    ctaLink: "#products",
    secondaryCtaText: "NHẬN MẪU MIỄN PHÍ",
    secondaryCtaLink: "#delivery-process",
    backgroundImage:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1920&q=85"
  },
  wColumns: [
    {
      id: "w-1",
      color: "#7cb342",
      title: "CHÚNG TÔI LÀ AI?",
      description:
        "Mona Juice là nhà phát triển và sản xuất đồ uống cao cấp, có trụ sở tại Việt Nam (Thành phố Hồ Chí Minh và tỉnh Bình Dương) với dây chuyền chiết rót vô trùng hiện đại."
    },
    {
      id: "w-2",
      color: "#f57c00",
      title: "CHÚNG TÔI SẢN XUẤT GÌ?",
      description:
        "Chúng tôi liên tục khám phá các loại đồ uống mới. Bên cạnh Nước Trái Cây, Mona Juice còn cung cấp nhiều sản phẩm khác: Nước Dừa Tươi, Nước Lô Hội, Sinh Tố & Cà Phê."
    },
    {
      id: "w-3",
      color: "#d32f2f",
      title: "CHÚNG TÔI CUNG CẤP DỊCH VỤ GÌ?",
      description:
        "Với năng lực sản xuất lớn, Mona Juice không chỉ phân phối sỉ lẻ cho chuỗi quán cafe, nhà hàng mà còn gia công OEM/ODM dưới nhiều thương hiệu quốc tế."
    },
    {
      id: "w-4",
      color: "#673ab7",
      title: "CHÚNG TÔI GIAO HÀNG NHƯ THẾ NÀO?",
      description:
        "Đội ngũ logistics lạnh của Mona Juice làm việc chăm chỉ 24/7 để cung cấp dịch vụ vận chuyển tiện lợi đến bất kỳ cửa hàng và cảng nào với chi phí tối ưu."
    }
  ],
  beetrootFeature: {
    badgeText: "MỚI RA MẮT",
    title: "NƯỚC ÉP CỦ DỀN MONA JUICE",
    description:
      "Nước ép củ dền Mona Juice được làm từ củ dền tươi Đà Lạt 100% kết hợp táo xanh và chanh tươi, mang đến hương vị tự nhiên và dinh dưỡng tối đa cho làn da và hệ tim mạch.",
    stat1Number: "100%",
    stat1Label: "TƯƠI NGUYÊN CHẤT",
    stat2Number: "500",
    stat2Label: "ML DUNG TÍCH",
    canImage:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=85"
  },
  productTabs: [
    "NƯỚC TRÁI CÂY",
    "NƯỚC CÓ GA",
    "NƯỚC LÔ HỘI",
    "NƯỚC DỪA",
    "CÀ PHÊ"
  ],
  juiceProducts: [
    {
      id: "jp-1",
      name: "Nước Dừa Tươi Hương Vải JUICE Chai 290ml",
      volume: "290ml",
      flavorTag: "Dừa & Vải Thiều",
      categoryTab: "NƯỚC TRÁI CÂY",
      price: "28.000 ₫",
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-2",
      name: "Nước Ép Xoài Chanh Dây Nhiệt Đới Lon 330ml",
      volume: "330ml",
      flavorTag: "Xoài Cát & Chanh Dây",
      categoryTab: "NƯỚC TRÁI CÂY",
      price: "32.000 ₫",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-3",
      name: "Nước Ép Cam Vàng & Đào Tươi Vitamin C 290ml",
      volume: "290ml",
      flavorTag: "Cam Vàng & Đào",
      categoryTab: "NƯỚC TRÁI CÂY",
      price: "30.000 ₫",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-4",
      name: "Nước Ép Củ Dền Táo Xanh Detox Lon 500ml",
      volume: "500ml",
      flavorTag: "Củ Dền & Táo Xanh",
      categoryTab: "NƯỚC TRÁI CÂY",
      price: "38.000 ₫",
      image:
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-5",
      name: "Nước Trái Cây Có Ga Hương Bưởi Hồng 330ml",
      volume: "330ml",
      flavorTag: "Bưởi Hồng Sparkling",
      categoryTab: "NƯỚC CÓ GA",
      price: "32.000 ₫",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-6",
      name: "Nước Nha Đam Lô Hội Mật Ong Thanh Nhiệt 290ml",
      volume: "290ml",
      flavorTag: "Lô Hội & Mật Ong",
      categoryTab: "NƯỚC LÔ HỘI",
      price: "29.000 ₫",
      image:
        "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-7",
      name: "Nước Dừa Xiêm Bến Tre Nguyên Chất 100% 330ml",
      volume: "330ml",
      flavorTag: "Dừa Xiêm Xanh",
      categoryTab: "NƯỚC DỪA",
      price: "30.000 ₫",
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "jp-8",
      name: "Cà Phê Cold Brew Ủ Lạnh Kết Hợp Cam Tươi 290ml",
      volume: "290ml",
      flavorTag: "Cold Brew Cam Sả",
      categoryTab: "CÀ PHÊ",
      price: "39.000 ₫",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80"
    }
  ],
  deliveryProcess: {
    title: "QUY TRÌNH GIAO HÀNG",
    subtitle: "GIAO HÀNG TẠI MONA JUICE",
    centerBottleImage:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=85",
    steps: [
      {
        id: "st-1",
        title: "CHỌN SẢN PHẨM",
        subtitle: "Chọn sản phẩm bạn quan tâm",
        icon: "select"
      },
      {
        id: "st-2",
        title: "NHẬN BÁO GIÁ",
        subtitle: "Nhận báo giá tốt nhất",
        icon: "quote"
      },
      {
        id: "st-3",
        title: "NHẬN MẪU MIỄN PHÍ",
        subtitle: "Chúng tôi cung cấp mẫu miễn phí",
        icon: "sample"
      },
      {
        id: "st-4",
        title: "ĐẶT HÀNG NGAY!",
        subtitle: "Sẵn sàng đặt hàng",
        icon: "order"
      }
    ]
  },
  testimonials: [
    {
      id: "t-1",
      author: "PHƯƠNG NGUYỄN",
      role: "QUẢN LÝ CHUỖI CỬA HÀNG TIỆN LỢI",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content:
        "Các dòng nước ép trái cây và nước dừa đóng chai của MonaJuice giữ được vị thanh ngọt hoàn toàn tự nhiên, không chất bảo quản và thiết kế bao bì cực kỳ bắt mắt. Khách hàng tại hệ thống của chúng tôi rất yêu thích!"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "NƯỚC TRÁI CÂY TƯƠI MONA JUICE : SỰ LỰA CHỌN TUYỆT VỜI CHO MỌI GIA ĐÌNH",
      date: "18 Th5 2026",
      category: "Dinh Dưỡng Xanh",
      excerpt:
        "MONA JUICE: Sự Tươi Mát Từ Thiên Nhiên. Trong cuộc sống hiện đại đầy bận rộn, bổ sung Vitamin tự nhiên từ nước ép lạnh là bí quyết giữ gìn sức khỏe...",
      image:
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "KHÁM PHÁ HƯƠNG VỊ ĐỘC ĐÁO TỪ NƯỚC TRÁI CÂY TƯƠI MONA JUICE",
      date: "15 Th5 2026",
      category: "Công Thức Detox",
      excerpt:
        "MONA JUICE: Sự Tươi Mát Từ Thiên Nhiên. Trong cuộc sống hiện đại đầy bận rộn, sự kết hợp giữa củ dền, bưởi hồng và nha đam tạo nên thức uống thanh lọc cơ thể...",
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "MANG ĐẾN SỰ TƯƠI MÁT THIÊN NHIÊN TRONG TỪNG GIỌT NƯỚC ÉP",
      date: "12 Th5 2026",
      category: "Nông Trại Sạch",
      excerpt:
        "MONA JUICE: Sự Tươi Mát Từ Thiên Nhiên. Trong cuộc sống hiện đại đầy bận rộn, quy trình thu hoạch và ép lạnh trong vòng 6 giờ giúp giữ trọn dưỡng chất...",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
    }
  ],
  certifications: ["ISO 22000", "FDA", "HACCP", "HALAL", "GMP"]
};
