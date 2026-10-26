import type { IndustryKey } from "@/types/demo";

export type TemplateCatalogType = "render_template" | "reference_image";

export type IndustryCatalogItem = {
  key: IndustryKey;
  name: string;
  description: string;
  order: number;
};

export type TemplateCatalogItem = {
  id: string;
  type: TemplateCatalogType;
  industryKey: IndustryKey;
  templateKey?: IndustryKey | string;
  name: string;
  description: string;
  tags: string[];
  thumbnail: string;
  longPreviewImage?: string;
  packageName?: string;
  priceLabel?: string;
  demoUrl?: string;
  status: "active" | "draft";
  order: number;
};

export const industryCatalog: IndustryCatalogItem[] = [
  {
    key: "corporate_profile",
    name: "Doanh nghiệp B2B & Tập đoàn",
    description: "Mẫu website hồ sơ năng lực chuyên nghiệp dành cho công ty dịch vụ, tư vấn, đầu tư, logistics và doanh nghiệp đa ngành.",
    order: 1
  },
  {
    key: "b2b_product",
    name: "Showroom Thiết bị & B2B",
    description: "Mẫu website chuẩn quốc tế dành cho thương mại phân phối, máy móc kỹ thuật, vật tư công nghiệp, nông sản và tìm đại lý.",
    order: 2
  },
  {
    key: "lead_generation",
    name: "Tăng trưởng Doanh số",
    description: "Mẫu landing page chuyển đổi cao, tối ưu tiếp cận khách hàng nóng, truyền thông, đào tạo và dịch vụ nhanh.",
    order: 3
  },
  {
    key: "nha_khoa",
    name: "Nha khoa",
    description: "Mẫu website dành cho phòng khám nha khoa, nha khoa thẩm mỹ và dịch vụ chăm sóc nụ cười.",
    order: 10
  },
  {
    key: "spa",
    name: "Spa",
    description: "Mẫu website dành cho spa, chăm sóc da, trị liệu và dịch vụ thư giãn.",
    order: 20
  },
  {
    key: "tham_my_vien",
    name: "Thẩm mỹ viện",
    description: "Mẫu website dành cho clinic thẩm mỹ, làm đẹp và tư vấn cá nhân hóa.",
    order: 30
  },
  {
    key: "phong_kham",
    name: "Phòng khám",
    description: "Mẫu website dành cho phòng khám đa khoa, phòng khám chuyên khoa và dịch vụ y tế.",
    order: 40
  },
  {
    key: "salon_toc",
    name: "Hair salon",
    description: "Mẫu website dành cho salon tóc, barber, nhuộm, uốn và tạo kiểu.",
    order: 50
  },
  {
    key: "luat_su",
    name: "Luật sư",
    description: "Mẫu website dành cho văn phòng luật, tư vấn pháp lý và dịch vụ doanh nghiệp.",
    order: 60
  },
  {
    key: "trung_tam_tieng_anh",
    name: "Trung tâm tiếng Anh",
    description: "Mẫu website dành cho trung tâm ngoại ngữ, luyện thi và khóa học.",
    order: 70
  },
  {
    key: "dich_vu_ve_sinh",
    name: "Dịch vụ vệ sinh",
    description: "Mẫu website dành cho vệ sinh công nghiệp, vệ sinh văn phòng và dịch vụ theo hợp đồng.",
    order: 80
  },
  {
    key: "noi_that",
    name: "Thiết kế nội thất",
    description: "Mẫu website portfolio cho thiết kế nội thất, thi công và tư vấn không gian.",
    order: 90
  },
  {
    key: "cong_ty_xay_dung",
    name: "Công ty xây dựng",
    description: "Mẫu website dành cho nhà thầu, thiết kế thi công và báo giá công trình.",
    order: 100
  },
  {
    key: "nha_hang",
    name: "Nhà hàng sang trọng",
    description: "Mẫu website dành cho nhà hàng cao cấp, đặt bàn, thực đơn và không gian.",
    order: 110
  },
  {
    key: "quan_cafe",
    name: "Quán cafe",
    description: "Mẫu website dành cho cafe concept, menu, không gian và booking sự kiện nhỏ.",
    order: 120
  },
  {
    key: "studio_chup_anh",
    name: "Studio chụp ảnh",
    description: "Mẫu website dành cho studio cưới, chụp ảnh gia đình và dịch vụ hình ảnh.",
    order: 130
  },
  {
    key: "phong_gym",
    name: "Gym fitness",
    description: "Mẫu website dành cho phòng gym, fitness, PT và lớp nhóm.",
    order: 140
  },
  {
    key: "garage_oto",
    name: "Garage ô tô",
    description: "Mẫu website dành cho garage, bảo dưỡng, sửa chữa và chăm sóc xe.",
    order: 150
  }
];

const renderTemplateItems: TemplateCatalogItem[] = industryCatalog
  .filter((industry) => industry.key !== "cong_ty_xay_dung")
  .map((industry) => ({
  id: `${industry.key}-main-template`,
  type: "render_template",
  industryKey: industry.key,
  templateKey: industry.key,
  name: `Mẫu website ${industry.name}`,
  description: industry.description,
  tags: [industry.name, "Mẫu website", "TAVIWEB"],
  thumbnail: `/assets/anh-template/live-previews/${industry.key}-live.webp`,
  longPreviewImage: `/assets/anh-template/live-previews/${industry.key}-live.webp`,
  packageName: `Gói website ${industry.name.toLowerCase()}`,
  demoUrl: `/demo/mock-${industry.key}`,
  status: "active",
  order: industry.order
}));

const referenceTemplateItems: TemplateCatalogItem[] = [
  {
    id: "NK001",
    type: "reference_image",
    industryKey: "nha_khoa",
    name: "Website nha khoa NK001",
    description: "Mẫu website nha khoa dạng ảnh dài, phù hợp phòng khám nha khoa và chăm sóc răng miệng.",
    tags: ["Nha khoa", "Ảnh dài", "Phòng khám"],
    thumbnail: "/assets/anh-template/nha-khoa/NK001.jpeg",
    longPreviewImage: "/assets/anh-template/nha-khoa/NK001.jpeg",
    packageName: "Gói website nha khoa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 101
  },
  {
    id: "NK002",
    type: "reference_image",
    industryKey: "nha_khoa",
    name: "Website nha khoa NK002",
    description: "Mẫu giao diện nha khoa thẩm mỹ hiện đại, trình bày dịch vụ và đội ngũ bác sĩ.",
    tags: ["Nha khoa", "Ảnh dài", "Chuyên nghiệp"],
    thumbnail: "/assets/anh-template/nha-khoa/NK002.jpeg",
    longPreviewImage: "/assets/anh-template/nha-khoa/NK002.jpeg",
    packageName: "Gói website nha khoa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 102
  },
  {
    id: "NK003",
    type: "reference_image",
    industryKey: "nha_khoa",
    name: "Website nha khoa NK003",
    description: "Mẫu thiết kế nha khoa tập trung vào các case thành công và phản hồi khách hàng.",
    tags: ["Nha khoa", "Ảnh dài", "Tin cậy"],
    thumbnail: "/assets/anh-template/nha-khoa/NK003.jpeg",
    longPreviewImage: "/assets/anh-template/nha-khoa/NK003.jpeg",
    packageName: "Gói website nha khoa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 103
  },
  {
    id: "NK004",
    type: "reference_image",
    industryKey: "nha_khoa",
    name: "Website nha khoa NK004",
    description: "Mẫu ảnh dài cho trung tâm nha khoa lớn cần giới thiệu công nghệ và trang thiết bị.",
    tags: ["Nha khoa", "Ảnh dài", "Công nghệ"],
    thumbnail: "/assets/anh-template/nha-khoa/NK004.jpeg",
    longPreviewImage: "/assets/anh-template/nha-khoa/NK004.jpeg",
    packageName: "Gói website nha khoa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 104
  },
  {
    id: "SPA001",
    type: "reference_image",
    industryKey: "spa",
    name: "Website spa SPA001",
    description: "Mẫu website spa dạng ảnh dài, phù hợp spa làm đẹp, chăm sóc da và trị liệu.",
    tags: ["Spa", "Ảnh dài", "Làm đẹp"],
    thumbnail: "/assets/anh-template/spa/SPA001.jpeg",
    longPreviewImage: "/assets/anh-template/spa/SPA001.jpeg",
    packageName: "Gói website spa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 201
  },
  {
    id: "SPA002",
    type: "reference_image",
    industryKey: "spa",
    name: "Website spa SPA002",
    description: "Mẫu giao diện spa thư giãn nhẹ nhàng, tập trung vào bảng giá dịch vụ và đặt lịch.",
    tags: ["Spa", "Ảnh dài", "Thư giãn"],
    thumbnail: "/assets/anh-template/spa/SPA002.jpeg",
    longPreviewImage: "/assets/anh-template/spa/SPA002.jpeg",
    packageName: "Gói website spa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 202
  },
  {
    id: "SPA003",
    type: "reference_image",
    industryKey: "spa",
    name: "Website spa SPA003",
    description: "Mẫu thiết kế spa cao cấp, phong cách tối giản và tinh tế.",
    tags: ["Spa", "Ảnh dài", "Cao cấp"],
    thumbnail: "/assets/anh-template/spa/SPA003.jpeg",
    longPreviewImage: "/assets/anh-template/spa/SPA003.jpeg",
    packageName: "Gói website spa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 203
  },
  {
    id: "SPA004",
    type: "reference_image",
    industryKey: "spa",
    name: "Website spa SPA004",
    description: "Mẫu ảnh dài cho trung tâm thẩm mỹ trị liệu và chăm sóc toàn diện.",
    tags: ["Spa", "Ảnh dài", "Trị liệu"],
    thumbnail: "/assets/anh-template/spa/SPA004.jpeg",
    longPreviewImage: "/assets/anh-template/spa/SPA004.jpeg",
    packageName: "Gói website spa",
    priceLabel: "Liên hệ",
    status: "active",
    order: 204
  },
  {
    id: "TMV001",
    type: "reference_image",
    industryKey: "tham_my_vien",
    name: "Website thẩm mỹ viện TMV001",
    description: "Mẫu website thẩm mỹ viện dạng ảnh dài, phù hợp viện thẩm mỹ và clinic làm đẹp công nghệ cao.",
    tags: ["Thẩm mỹ viện", "Ảnh dài", "Clinic"],
    thumbnail: "/assets/anh-template/tham-my-vien/TMV001.jpeg",
    longPreviewImage: "/assets/anh-template/tham-my-vien/TMV001.jpeg",
    packageName: "Gói website thẩm mỹ viện",
    priceLabel: "Liên hệ",
    status: "active",
    order: 301
  },
  {
    id: "TMV002",
    type: "reference_image",
    industryKey: "tham_my_vien",
    name: "Website thẩm mỹ viện TMV002",
    description: "Mẫu giao diện thẩm mỹ viện sang trọng, tôn vinh vẻ đẹp tự nhiên và dịch vụ cao cấp.",
    tags: ["Thẩm mỹ viện", "Ảnh dài", "Sang trọng"],
    thumbnail: "/assets/anh-template/tham-my-vien/TMV002.jpeg",
    longPreviewImage: "/assets/anh-template/tham-my-vien/TMV002.jpeg",
    packageName: "Gói website thẩm mỹ viện",
    priceLabel: "Liên hệ",
    status: "active",
    order: 302
  },
  {
    id: "TMV003",
    type: "reference_image",
    industryKey: "tham_my_vien",
    name: "Website thẩm mỹ viện TMV003",
    description: "Mẫu thiết kế clinic thẩm mỹ chú trọng đội ngũ chuyên gia bác sĩ và chứng nhận an toàn.",
    tags: ["Thẩm mỹ viện", "Ảnh dài", "Bác sĩ"],
    thumbnail: "/assets/anh-template/tham-my-vien/TMV003.jpeg",
    longPreviewImage: "/assets/anh-template/tham-my-vien/TMV003.jpeg",
    packageName: "Gói website thẩm mỹ viện",
    priceLabel: "Liên hệ",
    status: "active",
    order: 303
  },
  {
    id: "TMV004",
    type: "reference_image",
    industryKey: "tham_my_vien",
    name: "Website thẩm mỹ viện TMV004",
    description: "Mẫu ảnh dài cho trung tâm làm đẹp toàn diện, giới thiệu các liệu trình phẫu thuật hoặc không xâm lấn.",
    tags: ["Thẩm mỹ viện", "Ảnh dài", "Làm đẹp"],
    thumbnail: "/assets/anh-template/tham-my-vien/TMV004.jpeg",
    longPreviewImage: "/assets/anh-template/tham-my-vien/TMV004.jpeg",
    packageName: "Gói website thẩm mỹ viện",
    priceLabel: "Liên hệ",
    status: "active",
    order: 304
  },
  {
    id: "PK001",
    type: "reference_image",
    industryKey: "phong_kham",
    name: "Website phòng khám PK001",
    description: "Mẫu website phòng khám dạng ảnh dài, phù hợp phòng khám đa khoa, chuyên khoa và y tế gia đình.",
    tags: ["Phòng khám", "Ảnh dài", "Đa khoa"],
    thumbnail: "/assets/anh-template/phong-kham/PK001.jpeg",
    longPreviewImage: "/assets/anh-template/phong-kham/PK001.jpeg",
    packageName: "Gói website phòng khám",
    priceLabel: "Liên hệ",
    status: "active",
    order: 401
  },
  {
    id: "PK002",
    type: "reference_image",
    industryKey: "phong_kham",
    name: "Website phòng khám PK002",
    description: "Mẫu giao diện phòng khám chuyên khoa, giới thiệu dịch vụ khám bệnh và đặt lịch hẹn khám.",
    tags: ["Phòng khám", "Ảnh dài", "Chuyên khoa"],
    thumbnail: "/assets/anh-template/phong-kham/PK002.jpeg",
    longPreviewImage: "/assets/anh-template/phong-kham/PK002.jpeg",
    packageName: "Gói website phòng khám",
    priceLabel: "Liên hệ",
    status: "active",
    order: 402
  },
  {
    id: "PK003",
    type: "reference_image",
    industryKey: "phong_kham",
    name: "Website phòng khám PK003",
    description: "Mẫu thiết kế y tế nhi khoa/phụ sản ấm áp, tạo cảm giác an tâm và tận tâm.",
    tags: ["Phòng khám", "Ảnh dài", "Nhi khoa"],
    thumbnail: "/assets/anh-template/phong-kham/PK003.jpeg",
    longPreviewImage: "/assets/anh-template/phong-kham/PK003.jpeg",
    packageName: "Gói website phòng khám",
    priceLabel: "Liên hệ",
    status: "active",
    order: 403
  },
  {
    id: "PK004",
    type: "reference_image",
    industryKey: "phong_kham",
    name: "Website phòng khám PK004",
    description: "Mẫu ảnh dài cho trung tâm xét nghiệm, chẩn đoán hình ảnh hiện đại.",
    tags: ["Phòng khám", "Ảnh dài", "Xét nghiệm"],
    thumbnail: "/assets/anh-template/phong-kham/PK004.jpeg",
    longPreviewImage: "/assets/anh-template/phong-kham/PK004.jpeg",
    packageName: "Gói website phòng khám",
    priceLabel: "Liên hệ",
    status: "active",
    order: 404
  },
  {
    id: "LUAT001",
    type: "reference_image",
    industryKey: "luat_su",
    name: "Website luật sư LUAT001",
    description: "Mẫu website luật sư dạng ảnh dài, phù hợp văn phòng luật, tư vấn pháp lý và dịch vụ doanh nghiệp.",
    tags: ["Luật sư", "Ảnh dài", "Pháp lý"],
    thumbnail: "/assets/anh-template/luat-su/LUAT001.jpeg",
    longPreviewImage: "/assets/anh-template/luat-su/LUAT001.jpeg",
    packageName: "Gói website luật sư",
    priceLabel: "Liên hệ",
    status: "active",
    order: 601
  },
  {
    id: "LUAT002",
    type: "reference_image",
    industryKey: "luat_su",
    name: "Website luật sư LUAT002",
    description: "Mẫu giao diện hãng luật chuyên nghiệp, giới thiệu đội ngũ luật sư cộng sự danh tiếng.",
    tags: ["Luật sư", "Ảnh dài", "Hãng luật"],
    thumbnail: "/assets/anh-template/luat-su/LUAT002.jpeg",
    longPreviewImage: "/assets/anh-template/luat-su/LUAT002.jpeg",
    packageName: "Gói website luật sư",
    priceLabel: "Liên hệ",
    status: "active",
    order: 602
  },
  {
    id: "LUAT003",
    type: "reference_image",
    industryKey: "luat_su",
    name: "Website luật sư LUAT003",
    description: "Mẫu thiết kế văn phòng luật chú trọng tư vấn trực tuyến và giải quyết tranh chấp.",
    tags: ["Luật sư", "Ảnh dài", "Tư vấn"],
    thumbnail: "/assets/anh-template/luat-su/LUAT003.jpeg",
    longPreviewImage: "/assets/anh-template/luat-su/LUAT003.jpeg",
    packageName: "Gói website luật sư",
    priceLabel: "Liên hệ",
    status: "active",
    order: 603
  },
  {
    id: "LUAT004",
    type: "reference_image",
    industryKey: "luat_su",
    name: "Website luật sư LUAT004",
    description: "Mẫu ảnh dài cho luật sư sở hữu trí tuệ, luật dân sự hoặc hình sự.",
    tags: ["Luật sư", "Ảnh dài", "Sở hữu trí tuệ"],
    thumbnail: "/assets/anh-template/luat-su/LUAT004.jpeg",
    longPreviewImage: "/assets/anh-template/luat-su/LUAT004.jpeg",
    packageName: "Gói website luật sư",
    priceLabel: "Liên hệ",
    status: "active",
    order: 604
  },
  {
    id: "TA001",
    type: "reference_image",
    industryKey: "trung_tam_tieng_anh",
    name: "Website tiếng Anh TA001",
    description: "Mẫu website trung tâm tiếng Anh dạng ảnh dài, phù hợp trung tâm ngoại ngữ, luyện thi IELTS/TOEIC.",
    tags: ["Trung tâm tiếng Anh", "Ảnh dài", "Giáo dục"],
    thumbnail: "/assets/anh-template/trung-tam-tieng-anh/TA001.jpeg",
    longPreviewImage: "/assets/anh-template/trung-tam-tieng-anh/TA001.jpeg",
    packageName: "Gói website trung tâm tiếng Anh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 701
  },
  {
    id: "TA002",
    type: "reference_image",
    industryKey: "trung_tam_tieng_anh",
    name: "Website tiếng Anh TA002",
    description: "Mẫu giao diện trung tâm Anh ngữ hiện đại, giới thiệu các khóa học và lộ trình đào tạo.",
    tags: ["Trung tâm tiếng Anh", "Ảnh dài", "Hiện đại"],
    thumbnail: "/assets/anh-template/trung-tam-tieng-anh/TA002.jpeg",
    longPreviewImage: "/assets/anh-template/trung-tam-tieng-anh/TA002.jpeg",
    packageName: "Gói website trung tâm tiếng Anh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 702
  },
  {
    id: "TA003",
    type: "reference_image",
    industryKey: "trung_tam_tieng_anh",
    name: "Website tiếng Anh TA003",
    description: "Mẫu thiết kế website giáo dục tinh tế, tập trung vào trải nghiệm học tập và phản hồi học viên.",
    tags: ["Trung tâm tiếng Anh", "Ảnh dài", "Tinh tế"],
    thumbnail: "/assets/anh-template/trung-tam-tieng-anh/TA003.jpeg",
    longPreviewImage: "/assets/anh-template/trung-tam-tieng-anh/TA003.jpeg",
    packageName: "Gói website trung tâm tiếng Anh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 703
  },
  {
    id: "TA004",
    type: "reference_image",
    industryKey: "trung_tam_tieng_anh",
    name: "Website tiếng Anh TA004",
    description: "Mẫu ảnh dài cho trung tâm tiếng Anh trẻ em hoặc đào tạo kỹ năng chuyên nghiệp.",
    tags: ["Trung tâm tiếng Anh", "Ảnh dài", "Kids"],
    thumbnail: "/assets/anh-template/trung-tam-tieng-anh/TA004.jpeg",
    longPreviewImage: "/assets/anh-template/trung-tam-tieng-anh/TA004.jpeg",
    packageName: "Gói website trung tâm tiếng Anh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 704
  },
  {
    id: "VS001",
    type: "reference_image",
    industryKey: "dich_vu_ve_sinh",
    name: "Website vệ sinh VS001",
    description: "Mẫu website dịch vụ vệ sinh dạng ảnh dài, phù hợp vệ sinh công nghiệp, văn phòng.",
    tags: ["Dịch vụ vệ sinh", "Ảnh dài", "Vệ sinh công nghiệp"],
    thumbnail: "/assets/anh-template/dich-vu-ve-sinh/VS001.jpeg",
    longPreviewImage: "/assets/anh-template/dich-vu-ve-sinh/VS001.jpeg",
    packageName: "Gói website dịch vụ vệ sinh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 801
  },
  {
    id: "VS002",
    type: "reference_image",
    industryKey: "dich_vu_ve_sinh",
    name: "Website vệ sinh VS002",
    description: "Mẫu giao diện công ty vệ sinh hiện đại, giới thiệu dịch vụ và quy trình làm sạch.",
    tags: ["Dịch vụ vệ sinh", "Ảnh dài", "Hiện đại"],
    thumbnail: "/assets/anh-template/dich-vu-ve-sinh/VS002.jpeg",
    longPreviewImage: "/assets/anh-template/dich-vu-ve-sinh/VS002.jpeg",
    packageName: "Gói website dịch vụ vệ sinh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 802
  },
  {
    id: "VS003",
    type: "reference_image",
    industryKey: "dich_vu_ve_sinh",
    name: "Website vệ sinh VS003",
    description: "Mẫu thiết kế dịch vụ dọn dẹp nhà cửa chuyên nghiệp, có bảng giá dịch vụ rõ ràng.",
    tags: ["Dịch vụ vệ sinh", "Ảnh dài", "Gia đình"],
    thumbnail: "/assets/anh-template/dich-vu-ve-sinh/VS003.jpeg",
    longPreviewImage: "/assets/anh-template/dich-vu-ve-sinh/VS003.jpeg",
    packageName: "Gói website dịch vụ vệ sinh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 803
  },
  {
    id: "VS004",
    type: "reference_image",
    industryKey: "dich_vu_ve_sinh",
    name: "Website vệ sinh VS004",
    description: "Mẫu ảnh dài cho doanh nghiệp cung cấp dịch vụ vệ sinh thảm, rèm, sofa chuyên sâu.",
    tags: ["Dịch vụ vệ sinh", "Ảnh dài", "Chuyên sâu"],
    thumbnail: "/assets/anh-template/dich-vu-ve-sinh/VS004.jpeg",
    longPreviewImage: "/assets/anh-template/dich-vu-ve-sinh/VS004.jpeg",
    packageName: "Gói website dịch vụ vệ sinh",
    priceLabel: "Liên hệ",
    status: "active",
    order: 804
  },
  {
    id: "NT001",
    type: "reference_image",
    industryKey: "noi_that",
    name: "Website nội thất NT001",
    description: "Mẫu website nội thất dạng ảnh dài, phù hợp doanh nghiệp thiết kế và thi công không gian.",
    tags: ["Nội thất", "Ảnh dài", "Portfolio"],
    thumbnail: "/assets/anh-template/noi-that/NT001.jpg",
    longPreviewImage: "/assets/anh-template/noi-that/NT001.jpg",
    packageName: "Gói website nội thất",
    priceLabel: "Liên hệ",
    status: "active",
    order: 901
  },
  {
    id: "NT002",
    type: "reference_image",
    industryKey: "noi_that",
    name: "Website nội thất NT002",
    description: "Mẫu giao diện nội thất tập trung vào hình ảnh dự án, dịch vụ và thông tin tư vấn.",
    tags: ["Nội thất", "Ảnh dài", "Dự án"],
    thumbnail: "/assets/anh-template/noi-that/NT002.jpg",
    longPreviewImage: "/assets/anh-template/noi-that/NT002.jpg",
    packageName: "Gói website nội thất",
    priceLabel: "Liên hệ",
    status: "active",
    order: 902
  },
  {
    id: "NT003",
    type: "render_template",
    industryKey: "noi_that",
    templateKey: "xay_dung_3",
    name: "Website thiết kế & thi công nội thất NT003 (BIM Studio)",
    description: "Mẫu website thiết kế & thi công nội thất cao cấp phong cách BIM Creative Studio, thanh trượt so sánh bản vẽ trước/sau (Before/After), dải bộ sưu tập không gian và đội ngũ KTS.",
    tags: ["Nội thất", "Kiến trúc", "Live Demo", "Mẫu website", "TAVIWEB"],
    thumbnail: "/assets/anh-template/noi-that/NT003-bim.webp",
    longPreviewImage: "/assets/anh-template/noi-that/NT003-bim.webp",
    demoUrl: "/xay-dung-3",
    packageName: "Gói website nội thất cao cấp",
    status: "active",
    order: 103
  },
  {
    id: "NT004",
    type: "reference_image",
    industryKey: "noi_that",
    name: "Website nội thất NT004",
    description: "Mẫu ảnh dài cho thương hiệu nội thất muốn nhấn mạnh phong cách, sản phẩm và liên hệ.",
    tags: ["Nội thất", "Ảnh dài", "Thương hiệu"],
    thumbnail: "/assets/anh-template/noi-that/NT004.jpg",
    longPreviewImage: "/assets/anh-template/noi-that/NT004.jpg",
    packageName: "Gói website nội thất",
    priceLabel: "Liên hệ",
    status: "active",
    order: 904
  },
  {
    id: "XD001",
    type: "render_template",
    industryKey: "cong_ty_xay_dung",
    templateKey: "cong_ty_xay_dung",
    name: "Website xây dựng & thi công XD001",
    description: "Mẫu website chuyên nghiệp cho công ty xây dựng, nhà thầu thi công, cảnh quan và hoàn thiện công trình.",
    tags: ["Xây dựng", "Live Demo", "Công trình", "Mẫu website", "TAVIWEB"],
    thumbnail: "/assets/anh-template/xay-dung/XD001-live.webp",
    longPreviewImage: "/assets/anh-template/xay-dung/XD001-live.webp",
    demoUrl: "/demo/mock-cong_ty_xay_dung",
    packageName: "Gói website xây dựng tiêu chuẩn",
    status: "active",
    order: 101
  },
  {
    id: "XD002",
    type: "render_template",
    industryKey: "cong_ty_xay_dung",
    templateKey: "xay_dung_2",
    name: "Website kiến trúc & xây dựng XD002 (Prague Architecture)",
    description: "Mẫu website thiết kế kiến trúc và thi công xây dựng cao cấp phong cách tối giản chuẩn Châu Âu, lưới dự án, chỉ số năng lực, giải thưởng và biểu mẫu báo giá.",
    tags: ["Xây dựng", "Kiến trúc", "Live Demo", "Mẫu website", "TAVIWEB"],
    thumbnail: "/assets/anh-template/xay-dung/XD002-prague.webp",
    longPreviewImage: "/assets/anh-template/xay-dung/XD002-prague.webp",
    demoUrl: "/xay-dung-2",
    packageName: "Gói website xây dựng cao cấp",
    status: "active",
    order: 102
  },
  {
    id: "XD003",
    type: "render_template",
    industryKey: "cong_ty_xay_dung",
    templateKey: "xay_dung_3",
    name: "Website kiến trúc & nội thất XD003 (BIM Creative Studio)",
    description: "Mẫu website thiết kế kiến trúc, mô hình BIM và thi công nội thất cao cấp phong cách BIM Creative Studio, thanh trượt so sánh bản vẽ trước/sau (Before/After), hồ sơ năng lực và liên hệ.",
    tags: ["Xây dựng", "Kiến trúc", "Nội thất", "Live Demo", "Mẫu website", "TAVIWEB"],
    thumbnail: "/assets/anh-template/xay-dung/XD003-bim.webp",
    longPreviewImage: "/assets/anh-template/xay-dung/XD003-bim.webp",
    demoUrl: "/xay-dung-3",
    packageName: "Gói website kiến trúc & nội thất cao cấp",
    status: "active",
    order: 103
  },
  {
    id: "XD004",
    type: "reference_image",
    industryKey: "cong_ty_xay_dung",
    name: "Website xây dựng XD004",
    description: "Mẫu website tham khảo cho công ty xây dựng cần trình bày sản phẩm, dịch vụ và tư vấn.",
    tags: ["Xây dựng", "Ảnh dài", "Dịch vụ"],
    thumbnail: "/assets/anh-template/xay-dung/XD004.webp",
    longPreviewImage: "/assets/anh-template/xay-dung/XD004.webp",
    packageName: "Gói website xây dựng",
    priceLabel: "Liên hệ",
    status: "active",
    order: 1004
  },
  {
    id: "XD005",
    type: "reference_image",
    industryKey: "cong_ty_xay_dung",
    name: "Website xây dựng XD005",
    description: "Mẫu ảnh dài cho doanh nghiệp xây dựng muốn có bố cục nhiều nội dung và hình ảnh.",
    tags: ["Xây dựng", "Ảnh dài", "Doanh nghiệp"],
    thumbnail: "/assets/anh-template/xay-dung/XD005.webp",
    longPreviewImage: "/assets/anh-template/xay-dung/XD005.webp",
    packageName: "Gói website xây dựng",
    priceLabel: "Liên hệ",
    status: "active",
    order: 1005
  },
  {
    id: "NH001",
    type: "reference_image",
    industryKey: "nha_hang",
    name: "Website nhà hàng NH001",
    description: "Mẫu website nhà hàng dạng ảnh dài, phù hợp giới thiệu không gian, thực đơn và đặt bàn.",
    tags: ["Nhà hàng", "Ảnh dài", "Đặt bàn"],
    thumbnail: "/assets/anh-template/nha-hang/NH001.jpg",
    longPreviewImage: "/assets/anh-template/nha-hang/NH001.jpg",
    packageName: "Gói website nhà hàng",
    priceLabel: "Liên hệ",
    status: "active",
    order: 1101
  }
];

