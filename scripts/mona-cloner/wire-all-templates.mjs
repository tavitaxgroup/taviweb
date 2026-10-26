import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const catalogPath = path.join(rootDir, "scripts/mona-cloner/catalog.json");
const refDir = "C:\\Users\\Admin\\.gemini\\antigravity\\brain\\bf9875e6-0bfc-403a-8340-fc021bfd6bde\\scratch\\references";
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

const industryNames = {
  corporate_profile: "Doanh nghiệp B2B & Tập đoàn",
  b2b_product: "Showroom Thiết bị & B2B",
  lead_generation: "Tăng trưởng Doanh số",
  nha_khoa: "Nha khoa",
  spa: "Spa",
  tham_my_vien: "Thẩm mỹ viện",
  phong_kham: "Phòng khám",
  salon_toc: "Hair salon",
  luat_su: "Luật sư",
  trung_tam_tieng_anh: "Trung tâm tiếng Anh",
  dich_vu_ve_sinh: "Dịch vụ vệ sinh",
  noi_that: "Thiết kế nội thất",
  cong_ty_xay_dung: "Công ty xây dựng",
  nha_hang: "Nhà hàng sang trọng",
  quan_cafe: "Quán cafe",
  studio_chup_anh: "Studio chụp ảnh",
  phong_gym: "Gym fitness",
  garage_oto: "Garage ô tô",
};

// 1. Ensure every catalog item has preview image in public/ and check which templates exist on disk
const existingCloned = [];
const missingCloned = [];
let copiedPreviews = 0;

