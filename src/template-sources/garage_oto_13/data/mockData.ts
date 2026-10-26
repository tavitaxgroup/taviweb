import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface GarageOto13Package {
  id: string;
  tag: string;
  title: string;
  price: string;
  oldPrice?: string;
  saleBadge?: boolean;
  image: string;
}

export interface GarageOto13Data extends ClonedTemplateBaseData {
  collageImages: string[];
  checkerboardRows: Array<{
    id: string;
    title: string;
    description: string;
    image1: string;
    image2: string;
    textPosition: "right" | "left" | "center";
  }>;
  bestSellingPackages: GarageOto13Package[];
  countryPackages: GarageOto13Package[];
  customerReview: {
    image: string;
    author: string;
    source: string;
    content: string;
  };
}

export const garageOto13DefaultData: GarageOto13Data = {
  business: {
    name: "RoadKings",
    phone: ["0313 728 397", "1900 636 648"],
    email: ["info@roadkings.vn", "garage@roadkings.vn"],
    address: "1073/23 Cách Mạng Tháng 8, Phường 7, Quận Tân Bình, TP.HCM",
    workingHours: "07:00 - 21:00 (Thứ 2 - Chủ Nhật)",
    rating: 4.9,
    reviewCount: 490,
    aboutTitle: "Những Cung Đường Đa Dạng Đang Chờ Bạn Khám Phá!",
    aboutText: [
      "Bạn mệt mỏi vì khói bụi thành phố và muốn tìm kiếm một hành trình bứt phá giữa thiên nhiên hùng vĩ? RoadKings cung cấp dịch vụ độ xe địa hình, bảo dưỡng chuyên sâu và cho thuê mô tô phân khối lớn, xe Jeep & bán tải Off-road hàng đầu.",
      "Đội ngũ kỹ thuật viên giàu kinh nghiệm kiểm tra 36 hạng mục an toàn từ hệ thống phanh ABS, phuộc nhún địa hình đến lốp gai chuyên dụng trước mỗi chuyến khởi hành."
    ],
  },
  hero: {
    eyebrow: "XƯỞNG ĐỘ XE ĐỊA HÌNH & THUÊ XE PHƯỢT",
    title: "Chiến Mã Đường Đèo",
    subtitle: "Tìm kiếm mẫu xe địa hình, mô tô phân khối lớn & dịch vụ bảo dưỡng nhanh hơn",
    ctaText: "TÌM KIẾM",
    ctaLink: "#goi-dich-vu",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85",
  },
  collageImages: [
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?auto=format&fit=crop&w=600&q=80",
  ],
  checkerboardRows: [
    {
      id: "cb-1",
      title: "ĐỘI XE ROADKINGS",
      description:
        "Khám phá vẻ đẹp hùng vĩ vùng Đông Bắc: Hà Giang – Cao Bằng – Bắc Kạn cùng dàn xe địa hình được cân chỉnh động cơ và hệ thống treo hoàn hảo.",
      image1:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      image2:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      textPosition: "right",
    },
    {
      id: "cb-2",
      title: "Hành Trình Mô Tô Địa Hình RoadKings",
      description:
        "Trải nghiệm bức tranh thiên nhiên tuyệt mỹ của đèo Mã Pí Lèng trên những chiếc mô tô cào cào và Adventure đời mới, bảo dưỡng định kỳ chuẩn hãng.",
      image1:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      image2:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      textPosition: "left",
    },
    {
      id: "cb-3",
      title: "Tuyến Hà Giang – Sa Pa & Xưởng Dịch Vụ",
      description:
        "Trạm dịch vụ kỹ thuật và đội xe cứu hộ lưu động của RoadKings luôn sẵn sàng hỗ trợ 24/7 trên suốt hành trình Hà Giang và Sa Pa.",
      image1:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      image2:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      textPosition: "center",
    },
  ],
  bestSellingPackages: [
    {
      id: "bp-1",
      tag: "TOUR HÀ GIANG CAO BẰNG",
      title:
        "Gói Thuê Xe Địa Hình Miền Trung, Tặng Kèm Kiểm Tra Kỹ Thuật Toàn Diện & Nghỉ Dưỡng 4* Tại Bà Nà",
      price: "4,699,000 ₫",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bp-2",
      tag: "TOUR HÀ GIANG - SA PA",
      title:
        "Hành Trình Tây Bắc – Sapa – Fansipan 5 Ngày Cùng Đội Xe Bán Tải Độ Off-Road Dịp Đầu Xuân",
      price: "10,999,000 ₫",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bp-3",
      tag: "JEEP TOUR HÀ GIANG",
      title:
        "Trải Nghiệm Xe Jeep Địa Hình & Mô Tô Hà Nội – Hạ Long – Sapa – Fansipan Với Chi Phí Tiết Kiệm Nhất",
      price: "7,599,000 ₫",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    },
  ],
  countryPackages: [
    {
      id: "cp-1",
      tag: "HÀNH TRÌNH TRONG NƯỚC",
      title: "Gói Thuê Xe Tự Lái & Bảo Dưỡng Hành Trình Côn Đảo 2 Ngày 1 Đêm Từ Sài Gòn",
      price: "5,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cp-2",
      tag: "HÀNH TRÌNH TRONG NƯỚC",
      title:
        "Combo Xe Địa Hình Khám Phá Nam Đảo Phú Quốc 3 Ngày 2 Đêm Dịp Lễ Giáng Sinh & Năm Mới",
      price: "4,099,000 ₫",
      oldPrice: "4,999,000 ₫",
      saleBadge: true,
      image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cp-3",
      tag: "TOUR HÀ GIANG CAO BẰNG",
      title:
        "Roadtrip Xe Bán Tải & Campervan Phú Yên 3 Ngày 2 Đêm Với Giá Ưu Đãi Đặc Biệt",
      price: "4,299,000 ₫",
      image:
        "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80",
    },
  ],
  customerReview: {
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    author: "Phúc Lộc",
    source: "Facebook",
    content:
      "Tôi vừa hoàn thành chuyến đi Hà Giang cùng dàn xe của RoadKings tháng trước. Chất lượng xe cực kỳ đầm chắc, máy khỏe vượt đèo dốc mượt mà. Đội ngũ kỹ thuật viên và dẫn đoàn rất nhiệt tình, thân thiện và chu đáo. Thay mặt cả gia đình, cảm ơn RoadKings Hà Giang rất nhiều!",
  },
  news: [
    {
      id: "nw-1",
      title: "Kinh nghiệm kiểm tra phanh, lốp và phuộc trước chuyến Off-road đường đèo",
      date: "12/05/2026",
      excerpt: "Cập nhật nhanh xu hướng độ xe bán tải và bảo dưỡng mô tô đường trường...",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-2",
      title: "Top 5 mẫu mô tô Adventure và xe Jeep đáng thuê nhất khi đi Hà Giang",
      date: "19/05/2026",
      excerpt: "Đánh giá chi tiết khả năng leo dốc và mức tiêu hao nhiên liệu thực tế...",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nw-3",
      title: "Ưu đãi 30% gói bảo dưỡng tổng quát và phủ gầm chống rỉ sét mùa mưa",
      date: "26/05/2026",
      excerpt: "Chương trình tri ân khách hàng tại xưởng dịch vụ RoadKings toàn quốc...",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const mockData = garageOto13DefaultData;
export default garageOto13DefaultData;
