import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface DichVuVeSinh8CategoryCircle {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

export interface DichVuVeSinh8ServiceItem {
  id: string;
  name: string;
  category: string;
  price: string;
  unit: string;
  description: string;
  image: string;
}

export interface DichVuVeSinh8Data extends ClonedTemplateBaseData {
  heroStones: string[];
  stoneCategoriesTitle: string;
  stoneCategoriesSubtitle: string;
  categoryCircles: DichVuVeSinh8CategoryCircle[];
  gardenServices: DichVuVeSinh8ServiceItem[];
  processSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
}

export const dichVuVeSinh8DefaultData: DichVuVeSinh8Data = {
  business: {
    name: "MONA HOMEGREEN",
    phone: ["076 922 0162", "0909 688 162"],
    email: ["tuvan@monahomegreen.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "07:30 - 19:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 276,
    aboutTitle: "Chăm Sóc Sân Vườn, Đá Cảnh & Vệ Sinh Biệt Thự Sinh Thái",
    aboutText: [
      "Đá phong thủy, tiểu cảnh sân vườn và không gian cây xanh quanh biệt thự đều mang nguồn năng lượng hộ mệnh khi được bài trí đúng cách và chăm sóc sạch sẽ mỗi ngày. Đây là hệ thống tư vấn chăm sóc cảnh quan sân vườn, đá cảnh và vệ sinh biệt thự chuyên sâu từ đội ngũ nghệ nhân hàng đầu Việt Nam."
    ]
  },
  hero: {
    eyebrow: "CẢNH QUAN SÂN VƯỜN & ĐÁ PHONG THỦY BIỆT THỰ",
    title: "ĐÁ HỘ MỆNH & SÂN VƯỜN XANH",
    subtitle:
      "Đá phong thủy và tiểu cảnh sân vườn trong khuôn viên biệt thự đều có tác dụng hộ mệnh,聚 khí sinh tài khi luôn sạch sẽ và hợp mệnh chủ nhân. Tư vấn thiết kế, vệ sinh bảo dưỡng cảnh quan miễn phí từ chuyên gia hàng đầu Việt Nam.",
    ctaText: "MUA NGAY",
    ctaLink: "#dich-vu-san-vuon",
    backgroundImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85"
  },
  heroStones: [
    "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  ],
  stoneCategoriesTitle: "Các loại đá & Hạng mục sân vườn",
  stoneCategoriesSubtitle:
    "Từ thiên nhiên dưới lòng đất và trên mặt đất có rất nhiều các loại khoáng chất, đá cảnh và thảm thực vật quý giá. Chúng được phân chia và chăm sóc theo từng quy chuẩn biệt thự riêng biệt.",
  categoryCircles: [
    {
      id: "cc-1",
      name: "Đá Cảnh & Sỏi Tự Nhiên",
      subtitle: "Thanh tẩy, đánh bóng đá sân vườn & tiểu cảnh khô",
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-2",
      name: "Đá Phong Thủy Hộ Mệnh",
      subtitle: "Chăm sóc năng lượng đá thạch anh & vật phẩm trấn trạch",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-3",
      name: "Cây Cảnh & Hồ Cá Koi",
      subtitle: "Cắt tỉa Bonsai, vệ sinh hồ cá Koi & thảm cỏ biệt thự",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
    }
  ],
  gardenServices: [
    {
      id: "gs-1",
      name: "Chăm Sóc & Cắt Tỉa Sân Vườn Biệt Thự",
      category: "CẢNH QUAN XANH",
      price: "1,800,000 ₫",
      unit: "/ gói tháng",
      description:
        "Cắt tỉa tạo dáng cây cảnh nghệ thuật, chăm sóc thảm cỏ Nhật, bón phân hữu cơ và phòng trừ sâu bệnh sinh học an toàn.",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gs-2",
      name: "Vệ Sinh Tiểu Cảnh Đá & Hồ Cá Koi",
      category: "TIỂU CẢNH ĐÁ",
      price: "1,500,000 ₫",
      unit: "/ lần",
      description:
        "Làm sạch rêu tảo trên đá cảnh tự nhiên, sục rửa hệ thống lọc vi sinh hồ cá Koi và cân bằng độ pH nước tiêu chuẩn.",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gs-3",
      name: "Phục Hồi & Đánh Bóng Đá Tự Nhiên",
      category: "ĐÁ CẢNH & SÀN ĐÁ",
      price: "120,000 ₫",
      unit: "/ m²",
      description:
        "Đánh bóng bậc tam cấp đá Granite, sàn đá cẩm thạch Marble và phủ nano chống thấm cho đá ốp mặt tiền biệt thự.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gs-4",
      name: "Tổng Vệ Sinh Biệt Thự Nghỉ Dưỡng",
      category: "VỆ SINH BIỆT THỰ",
      price: "3,200,000 ₫",
      unit: "/ trọn gói",
      description:
        "Làm sạch chuyên sâu kính mặt dựng trên cao, vệ sinh nội thất gỗ quý, giặt rèm thảm và khử khuẩn bằng hơi nước nóng.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gs-5",
      name: "Bố Trí Đá Thạch Anh Phong Thủy Sân Vườn",
      category: "ĐÁ HỘ MỆNH",
      price: "4,500,000 ₫",
      unit: "/ bộ tiểu cảnh",
      description:
        "Tư vấn chọn đá thạch anh tím, thạch anh xanh và đá nguyên khối hợp bản mệnh gia chủ, thanh tẩy năng lượng định kỳ.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "gs-6",
      name: "Vệ Sinh Hồ Bơi & Sân Thượng Biệt Thự",
      category: "VỆ SINH BIỆT THỰ",
      price: "1,200,000 ₫",
      unit: "/ lần",
      description:
        "Hút cặn đáy hồ bơi, chà rửa sàn gỗ ngoài trời và chăm sóc hệ thống vườn đứng ban công biệt thự.",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
    }
  ],
  processSteps: [
    {
      step: "01",
      title: "Khảo Sát Sân Vườn & Đá Cảnh",
      description:
        "Nghệ nhân và kỹ thuật viên trực tiếp khảo sát hiện trạng cây cảnh, đá tự nhiên và diện tích biệt thự."
    },
    {
      step: "02",
      title: "Tư Vấn Giải Pháp Sinh Thái",
      description:
        "Đề xuất phác đồ chăm sóc cây xanh, thanh tẩy đá hộ mệnh và hóa chất vệ sinh hữu cơ an toàn."
    },
    {
      step: "03",
      title: "Thi Công Tỉ Mỉ & Chuyên Nghiệp",
      description:
        "Thực hiện cắt tỉa, đánh bóng đá, vệ sinh hồ cá và làm sạch toàn bộ khuôn viên theo tiêu chuẩn 5 sao."
    },
    {
      step: "04",
      title: "Nghiệm Thu & Bảo Dưỡng Định Kỳ",
      description:
        "Bàn giao không gian xanh sạch tinh khiết và đồng hành chăm sóc định kỳ hàng tuần/hàng tháng."
    }
  ],
  news: [
    {
      id: "hg-n1",
      title: "Cách Thanh Tẩy Và Bảo Dưỡng Đá Phong Thủy Sân Vườn Đúng Chuẩn",
      date: "18/10/2026",
      category: "Đá Cảnh & Phong Thủy",
      excerpt:
        "Hướng dẫn làm sạch bụi bẩn và nạp lại năng lượng tự nhiên cho các khối đá thạch anh trưng bày tại biệt thự...",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hg-n2",
      title: "5 Lưu Ý Khi Chăm Sóc Cỏ Nhật Và Cây Bonsai Mùa Mưa",
      date: "12/10/2026",
      category: "Chăm Sóc Sân Vườn",
      excerpt:
        "Kỹ thuật thoát nước rễ, tỉa cành thông thoáng và ngăn ngừa nấm rêu trên thân cây cảnh lâu năm...",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hg-n3",
      title: "Quy Trình Đánh Bóng Và Phủ Bảo Vệ Sàn Đá Marble Biệt Thự",
      date: "05/10/2026",
      category: "Vệ Sinh Biệt Thự",
      excerpt:
        "Khôi phục độ bóng gương nguyên bản cho sàn đá tự nhiên mà không làm mòn bề mặt khoáng chất...",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export const defaultData = dichVuVeSinh8DefaultData;
export default dichVuVeSinh8DefaultData;
