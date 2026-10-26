import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface GreenBistroCategorySidebarItem {
  id: string;
  name: string;
  count: number;
  subItems: string[];
}

export interface GreenBistroQuickGroup {
  id: string;
  name: string;
  badgeText: string;
  badgeColor: string;
  image: string;
  categoryKey: string;
}

export interface GreenBistroProductItem {
  id: string;
  name: string;
  category: string;
  sectionKey: 'drinks' | 'milk_nutrition' | 'noodles_mains' | 'suggested';
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  unit: string;
  image: string;
  description: string;
}

export interface GreenBistroTipArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

export interface NhaHang8Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  header: {
    brandPrefix: string;
    brandHighlight: string;
    brandDomain: string;
    searchPlaceholder: string;
    loginLabel: string;
    cartLabel: string;
  };
  sidebarCategories: GreenBistroCategorySidebarItem[];
  quickGroupsTitle: string;
  quickGroups: GreenBistroQuickGroup[];
  promoBanners: {
    id: string;
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaText: string;
    image: string;
    bgGradient: string;
  }[];
  sections: {
    drinksTitle: string;
    milkTitle: string;
    noodlesTitle: string;
    suggestedTitle: string;
    tipsTitle: string;
  };
  products: GreenBistroProductItem[];
  featuredVideo: {
    title: string;
    badge: string;
    priceHighlight: string;
    duration: string;
    thumbnail: string;
    channelName: string;
  };
  tipArticles: GreenBistroTipArticle[];
  footerCommitments: string[];
  footerLinks: string[];
}

