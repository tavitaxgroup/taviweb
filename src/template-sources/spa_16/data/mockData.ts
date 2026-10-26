export interface BusinessInfo {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  showroomHours: string;
}

export interface CustomizerSeatOption {
  id: string;
  tabGroup: 'massage-chair' | 'pedi-set';
  codeName: string;
  vietnameseTitle: string;
  leatherColor: string;
  ledBasinColor: string;
  priceUsd: number;
  priceVnd: string;
  sku: string;
  description: string;
  image: string;
}

export interface CustomizerBaseOption {
  id: string;
  name: string;
  finish: string;
  surchargeUsd: number;
}

export interface SpaFurnitureProduct {
  id: string;
  name: string;
  category: string;
  sku: string;
  priceDisplay: string;
  vndPrice: string;
  specSummary: string;
  image: string;
}

export const business: BusinessInfo = {
  name: 'T-SPA LLC — Nội Thất Ghế Spa Cao Cấp & Thiết Kế Phòng Trị Liệu',
  shortName: 'T-SPA LLC',
  monogram: 'TP',
  tagline: 'Nhà Sản Xuất Ghế Pedicure Massage, Giường Trị Liệu & Giải Pháp Nội Thất Spa Chuẩn Hoa Kỳ',
  phone: ['0909 235 889', '0313 728 397'],
  email: ['sales@tspa-furniture.vn', 'info@themona.global'],
  address: 'Khu Công Nghệ Cao & Showroom Quận 7, TP. Hồ Chí Minh',
  showroomHours: 'Thứ Hai – Thứ Bảy: 08:30 – 18:30',
};

export const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '#top-tspa' },
  { label: 'DÒNG GHẾ PRESIDENT', href: '#president-hero' },
  { label: 'TỰ CUSTOM GHẾ SPA', href: '#customizer-studio' },
  { label: 'BÀN NAIL & LINH KIỆN', href: '#noi-that-phu-kien' },
  { label: 'THIẾT KẾ PHÒNG SPA', href: '#giai-phap-tron-goi' },
  { label: 'LIÊN HỆ BÁO GIÁ', href: '#lien-he-tspa' },
];

export const HERO_PRESIDENT = {
  modelTitle: 'PRESIDENT',
  subtitle: 'Pedicure Chair — Tuyệt Tác Ghế Spa Thủy Trị Liệu Đỉnh Cao',
  slideIndex: '01',
  ctaLabel: 'More Details',
  description:
    'Tích hợp hệ thống massage con lăn 4D Shiatsu êm ái, bồn ngâm chân pha lê kháng khuẩn Pipeless Whirlpool, tay vịn ốp gỗ óc chó chống thấm acetone và dải đèn LED Vàng Champagne sang trọng.',
  heroChairImage:
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
};

