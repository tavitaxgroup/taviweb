import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat4CategoryTile {
  id: string;
  name: string;
  subtitle: string;
  filterKey: string;
  image: string;
  layout: "wide" | "small" | "tall";
}

export interface NoiThat4ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  popularBadge?: boolean;
  tabCategory: "ban-chay" | "khuyen-mai" | "pho-bien";
  categoryName: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
  image: string;
}

export interface NoiThat4FeatureHighlight {
  id: string;
  title: string;
  subtitle: string;
  icon: "map" | "shield" | "calendar" | "coin";
}

export interface NoiThat4RecentOrderToast {
  customerName: string;
  productName: string;
  timeAgo: string;
  verifiedText: string;
  image: string;
}

export interface NoiThat4TemplateData extends ClonedTemplateBaseData {
  topBarPromo: string;
  midPromoBanner: string;
  popularCategoriesSubtitle: string;
  popularCategories: NoiThat4CategoryTile[];
  productTabs: Array<{ id: string; label: string }>;
  products: NoiThat4ProductItem[];
  aboutVideoTitle: string;
  aboutVideoCover: string;
  aboutFeatures: NoiThat4FeatureHighlight[];
  newsSubtitle: string;
  recentOrderToast: NoiThat4RecentOrderToast;
}

export const noiThat4DefaultData: NoiThat4TemplateData = {
  business: {
    name: "mona decor",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 686 888"],
    email: ["info@themona.global", "cskh@monadecor.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:30 - 21:00",
    rating: 4.9,
    reviewCount: 328,
    experienceYears: "12+",
    aboutTitle: "Giới thiệu",
    aboutText: [
      "Sứ mệnh của mona decor là mang đến bộ sưu tập nội thất và phụ kiện trang trí nhà cửa tinh tế, kết hợp hài hòa giữa phong cách Bắc Âu tối giản và chất liệu gỗ tự nhiên tuyển chọn bền bỉ theo năm tháng.",
      "Được ưa chuộng bởi hàng ngàn gia đình Việt từ năm 2012, mỗi sản phẩm tại showroom đều trải qua quy trình kiểm định chất lượng khắt khe nhằm kiến tạo không gian sống thanh lịch, ấm cúng và tiện nghi."
    ]
  },
  hero: {
    eyebrow: "BỘ SƯU TẬP NỘI THẤT BẮC ÂU 2026",
    title: "Nội Thất Nhà Đẹp Tinh Tế & Hiện Đại",
    subtitle:
      "Khám phá dòng sofa vải bố cao cấp, bàn trà gỗ sồi tự nhiên và phụ kiện trang trí mang hơi thở Scandinavian thanh lịch cho tổ ấm của bạn.",
    ctaText: "KHÁM PHÁ SẢN PHẨM",
    ctaLink: "#san-pham",
    secondaryCtaText: "XEM SHOWROOM",
    secondaryCtaLink: "#gioi-thieu",
    backgroundImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  topBarPromo: "Đăng ký tài khoản nhận ngay ưu đãi 20% đơn hàng đầu tiên",
  midPromoBanner:
    "GIẢM GIÁ LÊN 20% CHO ĐƠN HÀNG ĐẦU TIÊN KHI MUA TẠI MONA DECOR",
  popularCategoriesSubtitle:
    "Tuyển chọn những dòng nội thất và phụ kiện trang trí được yêu thích nhất",
  popularCategories: [
    {
      id: "cat-sofas",
      name: "Sofa Phòng Khách",
      subtitle: "36 mẫu thiết kế mới",
      filterKey: "tat-ca",
      layout: "wide",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "cat-lighting",
      name: "Đèn Trang Trí",
      subtitle: "24 mẫu đèn thả & bàn",
      filterKey: "ban-chay",
      layout: "small",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-clocks",
      name: "Đồng Hồ & Decor",
      subtitle: "18 mẫu tối giản",
      filterKey: "khuyen-mai",
      layout: "small",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cat-chair",
      name: "Ghế Armchair",
      subtitle: "42 mẫu ghế thư giãn",
      filterKey: "pho-bien",
      layout: "tall",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85"
    }
  ],
  productTabs: [
    { id: "tat-ca", label: "Tất cả" },
    { id: "ban-chay", label: "Bán chạy" },
    { id: "khuyen-mai", label: "Khuyến mãi" },
    { id: "pho-bien", label: "Phổ biến" }
  ],
  products: [
    {
      id: "prd-1",
      title: "Kệ tivi phòng khách KTV96",
      price: "4,759,000₫",
      tabCategory: "ban-chay",
      categoryName: "Kệ Tivi Hiện Đại",
      dimensions: "Dài 180cm x Rộng 40cm x Cao 125cm",
      material: "Gỗ MDF lõi xanh chống ẩm phủ Melamine vân sồi",
      warranty: "24 tháng chính hãng",
      description:
        "Kệ tivi KTV96 tích hợp kệ trang trí đứng đa năng, thiết kế thông minh giúp tối ưu diện tích phòng khách căn hộ và nhà phố hiện đại.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-2",
      title: "Kệ tivi gỗ tự nhiên KTV91",
      price: "5,050,000₫",
      tabCategory: "ban-chay",
      categoryName: "Kệ Tivi Gỗ Tự Nhiên",
      dimensions: "Dài 190cm x Rộng 42cm x Cao 130cm",
      material: "Gỗ sồi Nga tự nhiên kết hợp đợt kệ trang trí",
      warranty: "36 tháng chính hãng",
      description:
        "Tông màu gỗ sồi sáng ấm áp kết hợp hệ ngăn kéo lưu trữ rộng rãi, phù hợp với không gian nội thất phong cách Bắc Âu.",
      image:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-3",
      title: "Kệ tivi cao cấp KTV88",
      price: "4,550,000₫",
      tabCategory: "pho-bien",
      categoryName: "Kệ Tivi Tối Giản",
      dimensions: "Dài 160cm - 220cm (thay đổi kích thước linh hoạt)",
      material: "Gỗ công nghiệp An Cường phủ Acrylic đen mờ & trắng",
      warranty: "24 tháng chính hãng",
      description:
        "Thiết kế mô-đun rút trượt thông minh cho phép điều chỉnh chiều dài linh hoạt theo diện tích thực tế của phòng khách.",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-4",
      title: "Kệ Tivi Gỗ Xoan Đào",
      price: "4,999,000₫",
      oldPrice: "5,624,000₫",
      discountBadge: "-11%",
      popularBadge: true,
      tabCategory: "khuyen-mai",
      categoryName: "Nội Thất Gỗ Tự Nhiên",
      dimensions: "Dài 180cm x Rộng 45cm x Cao 65cm",
      material: "100% Gỗ Xoan Đào tự nhiên đã qua tẩm sấy chống mối mọt",
      warranty: "60 tháng bảo hành gỗ",
      description:
        "Kệ tivi gỗ Xoan Đào chạm khắc tinh tế với vân gỗ đỏ trầm sang trọng, kết cấu mộng gỗ chắc chắn bền bỉ hàng chục năm.",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-5",
      title: "Kệ Tivi Gỗ Đinh Hương",
      price: "7,800,000₫",
      oldPrice: "8,952,000₫",
      discountBadge: "-13%",
      tabCategory: "khuyen-mai",
      categoryName: "Nội Thất Gỗ Quý",
      dimensions: "Dài 200cm x Rộng 45cm x Cao 68cm",
      material: "Gỗ Đinh Hương nguyên tấm chọn vân tự nhiên",
      warranty: "60 tháng bảo hành gỗ",
      description:
        "Sản phẩm cao cấp chế tác từ gỗ Đinh Hương tự nhiên với hương thơm dịu nhẹ, bề mặt sơn PU 5 lớp giữ trọn nét đẹp nguyên bản.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-6",
      title: "Kệ Tivi Gỗ Cẩm",
      price: "7,568,000₫",
      tabCategory: "pho-bien",
      categoryName: "Nội Thất Gỗ Tự Nhiên",
      dimensions: "Dài 195cm x Rộng 44cm x Cao 62cm",
      material: "Gỗ Cẩm tự nhiên nhập khẩu, phụ kiện bản lề giảm chấn",
      warranty: "60 tháng bảo hành gỗ",
      description:
        "Vân gỗ Cẩm sắc nét độc bản kết hợp ngăn tủ cánh chớp thoáng khí cho các thiết bị âm thanh và đầu thu kỹ thuật số.",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-7",
      title: "Bộ bàn ghế ăn gỗ Sồi 6 ghế mẫu mới",
      price: "7,200,000₫",
      oldPrice: "7,568,000₫",
      discountBadge: "-5%",
      popularBadge: true,
      tabCategory: "khuyen-mai",
      categoryName: "Bàn Ghế Phòng Ăn",
      dimensions: "Bàn 160x80x75cm + 06 ghế lưng cong công thái học",
      material: "Gỗ Sồi Bắc Mỹ nhập khẩu, mặt bàn phủ kính cường lực",
      warranty: "36 tháng chính hãng",
      description:
        "Bộ bàn ăn 6 ghế gỗ sồi thiết kế thanh thoát, tựa lưng ôm sát cột sống mang lại cảm giác thoải mái cho mọi bữa cơm gia đình.",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "prd-8",
      title: "Bộ bàn ghế ăn tròn xoay gỗ Xoan Đào",
      price: "8,672,000₫",
      tabCategory: "pho-bien",
      categoryName: "Bàn Ghế Phòng Ăn",
      dimensions: "Đường kính 135cm x Cao 76cm + Mâm xoay kính 70cm",
      material: "Gỗ Xoan Đào tự nhiên 100%, gồm 6 - 8 ghế đồng bộ",
      warranty: "60 tháng chính hãng",
      description:
        "Bàn ăn tròn mâm xoay tượng trưng cho sự sum vầy viên mãn, thích hợp cho không gian phòng bếp rộng rãi và ấm cúng.",
      image:
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80"
    }
  ],
  aboutVideoTitle: "Khám Phá Không Gian Showroom Nội Thất Nhà Đẹp",
  aboutVideoCover:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  aboutFeatures: [
    {
      id: "feat-1",
      title: "Vận chuyển toàn quốc",
      subtitle: "Giao lắp tận nơi chuyên nghiệp",
      icon: "map"
    },
    {
      id: "feat-2",
      title: "Đảm bảo chất lượng",
      subtitle: "Bảo hành từ 2 - 5 năm",
      icon: "shield"
    },
    {
      id: "feat-3",
      title: "Kinh nghiệm",
      subtitle: "Hơn 12 năm trong ngành",
      icon: "calendar"
    },
    {
      id: "feat-4",
      title: "Giá cả hợp lý",
      subtitle: "Trực tiếp từ xưởng sản xuất",
      icon: "coin"
    }
  ],
  newsSubtitle: "Cập nhật xu hướng bài trí không gian sống mới nhất",
  news: [
    {
      id: "news-1",
      title: "Phong cách nội thất cổ điển thanh lịch cho phòng ngủ ấm cúng",
      date: "13 Tháng Hai",
      category: "TẠP CHÍ NỘI THẤT",
      excerpt:
        "Sự kết hợp tinh tế giữa giường bọc nệm nỉ xám trầm, ánh sáng tự nhiên và thảm dệt họa tiết giúp phòng ngủ trở thành nơi nghỉ ngơi lý tưởng.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Nghệ thuật bài trí phòng khách sang trọng chuẩn nghỉ dưỡng",
      date: "13 Tháng Hai",
      category: "PHONG CÁCH SỐNG",
      excerpt:
        "Bí quyết phối hợp sofa chữ L tông kem sáng cùng bàn trà mây đan và cây xanh nhiệt đới tạo nên không gian mở thoáng đãng.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "Bí quyết chọn bàn làm việc tối giản giúp khơi nguồn sáng tạo",
      date: "13 Tháng Hai",
      category: "KHÔNG GIAN LÀM VIỆC",
      excerpt:
        "Một góc làm việc tại gia gọn gàng với bàn gỗ công thái học và ánh sáng tiêu chuẩn giúp nâng cao hiệu suất tập trung mỗi ngày.",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "Lady & Daddy" },
    { id: "cl-2", name: "SCANDINAVIA CLUB" },
    { id: "cl-3", name: "MI CASA ES TU CASA" },
    { id: "cl-4", name: "OAK BARK TIMBER" },
    { id: "cl-5", name: "ARCHIHOME STUDIO" },
    { id: "cl-6", name: "THE WOODEN SHOP" }
  ],
  recentOrderToast: {
    customerName: "Xuân Trung đã mua",
    productName: "Nệm Lò Xo LOTUS O.Season Plus",
    timeAgo: "1 tiếng trước",
    verifiedText: "Đã xác minh",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=200&q=80"
  }
};

export default noiThat4DefaultData;
