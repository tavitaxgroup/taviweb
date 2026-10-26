export interface BusinessInfo {
  name: string;
  brandTitle: string;
  scriptTitle: string;
  subBrand: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
}

export interface PolaroidServiceHighlight {
  id: string;
  title: string;
  category: string;
  duration: string;
  priceFrom: string;
  rotationClass: string;
  description: string;
  image: string;
}

export interface PriceMenuItem {
  id: string;
  category: 'skincare' | 'hair-spa' | 'body-laser' | 'nail-art';
  categoryLabel: string;
  serviceName: string;
  duration: string;
  singlePrice: string;
  comboPrice: string;
  popular?: boolean;
  detail: string;
}

export interface EnbiComboPackage {
  id: string;
  badge: string;
  name: string;
  duration: string;
  originalPrice: string;
  salePrice: string;
  steps: string[];
}

export const business: BusinessInfo = {
  name: 'Viện Chăm Sóc Da & Trị Liệu Enbi Bảo Bảo Spa',
  brandTitle: 'ENBI',
  scriptTitle: 'Bảo Bảo',
  subBrand: 'Nail . Beauty . Spa',
  tagline: 'Liệu Pháp Spa Hoàn Hảo Cho Mọi Làn Da — Thư Giãn Tuyệt Đối Cùng Enbi Spa',
  phone: ['0909 188 319', '076 922 0162'],
  email: ['cskh@enbibaobaospa.vn', 'info@themona.global'],
  address: '58 Lê Đức Thọ, Phường 7, Quận Gò Vấp, TP. Hồ Chí Minh',
  workingHours: '09:00 – 21:00 (Thứ Hai – Chủ Nhật)',
};

export const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '#trang-chu' },
  { label: 'DỊCH VỤ NỔI BẬT', href: '#dich-vu-noi-bat' },
  { label: 'BẢNG GIÁ NAIL & BEAUTY', href: '#bang-gia-dich-vu' },
  { label: 'COMBO THƯ GIÃN', href: '#combo-uu-dai' },
  { label: 'KHÔNG GIAN & KTV', href: '#khong-gian-spa' },
  { label: 'ĐẶT LỊCH HẸN', href: '#dat-lich-enbi' },
];

export const HERO_COLLAGE = {
  purpleBadgeText: 'LIỆU PHÁP SPA HOÀN HẢO CHO MỌI LÀN DA',
  pinkBadgeText: 'THƯ GIÃN TUYỆT ĐỐI CÙNG ENBI SPA',
  description:
    'Tổ hợp chăm sóc sắc đẹp toàn diện từ Chăm sóc – Điều trị da chuẩn Y khoa, Gội đầu dưỡng sinh thảo mộc Hoàng cung, Massage trị liệu cổ vai gáy đến Nail Art Hàn Quốc trong không gian hồng pastel ngọt ngào, riêng tư.',
  mainPortraitImage:
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85',
};

