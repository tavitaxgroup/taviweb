import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface TuanKietRenderComparison {
  id: string;
  projectTitle: string;
  softwareStack: string;
  renderTime: string;
  polyCount: string;
  wireframeDesc: string;
  finalRenderDesc: string;
  wireframeImage: string;
  finalRenderImage: string;
}

export interface TuanKietArchCourse {
  id: string;
  code: string;
  title: string;
  track: "DIỄN HỌA NỘI THẤT" | "KIẾN TRÚC NGOẠI THẤT" | "BIM & BẢN VẼ KỸ THUẬT";
  duration: string;
  software: string[];
  tuition: string;
  level: string;
  summary: string;
  modules: string[];
  image: string;
}

export interface TuanKietStudentWork {
  id: string;
  studentName: string;
  courseName: string;
  projectType: string;
  renderEngine: string;
  lightingSetup: string;
  image: string;
}

export interface TuanKietMentor {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  avatar: string;
}

export interface XayDung35Data extends ClonedTemplateBaseData {
  header: {
    brandMain: string;
    brandSub: string;
    navItems: { label: string; href: string }[];
    ctaLabel: string;
  };
  dualMonitorShowcase: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    comparisons: TuanKietRenderComparison[];
  };
  coursesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    courses: TuanKietArchCourse[];
  };
  studentGallerySection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    works: TuanKietStudentWork[];
  };
  mentorsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    mentors: TuanKietMentor[];
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const defaultData: XayDung35Data = {
  business: {
    name: "TUẤN KIỆT ACADEMY",
    tagline: "Học Viện Đào Tạo Kiến Trúc Sư Thực Chiến & Diễn Họa 3D Chuẩn Quốc Tế",
    phone: ["0938 765 888", "028 6688 3535"],
    email: ["tuyensinh@tuankietacademy.vn", "studio@tuankietacademy.vn"],
    address: "Tầng 5, Tòa nhà Архитектура Studio, 215 Điện Biên Phủ, Quận Bình Thạnh, TP.HCM",
    workingHours: "08:30 – 21:30 (Thứ 2 – Chủ Nhật) • Phòng Máy Render Workstation RTX 4090",
    rating: 4.9,
    reviewCount: 680,
    aboutTitle: "TỪ PHÁC THẢO BẢN VẼ 2D ĐẾN TUYỆT TÁC DIỄN HỌA 3D SIÊU THỰC",
    aboutText: [
      "Tuấn Kiệt Academy là trung tâm đào tạo thực chiến hàng đầu dành cho sinh viên Kiến trúc – Nội thất, họa viên 3D và kỹ sư xây dựng, kết hợp chặt chẽ giữa tư duy cấu tạo vật liệu thực tế và công nghệ Render Photorealistic đỉnh cao.",
    ],
  },
  header: {
    brandMain: "TUẤN KIỆT",
    brandSub: "3D ARCHITECTURE & BIM ACADEMY",
    navItems: [
      { label: "TRANG CHỦ", href: "#trang-chu" },
      { label: "WIREFRAME VS RENDER", href: "#dual-monitor" },
      { label: "KHÓA HỌC 3D & BIM", href: "#khoa-hoc" },
      { label: "ĐỒ ÁN HỌC VIÊN", href: "#do-an" },
      { label: "GIẢNG VIÊN KTS", href: "#giang-vien" },
      { label: "ĐĂNG KÝ HỌC THỬ", href: "#lien-he" },
    ],
    ctaLabel: "ĐĂNG KÝ HỌC THỬ MIỄN PHÍ",
  },
  hero: {
    eyebrow: "TUẤN KIỆT ACADEMY • 3DS MAX • CORONA • V-RAY 6 • REVIT BIM",
    title: "ĐÀO TẠO KIẾN TRÚC SƯ & DIỄN HỌA 3D THỰC CHIẾN",
    subtitle:
      "Làm chủ trọn bộ quy trình từ triển khai bản vẽ kỹ thuật AutoCAD/Revit, dựng hình 3ds Max/SketchUp đến thiết lập ánh sáng – vật liệu PBR siêu thực trên hệ thống máy trạm Dual-Monitor RTX 4090.",
    ctaText: "XEM LỘ TRÌNH KHÓA HỌC",
    ctaLink: "#khoa-hoc",
    secondaryCtaText: "Trải Nghiệm Dual-Screen 2D/3D",
    backgroundImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
  },
  stats: [
    { id: "st-1", value: "4.200+", label: "KTS & Họa viên tốt nghiệp" },
    { id: "st-2", value: "100%", label: "Thực hành trên dự án thật" },
    { id: "st-3", value: "RTX 4090", label: "Phòng Lab Workstation" },
    { id: "st-4", value: "98%", label: "Có việc làm ngay tại Studio" },
  ],
  dualMonitorShowcase: {
    eyebrow: "TRẢI NGHIỆM TRỰC QUAN DUAL-SCREEN WORKSTATION",
    heading: "So Sánh Bản Vẽ Lưới Wireframe 2D & Kết Xuất 3D Photorealistic",
    subtitle:
      "Lấy cảm hứng từ hệ thống 2 màn hình chuyên dụng tại phòng Lab Tuấn Kiệt Academy: bên trái là cấu trúc lưới hình học & bản vẽ kỹ thuật, bên phải là tác phẩm Render hoàn thiện với vật liệu gỗ, đá và ánh sáng tự nhiên.",
    comparisons: [
      {
        id: "cmp-living",
        projectTitle: "Phòng Khách Penthouse Hiện Đại — Gỗ Óc Chó & Vách Kính Lớn",
        softwareStack: "3ds Max 2025 + Corona Renderer 11 + Chaos Scatter",
        renderTime: "14 Phút (4K Resolution - Denoiser Intel OIDN)",
        polyCount: "12.4 Triệu Polygons",
        wireframeDesc:
          "Màn hình Trái (2D Wireframe & CAD Layout): Dựng chuẩn tỷ lệ nhân trắc học, bố cục sofa chữ L, hệ tủ tivi âm tường và góc camera tiêu cự 28mm.",
        finalRenderDesc:
          "Màn hình Phải (Final 3D Render): Thiết lập HDRI hoàng hôn kết hợp đèn hắt khe tủ LED 3000K, map gỗ veneer óc chó độ phân giải 8K và phản xạ sàn gỗ tự nhiên.",
        wireframeImage:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
        finalRenderImage:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "cmp-villa",
        projectTitle: "Biệt Thự Nghỉ Dưỡng Nhiệt Đới — Hồ Bơi Vô Cực & Lam Gỗ",
        softwareStack: "SketchUp Pro + V-Ray 6 + Chaos Vantage Real-time",
        renderTime: "06 Phút (Real-time Raytracing RTX)",
        polyCount: "28.8 Triệu Polygons (Cây xanh & Mặt nước)",
        wireframeDesc:
          "Màn hình Trái (Khối Kiến Trúc & Mặt Cắt): Tổ chức hình khối console vươn dài 4.5m, hệ lam chắn nắng hướng Tây và cao độ mặt nước hồ bơi tràn viền.",
        finalRenderDesc:
          "Màn hình Phải (Final 3D Render): Mô phỏng khúc xạ nước hồ bơi Caustics, sương mù khí quyển (Aerial Perspective) và hệ thực vật nhiệt đới sống động.",
        wireframeImage:
          "https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=900&q=80",
        finalRenderImage:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  coursesSection: {
    eyebrow: "CHƯƠNG TRÌNH ĐÀO TẠO THỰC CHIẾN CHUẨN STUDIO",
    heading: "Các Khóa Học Kiến Trúc & Diễn Họa 3D Chuyên Sâu",
    subtitle:
      "Giáo trình được đúc kết từ hơn 500 dự án thiết kế – thi công thực tế, tặng kèm bộ thư viện Model 3D & Texture 8K độc quyền trị giá 25 triệu đồng.",
    courses: [
      {
        id: "crs-corona-interior",
        code: "TK-3D01",
        title: "Master 3ds Max & Corona Render Nội Thất Hạng Sang",
        track: "DIỄN HỌA NỘI THẤT",
        duration: "32 Buổi (3.5 Tháng)",
        software: ["3ds Max", "Corona 11", "Photoshop Camera Raw"],
        tuition: "6.800.000 ₫",
        level: "Từ Cơ bản đến Chuyên sâu",
        summary:
          "Làm chủ kỹ thuật dựng hình Poly chuyên sâu, thiết lập 5 kịch bản ánh sáng nội thất và tạo vật liệu PBR (gỗ, đá marble, vải nhung, kim loại xước) siêu thực.",
        modules: [
          "Dựng hình không gian nội thất từ bản vẽ AutoCAD chuẩn kích thước thi công",
          "Tư duy nhiếp ảnh kiến trúc: Góc máy, tiêu cự, bố cục và Depth of Field",
          "Thiết lập LightMix đa kịch bản Ngày / Đêm / Hoàng hôn chỉ trong 1 lần Render",
          "Hậu kỳ ảnh Render và xuất ảnh Panorama 360° VR trình chiếu khách hàng",
        ],
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "crs-vray-exterior",
        code: "TK-3D02",
        title: "Diễn Họa Kiến Trúc Ngoại Thất & Cảnh Quan V-Ray / Vantage",
        track: "KIẾN TRÚC NGOẠI THẤT",
        duration: "28 Buổi (3 Tháng)",
        software: ["SketchUp Pro", "V-Ray 6", "Chaos Vantage"],
        tuition: "6.200.000 ₫",
        level: "Thực chiến Dự án",
        summary:
          "Chuyên sâu diễn họa nhà phố, biệt thự nghỉ dưỡng, cao ốc và quy hoạch cảnh quan quy mô lớn kết hợp làm phim kiến trúc Real-time.",
        modules: [
          "Quy trình dựng hình nhanh công trình ngoại thất phức tạp bằng Plugin chuyên dụng",
          "Trải thảm thực vật, rừng cây và cảnh quan bằng Chaos Scatter không nặng máy",
          "Làm phim diễn họa kiến trúc 60 FPS mượt mà bằng Chaos Vantage RTX",
          "Thực hành tốt nghiệp trên dự án Resort / Biệt thự thực tế",
        ],
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "crs-revit-bim",
        code: "TK-BIM03",
        title: "Triển Khai Hồ Sơ Kỹ Thuật Thi Công Revit BIM & AutoCAD",
        track: "BIM & BẢN VẼ KỸ THUẬT",
        duration: "30 Buổi (3.5 Tháng)",
        software: ["Revit Architecture", "AutoCAD", "Navisworks"],
        tuition: "6.500.000 ₫",
        level: "Chuẩn Kỹ sư & KTS Chủ trì",
        summary:
          "Nắm vững cấu tạo kiến trúc – nội thất, bóc tách khối lượng tự động và xuất hồ sơ bản vẽ thi công (Shop Drawing) chuẩn ISO 19650.",
        modules: [
          "Đọc hiểu và triển khai trọn bộ hồ sơ xin phép xây dựng & hồ sơ kỹ thuật thi công",
          "Chi tiết cấu tạo trần thạch cao, vách ốp gỗ, cầu thang và khu vệ sinh",
          "Tạo Family Revit thông minh và thống kê bảng khối lượng vật tư tự động",
          "Phối hợp va chạm (Clash Detection) giữa Kiến trúc – Kết cấu – Cơ điện MEP",
        ],
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  studentGallerySection: {
    eyebrow: "TÁC PHẨM ĐỒ ÁN HỌC VIÊN",
    heading: "Chất Lượng Đồ Án Tốt Nghiệp Chuẩn Studio Quốc Tế",
    subtitle:
      "100% đồ án dưới đây được thực hiện bởi học viên Tuấn Kiệt Academy sau 3 tháng đào tạo, sử dụng bảng mẫu vật liệu thực tế kết hợp dựng hình 3D.",
    works: [
      {
        id: "wrk-1",
        studentName: "HV. Nguyễn Hoàng Minh (Khóa K42)",
        courseName: "Master 3ds Max & Corona Nội Thất",
        projectType: "Penthouse The River Thủ Thiêm",
        renderEngine: "Corona Renderer 11 (4000x3000px)",
        lightingSetup: "HDRI Overcast + IES Spotlights 3000K",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wrk-2",
        studentName: "HV. Trần Lê Phương Anh (Khóa K43)",
        courseName: "Master 3ds Max & Corona Nội Thất",
        projectType: "Showroom Nội Thất & Vật Liệu Ý",
        renderEngine: "Corona Renderer 11 + LightMix",
        lightingSetup: "2700K Warm Linear Strip + Sun Sky",
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "wrk-3",
        studentName: "HV. Lê Quốc Bảo (Khóa K41)",
        courseName: "Diễn Họa Ngoại Thất V-Ray & Vantage",
        projectType: "Biệt Thự Nghỉ Dưỡng Đồi Thông Đà Lạt",
        renderEngine: "V-Ray 6 GPU RTX",
        lightingSetup: "Dusk Dome Light + Volumetric Fog",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  mentorsSection: {
    eyebrow: "ĐỘI NGŨ GIẢNG VIÊN CHỦ TRÌ",
    heading: "Đồng Hành Cùng Các Kiến Trúc Sư & 3D Artist Đầu Ngành",
    subtitle:
      "Giảng viên trực tiếp cầm tay chỉ việc, sửa bài 1-1 trên từng góc cam và từng bảng thông số vật liệu.",
    mentors: [
      {
        id: "mnt-1",
        name: "ThS. KTS. Phạm Tuấn Kiệt",
        title: "Founder Tuấn Kiệt Academy & Giám đốc Thiết kế",
        experience: "14 Năm kinh nghiệm Kiến trúc & Diễn họa",
        specialty: "Chứng chỉ Chaos Corona Certified Instructor Quốc Tế",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "mnt-2",
        name: "KTS. Đặng Hoàng Nam",
        title: "Trưởng Bộ Môn Diễn Họa Ngoại Thất & Real-time",
        experience: "10 Năm kinh nghiệm tại Studio Kiến trúc Pháp",
        specialty: "Chuyên gia V-Ray, Chaos Vantage & Unreal Engine 5",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: "mnt-3",
        name: "KS. BIM Manager Vũ Minh Tâm",
        title: "Trưởng Bộ Môn Revit BIM & Hồ Sơ Thi Công",
        experience: "12 Năm điều phối BIM các dự án Cao ốc & Resort",
        specialty: "Chuẩn hóa quy trình ISO 19650 & Shop Drawing Nội thất",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  footer: {
    tagline:
      "TUẤN KIỆT ACADEMY — Bệ phóng sự nghiệp cho thế hệ Kiến trúc sư, Nhà thiết kế nội thất và Chuyên gia diễn họa 3D thực chiến.",
    copyright:
      "© Bản quyền thuộc về Học Viện Kiến Trúc & Diễn Họa 3D Tuấn Kiệt Academy. Giao diện chuẩn Đào Tạo Kiến Trúc XD035.",
  },
};
