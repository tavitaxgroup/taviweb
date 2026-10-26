import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung26RoomItem {
  id: string;
  title: string;
  price: string;
  guests: string;
  area: string;
  description: string;
  image: string;
}

export interface XayDung26AmenityItem {
  id: string;
  title: string;
  description: string;
  icon: "pool" | "wifi" | "restaurant" | "bike";
}

export interface XayDung26MenuItem {
  id: string;
  tab: "mon-chinh" | "trang-mieng" | "thuc-uong";
  price: string;
  name: string;
  description: string;
}

export interface XayDung26TemplateData extends ClonedTemplateBaseData {
  welcomeTagline: string;
  aboutShowcaseImage: string;
  rooms: XayDung26RoomItem[];
  amenities: XayDung26AmenityItem[];
  menuItems: XayDung26MenuItem[];
  mosaicTopRow: string[];
  mosaicBottomRow: string[];
  footerGallery: string[];
}

export const xayDung26DefaultData: XayDung26TemplateData = {
  business: {
    name: "Mona Media Resort",
    logo: "",
    phone: ["076 922 0162", "0909 922 162"],
    email: ["demonhunterg@gmail.com", "mon@mona.media"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
    workingHours: "Phục vụ 24/7 tất cả các ngày trong tuần",
    rating: 4.9,
    reviewCount: 410,
    experienceYears: "15+",
    aboutTitle: "Mona Resort",
    aboutText: [
      "Một trong những yếu tố hàng đầu để những chuyến công tác và kỳ nghỉ dưỡng của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khu nghỉ dưỡng cao cấp để lưu trú. Những biệt thự hướng biển sang trọng với kiến trúc Địa Trung Hải tinh tế vừa giúp bạn thư thái, tận hưởng trọn vẹn thời gian nghỉ ngơi.",
      "Được quy hoạch đồng bộ từ cảnh quan hồ bơi tràn viền, sảnh đón vòm cao đến hệ thống phòng nghỉ tiện nghi 5 sao, Mona Resort mang đến chuẩn mực kiến trúc nghỉ dưỡng ven biển đẳng cấp cho du khách và các nhà đầu tư."
    ]
  },
  welcomeTagline: "Chào mừng đến với chúng tôi",
  hero: {
    eyebrow: "Chào mừng đến với",
    title: "Mona Media Resort",
    subtitle:
      "Tuyệt tác kiến trúc nghỉ dưỡng Địa Trung Hải bên bờ biển xanh với hệ thống biệt thự hồ bơi và tiện ích 5 sao.",
    ctaText: "Đặt ngay",
    ctaLink: "#dat-phong",
    backgroundImage:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=85"
  },
  aboutShowcaseImage:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  rooms: [
    {
      id: "rm-1",
      title: "Phòng Đơn Tiêu Chuẩn",
      price: "650.000đ/đêm",
      guests: "1 Khách",
      area: "38 m²",
      description:
        "Không gian phòng nghỉ ngập tràn ánh sáng tự nhiên với ban công hướng vườn nhiệt đới và nội thất gỗ ấm cúng.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-2",
      title: "Phòng Đôi Hướng Biển",
      price: "950.000đ/đêm",
      guests: "2 Khách",
      area: "52 m²",
      description:
        "Thiết kế hai giường đôi rộng rãi kết hợp cửa sổ toàn cảnh đón gió biển trong lành.",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rm-3",
      title: "Biệt Thự Gia Đình",
      price: "1.450.000đ/đêm",
      guests: "4 Khách",
      area: "85 m²",
      description:
        "Biệt thự nghỉ dưỡng ốp gỗ tự nhiên sang trọng với phòng khách riêng biệt và sân hiên ngắm bình minh.",
      image:
        "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=800&q=80"
    }
  ],
  amenities: [
    {
      id: "am-1",
      title: "Bể bơi rộng",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp để lưu trú trong suốt thời gian đi công tác.",
      icon: "pool"
    },
    {
      id: "am-2",
      title: "Wifi miễn phí",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp để lưu trú trong suốt thời gian đi công tác.",
      icon: "wifi"
    },
    {
      id: "am-3",
      title: "Nhà hàng",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp để lưu trú trong suốt thời gian đi công tác.",
      icon: "restaurant"
    },
    {
      id: "am-4",
      title: "Thuê xe đạp",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái chính là việc lựa chọn một khách sạn cao cấp để lưu trú trong suốt thời gian đi công tác.",
      icon: "bike"
    }
  ],
  menuItems: [
    {
      id: "mn-1",
      tab: "mon-chinh",
      price: "450.000đ",
      name: "Tôm Hùm Nướng Bơ Tỏi & Cocktail Hải Sản",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái"
    },
    {
      id: "mn-2",
      tab: "mon-chinh",
      price: "380.000đ",
      name: "Mì Ý Penne Ức Gà Nướng & Bông Cải Xanh",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái"
    },
    {
      id: "mn-3",
      tab: "mon-chinh",
      price: "320.000đ",
      name: "Salad Gà Nướng Táo Xanh & Hạt Óc Chó",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái"
    },
    {
      id: "mn-4",
      tab: "mon-chinh",
      price: "520.000đ",
      name: "Thăn Bò Mỹ Áp Chảo & Bánh Dẹt Phô Mai Bốn Vị",
      description:
        "Một trong những yếu tố hàng đầu để những chuyến công tác của bạn trở nên nhẹ nhàng, thoải mái"
    },
    {
      id: "mn-5",
      tab: "trang-mieng",
      price: "150.000đ",
      name: "Bánh Tiramisu Ý Phủ Cacao Nguyên Chất",
      description:
        "Hương vị ngọt dịu hòa quyện cùng phô mai Mascarpone béo ngậy chuẩn phong cách Địa Trung Hải"
    },
    {
      id: "mn-6",
      tab: "trang-mieng",
      price: "135.000đ",
      name: "Panna Cotta Chanh Dây & Trái Cây Nhiệt Đới",
      description:
        "Món tráng miệng thanh mát chế biến từ kem tươi thượng hạng và trái cây chín mọng trong ngày"
    },
    {
      id: "mn-7",
      tab: "thuc-uong",
      price: "160.000đ",
      name: "Cocktail Hoàng Hôn Địa Trung Hải (Mykonos Sunset)",
      description:
        "Sự kết hợp sảng khoái giữa nước ép cam đỏ, hương thảo tươi và rượu mùi trái cây vùng biển"
    },
    {
      id: "mn-8",
      tab: "thuc-uong",
      price: "120.000đ",
      name: "Trà Đào Cam Sả Mật Ong Rừng Nguyên Chất",
      description:
        "Thức uống giải nhiệt thanh khiết phục vụ tại khu vực hồ bơi vô cực và lounge bờ biển"
    }
  ],
  mosaicTopRow: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  ],
  mosaicBottomRow: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=1000&q=80"
  ],
  news: [
    {
      id: "nw-1",
      title: "CNN vinh danh khu nghỉ dưỡng hạng sang của Việt Nam",
      date: "14/05/2026",
      category: "KIẾN TRÚC NGHỈ DƯỠNG",
      excerpt:
        "Đó chính là khu nghỉ dưỡng ven biển tuyệt đẹp với kiến trúc giao thoa giữa văn hóa bản địa và phong cách Địa Trung Hải...",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-2",
      title: "Đi tìm “góc gác” của các resort sang chảnh ngày nay",
      date: "18/05/2026",
      category: "XU HƯỚNG RESORT",
      excerpt:
        "Con người từ thời xưa đã biết kiến tạo ra các khu nghỉ dưỡng ven biển hòa quyện cùng thiên nhiên...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "nw-3",
      title: "5 khu nghỉ dưỡng đẹp, sang, giá cả hợp lý đáng cho bạn “đầu tư”",
      date: "22/05/2026",
      category: "ĐẦU TƯ BĐS NGHỈ DƯỠNG",
      excerpt:
        "Kỳ nghỉ lễ mà chỉ loanh quanh ở nhà cũng chán, sao không lên kế hoạch trải nghiệm những tổ hợp biệt thự biển...",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
    }
  ],
  footerGallery: [
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=300&q=80"
  ]
};

export default xayDung26DefaultData;
