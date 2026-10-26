import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa12ServiceCard {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  bhytSupport: string;
}

export interface NhaKhoa12Doctor {
  id: string;
  name: string;
  degree: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface NhaKhoa12PriceRow {
  id: string;
  serviceName: string;
  unit: string;
  standardPrice: string;
  bhytPrice: string;
}

export interface NhaKhoa12Data extends ClonedTemplateBaseData {
  heroTabs: string[];
  hospitalServices: NhaKhoa12ServiceCard[];
  doctors: NhaKhoa12Doctor[];
  priceList: NhaKhoa12PriceRow[];
}

export const nhaKhoa12DefaultData: NhaKhoa12Data = {
  business: {
    name: "BỆNH VIỆN SÀI GÒN ĐỒNG THÁP",
    phone: ["0277 388 5678", "1900 866 915"],
    email: ["info@bvsaygondongthap.vn", "khamchuyenkhoa@sgdt.vn"],
    address: "303 Nguyễn Sinh Sắc, Phường 2, TP. Sa Đéc, Tỉnh Đồng Tháp",
    workingHours: "THỨ 2 - CHỦ NHẬT (7:00 - 17:00)",
    rating: 4.9,
    reviewCount: 2150,
    aboutTitle: "BỆNH VIỆN CHUYÊN KHOA RĂNG HÀM MẶT & MẮT SÀI GÒN ĐỒNG THÁP",
    aboutText: [
      "Bệnh viện Chuyên khoa Răng Hàm Mặt & Mắt Sài Gòn Đồng Tháp quy tụ đội ngũ Tiến sĩ, Bác sĩ Chuyên khoa II đầu ngành từ TP.HCM, trang bị hệ thống vi phẫu hiện đại và thanh toán Bảo Hiểm Y Tế thông tuyến toàn quốc."
    ],
  },
  hero: {
    eyebrow: "Sáng Nụ Cười - Sáng Mắt",
    title: "Sáng Trọn Niềm Tin",
    subtitle:
      "Quy tụ các chuyên gia Răng Hàm Mặt & Nhãn Khoa uy tín đầu ngành, tận tâm chăm sóc sức khỏe người dân miền Tây.",
    ctaText: "ĐẶT LỊCH KHÁM BHYT",
    ctaLink: "#cac-dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85",
  },
  heroTabs: [
    "Sáng Nụ Cười Sáng Trọn Niềm Tin",
    "Phẫu Thuật Implant & Răng Hàm Mặt",
    "Khám Bảo Hiểm Y Tế Thông Tuyến",
  ],
  hospitalServices: [
    {
      id: "nk12-s1",
      title: "Cấy ghép Implant vi phẫu",
      category: "KHOA RĂNG HÀM MẶT",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
      description:
        "Phục hồi răng mất toàn diện bằng trụ Titanium chính hãng tích hợp xương nhanh, an toàn cho người cao tuổi.",
      bhytSupport: "Hỗ trợ chụp phim CT 3D",
    },
    {
      id: "nk12-s2",
      title: "Phẫu thuật răng khôn siêu âm",
      category: "TIỂU PHẪU RHM",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      description:
        "Nhổ răng khôn mọc lệch ngầm bằng máy siêu âm Piezotome êm ái, lành thương nhanh và thanh toán BHYT.",
      bhytSupport: "Thanh toán BHYT 80%",
    },
    {
      id: "nk12-s3",
      title: "Bọc răng sứ & Phục hình",
      category: "THẨM MỸ NỤ CƯỜI",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
      description:
        "Phục hình răng sứ thẩm mỹ Zirconia, Cercon HT ăn nhai chắc khỏe và bảo tồn tủy răng tối đa.",
      bhytSupport: "Bảo hành chính hãng 10 năm",
    },
    {
      id: "nk12-s4",
      title: "Phẫu thuật Phaco & Tật khúc xạ",
      category: "CHUYÊN KHOA MẮT",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      description:
        "Phẫu thuật Phaco điều trị đục thủy tinh thể và tầm soát võng mạc, glôcôm bằng hệ thống kính hiển vi Carl Zeiss Đức.",
      bhytSupport: "BHYT thông tuyến toàn quốc",
    },
  ],
  doctors: [
    {
      id: "doc-1",
      name: "TTƯT. BS.CKII Nguyễn Minh Hoàng",
      degree: "Giám đốc Chuyên môn",
      specialty: "Chuyên gia Phẫu thuật Răng Hàm Mặt & Implant",
      experience: "28 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "doc-2",
      name: "TS.BS Trần Thanh Thảo",
      degree: "Trưởng khoa Phục hình",
      specialty: "Chuyên gia Nội nha & Nha khoa Thẩm mỹ",
      experience: "19 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "doc-3",
      name: "BS.CKII Lê Quốc Tuấn",
      degree: "Trưởng liên chuyên khoa",
      specialty: "Chuyên gia Vi phẫu Mắt & Hàm Mặt",
      experience: "22 năm kinh nghiệm",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
    },
  ],
  priceList: [
    {
      id: "pr-1",
      serviceName: "Khám chuyên khoa Răng Hàm Mặt / Nhãn khoa",
      unit: "Lượt",
      standardPrice: "150,000 ₫",
      bhytPrice: "Miễn phí / Đồng chi trả BHYT",
    },
    {
      id: "pr-2",
      serviceName: "Nhổ răng khôn mọc lệch bằng sóng siêu âm Piezotome",
      unit: "Răng",
      standardPrice: "1,500,000 ₫",
      bhytPrice: "550,000 ₫ (Có BHYT)",
    },
    {
      id: "pr-3",
      serviceName: "Điều trị tủy răng công nghệ trâm máy X-Smart",
      unit: "Răng",
      standardPrice: "1,200,000 ₫",
      bhytPrice: "420,000 ₫ (Có BHYT)",
    },
    {
      id: "pr-4",
      serviceName: "Cấy ghép trụ Implant Hàn Quốc / Pháp / Thụy Sĩ",
      unit: "Trụ",
      standardPrice: "13,500,000 ₫",
      bhytPrice: "Tặng răng sứ & Chụp CT 3D",
    },
    {
      id: "pr-5",
      serviceName: "Phẫu thuật Phaco thay thủy tinh thể nhân tạo",
      unit: "Mắt",
      standardPrice: "8,500,000 ₫",
      bhytPrice: "2,900,000 ₫ (Có BHYT)",
    },
  ],
  news: [
    {
      id: "nk12-n1",
      title:
        "Chương trình khám tầm soát bệnh lý Răng Hàm Mặt & Đục thủy tinh thể miễn phí cho người cao tuổi",
      date: "19/05/2025",
      category: "HOẠT ĐỘNG CỘNG ĐỒNG",
      excerpt:
        "Bệnh viện Sài Gòn Đồng Tháp phối hợp tổ chức đoàn bác sĩ khám, tư vấn và cấp phát thuốc miễn phí cho hơn 500 cô chú cao tuổi...",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk12-n2",
      title:
        "Hướng dẫn thủ tục hưởng 100% quyền lợi Bảo Hiểm Y Tế thông tuyến khi tiểu phẫu răng và phẫu thuật mắt",
      date: "12/05/2025",
      category: "THÔNG TIN BHYT",
      excerpt:
        "Người bệnh chỉ cần mang theo Căn cước công dân gắn chip hoặc ứng dụng VNeID / VssID để được giải quyết quyền lợi BHYT nhanh chóng...",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk12-n3",
      title:
        "Ứng dụng máy chụp cắt lớp CT ConeBeam 3D và kính hiển vi phẫu thuật thế hệ mới tại bệnh viện",
      date: "05/05/2025",
      category: "CÔNG NGHỆ Y KHOA",
      excerpt:
        "Hệ thống chẩn đoán hình ảnh kỹ thuật số giúp bác sĩ phát hiện sớm các tổn thương chân răng, ống thần kinh hàm dưới và đáy mắt...",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
