import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat20Product {
  id: string;
  section: "beds" | "bunkbeds" | "accessories";
  category: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface NoiThat20Data extends ClonedTemplateBaseData {
  products: NoiThat20Product[];
  perks: Array<{
    id: string;
    icon: "truck" | "gift" | "piggy";
    title: string;
    subtitle: string;
  }>;
  bottomBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
  };
}

export const noiThat20DefaultData: NoiThat20Data = {
  business: {
    name: "SleepWell Bedroom",
    phone: ["0126 922 0162", "0909 555 162"],
    email: ["contact@sleepwell.vn", "cskh@sleepwell.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 920,
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "SleepWell Bedroom chuyên thiết kế, sản xuất giường ngủ gỗ tự nhiên, giường tầng thông minh và phân phối nệm lò xo, chăn ga gối lụa Tencel cao cấp mang lại giấc ngủ trọn vẹn cho mọi gia đình."
    ],
  },
  hero: {
    eyebrow: "SILK",
    title: "BED LINEN",
    subtitle: "Trải nghiệm không gian phòng ngủ thượng lưu & êm ái mỗi đêm",
    ctaText: "MUA NGAY",
    ctaLink: "#giuong-ngu",
    backgroundImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",
  },
  products: [
    // GIƯỜNG NGỦ (4 items)
    {
      id: "nt20-b1",
      section: "beds",
      category: "GIƯỜNG NGỦ",
      name: "Giường Gỗ, bọc Da phong cách Bắc Âu GHS-966",
      price: "13,568,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      description:
        "Khung gỗ sồi tự nhiên kết hợp đầu giường bọc da Microfiber êm ái chuẩn phong cách Scandinavian.",
    },
    {
      id: "nt20-b2",
      section: "beds",
      category: "GIƯỜNG NGỦ",
      name: "Giường Hiện đại, Gỗ công nghiệp GHS-933",
      price: "5,624,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế tối giản kiểu Nhật từ gỗ MDF lõi xanh chống ẩm An Cường phủ Melamine vân gỗ trầm.",
    },
    {
      id: "nt20-b3",
      section: "beds",
      category: "GIƯỜNG NGỦ",
      name: "Giường ngủ hiện đại tiện dụng GHS-996",
      price: "14,236,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description:
        "Tích hợp hộc kéo chứa đồ thông minh dưới gầm giường và kệ đầu giường đa năng.",
    },
    {
      id: "nt20-b4",
      section: "beds",
      category: "GIƯỜNG NGỦ",
      name: "Giường ngủ hiện đại gỗ sồi tự nhiên GHS-9001",
      price: "12,589,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80",
      description:
        "100% gỗ sồi trắng nhập khẩu Bắc Mỹ với hệ thống ngăn kéo lưu trữ chăn màn rộng rãi.",
    },

    // GIƯỜNG TẦNG (4 items)
    {
      id: "nt20-k1",
      section: "bunkbeds",
      category: "GIƯỜNG TẦNG",
      name: "Giường hộp 3 tầng NTBN-577",
      price: "6,752,000 ₫",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
      description:
        "Giường 3 tầng gỗ thông nhập khẩu tích hợp cầu thang hộp chứa đồ an toàn cho bé.",
    },
    {
      id: "nt20-k2",
      section: "bunkbeds",
      category: "GIƯỜNG TẦNG",
      name: "Giường hộp 3 tầng NTBN-576",
      price: "8,752,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế 2 tầng chính kèm 1 giường kéo sát đất linh hoạt, tối ưu diện tích phòng trẻ em.",
    },
    {
      id: "nt20-k3",
      section: "bunkbeds",
      category: "GIƯỜNG TẦNG",
      name: "Giường hộp 2 tầng NTBN-567",
      price: "7,452,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description:
        "Gỗ tự nhiên màu sáng thanh lịch, lan can chắn cao an toàn tuyệt đối khi bé ngủ.",
    },
    {
      id: "nt20-k4",
      section: "bunkbeds",
      category: "GIƯỜNG TẦNG",
      name: "Giường hộp 3 tầng gỗ sồi NTBN-578",
      price: "8,562,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80",
      description:
        "Kết hợp kệ sách âm tường và ngăn kéo cầu thang đa năng tiện lợi.",
    },

    // PHỤ KIỆN (4 items)
    {
      id: "nt20-a1",
      section: "accessories",
      category: "PHỤ KIỆN",
      name: "Chăn Thu – Đông cao cấp phong cách Hàn Quốc",
      price: "452,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description:
        "Chất liệu cotton lụa thoáng khí, giữ ấm dịu nhẹ và an toàn cho làn da nhạy cảm.",
    },
    {
      id: "nt20-a2",
      section: "accessories",
      category: "PHỤ KIỆN",
      name: "Bộ vỏ chăn ga gối Tencel Hoàng Gia",
      price: "899,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      description:
        "Sợi gỗ khuynh diệp Tencel 60s mát lạnh tự nhiên, chống nhăn và kháng khuẩn vượt trội.",
    },
    {
      id: "nt20-a3",
      section: "accessories",
      category: "PHỤ KIỆN",
      name: "Nệm Lò Xo LOTUS O.Season Plus",
      price: "20,050,000 ₫",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
      description:
        "Hệ thống lò xo túi độc lập nâng đỡ 7 vùng cơ thể, không gây tiếng động khi trở mình.",
    },
    {
      id: "nt20-a4",
      section: "accessories",
      category: "PHỤ KIỆN",
      name: "Nệm Lò Xo LOTUS St. Cosmo",
      price: "11,286,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
      description:
        "Lớp Pillow Top cao su thiên nhiên êm ái bảo vệ cột sống chuẩn khách sạn 5 sao.",
    },
  ],
  perks: [
    {
      id: "pk-1",
      icon: "truck",
      title: "Miễn Phí Giao Hàng",
      subtitle: "Giao lắp tận phòng ngủ miễn phí tại TP.HCM",
    },
    {
      id: "pk-2",
      icon: "gift",
      title: "Quà Tặng Đặc Biệt",
      subtitle: "Tặng cặp gối lông vũ khi mua giường & nệm",
    },
    {
      id: "pk-3",
      icon: "piggy",
      title: "Tiết Kiệm Khi Mua Ở Mona",
      subtitle: "Ưu đãi giá gốc trực tiếp từ xưởng sản xuất",
    },
  ],
  news: [
    {
      id: "news-1",
      title: "BÍ QUYẾT BỐ TRÍ GIƯỜNG NGỦ HƯỚNG BAN CÔNG ĐÓN ÁNH SÁNG TỰ NHIÊN",
      date: "14/05/2025",
      category: "PHÒNG NGỦ",
      excerpt:
        "Cách sắp xếp vị trí giường ngủ, rèm cản sáng và bàn trà thư giãn giúp phòng ngủ Master luôn thông thoáng và tràn đầy sinh khí [...]",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-2",
      title: "XU HƯỚNG THIẾT KẾ PHÒNG NGỦ TÂN CỔ ĐIỂN ẤM ÁP VÀ SANG TRỌNG",
      date: "10/05/2025",
      category: "NỘI THẤT",
      excerpt:
        "Sự kết hợp tinh tế giữa đầu giường bọc nệm chần nút, đèn ngủ ánh vàng ấm và chất liệu gỗ tự nhiên tạo nên không gian nghỉ ngơi đẳng cấp [...]",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-3",
      title: "GIẢI PHÁP TỦ QUẦN ÁO KỊCH TRẦN KẾT HỢP GIƯỜNG HỘC KÉO CHO CĂN HỘ NHỎ",
      date: "05/05/2025",
      category: "CĂN HỘ",
      excerpt:
        "Tối ưu hóa từng mét vuông diện tích phòng ngủ với hệ tủ áo cánh lùa và giường ngủ đa năng tích hợp ngăn chứa đồ thông minh [...]",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    },
  ],
  bottomBanner: {
    title: "NÂNG TẦM GIẤC NGỦ CỦA BẠN",
    subtitle:
      "Đặt lịch tư vấn thiết kế nội thất phòng ngủ đồng bộ giường - tủ áo - bàn trang điểm theo kích thước thực tế với báo giá ưu đãi tận xưởng.",
    ctaText: "MUA NGAY",
    backgroundImage:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1600&q=80",
  },
};
