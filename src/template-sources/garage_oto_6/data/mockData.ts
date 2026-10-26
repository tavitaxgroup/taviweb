import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto6Product {
  id: string;
  name: string;
  modelTag?: string;
  warrantyTag?: string;
  price: string;
  numericPrice: number;
  oldPrice?: string;
  discountBadge?: string;
  specsNote?: string;
  image: string;
  category: "screen" | "cam360" | "dashcam" | "rear";
}

export interface GarageOto6BigSaleBanner {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonText: string;
  theme: "purple" | "red";
  image: string;
}

export interface GarageOto6Data extends ClonedTemplateBaseData {
  heroWheelImage: string;
  products: GarageOto6Product[];
  bigSaleBanners: GarageOto6BigSaleBanner[];
}

export const garageOto6DefaultData: GarageOto6Data = {
  business: {
    name: "Hùng Vỹ Auto",
    phone: ["076 922 0162", "0909 662 162"],
    email: ["cskh@hungvyauto.vn", "doxe@hungvyauto.vn"],
    address: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    workingHours: "Thứ 2 - Chủ Nhật: 08:00 - 20:00",
    rating: 4.9,
    reviewCount: 1280,
    aboutTitle: "Trung Tâm Độ Xe, Decal & Phụ Kiện Ô Tô Chính Hãng",
    aboutText: [
      "Chúng tôi chuyên cung cấp các mặt hàng điện tử chuyên dụng cho xe hơi, màn hình Android, Camera 360, Camera hành trình và độ mâm lốp thể thao. Uy tín – Chất lượng – Dịch vụ tốt."
    ],
    highlights: [
      "Lắp đặt cắm giắc Zin 100%, bảo hành điện tử chính hãng 24 tháng",
      "Đội ngũ kỹ thuật viên điện ô tô & dán phim cách nhiệt tay nghề cao",
      "Hỗ trợ lắp đặt tận nhà miễn phí khu vực nội thành TP.HCM"
    ]
  },
  hero: {
    eyebrow: "TRUNG TÂM ĐỘ XE & PHỤ KIỆN Ô TÔ",
    subtitle: "Car Accessory & Tuning Center",
    title: "HÙNG VỸ AUTO",
    description:
      "Chúng tôi chuyên cung cấp các mặt hàng điện tử chuyên dụng cho xe hơi. Uy tín – Chất lượng – Dịch vụ tốt.",
    ctaText: "MUA NGAY",
    ctaLink: "#screen-section",
    secondaryCtaText: "TƯ VẤN LẮP ĐẶT",
    secondaryCtaLink: "#footer",
    backgroundImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85"
  },
  heroWheelImage:
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=85",
  products: [
    // 1. MÀN HÌNH XE HƠI (4)
    {
      id: "scr-1",
      name: "DVD Honda Civic 2007-2011",
      modelTag: "Honda Civic 2012-2015",
      warrantyTag: "Bảo hành 24 Tháng",
      price: "10,200,000 ₫",
      numericPrice: 10200000,
      specsNote: "IPS + Navitel + 2GB RAM / 32GB + 4G LTE",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      category: "screen"
    },
    {
      id: "scr-2",
      name: "DVD Nissan X-trail 2014-2015",
      modelTag: "Nissan X-trail 2014-2015",
      warrantyTag: "Bảo hành 24 Tháng",
      price: "10,800,000 ₫",
      numericPrice: 10800000,
      specsNote: "IPS + Navitel + 4GB RAM / 64GB + 4G LTE",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
      category: "screen"
    },
    {
      id: "scr-3",
      name: "DVD Toyota Altis 2014-2016",
      modelTag: "Toyota Altis 2014-2016",
      warrantyTag: "Bảo hành 24 Tháng",
      price: "9,800,000 ₫",
      numericPrice: 9800000,
      specsNote: "IPS + Vietmap S1 + 4GB RAM / 32GB + DSP",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      category: "screen"
    },
    {
      id: "scr-4",
      name: "DVD Kia Forte Điều Hòa Cơ",
      modelTag: "Kia Forte điều hòa cơ",
      warrantyTag: "Bảo hành 24 Tháng",
      price: "9,600,000 ₫",
      numericPrice: 9600000,
      specsNote: "IPS + CarPlay Không Dây + Giọng Nói Kiki",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
      category: "screen"
    },
    // 2. CAMERA 360 (4)
    {
      id: "c360-1",
      name: "Camera hành trình 360 độ kết nối Wifi",
      price: "1,516,000 ₫",
      numericPrice: 1516000,
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80",
      category: "cam360"
    },
    {
      id: "c360-2",
      name: "Camera 360 Omnivue Hàn Quốc",
      price: "18,900,000 ₫",
      numericPrice: 18900000,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      category: "cam360"
    },
    {
      id: "c360-3",
      name: "Camera 360 Panorama Toàn Cảnh 3D",
      price: "16,900,000 ₫",
      numericPrice: 16900000,
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
      category: "cam360"
    },
    {
      id: "c360-4",
      name: "Camera quan sát 360 độ Omnivue",
      oldPrice: "19,900,000 ₫",
      price: "18,899,000 ₫",
      numericPrice: 18899000,
      discountBadge: "-5%",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
      category: "cam360"
    },
    // 3. CAMERA HÀNH TRÌNH (4)
    {
      id: "dash-1",
      name: "Camera hành trình VietMap C61 Pro 4K",
      price: "3,290,000 ₫",
      numericPrice: 3290000,
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80",
      category: "dashcam"
    },
    {
      id: "dash-2",
      name: "Camera hành trình cảnh báo tốc độ VietMap KC01",
      price: "4,150,000 ₫",
      numericPrice: 4150000,
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80",
      category: "dashcam"
    },
    {
      id: "dash-3",
      name: "Camera hành trình trước sau 70mai A500S",
      oldPrice: "2,900,000 ₫",
      price: "2,580,000 ₫",
      numericPrice: 2580000,
      discountBadge: "-11%",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      category: "dashcam"
    },
    {
      id: "dash-4",
      name: "Camera hành trình gương tràn viền 12 inch",
      oldPrice: "3,500,000 ₫",
      price: "3,185,000 ₫",
      numericPrice: 3185000,
      discountBadge: "-9%",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
      category: "dashcam"
    },
    // 4. CAMERA LÙI (4)
    {
      id: "rear-1",
      name: "Camera lùi hồng ngoại AHD góc rộng 170 độ",
      price: "850,000 ₫",
      numericPrice: 850000,
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80",
      category: "rear"
    },
    {
      id: "rear-2",
      name: "Bộ cảm biến lùi 4 mắt kèm màn hình LED",
      price: "1,250,000 ₫",
      numericPrice: 1250000,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
      category: "rear"
    },
    {
      id: "rear-3",
      name: "Camera lùi tích hợp màn hình gương chống chói",
      price: "1,650,000 ₫",
      numericPrice: 1650000,
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
      category: "rear"
    },
    {
      id: "rear-4",
      name: "Camera cập lề mắt cá siêu nét ban đêm",
      price: "950,000 ₫",
      numericPrice: 950000,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
      category: "rear"
    }
  ],
  bigSaleBanners: [
    {
      id: "sale-1",
      eyebrow: "BIG SALE",
      title: "KHUYẾN MÃI GIÁ SỐC",
      subtitle: "Chương trình khuyến mãi với nhiều ưu đãi đặc biệt",
      buttonText: "Xem thêm",
      theme: "purple",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "sale-2",
      eyebrow: "BIG SALE",
      title: "KHUYẾN MÃI GIÁ SỐC",
      subtitle: "Chương trình khuyến mãi với nhiều ưu đãi đặc biệt",
      buttonText: "Xem thêm",
      theme: "red",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80"
    }
  ],
  news: [
    {
      id: "news-1",
      title: "Kinh nghiệm chọn màn hình Android ô tô chuẩn giắc Zin theo từng dòng xe",
      date: "22 Th5 2026",
      category: "Độ Nội Thất",
      excerpt:
        "Hướng dẫn lựa chọn cấu hình RAM/ROM, chip xử lý âm thanh DSP và hệ thống dẫn đường cảnh báo tốc độ phù hợp nhất cho xe gia đình...",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-2",
      title: "Top 5 mẫu mâm đúc thể thao & Decal đổi màu dẫn đầu xu hướng 2026",
      date: "20 Th5 2026",
      category: "Độ Ngoại Thất",
      excerpt:
        "Khám phá các bộ mâm Forged siêu nhẹ kết hợp gói dán PPF bảo vệ sơn và Wrap đổi màu cao cấp không bong tróc...",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "news-3",
      title: "Vì sao nên lắp đặt Camera 360 độ toàn cảnh cho xe mới mua?",
      date: "18 Th5 2026",
      category: "An Toàn Lái Xe",
      excerpt:
        "Xóa bỏ hoàn toàn điểm mù khi di chuyển trong hẻm nhỏ hoặc lùi chuồng ban đêm nhờ 4 mắt camera Sony AHD góc rộng...",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=80"
    }
  ]
};
