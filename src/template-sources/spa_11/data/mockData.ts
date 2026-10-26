export interface BusinessInfo {
  name: string;
  crestName: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  foundedNote: string;
}

export interface BentoSuiteCard {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  layoutType: 'large-left' | 'wide-top-right' | 'small-bottom-right';
  image: string;
}

export interface EcoServiceHighlight {
  id: string;
  title: string;
  description: string;
  iconType: 'umbrella' | 'breakfast' | 'compass';
}

export interface GuestReviewCard {
  id: string;
  name: string;
  quote: string;
  platform: 'tripadvisor' | 'Booking.com';
  avatar: string;
}

export interface NewsArticleCard {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export const business: BusinessInfo = {
  name: 'LuxeSpa & Finest Royal Resort Mona',
  crestName: 'Mona',
  tagline: 'Trung Tâm Spa Hoàng Gia, Trị Liệu Aman & Nghỉ Dưỡng Sinh Thái Thượng Lưu',
  phone: ['076 922 0162', '0909 319 014'],
  email: ['mon@mona.media', 'concierge@luxespa-royal.vn'],
  address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
  foundedNote:
    'Chúng tôi tự hào nói rằng kể từ khi mở cửa vào năm 1998, chúng tôi đã phục vụ khách lưu trú và trị liệu theo cách tốt nhất có thể.',
};

export const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Loại phòng', href: '#loai-phong' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Liên hệ', href: '#lien-he' },
];

export const HERO_DATA = {
  eyebrow: 'BỘ SƯU TẬP KHÁCH SẠN & SPA THƯỢNG LƯU',
  title: 'Đặt phòng trong tích tắc',
  ctaLabel: 'TÌM HIỂU THÊM',
  backgroundImage:
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=85',
};

export const EDITORIAL_INTRO = {
  stampText: 'Royal Bay • Finest',
  locationEyebrow: 'ĐẢO AMELIA, PANAMA',
  heading: 'Khách sạn Finest của Panama. Tạo kỷ niệm vàng của bạn.',
  quote:
    '“Khi bạn bước vào phòng khách sạn & không gian trị liệu hoàng gia, bạn khóa cửa và bạn biết có một bí mật, có một sự xa xỉ, có sự tưởng tượng. Có thoải mái. Có sự trấn an.”',
  quoteAuthor: '– Diane von Furstenberg',
  image:
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
};

export const BENTO_SUITES: BentoSuiteCard[] = [
  {
    id: 'bs-01',
    title: 'Penthouse Suite',
    subtitle: 'Biệt thự tầng thượng kèm phòng trị liệu hoàng gia riêng',
    price: '4.800.000 ₫ / đêm',
    layoutType: 'large-left',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'bs-02',
    title: 'Penthouse Suite',
    subtitle: 'Không gian nghỉ dưỡng sinh thái tầm nhìn vịnh ngọc',
    price: '3.900.000 ₫ / đêm',
    layoutType: 'wide-top-right',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'bs-03',
    title: 'Penthouse Suite',
    subtitle: 'Suite hướng biển có bồn sục khoáng đá cẩm thạch',
    price: '3.200.000 ₫ / đêm',
    layoutType: 'small-bottom-right',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'bs-04',
    title: 'Penthouse Suite',
    subtitle: 'Phòng nghỉ hoàng gia kết hợp xông hơi thảo dược',
    price: '3.500.000 ₫ / đêm',
    layoutType: 'small-bottom-right',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=85',
  },
];

export const AMAN_WELLNESS_SPLIT = {
  heading: 'Thưởng thức bơi lội và hơn thế nữa',
  description:
    'Từ lúc bạn bước vào, mọi cảm giác đều mời bạn thư giãn. Thực hiện một hành trình khám phá và kết nối lại tâm trí, cơ thể và tinh thần – được hướng dẫn bởi các nhà trị liệu Aman giàu kinh nghiệm của chúng tôi. Chúng tôi mong được chào đón bạn.',
  ctaLabel: 'XEM THÊM',
  image:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
};