for (const item of catalog) {
  // Ensure preview image exists in public/
  if (item.previewWebp) {
    const publicPreviewPath = path.join(rootDir, "public", item.previewWebp.replace(/^\//, ""));
    fs.mkdirSync(path.dirname(publicPreviewPath), { recursive: true });
    if (!fs.existsSync(publicPreviewPath) || fs.statSync(publicPreviewPath).size < 1000) {
      const candPng = path.join(refDir, `${item.id}-${item.templateKey}.png`);
      const candJpg = path.join(refDir, `${item.id}-${item.templateKey}.jpg`);
      const srcRef = fs.existsSync(candPng)
        ? candPng
        : fs.existsSync(candJpg)
        ? candJpg
        : null;
      if (srcRef) {
        fs.copyFileSync(srcRef, publicPreviewPath);
        copiedPreviews++;
      }
    }
  }

  const rendererPath = path.join(
    rootDir,
    "src/template-sources",
    item.templateKey,
    "components/demo/DemoTemplateRenderer.tsx"
  );
  const mockDataPath = path.join(
    rootDir,
    "src/template-sources",
    item.templateKey,
    "data/mockData.ts"
  );
  if (fs.existsSync(rendererPath) && fs.existsSync(mockDataPath)) {
    existingCloned.push(item);
  } else {
    missingCloned.push(item.templateKey);
  }
}

console.log(
  `Found ${existingCloned.length} / ${catalog.length} cloned templates on disk. Copied ${copiedPreviews} preview images to public/.`
);
if (missingCloned.length > 0) {
  console.log(`Currently building (${missingCloned.length}):`, missingCloned.join(", "));
}

// 2. Generate src/lib/templates/templateRegistry.tsx
const baseTemplates = [
  { key: "nha_khoa", path: "@/template-sources/nha_khoa/components/demo/DemoTemplateRenderer" },
  { key: "spa", path: "@/template-sources/spa/components/demo/DemoTemplateRenderer" },
  { key: "tham_my_vien", path: "@/template-sources/tham_my_vien/components/demo/DemoTemplateRenderer" },
  { key: "phong_kham", path: "@/template-sources/phong_kham/components/demo/DemoTemplateRenderer" },
  { key: "salon_toc", path: "@/template-sources/salon_toc/components/demo/DemoTemplateRenderer" },
  { key: "luat_su", path: "@/template-sources/luat_su/components/demo/DemoTemplateRenderer" },
  { key: "trung_tam_tieng_anh", path: "@/template-sources/trung_tam_tieng_anh/components/demo/DemoTemplateRenderer" },
  { key: "dich_vu_ve_sinh", path: "@/template-sources/dich_vu_ve_sinh/components/demo/DemoTemplateRenderer" },
  { key: "noi_that", path: "@/template-sources/noi_that/components/demo/DemoTemplateRenderer" },
  { key: "cong_ty_xay_dung", path: "@/template-sources/cong_ty_xay_dung/components/demo/DemoTemplateRenderer" },
  { key: "xay_dung_2", path: "@/template-sources/xay_dung_2/components/demo/DemoTemplateRenderer" },
  { key: "xay_dung_3", path: "@/template-sources/xay_dung_3/components/demo/DemoTemplateRenderer" },
  { key: "nha_hang", path: "@/template-sources/nha_hang/components/demo/DemoTemplateRenderer" },
  { key: "quan_cafe", path: "@/template-sources/quan_cafe/components/demo/DemoTemplateRenderer" },
  { key: "studio_chup_anh", path: "@/template-sources/studio_chup_anh/components/demo/DemoTemplateRenderer" },
  { key: "phong_gym", path: "@/template-sources/phong_gym/components/demo/DemoTemplateRenderer" },
  { key: "garage_oto", path: "@/template-sources/garage_oto/components/demo/DemoTemplateRenderer" },
  { key: "corporate_profile", path: "@/template-sources/corporate_profile/components/demo/templates/CorporateProfileTemplate" },
  { key: "b2b_product", path: "@/template-sources/b2b_product/components/demo/templates/B2BProductTemplate" },
  { key: "lead_generation", path: "@/template-sources/lead_generation/components/demo/templates/LeadGenerationTemplate" },
];

const allRegistryEntries = [
  ...baseTemplates,
  ...existingCloned.map((item) => ({
    key: item.templateKey,
    path: `@/template-sources/${item.templateKey}/components/demo/DemoTemplateRenderer`,
  })),
];

const registryLines = [
  `"use client";`,
  ``,
  `import dynamic from "next/dynamic";`,
  `import React from "react";`,
  ``,
  `// Using dynamic imports to keep the main bundle small across all templates`,
  `const templates: Record<string, React.ComponentType<any>> = {`,
  ...allRegistryEntries.map(
    (entry) =>
      `  ${entry.key}: dynamic(() => import("${entry.path}").then((mod: any) => mod.default || mod.DemoTemplateRenderer).catch(() => {\n    return function Fallback() { return <div className="p-8 text-center">Template "${entry.key}" đang được cập nhật.</div>; };\n  }), { ssr: true }),`
  ),
  `};`,
  ``,
  `export function getTemplateComponent(templateKey: string): React.ComponentType<any> | null {`,
  `  return templates[templateKey] || null;`,
  `}`,
  ``,
];

fs.writeFileSync(
  path.join(rootDir, "src/lib/templates/templateRegistry.tsx"),
  registryLines.join("\n"),
  "utf8"
);
console.log(`Updated src/lib/templates/templateRegistry.tsx with ${allRegistryEntries.length} templates.`);

// 3. Generate src/components/demo/DemoTemplateRenderer.tsx
const aliasMapEntries = [
  `  XD002: "xay_dung_2",`,
  `  xay_dung_2: "xay_dung_2",`,
  ...existingCloned.flatMap((item) => [
    `  ${JSON.stringify(item.id)}: ${JSON.stringify(item.templateKey)},`,
    `  ${JSON.stringify(item.templateKey)}: ${JSON.stringify(item.templateKey)},`,
  ]),
];

const demoRendererLines = [
  `"use client";`,
  ``,
  `import React from "react";`,
  `import type { DemoTemplateProps } from "@/types/demo";`,
  `import { StudioTemplateRenderer } from "./StudioTemplateRenderer";`,
  `import { getTemplateComponent } from "@/lib/templates/templateRegistry";`,
  ``,
  `const CLONED_TEMPLATE_KEY_MAP: Record<string, string> = {`,
  ...aliasMapEntries,
  `};`,
  ``,
  `export function DemoTemplateRenderer({ data }: DemoTemplateProps) {`,
  `  const rawKey = data?.template?.key as string | undefined;`,
  `  const resolvedClonedKey = rawKey ? CLONED_TEMPLATE_KEY_MAP[rawKey] : undefined;`,
  ``,
  `  if (resolvedClonedKey) {`,
  `    const CustomTemplateComponent = getTemplateComponent(resolvedClonedKey);`,
  `    if (CustomTemplateComponent) {`,
  `      return <CustomTemplateComponent data={data} />;`,
  `    }`,
  `  }`,
  ``,
  `  return <StudioTemplateRenderer data={data} />;`,
  `}`,
  ``,
];

fs.writeFileSync(
  path.join(rootDir, "src/components/demo/DemoTemplateRenderer.tsx"),
  demoRendererLines.join("\n"),
  "utf8"
);
console.log(`Updated src/components/demo/DemoTemplateRenderer.tsx with ${existingCloned.length + 1} standalone/cloned template mappings.`);

// 4. Generate clonedRenderTemplateItems in src/lib/templates/templateCatalog.ts
const industryOrderBase = {
  corporate_profile: 1,
  b2b_product: 2,
  lead_generation: 3,
  nha_khoa: 10,
  spa: 20,
  tham_my_vien: 30,
  phong_kham: 40,
  salon_toc: 50,
  luat_su: 60,
  trung_tam_tieng_anh: 70,
  dich_vu_ve_sinh: 80,
  noi_that: 90,
  cong_ty_xay_dung: 100,
  nha_hang: 110,
  quan_cafe: 120,
  studio_chup_anh: 130,
  phong_gym: 140,
  garage_oto: 150,
};

const industryCounters = {};
const clonedCatalogObjects = existingCloned.map((item) => {
  const ind = item.industryKey;
  industryCounters[ind] = (industryCounters[ind] || 0) + 1;
  const baseOrder = industryOrderBase[ind] || 100;
  const order =
    ind === "cong_ty_xay_dung"
      ? 102 + industryCounters[ind]
      : baseOrder + industryCounters[ind] * 0.05;

  const indLabel = industryNames[ind] || "Doanh nghiệp";
  const resolvedName =
    item.name ||
    item.title ||
    `Mẫu website ${indLabel} ${item.id}`;
  const resolvedDescription =
    item.description ||
    item.monaTitle ||
    `${item.packageName || `Mẫu website ${indLabel}`} thiết kế hiện đại, chuẩn SEO, tối ưu trải nghiệm người dùng và tỷ lệ chuyển đổi.`;
  const resolvedTags =
    Array.isArray(item.tags) && item.tags.length > 0
      ? item.tags
      : [indLabel, "Live Demo", "Mẫu website", "TAVIWEB"];

  return {
    id: item.id,
    type: "render_template",
    industryKey: item.industryKey,
    templateKey: item.templateKey,
    name: resolvedName,
    description: resolvedDescription,
    tags: resolvedTags,
    thumbnail: item.previewWebp,
    longPreviewImage: item.previewWebp,
    demoUrl: `/demo/mock-${item.industryKey}?template=${item.templateKey}`,
    packageName: item.packageName || `Gói website ${indLabel.toLowerCase()}`,
    status: "active",
    order: Number(order.toFixed(2)),
  };
});

const catalogTsPath = path.join(rootDir, "src/lib/templates/templateCatalog.ts");
let catalogTs = fs.readFileSync(catalogTsPath, "utf8");

const clonedBlockStart = "// --- BEGIN CLONED RENDER TEMPLATES ---";
const clonedBlockEnd = "// --- END CLONED RENDER TEMPLATES ---";

const clonedBlockCode = `${clonedBlockStart}
const clonedRenderTemplateItems: TemplateCatalogItem[] = ${JSON.stringify(
  clonedCatalogObjects,
  null,
  2
)};
${clonedBlockEnd}`;

if (catalogTs.includes(clonedBlockStart) && catalogTs.includes(clonedBlockEnd)) {
  const startIdx = catalogTs.indexOf(clonedBlockStart);
  const endIdx = catalogTs.indexOf(clonedBlockEnd) + clonedBlockEnd.length;
  catalogTs =
    catalogTs.slice(0, startIdx) + clonedBlockCode + catalogTs.slice(endIdx);
} else {
  const targetStr = "export const templateCatalog: TemplateCatalogItem[] =";
  const targetIdx = catalogTs.indexOf(targetStr);
  if (targetIdx === -1) {
    throw new Error("Could not find templateCatalog export in templateCatalog.ts");
  }
  catalogTs =
    catalogTs.slice(0, targetIdx) +
    clonedBlockCode +
    "\n\n" +
    catalogTs.slice(targetIdx);
}

const newExportCode = `const clonedIds = new Set(clonedRenderTemplateItems.map((item) => item.id));

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
`;

const firstClonedIdsIdx = catalogTs.indexOf("const clonedIds =");
const exportCatalogIdx = catalogTs.indexOf("export const templateCatalog: TemplateCatalogItem[] =");
const sliceFromIdx = firstClonedIdsIdx !== -1 ? firstClonedIdsIdx : exportCatalogIdx;

if (sliceFromIdx !== -1) {
  catalogTs = catalogTs.slice(0, sliceFromIdx) + newExportCode;
}

fs.writeFileSync(catalogTsPath, catalogTs, "utf8");
console.log(
  `Updated src/lib/templates/templateCatalog.ts with ${clonedCatalogObjects.length} complete cloned render_template entries.`
);
