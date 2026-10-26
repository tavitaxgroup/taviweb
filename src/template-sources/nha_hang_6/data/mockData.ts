import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaHang6EventCategory {
  id: string;
  title: string;
  englishSubtitle: string;
  description: string;
  image: string;
}

export interface NhaHang6MenuShowcase {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
}

export interface NhaHang6Data extends ClonedTemplateBaseData {
  aboutCollage: {
    eyebrow: string;
    title: string;
    leftTallImage: string;
    rightSquareImage: string;
    caption: string;
  };
  videoBannerImage: string;
  eventCategories: NhaHang6EventCategory[];
  clientNames: string[];
  menuSection: {
    eyebrow: string;
    title: string;
    chefName: string;
    chefRole: string;
    items: NhaHang6MenuShowcase[];
  };
  specialOccasion: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    overlayQuote: string;
    numberedPoints: Array<{ number: string; label: string; detail: string }>;
  };
}

export const nhaHang6DefaultData: NhaHang6Data = {
  business: {
    name: "Mona Catering",
    phone: ["0313728397", "0909 728 397"],
    email: ["info@themona.global", "booking@monacatering.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 22:30",
    rating: 4.9,
    reviewCount: 680,
    aboutTitle: "LÀM CHO SỰ KIỆN TRỞ NÊN HOÀN HẢO",
    aboutText: [
      "Chúng tôi luôn tìm kiếm nguyên liệu tươi ngon và đảm bảo chất lượng cao nhất cho mỗi món ăn.",
      "Với sự tận tâm và chuyên nghiệp, Mona Catering kiến tạo những bàn tiệc Canapé, Buffet, Tiệc Cưới và Hội Nghị Doanh Nghiệp tinh tế chuẩn 5 sao ngay tại không gian của bạn."
    ],
    highlights: [
      "Thực đơn Âu - Á thiết kế riêng bởi Bếp trưởng điều hành",
      "Trọn gói trang trí bàn tiệc hoa tươi, ly pha lê & đội ngũ phục vụ",
      "Đảm bảo an toàn vệ sinh thực phẩm và đúng giờ tuyệt đối"
    ]
  },
  hero: {
    eyebrow: "DỊCH VỤ TIỆC LƯU ĐỘNG & NHÀ HÀNG SỰ KIỆN",
    subtitle: "NGHỆ THUẬT ẨM THỰC SỰ KIỆN ĐẲNG CẤP",
    title: "PHỤC VỤ\nCHẤT LƯỢNG\nTHANH LỊCH",
    description:
      "Trải nghiệm dịch vụ tiệc lưu động cao cấp với thực đơn tinh tuyển và phong cách phục vụ chuẩn khách sạn 5 sao.",
    ctaText: "Liên hệ",
    ctaLink: "#booking",
    secondaryCtaText: "CUỘN XUỐNG",
    secondaryCtaLink: "#about",
    backgroundImage:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  aboutCollage: {
    eyebrow: "VỀ CHÚNG TÔI",
    title: "LÀM CHO SỰ KIỆN TRỞ NÊN HOÀN HẢO",
    leftTallImage:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    rightSquareImage:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=80",
    caption:
      "Chúng tôi luôn tìm kiếm nguyên liệu tươi ngon và đảm bảo chất lượng cao nhất cho mỗi món ăn."
  },
  videoBannerImage:
    "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1920&q=85",
  eventCategories: [
    {
      id: "ev-1",
      title: "TIỆC LỄ HỘI",
      englishSubtitle: "FESTIVITIES",
      description:
        "Bàn tiệc Finger Food, Canapé và Cocktail sang trọng cho lễ khai trương, kỷ niệm và dạ tiệc cuối năm.",
      image:
        "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-2",
      title: "TIỆC CƯỚI",
      englishSubtitle: "WEDDINGS",
      description:
        "Không gian tiệc cưới ngoài trời và trong sảnh lãng mạn với thực đơn Fine Dining tinh tế dành cho ngày trọng đại.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-3",
      title: "HỘI NGHỊ",
      englishSubtitle: "CONFERENCES",
      description:
        "Dịch vụ Tea Break, tiệc chiêu đãi VIP và gala dinner chuyên nghiệp dành cho hội thảo, sự kiện doanh nghiệp.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "ev-4",
      title: "TIỆC TRƯA",
      englishSubtitle: "LUNCHES",
      description:
        "Thực đơn Set Menu Âu - Á và Buffet trưa chuẩn vị phục vụ tận nơi cho ban lãnh đạo và đối tác.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80"
    }
  ],
  clientNames: ["Coca-Cola", "Maggi", "Cadbury", "Wall's", "Nestlé"],
  menuSection: {
    eyebrow: "LIÊN HỆ CHÚNG TÔI",
    title: "KHÁM PHÁ CÁC MỤC MENU HÀNG ĐẦU CỦA CHÚNG TÔI VÀ ĐẶT NGAY",
    chefName: "PETER BOWMAN",
    chefRole: "Giám Đốc Sáng Tạo Ẩm Thực",
    items: [
      {
        id: "m-1",
        title: "Thăn Nội Bò Wagyu Áp Chảo Sốt Rượu Vang Đỏ",
        category: "Thực đơn Fine Dining",
        price: "850.000đ / Khách",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "m-2",
        title: "Mỳ Ý Hải Sản Tươi & Sốt Nấm Truffle Đen",
        category: "Bếp Trưởng Chế Biến",
        price: "650.000đ / Khách",
        image:
          "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "m-3",
        title: "Khay Tiệc Canapé Cá Hồi Na Uy & Trứng Cá Tầm",
        category: "Tiệc Cocktail & Khai Trương",
        price: "490.000đ / Khách",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: "m-4",
        title: "Gói Rượu Champagne & Đồ Uống Chào Mừng",
        category: "Dịch Vụ Sommelier",
        price: "380.000đ / Khách",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  specialOccasion: {
    eyebrow: "SANG TRỌNG VÀ CHẤT LƯỢNG",
    title: "DỊP ĐẶC BIỆT CỦA BẠN",
    description:
      "Với sự tận tâm và chuyên nghiệp, chúng tôi tạo ra các món ăn ngon miệng và tinh tế, từ các món khai vị đa dạng đến những món chính hấp dẫn và những món tráng miệng thơm ngon.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    overlayQuote: "CHÚNG TÔI SẼ LÀM CHO BỮA TIỆC CỦA BẠN TRỞ NÊN HOÀN HẢO",
    numberedPoints: [
      {
        number: "01.",
        label: "BỮA ĂN NGON",
        detail:
          "Nguyên liệu hữu cơ nhập khẩu tươi mới mỗi ngày, trình bày nghệ thuật chuẩn nhà hàng Fine Dining."
      },
      {
        number: "02.",
        label: "TÙY CHỌN MENU",
        detail:
          "Linh hoạt thiết kế thực đơn theo ngân sách, khẩu vị vùng miền và yêu cầu thực dưỡng riêng của khách mời."
      }
    ]
  },
  news: [
    {
      id: "news-1",
      title: "BÍ QUYẾT CHẾ BIẾN MÓN ÂU THƯỢNG HẠNG TỪ BẾP TRƯỞNG HÀNG ĐẦU",
      date: "22 Tháng Tư, 2026",
      category: "NGHỆ THUẬT BẾP",
      excerpt:
        "Khám phá quy trình chọn lọc nguyên liệu và kỹ thuật nấu chậm Sous-vide giúp giữ trọn vị ngọt tự nhiên cho bàn tiệc cao cấp.",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "NHỮNG MÓN TRÁNG MIỆNG TINH TẾ XỨNG ĐÁNG ĐIỂM 10 CHO TIỆC CƯỚI",
      date: "22 Tháng Tư, 2026",
      category: "BÁNH & TRÁNG MIỆNG",
      excerpt:
        "Sự kết hợp hoàn hảo giữa Mousse chanh dây, Tiramisu cổ điển và Macaron Pháp tạo nên cái kết ngọt ngào cho buổi lễ.",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "XU HƯỚNG THỰC ĐƠN TIỆC COCKTAIL & HỘI NGHỊ DOANH NGHIỆP 2026",
      date: "22 Tháng Tư, 2026",
      category: "SỰ KIỆN DOANH NGHIỆP",
      excerpt:
        "Thiết kế bàn tiệc Finger Food hiện đại giúp khách mời dễ dàng giao lưu, kết nối đối tác trong không gian sang trọng.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
