import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface FranchiseLegalPillar {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface BrandSystemItem {
  id: string;
  name: string;
  category: string;
  storeCount: string;
  ipStatus: string;
  description: string;
  image: string;
}

export interface LuatSu15Data {
  business: Record<string, any>;
  [key: string]: any;
  header: {
    brandName: string;
    brandSub: string;
    leftNav: Array<{ label: string; href: string }>;
    rightNav: Array<{ label: string; href: string }>;
  };
  hero: {
    headline: string;
    subheadline: string;
    cardTitle: string;
    cardDescription: string;
    cardCta: string;
    backgroundImage: string;
  };
  aboutSection: {
    captionBanner: string;
    headingPrefix: string;
    headingHighlight: string;
    paragraphs: string[];
    ctaText: string;
    mainGallery: string[];
    secondaryImage: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  legalServicesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: FranchiseLegalPillar[];
  };
  brandEcosystemSection: {
    eyebrow: string;
    title: string;
    brands: BrandSystemItem[];
  };
  specialEventsBento: {
    sectionTitle: string;
    leftVerticalPoster: {
      scriptHeading: string;
      promoLabel: string;
      priceHighlight: string;
      date: string;
      title: string;
      subtitle: string;
      image: string;
    };
    rightTopBanner: {
      badge: string;
      discountText: string;
      title: string;
      caption: string;
      image: string;
    };
    rightBottomCard: {
      title: string;
      description: string;
      ctaText: string;
      image: string;
    };
  };
  videoShowcaseSection: {
    videoHeaderTitle: string;
    videoSub: string;
    duration: string;
    thumbnailImage: string;
    highlights: string[];
  };
  consultationSection: {
    title: string;
    subtitle: string;
    packages: string[];
  };
}

export const luatSu15DefaultData: LuatSu15Data = {
  business: {
    name: "HORI COMPANY - Hori Franchise & Legal",
    tagline:
      "Doanh Nghiệp Đầu Tư, Tư Vấn Pháp Lý Nhượng Quyền & Phát Triển Hệ Thống Ngành F&B Tại Việt Nam",
    phone: ["1900 886 899", "0909 382 716"],
    email: ["franchise-legal@horicompany.vn", "investment@horilaw.vn"],
    address:
      "Số 125 Đường Nội Khu Mỹ Cảnh, Phú Mỹ Hưng, Quận 7, TP. Hồ Chí Minh",
    hours: "Thứ 2 - Chủ Nhật: 08:30 - 21:00",
  },
  header: {
    brandName: "HORI COMPANY",
    brandSub: "F&B INVESTMENT & FRANCHISE LEGAL",
    leftNav: [
      { label: "VỀ CHÚNG TÔI", href: "#about" },
      { label: "LĨNH VỰC HOẠT ĐỘNG", href: "#services" },
      { label: "HỆ THỐNG THƯƠNG HIỆU", href: "#brands" },
    ],
    rightNav: [
      { label: "PHÁP LÝ NHƯỢNG QUYỀN", href: "#services" },
      { label: "SỰ KIỆN & KHUYẾN MÃI", href: "#events" },
      { label: "VIDEO HỆ THỐNG", href: "#video" },
      { label: "LIÊN HỆ", href: "#contact" },
    ],
  },
  hero: {
    headline: "Thưởng thức phong cách ẩm thực & chuẩn mực nhượng quyền đẳng cấp",
    subheadline:
      "DOANH NGHIỆP ĐẦU TƯ VÀ PHÁT TRIỂN PHÁP LÝ HỆ THỐNG NGÀNH F&B TẠI VIỆT NAM",
    cardTitle: "Giải Pháp Đầu Tư & Pháp Chế Chuỗi F&B Toàn Diện",
    cardDescription:
      "Hori Company kết hợp nghệ thuật ẩm thực tinh tế cùng hệ thống pháp chế nhượng quyền thương mại chuẩn quốc tế, bảo hộ nhãn hiệu độc quyền và vận hành chuỗi cửa hàng bền vững.",
    cardCta: "Tìm hiểu ngay",
    backgroundImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
  },
  aboutSection: {
    captionBanner: "Giới Thiệu Chung",
    headingPrefix: "Về",
    headingHighlight: "Chúng Tôi",
    paragraphs: [
      "HORI COMPANY là đơn vị tiên phong tại Việt Nam chuyên đầu tư, ươm tạo và chuẩn hóa pháp lý nhượng quyền cho các chuỗi nhà hàng, bakery & cafe phong cách Á - Âu hiện đại.",
      "Với đội ngũ Luật sư Sở hữu trí tuệ và Chuyên gia Vận hành F&B giàu kinh nghiệm, chúng tôi xây dựng Bản công bố thông tin nhượng quyền (FDD), Hợp đồng nhượng quyền độc quyền khu vực, đăng ký bảo hộ nhãn hiệu tại Cục SHTT và thẩm định pháp lý mặt bằng thương mại trên toàn quốc.",
    ],
    ctaText: "Xem thêm hồ sơ năng lực",
    mainGallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    ],
    secondaryImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
    stats: [
      { value: "45+", label: "Cửa Hàng & Chi Nhánh Toàn Quốc" },
      { value: "100%", label: "Nhãn Hiệu Đã Bảo Hộ Độc Quyền" },
      { value: "120+", label: "Hợp Đồng Nhượng Quyền Thành Công" },
      { value: "12 Năm", label: "Kinh Nghiệm Pháp Chế & Đầu Tư F&B" },
    ],
  },
  legalServicesSection: {
    eyebrow: "NĂNG LỰC PHÁP CHẾ & ĐẦU TƯ",
    title: "Hệ Thống Pháp Lý Nhượng Quyền Thương Mại & Quản Trị Chuỗi F&B",
    subtitle:
      "Bảo vệ tuyệt đối tài sản trí tuệ, công thức chế biến và tối ưu hóa lợi nhuận cho cả bên nhượng quyền lẫn nhà đầu tư nhận quyền.",
    pillars: [
      {
        id: "fl-1",
        code: "01",
        title: "Hồ Sơ Công Bố & Hợp Đồng Nhượng Quyền Thương Mại",
        subtitle: "Tuân thủ Luật Thương mại & Nghị định Nhượng quyền",
        description:
          "Soạn thảo Bản giới thiệu nhượng quyền thương mại, quy chế kiểm soát chất lượng đồng bộ và điều khoản phí Royalty minh bạch.",
        deliverables: [
          "Hợp đồng Nhượng quyền Độc quyền (Master Franchise)",
          "Thỏa thuận Bảo mật Công thức & Bí quyết Chế biến (NDA)",
          "Quy chế Chống cạnh tranh & Bảo vệ vùng lãnh thổ",
        ],
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "fl-2",
        code: "02",
        title: "Đăng Ký Bảo Hộ Nhãn Hiệu, Logo & Nhận Diện Chuỗi",
        subtitle: "Đại diện Sở hữu Công nghiệp Nhóm 29, 30, 32, 43",
        description:
          "Tra cứu chuyên sâu và đăng ký độc quyền tên thương hiệu, bao bì sản phẩm, thiết kế không gian cửa hàng tại Việt Nam và quốc tế.",
        deliverables: [
          "Giấy chứng nhận Đăng ký Nhãn hiệu Cục SHTT",
          "Đăng ký Bản quyền Bộ quy chuẩn Thiết kế & Menu",
          "Xử lý hành vi nhái thương hiệu & xâm phạm biển hiệu",
        ],
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "fl-3",
        code: "03",
        title: "Pháp Lý Thuê Mặt Bằng, Giấy Phép ATTP & PCCC",
        subtitle: "An toàn Pháp lý Vận hành Điểm bán",
        description:
          "Thẩm định pháp lý chủ quyền mặt bằng, đàm phán hợp đồng thuê dài hạn 5-10 năm và hoàn tất trọn gói giấy phép con cho cửa hàng mới.",
        deliverables: [
          "Rà soát Hợp đồng Thuê mặt bằng trung tâm thương mại & phố lớn",
          "Giấy chứng nhận Cơ sở đủ điều kiện An toàn Thực phẩm",
          "Hồ sơ nghiệm thu Phòng cháy chữa cháy & Giấy phép rượu",
        ],
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "fl-4",
        code: "04",
        title: "Cấu Trúc Gọi Vốn Cổ Phần & M&A Hệ Thống F&B",
        subtitle: "Tài chính Doanh nghiệp & Mở rộng Quy mô",
        description:
          "Thiết kế cấu trúc công ty mẹ - công ty con cho từng chuỗi thương hiệu, tư vấn phát hành cổ phần ESOP và đại diện đàm phán với quỹ đầu tư.",
        deliverables: [
          "Hợp đồng Cổ đông (SHA) & Thỏa thuận Đầu tư chuỗi",
          "Thẩm định pháp lý (Legal Due Diligence) thương vụ M&A F&B",
          "Tư vấn thuế chuỗi cung ứng & bếp trung tâm (Central Kitchen)",
        ],
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  brandEcosystemSection: {
    eyebrow: "HỆ THỐNG THƯƠNG HIỆU TRỰC THUỘC",
    title: "Các Chuỗi F&B Được Đầu Tư & Bảo Chứng Pháp Lý Bởi HORI",
    brands: [
      {
        id: "br-1",
        name: "FELOTA Bakery & Artisan Cafe",
        category: "Bánh Tươi & Trà Trái Cây Nhiệt Đới",
        storeCount: "18 Cửa hàng tại TP.HCM & Hà Nội",
        ipStatus: "Nhãn hiệu Độc quyền Số 482910",
        description:
          "Mô hình tổ hợp bánh nướng thủ công và đồ uống healthy với quy chuẩn nhượng quyền tinh gọn, hoàn vốn nhanh trong 14 - 18 tháng.",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "br-2",
        name: "HORI Bistro & Fine Lounge",
        category: "Nhà Hàng Âu - Á Đương Đại",
        storeCount: "09 Cơ sở Trung tâm Thương mại",
        ipStatus: "Nhãn hiệu Độc quyền Số 510284",
        description:
          "Không gian ẩm thực sang trọng dành cho giới doanh nhân và tiếp khách ngoại giao, vận hành theo tiêu chuẩn dịch vụ 5 sao.",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
      },
      {
        id: "br-3",
        name: "VERDANT Healthy Kitchen",
        category: "Chuỗi Ẩm Thực Xanh & Thực Dưỡng",
        storeCount: "15 Điểm bán & Bếp Trung tâm",
        ipStatus: "Nhãn hiệu Độc quyền Số 539102",
        description:
          "Hệ thống suất ăn dinh dưỡng chuẩn calo và đồ uống detox đạt chứng nhận ISO 22000 & HACCP toàn chuỗi.",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },
  specialEventsBento: {
    sectionTitle: "Sự Kiện và Khuyến Mãi Đặc Biệt!",
    leftVerticalPoster: {
      scriptHeading: "Healthy Food",
      promoLabel: "COMBO KHỞI ĐẦU & NHƯỢNG QUYỀN",
      priceHighlight: "99K",
      date: "23.10.2026 | FELOTA BY HORI",
      title: "FELOTA ra mắt Combo Ăn Sáng & Gói Nhượng Quyền Tinh Gọn giá 99K",
      subtitle:
        "Trải nghiệm thực đơn bánh mì nướng bơ tỏi, salad hữu cơ và trà thảo mộc tại toàn bộ hệ thống FELOTA trên toàn quốc.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85",
    },
    rightTopBanner: {
      badge: "SỰ KIỆN MÙA LỄ HỘI",
      discountText: "ƯU ĐÃI 20%",
      title: "FELOTA ra mắt Summer Combo & Ưu đãi 20% Phí Tư Vấn Pháp Lý Mở Quán",
      caption:
        "Áp dụng cho đối tác ký hợp đồng nhượng quyền hoặc sử dụng gói tư vấn pháp lý giấy phép ATTP - Nhãn hiệu trong tháng này.",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",
    },
    rightBottomCard: {
      title: "Ưu đãi bánh sinh nhật & Quà tặng tri ân đối tác Doanh nghiệp",
      description:
        "Chương trình hợp tác B2B cung cấp quà tặng ẩm thực cao cấp kèm hóa đơn VAT và hợp đồng cung ứng dài hạn cho hơn 200 doanh nghiệp đối tác của Hori Company.",
      ctaText: "Xem chi tiết chương trình →",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
  },
  videoShowcaseSection: {
    videoHeaderTitle:
      "FELOTA's Bakery & HORI Legal — Cửa Hàng Đầu Tiên Tại TP.HCM",
    videoSub:
      "Khám phá không gian kiến trúc xanh mát, quy trình kiểm soát chất lượng bếp trung tâm và lễ ký kết hợp đồng nhượng quyền thương mại.",
    duration: "06:45",
    thumbnailImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85",
    highlights: [
      "Không gian thiết kế chuẩn nhận diện thương hiệu đã đăng ký bản quyền",
      "Quy trình vận hành chuẩn hóa SOP & kiểm định An toàn thực phẩm",
      "Lễ trao Giấy chứng nhận Nhượng quyền thương mại cho các nhà đầu tư",
    ],
  },
  consultationSection: {
    title: "Đăng Ký Tư Vấn Đầu Tư & Pháp Lý Nhượng Quyền Cùng HORI COMPANY",
    subtitle:
      "Nhận bộ Hồ sơ Công bố Nhượng quyền (FDD), Báo giá gói Pháp chế F&B hoặc đặt lịch tham quan trực tiếp hệ thống cửa hàng mẫu.",
    packages: [
      "Nhận Nhượng quyền Thương hiệu FELOTA / HORI Bistro",
      "Tư vấn Xây dựng Hồ sơ & Hợp đồng Nhượng quyền Chuỗi F&B",
      "Đăng ký Độc quyền Nhãn hiệu, Logo & Bản quyền Menu",
      "Trọn gói Giấy phép ATTP, PCCC & Rà soát Hợp đồng Thuê mặt bằng",
    ],
  },
};
