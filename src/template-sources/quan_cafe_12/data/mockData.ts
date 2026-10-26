export interface OliviaGiftItem {
  id: string
  name: string
  collection: 'Hộp Quà Trung Thu' | 'Trà & Cà Phê Organic' | 'Quà Doanh Nghiệp VIP'
  price: string
  oldPrice?: string
  badge: string
  contents: string
  minOrder: string
  image: string
}

export interface OliviaB2BPillar {
  id: string
  title: string
  description: string
  metric: string
}

export interface OliviaCampaignStep {
  step: string
  title: string
  detail: string
}

export interface QuanCafe12TemplateData {
  business: {
    name: string
    subBrand: string
    tagline: string
    phone: string[]
    email: string[]
    address: string
  }
  navigation: {
    label: string
    href: string
  }[]
  hero: {
    badgeText: string
    headline: string
    description: string
    primaryCta: string
    secondaryCta: string
    boxBrandTitle: string
    boxBrandSubtitle: string
    showcaseImage: string
    pastryImage: string
  }
  b2bPillars: OliviaB2BPillar[]
  collectionsSection: {
    heading: string
    subtitle: string
    tabs: ('Tất Cả' | 'Hộp Quà Trung Thu' | 'Trà & Cà Phê Organic' | 'Quà Doanh Nghiệp VIP')[]
    items: OliviaGiftItem[]
  }
  campaignSteps: OliviaCampaignStep[]
  volumeTiers: {
    quantity: string
    discount: string
    perks: string
  }[]
  testimonials: {
    id: string
    quote: string
    author: string
    company: string
  }[]
}

