export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
}

export interface ThreeHighlightCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface SpaSuiteItem {
  id: string;
  name: string;
  price: string;
  area: string;
  capacity: string;
  mineralFeature: string;
  description: string;
  image: string;
}

export interface TeamSpecialist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PoolsideServiceItem {
  id: string;
  title: string;
  description: string;
  iconKey: 'drink' | 'pool' | 'massage' | 'skincare' | 'wine' | 'bath';
}

export interface ResortActivityPackage {
  id: string;
  title: string;
  priceLabel: string;
  description: string;
  image: string;
  imageLeft: boolean;
}

export interface NewsOfferItem {
  id: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
}

export const business: BusinessInfo = {
  name: 'SwingFour Onsen & Spa Resort',
  shortName: 'Mona Hotel & Spa',
  tagline: 'Khu Nghỉ Dưỡng Khoáng Nóng & Trị Liệu Chuyên Sâu Thượng Lưu',
  phone: ['076 922 0162', '0909 319 162'],
  email: ['mon@mona.media', 'booking@swingfourspa.vn'],
  address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
  workingHours: 'Mở cửa 24/7 • Khu Khoáng Nóng & Spa: 07:00 – 22:30',
};

export const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '#trang-chu' },
  { label: 'LOẠI PHÒNG & ONSEN', href: '#phong-khach-san' },
  { label: 'TRỊ LIỆU SPA', href: '#dich-vu-spa' },
  { label: 'HOẠT ĐỘNG', href: '#hoat-dong' },
  { label: 'TIN TỨC', href: '#tin-tuc' },
  { label: 'LIÊN HỆ', href: '#lien-he' },
];

export const HERO_CONTENT = {
  eyebrow: '• BỘ SƯU TẬP NGHỈ DƯỠNG & KHOÁNG NÓNG THƯỢNG LƯU •',
  title: 'Đặt phòng trong tích tắc',
  subtitle:
    'Tận hưởng liệu trình ngâm khoáng nóng Onsen tự nhiên, trị liệu đá muối Himalaya và lưu trú tại quần thể biệt thự nghỉ dưỡng 5 sao.',
  ctaLabel: 'TÌM HIỂU THÊM',
  backgroundImage:
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
};

export const THREE_HIGHLIGHT_CARDS: ThreeHighlightCard[] = [
  {
    id: 'hl-01',
    title: 'PHÒNG LUXURY',
    subtitle: 'Biệt thự có bồn tắm khoáng riêng',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85',
    href: '#phong-khach-san',
  },
  {
    id: 'hl-02',
    title: 'SPA & MASSAGE',
    subtitle: 'Liệu pháp thảo dược & đá nóng',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85',
    href: '#dich-vu-spa',
  },
  {
    id: 'hl-03',
    title: 'BỮA TỐI CHÂU ÂU',
    subtitle: 'Thực dưỡng hữu cơ & Rượu vang',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
    href: '#hoat-dong',
  },
];

export const OASIS_INTRO = {
  eyebrow: 'MỘT ỐC ĐẢO THANH BÌNH Ở TRUNG TÂM THÀNH PHỐ CỦA BẠN',
  heading:
    'Phong cách huyền thoại làm cho nó trở thành một trong những khu nghỉ dưỡng khoáng nóng uy tín nhất.',
  description:
    'Vị trí tuyệt vời và dịch vụ trị liệu thân – tâm – trí chuẩn mực quốc tế. Các phòng Suite và Villa khoáng nóng được thiết kế hướng biển và đồi thông, cách hồ bơi khoáng ấm chỉ 100 bước chân cùng quầy Lounge thảo mộc phục vụ suốt ngày đêm.',
  ctaLabel: 'TÌM HIỂU THÊM',
};

