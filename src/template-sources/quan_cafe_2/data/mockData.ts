import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface QuanCafe2RoastType {
  id: string;
  name: string;
  roastLevel: string;
  origin: string;
  image: string;
}

export interface QuanCafe2Product {
  id: string;
  name: string;
  badge: string;
  price: string;
  weight: string;
  roastNote: string;
  rating: number;
  image: string;
}

export interface QuanCafe2BrewMethod {
  id: string;
  name: string;
  ratio: string;
  brewTime: string;
  flavorProfile: string;
  image: string;
}

export interface QuanCafe2JourneyStep {
  id: string;
  title: string;
  description: string;
  detailText: string;
  image: string;
}

export interface QuanCafe2Data extends ClonedTemplateBaseData {
  pureCoffeeSection: {
    leftTitle: string;
    leftImage: string;
    rightTitle: string;
    rightSubtitle: string;
    roastTypes: QuanCafe2RoastType[];
  };
  packagedProducts: QuanCafe2Product[];
  excellenceSection: {
    title: string;
    subtitle: string;
    items: Array<{ number: string; title: string; detail: string }>;
    ctaText: string;
    image: string;
    trustBadges: string[];
  };
  productionJourney: QuanCafe2JourneyStep[];
  brewingMethods: QuanCafe2BrewMethod[];
  instagramPhotos: string[];
  partnerLogos: Array<{ id: string; name: string; tagline: string }>;
}

