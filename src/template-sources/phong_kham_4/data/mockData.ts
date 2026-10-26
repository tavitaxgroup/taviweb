import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface PhongKham4Data extends ClonedTemplateBaseData {
  productName: string;
  licenseNumber: string;
  courseBenefits: Array<{
    id: string;
    title: string;
    icon: string;
  }>;
  historySection: {
    title: string;
    items: string[];
    warningNote: string;
    techTitle: string;
    techDescription: string;
    labImages: string[];
  };
  insomniaSigns: string[];
  complicationSection: {
    heading: string;
    alertTitle: string;
    mainWarning: string;
    subWarning: string;
    patientImage: string;
  };
  solutionSection: {
    heading: string;
    subheading: string;
    commitmentTitle: string;
    herbsSummary: string;
    benefitsSummary: string;
    priceHighlight: string;
    promoHighlight: string;
  };
  herbalIngredients: Array<{
    id: string;
    name: string;
    benefit: string;
    side: "left" | "top" | "right";
    image: string;
  }>;
  trustSection: {
    heading: string;
    licenseTabTitle: string;
    efficacyTabTitle: string;
    milestones: Array<{
      stage: string;
      detail: string;
    }>;
  };
}

export const phongKham4DefaultData: PhongKham4Data = {
  business: {
    name: "VẠN XUÂN ĐƯỜNG",
    phone: ["0126 922 0162", "0988 666 162"],
    email: ["tamanlactien@vanxuanduong.vn", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "08h00 - 21h30 (Tất cả các ngày trong tuần)",
    rating: 4.9,
    reviewCount: 518,
    aboutTitle: "Lịch Sử Vạn Xuân Đường",
    aboutText: [
      "Vạn Xuân Đường là nhà thuốc Đông y nổi tiếng về bào chế các bài thuốc từ thảo dược thiên nhiên với các thành phần quý hiếm được kết hợp với nhau tạo nên sức mạnh dược tính tối đa, đã chữa khỏi cho rất nhiều bệnh nhân cả nước. Nhà thuốc có lịch sử 300 năm.",
      "Viên uống TÂM AN LẠC TIÊN là tinh hoa được phát triển thành công từ năm 2008 từ bài thuốc bí truyền do 10 PGS, Tiến sỹ, bác sỹ đầu ngành nghiên cứu trong nhiều năm.",
      "Thuốc sau khi qua thực tế sử dụng được chứng minh là chữa rất hiệu quả Mất Ngủ Mãn Tính lâu năm, dai dẳng. Sản phẩm lập tức được đưa đến các trung tâm y tế để phục vụ người bệnh."
    ],
    highlights: [
      "Bài thuốc Đông y gia truyền 300 năm kết hợp công nghệ chiết xuất chuẩn GMP",
      "100% thảo dược tự nhiên quý hiếm: Lạc tiên, Liên tâm, Toan táo nhân, Đan sâm",
      "Bộ Y Tế cấp phép lưu hành toàn quốc số 12281/2016/ATTP-XNCB",
      "Cam kết hoàn tiền 100% nếu sử dụng đúng liệu trình mà không cải thiện giấc ngủ"
    ]
  },
  productName: "TÂM AN LẠC TIÊN",
  licenseNumber: "BỘ Y TẾ CẤP PHÉP SỐ: 12281/2016/ATTP-XNCB",
  hero: {
    eyebrow: "NHÀ THUỐC ĐÔNG Y GIA TRUYỀN VẠN XUÂN ĐƯỜNG",
    title: "TÂM AN LẠC TIÊN",
    subtitle: "SẢN PHẨM ĐẶC TRỊ MẤT NGỦ MÃN TÍNH LÂU NĂM",
    description:
      "Chữa mất ngủ mãn tính phải có bí quyết. Hãy để lại SĐT để đội ngũ Y Bác sĩ Đông y tư vấn phác đồ điều trị dứt điểm cho bạn.",
    ctaText: "TƯ VẤN",
    ctaLink: "#dat-mua",
    backgroundImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1920&q=80"
  },
  courseBenefits: [
    {
      id: "cb-1",
      title: "Hết mất ngủ thường xuyên, khó ngủ, mất ngủ mãn tính",
      icon: "moon"
    },
    {
      id: "cb-2",
      title: "Hết suy nhược thần kinh do lo âu, căng thẳng, Stress",
      icon: "brain"
    },
    {
      id: "cb-3",
      title: "Hết suy nhược cơ thể, giúp ngủ ngon...",
      icon: "smile"
    },
    {
      id: "cb-4",
      title: "Hết chán ăn, hay quên, tim hồi hộp",
      icon: "heart"
    }
  ],
  historySection: {
    title: "Lịch Sử Vạn Xuân Đường",
    items: [
      "Vạn Xuân Đường là nhà thuốc Đông y nổi tiếng về bào chế các bài thuốc từ thảo dược thiên nhiên với các thành phần quý hiếm được kết hợp với nhau tạo nên sức mạnh dược tính tối đa, đã chữa khỏi cho rất nhiều bệnh nhân cả nước. Nhà thuốc có lịch sử 300 năm.",
      "Viên uống TÂM AN LẠC TIÊN là tinh hoa được phát triển thành công từ năm 2008 từ bài thuốc bí truyền do 10 PGS, Tiến sỹ, bác sỹ đầu ngành nghiên cứu trong nhiều năm.",
      "Thuốc sau khi qua thực tế sử dụng được chứng minh là chữa rất hiệu quả Mất Ngủ Mãn Tính lâu năm, dai dẳng. Sản phẩm lập tức được đưa đến các trung tâm y tế để phục vụ người bệnh."
    ],
    warningNote:
      "LƯU Ý: Chúng tôi hiện nay đã tạo ra sản phẩm bán toàn quốc để quý vị không cần đến bốc thuốc xa xôi nữa",
    techTitle: "CÔNG NGHỆ CHIẾT XUẤT & BÀO CHẾ HIỆN ĐẠI",
    techDescription:
      "Những vị thuốc quý hiếm nếu chỉ sắc thủ công thông thường sẽ không giữ được trọn vẹn hoạt chất. Nhà thuốc Vạn Xuân Đường ứng dụng dây chuyền chiết xuất chân không đạt chuẩn GMP-WHO giúp giữ trọn 100% dược tính tinh túy trong từng viên nang.",
    labImages: [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=600&q=80"
    ]
  },
  insomniaSigns: [
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
    mainWarning:
      "ĐỘT QUỴ LÀ MỘT TRONG NHỮNG BIẾN CHỨNG NGUY HIỂM. HÃY ĐIỀU TRỊ MẤT NGỦ MÃN TÍNH SỚM ĐỂ KHÔNG BỊ BIẾN CHỨNG NGUY HIỂM NÀY. NGOÀI RA CÒN RẤT NHIỀU BIẾN CHỨNG NGUY HẠI TỪ VIỆC MẤT NGỦ LÂU NGÀY NHƯ:",
    subWarning:
      "Thoái hóa não, Giảm trí nhớ, rối loạn tâm lý, Bệnh tiểu đường, béo phì, Mất tập trung, tăng huyết áp. Ảnh hưởng nghiêm trọng đến công việc và cuộc sống...",
    patientImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80"
  },
  solutionSection: {
    heading: "TÂM AN LẠC TIÊN",
    subheading: "Giải Pháp Điều Trị Mất Ngủ Mãn Tính",
    commitmentTitle: "TÂM AN LẠC TIÊN cam kết không hiệu quả hoàn tiền 100%",
    herbsSummary:
      "Được bào chế từ 100% THẢO DƯỢC TỰ NHIÊN quý hiếm như: Lạc tiên, liên tâm, toan táo nhân, bạch thược, bạch truật, đan sâm, bồ công anh, đương quy, sài hồ, cam thảo dây, vông nem...",
    benefitsSummary:
      "Giúp điều trị Mất ngủ mãn tính kinh niên, lâu năm, stress, căng thẳng lo âu ...Tăng cường sức đề kháng, ngăn ngừa bệnh tái phát.",
    priceHighlight: "Giá chỉ: 480.000 đ / 1 hộp – Mua 2 hộp giá còn 900.000 đ",
    promoHighlight: "Khuyến mãi mua 3 tặng 1 cho 100 khách hàng đầu tiên sử dụng 1 liệu trình"
  },
  herbalIngredients: [
    {
      id: "herb-1",
      name: "TOAN TÁO NHÂN",
      benefit: "Dưỡng tâm, an thần, liễm hãn, chống mất ngủ.",
      side: "left",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-2",
      name: "VÔNG NEM",
      benefit: "Trấn tĩnh hệ thần kinh trung ương, giúp ngủ ngon, hạ thân nhiệt và hạ huyết áp.",
      side: "left",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-3",
      name: "CAM THẢO DÂY",
      benefit: "Dẫn thuốc hấp thụ nhanh vào cơ thể, thanh nhiệt giải độc.",
      side: "left",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-4",
      name: "LIÊN TÂM",
      benefit: "Tránh suy nghĩ mông lung, loạn trí, ổn định tâm trí, thư thái cơ thể.",
      side: "left",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-5",
      name: "SÀI HỒ",
      benefit: "Giúp an thần, giảm đau làm dịu đầu lúc sực thức, ngủ sâu giấc không thức dậy nhiều lần trong đêm.",
      side: "left",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-6",
      name: "BẠCH THƯỢC",
      benefit: "Dưỡng huyết, nhu Can, hoãn trung, chỉ thống, liễm âm, giúp dễ thắng kinh mạch.",
      side: "top",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-7",
      name: "BẠCH TRUẬT",
      benefit: "Bồi bổ cơ thể, tăng đề kháng.",
      side: "right",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-8",
      name: "LẠC TIÊN",
      benefit: "Giúp ngủ ngon, giảm chứng hay quên, tim hồi hộp, giật mình, suy nghĩ phiền muộn.",
      side: "right",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-9",
      name: "ĐAN SÂM",
      benefit: "Ăn ngon ngủ ngon, kích thích hệ tiêu hóa.",
      side: "right",
      image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-10",
      name: "BỒ CÔNG ANH",
      benefit: "Lợi gan, thận Lợi tiểu, tránh tiểu nhiều về đêm, diệt khuẩn bảo vệ cơ thể.",
      side: "right",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: "herb-11",
      name: "ĐƯƠNG QUY",
      benefit: "Tiêu viêm, hạ nhiệt, thư thái cơ thể.",
      side: "right",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80"
    }
  ],
  trustSection: {
    heading: "Tại Sao Khách Hàng Lại Tin Dùng TÂM AN LẠC TIÊN",
    licenseTabTitle: "+ BỘ Y TẾ CẤP PHÉP",
    efficacyTabTitle: "+ HIỆU QUẢ SAU KHI SỬ DỤNG",
    milestones: [
      {
        stage: "Sau 7 ngày:",
        detail: "Quý vị thấy cơ thể thoải mái, đầu óc minh mẫn thông thoáng, dễ chịu, bạn đã ngủ ngon hơn rất nhiều."
      },
      {
        stage: "Sau 15 ngày:",
        detail: "Quý vị đã có thể ngủ ngon giấc, không lo âu suy nghĩ, không bị thức dậy lúc nửa đêm, nếu thức dậy thì vẫn ngủ lại được bình thường."
      },
      {
        stage: "Sau 01 tháng:",
        detail: "Sẽ khỏi với bệnh cấp tính hoặc mới chuyển sang mãn tính. Bệnh Mãn tính lâu năm cần sử dụng liên tục 2-4 liệu trình."
      }
    ]
  },
  testimonials: [
    {
      id: "t-1",
      author: "BÁC. Nguyễn Văn Hiệp",
      role: "Minh Khai, Hà Nội",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi bị mất ngủ mãn tính cách đây gần 10 năm, sau khi sử dụng Tâm An Lạc Tiên giờ tôi đã ngủ ngon, ngủ ngay 7 tiếng không thức dậy giữa đêm nữa xin cảm ơn nhà thuốc rất nhiều!"
    },
    {
      id: "t-2",
      author: "Cô. Bùi Thị Uyên",
      role: "Nha Trang, Khánh Hòa",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi mất ngủ 5 năm nay, có những đêm thức trắng chả ngủ được tí nào, cơ thể mệt mỏi suy nhược. Nhưng sau khi tôi sử dụng Tâm An Lạc Tiên thì đây là 1 sản phẩm tốt thực sự. Tôi đã trở về cuộc sống bình thường!"
    },
    {
      id: "t-3",
      author: "Chị. Trần Thị Huyền Anh",
      role: "Hải Châu, Đà Nẵng",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      content:
        "Do suy nghĩ nhiều chuyện gia đình nên tôi luôn trong tình trạng Stress căng thẳng, và đêm đến tôi chập chờn khó ngủ. Tuy nhiên giờ đây tôi đã ngủ ngon sau khi sử dụng 1 tháng Tâm An Lạc Tiên."
    },
    {
      id: "t-4",
      author: "Cô. Hà Thị Mây",
      role: "Hà Nội",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      content:
        "Tôi giờ ngủ rất ngon, và tôi đã lấy lại được sức khỏe như trước đây, không biết nói gì hơn ngoài việc cảm ơn nhà thuốc và tôi sẽ giới thiệu bạn bè mua dùng sản phẩm!"
    }
  ]
};
