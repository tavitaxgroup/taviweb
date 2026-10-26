"use client";

import React, { useState } from "react";
import {
  Crown,
  ShieldCheck,
  Compass,
  Building2,
  Gem,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Award,
  FileCheck2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu14DefaultData,
  type LuatSu14Data,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const content: LuatSu14Data = adaptClonedTemplateData(
    luatSu14DefaultData,
    data
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("Tất Cả");
  const [formState, setFormState] = useState({
    investorName: "",
    companyName: "",
    phone: "",
    email: "",
    sector: content.consultationSection.sectors[0] || "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects =
    selectedCategory === "Tất Cả"
      ? content.projectsSection.projects
      : content.projectsSection.projects.filter(
          (p) => p.category === selectedCategory
        );

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.investorName.trim() || !formState.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f2] text-[#1a2419] font-sans selection:bg-[#d4af37] selection:text-[#192818]">
      {/* 1. TOP PRESTIGE BAR */}
      <div className="bg-[#121e11] text-[#e6dec8] text-xs border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#d4af37] font-bold tracking-wider uppercase">
              <Crown className="w-3.5 h-3.5" />
              EST. {content.header.foundedYear} • {content.header.brandMain}
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline text-gray-300 truncate">
              {content.business.tagline}
            </span>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#d4af37] font-semibold">
              <Phone className="w-3.5 h-3.5" />
              {content.business.phone[0]}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-gray-300">
              <Globe2 className="w-3.5 h-3.5 text-[#d4af37]" />
              VI • LAO • EN
            </span>
          </div>
        </div>
      </div>

      {/* 2. STICKY FOREST-GREEN & ROYAL GOLD HEADER */}
      <header className="bg-[#192818]/95 backdrop-blur-md text-white sticky top-0 z-40 border-b border-[#d4af37]/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
          {/* Royal Crest Brand */}
          <a href="#hero" className="flex items-center gap-3.5 shrink-0 group">
            <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] bg-[#121e11] flex flex-col items-center justify-center shadow-md shadow-black/40 group-hover:scale-105 transition-transform">
              <Crown className="w-3.5 h-3.5 text-[#d4af37] -mb-0.5" />
              <span className="text-sm font-serif font-black tracking-tighter text-[#d4af37] leading-none">
                KN
              </span>
              <span className="text-[8px] font-bold text-[#d4af37]/90 leading-none mt-0.5">
                {content.header.foundedYear}
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-serif font-bold tracking-wider text-[#d4af37] leading-tight">
                {content.header.brandMain}
              </div>
              <div className="text-[9px] font-semibold tracking-[0.18em] text-gray-300 uppercase">
                {content.header.brandSub}
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {content.header.navLinks.map((lnk) => (
              <a
                key={lnk.label}
                href={lnk.href}
                className="text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#d4af37] transition-colors"
              >
                {lnk.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b58e24] hover:from-[#e3c14d] hover:to-[#c69d2c] text-[#121e11] text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all shrink-0"
          >
            <Scale className="w-3.5 h-3.5" />
            {content.header.ctaLabel}
          </a>
        </div>
      </header>

      {/* 3. HERO SPLIT-GRADIENT SHOWCASE (MATCHING LUAT017 REFERENCE) */}
      <section
        id="hero"
        className="relative min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#192818]"
      >
        {/* Right-side Panoramic Aerial Golf & SEZ Image */}
        <div className="absolute inset-0">
          <img
            src={content.hero.backgroundImage}
            alt={content.hero.headline}
            className="w-full h-full object-cover object-right"
          />
          {/* Smooth Olive-Forest Gradient Overlay matching LUAT017 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#192818] via-[#192818]/92 to-transparent lg:w-[78%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121e11]/90 via-transparent to-[#192818]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left 8 Cols: Royal Heraldic Crest + Bold Headline + 557,28 ha Subtitle + Purple/Gold CTAs */}
            <div className="lg:col-span-8 text-white space-y-6">
              {/* Golden Heraldic Crest Emblem */}
              <div className="inline-flex flex-col items-center p-4 rounded-2xl bg-[#121e11]/80 border border-[#d4af37]/40 backdrop-blur-sm shadow-xl">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex flex-col items-center justify-center bg-[#192818] mb-2">
                  <Crown className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xl font-serif font-black text-[#d4af37] leading-none">
                    KN
                  </span>
                  <span className="text-[9px] font-bold text-[#d4af37] mt-0.5">
                    {content.hero.crestYear}
                  </span>
                </div>
                <span className="text-xs font-serif font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  {content.hero.crestTitle}
                </span>
              </div>

              {/* Bold Uppercase Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase leading-[1.18] tracking-tight text-white drop-shadow-sm">
                {content.hero.headline}
              </h1>

              {/* Subtitle with 557,28 ha */}
              <p className="text-base sm:text-lg text-[#e5e7eb] leading-relaxed max-w-2xl font-normal">
                {content.hero.subheadline}
              </p>

              {/* CTA Buttons (Royal Purple Pill from reference + Prestige Gold Outline) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-extrabold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-[#7c3aed]/35 transition-all"
                >
                  <span>{content.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#121e11]/85 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#121e11] border border-[#d4af37] font-extrabold text-sm px-7 py-3.5 rounded-full transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{content.hero.secondaryCta}</span>
                </a>
              </div>
            </div>

            {/* Right 4 Cols: Floating Landmark Badge ("WELCOME TO LONG VIEN GOLF CLUB") */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-[#121e11]/90 backdrop-blur-md border-2 border-[#d4af37]/60 rounded-2xl p-5 text-white max-w-sm shadow-2xl">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-2">
                  <Compass className="w-4 h-4" />
                  BIỂU TƯỢNG ĐẶC KHU 557,28 HA
                </div>
                <div className="text-lg font-serif font-black tracking-wide text-[#d4af37] leading-snug mb-1.5">
                  {content.hero.welcomeLandmarkTitle}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  {content.hero.welcomeLandmarkSub}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/15 text-[11px] text-emerald-300 font-semibold">
                  <span>Pháp lý Tô nhượng Chính phủ</span>
                  <span>100% Hoàn tất</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Heritage & Scale Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#121e11]/90 backdrop-blur-md border border-[#d4af37]/30 rounded-2xl p-6 shadow-xl">
            {content.hero.highlights.map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-[#d4af37] pl-4 py-1"
              >
                <div className="text-2xl sm:text-3xl font-serif font-black text-[#d4af37]">
                  {item.value}
                </div>
                <div className="text-xs text-gray-300 font-medium mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 4 MULTI-INDUSTRY LEGAL & INVESTMENT PILLARS */}
      <section id="pillars" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#284525] bg-[#d4af37]/20 border border-[#d4af37]/40 px-3.5 py-1 rounded-full mb-3">
            {content.pillarsSection.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#192818] leading-tight mb-4">
            {content.pillarsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {content.pillarsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.pillarsSection.pillars.map((pillar, idx) => {
            const IconComponent =
              idx === 0
                ? Building2
                : idx === 1
                ? Award
                : idx === 2
                ? Gem
                : Globe2;
            return (
              <article
                key={pillar.id}
                className="bg-white rounded-2xl border border-[#e5dec9] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192818]/90 via-[#192818]/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#192818] text-[#d4af37] border border-[#d4af37]/50 text-xs font-black px-3 py-1 rounded-full">
                    LĨNH VỰC {pillar.code}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-[#d4af37] text-[#121e11] text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    {pillar.metricBadge}
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#192818] text-[#d4af37] flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#192818] group-hover:text-[#284525] leading-snug">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                    {pillar.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#284525] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. FLAGSHIP MEGA-PROJECTS PORTFOLIO */}
      <section
        id="projects"
        className="bg-[#192818] text-white py-20 border-y border-[#d4af37]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                {content.projectsSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-white leading-tight">
                {content.projectsSection.title}
              </h2>
            </div>

            {/* Sector Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {content.projectsSection.categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-[#d4af37] text-[#121e11] shadow-md"
                      : "bg-white/10 text-gray-200 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((proj) => (
              <article
                key={proj.id}
                className="bg-[#121e11] rounded-2xl border border-[#d4af37]/25 overflow-hidden flex flex-col justify-between group hover:border-[#d4af37] transition-colors"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121e11] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#192818]/90 text-[#d4af37] border border-[#d4af37]/40 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                      {proj.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-[#7c3aed] text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full">
                      {proj.scale}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-xs text-[#d4af37] font-semibold mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {proj.location}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-[#d4af37] transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {proj.legalScope}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4" />
                    {proj.status}
                  </span>
                  <a
                    href="#contact"
                    className="text-[#d4af37] font-extrabold hover:underline"
                  >
                    Hồ sơ pháp lý →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CROSS-BORDER 5-STEP LEGAL & LICENSING PROCESS */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#284525] mb-2">
            {content.processSection.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#192818] mb-3">
            {content.processSection.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {content.processSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {content.processSection.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl border border-[#e5dec9] p-6 relative flex flex-col justify-between hover:border-[#d4af37] hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#192818] text-[#d4af37] font-serif font-black text-lg flex items-center justify-center mb-4 shadow">
                  {step.stepNumber}
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7c3aed] block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="text-base font-bold text-[#192818] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-bold text-[#284525]">
                Bước {step.stepNumber} / 05
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SENIOR LEGAL COUNSEL & EXECUTIVE BOARD */}
      <section
        id="counsel"
        className="bg-[#f2ede0] py-20 border-y border-[#e5dec9]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#284525] mb-2">
              {content.counselSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#192818] mb-3">
              {content.counselSection.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {content.counselSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.counselSection.counsels.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-2xl border border-[#e5dec9] overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192818] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#d4af37] text-[#121e11] px-2.5 py-0.5 rounded">
                      {person.role}
                    </span>
                    <h3 className="text-xl font-serif font-bold mt-1.5">
                      {person.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-bold text-[#284525] mb-2">
                      {person.credentials}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {person.experience}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 text-xs">
                    <span className="text-gray-400 block">Chuyên môn sâu:</span>
                    <strong className="text-[#192818]">{person.focus}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEGAL INSIGHTS & CROSS-BORDER PUBLICATIONS */}
      <section id="insights" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#284525] block mb-2">
              {content.insightsSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#192818]">
              {content.insightsSection.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs font-extrabold uppercase tracking-wider text-[#284525] hover:text-[#7c3aed]"
          >
            Xem toàn bộ báo cáo pháp lý →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {content.insightsSection.articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-[#e5dec9] overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#192818] text-[#d4af37] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                  {art.category}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-400 block mb-1.5">
                  {art.date}
                </span>
                <h3 className="text-base font-bold text-[#192818] group-hover:text-[#284525] leading-snug mb-2">
                  {art.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 9. INVESTOR CONSULTATION FORM & PRESTIGE FOOTER */}
      <section
        id="contact"
        className="bg-[#192818] text-white py-20 border-t-2 border-[#d4af37]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Cols Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-xs font-extrabold uppercase px-3.5 py-1 rounded-full">
                <Crown className="w-3.5 h-3.5" />
                HỘI ĐỒNG ĐẦU TƯ & PHÁP CHẾ
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black leading-tight text-white">
                {content.consultationSection.title}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {content.consultationSection.subtitle}
              </p>

              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{content.business.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>{content.business.phone.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>{content.business.email.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>{content.business.hours}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols Form */}
            <div className="lg:col-span-7 bg-[#121e11] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto" />
                  <h3 className="text-xl font-serif font-bold text-white">
                    Đã Tiếp Nhận Hồ Sơ Đăng Ký Tư Vấn Đầu Tư
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    Cảm ơn Quý đối tác <strong>{formState.investorName}</strong>.
                    Ban Pháp chế KN Vientiane Group sẽ liên hệ qua số{" "}
                    <strong>{formState.phone}</strong> trong vòng 24 giờ làm việc.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleConsultationSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#d4af37] uppercase mb-1.5">
                      Họ tên Nhà đầu tư / Đại diện *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formState.investorName}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          investorName: e.target.value,
                        }))
                      }
                      className="w-full bg-[#192818] border border-white/15 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#d4af37] uppercase mb-1.5">
                      Tên Doanh nghiệp / Tổ chức
                    </label>
                    <input
                      type="text"
                      placeholder="Công ty Cổ phần Đầu tư..."
                      value={formState.companyName}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          companyName: e.target.value,
                        }))
                      }
                      className="w-full bg-[#192818] border border-white/15 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#d4af37] uppercase mb-1.5">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0903 xxx xxx"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      className="w-full bg-[#192818] border border-white/15 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#d4af37] uppercase mb-1.5">
                      Email nhận hồ sơ pháp lý
                    </label>
                    <input
                      type="email"
                      placeholder="investor@company.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full bg-[#192818] border border-white/15 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#d4af37] uppercase mb-1.5">
                      Lĩnh vực quan tâm hợp tác & thẩm định pháp lý
                    </label>
                    <select
                      value={formState.sector}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, sector: e.target.value }))
                      }
                      className="w-full bg-[#192818] border border-white/15 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    >
                      {content.consultationSection.sectors.map((sec) => (
                        <option key={sec} value={sec}>
                          {sec}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#d4af37] uppercase mb-1.5">
                      Yêu cầu chi tiết
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Nêu quy mô dự án hoặc vướng mắc pháp lý cần Hội đồng Luật sư tư vấn..."
                      value={formState.notes}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, notes: e.target.value }))
                      }
                      className="w-full bg-[#192818] border border-white/15 focus:border-[#d4af37] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#d4af37] to-[#b58e24] hover:from-[#e3c14d] hover:to-[#c69d2c] text-[#121e11] font-black text-xs uppercase tracking-widest py-3.5 rounded-lg shadow-lg transition-all"
                    >
                      GỬI YÊU CẦU TƯ VẤN ĐẦU TƯ & PHÁP CHẾ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div className="font-serif font-bold text-[#d4af37]">
              © 1978 – 2026 {content.header.brandMain}. All Rights Reserved.
            </div>
            <div>
              Đặc khu Kinh tế Long Thành – Viêng Chăn (557,28 ha) • Long Vien
              Golf Club 27 Hố
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DemoTemplateRenderer;
