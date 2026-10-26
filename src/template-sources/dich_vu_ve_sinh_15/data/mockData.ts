export interface ITCleanCareServiceItem {
  id: string;
  name: string;
  category: string;
  discountBadge: string;
  price: string;
  originalPrice: string;
  image: string;
  sku: string;
  specTopLeft: string;
  specTopRight: string;
  specBottomLeft: string;
  specBottomRight: string;
  details: string[];
}

export interface ITCleanCareCategoryTile {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  itemCount: string;
}

export interface ITCleanCareServerPackage {
  id: string;
  title: string;
  scale: string;
  standard: string;
  price: string;
  features: string[];
}

export interface ITCleanCareTemplateData {
  business: {
    name: string;
    brandSub: string;
    tagline: string;
    address: string;
    phone: string[];
    email: string[];
    workingHours: string;
    copyright: string;
  };
  navigation: {
    label: string;
    href: string;
    hasDropdown?: boolean;
  }[];
  heroBanner: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  categorySection: {
    heading: string;
    categories: ITCleanCareCategoryTile[];
  };
  macAndWorkstationSection: {
    heading: string;
    subheading: string;
    tabs: string[];
    items: ITCleanCareServiceItem[];
  };
  cleaningKitsSection: {
    heading: string;
    subheading: string;
    items: ITCleanCareServiceItem[];
  };
  serverRoomSection: {
    badge: string;
    title: string;
    description: string;
    packages: ITCleanCareServerPackage[];
  };
  footer: {
    serviceLinks: string[];
    policyLinks: string[];
    supportCenters: {
      name: string;
      address: string;
    }[];
  };
}

