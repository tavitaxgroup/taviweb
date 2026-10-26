import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa11Equipment {
  id: string;
  category: "all" | "3d-printer" | "implant-vial" | "cadcam-block" | "scanner";
  categoryLabel: string;
  code: string;
  name: string;
  precisionSpec: string;
  price: string;
  image: string;
  description: string;
}

export interface NhaKhoa11WorkflowStep {
  step: string;
  title: string;
  spec: string;
  description: string;
}

export interface NhaKhoa11Data extends ClonedTemplateBaseData {
  labMetrics: Array<{
    id: string;
    value: string;
    unit: string;
    label: string;
  }>;
  equipment: NhaKhoa11Equipment[];
  workflowSteps: NhaKhoa11WorkflowStep[];
}

export const nhaKhoa11DefaultData: NhaKhoa11Data = {
  business: {
    name: "PHÚC THỊNH 3D DENTAL LAB",
    phone: ["1900 9414", "0903 889 414"],
    email: ["lab3d@phucthinhdental.vn", "implant@phucthinhdental.vn"],
    address: "Khu Công Nghệ Cao Sinh Học, Quận 9 (TP. Thủ Đức), TP.HCM",
    workingHours: "08:00 - 20:00 (Thứ 2 - Thứ 7)",
    rating: 5.0,
    reviewCount: 860,
    aboutTitle: "TRUNG TÂM IN 3D SINH HỌC & IMPLANT KỸ THUẬT SỐ PHÚC THỊNH",
    aboutText: [
      "Phúc Thịnh 3D Dental Lab & Implant Center sở hữu hệ thống phòng sạch vô trùng chuẩn ISO 13485, tủ bảo quản trụ Implant sinh học tia UV và dàn máy in 3D Laser SLA độ chính xác 15 micromet."
    ],
  },
  hero: {
    eyebrow: "ISO 13485 BIO-3D LAB & DIGITAL IMPLANT",
    title: "CÔNG NGHỆ IN 3D NHA KHOA & TRỤ IMPLANT SINH HỌC THẾ HỆ MỚI",
    subtitle:
      "Chế tác máng hướng dẫn phẫu thuật cấy ghép Implant 3D, răng sứ nguyên khối CAD/CAM và cung ứng bộ Kit trụ Implant ngâm dung dịch hoạt hóa bề mặt ưa nước.",
    ctaText: "KHÁM PHÁ LABO IN 3D",
    ctaLink: "#he-thong-in-3d",
    backgroundImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85",
  },
  labMetrics: [
    {
      id: "lm-1",
      value: "15",
      unit: "μm",
      label: "Sai số tia Laser máy in 3D SLA",
    },
    {
      id: "lm-2",
      value: "100%",
      unit: "UV-C",
      label: "Tủ bảo quản lọ trụ Implant vô khuẩn",
    },
    {
      id: "lm-3",
      value: "4",
      unit: "Giờ",
      label: "Thời gian in 3D máng định vị phẫu thuật",
    },
    {
      id: "lm-4",
      value: "2,500+",
      unit: "Phòng khám",
      label: "Đối tác nha khoa trên toàn quốc",
    },
  ],
  equipment: [
    {
      id: "nk11-eq1",
      category: "3d-printer",
      categoryLabel: "MÁY IN 3D SINH HỌC",
      code: "PT-3DPRO-X1",
      name: "Máy In 3D Nha Khoa Laser SLA BioPrint C500",
      precisionSpec: "Bước sóng 405nm • Độ phân giải 15 μm",
      price: "148,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
      description:
        "Buồng in 3D khép kín chuyên in máng hướng dẫn phẫu thuật Implant, mẫu hàm chỉnh nha và phục hình tạm.",
    },
    {
      id: "nk11-eq2",
      category: "implant-vial",
      categoryLabel: "TRỤ IMPLANT ƯA NƯỚC",
      code: "PT-HYDRO-VIAL",
      name: "Bộ 4 Lọ Trụ Implant Titanium Ngâm Dung Dịch Hoạt Hóa",
      precisionSpec: "Titanium Grade 5 • Bề mặt SLActive",
      price: "24,500,000 ₫ / bộ",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
      description:
        "Bảo quản trong lọ thủy tinh nắp xanh vô trùng chứa dung dịch NaCl đẳng trương giúp hút máu và tạo xương tức thì.",
    },
    {
      id: "nk11-eq3",
      category: "3d-printer",
      categoryLabel: "MÁNG PHẪU THUẬT 3D",
      code: "PT-SGUIDE-3D",
      name: "Máng Hướng Dẫn Phẫu Thuật Implant In 3D Cá Nhân Hóa",
      precisionSpec: "Nhựa y tế Class IIa Biocompatible",
      price: "3,200,000 ₫ / hàm",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
      description:
        "Định vị chính xác hướng, độ sâu và góc nghiêng của mũi khoan Implant mà không cần rạch lật vạt nướu.",
    },
    {
      id: "nk11-eq4",
      category: "cadcam-block",
      categoryLabel: "PHÔI SỨ KỸ THUẬT SỐ",
      code: "PT-ZIR-3DMULTI",
      name: "Phôi Sứ Đa Lớp 3D Pro Multilayer Zirconia",
      precisionSpec: "Độ bền uốn 1200 MPa • Độ trong 49%",
      price: "4,600,000 ₫ / đĩa",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
      description:
        "Phôi sứ chuyển màu 6 lớp tự nhiên chuyên dùng cho máy tiện CAD/CAM 5 trục chế tác cầu răng toàn hàm.",
    },
    {
      id: "nk11-eq5",
      category: "scanner",
      categoryLabel: "MÁY QUÉT TRONG MIỆNG",
      code: "PT-SCAN-5D",
      name: "Máy Quét Dấu Răng Kỹ Thuật Số 3D Intraoral AI",
      precisionSpec: "Tốc độ 30 FPS • Xuất file STL/PLY trực tiếp",
      price: "215,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
      description:
        "Lấy dấu răng kỹ thuật số trong 60 giây thay thế hoàn toàn cao su lấy dấu truyền thống.",
    },
    {
      id: "nk11-eq6",
      category: "implant-vial",
      categoryLabel: "DUNG DỊCH SINH HỌC",
      code: "PT-BIO-BONE",
      name: "Lọ Huyết Tương & Xương Ghép Nhân Tạo Sinh Học 3D",
      precisionSpec: "Hạt Beta-TCP & Hydroxyapatite vô trùng",
      price: "3,850,000 ₫ / lọ",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
      description:
        "Vật liệu ghép xương tổng hợp cấu trúc vi xốp tương tự xương người hỗ trợ nâng xoang và tái tạo xương ổ răng.",
    },
    {
      id: "nk11-eq7",
      category: "cadcam-block",
      categoryLabel: "NHỰA IN 3D Y TẾ",
      code: "PT-RESIN-BIO",
      name: "Nhựa Resin In 3D Răng Tạm & Máng Chỉnh Nha Sinh Học",
      precisionSpec: "Chứng nhận FDA & CE Medical Grade",
      price: "5,400,000 ₫ / chai 1kg",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=700&q=80",
      description:
        "Kháng mài mòn, không mùi và an toàn tuyệt đối khi lưu giữ lâu dài trong môi trường khoang miệng.",
    },
    {
      id: "nk11-eq8",
      category: "scanner",
      categoryLabel: "TỦ VÔ TRÙNG LED UV",
      code: "PT-CABINET-UV",
      name: "Tủ Bảo Quản Khí Cụ & Trụ Implant Ánh Sáng Xanh UV-C",
      precisionSpec: "Kiểm soát nhiệt độ 18°C & Độ ẩm 40%",
      price: "42,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80",
      description:
        "Hệ thống tủ kính LED xanh chuyên dụng cho phòng mổ Implant và Labo kỹ thuật số.",
    },
  ],
  workflowSteps: [
    {
      step: "01",
      title: "Thu Thập Dữ Liệu DICOM & STL",
      spec: "CT ConeBeam 3D + Quét Trong Miệng",
      description:
        "Đồng bộ file chụp cắt lớp xương hàm 3D và file quét bề mặt răng nướu vào phần mềm thiết kế.",
    },
    {
      step: "02",
      title: "Thiết Kế Phác Đồ AI 3D",
      spec: "Phần mềm 3Shape & Exocad",
      description:
        "Giả lập vị trí cấy trụ Implant tối ưu tránh ống thần kinh và thiết kế hình thể răng sứ chuẩn khớp cắn.",
    },
    {
      step: "03",
      title: "In 3D Laser & Tiện CAD/CAM",
      spec: "Buồng in SLA vô trùng",
      description:
        "In 3D máng hướng dẫn phẫu thuật độ chính xác 15 micromet và tiện mão sứ nguyên khối.",
    },
    {
      step: "04",
      title: "Cấy Ghép & Phục Hình Tức Thì",
      spec: "Không lật vạt • Không sưng đau",
      description:
        "Bác sĩ đặt trụ Implant qua máng định vị 3D chỉ trong 15 phút và gắn răng tức thì.",
    },
  ],
  news: [
    {
      id: "nk11-n1",
      title:
        "Ứng dụng công nghệ in 3D sinh học trong tái tạo cấu trúc xương hàm và máng định vị Implant",
      date: "20/05/2025",
      category: "CÔNG NGHỆ IN 3D",
      excerpt:
        "Máy in 3D Laser SLA thế hệ mới cho phép in trực tiếp các mô hình giải phẫu phức tạp và máng hướng dẫn phẫu thuật với sai số dưới 15 micromet...",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk11-n2",
      title:
        "Vì sao trụ Implant ngâm trong lọ dung dịch hoạt hóa ưa nước giúp rút ngắn một nửa thời gian lành thương?",
      date: "15/05/2025",
      category: "VẬT LIỆU IMPLANT",
      excerpt:
        "Bề mặt Titanium ưa nước được bảo quản trong lọ dung dịch vô trùng ngăn chặn sự bám dính cacbon từ không khí, giúp tế bào xương phát triển ngay lập tức...",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "nk11-n3",
      title:
        "Tiêu chuẩn phòng Labo nha khoa kỹ thuật số ISO 13485 tại Trung tâm Phúc Thịnh",
      date: "10/05/2025",
      category: "TIÊU CHUẨN LABO",
      excerpt:
        "Hệ thống tủ bảo quản chiếu tia UV xanh và quy trình kiểm định chất lượng kỹ thuật số giúp mỗi phục hình xuất xưởng đều có mã QR truy xuất nguồn gốc...",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
