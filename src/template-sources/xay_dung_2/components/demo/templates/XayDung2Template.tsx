"use client";

import React from "react";
import { XayDung2Data } from "@/template-sources/xay_dung_2/types/demo";
import { xayDung2DefaultData } from "@/template-sources/xay_dung_2/lib/demo/data";
import { Navbar } from "../sections/Navbar";
import { HeroBanner } from "../sections/HeroBanner";
import { CounterSection } from "../sections/CounterSection";
import { ProjectsGallery } from "../sections/ProjectsGallery";
import { ServicesSection } from "../sections/ServicesSection";
import { TeamSection } from "../sections/TeamSection";
import { AwardsSection } from "../sections/AwardsSection";
import { ClientsSection } from "../sections/ClientsSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { ContactSection } from "../sections/ContactSection";
import { LocationBanner } from "../sections/LocationBanner";
import { Footer } from "../sections/Footer";

export interface XayDung2TemplateProps {
  customData?: Partial<XayDung2Data>;
}

export function XayDung2Template({ customData }: XayDung2TemplateProps) {
  const data: XayDung2Data = {
    ...xayDung2DefaultData,
    ...customData,
    business: {
      ...xayDung2DefaultData.business,
      ...customData?.business,
    },
    hero: {
      ...xayDung2DefaultData.hero,
      ...customData?.hero,
    },
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-black selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar
        businessName={data.business.name}
        logo={data.business.logo}
      />

      {/* 2. Hero Fullscreen Banner */}
      <HeroBanner
        subtitle={data.hero.subtitle}
        title={data.hero.title}
        ctaText={data.hero.ctaText}
        ctaLink={data.hero.ctaLink}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* 3. Numbers & Philosophy */}
      <CounterSection
        stats={data.stats}
        aboutText={data.business.aboutText}
      />

      {/* 4. Last Projects Gallery */}
      <ProjectsGallery projects={data.projects} />

      {/* 5. Services Grid */}
      <ServicesSection services={data.services} />

      {/* 6. Team Members */}
      <TeamSection team={data.team} />

      {/* 7. Awards Timeline */}
      <AwardsSection awards={data.awards} />

      {/* 8. Clients Logo Showcase */}
      <ClientsSection clients={data.clients} />

      {/* 9. Testimonials */}
      <TestimonialsSection testimonials={data.testimonials} />

      {/* 10. Contact & Form */}
      <ContactSection
        phones={data.business.phone}
        emails={data.business.email}
        skypes={data.business.skype}
        businessName={data.business.name}
      />

      {/* 11. Location Banner */}
      <LocationBanner address={data.business.address} />

      {/* 12. Footer */}
      <Footer
        businessName={data.business.name}
        logo={data.business.logo}
        phone={data.business.phone}
        email={data.business.email}
        address={data.business.address}
      />
    </div>
  );
}

export default XayDung2Template;
