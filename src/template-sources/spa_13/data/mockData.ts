export interface BusinessInfo {
  name: string;
  sealTitle: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
}

export interface CoPhongSignatureRitual {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  herbalFormula: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface FiveElementTherapy {
  id: string;
  element: string;
  organTarget: string;
  symptomFocus: string;
  therapyName: string;
  herbalIngredients: string;
  duration: string;
  price: string;
  description: string;
}

export interface HerbalIngredientCard {
  id: string;
  name: string;
  origin: string;
  effect: string;
  image: string;
}

export interface OrientalPhysician {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  image: string;
}

export const business: BusinessInfo = {
  name: 'Ngự Y Đường — Viện Dưỡng Sinh Đông Y Cổ Phong',
  sealTitle: 'NGỰ Y ĐƯỜNG',
  tagline: 'Tinh Hoa Massage Cổ Phong, Đả Thông Kinh Lạc & Trị Liệu Thảo Dược Cung Đình',
  phone: ['0909 816 319', '076 922 0162'],
  email: ['duongsinh@nguyduongspa.vn', 'info@themona.global'],
  address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
  workingHours: '09:00 – 21:30 (Tất cả các ngày trong tuần, kể cả Lễ Tết)',
};

export const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '#trang-chu' },
  { label: 'LIỆU TRÌNH CỔ PHONG', href: '#lieu-trinh-co-phong' },
  { label: 'CHẨN ĐOÁN NGŨ HÀNH', href: '#chan-doan-ngu-hanh' },
  { label: 'THANG DƯỢC QUÝ', href: '#thang-duoc' },
  { label: 'ĐỘI NGŨ LƯƠNG Y', href: '#luong-y' },
  { label: 'ĐẶT LỊCH HẸN', href: '#dat-lich' },
];

export const HERO_DATA = {
  sealBadge: 'BÍ TRUYỀN DƯỠNG SINH ĐÔNG Y CỔ PHONG',
  title: 'Thuận Tự Nhiên Dưỡng Thân • Tĩnh Tâm Khơi Nguồn Khí Huyết',
  subtitle:
    'Bước qua cánh cổng gỗ trầm hương của Ngự Y Đường, quý khách tạm gác lại phố thị ồn ào để đắm mình trong tiếng đàn cổ cầm, hương thang dược 36 vị nấu thủ công và kỹ thuật đả thông kinh lạc chính통.',
  heroImage:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
  stats: [
    { value: '36 Vị', label: 'Thảo dược vùng cao nấu tươi mỗi ngày' },
    { value: '15 Năm', label: 'Nghiên cứu dưỡng sinh Đông y cổ truyền' },
    { value: '98,6%', label: 'Khách hàng cải thiện giấc ngủ & đau mỏi' },
  ],
};

