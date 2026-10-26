import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat18Product {
  id: string;
  categoryLabel: string;
  name: string;
  price: string;
  specs: string;
  image: string;
  featuredBorder?: boolean;
}

export interface NoiThat18Data extends ClonedTemplateBaseData {
  deskProducts: NoiThat18Product[];
  chairProducts: NoiThat18Product[];
  cabinetProducts: NoiThat18Product[];
  perkStrip: {
    backgroundImage: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      icon: "truck" | "gift" | "piggy";
    }>;
  };
  promoBanners: {
    leftImage: string;
    leftTitle: string;
    leftSubtitle: string;
    leftRibbon: string;
    rightImage: string;
    rightBadge: string;
    rightTitle: string;
    rightDiscount: string;
  };
}

export const noiThat18DefaultData: NoiThat18Data = {
  business: {
    name: "MONA SHOP",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["mon@mona.media", "noithatvanphong@monashop.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:30",
    rating: 4.9,
    reviewCount: 690,
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "Chuyên cung cấp và thi công trọn gói bàn ghế văn phòng, bàn họp hội trường, ghế xoay công thái học và tủ hồ sơ doanh nghiệp chính hãng với chính sách bảo hành tận nơi uy tín."
    ],
    highlights: [
      "Hơn 500 mẫu bàn họp, ghế chân quỳ, ghế giám đốc và tủ tài liệu sẵn kho",
      "Miễn phí vận chuyển & lắp đặt tận nơi cho doanh nghiệp nội thành",
      "Chiết khấu thương mại từ 20% - 70% cho dự án setup văn phòng mới"
    ]
  },
  hero: {
    eyebrow: "OFFICE FURNITURE PROSPACE",
    subtitle:
      "Cung cấp trọn bộ nội thất văn phòng, bàn ghế làm việc tại nhà và giải pháp không gian doanh nghiệp hiện đại.",
    title: "Nội Thất Văn Phòng",
    description:
      "Giải pháp bàn ghế văn phòng công thái học, bàn họp cao cấp và tủ lưu trữ thông minh nâng tầm vị thế doanh nghiệp.",
    ctaText: "MUA SẮM NGAY",
    ctaLink: "#desks",
    backgroundImage:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1920&q=85"
  },
  deskProducts: [
    {
      id: "desk-1",
      categoryLabel: "BÀN HỌP",
      name: "Bàn họp SVH4016",
      price: "7,852,000 ₫",
      specs: "Kích thước 4000x1600x750mm • Gỗ Melamine cao cấp",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "desk-2",
      categoryLabel: "BÀN HỌP",
      name: "Bàn họp CT2010H3",
      price: "8,752,000 ₫",
      specs: "Kích thước 2000x1000x760mm • Sơn PU chống trầy",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "desk-3",
      categoryLabel: "BÀN HỌP",
      name: "Bàn họp CT5022H1R8",
      price: "13,579,000 ₫",
      specs: "Kích thước 5000x2200x760mm • Dành cho 16-20 người",
      image:
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "desk-4",
      categoryLabel: "BÀN HỌP",
      name: "Bàn họp CT2600",
      price: "13,250,000 ₫",
      specs: "Bàn họp Oval gỗ Veneer cao cấp • Tích hợp nắp luồn dây điện",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80"
    }
  ],
  perkStrip: {
    backgroundImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        id: "pk-1",
        title: "Miễn Phí Giao Hàng",
        description: "Giao hàng và lắp đặt hoàn thiện tận văn phòng trên toàn quốc.",
        icon: "truck"
      },
      {
        id: "pk-2",
        title: "Quà Tặng Đặc Biệt",
        description: "Tặng kèm gói bảo dưỡng định kỳ và phụ kiện luồn dây thông minh.",
        icon: "gift"
      },
      {
        id: "pk-3",
        title: "Tiết Kiệm Khi Mua Ở Mona",
        description: "Chiết khấu trực tiếp theo số lượng cho dự án văn phòng công ty.",
        icon: "piggy"
      }
    ]
  },
  chairProducts: [
    {
      id: "ch-1",
      categoryLabel: "GHẾ PHÒNG HỌP",
      name: "Ghế họp SL360M",
      price: "1,135,000 ₫",
      specs: "Khung thép mạ Chrome • Đệm tựa bọc nỉ êm ái",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ch-2",
      categoryLabel: "GHẾ PHÒNG HỌP",
      name: "Ghế họp SL601S",
      price: "798,000 ₫",
      specs: "Ghế chân quỳ sơn tĩnh điện • Tựa lưng công thái học",
      image:
        "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ch-3",
      categoryLabel: "GHẾ PHÒNG HỌP",
      name: "Ghế họp SL901",
      price: "2,430,000 ₫",
      specs: "Bọc da công nghiệp cao cấp • Tay vịn hợp kim nhôm",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ch-4",
      categoryLabel: "GHẾ PHÒNG HỌP",
      name: "Ghế SL607",
      price: "1,675,000 ₫",
      specs: "Tay ốp gỗ tự nhiên • Khung chân quỳ chịu lực cao",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
      featuredBorder: true
    }
  ],
  promoBanners: {
    leftImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    leftTitle: "THIẾT KẾ ĐỘC ĐÁO",
    leftSubtitle: "& HOÀN THIỆN CHẤT LƯỢNG",
    leftRibbon: "THƯƠNG HIỆU MANG LẠI SỰ HÀI LÒNG",
    rightImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
    rightBadge: "BLACK FRIDAY",
    rightTitle: "Cơn bão đầu tiên trong ngành nội thất!",
    rightDiscount: "20% - 70%"
  },
  cabinetProducts: [
    {
      id: "cab-1",
      categoryLabel: "KỆ HỒ SƠ",
      name: "Hộc ATM3D",
      price: "752,000 ₫",
      specs: "Hộc di động 3 ngăn kéo • Khóa dàn trung tâm an toàn",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cab-2",
      categoryLabel: "KỆ HỒ SƠ",
      name: "Tủ NT850D",
      price: "1,568,000 ₫",
      specs: "Tủ hồ sơ thấp 2 cánh gỗ Laminate chống ẩm",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cab-3",
      categoryLabel: "KỆ HỒ SƠ",
      name: "Tủ phụ HRTP02BX",
      price: "1,665,000 ₫",
      specs: "Tủ phụ bàn giám đốc có bánh xe di chuyển linh hoạt",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cab-4",
      categoryLabel: "KỆ HỒ SƠ",
      name: "Tủ AT1260SD",
      price: "1,126,000 ₫",
      specs: "Tủ tài liệu 2 khoang • Khoang trên không cánh tiện lợi",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "GIẢI PHÁP LƯU TRỮ HỒ SƠ KHOA HỌC CHO VĂN PHÒNG HIỆN ĐẠI",
      date: "20/02/2026",
      excerpt:
        "Cách bố trí hệ tủ tài liệu module kết hợp vách ngăn giúp tiết kiệm 40% diện tích sàn văn phòng...",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "TIÊU CHUẨN CHỌN BÀN HỌP HỘI TRƯỜNG SANG TRỌNG CHO DOANH NGHIỆP",
      date: "14/02/2026",
      excerpt:
        "Kinh nghiệm lựa chọn kích thước bàn họp, chất liệu gỗ Veneer và ghế chân quỳ đồng bộ...",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "XU HƯỚNG THIẾT KẾ CỤM BÀN LÀM VIỆC NHÓM MỞ NĂM 2026",
      date: "08/02/2026",
      excerpt:
        "Tăng cường sự gắn kết giữa các phòng ban với hệ bàn cụm 4-6 chỗ tích hợp ổ cắm âm bàn...",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
