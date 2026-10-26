export interface KaroPromoTile {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface KaroProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  image: string;
  specs: string;
}

export interface KaroTestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface KaroLookbookNews {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface StudioChupAnh13Data {
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
    poeticDescription: string;
    ctaText: string;
    portraitImage: string;
  };
  promoTiles: KaroPromoTile[];
  newCollectionSection: {
    title: string;
    row1Products: KaroProductItem[];
    row1Banner: {
      eyebrow: string;
      title: string;
      subtitle: string;
      image: string;
    };
    row2Banner: {
      eyebrow: string;
      title: string;
      subtitle: string;
      image: string;
    };
    row2Products: KaroProductItem[];
  };
  trustAndStorySection: {
    badges: {
      title: string;
      description: string;
    }[];
    storyEyebrow: string;
    storyTitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    ctaText: string;
    backgroundImage: string;
  };
  testimonialsSection: {
    title: string;
    backgroundImage: string;
    items: KaroTestimonialItem[];
  };
  bestSellingSection: {
    title: string;
    items: KaroProductItem[];
  };
  newsSection: {
    title: string;
    posts: KaroLookbookNews[];
  };
  footer: {
    socialLabel: string;
    newsletterLabel: string;
    newsletterNote: string;
    placeholder: string;
  };
}

