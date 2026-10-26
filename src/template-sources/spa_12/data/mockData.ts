export interface BusinessInfo {
  name: string;
  logoTitle: string;
  logoSub: string;
  promoTopBar: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
}

export interface SummerProductItem {
  id: string;
  name: string;
  category: 'khuyen-mai' | 'moi-nhat' | 'pho-bien' | 'phu-kien';
  discountBadge?: string;
  oldPrice?: string;
  price: string;
  rating?: number;
  reviewCount?: number;
  swatches?: string[];
  image: string;
}

export interface BrandShowcaseItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

export interface TrustPillarItem {
  id: string;
  title: string;
  description: string;
  iconKey: 'warranty' | 'authentic' | 'shipping' | 'return';
}

export const business: BusinessInfo = {
  name: 'SummerGlow Beach Spa & Travel Boutique',
  logoTitle: 'Online',
  logoSub: 'SUMMER BEACH & SPA',
  promoTopBar: 'MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TRÊN 1,5TR',
  phone: ['(+84) 0313-728-397', '0909 728 397'],
  email: ['info@themona.global', 'cskh@summerglowspa.vn'],
  address: '1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM',
  workingHours: '09:00 - 18:00 Thứ 2 đến Thứ 6',
};

export const CATEGORY_NAV = [
  { label: 'Mới nhất', href: '#moi-nhat' },
  { label: 'Bán chạy', href: '#pho-bien' },
  { label: 'Nổi bật', href: '#khuyen-mai' },
  { label: 'Đồ biển & Chống nắng', href: '#pho-bien' },
  { label: 'Túi xách du lịch', href: '#moi-nhat' },
  { label: 'Phụ kiện đi biển & Spa', href: '#phu-kien' },
  { label: 'Đồ tắm', href: '#pho-bien' },
  { label: 'Khuyến mãi', href: '#khuyen-mai' },
  { label: 'Thương hiệu', href: '#thuong-hieu' },
  { label: 'Thêm', href: '#tai-sao-chon' },
];

export const HERO_BANNERS = {
  leftBanner: {
    scriptTitle: 'The Mona',
    mainTitle: 'Summer Sale',
    badge: '50% OFF',
    subtitle: 'Bộ sưu tập chăm sóc da biển nhiệt đới & hành lý nghỉ dưỡng',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
  },
  rightBanner: {
    scriptTitle: 'The Mona',
    mainTitle: 'New Collection',
    badge: 'SUMMER GLOW',
    subtitle: 'Kem chống nắng khoáng chất, tinh dầu tắm nắng & phụ kiện resort',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
  },
};

export const PROMO_PRODUCTS: SummerProductItem[] = [
  {
    id: 'pr-01',
    name: 'Vali kéo nhựa Sakos Sapphire & Bộ Kit Spa Biển (Khung nhôm)',
    category: 'khuyen-mai',
    discountBadge: '-7%',
    oldPrice: '4,200,000₫',
    price: '3,900,000₫',
    image:
      'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pr-02',
    name: 'Vali kéo nhựa Stargo Pilaster (khung nhôm)',
    category: 'khuyen-mai',
    discountBadge: '-6%',
    oldPrice: '320,000₫',
    price: '300,000₫',
    image:
      'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pr-03',
    name: 'Gối cổ du lịch thảo mộc The Travel Star TA33222 travel neck pillow',
    category: 'khuyen-mai',
    discountBadge: '-2%',
    oldPrice: '460,000₫',
    price: '450,000₫',
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pr-04',
    name: 'Kính bơi cận thị Nhật Bản Swans FO-X1OP chống tia UV',
    category: 'khuyen-mai',
    discountBadge: '-6%',
    oldPrice: '340,000₫',
    price: '320,000₫',
    rating: 5,
    reviewCount: 2,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pr-05',
    name: 'Kính Bơi Người Lớn Speedo Fastskin Speedsocket',
    category: 'khuyen-mai',
    discountBadge: '-23%',
    oldPrice: '260,000₫',
    price: '200,000₫',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
  },
];

export const NEWEST_PRODUCTS: SummerProductItem[] = [
  {
    id: 'nw-01',
    name: 'Vali kéo nhựa Stargo Symmetry & Túi đựng mỹ phẩm chống nước',
    category: 'moi-nhat',
    price: '3,780,000₫',
    image:
      'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'nw-02',
    name: 'Vali kéo nhựa Stargo Capsula Sắc Vàng Nhiệt Đới',
    category: 'moi-nhat',
    price: '4,190,000₫',
    image:
      'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'nw-03',
    name: 'Vali kéo nhựa Sakos Sapphire (Khung nhôm)',
    category: 'moi-nhat',
    discountBadge: '-7%',
    oldPrice: '4,200,000₫',
    price: '3,900,000₫',
    image:
      'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'nw-04',
    name: 'Vali kéo nhựa Stargo Pilaster (khung nhôm)',
    category: 'moi-nhat',
    discountBadge: '-6%',
    oldPrice: '320,000₫',
    price: '300,000₫',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'nw-05',
    name: 'Gối cổ du lịch hương oải hương The Travel Star TA33217',
    category: 'moi-nhat',
    price: '350,000₫',
    rating: 5,
    reviewCount: 1,
    image:
      'https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=600&q=80',
  },
];

