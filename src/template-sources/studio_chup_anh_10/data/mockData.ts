export interface SilverCategoryItem {
  id: string;
  title: string;
  ctaText: string;
  image: string;
  badge?: string;
}

export interface SilverProductItem {
  id: string;
  name: string;
  code: string;
  category: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeType?: 'new' | 'sale';
  image: string;
  specs: string;
}

export interface SilverLookbookPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export interface StudioChupAnh10Data {
  business: {
    name: string;
    subName: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string[];
    address: string;
    workingHours: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    secondaryCta: string;
    backgroundImage: string;
    highlightNote: string;
  };
  categories: SilverCategoryItem[];
  midBanner: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    backgroundImage: string;
  };
  newProductsSection: {
    title: string;
    subtitle: string;
    items: SilverProductItem[];
  };
  saleProductsSection: {
    title: string;
    subtitle: string;
    items: SilverProductItem[];
  };
  featureSplitBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    leftImage: string;
    rightImage: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  blogSection: {
    title: string;
    subtitle: string;
    posts: SilverLookbookPost[];
  };
  newsletterAndMap: {
    newsletterTitle: string;
    newsletterSubtitle: string;
    placeholder: string;
    buttonText: string;
    studioLocations: {
      name: string;
      address: string;
      phone: string;
      hours: string;
    }[];
  };
  footer: {
    col1Links: string[];
    col2Links: string[];
    paymentMethods: string[];
  };
}

