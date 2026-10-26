export interface HeroSplitColumn {
  id: string
  title: string
  subtitle: string
  image: string
}

export interface FeaturedArrivalItem {
  id: string
  title: string
  price: string
  oldPrice?: string
  image: string
  featured?: boolean
}

export interface SalonProductItem {
  id: string
  name: string
  category: 'Nữ' | 'Nam' | 'Trẻ em' | 'Phụ kiện'
  price: string
  oldPrice?: string
  sale?: boolean
  outOfStock?: boolean
  image: string
}

export interface ServiceTrustItem {
  id: string
  title: string
  subtitle: string
}

export interface TestimonialQuote {
  id: string
  quote: string
  author: string
  role: string
  rating: number
}

export interface EditorialNewsItem {
  id: string
  category: string
  date: string
  title: string
  image: string
}

export interface BrandEmblemItem {
  id: string
  name: string
  subtitle: string
}

export interface SalonToc9TemplateData {
  business: {
    name: string
    tagline: string
    phone: string
    email: string
    address: string
    hashtag: string
  }
  navigation: {
    label: string
    href: string
  }[]
  heroColumns: HeroSplitColumn[]
  newArrivals: {
    heading: string
    subtitle: string
    items: FeaturedArrivalItem[]
  }
  videoBanner: {
    heading: string
    subtitle: string
    image: string
  }
  productsSection: {
    heading: string
    categories: ('Nữ' | 'Nam' | 'Trẻ em' | 'Phụ kiện')[]
    items: SalonProductItem[]
  }
  trustBoxes: ServiceTrustItem[]
  testimonials: TestimonialQuote[]
  newsSection: {
    heading: string
    subtitle: string
    items: EditorialNewsItem[]
  }
  brandEmblems: BrandEmblemItem[]
  instagramStrip: string[]
}

