import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TakimexProductCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface TakimexExportOffer {
  id: string;
  title: string;
  specLabel: string;
  origin: string;
  image: string;
  description: string;
}

export interface B2bProduct18Data extends ClonedTemplateBaseData {
  productCategories: TakimexProductCategory[];
  aboutFactorySection: {
    brandLabel: string;
    heading: string;
    paragraphs: string[];
    visionLabel: string;
    visionText: string;
    missionLabel: string;
    missionText: string;
    ctaText: string;
    factoryImage: string;
  };
  dualFeatureBanners: {
    leftImage: string;
    leftTitle: string;
    rightImage: string;
    rightTitle: string;
  };
  weeklyPromoSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TakimexExportOffer[];
  };
  exportCertifications: Array<{
    id: string;
    name: string;
    subtitle: string;
  }>;
  contactBanner: {
    title: string;
    placeholder: string;
    backgroundImage: string;
  };
  factories: Array<{
    id: string;
    label: string;
    address: string;
  }>;
}

export const b2bProduct18DefaultData: B2bProduct18Data = {
  business: {
    name: "TAKIMEX FOOD",
    phone: ["0313 728 397", "028 3811 6868"],
    email: ["export@takimex.vn", "info@takimex.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    rating: 4.9,
    reviewCount: 860,
    aboutTitle: "Nhà Máy Chế Biến & Xuất Khẩu Thực Phẩm Nông Thủy Sản Takimex",
    aboutText: [
      "Nông sản và thực phẩm chế biến là một trong những ngành thế mạnh mũi nhọn của Việt Nam, được các tập đoàn bán lẻ và nhà nhập khẩu toàn cầu đánh giá cao về hương vị tự nhiên và chất lượng vượt trội.",
    ],
  },
  hero: {
    eyebrow: "NHÀ MÁY CHẾ BIẾN & XUẤT KHẨU NÔNG THỦY SẢN",
    title: "TAKIMEX FOOD",
    subtitle: "CHỌN CHÚNG TÔI – CHỌN CHẤT LƯỢNG",
    ctaText: "LIÊN HỆ NGAY",
    ctaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=85",
  },
  productCategories: [
    {
      id: "tcat-1",
      title: "SẢN PHẨM TỪ DỪA",
      subtitle: "Cơm dừa sấy, Nước cốt dừa & Thạch dừa",
      image:
        "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "tcat-2",
      title: "THỨC ĂN THÚ CƯNG",
      subtitle: "Xương gặm tự nhiên & Thực phẩm sấy khô",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "tcat-3",
      title: "SẢN PHẨM RONG BIỂN",
      subtitle: "Rong nho tách nước & Rong biển sấy",
      image:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "tcat-4",
      title: "THỦY HẢI SẢN XUẤT KHẨU",
      subtitle: "Hải sản cấp đông IQF đạt chuẩn HACCP",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80",
    },
  ],
  aboutFactorySection: {
    brandLabel: "TAKIMEX FOOD",
    heading: "CHỌN CHÚNG TÔI – CHỌN CHẤT LƯỢNG",
    paragraphs: [
      "Nông sản Việt Nam là một trong những nguồn nguyên liệu phong phú bậc nhất Đông Nam Á. Với khát vọng đưa nông thủy sản Việt Nam tiếp cận trực tiếp các chuỗi siêu thị và nhà nhập khẩu trên toàn thế giới, tập thể kỹ sư thực phẩm giàu nhiệt huyết và gần 10 năm kinh nghiệm xuất nhập khẩu đã sáng lập nên hệ thống nhà máy TAKIMEX FOOD.",
    ],
    visionLabel: "Tầm nhìn:",
    visionText:
      "Takimex phấn đấu trở thành nhà cung ứng và xuất khẩu nông sản – thực phẩm chế biến uy tín hàng đầu Việt Nam về chất lượng tiêu chuẩn quốc tế, tiến độ giao hàng chuẩn xác và dịch vụ chuyên nghiệp.",
    missionLabel: "Sứ mệnh:",
    missionText:
      "Kiểm soát chất lượng nghiêm ngặt từ vùng trồng nguyên liệu đến dây chuyền đóng gói BRC/HACCP/ISO 22000 cho mọi lô hàng xuất khẩu.",
    ctaText: "Xem thêm",
    factoryImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
  },
  dualFeatureBanners: {
    leftImage:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=80",
    leftTitle: "Nông Sản & Trái Cây Tươi Nhiệt Đới Xuất Khẩu",
    rightImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    rightTitle: "Dinh Dưỡng & Phụ Kiện Hữu Cơ Cho Thú Cưng",
  },
  weeklyPromoSection: {
    eyebrow: "SĂN BÁO GIÁ SỈ TỐT NHẤT TRONG TUẦN",
    title: "ƯU ĐÃI LÔ HÀNG XUẤT KHẨU",
    subtitle: "Từ vùng nguyên liệu nông trại Việt Nam đến thẳng kho cảng của bạn.",
    items: [
      {
        id: "coco-1",
        title: "Thạch Dừa Thô Cắt Hạt Lựu (Nata De Coco)",
        specLabel: "Quy cách: Túi PE 10kg / Thùng Carton",
        origin: "Vùng nguyên liệu: Bến Tre, Việt Nam",
        image:
          "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=600&q=80",
        description:
          "Thạch dừa lên men tự nhiên từ nước dừa tươi Bến Tre, độ giòn dai chuẩn quốc tế chuyên dùng cho ngành đồ uống và tráng miệng.",
      },
      {
        id: "coco-2",
        title: "Cơm Dừa Non Cấp Đông Nhanh IQF",
        specLabel: "Quy cách: Đóng gói hút chân không 1kg - 5kg",
        origin: "Vùng nguyên liệu: Tiền Giang & Bến Tre",
        image:
          "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80",
        description:
          "Cơm dừa non tuyển chọn thái sợi hoặc nguyên miếng, cấp đông sâu IQF giữ trọn hương vị béo ngậy và độ tươi tự nhiên.",
      },
      {
        id: "coco-3",
        title: "Cơm Dừa Sấy Khô (Desiccated Coconut Fine/Medium)",
        specLabel: "Quy cách: Bao Kraft 25kg / 50kg",
        origin: "Tiêu chuẩn: Halal, Kosher, ISO 22000",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        description:
          "Cơm dừa sấy khô hàm lượng béo cao (High Fat 63% min), màu trắng tự nhiên không chất bảo quản cho ngành bánh kẹo.",
      },
      {
        id: "coco-4",
        title: "Tinh Bột Dừa & Dầu Dừa Ép Lạnh Tinh Khiết",
        specLabel: "Quy cách: Phuy 200L / IBC Tank 1000L",
        origin: "Chứng nhận: USDA Organic & EU Organic",
        image:
          "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
        description:
          "Chiết xuất ép lạnh ly tâm giữ nguyên dưỡng chất Lauric Acid, phục vụ ngành thực phẩm chức năng và mỹ phẩm.",
      },
    ],
  },
  testimonials: [
    {
      id: "tk-rev-1",
      author: "Bà Geri Orndorff (Giám đốc Thu mua Tập đoàn Thực phẩm Đức)",
      role: "Duisburg, CHLB Đức",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      content:
        "Các lô hàng mai mực tự nhiên và nông sản sấy khô từ nhà máy Takimex có độ đồng đều cực kỳ cao, quy cách đóng gói chắc chắn, giữ nguyên độ tươi ngon khi cập cảng Hamburg.",
    },
    {
      id: "tk-rev-2",
      author: "Ông Kenji Takahashi (Trưởng bộ phận Nhập khẩu Nông sản)",
      role: "Osaka, Nhật Bản",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Chúng tôi đánh giá rất cao quy trình kiểm soát dư lượng và truy xuất nguồn gốc vùng trồng của Takimex. Các sản phẩm từ dừa và hạt sen luôn vượt qua kỳ kiểm định khắt khe tại Nhật Bản.",
    },
  ],
  exportCertifications: [
    { id: "cert-1", name: "SILVER FOIL", subtitle: "EXPORT QUALITY" },
    { id: "cert-2", name: "GLOBAL GAP", subtitle: "CERTIFIED FARM" },
    { id: "cert-3", name: "HACCP & ISO", subtitle: "FOOD SAFETY 22000" },
    { id: "cert-4", name: "ORGANIC BIO", subtitle: "NATURAL STANDARD" },
    { id: "cert-5", name: "BLUELINE", subtitle: "ORIGINAL BRAND" },
    { id: "cert-6", name: "HALAL & FDA", subtitle: "REGISTERED FACILITY" },
  ],
  news: [
    {
      id: "tk-news-1",
      title: "Hạt sen tươi Việt Nam và những giá trị dinh dưỡng kỳ diệu bên trong",
      date: "10 Tháng 8, 2026",
      category: "Nông sản xuất khẩu",
      excerpt:
        "Hạt sen Đồng Tháp, Huế giàu protein thực vật và khoáng chất an thần đang trở thành mặt hàng nông sản xuất khẩu chủ lực...",
      image:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "tk-news-2",
      title: "Hiệu quả tuyệt vời của hoa đậu biếc sấy khô trong ngành đồ uống tự nhiên",
      date: "10 Tháng 8, 2026",
      category: "Nguyên liệu thảo mộc",
      excerpt:
        "Hoa đậu biếc sở hữu sắc xanh tím tự nhiên giàu chất chống oxy hóa Anthocyanin được các thương hiệu trà châu Âu ưa chuộng...",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "tk-news-3",
      title: "Kẹo dẻo rong biển sấy khô – Món ăn vặt lành mạnh gây sốt thị trường",
      date: "10 Tháng 8, 2026",
      category: "Chế biến rong biển",
      excerpt:
        "Rong biển giàu i-ốt và chất xơ kết hợp công nghệ sấy lạnh giữ nguyên vi chất đang được các nhà phân phối săn đón...",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "tk-news-4",
      title: "Hành trình từ cây cỏ bàng tự nhiên đến ống hút sinh học xuất khẩu",
      date: "10 Tháng 8, 2026",
      category: "Sản phẩm xanh",
      excerpt:
        "Sự ra đời của ống hút cỏ bàng phân hủy hoàn toàn tự nhiên giúp các chuỗi nhà hàng quốc tế thay thế ống hút nhựa...",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    },
  ],
  contactBanner: {
    title: "LIÊN HỆ NHẬN BÁO GIÁ SỈ",
    placeholder: "Nhập email doanh nghiệp của bạn...",
    backgroundImage:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80",
  },
  factories: [
    {
      id: "f-1",
      label: "Nhà máy 1",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    },
    {
      id: "f-2",
      label: "Nhà máy 2",
      address: "Khu Công Nghiệp Giao Long, Châu Thành, Tỉnh Bến Tre",
    },
    {
      id: "f-3",
      label: "Nhà máy 3",
      address: "Khu Công Nghiệp Sóng Thần 2, TP. Dĩ An, Tỉnh Bình Dương",
    },
  ],
};
