"use client";

import React from "react";
import { XayDung3Data } from "../../../types/demo";
import { xayDung3DefaultData } from "../../../lib/demo/data";
import { Header } from "../sections/Header";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ServicesSection } from "../sections/ServicesSection";
import { PortfolioStrip } from "../sections/PortfolioStrip";
import { TeamSection } from "../sections/TeamSection";
import { BeforeAfterSection } from "../sections/BeforeAfterSection";
import { StatsSection } from "../sections/StatsSection";
import { ArticlesSection } from "../sections/ArticlesSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../sections/Footer";
import { BimCursor } from "../ui/BimCursor";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import "../../../styles.css";

interface XayDung3TemplateProps {
  customData?: Partial<XayDung3Data>;
}

export function XayDung3Template({ customData }: XayDung3TemplateProps) {
  useScrollReveal();

  const data: XayDung3Data = {
    business: {
      ...xayDung3DefaultData.business,
      ...(customData?.business || {}),
    },
    hero: {
      ...xayDung3DefaultData.hero,
      ...(customData?.hero || {}),
    },
    about: {
      ...xayDung3DefaultData.about,
      ...(customData?.about || {}),
    },
    services: {
      ...xayDung3DefaultData.services,
      ...(customData?.services || {}),
    },
    portfolioStrip: {
      ...xayDung3DefaultData.portfolioStrip,
      ...(customData?.portfolioStrip || {}),
    },
    team: {
      ...xayDung3DefaultData.team,
      ...(customData?.team || {}),
    },
    beforeAfter: {
      ...xayDung3DefaultData.beforeAfter,
      ...(customData?.beforeAfter || {}),
    },
    stats: customData?.stats || xayDung3DefaultData.stats,
    articles: {
      ...xayDung3DefaultData.articles,
      ...(customData?.articles || {}),
    },
    contact: {
      ...xayDung3DefaultData.contact,
      ...(customData?.contact || {}),
    },
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] bim-font-poppins selection:bg-[#b19777] selection:text-white">
      {/* Dynamic BIM Signature Magic Cursor */}
      <BimCursor />

      {/* 1. Header (Transparent Sticky Navbar with BIM. Logo & Call Button) */}
      <Header
        businessName={data.business.name}
        phone={data.business.phone}
        logo={data.business.logo}
        logoWhite={data.business.logoWhite}
      />

      {/* 2. Hero Section (Innovative Modern Design with Stroke Text, Slider & Controls) */}
      <HeroSection
        titlePrefix={data.hero.titlePrefix}
        titleOutline={data.hero.titleOutline}
        titleHighlight={data.hero.titleHighlight}
        description={data.hero.description}
        ctaText={data.hero.ctaText}
        ctaLink={data.hero.ctaLink}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaLink={data.hero.secondaryCtaLink}
        sliderImages={data.hero.sliderImages}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* 3. About Section (21 Years Experience Inset Card on exp.jpg & Philosophy) */}
      <AboutSection
        badge={data.about.badge}
        experienceYears={data.about.experienceYears}
        experienceLabel={data.about.experienceLabel}
        title={data.about.title}
        highlightTitle={data.about.highlightTitle}
        paragraphs={data.about.paragraphs}
        specialties={data.about.specialties}
        ctaText={data.about.ctaText}
        ctaLink={data.about.ctaLink}
        image={data.about.image}
      />

      {/* 4. Our Services Section (4 Cards: 01-04 with Gold Inversion on Hover) */}
      <ServicesSection
        badge={data.services.badge}
        title={data.services.title}
        items={data.services.items}
      />

      {/* 5. Portfolio Section (100% Full-Width Seamless 4-Col Strip with Dark Hover Zoom) */}
      <PortfolioStrip
        badge={data.portfolioStrip.badge}
        title={data.portfolioStrip.title}
        items={data.portfolioStrip.items}
      />

      {/* 6. Our Team Section (Tomas Kiel, Harley Nikon, John Pommy with Hover Overlays) */}
      <TeamSection
        badge={data.team.badge}
        title={data.team.title}
        description={data.team.description}
        members={data.team.members}
      />

      {/* 7. Best Works / Transformation Section (Before / After Twentytwenty Slider on #54595f) */}
      <BeforeAfterSection
        badge={data.beforeAfter.badge}
        title={data.beforeAfter.title}
        description={data.beforeAfter.description}
        beforeLabel={data.beforeAfter.beforeLabel}
        afterLabel={data.beforeAfter.afterLabel}
        beforeImage={data.beforeAfter.beforeImage}
        afterImage={data.beforeAfter.afterImage}
      />

      {/* 8. Stats Section (352 Projects, 567 Clients, 656 Revenue, 17 Awards with Gold Stroke Icons) */}
      <StatsSection stats={data.stats} />

      {/* 9. Our Blog / Latest News Section (3 Architecture & Furniture Articles) */}
      <ArticlesSection
        badge={data.articles.badge}
        title={data.articles.title}
        items={data.articles.items}
      />

      {/* 10. Contact Us Section (3 Cards: Call Us, Email Us, Address + Full-Width Grayscale Map) */}
      <ContactSection
        badge={data.contact.badge}
        title={data.contact.title}
        subtitle={data.contact.subtitle}
        cards={data.contact.cards}
      />

      {/* 11. Footer (Dark 4-Column Luxury Footer Matching Demo 2) */}
      <Footer
        businessName={data.business.name}
        tagline={data.business.tagline}
        phone={data.business.phone}
        email={data.business.email}
        address={data.business.address}
        logoWhite={data.business.logoWhite}
      />
    </div>
  );
}

export default XayDung3Template;
