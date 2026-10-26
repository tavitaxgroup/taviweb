import type { DemoPageData } from "@/types/demo";

export type ClonedTemplateInput = DemoPageData | Record<string, any> | undefined;

export interface ClonedTemplateBaseData {
  business: {
    name: string;
    logo?: string;
    phone: string[];
    email: string[];
    address: string;
    facebookUrl?: string;
    rating?: number;
    reviewCount?: number;
    workingHours?: string;
    aboutTitle?: string;
    aboutText: string[];
    experienceYears?: string;
    highlights?: string[];
    tagline?: string;
    hashtag?: string;
    [key: string]: any;
  };
  hero: {
    eyebrow?: string;
    badge?: string;
    subtitle: string;
    title: string;
    description?: string;
    ctaText: string;
    ctaLink: string;
    primaryCta?: string;
    secondaryCta?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    backgroundImage: string;
    images?: string[];
    [key: string]: any;
  };
  stats?: Array<{
    id?: string;
    number?: string;
    value?: string;
    title?: string;
    label?: string;
    subtitle?: string;
    [key: string]: any;
  }>;
  services?: Array<{
    id: string;
    title: string;
    category?: string;
    description: string;
    image?: string;
    icon?: string;
    price?: string;
    link?: string;
    [key: string]: any;
  }>;
  projects?: Array<{
    id: string;
    title: string;
    category: string;
    location?: string;
    description?: string;
    image: string;
    price?: string;
    [key: string]: any;
  }>;
  team?: Array<{
    id: string;
    name: string;
    position: string;
    image: string;
    [key: string]: any;
  }>;
  testimonials?: Array<{
    id?: string;
    author?: string;
    name?: string;
    role?: string;
    avatar?: string;
    rating?: number;
    content?: string;
    quote?: string;
    [key: string]: any;
  }>;
  news?: Array<{
    id: string;
    title: string;
    date: string;
    category?: string;
    excerpt: string;
    image: string;
    [key: string]: any;
  }>;
  pricing?: Array<{
    id: string;
    name: string;
    badge?: string;
    price?: string;
    description: string;
    features: Array<{ title: string; desc: string }>;
    image?: string;
    [key: string]: any;
  }>;
  clients?: Array<{
    id: string;
    name: string;
    logo?: string;
    [key: string]: any;
  }>;
  [key: string]: any;
}

function deepClone<T>(obj: T): T {
  if (!obj || typeof obj !== "object") return obj;
  return JSON.parse(JSON.stringify(obj)) as T;
}

/**
 * Applies standard TaviWeb lead identity, custom JSON overrides (dot-notation & root keys),
 * and Token Blueprint mode (`__token_preview__`) to any cloned template's default data.
 */
