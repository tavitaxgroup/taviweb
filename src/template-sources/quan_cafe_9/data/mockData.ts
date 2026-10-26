export interface SpringBrewPillarItem {
  id: string
  title: string
  description: string
}

export interface SpringBrewTastingItem {
  id: string
  name: string
  category: string
  price: string
  notes: string
  image: string
}

export interface QuanCafe9TemplateData {
  business: {
    name: string
    brandBadge: string
    tagline: string
    phone: string[]
    email: string[]
    address: string
  }
  chapterOne: {
    monogramLetter: string
    titleSuffix: string
    leadItalic: string
    bodyText: string
    ctaText: string
    framedImage: string
    backdropImage: string
  }
  chapterTwo: {
    monogramLetter: string
    titleSuffix: string
    leadText: string
    highlightBoldText: string
    framedImage: string
  }
  chapterThree: {
    framedImage: string
    pillars: SpringBrewPillarItem[]
    ctaText: string
  }
  tastingCollection: SpringBrewTastingItem[]
}

export const quanCafe9MockData: QuanCafe9TemplateData = {
  business: {
    name: 'THE MONA • SPRINGBREW',
    brandBadge: 'THE MONA',
    tagline: 'Không Gian Cà Phê Đặc Sản, Trà Hoa Xuân & Quà Tặng Nghệ Thuật',
    phone: ['0313728397', '0908 889 990'],
    email: ['info@themona.global', 'concierge@springbrew.vn'],
    address: '1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM',
  },
  chapterOne: {
    monogramLetter: 'T',
    titleSuffix: 'HE MONA',
    leadItalic:
      'Có rất nhiều cách để bày tỏ sự biết ơn của một người dành cho một ai đó mà họ yêu thương và kính trọng. Và một trong số đó chính là việc trao tặng hương vị trà xuân & cà phê đặc sản.',
    bodyText:
      'Không phải ngẫu nhiên mà tại Việt Nam việc thưởng trà, nhâm nhi tách cà phê thơm nồng và trao tặng những hộp quà tinh tế trong dịp đầu xuân lại trở thành một nét văn hóa đặc biệt như hiện nay. Có thể nói mùa xuân là dịp lễ tuyệt vời nhất trong năm để mọi người sẻ chia khoảnh khắc ấm áp bên nhau.',
    ctaText: 'VỀ CHÚNG TÔI',
    framedImage:
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1000&q=80',
    backdropImage:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
  },
  chapterTwo: {
    monogramLetter: 'Q',
    titleSuffix: 'UÀ TẾT & TRÀ XUÂN',
    leadText:
      'Thưởng trà hoa xuân, cà phê đặc sản và trao tặng hộp quà tết là một phần không thể thiếu trong các dịp sum vầy của người Việt Nam. Mỗi tách trà và hộp quà có ý nghĩa tượng trưng cho sự tri ân, lòng biết ơn và sự kính trọng giữa các thành viên trong gia đình, bạn bè, đồng nghiệp và đối tác. Hương vị đầu xuân cũng thể hiện sự chúc phúc, may mắn và thành công trong năm mới.',
    highlightBoldText:
      'Việc lựa chọn phẩm trà hoa, hạt cà phê đặc sản và hộp quà phù hợp, ý nghĩa là một nét văn hóa đẹp của người Việt Nam. Các dòng sản phẩm tuyển chọn tại SpringBrew bao gồm: bánh ngọt thủ công, trà hoa thượng hạng, cà phê Arabica Cầu Đất, mứt trái cây sấy dẻo và bộ ấm trà gốm sứ nghệ thuật.',
    framedImage:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
  },
  chapterThree: {
    framedImage:
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=1000&q=80',
    pillars: [
      {
        id: 'pil-1',
        title: 'Bánh kẹo cao cấp & Cà phê đặc sản',
        description:
          'Bánh ngọt thủ công và hạt cà phê rang mộc là món quà không gia đình nào thiếu trong dịp đầu xuân. Những hộp bánh kẹo cao cấp kết hợp cùng cà phê đặc sản mang ý nghĩa của lời chúc sức khỏe, sự tỉnh táo và sự quan tâm chân thành mà người tặng muốn gửi đến.',
      },
      {
        id: 'pil-2',
        title: 'Trà',
        description:
          'Việc uống trà với người Việt Nam là nét văn hóa thanh tao hàng ngày đều diễn ra. Vừa uống trà hoa xuân vừa hàn huyên vài câu chuyện và hỏi thăm sức khỏe, công việc của nhau là một việc đơn giản mà đầy ý nghĩa. Bên cạnh đó, việc thưởng trà còn tượng trưng cho nét truyền thống hiếu khách của người Việt Nam.',
      },
      {
        id: 'pil-3',
        title: 'Chậu hoa & Không gian thưởng thức',
        description:
          'Mỗi góc không gian tại quán đều được điểm xuyết những cành hoa mộc lan, hoa đào tươi rực rỡ nhất để bàn trà thêm phần thi vị, không khí mùa xuân cũng vì vậy mà thêm rõ ràng. Muôn hoa khoe sắc trong thời tiết ấm áp cùng hương trà quyện tỏa.',
      },
    ],
    ctaText: 'XEM THÊM',
  },
  tastingCollection: [
    {
      id: 'tc-1',
      name: 'Trà Ô Long Bạch Đào Ủ Lạnh',
      category: 'Trà Hoa Xuân',
      price: '85,000₫',
      notes: 'Hương hoa đào thanh khiết, hậu ngọt sâu từ Ô Long cao sơn',
      image:
        'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'tc-2',
      name: 'Cà Phê Đặc Sản Pour-Over Cầu Đất',
      category: 'Specialty Coffee',
      price: '95,000₫',
      notes: 'Nốt hương hoa nhài, cam vàng và caramel mật ong',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'tc-3',
      name: 'Set Trà Ấm Gang & Bánh Ngọt Mùa Xuân',
      category: 'Trà Đạo Đương Đại',
      price: '240,000₫',
      notes: 'Phục vụ tại bàn kèm bánh hạt sen trà xanh & mứt vỏ bưởi',
      image:
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 'tc-4',
      name: 'Hộp Quà Thưởng Trà & Cà Phê Hồng Phúc',
      category: 'Hộp Quà Nghệ Thuật',
      price: '890,000₫',
      notes: 'Gồm 1 hộp trà hoa mộc lan, 1 túi Arabica đặc sản & bộ tách sứ',
      image:
        'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
    },
  ],
}
