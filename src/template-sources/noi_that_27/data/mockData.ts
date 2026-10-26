export interface MartProduct {
  id: string;
  code: string;
  name: string;
  section: 'flash-sale' | 'deal-hot' | 'smart-furniture' | 'family' | 'top-sellers';
  categoryLabel: string;
  discountPercent?: number;
  price: number;
  oldPrice?: number;
  rating?: number;
  image: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
}

export interface NoiThat27TemplateData {
  business: {
    name: string;
    brandTitle: string;
    brandHighlight: string;
    campaignBadge: string;
    phone: string[];
    email: string[];
    address: string;
    businessLicense: string;
    workingHours: string;
    searchPlaceholder: string;
  };
  topUtilityLinks: string[];
  subNavLinks: string[];
  heroTabs: {
    id: string;
    label: string;
    bgColor: string;
    textColor: string;
  }[];
  megaCampaign: {
    leftTitle: string;
    leftHighlight: string;
    leftNote: string;
    leftImage: string;
    centerBadge: string;
    centerDates: string;
    centerSub: string;
    centerCta: string;
    rightTitle: string;
    rightHighlight: string;
    rightSub: string;
    rightImage: string;
  };
  flashSale: {
    countdown: { hours: string; minutes: string; seconds: string };
    posterTitle: string;
    posterBadge: string;
    posterCta: string;
  };
  directoryCategories: {
    id: string;
    label: string;
    iconKey: string;
  }[];
  trendingSearches: {
    id: string;
    hashtag: string;
    image: string;
  }[];
  smartFurnitureBanner: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    image: string;
  };
  products: MartProduct[];
}

