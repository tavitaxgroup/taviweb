import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SongMocProductItem {
  id: string;
  categoryLabel: string;
  title: string;
  code: string;
  specs: string;
  application: string;
  image: string;
}

export interface SongMocClinicProject {
  id: string;
  title: string;
  location: string;
  materialsUsed: string;
  image: string;
}

export interface SongMocAestheticData extends ClonedTemplateBaseData {
  navigation: Array<{ label: string; href: string }>;
  heroPurpleRibbon: string;
  heroPinkRibbon: string;
  beePartnerBrand: string;
  edgeBandingSectionTitle: string;
  edgeBandingProducts: SongMocProductItem[];
  facilityBanner: {
    brandCn: string;
    perks: Array<{
      id: string;
      title: string;
      subtitle: string;
    }>;
  };
  klebmaisterSectionTitle: string;
  klebmaisterProducts: SongMocProductItem[];
  clinicProjects: SongMocClinicProject[];
}

export const thamMyVien17DefaultData: SongMocAestheticData = {
  business: {
    name: "SONG MỘC",
    tagline:
      "Trung Tâm Vật Liệu Nẹp Chỉ Nhựa Cao Cấp & Thiết Kế Nội Thất Thẩm Mỹ Viện – Spa Song Mộc",
    phone: ["0909 888 397", "028 3899 6868"],
    email: ["kinhdoanh@songmoc.vn", "cskh@beepvc.vn"],
    address: "Khu Công Nghiệp Tân Bình, Quận Tân Phú, TP. Hồ Chí Minh",
    workingHours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    rating: 4.9,
    reviewCount: 1680,
    experienceYears: "12+",
    aboutTitle: "Song Mộc (双木) — Giải Pháp Nẹp Chỉ Nhựa BEE PVC & Nội Thất Spa Chuẩn Quốc Tế",
    aboutText: [
      "Song Mộc chuyên sản xuất và phân phối nẹp chỉ nhựa PVC cao cấp thương hiệu BEE PVC cùng keo dán cạnh nhiệt Klebmaister chuyên dụng cho thi công quầy lễ tân, tủ dược mỹ phẩm và phòng điều trị tại các Viện Thẩm Mỹ & Spa 5 sao.",
      "Với khả năng chống ẩm tuyệt đối, kháng hóa chất mỹ phẩm và bảng màu pastel – vân đá cẩm thạch – vân gỗ sang trọng, sản phẩm Song Mộc giúp không gian thẩm mỹ viện luôn bền đẹp không đường viền."
    ],
    highlights: [
      "Giao hàng nhanh toàn quốc tới mọi xưởng nội thất & công trình Spa",
      "Tặng bộ hộp mẫu chỉ nhựa BEE PVC miễn phí cho kiến trúc sư & đại lý",
      "Keo hạt nhiệt Klebmaister (180-210°C) bám dính siêu bền, chống bong mép"
    ]
  },
  navigation: [
    { label: "TRANG CHỦ", href: "#top" },
    { label: "GIỚI THIỆU", href: "#cam-ket-nha-may" },
    { label: "NẸP CHỈ NHỰA BEE PVC", href: "#nep-chi-nhua" },
    { label: "KEO DÁN CẠNH KLEBMAISTER", href: "#keo-klebmaister" },
    { label: "CÔNG TRÌNH THẨM MỸ VIỆN", href: "#du-an-spa" },
    { label: "NHẬN MẪU MIỄN PHÍ", href: "#nhan-mau" }
  ],
  heroPurpleRibbon: "SONG MỘC",
  heroPinkRibbon: "NẸP CHỈ NHỰA CAO CẤP",
  beePartnerBrand: "BEE PVC",
  hero: {
    eyebrow: "NHÀ SẢN XUẤT VẬT LIỆU NỘI THẤT THẨM MỸ VIỆN & SPA",
    title: "Song Mộc — Nẹp Chỉ Nhựa Cao Cấp & Giải Pháp Nội Thất Spa",
    subtitle:
      "Cung ứng nẹp chỉ nhựa BEE PVC đồng màu Acrylic/Melamine và keo nhiệt Klebmaister chuyên dụng cho không gian phòng khám da liễu, viện thẩm mỹ & clinic cao cấp.",
    ctaText: "Đăng Ký Nhận Bộ Mẫu Miễn Phí",
    ctaLink: "#nhan-mau",
    backgroundImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
  },
  edgeBandingSectionTitle: "NẸP CHỈ NHỰA",
  edgeBandingProducts: [
    {
      id: "sm-1",
      categoryLabel: "NẸP CHỈ NHỰA",
      title: "NẸP CHỈ NHỰA ĐƠN SẮC KEM – XÁM MINIMALIST",
      code: "BEE-SM01",
      specs: "Quy cách: 1.0mm × 22mm / 45mm (Cuộn 100m)",
      application:
        "Phối màu tủ thuốc, bàn tư vấn bác sĩ và hệ tủ âm tường phong cách Hàn Quốc.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-2",
      categoryLabel: "NẸP CHỈ NHỰA",
      title: "NẸP CHỈ NHỰA BẢNG MÀU PASTEL THẨM MỸ VIỆN",
      code: "BEE-SM02",
      specs: "Quy cách: 1.0mm × 22mm / 55mm (Hồng phấn, Xanh Sage, Vàng kem)",
      application:
        "Điểm nhấn bo cong mềm mại cho quầy tiếp đón, kệ trưng bày mỹ phẩm và phòng chăm sóc da.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-3",
      categoryLabel: "NẸP CHỈ NHỰA",
      title: "NẸP CHỈ NHỰA VÂN GỖ SỒI & ÓC CHÓ DƯỠNG SINH",
      code: "BEE-SM03",
      specs: "Quy cách: 1.2mm × 22mm / 45mm (Vân gỗ in 3D chống trầy)",
      application:
        "Hoàn thiện giường massage, vách ngăn gỗ và tủ khăn ấm tại các Spa dưỡng sinh thảo mộc.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sm-4",
      categoryLabel: "NẸP CHỈ NHỰA",
      title: "NẸP CHỈ NHỰA VÂN ĐÁ CẨM THẠCH CARRARA TRẮNG",
      code: "BEE-SM04",
      specs: "Quy cách: 1.0mm × 25mm / 55mm (Bề mặt bóng gương Luxury)",
      application:
        "Ốp cạnh quầy lễ tân thẩm mỹ viện, bàn soi da và bồn rửa tay khu vực điều trị vô khuẩn.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  facilityBanner: {
    brandCn: "SONG MỘC 双木",
    perks: [
      {
        id: "fp-1",
        title: "Giao Hàng Toàn Quốc",
        subtitle: "Kho hàng sẵn số lượng lớn tại TP.HCM, Hà Nội & Đà Nẵng"
      },
      {
        id: "fp-2",
        title: "Tặng Chỉ Mẫu Cho Đại Lý",
        subtitle: "Gửi miễn phí catalogue hơn 300 mã màu BEE PVC tận xưởng"
      }
    ]
  },
  klebmaisterSectionTitle: "KEO NHỰA DÁN CẠNH KLEBMAISTER",
  klebmaisterProducts: [
    {
      id: "kl-1",
      categoryLabel: "KEO DÁN CẠNH NHIỆT ĐỘ CAO",
      title: "KEO HẠT DÁN CẠNH KLEBMAISTER SCHMELZ-KLEBSTOFF (180-210°C)",
      code: "KLEB-210",
      specs: "Nhiệt độ vận hành: 180°C – 210°C | Bao tiêu chuẩn 25kg",
      application:
        "Độ kết dính siêu cường, đường keo siêu mảnh không lộ viền, chịu ẩm ướt trong phòng xông hơi Spa.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "kl-2",
      categoryLabel: "KEO DÁN CẠNH KHÔNG ĐƯỜNG LINE",
      title: "KEO NHIỆT TRONG SUỐT KLEBMAISTER NO-LINE ACRYLIC",
      code: "KLEB-ACR",
      specs: "Nhiệt độ vận hành: 190°C – 210°C | Chuyên dụng cánh Acrylic bóng gương",
      application:
        "Tạo hiệu ứng liền khối hoàn hảo cho hệ tủ trưng bày tinh chất và phòng Lab thẩm mỹ viện.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "kl-3",
      categoryLabel: "KEO DÁN CẠNH NHIỆT ĐỘ THẤP",
      title: "KEO HẠT DÁN CẠNH KLEBMAISTER (130-150°C) MÁY ĐẨY TAY",
      code: "KLEB-150",
      specs: "Nhiệt độ vận hành: 130°C – 150°C | Dễ thi công chi tiết uốn cong",
      application:
        "Chuyên dùng dán các vách ngăn uốn vòm, quầy lễ tân bo tròn đặc trưng tại các Clinic làm đẹp.",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "kl-4",
      categoryLabel: "PHỤ GIA & DUNG DỊCH VỆ SINH",
      title: "DUNG DỊCH ĐÁNH BÓNG & LÀM SẠCH MÉP CHỈ NHỰA BEE CLEAN",
      code: "BEE-CLN",
      specs: "Can 5 Lít / Thùng 20 Lít | Bay hơi nhanh, không phai màu nhựa",
      application:
        "Làm sạch keo thừa tức thì, bảo vệ bề mặt nội thất thẩm mỹ viện luôn sáng bóng như mới.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    }
  ],
  clinicProjects: [
    {
      id: "pj-1",
      title: "Tổ Hợp Viện Thẩm Mỹ Quốc Tế Aura Clinic Quận 3",
      location: "Quận 3, TP. Hồ Chí Minh",
      materialsUsed: "Nẹp chỉ nhựa Vân Đá Carrara + Pastel Kem BEE PVC",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pj-2",
      title: "Hệ Thống Dưỡng Sinh Thảo Mộc Mộc Liên Spa",
      location: "Quận Hải Châu, Đà Nẵng",
      materialsUsed: "Nẹp chỉ nhựa Vân Gỗ Óc Chó + Keo chịu ẩm Klebmaister",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pj-3",
      title: "Phòng Khám Da Liễu Công Nghệ Cao DermaGlow",
      location: "Quận Cầu Giấy, Hà Nội",
      materialsUsed: "Nẹp chỉ nhựa Xanh Sage Pastel + Keo Không Đường Line",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
