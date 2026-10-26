import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface VuonRauCategoryStripItem {
  id: string;
  name: string;
  image: string;
  filterKey: string;
}

export interface VuonRauPromoCard {
  id: string;
  subtitle: string;
  title: string;
  discountText: string;
  ctaText: string;
  bgColor: string;
  accentColor: string;
  image: string;
}

export interface VuonRauProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  unit: string;
  badge?: string;
  isBestSeller?: boolean;
  isFlashSale?: boolean;
  image: string;
  description: string;
}

export interface VuonRauNewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  badge: string;
}

export interface NhaHang9Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  navItems: string[];
  categoryStrip: VuonRauCategoryStripItem[];
  promoCards: VuonRauPromoCard[];
  bestSellerHeading: string;
  flashSale: {
    subtitle: string;
    title: string;
    description: string;
    bgImage: string;
    countdown: { hours: string; minutes: string; seconds: string };
  };
  products: VuonRauProductItem[];
  testimonial: {
    avatar: string;
    quote: string;
    author: string;
    source: string;
  };
  partnerBadges: {
    id: string;
    topText: string;
    mainText: string;
    subText: string;
  }[];
  newsHeading: string;
  news: VuonRauNewsItem[];
  newsletter: {
    subtitle: string;
    title: string;
    placeholder: string;
    buttonText: string;
  };
}

