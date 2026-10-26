import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface GiaBaoBrandPartner {
  id: string;
  name: string;
  origin: string;
  specialty: string;
}

export interface GiaBaoEquipmentItem {
  id: string;
  code: string;
  name: string;
  brand: string;
  category: 'oven_combi' | 'wine_cooling' | 'dishwasher_hob' | 'coffee_bar';
  categoryLabel: string;
  price: string;
  originalPrice?: string;
  origin: string;
  warranty: string;
  badge?: string;
  specs: string[];
  image: string;
  description: string;
}

export interface GiaBaoKitchenProject {
  id: string;
  title: string;
  location: string;
  category: string;
  equipmentPackage: string;
  image: string;
  summary: string;
}

export interface NhaHang12Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  brandLogo: {
    main: string;
    sub: string;
  };
  navItems: string[];
  partnerBrands: GiaBaoBrandPartner[];
  equipmentCategories: {
    id: 'all' | 'oven_combi' | 'wine_cooling' | 'dishwasher_hob' | 'coffee_bar';
    label: string;
  }[];
  equipmentItems: GiaBaoEquipmentItem[];
  featuredDishwasherCard: {
    badge: string;
    title: string;
    model: string;
    price: string;
    highlights: string[];
    image: string;
  };
  kitchenProjects: GiaBaoKitchenProject[];
  showrooms: {
    city: string;
    title: string;
    address: string;
    phone: string;
    hours: string;
    image: string;
  }[];
}