export const POLAROID_HIGHLIGHTS: PolaroidServiceHighlight[] = [
  {
    id: 'pol-01',
    title: 'Gội Đầu Dưỡng Sinh & Xịt Tinh Chất Bưởi Hồng',
    category: 'Dưỡng Sinh Tóc & Da Đầu',
    duration: '65 Phút',
    priceFrom: '199.000 ₫',
    rotationClass: '-rotate-2',
    description:
      'Làm sạch da đầu bằng nước thảo mộc nấu tươi, massage cổ vai gáy chuyên sâu và ủ dưỡng phục hồi tóc hư tổn trước gương vòm hoàng gia.',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'pol-02',
    title: 'Chăm Sóc Da Mặt Chuyên Sâu & Cấp Ẩm Thủy Phân',
    category: 'Facial Skincare Chuẩn Y Khoa',
    duration: '75 Phút',
    priceFrom: '350.000 ₫',
    rotationClass: 'rotate-1',
    description:
      'Xông hơi thải độc lỗ chân lông, hút bã nhờn nhẹ nhàng, điện di tinh chất HA – Collagen và đắp mặt nạ cánh hoa hồng dịu mát.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'pol-03',
    title: 'Massage Body Đá Nóng & Trị Liệu Cổ Vai Gáy',
    category: 'Thư Giãn Toàn Thân',
    duration: '90 Phút',
    priceFrom: '390.000 ₫',
    rotationClass: '-rotate-1',
    description:
      'Thả lỏng hoàn toàn cơ thể trên giường nệm êm ái với tinh dầu hoa anh đào và đá bazan ấm giúp đánh tan đau mỏi lưng vai.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'pol-04',
    title: 'Trẻ Hóa Da Ánh Sáng Sinh Học & Triệt Lông Diode Lạnh',
    category: 'Công Nghệ Cao Không Xâm Lấn',
    duration: '45 Phút',
    priceFrom: '250.000 ₫',
    rotationClass: 'rotate-2',
    description:
      'Ứng dụng đầu lạnh Sapphire -5°C êm ái giúp làm sáng mịn vùng da điều trị, thu nhỏ lỗ chân lông và kích thích tăng sinh Collagen.',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=85',
  },
];

export const PRICE_MENU_ITEMS: PriceMenuItem[] = [
  {
    id: 'pm-01',
    category: 'skincare',
    categoryLabel: 'Chăm Sóc & Điều Trị Da',
    serviceName: 'Detox Thải Độc Chì & Cấp Ẩm Căng Bóng Glass Skin',
    duration: '70 Phút',
    singlePrice: '380.000 ₫',
    comboPrice: '2.900.000 ₫ / 10 buổi',
    popular: true,
    detail: '12 bước làm sạch sâu, ủ sủi bọt oxy tươi và điện di HA đa phân tử',
  },
  {
    id: 'pm-02',
    category: 'skincare',
    categoryLabel: 'Chăm Sóc & Điều Trị Da',
    serviceName: 'Liệu Trình Trị Mụn Chuẩn Y Khoa & Chiếu Đèn Omega Light',
    duration: '75 Phút',
    singlePrice: '420.000 ₫',
    comboPrice: '3.200.000 ₫ / 10 buổi',
    detail: 'Lấy nhân mụn vô khuẩn tăm bông, sát khuẩn Povidine & đắp mặt nạ kháng viêm',
  },
  {
    id: 'pm-03',
    category: 'skincare',
    categoryLabel: 'Chăm Sóc & Điều Trị Da',
    serviceName: 'Cấy Tảo Xoắn Spirulina & Phục Hồi Da Mỏng Yếu',
    duration: '80 Phút',
    singlePrice: '550.000 ₫',
    comboPrice: '4.200.000 ₫ / 10 buổi',
    detail: 'Nuôi dưỡng hàng rào bảo vệ da, mờ thâm sạm và se khít lỗ chân lông',
  },
  {
    id: 'pm-04',
    category: 'hair-spa',
    categoryLabel: 'Gội Đầu Dưỡng Sinh',
    serviceName: 'Gội Đầu Dưỡng Sinh Thượng Hạng Enbi Bảo Bảo (14 Bước)',
    duration: '65 Phút',
    singlePrice: '199.000 ₫',
    comboPrice: '1.590.000 ₫ / 10 buổi',
    popular: true,
    detail: 'Khai thiên môn, rửa mặt, massage mặt ngọc bích, gội 2 nước canh thảo dược & massage vai gáy',
  },
  {
    id: 'pm-05',
    category: 'hair-spa',
    categoryLabel: 'Gội Đầu Dưỡng Sinh',
    serviceName: 'Gội Đầu Thảo Dược Hoàng Cung + Ngâm Chân Thuốc Bắc + Chườm Mắt',
    duration: '90 Phút',
    singlePrice: '299.000 ₫',
    comboPrice: '2.390.000 ₫ / 10 buổi',
    detail: 'Trọn gói thư giãn từ đỉnh đầu đến gót chân giúp ngủ sâu giấc ngay trên giường',
  },
  {
    id: 'pm-06',
    category: 'body-laser',
    categoryLabel: 'Massage & Triệt Lông',
    serviceName: 'Massage Body Tinh Dầu Hoa Hồng & Đá Nóng Bazan Toàn Thân',
    duration: '90 Phút',
    singlePrice: '390.000 ₫',
    comboPrice: '3.100.000 ₫ / 10 buổi',
    popular: true,
    detail: 'Ấn huyệt lưng – vai – cổ, chườm túi thảo mộc ấm và thư giãn bắp chân',
  },
  {
    id: 'pm-07',
    category: 'body-laser',
    categoryLabel: 'Massage & Triệt Lông',
    serviceName: 'Triệt Lông Lạnh Diode Laser Hàn Quốc (Bảo Hành 5 Năm)',
    duration: '30 – 45 Phút',
    singlePrice: '190.000 ₫',
    comboPrice: '1.200.000 ₫ / Trọn gói',
    detail: 'Êm dịu mát lạnh, kết hợp trẻ hóa sáng mịn vùng dưới cánh tay / tay / chân',
  },
  {
    id: 'pm-08',
    category: 'nail-art',
    categoryLabel: 'Nail Art & Chăm Sóc Móng',
    serviceName: 'Cắt Da, Sơn Gel Hàn Quốc & Vẽ Thiết Kế Charm Đá Pha Lê',
    duration: '60 Phút',
    singlePrice: '180.000 ₫',
    comboPrice: '1.400.000 ₫ / Thẻ VIP',
    popular: true,
    detail: 'Hơn 500 màu sơn Gel hữu cơ không vàng móng, kiềm cắt da tiệt trùng riêng từng khách',
  },
  {
    id: 'pm-09',
    category: 'nail-art',
    categoryLabel: 'Nail Art & Chăm Sóc Móng',
    serviceName: 'Chà Gót Chân Hồng Hào & Ủ Paraffin Mềm Mịn Đôi Bàn Tay',
    duration: '50 Phút',
    singlePrice: '220.000 ₫',
    comboPrice: '1.750.000 ₫ / 10 buổi',
    detail: 'Loại bỏ tế bào chết khô sần, dưỡng ẩm sáp đào ấm áp thơm dịu',
  },
];

