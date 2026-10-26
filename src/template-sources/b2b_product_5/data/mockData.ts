import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface B2BProduct5Data extends ClonedTemplateBaseData {
  serviceIcons: Array<{
    id: string;
    title: string;
    accentColor: string;
  }>;
  serviceColumns: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  ecoMission: {
    eyebrow: string;
    title: string;
    description: string;
    ctaText: string;
    image: string;
    statGreen: { label: string; number: string; unit: string };
    statDark: { label: string; number: string; unit: string };
  };
  ecoTrend: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    rings: Array<{ percent: number; label: string }>;
  };
}

export const b2bProduct5DefaultData: B2BProduct5Data = {
  business: {
    name: "AgriTech VN",
    phone: ["1900 636 648", "0909 888 555"],
    email: ["contact@agritechvn.com"],
    address: "1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM",
    workingHours: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    rating: 4.9,
    reviewCount: 920,
    aboutTitle: "Nông nghiệp Công nghệ cao",
    aboutText: [
      "Nông nghiệp công nghệ cao là xu hướng phát triển tất yếu của nền nông nghiệp hiện đại. Với những ưu điểm vượt trội như tăng năng suất, đồng nhất chất lượng nông sản xuất khẩu và giảm thiểu ô nhiễm môi trường, mô hình nhà màng IoT của AgriTech VN đang được hàng trăm hợp tác xã và đối tác B2B tin tưởng áp dụng.",
      "Chúng tôi cung cấp giải pháp trọn gói từ giống cây trồng F1, hệ thống tưới nhỏ giọt Israel đến bao tiêu đầu ra nông sản sạch."
    ]
  },
  hero: {
    eyebrow: "TẬP ĐOÀN NÔNG NGHIỆP CÔNG NGHỆ CAO",
    title: "Nông trại Hữu cơ",
    subtitle:
      "Chúng tôi đảm bảo chuỗi cung ứng thực phẩm sạch, truy xuất nguồn gốc minh bạch cho hệ thống siêu thị và gia đình Việt.",
    ctaText: "Dịch vụ",
    ctaLink: "#dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1800&q=85"
  },
  serviceIcons: [
    { id: "si-1", title: "Sản xuất cây trồng", accentColor: "bg-emerald-100" },
    { id: "si-2", title: "Quy trình canh tác", accentColor: "bg-amber-100" },
    { id: "si-3", title: "Kiểm soát dịch hại", accentColor: "bg-emerald-100" },
    { id: "si-4", title: "Chăn nuôi sinh thái", accentColor: "bg-amber-100" }
  ],
  serviceColumns: [
    {
      id: "sc-1",
      title: "Quản lý trang trại",
      description:
        "Giám sát vi khí hậu nhà màng, độ ẩm đất và dinh dưỡng tự động qua cảm biến IoT thời gian thực.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sc-2",
      title: "Nhân giống cây trồng",
      description:
        "Lai tạo và nuôi cấy mô giống cây trồng kháng bệnh cao, năng suất vượt trội đạt chuẩn GlobalG.A.P.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sc-3",
      title: "Lập kế hoạch canh tác",
      description:
        "Tư vấn quy hoạch vùng trồng, luân canh cây trồng và tối ưu hóa chi phí vận hành cho trang trại lớn.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sc-4",
      title: "Chăm sóc vật nuôi",
      description:
        "Mô hình chăn nuôi hữu cơ tuần hoàn không kháng sinh, thức ăn thảo mộc tự nhiên đạt chuẩn châu Âu.",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80"
    }
  ],
  services: [
    {
      id: "prd-1",
      title: "Cà chua Beef Hữu cơ",
      category: "LÔ XUẤT KHẨU",
      description: "Canh tác nhà màng Đà Lạt",
      price: "45.000₫ / kg",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prd-2",
      title: "Rau diếp tươi Thủy canh",
      category: "CÓ SẴN",
      description: "Thu hoạch mới mỗi sáng",
      price: "25.000₫ / bó",
      image:
        "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prd-3",
      title: "Củ Hành Tây Đà Lạt",
      category: "-10%",
      description: "Đóng bao lưới 10kg - 20kg",
      price: "29.000₫ / kg",
      image:
        "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "prd-4",
      title: "Bắp non Ngọt Hữu cơ",
      category: "CÓ SẴN",
      description: "Đóng khay hút chân không",
      price: "25.000₫ – 30.000₫",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80"
    }
  ],
  ecoMission: {
    eyebrow: "SỨ MỆNH - TẦM NHÌN",
    title: "Nông nghiệp - Sinh thái",
    description:
      "Lựa chọn hàng đầu của những doanh nghiệp và người tiêu dùng quan tâm đến sức khỏe và môi trường. Chúng tôi cung cấp các sản phẩm nông nghiệp sinh thái chất lượng cao, được sản xuất từ hệ thống nông trại chuẩn VietGAP & GlobalG.A.P trên toàn quốc.",
    ctaText: "Xem ngay",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
    statGreen: {
      label: "Nông trại",
      number: "1000+",
      unit: "Hecta đất trồng trọt"
    },
    statDark: {
      label: "Trang thiết bị",
      number: "25",
      unit: "Tổ hợp máy móc tự động"
    }
  },
  ecoTrend: {
    eyebrow: "CHIA SẺ KINH NGHIỆM",
    title: "Điều gì tạo nên xu hướng trang trại sinh thái?",
    description:
      "Nông nghiệp sinh thái là phương pháp canh tác bền vững, kết hợp hài hòa giữa các yếu tố tự nhiên như đất, nước, vi sinh vật có lợi và công nghệ cảm biến thông minh để tạo ra hệ sinh thái cân bằng, mang lại giá trị kinh tế lâu dài.",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
    rings: [
      { percent: 35, label: "Trên toàn thế giới" },
      { percent: 65, label: "Thiết bị đặc biệt" }
    ]
  },
  news: [
    {
      id: "ag-n1",
      title: "Các loại phân bón sinh học vi sinh thế hệ mới cho nông nghiệp hữu cơ",
      date: "14 Tháng Mười Hai, 2025",
      category: "KIẾN THỨC",
      excerpt:
        "Giải pháp cải tạo đất bạc màu và tăng cường hệ vi sinh vật có lợi quanh rễ cây trồng.",
      image:
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ag-n2",
      title: "Các loại khoáng hữu cơ và cách áp dụng tưới nhỏ giọt hiệu quả cao",
      date: "14 Tháng Mười Hai, 2025",
      category: "KIẾN THỨC, TIN TỨC",
      excerpt:
        "Tối ưu 40% lượng nước tưới và phân bón nhờ hệ thống châm phân tự động điều khiển qua điện thoại.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ag-n3",
      title: "Lịch sử phát triển và tiềm năng xuất khẩu của nông sản sạch Việt Nam",
      date: "14 Tháng Mười Hai, 2025",
      category: "KIẾN THỨC, TIN TỨC",
      excerpt:
        "Hành trình nâng tầm nông sản Việt chinh phục các thị trường khó tính như Nhật Bản, EU và Bắc Mỹ.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
