export interface BedaDealProduct {
  id: string;
  code: string;
  name: string;
  category: 'table' | 'chair' | 'storage' | 'decoration';
  categoryLabel: string;
  discountPercent: number;
  price: number;
  oldPrice: number;
  image: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
}

export interface CheckerboardTile {
  id: string;
  row: 1 | 2;
  categoryKey: 'table' | 'chair' | 'storage' | 'decoration';
  title: string;
  subtitle: string;
  ctaLabel: string;
  image: string;
  imageFirstInPair: boolean;
}

export interface NoiThat26TemplateData {
  business: {
    name: string;
    brandTitle: string;
    brandSub: string;
    tagline: string;
    description: string;
    address: string;
    phone: string[];
    email: string[];
    searchPlaceholder: string;
  };
  navigation: {
    id: string;
    label: string;
    targetId: string;
    hasDropdown?: boolean;
  }[];
  heroSlides: {
    id: string;
    title: string;
    subtitle: string;
    ctaLabel: string;
    image: string;
  }[];
  categoriesSection: {
    heading: string;
    tiles: CheckerboardTile[];
  };
  dealsSection: {
    heading: string;
    products: BedaDealProduct[];
  };
  splitPromos: {
    left: {
      topLabel: string;
      fromLabel: string;
      scriptBrand: string;
      discountText: string;
      image: string;
    };
    right: {
      title: string;
      brandName: string;
      ctaLabel: string;
      image: string;
    };
  };
  serviceHighlights: {
    id: string;
    iconType: 'warranty' | 'shipping' | 'support';
    title: string;
    description: string;
  }[];
  newsletter: {
    heading: string;
    placeholder: string;
    buttonLabel: string;
    backgroundImage: string;
  };
}