export const COMBO_PACKAGES: EnbiComboPackage[] = [
  {
    id: 'cb-01',
    badge: 'BEST SELLER CHO NÀNG CÔNG SỞ',
    name: 'Combo Nàng Thơ Thư Giãn (Gội Dưỡng Sinh + Massage Vai Gáy + Đắp Mặt Nạ)',
    duration: '90 Phút',
    originalPrice: '480.000 ₫',
    salePrice: '329.000 ₫',
    steps: [
      'Rửa mặt & Tẩy tế bào chết da mặt dịu nhẹ',
      'Đắp mặt nạ cấp ẩm Collagen Hoa Hồng',
      'Gội đầu 2 lần canh thảo dược bồ kết vỏ bưởi ấm',
      'Massage cổ vai gáy & Ngâm chân muối hồng Himalaya',
    ],
  },
  {
    id: 'cb-02',
    badge: 'TRỌN GÓI TỎA SÁNG CUỐI TUẦN',
    name: 'Combo Queen Toàn Diện (Chăm Sóc Da Glass Skin + Massage Body + Nail Gel)',
    duration: '150 Phút',
    originalPrice: '950.000 ₫',
    salePrice: '649.000 ₫',
    steps: [
      'Liệu trình Detox & Điện di tinh chất căng bóng da mặt 70 phút',
      'Massage Body đá nóng tinh dầu thư giãn toàn thân 60 phút',
      'Chăm sóc móng & Sơn Gel Hàn Quốc tự chọn màu',
      'Thưởng thức trà hoa cúc mật ong & bánh ngọt tại sảnh hồng Enbi',
    ],
  },
];