export const SIGNATURE_RITUALS: CoPhongSignatureRitual[] = [
  {
    id: 'rit-01',
    code: 'TUYỆT KỸ ĐỆ NHẤT',
    title: 'Đả Thông Kinh Lạc & Ấn Huyệt Cổ Phương',
    subtitle: 'Giải phóng tắc nghẽn cổ vai gáy & thắt lưng',
    duration: '90 Phút',
    price: '680.000 ₫',
    herbalFormula: 'Tinh dầu Gừng Gió Cổ Thụ, Đương Quy & Hồng Hoa Tây Tạng',
    description:
      'Ứng dụng thủ pháp bấm huyệt, đẩy kinh lạc dọc 12 đường kinh chính kết hợp giác hơi ống tre ấm và đắp cao thảo dược rút hàn ẩm sâu trong cơ xương.',
    benefits: [
      'Tan biến chứng co cứng cơ cổ vai gáy, tê bì tay chân do ngồi lâu',
      'Khai thông khí huyết lên não, giảm đau đầu và tiền đình rõ rệt',
      'Phục hồi độ linh hoạt cột sống thắt lưng mà không gây đau rát',
    ],
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'rit-02',
    code: 'THANG DƯỢC HOÀNG CUNG',
    title: 'Canh Thang Thảo Dược & Gội Đầu Dưỡng Sinh',
    subtitle: '3 bước canh thang nấu tươi tại bồn sứ',
    duration: '75 Phút',
    price: '450.000 ₫',
    herbalFormula: 'Bồ Kết Nướng, Hà Thủ Ô Đỏ, Vỏ Bưởi Rừng, Hương Nhu & Quế Chi',
    description:
      'Trải nghiệm gội đầu dưỡng sinh Cổ Phong với 3 bát canh thang thảo dược nấu sôi trực tiếp: Bát 1 bài độc da đầu, Bát 2 kiện发 dưỡng chân tóc, Bát 3 an thần trợ giấc ngủ sâu.',
    benefits: [
      'Làm sạch sâu nang tóc, giảm rụng tóc và kích thích mọc tóc đen mượt',
      'Ấn huyệt Bách Hội, Phong Trì, Thái Dương giúp ngủ ngon tức thì',
      'Kết hợp chườm mắt thảo dược ngải cứu và ngâm chân gỗ Pơ-mu',
    ],
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'rit-03',
    code: 'ÔN DƯƠNG BỔ KHÍ',
    title: 'Cứu Ngải Ôn Dương & Chăm Sóc Da Đông Y',
    subtitle: 'Bài hàn ẩm & Dưỡng nhan Bạch Ngọc Cung Đình',
    duration: '90 Phút',
    price: '750.000 ₫',
    herbalFormula: 'Nhung Ngải 5 Năm, Bạch Phục Linh, Nhân Sâm & Ngọc Trai Nghiền',
    description:
      'Sử dụng điếu ngải nhung ủ 5 năm hơ ấm các đại huyệt Quan Nguyên, Khí Hải, Mệnh Môn kết hợp nâng cơ mặt bằng thanh ngọc bích và mặt nạ Bạch Ngọc Đông Y.',
    benefits: [
      'Làm ấm tử cung, điều hòa nội tiết và cải thiện chứng tay chân lạnh',
      'Làm mờ sạm nám, giúp sắc diện hồng hào nhuận sắc từ gốc khí huyết',
      'Thưởng thức chén trà Kỷ Tử – Long Nhãn – Táo Đỏ sau liệu trình',
    ],
    image:
      'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=85',
  },
];

export const FIVE_ELEMENT_THERAPIES: FiveElementTherapy[] = [
  {
    id: 'el-moc',
    element: 'Hành Mộc • Dưỡng Can Đởm',
    organTarget: 'Gan & Mật (Can – Đởm)',
    symptomFocus: 'Hay căng thẳng, bốc hỏa, mỏi mắt, mất ngủ khoảng 1h–3h sáng',
    therapyName: 'Liệu Trình Sơ Can Lý Khí & Chườm Thảo Dược Mắt',
    herbalIngredients: 'Sài Hồ, Bạc Hà, Cúc Hoa Vàng, Đương Quy, Tinh dầu Cam Hương',
    duration: '80 Phút',
    price: '620.000 ₫',
    description:
      'Đả thông đường kinh Can – Đởm dọc hai bên sườn và chân, giải tỏa uất kết tinh thần, làm dịu thần kinh và thanh lọc độc tố gan.',
  },
  {
    id: 'el-hoa',
    element: 'Hành Hỏa • An Tâm Định Thần',
    organTarget: 'Tim & Ruột Non (Tâm – Tiểu Trường)',
    symptomFocus: 'Hồi hộp, khó vào giấc ngủ, hay mơ, đau mỏi bả vai trái',
    therapyName: 'Liệu Trình Dưỡng Tâm An Thần & Canh Thang Thủ Đạo',
    herbalIngredients: 'Tâm Sen, Bá Tử Nhân, Đan Sâm, Tinh dầu Trầm Hương Nha Trang',
    duration: '90 Phút',
    price: '690.000 ₫',
    description:
      'Tập trung khai thông vùng đầu, cổ, ngực và kinh Tâm Bào, giúp hạ hỏa thượng viêm, đưa trí não vào trạng thái thiền định sâu.',
  },
  {
    id: 'el-tho',
    element: 'Hành Thổ • Kiện Tỳ Vị',
    organTarget: 'Dạ Dày & Lá Lách (Tỳ – Vị)',
    symptomFocus: 'Đầy bụng, chậm tiêu, cơ thịt nhão, sắc mặt vàng sạm, nặng nề',
    therapyName: 'Liệu Trình Ôn Cứu Tỳ Vị & Bài Trừ Hàn Thấp',
    herbalIngredients: 'Bạch Truật, Trần Bì, Gừng Già, Hoắc Hương, Ngải Cứu Lâu Năm',
    duration: '75 Phút',
    price: '590.000 ₫',
    description:
      'Massage xoay tròn vùng bụng theo chiều kim đồng hồ kết hợp hộp cứu ngải ấm giúp kiện vận Tỳ Vị, tiêu trừ湿 khí và thon gọn vòng eo.',
  },
  {
    id: 'el-kim',
    element: 'Hành Kim • Nhuận Phế Khí',
    organTarget: 'Phổi &Da Lông (Phế – Đại Trường)',
    symptomFocus: 'Dễ cảm lạnh, hụt hơi, da khô xỉn màu, đau cứng vùng lưng trên',
    therapyName: 'Liệu Trình Bổ Phế Ích Khí & Cạo Gió Ngọc Bích Lưng',
    herbalIngredients: 'Hoàng Kỳ, Bách Hợp, Khuynh Diệp, Tinh dầu Tràm Trà Cổ Thụ',
    duration: '80 Phút',
    price: '640.000 ₫',
    description:
      'Đả thông vùng Phế Du sau lưng và cánh tay, tăng cường vệ khí bảo vệ cơ thể khi giao mùa và giúp làn da mịn màng, tươi nhuận.',
  },
  {
    id: 'el-thuy',
    element: 'Hành Thủy • Bổ Thận Cố Tinh',
    organTarget: 'Thận & Bàng Quang',
    symptomFocus: 'Đau mỏi thắt lưng, lạnh bàn chân, tiểu đêm, tóc bạc và rụng sớm',
    therapyName: 'Liệu Trình Cố Bản Bồi Nguyên & Đắp Bùn Cứu Mệnh Môn',
    herbalIngredients: 'Đỗ Trọng, Hà Thủ Ô, Nhục Thung Dung, Quế Thanh, Muối Hồng',
    duration: '90 Phút',
    price: '780.000 ₫',
    description:
      'Bồi bổ nguyên khí vùng thắt lưng và lòng bàn chân (huyệt Dũng Tuyền), phục hồi sinh lực bền bỉ và làm ấm toàn thân.',
  },
];

