import { IconName } from './iconMap';

export interface BentoPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ServiceRateItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
}

export interface RoomStripItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  area: string;
  capacity: string;
  image: string;
  description: string;
}

export interface OnSiteAmenity {
  id: string;
  title: string;
  description: string;
  iconName: IconName;
}

export interface ExperienceCard {
  id: string;
  title: string;
  price: string;
  unit: string;
  image: string;
  description: string;
}

export interface NewsCheckerItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface SwingOneResortTemplateData {
  company: {
    name: string;
    brandSub: string;
    slogan: string;
    address: string;
    phone: string;
    email: string;
    website: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    slides: {
      id: string;
      eyebrow: string;
      title: string;
      image: string;
    }[];
  };
  introBento: {
    leadQuote: string;
    paragraph1: string;
    paragraph2: string;
    leftStack: BentoPhoto[];
    centerFeature: BentoPhoto;
    rightStack: BentoPhoto[];
  };
  servicePricing: {
    title: string;
    description: string;
    items: ServiceRateItem[];
  };
  roomsShowcase: {
    leadQuote: string;
    paragraph1: string;
    paragraph2: string;
    rooms: RoomStripItem[];
  };
  onSiteAmenities: {
    title: string;
    subtitle: string;
    items: OnSiteAmenity[];
  };
  bookingBanner: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
  };
  newExperiences: {
    title: string;
    subtitle: string;
    items: ExperienceCard[];
  };
  paradiseBanner: {
    eyebrow: string;
    title: string;
    ctaText: string;
    backgroundImage: string;
  };
  newsCheckerboard: {
    title: string;
    subtitle: string;
    items: NewsCheckerItem[];
  };
  footerGallery: string[];
}

