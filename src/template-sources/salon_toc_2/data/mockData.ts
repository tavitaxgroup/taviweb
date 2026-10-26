import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface SalonToc2ExperienceFeature {
  id: string;
  title: string;
  description: string;
  icon: "tools" | "location" | "care";
}

export interface SalonToc2PriceItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
}

export interface SalonToc2TemplateData extends ClonedTemplateBaseData {
  heroBadgeIconImage: string;
  heroRightPortrait: string;
  heroStylistAvatars: string[];
  aboutIntroHeading: string;
  aboutVideoImage: string;
  servicesCenterImage: string;
  experienceHeading: string;
  experienceDescription: string;
  experiencePortrait: string;
  experienceFeatures: SalonToc2ExperienceFeature[];
  pricingHeading: string;
  pricingLeftImage: string;
  priceList: SalonToc2PriceItem[];
  bookingHeading: string;
  bookingHoursDescription: string;
  bookingHoursList: string[];
  newsletterModelImage: string;
  galleryStrip: string[];
}

export const salonToc2DefaultData: SalonToc2TemplateData = {
  business: {
    name: "Elegance Nail & Hair",
    logo: "",
    phone: ["031 3728 397", "0909 728 397"],
    email: ["info@themona.global", "booking@elegancesalon.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "T2 - T6: 9h00 - 18h00",
    rating: 4.9,
    reviewCount: 560,
    experienceYears: "25",
    aboutTitle: "Bước Nhẹ Đến Thế Giới Hoàn Hảo với Nghệ Thuật Làm Nail",
    aboutText: [
      "Tại salon làm đẹp móng và tóc của chúng tôi, chúng tôi hiểu rằng mỗi khách hàng đều là duy nhất và sở thích về móng của họ khác nhau. Đó là lý do tại sao chúng tôi cung cấp các dịch vụ làm móng cá nhân hóa dựa trên nhu cầu cụ thể của bạn. Cho dù bạn đang tìm kiếm một bộ móng French manicure truyền thống, hay một diện mạo sang trọng và tinh tế cho một sự kiện đặc biệt, chúng tôi đều có những dịch vụ đặc biệt phù hợp với bạn."
    ]
  },
  hero: {
    eyebrow: "MONA Nail & Hair Stylist",
    title: "NGHỆ THUẬT LÀM MÓNG",
    subtitle:
      "Tôn vinh vẻ đẹp thanh lịch từ đôi bàn tay đến mái tóc với dòng sơn gel hữu cơ cao cấp, thiết kế nail đính đá độc bản và liệu trình chăm sóc chuẩn spa.",
    ctaText: "XEM THÊM",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85"
  },
  heroBadgeIconImage:
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=300&q=80",
  heroRightPortrait:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
  heroStylistAvatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  ],
  aboutIntroHeading:
    "Bước Nhẹ Đến Thế Giới Hoàn Hảo với Nghệ Thuật Làm Nail",
  aboutVideoImage:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
  stats: [
    {
      id: "st-1",
      number: "5+",
      title: "5 năm kinh nghiệm"
    },
    {
      id: "st-2",
      number: "125+",
      title: "Khách hàng tin dùng"
    },
    {
      id: "st-3",
      number: "56k+",
      title: "Lượt đánh giá tốt về dịch vụ"
    },
    {
      id: "st-4",
      number: "36+",
      title: "Nhân viên được đào tạo chuyên nghiệp"
    }
  ],
  servicesCenterImage:
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
  services: [
    {
      id: "srv-manicure",
      title: "Chăm Sóc Móng Tay (Manicure)",
      category: "NAIL CARE",
      description:
        "Làm sạch biểu bì, tạo dáng móng chuẩn form và dưỡng bóng chuyên sâu giúp đôi bàn tay mềm mại, rạng rỡ.",
      price: "280.000đ",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-nailart",
      title: "Vẽ Móng Nghệ Thuật (Nail Art)",
      category: "NAIL DESIGN",
      description:
        "Sáng tạo họa tiết cọ bản, tráng gương, mắt mèo và đính đá pha lê thủ công theo phong cách Hàn - Nhật.",
      price: "350.000đ",
      image:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-pedicure",
      title: "Chăm Sóc Móng Chân (Pedicure)",
      category: "FOOT SPA",
      description:
        "Ngâm chân thảo dược ấm, chà gót hồng hào kết hợp cắt da và sơn gel bền đẹp cho đôi bàn chân.",
      price: "320.000đ",
      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-paraffin",
      title: "Ủ Sáp Paraffin Dưỡng Da Tay",
      category: "HAND SPA",
      description:
        "Liệu trình ủ sáp ấm Paraffin giàu vitamin E và collagen giúp cấp ẩm sâu và trẻ hóa làn da đôi tay.",
      price: "250.000đ",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  experienceHeading:
    "Chúng tôi có 25 năm kinh nghiệm trong lĩnh vực làm đẹp móng.",
  experienceDescription:
    "Chúng tôi ưu tiên sự sạch sẽ và thoải mái cho khách hàng, đảm bảo môi trường sạch sẽ và thư giãn suốt thời gian bạn ghé thăm. Salon của chúng tôi tuân thủ các quy định vệ sinh nghiêm ngặt và tất cả các dụng cụ của chúng tôi đều được tiệt trùng.",
  experiencePortrait:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
  experienceFeatures: [
    {
      id: "ef-1",
      title: "Thiết Bị Nghệ Thuật Làm Móng",
      description:
        "Từ việc làm móng cổ điển cho đến nghệ thuật móng phức tạp và gia công mũi móng cá nhân.",
      icon: "tools"
    },
    {
      id: "ef-2",
      title: "Địa Điểm Tốt Nhất",
      description:
        "Đó là lý do tại sao chúng tôi chỉ sử dụng sơn móng, gel và các sản phẩm móng chất lượng cao từ những thương hiệu đáng tin cậy.",
      icon: "location"
    },
    {
      id: "ef-3",
      title: "Hỗ Trợ Đặc Biệt",
      description:
        "Đó là lý do tại sao chúng tôi chỉ sử dụng sơn móng, gel và các sản phẩm làm móng chất lượng cao từ các thương hiệu uy tín.",
      icon: "care"
    }
  ],
  pricingHeading: "Các Dịch Vụ và Giá Trị Phục Vụ Cho Móng Của Chúng Tôi",
  pricingLeftImage:
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80",
  priceList: [
    {
      id: "pr-1",
      name: "Chăm sóc Móng",
      subtitle: "Cắt da chuyên sâu, tạo form móng và dưỡng bóng",
      price: "280.000đ"
    },
    {
      id: "pr-2",
      name: "Kéo Móng",
      subtitle: "Sản phẩm gel chất lượng cao, thiết kế theo yêu cầu",
      price: "260.000đ"
    },
    {
      id: "pr-3",
      name: "Móng chân móng tay",
      subtitle: "Sơn gel cao cấp bền màu trên 3 tuần",
      price: "150.000đ"
    },
    {
      id: "pr-4",
      name: "Kem dưỡng ẩm tay/móng tay",
      subtitle: "Massage trẻ hóa bàn tay hoặc bàn chân thư giãn",
      price: "190.000đ"
    },
    {
      id: "pr-5",
      name: "Nghệ thuật làm móng",
      subtitle: "Màu sắc rực rỡ, đính đá và hoàn thiện tinh xảo",
      price: "190.000đ"
    }
  ],
  bookingHeading: "Trải Nghiệm của Dịch Vụ Làm Móng",
  bookingHoursDescription:
    "Chúng tôi tận tâm mang lại kết quả đặc biệt và đảm bảo móng tay của bạn trở nên đậm nét và cuốn hút.",
  bookingHoursList: [
    "Thứ Hai đến Thứ Sáu: 09:00 sáng - 18:00 tối",
    "Thứ Bảy: 10:00 sáng - 18:00 chiều",
    "Chủ Nhật: Đóng cửa"
  ],
  clients: [
    { id: "cl-1", name: "SPA HEALTHY LIFE" },
    { id: "cl-2", name: "COSMETICS NATURAL" },
    { id: "cl-3", name: "NATURAL CARE" },
    { id: "cl-4", name: "ORGANIC THERAPY" },
    { id: "cl-5", name: "BEAUTY SPA" },
    { id: "cl-6", name: "SPA WELLNESS" }
  ],
  newsletterModelImage:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  testimonials: [
    {
      id: "t-1",
      author: "Chị Minh Thư",
      role: "Khách hàng thân thiết",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Không gian salon vô cùng sạch sẽ, thơm dịu tinh dầu thảo mộc. Các bạn kỹ thuật viên nhặt da cực kỳ êm và vẽ mẫu nail chuẩn từng chi tiết nhỏ như hình mẫu mình chọn."
    },
    {
      id: "t-2",
      author: "Chị Bảo Ngọc",
      role: "Khách hàng VIP",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Mình rất ưng ý dịch vụ đắp gel nối móng và ủ sáp Paraffin dưỡng da tay tại đây. Nước sơn gel hữu cơ lên màu trong trẻo, giữ được hơn 1 tháng mà không hề bị bong tróc."
    },
    {
      id: "t-3",
      author: "Chị Thanh Hà",
      role: "Khách hàng thân thiết",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      content:
        "Đội ngũ chuyên viên tư vấn form móng và tông màu sơn rất có gu, giúp bàn tay nhìn thon dài và sáng da hẳn lên. Chắc chắn sẽ quay lại ủng hộ salon dài lâu."
    }
  ],
  news: [
    {
      id: "blog-1",
      title: "Hướng Dẫn Chọn Màu Sơn Móng Phù Hợp Với Tông Da",
      date: "17 Th7, 2026",
      category: "CẨM NANG NAIL",
      excerpt:
        "Bí quyết lựa chọn sắc sơn nude hồng đào, đỏ rượu vang hay nâu trà sữa giúp tôn lên vẻ đẹp thanh thoát của đôi bàn tay.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-2",
      title: "Nghệ Thuật Móng Tinh Tế: Những Ý Tưởng Thiết Kế Mới",
      date: "18 Th7, 2026",
      category: "XU HƯỚNG",
      excerpt:
        "Cập nhật các mẫu nail tráng gương ngọc trai, French đầu móng mảnh và đính charm hoa nổi đang được yêu thích nhất.",
      image:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "blog-3",
      title: "Nghệ Sĩ Nail Tài Năng: Người Làm Móng Nghệ Thuật",
      date: "17 Th7, 2026",
      category: "CHUYÊN GIA",
      excerpt:
        "Hành trình rèn luyện kỹ thuật đi cọ nét mảnh và phối màu sắc sảo của đội ngũ chuyên viên tạo mẫu móng hàng đầu.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
    }
  ],
  galleryStrip: [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=500&q=80"
  ]
};

export default salonToc2DefaultData;
