export interface HdpProductItem {
  id: string;
  code: string;
  name: string;
  category: 'lounge-set' | 'dining-set' | 'chairs' | 'sunbed' | 'bistro-set' | 'planters';
  categoryLabel: string;
  frameMaterial: string;
  weaveMaterial: string;
  dimensions: string;
  moq: string;
  warranty: string;
  priceLabel: string;
  image: string;
  description: string;
}

export interface NoiThat25TemplateData {
  business: {
    name: string;
    brandTitle: string;
    brandHighlight: string;
    brandTagline: string;
    officeAddress: string;
    factoryAddress: string;
    phone: string[];
    email: string[];
    languageLabel: string;
  };
  navigation: {
    id: string;
    label: string;
    targetId: string;
    hasDropdown?: boolean;
  }[];
  hero: {
    heading: string;
    subheading: string;
    mainImage: string;
    caption: string;
  };
  desireSection: {
    quoteTitle: string;
    featuredCenterImage: string;
    featuredCenterTitle: string;
    featuredCenterSpecs: string;
    carouselSlides: {
      id: string;
      code: string;
      name: string;
      categoryLabel: string;
      dimensions: string;
      material: string;
      image: string;
      description: string;
    }[];
  };
  whyChooseUs: {
    heading: string;
    items: {
      id: string;
      iconType: 'consistent' | 'structure' | 'weather' | 'service' | 'delivery' | 'price';
      title: string;
      subtitle: string;
    }[];
  };
  productCategories: {
    key: 'all' | 'lounge-set' | 'dining-set' | 'chairs' | 'sunbed' | 'bistro-set' | 'planters';
    label: string;
    enLabel: string;
  }[];
  catalogProducts: HdpProductItem[];
}

