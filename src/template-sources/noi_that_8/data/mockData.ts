import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat8ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  rating: number;
  sectionKey: "ban-ghe" | "tu-quan-ao";
  categoryName: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
  image: string;
}

export interface NoiThat8PromoCard {
  id: string;
  eyebrow: string;
  title: string;
  priceFrom?: string;
  discountBadge?: string;
  ctaText?: string;
  image: string;
}

export interface NoiThat8LifestyleBanner {
  id: string;
  eyebrow: string;
  title: string;
  ctaText: string;
  badgeTop: string;
  badgeBottom: string;
  theme: "light" | "dark";
  image: string;
}

export interface NoiThat8TemplateData extends ClonedTemplateBaseData {
  heroPriceFrom: string;
  heroDiscountBadge: string;
  serviceGuarantees: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: "truck" | "lock" | "headphones" | "wallet";
  }>;
  topThreePromos: NoiThat8PromoCard[];
  midTwoPromos: NoiThat8PromoCard[];
  products: NoiThat8ProductItem[];
  lifestyleBanners: NoiThat8LifestyleBanner[];
  galleryImages: string[];
}

export const noiThat8DefaultData: NoiThat8TemplateData = {
  business: {
    name: "Bloxic",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 558 668"],
    email: ["info@themona.global", "cskh@bloxic.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:30 - 21:00",
    rating: 4.9,
    reviewCount: 412,
    experienceYears: "11+",
    aboutTitle: "Nội Thất Phong Cách Tối Giản & Hiện Đại",
    aboutText: [
      "Bloxic chuyên thiết kế và sản xuất các dòng nội thất phong cách tối giản Bắc Âu (Minimalist & Scandinavian), giúp tối ưu diện tích và nâng tầm thẩm mỹ cho căn hộ hiện đại.",
      "Từng chiếc ghế armchair, bàn trà gỗ sồi hay hệ tủ lưu trữ đều được chế tác tỉ mỉ từ nguồn gỗ tự nhiên đạt chuẩn FSC cùng vải nỉ nhập khẩu cao cấp."
    ]
  },
  hero: {
    eyebrow: "Mona Furniture",
    title: "Nội thất phong cách tối giản",
    subtitle:
      "Gia tăng hiệu suất làm việc với các thiết kế nội thất tinh tế, đơn giản mà đầy đủ tiện nghi, giúp không gian luôn gọn gàng và thanh lịch.",
    ctaText: "Mua Ngay",
    ctaLink: "#ban-ghe",
    secondaryCtaText: "Khám Phá Bộ Sưu Tập",
    secondaryCtaLink: "#tu-quan-ao",
    backgroundImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  heroPriceFrom: "500k",
  heroDiscountBadge: "30%",
  serviceGuarantees: [
    {
      id: "sg-1",
      title: "Miễn Phí Vận Chuyển",
      subtitle: "Miễn phí vận chuyển cho đơn hàng trên 500k",
      icon: "truck"
    },
    {
      id: "sg-2",
      title: "Thanh Toán An Toàn",
      subtitle: "Thanh toán bảo mật an toàn 100%",
      icon: "lock"
    },
    {
      id: "sg-3",
      title: "Hỗ Trợ 24/7",
      subtitle: "Dịch vụ hỗ trợ chuyên nghiệp 24/7",
      icon: "headphones"
    },
    {
      id: "sg-4",
      title: "Cam Kết Hoàn Tiền",
      subtitle: "Đảm bảo hoàn tiền nếu không hài lòng",
      icon: "wallet"
    }
  ],
  topThreePromos: [
    {
      id: "tp-1",
      eyebrow: "Giảm 30%",
      title: "ĐÈN BÀN SANG TRỌNG",
      priceFrom: "300k",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-2",
      eyebrow: "Ưu Đãi 20%",
      title: "NỘI THẤT PHÒNG NGỦ",
      priceFrom: "250k",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-3",
      eyebrow: "Giảm Giá 40%",
      title: "GHẾ ĂN CAO CẤP",
      priceFrom: "460k",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80"
    }
  ],
  midTwoPromos: [
    {
      id: "mp-1",
      eyebrow: "Giảm giá 30%",
      title: "Gắn Kết Mọi Khoảnh Khắc",
      discountBadge: "40%",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "mp-2",
      eyebrow: "Ưu đãi đến 40%",
      title: "Không Gian Kết Nối Cảm Xúc",
      discountBadge: "40%",
      ctaText: "Mua Ngay",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=80"
    }
  ],
  products: [
    // Section 1: Bàn Ghế Hiện Đại (8 items)
    {
      id: "bx-1",
      title: "Ghế Armchair Gỗ Sồi Đệm Nỉ Xám Sanford",
      price: "390,000₫",
      oldPrice: "490,000₫",
      discountBadge: "-20%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Rộng 68cm x Sâu 72cm x Cao 78cm",
      material: "Khung gỗ Sồi tự nhiên, đệm mút D40 bọc nỉ cao cấp",
      warranty: "24 tháng chính hãng",
      description:
        "Thiết kế tay vịn gỗ sồi bo tròn tinh tế kết hợp đệm nỉ xám êm ái, mang đậm phong cách Mid-Century Modern cho phòng khách.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-2",
      title: "Ghế Thư Giãn Bọc Vải Bắc Âu Ellery",
      price: "390,000₫",
      oldPrice: "490,000₫",
      discountBadge: "-20%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Rộng 70cm x Sâu 74cm x Cao 80cm",
      material: "Gỗ Tần Bì nhập khẩu kết hợp vải bố dệt thoáng khí",
      warranty: "24 tháng chính hãng",
      description:
        "Độ nghiêng tựa lưng chuẩn công thái học giúp nâng đỡ cột sống tối đa khi đọc sách, thưởng trà hoặc làm việc.",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-3",
      title: "Ghế Bành Đơn Tựa Lưng Cao Phong Cách Canada",
      price: "390,000₫",
      oldPrice: "490,000₫",
      discountBadge: "-20%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Rộng 64cm x Sâu 68cm x Cao 82cm",
      material: "Chân gỗ tự nhiên thanh thoát, nệm bọc vải Linen xanh nhạt",
      warranty: "24 tháng chính hãng",
      description:
        "Kiểu dáng không tay vịn gọn gàng, dễ dàng bài trí tại góc phòng ngủ, bàn trang điểm hoặc phòng khách căn hộ studio.",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-4",
      title: "Đôn Tròn Bọc Nhung Xanh Ngọc Lori Cao Cấp",
      price: "390,000₫",
      oldPrice: "490,000₫",
      discountBadge: "-20%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Đường kính 45cm x Cao 42cm",
      material: "Khung gỗ thông sấy khô, bọc nhung tuyết rút cúc cổ điển",
      warranty: "18 tháng chính hãng",
      description:
        "Đôn tròn rút múi sang trọng, vừa làm ghế ngồi phụ phòng khách vừa làm đôn gác chân thư giãn hoặc ghế bàn phấn.",
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-5",
      title: "Tủ Đầu Giường 3 Ngăn Kéo Gỗ Sồi Tự Nhiên",
      price: "780,000₫",
      oldPrice: "890,000₫",
      discountBadge: "-12%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Rộng 48cm x Sâu 40cm x Cao 62cm",
      material: "100% Gỗ Sồi Nga tự nhiên, ray trượt giảm chấn êm ái",
      warranty: "36 tháng chính hãng",
      description:
        "Tủ tab đầu giường 3 ngăn kéo tiện lợi giúp lưu trữ sách, phụ kiện cá nhân và đặt đèn ngủ trang trí gọn gàng.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-6",
      title: "Ghế Ăn Gỗ Tần Bì Bọc Nệm Sawyer Cao Cấp",
      price: "250,000₫",
      oldPrice: "280,000₫",
      discountBadge: "-11%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Rộng 46cm x Sâu 50cm x Cao 81cm",
      material: "Gỗ Tần Bì nguyên khối, mặt ngồi và tựa lưng bọc nỉ",
      warranty: "24 tháng chính hãng",
      description:
        "Thiết kế chữ A vững chãi với tựa lưng bọc nệm êm ái, phù hợp cho bàn ăn gia đình, quán cafe và nhà hàng hiện đại.",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-7",
      title: "Ghế Ăn Gỗ Sồi Tự Nhiên Nan Dọc WF MG-01",
      price: "170,000₫",
      oldPrice: "180,000₫",
      discountBadge: "-6%",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Rộng 44cm x Sâu 47cm x Cao 84cm",
      material: "Gỗ Sồi Bắc Mỹ xử lý chống cong vênh mối mọt",
      warranty: "24 tháng chính hãng",
      description:
        "Tựa lưng nan dọc thoáng mát mang vẻ đẹp mộc mạc vượt thời gian, dễ dàng kết hợp cùng mọi mẫu bàn ăn gỗ tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-8",
      title: "Bàn Trà Tròn Gỗ Sồi Bắc Âu 3 Chân LB RO",
      price: "1,105,000₫",
      rating: 5,
      sectionKey: "ban-ghe",
      categoryName: "Bàn Ghế Hiện Đại",
      dimensions: "Đường kính 80cm x Cao 45cm",
      material: "Mặt bàn MDF phủ Veneer Sồi chống nước, chân gỗ tiện tròn",
      warranty: "24 tháng chính hãng",
      description:
        "Bàn trà tròn Bắc Âu tối giản giúp mở rộng không gian tiếp khách, an toàn cho gia đình có trẻ nhỏ nhờ cạnh bàn bo mịn.",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=80"
    },

    // Section 2: Tủ Quần Áo & Nội Thất Lưu Trữ (8 items)
    {
      id: "bx-9",
      title: "Bộ Bàn Ăn Tròn Gỗ Sồi 6 Ghế Astor Cao Cấp",
      price: "2,400,000₫",
      oldPrice: "2,500,000₫",
      discountBadge: "-4%",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Nội Thất Phòng Ăn & Lưu Trữ",
      dimensions: "Đường kính bàn 130cm x Cao 75cm + 6 ghế đồng bộ",
      material: "Gỗ Sồi tự nhiên sơn PU giữ nguyên vân gỗ ấm áp",
      warranty: "36 tháng chính hãng",
      description:
        "Bộ bàn ăn tròn 6 ghế mang lại không khí quây quần ấm cúng cho phòng bếp gia đình Việt.",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-10",
      title: "Kệ Sách Ziczac Gỗ Óc Chó 5 Tầng Bella",
      price: "1,450,000₫",
      oldPrice: "1,500,000₫",
      discountBadge: "-3%",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Tủ Kệ Lưu Trữ",
      dimensions: "Rộng 90cm x Sâu 30cm x Cao 175cm",
      material: "Gỗ MDF lõi xanh chống ẩm phủ Melamine vân gỗ Óc Chó",
      warranty: "24 tháng chính hãng",
      description:
        "Thiết kế ô kệ bất đối xứng độc đáo vừa làm kệ sách vừa làm vách ngăn trang trí tinh tế cho phòng khách và phòng làm việc.",
      image:
        "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-11",
      title: "Tủ Lưu Trữ 3 Ngăn Kéo Gỗ Sồi Tự Nhiên",
      price: "780,000₫",
      oldPrice: "890,000₫",
      discountBadge: "-12%",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Tủ Quần Áo & Lưu Trữ",
      dimensions: "Rộng 60cm x Sâu 42cm x Cao 75cm",
      material: "Gỗ Sồi Nga tự nhiên 100%, tay nắm âm tối giản",
      warranty: "36 tháng chính hãng",
      description:
        "Tủ ngăn kéo đa năng lưu trữ quần áo gấp, khăn trải giường hoặc hồ sơ cá nhân gọn gàng, chống ẩm mốc hiệu quả.",
      image:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-12",
      title: "Ghế Sofa Đơn Bọc Vải Bố Xám Đậm Bắc Âu",
      price: "180,000₫",
      oldPrice: "200,000₫",
      discountBadge: "-10%",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Nội Thất Phòng Khách",
      dimensions: "Rộng 78cm x Sâu 80cm x Cao 82cm",
      material: "Khung gỗ thông nhập khẩu, nệm lò xo túi độc lập",
      warranty: "24 tháng chính hãng",
      description:
        "Sofa đơn form vuông vức hiện đại, đệm ngồi dày dặn đàn hồi cao không xẹp lún sau nhiều năm sử dụng.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-13",
      title: "Bàn Trà Mặt Kính Cường Lực Chân Đen Nghệ Thuật",
      price: "250,000₫",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Bàn Trà Hiện Đại",
      dimensions: "Đường kính 75cm x Cao 42cm",
      material: "Kính cường lực dày 10mm kết hợp chân composite sơn tĩnh điện",
      warranty: "24 tháng chính hãng",
      description:
        "Tạo điểm nhấn điêu khắc đương đại cho không gian phòng khách sang trọng.",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-14",
      title: "Ghế Armchair Gỗ Tự Nhiên Đệm Xanh Sylva",
      price: "290,000₫",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Ghế Thư Giãn",
      dimensions: "Rộng 66cm x Sâu 72cm x Cao 76cm",
      material: "Gỗ Tần Bì tự nhiên, vỏ đệm tháo rời giặt máy tiện lợi",
      warranty: "24 tháng chính hãng",
      description:
        "Sự giao thoa hoàn hảo giữa nét ấm áp của gỗ tự nhiên và sắc xanh pastel dịu mắt.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-15",
      title: "Ghế Thư Giãn Bọc Nỉ Cao Cấp Alexander",
      price: "1,500,000₫",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Ghế Armchair Cao Cấp",
      dimensions: "Rộng 82cm x Sâu 84cm x Cao 78cm",
      material: "Bọc nỉ nhung Hàn Quốc, chân gỗ sồi sơn đen",
      warranty: "36 tháng chính hãng",
      description:
        "Thiết kế tựa lưng bo cong ôm trọn cơ thể, mang lại trải nghiệm thư giãn chuẩn khách sạn 5 sao ngay tại nhà.",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "bx-16",
      title: "Bàn Phụ Vuông Gỗ Sồi Tự Nhiên Đa Năng",
      price: "250,000₫",
      rating: 5,
      sectionKey: "tu-quan-ao",
      categoryName: "Bàn Phụ & Đôn Gỗ",
      dimensions: "Rộng 45cm x Sâu 45cm x Cao 50cm",
      material: "100% Gỗ Sồi tự nhiên ghép mộng truyền thống",
      warranty: "36 tháng chính hãng",
      description:
        "Kiểu dáng vuông vức nhỏ gọn, thích hợp đặt cạnh sofa làm bàn đặt đèn, sách báo hoặc chậu cây trang trí.",
      image:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "deel." },
    { id: "cl-2", name: "dropcam" },
    { id: "cl-3", name: "Uber" },
    { id: "cl-4", name: "ORACLE" },
    { id: "cl-5", name: "AMD" },
    { id: "cl-6", name: "DOORDASH" }
  ],
  lifestyleBanners: [
    {
      id: "lb-1",
      eyebrow: "TẠO NÊN KHÔNG GIAN SỐNG ẤM CÚNG",
      title: "Tận hưởng khoảnh khắc sum vầy bên tổ ấm thanh lịch",
      ctaText: "Mua Ngay",
      badgeTop: "SALE",
      badgeBottom: "30% OFF",
      theme: "light",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "lb-2",
      eyebrow: "KHUYẾN MÃI 25% GIẢM GIÁ",
      title: "Cùng Bloxic làm đẹp không gian sống của bạn.",
      ctaText: "Mua Ngay",
      badgeTop: "SALE",
      badgeBottom: "25% OFF",
      theme: "dark",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
    }
  ],
  news: [
    {
      id: "nw-1",
      title:
        "Bí quyết bố trí góc làm việc tại gia tối giản, truyền cảm hứng sáng tạo",
      date: "24/09/2026",
      category: "PHÒNG KHÁCH",
      excerpt:
        "Cách kết hợp bàn làm việc gỗ sồi cùng ghế công thái học và ánh sáng tự nhiên giúp tăng hiệu suất tập trung.",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title:
        "Xu hướng phối màu trung tính cho phòng ngủ phong cách Bắc Âu 2026",
      date: "24/09/2026",
      category: "PHÒNG NGỦ",
      excerpt:
        "Sử dụng bảng màu kem, be và gỗ tự nhiên mang lại cảm giác thư thái, dễ chịu sau ngày dài làm việc.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title:
        "5 mẫu bàn ghế ăn nhỏ gọn tối ưu diện tích cho căn hộ chung cư hiện đại",
      date: "18/09/2026",
      category: "PHÒNG BẾP",
      excerpt:
        "Giải pháp lựa chọn bàn ăn thông minh vừa tiết kiệm diện tích vừa giữ trọn nét sang trọng cho gian bếp.",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title:
        "Nghệ thuật chọn sofa và thảm trải sàn tạo điểm nhấn cho phòng khách",
      date: "18/09/2026",
      category: "KHÔNG GIAN SỐNG",
      excerpt:
        "Nguyên tắc phối hợp tỷ lệ kích thước sofa chữ I cùng bàn trà tròn giúp phòng khách rộng thoáng gấp đôi.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80"
  ]
};

export default noiThat8DefaultData;