export function adaptClonedTemplateData<T = any>(
  defaultData: T,
  incoming?: DemoPageData | Record<string, any> | null,
  _extra?: any
): T;
export function adaptClonedTemplateData<T = any>(
  incoming: Record<string, unknown> | undefined,
  defaultData: T,
  _extra?: any
): T;
export function adaptClonedTemplateData<T = any>(
  arg1?: any,
  arg2?: any,
  _extra?: any
): T {
  const isReversed =
    (!arg1 && arg2 && typeof arg2 === "object") ||
    (arg1 &&
      typeof arg1 === "object" &&
      ("template" in arg1 || "seo" in arg1) &&
      arg2 &&
      typeof arg2 === "object" &&
      !("template" in arg2));
  const defaultData = (isReversed ? arg2 : arg1) as T;
  const incoming = (isReversed ? arg1 : arg2) as any;
  const rawClone = deepClone(defaultData) as any;
  const result = (
    rawClone &&
    typeof rawClone === "object" &&
    !("business" in rawClone) &&
    "default" in rawClone &&
    rawClone.default &&
    typeof rawClone.default === "object"
      ? deepClone(rawClone.default)
      : rawClone || {}
  ) as any;

  if (!result.business) {
    result.business = {
      name: result.company?.name || "TaviWeb Studio",
      phone: ["0909 686 888"],
      email: ["contact@taviweb.vn"],
      address: "TP. Hồ Chí Minh, Việt Nam",
      aboutText: [],
    };
  }
  if (!result.hero) {
    result.hero = {
      title: result.business?.name || "Giải Pháp Chuyên Nghiệp",
      subtitle: "",
      ctaText: "Liên hệ ngay",
      ctaLink: "#contact",
      backgroundImage: "",
    };
  }

  if (!incoming) return result as T;

  const isDemoPageData = Boolean(
    incoming &&
      typeof incoming === "object" &&
      ("template" in incoming || "trust" in incoming || "seo" in incoming)
  );

  if (!isDemoPageData) {
    const inc = incoming as Record<string, any>;
    return {
      ...result,
      ...inc,
      business: {
        ...result.business,
        ...(inc.business || {}),
      },
      hero: {
        ...result.hero,
        ...(inc.hero || {}),
      },
    } as T;
  }

  const demoData = incoming as DemoPageData;
  const rawBusiness = demoData.business;
  const rawContact = demoData.contact;
  const custom = (demoData.template?.customData || {}) as Record<string, any>;
  const isMockLead = Boolean(rawBusiness?.placeId?.startsWith("mock-"));

  if (!isMockLead) {
    const companyName = rawBusiness?.name?.trim() || result.business.name;
    const rawPhone = rawBusiness?.phone || rawContact?.phone;
    const rawEmail = rawBusiness?.email || rawContact?.email;
    const address =
      rawBusiness?.address || rawContact?.address || result.business.address;
    const logoUrl =
      custom.logo_url ||
      rawBusiness?.logoUrl ||
      (rawBusiness as any)?.logo ||
      result.business.logo;
    const facebookUrl =
      rawBusiness?.facebookUrl ||
      rawContact?.facebookUrl ||
      result.business.facebookUrl;

    const existingPhones = Array.isArray(result.business.phone)
      ? result.business.phone
      : result.business.phone
      ? [String(result.business.phone)]
      : ["0909 686 888"];
    const existingEmails = Array.isArray(result.business.email)
      ? result.business.email
      : result.business.email
      ? [String(result.business.email)]
      : ["contact@taviweb.vn"];

    const phones = rawPhone
      ? Array.isArray(result.business.phone)
        ? [rawPhone, ...existingPhones.slice(1)]
        : rawPhone
      : result.business.phone;
    const emails = rawEmail
      ? Array.isArray(result.business.email)
        ? [rawEmail, ...existingEmails.slice(1)]
        : rawEmail
      : result.business.email;

    const defaultBrandName = result.business?.name || "";
    const replaceBrand = (text: string) => {
      if (!text || typeof text !== "string") return text;
      let out = text;
      if (defaultBrandName) {
        out = out.replace(new RegExp(defaultBrandName, "gi"), companyName);
      }
      return out
        .replace(
          /MONA\s*(MEDIA|DESIGN|ARCHITECTURE|FOODIE|COFFEE|LAW|SPORT\s*CLUB|SPORTS\s*CLUB)?/gi,
          companyName
        )
        .replace(/Fixera/gi, companyName)
        .replace(/Galaxy(\s*Cons)?/gi, companyName)
        .replace(/YTeTot/gi, companyName)
        .replace(/Beauty\s*Blendz/gi, companyName)
        .replace(/Elegant\s*Beauty/gi, companyName)
        .replace(/LifeCare/gi, companyName)
        .replace(/Clean(Glow|Home)/gi, companyName)
        .replace(/Auto\s*Spot/gi, companyName);
    };

    const adaptedAboutText = Array.isArray(result.business.aboutText)
      ? result.business.aboutText.map(replaceBrand)
      : result.business.aboutText;

    result.business = {
      ...result.business,
      name: companyName,
      logo: logoUrl,
      phone: phones,
      email: emails,
      address,
      facebookUrl,
      rating: demoData.trust?.rating ?? result.business.rating ?? 4.9,
      reviewCount:
        demoData.trust?.reviewCount ?? result.business.reviewCount ?? 168,
      aboutText: adaptedAboutText,
    };

    if (result.hero.eyebrow) {
      result.hero.eyebrow = replaceBrand(result.hero.eyebrow);
    }
    if (result.hero.subtitle) {
      result.hero.subtitle = replaceBrand(result.hero.subtitle);
    }
  }

  // Hero overrides from customData
  if (custom.logo_url) {
    result.business.logo = custom.logo_url;
  }
  if (custom.hero_image) {
    result.hero.backgroundImage = custom.hero_image;
  }
  if (Array.isArray(custom.hero_images) && custom.hero_images.length > 0) {
    const imgs = custom.hero_images
      .map((item: any) => (typeof item === "string" ? item : item?.src))
      .filter(Boolean);
    if (imgs.length > 0) {
      result.hero.images = imgs;
      result.hero.backgroundImage = imgs[0];
    }
  }

  // Deep dot-notation overrides from template_data JSON
  for (const [key, value] of Object.entries(custom)) {
    if (value === undefined || value === null) continue;
    if (key.includes(".")) {
      const parts = key.split(".");
      let current: any = result;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (current && typeof current === "object") {
          if (!(part in current) || typeof current[part] !== "object") {
            current[part] = {};
          }
          current = current[part];
        }
      }
      const lastPart = parts[parts.length - 1];
      if (current && typeof current === "object") {
        current[lastPart] = value;
      }
    } else if (key in result && key !== "business" && key !== "hero") {
      (result as any)[key] = value;
    }
  }

  // Support custom CTA aliases
  if (custom["hero.primaryCta.label"]) {
    result.hero.ctaText = String(custom["hero.primaryCta.label"]);
  }
  if (custom["hero.primaryCta.href"]) {
    result.hero.ctaLink = String(custom["hero.primaryCta.href"]);
  }

  // Token Blueprint Mode support (__token_preview__)
  if (rawBusiness?.placeId === "__token_preview__") {
    result.business.name = "[business.name]";
    result.business.phone = Array.isArray(result.business.phone)
      ? ["[contact.phone]"]
      : "[contact.phone]";
    result.business.email = Array.isArray(result.business.email)
      ? ["[contact.email]"]
      : "[contact.email]";
    result.business.address = "[contact.address]";
    result.hero.title = "[hero.title]";
    result.hero.subtitle = "[hero.subtitle]";
    result.hero.ctaText = "[hero.primaryCta.label]";
  }

  return result as T;
}
