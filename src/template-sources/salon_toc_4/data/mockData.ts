import { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SalonToc4Product {
  id: string;
  name: string;
  tab: "NỮ GIỚI" | "NAM GIỚI" | "MỚI NHẤT" | "KHUYẾN MÃI" | "PHỔ BIẾN";
  oldPrice: string;
  price: string;
  badges: Array<{
    text: string;
    color: "coral" | "green" | "amber";
  }>;
  image: string;
  description: string;
}

export interface SalonToc4Deal {
  id: string;
  category: string;
  name: string;
  oldPrice: string;
  price: string;
  image: string;
  countdown: {
    days: string;
    hours: string;
    mins: string;
    secs: string;
  };
}

export interface SalonToc4Data extends ClonedTemplateBaseData {
  topBanners: Array<{
    id: string;
    title: string;
    promoText?: string;
    promoHighlight?: string;
    ctaText?: string;
    image: string;
  }>;
  products: SalonToc4Product[];
  deals: SalonToc4Deal[];
  features: Array<{
    id: string;
    badgeText: string;
    title: string;
    description: string;
  }>;
  partnerLogos: Array<{
    id: string;
    name: string;
    tagline: string;
  }>;
}

export const salonToc4DefaultData: SalonToc4Data = {
  business: {
    name: "Mona Luxe Salon",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global", "concierge@monaluxe.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 6: 08:00 - 20:00 | Thứ 7: 09:00 - 21:00 | CN: 13:00 - 22:00",
    rating: 4.9,
    reviewCount: 1560,
    aboutTitle: "Khám Phá Thế Giới Mùi Hương Đa Dạng",
    aboutText: [
      "Mona Luxe Salon là điểm hẹn của nghệ thuật tạo mẫu tóc thượng lưu, tinh dầu nước hoa ủ tóc cao cấp và bộ sưu tập mùi hương Niche độc bản."
    ],
  },
  hero: {
    eyebrow: "M O N A   S T O R E",
    title: "Khám Phá Thế Giới\nNước Hoa Đa Dạng",
    subtitle: "Bộ sưu tập nước hoa tóc & tinh dầu dưỡng hương Pháp cao cấp",
    ctaText: "MUA NGAY",
    ctaLink: "#ban-chay",
    backgroundImage:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1800&q=85",
  },
  topBanners: [
    {
      id: "tb-1",
      title: "Bộ sưu tập\nnước hoa & dưỡng tóc",
      promoText: "Khuyến mãi",
      promoHighlight: "25%",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "tb-2",
      title: "Thế giới\nhương thơm",
      ctaText: "Khám Phá ->",
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "tb-3",
      title: "Quý phái\n& Sang trọng",
      promoText: "Khuyến mãi",
      promoHighlight: "25%",
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=500&q=80",
    },
  ],
  products: [
    {
      id: "pf-1",
      name: "Nước hoa Tóc Hương thơm Vĩnh cửu",
      tab: "NỮ GIỚI",
      oldPrice: "2,050,000₫",
      price: "1,850,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-10%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
      description:
        "Tinh chất nước hoa ủ tóc hương hoa nhài trắng và gỗ đàn hương, nuôi dưỡng sợi tóc bóng mượt suốt 24 giờ.",
    },
    {
      id: "pf-2",
      name: "Nước hoa Sắc màu Tinh tế",
      tab: "NỮ GIỚI",
      oldPrice: "2,050,000₫",
      price: "1,850,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-10%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80",
      description:
        "Nốt hương hồng Bulgaria kết hợp tinh dầu Argan bảo vệ tóc khỏi nhiệt độ máy tạo kiểu.",
    },
    {
      id: "pf-3",
      name: "Nước hoa Hương thảo Mộc",
      tab: "NAM GIỚI",
      oldPrice: "2,850,000₫",
      price: "2,590,000₫",
      badges: [{ text: "-9%", color: "green" }],
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80",
      description:
        "Hương thảo mộc Địa Trung Hải thanh lịch dành cho mái tóc và cơ thể.",
    },
    {
      id: "pf-4",
      name: "Nước hoa Vũ điệu Hoa trái",
      tab: "MỚI NHẤT",
      oldPrice: "2,750,000₫",
      price: "2,599,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-5%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=500&q=80",
      description:
        "Sự tươi mát của cam Bergamot và hoa mẫu đơn trắng.",
    },
    {
      id: "pf-5",
      name: "Nước hoa Hương thơm Ngọt ngào",
      tab: "PHỔ BIẾN",
      oldPrice: "4,852,000₫",
      price: "4,735,000₫",
      badges: [
        { text: "-2%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=500&q=80",
      description:
        "Tuyệt tác hương vani Pháp và hổ phách ấm áp lưu hương vượt trội.",
    },
    {
      id: "pf-6",
      name: "Nước hoa Đỉnh cao Cuốn hút",
      tab: "NAM GIỚI",
      oldPrice: "4,050,000₫",
      price: "3,890,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-4%", color: "green" },
      ],
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80",
      description:
        "Nốt hương gỗ tuyết tùng và xạ hương sang trọng đầy bản lĩnh.",
    },
    {
      id: "pf-7",
      name: "Nước hoa Thần thái Sang trọng",
      tab: "KHUYẾN MÃI",
      oldPrice: "1,400,000₫",
      price: "1,100,000₫",
      badges: [{ text: "-21%", color: "green" }],
      image:
        "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80",
      description:
        "Lớp sương hương thơm dịu nhẹ giúp mái tóc uốn luôn mềm mượt và thơm ngát.",
    },
    {
      id: "pf-8",
      name: "Nước hoa Hương thơm Nồng nàn",
      tab: "PHỔ BIẾN",
      oldPrice: "7,000,000₫",
      price: "5,950,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-15%", color: "green" },
      ],
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80",
      description:
        "Phiên bản Niche giới hạn với tinh dầu hoa diên vĩ quý hiếm.",
    },
    {
      id: "pf-9",
      name: "Nước hoa Hương thơm Tự nhiên",
      tab: "KHUYẾN MÃI",
      oldPrice: "1,845,000₫",
      price: "1,120,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-39%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=500&q=80",
      description:
        "Chiết xuất trà trắng và hoa linh lan thuần khiết.",
    },
    {
      id: "pf-10",
      name: "Nước hoa Năng động Hương xuân",
      tab: "MỚI NHẤT",
      oldPrice: "4,450,000₫",
      price: "2,550,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-43%", color: "green" },
      ],
      image:
        "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&w=500&q=80",
      description:
        "Tràn đầy sức sống với hương quả lê chín mọng và hoa lan Nam Phi.",
    },
    {
      id: "pf-11",
      name: "Nước hoa Điệu nhảy Tinh tế",
      tab: "KHUYẾN MÃI",
      oldPrice: "1,195,000₫",
      price: "770,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-36%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
      description:
        "Xịt dưỡng hương nước hoa bỏ túi tiện lợi cho mọi chuyến đi.",
    },
    {
      id: "pf-12",
      name: "Nước hoa Bí ẩn Đêm huyền diệu",
      tab: "NỮ GIỚI",
      oldPrice: "2,945,000₫",
      price: "2,420,000₫",
      badges: [
        { text: "PHỔ BIẾN", color: "coral" },
        { text: "-18%", color: "green" },
        { text: "GIỚI HẠN", color: "amber" },
      ],
      image:
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80",
      description:
        "Hương hoa hồng đen và trầm hương quyến rũ cho những buổi tiệc tối.",
    },
  ],
  deals: [
    {
      id: "deal-1",
      category: "NƯỚC HOA TÓC, NƯỚC HOA HƯƠNG THẢO, NƯỚC HOA NỮ, UNISEX",
      name: "Nước hoa Hương thơm Ngọt ngào",
      oldPrice: "4,852,000₫",
      price: "4,735,000₫",
      image:
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=600&q=80",
      countdown: {
        days: "192",
        hours: "21",
        mins: "40",
        secs: "33",
      },
    },
    {
      id: "deal-2",
      category: "NƯỚC HOA TÓC, BỘ SƯU TẬP PHÁP",
      name: "Nước hoa Vũ điệu Hoa trái",
      oldPrice: "2,750,000₫",
      price: "2,599,000₫",
      image:
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80",
      countdown: {
        days: "120",
        hours: "14",
        mins: "25",
        secs: "19",
      },
    },
    {
      id: "deal-3",
      category: "TINH DẦU DƯỠNG TÓC HỮU CƠ",
      name: "Nước hoa Hương thơm Tự nhiên",
      oldPrice: "1,845,000₫",
      price: "1,120,000₫",
      image:
        "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=600&q=80",
      countdown: {
        days: "085",
        hours: "08",
        mins: "15",
        secs: "42",
      },
    },
    {
      id: "deal-4",
      category: "XỊT DƯỠNG HƯƠNG NƯỚC HOA",
      name: "Nước hoa Điệu nhảy Tinh tế",
      oldPrice: "1,195,000₫",
      price: "770,000₫",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
      countdown: {
        days: "064",
        hours: "19",
        mins: "50",
        secs: "12",
      },
    },
  ],
  features: [
    {
      id: "feat-1",
      badgeText: "100% VEGAN",
      title: "Tạo ấn tượng cá nhân",
      description:
        "Nước hoa và hương thơm mái tóc là một phần quan trọng trong việc tạo dấu ấn cá nhân. Một mùi hương đặc biệt có thể nói lên cái tôi, phong cách và cá tính của bạn.",
    },
    {
      id: "feat-2",
      badgeText: "NATURAL",
      title: "Tự tin và sự thu hút",
      description:
        "Một mùi hương thích hợp không chỉ khiến bạn cảm thấy tươi mới và thoải mái mà còn giúp bạn tự tin hơn trong giao tiếp và tương tác xã hội.",
    },
    {
      id: "feat-3",
      badgeText: "ORGANIC",
      title: "Kỹ thuật pha chế và chất lượng cao",
      description:
        "Sản phẩm tinh dầu tóc & nước hoa thường được chế tạo từ các thành phần tự nhiên và hợp chất hương liệu cao cấp.",
    },
    {
      id: "feat-4",
      badgeText: "LUXURY",
      title: "Tạo không gian và cảm xúc",
      description:
        "Hương thơm có thể tạo ra một bầu không khí khác biệt và mang đến cảm giác thư giãn, sảng khoái hoặc lãng mạn.",
    },
  ],
  partnerLogos: [
    { id: "pl-1", name: "Lady & Daddy", tagline: "PARIS ATELIER" },
    { id: "pl-2", name: "Scandinavia", tagline: "NORDIC SCENT" },
    { id: "pl-3", name: "Mi Casa", tagline: "BOTANICAL LAB" },
    { id: "pl-4", name: "Oak Bark", tagline: "ESSENTIAL OILS" },
    { id: "pl-5", name: "Aroma Craft", tagline: "NICHE PERFUME" },
    { id: "pl-6", name: "The Scent Shop", tagline: "HAIR ELIXIR" },
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Sâm Nguyễn",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content:
        "“Tôi đã tìm thấy một hương thơm dưỡng tóc và nước hoa mà tôi đã lâu không thể mua được ở đâu. Dịch vụ khách hàng tại Salon cũng rất tốt, nhân viên hỗ trợ nhiệt tình và nhanh chóng giải đáp mọi thắc mắc của tôi.”",
    },
    {
      id: "test-2",
      author: "Bạch Ngân",
      role: "Khách hàng",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      content:
        "“Không gian sang trọng, giao diện đặt lịch đẹp mắt và dễ sử dụng. Tôi dễ dàng tìm kiếm và chọn được dòng tinh dầu nước hoa yêu thích của mình. Thông tin chi tiết về từng tầng hương giúp tôi hiểu rõ hơn về thành phần.”",
    },
  ],
  news: [
    {
      id: "news-1",
      title: "Phong cách làm đẹp cổ điển với tinh dầu dưỡng tóc hương nước hoa Pháp",
      date: "13 Tháng Hai",
      category: "TẠP CHÍ THỜI TRANG",
      excerpt: "Bí quyết lưu giữ hương thơm thanh lịch trên từng lọn tóc suốt cả ngày dài.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-2",
      title: "Nghệ thuật sống tinh tế cùng liệu pháp mùi hương thảo mộc thiên nhiên",
      date: "13 Tháng Hai",
      category: "PHONG CÁCH SỐNG",
      excerpt: "Thư giãn tâm trí và phục hồi năng lượng qua các nốt hương tinh dầu nguyên bản.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-3",
      title: "Câu chuyện đằng sau mỗi giọt tinh chất Argan & Hoa hồng Bulgaria",
      date: "13 Tháng Hai",
      category: "BỘ SƯU TẬP",
      excerpt: "Hành trình chưng cất thủ công tạo nên những tầng hương quyến rũ bậc nhất.",
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "news-4",
      title: "Cách kết hợp kiểu tóc uốn bồng bềnh và nốt hương gỗ ấm áp cho mùa thu đông",
      date: "13 Tháng Hai",
      category: "CẢM HỨNG",
      excerpt: "Gợi ý phối hợp mùi hương đồng điệu với trang phục và phong cách tạo mẫu tóc.",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    },
  ],
};
