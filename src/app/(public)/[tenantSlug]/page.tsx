import type { Metadata } from "next";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
import "@/lib/supabase/pgRestEngine";
import { supabase } from "@/lib/supabase";
import { getTemplateDataBuilder } from "@/lib/templates/templateDataRegistry";
import { CompanyHome } from "@/components/company/CompanyHome";
import ChatbotWidget from "@/components/ChatbotWidget";
import { LivePreviewWrapper } from "@/components/LivePreviewWrapper";
import TenantStorefrontShop from "@/components/storefront/TenantStorefrontShop";
import TenantEcosystemShowcase from "@/components/storefront/TenantEcosystemShowcase";
import {
  SuspendedWebsiteView,
  TrialWebsiteBanner,
} from "@/components/storefront/SuspendedWebsiteView";

type Props = {
  params: Promise<{ tenantSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { data: tenant } = await supabase
    .from("tenants")
    .select("name, theme_config")
    .eq("slug", resolvedParams.tenantSlug)
    .single();

  if (!tenant) return { title: "Not Found" };

  return {
    title: `${tenant.name} - Powered by TAVIWEB`,
  };
}

export default async function TenantHomePage({ params }: Props) {
  const resolvedParams = await params;
  const { data: tenant } = await supabase
    .from("tenants")
    .select("*")
    .eq("slug", resolvedParams.tenantSlug)
    .single();

  if (!tenant) {
    notFound();
  }

  // Fallback to CompanyHome for the 'tavi' main system site
  if (tenant.slug === "tavi") {
    return <CompanyHome />;
  }

  // Check if 7-day trial or subscription package has expired
  const isExpired =
    Boolean(tenant.package_expires_at) &&
    new Date(tenant.package_expires_at).getTime() < Date.now();

  if (isExpired) {
    return (
      <SuspendedWebsiteView
        tenantName={tenant.name}
        tenantSlug={tenant.slug}
        expiredAt={tenant.package_expires_at}
      />
    );
  }

  const isTrial =
    Boolean(tenant.package_expires_at) &&
    (!tenant.package_id ||
      String(tenant.package_name || "").toLowerCase().includes("dùng thử") ||
      String(tenant.package_name || "").toLowerCase().includes("trial"));

  const hasChatbot = tenant.active_modules?.includes("chatbot");
  const hasEcommerce = tenant.active_modules?.includes("ecommerce");

  // Fetch tenant's live Booking Services, Booking Resources, Published CMS Posts, and Products in parallel
  const [servicesRes, resourcesRes, postsRes, prodsRes] = await Promise.all([
    supabase
      .from("booking_services")
      .select("id, name, duration_minutes, price")
      .eq("tenant_id", tenant.id)
      .order("created_at", { ascending: true }),
    supabase
      .from("booking_resources")
      .select("id, name, type, role_or_capacity, status")
      .eq("tenant_id", tenant.id)
      .eq("status", "active")
      .order("created_at", { ascending: true }),
    supabase
      .from("posts")
      .select("id, title, slug, content, thumbnail_url, meta_description, created_at")
      .eq("tenant_id", tenant.id)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(4),
    hasEcommerce
      ? supabase
          .from("products")
          .select("*")
          .eq("tenant_id", tenant.id)
          .eq("status", "active")
          .order("created_at", { ascending: false })
      : Promise.resolve({ data: [] as any[] }),
  ]);

  const bookingServices = (servicesRes.data || []).map((s: any) => ({
    ...s,
    price: Number(s.price || 0),
    duration_minutes: Number(s.duration_minutes || 60),
  }));
  const bookingResources = resourcesRes.data || [];
  const cmsPosts = postsRes.data || [];

  const storeProducts: any[] = (prodsRes.data || []).map((p: any) => ({
    ...p,
    price: Number(p.price || 0),
    compare_price: Number(p.compare_price || 0),
    stock: Number(p.stock || 0),
    images: Array.isArray(p.images) ? p.images : [],
    variants: Array.isArray(p.variants) ? p.variants : [],
  }));

  const storeSettings = tenant.theme_config?.store_settings || {};
  const bookingUrl = `/${tenant.slug}/booking`;
  const blogUrl = `/${tenant.slug}/blog`;

  const ecosystemProps = {
    tenantId: tenant.id,
    tenantSlug: tenant.slug,
    tenantName: tenant.name,
    services: bookingServices,
    resources: bookingResources,
    posts: cmsPosts,
  };

  // If the tenant has a template_key, render the specific template + Ecosystem (Booking + CRM + CMS) + Storefront Shop
  if (tenant.template_key) {
    const buildData = getTemplateDataBuilder(tenant.template_key);

    if (buildData) {
      const overrides = tenant.theme_config?.website_overrides || {};
      const partialData: any = {
        business: {
          id: tenant.id,
          placeId: tenant.id,
          name: tenant.name,
          address: tenant.contact_info?.address || "Việt Nam",
          phone: tenant.contact_info?.phone || "0901234567",
          email: tenant.contact_info?.email || undefined,
          ...(overrides.business || {}),
        },
        ...overrides,
      };

      const data: any = buildData(tenant.id, partialData);

      // Connect all Booking / Consultation buttons directly to the tenant's live /booking & CRM sections
      data.bookingUrl = bookingUrl;
      data.blogUrl = blogUrl;
      data.ecosystemProps = ecosystemProps;

      if (data.hero) {
        data.hero.primaryAction = {
          label: data.hero.primaryAction?.label || "Đặt lịch hẹn trực tuyến",
          href: bookingUrl,
        };
        data.hero.primaryCta = {
          label: data.hero.primaryCta?.label || "Đặt lịch hẹn trực tuyến",
          href: bookingUrl,
        };
        data.hero.secondaryAction = {
          label: "Đăng ký tư vấn 1:1",
          href: "#crm-lead-section",
        };
      }

      if (data.contact) {
        data.contact.primaryAction = {
          label: "Đặt lịch hẹn trực tuyến ngay",
          href: bookingUrl,
        };
      }

      const isInlineEcosystemTemplate = tenant.template_key === "tham_my_vien";

      return (
        <>
          {isTrial && tenant.package_expires_at && (
            <TrialWebsiteBanner
              tenantName={tenant.name}
              tenantSlug={tenant.slug}
              expiresAt={tenant.package_expires_at}
            />
          )}
          <LivePreviewWrapper
            initialData={data}
            templateKey={tenant.template_key}
          />
          {!isInlineEcosystemTemplate && (
            <TenantEcosystemShowcase {...ecosystemProps} />
          )}
          {hasEcommerce && (
            <TenantStorefrontShop
              tenantId={tenant.id}
              tenantName={tenant.name}
              tenantSlug={tenant.slug}
              products={storeProducts}
              storeSettings={storeSettings}
            />
          )}
          {hasChatbot && <ChatbotWidget tenantId={tenant.id} />}
        </>
      );
    }
  }

  return (
    <>
      {isTrial && tenant.package_expires_at && (
        <TrialWebsiteBanner
          tenantName={tenant.name}
          tenantSlug={tenant.slug}
          expiresAt={tenant.package_expires_at}
        />
      )}
      {hasEcommerce && storeProducts.length > 0 ? (
        <TenantStorefrontShop
          tenantId={tenant.id}
          tenantName={tenant.name}
          tenantSlug={tenant.slug}
          products={storeProducts}
          storeSettings={storeSettings}
        />
      ) : (
        <TenantEcosystemShowcase {...ecosystemProps} />
      )}
      {hasChatbot && <ChatbotWidget tenantId={tenant.id} />}
    </>
  );
}
