export interface PhotoForumQuickItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface PhotoForumFeaturedPost {
  id: string;
  badge: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export interface PhotoForumCompactPost {
  id: string;
  title: string;
  author: string;
  date: string;
  comments: number;
  image: string;
}

export interface PhotoForumHotTopic {
  id: string;
  badge: string;
  title: string;
  image: string;
  isPromo?: boolean;
  promoSub?: string;
}

export interface StudioChupAnh14Data {
  business: {
    name: string;
    subName: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string[];
    address: string;
    adBannerText: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  topQuickRow: PhotoForumQuickItem[];
  leadStory: {
    category: string;
    title: string;
    author: string;
    date: string;
    image: string;
  };
  weatherWidget: {
    city: string;
    condition: string;
    tempC: number;
    highC: number;
    lowC: number;
    humidity: string;
    wind: string;
    cloudCover: string;
    goldenHourNote: string;
    forecast: {
      day: string;
      temp: string;
    }[];
  };
  monaChoiceColumn: {
    title: string;
    posts: PhotoForumFeaturedPost[];
  };
  mostLikedColumn: {
    title: string;
    posts: PhotoForumCompactPost[];
  };
  hotTopicsColumn: {
    title: string;
    posts: PhotoForumHotTopic[];
  };
  footer: {
    aboutParagraphs: string[];
    categoriesLeft: string[];
    categoriesRight: string[];
    newsletterPlaceholder: string;
    newsletterButton: string;
  };
}

export const defaultStudioChupAnh14Data: StudioChupAnh14Data = {
  business: {
    name: 'MONA PHOTOFORUM',
    subName: 'TẠP CHÍ NHIẾP ẢNH & ĐỜI SỐNG SÁNG TẠO',
    tagline: 'Cộng Đồng Nhiếp Ảnh Nghệ Thuật, Hậu Kỳ & Phong Cách Sống Hiện Đại',
    description:
      'Mona PhotoForum là chuyên trang tạp chí hình ảnh, chia sẻ kinh nghiệm chụp ảnh chân dung, nhiếp ảnh đường phố, đánh giá thiết bị студио và những câu chuyện đời sống đầy cảm hứng.',
    phone: ['076 922 0162', '0909 319 162'],
    email: ['demonhunterg@gmail.com', 'toasoan@photoforum.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    adBannerText: 'Liên hệ quảng cáo & Hợp tác Studio',
    copyright: '© Bản quyền thuộc công ty thiết kế website Mona Media - Chuyên trang PhotoForum.',
  },
  navigation: [
    { label: 'NHIẾP ẢNH', href: '#mona-chon' },
    { label: 'KINH NGHIỆM HAY', href: '#duoc-yeu-thich' },
    { label: 'LÀM ĐẸP & CONCEPT', href: '#chu-de-hot' },
    { label: 'PHONG CÁCH SỐNG', href: '#mona-chon' },
    { label: 'SỨC KHỎE SÁNG TẠO', href: '#duoc-yeu-thich' },
    { label: 'TÂM SỰ NGHỀ ẢNH', href: '#mona-chon' },
    { label: 'ĐÀO TẠO STUDIO', href: '#chu-de-hot' },
  ],
  topQuickRow: [
    {
      id: 'q-1',
      title: 'Bí Quyết Giữ Tinh Thần Sáng Tạo & Trí Nhớ Bền Bỉ Khi Chụp Ngoại Cảnh Dài Ngày...',
      category: 'Sức khỏe',
      image:
        'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'q-2',
      title: 'Thói Quen Uống Cà Phê Sáng Trước Giờ Bấm Máy Và Lưu Ý Cho Nhiếp Ảnh Gia...',
      category: 'Phong cách sống',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'q-3',
      title: 'Kỹ Thuật Bắt Khoảnh Khắc Thú Cưng Tự Nhiên Mà Vẫn Đảm Bảo An Toàn Tại Studio...',
      category: 'Kinh nghiệm hay',
      image:
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'q-4',
      title: 'Giải Pháp Ánh Sáng Cửa Sổ Tự Nhiên Khi Chụp Ảnh Newborn & Gia Đình Ấm Áp...',
      category: 'Nhiếp ảnh',
      image:
        'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'q-5',
      title: 'Cách Chống Nóng & Bảo Quản Cảm Biến Máy Ảnh Khi Tác Nghiệp Giữa Mùa Hè...',
      category: 'Thiết bị',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80',
    },
  ],
  leadStory: {
    category: 'Phóng Sự Ảnh Đời Sống',
    title:
      'Bộ ảnh xúc động: Cụ ông 86 tuổi vượt hàng trăm cây số tìm lại kỷ niệm tình yêu bên bờ biển sau 20 năm',
    author: 'mona',
    date: '19 Tháng Mười, 2026',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
  },
  weatherWidget: {
    city: 'HO CHI MINH CITY',
    condition: 'Nắng dịu • Lý tưởng chụp Golden Hour',
    tempC: 32,
    highC: 32,
    lowC: 26,
    humidity: '52%',
    wind: '3.1 km/h',
    cloudCover: '75%',
    goldenHourNote: 'Khung giờ vàng chụp ngoại cảnh hôm nay: 16:45 - 17:50',
    forecast: [
      { day: 'T2', temp: '33°' },
      { day: 'T3', temp: '34°' },
      { day: 'T4', temp: '32°' },
      { day: 'T5', temp: '31°' },
      { day: 'T6', temp: '33°' },
    ],
  },
  monaChoiceColumn: {
    title: 'Mona chọn',
    posts: [
      {
        id: 'mc-1',
        badge: 'Featured',
        title: 'Khi trẻ nhỏ sợ ống kính máy ảnh trong buổi chụp đầu đời, bố mẹ và nhiếp ảnh gia cần làm gì?',
        excerpt:
          'Bạn yêu thương và luôn muốn lưu giữ trọn vẹn từng nụ cười tự nhiên của bé nhưng ánh đèn flash đôi khi làm bé bỡ ngỡ. Hãy áp dụng 5 mẹo tạo không khí thân thiện dưới đây...',
        author: 'mona',
        date: '18 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mc-2',
        badge: 'Đào tạo',
        title: 'Người mới học nhiếp ảnh chân dung không thể bỏ qua 3 cuốn sách bố cục kinh điển này',
        excerpt:
          'Với những đặc thù về ánh sáng tự nhiên, tỷ lệ vàng và tâm lý nhân vật trước ống kính, ba cuốn sách nhiếp ảnh dưới đây sẽ giúp bạn nâng tầm tư duy thị giác...',
        author: 'mona',
        date: '17 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mc-3',
        badge: 'Tâm sự',
        title: 'Bỏ việc văn phòng mở Studio ảnh cưới nhỏ ở Đà Lạt: Hành trình tìm lại cảm hứng sống',
        excerpt:
          'Một lần vô tình xem lại những cuộn phim chụp từ thời sinh viên, tôi quyết định rời phố thị ồn ào để bắt đầu hành trình kể chuyện tình yêu qua từng khung hình sương mù...',
        author: 'mona',
        date: '16 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mc-4',
        badge: 'Phong cách sống',
        title: 'Con gái tỷ phú châu Âu vẫn đam mê làm nhiếp ảnh gia tự do, tự xách máy đi tác nghiệp',
        excerpt:
          'Sở hữu khối tài sản thừa kế khổng lồ nhưng nữ nhiếp ảnh gia trẻ tuổi người Na Uy hàng ngày vẫn tự mình đeo balo máy ảnh rong ruổi khắp các triển lãm nghệ thuật...',
        author: 'mona',
        date: '15 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mc-5',
        badge: 'Triển lãm',
        title: 'Đêm vinh danh “Nhan Sắc & Ánh Sáng Mùa 2” trao học bổng nhiếp ảnh cho 300 tài năng trẻ',
        excerpt:
          'Hội đồng giám khảo cùng các nhiếp ảnh gia hàng đầu Việt Nam đã chính thức trao tặng quỹ thiết bị máy ảnh và khóa đào tạo hậu kỳ chuyên sâu cho sinh viên mỹ thuật...',
        author: 'mona',
        date: '14 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mc-6',
        badge: 'Kinh nghiệm hay',
        title: 'Kỹ năng xử lý tình huống khi chụp ảnh dã ngoại cùng thú cưng để có bức hình sống động',
        excerpt:
          'Chỉ cần thực hiện tốt bước làm quen và chọn tốc độ màn trập từ 1/1000s trở lên, bạn sẽ dễ dàng bắt trọn khoảnh khắc đáng yêu của những chú cún cưng ngoài công viên...',
        author: 'mona',
        date: '13 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'mc-7',
        badge: 'Góc máy đẹp',
        title: 'Nhiếp ảnh gia Đà Nẵng phát hiện góc chụp hoàng hôn tuyệt đẹp từ ban công căn biệt thự cổ',
        excerpt:
          'Đi làm về lúc chiều muộn, ánh nắng vàng rót qua rặng núi phía xa phản chiếu lên ban công cổ điển đã tạo nên bức ảnh đạt hơn 50.000 lượt yêu thích trên cộng đồng...',
        author: 'mona',
        date: '12 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  mostLikedColumn: {
    title: 'Được yêu thích',
    posts: [
      {
        id: 'ml-1',
        title: 'Việt Trinh: “Nữ hoàng ảnh lịch” thập niên 90 chia sẻ kỷ niệm chụp ảnh phim nhựa...',
        author: 'mona',
        date: '18 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-2',
        title: 'Giải pháp tuyệt vời giúp bé luôn tươi cười tự nhiên trong suốt buổi chụp 돌/thôi nôi...',
        author: 'mona',
        date: '18 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-3',
        title: 'Bộ ảnh kỷ yếu thay đổi chiều cao ngoạn mục nhờ góc chụp ống kính tiêu cự 35mm...',
        author: 'mona',
        date: '17 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-4',
        title: 'Hậu trường chụp poster phim điện ảnh: Đằng sau 1 bức hình là 12 giờ cân chỉnh đèn...',
        author: 'mona',
        date: '17 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-5',
        title: 'Chàng trai trẻ đổi đời, mở studio sang chảnh chỉ nhờ kỹ năng chỉnh sửa màu ảnh...',
        author: 'mona',
        date: '16 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-6',
        title: 'Đêm nhạc Acoustic kết hợp triển lãm ảnh đen trắng Sài Gòn xưa thu hút giới trẻ...',
        author: 'mona',
        date: '16 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-7',
        title: 'Tạm biệt nỗi lo da bóng dầu, sạm nắng khi chụp ảnh cưới ngoại cảnh mùa hè...',
        author: 'mona',
        date: '15 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-8',
        title: 'Cộng đồng mạng trầm trồ trước bộ ảnh cổ phục Việt Nam chụp tại Cố đô Huế...',
        author: 'mona',
        date: '15 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-9',
        title: 'Bí quyết giữ làn da rạng rỡ suốt 8 tiếng quay chụp Lookbook thời trang liên tục...',
        author: 'mona',
        date: '14 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-10',
        title: 'Cậu học sinh trường Ams đạt giải Nhất cuộc thi ảnh quốc tế với chiếc máy ảnh cũ...',
        author: 'mona',
        date: '14 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-11',
        title: 'Vì sao các tỷ phú công nghệ vẫn yêu thích lưu giữ kỷ niệm gia đình bằng máy ảnh Film?',
        author: 'mona',
        date: '13 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'ml-12',
        title: 'Khám phá hành trình nhận thức thẩm mỹ của trẻ qua góc nhìn nhiếp ảnh sáng tạo...',
        author: 'mona',
        date: '12 Tháng Mười, 2026',
        comments: 0,
        image:
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
  hotTopicsColumn: {
    title: 'Chủ đề Hot',
    posts: [
      {
        id: 'ht-1',
        badge: 'Kinh nghiệm hay',
        title: 'Chuyên gia tài chính & nhiếp ảnh: 6 bí quyết xây dựng Studio tự chủ ở tuổi 28',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'ht-2',
        badge: 'Giải trí',
        title: 'Hậu trường những bộ ảnh bìa tạp chí thời trang công phu nhất mùa Thu Đông năm nay',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'ht-3',
        badge: 'Làm đẹp',
        title: 'Chuyên gia tạo mẫu tóc Tú Phương đề cao sự tinh tế, tỉ mỉ khi làm tóc cô dâu chụp Studio',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'ht-4',
        badge: 'Kinh nghiệm hay',
        title: 'Á khôi Trần Thị Ngọc Trâm: Bí quyết giữ thần thái tự nhiên trước ống kính máy quay',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'ht-5',
        badge: 'Phong cách sống',
        title: '10 thói quen cuối tuần giúp các nhiếp ảnh gia tái tạo năng lượng và ý tưởng mới',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'ht-6',
        badge: 'Ưu đãi Studio',
        title: '12h trưa thứ 6: Đặt lịch thuê Phim trường & Preset màu hoàn 50% chi phí tại Mona Studio',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
        isPromo: true,
        promoSub: 'HAPPY FRIDAY • ƯU ĐÃI CỘNG ĐỒNG NHIẾP ẢNH',
      },
      {
        id: 'ht-7',
        badge: 'Sức khỏe',
        title: 'Dinh dưỡng thông minh với sô-cô-la đen giúp ekip chụp hình giữ sự tỉnh táo suốt ngày dài',
        image:
          'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  footer: {
    aboutParagraphs: [
      'Mona Media là công ty thiết kế website & truyền thông hình ảnh cao cấp có tuổi đời 8+ năm trong ngành.',
      'Ngay từ những ngày đầu hoạt động, Mona PhotoForum đã chọn cho mình một phân khúc riêng, kết nối hàng ngàn nhiếp ảnh gia, studio cưới và nhà sáng tạo nội dung trên toàn quốc.',
      'Những giải pháp truyền thông và nền tảng từ Mona Media luôn được tư vấn, phát triển, tối ưu nhằm mang lại hiệu quả rõ rệt cho hoạt động kinh doanh của studio.',
    ],
    categoriesLeft: ['Featured', 'Đào tạo Studio', 'Làm đẹp & Concept', 'Sức khỏe sáng tạo'],
    categoriesRight: ['Giải trí & Triển lãm', 'Kinh nghiệm hay', 'Phong cách sống', 'Tâm sự nghề'],
    newsletterPlaceholder: 'Đăng ký email nhận bản tin nhiếp ảnh...',
    newsletterButton: 'Gửi',
  },
};
