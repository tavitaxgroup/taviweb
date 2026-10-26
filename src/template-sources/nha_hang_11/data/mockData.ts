import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface TetVietProductItem {
  id: string;
  name: string;
  rowKey: 'bestseller' | 'hop_qua_tet' | 'gio_tet' | 'san_pham_khac';
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  image: string;
  description: string;
}

export interface TetVietPhilosophyRow {
  id: string;
  title: string;
  excerpt: string;
  ctaText: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export interface NhaHang11Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  topBar: {
    hotline: string;
    email: string;
    loginLabel: string;
    cartLabel: string;
  };
  navLinks: string[];
  catalogIntro: {
    subtitle: string;
    title: string;
    bestSellerHeading: string;
    row2Heading: string;
    row3Heading: string;
    row4Heading: string;
  };
  products: TetVietProductItem[];
  festiveMidBanner: {
    topIntroLine1: string;
    topIntroLine2: string;
    topGallery: string[];
    mainTitle: string;
    subTitle: string;
    descLine1: string;
    descLine2: string;
    bottomGallery: string[];
    poemLeftTitle: string;
    poemLeftLines: string[];
    poemRightTitle: string;
    poemRightLines: string[];
  };
  trustBadges: {
    id: string;
    title: string;
    badgeType: 'new' | 'clean' | 'quality' | 'hotline';
  }[];
  philosophySection: {
    subtitle: string;
    quote: string;
    valuesTitle: string;
    rows: TetVietPhilosophyRow[];
  };
  commitmentSection: {
    leftTitle: string;
    commitments: string[];
    rightTitle: string;
    customerName: string;
    customerQuote: string;
    bgImage: string;
  };
}

