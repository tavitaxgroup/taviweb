import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface FaifoCraftMaterial {
  id: string;
  name: string;
  origin: string;
  application: string;
  durability: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface FaifoBoutiqueSuite {
  id: string;
  name: string;
  code: string;
  area: string;
  view: string;
  pricePerNight: string;
  architectureNote: string;
  image: string;
  amenities: string[];
}

export interface CamanVillageExperience {
  id: string;
  zoneTag: string;
  title: string;
  areaScale: string;
  schedule: string;
  description: string;
  activities: string[];
  image: string;
}

export interface FaifoProjectCase {
  id: string;
  title: string;
  location: string;
  scale: string;
  completionYear: string;
  category: string;
  summary: string;
  image: string;
}

export interface XayDung33Data extends ClonedTemplateBaseData {
  header: {
    brandMonogram: string;
    brandName: string;
    brandSub: string;
    navItems: { label: string; href: string }[];
    ctaButton: string;
  };
  heritageStory: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    materials: FaifoCraftMaterial[];
  };
  boutiqueRoomsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    suites: FaifoBoutiqueSuite[];
  };
  camanVillageSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    totalGardenArea: string;
    experiences: CamanVillageExperience[];
  };
  constructionPortfolio: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    projects: FaifoProjectCase[];
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const defaultData: XayDung33Data = {
  business: {
    name: "FAIFO HOSPITALITY",
    tagline:
      "Kiến Trúc Bản Địa Hội An — Faifo Boutique Hotel & Spa 4 Sao & Làng Trải Nghiệm Caman",
    phone: ["0235 3926 888", "0905 789 456"],
    email: ["booking@faifohospitality.vn", "kientruc@faifohospitality.vn"],
    address: "128 Nguyễn Duy Hiệu, Phường Cẩm Châu, TP. Hội An, Quảng Nam",
    workingHours: "24/7 — Lễ tân Boutique & Tư vấn Kiến trúc Bản địa",
    rating: 4.9,
    reviewCount: 486,
    aboutTitle: "KIẾN TRÚC BẢN ĐỊA GIAO HÒA DI SẢN PHỐ HỘI",
    aboutText: [
      "Faifo Hospitality là đơn vị tiên phong trong quy hoạch, thiết kế kiến trúc bảo tồn và vận hành chuỗi Khách sạn Boutique 4 sao kết hợp nông trại sinh thái tại đô thị cổ Hội An.",
      "Tổ hợp Faifo Boutique Hotel & Spa cùng Làng trải nghiệm Caman trải rộng trên khu vườn hữu cơ 4.000 m² được kiến tạo từ những vật liệu mộc mạc truyền thống: mái ngói âm dương Thanh Hà, tường vôi vàng phố cổ, đá tổ ong Quảng Nam và kết cấu gỗ tự nhiên chạm khắc tinh xảo bởi nghệ nhân làng mộc Kim Bồng.",
    ],
  },
  header: {
    brandMonogram: "F",
    brandName: "FAIFO HOSPITALITY",
    brandSub: "BOUTIQUE HOTEL & HERITAGE ARCHITECTURE",
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "KIẾN TRÚC BẢN ĐỊA", href: "#kien-truc-ban-dia" },
      { label: "PHÒNG BOUTIQUE 4*", href: "#phong-boutique" },
      { label: "LÀNG CAMAN 4.000M²", href: "#lang-caman" },
      { label: "CÔNG TRÌNH DI SẢN", href: "#cong-trinh" },
      { label: "LIÊN HỆ", href: "#lien-he" },
    ],
    ctaButton: "ĐẶT PHÒNG & THAM QUAN",
  },
  hero: {
    eyebrow: "FAIFO HOSPITALITY • HỘI AN HERITAGE & ARCHITECTURE",
    title: "KHÁCH SẠN BOUTIQUE VÀ TRẢI NGHIỆM BẢN ĐỊA HỘI AN",
    subtitle:
      "Faifo Boutique Hotel & Spa 4 sao cùng làng trải nghiệm Caman giữa vườn hữu cơ 4.000 m²",
    ctaText: "KHÁM PHÁ KHÔNG GIAN",
    ctaLink: "#phong-boutique",
    secondaryCtaText: "THăm Làng Caman 4.000m²",
    backgroundImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=85",
  },
  stats: [
    { id: "st-1", value: "4.000 m²", label: "Vườn hữu cơ Làng Caman" },
    { id: "st-2", value: "4 Sao", label: "Chuẩn Boutique Hotel & Spa" },
    { id: "st-3", value: "68 Phòng", label: "Kiến trúc Đông Dương & Bản địa" },
    { id: "st-4", value: "100%", label: "Vật liệu thủ công truyền thống" },
  ],
  heritageStory: {
    eyebrow: "TRIẾT LÝ KIẾN TRÚC & XÂY DỰNG BẢO TỒN",
    heading: "Hơi Thở Kiến Trúc Bản Địa Hội An Trong Từng Chi Tiết Công Trình",
    subtitle:
      "Mỗi mảng tường, mái hiên và hành lang vòm tại Faifo Hospitality đều được nghiên cứu kỹ lưỡng về thông gió tự nhiên, ánh sáng đèn lồng ấm áp và vật liệu thủ công xứ Quảng.",
    materials: [
      {
        id: "mat-tile",
        name: "Ngói Âm Dương Làng Gốm Thanh Hà",
        origin: "Làng gốm Thanh Hà — Hội An (500 năm tuổi)",
        application: "Hệ mái dốc giật cấp chống nóng & thoát nước mưa nhiệt đới",
        durability: "Độ bền trên 80 năm, lên rêu cổ kính tự nhiên",
        description:
          "Toàn bộ hơn 45.000 viên ngói âm dương lợp mái tại Faifo Boutique Hotel được nung củi thủ công tại làng gốm Thanh Hà, tạo lớp đệm không khí đối lưu giúp nhiệt độ trong phòng luôn mát hơn 4–5°C vào mùa hè.",
        image:
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Thi công lợp ngói thủ công với vữa vôi truyền thống",
          "Cách nhiệt tự nhiên, giảm 35% phụ tải điều hòa không khí",
          "Tạo đường viền mái cong nhịp nhàng đặc trưng phố cổ Faifo",
        ],
      },
      {
        id: "mat-stone",
        name: "Đá Tổ Ong & Đá Chẻ Xứ Quảng",
        origin: "Mỏ đá tự nhiên Quảng Nam",
        application: "Ốp mặt dựng tầng trệt, tường rào sinh thái & lối dạo vườn",
        durability: "Chịu phong hóa mưa nắng miền Trung vĩnh cửu",
        description:
          "Bề mặt xốp tự nhiên của đá tổ ong và đá chẻ ghép tay không chỉ tạo chiều sâu thị giác mộc mạc trên nền tường vàng Hội An mà còn giữ ẩm, điều hòa vi khí hậu cho khu vườn hữu cơ 4.000 m².",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Hấp thụ bức xạ nhiệt mặt trời và tiêu âm tiếng ồn ngoại khu",
          "Kết hợp hoàn hảo với hệ đèn hắt tường (Wall Grazing) ban đêm",
          "Không sử dụng hóa chất phủ bóng, thân thiện tuyệt đối với môi trường",
        ],
      },
      {
        id: "mat-wood",
        name: "Mộc Kim Bồng & Đèn Lồng Lụa Tơ Tằm",
        origin: "Làng mộc Kim Bồng & Phố đèn lồng Hội An",
        application: "Hệ con sơn, lan can vòm, nội thất phòng nghỉ & chiếu sáng",
        durability: "Gỗ tự nhiên xử lý chống mối mọt tiêu chuẩn 4 sao quốc tế",
        description:
          "Từng khung cửa sổ lá sách, bàn trà gỗ và hơn 300 chiếc đèn lồng bọc lụa tơ tằm Mã Châu được chế tác riêng, biến toàn bộ khuôn viên khách sạn thành một bức tranh ánh sáng lung linh mỗi tối.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Cửa chớp gỗ lá sách giúp đón gió biển Cửa Đại vào tận phòng ngủ",
          "Ánh sáng vàng ấm 2400K từ đèn lồng lụa giúp thư giãn sâu",
          "Bảo tồn và tạo sinh kế bền vững cho 40 nghệ nhân địa phương",
        ],
      },
    ],
  },
  boutiqueRoomsSection: {
    eyebrow: "KHÔNG GIAN LƯU TRÚ DI SẢN 4 SAO",
    heading: "Hệ Thống Phòng Nghỉ & Biệt Thự Faifo Boutique",
    subtitle:
      "Thiết kế hành lang vòm cong duyên dáng ôm trọn hồ bơi sinh thái và khu vườn hữu cơ xanh mát",
    suites: [
      {
        id: "suite-faifo-heritage",
        name: "Faifo Heritage Balcony Suite",
        code: "FB-HER01",
        area: "48 m²",
        view: "Ban công vòm hướng Vườn Hữu Cơ & Hồ Bơi",
        pricePerNight: "2.150.000 ₫",
        architectureNote: "Ban công sắt nghệ thuật uốn vòm & gạch bông thủ công",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
        amenities: [
          "Giường King-size khung gỗ chạm khắc Kim Bồng",
          "Ban công rộng 8m² với bộ bàn ghế mây thưởng trà sáng",
          "Bồn tắm đá mài Terrazzo & tinh dầu sả chanh hữu cơ Caman",
          "Bao gồm bữa sáng Farm-to-Table & lớp học làm đèn lồng",
        ],
      },
      {
        id: "suite-caman-villa",
        name: "Caman Organic Garden Villa",
        code: "FB-VIL02",
        area: "75 m²",
        view: "Biệt thự sân vườn riêng giữa vườn rau hữu cơ",
        pricePerNight: "3.450.000 ₫",
        architectureNote: "Kiến trúc nhà rường 3 gian cải tiến kết hợp hiên gỗ rộng",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
        amenities: [
          "Sân vườn riêng biệt 25m² và lối đi lát đá chẻ dẫn thẳng ra nông trại",
          "Phòng tắm bán lộ thiên (Semi-Outdoor Rain Shower) ngập ánh nắng",
          "Miễn phí 60 phút trị liệu thảo dược tại Faifo Herbal Spa",
          "Xe đạp cổ điển miễn phí dạo phố cổ & bãi biển An Bàng",
        ],
      },
      {
        id: "suite-indochine-deluxe",
        name: "Indochine Lantern Deluxe Twin",
        code: "FB-DLX03",
        area: "40 m²",
        view: "Hướng Làng Trải Nghiệm & Cánh Đồng Lúa Cẩm Châu",
        pricePerNight: "1.750.000 ₫",
        architectureNote: "Tường vôi vàng di sản phối hợp nội thất gỗ đen Đông Dương",
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
        amenities: [
          "02 Giường đơn lớn hoặc ghép đôi linh hoạt cho gia đình",
          "Cửa sổ lồi (Bay Window) ốp đá chẻ nhìn ra cánh đồng",
          "Trà thảo mộc hoa đậu biếc & bánh đậu xanh Hội An chào mừng",
          "Miễn phí xe điện đưa đón Phố Cổ Hội An theo khung giờ",
        ],
      },
    ],
  },
  camanVillageSection: {
    eyebrow: "LÀNG TRẢI NGHIỆM BẢN ĐỊA CAMAN",
    heading: "Khám Phá Hệ Sinh Thái Vườn Hữu Cơ 4.000 m²",
    subtitle:
      "Không chỉ là nơi nghỉ dưỡng, Faifo Hospitality kiến tạo một ngôi làng văn hóa thu nhỏ nơi du khách tự tay thu hoạch nông sản sạch, làm đèn lồng và tận hưởng liệu pháp thảo mộc truyền thống.",
    totalGardenArea: "4.000 m²",
    experiences: [
      {
        id: "exp-farm",
        zoneTag: "PHÂN KHU NÔNG NGHIỆP XANH",
        title: "Vườn Hữu Cơ Caman 4.000 m² & Bếp Xưa Hội An",
        areaScale: "2.200 m² canh tác hữu cơ 100%",
        schedule: "07:30 – 18:00 hàng ngày",
        description:
          "Khu vườn trồng hơn 35 loại rau thơm Trà Quế (húng lũi, é quế, hành hoa), bầu bí và cây ăn trái bản địa không phân bón hóa học, cung cấp trực tiếp nguyên liệu tươi sống cho nhà hàng của khách sạn.",
        activities: [
          "Trải nghiệm một ngày làm nông dân Trà Quế & thu hoạch rau sạch",
          "Lớp học nấu ăn (Cooking Class): tự tay đổ bánh xèo, làm Cao Lầu & Mì Quảng",
          "Thưởng thức bữa tối hữu cơ dưới giàn đèn lồng giữa vườn",
        ],
        image:
          "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "exp-lantern",
        zoneTag: "PHÂN KHU THỦ CÔNG MỸ NGHỆ",
        title: "Xưởng Đèn Lồng Tre & Nghệ Thuật Thư Pháp",
        areaScale: "450 m² nhà gỗ truyền thống",
        schedule: "09:00 – 17:00 hàng ngày",
        description:
          "Dưới sự hướng dẫn trực tiếp của nghệ nhân phố cổ, du khách tự tay vót nan tre già, căng vải lụa tơ tằm và vẽ họa tiết hoa sen để hoàn thiện chiếc đèn lồng Hội An mang về làm kỷ niệm.",
        activities: [
          "Workshop làm đèn lồng tre gấp gọn truyền thống trong 90 phút",
          "Trải nghiệm nặn gốm Chu Đậu - Thanh Hà và vẽ mặt nạ giấy bồi",
          "Thưởng trà sen cổ thụ và nghe kể chuyện thương cảng Faifo thế kỷ 17",
        ],
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "exp-spa",
        zoneTag: "PHÂN KHU DƯỠNG SINH BẢN ĐỊA",
        title: "Faifo Herbal Spa & Ngâm Chân Thảo Dược Cẩm Châu",
        areaScale: "650 m² ốc đảo tre & hồ sen",
        schedule: "09:30 – 21:30 hàng ngày",
        description:
          "Công trình Spa được xây dựng hoàn toàn bằng tre tầm vông uốn vòm và đá tự nhiên, sử dụng bài thuốc lá xông giải cảm của người Quảng Nam kết hợp tinh dầu chưng cất ngay tại vườn Caman.",
        activities: [
          "Ngâm chân muối khoáng nóng với gừng sẻ, sả chanh và ngải cứu tươi",
          "Trị liệu toàn thân bằng túi chườm thảo dược nóng & đá bazan",
          "Thiền chuông xoay (Sound Healing) bên hồ sen lúc hoàng hôn",
        ],
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  constructionPortfolio: {
    eyebrow: "NĂNG LỰC THIẾT KẾ & THI CÔNG HOSPITALITY",
    heading: "Các Công Trình Kiến Trúc Nghỉ Dưỡng Bản Địa Đã Thực Hiện",
    subtitle:
      "Faifo Hospitality đồng thời nhận tư vấn quy hoạch, thiết kế kiến trúc và tổng thầu thi công trọn gói các dự án Boutique Hotel, Eco-Resort và Biệt thự nghỉ dưỡng di sản tại miền Trung.",
    projects: [
      {
        id: "proj-faifo-main",
        title: "Tổ Hợp Faifo Boutique Hotel & Spa 4 Sao",
        location: "Cẩm Châu, TP. Hội An",
        scale: "68 Phòng & Khu Vườn 4.000 m²",
        completionYear: "2024",
        category: "Khách sạn Boutique 4 Sao",
        summary:
          "Thiết kế kiến trúc mặt dựng đá chẻ kết hợp hành lang vòm cong 3 tầng và quy hoạch cảnh quan nông trại hữu cơ khép kín.",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "proj-caman-retreat",
        title: "Làng Sinh Thái & Nhà Hàng Tre Caman Village",
        location: "Ven sông Thu Bồn, Hội An",
        scale: "4.000 m² Cảnh quan & Nhà rường",
        completionYear: "2024",
        category: "Kiến trúc Sinh thái & Bản địa",
        summary:
          "Phục dựng hệ nhà rường gỗ mít kết hợp kết cấu tre vượt nhịp và hệ thống xử lý nước tuần hoàn sinh học.",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "proj-anbang-villa",
        title: "Quần Thể Biệt Thự Biển Faifo Ocean Heritage",
        location: "Biển An Bàng, TP. Hội An",
        scale: "12 Căn Villa Hồ Bơi Riêng",
        completionYear: "2025",
        category: "Biệt thự Nghỉ dưỡng Biển",
        summary:
          "Sự kết hợp giữa mái ngói âm dương truyền thống và không gian mở hiện đại hướng biển với vật liệu kháng muối biển cao cấp.",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  footer: {
    tagline:
      "Faifo Hospitality — Nơi kiến trúc di sản Hội An và không gian xanh hữu cơ 4.000 m² hòa quyện tạo nên kỳ nghỉ bản địa đích thực.",
    copyright:
      "© Bản quyền thuộc về Faifo Hospitality & Làng Trải Nghiệm Caman. Thiết kế giao diện chuẩn Kiến Trúc Nghỉ Dưỡng XD033.",
  },
};