export const defaultNoiThat25Data: NoiThat25TemplateData = {
  business: {
    name: 'HDP Furniture',
    brandTitle: 'HDP.',
    brandHighlight: 'Furniture / Chế Tác',
    brandTagline: 'Tinh Hoa Nội Ngoại Thất Đan Thủ Công Xuất Khẩu',
    officeAddress: '1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM.',
    factoryAddress: 'Khu Công Nghiệp Tân Tạo, Quận Bình Tân, TP.HCM',
    phone: ['0313728397', '0909 728 397'],
    email: ['info@hdpfurniture.vn', 'export@hdpfurniture.vn'],
    languageLabel: 'Tiếng Việt'
  },
  navigation: [
    { id: 'nav-home', label: 'Trang chủ', targetId: 'top' },
    { id: 'nav-about', label: 'Giới thiệu', targetId: 'section-desire' },
    { id: 'nav-product', label: 'Sản phẩm', targetId: 'section-catalog', hasDropdown: true },
    { id: 'nav-contact', label: 'Liên hệ', targetId: 'section-footer' },
    { id: 'nav-news', label: 'Tin tức', targetId: 'section-why-choose' }
  ],
  hero: {
    heading: 'HDP FURNITURE',
    subheading: 'NHÀ SẢN XUẤT & CHẾ TÁC NỘI NGOẠI THẤT SÂN VƯỜN CAO CẤP',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    caption: 'Bộ Sofa Góc Chữ L Đan Mây Nhựa PE Kháng Tia UV Kèm Ghế Đơn & Bàn Trà Mặt Kính Cường Lực'
  },
  desireSection: {
    quoteTitle: '“Tuyệt Tác Ngoại Thất Cho Không Gian Sống Mơ Ước”',
    featuredCenterImage: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1000&q=85',
    featuredCenterTitle: 'Bộ Bàn Trà Sân Vườn Hợp Kim Nhôm Đúc Nghệ Thuật HDP-CAST01',
    featuredCenterSpecs: 'Khung nhôm đúc sơn tĩnh điện 5 lớp chống gỉ sét • Đường kính bàn 90cm',
    carouselSlides: [
      {
        id: 'car-1',
        code: 'HDP-SB01',
        name: 'Ghế Tắm Nắng Hồ Bơi Đan Mây Nhựa Kèm Nệm Chống Thấm',
        categoryLabel: 'GHẾ TẮM NẮNG SUNBED',
        dimensions: '2000 x 720 x 350 mm',
        material: 'Khung nhôm sơn tĩnh điện + Sợi mây PE nguyên sinh + Nệm trượt nước 10cm',
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80',
        description: 'Thiết kế tựa lưng nâng hạ 5 nấc linh hoạt, chuyên dụng cho khu nghỉ dưỡng resort 5 sao, bãi biển và hồ bơi biệt thự.'
      },
      {
        id: 'car-2',
        code: 'HDP-BS02',
        name: 'Bộ Bàn Trà Đôi Ban Công & Sân Vườn Đan Sợi Bán Nguyệt',
        categoryLabel: 'BỘ BÀN TRÀ BISTRO',
        dimensions: 'Ghế: 760 x 720 x 780 mm • Bàn: D500 x H480 mm',
        material: 'Khung nhôm T6063 dày 1.5mm + Đan mây nhựa kháng UV 3.000 giờ',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80',
        description: 'Kiểu dáng bo tròn ôm trọn lưng người ngồi, đi kèm nệm vải Sunbrella chống phai màu dưới nắng gắt nhiệt đới.'
      },
      {
        id: 'car-3',
        code: 'HDP-PL03',
        name: 'Bộ Đôi Chậu Cây Trang Trí Sảnh & Sân Vườn Đan Thủ Công',
        categoryLabel: 'CHẬU CÂY TRANG TRÍ',
        dimensions: 'Size L: 420 x 420 x 750 mm • Size M: 350 x 350 x 600 mm',
        material: 'Khung kẽm nhúng nóng + Sợi nhựa giả mây bản dẹt + Lõi tôn chống thấm',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
        description: 'Chậu cây ngoại thất đan tay tỉ mỉ bởi nghệ nhân HDP Furniture, tạo điểm nhấn xanh mát cho tiền sảnh khách sạn và ban công.'
      },
      {
        id: 'car-4',
        code: 'HDP-LS04',
        name: 'Bộ Sofa Sân Vườn Modul Chữ L HDP Royal Wicker',
        categoryLabel: 'BỘ SOFA NGOÀI TRỜI',
        dimensions: '2650 x 2100 x 720 mm',
        material: 'Khung nhôm định hình + Sợi mây PE dẹt xám khói + Nệm Olefin 12cm',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80',
        description: 'Dòng sofa ngoại thất xuất khẩu Châu Âu với kết cấu modul tháo rời linh hoạt và mặt bàn kính cường lực 8mm.'
      }
    ]
  },
  whyChooseUs: {
    heading: 'TẠI SAO CHỌN SẢN PHẨM HDP FURNITURE ?',
    items: [
      {
        id: 'w-1',
        iconType: 'consistent',
        title: 'Chất lượng đồng nhất',
        subtitle: 'Kiểm định QC 100% từng mối hàn và đường đan thủ công theo tiêu chuẩn xuất khẩu Châu Âu.'
      },
      {
        id: 'w-2',
        iconType: 'structure',
        title: 'Kết cấu bền vững',
        subtitle: 'Khung hợp kim nhôm và thép sơn tĩnh điện chống gỉ, chịu lực vượt trội qua nhiều năm.'
      },
      {
        id: 'w-3',
        iconType: 'weather',
        title: 'Chống chịu thời tiết',
        subtitle: 'Sợi mây nhựa PE kháng tia UV, chống giòn gãy dưới nắng gắt, mưa lớn và hơi muối biển.'
      },
      {
        id: 'w-4',
        iconType: 'service',
        title: 'Dịch vụ hậu mãi tận tâm',
        subtitle: 'Bảo hành kết cấu lên đến 36 tháng, hỗ trợ bảo dưỡng định kỳ cho resort và khách sạn.'
      },
      {
        id: 'w-5',
        iconType: 'delivery',
        title: 'Giao hàng nhanh đúng hẹn',
        subtitle: 'Năng lực nhà máy hơn 10.000m² đảm bảo tiến độ bàn giao dự án và xuất khẩu container.'
      },
      {
        id: 'w-6',
        iconType: 'price',
        title: 'Giá gốc từ nhà máy',
        subtitle: 'Sản xuất trực tiếp không qua trung gian, tối ưu chi phí đầu tư cho chủ đầu tư và đại lý.'
      }
    ]
  },
  productCategories: [
    { key: 'all', label: 'Tất Cả Dòng Sản Phẩm', enLabel: 'ALL COLLECTIONS' },
    { key: 'lounge-set', label: 'Bộ Sofa Ngoài Trời', enLabel: 'LOUNGE SET' },
    { key: 'dining-set', label: 'Bộ Bàn Ăn Sân Vườn', enLabel: 'DINING SET' },
    { key: 'chairs', label: 'Ghế Thư Giãn', enLabel: 'CHAIRS' },
    { key: 'sunbed', label: 'Ghế Tắm Nắng Hồ Bơi', enLabel: 'SUNBED' },
    { key: 'bistro-set', label: 'Bộ Bàn Trà Bistro', enLabel: 'BISTRO SET' },
    { key: 'planters', label: 'Chậu Cây Trang Trí', enLabel: 'PLANTERS' }
  ],
  catalogProducts: [
    {
      id: 'cat-p1',
      code: 'HDP-LS108',
      name: 'Bộ Sofa Góc Sân Vườn Đan Mây HDP-LS108',
      category: 'lounge-set',
      categoryLabel: 'BỘ SOFA NGOÀI TRỜI (LOUNGE SET)',
      frameMaterial: 'Khung nhôm sơn tĩnh điện dày 1.5mm',
      weaveMaterial: 'Sợi mây nhựa PE dẹt kháng UV',
      dimensions: '2600 x 1950 x 740 mm',
      moq: '1 bộ (Bán lẻ) / 20 bộ (Giá sỉ dự án)',
      warranty: '36 tháng',
      priceLabel: '18.500.000 ₫',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80',
      description: 'Trọn bộ gồm 1 sofa góc chữ L, 1 ghế armchair đơn và 1 bàn trà mặt kính cường lực.'
    },
    {
      id: 'cat-p2',
      code: 'HDP-DS204',
      name: 'Bộ Bàn Ăn Sân Vườn 6 Ghế Đan Dây Dù HDP-DS204',
      category: 'dining-set',
      categoryLabel: 'BỘ BÀN ĂN SÂN VƯỜN (DINING SET)',
      frameMaterial: 'Khung nhôm kết hợp mặt bàn gỗ Teak Nam Phi',
      weaveMaterial: 'Dây dù Polyester lõi cao su chống thấm',
      dimensions: 'Bàn: 1800 x 900 x 750 mm',
      moq: '1 bộ / Chiết khấu dự án',
      warranty: '36 tháng',
      priceLabel: '21.900.000 ₫',
      image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=700&q=80',
      description: 'Sự giao thoa tinh tế giữa mặt gỗ Teak tự nhiên chịu nắng mưa và ghế đan dây dù đương đại.'
    },
    {
      id: 'cat-p3',
      code: 'HDP-CH302',
      name: 'Ghế Thư Giãn Bập Bênh Ban Công HDP-CH302',
      category: 'chairs',
      categoryLabel: 'GHẾ THƯ GIÃN (CHAIRS)',
      frameMaterial: 'Khung thép mạ kẽm sơn tĩnh điện ngoài trời',
      weaveMaterial: 'Sợi mây tròn 5mm cao cấp',
      dimensions: '780 x 920 x 880 mm',
      moq: '2 chiếc',
      warranty: '24 tháng',
      priceLabel: '4.650.000 ₫',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=700&q=80',
      description: 'Thiết kế lòng ghế sâu rộng kèm đệm bông gòn êm ái giúp đọc sách và thưởng trà thư thái.'
    },
    {
      id: 'cat-p4',
      code: 'HDP-SB401',
      name: 'Giường Tắm Nắng Đôi Có Mái Che Resort HDP-SB401',
      category: 'sunbed',
      categoryLabel: 'GHẾ TẮM NẮNG (SUNBED)',
      frameMaterial: 'Hợp kim nhôm chống ăn mòn muối biển',
      weaveMaterial: 'Sợi mây nhựa PE + Vải dù chống nắng',
      dimensions: '2000 x 1600 x 1850 mm',
      moq: '1 bộ / Nhận đặt theo màu',
      warranty: '36 tháng',
      priceLabel: '14.200.000 ₫',
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80',
      description: 'Mẫu ghế tắm nắng hồ bơi biểu tượng cho các khu nghỉ dưỡng ven biển Phú Quốc, Nha Trang, Đà Nẵng.'
    },
    {
      id: 'cat-p5',
      code: 'HDP-BS509',
      name: 'Bộ Bàn Trà Nhôm Đúc Cổ Điển Châu Âu HDP-BS509',
      category: 'bistro-set',
      categoryLabel: 'BỘ BÀN TRÀ (BISTRO SET)',
      frameMaterial: '100% Hợp kim nhôm đúc nguyên khối',
      weaveMaterial: 'Sơn tĩnh điện đồng cổ điển chống oxy hóa',
      dimensions: 'Bàn D850 x H730 mm + 2 Ghế có tay',
      moq: '1 bộ',
      warranty: '60 tháng',
      priceLabel: '8.900.000 ₫',
      image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=700&q=80',
      description: 'Hoa văn đúc nổi tinh xảo, bất chấp mọi điều kiện thời tiết khắc nghiệt ngoài sân vườn.'
    },
    {
      id: 'cat-p6',
      code: 'HDP-PL605',
      name: 'Bộ 3 Chậu Cây Đan Mây Tự Tưới Thông Minh HDP-PL605',
      category: 'planters',
      categoryLabel: 'CHẬU CÂY TRANG TRÍ (PLANTERS)',
      frameMaterial: 'Khung nhôm chống gỉ + Chậu nhựa composite trong',
      weaveMaterial: 'Sợi mây nhựa bản dẹt 8mm đen tuyền',
      dimensions: 'Cao 60cm / 75cm / 90cm',
      moq: '1 bộ 3 chậu',
      warranty: '24 tháng',
      priceLabel: '2.850.000 ₫',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
      description: 'Tôn vinh vẻ đẹp cây cảnh nội ngoại thất tại sảnh tòa nhà, nhà hàng và biệt thự sân vườn.'
    }
  ]
};
