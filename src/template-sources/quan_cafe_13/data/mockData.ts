export interface GasacoWhyCard {
  number: string
  titleEn: string
  titleVi: string
  description: string
  bgColor: string
  iconType: 'thumbsUp' | 'gift' | 'palette' | 'dollar' | 'layers' | 'truck'
}

export interface GasacoCategoryBrand {
  id: string
  name: string
  subtitle: string
  accentColor: string
}

export interface GasacoBeverageProduct {
  id: string
  code: string
  name: string
  subBrand: string
  volume: string
  packaging: string
  price: string
  image: string
}

export interface GasacoNewsArticle {
  id: string
  title: string
  date: string
  excerpt: string
  image: string
}

export interface QuanCafe13TemplateData {
  business: {
    name: string
    established: string
    tagline: string
    annualCapacity: string
    phone: string[]
    email: string[]
    address: string
  }
  navigation: {
    label: string
    href: string
  }[]
  hero: {
    scriptLead: string
    mainTitle: string
    highlightBannerTop: string
    highlightBannerBottom: string
    description: string
    heroImage: string
    secondaryImage: string
  }
  whyChooseUs: {
    heading: string
    subtitle: string
    cards: GasacoWhyCard[]
  }
  categoryBrands: GasacoCategoryBrand[]
  productsSection: {
    heading: string
    searchPlaceholder: string
    items: GasacoBeverageProduct[]
  }
  newsSection: {
    heading: string
    items: GasacoNewsArticle[]
  }
}

