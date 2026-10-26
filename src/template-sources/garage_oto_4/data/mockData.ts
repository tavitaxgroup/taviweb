import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface AutoSerCoreService {
  id: string;
  title: string;
  description: string;
  iconType: "maintenance" | "paint" | "detailing" | "rescue";
  priceEstimate: string;
  checklist: string[];
}

export interface AutoSerProgressMetric {
  id: string;
  label: string;
  percentage: number;
}

export interface GarageOto4Data extends ClonedTemplateBaseData {
  coreServicesSection: {
    title: string;
    items: AutoSerCoreService[];
  };
  whyChooseUsSection: {
    title: string;
    teamImage: string;
    paragraphs: string[];
    progressBars: AutoSerProgressMetric[];
  };
  gallerySection: {
    title: string;
    images: Array<{
      id: string;
      title: string;
      category: string;
      image: string;
    }>;
  };
  carWashBanner: {
    title: string;
    description: string;
    ctaText: string;
    backgroundImage: string;
  };
  emergencyCallout: {
    text: string;
    phone: string;
  };
  footerGallery: string[];
}

export const garageOto4DefaultData: GarageOto4Data = {
  business: {
    name: "AUTOSER CAR SERVICE",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["cskh@autoser.vn", "dichvu@autoser.vn"],
    address: "319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6 (9h00 - 18h00)",
    rating: 4.9,
    reviewCount: 1420,
    aboutTitle: "Trung Tâm Bảo Hành, Đồng Sơn & Sửa Chữa Xe Hơi Chuyên Nghiệp",
    aboutText: [
      "Chúng tôi biết rằng sự trung thực và minh bạch, cùng với dịch vụ khách hàng đáng tin cậy và thân thiện, là điều thực sự tạo dựng niềm tin của khách hàng.",
    ],
  },
  hero: {
    eyebrow: "GARAGE BẢO DƯỠNG & ĐỒNG SƠN TIÊU CHUẨN HÃNG",
    title: "AUTOSER CAR SERVICE",
    subtitle: "TRUNG TÂM BẢO DƯỠNG SỬA CHỮA Ô TÔ",
    ctaText: "Dịch vụ chúng tôi",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=85",
  },
  coreServicesSection: {
    title: "DỊCH VỤ CỦA CHÚNG TÔI",
    items: [
      {
        id: "as-1",
        title: "Bảo dưỡng, sửa chữa",
        description:
          "Quy trình bảo dưỡng xe ô tô vô cùng cần thiết để bảo đảm chiếc xe ô tô luôn vận hành hiệu quả.",
        iconType: "maintenance",
        priceEstimate: "Từ 650.000đ",
        checklist: [
          "Thay dầu nhớt động cơ tổng hợp & lọc nhớt chính hãng",
          "Chẩn đoán lỗi điện tử hộp đen ECU bằng máy chuyên hãng",
          "Bảo dưỡng hệ thống phanh ABS, thước lái và gầm máy",
        ],
      },
      {
        id: "as-2",
        title: "Đồng sơn",
        description:
          "Quy trình bảo dưỡng xe ô tô vô cùng cần thiết để bảo đảm chiếc xe ô tô luôn vận hành hiệu quả.",
        iconType: "paint",
        priceEstimate: "Từ 900.000đ / vết",
        checklist: [
          "Gò phục hồi thân vỏ bằng máy rút tôn hiện đại",
          "Pha sơn vi tính chuẩn mã màu gốc nhà sản xuất 100%",
          "Sơn sấy trong phòng hấp tiêu chuẩn không bụi",
        ],
      },
      {
        id: "as-3",
        title: "Trang trí, làm đẹp",
        description:
          "Quy trình bảo dưỡng xe ô tô vô cùng cần thiết để bảo đảm chiếc xe ô tô luôn vận hành hiệu quả.",
        iconType: "detailing",
        priceEstimate: "Từ 1.200.000đ",
        checklist: [
          "Đánh bóng hiệu chỉnh bề mặt sơn 3 bước & phủ Ceramic 9H",
          "Vệ sinh nội thất hơi nước nóng & khử mùi Ozone",
          "Dán phim cách nhiệt chống tia UV & cách âm chống ồn",
        ],
      },
      {
        id: "as-4",
        title: "Cứu hộ, bảo hiểm",
        description:
          "Quy trình bảo dưỡng xe ô tô vô cùng cần thiết để bảo đảm chiếc xe ô tô luôn vận hành hiệu quả.",
        iconType: "rescue",
        priceEstimate: "Hỗ trợ 24/7",
        checklist: [
          "Cứu hộ giao thông, kích bình ắc quy & kéo xe 24/7 nội thành",
          "Tư vấn giám định và hoàn tất hồ sơ bồi thường bảo hiểm",
          "Cam kết phụ tùng thay thế chính hãng bảo hành dài hạn",
        ],
      },
    ],
  },
  whyChooseUsSection: {
    title: "VÌ SAO CHỌN CHÚNG TÔI",
    teamImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
    paragraphs: [
      "AutoSer đã quy tụ đội ngũ kỹ sư, kỹ thuật viên xuất thân từ Đại học Bách Khoa, Đại học Sư Phạm Kỹ Thuật, Đại học Giao Thông Vận Tải, Cao đẳng Cao Thắng... đã nhiều năm tham gia vào các hoạt động sản xuất kinh doanh, hậu mãi của các liên doanh lắp ráp ô tô tại Việt Nam. Tập thể nhân viên và lãnh đạo AutoSer luôn theo sát tình hình thị trường ô tô, phấn đấu học hỏi và hoàn thiện mình từng bước nâng cao các kỹ năng cần thiết nhằm phục vụ quý khách ngày một tốt hơn, hoàn thiện hơn.",
      "Sau nhiều năm phát triển, trung tâm đã từng bước hoàn thiện và trang bị đầy đủ các thiết bị tiêu chuẩn, chuyên dùng để phục vụ sửa chữa cho tất cả các loại xe ô tô từ phổ thông đến cao cấp như Lexus, Acura, BMW, Mercedes, Audi, Toyota, Ford...",
    ],
    progressBars: [
      { id: "pb-1", label: "Chất lượng dịch vụ", percentage: 100 },
      { id: "pb-2", label: "Kinh nghiệm", percentage: 90 },
      { id: "pb-3", label: "Bảo hành lâu dài", percentage: 80 },
    ],
  },
  gallerySection: {
    title: "MỘT SỐ HÌNH ẢNH",
    images: [
      {
        id: "img-1",
        title: "Thay dầu nhớt động cơ tổng hợp cao cấp",
        category: "Bảo dưỡng định kỳ",
        image:
          "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "img-2",
        title: "Cân chỉnh thước lái & Kiểm tra khung gầm trên cầu nâng",
        category: "Kỹ thuật gầm máy",
        image:
          "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "img-3",
        title: "Kiểm tra hệ thống điện & Ắc quy khoang máy",
        category: "Chẩn đoán điện tử",
        image:
          "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  carWashBanner: {
    title: "HỆ THỐNG RỬA XE TỰ ĐỘNG",
    description:
      "Hệ thống được trang bị công nghệ tiên tiến, mạnh mẽ sẽ làm sạch xe bạn chỉ trong vài phút. Tích hợp xà phòng bọt tuyết chuyên dụng tẩy sạch mọi vết bẩn & chất làm bóng.",
    ctaText: "Xem dịch vụ",
    backgroundImage:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1800&q=85",
  },
  testimonials: [
    {
      id: "rev-1",
      author: "Chị Minh Thư",
      role: "Chủ xe Mercedes C300",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      content:
        "Xin gửi lời cảm ơn chân thành nhất đến những kỹ thuật viên tại trung tâm đã trở thành người bạn đồng hành, tư vấn minh bạch và chăm sóc chiếc xe của gia đình tôi luôn vận hành êm ái trên mọi hành trình.",
    },
    {
      id: "rev-2",
      author: "Anh Hoàng Nam",
      role: "Chủ xe BMW X5",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ đồng sơn và phục hồi va quẹt tại đây cực kỳ sắc nét, màu sơn tiệp 100% với màu sơn zin. Thủ tục hỗ trợ bảo hiểm nhanh gọn giúp tôi tiết kiệm rất nhiều thời gian.",
    },
    {
      id: "rev-3",
      author: "Chị Ngọc Lan",
      role: "Chủ xe Mazda CX-5",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      content:
        "Phòng chờ sạch sẽ, cố vấn dịch vụ báo giá chi tiết từng hạng mục trước khi làm. Đặc biệt hệ thống rửa xe tự động và vệ sinh khoang máy rất sạch và nhanh chóng.",
    },
  ],
  news: [
    {
      id: "nw-1",
      title: "Nên hay không nên sử dụng hai chân khi lái xe số tự động?",
      date: "18/02/2026",
      category: "Kỹ năng lái xe",
      excerpt:
        "Khi sử dụng cả hai chân trên xe số tự động, tài xế sẽ rất dễ nhầm lẫn chân ga và chân phanh trong tình huống khẩn cấp...",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "nw-2",
      title: "Vì sao đèn bên phụ sáng hơn đèn bên lái trên xe ô tô?",
      date: "16/02/2026",
      category: "Kiến thức ô tô",
      excerpt:
        "Thiết kế chùm sáng lệch giúp người lái quan sát rõ biển báo bên lề đường phải mà không gây chói mắt xe đi ngược chiều...",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "nw-3",
      title: "Những dấu hiệu thông báo hộp số tự động cần bảo dưỡng ngay",
      date: "12/02/2026",
      category: "Bảo dưỡng định kỳ",
      excerpt:
        "Sau một thời gian sử dụng, nếu hộp số có hiện tượng chuyển số giật, trễ hoặc rò rỉ dầu dưới gầm thì cần kiểm tra ngay...",
      image:
        "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: "nw-4",
      title: "Sử Dụng Điều Hòa Ô Tô Đúng Cách Giúp Bền Lốc Lạnh",
      date: "08/02/2026",
      category: "Mẹo chăm sóc xe",
      excerpt:
        "Nếu sử dụng không đúng cách, hệ thống điều hòa ô tô sẽ nhanh hỏng lốc nén và tiêu tốn nhiên liệu nhiều hơn bình thường...",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80",
    },
  ],
  emergencyCallout: {
    text: "Nếu bạn gặp khó khăn gì về xe hãy gọi ngay cho chúng tôi:",
    phone: "076 922 0162",
  },
  footerGallery: [
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=75",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=400&q=75",
  ],
};
