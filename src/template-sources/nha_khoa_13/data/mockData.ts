import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa13CoreCard {
  id: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  priceRange: string;
}

export interface NhaKhoa13Data extends ClonedTemplateBaseData {
  heroFeatures: string[];
  coreServiceCards: NhaKhoa13CoreCard[];
  smileCases: Array<{
    id: string;
    customerName: string;
    serviceUsed: string;
    comment: string;
    image: string;
  }>;
  priceTable: Array<{
    id: string;
    service: string;
    origin: string;
    warranty: string;
    price: string;
  }>;
}

export const nhaKhoa13DefaultData: NhaKhoa13Data = {
  business: {
    name: "NHA KHOA NT",
    phone: ["1900 886 916", "0909 558 916"],
    email: ["tuvan@nhakhoant.vn", "cskh@nhakhoant.vn"],
    address: "458 Nguyễn Thị Minh Khai, Phường 2, Quận 3, TP. Hồ Chí Minh",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 1890,
    aboutTitle: "NHA KHOA NT — NÂNG TẦM NỤ CƯỜI VIỆT",
    aboutText: [
      "Với mục tiêu đem đến sự tiện nghi và chất lượng cao nhất cho khách hàng, Nha Khoa NT trang bị hệ thống ghế nha hiện đại, phòng vô trùng khép kín và cam kết mang lại những dịch vụ thẩm mỹ nụ cười tốt nhất."
    ],
  },
  hero: {
    eyebrow: "Nha khoa thẩm mỹ",
    title: "NHA KHOA NT",
    subtitle:
      "Với mục tiêu đem đến sự tiện nghi và chất lượng cao cho khách hàng, Nha Khoa NT trang bị đầy đủ các trang thiết bị khám chữa răng miệng không đau đớn và luôn nhận được khách hàng đánh giá cao những dịch vụ tốt nhất.",
    ctaText: "LIÊN HỆ TƯ VẤN",
    ctaLink: "#dich-vu-nt",
    backgroundImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1800&q=85",
  },
  heroFeatures: [
    "Thiết bị nha khoa hiện đại",
    "Bọc răng sứ thẩm mỹ",
    "Niềng răng trong suốt",
    "Trồng răng Implant",
    "Tẩy trắng răng Plasma",
    "Vệ sinh & Chăm sóc răng miệng",
  ],
  coreServiceCards: [
    {
      id: "nt-c1",
      title: "Bọc răng sứ",
      description:
        "Nha Khoa NT chuyên về lĩnh vực bọc răng sứ, cam kết sẽ đem lại nhiều lựa chọn cho khách hàng với nhiều sản phẩm tùy thuộc vào nhu cầu khách hàng.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
      featured: false,
      priceRange: "3,500,000 ₫ - 12,000,000 ₫ / răng",
    },
    {
      id: "nt-c2",
      title: "Mặt dán sứ Veneer",
      description:
        "Dán sứ Veneer tại Nha Khoa NT sẽ đem lại cho khách hàng một hàm răng đều đẹp, và sự tự tin cần thiết để bảo đảm một nụ cười rạng rỡ.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
      featured: true,
      priceRange: "6,500,000 ₫ - 10,000,000 ₫ / răng",
    },
    {
      id: "nt-c3",
      title: "Vệ sinh răng miệng",
      description:
        "Lấy cao răng siêu âm và đánh bóng men răng định kỳ giúp phòng ngừa viêm nướu, nha chu và giữ cho nụ cười luôn trắng sáng, hơi thở thơm mát.",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=700&q=80",
      featured: false,
      priceRange: "250,000 ₫ - 500,000 ₫ / liệu trình",
    },
    {
      id: "nt-c4",
      title: "Trồng răng Implant",
      description:
        "Phục hồi chân răng đã mất bằng trụ Titanium Thụy Sĩ, Hàn Quốc tích hợp xương bền chắc trọn đời và khôi phục 99% lực ăn nhai tự nhiên.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
      featured: false,
      priceRange: "14,000,000 ₫ - 32,000,000 ₫ / trụ",
    },
    {
      id: "nt-c5",
      title: "Niềng răng thẩm mỹ",
      description:
        "Chỉnh nha mắc cài sứ tự buộc và khay trong suốt Invisalign ứng dụng phác đồ dịch chuyển răng 3D biết trước kết quả điều trị.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
      featured: false,
      priceRange: "28,000,000 ₫ - 75,000,000 ₫ / ca",
    },
    {
      id: "nt-c6",
      title: "Tẩy trắng răng Laser",
      description:
        "Công nghệ hoạt hóa thuốc tẩy trắng bằng tia Laser Whitening thế hệ mới giúp răng trắng bật 3 - 4 tông chỉ sau 45 phút không ê buốt.",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
      featured: false,
      priceRange: "1,800,000 ₫ - 2,500,000 ₫ / trọn gói",
    },
  ],
  priceTable: [
    {
      id: "pt-1",
      service: "Răng toàn sứ Zirconia DDBio",
      origin: "Đức",
      warranty: "10 Năm",
      price: "4,000,000 ₫ / răng",
    },
    {
      id: "pt-2",
      service: "Răng toàn sứ Cercon HT chính hãng",
      origin: "Đức",
      warranty: "12 Năm",
      price: "5,500,000 ₫ / răng",
    },
    {
      id: "pt-3",
      service: "Mặt dán sứ siêu mỏng Veneer Emax",
      origin: "Thụy Sĩ",
      warranty: "15 Năm",
      price: "7,500,000 ₫ / răng",
    },
    {
      id: "pt-4",
      service: "Răng sứ Lava Plus 3M ESPE",
      origin: "Hoa Kỳ",
      warranty: "15 Năm",
      price: "8,500,000 ₫ / răng",
    },
    {
      id: "pt-5",
      service: "Cấy ghép trụ Implant Dentium / Straumann",
      origin: "Hàn Quốc / Thụy Sĩ",
      warranty: "Trọn đời",
      price: "14,500,000 ₫ / trụ",
    },
  ],
  smileCases: [
    {
      id: "sc-1",
      customerName: "Chị Nguyễn Hoàng Mai (Quận 3, TP.HCM)",
      serviceUsed: "16 Mặt dán sứ Veneer Emax",
      comment:
        "Mình rất ấn tượng với phòng khám Nha Khoa NT sạch sẽ, ghế nha êm ái. Bác sĩ mài cực kỳ ít và form răng tự nhiên ai gặp cũng khen.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sc-2",
      customerName: "Anh Trần Quốc Bảo (Quận 1, TP.HCM)",
      serviceUsed: "Cấy 2 trụ Implant Thụy Sĩ",
      comment:
        "Quá trình cấy trụ diễn ra nhanh trong 20 phút, hoàn toàn không sưng đau như mình lo lắng. Đội ngũ chăm sóc khách hàng rất chu đáo.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sc-3",
      customerName: "Bạn Lê Ngọc Hân (Quận Phú Nhuận)",
      serviceUsed: "Tẩy trắng răng Laser & Cạo vôi siêu âm",
      comment:
        "Răng mình bật lên 4 tông trắng trong sau đúng 1 buổi hẹn, không hề bị ê buốt khi uống nước mát.",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    },
  ],
  news: [
    {
      id: "nk13-n1",
      title:
        "Nên chọn Bọc răng sứ toàn phần hay Mặt dán sứ Veneer siêu mỏng cho răng thưa và xỉn màu?",
      date: "21/05/2025",
      category: "THẨM MỸ RĂNG SỨ",
      excerpt:
        "Mỗi phương pháp phục hình thẩm mỹ đều có chỉ định riêng biệt phụ thuộc vào mức độ khuyết điểm men răng và khớp cắn của từng khách hàng...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk13-n2",
      title:
        "Tại sao nên lấy cao răng và đánh bóng men răng định kỳ 6 tháng/lần tại Nha Khoa NT?",
      date: "15/05/2025",
      category: "CHĂM SÓC RĂNG",
      excerpt:
        "Mảng bám vôi răng tích tụ dưới nướu là nguyên nhân hàng đầu gây chảy máu chân răng, tụt lợi và tiêu xương ổ răng âm thầm...",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk13-n3",
      title:
        "Tiêu chuẩn vô trùng 1 chiều khép kín trên từng bộ tay khoan và ghế máy tại Nha Khoa NT",
      date: "08/05/2025",
      category: "AN TOÀN Y KHOA",
      excerpt:
        "Mỗi khách hàng đến thăm khám tại Nha Khoa NT đều được sử dụng 1 bộ dụng cụ tiệt trùng hấp sấy Autoclave đóng gói riêng biệt...",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
