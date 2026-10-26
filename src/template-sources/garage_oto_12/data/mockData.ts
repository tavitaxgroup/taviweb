import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto12Product {
  id: string;
  title: string;
  price: string;
  category: "ban-chay" | "noi-bat" | "gia-tot";
  group: "non-34" | "non-fullface" | "phu-kien";
  image: string;
}

export interface GarageOto12Data extends ClonedTemplateBaseData {
  policies: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  promoBanners: {
    mainTitle: string;
    mainSubtitle: string;
    mainImage: string;
    topRightTitle: string;
    topRightBadge: string;
    topRightImage: string;
    bottomRightTitle: string;
    bottomRightSubtitle: string;
    bottomRightImage: string;
  };
  products: GarageOto12Product[];
  promoPoster: {
    code: string;
    title: string;
    subtitle: string;
    image: string;
  };
}

export const garageOto12DefaultData: GarageOto12Data = {
  business: {
    name: "Nón Sơn Auto",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["cskh@nonsonauto.vn", "info@nonsonauto.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:30 - 21:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 620,
    aboutTitle: "CHỌN BẠN ĐỒNG HÀNH TRÊN MỌI CUNG ĐƯỜNG",
    aboutText: [
      "Nón Sơn Auto là hệ thống phân phối mũ bảo hiểm phân khối lớn, đồ bảo hộ mô tô, tai nghe Bluetooth intercom và phụ kiện độ xe chính hãng hàng đầu Việt Nam.",
      "Mỗi sản phẩm đều trải qua quy trình kiểm định chất lượng chịu lực nghiêm ngặt đạt chuẩn Quatest 3 và DOT quốc tế, đồng hành an toàn và phong cách cùng các Biker trên mọi hành trình."
    ],
  },
  hero: {
    eyebrow: "ROYAL HELMET & MOTOR GEAR",
    title: "CHỌN BẠN\nĐỒNG HÀNH",
    subtitle: "M-139",
    description: "Bộ sưu tập mũ bảo hiểm kính âm, Fullface Carbon & Đồ bảo hộ mô tô cao cấp chính hãng.",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1800&q=85",
  },
  policies: [
    {
      id: "pol-1",
      title: "FREESHIP TOÀN QUỐC",
      description:
        "Miễn phí vận chuyển toàn quốc cho mọi đơn hàng mũ bảo hiểm và đồ bảo hộ mô tô từ 500.000đ.",
      icon: "truck",
    },
    {
      id: "pol-2",
      title: "HOÀN TIỀN 100%",
      description:
        "Cam kết chính hãng 100%, bảo hành khóa chốt & lớp sơn 24 tháng, hoàn tiền nếu phát hiện hàng nhái.",
      icon: "refresh",
    },
    {
      id: "pol-3",
      title: "HỖ TRỢ 24/7",
      description:
        "Đội ngũ kỹ thuật viên tư vấn chọn size vòng đầu chuẩn xác và hỗ trợ lắp đặt tai nghe Bluetooth 24/7.",
      icon: "headset",
    },
  ],
  promoBanners: {
    mainTitle: "Đồ phượt - đồ bảo hộ motor",
    mainSubtitle: "Giáp bảo hộ tay chân • Găng tay da • Mũ bảo hiểm lật hàm",
    mainImage:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85",
    topRightTitle: "ĐỔI CŨ LẤY MỚI",
    topRightBadge: "GIẢM ĐẾN 79%",
    topRightImage:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    bottomRightTitle: "NÓN BẢO HIỂM\nTAI NGHE BLUETOOTH",
    bottomRightSubtitle: "Kết nối đàm thoại rảnh tay chống ồn DSP cho Biker",
    bottomRightImage:
      "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=600&q=80",
  },
  products: [
    {
      id: "p-1",
      title: "Royal M138 V.3 Fullface",
      price: "1,500,000 ₫",
      category: "ban-chay",
      group: "non-fullface",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-2",
      title: "Royal H20C Design Viền Đồng",
      price: "590,000 ₫",
      category: "ban-chay",
      group: "non-34",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-3",
      title: "Royal M137 Kính Chắn Kép",
      price: "1,350,000 ₫",
      category: "ban-chay",
      group: "non-fullface",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-4",
      title: "Royal M08 V.1 Thể Thao",
      price: "1,050,000 ₫",
      category: "ban-chay",
      group: "non-34",
      image:
        "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-5",
      title: "Royal H1 Classic Lót Da",
      price: "840,000 ₫",
      category: "ban-chay",
      group: "non-34",
      image:
        "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-6",
      title: "Royal M14 V.2 Tem Đua",
      price: "1,300,000 ₫",
      category: "noi-bat",
      group: "non-34",
      image:
        "https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-7",
      title: "Royal M28 Carbon Siêu Nhẹ",
      price: "2,950,000 ₫",
      category: "noi-bat",
      group: "non-fullface",
      image:
        "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-8",
      title: "Kính thẳng chống tia UV400",
      price: "180,000 ₫",
      category: "gia-tot",
      group: "phu-kien",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-9",
      title: "Kính mặt nạ Biker chống bụi",
      price: "350,000 ₫",
      category: "gia-tot",
      group: "phu-kien",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-10",
      title: "Kính Bubble tráng gương",
      price: "180,000 ₫",
      category: "gia-tot",
      group: "phu-kien",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "p-11",
      title: "Kính dây Goggles Địa Hình",
      price: "190,000 ₫",
      category: "gia-tot",
      group: "phu-kien",
      image:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    },
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Hoàng Minh Tuấn",
      role: "Trưởng nhóm Saigon Cafe Racer Club",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      content:
        "Lớp lót kháng khuẩn êm ái, vỏ ABS nguyên sinh cực kỳ chắc chắn và nước sơn viền đồng tinh xảo. Đội ngũ Nón Sơn Auto tư vấn size rất chuẩn xác và giao hàng cực nhanh!",
    },
  ],
  promoPoster: {
    code: "M20B",
    title: "VIỀN ĐỒNG LỊCH LÃM",
    subtitle: "THIẾT KẾ THỜI TRANG",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80",
  },
  news: [
    {
      id: "nw-1",
      title: "SỰ KIỆN TẠI ĐẠI NAM DỊP LỄ 30/04 & 01/05",
      date: "08 Tháng Ba, 2026",
      excerpt:
        "Hàng trăm mẫu mũ bảo hiểm Fullface Carbon và đồ bảo hộ đường trường được trưng bày cùng chương trình trải nghiệm đường đua...",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "ĐỔI MŨ BẢO HIỂM CŨ LẤY MỚI TRỢ GIÁ 100K",
      date: "14 Tháng Ba, 2026",
      excerpt:
        "Chương trình thu cũ đổi mới áp dụng trên toàn hệ thống cửa hàng giúp các Biker nâng cấp mũ bảo hiểm đạt chuẩn an toàn mới nhất...",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "KHÁM PHÁ NHỮNG CUNG ĐƯỜNG TREKKING ĐẸP NHẤT",
      date: "22 Tháng Ba, 2026",
      excerpt:
        "Kinh nghiệm chuẩn bị giáp bảo hộ, kính chắn gió chống sương mù và bộ đàm liên lạc khi chạy tour đèo núi dài ngày...",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    },
  ],
  clients: [
    { id: "cl-1", name: "cubico" },
    { id: "cl-2", name: "HEXAGON" },
    { id: "cl-3", name: "KING HELMET" },
    { id: "cl-4", name: "coffee riders" },
    { id: "cl-5", name: "mates gear" },
  ],
};

export const mockData = garageOto12DefaultData;
export default garageOto12DefaultData;
