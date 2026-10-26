import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface QuanCafe7EditorialSubsection {
  id: string;
  heading: string;
  image?: string;
  paragraphs: string[];
}

export interface QuanCafe7VisualPanel {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

export interface QuanCafe7Data extends ClonedTemplateBaseData {
  editorialHeader: {
    highlightLetter: string;
    restOfTitle: string;
    introText: string;
  };
  section1: {
    title: string;
    image: string;
    paragraphs: string[];
  };
  section2Title: string;
  subsections: QuanCafe7EditorialSubsection[];
  closingHighlightLinkText: string;
  rightVisualPanels: QuanCafe7VisualPanel[];
}

export const quanCafe7DefaultData: QuanCafe7Data = {
  business: {
    name: "TetHoliday",
    phone: ["0909 888 202", "028 3899 2026"],
    email: ["quatet@tetholiday.vn", "cskh@tetholiday.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 07:30 - 22:00",
    rating: 4.9,
    reviewCount: 1120,
    aboutTitle: "ẤM TRÀ TẾT — TIỆM TRÀ, CÀ PHÊ & QUÀ TẶNG MÙA LỄ HỘI",
    aboutText: [
      "Tết là thời khắc mang đến sự ấm áp, thiêng liêng. Việc trao nhau những hộp trà cổ thụ, cà phê đặc sản và quà Tết ý nghĩa sẽ là dấu hiệu để báo tin mở màn một năm mới sung túc, hạnh phúc."
    ],
    highlights: [
      "Trà Shan Tuyết cổ thụ, Ô Long Bảo Lộc & Cà phê Arabica Cầu Đất rang mộc",
      "Hộp quà sơn mài, hộp bát giác đỏ thẫm khắc kim sang trọng",
      "In logo doanh nghiệp theo yêu cầu & giao quà tận nơi toàn quốc"
    ]
  },
  hero: {
    eyebrow: "THE MONA • BỘ SƯU TẬP TRÀ & QUÀ TẾT",
    subtitle: "Tinh hoa trà Việt, cà phê đặc sản & hộp quà lễ hội cổ truyền",
    title: "ẤM TRÀ TẾT",
    description:
      "Tết là thời khắc mang đến sự ấm áp, thiêng liêng. Việc trao nhau những hộp quà Tết ý nghĩa sẽ là dấu hiệu để báo tin mở màn một năm mới sung túc, hạnh phúc.",
    ctaText: "Đặt Set Quà Trà Tết",
    ctaLink: "#gift-catalog",
    secondaryCtaText: "Khám Phá Ý Nghĩa",
    secondaryCtaLink: "#section-1",
    backgroundImage:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85"
  },
  editorialHeader: {
    highlightLetter: "Ấ",
    restOfTitle: "M TRÀ TẾT",
    introText:
      "Tết là thời khắc mang đến sự ấm áp, thiêng liêng. Việc trao nhau những hộp quà Tết ý nghĩa sẽ là dấu hiệu để báo tin mở màn một năm mới sung túc, hạnh phúc. Ngoài ra việc tặng quà Tết cũng là một cách thể hiện tấm lòng của người tặng với người nhận. Và ý nghĩa của việc tặng quà Tết là gì? Hãy cùng tìm hiểu trong bài viết sau nhé!"
  },
  section1: {
    title: "1. Tặng quà Tết – nét đẹp cổ truyền của người Việt Nam từ xa xưa",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    paragraphs: [
      "Trong không khí háo hức chờ đón ngày Tết cổ truyền sắp tới, nhà nhà đều tất bật dọn dẹp và chuẩn bị những món quà biếu Tết, những ấm trà thơm và tách cà phê nồng đượm đãi khách. Do đó mà các giỏ quà Tết đẹp sang trọng đều có sẵn tại các cửa hàng nhằm đáp ứng nhu cầu của người tiêu dùng.",
      "Trong số tất cả mặt hàng quà tặng thì hộp trà thượng hạng kết hợp bánh mứt và hạt dinh dưỡng lại được ưa chuộng và yêu thích hơn cả. Bởi lẽ nó được thiết kế độc đáo, bắt mắt với những sản phẩm phong phú đa dạng được gói ghém khéo léo bên trong."
    ]
  },
  section2Title: "2. Ý nghĩa của tặng quà Tết",
  subsections: [
    {
      id: "sub-2-1",
      heading: "2.1 Ý nghĩa của tặng quà Tết cho ông bà, cha mẹ",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "Những mẫu quà Tết sức khỏe như trà thảo mộc, trà sen Tây Hồ hay giỏ quà trái cây thường được mọi người sử dụng làm quà biếu ông bà, cha mẹ. Bởi chúng có những tiện ích và tính hữu dụng như nuôi dưỡng và cải thiện sức khỏe, là thức uống thanh tao lành mạnh trong những ngày Tết.",
        "Qua món quà này, những đứa con sẽ thể hiện lòng biết ơn, sự quan tâm và yêu thương của mình dành cho ông bà, cha mẹ. Ngoài ra, ý nghĩa của giỏ quà Tết này như lời chúc sức khỏe, hy vọng ông bà, cha mẹ sẽ luôn khỏe mạnh để có thể sống bên con cháu dài lâu."
      ]
    },
    {
      id: "sub-2-2",
      heading: "2.2 Ý nghĩa của quà Tết tặng thầy cô",
      paragraphs: [
        "Theo phép ẩn dụ xa xưa, thầy cô được xem là những thuyền trưởng lái con thuyền đưa các học trò nhỏ đến bến bờ tri thức. Những hộp trà và cà phê Tết đẹp sang trọng dùng để tặng thầy cô ngày Tết sẽ giúp học sinh thể hiện được tấm lòng kính trọng và tri ân với công ơn nuôi dạy, chỉ bảo của thầy cô.",
        "Ngoài ra, ý nghĩa của giỏ quà Tết này cũng thể hiện được truyền thống và đạo lý tốt đẹp là: “Tôn sư trọng đạo” và “Uống nước nhớ nguồn” của dân tộc Việt Nam."
      ]
    },
    {
      id: "sub-2-3",
      heading: "2.3 Ý nghĩa tặng quà Tết bạn bè, đồng nghiệp",
      paragraphs: [
        "Món quà Tết tặng cho bạn bè mang ý nghĩa chúc cho người nhận luôn nhận luôn gặp nhiều may mắn, bình an trong năm mới.",
        "Để thể hiện được sự quan tâm, quý mến mà bạn dành cho đồng nghiệp, bằng hữu của mình thì mua quà tặng ngày Tết chính là việc làm quan trọng. Những mẫu hộp trà, cà phê phin giấy đẹp sẽ thay bạn gửi lời chúc may mắn và bình an tới đối phương trong năm mới.",
        "Không những thế, qua hành động này, bạn còn thể hiện được sự trân trọng và biết ơn đối với những gì mà họ đã làm cho bạn suốt một năm qua. Cụ thể như giúp đỡ bạn trong công việc, ở bên bạn những lúc khó khăn hay chỉ đơn giản cùng nhau trải qua khoảnh khắc vui vẻ của cuộc sống."
      ]
    },
    {
      id: "sub-2-4",
      heading: "2.4 Ý nghĩa tặng quà Tết cho người yêu",
      paragraphs: [
        "Có thể nói, năm mới chính là cơ hội tốt để các cặp đôi có thể gắn kết và hâm nóng tình cảm bằng những món quà tặng ý nghĩa. Thông thường, qua việc làm này, đối phương sẽ phần nào thấy được tấm lòng, sự yêu thương và quan tâm của bạn.",
        "Nếu bạn chọn được hộp trà hoa cúc mật ong hay bánh ngọt lễ hội phù hợp với sở thích của người mình yêu, hẳn họ sẽ rất hạnh phúc và vui vẻ. Từ đó cũng giúp cho tình cảm giữa hai người trở nên thắm thiết hơn."
      ]
    },
    {
      id: "sub-2-5",
      heading: "2.5 Ý nghĩa của giỏ quà Tết tặng bố mẹ vợ, bố mẹ chồng",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      paragraphs: [
        "Trong những ngày đầu năm, các chàng rể, nàng dâu sẽ chọn mua những giỏ quà biếu đẹp dành tặng bố mẹ vợ, bố mẹ chồng. Ý nghĩa của giỏ quà Tết này nhằm thể hiện tấm lòng hiếu thảo và sự biết ơn mà bạn dành cho họ.",
        "Ngoài ra, thông qua phần quà này cũng giúp bạn gửi gắm lời chúc ngày Tết ý nghĩa. Chúc cho bố mẹ hai bên luôn khỏe mạnh, vui vẻ và hạnh phúc trong năm mới."
      ]
    },
    {
      id: "sub-2-6",
      heading: "2.6 Ý nghĩa quà Tết đối tác, khách hàng quan trọng",
      paragraphs: [
        "Ý nghĩa của việc tặng quà Tết này nhằm bày tỏ sự tri ân và lời cảm ơn sâu sắc đối với những đối tác, khách hàng, người đã tin tưởng và gắn bó với công ty suốt một năm qua.",
        "Không những thế qua phần quà này, đối tác, khách hàng sẽ cảm thấy bản thân được coi trọng và tin tưởng. Từ đó tạo nên sự thiện cảm và mong muốn hợp tác dài lâu với công ty.",
        "Ngoài ra, tùy theo từng vật phẩm có trong món quà mà ý nghĩa của giỏ quà Tết cũng thay đổi theo. Nhưng tựu chung lại vẫn mang lời chúc tốt đẹp và hy vọng trong năm mới, người nhận sẽ gặp được nhiều may mắn."
      ]
    }
  ],
  closingHighlightLinkText: "combo túi quà Tết",
  rightVisualPanels: [
    {
      id: "vp-1",
      title: "Set Trà Hoa Đào & Kim Nguyên Bảo",
      subtitle: "Trà Ô Long Thượng Hạng & Mứt Tết Cổ Truyền",
      price: "680.000 ₫",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "vp-2",
      title: "Hộp Quà Bát Giác Hồng Phúc & Bánh Trà",
      subtitle: "Bánh Ngọt Quýt Vàng & Trà Shan Tuyết Cổ Thụ",
      price: "890.000 ₫",
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "vp-3",
      title: "Set Quà Kim Bảo Cát Tường & Cà Phê Đặc Sản",
      subtitle: "Hộp Đỏ Khắc Vàng 24K & Arabica Cầu Đất Rang Mộc",
      price: "1.250.000 ₫",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "vp-4",
      title: "Bộ Lễ Phẩm Đại Cát & Dây Khánh Đồng Tiền",
      subtitle: "Combo Trà Sen Tây Hồ, Hạt Dinh Dưỡng & Bao Lì Xì Lụa",
      price: "1.590.000 ₫",
      image:
        "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=1000&q=85"
    }
  ]
};
