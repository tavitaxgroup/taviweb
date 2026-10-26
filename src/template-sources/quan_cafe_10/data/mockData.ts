export interface SteamProductItem {
  id: string
  name: string
  price: string
  oldPrice?: string
  discount?: string
  image: string
}

export interface SteamBookShowcaseSection {
  id: string
  heading: string
  tabs: string[]
  posterPosition: 'left' | 'right'
  poster: {
    badge: string
    title: string
    subtitle: string
    ctaText: string
    theme: 'red' | 'blue' | 'teal' | 'mint'
    image: string
  }
  items: SteamProductItem[]
}

export interface SteamPublisherLogo {
  id: string
  name: string
  subtext: string
  accentColor: string
}

export interface QuanCafe10TemplateData {
  business: {
    name: string
    subtitle: string
    phone: string[]
    email: string[]
    address: string
    disclaimer: string
  }
  categoriesSidebar: string[]
  navigation: {
    label: string
    href: string
  }[]
  heroRoadmap: {
    title: string
    subtitle: string
    steps: {
      step: string
      label: string
    }[]
    bannerImage: string
  }
  subBanners: {
    id: string
    badge: string
    title: string
    subtitle: string
    phone?: string
    bgTone: 'navy' | 'amber' | 'emerald'
    image: string
  }[]
  horizontalRows: {
    id: string
    heading: string
    tabs: string[]
    items: SteamProductItem[]
  }[]
  bookSections: SteamBookShowcaseSection[]
  publisherLogos: SteamPublisherLogo[]
}

