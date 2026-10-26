import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface Spa3StorySection {
  title: string;
  description: string;
  ctaText: string;
  image: string;
  dividerStripImage: string;
}

export interface Spa3ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  details: string[];
  image: string;
}

export interface Spa3CheckerItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  image: string;
  imagePosition: "right" | "left";
}

export interface Spa3ParallaxBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Spa3Data extends ClonedTemplateBaseData {
  brandLogoText: string;
  openHoursBanner: string;
  heroActionText: string;
  storySection: Spa3StorySection;
  spaServices: Spa3ServiceItem[];
  signatureQuote: {
    quote: string;
    author: string;
    companionText: string;
  };
  parallaxBanners: {
    middle: Spa3ParallaxBanner;
    bottom: Spa3ParallaxBanner;
  };
  checkerboardFeatures: Spa3CheckerItem[];
}

export const spa3DefaultData: Spa3Data = {
  business: {
    name: "Grand Spa Mona",
    phone: ["1900 636 648", "0908 636 648"],
    email: ["booking@grandspamona.vn", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Chúng tôi mở cửa 10:00 sáng – 20:00 tối hàng ngày",
    rating: 4.9,
    reviewCount: 740,
    experienceYears: "10+",
    aboutTitle: "Hãy trải nghiệm những bí mật của thư giãn",
    aboutText: [
      "Đắm mình trong không gian tĩnh tại ngập tràn hương tinh dầu thảo mộc nguyên bản. Tại Grand Spa, mỗi liệu trình trị liệu là sự giao thoa tinh tế giữa nghệ thuật ấn huyệt cổ truyền phương Đông và nguồn dưỡng chất hoa cỏ hữu cơ thuần khiết.",
      "Chúng tôi thiết kế từng căn phòng trị liệu với ánh nến ấm áp, âm nhạc tần số chữa lành và đội ngũ kỹ thuật viên tay nghề cao nhằm đánh thức mọi giác quan và tái tạo năng lượng trọn vẹn."
    ],
    highlights: [
      "100% tinh chất hoa và thảo mộc hữu cơ chiết xuất lạnh",
      "Không gian trị liệu riêng tư chuẩn 5 sao tĩnh lặng",
      "Chuyên gia trị liệu trên 7 năm kinh nghiệm bấm huyệt",
      "Phác đồ thư giãn cá nhân hóa theo thể trạng từng khách hàng"
    ]
  },
  brandLogoText: "GSPA.MONA",
  openHoursBanner: "Chúng tôi mở cửa 10:00 sáng – 20:00 tối hàng ngày",
  heroActionText: "Sẵn sàng kiểm tra",
  hero: {
    eyebrow: "GRAND SPA & BOTANICAL WELLNESS",
    title: "Nghệ thuật và khoa học\ntinh chất hoa và thực vật",
    subtitle:
      "Hành trình đánh thức vẻ đẹp nguyên bản và cân bằng thân – tâm – trí bằng liệu pháp thảo dược hoàng gia.",
    ctaText: "Sẵn sàng kiểm tra",
    ctaLink: "#dich-vu",
    secondaryCtaText: "Đặt lịch hẹn",
    secondaryCtaLink: "#booking",
    backgroundImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85"
    ]
  },
  storySection: {
    title: "Hãy trải nghiệm những bí mật của thư giãn",
    description:
      "Đắm mình trong không gian tĩnh lặng ngập tràn hương thảo mộc tự nhiên. Tại Grand Spa, mỗi liệu trình là sự kết hợp hoàn hảo giữa nghệ thuật bấm huyệt cổ truyền phương Đông, đá nóng núi lửa và tinh chất hoa cỏ hữu cơ tinh khiết giúp giải tỏa căng thẳng tức thì.",
    ctaText: "KHÁM PHÁ VỀ CHÚNG TÔI",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
    dividerStripImage:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80"
  },
  spaServices: [
    {
      id: "sp-1",
      title: "Dầu massage",
      subtitle: "Aromatherapy Essential Oil Massage",
      duration: "75 phút",
      price: "680.000đ",
      description:
        "Liệu pháp massage toàn thân bằng tinh dầu hoa oải hương và gỗ đàn hương ấm áp giúp đả thông kinh lạc, giảm đau mỏi cổ vai gáy sâu.",
      details: [
        "Ngâm chân muối hồng Himalaya & thảo dược tươi",
        "Ấn huyệt đả thông kinh lạc vùng lưng, cổ vai gáy",
        "Massage tinh dầu hoa hữu cơ ép lạnh 100%",
        "Thưởng trà hoa cúc mật ong sau liệu trình"
      ],
      image:
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sp-2",
      title: "Tẩy da",
      subtitle: "Botanical Sea Salt & Rose Body Polish",
      duration: "60 phút",
      price: "590.000đ",
      description:
        "Thanh tẩy tế bào chết toàn thân bằng muối khoáng biển sâu kết hợp cánh hoa hồng Damask và sữa dưỡng cám gạo giúp làn da mịn màng trắng sáng.",
      details: [
        "Xông hơi thảo dược sả chanh mở lỗ chân lông",
        "Tẩy tế bào chết bằng muối khoáng & cánh hoa hồng",
        "Ủ dưỡng tinh chất sữa non & bơ hạt mỡ",
        "Cấp ẩm khóa dưỡng chất toàn thân"
      ],
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sp-3",
      title: "Thư giãn tự nhiên",
      subtitle: "Hydrotherapy & Herbal Thermal Pool",
      duration: "90 phút",
      price: "850.000đ",
      description:
        "Trải nghiệm thủy trị liệu ngâm bồn thảo dược ấm và hồ bơi khoáng nóng tự nhiên giúp cân bằng tuần hoàn máu và mang lại giấc ngủ sâu.",
      details: [
        "Tắm khoáng ôn tuyền thủy trị liệu",
        "Ngâm bồn gỗ thông cùng 18 vị thảo mộc cung đình",
        "Massage đầu, mặt và thư giãn mắt với đá thạch anh",
        "Thực đơn detox trái cây tươi theo mùa"
      ],
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  ],
  signatureQuote: {
    quote: "“Dịch vụ chữ ký và chú ý cá nhân. Thư giãn tốt nhất.”",
    author: "Susan Doe / Minh Khuê",
    companionText:
      "Mỗi vị khách khi bước chân vào Grand Spa đều được chuyên gia thăm khám thể trạng và pha chế công thức tinh dầu riêng biệt. Chúng tôi nâng niu từng khoảnh khắc nghỉ ngơi của bạn bằng sự tận tâm tuyệt đối."
  },
  parallaxBanners: {
    middle: {
      id: "pb-mid",
      title: "Sự vô tận của vẻ đẹp & niềm đam mê",
      subtitle: "HÃY ĐẾN TRẢI NGHIỆM BÍ MẬT THƯ GIÃN.",
      image:
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1800&q=80"
    },
    bottom: {
      id: "pb-bot",
      title: "Thư giãn. Không còn vượt quá ngân sách của bạn",
      subtitle: "HÃY ĐẾN TRẢI NGHIỆM BÍ MẬT THƯ GIÃN.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1800&q=80"
    }
  },
  checkerboardFeatures: [
    {
      id: "chk-1",
      title: "Bí mật thư giãn",
      description:
        "Sự hòa quyện giữa hơi ấm của đá bazan tự nhiên và hương thơm thanh khiết từ tinh dầu thảo mộc giúp giải phóng hoàn toàn căng thẳng tích tụ trong cơ bắp, trả lại sự dẻo dai và nhẹ nhõm cho cơ thể.",
      ctaText: "XEM DỊCH VỤ CỦA CHÚNG TÔI",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
      imagePosition: "right"
    },
    {
      id: "chk-2",
      title: "Làm hài lòng khách hàng của chúng tôi",
      description:
        "Từ khăn ấm ướp hương sả chanh chào đón đến tách trà thảo mộc sau liệu trình, đội ngũ chuyên viên trị liệu của Grand Spa luôn chăm chút tỉ mỉ từng chi tiết nhỏ để mang đến sự hài lòng vượt mong đợi.",
      ctaText: "XEM DỊCH VỤ CỦA CHÚNG TÔI",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
      imagePosition: "left"
    }
  ],
  news: [
    {
      id: "sp-news-1",
      title: "Một buổi tối với Kayla & Leva về tất cả liệu pháp muối khoáng...",
      date: "24/10/2025",
      category: "Bí quyết Trị liệu",
      excerpt:
        "Muối khoáng biển sâu giàu magie và khoáng chất vi lượng giúp thanh lọc độc tố qua da, làm dịu cơ bắp mệt mỏi chỉ sau 30 phút ngâm bồn...",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sp-news-2",
      title: "Thứ tự đúng để áp dụng các sản phẩm tinh dầu và dưỡng chất...",
      date: "24/10/2025",
      category: "Chăm sóc Da",
      excerpt:
        "Áp dụng quy trình làm sạch sâu, xông hơi thảo mộc trước khi massage tinh dầu giúp hoạt chất thẩm thấu gấp 3 lần vào tầng biểu bì...",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "sp-news-3",
      title: "10 liệu pháp spa thảo dược giúp phục hồi năng lượng và giấc ngủ...",
      date: "24/10/2025",
      category: "Phong cách Sống",
      excerpt:
        "Khám phá những liệu pháp thủy trị liệu kết hợp bấm huyệt cổ truyền giúp cân bằng hệ thần kinh thực vật và cải thiện chất lượng giấc ngủ...",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