export const nha_hang_8DefaultData: NhaHang8Data = {
  templateKey: 'nha_hang_8',
  business: {
    name: 'Bách Hóa & Bếp Xanh GreenBistro',
    tagline: 'Hệ Thống Nhà Hàng Ẩm Thực Xanh & Thực Phẩm Hữu Cơ Chuẩn Tươi Sạch Mỗi Ngày',
    description:
      'GreenBistro kết hợp mô hình bếp ăn thực dưỡng hiện đại và siêu thị thực phẩm hữu cơ tiện lợi. Cung cấp hơn 500+ món ăn Eat Clean, đồ uống ép lạnh, sữa hạt, mì phở thực dưỡng và nông sản hữu cơ giao nhanh trong 30 phút.',
    phone: ['1900 636 648', '0909 636 648'],
    email: ['cskh@greenbistro.vn', 'datmon@greenbistro.vn'],
    address: '286 Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
    workingHours: '07:00 - 21:30 (Tất cả các ngày trong tuần)',
    socials: {
      facebook: 'https://facebook.com/greenbistrovn',
      instagram: 'https://instagram.com/greenbistrovn',
      zalo: 'https://zalo.me/0909636648',
    },
  },
  header: {
    brandPrefix: 'Bếp Xanh ',
    brandHighlight: 'GREENBISTRO',
    brandDomain: '.vn',
    searchPlaceholder: 'Tìm kiếm món ăn thực dưỡng, nước ép, sữa hạt, thực phẩm hữu cơ...',
    loginLabel: 'Đăng nhập',
    cartLabel: 'Giỏ hàng / 0 ₫',
  },
  hero: {
    badge: 'SIÊU TIỆC ẨM THỰC XANH & HỮU CƠ',
    title: 'QUÀ TO GIÁ SỐC - ĂN XANH SỐNG KHỎE',
    highlight: 'GIẢM SỐC ĐẾN 35%',
    subtitle:
      'Đặt combo bữa trưa Eat Clean, nước ép lạnh Detox và thực phẩm hữu cơ chuẩn VietGAP. Giao nóng tận nơi chỉ trong 30 phút!',
    primaryCta: 'Đặt Món Ngay',
    secondaryCta: 'Xem Khuyến Mãi',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85',
  },
  sidebarCategories: [
    {
      id: 'drinks',
      name: 'Đồ uống các loại & Detox',
      count: 24,
      subItems: ['Nước ép lạnh Cold-Pressed', 'Trà Kombucha lên men', 'Nước khoáng thiên nhiên', 'Cider mật ong hữu cơ'],
    },
    {
      id: 'milk_nutrition',
      name: 'Sữa hạt, Sữa tươi & Dinh dưỡng',
      count: 18,
      subItems: ['Sữa hạt óc chó & hạnh nhân', 'Sữa tươi hữu cơ thanh trùng', 'Sữa lúa mạch & ngũ cốc', 'Sữa chua Hy Lạp'],
    },
    {
      id: 'noodles_mains',
      name: 'Mì, Cháo, Phở & Món chính',
      count: 32,
      subItems: ['Phở bò xốt tương đen thực dưỡng', 'Cháo yến mạch đậu xanh', 'Canh rong biển hầm tôm', 'Mì rau củ hữu cơ'],
    },
    {
      id: 'seasoning',
      name: 'Dầu ép lạnh, Nước chấm, Gia vị',
      count: 15,
      subItems: ['Dầu ô liu nguyên chất', 'Nước tương lên men tự nhiên', 'Muối hồng Himalaya', 'Xốt trộn salad mè rang'],
    },
    {
      id: 'snacks',
      name: 'Bánh healthy & Hạt dinh dưỡng',
      count: 21,
      subItems: ['Granola nướng mật ong', 'Bánh biscotti nguyên cám', 'Hạt macca & hạnh nhân', 'Trái cây sấy dẻo'],
    },
    {
      id: 'eatclean',
      name: 'Combo Bữa Trưa Eat Clean',
      count: 14,
      subItems: ['Set ức gà áp chảo & gạo lứt', 'Set cá hồi Na Uy nướng cam', 'Salad bò Úc hữu cơ', 'Set chay thực dưỡng'],
    },
    {
      id: 'kitchen_care',
      name: 'Chăm sóc bếp xanh & Sinh học',
      count: 10,
      subItems: ['Nước rửa rau củ hữu cơ', 'Khăn giấy sợi tre tự nhiên', 'Hộp đựng thực phẩm thủy tinh'],
    },
    {
      id: 'tableware',
      name: 'Đồ dùng bàn ăn thân thiện',
      count: 12,
      subItems: ['Bộ muỗng đũa gỗ tự nhiên', 'Bình giữ nhiệt Detox', 'Ống hút tre & thủy tinh'],
    },
    {
      id: 'grains',
      name: 'Gạo lứt, Thực phẩm hữu cơ khác',
      count: 19,
      subItems: ['Gạo lứt huyết rồng Điện Biên', 'Hạt diêm mạch Quinoa', 'Đậu gà & đậu lăng hữu cơ'],
    },
  ],
  quickGroupsTitle: 'Nhóm món & thực phẩm thường đặt',
  quickGroups: [
    {
      id: 'qg-1',
      name: 'Cider & Thức Uống Lên Men',
      badgeText: 'DETOX',
      badgeColor: '#008848',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'drinks',
    },
    {
      id: 'qg-2',
      name: 'Gạo Lứt & Ngũ Cốc',
      badgeText: 'GẠO',
      badgeColor: '#D97706',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'noodles_mains',
    },
    {
      id: 'qg-3',
      name: 'Khăn Giấy Sợi Tre',
      badgeText: 'ORGANIC',
      badgeColor: '#0284C7',
      image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'suggested',
    },
    {
      id: 'qg-4',
      name: 'Mì & Phở Thực Dưỡng',
      badgeText: 'MÌ PHỞ',
      badgeColor: '#DC2626',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'noodles_mains',
    },
    {
      id: 'qg-5',
      name: 'Combo Bếp Xanh',
      badgeText: 'BẾP XANH',
      badgeColor: '#E11D48',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'noodles_mains',
    },
    {
      id: 'qg-6',
      name: 'Nước Ép Trái Cây Giải Khát',
      badgeText: 'NƯỚC ÉP',
      badgeColor: '#DC2626',
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'drinks',
    },
    {
      id: 'qg-7',
      name: 'Nước Khoáng Thiên Nhiên',
      badgeText: 'KHOÁNG',
      badgeColor: '#1D4ED8',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'drinks',
    },
    {
      id: 'qg-8',
      name: 'Sữa Hạt & Sữa Tươi',
      badgeText: 'SỮA TƯƠI',
      badgeColor: '#059669',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
      categoryKey: 'milk_nutrition',
    },
  ],
  promoBanners: [
    {
      id: 'banner-1',
      badge: 'ĐẠI TIỆC ẨM THỰC XANH & HỮU CƠ',
      title: 'QUÀ TO',
      highlight: 'GIÁ SỐC',
      subtitle: 'Tặng ngay bộ quà bếp xanh cao cấp khi đặt combo thực dưỡng & sữa hạt gia đình từ 499.000₫',
      ctaText: 'Săn Deal Ngay',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85',
      bgGradient: 'from-[#B91C1C] via-[#DC2626] to-[#F59E0B]',
    },
    {
      id: 'banner-2',
      badge: 'THỰC ĐƠN EAT CLEAN MỖI NGÀY',
      title: 'BỮA TRƯA XANH',
      highlight: 'GIẢM 30%',
      subtitle: 'Thực đơn 35 món salad hữu cơ, phở trộn thực dưỡng và nước ép lạnh nguyên chất không đường',
      ctaText: 'Xem Thực Đơn',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
      bgGradient: 'from-[#006837] via-[#008848] to-[#84CC16]',
    },
  ],
  sections: {
    drinksTitle: 'ĐỒ UỐNG CÁC LOẠI',
    milkTitle: 'SỮA CÁC LOẠI, DINH DƯỠNG HỮU CƠ',
    noodlesTitle: 'MÌ, CHÁO, PHỞ ĂN LIỀN & MÓN CHÍNH...',
    suggestedTitle: 'GỢI Ý CHO BẠN',
    tipsTitle: 'MẸO HAY TRONG GIA ĐÌNH & BẾP XANH',
  },
  products: [
    // Section 1: ĐỒ UỐNG CÁC LOẠI (4 items)
    {
      id: 'dr-1',
      name: '6 chai nước trái cây kiwi Nektar ép lạnh nguyên chất 330ml',
      category: 'Đồ uống các loại',
      sectionKey: 'drinks',
      price: '380,000 ₫',
      unit: 'Lốc 6 chai',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
      description: 'Nước ép kiwi xanh giàu vitamin C và chất chống oxy hóa, ép lạnh giữ trọn hương vị tươi mát.',
    },
    {
      id: 'dr-2',
      name: '6 chai nước khoáng thiên nhiên Leo vị thanh mát 500ml',
      category: 'Đồ uống các loại',
      sectionKey: 'drinks',
      price: '33,000 ₫',
      originalPrice: '39,000 ₫',
      discountBadge: '-15%',
      unit: 'Lốc 6 chai',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80',
      description: 'Nước khoáng nguồn mạch ngầm tự nhiên bổ sung khoáng chất thiết yếu mỗi ngày.',
    },
    {
      id: 'dr-3',
      name: '24 chai nước trái cây Ice+ vị đào & dâu rừng tươi mát',
      category: 'Đồ uống các loại',
      sectionKey: 'drinks',
      price: '190,000 ₫',
      unit: 'Thùng 24 chai',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
      description: 'Thức uống giải khát chiết xuất cốt trái cây tươi tự nhiên, ít ngọt, sảng khoái tức thì.',
    },
    {
      id: 'dr-4',
      name: '4 chai Strongbow táo lên men mật ong hữu cơ (Chai 330ml)',
      category: 'Đồ uống các loại',
      sectionKey: 'drinks',
      price: '60,000 ₫',
      unit: 'Lốc 4 chai',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      description: 'Cider táo lên men tự nhiên kết hợp hương mật ong dịu ngọt cho bữa tiệc nhẹ tại gia.',
    },

    // Section 2: SỮA CÁC LOẠI, DINH DƯỠNG (4 items)
    {
      id: 'mk-1',
      name: 'Thùng 48 hộp sữa lúa mạch nguyên cám giàu năng lượng 180ml',
      category: 'Sữa các loại',
      sectionKey: 'milk_nutrition',
      price: '312,000 ₫',
      unit: 'Thùng 48 hộp',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80',
      description: 'Sự kết hợp hoàn hảo giữa mầm lúa mạch nguyên cám, sữa tươi và ca cao tự nhiên.',
    },
    {
      id: 'mk-2',
      name: 'Thùng 48 hộp sữa trái cây Nutri Boost cam & dâu tươi',
      category: 'Sữa các loại',
      sectionKey: 'milk_nutrition',
      price: '356,000 ₫',
      unit: 'Thùng 48 hộp',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
      description: 'Sữa hòa quyện nước trái cây thật bổ sung kẽm và vitamin B3, B6 cho cả gia đình.',
    },
    {
      id: 'mk-3',
      name: 'Thùng 48 hộp sữa đậu nành hạt óc chó hữu cơ cao cấp',
      category: 'Sữa các loại',
      sectionKey: 'milk_nutrition',
      price: '214,500 ₫',
      originalPrice: '285,000 ₫',
      discountBadge: '-25%',
      unit: 'Thùng 48 hộp',
      image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&w=600&q=80',
      description: 'Sữa hạt óc chó phối trộn đậu nành không biến đổi gen, giàu Omega-3 tốt cho tim mạch.',
    },
    {
      id: 'mk-4',
      name: 'Thùng 48 hộp sữa tươi tiệt trùng TH True Milk nguyên chất',
      category: 'Sữa các loại',
      sectionKey: 'milk_nutrition',
      price: '330,000 ₫',
      originalPrice: '376,000 ₫',
      discountBadge: '-12%',
      unit: 'Thùng 48 hộp',
      image: 'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&w=600&q=80',
      description: '100% sữa tươi sạch nguyên chất từ trang trại bò sữa hữu cơ công nghệ cao.',
    },

    // Section 3: MÌ, CHÁO, PHỞ ĂN LIỀN & MÓN CHÍNH (4 items)
    {
      id: 'nd-1',
      name: 'Hộp 10 gói canh rong biển tôm tươi sấy thăng hoa bổ dưỡng',
      category: 'Mì, Cháo, Phở',
      sectionKey: 'noodles_mains',
      price: '38,000 ₫',
      originalPrice: '46,000 ₫',
      discountBadge: '-17%',
      unit: 'Hộp 10 gói',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
      description: 'Canh rong biển Hàn Quốc kết hợp tôm tươi sấy thăng hoa, thanh mát và tiện lợi trong 3 phút.',
    },
    {
      id: 'nd-2',
      name: 'Phở trộn bò xốt tương đen thực dưỡng (Tô tiện lợi 90g)',
      category: 'Mì, Cháo, Phở',
      sectionKey: 'noodles_mains',
      price: '12,500 ₫',
      unit: 'Tô 90g',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
      description: 'Sợi phở gạo mềm dai quyện cùng xốt tương đen đậm đà và rau củ sấy tự nhiên.',
    },
    {
      id: 'nd-3',
      name: 'Thùng 24 ly cháo yến mạch đậu xanh Yến Việt bổ dưỡng',
      category: 'Mì, Cháo, Phở',
      sectionKey: 'noodles_mains',
      price: '277,000 ₫',
      unit: 'Thùng 24 ly',
      image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80',
      description: 'Cháo tổ yến & đậu xanh nguyên hạt nấu chín tự nhiên, không chất bảo quản.',
    },
    {
      id: 'nd-4',
      name: 'Mì Vifon Ngon Ngon lẩu Thái Tomyum chua cay thanh vị',
      category: 'Mì, Cháo, Phở',
      sectionKey: 'noodles_mains',
      price: '6,400 ₫',
      originalPrice: '8,000 ₫',
      discountBadge: '-20%',
      unit: 'Ly 65g',
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=600&q=80',
      description: 'Sợi mì không chiên qua dầu kết hợp nước súp Tomyum sả chanh thơm lừng.',
    },

    // Section 4: GỢI Ý CHO BẠN (5 items)
    {
      id: 'sg-1',
      name: '4 chai Strongbow mật ong táo hữu cơ 330ml',
      category: 'Gợi ý cho bạn',
      sectionKey: 'suggested',
      price: '60,000 ₫',
      unit: 'Lốc 4 chai',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      description: 'Thức uống táo lên men hương mật ong thanh dịu cho bữa tối cuối tuần.',
    },
    {
      id: 'sg-2',
      name: 'Hộp 10 gói canh rong biển tôm tươi sấy lạnh',
      category: 'Gợi ý cho bạn',
      sectionKey: 'suggested',
      price: '38,000 ₫',
      originalPrice: '46,000 ₫',
      discountBadge: '-17%',
      unit: 'Hộp 10 gói',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
      description: 'Canh rong biển giàu khoáng chất và i-ốt tự nhiên, chuẩn vị nhà hàng.',
    },
    {
      id: 'sg-3',
      name: '24 chai nước trái cây Ice+ đào tươi mát lạnh',
      category: 'Gợi ý cho bạn',
      sectionKey: 'suggested',
      price: '190,000 ₫',
      unit: 'Thùng 24 chai',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
      description: 'Giải nhiệt tức thì với chiết xuất nước ép trái cây tươi tự nhiên.',
    },
    {
      id: 'sg-4',
      name: '18 gói khăn giấy ăn Tempo cao cấp 4 lớp tự nhiên',
      category: 'Gợi ý cho bạn',
      sectionKey: 'suggested',
      price: '65,000 ₫',
      unit: 'Lốc 18 gói',
      image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80',
      description: 'Khăn giấy bột gỗ nguyên sinh mềm mịn, an toàn cho bàn ăn gia đình.',
    },
    {
      id: 'sg-5',
      name: '6 chai nước khoáng Leo vị chanh muối thanh nhiệt',
      category: 'Gợi ý cho bạn',
      sectionKey: 'suggested',
      price: '33,000 ₫',
      originalPrice: '39,000 ₫',
      discountBadge: '-15%',
      unit: 'Lốc 6 chai',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80',
      description: 'Bổ sung điện giải và khoáng chất tự nhiên sau khi vận động.',
    },
  ],
  featuredVideo: {
    title: 'Ăn uống ngập mặt, vui chơi thả ga cùng thực đơn Bếp Xanh cuối tuần',
    badge: 'ĂN SẬP CẦN GIỜ & BẾP XANH',
    priceHighlight: 'CHỈ VỚI 250K',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=85',
    channelName: 'GreenBistro Official',
  },
  tipArticles: [
    {
      id: 'tip-1',
      title: 'Bí quyết chọn rau củ hữu cơ và bảo quản tươi ngon suốt 7 ngày trong tủ lạnh',
      excerpt: 'Cách phân biệt rau hữu cơ chuẩn VietGAP và mẹo bọc giấy ẩm giữ trọn vitamin...',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80',
      date: '20/10/2026',
      readTime: '4 phút đọc',
    },
    {
      id: 'tip-2',
      title: 'Thực đơn 5 món canh rong biển & súp thực dưỡng thanh nhiệt ngày nắng',
      excerpt: 'Rong biển kết hợp đậu hũ non và tôm tươi giúp giải độc cơ thể nhẹ nhàng...',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80',
      date: '18/10/2026',
      readTime: '5 phút đọc',
    },
    {
      id: 'tip-3',
      title: 'Cách pha chế 4 công thức nước ép lạnh Detox giảm mỡ bụng từ kiwi và cần tây',
      excerpt: 'Tỷ lệ vàng khi phối hợp trái cây ít đường và rau xanh giúp dễ uống mỗi sáng...',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80',
      date: '15/10/2026',
      readTime: '3 phút đọc',
    },
    {
      id: 'tip-4',
      title: 'So sánh dinh dưỡng giữa sữa hạt óc chó hữu cơ và sữa tươi thanh trùng cho trẻ nhỏ',
      excerpt: 'Bổ sung cân bằng đạm thực vật Omega-3 và canxi tự nhiên cho bữa sáng...',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
      date: '12/10/2026',
      readTime: '6 phút đọc',
    },
  ],
  footerCommitments: [
    'Cam kết chất lượng, không hài lòng trả hàng trong 24h!',
    'Giao hàng đúng hẹn, trễ tặng ngay phiếu mua hàng 100.000₫',
  ],
  footerLinks: [
    'Chính sách giao hàng',
    'Liên hệ',
    'Hướng dẫn mua hàng',
    'Quy chế hoạt động',
    'Kiểm tra đơn hàng',
  ],
};

export const defaultData = nha_hang_8DefaultData;
export const mockData = nha_hang_8DefaultData;
export default nha_hang_8DefaultData;
