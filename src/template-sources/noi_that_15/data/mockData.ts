import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat15Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discountBadge?: string;
  isNew?: boolean;
  category: string;
  image: string;
}

export interface NoiThat15Data extends ClonedTemplateBaseData {
  editorialSplit: {
    title: string;
    subtitle: string;
    leftBottomImage: string;
    rightTallImage: string;
  };
  trustFeatures: Array<{
    id: string;
    title: string;
    description: string;
    icon: "ship" | "card" | "percent" | "support";
  }>;
  newestProducts: NoiThat15Product[];
  flashSaleBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    countdown: { days: number; hours: number; mins: number; secs: number };
    ctaText: string;
    sofaImage: string;
  };
  featuredProducts: NoiThat15Product[];
  brandLogos: Array<{ id: string; name: string; sub: string }>;
}

export const noiThat15DefaultData: NoiThat15Data = {
  business: {
    name: "MONA DECOR",
    phone: ["0909 728 397", "0313 728 397"],
    email: ["cskh@monadecor.vn", "info@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:30 - 21:30",
    rating: 4.9,
    reviewCount: 480,
    aboutTitle: "TRANG TRÍ NHÀ VỚI THIẾT KẾ NỘI THẤT",
    aboutText: [
      "Nơi bạn có thể khám phá và tạo ra không gian sống đẳng cấp và đáng mơ ước trong ngôi nhà của mình với bộ sưu tập nội thất phong cách Bắc Âu tối giản, tinh tế."
    ],
    highlights: [
      "Bộ sưu tập nội thất & phụ kiện trang trí chuẩn phong cách Bắc Âu (Scandinavian)",
      "Chất liệu gỗ sồi tự nhiên, gốm thủ công và kim loại sơn tĩnh điện cao cấp",
      "Miễn phí vận chuyển toàn quốc và ưu đãi 10% cho đơn hàng đầu tiên"
    ]
  },
  hero: {
    eyebrow: "SHOWROOM DECOR DELUXE",
    subtitle: "Tận tâm mang đến cho bạn những giải pháp thiết kế nội thất đẳng cấp.",
    title: "CỬA HÀNG NỘI THẤT",
    description:
      "Tận tâm mang đến cho bạn những giải pháp thiết kế nội thất đẳng cấp và tinh tế cho từng góc nhỏ tổ ấm.",
    ctaText: "MUA NGAY",
    ctaLink: "#newest-products",
    backgroundImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85"
  },
  editorialSplit: {
    title: "TRANG TRÍ NHÀ VỚI THIẾT KẾ NỘI THẤT",
    subtitle:
      "Nơi bạn có thể khám phá và tạo ra không gian sống đẳng cấp và đáng mơ ước trong ngôi nhà của mình.",
    leftBottomImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    rightTallImage:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85"
  },
  trustFeatures: [
    {
      id: "tf-1",
      title: "MIỄN PHÍ SHIP",
      description: "Giao hàng tận nơi miễn phí toàn quốc cho mọi đơn hàng nội thất.",
      icon: "ship"
    },
    {
      id: "tf-2",
      title: "THANH TOÁN AN TOÀN",
      description: "Đa dạng phương thức thanh toán thẻ, chuyển khoản và COD bảo mật.",
      icon: "card"
    },
    {
      id: "tf-3",
      title: "KHUYẾN MÃI",
      description: "Ưu đãi định kỳ lên đến 50% cho các bộ sưu tập Decor theo mùa.",
      icon: "percent"
    },
    {
      id: "tf-4",
      title: "HỖ TRỢ NHANH",
      description: "Đội ngũ kiến trúc sư và CSKH tư vấn phối màu nội thất 24/7.",
      icon: "support"
    }
  ],
  newestProducts: [
    {
      id: "np-1",
      name: "ỐNG TIẾT KIỆM GỖ SỒI BẮC ÂU",
      price: "125,000 ₫",
      isNew: true,
      category: "Phụ kiện gỗ",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-2",
      name: "BỘ CHỔI & KI HỐT BỤI TỐI GIẢN",
      price: "69,000 ₫",
      isNew: true,
      category: "Tiện ích gia đình",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-3",
      name: "ĐỒNG HỒ TREO TƯỜNG THÉP MỜ",
      price: "150,000 ₫",
      isNew: true,
      category: "Đồng hồ trang trí",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80"
      },
    {
      id: "np-4",
      name: "NỒI GANG TRÁNG MEN NORDIC 4.5L",
      price: "820,000 ₫",
      isNew: true,
      category: "Phòng bếp",
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-5",
      name: "BÌNH GỐM NGHỆ THUẬT TERRACOTTA",
      price: "450,000 ₫",
      isNew: true,
      category: "Bình hoa Decor",
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-6",
      name: "BÀN LÀM VIỆC GỖ SỒI 1 NGĂN KÉO",
      price: "1,540,000 ₫",
      oldPrice: "2,200,000 ₫",
      discountBadge: "-30%",
      isNew: true,
      category: "Bàn gỗ",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-7",
      name: "ĐÈN BÀN KHUNG THÉP TRIBECA",
      price: "382,000 ₫",
      isNew: true,
      category: "Đèn trang trí",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "np-8",
      name: "BÌNH GIỮ NHIỆT INOX DÂY DA",
      price: "350,000 ₫",
      isNew: true,
      category: "Phụ kiện cá nhân",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
    }
  ],
  flashSaleBanner: {
    eyebrow: "Giảm giá tới 50%",
    title: "MUA SẮM TIẾT KIỆM",
    subtitle:
      "Giúp bạn tiết kiệm chi phí mà vẫn có thể thỏa mãn mong muốn trang trí nhà của bạn.",
    countdown: { days: 90, hours: 13, mins: 46, secs: 56 },
    ctaText: "MUA NGAY",
    sofaImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
  },
  featuredProducts: [
    {
      id: "fp-1",
      name: "ĐỒNG HỒ TREO TƯỜNG THÉP MỜ",
      price: "150,000 ₫",
      isNew: true,
      category: "Đồng hồ",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-2",
      name: "NỒI GANG TRÁNG MEN NORDIC 4.5L",
      price: "820,000 ₫",
      isNew: true,
      category: "Phòng bếp",
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-3",
      name: "GHẾ ĂN GỖ SỒI SYNNES",
      price: "2,250,000 ₫",
      category: "Ghế gỗ",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-4",
      name: "GIỎ ĐỰNG ĐA NĂNG NẮP GỖ",
      price: "426,000 ₫",
      category: "Lưu trữ",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-5",
      name: "BÌNH NƯỚC THỦY TINH PASTEL",
      price: "151,000 ₫",
      category: "Phòng ăn",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-6",
      name: "ĐỒNG HỒ ĐỂ BÀN ĐEN NHÁM",
      price: "305,000 ₫",
      category: "Đồng hồ",
      image:
        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-7",
      name: "BỘ LỌ XAY TIÊU MUỐI GỐM MỜ",
      price: "249,000 ₫",
      category: "Phòng bếp",
      image:
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "fp-8",
      name: "ĐÈN THẢ TRẦN AMBIT HỒNG PASTEL",
      price: "1,500,000 ₫ – 1,700,000 ₫",
      category: "Đèn trần",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "TRẦN VĂN TUẤN",
      role: "Khách hàng",
      rating: 5,
      content:
        "“Đây là lần đầu tiên tôi mua sản phẩm nội thất trực tuyến và tôi rất hài lòng với trải nghiệm của mình. Sản phẩm đến nhanh chóng và được đóng gói cẩn thận. Chất lượng sản phẩm rất tốt và giá cả hợp lý. Tôi đã nhận được sự hỗ trợ tận tâm từ đội ngũ chăm sóc khách hàng. Tôi sẽ giới thiệu trang web này cho bạn bè của tôi.”"
    },
    {
      id: "test-2",
      author: "NGUYỄN MINH THƯ",
      role: "Kiến trúc sư Nội thất",
      rating: 5,
      content:
        "“Các mẫu đèn thả trần Ambit và ghế ăn gỗ sồi Synnes tại Mona Decor có độ hoàn thiện sắc sảo chuẩn Bắc Âu. Khách hàng căn hộ của tôi đều rất ưng ý khi bài trí vào không gian thực tế.”"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Ý TƯỞNG PHỐI MÀU SƠN TỐI GIẢN CHO CĂN HỘ MỚI",
      date: "6 THÁNG MỘT, 2026",
      category: "CẢM HỨNG",
      excerpt: "Cách kết hợp tông màu trắng ngà, xám ấm và gỗ sồi tự nhiên tạo cảm giác rộng thoáng.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-2",
      title: "BÍ QUYẾT BẢO QUẢN ĐỒ GỖ VÀ SOFA VẢI BẮC ÂU BỀN ĐẸP",
      date: "6 THÁNG MỘT, 2026",
      category: "CẢM HỨNG",
      excerpt: "Mẹo vệ sinh định kỳ và giữ độ bóng mịn tự nhiên cho bề mặt bàn ghế gỗ sồi.",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "news-3",
      title: "KIẾN TẠO GÓC THƯ GIÃN ẤM CÚNG CHO PHÒNG KHÁCH GIA ĐÌNH",
      date: "2 THÁNG MỘT, 2026",
      category: "CẢM HỨNG",
      excerpt: "Lựa chọn kệ tủ thấp kết hợp tranh canvas và đèn bàn ánh sáng vàng ấm áp.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
    }
  ],
  brandLogos: [
    { id: "br-1", name: "M. Studio", sub: "INTERIOR DESIGN" },
    { id: "br-2", name: "M BRAND", sub: "NORDIC HOME" },
    { id: "br-3", name: "Beauty", sub: "CRAFT LIVING" },
    { id: "br-4", name: "The Blogger", sub: "DECOR HOUSE" },
    { id: "br-5", name: "B BRAND", sub: "ATELIER" },
    { id: "br-6", name: "Cathrine", sub: "SCANDI STYLE" }
  ]
};