export const salonToc9MockData: SalonToc9TemplateData = {
  business: {
    name: 'SPARKLE STYLE',
    tagline: 'Salon Tạo Mẫu Tóc & Chăm Sóc Sắc Đẹp Cao Cấp',
    phone: '0909 789 456',
    email: 'booking@sparklestyle.vn',
    address: '1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM',
    hashtag: '#SparkleStyle',
  },
  navigation: [
    { label: 'GIỚI THIỆU', href: '#about' },
    { label: 'CỬA HÀNG', href: '#products' },
    { label: 'XU HƯỚNG', href: '#arrivals' },
    { label: 'LIÊN HỆ', href: '#footer' },
  ],
  heroColumns: [
    {
      id: 'col-1',
      title: 'TÓC TRẺ EM',
      subtitle: 'Tạo kiểu nhẹ nhàng & an toàn cho bé',
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'col-2',
      title: 'TẠO KIỂU NAM',
      subtitle: 'Lịch lãm, chuẩn phom & nam tính',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'col-3',
      title: 'TẠO KIỂU NỮ',
      subtitle: 'Thời thượng, thanh lịch & cuốn hút',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'col-4',
      title: 'DƯỠNG TÓC & SPA',
      subtitle: 'Phục hồi chuyên sâu chuẩn salon',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    },
  ],
  newArrivals: {
    heading: 'ĐIỂM ĐẾN MỚI',
    subtitle: 'Được chúng tôi chọn lọc kỹ càng',
    items: [
      {
        id: 'arr-1',
        title: 'COMBO UỐN SÓNG LƠI & PHỤC HỒI KERATIN',
        price: '700,000₫',
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'arr-2',
        title: 'NHUỘM BALAYAGE TỰ NHIÊN & DƯỠNG COLLAGEN',
        price: '1,250,000₫',
        oldPrice: '1,550,000₫',
        featured: true,
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
      },
      {
        id: 'arr-3',
        title: 'CẮT TẠO KIỂU LAYER HÀN QUỐC CAO CẤP',
        price: '450,000₫',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  videoBanner: {
    heading: 'TẠO MẪU TÓC & THỜI TRANG NỮ',
    subtitle: 'Khám phá hậu trường sáng tạo các bộ sưu tập mẫu tóc thanh lịch chuẩn mực mới',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80',
  },
  productsSection: {
    heading: 'SẢN PHẨM MỚI',
    categories: ['Nữ', 'Nam', 'Trẻ em', 'Phụ kiện'],
    items: [
      {
        id: 'p-1',
        name: 'TINH DẦU DƯỠNG TÓC MOROCCANOIL TREATMENT',
        category: 'Nữ',
        price: '280,000₫',
        oldPrice: '320,000₫',
        sale: true,
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-2',
        name: 'BỘ DẦU GỘI XẢ PHỤC HỒI OLAPLEX NO.4 & NO.5',
        category: 'Nữ',
        price: '660,000₫',
        oldPrice: '710,000₫',
        sale: true,
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-3',
        name: 'MẶT NẠ Ủ TÓC COLLAGEN THẢO MỘC HỮU CƠ',
        category: 'Nữ',
        price: '360,000₫',
        oldPrice: '420,000₫',
        sale: true,
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-4',
        name: 'HUYẾT THANH DƯỠNG BÓNG TÓC KERASTASE ELIXIR',
        category: 'Nữ',
        price: '540,000₫',
        outOfStock: true,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-5',
        name: 'XỊT DƯỠNG BẢO VỆ NHIỆT KHI TẠO KIỂU TÓC',
        category: 'Nữ',
        price: '250,000₫',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-6',
        name: 'KEM TẠO KIỂU GIỮ NẾP SÓNG LƠI MỀM MƯỢT',
        category: 'Nữ',
        price: '500,000₫',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-7',
        name: 'TINH CHẤT KÍCH THÍCH MỌC TÓC BƯỞI & BIOTIN',
        category: 'Nữ',
        price: '700,000₫',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-8',
        name: 'BỘ CHĂM SÓC TÓC NHUỘM CHỐNG PHAI MÀU DAVINES',
        category: 'Nữ',
        price: '540,000₫',
        oldPrice: '590,000₫',
        sale: true,
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-9',
        name: 'SÁP VUỐT TÓC NAM MOROCCAN CLAY MỜ TỰ NHIÊN',
        category: 'Nam',
        price: '390,000₫',
        oldPrice: '450,000₫',
        sale: true,
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-10',
        name: 'GỘI XẢ DỊU NHẸ HỮU CƠ CHO BÉ KHÔNG CAY MẮT',
        category: 'Trẻ em',
        price: '290,000₫',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'p-11',
        name: 'LƯỢC GỖ ĐÀN HƯƠNG CHỐNG RỐI & MASSAGE ĐẦU',
        category: 'Phụ kiện',
        price: '320,000₫',
        oldPrice: '380,000₫',
        sale: true,
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  trustBoxes: [
    {
      id: 'tb-1',
      title: 'TỐT NHẤT',
      subtitle: 'Chính hãng 100%',
    },
    {
      id: 'tb-2',
      title: 'MIỄN PHÍ SHIP',
      subtitle: 'Giao hàng toàn quốc',
    },
    {
      id: 'tb-3',
      title: 'HỖ TRỢ ONLINE',
      subtitle: 'Hỗ trợ 24/7',
    },
    {
      id: 'tb-4',
      title: 'AN TOÀN',
      subtitle: 'Thanh toán an toàn',
    },
  ],
  testimonials: [
    {
      id: 'tm-1',
      quote:
        '“Tôi đánh giá cao sự đa dạng và phong phú của bộ sưu tập trên website. Có nhiều lựa chọn cho mọi phong cách và kiểu dáng đa dạng, từ kiểu tóc hàng ngày đến tạo kiểu dự tiệc. Các sản phẩm và dịch vụ đều đáp ứng đúng như mô tả và chất lượng đáng tin cậy.”',
      author: 'TRẦN THÀNH CÔNG',
      role: 'Khách hàng',
      rating: 5,
    },
    {
      id: 'tm-2',
      quote:
        '“Không gian tại Sparkle Style thực sự tinh tế và thư giãn. Đội ngũ stylist tư vấn rất có tâm, giúp mình chọn được kiểu tóc layer và màu nhuộm tôn da hoàn hảo mà tóc vẫn mềm mượt tự nhiên.”',
      author: 'NGUYỄN MINH THƯ',
      role: 'Khách hàng thân thiết',
      rating: 5,
    },
  ],
  newsSection: {
    heading: 'TIN TỨC NỔI BẬT',
    subtitle: 'Thông tin đa dạng và chính xác về các sự kiện, xu hướng và thông tin nóng hổi trong nhiều lĩnh vực',
    items: [
      {
        id: 'news-1',
        category: 'XU HƯỚNG',
        date: '17 THÁNG CHÍN, 2025',
        title: 'XU HƯỚNG TÓC & PHONG CÁCH THU ĐÔNG: NÉT ĐẸP TỐI GIẢN LÊN NGÔI',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'news-2',
        category: 'CHĂM SÓC TÓC',
        date: '17 THÁNG CHÍN, 2025',
        title: 'BÍ QUYẾT GIỮ NẾP TÓC UỐN SÓNG LƠI BỒNG BỀNH SUỐT CẢ NGÀY DÀI',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'news-3',
        category: 'PHONG CÁCH',
        date: '17 THÁNG CHÍN, 2025',
        title: 'TOP 5 MÀU NHUỘM TÔN DA KHÔNG CẦN TẨY ĐƯỢC YÊU THÍCH NHẤT NĂM',
        image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  brandEmblems: [
    { id: 'be-1', name: 'Chic Vlogger', subtitle: 'HAIR STUDIO' },
    { id: 'be-2', name: 'B BRAND', subtitle: 'LUXURY SALON' },
    { id: 'be-3', name: 'Catherine', subtitle: 'ORGANIC CARE' },
    { id: 'be-4', name: 'M. Studio', subtitle: 'COIFFURE PARIS' },
    { id: 'be-5', name: 'M BRAND', subtitle: 'BOTANICAL SPA' },
    { id: 'be-6', name: 'Beauty', subtitle: 'ATELIER' },
  ],
  instagramStrip: [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80',
  ],
}
