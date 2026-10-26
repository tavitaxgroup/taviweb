import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface TetFeastCategoryCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface TetFeastFeaturedItem {
  id: string;
  title: string;
  category: string;
  price: string;
  servings: string;
  image: string;
  description: string;
}

export interface TetFeastReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  highlighted?: boolean;
}

export interface NhaHang10Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  brandLogo: string;
  navLinks: string[];
  heroCollage: {
    leftTop: string;
    leftBottom: string;
    rightTop: string;
    rightBottom: string;
  };
  categoryCards: TetFeastCategoryCard[];
  featuredSection: {
    eyebrow: string;
    title: string;
    ctaText: string;
    items: TetFeastFeaturedItem[];
  };
  videoSection: {
    eyebrow: string;
    title: string;
    description: string;
    thumbnail: string;
    newsletterHeading: string;
    placeholder: string;
    buttonText: string;
    privacyText: string;
  };
  hotHighlight: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    hotline: string;
    primaryImage: string;
    secondaryImage: string;
  };
  reviewsSection: {
    eyebrow: string;
    title: string;
    items: TetFeastReviewItem[];
  };
}

export const nha_hang_10DefaultData: NhaHang10Data = {
  templateKey: 'nha_hang_10',
  business: {
    name: 'Nhà Hàng Ẩm Thực Truyền Thống & Tiệc Phú Quý TetFeast',
    tagline: 'Mâm Cỗ Sum Vầy • Không Gian Tiệc Tết & Quà Xuân Phong Cách Á Đông',
    description:
      'TetFeast là điểm hẹn ẩm thực truyền thống Việt Nam kết hợp nghệ thuật bài trí bàn tiệc Tết đương đại. Phục vụ mâm cỗ đoàn viên, trà đạo mùa xuân và set quà Tết phú quý.',
    phone: ['0 800 555 44 33', '0909 888 443'],
    email: ['datban@tetfeast.vn', 'cskh@tetfeast.vn'],
    address: '168 Đồng Khởi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    workingHours: '09:00 - 22:30 (Phục vụ xuyên lễ & Tết)',
    socials: {
      facebook: 'https://facebook.com/tetfeastvn',
      instagram: 'https://instagram.com/tetfeastvn',
      zalo: 'https://zalo.me/0909888443',
    },
  },
  brandLogo: 'MONA TET',
  navLinks: ['Trang Chủ', 'Về Chúng Tôi', 'Phụ Kiện & Tiệc', 'Khuyến Mãi', 'Cửa Hàng', 'Liên Hệ'],
  hero: {
    badge: 'ẨM THỰC TRUYỀN THỐNG & KHÔNG GIAN TIỆC XUÂN',
    title: 'MONA TET',
    highlight: 'TIỆC PHÚ QUÝ & ĐOÀN VIÊN',
    subtitle:
      'Đặt bàn tiệc truyền thống & phụ kiện bàn ăn Tết, nhận ngay ưu đãi hấp dẫn, tạo không gian ẩm thực Tết đầy phong cách',
    primaryCta: 'Đặt Tiệc Ngay',
    secondaryCta: 'Khám Phá Thực Đơn',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85',
  },
  heroCollage: {
    leftTop: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
    leftBottom: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80',
    rightTop: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80',
    rightBottom: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=500&q=80',
  },
  categoryCards: [
    {
      id: 'cat-1',
      title: 'Mâm Cỗ Tài Lộc',
      subtitle: 'Thực đơn 9 món truyền thống sum vầy',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'cat-2',
      title: 'Tiệc Pháo Đỏ Phú Quý',
      subtitle: 'Bàn tiệc gia đình & tất niên doanh nghiệp',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'cat-3',
      title: 'Ấm Trà Tết & Điểm Tâm',
      subtitle: 'Trà sen thượng hạng & mứt cổ truyền',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'cat-4',
      title: 'Set Quà & Lì Xì Tết',
      subtitle: 'Hộp quà ẩm thực & bao lì xì thủ công',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
    },
  ],
  featuredSection: {
    eyebrow: 'MONA TET',
    title: 'Sản Phẩm & Thực Đơn Nổi Bật',
    ctaText: 'Xem Thêm',
    items: [
      {
        id: 'ft-1',
        title: 'Set Bàn Tiệc Cung Đình Phú Quý',
        category: 'Mâm Cỗ Tết',
        price: '2.850.000 ₫',
        servings: '6 - 8 thực khách',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
        description:
          'Mâm cỗ cổ truyền gồm gà hấp lá chanh, nem công chả phụng, canh bóng thả hạt sen và xôi gấc phú quý.',
      },
      {
        id: 'ft-2',
        title: 'Khay Mứt & Bánh Trà Ngũ Phúc',
        category: 'Điểm Tâm & Trà',
        price: '890.000 ₫',
        servings: '4 - 6 thực khách',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
        description:
          'Khay sơn mài 5 ngăn đựng mứt sen trần, mứt gừng Huế, hạt điều rang củi và bánh đậu xanh hoàng kim.',
      },
      {
        id: 'ft-3',
        title: 'Không Gian Bàn Tiệc Đèn Lồng Đỏ',
        category: 'Phòng VIP',
        price: '4.500.000 ₫',
        servings: '10 - 12 thực khách',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80',
        description:
          'Phòng tiệc VIP bài trí đèn lồng lụa đỏ truyền thống cùng thực đơn 10 món hải sản & mỹ vị ngày xuân.',
      },
      {
        id: 'ft-4',
        title: 'Mâm Cỗ Đoàn Viên Tài Lộc',
        category: 'Mâm Cỗ Tết',
        price: '1.950.000 ₫',
        servings: '4 - 6 thực khách',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
        description:
          'Bánh chưng gấc nếp cái hoa vàng, giò lụa Ước Lễ, thịt kho tàu trứng vịt hồng đào và dưa hành muối.',
      },
      {
        id: 'ft-5',
        title: 'Set Trà Đào Đông & Bánh Quý Gia Truyền',
        category: 'Trà Đạo',
        price: '680.000 ₫',
        servings: 'Bàn trà 4 người',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
        description:
          'Thưởng thức trà Ô Long ướp hoa mộc quế bên nhành đào đông đỏ thắm và bánh nướng hạt sen.',
      },
      {
        id: 'ft-6',
        title: 'Hộp Quà Ẩm Thực Berry Đỏ Thịnh Vượng',
        category: 'Quà Biếu Tết',
        price: '1.450.000 ₫',
        servings: 'Hộp quà cao cấp',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
        description:
          'Set quà Tết sang trọng gồm rượu mơ ủ chum sành, trà sen Tây Hồ và hạt dinh dưỡng thượng hạng.',
      },
    ],
  },
  videoSection: {
    eyebrow: 'MONA VIDEO',
    title: 'Không Gian Bàn Tiệc & Trang Trí Tết',
    description:
      'Mỗi mâm cỗ và không gian bàn tiệc tại TetFeast được chăm chút tỉ mỉ từng chi tiết, mang lại hơi ấm sum vầy cho gia đình bạn.',
    thumbnail: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1400&q=85',
    newsletterHeading: 'Để Lại Email Của Bạn Để Nhận Thông Tin Khuyến Mãi Từ Chúng Tôi',
    placeholder: 'Nhập Email của bạn',
    buttonText: 'Đăng Ký',
    privacyText: 'Tôi đồng ý với Chính Sách Bảo Mật.',
  },
  hotHighlight: {
    eyebrow: 'MONA HOT',
    title: 'Không Gian Tiệc & Đèn Trang Trí Tết',
    subtitle: 'Trải nghiệm ẩm thực & bài trí rất được ưa chuộng trong các ngày Tết',
    description:
      'Không gian phòng tiệc đèn lồng lụa và mâm cỗ truyền thống tại TetFeast giúp gia đình bạn tận hưởng trọn vẹn hương vị Tết xưa trong không gian ấm cúng, sang trọng.',
    ctaText: 'Xem Thêm',
    hotline: '0 800 555 44 33',
    primaryImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
  },
  reviewsSection: {
    eyebrow: 'MONA REVIEWS',
    title: 'Đánh Giá Của Khách Hàng',
    items: [
      {
        id: 'rv-1',
        quote:
          'Thực đơn tiệc Tết và cách bài trí bàn ăn đa dạng về mẫu mã, hương vị chuẩn truyền thống giúp gia đình mình dễ dàng lựa chọn mâm cỗ ưng ý.',
        author: 'Nguyễn Thị An',
        role: 'Nhà đầu tư chứng khoán',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
        highlighted: false,
      },
      {
        id: 'rv-2',
        quote:
          'Các món ăn và nguyên liệu tại nhà hàng đều được tuyển chọn từ nguồn tươi sạch, an toàn, giữ trọn vị thanh tao và rất tốt cho sức khỏe người lớn tuổi.',
        author: 'Nguyễn Ngọc Trí',
        role: 'Trưởng Phòng Kinh Doanh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        highlighted: true,
      },
      {
        id: 'rv-3',
        quote:
          'Không gian bàn tiệc Tết tạo điểm nhấn ấm cúng, giúp gia đình và đối tác của tôi có được những bức ảnh kỷ niệm tuyệt đẹp và độc đáo trong dịp xuân về.',
        author: 'Nguyễn Phúc Lộc',
        role: 'Trưởng Phòng Marketing',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
        highlighted: false,
      },
    ],
  },
};

export const defaultData = nha_hang_10DefaultData;
export const mockData = nha_hang_10DefaultData;
export default nha_hang_10DefaultData;