export const quanCafe12MockData: QuanCafe12TemplateData = {
  business: {
    name: 'NB Olivia',
    subBrand: 'MAISON GOURMET • THE ART OF GIFTING',
    tagline: 'Tiệm Trà, Cà Phê Đặc Sản Organic & Quà Tặng Thương Hiệu Trọn Gói Cho Doanh Nghiệp',
    phone: ['0909 888 678', '0313728397'],
    email: ['b2b@nbolivia.vn', 'info@themona.global'],
    address: '1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM',
  },
  navigation: [
    { label: 'TRANG CHỦ', href: '#' },
    { label: 'QUÀ DOANH NGHIỆP', href: '#b2b-pillars' },
    { label: 'BỘ SƯU TẬP', href: '#collections' },
    { label: 'TRÀ & CÀ PHÊ ORGANIC', href: '#collections' },
    { label: 'QUY TRÌNH CÁ NHÂN HOÁ', href: '#workflow' },
    { label: 'LIÊN HỆ BÁO GIÁ', href: '#footer' },
  ],
  hero: {
    badgeText: 'MAISON GOURMET BESPOKE GIFTING',
    headline: 'QUÀ TẶNG THƯƠNG HIỆU\nTRỌN GÓI CHO\nDOANH NGHIỆP',
    description:
      'Giỏ quà, hộp quà Trung Thu, mỹ phẩm, trà hoa và cà phê đặc sản organic, cá nhân hoá theo từng chiến dịch tri ân đối tác & khách hàng VIP.',
    primaryCta: 'Nhận Catalogue & Báo Giá B2B',
    secondaryCta: 'Khám Phá Bộ Sưu Tập',
    boxBrandTitle: 'MAISON GOURMET',
    boxBrandSubtitle: 'THE ART OF GIFTING',
    showcaseImage:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    pastryImage:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
  },
  b2bPillars: [
    {
      id: 'pil-1',
      title: 'Cá Nhân Hoá Thương Hiệu 100%',
      description:
        'Ép kim logo, khắc laser, thiết kế đai hộp, thiệp chúc và màu sắc nhận diện riêng theo từng chiến dịch doanh nghiệp.',
      metric: 'Miễn phí thiết kế 3D',
    },
    {
      id: 'pil-2',
      title: 'Trà, Cà Phê & Thực Phẩm Organic',
      description:
        'Tuyển chọn trà Shan Tuyết cổ thụ, cà phê Arabica Cầu Đất chuẩn hữu cơ, hạt dinh dưỡng và bánh nướng ít ngọt.',
      metric: 'Chứng nhận ISO & Organic',
    },
    {
      id: 'pil-3',
      title: 'Chiết Khấu Doanh Nghiệp Hấp Dẫn',
      description:
        'Chính sách giá linh hoạt theo ngân sách từ 350.000đ đến 3.500.000đ/set, xuất hóa đơn VAT đầy đủ.',
      metric: 'Chiết khấu tới 25%',
    },
    {
      id: 'pil-4',
      title: 'Giao Hàng Đa Điểm Đúng Tiến Độ',
      description:
        'Đóng gói tiêu chuẩn 5 sao, hỗ trợ vận chuyển trực tiếp đến tận tay từng đối tác của doanh nghiệp trên toàn quốc.',
      metric: 'Đúng hẹn 99.9%',
    },
  ],
  collectionsSection: {
    heading: 'Bộ Sưu Tập Hộp Quà & Trà Cà Phê Đặc Sản',
    subtitle:
      'Sự giao thoa tinh tế giữa nghệ thuật chế tác hộp quà thủ công và hương vị trà hoa, cà phê organic thượng hạng',
    tabs: ['Tất Cả', 'Hộp Quà Trung Thu', 'Trà & Cà Phê Organic', 'Quà Doanh Nghiệp VIP'],
    items: [
      {
        id: 'ol-1',
        name: 'Hộp Quà Song Nguyệt Hoàng Kim Maison Gourmet',
        collection: 'Hộp Quà Trung Thu',
        price: '1,280,000 ₫',
        oldPrice: '1,450,000 ₫',
        badge: 'SIGNATURE VIP',
        contents: '04 Bánh nướng thượng hạng + 01 Hộp Trà Ô Long Hoàng Kim + 01 Hộp Hạt Macca',
        minOrder: 'Từ 20 hộp (Hỗ trợ ép kim logo)',
        image:
          'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ol-2',
        name: 'Set Trà Shan Tuyết Cổ Thụ & Cà Phê Arabica Organic',
        collection: 'Trà & Cà Phê Organic',
        price: '890,000 ₫',
        badge: '100% ORGANIC',
        contents: '150g Trà Shan Tuyết Hà Giang + 250g Arabica Cầu Đất + Phin Gốm Minh Long',
        minOrder: 'Đặt lẻ hoặc đơn doanh nghiệp',
        image:
          'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ol-3',
        name: 'Hộp Quà Doanh Nghiệp Bạch Ngọc Liên Hoa',
        collection: 'Quà Doanh Nghiệp VIP',
        price: '1,650,000 ₫',
        oldPrice: '1,890,000 ₫',
        badge: 'BESPOKE B2B',
        contents: 'Trà Hoa Mẫu Đơn + Cà Phê Đặc Sản + Mật Ong Rừng & Bộ Tách Sứ Xương',
        minOrder: 'Từ 15 hộp (Tặng kèm túi giấy cao cấp)',
        image:
          'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ol-4',
        name: 'Hộp Quà Thưởng Trà & Bánh Ngọt Ánh Trăng',
        collection: 'Hộp Quà Trung Thu',
        price: '750,000 ₫',
        badge: 'BESTSELLER',
        contents: '02 Bánh trung thu lava trứng chảy + 02 Hộp trà hoa cúc & hoa nhài organic',
        minOrder: 'Từ 30 hộp',
        image:
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ol-5',
        name: 'Giỏ Quà Thịnh Vượng Organic & Mỹ Phẩm Thiên Nhiên',
        collection: 'Quà Doanh Nghiệp VIP',
        price: '2,150,000 ₫',
        badge: 'LUXURY HAMPER',
        contents: 'Cà phê Specialty + Trà Đông Trùng Hạ Thảo + Tinh dầu & Nến thơm thảo mộc',
        minOrder: 'Thiết kế riêng theo ngân sách',
        image:
          'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'ol-6',
        name: 'Hộp Quà Cà Phê Cold Brew & Trà Hoa Xuân NB Olivia',
        collection: 'Trà & Cà Phê Organic',
        price: '620,000 ₫',
        badge: 'NEW ARRIVAL',
        contents: '02 Chai Cold Brew ủ lạnh + 01 Hộp Trà Bạch Đào + Bánh quy hạnh nhân',
        minOrder: 'Giao nhanh trong 24h',
        image:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  campaignSteps: [
    {
      step: '01',
      title: 'Tư Vấn Ngân Sách & Ý Tưởng Chiến Dịch',
      detail:
        'Chuyên viên B2B đề xuất cấu trúc thành phần (trà, cà phê organic, bánh ngọt, mỹ phẩm) tối ưu theo ngân sách doanh nghiệp.',
    },
    {
      step: '02',
      title: 'Thiết Kế Nhận Diện & Duyệt Mẫu Thực Tế',
      detail:
        'Lên bản vẽ 3D hộp quà mang màu sắc thương hiệu, ép kim logo và gửi bộ mẫu thử (tasting sample) tận văn phòng.',
    },
    {
      step: '03',
      title: 'Sản Xuất Đồng Bộ & Giao Hàng Đa Điểm',
      detail:
        'Đóng gói tỉ mỉ theo tiêu chuẩn Maison Gourmet, bàn giao đúng tiến độ kèm đầy đủ chứng từ & hóa đơn VAT.',
    },
  ],
  volumeTiers: [
    { quantity: '20 – 49 Hộp', discount: 'Chiết khấu 10%', perks: 'Miễn phí thiệp & logo decal nổi' },
    { quantity: '50 – 99 Hộp', discount: 'Chiết khấu 15%', perks: 'Miễn phí ép kim logo lên vỏ hộp' },
    { quantity: '100 – 299 Hộp', discount: 'Chiết khấu 20%', perks: 'Tùy chỉnh màu hộp & giao đa điểm' },
    { quantity: 'Trên 300 Hộp', discount: 'Chiết khấu 25%', perks: 'Thiết kế khuôn hộp độc quyền 100%' },
  ],
  testimonials: [
    {
      id: 'tm-1',
      quote:
        '“Bộ hộp quà Maison Gourmet của NB Olivia với tông vàng ánh kim và xanh cổ vịt thực sự sang trọng. Đối tác của chúng tôi đặc biệt khen ngợi hương vị trà Ô Long và bánh ít ngọt.”',
      author: 'Bà Lê Hoàng Lan',
      company: 'Giám đốc Truyền thông – Tập đoàn Tài chính Á Châu',
    },
    {
      id: 'tm-2',
      quote:
        '“Dịch vụ cá nhân hoá theo chiến dịch rất chuyên nghiệp. Từ khâu duyệt mẫu trà cà phê organic đến đóng gói và giao 250 phần quà đều chuẩn xác từng chi tiết.”',
      author: 'Ông Trần Minh Quân',
      company: 'Trưởng phòng Mua sắm – Công ty Công nghệ GlobalTech',
    },
  ],
}
