import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung27SuiteCard {
  id: string;
  badge: string;
  title: string;
  price: string;
  area: string;
  description: string;
  image: string;
}

export interface XayDung27TemplateData extends ClonedTemplateBaseData {
  topBarText: string;
  heroAwardSubtitle: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  sixGridPhotos: string[];
  skylineBanner: {
    scriptTitle: string;
    heading: string;
    bgImage: string;
  };
  suites: XayDung27SuiteCard[];
  promoOverlayBanner: {
    title: string;
    discountText: string;
    bullets: string[];
    bgImage: string;
  };
  blueCtaBanner: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  spaBanner: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
}

export const xayDung27DefaultData: XayDung27TemplateData = {
  business: {
    name: "Mona Hotel",
    logo: "",
    phone: ["1900 636 648", "076 922 0162"],
    email: ["info@monahotel.vn", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP. HCM",
    workingHours: "Lễ tân & Đặt phòng trực tuyến 24/7",
    rating: 4.9,
    reviewCount: 520,
    experienceYears: "15+",
    aboutTitle: "Chuẩn Mực Kiến Trúc Khách Sạn & Khu Nghỉ Dưỡng Đỉnh Cao",
    aboutText: [
      "Mona Hotel được kiến tạo theo tiêu chuẩn khách sạn và khu nghỉ dưỡng 5 sao quốc tế, kết hợp kiến trúc mặt dựng kính toàn cảnh hướng vịnh cùng nội thất sang trọng."
    ]
  },
  topBarText: "DỊCH VỤ KHÁCH SẠN TRỰC TUYẾN HÀNG ĐẦU VIỆT NAM",
  hero: {
    eyebrow: "CHUẨN MỰC KHÁCH SẠN ĐỈNH CAO",
    title: "Mona Hotel",
    subtitle: "CHUẨN MỰC KHÁCH SẠN ĐỈNH CAO",
    ctaText: "ĐẶT PHÒNG",
    ctaLink: "#dat-phong",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85"
  },
  heroAwardSubtitle:
    "Tham gia chương trình Mona Awards® và bắt đầu ngay hôm nay",
  testimonialQuote:
    "“Chồng sắp cưới của tôi và tôi đã đến đây để kết hôn trong nhà nguyện đám cưới của họ và chúng tôi không thất vọng. Khách sạn đơn giản là tuyệt đẹp”",
  testimonialAuthor: "NGUYỄN MINH ANH – KHÁCH HÀNG THÂN THIẾT",
  sixGridPhotos: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  ],
  skylineBanner: {
    scriptTitle: "Kỳ Nghỉ Đẳng Cấp",
    heading: "ĐẶT PHÒNG NGAY HÔM NAY",
    bgImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=85"
  },
  suites: [
    {
      id: "st-1",
      badge: "CẶP ĐÔI",
      title: "PHÒNG ĐÔI TẦNG ÁP MÁI (DOUBLE SUITE ATTIC)",
      price: "1,500,000 ₫",
      area: "68 m²",
      description:
        "Phòng Penthouse tầng áp mái với vách kính nghiêng đón trọn ánh sáng tự nhiên và sofa chữ L sang trọng.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "st-2",
      badge: "GIA ĐÌNH",
      title: "PHÒNG ĐÔI GIA ĐÌNH (FAMILY DOUBLE SUITE)",
      price: "800,000 ₫",
      area: "75 m²",
      description:
        "Không gian phòng khách rộng rãi trang bị đàn dương cầm cổ điển và 2 phòng ngủ kết nối tiện nghi.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "st-3",
      badge: "GIA ĐÌNH",
      title: "PHÒNG HẠNG SANG TOÀN CẢNH (LUXURY SUITE)",
      price: "850,000 ₫",
      area: "82 m²",
      description:
        "Thiết kế hiện đại tinh tế với phòng khách ngập tràn nắng sớm và ban công hướng vịnh biển.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    }
  ],
  promoOverlayBanner: {
    title: "Ưu đãi",
    discountText: "Giảm ngay 25%",
    bullets: [
      "Sự kiện đặc biệt & Dịch vụ ăn uống",
      "Đặt phòng theo nhóm",
      "Nhóm xã hội & đám cưới",
      "Không gian hội nghị"
    ],
    bgImage:
      "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=1920&q=85"
  },
  blueCtaBanner: {
    title: "Kỳ nghỉ của bạn đang chờ",
    subtitle: "Tham gia chương trình Mona Awards® và bắt đầu ngay hôm nay",
    buttonText: "Chọn một tour bất kì"
  },
  spaBanner: {
    title: "THƯ GIÃN VỚI SPA TRỌN GÓI",
    subtitle: "Bắt đầu chỉ từ 500K",
    bgImage:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80"
  }
};

export default xayDung27DefaultData;
