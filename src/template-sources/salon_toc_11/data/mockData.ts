import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MiniBeProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: "orange" | "green";
  image: string;
  summary: string;
}

export interface MiniBeReviewCard {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  photo: string;
}

export interface SalonToc11Data extends ClonedTemplateBaseData {
  topBarLinks: string[];
  brandPrimary: string;
  brandAccent: string;
  brandSubtitle: string;
  weeklyDeal: {
    sectionTitle: string;
    name: string;
    description: string;
    ratingCount: number;
    price: string;
    categoryLabel: string;
    frontImage: string;
    backImage: string;
  };
  relatedSectionTitle: string;
  relatedProducts: MiniBeProductItem[];
  bentoCollage: {
    leftNumber: string;
    leftTitle: string;
    leftImage: string;
    topMidTitle: string;
    topMidImage: string;
    topRightTitle: string;
    topRightImage: string;
    bottomRightTitle: string;
    bottomRightImage: string;
  };
  catalogProducts: MiniBeProductItem[];
  missionBanner: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    image: string;
  };
  reviewCards: MiniBeReviewCard[];
  newsletterTitle: string;
  newsletterSubtitle: string;
}

export const mockData = {
  business: {
    name: "MiniBe Salon & Hair Care",
    tagline: "Viện Tạo Mẫu Tóc & Sản Phẩm Chăm Sóc Tóc Hữu Cơ Cao Cấp",
    phone: ["0908 555 689", "028 6680 1122"],
    email: ["hello@minibesalon.vn", "cskh@minibesalon.vn"],
    address: "Số 142 Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 640,
    workingHours: "08:30 - 20:30 (Mỗi ngày)",
    aboutTitle: "MiniBe Salon — Định Hình Phong Cách & Nuôi Dưỡng Mái Tóc Nguyên Bản",
    aboutText: [
      "MiniBe Salon theo đuổi triết lý làm đẹp tối giản, tinh tế và bền vững. Mọi phác đồ cắt thiết kế, uốn sóng lơi và nhuộm hữu cơ đều được cá nhân hóa theo cấu trúc khuôn mặt và chất tóc riêng biệt.",
      "Chúng tôi tuyển chọn độc quyền các dòng tinh dầu thực vật, dầu gội thuần chay và phụ kiện chăm sóc tóc thân thiện với da đầu nhạy cảm.",
    ],
  },
  hero: {
    eyebrow: "MINIBE HAIR STUDIO",
    title: "Bộ Sưu Tập Tóc Mới",
    subtitle: "Khám phá xu hướng tạo mẫu tóc & chăm sóc tóc chuẩn Salon 2026",
    ctaText: "KHÁM PHÁ NGAY",
    ctaLink: "#weekly-deal",
    backgroundImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "CỬA HÀNG", href: "#cua-hang" },
    { label: "ĐÁNH GIÁ", href: "#danh-gia" },
    { label: "VỀ CHÚNG TÔI", href: "#ve-chung-toi" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ],
  stats: [
    { value: "16+", label: "Bộ sưu tập tóc theo mùa" },
    { value: "100%", label: "Tinh chất hữu cơ thuần chay" },
    { value: "12.000+", label: "Khách hàng thân thiết" },
    { value: "4.9/5", label: "Điểm hài lòng dịch vụ" },
  ],

  topBarLinks: ["BLOG LÀM ĐẸP", "LIÊN HỆ TƯ VẤN"],
  brandPrimary: "MINIBE",
  brandAccent: ".Salon / Hair Studio",
  brandSubtitle: "Premium Hair & Style Design",

  weeklyDeal: {
    sectionTitle: "Ưu Đãi Tuần Này",
    name: "Combo Uốn Sóng Lơi Hàn Quốc & Tinh Chất Phục Hồi Keratin",
    description:
      "Liệu trình uốn sóng nước mềm mại kết hợp ủ tinh chất Keratin hữu cơ phân tử siêu nhỏ giúp sóng tóc đàn hồi tự nhiên, giữ nếp suốt 6 tháng mà không khô xơ.",
    ratingCount: 18,
    price: "450.000₫",
    categoryLabel: "CHĂM SÓC & TẠO KIỂU NỮ",
    frontImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    backImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },

  relatedSectionTitle: "Sản phẩm tương tự",
  relatedProducts: [
    {
      id: "rel-1",
      name: "Dầu Gội Thảo Mộc Bưởi Non & Hương Thảo",
      category: "Dưỡng tóc hữu cơ",
      price: "215.000₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Kích thích mọc tóc con dày khỏe và làm sạch dịu nhẹ da đầu.",
    },
    {
      id: "rel-2",
      name: "Tinh Dầu Dưỡng Bóng Tóc Hoa Trà Nhật Bản",
      category: "Tinh chất dưỡng",
      price: "240.000₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      summary: "Khóa ẩm tức thì cho ngọn tóc uốn nhuộm, hương hoa thanh khiết.",
    },
    {
      id: "rel-3",
      name: "Ủ Tóc Phục Hồi Collagen Tơ Tằm MiniBe",
      category: "Phục hồi chuyên sâu",
      price: "310.000₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      summary: "Tái tạo liên kết disulfide bị đứt gãy sau khi tẩy hoặc uốn nhiệt.",
    },
    {
      id: "rel-4",
      name: "Gói Nhuộm Thuần Chay Nâu Hạt Dẻ Ánh Khói",
      category: "Dịch vụ Salon",
      price: "490.000₫",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      summary: "Thuốc nhuộm chiết xuất thực vật không Amoniac, lên màu chuẩn mịn.",
    },
    {
      id: "rel-5",
      name: "Xịt Dưỡng Bảo Vệ Nhiệt & Giữ Nếp Sóng Lơi",
      category: "Tạo kiểu tại nhà",
      price: "230.000₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      summary: "Bảo vệ mái tóc trước nhiệt độ máy sấy lên tới 220°C.",
    },
  ],

  bentoCollage: {
    leftNumber: "16",
    leftTitle: "Phụ Kiện & Tạo Kiểu",
    leftImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    topMidTitle: "Tóc Nữ",
    topMidImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    topRightTitle: "Tóc Nam",
    topRightImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bottomRightTitle: "Dưỡng Tóc Chuyên Sâu",
    bottomRightImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },

  catalogProducts: [
    {
      id: "cat-1",
      name: "Lược Điện Tạo Phồng Chân Tóc Ion Âm",
      category: "Dụng cụ tạo kiểu",
      price: "320.000₫",
      originalPrice: "390.000₫",
      badge: "MỚI",
      badgeColor: "orange",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      summary: "Tạo phồng chân tóc chuẩn Hàn chỉ trong 3 phút mỗi sáng.",
    },
    {
      id: "cat-2",
      name: "Tinh Chất Bơ Hạt Mỡ Phục Hồi Ngọn Tóc Chẻ",
      category: "Tinh dầu dưỡng",
      price: "170.000₫",
      badge: "MỚI",
      badgeColor: "orange",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Nuôi dưỡng phần đuôi tóc khô xơ trở nên mềm mượt tức thì.",
    },
    {
      id: "cat-3",
      name: "Bộ Gội Xả Keratin Thủy Phân MiniBe Pro",
      category: "Chăm sóc tại nhà",
      price: "345.000₫",
      badge: "MỚI",
      badgeColor: "orange",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      summary: "Duy trì độ bền màu nhuộm và độ đàn hồi cho tóc uốn.",
    },
    {
      id: "cat-4",
      name: "Mặt Nạ Ủ Tóc Bùn Khoáng & Tảo Biển",
      category: "Detox da đầu",
      price: "220.000₫",
      badge: "MỚI",
      badgeColor: "orange",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      summary: "Thanh lọc bã nhờn và hóa chất tồn dư trên da đầu.",
    },
    {
      id: "cat-5",
      name: "Sáp Vuốt Tóc Nam Matte Clay Tự Nhiên",
      category: "Tạo kiểu Nam",
      price: "190.000₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      summary: "Giữ nếp linh hoạt suốt 12 giờ, không gây bết dính.",
    },
    {
      id: "cat-6",
      name: "Gói Cắt Thiết Kế Layer & Gội Đầu Dưỡng Sinh",
      category: "Dịch vụ Salon",
      price: "230.000₫",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
      summary: "Cắt tỉa layer ôm gọn gương mặt kèm massage cổ vai gáy.",
    },
    {
      id: "cat-7",
      name: "Combo Uốn Sóng Lơi & Hấp Collagen Tươi",
      category: "Dịch vụ Salon",
      price: "500.000₫",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
      summary: "Sóng tóc mềm mại chuẩn phong cách Hàn Quốc.",
    },
    {
      id: "cat-8",
      name: "Huyết Thanh Kích Thích Mọc Tóc Biotin+",
      category: "Đặc trị rụng tóc",
      price: "255.000₫",
      originalPrice: "320.000₫",
      badge: "-21%",
      badgeColor: "green",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      summary: "Giảm rụng tóc rõ rệt sau 3 tuần sử dụng đều đặn.",
    },
    {
      id: "cat-9",
      name: "Túi Đựng Mỹ Phẩm & Dụng Cụ Tóc Du Lịch",
      category: "Phụ kiện",
      price: "420.000₫",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
      summary: "Chất liệu chống thấm cao cấp, ngăn chứa thông minh.",
    },
    {
      id: "cat-10",
      name: "Lược Gỗ Đàn Hương Massage Kinh Lạc Đầu",
      category: "Phụ kiện dưỡng sinh",
      price: "140.000₫",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
      summary: "Chống tĩnh điện, kích thích tuần hoàn máu dưới da đầu.",
    },
    {
      id: "cat-11",
      name: "Dầu Xả Khóa Màu Tóc Nhuộm Tím Khói",
      category: "Chăm sóc tóc tẩy",
      price: "295.000₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
      summary: "Khử ánh vàng hiệu quả, giữ sắc khói bền đẹp lâu phai.",
    },
    {
      id: "cat-12",
      name: "Kẹp Càng Cua Bản Lớn Màu Hổ Phách Pháp",
      category: "Phụ kiện tóc",
      price: "95.000₫",
      originalPrice: "120.000₫",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      summary: "Nhựa Acetate cao cấp bóng đẹp, lò xo chắc chắn không đau đầu.",
    },
    {
      id: "cat-13",
      name: "Kem Tạo Kiểu Xoăn Sóng Nước Mềm Mại",
      category: "Tạo kiểu Nữ",
      price: "310.000₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      summary: "Định hình lọn xoăn tự nhiên mà không gây cứng tóc.",
    },
    {
      id: "cat-14",
      name: "Tẩy Tế Bào Chết Da Đầu Muối Biển & Bạc Hà",
      category: "Detox da đầu",
      price: "215.000₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      summary: "Làm sạch gàu ống và mang lại cảm giác bồng bềnh tức thì.",
    },
    {
      id: "cat-15",
      name: "Khăn Quấn Khô Tóc Sợi Microfiber Siêu Thấm",
      category: "Phụ kiện",
      price: "125.000₫",
      originalPrice: "170.000₫",
      badge: "-26%",
      badgeColor: "green",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      summary: "Thấm nước nhanh gấp 5 lần, hạn chế ma sát gây hư tổn biểu bì tóc.",
    },
  ],

  missionBanner: {
    title: "Định hình phong cách mái tóc của bạn",
    subtitle:
      "Mỗi mái tóc là một tuyên ngôn cá tính riêng biệt — MiniBe Salon nâng niu vẻ đẹp tự nhiên bằng kỹ thuật cắt chuẩn xác và dưỡng chất thuần khiết.",
    ctaLabel: "Sứ mệnh của chúng tôi",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=80",
  },

  reviewCards: [
    {
      id: "rev-1",
      name: "Chị Minh Thư",
      location: "Quận 3, TP.HCM",
      rating: 5,
      quote:
        "Mình cắt layer và uốn sóng lơi tại MiniBe. Tóc vào nếp cực kỳ tự nhiên, chỉ cần sấy khô nhẹ ở nhà là đã bồng bềnh như vừa bước ra từ salon.",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "rev-2",
      name: "Chị Ngọc Lan",
      location: "Quận 1, TP.HCM",
      rating: 5,
      quote:
        "Thuốc nhuộm hữu cơ ở đây hoàn toàn không có mùi hắc, da đầu mình nhạy cảm mà không hề châm chích. Màu nâu trà lên chuẩn và bóng mượt.",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "rev-3",
      name: "Chị Khánh Huyền",
      location: "Bình Thạnh, TP.HCM",
      rating: 5,
      quote:
        "Bộ dầu gội bưởi non và tinh dầu hoa trà của MiniBe dùng thích mê. Tóc con mọc lên rất nhiều và hương thơm thảo mộc thư giãn vô cùng.",
      photo:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "rev-4",
      name: "Chị Phương Anh",
      location: "Quận 7, TP.HCM",
      rating: 5,
      quote:
        "Không gian salon tối giản, ấm cúng và riêng tư. Stylist lắng nghe kỹ mong muốn của khách trước khi tư vấn dáng tóc hợp khuôn mặt.",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "rev-5",
      name: "Chị Bảo Ngọc",
      location: "Thủ Đức, TP.HCM",
      rating: 5,
      quote:
        "Phục hồi Keratin xong mái tóc tẩy khô xơ của mình như được hồi sinh. Sợi tóc đanh khỏe, mềm như lụa, chắc chắn sẽ gắn bó lâu dài.",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    },
  ],

  newsletterTitle: "Đăng Ký Nhận Tin",
  newsletterSubtitle:
    "Cập nhật sớm nhất bộ sưu tập kiểu tóc theo mùa và ưu đãi độc quyền từ MiniBe Salon",
};
