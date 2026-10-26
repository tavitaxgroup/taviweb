export interface CoreFeatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  iconType: 'comfort' | 'service' | 'culinary';
}

export interface HotelRoomItem {
  id: string;
  name: string;
  priceFormatted: string;
  unitLabel: string;
  area: string;
  capacity: string;
  bedType: string;
  viewType: string;
  description: string;
  amenities: string[];
  image: string;
  featuredRow: 'top' | 'bottom';
}

export interface StatCounterItem {
  id: string;
  value: string;
  label: string;
}

export interface TeamMemberCard {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  image: string;
}

export interface HospitalityServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  isFeaturedLeft?: boolean;
}

export interface SkillProgressBar {
  id: string;
  label: string;
  percentage: number;
}

export interface ClientTestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatar: string;
  roomImage: string;
}

export interface WorkflowStepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface NewsArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
}

export const BRAND_INFO = {
  brandName: 'MONA ELEVATE',
  shortLogo: 'MONA',
  tagline: 'Kiến Trúc, Vận Hành & Quản Lý Tổ Hợp Khách Sạn 5 Sao',
  phone: '0313728397',
  phoneDisplay: '0313 728 397',
  email: 'info@themona.global',
  workingHours: 'Thời gian làm việc: Thứ Hai - Thứ Sáu (08:00 - 18:00)',
  address: '1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh',
};

export const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '#trang-chu' },
  { label: 'GIỚI THIỆU', href: '#gioi-thieu' },
  { label: 'DỊCH VỤ +', href: '#dich-vu' },
  { label: 'PHÒNG', href: '#danh-sach-phong' },
  { label: 'TIN TỨC', href: '#tin-tuc' },
  { label: 'LIÊN HỆ', href: '#lien-he' },
];

export const HERO_DATA = {
  eyebrow: 'DỊCH VỤ CHẤT LƯỢNG, KẾT QUẢ RÕ RÀNG',
  titleLines: ['DỊCH VỤ', 'PHÒNG SANG', 'TRỌNG'],
  outlinedWord: 'CHUYÊN NGHIỆP',
  description:
    'Tiên phong trong tư vấn kiến trúc, thi công nội thất khách sạn hạng sang và vận hành chuỗi phòng nghỉ tiêu chuẩn Quốc tế với trải nghiệm lưu trú hoàn mỹ.',
  ctaLabel: 'ĐẶT LỊCH HẸN',
  portraitImage:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',
  backgroundWaveImage:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80',
};

export const CORE_FEATURES: CoreFeatureCard[] = [
  {
    id: 'cf-01',
    title: 'Tiện nghi và chuyên nghiệp',
    subtitle: 'Chuẩn mực kiến trúc nghỉ dưỡng',
    description:
      'Không gian phòng nghỉ được thiết kế cách âm tiêu chuẩn 5 sao, trang bị hệ thống điều khiển thông minh Smart Room và nội thất gỗ tự nhiên sang trọng.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
    iconType: 'comfort',
  },
  {
    id: 'cf-02',
    title: 'Dịch vụ chuyên nghiệp và chu đáo',
    subtitle: 'Quản gia & Lễ tân 24/7',
    description:
      'Đội ngũ quản lý vận hành và lễ tân đa ngôn ngữ luôn sẵn sàng hỗ trợ nhận trả phòng nhanh chóng, cá nhân hóa từng yêu cầu của thượng khách.',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85',
    iconType: 'service',
  },
  {
    id: 'cf-03',
    title: 'Dịch vụ ẩm thực đa dạng',
    subtitle: 'Nhà hàng Fine Dining & Sky Bar',
    description:
      'Thưởng thức tinh hoa ẩm thực Á – Âu được chế biến bởi bếp trưởng Michelin cùng thực đơn buffet sáng hữu cơ tươi ngon phục vụ tận phòng.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
    iconType: 'culinary',
  },
];

