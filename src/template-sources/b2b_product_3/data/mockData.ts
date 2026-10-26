import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface RollerDoorProduct {
  id: string;
  name: string;
  category: string;
  oldPrice?: string;
  price: string;
  isDeal?: boolean;
  headerBoxTitle?: string;
  image: string;
}

export interface B2BProduct3Data extends ClonedTemplateBaseData {
  slogan: string;
  heroMosaicImages: string[];
  daylightDoors: RollerDoorProduct[];
  newGenDoors: RollerDoorProduct[];
  austcareBanner: {
    brand: string;
    subtitle: string;
    bullets: string[];
    hotline: string;
    teamImage: string;
  };
  specialDoors: RollerDoorProduct[];
  coreValues: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  factoryVideo: {
    title: string;
    capacityNumber: string;
    capacityUnit: string;
    thumbnail: string;
  };
  productTags: string[];
  licenseNumber: string;
}

export const b2bProduct3DefaultData: B2BProduct3Data = {
  business: {
    name: "MONA DOOR",
    phone: ["1900 6828", "0126 922 0162"],
    email: ["mon@mona.media", "cskh@monadoor.vn"],
    address: "151 Hồ Bá Kiện, P15, Q10, TP.HCM",
    workingHours: "Tổng đài CSKH & Bảo hành 24/7 Toàn Quốc",
    rating: 4.9,
    reviewCount: 420,
    aboutTitle: "CỬA CUỐN MONA",
    aboutText: [
      "Tập đoàn MONA DOOR tự hào là đơn vị tiên phong trong lĩnh vực nghiên cứu, sản xuất và lắp đặt đồng bộ các dòng cửa cuốn thông minh, cửa cuốn chống cháy siêu trường và hệ nhôm kính công nghiệp tiêu chuẩn châu Âu tại Việt Nam.",
      "Sở hữu hệ thống nhà máy quy mô lớn với dây chuyền tự động hóa hiện đại và công suất đạt 3.500.000 m² cửa/năm, chúng tôi cam kết mang đến giải pháp an ninh tối ưu, vận hành siêu êm và độ bền vượt thời gian cho mọi công trình dân dụng lẫn nhà xưởng công nghiệp."
    ]
  },
  slogan: "CỬA CUỐN AN TOÀN HÀNG ĐẦU VIỆT NAM",
  hero: {
    eyebrow: "Thương hiệu",
    subtitle: "CỬA CUỐN",
    title: "HÀNG ĐẦU",
    description: "Việt Nam",
    ctaText: "Tìm hiểu thêm",
    ctaLink: "#san-pham",
    backgroundImage:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1600&q=85"
  },
  heroMosaicImages: [
    "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600573472589-003525b2b729?auto=format&fit=crop&w=400&q=80"
  ],
  daylightDoors: [
    {
      id: "dl-1",
      name: "Cửa cuốn xuyên sáng Aluroll PC",
      category: "CỬA CUỐN XUYÊN SÁNG",
      price: "2,280,000 ₫",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dl-2",
      name: "Cửa cuốn khe thoáng A48",
      category: "CỬA CUỐN XUYÊN SÁNG",
      price: "1,480,000 ₫",
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dl-3",
      name: "Cửa cuốn xuyên sáng A50 PC",
      category: "CỬA CUỐN XUYÊN SÁNG",
      price: "2,280,000 ₫",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "dl-4",
      name: "Cửa Cuốn Xuyên Sáng S50i PC",
      category: "CỬA CUỐN XUYÊN SÁNG",
      oldPrice: "2,480,000 ₫",
      price: "1,950,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  newGenDoors: [
    {
      id: "ng-1",
      name: "Cửa cuốn Austdoor xuyên sáng S50iPC",
      category: "CỬA CUỐN THẾ HỆ MỚI",
      oldPrice: "2,480,000 ₫",
      price: "1,900,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ng-2",
      name: "Cửa cuốn Austdoor Siêu êm S50i",
      category: "CỬA CUỐN THẾ HỆ MỚI",
      oldPrice: "2,480,000 ₫",
      price: "1,900,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ng-3",
      name: "Cửa cuốn Austdoor Siêu êm S51i",
      category: "CỬA CUỐN THẾ HỆ MỚI",
      oldPrice: "2,150,000 ₫",
      price: "1,600,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1600573472589-003525b2b729?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ng-4",
      name: "Cửa cuốn Austdoor siêu thoáng C70",
      category: "CỬA CUỐN THẾ HỆ MỚI",
      oldPrice: "2,980,000 ₫",
      price: "2,150,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=600&q=80"
    }
  ],
  austcareBanner: {
    brand: "Austcare",
    subtitle: "BỆNH VIỆN CỬA CUỐN CHO MỌI NHÀ",
    bullets: ["TƯ VẤN TẬN TÂM", "DỊCH VỤ CHUYÊN NGHIỆP"],
    hotline: "1900 6828",
    teamImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
  },
  specialDoors: [
    {
      id: "sp-1",
      headerBoxTitle: "Cửa Cuốn Nghệ Thuật",
      name: "Cửa cuốn nghệ thuật Alumi Art",
      category: "CỬA CUỐN NHÔM ALUMI",
      oldPrice: "2,480,000 ₫",
      price: "2,080,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-2",
      headerBoxTitle: "Cửa Cuốn Trong Suốt",
      name: "Cửa cuốn trong suốt Vision VS2",
      category: "CỬA CUỐN TRONG SUỐT",
      oldPrice: "3,900,000 ₫",
      price: "3,350,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-3",
      headerBoxTitle: "Cửa Cuốn Siêu Trường",
      name: "Cửa cuốn siêu trường Bigo B100",
      category: "CỬA CUỐN SIÊU TRƯỜNG",
      oldPrice: "3,950,000 ₫",
      price: "3,350,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sp-4",
      headerBoxTitle: "Cửa Cuốn Chống Bão",
      name: "Cửa cuốn chống bão",
      category: "CỬA CUỐN CHỐNG BÃO",
      oldPrice: "3,000,000 ₫",
      price: "2,400,000 ₫",
      isDeal: true,
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80"
    }
  ],
  coreValues: [
    {
      id: "cv-1",
      title: "Thiết kế và sản xuất đồng bộ",
      description:
        "Được thiết kế và sản xuất, lắp ráp đồng bộ tại nhà máy đảm bảo chính xác đến từng chi tiết giúp cửa cuốn vận hành êm, nhẹ, ổn định và có tuổi thọ cao."
    },
    {
      id: "cv-2",
      title: "An ninh hoàn hảo",
      description:
        "Công nghệ Austmatic Rolling Code (ARC) chống sao chép mã số, trang bị thêm thiết bị còi báo động phát ra tín hiệu cảnh báo khi có dấu hiệu cậy phá cửa, giúp chủ nhà kiểm soát an ninh bất cứ lúc nào."
    },
    {
      id: "cv-3",
      title: "An toàn tuyệt đối",
      description:
        "Công nghệ đảo chiều kép Dual Safe nhận biết và đảo chiều khi gặp vật cản, cùng với Bộ lưu điện UPS giúp đóng mở cửa ngay cả khi mất điện đem đến cho người dùng sự an toàn và yên tâm tuyệt đối."
    },
    {
      id: "cv-4",
      title: "Dịch vụ khách hàng vượt trội",
      description:
        "Thương hiệu duy nhất trong ngành cửa cuốn sở hữu Tổng đài CSKH 24/7 tiếp nhận tư vấn và bảo hành, bảo trì sản phẩm TOÀN QUỐC."
    }
  ],
  news: [
    {
      id: "nw-1",
      title: "Sử dụng cửa cuốn đúng cách để hoạt động lâu bền",
      date: "27 Th11",
      excerpt:
        "Bạn có biết, cửa cuốn hay bất kỳ thiết bị tự động nào khác hoạt động bền bỉ đều cần bảo dưỡng định kỳ...",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-2",
      title: "Có nên lắp cửa cuốn chống cháy cho nhà xưởng?",
      date: "27 Th11",
      excerpt:
        "Trong thời gian qua, những sự cố hỏa hoạn tại các trung tâm thương mại và khu công nghiệp đòi hỏi tiêu chuẩn PCCC...",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-3",
      title: "Làm thế nào để mua được cửa cuốn chính hãng?",
      date: "27 Th11",
      excerpt:
        "Không ít các khách hàng băn khoăn làm thế nào để mua được cửa cuốn đồng bộ chính hãng với chế độ bảo hành...",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "nw-4",
      title: "Thị trường nhôm hệ Việt: Bao giờ mới thoát khỏi sự chi phối của nhôm ngoại?",
      date: "27 Th11",
      excerpt:
        "Nhôm hệ từ lâu đã được ưa chuộng và sử dụng rộng rãi trong ngành kiến trúc xây dựng hiện đại tại Việt Nam...",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    }
  ],
  factoryVideo: {
    title: "KHÁM PHÁ HỆ THỐNG NHÀ MÁY CỬA CUỐN LỚN NHẤT",
    capacityNumber: "3.500.000",
    capacityUnit: "M2 CỬA/NĂM",
    thumbnail:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
  },
  clients: [
    { id: "pt-1", name: "EFAFLEX" },
    { id: "pt-2", name: "G-U BKS" },
    { id: "pt-3", name: "BLUESCOPE STEEL" },
    { id: "pt-4", name: "Doors & Openers" },
    { id: "pt-5", name: "REHAU" },
    { id: "pt-6", name: "Roto" }
  ],
  productTags: [
    "Cửa cuốn chống bão",
    "Cửa cuốn khe thoáng",
    "Cửa cuốn nhôm Alumi",
    "Cửa cuốn siêu trường",
    "Cửa cuốn thế hệ mới",
    "Cửa cuốn trong suốt",
    "Cửa cuốn xuyên sáng"
  ],
  licenseNumber: "0313728397 - Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh"
};

export const defaultData = b2bProduct3DefaultData;
export const mockData = b2bProduct3DefaultData;
export default b2bProduct3DefaultData;
