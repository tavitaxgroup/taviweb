import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa8Item {
  id: string;
  section: "implant" | "veneer" | "aligner" | "accessories";
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  image: string;
  description: string;
}

export interface NhaKhoa8Data extends ClonedTemplateBaseData {
  midBanner: {
    title: string;
    subtitle: string;
    image: string;
  };
  items: NhaKhoa8Item[];
}

export const nhaKhoa8DefaultData: NhaKhoa8Data = {
  business: {
    name: "TRUNG TÂM IMPLANT VIOSMILE",
    phone: ["0313728397", "1900 998 397"],
    email: ["info@viosmile.vn", "implant@viosmile.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:00 - 20:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1680,
    aboutTitle: "VỀ VIOSMILE DIGITAL DENTAL",
    aboutText: [
      "Trung Tâm Implant & Nha Khoa Kỹ Thuật Số VioSmile tiên phong ứng dụng máng hướng dẫn phẫu thuật 3D và chế tác răng sứ CAD/CAM Thụy Sĩ chuẩn xác đến từng micromet."
    ],
  },
  hero: {
    eyebrow: "SWISS IMPLANT",
    title: "Implant Thụy Sĩ CITIZEN",
    subtitle:
      "Cùng với sự phát triển không ngừng của nha khoa kỹ thuật số thế giới, VioSmile mang đến các dòng trụ Implant Titanium chính hãng Thụy Sĩ, Mỹ với độ tích hợp xương nhanh gấp 2 lần...",
    ctaText: "XEM DỊCH VỤ",
    ctaLink: "#implant-section",
    backgroundImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=85",
  },
  midBanner: {
    title: "CÔNG NGHỆ BỌC SỨ VIOF",
    subtitle:
      "Thiết kế nụ cười kỹ thuật số 3D Digital Smile Design cá nhân hóa theo đường nét khuôn mặt doanh nhân hiện đại, bảo tồn tối đa mô răng sinh học.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=85",
  },
  items: [
    // Section 1: TRỒNG RĂNG IMPLANT (4 cards)
    {
      id: "nk8-imp1",
      section: "implant",
      name: "TRỤ STRAUMANN SLA (Thụy Sĩ)",
      price: "14,500,000 ₫ – 35,200,000 ₫",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      description:
        "Trụ Implant Straumann SLActive Thụy Sĩ tích hợp xương siêu tốc trong 3 - 4 tuần.",
    },
    {
      id: "nk8-imp2",
      section: "implant",
      name: "TRỤ NOBEL BIOCARE ACTIVE",
      price: "28,700,000 ₫",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế ren xoắn độc quyền chịu lực nhai tức thì, bảo hành toàn cầu trọn đời.",
    },
    {
      id: "nk8-imp3",
      section: "implant",
      name: "TRỤ DENTIUM SUPERLINE MỸ",
      price: "18,700,000 ₫",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
      description:
        "Giải pháp phục hồi răng mất bền vững, ổn định mô mềm và thẩm mỹ nướu tối ưu.",
    },
    {
      id: "nk8-imp4",
      section: "implant",
      name: "TRỤ TEKKA GLOBAL D PHÁP",
      price: "21,700,000 ₫",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      description:
        "Kết nối côn thuôn khít sát tuyệt đối ngăn ngừa tiêu xương cổ Implant.",
    },

    // Section 2: RĂNG SỨ & VENEER THẨM MỸ (4 cards)
    {
      id: "nk8-ven1",
      section: "veneer",
      name: "Răng sứ Lava Plus 1",
      price: "7,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      description:
        "Phôi sứ Lava Plus 3M ESPE Hoa Kỳ độ cứng gấp 7 lần răng thật, chống bám màu.",
    },
    {
      id: "nk8-ven2",
      section: "veneer",
      name: "Mặt dán sứ Emax Press",
      price: "8,200,000 ₫",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
      description:
        "Siêu mỏng 0.2 - 0.3mm không cần mài nhỏ răng, độ thấu quang như ngọc trai.",
    },
    {
      id: "nk8-ven3",
      section: "veneer",
      name: "Răng sứ Orodent Gold",
      price: "12,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
      description:
        "Dòng răng sứ cao cấp nhất nước Ý có tinh thể vàng lấp lánh và thẻ bảo hành chính hãng.",
    },
    {
      id: "nk8-ven4",
      section: "veneer",
      name: "Răng sứ Cercon HT Đức",
      price: "5,500,000 ₫",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
      description:
        "Chế tác tự động bằng hệ thống CAD/CAM Sirona Đức chỉ trong 24 giờ.",
    },

    // Section 3: KHAY NIỀNG RĂNG 3D (4 cards with round taupe badges)
    {
      id: "nk8-ali1",
      section: "aligner",
      name: "Khay Invisalign Express",
      price: "36,000,000 ₫",
      oldPrice: "45,000,000 ₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
      description:
        "Liệu trình niềng răng trong suốt nhẹ nhàng cho các ca thưa kẽ hoặc lệch nhẹ.",
    },
    {
      id: "nk8-ali2",
      section: "aligner",
      name: "Khay Invisalign Moderate",
      price: "67,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
      description:
        "Mô phỏng kết quả dịch chuyển răng trước điều trị qua phần mềm ClinCheck 3D.",
    },
    {
      id: "nk8-ali3",
      section: "aligner",
      name: "Mắc cài sứ Damon Clear",
      price: "48,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      description:
        "Hệ thống mắc cài sứ pha lê tự buộc giảm ma sát và rút ngắn 6 tháng đeo niềng.",
    },
    {
      id: "nk8-ali4",
      section: "aligner",
      name: "Hàm duy trì Vivera Mỹ",
      price: "5,000,000 ₫",
      oldPrice: "8,000,000 ₫",
      discountBadge: "-38%",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
      description:
        "Bộ 3 cặp khay duy trì Vivera chính hãng giữ form răng ổn định sau chỉnh nha.",
    },

    // Section 4: THIẾT BỊ NHA KHOA TẠI NHÀ (4 cards with -20% badges)
    {
      id: "nk8-acc1",
      section: "accessories",
      name: "TRỤ STRAUMANN SLA (Bản mẫu)",
      price: "14,500,000 ₫ – 35,200,000 ₫",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      description:
        "Gói tầm soát CT ConeBeam 3D và lên phác đồ cấy ghép kỹ thuật số Simplant.",
    },
    {
      id: "nk8-acc2",
      section: "accessories",
      name: "Máy tăm nước VioSmile Pro 11",
      price: "1,600,000 ₫",
      oldPrice: "2,000,000 ₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1559591937-abc368016745?auto=format&fit=crop&w=600&q=80",
      description:
        "Tia nước siêu âm xung tần số cao làm sạch kẽ răng Implant và mắc cài.",
    },
    {
      id: "nk8-acc3",
      section: "accessories",
      name: "Bàn chải điện Sonic Vio 11",
      price: "1,600,000 ₫",
      oldPrice: "2,000,000 ₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
      description:
        "Rung sóng âm 42.000 nhịp/phút kèm cảm biến áp lực bảo vệ nướu.",
    },
    {
      id: "nk8-acc4",
      section: "accessories",
      name: "Bộ kit trắng răng VioHome",
      price: "1,600,000 ₫",
      oldPrice: "2,000,000 ₫",
      discountBadge: "-20%",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      description:
        "Máng ngậm LED ánh sáng xanh kèm 4 ống gel tẩy trắng răng chuẩn FDA.",
    },
  ],
  news: [
    {
      id: "nk8-b1",
      title:
        "Bí quyết sở hữu nụ cười quyền lực của những CEO hàng đầu thế giới",
      date: "18/05/2025",
      category: "DOANH NHÂN",
      excerpt:
        "Đối với một doanh nhân thành đạt, hàm răng đều đẹp và nụ cười rạng rỡ không chỉ thể hiện phong thái tự tin trên bàn đàm phán mà còn...",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk8-b2",
      title:
        "12 dòng răng sứ toàn phần cao cấp dành cho phái đẹp được ưa chuộng nhất",
      date: "14/05/2025",
      category: "THẨM MỸ SỨ",
      excerpt:
        "Công nghệ chế tác sứ đa lớp chuyển màu tự nhiên giúp mặt dán sứ Veneer và mão sứ toàn phần đạt độ trong mờ hoàn hảo như răng thật...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk8-b3",
      title:
        "Top 10 thương hiệu trụ Implant cao cấp hàng đầu mọi khách hàng đều quan tâm",
      date: "10/05/2025",
      category: "IMPLANT",
      excerpt:
        "1. Straumann (Thụy Sĩ) được thành lập từ năm 1954 tại Basel là tập đoàn dẫn đầu thế giới về nghiên cứu cấy ghép nha khoa và tái tạo mô...",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
