import { ClonedTemplateBaseData } from '@/lib/demo/clonedTemplateUtils';

export interface GanhHaoSeafoodDish {
  id: string;
  name: string;
  category: 'signature' | 'abalone_lobster' | 'crab_squid' | 'hotpot_salad';
  categoryLabel: string;
  price: string;
  unit: string;
  badge?: string;
  cookingStyle: string;
  image: string;
  description: string;
}

export interface GanhHaoLocationItem {
  id: string;
  name: string;
  address: string;
  hotline: string;
  capacity: string;
  highlight: string;
  image: string;
}

export interface NhaHang14Data {
  business: Record<string, any>;
  hero: Record<string, any>;
  [key: string]: any;
  brandLogo: {
    title: string;
    subtitle: string;
  };
  navItems: string[];
  heroCircularPlates: {
    topPlate: {
      title: string;
      price: string;
      image: string;
    };
    mainPlate: {
      title: string;
      price: string;
      image: string;
    };
  };
  locations: GanhHaoLocationItem[];
  menuCategories: {
    id: 'all' | 'signature' | 'abalone_lobster' | 'crab_squid' | 'hotpot_salad';
    label: string;
  }[];
  menuItems: GanhHaoSeafoodDish[];
  seaViewHighlights: {
    title: string;
    subtitle: string;
    stats: { value: string; label: string }[];
    gallery: { title: string; caption: string; image: string }[];
  };
}