export const defaultNoiThat26Data: NoiThat26TemplateData = {
  business: {
    name: 'Beda Furniture',
    brandTitle: 'Furniture',
    brandSub: 'BEDA MONA',
    tagline: 'Nội Thất Đương Đại & Kiến Trúc Không Gian Sống',
    description:
      'Beda Furniture kiến tạo không gian sống đương đại tinh tế với những bộ sưu tập sofa, kệ tivi gỗ quý và bàn ăn chuẩn mực thẩm mỹ Bắc Âu.',
    address: '1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM',
    phone: ['0313728397', '0909 372 839'],
    email: ['info@bedafurniture.vn', 'cskh@themona.global'],
    searchPlaceholder: 'Tìm kiếm sản phẩm...'
  },
  navigation: [
    { id: 'nav-home', label: 'TRANG CHỦ', targetId: 'top' },
    { id: 'nav-products', label: 'SẢN PHẨM', targetId: 'section-products', hasDropdown: true },
    { id: 'nav-about', label: 'VỀ CHÚNG TÔI', targetId: 'section-promos' },
    { id: 'nav-blog', label: 'TIN TỨC', targetId: 'section-newsletter' },
    { id: 'nav-contact', label: 'LIÊN HỆ', targetId: 'section-footer' }
  ],
  heroSlides: [
    {
      id: 'hero-1',
      title: 'BỘ SOFA ĐƯƠNG ĐẠI & GHẾ THƯ GIÃN',
      subtitle: 'Khẳng Định Phong Cách Sống Qua Từng Lựa Chọn Không Gian',
      ctaLabel: 'MUA NGAY',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1500&q=85'
    },
    {
      id: 'hero-2',
      title: 'KIẾN TRÚC PHÒNG KHÁCH TỐI GIẢN BEDA',
      subtitle: 'Sự Giao Thoa Giữa Chất Liệu Gỗ Tự Nhiên Quý Hiếm & Đường Nét Đương Đại',
      ctaLabel: 'KHÁM PHÁ NGAY',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=85'
    }
  ],
  categoriesSection: {
    heading: 'DANH MỤC SẢN PHẨM',
    tiles: [
      {
        id: 'tile-table',
        row: 1,
        categoryKey: 'table',
        title: 'Bàn Đương Đại',
        subtitle: 'Bàn ăn & bàn trà tối giản',
        ctaLabel: 'XEM THÊM',
        image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=700&q=80',
        imageFirstInPair: true
      },
      {
        id: 'tile-chair',
        row: 1,
        categoryKey: 'chair',
        title: 'Ghế Thiết Kế',
        subtitle: 'Ghế đơn & ghế phòng ăn',
        ctaLabel: 'XEM THÊM',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=80',
        imageFirstInPair: true
      },
      {
        id: 'tile-storage',
        row: 2,
        categoryKey: 'storage',
        title: 'Kệ & Tủ Lưu Trữ',
        subtitle: 'Kệ tivi & rương trang trí',
        ctaLabel: 'XEM THÊM',
        image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80',
        imageFirstInPair: false
      },
      {
        id: 'tile-decoration',
        row: 2,
        categoryKey: 'decoration',
        title: 'Đồ Trang Trí',
        subtitle: 'Chậu gỗ hình học & decor',
        ctaLabel: 'XEM THÊM',
        image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80',
        imageFirstInPair: false
      }
    ]
  },
  dealsSection: {
    heading: 'ƯU ĐÃI TUYỆT VỜI',
    products: [
      {
        id: 'deal-1',
        code: 'KTV96',
        name: 'Kệ tivi phòng khách KTV96',
        category: 'storage',
        categoryLabel: 'Kệ & Tủ Lưu Trữ',
        discountPercent: 16,
        price: 4000000,
        oldPrice: 4750000,
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
        dimensions: '1800 x 400 x 1450 mm',
        material: 'Gỗ công nghiệp lõi xanh phủ Melamine vân sồi trầm',
        warranty: '24 tháng chính hãng Beda',
        description: 'Kệ tivi kết hợp tháp kệ trang trí đa năng KTV96 mang phong cách kiến trúc đương đại gọn gàng.'
      },
      {
        id: 'deal-2',
        code: 'KTV91',
        name: 'Kệ tivi gỗ tự nhiên KTV91',
        category: 'storage',
        categoryLabel: 'Kệ & Tủ Lưu Trữ',
        discountPercent: 11,
        price: 4500000,
        oldPrice: 5050000,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
        dimensions: '1900 x 420 x 1500 mm',
        material: 'Gỗ sồi Nga tự nhiên tẩm sấy chống cong vênh',
        warranty: '36 tháng chính hãng Beda',
        description: 'Tông màu gỗ sồi sáng tự nhiên giúp mở rộng chiều sâu thị giác cho phòng khách căn hộ.'
      },
      {
        id: 'deal-3',
        code: 'KTV-PRO',
        name: 'Kệ tivi cao cấp Beda Minimal',
        category: 'storage',
        categoryLabel: 'Kệ & Tủ Lưu Trữ',
        discountPercent: 12,
        price: 4000000,
        oldPrice: 4550000,
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        dimensions: '1600 - 2200 x 380 x 450 mm (Thay đổi chiều dài)',
        material: 'Gỗ MDF sơn bệt Espresso đen mờ cao cấp',
        warranty: '24 tháng chính hãng Beda',
        description: 'Thiết kế 2 khối lồng ghép thông minh cho phép tùy biến chiều dài kệ theo diện tích mảng tường.'
      },
      {
        id: 'deal-4',
        code: 'KTV-XD04',
        name: 'Kệ Tivi Gỗ Xoan Đào',
        category: 'storage',
        categoryLabel: 'Kệ & Tủ Lưu Trữ',
        discountPercent: 4,
        price: 5400000,
        oldPrice: 5624000,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
        dimensions: '2000 x 450 x 680 mm',
        material: '100% Gỗ Xoan Đào Bắc Bộ nguyên tấm sơn PU bóng mờ',
        warranty: '60 tháng bảo hành gỗ',
        description: 'Kệ tivi gỗ Xoan Đào chạm pano tứ quý tinh tế, hộc kéo ray bi 3 tầng vận hành êm ái.'
      },
      {
        id: 'deal-5',
        code: 'KTV-DH05',
        name: 'Kệ Tivi Gỗ Đinh Hương',
        category: 'storage',
        categoryLabel: 'Kệ & Tủ Lưu Trữ',
        discountPercent: 11,
        price: 8000000,
        oldPrice: 8952000,
        image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=600&q=80',
        dimensions: '2200 x 460 x 720 mm',
        material: 'Gỗ Đinh Hương tự nhiên vân chun tuyển chọn',
        warranty: '60 tháng bảo hành gỗ',
        description: 'Mẫu kệ tivi gỗ Đinh Hương cao cấp tỏa hương thơm dịu nhẹ tự nhiên, nâng tầm đẳng cấp phòng khách biệt thự.'
      },
      {
        id: 'deal-6',
        code: 'KTV-GC06',
        name: 'Kệ Tivi Gỗ Cẩm',
        category: 'storage',
        categoryLabel: 'Kệ & Tủ Lưu Trữ',
        discountPercent: 10,
        price: 6800000,
        oldPrice: 7559000,
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
        dimensions: '2000 x 440 x 650 mm',
        material: 'Gỗ Cẩm Vàng nguyên khối dày dặn',
        warranty: '60 tháng bảo hành gỗ',
        description: 'Sở hữu hệ vân gỗ Cẩm độc bản sắc nét cùng kết cấu mộng truyền thống bền bỉ hàng chục năm.'
      },
      {
        id: 'deal-7',
        code: 'BA5215',
        name: 'Bộ bàn ghế ăn gỗ Sồi 6 ghế mẫu 2 tầng 1m6 – BA5215',
        category: 'table',
        categoryLabel: 'Bàn Đương Đại',
        discountPercent: 4,
        price: 7300000,
        oldPrice: 7568000,
        image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
        dimensions: '1600 x 800 x 750 mm (Kèm 6 ghế gỗ Sồi)',
        material: 'Gỗ Sồi Nga nhập khẩu + Mặt kính cường lực 8mm',
        warranty: '36 tháng chính hãng Beda',
        description: 'Bộ bàn ăn 6 ghế thiết kế 2 tầng tiện lợi để khăn giấy, gia vị ấm trà dưới gầm bàn.'
      },
      {
        id: 'deal-8',
        code: 'BAX208',
        name: 'Bộ bàn ghế ăn tròn xoay gỗ Xoan Đào 6 ghế chân cao 1m2 – BAX208',
        category: 'table',
        categoryLabel: 'Bàn Đương Đại',
        discountPercent: 2,
        price: 8500000,
        oldPrice: 8672000,
        image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80',
        dimensions: 'Đường kính 1200 mm + Mâm xoay kính D650 mm',
        material: 'Gỗ Xoan Đào tự nhiên 100% sơn PU 5 lớp',
        warranty: '36 tháng chính hãng Beda',
        description: 'Bàn ăn tròn mâm xoay gắn kết bữa cơm gia đình Việt ấm cúng, đi kèm 6 ghế tựa lưng cong công thái học.'
      }
    ]
  },
  splitPromos: {
    left: {
      topLabel: 'ƯU ĐÃI ĐẶC BIỆT',
      fromLabel: 'bộ sưu tập',
      scriptBrand: 'Elle',
      discountText: 'Giảm 15%',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    },
    right: {
      title: 'Sofa Nội Thất Đương Đại',
      brandName: 'LUIGIANO',
      ctaLabel: 'MUA NGAY',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    }
  },
  serviceHighlights: [
    {
      id: 'srv-1',
      iconType: 'warranty',
      title: 'BẢO HÀNH & ĐỔI TRẢ',
      description: 'Sản phẩm được bảo hành chính hãng 12 tháng tại nhà máy.'
    },
    {
      id: 'srv-2',
      iconType: 'shipping',
      title: 'VẬN CHUYỂN TOÀN QUỐC',
      description: 'Tất cả sản phẩm được đóng gói và giao lắp tận nơi toàn quốc.'
    },
    {
      id: 'srv-3',
      iconType: 'support',
      title: 'HỖ TRỢ 24/7',
      description: 'Hỗ trợ tư vấn mọi yêu cầu 24/7. Hotline: 0313728397'
    }
  ],
  newsletter: {
    heading: 'ĐĂNG KÝ NHẬN BẢN TIN',
    placeholder: 'Nhập địa chỉ email của bạn...',
    buttonLabel: 'ĐĂNG KÝ',
    backgroundImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1500&q=80'
  }
};
