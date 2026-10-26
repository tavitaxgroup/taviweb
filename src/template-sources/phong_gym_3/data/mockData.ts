import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongGym3CityTile {
  id: string;
  type: "image" | "city";
  colSpan?: 1 | 2;
  cityName?: string;
  clubCount?: string;
  accent?: "red" | "dark";
  image: string;
}

export interface PhongGym3PartnerBrand {
  id: string;
  brandName: string;
  brandTagline: string;
  badgeColor: string;
  locations: Array<{
    name: string;
    address: string;
  }>;
}

export interface PhongGym3MasterTrainer {
  id: string;
  name: string;
  role: string;
  image: string;
  bullets: string[];
}

export interface PhongGym3Transformation {
  id: string;
  memberName: string;
  beforeImage: string;
  afterImage: string;
  beforeStats: {
    bodyFat: string;
    weight: string;
    muscleMass: string;
    fatMass: string;
  };
  afterStats: {
    bodyFat: string;
    weight: string;
    muscleMass: string;
    fatMass: string;
  };
}

export interface PhongGym3CelebrityMember {
  id: string;
  name: string;
  title: string;
  image: string;
  grayscale?: boolean;
}

export interface PhongGym3SpecialOffer {
  id: string;
  headline: string;
  subheadline: string;
  highlightText?: string;
  buttonText: string;
  theme: "dark-red" | "light-teal";
  image: string;
}

export interface PhongGym3Data extends ClonedTemplateBaseData {
  workoutGrid: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  cityMosaic: PhongGym3CityTile[];
  partnerBrands: PhongGym3PartnerBrand[];
  masterTrainers: PhongGym3MasterTrainer[];
  transformations: PhongGym3Transformation[];
  celebrities: PhongGym3CelebrityMember[];
  specialOffers: PhongGym3SpecialOffer[];
}