export const nha_hang_14DefaultData: NhaHang14Data = {
  templateKey: 'nha_hang_14',
  business: {
    name: 'Nhà Hàng Hải Sản Gành Hào — Biểu Tượng Ẩm Thực Vũng Tàu',
    tagline: 'Thương Hiệu Nhà Hàng Gắn Bó Với Vùng Biển Vũng Tàu • Ẩm Thực Đẳng Cấp Giữa Lòng Phố Biển',
    description:
      'Tọa lạc ngay cung đường biển Trần Phú và Hạ Long đẹp nhất TP. Vũng Tàu, Hệ thống Nhà hàng Hải sản Gành Hào tự hào hơn 20 năm phục vụ thực khách những món hải sản tươi sống bắt tại hồ trong không gian sát bờ biển ngắm trọn hoàng hôn.',
    phone: ['0254 3550 909', '0254 3577 777'],
    email: ['datban@ganhhao.com.vn', 'info@ganhhao.com.vn'],
    address: 'Gành Hào 1: 03 Trần Phú, Phường 5 • Gành Hào 2: 09 Hạ Long, Phường 2, TP. Vũng Tàu',
    workingHours: '07:00 - 23:00 (Phục vụ Điểm tâm sáng, Trưa & Tối sát biển)',
    socials: {
      facebook: 'https://facebook.com/ganhhaoseafood',
      instagram: 'https://instagram.com/ganhhaoseafood',
      zalo: 'https://zalo.me/02543550909',
    },
  },
  brandLogo: {
    title: 'GANH HAO',
    subtitle: 'SEAFOOD RESTAURANT',
  },
  navItems: [
    'Trang Chủ',
    'Món Ngon Trứ Danh',
    'Thực Đơn Hải Sản Hồ Sống',
    'Gành Hào 1 & 2',
    'Không Gian Hoàng Hôn Biển',
    'Đặt Bàn View Biển',
  ],
  hero: {
    badge: 'HƠN 20 NĂM BIỂU TƯỢNG ẨM THỰC PHỐ BIỂN VŨNG TÀU',
    title: 'THƯƠNG HIỆU NHÀ HÀNG GẮN BÓ VỚI VÙNG BIỂN VŨNG TÀU',
    highlight: 'Ẩm thực đẳng cấp giữa lòng phố biển',
    subtitle: 'Ẩm thực đẳng cấp giữa lòng phố biển',
    primaryCta: 'Đặt Bàn Sát Biển Ngay',
    secondaryCta: 'Xem Thực Đơn Hải Sản',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
  },
  heroCircularPlates: {
    topPlate: {
      title: 'Súp Bào Ngư Vi Cá Hải Sâm Gành Hào',
      price: '480.000 ₫ / thố',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
    },
    mainPlate: {
      title: 'Cua Lột & Mực Sữa Chiên Tỏi Ớt Giòn Rụm',
      price: '360.000 ₫ / đĩa',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85',
    },
  },
  locations: [
    {
      id: 'gh-1',
      name: 'Nhà Hàng Gành Hào 1 — 03 Trần Phú, Bãi Trước',
      address: '03 Trần Phú, Phường 5, TP. Vũng Tàu',
      hotline: '0254 3550 909',
      capacity: 'Sức chứa 1.200 khách • Khu sân thượng vươn ra mặt biển & 18 Phòng VIP',
      highlight: 'Điểm ngắm hoàng hôn biển Bãi Trước đẹp nhất Vũng Tàu, sát cạnh Bãi Dâu.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'gh-2',
      name: 'Nhà Hàng Gành Hào 2 — 09 Hạ Long, Mũi Nghinh Phong',
      address: '09 Hạ Long, Phường 2, TP. Vũng Tàu',
      hotline: '0254 3577 777',
      capacity: 'Sức chứa 1.000 khách • Sảnh tiệc vòm sóng biển & Khu hồ hải sản khổng lồ',
      highlight: 'Nằm trên cung đường biển Hạ Long thơ mộng giữa Bãi Trước và Bãi Sau.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    },
  ],
  menuCategories: [
    { id: 'all', label: 'Tất Cả Thực Đơn' },
    { id: 'signature', label: 'Món Ngon Trứ Danh' },
    { id: 'abalone_lobster', label: 'Bào Ngư & Tôm Hùm' },
    { id: 'crab_squid', label: 'Cua Ghẹ & Mực Biển' },
    { id: 'hotpot_salad', label: 'Lẩu Hải Sản & Gỏi' },
  ],
  menuItems: [
    {
      id: 'gh-m1',
      name: 'Súp Bào Ngư Hải Sâm Hầm Nấm Đông Cô Thượng Hạng',
      category: 'abalone_lobster',
      categoryLabel: 'Bào Ngư & Tôm Hùm',
      price: '480.000 ₫',
      unit: 'Thố cá nhân',
      badge: 'Món Trứ Danh',
      cookingStyle: 'Tiềm nước dùng gà ta & sò điệp khô 6 giờ',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80',
      description:
        'Bào ngư nguyên con giòn ngọt tiềm cùng hải sâm, nấm đông cô và nước dùng thượng canh bổ dưỡng chuẩn vị Gành Hào.',
    },
    {
      id: 'gh-m2',
      name: 'Cua Lột & Ghẹ Sữa Chiên Tỏi Ớt Giòn Rụm Phố Biển',
      category: 'signature',
      categoryLabel: 'Món Ngon Trứ Danh',
      price: '360.000 ₫',
      unit: 'Đĩa lớn',
      badge: 'Best Seller',
      cookingStyle: 'Chiên giòn xóc tỏi phi & ớt hiểm xanh đỏ',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=700&q=80',
      description:
        'Cua lột tươi áo lớp bột mỏng chiên vàng ươm, xóc cùng tỏi sẻ phi giòn và muối ớt cay dịu thơm nức mũi.',
    },
    {
      id: 'gh-m3',
      name: 'Tôm Hùm Bông Nha Trang Nướng Phô Mai / Tiết Canh',
      category: 'abalone_lobster',
      categoryLabel: 'Bào Ngư & Tôm Hùm',
      price: '2.150.000 ₫',
      unit: 'Kg (Bắt tại hồ)',
      badge: 'Tươi Sống Tại Hồ',
      cookingStyle: 'Sashimi / Nướng phô mai đút lò / Nấu cháo',
      image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=700&q=80',
      description:
        'Thực khách trực tiếp chọn tôm hùm bông đang bơi tại hồ nước biển tự nhiên, chế biến 2-3 món theo yêu cầu.',
    },
    {
      id: 'gh-m4',
      name: 'Ghẹ Xanh Vũng Tàu Hấp Bia Sả / Rang Me Chua Ngọt',
      category: 'crab_squid',
      categoryLabel: 'Cua Ghẹ & Mực Biển',
      price: '780.000 ₫',
      unit: 'Kg (3-4 con/kg)',
      badge: 'Đánh Bắt Trong Ngày',
      cookingStyle: 'Hấp sả chấm muối tiêu chanh / Rang me',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80',
      description:
        'Ghẹ xanh lưới Gành Hào chắc thịt tới từng chiếc càng, chấm muối ớt xanh hoặc sốt me chua ngọt đậm đà.',
    },
    {
      id: 'gh-m5',
      name: 'Mực Một Nắng Côn Đảo Nướng Muối Ớt Xanh',
      category: 'crab_squid',
      categoryLabel: 'Cua Ghẹ & Mực Biển',
      price: '420.000 ₫',
      unit: 'Phần 400g',
      cookingStyle: 'Nướng than hoa hồng rực',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
      description:
        'Mực lá câu phơi đúng một nắng giòn ngọt, dày mình, nướng trên bếp than hồng giữ trọn hương vị biển khơi.',
    },
    {
      id: 'gh-m6',
      name: 'Lẩu Cá Đuối & Hải Sản Chua Cay Măng Chua Gành Hào',
      category: 'hotpot_salad',
      categoryLabel: 'Lẩu Hải Sản & Gỏi',
      price: '450.000 ₫',
      unit: 'Nồi 4-6 người',
      badge: 'Đặc Sản Vũng Tàu',
      cookingStyle: 'Nấu măng chua, ngò om & bún tươi',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80',
      description:
        'Đặc sản trứ danh phố biển Vũng Tàu với cá đuối tươi giòn sần sật, tôm sú, mực trứng và nước lẩu măng chua thanh mát.',
    },
  ],
  seaViewHighlights: {
    title: 'Không Gian Kiến Trúc Vòm Sóng Biển & Hoàng Hôn Bãi Trước',
    subtitle:
      'Thưởng thức hải sản tươi ngon trong tiếng sóng vỗ rì rào ngay dưới chân bàn ăn và chiêm ngưỡng khoảnh khắc mặt trời lặn trên mặt biển Vũng Tàu.',
    stats: [
      { value: '20+ Năm', label: 'Thương Hiệu Gắn Bó Phố Biển' },
      { value: '2.200+', label: 'Ghế Ngồi Sát Biển & Phòng VIP' },
      { value: '150+ Món', label: 'Hải Sản Tươi Sống Bắt Tại Hồ' },
      { value: '2 Cơ Sở', label: 'Trần Phú & Hạ Long Vũng Tàu' },
    ],
    gallery: [
      {
        title: 'Sân Thượng Ngắm Hoàng Hôn Sát Mặt Biển',
        caption: 'Khu bàn tiệc ngoài trời đón gió biển lộng mát từ 16h30 mỗi chiều.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Khu Hồ Hải Sản Nước Biển Tự Nhiên',
        caption: 'Hơn 50 loài tôm hùm, cua hoàng đế, bào ngư, cá mú đỏ bơi sống.',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Hệ Thống Phòng VIP & Sảnh Tiệc Gala',
        caption: 'Phòng lạnh view kính toàn cảnh biển dành cho đoàn khách và gia đình.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
};

export const defaultData = nha_hang_14DefaultData;
export const mockData = nha_hang_14DefaultData;
export default nha_hang_14DefaultData;
