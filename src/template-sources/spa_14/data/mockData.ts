export interface BusinessInfo {
  name: string;
  monogram: string;
  scriptOverlay: string;
  founderName: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
}

export interface ImpressiveStatItem {
  id: string;
  value: string;
  label: string;
}

export interface ScentProductItem {
  id: string;
  name: string;
  brandLine: string;
  olfactoryFamily: 'all' | 'woody' | 'floral' | 'aroma-oil';
  familyLabel: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  volume: string;
  price: string;
  image: string;
}

export interface AromaSpaTreatment {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  signatureOil: string;
  description: string;
  image: string;
}

export const business: BusinessInfo = {
  name: 'LAN Perfume & Viện Trị Liệu Hương Thơm Aroma Spa',
  monogram: 'LAN',
  scriptOverlay: 'Lan Perfume',
  founderName: 'CEO Nguyễn Ngọc Lan',
  tagline: 'Gửi Gắm Tâm Hồn Trong Từng Mùi Hương & Liệu Pháp Chăm Sóc Da Tinh Dầu Niche',
  phone: ['0909 317 889', '0313 728 397'],
  email: ['concierge@lanperfume.vn', 'info@themona.global'],
  address: '1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP. Hồ Chí Minh',
  workingHours: '09:30 – 21:30 (Thứ Hai – Chủ Nhật)',
};

export const NAV_ITEMS = [
  { label: 'BỘ SƯU TẬP NƯỚC HOA', href: '#bo-suu-tap' },
  { label: 'CÂU CHUYỆN LAN', href: '#con-so-an-tuong' },
  { label: 'TUYỂN TẬP TẦNG HƯƠNG', href: '#tuyen-tap-huong' },
  { label: 'AROMA SPA & SKINCARE', href: '#aroma-spa' },
  { label: 'TƯ VẤN MÙI HƯƠNG', href: '#tu-van-huong' },
];

export const HERO_COLLECTION = {
  eyebrow: 'Bộ sưu tập nước hoa & Tinh dầu trị liệu',
  title: 'LAN Perfume',
  manifesto:
    'Với niềm tin rằng đam mê và khát vọng cá nhân là chìa khóa dẫn đến thành công, LAN lan tỏa nguồn năng lượng tích cực này đến với mọi người thông qua sự tinh tế và vẻ đẹp của những tầng hương.',
  subManifesto:
    'Sự giao thoa độc bản giữa Nghệ thuật Nước hoa Niche Pháp và Liệu pháp Chăm sóc da Hương thơm (Aromatherapy Skincare) đánh thức mọi giác quan.',
  heroImage:
    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1600&q=85',
  pedestalBottleImage:
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85',
};

export const SMELL_GOOD_SECTION = {
  caveShelfImage:
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
  boutiqueConsultImage:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85',
  quoteHeading: '"Smell good - Feel good"',
  storyParagraph:
    'Lựa chọn một mùi hương tinh tế chạm đến cảm xúc không chỉ đem lại dấu ấn thanh lịch mà hơn cả, dần theo thời gian, hòa quyện vào làn da và khí chất riêng của người sử dụng. CEO Nguyễn Ngọc Lan hi vọng, với tinh thần cùng những nỗ lực của mình, Lan Perfume & Aroma Spa có thể giúp khách hàng lựa chọn được những mùi hương và liệu trình chăm sóc da tinh dầu tốt nhất phù hợp với từng cá nhân và hoàn cảnh để giúp khách hàng cảm thấy tốt hơn, tự tin và thành công hơn.',
  statsHeading: 'Con số ấn tượng',
  stats: [
    { id: 'st-1', value: '80%', label: 'Khách hàng quay lại' },
    { id: 'st-2', value: '100%', label: 'Hàng chính hãng' },
    { id: 'st-3', value: '>300', label: 'Sản phẩm chất lượng' },
    { id: 'st-4', value: '2000+', label: 'Khách hàng hài lòng' },
  ] as ImpressiveStatItem[],
};