export const SPA_SUITES: SpaSuiteItem[] = [
  {
    id: 'suite-01',
    name: 'Luxury Double Suite, Attic Floor',
    price: '1,500,000 ₫',
    area: '65 m²',
    capacity: '02 Người lớn • Tặng vé Onsen & Xông hơi',
    mineralFeature: 'Bồn ngâm khoáng nóng Hinoki riêng tư',
    description:
      'Căn hộ áp mái sang trọng sở hữu tầm nhìn toàn cảnh vịnh biển, phòng xông hơi ướt thảo mộc và bồn tắm gỗ thông Nhật Bản.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'suite-02',
    name: 'LUXURY FAMILY DOUBLE ROOM SUITE',
    price: '900,000 ₫',
    area: '54 m²',
    capacity: '04 Người lớn • Bữa sáng thực dưỡng',
    mineralFeature: 'Hồ sục Jacuzzi khoáng ấm ngoài ban công',
    description:
      'Không gian sum vầy ấm cúng với phòng khách rộng mở, sofa lớn và gói trị liệu cổ vai gáy miễn phí dành cho cả gia đình.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'suite-03',
    name: 'LUXURY DOUBLE ROOM SUITE',
    price: '850,000 ₫',
    area: '46 m²',
    capacity: '02 Người lớn • Trà chiều thảo mộc',
    mineralFeature: 'Vòi tắm mưa nhiệt đới & Tinh dầu thiên nhiên',
    description:
      'Thiết kế tối giản thanh lịch với gam màu kem ấm áp, giường ngủ chuẩn 5 sao giúp phục hồi giấc ngủ sâu ngay từ đêm đầu tiên.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85',
  },
];

export const REJUVENATION_BANNER = {
  eyebrow: 'VỚI DỊCH VỤ LÀM TRẺ HÓA MỘT CÁCH CHUYÊN NGHIỆP',
  heading: 'Công nghệ mới của sự sang trọng và phục vụ cho du khách',
  description:
    'Kết hợp nguồn khoáng nóng giàu vi lượng tự nhiên cùng kỹ thuật massage trị liệu phương Đông giúp giải tỏa căng thẳng cơ bắp, thanh lọc độc tố và đánh thức vẻ đẹp rạng rỡ từ bên trong.',
  ctaLabel: 'ĐẶT NGAY DỊCH VỤ',
  bannerImage:
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=85',
};

export const TESTIMONIALS = [
  {
    id: 'rev-01',
    name: 'Mark Jance',
    channel: 'Facebook Verified Guest',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote:
      'Trải nghiệm ngâm khoáng nóng Onsen và liệu trình massage đá bazan tại SwingFour Spa thực sự vượt xa mong đợi. Không gian yên bình, hương tinh dầu sả chanh dịu nhẹ và đội ngũ chuyên viên vô cùng tận tâm.',
  },
  {
    id: 'rev-02',
    name: 'Nguyễn Minh Khuê',
    channel: 'Khách hàng Thẻ Kim Cương',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote:
      'Gia đình tôi đã nghỉ dưỡng cuối tuần tại phòng Luxury Double Suite. Hồ bơi khoáng ấm nhìn ra biển lúc hoàng hôn và thực đơn thực dưỡng buổi tối khiến cả nhà hoàn toàn thư giãn và tràn đầy năng lượng.',
  },
];

