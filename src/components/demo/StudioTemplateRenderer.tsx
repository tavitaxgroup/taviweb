"use client";

import type { ComponentType, CSSProperties } from "react";
import type { DemoPageData, IndustryKey } from "@/types/demo";
import { getTemplateDefaults } from "@/lib/demo/templateDefaults";
import AestheticClinicTemplate from "@/template-sources/tham_my_vien/components/demo/templates/AestheticClinicTemplate";
import AutoGarageTemplate from "@/template-sources/garage_oto/components/demo/templates/AutoGarageTemplate";
import CafeTemplate from "@/template-sources/quan_cafe/components/demo/templates/CafeTemplate";
import { CleaningServiceTemplate } from "@/template-sources/dich_vu_ve_sinh/components/demo/templates/CleaningServiceTemplate";
import { ConstructionCompanyTemplate } from "@/template-sources/cong_ty_xay_dung/components/demo/templates/ConstructionCompanyTemplate";
import DentalTemplate from "@/template-sources/nha_khoa/components/demo/templates/DentalTemplate";
import EnglishCenterTemplate from "@/template-sources/trung_tam_tieng_anh/components/demo/templates/EnglishCenterTemplate";
import FineDiningRestaurantTemplate from "@/template-sources/nha_hang/components/demo/templates/FineDiningRestaurantTemplate";
import GeneralClinicTemplate from "@/template-sources/phong_kham/components/demo/templates/GeneralClinicTemplate";
import GymFitnessTemplate from "@/template-sources/phong_gym/components/demo/templates/GymFitnessTemplate";
import HairSalonTemplate from "@/template-sources/salon_toc/components/demo/templates/HairSalonTemplate";
import InteriorDesignTemplate from "@/template-sources/noi_that/components/demo/templates/InteriorDesignTemplate";
import LawFirmTemplate from "@/template-sources/luat_su/components/demo/templates/LawFirmTemplate";
import SpaTemplate from "@/template-sources/spa/components/demo/templates/SpaTemplate";
import WeddingStudioTemplate from "@/template-sources/studio_chup_anh/components/demo/templates/WeddingStudioTemplate";
import CorporateProfileTemplate from "@/template-sources/corporate_profile/components/demo/templates/CorporateProfileTemplate";
import B2BProductTemplate from "@/template-sources/b2b_product/components/demo/templates/B2BProductTemplate";
import LeadGenerationTemplate from "@/template-sources/lead_generation/components/demo/templates/LeadGenerationTemplate";

import { buildDemoPageData as buildCorporateBase } from "@/template-sources/corporate_profile/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildB2BProductBase } from "@/template-sources/b2b_product/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildLeadGenBase } from "@/template-sources/lead_generation/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildConstructionBase } from "@/template-sources/cong_ty_xay_dung/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildCleaningBase } from "@/template-sources/dich_vu_ve_sinh/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildGarageBase } from "@/template-sources/garage_oto/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildLawFirmBase } from "@/template-sources/luat_su/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildRestaurantBase } from "@/template-sources/nha_hang/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildDentalBase } from "@/template-sources/nha_khoa/lib/demo/buildDemoPageData";
import { getMockDemoData as getDentalRawBase } from "@/template-sources/nha_khoa/lib/demo/mockDemoData";
import { buildDemoPageData as buildInteriorBase } from "@/template-sources/noi_that/lib/demo/buildDemoPageData";
import { getMockBusinessByPlaceId as getGymBase } from "@/template-sources/phong_gym/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildClinicBase } from "@/template-sources/phong_kham/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildCafeBase } from "@/template-sources/quan_cafe/lib/demo/buildDemoPageData";
import { buildDemoPageData as buildSalonBase } from "@/template-sources/salon_toc/lib/demo/buildDemoPageData";
import { getMockDemoData as getSpaBase } from "@/template-sources/spa/lib/demo/mockDemoData";
import { buildDemoPageData as buildWeddingBase } from "@/template-sources/studio_chup_anh/lib/demo/buildDemoPageData";
import { getDefaultBusiness as getWeddingRawBase } from "@/template-sources/studio_chup_anh/lib/demo/mockDemoData";
import { getMockDemoData as getAestheticBase } from "@/template-sources/tham_my_vien/lib/demo/mockDemoData";
import { buildDemoPageData as buildEnglishBase } from "@/template-sources/trung_tam_tieng_anh/lib/demo/buildDemoPageData";

type StudioTemplateProps = {
  data: unknown;
};

