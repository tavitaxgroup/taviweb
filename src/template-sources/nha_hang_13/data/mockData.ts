import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface TohokuAirCargoItem {
  id: string;
  japaneseName: string;
  vietnameseName: string;
  prefecture: string;
  flightSchedule: string;
  seasonNote: string;
  pricePer100g: string;
  image: string;
}

export interface TohokuMenuItem {
  id: string;
  name: string;
  jpTitle: string;
  category: 'sashimi_air' | 'omakase_sushi' | 'wagyu_hotpot' | 'kaiseki_set';
  categoryLabel: string;
  price: string;
  originTag: string;
  badge?: string;
  image: string;
  description: string;
}

export interface TohokuBranchItem {
  id: string;
  city: string;
  branchName: string;
  address: string;
  hotline: string;
  vipRooms: string;
  openingHours: string;
  image: string;
}

export interface NhaHang13Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  brandLogo: {
    prefix: string;
    suffix: string;
    subline: string;
  };
  navItems: string[];
  airCargoSection: {
    badge: string;
    title: string;
    subtitle: string;
    items: TohokuAirCargoItem[];
  };
  menuCategories: {
    id: 'all' | 'sashimi_air' | 'omakase_sushi' | 'wagyu_hotpot' | 'kaiseki_set';
    label: string;
  }[];
  menuItems: TohokuMenuItem[];
  branches: TohokuBranchItem[];
  omakaseHighlight: {
    badge: string;
    title: string;
    chefName: string;
    chefTitle: string;
    description: string;
    courses: string[];
    pricePerGuest: string;
    image: string;
  };
}

