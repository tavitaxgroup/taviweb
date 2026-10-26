import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface AusFoodCategoryIcon {
  id: string;
  label: string;
  image: string;
}

export interface AusFoodNewProduct {
  id: string;
  title: string;
  price: string;
  inStock: boolean;
  ctaLabel: string;
  origin: string;
  weight: string;
  image: string;
  description: string;
}

export interface B2bProduct19Data extends ClonedTemplateBaseData {
  categoryIcons: AusFoodCategoryIcon[];
  bentoShowcases: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  mainProductsHeading: string;
  newProductsSection: {
    heading: string;
    backgroundImage: string;
    products: AusFoodNewProduct[];
  };
  brandPledgeSection: {
    quote: string;
    certifications: Array<{
      id: string;
      title: string;
      subtitle: string;
      color: string;
    }>;
  };
  newsletterBanner: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    backgroundImage: string;
  };
  branches: Array<{
    id: string;
    name: string;
    address: string;
    phone: string;
  }>;
  footerProductLinks: string[];
}

export const b2bProduct19DefaultData: B2bProduct19Data = {
  business: {
    name: "AUSFOOD STORE",
    phone: ["0313 728 397", "0909 728 397"],
    email: ["info@ausfood.vn", "b2b@ausfood.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours:
      "7h30 - 19h00 tất cả các ngày trong tuần (kể cả ngày lễ)",
    facebookUrl: "fb.com/AusFoodStore",
    rating: 4.9,
    reviewCount: 1750,
    aboutTitle: "Công Ty Nhập Khẩu & Phân Phối Thực Phẩm Và Gia Vị AusFood",
    aboutText: [
      "AusFood cam kết phục vụ vì điều tốt đẹp hơn, hành động với sự chính trực cao nhất và mang nguồn thực phẩm nhập khẩu chuẩn quốc tế đến từng nhà hàng, khách sạn và gian bếp gia đình Việt.",
    ],
  },
  hero: {
    eyebrow: "NHẬP KHẨU CHÍNH NGẠCH ÚC • NA UY • NHẬT BẢN • HÀN QUỐC",
    title: "AUSFOOD",
    subtitle: "CHUYÊN THỰC PHẨM VÀ GIA VỊ NHẬP KHẨU",
    ctaText: "XEM THÊM",
    ctaLink: "#san-pham-moi",
    backgroundImage:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1800&q=85",
  },
  categoryIcons: [
    {
      id: "ci-1",
      label: "Thịt bò",
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "ci-2",
      label: "Thịt cừu",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "ci-3",
      label: "Cá hồi",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "ci-4",
      label: "Cá trích trứng",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "ci-5",
      label: "Đồ nguội",
      image:
        "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400&q=80",
    },
  ],
  bentoShowcases: [
    {
      id: "bs-1",
      title: "Thịt Bò Úc & Mỹ Thượng Hạng (Wagyu / Black Angus)",
      subtitle: "Cắt thái theo yêu cầu Steakhouse, BBQ & Horeca",
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "bs-2",
      title: "Cá Hồi Na Uy Tươi Nhập Khẩu Đường Hàng Không",
      subtitle: "Bảo quản lạnh chuẩn 0 - 4 độ C giữ trọn Omega-3",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "bs-3",
      title: "Thảo Mộc, Lá Hương Thảo & Gia Vị Âu Á Cao Cấp",
      subtitle: "Tăng hương vị chuẩn đầu bếp Michelin",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
    },
    {
      id: "bs-4",
      title: "Rượu Vang & Đồ Uống Nhập Khẩu Hầm Lạnh",
      subtitle: "Tuyển chọn từ Pháp, Ý, Chile và Nam Úc",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85",
    },
  ],
  mainProductsHeading: "SẢN PHẨM CHÍNH",
  newProductsSection: {
    heading: "SẢN PHẨM MỚI",
    backgroundImage:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1800&q=80",
    products: [
      {
        id: "af-1",
        title: "Rong vụn vị tôm, cá cơm 35g",
        price: "28,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Hàn Quốc",
        weight: "Gói 35g",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        description:
          "Rong biển vụn sấy giòn trộn tôm khô và cá cơm giàu canxi, ăn liền cùng cơm nóng hoặc làm cơm nắm Hàn Quốc.",
      },
      {
        id: "af-2",
        title: "Rong vụn hạnh nhân, óc chó 35g",
        price: "28,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Hàn Quốc",
        weight: "Gói 35g",
        image:
          "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80",
        description:
          "Sự kết hợp giữa rong biển hữu cơ cùng lát hạnh nhân và hạt óc chó bùi béo, bổ sung DHA cho bé và gia đình.",
      },
      {
        id: "af-3",
        title: "Sữa hạt Macca nguyên chất",
        price: "135,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Úc / Hàn Quốc",
        weight: "Hộp 1 Lít",
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
        description:
          "Sữa hạt Macca ép lạnh giàu chất béo tốt, ít đường, tốt cho sức khỏe tim mạch và người ăn thực dưỡng.",
      },
      {
        id: "af-4",
        title: "Sữa hạt óc chó đậu đen Hàn Quốc",
        price: "135,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Hàn Quốc",
        weight: "Lốc 16 hộp x 190ml",
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
        description:
          "Sữa hạt óc chó kết hợp đậu đen và hạnh nhân thơm ngậy chuẩn nội địa Hàn Quốc, giàu vitamin E và Omega-3.",
      },
      {
        id: "af-5",
        title: "Đậu hũ rau cá 500g",
        price: "108,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Singapore / Malaysia",
        weight: "Khay 500g",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description:
          "Đậu hũ cá kết hợp rau củ tươi mềm mịn, thơm ngọt tự nhiên, thích hợp thả lẩu, chiên giòn hoặc nấu súp.",
      },
      {
        id: "af-6",
        title: "Đậu hũ non cao cấp 300g",
        price: "15,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Nhật Bản",
        weight: "Hộp 300g",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        description:
          "Đậu hũ non làm từ 100% hạt đậu nành không biến đổi gen (Non-GMO), mềm mượt như lụa cho món canh rong biển và súp Miso.",
      },
      {
        id: "af-7",
        title: "Trứng cá đen Caviar 220g",
        price: "150,000 ₫",
        inStock: false,
        ctaLabel: "ĐỌC TIẾP",
        origin: "Nga / Bắc Âu",
        weight: "Hũ thủy tinh 220g",
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
        description:
          "Trứng cá đen nhập khẩu cao cấp dùng chế biến món khai vị Canapé, Sushi, Sashimi và Salad thượng hạng.",
      },
      {
        id: "af-8",
        title: "Trứng cá đỏ Ikura 220g",
        price: "150,000 ₫",
        inStock: true,
        ctaLabel: "THÊM VÀO GIỎ HÀNG",
        origin: "Nhật Bản / Nga",
        weight: "Hũ thủy tinh 220g",
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
        description:
          "Trứng cá hồi đỏ hạt to căng mọng, vị béo mặn dịu tự nhiên, giàu đạm và DHA cao cấp.",
      },
    ],
  },
  brandPledgeSection: {
    quote:
      "“AUSFOOD tuyên thệ sẽ phục vụ vì điều tốt đẹp hơn, hành động với sự chính trực cao nhất và chống lại những quyết định, thái độ tham vọng hạn hẹp của bản thân tôi, có hại cho doanh nghiệp và xã hội, cộng đồng dân cư nơi chính tôi đang sinh sống”",
    certifications: [
      {
        id: "c-1",
        title: "HOMESTEAD",
        subtitle: "AUSTRALIAN GROWN",
        color: "#1e40af",
      },
      {
        id: "c-2",
        title: "HALAL AUSTRALIA",
        subtitle: "ISLAMIC CERTIFIED",
        color: "#0284c7",
      },
      {
        id: "c-3",
        title: "St. Helens",
        subtitle: "TASMANIAN BEEF",
        color: "#1e3a8a",
      },
      {
        id: "c-4",
        title: "ORGANIC FARM",
        subtitle: "100% GRASS FED",
        color: "#18181b",
      },
      {
        id: "c-5",
        title: "THE MIDFIELD",
        subtitle: "GROUP AUSTRALIA",
        color: "#0369a1",
      },
    ],
  },
  newsletterBanner: {
    title: "ĐĂNG KÝ NGAY",
    subtitle: "NHẬN THÔNG TIN HỮU ÍCH CHO BỮA ĂN DINH DƯỠNG NHÀ BẠN",
    placeholder: "Email của bạn",
    buttonText: "ĐĂNG KÝ",
    backgroundImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1600&q=80",
  },
  branches: [
    {
      id: "br-1",
      name: "Cơ Sở 1",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "0313728397 - 0313728397",
    },
    {
      id: "br-2",
      name: "Cơ Sở 2",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "0313728397 - 0313728397",
    },
    {
      id: "br-3",
      name: "Cơ Sở 3",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "0313728397 - 0313728397",
    },
  ],
  footerProductLinks: [
    "Cá hồi",
    "Thịt bò",
    "Nguyên liệu lẩu",
    "Sốt & Gia vị",
    "Dầu ăn",
    "Đồ ăn kèm",
    "Đồ đông lạnh",
    "Đồ nguội – Đồ hộp",
    "Bơ – Sữa",
    "Ngũ cốc",
    "Rượu",
  ],
};
