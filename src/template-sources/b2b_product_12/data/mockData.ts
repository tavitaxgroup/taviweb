import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2B12TrustItem {
  id: string;
  title: string;
  description: string;
  icon: "shield" | "award" | "chat" | "box";
}

export interface B2B12ShowcaseCategory {
  id: string;
  badge: string;
  title: string;
  image: string;
  description: string;
}

export interface B2B12ProductItem {
  id: string;
  title: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeType?: "discount" | "soldout";
  ratingCount: number;
  image: string;
  specs: string;
}

export interface B2B12ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  featured?: boolean;
}

export interface B2B12Data extends ClonedTemplateBaseData {
  aboutSection: {
    titlePrefix: string;
    brandHighlight: string;
    leadText: string;
    subTitle: string;
    bodyText: string;
    mainImage: string;
    secondaryImage: string;
  };
  trustItems: B2B12TrustItem[];
  distributedBrands: string[];
  usaDistributionSection: {
    brandLabel: string;
    title: string;
    categories: B2B12ShowcaseCategory[];
  };
  featuredProducts: B2B12ProductItem[];
  customerReviews: B2B12ReviewItem[];
  featuredNews: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
  }>;
  sideNews: Array<{
    id: string;
    title: string;
    image: string;
  }>;
  phoneCaptureBanner: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
  };
  companyBranches: Array<{
    id: string;
    name: string;
    hotline: string;
    email: string;
    address: string;
  }>;
}