export const defaultStudioChupAnh13Data: StudioChupAnh13Data = {
  business: {
    name: 'KARO STUDIO',
    subName: 'MONA LUXURY LOOKBOOK & JEWELRY',
    tagline: 'Nhiếp Ảnh Thời Trang Noir Fine Art & Trang Sức Cưới Độc Bản',
    description:
      'Karo Studio khắc họa thần thái kiêu hãnh của người phụ nữ hiện đại qua những bộ ảnh Lookbook đen trắng đầy nghệ thuật và trang sức kim cương, ngọc trai chế tác thủ công.',
    phone: ['076 922 0162', '0909 551 920'],
    email: ['demonhunterg@gmail.com', 'booking@karostudio.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    workingHours: '08:00 - 17:00 (Thứ 2 - Chủ Nhật)',
    copyright: '© Bản quyền thuộc về Karo Studio Luxury Lookbook. Thiết kế bởi Mona Media.',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#trang-chu' },
    { label: 'DÂY CHUYỀN', href: '#bo-suu-tap-moi' },
    { label: 'BÔNG TAI', href: '#bo-suu-tap-moi' },
    { label: 'LẮC TAY', href: '#san-pham-mua-nhieu' },
    { label: 'NHẪN BẠC & KIM CƯƠNG', href: '#san-pham-mua-nhieu' },
    { label: 'GIỚI THIỆU', href: '#ve-karo-studio' },
    { label: 'TIN TỨC', href: '#tin-tuc' },
  ],
  hero: {
    eyebrow: 'KARO STUDIO • FINE ART PORTRAIT & JEWELRY',
    title: 'SINH RA CHO PHỤ NỮ',
    poeticDescription:
      'Người con gái nào cũng mong mỏi mỗi ngày yêu đều là phút ngọt ngào ban đầu. Hãy để từng giác cắt trang sức lấp lánh và ống kính nghệ thuật tại Karo Studio lưu giữ vẻ đẹp kiêu sa, quyến rũ nhất của riêng bạn.',
    ctaText: 'MUA NGAY',
    portraitImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85',
  },
  promoTiles: [
    {
      id: 'tile-1',
      eyebrow: 'THIẾT KẾ ĐỘC BẢN',
      title: 'Trang Sức Cưới Từ 4.300.000₫',
      subtitle: 'Tặng kèm 01 concept chụp Lookbook Studio',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'tile-2',
      eyebrow: 'ƯU ĐÃI LÊN ĐẾN 50%',
      title: 'Bộ Sưu Tập Đồng Hồ & Trang Sức',
      subtitle: 'Phong cách Noir sang trọng cho tiệc tối',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'tile-3',
      eyebrow: 'ƯU ĐÃI ĐẶC QUYỀN 20%',
      title: 'Nhẫn Kim Cương Cô Dâu',
      subtitle: 'Chứng nhận kiểm định quốc tế GIA',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
    },
  ],
  newCollectionSection: {
    title: 'BỘ SƯU TẬP MỚI',
    row1Products: [
      {
        id: 'kc-1',
        name: 'Vòng cổ tím huyền bí Amethyst Hoàng Gia',
        category: 'Dây Chuyền Nghệ Thuật',
        price: '3,250,000 ₫',
        oldPrice: '5,000,000 ₫',
        badge: '-35%',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
        specs: 'Đá Amethyst thiên nhiên • Bạc Ý mạ Bạch Kim',
      },
      {
        id: 'kc-2',
        name: 'Dây chuyền trái tim đại dương Sapphire',
        category: 'Dây Chuyền Cô Dâu',
        price: '3,500,000 ₫',
        oldPrice: '5,000,000 ₫',
        badge: '-30%',
        image:
          'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
        specs: 'Viên chủ Sapphire xanh thẫm • Rất ăn ảnh Studio',
      },
    ],
    row1Banner: {
      eyebrow: 'TUYỆT TÁC NGỌC TRAI',
      title: 'Nhẫn Ngọc Trai Nam Hải',
      subtitle: 'Sự giao thoa giữa nét cổ điển quý phái và ánh sáng nhiếp ảnh đương đại',
      image:
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85',
    },
    row2Banner: {
      eyebrow: 'LOOKBOOK CHÂN DUNG NOIR',
      title: 'Bông Tai Nghệ Thuật',
      subtitle: 'Tôn vinh đường nét gương mặt thanh tú dưới ánh đèn Studio tương phản cao',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    },
    row2Products: [
      {
        id: 'kc-3',
        name: 'BÔNG TAI VÀNG HỒNG 18K ĐÍNH ĐÁ RUBY',
        category: 'Bông Tai Dự Tiệc',
        price: '4,290,000 ₫',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        specs: 'Vàng hồng 18K • Thiết kế giọt nước kiêu sa',
      },
      {
        id: 'kc-4',
        name: 'NHẪN KIM CƯƠNG VÀNG 18K ÁNH SAO ĐÊM',
        category: 'Nhẫn Cầu Hôn',
        price: '9,000,000 ₫',
        oldPrice: '9,900,000 ₫',
        badge: '-9%',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
        specs: 'Đính kim cương tự nhiên • Khắc tên miễn phí',
      },
    ],
  },
  trustAndStorySection: {
    badges: [
      {
        title: 'ĐẠT CHUẨN',
        description: 'Đầy đủ chứng nhận chất lượng đá quý & kim cương quốc tế',
      },
      {
        title: 'CHẤT LƯỢNG',
        description: 'Cam kết chuẩn xác trọng lượng và hàm lượng kim loại quý',
      },
      {
        title: 'CAM KẾT',
        description: 'Chính sách thu mua và nâng cấp trang sức trọn đời',
      },
      {
        title: 'MIỄN PHÍ',
        description: 'Làm sạch siêu âm & chỉnh sửa ảnh Lookbook trọn đời',
      },
    ],
    storyEyebrow: 'Về chúng tôi',
    storyTitle: 'KARO STUDIO',
    storyParagraph1:
      'Câu chuyện của Karo Studio bắt nguồn từ những thấu hiểu, cảm thông sâu sắc với phái đẹp trong cuộc sống hiện đại. Chúng tôi tin rằng mỗi người phụ nữ đều mang một khí chất điện ảnh riêng biệt xứng đáng được tôn vinh.',
    storyParagraph2:
      'Tại không gian Studio Noir của chúng tôi, khách hàng không chỉ khoác lên mình những thiết kế trang sức độc bản mà còn được đội ngũ nhiếp ảnh gia ghi lại những khung hình chân dung nghệ thuật vượt thời gian.',
    ctaText: 'ĐỌC THÊM',
    backgroundImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
  },
  testimonialsSection: {
    title: 'KHÁCH HÀNG NHẬN XÉT',
    backgroundImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    items: [
      {
        id: 'tm-1',
        quote:
          'Cảm ơn những thông điệp ý nghĩa và sự tận tâm của ekip Karo Studio đã giúp vợ chồng mình chọn được cặp nhẫn cưới ưng ý, lại còn có bộ ảnh Lookbook đen trắng đẹp xuất sắc để trưng tại sảnh tiệc!',
        author: 'Minh Quân & Thanh Trúc',
        role: 'Khách hàng chụp Pre-Wedding & Nhẫn cưới',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'tm-2',
        quote:
          'Đôi bông tai đèn chùm và sợi dây chuyền tím Amethyst của Karo Studio bắt sáng cực kỳ tốt dưới ánh đèn sân khấu. Ai dự tiệc cưới cũng khen thần thái cô dâu sang trọng như tạp chí thời trang.',
        author: 'Ngọc Hân',
        role: 'Cô dâu mùa cưới Thu Đông',
        avatar:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
  bestSellingSection: {
    title: 'SẢN PHẨM MUA NHIỀU',
    items: [
      {
        id: 'bsk-1',
        name: 'Vòng cổ tím huyền bí Amethyst Hoàng Gia',
        category: 'Dây Chuyền',
        price: '3,250,000 ₫',
        oldPrice: '5,000,000 ₫',
        badge: '-35%',
        image:
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80',
        specs: 'Bán chạy số 1 cho tiệc tối & chụp Studio',
      },
      {
        id: 'bsk-2',
        name: 'Dây chuyền trái tim đại dương Sapphire',
        category: 'Dây Chuyền',
        price: '3,500,000 ₫',
        oldPrice: '5,000,000 ₫',
        badge: '-30%',
        image:
          'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=700&q=80',
        specs: 'Chế tác thủ công • Kèm chứng thư đá quý',
      },
      {
        id: 'bsk-3',
        name: 'BÔNG TAI VÀNG HỒNG 18K ĐÍNH ĐÁ RUBY',
        category: 'Bông Tai',
        price: '4,290,000 ₫',
        image:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
        specs: 'Thiết kế tinh xảo tôn gương mặt cô dâu',
      },
      {
        id: 'bsk-4',
        name: 'NHẪN KIM CƯƠNG VÀNG 18K ÁNH SAO ĐÊM',
        category: 'Nhẫn Cưới',
        price: '9,000,000 ₫',
        oldPrice: '9,900,000 ₫',
        badge: '-9%',
        image:
          'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80',
        specs: 'Vàng 18K chuẩn hội • Bảo hành trọn đời',
      },
    ],
  },
  newsSection: {
    title: 'TIN TỨC & CẢM HỨNG LOOKBOOK',
    posts: [
      {
        id: 'knews-1',
        title: 'NGHỆ THUẬT NHIẾP ẢNH CHÂN DUNG ĐEN TRẮNG TÔN VINH TRANG SỨC KIM CƯƠNG',
        category: 'Lookbook Noir',
        date: '21 Tháng 10, 2026',
        excerpt:
          'Khám phá cách sử dụng ánh sáng tương phản cao (Chiaroscuro) trong phòng chụp Karo Studio để làm nổi bật từng giác cắt kim cương và thần thái kiêu kỳ của cô dâu...',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'knews-2',
        title: 'XU HƯỚNG ĐỒNG HỒ CƠ LỘ MÁY & PHỤ KIỆN CƯỚI DÀNH CHO CHÚ RỂ LỊCH LÃM',
        category: 'Phong Cách Quý Ông',
        date: '16 Tháng 10, 2026',
        excerpt:
          'Bên cạnh trang sức lộng lẫy của cô dâu, một chiếc đồng hồ cơ tinh xảo cùng khuy măng sét bạc Ý sẽ hoàn thiện vẻ ngoài sang trọng cho chú rể trong ngày trọng đại...',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'knews-3',
        title: 'HÀNH TRÌNH CHẾ TÁC NHỮNG VIÊN KIM CƯƠNG BỀN VỮNG CHO LỄ CẦU HÔN',
        category: 'Chế Tác Kim Hoàn',
        date: '10 Tháng 10, 2026',
        excerpt:
          'Tìm hiểu quy trình tuyển chọn và cắt mài tỉ mỉ từng viên đá quý tại xưởng kim hoàn Karo Studio để tạo nên những thiết kế nhẫn đính hôn độc bản mang dấu ấn cá nhân...',
        image:
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  footer: {
    socialLabel: 'THEO DÕI CHÚNG TÔI',
    newsletterLabel: 'ĐĂNG KÝ NHẬN BẢN TIN',
    newsletterNote:
      'Đăng ký để nhận những thông tin khuyến mãi trang sức cưới và lịch chụp Lookbook mới nhất.',
    placeholder: 'Email của bạn...',
  },
};
