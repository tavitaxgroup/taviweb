export interface VfxHardwareCard {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface VfxResourceItem {
  id: string;
  title: string;
  date: string;
  image: string;
}

export interface VfxVideoPlaylistItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}

export interface VfxMainArticle {
  id: string;
  title: string;
  author: string;
  date: string;
  comments: number;
  excerpt: string;
  image: string;
  tag: string;
}

export interface StudioChupAnh15Data {
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
  subNav: {
    label: string;
    href: string;
  }[];
  topPromoBanner: {
    badge: string;
    headline: string;
    highlight: string;
    ctaText: string;
    image: string;
  };
  heroSection: {
    mainFeature: {
      category: string;
      title: string;
      image: string;
    };
    subCards: VfxHardwareCard[];
    presetListTitle: string;
    presetItems: VfxResourceItem[];
    videoWidgetTitle: string;
    playlistBannerTitle: string;
    videos: VfxVideoPlaylistItem[];
  };
  mainFeed: VfxMainArticle[];
  sidebarLatest: {
    title: string;
    headlines: string[];
    promoPosters: {
      id: string;
      title: string;
      subtitle: string;
      cta: string;
      image: string;
    }[];
  };
}

export const defaultStudioChupAnh15Data: StudioChupAnh15Data = {
  business: {
    name: 'Mona VFX',
    subName: 'CGI • CONCEPT ART • CAMERA STUDIO',
    tagline: 'Chuyên Trang Kỹ Xảo Điện Ảnh, Đồ Họa 3D & Thiết Bị Nhiếp Ảnh Full-Frame',
    description:
      'Mona VFX Studio cập nhật xu hướng công nghệ Ray Tracing, kỹ xảo điện ảnh CGI, đánh giá máy ảnh Canon/Sony Full-Frame và chia sẻ kho tài nguyên Preset 3D cho giới sáng tạo.',
    phone: ['076 922 0162', '0908 441 900'],
    email: ['demonhunterg@gmail.com', 'vfx@monastudio.vn'],
    address: '319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    copyright: '© Bản quyền thuộc công ty thiết kế website Mona Media - Mona VFX Studio.',
  },
  topNav: [
    { label: 'TIN TỨC VFX', href: '#tin-tuc-vfx' },
    { label: 'KHO PRESET & LUTS', href: '#kho-preset' },
    { label: 'KHÁM PHÁ 3D', href: '#tin-tuc-vfx' },
    { label: 'CÔNG NGHỆ MÁY ẢNH', href: '#thiet-bi' },
  ],
  subNav: [
    { label: 'CONCEPT ART', href: '#tin-tuc-vfx' },
    { label: 'KỸ XẢO CGI', href: '#tin-tuc-vfx' },
    { label: 'HOẠT HÌNH 3D', href: '#kho-preset' },
    { label: 'PC / WORKSTATION', href: '#thiet-bi' },
    { label: 'UNREAL ENGINE 5', href: '#tin-tuc-vfx' },
    { label: 'MÁY ẢNH FULL-FRAME', href: '#thiet-bi' },
  ],
  topPromoBanner: {
    badge: 'CUỘC THI CONCEPT ART & DỰNG PHIM 3D',
    headline: 'ĐUA TOP SÁNG TẠO KỸ XẢO',
    highlight: 'NHẬN NGAY WORKSTATION RTX & BỘ LENS FULL-FRAME',
    ctaText: 'THAM GIA NGAY',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  heroSection: {
    mainFeature: {
      category: 'PC / WORKSTATION • KỸ XẢO ĐIỆN ẢNH',
      title: 'Life is Strange 2 & Công nghệ ánh sáng điện ảnh Volumetrics hé lộ hậu trường dựng cảnh',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85',
    },
    subCards: [
      {
        id: 'hw-1',
        title: 'Lộ kết quả benchmark cụm ống kính PureView & cảm biến đa tầng trên smartphone nhiếp ảnh...',
        category: 'Công nghệ',
        image:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'hw-2',
        title: 'Thiết bị lưu trữ di động tốc độ cao 700 USD cho ekip quay RAW 8K tại hiện trường...',
        category: 'Thiết bị',
        image:
          'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'hw-3',
        title: 'Những lưu ý quan trọng khi kiểm soát nhiệt độ & độ ẩm phòng đặt máy chủ Render 3D...',
        category: 'Kinh nghiệm Studio',
        image:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
      },
      {
        id: 'hw-4',
        title: 'EOS 6D Mark II là máy ảnh Full Frame đầu tiên của Canon có màn hình xoay lật đa góc...',
        category: 'Máy ảnh',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80',
      },
    ],
    presetListTitle: 'KHO PRESET & VIPCODE',
    presetItems: [
      {
        id: 'pr-1',
        title: 'Tặng bộ 120 LUTs màu điện ảnh Cyberpunk & Cổ trang cho Premiere Pro...',
        date: '24 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'pr-2',
        title: 'Bộ tài nguyên 3D Environment Rừng Bắc Âu chuẩn 8K chính thức mở tải...',
        date: '23 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'pr-3',
        title: 'Thiên Long VFX tung bản cập nhật Shader ánh sáng mặt nước thời gian thực...',
        date: '22 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'pr-4',
        title: 'Tuyệt Phẩm Concept Art – Trọn bộ cọ vẽ Digital Painting cho Photoshop...',
        date: '21 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'pr-5',
        title: 'Kiếm Định Studio tặng 500 mã tải miễn phí thư viện âm thanh Foley...',
        date: '20 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'pr-6',
        title: 'Tam Sinh Cảnh Giới: Gói HDRI bầu trời hoàng hôn độ phân giải 16K...',
        date: '19 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80',
      },
      {
        id: 'pr-7',
        title: 'Thần Khúc 3D: Mở đăng ký khóa học dựng nhân vật CGI cùng đạo diễn...',
        date: '18 Tháng Mười, 2026',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=300&q=80',
      },
    ],
    videoWidgetTitle: 'VIDEO',
    playlistBannerTitle: 'Showreel Kỹ Xảo & Hậu Trường 4K',
    videos: [
      {
        id: 'vv-1',
        title: 'Phân tích lớp kỹ xảo CGI & Ánh sáng trong trailer điện ảnh mới nhất',
        duration: '04:15',
        thumbnail:
          'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'vv-2',
        title: 'Hậu trường quay xe siêu trường bằng hệ thống Russian Arm tốc độ cao',
        duration: '08:20',
        thumbnail:
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'vv-3',
        title: 'Trải nghiệm thực tế dàn máy trạm Render 3D trị giá 700 triệu tại Studio',
        duration: '12:03',
        thumbnail:
          'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'vv-4',
        title: 'Hướng dẫn tổng hợp thiết lập ánh sáng 3 điểm cho phỏng vấn & TVC',
        duration: '06:45',
        thumbnail:
          'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  mainFeed: [
    {
      id: 'vf-1',
      title: 'Kiếm Định Thiên Hạ tặng 500 gói tài nguyên 3D nhân dịp ra mắt Phim trường Ảo LED Volume',
      author: 'mona',
      date: '24 Tháng Mười, 2026',
      comments: 0,
      tag: 'Kỹ Xảo',
      excerpt:
        'Những phần quà tài nguyên 3D chất lượng cao dành cho các nhà làm phim độc lập và nghệ sĩ đồ họa dễ dàng trải nghiệm công nghệ phim trường ảo LED Volume...',
      image:
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-2',
      title: 'Ray Tracing là gì? Đây có phải là tương lai của ngành kỹ xảo điện ảnh và diễn họa 3D?',
      author: 'mona',
      date: '23 Tháng Mười, 2026',
      comments: 0,
      tag: 'Công Nghệ Đồ Họa',
      excerpt:
        'Bài viết hôm nay xin được khái quát về công nghệ dò tia sáng thời gian thực Ray Tracing và cách mà nó thay đổi hoàn toàn quy trình kết xuất ánh sáng tại các studio...',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-3',
      title: 'RTX thế hệ mới vừa ra mắt, ASUS lập tức giới thiệu 3 mẫu card đồ họa cho biên tập viên 8K',
      author: 'mona',
      date: '22 Tháng Mười, 2026',
      comments: 0,
      tag: 'Phần Cứng Studio',
      excerpt:
        'ASUS công bố bộ 3 dòng sản phẩm ROG Strix, Dual và Turbo trang bị hệ thống tản nhiệt tối ưu cho các tác vụ dựng phim RAW, chỉnh màu DaVinci Resolve và kết xuất Blender...',
      image:
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-4',
      title: 'EOS 6D Mark II là máy ảnh Full Frame đầu tiên của Canon sở hữu màn hình cảm ứng xoay lật',
      author: 'mona',
      date: '21 Tháng Mười, 2026',
      comments: 0,
      tag: 'Máy Ảnh DSLR',
      excerpt:
        'Canon 6D Mark II là chiếc máy ảnh DSLR Full-Frame có mức giá dễ tiếp cận nhưng lại sở hữu hệ thống lấy nét Dual Pixel CMOS AF cực nhạy cho cả quay video lẫn chụp studio...',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-5',
      title: 'Kỹ thuật quay rượt đuổi tốc độ cao trong Forza Street: Khi góc máy điện ảnh lên ngôi',
      author: 'mona',
      date: '20 Tháng Mười, 2026',
      comments: 0,
      tag: 'Quay Dựng TVC',
      excerpt:
        'Khám phá cách thiết lập chuyển động camera (Camera Rig) và hiệu ứng Motion Blur giúp các thước phim quảng cáo siêu xe đạt độ chân thực và kịch tính nghẹt thở...',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-6',
      title: 'Vì sao sau hơn 20 năm, phong cách phối màu Neon Noir của series GTA vẫn truyền cảm hứng mạnh mẽ?',
      author: 'mona',
      date: '19 Tháng Mười, 2026',
      comments: 0,
      tag: 'Concept Art',
      excerpt:
        'Bảng màu tương phản giữa ánh đèn neon rực rỡ và bóng tối đô thị luôn là nguồn cảm hứng bất tận cho các nhiếp ảnh gia đường phố và họa sĩ thiết kế bối cảnh...',
      image:
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-7',
      title: '5 smartphone Android sở hữu cụm camera quay Log 10-bit ấn tượng nhất thế giới hiện tại',
      author: 'mona',
      date: '18 Tháng Mười, 2026',
      comments: 0,
      tag: 'Mobile Filmmaking',
      excerpt:
        'Điểm qua những chiếc điện thoại thông minh hỗ trợ quay video chuyên nghiệp giúp các nhà sáng tạo nội dung linh hoạt ghi hình hậu trường chất lượng cao...',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'vf-8',
      title: 'Bảo mật dữ liệu dự án phim & ảnh khách hàng: Những nguyên tắc sống còn cho mọi Studio',
      author: 'mona',
      date: '17 Tháng Mười, 2026',
      comments: 0,
      tag: 'Quản Trị Studio',
      excerpt:
        'Hệ thống lưu trữ NAS RAID kết hợp sao lưu đám mây tự động giúp các studio bảo vệ tuyệt đối hàng chục Terabyte file ảnh RAW và source quay của khách hàng...',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80',
    },
  ],
  sidebarLatest: {
    title: 'Bài viết mới',
    headlines: [
      'Lộ kết quả benchmark cảm biến đa tầng với Snapdragon 8GB RAM',
      'Thiết bị màn hình phụ 700 USD – Trợ thủ đắc lực cho đạo diễn hình ảnh',
      'Những lưu ý quan trọng khi dùng điều hòa trong phòng máy Render 3D',
      'EOS 6D Mark II là máy ảnh Full Frame đầu tiên của Canon có màn xoay lật',
      'Qualcomm ra mắt công nghệ truyền dữ liệu không dây tốc độ cao cho Studio',
      'Những card đồ họa dựng phim 8K tốt nhất năm 2026 xứng đáng đầu tư',
      'Bạn sẽ không tin chiếc PC Workstation dựng kỹ xảo này có giá 700 triệu',
      'ASUS ROG ra mắt dải laptop màn hình OLED chuẩn màu Pantone tại Computex',
      'RTX thế hệ mới vừa ra mắt, Asus lập tức giới thiệu 3 mẫu tản nhiệt nước',
      'Top 5 ứng dụng đo sáng và canh giờ vàng không thể thiếu cho nhiếp ảnh gia',
    ],
    promoPosters: [
      {
        id: 'sp-1',
        title: 'ĐUA TOP DỰNG PHIM 3D',
        subtitle: 'Nhận ngay iPhone Pro Max & Khóa học VFX Master',
        cta: 'CHƠI NGAY',
        image:
          'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'sp-2',
        title: 'THƯ VIỆN LUTS & PRESET 2026',
        subtitle: 'Tải trọn bộ 500 Preset màu điện ảnh cho Lightroom & DaVinci',
        cta: 'TẢI NGAY',
        image:
          'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
};
