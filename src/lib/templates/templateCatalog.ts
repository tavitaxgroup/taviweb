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
  templateKey?: IndustryKey;
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

const renderTemplateItems: TemplateCatalogItem[] = industryCatalog.map((industry) => ({
  id: `${industry.key}-main-template`,
  type: "render_template",
  industryKey: industry.key,
  templateKey: industry.key,
  name: `Mẫu website ${industry.name}`,
  description: industry.description,
  tags: [industry.name, "Mẫu website", "TAVIWEB"],
  thumbnail: `/template-previews/${industry.key}.jpg`,
  demoUrl: `/demo/mock-${industry.key}`,
  status: "active",
  order: industry.order
}));

const referenceTemplateItems: TemplateCatalogItem[] = [
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
    type: "reference_image",
    industryKey: "noi_that",
    name: "Website nội thất NT003",
    description: "Mẫu website tham khảo cho công ty nội thất cần trình bày năng lực và hạng mục thi công.",
    tags: ["Nội thất", "Ảnh dài", "Thi công"],
    thumbnail: "/assets/anh-template/noi-that/NT003.jpg",
    longPreviewImage: "/assets/anh-template/noi-that/NT003.jpg",
    packageName: "Gói website nội thất",
    priceLabel: "Liên hệ",
    status: "active",
    order: 903
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
    type: "reference_image",
    industryKey: "cong_ty_xay_dung",
    name: "Website xây dựng XD001",
    description: "Mẫu website xây dựng dạng ảnh dài, phù hợp công ty thi công, cảnh quan hoặc nhà thầu.",
    tags: ["Xây dựng", "Ảnh dài", "Công trình"],
    thumbnail: "/assets/anh-template/xay-dung/XD001.webp",
    longPreviewImage: "/assets/anh-template/xay-dung/XD001.webp",
    packageName: "Gói website xây dựng",
    priceLabel: "Liên hệ",
    status: "active",
    order: 1001
  },
  {
    id: "XD002",
    type: "reference_image",
    industryKey: "cong_ty_xay_dung",
    name: "Website xây dựng XD002",
    description: "Mẫu thiết kế website xây dựng nhấn mạnh giới thiệu công ty, dịch vụ và dự án tiêu biểu.",
    tags: ["Xây dựng", "Ảnh dài", "Giới thiệu công ty"],
    thumbnail: "/assets/anh-template/xay-dung/XD002.jpg",
    longPreviewImage: "/assets/anh-template/xay-dung/XD002.jpg",
    packageName: "Gói website xây dựng",
    priceLabel: "5.700.000",
    status: "active",
    order: 1002
  },
  {
    id: "XD003",
    type: "reference_image",
    industryKey: "cong_ty_xay_dung",
    name: "Website xây dựng XD003",
    description: "Mẫu ảnh dài cho lĩnh vực xây dựng/cảnh quan, có nhiều khu vực dịch vụ và công trình.",
    tags: ["Xây dựng", "Ảnh dài", "Cảnh quan"],
    thumbnail: "/assets/anh-template/xay-dung/XD003.jpg",
    longPreviewImage: "/assets/anh-template/xay-dung/XD003.jpg",
    packageName: "Gói website xây dựng",
    priceLabel: "Liên hệ",
    status: "active",
    order: 1003
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

export const templateCatalog: TemplateCatalogItem[] = [...renderTemplateItems, ...referenceTemplateItems].sort(
  (a, b) => a.order - b.order
);

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
