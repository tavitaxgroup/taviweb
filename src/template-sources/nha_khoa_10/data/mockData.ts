import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa10Product {
  id: string;
  category: "all" | "nuoc-suc-mieng" | "gel-nuou" | "trang-rang" | "implant-care";
  categoryLabel: string;
  name: string;
  dosageOrSpec: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  image: string;
  description: string;
}

export interface NhaKhoa10Service {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  image: string;
  highlights: string[];
}

export interface NhaKhoa10Data extends ClonedTemplateBaseData {
  trustPillars: Array<{
    id: string;
    title: string;
    subtitle: string;
  }>;
  products: NhaKhoa10Product[];
  clinicalServices: NhaKhoa10Service[];
}

export const nhaKhoa10DefaultData: NhaKhoa10Data = {
  business: {
    name: "PHARCECO DENTAL",
    phone: ["1900 636 813", "0908 779 813"],
    email: ["duocnhakhoa@pharceco.vn", "cskh@pharceco.vn"],
    address: "286 Nguyễn Trọng Tuyển, Phường 10, Quận Phú Nhuận, TP.HCM",
    workingHours: "07:30 - 21:30 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 1540,
    aboutTitle: "VIỆN NHA KHOA THẨM MỸ & DƯỢC NHA KHOA PHARCECO",
    aboutText: [
      "Pharceco Dental kết hợp mô hình Viện Nha Khoa Thẩm Mỹ chuẩn quốc tế và Hệ Thống Nhà Thuốc Dược Nha Khoa GPP, cung cấp giải pháp điều trị và chăm sóc răng miệng chuyên sâu an toàn tuyệt đối."
    ],
  },
  hero: {
    eyebrow: "GPP DENTAL PHARMACY & CLINIC",
    title: "DƯỢC NHA KHOA CHÍNH HÃNG & THẨM MỸ NỤ CƯỜI SINH HỌC",
    subtitle:
      "Tư vấn 1:1 cùng Bác sĩ Răng Hàm Mặt và Dược sĩ đại học. Đầy đủ sản phẩm chăm sóc sau cấy Implant, niềng răng, điều trị nha chu và thẩm mỹ răng sứ.",
    ctaText: "ĐẶT LỊCH KHÁM & TƯ VẤN DƯỢC",
    ctaLink: "#san-pham-duoc-nha",
    backgroundImage:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1800&q=85",
  },
  trustPillars: [
    {
      id: "tp-1",
      title: "Chuẩn GPP & Bộ Y Tế",
      subtitle: "100% dược phẩm & vật liệu nha khoa có số công bố chính hãng",
    },
    {
      id: "tp-2",
      title: "Bác Sĩ & Dược Sĩ 1:1",
      subtitle: "Kê toa và hướng dẫn chăm sóc răng miệng chuyên biệt",
    },
    {
      id: "tp-3",
      title: "Bảo Hành Men Răng",
      subtitle: "Phác đồ phục hồi nướu và chống ê buốt chuẩn lâm sàng",
    },
    {
      id: "tp-4",
      title: "Giao Nhanh 2H Nội Thành",
      subtitle: "Đóng gói chuẩn y tế giao tận nhà trên toàn quốc",
    },
  ],
  products: [
    {
      id: "nk10-p1",
      category: "nuoc-suc-mieng",
      categoryLabel: "DƯỢC NHA KHOA",
      name: "Nước súc miệng Perio-Aid 0.12% Chlorhexidine",
      dosageOrSpec: "Chai 250ml • Tây Ban Nha",
      price: "195,000 ₫",
      oldPrice: "225,000 ₫",
      badge: "BÁN CHẠY",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      description:
        "Dung dịch sát khuẩn chuyên dụng trước và sau phẫu thuật cấy ghép Implant, nhổ răng khôn.",
    },
    {
      id: "nk10-p2",
      category: "gel-nuou",
      categoryLabel: "ĐIỀU TRỊ NƯỚU",
      name: "Gel bôi dịu nướu & tái tạo mô Gengigel Hyaluronic",
      dosageOrSpec: "Tuýp 20ml • Ý",
      price: "240,000 ₫",
      badge: "KHUYÊN DÙNG",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
      description:
        "Chứa Acid Hyaluronic phân tử lượng cao giúp lành thương nhanh vết loét nhiệt miệng và viêm nha chu.",
    },
    {
      id: "nk10-p3",
      category: "trang-rang",
      categoryLabel: "TÁI KHOÁNG MEN",
      name: "Kem bôi tái khoáng men răng GC Tooth Mousse Plus",
      dosageOrSpec: "Tuýp 40g • Nhật Bản",
      price: "410,000 ₫",
      oldPrice: "460,000 ₫",
      badge: "-11%",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description:
        "Bổ sung Canxi và Phosphate sinh học RECALDENT giảm ê buốt tức thì sau tẩy trắng răng.",
    },
    {
      id: "nk10-p4",
      category: "implant-care",
      categoryLabel: "BỔ SUNG CANXI",
      name: "Viên uống OsteoDental Canxi Nano + Vitamin D3 K2",
      dosageOrSpec: "Hộp 60 viên • Đức",
      price: "385,000 ₫",
      image:
        "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80",
      description:
        "Hỗ trợ tăng mật độ xương hàm và đẩy nhanh quá trình tích hợp xương quanh trụ Implant.",
    },
    {
      id: "nk10-p5",
      category: "trang-rang",
      categoryLabel: "TRẮNG RĂNG Y KHOA",
      name: "Bộ ống Gel ngậm trắng răng Opalescence PF 16%",
      dosageOrSpec: "Hộp 4 ống • Ultradent Mỹ",
      price: "1,150,000 ₫",
      oldPrice: "1,350,000 ₫",
      badge: "FDA MỸ",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=600&q=80",
      description:
        "Công thức chứa Potassium Nitrate & Fluoride làm trắng răng tại nhà an toàn không ê buốt.",
    },
    {
      id: "nk10-p6",
      category: "nuoc-suc-mieng",
      categoryLabel: "CHỈNH NHA",
      name: "Nước súc miệng OrthoKin Fluoride & Cetylpyridinium",
      dosageOrSpec: "Chai 500ml • Tây Ban Nha",
      price: "215,000 ₫",
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
      description:
        "Ngăn ngừa đốm trắng mất khoáng và sâu răng quanh mắc cài cho người đang niềng răng.",
    },
    {
      id: "nk10-p7",
      category: "gel-nuou",
      categoryLabel: "NHẠY CẢM",
      name: "Kem đánh răng dược liệu SensiKin chống ê buốt cấp tốc",
      dosageOrSpec: "Tuýp 75ml • Tây Ban Nha",
      price: "165,000 ₫",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
      description:
        "5% Potassium Nitrate khóa dẫn truyền thần kinh cảm giác ê buốt ở cổ răng bị mòn.",
    },
    {
      id: "nk10-p8",
      category: "implant-care",
      categoryLabel: "CHĂM SÓC KẼ RĂNG",
      name: "Bộ bàn chải kẽ & chỉ tơ nha khoa TePe Implant Care",
      dosageOrSpec: "Vỉ 8 cây • Thụy Điển",
      price: "145,000 ₫",
      badge: "THỤY ĐIỂN",
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
      description:
        "Sợi lông phủ nhựa mềm chuyên biệt làm sạch cổ trụ Implant và gầm cầu răng sứ.",
    },
  ],
  clinicalServices: [
    {
      id: "cs-1",
      title: "Điều Trị Nha Chu & Tái Tạo Nướu Sinh Học",
      subtitle: "Phác đồ kết hợp Laser Diode & Gel Hyaluronic",
      price: "1,200,000 ₫ / liệu trình",
      duration: "45 phút",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
      highlights: [
        "Cạo vôi răng siêu âm không đau dưới nướu",
        "Khử khuẩn túi nha chu bằng dung dịch Perio-Aid",
        "Tặng bộ dược phẩm chăm sóc nướu tại nhà 14 ngày",
      ],
    },
    {
      id: "cs-2",
      title: "Tẩy Trắng Răng Khoáng Chất Kép Pharceco",
      subtitle: "Hoạt hóa Plasma lạnh + Tái khoáng GC Tooth Mousse",
      price: "2,400,000 ₫ / trọn gói",
      duration: "60 phút",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
      highlights: [
        "Bật sáng 3 - 5 tông màu tự nhiên trong 1 lần hẹn",
        "Ủ gel chống ê buốt chuyên sâu trước và sau tẩy",
        "Tặng máng duy trì màu răng cá nhân hóa",
      ],
    },
    {
      id: "cs-3",
      title: "Bọc Răng Sứ Sinh Học & Mặt Dán Veneer",
      subtitle: "Tương thích mô nướu tuyệt đối, không đen viền lợi",
      price: "5,500,000 ₫ / răng",
      duration: "2 lần hẹn",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
      highlights: [
        "Thiết kế đường cười kỹ thuật số bảo tồn răng gốc",
        "Phôi sứ Emax / Lava 3M chính hãng có thẻ từ",
        "Tầm soát và chăm sóc dược nha khoa miễn phí 5 năm",
      ],
    },
  ],
  news: [
    {
      id: "nk10-n1",
      title:
        "Hướng dẫn sử dụng nước súc miệng chứa Chlorhexidine đúng cách sau nhổ răng khôn",
      date: "18/05/2025",
      category: "DƯỢC NHA KHOA",
      excerpt:
        "Chlorhexidine 0.12% là hoạt chất vàng trong kiểm soát mảng bám vi khuẩn sau tiểu phẫu răng miệng, nhưng cần lưu ý thời gian sử dụng...",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk10-n2",
      title:
        "Cách phân biệt ê buốt răng do mòn cổ răng và ê buốt do viêm tủy răng sớm",
      date: "14/05/2025",
      category: "BỆNH LÝ RĂNG",
      excerpt:
        "Nhiều khách hàng tự ý mua thuốc giảm đau khi răng ê buốt mà chưa rõ nguyên nhân. Bác sĩ Pharceco sẽ giúp bạn nhận diện chính xác...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk10-n3",
      title:
        "Bổ sung Canxi và Vitamin D3-K2 thế nào để trụ Implant tích hợp xương nhanh?",
      date: "09/05/2025",
      category: "DINH DƯỠNG",
      excerpt:
        "Chế độ vi chất dinh dưỡng đóng vai trò quan trọng đối với mật độ xương hàm ở người trung niên và cao tuổi khi trồng răng Implant...",
      image:
        "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
