import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat22Product {
  id: string;
  section: "fabric" | "decorative" | "luxury" | "office";
  category: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface NoiThat22Data extends ClonedTemplateBaseData {
  products: NoiThat22Product[];
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

export const noiThat22DefaultData: NoiThat22Data = {
  business: {
    name: "Mona Curtains",
    phone: ["0126 922 0162", "0909 777 162"],
    email: ["contact@monacurtains.vn", "baogia@monacurtains.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1050,
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText: [
      "Mona Curtains chuyên tư vấn, thiết kế và thi công trọn gói rèm vải 2 lớp cao cấp, rèm cầu vồng Hàn Quốc, rèm sáo nhôm văn phòng, rèm tự động thông minh và hệ cửa nhôm kính nội thất."
    ],
  },
  hero: {
    eyebrow: "SILK",
    title: "BED LINEN & CURTAINS",
    subtitle: "Mang mẫu rèm tư vấn và đo đạc thực tế miễn phí tận nhà trong 30 phút",
    ctaText: "MUA NGAY",
    ctaLink: "#rem-vai",
    backgroundImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
  },
  products: [
    // RÈM VẢI (4 items)
    {
      id: "nt22-f1",
      section: "fabric",
      category: "RÈM SÂN KHẤU",
      name: "RÈM SÂN KHẤU HỘI TRƯỜNG SK14",
      price: "785,200 ₫",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm vải nhung lụa cao cấp may yếm võng sang trọng cho sảnh tiệc và phòng khách lớn.",
    },
    {
      id: "nt22-f2",
      section: "fabric",
      category: "RÈM SÂN KHẤU",
      name: "RÈM SÂN KHẤU HỘI TRƯỜNG SK15",
      price: "958,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      description:
        "Chất liệu nhung đỏ tiêu âm, chống cháy lan đạt chuẩn hội trường và nhà hát.",
    },
    {
      id: "nt22-f3",
      section: "fabric",
      category: "RÈM SÂN KHẤU",
      name: "RÈM SÂN KHẤU HỘI TRƯỜNG SK16",
      price: "1,243,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
      description:
        "Thiết kế múi chiết đều đặn kết hợp thanh ray hợp kim nhôm trượt êm nhẹ.",
    },
    {
      id: "nt22-f4",
      section: "fabric",
      category: "RÈM SÂN KHẤU",
      name: "RÈM SÂN KHẤU HỘI TRƯỜNG SK19",
      price: "1,260,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm vải 2 lớp kết hợp voan thêu nghệ thuật và lớp vải cản sáng 100%.",
    },

    // RÈM TRANG TRÍ (4 items)
    {
      id: "nt22-d1",
      section: "decorative",
      category: "RÈM SỢI",
      name: "RÈM SỢI 4",
      price: "428,000 ₫",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm sợi chỉ kim tuyến vàng kem trang trí vách ngăn spa, thẩm mỹ viện và phòng khách.",
    },
    {
      id: "nt22-d2",
      section: "decorative",
      category: "RÈM SỢI",
      name: "RÈM SỢI 6",
      price: "358,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm sợi phối hoa voan tím pastel nhẹ nhàng cho phòng ngủ bé gái và studio.",
    },
    {
      id: "nt22-d3",
      section: "decorative",
      category: "RÈM SỢI",
      name: "RÈM SỢI 7",
      price: "682,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm hạt pha lê đan xen sợi lụa đỏ rượu vang tạo điểm nhấn phong thủy.",
    },
    {
      id: "nt22-d4",
      section: "decorative",
      category: "RÈM SỢI",
      name: "RÈM SỢI 8",
      price: "652,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description:
        "Sắc xanh biển mát mắt giúp không gian căn hộ thêm thoáng đãng.",
    },

    // RÈM CAO CẤP (4 items)
    {
      id: "nt22-l1",
      section: "luxury",
      category: "RÈM CHÂU ÂU",
      name: "RÈM CHÂU ÂU 02",
      price: "1,452,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm vải bố Bỉ nhập khẩu màu xanh Slate cản nắng, cách nhiệt điều hòa tuyệt đối.",
    },
    {
      id: "nt22-l2",
      section: "luxury",
      category: "RÈM CHÂU ÂU",
      name: "RÈM CHÂU ÂU 05",
      price: "1,248,000 ₫",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm tân cổ điển yếm hoàng gia dành cho biệt thự và sảnh khách sạn 5 sao.",
    },
    {
      id: "nt22-l3",
      section: "luxury",
      category: "RÈM CHÂU ÂU",
      name: "RÈM CHÂU ÂU 06",
      price: "1,563,000 ₫",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm vải lụa gấm Champagne tích hợp động cơ kéo rèm tự động điều khiển qua điện thoại.",
    },
    {
      id: "nt22-l4",
      section: "luxury",
      category: "RÈM CHÂU ÂU",
      name: "RÈM CHÂU ÂU 08",
      price: "1,680,000 ₫",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=600&q=80",
      description:
        "Hệ rèm âm trần 2 lớp vải Nhật Bản chống bám bụi và tia UV 99%.",
    },

    // RÈM VĂN PHÒNG (4 items)
    {
      id: "nt22-o1",
      section: "office",
      category: "RÈM SÁO NHÔM",
      name: "RÈM SÁO NHÔM SN12",
      price: "582,000 ₫",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm cuốn chống nắng và rèm sáo nhôm bản 2.5cm sơn tĩnh điện cho văn phòng hiện đại.",
    },
    {
      id: "nt22-o2",
      section: "office",
      category: "RÈM SÁO NHÔM",
      name: "RÈM SÁO NHÔM SN10",
      price: "429,000 ₫",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
      description:
        "Xoay lật lá nhôm 180 độ điều chỉnh ánh sáng linh hoạt và đảm bảo sự riêng tư.",
    },
    {
      id: "nt22-o3",
      section: "office",
      category: "RÈM SÁO NHÔM",
      name: "RÈM SÁO NHÔM SN09",
      price: "541,000 ₫",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      description:
        "Rèm sáo dọc và sáo nhôm chống nước 100% thích hợp cho vách kính tòa nhà.",
    },
    {
      id: "nt22-o4",
      section: "office",
      category: "RÈM SÁO NHÔM",
      name: "RÈM SÁO NHÔM SN08",
      price: "582,000 ₫",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
      description:
        "Độ bền cao, dễ dàng vệ sinh lau bụi và bảo hành phụ kiện dây kéo 3 năm.",
    },
  ],
  perks: [
    {
      id: "pk-1",
      icon: "truck",
      title: "Miễn Phí Giao Hàng",
      subtitle: "Mang mẫu tư vấn & lắp đặt miễn phí tận công trình",
    },
    {
      id: "pk-2",
      icon: "gift",
      title: "Quà Tặng Đặc Biệt",
      subtitle: "Tặng phụ kiện thanh treo hợp kim nhôm cao cấp",
    },
    {
      id: "pk-3",
      icon: "piggy",
      title: "Tiết Kiệm Khi Mua Ở Mona",
      subtitle: "Xưởng may rèm trực tiếp tiết kiệm tới 25% chi phí",
    },
  ],
  news: [
    {
      id: "news-1",
      title: "KINH NGHIỆM CHỌN RÈM CỬA",
      date: "16/05/2025",
      category: "CẨM NANG",
      excerpt:
        "Ô cửa kính trở nên duyên dáng hơn khi có một bộ rèm cửa phù hợp với màu sơn tường và ánh sáng tự nhiên của căn phòng [...]",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-2",
      title: "NGUYÊN TẮC SỬ DỤNG RÈM CỬA",
      date: "12/05/2025",
      category: "PHONG THỦY",
      excerpt:
        "Những chiếc rèm cửa không chỉ có mục đích che nắng, cản gió mà còn điều hòa vượng khí và mang lại giấc ngủ sâu cho gia chủ [...]",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-3",
      title: "LÀM ĐIỆU KHÔNG GIAN NGOẠI THẤT",
      date: "08/05/2025",
      category: "NGOẠI THẤT",
      excerpt:
        "Tự tay lựa chọn và bài trí những mảnh vải làm rèm ban công, hiên nhà chống thấm nước giúp góc thư giãn ngoài trời thêm thơ mộng [...]",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4573?auto=format&fit=crop&w=600&q=80",
    },
  ],
  bottomBanner: {
    title: "ĐẶT LỊCH MANG MẪU RÈM TƯ VẤN TẬN NHÀ",
    subtitle:
      "Chuyên viên kỹ thuật Mona Curtains sẽ mang hơn 500+ mẫu vải Bỉ, Hàn Quốc, Nhật Bản tới tận công trình để khảo sát đo đạc và lên báo giá hoàn toàn miễn phí.",
    ctaText: "MUA NGAY",
    backgroundImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
  },
};
