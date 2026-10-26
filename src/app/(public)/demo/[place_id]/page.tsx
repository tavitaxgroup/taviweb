import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoTemplateRenderer } from "@/components/demo/DemoTemplateRenderer";
import { UnderDevelopmentView } from "@/components/demo/UnderDevelopmentView";
import { IndustryTemplateHub } from "@/components/demo/IndustryTemplateHub";
import { buildDemoPageData } from "@/lib/demo/buildDemoPageData";
import { getMockLeadByPlaceId } from "@/lib/demo/mockDemoData";
import { routeTemplateByIndustry } from "@/lib/demo/templateRouter";
import { getBusinessByPlaceId } from "@/lib/supabase/server";
import {
  getTemplatesByIndustry,
  getIndustryByKey,
  templateCatalog,
} from "@/lib/templates/templateCatalog";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ place_id: string }>;
  searchParams?: Promise<{ template?: string; t?: string }>;
};

async function resolveLead(placeId: string) {
  if (placeId.startsWith("mock-")) {
    return getMockLeadByPlaceId(placeId);
  }
  const leadFromSupabase = await getBusinessByPlaceId(placeId);
  return leadFromSupabase ?? getMockLeadByPlaceId(placeId);
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { place_id } = await params;
  const { template: requestedTemplate, t } = (await searchParams) || {};
  const selectedTemplate = requestedTemplate || t;
  const lead = await resolveLead(decodeURIComponent(place_id));

  if (!lead) {
    return {
      title: "Không tìm thấy demo",
      robots: { index: false, follow: false },
    };
  }

  // Under development metadata
  if (!lead.industry || lead.industry === "dang_phat_trien") {
    return {
      title: `${lead.name ?? "Doanh nghiệp"} | Demo website TaviWeb`,
      description: `Bản xem trước giải pháp website cho ${lead.name ?? "doanh nghiệp"}. Thiết kế bởi TaviWeb.`,
      robots: { index: false, follow: false },
    };
  }

  const industryKey = routeTemplateByIndustry(lead.industry);
  const allTemplates = getTemplatesByIndustry(industryKey);
  const renderTemplates = allTemplates.filter(
    (item) => item.type === "render_template"
  );

  const isMockLead = place_id.startsWith("mock-");

  if (renderTemplates.length > 1 && !selectedTemplate && !isMockLead) {
    return {
      title: `Bộ sưu tập mẫu website cho ${lead.name ?? "Doanh nghiệp"} | Demo TaviWeb`,
      description: `Khám phá các phương án website mẫu được khởi tạo riêng theo dữ liệu của ${lead.name ?? "doanh nghiệp"}.`,
      robots: { index: false, follow: false },
    };
  }

  const matchedCatalogTemplate = selectedTemplate
    ? templateCatalog.find(
        (item) =>
          item.id === selectedTemplate || item.templateKey === selectedTemplate
      )
    : undefined;

  const activeTemplateKey =
    selectedTemplate === "xay_dung_2" ||
    selectedTemplate === "XD002" ||
    selectedTemplate === "xay_dung_3" ||
    selectedTemplate === "XD003"
      ? "cong_ty_xay_dung"
      : selectedTemplate === "NT003"
      ? "noi_that"
      : matchedCatalogTemplate?.industryKey || industryKey;

  const data = buildDemoPageData(lead, activeTemplateKey);

  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: {
      canonical: data.seo.canonicalPath,
    },
    robots: data.seo.noindex ? { index: false, follow: false } : undefined,
  };
}

export default async function DemoPage({ params, searchParams }: PageProps) {
  const { place_id } = await params;
  const { template: requestedTemplate, t } = (await searchParams) || {};
  const selectedTemplate = requestedTemplate || t;

  const placeId = decodeURIComponent(place_id);
  const lead = await resolveLead(placeId);

  if (!lead) notFound();

  // If the business industry is under development
  if (
    !lead.industry ||
    lead.industry === "dang_phat_trien" ||
    lead.demo_status === "pending"
  ) {
    return <UnderDevelopmentView lead={lead} />;
  }

  const industryKey = routeTemplateByIndustry(lead.industry);
  const allTemplates = getTemplatesByIndustry(industryKey);
  const renderTemplates = allTemplates.filter(
    (item) => item.type === "render_template"
  );

  const isMockLead = placeId.startsWith("mock-");

  // If this industry has MORE THAN 1 render template and client has not chosen a template yet:
  // Note: Mock leads (like mock-cong_ty_xay_dung) lead directly to template 1, not the hub
  if (renderTemplates.length > 1 && !selectedTemplate && !isMockLead) {
    const industryInfo = getIndustryByKey(industryKey);
    return (
      <IndustryTemplateHub
        lead={lead}
        placeId={placeId}
        industryName={industryInfo?.name || "Xây dựng"}
        renderTemplates={renderTemplates}
      />
    );
  }

  // Otherwise, determine which template to render:
  let activeTemplateKey = industryKey;
  let targetRendererKey: string = industryKey;
  let activeTemplateName = "Mẫu chuẩn";

  if (selectedTemplate) {
    if (selectedTemplate === "xay_dung_2" || selectedTemplate === "XD002") {
      activeTemplateKey = "cong_ty_xay_dung";
      targetRendererKey = "xay_dung_2";
      activeTemplateName = "Mẫu Kiến Trúc XD002 (Prague Architecture)";
    } else if (
      selectedTemplate === "xay_dung_3" ||
      selectedTemplate === "XD003" ||
      selectedTemplate === "NT003"
    ) {
      activeTemplateKey =
        industryKey === "noi_that" || selectedTemplate === "NT003"
          ? "noi_that"
          : "cong_ty_xay_dung";
      targetRendererKey = "xay_dung_3";
      activeTemplateName =
        "Mẫu Kiến Trúc & Nội Thất XD003 (BIM Creative Studio)";
    } else if (
      selectedTemplate === "cong_ty_xay_dung" ||
      selectedTemplate === "XD001"
    ) {
      activeTemplateKey = "cong_ty_xay_dung";
      targetRendererKey = "cong_ty_xay_dung";
      activeTemplateName = "Mẫu Xây Dựng XD001";
    } else {
      const matched =
        allTemplates.find(
          (templateItem) =>
            templateItem.id === selectedTemplate ||
            templateItem.templateKey === selectedTemplate
        ) ??
        templateCatalog.find(
          (templateItem) =>
            templateItem.id === selectedTemplate ||
            templateItem.templateKey === selectedTemplate
        );
      if (matched) {
        activeTemplateKey = matched.industryKey;
        targetRendererKey = matched.templateKey || selectedTemplate;
        activeTemplateName = matched.name;
      } else {
        activeTemplateKey = industryKey;
        targetRendererKey = selectedTemplate;
      }
    }
  } else if (renderTemplates.length > 0) {
    activeTemplateName = renderTemplates[0].name;
    targetRendererKey = renderTemplates[0].templateKey || industryKey;
  }

  const data = buildDemoPageData(lead, activeTemplateKey);
  data.template.key = targetRendererKey;

  return <DemoTemplateRenderer data={data} />;
}
