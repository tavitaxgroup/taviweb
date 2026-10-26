import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface VnttProductItem {
  id: string;
  name: string;
  brandLine: 'ocop_vtnn' | 'chinsan' | 'thom_thuc';
  brandLineLabel: string;
  weight: string;
  price: string;
  badge?: string;
  cookingTime: string;
  image: string;
  description: string;
}

export interface VnttBrandValueItem {
  id: string;
  title: string;
  description: string;
}

export interface VnttRecipeIdea {
  id: string;
  title: string;
  prepTime: string;
  seasoningUsed: string;
  image: string;
}

export interface VnttNewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface NhaHang15Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  brandLogo: {
    symbol: string;
    name: string;
    slogan: string;
  };
  navItems: string[];
  aboutSection: {
    heading: string;
    description: string;
    ctaText: string;
    image: string;
  };
  brandValuesSection: {
    heading: string;
    image: string;
    values: VnttBrandValueItem[];
  };
  productLines: {
    ocopTitle: string;
    chinsanTitle: string;
    thomThucTitle: string;
  };
  products: VnttProductItem[];
  whatToEatToday: {
    sectionTitle: string;
    cardTitle: string;
    cardDescription: string;
    ctaText: string;
    leftImage: string;
    rightImage: string;
    recipes: VnttRecipeIdea[];
  };
  newsSection: {
    heading: string;
    items: VnttNewsItem[];
  };
}