export const nha_hang_12DefaultData: NhaHang12Data = {
  templateKey: 'nha_hang_12',
  business: {
    name: 'Gia Bảo LuxKitchen — Thiết Bị Bếp Nhà Hàng & Gia Dụng Thượng Hạng',
    tagline: 'Thiết Bị Bếp Và Gia Dụng Nhập Khẩu Chính Hãng Châu Âu',
    description:
      'Gia Bảo Luxhome & LuxKitchen chuyên phân phối và thi công trọn gói thiết bị bếp nhà hàng Fine Dining, bếp đảo biệt thự và gia dụng nhập khẩu chính hãng từ Miele, Bosch, Liebherr, LG, Philips, Dyson với trụ sở Hà Nội và chi nhánh TP.HCM.',
    phone: ['0903 886 999', '1900 6889'],
    email: ['project@giabaoluxhome.vn', 'cskh@giabaoluxhome.vn'],
    address: 'Trụ sở: 88 Phố Huế, Quận Hai Bà Trưng, Hà Nội • Chi nhánh: 126 Nguyễn Cơ Thạch, Sala, TP. Thủ Đức, TP.HCM',
    workingHours: '08:30 - 21:00 (Thứ 2 - Chủ Nhật)',
    socials: {
      facebook: 'https://facebook.com/giabaoluxhome',
      instagram: 'https://instagram.com/giabaoluxhome',
      zalo: 'https://zalo.me/0903886999',
    },
  },
  brandLogo: {
    main: 'GIA BAO',
    sub: 'Luxhome & Kitchen',
  },
  navItems: [
    'Trang Chủ',
    'Thiết Bị Bếp Miele & Bosch',
    'Tủ Rượu Liebherr',
    'Giải Pháp Bếp Fine Dining',
    'Dự Án Thực Tế',
    'Showroom HN & TP.HCM',
  ],
  hero: {
    badge: 'SHOWROOM THIẾT BỊ BẾP THƯỢNG LƯU & NHÀ HÀNG FINE DINING',
    title: 'THIẾT BỊ BẾP VÀ GIA DỤNG NHẬP KHẨU CHÍNH HÃNG',
    highlight: 'Miele, Bosch, Liebherr, LG, Philips, Dyson',
    subtitle:
      'Miele, Bosch, Liebherr, LG, Philips, Dyson — Hệ thống phân phối & bảo hành chính hãng với trụ sở Hà Nội và chi nhánh TP.HCM.',
    primaryCta: 'Khám Phá Thiết Bị Bếp',
    secondaryCta: 'Đặt Lịch Trải Nghiệm Showroom',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
  },
  partnerBrands: [
    { id: 'br-1', name: 'MIELE', origin: 'CHLB Đức', specialty: 'Lò nướng Combi & Máy pha cà phê âm tủ' },
    { id: 'br-2', name: 'BOSCH', origin: 'CHLB Đức', specialty: 'Máy rửa chén Serie 8 & Bếp từ đa điểm' },
    { id: 'br-3', name: 'LIEBHERR', origin: 'Đức / Thụy Sĩ', specialty: 'Tủ ướp rượu vang & Tủ lạnh BioFresh' },
    { id: 'br-4', name: 'LG SIGNATURE', origin: 'Hàn Quốc', specialty: 'Thiết bị bếp thông minh & Tủ chăm sóc' },
    { id: 'br-5', name: 'PHILIPS', origin: 'Hà Lan', specialty: 'Thiết bị chế biến & Gia dụng cao cấp' },
    { id: 'br-6', name: 'DYSON', origin: 'Vương Quốc Anh', specialty: 'Giải pháp lọc khí & Chăm sóc không gian' },
  ],
  equipmentCategories: [
    { id: 'all', label: 'Tất Cả Thiết Bị' },
    { id: 'oven_combi', label: 'Lò Nướng & Hấp Combi' },
    { id: 'wine_cooling', label: 'Tủ Rượu & Lạnh Âm Tủ' },
    { id: 'dishwasher_hob', label: 'Máy Rửa Chén & Bếp Từ' },
    { id: 'coffee_bar', label: 'Máy Pha Cà Phê & Quầy Bar' },
  ],
  featuredDishwasherCard: {
    badge: 'CÂN CHỈNH LẮP ĐẶT CHUẨN KỸ THUẬT ĐỨC',
    title: 'Máy Rửa Chén Độc Lập & Âm Tủ Inox 304 Chống Vân Tay',
    model: 'Bosch Serie 8 SMS8YCI03E / Miele G 7310 SCi',
    price: '42.900.000 ₫',
    highlights: [
      'Công nghệ sấy khoáng chất Zeolith khô hoàn hảo cho ly pha lê nhà hàng',
      'Vận hành siêu êm 41dB, diệt khuẩn HygienePlus 75°C',
      'Lắp đặt cân bằng thủy chuẩn chính xác tại Hà Nội & TP.HCM',
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85',
  },
  equipmentItems: [
    {
      id: 'eq-1',
      code: 'MIELE-DGC7860',
      name: 'Lò Hấp Nướng Kết Hợp Âm Tủ Miele DGC 7860 Obsidian Black',
      brand: 'Miele',
      category: 'oven_combi',
      categoryLabel: 'Lò Nướng & Hấp Combi',
      price: '168.000.000 ₫',
      originalPrice: '182.000.000 ₫',
      origin: 'Made in Germany',
      warranty: 'Bảo hành 36 tháng',
      badge: 'Flagship Miele',
      specs: ['Màn hình M Touch', 'Que đo nhiệt không dây', 'Hấp đối lưu DualSteam'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80',
      description:
        'Lò hấp nướng combi đầu bảng của Miele dành cho bếp trưởng Fine Dining và biệt thự cao cấp, giữ trọn độ mọng ngọt của bò Wagyu và hải sản.',
    },
    {
      id: 'eq-2',
      code: 'MIELE-CVA7845',
      name: 'Máy Pha Cà Phê Âm Tủ Tự Động Miele CVA 7845 DirectWater',
      brand: 'Miele',
      category: 'coffee_bar',
      categoryLabel: 'Máy Pha Cà Phê & Quầy Bar',
      price: '145.000.000 ₫',
      origin: 'Made in Germany',
      warranty: 'Bảo hành 36 tháng',
      badge: 'Best Seller',
      specs: ['3 khoang chứa hạt CoffeeSelect', 'Tự động tẩy cặn AutoDescale', 'Cảm biến cốc CupSensor'],
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
      description:
        'Hệ thống pha chế Espresso, Cappuccino và Latte Macchiato chuẩn Barista tích hợp liền mạch trong hệ tủ gỗ óc chó.',
    },
    {
      id: 'eq-3',
      code: 'BOSCH-SMS8YCI03E',
      name: 'Máy Rửa Chén Độc Lập Bosch Serie 8 SMS8YCI03E Sấy Zeolith',
      brand: 'Bosch',
      category: 'dishwasher_hob',
      categoryLabel: 'Máy Rửa Chén & Bếp Từ',
      price: '42.900.000 ₫',
      originalPrice: '48.500.000 ₫',
      origin: 'Made in Germany',
      warranty: 'Bảo hành 36 tháng',
      badge: 'Zeolith Drying',
      specs: ['Sức chứa 14 bộ Âu', 'Sấy đá khoáng Zeolith', 'Kết nối Home Connect'],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
      description:
        'Vỏ thép không gỉ cao cấp chống bám vân tay, vùng rửa sâu IntensiveZone làm sạch nồi chảo và ly rượu vang pha lê.',
    },
    {
      id: 'eq-4',
      code: 'LIEBHERR-EWTGW3583',
      name: 'Tủ Ướp Rượu Vang Âm Tủ 2 Vùng Nhiệt Liebherr EWTgw 3583 Vinidor',
      brand: 'Liebherr',
      category: 'wine_cooling',
      categoryLabel: 'Tủ Rượu & Lạnh Âm Tủ',
      price: '129.000.000 ₫',
      origin: 'Made in Austria/Germany',
      warranty: 'Bảo hành 36 tháng',
      badge: 'Sommelier Choice',
      specs: ['Sức chứa 83 chai Bordeaux', 'Kính chống tia UV 3 lớp', 'Kệ gỗ sồi trượt êm'],
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80',
      description:
        'Bảo quản rượu vang đỏ và Champagne ở hai dải nhiệt độ độc lập từ +5°C đến +20°C với bộ lọc than hoạt tính FreshAir.',
    },
    {
      id: 'eq-5',
      code: 'BOSCH-PXY875DC1E',
      name: 'Bếp Từ Đa Điểm Bosch Serie 8 PXY875DC1E DirectSelect Premium',
      brand: 'Bosch',
      category: 'dishwasher_hob',
      categoryLabel: 'Máy Rửa Chén & Bếp Từ',
      price: '34.500.000 ₫',
      originalPrice: '39.000.000 ₫',
      origin: 'Made in Spain',
      warranty: 'Bảo hành 36 tháng',
      specs: ['2 vùng nấu FlexInduction', 'Cảm biến chiên PerfectFry', 'Mặt kính Schott Ceran'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
      description:
        'Kiểm soát nhiệt độ dầu ăn 5 cấp độ chuẩn xác cho các món bít tết áp chảo và xốt Âu tại bàn bếp đảo.',
    },
    {
      id: 'eq-6',
      code: 'LIEBHERR-SBSES8496',
      name: 'Tủ Lạnh Side-by-Side Liebherr SBSes 8496 PremiumPlus BioFresh',
      brand: 'Liebherr',
      category: 'wine_cooling',
      categoryLabel: 'Tủ Rượu & Lạnh Âm Tủ',
      price: '215.000.000 ₫',
      origin: 'Made in Germany',
      warranty: 'Bảo hành 36 tháng',
      badge: '645 Lít',
      specs: ['Ngăn BioFresh 0°C', 'Tích hợp tủ rượu vang', 'Thép SmartSteel'],
      image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=700&q=80',
      description:
        'Trung tâm bảo quản thực phẩm hữu cơ, nấm Truffle, phô mai và rượu vang thượng hạng với 6 vùng khí hậu chuyên biệt.',
    },
  ],
  kitchenProjects: [
    {
      id: 'pj-1',
      title: 'Bếp Mở Fine Dining & Bàn Đảo Gỗ Óc Chó — Penthouse Ciputra Hà Nội',
      location: 'Tây Hồ, Hà Nội',
      category: 'Biệt Thự & Penthouse',
      equipmentPackage: 'Combo Miele Obsidian Black + Tủ Rượu Liebherr (680 Triệu)',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
      summary:
        'Hệ tủ gỗ óc chó Bắc Mỹ kết hợp bộ đôi lò hấp nướng Miele DGC 7860 và máy pha cà phê âm tủ đồng bộ.',
    },
    {
      id: 'pj-2',
      title: 'Không Gian Bếp Trình Diễn Open-Kitchen — Nhà Hàng Âu La Maison',
      location: 'Khu Đô Thị Sala, TP.HCM',
      category: 'Bếp Nhà Hàng Cao Cấp',
      equipmentPackage: 'Hệ thống Bosch Serie 8 & Liebherr Vinidor (520 Triệu)',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
      summary:
        'Giải pháp bếp mở không khói vận hành êm ái giúp thực khách thưởng thức trọn vẹn màn trình diễn ẩm thực của Bếp trưởng.',
    },
    {
      id: 'pj-3',
      title: 'Phòng Rượu Vang & Quầy Bar Gia Đình — Dinh Thự Vinhomes Riverside',
      location: 'Long Biên, Hà Nội',
      category: 'Hầm Rượu & Bar',
      equipmentPackage: 'Hệ Tủ Rượu Liebherr & Máy Rửa Ly Miele (410 Triệu)',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
      summary:
        'Lưu trữ hơn 300 chai vang Grand Cru cùng hệ thống rửa sấy ly pha lê chuyên dụng không để lại vệt nước.',
    },
  ],
  showrooms: [
    {
      city: 'TRỤ SỞ HÀ NỘI',
      title: 'Gia Bảo Luxhome Flagship Gallery Hà Nội',
      address: '88 Phố Huế, Quận Hai Bà Trưng, TP. Hà Nội',
      phone: '0903 886 999',
      hours: '08:30 - 21:00 (Có khu vực trải nghiệm bếp mẫu vận hành thực tế)',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    },
    {
      city: 'CHI NHÁNH TP.HCM',
      title: 'Gia Bảo Luxhome Showroom Sala Thủ Thiêm',
      address: '126 Nguyễn Cơ Thạch, Khu đô thị Sala, TP. Thủ Đức, TP.HCM',
      phone: '0909 688 999',
      hours: '08:30 - 21:00 (Tư vấn khảo sát & lắp đặt tận nơi toàn miền Nam)',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export const defaultData = nha_hang_12DefaultData;
export const mockData = nha_hang_12DefaultData;
export default nha_hang_12DefaultData;
