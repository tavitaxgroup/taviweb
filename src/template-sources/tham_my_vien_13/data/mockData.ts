import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface EvaArticleItem {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  comments: number;
  excerpt?: string;
  image: string;
}

export interface EvaVideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}

export interface EvaBeautyData extends ClonedTemplateBaseData {
  navigation: Array<{ label: string; href: string }>;
  breakingNews: string[];
  heroMosaic: {
    mainLeft: EvaArticleItem;
    topRight: EvaArticleItem;
    bottomRight: EvaArticleItem[];
  };
  dontMissSection: {
    featured: EvaArticleItem;
    list: EvaArticleItem[];
  };
  beautyTrendBanner: EvaArticleItem;
  celebSecretsSection: {
    topPair: EvaArticleItem[];
    bottomGrid: EvaArticleItem[];
  };
  skincareLifestyleSection: {
    featured: EvaArticleItem;
    list: EvaArticleItem[];
  };
  sidebar: {
    socialStats: Array<{
      id: string;
      platform: string;
      count: string;
      unit: string;
      bgColor: string;
    }>;
    highlightedGrid: EvaArticleItem[];
    latestFeatured: EvaArticleItem;
    latestList: EvaArticleItem[];
    recentComments: Array<{
      id: string;
      user: string;
      postTitle: string;
    }>;
  };
  threeDarkCardsStrip: EvaArticleItem[];
  lowerThreeCols: {
    lamDep: {
      featured: EvaArticleItem;
      list: EvaArticleItem[];
    };
    thoiTrang: {
      featured: EvaArticleItem;
      list: EvaArticleItem[];
    };
    diemTin: EvaArticleItem[];
  };
  videoPlaylist: EvaVideoItem[];
  bottomNewsGrid: EvaArticleItem[];
  footerTopics: Array<{ name: string; count: number }>;
}

