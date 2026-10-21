export interface StatItem {
  id: string;
  number: string;
  title: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: 'compass' | 'lightbulb' | 'layers';
  description: string;
  link?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  link?: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  link: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  content: string;
}

export interface XayDung2Data {
  business: {
    name: string;
    logo?: string;
    phone: string[];
    email: string[];
    skype: string[];
    address: string;
    aboutText: string[];
  };
  hero: {
    subtitle: string;
    title: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
  };
  stats: StatItem[];
  projects: ProjectItem[];
  services: ServiceItem[];
  team: TeamMember[];
  awards: AwardItem[];
  clients: ClientItem[];
  testimonials: TestimonialItem[];
}
