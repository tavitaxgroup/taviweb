export interface ProjectOverviewSpec {
  label: string;
  value: string;
}

export interface TravelTimeItem {
  id: string;
  minutes: string;
  destination: string;
  routeNote: string;
}

export interface InternalAmenitySlide {
  id: string;
  title: string;
  category: string;
  description: string;
  areaScale: string;
  image: string;
}

export interface ExternalHubNode {
  id: string;
  minutes: string;
  place: string;
  category: string;
}

export interface PrivilegeColumn {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface FloorPlanTab {
  id: string;
  tabLabel: string;
  title: string;
  elevationInfo: string;
  unitSummary: string;
  areaRange: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface PaymentInstallment {
  id: string;
  stageCode: string;
  milestone: string;
  percentage: string;
  note: string;
}

export interface StrategicPartner {
  id: string;
  code: string;
  role: string;
  name: string;
  description: string;
  achievements: string[];
}

export const BRAND_INFO = {
  brandName: 'KINGDOM 101',
  tagline: 'Quần Thể Căn Hộ Xanh Chuẩn Bắc Âu Giữa Trái Tim Quận 10',
  developer: 'Tập Đoàn Hoa Lâm & Công Ty CP Phát Triển Đô Thị Đông Dương',
  contractor: 'Tổng Thầu Xây Dựng Coteccons',
  hotline: '0909 101 334',
  email: 'cskh@kingdom101-quan10.vn',
  projectAddress: '334 Tô Hiến Thành, Phường 14, Quận 10, TP. Hồ Chí Minh',
  salesGallery: 'Số 334 Tô Hiến Thành (Góc Thành Thái), Quận 10, TP. Hồ Chí Minh',
};

export const NAV_ITEMS = [
  { label: 'TỔNG QUAN', href: '#tong-quan' },
  { label: 'VỊ TRÍ', href: '#vi-tri' },
  { label: 'TIỆN ÍCH', href: '#tien-ich' },
  { label: 'THIẾT KẾ', href: '#thiet-ke' },
  { label: 'MẶT BẰNG', href: '#mat-bang' },
  { label: 'CHÍNH SÁCH THANH TOÁN', href: '#thanh-toan' },
  { label: 'LIÊN HỆ', href: '#lien-he' },
];

export const HERO_DATA = {
  badgeTitle: 'TỔNG QUAN DỰ ÁN',
  addressLine: '334 Tô Hiến Thành, Phường 14, Quận 10, TP.HCM',
  heroImage:
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
  overviewSpecs: [
    { label: 'Chủ đầu tư', value: 'Tập đoàn Hoa Lâm' },
    { label: 'Tổng thầu thi công', value: 'Coteccons Group' },
    { label: 'Diện tích toàn khu', value: '3,36 ha (33.635 m²)' },
    { label: 'Quy mô dự án', value: '3 tháp căn hộ cao 30 tầng' },
    { label: 'Tổng số sản phẩm', value: '986 căn hộ cao cấp' },
    { label: 'Mật độ xây dựng', value: '39,82% (Khối tháp)' },
    { label: 'Diện tích mảng xanh', value: '1,4 ha công viên nội khu' },
    { label: 'Bàn giao & Pháp lý', value: 'Sổ hồng lâu dài từng căn' },
  ] as ProjectOverviewSpec[],
  introHeadline: 'KINGDOM 101',
  introSubtitle: 'TUYỆT TÁC KIẾN TRÚC XANH VERTICAL STUDIO TẠI TRUNG TÂM QUẬN 10',
  introParagraphs: [
    'Tọa lạc tại quỹ đất vàng hiếm hoi còn sót lại ngay giao lộ sầm uất Tô Hiến Thành – Thành Thái, dự án Kingdom 101 được kiến tạo bởi Tập đoàn Hoa Lâm cùng đơn vị thiết kế danh tiếng Vertical Studio và tổng thầu xây dựng hàng đầu Việt Nam Coteccons.',
    'Lấy cảm hứng từ phong cách kiến trúc xanh Bắc Âu đương đại, Kingdom 101 dành hơn 60% diện tích đất cho hệ sinh thái cảnh quan, công viên nội khu 1 ha và 85 vườn treo thẳng đứng dọc theo 3 tòa tháp cao 30 tầng, mang lại chuẩn mực sống sinh thái biệt lập ngay giữa lòng Sài Gòn hoa lệ.',
  ],
};

export const LOCATION_DATA = {
  heading: 'VỊ TRÍ ĐẮC ĐỊA',
  leadText:
    'Sở hữu 2 mặt tiền huyết mạch Tô Hiến Thành và Thành Thái tại Phường 14, Quận 10, Kingdom 101 nắm giữ tọa độ giao thương chiến lược kết nối trực tiếp Quận 1, Quận 3, Quận 5 và Tân Bình chỉ trong vài phút di chuyển.',
  mapImage:
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
  highlightQuote:
    'Một quần thể kiến trúc hiện đại và đẳng cấp ngay tại trung tâm Quận 10 - TRÁI TIM CỦA THÀNH PHỐ. Kingdom 101 sở hữu vị thế ĐỘC TÔN mà khó dự án nào có được.',
  travelTimes: [
    {
      id: 'tt-01',
      minutes: '05 PHÚT',
      destination: 'Ga Metro Số 5 & Tuyến Metro Bến Thành – Tham Lương',
      routeNote: 'Kết nối trực tiếp qua trục Cách Mạng Tháng Tám & Lý Thường Kiệt',
    },
    {
      id: 'tt-02',
      minutes: '08 PHÚT',
      destination: 'Trung tâm Quận 3 & Quận 5 (Chợ Lớn, Đại học Y Dược)',
      routeNote: 'Di chuyển thông suốt qua đại lộ Thành Thái – Nguyễn Tri Phương – Sư Vạn Hạnh',
    },
    {
      id: 'tt-03',
      minutes: '10 PHÚT',
      destination: 'Chợ Bến Thành & Phố đi bộ Nguyễn Huệ – Quận 1',
      routeNote: 'Kết nối nhanh qua trục đường Ba Tháng Hai – Điện Biên Phủ',
    },
    {
      id: 'tt-04',
      minutes: '15 PHÚT',
      destination: 'Sân bay Quốc tế Tân Sơn Nhất & Khu đô thị Phú Mỹ Hưng',
      routeNote: 'Thuận tiện ra sân bay qua trục Lý Thường Kiệt – Trường Sơn',
    },
  ] as TravelTimeItem[],
};

export const INTERNAL_AMENITIES: InternalAmenitySlide[] = [
  {
    id: 'am-01',
    title: 'KHU VUI CHƠI TRẺ EM & VƯỜN KHÁM PHÁ',
    category: 'Tiện ích gia đình đa thế hệ',
    description:
      'Không gian vận động ngoài trời và khu sáng tạo trong nhà lát sàn cao su EPDM chống trượt an toàn tuyệt đối, giúp trẻ nhỏ phát triển thể chất và trí tuệ giữa thiên nhiên xanh mát.',
    areaScale: '1.200 m² nội khu an ninh khép kín',
    image:
      'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'am-02',
    title: 'HỒ BƠI CHÂN MÂY VÔ CỰC CHUẨN OLYMPIC',
    category: 'Tiện ích nghỉ dưỡng tầng 4',
    description:
      'Tổ hợp hồ bơi tràn bờ người lớn và hồ bơi trẻ em trên cao sử dụng công nghệ lọc nước điện phân muối khoáng không hóa chất, mở tầm nhìn khoáng đạt về công viên 1 ha.',
    areaScale: '600 m² mặt nước & sundeck nghỉ dưỡng',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'am-03',
    title: 'CÔNG VIÊN CẢNH QUAN NHIỆT ĐỚI 1 HA',
    category: 'Lá phổi xanh trung tâm Quận 10',
    description:
      'Công viên bán nguyệt rộng 10.000 m² với đường dạo bộ lát đá tự nhiên, đài phun nước nghệ thuật, đồi cỏ dã ngoại và hàng trăm cây cổ thụ tỏa bóng mát suốt bốn mùa.',
    areaScale: '10.000 m² mảng xanh mặt đất & vườn treo',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'am-04',
    title: 'TỔ HỢP GYM, YOGA & SAUNA ĐẲNG CẤP 5 SAO',
    category: 'Chăm sóc sức khỏe chuyên sâu',
    description:
      'Trang bị hệ thống máy tập Technogym nhập khẩu Ý, phòng tập Yoga view vườn treo trên cao, kết hợp khu xông hơi đá muối Himalaya và Jacuzzi thủy trị liệu.',
    areaScale: '850 m² sàn tập luyện chuyên biệt',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'am-05',
    title: 'SẢNH ĐÓN CƯ DÂN GRAND LOUNGE & THƯƠNG MẠI',
    category: 'Tiêu chuẩn khách sạn 5 sao',
    description:
      'Sảnh đón thông tầng cao 7,2 m ốp đá Cẩm Thạch tự nhiên, kiểm soát an ninh thẻ từ đa lớp 24/7 cùng khu phố thương mại ẩm thực, siêu thị cao cấp ngay dưới chân tòa tháp.',
    areaScale: 'Sảnh lễ tân 5 sao tại cả 3 tháp A, B, C',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'am-06',
    title: 'VƯỜN CHÂN MÂY SKY GARDEN & BBQ THƯỢNG UYỂN',
    category: 'Không gian thư giãn tầng thượng',
    description:
      'Chuỗi vườn treo xen kẽ tại các tầng căn hộ và khu tiệc nướng BBQ ngoài trời giúp gia chủ tận hưởng những buổi tối sum vầy ấm cúng cùng tầm nhìn toàn cảnh Sài Gòn về đêm.',
    areaScale: '85 khu vườn treo thẳng đứng độc bản',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
  },
];

export const EXTERNAL_HUB_NODES: ExternalHubNode[] = [
  {
    id: 'eh-01',
    minutes: '02 PHÚT',
    place: 'Nhà thi đấu Phú Thọ & Khu thể thao Quận 11',
    category: 'Thể thao & Sự kiện',
  },
  {
    id: 'eh-02',
    minutes: '04 PHÚT',
    place: 'Đại học Bách Khoa TP.HCM & ĐH Y Khoa Phạm Ngọc Thạch',
    category: 'Giáo dục đại học',
  },
  {
    id: 'eh-03',
    minutes: '05 PHÚT',
    place: 'TTTM Vạn Hạnh Mall & Siêu thị GO! Miền Đông',
    category: 'Mua sắm & Giải trí',
  },
  {
    id: 'eh-04',
    minutes: '06 PHÚT',
    place: 'Bệnh viện Nhân Dân 115 & Viện Tim TP.HCM',
    category: 'Y tế đầu ngành',
  },
  {
    id: 'eh-05',
    minutes: '08 PHÚT',
    place: 'Bệnh viện Chợ Rẫy & Bệnh viện Đại học Y Dược',
    category: 'Y tế chuyên sâu',
  },
  {
    id: 'eh-06',
    minutes: '10 PHÚT',
    place: 'Khu văn hóa Đầm Sen & Công viên Lê Thị Riêng',
    category: 'Vui chơi & Sinh thái',
  },
  {
    id: 'eh-07',
    minutes: '12 PHÚT',
    place: 'Chợ Bến Thành, Dinh Độc Lập & Nhà thờ Đức Bà',
    category: 'Trung tâm hành chính Q.1',
  },
  {
    id: 'eh-08',
    minutes: '15 PHÚT',
    place: 'Cảng hàng không Quốc tế Tân Sơn Nhất',
    category: 'Giao thông hàng không',
  },
];

export const EXTERNAL_INTERSECTION_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85';

export const FOUR_PRIVILEGES: PrivilegeColumn[] = [
  {
    id: 'priv-01',
    number: '1',
    title: 'Đặc quyền vị trí',
    subtitle: 'Tâm điểm vàng Quận 10',
    description:
      'Quỹ đất lớn hơn 3,3 ha hiếm hoi còn lại tại lõi trung tâm TP.HCM, nơi giá trị bất động sản gia tăng bền vững theo thời gian và thanh khoản cho thuê luôn đạt mức cao nhất khu vực.',
    highlights: [
      'Góc 2 mặt tiền Tô Hiến Thành – Thành Thái',
      'Kề cận tổ hợp thương mại 18 tầng tương lai',
    ],
  },
  {
    id: 'priv-02',
    number: '2',
    title: 'Đặc quyền sống xanh',
    subtitle: 'Ốc đảo sinh thái 1,4 ha',
    description:
      'Kiến trúc xanh Vertical Studio đạt giải thưởng Quốc tế với mật độ cây xanh mặt đất và vườn treo trên không kỷ lục, giảm nhiệt độ nội khu từ 2–3°C so với môi trường đô thị xung quanh.',
    highlights: [
      'Công viên nội khu 1 ha + 85 vườn treo',
      '100% căn hộ đón gió và ánh sáng tự nhiên',
    ],
  },
  {
    id: 'priv-03',
    number: '3',
    title: 'Đặc quyền riêng tư',
    subtitle: 'Compound khép kín 4 lớp',
    description:
      'Mỗi tòa tháp được vận hành biệt lập với hệ thống kiểm soát thẻ từ thang máy từng tầng, đội ngũ lễ tân – bảo vệ chuyên nghiệp 24/7 và cộng đồng cư dân tinh hoa đồng điệu.',
    highlights: [
      'An ninh 4 lớp từ cổng chính đến cửa căn hộ',
      'Mật độ căn hộ/sàn thấp cùng 5 thang máy tốc độ cao',
    ],
  },
  {
    id: 'priv-04',
    number: '4',
    title: 'Đặc quyền tiện ích',
    subtitle: 'All-in-one chuẩn Resort 5 sao',
    description:
      'Mọi nhu cầu nghỉ dưỡng, rèn luyện thể chất, mua sắm, ẩm thực và phát triển toàn diện cho con trẻ đều hiện diện ngay ngưỡng cửa chỉ với một nút bấm thang máy.',
    highlights: [
      'Hồ bơi tràn bờ 600 m² trên tầng 4',
      'Bàn giao nội thất cao cấp Grohe, Malloca, Hafele',
    ],
  },
];

export const DESIGN_SHOWCASE = {
  heading: 'THIẾT KẾ ĐỈNH CAO',
  description:
    'Mỗi căn hộ tại Kingdom 101 được thiết kế theo triết lý Mở & Giao Hòa Thiên Nhiên. Hệ cửa kính Low-E kịch trần vừa cách âm, cách nhiệt tối ưu vừa mở rộng tầm nhìn Panorama không giới hạn về trung tâm thành phố và công viên xanh mát.',
  bannerImage:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  interiorSpecs: [
    'Sàn gỗ công nghiệp cao cấp chống ẩm AC4 tại toàn bộ phòng ngủ',
    'Thiết bị bếp âm tủ Malloca hoàn thiện cùng mặt đá thạch anh chống bám bẩn',
    'Thiết bị vệ sinh Grohe nhập khẩu Đức đi kèm vách kính cường lực',
    'Hệ thống máy lạnh âm trần Multi-split tiết kiệm điện và thẩm mỹ cao',
  ],
};

export const FLOOR_PLAN_TABS: FloorPlanTab[] = [
  {
    id: 'fp-7-30',
    tabLabel: 'TẦNG 7 - 30',
    title: 'Mặt Bằng Tầng Căn Hộ Điển Hình (Tầng 7 – 30)',
    elevationInfo: 'Tổ hợp 3 Tháp A – B – C ghép nối hình cánh cung đón gió Đông Nam',
    unitSummary: 'Căn hộ 1PN (48–60m²) • 2PN (70–79m²) • 3PN (102–103m²)',
    areaRange: '48,5 m² – 103,2 m² (Thông thủy)',
    description:
      'Mặt bằng tầng điển hình từ tầng 7 đến tầng 30 được bố trí khoa học với hành lang thông gió tự nhiên hai đầu, không có căn hộ nào bị che chắn tầm nhìn và 100% phòng ngủ đều có cửa sổ lớn.',
    highlights: [
      'Tháp A & C: 13 căn/sàn – 4 thang máy khách + 1 thang tải',
      'Tháp B (Trung tâm): 11 căn/sàn – Tầm nhìn trực diện hồ bơi & công viên 1ha',
      'Ban công kính rộng rãi kết nối phòng khách và lô gia giặt phơi riêng biệt',
    ],
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'fp-2',
    tabLabel: 'TẦNG 2',
    title: 'Mặt Bằng Tầng 2 – Khu Thương Mại Dịch Vụ & Bãi Đậu Xe Trên Cao',
    elevationInfo: 'Khối đế liên thông 3 tòa tháp A, B, C',
    unitSummary: 'Shophouse thông tầng • Khu sinh hoạt cộng đồng • Bãi đỗ xe thông minh',
    areaRange: 'Tổng diện tích sàn khối đế hơn 12.800 m²',
    description:
      'Tầng 2 kết hợp hài hòa giữa dãy Shophouse thương mại mặt tiền công viên và khu vực đỗ xe thông minh trên cao, tách biệt hoàn toàn luồng giao thông cơ giới khỏi không gian dạo bộ của cư dân.',
    highlights: [
      'Hệ thống kiểm soát biển số tự động Smart Parking',
      'Lối tiếp cận thang máy riêng cho cư dân từng tháp',
      'Khu vực kỹ thuật và quản lý vận hành tòa nhà chuẩn quốc tế',
    ],
    image:
      'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'fp-3',
    tabLabel: 'TẦNG 3',
    title: 'Mặt Bằng Tầng 3 – Khu Đỗ Xe Ô Tô & Tiện Ích Cộng Đồng',
    elevationInfo: 'Khối đế kỹ thuật & đỗ xe tiêu chuẩn cao cấp',
    unitSummary: 'Đảm bảo 100% nhu cầu đỗ xe ô tô và xe máy của 986 hộ cư dân',
    areaRange: 'Sàn đỗ xe thông thoáng tự nhiên có lam cây xanh bao quanh',
    description:
      'Khác biệt với các tầng hầm bí bách truyền thống, tầng đỗ xe trên cao tại tầng 3 của Kingdom 101 được bao bọc bởi hệ lam đứng và thảm thực vật xanh, giúp thông khí tự nhiên và an toàn phòng cháy chữa cháy tối đa.',
    highlights: [
      'Trạm sạc xe điện tích hợp tại các phân khu đỗ xe',
      'Hệ thống PCCC спринклер tự động tiêu chuẩn NFPA Hoa Kỳ',
      'Sảnh chờ thang máy có điều hòa tại cả 3 phân khu A, B, C',
    ],
    image:
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'fp-4',
    tabLabel: 'TẦNG 4',
    title: 'Mặt Bằng Tầng 4 – Tổ Hợp Hồ Bơi Tràn Bờ, Gym, Spa & Căn Hộ Sân Vườn',
    elevationInfo: 'Tầng tiện ích đặc quyền chuẩn Resort 5 sao',
    unitSummary: 'Hồ bơi vô cực 600m² • Gym & Yoga • Khu BBQ • Căn hộ sân vườn riêng',
    areaRange: 'Hơn 4.500 m² tiện ích ngoài trời & trong nhà',
    description:
      'Tầng 4 là trái tim nghỉ dưỡng của toàn dự án với hồ bơi tràn bờ người lớn, hồ bơi trẻ em, sàn tắm nắng gỗ ngoài trời, phòng Gym – Yoga nhìn thẳng ra mặt nước cùng các căn hộ sở hữu sân vườn riêng biệt.',
    highlights: [
      'Hồ bơi điện phân muối khoáng dài 50m chuẩn thi đấu',
      'Khu vui chơi trẻ em trong nhà và ngoài trời liên hoàn',
      'Phòng Sauna đá muối & Lounge thư giãn dành riêng cho cư dân',
    ],
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'fp-5',
    tabLabel: 'TẦNG 5',
    title: 'Mặt Bằng Tầng 5 – Căn Hộ Cao Cấp Kết Nối Vườn Treo Chân Mây',
    elevationInfo: 'Tầng căn hộ cận tiện ích với mảng xanh ban công mở rộng',
    unitSummary: '37 căn hộ/sàn trên toàn 3 tháp • Sảnh vườn treo xen kẽ',
    areaRange: '48,5 m² – 102,8 m²',
    description:
      'Tầng 5 sở hữu tầm nhìn cận cảnh xuống hồ bơi chân mây tầng 4 và tán cây cổ thụ của công viên nội khu 1 ha, mang lại cảm giác sống như tại một khu biệt thự nghỉ dưỡng giữa tầng không.',
    highlights: [
      'Khoảng lùi ban công sâu tạo bóng mát tự nhiên cho phòng khách',
      'Tiếp cận khu tiện ích hồ bơi và Gym chỉ qua 1 tầng thang bộ/thang máy',
      'Thiết kế bếp mở kết nối bàn ăn tối ưu diện tích sử dụng',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'fp-6',
    tabLabel: 'TẦNG 6',
    title: 'Mặt Bằng Tầng 6 – Căn Hộ Tiêu Chuẩn Xanh & Logia Thoáng Đạt',
    elevationInfo: 'Tầng chuyển tiếp lên khối tháp điển hình',
    unitSummary: 'Đa dạng diện tích 1PN+, 2PN 2WC và 3PN góc 2 mặt thoáng',
    areaRange: '49,0 m² – 103,2 m²',
    description:
      'Tầng 6 tích hợp các khoảng vườn treo cộng đồng ngay tại đầu hành lang, tạo luồng đối lưu không khí xuyên suốt và góc thư giãn đọc sách yên tĩnh cho cư dân mỗi tầng.',
    highlights: [
      'Các căn góc 3 phòng ngủ sở hữu tầm nhìn kép 270 độ',
      'Hệ thống thu gom rác khép kín 2 lớp cửa cách mùi tuyệt đối',
      'Bàn giao đầy đủ hệ tủ bếp trên dưới và thiết bị vệ sinh cao cấp',
    ],
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
  },
];

export const PAYMENT_SCHEDULE: PaymentInstallment[] = [
  {
    id: 'pay-01',
    stageCode: 'ĐỢT 1',
    milestone: 'KÍ HỢP ĐỒNG MUA BÁN - 30%',
    percentage: '30%',
    note: 'Thanh toán ngay khi ký HĐMB (Đã bao gồm tiền đặt cọc giữ chỗ 200 triệu đồng)',
  },
  {
    id: 'pay-02',
    stageCode: 'ĐỢT 2',
    milestone: 'XONG SÀN TẦNG 5 - 6%',
    percentage: '6%',
    note: 'Khi tổng thầu Coteccons nghiệm thu hoàn thành đổ bê tông sàn tầng 5',
  },
  {
    id: 'pay-03',
    stageCode: 'ĐỢT 3',
    milestone: 'XONG SÀN TẦNG 15 - 6%',
    percentage: '6%',
    note: 'Khi nghiệm thu hoàn thành kết cấu bê tông cốt thép sàn tầng 15',
  },
  {
    id: 'pay-04',
    stageCode: 'ĐỢT 4',
    milestone: 'XONG SÀN TẦNG 25 - 6%',
    percentage: '6%',
    note: 'Khi nghiệm thu hoàn thành kết cấu bê tông cốt thép sàn tầng 25',
  },
  {
    id: 'pay-05',
    stageCode: 'ĐỢT 5',
    milestone: 'CẤT NÓC - 6%',
    percentage: '6%',
    note: 'Khi dự án chính thức làm lễ cất nóc tầng 30 tại cả 3 tòa tháp A, B, C',
  },
  {
    id: 'pay-06',
    stageCode: 'ĐỢT 6',
    milestone: 'SAU 2 THÁNG - 8%',
    percentage: '8%',
    note: '02 tháng kể từ ngày thông báo cất nóc – Giai đoạn hoàn thiện cơ điện & mặt ngoài',
  },
  {
    id: 'pay-07',
    stageCode: 'ĐỢT 7',
    milestone: 'SAU 4 THÁNG - 8%',
    percentage: '8%',
    note: '04 tháng kể từ ngày cất nóc – Hoàn thiện nội thất liền tường và cảnh quan nội khu',
  },
  {
    id: 'pay-08',
    stageCode: 'ĐỢT 8',
    milestone: 'GIAO NHÀ - 25% (và 2% PBT)',
    percentage: '25%',
    note: 'Khi nhận thông báo bàn giao căn hộ thực tế + 2% Kinh phí bảo trì chung cư',
  },
  {
    id: 'pay-09',
    stageCode: 'ĐỢT 9',
    milestone: 'GCN - 5%',
    percentage: '5%',
    note: 'Thanh toán 5% cuối cùng khi Chủ đầu tư bàn giao Giấy chứng nhận (Sổ hồng)',
  },
];

export const PAYMENT_HIGHLIGHT_IMAGE =
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85';

export const STRATEGIC_PARTNERS: StrategicPartner[] = [
  {
    id: 'part-01',
    code: 'HOA LAM CORPORATION',
    role: 'CHỦ ĐẦU TƯ PHÁT TRIỂN DỰ ÁN',
    name: 'Tập Đoàn Hoa Lâm & Công Ty CP Phát Triển Đô Thị Đông Dương',
    description:
      'Được thành lập từ năm 1993, Tập đoàn Hoa Lâm là một trong những tập đoàn đa ngành uy tín hàng đầu Việt Nam trong lĩnh vực Y tế kỹ thuật cao (Khu Y tế Kỹ thuật cao Hoa Lâm Shangri-La), Tài chính Ngân hàng (Vietbank) và Bất động sản hạng sang tại trung tâm TP.HCM.',
    achievements: [
      'Chủ đầu tư tòa tháp Lim Tower 1 & Lim Tower 2 tại Quận 1 và Quận 3',
      'Nhà sáng lập Khu Y tế Kỹ thuật cao Quốc tế 37,5 ha (Bệnh viện Quốc tế City CIH, Gia An 115)',
      'Bảo chứng tài chính vững mạnh và pháp lý minh bạch 100% cho cư dân Kingdom 101',
    ],
  },
  {
    id: 'part-02',
    code: 'COTECCONS & CEN LAND',
    role: 'TỔNG THẦU THI CÔNG & ĐỐI TÁC PHÂN PHỐI CHIẾN LƯỢC',
    name: 'Tổng Thầu Xây Dựng Coteccons & Hệ Thống Phân Phối BĐS Cen Land',
    description:
      'Sự hợp tác giữa Tổng thầu xây dựng số 1 Việt Nam Coteccons, kiến trúc sư cảnh quan Vertical Studio và đơn vị tiếp thị phân phối chiến lược Cen Land đảm bảo chất lượng thi công vượt tiến độ, chuẩn mực bàn giao 5 sao và dịch vụ tư vấn chuyên nghiệp nhất.',
    achievements: [
      'Coteccons trực tiếp thi công kết cấu và hoàn thiện với tiêu chuẩn an toàn – chất lượng quốc tế',
      'Giải thưởng "Best Green Development" & "Best Condo Architectural Design" tại Vietnam Property Awards',
      'Ngân hàng Vietbank hỗ trợ vay vốn đến 75% giá trị căn hộ với lãi suất ưu đãi đặc biệt',
    ],
  },
];