export const HERBAL_INGREDIENTS: HerbalIngredientCard[] = [
  {
    id: 'hb-01',
    name: 'Hà Thủ Ô Đỏ Cửu Chưng Cửu Sái',
    origin: 'Vùng núi đá Hà Giang',
    effect: 'Bổ huyết, đen râu tóc, nuôi dưỡng nang tóc và làm chậm lão hóa da đầu',
    image:
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hb-02',
    name: 'Ngải Nhung Ủ 5 Năm',
    origin: 'Thảo nguyên Dược liệu sạch',
    effect: 'Hỏa lực ôn hòa, xuyên thấu sâu qua huyệt đạo giúp khu phong tán hàn',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hb-03',
    name: 'Hồng Hoa & Đương Quy',
    origin: 'Thảo dược Đông y thượng hạng',
    effect: 'Hoạt huyết hóa ứ, giảm đau nhức cơ xương và làm hồng nhuận sắc diện',
    image:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hb-04',
    name: 'Trầm Hương & Đàn Hương',
    origin: 'Khánh Hòa & Tây Nguyên',
    effect: 'An thần định chí, thanh lọc tạp niệm và dẫn khí sâu vào đan điền',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
  },
];

export const ORIENTAL_PHYSICIANS: OrientalPhysician[] = [
  {
    id: 'doc-01',
    name: 'Lương Y Trần Minh Đức',
    title: 'Cố Vấn Chuyên Môn Y Học Cổ Truyền',
    experience: '22 năm kinh nghiệm chẩn mạch & dưỡng sinh Đông y',
    specialty: 'Phác đồ đả thông kinh lạc cột sống & phục hồi mất ngủ mãn tính',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'doc-02',
    name: 'Chuyên Gia Lâm Nhã Kỳ',
    title: 'Trưởng Kỹ Thuật Viên Thủ Đạo Thang',
    experience: '14 năm tu nghiệp dưỡng sinh Cổ Phong',
    specialty: 'Liệu pháp canh thang gội đầu dưỡng sinh & dưỡng nhan Bạch Ngọc',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'doc-03',
    name: 'Chuyên Gia Võ Thanh Trà',
    title: 'Chuyên Gia Cứu Ngải & Ngũ Hành',
    experience: '11 năm trị liệu cơ xương khớp & hàn ẩm',
    specialty: 'Ôn cứu Tỳ Vị, bồi nguyên Thận khí và chăm sóc sức khỏe phụ nữ',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
  },
];