export const TEAM_SPECIALISTS: TeamSpecialist[] = [
  {
    id: 'sp-01',
    name: 'ANH MẠNH',
    role: 'CUSTOMER SUPPORT & ONSEN MASTER',
    bio: 'Hơn 12 năm kinh nghiệm quản lý vận hành hệ thống thủy trị liệu khoáng nóng tiêu chuẩn Nhật Bản.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'sp-02',
    name: 'CHỊ NGA',
    role: 'TRƯỞNG KHOA TRỊ LIỆU SPA',
    bio: 'Chuyên gia trị liệu cơ xương khớp và chăm sóc da thảo dược cao cấp được đào tạo tại Thái Lan & Hàn Quốc.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'sp-03',
    name: 'ANH KHOA',
    role: 'CEO & GIÁM ĐỐC ĐIỀU HÀNH',
    bio: 'Nhà sáng lập chuỗi khu nghỉ dưỡng sức khỏe SwingFour với triết lý cân bằng Tự nhiên – Thân – Tâm.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
];

export const POOLSIDE_SERVICES: PoolsideServiceItem[] = [
  {
    id: 'ps-01',
    title: 'ĐỒ UỐNG',
    description:
      'Trà thảo mộc ủ lạnh, nước ép detox hữu cơ và kombucha tươi phục vụ ngay tại ghế nghỉ hồ khoáng.',
    iconKey: 'drink',
  },
  {
    id: 'ps-02',
    title: 'HỒ BƠI',
    description:
      'Hồ bơi vô cực khoáng ấm 38°C giàu khoáng chất tự nhiên giúp lưu thông khí huyết và thư giãn cơ khớp.',
    iconKey: 'pool',
  },
  {
    id: 'ps-03',
    title: 'MASSAGE',
    description:
      'Liệu trình massage đá nóng bazan, bấm huyệt Shiatsu và trị liệu tinh dầu thảo mộc nguyên chất.',
    iconKey: 'massage',
  },
  {
    id: 'ps-04',
    title: 'GIẶT ỦI',
    description:
      'Dịch vụ giặt hấp sinh học hương oải hương và chuẩn bị áo choàng tắm Yukata khử khuẩn mỗi ngày.',
    iconKey: 'skincare',
  },
  {
    id: 'ps-05',
    title: 'RƯỢU VANG',
    description:
      'Hầm rượu vang thượng hạng kết hợp không gian nhạc Jazz nhẹ nhàng bên bờ vịnh mỗi tối cuối tuần.',
    iconKey: 'wine',
  },
  {
    id: 'ps-06',
    title: 'BỒN TẮM',
    description:
      'Bồn sục thủy lực Jacuzzi hoa hồng và muối khoáng biển Chết ngay trong từng phòng Suite nghỉ dưỡng.',
    iconKey: 'bath',
  },
];

export const POOLSIDE_BG_IMAGE =
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1800&q=80';

export const RESORT_ACTIVITIES: ResortActivityPackage[] = [
  {
    id: 'act-01',
    title: 'THAM QUAN',
    priceLabel: '1.500K / 7 ngày',
    description:
      'Hành trình dạo bộ rừng thông, tắm rừng Shinrin-yoku và khám phá suối khoáng nóng nguyên sơ cùng hướng dẫn viên bản địa.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
    imageLeft: true,
  },
  {
    id: 'act-02',
    title: 'CLUB GOLF',
    priceLabel: '2.500K / 7 ngày',
    description:
      'Trải nghiệm sân Golf 18 hố ven biển kết hợp liệu trình giãn cơ thể thao chuyên sâu sau mỗi vòng đấu.',
    image:
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=85',
    imageLeft: true,
  },
  {
    id: 'act-03',
    title: 'SPA & MASSAGE',
    priceLabel: '800K / 7 ngày',
    description:
      'Thẻ đặc quyền sử dụng không giới hạn khu xông hơi Jjimjilbang đá muối, hồ ngâm khoáng nóng – lạnh và massage thảo dược.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=85',
    imageLeft: true,
  },
  {
    id: 'act-04',
    title: 'ẢNH CƯỚI',
    priceLabel: '1.000K / 7 ngày',
    description:
      'Gói nghỉ dưỡng trăng mật lãng mạn kèm trang trí hoa tươi, nến thơm và bộ ảnh kỷ niệm tại biệt thự ven biển.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    imageLeft: true,
  },
];

export const GALLERY_PHOTOS: string[] = [
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
];

export const VIDEO_BANNER = {
  heading: 'Lạc vào một thế giới khác của sự sang trọng và thư giãn.',
  subtitle:
    'Nổi tiếng nhất với những bãi biển, rạn san hô và suối khoáng nóng tự nhiên. Khám phá cuộc sống an nhiên ngay dưới bề mặt.',
  image:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85',
};

export const NEWS_OFFERS: NewsOfferItem[] = [
  {
    id: 'nw-01',
    category: 'TIN TỨC ƯU ĐÃI',
    title: 'DU LỊCH ĐÀ NẴNG : 10 ĐIỂM THAM QUAN & KHOÁNG NÓNG HẤP DẪN',
    date: '7 Tháng Mười Hai, 2026',
    excerpt:
      '1. Khu nghỉ dưỡng khoáng nóng trên bán đảo xanh với những bãi biển trong vắt quanh năm, liệu trình tắm bùn khoáng thiên nhiên giúp trẻ hóa làn da [...]',
  },
  {
    id: 'nw-02',
    category: 'TIN TỨC ƯU ĐÃI',
    title: 'DU LỊCH PHÚ QUỐC: THIÊN ĐƯỜNG NGHỈ DƯỠNG & TRỊ LIỆU SPA',
    date: '8 Tháng Mười Hai, 2026',
    excerpt:
      'Tổng quan du lịch nghỉ dưỡng kết hợp chăm sóc sức khỏe toàn diện tại đảo ngọc Phú Quốc – điểm đến lý tưởng cho kỳ nghỉ gia đình [...]',
  },
];

export const PARTNER_BRANDS = [
  'LEAVES & CO',
  'THE ONE',
  'SUSHI EXPRESS',
  'STUDIO',
];
