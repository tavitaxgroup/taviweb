export interface CyberHeroTile {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface CyberArticleRow {
  id: string;
  badge: string;
  badgeColor?: 'orange' | 'dark' | 'blue';
  title: string;
  author: string;
  date: string;
  comments: number;
  excerpt: string;
  image: string;
}

export interface CyberVideoEpisode {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}

export interface CyberReviewItem {
  id: string;
  title: string;
  date: string;
  score: string;
  image: string;
}

export interface StudioChupAnh17Data {
  business: {
    name: string;
    subName: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string[];
    address: string;
    copyright: string;
  };
  topNav: {
    label: string;
    href: string;
  }[];
  orangeBarNav: {
    label: string;
    href: string;
  }[];
  topPromoBanner: {
    eyebrow: string;
    productTitle: string;
    ctaText: string;
    priceLabel: string;
    priceValue: string;
    image: string;
  };
  heroMosaic: {
    leftMain: CyberHeroTile;
    rightTop: CyberHeroTile;
    rightBottomLeft: CyberHeroTile;
    rightBottomRight: CyberHeroTile;
  };
  middleNewsSection: {
    title: string;
    leadBanner: CyberHeroTile;
    articles: CyberArticleRow[];
  };
  videoSidebar: {
    title: string;
    episodes: CyberVideoEpisode[];
    cloudPromoTitle: string;
    cloudPromoSub: string;
  };
  allArticlesSection: {
    title: string;
    articles: CyberArticleRow[];
  };
  lowerRightSidebar: {
    latestTitle: string;
    latestLinks: {
      title: string;
      date: string;
    }[];
    loungeTitle: string;
    loungeLead: CyberHeroTile;
    loungeSubItems: {
      id: string;
      title: string;
      date: string;
      image: string;
    }[];
    reviewsTitle: string;
    reviews: CyberReviewItem[];
  };
}

export const defaultStudioChupAnh17Data: StudioChupAnh17Data = {
  business: {
    name: 'mona',
    subName: 'CYBER STUDIO & COSPLAY MEDIA',
    tagline: 'Studio Chụp Ảnh Cosplay Nghệ Thuật, Quay Dựng Sự Kiện Esports & Livestream 4K',
    description:
      'Mona CyberStudio là tổ hợp phim trường chụp ảnh Cosplay chuyên nghiệp, sản xuất truyền thông giải đấu Esports và đánh giá thiết bị ghi hình hiện đại.',
    phone: ['076 922 0162', '0909 650 365'],
    email: ['mona@mona.media', 'demonhunterg@gmail.com'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    copyright: '© All rights reserved. Thiết kế website Mona Media - CyberStudio.',
  },
  topNav: [
    { label: 'TIN TỨC', href: '#tin-tuc' },
    { label: 'ĐÁNH GIÁ', href: '#danh-gia' },
    { label: 'CỘNG ĐỒNG', href: '#tat-ca-bai-viet' },
    { label: 'COSPLAY STUDIO', href: '#tat-ca-bai-viet' },
    { label: 'ƯU ĐÃI CHỤP', href: '#uu-dai' },
    { label: 'PHIM ẢNH', href: '#video-studio' },
  ],
  orangeBarNav: [
    { label: 'LIVESTREAM 4K', href: '#tin-tuc' },
    { label: 'PC / CONSOLE STUDIO', href: '#tin-tuc' },
    { label: 'MOBILE MEDIA', href: '#tat-ca-bai-viet' },
    { label: 'SỰ KIỆN ESPORTS', href: '#tin-tuc' },
    { label: 'CÔNG NGHỆ QUAY', href: '#danh-gia' },
  ],
  topPromoBanner: {
    eyebrow: 'GÓI CHỤP LOOKBOOK COSPLAY & QUAY HIGHLIGHT',
    productTitle: 'COMBO STUDIO FULL-FRAME | 3 CONCEPT',
    ctaText: 'XEM TẠI ĐÂY',
    priceLabel: 'GIÁ CHỈ TỪ:',
    priceValue: '3.650.000Đ',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
  },
  heroMosaic: {
    leftMain: {
      id: 'hm-1',
      title: 'Danh sách các ekip sản xuất hình ảnh & đội tuyển chính thức góp mặt tại giải đấu MSI Việt Nam',
      author: 'mona',
      date: '24 Tháng Mười, 2026',
      category: 'SỰ KIỆN ESPORTS',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=85',
    },
    rightTop: {
      id: 'hm-2',
      title: 'Toàn cảnh sân khấu ánh sáng 360 độ tại vòng Play-In và vòng bảng MSI',
      author: 'mona',
      date: '24 Tháng Mười, 2026',
      category: 'SÂN KHẤU',
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    },
    rightBottomLeft: {
      id: 'hm-3',
      title: 'Hậu trường buổi chụp hình Media Day của các tuyển thủ hàng đầu châu Á',
      author: 'mona',
      date: '23 Tháng Mười, 2026',
      category: 'HẬU TRƯỜNG',
      image:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    },
    rightBottomRight: {
      id: 'hm-4',
      title: 'Nữ streamer & người mẫu ảnh Kiều Anh mở studio livestream tiêu chuẩn 4K',
      author: 'mona',
      date: '23 Tháng Mười, 2026',
      category: 'STUDIO',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
  },
  middleNewsSection: {
    title: 'TIN TỨC',
    leadBanner: {
      id: 'mn-lead',
      title: 'Nhà thờ Đức Bà Paris được tái hiện 3D chân thực nhờ công nghệ quét ảnh Photogrammetry',
      author: 'mona',
      date: '24 Tháng Mười, 2026',
      category: 'CÔNG NGHỆ 3D',
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85',
    },
    articles: [
      {
        id: 'mna-1',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Rạo rực với bộ ảnh cosplay Tamamo no Mae trong Fate/Grand Order chụp tại phim trường cổ trang',
        author: 'mona',
        date: '24 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Tamamo no Mae luôn là một nhân vật truyền cảm hứng mạnh mẽ cho các cosplayer nhờ trang phục kimono cách điệu rực rỡ dưới ánh đèn studio...',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'mna-2',
        badge: 'SỰ KIỆN',
        badgeColor: 'dark',
        title: 'Giải pháp bảo mật bản quyền hình ảnh và tài khoản truyền thông cho các ekip sản xuất quốc tế',
        author: 'mona',
        date: '23 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Việc trang bị xác thực đa lớp và watermark kỹ thuật số giúp các studio bảo vệ tác phẩm nhiếp ảnh trước tình trạng sao chép trái phép...',
        image:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'mna-3',
        badge: 'TIN TỨC',
        badgeColor: 'dark',
        title: 'Cuộc đua công nghệ đồ họa thời gian thực giữa Unreal Engine và Source 2 trong sản xuất phim ảo',
        author: 'mona',
        date: '22 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Trong suốt thập kỷ qua, các nền tảng engine đồ họa đã vượt khỏi ranh giới giải trí để trở thành công cụ dựng bối cảnh phim trường ảo đắc lực...',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'mna-4',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Cosplay Nico trong Devil May Cry 5 cực dễ thương theo phong cách nhiếp ảnh đường phố Á Đông',
        author: 'mona',
        date: '21 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Nico là nữ kỹ sư chế tạo vũ khí cá tính xuất hiện trong Devil May Cry 5, được tái hiện đầy năng động với đạo cụ xe van cổ điển...',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'mna-5',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Khởi đầu tuần mới đầy cảm hứng với loạt ảnh chân dung Cosplay ngoại cảnh nắng mai',
        author: 'mona',
        date: '20 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Sử dụng tấm hắt sáng 5-in-1 kết hợp ống kính khẩu độ lớn f/1.4 giúp làm nổi bật màu mắt lens và phục trang tinh xảo của mẫu ảnh...',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  videoSidebar: {
    title: 'VIDEO',
    episodes: [
      {
        id: 'vep-1',
        title: 'Hậu trường quay MV & Chụp Poster cùng ekip sáng tạo trẻ tại TP.HCM',
        duration: '24:15',
        thumbnail:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'vep-2',
        title: 'Hướng dẫn đánh đèn Gel màu Neon Cyberpunk cho bộ ảnh Cosplay K/DA',
        duration: '15:40',
        thumbnail:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'vep-3',
        title: 'Khám phá phòng điều khiển Livestream 8 luồng camera tại giải đấu mùa xuân',
        duration: '18:22',
        thumbnail:
          'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'vep-4',
        title: 'Trải nghiệm ống kính 85mm f/1.2 GM khi chụp chân dung thiếu sáng tại Studio',
        duration: '11:08',
        thumbnail:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      },
    ],
    cloudPromoTitle: 'DỊCH VỤ LƯU TRỮ & CHIA SẺ FILE RAW TỐC ĐỘ CAO',
    cloudPromoSub: 'Băng thông không giới hạn cho Nhiếp ảnh gia & Studio',
  },
  allArticlesSection: {
    title: 'TẤT CẢ BÀI VIẾT',
    articles: [
      {
        id: 'all-1',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Kai’sa xinh đẹp và bí ẩn trong bộ ảnh cosplay sử dụng kỹ thuật phơi sáng sợi quang học',
        author: 'mona',
        date: '24 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Bộ ảnh Kai’sa gây ấn tượng mạnh nhờ hiệu ứng đôi cánh năng lượng tím huyền ảo được tạo nên trực tiếp tại phòng tối CyberStudio...',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-2',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Thần thái mạnh mẽ trong bộ ảnh cosplay Lara Croft tái hiện hành trình thám hiểm rừng sâu',
        author: 'mona',
        date: '23 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Ai cũng phải công nhận sự đầu tư công phu từ đạo cụ cung tên, hóa trang vết bùn đất cho đến ánh sáng ngược đầy kịch tính...',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-3',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Ngắm bộ ảnh cosplay cung thủ Tasha với trang phục giáp bạc chế tác thủ công tỉ mỉ',
        author: 'mona',
        date: '22 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Từng chi tiết giáp vai bằng nhựa EVA phủ sơn ánh kim được ekip chụp cận cảnh sắc nét với hệ thống đèn студио công suất lớn...',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-4',
        badge: 'COSPLAY',
        badgeColor: 'blue',
        title: 'Cosplay Jeanne d’Arc phiên bản đường đua Racing Queen rực rỡ sắc màu mùa lễ hội',
        author: 'mona',
        date: '21 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Sự kết hợp giữa nhân vật lịch sử giả tưởng và bối cảnh đường đua F1 hiện đại mang lại luồng gió mới mẻ cho album Lookbook...',
        image:
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-5',
        badge: 'CỘNG ĐỒNG',
        badgeColor: 'dark',
        title: 'Immortal Cyber Studio – Không gian phức hợp vừa luyện tập Esports vừa có góc chụp Check-in',
        author: 'mona',
        date: '20 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Với thiết kế ánh sáng RGB đồng bộ và cấu hình máy trạm mạnh mẽ, đây là điểm hẹn lý tưởng cho các buổi offline cộng đồng...',
        image:
          'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-6',
        badge: 'CỘNG ĐỒNG',
        badgeColor: 'dark',
        title: 'Hậu trường dàn diễn viên lồng tiếng thực hiện ghi hình Motion Capture cho nhân vật 3D',
        author: 'mona',
        date: '19 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Khám phá quy trình thu chuyển động gương mặt (Facial Capture) bằng hệ thống camera hồng ngoại độ chính xác cao tại phòng thu...',
        image:
          'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-7',
        badge: 'SỰ KIỆN',
        badgeColor: 'dark',
        title: 'Triển lãm GameCon tại SECC Quận 7 thu hút hàng ngàn nhiếp ảnh gia và cosplayer tham dự',
        author: 'mona',
        date: '18 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Không khí lễ hội sôi động tại Trung tâm Hội chợ và Triển lãm Sài Gòn với hàng trăm gian hàng trải nghiệm công nghệ thực tế ảo VR...',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'all-8',
        badge: 'ĐÁNH GIÁ',
        badgeColor: 'orange',
        title: 'Đánh giá thiết kế đồ họa và hiệu ứng thời tiết động trong siêu phẩm hành động The Division 2',
        author: 'mona',
        date: '17 Tháng Mười, 2026',
        comments: 0,
        excerpt:
          'Hiệu ứng sương mù, mưa giông và ánh nắng xuyên qua tán cây trong bối cảnh Washington D.C được tái hiện chân thực như phim điện ảnh...',
        image:
          'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  lowerRightSidebar: {
    latestTitle: 'BÀI VIẾT MỚI NHẤT',
    latestLinks: [
      {
        title: 'Saint Seiya: Bộ giáp Vàng 3D chính thức lên sóng triển lãm kỹ thuật số',
        date: '24 Tháng Mười, 2026',
      },
      {
        title: 'Bạn sẽ bất ngờ trước 5 bộ phim hoạt hình 3D dùng chung một vũ trụ thiết kế',
        date: '23 Tháng Mười, 2026',
      },
      {
        title: 'Đánh giá HellSign – Nghệ thuật phối màu tương phản tối trong thiết kế bối cảnh',
        date: '22 Tháng Mười, 2026',
      },
      {
        title: 'Xu hướng tích hợp cổng thanh toán trực tuyến khi đặt lịch thuê Studio chụp ảnh',
        date: '21 Tháng Mười, 2026',
      },
    ],
    loungeTitle: 'TRÀ ĐÁ STUDIO',
    loungeLead: {
      id: 'lg-lead',
      title: 'Kai’sa xinh đẹp và bí ẩn trong bộ ảnh cosplay ánh sáng Neon',
      author: 'mona',
      date: '24 Tháng Mười, 2026',
      category: 'COSPLAY',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    },
    loungeSubItems: [
      {
        id: 'lgs-1',
        title: 'Rạo rực với bộ ảnh cosplay Tamamo no Mae cổ trang',
        date: '24 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'lgs-2',
        title: 'Thần thái cuốn hút trong bộ ảnh cosplay Lara Croft',
        date: '23 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'lgs-3',
        title: 'Ngắm cosplay cung thủ Tasha với giáp bạc tinh xảo',
        date: '22 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80',
      },
    ],
    reviewsTitle: 'ĐÁNH GIÁ',
    reviews: [
      {
        id: 'rv-1',
        title: 'Đánh giá 360mobi Cinema – Ứng dụng biên tập video ngắn gọn nhẹ cho giới trẻ',
        date: '24 Tháng Mười, 2026',
        score: '8.5',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'rv-2',
        title: 'Đánh giá Zombotron: Phong cách đồ họa vẽ tay 2D mượt mà từng chuyển động',
        date: '23 Tháng Mười, 2026',
        score: '8.8',
        image:
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'rv-3',
        title: 'Đánh giá kỹ xảo đám đông (Crowd Simulation) trong bom tấn World War Z',
        date: '22 Tháng Mười, 2026',
        score: '9.0',
        image:
          'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'rv-4',
        title: 'Đánh giá thiết kế ánh sáng & hiệu ứng cháy nổ trong After Burner Climax',
        date: '21 Tháng Mười, 2026',
        score: '8.2',
        image:
          'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
};
