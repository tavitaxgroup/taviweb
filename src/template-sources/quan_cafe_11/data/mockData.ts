export interface KonekoProductItem {
  id: string
  name: string
  category: 'THỨC ĂN' | 'THỰC PHẨM' | 'ĐỒ CHƠI'
  price: string
  image: string
}

export interface KonekoTestimonialItem {
  id: string
  name: string
  quote: string
  avatar: string
}

export interface KonekoBlogPost {
  id: string
  badge: string
  title: string
  date: string
  excerpt: string
  image: string
}

export interface QuanCafe11TemplateData {
  business: {
    name: string
    brandSubtext: string
    hours: string
    phone: string[]
    email: string[]
    address: string
  }
  navigation: {
    label: string
    href: string
  }[]
  hero: {
    title: string
    subtitle: string
    bgImage: string
    topFeatureCard: {
      title: string
      excerpt: string
      image: string
    }
    bottomFeatureCard: {
      title: string
      excerpt: string
      sideImage: string
    }
  }
  categoryTiles: {
    id: string
    title: string
    ctaText: string
    tone: 'peach' | 'orange' | 'coral'
    illustrationType: 'yarn' | 'bed' | 'bowl' | 'tray'
  }[]
  featuredProducts: KonekoProductItem[]
  categoryProducts: KonekoProductItem[]
  promoBanners: {
    id: string
    discount: string
    subtitle: string
    buttonText: string
    image: string
  }[]
  newProducts: KonekoProductItem[]
  testimonials: KonekoTestimonialItem[]
  blogPosts: KonekoBlogPost[]
  galleryMosaic: string[]
}