export const quanCafe13MockData: QuanCafe13TemplateData = {
  business: {
    name: 'GASACO',
    established: 'Est. 1994',
    tagline: 'Thương Hiệu Chế Biến, Sản Xuất Đồ Uống & Giải Khát Nhiệt Đới Hàng Đầu Việt Nam',
    annualCapacity: '50.000.000+ SẢN PHẨM MỖI NĂM',
    phone: ['028 3899 1994', '0909 500 994'],
    email: ['export@gasaco.com.vn', 'info@gasacobeverage.vn'],
    address: 'Khu Công Nghiệp Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP.HCM',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'TẠI SAO CHỌN GASACO', href: '#why-choose-us' },
    { label: 'DANH MỤC THƯƠNG HIỆU', href: '#categories' },
    { label: 'LIST OF PRODUCTS', href: '#products' },
    { label: 'GIA CÔNG OEM/ODM', href: '#why-choose-us' },
    { label: 'TIN TỨC', href: '#news' },
  ],
  hero: {
    scriptLead: 'Try Vietnamese',
    mainTitle: 'Coconut Water & Tropical Drinks',
    highlightBannerTop: 'CHẾ BIẾN VÀ SẢN XUẤT ĐỒ UỐNG',
    highlightBannerBottom: '50.000.000+ SẢN PHẨM MỖI NĂM',
    description:
      'Từ năm 1994, GASACO tự hào mang hương vị trái cây nhiệt đới Việt Nam (Nước dừa tươi, Nước ép ổi Shi Shi, Sữa gạo Horchata OLÁ, Trà sữa Bubbi, Hạt chia & Nha đam) vươn tầm hơn 35 quốc gia trên thế giới.',
    heroImage:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
  },
  whyChooseUs: {
    heading: 'WHY CHOOSE US? • TẠI SAO CHỌN GASACO?',
    subtitle:
      'Giải pháp sản xuất đồ uống giải khát trọn gói chuẩn quốc tế HACCP, ISO 22000, FDA & HALAL',
    cards: [
      {
        number: '1',
        titleEn: 'HIGH QUALITY OEM-ODM SERVICES',
        titleVi: 'Dịch Vụ Gia Công OEM-ODM Chất Lượng Cao',
        description:
          'Hiện thực hóa ý tưởng đồ uống thương hiệu riêng của bạn với dây chuyền chiết rót tự động hiện đại và đội ngũ R&D giàu kinh nghiệm.',
        bgColor: '#22a54a',
        iconType: 'thumbsUp',
      },
      {
        number: '2',
        titleEn: 'FREE SAMPLE',
        titleVi: 'Miễn Phí Mẫu Thử Nghiệm Thức Uống',
        description:
          'Cung cấp mẫu thử hương vị hoàn toàn miễn phí để đối tác trực tiếp đánh giá chất lượng trước khi đưa vào sản xuất hàng loạt.',
        bgColor: '#c41e56',
        iconType: 'gift',
      },
      {
        number: '3',
        titleEn: 'FREE LABEL DESIGN',
        titleVi: 'Miễn Phí Thiết Kế Nhãn Mác & Bao Bì',
        description:
          'Đội ngũ sáng tạo hỗ trợ thiết kế bao bì lon nhôm, chai PET, chai thủy tinh bắt mắt, chuẩn quy định xuất khẩu quốc tế.',
        bgColor: '#5e2ca5',
        iconType: 'palette',
      },
      {
        number: '4',
        titleEn: 'COMPETITIVE PRICE',
        titleVi: 'Giá Thành Cạnh Tranh Trực Tiếp Nhà Máy',
        description:
          'Chủ động vùng nguyên liệu trái cây nhiệt đới Việt Nam và công suất 50 triệu sản phẩm/năm giúp tối ưu chi phí tốt nhất.',
        bgColor: '#e9722e',
        iconType: 'dollar',
      },
      {
        number: '5',
        titleEn: 'WIDE PRODUCT LINES',
        titleVi: 'Danh Mục Đồ Uống Đa Dạng 100+ Hương Vị',
        description:
          'Đầy đủ các dòng nước dừa tươi, nước ép trái cây, sữa gạo Horchata, trà sữa trân châu, nước hạt chia, hạt é và nha đam.',
        bgColor: '#0086a8',
        iconType: 'layers',
      },
      {
        number: '6',
        titleEn: 'SUPER FAST PRODUCTION & DELIVERY',
        titleVi: 'Sản Xuất & Giao Hàng Siêu Tốc Toàn Cầu',
        description:
          'Cam kết tiến độ sản xuất nhanh chóng và quy trình logistics chuyên nghiệp đến các chuỗi siêu thị, quán cafe & cảng quốc tế.',
        bgColor: '#1992d4',
        iconType: 'truck',
      },
    ],
  },
  categoryBrands: [
    { id: 'cat-all', name: 'Tất Cả', subtitle: 'All Beverages', accentColor: '#e1251b' },
    { id: 'cat-chia', name: 'Chia Seed', subtitle: 'Nước Trái Cây Hạt Chia', accentColor: '#16a34a' },
    { id: 'cat-bubbi', name: 'Bubbi', subtitle: 'Bubble Milk Tea', accentColor: '#7c3aed' },
    { id: 'cat-basil', name: 'Basil Seed', subtitle: 'Nước Giải Khát Hạt É', accentColor: '#ca8a04' },
    { id: 'cat-aloe', name: 'Aloe Vera', subtitle: 'Nước Nha Đam Tươi', accentColor: '#059669' },
    { id: 'cat-ola', name: 'OLÁ Horchata', subtitle: 'Rice Milk Series', accentColor: '#ea580c' },
  ],
  productsSection: {
    heading: 'List Of Products',
    searchPlaceholder: 'Search product / Tìm kiếm thức uống giải khát...',
    items: [
      {
        id: 'gp-1',
        code: '01',
        name: 'Nước Ép Dứa Dừa Nhiệt Đới Pina Colada',
        subBrand: 'Chia Seed',
        volume: '330ml Lon Cao',
        packaging: 'Thùng 24 lon',
        price: '285,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-2',
        code: '02',
        name: 'Sữa Gạo Quế Thảo Mộc OLÁ Horchata Rice Milk',
        subBrand: 'OLÁ Horchata',
        volume: '290ml Chai Thủy Tinh',
        packaging: 'Thùng 24 chai',
        price: '340,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-3',
        code: '03',
        name: 'Nước Trái Cây Hạt Chia Vị Dứa (Chia Seed - Pina Colada)',
        subBrand: 'Chia Seed',
        volume: '290ml Chai Thủy Tinh',
        packaging: 'Thùng 24 chai',
        price: '320,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-4',
        code: '04',
        name: 'Nước Dừa Tươi Nguyên Chất Vietnamese Coconut Water',
        subBrand: 'Aloe Vera',
        volume: '330ml Lon Nhôm',
        packaging: 'Thùng 24 lon',
        price: '295,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-5',
        code: '05',
        name: 'Trà Sữa Trân Châu Đường Đen Bubbi Milk Tea',
        subBrand: 'Bubbi',
        volume: '320ml Lon',
        packaging: 'Thùng 24 lon',
        price: '360,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-6',
        code: '06',
        name: 'Nước Ép Ổi Hồng Nhiệt Đới Shi Shi Guava',
        subBrand: 'Basil Seed',
        volume: '350ml Chai PET',
        packaging: 'Thùng 24 chai',
        price: '260,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-7',
        code: '07',
        name: 'Nước Nha Đam Mật Ong Tươi Mát Aloe Vera Drink',
        subBrand: 'Aloe Vera',
        volume: '500ml Chai PET',
        packaging: 'Thùng 24 chai',
        price: '310,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'gp-8',
        code: '08',
        name: 'Nước Xoài Hạt É Basil Seed Mango Tropical',
        subBrand: 'Basil Seed',
        volume: '290ml Chai Thủy Tinh',
        packaging: 'Thùng 24 chai',
        price: '315,000 ₫ / thùng',
        image:
          'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  newsSection: {
    heading: 'Tin Tức & Xu Hướng Đồ Uống Giải Khát',
    items: [
      {
        id: 'nw-1',
        title: "GASACO's Horchata Rice Milk: Thức uống sữa gạo thuần chay thơm ngon bổ dưỡng",
        date: '15 Tháng Tám, 2025',
        excerpt:
          'Bạn đang tìm kiếm một thức uống giải khát không chứa lactose vừa thơm béo vừa tốt cho sức khỏe? Dòng sữa gạo OLÁ Horchata của GASACO chính là lựa chọn hoàn hảo.',
        image:
          'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'nw-2',
        title: 'Thạch Dừa Nata de Coco & Nha Đam Giòn Sần Sật: Điểm Nhấn Cho Đồ Uống Hiện Đại',
        date: '22 Tháng Tám, 2025',
        excerpt:
          'Sự kết hợp giữa nước ép trái cây nhiệt đới nguyên chất cùng topping thạch dừa và nha đam tươi tạo nên trải nghiệm sảng khoái khó cưỡng.',
        image:
          'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'nw-3',
        title: 'Nước Dừa Tươi Đóng Lon Việt Nam Chinh Phục Hơn 35 Thị Trường Quốc Tế',
        date: '05 Tháng Chín, 2025',
        excerpt:
          'Nhờ nguồn dừa Bến Tre tuyển chọn và công nghệ tiệt trùng UHT hiện đại, GASACO giữ trọn vị ngọt thanh tự nhiên trong từng lon nước dừa.',
        image:
          'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
}
