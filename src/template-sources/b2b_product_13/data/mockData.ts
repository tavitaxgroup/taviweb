import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2B13ValueCard {
  id: string;
  title: string;
  description: string;
  icon: "quality" | "design" | "shipping";
}

export interface B2B13CollectionItem {
  id: string;
  title: string;
  technique: string;
  bgColor: string;
  image: string;
  tall?: boolean;
}

export interface B2B13Data extends ClonedTemplateBaseData {
  heroUploadCard: {
    fileName: string;
    productTitle: string;
    secondaryImage: string;
  };
  valueCards: B2B13ValueCard[];
  promoSection: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    ctaText: string;
    pinkCardImage: string;
    purpleCardImage: string;
  };
  collectionItems: B2B13CollectionItem[];
  consultSection: {
    eyebrow: string;
    title: string;
    description: string;
    mockupImage: string;
    paletteSwatches: string[];
    options: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
    ctaText: string;
  };
  partnerLogos: string[];
}

export const b2bProduct13DefaultData: B2B13Data = {
  business: {
    name: "Print Pro",
    phone: ["0313 728 397", "0909 728 397"],
    email: ["info@printpro.vn", "xuongin@mona.media"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 18:00",
    rating: 5.0,
    reviewCount: 680,
    aboutTitle: "Thiết kế in ấn hiện đại chất lượng",
    aboutText: [
      "Xưởng in ấn vải, đồng phục doanh nghiệp và vật tư quảng cáo công nghiệp hàng đầu. Ứng dụng công nghệ in kỹ thuật số DTG, in PET chuyển nhiệt và in lụa tự động độ phân giải cao, đảm bảo hình in sắc nét, bền màu tuyệt đối sau hàng trăm lần giặt."
    ],
    highlights: [
      "Thời gian thực hiện từ 1 đến 3 ngày",
      "Không giới hạn đơn hàng tối thiểu",
      "Tiến độ sản xuất nhanh chóng"
    ]
  },
  hero: {
    eyebrow: "QUẦN ÁO CHẤT LƯỢNG CAO",
    subtitle: "Dịch vụ in áo chuyên nghiệp",
    title: "Dịch vụ in áo chuyên nghiệp",
    description:
      "Giải pháp in ấn đồng phục công ty, áo thun sự kiện, quà tặng thương hiệu (POSM) và gia công in vải công nghiệp theo yêu cầu.",
    ctaText: "Đặt ngay",
    ctaLink: "#consult-section",
    secondaryCtaText: "Bộ sưu tập",
    secondaryCtaLink: "#collection",
    backgroundImage:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=85"
  },
  heroUploadCard: {
    fileName: "mau_thiet_ke.ai",
    productTitle: "Áo Thun In DTG Cao Cấp",
    secondaryImage:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80"
  },
  valueCards: [
    {
      id: "val-1",
      title: "Cam kết chất lượng",
      description: "Tất cả sản phẩm đều được QC và bảo hành lỗi khi giao",
      icon: "quality"
    },
    {
      id: "val-2",
      title: "Miễn phí thiết kế",
      description: "Miễn phí tư vấn và thiết kế lên mẫu theo yêu cầu của khách hàng",
      icon: "design"
    },
    {
      id: "val-3",
      title: "Miễn phí vận chuyển",
      description: "Miễn phí giao tất cả hàng với đơn hàng trên 2,000,000₫",
      icon: "shipping"
    }
  ],
  promoSection: {
    eyebrow: "CHƯƠNG TRÌNH ƯU ĐÃI",
    title: "Thiết kế in ấn hiện đại chất lượng",
    description:
      "Hệ thống máy in phun kỹ thuật số khổ lớn và dây chuyền ép nhiệt tự động giúp tái tạo chuẩn xác 100% dải màu thương hiệu trên mọi chất liệu vải cotton, poly, canvas và vật tư quảng cáo.",
    bullets: [
      "Thời gian thực hiện từ 1 đến 3 ngày",
      "Không giới hạn đơn hàng tối thiểu",
      "Tiến độ sản xuất nhanh chóng"
    ],
    ctaText: "Tìm hiểu",
    pinkCardImage:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    purpleCardImage:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80"
  },
  collectionItems: [
    {
      id: "col-1",
      title: "Áo Thể Thao In Chuyển Nhiệt 3D",
      technique: "In Sublimation toàn thân",
      bgColor: "#00bfa5",
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "col-2",
      title: "Áo Thun Graphic Streetwear",
      technique: "In Kỹ Thuật Số DTG",
      bgColor: "#ffa726",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
      tall: true
    },
    {
      id: "col-3",
      title: "Đồng Phục Sự Kiện Doanh Nghiệp",
      technique: "In PET Chuyển Nhiệt",
      bgColor: "#1eb999",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "col-4",
      title: "Áo Thun Nghệ Thuật Bản Giới Hạn",
      technique: "In Lụa Cao Thành & DTG",
      bgColor: "#ff8c3b",
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
      tall: true
    },
    {
      id: "col-5",
      title: "Áo Thun Cotton Oversize In Nổi",
      technique: "In Puff Mực Nổi",
      bgColor: "#e18ad4",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "col-6",
      title: "Áo Nhóm & Team Building",
      technique: "In Decal Nhiệt Cao Cấp",
      bgColor: "#0091ea",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "col-7",
      title: "Áo Khoác & Hoodie In Logo",
      technique: "In Lụa Plastisol",
      bgColor: "#ec70a6",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "col-8",
      title: "Áo Polo Đồng Phục Công Sở",
      technique: "Thêu Vi Tính & In Nhiệt",
      bgColor: "#b388ff",
      image:
        "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=600&q=80"
    }
  ],
  testimonials: [
    {
      id: "rev-1",
      author: "Chị Minh Thư",
      role: "Giám đốc Thương hiệu Thời trang Local Brand",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Chất lượng mực in DTG và in PET tại xưởng thực sự sắc nét vượt mong đợi. Từng chi tiết chuyển màu phức tạp trên mẫu áo mới của chúng tôi đều lên chuẩn 100% so với bản thiết kế đồ họa, vải không bị cứng và giao hàng đúng hẹn chỉ sau 2 ngày."
    },
    {
      id: "rev-2",
      author: "Anh Quốc Bảo",
      role: "Trưởng phòng Nhân sự Tập đoàn Công nghệ",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Đặt 1.500 áo đồng phục sự kiện cho toàn công ty nhưng xưởng lên mẫu thử cực nhanh và miễn phí hoàn toàn chi phí thiết kế. Toàn bộ nhân viên đều khen chất vải thoáng mát và hình in bền đẹp."
    }
  ],
  consultSection: {
    eyebrow: "THIẾT KẾ HIỆN ĐẠI",
    title: "Liên hệ tư vấn",
    description:
      "Đội ngũ kỹ thuật viên chế bản và thiết kế của chúng tôi sẵn sàng tư vấn công nghệ in tối ưu nhất theo ngân sách và số lượng của bạn.",
    mockupImage:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85",
    paletteSwatches: ["#ea733d", "#3b82f6", "#f59e0b", "#10b981", "#ec4899"],
    options: [
      {
        num: "01.",
        title: "Dành cho cá nhân",
        desc: "Nhận in lẻ từ 1 áo theo thiết kế riêng, lấy liền trong 24h với công nghệ in kỹ thuật số DTG không giới hạn màu sắc."
      },
      {
        num: "02.",
        title: "Dành cho doanh nghiệp",
        desc: "Gia công số lượng lớn áo đồng phục, áo sự kiện, túi vải canvas và vật phẩm quảng cáo POSM với chiết khấu sỉ hấp dẫn."
      }
    ],
    ctaText: "Yêu cầu liên hệ"
  },
  partnerLogos: ["SOCAR", "ASTM", "FLORA", "DISCUS", "ALCOS", "logitech"],
  news: [
    {
      id: "nw-1",
      title: "Tổng hợp các công nghệ in áo thun bền màu và sắc nét nhất hiện nay",
      date: "4 ngày trước",
      category: "TIN TỨC",
      excerpt:
        "So sánh chi tiết ưu nhược điểm giữa in lụa truyền thống, in kỹ thuật số DTG và in PET chuyển nhiệt cho đơn hàng doanh nghiệp.",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Hướng dẫn chuẩn bị file thiết kế chuẩn hệ màu cho xưởng in công nghiệp",
      date: "4 ngày trước",
      category: "TIN TỨC",
      excerpt:
        "Cách xuất file vector AI, PSD, PNG độ phân giải 300 DPI giúp hình in trên vải đạt độ nét hoàn hảo không bị vỡ hạt.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Xu hướng thiết kế áo thun đồng phục sự kiện & teambuilding năm 2025",
      date: "4 ngày trước",
      category: "TIN TỨC",
      excerpt:
        "Khám phá bảng màu trẻ trung và kiểu dáng phông rộng hiện đại giúp nâng tầm hình ảnh thương hiệu trong các sự kiện.",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
    }
  ]
};