export const quanCafe11MockData: QuanCafe11TemplateData = {
  business: {
    name: 'MONA',
    brandSubtext: 'Pet Palace • Koneko Cafe',
    hours: 'T2: 09:00 - 17:00 | T3 - CN: 09:00 - 22:00',
    phone: ['0313728397', '0909 555 888'],
    email: ['info@themona.global', 'hello@konekocafe.vn'],
    address: '1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'TIN TỨC', href: '#news' },
    { label: 'SẢN PHẨM', href: '#featured' },
    { label: 'GIỚI THIỆU', href: '#categories' },
    { label: 'VIỆC LÀM', href: '#news' },
    { label: 'LIÊN HỆ', href: '#footer' },
  ],
  hero: {
    title: 'THỨC ĂN &\nĐỒ DÙNG',
    subtitle:
      'MANG ĐẾN KHÔNG GIAN CÀ PHÊ THÚ CƯNG, BÁNH NGỌT VÀ DỊCH VỤ TỐT NHẤT CHO THÚ CƯNG CỦA BẠN',
    bgImage:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1400&q=80',
    topFeatureCard: {
      title: 'Giữ cho thú cưng của bạn an toàn khỏi bệnh tật',
      excerpt: 'Bạn có nuôi thú cưng của mình trong mùa lễ này không? Dưới đây là những lưu ý dinh dưỡng & chăm sóc tại Koneko Cafe [...]',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80',
    },
    bottomFeatureCard: {
      title: 'MẸO CHO MÈO HOẶC CHÓ CỦA BẠN LÊN MÁY BAY & ĐI CAFE',
      excerpt: 'Bạn có nuôi thú cưng của mình trong mùa lễ này không? Dưới đây là bí quyết giúp các bé luôn thoải mái [...]',
      sideImage:
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
    },
  },
  categoryTiles: [
    {
      id: 'ct-1',
      title: 'ĐỒ CHƠI',
      ctaText: 'XEM THÊM',
      tone: 'peach',
      illustrationType: 'yarn',
    },
    {
      id: 'ct-2',
      title: 'PHỤ KIỆN',
      ctaText: 'XEM THÊM',
      tone: 'orange',
      illustrationType: 'bed',
    },
    {
      id: 'ct-3',
      title: 'THỰC PHẨM',
      ctaText: 'XEM THÊM',
      tone: 'orange',
      illustrationType: 'bowl',
    },
    {
      id: 'ct-4',
      title: 'DỤNG CỤ',
      ctaText: 'XEM THÊM',
      tone: 'coral',
      illustrationType: 'tray',
    },
  ],
  featuredProducts: [
    {
      id: 'fp-1',
      name: 'Đồ ăn cho mèo & Bánh quy thưởng',
      category: 'THỨC ĂN',
      price: '599,000₫',
      image:
        'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'fp-2',
      name: 'Đồ ăn khô dinh dưỡng hữu cơ',
      category: 'THỨC ĂN',
      price: '799,000₫',
      image:
        'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'fp-3',
      name: 'Đồ ăn khô 01 & Set thưởng trà bánh',
      category: 'THỨC ĂN',
      price: '750,000₫',
      image:
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80',
    },
  ],
  categoryProducts: [
    {
      id: 'cp-1',
      name: 'Đồ chơi tháp bóng cho mèo',
      category: 'ĐỒ CHƠI',
      price: '900,000₫',
      image:
        'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'cp-2',
      name: 'Cần câu lông vũ đồ chơi',
      category: 'ĐỒ CHƠI',
      price: '800,000₫',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'cp-3',
      name: 'Đồ chơi 02 – Cây lăn bụi chăm sóc lông',
      category: 'ĐỒ CHƠI',
      price: '600,000₫',
      image:
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80',
    },
  ],
  promoBanners: [
    {
      id: 'pb-1',
      discount: '50% OFF',
      subtitle: 'PET SUPPLIES & CAFE COMBO',
      buttonText: 'THỨC ĂN CHO MÈO',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pb-2',
      discount: '25% OFF',
      subtitle: 'SAVE MONEY',
      buttonText: 'ĐỒ DÙNG CHO MÈO',
      image:
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    },
  ],
  newProducts: [
    {
      id: 'np-1',
      name: 'Đồ ăn cho mèo vị cá hồi nướng',
      category: 'THỨC ĂN',
      price: '599,000₫',
      image:
        'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'np-2',
      name: 'Đồ ăn khô cao cấp Koneko',
      category: 'THỨC ĂN',
      price: '799,000₫',
      image:
        'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'np-3',
      name: 'Đồ ăn khô 01 & Bánh quy chân mèo',
      category: 'THỨC ĂN',
      price: '750,000₫',
      image:
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80',
    },
  ],
  testimonials: [
    {
      id: 'tm-1',
      name: '– Anh Huy –',
      quote:
        'Dịch vụ chăm sóc thú cưng và không gian cà phê bánh ngọt tuyệt vời, bên cạnh đó còn có nhiều đồ chơi cho thú cưng rất dễ thương. Shop gói hàng kỹ, còn giao hàng nhanh nữa.',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'tm-2',
      name: '– Anh Linh –',
      quote:
        'Sản phẩm chất lượng, uy tín cho thú cưng. Chủ quán tư vấn nhiệt tình các loại thức ăn và bánh thưởng phù hợp cho bé mèo của mình. Giao hàng nhanh nữa!',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'tm-3',
      name: '– Anh Tùng –',
      quote:
        'Quán có nhiều món đồ chơi cho Mèo rất thú vị, đồ uống ngon và tư vấn nhiệt tình cách lựa chọn vitamin cho thú cưng của mình.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
  ],
  blogPosts: [
    {
      id: 'bl-1',
      badge: 'VIỆC LÀM',
      title: 'Tuyển dụng nhân viên bán hàng & Barista tại Mona Pet Palace',
      date: '2 Tháng Sáu, 2025',
      excerpt: 'Tuyển dụng nhân viên bán hàng & pha chế yêu thú cưng tại Mona Pet Palace [...]',
      image:
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'bl-2',
      badge: 'VIỆC LÀM',
      title: 'Tuyển dụng việc làm full-time chăm sóc mèo tại Koneko Cafe',
      date: '2 Tháng Sáu, 2025',
      excerpt: 'Mona Pet Palace thành lập từ năm 2017 với phương châm đem đến nhiều giá trị [...]',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'bl-3',
      badge: 'TIN TỨC',
      title: 'Mẹo nhận biết sức khỏe cho Mèo nhà bạn luôn năng động',
      date: '20 Tháng Tư, 2025',
      excerpt: 'Bạn có nuôi thú cưng của mình trong mùa lễ này không? Dưới đây là [...]',
      image:
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'bl-4',
      badge: 'TIN TỨC',
      title: 'Giữ cho thú cưng của bạn an toàn khỏi bệnh tật giao mùa',
      date: '20 Tháng Tư, 2025',
      excerpt: 'Bạn có nuôi thú cưng của mình trong mùa lễ này không? Dưới đây là [...]',
      image:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80',
    },
  ],
  galleryMosaic: [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=500&q=80',
  ],
}
