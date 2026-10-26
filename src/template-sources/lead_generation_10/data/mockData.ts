import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TetGiftBoxItem {
  id: string;
  name: string;
  bullets: string[];
  price: string;
  image: string;
}

export interface LeadGeneration10Data extends ClonedTemplateBaseData {
  navCategories: string[];
  corporateCombo: {
    sectionTitle: string;
    comboName: string;
    items: string[];
    oldPrice: string;
    price: string;
    ctaText: string;
    image: string;
  };
  traditionalGifts: TetGiftBoxItem[];
  qualityCommitments: {
    image: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  luxuryGifts: TetGiftBoxItem[];
  brandStoryBlocks: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  trustBadges: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  branches: Array<{
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
  }>;
}

export const leadGeneration10DefaultData: LeadGeneration10Data = {
  business: {
    name: "TetGift",
    phone: ["1900 636 648", "(+84) 0313-728-397"],
    email: ["info@themona.global", "quatet@tetgift.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "08:00 - 21:30 (Tất cả các ngày trong tuần)",
    rating: 4.98,
    reviewCount: 3200,
    aboutTitle: "QUÀ TẾT MANG TẾT VỀ MỌI NHÀ",
    aboutText: [
      "Tại đây, chúng tôi cung cấp các loại bánh kẹo và quà tết chất lượng, được sản xuất bởi các nhà cung cấp hàng đầu Việt Nam, được phân phối rộng rãi trong nước và ngoài nước.",
      "TetGift ngay từ ngày đầu thành lập đã xác định chú trọng vào chất lượng sản phẩm và thiết kế hộp quà khắc logo doanh nghiệp tinh xảo, mang lại giá trị và sự thỏa mãn cao nhất cho đối tác."
    ],
    experienceYears: "10+"
  },
  navCategories: [
    "QUÀ TẾT ▾",
    "HOA TẾT ▾",
    "BÁNH KẸO TẾT ▾",
    "MỨT ▾",
    "NƯỚC NGỌT ▾",
    "PHỤ KIỆN TẾT",
    "QUÀ TẶNG",
    "KHUYẾN MÃI ▾",
    "CẨM NANG ▾",
    "CHÍNH SÁCH",
    "LIÊN HỆ"
  ],
  hero: {
    eyebrow: "TINH HOA QUÀ BIẾU DOANH NGHIỆP",
    title: "QUÀ TẾT MANG TẾT VỀ MỌI NHÀ",
    subtitle:
      "Tại đây, chúng tôi cung cấp các loại bánh kẹo và quà tết chất lượng, được sản xuất bởi các nhà cung cấp hàng đầu Việt Nam, được phân phối rộng rãi trong nước và ngoài nước.",
    ctaText: "Khám phá ngay",
    ctaLink: "#bo-qua-tet",
    backgroundImage:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=85"
  },
  corporateCombo: {
    sectionTitle: "BỘ QUÀ BIẾU TẾT DOANH NGHIỆP",
    comboName: "COMBO QUÀ TẾT TÀI LỘC",
    items: [
      "Bánh bơ trứng thượng hạng Richy",
      "Bánh quy bơ Pháp LU cao cấp",
      "Bánh quy bơ thập cẩm kẹp kem Cosy",
      "Kẹo Socola trà xanh Matcha Nhật Bản",
      "Kẹo Socola hạt dẻ Ferrero Rocher"
    ],
    oldPrice: "2.200.000",
    price: "1.248.000 VND",
    ctaText: "Mua ngay",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80"
  },
  traditionalGifts: [
    {
      id: "tg-1",
      name: "Hộp Quà Tết Phú Quý Đoàn Viên 3 Món – Dourthe N°1 Rouge",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tg-2",
      name: "Hộp Quà Tết Phú Quý Đoàn Viên 5 Món – Château Pey La Tour",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "tg-3",
      name: "Hộp Quà Tết Hưng Thịnh An Khang 4 Món – Dourthe N°1 Rouge",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=80"
    }
  ],
  qualityCommitments: {
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
    items: [
      {
        id: "qc-1",
        title: "Chất lượng sản phẩm",
        description:
          "Chúng tôi chỉ cung cấp những sản phẩm chất lượng cao và được lựa chọn kỹ lưỡng để đảm bảo sự hài lòng của khách hàng."
      },
      {
        id: "qc-2",
        title: "Dịch vụ khách hàng",
        description:
          "Chúng tôi luôn lắng nghe ý kiến của khách hàng và đảm bảo họ có trải nghiệm mua sắm thú vị trên hệ thống trực tuyến."
      },
      {
        id: "qc-3",
        title: "Giao hàng và đảm bảo sản phẩm",
        description:
          "Nếu có bất kỳ vấn đề nào về sản phẩm sau khi nhận hàng, chúng tôi sẽ nhanh chóng giải quyết và đảm bảo sự hài lòng của khách hàng."
      }
    ]
  },
  luxuryGifts: [
    {
      id: "lg-1",
      name: "Set Quà Tài Lộc Phú Quý Xuân Sang",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lg-2",
      name: "Set Quà Tài Lộc Vạn Sự Như Ý",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lg-3",
      name: "Set Quà Tài Lộc Thịnh Vượng Hoàng Gia",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lg-4",
      name: "Hộp Quà Sơn Mài Khắc Logo Doanh Nghiệp",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lg-5",
      name: "Hộp Quà Tết Kim Long Bách Phúc",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "lg-6",
      name: "Hộp Quà Tết Hoàng Kim Đại Cát",
      bullets: [
        "02 Phong bao lì xì tài lộc",
        "01 Cành đào giả trang trí",
        "01 Bộ ấm trà sứ cao cấp"
      ],
      price: "6.890.000 VND",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80"
    }
  ],
  brandStoryBlocks: [
    {
      id: "bs-1",
      title:
        "Quà tết là một phần không thể thiếu trong các dịp lễ tết của người Việt Nam",
      content:
        "Quà tết thường được đóng gói đẹp mắt và bao gồm những món quà như bánh kẹo, trái cây, rượu vang, trà thượng hạng và các loại hạt dinh dưỡng. Quà tết thể hiện sự quan tâm, tình cảm và lòng biết ơn của người tặng đến người nhận. Ngoài ra, quà tết còn là một cách để gửi đi những lời chúc tốt đẹp cho gia đình, bạn bè và đồng nghiệp trong dịp tết. Chúc bạn có một mùa tết vui vẻ và ấm áp!"
    },
    {
      id: "bs-2",
      title:
        "Giải pháp quà tặng doanh nghiệp in khắc logo thương hiệu đẳng cấp",
      content:
        "Chúng tôi cung cấp dịch vụ thiết kế riêng hộp quà Tết bằng chất liệu gỗ, da và sơn mài cao cấp kèm khắc laser logo doanh nghiệp. Chính sách chiết khấu lên đến 30% cho đơn hàng số lượng lớn, xuất hóa đơn VAT đầy đủ và giao hàng tận nơi tới từng đối tác trên toàn quốc."
    },
    {
      id: "bs-3",
      title:
        "Cam kết tuyển chọn đặc sản và thức quà nhập khẩu chính ngạch 100%",
      content:
        "Mỗi tặng phẩm bên trong bộ quà Tết đều có giấy chứng nhận nguồn gốc xuất xứ và kiểm định chất lượng nghiêm ngặt, giúp doanh nghiệp hoàn toàn an tâm khi trao gửi tấm lòng tri ân đến khách hàng VIP."
    }
  ],
  trustBadges: [
    {
      id: "tb-1",
      title: "Giao hàng cẩn thận",
      subtitle: "Đến tay bạn một cách an toàn và kịp thời."
    },
    {
      id: "tb-2",
      title: "Hỗ trợ tư vấn",
      subtitle: "Lời khuyên hoặc giúp đỡ về các vấn đề liên quan"
    },
    {
      id: "tb-3",
      title: "Thanh toán an toàn",
      subtitle: "Đảm bảo tính bảo mật và bảo vệ thông tin tài chính"
    },
    {
      id: "tb-4",
      title: "Nguồn gốc chất lượng",
      subtitle: "Đảm bảo nơi sản xuất hoặc xuất xứ"
    }
  ],
  branches: [
    {
      id: "br-1",
      name: "Công ty TNHH MONA MEDIA",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "1900 636 648",
      email: "info@themona.global"
    },
    {
      id: "br-2",
      name: "Công ty TNHH PHẦN MỀM MONA",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "1900 636 648",
      email: "info@themona.global"
    },
    {
      id: "br-3",
      name: "Công ty TNHH MONA HOST",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
      phone: "1900 636 648",
      email: "info@themona.global"
    }
  ]
};

export default leadGeneration10DefaultData;
