export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  link?: string;
}

export interface PortfolioStripItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  phone?: string;
  email?: string;
  socials?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon?: string;
}

export interface ArticleItem {
  id: string;
  category: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}

export interface XayDung3Data {
  business: {
    name: string;
    tagline: string;
    logo?: string;
    logoWhite?: string;
    phone: string;
    email: string;
    address: string;
    workHours: string;
  };
  hero: {
    titlePrefix: string;
    titleOutline: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    backgroundImage: string;
    sliderImages?: string[];
  };
  about: {
    badge: string;
    experienceYears: string;
    experienceLabel: string;
    title: string;
    highlightTitle: string;
    paragraphs: string[];
    specialties: string[];
    ctaText: string;
    ctaLink: string;
    image: string;
  };
  services: {
    badge: string;
    title: string;
    items: ServiceItem[];
  };
  portfolioStrip: {
    badge: string;
    title: string;
    items: PortfolioStripItem[];
  };
  team: {
    badge: string;
    title: string;
    description?: string;
    members: TeamMemberItem[];
  };
  beforeAfter: {
    badge: string;
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    beforeImage: string;
    afterImage: string;
  };
  stats: StatItem[];
  articles: {
    badge: string;
    title: string;
    items: ArticleItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      call: { title: string; lines: string[] };
      email: { title: string; lines: string[] };
      address: { title: string; lines: string[] };
    };
  };
}
