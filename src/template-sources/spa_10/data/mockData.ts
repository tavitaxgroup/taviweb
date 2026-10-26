export interface BusinessInfo {
  name: string;
  shortLogo: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  skype: string;
}

export interface FourPillarStrip {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface MountainRoomCard {
  id: string;
  name: string;
  size: string;
  bed: string;
  view: string;
  priceDisplay: string;
  vndNote: string;
  rating: number;
  image: string;
}

export interface NewsCardItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface WellnessEventItem {
  id: string;
  title: string;
  date: string;
  image: string;
}

export const business: BusinessInfo = {
  name: 'MountSpa & Mountain Hotel Mona',
  shortLogo: 'HOTEL MONA',
  tagline: 'Viện Dưỡng Sinh Thảo Mộc & Khu Nghỉ Dưỡng Núi Cao Chuẩn 5 Sao',
  phone: ['076 922 0162', '0908 319 016'],
  email: ['demonhunterg@gmail.com', 'mon@mona.media'],
  address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM',
  skype: 'demonhunterp',
};

export const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '#trang-chu' },
  { label: 'GIỚI THIỆU', href: '#gioi-thieu' },
  { label: 'PHÒNG', href: '#loai-phong' },
  { label: 'TIN TỨC', href: '#tin-tuc' },
  { label: 'LIÊN HỆ', href: '#lien-he' },
];

export const HERO_SLIDES = [
  {
    id: 'slide-01',
    eyebrow: 'MONA MEDIA • MOUNTSPA RETREAT',
    title: 'Mountain Hotel',
    subtitle:
      'Khu nghỉ dưỡng núi cao kết hợp Viện dưỡng sinh thảo mộc cổ truyền và tắm lá thuốc người Dao Đỏ giữa mây ngàn.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'slide-02',
    eyebrow: 'VIỆN DƯỠNG SINH THẢO MỘC',
    title: 'Herbal Sanctuary',
    subtitle:
      'Trải nghiệm xông hơi đá muối, ngâm chân thảo dược 36 vị và lưu trú tại các căn Bungalow gỗ thông nhìn thẳng ra hồ sương.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
  },
  {
    id: 'slide-03',
    eyebrow: 'NGHỈ DƯỠNG BỐN MÙA',
    title: 'Alpine Wellness',
    subtitle:
      'Hành trình tái tạo năng lượng thân – tâm – trí trọn vẹn với ẩm thực thực dưỡng hữu cơ và trị liệu Đông y chuyên sâu.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85',
  },
];

export const WELCOME_STORY = {
  eyebrow: 'Chào mừng đến với',
  heading: 'MONA HOTEL',
  leftColumn:
    'Khách sạn & Viện dưỡng sinh Mona là khu nghỉ dưỡng sinh thái núi cao được thành lập từ năm 2017 với 26 phòng nghỉ và Bungalow thảo mộc có kích cỡ đa dạng phù hợp với mọi nhu cầu trị liệu – nghỉ dưỡng của quý khách. Hệ thống trang thiết bị hiện đại, sưởi sàn ấm áp, bồn ngâm gỗ Pơ-mu, sóng wifi tốc độ cao và dịch vụ xe đưa đón tham quan các điểm du lịch tâm linh.',
  rightColumn:
    'Được thiết kế và trang trí theo phong cách gỗ nguyên bản sang trọng và quý phái, mỗi không gian tại Mona Hotel đều thoảng hương tinh dầu quế hồi và sả rừng tự nhiên. Các liệu trình đả thông kinh lạc, gội đầu dưỡng sinh thảo dược và xông hơi đá muối Himalaya tại khu Spa luôn mang lại sự hài lòng và thư thái tuyệt đối trong suốt thời gian lưu trú.',
};

export const FOUR_PILLARS: FourPillarStrip[] = [
  {
    id: 'pil-01',
    title: 'Phòng',
    subtitle: '26 Phòng & Bungalow gỗ thông hướng hồ',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=85',
    href: '#loai-phong',
  },
  {
    id: 'pil-02',
    title: 'Nhà hàng',
    subtitle: 'Ẩm thực thực dưỡng & Lẩu thảo mộc vùng cao',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    href: '#tin-tuc',
  },
  {
    id: 'pil-03',
    title: 'Spa',
    subtitle: 'Tắm lá thuốc Dao Đỏ & Trị liệu Đông y',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=85',
    href: '#loai-phong',
  },
  {
    id: 'pil-04',
    title: 'Khác',
    subtitle: 'Leo núi, Thiền bình minh & Trải nghiệm bản địa',
    image:
      'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=85',
    href: '#tin-tuc',
  },
];

export const ROOM_TYPES: MountainRoomCard[] = [
  {
    id: 'rm-classic',
    name: 'Classic Room',
    size: '18m2',
    bed: '1 giường đơn',
    view: 'Lake view',
    priceDisplay: '$100 / đêm',
    vndNote: '2.400.000₫ (Tặng gói ngâm chân thảo dược)',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'rm-budget',
    name: 'Budget Room',
    size: '18m2',
    bed: '1 giường đôi',
    view: 'Lake view',
    priceDisplay: '$200 / đêm',
    vndNote: '3.200.000₫ (Tặng liệu trình xông hơi đá muối)',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'rm-premium',
    name: 'Premium Room',
    size: '18m2',
    bed: '1 giường đôi',
    view: 'Lake view',
    priceDisplay: '$200 / đêm',
    vndNote: '4.500.000₫ (Bồn tắm gỗ Pơ-mu & Massage 60 phút)',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85',
  },
];

export const TESTIMONIAL_BANNER = {
  eyebrow: 'Khách hàng nhận xét',
  avatar:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  quote:
    'Các trang thiết bị và phòng ốc của nhà nghỉ – khách sạn rất tiện nghi và hiện đại, kết hợp liệu trình tắm lá thảo dược truyền thống nhằm mang lại sự hài lòng và thoải mái tuyệt đối cho khách hàng.',
  authorLabel: 'Khách hàng',
  backgroundImage:
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=85',
};

export const LATEST_NEWS: NewsCardItem[] = [
  {
    id: 'news-01',
    title: 'Du lịch Cô Tô',
    date: '8 Tháng Ba, 2026',
    excerpt:
      'Hành trình khám phá biển đảo nguyên sơ kết hợp liệu pháp tắm khoáng thảo mộc phục hồi làn da sau nắng hè.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'news-02',
    title: 'Du thuyền Hạ Long Starlight',
    date: '8 Tháng Ba, 2026',
    excerpt:
      'Trải nghiệm ngủ đêm trên vịnh di sản cùng lớp tập Thái Cực Quyền đón bình minh và dịch vụ Spa trị liệu trên boong tàu.',
    image:
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=85',
  },
];

export const WELLNESS_EVENTS: WellnessEventItem[] = [
  {
    id: 'ev-01',
    title: 'Đến Vinpearl Land – Vui trung thu tưng bừng',
    date: 'Tháng 09/2026',
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'ev-02',
    title: '"Foodfair" – Tuần lễ ẩm thực tại Vinpearl Luxury Đà Nẵng',
    date: 'Tháng 10/2026',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'ev-03',
    title: 'Giới thiệu Khu du lịch sinh thái suối nước khoáng nóng Tiên Lãng',
    date: 'Tháng 11/2026',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80',
  },
];

export const FIVE_PHOTO_STRIP: string[] = [
  'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
];