export const POPULAR_PRODUCTS: SummerProductItem[] = [
  {
    id: 'pop-01',
    name: 'Đồ Bơi Một Mảnh Nữ Speedo Placement Legsuit',
    category: 'pho-bien',
    discountBadge: '-20%',
    oldPrice: '300,000₫',
    price: '240,000₫',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pop-02',
    name: 'Phao Bơi Nghỉ Dưỡng OCEANMAN 35L 102',
    category: 'pho-bien',
    discountBadge: '-38%',
    oldPrice: '420,000₫',
    price: '260,000₫',
    rating: 5,
    reviewCount: 1,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pop-03',
    name: 'Đồ Bơi Một Mảnh Nữ Speedo Zip Front Short Sleeve',
    category: 'pho-bien',
    price: '220,000₫',
    rating: 5,
    reviewCount: 2,
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pop-04',
    name: 'Áo Bơi Chống Nắng Nữ Speedo Sun Protection UPF50+',
    category: 'pho-bien',
    discountBadge: '-5%',
    price: '210,000₫ – 400,000₫',
    rating: 5,
    reviewCount: 1,
    swatches: ['#111827', '#d97706', '#dc2626'],
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pop-05',
    name: 'Quần bơi nữ hai lớp năng động & Xịt khoáng dưỡng ẩm sau nắng',
    category: 'pho-bien',
    price: '360,000₫',
    rating: 5,
    reviewCount: 1,
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
  },
];

export const ACCESSORY_PRODUCTS: SummerProductItem[] = [
  {
    id: 'acc-01',
    name: 'Gối cổ du lịch The Travel Star TA33217 travel neck pillow',
    category: 'phu-kien',
    price: '350,000₫',
    rating: 5,
    reviewCount: 1,
    image:
      'https://images.unsplash.com/photo-1608248597359-0e6d526a6c18?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-02',
    name: 'Gối cổ du lịch The Travel Star TA33222 travel neck pillow',
    category: 'phu-kien',
    discountBadge: '-2%',
    oldPrice: '460,000₫',
    price: '450,000₫',
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-03',
    name: 'Kính Bơi Người Lớn Speedo Biofuse 2.0 Polarised',
    category: 'phu-kien',
    price: '290,000₫',
    image:
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-04',
    name: 'Kính bơi cận thị Nhật Bản Swans FO-X1OP',
    category: 'phu-kien',
    discountBadge: '-6%',
    oldPrice: '340,000₫',
    price: '320,000₫',
    rating: 5,
    reviewCount: 2,
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'acc-05',
    name: 'Kính Bơi Người Lớn Speedo Fastskin Speedsocket',
    category: 'phu-kien',
    discountBadge: '-23%',
    oldPrice: '260,000₫',
    price: '200,000₫',
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
  },
];

export const FEATURED_BRANDS: BrandShowcaseItem[] = [
  {
    id: 'br-01',
    name: 'BeachVibe',
    subtitle: 'Kem chống nắng & Phụ kiện biển',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-02',
    name: 'TravelTide',
    subtitle: 'Vali & Bộ chiết mỹ phẩm Spa',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-03',
    name: 'WaveNest',
    subtitle: 'Nón cói & Tinh dầu dưỡng da',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-04',
    name: 'SunnyPack',
    subtitle: 'Hành lý nghỉ dưỡng thông minh',
    image:
      'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-05',
    name: 'OceanBreeze',
    subtitle: 'Xịt khoáng lô hội biển sâu',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-06',
    name: 'BeachBound',
    subtitle: 'Tổ hợp phụ kiện Resort 5 sao',
    image:
      'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-07',
    name: 'TidalWave',
    subtitle: 'Thời trang bơi chống tia cực tím',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'br-08',
    name: 'SandyFeet',
    subtitle: 'Túi du lịch & Áo choàng tắm Spa',
    image:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
  },
];

export const INSTAGRAM_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=500&q=80',
];

export const TRUST_PILLARS: TrustPillarItem[] = [
  {
    id: 'tr-01',
    title: 'Bảo hành toàn cầu',
    description: 'Chúng tôi cung cấp chính sách bảo hành toàn cầu',
    iconKey: 'warranty',
  },
  {
    id: 'tr-02',
    title: 'Hàng hiệu chính hãng',
    description: 'Tất cả sản phẩm đều là hàng hiệu chính hãng',
    iconKey: 'authentic',
  },
  {
    id: 'tr-03',
    title: 'Miễn phí vận chuyển',
    description: 'Miễn phí vận chuyển cho các đơn hàng trên 1,5tr',
    iconKey: 'shipping',
  },
  {
    id: 'tr-04',
    title: 'Đổi trả 7 ngày',
    description: 'Sẵn sàng đổi trả nếu sản phẩm gặp lỗi kĩ thuật',
    iconKey: 'return',
  },
];