export const nha_hang_13DefaultData: NhaHang13Data = {
  templateKey: 'nha_hang_13',
  business: {
    name: 'Tohoku Japanese Restaurant — Chuỗi Nhà Hàng Nhật Bản Cao Cấp',
    tagline: 'Chuỗi Nhà Hàng Nhật Bản Cao Cấp Tại Việt Nam • Nguyên Liệu Hàng Bay Từ Nhật',
    description:
      'Tohoku là chuỗi nhà hàng Nhật Bản cao cấp với 3 chi nhánh tại Hà Nội, Hải Phòng và Nghệ An. Tự hào nhập khẩu trực tiếp hải sản tươi sống bằng đường hàng không ANA mỗi tuần từ chợ cá Toyosu (Tokyo), vùng biển Tohoku và Hokkaido.',
    phone: ['1900 886 899', '0918 688 999'],
    email: ['reservation@tohokurestaurant.vn', 'vip@tohokurestaurant.vn'],
    address: 'Hệ thống 3 chi nhánh: Quận Ba Đình (Hà Nội) • Quận Ngô Quyền (Hải Phòng) • TP. Vinh (Nghệ An)',
    workingHours: '10:30 - 14:00 & 17:30 - 22:30 (Thứ 2 - Chủ Nhật)',
    socials: {
      facebook: 'https://facebook.com/tohokurestaurantvn',
      instagram: 'https://instagram.com/tohokurestaurantvn',
      zalo: 'https://zalo.me/0918688999',
    },
  },
  brandLogo: {
    prefix: 'TOH',
    suffix: 'KU',
    subline: 'CHUỖI NHÀ HÀNG NHẬT BẢN CAO CẤP TẠI VIỆT NAM',
  },
  navItems: [
    'Trang Chủ',
    'Hải Sản Hàng Bay ANA',
    'Thực Đơn Thượng Hạng',
    'Trải Nghiệm Omakase',
    '3 Chi Nhánh (HN • HP • NA)',
    'Đặt Bàn Phòng VIP',
  ],
  hero: {
    badge: 'ANA AIR CARGO • HẢI SẢN TƯƠI SỐNG TỪ CHỢ CÁ TOYOSU & VÙNG TOHOKU',
    title: 'CHUỖI NHÀ HÀNG NHẬT BẢN CAO CẤP TẠI VIỆT NAM',
    highlight: 'Ba chi nhánh Hà Nội, Hải Phòng, Nghệ An',
    subtitle:
      'Ba chi nhánh Hà Nội, Hải Phòng, Nghệ An, nguyên liệu hàng bay từ Nhật',
    primaryCta: 'Đặt Bàn Phòng VIP',
    secondaryCta: 'Khám Phá Hải Sản Hàng Bay',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1600&q=85',
  },
  airCargoSection: {
    badge: 'LỊCH HẠ CÁNH CHUYÊN CƠ ANA CARGO MỖI THỨ 3 & THỨ 6',
    title: 'Nguyên Liệu Hải Sản Hàng Bay Trực Tiếp Từ Nhật Bản',
    subtitle:
      'Bảo quản chuẩn nhiệt độ 0°C – 2°C trong thùng giữ nhiệt chuyên dụng từ cảng Narita/Haneda về thẳng bếp lạnh 3 chi nhánh Hà Nội, Hải Phòng, Nghệ An chỉ trong 18 giờ.',
    items: [
      {
        id: 'ac-1',
        japaneseName: '金目鯛 • Kinmedai',
        vietnameseName: 'Cá Hồng Mắt Vàng Chiba / Shizuoka',
        prefecture: 'Vùng biển Izu - Nhật Bản',
        flightSchedule: 'Chuyến bay NH897 (Thứ 3 & Thứ 6)',
        seasonNote: 'Lớp mỡ dưới da béo ngậy, tuyệt hảo khi khò lửa Aburi',
        pricePer100g: '680.000 ₫ / 100g',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'ac-2',
        japaneseName: '縞鯵 • Shima-Aji',
        vietnameseName: 'Cá Khế Vằn Hoàng Kim Ehime',
        prefecture: 'Ehime / Kyushu - Nhật Bản',
        flightSchedule: 'Chuyến bay NH897 (Thứ 3 & Thứ 6)',
        seasonNote: 'Thịt trong suốt, giòn sần sật và vị ngọt hậu thanh tao',
        pricePer100g: '590.000 ₫ / 100g',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'ac-3',
        japaneseName: '毛ガニ • Kegani',
        vietnameseName: 'Cua Lông Hokkaido Tươi Sống',
        prefecture: 'Vùng biển Okhotsk - Hokkaido',
        flightSchedule: 'Chuyến bay NH897 (Thứ 5 & Thứ 7)',
        seasonNote: 'Gạch cua Kanimiso béo đậm đà và thớ thịt ngọt lịm',
        pricePer100g: '490.000 ₫ / 100g',
        image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80',
      },
      {
        id: 'ac-4',
        japaneseName: '牡丹海老 • Botan Ebi',
        vietnameseName: 'Tôm Mẫu Đơn Đỏ Khổng Lồ',
        prefecture: 'Hokkaido - Nhật Bản',
        flightSchedule: 'Chuyến bay NH897 (Thứ 3 & Thứ 6)',
        seasonNote: 'Thưởng thức Sashimi tươi ngọt kèm đầu tôm chiên giòn Tempura',
        pricePer100g: '720.000 ₫ / 100g',
        image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  menuCategories: [
    { id: 'all', label: 'Tất Cả Tuyệt Phẩm' },
    { id: 'sashimi_air', label: 'Sashimi Hàng Bay' },
    { id: 'omakase_sushi', label: 'Sushi & Omakase' },
    { id: 'wagyu_hotpot', label: 'Wagyu A5 & Lẩu Nhật' },
    { id: 'kaiseki_set', label: 'Set Tiệc Kaiseki VIP' },
  ],
  menuItems: [
    {
      id: 'mn-1',
      name: 'Thuyền Sashimi Hoàng Đế Tohoku (7 Loại Cá Hàng Bay)',
      jpTitle: '東北ロイヤル刺身盛り合わせ',
      category: 'sashimi_air',
      categoryLabel: 'Sashimi Hàng Bay',
      price: '3.680.000 ₫',
      originTag: 'Toyosu Air-Flown',
      badge: 'Signature Tohoku',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80',
      description:
        'Tuyển tập bụng cá ngừ vây xanh Otoro, cá hồng mắt vàng Kinmedai, cá khế vằn Shima-Aji, tôm mẫu đơn Botan Ebi, sò điệp Hotate và nhum biển Uni Hokkaido.',
    },
    {
      id: 'mn-2',
      name: 'Set Nigiri Thượng Hạng Bếp Trưởng (10贯 Edomae Sushi)',
      jpTitle: '特上江戸前握り寿司十貫',
      category: 'omakase_sushi',
      categoryLabel: 'Sushi & Omakase',
      price: '1.850.000 ₫',
      originTag: 'Gạo Koshihikari Niigata',
      badge: 'Itamae Choice',
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=700&q=80',
      description:
        'Cơm sushi trộn giấm đỏ Akazu ủ 3 năm kết hợp 10 lát hải sản tươi hàng bay được nắm trực tiếp bởi Bếp trưởng Nhật Bản.',
    },
    {
      id: 'mn-3',
      name: 'Cua Lông Hokkaido Kegani Hấp Rượu Sake Junmai',
      jpTitle: '北海道産毛ガニの酒蒸し',
      category: 'sashimi_air',
      categoryLabel: 'Sashimi Hàng Bay',
      price: '2.950.000 ₫',
      originTag: 'Hokkaido Live Crab',
      badge: 'Theo Mùa',
      image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80',
      description:
        'Cua lông Hokkaido tách sẵn vỏ khéo léo, giữ trọn phần gạch cua Kanimiso vàng óng béo ngậy chấm giấm Tosa.',
    },
    {
      id: 'mn-4',
      name: 'Thăn Nội Bò Wagyu A5 Sendai Nướng Đá Núi Lửa Fuji',
      jpTitle: '仙台牛A5シャトーブリアン石焼',
      category: 'wagyu_hotpot',
      categoryLabel: 'Wagyu A5 & Lẩu Nhật',
      price: '2.450.000 ₫',
      originTag: 'Sendai - Vùng Tohoku',
      badge: 'Wagyu A5 BMS 11',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      description:
        'Thịt bò Sendai Wagyu A5 trứ danh vùng Tohoku với vân mỡ cẩm thạch tan chảy ngay đầu lưỡi, dùng kèm muối hồng và wasabi tươi mài.',
    },
    {
      id: 'mn-5',
      name: 'Cá Hồng Mắt Vàng Kinmedai Nấu Sốt Tương Ngọt Nitsuke',
      jpTitle: '金目鯛の姿煮付け',
      category: 'wagyu_hotpot',
      categoryLabel: 'Wagyu A5 & Lẩu Nhật',
      price: '1.680.000 ₫',
      originTag: 'Chiba / Izu',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80',
      description:
        'Món cá om truyền thống cung đình Nhật Bản với nước tương Mirin, rượu Sake và gừng non làm dậy vị béo ngọt của cá Kinmedai.',
    },
    {
      id: 'mn-6',
      name: 'Thực Đơn Yến Tiệc Kaiseki Mùa Thu Vùng Tohoku (9 Món)',
      jpTitle: '東北四季懐石コース',
      category: 'kaiseki_set',
      categoryLabel: 'Set Tiệc Kaiseki VIP',
      price: '2.600.000 ₫ / khách',
      originTag: 'Phòng Tatami VIP',
      badge: 'Đặt Trước 24h',
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=700&q=80',
      description:
        'Hành trình ẩm thực 9 món chuẩn Kaiseki phục vụ riêng biệt trong phòng Tatami tiếp khách ngoại giao và đối tác cấp cao.',
    },
  ],
  omakaseHighlight: {
    badge: 'QUẦY HINOKI OMAKASE 12 GHẾ RIÊNG BIỆT',
    title: 'Nghệ Thuật Edomae Omakase Cùng Tổng Bếp Trưởng Nhật Bản',
    chefName: 'Itamae Kenji Takahashi',
    chefTitle: '25 Năm Kinh Nghiệm Tại Ginza (Tokyo) & Sendai (Tohoku)',
    description:
      'Tại quầy gỗ Bách hương Hinoki 200 năm tuổi, thực khách được chiêm ngưỡng từng đường dao Sashimi sắc bén và thưởng thức những miếng Nigiri vừa chạm độ ấm 37°C ngay từ bàn tay nghệ nhân.',
    courses: [
      'Zensai: 3 món khai vị theo mùa vùng Tohoku',
      'Otsukuri: 4 loại Sashimi cá trắng & cá ngừ hàng bay ANA',
      'Yakimono: Cá Kinmedai nướng than Binchotan',
      'Nigiri: 8贯 Sushi Edomae thượng hạng (Otoro, Uni, Botan Ebi)',
      'Wanmono & Tamago: Súp nghêu Hamaguri & bánh trứng Castella',
    ],
    pricePerGuest: '3.200.000 ₫ / thực khách',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1000&q=85',
  },
  branches: [
    {
      id: 'br-hn',
      city: 'CHI NHÁNH HÀ NỘI',
      branchName: 'Tohoku Japanese Fine Dining — Ba Đình, Hà Nội',
      address: '68 Đào Tấn, Quận Ba Đình, TP. Hà Nội',
      hotline: '024 3886 8999',
      vipRooms: '12 Phòng Tatami VIP (từ 4 đến 30 thực khách) & Quầy Omakase',
      openingHours: '10:30 - 14:00 | 17:30 - 22:30',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'br-hp',
      city: 'CHI NHÁNH HẢI PHÒNG',
      branchName: 'Tohoku Japanese Restaurant — Lê Hồng Phong, Hải Phòng',
      address: '128 Lê Hồng Phong, Quận Ngô Quyền, TP. Hải Phòng',
      hotline: '0225 3688 999',
      vipRooms: '10 Phòng VIP Sân Vườn Zen Nhật Bản & Hầm Rượu Sake',
      openingHours: '10:30 - 14:00 | 17:30 - 22:30',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'br-na',
      city: 'CHI NHÁNH NGHỆ AN',
      branchName: 'Tohoku Japanese Restaurant — Đại Lộ Lê Nin, TP. Vinh',
      address: '86 Đại lộ V.I. Lê Nin, Phường Hà Huy Tập, TP. Vinh, Nghệ An',
      hotline: '0238 3886 999',
      vipRooms: '15 Phòng Tiệc VIP Tiếp Đối Tác & Sảnh Yến Tiệc 80 Khách',
      openingHours: '10:30 - 14:00 | 17:30 - 22:30',
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
    },
  ],
};

export const defaultData = nha_hang_13DefaultData;
export const mockData = nha_hang_13DefaultData;
export default nha_hang_13DefaultData;