export const defaultNoiThat27Data: NoiThat27TemplateData = {
  business: {
    name: 'Mona Home & Living — Siêu Thị Nội Thất & Gia Dụng Online',
    brandTitle: 'MONA',
    brandHighlight: 'MEDIA',
    campaignBadge: 'CÁCH MẠNG MUA SẮM',
    phone: ['1900 1007', '028 3942 1188'],
    email: ['cskh@monahome.vn', 'marketplace@mona.media'],
    address: 'Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    businessLicense: 'Giấy CNĐKDN: 0308808576 – Sở Kế hoạch và Đầu tư TP.HCM cấp',
    workingHours: 'Thứ 2 - CN: 7h - 21h',
    searchPlaceholder: 'Tìm bàn đầu giường, kệ tivi treo tường, ghế hơi, gia dụng...'
  },
  topUtilityLinks: [
    'TẢI APP MONA',
    'CỘNG TÁC CÙNG MONA',
    'CHĂM SÓC KHÁCH HÀNG',
    'KIỂM TRA ĐƠN HÀNG',
    'ĐĂNG NHẬP / ĐĂNG KÝ'
  ],
  subNavLinks: [
    'Nội thất thông minh',
    'Phòng khách',
    'Phòng ngủ',
    'Bàn làm việc',
    'Kệ tivi treo tường',
    'Ghế thư giãn',
    'Nhà cửa & Đời sống',
    'Thiết bị gia dụng',
    'Chăn ga gối nệm',
    'Sức khỏe & Sắc đẹp'
  ],
  heroTabs: [
    { id: 'tab-1', label: 'KHUYẾN MÃI', bgColor: '#ff6e54', textColor: '#ffffff' },
    { id: 'tab-2', label: 'MÃ GIẢM GIÁ', bgColor: '#e2e8f0', textColor: '#334155' },
    { id: 'tab-3', label: 'GIAN HÀNG CHÍNH HÃNG', bgColor: '#e2e8f0', textColor: '#334155' },
    { id: 'tab-4', label: 'VOUCHER NỘI THẤT & LẮP ĐẶT', bgColor: '#f5a623', textColor: '#ffffff' }
  ],
  megaCampaign: {
    leftTitle: 'Ở ĐÂU RẺ HƠN',
    leftHighlight: 'HOÀN TIỀN GẤP ĐÔI*',
    leftNote: '(*) Điều kiện & điều khoản áp dụng chính hãng',
    leftImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=700&q=80',
    centerBadge: 'MƯA SALE BĂNG NỘI THẤT',
    centerDates: '09.11 - 11.11',
    centerSub: 'FLASH SALE MỖI 2 GIỜ • GIẢM ĐẾN 49% TOÀN CỬA HÀNG',
    centerCta: 'XEM NGAY',
    rightTitle: 'MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC',
    rightHighlight: 'KHÔNG GIỚI HẠN GIÁ TRỊ ĐƠN HÀNG',
    rightSub: 'TOÀN BỘ SẢN PHẨM NỘI THẤT LẮP RÁP DƯỚI 6KG',
    rightImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80'
  },
  flashSale: {
    countdown: { hours: '02', minutes: '18', seconds: '45' },
    posterTitle: 'DEAL CỰC HOT KHÔNG THỂ BỎ LỠ!',
    posterBadge: 'FLASH SALE',
    posterCta: 'XEM THÊM'
  },
  directoryCategories: [
    { id: 'dc-1', label: 'NỘI THẤT PHÒNG KHÁCH', iconKey: 'sofa' },
    { id: 'dc-2', label: 'BÀN LÀM VIỆC & GHẾ', iconKey: 'desk' },
    { id: 'dc-3', label: 'KỆ TIVI TREO TƯỜNG', iconKey: 'tv' },
    { id: 'dc-4', label: 'BÀN ĐẦU GIƯỜNG', iconKey: 'bed' },
    { id: 'dc-5', label: 'ĐÈN TRANG TRÍ', iconKey: 'lamp' },
    { id: 'dc-6', label: 'ĐỒNG HỒ TREO TƯỜNG', iconKey: 'clock' },
    { id: 'dc-7', label: 'KỆ GIÀY THÔNG MINH', iconKey: 'rack' },
    { id: 'dc-8', label: 'THIẾT BỊ GIA DỤNG', iconKey: 'appliance' },
    { id: 'dc-9', label: 'CHĂN GA GỐI NỆM', iconKey: 'pillow' },
    { id: 'dc-10', label: 'MẸ & BÉ', iconKey: 'baby' },
    { id: 'dc-11', label: 'NHÀ CỬA & ĐỜI SỐNG', iconKey: 'home' },
    { id: 'dc-12', label: 'SỨC KHỎE & SẮC ĐẸP', iconKey: 'heart' },
    { id: 'dc-13', label: 'GHẾ HƠI THƯ GIÃN', iconKey: 'chair' },
    { id: 'dc-14', label: 'TÚI & HỘP LƯU TRỮ', iconKey: 'box' },
    { id: 'dc-15', label: 'PHỤ KIỆN PHÒNG TẮM', iconKey: 'bath' },
    { id: 'dc-16', label: 'VOUCHER & DỊCH VỤ', iconKey: 'voucher' }
  ],
  trendingSearches: [
    {
      id: 'ts-1',
      hashtag: '#ĐỒ NỘI THẤT',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-2',
      hashtag: '#BÀN LÀM VIỆC',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-3',
      hashtag: '#KỆ TREO TƯỜNG',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-4',
      hashtag: '#GHẾ HƠI NHUNG',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-5',
      hashtag: '#TỦ ĐẦU GIƯỜNG',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-6',
      hashtag: '#ĐÈN BẮC ÂU',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-7',
      hashtag: '#ĐỒ GIA DỤNG',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'ts-8',
      hashtag: '#CHĂN GỐI VĂN PHÒNG',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=400&q=80'
    }
  ],
  smartFurnitureBanner: {
    title: 'Nội thất xinh',
    subtitle: 'Ưu đãi đến 50%',
    ctaLabel: 'MUA NGAY',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
  },
  products: [
    // FLASH SALE (4 items)
    {
      id: 'fs-1',
      code: 'TD-5037',
      name: 'Bàn tròn để đầu giường sang trọng (trắng) size 50×37',
      section: 'flash-sale',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 30,
      price: 140000,
      oldPrice: 199000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80',
      dimensions: '500 x 370 x 370 mm',
      material: 'Gỗ nhựa Composite chống nước tuyệt đối, tháo lắp thông minh',
      warranty: '12 tháng',
      description: 'Kệ bàn tròn đầu giường hoa văn chạm khắc trang nhã, kháng ẩm mốc và dễ dàng lắp ghép trong 5 phút.'
    },
    {
      id: 'fs-2',
      code: 'TADA-TD112',
      name: 'Kệ tivi treo tường TADA – TD112 hiện đại',
      section: 'flash-sale',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 57,
      price: 204000,
      oldPrice: 469000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 200 x 150 mm',
      material: 'Gỗ nhựa PVC WPC chịu lực cao',
      warranty: '24 tháng',
      description: 'Kệ treo tường để đầu thu Wifi, loa soundbar và đồ trang trí phòng khách gọn gàng.'
    },
    {
      id: 'fs-3',
      code: 'IBE-RECF',
      name: 'Bộ bàn làm việc Rec-F đen và ghế Eames đen – IBE',
      section: 'flash-sale',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 35,
      price: 1790000,
      oldPrice: 2760000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 600 x 750 mm',
      material: 'Mặt gỗ MDF phủ Melamine + Chân sắt sơn tĩnh điện + Ghế Eames chân gỗ',
      warranty: '24 tháng',
      description: 'Combo bàn làm việc tối giản kết hợp ghế Eames biểu tượng cho góc làm việc tại gia.'
    },
    {
      id: 'fs-4',
      code: 'GH-NHUNG',
      name: 'Bộ ghế hơi tựa lưng và ghế để chân bọc nhung + Tặng bơm điện',
      section: 'flash-sale',
      categoryLabel: 'CHĂN & GHẾ THƯ GIÃN',
      discountPercent: 35,
      price: 490000,
      oldPrice: 750000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80',
      dimensions: '1160 x 980 x 830 mm + Đôn gác chân',
      material: 'Nhựa PVC dày phủ nhung êm ái chống thấm',
      warranty: '6 tháng',
      description: 'Ghế sofa hơi thư giãn kèm đôn gác chân giúp đọc sách, xem phim và nghỉ trưa cực kỳ êm ái.'
    },

    // DEAL HOT TRONG NGÀY (4 items)
    {
      id: 'dh-1',
      code: 'LAMP-01',
      name: 'Bộ đèn bàn đọc sách & tai nghe thư giãn phòng ngủ',
      section: 'deal-hot',
      categoryLabel: 'PHỤ KIỆN PHÒNG NGỦ',
      discountPercent: 10,
      price: 89000,
      oldPrice: 99000,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Tiêu chuẩn quốc tế',
      material: 'Hợp kim nhôm sơn tĩnh điện đen mờ',
      warranty: '12 tháng',
      description: 'Thiết kế tinh tế mang lại trải nghiệm thư giãn hoàn hảo mỗi tối.'
    },
    {
      id: 'dh-2',
      code: 'TAB-5037',
      name: 'Bàn tròn để đầu giường sang trọng (trắng) size 50×37',
      section: 'deal-hot',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 30,
      price: 140000,
      oldPrice: 199000,
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80',
      dimensions: '500 x 370 x 370 mm',
      material: 'Gỗ nhựa Composite chống thấm nước',
      warranty: '12 tháng',
      description: 'Mẫu kệ tab đầu giường bán chạy số 1 cho căn hộ studio và phòng ngủ hiện đại.'
    },
    {
      id: 'dh-3',
      code: 'PILLOW-BC',
      name: 'Bộ gối ôm & chăn bông văn phòng Brown & Cony siêu mềm',
      section: 'deal-hot',
      categoryLabel: 'CHĂN GA GỐI',
      discountPercent: 18,
      price: 140000,
      oldPrice: 170000,
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Gối 40x40cm • Chăn 1m1 x 1m6',
      material: 'Vải nhung tuyết + Bông PP 3D đàn hồi',
      warranty: 'Đổi trả 30 ngày',
      description: 'Gối tựa lưng ghế văn phòng tích hợp chăn đắp 2 trong 1 tiện lợi.'
    },
    {
      id: 'dh-4',
      code: 'TADA-112',
      name: 'Kệ tivi treo tường TADA – TD112',
      section: 'deal-hot',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 57,
      price: 204000,
      oldPrice: 469000,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 200 x 150 mm',
      material: 'Gỗ nhựa Composite trắng ngà',
      warranty: '24 tháng',
      description: 'Giải phóng diện tích sàn nhà với kệ tivi treo tường thông minh TADA.'
    },

    // NỘI THẤT THÔNG MINH (4 exact items from NT030 screenshot)
    {
      id: 'sf-1',
      code: 'GH-35',
      name: 'Bộ ghế hơi tựa lưng và ghế để chân bọc nhung + Tặng bơm điện (Nâu) (Xám)',
      section: 'smart-furniture',
      categoryLabel: 'CHĂN & GHẾ',
      discountPercent: 35,
      price: 490000,
      oldPrice: 750000,
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=80',
      dimensions: '1160 x 980 x 830 mm',
      material: 'Bọc nhung cao cấp chống bám bụi',
      warranty: '12 tháng',
      description: 'Tặng kèm bơm điện 2 chiều giúp bơm căng hoặc xả gọn chỉ trong 90 giây.'
    },
    {
      id: 'sf-2',
      code: 'RECF-IBE',
      name: 'Bộ bàn làm việc Rec-F đen và ghế Eames đen – IBE',
      section: 'smart-furniture',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 35,
      price: 1790000,
      oldPrice: 2760000,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 600 x 750 mm',
      material: 'Gỗ MDF lõi xanh chống ẩm + Khung thép hộp sơn tĩnh điện',
      warranty: '24 tháng',
      description: 'Bộ bàn ghế làm việc tại nhà chuẩn công thái học, chịu tải trọng tới 120kg.'
    },
    {
      id: 'sf-3',
      code: 'TD112-SM',
      name: 'Kệ tivi treo tường TADA – TD112',
      section: 'smart-furniture',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 57,
      price: 204000,
      oldPrice: 469000,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
      dimensions: '1200 x 200 x 150 mm',
      material: 'Gỗ nhựa PVC nguyên sinh an toàn',
      warranty: '24 tháng',
      description: 'Thiết kế rãnh tản nhiệt cho modem Wifi và đầu thu kỹ thuật số.'
    },
    {
      id: 'sf-4',
      code: 'BT-5037',
      name: 'Bàn tròn để đầu giường sang trọng (trắng) size 50×37',
      section: 'smart-furniture',
      categoryLabel: 'ĐỒ NỘI THẤT',
      discountPercent: 30,
      price: 140000,
      oldPrice: 199000,
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80',
      dimensions: '500 x 370 x 370 mm',
      material: 'Gỗ nhựa WPC chống nước 100%',
      warranty: '12 tháng',
      description: 'Hai tầng lưu trữ tiện lợi để đèn ngủ, điện thoại và sách đọc trước khi ngủ.'
    },

    // GIA ĐÌNH LÀ SỐ MỘT (4 items)
    {
      id: 'fam-1',
      code: 'OMO-27',
      name: 'Bộ 2 túi nước giặt chăm sóc vải rèm & sofa cửa trước 2.7kg',
      section: 'family',
      categoryLabel: 'BÁCH HÓA GIA ĐÌNH',
      price: 314000,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Combo 2 túi x 2.7kg',
      material: 'Công thức giữ màu vải bọc sofa & rèm cửa',
      warranty: 'Chính hãng',
      description: 'Giúp rèm cửa, vỏ đệm sofa và chăn ga luôn thơm mát, bền màu.'
    },
    {
      id: 'fam-2',
      code: 'CLEAN-3M',
      name: 'Bộ 6 chai dung dịch vệ sinh da sofa, kính & kim loại 3M Thái Lan',
      section: 'family',
      categoryLabel: 'CHĂM SÓC NHÀ CỬA',
      discountPercent: 27,
      price: 721000,
      oldPrice: 990000,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Trọn bộ 6 chai chuyên dụng',
      material: 'Nhập khẩu 3M Thái Lan',
      warranty: 'Chính hãng 3M',
      description: 'Làm sạch và dưỡng bóng bề mặt sofa da, bàn kính và phụ kiện inox.'
    },
    {
      id: 'fam-3',
      code: 'KITCHEN-01',
      name: 'Bộ hộp thủy tinh bảo quản thực phẩm tủ bếp Lock&Lock 6 món',
      section: 'family',
      categoryLabel: 'NHÀ BẾP HIỆN ĐẠI',
      discountPercent: 25,
      price: 420000,
      oldPrice: 560000,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Bộ 6 hộp đa kích cỡ',
      material: 'Thủy tinh Borosilicate chịu nhiệt 400 độ C',
      warranty: '12 tháng',
      description: 'Sắp xếp ngăn nắp tủ lạnh và kệ bếp gia đình.'
    },
    {
      id: 'fam-4',
      code: 'DIFFUSER-JP',
      name: 'Bộ khuếch tán tinh dầu thơm phòng khách & phòng ngủ Nhật Bản',
      section: 'family',
      categoryLabel: 'HƯƠNG THƠM NỘI THẤT',
      price: 290000,
      image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80',
      dimensions: 'Dung tích 200ml',
      material: 'Tinh dầu thiên nhiên gỗ Tuyết Tùng & Trà Trắng',
      warranty: 'Chính hãng Nhật Bản',
      description: 'Khử mùi ẩm mốc và mang lại hương thơm thư giãn chuẩn khách sạn 5 sao.'
    }
  ]
};