export const phongGym3DefaultData: PhongGym3Data = {
  business: {
    name: "California Fitness & Yoga",
    phone: ["1900 636 648", "028 7109 6889"],
    email: ["cskh@cfyc.com.vn", "info@californiafitness.vn"],
    address: "Tầng 3, Saigon Centre, 65 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 06:00 - 22:00",
    rating: 4.9,
    reviewCount: 2450,
    aboutTitle: "Hệ Thống Trung Tâm Thể Hình & Yoga Chuẩn Quốc Tế",
    aboutText: [
      "California Fitness & Yoga là hệ thống trung tâm thể hình, Yoga và võ thuật chuẩn 5 sao hàng đầu tại Việt Nam, mang đến môi trường tập luyện đẳng cấp quốc tế cùng đội ngũ huấn luyện viên chứng chỉ NASM, Les Mills toàn cầu."
    ],
    highlights: [
      "Hơn 35 câu lạc bộ chuẩn 5 sao tại 7 thành phố lớn trên toàn quốc",
      "Khu vực Yoga tịnh tâm, lồng bát giác MMA, hồ bơi & phòng xông hơi cao cấp",
      "Lộ trình cá nhân hóa cam kết thay đổi hình thể rõ rệt sau 90 ngày"
    ]
  },
  hero: {
    eyebrow: "YOGA TRẺ HÓA",
    subtitle: "DUY TRÌ VẺ ĐẸP RẠNG RỠ",
    title: "YOGA TRẺ HÓA",
    description:
      "Đánh thức nguồn năng lượng tươi trẻ, cân bằng thân - tâm - trí và kiến tạo vóc dáng thon gọn cùng các bậc thầy Yoga Ấn Độ.",
    ctaText: "TÌM HIỂU NGAY",
    ctaLink: "#services",
    secondaryCtaText: "ĐĂNG KÝ TẬP THỬ",
    secondaryCtaLink: "#trial-form",
    backgroundImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=85"
  },
  workoutGrid: [
    {
      id: "wk-1",
      title: "HUẤN LUYỆN CÁ NHÂN",
      description:
        "Phác đồ tập luyện và dinh dưỡng 1-kèm-1 chuyên biệt theo chỉ số InBody của từng hội viên.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "wk-2",
      title: "YOGA",
      description:
        "Hơn 50 lớp Yoga truyền thống, Vinyasa, Hatha và Aerial Yoga mỗi tuần trong không gian thiền định.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "wk-3",
      title: "GIẢM CÂN",
      description:
        "Đốt cháy tới 800 calo mỗi giờ với các tổ hợp HIIT, Cardio và mạch tập chuyển hóa mỡ thừa.",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "wk-4",
      title: "DANCE",
      description:
        "Giải phóng hình thể cùng âm nhạc sôi động với Zumba, Sexy Dance, BodyJam và Sh'bam.",
      image:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "wk-5",
      title: "GIẢM CĂNG CƠ",
      description:
        "Phục hồi cơ bắp chuyên sâu, giải tỏa đau mỏi cổ vai gáy bằng liệu pháp giãn cơ PNF & Foam Rolling.",
      image:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "wk-6",
      title: "KICKFIT",
      description:
        "Kết hợp tinh hoa Muay Thái, Boxing và MMA giúp săn chắc toàn thân, nâng cao phản xạ tự vệ.",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80"
    }
  ],
  cityMosaic: [
    {
      id: "m-1",
      type: "image",
      colSpan: 2,
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "m-2",
      type: "city",
      colSpan: 2,
      cityName: "HỒ CHÍ MINH",
      clubCount: "18 Câu lạc bộ",
      accent: "red",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "m-3",
      type: "image",
      colSpan: 1,
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-4",
      type: "city",
      colSpan: 1,
      cityName: "HÀ NỘI",
      clubCount: "9 Câu lạc bộ",
      accent: "red",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-5",
      type: "image",
      colSpan: 1,
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-6",
      type: "city",
      colSpan: 1,
      cityName: "ĐÀ NẴNG",
      clubCount: "2 Câu lạc bộ",
      accent: "dark",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-7",
      type: "city",
      colSpan: 1,
      cityName: "BÌNH DƯƠNG",
      clubCount: "2 Câu lạc bộ",
      accent: "red",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-8",
      type: "image",
      colSpan: 1,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-9",
      type: "city",
      colSpan: 1,
      cityName: "BIÊN HÒA",
      clubCount: "2 Câu lạc bộ",
      accent: "red",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-10",
      type: "image",
      colSpan: 1,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-11",
      type: "image",
      colSpan: 1,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-12",
      type: "city",
      colSpan: 1,
      cityName: "NHA TRANG",
      clubCount: "1 Câu lạc bộ",
      accent: "dark",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-13",
      type: "image",
      colSpan: 1,
      image:
        "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-14",
      type: "city",
      colSpan: 1,
      cityName: "CẦN THƠ",
      clubCount: "1 Câu lạc bộ",
      accent: "red",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    }
  ],
  partnerBrands: [
    {
      id: "brand-ufc",
      brandName: "UFC GYM",
      brandTagline: "TRAIN DIFFERENT",
      badgeColor: "#d91f26",
      locations: [
        {
          name: "UFC GYM VIETNAM",
          address: "Tầng 3, 12 Quốc Hương, Phường Thảo Điền, Q. 2, TP.HCM"
        },
        {
          name: "VINCOM CỘNG HÒA",
          address: "Tầng 3, 12 Quốc Hương, P. Thảo Điền, Q. 2, TP.HCM"
        },
        {
          name: "THẢO ĐIỀN PEARL PLAZA",
          address: "Tầng 3, 12 Quốc Hương, P. Thảo Điền, Q. 2, TP.HCM"
        }
      ]
    },
    {
      id: "brand-yoga",
      brandName: "YOGA PLUS",
      brandTagline: "SANCTUARY FOR SENSES",
      badgeColor: "#3b82f6",
      locations: [
        {
          name: "AEON MALL BÌNH TÂN",
          address: "Tầng 2, số 01 đường số 17A, P. Bình Trị Đông B, Q. Bình Tân, TP.HCM"
        },
        {
          name: "CƯ XÁ THUẬN VIỆT",
          address: "Tầng 3, 12 Quốc Hương, P. Thảo Điền, Q. 2, TP.HCM"
        },
        {
          name: "TÒA NHÀ HANDICO",
          address: "Tầng 4, đường Phạm Hùng, Q. Nam Từ Liêm, Hà Nội"
        }
      ]
    },
    {
      id: "brand-centuryon",
      brandName: "CENTURYON",
      brandTagline: "LUXURY FITNESS CLUB",
      badgeColor: "#b45309",
      locations: [
        {
          name: "SAIGON CENTRE",
          address: "Lầu 5, 65 đại lộ Lê Lợi, phường Bến Nghé, Quận 1, TP.HCM"
        },
        {
          name: "WEST POINT",
          address: "Số 2, Đường Tây Hồ, P. Quảng An, Q. Tây Hồ, Hà Nội"
        },
        {
          name: "ROYAL CITY",
          address: "72A Nguyễn Trãi, P. Thượng Đình, Q. Thanh Xuân, Hà Nội"
        }
      ]
    },
    {
      id: "brand-calikids",
      brandName: "CALIKIDS",
      brandTagline: "ACADEMY",
      badgeColor: "#f59e0b",
      locations: [
        {
          name: "CALIKIDS ACADEMY",
          address: "Tầng 3, 720A Điện Biên Phủ, Phường 22, Q. Bình Thạnh, TP.HCM"
        },
        {
          name: "LANDMARK 81",
          address: "Tầng 3, 12 Quốc Hương, P. Thảo Điền, Q. 2, TP.HCM"
        },
        {
          name: "TÒA NHÀ BITEXCO",
          address: "Tầng 3, 12 Quốc Hương, P. Thảo Điền, Q. 2, TP.HCM"
        }
      ]
    }
  ],
  masterTrainers: [
    {
      id: "tr-1",
      name: "AL MORGAN",
      role: "QUẢN LÝ CẤP TOÀN QUỐC",
      image:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Chứng nhận từ Học Viện Y Học Thể Thao Quốc Gia (NASM)",
        "25 năm huấn luyện thể thao tại Hoa Kỳ, Đức, Singapore... và hiện nay là Việt Nam tại California Fitness & Yoga Centers.",
        "Huấn luyện cho nhiều ngôi sao hàng đầu."
      ]
    },
    {
      id: "tr-2",
      name: "MINT",
      role: "QUẢN LÝ CẤP TOÀN QUỐC",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Chứng nhận HLV từ tập đoàn thể hình danh tiếng thế giới Les Mills",
        "Mint Nguyễn đã làm giảng viên đầy nhiệt thành & được yêu thích của các lớp GroupX hơn 7 năm qua tại California Fitness & Yoga Centers."
      ]
    },
    {
      id: "tr-3",
      name: "ISIDI",
      role: "CHUYÊN GIA THỂ HÌNH",
      image:
        "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Chứng chỉ Thể Thao NASM Hoa Kỳ.",
        "Hơn 8 năm kinh nghiệm thay đổi thể hình, từng trực tiếp huấn luyện cho nhiều ngôi sao."
      ]
    },
    {
      id: "tr-4",
      name: "ASSIM MANN",
      role: "QUẢN LÝ BỘ MÔN YOGA",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
      bullets: [
        "Assim Mann đã nghiên cứu và học hỏi từ nhiều bậc thầy Yoga, là một trong những đệ tử chân truyền của Shri B.K.S Iyengar.",
        "Assim đã luyện tập Yoga hơn 15 năm. Anh cũng đam mê lướt internet, xem phim và chơi bóng đá."
      ]
    }
  ],
  transformations: [
    {
      id: "tf-1",
      memberName: "TERRY RIVERA",
      beforeImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80",
      beforeStats: {
        bodyFat: "24.2%",
        weight: "87.3kg",
        muscleMass: "37.6kg",
        fatMass: "21kg"
      },
      afterStats: {
        bodyFat: "10%",
        weight: "71.8kg",
        muscleMass: "37kg",
        fatMass: "7kg"
      }
    },
    {
      id: "tf-2",
      memberName: "NGUYỄN HOÀNG LONG",
      beforeImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=500&q=80",
      beforeStats: {
        bodyFat: "28.5%",
        weight: "92.0kg",
        muscleMass: "35.2kg",
        fatMass: "26.2kg"
      },
      afterStats: {
        bodyFat: "12.4%",
        weight: "75.5kg",
        muscleMass: "38.4kg",
        fatMass: "9.3kg"
      }
    }
  ],
  celebrities: [
    {
      id: "cel-1",
      name: "KỲ DUYÊN",
      title: "Hoa Hậu",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      grayscale: true
    },
    {
      id: "cel-2",
      name: "PHẠM HƯƠNG",
      title: "Hoa Hậu",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      grayscale: false
    },
    {
      id: "cel-3",
      name: "RANDY DOBSON",
      title: "Chairman & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      grayscale: false
    },
    {
      id: "cel-4",
      name: "PHƯƠNG MAI",
      title: "Người Mẫu",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      grayscale: false
    },
    {
      id: "cel-5",
      name: "VŨ CÁT TƯỜNG",
      title: "Ca Sĩ",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
      grayscale: true
    },
    {
      id: "cel-6",
      name: "DIỄM MY",
      title: "Diễn Viên",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
      grayscale: false
    },
    {
      id: "cel-7",
      name: "HƯƠNG GIANG",
      title: "Người Mẫu",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      grayscale: false
    },
    {
      id: "cel-8",
      name: "HỒ VĨNH KHOA",
      title: "Ca Sĩ / Người Mẫu",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      grayscale: false
    }
  ],
  news: [
    {
      id: "news-1",
      title: 'BÍ ẨN ĐẰNG SAU THÂN HÌNH 6 MÚI VẠM VỠ CỦA "BÁ CHỦ ĐẠI DƯƠNG" JASON MOMOA',
      date: "20 Th5",
      category: "Thể Hình Sao",
      excerpt:
        '"Thần Hải Long Vương" Jason Momoa đang gây sốt toàn cầu bởi nhân vật anh hùng trong series Liên Minh Công Lý mà anh đang thể hiện qua vai diễn...',
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "THAY ĐỔI HÌNH THỂ NGOẠN MỤC CÙNG HUẤN LUYỆN VIÊN CÁ NHÂN TẠI CFYC",
      date: "18 Th5",
      category: "Huấn Luyện Cá Nhân",
      excerpt:
        "Theo thống kê, cứ 10 người đi tập một mình thì sẽ có 9 người bỏ cuộc sau 3 tháng. Trong khi đó, cứ 10 người tập cùng huấn luyện viên...",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "CÁC ĐỘNG TÁC YOGA HỖ TRỢ TUẦN HOÀN MÁU TỐT HƠN",
      date: "15 Th5",
      category: "Yoga & Sức Khỏe",
      excerpt:
        "Máu huyết lưu thông kém có thể bị gây ra bởi một số việc làm sau: ngồi cả ngày tại bàn làm việc, cholesterol cao, các vấn đề về huyết...",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80"
    }
  ],
  specialOffers: [
    {
      id: "offer-1",
      headline: "GIẢM NGAY",
      highlightText: "5KG",
      subheadline: "CÙNG HLV CHUẨN QUỐC TẾ",
      buttonText: "TÌM HIỂU THÊM",
      theme: "dark-red",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "offer-2",
      headline: "TINH HOA YOGA ẤN ĐỘ",
      subheadline: "SUỐI NGUỒN TƯƠI TRẺ",
      buttonText: "TÌM HIỂU THÊM",
      theme: "light-teal",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
    }
  ]
};
