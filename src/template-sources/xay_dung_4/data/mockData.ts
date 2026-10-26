import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung4AboutPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  quote?: string;
}

export interface XayDung4VerticalItem {
  id: string;
  title: string;
  verticalCategory: string;
  location: string;
  area: string;
  year: string;
  description: string;
  image: string;
}

export interface XayDung4HeroSlide {
  id: string;
  indexLabel: string;
  eyebrow: string;
  title: string;
  location: string;
  image: string;
}

export interface XayDung4TemplateData extends ClonedTemplateBaseData {
  heroSlides: XayDung4HeroSlide[];
  aboutPillars: XayDung4AboutPillar[];
  projectStrips: XayDung4VerticalItem[];
  designStrips: XayDung4VerticalItem[];
}

export const xayDung4DefaultData: XayDung4TemplateData = {
  business: {
    name: "GALAXY CONS",
    logo: "",
    phone: ["0918 888 999", "028 3822 8899"],
    email: ["contact@galaxycons.vn", "architect@galaxycons.vn"],
    address: "88 Nguyễn Huệ, Quận 1, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:30 - 18:00",
    rating: 4.95,
    reviewCount: 194,
    experienceYears: "15+",
    aboutTitle: "VỀ GALAXY",
    aboutText: [
      "Nắm bắt và đáp ứng tối đa nhu cầu khắt khe của chủ đầu tư là phương châm hoạt động cốt lõi của GALAXY CONS. Chúng tôi kiến tạo những giải pháp thiết kế kiến trúc và thi công hạng sang cho biệt thự nghỉ dưỡng, penthouse, nhà hàng fine-dining, khách sạn 5 sao và tòa nhà văn phòng hạng A.",
      "Mỗi công trình của GALAXY CONS là sự giao thoa tinh tế giữa tỷ lệ kiến trúc đương đại, vật liệu thượng hạng và nghệ thuật ánh sáng, mang đến không gian sống và kinh doanh mang đậm dấu ấn độc bản."
    ]
  },
  hero: {
    eyebrow: "KIẾN TRÚC ĐƯƠNG ĐẠI & THI CÔNG HẠNG SANG",
    title: "NHÀ HÀNG CÁ NƯỚNG HAO YU — TUYỆT TÁC KHÔNG GIAN",
    subtitle: "Lầu 2, Khu Phức Hợp Thương Mại, Quận 1, TP.HCM — Quy mô 1.200m²",
    ctaText: "XEM THÊM",
    ctaLink: "#du-an",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
  },
  heroSlides: [
    {
      id: "slide-1",
      indexLabel: "01",
      eyebrow: "KIẾN TRÚC ĐƯƠNG ĐẠI & THI CÔNG HẠNG SANG",
      title: "NHÀ HÀNG CÁ NƯỚNG HAO YU — TUYỆT TÁC KHÔNG GIAN",
      location: "88 Nguyễn Huệ, Quận 1, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
    },
    {
      id: "slide-2",
      indexLabel: "02",
      eyebrow: "BIỆT THỰ NGHỈ DƯỠNG & CẢNH QUAN SINH THÁI",
      title: "THE COMO SERVICED VILLA — DẤU ẤN THƯỢNG LƯU",
      location: "Khu Thảo Điền, TP. Thủ Đức, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
    },
    {
      id: "slide-3",
      indexLabel: "03",
      eyebrow: "KHÔNG GIAN KHÁCH SẠN & LOUNGE 5 SAO",
      title: "ARIANA BOUTIQUE HOTEL — ĐẲNG CẤP KIẾN TRÚC ĐÊM",
      location: "Đại lộ Trần Phú, TP. Nha Trang",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85"
    },
    {
      id: "slide-4",
      indexLabel: "04",
      eyebrow: "TRỤ SỞ TẬP ĐOÀN & SHOWROOM HẠNG A",
      title: "ID HOUSE HEADQUARTERS — KHÔNG GIAN TỐI GIẢN",
      location: "Khu Đô Thị Thủ Thiêm, TP.HCM",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85"
    }
  ],
  aboutPillars: [
    {
      id: "pillar-1",
      number: "01",
      title: "01. Giới thiệu",
      description:
        "Nắm bắt và đáp ứng tối đa nhu cầu khách hàng là phương châm hoạt động của công ty chúng tôi. Đem lại những giải pháp thiết kế và thi công toàn diện từ biệt thự, căn hộ penthouse, văn phòng hạng A đến nhà hàng, khách sạn và lounge cao cấp.",
      quote:
        "“Đối với chúng tôi, uy tín thương hiệu và chất lượng hoàn thiện từng chi tiết luôn được đặt lên hàng đầu.”"
    },
    {
      id: "pillar-2",
      number: "02",
      title: "02. Sứ mệnh công ty",
      description:
        "Cung cấp cho chủ đầu tư những công trình kiến trúc mang tính biểu tượng, tối ưu hóa công năng vận hành, tiến độ chuẩn xác và chi phí đầu tư hiệu quả nhất trong lĩnh vực thiết kế, thi công xây dựng và trang trí nội thất hạng sang."
    },
    {
      id: "pillar-3",
      number: "03",
      title: "03. Quan điểm của công ty",
      description:
        "Luôn nỗ lực sáng tạo không ngừng với phương châm: “Đảm bảo tuyệt đối về chất lượng kết cấu, hài hòa tinh tế về thẩm mỹ đương đại, tận tâm trong từng khâu phục vụ và chu đáo trọn đời về chế độ hậu mãi bảo hành”."
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Thiết kế",
      category: "KIẾN TRÚC & NỘI THẤT CAO CẤP",
      description:
        "Tại GALAXY CONS, chủ đầu tư luôn nhận được những phương án concept độc bản, ý tưởng quy hoạch không gian đột phá từ đội ngũ kiến trúc sư chủ trì trên 15 năm kinh nghiệm.",
      icon: "design"
    },
    {
      id: "srv-2",
      title: "Xây dựng",
      category: "THI CÔNG KẾT CẤU & HOÀN THIỆN",
      description:
        "Chất lượng thi công kết cấu và độ bền vững của công trình luôn là tiêu chí sống còn. Chúng tôi cam kết bằng văn bản về chuẩn mực kỹ thuật, an toàn và tuổi thọ công trình.",
      icon: "construction"
    },
    {
      id: "srv-3",
      title: "Trang trí",
      category: "CHẾ TÁC ĐỒ RỜI & ÁNH SÁNG NGHỆ THUẬT",
      description:
        "Với xưởng sản xuất nội thất may đo riêng biệt và nghệ thuật thiết kế chiếu sáng kiến trúc, chúng tôi hoàn thiện trọn vẹn từng đường nét ngoại – nội thất tinh xảo nhất.",
      icon: "decor"
    }
  ],
  projectStrips: [
    {
      id: "proj-strip-1",
      title: "THE COMO SERVICED APARTMENT",
      verticalCategory: "NHÀ HÀNG & LOUNGE",
      location: "Quận 1, TP.HCM",
      area: "1.450 m²",
      year: "2025",
      description:
        "Tổ hợp căn hộ dịch vụ và sky lounge mang phong cách kiến trúc đương đại kết hợp mặt dựng lam đồng sang trọng.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "proj-strip-2",
      title: "BIỆT THỰ KHANG ĐIỀN RIVERSIDE",
      verticalCategory: "BIỆT THỰ NGHỈ DƯỠNG",
      location: "TP. Thủ Đức, TP.HCM",
      area: "860 m²",
      year: "2025",
      description:
        "Biệt thự nghỉ dưỡng ven sông với không gian mở liên hoàn, hồ bơi tràn viền và vật liệu đá tự nhiên nguyên khối.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "proj-strip-3",
      title: "GRAND ROYAL BOUTIQUE HOTEL",
      verticalCategory: "KHÁCH SẠN 5 SAO",
      location: "Quận 3, TP.HCM",
      area: "4.200 m²",
      year: "2024",
      description:
        "Khách sạn boutique 5 sao tiêu chuẩn quốc tế với đại sảnh thông tầng ốp đá cẩm thạch và hệ đèn chùm pha lê thủ công.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "proj-strip-4",
      title: "VĂN PHÒNG HOÀNG YẾN TOWER",
      verticalCategory: "VĂN PHÒNG HẠNG A",
      location: "Quận 1, TP.HCM",
      area: "2.100 m²",
      year: "2025",
      description:
        "Không gian làm việc điều hành hạng A lấy cảm hứng từ gỗ óc chó Bắc Mỹ, đồng xước và kính cách âm tiêu chuẩn Châu Âu.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
    }
  ],
  designStrips: [
    {
      id: "des-strip-1",
      title: "PENTHOUSE LANDMARK",
      verticalCategory: "KHÁCH SẠN - PENTHOUSE",
      location: "Bình Thạnh, TP.HCM",
      area: "520 m²",
      year: "2025",
      description:
        "Thiết kế nội thất Penthouse thông tầng với tầm nhìn toàn cảnh sông Sài Gòn, sử dụng bảng màu trầm quyền lực.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "des-strip-2",
      title: "VILLA THẢO ĐIỀN",
      verticalCategory: "BIỆT THỰ ĐƠN LẬP",
      location: "Thảo Điền, TP.HCM",
      area: "780 m²",
      year: "2025",
      description:
        "Tổ ấm nghỉ dưỡng giữa lòng phố thị với sảnh đón đá tự nhiên, cầu thang xoắn điêu khắc và hầm rượu vang riêng.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "des-strip-3",
      title: "FINE DINING SAKURA",
      verticalCategory: "NHÀ HÀNG HẠNG SANG",
      location: "Quận 1, TP.HCM",
      area: "680 m²",
      year: "2024",
      description:
        "Không gian ẩm thực Nhật Bản đương đại kết hợp nghệ thuật gỗ Hinoki, đá đen nhám và ánh sáng kịch tính.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "des-strip-4",
      title: "SHOWROOM LUXURY",
      verticalCategory: "SHOWROOM THỜI TRANG",
      location: "Quận 10, TP.HCM",
      area: "450 m²",
      year: "2025",
      description:
        "Showroom trưng bày sản phẩm xa xỉ với hệ kệ kim loại mạ PVD vàng champagne và hệ thống spotlight chuẩn bảo tàng.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
    }
  ],
  clients: [
    { id: "cl-1", name: "HUNG THINH CORP" },
    { id: "cl-2", name: "TEN SUSHI & SAKE PUB" },
    { id: "cl-3", name: "MY LIFE COFFEE" },
    { id: "cl-4", name: "TIEN PHAT CORP" },
    { id: "cl-5", name: "NOVALAND GROUP" },
    { id: "cl-6", name: "SAIGON COFFEE CLUB" },
    { id: "cl-7", name: "VIENTHONGA.VN" },
    { id: "cl-8", name: "SAIGON PAPER" },
    { id: "cl-9", name: "HAO YU RESTAURANT" },
    { id: "cl-10", name: "XUAN THU LUXURY" },
    { id: "cl-11", name: "LYNK GROUP" },
    { id: "cl-12", name: "ID HOUSE STUDIO" }
  ]
};

export default xayDung4DefaultData;
