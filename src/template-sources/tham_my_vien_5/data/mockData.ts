import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface ThamMyVien5Data extends ClonedTemplateBaseData {
  topCategories: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  promoBanner: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    ctaText: string;
    features: Array<{
      id: string;
      title: string;
      icon: string;
    }>;
  };
  benefitsSection: {
    eyebrow: string;
    title: string;
    description: string;
    centerImage: string;
    leftItems: Array<{
      num: string;
      title: string;
      description: string;
    }>;
    rightItems: Array<{
      num: string;
      title: string;
      description: string;
    }>;
  };
  clinicalSection: {
    eyebrow: string;
    title: string;
    description: string;
    videos: Array<{
      id: string;
      title: string;
      duration: string;
      image: string;
    }>;
  };
  dailyDeal: {
    title: string;
    description: string;
    ctaText: string;
    image: string;
    tabs: string[];
  };
  guarantees: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  gallery: string[];
}

export const thamMyVien5DefaultData: ThamMyVien5Data = {
  business: {
    name: "Sắc Đẹp 24",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@sacdep24.vn", "cskh@sacdep24.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "08:30 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 380,
    aboutTitle: "Giải Pháp Chống Lão Hóa Tự Nhiên Cho Da",
    aboutText: [
      "Sắc Đẹp 24 là viện thẩm mỹ & thương hiệu dược mỹ phẩm thiên nhiên cao cấp, tiên phong ứng dụng chiết xuất thực vật hữu cơ kết hợp công nghệ sinh học chuẩn Thụy Sĩ.",
      "Công thức dịu nhẹ, phù hợp với mọi loại da, giúp làm mờ nếp nhăn, cấp ẩm đa tầng và tái tạo làn da trẻ trung rạng rỡ từ sâu bên trong."
    ],
  },
  hero: {
    eyebrow: "VIỆN THẨM MỸ & DƯỢC MỸ PHẨM THIÊN NHIÊN",
    title: "Sản Phẩm\nTừ Thiên Nhiên",
    subtitle:
      "Tinh hoa thảo mộc hữu cơ chuẩn quốc tế giúp nuôi dưỡng, phục hồi và trẻ hóa làn da an toàn, lành tính cho phụ nữ Việt.",
    ctaText: "MUA NGAY",
    ctaLink: "#san-pham",
    secondaryCtaText: "LIÊN HỆ NGAY",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=1800&q=85",
  },
  topCategories: [
    {
      id: "cat-1",
      title: "Serum Sáng Da",
      description:
        "Làn da mịn màng với dưỡng chất tự nhiên, thẩm thấu sâu vào từng tế bào da.",
      icon: "droplet",
    },
    {
      id: "cat-2",
      title: "Xịt Khoáng Dưỡng Da",
      description:
        "Cấp ẩm tức thì, làm dịu kích ứng và mang lại cảm giác tươi mát suốt ngày dài.",
      icon: "spray",
    },
    {
      id: "cat-3",
      title: "Son Dưỡng Môi",
      description:
        "Giữ đôi môi mềm mại, hồng hào và căng mọng với tinh dầu thực vật nguyên chất.",
      icon: "flower",
    },
    {
      id: "cat-4",
      title: "Dầu Dưỡng Da Mặt",
      description:
        "Nuôi dưỡng da chuyên sâu, khóa ẩm tự nhiên giúp da căng bóng và mịn màng.",
      icon: "pipette",
    },
  ],
  promoBanner: {
    eyebrow: "SẢN PHẨM TỪ TỰ NHIÊN",
    title: "Giải Pháp Chống Lão Hóa Tự Nhiên Cho Da",
    description:
      "Công thức dịu nhẹ, phù hợp với mọi loại da. Làm mờ nếp nhăn, tăng sinh collagen tự nhiên và tái tạo làn da trẻ trung.",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=85",
    ctaText: "XEM SẢN PHẨM",
    features: [
      { id: "pf-1", title: "Kết cấu mỏng nhẹ", icon: "feather" },
      { id: "pf-2", title: "Không mùi hương nhân tạo", icon: "ban" },
      { id: "pf-3", title: "Sản Phẩm Được Chứng Nhận", icon: "award" },
      { id: "pf-4", title: "Phục hồi hư tổn da", icon: "sparkles" },
    ],
  },
  services: [
    {
      id: "sp-1",
      title: "SERUM NUÔI DƯỠNG SÁNG DA",
      category: "Kem dưỡng da thảo dược",
      description: "Dược mỹ phẩm thiên nhiên • 30ml • Cấp ẩm & làm đều màu da",
      price: "419,000 ₫",
      icon: "500,000 ₫",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-2",
      title: "BỘ ĐÔI PHỤC HỒI DA CHUYÊN SÂU",
      category: "Kem dưỡng da thảo dược",
      description: "Dược mỹ phẩm thiên nhiên • Tái tạo hàng rào bảo vệ da",
      price: "369,000 ₫",
      icon: "500,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-3",
      title: "COMBO MỜ NÁM & TÀN NHANG",
      category: "Tinh dầu trẻ hóa",
      description: "Dược mỹ phẩm thiên nhiên • Ức chế melanin & dưỡng trắng",
      price: "359,000 ₫",
      icon: "513,000 ₫",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-4",
      title: "TINH CHẤT CÂN BẰNG SẮC TỐ DA",
      category: "Tinh dầu trẻ hóa",
      description: "Dược mỹ phẩm thiên nhiên • Se khít lỗ chân lông tự nhiên",
      price: "499,000 ₫",
      icon: "599,000 ₫",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-5",
      title: "COMBO DƯỠNG ĐÊM TÁI TẠO DA",
      category: "Kem dưỡng da thảo dược",
      description: "Dược mỹ phẩm thiên nhiên • Phục hồi tế bào da ban đêm",
      price: "319,000 ₫",
      icon: "419,000 ₫",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-6",
      title: "BỘ DƯỠNG CĂNG BÓNG GLOW SKIN",
      category: "Kem dưỡng da thảo dược",
      description: "Dược mỹ phẩm thiên nhiên • Cấp nước đa tầng suốt 24h",
      price: "359,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-7",
      title: "SERUM NGỪA MỤN THẢO MỘC",
      category: "Dược mỹ phẩm Ayurveda",
      description: "Dược mỹ phẩm thiên nhiên • Làm dịu nốt mụn & kháng khuẩn",
      price: "659,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-8",
      title: "HUYẾT THANH TRẺ HÓA BAN ĐÊM",
      category: "Tinh dầu trẻ hóa",
      description: "Dược mỹ phẩm thiên nhiên • Giảm nhăn khóe mắt & rãnh cười",
      price: "469,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-9",
      title: "TINH DẦU LÀM DỊU DA NHẠY CẢM",
      category: "Tinh dầu trẻ hóa",
      description: "Dược mỹ phẩm thiên nhiên • Chiết xuất hoa cúc & hạt gai dầu",
      price: "289,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-10",
      title: "SERUM KHÓA ẨM CHUYÊN SÂU",
      category: "Dược mỹ phẩm Ayurveda",
      description: "Dược mỹ phẩm thiên nhiên • Hyaluronic Acid thực vật tinh khiết",
      price: "456,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-11",
      title: "BỘ ĐÔI DƯỠNG TRẮNG HỮU CƠ",
      category: "Dược mỹ phẩm Ayurveda",
      description: "Dược mỹ phẩm thiên nhiên • Nuôi dưỡng da trắng hồng tự nhiên",
      price: "654,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sp-12",
      title: "TINH CHẤT PHỤC HỒI CHUYÊN SÂU",
      category: "Dược mỹ phẩm Ayurveda",
      description: "Dược mỹ phẩm thiên nhiên • Dành cho da sau liệu trình thẩm mỹ",
      price: "499,000 ₫",
      icon: "",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    },
  ],
  benefitsSection: {
    eyebrow: "LỢI ÍCH CỦA SẢN PHẨM THẢO DƯỢC",
    title: "Các Sản Phẩm Làm Đẹp\nChứa Tinh Chất Thảo Mộc",
    description:
      "Công thức tự nhiên giúp nuôi dưỡng làn da, mang lại cảm giác mềm mại và tươi mới. Phù hợp với mọi loại da, kể cả làn da nhạy cảm nhất.",
    centerImage:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    leftItems: [
      {
        num: "01",
        title: "100% CHIẾT XUẤT THỰC VẬT",
        description:
          "Sản phẩm hoàn toàn từ tự nhiên, không chứa hóa chất độc hại. Mang lại làn da khỏe mạnh và an toàn.",
      },
      {
        num: "02",
        title: "ĐÃ KIỂM NGHIỆM DA LIỄU",
        description:
          "Mỗi sản phẩm đều trải qua quá trình kiểm nghiệm kỹ càng để đảm bảo chất lượng và hiệu quả.",
      },
      {
        num: "03",
        title: "KIỂM NGHIỆM BỞI BÊN THỨ BA",
        description:
          "Đảm bảo tính minh bạch và độ tin cậy từ các tổ chức kiểm định chất lượng độc lập quốc tế.",
      },
      {
        num: "04",
        title: "KHÔNG THỬ NGHIỆM TRÊN ĐỘNG VẬT",
        description:
          "Cam kết đạo đức sinh thái, thuần chay 100%, không gây hại đến động vật trong quá trình sản xuất.",
      },
    ],
    rightItems: [
      {
        num: "05",
        title: "BAO BÌ CHẤT LƯỢNG THÂN THIỆN",
        description:
          "Sử dụng bao bì thủy tinh tái chế thân thiện với môi trường, giảm thiểu tác động xấu đến thiên nhiên.",
      },
      {
        num: "06",
        title: "CÔNG THỨC ĐỘC QUYỀN",
        description:
          "Sự kết hợp đặc biệt giữa các thành phần thảo dược quý hiếm mang lại hiệu quả tối ưu cho làn da.",
      },
      {
        num: "07",
        title: "KHÔNG CHỨA PARABEN",
        description:
          "An toàn tuyệt đối cho làn da, không chứa các chất bảo quản có hại thường gặp trong mỹ phẩm.",
      },
      {
        num: "08",
        title: "CHẤT LƯỢNG ĐƯỢC KIỂM ĐỊNH",
        description:
          "Mỗi lô sản phẩm đều được kiểm tra nghiêm ngặt theo tiêu chuẩn CGMP Bộ Y Tế trước khi xuất xưởng.",
      },
    ],
  },
  clinicalSection: {
    eyebrow: "QUY TRÌNH CHĂM SÓC SẮC ĐẸP",
    title: "Sản Phẩm Đã Qua Thử Nghiệm\nLâm Sàng",
    description:
      "Mang lại hiệu quả rõ rệt với công thức được kiểm nghiệm và chứng nhận. Tự tin chăm sóc làn da mỗi ngày với những sản phẩm chất lượng hàng đầu.",
    videos: [
      {
        id: "vid-1",
        title: "Quy trình chiết xuất tinh dầu thảo mộc lạnh giữ trọn hoạt chất",
        duration: "03:24",
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "vid-2",
        title: "Thử nghiệm độ thẩm thấu và cấp ẩm trên làn da nhạy cảm",
        duration: "02:45",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "vid-3",
        title: "Phác đồ kết hợp serum thảo dược trong liệu trình trẻ hóa tại Spa",
        duration: "04:12",
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  dailyDeal: {
    title: "Ưu Đãi Trong Ngày",
    description:
      "Công thức độc quyền giúp nuôi dưỡng làn da, tái tạo và phục hồi hiệu quả. Nhanh tay sở hữu sản phẩm với giá ưu đãi.",
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1608248597359-0e6d526a6828?auto=format&fit=crop&w=900&q=85",
    tabs: [
      "KEM DƯỠNG DA THẢO DƯỢC",
      "TINH DẦU TRẺ HÓA",
      "DƯỢC MỸ PHẨM AYURVEDA",
    ],
  },
  clients: [
    { id: "cl-1", name: "KING BOTANICS FARMS" },
    { id: "cl-2", name: "NORTH HERBAL COMPANY" },
    { id: "cl-3", name: "PACIFIC LEAF ORGANIC" },
    { id: "cl-4", name: "MARYJANE BOTANICALS" },
  ],
  news: [
    {
      id: "news-1",
      date: "10/05/2026",
      category: "CHĂM SÓC DA HỮU CƠ",
      title: "Bí Quyết Trẻ Hóa Làn Da Nhờ Tinh Chất Thảo Mộc Tự Nhiên",
      excerpt:
        "Khám phá cơ chế chống oxy hóa mạnh mẽ của các hoạt chất thực vật giúp làm chậm quá trình lão hóa và phục hồi hàng rào ẩm tự nhiên...",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-2",
      date: "18/05/2026",
      category: "SERUM DƯỠNG DA",
      title: "Sữa Dưỡng Chứa Tinh Dầu Thực Vật Giúp Cấp Ẩm Da Như Thế Nào?",
      excerpt:
        "Phân tích chuyên sâu từ bác sĩ da liễu về khả năng khóa ẩm đa tầng và làm dịu kích ứng của dòng kem dưỡng thảo dược thế hệ mới...",
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "news-3",
      date: "25/05/2026",
      category: "KIẾN THỨC DƯỢC MỸ PHẨM",
      title: "Vì Sao Cần Kiểm Tra Kỹ Bảng Thành Phần Khi Chọn Mỹ Phẩm Thiên Nhiên?",
      excerpt:
        "Hướng dẫn nhận biết các chứng nhận hữu cơ uy tín quốc tế và cách chọn sản phẩm không chứa Paraben, hương liệu tổng hợp cho da nhạy cảm...",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    },
  ],
  guarantees: [
    {
      id: "g-1",
      title: "GIAO HÀNG TRONG NGÀY",
      description:
        "Cung cấp dịch vụ giao hàng nhanh chóng, đảm bảo sản phẩm đến tay bạn trong thời gian sớm nhất.",
      icon: "truck",
    },
    {
      id: "g-2",
      title: "HỖ TRỢ KHÁCH HÀNG 24/7",
      description:
        "Đội ngũ chuyên viên tư vấn da liễu luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào.",
      icon: "headset",
    },
    {
      id: "g-3",
      title: "THANH TOÁN AN TOÀN 100%",
      description:
        "Cam kết bảo mật thông tin và giao dịch của khách hàng, mang đến sự yên tâm tuyệt đối.",
      icon: "shield",
    },
    {
      id: "g-4",
      title: "ĐỔI TRẢ MIỄN PHÍ TRONG 30 NGÀY",
      description:
        "Khách hàng có thể đổi trả sản phẩm trong vòng 30 ngày nếu không hài lòng về chất lượng.",
      icon: "refresh",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80",
  ],
};

export const mockData = thamMyVien5DefaultData;
export default thamMyVien5DefaultData;
