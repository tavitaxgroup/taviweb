import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VaniSmileProductItem {
  id: string;
  name: string;
  category: string;
  tab: "ban-chay" | "gia-tot" | "noi-bat";
  price: string;
  originalPrice?: string;
  badge?: string;
  rating: number;
  image: string;
  summary: string;
  featured?: boolean;
}

export interface VaniSmilePromoBanner {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface VaniSmileFlashSale {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  image: string;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface VaniSmileTestimonial {
  id: string;
  name: string;
  source: string;
  avatar: string;
  quote: string;
  serviceUsed: string;
}

export interface VaniSmileServicePerk {
  id: string;
  title: string;
  subtitle: string;
  icon: "truck" | "refresh" | "shield" | "headset";
}

export interface VaniSmileNewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface VaniSmileBrandPartner {
  id: string;
  name: string;
  subtitle: string;
  year: string;
}

export interface NhaKhoa5Data extends Omit<ClonedTemplateBaseData, "business" | "hero" | "services"> {
  business?: any;
  hero?: any;
  services?: Array<Record<string, any>>;
  topBarLoginLabel: string;
  brandScriptTitle: string;
  brandTagline: string;
  heroDiscountSubtitle: string;
  heroMainTitle: string;
  heroSubheading: string;
  promoStripBanners: VaniSmilePromoBanner[];
  productTabs: { id: "ban-chay" | "gia-tot" | "noi-bat"; label: string }[];
  heroFeaturedProduct: VaniSmileProductItem;
  catalogProducts: VaniSmileProductItem[];
  flashSale: VaniSmileFlashSale;
  featuredProducts: VaniSmileProductItem[];
  customerReviews: VaniSmileTestimonial[];
  servicePerks: VaniSmileServicePerk[];
  blogArticles: VaniSmileNewsItem[];
  brandPartners: VaniSmileBrandPartner[];
  instagramGallery: string[];
}

export const mockData: NhaKhoa5Data = {
  companyName: "Nha Khoa Thẩm Mỹ VaniSmile",
  tagline: "Tỏa sáng nụ cười chuẩn mực hoàng gia & chăm sóc răng miệng chuyên sâu",
  phone: "0126 922 0162",
  email: "demonhunter@gmail.com",
  address: "Số 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
  heroTitle: "VANISMILE DENTAL",
  heroSubtitle:
    "Trải nghiệm công nghệ thiết kế nụ cười kỹ thuật số DSD, mặt dán sứ Veneer Emax siêu mỏng và bộ sản phẩm chăm sóc răng sứ chuẩn nha khoa quốc tế.",
  heroCta: "Đặt lịch ngay",
  heroImage:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  aboutTitle: "Viện Nha Khoa Thẩm Mỹ & Chăm Sóc Nụ Cười Hoàng Gia VaniSmile",
  aboutText:
    "VaniSmile kết hợp nghệ thuật kiến tạo đường cười chuẩn tỷ lệ vàng cùng hệ sinh thái sản phẩm chăm sóc răng miệng cao cấp từ Thụy Sĩ và Đức, mang lại vẻ đẹp rạng ngời, tự nhiên và bền vững.",
  aboutImage:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  navigation: [
    { label: "TRANG CHỦ", href: "#trang-chu" },
    { label: "GIỚI THIỆU", href: "#gioi-thieu" },
    { label: "CỬA HÀNG & DỊCH VỤ", href: "#cua-hang" },
    { label: "TIN TỨC", href: "#tin-tuc" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ],
  stats: [
    { value: "18.500+", label: "Nụ cười kiến tạo thành công" },
    { value: "100%", label: "Vật liệu sứ Emax & Lava chính hãng" },
    { value: "15 Năm", label: "Bảo hành thẻ từ quốc tế" },
    { value: "4.9/5", label: "Đánh giá hài lòng từ khách hàng" },
  ],
  services: [
    {
      title: "Mặt Dán Sứ Veneer Emax",
      description:
        "Siêu mỏng 0.2mm bảo tồn tối đa răng thật, màu sắc trong bóng tự nhiên như ngọc trai.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tẩy Trắng Răng Laser Beyond II",
      description:
        "Hoạt hóa tinh thể làm trắng dịu nhẹ chỉ trong 45 phút, tích hợp khoáng chất bù men răng chống ê buốt.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Chỉnh Nha Trong Suốt VaniAlign",
      description:
        "Khay niềng vô hình cá nhân hóa bằng AI 3D giúp dịch chuyển răng chuẩn xác, thẩm mỹ tuyệt đối.",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    },
  ],
  highlights: [
    {
      title: "Thiết Kế Đường Cười DSD 3D",
      description: "Xem trước kết quả nụ cười tương lai hài hòa với từng đường nét khuôn mặt trước khi thực hiện.",
    },
    {
      title: "Vô Trùng Chuẩn Châu Âu Class B",
      description: "Mỗi khách hàng sử dụng một bộ tay khoan và dụng cụ riêng biệt được hấp sấy khép kín.",
    },
    {
      title: "Chăm Sóc Răng Sứ Chuyên Biệt",
      description: "Độc quyền dòng serum khoáng chất và tinh chất dưỡng nướu giúp duy trì tuổi thọ răng sứ trọn đời.",
    },
  ],
  testimonials: [
    {
      name: "Chị Minh Anh",
      role: "Khách hàng từ Facebook",
      quote:
        "Mình làm combo 16 răng Veneer Emax và dùng bộ dưỡng nướu tại VaniSmile. Màu răng trắng trong tự nhiên, ai gặp cũng khen nụ cười sang và rạng rỡ hơn hẳn.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Anh Hoàng Quân",
      role: "Doanh nhân / Facebook",
      quote:
        "Liệu trình tẩy trắng Laser Beyond II cực kỳ êm ái, không hề ê buốt như mình từng lo lắng. Không gian phòng khám sang trọng như khách sạn 5 sao.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Chị Bảo Trân",
      role: "Người mẫu ảnh / Instagram",
      quote:
        "Bộ kit chăm sóc răng sứ và máy tăm nước VaniSmile dùng thích mê. Hơi thở thơm mát suốt cả ngày dài đi quay chụp, dịch vụ chăm sóc khách hàng 10 điểm.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
  ],
  gallery: [
    {
      title: "Phòng điều trị thẩm mỹ VIP VaniSmile",
      category: "Không gian",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Thiết kế đường cười kỹ thuật số DSD",
      category: "Công nghệ",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bộ sản phẩm chăm sóc răng sứ Thụy Sĩ",
      category: "Sản phẩm",
      image:
        "https://images.unsplash.com/photo-1559591937-abc36800a447?auto=format&fit=crop&w=800&q=80",
    },
  ],
  ctaTitle: "Đặt Lịch Tư Vấn Thiết Kế Nụ Cười Cùng Chuyên Gia VaniSmile",
  ctaDescription:
    "Nhận ngay ưu đãi giảm từ 20% – 50% cho các gói tẩy trắng răng Laser, dán sứ Veneer và bộ sản phẩm chăm sóc nụ cười chính hãng.",

  topBarLoginLabel: "Đăng Nhập / Đăng Ký",
  brandScriptTitle: "VaniSmile",
  brandTagline: "Aesthetic Dental & Smile Care",
  heroDiscountSubtitle: "Giảm giá 20% – 50%",
  heroMainTitle: "VANISMILE DENTAL",
  heroSubheading: "Kiến tạo nụ cười hoàn mỹ & sản phẩm chăm sóc răng sứ cao cấp",

  promoStripBanners: [
    {
      title: "Thẩm Mỹ Sứ Veneer Hoàng Gia",
      subtitle: "Tuyệt tác sứ siêu mỏng 0.2mm chuẩn Thụy Sĩ",
      tag: "SMILE DESIGN",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Nụ Cười Trắng Sáng Chuẩn Sao",
      subtitle: "Công nghệ Laser Beyond II bật 4 tông sau 45 phút",
      tag: "LASER WHITENING",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Hệ Sinh Thái Chăm Sóc Nụ Cười",
      subtitle: "Serum khoáng chất & tinh chất thảo dược bảo vệ men răng",
      tag: "LUXURY ORAL CARE",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
  ],

  productTabs: [
    { id: "ban-chay", label: "BÁN CHẠY" },
    { id: "gia-tot", label: "GIÁ TỐT" },
    { id: "noi-bat", label: "NỔI BẬT" },
  ],

  heroFeaturedProduct: {
    id: "vs-hero-feature",
    name: "Liệu trình Tẩy trắng răng Laser Beyond II & Khoáng tái tạo men",
    category: "Thẩm mỹ nụ cười",
    tab: "ban-chay",
    price: "1,190,000 ₫",
    originalPrice: "1,950,000 ₫",
    badge: "HOT",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
    summary:
      "Trọn gói cạo vôi siêu âm, đánh bóng muối khoáng và chiếu đèn Laser Beyond II kết hợp ủ gel khoáng chất chống ê buốt.",
    featured: true,
  },

  catalogProducts: [
    {
      id: "vs-cat-1",
      name: "Bộ Kit Chăm Sóc Răng Sứ Chuyên Sâu VaniCare",
      category: "Chăm sóc răng sứ",
      tab: "ban-chay",
      price: "550,000 ₫",
      originalPrice: "690,000 ₫",
      badge: "-20%",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
      summary: "Bàn chải lông tơ siêu mảnh kết hợp gel đánh bóng mặt sứ không gây trầy xước.",
    },
    {
      id: "vs-cat-2",
      name: "Gói Mặt Dán Sứ Veneer Emax Press Thụy Sĩ (1 Răng)",
      category: "Răng sứ thẩm mỹ",
      tab: "ban-chay",
      price: "5,500,000 ₫",
      originalPrice: "7,200,000 ₫",
      badge: "VIP",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
      summary: "Sứ thủy tinh Emax Ivoclar Vivadent chính hãng, thấu quang tự nhiên như răng thật.",
    },
    {
      id: "vs-cat-3",
      name: "Máy Tăm Nước Sóng Siêu Âm VaniSonic Pro",
      category: "Thiết bị nha khoa",
      tab: "ban-chay",
      price: "1,500,000 ₫",
      originalPrice: "1,890,000 ₫",
      badge: "MỚI",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      summary: "5 chế độ tia nước vi bọt làm sạch sâu kẽ răng sứ, trụ Implant và mắc cài chỉnh nha.",
    },
    {
      id: "vs-cat-4",
      name: "Serum Khoáng Chất Bù Men Răng & Giảm Ê Buốt",
      category: "Tinh chất dưỡng răng",
      tab: "ban-chay",
      price: "190,000 ₫",
      originalPrice: "260,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
      summary: "Bổ sung Hydroxyapatite nano lấp đầy ống ngà hở, làm dịu cảm giác ê buốt tức thì.",
    },
    {
      id: "vs-cat-5",
      name: "Tinh Chất Súc Miệng Thảo Dược Hoàng Gia VaniHerb",
      category: "Chăm sóc nướu",
      tab: "ban-chay",
      price: "550,000 ₫",
      originalPrice: "650,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=700&q=80",
      summary: "Chiết xuất cúc La Mã, trà trắng và tinh dầu bạc hà giúp săn chắc viền nướu, khử mùi 12 giờ.",
    },
    {
      id: "vs-cat-6",
      name: "Bộ Bút Ngậm Trắng Răng Tại Nhà VaniGlow LED",
      category: "Làm trắng tại nhà",
      tab: "ban-chay",
      price: "770,000 ₫",
      originalPrice: "990,000 ₫",
      badge: "HOT",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
      summary: "Khuôn ngậm ánh sáng xanh lạnh kết hợp 3 ống gel duy trì độ trắng sáng sau khi tẩy tại phòng khám.",
    },
    {
      id: "vs-cat-7",
      name: "Gói Cạo Vôi Răng Siêu Âm & Đánh Bóng Khoáng",
      category: "Nha khoa tổng quát",
      tab: "gia-tot",
      price: "250,000 ₫",
      originalPrice: "450,000 ₫",
      badge: "-44%",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80",
      summary: "Loại bỏ mảng bám lâu năm bằng đầu sóng siêu âm êm ái, không gây chảy máu chân răng.",
    },
    {
      id: "vs-cat-8",
      name: "Chỉ Nha Khoa Tơ Tằm Phủ Sáp Bạc Hà VaniSilk",
      category: "Chăm sóc hằng ngày",
      tab: "gia-tot",
      price: "120,000 ₫",
      originalPrice: "160,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=80",
      summary: "Sợi tơ mảnh trượt nhẹ qua kẽ răng sứ khít sát mà không làm tổn thương nhú lợi.",
    },
    {
      id: "vs-cat-9",
      name: "Kem Đánh Răng Than Hoạt Tính & Ngọc Trai Thụy Sĩ",
      category: "Chăm sóc hằng ngày",
      tab: "gia-tot",
      price: "290,000 ₫",
      originalPrice: "360,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
      summary: "Ngăn ngừa ố vàng do trà, cà phê và rượu vang mà không bào mòn lớp men răng tự nhiên.",
    },
    {
      id: "vs-cat-10",
      name: "Gói Thiết Kế Đường Cười Kỹ Thuật Số DSD 3D",
      category: "Thẩm mỹ nụ cười",
      tab: "noi-bat",
      price: "1,200,000 ₫",
      originalPrice: "2,500,000 ₫",
      badge: "DSD 3D",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
      summary: "Quét dấu răng iTero 5D và dựng mô phỏng 3D đường cười cá nhân hóa cùng chuyên gia.",
    },
    {
      id: "vs-cat-11",
      name: "Răng Toàn Sứ Lava Plus 3M ESPE Hoa Kỳ",
      category: "Răng sứ thẩm mỹ",
      tab: "noi-bat",
      price: "6,800,000 ₫",
      originalPrice: "8,500,000 ₫",
      badge: "15 NĂM",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
      summary: "Độ chịu lực gấp 7 lần răng thật, kháng bám màu tuyệt đối và bảo hành chính hãng 15 năm.",
    },
  ],

  flashSale: {
    title: "GIẢM GIÁ 50%",
    subtitle: "Độc quyền tuần lễ tôn vinh nụ cười VaniSmile",
    description:
      "Ưu đãi đặc biệt dành riêng cho 30 khách hàng đăng ký sớm gói Tẩy trắng răng Laser Beyond II kết hợp Bộ Kit Chăm Sóc Răng Sứ Hoàng Gia Thụy Sĩ. Khôi phục vẻ trắng trong rạng rỡ và hơi thở thơm mát chuẩn nha khoa quốc tế.",
    ctaLabel: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    countdown: {
      days: 2,
      hours: 1,
      minutes: 57,
      seconds: 3,
    },
  },

  featuredProducts: [
    {
      id: "vs-feat-1",
      name: "Bộ Dưỡng Nướu & Làm Hồng Viền Lợi VaniRose",
      category: "Thẩm mỹ nướu",
      tab: "noi-bat",
      price: "550,000 ₫",
      originalPrice: "720,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=700&q=80",
      summary: "Tinh chất vitamin E và hoa hồng Damask nuôi dưỡng mô nướu hồng hào, ôm khít cổ răng sứ.",
    },
    {
      id: "vs-feat-2",
      name: "Bàn Chải Điện Sóng Âm VaniBrush Luxury Purple",
      category: "Thiết bị nha khoa",
      tab: "noi-bat",
      price: "1,500,000 ₫",
      originalPrice: "1,950,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1559591937-abc36800a447?auto=format&fit=crop&w=700&q=80",
      summary: "Nhịp rung 42.000 lần/phút với cảm biến áp lực thông minh bảo vệ men răng và mặt dán sứ.",
    },
    {
      id: "vs-feat-3",
      name: "Máng Duy Trì Trắng Răng Cá Nhân Hóa VaniTray",
      category: "Làm trắng tại nhà",
      tab: "noi-bat",
      price: "770,000 ₫",
      originalPrice: "950,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
      summary: "Thiết kế khít sát theo dấu răng từng khách hàng kèm 2 ống gel Opalescence chính hãng Mỹ.",
    },
    {
      id: "vs-feat-4",
      name: "Xịt Thơm Miệng Tinh Chất Bạc Hà Tuyết & Keo Ong",
      category: "Chăm sóc hằng ngày",
      tab: "noi-bat",
      price: "190,000 ₫",
      originalPrice: "250,000 ₫",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
      summary: "Kháng khuẩn khoang miệng tức thì, mang lại cảm giác the mát sảng khoái trước mọi cuộc hẹn.",
    },
  ],

  customerReviews: [
    {
      id: "rev-1",
      name: "Chị Minh Anh",
      source: "Facebook",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote:
        "Mình làm combo 16 mặt dán sứ Veneer Emax tại VaniSmile. Bác sĩ tư vấn dáng răng thỏ tự nhiên cực kỳ hợp khuôn mặt, làm xong không hề đau hay ê buốt chút nào.",
      serviceUsed: "Dán sứ Veneer Emax",
    },
    {
      id: "rev-2",
      name: "Anh Hoàng Quân",
      source: "Facebook",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote:
        "Liệu trình tẩy trắng răng Laser Beyond II thật sự xứng đáng. Chỉ sau 45 phút nằm thư giãn nghe nhạc, răng mình đã bật lên 3 tông trắng sáng mà vẫn rất tự nhiên.",
      serviceUsed: "Tẩy trắng Laser Beyond II",
    },
    {
      id: "rev-3",
      name: "Chị Bảo Trân",
      source: "Instagram",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      quote:
        "Bộ sản phẩm chăm sóc răng sứ và bàn chải sóng âm VaniBrush của phòng khám dùng êm cực kỳ. Nhân viên luôn nhắn tin nhắc lịch tái khám định kỳ rất chu đáo.",
      serviceUsed: "Bộ Kit VaniCare Luxury",
    },
  ],

  servicePerks: [
    {
      id: "perk-1",
      title: "GIAO HÀNG MIỄN PHÍ",
      subtitle: "Cho đơn hàng & gói khám từ 300K",
      icon: "truck",
    },
    {
      id: "perk-2",
      title: "ĐỔI TRẢ & BẢO HÀNH",
      subtitle: "Trong 3 ngày đầu tiên",
      icon: "refresh",
    },
    {
      id: "perk-3",
      title: "HÀNG CHÍNH HÃNG",
      subtitle: "Cam kết chất lượng chuẩn Y khoa",
      icon: "shield",
    },
    {
      id: "perk-4",
      title: "HỖ TRỢ 24/7",
      subtitle: "Hỗ trợ mọi thắc mắc từ Bác sĩ",
      icon: "headset",
    },
  ],

  blogArticles: [
    {
      id: "blog-1",
      title: "BÍ QUYẾT CHĂM SÓC MẶT DÁN SỨ VENEER BỀN ĐẸP TRỌN ĐỜI",
      excerpt:
        "Sau khi bọc răng sứ hoặc dán Veneer Emax, việc lựa chọn bàn chải sóng âm lông mềm, chỉ nha khoa tơ tằm và tái khám cạo vôi định kỳ 6 tháng/lần giúp duy trì độ bóng trong suốt.",
      date: "18 Tháng 10, 2026",
      category: "Cẩm nang răng sứ",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
      readTime: "4 phút đọc",
    },
    {
      id: "blog-2",
      title: "TẨY TRẮNG RĂNG LASER BEYOND II CÓ GÂY Ê BUỐT MEN RĂNG KHÔNG?",
      excerpt:
        "Công nghệ bước sóng lạnh Laser Beyond II thế hệ mới kết hợp lớp gel khoáng chất nano Hydroxyapatite giúp bẻ gãy chuỗi sắc tố ố vàng mà hoàn toàn bảo vệ mô ngà răng nhạy cảm.",
      date: "22 Tháng 10, 2026",
      category: "Kiến thức nha khoa",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80",
      readTime: "5 phút đọc",
    },
  ],

  brandPartners: [
    { id: "bp-1", name: "STRAUMANN", subtitle: "SWISS IMPLANT", year: "EST 1954" },
    { id: "bp-2", name: "EMAX PRESS", subtitle: "IVOCLAR VIVADENT", year: "SWITZERLAND" },
    { id: "bp-3", name: "INVISALIGN", subtitle: "CLEAR ALIGNER", year: "USA TECH" },
    { id: "bp-4", name: "LAVA PLUS", subtitle: "3M ESPE DENTAL", year: "GERMANY" },
    { id: "bp-5", name: "NOBEL BIOCARE", subtitle: "PREMIUM DENTAL", year: "ZURICH" },
    { id: "bp-6", name: "BEYOND II", subtitle: "LASER WHITENING", year: "CALIFORNIA" },
  ],

  instagramGallery: [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1559591937-abc36800a447?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  ],
};