export const b2bProduct12DefaultData: B2B12Data = {
  business: {
    name: "THE MONA",
    phone: ["0313728397", "0909 728 397"],
    email: ["info@themona.global", "packaging@themona.global"],
    address: "1073/23 Đ. Cách Mạng Tháng 8, Phường 7, Tân Bình, Thành phố Hồ Chí Minh",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 520,
    aboutTitle: "Chúng tôi THE MONA",
    aboutText: [
      "THE MONA, một phần của Công ty TNHH TM&DV Xuất Nhập khẩu Việt Tây, là đối tác tin cậy mang đến cho quý khách hàng những dịch vụ gia công bao bì chất lượng và uy tín.",
      "Chúng tôi cung cấp một loạt các dịch vụ gia công bao bì đa dạng, bao gồm thiết kế bao bì, sản xuất bao bì, in ấn trên bao bì, và nhiều dịch vụ gia công bao bì khác. Tất cả các dịch vụ của chúng tôi đều được thực hiện với chất lượng cao và đáp ứng các yêu cầu cụ thể của từng khách hàng."
    ],
    highlights: [
      "Dây chuyền sản xuất và in ấn bao bì công nghiệp đạt chuẩn ISO & xuất khẩu Mỹ",
      "Gia công đa dạng chai lọ nhựa, thủy tinh, túi zipper màng ghép, khay thực phẩm",
      "Tư vấn thiết kế kiểu dáng công nghiệp và in thử mẫu miễn phí cho doanh nghiệp"
    ]
  },
  hero: {
    eyebrow: "THE MONA Packaging.",
    subtitle: "CHUYÊN GIA TRONG GIA CÔNG BAO BÌ",
    title: "CHUYÊN GIA TRONG GIA CÔNG BAO BÌ",
    description:
      "Nhà máy sản xuất, in ấn và phân phối bao bì công nghiệp, chai lọ mỹ phẩm, bao bì thực phẩm – đồ uống tiêu chuẩn xuất khẩu Hoa Kỳ.",
    ctaText: "Khám phá ngay",
    ctaLink: "#featured-products",
    secondaryCtaText: "Nhận báo giá sỉ",
    secondaryCtaLink: "#phone-capture",
    backgroundImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=85"
  },
  aboutSection: {
    titlePrefix: "Chúng tôi",
    brandHighlight: "THE MONA",
    leadText:
      "THE MONA, một phần của Công ty TNHH TM&DV Xuất Nhập khẩu Việt Tây, là đối tác tin cậy mang đến cho quý khách hàng những dịch vụ gia công bao bì chất lượng và uy tín.",
    subTitle: "THE MONA - Đối Tác Từ Mỹ Đến Việt Nam",
    bodyText:
      "Chúng tôi cung cấp một loạt các dịch vụ gia công bao bì đa dạng, bao gồm thiết kế bao bì, sản xuất bao bì, in ấn trên bao bì, và nhiều dịch vụ gia công bao bì khác. Tất cả các dịch vụ của chúng tôi đều được thực hiện với chất lượng cao và đáp ứng các yêu cầu cụ thể của từng khách hàng.",
    mainImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=700&q=85"
  },
  trustItems: [
    {
      id: "tr-1",
      title: "An toàn mua sắm",
      description:
        "Website có đánh giá tốt và danh tiếng tốt. Cam kết nguyên liệu hạt nhựa và giấy đạt chuẩn an toàn vệ sinh thực phẩm.",
      icon: "shield"
    },
    {
      id: "tr-2",
      title: "Luôn luôn tự tin",
      description:
        "Kiểm định chất lượng nghiêm ngặt từng lô hàng xuất xưởng, bảo hành đổi trả 1-1 nếu phát sinh lỗi kỹ thuật in ấn.",
      icon: "award"
    },
    {
      id: "tr-3",
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ kỹ sư bao bì và chuyên viên tư vấn B2B túc trực hỗ trợ báo giá sỉ và gửi mẫu thử tận nơi toàn quốc.",
      icon: "chat"
    },
    {
      id: "tr-4",
      title: "Sản phẩm thật",
      description:
        "100% bao bì xuất xưởng đúng định lượng, độ dày màng ghép và chuẩn hệ màu Pantone/CMYK đã duyệt mẫu.",
      icon: "box"
    }
  ],
  distributedBrands: [
    "SAINT LAURENT",
    "H&M",
    "UNIQLO",
    "Unilever",
    "adidas",
    "Urban Decay"
  ],
  usaDistributionSection: {
    brandLabel: "THE MONA Packaging.",
    title: "VẬN CHUYỂN VÀ PHÂN PHỐI HÀNG MỸ",
    categories: [
      {
        id: "cat-chai",
        badge: "New",
        title: "Chai",
        image:
          "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
        description:
          "Chai nhựa PET, HDPE, chai thủy tinh đồ uống và dược mỹ phẩm cao cấp."
      },
      {
        id: "cat-coc",
        badge: "New",
        title: "Cốc",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        description:
          "Ly cốc giấy Kraft, cốc nhựa PP/PET và túi đáy đứng đựng cà phê xuất khẩu."
      },
      {
        id: "cat-baobi",
        badge: "New",
        title: "Bao bì",
        image:
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
        description:
          "Khay nhựa định hình, màng bọc thực phẩm hút chân không và bao bì màng ghép phức hợp."
      }
    ]
  },
  featuredProducts: [
    {
      id: "prd-1",
      title: "Bao bì chất lượng cao Mona Pre",
      price: "Liên hệ (0₫)",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
      specs: "Chai nhựa PET/HDPE 500ml in nhãn màng co nhiệt theo yêu cầu"
    },
    {
      id: "prd-2",
      title: "Bao bì mỹ phẩm cao cấp vòi nhấn",
      price: "99,000₫",
      oldPrice: "130,000₫",
      badge: "-24%",
      badgeType: "discount",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      specs: "Bộ chai lọ mỹ phẩm nhựa Acrylic/PP đen nhám chống tia UV"
    },
    {
      id: "prd-3",
      title: "Bao bì chất lượng cao HTM",
      price: "149,000₫ – 199,000₫",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
      specs: "Chai đựng nước ép, sữa hạt nắp nhôm niêm phong chống tràn"
    },
    {
      id: "prd-4",
      title: "Khay bao bì thực phẩm hút chân không",
      price: "99,000₫",
      oldPrice: "130,000₫",
      badge: "-24%",
      badgeType: "discount",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
      specs: "Khay nhựa PP nguyên sinh dùng được trong kho đông lạnh và lò vi sóng"
    },
    {
      id: "prd-5",
      title: "Bộ chai lọ serum & kem dưỡng da",
      price: "99,000₫",
      oldPrice: "130,000₫",
      badge: "-24%",
      badgeType: "discount",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      specs: "Gia công phun màu nhám và ép kim logo thương hiệu độc quyền"
    },
    {
      id: "prd-6",
      title: "Bao bì màng ghép thực phẩm đông lạnh",
      price: "99,000₫",
      oldPrice: "130,000₫",
      badge: "-24%",
      badgeType: "discount",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80",
      specs: "In ống đồng 8 màu sắc nét, đường hàn biên chịu lực cao"
    },
    {
      id: "prd-7",
      title: "Chai nhựa đồ uống nắp vặn tiệt trùng",
      price: "130,000₫",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
      specs: "Đạt chuẩn FDA xuất khẩu thị trường Bắc Mỹ và Châu Âu"
    },
    {
      id: "prd-8",
      title: "Túi zipper đáy đứng & Ly cà phê giấy",
      price: "149,000₫",
      oldPrice: "199,000₫",
      badge: "Hết hàng",
      badgeType: "soldout",
      ratingCount: 0,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
      specs: "Túi cà phê ghép màng nhôm có van thông hơi 1 chiều nhập khẩu"
    }
  ],
  customerReviews: [
    {
      id: "rv-1",
      name: "Anh Hòa",
      role: "Giám đốc",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Sản phẩm chất lượng cao, dịch vụ đi kèm với chất lượng bỏ ra trong từng sản phẩm bao bì xuất xưởng."
    },
    {
      id: "rv-2",
      name: "Anh Cường",
      role: "Chủ chuỗi F&B",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Sản phẩm chất lượng cao, dịch vụ đi kèm với chất lượng bỏ ra trong từng sản phẩm ly cốc và túi cà phê."
    },
    {
      id: "rv-3",
      name: "Anh Tiến",
      role: "Doanh nhân",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      content:
        "Sản phẩm chất lượng cao, dịch vụ đi kèm với chất lượng bỏ ra trong từng sản phẩm. Tiến độ giao hàng cực kỳ chuẩn xác.",
      featured: true
    },
    {
      id: "rv-4",
      name: "Anh Hoàng",
      role: "Lãnh đạo",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      content:
        "Sản phẩm chất lượng cao, dịch vụ đi kèm với chất lượng bỏ ra trong từng sản phẩm chai lọ dược mỹ phẩm."
    },
    {
      id: "rv-5",
      name: "Anh Long",
      role: "Trưởng phòng Thu mua",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
      content:
        "Sản phẩm chất lượng cao, dịch vụ đi kèm với chất lượng bỏ ra trong từng đơn hàng gia công số lượng lớn."
    }
  ],
  featuredNews: [
    {
      id: "fn-1",
      title: "Thiết kế thi công bao bì màng ghép tiêu chuẩn xuất khẩu",
      date: "9 Tháng Năm, 2024",
      excerpt:
        "Trong ngành công nghiệp thiết kế và sản xuất bao bì, sự đảm bảo về chất lượng và độ bền của các vật liệu là một yếu tố quan trọng. Nhưng liệu quy trình kiểm định...",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fn-2",
      title: "Giải pháp đóng gói tự động hóa cho nhà máy thực phẩm",
      date: "9 Tháng Tư, 2024",
      excerpt:
        "Trong ngành công nghiệp thiết kế và sản xuất bao bì, sự đảm bảo về chất lượng và độ bền của các vật liệu là một yếu tố quan trọng. Nhưng liệu dây chuyền tự động...",
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80"
    }
  ],
  sideNews: [
    {
      id: "sn-1",
      title: "Thiết kế thi công bao bì chai lọ dược phẩm chuẩn GMP",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sn-2",
      title: "Công nghệ in ống đồng 9 màu trên màng nhựa phức hợp",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sn-3",
      title: "Xu hướng bao bì giấy Kraft thân thiện môi trường 2025",
      image:
        "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "sn-4",
      title: "Tiêu chuẩn FDA Hoa Kỳ đối với bao bì tiếp xúc thực phẩm",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80"
    }
  ],
  phoneCaptureBanner: {
    title: "ĐĂNG KÝ NHẬN THÔNG TIN",
    subtitle:
      "Nếu bạn cần thêm bất kì thông tin gì về sản phẩm, để lại số điện thoại của bạn bên dưới để chúng tôi liên hệ!",
    placeholder: "Hãy điền số điện thoại của bạn nha!",
    buttonText: "Gửi"
  },
  companyBranches: [
    {
      id: "cb-1",
      name: "CÔNG TY TNHH MONA MEDIA",
      hotline: "0313728397",
      email: "info@themona.global",
      address: "1073/23 Đ. Cách Mạng Tháng 8, Phường 7, Tân Bình, Thành phố Hồ Chí Minh"
    },
    {
      id: "cb-2",
      name: "CÔNG TY TNHH PHẦN MỀM MONA",
      hotline: "0313728397",
      email: "info@themona.global",
      address: "1073/23 Đ. Cách Mạng Tháng 8, Phường 7, Tân Bình, Thành phố Hồ Chí Minh"
    },
    {
      id: "cb-3",
      name: "CÔNG TY TNHH MONA HOST",
      hotline: "0313728397",
      email: "info@themona.global",
      address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM"
    }
  ]
};