export const ROOM_LIST: HotelRoomItem[] = [
  {
    id: 'rm-superior',
    name: 'Phòng Superior',
    priceFormatted: '1,200,000 ₫',
    unitLabel: '/ Đêm',
    area: '36 m²',
    capacity: '02 Người lớn • 01 Trẻ em',
    bedType: '01 Giường King hoặc 02 Giường Twin',
    viewType: 'Hướng phố trung tâm',
    description:
      'Thiết kế đương đại ấm cúng với cửa kính lớn đón nắng tự nhiên, bàn làm việc công thái học và phòng tắm đá cẩm thạch cao cấp.',
    amenities: ['Wifi tốc độ cao', 'Bữa sáng Buffet', 'Smart TV 55 inch', 'Minibar'],
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85',
    featuredRow: 'top',
  },
  {
    id: 'rm-deluxe',
    name: 'Deluxe',
    priceFormatted: '1,200,000 ₫',
    unitLabel: '/ Đêm',
    area: '42 m²',
    capacity: '02 Người lớn • 01 Trẻ em',
    bedType: '01 Giường King cỡ lớn',
    viewType: 'Ban công hướng hồ bơi & vườn',
    description:
      'Sở hữu ban công riêng thoáng đãng nhìn xuống hồ bơi nhiệt đới, bồn tắm nằm thư giãn và khu vực sofa tiếp khách thanh lịch.',
    amenities: ['Ban công riêng', 'Bồn tắm nằm', 'Máy pha cà phê viên nén', 'Ăn sáng miễn phí'],
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85',
    featuredRow: 'top',
  },
  {
    id: 'rm-family',
    name: 'Phòng Gia Đình',
    priceFormatted: '1,800,000 ₫',
    unitLabel: '/ Đêm',
    area: '58 m²',
    capacity: '04 Người lớn • 02 Trẻ em',
    bedType: '02 Giường Queen cao cấp',
    viewType: 'Góc 2 mặt thoáng Panorama',
    description:
      'Không gian sinh hoạt chung rộng rãi kết nối 2 khu vực nghỉ ngơi riêng tư, lý tưởng cho kỳ nghỉ gia đình hoặc nhóm chuyên gia công tác dài ngày.',
    amenities: ['Phòng khách liền kề', '02 Phòng tắm riêng', 'Đưa đón sân bay', 'Bữa sáng cho 4 khách'],
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85',
    featuredRow: 'top',
  },
  {
    id: 'rm-midscale',
    name: 'Phòng Hạng Trung',
    priceFormatted: '900,000 ₫',
    unitLabel: '/ Đêm',
    area: '30 m²',
    capacity: '02 Người lớn',
    bedType: '01 Giường Queen tiêu chuẩn',
    viewType: 'Hướng nội khu yên tĩnh',
    description:
      'Giải pháp lưu trú tối ưu chi phí nhưng vẫn trọn vẹn tiện nghi 5 sao, phù hợp cho doanh nhân đi công tác ngắn ngày tại trung tâm thành phố.',
    amenities: ['Bàn làm việc rộng', 'Két sắt điện tử', 'Giặt ủi nhanh', 'Trà & Cà phê mỗi ngày'],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85',
    featuredRow: 'bottom',
  },
  {
    id: 'rm-executive',
    name: 'Phòng Executive',
    priceFormatted: '2,000,000 ₫',
    unitLabel: '/ Đêm',
    area: '68 m²',
    capacity: '02 Người lớn • Đặc quyền VIP Lounge',
    bedType: '01 Giường Emperor + Phòng khách riêng',
    viewType: 'Tầng cao Penthouse Panorama',
    description:
      'Biểu tượng của sự xa hoa với phòng khách hội họp riêng biệt, phòng thay đồ Walk-in Closet, bồn sục Jacuzzi và đặc quyền sử dụng Executive Lounge.',
    amenities: ['Đặc quyền VIP Lounge', 'Bồn sục Jacuzzi', 'Quản gia riêng 24/7', 'Check-in tại phòng'],
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=85',
    featuredRow: 'bottom',
  },
];

