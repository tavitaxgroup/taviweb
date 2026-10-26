import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat17BenefitItem {
  id: string;
  title: string;
  bullets: string[];
  icon: "lightbulb" | "chart" | "pin" | "atom" | "users" | "headset";
}

export interface NoiThat17VerticalPanel {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface NoiThat17BentoProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  position: "left-top" | "left-bottom" | "center-tall" | "right-top" | "right-bottom";
}

export interface NoiThat17Data extends ClonedTemplateBaseData {
  benefits: NoiThat17BenefitItem[];
  verticalPanels: NoiThat17VerticalPanel[];
  bentoProjects: NoiThat17BentoProject[];
  commitmentQuotes: Array<{
    id: string;
    quote: string;
    author: string;
  }>;
}

export const noiThat17DefaultData: NoiThat17Data = {
  business: {
    name: "An Gia Art",
    phone: ["1900 638 646", "0909 638 646"],
    email: ["mon@mona.media", "lienhe@angiaart.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:30 - 18:00",
    rating: 4.9,
    reviewCount: 540,
    aboutTitle: "Chúng tôi cam kết với bạn",
    aboutText: [
      "Những gì chúng tôi làm cho bạn là duy nhất, không trùng lặp bất kỳ thiết kế nào với khách hàng khác nhau. Mỗi không gian đều được nghiên cứu kỹ lưỡng về công năng, ánh sáng và phong thủy hài hòa."
    ],
    highlights: [
      "Thiết kế độc bản cá nhân hóa theo gu thẩm mỹ và phong thủy gia chủ",
      "Trải nghiệm bản vẽ thực tế ảo 3D sống động trước khi thi công",
      "Quản lý ngân sách minh bạch và kết nối trực tiếp hệ sinh thái vật liệu cao cấp"
    ]
  },
  hero: {
    eyebrow: "KIẾN TRÚC & NỘI THẤT PHONG THỦY",
    subtitle: "Thẩm mỹ cho mọi không gian sống",
    title: "Cải thiện năng suất tại văn phòng",
    description:
      "Thẩm mỹ cho mọi không gian sống và làm việc đương đại, đánh thức nguồn năng lượng sáng tạo mỗi ngày.",
    ctaText: "XEM THÊM",
    ctaLink: "#projects",
    backgroundImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85"
  },
  benefits: [
    {
      id: "ben-1",
      title: "Ý tưởng và cảm hứng",
      bullets: [
        "Chúng tôi yêu đam mê, không đơn thuần kinh doanh",
        "Sáng tạo vô hạn về ý tưởng không gian",
        "Chúng tôi quan tâm đến bạn và từng ý tưởng nhỏ"
      ],
      icon: "lightbulb"
    },
    {
      id: "ben-2",
      title: "Ngân sách và lợi ích",
      bullets: [
        "Tối đa hóa giá trị đầu tư của dự án",
        "Dự toán ngân sách chi tiết, rõ ràng",
        "Nhận nhiều lời khuyên tối ưu vật liệu"
      ],
      icon: "chart"
    },
    {
      id: "ben-3",
      title: "Mục tiêu",
      bullets: [
        "Xây dựng tỉ mỉ và chính xác từng milimet",
        "Tất cả thể hiện rõ trong bản thiết kế",
        "Tùy chỉnh mọi chi tiết theo ý muốn gia chủ"
      ],
      icon: "pin"
    },
    {
      id: "ben-4",
      title: "Kỹ thuật & Công nghệ",
      bullets: [
        "Xem demo trực quan với kỹ thuật 3D",
        "Mỗi dự án là một tác phẩm duy nhất",
        "Giám sát tác giả chuyên nghiệp tận công trình"
      ],
      icon: "atom"
    },
    {
      id: "ben-5",
      title: "Nhà cung cấp",
      bullets: [
        "Là một trung tâm quản lý dự án đồng bộ",
        "Danh mục sản phẩm và vật liệu phong phú",
        "Kết nối trực tiếp các nhà cung cấp uy tín"
      ],
      icon: "users"
    },
    {
      id: "ben-6",
      title: "Dịch vụ & Hỗ trợ",
      bullets: [
        "Bao gồm nhiều dịch vụ hậu mãi tuyệt vời",
        "Hỗ trợ phản hồi nhanh chóng trong vài giờ",
        "Đảm bảo tiến độ bàn giao chuẩn xác"
      ],
      icon: "headset"
    }
  ],
  verticalPanels: [
    {
      id: "vp-1",
      title: "Thiết kế văn phòng",
      subtitle: "Không gian làm việc sáng tạo & chuẩn phong thủy doanh nghiệp",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-2",
      title: "Thiết kế nhà hàng",
      subtitle: "Kiến tạo trải nghiệm ẩm thực sang trọng và thu hút thực khách",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-3",
      title: "Thiết kế biệt thự",
      subtitle: "Tôn vinh đẳng cấp thượng lưu với vật liệu gỗ quý và đá tự nhiên",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-4",
      title: "Thiết kế nhà ở",
      subtitle: "Tổ ấm giao hòa ánh sáng tự nhiên và cây xanh thoáng đãng",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "vp-5",
      title: "Thiết kế căn hộ",
      subtitle: "Tối ưu từng mét vuông diện tích với nội thất thông minh tinh tế",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"
    }
  ],
  bentoProjects: [
    {
      id: "bp-1",
      title: "Phòng khách",
      subtitle: "Tự hào giới thiệu không gian phòng khách ấm cúng cho mọi gia đình",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
      position: "left-top"
    },
    {
      id: "bp-2",
      title: "Phòng ngủ",
      subtitle: "Đắm chìm trong không gian giấc mơ yên bình và thư thái",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80",
      position: "left-bottom"
    },
    {
      id: "bp-3",
      title: "Phòng hỗn hợp",
      subtitle:
        "Từ truyền thống đến hiện đại, thanh lịch đến thoải mái, trọng tâm của chúng tôi là sự thực hiện tinh tế",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
      position: "center-tall"
    },
    {
      id: "bp-4",
      title: "Phòng tắm",
      subtitle: "Thư giãn tuyệt đối trong không gian Spa tại gia",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=80",
      position: "right-top"
    },
    {
      id: "bp-5",
      title: "Phòng bếp",
      subtitle: "Mang ý tưởng và cảm hứng ấm áp vào từng bữa ăn gia đình",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80",
      position: "right-bottom"
    }
  ],
  commitmentQuotes: [
    {
      id: "cq-1",
      quote:
        "Những gì chúng tôi làm cho bạn là duy nhất, không trùng lặp bất kì thiết kế nào với khách hàng khác nhau.",
      author: "– Đầu tiên & cuối cùng –"
    },
    {
      id: "cq-2",
      quote:
        "Sự cân bằng giữa nghệ thuật sắp đặt không gian và nguyên lý phong thủy phương Đông tạo nên thịnh vượng bền lâu.",
      author: "– Triết lý Kiến trúc An Gia –"
    },
    {
      id: "cq-3",
      quote:
        "Tận tâm lắng nghe từ bản phác thảo đầu tiên cho đến ngày trao tay chìa khóa tổ ấm hoàn thiện.",
      author: "– Cam kết Chất lượng –"
    }
  ]
};
