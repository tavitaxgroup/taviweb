import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NoiThat6ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "chat" | "plan" | "palette" | "hammer" | "handover";
}

export interface NoiThat6HistoryMilestone {
  year: string;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  watermarkYears: string;
  highlights: string[];
  leftImage: string;
  rightImage: string;
}

export interface NoiThat6TemplateData extends ClonedTemplateBaseData {
  aboutVideoLabel: string;
  aboutVideoImage: string;
  aboutBadges: Array<{ id: string; label: string }>;
  achievementLeft: {
    eyebrow: string;
    title: string;
    image: string;
  };
  achievementRight: {
    eyebrow: string;
    title: string;
    image: string;
  };
  processSteps: NoiThat6ProcessStep[];
  historyMilestones: NoiThat6HistoryMilestone[];
  consoleShowcaseImage: string;
}

export const noiThat6DefaultData: NoiThat6TemplateData = {
  business: {
    name: "FURNIHUB CONSTRUCTION",
    logo: "",
    phone: ["(+84) 0313-728-397", "0909 728 397"],
    email: ["info@themona.global", "contact@furnihub.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 4.9,
    reviewCount: 310,
    experienceYears: "15+",
    aboutTitle: "Khám Phá Thiết Kế Không Gian Sống Đẳng Cấp",
    aboutText: [
      "Chúng tôi cung cấp những sản phẩm nội thất không chỉ đẹp mắt mà còn chất lượng, giúp bạn tạo dựng một không gian sống lý tưởng cho gia đình và bạn bè. Với sự kết hợp hoàn hảo giữa thiết kế tinh tế và tính năng tiện dụng, chúng tôi cam kết mang đến cho bạn những trải nghiệm tuyệt vời nhất."
    ]
  },
  hero: {
    eyebrow: "THIẾT KẾ TINH TẾ, SỰ THOẢI MÁI TUYỆT ĐỐI",
    title: "Tỏa Sáng Không Gian Với Bộ Sofa Đẳng Cấp",
    subtitle:
      "Khám phá bộ sưu tập nội thất của chúng tôi, nơi sự sang trọng gặp gỡ sự thoải mái. Được chế tác từ chất liệu cao cấp, mỗi chi tiết đều được chăm chút tỉ mỉ, mang lại không gian sống lý tưởng cho bạn và gia đình.",
    ctaText: "Khám Phá Ngay",
    ctaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  aboutVideoLabel: "Video giới thiệu",
  aboutVideoImage:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
  aboutBadges: [
    { id: "ab-1", label: "Chất Lượng" },
    { id: "ab-2", label: "Độc Đáo" },
    { id: "ab-3", label: "Đa Dạng" },
    { id: "ab-4", label: "Tận Tâm" },
    { id: "ab-5", label: "Nhanh Chóng" },
    { id: "ab-6", label: "Linh Hoạt" }
  ],
  projects: [
    {
      id: "nt6-p1",
      title: "Dự án 1: Phòng Khách Mộc Mạc Tinh Tế",
      category: "THIẾT KẾ MỘC MẠC",
      location: "Thảo Điền, TP.HCM",
      price: "280 m²",
      description:
        "Sự giao thoa giữa chất liệu gỗ tự nhiên trầm ấm, kệ trưng bày tối giản và sofa nỉ cao cấp tạo nên chiều sâu cảm xúc.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt6-p2",
      title: "Dự án 2: Biệt Thự Đương Đại Ánh Sáng",
      category: "BẢNG MÀU TINH TẾ",
      location: "Quận 7, TP.HCM",
      price: "420 m²",
      description:
        "Phối hợp nhịp nhàng bảng màu trung tính be - kem cùng bàn trà gỗ sồi và thảm dệt thủ công.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt6-p3",
      title: "Dự án 3: Penthouse Phong Cách Bắc Âu",
      category: "THIẾT KẾ HIỆN ĐẠI",
      location: "Quận 1, TP.HCM",
      price: "350 m²",
      description:
        "Không gian sinh hoạt chung ấm cúng với sofa da, gối tựa sắc cam đất và ánh sáng đèn thả nghệ thuật.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt6-p4",
      title: "Dự án 4: Căn Hộ Nghỉ Dưỡng Mùa Xuân",
      category: "KHÔNG GIAN TƯƠI MỚI",
      location: "TP. Thủ Đức, TP.HCM",
      price: "190 m²",
      description:
        "Tận dụng tối đa ánh sáng tự nhiên qua rèm voan mỏng kết hợp sofa trắng kem thanh thoát.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt6-p5",
      title: "Dự án 5: Không Gian Sống Tối Giản",
      category: "NỘI THẤT ĐƯƠNG ĐẠI",
      location: "Bình Thạnh, TP.HCM",
      price: "240 m²",
      description:
        "Đường nét kiến trúc phẳng phiu, bảng màu xám than và gỗ ấm tạo nên vẻ đẹp vượt thời gian.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nt6-p6",
      title: "Dự án 6: Dinh Thự Nghệ Thuật Độc Bản",
      category: "THIẾT KẾ ĐỘC BẢN",
      location: "Quận 2, TP.HCM",
      price: "560 m²",
      description:
        "Mỗi món đồ nội thất rời được chế tác riêng theo tỷ lệ vàng của không gian phòng khách thông tầng.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
    }
  ],
  achievementLeft: {
    eyebrow: "THIẾT KẾ TINH TẾ",
    title: "Dự Án Bền Vững",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
  },
  achievementRight: {
    eyebrow: "TRẢI NGHIỆM TUYỆT VỜI",
    title: "Mở Rộng Hệ Thống",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
  },
  stats: [
    { id: "st-1", number: "8", title: "CHI NHÁNH" },
    { id: "st-2", number: "3K+", title: "KHÁCH HÀNG" },
    { id: "st-3", number: "99+", title: "DỰ ÁN" }
  ],
  processSteps: [
    {
      id: "pr-1",
      number: "01",
      title: "Tư Vấn Ban Đầu",
      description:
        "Chúng tôi bắt đầu bằng một cuộc trò chuyện thân thiện để hiểu rõ về nhu cầu, sở thích và ngân sách của bạn.",
      icon: "chat"
    },
    {
      id: "pr-2",
      number: "02",
      title: "Phân Tích Và Lên Kế Hoạch",
      description:
        "Sau khi nắm rõ yêu cầu, đội ngũ thiết kế của chúng tôi sẽ tiến hành phân tích không gian và đưa ra các giải pháp thiết kế tối ưu.",
      icon: "plan"
    },
    {
      id: "pr-3",
      number: "03",
      title: "Thiết Kế Và Phê Duyệt",
      description:
        "Chúng tôi sẽ phát triển thiết kế chi tiết, bao gồm màu sắc, vật liệu và bố trí.",
      icon: "palette"
    },
    {
      id: "pr-4",
      number: "04",
      title: "Thi Công Và Giám Sát",
      description:
        "Đội ngũ thợ lành nghề của chúng tôi sẽ làm việc chăm chỉ để đảm bảo mọi chi tiết đều được thực hiện một cách hoàn hảo.",
      icon: "hammer"
    },
    {
      id: "pr-5",
      number: "05",
      title: "Hoàn Thành Và Bàn Giao",
      description:
        "Khi mọi thứ đã hoàn tất, chúng tôi sẽ tiến hành kiểm tra cuối cùng và làm sạch không gian.",
      icon: "handover"
    }
  ],
  historyMilestones: [
    {
      year: "2010",
      badge: "Khởi Nghiệp",
      eyebrow: "KHỞI ĐẦU",
      title: "Lịch Sử Phát Triển",
      description:
        "Công ty được thành lập với mục tiêu mang đến những sản phẩm nội thất chất lượng cao và dịch vụ tận tâm. Những sản phẩm đầu tiên chủ yếu là đồ gỗ tự nhiên, thu hút sự chú ý của khách hàng nhờ vào chất lượng và thiết kế tinh tế.",
      watermarkYears: "2010 - 2012",
      highlights: [
        "Mở Rộng Thị Trường",
        "Đổi Mới Thiết Kế",
        "Tăng Cường Công Nghệ",
        "Định Hướng Bền Vững",
        "Khẳng Định Thương Hiệu",
        "Thiết Kế Hiện Đại",
        "Tinh Tế Tự Nhiên",
        "Nội Thất Thông Minh"
      ],
      leftImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2012",
      badge: "Xưởng Sản Xuất",
      eyebrow: "BƯỚC NGOẶT",
      title: "Mở Rộng Xưởng Gỗ Quy Mô",
      description:
        "Khánh thành nhà máy sản xuất nội thất 2.500m² trang bị dây chuyền chế biến gỗ tự nhiên và gỗ công nghiệp chuẩn Châu Âu.",
      watermarkYears: "2012 - 2015",
      highlights: [
        "Mở Rộng Thị Trường",
        "Đổi Mới Thiết Kế",
        "Tăng Cường Công Nghệ",
        "Định Hướng Bền Vững",
        "Khẳng Định Thương Hiệu",
        "Thiết Kế Hiện Đại",
        "Tinh Tế Tự Nhiên",
        "Nội Thất Thông Minh"
      ],
      leftImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2015",
      badge: "Showroom Flagship",
      eyebrow: "PHÁT TRIỂN",
      title: "Chuỗi Showroom Trải Nghiệm",
      description:
        "Ra mắt hệ thống showroom trưng bày không gian mẫu thực tế tại TP.HCM và Hà Nội, phục vụ hơn 1.000 gia đình Việt mỗi năm.",
      watermarkYears: "2015 - 2018",
      highlights: [
        "Mở Rộng Thị Trường",
        "Đổi Mới Thiết Kế",
        "Tăng Cường Công Nghệ",
        "Định Hướng Bền Vững",
        "Khẳng Định Thương Hiệu",
        "Thiết Kế Hiện Đại",
        "Tinh Tế Tự Nhiên",
        "Nội Thất Thông Minh"
      ],
      leftImage:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2018",
      badge: "Giải Thưởng",
      eyebrow: "THÀNH TỰU",
      title: "Vinh Danh Thiết Kế Đương Đại",
      description:
        "Đạt giải thưởng Kiến Trúc & Nội Thất Xanh nhờ ứng dụng vật liệu thân thiện môi trường và giải pháp thông gió, chiếu sáng tự nhiên.",
      watermarkYears: "2018 - 2020",
      highlights: [
        "Mở Rộng Thị Trường",
        "Đổi Mới Thiết Kế",
        "Tăng Cường Công Nghệ",
        "Định Hướng Bền Vững",
        "Khẳng Định Thương Hiệu",
        "Thiết Kế Hiện Đại",
        "Tinh Tế Tự Nhiên",
        "Nội Thất Thông Minh"
      ],
      leftImage:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2020",
      badge: "Chuyển Đổi Số",
      eyebrow: "CÔNG NGHỆ",
      title: "Ứng Dụng Thực Tế Ảo VR 360",
      description:
        "Tiên phong áp dụng công nghệ trải nghiệm không gian 3D VR 360 giúp khách hàng cảm nhận từng chi tiết căn hộ trước khi thi công.",
      watermarkYears: "2020 - 2024",
      highlights: [
        "Mở Rộng Thị Trường",
        "Đổi Mới Thiết Kế",
        "Tăng Cường Công Nghệ",
        "Định Hướng Bền Vững",
        "Khẳng Định Thương Hiệu",
        "Thiết Kế Hiện Đại",
        "Tinh Tế Tự Nhiên",
        "Nội Thất Thông Minh"
      ],
      leftImage:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2025",
      badge: "Vươn Tầm",
      eyebrow: "TƯƠNG LAI",
      title: "Hệ Sinh Thái Nội Thất Toàn Diện",
      description:
        "Sở hữu 8 chi nhánh trên toàn quốc với hơn 3.000+ khách hàng hài lòng, dẫn đầu xu hướng thiết kế nội thất bền vững và thông minh.",
      watermarkYears: "2025 - NAY",
      highlights: [
        "Mở Rộng Thị Trường",
        "Đổi Mới Thiết Kế",
        "Tăng Cường Công Nghệ",
        "Định Hướng Bền Vững",
        "Khẳng Định Thương Hiệu",
        "Thiết Kế Hiện Đại",
        "Tinh Tế Tự Nhiên",
        "Nội Thất Thông Minh"
      ],
      leftImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      rightImage:
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "FURNITURE MINIMALIST" },
    { id: "cl-2", name: "GRAY HOUSE REAL ESTATE" },
    { id: "cl-3", name: "SIMPLE HOUSE DESIGN" },
    { id: "cl-4", name: "HOUSELUX INTERIOR" },
    { id: "cl-5", name: "INTERIOR DESIGN STUDIO" },
    { id: "cl-6", name: "HOUSETICA ESTD 2020" },
    { id: "cl-7", name: "INTERIOR LIVING HOME" },
    { id: "cl-8", name: "FURNITURE HOME DECOR" }
  ],
  news: [
    {
      id: "news-1",
      title:
        "Xu Hướng Nội Thất 2025: Những Thiết Kế Nổi Bật Đang Dẫn Đầu",
      date: "14/05/2026",
      category: "XU HƯỚNG",
      excerpt:
        "Khám phá sự lên ngôi của vật liệu tự nhiên, đường cong hữu cơ và bảng màu đất ấm áp trong năm nay.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title:
        "Mẹo Trang Trí Không Gian Nhỏ: Biến Hóa Ngôi Nhà Của Bạn Rộng Hơn",
      date: "18/05/2026",
      category: "MẸO BÀI TRÍ",
      excerpt:
        "Giải pháp chọn nội thất đa năng và bố trí gương, ánh sáng giúp nhân đôi diện tích căn hộ.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "5 Chất Liệu Nội Thất Được Yêu Thích Nhất Trong Năm Nay",
      date: "22/05/2026",
      category: "VẬT LIỆU",
      excerpt:
        "Gỗ óc chó Bắc Mỹ, đá Travertine, vải Bouclé và mây đan tự nhiên tạo nên dấu ấn sang trọng.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-4",
      title:
        "Nội Thất Cổ Điển Vs. Hiện Đại: Phong Cách Nào Phù Hợp Với Bạn?",
      date: "26/05/2026",
      category: "PHONG CÁCH",
      excerpt:
        "So sánh chi tiết ưu điểm của từng trường phái thiết kế để lựa chọn không gian sống đúng gu thẩm mỹ.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80"
    }
  ],
  consoleShowcaseImage:
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
};

export default noiThat6DefaultData;
