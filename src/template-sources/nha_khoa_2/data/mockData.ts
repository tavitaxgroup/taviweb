import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface NhaKhoa2Data extends ClonedTemplateBaseData {
  aboutFeatures: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  facilities: Array<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
  }>;
  serviceChecklists: Record<string, string[]>;
}

export const nhaKhoa2DefaultData: NhaKhoa2Data = {
  business: {
    name: "Nha Khoa YTeTot",
    phone: ["0908 333 666", "1900 6899"],
    email: ["lienhe@nhakhoaytetot.vn"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 10000,
    experienceYears: "20+",
    aboutTitle: "Dịch vụ nha khoa chuyên nghiệp",
    aboutText: [
      "Nha Khoa YTeTot cung cấp trải nghiệm dịch vụ nha khoa chuẩn quốc tế, với các gói chăm sóc chuyên sâu giúp chẩn đoán chính xác sức khỏe răng miệng của từng cá nhân và lên phác đồ điều trị tối ưu về nha chu, cấy ghép Implant, chỉnh nha và thẩm mỹ răng sứ.",
      "Với đội ngũ bác sĩ chuyên khoa Răng Hàm Mặt giàu kinh nghiệm cùng hệ thống trang thiết bị nhập khẩu trực tiếp từ châu Âu, YTeTot cam kết mang lại nụ cười rạng rỡ, an toàn tuyệt đối và không đau."
    ],
    highlights: [
      "Công nghệ chẩn đoán 3D ConeBeam CT",
      "Phòng vô trùng khép kín chuẩn Bộ Y Tế",
      "100% vật liệu sứ & trụ Implant chính hãng",
      "Bảo hành điện tử minh bạch trọn đời"
    ]
  },
  hero: {
    eyebrow: "NHA KHOA CHUẨN QUỐC TẾ",
    title: "Chuyên Nghiệp, Chuyên Gia Tận Tâm",
    subtitle:
      "Với đội ngũ bác sĩ nha khoa hàng đầu và nhân viên hỗ trợ chuyên nghiệp, YTeTot được trang bị những thiết bị hiện đại và vật liệu nha khoa tốt nhất. Chúng tôi đảm bảo kết quả khám chữa bệnh chất lượng cao nhất.",
    ctaText: "Đặt lịch khám",
    ctaLink: "#dat-lich",
    secondaryCtaText: "0908 333 666",
    secondaryCtaLink: "tel:0908333666",
    backgroundImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=85",
    images: [
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  aboutFeatures: [
    {
      id: "af-1",
      title: "Công nghệ chẩn đoán 3D ConeBeam CT",
      description:
        "Khảo sát cấu trúc xương hàm, mạch máu và dây thần kinh với độ chính xác đến từng milimet, hỗ trợ cấy ghép Implant và chỉnh nha an toàn tuyệt đối.",
      icon: "scan"
    },
    {
      id: "af-2",
      title: "Phòng vô trùng khép kín chuẩn Bộ Y Tế",
      description:
        "Quy trình khử khuẩn Autoclave 6 bước tự động cùng bộ dụng cụ riêng biệt cho mỗi khách hàng, loại bỏ hoàn toàn nguy cơ lây nhiễm chéo.",
      icon: "shield"
    }
  ],
  facilities: [
    {
      id: "fac-1",
      title: "Hệ thống CT ConeBeam 3D",
      subtitle: "Chẩn đoán hình ảnh đa chiều chính xác cao",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "fac-2",
      title: "Máy quét dấu răng iTero 5D",
      subtitle: "Lấy dấu kỹ thuật số trong 60 giây, xem trước kết quả niềng",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "fac-3",
      title: "Phòng cấy ghép Implant vô trùng",
      subtitle: "Tiêu chuẩn phòng mổ áp lực dương hiện đại",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "fac-4",
      title: "Công nghệ tẩy trắng Laser Whitening",
      subtitle: "Bật tông trắng sáng tự nhiên, ê buốt bằng không",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "fac-5",
      title: "Khu vực đón tiếp chuẩn 5 sao",
      subtitle: "Không gian thư giãn, sang trọng và riêng tư",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80"
    }
  ],
  team: [
    {
      id: "doc-1",
      name: "BS. CKI Nguyễn Minh Hoàng",
      position: "Bác sĩ CKI • Chuyên gia Cấy ghép Implant",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "doc-2",
      name: "ThS. BS Trần Thanh Thảo",
      position: "Thạc sĩ Nha khoa • Chuyên gia Chỉnh nha Invisalign",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "doc-3",
      name: "BS. CKI Lê Quốc Bảo",
      position: "Bác sĩ CKI • Phục hình Răng sứ Thẩm mỹ",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "doc-4",
      name: "ThS. BS Phạm Ngọc Lan",
      position: "Thạc sĩ Nha khoa • Nha khoa Tổng quát & Nội nha",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "doc-5",
      name: "BS. CKI Vũ Đình Khôi",
      position: "Bác sĩ CKI • Phẫu thuật Hàm mặt & Nhổ răng khôn",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "doc-6",
      name: "BS. Đặng Minh Châu",
      position: "Chuyên gia Nha khoa Trẻ em & Điều trị Nha chu",
      image:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80"
    }
  ],
  stats: [
    {
      id: "st-1",
      number: "10M+",
      title: "Khách hàng tin tưởng",
      subtitle:
        "Với kinh nghiệm và sự tận tâm, YTeTot đã phục vụ hàng triệu lượt khách hàng, mang lại nụ cười tự tin và sức khỏe răng miệng bền vững."
    },
    {
      id: "st-2",
      number: "20+",
      title: "Năm kinh nghiệm",
      subtitle:
        "Đội ngũ nha sĩ và chuyên gia răng hàm mặt tại YTeTot được đào tạo chuyên sâu tại châu Âu và luôn đặt lợi ích khách hàng lên hàng đầu."
    },
    {
      id: "st-3",
      number: "7+",
      title: "Chi nhánh tiêu chuẩn",
      subtitle:
        "Hệ thống phòng khám hiện đại đạt tiêu chuẩn quốc tế, sẵn sàng đáp ứng mọi nhu cầu chăm sóc nha khoa của gia đình bạn."
    },
    {
      id: "st-4",
      number: "100%",
      title: "Bảo hành chính hãng",
      subtitle:
        "Chúng tôi cam kết sử dụng vật liệu sứ và trụ Implant chính hãng, bảo hành minh bạch trên toàn hệ thống."
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Cấy ghép Implant Thụy Sĩ",
      category: "Phục hình",
      description:
        "Khôi phục răng mất toàn diện từ chân răng đến thân răng bằng trụ Titanium Straumann chính hãng, tích hợp xương nhanh chóng.",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
      price: "Từ 16.000.000đ / trụ"
    },
    {
      id: "srv-2",
      title: "Bọc răng sứ thẩm mỹ",
      category: "Thẩm mỹ",
      description:
        "Thiết kế nụ cười Digital Smile Design với dòng sứ toàn phần Lava Plus & Orodent siêu mỏng, bảo tồn tối đa răng thật.",
      image:
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      price: "Từ 4.500.000đ / răng"
    },
    {
      id: "srv-3",
      title: "Niềng răng trong suốt Invisalign",
      category: "Chỉnh nha",
      description:
        "Khay niềng trong suốt tháo lắp linh hoạt, ứng dụng trí tuệ nhân tạo ClinCheck giúp biết trước kết quả dịch chuyển từng tuần.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      price: "Từ 45.000.000đ / liệu trình"
    },
    {
      id: "srv-4",
      title: "Tẩy trắng răng Laser",
      category: "Thẩm mỹ",
      description:
        "Hoạt hóa thuốc tẩy trắng bằng tia Laser bước sóng chuẩn y khoa, bật 3-4 tông chỉ sau 45 phút mà không gây ê buốt.",
      image:
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
      price: "Từ 2.500.000đ / lần"
    },
    {
      id: "srv-5",
      title: "Nha khoa trẻ em không đau",
      category: "Nha khoa trẻ em",
      description:
        "Tầm soát thay răng, bôi Vecni Fluor ngừa sâu răng và chỉnh nha tiền tăng trưởng nhẹ nhàng, giúp bé hợp tác vui vẻ.",
      image:
        "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
      price: "Từ 300.000đ / lần"
    },
    {
      id: "srv-6",
      title: "Điều trị cười hở lợi",
      category: "Tiểu phẫu thẩm mỹ",
      description:
        "Tạo hình đường viền nướu bằng công nghệ Laser Biolase ít xâm lấn, lành thương nhanh và cân đối tỷ lệ vàng khuôn mặt.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      price: "Từ 5.000.000đ / hàm"
    }
  ],
  serviceChecklists: {
    "srv-1": [
      "Chụp phim CT ConeBeam 3D miễn phí",
      "Trụ Straumann / Nobel Biocare chính hãng",
      "Bảo hành tích hợp xương trọn đời"
    ],
    "srv-2": [
      "Thiết kế nụ cười DSD cá nhân hóa",
      "Không mài nhỏ răng, không lấy tủy",
      "Thẻ bảo hành chính hãng 10 - 15 năm"
    ],
    "srv-3": [
      "Quét dấu răng 3D iTero 5D hiện đại",
      "Xem trước phác đồ 3D ClinCheck",
      "Hỗ trợ trả góp 0% lãi suất linh hoạt"
    ],
    "srv-4": [
      "Thuốc tẩy trắng Pola Office chuẩn Úc",
      "Bảo vệ men răng và mô nướu tối đa",
      "Tặng bộ duy trì trắng sáng tại nhà"
    ],
    "srv-5": [
      "Bác sĩ tâm lý, nhẹ nhàng với trẻ nhỏ",
      "Theo dõi biểu đồ mọc răng định kỳ",
      "Môi trường khám thân thiện, nhiều quà tặng"
    ],
    "srv-6": [
      "Tia Laser không chảy máu, không sưng đau",
      "Thời gian thực hiện chỉ 30 phút",
      "Ổn định vĩnh viễn, không tái phát"
    ]
  },
  testimonials: [
    {
      id: "test-1",
      author: "Văn Long",
      role: "GIÁM ĐỐC MARKETING",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Dịch vụ tại Nha Khoa YTeTot khiến tôi ấn tượng ngay từ lần đầu tiên. Các bác sĩ tư vấn rất kỹ lưỡng trên phim chụp 3D và giải thích cặn kẽ từng bước trồng răng Implant. Tôi hoàn toàn hài lòng với kết quả ăn nhai chắc chắn và đã giới thiệu cho cả gia đình."
    },
    {
      id: "test-2",
      author: "Bạch Ngân",
      role: "TRƯỞNG PHÒNG NHÂN SỰ",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      content:
        "Sau 18 tháng niềng răng trong suốt Invisalign tại YTeTot, nụ cười của mình đã thay đổi ngoạn mục. Phòng khám sạch sẽ, thơm tho, máy quét răng hiện đại không hề khó chịu như lấy dấu truyền thống. Cảm ơn đội ngũ bác sĩ rất nhiều!"
    },
    {
      id: "test-3",
      author: "Minh Khuê",
      role: "DOANH NHÂN",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Bọc 16 răng sứ thẩm mỹ tại YTeTot là quyết định đúng đắn nhất của tôi năm nay. Màu sứ trong tự nhiên, form răng thanh thoát đúng chuẩn tỷ lệ khuôn mặt mà hoàn toàn không bị ê buốt."
    }
  ],
  news: [
    {
      id: "news-1",
      title: "So sánh cấy ghép Implant Thụy Sĩ và cầu răng sứ truyền thống",
      date: "31/08/2025",
      category: "KIẾN THỨC IMPLANT",
      excerpt:
        "Tìm hiểu lý do vì sao cấy ghép Implant được các chuyên gia Răng Hàm Mặt đánh giá là giải pháp ngăn ngừa tiêu xương hàm hiệu quả nhất hiện nay.",
      image:
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Niềng răng trong suốt Invisalign mất bao lâu thì thấy rõ hiệu quả?",
      date: "29/08/2025",
      category: "CHỈNH NHA",
      excerpt:
        "Nhờ công nghệ quét dấu răng iTero 5D và phác đồ ClinCheck cá nhân hóa, khách hàng có thể theo dõi sự dịch chuyển của răng theo từng khay niềng.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "5 thói quen chăm sóc răng sứ giúp duy trì độ bền đẹp trên 20 năm",
      date: "25/08/2025",
      category: "THẨM MỸ RĂNG SỨ",
      excerpt:
        "Hướng dẫn cách lựa chọn bàn chải lông mềm, máy tăm nước và lịch lấy cao răng định kỳ giúp bảo vệ nướu và giữ màu sứ luôn sáng bóng.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
