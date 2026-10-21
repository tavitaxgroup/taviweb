import { DemoPageData } from '../../../types/demo';
import DemoNavbar from '../sections/DemoNavbar';
import DemoHero from '../sections/DemoHero';
import TrustBar from '../sections/TrustBar';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import GallerySection from '../sections/GallerySection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import ReviewsSection from '../sections/ReviewsSection';
import ContactCTASection from '../sections/ContactCTASection';
import DemoFooter from '../sections/DemoFooter';
import TenantEcosystemShowcase from '@/components/storefront/TenantEcosystemShowcase';
import { Phone } from 'lucide-react';

interface DentalTemplateProps {
  data: DemoPageData;
}

export default function DentalTemplate({ data }: DentalTemplateProps) {
  const anyData = data as any;
  const cleanPhone = data.business.phone
    ? data.business.phone.replace(/\s+/g, '')
    : '';

  return (
    <div className="relative min-h-screen bg-slate-50 text-gray-850 font-sans selection:bg-teal-150 selection:text-teal-900">
      {/* 1. Sticky Navigation Bar */}
      <DemoNavbar
        business={data.business}
        bookingUrl={anyData.bookingUrl}
        blogUrl={anyData.blogUrl}
      />

      {/* 2. Hero Section */}
      <DemoHero hero={data.hero} bookingUrl={anyData.bookingUrl} />

      {/* 3. Social Proof Trust Bar */}
      <TrustBar trust={data.trust} />

      {/* 4. About Doctor / Clinic Info Section */}
      <AboutSection about={data.about} />

      {/* 5. Medical & Aesthetic Services Grid */}
      <ServicesSection services={data.services} />

      {/* 6. Clean Gallery Space Displays */}
      <GallerySection gallery={data.gallery} />

      {/* 7. Why Choose Us (Value propositions) */}
      <WhyChooseUsSection features={data.about.features} />

      {/* 8. Positive Testimonials Grid */}
      <ReviewsSection reviews={data.reviews} />

      {/* 9. Live Ecosystem Integration: Booking Services + CRM Lead Form + AI CMS Magazine */}
      {anyData.ecosystemProps && (
        <TenantEcosystemShowcase {...anyData.ecosystemProps} />
      )}

      {/* 10. High-conversion Call-To-Action (CTA) Contact Box */}
      <ContactCTASection
        contact={data.contact}
        bookingUrl={anyData.bookingUrl}
      />

      {/* 11. Comprehensive Footer */}
      <DemoFooter business={data.business} />

      {/* Floating Action Button (FAB) on Mobile for instant dialing */}
      {data.business.phone && (
        <a
          href={`tel:${cleanPhone}`}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white shadow-2xl hover:bg-teal-800 active:scale-95 transition-all md:hidden"
          aria-label="Gọi ngay cho nha khoa"
        >
          <Phone className="h-6 w-6 stroke-[2.5]" />
        </a>
      )}
    </div>
  );
}