export const ABOUT_SECTION = {
  eyebrow: 'Giới Thiệu',
  heading: 'Tìm Thấy Sự Hoàn Hảo Và Trải Nghiệm Đẳng Cấp',
  description:
    'Với hơn 25 năm kinh nghiệm kiến tạo và vận hành các tổ hợp khách sạn – nghỉ dưỡng 5 sao, MONA Elevate kết hợp hoàn hảo giữa nghệ thuật kiến trúc bền vững và dịch vụ hiếu khách chuẩn quốc tế.',
  checklist: [
    'Kiến trúc xanh cách âm tuyệt đối',
    'Hệ thống an ninh đa lớp 24/7',
    'Nội thất hoàn thiện nhập khẩu Châu Âu',
    'Đội ngũ quản lý khách sạn quốc tế',
    'Hồ bơi nước ấm bốn mùa & Sky Lounge',
    'Phòng hội nghị sức chứa 500 khách',
    'Dịch vụ đưa đón Limousine tận nơi',
    'Cam kết hoàn tiền nếu không hài lòng',
  ],
  collageImages: [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=85',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=85',
  ],
};

export const STAT_COUNTERS: StatCounterItem[] = [
  { id: 'st-01', value: '2,565+', label: 'Đánh giá tích cực' },
  { id: 'st-02', value: '164+', label: 'Nhân viên kinh nghiệm' },
  { id: 'st-03', value: '2,985+', label: 'Khách hàng thân thiết' },
  { id: 'st-04', value: '85+', label: 'Địa điểm hoạt động' },
];

export const TEAM_MEMBERS: TeamMemberCard[] = [
  {
    id: 'tm-01',
    name: 'Hồng Phận',
    role: 'Nhân Viên Đặt Phòng',
    department: 'Bộ phận Kinh doanh & Lưu trú',
    phone: '0313 728 391',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tm-02',
    name: 'Thủy Tiên',
    role: 'Nhân Viên Lễ Tân',
    department: 'Bộ phận Tiền sảnh Quốc tế',
    phone: '0313 728 392',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tm-03',
    name: 'Trần Thành Tâm',
    role: 'Quản Lý Dự Án',
    department: 'Khối Kỹ thuật & Kiến trúc Khách sạn',
    phone: '0313 728 393',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tm-04',
    name: 'Thùy Dương',
    role: 'Giám Đốc Điều Hành',
    department: 'Ban Giám đốc Vận hành Chuỗi',
    phone: '0313 728 397',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80',
  },
];

export const HOSPITALITY_SERVICES: HospitalityServiceItem[] = [
  {
    id: 'hs-featured',
    title: 'Dịch vụ phòng',
    category: 'Tiêu chuẩn 5 sao Quốc tế',
    description:
      'Hệ thống buồng phòng được khử khuẩn tia UV, thay mới vải lanh 100% cotton Ai Cập mỗi ngày và phục vụ thực đơn ăn đêm tại phòng 24/24.',
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=85',
    isFeaturedLeft: true,
  },
  {
    id: 'hs-01',
    title: 'Dịch vụ quản lý',
    category: 'Vận hành chuyên sâu',
    description:
      'Tư vấn thiết lập quy trình vận hành khách sạn, tối ưu công suất lấp đầy phòng và bảo trì cơ điện tòa nhà định kỳ.',
  },
  {
    id: 'hs-02',
    title: 'Dịch vụ nhà hàng',
    category: 'Ẩm thực & Yến tiệc',
    description:
      'Tổ chức tiệc cưới, gala dinner, hội nghị doanh nghiệp và trải nghiệm ẩm thực Fine Dining cùng hầm rượu vang thượng hạng.',
  },
  {
    id: 'hs-03',
    title: 'Dịch vụ thể dục và spa',
    category: 'Trị liệu & Phục hồi',
    description:
      'Khu tổ hợp Gym hiện đại, bể sục khoáng nóng Onsen và liệu trình massage thảo dược giúp tái tạo năng lượng tức thì.',
  },
  {
    id: 'hs-04',
    title: 'Dịch vụ hoạt động',
    category: 'Tour & Sự kiện riêng tư',
    description:
      'Thiết kế lịch trình tham quan văn hóa bản địa, du thuyền ngắm hoàng hôn và dịch vụ xe sang đưa đón theo yêu cầu.',
  },
];

export const EXPERIENCE_PROGRESS: SkillProgressBar[] = [
  {
    id: 'sp-01',
    label: 'Chất lượng hoàn thiện không gian & tiện nghi phòng',
    percentage: 91,
  },
  {
    id: 'sp-02',
    label: 'Mức độ hài lòng về dịch vụ lễ tân & ẩm thực 24/7',
    percentage: 90,
  },
  {
    id: 'sp-03',
    label: 'Tỷ lệ khách hàng doanh nghiệp & đối tác quay lại',
    percentage: 93,
  },
];

