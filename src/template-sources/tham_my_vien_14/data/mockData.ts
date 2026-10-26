import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface VivisionEyeServiceItem {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  image: string;
  description: string;
}

export interface VivisionDoctor {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  image: string;
}

export interface VivisionPackage {
  id: string;
  name: string;
  badge: string;
  price: string;
  oldPrice?: string;
  highlights: string[];
  image: string;
}

export interface VivisionBeautyData extends ClonedTemplateBaseData {
  navigation: Array<{ label: string; href: string }>;
  heroPurpleRibbon: string;
  heroPinkRibbon: string;
  heroWallMotto: string;
  creamCardHeader: {
    brandPrefix: string;
    goldHighlight: string;
    restTitle: string;
  };
  eightEyeCareGrid: VivisionEyeServiceItem[];
  aestheticPackages: VivisionPackage[];
  clinicalSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  doctors: VivisionDoctor[];
}

export const thamMyVien14DefaultData: VivisionBeautyData = {
  business: {
    name: "vivision",
    tagline: "Viện Thẩm Mỹ Mắt & Chăm Sóc Nhãn Khoa Thẩm Mỹ Vivision Beauty",
    phone: ["1800 6989", "0909 313 728"],
    email: ["cskh@vivisionbeauty.vn", "booking@vivision.vn"],
    address: "215 Nguyễn Thị Minh Khai, Phường Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh",
    workingHours: "08:00 - 20:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 2640,
    experienceYears: "12+",
    aboutTitle: "Nâng Tầm Thị Lực, Nâng Tầm Nhan Sắc Đôi Mắt Việt",
    aboutText: [
      "Vivision Beauty là hệ thống viện thẩm mỹ mắt và chăm sóc nhãn khoa chuyên sâu tiên phong kết hợp giữa y học nhãn khoa hiện đại và nghệ thuật tạo hình thẩm mỹ vùng mắt.",
      "Mọi ca can thiệp trẻ hóa vùng mắt, tạo nếp mí hay kiểm soát khúc xạ tại Vivision đều được trực tiếp thăm khám bởi đội ngũ Bác sĩ Chuyên khoa Nhãn khoa & Tạo hình giàu kinh nghiệm."
    ],
    highlights: [
      "100% Bác sĩ Chuyên khoa Nhãn khoa & Thẩm mỹ mắt trực tiếp thực hiện",
      "Hệ thống máy đo khúc xạ & phân tích vùng mắt Carl Zeiss (Đức)",
      "Không gian phòng khám vô khuẩn chuẩn quốc tế — New Vision, New Life"
    ]
  },
  navigation: [
    { label: "Trang chủ", href: "#top" },
    { label: "Dịch vụ mắt 8 chuyên khoa", href: "#tam-chuyen-khoa" },
    { label: "Thẩm mỹ vùng mắt", href: "#goi-tham-my" },
    { label: "Quy trình chuẩn Y khoa", href: "#quy-trinh" },
    { label: "Đội ngũ bác sĩ", href: "#bac-si" },
    { label: "Đặt lịch hẹn", href: "#dat-lich" }
  ],
  heroPurpleRibbon: "NÂNG TẦM THỊ LỰC, NÂNG TẦM CUỘC SỐNG",
  heroPinkRibbon: "GIẢI PHÁP CHO ĐÔI MẮT KHỎE ĐẸP",
  heroWallMotto: "new vision\nnew life.",
  hero: {
    eyebrow: "VIỆN THẨM MỸ MẮT & NHÃN KHOA VIVISION",
    title: "Nâng Tầm Thị Lực, Nâng Tầm Cuộc Sống",
    subtitle:
      "Giải pháp toàn diện cho đôi mắt sáng khỏe, trẻ hóa vùng mắt không xâm lấn và kiểm soát khúc xạ chuẩn Y khoa quốc tế.",
    ctaText: "Đặt Lịch Khám Mắt Ngay",
    ctaLink: "#dat-lich",
    backgroundImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85"
  },
  creamCardHeader: {
    brandPrefix: "vivision",
    goldHighlight: "beauty & kid",
    restTitle: "giúp bảo vệ & kiến tạo đôi mắt sáng khỏe với"
  },
  eightEyeCareGrid: [
    {
      id: "eye-1",
      title: "Khám khúc xạ liệt điều tiết",
      category: "Nhãn khoa chuyên sâu",
      price: "350.000 ₫",
      duration: "45 phút",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80",
      description:
        "Đo chính xác độ khúc xạ thật sự của mắt và kiểm tra trương lực cơ vận nhãn, cơ nâng mi."
    },
    {
      id: "eye-2",
      title: "Phục hồi nhược thị & mỏi mắt",
      category: "Thị giác chức năng",
      price: "600.000 ₫",
      duration: "60 phút",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      description:
        "Phác đồ kích thích thị giác hai mắt kết hợp massage nhiệt giảm mỏi mắt kỹ thuật số."
    },
    {
      id: "eye-3",
      title: "Lấy dị vật & Chăm sóc bờ mi",
      category: "Chăm sóc mi mắt",
      price: "400.000 ₫",
      duration: "30 phút",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      description:
        "Vệ sinh tuyến bờ mi Meibomius chuyên sâu, xử lý khô mắt và lấy dị vật an toàn tuyệt đối."
    },
    {
      id: "eye-4",
      title: "Ortho-K – Kính áp tròng ban đêm",
      category: "Định hình giác mạc",
      price: "14.500.000 ₫",
      duration: "Liệu trình năm",
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=500&q=80",
      description:
        "Đeo kính khi ngủ ban đêm giúp đôi mắt sáng rõ tự nhiên suốt cả ngày mà không cần gọng kính."
    },
    {
      id: "eye-5",
      title: "Khám kính tiếp xúc thẩm mỹ",
      category: "Thẩm mỹ nhãn khoa",
      price: "300.000 ₫",
      duration: "30 phút",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
      description:
        "Đo độ cong giác mạc và màng phim nước mắt để chọn lens thẩm mỹ êm ái, không gây khô đỏ mắt."
    },
    {
      id: "eye-6",
      title: "Tật lác, sụp mí và điều tiết",
      category: "Tạo hình & Cơ mắt",
      price: "950.000 ₫",
      duration: "60 phút",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80",
      description:
        "Đánh giá cân bằng cơ nâng mi, khắc phục tình trạng mắt lệch, mí lót hoặc sụp mí che khuất tầm nhìn."
    },
    {
      id: "eye-7",
      title: "Kiểm soát cận thị & Trẻ hóa mắt",
      category: "Công nghệ ánh sáng",
      price: "1.200.000 ₫",
      duration: "45 phút",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80",
      description:
        "Kết hợp kiểm soát tăng độ cận và công nghệ RF xóa quầng thâm, bọng mỡ vùng dưới mắt."
    },
    {
      id: "eye-8",
      title: "Khám mắt & Thẩm mỹ toàn diện",
      category: "Gói VIP Toàn diện",
      price: "750.000 ₫",
      duration: "60 phút",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
      description:
        "Tầm soát 12 chỉ số sức khỏe đáy mắt kết hợp tư vấn trẻ hóa vùng da quanh mắt cá nhân hóa."
    }
  ],
  aestheticPackages: [
    {
      id: "pkg-1",
      name: "Trẻ Hóa Vùng Mắt Thermage FLX Eye Tip 450 Shots",
      badge: "ĐƯỢC YÊU THÍCH NHẤT",
      price: "18.500.000 ₫",
      oldPrice: "25.000.000 ₫",
      highlights: [
        "Đầu tip chuyên biệt cho vùng da mỏng quanh mắt",
        "Nâng cung chân mày tự nhiên, xóa vết chân chim",
        "Bảo vệ nhãn cầu tuyệt đối bằng kính chắn chuyên dụng"
      ],
      image:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pkg-2",
      name: "Tạo Hình Nếp Mí Thiên Nga & Lấy Mỡ Bọng Mắt Vi Phẫu",
      badge: "CHUẨN NHÃN KHOA",
      price: "12.000.000 ₫",
      oldPrice: "16.000.000 ₫",
      highlights: [
        "Đo vẽ tỷ lệ vàng hài hòa với trục nhãn cầu",
        "Chỉ khâu vi phẫu siêu mảnh 0.01mm không để lại sẹo",
        "Hồi phục nhanh sau 5 ngày, ánh nhìn trong sáng tự nhiên"
      ],
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "pkg-3",
      name: "Cấy Tinh Chất Xóa Quầng Thâm Mắt & Làm Đầy Hốc Mắt Sâu",
      badge: "KHÔNG NGHỈ DƯỠNG",
      price: "4.900.000 ₫",
      oldPrice: "6.800.000 ₫",
      highlights: [
        "Phức hợp Peptide sáng da và HA liên kết chéo mềm mại",
        "Cải thiện 85% sắc tố thâm sạm do thức khuya",
        "Thực hiện êm ái trong 30 phút cùng bác sĩ chuyên khoa"
      ],
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
    }
  ],
  clinicalSteps: [
    {
      step: "01",
      title: "Đo Khúc Xạ & Soi Đáy Mắt",
      desc: "Kiểm tra thị lực, nhãn áp và màng phim nước mắt bằng hệ thống máy sinh hiển vi Carl Zeiss."
    },
    {
      step: "02",
      title: "Phân Tích Cấu Trúc Vùng Mí",
      desc: "Bác sĩ đánh giá độ đàn hồi da mí, trương lực cơ nâng mi và lượng mỡ thừa quanh hốc mắt."
    },
    {
      step: "03",
      title: "Thiết Kế Phác Đồ Cá Nhân Hóa",
      desc: "Tư vấn giải pháp điều trị khúc xạ hoặc trẻ hóa thẩm mỹ mắt đảm bảo an toàn thị giác tối đa."
    },
    {
      step: "04",
      title: "Thực Hiện Trong Phòng Vô Khuẩn",
      desc: "Quy trình chuẩn Y khoa nhẹ nhàng, chính xác từng milimet và hoàn toàn êm ái."
    },
    {
      step: "05",
      title: "Chăm Sóc & Tái Khám Định Kỳ",
      desc: "Theo dõi sát sao tiến trình hồi phục thị lực và thẩm mỹ vùng mắt qua hồ sơ điện tử."
    }
  ],
  doctors: [
    {
      id: "doc-1",
      name: "TS.BS Nguyễn Hoàng Minh",
      title: "Giám đốc Chuyên môn Nhãn khoa",
      experience: "18 năm kinh nghiệm",
      specialty: "Chuyên gia Khúc xạ, Ortho-K & Phẫu thuật tạo hình mắt",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "doc-2",
      name: "ThS.BS Trần Thanh Thảo",
      title: "Trưởng khoa Thẩm mỹ Vùng mắt",
      experience: "14 năm kinh nghiệm",
      specialty: "Chuyên gia Trẻ hóa vùng mắt Thermage & Tạo hình mí vi phẫu",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "doc-3",
      name: "BS.CKI Lê Quốc Bảo",
      title: "Bác sĩ Chuyên khoa Thị giác Hai mắt",
      experience: "11 năm kinh nghiệm",
      specialty: "Chuyên gia Kiểm soát cận thị, Nhược thị & Kính tiếp xúc",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80"
    }
  ],
  testimonials: [
    {
      id: "tv-1",
      name: "Chị Lâm Quỳnh Anh",
      role: "Khách hàng Trẻ hóa mắt & Ortho-K tại Quận 1",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Mình vừa cho bé khám kiểm soát cận thị Ortho-K vừa làm liệu trình xóa nhăn vùng mắt tại Vivision. Bác sĩ cực kỳ nhẹ nhàng, phòng khám hiện đại và kết quả ngoài mong đợi!"
    },
    {
      id: "tv-2",
      name: "Anh Đỗ Minh Quân",
      role: "Kiến trúc sư tại TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      quote:
        "Do làm việc máy tính nhiều nên mắt mình bị mỏi điều tiết và bọng mỡ lớn. Nhờ phác đồ chăm sóc bờ mi và RF vùng mắt tại Vivision mà đôi mắt nhẹ nhõm, trẻ trung hơn hẳn."
    }
  ]
};
