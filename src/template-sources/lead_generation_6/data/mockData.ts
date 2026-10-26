import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface EcoGardenFeatureCard {
  id: string;
  title: string;
  description: string;
  icon: "apple" | "sprout" | "leaf" | "trees";
}

export interface EcoGardenGaugeStat {
  id: string;
  percentage: number;
  title: string;
  description: string;
  color: "green" | "amber";
}

export interface LeadGeneration6Data extends ClonedTemplateBaseData {
  greenFeatureCards: EcoGardenFeatureCard[];
  freshBanner: {
    subtitle: string;
    title: string;
    description: string;
    ctaText: string;
    mainImage: string;
    floatingPlateImage: string;
  };
  gaugeStats: EcoGardenGaugeStat[];
  weeklyDeal: {
    eyebrow: string;
    title: string;
    productName: string;
    priceNote: string;
    countdown: { days: number; hours: number; mins: number; secs: number };
    ctaText: string;
    image: string;
  };
  organicSeals: Array<{ id: string; label: string; sub: string }>;
  footerGallery: string[];
}

export const leadGeneration6DefaultData: LeadGeneration6Data = {
  business: {
    name: "Mona Juice Organic",
    phone: ["0909 686 789", "0313 728 397"],
    email: ["nongtrai@monajuice.vn", "info@themona.global"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 06:30 - 20:30",
    rating: 4.9,
    reviewCount: 740,
    aboutTitle: "Khám phá nông trại hữu cơ",
    aboutText: [
      "Tại nông trại, từng khu vực được thiết kế kỹ lưỡng để tối ưu hóa sự sáng tạo và sự phát triển tự nhiên của cây cỏ, rau mầm và trái cây. Chúng tôi chú trọng vào việc duy trì sự cân bằng sinh thái và tái tạo đất đai để bảo vệ môi trường. Các hệ thống tưới tiêu hiệu quả và kỹ thuật canh tác thông minh được áp dụng để đảm bảo sự hài hòa giữa con người và thiên nhiên."
    ],
    highlights: [
      "100% Trái cây tươi và rau củ hữu cơ thu hoạch trong ngày",
      "Không thuốc trừ sâu hóa học, không phân bón tổng hợp và không chất bảo quản",
      "Trải nghiệm tham quan nhà vườn, hái trái cây và thưởng thức nước ép nguyên chất"
    ]
  },
  hero: {
    eyebrow: "MONA JUICE",
    subtitle: "NÔNG TRẠI SINH THÁI & THỰC PHẨM TỰ NHIÊN",
    title: "Vườn Xanh & Nông Trại Hữu Cơ",
    description:
      "Mỗi loại trái cây trên trang trại không chỉ là một sản phẩm tươi ngon mà còn là hành trình khám phá nguồn gốc canh tác thuận tự nhiên.",
    ctaText: "LIÊN HỆ",
    ctaLink: "#order-modal",
    secondaryCtaText: "GIỚI THIỆU",
    secondaryCtaLink: "#about",
    backgroundImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85"
  },
  greenFeatureCards: [
    {
      id: "gf-1",
      title: "Thực phẩm hữu cơ",
      description: "Thực phẩm hữu cơ mang lại nhiều lợi ích cho sức khỏe và môi trường.",
      icon: "apple"
    },
    {
      id: "gf-2",
      title: "Làm Vườn",
      description: "Chúng tôi chăm sóc vườn hằng ngày, đảm bảo cây quả được tươi mới nhất.",
      icon: "sprout"
    },
    {
      id: "gf-3",
      title: "Phân bón hữu cơ",
      description:
        "Chúng tôi thường xuyên bón phân hữu cơ cho thực vật đảm bảo cây được phát triển tốt nhất.",
      icon: "leaf"
    },
    {
      id: "gf-4",
      title: "Thiết kế cảnh quan",
      description:
        "Tại vườn thì quý khách có thể tham quan và chụp hình trải nghiệm tại nông trại.",
      icon: "trees"
    }
  ],
  freshBanner: {
    subtitle: "Trang trại thực phẩm & rau củ",
    title: "Trang trại cung cấp thực phẩm tươi 100%",
    description:
      "Tại đây bạn có thể trải nghiệm làm vườn, tham quan hoặc ăn thử các loại trái cây chín cây ngay tại nông trại.",
    ctaText: "LIÊN HỆ",
    mainImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=85",
    floatingPlateImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80"
  },
  gaugeStats: [
    {
      id: "gs-1",
      percentage: 100,
      title: "Trái cây tươi",
      description: "Cung cấp 100% trái cây tươi",
      color: "green"
    },
    {
      id: "gs-2",
      percentage: 83,
      title: "Thực Vật Hữu Cơ",
      description: "Không sử dụng chất hóa học và phân bón hóa học",
      color: "amber"
    },
    {
      id: "gs-3",
      percentage: 97,
      title: "Khách hàng yêu thích",
      description: "Được hơn 97% khách hàng yêu thích trái cây tại đây",
      color: "green"
    },
    {
      id: "gs-4",
      percentage: 79,
      title: "Nhập Khẩu",
      description: "Tại đây chúng tôi cũng cung cấp các loại trái cây nhập khẩu",
      color: "amber"
    }
  ],
  weeklyDeal: {
    eyebrow: "MONA SALE",
    title: "Ưu đãi trong Tuần",
    productName: "Cam tươi",
    priceNote: "89k/kg",
    countdown: { days: 80, hours: 14, mins: 31, secs: 56 },
    ctaText: "MUA NGAY",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=85"
  },
  testimonials: [
    {
      id: "test-1",
      author: "Nguyễn Phương Thảo",
      role: "Chuyên gia Dinh dưỡng & Chăm sóc Sức khỏe",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      content:
        "Rau củ và cam tươi tại nông trại giữ được vị ngọt thanh tự nhiên và mùi thơm rất đặc trưng. Gia đình mình hoàn toàn yên tâm khi đặt giỏ rau hữu cơ định kỳ mỗi tuần cho các bữa ăn xanh lành mạnh."
    },
    {
      id: "test-2",
      author: "Trần Minh Khôi",
      role: "Đầu bếp Nhà hàng Thực dưỡng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      content:
        "Nguồn nguyên liệu rau mầm và trái cây tươi thu hoạch trong ngày từ Mona Juice giúp các món salad và nước ép Cold-Pressed của nhà hàng luôn đạt độ tươi ngon cao nhất."
    }
  ],
  news: [
    {
      id: "blog-1",
      title: "Bí quyết canh tác nông nghiệp hữu cơ giúp giữ trọn dinh dưỡng trong đất",
      date: "15 THÁNG NĂM, 2026",
      category: "Monamedia",
      excerpt:
        "Tìm hiểu phương pháp ủ phân hữu cơ vi sinh và luân canh cây trồng giúp đất đai màu mỡ tự nhiên mà không cần hóa chất.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "blog-2",
      title: "Cách chọn và bảo quản táo xanh, cam vàng hữu cơ tươi lâu suốt 2 tuần",
      date: "15 THÁNG NĂM, 2026",
      category: "Monamedia",
      excerpt:
        "Hướng dẫn phân loại và bảo quản trái cây tươi không phủ sáp bảo quản ở nhiệt độ ngăn mát tiêu chuẩn.",
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "blog-3",
      title: "Trải nghiệm một ngày làm nông dân thu hoạch rau quả sạch cuối tuần",
      date: "15 THÁNG NĂM, 2026",
      category: "Monamedia",
      excerpt:
        "Hoạt động dã ngoại gắn kết gia đình, giúp trẻ nhỏ tìm hiểu thiên nhiên và thưởng thức bữa trưa nông trại.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"
    }
  ],
  organicSeals: [
    { id: "s-1", label: "100% ORGANIC", sub: "NATURAL QUALITY" },
    { id: "s-2", label: "ECO ORGANIC", sub: "CERTIFIED FARM" },
    { id: "s-3", label: "BEST QUALITY", sub: "PREMIUM FRESH" },
    { id: "s-4", label: "100% NATURAL", sub: "NON-GMO PRODUCE" },
    { id: "s-5", label: "ORGANIC", sub: "FARM TO TABLE" }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80"
  ]
};