export const quanCafe2DefaultData: QuanCafe2Data = {
  business: {
    name: "THE MONA COFFEE",
    phone: ["0909 555 666", "0313 728 397"],
    email: ["hello@themonacoffee.vn", "roastery@themonacoffee.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ Hai - Chủ Nhật: 07:00 - 22:00",
    rating: 4.9,
    reviewCount: 412,
    aboutTitle: "CÀ PHÊ NGUYÊN CHẤT",
    aboutText: [
      "Cà phê nguyên chất được chế biến 100% từ hạt cà phê tuyển chọn vùng Cầu Đất và Buôn Ma Thuột, không pha trộn với bất kỳ phụ gia hay hương liệu nhân tạo nào. Từng mẻ hạt được trồng, thu hoạch chín đỏ và rang mộc chuẩn nhiệt độ để giữ trọn hương vị nguyên bản."
    ],
    highlights: [
      "100% Hạt cà phê Arabica Cầu Đất & Robusta Honey tuyển chọn",
      "Rang mộc tươi mới mỗi ngày trên hệ thống máy rang Probat Đức",
      "Không chất bảo quản - Giao hàng miễn phí cho đơn hàng trên 300k"
    ]
  },
  hero: {
    eyebrow: "ROASTERY & SPECIALTY COFFEE",
    subtitle: "HƯƠNG VỊ NGUYÊN BẢN TỪ NÔNG TRẠI ĐẾN TÁCH CÀ PHÊ",
    title: "Tinh Hoa Cà Phê Rang Mộc Nguyên Chất Thượng Hạng",
    description:
      "Đánh thức mọi giác quan với những mẻ cà phê đặc sản được rang mới mỗi ngày, giữ trọn hương thơm quyến rũ và hậu vị ngọt sâu tự nhiên.",
    ctaText: "KHÁM PHÁ SẢN PHẨM",
    ctaLink: "#products",
    secondaryCtaText: "CÂU CHUYỆN HẠT CÀ PHÊ",
    secondaryCtaLink: "#journey",
    backgroundImage:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1920&q=85"
  },
  pureCoffeeSection: {
    leftTitle: "CÀ PHÊ NGUYÊN CHẤT",
    leftImage:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80",
    rightTitle: "THƠM NGON CHẤT LƯỢNG",
    rightSubtitle:
      "Những hạt cà phê này thường được trồng theo phương pháp bền vững, không sử dụng hóa chất độc hại, tôn trọng môi trường và người lao động.",
    roastTypes: [
      {
        id: "roast-1",
        name: "Cà Phê Rang Xay Blend",
        roastLevel: "Medium Dark Roast",
        origin: "70% Robusta Đắk Lắk & 30% Arabica Cầu Đất",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "roast-2",
        name: "Cà Phê Hạt Robusta",
        roastLevel: "Full City Roast",
        origin: "100% Fine Robusta Buôn Ma Thuột chế biến Honey",
        image:
          "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "roast-3",
        name: "Cà Phê Hạt Nguyên Chất",
        roastLevel: "Light - Medium Roast",
        origin: "100% Specialty Arabica Cầu Đất độ cao 1.650m",
        image:
          "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  packagedProducts: [
    {
      id: "prod-1",
      name: "Cà Phê Enchanted Espresso",
      badge: "NEW",
      price: "269,000₫",
      weight: "Gói 500g (Hạt / Bột)",
      roastNote: "Hương sô-cô-la đen, hạt dẻ nướng, hậu vị ngọt dịu",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-2",
      name: "Cà Phê Emerald Burst",
      badge: "NEW",
      price: "319,000₫",
      weight: "Gói 500g (Arabica Cầu Đất)",
      roastNote: "Hương hoa trắng, cam thảo, vị chua thanh tao nhã",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-3",
      name: "Cà Phê Velvet Delight",
      badge: "NEW",
      price: "289,000₫",
      weight: "Gói 500g (Signature House Blend)",
      roastNote: "Thể chất sánh mịn, hương caramel bơ và mạch nha",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prod-4",
      name: "Cà Phê Midnight Roast",
      badge: "NEW",
      price: "389,000₫",
      weight: "Gói 500g (Peaberry Culi Thượng Hạng)",
      roastNote: "Đậm đà mạnh mẽ, lớp crema dày mịn chuẩn Gu Việt",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    }
  ],
  excellenceSection: {
    title: "SỰ VƯỢT TRỘI HÀNG ĐẦU",
    subtitle:
      "Khám phá yếu tố chất lượng hàng đầu của sản phẩm cà phê tại cửa hàng của chúng tôi, nơi mang đến cho bạn trải nghiệm thưởng thức cà phê nguyên chất tuyệt vời nhất.",
    items: [
      {
        number: "01",
        title: "Hạt cà phê chất lượng cao",
        detail:
          "Tuyển chọn 100% trái chín đỏ hái tay từ nông trại liên kết đạt chuẩn UTZ & Rainforest tại Lâm Đồng và Đắk Lắk."
      },
      {
        number: "02",
        title: "Rang xay tại chỗ mỗi ngày",
        detail:
          "Ứng dụng biểu đồ nhiệt chuẩn Specialty giúp bung tỏa tối đa tầng hương tự nhiên mà không gây cháy khét."
      },
      {
        number: "03",
        title: "Đa dạng dòng sản phẩm",
        detail:
          "Đáp ứng trọn vẹn mọi gu thưởng thức từ Phin truyền thống, pha máy Espresso đến Pour-Over và Cold Brew."
      }
    ],
    ctaText: "Khám Phá Ngay",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85",
    trustBadges: [
      "Không chất bảo quản",
      "Giao hàng miễn phí cho đơn hàng trên 300k"
    ]
  },
  productionJourney: [
    {
      id: "journey-1",
      title: "Trồng Và Thu Hoạch",
      description:
        "Quy trình bắt đầu với việc chọn lựa những quả cà phê chín màu đỏ đậm, sau đó tiến hành thu hoạch. Quá trình thu hoạch cần sự kỹ lưỡng để đảm bảo chất lượng cao.",
      detailText:
        "Nông trại ở độ cao 1.500m - 1.650m với khí hậu mát mẻ quanh năm giúp hạt cà phê tích tụ lượng đường tự nhiên và hương hoa trái phong phú.",
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "journey-2",
      title: "Xử Lý Và Rang Mộc Hạt Cà Phê",
      description:
        "Sau khi thu hoạch, hạt cà phê được tách chất bả và vỏ thông qua quá trình xử lý ướt hoặc phơi giàn nhà kính tự nhiên trước khi rang mộc.",
      detailText:
        "Hạt nhân xanh đạt độ ẩm tiêu chuẩn 11.5% được bảo quản trong túi GrainPro và rang mới từng mẻ nhỏ theo đơn đặt hàng.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80"
    }
  ],
  brewingMethods: [
    {
      id: "brew-1",
      name: "Cold Brew",
      ratio: "Tỷ lệ 1:10 • Ủ lạnh 16h",
      brewTime: "16 - 18 giờ",
      flavorProfile: "Mượt mà, ít axit, hương trái cây nhiệt đới thanh mát",
      image:
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "brew-2",
      name: "Kalita Wave",
      ratio: "Tỷ lệ 1:15 • Nước 92°C",
      brewTime: "2 phút 45 giây",
      flavorProfile: "Cân bằng tròn vị, hậu vị ngọt dịu như mật ong rừng",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "brew-3",
      name: "Chemex",
      ratio: "Tỷ lệ 1:16 • Giấy lọc dày",
      brewTime: "3 phút 30 giây",
      flavorProfile: "Trong trẻo tinh khiết, nổi bật hương hoa nhài và cam chanh",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "brew-4",
      name: "Espresso",
      ratio: "Tỷ lệ 1:2 • Áp suất 9 Bar",
      brewTime: "25 - 30 giây",
      flavorProfile: "Đậm đặc, lớp crema vàng óng cùng hương chocolate nồng nàn",
      image:
        "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "brew-5",
      name: "Pour-Over",
      ratio: "Tỷ lệ 1:15 • V60 Dripper",
      brewTime: "2 phút 30 giây",
      flavorProfile: "Tầng hương rõ nét, chua thanh nhẹ nhàng và thơm lâu",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "brew-6",
      name: "Flash Brew",
      ratio: "Chiết xuất nóng trực tiếp lên đá",
      brewTime: "2 phút 15 giây",
      flavorProfile: "Giữ trọn hương thơm tươi sáng cùng cảm giác mát lạnh tức thì",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      role: "Sản phẩm chất lượng",
      author: "Văn Long - Khách hàng",
      rating: 5,
      content:
        "Tôi rất ấn tượng với chất lượng sản phẩm. Sự tươi mới và tự nhiên của hạt cà phê rang mộc khiến tôi cảm thấy hài lòng và xứng đáng với số tiền mình đã bỏ ra."
    },
    {
      id: "rev-2",
      role: "Quá tuyệt vời",
      author: "Lê Hảo - Khách hàng",
      rating: 5,
      content:
        "Mở túi cà phê Enchanted Espresso ra là hương thơm lan tỏa khắp phòng. Pha máy tại nhà cho lớp crema dày mịn, vị đắng êm và hậu ngọt rất dễ chịu."
    },
    {
      id: "rev-3",
      role: "Rất hài lòng",
      author: "Bạch Ngân - Khách hàng",
      rating: 5,
      content:
        "Quán đóng gói túi zip có van thoát khí một chiều rất chuyên nghiệp. Giao hàng nhanh và tư vấn cỡ xay phù hợp với bình Pour-Over V60 của mình."
    }
  ],
  instagramPhotos: [
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
  ],
  partnerLogos: [
    { id: "p-1", name: "DALGONA", tagline: "COFFEE ROASTERS" },
    { id: "p-2", name: "La Croissanterie", tagline: "coffee shop" },
    { id: "p-3", name: "Belle Café", tagline: "Coffee Shop" },
    { id: "p-4", name: "THE RISTRETTO", tagline: "COFFEE & BISTRO" },
    { id: "p-5", name: "Coffeep", tagline: "Take it, drink it" },
    { id: "p-6", name: "Roses Coffee", tagline: "Coffee Shop" }
  ]
};
