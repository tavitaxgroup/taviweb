import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung15SampleUnit {
  id: string;
  code: string;
  title: string;
  carpetArea: string;
  wallArea: string;
  image: string;
  rooms: string[];
}

export interface XayDung15VideoItem {
  id: string;
  title: string;
  caption: string;
  thumbnail: string;
  featured?: boolean;
}

export interface XayDung15Data extends ClonedTemplateBaseData {
  overviewImage: string;
  locationMapImage: string;
  locationDescription: string;
  locationViewTitle: string;
  locationViewDesc: string;
  developerTitle: string;
  developerDesc: string;
  salesPolicies: string[];
  financialPolicies: string[];
  scaleImage: string;
  scaleSpecs: string[];
  floorTabs: Array<{
    id: string;
    label: string;
    title: string;
    image: string;
  }>;
  sampleUnits: XayDung15SampleUnit[];
  interiorGallery: string[];
  amenitiesImage: string;
  amenitiesList: string[];
  videos: XayDung15VideoItem[];
}

export const xayDung15DefaultData: XayDung15Data = {
  business: {
    name: "MONA MEDIA",
    phone: ["1900 636 648", "0909 636 648"],
    email: ["cskh@halongbayview.vn"],
    address: "Phường Trần Hưng Đạo, Thành phố Hạ Long, Tỉnh Quảng Ninh",
    workingHours: "Thứ 2 - Chủ Nhật (8h00 - 21h00)",
    rating: 5.0,
    reviewCount: 412,
    aboutTitle: "TỔNG QUAN DỰ ÁN",
    aboutText: [
      "Dự án Hạ Long Bay View – Tiếp nối sự thành công vang dội của chuỗi dự án Lạc Hồng Lotus 1 và Lạc Hồng Lotus 2 khu Ngoại Giao Đoàn – Hà Nội, Công ty Cổ phần Đầu tư Lạc Hồng cho ra mắt thị trường Quảng Ninh tổ hợp dự án Hạ Long Bay View với gần 600 căn hộ nghỉ dưỡng đẳng cấp.",
      "Dự án được đầu tư hiện đại về hạ tầng kỹ thuật kết cấu, nằm trong không gian xanh với không khí trong lành và không gian yên tĩnh, đảm bảo cuộc sống văn minh, thuận lợi cho cư dân sinh sống, đồng thời góp phần tích cực vào quy hoạch cảnh quan kiến trúc của khu đô thị tại thành phố Hạ Long, tỉnh Quảng Ninh."
    ]
  },
  hero: {
    eyebrow: "HA LONG BAY VIEW",
    title: "TỔ HỢP CĂN HỘ NGHỈ DƯỠNG & KỸ THUẬT XÂY DỰNG ĐỈNH CAO",
    subtitle: "Tuyệt tác kiến trúc bên bờ kỳ quan thiên nhiên thế giới Vịnh Hạ Long",
    ctaText: "NHẬN THÔNG TIN DỰ ÁN",
    ctaLink: "#nhan-thong-tin",
    backgroundImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  overviewImage:
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=80",
  locationMapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1100&q=80",
  locationDescription:
    "Sở hữu vị trí đắc địa tọa lạc tại Phố Hồng Tiến, Phường Trần Hưng Đạo, TP. Hạ Long, Tỉnh Quảng Ninh – nơi sở hữu hạ tầng giao thông và tiện ích đồng bộ cùng một cộng đồng dân cư văn minh và phát triển thịnh vượng.",
  locationViewTitle: "TẦM VIEW KHÔNG GIỚI HẠN",
  locationViewDesc:
    "Hạ Long Bay View tự hào là dự án duy nhất tại trung tâm Hạ Long sở hữu góc View tứ diện 360 độ tuyệt đẹp, tầm nhìn không giới hạn: Công viên Hạ Long, Hồ Yết Kiêu, Công viên Đại Dương Sun World, Vịnh Hạ Long và Cầu Bãi Cháy...",
  developerTitle: "CHỦ ĐẦU TƯ GIÀU KINH NGHIỆM",
  developerDesc:
    "Thành lập ngày 15/9/2003, sau hơn 20 năm hoạt động, Lạc Hồng đã có trên 500 cán bộ kỹ sư, cử nhân chuyên ngành và hàng ngàn công nhân có tay nghề cao. Công ty hoạt động trên các lĩnh vực thi công xây dựng dân dụng và công nghiệp, hạ tầng giao thông, thủy lợi, viễn thông và tư vấn thiết kế. Trong lĩnh vực đầu tư, với tiềm lực tài chính vững mạnh và đội ngũ lãnh đạo năng động, tâm huyết, Lạc Hồng đã tập trung phát triển nhiều dự án bất động sản và du lịch độc đáo, có chất lượng vượt trội.",
  salesPolicies: [
    "Cam kết bàn giao căn hộ đúng thời hạn quy định",
    "Bàn giao căn hộ Full nội thất liền tường tiêu chuẩn 5 sao",
    "Hỗ trợ trọn gói thủ tục vay vốn ngân hàng thương mại",
    "Bàn giao sổ hồng sở hữu lâu dài trong vòng 1 năm",
    "Ngân hàng SHB bảo lãnh tiến độ xây dựng và cho vay mua căn hộ",
    "Mua để ở, tự khai thác kinh doanh hoặc ủy thác cho thuê linh hoạt",
    "Nhập hộ khẩu, sử dụng trọn vẹn mọi tiện ích nội khu dự án"
  ],
  financialPolicies: [
    "Căn hộ dịch vụ sở hữu lâu dài (Hometel chuẩn quốc tế)",
    "Đóng 30% nhận nhà ngay, có thể cho thuê ngay chia sẻ lợi nhuận 90/10",
    "Hỗ trợ lãi suất 0% trong suốt 24 tháng đầu tiên",
    "Ân hạn nợ gốc trong 24 tháng đầu",
    "Tỷ lệ lấp đầy phòng trung bình đạt 80%/năm",
    "Tỷ suất sinh lời thực tế từ 15–20% GTCH/năm"
  ],
  scaleImage:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1100&q=80",
  scaleSpecs: [
    "Tên dự án: Hạ Long Bay View",
    "Chủ đầu tư: Công ty Cổ phần Đầu tư Lạc Hồng",
    "Vị trí: Phường Trần Hưng Đạo, Thành phố Hạ Long, Quảng Ninh",
    "Đơn vị tư vấn thiết kế: Tổng công ty Tư vấn Xây dựng Việt Nam (VNCC)",
    "Đơn vị thi công: Công ty Cổ phần Đầu tư Lạc Hồng",
    "Tư vấn giám sát: Công ty CP Tư vấn và Kiểm định Xây dựng Hạ Long",
    "Tổng diện tích khu đất: 3.392,2 m² | Diện tích xây dựng: 2.527 m²",
    "Tổng diện tích tầng hầm: 3.127 m²",
    "Tổng số căn hộ: 568 căn hộ cao cấp",
    "Bàn giao: Hoàn thiện Full nội thất 5 sao"
  ],
  floorTabs: [
    {
      id: "fl-1",
      label: "TẦNG 4-14 & 19-25",
      title: "MẶT BẰNG TẦNG 4-14 & 19-25",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "fl-2",
      label: "TẦNG 16-18",
      title: "MẶT BẰNG TẦNG 16-18",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "fl-3",
      label: "TẦNG 27-30",
      title: "MẶT BẰNG TẦNG 27-30",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80"
    },
    {
      id: "fl-4",
      label: "TẦNG 31-33",
      title: "MẶT BẰNG TẦNG PENTHOUSE 31-33",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
    }
  ],
  sampleUnits: [
    {
      id: "unit-a4",
      code: "A4-04",
      title: "MẶT BẰNG CĂN HỘ A4-04",
      carpetArea: "75,62 m²",
      wallArea: "82,45 m²",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      rooms: [
        "01. Bộ bàn ăn",
        "02. Tủ bếp chữ L",
        "03. Bàn nước",
        "04. Sofa phòng khách",
        "05. Kệ tivi",
        "06. Tủ giày âm tường",
        "07. Giường ngủ Master",
        "08. Tủ quần áo",
        "09. Bàn trang điểm",
        "10. Tủ đầu giường"
      ]
    },
    {
      id: "unit-a1",
      code: "A1-01",
      title: "MẶT BẰNG CĂN HỘ A1-01",
      carpetArea: "64,30 m²",
      wallArea: "71,10 m²",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      rooms: [
        "01. Sảnh đón & Tủ giày",
        "02. Bếp & Bàn ăn 6 ghế",
        "03. Phòng khách ban công vịnh",
        "04. Phòng ngủ Master",
        "05. Phòng ngủ 02",
        "06. Khu vệ sinh đá Marble"
      ]
    },
    {
      id: "unit-b2",
      code: "B2-08",
      title: "MẶT BẰNG CĂN HỘ B2-08",
      carpetArea: "88,15 m²",
      wallArea: "95,40 m²",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
      rooms: [
        "01. Phòng khách góc Panorama",
        "02. Phòng bếp & Đảo bếp",
        "03. Phòng ngủ Master khép kín",
        "04. Phòng ngủ 02 & 03",
        "05. Logia ngắm Vịnh Hạ Long"
      ]
    }
  ],
  interiorGallery: [
    "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80"
  ],
  amenitiesImage:
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1100&q=80",
  amenitiesList: [
    "Trung tâm thương mại sầm uất",
    "Bể bơi tràn bờ bốn mùa",
    "Phòng tập Gym hiện đại",
    "Phòng họp, hội nghị quốc tế",
    "Khu vui chơi trẻ em liên hoàn",
    "Nhà hàng ẩm thực Á – Âu",
    "Khu thể thao đa năng",
    "Công viên cây xanh thượng苑",
    "Hồ điều hòa sinh thái",
    "Skybar tầng thượng ngắm vịnh",
    "Xông hơi, Massage & Spa 5 sao"
  ],
  videos: [
    {
      id: "vid-1",
      title: "TVC Ramada by Wyndham Ha Long Bay View",
      caption: "TVC RAMADA BY WYNDHAM HẠ LONG BAY VIEW",
      thumbnail:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: "vid-2",
      title: "Ramada by Wyndham Hạ Long Bay View bản tin tài chính VTV1",
      caption: "BẢN TIN TÀI CHÍNH KINH DOANH VTV1",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: "vid-3",
      title: "Căn hộ dịch vụ Hạ Long Bay View có nhiều lợi ích hơn khách sạn",
      caption: "Phân tích tiềm năng khai thác dòng tiền",
      thumbnail:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      featured: false
    },
    {
      id: "vid-4",
      title: "Sự khác biệt căn hộ dịch vụ và mô hình lưu trú Airbnb",
      caption: "Tiêu chuẩn vận hành quốc tế Wyndham",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      featured: false
    },
    {
      id: "vid-5",
      title: "Service Apartment là ngôi nhà thứ hai hoàn hảo của bạn",
      caption: "Trải nghiệm nghỉ dưỡng thượng lưu",
      thumbnail:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      featured: false
    }
  ],
  news: [
    {
      id: "news-hl-1",
      title: "Chính sách Dự án Hạ Long Bay View",
      date: "18 Tháng Mười, 2026",
      excerpt:
        "THÔNG BÁO V/v Ban hành Chính sách bán hàng và cam kết lợi nhuận Dự án Hạ Long Bay View...",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-hl-2",
      title: "Hạ Long Bay View – Giải nhiệt cơn khát căn hộ nghỉ dưỡng",
      date: "14 Tháng Mười, 2026",
      excerpt:
        "Hạ Long – Quảng Ninh được thiên nhiên ưu ái ban tặng kỳ quan thiên nhiên thế giới thu hút hàng triệu du khách...",
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-hl-3",
      title: "KHU DU LỊCH TAM ĐẢO – Chủ đầu tư Lạc Hồng kiến tạo",
      date: "09 Tháng Mười, 2026",
      excerpt:
        "Dấu ấn năng lực thi công hạ tầng và bất động sản nghỉ dưỡng của Chủ đầu tư Lạc Hồng trên toàn quốc...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      author: "Hoàng Tuyến",
      role: "Ninh Bình",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      content:
        "Nhân viên tư vấn rất nhiệt tình, được tư vấn tài chính trực tiếp từ Giám đốc Kinh doanh dự án Hạ Long Bay View Apartment. Mức cho thuê năm đầu 15% GTCH quả thật hấp dẫn!"
    }
  ]
};

export const defaultData = xayDung15DefaultData;
export default xayDung15DefaultData;