export const CUSTOMIZER_SEAT_OPTIONS: CustomizerSeatOption[] = [
  {
    id: 'seat-throne-2',
    tabGroup: 'massage-chair',
    codeName: 'Throne 2 — Wyatt Edition',
    vietnameseTitle: 'Ghế Massage Da Microfiber Đen Obsidian & Bồn Pha Lê Tím',
    leatherColor: 'Charcoal Obsidian',
    ledBasinColor: 'Amethyst Purple LED',
    priceUsd: 3000,
    priceVnd: '75.000.000 ₫',
    sku: 'MONAMEDIA2358',
    description:
      'Mẫu ghế Pedicure & Spa đầu bảng thiết kế công thái học chuẩn Hoa Kỳ. Tích hợp bộ cơ massage 6 chế độ bấm huyệt lưng – hông, cổng sạc USB đôi, khay để ly gập gọn và bồn ngâm chân sứ thủy tinh chịu lực cao cấp.',
    image:
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'seat-t-essential',
    tabGroup: 'massage-chair',
    codeName: 'T-essential — Silver Pearl',
    vietnameseTitle: 'Ghế Massage Da Trắng Ngọc Trai & Tay Vịn Vân Đá Marble',
    leatherColor: 'Pearl White',
    ledBasinColor: 'Crystal Gold LED',
    priceUsd: 2850,
    priceVnd: '71.250.000 ₫',
    sku: 'MONAMEDIA2359',
    description:
      'Phiên bản T-essential thanh lịch với lớp da PU kháng hóa chất thế hệ mới, ngả lưng điện tự động 135 độ và hệ thống xả nước siêu tốc dành cho các viện chăm sóc da – nail spa 5 sao.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'seat-chair-classic',
    tabGroup: 'massage-chair',
    codeName: 'Chair — Royal Mocha',
    vietnameseTitle: 'Ghế Spa Hoàng Gia Nâu Mocha & Chỉ Thêu Kim Cương',
    leatherColor: 'Espresso Mocha',
    ledBasinColor: 'Warm Amber LED',
    priceUsd: 3200,
    priceVnd: '80.000.000 ₫',
    sku: 'MONAMEDIA2360',
    description:
      'Đệm mút hoạt tính Memory Foam dày gấp đôi cùng đường may quả trám thủ công, mang lại trải nghiệm êm ái tuyệt đối cho các liệu trình chăm sóc toàn thân kéo dài trên 90 phút.',
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'pedi-set-luxury',
    tabGroup: 'pedi-set',
    codeName: 'Wyatt Complete Pedi Set',
    vietnameseTitle: 'Trọn Bộ Ghế Wyatt + Ghế Kỹ Thuật Viên Đồng Bộ + Khay Dụng Cụ',
    leatherColor: 'Obsidian & Gold Trim',
    ledBasinColor: 'Dual RGB Spectrum',
    priceUsd: 3450,
    priceVnd: '86.250.000 ₫',
    sku: 'MONAMEDIA2365',
    description:
      'Bộ giải pháp đồng bộ bao gồm 01 ghế Pedicure Wyatt, 01 ghế đôn kỹ thuật viên nâng hạ thủy lực êm ái và hệ thống thông gió hút mùi tích hợp ngay tại chân bồn.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
  },
];

export const CUSTOMIZER_BASES: CustomizerBaseOption[] = [
  {
    id: 'base-white-gold',
    name: 'Chân Đế Fiberglass Trắng Ngọc & Viền Vàng Gold',
    finish: 'Glossy White + Champagne Gold LED',
    surchargeUsd: 0,
  },
  {
    id: 'base-matte-black',
    name: 'Chân Đế Đen Nhám Obsidian & Bồn Pha Lê Đen',
    finish: 'Matte Onyx + Smoked Crystal Bowl',
    surchargeUsd: 150,
  },
  {
    id: 'base-marble-vein',
    name: 'Chân Đế Ốp Đá Cẩm Thạch Calacatta Chống Trầy',
    finish: 'Italian Calacatta Vein + Rose Gold Trim',
    surchargeUsd: 250,
  },
];

export const RELATED_FURNITURE: SpaFurnitureProduct[] = [
  {
    id: 'fur-01',
    name: 'Armrest Wood Top',
    category: 'Furniture Parts',
    sku: 'TSPA-PRT-01',
    priceDisplay: '$120.00',
    vndPrice: '3.000.000 ₫',
    specSummary: 'Mặt tay vịn gỗ tự nhiên phủ kháng Acetone chống bám bẩn',
    image:
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fur-02',
    name: 'Zano Double Table',
    category: 'Furniture Table',
    sku: 'TSPA-TBL-02',
    priceDisplay: '$1,150.00',
    vndPrice: '28.750.000 ₫',
    specSummary: 'Bàn làm móng đôi mặt đá thạch anh kèm hệ thống hút bụi âm bàn',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fur-03',
    name: 'La Diva Couple Table',
    category: 'Furniture Table',
    sku: 'TSPA-TBL-03',
    priceDisplay: '$1,380.00',
    vndPrice: '34.500.000 ₫',
    specSummary: 'Bàn đôi VIP khung viền vàng Gold kết hợp tủ ngăn kéo giảm chấn',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fur-04',
    name: 'DC Motor Actuator',
    category: 'Massage Chair Parts',
    sku: 'TSPA-MTR-04',
    priceDisplay: '$185.00',
    vndPrice: '4.600.000 ₫',
    specSummary: 'Động cơ tuyến tính siêu êm điều chỉnh độ ngả lưng và trượt ghế',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fur-05',
    name: 'Throne Reception Counter',
    category: 'Furniture Reception',
    sku: 'TSPA-RCP-05',
    priceDisplay: '$2,100.00',
    vndPrice: '52.500.000 ₫',
    specSummary: 'Quầy lễ tân Spa ốp lam sóng và đèn LED hắt chân sang trọng',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
  },
];
