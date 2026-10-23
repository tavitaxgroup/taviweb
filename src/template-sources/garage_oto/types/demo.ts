export interface BusinessInfo {
  id?: string;
  placeId?: string;
  name: string;
  phone: string;
  phoneAlt?: string;
  email: string;
  address: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface ActionButton {
  label: string;
  href: string;
}

export interface TemplateInfo {
  key: string;
  name: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  image: ImageAsset;
  primaryAction: ActionButton;
  secondaryAction?: ActionButton;
  stats?: {
    badge: string;
    title: string;
    values: Array<{ value: string; label: string }>;
  };
}

export interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

export interface TrustData {
  badges: TrustBadge[];
}

export interface AboutData {
  label: string;
  title: string;
  description1: string;
  description2: string;
  points: string[];
  image: ImageAsset;
  badge: {
    label: string;
    value: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
  vehicleType?: 'all' | 'car' | 'moto';
  priceLabel?: string;
  durationLabel?: string;
  tag?: string;
}

export interface GalleryItem {
  image: ImageAsset;
  caption: string;
  size?: 'large' | 'normal';
  category?: 'car' | 'moto' | 'ppf' | 'tuning';
  vehicleModel?: string;
  licensePlate?: string;
  ownerName?: string;
  workSummary?: string[];
  completionTime?: string;
  packagePrice?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  authorInitials: string;
  vehicle: string;
  licensePlate?: string;
  text: string;
  rating: number;
}

export interface ContactData {
  title: string;
  address: string;
  phone: string;
  phoneAlt?: string;
  hours: string[];
  mapImage: ImageAsset;
  location: string;
  primaryAction: ActionButton;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface DemoPageData {
  business: BusinessInfo;
  template: TemplateInfo;
  hero: HeroData;
  trust: TrustData;
  about: AboutData;
  services: ServiceItem[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
  contact: ContactData;
  seo: SeoData;
  bookingUrl?: string;
  blogUrl?: string;
  ecosystemProps?: {
    tenantId: string;
    tenantSlug: string;
    tenantName: string;
    services: Array<{
      id: string;
      name: string;
      duration_minutes: number;
      price: number;
    }>;
    resources: Array<{
      id: string;
      name: string;
      type?: string;
      role_or_capacity?: string;
      status?: string;
    }>;
    posts: Array<{
      id: string;
      title: string;
      slug: string;
      content: string;
      thumbnail_url?: string | null;
      created_at: string;
    }>;
  };
}