export const ECO_HIGHLIGHTS: EcoServiceHighlight[] = [
  {
    id: 'eco-01',
    title: 'Tiệc BBQ bãi biển',
    description:
      'Quay trở lại bãi biển và thưởng thức các công thức nấu ăn thực dưỡng từ MasterChef của chúng tôi.',
    iconType: 'umbrella',
  },
  {
    id: 'eco-02',
    title: 'Bữa sáng buffet',
    description:
      'Thực đơn buffet hữu cơ giàu dưỡng chất, trà thảo mộc hoàng gia và trái cây nhiệt đới tươi ngon mỗi sáng.',
    iconType: 'breakfast',
  },
  {
    id: 'eco-03',
    title: 'Hướng dẫn viên',
    description:
      'Chuyên gia hướng dẫn thiền định, yoga bình minh và lịch trình khám phá văn hóa sinh thái bản địa.',
    iconType: 'compass',
  },
];

export const VIDEO_PARALLAX = {
  eyebrow: 'KHÁM PHÁ SỰ SANG TRỌNG TRONG KHÁCH SẠN',
  heading: 'Lạc vào một thế giới khác của sự sang trọng và thư giãn.',
  image:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85',
};

export const GUEST_REVIEWS: GuestReviewCard[] = [
  {
    id: 'gr-01',
    name: 'Chị Nga',
    quote:
      'Liệu trình chăm sóc toàn thân hoàng gia và hồ bơi nước ấm tại LuxeSpa thực sự đẳng cấp. Từng chi tiết nhỏ trong phòng Penthouse đều hoàn mỹ.',
    platform: 'tripadvisor',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'gr-02',
    name: 'Chị Giang',
    quote:
      'Các nhà trị liệu Aman hướng dẫn rất tận tình. Sau 3 ngày nghỉ dưỡng và thanh lọc cơ thể tại đây, tôi cảm thấy trẻ ra nhiều tuổi.',
    platform: 'Booking.com',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'gr-03',
    name: 'Anh Hoàng',
    quote:
      'Không gian riêng tư tuyệt đối, bữa sáng buffet thực dưỡng ngon miệng và dịch vụ quản gia chu đáo 24/7. Chắc chắn gia đình tôi sẽ quay lại.',
    platform: 'tripadvisor',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
];

export const COUNTDOWN_BANNER = {
  eyebrow: 'KHÁM PHÁ SỰ SANG TRỌNG TRONG KHÁCH SẠN',
  heading: 'Lạc vào thế giới khác của sự sang trọng & thư giãn.',
  ctaLabel: 'ĐẶT NGAY',
  image:
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=85',
  timerBoxes: [
    { value: '4', label: 'NGÀY' },
    { value: '7', label: 'GIỜ' },
    { value: '11', label: 'PHÚT' },
    { value: '28', label: 'GIÂY' },
  ],
};

export const NEWS_ARTICLES: NewsArticleCard[] = [
  {
    id: 'art-01',
    title: 'Du lịch Đà Nẵng : 10 điểm tham quan hấp dẫn',
    date: '7 Tháng Mười Hai, 2026',
    excerpt:
      '1. Khu nghỉ dưỡng trên bán đảo Hòn Tre với những bãi biển trong xanh quanh năm, kết hợp liệu trình Spa hoàng gia [...]',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'art-02',
    title: 'Du lịch Vũng Tàu: Tour trọn gói 3 ngày 2 đêm',
    date: '6 Tháng Mười Hai, 2026',
    excerpt:
      'Tổng quan du lịch nghỉ dưỡng & chăm sóc sức khỏe Vũng Tàu cách trung tâm thành phố Hồ Chí Minh chỉ 90 phút di chuyển [...]',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'art-03',
    title: 'Du lịch Phú Quốc: Thiên đường nghỉ dưỡng tuyệt vời',
    date: '6 Tháng Mười Hai, 2026',
    excerpt:
      'Tổng quan du lịch Phú Quốc – quần đảo xinh đẹp nằm sâu trong vùng vịnh Thái Lan với những biệt thự Spa hướng biển [...]',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=85',
  },
];
