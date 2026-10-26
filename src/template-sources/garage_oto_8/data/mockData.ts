import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto8RentalSlide {
  id: string;
  number: string;
  title: string;
  brandSpec: string;
  seatSpec: string;
  colorSpec: string;
  pricePerDay: string;
  description: string;
  image: string;
}

export interface GarageOto8TemplateData extends ClonedTemplateBaseData {
  heroCircles: string[];
  aboutStrengths: string[];
  aboutVehicleImage: string;
  rentalSlides: GarageOto8RentalSlide[];
  promoBanner: {
    scriptEyebrow: string;
    heading: string;
    ribbonText: string;
    benefitsTitle: string;
    benefits: string[];
    ctaText: string;
    consultantImage: string;
  };
  newsSectionSummary: string;
  contactSection: {
    heading: string;
    subtitle: string;
    badgeTop: string;
    badgeBottom: string;
    supportAgentImage: string;
  };
  marqueeText: string;
}

export const garageOto8DefaultData: GarageOto8TemplateData = {
  business: {
    name: "THUEXEVIP24H",
    logo: "",
    phone: ["0879 327 932", "0909 247 888"],
    email: ["info@thuexevip24h.vn", "lienhe@thuexevip24h.vn"],
    address:
      "31 Trương Phước Phan, Phường Bình Trị Đông, Quận Bình Tân, TP. Hồ Chí Minh",
    workingHours: "08:00 - 17:00 (Hỗ trợ đặt xe 24/7)",
    rating: 4.9,
    reviewCount: 5000,
    experienceYears: "20+",
    aboutTitle: "THUEXEVIP24H",
    aboutText: [
      "Trải qua hơn 20 năm vận chuyển, đưa đón hành khách và bảo dưỡng đội xe tiêu chuẩn quốc tế, THUEXEVIP24H đã từng bước khẳng định và giữ vững vị thế, uy tín chất lượng dịch vụ hàng đầu tại Sài Gòn nói riêng và miền Nam nói chung, làm hài lòng hàng triệu lượt khách trong nước cũng như du khách quốc tế đến Việt Nam."
    ]
  },
  hero: {
    eyebrow: "DỊCH VỤ THUÊ XE & CHĂM SÓC XE HẠNG SANG",
    title: "THUEXEVIP24H",
    subtitle: "“Nhanh Chóng - Tận Tâm - Chuyên Nghiệp!”",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#gioi-thieu",
    secondaryCtaText: "Đặt xe ngay",
    secondaryCtaLink: "#lien-he",
    backgroundImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  heroCircles: [
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=500&q=80"
  ],
  stats: [
    { id: "st-1", number: "10+", title: "Dòng xe" },
    { id: "st-2", number: "300+", title: "Khách hàng" },
    { id: "st-3", number: "04+", title: "Dịch vụ" }
  ],
  aboutStrengths: ["Nhanh Chóng", "Tận Tâm", "Chuyên Nghiệp"],
  aboutVehicleImage:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
  rentalSlides: [
    {
      id: "rs-1",
      number: "01",
      title: "Cho Thuê Xe Hạng Sang Mercedes S-Class Đưa Đón Đối Tác VIP",
      brandSpec: "Hãng: Mercedes-Benz S450 Luxury",
      seatSpec: "Số chỗ: 4 chỗ VIP thương gia",
      colorSpec: "Màu sắc: Đen Obsidian / Trắng Polar",
      pricePerDay: "4,500,000₫ / ngày",
      description:
        "Dịch vụ xe sedan hạng sang có tài xế thông thạo ngoại ngữ chuyên phục vụ hội nghị, đón tiếp chuyên gia và sự kiện cấp cao.",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "rs-2",
      number: "02",
      title: "Cho Thuê Xe Carnival & Limousine 9 Chỗ Ghế Massage Thương Gia",
      brandSpec: "Hãng: Kia Carnival / DCar Limousine",
      seatSpec: "Số chỗ: 7 - 9 chỗ Boeing",
      colorSpec: "Màu sắc: Trắng Ngọc Trai / Đen",
      pricePerDay: "2,800,000₫ / ngày",
      description:
        "Khoang nội thất rộng rãi tích hợp ghế chỉnh điện, màn hình giải trí và tủ lạnh mini cho các chuyến công tác và du lịch gia đình.",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "rs-3",
      number: "03",
      title: "Cho Thuê Xe Đi Sân Bay Nội Bài & Tân Sơn Nhất",
      brandSpec: "Hãng: Ford Transit / Mercedes Sprinter",
      seatSpec: "Số chỗ: 16 chỗ tiêu chuẩn cao cấp",
      colorSpec: "Màu sắc: Bạc Ánh Kim",
      pricePerDay: "1,600,000₫ / chuyến",
      description:
        "Đội xe 16 chỗ đời mới được kiểm tra kỹ thuật định kỳ tại xưởng trước mỗi hành trình, cam kết đúng giờ tuyệt đối 24/7.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: "rs-4",
      number: "04",
      title: "Cho Thuê Xe Hợp Đồng Doanh Nghiệp & Xe Hoa Cưới Hỏi Trọn Gói",
      brandSpec: "Hãng: BMW / Audi / Lexus",
      seatSpec: "Số chỗ: 4 - 29 chỗ đa dạng",
      colorSpec: "Màu sắc: Trắng / Đỏ / Đen",
      pricePerDay: "2,200,000₫ / ca",
      description:
        "Bao gồm gói trang trí hoa tươi cao cấp, bảo dưỡng bóng sơn Ceramic trước giờ đón dâu và đội ngũ tài xế lịch thiệp.",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85"
    }
  ],
  promoBanner: {
    scriptEyebrow: "Dịch vụ cho thuê xe THUEXEVIP24H",
    heading: "NHANH CHÓNG - TẬN TÂM - CHUYÊN NGHIỆP",
    ribbonText: "“Đăng ký nhận ngay ưu đãi”",
    benefitsTitle: "Ưu đãi hấp dẫn:",
    benefits: [
      "Miễn 100% dịch vụ bảo hành & bảo dưỡng xe định kỳ",
      "Giảm 10% thuê xe hợp đồng trên 1 năm",
      "Giảm 5% thuê xe hợp đồng dưới 12 tháng"
    ],
    ctaText: "Đăng ký ngay",
    consultantImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  newsSectionSummary:
    "Khám phá những địa điểm du lịch hot nhất 2026 - cùng với dịch vụ thuê xe & chăm sóc xe chuyên nghiệp của THUEXEVIP24H",
  news: [
    {
      id: "nw-1",
      title: "Cẩm nang du lịch Nha Trang từ A - Z bằng xe hợp đồng riêng",
      date: "23/10/2026",
      category: "Cẩm nang du lịch",
      excerpt:
        "Kinh nghiệm du lịch Nha Trang tự túc là điều bạn đang cần? Cùng khám phá lộ trình cung đường biển đẹp nhất và bí quyết chọn dòng xe êm ái cho cả gia đình.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Cẩm nang du lịch Vũng Tàu từ A - Z dịp cuối tuần",
      date: "18/10/2026",
      category: "Cẩm nang du lịch",
      excerpt:
        "Kinh nghiệm thuê xe Limousine đi Vũng Tàu tự túc chi tiết nhất: các điểm check-in ven biển, hải sản tươi ngon và lịch trình 2 ngày 1 đêm.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80"
    }
  ],
  testimonials: [
    {
      id: "tm-1",
      author: "Anh Trần Văn Đức",
      role: "Giám đốc Doanh nghiệp XYZ",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      content:
        "Công ty chúng tôi đã sử dụng dịch vụ thuê xe tại đây suốt 3 năm qua, tôi đánh giá chất lượng xe luôn sạch mới, bảo dưỡng kỹ lưỡng và tài xế rất chuyên nghiệp. Những dịp lễ tết hay đón đối tác quốc tế tôi đều tin tưởng đặt xe tại đây."
    },
    {
      id: "tm-2",
      author: "Chị Nguyễn Minh Khuê",
      role: "Trưởng phòng Hành chính Tập đoàn Á Châu",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      content:
        "Đội xe 16 chỗ và Limousine cực kỳ êm ái, thủ tục hợp đồng và xuất hóa đơn VAT nhanh gọn. Nhân viên điều hành hỗ trợ 24/7 rất tận tình mỗi khi công ty cần điều chỉnh lịch trình gấp."
    },
    {
      id: "tm-3",
      author: "Anh Lê Hoàng Nam",
      role: "Khách hàng thuê xe cưới & du lịch",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      content:
        "Rất ấn tượng với dàn xe Mercedes và BMW được phủ bóng sang trọng. Bác tài đến sớm hơn 30 phút, chu đáo và thông thuộc mọi tuyến đường giúp gia đình tôi có chuyến đi trọn vẹn."
    }
  ],
  contactSection: {
    heading: "LIÊN HỆ TƯ VẤN",
    subtitle:
      "Chúng tôi sẵn sàng lắng nghe và giải đáp mọi thắc mắc của quý khách hàng",
    badgeTop: "300+ khách hàng",
    badgeBottom: "5,000+ đánh giá",
    supportAgentImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80"
  },
  marqueeText: "THUEXEVIP24H"
};

export default garageOto8DefaultData;
