export interface QuaTetTrustItem {
  id: string
  title: string
  subtitle: string
  iconType: 'truck' | 'shield' | 'gift' | 'headset'
}

export interface QuaTetProductItem {
  id: string
  name: string
  category: 'MỚI NHẤT' | 'GIẢM GIÁ' | 'BÁN CHẠY'
  price: string
  oldPrice?: string
  image: string
  featuredInPromo?: boolean
}

export interface QuaTetComboBadge {
  id: string
  label: string
  tone: 'green' | 'red' | 'amber'
}

export interface QuanCafe8TemplateData {
  business: {
    name: string
    subtitle: string
    tagline: string
    phone: string[]
    email: string[]
    address: string
  }
  navigation: {
    label: string
    href: string
  }[]
  hero: {
    headlineTop: string
    headlineBottom: string
    ribbonText: string
    heroImage: string
    secondaryImage: string
  }
  trustItems: QuaTetTrustItem[]
  featuredSection: {
    heading: string
    tabs: ('MỚI NHẤT' | 'GIẢM GIÁ' | 'BÁN CHẠY')[]
    products: QuaTetProductItem[]
  }
  newYearPromo: {
    heading: string
    subtitle: string
    countdown: {
      weeks: string
      days: string
      hours: string
      minutes: string
      seconds: string
    }
  }
  bentoGallery: {
    mainImage: string
    gridImages: string[]
  }
  comboOffer: {
    eyebrowPrefix: string
    eyebrowHighlight: string
    heading: string
    ctaText: string
    quotes: string[]
    showcaseImage: string
    badges: QuaTetComboBadge[]
  }
  footerPolicies: string[]
}

export const quanCafe8MockData: QuanCafe8TemplateData = {
  business: {
    name: 'QuaTet Cafe',
    subtitle: 'Tiệm Trà Đạo, Bánh Ngọt & Hộp Quà Thưởng Trà',
    tagline:
      'QuaTet Cafe làm việc chặt chẽ với các nghệ nhân trà đạo và bếp bánh thủ công, đảm bảo từng phẩm trà và hộp quà xuân đều đạt chất lượng thượng hạng, mang đến niềm vui trọn vẹn cho người nhận.',
    phone: ['0313728397', '0909 686 888'],
    email: ['info@themona.global', 'booking@quatetcafe.vn'],
    address: '1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'GIỚI THIỆU', href: '#gallery' },
    { label: 'CỬA HÀNG', href: '#featured' },
    { label: 'KIẾN THỨC', href: '#combo' },
    { label: 'LIÊN HỆ', href: '#footer' },
  ],
  hero: {
    headlineTop: 'Giảm tưng bừng',
    headlineBottom: 'Mừng Tết lớn',
    ribbonText: 'KHUYẾN MẠI LỚN KHI MUA GIỎ QUÀ TRÀ ĐẠO & BÁNH THƯỞNG TRÀ',
    heroImage:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
  },
  trustItems: [
    {
      id: 'tr-1',
      title: 'MIỄN PHÍ GIAO HÀNG',
      subtitle: 'Với đơn hàng trên 1.000.000đ',
      iconType: 'truck',
    },
    {
      id: 'tr-2',
      title: 'CHẤT LƯỢNG UY TÍN',
      subtitle: 'Đảm bảo 100% chính hãng',
      iconType: 'shield',
    },
    {
      id: 'tr-3',
      title: 'MUA HÀNG TIẾT KIỆM',
      subtitle: 'Gọi ngay 0313728397',
      iconType: 'gift',
    },
    {
      id: 'tr-4',
      title: 'HỖ TRỢ ONLINE 24/7',
      subtitle: 'Cam kết tốt nhất thị trường',
      iconType: 'headset',
    },
  ],
  featuredSection: {
    heading: 'Sản phẩm nổi bật',
    tabs: ['MỚI NHẤT', 'GIẢM GIÁ', 'BÁN CHẠY'],
    products: [
      {
        id: 'p-1',
        name: 'Bánh Ngọt & Trà Tết Hương Vị Xuân',
        category: 'MỚI NHẤT',
        price: '336,000 ₫',
        oldPrice: '390,000 ₫',
        image:
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-2',
        name: 'Set Trà Hoa & Bao Lì Xì Hạnh Phúc',
        category: 'MỚI NHẤT',
        price: '88,000 ₫',
        featuredInPromo: true,
        image:
          'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-3',
        name: 'Bộ Phụ Kiện Trà Đạo Sang Trọng',
        category: 'MỚI NHẤT',
        price: '66,000 ₫',
        featuredInPromo: true,
        image:
          'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-4',
        name: 'Hộp Quà Trà Thượng Hạng Phúc Lộc Thọ',
        category: 'MỚI NHẤT',
        price: '1,290,000 ₫',
        oldPrice: '1,490,000 ₫',
        image:
          'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-5',
        name: 'Hộp Quà Trà Ô Long Hương Xuân',
        category: 'GIẢM GIÁ',
        price: '530,000 ₫',
        oldPrice: '620,000 ₫',
        featuredInPromo: true,
        image:
          'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-6',
        name: 'Giỏ Quà Trà & Bánh Ngọt Phát Tài',
        category: 'BÁN CHẠY',
        price: '690,000 ₫',
        image:
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-7',
        name: 'Set Trà Shan Tuyết Cổ Thụ Quý Tộc',
        category: 'BÁN CHẠY',
        price: '852,000 ₫',
        featuredInPromo: true,
        image:
          'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-8',
        name: 'Hộp Quà Trà Hoa Cúc & Mứt Tết Hòa Bình',
        category: 'GIẢM GIÁ',
        price: '652,000 ₫',
        oldPrice: '750,000 ₫',
        featuredInPromo: true,
        image:
          'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  newYearPromo: {
    heading: 'Khuyến Mãi Đầu Năm',
    subtitle: 'Cơ hội để gia đình bạn sở hữu những set trà đạo & hộp quà bánh ngọt ưu đãi',
    countdown: {
      weeks: '22',
      days: '6',
      hours: '1',
      minutes: '55',
      seconds: '59',
    },
  },
  bentoGallery: {
    mainImage:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    gridImages: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    ],
  },
  comboOffer: {
    eyebrowPrefix: 'ƯU ĐÃI',
    eyebrowHighlight: 'GIẢM ĐẾN 30%',
    heading: 'COMBO QUÀ TẾT',
    ctaText: 'MUA NGAY',
    quotes: [
      '“ Chào đón năm mới, cùng trải nghiệm sản phẩm trà đạo & bánh ngọt tết độc đáo - Hưởng thụ niềm vui tuyệt vời cùng người thân yêu! ”',
      '“ Thành công đến từ chất lượng, hạnh phúc bắt đầu từ tách trà xuân ấm áp - Mua sắm ngay, trọn niềm vui xuân! ”',
    ],
    showcaseImage:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    badges: [
      { id: 'b-1', label: 'Khách hàng tin tưởng', tone: 'green' },
      { id: 'b-2', label: 'Sản phẩm chính hãng', tone: 'red' },
      { id: 'b-3', label: '% Vô vàn ưu đãi', tone: 'amber' },
    ],
  },
  footerPolicies: [
    'Chính sách đổi trả',
    'Chính sách bảo mật',
    'Chính sách vận chuyển',
    'Điều khoản dịch vụ',
  ],
}
