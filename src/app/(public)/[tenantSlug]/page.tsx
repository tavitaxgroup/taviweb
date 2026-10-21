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

  // Fetch tenant's active products if ecommerce module is enabled
  let storeProducts: any[] = [];
  if (hasEcommerce) {
    const { data: prods } = await supabase
      .from("products")
      .select("*")
      .eq("tenant_id", tenant.id)
      .eq("status", "active")
      .order("created_at", { ascending: false });
    if (prods) {
      storeProducts = prods.map((p: any) => ({
        ...p,
        price: Number(p.price || 0),
        compare_price: Number(p.compare_price || 0),
        stock: Number(p.stock || 0),
        images: Array.isArray(p.images) ? p.images : [],
        variants: Array.isArray(p.variants) ? p.variants : [],
      }));
    }
  }

  const storeSettings = tenant.theme_config?.store_settings || {};

  // If the tenant has a template_key, render the specific template + Storefront Shop
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

      const data = buildData(tenant.id, partialData);

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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {tenant.name}
            </h1>
            <p className="text-gray-500">
              Website đang trong quá trình xây dựng.
            </p>
          </div>
        </div>
      )}
      {hasChatbot && <ChatbotWidget tenantId={tenant.id} />}
    </>
  );
}
