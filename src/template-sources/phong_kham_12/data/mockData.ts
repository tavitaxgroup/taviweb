import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham12PanelProduct {
  id: string;
  code: string;
  name: string;
  thickness: string;
  density: string;
  fireRating: string;
  application: string;
  pricePerM2: string;
  badge: string;
  image: string;
}

export interface PhongKham12Project {
  id: string;
  name: string;
  client: string;
  standard: string;
  area: string;
  location: string;
  image: string;
}

export interface PhongKham12Data extends ClonedTemplateBaseData {
  factoryMetrics: Array<{
    id: string;
    value: string;
    label: string;
    detail: string;
  }>;
  cleanroomSolutions: Array<{
    id: string;
    title: string;
    isoClass: string;
    description: string;
    specs: string[];
    image: string;
  }>;
  panelCatalog: PhongKham12PanelProduct[];
  hospitalProjects: PhongKham12Project[];
  workflowSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  certifications: string[];
}

export const phongKham12DefaultData: PhongKham12Data = {
  business: {
    name: "PANEL HOME",
    phone: ["0912 886 999", "1900 636 648"],
    email: ["duan@panelhome.vn", "kithuat@mona.media"],
    address: "Khu Công Nghiệp Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 07:30 - 18:00 (Hỗ trợ kỹ thuật 24/7)",
    rating: 5.0,
    reviewCount: 640,
    experienceYears: "14+",
    aboutTitle: "Sản Xuất & Thi Công Trọn Gói Phòng Sạch Y Tế, Phòng Mổ Bệnh Viện & Kho Lạnh GSP",
    aboutText: [
      "PANEL HOME sở hữu 2 nhà máy quy mô 15.000m² với 90% dây chuyền sản xuất tấm Panel cách nhiệt tự động hóa công nghệ Hàn Quốc & Châu Âu.",
      "Chúng tôi là tổng thầu thiết kế – thi công phòng mổ bệnh viện áp lực dương, phòng sạch dược phẩm đạt chuẩn GMP-WHO, phòng xét nghiệm an toàn sinh học cấp II/III và kho lạnh bảo quản vắc-xin trên toàn quốc."
    ],
    highlights: [
      "2 nhà máy 15.000m² công suất 2.000.000 m² panel/năm",
      "90% dây chuyền tự động hóa độ chính xác tuyệt đối",
      "Đạt chuẩn phòng sạch y tế ISO 14644-1, GMP-WHO, GSP",
      "Bảo hành kết cấu cách nhiệt & hệ thống HVAC lên tới 10 năm"
    ]
  },
  hero: {
    eyebrow: "TỔNG THẦU PHÒNG SẠCH Y TẾ & PANEL CÁCH NHIỆT",
    title: "SẢN XUẤT VÀ THI CÔNG\nTẤM PANEL CÁCH NHIỆT",
    subtitle:
      "2 nhà máy 15.000m², 90% dây chuyền tự động, thi công phòng sạch bệnh viện, phòng mổ vô trùng, nhà máy dược phẩm GMP và kho lạnh bảo quản vắc-xin.",
    ctaText: "Nhận Báo Giá & Hồ Sơ Kỹ Thuật",
    ctaLink: "#bao-gia-du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1500&q=85"
  },
  factoryMetrics: [
    {
      id: "fm-1",
      value: "15.000m²",
      label: "Quy Mô 2 Nhà Máy",
      detail: "Nhà máy miền Bắc & miền Nam chủ động nguồn vật tư tiến độ nhanh"
    },
    {
      id: "fm-2",
      value: "90%",
      label: "Dây Chuyền Tự Động",
      detail: "Hệ thống phun PU/PIR liên tục & cắt CNC chính xác từng milimet"
    },
    {
      id: "fm-3",
      value: "ISO 5–8",
      label: "Chuẩn Phòng Sạch Y Tế",
      detail: "Đáp ứng tiêu chuẩn Bộ Y Tế, GMP-WHO, GLP, GSP & ISO 14644-1"
    },
    {
      id: "fm-4",
      value: "580+",
      label: "Công Trình Hoàn Thành",
      detail: "Bệnh viện đa khoa, trung tâm xét nghiệm, nhà máy dược & thiết bị y tế"
    }
  ],
  cleanroomSolutions: [
    {
      id: "cr-1",
      title: "Thi Công Phòng Mổ Bệnh Viện Áp Lực Dương",
      isoClass: "Class 1.000 – 10.000 (ISO 6–7)",
      description:
        "Thiết kế & lắp đặt trọn gói vách trần Panel PU kháng khuẩn Ion Bạc, sàn Vinyl chống tĩnh điện, cửa trượt tự động kín khí và phin lọc HEPA H14.",
      specs: [
        "Vách Panel PU tôn kháng khuẩn dày 50–75mm",
        "Hệ thống cấp khí tươi tiệt trùng UV & lọc HEPA H14",
        "Góc bo tròn R50 chống bám bụi & vi khuẩn tuyệt đối"
      ],
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cr-2",
      title: "Phòng Sạch Nhà Máy Dược Phẩm & Mỹ Phẩm GMP",
      isoClass: "GMP-WHO / EU-GMP",
      description:
        "Giải pháp đồng bộ từ phòng cân chia nguyên liệu, dây chuyền pha chế, đóng gói cấp độ sạch A/B/C/D đến hệ thống Airlock, Air Shower và Pass Box.",
      specs: [
        "Kiểm soát chênh áp tự động 10–15 Pa giữa các cấp phòng",
        "Kiểm soát nhiệt độ 20–24°C & độ ẩm 45–60% RH",
        "Bàn giao hồ sơ thẩm định DQ, IQ, OQ, PQ đầy đủ"
      ],
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cr-3",
      title: "Phòng Xét Nghiệm Sinh Học Phân Tử & IVF",
      isoClass: "An Toàn Sinh Học Cấp II / III",
      description:
        "Thi công phòng Lab xét nghiệm PCR, trung tâm hỗ trợ sinh sản IVF và phòng nuôi cấy tế bào gốc với độ kín khí và chống rung tiêu chuẩn cao.",
      specs: [
        "Hệ thống phòng đệm Airlock khóa liên động Interlock",
        "Xử lý khí thải áp lực âm qua bộ lọc BIBO an toàn",
        "Chiếu sáng LED phòng sạch vát cạnh 400–600 Lux"
      ],
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cr-4",
      title: "Kho Lạnh Bảo Quản Vắc-Xin & Dược Phẩm GSP",
      isoClass: "Chuẩn GSP Bộ Y Tế (+2°C đến -40°C)",
      description:
        "Sản xuất tấm Panel PIR/PU tỷ trọng cao dày 75–150mm chuyên dụng cho kho lạnh vắc-xin, huyết tương và sinh phẩm y tế với cảnh báo nhiệt độ từ xa.",
      specs: [
        "Khóa Camlock kết nối tấm Panel kín khít không thất thoát nhiệt",
        "Cửa kho lạnh Inox 304 có điện trở sưởi chống đóng băng",
        "Hệ thống giám sát nhiệt ẩm tự động cảnh báo SMS/App"
      ],
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=700&q=80"
    }
  ],
  panelCatalog: [
    {
      id: "pn-1",
      code: "PH-PU50-MED",
      name: "Tấm Panel PU Phòng Sạch Y Tế Kháng Khuẩn",
      thickness: "50mm / 75mm / 100mm",
      density: "40 – 42 kg/m³",
      fireRating: "Chống cháy lan B2 / PIR B1",
      application: "Phòng mổ, ICU, phòng sạch Dược GMP",
      pricePerM2: "520.000 ₫/m²",
      badge: "Bán chạy số 1",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pn-2",
      code: "PH-RW-EI60",
      name: "Tấm Panel Bông Khoáng Rockwool Chống Cháy",
      thickness: "50mm / 75mm / 100mm",
      density: "80 – 120 kg/m³",
      fireRating: "Đạt chuẩn EI60 – EI120",
      application: "Hành lang bệnh viện, vách ngăn cháy nhà máy dược",
      pricePerM2: "465.000 ₫/m²",
      badge: "Chuẩn PCCC QCVN 06",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pn-3",
      code: "PH-EPS-CLEAN",
      name: "Tấm Panel EPS Cách Nhiệt Tỷ Trọng Cao",
      thickness: "50mm / 75mm / 100mm",
      density: "12 – 20 kg/m³",
      fireRating: "EPS Hạt đen chậm cháy",
      application: "Phòng khám đa khoa, kho vật tư y tế, nhà lắp ghép",
      pricePerM2: "265.000 ₫/m²",
      badge: "Giá tại nhà máy",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "pn-4",
      code: "PH-DOOR-HOSP",
      name: "Cửa Trượt Tự Động Phòng Mổ & Kính Quan Sát",
      thickness: "Cánh Panel PU 50mm viền Nhôm/Inox 304",
      density: "Gioăng cao su y tế kín khí 100%",
      fireRating: "Kính cường lực 2 lớp hút chân không",
      application: "Phòng phẫu thuật, phòng X-Quang, phòng cách ly",
      pricePerM2: "14.500.000 ₫/bộ",
      badge: "Cảm biến không chạm",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=500&q=80"
    }
  ],
  hospitalProjects: [
    {
      id: "pj-1",
      name: "Tổ Hợp 8 Phòng Mổ Vô Trùng & Khu Hồi Sức ICU",
      client: "Bệnh Viện Đa Khoa Quốc Tế Khu Vực Phía Nam",
      standard: "ISO Class 6 (Class 1.000)",
      area: "2.400 m²",
      location: "TP. Hồ Chí Minh",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pj-2",
      name: "Nhà Máy Sản Xuất Thuốc Đông Dược & Thực Phẩm BVSK",
      client: "Công Ty Cổ Phần Dược Phẩm Trung Ương",
      standard: "GMP-WHO & ISO 14644-1",
      area: "4.800 m²",
      location: "Bình Dương",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "pj-3",
      name: "Hệ Thống Kho Lạnh Bảo Quản Vắc-Xin & Sinh Phẩm",
      client: "Trung Tâm Tiêm Chủng & Y Tế Dự Phòng",
      standard: "GSP Bộ Y Tế (+2°C đến +8°C)",
      area: "1.500 m²",
      location: "Hà Nội",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80"
    }
  ],
  workflowSteps: [
    {
      step: "01",
      title: "Khảo Sát & Tư Vấn Cấp Độ Sạch",
      description:
        "Kỹ sư phòng sạch khảo sát mặt bằng thực tế, phân tích luồng di chuyển 1 chiều của bác sĩ, bệnh nhân và vật tư."
    },
    {
      step: "02",
      title: "Thiết Kế Bản Vẽ 3D BIM & HVAC",
      description:
        "Lập bản vẽ bố trí tấm Panel, hệ thống ống gió AHU/HEPA, sơ đồ chênh áp và bóc tách dự toán chi tiết."
    },
    {
      step: "03",
      title: "Sản Xuất Tấm Panel Theo Kích Thước",
      description:
        "Gia công tấm Panel cách nhiệt trực tiếp tại 2 nhà máy 15.000m² theo kích thước модуl của từng phòng."
    },
    {
      step: "04",
      title: "Thi Công Lắp Đặt & Đo Kiểm Nghiệm Thu",
      description:
        "Thi công chuẩn tiến độ, đo đếm hạt bụi, kiểm tra độ kín khí, vi sinh và bàn giao hồ sơ thẩm định GMP/Bộ Y Tế."
    }
  ],
  certifications: [
    "ISO 9001:2015",
    "ISO 14644-1 Cleanroom",
    "GMP-WHO Standard",
    "Chứng Nhận Chống Cháy QCVN 06",
    "Hàng Việt Nam Chất Lượng Cao"
  ]
};