export const nha_hang_11DefaultData: NhaHang11Data = {
  templateKey: 'nha_hang_11',
  business: {
    name: 'Nhà Hàng Cung Đình & Ẩm Thực Quà Biếu TetViet Dining',
    tagline: 'Món Quà Sum Vầy • Tinh Hoa Ẩm Thực & Quà Biếu Đoàn Viên Việt Nam',
    description:
      'TetViet Dining (Mona Tết Việt) kết hợp nghệ thuật ẩm thực cung đình và bộ sưu tập hộp quà, giỏ quà Tết đoàn viên thượng hạng. Cam kết nguyên liệu tươi sạch, không chất bảo quản, trao gửi trọn vẹn tấm lòng Chân - Thiện - Mỹ.',
    phone: ['0313728397', '1900 636 648'],
    email: ['info@themona.global', 'cskh@tetvietdining.vn'],
    address: '1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM',
    workingHours: '08:00 - 22:00 (Tất cả các ngày trong tuần)',
    socials: {
      facebook: 'https://facebook.com/tetvietdining',
      instagram: 'https://instagram.com/tetvietdining',
      zalo: 'https://zalo.me/0313728397',
    },
  },
  topBar: {
    hotline: '0313728397',
    email: 'info@themona.global',
    loginLabel: 'Đăng nhập',
    cartLabel: 'Giỏ hàng / 0 ₫',
  },
  navLinks: ['Trang chủ', 'Giới thiệu', 'Cửa hàng', 'Blog', 'Liên hệ'],
  hero: {
    badge: 'TINH HOA ẨM THỰC & QUÀ TẾT ĐOÀN VIÊN',
    title: 'MONA TẾT VIỆT',
    highlight: 'Món quà sum vầy!',
    subtitle:
      '"Tết là khoảnh khắc quan trọng nhất trong năm, nơi mọi người sum vầy bên gia đình, tưởng nhớ tổ tiên và chia sẻ niềm vui với nhau."',
    primaryCta: 'Khám Phá Bộ Sưu Tập',
    secondaryCta: 'Đặt Mâm Cỗ Tết',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85',
  },
  catalogIntro: {
    subtitle: 'Đón xuân 2026 MONA cho ra mắt bộ sưu tập',
    title: 'PHÚ QUÝ ĐOÀN VIÊN DUY NHẤT TẠI VIỆT NAM',
    bestSellerHeading: 'SẢN PHẨM BÁN CHẠY',
    row2Heading: 'HỘP QUÀ TẾT & YẾN TIỆC',
    row3Heading: 'GIỎ TẾT ĐOÀN VIÊN',
    row4Heading: 'SẢN PHẨM & KHAY MỨT KHÁC',
  },
  products: [
    // ROW 1: SẢN PHẨM BÁN CHẠY (5 items)
    {
      id: 'bs-1',
      name: 'Giỏ Tết Hạnh Phúc Gia Đình',
      rowKey: 'bestseller',
      price: '499,000 ₫',
      originalPrice: '523,000 ₫',
      discountBadge: '-5%',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80',
      description: 'Giỏ quà Tết truyền thống gồm trà sen thượng hạng, bánh quy bơ, mứt gừng Huế và rượu vang đỏ.',
    },
    {
      id: 'bs-2',
      name: 'Giỏ Tết Đậm Chất Sống Động',
      rowKey: 'bestseller',
      price: '746,000 ₫',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80',
      description: 'Sự kết hợp tinh tế giữa đặc sản ẩm thực truyền thống và hạt dinh dưỡng cao cấp.',
    },
    {
      id: 'bs-3',
      name: 'Giỏ Tết Hương Vị Truyền Thống',
      rowKey: 'bestseller',
      price: '556,000 ₫',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80',
      description: 'Trọn bộ hương vị cổ truyền với trà Ô Long, bánh đậu xanh rồng vàng và mứt hạt sen.',
    },
    {
      id: 'bs-4',
      name: 'Hộp Quà Tết Sắc Màu Phú Quý',
      rowKey: 'bestseller',
      price: '654,000 ₫',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
      description: 'Hộp quà sơn mài đỏ ép kim sang trọng kèm bánh nướng thủ công và trà cung đình.',
    },
    {
      id: 'bs-5',
      name: 'Hộp Quà Tết Ngọt Ngào Đoàn Viên',
      rowKey: 'bestseller',
      price: '456,000 ₫',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80',
      description: 'Set bánh mứt truyền thống ít ngọt, không chất bảo quản dành tặng người thân.',
    },

    // ROW 2: HỘP QUÀ TẾT (5 items)
    {
      id: 'hq-1',
      name: 'Hộp Quà Tết Sắc Màu',
      rowKey: 'hop_qua_tet',
      price: '654,000 ₫',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
      description: 'Hộp quà đỏ rực rỡ mang thông điệp may mắn và tài lộc đầu xuân.',
    },
    {
      id: 'hq-2',
      name: 'Hộp Quà Tết Ngọt Ngào',
      rowKey: 'hop_qua_tet',
      price: '456,000 ₫',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80',
      description: 'Tuyển tập các loại mứt trái cây sấy dẻo tự nhiên và trà thảo mộc.',
    },
    {
      id: 'hq-3',
      name: 'Hộp Quà Tết Thành Công',
      rowKey: 'hop_qua_tet',
      price: '789,000 ₫',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80',
      description: 'Set quà biếu đối tác doanh nghiệp gồm rượu vang thượng hạng và hạt macca.',
    },
    {
      id: 'hq-4',
      name: 'Hộp Quà Tết Vui Vẻ',
      rowKey: 'hop_qua_tet',
      price: '523,000 ₫',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80',
      description: 'Hộp quà sum vầy thiết kế tinh xảo cho bàn trà ngày xuân thêm ấm cúng.',
    },
    {
      id: 'hq-5',
      name: 'Hộp Quà Tết Rực Rỡ',
      rowKey: 'hop_qua_tet',
      price: '599,000 ₫',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80',
      description: 'Kết hợp hài hòa giữa bánh cổ truyền cung đình và trà hoa cúc chi.',
    },

    // ROW 3: GIỎ TẾT (5 items)
    {
      id: 'gt-1',
      name: 'Giỏ Tết Hạnh Phúc Gia Đình',
      rowKey: 'gio_tet',
      price: '499,000 ₫',
      originalPrice: '523,000 ₫',
      discountBadge: '-5%',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80',
      description: 'Giỏ quà mây đan thủ công đầy đặn cho lời chúc an khang thịnh vượng.',
    },
    {
      id: 'gt-2',
      name: 'Giỏ Tết Đậm Chất Sống Động',
      rowKey: 'gio_tet',
      price: '746,000 ₫',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80',
      description: 'Giỏ quà cao cấp hội tụ 8 món mỹ vị truyền thống ba miền.',
    },
    {
      id: 'gt-3',
      name: 'Giỏ Tết Hương Vị Truyền Thống',
      rowKey: 'gio_tet',
      price: '556,000 ₫',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80',
      description: 'Giữ trọn nét văn hóa Tết Việt với bánh chưng gấc và trà sen Bách Diệp.',
    },
    {
      id: 'gt-4',
      name: 'Giỏ Quà Tết Gia Đình',
      rowKey: 'gio_tet',
      price: '469,000 ₫',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80',
      description: 'Món quà biếu ông bà cha mẹ ý nghĩa với yến chưng đường phèn và trà thảo dược.',
    },
    {
      id: 'gt-5',
      name: 'Giỏ Quà Tết Lộc Phát',
      rowKey: 'gio_tet',
      price: '450,000 ₫',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
      description: 'Giỏ quà khai xuân tài lộc, thiết kế trang nhã và sang trọng.',
    },

    // ROW 4: SẢN PHẨM KHÁC (5 items)
    {
      id: 'sp-1',
      name: 'Khay Mứt Tết Hương Vị Truyền Thống',
      rowKey: 'san_pham_khac',
      price: '289,000 ₫',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80',
      description: 'Khay mứt tròn 6 ngăn gồm hạt dưa, mứt dừa non, mứt sen, hồng sấy và hạt điều.',
    },
    {
      id: 'sp-2',
      name: 'Khay Mứt Tết Sang Trọng Và Hấp Dẫn',
      rowKey: 'san_pham_khac',
      price: '356,000 ₫',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80',
      description: 'Khay sứ xanh ngọc bích nắp gỗ sang trọng đựng 5 loại mứt cung đình.',
    },
    {
      id: 'sp-3',
      name: 'Dây Treo Tài Lộc Xuân Viên Mãn',
      rowKey: 'san_pham_khac',
      price: '36,000 ₫',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80',
      description: 'Phụ kiện trang trí bàn tiệc và cành đào ngày xuân mang lại vượng khí.',
    },
    {
      id: 'sp-4',
      name: 'Dây Treo Tài Lộc Tết Huyền Thoại',
      rowKey: 'san_pham_khac',
      price: '52,000 ₫',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=500&q=80',
      description: 'Dây khánh đồng tiền kết thủ công trang trí phòng khách và sảnh tiệc.',
    },
    {
      id: 'sp-5',
      name: 'Bao Lì Xì May Mắn Hoàng Kim',
      rowKey: 'san_pham_khac',
      price: '49,000 ₫',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=80',
      description: 'Set 10 bao lì xì giấy mỹ thuật ép kim họa tiết rồng phụng sum vầy.',
    },
  ],
  festiveMidBanner: {
    topIntroLine1:
      'Trong ngày Tết, gia đình cùng nhau thăm viếng người thân và bạn bè. Những lời chúc phúc và lì xì may mắn được trao đổi.',
    topIntroLine2:
      'Trẻ em háo hức nhận những lì xì từ người lớn, trong khi người lớn trao đổi những câu chuyện và kỷ niệm đáng nhớ.',
    topGallery: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
    ],
    mainTitle: 'Niềm vui tràn đầy',
    subTitle: 'Gia đình sum vầy – Mâm cơm thịnh vượng – Cười nói, chơi đùa – Lì xì, chúc phúc',
    descLine1: 'Buổi tối, một màn trình diễn pháo hoa lung linh chiếu sáng bầu trời.',
    descLine2:
      'Mọi người tụ tập lại, ngắm nhìn những ánh sáng rực rỡ và ngưỡng mộ vẻ đẹp của pháo hoa. Tiếng cười và niềm vui tràn đầy, tạo nên không khí phấn khích và phấn chấn.',
    bottomGallery: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    ],
    poemLeftTitle: 'Tết đoàn viên gia đình sung túc',
    poemLeftLines: [
      'Về nhà đi con',
      'Nhớ trắng đêm nào – Cả nhà bên nhau rộn rã tiếng cười',
      'Về nhà đi con',
      'Mẹ ngồi trông con – Mong chuyện sẽ đúng muộn',
      'Về nhà đi con , về nhà đi con',
    ],
    poemRightTitle: 'Tết giàu có',
    poemRightLines: [
      'Giàu có tình thân',
      'Giàu có tiếng cười',
      'Giàu có không khí sum vầy',
      'Giàu có kỉ niệm tuổi thơ',
    ],
  },
  trustBadges: [
    { id: 'tb-1', title: 'Hàng mới mỗi ngày', badgeType: 'new' },
    { id: 'tb-2', title: 'Sạch không chất bảo quản', badgeType: 'clean' },
    { id: 'tb-3', title: '100% đảm bảo chất lượng', badgeType: 'quality' },
    { id: 'tb-4', title: 'HOTLINE : 0313728397', badgeType: 'hotline' },
  ],
  philosophySection: {
    subtitle: 'Cái tên Mona chúng tôi đặt hết tấm lòng mình vào đấy',
    quote:
      'Thiên là trời, lương trong lương thiện, thiện lương nhằm hướng đến giá trị cao nhất trong cuộc sống',
    valuesTitle: 'CHÂN – THIỆN – MỸ',
    rows: [
      {
        id: 'ph-1',
        title: 'Chân thành mang tết yêu thương',
        excerpt:
          'Hơn ai hết xuất thân từ vùng quê, từ nhỏ tôi đã yêu đã hiểu đã quý trọng cái không khí Tết Trung Thu & Tết cổ truyền, đã biết nó không phải chỉ là một dịp lễ hội một năm có 1 lần mà là dịp người ta nhận được gì và cho đi những gì...',
        ctaText: 'Đọc thêm',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
        imagePosition: 'left',
      },
      {
        id: 'ph-2',
        title: 'Thiện tâm thiện ý sức khỏe người dùng',
        excerpt:
          'Làm trong ngành nhà hàng khách sạn nên từ lâu tôi đã rất kĩ tính với chất lượng món ăn, khi tôi học nấu ăn tôi cũng đòi hỏi rất khắt khe ở mình, có thể tạm chấp nhận nấu chưa ngon nhưng tuyệt nhiên không cho mình cẩu thả về chất lượng...',
        ctaText: 'Đọc thêm',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
        imagePosition: 'right',
      },
      {
        id: 'ph-3',
        title: 'Mỹ miều hộp bánh đài trang trong ngoài',
        excerpt:
          'Tôi chủ bánh MonaCake với kinh nghiệm 5 năm trong ngành nhà hàng khách sạn tự tin rằng mình luôn đưa ra những sản phẩm hoàn hảo từ nội dung đến hình thức...',
        ctaText: 'Đọc thêm',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
        imagePosition: 'left',
      },
    ],
  },
  commitmentSection: {
    leftTitle: 'Mona Cake cam kết với khách hàng',
    commitments: [
      'Chúng tôi cam kết cung cấp những sản phẩm Tết chất lượng cao, đảm bảo an toàn và tươi ngon.',
      'Tất cả các sản phẩm trên website đều được lựa chọn kỹ càng, đảm bảo đáp ứng sự hài lòng của khách hàng.',
      'Chúng tôi cam kết đảm bảo dịch vụ giao hàng nhanh chóng, đúng hẹn và đảm bảo an toàn cho sản phẩm.',
      'Mọi thông tin cá nhân và giao dịch của khách hàng sẽ được bảo mật tuyệt đối và không được tiết lộ cho bất kỳ bên thứ ba nào.',
      'Chúng tôi cam kết hỗ trợ khách hàng một cách nhiệt tình và chu đáo, đồng hành cùng họ trong quá trình mua sắm và sử dụng sản phẩm Tết.',
    ],
    rightTitle: 'Cảm nhận khách hàng',
    customerName: 'Chị Nguyễn Bích Lan ( Bán Hàng – Gò Vấp, TP.HCM )',
    customerQuote:
      'Trung thu năm ngoái mình lấy sản phẩm Tết ở Mona để bán cho khách, vì là bánh nhà làm nên mình không mua nhiều, chỉ đặt vài hộp được thì mình đặt tiếp, mà thấy bán cũng chạy lắm. Nhớ Tết năm ngoái mình đem ra bao nhiêu là bán hết bấy nhiêu và chủ yếu là khách cũ đã mua thấy ngon nên quay lại.',
    bgImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80',
  },
};

export const defaultData = nha_hang_11DefaultData;
export const mockData = nha_hang_11DefaultData;
export default nha_hang_11DefaultData;