export const defaultITCleanCareData: ITCleanCareTemplateData = {
  business: {
    name: 'MACVN',
    brandSub: 'IT CleanCare VS018',
    tagline:
      'Dịch vụ vệ sinh, tra keo tản nhiệt thiết bị Apple/IT văn phòng & bảo dưỡng phòng Server chuẩn chống tĩnh điện ESD',
    address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh',
    phone: ['076 922 0162', '1900 636 648'],
    email: ['itcare@mona.media', 'demonhunterg@gmail.com'],
    workingHours: '08:00 - 20:00 (Thứ 2 - Chủ Nhật) | Trực bảo trì Server 24/7',
    copyright: '© All rights reserved. Thiết kế website bởi Mona Media',
  },
  navigation: [
    { label: 'Mac', href: '#goi-macbook', hasDropdown: true },
    { label: 'iMac', href: '#danh-muc', hasDropdown: true },
    { label: 'iPad', href: '#danh-muc', hasDropdown: true },
    { label: 'Phụ kiện', href: '#bo-kit-ve-sinh', hasDropdown: true },
    { label: 'Dịch vụ', href: '#phong-server', hasDropdown: true },
    { label: 'Tin tức', href: '#lien-he' },
  ],
  heroBanner: {
    badge: 'CHUẨN PHÒNG SẠCH CHỐNG TĨNH ĐIỆN ESD IEC-61340',
    title: 'Vệ Sinh Bảo Dưỡng Hệ Sinh Thái Apple, PC Văn Phòng & Phòng Máy Chủ',
    subtitle:
      'Loại bỏ 99.9% bụi mịn trong quạt tản nhiệt, tra keo tản nhiệt Thermal Grizzly / Arctic MX-6 chính hãng giúp giảm ngay 12°C - 18°C nhiệt độ CPU/GPU và bảo vệ màn hình Retina.',
    ctaPrimary: 'Đặt Lịch Vệ Sinh Tận Văn Phòng',
    ctaSecondary: 'Xem Bảng Giá Gói Doanh Nghiệp',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=85',
  },
  categorySection: {
    heading: 'Danh Mục Sản Phẩm',
    categories: [
      {
        id: 'cat-imac',
        title: 'iMac & Studio Display',
        subtitle: 'Vệ sinh nội thất & màn hình 5K',
        itemCount: '12 gói bảo dưỡng',
        image:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'cat-ipad',
        title: 'iPad',
        subtitle: 'Khử khuẩn UV & phủ Nano kháng vân tay',
        itemCount: '8 gói dịch vụ',
        image:
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'cat-phukien',
        title: 'Phụ Kiện Vệ Sinh',
        subtitle: 'Bộ Kit quang học, khí nén & chổi ESD',
        itemCount: '24 sản phẩm',
        image:
          'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'cat-macbook',
        title: 'MacBook Pro / Air',
        subtitle: 'Làm sạch quạt kép & tra keo MX-6',
        itemCount: '18 gói chuyên sâu',
        image:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 'cat-server',
        title: 'Mac Studio & Tủ Server',
        subtitle: 'Bảo dưỡng Workstation & Phòng Rack',
        itemCount: '10 gói doanh nghiệp',
        image:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },
  macAndWorkstationSection: {
    heading: 'Gói Vệ Sinh & Bảo Dưỡng Thiết Bị Apple / IT Văn Phòng',
    subheading:
      'Quy trình 12 bước mở máy trên thảm chống tĩnh điện, làm sạch cổng Thunderbolt/MagSafe và cân chỉnh bản lề',
    tabs: [
      'Tất cả gói',
      'MacBook Air / Pro',
      'iMac & Màn hình',
      'Combo Văn phòng',
    ],
    items: [
      {
        id: 'mac-1',
        name: 'Vệ Sinh Toàn Diện MacBook Air M1 2020 & Phủ Nano Màn Hình',
        category: 'MacBook Air / Pro',
        discountBadge: '-15%',
        price: '250.000 ₫',
        originalPrice: '295.000 ₫',
        image:
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=700&q=80',
        sku: 'IT-MBA-M1',
        specTopLeft: 'Apple M1 Pad',
        specTopRight: 'Chuẩn ESD Safe',
        specBottomLeft: 'Thời gian: 35p',
        specBottomRight: 'BH: 06 Tháng',
        details: [
          'Làm sạch bụi mịn bo mạch chủ bằng cọ sợi анти-static và khí nén khô',
          'Thay miếng tản nhiệt Thermal Pad hiệu suất cao 12.8 W/mK',
          'Vệ sinh khe bàn phím Magic Keyboard và đánh bóng vỏ nhôm CNC',
        ],
      },
      {
        id: 'mac-2',
        name: 'Bảo Dưỡng & Tra Keo MacBook Air M2 2022 8GB/16GB Chuyên Sâu',
        category: 'MacBook Air / Pro',
        discountBadge: '-12%',
        price: '290.000 ₫',
        originalPrice: '330.000 ₫',
        image:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80',
        sku: 'IT-MBA-M2',
        specTopLeft: 'Arctic MX-6',
        specTopRight: 'Dung dịch 3M',
        specBottomLeft: 'Thời gian: 45p',
        specBottomRight: 'BH: 06 Tháng',
        details: [
          'Tẩy sạch vết ố lớp chống lóa màn hình Liquid Retina bằng dung dịch Zeiss',
          'Khử khuẩn bề mặt kê tay và Trackpad bằng tia UV-C y tế',
          'Kiểm tra chu kỳ sạc pin và đo nhiệt độ Stress Test trước/sau',
        ],
      },
      {
        id: 'mac-3',
        name: 'Vệ Sinh Kép 2 Quạt Tản Nhiệt MacBook Pro M2 / M3 Pro 2023',
        category: 'MacBook Air / Pro',
        discountBadge: '-8%',
        price: '350.000 ₫',
        originalPrice: '380.000 ₫',
        image:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80',
        sku: 'IT-MBP-M3',
        specTopLeft: 'Grizzly Kryonaut',
        specTopRight: '2 Quạt Tản Nhiệt',
        specBottomLeft: 'Thời gian: 60p',
        specBottomRight: 'BH: 12 Tháng',
        details: [
          'Tháo rời vệ sinh cụm lá đồng Heatsink và 2 quạt tản nhiệt',
          'Tra keo Thermal Grizzly Kryonaut giảm tới 15°C khi Render 4K',
          'Làm sạch cổng HDMI, khe thẻ SDXC và 3 cổng Thunderbolt 4',
        ],
      },
      {
        id: 'mac-4',
        name: 'Combo Bảo Dưỡng 10 Máy Tính Văn Phòng (MacBook Air M1 13-inch / PC)',
        category: 'Combo Văn phòng',
        discountBadge: '-24%',
        price: '1.920.000 ₫',
        originalPrice: '2.500.000 ₫',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
        sku: 'IT-CORP-10',
        specTopLeft: 'Gói 10 Máy',
        specTopRight: 'Tận Văn Phòng',
        specBottomLeft: '2 Kỹ thuật viên',
        specBottomRight: 'Xuất HĐ VAT',
        details: [
          'Đội ngũ kỹ thuật viên mang thiết bị đến làm trực tiếp tại văn phòng công ty',
          'Không làm gián đoạn công việc nhân sự, hoàn thành 10 máy trong 1 buổi',
          'Dán tem bảo hành định kỳ và lập biên bản bàn giao tình trạng phần cứng',
        ],
      },
      {
        id: 'mac-5',
        name: 'Vệ Sinh Nội Thất & Thay Keo iMac 24-inch M1/M3 & iMac 27-inch 5K',
        category: 'iMac & Màn hình',
        discountBadge: '-6%',
        price: '560.000 ₫',
        originalPrice: '595.000 ₫',
        image:
          'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80',
        sku: 'IT-IMAC-5K',
        specTopLeft: 'Ron Màn Hình Zin',
        specTopRight: 'Chuẩn Apple Care',
        specBottomLeft: 'Thời gian: 90p',
        specBottomRight: 'BH: 12 Tháng',
        details: [
          'Sử dụng dao cắt ron màn hình chuyên dụng và dán lại bộ keo viền chính hãng Apple',
          'Hút sạch bụi tích tụ trong buồng quạt đáy máy và loa Stereo',
          'Vệ sinh kèm bàn phím Magic Keyboard và chuột Magic Mouse',
        ],
      },
    ],
  },
  cleaningKitsSection: {
    heading: 'Bộ Kit & Hóa Chất Vệ Sinh Quang Học Chính Hãng',
    subheading:
      'Trang bị chuyên dụng dành cho bộ phận IT Helpdesk và người dùng MacBook / iMac tại văn phòng',
    items: [
      {
        id: 'kit-1',
        name: 'Bộ Kit Vệ Sinh 8-in-1 Cho MacBook, AirPods & Màn Hình Retina',
        category: 'Bộ Kit',
        discountBadge: '-20%',
        price: '185.000 ₫',
        originalPrice: '230.000 ₫',
        image:
          'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=80',
        sku: 'KIT-8IN1',
        specTopLeft: 'Chổi Сhống Tĩnh Điện',
        specTopRight: 'Khăn Microfiber',
        specBottomLeft: 'Dung dịch 50ml',
        specBottomRight: '0% Cồn Amoniac',
        details: [
          'Không chứa cồn hay Amoniac, bảo vệ tuyệt đối lớp phủ chống lóa màn hình MacBook',
          'Tích hợp đầu bút silicon lấy bụi màng loa AirPods và cọ bàn phím',
        ],
      },
      {
        id: 'kit-2',
        name: 'Bình Xịt Khí Nén Áp Lực Cao Thổi Bụi Bo Mạch & Tủ Rack 400ml',
        category: 'Hóa chất IT',
        discountBadge: '-15%',
        price: '125.000 ₫',
        originalPrice: '148.000 ₫',
        image:
          'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80',
        sku: 'KIT-AIR400',
        specTopLeft: 'Khí Khô 99.9%',
        specTopRight: 'Cách Điện 100%',
        specBottomLeft: 'Dung tích: 400ml',
        specBottomRight: 'Kèm Vòi Siêu Nhỏ',
        details: [
          'Thổi bay bụi bẩn trong khe tản nhiệt, nguồn Server và switch mạng mà không gây ngưng tụ hơi nước',
        ],
      },
      {
        id: 'kit-3',
        name: 'Tuýp Keo Tản Nhiệt Arctic MX-6 8g Chính Hãng Cho CPU / MacBook / Server',
        category: 'Keo tản nhiệt',
        discountBadge: '-10%',
        price: '240.000 ₫',
        originalPrice: '268.000 ₫',
        image:
          'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=700&q=80',
        sku: 'KIT-MX6-8G',
        specTopLeft: 'Carbon Filler',
        specTopRight: 'Không Dẫn Điện',
        specBottomLeft: 'Trọng lượng: 8g',
        specBottomRight: 'Độ bền: 5 Năm',
        details: [
          'Độ nhớt tối ưu chống hiện tượng Pump-out trên die chip Apple Silicon và Xeon Server',
        ],
      },
      {
        id: 'kit-4',
        name: 'Máy Thổi & Hút Bụi Cầm Tay Không Dây Cho Phòng IT Helpdesk 65.000 RPM',
        category: 'Thiết bị IT',
        discountBadge: '-18%',
        price: '690.000 ₫',
        originalPrice: '840.000 ₫',
        image:
          'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80',
        sku: 'KIT-BLOWER',
        specTopLeft: 'Động Cơ Không Chổi',
        specTopRight: 'Pin 6000mAh',
        specBottomLeft: 'Lực gió: 65k RPM',
        specBottomRight: 'BH: 12 Tháng',
        details: [
          'Thay thế bình khí nén dùng 1 lần, đi kèm 5 đầu chổi chống tĩnh điện chuyên vệ sinh thùng PC & Server',
        ],
      },
      {
        id: 'kit-5',
        name: 'Chai Dung Dịch Vệ Sinh Màn Hình Quang Học ZEISS 250ml Kèm Khăn',
        category: 'Hóa chất IT',
        discountBadge: '-12%',
        price: '165.000 ₫',
        originalPrice: '188.000 ₫',
        image:
          'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80',
        sku: 'KIT-ZEISS',
        specTopLeft: 'Thương Hiệu Đức',
        specTopRight: 'Chuẩn Màn 5K/6K',
        specBottomLeft: 'Chai: 250ml',
        specBottomRight: 'Khăn Vi Sợi',
        details: [
          'An toàn cho Apple Pro Display XDR, Studio Display và ống kính camera hội nghị truyền hình',
        ],
      },
    ],
  },
  serverRoomSection: {
    badge: 'DỊCH VỤ DOANH NGHIỆP & DATA CENTER',
    title: 'Vệ Sinh Phòng Máy Chủ (Server Room) & Tủ Rack Định Kỳ',
    description:
      'Bụi tĩnh điện tích tụ trong phòng Server là nguyên nhân hàng đầu gây quá nhiệt thiết bị chuyển mạch, chập cháy bo mạch và downtime hệ thống. IT CleanCare triển khai quy trình làm sạch chuẩn ISO 14644-1 Class 8.',
    packages: [
      {
        id: 'srv-1',
        title: 'Gói Vệ Sinh Tủ Rack & Switch Mạng Văn Phòng Vừa',
        scale: 'Từ 01 - 03 Tủ Rack 42U',
        standard: 'Thi công Online không tắt nguồn',
        price: '2.800.000 ₫ / lần',
        features: [
          'Hút bụi màng lọc HEPA trên mặt máy chủ, UPS và Patch Panel',
          'Vệ sinh bên dưới sàn nâng kỹ thuật (Raised Floor) và bó gọn cáp mạng',
          'Đo nhiệt độ hồng ngoại Flir kiểm tra điểm nóng thiết bị',
        ],
      },
      {
        id: 'srv-2',
        title: 'Gói Bảo Dưỡng Phòng Data Center & Hệ Thống Máy Trạm Đồ Họa',
        scale: 'Từ 04 - 10 Tủ Rack + 30 Workstation',
        standard: 'Chuẩn ISO 14644-1 & ESD Safe',
        price: '7.500.000 ₫ / quý',
        features: [
          'Tháo vệ sinh chi tiết từng Blade Server, NAS Storage và tra keo tản nhiệt',
          'Khử ẩm, chống oxy hóa chân tiếp xúc RAM/PCIe bằng dung dịch Contact Cleaner',
          'Hỗ trợ thi công ngoài giờ hành chính (Thứ 7 / Chủ Nhật) bảo mật tuyệt đối',
        ],
      },
    ],
  },
  footer: {
    serviceLinks: [
      'Vệ sinh MacBook Pro / Air lấy liền 45p',
      'Thay keo tản nhiệt iMac & Mac Studio',
      'Bảo dưỡng máy tính văn phòng định kỳ',
      'Vệ sinh phòng Server & Tủ Rack mạng',
      'Cung cấp bộ Kit vệ sinh màn hình Retina',
    ],
    policyLinks: [
      'Cam kết an toàn dữ liệu & chống tĩnh điện',
      'Chính sách bảo hành nhiệt độ 06 tháng',
      'Bảng giá hợp đồng bảo trì IT doanh nghiệp',
      'Quy trình nghiệm thu trực tiếp trước mặt khách',
    ],
    supportCenters: [
      {
        name: 'Trung tâm IT CleanCare Quận 11',
        address: '319 - C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM',
      },
      {
        name: 'Trạm Kỹ thuật Khu Công Nghệ Cao & Quận 1',
        address: 'Nguyễn Thị Minh Khai, Quận 1, TP.HCM (Hỗ trợ tận nơi 30p)',
      },
    ],
  },
};