export const mockData: SwingOneResortTemplateData = {
  company: {
    name: 'Mona Media Resort',
    brandSub: 'KIẾN TRÚC & THI CÔNG TỔ HỢP NGHỈ DƯỠNG SWINGONE',
    slogan: 'Thiên đường nghỉ dưỡng giao hòa cùng đại dương nhiệt đới',
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    phone: '076 922 0162',
    email: 'demonhunterg@gmail.com',
    website: 'mona.media',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#hero' },
    { label: 'GIỚI THIỆU', href: '#intro' },
    { label: 'PHÒNG', href: '#rooms' },
    { label: 'TIỆN ÍCH', href: '#amenities' },
    { label: 'TIN TỨC', href: '#news' },
    { label: 'LIÊN HỆ', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Chào mừng bạn đến với',
    title: 'Mona Media Resort',
    description:
      'Tổ hợp biệt thự nghỉ dưỡng biển nhiệt đới sở hữu hồ bơi vô cực ngắm hoàng hôn, kiến trúc bền vững và chuẩn mực dịch vụ nghỉ dưỡng 5 sao quốc tế.',
    ctaText: 'Xem phòng',
    slides: [
      {
        id: 'slide-1',
        eyebrow: 'Chào mừng bạn đến với',
        title: 'Mona Media Resort',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=85',
      },
      {
        id: 'slide-2',
        eyebrow: 'Kiến trúc nghỉ dưỡng nhiệt đới',
        title: 'Biệt Thự Hoàng Hôn SwingOne',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85',
      },
      {
        id: 'slide-3',
        eyebrow: 'Kỳ nghỉ riêng tư bên bờ biển',
        title: 'Trải Nghiệm Thượng Lưu Đích Thực',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=85',
      },
    ],
  },
  introBento: {
    leadQuote:
      'Thức dậy bởi tiếng sóng vỗ dịu êm của biển cả và bắt đầu ngày mới tràn đầy năng lượng trên bãi cát trắng mịn tại Mona Resort.',
    paragraph1:
      'Được quy hoạch và thi công đồng bộ bởi đội ngũ kiến trúc sư hàng đầu, tổ hợp nghỉ dưỡng SwingOne – Mona Media Resort mang đến không gian mở giao hòa tuyệt đối với thiên nhiên biển đảo. Từng căn villa và phòng suite đều đón trọn ánh nắng sớm mai cùng làn gió đại dương mát lành.',
    paragraph2:
      'Hệ thống vật liệu gỗ tự nhiên chống mặn, đá trầm tích bản địa và hệ kính trượt khổ lớn giúp xóa nhòa ranh giới giữa nội thất sang trọng bên trong với cảnh quan hồ bơi vô cực và vườn cọ nhiệt đới bên ngoài.',
    leftStack: [
      {
        id: 'bento-left-1',
        title: 'Bồn sục Jacuzzi ngoài trời hướng biển',
        category: 'THƯ GIÃN RIÊNG TƯ',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'bento-left-2',
        title: 'Hiên tắm nắng & Lounge ngắm bình minh',
        category: 'KHÔNG GIAN MỞ',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
      },
    ],
    centerFeature: {
      id: 'bento-center',
      title: 'Bữa tối lãng mạn dưới ánh nến bên hồ bơi vô cực lúc hoàng hôn',
      category: 'ẨM THỰC THƯỢNG HẠNG',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85',
    },
    rightStack: [
      {
        id: 'bento-right-1',
        title: 'Liệu trình Spa thảo mộc & Đá nóng',
        category: 'CHĂM SÓC SỨC KHỎE',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'bento-right-2',
        title: 'Thiền định & Yoga đón nắng sớm trên biển',
        category: 'CÂN BẰNG THÂN TÂM',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  servicePricing: {
    title: 'Giá dịch vụ tại Mona Resort',
    description:
      'Bảng giá niêm yết minh bạch các gói dịch vụ tiện ích nghỉ dưỡng, ẩm thực và đưa đón cao cấp dành riêng cho quý khách lưu trú tại khu nghỉ dưỡng.',
    items: [
      {
        id: 'rate-1',
        title: 'TIỆN ÍCH SPA VÀ SAUNA',
        subtitle: 'Đã bao gồm thuế VAT',
        price: '1.100.000đ',
        description: 'Trọn gói xông hơi đá muối Himalaya, ngâm bồn thảo dược và massage trị liệu toàn thân 90 phút.',
      },
      {
        id: 'rate-2',
        title: 'HỒ BƠI & TIỆC BBQ',
        subtitle: 'Đã bao gồm thuế VAT',
        price: '1.850.000đ',
        description: 'Tiệc nướng hải sản tươi sống bên hồ bơi vô cực kèm rượu vang và phục vụ riêng tại bàn.',
      },
      {
        id: 'rate-3',
        title: 'TỔ CHỨC SỰ KIỆN',
        subtitle: 'Đã bao gồm thuế VAT',
        price: '2.200.000đ',
        description: 'Không gian hội nghị, gala dinner hoặc tiệc kỷ niệm bên bờ biển với hệ thống âm thanh ánh sáng chuẩn quốc tế.',
      },
      {
        id: 'rate-4',
        title: 'THUÊ XE ĐƯA ĐÓN',
        subtitle: 'Đã bao gồm thuế VAT',
        price: '1.200.000đ',
        description: 'Dịch vụ xe Limousine/SUV hạng sang đưa đón hai chiều từ sân bay về thẳng sảnh biệt thự.',
      },
      {
        id: 'rate-5',
        title: 'ĐƯA ĐÓN TẠI CHỖ',
        subtitle: 'Đã bao gồm thuế VAT',
        price: '600.000đ',
        description: 'Xe điện buggy phục vụ di chuyển 24/7 trong khuôn viên resort và tham quan các điểm lân cận.',
      },
    ],
  },
  roomsShowcase: {
    leadQuote:
      'Nằm ở vị trí tuyệt đẹp bên bờ biển nguyên sơ, Mona Resort tồn tại hài hòa với hệ sinh thái tự nhiên xung quanh.',
    paragraph1:
      'Mỗi hạng phòng tại Mona Media Resort đều được thiết kế theo triết lý kiến trúc xanh bền vững, tối ưu thông gió tự nhiên và tầm nhìn toàn cảnh hướng thẳng ra đại dương xanh ngắt.',
    paragraph2:
      'Nội thất được chế tác thủ công từ gỗ tếch, đá cẩm thạch tự nhiên và vải lanh hữu cơ, mang lại cảm giác ấm cúng, thư thái tuyệt đối ngay từ khoảnh khắc đầu tiên bước chân vào phòng.',
    rooms: [
      {
        id: 'room-1',
        name: 'Phòng Hoàng Gia',
        subtitle: 'Royal Ocean Suite',
        price: '3.600.000đ',
        unit: '/ Đêm',
        area: '85 m²',
        capacity: '02 Người lớn, 02 Trẻ em',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
        description: 'Phòng Suite sang trọng bậc nhất với ban công rộng nhìn thẳng ra biển, bồn tắm nằm cẩm thạch và phòng khách riêng biệt.',
      },
      {
        id: 'room-2',
        name: 'Phòng Hạng Sang',
        subtitle: 'Deluxe Beachfront Room',
        price: '2.900.000đ',
        unit: '/ Đêm',
        area: '62 m²',
        capacity: '02 Người lớn, 01 Trẻ em',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
        description: 'Không gian nghỉ dưỡng tinh tế với cửa kính kịch trần, hiên tắm nắng riêng và nội thất gỗ ấm áp.',
      },
      {
        id: 'room-3',
        name: 'Phòng Tiêu Chuẩn',
        subtitle: 'Junior Garden Suite',
        price: '1.500.000đ',
        unit: '/ Đêm',
        area: '45 m²',
        capacity: '02 Người lớn',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80',
        description: 'Thiết kế trang nhã ngập tràn ánh sáng tự nhiên, hướng nhìn ra khu vườn nhiệt đới xanh mát và yên tĩnh.',
      },
      {
        id: 'room-4',
        name: 'Căn Hộ Nghỉ Dưỡng',
        subtitle: 'Penthouse Ocean Villa',
        price: '5.000.000đ',
        unit: '/ Đêm',
        area: '140 m²',
        capacity: '04 Người lớn, 02 Trẻ em',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
        description: 'Biệt thự căn hộ 2 phòng ngủ khép kín sở hữu hồ bơi sục riêng, phòng bếp hiện đại và quản gia phục vụ 24/7.',
      },
    ],
  },
  onSiteAmenities: {
    title: 'Tiện ích tại chỗ',
    subtitle:
      'Tận hưởng trọn vẹn hệ sinh thái tiện ích nội khu chuẩn 5 sao được vận hành chuyên nghiệp suốt ngày đêm.',
    items: [
      {
        id: 'amenity-1',
        title: 'Phục vụ 24/7',
        description:
          'Đội ngũ lễ tân, quản gia và dịch vụ phòng luôn túc trực 24/7 sẵn sàng đáp ứng mọi yêu cầu của quý khách.',
        iconName: 'clock',
      },
      {
        id: 'amenity-2',
        title: 'Bồn tắm nóng lạnh',
        description:
          'Hệ thống bồn sục Jacuzzi và sen tắm nhiệt độ tự động giúp thư giãn cơ thể sau một ngày khám phá biển đảo.',
        iconName: 'droplets',
      },
      {
        id: 'amenity-3',
        title: 'Bãi đỗ xe rộng',
        description:
          'Khu vực đỗ xe riêng biệt có mái che, trạm sạc xe điện và đội ngũ điều phối viên hỗ trợ hoàn toàn miễn phí.',
        iconName: 'car',
      },
      {
        id: 'amenity-4',
        title: 'Vận chuyển hành lý',
        description:
          'Nhân viên Bellman hỗ trợ tiếp nhận và vận chuyển hành lý tận cửa phòng ngay khi quý khách vừa đặt chân đến sảnh.',
        iconName: 'briefcase',
      },
      {
        id: 'amenity-5',
        title: 'Cung cấp thức uống',
        description:
          'Thưởng thức nước ép trái cây nhiệt đới chào mừng, trà thảo mộc và quầy minibar cao cấp được bổ sung mỗi ngày.',
        iconName: 'coffee',
      },
      {
        id: 'amenity-6',
        title: 'Camera an ninh',
        description:
          'Hệ thống giám sát đa lớp cùng đội ngũ tuần tra an ninh 24/24 đảm bảo sự riêng tư và an toàn tuyệt đối.',
        iconName: 'shield-check',
      },
    ],
  },
  bookingBanner: {
    title: 'Đặt phòng & dịch vụ ngay hôm nay để tận hưởng những ưu đãi',
    subtitle:
      'Ưu đãi giảm ngay 20% giá phòng kèm bữa sáng tự chọn và phiếu quà tặng Spa trị giá 1.000.000đ khi đặt trực tiếp qua hệ thống.',
    backgroundImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
    ctaText: 'TÌM PHÒNG TRỐNG',
  },
  newExperiences: {
    title: 'Dịch vụ mới',
    subtitle:
      'Những hoạt động trải nghiệm biển đảo đặc sắc vừa được ra mắt tại Mona Media Resort dành cho mùa lễ hội năm nay.',
    items: [
      {
        id: 'exp-1',
        title: 'Khám phá đại dương',
        price: '1.200.000đ',
        unit: '/ Khách',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        description: 'Hành trình lặn biển ngắm rạn san hô nguyên sơ cùng huấn luyện viên chuyên nghiệp chuẩn PADI.',
      },
      {
        id: 'exp-2',
        title: 'Lướt sóng',
        price: '950.000đ',
        unit: '/ Buổi',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
        description: 'Trải nghiệm lướt ván diều và ván đứng SUP đón sóng biển cùng trang thiết bị an toàn cao cấp.',
      },
      {
        id: 'exp-3',
        title: 'Tiệc cưới bờ biển',
        price: '18.000.000đ',
        unit: '/ Trọn gói',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
        description: 'Lễ đường hoa tươi lãng mạn trên bãi cát trắng dưới ánh hoàng hôn cùng tiệc rượu chúc mừng sang trọng.',
      },
    ],
  },
  paradiseBanner: {
    eyebrow: 'MONA MEDIA RESORT',
    title: 'Thiên đường nghỉ dưỡng lý tưởng',
    ctaText: 'Trải nghiệm',
    backgroundImage:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=85',
  },
  newsCheckerboard: {
    title: 'Tin tức mới',
    subtitle:
      'Cẩm nang du lịch nghỉ dưỡng biển đảo, kinh nghiệm đặt phòng và những sự kiện nổi bật tại Mona Media Resort.',
    items: [
      {
        id: 'news-1',
        title: 'Du lịch Cô Tô: Hành trình chạm vào vẻ đẹp hoang sơ của biển đảo phương Bắc',
        date: '8 Tháng Ba, 2026',
        category: 'CẨM NANG DU LỊCH',
        excerpt:
          'Khám phá bãi đá Cầu Mỵ kỳ vĩ, con đường tình yêu lát gạch đỏ rợp bóng phi lao và thưởng thức hải sản tươi ngon.',
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'news-2',
        title: 'Kinh nghiệm tìm và đặt phòng biệt thự nghỉ dưỡng biển ở Côn Đảo',
        date: '15 Tháng Ba, 2026',
        category: 'KINH NGHIỆM NGHỈ DƯỠNG',
        excerpt:
          'Bí quyết săn ưu đãi villa hướng biển, lựa chọn thời điểm biển êm đẹp nhất trong năm và lịch trình tham quan 3 ngày 2 đêm.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'news-3',
        title: 'Tháng 6 mùa hè sôi động trên vịnh Hạ Long cùng chuỗi lễ hội biển nhiệt đới',
        date: '22 Tháng Ba, 2026',
        category: 'SỰ KIỆN MÙA HÈ',
        excerpt:
          'Trải nghiệm du thuyền ngắm hoàng hôn trên vịnh di sản, tiệc âm nhạc bên hồ bơi vô cực và ẩm thực biển đặc sắc.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  footerGallery: [
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
  ],
};