export const quanCafe10MockData: QuanCafe10TemplateData = {
  business: {
    name: 'MONA.Media / SteamCafe',
    subtitle: 'Không Gian Cà Phê Sách, Học Cụ Sáng Tạo & Co-working',
    phone: ['0313728397', '0978 29 14 29'],
    email: ['info@themona.global', 'hello@steamcafe.vn'],
    address: '1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM',
    disclaimer:
      'SteamCafe nhận đặt sách, cà phê hạt đặc sản và học cụ trực tuyến giao tận nơi, đồng thời đón khách đọc sách & làm việc sáng tạo tại không gian quán tất cả các ngày trong tuần.',
  },
  categoriesSidebar: [
    'Học cụ STEM & Cà phê Sáng tạo',
    'Giáo trình STEM & Sách Kỹ năng',
    'STEM Robotics & Góc Co-working',
    'STEM English & CLB Đọc sách',
    'Sách STEM & Đồ uống Đặc sản',
  ],
  navigation: [
    { label: 'DAILY DEALS', href: '#featured-rows' },
    { label: 'GIỚI THIỆU', href: '#hero' },
    { label: 'BLOG', href: '#book-sections' },
    { label: 'LIÊN HỆ', href: '#footer' },
  ],
  heroRoadmap: {
    title: 'Lộ trình học & Sáng tạo',
    subtitle: 'STEAM - ROBOTICS & BOOK CAFE',
    steps: [
      { step: 'STEP 1', label: 'Nhập môn Đọc sách & Robotics' },
      { step: 'STEP 3', label: 'Khám phá Tư duy & Pha chế' },
      { step: 'STEP 5', label: 'Lập trình nâng cao - A.I' },
      { step: 'STEP 7', label: 'Thiết lập chuyển động thông minh' },
      { step: 'STEP 10', label: 'Áp dụng vào dự án thực tế' },
    ],
    bannerImage:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
  },
  subBanners: [
    {
      id: 'sb-1',
      badge: 'STEAMCUP 2025',
      title: 'NGÀY HỘI CÀ PHÊ SÁCH & CÔNG NGHỆ',
      subtitle: 'Giao lưu độc giả & trình diễn mô hình sáng tạo toàn quốc',
      bgTone: 'navy',
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sb-2',
      badge: '20/08/2025 GRAND PALACE',
      title: 'WORKSHOP SÁNG TẠO & THƯỞNG CÀ PHÊ',
      subtitle: 'Vé tham dự kèm 01 đồ uống thủ công & bộ học cụ',
      phone: '0978 29 14 29',
      bgTone: 'amber',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sb-3',
      badge: 'CLB CUỐI TUẦN',
      title: 'TIẾNG ANH LUYỆN THI IELTS & ĐỌC SÁCH',
      subtitle: 'Thảo luận sách ngoại văn cùng diễn giả tại SteamCafe',
      bgTone: 'emerald',
      image:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80',
    },
  ],
  horizontalRows: [
    {
      id: 'row-1',
      heading: 'NỔI BẬT',
      tabs: ['Sách HOT - Giảm Sốc', 'Bestseller Ngoại Văn'],
      items: [
        {
          id: 'r1-1',
          name: 'Bộ Sổ Tay & Bìa Còng Ghi Chép Sáng Tạo',
          oldPrice: '85,000 ₫',
          price: '80,000 ₫',
          discount: '-6%',
          image:
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r1-2',
          name: 'Dụng Cụ Pha Cà Phê Pour-Over V60',
          oldPrice: '350,000 ₫',
          price: '330,000 ₫',
          discount: '-6%',
          image:
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r1-3',
          name: 'Hộp Cà Phê Đặc Sản Cầu Đất Rang Mộc',
          oldPrice: '170,000 ₫',
          price: '150,000 ₫',
          discount: '-12%',
          image:
            'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r1-4',
          name: 'Nghìn Lẻ Một Đêm (Hộp Quà Sách & Trà)',
          oldPrice: '320,000 ₫',
          price: '192,000 ₫',
          discount: '-40%',
          image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r1-5',
          name: 'Máy Xay Cà Phê Cầm Tay Cối Thép',
          oldPrice: '800,000 ₫',
          price: '780,000 ₫',
          discount: '-3%',
          image:
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r1-6',
          name: 'Kẹp Đánh Dấu Trang Sách Kim Loại',
          price: '35,000 ₫',
          image:
            'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80',
        },
      ],
    },
    {
      id: 'row-2',
      heading: 'VĂN PHÒNG PHẨM & CÀ PHÊ SÁCH',
      tabs: ['Văn học', 'Kinh tế'],
      items: [
        {
          id: 'r2-1',
          name: 'Cuộc Cách Mạng Trong Chạy Bộ & Sức Bền',
          oldPrice: '90,000 ₫',
          price: '72,000 ₫',
          discount: '-20%',
          image:
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r2-2',
          name: 'Đừng Hẹn Ngày Mai (Tặng Kèm Bookmark)',
          oldPrice: '110,000 ₫',
          price: '82,000 ₫',
          discount: '-25%',
          image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r2-3',
          name: 'Bảng Lịch Để Bàn Góc Đọc Sách 2025',
          price: '40,000 ₫',
          image:
            'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r2-4',
          name: 'Bình Giữ Nhiệt Cà Phê Cold Brew Tiện Lợi',
          oldPrice: '300,000 ₫',
          price: '250,000 ₫',
          discount: '-17%',
          image:
            'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r2-5',
          name: 'Sổ Tay Phác Thảo Định Lượng Cao Idea A4',
          oldPrice: '75,000 ₫',
          price: '70,000 ₫',
          discount: '-7%',
          image:
            'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r2-6',
          name: 'Giấy Notes Đánh Dấu Trang – "Sign Here"',
          price: '70,000 ₫',
          image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80',
        },
      ],
    },
    {
      id: 'row-3',
      heading: 'PHỤ KIỆN ĐỌC SÁCH & HỌC CỤ GIÁ TỐT',
      tabs: ['Học cụ giá sốc', 'Phụ kiện bán chạy'],
      items: [
        {
          id: 'r3-1',
          name: 'Ruột Bút Ký Cao Cấp Montblanc Chính Hãng',
          oldPrice: '280,000 ₫',
          price: '250,000 ₫',
          discount: '-11%',
          image:
            'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r3-2',
          name: 'Khung Giá Vẽ Gỗ Thông Góc Workshop',
          oldPrice: '180,000 ₫',
          price: '150,000 ₫',
          discount: '-17%',
          image:
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r3-3',
          name: 'Bút Ký Doanh Nhân Parker Hộp Sang Trọng',
          oldPrice: '480,000 ₫',
          price: '455,000 ₫',
          discount: '-5%',
          image:
            'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r3-4',
          name: 'Bảng Lịch Văn Phòng & Kế Hoạch Đọc Sách',
          price: '40,000 ₫',
          image:
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r3-5',
          name: 'Đèn Bàn Đọc Sách Ánh Sáng Ấm Bảo Vệ Mắt',
          price: '320,000 ₫',
          image:
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 'r3-6',
          name: 'Combo Trà Hoa Cúc & Sổ Tay Ghi Chú Idea',
          oldPrice: '75,000 ₫',
          price: '70,000 ₫',
          discount: '-7%',
          image:
            'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80',
        },
      ],
    },
  ],
  bookSections: [
    {
      id: 'sec-vanhoc',
      heading: 'VĂN HỌC',
      tabs: ['Sắp phát hành', 'Bán chạy', 'Nổi bật'],
      posterPosition: 'left',
      poster: {
        badge: 'HÈ 2025',
        title: 'ROBOTICS & BOOK CAFE ADVANCED',
        subtitle: 'HƯỚNG DẪN CHUYÊN DỤNG & WORKSHOP THỰC HÀNH',
        ctaText: 'ĐĂNG KÝ NGAY',
        theme: 'red',
        image:
          'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80',
      },
      items: [
        {
          id: 'vh-1',
          name: 'NO.6 – Tập 5 (Tặng Kèm Voucher Cà Phê)',
          oldPrice: '55,000 ₫',
          price: '45,000 ₫',
          discount: '-18%',
          image:
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'vh-2',
          name: 'Quidditch Qua Các Thời Đại',
          oldPrice: '110,000 ₫',
          price: '93,000 ₫',
          discount: '-15%',
          image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'vh-3',
          name: 'Nếu Biết Trăm Năm Là Hữu Hạn',
          oldPrice: '94,000 ₫',
          price: '50,000 ₫',
          discount: '-47%',
          image:
            'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'vh-4',
          name: 'Người Thầy Đầu Tiên & Tách Trà Ấm',
          oldPrice: '60,000 ₫',
          price: '39,000 ₫',
          discount: '-35%',
          image:
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'vh-5',
          name: 'Nghìn Lẻ Một Đêm (Ấn Bản Đặc Biệt)',
          oldPrice: '320,000 ₫',
          price: '192,000 ₫',
          discount: '-40%',
          image:
            'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'vh-6',
          name: 'Từ Yêu Đến Thương (Combo Sách & Trà)',
          oldPrice: '269,000 ₫',
          price: '201,000 ₫',
          discount: '-25%',
          image:
            'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      id: 'sec-kinhte',
      heading: 'KINH TẾ',
      tabs: ['Sắp phát hành', 'Bán chạy', 'Nổi bật'],
      posterPosition: 'right',
      poster: {
        badge: 'STEAM ROBOTICS HÈ 2025',
        title: 'TRẢI NGHIỆM KHÔNG GIAN SÁNG TẠO',
        subtitle: 'Học phí khóa trải nghiệm kèm đồ uống: 1,200,000 VNĐ',
        ctaText: 'XEM LỊCH HỌC',
        theme: 'blue',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
      },
      items: [
        {
          id: 'kt-1',
          name: 'Tư Duy Nhanh Và Chậm (Bìa Cứng)',
          oldPrice: '320,000 ₫',
          price: '192,000 ₫',
          discount: '-40%',
          image:
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'kt-2',
          name: 'Tiệm Sách Cũ & Quán Cà Phê Nhỏ',
          oldPrice: '91,000 ₫',
          price: '65,000 ₫',
          discount: '-29%',
          image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'kt-3',
          name: 'Khởi Nghiệp Tinh Gọn Thời Đại Số',
          oldPrice: '269,000 ₫',
          price: '201,000 ₫',
          discount: '-25%',
          image:
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'kt-4',
          name: 'Harry Potter Và Hòn Đá Phù Thủy',
          oldPrice: '130,000 ₫',
          price: '103,000 ₫',
          discount: '-21%',
          image:
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'kt-5',
          name: 'Nghệ Thuật Quản Trị Quán Cà Phê Hiện Đại',
          oldPrice: '55,000 ₫',
          price: '45,000 ₫',
          discount: '-18%',
          image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'kt-6',
          name: 'Những Tấm Lòng Cao Cả',
          oldPrice: '70,000 ₫',
          price: '42,000 ₫',
          discount: '-40%',
          image:
            'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      id: 'sec-nuoidaycon',
      heading: 'NUÔI DẠY CON & PHÁT TRIỂN',
      tabs: ['Sắp phát hành', 'Bán chạy', 'Nổi bật'],
      posterPosition: 'left',
      poster: {
        badge: 'CLB TIẾNG ANH STEAMCAFE',
        title: 'TIẾNG ANH GIAO TIẾP CHUYÊN NGHIỆP',
        subtitle: 'Tiếng Anh dành cho công việc & Thảo luận sách hàng tuần',
        ctaText: 'THAM GIA CLB',
        theme: 'teal',
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
      },
      items: [
        {
          id: 'ndc-1',
          name: 'Tiệm Sách Mùa Xuân & Những Ước Mơ',
          oldPrice: '91,000 ₫',
          price: '65,000 ₫',
          discount: '-29%',
          image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'ndc-2',
          name: 'Cùng Con Khám Phá Thế Giới Khoa Học',
          oldPrice: '110,000 ₫',
          price: '93,000 ₫',
          discount: '-15%',
          image:
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'ndc-3',
          name: 'Điều Kì Diệu Của Tiệm Tạp Hóa Namiya',
          oldPrice: '105,000 ₫',
          price: '89,000 ₫',
          discount: '-15%',
          image:
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'ndc-4',
          name: 'Ông Trăm Tuổi Trèo Qua Cửa Sổ Và Biến Mất',
          oldPrice: '170,000 ₫',
          price: '135,000 ₫',
          discount: '-21%',
          image:
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'ndc-5',
          name: 'Sức Mạnh Của Tĩnh Tâm Giữa Phố Thị',
          oldPrice: '87,000 ₫',
          price: '78,000 ₫',
          discount: '-10%',
          image:
            'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'ndc-6',
          name: 'Những Tấm Lòng Cao Cả (Tái Bản)',
          oldPrice: '70,000 ₫',
          price: '42,000 ₫',
          discount: '-40%',
          image:
            'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      id: 'sec-tamly',
      heading: 'TÂM LÝ – KỸ NĂNG',
      tabs: ['Sắp phát hành', 'Bán chạy', 'Nổi bật'],
      posterPosition: 'right',
      poster: {
        badge: 'GÓC SỐNG XANH & ĐỌC SÁCH',
        title: 'BẠN LÀ NHỮNG GÌ BẠN ĂN & ĐỌC 6 THÁNG TRƯỚC',
        subtitle: 'Thực đơn Healthy Detox & Tủ sách Dinh dưỡng tại SteamCafe',
        ctaText: 'Khám Phá Ngay!',
        theme: 'mint',
        image:
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80',
      },
      items: [
        {
          id: 'tl-1',
          name: 'Đừng Hẹn Ngày Mai – Sống Trọn Từng Phút Giây',
          oldPrice: '110,000 ₫',
          price: '82,000 ₫',
          discount: '-25%',
          image:
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'tl-2',
          name: 'Điều Kì Diệu Của Sự Tập Trung Sâu',
          oldPrice: '105,000 ₫',
          price: '89,000 ₫',
          discount: '-15%',
          image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'tl-3',
          name: 'Mỗi Lần Vấp Ngã Là Một Lần Trưởng Thành',
          oldPrice: '120,000 ₫',
          price: '72,000 ₫',
          discount: '-40%',
          image:
            'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'tl-4',
          name: 'Ông Trăm Tuổi Trèo Qua Cửa Sổ',
          oldPrice: '170,000 ₫',
          price: '135,000 ₫',
          discount: '-21%',
          image:
            'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'tl-5',
          name: 'Từ Yêu Đến Thương – Hạnh Phúc Giản Đơn',
          oldPrice: '269,000 ₫',
          price: '201,000 ₫',
          discount: '-25%',
          image:
            'https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 'tl-6',
          name: '100 Câu Chuyện Hay Dành Cho Bé Trai',
          oldPrice: '67,000 ₫',
          price: '45,000 ₫',
          discount: '-33%',
          image:
            'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
  ],
  publisherLogos: [
    { id: 'pub-1', name: 'CAMBRIDGE', subtext: 'International Examinations', accentColor: '#b91c1c' },
    { id: 'pub-2', name: 'CENGAGE', subtext: 'Learning', accentColor: '#0284c7' },
    { id: 'pub-3', name: 'HarperCollins', subtext: 'PUBLISHERS', accentColor: '#1d4ed8' },
    { id: 'pub-4', name: 'hachette', subtext: 'LIVRE & CAFE', accentColor: '#334155' },
    { id: 'pub-5', name: 'McGraw Hill', subtext: 'Education', accentColor: '#dc2626' },
    { id: 'pub-6', name: 'macmillan', subtext: 'education', accentColor: '#e11d48' },
    { id: 'pub-7', name: 'OXFORD', subtext: 'UNIVERSITY PRESS', accentColor: '#1e3a8a' },
    { id: 'pub-8', name: 'Parragon', subtext: 'BOOKS & MEDIA', accentColor: '#7c3aed' },
    { id: 'pub-9', name: 'PEARSON', subtext: 'Longman', accentColor: '#0369a1' },
    { id: 'pub-10', name: 'Penguin', subtext: 'Random House', accentColor: '#ea580c' },
    { id: 'pub-11', name: 'STERLING', subtext: 'PUBLISHING', accentColor: '#15803d' },
    { id: 'pub-12', name: 'USBORNE', subtext: 'CHILDREN BOOKS', accentColor: '#2563eb' },
  ],
}
