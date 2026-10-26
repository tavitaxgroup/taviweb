import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa6Product {
  id: string;
  tab: "rang-su" | "implant" | "nieng-rang" | "tay-trang" | "cham-soc";
  section: "featured" | "intensive" | "homecare";
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  image: string;
  description: string;
}

export interface NhaKhoa6Data extends ClonedTemplateBaseData {
  heroPanels: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  promoTriplets: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  policies: Array<{
    id: string;
    icon: "plane" | "user-check" | "undo" | "lock";
    title: string;
    description: string;
  }>;
  storyBanners: Array<{
    id: string;
    brand: string;
    tagline: string;
    headline: string;
    image: string;
  }>;
  products: NhaKhoa6Product[];
}

export const nhaKhoa6DefaultData: NhaKhoa6Data = {
  business: {
    name: "Hachi Dental",
    phone: ["1900 636 648", "0909 636 648"],
    email: ["contact@hachidental.vn", "cskh@hachidental.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1420,
    aboutTitle: "VỀ HACHI DENTAL",
    aboutText: [
      "Hachi Dental là hệ thống nha khoa quốc tế tiên phong kết hợp công nghệ nha khoa kỹ thuật số Nhật Bản và liệu pháp chăm sóc nụ cười sinh học thảo dược lành tính."
    ],
  },
  hero: {
    eyebrow: "HACHI NATURE SMILE",
    title: "HỒI SINH BÍ QUYẾT NỤ CƯỜI TỰ NHIÊN CHUẨN NHẬT",
    subtitle:
      "Hệ thống nha khoa thẩm mỹ sinh học và sản phẩm chăm sóc răng miệng chiết xuất thảo mộc thiên nhiên an toàn cho cả gia đình.",
    ctaText: "ĐẶT LỊCH TƯ VẤN",
    ctaLink: "#san-pham-noi-bat",
    backgroundImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85",
  },
  heroPanels: [
    {
      id: "hp-1",
      title: "HERITAGE SMILE",
      subtitle: "Nha khoa sinh học thảo mộc",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "hp-2",
      title: "RELIVING CARE",
      subtitle: "Chăm sóc nướu nhạy cảm",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "hp-3",
      title: "CASCADE FRESH",
      subtitle: "Tẩy trắng răng khoáng chất",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "hp-4",
      title: "GOLDEN LAB",
      subtitle: "Chế tác răng sứ CAD/CAM",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
    },
  ],
  promoTriplets: [
    {
      id: "pt-1",
      title: "TINH CHẤT BẢO VỆ MEN RĂNG",
      subtitle: "Chiết xuất trà xanh Uji & khoáng biển",
      image:
        "https://images.unsplash.com/photo-1559591937-abc368016745?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "pt-2",
      title: "RĂNG SỨ NGỌC TRAI HACHI PEARL",
      subtitle: "Độ trong mờ tự nhiên bảo tồn răng thật",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "pt-3",
      title: "CHĂM SÓC NỤ CƯỜI PHÁI MẠNH",
      subtitle: "Khử mảng bám cà phê & trắng sáng chuyên sâu",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80",
    },
  ],
  policies: [
    {
      id: "pol-1",
      icon: "plane",
      title: "Chính sách bảo hành",
      description: "Bảo hành thẻ điện tử chính hãng trên toàn hệ thống Hachi",
    },
    {
      id: "pol-2",
      icon: "user-check",
      title: "Hỗ trợ đổi, trả & tái khám",
      description:
        "Miễn phí thăm khám định kỳ và tinh chỉnh khớp cắn trọn đời",
    },
    {
      id: "pol-3",
      icon: "undo",
      title: "Địa chỉ phòng khám",
      description:
        "Hệ thống phòng khám chuẩn Nhật và quầy Dược Nha khoa tại các trung tâm lớn trên toàn quốc",
    },
    {
      id: "pol-4",
      icon: "lock",
      title: "Bảo mật & Vô trùng",
      description:
        "Bảo mật hồ sơ bệnh án điện tử và quy trình vô trùng 1 chiều khép kín",
    },
  ],
  storyBanners: [
    {
      id: "sb-1",
      brand: "Hachi",
      tagline: "NATURE MAKES SMILE",
      headline: "Hồi Sinh Bí Quyết\nChăm Sóc Nụ Cười Truyền Thống",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "sb-2",
      brand: "Hachi",
      tagline: "BIO DENTAL CARE",
      headline: "Hồi Sinh Bí Quyết\nBảo Tồn Men Răng Sinh Học",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
    },
  ],
  products: [
    // Featured Row (5 items)
    {
      id: "nk6-f1",
      tab: "rang-su",
      section: "featured",
      name: "MẶT DÁN SỨ HACHI RELIVING...",
      price: "4,170,000₫",
      oldPrice: "4,480,000₫",
      discountBadge: "-6%",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80",
      description:
        "Mặt dán sứ siêu mỏng 0.3mm bảo tồn tối đa mô răng thật, màu trắng trong tự nhiên.",
    },
    {
      id: "nk6-f2",
      tab: "rang-su",
      section: "featured",
      name: "RĂNG SỨ SINH HỌC HERITAGE...",
      price: "5,170,000₫",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
      description:
        "Phục hình sứ toàn phần tương thích sinh học cao với mô nướu nhạy cảm.",
    },
    {
      id: "nk6-f3",
      tab: "implant",
      section: "featured",
      name: "TRỤ IMPLANT HACHI GOLDEN...",
      price: "14,170,000₫",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80",
      description:
        "Trụ Titanium tinh khiết tích hợp xương nhanh chỉ sau 4 - 6 tuần cấy ghép.",
    },
    {
      id: "nk6-f4",
      tab: "tay-trang",
      section: "featured",
      name: "TẨY TRẮNG RĂNG CASCADE...",
      price: "1,700,000₫",
      oldPrice: "3,145,000₫",
      discountBadge: "-47%",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=80",
      description:
        "Hoạt hóa ánh sáng lạnh kết hợp gel khoáng thảo mộc không gây ê buốt.",
    },
    {
      id: "nk6-f5",
      tab: "cham-soc",
      section: "featured",
      name: "LIỆU TRÌNH TRỊ VIÊM NƯỚU...",
      price: "900,000₫",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=80",
      description:
        "Làm sạch vôi răng siêu âm kết hợp ủ tinh chất thảo dược giảm sưng viêm nướu.",
    },

    // Intensive Row 1 (5 items)
    {
      id: "nk6-i1",
      tab: "rang-su",
      section: "intensive",
      name: "VELVETY ROSE – BỌC SỨ THẨM MỸ...",
      price: "6,126,000₫",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80",
      description:
        "Dòng răng sứ ánh hồng ngọc trai tự nhiên tôn vinh đường cười thanh thoát.",
    },
    {
      id: "nk6-i2",
      tab: "rang-su",
      section: "intensive",
      name: "RICE PEARLS – MẶT DÁN VENEER...",
      price: "7,128,000₫",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80",
      description:
        "Thiết kế nụ cười kỹ thuật số cá nhân hóa theo tỷ lệ vàng khuôn mặt.",
    },
    {
      id: "nk6-i3",
      tab: "tay-trang",
      section: "intensive",
      name: "REAL SMILE – TẨY TRẮNG KHOÁNG...",
      price: "1,979,000₫",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=80",
      description:
        "Bật 3 - 4 tông màu răng chỉ sau 45 phút cùng lớp phủ tái khoáng men răng.",
    },
    {
      id: "nk6-i4",
      tab: "nieng-rang",
      section: "intensive",
      name: "COCONUT BIO – KHAY TRONG SUỐT...",
      price: "29,979,000₫",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=500&q=80",
      description:
        "Khay niềng sinh học trong suốt tháo lắp dễ dàng, êm ái cho nướu.",
    },
    {
      id: "nk6-i5",
      tab: "implant",
      section: "intensive",
      name: "IMPLANT HACHI VIETNAM PRO...",
      price: "17,990,000₫",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80",
      description:
        "Trọn gói trụ Implant + khớp nối Abutment + mão sứ toàn phần chính hãng.",
    },

    // Homecare Row 2 (5 items)
    {
      id: "nk6-h1",
      tab: "cham-soc",
      section: "homecare",
      name: "VELVETY ROSE – NƯỚC SÚC MIỆNG...",
      price: "126,000₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      description:
        "Nước súc miệng tinh chất hoa hồng hữu cơ & bạc hà giữ hơi thở thơm mát.",
    },
    {
      id: "nk6-h2",
      tab: "cham-soc",
      section: "homecare",
      name: "RICE PEARLS – BỘT TRẮNG RĂNG...",
      price: "128,000₫",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=500&q=80",
      description:
        "Tinh chất cám gạo & bột ngọc trai làm sáng răng dịu nhẹ mỗi ngày.",
    },
    {
      id: "nk6-h3",
      tab: "cham-soc",
      section: "homecare",
      name: "REAL CARE – GEL BẢO VỆ NƯỚU...",
      price: "97,900₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=500&q=80",
      description:
        "Gel bôi dịu nướu dành cho người đang niềng răng hoặc mới cấy Implant.",
    },
    {
      id: "nk6-h4",
      tab: "cham-soc",
      section: "homecare",
      name: "COCONUT OIL – TINH DẦU SÚC MIỆNG...",
      price: "97,900₫",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80",
      description:
        "Liệu pháp Oil Pulling từ dầu dừa ép lạnh giúp thanh lọc khoang miệng.",
    },
    {
      id: "nk6-h5",
      tab: "cham-soc",
      section: "homecare",
      name: "SERUM KHOÁNG MEN RĂNG HACHI...",
      price: "179,900₫",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=500&q=80",
      description:
        "Bổ sung Hydroxyapatite tự nhiên phục hồi men răng nhạy cảm sau tẩy trắng.",
    },
  ],
  news: [
    {
      id: "n6-1",
      title:
        "COMBO CHĂM SÓC RĂNG MIỆNG MÙA HÈ CHỈ VỚI 449K – TẶNG NGAY GEL KHOÁNG",
      date: "11/05/2025",
      category: "ƯU ĐÃI",
      excerpt:
        "Khi tiết trời bắt đầu chuyển gió báo hiệu mùa Hè sắp đến, hãy cùng Hachi Dental làm mới nụ cười rạng rỡ cho những chuyến du lịch biển...",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "n6-2",
      title:
        "MÓN QUÀ SỨC KHỎE NỤ CƯỜI DÀNH TẶNG CHA MẸ TRONG THÁNG TRI ÂN GIA ĐÌNH!",
      date: "11/05/2025",
      category: "CÂU CHUYỆN",
      excerpt:
        "Một hàm răng chắc khỏe giúp cha mẹ thưởng thức trọn vẹn bữa cơm sum vầy. Hachi Dental dành tặng gói tầm soát nha chu miễn phí...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "n6-3",
      title: "LÀM SAO ĐỂ HẾT Ê BUỐT RĂNG VÀ CHẢY MÁU CHÂN RĂNG KHI ĐÁNH RĂNG?",
      date: "11/05/2025",
      category: "KIẾN THỨC",
      excerpt:
        "Ê buốt men răng và viêm nướu là vấn đề không của riêng ai, gây mất tự tin khi giao tiếp. Hãy để bác sĩ Hachi tư vấn giải pháp...",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