export const nha_hang_15DefaultData: NhaHang15Data = {
  templateKey: 'nha_hang_15',
  business: {
    name: 'VNTT Foods (J Foods) — Nâng Tầm Gia Vị & Ẩm Thực Gia Đình Việt',
    tagline: 'VNTT Foods Mang Chất Lượng Vượt Trội • Giữ Trọn Hương Vị Từng Bữa Ăn',
    description:
      'VNTT Foods (J Foods) chuyên nghiên cứu, sản xuất và phân phối các dòng xốt lẩu hoàn chỉnh, gia vị ướp Chinsan, nước chấm Thơm Thực và sản phẩm OCOP nông nghiệp sạch, giúp hàng triệu gia đình Việt nấu bữa cơm ngon chuẩn vị nhà hàng chỉ trong 15 phút.',
    phone: ['1900 636 895', '0908 779 895'],
    email: ['cskh@vnttfoods.vn', 'phanphoi@vnttfoods.vn'],
    address: 'Khu Công Nghiệp Tân Bình, Quận Tân Phú, TP. Hồ Chí Minh',
    workingHours: '08:00 - 18:00 (Thứ 2 - Thứ 7)',
    socials: {
      facebook: 'https://facebook.com/vnttfoods',
      instagram: 'https://instagram.com/vnttfoods',
      zalo: 'https://zalo.me/0908779895',
    },
  },
  brandLogo: {
    symbol: 'J',
    name: 'Foods',
    slogan: 'Nâng tầm gia vị Việt',
  },
  navItems: [
    'Trang Chủ',
    'Về VNTT Foods',
    'Sản Phẩm OCOP',
    'Gia Vị Chinsan',
    'Nước Chấm Thơm Thực',
    'Bạn Ăn Gì Hôm Nay',
    'Tin Tức & Sự Kiện',
  ],
  hero: {
    badge: 'VNTT FOODS MANG CHẤT LƯỢNG VƯỢT TRỘI • GIỮ TRỌN HƯƠNG VỊ TỪNG BỮA ĂN',
    title: 'LẨU NGON BÙNG HƯƠNG VỊ',
    highlight: 'Xốt Lẩu Hoàn Chỉnh Chiết Xuất Từ Rau Củ Quả Tươi Ngon',
    subtitle:
      'Khám phá trọn bộ Xốt Lẩu Hoàn Chỉnh Lẩu Bò, Lẩu Hải Sản, Lẩu Thái, Sa Tế Tôm và Gia Vị Xá Xíu từ VNTT Foods — tiện lợi, an toàn chuẩn OCOP cho bữa tiệc gia đình ấm cúng mỗi ngày.',
    primaryCta: 'Khám phá thực đơn',
    secondaryCta: 'Đăng ký đại lý phân phối',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85',
  },
  aboutSection: {
    heading: 'VỀ VNTT FOODS',
    description:
      'Với sứ mệnh "Nâng tầm gia vị Việt", VNTT Foods kết hợp nguồn nông sản tươi sạch Việt Nam cùng quy trình chế biến đạt chuẩn an toàn quốc tế. Mỗi gói xốt lẩu hoàn chỉnh và mỗi hũ sa tế tôm đều giữ trọn hương vị truyền thống, giúp người nội trợ thảnh thơi nấu ngon mỗi ngày.',
    ctaText: 'Câu chuyện thương hiệu',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
  },
  brandValuesSection: {
    heading: 'GIÁ TRỊ THƯƠNG HIỆU',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    values: [
      {
        id: 'val-1',
        title: 'CHẤT LƯỢNG CAO VÀ AN TOÀN THỰC PHẨM',
        description:
          'VNTT Foods cam kết cung cấp các sản phẩm gia vị đạt tiêu chuẩn cao nhất về an toàn thực phẩm, với nhiều chứng nhận uy tín như OCOP, khẳng định chất lượng vượt trội.',
      },
      {
        id: 'val-2',
        title: 'HƯƠNG VỊ ĐẬM ĐÀ VÀ ĐA DẠNG',
        description:
          'Sản phẩm gia vị của VNTT Foods mang đến hương vị đặc trưng, phong phú từ truyền thống đến hiện đại, phù hợp với khẩu vị của mọi gia đình Việt.',
      },
      {
        id: 'val-3',
        title: 'TIỆN LỢI VÀ DỄ DÀNG SỬ DỤNG',
        description:
          'Hướng tới những khách hàng bận rộn, gói gia vị hoàn chỉnh được đóng gói tiện lợi, dễ bảo quản, giúp tiết kiệm thời gian nấu nướng mà vẫn đảm bảo bữa ăn ngon miệng.',
      },
      {
        id: 'val-4',
        title: 'THƯƠNG HIỆU UY TÍN VÀ LÂU ĐỜI',
        description:
          'Được xây dựng từ niềm đam mê ẩm thực Việt, VNTT Foods không ngừng cải tiến công thức để trở thành người bạn đồng hành tin cậy trong mọi căn bếp gia đình.',
      },
    ],
  },
  productLines: {
    ocopTitle: 'Sản phẩm OCOP, Nông nghiệp sạch VTNN',
    chinsanTitle: 'Sản phẩm Chinsan',
    thomThucTitle: 'Sản phẩm Thơm Thực',
  },
  products: [
    // ROW 1: Sản phẩm OCOP, Nông nghiệp sạch VTNN (4 items)
    {
      id: 'oc-1',
      name: 'Xốt Lẩu Hoàn Chỉnh Lẩu Bò (Chiết Xuất Rau Củ Quả Tươi)',
      brandLine: 'ocop_vtnn',
      brandLineLabel: 'Sản phẩm OCOP VTNN',
      weight: 'Gói 180g (Nồi 1.5L)',
      price: '32,000 ₫',
      badge: 'OCOP 4 Sao',
      cookingTime: 'Nấu trong 5 phút',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
      description:
        'Xốt lẩu bò hầm xương và thảo mộc hồi quế tự nhiên, không cần nêm thêm gia vị.',
    },
    {
      id: 'oc-2',
      name: 'Xốt Lẩu Hoàn Chỉnh Lẩu Hải Sản Chua Cay Tự Nhiên',
      brandLine: 'ocop_vtnn',
      brandLineLabel: 'Sản phẩm OCOP VTNN',
      weight: 'Gói 180g (Nồi 1.5L)',
      price: '32,000 ₫',
      badge: 'Nông Nghiệp Sạch',
      cookingTime: 'Nấu trong 5 phút',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
      description:
        'Chiết xuất cốt me, cà chua, sả tươi và ớt hiểm giúp nồi lẩu hải sản dậy mùi thơm lừng.',
    },
    {
      id: 'oc-3',
      name: 'Nước Mắm Cốt Nhĩ Cá Cơm Than Truyền Thống 40 Độ Đạm',
      brandLine: 'ocop_vtnn',
      brandLineLabel: 'Sản phẩm OCOP VTNN',
      weight: 'Chai thủy tinh 500ml',
      price: '75,000 ₫',
      badge: 'OCOP Tiêu Biểu',
      cookingTime: 'Chấm & Nêm trực tiếp',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
      description:
        'Ủ chượp tự nhiên 18 tháng trong thùng gỗ Bời Lời, vị mặn dịu và hậu ngọt đạm cá tự nhiên.',
    },
    {
      id: 'oc-4',
      name: 'Tương Ớt Xào Quảng Nam Gia Truyền Không Phẩm Màu',
      brandLine: 'ocop_vtnn',
      brandLineLabel: 'Sản phẩm OCOP VTNN',
      weight: 'Chai 250g',
      price: '28,000 ₫',
      badge: '100% Ớt Tươi',
      cookingTime: 'Ăn kèm Mì Quảng, Phở',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      description:
        'Ớt chín cây rim cùng tỏi lý sơn, cà chua và mè rang thơm nồng đặc trưng miền Trung.',
    },

    // ROW 2: Sản phẩm Chinsan (4 items)
    {
      id: 'cs-1',
      name: 'Sa Tế Tôm Chinsan Đặc Biệt (Hũ Thủy Tinh Đậm Đặc)',
      brandLine: 'chinsan',
      brandLineLabel: 'Sản phẩm Chinsan',
      weight: 'Hũ 170g',
      price: '29,000 ₫',
      badge: 'Best Seller',
      cookingTime: 'Ướp & Nêm lẩu bún bò',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
      description:
        'Làm từ tôm khô giã nhuyễn, sả bằm, ớt tươi và tỏi phi vàng ươm, cay thơm tròn vị.',
    },
    {
      id: 'cs-2',
      name: 'Xốt Ướp Thịt Nướng & Sườn Nướng BBQ Chinsan',
      brandLine: 'chinsan',
      brandLineLabel: 'Sản phẩm Chinsan',
      weight: 'Gói 80g (Ướp 500g thịt)',
      price: '16,500 ₫',
      badge: 'Tiện Lợi',
      cookingTime: 'Ướp 15 phút',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      description:
        'Phối trộn mật ong rừng, dầu hào, tỏi hành giúp miếng thịt nướng mềm mọng, lên màu óng ả.',
    },
    {
      id: 'cs-3',
      name: 'Gia Vị Hoàn Chỉnh Thịt Xá Xíu Chinsan Thượng Hạng',
      brandLine: 'chinsan',
      brandLineLabel: 'Sản phẩm Chinsan',
      weight: 'Gói 75g (Ướp 500g thịt)',
      price: '18,000 ₫',
      badge: 'Chuẩn Vị Nhà Hàng',
      cookingTime: 'Áp chảo / Nướng nồi chiên',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      description:
        'Công thức xốt xá xíu Quảng Đông truyền thống dùng kèm cơm nóng, mì vằn thắn hoặc bánh mì.',
    },
    {
      id: 'cs-4',
      name: 'Xốt Kho Cá & Kho Thịt Tộ Chinsan Lên Màu Tự Nhiên',
      brandLine: 'chinsan',
      brandLineLabel: 'Sản phẩm Chinsan',
      weight: 'Gói 80g',
      price: '15,500 ₫',
      cookingTime: 'Kho 20 phút',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
      description:
        'Tích hợp nước màu dừa Bến Tre, nước mắm cốt và tiêu sọ giúp món cá kho tộ sánh kẹo.',
    },

    // ROW 3: Sản phẩm Thơm Thực (4 items)
    {
      id: 'tt-1',
      name: 'Giấm Gạo Lên Men Tự Nhiên Thơm Thực',
      brandLine: 'thom_thuc',
      brandLineLabel: 'Sản phẩm Thơm Thực',
      weight: 'Chai 400ml',
      price: '19,000 ₫',
      badge: 'Lên Men Tự Nhiên',
      cookingTime: 'Trộn gỏi & Salad',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80',
      description:
        'Vị chua thanh dịu nhẹ từ gạo lứt và gạo tẻ lên men tự nhiên, an toàn cho dạ dày.',
    },
    {
      id: 'tt-2',
      name: 'Tương Ớt Tươi Nguyên Chất Thơm Thực Ít Đường',
      brandLine: 'thom_thuc',
      brandLineLabel: 'Sản phẩm Thơm Thực',
      weight: 'Chai 270g',
      price: '22,000 ₫',
      cookingTime: 'Chấm đồ chiên nướng',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
      description:
        'Xay nhuyễn từ ớt chỉ thiên tươi kết hợp tỏi ta, sánh mịn không dùng chất tạo đặc tổng hợp.',
    },
    {
      id: 'tt-3',
      name: 'Nước Tương Đậu Nành Đậm Đặc Thơm Thực (Can Gia Đình)',
      brandLine: 'thom_thuc',
      brandLineLabel: 'Sản phẩm Thơm Thực',
      weight: 'Can 1.8 Lít',
      price: '68,000 ₫',
      badge: 'Không 3-MCPD',
      cookingTime: 'Chấm & Kho xào chay mặn',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
      description:
        'Lên men tự nhiên từ hạt đậu nành chọn lọc, thơm dịu dùng cho cả món chay và món mặn.',
    },
    {
      id: 'tt-4',
      name: 'Dầu Hào Nấm Hương Thực Vật Thơm Thực',
      brandLine: 'thom_thuc',
      brandLineLabel: 'Sản phẩm Thơm Thực',
      weight: 'Chai 350g',
      price: '26,000 ₫',
      cookingTime: 'Xào rau củ & Ướp thịt',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
      description:
        'Chiết xuất nấm hương rừng giúp các món rau xào xanh bóng và đậm vị ngọt Umami.',
    },
  ],
  whatToEatToday: {
    sectionTitle: 'BẠN ĂN GÌ HÔM NAY',
    cardTitle: 'BỮA ĂN GIA ĐÌNH TIỆN LỢI HƠN BAO GIỜ HẾT',
    cardDescription:
      'Chỉ với 1 gói Xốt Gia Vị Hoàn Chỉnh VNTT Foods, bạn dễ dàng biến tấu hàng chục món lẩu, nướng, xá xíu và canh chua chuẩn vị bếp trưởng ngay tại căn bếp gia đình.',
    ctaText: 'Xem công thức nấu ngon',
    leftImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    rightImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    recipes: [
      {
        id: 'rc-1',
        title: 'Lẩu Bò Nhúng Giấm & Nấm Kim Châm Nóng Hổi Cuối Tuần',
        prepTime: '15 phút',
        seasoningUsed: 'Xốt Lẩu Hoàn Chỉnh Lẩu Bò VNTT Foods',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'rc-2',
        title: 'Thịt Ba Chỉ Nướng Xá Xíu Mềm Mọng Bằng Nồi Chiên Không Dầu',
        prepTime: '20 phút',
        seasoningUsed: 'Gia Vị Hoàn Chỉnh Xá Xíu Chinsan',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'rc-3',
        title: 'Mực Trứng & Tôm Sú Xào Sa Tế Tôm Cay Nồng Đưa Cơm',
        prepTime: '10 phút',
        seasoningUsed: 'Sa Tế Tôm Đặc Biệt Chinsan',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  newsSection: {
    heading: 'TIN TỨC & SỰ KIỆN',
    items: [
      {
        id: 'nw-1',
        title: 'VNTT Foods vinh dự đạt chứng nhận Sản phẩm OCOP tiêu biểu & Hàng Việt Nam Chất Lượng Cao',
        date: '18/10/2026',
        excerpt:
          'Dòng Xốt Lẩu Hoàn Chỉnh và Sa Tế Tôm của VNTT Foods được người tiêu dùng bình chọn nhờ nguồn nguyên liệu rau củ sạch...',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'nw-2',
        title: 'Bí quyết nấu nồi Lẩu Bò và Lẩu Hải Sản ngon chuẩn vị nhà hàng chỉ trong 5 phút tại nhà',
        date: '14/10/2026',
        excerpt:
          'Không cần ninh xương hàng giờ, chỉ cần pha 1 gói Xốt Lẩu Hoàn Chỉnh VNTT Foods với 1.5 lít nước sôi...',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'nw-3',
        title: 'VNTT Foods mở rộng hệ thống phân phối tại hơn 2.500 siêu thị và cửa hàng thực phẩm toàn quốc',
        date: '09/10/2026',
        excerpt:
          'Khách hàng dễ dàng tìm mua trọn bộ sản phẩm Chinsan, Thơm Thực và OCOP VTNN tại các hệ thống siêu thị lớn...',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
};

export const defaultData = nha_hang_15DefaultData;
export const mockData = nha_hang_15DefaultData;
export default nha_hang_15DefaultData;