const studioTemplateRegistry: Record<IndustryKey, ComponentType<StudioTemplateProps>> = {
  corporate_profile: CorporateProfileTemplate as ComponentType<StudioTemplateProps>,
  b2b_product: B2BProductTemplate as ComponentType<StudioTemplateProps>,
  lead_generation: LeadGenerationTemplate as ComponentType<StudioTemplateProps>,
  phong_kham: GeneralClinicTemplate as ComponentType<StudioTemplateProps>,
  quan_cafe: CafeTemplate as ComponentType<StudioTemplateProps>,
  garage_oto: AutoGarageTemplate as ComponentType<StudioTemplateProps>,
  tham_my_vien: AestheticClinicTemplate as ComponentType<StudioTemplateProps>,
  nha_hang: FineDiningRestaurantTemplate as ComponentType<StudioTemplateProps>,
  noi_that: InteriorDesignTemplate as ComponentType<StudioTemplateProps>,
  spa: SpaTemplate as ComponentType<StudioTemplateProps>,
  cong_ty_xay_dung: ConstructionCompanyTemplate as ComponentType<StudioTemplateProps>,
  luat_su: LawFirmTemplate as ComponentType<StudioTemplateProps>,
  dich_vu_ve_sinh: CleaningServiceTemplate as ComponentType<StudioTemplateProps>,
  salon_toc: HairSalonTemplate as ComponentType<StudioTemplateProps>,
  nha_khoa: DentalTemplate as ComponentType<StudioTemplateProps>,
  studio_chup_anh: WeddingStudioTemplate as ComponentType<StudioTemplateProps>,
  trung_tam_tieng_anh: EnglishCenterTemplate as ComponentType<StudioTemplateProps>,
  phong_gym: GymFitnessTemplate as ComponentType<StudioTemplateProps>
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function asTelHref(phone?: string) {
  return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#contact";
}

function normalizeExternalHref(value?: string) {
  let url = value?.trim();
  if (!url) return undefined;
  url = url.replace(/^https?:\/\//i, "");
  url = url.replace(/^https?:\/+/i, "");
  url = url.replace(/^https\/+/i, "");
  url = url.replace(/^http\/+/i, "");
  url = url.replace(/^\/+/, "");
  return `https://${url}`;
}

function normalizeFacebookLabel(label?: string, fallback = "Liên hệ Facebook") {
  return (label || fallback).replace(/MessageCircle/g, "Facebook");
}

function shouldUseFacebookAction(action?: { label?: string; href?: string }) {
  const label = action?.label ?? "";
  const href = action?.href ?? "";
  return /facebook|messagecircle/i.test(`${label} ${href}`);
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripBusinessNameFromHeroTitle(title?: string, names: Array<string | undefined> = [], fallback?: string) {
  let output = title?.replace(/\s+/g, " ").trim() ?? "";

  for (const name of names) {
    const normalizedName = name?.replace(/\s+/g, " ").trim();
    if (!normalizedName) continue;
    const escapedName = escapeRegExp(normalizedName);
    output = output
      .replace(new RegExp(`^${escapedName}\\s*[-|–—:]\\s*`, "i"), "")
      .replace(new RegExp(`\\s*[-|–—:]\\s*${escapedName}$`, "i"), "")
      .replace(new RegExp(`\\s+(tại|tai|at)\\s+${escapedName}$`, "i"), "")
      .replace(new RegExp(`\\s+(tại|tai|at)\\s+${escapedName}\\s*,?\\s*`, "i"), " $1 ")
      .replace(new RegExp(`\\b${escapedName}\\b`, "i"), "")
      .replace(new RegExp(`^${escapedName}$`, "i"), "")
      .replace(/\s+,/g, ",")
      .replace(/,\s*$/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  if (output) return output;
  if (fallback && fallback !== title) return stripBusinessNameFromHeroTitle(fallback, names);
  return fallback?.trim() || title?.trim() || "";
}

function getDisplayName(name: string, maxLength = 72) {
  const normalized = name.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const words = normalized.split(" ");
  let output = "";

  for (const word of words) {
    const next = output ? `${output} ${word}` : word;
    if (next.length > maxLength - 3) break;
    output = next;
  }

  return `${output || normalized.slice(0, maxLength - 3)}...`;
}

function getOriginalStudioData(templateKey: IndustryKey): Record<string, any> {
  const fallbackPlaceId = "__template_preview__";

  switch (templateKey) {
    case "corporate_profile":
      return clone(buildCorporateBase() as unknown as Record<string, any>);
    case "b2b_product":
      return clone(buildB2BProductBase() as unknown as Record<string, any>);
    case "lead_generation":
      return clone(buildLeadGenBase() as unknown as Record<string, any>);
    case "phong_kham":
      return clone(buildClinicBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "quan_cafe":
      return clone(buildCafeBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "garage_oto":
      return clone(buildGarageBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "tham_my_vien":
      return clone(getAestheticBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "nha_hang":
      return clone(buildRestaurantBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "noi_that":
      return clone(buildInteriorBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "spa":
      return clone(getSpaBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "cong_ty_xay_dung":
      return clone(buildConstructionBase() as unknown as Record<string, any>);
    case "luat_su":
      return clone(buildLawFirmBase() as unknown as Record<string, any>);
    case "dich_vu_ve_sinh":
      return clone(buildCleaningBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "salon_toc":
      return clone(buildSalonBase(fallbackPlaceId) as unknown as Record<string, any>);
    case "nha_khoa":
      return clone(buildDentalBase(getDentalRawBase(fallbackPlaceId)) as unknown as Record<string, any>);
    case "studio_chup_anh":
      return clone(buildWeddingBase(getWeddingRawBase()) as unknown as Record<string, any>);
    case "trung_tam_tieng_anh":
      return clone(buildEnglishBase({}) as unknown as Record<string, any>);
    case "phong_gym":
      return clone(getGymBase(fallbackPlaceId) as unknown as Record<string, any>);
    default:
      return clone(buildClinicBase(fallbackPlaceId) as unknown as Record<string, any>);
  }
}

function replaceTextDeep(value: unknown, replacements: Array<[string | undefined, string | undefined]>): unknown {
  if (typeof value === "string") {
    return replacements.reduce((current, [from, to]) => {
      if (!from || !to || from === to) return current;
      return current.split(from).join(to);
    }, value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceTextDeep(item, replacements));
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(value)) {
      output[key] = replaceTextDeep(nested, replacements);
    }
    return output;
  }

  return value;
}

function applyLeadIdentity(baseData: Record<string, any>, leadData: DemoPageData) {
  const originalBusiness = baseData.business ?? {};
  const originalHeroTitle = baseData.hero?.title;
  const lead = leadData.business;
  const fullName = lead.name;
  const rating = leadData.trust.rating;
  const reviewCount = leadData.trust.reviewCount;
  const followers = leadData.trust.followers;

  const replaced = replaceTextDeep(baseData, [
    [originalBusiness.name, fullName],
    [originalBusiness.logoText, fullName],
    ["AURA CLINIC", fullName],
    ["Aura Clinic", fullName],
    ["Lumina Spa", fullName],
    [originalBusiness.phone, lead.phone],
    [originalBusiness.address, lead.address],
    [originalBusiness.email, lead.email],
    [originalBusiness.facebook, lead.facebookUrl],
    [originalBusiness.facebookUrl, lead.facebookUrl],
    [originalBusiness.MessageCircle, lead.facebookUrl]
  ]) as Record<string, any>;

  replaced.business = {
    ...(replaced.business ?? {}),
    id: lead.id,
    placeId: lead.placeId,
    place_id: lead.placeId,
    name: fullName,
    fullName,
    phone: lead.phone ?? replaced.business?.phone,
    phoneAlt: lead.phone ?? replaced.business?.phoneAlt,
    email: lead.email ?? replaced.business?.email,
    logoText: fullName,
    address: lead.address ?? replaced.business?.address,
    facebook: lead.facebookUrl ?? replaced.business?.facebook,
    facebookUrl: lead.facebookUrl ?? replaced.business?.facebookUrl,
    MessageCircle: lead.facebookUrl ?? replaced.business?.MessageCircle,
    rating: rating ?? replaced.business?.rating,
    reviewCount: reviewCount ?? replaced.business?.reviewCount,
    followers: followers ?? replaced.business?.followers,
    facebookFollowers: followers ?? replaced.business?.facebookFollowers,
    logoUrl: lead.logoUrl ?? replaced.business?.logoUrl,
    logo_url: lead.logoUrl ?? replaced.business?.logo_url ?? replaced.business?.logoUrl
  };

  replaced.template = {
    ...(replaced.template ?? {}),
    key: leadData.template.key,
    name: replaced.template?.name ?? leadData.template.label,
    label: leadData.template.label
  };

  if (replaced.hero) {
    replaced.hero.title = stripBusinessNameFromHeroTitle(replaced.hero.title, [
      fullName,
      originalBusiness.name,
      originalBusiness.logoText,
      originalHeroTitle,
      "AURA CLINIC",
      "Aura Clinic",
      "Lumina Spa"
    ], leadData.hero.title);

    if (leadData.hero.subtitle) {
      replaced.hero.subtitle = leadData.hero.subtitle;
      replaced.hero.description = leadData.hero.subtitle;
    }
    if (leadData.hero.eyebrow) {
      replaced.hero.eyebrow = leadData.hero.eyebrow;
      replaced.hero.badge = leadData.hero.eyebrow;
      replaced.hero.tagline = leadData.hero.eyebrow;
    }
  }

  if (replaced.about) {
    if (leadData.about.title) {
      replaced.about.title = leadData.about.title;
    }
    if (leadData.about.body) {
      replaced.about.body = leadData.about.body;
      replaced.about.description = leadData.about.body;
    }
  }

  if (replaced.contact) {
    replaced.contact = {
      ...replaced.contact,
      phone: lead.phone ?? replaced.contact.phone,
      phoneAlt: lead.phone ?? replaced.contact.phoneAlt,
      email: lead.email ?? replaced.contact.email,
      address: lead.address ?? replaced.contact.address,
      facebook: lead.facebookUrl ?? replaced.contact.facebook,
      facebookUrl: lead.facebookUrl ?? replaced.contact.facebookUrl,
      MessageCircle: lead.facebookUrl ?? replaced.contact.MessageCircle
    };

    if (lead.phone && replaced.contact.primaryAction) {
      replaced.contact.primaryAction = {
        ...replaced.contact.primaryAction,
        href: asTelHref(lead.phone)
      };
    }

    if (lead.phone && replaced.contact.phoneAction) {
      replaced.contact.phoneAction = {
        ...replaced.contact.phoneAction,
        href: asTelHref(lead.phone)
      };
    }
  }

  replaced.seo = {
    ...(replaced.seo ?? {}),
    title: leadData.seo.title,
    description: leadData.seo.description,
    noindex: leadData.seo.noindex
  };

  return addCompatibilityFields(replaced, leadData);
}

function firstImageFrom(baseData: Record<string, any>) {
  return (
    baseData.hero?.image ??
    baseData.hero?.bgImage ??
    baseData.about?.image ??
    baseData.gallery?.[0]?.image ??
    baseData.gallery?.[0] ??
    undefined
  );
}

function addCompatibilityFields(baseData: Record<string, any>, leadData: DemoPageData) {
  const firstImage = firstImageFrom(baseData);
  const rating = leadData.trust.rating ?? baseData.business?.rating ?? 4.8;
  const reviewCount = leadData.trust.reviewCount ?? baseData.business?.reviewCount ?? 120;
  const followers = leadData.trust.followers ?? baseData.business?.followers ?? 1200;
  const facebookHref =
    normalizeExternalHref(
      leadData.business.facebookUrl ??
      baseData.business?.facebookUrl ??
      baseData.business?.facebook ??
      baseData.business?.MessageCircle ??
      baseData.contact?.facebookUrl ??
      baseData.contact?.facebook ??
      baseData.contact?.MessageCircle
    );
  const statValues = [
    { value: Number(rating).toFixed(1), label: "Google rating" },
    { value: `${reviewCount}+`, label: "reviews" },
    { value: `${Number(followers).toLocaleString("vi-VN")}+`, label: "followers" }
  ];

  if (baseData.hero) {
    const primaryAction =
      baseData.hero.primaryAction ??
      baseData.hero.primaryCta ??
      leadData.hero.primaryCta ??
      leadData.contact.primaryAction;
    const secondaryAction =
      baseData.hero.secondaryAction ??
      baseData.hero.secondaryCta ??
      leadData.hero.secondaryCta ??
      leadData.contact.secondaryAction;

    const heroImgSrc = (typeof baseData.hero.image === "string" ? baseData.hero.image : baseData.hero.image?.src) ?? (typeof firstImage === "string" ? firstImage : firstImage?.src);
    baseData.hero.bgImage ??= baseData.hero.image ?? firstImage;
    baseData.hero.backgroundImage ??=
      leadData.template.key === "quan_cafe" ? baseData.hero.image ?? firstImage : (heroImgSrc || "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80");
    baseData.hero.primaryAction = {
      label: primaryAction?.label || leadData.contact.primaryAction.label,
      href: primaryAction?.href || leadData.contact.primaryAction.href
    };
    baseData.hero.secondaryAction =
      facebookHref && shouldUseFacebookAction(secondaryAction)
        ? {
          label: normalizeFacebookLabel(secondaryAction?.label, "Liên hệ Facebook"),
          href: facebookHref
        }
        : secondaryAction
          ? {
            label: secondaryAction.label || leadData.contact.secondaryAction?.label || "Xem thêm",
            href: secondaryAction.href || leadData.contact.secondaryAction?.href || "#contact"
          }
          : undefined;
    baseData.hero.primaryCta ??= baseData.hero.primaryAction;
    baseData.hero.secondaryCta ??= baseData.hero.secondaryAction;
    baseData.hero.primaryCtaText ??= baseData.hero.primaryAction.label;
    baseData.hero.secondaryCtaText ??= baseData.hero.secondaryAction?.label ?? "Xem dịch vụ";
    baseData.hero.stats ??= {
      badge: "Thông tin nổi bật",
      title: leadData.template.label,
      values: statValues
    };
  }

  if (baseData.trust) {
    baseData.trust.metrics ??= statValues.map((item) => ({ value: item.value, label: item.label.toUpperCase() }));
    baseData.trust.items ??= [
      { icon: "Star", value: statValues[0].value, label: "Google rating" },
      { icon: "MessageCircle", value: `${reviewCount}+`, label: "Đánh giá" },
      { icon: "Users", value: `${Number(followers).toLocaleString("vi-VN")}+`, label: "Theo dõi" }
    ];
    baseData.trust.achievements ??= leadData.trust.badges;
  }

  const isB2B = ["corporate_profile", "b2b_product", "lead_generation"].includes(leadData.template.key);

  const isMedicalOrConstructionImage = (src?: string) => {
    if (!src) return false;
    return /photo-1576091160550|photo-1505751172876|photo-1580281657527|photo-1519494026892|photo-1516549655169|photo-1541888946425|photo-1503387762-592deb58ef4e/i.test(src);
  };

  if (baseData.about) {
    baseData.about.stats ??= statValues;
    if (leadData.business.aboutImageUrl && (!isB2B || !isMedicalOrConstructionImage(leadData.business.aboutImageUrl))) {
      baseData.about.image = {
        src: leadData.business.aboutImageUrl,
        alt: `Hình ảnh giới thiệu của ${leadData.business.name}`
      };
      baseData.about.bgImage = baseData.about.image;
    }
    if (leadData.about.highlights && leadData.about.highlights.length > 0) {
      if (leadData.template.key === "trung_tam_tieng_anh") {
        baseData.about.features = leadData.about.highlights.map((feat, index) => {
          const parts = feat.split(/[:\-]/);
          const title = parts[0]?.trim() || "Ưu điểm";
          const description = parts.slice(1).join("-")?.trim() || "Chương trình học chuẩn hóa quốc tế.";
          return {
            title,
            description,
            icon: ["Target", "Heart", "Sparkles"][index % 3]
          };
        });
        baseData.about.points = baseData.about.features;
      } else {
        baseData.about.features = leadData.about.highlights;
        baseData.about.points = leadData.about.highlights;
      }
    } else {
      baseData.about.points ??= baseData.about.points ?? baseData.about.features;
      baseData.about.features ??= baseData.about.features ?? baseData.about.points;
    }
    baseData.about.content ??= [baseData.about.description, baseData.about.description1, baseData.about.description2]
      .filter(Boolean)
      .join("\n\n");
  }

  const isMock = leadData.business.placeId?.startsWith("mock-");
  if (!isB2B && (isMock || (leadData.template.customData && leadData.template.customData.services))) {
    baseData.services = leadData.services;
  }
  if (!isB2B && (isMock || (leadData.template.customData && (leadData.template.customData.gallery_urls || leadData.template.customData.gallery)))) {
    baseData.gallery = leadData.gallery;
  }
  if (isMock || (leadData.template.customData && leadData.template.customData.reviews)) {
    baseData.reviews = leadData.reviews;
  }

  if (Array.isArray(baseData.services)) {
    const defaultServiceImages = [
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ];
    baseData.services = baseData.services.map((service: Record<string, any>, index: number) => {
      const fallbackSrc = defaultServiceImages[index % defaultServiceImages.length];
      const imgSrc = service.image?.src ?? service.image_url ?? service.img ?? fallbackSrc;
      const imgAlt = service.image?.alt ?? service.title ?? service.name ?? `Dịch vụ ${index + 1}`;
      return {
        ...service,
        id: service.id ?? `service-${index}`,
        title: service.title ?? service.name ?? `Dịch vụ ${index + 1}`,
        name: service.name ?? service.title ?? `Dịch vụ ${index + 1}`,
        description: service.description ?? "",
        icon: service.icon ?? service.iconName ?? "Sparkles",
        iconName: service.iconName ?? service.icon ?? "Sparkles",
        image: typeof service.image === "object" && service.image?.src ? service.image : { src: imgSrc, alt: imgAlt }
      };
    });
  }

  if (Array.isArray(baseData.gallery)) {
    baseData.gallery = baseData.gallery.map((item: Record<string, any>, index: number) => {
      const src = item.src ?? item.image?.src ?? "";
      const alt = item.alt ?? item.image?.alt ?? `Gallery ${index + 1}`;
      return {
        ...item,
        id: item.id ?? `gallery-${index}`,
        src,
        alt,
        image: item.image ?? { src, alt },
        title: item.title ?? item.caption ?? alt,
        category: item.category ?? item.caption ?? alt
      };
    });
  }

  if (Array.isArray(baseData.reviews)) {
    baseData.reviews = baseData.reviews.map((review: Record<string, any>, index: number) => {
      const author = review.authorName ?? review.author ?? "Khách hàng";
      const text = review.text ?? review.content ?? review.quote ?? "Ý kiến đánh giá";
      return {
        ...review,
        id: review.id ?? `review-${index}`,
        author,
        authorName: author,
        authorInitials:
          review.authorInitials ??
          author
            .split(" ")
            .map((part: string) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase(),
        text,
        content: text,
        quote: text,
        role: review.role ?? review.authorRole ?? "Khách hàng",
        vehicle: review.vehicle ?? leadData.business.industry
      };
    });
  }

  if (baseData.contact) {
    const primaryAction =
      baseData.contact.primaryAction ??
      leadData.contact.primaryAction ??
      baseData.hero?.primaryAction;
    const secondaryAction =
      baseData.contact.secondaryAction ??
      leadData.contact.secondaryAction ??
      baseData.hero?.secondaryAction;

    baseData.contact.features ??= leadData.about.highlights;
    baseData.contact.location ??= baseData.contact.address ?? getDisplayName(leadData.business.name);
    baseData.contact.hours ??= ["Thứ 2 - Thứ 6: 8:00 - 17:00", "Thứ 7: 8:00 - 11:30", "Chủ nhật: Nghỉ"];
    baseData.contact.workingHours ??= baseData.contact.hours;
    if (Array.isArray(baseData.contact.workingHours)) {
      baseData.contact.workingHours = baseData.contact.workingHours.join(" | ");
    }
    const firstImgSrc = (typeof firstImage === "string" ? firstImage : firstImage?.src) || "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80";
    baseData.contact.mapImage ??= leadData.template.key === "garage_oto" ? firstImage : firstImgSrc;
    baseData.contact.socialLinks = {
      website: facebookHref || normalizeExternalHref(leadData.business.website),
      email: baseData.contact.email || leadData.business.email,
      MessageCircle: facebookHref || baseData.contact.facebookUrl || leadData.business.facebookUrl
    };
    baseData.contact.primaryAction = {
      label: primaryAction?.label || leadData.contact.primaryAction.label,
      href: primaryAction?.href || leadData.contact.primaryAction.href
    };
    baseData.contact.secondaryAction =
      facebookHref
        ? {
          label: shouldUseFacebookAction(secondaryAction) ? normalizeFacebookLabel(secondaryAction?.label, "Liên hệ Facebook") : "Liên hệ Facebook",
          href: facebookHref
        }
        : secondaryAction
          ? {
            label: secondaryAction.label || leadData.contact.secondaryAction?.label || "Xem bản đồ",
            href: secondaryAction.href || leadData.contact.secondaryAction?.href || "#contact"
          }
          : undefined;
  }

  baseData.stats ??= statValues;
  baseData.hours ??= baseData.contact?.hours;
  baseData.whyChooseUs ??= {
    items: leadData.about.highlights.map((item, index) => ({
      id: `why-${index}`,
      icon: ["ShieldCheck", "Sparkles", "MapPin"][index % 3],
      title: item,
      description: "Thông tin này được tự động cá nhân hóa theo ngành và dữ liệu lead."
    }))
  };

  if (isMock) {
    if (baseData.business) {
      baseData.business.name = "[business.name]";
      baseData.business.logoText = "[business.name]";
      baseData.business.phone = "[contact.phone]";
      baseData.business.email = "[contact.email]";
      baseData.business.address = "[contact.address]";
      baseData.business.facebookUrl = "https://[contact.MessageCircle]";
      baseData.business.logoUrl = `https://placehold.co/120x120/073b8e/ffffff?text=[logo_url]`;
      baseData.business.logo_url = `https://placehold.co/120x120/073b8e/ffffff?text=[logo_url]`;
      baseData.business.logoUrlString = `https://placehold.co/120x120/073b8e/ffffff?text=[logo_url]`;
    }
    if (baseData.hero) {
      baseData.hero.title = "[hero.title]";
      baseData.hero.subtitle = "[hero.subtitle]";
      baseData.hero.description = "[hero.subtitle]";
      baseData.hero.eyebrow = "[hero.eyebrow]";
      baseData.hero.badge = "[hero.eyebrow]";
      baseData.hero.tagline = "[hero.eyebrow]";
      baseData.hero.primaryAction = { label: "[hero.primaryCta.label]", href: "#" };
      baseData.hero.secondaryAction = { label: "[hero.secondaryCta.label]", href: "#" };
      baseData.hero.primaryCta = { label: "[hero.primaryCta.label]", href: "#" };
      baseData.hero.secondaryCta = { label: "[hero.secondaryCta.label]", href: "#" };
      baseData.hero.primaryCtaText = "[hero.primaryCta.label]";
      baseData.hero.secondaryCtaText = "[hero.secondaryCta.label]";
    }
    if (baseData.about) {
      baseData.about.title = "[about.title]";
      baseData.about.body = "[about.body]";
      baseData.about.description = "[about.body]";
      baseData.about.subtitle = "[about.subtitle]";
      baseData.about.badge = "[about.badge]";
      baseData.about.features = [
        "[about.highlights[0]]",
        "[about.highlights[1]]",
        "[about.highlights[2]]"
      ];
      baseData.about.points = baseData.about.features;
    }
    if (baseData.trust) {
      baseData.trust.ratingText = "[trust.ratingText]";
      baseData.trust.reviewCountText = "[trust.reviewCountText]";
      baseData.trust.achievements = ["[trust.badges[0]]", "[trust.badges[1]]", "[trust.badges[2]]"];
    }
    if (baseData.contact) {
      baseData.contact.title = "[contact.title]";
      baseData.contact.subtitle = "[contact.subtitle]";
      baseData.contact.phone = "[contact.phone]";
      baseData.contact.email = "[contact.email]";
      baseData.contact.address = "[contact.address]";
      baseData.contact.mapQuery = "[contact.mapQuery]";
      baseData.contact.primaryAction = { label: "[contact.primaryAction.label]", href: "#" };
      baseData.contact.secondaryAction = { label: "[contact.secondaryAction.label]", href: "#" };
      baseData.contact.workingHours = ["[contact.workingHours]"];
    }
    if (baseData.whyChooseUs) {
      baseData.whyChooseUs.items = [
        { id: "w1", title: "[about.highlights[0]]", description: "[about.highlights[0] description]" },
        { id: "w2", title: "[about.highlights[1]]", description: "[about.highlights[1] description]" },
        { id: "w3", title: "[about.highlights[2]]", description: "[about.highlights[2] description]" }
      ];
    }
  }

  return baseData;
}

function mergeCustomTemplateData(baseData: Record<string, any>, customData?: Record<string, any>, templateKey?: string) {
  const custom = customData || {};
  const isB2B = ["corporate_profile", "b2b_product", "lead_generation"].includes(templateKey || baseData.template?.key || "");

  const isLegacyMismatched = (val: unknown): boolean => {
    if (typeof val === "string") {
      return /(y tế|bác sĩ|đăng ký khám|thăm khám|sức khỏe|chăm sóc|nha khoa|răng|spa|massage|móng|tóc|salon|công trình xây dựng|xây nhà|nội trú|ngoại trú|xét nghiệm|tiêm chủng|photo-1576091160550|photo-1505751172876|photo-1580281657527|photo-1519494026892|photo-1516549655169|photo-1541888946425|photo-1503387762-592deb58ef4e)/i.test(val);
    }
    if (Array.isArray(val)) {
      return val.some((item) => isLegacyMismatched(item));
    }
    if (val && typeof val === "object") {
      return Object.values(val).some((item) => isLegacyMismatched(item));
    }
    return false;
  };

  // 1. Standard logo & image mappings (for convenience)
  if (custom.logo_url && baseData.business) {
    baseData.business.logoUrl = custom.logo_url;
    baseData.business.logo_url = custom.logo_url;
    baseData.business.logoUrlString = custom.logo_url;
  }

  if (custom.about_image && baseData.about && (!isB2B || !isLegacyMismatched(custom.about_image))) {
    baseData.about.image = { src: custom.about_image, alt: "Về chúng tôi" };
    baseData.about.bgImage = baseData.about.image;
  }

  if (custom.hero_image && baseData.hero && (!isB2B || !isLegacyMismatched(custom.hero_image))) {
    baseData.hero.image = { src: custom.hero_image, alt: "Hero" };
    baseData.hero.bgImage = baseData.hero.image;
    baseData.hero.backgroundImage = custom.hero_image;
  }

  // 2. Allow deep dot-notation overrides, e.g. "about.title": "New Title"
  for (const [key, value] of Object.entries(custom)) {
    // If it's a B2B template, reject legacy clinic/construction text overrides
    if (isB2B && isLegacyMismatched(value)) {
      continue;
    }
    if (key.includes(".")) {
      const parts = key.split(".");
      let current = baseData;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (current && typeof current === "object" && current[part]) {
          current = current[part];
        }
      }
      const lastPart = parts[parts.length - 1];
      if (current && typeof current === "object" && value !== undefined && value !== null) {
        current[lastPart] = value;
      }
    } else {
      // 3. Direct root-level overrides (like customData.services) if the property exists in baseData
      if (key in baseData && value !== undefined && value !== null) {
        baseData[key] = value;
      }
    }
  }

  // Sync primaryCta <-> primaryAction and secondaryCta <-> secondaryAction aliases for compatibility
  if (baseData.hero) {
    if (custom["hero.primaryCta.label"] !== undefined && (!isB2B || !isLegacyMismatched(custom["hero.primaryCta.label"]))) {
      baseData.hero.primaryAction = { ...(baseData.hero.primaryAction || {}), label: custom["hero.primaryCta.label"] };
    }
    if (custom["hero.primaryCta.href"] !== undefined) {
      baseData.hero.primaryAction = { ...(baseData.hero.primaryAction || {}), href: custom["hero.primaryCta.href"] };
    }
    if (custom["hero.secondaryCta.label"] !== undefined && (!isB2B || !isLegacyMismatched(custom["hero.secondaryCta.label"]))) {
      baseData.hero.secondaryAction = { ...(baseData.hero.secondaryAction || {}), label: custom["hero.secondaryCta.label"] };
    }
    if (custom["hero.secondaryCta.href"] !== undefined) {
      baseData.hero.secondaryAction = { ...(baseData.hero.secondaryAction || {}), href: custom["hero.secondaryCta.href"] };
    }
    if (custom.hero?.primaryCta && (!isB2B || !isLegacyMismatched(custom.hero.primaryCta.label))) {
      baseData.hero.primaryAction = { ...(baseData.hero.primaryAction || {}), ...custom.hero.primaryCta };
    }
    if (custom.hero?.secondaryCta && (!isB2B || !isLegacyMismatched(custom.hero.secondaryCta.label))) {
      baseData.hero.secondaryAction = { ...(baseData.hero.secondaryAction || {}), ...custom.hero.secondaryCta };
    }
    // Also support custom.hero_primary_action_label overrides if needed
    if (custom.hero_primary_action_label && (!isB2B || !isLegacyMismatched(custom.hero_primary_action_label)) && baseData.hero.primaryAction) {
      baseData.hero.primaryAction.label = custom.hero_primary_action_label;
    }
    // Sync for Interior Design template which reads primaryActionLabel
    if (baseData.hero.primaryAction?.label) {
      baseData.hero.primaryActionLabel = baseData.hero.primaryAction.label;
    }
  }

  // 4. Resolve hero.images slideshow array (dynamic support)
  let heroImages: any[] = [];
  const customHeroImages = custom.hero_images ?? custom["hero.images"] ?? custom.hero?.images ?? custom.hero_image;

  if (Array.isArray(customHeroImages)) {
    const activeImages = customHeroImages.filter((img) => {
      if (!img) return false;
      const str = typeof img === "string" ? img : img?.src;
      if (isB2B && /photo-1505751172876|photo-1580281657527|photo-1576091160550|photo-1519494026892/i.test(str || "")) {
        return false;
      }
      return true;
    });
    heroImages = activeImages.map((src: any, index: number) => {
      if (typeof src === "string") {
        return { src, alt: `Hero Slide ${index + 1}`, source: "fallback" as const };
      }
      return {
        src: src.src ?? "",
        alt: src.alt ?? `Hero Slide ${index + 1}`,
        source: "fallback" as const
      };
    });
  } else if (typeof customHeroImages === "string" && customHeroImages) {
    if (!isB2B || !/photo-1505751172876|photo-1580281657527|photo-1576091160550|photo-1519494026892/i.test(customHeroImages)) {
      heroImages = [{ src: customHeroImages, alt: "Hero Slide 1", source: "fallback" as const }];
    }
  }

  // If no custom images are specified or all were filtered out, fallback to template default fallbackImages
  if (heroImages.length === 0) {
    if (isB2B) {
      const defaults = getTemplateDefaults((templateKey as any) || baseData.template?.key || "b2b_product");
      heroImages = defaults.fallbackImages || [];
    } else if (Array.isArray(baseData.hero?.images) && baseData.hero.images.length > 0) {
      heroImages = baseData.hero.images;
    } else {
      const defaults = getTemplateDefaults(baseData.template?.key);
      heroImages = defaults.fallbackImages || [];
    }
  }

  // Ensure there's always at least one image in the array
  if (heroImages.length === 0) {
    const singleImage = baseData.hero?.image?.src ?? baseData.hero?.bgImage?.src ?? baseData.hero?.backgroundImage;
    if (singleImage) {
      heroImages = [{ src: singleImage, alt: "Hero Image", source: "fallback" as const }];
    } else {
      heroImages = [{ src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80", alt: "Hero default", source: "fallback" as const }];
    }
  }

  // Assign resolved slideshow array back to the hero structure
  if (baseData.hero) {
    baseData.hero.images = heroImages;
    const heroFirst = (heroImages && heroImages.length > 0)
      ? (typeof heroImages[0] === "string" ? { src: heroImages[0], alt: "Hero", source: "fallback" as const } : heroImages[0])
      : { src: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1400&q=80", alt: "Hero", source: "fallback" as const };

    baseData.hero.image = heroFirst;
    baseData.hero.bgImage = heroFirst;
    baseData.hero.backgroundImage = heroFirst.src;
  }
}

function postProcessStudioData(baseData: Record<string, any>, leadData: DemoPageData): Record<string, any> {
  const templateKey = baseData.template?.key || leadData.template?.key;
  const custom = leadData.template?.customData || {};

  // 1. Trust Rating & Stats (Safe for all 15 templates)
  const rawRating = custom["trust.rating"] ?? custom.trust?.rating ?? leadData.trust?.rating ?? baseData.business?.rating ?? baseData.trust?.rating ?? 4.9;
  const numRating = typeof rawRating === "number" ? rawRating : (parseFloat(rawRating) || 4.9);
  
  const rawReviews = custom["trust.reviewCount"] ?? custom.trust?.reviewCount ?? leadData.trust?.reviewCount ?? baseData.business?.reviewCount ?? baseData.trust?.reviewCount ?? 168;
  const numReviews = typeof rawReviews === "number" ? rawReviews : (parseInt(rawReviews, 10) || 168);

  const rawFollowers = custom["trust.followers"] ?? custom.trust?.followers ?? leadData.trust?.followers ?? baseData.business?.followers ?? baseData.trust?.followers ?? 1250;
  const numFollowers = typeof rawFollowers === "number" ? rawFollowers : (parseInt(rawFollowers, 10) || 1250);
  const strFollowers = typeof rawFollowers === "number" ? `${rawFollowers.toLocaleString("vi-VN")}+` : String(rawFollowers);

  if (!baseData.trust) baseData.trust = {};

  if (templateKey === "spa") {
    baseData.trust.rating = {
      score: `${numRating}/5`,
      label: "Đánh giá uy tín"
    };
    baseData.trust.followers = {
      count: strFollowers,
      label: "Người theo dõi"
    };
  } else {
    baseData.trust.rating = numRating;
    baseData.trust.followers = strFollowers;
  }

  baseData.trust.ratingText = `${numRating}`;
  baseData.trust.ratingValue = numRating;
  baseData.trust.reviewCount = numReviews;
  baseData.trust.reviewsCount = numReviews;
  baseData.trust.ratingCount = numReviews;
  baseData.trust.reviewCountText = `${numReviews}+ đánh giá`;
  baseData.trust.followersCount = strFollowers;
  baseData.trust.facebookFollowers = strFollowers;

  if (baseData.business) {
    baseData.business.rating = numRating;
    baseData.business.reviewCount = numReviews;
    baseData.business.reviewsCount = numReviews;
    baseData.business.ratingCount = numReviews;
    baseData.business.followers = numFollowers;
    baseData.business.followersCount = strFollowers;
  }

  // 2. Services Images & Fallbacks
  const restaurantDishImages = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  ];
  const clinicImages = [
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  ];
  const b2bImages = [
    "/assets/sisbio/cho-maxa5-plus.webp",
    "/assets/sisbio/signal-direct-imager.webp",
    "/assets/sisbio/may-quang-pho-thu-nho-4096pixel.jpg",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  ];
  const isB2BTemplate = ["corporate_profile", "b2b_product", "lead_generation"].includes(templateKey || "");
  const defaultImages = isB2BTemplate
    ? b2bImages
    : (templateKey === "nha_hang" 
        ? restaurantDishImages 
        : (templateKey === "phong_kham" ? clinicImages : [
            "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
          ]));

  if (Array.isArray(baseData.services)) {
    baseData.services = baseData.services.map((service: Record<string, any>, index: number) => {
      const fallbackSrc = defaultImages[index % defaultImages.length];
      const rawSrc = service.image?.src ?? (typeof service.image === "string" ? service.image : null) ?? service.image_url ?? service.img ?? fallbackSrc;
      const imgSrc = (typeof rawSrc === "string" && rawSrc.trim()) ? rawSrc.trim() : fallbackSrc;
      const imgAlt = service.image?.alt ?? service.title ?? service.name ?? `Dịch vụ ${index + 1}`;
      const safeImage = { src: imgSrc, alt: imgAlt };

      return {
        ...service,
        id: service.id ?? `service-${index}`,
        title: service.title ?? service.name ?? `Dịch vụ ${index + 1}`,
        name: service.name ?? service.title ?? `Dịch vụ ${index + 1}`,
        description: service.description ?? "",
        icon: service.icon ?? service.iconName ?? "Sparkles",
        iconName: service.iconName ?? service.icon ?? "Sparkles",
        href: service.href || "#contact",
        image: safeImage
      };
    });
  }

  // 3. Gallery Images
  if (Array.isArray(baseData.gallery)) {
    baseData.gallery = baseData.gallery.map((item: Record<string, any>, index: number) => {
      const fallbackSrc = defaultImages[index % defaultImages.length];
      const rawSrc = item.src ?? item.image?.src ?? (typeof item.image === "string" ? item.image : null) ?? fallbackSrc;
      const src = (typeof rawSrc === "string" && rawSrc.trim()) ? rawSrc.trim() : fallbackSrc;
      const alt = item.alt ?? item.image?.alt ?? item.title ?? `Gallery ${index + 1}`;
      const safeImage = { src, alt };

      return {
        ...item,
        id: item.id ?? `gallery-${index}`,
        src,
        alt,
        image: safeImage,
        title: item.title ?? item.caption ?? alt,
        category: item.category ?? item.caption ?? alt
      };
    });
  }

  // 4. About Image & Content
  if (baseData.about) {
    const isLegacyAbout = (txt?: string) => {
      if (!txt) return false;
      return /(y tế|bác sĩ|đăng ký khám|thăm khám|sức khỏe|chăm sóc|nha khoa|răng|spa|massage|móng|tóc|salon|công trình xây dựng|xây nhà)/i.test(txt);
    };

    const isBadImg = (src?: string) => {
      if (!src) return false;
      return /photo-1576091160550|photo-1505751172876|photo-1580281657527|photo-1519494026892|photo-1516549655169|photo-1541888946425|photo-1503387762-592deb58ef4e/i.test(src);
    };

    const existingAboutSrc = baseData.about.image?.src ?? (typeof baseData.about.image === "string" ? baseData.about.image : null);
    const candidateImg = custom.about_image ?? leadData.business.aboutImageUrl;
    const aboutSrc = (isB2BTemplate && (isBadImg(candidateImg) || isBadImg(existingAboutSrc)))
      ? b2bImages[0]
      : (candidateImg ?? existingAboutSrc ?? defaultImages[0]);

    const safeAboutImage = { src: aboutSrc, alt: baseData.about.title || "Về chúng tôi" };
    baseData.about.image = safeAboutImage;
    if (baseData.about.bgImage) baseData.about.bgImage = safeAboutImage;

    const candidateAboutText = custom["about.body"] ?? custom["about.description"];
    const aboutText = (isB2BTemplate && isLegacyAbout(candidateAboutText))
      ? (baseData.about.description ?? baseData.about.content ?? baseData.about.body ?? "Hệ thống cung ứng thiết bị và năng lực kỹ thuật tiêu chuẩn quốc tế.")
      : (candidateAboutText ?? leadData.about?.body ?? baseData.about.description ?? baseData.about.content ?? "Dịch vụ uy tín, chuyên nghiệp và tận tâm đồng hành cùng khách hàng.");

    baseData.about.content = aboutText;
    baseData.about.description = aboutText;
    baseData.about.body = aboutText;
  }

  // 5. Reviews Avatars & Safety
  if (Array.isArray(baseData.reviews)) {
    const defaultAvatars = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    ];
    baseData.reviews = baseData.reviews.map((review: Record<string, any>, index: number) => {
      const author = review.authorName ?? review.author ?? "Khách hàng";
      const text = review.text ?? review.content ?? review.quote ?? "Ý kiến đánh giá rất hài lòng về dịch vụ.";
      const avatarSrc = review.avatarSrc ?? review.avatar ?? defaultAvatars[index % defaultAvatars.length];
      const numReviewRating = Math.min(5, Math.max(1, Math.round(Number(review.rating) || 5)));
      return {
        ...review,
        id: review.id ?? `review-${index}`,
        author,
        authorName: author,
        text,
        content: text,
        quote: text,
        avatarSrc,
        avatarAlt: author,
        rating: numReviewRating
      };
    });
  }

  return baseData;
}

function toStudioTemplateData(data: DemoPageData) {
  const originalTemplateData = getOriginalStudioData(data.template.key);
  const replaced = applyLeadIdentity(originalTemplateData, data);
  mergeCustomTemplateData(replaced, data.template.customData, data.template.key);
  return postProcessStudioData(replaced, data);
}

function getTemplateThemeStyle(templateKey: IndustryKey): CSSProperties {
  const sharedSpa = {
    "--color-primary": "#9a3b54",
    "--color-on-primary": "#ffffff",
    "--color-primary-container": "#b9536c",
    "--color-on-primary-container": "#fffbff",
    "--color-secondary": "#6f5a4c",
    "--color-on-secondary": "#ffffff",
    "--color-secondary-container": "#f7dac8",
    "--color-on-secondary-container": "#745e50",
    "--color-tertiary": "#4a624c",
    "--color-on-tertiary": "#ffffff",
    "--color-tertiary-container": "#637b64",
    "--color-on-tertiary-container": "#f7fff3",
    "--color-background": "#fdf9f5",
    "--color-on-background": "#1c1c19",
    "--color-surface": "#fdf9f5",
    "--color-on-surface": "#1c1c19",
    "--color-surface-container-low": "#f7f3ef",
    "--color-surface-container": "#f1ede9",
    "--color-surface-container-high": "#ebe7e4",
    "--color-surface-container-highest": "#e5e2de",
    "--color-surface-container-lowest": "#ffffff",
    "--color-outline": "#887275",
    "--color-outline-variant": "#dac0c4"
  } as CSSProperties;

  if (templateKey === "noi_that") {
    return {
      "--color-brand-primary": "#0a1422",
      "--color-brand-secondary": "#725a43",
      "--color-brand-accent": "#6b7a40",
      "--color-brand-bg": "#fcf9f4",
      "--color-brand-bg-card": "#ffffff",
      "--color-brand-bg-container": "#f2ede5",
      "--color-brand-bg-low": "#f8f4ed",
      "--color-brand-outline": "#d8cbbb"
    } as CSSProperties;
  }

  if (templateKey === "studio_chup_anh") {
    return {
      "--color-brand-primary": "#834767",
      "--color-brand-secondary": "#6c5962",
      "--color-brand-accent": "#e1c292",
      "--color-brand-bg": "#fff8f8",
      "--color-brand-bg-card": "#ffffff",
      "--color-brand-bg-container": "#fef0f4",
      "--color-brand-bg-low": "#fff8f8",
      "--color-brand-outline": "#e1c292"
    } as CSSProperties;
  }

  if (templateKey === "corporate_profile" || templateKey === "b2b_product" || templateKey === "lead_generation" || templateKey === "cong_ty_xay_dung" || templateKey === "luat_su") {
    return {} as CSSProperties;
  }

  if (templateKey === "spa") return sharedSpa;

  return {
    "--color-brand-primary": "#60233f",
    "--color-brand-secondary": "#6f595e",
    "--color-brand-accent": "#4a3602",
    "--color-brand-accent-light": "#ffdf9e",
    "--color-brand-bg": "#fff8fa",
    "--color-brand-bg-card": "#ffffff",
    "--color-brand-bg-container": "#f3ecee",
    "--color-brand-bg-low": "#f9f2f4",
    "--color-brand-outline": "#d6c1c7",
    ...sharedSpa
  } as CSSProperties;
}

export function StudioTemplateRenderer({ data }: { data: DemoPageData }) {
  const Template = studioTemplateRegistry[data.template.key] ?? GeneralClinicTemplate;
  return (
    <div className="template-render-root" style={getTemplateThemeStyle(data.template.key)}>
      <Template data={toStudioTemplateData(data)} />
    </div>
  );
}
