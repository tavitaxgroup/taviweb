import type { ClonedTemplateBaseData } from "@/lib/demo/clonedTemplateUtils";

export interface XayDung14ApartmentProduct {
  id: string;
  tabLabel: string;
  area: string;
  floors: string;
  livingRooms: string;
  bedrooms: string;
  bathrooms: string;
  kitchens: string;
  description: string;
  views: Array<{ direction: string; detail: string }>;
  floorplanImage: string;
}

export interface XayDung14Data extends ClonedTemplateBaseData {
  overviewImage: string;
  overviewSpecs: Array<{
    label: string;
    value: string;
  }>;
  locationMapImage: string;
  locationBullets: string[];
  designBlocks: Array<{
    id: string;
    image: string;
    highlightBrand: string;
    paragraphs: string[];
  }>;
  amenitiesFiveStar: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
  floorMapImage: string;
  topFloorUnits: Array<{ code: string; area: string }>;
  bottomFloorUnits: Array<{ code: string; area: string }>;
  apartmentProducts: XayDung14ApartmentProduct[];
  unitPricing: Array<{
    id: string;
    unitType: string;
    depositPrice: string;
    featured?: boolean;
    specs: string[];
  }>;
}

export const xayDung14DefaultData: XayDung14Data = {
  business: {
    name: "MONA MEDIA Landmark Residence",
    phone: ["076 922 0162", "0905 888 162"],
    email: ["lienhe@mlandmark.vn", "tuvan@monamedia.vn"],
    address: "Số 58 Đường Bạch Đằng, Quận Hải Châu, TP. Đà Nẵng",
    workingHours: "Thứ 2 - Chủ Nhật (8h00 - 20h00)",
    rating: 5.0,
    reviewCount: 318,
    aboutTitle: "TỔNG QUAN DỰ ÁN",
    aboutText: [
      "Siêu dự án tổ hợp khách sạn và căn hộ hạng sang M Landmark Residences sở hữu vị trí Kim Cương tại trung tâm TP. Đà Nẵng, ngay mặt tiền đường triệu đô Bạch Đằng – cung đường du lịch và phố đi bộ về đêm sầm uất bậc nhất cả nước.",
      "Được phát triển cùng các đối tác danh tiếng toàn cầu như DPA Singapore và Marriott International, công trình là biểu tượng kiến trúc kiêu hãnh vươn cao bên bờ sông Hàn thơ mộng."
    ]
  },
  hero: {
    eyebrow: "M Landmark Residence",
    title: "KẾT NỐI QUÁ KHỨ ĐẾN TƯƠNG LAI",
    subtitle: "Biểu tượng kiến trúc tháp cao tầng hạng sang bên bờ Sông Hàn – Trung tâm TP. Đà Nẵng",
    ctaText: "Chi tiết",
    ctaLink: "#tong-quan",
    backgroundImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85"
    ]
  },
  overviewImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  overviewSpecs: [
    { label: "Tên dự án", value: "M Landmark Residences" },
    { label: "Vị trí", value: "Số 58 Đường Bạch Đằng, Quận Hải Châu, TP. Đà Nẵng" },
    { label: "Chủ đầu tư", value: "Công ty TNHH Mona Media" },
    { label: "Nhà thầu thi công", value: "Công ty TNHH Xây Dựng Mona Media" },
    { label: "Đối tác phát triển", value: "DPA Singapore và Marriott International" },
    { label: "Diện tích dự án", value: "2.473,2 m²" },
    { label: "Quy mô dự án", value: "1 tháp cao 45 tầng nổi + 5 tầng hầm" },
    { label: "Loại hình xây dựng", value: "Khách sạn 5 sao, căn hộ nghỉ dưỡng cao cấp" },
    { label: "Sản phẩm Condotel", value: "288 căn (Từ tầng 2 đến 28)" },
    { label: "Sản phẩm Căn hộ", value: "224 căn (Từ tầng 30 đến 43)" },
    { label: "Diện tích căn hộ", value: "43 m² – 84,3 m²" },
    { label: "Dự kiến hoàn thiện", value: "Quý IV/2026" },
    { label: "Chuyên viên tư vấn dự án", value: "076 922 0162" }
  ],
  locationMapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
  locationBullets: [
    "+ Phía Đông giáp đường Bạch Đằng nổi tiếng bậc nhất Đà Nẵng",
    "+ Phía Bắc giáp tổ hợp khách sạn quốc tế Marriott Đà Nẵng",
    "+ Phía Nam giáp cầu quay Sông Hàn – biểu tượng tự hào của Đà Nẵng"
  ],
  designBlocks: [
    {
      id: "des-1",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      highlightBrand: "M Landmark Residences",
      paragraphs: [
        "Được phát triển bởi Tập đoàn Alphanam Group, Tổ hợp căn hộ khách sạn M Landmark Tower bao gồm Marriott Courtyard Hotel ở các tầng dưới của tòa tháp và Marriott Executive Apartments ở các tầng giữa.",
        "M Landmark Residences được bố trí nằm trên các tầng cao nhất của tòa nhà, từ tầng 30 đến tầng 44. Tổng cộng 224 căn hộ được thiết kế tinh xảo ở trung tâm thành phố, với tầm nhìn 100% View sông Hàn thơ mộng bậc nhất Đà Nẵng."
      ]
    },
    {
      id: "des-2",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      highlightBrand: "M Landmark Đà Nẵng",
      paragraphs: [
        "M Landmark Đà Nẵng tuân thủ theo quy định nghiêm ngặt và tiêu chuẩn nội thất ngoại nhập sang trọng của đơn vị vận hành khách sạn nổi tiếng bậc nhất thế giới đó là Marriott International với kinh nghiệm điều hành hơn 5.500 khách sạn bao gồm 1,1 triệu phòng trải dài trên 110 quốc gia.",
        "Nhà thầu xây dựng Công ty Mona Media và nhà thầu cơ điện chuẩn quốc tế là 2 đơn vị có kinh nghiệm nhiều năm thi công và xây dựng nhiều dự án siêu cao tầng lớn trong nước và quốc tế đã đạt nhiều giải thưởng danh giá."
      ]
    }
  ],
  amenitiesFiveStar: [
    {
      id: "am-1",
      title: "Quảng trường pháo hoa",
      description:
        "Lý tưởng để ngắm nhìn sự kiêu hãnh về đêm của Đà Nẵng được thu gọn trong góc nhìn của du khách.",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-2",
      title: "Trung tâm thương mại",
      description:
        "Với các gian hàng cao cấp hội tụ các thương hiệu thời trang, mỹ phẩm nổi tiếng thế giới.",
      image:
        "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-3",
      title: "Bể bơi vô cực",
      description:
        "Rộng 356m² trên tầng thượng với góc nhìn panorama tuyệt đẹp ra toàn cảnh sông Hàn.",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-4",
      title: "Nhà trẻ tiêu chuẩn Singapore",
      description:
        "Được trang bị cơ sở vật chất an toàn cùng tài liệu giảng dạy song ngữ hiện đại.",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-5",
      title: "Nhà hàng cao cấp",
      description:
        "Được trang trí độc đáo sang trọng với thực đơn tinh hoa ẩm thực Á – Âu chuẩn 5 sao.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-6",
      title: "Sky Bar & Lounge",
      description:
        "Diện tích 1.000m² trên đỉnh tháp là nơi có thể ngắm toàn cảnh thành phố và biển Đông.",
      image:
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-7",
      title: "Gym & Spa Center",
      description:
        "Trang bị máy móc hiện đại tiêu chuẩn quốc tế, với các dịch vụ xông hơi, massage và chăm sóc sắc đẹp.",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "am-8",
      title: "Bãi đỗ xe thông minh",
      description:
        "Với diện tích 6.000m² tại 5 tầng hầm được thiết kế hệ thống đỗ xe thông minh tự động.",
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=700&q=80"
    }
  ],
  floorMapImage:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  topFloorUnits: [
    { code: "A7", area: "84.3 m²" },
    { code: "D6", area: "45.5 m²" },
    { code: "E5", area: "54.5 m²" },
    { code: "D3", area: "43 m²" },
    { code: "B2", area: "75.4 m²" },
    { code: "A1", area: "84.3 m²" }
  ],
  bottomFloorUnits: [
    { code: "A8", area: "84.3 m²" },
    { code: "B9", area: "75.4 m²" },
    { code: "C10", area: "42.2 m²" },
    { code: "C11", area: "42.5 m²" },
    { code: "B12", area: "74.6 m²" },
    { code: "C15", area: "42.5 m²" },
    { code: "C16", area: "42.5 m²" },
    { code: "B17", area: "76 m²" },
    { code: "B18", area: "75 m²" },
    { code: "A19", area: "84.3 m²" }
  ],
  apartmentProducts: [
    {
      id: "type-a",
      tabLabel: "Căn hộ loại A",
      area: "80,3 – 84,3 m²",
      floors: "25 – 38",
      livingRooms: "1 phòng khách",
      bedrooms: "2 phòng ngủ",
      bathrooms: "2 phòng tắm",
      kitchens: "1 nhà bếp",
      description:
        "Được xây dựng bằng vật liệu cao cấp, đồ nội thất sang trọng được thiết kế phong cách riêng, phòng tắm lát đá cẩm thạch lớn với tầm nhìn View trực diện Sông Hàn đẹp nhất. Hãy chiêm ngưỡng vẻ đẹp của Đà Nẵng thông qua các cửa sổ kính suốt từ trần đến sàn Low-E trải dài toàn bộ khu dân cư của bạn.",
      views: [
        { direction: "Tây Nam", detail: "Nhìn ra Sân Bay Quốc Tế & City View" },
        { direction: "Tây Bắc", detail: "Nhìn ra Vịnh Đà Nẵng, Bán Đảo Sơn Trà" },
        { direction: "Đông Bắc", detail: "Trực diện Sông Hàn và Quảng trường pháo hoa Đà Nẵng" },
        { direction: "Đông Nam", detail: "View Cầu quay Sông Hàn & Biển Mỹ Khê" }
      ],
      floorplanImage:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "type-b",
      tabLabel: "Căn hộ loại B",
      area: "74,6 – 76 m²",
      floors: "25 – 42",
      livingRooms: "1 phòng khách",
      bedrooms: "2 phòng ngủ",
      bathrooms: "2 phòng tắm",
      kitchens: "1 nhà bếp",
      description:
        "Căn hộ loại B sở hữu thiết kế thông minh tối ưu diện tích tiếp xúc ánh sáng tự nhiên, phòng khách liên thông bàn ăn và ban công kính tràn viền mở rộng tầm nhìn về phía cầu Rồng và biển Đông.",
      views: [
        { direction: "Đông Bắc", detail: "Nhìn trực diện Sông Hàn & Bán đảo Sơn Trà" },
        { direction: "Đông Nam", detail: "Nhìn toàn cảnh Cầu Rồng & Biển Mỹ Khê" }
      ],
      floorplanImage:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "type-c",
      tabLabel: "Căn hộ loại C",
      area: "41,5 – 42,5 m²",
      floors: "25 – 40",
      livingRooms: "1 phòng khách",
      bedrooms: "1 phòng ngủ",
      bathrooms: "1 phòng tắm",
      kitchens: "1 nhà bếp",
      description:
        "Căn hộ Studio hạng sang chuẩn Marriott Executive với không gian mở tinh tế, bàn giao đầy đủ nội thất nhập khẩu châu Âu, tối ưu công năng cho chuyên gia quốc tế và khai thác lưu trú 5 sao.",
      views: [
        { direction: "Tây Bắc", detail: "Nhìn ra Vịnh Đà Nẵng & Đỉnh Sơn Trà" },
        { direction: "Đông Bắc", detail: "Nhìn ra Quảng trường pháo hoa quốc tế" }
      ],
      floorplanImage:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "type-d",
      tabLabel: "Căn hộ loại D",
      area: "43 – 45,5 m²",
      floors: "26 – 41",
      livingRooms: "1 phòng khách",
      bedrooms: "1 phòng ngủ",
      bathrooms: "1 phòng tắm",
      kitchens: "1 nhà bếp",
      description:
        "Thiết kế 1 phòng ngủ riêng tư với vách kính trượt thông minh, khu bếp đảo hiện đại và phòng tắm đá cẩm thạch bồn tắm nằm nhìn thẳng ra toàn cảnh thành phố về đêm.",
      views: [
        { direction: "Tây Nam", detail: "Nhìn toàn cảnh trung tâm thành phố Đà Nẵng" },
        { direction: "Đông Nam", detail: "Nhìn ra Cầu quay Sông Hàn" }
      ],
      floorplanImage:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "type-e",
      tabLabel: "Căn hộ loại E",
      area: "54,5 m²",
      floors: "30 – 44",
      livingRooms: "1 phòng khách",
      bedrooms: "1+1 phòng ngủ",
      bathrooms: "1 phòng tắm",
      kitchens: "1 nhà bếp",
      description:
        "Phiên bản giới hạn 1+1 phòng ngủ nằm tại các tầng cao nhất của tòa tháp, tích hợp hệ thống Smart Home điều khiển giọng nói và kính hộp cách âm cách nhiệt 3 lớp tiêu chuẩn LEED Gold.",
      views: [
        { direction: "Trực diện Đông", detail: "Tầm nhìn 180 độ Sông Hàn – Vịnh Đà Nẵng – Biển Đông" }
      ],
      floorplanImage:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
    }
  ],
  unitPricing: [
    {
      id: "price-d",
      unitType: "CĂN HỘ LOẠI D",
      depositPrice: "500 triệu",
      featured: false,
      specs: [
        "Diện tích: 43 – 45.5 m²",
        "1 phòng ngủ",
        "1 phòng tắm",
        "1 phòng khách",
        "1 nhà bếp"
      ]
    },
    {
      id: "price-a",
      unitType: "CĂN HỘ LOẠI A",
      depositPrice: "1 tỷ",
      featured: true,
      specs: [
        "Diện tích: 80.3 – 84 m²",
        "2 phòng ngủ",
        "2 phòng tắm",
        "1 phòng khách",
        "1 nhà bếp",
        "và một số tiện nghi đặc quyền"
      ]
    },
    {
      id: "price-c",
      unitType: "CĂN HỘ LOẠI C",
      depositPrice: "600 triệu",
      featured: false,
      specs: [
        "Diện tích: 41.5 m²",
        "1 phòng ngủ",
        "1 phòng tắm",
        "1 phòng khách",
        "1 nhà bếp"
      ]
    },
    {
      id: "price-b",
      unitType: "CĂN HỘ LOẠI B",
      depositPrice: "800 triệu",
      featured: false,
      specs: [
        "Diện tích: 74 – 76 m²",
        "2 phòng ngủ",
        "2 phòng tắm",
        "1 phòng khách",
        "1 nhà bếp"
      ]
    }
  ],
  news: [
    {
      id: "n1",
      title: "LÝ DO NÊN ĐẦU TƯ DỰ ÁN M LANDMARK RESIDENCES ĐÀ NẴNG",
      date: "18/10/2026",
      excerpt: "Sở hữu vị trí kim cương số 58 Bạch Đằng cùng đơn vị vận hành Marriott International...",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "n2",
      title: "TIỆN ÍCH CĂN HỘ M LANDMARK TIÊU CHUẨN KHÁCH SẠN 5 SAO",
      date: "12/10/2026",
      excerpt: "Trải nghiệm bể bơi vô cực tầng thượng, Sky Bar 1.000m² và quảng trường pháo hoa...",
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "n3",
      title: "KIẾN TRÚC THÁP BIỂU TƯỢNG BÊN CẦU QUAY SÔNG HÀN",
      date: "05/10/2026",
      excerpt: "Giải pháp kết cấu vách cứng chịu lực và mặt dựng kính Low-E 3 lớp chống bão cấp 15...",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
    }
  ]
};

export const defaultData = xayDung14DefaultData;
export default xayDung14DefaultData;
