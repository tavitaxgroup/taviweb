import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2BProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  oldPrice?: string;
  price: string;
  discount?: string;
  image: string;
  tab?: "khuyen_mai" | "ban_chay" | "noi_bat";
}

export interface B2BProduct2Data extends ClonedTemplateBaseData {
  categories: Array<{
    id: string;
    name: string;
    count: number;
  }>;
  heroSideBanners: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
    badge?: string;
  }>;
  topProducts: B2BProductItem[];
  workshopBanners: string[];
  dealerPoster: {
    badge: string;
    title: string;
    subtitle: string;
    hotline: string;
    image: string;
  };
  newProducts: B2BProductItem[];
  airCompressors: B2BProductItem[];
  cncPromoBanners: Array<{
    id: string;
    title: string;
    brand: string;
    subtitle: string;
    image: string;
    theme: "blue" | "teal";
  }>;
  cncCutters: B2BProductItem[];
  forklifts: B2BProductItem[];
  cncLathes: B2BProductItem[];
}

export const b2bProduct2DefaultData: B2BProduct2Data = {
  business: {
    name: "CNC MONA",
    phone: ["0126 922 0162", "0902 673 845"],
    email: ["demonhunter@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Từ 8h – 17h (Thứ 2 – Thứ 6) và 8h – 12h (Thứ 7)",
    rating: 4.9,
    reviewCount: 312,
    aboutTitle: "Hệ Thống Phân Phối Máy Cơ Khí CNC & Thiết Bị Công Nghiệp Chính Hãng",
    aboutText: [
      "CNC MONA chuyên nhập khẩu, lắp đặt và chuyển giao công nghệ máy cắt Laser Fiber CNC, máy tiện vạn năng, máy chấn tôn thủy lực, máy nén khí trục vít và xe nâng công nghiệp cho nhà máy cơ khí trên toàn quốc.",
      "Cam kết linh kiện chính hãng 100%, bảo hành tận xưởng 24/7 và hỗ trợ trả góp doanh nghiệp lãi suất ưu đãi."
    ]
  },
  hero: {
    eyebrow: "ĐỘ CHÍNH XÁC CAO • HIỆU SUẤT VƯỢT TRỘI",
    subtitle: "LM 3015M3 - TẤM & ỐNG KIM LOẠI",
    title: "MÁY CẮT LASER FIBER KIM LOẠI CÔNG NGHIỆP",
    description:
      "Hệ thống cắt Laser Fiber CNC công suất lớn từ 1500W - 12000W chuyên dụng cho gia công kim loại tấm và ống thép độ chính xác ±0.02mm.",
    ctaText: "XEM BÁO GIÁ NGAY",
    ctaLink: "#top-san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85"
  },
  categories: [
    { id: "cat-1", name: "Máy Phay", count: 24 },
    { id: "cat-2", name: "Máy Tiện", count: 32 },
    { id: "cat-3", name: "Máy Cắt Laser", count: 18 },
    { id: "cat-4", name: "Máy Chấn Uốn Gấp Tôn", count: 15 },
    { id: "cat-5", name: "Máy Chặt Cắt Tôn", count: 12 },
    { id: "cat-6", name: "Máy Cưa-Cắt Sắt", count: 21 },
    { id: "cat-7", name: "Máy Đột-Dập", count: 14 },
    { id: "cat-8", name: "Máy Ép Nhựa", count: 9 },
    { id: "cat-9", name: "Máy Hàn Plasma", count: 27 },
    { id: "cat-10", name: "Máy Khoan-Taro", count: 19 },
    { id: "cat-11", name: "Máy Nén Khí", count: 36 },
    { id: "cat-12", name: "Máy Uốn Ống", count: 11 }
  ],
  heroSideBanners: [
    {
      id: "hsb-1",
      title: "Máy Cắt Laser Bàn Đôi CNC",
      subtitle: "Tốc độ cắt 120m/phút",
      image:
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hsb-2",
      title: "Chọn giao hàng siêu tốc",
      subtitle: "Tức tốc giao hàng tận xưởng",
      badge: "MIỄN PHÍ VẬN CHUYỂN",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "hsb-3",
      title: "Máy Gia Công Trung Tâm CNC",
      subtitle: "Bảo hành chính hãng 36 tháng",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    }
  ],
  topProducts: [
    {
      id: "tp-1",
      name: "Máy cắt CNC kim loại tấm Elip Silver ES-DT-1530-2000W",
      category: "MÁY CẮT LASER",
      brand: "ELIP",
      oldPrice: "75,000,000 ₫",
      price: "72,540,000 ₫",
      discount: "-3%",
      tab: "khuyen_mai",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-2",
      name: "MÁY NÉN KHÍ MINI GIA ĐÌNH LUCKY 24 LÍT",
      category: "MÁY NÉN KHÍ",
      brand: "G20 LUCKY",
      oldPrice: "2,000,000 ₫",
      price: "1,850,000 ₫",
      discount: "-8%",
      tab: "khuyen_mai",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-3",
      name: "MÁY TIỆN VẠN NĂNG FHG-660, 720, 760",
      category: "MÁY TIỆN",
      brand: "ELIP CNC",
      oldPrice: "54,000,000 ₫",
      price: "53,500,000 ₫",
      discount: "-1%",
      tab: "ban_chay",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "tp-4",
      name: "MÁY CẮT ỐNG PLASMA ELIP-1560-45A",
      category: "MÁY CẮT LASER",
      brand: "ELIP",
      oldPrice: "76,400,000 ₫",
      price: "75,000,000 ₫",
      discount: "-2%",
      tab: "noi_bat",
      image:
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80"
    }
  ],
  workshopBanners: [
    "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80"
  ],
  dealerPoster: {
    badge: "TÌM ĐẠI LÝ",
    title: "PHÂN PHỐI MÁY NÉN KHÍ PEGASUS",
    subtitle: "LIÊN HỆ NGAY VỚI CHÚNG TÔI",
    hotline: "0902.673.845",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
  },
  newProducts: [
    {
      id: "np-1",
      name: "Máy tiện gỗ Elip E-R305*L457",
      category: "MÁY TIỆN",
      brand: "ELIP",
      oldPrice: "650,000,000 ₫",
      price: "635,000,000 ₫",
      discount: "-2%",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-2",
      name: "Máy tiện CNC Elip Plutoni DL-800*1500",
      category: "MÁY TIỆN",
      brand: "ELIP",
      price: "750,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-3",
      name: "Xe Nâng 10 Tấn Elip – ISUZU",
      category: "XE NÂNG-CẨU",
      brand: "TẬP ĐOÀN ELIP",
      price: "350,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  airCompressors: [
    {
      id: "ac-1",
      name: "MÁY NÉN KHÍ MINI GIA ĐÌNH LUCKY 24 LÍT",
      category: "MÁY NÉN KHÍ",
      brand: "G20",
      oldPrice: "2,000,000 ₫",
      price: "1,850,000 ₫",
      discount: "-8%",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ac-2",
      name: "Máy nén khí PUMA PX-75250 (7.5HP)",
      category: "MÁY NÉN KHÍ",
      brand: "EMIN PUMA",
      oldPrice: "28,000,000 ₫",
      price: "27,250,000 ₫",
      discount: "-3%",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ac-3",
      name: "Máy nén khí Pegasus TM-V-0.25/8 (3HP)",
      category: "MÁY NÉN KHÍ",
      brand: "PEGASUS",
      oldPrice: "5,500,000 ₫",
      price: "4,650,000 ₫",
      discount: "-15%",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ac-4",
      name: "Máy bơm hơi 3HP PEGASUS TM-V-0.25/12.5-120L – Dung tích 120L",
      category: "MÁY NÉN KHÍ",
      brand: "PEGASUS",
      price: "7,300,000 ₫",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  cncPromoBanners: [
    {
      id: "cpb-1",
      title: "MÁY NÉN KHÍ TRỤC VÍT",
      brand: "KOBELCO",
      subtitle: "Tự tin nâng bước doanh nghiệp",
      theme: "blue",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "cpb-2",
      title: "MÁY NÉN KHÍ PISTON",
      brand: "JAGUAR",
      subtitle: "Trải nghiệm những thương hiệu hàng đầu",
      theme: "teal",
      image:
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=700&q=80"
    }
  ],
  cncCutters: [
    {
      id: "cc-1",
      name: "Máy cắt tia nước Elip E-30KW*38P-L130*250",
      category: "MÁY CẮT LASER",
      brand: "ELIP",
      oldPrice: "650,000,000 ₫",
      price: "635,000,000 ₫",
      discount: "-2%",
      image:
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-2",
      name: "MÁY CẮT ỐNG PLASMA ELIP-1560-45A",
      category: "MÁY CẮT LASER",
      brand: "ELIP",
      oldPrice: "76,400,000 ₫",
      price: "75,000,000 ₫",
      discount: "-2%",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-3",
      name: "Máy cắt CNC plasma Elip E-130*250-85A",
      category: "MÁY CẮT LASER",
      brand: "ELIP",
      oldPrice: "5,700,000,000 ₫",
      price: "5,545,000,000 ₫",
      discount: "-3%",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cc-4",
      name: "Máy cắt CNC kim loại tấm Elip Silver ES-DT-1530-2000W",
      category: "MÁY CẮT LASER",
      brand: "ELIP",
      oldPrice: "75,000,000 ₫",
      price: "72,540,000 ₫",
      discount: "-3%",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
    }
  ],
  forklifts: [
    {
      id: "fk-1",
      name: "Xe Nâng 10 Tấn Elip – ISUZU",
      category: "XE NÂNG-CẨU",
      brand: "ELIP",
      price: "350,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fk-2",
      name: "Xe Nâng 5 Tấn Elip – MITSUBISHI",
      category: "XE NÂNG-CẨU",
      brand: "ELIP",
      oldPrice: "2,540,000,000 ₫",
      price: "2,375,000,000 ₫",
      discount: "-6%",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fk-3",
      name: "Xe Nâng 2 Tấn Elip – MITSUBISHI",
      category: "XE NÂNG-CẨU",
      brand: "ELIP",
      oldPrice: "41,500,000 ₫",
      price: "41,000,000 ₫",
      discount: "-1%",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fk-4",
      name: "Xe Nâng 2,5 Tấn Elip – MITSUBISHI",
      category: "XE NÂNG-CẨU",
      brand: "ELIP",
      price: "140,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    }
  ],
  cncLathes: [
    {
      id: "lt-1",
      name: "Máy tiện gỗ Elip E-R305*L457",
      category: "MÁY TIỆN",
      brand: "ELIP",
      oldPrice: "650,000,000 ₫",
      price: "635,000,000 ₫",
      discount: "-2%",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "lt-2",
      name: "Máy tiện CNC Elip Plutoni DL-800*1500",
      category: "MÁY TIỆN",
      brand: "ELIP",
      price: "750,000,000 ₫",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "lt-3",
      name: "MÁY TIỆN CNC VẠN NĂNG CÔNG SUẤT CAO DENVER DHL1120",
      category: "MÁY TIỆN",
      brand: "ELIP",
      oldPrice: "55,000,000 ₫",
      price: "54,200,000 ₫",
      discount: "-1%",
      image:
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "lt-4",
      name: "MÁY TIỆN ĐA NĂNG FHL-960",
      category: "MÁY TIỆN",
      brand: "ELIP",
      oldPrice: "45,000,000 ₫",
      price: "42,500,000 ₫",
      discount: "-6%",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
    }
  ],
  clients: [
    { id: "br-1", name: "SUNRISE" },
    { id: "br-2", name: "DONJOY" },
    { id: "br-3", name: "AR ANNOVI REVERBERI" },
    { id: "br-4", name: "KOBELCO" },
    { id: "br-5", name: "ASAK" },
    { id: "br-6", name: "AT INDUSTRIAL" }
  ]
};

export const defaultData = b2bProduct2DefaultData;
export const mockData = b2bProduct2DefaultData;
export default b2bProduct2DefaultData;