// --- BEGIN CLONED RENDER TEMPLATES ---
const clonedRenderTemplateItems: TemplateCatalogItem[] = [
  {
    "id": "XD041",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_fixera",
    "name": "Website xây dựng & thi công XD041 (Fixera Construction)",
    "description": "Mẫu Website Giới Thiệu Công Ty Xây Dựng",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD003-fixera.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD003-fixera.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_fixera",
    "packageName": "Gói website xây dựng & tổng thầu",
    "status": "active",
    "order": 103
  },
  {
    "id": "XD004",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_4",
    "name": "Website kiến trúc & xây dựng XD004 (GalaxyCons Dark Luxury)",
    "description": "Mẫu Website Thiết Kế Nội Thất & Xây Dựng Giao Diện Đa Dụng",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD004-galaxycons.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD004-galaxycons.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_4",
    "packageName": "Gói website kiến trúc & xây dựng cao cấp",
    "status": "active",
    "order": 104
  },
  {
    "id": "XD005",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_5",
    "name": "Website dịch vụ sơn nhà & cải tạo công trình XD005 (Mona Painting)",
    "description": "Mẫu Website Dịch Vụ Sơn Nhà, Sửa Nhà",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD005-painting.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD005-painting.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_5",
    "packageName": "Gói website cải tạo & sơn sửa công trình",
    "status": "active",
    "order": 105
  },
  {
    "id": "XD006",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_6",
    "name": "Website thi công sơn nội ngoại thất & chống thấm XD006 (ProRange)",
    "description": "Mẫu Website Thi Công Sơn Nội Và Ngoại Thất",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD006-prorange.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD006-prorange.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_6",
    "packageName": "Gói website thi công hoàn thiện & sơn nước",
    "status": "active",
    "order": 106
  },
  {
    "id": "XD007",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_7",
    "name": "Website kiến trúc đô thị & đầu tư xây dựng XD007 (CitySaigon)",
    "description": "Mẫu landing page giới thiệu công ty thiết kế địa ốc",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD007-citysaigon.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD007-citysaigon.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_7",
    "packageName": "Gói website chủ đầu tư & phát triển dự án",
    "status": "active",
    "order": 107
  },
  {
    "id": "XD008",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_8",
    "name": "Website tổng thầu dự án cao ốc & khu đô thị XD008 (Luxury Parkview)",
    "description": "Mẫu website landing page bất động sản",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD008-parkview.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD008-parkview.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_8",
    "packageName": "Gói website dự án bất động sản & xây dựng",
    "status": "active",
    "order": 108
  },
  {
    "id": "XD009",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_9",
    "name": "Website dự án căn hộ hạng sang & xây dựng XD009 (The Penta)",
    "description": "Mẫu landing page giới thiệu dự án căn hộ cao cấp",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD009-thepenta.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD009-thepenta.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_9",
    "packageName": "Gói website giới thiệu dự án căn hộ",
    "status": "active",
    "order": 109
  },
  {
    "id": "XD010",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_10",
    "name": "Website thiết kế thi công resort & biệt thự nghỉ dưỡng XD010 (NovaHills)",
    "description": "Mẫu landing page giới thiệu resort - villa",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD010-novahills.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD010-novahills.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_10",
    "packageName": "Gói website biệt thự nghỉ dưỡng & resort",
    "status": "active",
    "order": 110
  },
  {
    "id": "XD011",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_11",
    "name": "Website phân phối vật tư & sơn công trình XD011 (Dulux Pro)",
    "description": "Mẫu website bán sơn nước chất lượng",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD011-dulux.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD011-dulux.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_11",
    "packageName": "Gói website vật liệu xây dựng & sơn nước",
    "status": "active",
    "order": 111
  },
  {
    "id": "XD012",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_12",
    "name": "Website tổ hợp thương mại & xây dựng đô thị XD012 (Asiana Capella)",
    "description": "Mẫu Landing Page Giới Thiệu Căn Hộ Chung Cư",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD012-asianacapella.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD012-asianacapella.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_12",
    "packageName": "Gói website tổ hợp căn hộ & thương mại",
    "status": "active",
    "order": 112
  },
  {
    "id": "XD013",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_13",
    "name": "Website kiến trúc khu đô thị xanh XD013 (CitiAlto Architecture)",
    "description": "Mẫu Landing Page Giới Thiệu Dự Án Căn Hộ Trẻ Trung, Năng Động",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD013-citialto.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD013-citialto.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_13",
    "packageName": "Gói website kiến trúc đô thị hiện đại",
    "status": "active",
    "order": 113
  },
  {
    "id": "XD014",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_14",
    "name": "Website xây dựng tháp biểu tượng & cao ốc XD014 (M-Landmark)",
    "description": "Mẫu Landing Page Giới Thiệu Dự Án Bất Động Sản",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD014-mlandmark.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD014-mlandmark.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_14",
    "packageName": "Gói website tổng thầu cao ốc & biểu tượng",
    "status": "active",
    "order": 114
  },
  {
    "id": "XD015",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_15",
    "name": "Website dự án tổ hợp nghỉ dưỡng ven biển XD015 (HaLong Bay View)",
    "description": "Mẫu Landing Page Giới Thiệu Căn Hộ Dự Án",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD015-halongbayview.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD015-halongbayview.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_15",
    "packageName": "Gói website bất động sản nghỉ dưỡng",
    "status": "active",
    "order": 115
  },
  {
    "id": "XD016",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_16",
    "name": "Website thiết kế & thi công khách sạn 5 sao XD016 (HotelMaster)",
    "description": "Mẫu Website Giới Thiệu Hotel Giao Diện Cao Cấp",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD016-hotelmaster.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD016-hotelmaster.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_16",
    "packageName": "Gói website thi công khách sạn & hospitality",
    "status": "active",
    "order": 116
  },
  {
    "id": "NT005",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_2",
    "name": "Website kiến trúc & nội thất NT005 (Mona Architecture)",
    "description": "Mẫu Website Thiết Kế Nội Thất Giao Diện Đơn Giản",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT005-amore.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT005-amore.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_2",
    "packageName": "Gói website thiết kế & thi công nội thất",
    "status": "active",
    "order": 90.05
  },
  {
    "id": "NT006",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_3",
    "name": "Website thiết kế nội thất & phong thủy NT006 (Mona Design)",
    "description": "Mẫu Website Thiết Kế Nội Thất Mona Design",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT006-monadesign.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT006-monadesign.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_3",
    "packageName": "Gói website nội thất & kiến trúc cao cấp",
    "status": "active",
    "order": 90.1
  },
  {
    "id": "NT007",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_4",
    "name": "Website showroom nội thất hiện đại NT007 (Nội Thất Nhà Đẹp)",
    "description": "Mẫu Website Bán Nội Thất Đẹp Và Tinh Tế Với Giao Diện Hiện Đại",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT007-nhadep.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT007-nhadep.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_4",
    "packageName": "Gói website showroom & thương mại nội thất",
    "status": "active",
    "order": 90.15
  },
  {
    "id": "NT008",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_5",
    "name": "Website studio thiết kế nội thất sáng tạo NT008 (ADT Decor)",
    "description": "Mẫu Website Thiết Kế Nội Thất Phong Cách Sáng Tạo",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT008-adtdecor.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT008-adtdecor.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_5",
    "packageName": "Gói website studio thiết kế nội thất",
    "status": "active",
    "order": 90.2
  },
  {
    "id": "NT009",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_6",
    "name": "Website công ty thiết kế & thi công nội thất NT009 (FurniHub)",
    "description": "Mẫu Website Giới Thiệu Công Ty Thiết Kế Nội Thất Hiện Đại",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT009-furnihub.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT009-furnihub.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_6",
    "packageName": "Gói website nội thất cao cấp FurniHub",
    "status": "active",
    "order": 90.25
  },
  {
    "id": "NK005",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_2",
    "name": "Website phòng khám nha khoa hiện đại NK005 (YTeTot Dental)",
    "description": "Mẫu Website Phòng Khám Nha Khoa Theo Xu Hướng Hiện Đại",
    "tags": [
      "Nha khoa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK005-ytetot.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK005-ytetot.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_2",
    "packageName": "Gói website phòng khám nha khoa",
    "status": "active",
    "order": 10.05
  },
  {
    "id": "NK006",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_3",
    "name": "Website trung tâm nha khoa quốc tế NK006 (Dentario Clinic)",
    "description": "Mẫu Website Phòng Khám Nha Khoa Thông Dụng",
    "tags": [
      "Nha khoa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK006-dentario.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK006-dentario.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_3",
    "packageName": "Gói website trung tâm Implant & chỉnh nha",
    "status": "active",
    "order": 10.1
  },
  {
    "id": "SPA005",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_2",
    "name": "Website spa & chăm sóc sắc đẹp SPA005 (Beauty Blendz)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Spa Đẹp Và Mới Mẻ",
    "tags": [
      "Spa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA005-beautyblendz.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA005-beautyblendz.webp",
    "demoUrl": "/demo/mock-spa?template=spa_2",
    "packageName": "Gói website spa & trị liệu",
    "status": "active",
    "order": 20.05
  },
  {
    "id": "SPA006",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_3",
    "name": "Website viện chăm sóc & trị liệu hoàng gia SPA006 (GrandSpa)",
    "description": "Mẫu Website Giới Thiệu Spa Chuyên Nghiệp Sang Trọng",
    "tags": [
      "Spa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA006-grandspa.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA006-grandspa.webp",
    "demoUrl": "/demo/mock-spa?template=spa_3",
    "packageName": "Gói website spa dưỡng sinh & làm đẹp",
    "status": "active",
    "order": 20.1
  },
  {
    "id": "TMV005",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_2",
    "name": "Website thẩm mỹ viện & clinic TMV005 (Elegant Beauty)",
    "description": "Mẫu website thẩm mỹ viện - Spa Chuyên Nghiệp",
    "tags": [
      "Thẩm mỹ viện",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV005-elegant.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV005-elegant.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_2",
    "packageName": "Gói website thẩm mỹ viện cao cấp",
    "status": "active",
    "order": 30.05
  },
  {
    "id": "TMV006",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_3",
    "name": "Website trung tâm điều trị & trẻ hóa da TMV006 (Orient Skin)",
    "description": "Mẫu Website Giới Thiệu Trung Tâm Điều Trị Và Chăm Sóc Da",
    "tags": [
      "Thẩm mỹ viện",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV006-orientskin.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV006-orientskin.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_3",
    "packageName": "Gói website phòng khám da liễu & thẩm mỹ",
    "status": "active",
    "order": 30.1
  },
  {
    "id": "PK005",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_2",
    "name": "Website bệnh viện & phòng khám đa khoa PK005 (LifeCare)",
    "description": "Mẫu Website Bệnh Viện, Phòng Khám Mang Phong Cách Hiện Đại",
    "tags": [
      "Phòng khám",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK005-lifecare.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK005-lifecare.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_2",
    "packageName": "Gói website phòng khám đa khoa",
    "status": "active",
    "order": 40.05
  },
  {
    "id": "PK006",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_3",
    "name": "Website trung tâm y khoa & bác sĩ gia đình PK006 (MonaCare Health)",
    "description": "Mẫu Website Bệnh Viện, Phòng Khám Thân Thiện Với Người Dùng",
    "tags": [
      "Phòng khám",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK006-monacare.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK006-monacare.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_3",
    "packageName": "Gói website bệnh viện & trung tâm y khoa",
    "status": "active",
    "order": 40.1
  },
  {
    "id": "ST005",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_2",
    "name": "Website hair salon & nail studio cao cấp ST005 (Elegance Studio)",
    "description": "Mẫu Website Dịch Vụ Làm Nail Giao Diện Tinh Tế, Chuyên Nghiệp",
    "tags": [
      "Hair salon",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/salon-toc/ST005-elegance.webp",
    "longPreviewImage": "/assets/anh-template/salon-toc/ST005-elegance.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_2",
    "packageName": "Gói website salon tóc & nail studio",
    "status": "active",
    "order": 50.05
  },
  {
    "id": "SC002",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_2",
    "name": "Website studio ảnh cưới & váy cưới cao cấp SC002 (Mona Bridal)",
    "description": "Mẫu Website Áo Cưới Thiết Kế Sang Trọng Siêu Đẹp",
    "tags": [
      "Studio chụp ảnh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_2-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_2-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_2",
    "packageName": "Gói website studio ảnh cưới & bridal",
    "status": "active",
    "order": 130.05
  },
  {
    "id": "NH002",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_2",
    "name": "Website nhà hàng ẩm thực sang trọng NH002 (MonaFoodie)",
    "description": "Mẫu Website Nhà Hàng Với Giao Diện Tuyệt Đẹp Và Sang Trọng",
    "tags": [
      "Nhà hàng sang trọng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH002-monafoodie.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH002-monafoodie.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_2",
    "packageName": "Gói website nhà hàng & đặt bàn",
    "status": "active",
    "order": 110.05
  },
  {
    "id": "NH003",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_3",
    "name": "Website nhà hàng Nhật Bản & Sushi Omakase NH003 (Kokoro Sushi)",
    "description": "Mẫu Website Nhà Hàng Sushi Với Giao Diện Tinh Tế Và Hài Hòa",
    "tags": [
      "Nhà hàng sang trọng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH003-sushi.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH003-sushi.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_3",
    "packageName": "Gói website nhà hàng Nhật & ẩm thực Á Âu",
    "status": "active",
    "order": 110.1
  },
  {
    "id": "CF002",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_2",
    "name": "Website cà phê & rang xay đặc sản CF002 (CafeNgon)",
    "description": "Mẫu Website Bán Cà Phê Hiện Đại Và Sang Trọng",
    "tags": [
      "Quán cafe",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_2-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_2-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_2",
    "packageName": "Gói website quán cafe & đồ uống",
    "status": "active",
    "order": 120.05
  },
  {
    "id": "CF003",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_3",
    "name": "Website tiệm bánh & trà chiều thủ công CF003 (Mona Bakery & Tea)",
    "description": "Mẫu Website Bakery Với Giao Diện Thân Thiện Và Dễ Sử Dụng",
    "tags": [
      "Quán cafe",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_3-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_3-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_3",
    "packageName": "Gói website tiệm bánh & cafe acoustic",
    "status": "active",
    "order": 120.1
  },
  {
    "id": "VS005",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_2",
    "name": "Website dịch vụ vệ sinh công nghiệp VS005 (CleanGlow)",
    "description": "Mẫu Website Dịch Vụ Vệ Sinh, Giúp Việc Nhà Đẹp Hiện Đại",
    "tags": [
      "Dịch vụ vệ sinh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS005-cleanglow.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS005-cleanglow.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_2",
    "packageName": "Gói website dịch vụ vệ sinh",
    "status": "active",
    "order": 80.05
  },
  {
    "id": "VS006",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_3",
    "name": "Website vệ sinh tòa nhà & tạp vụ văn phòng VS006 (CleanMate)",
    "description": "Mẫu Website Dịch Vụ Vệ Sinh, Giúp Việc Nhà",
    "tags": [
      "Dịch vụ vệ sinh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS006-cleanmate.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS006-cleanmate.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_3",
    "packageName": "Gói website vệ sinh công nghiệp & gia đình",
    "status": "active",
    "order": 80.1
  },
  {
    "id": "LUAT005",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_2",
    "name": "Website văn phòng luật sư & pháp lý LUAT005 (LawKing Gold)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Thuê Luật Sư",
    "tags": [
      "Luật sư",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT005-lawking.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT005-lawking.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_2",
    "packageName": "Gói website văn phòng luật sư",
    "status": "active",
    "order": 60.05
  },
  {
    "id": "LUAT006",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_3",
    "name": "Website hãng luật & tư vấn doanh nghiệp LUAT006 (Mona Lawyer)",
    "description": "Mẫu Website Dịch Vụ Luật Sư Giao Diện Đẳng Cấp Và Hấp Dẫn",
    "tags": [
      "Luật sư",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT006-monalawyer.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT006-monalawyer.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_3",
    "packageName": "Gói website hãng luật & tư vấn pháp chế",
    "status": "active",
    "order": 60.1
  },
  {
    "id": "TA005",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_2",
    "name": "Website trung tâm Anh ngữ & luyện thi TA005 (NewYork English)",
    "description": "Mẫu Website Giới Thiệu Trung Tâm Anh Ngữ",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA005-newyork.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA005-newyork.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_2",
    "packageName": "Gói website trung tâm ngoại ngữ",
    "status": "active",
    "order": 70.05
  },
  {
    "id": "TA006",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_3",
    "name": "Website học viện đào tạo & khóa học trực tuyến TA006 (Mona Academy)",
    "description": "Mẫu Website Bán Khóa Học Chuyên Nghiệp Và Tiện Lợi",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA006-monaacademy.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA006-monaacademy.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_3",
    "packageName": "Gói website học viện & luyện thi IELTS",
    "status": "active",
    "order": 70.1
  },
  {
    "id": "GYM002",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_2",
    "name": "Website trung tâm thể hình & Fitness GYM002 (Saigon Fitness Club)",
    "description": "Mẫu Website Giới Thiệu Phòng Tập Thể Hình",
    "tags": [
      "Gym fitness",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_2-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_2-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_2",
    "packageName": "Gói website phòng gym & fitness",
    "status": "active",
    "order": 140.05
  },
  {
    "id": "GYM003",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_3",
    "name": "Website tổ hợp Fitness & Yoga 5 sao GYM003 (Cali Fitness & Yoga)",
    "description": "Mẫu Website Giới Thiệu Fitness & Yoga Center",
    "tags": [
      "Gym fitness",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_3-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_3-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_3",
    "packageName": "Gói website trung tâm Fitness & Yoga",
    "status": "active",
    "order": 140.1
  },
  {
    "id": "OTO002",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_2",
    "name": "Website gara chăm sóc & phụ kiện ô tô OTO002 (AutoSpot)",
    "description": "Mẫu Website Bán Phụ Kiện Ô Tô Tạo Tin Cậy Và Chất Lượng",
    "tags": [
      "Garage ô tô",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_2-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_2-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_2",
    "packageName": "Gói website garage & chăm sóc ô tô",
    "status": "active",
    "order": 150.05
  },
  {
    "id": "OTO003",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_3",
    "name": "Website showroom mua bán & bảo dưỡng ô tô OTO003 (Gia Khang Auto)",
    "description": "Mẫu Website Giới Thiệu Bán Ô tô Cũ",
    "tags": [
      "Garage ô tô",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_3-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_3-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_3",
    "packageName": "Gói website showroom & dịch vụ ô tô",
    "status": "active",
    "order": 150.1
  },
  {
    "id": "DN005",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_2",
    "name": "Website hồ sơ năng lực tập đoàn năng lượng & công nghệ DN005 (EliteBiz)",
    "description": "Mẫu Website Cung Cấp Giải Pháp Năng Lượng Đẹp Mắt",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN005-elitebiz.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN005-elitebiz.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_2",
    "packageName": "Gói website hồ sơ năng lực tập đoàn",
    "status": "active",
    "order": 1.05
  },
  {
    "id": "B2B005",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_2",
    "name": "Website máy móc cơ khí & thiết bị công nghiệp B2B005 (CNC ProTech)",
    "description": "Mẫu website bán máy tiện",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B005-maytiencnc.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B005-maytiencnc.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_2",
    "packageName": "Gói website thiết bị cơ khí & máy CNC B2B",
    "status": "active",
    "order": 2.05
  },
  {
    "id": "B2B006",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_3",
    "name": "Website nhà máy cửa cuốn & nhôm kính công nghiệp B2B006 (AustDoor Pro)",
    "description": "Mẫu Website Bán Cửa Cuốn Hiện Đại",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B006-cuacuon.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B006-cuacuon.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_3",
    "packageName": "Gói website sản xuất & phân phối B2B",
    "status": "active",
    "order": 2.1
  },
  {
    "id": "LD005",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_2",
    "name": "Website Landing Page thu hút khách hàng tiềm năng LD005 (Dream Abode)",
    "description": "Mẫu Website Giới Thiệu Bất Động Sản",
    "tags": [
      "Tăng trưởng Doanh số",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/lead-generation/LD005-dreamabode.webp",
    "longPreviewImage": "/assets/anh-template/lead-generation/LD005-dreamabode.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_2",
    "packageName": "Gói Landing Page chuyển đổi cao",
    "status": "active",
    "order": 3.05
  },
  {
    "id": "NT010",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_7",
    "name": "Website nội thất tiện ích cao cấp NT010 (Mona Living)",
    "description": "Mẫu Website Bán Nội Thất Với Giao Diện Cao Cấp",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT010-noithattienich.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT010-noithattienich.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_7",
    "packageName": "Gói website nội thất tiện ích & decor",
    "status": "active",
    "order": 90.3
  },
  {
    "id": "NT011",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_8",
    "name": "Website thiết kế nội thất thông minh NT011 (SmartFurniture)",
    "description": "Mẫu Website Công Ty Thiết Kế Nội Thất Giao Diện Sáng Tạo",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT011-smartfurniture.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT011-smartfurniture.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_8",
    "packageName": "Gói website nội thất thông minh",
    "status": "active",
    "order": 90.35
  },
  {
    "id": "NT012",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_9",
    "name": "Website showroom nội thất hiện đại NT012 (ModernFurniture)",
    "description": "Mẫu Website Bán Nội Thất Với Giao Diện Mua Sắm Linh Hoạt",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT012-modernfurniture.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT012-modernfurniture.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_9",
    "packageName": "Gói website showroom nội thất đương đại",
    "status": "active",
    "order": 90.4
  },
  {
    "id": "NT013",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_10",
    "name": "Website chế tác nội thất gỗ tự nhiên NT013 (Đồ Gỗ Tây Nguyên)",
    "description": "Mẫu website bán đồ gỗ",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT013-dogotaynguyen.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT013-dogotaynguyen.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_10",
    "packageName": "Gói website xưởng gỗ & nội thất mỹ nghệ",
    "status": "active",
    "order": 90.45
  },
  {
    "id": "SPA007",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_4",
    "name": "Website spa chăm sóc da & thảo dược SPA007 (Victoria Spa)",
    "description": "Mẫu website spa chăm sóc da chuyên nghiệp",
    "tags": [
      "Spa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA007-victoriaspa.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA007-victoriaspa.webp",
    "demoUrl": "/demo/mock-spa?template=spa_4",
    "packageName": "Gói website spa chăm sóc da chuyên sâu",
    "status": "active",
    "order": 20.15
  },
  {
    "id": "SPA008",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_5",
    "name": "Website viện trị liệu & thư giãn cao cấp SPA008 (FlySpa)",
    "description": "Mẫu Website Giới Thiệu Spa Giao Diện Cao Cấp",
    "tags": [
      "Spa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA008-flyspa.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA008-flyspa.webp",
    "demoUrl": "/demo/mock-spa?template=spa_5",
    "packageName": "Gói website spa nghỉ dưỡng & wellness",
    "status": "active",
    "order": 20.2
  },
  {
    "id": "SPA009",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_6",
    "name": "Website trung tâm làm đẹp & dưỡng sinh SPA009 (Helen Spa)",
    "description": "Mẫu Website Spa Làm Đẹp Giao Diện Chuyên Nghiệp",
    "tags": [
      "Spa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA009-helenspa.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA009-helenspa.webp",
    "demoUrl": "/demo/mock-spa?template=spa_6",
    "packageName": "Gói website spa làm đẹp & dưỡng sinh",
    "status": "active",
    "order": 20.25
  },
  {
    "id": "TMV007",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_4",
    "name": "Website viện thẩm mỹ công nghệ Hàn Quốc TMV007 (K-Beauty Clinic)",
    "description": "Landing page giới thiệu dịch vụ thẩm mỹ Hàn Quốc",
    "tags": [
      "Thẩm mỹ viện",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV007-hanquoc.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV007-hanquoc.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_4",
    "packageName": "Gói website viện thẩm mỹ chuẩn Hàn",
    "status": "active",
    "order": 30.15
  },
  {
    "id": "TMV008",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_5",
    "name": "Website thẩm mỹ viện & dược mỹ phẩm TMV008 (Sắc Đẹp 24)",
    "description": "Mẫu Website Bán Mỹ Phẩm Độc Đáo Và Hấp Dẫn",
    "tags": [
      "Thẩm mỹ viện",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV008-sacdep24.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV008-sacdep24.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_5",
    "packageName": "Gói website thẩm mỹ & dược mỹ phẩm",
    "status": "active",
    "order": 30.2
  },
  {
    "id": "TMV009",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_6",
    "name": "Website clinic da liễu & thẩm mỹ công nghệ cao TMV009 (Cosmetic Luxe)",
    "description": "Mẫu Website Bán Mỹ Phẩm Hiện Đại Và Ấn Tượng",
    "tags": [
      "Thẩm mỹ viện",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV009-cosmetic.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV009-cosmetic.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_6",
    "packageName": "Gói website clinic trẻ hóa & mỹ phẩm",
    "status": "active",
    "order": 30.25
  },
  {
    "id": "LUAT007",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_4",
    "name": "Website công ty luật & đại diện tranh tụng LUAT007 (Attorneys Law)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Luật Sư Chuyên Nghiệp",
    "tags": [
      "Luật sư",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT007-attorneys.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT007-attorneys.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_4",
    "packageName": "Gói website công ty luật tranh tụng",
    "status": "active",
    "order": 60.15
  },
  {
    "id": "LUAT008",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_5",
    "name": "Website văn phòng tư vấn pháp lý doanh nghiệp LUAT008 (LawKing Legal)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Tư Vấn Luật",
    "tags": [
      "Luật sư",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT008-lawking.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT008-lawking.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_5",
    "packageName": "Gói website tư vấn luật & sở hữu trí tuệ",
    "status": "active",
    "order": 60.2
  },
  {
    "id": "LUAT009",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_6",
    "name": "Website hãng luật đầu tư & thương mại quốc tế LUAT009 (LawyerBase)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Pháp Lý",
    "tags": [
      "Luật sư",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT009-lawyerbase.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT009-lawyerbase.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_6",
    "packageName": "Gói website hãng luật thương mại",
    "status": "active",
    "order": 60.25
  },
  {
    "id": "LUAT010",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_7",
    "name": "Website liên đoàn luật sư & cố vấn pháp chế LUAT010 (Lawyers Group)",
    "description": "Mẫu Website Dịch Vụ Luật Sư Giao Diện Chuyên Nghiệp",
    "tags": [
      "Luật sư",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT010-lawyers.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT010-lawyers.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_7",
    "packageName": "Gói website văn phòng luật sư cao cấp",
    "status": "active",
    "order": 60.3
  },
  {
    "id": "TA007",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_4",
    "name": "Website trung tâm luyện thi & Anh ngữ học thuật TA007 (SmartSummer)",
    "description": "Mẫu Website Giới Thiệu Trung Tâm Luyện Thi Mới Mẻ",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA007-smartsummer.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA007-smartsummer.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_4",
    "packageName": "Gói website trung tâm luyện thi đại học & IELTS",
    "status": "active",
    "order": 70.15
  },
  {
    "id": "TA008",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_5",
    "name": "Website học viện ngoại ngữ & đào tạo trực tuyến TA008 (BeBetter)",
    "description": "Mẫu Website Bán Khóa Học Tạo Không Gian Học Tập Đa Dạng",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA008-bebetter.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA008-bebetter.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_5",
    "packageName": "Gói website trung tâm đào tạo & EdTech",
    "status": "active",
    "order": 70.2
  },
  {
    "id": "TA009",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_6",
    "name": "Website học viện Anh ngữ trẻ em & kỹ năng sống TA009 (LifeSkills)",
    "description": "Mẫu Website Giới Thiệu Trại Hè Kỹ Năng, Trải Nghiệm",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA009-lifeskills.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA009-lifeskills.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_6",
    "packageName": "Gói website học viện Anh ngữ thiếu nhi",
    "status": "active",
    "order": 70.25
  },
  {
    "id": "VS007",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_4",
    "name": "Website dịch vụ vệ sinh hồ bơi & cảnh quan công trình VS007 (Bể Bơi Xanh)",
    "description": "Mẫu Website Dịch Vụ Chăm Sóc Bể Bơi Với Giao Diện Tiện Lợi",
    "tags": [
      "Dịch vụ vệ sinh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS007-beboixanh.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS007-beboixanh.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_4",
    "packageName": "Gói website vệ sinh chuyên dụng & hồ bơi",
    "status": "active",
    "order": 80.15
  },
  {
    "id": "OTO004",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_4",
    "name": "Website trung tâm bảo hành & đồng sơn xe hơi OTO004 (AutoSer)",
    "description": "Mẫu website trung tâm bảo hành, sửa chữa xe hơi",
    "tags": [
      "Garage ô tô",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_4-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_4-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_4",
    "packageName": "Gói website trung tâm sửa chữa ô tô",
    "status": "active",
    "order": 150.15
  },
  {
    "id": "OTO005",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_5",
    "name": "Website trung tâm detailing & bảo dưỡng ô tô OTO005 (Cardinal Auto)",
    "description": "Mẫu website giới thiệu trung tâm bảo hành - bảo dưỡng ô tô",
    "tags": [
      "Garage ô tô",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_5-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_5-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_5",
    "packageName": "Gói website detailing & chăm sóc xe hơi",
    "status": "active",
    "order": 150.2
  },
  {
    "id": "GYM004",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_4",
    "name": "Website câu lạc bộ thể thao & tổ hợp sân tập GYM004 (Mona Active Club)",
    "description": "Mẫu Website Giới Thiệu Thuê Sân Pickleball",
    "tags": [
      "Gym fitness",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_4-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_4-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_4",
    "packageName": "Gói website câu lạc bộ thể thao & sân tập",
    "status": "active",
    "order": 140.15
  },
  {
    "id": "NH004",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_4",
    "name": "Website chuỗi nhà hàng ẩm thực nhanh & giao hàng NH004 (BiteBlitz)",
    "description": "Mẫu Website Bán Đồ ăn Nhanh Đầy Sức Hút Và Tiện Lợi",
    "tags": [
      "Nhà hàng sang trọng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH004-biteblitz.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH004-biteblitz.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_4",
    "packageName": "Gói website chuỗi nhà hàng & đặt món",
    "status": "active",
    "order": 110.15
  },
  {
    "id": "DN006",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_3",
    "name": "Website công ty giải pháp công nghệ & chuyển đổi số DN006 (FutureTech)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Marketing Hiện Đại",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN006-futuretech.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN006-futuretech.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_3",
    "packageName": "Gói website tập đoàn công nghệ & dịch vụ",
    "status": "active",
    "order": 1.1
  },
  {
    "id": "DN007",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_4",
    "name": "Website tập đoàn vận tải & chuỗi cung ứng quốc tế DN007 (Mona Logistics)",
    "description": "Mẫu Website Dịch Vụ Vận Chuyển Hiện Đại Và Chuyên Nghiệp",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN007-logistics.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN007-logistics.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_4",
    "packageName": "Gói website công ty vận tải & xuất nhập khẩu",
    "status": "active",
    "order": 1.15
  },
  {
    "id": "DN008",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_5",
    "name": "Website công ty vận chuyển & giao nhận quốc tế DN008 (ShipFast)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ Vận Chuyển Chuyên Nghiệp",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN008-shipfast.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN008-shipfast.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_5",
    "packageName": "Gói website vận chuyển & giao nhận",
    "status": "active",
    "order": 1.2
  },
  {
    "id": "DN009",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_6",
    "name": "Website tập đoàn đầu tư & bất động sản DN009 (MonaLand Group)",
    "description": "Mẫu webiste Bất động sản Chuyên Nghiệp",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN009-monaland.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN009-monaland.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_6",
    "packageName": "Gói website tập đoàn bất động sản",
    "status": "active",
    "order": 1.25
  },
  {
    "id": "DN010",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_7",
    "name": "Website tập đoàn phát triển đô thị hạng sang DN010 (PrimeLuxe)",
    "description": "Mẫu Website Giới Thiệu Bất Động Sản Hiện Đại",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN010-primeluxe.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN010-primeluxe.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_7",
    "packageName": "Gói website chủ đầu tư & tập đoàn",
    "status": "active",
    "order": 1.3
  },
  {
    "id": "DN011",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_8",
    "name": "Website công ty công nghệ & giải pháp số DN011 (TechSolutions)",
    "description": "Mẫu Website Dịch Vụ Marketing Với Giao Diện Chuyên Nghiệp",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN011-techsolutions.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN011-techsolutions.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_8",
    "packageName": "Gói website công nghệ & agency",
    "status": "active",
    "order": 1.35
  },
  {
    "id": "B2B007",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_4",
    "name": "Website sản xuất & xuất khẩu nông sản hữu cơ B2B007 (Mona Organic)",
    "description": "Mẫu Website Bán Sản Phẩm Organic Chuyên Nghiệp",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B007-organicfood.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B007-organicfood.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_4",
    "packageName": "Gói website nông sản & thực phẩm xuất khẩu",
    "status": "active",
    "order": 2.15
  },
  {
    "id": "B2B008",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_5",
    "name": "Website tập đoàn nông nghiệp công nghệ cao B2B008 (AgriTech VN)",
    "description": "Mẫu Website Bán Thực Phẩm Sạch Chuyên Nghiệp Và Đẹp Mắt",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B008-agriculture.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B008-agriculture.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_5",
    "packageName": "Gói website nông nghiệp công nghệ cao B2B",
    "status": "active",
    "order": 2.2
  },
  {
    "id": "B2B009",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_6",
    "name": "Website phân phối thiết bị CNTT & máy chủ doanh nghiệp B2B009 (MonaTech)",
    "description": "Mẫu Website Cửa Hàng Công Nghệ Hiện đại",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B009-monacomputer.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B009-monacomputer.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_6",
    "packageName": "Gói website thiết bị CNTT & phần cứng B2B",
    "status": "active",
    "order": 2.25
  },
  {
    "id": "B2B010",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_7",
    "name": "Website cung ứng thiết bị & văn phòng phẩm doanh nghiệp B2B010 (OfficeSup)",
    "description": "Mẫu Website Bán Văn Phòng Phẩm Tiện Ích",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B010-officesup.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B010-officesup.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_7",
    "packageName": "Gói website cung ứng vật tư văn phòng B2B",
    "status": "active",
    "order": 2.3
  },
  {
    "id": "LD006",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_3",
    "name": "Website Landing Page ra mắt sản phẩm công nghệ LD006 (DroneTech Pro)",
    "description": "Mẫu landipage giới thiệu flycam Chuyên Nghiệp",
    "tags": [
      "Tăng trưởng Doanh số",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/lead-generation/LD006-bfdeals.webp",
    "longPreviewImage": "/assets/anh-template/lead-generation/LD006-bfdeals.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_3",
    "packageName": "Gói Landing Page sản phẩm công nghệ",
    "status": "active",
    "order": 3.1
  },
  {
    "id": "LD007",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_4",
    "name": "Website Landing Page dược phẩm & thảo dược thiên nhiên LD007 (Herbalgy)",
    "description": "Mẫu website landing page giới thiệu sản phẩm dầu thảo dược",
    "tags": [
      "Tăng trưởng Doanh số",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/lead-generation/LD007-herbalgy.webp",
    "longPreviewImage": "/assets/anh-template/lead-generation/LD007-herbalgy.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_4",
    "packageName": "Gói Landing Page đông y & dược mỹ phẩm",
    "status": "active",
    "order": 3.15
  },
  {
    "id": "LD008",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_5",
    "name": "Website Landing Page quà tặng doanh nghiệp & ẩm thực LD008 (Royal Gift)",
    "description": "Mẫu website landing page giới thiệu bánh trung thu",
    "tags": [
      "Tăng trưởng Doanh số",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/lead-generation/LD008-monacake.webp",
    "longPreviewImage": "/assets/anh-template/lead-generation/LD008-monacake.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_5",
    "packageName": "Gói Landing Page chiến dịch mùa lễ hội",
    "status": "active",
    "order": 3.2
  },
  {
    "id": "LD009",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_6",
    "name": "Website nông trại sinh thái & thực phẩm hữu cơ LD009 (EcoGarden)",
    "description": "Mẫu Website Giới Thiệu Nông Trại Thực Phẩm Tự Nhiên",
    "tags": [
      "Tăng trưởng Doanh số",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/lead-generation/LD009-ecogarden.webp",
    "longPreviewImage": "/assets/anh-template/lead-generation/LD009-ecogarden.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_6",
    "packageName": "Gói Landing Page nông nghiệp xanh & du lịch sinh thái",
    "status": "active",
    "order": 3.25
  },
  {
    "id": "SC003",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_3",
    "name": "Website studio hoa cưới & trang trí sự kiện SC003 (Flora Wedding)",
    "description": "Mẫu Website Bán Hoa Với Giao Diện Tinh Tế Và Dễ Sử Dụng",
    "tags": [
      "Studio chụp ảnh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_3-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_3-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_3",
    "packageName": "Gói website studio cưới & floral art",
    "status": "active",
    "order": 130.1
  },
  {
    "id": "SC004",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_4",
    "name": "Website studio ảnh cưới & hoa nghệ thuật SC004 (Floda Bridal)",
    "description": "Mẫu Website Bán Hoa Tươi Đẹp Mắt, Chuẩn SEO",
    "tags": [
      "Studio chụp ảnh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_4-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_4-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_4",
    "packageName": "Gói website wedding planner & studio",
    "status": "active",
    "order": 130.15
  },
  {
    "id": "ST006",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_3",
    "name": "Website hair salon & chăm sóc tóc chuyên sâu ST006 (Harosa Salon)",
    "description": "Mẫu website bán hàng mỹ phẩm đẹp mắt, thu hút",
    "tags": [
      "Hair salon",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/salon-toc/ST006-harosa.webp",
    "longPreviewImage": "/assets/anh-template/salon-toc/ST006-harosa.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_3",
    "packageName": "Gói website hair salon & sản phẩm chăm sóc tóc",
    "status": "active",
    "order": 50.1
  },
  {
    "id": "ST007",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_4",
    "name": "Website luxury hair & beauty studio ST007 (Mona Luxe Salon)",
    "description": "Mẫu Website Bán Nước Hoa Giao Diện Cao Cấp",
    "tags": [
      "Hair salon",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/salon-toc/ST007-monaperfume.webp",
    "longPreviewImage": "/assets/anh-template/salon-toc/ST007-monaperfume.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_4",
    "packageName": "Gói website salon tóc & làm đẹp hạng sang",
    "status": "active",
    "order": 50.15
  },
  {
    "id": "GYM005",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_5",
    "name": "Website trung tâm huấn luyện thể hình & PT GYM005 (Pelvan Fitness)",
    "description": "Mẫu website landingpage giới thiệu phòng tập GYM",
    "tags": [
      "Gym fitness",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_5-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_5-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_5",
    "packageName": "Gói website phòng tập gym & PT 1:1",
    "status": "active",
    "order": 140.2
  },
  {
    "id": "GYM006",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_6",
    "name": "Website câu lạc bộ thể thao & trang thiết bị tập luyện GYM006 (GoSporty)",
    "description": "Mẫu Website Bán Đồ Thể Thao Thân Thiện Người Dùng",
    "tags": [
      "Gym fitness",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_6-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_6-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_6",
    "packageName": "Gói website thể thao & fitness center",
    "status": "active",
    "order": 140.25
  },
  {
    "id": "OTO006",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_6",
    "name": "Website trung tâm độ xe, decal & phụ kiện ô tô OTO006 (Hùng Vỹ Auto)",
    "description": "Mẫu Website Bán Phụ Kiện Xe Hơi Giao Diện Đơn Giản",
    "tags": [
      "Garage ô tô",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_6-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_6-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_6",
    "packageName": "Gói website độ xe & phụ kiện ô tô",
    "status": "active",
    "order": 150.25
  },
  {
    "id": "OTO007",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_7",
    "name": "Website showroom xe thể thao & bảo dưỡng chuyên nghiệp OTO007 (Mona Motor)",
    "description": "Mẫu Website Bán Xe Đạp Với Các Tính Năng Tùy Chỉnh Độc Đáo",
    "tags": [
      "Garage ô tô",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_7-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_7-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_7",
    "packageName": "Gói website showroom & dịch vụ xe",
    "status": "active",
    "order": 150.3
  },
  {
    "id": "TA010",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_7",
    "name": "Website trung tâm ngoại ngữ & tư vấn du học TA010 (Việt Nhật Edu)",
    "description": "Mẫu website giới thiệu trung tâm tư vấn du học Việt - Nhật",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA010-duhocvietnhat.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA010-duhocvietnhat.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_7",
    "packageName": "Gói website trung tâm ngoại ngữ & du học",
    "status": "active",
    "order": 70.3
  },
  {
    "id": "TA011",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_8",
    "name": "Website học viện đào tạo ngôn ngữ & du học quốc tế TA011 (Nhật Anh Edu)",
    "description": "Mẫu website giới thiệu trung tâm tư vấn du học",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA011-nhatanhedu.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA011-nhatanhedu.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_8",
    "packageName": "Gói website trung tâm tư vấn giáo dục",
    "status": "active",
    "order": 70.35
  },
  {
    "id": "TA012",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_9",
    "name": "Website trường đại học & học viện quốc tế TA012 (Global University)",
    "description": "Mẫu Website Giới Thiệu Trường Đại Học",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA012-fpthanoi.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA012-fpthanoi.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_9",
    "packageName": "Gói website trường học & học viện đào tạo",
    "status": "active",
    "order": 70.4
  },
  {
    "id": "TA013",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_10",
    "name": "Website trường mầm non song ngữ quốc tế TA013 (Mona Preschool)",
    "description": "Mẫu Website Trường Mầm Non Quốc Tế Giao Diện Đẹp",
    "tags": [
      "Trung tâm tiếng Anh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA013-preschool.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA013-preschool.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_10",
    "packageName": "Gói website trường mầm non & Anh ngữ trẻ em",
    "status": "active",
    "order": 70.45
  },
  {
    "id": "NT014",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_11",
    "name": "Website siêu thị nội thất & trang trí nhà cửa NT014 (UMA Living)",
    "description": "Mẫu Website Bán Hàng Nội Thất Gỗ Chất Lượng",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT014-uma.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT014-uma.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_11",
    "packageName": "Gói website siêu thị nội thất & gia dụng",
    "status": "active",
    "order": 90.5
  },
  {
    "id": "NT015",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_12",
    "name": "Website thiết kế nội thất resort & khách sạn nghỉ dưỡng NT015 (PeakView)",
    "description": "Mẫu Website Khách Sạn Giao Diện Cao Cấp",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT015-peakview.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT015-peakview.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_12",
    "packageName": "Gói website nội thất nghỉ dưỡng & resort",
    "status": "active",
    "order": 90.55
  },
  {
    "id": "XD017",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_17",
    "name": "Website thiết kế thi công tổ hợp khách sạn & thương mại XD017 (Golden Cons)",
    "description": "Mẫu Website Hotel - Khách Sạn Giao Diện Đẹp Mắt",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD017-goldenhotel.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD017-goldenhotel.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_17",
    "packageName": "Gói website xây dựng công trình khách sạn",
    "status": "active",
    "order": 117
  },
  {
    "id": "XD018",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_18",
    "name": "Website chủ đầu tư hạ tầng & phát triển khu đô thị XD018 (InvestLand)",
    "description": "Mẫu website giới thiệu bất động sản",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD018-investmentland.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD018-investmentland.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_18",
    "packageName": "Gói website đầu tư xây dựng & địa ốc",
    "status": "active",
    "order": 118
  },
  {
    "id": "DN012",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_9",
    "name": "Website tập đoàn giải pháp công nghệ & phần mềm DN012 (InnovateTech)",
    "description": "Mẫu Website Giới Thiệu Dịch Vụ, Giải Pháp Công Nghệ",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN012-innovatetech.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN012-innovatetech.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_9",
    "packageName": "Gói website tập đoàn công nghệ & AI",
    "status": "active",
    "order": 1.4
  },
  {
    "id": "DN013",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_10",
    "name": "Website công ty vận tải biển & kho vận quốc tế DN013 (Agile Logistics)",
    "description": "Mẫu Website Dịch Vụ Vận Chuyển, Logistic",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN013-agilelogistics.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN013-agilelogistics.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_10",
    "packageName": "Gói website logistics & xuất nhập khẩu",
    "status": "active",
    "order": 1.45
  },
  {
    "id": "DN014",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_11",
    "name": "Website công ty tư vấn chiến lược & quản trị doanh nghiệp DN014 (TC Consulting)",
    "description": "Mẫu Website Tư Vấn Quản Lý Và Chuyển Đổi Tổ Chức",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN014-tcconsulting.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN014-tcconsulting.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_11",
    "packageName": "Gói website tư vấn quản trị & tài chính",
    "status": "active",
    "order": 1.5
  },
  {
    "id": "DN015",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_12",
    "name": "Website công ty lữ hành & sự kiện doanh nghiệp DN015 (Mona Travel Corp)",
    "description": "Mẫu Website Du Lịch Lữ Hành Bán Tour",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/doanh-nghiep/DN015-monatour.webp",
    "longPreviewImage": "/assets/anh-template/doanh-nghiep/DN015-monatour.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_12",
    "packageName": "Gói website lữ hành & MICE doanh nghiệp",
    "status": "active",
    "order": 1.55
  },
  {
    "id": "B2B011",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_8",
    "name": "Website sàn giao dịch & phân phối nông sản sạch B2B011 (HappyTrade)",
    "description": "Mẫu website bán nông sản sạch an toàn",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B011-happytrade.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B011-happytrade.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_8",
    "packageName": "Gói website chuỗi cung ứng thực phẩm B2B",
    "status": "active",
    "order": 2.35
  },
  {
    "id": "B2B012",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_9",
    "name": "Website phân phối thực phẩm & nông sản hữu cơ B2B012 (CleverFood)",
    "description": "Mẫu Website Bán Nông Sản - Rau Sạch",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B012-cleverfood.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B012-cleverfood.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_9",
    "packageName": "Gói website phân phối thực phẩm sạch B2B",
    "status": "active",
    "order": 2.4
  },
  {
    "id": "B2B013",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_10",
    "name": "Website nhà máy phân bón & vật tư nông nghiệp B2B013 (AgriChem VN)",
    "description": "Mẫu Website Bán Phân Bón - Nông Sản Giao Diện Chuyên Nghiệp",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B013-huucomientrung.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B013-huucomientrung.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_10",
    "packageName": "Gói website vật tư nông nghiệp & phân bón B2B",
    "status": "active",
    "order": 2.45
  },
  {
    "id": "B2B014",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_11",
    "name": "Website phân phối thiết bị thông minh & IoT B2B014 (MonaSmart)",
    "description": "Mẫu Website Bán Sản Phẩm Công Nghệ Đẹp Và Hiện Đại",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/san-pham-b2b/B2B014-monasmart.webp",
    "longPreviewImage": "/assets/anh-template/san-pham-b2b/B2B014-monasmart.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_11",
    "packageName": "Gói website thiết bị điện tử & IoT B2B",
    "status": "active",
    "order": 2.5
  },
  {
    "id": "NH005",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_5",
    "name": "Website chuỗi cửa hàng thực phẩm & salad hữu cơ NH005 (Fruitio Fresh)",
    "description": "Mẫu Website Bán Thực Phẩm Tạo Cảm Giác Tươi Mới Tự Nhiên",
    "tags": [
      "Nhà hàng sang trọng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH005-fruitio.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH005-fruitio.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_5",
    "packageName": "Gói website nhà hàng healthy & organic",
    "status": "active",
    "order": 110.2
  },
  {
    "id": "CF004",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_4",
    "name": "Website tiệm kem tươi & đồ uống tráng miệng CF004 (Sweet Gelato)",
    "description": "Mẫu Website giao diện cửa hàng bán kem",
    "tags": [
      "Quán cafe",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_4-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_4-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_4",
    "packageName": "Gói website tiệm kem, trà sữa & dessert",
    "status": "active",
    "order": 120.15
  },
  {
    "id": "SC005",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_5",
    "name": "Website studio trang sức cưới & phụ kiện cao cấp SC005 (Mona Gemify)",
    "description": "Mẫu Website Bán Trang Sức Thời Trang Sang Trọng Đẳng Cấp",
    "tags": [
      "Studio chụp ảnh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_5-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_5-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_5",
    "packageName": "Gói website trang sức cưới & bridal",
    "status": "active",
    "order": 130.2
  },
  {
    "id": "ST008",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_5",
    "name": "Website học viện tạo mẫu tóc & thời trang ST008 (Coutura Styling)",
    "description": "Mẫu Website Thời Trang Với Giao Diện Đẹp Và Chuyên Nghiệp",
    "tags": [
      "Hair salon",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/salon-toc/ST008-coutura.webp",
    "longPreviewImage": "/assets/anh-template/salon-toc/ST008-coutura.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_5",
    "packageName": "Gói website salon tạo mẫu & beauty academy",
    "status": "active",
    "order": 50.2
  },
  {
    "id": "XD019",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_19",
    "name": "Website công ty xây dựng kết cấu thép & cao ốc XD019 (HotelLux Cons)",
    "description": "Mẫu Website Giới Thiệu Hotel Và Resort - Công ty thép",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD019-hotellux.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD019-hotellux.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_19",
    "packageName": "Gói website xây dựng kết cấu thép & cao tầng",
    "status": "active",
    "order": 119
  },
  {
    "id": "XD020",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_20",
    "name": "Website kiến trúc & xây dựng dinh thự cổ điển XD020 (Bellevue Arch)",
    "description": "Mẫu Website Hotel - Khách Sạn 5 Sao Giao Diện Sang Trọng",
    "tags": [
      "Công ty xây dựng",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD020-bellevue.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD020-bellevue.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_20",
    "packageName": "Gói website kiến trúc dinh thự & khách sạn 5 sao",
    "status": "active",
    "order": 120
  },
  {
    "id": "NT016",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_13",
    "name": "Website thiết kế nội thất & phong thủy biệt thự biển NT016 (BeachHouse)",
    "description": "Mẫu Website Giới Thiệu Resort Bãi Biển",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT016-beachhouse.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT016-beachhouse.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_13",
    "packageName": "Gói website nội thất biệt thự biển & resort",
    "status": "active",
    "order": 90.6
  },
  {
    "id": "NT017",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_14",
    "name": "Website thiết kế thi công nội thất căn hộ dịch vụ NT017 (Mona Suite)",
    "description": "Mẫu Website Đặt Phòng Khách Sạn Ấn Tượng",
    "tags": [
      "Thiết kế nội thất",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT017-hotelbooking.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT017-hotelbooking.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_14",
    "packageName": "Gói website nội thất căn hộ & boutique hotel",
    "status": "active",
    "order": 90.65
  },
  {
    "id": "NK007",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_4",
    "name": "Website trung tâm nha khoa thẩm mỹ & chăm sóc nụ cười NK007 (SmileCare)",
    "description": "Mẫu website bán mỹ phẩm dưỡng da & chăm sóc thẩm mỹ",
    "tags": [
      "Nha khoa",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK007-smilecare.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK007-smilecare.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_4",
    "packageName": "Gói website nha khoa thẩm mỹ & sản phẩm răng miệng",
    "status": "active",
    "order": 10.15
  },
  {
    "id": "PK007",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_4",
    "name": "Website phòng khám y học cổ truyền & phục hồi chức năng PK007 (Tâm An Y Đường)",
    "description": "Mẫu website giới thiệu sản phẩm thảo dược tự nhiên Tâm An Lạc Viện",
    "tags": [
      "Phòng khám",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK007-taman.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK007-taman.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_4",
    "packageName": "Gói website phòng khám đông y & y học cổ truyền",
    "status": "active",
    "order": 40.15
  },
  {
    "id": "VS008",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_5",
    "name": "Website dịch vụ vệ sinh sự kiện & trang trí không gian VS008 (CleanEvent Pro)",
    "description": "Mẫu website dịch vụ tổ chức & vệ sinh sự kiện",
    "tags": [
      "Dịch vụ vệ sinh",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS008-cleanevent.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS008-cleanevent.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_5",
    "packageName": "Gói website dịch vụ vệ sinh sau sự kiện & công trình",
    "status": "active",
    "order": 80.2
  },
  {
    "id": "CF005",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_5",
    "name": "Website tiệm trà thảo mộc & mật ong rừng nguyên chất CF005 (Honey & Tea House)",
    "description": "Mẫu Website Bán Mật Ong Tự Nhiên, Uy Tín Và Chất Lượng",
    "tags": [
      "Quán cafe",
      "Live Demo",
      "Mẫu website",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_5-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_5-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_5",
    "packageName": "Gói website tiệm trà thảo mộc & đặc sản",
    "status": "active",
    "order": 120.2
  },
  {
    "id": "TA014",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_11",
    "name": "Website Trung Tâm Tư Vấn Du Học & Anh Ngữ Quốc Anh TA014",
    "description": "Mẫu website trung tâm tư vấn du học quốc tế, đào tạo ngoại ngữ, săn học bổng và hỗ trợ hồ sơ visa.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Du học",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA014-quocanh.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA014-quocanh.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_11",
    "packageName": "Gói website trung tâm tiếng Anh & du học",
    "status": "active",
    "order": 70.5
  },
  {
    "id": "TA015",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_12",
    "name": "Website Học Viện Anh Ngữ & Du Học Quốc Tế AMEC TA015",
    "description": "Mẫu website học viện đào tạo ngoại ngữ, luyện thi chứng chỉ quốc tế và tư vấn lộ trình du học toàn cầu.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Học viện",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA015-amec.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA015-amec.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_12",
    "packageName": "Gói website học viện ngoại ngữ quốc tế",
    "status": "active",
    "order": 70.55
  },
  {
    "id": "TA016",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_13",
    "name": "Website Trường Quốc Tế & Đào Tạo Ngoại Ngữ GreenUni TA016",
    "description": "Mẫu website trường học quốc tế, trung tâm ngoại ngữ và phát triển năng khiếu với giao diện xanh hiện đại.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Trường quốc tế",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA016-greenuni.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA016-greenuni.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_13",
    "packageName": "Gói website trường học & trung tâm ngoại ngữ",
    "status": "active",
    "order": 70.6
  },
  {
    "id": "TA017",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_14",
    "name": "Website Học Viện Giáo Dục & Ngoại Ngữ BlueUni TA017",
    "description": "Mẫu website hệ thống giáo dục, đào tạo tiếng Anh học thuật, thư viện học liệu và đăng ký tuyển sinh trực tuyến.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Giáo dục",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA017-blueuni.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA017-blueuni.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_14",
    "packageName": "Gói website học viện đào tạo",
    "status": "active",
    "order": 70.65
  },
  {
    "id": "TA018",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_15",
    "name": "Website Trung Tâm Ngoại Ngữ & Du Học NewOcean TA018",
    "description": "Mẫu website trung tâm đào tạo ngoại ngữ, luyện thi IELTS và tư vấn học bổng du học châu Âu - Mỹ - Úc.",
    "tags": [
      "Trung tâm tiếng Anh",
      "IELTS",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA018-newocean.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA018-newocean.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_15",
    "packageName": "Gói website trung tâm ngoại ngữ & du học",
    "status": "active",
    "order": 70.7
  },
  {
    "id": "TA019",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_16",
    "name": "Website Trường Mầm Non Quốc Tế Song Ngữ Tiny Treasures TA019",
    "description": "Mẫu website trường mầm non quốc tế song ngữ, chương trình học Montessori và phát triển tư duy ngôn ngữ sớm.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Mầm non quốc tế",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA019-tinytreasures.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA019-tinytreasures.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_16",
    "packageName": "Gói website trường mầm non song ngữ",
    "status": "active",
    "order": 70.75
  },
  {
    "id": "TA020",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_17",
    "name": "Website Nền Tảng Khóa Học Ngoại Ngữ Trực Tuyến LearnPro TA020",
    "description": "Mẫu website học viện đào tạo trực tuyến, bán khóa học tiếng Anh giao tiếp, luyện thi IELTS và kỹ năng mềm.",
    "tags": [
      "Trung tâm tiếng Anh",
      "E-Learning",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA020-learnpro.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA020-learnpro.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_17",
    "packageName": "Gói website nền tảng khóa học trực tuyến",
    "status": "active",
    "order": 70.8
  },
  {
    "id": "TA021",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_18",
    "name": "Website Học Viện Đào Tạo & Luyện Thi Trực Tuyến CoursePro TA021",
    "description": "Mẫu website cổng đào tạo trực tuyến, quản lý lớp học ngoại ngữ, đội ngũ giảng viên và lộ trình cá nhân hóa.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Khóa học",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA021-coursepro.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA021-coursepro.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_18",
    "packageName": "Gói website trung tâm đào tạo hiện đại",
    "status": "active",
    "order": 70.85
  },
  {
    "id": "NT018",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_15",
    "name": "Website Showroom Nội Thất Sang Trọng Decor Deluxe NT018",
    "description": "Mẫu website thiết kế và phân phối nội thất cao cấp, bộ sưu tập phòng khách, phòng ngủ và tư vấn kiến trúc.",
    "tags": [
      "Nội thất",
      "Showroom",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT018-decordeluxe.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT018-decordeluxe.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_15",
    "packageName": "Gói website showroom nội thất cao cấp",
    "status": "active",
    "order": 90.7
  },
  {
    "id": "NT019",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_16",
    "name": "Website Thiết Kế & Thi Công Nội Thất Nhà Đẹp Ở Đây NT019",
    "description": "Mẫu website công ty thiết kế kiến trúc và thi công nội thất trọn gói căn hộ, biệt thự, nhà phố hiện đại.",
    "tags": [
      "Nội thất",
      "Thi công trọn gói",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT019-nhadepoday.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT019-nhadepoday.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_16",
    "packageName": "Gói website thiết kế & thi công nội thất",
    "status": "active",
    "order": 90.75
  },
  {
    "id": "NT020",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_17",
    "name": "Website Công Ty Thiết Kế Nội Thất & Phong Thủy An Gia Art NT020",
    "description": "Mẫu website studio thiết kế nội thất nghệ thuật, chế tác đồ gỗ mỹ nghệ và tư vấn không gian phong thủy.",
    "tags": [
      "Nội thất",
      "Kiến trúc",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT020-angiaart.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT020-angiaart.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_17",
    "packageName": "Gói website công ty thiết kế nội thất",
    "status": "active",
    "order": 90.8
  },
  {
    "id": "NT021",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_18",
    "name": "Website Thiết Kế Nội Thất Văn Phòng & Doanh Nghiệp ProSpace NT021",
    "description": "Mẫu website chuyên thiết kế, cung cấp và thi công nội thất văn phòng, bàn ghế công thái học và phòng họp.",
    "tags": [
      "Nội thất",
      "Nội thất văn phòng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT021-noithatvanphong.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT021-noithatvanphong.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_18",
    "packageName": "Gói website nội thất văn phòng",
    "status": "active",
    "order": 90.85
  },
  {
    "id": "NT022",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_19",
    "name": "Website Nội Thất Tủ Bếp & Không Gian Bếp Hiện Đại KitchenLux NT022",
    "description": "Mẫu website chuyên thiết kế, đóng tủ bếp thông minh, đảo bếp và cung cấp phụ kiện nội thất nhà bếp cao cấp.",
    "tags": [
      "Nội thất",
      "Nội thất bếp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT022-noithatbep.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT022-noithatbep.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_19",
    "packageName": "Gói website nội thất phòng bếp",
    "status": "active",
    "order": 90.9
  },
  {
    "id": "NT023",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_20",
    "name": "Website Nội Thất Phòng Ngủ & Giường Tủ Cao Cấp SleepWell NT023",
    "description": "Mẫu website showroom nội thất phòng ngủ, giường gỗ, tủ quần áo âm tường và giải pháp không gian nghỉ ngơi.",
    "tags": [
      "Nội thất",
      "Phòng ngủ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT023-noithatgiuong.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT023-noithatgiuong.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_20",
    "packageName": "Gói website nội thất phòng ngủ",
    "status": "active",
    "order": 90.95
  },
  {
    "id": "NT024",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_21",
    "name": "Website Showroom Bàn Ghế & Sofa Nghệ Thuật Mona Chair NT024",
    "description": "Mẫu website thương hiệu sản xuất và phân phối bàn ghế ăn, sofa phòng khách và nội thất rời thiết kế riêng.",
    "tags": [
      "Nội thất",
      "Bàn ghế Sofa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT024-noithatbanghe.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT024-noithatbanghe.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_21",
    "packageName": "Gói website showroom bàn ghế & sofa",
    "status": "active",
    "order": 91
  },
  {
    "id": "NT025",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_22",
    "name": "Website Thi Công Rèm Cửa, Nhôm Kính & Trang Trí Nội Thất NT025",
    "description": "Mẫu website đơn vị tư vấn, may đo và lắp đặt rèm cửa cao cấp, rèm tự động và hoàn thiện nội thất.",
    "tags": [
      "Nội thất",
      "Rèm cửa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT025-remcua.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT025-remcua.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_22",
    "packageName": "Gói website rèm cửa & trang trí nội thất",
    "status": "active",
    "order": 91.05
  },
  {
    "id": "XD021",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_21",
    "name": "Website Dịch Vụ Sửa Chữa, Cải Tạo Nhà & Chống Thấm MonaHomeFix XD021",
    "description": "Mẫu website công ty chuyên sửa chữa nhà trọn gói, cải tạo biệt thự, nâng tầng, sơn sửa và bảo trì công trình.",
    "tags": [
      "Xây dựng",
      "Sửa chữa nhà",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD021-monahomefix.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD021-monahomefix.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_21",
    "packageName": "Gói website sửa chữa & cải tạo công trình",
    "status": "active",
    "order": 121
  },
  {
    "id": "XD022",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_22",
    "name": "Website Thiết Kế & Thi Công Cảnh Quan Sân Vườn Landscaping XD022",
    "description": "Mẫu website nhà thầu thiết kế thi công cảnh quan đô thị, sân vườn biệt thự, hồ cá Koi và mảng xanh công trình.",
    "tags": [
      "Xây dựng",
      "Cảnh quan",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD022-landscaping.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD022-landscaping.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_22",
    "packageName": "Gói website thi công cảnh quan & xây dựng",
    "status": "active",
    "order": 122
  },
  {
    "id": "XD023",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_23",
    "name": "Website Chủ Đầu Tư & Tổng Thầu Dự Án Kingdom 101 XD023",
    "description": "Mẫu website giới thiệu dự án tổ hợp căn hộ thương mại, tiến độ thi công, mặt bằng kiến trúc và nhà thầu xây dựng.",
    "tags": [
      "Xây dựng",
      "Dự án cao cấp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD023-kingdom101.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD023-kingdom101.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_23",
    "packageName": "Gói website dự án xây dựng & bất động sản",
    "status": "active",
    "order": 123
  },
  {
    "id": "XD024",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_24",
    "name": "Website Kiến Trúc & Xây Dựng Tổ Hợp Khách Sạn Elevate XD024",
    "description": "Mẫu website thiết kế kiến trúc, thi công và vận hành tổ hợp khách sạn - tháp thương mại hiện đại.",
    "tags": [
      "Xây dựng",
      "Kiến trúc khách sạn",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD024-elevate.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD024-elevate.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_24",
    "packageName": "Gói website kiến trúc & xây dựng cao cấp",
    "status": "active",
    "order": 124
  },
  {
    "id": "XD025",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_25",
    "name": "Website Thi Công Biệt Thự Nghỉ Dưỡng Đồi Thông MountResort XD025",
    "description": "Mẫu website thiết kế và thi công khu nghỉ dưỡng sinh thái, bungalow gỗ và biệt thự nghỉ dưỡng vùng cao.",
    "tags": [
      "Xây dựng",
      "Biệt thự nghỉ dưỡng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD025-mountresort.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD025-mountresort.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_25",
    "packageName": "Gói website xây dựng resort & biệt thự",
    "status": "active",
    "order": 125
  },
  {
    "id": "XD026",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_26",
    "name": "Website Kiến Trúc Địa Trung Hải & Thi Công Resort Mykonos XD026",
    "description": "Mẫu website kiến trúc biệt thự biển phong cách Santorini - Địa Trung Hải, thi công hồ bơi vô cực và cảnh quan.",
    "tags": [
      "Xây dựng",
      "Kiến trúc biển",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD026-mykonos.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD026-mykonos.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_26",
    "packageName": "Gói website kiến trúc biệt thự biển",
    "status": "active",
    "order": 126
  },
  {
    "id": "XD027",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_27",
    "name": "Website Tổng Thầu Xây Dựng Khu Nghỉ Dưỡng Encore XD027",
    "description": "Mẫu website giới thiệu năng lực thi công các tổ hợp nghỉ dưỡng, khách sạn 5 sao và biệt thự ven biển.",
    "tags": [
      "Xây dựng",
      "Tổng thầu",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD027-encore.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD027-encore.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_27",
    "packageName": "Gói website tổng thầu xây dựng",
    "status": "active",
    "order": 127
  },
  {
    "id": "XD028",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_28",
    "name": "Website Kiến Trúc & Thi Công Tổ Hợp Nghỉ Dưỡng SwingOne XD028",
    "description": "Mẫu website trình bày dự án kiến trúc xanh, biệt thự sinh thái và giải pháp thi công hoàn thiện đồng bộ.",
    "tags": [
      "Xây dựng",
      "Kiến trúc xanh",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD028-swingone.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD028-swingone.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_28",
    "packageName": "Gói website kiến trúc & thi công",
    "status": "active",
    "order": 128
  },
  {
    "id": "SPA010",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_7",
    "name": "Website Viện Chăm Sóc Da & Thẩm Mỹ Bliss Beauty SPA010",
    "description": "Mẫu website spa cao cấp, liệu trình trẻ hóa làn da, massage đá nóng và đặt lịch hẹn trực tuyến.",
    "tags": [
      "Spa",
      "Chăm sóc da",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA010-blissbeauty.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA010-blissbeauty.webp",
    "demoUrl": "/demo/mock-spa?template=spa_7",
    "packageName": "Gói website spa & thẩm mỹ",
    "status": "active",
    "order": 20.3
  },
  {
    "id": "SPA011",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_8",
    "name": "Website Spa Trị Liệu & Dược Mỹ Phẩm Beauty Glow SPA011",
    "description": "Mẫu website spa kết hợp phân phối dược mỹ phẩm thiên nhiên, soi da chuyên sâu và phác đồ điều trị chuẩn y khoa.",
    "tags": [
      "Spa",
      "Dược mỹ phẩm",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA011-beautyglow.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA011-beautyglow.webp",
    "demoUrl": "/demo/mock-spa?template=spa_8",
    "packageName": "Gói website spa & mỹ phẩm",
    "status": "active",
    "order": 20.35
  },
  {
    "id": "TMV010",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_7",
    "name": "Website Phòng Khám Da Liễu & Thẩm Mỹ Flawless Skin TMV010",
    "description": "Mẫu website clinic da liễu thẩm mỹ, điều trị sắc tố da, bảo vệ da chuyên sâu và dược mỹ phẩm cao cấp.",
    "tags": [
      "Thẩm mỹ viện",
      "Da liễu",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV010-flawless.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV010-flawless.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_7",
    "packageName": "Gói website clinic da liễu thẩm mỹ",
    "status": "active",
    "order": 30.3
  },
  {
    "id": "TMV011",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_8",
    "name": "Website Hệ Thống Clinic Làm Đẹp & Mỹ Phẩm Hasaki Beauty TMV011",
    "description": "Mẫu website hệ thống phòng khám làm đẹp kết hợp siêu thị dược mỹ phẩm chính hãng và đặt lịch điều trị da.",
    "tags": [
      "Thẩm mỹ viện",
      "Chuỗi Clinic",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV011-hasaki.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV011-hasaki.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_8",
    "packageName": "Gói website chuỗi thẩm mỹ & dược mỹ phẩm",
    "status": "active",
    "order": 30.35
  },
  {
    "id": "PK008",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_5",
    "name": "Website Phòng Khám Chuyên Khoa Dinh Dưỡng & Sức Khỏe Dietitian PK008",
    "description": "Mẫu website phòng khám tư vấn dinh dưỡng, kiểm soát cân nặng, xét nghiệm vi chất và đặt lịch bác sĩ chuyên khoa.",
    "tags": [
      "Phòng khám",
      "Dinh dưỡng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK008-dietitian.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK008-dietitian.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_5",
    "packageName": "Gói website phòng khám chuyên khoa",
    "status": "active",
    "order": 40.2
  },
  {
    "id": "PK009",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_6",
    "name": "Website Trung Tâm Chăm Sóc Sức Khỏe & Dược Phẩm Nhật Bản Japana PK009",
    "description": "Mẫu website trung tâm y tế dự phòng, thực phẩm bảo vệ sức khỏe Nhật Bản và tư vấn bác sĩ gia đình.",
    "tags": [
      "Phòng khám",
      "Y tế dự phòng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK009-japana.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK009-japana.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_6",
    "packageName": "Gói website trung tâm sức khỏe & dược phẩm",
    "status": "active",
    "order": 40.25
  },
  {
    "id": "NK008",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_5",
    "name": "Website Nha Khoa Thẩm Mỹ & Chăm Sóc Nụ Cười VaniSmile NK008",
    "description": "Mẫu website nha khoa thẩm mỹ hiện đại, dịch vụ bọc răng sứ, tẩy trắng răng Laser và sản phẩm chăm sóc răng miệng.",
    "tags": [
      "Nha khoa",
      "Nha khoa thẩm mỹ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK008-vanismile.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK008-vanismile.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_5",
    "packageName": "Gói website nha khoa thẩm mỹ",
    "status": "active",
    "order": 10.2
  },
  {
    "id": "TMV012",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_9",
    "name": "Website Viện Thẩm Mỹ & Chăm Sóc Sắc Đẹp Hàn Quốc CorVN TMV012",
    "description": "Mẫu website viện thẩm mỹ công nghệ Hàn Quốc, trẻ hóa da không xâm lấn và liệu trình chăm sóc sắc đẹp toàn diện.",
    "tags": [
      "Thẩm mỹ viện",
      "Chuẩn Hàn",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV012-corvn.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV012-corvn.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_9",
    "packageName": "Gói website thẩm mỹ viện Hàn Quốc",
    "status": "active",
    "order": 30.4
  },
  {
    "id": "NH006",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_6",
    "name": "Website Dịch Vụ Tiệc Lưu Động & Nhà Hàng Sự Kiện Mona Catering NH006",
    "description": "Mẫu website nhà hàng tổ chức tiệc cưới, tiệc doanh nghiệp, buffet lưu động và đặt bàn sự kiện trọn gói.",
    "tags": [
      "Nhà hàng",
      "Catering & Sự kiện",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH006-catering.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH006-catering.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_6",
    "packageName": "Gói website nhà hàng & dịch vụ tiệc",
    "status": "active",
    "order": 110.25
  },
  {
    "id": "NH007",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_7",
    "name": "Website Hầm Rượu Vang & Nhà Hàng Âu Mona Winery NH007",
    "description": "Mẫu website nhà hàng Fine Dining kết hợp hầm rượu vang thượng hạng, thực đơn Steakhouse và đặt phòng VIP.",
    "tags": [
      "Nhà hàng",
      "Fine Dining & Wine",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH007-winery.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH007-winery.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_7",
    "packageName": "Gói website nhà hàng rượu vang cao cấp",
    "status": "active",
    "order": 110.3
  },
  {
    "id": "CF006",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_6",
    "name": "Website Tiệm Nước Ép Trái Cây, Sinh Tố & Detox MonaJuice CF006",
    "description": "Mẫu website quán cafe sinh tố, nước ép lạnh Cold-Pressed, trà trái cây nhiệt đới và đặt món giao tận nơi.",
    "tags": [
      "Quán cafe",
      "Nước ép & Trà",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_6-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_6-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_6",
    "packageName": "Gói website quán nước ép & cafe",
    "status": "active",
    "order": 120.25
  },
  {
    "id": "CF007",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_7",
    "name": "Website Tiệm Trà, Cà Phê & Quà Tặng Mùa Lễ Hội TetHoliday CF007",
    "description": "Mẫu website thương hiệu trà đạo, cà phê đặc sản kết hợp hộp quà thưởng trà cao cấp và không gian thưởng thức.",
    "tags": [
      "Quán cafe",
      "Trà & Đặc sản",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_7-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_7-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_7",
    "packageName": "Gói website tiệm trà & ẩm thực",
    "status": "active",
    "order": 120.3
  },
  {
    "id": "SC006",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_6",
    "name": "Website Studio Trang Sức Cưới & Nhiếp Ảnh Kim Cương Mona Diamond SC006",
    "description": "Mẫu website studio trang sức cưới cao cấp, bộ sưu tập nhẫn cầu hôn kim cương và lookbook ảnh cưới sang trọng.",
    "tags": [
      "Studio chụp ảnh",
      "Trang sức cưới",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_6-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_6-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_6",
    "packageName": "Gói website studio cưới & trang sức",
    "status": "active",
    "order": 130.25
  },
  {
    "id": "SC007",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_7",
    "name": "Website Studio Hoa Cưới Nghệ Thuật & Trang Trí Lễ Cưới Mona Flower SC007",
    "description": "Mẫu website studio thiết kế hoa cưới cầm tay cô dâu, trang trí lễ đường, cổng hoa và nhiếp ảnh phóng sự cưới.",
    "tags": [
      "Studio chụp ảnh",
      "Hoa cưới",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_7-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_7-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_7",
    "packageName": "Gói website studio hoa cưới & sự kiện",
    "status": "active",
    "order": 130.3
  },
  {
    "id": "SC008",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_8",
    "name": "Website Studio Ảnh Cưới & Trang Sức Cao Cấp Dazzle Bridal SC008",
    "description": "Mẫu website studio váy cưới, trang sức cô dâu và dịch vụ chụp ảnh cưới trọn gói phong cách châu Âu.",
    "tags": [
      "Studio chụp ảnh",
      "Bridal Luxury",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_8-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_8-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_8",
    "packageName": "Gói website studio ảnh cưới cao cấp",
    "status": "active",
    "order": 130.35
  },
  {
    "id": "SC009",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_9",
    "name": "Website Studio Lookbook & Trang Sức Cưới Diamond Deals SC009",
    "description": "Mẫu website trình bày bộ sưu tập trang sức cưới, lookbook thời trang và đặt lịch thử váy/trang sức riêng tư.",
    "tags": [
      "Studio chụp ảnh",
      "Lookbook",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_9-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_9-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_9",
    "packageName": "Gói website studio lookbook & cưới",
    "status": "active",
    "order": 130.4
  },
  {
    "id": "ST009",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_6",
    "name": "Website Học Viện Tạo Mẫu Tóc & Phong Cách StyleThread ST009",
    "description": "Mẫu website salon tạo mẫu tóc, định hình phong cách cá nhân, chăm sóc tóc chuyên sâu và bộ sưu tập xu hướng mới.",
    "tags": [
      "Hair salon",
      "Styling",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_6-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_6-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_6",
    "packageName": "Gói website salon tóc & styling",
    "status": "active",
    "order": 50.25
  },
  {
    "id": "ST010",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_7",
    "name": "Website Salon Tóc & Thời Trang Cao Cấp TrendLuxe ST010",
    "description": "Mẫu website salon làm đẹp, tạo kiểu tóc thời thượng, tư vấn màu nhuộm và chăm sóc tóc chuẩn salon quốc tế.",
    "tags": [
      "Hair salon",
      "TrendLuxe",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_7-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_7-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_7",
    "packageName": "Gói website hair salon cao cấp",
    "status": "active",
    "order": 50.3
  },
  {
    "id": "ST011",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_8",
    "name": "Website Viện Tạo Mẫu Tóc & Makeup Nữ MillaMona ST011",
    "description": "Mẫu website viện tạo mẫu tóc nữ, uốn sóng Hàn Quốc, phục hồi Keratin và trang điểm dự tiệc sang trọng.",
    "tags": [
      "Hair salon",
      "Viện tóc nữ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_8-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_8-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_8",
    "packageName": "Gói website viện tạo mẫu tóc & makeup",
    "status": "active",
    "order": 50.35
  },
  {
    "id": "ST012",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_9",
    "name": "Website Salon Tóc & Chăm Sóc Sắc Đẹp Sparkle Style ST012",
    "description": "Mẫu website salon tóc hiện đại, giới thiệu các gói combo uốn - nhuộm - phục hồi và sản phẩm dưỡng tóc hữu cơ.",
    "tags": [
      "Hair salon",
      "Sparkle Style",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_9-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_9-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_9",
    "packageName": "Gói website hair salon chuyên nghiệp",
    "status": "active",
    "order": 50.4
  },
  {
    "id": "GYM007",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_7",
    "name": "Website Câu Lạc Bộ Thể Thao & Học Viện Golf Triompher GYM007",
    "description": "Mẫu website câu lạc bộ thể thao thượng lưu, sân tập Golf 3D, huấn luyện viên cá nhân và đặt lịch tập luyện.",
    "tags": [
      "Gym fitness",
      "Golf & Sport Club",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_7-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_7-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_7",
    "packageName": "Gói website câu lạc bộ thể thao & golf",
    "status": "active",
    "order": 140.3
  },
  {
    "id": "GYM008",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_8",
    "name": "Website Trung Tâm Thể Hình & CLB Golf Brentwood GYM008",
    "description": "Mẫu website tổ hợp thể thao, phòng gym cao cấp, huấn luyện thể lực chuyên sâu và hội viên VIP.",
    "tags": [
      "Gym fitness",
      "CLB Thể thao",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_8-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_8-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_8",
    "packageName": "Gói website trung tâm thể thao & fitness",
    "status": "active",
    "order": 140.35
  },
  {
    "id": "GYM009",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_9",
    "name": "Website CLB Đạp Xe Thể Thao & Thiết Bị Fitness SpeedRiders GYM009",
    "description": "Mẫu website câu lạc bộ đạp xe thể thao, thiết bị tập luyện Cardio, phụ kiện fitness và cộng đồng vận động viên.",
    "tags": [
      "Gym fitness",
      "Cycling & Cardio",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_9-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_9-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_9",
    "packageName": "Gói website thể thao & thiết bị tập luyện",
    "status": "active",
    "order": 140.4
  },
  {
    "id": "GYM010",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_10",
    "name": "Website Trung Tâm Thể Thao & Trang Phục Tập Luyện ProSport GYM010",
    "description": "Mẫu website trung tâm huấn luyện thể chất kết hợp cửa hàng giày tập, trang phục gym và phụ kiện thể thao.",
    "tags": [
      "Gym fitness",
      "ProSport",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_10-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_10",
    "packageName": "Gói website trung tâm thể thao & phụ kiện",
    "status": "active",
    "order": 140.45
  },
  {
    "id": "OTO008",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_8",
    "name": "Website Trung Tâm Bảo Dưỡng & Cho Thuê Xe Hạng Sang ThuêXeVIP24h OTO008",
    "description": "Mẫu website garage chăm sóc ô tô kết hợp dịch vụ cho thuê xe du lịch, xe cưới hạng sang và cứu hộ 24/7.",
    "tags": [
      "Garage ô tô",
      "Thuê xe & Bảo dưỡng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_8-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_8-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_8",
    "packageName": "Gói website garage ô tô & dịch vụ xe",
    "status": "active",
    "order": 150.35
  },
  {
    "id": "OTO009",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_9",
    "name": "Website Showroom Phương Tiện Xanh & Bảo Dưỡng Xe Điện XeTiệnÍch OTO009",
    "description": "Mẫu website showroom phương tiện di chuyển thông minh, bảo dưỡng định kỳ, thay thế phụ tùng và độ xe.",
    "tags": [
      "Garage ô tô",
      "Showroom xe",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_9-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_9-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_9",
    "packageName": "Gói website showroom & dịch vụ kỹ thuật xe",
    "status": "active",
    "order": 150.4
  },
  {
    "id": "OTO010",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_10",
    "name": "Website Trung Tâm Độ Xe & Phụ Kiện Thể Thao XeHiệnĐại OTO010",
    "description": "Mẫu website chuyên cung cấp phụ tùng, nâng cấp hiệu suất, chăm sóc xe chuyên nghiệp và bảo hành điện tử.",
    "tags": [
      "Garage ô tô",
      "Phụ tùng & Độ xe",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_10-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_10",
    "packageName": "Gói website trung tâm phụ tùng & chăm sóc xe",
    "status": "active",
    "order": 150.45
  },
  {
    "id": "OTO011",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_11",
    "name": "Website Showroom & Xưởng Dịch Vụ Kỹ Thuật Mona Sport Auto OTO011",
    "description": "Mẫu website showroom trưng bày xe, đặt lịch bảo dưỡng trực tuyến, tư vấn kỹ thuật và cung cấp đồ chơi xe.",
    "tags": [
      "Garage ô tô",
      "Xưởng dịch vụ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_11-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_11",
    "packageName": "Gói website showroom & garage",
    "status": "active",
    "order": 150.5
  },
  {
    "id": "LUAT011",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_8",
    "name": "Website Công Ty Luật Di Trú, Lao Động & Định Cư Quốc Tế Adept Law LUAT011",
    "description": "Mẫu website văn phòng luật chuyên tư vấn pháp lý định cư, giấy phép lao động quốc tế, đầu tư nước ngoài và visa.",
    "tags": [
      "Luật sư",
      "Luật di trú & Đầu tư",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT011-adept.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT011-adept.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_8",
    "packageName": "Gói website hãng luật di trú & đầu tư",
    "status": "active",
    "order": 60.35
  },
  {
    "id": "LUAT012",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_9",
    "name": "Website Văn Phòng Tư Vấn Pháp Lý Doanh Nghiệp & Sở Hữu Trí Tuệ YTTran LUAT012",
    "description": "Mẫu website công ty tư vấn pháp chế doanh nghiệp, đăng ký nhãn hiệu, thành lập công ty và giải quyết tranh chấp.",
    "tags": [
      "Luật sư",
      "Pháp chế doanh nghiệp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT012-yttran.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT012-yttran.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_9",
    "packageName": "Gói website tư vấn pháp lý doanh nghiệp",
    "status": "active",
    "order": 60.4
  },
  {
    "id": "VS009",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_6",
    "name": "Website Công Ty Vệ Sinh Môi Trường & Xử Lý Chất Thải EcoStream VS009",
    "description": "Mẫu website doanh nghiệp dịch vụ vệ sinh công nghiệp xanh, xử lý môi trường, khử khuẩn nhà máy và tòa nhà.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Môi trường xanh",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS009-ecostream.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS009-ecostream.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_6",
    "packageName": "Gói website vệ sinh công nghiệp & môi trường",
    "status": "active",
    "order": 80.25
  },
  {
    "id": "VS010",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_7",
    "name": "Website Dịch Vụ Vệ Sinh Chăm Sóc Cảnh Quan & Tòa Nhà Fiorello Clean VS010",
    "description": "Mẫu website dịch vụ vệ sinh định kỳ văn phòng, chăm sóc cây xanh nội thất và bảo dưỡng khuôn viên tòa nhà.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Chăm sóc tòa nhà",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS010-fiorello.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS010-fiorello.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_7",
    "packageName": "Gói website vệ sinh & chăm sóc cảnh quan",
    "status": "active",
    "order": 80.3
  },
  {
    "id": "DN016",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_13",
    "name": "Website Tập Đoàn Giải Pháp Nhân Sự & Công Nghệ AsiaWhiteCollar DN016",
    "description": "Mẫu website hồ sơ năng lực tập đoàn tư vấn giải pháp quản trị, chuyển đổi số và cung ứng nhân sự cấp cao B2B.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Tư vấn & Công nghệ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_13-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_13",
    "packageName": "Gói website hồ sơ năng lực tập đoàn",
    "status": "active",
    "order": 1.6
  },
  {
    "id": "DN017",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_14",
    "name": "Website Tập Đoàn Lữ Hành & Sự Kiện Quốc Tế PeakJourneys DN017",
    "description": "Mẫu website doanh nghiệp lữ hành quốc tế, tổ chức hội nghị MICE, team building doanh nghiệp và đặt dịch vụ toàn cầu.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "MICE & Du lịch",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_14-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_14",
    "packageName": "Gói website tập đoàn dịch vụ & lữ hành",
    "status": "active",
    "order": 1.65
  },
  {
    "id": "DN018",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_15",
    "name": "Website Công Ty Giải Pháp Phần Mềm & Hạ Tầng Số TKW Thương Hiệu DN018",
    "description": "Mẫu website công ty công nghệ thông tin, phát triển phần mềm doanh nghiệp, ERP, Cloud và giải pháp thương hiệu số.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Công nghệ phần mềm",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_15-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_15",
    "packageName": "Gói website công ty công nghệ & phần mềm",
    "status": "active",
    "order": 1.7
  },
  {
    "id": "DN019",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_16",
    "name": "Website Tập Đoàn Thương Mại & Logistics Quốc Tế GlobalImport DN019",
    "description": "Mẫu website công ty xuất nhập khẩu, ủy thác thương mại quốc tế, vận chuyển xuyên biên giới và kho vận B2B.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Xuất nhập khẩu",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_16-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_16",
    "packageName": "Gói website xuất nhập khẩu & logistics",
    "status": "active",
    "order": 1.75
  },
  {
    "id": "B2B015",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_12",
    "name": "Website Nhà Máy Sản Xuất & Gia Công Bao Bì Công Nghiệp USATDMade B2B015",
    "description": "Mẫu website nhà máy in ấn và sản xuất bao bì carton, bao bì giấy thương hiệu theo yêu cầu cho doanh nghiệp B2B.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Sản xuất bao bì",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_12-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_12",
    "packageName": "Gói website nhà máy sản xuất B2B",
    "status": "active",
    "order": 2.55
  },
  {
    "id": "B2B016",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_13",
    "name": "Website Xưởng In Ấn Công Nghiệp & Vật Tư Quảng Cáo PrintPro B2B016",
    "description": "Mẫu website xưởng in vải kỹ thuật số, gia công ấn phẩm công nghiệp và cung ứng vật tư ngành in số lượng lớn.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "In ấn công nghiệp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_13-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_13",
    "packageName": "Gói website xưởng in & sản xuất B2B",
    "status": "active",
    "order": 2.6
  },
  {
    "id": "B2B017",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_14",
    "name": "Website Phân Phối Văn Phòng Phẩm & Thiết Bị Doanh Nghiệp ProOffice B2B017",
    "description": "Mẫu website tổng kho phân phối văn phòng phẩm, máy in, thiết bị văn phòng và hợp đồng cung ứng định kỳ cho công ty.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Thiết bị văn phòng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_14-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_14",
    "packageName": "Gói website phân phối văn phòng phẩm B2B",
    "status": "active",
    "order": 2.65
  },
  {
    "id": "B2B018",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_15",
    "name": "Website Phân Phối Công Cụ Cơ Khí & Thiết Bị Công Nghiệp MetaTools B2B018",
    "description": "Mẫu website siêu thị máy móc cơ khí, dụng cụ cầm tay, thiết bị đo lường và vật tư bảo hộ lao động cho nhà xưởng.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Máy móc cơ khí",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_15-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_15",
    "packageName": "Gói website thiết bị cơ khí & công nghiệp",
    "status": "active",
    "order": 2.7
  },
  {
    "id": "B2B019",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_16",
    "name": "Website Phân Phối Thiết Bị Công Nghệ & Linh Kiện Điện Tử E-Tech B2B019",
    "description": "Mẫu website nhà phân phối laptop doanh nghiệp, máy trạm, màn hình chuyên dụng và giải pháp phần cứng CNTT.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Thiết bị CNTT",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_16-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_16",
    "packageName": "Gói website phân phối thiết bị CNTT",
    "status": "active",
    "order": 2.75
  },
  {
    "id": "B2B020",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_17",
    "name": "Website Phân Phối Thiết Bị Âm Thanh & Hội Nghị SpeakerHub B2B020",
    "description": "Mẫu website chuyên cung cấp hệ thống âm thanh hội trường, loa chuyên nghiệp, thiết bị phòng họp và phụ kiện số.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Thiết bị âm thanh",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_17-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_17",
    "packageName": "Gói website thiết bị âm thanh & hội nghị",
    "status": "active",
    "order": 2.8
  },
  {
    "id": "B2B021",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_18",
    "name": "Website Nhà Máy Chế Biến & Xuất Khẩu Thực Phẩm Takimex B2B021",
    "description": "Mẫu website công ty chế biến nông sản, thực phẩm đóng gói và cung ứng nguyên liệu cho chuỗi nhà hàng - siêu thị.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Chế biến thực phẩm",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_18-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_18-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_18",
    "packageName": "Gói website nhà máy thực phẩm & xuất khẩu",
    "status": "active",
    "order": 2.85
  },
  {
    "id": "B2B022",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_19",
    "name": "Website Công Ty Nhập Khẩu & Phân Phối Thực Phẩm AusFood B2B022",
    "description": "Mẫu website nhà phân phối thực phẩm nhập khẩu, gia vị cao cấp và nguyên liệu ẩm thực cho kênh Horeca.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Thực phẩm Horeca",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_19-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_19-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_19",
    "packageName": "Gói website phân phối thực phẩm B2B",
    "status": "active",
    "order": 2.9
  },
  {
    "id": "LD010",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_7",
    "name": "Website Landing Page Đặt Tour & Trải Nghiệm Du Lịch TripHaven LD010",
    "description": "Mẫu landing page chuyển đổi cao cho chiến dịch mở bán tour nghỉ dưỡng, combo vé máy bay - khách sạn và thu thập lead.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Booking & Tour",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_7-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_7-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_7",
    "packageName": "Gói landing page du lịch & đặt dịch vụ",
    "status": "active",
    "order": 3.3
  },
  {
    "id": "LD011",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_8",
    "name": "Website Landing Page Chiến Dịch Du Lịch Khám Phá TravelSpark LD011",
    "description": "Mẫu website tăng trưởng doanh số ngành lữ hành, ưu đãi giờ chót, lịch trình trực quan và biểu mẫu đăng ký tư vấn nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "TravelSpark",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_8-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_8-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_8",
    "packageName": "Gói landing page tăng trưởng doanh số",
    "status": "active",
    "order": 3.35
  },
  {
    "id": "LD012",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_9",
    "name": "Website Landing Page Khóa Học Thiết Kế Sáng Tạo CreativeSpot LD012",
    "description": "Mẫu landing page tuyển sinh khóa học kỹ năng sáng tạo, thiết kế đồ họa với lộ trình học, mentor và ưu đãi học phí.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Tuyển sinh khóa học",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_9-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_9-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_9",
    "packageName": "Gói landing page tuyển sinh chuyển đổi cao",
    "status": "active",
    "order": 3.4
  },
  {
    "id": "LD013",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_10",
    "name": "Website Landing Page Chiến Dịch Quà Tặng Doanh Nghiệp TetGift LD013",
    "description": "Mẫu landing page bán hàng mùa lễ hội và quà tặng doanh nghiệp số lượng lớn, tích hợp bảng chiết khấu và đặt hàng nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Quà tặng doanh nghiệp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_10-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_10",
    "packageName": "Gói landing page chiến dịch bán hàng",
    "status": "active",
    "order": 3.45
  },
  {
    "id": "XD029",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_29",
    "name": "Website Kiến Trúc & Thi Công Khách Sạn Mona Hotel XD029",
    "description": "Mẫu website thiết kế kiến trúc, thi công hoàn thiện và quản lý vận hành tổ hợp khách sạn chuẩn 5 sao.",
    "tags": [
      "Xây dựng",
      "Kiến trúc khách sạn",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD029-monahotel.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD029-monahotel.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_29",
    "packageName": "Gói website xây dựng & khách sạn",
    "status": "active",
    "order": 129
  },
  {
    "id": "XD030",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_30",
    "name": "Website Chủ Đầu Tư & Xây Dựng Tổ Hợp Resort Hotec XD030",
    "description": "Mẫu website giới thiệu dự án bất động sản nghỉ dưỡng, năng lực tổng thầu xây dựng và quy hoạch kiến trúc.",
    "tags": [
      "Xây dựng",
      "Bất động sản nghỉ dưỡng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD030-hotec.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD030-hotec.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_30",
    "packageName": "Gói website chủ đầu tư & xây dựng",
    "status": "active",
    "order": 130
  },
  {
    "id": "XD031",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_31",
    "name": "Website Thiết Kế & Thi Công Tổ Hợp Luxury Hotel XD031",
    "description": "Mẫu website kiến trúc khách sạn hạng sang, thi công nội ngoại thất đồng bộ và giới thiệu các hạng phòng mẫu.",
    "tags": [
      "Xây dựng",
      "Luxury Hotel",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD031-luxuryhotel.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD031-luxuryhotel.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_31",
    "packageName": "Gói website kiến trúc & thi công cao cấp",
    "status": "active",
    "order": 131
  },
  {
    "id": "XD032",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_32",
    "name": "Website Kiến Trúc & Thi Công Resort Nghỉ Dưỡng Howello XD032",
    "description": "Mẫu website công ty kiến trúc và xây dựng khu nghỉ dưỡng ven biển, biệt thự hồ bơi và cảnh quan sinh thái.",
    "tags": [
      "Xây dựng",
      "Resort Villa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/xay-dung/XD032-howello.webp",
    "longPreviewImage": "/assets/anh-template/xay-dung/XD032-howello.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_32",
    "packageName": "Gói website xây dựng khu nghỉ dưỡng",
    "status": "active",
    "order": 132
  },
  {
    "id": "NT026",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_23",
    "name": "Website Thiết Kế Nội Thất Phòng Tắm & Thiết Bị Vệ Sinh Cao Cấp NT026",
    "description": "Mẫu website showroom nội thất phòng tắm, bồn tắm massage, sen vòi nhập khẩu và giải pháp không gian Spa tại gia.",
    "tags": [
      "Nội thất",
      "Nội thất phòng tắm",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT026-noithatnhatam.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT026-noithatnhatam.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_23",
    "packageName": "Gói website showroom nội thất phòng tắm",
    "status": "active",
    "order": 91.1
  },
  {
    "id": "NT027",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_24",
    "name": "Website Showroom Nội Thất Sáng Tạo & Trang Trí Nhà Đẹp NT027",
    "description": "Mẫu website trưng bày bộ sưu tập nội thất phòng khách, bàn trà, đèn trang trí và dịch vụ thiết kế 3D trọn gói.",
    "tags": [
      "Nội thất",
      "Showroom nội thất",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT027-noithat.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT027-noithat.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_24",
    "packageName": "Gói website thiết kế & bán hàng nội thất",
    "status": "active",
    "order": 91.15
  },
  {
    "id": "NT028",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_25",
    "name": "Website Thiết Kế & Chế Tác Đồ Nội Thất HDP Furniture NT028",
    "description": "Mẫu website thương hiệu thiết kế và sản xuất nội thất gỗ cao cấp, sofa da Ý và thi công căn hộ hạng sang.",
    "tags": [
      "Nội thất",
      "HDP Furniture",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT028-hdpfurniture.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT028-hdpfurniture.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_25",
    "packageName": "Gói website thương hiệu nội thất cao cấp",
    "status": "active",
    "order": 91.2
  },
  {
    "id": "NT029",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_26",
    "name": "Website Nội Thất Đương Đại & Kiến Trúc Không Gian Beda Furniture NT029",
    "description": "Mẫu website studio thiết kế nội thất tối giản, phân phối bàn ghế thiết kế Bắc Âu và tư vấn cải tạo không gian sống.",
    "tags": [
      "Nội thất",
      "Beda Furniture",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/noi-that/NT029-bedafurniture.webp",
    "longPreviewImage": "/assets/anh-template/noi-that/NT029-bedafurniture.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_26",
    "packageName": "Gói website showroom nội thất hiện đại",
    "status": "active",
    "order": 91.25
  },
  {
    "id": "TA022",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_19",
    "name": "Website Trung Tâm Tư Vấn Du Học & Anh Ngữ Quốc Tế Singapore TA022",
    "description": "Mẫu website trung tâm luyện thi tiếng Anh học thuật, tư vấn lộ trình du học Singapore và săn học bổng chính phủ.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Du học Singapore",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA022-duhocsing.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA022-duhocsing.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_19",
    "packageName": "Gói website trung tâm ngoại ngữ & du học",
    "status": "active",
    "order": 70.9
  },
  {
    "id": "TA023",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_20",
    "name": "Website Trường Mầm Non & Anh Ngữ Năng Khiếu KidsWorld Sport TA023",
    "description": "Mẫu website trường mầm non quốc tế kết hợp đào tạo tiếng Anh phản xạ và phát triển thể chất toàn diện cho trẻ.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Anh ngữ thiếu nhi",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA023-kidsworldsport.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA023-kidsworldsport.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_20",
    "packageName": "Gói website trường mầm non & ngoại ngữ",
    "status": "active",
    "order": 70.95
  },
  {
    "id": "TA024",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_21",
    "name": "Website Học Viện Anh Ngữ Thiếu Nhi & Luyện Chữ KidsWorld TA024",
    "description": "Mẫu website học viện giáo dục sớm, tiếng Anh chuẩn Cambridge Starters/Movers/Flyers và kỹ năng sống cho bé.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Cambridge Kids",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA024-kidsworld.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA024-kidsworld.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_21",
    "packageName": "Gói website học viện anh ngữ trẻ em",
    "status": "active",
    "order": 71
  },
  {
    "id": "TA025",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_22",
    "name": "Website Hệ Thống Trường Song Ngữ Quốc Tế KidsWorld Campus TA025",
    "description": "Mẫu website hệ thống giáo dục song ngữ, giới thiệu chương trình đào tạo quốc tế, đội ngũ giáo viên bản ngữ và tuyển sinh.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Trường song ngữ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/trung-tam-tieng-anh/TA025-kidsworld2.webp",
    "longPreviewImage": "/assets/anh-template/trung-tam-tieng-anh/TA025-kidsworld2.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_22",
    "packageName": "Gói website hệ thống giáo dục song ngữ",
    "status": "active",
    "order": 71.05
  },
  {
    "id": "NK009",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_6",
    "name": "Website Nha Khoa Quốc Tế & Chăm Sóc Nụ Cười Hachi Dental NK009",
    "description": "Mẫu website phòng khám nha khoa thẩm mỹ kết hợp phân phối sản phẩm chăm sóc răng miệng và đặt lịch bác sĩ.",
    "tags": [
      "Nha khoa",
      "Chăm sóc răng miệng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK009-hachidental.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK009-hachidental.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_6",
    "packageName": "Gói website nha khoa & chăm sóc nụ cười",
    "status": "active",
    "order": 10.25
  },
  {
    "id": "NK010",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_7",
    "name": "Website Nha Khoa Trẻ Em & Chỉnh Nha Không Đau Maitri Dental NK010",
    "description": "Mẫu website chuyên khoa nha khoa trẻ em, niềng răng tăng trưởng, tầm soát răng sữa và giáo dục vệ sinh răng miệng.",
    "tags": [
      "Nha khoa",
      "Nha khoa trẻ em",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK010-maitridental.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK010-maitridental.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_7",
    "packageName": "Gói website nha khoa gia đình & trẻ em",
    "status": "active",
    "order": 10.3
  },
  {
    "id": "NK011",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_8",
    "name": "Website Trung Tâm Implant & Nha Khoa Kỹ Thuật Số VioSmile NK011",
    "description": "Mẫu website trung tâm cấy ghép Implant Thụy Sĩ, thiết kế nụ cười kỹ thuật số và bảng giá dịch vụ minh bạch.",
    "tags": [
      "Nha khoa",
      "Implant kỹ thuật số",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK011-viosmile.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK011-viosmile.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_8",
    "packageName": "Gói website trung tâm Implant & nha khoa",
    "status": "active",
    "order": 10.35
  },
  {
    "id": "NK012",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_9",
    "name": "Website Viện Nha Khoa Thẩm Mỹ Hoàng Gia Royal Smile NK012",
    "description": "Mẫu website viện nha khoa tiêu chuẩn 5 sao, bọc răng sứ Veneer siêu mỏng, phòng điều trị VIP và bảo hành điện tử.",
    "tags": [
      "Nha khoa",
      "Royal Smile",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-khoa/NK012-royalsmile.webp",
    "longPreviewImage": "/assets/anh-template/nha-khoa/NK012-royalsmile.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_9",
    "packageName": "Gói website viện nha khoa thẩm mỹ 5 sao",
    "status": "active",
    "order": 10.4
  },
  {
    "id": "SPA012",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_9",
    "name": "Website Khu Nghỉ Dưỡng Khoáng Nóng & Trị Liệu SwingFour Spa SPA012",
    "description": "Mẫu website tổ hợp spa nghỉ dưỡng, tắm khoáng nóng Onsen, trị liệu thảo dược thiên nhiên và đặt gói thư giãn.",
    "tags": [
      "Spa",
      "Resort Spa & Onsen",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA012-swingfour.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA012-swingfour.webp",
    "demoUrl": "/demo/mock-spa?template=spa_9",
    "packageName": "Gói website resort spa & dưỡng sinh",
    "status": "active",
    "order": 20.4
  },
  {
    "id": "SPA013",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_10",
    "name": "Website Viện Dưỡng Sinh Thảo Mộc & Chăm Sóc Sắc Đẹp MountSpa SPA013",
    "description": "Mẫu website spa trị liệu cổ vai gáy, xông hơi đá muối Himalaya, chăm sóc da chuyên sâu và đặt phòng trị liệu VIP.",
    "tags": [
      "Spa",
      "Dưỡng sinh thảo mộc",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA013-mountspa.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA013-mountspa.webp",
    "demoUrl": "/demo/mock-spa?template=spa_10",
    "packageName": "Gói website viện dưỡng sinh & spa",
    "status": "active",
    "order": 20.45
  },
  {
    "id": "SPA014",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_11",
    "name": "Website Trung Tâm Spa Hoàng Gia & Chăm Sóc Toàn Thân LuxeSpa SPA014",
    "description": "Mẫu website spa cao cấp phong cách châu Âu, liệu trình trẻ hóa làn da, massage tinh dầu và thẻ hội viên ưu đãi.",
    "tags": [
      "Spa",
      "LuxeSpa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA014-luxespa.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA014-luxespa.webp",
    "demoUrl": "/demo/mock-spa?template=spa_11",
    "packageName": "Gói website trung tâm spa hạng sang",
    "status": "active",
    "order": 20.5
  },
  {
    "id": "SPA015",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_12",
    "name": "Website Spa Thiên Nhiên & Chăm Sóc Da Biển Nhiệt Đới SummerGlow SPA015",
    "description": "Mẫu website spa chăm sóc da mùa hè, tắm trắng thảo mộc biển, phục hồi da cháy nắng và mỹ phẩm hữu cơ.",
    "tags": [
      "Spa",
      "SummerGlow",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/spa/SPA015-summerglow.webp",
    "longPreviewImage": "/assets/anh-template/spa/SPA015-summerglow.webp",
    "demoUrl": "/demo/mock-spa?template=spa_12",
    "packageName": "Gói website spa & mỹ phẩm thiên nhiên",
    "status": "active",
    "order": 20.55
  },
  {
    "id": "TMV013",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_10",
    "name": "Website Viện Thẩm Mỹ & Tạo Hình Phong Cách TrendBlend Beauty TMV013",
    "description": "Mẫu website thẩm mỹ viện hiện đại, công nghệ nâng cơ trẻ hóa, điêu khắc vóc dáng và tư vấn làm đẹp cá nhân hóa.",
    "tags": [
      "Thẩm mỹ viện",
      "Tạo hình & Trẻ hóa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV013-trendblend.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV013-trendblend.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_10",
    "packageName": "Gói website thẩm mỹ viện công nghệ cao",
    "status": "active",
    "order": 30.45
  },
  {
    "id": "TMV014",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_11",
    "name": "Website Viện Thẩm Mỹ Quốc Tế & Chăm Sóc Sắc Đẹp Monna Clinic TMV014",
    "description": "Mẫu website viện thẩm mỹ chuẩn Hàn, giới thiệu đội ngũ bác sĩ tạo hình, hình ảnh khách hàng thực tế và đặt lịch tư vấn.",
    "tags": [
      "Thẩm mỹ viện",
      "Monna Clinic",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV014-monnaclinic.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV014-monnaclinic.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_11",
    "packageName": "Gói website viện thẩm mỹ quốc tế",
    "status": "active",
    "order": 30.5
  },
  {
    "id": "TMV015",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_12",
    "name": "Website Phòng Khám Da Liễu & Thẩm Mỹ Công Nghệ Cao LookPretty TMV015",
    "description": "Mẫu website clinic da liễu thẩm mỹ, điều trị nám tàn nhang bằng Laser Pico, tiêm Meso căng bóng và dược mỹ phẩm.",
    "tags": [
      "Thẩm mỹ viện",
      "LookPretty Clinic",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV015-lookpretty.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV015-lookpretty.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_12",
    "packageName": "Gói website phòng khám da liễu thẩm mỹ",
    "status": "active",
    "order": 30.55
  },
  {
    "id": "TMV016",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_13",
    "name": "Website Chuyên Trang Kiến Thức Làm Đẹp & Thẩm Mỹ EvaBeauty TMV016",
    "description": "Mẫu website viện thẩm mỹ kết hợp cổng thông tin cẩm nang làm đẹp phụ nữ, xu hướng thẩm mỹ an toàn và đặt lịch bác sĩ.",
    "tags": [
      "Thẩm mỹ viện",
      "Cẩm nang thẩm mỹ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/tham-my-vien/TMV016-evabeauty.webp",
    "longPreviewImage": "/assets/anh-template/tham-my-vien/TMV016-evabeauty.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_13",
    "packageName": "Gói website thẩm mỹ viện & tạp chí làm đẹp",
    "status": "active",
    "order": 30.6
  },
  {
    "id": "PK010",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_7",
    "name": "Website Phòng Khám Nhi Khoa & Chăm Sóc Mẹ Bé BabyCare PK010",
    "description": "Mẫu website phòng khám chuyên khoa Nhi - Sản phụ khoa, lịch tiêm chủng vắc-xin, tư vấn dinh dưỡng và chăm sóc mẹ bầu.",
    "tags": [
      "Phòng khám",
      "Nhi khoa & Mẹ bé",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK010-babycare.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK010-babycare.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_7",
    "packageName": "Gói website phòng khám nhi & mẹ bé",
    "status": "active",
    "order": 40.3
  },
  {
    "id": "PK011",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_8",
    "name": "Website Trung Tâm Y Khoa Nhi & Sơ Sinh Quốc Tế KidsMed PK011",
    "description": "Mẫu website trung tâm khám sức khỏe trẻ em, tầm soát phát triển thể chất và cung cấp sản phẩm y tế cho trẻ sơ sinh.",
    "tags": [
      "Phòng khám",
      "Y khoa nhi",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK011-kidsmed.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK011-kidsmed.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_8",
    "packageName": "Gói website trung tâm y khoa nhi",
    "status": "active",
    "order": 40.35
  },
  {
    "id": "PK012",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_9",
    "name": "Website Bệnh Viện & Phòng Khám Thú Y Quốc Tế PetPlanet PK012",
    "description": "Mẫu website phòng khám thú y 24/7, siêu âm chẩn đoán, tiêm phòng vắc-xin, spa thú cưng và khách sạn nội trú.",
    "tags": [
      "Phòng khám",
      "Phòng khám thú y",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK012-petplanet.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK012-petplanet.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_9",
    "packageName": "Gói website bệnh viện & phòng khám thú y",
    "status": "active",
    "order": 40.4
  },
  {
    "id": "PK013",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_10",
    "name": "Website Phòng Khám Chăm Sóc Sức Khỏe & Dinh Dưỡng Thú Cưng PetJoy PK013",
    "description": "Mẫu website trung tâm chăm sóc sức khỏe thú cưng, bác sĩ thú y tại nhà, phẫu thuật ngoại khoa và dinh dưỡng y khoa.",
    "tags": [
      "Phòng khám",
      "Chăm sóc thú cưng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/phong-kham/PK013-petjoy.webp",
    "longPreviewImage": "/assets/anh-template/phong-kham/PK013-petjoy.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_10",
    "packageName": "Gói website phòng khám & chăm sóc thú y",
    "status": "active",
    "order": 40.45
  },
  {
    "id": "ST013",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_10",
    "name": "Website Salon Tạo Mẫu Tóc & Thời Trang Quốc Tế SheinStyle ST013",
    "description": "Mẫu website salon tạo mẫu tóc, biến hóa phong cách cá nhân, lookbook màu nhuộm hot trend và đặt lịch stylist.",
    "tags": [
      "Hair salon",
      "Tạo mẫu & Lookbook",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_10-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_10",
    "packageName": "Gói website salon tóc & định hình phong cách",
    "status": "active",
    "order": 50.45
  },
  {
    "id": "ST014",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_11",
    "name": "Website Viện Tạo Mẫu Tóc & Chăm Sóc Tóc Cao Cấp MiniBe Salon ST014",
    "description": "Mẫu website salon tóc hiện đại, uốn phục hồi chuyên sâu, nhuộm Balayage và phân phối sản phẩm dưỡng tóc chính hãng.",
    "tags": [
      "Hair salon",
      "MiniBe Salon",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_11-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_11",
    "packageName": "Gói website viện tạo mẫu tóc chuyên nghiệp",
    "status": "active",
    "order": 50.5
  },
  {
    "id": "ST015",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_12",
    "name": "Website Học Viện Tóc & Phong Cách Thượng Lưu MonaStylish ST015",
    "description": "Mẫu website hệ thống hair salon & styling, giới thiệu master stylist, bảng giá dịch vụ VIP và đào tạo học viên.",
    "tags": [
      "Hair salon",
      "MonaStylish",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_12-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_12",
    "packageName": "Gói website học viện & chuỗi salon tóc",
    "status": "active",
    "order": 50.55
  },
  {
    "id": "ST016",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_13",
    "name": "Website Studio Tạo Mẫu Tóc & Makeup Thời Trang MonaFashion ST016",
    "description": "Mẫu website studio tạo kiểu tóc, trang điểm sự kiện, tư vấn diện mạo cá nhân và đặt lịch làm đẹp nhanh chóng.",
    "tags": [
      "Hair salon",
      "Tóc & Makeup",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_13-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_13",
    "packageName": "Gói website studio tóc & makeup",
    "status": "active",
    "order": 50.6
  },
  {
    "id": "SC010",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_10",
    "name": "Website Studio Ảnh Cưới & Trang Sức Bạc Nghệ Thuật SilverStudio SC010",
    "description": "Mẫu website studio nhiếp ảnh chân dung, trang sức cưới chế tác thủ công và bộ sưu tập album ảnh nghệ thuật.",
    "tags": [
      "Studio chụp ảnh",
      "Nhiếp ảnh & Trang sức",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_10-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_10",
    "packageName": "Gói website studio ảnh cưới & trang sức",
    "status": "active",
    "order": 130.45
  },
  {
    "id": "SC011",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_11",
    "name": "Website Studio Trang Sức Cưới & Phóng Sự Cưới Cao Cấp DojiBridal SC011",
    "description": "Mẫu website thương hiệu trang sức cưới vàng - kim cương kết hợp dịch vụ chụp ảnh cưới và quay phim phóng sự.",
    "tags": [
      "Studio chụp ảnh",
      "DojiBridal",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_11-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_11",
    "packageName": "Gói website studio cưới hạng sang",
    "status": "active",
    "order": 130.5
  },
  {
    "id": "SC012",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_12",
    "name": "Website Studio Nhiếp Ảnh Cưới & Kim Cương Precita Bridal SC012",
    "description": "Mẫu website studio váy cưới, nhẫn đính hôn kim cương, bảng giá gói chụp Pre-wedding và đặt lịch thử váy.",
    "tags": [
      "Studio chụp ảnh",
      "Precita Bridal",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_12-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_12",
    "packageName": "Gói website studio Pre-wedding & trang sức",
    "status": "active",
    "order": 130.55
  },
  {
    "id": "SC013",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_13",
    "name": "Website Studio Lookbook Thời Trang & Trang Sức Cưới KaroStudio SC013",
    "description": "Mẫu website studio chụp ảnh lookbook thương hiệu, ảnh cưới phong cách Hàn Quốc và phụ kiện cô dâu cao cấp.",
    "tags": [
      "Studio chụp ảnh",
      "KaroStudio",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_13-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_13",
    "packageName": "Gói website studio lookbook & ảnh cưới",
    "status": "active",
    "order": 130.6
  },
  {
    "id": "NH008",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_8",
    "name": "Website Nhà Hàng Ẩm Thực Xanh & Thực Phẩm Hữu Cơ GreenBistro NH008",
    "description": "Mẫu website nhà hàng ẩm thực thực dưỡng, nguyên liệu hữu cơ tươi sạch từ nông trại đến bàn ăn và đặt món trực tuyến.",
    "tags": [
      "Nhà hàng",
      "Ẩm thực xanh Organic",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH008-greenbistro.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH008-greenbistro.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_8",
    "packageName": "Gói website nhà hàng & thực phẩm sạch",
    "status": "active",
    "order": 110.35
  },
  {
    "id": "NH009",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_9",
    "name": "Website Nhà Hàng Chay & Nông Sản Tươi Sạch Vườn Rau Bistro NH009",
    "description": "Mẫu website nhà hàng chay thanh tịnh, thực đơn salad & món cuốn healthy, đặt bàn gia đình và giao món tận nơi.",
    "tags": [
      "Nhà hàng",
      "Nhà hàng Healthy",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH009-vuonrau.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH009-vuonrau.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_9",
    "packageName": "Gói website nhà hàng chay & ẩm thực xanh",
    "status": "active",
    "order": 110.4
  },
  {
    "id": "NH010",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_10",
    "name": "Website Nhà Hàng Ẩm Thực Truyền Thống & Tiệc Phú Quý TetFeast NH010",
    "description": "Mẫu website nhà hàng ẩm thực truyền thống Việt Nam, đặt bàn tiệc tất niên, tân niên và mâm cỗ sum vầy.",
    "tags": [
      "Nhà hàng",
      "Ẩm thực truyền thống",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH010-tetfeast.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH010-tetfeast.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_10",
    "packageName": "Gói website nhà hàng ẩm thực Việt",
    "status": "active",
    "order": 110.45
  },
  {
    "id": "NH011",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_11",
    "name": "Website Nhà Hàng Cung Đình & Ẩm Thực Quà Biếu TetViet Dining NH011",
    "description": "Mẫu website nhà hàng sang trọng phong cách Á Đông, thực đơn yến tiệc, phòng VIP riêng tư và đặc sản thượng hạng.",
    "tags": [
      "Nhà hàng",
      "Ẩm thực Á Đông",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/nha-hang/NH011-tetviet.webp",
    "longPreviewImage": "/assets/anh-template/nha-hang/NH011-tetviet.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_11",
    "packageName": "Gói website nhà hàng sang trọng",
    "status": "active",
    "order": 110.5
  },
  {
    "id": "CF008",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_8",
    "name": "Website Tiệm Trà Đạo, Bánh Ngọt & Hộp Quà Thưởng Trà QuaTet Cafe CF008",
    "description": "Mẫu website tiệm trà truyền thống kết hợp bánh ngọt thủ công, set trà chiều (Afternoon Tea) và quà tặng trà cao cấp.",
    "tags": [
      "Quán cafe",
      "Tiệm trà & Bánh",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_8-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_8-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_8",
    "packageName": "Gói website tiệm trà & bánh thủ công",
    "status": "active",
    "order": 120.35
  },
  {
    "id": "CF009",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_9",
    "name": "Website Không Gian Cà Phê Đặc Sản & Trà Hoa Xuân SpringBrew CF009",
    "description": "Mẫu website quán cà phê rang xay thủ công, trà hoa thảo mộc, không gian check-in nghệ thuật và đặt thức uống online.",
    "tags": [
      "Quán cafe",
      "Specialty Coffee",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_9-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_9-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_9",
    "packageName": "Gói website quán cafe & trà thảo mộc",
    "status": "active",
    "order": 120.4
  },
  {
    "id": "CF010",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_10",
    "name": "Website Quán Cafe Sách & Không Gian Làm Việc Sáng Tạo SteamCafe CF010",
    "description": "Mẫu website tổ hợp cà phê sách (Book Cafe), không gian học tập - làm việc yên tĩnh, menu đồ uống đa dạng và sự kiện đọc sách.",
    "tags": [
      "Quán cafe",
      "Book Cafe & Coworking",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_10-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_10",
    "packageName": "Gói website cafe sách & không gian sáng tạo",
    "status": "active",
    "order": 120.45
  },
  {
    "id": "CF011",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_11",
    "name": "Website Cà Phê Thú Cưng & Tiệm Bánh Ngọt Koneko Cafe CF011",
    "description": "Mẫu website quán cà phê thú cưng (Pet Cafe) đáng yêu, menu trà sữa - bánh ngọt và dịch vụ tổ chức tiệc sinh nhật.",
    "tags": [
      "Quán cafe",
      "Pet Cafe",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_11-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_11",
    "packageName": "Gói website quán cafe phong cách trẻ",
    "status": "active",
    "order": 120.5
  },
  {
    "id": "VS011",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_8",
    "name": "Website Dịch Vụ Chăm Sóc Cây Cảnh, Sân Vườn & Vệ Sinh Biệt Thự HomeGreen VS011",
    "description": "Mẫu website dịch vụ chăm sóc cảnh quan sân vườn, tiểu cảnh phong thủy, cắt tỉa cây xanh và tổng vệ sinh biệt thự.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Cảnh quan & Vệ sinh",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS011-homegreen.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS011-homegreen.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_8",
    "packageName": "Gói website dịch vụ cảnh quan & vệ sinh",
    "status": "active",
    "order": 80.35
  },
  {
    "id": "VS012",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_9",
    "name": "Website Dịch Vụ Vệ Sinh Văn Phòng & Cung Ứng Tạp Vụ OfficeClean VS012",
    "description": "Mẫu website công ty cung cấp nhân sự tạp vụ văn phòng theo giờ/định kỳ, giặt thảm ghế văn phòng và vật tư vệ sinh.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Vệ sinh văn phòng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS012-officeclean.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS012-officeclean.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_9",
    "packageName": "Gói website vệ sinh văn phòng chuyên nghiệp",
    "status": "active",
    "order": 80.4
  },
  {
    "id": "VS013",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_10",
    "name": "Website Dịch Vụ Vệ Sinh Công Nghiệp & Quản Lý Tòa Nhà VMax Clean VS013",
    "description": "Mẫu website giải pháp vệ sinh công nghiệp nhà máy, đánh bóng sàn đá, lau kính tòa nhà cao tầng và kiểm soát côn trùng.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Vệ sinh công nghiệp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS013-vmaxclean.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS013-vmaxclean.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_10",
    "packageName": "Gói website vệ sinh công nghiệp & tòa nhà",
    "status": "active",
    "order": 80.45
  },
  {
    "id": "VS014",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_11",
    "name": "Website Dịch Vụ Vệ Sinh Trường Học, Thư Viện & Cơ Sở Giáo Dục CleanCampus VS014",
    "description": "Mẫu website đơn vị chuyên khử khuẩn, vệ sinh trường học, trung tâm đào tạo, văn phòng và cung cấp thiết bị làm sạch.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Khử khuẩn & Làm sạch",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/dich-vu-ve-sinh/VS014-cleancampus.webp",
    "longPreviewImage": "/assets/anh-template/dich-vu-ve-sinh/VS014-cleancampus.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_11",
    "packageName": "Gói website dịch vụ vệ sinh & khử khuẩn",
    "status": "active",
    "order": 80.5
  },
  {
    "id": "LUAT013",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_10",
    "name": "Website Văn Phòng Luật & Tư Vấn Visa Định Cư Quốc Tế RoamLaw LUAT013",
    "description": "Mẫu website công ty luật chuyên tư vấn pháp lý xuất nhập cảnh, định cư đầu tư, quốc tịch thứ hai và hợp pháp hóa lãnh sự.",
    "tags": [
      "Luật sư",
      "Luật di trú & Visa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT013-roamlaw.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT013-roamlaw.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_10",
    "packageName": "Gói website văn phòng luật di trú",
    "status": "active",
    "order": 60.45
  },
  {
    "id": "LUAT014",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_11",
    "name": "Website Cổng Thông Tin Pháp Luật & Văn Phòng Luật Sư NewsFlash Law LUAT014",
    "description": "Mẫu website hãng luật kết hợp thư viện văn bản pháp luật, phân tích án lệ, tư vấn tranh tụng và hỏi đáp luật sư trực tuyến.",
    "tags": [
      "Luật sư",
      "Cổng thông tin pháp lý",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT014-newsflashlaw.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT014-newsflashlaw.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_11",
    "packageName": "Gói website hãng luật & cổng pháp lý",
    "status": "active",
    "order": 60.5
  },
  {
    "id": "LUAT015",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_12",
    "name": "Website Hãng Luật Bảo Hiểm, Dân Sự & Tranh Tụng Người Đưa Tin Pháp Lý LUAT015",
    "description": "Mẫu website công ty tư vấn luật bảo hiểm, bồi thường thiệt hại, luật lao động, hôn nhân gia đình và đại diện tố tụng.",
    "tags": [
      "Luật sư",
      "Luật bảo hiểm & Dân sự",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT015-nguoiduatinlaw.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT015-nguoiduatinlaw.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_12",
    "packageName": "Gói website công ty luật chuyên nghiệp",
    "status": "active",
    "order": 60.55
  },
  {
    "id": "LUAT016",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_13",
    "name": "Website Văn Phòng Luật Sư Doanh Nghiệp & Sở Hữu Trí Tuệ ENews Legal LUAT016",
    "description": "Mẫu website văn phòng luật sư tư vấn pháp chế thường xuyên, hợp đồng thương mại, M&A và bản tin pháp lý doanh nghiệp.",
    "tags": [
      "Luật sư",
      "Pháp chế & M&A",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/luat-su/LUAT016-enewslegal.webp",
    "longPreviewImage": "/assets/anh-template/luat-su/LUAT016-enewslegal.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_13",
    "packageName": "Gói website văn phòng luật sư doanh nghiệp",
    "status": "active",
    "order": 60.6
  },
  {
    "id": "GYM011",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_11",
    "name": "Website Hệ Thống CLB Thể Thao & Trang Phục Fitness Hoàng Phúc Sport GYM011",
    "description": "Mẫu website trung tâm huấn luyện thể hình kết hợp chuỗi cửa hàng thời trang thể thao, giày chạy bộ và dụng cụ tập gym.",
    "tags": [
      "Gym fitness",
      "Thể thao & Fitness",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_11-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_11",
    "packageName": "Gói website CLB thể thao & trang phục gym",
    "status": "active",
    "order": 140.5
  },
  {
    "id": "GYM012",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_12",
    "name": "Website CLB Chạy Bộ, Thể Hình & Giày Thể Thao Dualeo Sport GYM012",
    "description": "Mẫu website câu lạc bộ chạy bộ (Running Club), huấn luyện sức bền, dinh dưỡng thể thao và phụ kiện tập luyện chuyên dụng.",
    "tags": [
      "Gym fitness",
      "Running & Gym",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_12-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_12",
    "packageName": "Gói website CLB thể hình & chạy bộ",
    "status": "active",
    "order": 140.55
  },
  {
    "id": "GYM013",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_13",
    "name": "Website Trung Tâm Street Workout, Calisthenics & Thể Thao ConverseFit GYM013",
    "description": "Mẫu website phòng tập gym trẻ trung, lớp học nhảy hiện đại, Boxing, CrossFit và trang phục thể thao năng động.",
    "tags": [
      "Gym fitness",
      "CrossFit & Boxing",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_13-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_13",
    "packageName": "Gói website phòng tập CrossFit & Gym",
    "status": "active",
    "order": 140.6
  },
  {
    "id": "GYM014",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_14",
    "name": "Website Trung Tâm Huấn Luyện Thể Thao & Đồng Hồ Đo Nhịp Tim GWatch Sport GYM014",
    "description": "Mẫu website trung tâm theo dõi chỉ số thể chất InBody, huấn luyện viên cá nhân 1:1 và thiết bị đeo thông minh cho vận động viên.",
    "tags": [
      "Gym fitness",
      "Smart Fitness",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_14-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_14",
    "packageName": "Gói website trung tâm fitness công nghệ cao",
    "status": "active",
    "order": 140.65
  },
  {
    "id": "OTO012",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_12",
    "name": "Website Trung Tâm Phụ Kiện Bảo Hộ Mô Tô & Đồ Chơi Xe Nón Sơn Auto OTO012",
    "description": "Mẫu website showroom mũ bảo hiểm đạt chuẩn, đồ bảo hộ mô tô phân khối lớn, phụ kiện ô tô và chăm sóc xe chuyên nghiệp.",
    "tags": [
      "Garage ô tô",
      "Mô tô & Phụ kiện xe",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_12-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_12",
    "packageName": "Gói website phụ kiện ô tô & mô tô",
    "status": "active",
    "order": 150.55
  },
  {
    "id": "OTO013",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_13",
    "name": "Website Xưởng Độ Xe Địa Hình, Bảo Dưỡng & Thuê Xe RoadKings OTO013",
    "description": "Mẫu website garage chuyên nâng cấp xe bán tải, SUV địa hình, bảo dưỡng hệ thống treo, cứu hộ và cho thuê xe đường dài.",
    "tags": [
      "Garage ô tô",
      "Độ xe địa hình Offroad",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_13-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_13",
    "packageName": "Gói website xưởng độ xe & dịch vụ xe",
    "status": "active",
    "order": 150.6
  },
  {
    "id": "OTO014",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_14",
    "name": "Website Trung Tâm Điện Tử Ô Tô, Camera Hành Trình & SmartCar OTO014",
    "description": "Mẫu website trung tâm lắp đặt màn hình Android ô tô, camera 360 độ, cảm biến áp suất lốp và nâng cấp ánh sáng Bi-Laser.",
    "tags": [
      "Garage ô tô",
      "Điện tử & Nội thất ô tô",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_14-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_14",
    "packageName": "Gói website trung tâm nội thất & điện tử ô tô",
    "status": "active",
    "order": 150.65
  },
  {
    "id": "OTO015",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_15",
    "name": "Website Đội Xe Du Lịch Hạng Sang & Trung Tâm Bảo Dưỡng MonaJourney Auto OTO015",
    "description": "Mẫu website doanh nghiệp vận tải hành khách hạng sang, cho thuê xe Limousine hợp đồng và xưởng bảo dưỡng định kỳ.",
    "tags": [
      "Garage ô tô",
      "Limousine & Garage",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_15-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_15",
    "packageName": "Gói website đội xe & trung tâm bảo dưỡng",
    "status": "active",
    "order": 150.7
  },
  {
    "id": "DN020",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_17",
    "name": "Website Công Ty Hạ Tầng Cloud, Tên Miền & Giải Pháp Số WebDep Corp DN020",
    "description": "Mẫu website doanh nghiệp cung cấp hạ tầng máy chủ Cloud Server, tên miền, thiết kế hệ thống số và bảo mật doanh nghiệp.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Cloud & Hạ tầng số",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_17-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_17",
    "packageName": "Gói website doanh nghiệp công nghệ & hạ tầng",
    "status": "active",
    "order": 1.8
  },
  {
    "id": "DN021",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_18",
    "name": "Website Tập Đoàn Lữ Hành Quốc Tế & Sự Kiện Doanh Nghiệp DuLịchViệt Corp DN021",
    "description": "Mẫu website hồ sơ năng lực tập đoàn dịch vụ lữ hành, tổ chức sự kiện hội nghị MICE, vé máy bay doanh nghiệp và visa.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Tập đoàn Lữ hành & MICE",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_18-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_18-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_18",
    "packageName": "Gói website tập đoàn dịch vụ & lữ hành",
    "status": "active",
    "order": 1.85
  },
  {
    "id": "DN022",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_19",
    "name": "Website Tập Đoàn Thương Mại Quốc Tế, Xuất Nhập Khẩu & Vận Tải Trabble Corp DN022",
    "description": "Mẫu website doanh nghiệp vận chuyển quốc tế, xúc tiến thương mại đa quốc gia, du học và dịch vụ doanh nghiệp toàn cầu.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Thương mại & Vận tải quốc tế",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_19-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_19-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_19",
    "packageName": "Gói website tập đoàn thương mại quốc tế",
    "status": "active",
    "order": 1.9
  },
  {
    "id": "DN023",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_20",
    "name": "Website Tập Đoàn Giải Pháp Công Nghệ Thông Minh MonaSmartTech DN023",
    "description": "Mẫu website hồ sơ năng lực công ty công nghệ AI, IoT, thiết bị thông minh và giải pháp chuyển đổi số toàn diện cho tập đoàn.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "MonaSmartTech",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_20-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_20-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_20",
    "packageName": "Gói website tập đoàn công nghệ & IoT",
    "status": "active",
    "order": 1.95
  },
  {
    "id": "B2B023",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_20",
    "name": "Website Tổng Kho Phân Phối Thiết Bị Viễn Thông & Điện Tử ViễnThôngA B2B023",
    "description": "Mẫu website hệ thống phân phối sỉ & lẻ thiết bị viễn thông, máy tính doanh nghiệp, tổng đài IP và linh kiện điện tử.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Thiết bị viễn thông",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_20-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_20-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_20",
    "packageName": "Gói website phân phối thiết bị viễn thông B2B",
    "status": "active",
    "order": 2.95
  },
  {
    "id": "B2B024",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_21",
    "name": "Website Trung Tâm Phân Phối Điện Máy & Thiết Bị Công Nghiệp Trần Anh B2B024",
    "description": "Mẫu website siêu thị điện máy công nghiệp, hệ thống điều hòa trung tâm, thiết bị điện lạnh và gia dụng cho dự án.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Điện máy & Điện lạnh",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_21-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_21-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_21",
    "packageName": "Gói website phân phối điện máy & thiết bị dự án",
    "status": "active",
    "order": 3
  },
  {
    "id": "B2B025",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_22",
    "name": "Website Nhà Phân Phối Máy Trạm, Laptop Doanh Nghiệp & Server LaptopPro B2B025",
    "description": "Mẫu website chuyên cung ứng máy tính xách tay doanh nghiệp, máy chủ Server, thiết bị mạng Cisco và bảo trì hệ thống IT.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Máy trạm & Server",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_22-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_22-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_22",
    "packageName": "Gói website phân phối phần cứng CNTT B2B",
    "status": "active",
    "order": 3.05
  },
  {
    "id": "B2B026",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_23",
    "name": "Website Showroom Thiết Bị Công Nghệ & Điện Tử Cao Cấp BroShop B2B026",
    "description": "Mẫu website trưng bày và phân phối thiết bị công nghệ cao cấp, thiết bị âm thanh студио, giải pháp phòng họp thông minh.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "BroShop Tech",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_23-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_23-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_23",
    "packageName": "Gói website showroom công nghệ & thiết bị",
    "status": "active",
    "order": 3.1
  },
  {
    "id": "LD014",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_11",
    "name": "Website Landing Page Chiến Dịch Đặt Tour & Khuyến Mãi LetsTravel LD014",
    "description": "Mẫu landing page tối ưu chuyển đổi cho chiến dịch mở bán combo du lịch, đặt vé trực tuyến và thu thập khách hàng tiềm năng.",
    "tags": [
      "Tăng trưởng Doanh số",
      "LetsTravel Campaign",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_11-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_11",
    "packageName": "Gói landing page tăng trưởng doanh số",
    "status": "active",
    "order": 3.5
  },
  {
    "id": "LD015",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_12",
    "name": "Website Landing Page Săn Ưu Đãi Nghỉ Dưỡng Cao Cấp Getaway Deal LD015",
    "description": "Mẫu website bán voucher nghỉ dưỡng, combo khách sạn 5 sao với bộ đếm ngược ưu đãi và biểu mẫu chốt đơn nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Getaway Deal",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_12-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_12",
    "packageName": "Gói landing page chiến dịch khuyến mãi",
    "status": "active",
    "order": 3.55
  },
  {
    "id": "LD016",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_13",
    "name": "Website Landing Page Tuyển Sinh Du Học Nhật - Hàn YokoEdu LD016",
    "description": "Mẫu landing page tuyển sinh du học và xuất khẩu lao động chất lượng cao, tích hợp bảng tính chi phí và đăng ký nhận học bổng.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Tuyển sinh YokoEdu",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_13-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_13",
    "packageName": "Gói landing page tuyển sinh chuyển đổi cao",
    "status": "active",
    "order": 3.6
  },
  {
    "id": "LD017",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_14",
    "name": "Website Landing Page Khóa Học Trực Tuyến & E-Learning Funnel LD017",
    "description": "Mẫu landing page bán khóa học trực tuyến, hội thảo Webinar và thu phễu khách hàng tự động với tỷ lệ đăng ký cao.",
    "tags": [
      "Tăng trưởng Doanh số",
      "E-Learning Funnel",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_14-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_14",
    "packageName": "Gói landing page khóa học & hội thảo",
    "status": "active",
    "order": 3.65
  },
  {
    "id": "XD033",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_33",
    "name": "Website Kiến Trúc & Xây Dựng Công Trình — Faifo Hospitality - Website khách sạn boutique và trải nghiệm bản địa Hội An XD033",
    "description": "Mẫu website faifo hospitality - website khách sạn boutique và trải nghiệm bản địa hội an với hồ sơ năng lực thi công, bảng dự toán xây dựng, thư viện công trình thực tế và đặt lịch khảo sát.",
    "tags": [
      "Xây dựng",
      "Faifo Hospitality - Website ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/xay_dung_33-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/xay_dung_33-live.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_33",
    "packageName": "Gói website công ty xây dựng & kiến trúc",
    "status": "active",
    "order": 133
  },
  {
    "id": "XD034",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_34",
    "name": "Website Kiến Trúc & Xây Dựng Công Trình — VCN Lighting - Website giải pháp chiếu sáng kiến trúc cao cấp XD034",
    "description": "Mẫu website vcn lighting - website giải pháp chiếu sáng kiến trúc cao cấp với hồ sơ năng lực thi công, bảng dự toán xây dựng, thư viện công trình thực tế và đặt lịch khảo sát.",
    "tags": [
      "Xây dựng",
      "VCN Lighting - Website giải ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/xay_dung_34-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/xay_dung_34-live.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_34",
    "packageName": "Gói website công ty xây dựng & kiến trúc",
    "status": "active",
    "order": 134
  },
  {
    "id": "XD035",
    "type": "render_template",
    "industryKey": "cong_ty_xay_dung",
    "templateKey": "xay_dung_35",
    "name": "Website Kiến Trúc & Xây Dựng Công Trình — Tuấn Kiệt Academy - Website khoá học AI cho kiến trúc sư XD035",
    "description": "Mẫu website tuấn kiệt academy - website khoá học ai cho kiến trúc sư với hồ sơ năng lực thi công, bảng dự toán xây dựng, thư viện công trình thực tế và đặt lịch khảo sát.",
    "tags": [
      "Xây dựng",
      "Tuấn Kiệt Academy - Website ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/xay_dung_35-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/xay_dung_35-live.webp",
    "demoUrl": "/demo/mock-cong_ty_xay_dung?template=xay_dung_35",
    "packageName": "Gói website công ty xây dựng & kiến trúc",
    "status": "active",
    "order": 135
  },
  {
    "id": "NT030",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_27",
    "name": "Website Thiết Kế & Showroom Nội Thất — Siêu thị Online NT030",
    "description": "Mẫu website siêu thị online trưng bày bộ sưu tập nội thất cao cấp, giải pháp thiết kế không gian 3D và tư vấn thi công trọn gói.",
    "tags": [
      "Nội thất",
      "Siêu thị Online",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/noi_that_27-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/noi_that_27-live.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_27",
    "packageName": "Gói website thiết kế & showroom nội thất",
    "status": "active",
    "order": 91.3
  },
  {
    "id": "NT031",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_28",
    "name": "Website Thiết Kế & Showroom Nội Thất — Bán Hàng Siêu Thị NT031",
    "description": "Mẫu website bán hàng siêu thị trưng bày bộ sưu tập nội thất cao cấp, giải pháp thiết kế không gian 3D và tư vấn thi công trọn gói.",
    "tags": [
      "Nội thất",
      "Bán Hàng Siêu Thị",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/noi_that_28-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/noi_that_28-live.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_28",
    "packageName": "Gói website thiết kế & showroom nội thất",
    "status": "active",
    "order": 91.35
  },
  {
    "id": "NT032",
    "type": "render_template",
    "industryKey": "noi_that",
    "templateKey": "noi_that_29",
    "name": "Website Thiết Kế & Showroom Nội Thất — Furneutral - Bán hàng, thi công nội thất NT032",
    "description": "Mẫu website furneutral - bán hàng, thi công nội thất trưng bày bộ sưu tập nội thất cao cấp, giải pháp thiết kế không gian 3D và tư vấn thi công trọn gói.",
    "tags": [
      "Nội thất",
      "Furneutral - Bán hàng, thi c",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/noi_that_29-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/noi_that_29-live.webp",
    "demoUrl": "/demo/mock-noi_that?template=noi_that_29",
    "packageName": "Gói website thiết kế & showroom nội thất",
    "status": "active",
    "order": 91.4
  },
  {
    "id": "TA026",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_23",
    "name": "Website Học Viện Ngoại Ngữ & Đào Tạo Quốc Tế — Du Lịch Với Giao Diện Bắt Mắt TA026",
    "description": "Mẫu website du lịch với giao diện bắt mắt giới thiệu lộ trình đào tạo chuẩn quốc tế, lịch khai giảng, đội ngũ giảng viên và đăng ký kiểm tra trình độ.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Du Lịch Với Giao Diện Bắt Mắ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/trung_tam_tieng_anh_23-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/trung_tam_tieng_anh_23-live.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_23",
    "packageName": "Gói website trung tâm ngoại ngữ & đào tạo",
    "status": "active",
    "order": 71.1
  },
  {
    "id": "TA027",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_24",
    "name": "Website Học Viện Ngoại Ngữ & Đào Tạo Quốc Tế — Tour Du Lịch Nội Địa - Nước Ngoài Chuyên Nghiệp TA027",
    "description": "Mẫu website tour du lịch nội địa - nước ngoài chuyên nghiệp giới thiệu lộ trình đào tạo chuẩn quốc tế, lịch khai giảng, đội ngũ giảng viên và đăng ký kiểm tra trình độ.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Tour Du Lịch Nội Địa - Nước ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/trung_tam_tieng_anh_24-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/trung_tam_tieng_anh_24-live.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_24",
    "packageName": "Gói website trung tâm ngoại ngữ & đào tạo",
    "status": "active",
    "order": 71.15
  },
  {
    "id": "TA028",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_25",
    "name": "Website Học Viện Ngoại Ngữ & Đào Tạo Quốc Tế — Trường Tiểu Học Quốc tế TA028",
    "description": "Mẫu website trường tiểu học quốc tế giới thiệu lộ trình đào tạo chuẩn quốc tế, lịch khai giảng, đội ngũ giảng viên và đăng ký kiểm tra trình độ.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Trường Tiểu Học Quốc tế",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/trung_tam_tieng_anh_25-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/trung_tam_tieng_anh_25-live.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_25",
    "packageName": "Gói website trung tâm ngoại ngữ & đào tạo",
    "status": "active",
    "order": 71.2
  },
  {
    "id": "TA029",
    "type": "render_template",
    "industryKey": "trung_tam_tieng_anh",
    "templateKey": "trung_tam_tieng_anh_26",
    "name": "Website Học Viện Ngoại Ngữ & Đào Tạo Quốc Tế — Educacion — Mẫu Website Giáo Dục &amp; Học Viện Trực Tuyến Hiện Đại TA029",
    "description": "Mẫu website educacion — mẫu website giáo dục &amp; học viện trực tuyến hiện đại giới thiệu lộ trình đào tạo chuẩn quốc tế, lịch khai giảng, đội ngũ giảng viên và đăng ký kiểm tra trình độ.",
    "tags": [
      "Trung tâm tiếng Anh",
      "Educacion — Mẫu Website Giáo",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/trung_tam_tieng_anh_26-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/trung_tam_tieng_anh_26-live.webp",
    "demoUrl": "/demo/mock-trung_tam_tieng_anh?template=trung_tam_tieng_anh_26",
    "packageName": "Gói website trung tâm ngoại ngữ & đào tạo",
    "status": "active",
    "order": 71.25
  },
  {
    "id": "NK013",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_10",
    "name": "Website Viện Nha Khoa Thẩm Mỹ & Implant — Nhà thuốc Pharceco - Web app bán hàng cho hệ thống nhà thuốc NK013",
    "description": "Mẫu website nhà thuốc pharceco - web app bán hàng cho hệ thống nhà thuốc chuyên cấy ghép Implant, bọc răng sứ thẩm mỹ, chỉnh nha trong suốt và đặt lịch khám cùng bác sĩ chuyên khoa.",
    "tags": [
      "Nha khoa",
      "Nhà thuốc Pharceco - Web app",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_khoa_10-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_khoa_10-live.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_10",
    "packageName": "Gói website phòng khám nha khoa quốc tế",
    "status": "active",
    "order": 10.45
  },
  {
    "id": "NK014",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_11",
    "name": "Website Viện Nha Khoa Thẩm Mỹ & Implant — Phúc Thịnh Pharma - Website doanh nghiệp phân phối vắc-xin và thiết bị y tế in 3D NK014",
    "description": "Mẫu website phúc thịnh pharma - website doanh nghiệp phân phối vắc-xin và thiết bị y tế in 3d chuyên cấy ghép Implant, bọc răng sứ thẩm mỹ, chỉnh nha trong suốt và đặt lịch khám cùng bác sĩ chuyên khoa.",
    "tags": [
      "Nha khoa",
      "Phúc Thịnh Pharma - Website ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_khoa_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_khoa_11-live.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_11",
    "packageName": "Gói website phòng khám nha khoa quốc tế",
    "status": "active",
    "order": 10.5
  },
  {
    "id": "NK015",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_12",
    "name": "Website Viện Nha Khoa Thẩm Mỹ & Implant — Sài Gòn Đồng Tháp - Bệnh viện chuyên khoa mắt uy tín tại HCM NK015",
    "description": "Mẫu website sài gòn đồng tháp - bệnh viện chuyên khoa mắt uy tín tại hcm chuyên cấy ghép Implant, bọc răng sứ thẩm mỹ, chỉnh nha trong suốt và đặt lịch khám cùng bác sĩ chuyên khoa.",
    "tags": [
      "Nha khoa",
      "Sài Gòn Đồng Tháp - Bệnh việ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_khoa_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_khoa_12-live.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_12",
    "packageName": "Gói website phòng khám nha khoa quốc tế",
    "status": "active",
    "order": 10.55
  },
  {
    "id": "NK016",
    "type": "render_template",
    "industryKey": "nha_khoa",
    "templateKey": "nha_khoa_13",
    "name": "Website Viện Nha Khoa Thẩm Mỹ & Implant — Nha khoa NT - Nha khoa thẩm mỹ tăng giá trị nụ cười Việt NK016",
    "description": "Mẫu website nha khoa nt - nha khoa thẩm mỹ tăng giá trị nụ cười việt chuyên cấy ghép Implant, bọc răng sứ thẩm mỹ, chỉnh nha trong suốt và đặt lịch khám cùng bác sĩ chuyên khoa.",
    "tags": [
      "Nha khoa",
      "Nha khoa NT - Nha khoa thẩm ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_khoa_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_khoa_13-live.webp",
    "demoUrl": "/demo/mock-nha_khoa?template=nha_khoa_13",
    "packageName": "Gói website phòng khám nha khoa quốc tế",
    "status": "active",
    "order": 10.6
  },
  {
    "id": "SPA016",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_13",
    "name": "Website Viện Chăm Sóc Da & Trị Liệu Spa — Massage Cổ Phong - Website và digital marketing cho chuỗi massage dưỡng sinh SPA016",
    "description": "Mẫu website massage cổ phong - website và digital marketing cho chuỗi massage dưỡng sinh giới thiệu liệu trình massage trị liệu, chăm sóc da thảo dược, bảng giá gói dịch vụ và đặt lịch hẹn trực tuyến.",
    "tags": [
      "Spa",
      "Massage Cổ Phong - Website v",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/spa_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/spa_13-live.webp",
    "demoUrl": "/demo/mock-spa?template=spa_13",
    "packageName": "Gói website spa & trị liệu dưỡng sinh",
    "status": "active",
    "order": 20.6
  },
  {
    "id": "SPA017",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_14",
    "name": "Website Viện Chăm Sóc Da & Trị Liệu Spa — LAN Perfume - Tận hưởng sự tinh tế trong từng giọt nước hoa SPA017",
    "description": "Mẫu website lan perfume - tận hưởng sự tinh tế trong từng giọt nước hoa giới thiệu liệu trình massage trị liệu, chăm sóc da thảo dược, bảng giá gói dịch vụ và đặt lịch hẹn trực tuyến.",
    "tags": [
      "Spa",
      "LAN Perfume - Tận hưởng sự t",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/spa_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/spa_14-live.webp",
    "demoUrl": "/demo/mock-spa?template=spa_14",
    "packageName": "Gói website spa & trị liệu dưỡng sinh",
    "status": "active",
    "order": 20.65
  },
  {
    "id": "SPA018",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_15",
    "name": "Website Viện Chăm Sóc Da & Trị Liệu Spa — Enbi Spa – Liệu pháp hoàn hảo cho sức khỏe và sắc đẹp SPA018",
    "description": "Mẫu website enbi spa – liệu pháp hoàn hảo cho sức khỏe và sắc đẹp giới thiệu liệu trình massage trị liệu, chăm sóc da thảo dược, bảng giá gói dịch vụ và đặt lịch hẹn trực tuyến.",
    "tags": [
      "Spa",
      "Enbi Spa – Liệu pháp hoàn",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/spa_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/spa_15-live.webp",
    "demoUrl": "/demo/mock-spa?template=spa_15",
    "packageName": "Gói website spa & trị liệu dưỡng sinh",
    "status": "active",
    "order": 20.7
  },
  {
    "id": "SPA019",
    "type": "render_template",
    "industryKey": "spa",
    "templateKey": "spa_16",
    "name": "Website Viện Chăm Sóc Da & Trị Liệu Spa — T-SPA - Trải nghiệm tính năng độc đáo Custom ghế theo màu sắc SPA019",
    "description": "Mẫu website t-spa - trải nghiệm tính năng độc đáo custom ghế theo màu sắc giới thiệu liệu trình massage trị liệu, chăm sóc da thảo dược, bảng giá gói dịch vụ và đặt lịch hẹn trực tuyến.",
    "tags": [
      "Spa",
      "T-SPA - Trải nghiệm tính năn",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/spa_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/spa_16-live.webp",
    "demoUrl": "/demo/mock-spa?template=spa_16",
    "packageName": "Gói website spa & trị liệu dưỡng sinh",
    "status": "active",
    "order": 20.75
  },
  {
    "id": "TMV017",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_14",
    "name": "Website Viện Thẩm Mỹ & Trẻ Hóa Công Nghệ Cao — Vivision - Khám phá thế giới qua đôi mắt khỏe TMV017",
    "description": "Mẫu website vivision - khám phá thế giới qua đôi mắt khỏe chuyên nâng cơ trẻ hóa, điều trị da công nghệ cao, tạo hình thẩm mỹ và tư vấn phác đồ cá nhân hóa.",
    "tags": [
      "Thẩm mỹ viện",
      "Vivision - Khám phá thế g",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/tham_my_vien_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/tham_my_vien_14-live.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_14",
    "packageName": "Gói website viện thẩm mỹ công nghệ cao",
    "status": "active",
    "order": 30.65
  },
  {
    "id": "TMV018",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_15",
    "name": "Website Viện Thẩm Mỹ & Trẻ Hóa Công Nghệ Cao — Honda Sông Trà - Đại lý 4S chính thức bán và bảo hành các sản phẩm xe máy TMV018",
    "description": "Mẫu website honda sông trà - đại lý 4s chính thức bán và bảo hành các sản phẩm xe máy chuyên nâng cơ trẻ hóa, điều trị da công nghệ cao, tạo hình thẩm mỹ và tư vấn phác đồ cá nhân hóa.",
    "tags": [
      "Thẩm mỹ viện",
      "Honda Sông Trà - Đại lý 4S c",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/tham_my_vien_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/tham_my_vien_15-live.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_15",
    "packageName": "Gói website viện thẩm mỹ công nghệ cao",
    "status": "active",
    "order": 30.7
  },
  {
    "id": "TMV019",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_16",
    "name": "Website Viện Thẩm Mỹ & Trẻ Hóa Công Nghệ Cao — Aforex - Doanh nghiệp xuất khẩu Nông Lâm xứ Lạng với 100+ sản phẩm TMV019",
    "description": "Mẫu website aforex - doanh nghiệp xuất khẩu nông lâm xứ lạng với 100+ sản phẩm chuyên nâng cơ trẻ hóa, điều trị da công nghệ cao, tạo hình thẩm mỹ và tư vấn phác đồ cá nhân hóa.",
    "tags": [
      "Thẩm mỹ viện",
      "Aforex - Doanh nghiệp xuất k",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/tham_my_vien_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/tham_my_vien_16-live.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_16",
    "packageName": "Gói website viện thẩm mỹ công nghệ cao",
    "status": "active",
    "order": 30.75
  },
  {
    "id": "TMV020",
    "type": "render_template",
    "industryKey": "tham_my_vien",
    "templateKey": "tham_my_vien_17",
    "name": "Website Viện Thẩm Mỹ & Trẻ Hóa Công Nghệ Cao — Nhựa Song Mộc - Đơn vị sản xuất và phân phối NẸP CHỈ NHỰA PVC hàng đầu VIỆT NAM TMV020",
    "description": "Mẫu website nhựa song mộc - đơn vị sản xuất và phân phối nẹp chỉ nhựa pvc hàng đầu việt nam chuyên nâng cơ trẻ hóa, điều trị da công nghệ cao, tạo hình thẩm mỹ và tư vấn phác đồ cá nhân hóa.",
    "tags": [
      "Thẩm mỹ viện",
      "Nhựa Song Mộc - Đơn vị sản x",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/tham_my_vien_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/tham_my_vien_17-live.webp",
    "demoUrl": "/demo/mock-tham_my_vien?template=tham_my_vien_17",
    "packageName": "Gói website viện thẩm mỹ công nghệ cao",
    "status": "active",
    "order": 30.8
  },
  {
    "id": "PK014",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_11",
    "name": "Website Phòng Khám Đa Khoa & Chăm Sóc Y Tế — Giới thiệu sản phẩm thảo được tự nhiên PK014",
    "description": "Mẫu website giới thiệu sản phẩm thảo được tự nhiên tích hợp đặt lịch khám theo chuyên khoa, giới thiệu đội ngũ y bác sĩ, gói tầm soát sức khỏe và tra cứu kết quả.",
    "tags": [
      "Phòng khám",
      "Giới thiệu sản phẩm thảo đượ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_kham_11-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_kham_11-live.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_11",
    "packageName": "Gói website phòng khám đa khoa & chuyên khoa",
    "status": "active",
    "order": 40.5
  },
  {
    "id": "PK015",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_12",
    "name": "Website Phòng Khám Đa Khoa & Chăm Sóc Y Tế — Panel Home - Website nhà sản xuất và thi công tấm panel cách nhiệt PK015",
    "description": "Mẫu website panel home - website nhà sản xuất và thi công tấm panel cách nhiệt tích hợp đặt lịch khám theo chuyên khoa, giới thiệu đội ngũ y bác sĩ, gói tầm soát sức khỏe và tra cứu kết quả.",
    "tags": [
      "Phòng khám",
      "Panel Home - Website nhà sản",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_kham_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_kham_12-live.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_12",
    "packageName": "Gói website phòng khám đa khoa & chuyên khoa",
    "status": "active",
    "order": 40.55
  },
  {
    "id": "PK016",
    "type": "render_template",
    "industryKey": "phong_kham",
    "templateKey": "phong_kham_13",
    "name": "Website Phòng Khám Đa Khoa & Chăm Sóc Y Tế — THE CAFUNÉ - Nơi sắc đẹp tỏa sáng với sản phẩm từ thiên nhiên PK016",
    "description": "Mẫu website the cafuné - nơi sắc đẹp tỏa sáng với sản phẩm từ thiên nhiên tích hợp đặt lịch khám theo chuyên khoa, giới thiệu đội ngũ y bác sĩ, gói tầm soát sức khỏe và tra cứu kết quả.",
    "tags": [
      "Phòng khám",
      "THE CAFUNÉ - Nơi sắc đẹp tỏa",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_kham_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_kham_13-live.webp",
    "demoUrl": "/demo/mock-phong_kham?template=phong_kham_13",
    "packageName": "Gói website phòng khám đa khoa & chuyên khoa",
    "status": "active",
    "order": 40.6
  },
  {
    "id": "ST017",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_14",
    "name": "Website Salon Tạo Mẫu Tóc & Phong Cách — Bán Đồng Hồ Chất Lượng, Độc Đáo ST017",
    "description": "Mẫu website bán đồng hồ chất lượng, độc đáo trưng bày lookbook mẫu tóc thịnh hành, bảng giá uốn nhuộm phục hồi, đội ngũ Master Stylist và đặt lịch hẹn.",
    "tags": [
      "Hair salon",
      "Bán Đồng Hồ Chất Lượng, Độc ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_14-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_14",
    "packageName": "Gói website salon tóc & tạo mẫu chuyên nghiệp",
    "status": "active",
    "order": 50.65
  },
  {
    "id": "ST018",
    "type": "render_template",
    "industryKey": "salon_toc",
    "templateKey": "salon_toc_15",
    "name": "Website Salon Tạo Mẫu Tóc & Phong Cách — Thời Trang Tiện Lợi Và Linh Hoạt ST018",
    "description": "Mẫu website thời trang tiện lợi và linh hoạt trưng bày lookbook mẫu tóc thịnh hành, bảng giá uốn nhuộm phục hồi, đội ngũ Master Stylist và đặt lịch hẹn.",
    "tags": [
      "Hair salon",
      "Thời Trang Tiện Lợi Và Linh ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/salon_toc_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/salon_toc_15-live.webp",
    "demoUrl": "/demo/mock-salon_toc?template=salon_toc_15",
    "packageName": "Gói website salon tóc & tạo mẫu chuyên nghiệp",
    "status": "active",
    "order": 50.7
  },
  {
    "id": "SC014",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_14",
    "name": "Website Studio Nhiếp Ảnh & Concept Nghệ Thuật — Diễn Đàn Tin Tức Trực Tuyến SC014",
    "description": "Mẫu website diễn đàn tin tức trực tuyến giới thiệu album ảnh cưới, lookbook thời trang, quay phim phóng sự, bảng giá gói chụp và đặt lịch concept.",
    "tags": [
      "Studio chụp ảnh",
      "Diễn Đàn Tin Tức Trực Tuyến",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_14-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_14",
    "packageName": "Gói website studio chụp ảnh & nghệ thuật",
    "status": "active",
    "order": 130.65
  },
  {
    "id": "SC015",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_15",
    "name": "Website Studio Nhiếp Ảnh & Concept Nghệ Thuật — Tin Tức Game Giao Diện Chuyên Nghiệp SC015",
    "description": "Mẫu website tin tức game giao diện chuyên nghiệp giới thiệu album ảnh cưới, lookbook thời trang, quay phim phóng sự, bảng giá gói chụp và đặt lịch concept.",
    "tags": [
      "Studio chụp ảnh",
      "Tin Tức Game Giao Diện Chuyê",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_15-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_15",
    "packageName": "Gói website studio chụp ảnh & nghệ thuật",
    "status": "active",
    "order": 130.7
  },
  {
    "id": "SC016",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_16",
    "name": "Website Studio Nhiếp Ảnh & Concept Nghệ Thuật — Tin Tức Với Giao Diện Hiện Đại Và Sắc Nét SC016",
    "description": "Mẫu website tin tức với giao diện hiện đại và sắc nét giới thiệu album ảnh cưới, lookbook thời trang, quay phim phóng sự, bảng giá gói chụp và đặt lịch concept.",
    "tags": [
      "Studio chụp ảnh",
      "Tin Tức Với Giao Diện Hiện Đ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_16-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_16",
    "packageName": "Gói website studio chụp ảnh & nghệ thuật",
    "status": "active",
    "order": 130.75
  },
  {
    "id": "SC017",
    "type": "render_template",
    "industryKey": "studio_chup_anh",
    "templateKey": "studio_chup_anh_17",
    "name": "Website Studio Nhiếp Ảnh & Concept Nghệ Thuật — Tin Tức Game Chuẩn SEO SC017",
    "description": "Mẫu website tin tức game chuẩn seo giới thiệu album ảnh cưới, lookbook thời trang, quay phim phóng sự, bảng giá gói chụp và đặt lịch concept.",
    "tags": [
      "Studio chụp ảnh",
      "Tin Tức Game Chuẩn SEO",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/studio_chup_anh_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/studio_chup_anh_17-live.webp",
    "demoUrl": "/demo/mock-studio_chup_anh?template=studio_chup_anh_17",
    "packageName": "Gói website studio chụp ảnh & nghệ thuật",
    "status": "active",
    "order": 130.8
  },
  {
    "id": "NH012",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_12",
    "name": "Website Nhà Hàng Ẩm Thực & Đặt Bàn Trực Tuyến — Gia Bảo Luxhome - Website thương mại điện tử thiết bị bếp và gia dụng nhập khẩu NH012",
    "description": "Mẫu website gia bảo luxhome - website thương mại điện tử thiết bị bếp và gia dụng nhập khẩu giới thiệu thực đơn món ngon đặc sắc, không gian phòng tiệc VIP, câu chuyện bếp trưởng và đặt bàn trực tuyến.",
    "tags": [
      "Nhà hàng",
      "Gia Bảo Luxhome - Website th",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_hang_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_hang_12-live.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_12",
    "packageName": "Gói website nhà hàng & ẩm thực cao cấp",
    "status": "active",
    "order": 110.55
  },
  {
    "id": "NH013",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_13",
    "name": "Website Nhà Hàng Ẩm Thực & Đặt Bàn Trực Tuyến — Tohoku Japanese Restaurant - Website chuỗi nhà hàng Nhật Bản cao cấp NH013",
    "description": "Mẫu website tohoku japanese restaurant - website chuỗi nhà hàng nhật bản cao cấp giới thiệu thực đơn món ngon đặc sắc, không gian phòng tiệc VIP, câu chuyện bếp trưởng và đặt bàn trực tuyến.",
    "tags": [
      "Nhà hàng",
      "Tohoku Japanese Restaurant -",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_hang_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_hang_13-live.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_13",
    "packageName": "Gói website nhà hàng & ẩm thực cao cấp",
    "status": "active",
    "order": 110.6
  },
  {
    "id": "NH014",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_14",
    "name": "Website Nhà Hàng Ẩm Thực & Đặt Bàn Trực Tuyến — Gành Hào - Biểu tượng ẩm thực Vũng Tàu suốt hơn một thập kỷ NH014",
    "description": "Mẫu website gành hào - biểu tượng ẩm thực vũng tàu suốt hơn một thập kỷ giới thiệu thực đơn món ngon đặc sắc, không gian phòng tiệc VIP, câu chuyện bếp trưởng và đặt bàn trực tuyến.",
    "tags": [
      "Nhà hàng",
      "Gành Hào - Biểu tượng ẩm thự",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_hang_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_hang_14-live.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_14",
    "packageName": "Gói website nhà hàng & ẩm thực cao cấp",
    "status": "active",
    "order": 110.65
  },
  {
    "id": "NH015",
    "type": "render_template",
    "industryKey": "nha_hang",
    "templateKey": "nha_hang_15",
    "name": "Website Nhà Hàng Ẩm Thực & Đặt Bàn Trực Tuyến — VNTT Foods - Mang lại bữa ăn ngon cho từng gia đình Việt NH015",
    "description": "Mẫu website vntt foods - mang lại bữa ăn ngon cho từng gia đình việt giới thiệu thực đơn món ngon đặc sắc, không gian phòng tiệc VIP, câu chuyện bếp trưởng và đặt bàn trực tuyến.",
    "tags": [
      "Nhà hàng",
      "VNTT Foods - Mang lại bữa ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/nha_hang_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/nha_hang_15-live.webp",
    "demoUrl": "/demo/mock-nha_hang?template=nha_hang_15",
    "packageName": "Gói website nhà hàng & ẩm thực cao cấp",
    "status": "active",
    "order": 110.7
  },
  {
    "id": "CF012",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_12",
    "name": "Website Quán Cà Phê Đặc Sản & Tiệm Trà Bánh — NBOlivia - Website quà tặng thương hiệu cho doanh nghiệp CF012",
    "description": "Mẫu website nbolivia - website quà tặng thương hiệu cho doanh nghiệp giới thiệu menu cà phê rang xay, trà trái cây, bánh ngọt thủ công, không gian thưởng thức và đặt món giao nhanh.",
    "tags": [
      "Quán cafe",
      "NBOlivia - Website quà tặng ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_12-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_12",
    "packageName": "Gói website quán cafe, trà & tiệm bánh",
    "status": "active",
    "order": 120.55
  },
  {
    "id": "CF013",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_13",
    "name": "Website Quán Cà Phê Đặc Sản & Tiệm Trà Bánh — GASACO với 33+ năm kinh nghiệm trong ngành sản xuất và chế biến đồ uống CF013",
    "description": "Mẫu website gasaco với 33+ năm kinh nghiệm trong ngành sản xuất và chế biến đồ uống giới thiệu menu cà phê rang xay, trà trái cây, bánh ngọt thủ công, không gian thưởng thức và đặt món giao nhanh.",
    "tags": [
      "Quán cafe",
      "GASACO với 33+ năm kinh nghi",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_13-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_13",
    "packageName": "Gói website quán cafe, trà & tiệm bánh",
    "status": "active",
    "order": 120.6
  },
  {
    "id": "CF014",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_14",
    "name": "Website Quán Cà Phê Đặc Sản & Tiệm Trà Bánh — Kiến Nam Barista - Giải pháp trọn gói về cà phê & các thiết bị, máy móc pha chế CF014",
    "description": "Mẫu website kiến nam barista - giải pháp trọn gói về cà phê & các thiết bị, máy móc pha chế giới thiệu menu cà phê rang xay, trà trái cây, bánh ngọt thủ công, không gian thưởng thức và đặt món giao nhanh.",
    "tags": [
      "Quán cafe",
      "Kiến Nam Barista - Giải pháp",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_14-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_14",
    "packageName": "Gói website quán cafe, trà & tiệm bánh",
    "status": "active",
    "order": 120.65
  },
  {
    "id": "CF015",
    "type": "render_template",
    "industryKey": "quan_cafe",
    "templateKey": "quan_cafe_15",
    "name": "Website Quán Cà Phê Đặc Sản & Tiệm Trà Bánh — Đà Lạt True Milk - Thương hiệu sữa của công ty cổ phần VPMilk CF015",
    "description": "Mẫu website đà lạt true milk - thương hiệu sữa của công ty cổ phần vpmilk giới thiệu menu cà phê rang xay, trà trái cây, bánh ngọt thủ công, không gian thưởng thức và đặt món giao nhanh.",
    "tags": [
      "Quán cafe",
      "Đà Lạt True Milk - Thương hi",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/quan_cafe_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/quan_cafe_15-live.webp",
    "demoUrl": "/demo/mock-quan_cafe?template=quan_cafe_15",
    "packageName": "Gói website quán cafe, trà & tiệm bánh",
    "status": "active",
    "order": 120.7
  },
  {
    "id": "VS015",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_12",
    "name": "Website Dịch Vụ Vệ Sinh Công Nghiệp & Chăm Sóc Không Gian — KNIC - Website khu công nghiệp thế hệ mới hướng tới nhà đầu tư nước ngoài VS015",
    "description": "Mẫu website knic - website khu công nghiệp thế hệ mới hướng tới nhà đầu tư nước ngoài cung cấp giải pháp tổng vệ sinh tòa nhà, nhà xưởng, biệt thự, giặt thảm sofa và báo giá tự động theo diện tích.",
    "tags": [
      "Dịch vụ vệ sinh",
      "KNIC - Website khu công nghi",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/dich_vu_ve_sinh_12-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/dich_vu_ve_sinh_12-live.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_12",
    "packageName": "Gói website dịch vụ vệ sinh công nghiệp & gia đình",
    "status": "active",
    "order": 80.55
  },
  {
    "id": "VS016",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_13",
    "name": "Website Dịch Vụ Vệ Sinh Công Nghiệp & Chăm Sóc Không Gian — Nhập Hàng Trung - Chuyên cung cấp dịch vụ order, nhập hàng từ Trung Quốc VS016",
    "description": "Mẫu website nhập hàng trung - chuyên cung cấp dịch vụ order, nhập hàng từ trung quốc cung cấp giải pháp tổng vệ sinh tòa nhà, nhà xưởng, biệt thự, giặt thảm sofa và báo giá tự động theo diện tích.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Nhập Hàng Trung - Chuyên cun",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/dich_vu_ve_sinh_13-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/dich_vu_ve_sinh_13-live.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_13",
    "packageName": "Gói website dịch vụ vệ sinh công nghiệp & gia đình",
    "status": "active",
    "order": 80.6
  },
  {
    "id": "VS017",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_14",
    "name": "Website Dịch Vụ Vệ Sinh Công Nghiệp & Chăm Sóc Không Gian — Nhà Sạch - Doanh nghiệp hàng đầu về dịch vụ vệ sinh công nghiệp tại Việt Nam VS017",
    "description": "Mẫu website nhà sạch - doanh nghiệp hàng đầu về dịch vụ vệ sinh công nghiệp tại việt nam cung cấp giải pháp tổng vệ sinh tòa nhà, nhà xưởng, biệt thự, giặt thảm sofa và báo giá tự động theo diện tích.",
    "tags": [
      "Dịch vụ vệ sinh",
      "Nhà Sạch - Doanh nghiệp hàng",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/dich_vu_ve_sinh_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/dich_vu_ve_sinh_14-live.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_14",
    "packageName": "Gói website dịch vụ vệ sinh công nghiệp & gia đình",
    "status": "active",
    "order": 80.65
  },
  {
    "id": "VS018",
    "type": "render_template",
    "industryKey": "dich_vu_ve_sinh",
    "templateKey": "dich_vu_ve_sinh_15",
    "name": "Website Dịch Vụ Vệ Sinh Công Nghiệp & Chăm Sóc Không Gian — MAC VN - Đơn vị mua bán các dòng sản phẩm máy tính của Apple trên cả nước VS018",
    "description": "Mẫu website mac vn - đơn vị mua bán các dòng sản phẩm máy tính của apple trên cả nước cung cấp giải pháp tổng vệ sinh tòa nhà, nhà xưởng, biệt thự, giặt thảm sofa và báo giá tự động theo diện tích.",
    "tags": [
      "Dịch vụ vệ sinh",
      "MAC VN - Đơn vị mua bán các ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/dich_vu_ve_sinh_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/dich_vu_ve_sinh_15-live.webp",
    "demoUrl": "/demo/mock-dich_vu_ve_sinh?template=dich_vu_ve_sinh_15",
    "packageName": "Gói website dịch vụ vệ sinh công nghiệp & gia đình",
    "status": "active",
    "order": 80.7
  },
  {
    "id": "LUAT017",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_14",
    "name": "Website Văn Phòng Luật Sư & Tư Vấn Pháp Chế — KN Vientiane Group - Website tập đoàn đầu tư đa ngành tại Lào LUAT017",
    "description": "Mẫu website kn vientiane group - website tập đoàn đầu tư đa ngành tại lào chuyên tư vấn pháp luật doanh nghiệp, sở hữu trí tuệ, tranh tụng dân sự, hồ sơ luật sư và đặt lịch tư vấn.",
    "tags": [
      "Luật sư",
      "KN Vientiane Group - Website",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/luat_su_14-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/luat_su_14-live.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_14",
    "packageName": "Gói website hãng luật & tư vấn pháp lý",
    "status": "active",
    "order": 60.65
  },
  {
    "id": "LUAT018",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_15",
    "name": "Website Văn Phòng Luật Sư & Tư Vấn Pháp Chế — HORI - Doanh nghiệp dẫn đầu trong lĩnh vực đầu tư và phát triển hệ thống F&B LUAT018",
    "description": "Mẫu website hori - doanh nghiệp dẫn đầu trong lĩnh vực đầu tư và phát triển hệ thống f&b chuyên tư vấn pháp luật doanh nghiệp, sở hữu trí tuệ, tranh tụng dân sự, hồ sơ luật sư và đặt lịch tư vấn.",
    "tags": [
      "Luật sư",
      "HORI - Doanh nghiệp dẫn đầu ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/luat_su_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/luat_su_15-live.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_15",
    "packageName": "Gói website hãng luật & tư vấn pháp lý",
    "status": "active",
    "order": 60.7
  },
  {
    "id": "LUAT019",
    "type": "render_template",
    "industryKey": "luat_su",
    "templateKey": "luat_su_16",
    "name": "Website Văn Phòng Luật Sư & Tư Vấn Pháp Chế — LUẬT NAM BÌNH - Đoàn luật sư thành phố Hà Nội giàu kinh nghiệm LUAT019",
    "description": "Mẫu website luật nam bình - đoàn luật sư thành phố hà nội giàu kinh nghiệm chuyên tư vấn pháp luật doanh nghiệp, sở hữu trí tuệ, tranh tụng dân sự, hồ sơ luật sư và đặt lịch tư vấn.",
    "tags": [
      "Luật sư",
      "LUẬT NAM BÌNH - Đoàn luật sư",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/luat_su_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/luat_su_16-live.webp",
    "demoUrl": "/demo/mock-luat_su?template=luat_su_16",
    "packageName": "Gói website hãng luật & tư vấn pháp lý",
    "status": "active",
    "order": 60.75
  },
  {
    "id": "GYM015",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_15",
    "name": "Website Trung Tâm Thể Hình, Gym & Huấn Luyện Cá Nhân — Võ Minh Thiên - Đối tác vận chuyển thương mại Trung - Việt GYM015",
    "description": "Mẫu website võ minh thiên - đối tác vận chuyển thương mại trung - việt giới thiệu hệ thống phòng tập hiện đại, lịch lớp GroupX/Yoga, đội ngũ HLV cá nhân 1:1 và gói thẻ hội viên.",
    "tags": [
      "Gym fitness",
      "Võ Minh Thiên - Đối tác vận ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_15-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_15",
    "packageName": "Gói website phòng tập gym & thể hình",
    "status": "active",
    "order": 140.7
  },
  {
    "id": "GYM016",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_16",
    "name": "Website Trung Tâm Thể Hình, Gym & Huấn Luyện Cá Nhân — Áo Bóng Đá - Hệ thống bán áo và phụ kiện bóng đá uy tín hàng đầu tại HCM GYM016",
    "description": "Mẫu website áo bóng đá - hệ thống bán áo và phụ kiện bóng đá uy tín hàng đầu tại hcm giới thiệu hệ thống phòng tập hiện đại, lịch lớp GroupX/Yoga, đội ngũ HLV cá nhân 1:1 và gói thẻ hội viên.",
    "tags": [
      "Gym fitness",
      "Áo Bóng Đá - Hệ thống bán áo",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_16-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_16",
    "packageName": "Gói website phòng tập gym & thể hình",
    "status": "active",
    "order": 140.75
  },
  {
    "id": "GYM017",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_17",
    "name": "Website Trung Tâm Thể Hình, Gym & Huấn Luyện Cá Nhân — GIAYOI - Thương hiệu giày sneaker cao cấp quốc tế! GYM017",
    "description": "Mẫu website giayoi - thương hiệu giày sneaker cao cấp quốc tế! giới thiệu hệ thống phòng tập hiện đại, lịch lớp GroupX/Yoga, đội ngũ HLV cá nhân 1:1 và gói thẻ hội viên.",
    "tags": [
      "Gym fitness",
      "GIAYOI - Thương hiệu giày sn",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_17-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_17",
    "packageName": "Gói website phòng tập gym & thể hình",
    "status": "active",
    "order": 140.8
  },
  {
    "id": "GYM018",
    "type": "render_template",
    "industryKey": "phong_gym",
    "templateKey": "phong_gym_18",
    "name": "Website Trung Tâm Thể Hình, Gym & Huấn Luyện Cá Nhân — Gold Marine Transport (GMA) - Đơn vị logistics nội địa và quốc tế uy tín GYM018",
    "description": "Mẫu website gold marine transport (gma) - đơn vị logistics nội địa và quốc tế uy tín giới thiệu hệ thống phòng tập hiện đại, lịch lớp GroupX/Yoga, đội ngũ HLV cá nhân 1:1 và gói thẻ hội viên.",
    "tags": [
      "Gym fitness",
      "Gold Marine Transport (GMA) ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/phong_gym_18-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/phong_gym_18-live.webp",
    "demoUrl": "/demo/mock-phong_gym?template=phong_gym_18",
    "packageName": "Gói website phòng tập gym & thể hình",
    "status": "active",
    "order": 140.85
  },
  {
    "id": "OTO016",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_16",
    "name": "Website Trung Tâm Chăm Sóc, Độ Xe & Bảo Dưỡng Ô Tô — Thuận Thành Tín Logistic  – Đối tác vận tải đáng tin cậy của doanh nghiệp OTO016",
    "description": "Mẫu website thuận thành tín logistic  – đối tác vận tải đáng tin cậy của doanh nghiệp chuyên bảo dưỡng định kỳ, chăm sóc xe Detailing, nâng cấp phụ kiện chính hãng và đặt lịch dịch vụ trực tuyến.",
    "tags": [
      "Garage ô tô",
      "Thuận Thành Tín Logistic  – ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_16-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_16",
    "packageName": "Gói website showroom & garage dịch vụ ô tô",
    "status": "active",
    "order": 150.75
  },
  {
    "id": "OTO017",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_17",
    "name": "Website Trung Tâm Chăm Sóc, Độ Xe & Bảo Dưỡng Ô Tô — Ắc Quy Việt Nhật - Đại lý phân phối ắc quy chính hãng tại TP. HCM OTO017",
    "description": "Mẫu website ắc quy việt nhật - đại lý phân phối ắc quy chính hãng tại tp. hcm chuyên bảo dưỡng định kỳ, chăm sóc xe Detailing, nâng cấp phụ kiện chính hãng và đặt lịch dịch vụ trực tuyến.",
    "tags": [
      "Garage ô tô",
      "Ắc Quy Việt Nhật - Đại lý ph",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_17-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_17",
    "packageName": "Gói website showroom & garage dịch vụ ô tô",
    "status": "active",
    "order": 150.8
  },
  {
    "id": "OTO018",
    "type": "render_template",
    "industryKey": "garage_oto",
    "templateKey": "garage_oto_18",
    "name": "Website Trung Tâm Chăm Sóc, Độ Xe & Bảo Dưỡng Ô Tô — Lốp xe đặc chủng - Nhà phân phối lốp xe hàng đầu Việt Nam OTO018",
    "description": "Mẫu website lốp xe đặc chủng - nhà phân phối lốp xe hàng đầu việt nam chuyên bảo dưỡng định kỳ, chăm sóc xe Detailing, nâng cấp phụ kiện chính hãng và đặt lịch dịch vụ trực tuyến.",
    "tags": [
      "Garage ô tô",
      "Lốp xe đặc chủng - Nhà phân ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/garage_oto_18-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/garage_oto_18-live.webp",
    "demoUrl": "/demo/mock-garage_oto?template=garage_oto_18",
    "packageName": "Gói website showroom & garage dịch vụ ô tô",
    "status": "active",
    "order": 150.85
  },
  {
    "id": "DN024",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_21",
    "name": "Website Hồ Sơ Năng Lực Tập Đoàn & Giải Pháp Doanh Nghiệp — WOKU - Bứt phá SEO cho đơn vị cung cấp phần mềm chính hãng khi đạt KPIs chỉ trong 3 tháng DN024",
    "description": "Mẫu website woku - bứt phá seo cho đơn vị cung cấp phần mềm chính hãng khi đạt kpis chỉ trong 3 tháng thể hiện tầm vóc thương hiệu, hệ sinh thái dịch vụ B2B, báo cáo phát triển bền vững và kết nối đối tác toàn cầu.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "WOKU - Bứt phá SEO cho đơn v",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_21-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_21-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_21",
    "packageName": "Gói website hồ sơ năng lực tập đoàn & doanh nghiệp",
    "status": "active",
    "order": 2
  },
  {
    "id": "DN025",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_22",
    "name": "Website Hồ Sơ Năng Lực Tập Đoàn & Giải Pháp Doanh Nghiệp — Vietking - Đơn vị chuyên cung cấp giải pháp màn hình LED chất lượng DN025",
    "description": "Mẫu website vietking - đơn vị chuyên cung cấp giải pháp màn hình led chất lượng thể hiện tầm vóc thương hiệu, hệ sinh thái dịch vụ B2B, báo cáo phát triển bền vững và kết nối đối tác toàn cầu.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Vietking - Đơn vị chuyên cun",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_22-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_22-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_22",
    "packageName": "Gói website hồ sơ năng lực tập đoàn & doanh nghiệp",
    "status": "active",
    "order": 2.05
  },
  {
    "id": "DN026",
    "type": "render_template",
    "industryKey": "corporate_profile",
    "templateKey": "corporate_profile_23",
    "name": "Website Hồ Sơ Năng Lực Tập Đoàn & Giải Pháp Doanh Nghiệp — Hichihome - Giải pháp khóa cửa điện tử an toàn cho mọi nhà DN026",
    "description": "Mẫu website hichihome - giải pháp khóa cửa điện tử an toàn cho mọi nhà thể hiện tầm vóc thương hiệu, hệ sinh thái dịch vụ B2B, báo cáo phát triển bền vững và kết nối đối tác toàn cầu.",
    "tags": [
      "Doanh nghiệp B2B & Tập đoàn",
      "Hichihome - Giải pháp khóa c",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/corporate_profile_23-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/corporate_profile_23-live.webp",
    "demoUrl": "/demo/mock-corporate_profile?template=corporate_profile_23",
    "packageName": "Gói website hồ sơ năng lực tập đoàn & doanh nghiệp",
    "status": "active",
    "order": 2.1
  },
  {
    "id": "B2B027",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_24",
    "name": "Website Tổng Kho Thiết Bị Công Nghiệp & Cung Ứng B2B — Bạch Long Mobile - Nơi mỗi thiết bị đều mang lại một trải nghiệm vượt trội B2B027",
    "description": "Mẫu website bạch long mobile - nơi mỗi thiết bị đều mang lại một trải nghiệm vượt trội tích hợp danh mục thông số kỹ thuật chi tiết, tài liệu catalogue PDF, chính sách đại lý và nhận báo giá sỉ B2B.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Bạch Long Mobile - Nơi mỗi t",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_24-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_24-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_24",
    "packageName": "Gói website phân phối thiết bị & sản phẩm công nghiệp B2B",
    "status": "active",
    "order": 3.15
  },
  {
    "id": "B2B028",
    "type": "render_template",
    "industryKey": "b2b_product",
    "templateKey": "b2b_product_25",
    "name": "Website Tổng Kho Thiết Bị Công Nghiệp & Cung Ứng B2B — Fbshop - Hệ thống cửa hàng cầu lông chính hãng trên toàn quốc B2B028",
    "description": "Mẫu website fbshop - hệ thống cửa hàng cầu lông chính hãng trên toàn quốc tích hợp danh mục thông số kỹ thuật chi tiết, tài liệu catalogue PDF, chính sách đại lý và nhận báo giá sỉ B2B.",
    "tags": [
      "Showroom Thiết bị & B2B",
      "Fbshop - Hệ thống cửa hàng c",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/b2b_product_25-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/b2b_product_25-live.webp",
    "demoUrl": "/demo/mock-b2b_product?template=b2b_product_25",
    "packageName": "Gói website phân phối thiết bị & sản phẩm công nghiệp B2B",
    "status": "active",
    "order": 3.2
  },
  {
    "id": "LD018",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_15",
    "name": "Website Landing Page Chiến Dịch Tăng Trưởng & Chốt Đơn — Chaodinner - Dự án website vừa hiện đại vừa \"đậm vị\" Việt Nam LD018",
    "description": "Mẫu website chaodinner - dự án website vừa hiện đại vừa \"đậm vị\" việt nam thiết kế theo phễu chuyển đổi cao (High-Conversion Funnel), điểm nhấn ưu đãi, bộ đếm ngược và form đăng ký nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Chaodinner - Dự án website v",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_15-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_15-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_15",
    "packageName": "Gói landing page chuyển đổi cao & thu hút khách hàng",
    "status": "active",
    "order": 3.7
  },
  {
    "id": "LD019",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_16",
    "name": "Website Landing Page Chiến Dịch Tăng Trưởng & Chốt Đơn — Nga Đặng Academy - Khai phá thu nhập tiềm năng với khóa học livestream LD019",
    "description": "Mẫu website nga đặng academy - khai phá thu nhập tiềm năng với khóa học livestream thiết kế theo phễu chuyển đổi cao (High-Conversion Funnel), điểm nhấn ưu đãi, bộ đếm ngược và form đăng ký nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Nga Đặng Academy - Khai phá ",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_16-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_16-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_16",
    "packageName": "Gói landing page chuyển đổi cao & thu hút khách hàng",
    "status": "active",
    "order": 3.75
  },
  {
    "id": "LD020",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_17",
    "name": "Website Landing Page Chiến Dịch Tăng Trưởng & Chốt Đơn — Huy Trọng Academy - Khóa học MMO affiliate tăng thu nhập hiệu quả LD020",
    "description": "Mẫu website huy trọng academy - khóa học mmo affiliate tăng thu nhập hiệu quả thiết kế theo phễu chuyển đổi cao (High-Conversion Funnel), điểm nhấn ưu đãi, bộ đếm ngược và form đăng ký nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "Huy Trọng Academy - Khóa học",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_17-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_17-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_17",
    "packageName": "Gói landing page chuyển đổi cao & thu hút khách hàng",
    "status": "active",
    "order": 3.8
  },
  {
    "id": "LD021",
    "type": "render_template",
    "industryKey": "lead_generation",
    "templateKey": "lead_generation_18",
    "name": "Website Landing Page Chiến Dịch Tăng Trưởng & Chốt Đơn — SALY ACADEMY - Khóa học biến đam mê pha chế thành nguồn thu nhập LD021",
    "description": "Mẫu website saly academy - khóa học biến đam mê pha chế thành nguồn thu nhập thiết kế theo phễu chuyển đổi cao (High-Conversion Funnel), điểm nhấn ưu đãi, bộ đếm ngược và form đăng ký nhanh.",
    "tags": [
      "Tăng trưởng Doanh số",
      "SALY ACADEMY - Khóa học biến",
      "Live Demo",
      "TAVIWEB"
    ],
    "thumbnail": "/assets/anh-template/live-previews/lead_generation_18-live.webp",
    "longPreviewImage": "/assets/anh-template/live-previews/lead_generation_18-live.webp",
    "demoUrl": "/demo/mock-lead_generation?template=lead_generation_18",
    "packageName": "Gói landing page chuyển đổi cao & thu hút khách hàng",
    "status": "active",
    "order": 3.85
  }
];
// --- END CLONED RENDER TEMPLATES ---

const clonedIds = new Set(clonedRenderTemplateItems.map((item) => item.id));

export const templateCatalog: TemplateCatalogItem[] = [
  ...renderTemplateItems,
  ...clonedRenderTemplateItems,
  ...referenceTemplateItems.filter((item) => !clonedIds.has(item.id))
].sort((a, b) => a.order - b.order);

export function getIndustryByKey(industryKey: string) {
  return industryCatalog.find((industry) => industry.key === industryKey);
}

export function getTemplatesByIndustry(industryKey: string) {
  return templateCatalog
    .filter((template) => template.industryKey === industryKey)
    .sort((a, b) => a.order - b.order);
}

export function getTemplateCatalogItem(industryKey: string, templateId: string) {
  return templateCatalog.find(
    (template) => template.industryKey === industryKey && template.id === templateId
  );
}