export const SCENT_PRODUCTS: ScentProductItem[] = [
  {
    id: 'sc-01',
    name: 'Extrait De Parfum — Crème De Soie & Pearl',
    brandLine: 'LAN Bespoke Privé',
    olfactoryFamily: 'floral',
    familyLabel: 'Hương Hoa Trắng & Xạ Hương',
    topNotes: 'Cam Bergamot Calabria, Trà Trắng, Tiêu Hồng',
    heartNotes: 'Hoa Nhài Sambac, Hoa Diên Vĩ Florentine, Ngọc Lan Tây',
    baseNotes: 'Xạ Hương Trắng, Gỗ Đàn Hương Mysore, Hổ Phách',
    volume: '100ml Extrait',
    price: '4.650.000 ₫',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'sc-02',
    name: 'Oud Royal & Santal Velours',
    brandLine: 'LAN Haute Parfumerie',
    olfactoryFamily: 'woody',
    familyLabel: 'Hương Gỗ Trầm Ấm Sang Trọng',
    topNotes: 'Nhụy Hoa Nghệ Tây, Bạch Đậu Khấu, Vỏ Quế',
    heartNotes: 'Hoa Hồng Damask, Gỗ Tuyết Tùng Atlas, Hoắc Hương',
    baseNotes: 'Trầm Hương Tự Nhiên, Da Thuộc, Vani Madagascar',
    volume: '75ml Eau de Parfum',
    price: '5.200.000 ₫',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'sc-03',
    name: 'Tinh Dầu Dưỡng Da & Trị Liệu Neroli Lumière',
    brandLine: 'LAN Aroma Spa Elixir',
    olfactoryFamily: 'aroma-oil',
    familyLabel: 'Tinh Dầu Chăm Sóc Da & Thư Giãn',
    topNotes: 'Hoa Cam Neroli Tunisia, Lá Petitgrain, Chanh Vàng',
    heartNotes: 'Tinh Dầu Hoa Hồng Bulgaria, Cúc La Mã Hữu Cơ',
    baseNotes: 'Dầu Hạt Jojoba Ép Lạnh, Gỗ Tuyết Tùng, Nhũ Hương',
    volume: '50ml Facial & Body Elixir',
    price: '2.450.000 ₫',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'sc-04',
    name: 'Jardin De Thé Vert & Figuier',
    brandLine: 'LAN Botanique Collection',
    olfactoryFamily: 'floral',
    familyLabel: 'Hương Thảo Mộc & Quả Sung Xanh',
    topNotes: 'Lá Sung Tươi, Trà Xanh Uji, Bưởi Hồng',
    heartNotes: 'Hoa Mẫu Đơn, Lá Violet, Bạch Trà',
    baseNotes: 'Cỏ Hương Bài (Vetiver), Gỗ Tuyết Tùng Trắng',
    volume: '100ml Eau de Parfum',
    price: '3.890.000 ₫',
    image:
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'sc-05',
    name: 'Ambre Nuit & Encens Sacré',
    brandLine: 'LAN Nocturne Reserve',
    olfactoryFamily: 'woody',
    familyLabel: 'Hổ Phách & Nhũ Hương Huyền Bí',
    topNotes: 'Nhũ Hương Oman, Cam Đỏ, Nhục Đậu Khấu',
    heartNotes: 'Nhựa Labdanum, Hoa Phong Lữ Ai Cập',
    baseNotes: 'Hổ Phách Xám, Gỗ Guaiac, Đậu Tonka Rang',
    volume: '100ml Extrait',
    price: '5.600.000 ₫',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'sc-06',
    name: 'Bộ Khuếch Tán Tinh Dầu Đá Núi Lửa & Serum Hoa Trà',
    brandLine: 'LAN Home & Spa Ritual',
    olfactoryFamily: 'aroma-oil',
    familyLabel: 'Trị Liệu Giấc Ngủ & Phục Hồi Da',
    topNotes: 'Oải Hương Provence, Cam Hương, Bạc Hà Á',
    heartNotes: 'Dầu Hoa Trà Nhật Bản, Phong Lữ Hồng',
    baseNotes: 'Gỗ Đàn Hương, Tuyết Tùng Himalaya',
    volume: 'Set 2 Món (Serum 30ml + Oil 50ml)',
    price: '3.150.000 ₫',
    image:
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=85',
  },
];

export const AROMA_SPA_TREATMENTS: AromaSpaTreatment[] = [
  {
    id: 'tr-01',
    title: 'Liệu Pháp Nâng Cơ Tinh Dầu Hoa Hồng Damask & Ngọc Trai',
    subtitle: 'Chăm sóc da mặt Haute Couture 12 bước',
    duration: '90 Phút',
    price: '1.650.000 ₫',
    signatureOil: 'Tinh dầu Rose Otto nguyên chất & Chiết xuất Ngọc Trai Đen',
    description:
      'Kết hợp kỹ thuật massage dẫn lưu bạch huyết vùng cơ mặt của Pháp cùng tinh dầu hoa hồng chưng cất kép giúp cấp ẩm tầng sâu, làm đầy rãnh nhăn và lưu hương thanh khiết suốt 24 giờ.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'tr-02',
    title: 'Trị Liệu Toàn Thân Hương Gỗ Đàn Hương & Đá Thạch Anh Ấm',
    subtitle: 'Giải tỏa căng thẳng thần kinh & cân bằng năng lượng',
    duration: '90 Phút',
    price: '1.450.000 ₫',
    signatureOil: 'Santal Mysore, Nhũ Hương & Dầu Hạnh Nhân Ngọt',
    description:
      'Khách hàng tự chọn mùi hương chủ đạo tại quầy Olfactory Bar trước khi bước vào phòng trị liệu ánh nến, nơi hơi ấm từ đá thạch anh hồng giúp tinh dầu thẩm thấu trọn vẹn qua làn da.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'tr-03',
    title: 'Bespoke Scent & Skin Consultation 1:1 Cùng Chuyên Gia',
    subtitle: 'Thiết kế mùi hương cá nhân hóa & soi da chuyên sâu',
    duration: '60 Phút',
    price: '950.000 ₫',
    signatureOil: 'Pha chế độc bản từ thư viện 180 nốt hương tự nhiên',
    description:
      'Phân tích độ pH làn da, nhịp sinh học và phong cách cá nhân để điều chế 01 lọ nước hoa 30ml mang tên riêng kèm phác đồ chăm sóc da hương thơm tại nhà.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85',
  },
];