export const defaultStudioChupAnh10Data: StudioChupAnh10Data = {
  business: {
    name: 'SILVER STUDIO',
    subName: 'MONA JEWELRY & BRIDAL',
    tagline: 'Chế Tác Trang Sức Bạc Nghệ Thuật & Concept Ảnh Cưới Fine Art',
    description:
      'Silver Studio kết hợp nghệ thuật chế tác bạc Ý S925 thủ công cùng nhiếp ảnh chân dung cô dâu Fine Art, tôn vinh vẻ đẹp thanh khiết và khí chất kiêu sa trong ngày trọng đại.',
    phone: ['0126 922 0162', '0909 884 210'],
    email: ['demonhunter@gmail.com', 'booking@silverstudio.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    workingHours: '08:30 - 21:30 (Thứ 2 - Chủ Nhật)',
    copyright: '© Bản quyền thuộc về Silver Studio Bridal & Jewelry. Thiết kế bởi Mona Media.',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#trang-chu' },
    { label: 'NỮ TRANG BẠC', href: '#danh-muc' },
    { label: 'SẢN PHẨM MỚI', href: '#san-pham-moi' },
    { label: 'ƯU ĐÃI CƯỚI', href: '#san-pham-giam-gia' },
    { label: 'LOOKBOOK CÔ DÂU', href: '#lookbook' },
    { label: 'BÀI MỚI ĐĂNG', href: '#tin-tuc' },
    { label: 'LIÊN HỆ', href: '#lien-he' },
  ],
  hero: {
    eyebrow: 'BỘ SƯU TẬP CƯỚI & CHÂN DUNG NGHỆ THUẬT 2026',
    title: 'Phong Cách Tuyệt Vời Của Bạn',
    subtitle:
      'Tỏa sáng trong từng khung hình cưới với bộ sưu tập hoa tai đèn chùm bạc Ý S925 đính đá Cz cao cấp và gói chụp Lookbook Bridal độc bản tại Silver Studio.',
    ctaText: 'MUA NGAY',
    secondaryCta: 'ĐẶT LỊCH THỬ TRANG SỨC',
    backgroundImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85',
    highlightNote: 'Tặng kèm gói chụp Portrait Fine Art khi sở hữu trọn bộ trang sức cô dâu',
  },
  categories: [
    {
      id: 'cat-1',
      title: 'NỮ TRANG BẠC',
      ctaText: 'Mua ngay',
      image:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      badge: '42 mẫu thiết kế',
    },
    {
      id: 'cat-2',
      title: 'BẠC THÁI & PHỤ KIỆN CƯỚI',
      ctaText: 'Mua ngay',
      image:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
      badge: 'Chế tác thủ công',
    },
    {
      id: 'cat-3',
      title: 'NGỌC TRAI CÔ DÂU',
      ctaText: 'Mua ngay',
      image:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      badge: 'Ngọc trai nước ngọt',
    },
    {
      id: 'cat-4',
      title: 'ĐỒNG HỒ & TRANG SỨC',
      ctaText: 'Mua ngay',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      badge: 'Phiên bản giới hạn',
    },
  ],
  midBanner: {
    eyebrow: 'NGHỆ THUẬT ÁNH SÁNG & BẠC Ý CAO CẤP',
    title: 'Cuộc Sống Thêm Thú Vị',
    description:
      'Mỗi giác cắt pha lê Swarovski kết hợp nền bạc 925 tinh khiết được thiết kế riêng để bắt trọn ánh đèn Flash Studio và nắng hoàng hôn trong ngày cưới của bạn.',
    ctaText: 'ĐẶT NGAY THÔI',
    backgroundImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85',
  },
  newProductsSection: {
    title: 'SẢN PHẨM MỚI',
    subtitle: 'Tuyển tập nhẫn đôi bạc Ý S925 & trang sức chụp ảnh cưới vừa ra mắt mùa thu đông',
    items: [
      {
        id: 'new-1',
        name: 'Nhẫn Đôi Bạc Cao Cấp ND-6704',
        code: 'ND-6704',
        category: 'Nhẫn Cưới Bạc Ý',
        price: '520,000 ₫',
        badge: 'New',
        badgeType: 'new',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        specs: 'Bạc Ý S925 mạ Bạch Kim • Khắc tên miễn phí',
      },
      {
        id: 'new-2',
        name: 'Nhẫn đôi bạc đẹp cao cấp ND-6904',
        code: 'ND-6904',
        category: 'Nhẫn Đính Hôn',
        price: '670,000 ₫',
        badge: 'New',
        badgeType: 'new',
        image:
          'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
        specs: 'Đá Cz giác cắt kim cương • Bảo hành đánh bóng trọn đời',
      },
      {
        id: 'new-3',
        name: 'Nhẫn Bạc Nam Xmen RM-011',
        code: 'RM-011',
        category: 'Trang Sức Chú Rể',
        price: '240,000 ₫',
        oldPrice: '670,000 ₫',
        badge: '-64%',
        badgeType: 'sale',
        image:
          'https://images.unsplash.com/photo-1598560917505-59a3655c1592?auto=format&fit=crop&w=800&q=80',
        specs: 'Bạc Thái S925 bản mạnh mẽ • Phối vest cưới lịch lãm',
      },
      {
        id: 'new-4',
        name: 'Nhẫn Bạc Ý S925 Nữ Hoàng RM-010',
        code: 'RM-010',
        category: 'Trang Sức Cô Dâu',
        price: '520,000 ₫',
        badge: 'New',
        badgeType: 'new',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
        specs: 'Thiết kế Solitaire thanh mảnh • Tôn dáng ngón tay cô dâu',
      },
    ],
  },
  saleProductsSection: {
    title: 'SẢN PHẨM GIẢM GIÁ',
    subtitle: 'Ưu đãi đặc quyền lên đến 50% cho các cặp đôi đặt lịch chụp ảnh cưới & thuê trang sức trong tháng',
    items: [
      {
        id: 'sale-1',
        name: 'Dây Chuyền Bạc Hình Con Cá DB-1581',
        code: 'DB-1581',
        category: 'Dây Chuyền Cô Dâu',
        price: '200,000 ₫',
        oldPrice: '400,000 ₫',
        badge: '-50%',
        badgeType: 'sale',
        image:
          'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
        specs: 'Dây bạc Ý mảnh mai • Tôn xương quai xanh quyến rũ',
      },
      {
        id: 'sale-2',
        name: 'Bông tai bạc nữ trăng sao cao cấp B-2303',
        code: 'B-2303',
        category: 'Hoa Tai Dự Tiệc',
        price: '189,000 ₫',
        oldPrice: '275,000 ₫',
        badge: '-31%',
        badgeType: 'sale',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
        specs: 'Đính đá pha lê lấp lánh • Rất ăn ảnh góc nghiêng',
      },
      {
        id: 'sale-3',
        name: 'Bông tai bạc nữ B-8303 Hậu Duệ Mặt Trời',
        code: 'B-8303',
        category: 'Hoa Tai Bridal',
        price: '185,000 ₫',
        oldPrice: '258,000 ₫',
        badge: '-28%',
        badgeType: 'sale',
        image:
          'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
        specs: 'Phong cách Hàn Quốc thanh lịch • Nhẹ tai suốt 12 giờ',
      },
      {
        id: 'sale-4',
        name: 'Nhẫn bạc nữ N-5403 Vương Miện',
        code: 'N-5403',
        category: 'Nhẫn Cưới Nghệ Thuật',
        price: '215,000 ₫',
        oldPrice: '255,000 ₫',
        badge: '-16%',
        badgeType: 'sale',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        specs: 'Chấu vương miện đính đá tấm • Hợp chụp cận cảnh tay',
      },
    ],
  },
  featureSplitBanner: {
    eyebrow: 'SILVER STUDIO LOOKBOOK 2026',
    title: 'Vẻ Đẹp Kiêu Sa Giữa Muôn Ngàn Ánh Sao',
    subtitle: 'Kết hợp hoàn hảo giữa nhiếp ảnh thời trang cao cấp và chế tác kim hoàn bạc thủ công',
    description:
      'Tại Silver Studio, mỗi bộ trang sức không chỉ là phụ kiện mà là tâm điểm của câu chuyện tình yêu. Đội ngũ stylist và nhiếp ảnh gia của chúng tôi tư vấn trực tiếp kiểu dáng hoa tai, dây chuyền phù hợp nhất với từng dáng váy cưới cúp ngực, trễ vai hay cổ điển.',
    ctaText: 'KHÁM PHÁ LOOKBOOK CƯỚI',
    leftImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85',
    rightImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    stats: [
      { value: '1.850+', label: 'Cặp đôi chụp Lookbook' },
      { value: '100%', label: 'Bạc Ý S925 chuẩn quốc tế' },
      { value: 'Trọn Đời', label: 'Đánh bóng & làm mới miễn phí' },
    ],
  },
  blogSection: {
    title: 'BÀI MỚI ĐĂNG',
    subtitle: 'Cẩm nang phối trang sức cưới, xu hướng phụ kiện cô dâu và bí quyết tạo dáng trước ống kính',
    posts: [
      {
        id: 'post-1',
        title: 'ĐIỂM NHẤN ẤN TƯỢNG GIÚP BẠN CHỌN TRANG SỨC ĐI DỰ TIỆC & CHỤP ẢNH CƯỚI',
        date: '18 Tháng 10, 2026',
        category: 'Tư Vấn Phong Cách',
        excerpt:
          'Những trang phục đi tiệc hay váy cưới cúp ngực thường vô cùng quyến rũ, gợi cảm nhưng phần cổ và vai để trống sẽ thật sự tỏa sáng khi kết hợp cùng dây chuyền bạc đính đá mảnh mai...',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'post-2',
        title: 'BÍ QUYẾT LỰA CHỌN PHỤ KIỆN TRANG SỨC ĐỘC "MIỄN CHÊ" KHI DỰ TIỆC TỐI!',
        date: '14 Tháng 10, 2026',
        category: 'Lookbook Studio',
        excerpt:
          'Lựa chọn được những món phụ kiện trang sức vừa sang trọng, vừa bắt sáng dưới ánh đèn studio và tiệc tối sẽ giúp cô dâu trở thành tâm điểm thu hút mọi ánh nhìn...',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'post-3',
        title: 'MÁCH NHỎ CHỌN TRANG SỨC BẠC Ý LÀM QUÀ KỶ NIỆM CƯỚI ĐẦY ẤN TƯỢNG',
        date: '09 Tháng 10, 2026',
        category: 'Quà Tặng Tình Yêu',
        excerpt:
          'Trang sức luôn là một trong những món quà tặng tinh tế và giàu cảm xúc nhất dành cho người thương nhân dịp cầu hôn, kỷ niệm ngày cưới hay buổi chụp hình Pre-Wedding...',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  newsletterAndMap: {
    newsletterTitle: 'ĐĂNG KÝ NHẬN THÔNG BÁO',
    newsletterSubtitle:
      'Nhận ngay voucher giảm 20% trang sức cưới bạc Ý S925 và bảng giá gói chụp Lookbook cô dâu mới nhất từ Silver Studio.',
    placeholder: 'Email của bạn...',
    buttonText: 'ĐĂNG KÝ',
    studioLocations: [
      {
        name: 'Showroom & Studio Quận 11',
        address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM',
        phone: '0126 922 0162',
        hours: '08:30 - 21:30',
      },
      {
        name: 'Phim Trường Ánh Sáng Quận 3',
        address: '142 Võ Văn Tần, Phường 6, Quận 3, TP.HCM',
        phone: '0909 884 210',
        hours: '09:00 - 21:00',
      },
    ],
  },
  footer: {
    col1Links: ['TRANG CHỦ', 'NỮ TRANG BẠC', 'SẢN PHẨM MỚI', 'SẢN PHẨM GIẢM GIÁ'],
    col2Links: ['LIÊN HỆ', 'BÀI MỚI ĐĂNG', 'CHÍNH SÁCH BẢO HÀNH', 'ĐẶT LỊCH STUDIO'],
    paymentMethods: ['VISA', 'PayPal', 'Stripe', 'MasterCard', 'COD'],
  },
};
