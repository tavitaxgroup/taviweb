import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2BProduct8CategoryCircle {
  id: string;
  name: string;
  filterKey: string;
  iconType: "veggie" | "seafood" | "meat" | "fruit" | "dry" | "drink";
}

export interface B2BProduct8PromoCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  oldPrice?: string;
  newPrice?: string;
  savingText?: string;
  ctaText: string;
  bgTone: "green" | "cream";
  image: string;
}

export interface B2BProduct8ProductItem {
  id: string;
  title: string;
  price: string;
  numericPrice: number;
  unit: string;
  supplier: string;
  categoryKey: string;
  certification: string;
  image: string;
}

export interface B2BProduct8FarmSupplier {
  id: string;
  shortCode: string;
  badgeColor: string;
  name: string;
  description: string;
}

export interface B2BProduct8TemplateData extends ClonedTemplateBaseData {
  gardenCategories: B2BProduct8CategoryCircle[];
  promoCards: B2BProduct8PromoCard[];
  featuredProducts: B2BProduct8ProductItem[];
  farmSuppliers: B2BProduct8FarmSupplier[];
  testimonialsBgImage: string;
  certifications: Array<{ id: string; code: string; subtitle: string }>;
}

export const b2bProduct8DefaultData: B2BProduct8TemplateData = {
  business: {
    name: "MonaFresh",
    logo: "",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["mon@mona.media", "demonhunterg@gmail.com"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 06:00 - 20:00",
    rating: 4.9,
    reviewCount: 420,
    experienceYears: "10+",
    aboutTitle: "Sàn Kết Nối & Phân Phối Nông Sản Sạch B2B Uy Tín",
    aboutText: [
      "MonaFresh kết nối trực tiếp hơn 150 nông trại hữu cơ, hợp tác xã chuẩn VietGAP/GlobalGAP với hệ thống siêu thị, nhà hàng, bếp ăn công nghiệp và cửa hàng thực phẩm sạch trên toàn quốc."
    ]
  },
  hero: {
    eyebrow: "SÀN NÔNG SẢN SẠCH & THỰC PHẨM HỮU CƠ B2B",
    title: "TÌM MUA THỰC PHẨM SẠCH TỪ NHÀ CUNG CẤP UY TÍN TẠI ĐÂY",
    subtitle:
      "Truy xuất nguồn gốc 100% từ nông trại đạt chuẩn USDA Organic, JAS và VietGAP — Giao sỉ & lẻ bằng xe lạnh chuyên dụng mỗi sáng.",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85"
  },
  gardenCategories: [
    {
      id: "cat-1",
      name: "Rau củ",
      filterKey: "rau-cu",
      iconType: "veggie"
    },
    {
      id: "cat-2",
      name: "Hải sản",
      filterKey: "hai-san",
      iconType: "seafood"
    },
    {
      id: "cat-3",
      name: "Thịt trứng",
      filterKey: "thit-trung",
      iconType: "meat"
    },
    {
      id: "cat-4",
      name: "Trái cây",
      filterKey: "trai-cay",
      iconType: "fruit"
    },
    {
      id: "cat-5",
      name: "Đồ khô",
      filterKey: "do-kho",
      iconType: "dry"
    },
    {
      id: "cat-6",
      name: "Đồ uống",
      filterKey: "do-uong",
      iconType: "drink"
    }
  ],
  promoCards: [
    {
      id: "prm-1",
      badge: "ƯU ĐÃI ĐỐI TÁC MỚI",
      title:
        "TẶNG VOUCHER MUA HÀNG ONLINE ĐẦU TIÊN TẠI HAPPY TRADE TRỊ GIÁ 50.000 ĐỒNG",
      subtitle: "(Đơn hàng tối thiểu 300.000 đồng)",
      ctaText: "NHẬN VOUCHER",
      bgTone: "green",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prm-2",
      badge: "COMBO BÁN CHẠY",
      title: "COMBO THỊT BÒ TƠ SẠCH - GÀ TA THẢ VƯỜN",
      subtitle: "Đóng gói hút chân không chuẩn mát 0-4°C",
      savingText: "TIẾT KIỆM 39.000đ",
      oldPrice: "327.000đ",
      newPrice: "287.760đ",
      ctaText: "MUA NGAY",
      bgTone: "cream",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prm-3",
      badge: "TRÁI CÂY THEO MÙA",
      title: "ƯU ĐÃI ĐẶC BIỆT KHI MUA TRÁI CÂY TỪ 3KG TRỞ LÊN",
      subtitle: "Thu hoạch trong ngày từ nhà vườn miền Tây & Đà Lạt",
      ctaText: "MUA NGAY",
      bgTone: "cream",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prm-4",
      badge: "COMBO GIA ĐÌNH & BẾP ĂN",
      title: "COMBO HẢI SẢN TƯƠI SỐNG - CÁ BASA HỮU CƠ",
      subtitle: "Đạt chứng nhận Binca Organic Châu Âu",
      savingText: "TIẾT KIỆM 39.000đ",
      oldPrice: "327.000đ",
      newPrice: "287.760đ",
      ctaText: "MUA NGAY",
      bgTone: "cream",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    }
  ],
  featuredProducts: [
    {
      id: "fp-1",
      title: "Cá Basa cắt lát hữu cơ Binca",
      price: "75,000 ₫",
      numericPrice: 75000,
      unit: "Khay 500g",
      supplier: "Binca Việt Nam",
      categoryKey: "hai-san",
      certification: "EU Organic",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-2",
      title: "Thanh long ruột đỏ sạch Bình Thuận",
      price: "45,000 ₫",
      numericPrice: 45000,
      unit: "Kg",
      supplier: "HTX Bình Thuận",
      categoryKey: "trai-cay",
      certification: "VietGAP",
      image:
        "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-3",
      title: "Gà ta thả vườn Bình Định nguyên con",
      price: "195,000 ₫",
      numericPrice: 195000,
      unit: "Con 1.3kg",
      supplier: "Trang Trại An Nhơn",
      categoryKey: "thit-trung",
      certification: "VietGAP",
      image:
        "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-4",
      title: "Cam xoàn hướng hữu cơ Lai Vung",
      price: "65,000 ₫",
      numericPrice: 65000,
      unit: "Kg",
      supplier: "Nhà Vườn Đồng Tháp",
      categoryKey: "trai-cay",
      certification: "Hướng Hữu Cơ",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-5",
      title: "Thịt nạc đùi heo hữu cơ thảo mộc",
      price: "84,000 ₫",
      numericPrice: 84000,
      unit: "Khay 400g",
      supplier: "Nông Trại Xanh",
      categoryKey: "thit-trung",
      certification: "GlobalGAP",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-6",
      title: "Bưởi da xanh hướng hữu cơ Bến Tre",
      price: "75,000 ₫",
      numericPrice: 75000,
      unit: "Kg",
      supplier: "HTX Bến Tre",
      categoryKey: "trai-cay",
      certification: "VietGAP",
      image:
        "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-7",
      title: "Cải bó xôi hữu cơ (Rau chân vịt)",
      price: "29,000 ₫",
      numericPrice: 29000,
      unit: "Bó 300g",
      supplier: "Đà Lạt Organic",
      categoryKey: "rau-cu",
      certification: "USDA Organic",
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-8",
      title: "Sầu riêng Ri6 sạch chín cây",
      price: "135,000 ₫",
      numericPrice: 135000,
      unit: "Khay 500g",
      supplier: "Vườn Cái Mơn",
      categoryKey: "trai-cay",
      certification: "VietGAP",
      image:
        "https://images.unsplash.com/photo-1588665502985-8f012d10a239?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-9",
      title: "Tôm sú hữu cơ Binca rừng ngập mặn",
      price: "181,000 ₫",
      numericPrice: 181000,
      unit: "Hộp 500g",
      supplier: "Binca Việt Nam",
      categoryKey: "hai-san",
      certification: "EU Organic",
      image:
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-10",
      title: "Bơ sáp 034 Lâm Đồng dẻo béo",
      price: "135,000 ₫",
      numericPrice: 135000,
      unit: "Kg",
      supplier: "Nông Trại Bảo Lộc",
      categoryKey: "trai-cay",
      certification: "VietGAP",
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-11",
      title: "Cá Trác vàng biển tự nhiên cấp đông",
      price: "71,600 ₫",
      numericPrice: 71600,
      unit: "Khay 500g",
      supplier: "Hải Sản Phú Quý",
      categoryKey: "hai-san",
      certification: "HACCP",
      image:
        "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-12",
      title: "Xoài cát Hòa Lộc chín tự nhiên",
      price: "140,000 ₫",
      numericPrice: 140000,
      unit: "Kg",
      supplier: "HTX Hòa Lộc",
      categoryKey: "trai-cay",
      certification: "GlobalGAP",
      image:
        "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80"
    }
  ],
  farmSuppliers: [
    {
      id: "sup-1",
      shortCode: "TMF",
      badgeColor: "#c57b28",
      name: "Công ty Thực Phẩm Tâm Minh",
      description:
        "Công ty TNHH Thực phẩm Tâm Minh có hơn 12 năm sản xuất Bột nêm Ngưu Bàng và thực phẩm thực dưỡng thuần chay..."
    },
    {
      id: "sup-2",
      shortCode: "Việt Nature",
      badgeColor: "#2d8a4e",
      name: "Công Ty Thiên Nhiên Việt",
      description:
        "Công ty TNHH Xuất Nhập Khẩu Thiên Nhiên Việt chuyên về sản xuất và phân phối trà thảo mộc, nông sản hữu cơ..."
    },
    {
      id: "sup-3",
      shortCode: "BINCA",
      badgeColor: "#1b75bb",
      name: "Binca Việt Nam",
      description:
        "Chính thức bước vào thị trường Việt Nam vào năm 1998, sau hơn 25 năm dẫn đầu xuất khẩu tôm cá sinh thái hữu cơ..."
    },
    {
      id: "sup-4",
      shortCode: "dafusa",
      badgeColor: "#631919",
      name: "Antofu Việt Nam",
      description:
        "Antofu Việt Nam là công ty được đầu tư với 100% nguồn vốn chuyên sản xuất đậu phụ sạch tinh hoa Việt chuẩn Nhật..."
    }
  ],
  news: [
    {
      id: "kn-1",
      title: "Làm thế nào để được chứng nhận hữu cơ ở Việt Nam?",
      date: "15/05/2026",
      category: "KIẾN THỨC ORGANIC",
      excerpt:
        "Chứng nhận hữu cơ là một tiêu chuẩn góp phần đảm bảo tính giá trị cho các sản phẩm hữu cơ và niềm tin của người tiêu dùng.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "kn-2",
      title: "Giải đáp : Thực phẩm hữu cơ Organic là gì ?",
      date: "18/05/2026",
      category: "KIẾN THỨC ORGANIC",
      excerpt:
        "Thực phẩm organic hay còn gọi là thực phẩm hữu cơ đang ngày một phổ biến và tạo một cơn sốt trên thị trường hiện nay.",
      image:
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "kn-3",
      title: "Nông nghiệp hữu cơ và thực trạng chứng nhận tại Việt Nam",
      date: "20/05/2026",
      category: "CHỨNG NHẬN",
      excerpt:
        "Là một mô hình nông nghiệp còn khá mới tại VN nhưng đã được áp dụng từ lâu ở những nước phát triển trên thế giới.",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "kn-4",
      title: "Tổng hợp những điều bạn cần biết về thực phẩm organic",
      date: "24/05/2026",
      category: "CẨM NANG",
      excerpt:
        "Thực phẩm hữu cơ – thực phẩm organic xuất hiện trong thời gian gần đây như là cứu cánh của nhiều bà nội trợ Việt Nam.",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonialsBgImage:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
  testimonials: [
    {
      id: "t-1",
      author: "Chị Phúc / Đối tác B2B",
      role: "Chuỗi Cửa Hàng Thực Phẩm Xanh",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      content:
        "Trang này dịch vụ tốt, rau củ quả tươi ngon an toàn, giá hợp lý. Mình rất hài lòng và sẽ giới thiệu cho bạn bè mình."
    },
    {
      id: "t-2",
      author: "Chị Lộc / Quản lý Thu Mua",
      role: "Hệ Thống Nhà Hàng Organic",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content:
        "MonaFresh là nơi giúp bạn có thể yên tâm khi lựa chọn thực phẩm và hiểu hơn về nông nghiệp hữu cơ chuẩn quốc tế."
    },
    {
      id: "t-3",
      author: "Chị Thọ / Bếp Trưởng",
      role: "Hệ Thống Trường Quốc Tế",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      content:
        "Trang này dịch vụ tốt, rau củ quả tươi ngon an toàn, giá hợp lý. Mình rất hài lòng và sẽ giới thiệu cho bạn bè mình."
    }
  ],
  certifications: [
    { id: "c-1", code: "EU ORGANIC", subtitle: "Tiêu chuẩn Châu Âu" },
    {
      id: "c-2",
      code: "Australian Certified Organic",
      subtitle: "Chứng nhận Úc"
    },
    { id: "c-3", code: "JAS ORGANIC", subtitle: "Tiêu chuẩn Nhật Bản" },
    { id: "c-4", code: "USDA ORGANIC", subtitle: "Bộ Nông Nghiệp Hoa Kỳ" },
    { id: "c-5", code: "VIETGAP CLEAN", subtitle: "Nông nghiệp tốt VN" }
  ]
};

export default b2bProduct8DefaultData;
