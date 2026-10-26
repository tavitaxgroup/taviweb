export interface DojiPromoBanner {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bgClass: string;
  image: string;
}

export interface DojiProductItem {
  id: string;
  categoryLabel: string;
  name: string;
  code: string;
  price: string;
  oldPrice?: string;
  image: string;
  specTag: string;
}

export interface DojiNewsArticle {
  id: string;
  tab: 'promo' | 'jewelry';
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface DojiVideoItem {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  isFeatured?: boolean;
}

export interface StudioChupAnh11Data {
  business: {
    name: string;
    subName: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string[];
    address: string;
    distributionNote: string;
    copyright: string;
  };
  topUtilityLinks: string[];
  mainNav: {
    label: string;
    href: string;
  }[];
  hero: {
    scriptTitle: string;
    englishSub: string;
    collectionTitle: string;
    collectionHighlight: string;
    ctaText: string;
    couplePortrait: string;
    jewelryShowcaseImage: string;
  };
  promoBanners: DojiPromoBanner[];
  featuredProducts: {
    title: string;
    viewAllText: string;
    items: DojiProductItem[];
  };
  newsSection: {
    tab1Label: string;
    tab2Label: string;
    articles: DojiNewsArticle[];
  };
  videoSection: {
    title: string;
    videos: DojiVideoItem[];
  };
  aboutSection: {
    title: string;
    description: string;
    ctaText: string;
    backgroundImage: string;
  };
  newsletterBanner: {
    title: string;
    subtitle: string;
    placeholder: string;
  };
  footer: {
    aboutLinks: string[];
    categoryLinks: string[];
    certifications: string[];
  };
}

export const defaultStudioChupAnh11Data: StudioChupAnh11Data = {
  business: {
    name: 'DOJIBRIDAL',
    subName: 'MONA FINE JEWELRY & WEDDING FILM',
    tagline: 'Tuyệt Tác Trang Sức Kim Cương, Đá Màu & Phóng Sự Cưới Hoàng Gia',
    description:
      'DojiBridal kết hợp nghệ thuật chế tác kim cương kiểm định quốc tế GIA cùng dịch vụ quay chụp phóng sự cưới cao cấp, lưu giữ trọn vẹn khoảnh khắc thiêng liêng của đôi uyên ương.',
    phone: ['0126 922 0162', '1800 1168'],
    email: ['demonhunter@gmail.com', 'cskh@dojibridal.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    distributionNote: 'HỆ THỐNG 35 STUDIO & TRUNG TÂM VÀNG BẠC ĐÁ QUÝ TOÀN QUỐC',
    copyright: '© Bản quyền thuộc về DojiBridal Wedding & Jewelry. Thiết kế bởi Mona Media.',
  },
  topUtilityLinks: ['DojiBridal', 'Sản phẩm', 'Tin tức'],
  mainNav: [
    { label: 'GIỚI THIỆU', href: '#ve-chung-toi' },
    { label: 'KIM CƯƠNG VIÊN & Ổ', href: '#san-pham-noi-bat' },
    { label: 'TRANG SỨC KIM CƯƠNG', href: '#san-pham-noi-bat' },
    { label: 'ĐÁ MÀU RUBY', href: '#san-pham-noi-bat' },
    { label: 'NHẪN CƯỚI 99', href: '#san-pham-noi-bat' },
    { label: 'PHÓNG SỰ CƯỚI', href: '#video-phong-su' },
    { label: 'BỘ SƯU TẬP', href: '#tin-tuc' },
  ],
  hero: {
    scriptTitle: 'Khoảnh Khắc Vĩnh Cửu',
    englishSub: 'Happy Wedding Day • Bridal & Ruby Collection',
    collectionTitle: 'GIỚI THIỆU BST TRANG SỨC VÀNG GẮN ĐÁ RUBY & PHÓNG SỰ CƯỚI',
    collectionHighlight: 'VÒNG TAY YÊU THƯƠNG',
    ctaText: 'XEM THÊM',
    couplePortrait:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    jewelryShowcaseImage:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85',
  },
  promoBanners: [
    {
      id: 'promo-1',
      eyebrow: '99 WEDDING RINGS',
      title: 'INFINITY LOVE • TÌNH YÊU VĨNH CỬU',
      subtitle: 'Nhẫn cưới vàng 18K & Bạch kim đính kim cương tự nhiên',
      bgClass: 'from-[#6b3fa0] via-[#4a267a] to-[#2c1252]',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'promo-2',
      eyebrow: 'DIAMOND HOUSE',
      title: 'KIM CƯƠNG VIÊN KIỂM ĐỊNH QUỐC TẾ',
      subtitle: 'Giác cắt 8 trái tim & 8 mũi tên hoàn hảo cho lễ cầu hôn',
      bgClass: 'from-[#1a3a6c] via-[#0e2247] to-[#061126]',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'promo-3',
      eyebrow: 'GEMS CITY',
      title: 'KHÁM PHÁ SẮC MÀU TRANG SỨC CƯỚI',
      subtitle: 'Bộ trang sức Ruby, Sapphire & Ngọc lục bảo sang trọng',
      bgClass: 'from-[#8f1822] via-[#660d15] to-[#3d060b]',
      image:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
    },
  ],
  featuredProducts: {
    title: 'SẢN PHẨM NỔI BẬT',
    viewAllText: 'Xem tất cả',
    items: [
      {
        id: 'dj-1',
        categoryLabel: 'MẶT DÂY KIM CƯƠNG',
        name: 'Mặt dây chuyền Kim Cương Vàng trắng 14K AFPM000090D2DA1',
        code: 'AFPM000090D2DA1',
        price: '40,526,000 ₫',
        image:
          'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80',
        specTag: 'Vàng trắng 14K • Kim cương GIA',
      },
      {
        id: 'dj-2',
        categoryLabel: 'MẶT DÂY CƯỚI RUBY',
        name: 'Mặt dây chuyền Vàng trắng 14K gắn đá Ruby & Kim cương AFPM700092D2DA1',
        code: 'AFPM700092D2DA1',
        price: '62,803,000 ₫',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
        specTag: 'Ruby huyết bồ câu • 14K',
      },
      {
        id: 'dj-3',
        categoryLabel: 'HOA TAI CÔ DÂU',
        name: 'Hoa tai Kim Cương Vàng trắng 18K Hoa Tuyết AFEW000108D2DA1',
        code: 'AFEW000108D2DA1',
        price: '28,600,000 ₫',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
        specTag: 'Vàng 18K • Bắt sáng Studio',
      },
      {
        id: 'dj-4',
        categoryLabel: 'KIM CƯƠNG VIÊN GIA',
        name: 'Kim cương viên tự nhiên 4.5ly Nước D Độ tinh khiết VVS1 Kiểm định GIA',
        code: 'GIA-45D-VVS1',
        price: '125,000,000 ₫',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
        specTag: 'Giác cắt Excellent 3EX',
      },
      {
        id: 'dj-5',
        categoryLabel: 'CHARM VÀNG 24K',
        name: 'Hạt Charm Vàng 24K Kim Bảo Phúc Vuông Thịnh Vượng BC24K-091',
        code: 'BC24K-091',
        price: '3,980,000 ₫',
        image:
          'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80',
        specTag: 'Vàng 999.9 • Quà mừng cưới',
      },
      {
        id: 'dj-6',
        categoryLabel: 'KIỀNG CƯỚI VÀNG 24K',
        name: 'Vòng Charm Vàng 24K Phượng Hoàng Vũ Điệu Uyên Ương VC24K-882',
        code: 'VC24K-882',
        price: '19,450,000 ₫',
        image:
          'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
        specTag: 'Chế tác 3D công nghệ Ý',
      },
      {
        id: 'dj-7',
        categoryLabel: 'NHẪN ĐÁ MÀU RUBY',
        name: 'Nhẫn nữ Vàng 18K gắn đá Ruby thiên nhiên & Kim cương tấm NRB-401',
        code: 'NRB-401',
        price: '24,800,000 ₫',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
        specTag: 'Ruby tự nhiên kiểm định',
      },
      {
        id: 'dj-8',
        categoryLabel: 'NHẪN CẦU HÔN',
        name: 'Ổ nhẫn Kim Cương Solitaire Vàng trắng 18K Vương Miện Nữ Hoàng ON-502',
        code: 'ON-502',
        price: '34,200,000 ₫',
        image:
          'https://images.unsplash.com/photo-1598560917505-59a3655c1592?auto=format&fit=crop&w=600&q=80',
        specTag: 'Tặng gói chụp lễ cầu hôn',
      },
      {
        id: 'dj-9',
        categoryLabel: 'NHẪN CƯỚI INFINITY',
        name: 'Nhẫn cưới đôi Vàng hồng 18K đính Kim cương Eternal Love NC-990',
        code: 'NC-990',
        price: '21,900,000 ₫',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
        specTag: 'Bảo hành khắc tên trọn đời',
      },
      {
        id: 'dj-10',
        categoryLabel: 'BỘ TRANG SỨC CÔ DÂU',
        name: 'Dây chuyền & Hoa tai Kim Cương Vàng trắng 18K Ánh Sao Đêm BTS-772',
        code: 'BTS-772',
        price: '76,500,000 ₫',
        image:
          'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
        specTag: 'Tặng album phóng sự cưới',
      },
    ],
  },
  newsSection: {
    tab1Label: 'TIN KHUYẾN MÃI',
    tab2Label: 'TIN TRANG SỨC & CƯỚI',
    articles: [
      {
        id: 'news-1',
        tab: 'promo',
        title: 'Ưu đãi mùa cưới: Tặng gói quay Phóng Sự Cưới 4K khi mua cặp nhẫn cưới Kim Cương',
        date: '20/10/2026',
        excerpt:
          'Dành riêng cho các cặp đôi chuẩn bị bước vào lễ đường mùa thu đông năm nay, DojiBridal dành tặng gói quay phóng sự ngày cưới chuẩn điện ảnh cùng ưu đãi 15% trang sức cô dâu...',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'news-2',
        tab: 'promo',
        title: 'Bí quyết chọn trang sức đá màu Ruby & Kim cương tôn vinh làn da cô dâu Á Đông',
        date: '15/10/2026',
        excerpt:
          'Sắc đỏ nồng nàn của đá quý Ruby kết hợp cùng ánh lửa rực rỡ của kim cương tự nhiên không chỉ mang ý nghĩa may mắn viên mãn mà còn nổi bật tuyệt đối trong từng khung hình cưới...',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'news-3',
        tab: 'promo',
        title: 'Xu hướng nhẫn cưới vàng hồng 18K kết hợp kim cương tấm lên ngôi mùa cưới 2026',
        date: '08/10/2026',
        excerpt:
          'Không còn bó buộc trong những thiết kế trơn truyền thống, các cặp đôi hiện đại ưu tiên dòng nhẫn cưới Infinity Love ghép đôi tinh xảo với viên kim cương chủ mang thông điệp vĩnh cửu...',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  videoSection: {
    title: 'VIDEO PHÓNG SỰ CƯỚI & BỘ SƯU TẬP',
    videos: [
      {
        id: 'vid-1',
        title: '[Official] You Are My Diamond - Phim Ngắn Cầu Hôn & Phóng Sự Cưới DojiBridal',
        duration: '04:18',
        views: '128.400 lượt xem',
        thumbnail:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
        isFeatured: true,
      },
      {
        id: 'vid-2',
        title: 'Bộ Sưu Tập Kim Bảo Phúc - Quà Mừng Cưới Vàng 24K Sang Trọng Cho Ngày Vu Quy',
        duration: '02:45',
        views: '54.200 lượt xem',
        thumbnail:
          'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'vid-3',
        title: 'Hậu Trường Chụp Lookbook Trang Sức Kim Cương & Váy Cưới Hoàng Gia Tại Studio',
        duration: '03:12',
        views: '41.900 lượt xem',
        thumbnail:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  aboutSection: {
    title: 'VỀ TRANG SỨC DOJIBRIDAL',
    description:
      'Tự hào là thương hiệu tiên phong kết hợp giữa Trung tâm Kim hoàn Cao cấp và Studio Phóng sự cưới Nghệ thuật, DojiBridal mang đến trải nghiệm trọn gói cho ngày trọng đại. Từng viên kim cương GIA và đá quý thiên nhiên đều được tuyển chọn khắt khe, đồng hành cùng ekip nhiếp ảnh gia hàng đầu để ghi lại dấu ấn hạnh phúc vĩnh cửu.',
    ctaText: 'CHI TIẾT',
    backgroundImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80',
  },
  newsletterBanner: {
    title: 'ĐĂNG KÝ NHẬN BẢN TIN ƯU ĐÃI CƯỚI',
    subtitle: 'Nhận ngay каталог Nhẫn Cưới 99 & Voucher giảm 5.000.000₫ gói Phóng Sự Cưới',
    placeholder: 'Nhập địa chỉ email của bạn...',
  },
  footer: {
    aboutLinks: [
      'Giới thiệu DojiBridal',
      'Hệ thống 35 Showroom & Studio',
      'Chính sách thu đổi kim cương trọn đời',
      'Bảng giá gói chụp Phóng sự cưới',
      'Tuyển dụng Chuyên viên tư vấn',
    ],
    categoryLinks: [
      'Kim cương viên kiểm định GIA',
      'Trang sức Kim cương 18K',
      'Trang sức đá màu Ruby & Sapphire',
      'Nhẫn cưới Infinity Love 99',
      'Quà mừng cưới Kim Bảo Phúc 24K',
    ],
    certifications: ['ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG', 'KIỂM ĐỊNH QUỐC TẾ GIA', 'BẢO HÀNH TRỌN ĐỜI'],
  },
};
