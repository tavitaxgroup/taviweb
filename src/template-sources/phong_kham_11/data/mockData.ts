import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham11HerbItem {
  id: string;
  name: string;
  benefit: string;
  position: "left" | "right" | "top";
  image: string;
}

export interface PhongKham11Data extends ClonedTemplateBaseData {
  licenseNumber: string;
  productName: string;
  quickBenefits: Array<{
    id: string;
    title: string;
    iconEmoji: string;
  }>;
  historySection: {
    title: string;
    paragraphs: string[];
    warningNote: string;
    techTitle: string;
    techDescription: string;
    techImages: string[];
    certifications: string[];
  };
  dangerSigns: string[];
  complicationSection: {
    heading: string;
    alertTitle: string;
    description: string;
    image: string;
  };
  solutionSection: {
    heading: string;
    subheading: string;
    commitmentTitle: string;
    commitmentDetails: string;
    secondaryDetails: string;
    priceSingle: string;
    priceCombo: string;
    promoNote: string;
    productImage: string;
  };
  herbalIngredients: PhongKham11HerbItem[];
  trustSection: {
    certificateImage: string;
    timelineSteps: Array<{
      stage: string;
      text: string;
    }>;
    recommendationNote: string;
  };
  countdown: {
    weeks: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  businessLicenseInfo: string;
}

export const phongKham11DefaultData: PhongKham11Data = {
  business: {
    name: "VẠN XUÂN ĐƯỜNG",
    phone: ["0126 922 0162", "1900 636 648"],
    email: ["vanxuanduongpharma@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08h00 - 21h30 (Làm việc tất cả các ngày trong tuần)",
    rating: 5.0,
    reviewCount: 4850,
    experienceYears: "300",
    aboutTitle: "Nhà Thuốc Đông Y Vạn Xuân Đường — Tinh Hoa Thảo Dược 300 Năm",
    aboutText: [
      "Vạn Xuân Đường là Nhà thuốc đông y nổi tiếng về bào chế các bài thuốc từ thảo dược thiên nhiên với các thành phần quý hiếm được kết hợp với nhau tạo nên sức mạnh dược tính tối đa, đã chữa khỏi cho rất nhiều bệnh nhân cả nước. Nhà thuốc có lịch sử 300 năm.",
      "Viên uống TÂM AN LẠC TIÊN là tinh hoa được phát triển thành công từ năm 2008 từ bài thuốc bí truyền do 10 PGS, Tiến sỹ, bác sỹ đầu ngành nghiên cứu trong nhiều năm."
    ],
    highlights: [
      "100% Thảo dược tự nhiên quý hiếm",
      "Bộ Y Tế cấp phép số: 12281/2016/ATTP-XNCB",
      "Dây chuyền chiết xuất chuẩn GMP - ISO 9001 - TQM",
      "Hoàn tiền 100% nếu sử dụng không hiệu quả"
    ]
  },
  licenseNumber: "BỘ Y TẾ CẤP PHÉP SỐ: 12281/2016/ATTP-XNCB",
  productName: "TÂM AN LẠC TIÊN",
  hero: {
    eyebrow: "TÂM AN LẠC TIÊN",
    title: "SẢN PHẨM ĐẶC TRỊ MẤT NGỦ MÃN TÍNH LÂU NĂM",
    subtitle: "Chữa Mất ngủ mãn tính phải có bí quyết. Hãy để lại SĐT để chúng tôi tư vấn cho bạn.",
    ctaText: "TƯ VẤN",
    ctaLink: "#dat-mua-ngay",
    backgroundImage:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1500&q=85"
  },
  quickBenefits: [
    {
      id: "qb-1",
      title: "Hết mất ngủ thường xuyên, khó ngủ, mất ngủ mãn tính",
      iconEmoji: "🌙"
    },
    {
      id: "qb-2",
      title: "Hết suy nhược thần kinh do lo âu, căng thẳng, Stress",
      iconEmoji: "🧘"
    },
    {
      id: "qb-3",
      title: "Hết suy nhược cơ thể, giúp ngủ ngon...",
      iconEmoji: "😊"
    },
    {
      id: "qb-4",
      title: "Hết chán ăn, hay quên, tim hồi hộp",
      iconEmoji: "🍲"
    }
  ],
  historySection: {
    title: "Lịch Sử Vạn Xuân Đường",
    paragraphs: [
      "Vạn Xuân Đường là Nhà thuốc đông y nổi tiếng về bào chế các bài thuốc từ thảo dược thiên nhiên với các thành phần quý hiếm được kết hợp với nhau tạo nên sức mạnh dược tính tối đa, đã chữa khỏi cho rất nhiều bệnh nhân cả nước. Nhà thuốc có lịch sử 300 năm",
      "Viên uống TÂM AN LẠC TIÊN là tinh hoa được phát triển thành công từ năm 2008 từ bài thuốc bí truyền do 10 PGS, Tiến sỹ, bác sỹ đầu ngành nghiên cứu trong nhiều năm.",
      "Thuốc sau khi qua thực tế sử dụng được chứng minh là chữa rất hiệu quả Mất Ngủ Mãn Tính lâu năm, dai dẳng. Sản phẩm lập tức được đưa đến các trung tâm y tế để phục vụ người bệnh."
    ],
    warningNote:
      "LƯU Ý: Chúng tôi hiện nay đã tạo ra sản phẩm bán toàn quốc để quý vị không cần đến bốc thuốc xa xôi nữa",
    techTitle: "CÔNG NGHỆ CHIẾT XUẤT & BÀO CHẾ HIỆN ĐẠI",
    techDescription:
      "Những vị thuốc quý hiếm sẽ không bao giờ phát huy tối đa dược tính nếu không được chiết xuất bằng công nghệ hiện đại chuẩn GMP. Vạn Xuân Đường tự hào là đơn vị đạt đầy đủ các chứng chỉ quốc tế cao nhất.",
    techImages: [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80"
    ],
    certifications: ["GMP", "ISO 9001", "HACCP", "TQM", "HUY CHƯƠNG VÀNG"]
  },
  dangerSigns: [
    "Khó ngủ hoặc ngủ không sâu gây ra cảm giác mệt mỏi",
    "Phụ thuộc vào rượu hoặc thuốc ngủ để dễ ngủ",
    "Thường xuyên thức dậy lúc nửa đêm",
    "Thức dậy quá sớm vào buổi sáng",
    "Khó khăn trong việc ngủ lại khi thức dậy đột ngột",
    "Ban ngày mệt mỏi, hay cáu gắt, khó tập trung"
  ],
  complicationSection: {
    heading: "Mất Ngủ Mãn Tính Dẫn Đến Biến Chứng Nguy Hiểm",
    alertTitle: "ĐỘT QUỴ",
    description:
      "ĐỘT QUỴ LÀ MỘT TRONG NHỮNG BIẾN CHỨNG NGUY HIỂM, HÃY ĐIỀU TRỊ MẤT NGỦ MÃN TÍNH SỚM ĐỂ KHÔNG BỊ BIẾN CHỨNG NGUY HIỂM NÀY. NGOÀI RA CÒN RẤT NHIỀU BIẾN CHỨNG NGUY HẠI TỪ VIỆC MẤT NGỦ LÂU NGÀY NHƯ: Thoái hóa não, Giảm trí nhớ, rối loạn tâm lý, Bệnh tiểu đường, béo phì, Mất tập trung, tăng huyết áp. Ảnh hưởng nghiêm trọng đến công việc và cuộc sống...",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80"
  },
  solutionSection: {
    heading: "TÂM AN LẠC TIÊN",
    subheading: "Giải Pháp Điều Trị Mất Ngủ Mãn Tính",
    commitmentTitle: "TÂM AN LẠC TIÊN cam kết không hiệu quả hoàn tiền 100%",
    commitmentDetails:
      "Được bào chế từ 100% THẢO DƯỢC TỰ NHIÊN quý hiếm như: Lạc tiên, liên tâm, toan táo nhân, bạch thược, bạch truật, đan sâm, bồ công anh, đương quy, sài hồ, cam thảo dây, vông nem...",
    secondaryDetails:
      "Giúp điều trị Mất ngủ mãn tính kinh niên, lâu năm, stress, căng thẳng lo âu ...Tăng cường sức đề kháng, ngăn ngừa bệnh tái phát.",
    priceSingle: "480.000 đ / 1 hộp",
    priceCombo: "Mua 2 hộp giá còn 900.000",
    promoNote: "Khuyến mãi mua 3 tặng 1 cho 100 khách hàng đầu tiên sử dụng 1 liệu trình",
    productImage:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=85"
  },
  herbalIngredients: [
    {
      id: "hb-1",
      name: "TOAN TÁO NHÂN",
      benefit: "Dưỡng tâm, an thần, liễm hãn, chống mất ngủ.",
      position: "left",
      image:
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-2",
      name: "VÔNG NEM",
      benefit: "Trấn tĩnh hệ thần kinh trung ương, giúp ngủ ngon, hạ thân nhiệt và hạ huyết áp.",
      position: "left",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-3",
      name: "CAM THẢO DÂY",
      benefit: "Dẫn thuốc hấp thụ nhanh vào cơ thể, thanh nhiệt giải độc.",
      position: "left",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-4",
      name: "LIÊN TÂM",
      benefit: "Tránh suy nghĩ mộng lung, loạn trí, ổn định tâm trí, thư thái cơ thể.",
      position: "left",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-5",
      name: "SÀI HỒ",
      benefit: "Giúp an thần, giảm đau làm dịu đau tức sườn ngực, ngủ sâu giấc không thức dậy nhiều lần trong đêm.",
      position: "left",
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-6",
      name: "BẠCH THƯỢC",
      benefit: "Dưỡng huyết, nhu Can, hoãn trung, chỉ thống, liễm âm, giúp đả thông kinh mạch.",
      position: "top",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-7",
      name: "BẠCH TRUẬT",
      benefit: "Bồi bổ cơ thể, tăng đề kháng.",
      position: "right",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-8",
      name: "LẠC TIÊN",
      benefit: "Giúp ngủ ngon, giảm chứng hay quên, tim hồi hộp, giật mình, suy nghĩ phiền muộn.",
      position: "right",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-9",
      name: "ĐAN SÂM",
      benefit: "Ăn ngon ngủ ngon, kích thích hệ tiêu hóa.",
      position: "right",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-10",
      name: "BỒ CÔNG ANH",
      benefit: "Lợi gan, thận. Lợi tiểu, tránh tiểu nhiều về đêm, diệt khuẩn bảo vệ cơ thể.",
      position: "right",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=250&q=80"
    },
    {
      id: "hb-11",
      name: "ĐƯƠNG QUY",
      benefit: "Tiêu viêm, hạ nhiệt, thư thái cơ thể.",
      position: "right",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=250&q=80"
    }
  ],
  trustSection: {
    certificateImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    timelineSteps: [
      {
        stage: "Sau 7 ngày:",
        text: "Quí vị thấy cơ thể thoải mái, đầu óc minh mẫn thông thoáng, dễ chịu, bạn đã ngủ ngon hơn rất nhiều."
      },
      {
        stage: "Sau 15 ngày:",
        text: "Quý vị đã có thể ngủ ngon giấc, không lo âu suy nghĩ, không bị thức dậy lúc nửa đêm, nếu thức dậy thì vẫn ngủ lại được bình thường."
      },
      {
        stage: "Sau 01 tháng:",
        text: "Sẽ khỏi với bệnh cấp tính hoặc mới chuyển sang mãn tính. Bệnh Mãn tính lâu năm cần sử dụng liên tục 2-4 liệu trình."
      }
    ],
    recommendationNote:
      "Tuy bạn đã ngủ ngon, đầu óc thoải mái và dễ chịu nhưng chúng tôi khuyên bạn nên chữa dứt điểm bằng cách sử dụng đủ liệu trình."
  },
  testimonials: [
    {
      name: "BÁC. Nguyễn Văn Hiệp",
      role: "Minh Khai, Hà Nội",
      content:
        "Tôi bị mất ngủ mãn tính cách đây gần 10 năm, Sau khi sử dụng Tâm An Lạc Tiên giờ tôi đã ngủ ngon, ngủ ngày 7 tiếng không thức dậy giữa đêm nữa xin cảm ơn nhà thuốc rất nhiều!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
    },
    {
      name: "Cô. Bùi Thị Uyên",
      role: "Nha Trang, Khánh Hòa",
      content:
        "Tôi mất ngủ 5 năm nay, có những đêm thức trắng chờ ngủ được 1h2h, cơ thể mệt mỏi suy nhược. Nhưng sau khi tôi sử dụng Tâm An Lạc Tiên thì đây là 1 sản phẩm rất thực sự. Tôi đã trở về cuộc sống bình thường!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80"
    },
    {
      name: "Chị. Trần Thị Huyền Anh",
      role: "Hải Châu, Đà Nẵng",
      content:
        "Do suy nghĩ nhiều chuyện gia đình nên tôi luôn trong tình trạng Stress căng thẳng, về đêm đến tôi chập chờn khó ngủ. Tuy nhiên giờ đây tôi đã ngủ ngon sau khi sử dụng 1 tháng Tâm An Lạc Tiên.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
    },
    {
      name: "Cô. Hà Thị Mây",
      role: "Thanh Xuân, Hà Nội",
      content:
        "Tôi giờ ngủ rất ngon, và tôi đã lấy lại được sức khỏe như trước đây, không biết nói gì hơn ngoài việc cảm ơn nhà thuốc và tôi sẽ giới thiệu bạn bè mua dùng sản phẩm!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80"
    }
  ],
  countdown: {
    weeks: "26",
    days: "5",
    hours: "1",
    minutes: "21",
    seconds: "22"
  },
  businessLicenseInfo: "Số 0107228215 — Sở KHĐT Thành Phố Hà Nội Cấp."
};
