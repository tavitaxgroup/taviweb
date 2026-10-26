export interface FurneutralProduct {
  id: string;
  code: string;
  name: string;
  group: 'new' | 'promo';
  categoryKey: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  image: string;
  dimensions: string;
  material: string;
  warranty: string;
  description: string;
}

export interface FurneutralProject {
  id: string;
  code: string;
  title: string;
  dateDay: string;
  dateMonth: string;
  location: string;
  area: string;
  style: string;
  image: string;
  summary: string;
}

export interface NoiThat29TemplateData {
  business: {
    name: string;
    studioBrand: string;
    productBrand: string;
    tagline: string;
    hotline: string;
    cskh: string;
    phone: string[];
    email: string[];
    address: string;
    districtCity: string;
  };
  heroSlides: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
  comboPromoCard: {
    headline: string;
    dateRange: string;
    cardTitle: string;
    ctaLabel: string;
    details: string;
  };
  products: FurneutralProduct[];
  mosaicCategories: {
    id: string;
    row: 1 | 2;
    spanCols: number;
    bracketTitle: string;
    countLabel?: string;
    categoryKey: string;
    image: string;
  }[];
  projects: FurneutralProject[];
}

export const defaultNoiThat29Data: NoiThat29TemplateData = {
  business: {
    name: 'Furneutral & Mit Interior Design',
    studioBrand: 'Mit Interior Design',
    productBrand: 'furneutral',
    tagline: 'Thiết Kế, Sản Xuất & Thi Công Nội Thất Tối Giản Bắc Âu - Industrial',
    hotline: '0937 731 079',
    cskh: '028 3636 41 76',
    phone: ['0937 731 079', '028 3636 41 76'],
    email: ['studio@furneutral.vn', 'contact@mitinterior.vn'],
    address: '354/89/3 Phan Văn Trị',
    districtCity: 'P.11, Q.Bình Thạnh, TP.HCM'
  },
  heroSlides: [
    {
      id: 'hs-1',
      title: 'KHÔNG GIAN SỐNG INDUSTRIAL & SCANDINAVIAN',
      subtitle: 'Sự kết hợp mộc mạc giữa gạch thô, sắt sơn tĩnh điện và gỗ tự nhiên chuẩn mực bởi Furneutral.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'hs-2',
      title: 'THIẾT KẾ & SẢN XUẤT ĐỒ RỜI TỐI GIẢN',
      subtitle: 'Từng chiếc bàn làm việc, kệ treo tường và bàn trà đều được chế tác tỉ mỉ tại xưởng Bình Thạnh.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'hs-3',
      title: 'THI CÔNG CĂN HỘ & CỬA HÀNG THỜI TRANG TRỌN GÓI',
      subtitle: 'Hơn 150+ dự án căn hộ Vinhomes, The Park và chuỗi showroom thời trang đã bàn giao.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85'
    }
  ],
  comboPromoCard: {
    headline: '3 sản phẩm bất kì, giảm 15%',
    dateRange: '( Từ ngày 08/11/2026 - 23/11/2026 )',
    cardTitle: 'Combo 3 sản phẩm bất kì',
    ctaLabel: 'ĐỌC TIẾP',
    details:
      'Khi khách hàng chọn mua bất kỳ 3 sản phẩm nội thất rời thuộc bộ sưu tập Bàn làm việc (DE), Kệ treo tường (SH) hoặc Tủ lưu trữ (CU) tại showroom Furneutral sẽ được chiết khấu trực tiếp 15% trên tổng hóa đơn kèm miễn phí giao lắp nội thành TP.HCM.'
  },
  products: [
    // SẢN PHẨM MỚI (2 product cards next to the combo promo card)
    {
      id: 'fn-sh08',
      code: 'SH08',
      name: 'Kệ treo tường khung sắt thang 3 tầng gỗ trắng SH08',
      group: 'new',
      categoryKey: 'shelf',
      price: 945000,
      oldPrice: 1050000,
      discountPercent: 10,
      image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=700&q=80',
      dimensions: '800 x 250 x 850 mm',
      material: 'Khung sắt hộp 20x20 sơn tĩnh điện đen mờ + Gỗ MDF chống ẩm phủ Melamine trắng',
      warranty: '24 tháng kết cấu',
      description: 'Kệ treo tường SH08 mang ngôn ngữ thiết kế Bắc Âu thanh thoát, lý tưởng để trưng bày sách, máy ảnh và cây cảnh nhỏ.'
    },
    {
      id: 'fn-cu506',
      code: 'CU506',
      name: 'Tủ kệ lưu trữ 8 ô kèm giỏ mây đan thủ công CU506',
      group: 'new',
      categoryKey: 'chest',
      price: 3500000,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=80',
      dimensions: '1400 x 380 x 820 mm',
      material: 'Gỗ MDF lõi xanh An Cường sơn trắng 2K + 4 học giỏ mây tự nhiên',
      warranty: '24 tháng chính hãng',
      description: 'Sự giao thoa ấm áp giữa khung tủ trắng hiện đại và giỏ mây đan tay truyền thống.'
    },

    // CHƯƠNG TRÌNH KHUYẾN MÃI (3 work desks: DE01, DE04, DE09)
    {
      id: 'fn-de01',
      code: 'DE01',
      name: 'Bàn làm việc liền kệ sách 4 tầng khung sắt DE01',
      group: 'promo',
      categoryKey: 'desks',
      price: 2250000,
      oldPrice: 2500000,
      discountPercent: 10,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80',
      dimensions: '1200 x 600 x 1400 mm',
      material: 'Khung thép sơn tĩnh điện đen + Mặt gỗ Melamine trắng dày 18mm',
      warranty: '24 tháng chính hãng',
      description: 'Tích hợp tháp kệ 4 tầng bên trái giúp lưu trữ tài liệu, sách thiết kế và chậu cây gọn gàng.'
    },
    {
      id: 'fn-de04',
      code: 'DE04',
      name: 'Bàn làm việc chân chữ A tối giản Bắc Âu DE04',
      group: 'promo',
      categoryKey: 'desks',
      price: 1665000,
      oldPrice: 1850000,
      discountPercent: 10,
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80',
      dimensions: '1200 x 600 x 750 mm',
      material: 'Chân sắt ngàm chữ A sơn trắng + Mặt bàn gỗ chống trầy',
      warranty: '24 tháng chính hãng',
      description: 'Kiểu dáng thanh mảnh chuẩn studio sáng tạo, dễ dàng tháo lắp khi di chuyển.'
    },
    {
      id: 'fn-de09',
      code: 'DE09',
      name: 'Bàn làm việc khung sắt đen kèm hộc ngăn kéo DE09',
      group: 'promo',
      categoryKey: 'desks',
      price: 1530000,
      oldPrice: 1700000,
      discountPercent: 10,
      image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=700&q=80',
      dimensions: '1100 x 550 x 750 mm',
      material: 'Khung sắt hộp đen tuyền + Gỗ MDF chống ẩm phủ Melamine đen mờ',
      warranty: '24 tháng chính hãng',
      description: 'Phiên bản All-Black cá tính dành cho kiến trúc sư, lập trình viên và góc làm việc tối giản.'
    }
  ],
  mosaicCategories: [
    {
      id: 'mc-1',
      row: 1,
      spanCols: 3,
      bracketTitle: '[ DESKS - BÀN LÀM VIỆC ]',
      categoryKey: 'desks',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'mc-2',
      row: 1,
      spanCols: 6,
      bracketTitle: '[ COMBO - ƯU ĐÃI THEO BỘ ]',
      categoryKey: 'combo',
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'mc-3',
      row: 1,
      spanCols: 3,
      bracketTitle: '[ TABLE COFFEE - BÀN SOFA ]',
      countLabel: '2 SẢN PHẨM',
      categoryKey: 'coffee',
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'mc-4',
      row: 2,
      spanCols: 3,
      bracketTitle: '[ CHEST OF DRAWER - TỦ CÓ HỘC ]',
      categoryKey: 'chest',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'mc-5',
      row: 2,
      spanCols: 3,
      bracketTitle: '[ TAPDLUY - TAB ĐẦU GIƯỜNG ]',
      categoryKey: 'tapdluy',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'mc-6',
      row: 2,
      spanCols: 3,
      bracketTitle: '[ SHELF - KỆ ]',
      categoryKey: 'shelf',
      image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'mc-7',
      row: 2,
      spanCols: 3,
      bracketTitle: '[ DECOR - VẬT DỤNG TRANG TRÍ ]',
      countLabel: '2 SẢN PHẨM',
      categoryKey: 'decor',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80'
    }
  ],
  projects: [
    {
      id: 'prj-1',
      code: 'STO012',
      title: 'STO012 _ Store shop thời trang Scandinavian_Malay',
      dateDay: '03',
      dateMonth: 'Th11',
      location: 'Kuala Lumpur / TP.HCM',
      area: '120 m²',
      style: 'Scandinavian Minimalist',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80',
      summary: 'Thiết kế mặt tiền cửa hàng hình ngôi nhà gỗ sáng màu kết hợp hệ giá treo sắt mảnh tinh tế.'
    },
    {
      id: 'prj-2',
      code: 'STO011',
      title: 'STO011_Store trưng bày Quận 12',
      dateDay: '03',
      dateMonth: 'Th11',
      location: 'Quận 12, TP.HCM',
      area: '95 m²',
      style: 'Industrial Loft',
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=700&q=80',
      summary: 'Không gian showroom thời trang Denim cá tính với tường gạch thô và hệ đèn rọi ray công nghiệp.'
    },
    {
      id: 'prj-3',
      code: 'AP031',
      title: 'AP031_ Vinhomes Tân Cảng, Q. Bình Thạnh',
      dateDay: '02',
      dateMonth: 'Th11',
      location: 'Vinhomes Central Park, Bình Thạnh',
      area: '88 m² (2 Phòng ngủ)',
      style: 'Modern Nordic',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=700&q=80',
      summary: 'Trọn gói nội thất căn hộ 2PN sử dụng bàn làm việc DE04 và hệ tủ kệ CU506 đồng bộ.'
    },
    {
      id: 'prj-4',
      code: 'AP025',
      title: 'AP025_ CC Thanh Niên, Q.Bình Thạnh',
      dateDay: '16',
      dateMonth: 'Th9',
      location: 'Quận Bình Thạnh, TP.HCM',
      area: '74 m²',
      style: 'Pastel Scandinavian',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80',
      summary: 'Phòng khách ngập tràn ánh sáng tự nhiên với điểm nhấn sofa xanh bạc hà dịu mắt và gương đứng gỗ sồi.'
    },
    {
      id: 'prj-5',
      code: 'AP026',
      title: 'AP026_The Park Quận 7',
      dateDay: '16',
      dateMonth: 'Th9',
      location: 'The Park Residence, Nam Sài Gòn',
      area: '106 m² (3 Phòng ngủ)',
      style: 'Tropical Nordic',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80',
      summary: 'Thiết kế mở liên thông phòng khách và bàn ăn với mảng tường lá nhiệt đới nghệ thuật.'
    },
    {
      id: 'prj-6',
      code: 'AP027',
      title: 'AP027_ CC An Lạc, Q. Bình Tân',
      dateDay: '16',
      dateMonth: 'Th9',
      location: 'Quận Bình Tân, TP.HCM',
      area: '68 m²',
      style: 'Warm Minimalist',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80',
      summary: 'Tối ưu công năng lưu trữ cho gia đình trẻ với tông màu kem - gỗ ấm cúng và decor mây tre đan.'
    }
  ]
};