export const TESTIMONIALS: ClientTestimonialItem[] = [
  {
    id: 'test-01',
    name: 'Nguyễn Minh Hoàng',
    role: 'Tổng Giám Đốc',
    company: 'Tập đoàn Đầu tư Á Châu',
    rating: 5,
    quote:
      'Không gian kiến trúc của MONA Elevate thực sự khác biệt. Từ sảnh đón đến phòng Executive đều toát lên sự tinh tế, yên tĩnh tuyệt đối và đội ngũ nhân viên hỗ trợ hội nghị vô cùng chuyên nghiệp.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    roomImage:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'test-02',
    name: 'Lê Hoàng Lan Anh',
    role: 'Giám Đốc Sáng Tạo',
    company: 'Studio Kiến Trúc Heritage',
    rating: 5,
    quote:
      'Là một kiến trúc sư, tôi đánh giá rất cao cách MONA Elevate xử lý ánh sáng tự nhiên, vật liệu hoàn thiện và quy trình đặt phòng – nhận phòng số hóa chỉ mất chưa đầy 2 phút.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    roomImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
  },
];

export const WORKFLOW_STEPS: WorkflowStepItem[] = [
  {
    id: 'wf-01',
    stepNumber: '01',
    title: 'Tiếp Nhận & Tư Vấn Nhu Cầu',
    description:
      'Lắng nghe yêu cầu lưu trú, tổ chức sự kiện hoặc bài toán vận hành công trình khách sạn của quý khách hàng.',
  },
  {
    id: 'wf-02',
    stepNumber: '02',
    title: 'Đề Xuất Giải Pháp & Hạng Phòng',
    description:
      'Thiết kế gói dịch vụ cá nhân hóa, báo giá minh bạch và giữ chỗ hạng phòng có tầm nhìn đẹp nhất.',
  },
  {
    id: 'wf-03',
    stepNumber: '03',
    title: 'Chuẩn Bị Tiêu Chuẩn 5 Sao',
    description:
      'Kiểm định 45 tiêu chí buồng phòng, ẩm thực, kỹ thuật và xe đưa đón trước giờ khách hàng check-in.',
  },
  {
    id: 'wf-04',
    stepNumber: '04',
    title: 'Trải Nghiệm & Chăm Sóc Tận Tâm',
    description:
      'Đồng hành hỗ trợ 24/7 trong suốt kỳ nghỉ dưỡng hoặc quá trình vận hành dự án để đảm bảo sự hài lòng tuyệt đối.',
  },
];

export const LATEST_NEWS: NewsArticleItem[] = [
  {
    id: 'news-01',
    title: 'Xu Hướng Kiến Trúc Khách Sạn Xanh & Tiết Kiệm Năng Lượng Năm 2026',
    category: 'Kiến trúc & Vận hành',
    date: '18 Tháng 10, 2026',
    author: 'KTS. Trần Thành Tâm',
    excerpt:
      'Ứng dụng hệ mặt dựng kính Low-E kết hợp thông gió tự nhiên và điều khiển chiếu sáng thông minh giúp các tổ hợp khách sạn giảm 35% chi phí vận hành.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'news-02',
    title: 'Bí Quyết Nâng Tầm Trải Nghiệm Phòng Executive Cho Khách Doanh Nhân',
    category: 'Tiêu chuẩn 5 sao',
    date: '22 Tháng 10, 2026',
    author: 'CEO Thùy Dương',
    excerpt:
      'Không chỉ dừng lại ở diện tích rộng rãi, khách hàng thượng lưu ngày nay ưu tiên sự yên tĩnh tuyệt đối, không gian làm việc công thái học và dịch vụ quản gia riêng.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
  },
];

export const PARTNER_LOGOS = [
  'MARRIOTT PARTNER',
  'ACCOR HOSPITALITY',
  'COTECCONS BUILD',
  'GROHE GERMANY',
  'SCHNEIDER SMART',
];