export const thamMyVien13DefaultData: EvaBeautyData = {
  business: {
    name: "Mona EvaBeauty",
    tagline: "Chuyên Trang Kiến Thức Làm Đẹp, Da Liễu & Thẩm Mỹ Quốc Tế",
    phone: ["1900 636 648", "0313 728 397"],
    email: ["mon@mona.media", "toasoan@evabeauty.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. Hồ Chí Minh",
    workingHours: "08:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 5400,
    experienceYears: "10+",
    aboutTitle: "Chuyên Trang Kiến Thức Làm Đẹp & Thẩm Mỹ EvaBeauty",
    aboutText: [
      "EvaBeauty là cổng thông tin chuyên sâu cập nhật xu hướng thẩm mỹ công nghệ cao, bí quyết chăm sóc da khoa học từ bác sĩ da liễu và phong cách giữ dáng của các ngôi sao.",
      "Đồng hành cùng hàng triệu phụ nữ Việt trên hành trình thấu hiểu làn da và lựa chọn giải pháp làm đẹp an toàn, hiệu quả."
    ],
    highlights: [
      "Kiến thức da liễu chuẩn Y khoa được kiểm duyệt",
      "Review công nghệ trẻ hóa Thermage, Ultherapy, Meso thực tế",
      "Cập nhật bí quyết dưỡng nhan của Sao Việt 24/7"
    ]
  },
  navigation: [
    { label: "SAO VIỆT", href: "#sao-viet" },
    { label: "GIẢI TRÍ", href: "#giai-tri" },
    { label: "CUỘC SỐNG", href: "#cuoc-song" },
    { label: "MẸ & BÉ ĐẸP", href: "#dung-bo-lo" },
    { label: "CÔNG NGHỆ", href: "#video-noi-bat" },
    { label: "LÀM ĐẸP", href: "#lam-dep" },
    { label: "TIN TỨC", href: "#tin-tuc-cuoi" }
  ],
  breakingNews: [
    "Bí quyết phục hồi vóc dáng và làn da căng bóng sau sinh của hội mỹ nhân Việt khiến bác sĩ da liễu cũng bất ngờ",
    "Xu hướng trẻ hóa đa tầng không xâm lấn Thermage FLX kết hợp Exosome lên ngôi trong năm 2026",
    "Chuyên gia chỉ ra 5 sai lầm khi thoa Retinol và kem chống nắng khiến làn da mãi không bật tông"
  ],
  hero: {
    eyebrow: "TIN HOT LÀM ĐẸP",
    title: "Chuyên Trang Kiến Thức Làm Đẹp & Thẩm Mỹ EvaBeauty",
    subtitle:
      "Cập nhật xu hướng thẩm mỹ nội khoa, chăm sóc da chuyên sâu và bí quyết giữ gìn nhan sắc.",
    ctaText: "Khám phá ngay",
    ctaLink: "#dung-bo-lo",
    backgroundImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85"
  },
  heroMosaic: {
    mainLeft: {
      id: "hm-1",
      title:
        "Bác sĩ da liễu giải mã công nghệ nâng cơ trẻ hóa 12 tiếng/ngày giúp làn da trẻ ra 10 tuổi",
      category: "CÔNG NGHỆ",
      author: "mona",
      date: "11 Tháng Tư, 2026",
      comments: 3,
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
    },
    topRight: {
      id: "hm-2",
      title:
        "Thế hệ máy phân tích da AI quang phổ mới giúp phát hiện sớm chân nám tầng sâu hoàn toàn chính xác...",
      category: "CÔNG NGHỆ",
      author: "mona",
      date: "11 Tháng Tư, 2026",
      comments: 2,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
    },
    bottomRight: [
      {
        id: "hm-3",
        title:
          "5 Hoạt chất vàng trong làng trẻ hóa da dự kiến làm mưa làm gió trong năm nay",
        category: "CÔNG NGHỆ",
        author: "mona",
        date: "11 Tháng Tư, 2026",
        comments: 1,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "hm-4",
        title:
          "Đầu tư hàng tỷ đồng cho phòng lab dược mỹ phẩm sạch, các viện thẩm mỹ nâng tầm dịch vụ...",
        category: "CÔNG NGHỆ",
        author: "mona",
        date: "11 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  dontMissSection: {
    featured: {
      id: "dm-main",
      title: "Sao Việt 24h: Bí quyết giữ làn da không tuổi bên 4 nhóc tỳ của bà mẹ hot nhất Vbiz...",
      category: "Cuộc sống",
      author: "mona",
      date: "9 Tháng Tư, 2026",
      comments: 0,
      excerpt:
        "Dù bận rộn chăm sóc gia đình nhỏ, nữ diễn viên vẫn duy trì thói quen đắp mặt nạ thảo mộc và điện di tinh chất Collagen mỗi tối để giữ vẻ rạng rỡ...",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
    },
    list: [
      {
        id: "dm-1",
        title: "Nàng Hoa hậu hé lộ chu trình dưỡng mái tóc suôn mượt suốt 12 năm...",
        category: "Làm đẹp",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "dm-2",
        title: "Thực đơn detox thanh lọc cơ thể giúp giảm 4kg nhẹ nhàng trong 2 tuần...",
        category: "Dáng đẹp",
        author: "mona",
        date: "9 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "dm-3",
        title: "Dàn mỹ nhân Việt đọ sắc mặt mộc căng bóng trong chương trình thực tế...",
        category: "Sao Việt",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "dm-4",
        title: "Trắc nghiệm nhanh: Phân biệt chính xác 4 loại da dầu, khô, hỗn hợp và nhạy cảm...",
        category: "Kiến thức",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  beautyTrendBanner: {
    id: "bt-1",
    title:
      "Hành trình chăm sóc sắc đẹp cùng bạn đời: Khi các ông chồng tâm lý đồng hành cùng vợ đi spa cuối tuần",
    category: "CUỘC SỐNG",
    author: "mona",
    date: "10 Tháng Tư, 2026",
    comments: 0,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
  },
  celebSecretsSection: {
    topPair: [
      {
        id: "cs-1",
        title: "Bí quyết giữ làn da căng mịn và thần thái tươi trẻ của nữ diễn viên truyền hình...",
        category: "Cuộc sống",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        excerpt:
          "Chế độ ngủ đủ giấc trước 23h kết hợp liệu trình cấy HA định kỳ giúp cô luôn rạng ngời trước ống kính máy quay...",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cs-2",
        title: "Cô gái sở hữu làn da thủy tinh trong veo gây xôn xao cộng đồng yêu làm đẹp...",
        category: "Cuộc sống",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        excerpt:
          "Hình ảnh cận cảnh làn da mộc không tì vết trong nắng sớm thu hút hàng chục ngàn lượt chia sẻ xin bí quyết skincare...",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
      }
    ],
    bottomGrid: [
      {
        id: "cs-3",
        title: "Hậu trường chăm sóc da cấp tốc bằng mặt nạ lạnh trước giờ lên sóng...",
        category: "Sao Việt",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "cs-4",
        title: "Bí quyết chống nắng toàn diện khi quay phim ngoài trời nắng gắt...",
        category: "Làm đẹp",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "cs-5",
        title: "Chế độ tập Pilates kết hợp uống nước ép cần tây giữ vòng eo 56cm...",
        category: "Dáng đẹp",
        author: "mona",
        date: "9 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "cs-6",
        title: "Cách phục hồi da thiếu ngủ cho người làm việc trước máy tính 12 tiếng/ngày...",
        category: "Chăm sóc da",
        author: "mona",
        date: "11 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  skincareLifestyleSection: {
    featured: {
      id: "sl-main",
      title:
        "Xu hướng đầu tư thiết bị chăm sóc da thông minh tại gia tăng trưởng đột phá trong năm 2026...",
      category: "Công nghệ",
      author: "mona",
      date: "11 Tháng Tư, 2026",
      comments: 0,
      excerpt:
        "Các dòng máy rửa mặt sóng âm, máy đẩy tinh chất nóng lạnh và mặt nạ ánh sáng sinh học ngày càng trở thành vật bất ly thân của phái đẹp...",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    },
    list: [
      {
        id: "sl-1",
        title: "5 Bước khóa ẩm ban đêm giúp làn da khô sần trở nên căng mọng vào sáng hôm sau",
        category: "Chăm sóc da",
        author: "mona",
        date: "11 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "sl-2",
        title: "Công nghệ ánh sáng sinh học LED đỏ và xanh dương khác nhau như thế nào?",
        category: "Công nghệ",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "sl-3",
        title: "Phong cách trang điểm sương mai dự tiệc tối sang trọng và cuốn hút",
        category: "Trang điểm",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "sl-4",
        title: "Bí quyết chọn kem dưỡng mắt ngăn ngừa nếp nhăn sớm từ tuổi 25",
        category: "Chăm sóc da",
        author: "mona",
        date: "9 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80"
      }
    ]
  },
  sidebar: {
    socialStats: [
      {
        id: "soc-1",
        platform: "F",
        count: "14,995",
        unit: "Thành viên",
        bgColor: "#3b5998"
      },
      {
        id: "soc-2",
        platform: "T",
        count: "1,450",
        unit: "Người theo dõi",
        bgColor: "#1da1f2"
      },
      {
        id: "soc-3",
        platform: "▶",
        count: "10,887",
        unit: "Người theo dõi",
        bgColor: "#cd201f"
      }
    ],
    highlightedGrid: [
      {
        id: "hg-1",
        title: "Qua 2 lần nâng cấp phác đồ, diện mạo mới ngày càng hài hòa thanh tú...",
        category: "Cuộc sống",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 1,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "hg-2",
        title: "Vòng eo thon gọn 56cm đáng ngưỡng mộ nhờ kiên trì tập luyện...",
        category: "Dáng đẹp",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 2,
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "hg-3",
        title: "Nàng Hoa hậu giữ mái tóc đen dài óng ả suốt 12 năm bằng bồ kết...",
        category: "Giải trí",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: "hg-4",
        title: "Chăm sóc làn da mẹ bầu rạng rỡ và ngăn ngừa rạn da an toàn...",
        category: "Mẹ & Bé",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80"
      }
    ],
    latestFeatured: {
      id: "lf-1",
      title: "Hành trình thay đổi ngoạn mục nhờ tạo hình thẩm mỹ nội khoa chuẩn tỷ lệ vàng...",
      category: "Cuộc sống",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 1,
      excerpt:
        "Sau 2 lần tinh chỉnh đường nét thanh thoát kết hợp trẻ hóa da, nhan sắc hiện tại nhận được cơn mưa lời khen...",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
    },
    latestList: [
      {
        id: "ll-1",
        title: "Bí quyết giữ vòng eo 56cm săn chắc sau sinh của các gymer nữ...",
        category: "Dáng đẹp",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "ll-2",
        title: "Cách chọn kem dưỡng ẩm lành tính cho làn da nhạy cảm của trẻ sơ sinh...",
        category: "Mẹ & Bé",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80"
      }
    ],
    recentComments: [
      {
        id: "rc-1",
        user: "mona",
        postTitle: "5 Hoạt chất vàng trong làng trẻ hóa da dự kiến làm mưa làm gió trong năm nay"
      },
      {
        id: "rc-2",
        user: "mona",
        postTitle: "Thế hệ máy phân tích da AI quang phổ mới giúp phát hiện sớm chân nám tầng sâu"
      },
      {
        id: "rc-3",
        user: "mona",
        postTitle: "Thực đơn detox thanh lọc cơ thể giúp giảm 4kg nhẹ nhàng trong 2 tuần"
      },
      {
        id: "rc-4",
        user: "mona",
        postTitle: "Bác sĩ da liễu giải mã công nghệ nâng cơ trẻ hóa giúp làn da trẻ ra 10 tuổi"
      },
      {
        id: "rc-5",
        user: "mona",
        postTitle: "Hành trình thay đổi ngoạn mục nhờ tạo hình thẩm mỹ nội khoa chuẩn tỷ lệ vàng"
      }
    ]
  },
  threeDarkCardsStrip: [
    {
      id: "td-1",
      title: "DÀN MỸ NHÂN VIỆT ĐỌ SẮC MẶT MỘC CĂNG BÓNG TRONG CHƯƠNG TRÌNH THỰC TẾ...",
      category: "GIẢI TRÍ",
      author: "mona",
      date: "10 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "td-2",
      title: "BÍ QUYẾT CHĂM SÓC DA & GIỮ DÁNG KHOA HỌC TRONG SUỐT THAI KỲ CỦA MẸ HIỆN ĐẠI...",
      category: "MẸ & BÉ",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "td-3",
      title: "CÔ GÁI SỞ HỮU LÀN DA THỦY TINH TRONG VEO GÂY XÔN XAO CỘNG ĐỒNG LÀM ĐẸP...",
      category: "CUỘC SỐNG",
      author: "mona",
      date: "10 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ],
  lowerThreeCols: {
    lamDep: {
      featured: {
        id: "ld-main",
        title: "Công nghệ ánh sáng Mini-LED sinh học mới ứng dụng trong trẻ hóa da chuyên sâu...",
        category: "CÔNG NGHỆ",
        author: "mona",
        date: "11 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
      },
      list: [
        {
          id: "ld-1",
          title: "Bí quyết phục hồi làn da tươi tắn chỉ sau 7 ngày nghỉ ngơi hợp lý...",
          category: "Làm đẹp",
          author: "mona",
          date: "12 Tháng Tư, 2026",
          comments: 0,
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
        },
        {
          id: "ld-2",
          title: "Máy điện di tinh chất thông minh tích hợp cảm biến độ ẩm da tự động...",
          category: "Công nghệ",
          author: "mona",
          date: "10 Tháng Tư, 2026",
          comments: 0,
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
        },
        {
          id: "ld-3",
          title: "Màn lột xác nhan sắc ngoạn mục nhờ kiên trì skincare chuẩn khoa học...",
          category: "Chăm sóc da",
          author: "mona",
          date: "12 Tháng Tư, 2026",
          comments: 0,
          image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    thoiTrang: {
      featured: {
        id: "tt-main",
        title: "Phong cách trang điểm trong trẻo tự nhiên tôn vinh nét đẹp Á Đông...",
        category: "THỜI TRANG",
        author: "mona",
        date: "10 Tháng Tư, 2026",
        comments: 0,
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
      },
      list: [
        {
          id: "tt-1",
          title: "Nàng Hoa hậu giữ kiểu tóc đen suôn mượt suốt 12 năm không lỗi mốt...",
          category: "Thời trang",
          author: "mona",
          date: "12 Tháng Tư, 2026",
          comments: 0,
          image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=300&q=80"
        },
        {
          id: "tt-2",
          title: "Xu hướng phối đồ thanh lịch đi làm kết hợp tông makeup cam đào...",
          category: "Phong cách",
          author: "mona",
          date: "10 Tháng Tư, 2026",
          comments: 0,
          image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80"
        },
        {
          id: "tt-3",
          title: "Bí quyết giữ vòng eo con kiến 56cm để diện đẹp mọi thiết kế ôm sát...",
          category: "Dáng đẹp",
          author: "mona",
          date: "12 Tháng Tư, 2026",
          comments: 0,
          image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80"
        }
      ]
    },
    diemTin: [
      {
        id: "dt-1",
        title: "Hành trình nâng tầm nhan sắc chuẩn tỷ lệ vàng tại viện thẩm mỹ...",
        category: "Cuộc sống",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image: ""
      },
      {
        id: "dt-2",
        title: "Bí quyết giữ vòng eo 56cm săn chắc nhờ tập luyện 30 phút mỗi sáng...",
        category: "Dáng đẹp",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image: ""
      },
      {
        id: "dt-3",
        title: "Nàng Hoa hậu chia sẻ công thức ủ tóc thảo mộc suốt 12 năm...",
        category: "Giải trí",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image: ""
      },
      {
        id: "dt-4",
        title: "Chuyên gia hướng dẫn chăm sóc làn da nhạy cảm mùa nắng nóng...",
        category: "Mẹ & Bé",
        author: "mona",
        date: "12 Tháng Tư, 2026",
        comments: 0,
        image: ""
      }
    ]
  },
  videoPlaylist: [
    {
      id: "vid-1",
      title: "Tập #5: Thực đơn dinh dưỡng Collagen tự nhiên từ hải sản & rau xanh giúp trẻ hóa da",
      duration: "14:20",
      thumbnail:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "vid-2",
      title: "Khám phá không gian spa thảo mộc yên bình & liệu trình thải độc da chuyên sâu",
      duration: "16:28",
      thumbnail:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "vid-3",
      title: "Hướng dẫn 7 bước massage nâng cơ mặt V-Line tại nhà mỗi tối trước khi ngủ",
      duration: "20:09",
      thumbnail:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "vid-4",
      title: "Trải nghiệm quy trình soi da AI 3D & tư vấn phác đồ trị nám chuẩn Y khoa 5 sao",
      duration: "18:54",
      thumbnail:
        "https://images.unsplash.com/photo-1512290900672-1f84d1e2b8f2?auto=format&fit=crop&w=400&q=80"
    }
  ],
  bottomNewsGrid: [
    {
      id: "bn-1",
      title: "Hành trình thay đổi diện mạo rạng rỡ nhờ phác đồ trẻ hóa đa tầng...",
      category: "Cuộc sống",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 1,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-2",
      title: "Bí quyết duy trì vòng eo 56cm thon gọn với thực đơn Eat Clean...",
      category: "Dáng đẹp",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-3",
      title: "Nàng Hoa hậu hé lộ bí mật dưỡng mái tóc đen suôn mượt suốt 12 năm...",
      category: "Giải trí",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-4",
      title: "Chăm sóc da nhạy cảm sau sinh an toàn bằng tinh chất thảo mộc...",
      category: "Mẹ & Bé",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-5",
      title: "Cách bảo vệ hàng rào độ ẩm tự nhiên cho làn da mỏng manh của bé...",
      category: "Mẹ & Bé",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-6",
      title: "Màn lột xác vóc dáng và làn da sau sinh khiến hội chị em ngưỡng mộ...",
      category: "Mẹ & Bé",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-7",
      title: "5 Lưu ý vàng khi lựa chọn mỹ phẩm hữu cơ an toàn cho phụ nữ mang thai...",
      category: "Mẹ & Bé",
      author: "mona",
      date: "12 Tháng Tư, 2026",
      comments: 0,
      image:
        "https://images.unsplash.com/photo-1608248597359-0e6d526a6c58?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-8",
      title: "Bác sĩ da liễu giải mã công nghệ nâng cơ trẻ hóa cho người bận rộn...",
      category: "Công nghệ",
      author: "mona",
      date: "11 Tháng Tư, 2026",
      comments: 1,
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-9",
      title: "Thế hệ máy phân tích da AI quang phổ mới tại các phòng khám chuẩn quốc tế...",
      category: "Công nghệ",
      author: "mona",
      date: "11 Tháng Tư, 2026",
      comments: 1,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "bn-10",
      title: "5 Hoạt chất vàng trong làng trẻ hóa da dự kiến thống lĩnh xu hướng năm nay",
      category: "Công nghệ",
      author: "mona",
      date: "11 Tháng Tư, 2026",
      comments: 1,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    }
  ],
  footerTopics: [
    { name: "Cuộc sống", count: 20 },
    { name: "Giải trí", count: 15 },
    { name: "Sao Việt", count: 13 },
    { name: "Làm đẹp", count: 10 },
    { name: "Sức khỏe", count: 8 },
    { name: "Thời trang", count: 7 }
  ]
};
