"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Crown,
  Play,
  Sparkles,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Store,
  FileSignature,
  Award,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu15DefaultData,
  type LuatSu15Data,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const content: LuatSu15Data = adaptClonedTemplateData(
    luatSu15DefaultData,
    data
  );

  const [aboutSlideIdx, setAboutSlideIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    selectedPackage: content.consultationSection.packages[0] || "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const gallery = content.aboutSection.mainGallery;
  const activeAboutImg = gallery[aboutSlideIdx] || gallery[0];

  const handlePrevSlide = () => {
    setAboutSlideIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setAboutSlideIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] text-[#221c17] font-sans selection:bg-[#c59b38] selection:text-white">
      {/* 1. CLASSICAL ARCHITECTURE HERO & TRANSLUCENT CENTER-LOGO HEADER */}
      <section className="relative min-h-[620px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden bg-[#1e1915] text-white">
        {/* Background Classical Dining / Hospitality Interior */}
        <div className="absolute inset-0">
          <img
            src={content.hero.backgroundImage}
            alt={content.hero.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/80" />
        </div>

        {/* Top Address & Center-Logo Header */}
        <header className="relative z-20 border-b border-white/15 bg-black/35 backdrop-blur-sm">
          {/* Top Utility Strip */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-[11px] text-gray-300 border-b border-white/10">
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#c59b38] shrink-0" />
              <span className="truncate">{content.business.address}</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden sm:inline text-[#e5c165] font-semibold">
                Hotline: {content.business.phone[0]}
              </span>
              <span className="text-gray-400">VN | EN</span>
            </div>
          </div>

          {/* Main Navigation with Center Quatrefoil Mandala Logo */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
            {/* Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end pr-6">
              {content.header.leftNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#e5c165] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Center HORI COMPANY Golden Quatrefoil Logo */}
            <a
              href="#about"
              className="flex flex-col items-center shrink-0 group mx-auto lg:mx-0"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#c59b38] bg-[#1e1915]/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-[#e5c165]" />
              </div>
              <span className="text-sm font-serif font-black tracking-[0.22em] text-[#e5c165] mt-1.5">
                {content.header.brandName}
              </span>
              <span className="text-[8px] uppercase tracking-[0.18em] text-gray-300">
                {content.header.brandSub}
              </span>
            </a>

            {/* Right Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-start pl-6">
              {content.header.rightNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-[#e5c165] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Center Hero Headline & Bottom-Right Glassmorphic Gold-Bordered Card */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 w-full flex-1 flex flex-col justify-between">
          <div className="text-center max-w-3xl mx-auto my-auto pt-6">
            <span className="inline-block bg-[#c59b38]/25 border border-[#c59b38]/60 text-[#f3d683] text-[11px] font-extrabold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-4">
              {content.hero.subheadline}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight drop-shadow-md">
              {content.hero.headline}
            </h1>
          </div>

          {/* Bottom-Right Framed Dark Card with Gold Border (Exact match to LUAT018 middle screen) */}
          <div className="mt-10 flex justify-end">
            <div className="bg-[#1a1511]/90 backdrop-blur-md border-2 border-[#c59b38] rounded-xl p-6 max-w-md shadow-2xl">
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#e5c165] mb-2">
                {content.hero.cardTitle}
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                {content.hero.cardDescription}
              </p>
              <a
                href="#about"
                className="inline-block bg-[#c59b38] hover:bg-[#b08729] text-[#1a1511] font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-colors"
              >
                {content.hero.cardCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: VỀ CHÚNG TÔI — GIỚI THIỆU CHUNG (EXACT MATCH TO LUAT018 MIDDLE SCREEN) */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left 7 Cols: Framed Image Slider with Gold Bottom Caption Banner "Giới Thiệu Chung" */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={activeAboutImg}
                alt={content.aboutSection.captionBanner}
                className="w-full h-[360px] sm:h-[420px] object-cover transition-all duration-500"
              />

              {/* Left & Right Slider Arrows */}
              <button
                type="button"
                onClick={handlePrevSlide}
                aria-label="Ảnh trước"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#c59b38] text-white flex items-center justify-center transition-colors shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                aria-label="Ảnh tiếp"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#c59b38] text-white flex items-center justify-center transition-colors shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Gold Caption Banner */}
              <div className="bg-gradient-to-r from-[#d4af37] via-[#e5c165] to-[#c59b38] text-[#1e1915] px-6 py-4">
                <h3 className="text-xl font-serif font-black">
                  {content.aboutSection.captionBanner}
                </h3>
                <p className="text-xs font-medium text-[#2c241d] mt-0.5 line-clamp-1">
                   Chuẩn hóa mô hình đầu tư, sở hữu trí tuệ và nhượng quyền thương mại F&B trên toàn quốc
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: "Về Chúng Tôi" Narrative + Gold Button + Secondary Image */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#221c17]">
              {content.aboutSection.headingPrefix}{" "}
              <span className="text-[#c59b38]">
                {content.aboutSection.headingHighlight}
              </span>
            </h2>

            {content.aboutSection.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-xs sm:text-sm text-[#4a3f35] leading-relaxed"
              >
                {para}
              </p>
            ))}

            <div className="pt-1">
              <a
                href="#services"
                className="inline-block bg-[#c59b38] hover:bg-[#a88227] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-colors"
              >
                {content.aboutSection.ctaText}
              </a>
            </div>

            <div className="pt-3 grid grid-cols-2 gap-4 items-center">
              <img
                src={content.aboutSection.secondaryImage}
                alt="Không gian Hori Company"
                className="w-full h-32 object-cover rounded-lg border-2 border-white shadow"
              />
              <div className="grid grid-cols-1 gap-2">
                {content.aboutSection.stats.slice(0, 2).map((st) => (
                  <div
                    key={st.label}
                    className="bg-white/80 border border-[#e3d7c3] rounded-lg p-3"
                  >
                    <div className="text-xl font-serif font-black text-[#c59b38]">
                      {st.value}
                    </div>
                    <div className="text-[11px] font-semibold text-[#4a3f35]">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: SỰ KIỆN VÀ KHUYẾN MÃI ĐẶC BIỆT! (EXACT 3-CARD BENTO GRID FROM LUAT018 RIGHT SCREEN) */}
      <section
        id="events"
        className="bg-[#faf6f0] py-20 border-y border-[#e6dccb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading with Crown Icon */}
          <div className="flex items-center gap-2.5 mb-8">
            <Crown className="w-6 h-6 text-[#c59b38] fill-[#c59b38]" />
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#221c17]">
              {content.specialEventsBento.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Left 5 Cols: Tall Vertical Poster Card ("Healthy Food COMBO 99K") */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg group min-h-[520px] flex flex-col justify-between">
              <img
                src={content.specialEventsBento.leftVerticalPoster.image}
                alt={content.specialEventsBento.leftVerticalPoster.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

              {/* Top Overlay Typography ("Healthy Food" + Green Price Badge) */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-serif italic font-bold text-white drop-shadow">
                    {content.specialEventsBento.leftVerticalPoster.scriptHeading}
                  </span>
                  <span className="bg-white/90 text-[#1e1915] text-[10px] font-black uppercase px-2.5 py-1 rounded">
                    FELOTA
                  </span>
                </div>

                <div className="inline-block bg-[#2e6f40]/95 border border-lime-300/40 text-white rounded-xl p-4 shadow-lg">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-lime-200">
                    {content.specialEventsBento.leftVerticalPoster.promoLabel}
                  </div>
                  <div className="text-3xl font-black text-white leading-none mt-1">
                    chỉ{" "}
                    {content.specialEventsBento.leftVerticalPoster.priceHighlight}
                  </div>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 p-6 sm:p-7 text-white">
                <span className="inline-block bg-[#e1242b] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full mb-2">
                  NEW
                </span>
                <div className="text-[11px] text-gray-300 mb-1">
                  {content.specialEventsBento.leftVerticalPoster.date}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold leading-snug mb-2 group-hover:text-[#e5c165] transition-colors">
                  {content.specialEventsBento.leftVerticalPoster.title}
                </h3>
                <p className="text-xs text-gray-200 line-clamp-2">
                  {content.specialEventsBento.leftVerticalPoster.subtitle}
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Top Horizontal Banner + Bottom Corporate Bakery Card */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-7">
              {/* Right Top Banner */}
              <div className="bg-white rounded-2xl border border-[#e6dccb] overflow-hidden shadow-sm group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={content.specialEventsBento.rightTopBanner.image}
                    alt={content.specialEventsBento.rightTopBanner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1b4328]/85 via-black/35 to-transparent flex items-center p-6">
                    <div className="text-white max-w-xs">
                      <span className="inline-block bg-[#c59b38] text-[#1e1915] text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-2">
                        {content.specialEventsBento.rightTopBanner.badge}
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-lime-300 leading-none mb-1">
                        {content.specialEventsBento.rightTopBanner.discountText}
                      </div>
                      <p className="text-xs text-gray-100 font-medium">
                        Dành cho khách hàng & đối tác nhượng quyền chuỗi mùa hè
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#221c17] mb-1">
                    {content.specialEventsBento.rightTopBanner.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {content.specialEventsBento.rightTopBanner.caption}
                  </p>
                </div>
              </div>

              {/* Right Bottom Corporate Bakery & Legal B2B Card */}
              <div className="bg-white rounded-2xl border border-[#e6dccb] overflow-hidden shadow-sm group">
                <div className="h-52 overflow-hidden">
                  <img
                    src={content.specialEventsBento.rightBottomCard.image}
                    alt={content.specialEventsBento.rightBottomCard.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-[#221c17] mb-1.5">
                    {content.specialEventsBento.rightBottomCard.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {content.specialEventsBento.rightBottomCard.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-xs font-extrabold text-[#c59b38] hover:underline"
                  >
                    {content.specialEventsBento.rightBottomCard.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULL-WIDTH VIDEO TOUR SHOWCASE (EXACT MATCH TO BOTTOM RIGHT OF LUAT018) */}
      <section id="video" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
          <div className="relative h-[400px] sm:h-[500px]">
            <img
              src={content.videoShowcaseSection.thumbnailImage}
              alt={content.videoShowcaseSection.videoHeaderTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/75" />

            {/* Top YouTube-style Title Overlay Bar */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c59b38] text-[#1e1915] font-serif font-black text-xs flex items-center justify-center shadow">
                  HC
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white drop-shadow">
                    {content.videoShowcaseSection.videoHeaderTitle}
                  </h3>
                  <span className="text-[10px] text-gray-300">
                    HORI Official Channel • {content.videoShowcaseSection.duration}
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block bg-black/60 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                Full HD 1080p
              </span>
            </div>

            {/* Center Red Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setVideoPlaying((v) => !v)}
                aria-label="Phát video giới thiệu"
                className="w-20 h-14 rounded-2xl bg-[#ff0000] hover:bg-[#d90000] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>
            </div>

            {/* Bottom Highlights Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl p-4 text-white">
              {videoPlaying ? (
                <div className="flex items-center justify-between text-xs text-amber-300 font-bold">
                  <span>
                    ▶ Đang phát bản trình chiếu Pháp lý Nhượng quyền & Không gian cửa hàng mẫu FELOTA Quận 1...
                  </span>
                  <button
                    type="button"
                    onClick={() => setVideoPlaying(false)}
                    className="underline text-white ml-4"
                  >
                    Thu gọn
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {content.videoShowcaseSection.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e5c165] shrink-0" />
                      <span className="text-gray-200">{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 FRANCHISE LEGAL & F&B INVESTMENT PILLARS */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#9e7822] bg-[#c59b38]/15 px-3.5 py-1 rounded-full mb-2">
            {content.legalServicesSection.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#221c17] mb-3">
            {content.legalServicesSection.title}
          </h2>
          <p className="text-sm text-[#574b40]">
            {content.legalServicesSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.legalServicesSection.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-[#e6dccb] overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1915]/85 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#c59b38] text-[#1e1915] text-xs font-black px-3 py-1 rounded-full">
                  GIẢI PHÁP {pillar.code}
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-[#f3d683]">
                  {pillar.subtitle}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#221c17] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <ul className="space-y-2 pt-3 border-t border-gray-100">
                  {pillar.deliverables.map((del) => (
                    <li
                      key={del}
                      className="flex items-start gap-2 text-xs font-semibold text-[#3b3129]"
                    >
                      <FileSignature className="w-4 h-4 text-[#c59b38] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BRAND ECOSYSTEM SHOWCASE */}
      <section
        id="brands"
        className="bg-[#1e1915] text-white py-20 border-t border-[#c59b38]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e5c165] block mb-2">
              {content.brandEcosystemSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-white">
              {content.brandEcosystemSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {content.brandEcosystemSection.brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-[#2a221c] rounded-2xl border border-[#c59b38]/30 overflow-hidden flex flex-col justify-between group hover:border-[#e5c165] transition-colors"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 right-3 bg-[#1e1915]/90 text-[#e5c165] border border-[#c59b38]/50 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                      {brand.ipStatus}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#e5c165] font-bold block mb-1">
                      {brand.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 py-3.5 bg-black/25 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
                    <Store className="w-4 h-4" />
                    {brand.storeCount}
                  </span>
                  <a
                    href="#contact"
                    className="text-white font-bold hover:text-[#e5c165]"
                  >
                    Nhận quyền →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION FORM & ESPRESSO/GOLD FOOTER */}
      <footer
        id="contact"
        className="bg-[#16120f] text-gray-300 pt-16 pb-10 border-t border-[#c59b38]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
            {/* Left 5 Cols Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full border-2 border-[#c59b38] flex items-center justify-center text-[#e5c165]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-serif font-black tracking-wider text-[#e5c165]">
                    {content.header.brandName}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">
                    {content.header.brandSub}
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                {content.consultationSection.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {content.consultationSection.subtitle}
              </p>

              <div className="space-y-2.5 text-xs text-gray-300 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e5c165] shrink-0 mt-0.5" />
                  <span>{content.business.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e5c165] shrink-0" />
                  <span>{content.business.phone.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#e5c165] shrink-0" />
                  <span>{content.business.email.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#e5c165] shrink-0" />
                  <span>{content.business.hours}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols Form */}
            <div className="lg:col-span-7 bg-[#221c17] border border-[#c59b38]/40 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <ShieldCheck className="w-12 h-12 text-[#e5c165] mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-white">
                    Đã Gửi Đăng Ký Tư Vấn Pháp Lý & Nhượng Quyền!
                  </h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    Ban Pháp chế & Phát triển Hệ thống HORI COMPANY sẽ liên hệ với{" "}
                    <strong>{formState.fullName}</strong> qua số{" "}
                    <strong>{formState.phone}</strong> để gửi Bộ Hồ sơ Nhượng quyền.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#e5c165] uppercase mb-1.5">
                      Họ và tên Nhà đầu tư *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Trần Minh Anh"
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, fullName: e.target.value }))
                      }
                      className="w-full bg-[#16120f] border border-white/15 focus:border-[#e5c165] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#e5c165] uppercase mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0909 xxx xxx"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      className="w-full bg-[#16120f] border border-white/15 focus:border-[#e5c165] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#e5c165] uppercase mb-1.5">
                      Email nhận Hồ sơ FDD
                    </label>
                    <input
                      type="email"
                      placeholder="partner@domain.vn"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full bg-[#16120f] border border-white/15 focus:border-[#e5c165] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#e5c165] uppercase mb-1.5">
                      Khu vực dự kiến mở điểm bán
                    </label>
                    <input
                      type="text"
                      placeholder="TP.HCM, Hà Nội, Đà Nẵng..."
                      value={formState.city}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, city: e.target.value }))
                      }
                      className="w-full bg-[#16120f] border border-white/15 focus:border-[#e5c165] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#e5c165] uppercase mb-1.5">
                      Gói Tư vấn Pháp lý / Nhượng quyền quan tâm
                    </label>
                    <select
                      value={formState.selectedPackage}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          selectedPackage: e.target.value,
                        }))
                      }
                      className="w-full bg-[#16120f] border border-white/15 focus:border-[#e5c165] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    >
                      {content.consultationSection.packages.map((pkg) => (
                        <option key={pkg} value={pkg}>
                          {pkg}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#c59b38] hover:bg-[#d8ae47] text-[#16120f] font-black text-xs uppercase tracking-widest py-3.5 rounded-lg shadow-lg transition-colors"
                    >
                      NHẬN HỒ SƠ PHÁP LÝ NHƯỢNG QUYỀN & BÁO GIÁ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              © 2026 {content.business.name}. Bảo lưu mọi quyền sở hữu trí tuệ.
            </div>
            <div className="text-[#e5c165]">
              FELOTA Bakery • HORI Bistro • VERDANT Kitchen
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
