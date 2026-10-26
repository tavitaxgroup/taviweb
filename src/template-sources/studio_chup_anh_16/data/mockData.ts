export interface VisionStoryCard {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  category: string;
  image: string;
  excerpt?: string;
}

export interface VisionCategorySection {
  id: string;
  sectionTitle: string;
  leadStory: VisionStoryCard;
  gridStories: VisionStoryCard[];
}

export interface VisionShowCard {
  id: string;
  codeTitle: string;
  viTitle: string;
  subtitle: string;
  bgClass: string;
}

export interface StudioChupAnh16Data {
  business: {
    name: string;
    subName: string;
    dateDisplay: string;
    tagline: string;
    description: string;
    phone: string[];
    email: string[];
    address: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  heroBanner: {
    title: string;
    timestamp: string;
    category: string;
    image: string;
  };
  hotNewsSection: {
    title: string;
    lead: VisionStoryCard;
    grid: VisionStoryCard[];
  };
  mostViewedSidebar: {
    title: string;
    items: {
      id: string;
      title: string;
      timestamp: string;
    }[];
    hardwareSpotlight: {
      badge: string;
      title: string;
      subtitle: string;
      image: string;
    };
  };
  categoryBlocks: VisionCategorySection[];
  editorsPickShows: {
    title: string;
    shows: VisionShowCard[];
  };
  latestFeedSection: {
    title: string;
    filterTabs: string[];
    items: VisionStoryCard[];
    loadMoreText: string;
  };
  footer: {
    col1Links: string[];
    col2Links: string[];
  };
}

export const defaultStudioChupAnh16Data: StudioChupAnh16Data = {
  business: {
    name: 'VISION MEDIA',
    subName: 'MONA STUDIO & BROADCAST',
    dateDisplay: 'THỨ SÁU, 23 THÁNG 10, 2026',
    tagline: 'Tạp Chí Sản Xuất Truyền Thông, Điện Ảnh 8K & Phóng Sự Hình Ảnh Hiện Đại',
    description:
      'VisionMedia cung cấp tin tức chuyên sâu về công nghệ máy quay điện ảnh, hậu trường sản xuất bom tấn, đánh giá thiết bị phòng thu và giải pháp truyền thông đa nền tảng.',
    phone: ['076 922 0162', '0909 772 108'],
    email: ['demonhunterg@gmail.com', 'editorial@visionmedia.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    copyright: '© Thiết kế và lập trình bởi MONA Media • VisionMedia Studio.',
  },
  navigation: [
    { label: 'Tin tức', href: '#tin-hot' },
    { label: 'Video 8K', href: '#ban-bien-tap' },
    { label: 'Đánh Giá Thiết Bị', href: '#thiet-bi-quay' },
    { label: 'Chương trình', href: '#ban-bien-tap' },
    { label: 'Podcast Studio', href: '#tin-moi-nhat' },
    { label: 'Phim Ảnh', href: '#phim-anh' },
  ],
  heroBanner: {
    title: 'Hệ thống máy quay điện ảnh & Engine dựng hình thế hệ mới chính thức hỗ trợ chuẩn 4K/120fps HDR thực tế',
    timestamp: '23/10/2026, 09:30',
    category: 'CÔNG NGHỆ HÌNH ẢNH',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85',
  },
  hotNewsSection: {
    title: 'TIN HOT',
    lead: {
      id: 'hn-lead',
      title: 'Vừa ra mắt dự án phim ngắn sci-fi, Studio châu Á đã gây sốt nhờ kỹ xảo ánh sáng chuẩn Hollywood',
      author: 'Bởi Nguyễn Hoàng Phong',
      timestamp: '23/10/2026, 08:45',
      category: 'Sản xuất Media',
      image:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    },
    grid: [
      {
        id: 'hn-1',
        title: 'Sony & RED chuẩn bị ra mắt dòng máy quay Cinema Line nhỏ gọn chuyên dụng cho ekip độc lập',
        author: 'Bởi Admin Vision',
        timestamp: '23/10/2026, 08:15',
        category: 'Thiết bị',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'hn-2',
        title: 'Sau Alan Walker, ekip đạo diễn hình ảnh Việt Nam hợp tác sản xuất MV âm nhạc chuẩn Dolby Atmos',
        author: 'Bởi Minh Quân',
        timestamp: '22/10/2026, 19:30',
        category: 'TVC & MV',
        image:
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'hn-3',
        title: 'Vì sao các studio lớn đầu tư hệ thống màn hình LED Volume thay thế phông xanh truyền thống?',
        author: 'Bởi Hoàng Phong',
        timestamp: '22/10/2026, 16:20',
        category: 'Phim trường ảo',
        image:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'hn-4',
        title: 'Triển lãm thiết bị nhiếp ảnh & truyền hình quốc tế tặng hàng ngàn gói Preset màu bản quyền',
        author: 'Bởi Admin Vision',
        timestamp: '22/10/2026, 14:10',
        category: 'Sự kiện',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'hn-5',
        title: 'Khám phá quy trình phục dựng màu sắc cho những thước phim tư liệu lịch sử bằng AI hiện đại',
        author: 'Bởi Thanh Trúc',
        timestamp: '21/10/2026, 11:05',
        category: 'Hậu kỳ',
        image:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'hn-6',
        title: 'Bảng xếp hạng 10 ống kính Prime Cine được các đạo diễn hình ảnh (DOP) tin dùng nhất năm 2026',
        author: 'Bởi Hoàng Phong',
        timestamp: '21/10/2026, 09:00',
        category: 'Ống kính',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  mostViewedSidebar: {
    title: 'XEM NHIỀU',
    items: [
      {
        id: 'mv-1',
        title: 'Bí quyết thiết lập ánh sáng Cinematic trong không gian phòng thu nhỏ hẹp',
        timestamp: '23/10/2026',
      },
      {
        id: 'mv-2',
        title: 'Đạo diễn hình ảnh chia sẻ kinh nghiệm quay phóng sự tài liệu dưới thời tiết khắc nghiệt',
        timestamp: '22/10/2026',
      },
      {
        id: 'mv-3',
        title: 'Lý giải nguyên nhân định dạng quay ProRes RAW ngày càng phổ biến trên máy ảnh Mirrorless',
        timestamp: '21/10/2026',
      },
      {
        id: 'mv-4',
        title: 'Hướng dẫn cân chỉnh màu sắc màn hình đồ họa chuẩn Delta E < 1 cho phòng dựng',
        timestamp: '20/10/2026',
      },
      {
        id: 'mv-5',
        title: 'Toei Animation & các studio Nhật Bản ứng dụng kết hợp vẽ tay 2D cùng kỹ xảo 3D Cel-Shading',
        timestamp: '19/10/2026',
      },
    ],
    hardwareSpotlight: {
      badge: 'STUDIO WORKSTATION',
      title: 'TITAN RTX STUDIO',
      subtitle: 'Kiến trúc GPU chuyên dụng cho dựng phim 8K & Render 3D thời gian thực',
      image:
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80',
    },
  },
  categoryBlocks: [
    {
      id: 'tin-tuc-noi-bat',
      sectionTitle: 'TIN TỨC NỔI BẬT',
      leadStory: {
        id: 'nb-lead',
        title: 'Điểm mặt 5 Cinematic Trailer có kỹ thuật dựng hình và âm thanh xuất sắc nhất thập kỷ',
        author: 'Bởi Nguyễn Hoàng Phong',
        timestamp: '22/10/2026, 07:50',
        category: 'Kỹ xảo CGI',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      },
      gridStories: [
        {
          id: 'nb-1',
          title: 'Nhà thờ Đức Bà Paris được phục dựng 3D chi tiết từng viên đá nhờ dữ liệu quét laser & ảnh chụp',
          author: 'Bởi Admin Vision',
          timestamp: '21/10/2026, 15:40',
          category: 'Công nghệ 3D',
          image:
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'nb-2',
          title: 'Hậu trường thiết kế bối cảnh thực tế kết hợp CGI trong các đại cảnh hành động ngoài trời',
          author: 'Bởi Minh Quân',
          timestamp: '21/10/2026, 11:20',
          category: 'Hậu trường',
          image:
            'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'nb-3',
          title: 'Điểm mặt những nhà sáng tạo nội dung hình ảnh có phòng studio cá nhân ấn tượng nhất Việt Nam',
          author: 'Bởi Thanh Trúc',
          timestamp: '20/10/2026, 18:10',
          category: 'Góc máy đẹp',
          image:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
    {
      id: 'thiet-bi-quay',
      sectionTitle: 'CÔNG NGHỆ & THIẾT BỊ STUDIO',
      leadStory: {
        id: 'tb-lead',
        title: 'Trải nghiệm thực tế hệ thống truyền hình ảnh không dây độ trễ 0ms tại phim trường chuyên nghiệp',
        author: 'Bởi Nguyễn Hoàng Phong',
        timestamp: '21/10/2026, 09:15',
        category: 'Thiết bị Broadcast',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      },
      gridStories: [
        {
          id: 'tb-1',
          title: 'Giải pháp bàn trộn hình Livestream đa camera 4K cho sự kiện hội nghị và giải đấu thể thao',
          author: 'Bởi Admin Vision',
          timestamp: '20/10/2026, 14:30',
          category: 'Livestream',
          image:
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'tb-2',
          title: 'Đánh giá chi tiết bản cập nhật Firmware mới nhất giúp tăng tốc độ lấy nét mắt trên máy quay Sony',
          author: 'Bởi Minh Quân',
          timestamp: '19/10/2026, 16:00',
          category: 'Đánh giá',
          image:
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'tb-3',
          title: 'Epic Games nâng cấp bộ công cụ MetaHuman giúp tạo nhân vật kỹ thuật số chân thực chỉ trong 15 phút',
          author: 'Bởi Hoàng Phong',
          timestamp: '18/10/2026, 10:45',
          category: 'Đồ họa 3D',
          image:
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
    {
      id: 'phim-anh',
      sectionTitle: 'PHIM ẢNH & NGHỆ THUẬT THỊ GIÁC',
      leadStory: {
        id: 'pa-lead',
        title: 'Phân tích nghệ thuật sử dụng ống kính Anamorphic và bảng màu IMAX trong các bom tấn siêu anh hùng',
        author: 'Bởi Nguyễn Hoàng Phong',
        timestamp: '20/10/2026, 08:10',
        category: 'Phim Điện Ảnh',
        image:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
      },
      gridStories: [
        {
          id: 'pa-1',
          title: 'Cơn sốt vé chiếu sớm IMAX 3D tại Việt Nam: Khán giả ngày càng khắt khe về chất lượng hình ảnh',
          author: 'Bởi Admin Vision',
          timestamp: '19/10/2026, 08:30',
          category: 'Chiếu rạp',
          image:
            'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'pa-2',
          title: 'Review sớm bom tấn viễn tưởng cuối năm: Đại tiệc thị giác và âm thanh xứng đáng từng khung hình',
          author: 'Bởi Thanh Trúc',
          timestamp: '18/10/2026, 20:15',
          category: 'Đánh giá phim',
          image:
            'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
        },
        {
          id: 'pa-3',
          title: 'Cách các thương hiệu xa xỉ hợp tác cùng đạo diễn điện ảnh để sản xuất TVC nghệ thuật',
          author: 'Bởi Minh Quân',
          timestamp: '17/10/2026, 13:25',
          category: 'Thương hiệu',
          image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
        },
      ],
    },
  ],
  editorsPickShows: {
    title: 'BAN BIÊN TẬP CHỌN',
    shows: [
      {
        id: 'sh-1',
        codeTitle: 'STUDIO SCOOP!',
        viTitle: 'Tiêu Điểm Studio!',
        subtitle: 'Bản tin hậu trường & thiết bị mỗi tuần',
        bgClass: 'from-[#0288d1] to-[#01579b]',
      },
      {
        id: 'sh-2',
        codeTitle: 'UNLOCKED',
        viTitle: 'Mở Khóa Hậu Kỳ',
        subtitle: 'Bí quyết Color Grading & VFX chuyên sâu',
        bgClass: 'from-[#2e7d32] to-[#1b5e20]',
      },
      {
        id: 'sh-3',
        codeTitle: 'BEYOND! 8K',
        viTitle: 'Đoạt Cúp Điện Ảnh',
        subtitle: 'Phân tích góc máy & ống kính Cine',
        bgClass: 'from-[#1565c0] to-[#0d47a1]',
      },
      {
        id: 'sh-4',
        codeTitle: 'NVC VOICE',
        viTitle: 'Podcast Nhiếp Ảnh',
        subtitle: 'Trò chuyện cùng Đạo diễn & Nhiếp ảnh gia',
        bgClass: 'from-[#ef6c00] to-[#c62828]',
      },
    ],
  },
  latestFeedSection: {
    title: 'TIN MỚI NHẤT',
    filterTabs: [
      'Mới nhất',
      'Máy quay 8K',
      'Ống kính Cine',
      'Ánh sáng Studio',
      'Hậu kỳ màu',
      'PC Workstation',
      'Phim điện ảnh',
      'TVC Quảng cáo',
      'Công nghệ AI',
    ],
    items: [
      {
        id: 'lf-1',
        title: 'Tiêu Điểm Studio: Tổng hợp 5 xu hướng quay chụp thương mại bùng nổ nửa cuối năm 2026',
        author: 'Bởi Nguyễn Hoàng Phong',
        timestamp: '23/10/2026, 10:00',
        category: 'Máy quay 8K',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-2',
        title: 'Podcast Nhiếp Ảnh Tập 48: Làm sao để định giá gói chụp Lookbook xứng tầm chất lượng?',
        author: 'Bởi Thanh Trúc',
        timestamp: '23/10/2026, 09:10',
        category: 'TVC Quảng cáo',
        image:
          'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-3',
        title: 'Đoạt Cúp Điện Ảnh: Khám phá hệ thống gimbal chống rung gắn trên xe siêu trường',
        author: 'Bởi Minh Quân',
        timestamp: '22/10/2026, 21:00',
        category: 'Ống kính Cine',
        image:
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-4',
        title: 'Mở Khóa Hậu Kỳ: Quy trình dựng 10 lớp âm thanh vòm cho trailer phim hành động',
        author: 'Bởi Hoàng Phong',
        timestamp: '22/10/2026, 18:30',
        category: 'Hậu kỳ màu',
        image:
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-5',
        title: 'ASUS Republic of Gamers giới thiệu dải laptop Studio màn hình chuẩn màu Pantone tại Computex',
        author: 'Bởi Admin Vision',
        timestamp: '22/10/2026, 15:20',
        category: 'PC Workstation',
        image:
          'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-6',
        title: 'Những kiến thức cơ bản bạn nên biết trước khi lắp đặt hệ thống tản nhiệt nước cho PC Render',
        author: 'Bởi Minh Quân',
        timestamp: '21/10/2026, 12:00',
        category: 'PC Workstation',
        image:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-7',
        title: 'Ngắm những bộ case máy trạm độ theo phong cách Mecha đẹp nhất từng xuất hiện tại Studio',
        author: 'Bởi Hoàng Phong',
        timestamp: '21/10/2026, 09:45',
        category: 'PC Workstation',
        image:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-8',
        title: 'Trầm trồ trước dàn xe truyền hình lưu động 8K trị giá hàng chục tỷ đồng vừa cập bến',
        author: 'Bởi Admin Vision',
        timestamp: '20/10/2026, 17:10',
        category: 'Máy quay 8K',
        image:
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'lf-9',
        title: 'Ứng dụng trí tuệ nhân tạo AI để tách phông và khử nhiễu hạt ISO cao trong nhiếp ảnh sự kiện',
        author: 'Bởi Thanh Trúc',
        timestamp: '20/10/2026, 11:00',
        category: 'Công nghệ AI',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      },
    ],
    loadMoreText: 'XEM THÊM',
  },
  footer: {
    col1Links: [
      'VỀ CHÚNG TÔI',
      'QUẢNG CÁO DOANH NGHIỆP',
      'CHÍNH SÁCH BẢO MẬT',
      'ĐIỀU KHOẢN SỬ DỤNG',
    ],
    col2Links: ['TIÊU CHUẨN NỘI DUNG', 'LIÊN LẠC STUDIO', 'TUYỂN DỤNG MEDIA'],
  },
};
