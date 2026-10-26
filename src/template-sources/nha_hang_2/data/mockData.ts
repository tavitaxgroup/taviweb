import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaHang2MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  tag?: string;
}

export interface NhaHang2FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "star" | "heart" | "clock";
}

export interface NhaHang2Data extends ClonedTemplateBaseData {
  qualitySection: {
    eyebrow: string;
    title: string;
    mainImage: string;
    secondaryImage: string;
    ctaText: string;
  };
  menuItems: NhaHang2MenuItem[];
  spaceHighlight: {
    tag: string;
    title: string;
    date: string;
    thumbnail: string;
    bannerImage: string;
    description: string;
  };
  collageImages: {
    leftTall: string;
    centerTop: string;
    centerBottom: string;
    rightLarge: string;
  };
  features: NhaHang2FeatureItem[];
  galleryImages: string[];
  reservationImage: string;
}

export const nhaHang2DefaultData: NhaHang2Data = {
  business: {
    name: "Mona Foodie Fine Dining",
    phone: ["0313 728 397", "0909 888 789"],
    email: ["info@themona.global", "booking@monafoodie.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ Hai - Chủ Nhật: 11:30 - 15:00 & 18:00 - 23:00",
    rating: 4.9,
    reviewCount: 320,
    aboutTitle: "Hầm Rượu Vang Quý Hiếm & Thực Đơn Tinh Tuyển",
    aboutText: [
      "Tại Mona Foodie Fine Dining, mỗi bữa tiệc là một bản giao hưởng giữa nghệ thuật ẩm thực Âu - Á đương đại và bộ sưu tập hơn 200 nhãn rượu vang cổ điển được tuyển chọn từ những vùng nho danh tiếng nhất nước Pháp, Ý và Chile.",
      "Dưới bàn tay tài hoa của đội ngũ đầu bếp giàu kinh nghiệm cùng sự tư vấn tận tâm từ chuyên gia Sommelier, chúng tôi kiến tạo nên những khoảnh khắc thưởng thức trọn vẹn trong không gian sang trọng, ấm cúng dưới ánh nến lung linh."
    ],
    highlights: [
      "Hơn 200 dòng rượu vang Grand Cru & Reserve lưu trữ chuẩn nhiệt độ hầm",
      "Nguyên liệu Wagyu A5, Tôm hùm Alaska & Gan ngỗng Pháp nhập khẩu trực tiếp",
      "Phòng VIP riêng tư thiết kế sang trọng dành cho tiệc kỷ niệm và tiếp khách quý"
    ]
  },
  hero: {
    eyebrow: "Mona Foodie",
    subtitle: "FINE DINING & WINE LOUNGE",
    title: "Nơi tận hưởng những trải nghiệm ẩm thực tuyệt vời",
    description:
      "Thưởng thức tinh hoa ẩm thực thượng hạng kết hợp cùng rượu vang tuyển chọn trong không gian lãng mạn chuẩn 5 sao.",
    ctaText: "XEM MENU",
    ctaLink: "#menu",
    secondaryCtaText: "ĐẶT BÀN NGAY",
    secondaryCtaLink: "#booking",
    backgroundImage:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85"
  },
  qualitySection: {
    eyebrow: "DỊCH VỤ ĐẲNG CẤP",
    title: "Hầm Rượu Vang Quý Hiếm & Thực Đơn Tinh Tuyển",
    mainImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
    ctaText: "TÌM HIỂU THÊM"
  },
  menuItems: [
    {
      id: "menu-1",
      name: "Thăn Nội Bò Wagyu Áp Chảo",
      price: "1,990,000 ₫",
      description:
        "Thăn nội bò Wagyu A5 Nhật Bản áp chảo bơ thảo mộc, dùng kèm nấm Truffle đen và sốt vang đỏ Bordeaux.",
      category: "Món Chính",
      tag: "Signature"
    },
    {
      id: "menu-2",
      name: "Gan Ngỗng Pháp Áp Chảo Sốt Táo",
      price: "699,000 ₫",
      description:
        "Gan ngỗng béo Rougié áp chảo vàng giòn bên ngoài, mềm tan bên trong cùng sốt táo caramel và bánh Brioche.",
      category: "Khai Vị & Hải Sản",
      tag: "Best Seller"
    },
    {
      id: "menu-3",
      name: "Tôm Hùm Alaska Nướng Bơ Tỏi",
      price: "2,299,000 ₫",
      description:
        "Tôm hùm Alaska tươi sống đút lò cùng phô mai Comté ủ 18 tháng, bơ tỏi đen và thảo mộc Địa Trung Hải.",
      category: "Khai Vị & Hải Sản",
      tag: "Chef's Choice"
    },
    {
      id: "menu-4",
      name: "Sò Điệp Nhật Áp Chảo Sốt Nghệ Tây",
      price: "499,000 ₫",
      description:
        "Cồi sò điệp Hokkaido cỡ đại áp chảo vừa chín tới, quyện cùng sốt kem nhụy hoa nghệ tây và trứng cá muối.",
      category: "Khai Vị & Hải Sản"
    },
    {
      id: "menu-5",
      name: "Sườn Cừu Úc Nướng Thảo Mộc",
      price: "799,000 ₫",
      description:
        "Sườn cừu non ướp lá hương thảo tươi nướng than hoa, phục vụ kèm khoai tây nghiền mịn và măng tây xanh.",
      category: "Món Chính"
    },
    {
      id: "menu-6",
      name: "Bánh Cua Hoàng Đế Phô Mai Đút Lò",
      price: "500,000 ₫",
      description:
        "Thịt cua King Crab nguyên thớ hòa quyện sốt kem phô mai Gruyère béo ngậy trên đế bánh mì Brioche giòn rụm.",
      category: "Khai Vị & Hải Sản"
    }
  ],
  spaceHighlight: {
    tag: "Tin tức & Không gian",
    title: "03. Không Gian Ấm Cúng — Nơi gặp gỡ và tận hưởng hương vị khó quên",
    date: "14 Tháng Mười Hai, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&q=80",
    bannerImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
    description:
      "Từng góc bàn tại Mona Foodie đều được chăm chút tỉ mỉ với ánh đèn vàng dịu nhẹ, bộ ly pha lê Riedel tinh xảo và âm nhạc Acoustic sâu lắng."
  },
  collageImages: {
    leftTall:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    centerTop:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    centerBottom:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    rightLarge:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
  },
  features: [
    {
      id: "feat-1",
      title: "Đầu Bếp Michelin",
      description:
        "Đội ngũ Bếp trưởng trên 15 năm kinh nghiệm tại các nhà hàng Fine Dining quốc tế danh giá.",
      icon: "star"
    },
    {
      id: "feat-2",
      title: "Nguyên Liệu Tuyển Chọn",
      description:
        "100% nguyên liệu tươi sống và thịt bò thượng hạng được nhập khẩu trực tiếp theo tiêu chuẩn khắt khe.",
      icon: "heart"
    },
    {
      id: "feat-3",
      title: "Phục Vụ Chuẩn 5 Sao",
      description:
        "Trải nghiệm dịch vụ cá nhân hóa tinh tế, chu đáo cùng chuyên gia thử rượu Sommelier riêng.",
      icon: "clock"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Nguyễn Minh Quân",
      role: "Doanh nhân, Quận 1 - TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
      rating: 5,
      content:
        "Một không gian ẩm thực thực sự đẳng cấp giữa lòng Sài Gòn. Món thăn nội bò Wagyu áp chảo mềm tan hoàn hảo khi kết hợp cùng ly vang đỏ Pauillac do Sommelier gợi ý. Đây chắc chắn là điểm đến lý tưởng cho những buổi tối kỷ niệm đặc biệt và tiếp đãi đối tác quan trọng."
    },
    {
      id: "test-2",
      author: "Trần Thanh Hà",
      role: "Giám đốc Sáng tạo, TP.HCM",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
      rating: 5,
      content:
        "Tôi bị chinh phục hoàn toàn bởi ánh nến ấm áp, tiếng nhạc du dương và cách bày trí món ăn tựa như một tác phẩm nghệ thuật. Sò điệp Nhật sốt nghệ tây và gan ngỗng Pháp đều mang hương vị tinh tế, chuẩn mực Pháp."
    },
    {
      id: "test-3",
      author: "Lê Hoàng Nam",
      role: "Nhà sưu tầm rượu vang, Hà Nội",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
      rating: 5,
      content:
        "Hầm rượu vang của Mona Foodie thực sự đáng ngưỡng mộ với nhiều chai cổ điển hiếm gặp. Đội ngũ phục vụ hiểu rõ từng tầng hương vị và chăm sóc bàn tiệc vô cùng lịch thiệp, chu đáo."
    }
  ],
  news: [
    {
      id: "blog-1",
      title: "Khám phá nghệ thuật kết hợp rượu vang đỏ và bò Wagyu thượng hạng",
      date: "18/02/2026",
      category: "Cẩm nang Rượu Vang",
      excerpt:
        "Bí quyết lựa chọn dòng vang Cabernet Sauvignon và Syrah giúp tôn vinh trọn vẹn vị béo ngậy của vân mỡ bò Wagyu A5.",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-2",
      title: "Trải nghiệm bữa tối lãng mạn dưới ánh nến cho ngày kỷ niệm đáng nhớ",
      date: "12/02/2026",
      category: "Không gian & Sự kiện",
      excerpt:
        "Gợi ý thực đơn Set Menu 5 món tinh tế kèm trang trí hoa tươi và nến thơm riêng tư dành cho các cặp đôi.",
      image:
        "https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-3",
      title: "Nhà hàng Mona Foodie – Nơi gặp gỡ và tận hưởng hương vị khó quên",
      date: "05/02/2026",
      category: "Câu chuyện Ẩm thực",
      excerpt:
        "Hành trình 10 năm gìn giữ triết lý ẩm thực nguyên bản và phong cách phục vụ chuẩn mực Châu Âu tại TP.HCM.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
    }
  ],
  reservationImage:
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80"
  ]
};