export const nha_hang_9DefaultData: NhaHang9Data = {
  templateKey: 'nha_hang_9',
  business: {
    name: 'Vườn Rau Bistro & Organic',
    tagline: 'Nhà Hàng Chay Thực Dưỡng & Nông Sản Hữu Cơ Tươi Sạch Từ Nông Trại',
    description:
      'Vườn Rau Bistro mang trọn vẹn hương vị thanh khiết từ nông trại hữu cơ Đà Lạt đến bàn ăn của gia đình bạn. Chuyên phục vụ ẩm thực chay thực dưỡng, rau củ quả sạch chuẩn GlobalGAP và thực phẩm hữu cơ mỗi ngày.',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['lienhe@vuonraubistro.vn', 'cskh@vuonraubistro.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    workingHours: '06:30 - 21:30 (Thứ 2 - Chủ Nhật)',
    socials: {
      facebook: 'https://facebook.com/vuonraubistro',
      instagram: 'https://instagram.com/vuonraubistro',
      zalo: 'https://zalo.me/0769220162',
    },
  },
  navItems: ['Trang chủ', 'Giới thiệu', 'Cửa hàng', 'Danh bạ nhà nông', 'Kiến thức', 'Liên hệ'],
  hero: {
    badge: 'GIAO TẬN TAY NGƯỜI DÙNG',
    title: 'THỰC PHẨM ORGANIC',
    highlight: 'ẨM THỰC CHAY & NÔNG SẢN SẠCH',
    subtitle: 'Chúng tôi cung cấp các sản phẩm hữu cơ & thực đơn chay thanh dưỡng chất lượng cao',
    primaryCta: 'MUA NGAY',
    secondaryCta: 'Đặt Bàn Chay',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1600&q=85',
  },
  categoryStrip: [
    {
      id: 'cat-1',
      name: 'Trái cây',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80',
      filterKey: 'Trái cây',
    },
    {
      id: 'cat-2',
      name: 'Món chay',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
      filterKey: 'Món chay',
    },
    {
      id: 'cat-3',
      name: 'Đồ uống',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80',
      filterKey: 'Đồ uống',
    },
    {
      id: 'cat-4',
      name: 'Rau củ',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80',
      filterKey: 'Rau củ',
    },
    {
      id: 'cat-5',
      name: 'Đồ khô',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
      filterKey: 'Đồ khô',
    },
    {
      id: 'cat-6',
      name: 'Nấm & Đậu hũ',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80',
      filterKey: 'Nấm & Đậu hũ',
    },
  ],
  promoCards: [
    {
      id: 'promo-1',
      subtitle: 'TRÁI CÂY TƯƠI',
      title: 'HEALTHY FOOD',
      discountText: 'Giảm giá 40% cho sản phẩm',
      ctaText: 'XEM THÊM',
      bgColor: '#FDF4DC',
      accentColor: '#A3B837',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'promo-2',
      subtitle: 'RAU SẠCH',
      title: 'GREEN WORLD',
      discountText: 'Giảm giá 40% cho sản phẩm',
      ctaText: 'XEM THÊM',
      bgColor: '#E5F5E0',
      accentColor: '#6DBE45',
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=700&q=80',
    },
  ],
  bestSellerHeading: 'SẢN PHẨM BÁN CHẠY',
  flashSale: {
    subtitle: 'CƠ HỘI SĂN ĐƯỢC GIÁ TỐT NHẤT TUẦN',
    title: 'ĐANG KHUYẾN MÃI',
    description: 'Từ trang trại của chúng tôi ngay trước cửa nhà bạn.',
    bgImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=80',
    countdown: {
      hours: '08',
      minutes: '45',
      seconds: '30',
    },
  },
  products: [
    // 4 Best Sellers
    {
      id: 'bs-1',
      name: 'Ớt chuông Đà Lạt',
      category: 'Rau củ',
      price: '55,000 ₫',
      unit: 'Túi 500g',
      isBestSeller: true,
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80',
      description: 'Ớt chuông xanh Đà Lạt giòn ngọt, trồng nhà kính hữu cơ giàu vitamin C.',
    },
    {
      id: 'bs-2',
      name: 'Dâu tây Đà Lạt',
      category: 'Trái cây',
      price: '125,000 ₫',
      unit: 'Hộp 500g',
      isBestSeller: true,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80',
      description: 'Dâu tây New Zealand trồng thủy canh tại Đà Lạt, thu hoạch sáng sớm.',
    },
    {
      id: 'bs-3',
      name: 'Chanh vàng không hạt',
      category: 'Trái cây',
      price: '85,000 ₫',
      unit: 'Túi 500g',
      isBestSeller: true,
      image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=600&q=80',
      description: 'Chanh vàng mọng nước thơm dịu dùng pha trà detox và làm xốt salad chay.',
    },
    {
      id: 'bs-4',
      name: 'Nho đen không hạt hữu cơ',
      category: 'Trái cây',
      price: '145,000 ₫',
      unit: 'Hộp 500g',
      isBestSeller: true,
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80',
      description: 'Nho đen hữu cơ ngọt thanh, vỏ mỏng giàu chất chống oxy hóa resveratrol.',
    },

    // 4 Flash Sale Products
    {
      id: 'fs-1',
      name: 'Xoài cát Hòa Lộc Global GAP loại 1',
      category: 'Trái cây',
      price: '140,000 ₫',
      originalPrice: '175,000 ₫',
      unit: 'Kg',
      badge: 'Tự nhiên',
      isFlashSale: true,
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
      description: 'Xoài cát Hòa Lộc chín cây thơm lừng, thịt dày mịn không xơ chuẩn GlobalGAP.',
    },
    {
      id: 'fs-2',
      name: 'Bơ sáp 034 Lâm Đồng hướng hữu cơ',
      category: 'Trái cây',
      price: '135,000 ₫',
      originalPrice: '160,000 ₫',
      unit: 'Kg',
      badge: 'Hữu cơ',
      isFlashSale: true,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
      description: 'Bơ sáp 034 dẻo béo tự nhiên, hạt nhỏ, thích hợp làm salad chay và sinh tố.',
    },
    {
      id: 'fs-3',
      name: 'Set lẩu nấm chay thảo mộc Đà Lạt 1kg',
      category: 'Món chay',
      price: '195,000 ₫',
      originalPrice: '240,000 ₫',
      unit: 'Set 1kg',
      badge: 'Bếp Chay',
      isFlashSale: true,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
      description: 'Set 6 loại nấm tươi Đà Lạt kèm nước dùng thảo mộc táo đỏ kỷ tử thanh ngọt.',
    },
    {
      id: 'fs-4',
      name: 'Cam xoàn hướng hữu cơ 1kg',
      category: 'Trái cây',
      price: '65,000 ₫',
      originalPrice: '85,000 ₫',
      unit: 'Kg',
      badge: 'Rau củ sạch',
      isFlashSale: true,
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80',
      description: 'Cam xoàn vườn sinh thái vị ngọt thanh đậm đà, mọng nước cho cả gia đình.',
    },
  ],
  testimonial: {
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quote:
      'Rau củ và các món chay thực dưỡng tại Vườn Rau Bistro luôn giữ được độ tươi giòn tự nhiên. Gia đình mình đặt combo rau sạch và chả cốm chay mỗi tuần đều rất yên tâm về nguồn gốc hữu cơ minh bạch.',
    author: 'chị Giang',
    source: 'Facebook',
  },
  partnerBadges: [
    { id: 'pb-1', topText: 'CERTIFIED', mainText: 'ORGANIC', subText: '100% Natural' },
    { id: 'pb-2', topText: 'GREEN FARM', mainText: 'DALAT BIO', subText: 'Fresh Harvest' },
    { id: 'pb-3', topText: 'TIÊU CHUẨN', mainText: 'VIETGAP', subText: 'An Toàn Sinh Học' },
    { id: 'pb-4', topText: 'ẨM THỰC CHAY', mainText: 'VEGAN LIFE', subText: 'Thực Dưỡng Xanh' },
    { id: 'pb-5', topText: 'THE ORIGINAL', mainText: 'GREENLINE', subText: 'Since 2018' },
  ],
  newsHeading: 'TIN TỨC',
  news: [
    {
      id: 'nw-1',
      title: 'Nấm vân chi có tác dụng gì trong thực đơn chay dưỡng sinh?',
      date: '16 Tháng Năm, 2026',
      excerpt:
        'Cách đây hơn 2000 năm, nấm vân chi rừng đã được biết đến và sử dụng trong các món canh dưỡng sinh giúp tăng cường đề kháng...',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
      badge: 'Dược liệu xanh',
    },
    {
      id: 'nw-2',
      title: 'Chả cốm chay ăn với gì ngon? Gợi ý 4 món thanh đạm dễ làm',
      date: '16 Tháng Năm, 2026',
      excerpt:
        'Chả cốm chay làm từ cốm non làng Vòng, đậu xanh và hạt sen chiên vàng giòn rụm, ăn kèm bún đậu mắm chay hoặc cơm gạo lứt...',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
      badge: 'Bếp Chay',
    },
    {
      id: 'nw-3',
      title: 'Cốm tươi làm món gì ngon? Bí quyết giữ hương cốm non gói lá sen',
      date: '16 Tháng Năm, 2026',
      excerpt:
        'Cốm tươi làm món gì ngon? Dùng cốm tươi nấu chè hạt sen, xôi cốm dừa non hoặc làm bánh cốm chay thanh tao cho ngày rằm...',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
      badge: 'Tự nhiên',
    },
  ],
  newsletter: {
    subtitle: 'ĐĂNG KÝ NGAY',
    title: 'GIẢM GIÁ 30% ĐƠN HÀNG',
    placeholder: 'Email của bạn...',
    buttonText: 'ĐĂNG KÝ',
  },
};

export const defaultData = nha_hang_9DefaultData;
export const mockData = nha_hang_9DefaultData;
export default nha_hang_9DefaultData;
