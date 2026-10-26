import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface MinimalJewelryProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

export interface StudioChupAnh9Data extends ClonedTemplateBaseData {
  taglineQuote: string;
  valuePillars: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  productTabs: string[];
  bestSellerItems: MinimalJewelryProduct[];
  trendingShowcase: {
    leftImage: string;
    centerImage: string;
    centerTitle: string;
    centerPrice: string;
    rightImage: string;
  };
  naturalBeautySection: {
    title: string;
    description: string;
    ctaText: string;
    image: string;
  };
  sparklingLuxurySection: {
    title: string;
    description: string;
    ctaText: string;
    leftArchImage: string;
    rightArchImage: string;
  };
  lookbookStrip: string[];
}

export const studioChupAnh9DefaultData: StudioChupAnh9Data = {
  business: {
    name: "MONA JEWELRY",
    phone: ["(+84) 0313-728-397", "1900 636 648"],
    email: ["info@themona.global", "jewelry@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "09:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 5.0,
    reviewCount: 490,
    aboutTitle: "KHÁM PHÁ VẺ ĐẸP TỰ NHIÊN",
    aboutText: [
      "Trang sức tự nhiên với sự kết hợp hoàn hảo giữa kim cương, ngọc trai và các đá quý khác. Bạn sẽ bị mê hoặc bởi sự tinh tế của thiên nhiên được tái hiện trong từng thiết kế của chúng tôi."
    ]
  },
  hero: {
    eyebrow: "LOOKBOOK & TRANG SỨC CƯỚI",
    title: "Tỏa sáng vẻ đẹp với trang sức độc đáo",
    subtitle:
      "Sự giao thoa tinh tế giữa nghệ thuật chế tác kim hoàn đương đại và phong cách nhiếp ảnh cưới sang trọng.",
    ctaText: "Mua ngay",
    ctaLink: "#ban-chay",
    backgroundImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1800&q=85"
  },
  taglineQuote:
    "“Sắc màu thể hiện đẳng cấp - Trang sức tinh tế cho phong cách của bạn!”",
  clients: [
    { id: "cl-1", name: "ATELIER GEM" },
    { id: "cl-2", name: "LUMIÈRE" },
    { id: "cl-3", name: "AURA BRIDAL" },
    { id: "cl-4", name: "CELESTE" },
    { id: "cl-5", name: "VERA GOLD" }
  ],
  valuePillars: [
    {
      id: "vp-1",
      title: "Chất lượng vượt trội",
      description:
        "Sản phẩm trang sức của chúng tôi được chế tác với chất lượng tuyệt đỉnh"
    },
    {
      id: "vp-2",
      title: "Thiết kế độc đáo",
      description:
        "Bộ sưu tập trang sức của chúng tôi được thiết kế độc đáo"
    },
    {
      id: "vp-3",
      title: "Đảm bảo an toàn",
      description:
        "Bạn có thể yên tâm sử dụng và tự tin khoe vẻ đẹp của mình"
    }
  ],
  productTabs: [
    "Tất cả",
    "Bông tai",
    "Khuyên tròn",
    "Nhẫn cưới",
    "Dây chuyền",
    "Vòng tay"
  ],
  bestSellerItems: [
    {
      id: "bs-1",
      name: "Khuyên Tai Ngọc Lục Bảo Sphere",
      category: "Bông tai",
      price: "2,999,000₫ – 3,999,000₫",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-2",
      name: "Nhẫn Đôi Vàng Trắng Soft Charlotte",
      category: "Nhẫn cưới",
      price: "2,990,000₫ – 3,999,000₫",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-3",
      name: "Nhẫn Cưới Kim Cương Duet Mixed",
      category: "Nhẫn cưới",
      price: "2,399,000₫ – 2,999,000₫",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-4",
      name: "Dây Chuyền Cung Hoàng Đạo Vàng 18K",
      category: "Dây chuyền",
      price: "2,590,000₫ – 3,999,000₫",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-5",
      name: "Bông Tai Bạc Ý Wave Hoops",
      category: "Khuyên tròn",
      price: "2,459,000₫ – 3,999,000₫",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-6",
      name: "Dây Chuyền Ngọc Bích Linked",
      category: "Dây chuyền",
      price: "3,290,000₫ – 4,999,000₫",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-7",
      name: "Nhẫn Hở Đính Kim Cương Cigar Band",
      category: "Nhẫn cưới",
      price: "3,999,000₫ – 6,999,000₫",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bs-8",
      name: "Nhẫn Cầu Hôn Sapphire Wishbone",
      category: "Nhẫn cưới",
      price: "2,999,000₫",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    }
  ],
  trendingShowcase: {
    leftImage:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80",
    centerImage:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    centerTitle: "Nhẫn Cưới Vàng Tube Medium Hoops",
    centerPrice: "5,990,000 ₫",
    rightImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
  },
  naturalBeautySection: {
    title: "KHÁM PHÁ VẺ ĐẸP TỰ NHIÊN",
    description:
      "Trang sức tự nhiên với sự kết hợp hoàn hảo giữa kim cương, ngọc trai và các đá quý khác. Bạn sẽ bị mê hoặc bởi sự tinh tế của thiên nhiên được tái hiện trong từng thiết kế của chúng tôi.",
    ctaText: "KHÁM PHÁ",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
  },
  sparklingLuxurySection: {
    title: "LẤP LÁNH TRANG SỨC SANG TRỌNG",
    description:
      "Với những viên đá quý tự nhiên và thiết kế tinh tế, chúng tôi mang đến cho bạn những món trang sức đẹp như mơ. Hãy biến những khoảnh khắc đáng nhớ của bạn trở nên lấp lánh hơn với trang sức của chúng tôi.",
    ctaText: "KHÁM PHÁ",
    leftArchImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
    rightArchImage:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80"
  },
  testimonials: [
    {
      id: "rv-1",
      author: "Bạch Ngân",
      role: "Khách hàng",
      rating: 5,
      content:
        "“Những món trang sức tôi đã mua đều rất đẹp và tỉ mỉ trong từng chi tiết. Tôi cảm thấy tự tin và lộng lẫy hơn khi đeo những sản phẩm này. Đây thực sự là địa chỉ tin cậy để mua trang sức chất lượng cao.”"
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Đầu tư cho vẻ đẹp bản thân với trang sức kim cương bền vững",
      date: "15/05/2024",
      excerpt:
        "Lựa chọn những thiết kế nhẫn và dây chuyền vàng 18K vượt thời gian giúp tôn lên khí chất sang trọng...",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Nghệ thuật chế tác kim hoàn cao cấp trong từng chi tiết nhỏ",
      date: "15/05/2024",
      excerpt:
        "Khám phá quy trình tuyển chọn đá quý tự nhiên và đánh bóng thủ công tại xưởng kim hoàn Mona...",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Gợi ý quà tặng trang sức ý nghĩa cho kỷ niệm ngày cưới",
      date: "15/05/2024",
      excerpt:
        "Những mẫu mặt dây chuyền đá quý và nhẫn vĩnh cửu thay lời yêu thương gửi trao người bạn đời...",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Bộ sưu tập trang sức Bạc Ý 925 & Vàng Trắng thanh lịch",
      date: "15/05/2024",
      excerpt:
        "Phong cách tối giản hiện đại dễ dàng phối hợp cùng cả trang phục công sở lẫn dạ tiệc sang trọng...",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
    }
  ],
  lookbookStrip: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80"
  ]
};

export const defaultData = studioChupAnh9DefaultData;
export const mockData = studioChupAnh9DefaultData;
export default studioChupAnh9DefaultData;
