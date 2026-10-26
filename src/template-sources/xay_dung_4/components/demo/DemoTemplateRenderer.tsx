"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ArrowRight,
  Building2,
  Compass,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung4DefaultData,
  type XayDung4TemplateData,
  type XayDung4VerticalItem
} from "@/template-sources/xay_dung_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung4TemplateData = adaptClonedTemplateData(
    xayDung4DefaultData,
    incomingData
  );

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedStrip, setSelectedStrip] =
    useState<XayDung4VerticalItem | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });

  const primaryPhone = data.business.phone?.[0] || "0918 888 999";
  const primaryEmail = data.business.email?.[0] || "contact@galaxycons.vn";

  const slides =
    data.heroSlides && data.heroSlides.length > 0
      ? data.heroSlides
      : [
          {
            id: "slide-default",
            indexLabel: "01",
            eyebrow:
              data.hero.eyebrow || "KIẾN TRÚC ĐƯƠNG ĐẠI & THI CÔNG HẠNG SANG",
            title: data.hero.title,
            location: data.business.address,
            image: data.hero.backgroundImage
          }
        ];

  const currentSlide = slides[activeSlideIndex] || slides[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        message: ""
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans selection:bg-[#c59d5f] selection:text-[#1e1e1e]">
      {/* 1. DARK TRANSLUCENT HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#1e1e1e]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Left: Gold Geometric Logo + Brand Name */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-11 w-auto object-contain"
              />
            ) : (
              <div className="w-11 h-11 border border-[#c59d5f] bg-[#252525] flex items-center justify-center relative">
                <Building2 className="w-6 h-6 text-[#c59d5f]" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#c59d5f]" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-[0.22em] text-white uppercase">
                {data.business.name}
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[#c59d5f] uppercase">
                Luxury Design & Build
              </span>
            </div>
          </a>

          {/* Center: Minimalist Uppercase Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#a1a1aa]">
            <a href="#gioi-thieu" className="hover:text-[#c59d5f] transition">
              GIỚI THIỆU
            </a>
            <a href="#dich-vu" className="hover:text-[#c59d5f] transition">
              DỊCH VỤ
            </a>
            <a href="#du-an" className="hover:text-[#c59d5f] transition">
              DỰ ÁN
            </a>
            <a href="#thiet-ke" className="hover:text-[#c59d5f] transition">
              THIẾT KẾ
            </a>
            <a href="#khach-hang" className="hover:text-[#c59d5f] transition">
              KHÁCH HÀNG
            </a>
            <a href="#lien-he" className="hover:text-[#c59d5f] transition">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right: Phone & Language/Search Icons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white hover:text-[#c59d5f] transition border border-white/15 px-3.5 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{primaryPhone}</span>
            </a>
            <span className="text-[11px] font-bold tracking-widest text-[#c59d5f] border border-[#c59d5f]/40 px-2.5 py-1.5">
              VN / EN
            </span>
            <a
              href="#du-an"
              aria-label="Tìm kiếm dự án"
              className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/80 hover:text-[#c59d5f] hover:border-[#c59d5f] transition"
            >
              <Search className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-white/20 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#252525] border-t border-white/10 px-6 py-5 space-y-3 text-xs uppercase tracking-[0.2em]">
            {[
              { label: "GIỚI THIỆU", href: "#gioi-thieu" },
              { label: "DỊCH VỤ", href: "#dich-vu" },
              { label: "DỰ ÁN", href: "#du-an" },
              { label: "THIẾT KẾ", href: "#thiet-ke" },
              { label: "KHÁCH HÀNG", href: "#khach-hang" },
              { label: "LIÊN HỆ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white hover:text-[#c59d5f] border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 2. FULLSCREEN ARCHITECTURAL HERO */}
      <section className="relative min-h-[680px] lg:h-screen flex items-center overflow-hidden pt-20">
        <img
          src={
            activeSlideIndex === 0
              ? data.hero.backgroundImage || currentSlide.image
              : currentSlide.image
          }
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e1e]/80 via-[#1e1e1e]/55 to-[#1e1e1e]/85" />

        {/* Thin Gold Architectural Border Frame */}
        <div className="absolute inset-6 sm:inset-10 top-24 border border-[#c59d5f]/35 pointer-events-none hidden sm:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-end text-right">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#c59d5f] mb-4">
              {activeSlideIndex === 0
                ? data.hero.eyebrow || currentSlide.eyebrow
                : currentSlide.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-light uppercase tracking-[0.12em] text-white leading-[1.2] mb-4">
              {activeSlideIndex === 0 ? data.hero.title : currentSlide.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#a1a1aa] tracking-[0.08em] mb-8">
              *{activeSlideIndex === 0 ? data.hero.subtitle : currentSlide.location}
            </p>

            <div className="flex items-center justify-end gap-4">
              <a
                href={data.hero.ctaLink || "#du-an"}
                className="inline-flex items-center gap-3 bg-[#c59d5f] hover:bg-[#b3894a] text-[#1e1e1e] text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition shadow-lg"
              >
                <span>{data.hero.ctaText || "XEM THÊM"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Slide Indicator Numbers (01 / 04) */}
          <div className="mt-16 flex items-center gap-6 border-t border-white/15 pt-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c59d5f] font-bold">
              {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((sl, idx) => (
                <button
                  key={sl.id}
                  type="button"
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`h-1.5 transition-all cursor-pointer ${
                    idx === activeSlideIndex
                      ? "w-10 bg-[#c59d5f]"
                      : "w-4 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. "VỀ GALAXY" (3-COLUMN DARK CHARCOAL SECTION) */}
      <section id="gioi-thieu" className="py-24 bg-[#1e1e1e] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.35em] text-white">
              VỀ <span className="text-[#c59d5f] font-semibold">GALAXY</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c59d5f] mx-auto mt-4 mb-6" />
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          {/* 3 Dark Cards (#252525) with minimalist gold line icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data.aboutPillars || []).map((pillar, idx) => (
              <div
                key={pillar.id}
                className="bg-[#252525] border border-white/5 hover:border-[#c59d5f]/50 p-8 sm:p-9 transition group flex flex-col justify-between"
              >
                <div>
                  {/* Minimalist Gold Line Icon */}
                  <div className="w-14 h-14 border border-[#c59d5f]/40 flex items-center justify-center mb-6 text-[#c59d5f] group-hover:bg-[#c59d5f] group-hover:text-[#1e1e1e] transition">
                    {idx === 0 && <Building2 className="w-7 h-7 stroke-[1.4]" />}
                    {idx === 1 && <Compass className="w-7 h-7 stroke-[1.4]" />}
                    {idx >= 2 && <Layers className="w-7 h-7 stroke-[1.4]" />}
                  </div>

                  <h3 className="text-base font-bold uppercase tracking-[0.14em] text-white mb-4 group-hover:text-[#c59d5f] transition">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {pillar.quote && (
                  <p className="text-xs italic text-[#c59d5f]/90 mt-5 pt-4 border-t border-white/10">
                    {pillar.quote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "DỊCH VỤ" (3-COLUMN GOLD ICON SHOWCASE) */}
      <section id="dich-vu" className="py-20 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.35em] text-white">
              DỊCH <span className="text-[#c59d5f] font-semibold">VỤ</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c59d5f] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {(data.services || []).slice(0, 3).map((srv, idx) => (
              <div
                key={srv.id}
                className="group border-t border-white/10 hover:border-[#c59d5f] pt-8 transition"
              >
                {/* Intricate gold architectural roof/geometry SVG icon */}
                <div className="mb-6 text-[#c59d5f]">
                  {idx === 0 && (
                    <svg
                      viewBox="0 0 64 40"
                      className="w-16 h-10 stroke-current fill-none"
                      strokeWidth="1.5"
                    >
                      <path d="M4 28 L32 8 L60 28" />
                      <path d="M12 28 V36 H52 V28" />
                      <path d="M24 18 L40 18 M32 8 V36" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg
                      viewBox="0 0 64 40"
                      className="w-16 h-10 stroke-current fill-none"
                      strokeWidth="1.5"
                    >
                      <path d="M8 34 L8 14 L32 4 L56 14 V34" />
                      <path d="M20 34 V18 L44 18 V34" />
                      <path d="M4 34 H60" />
                    </svg>
                  )}
                  {idx >= 2 && (
                    <svg
                      viewBox="0 0 64 40"
                      className="w-16 h-10 stroke-current fill-none"
                      strokeWidth="1.5"
                    >
                      <path d="M6 30 L28 10 L58 24" />
                      <path d="M14 30 H54" />
                      <circle cx="28" cy="22" r="4" />
                    </svg>
                  )}
                </div>

                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c59d5f] mb-1.5">
                  {srv.category}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-[0.16em] text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "DỰ ÁN" (4-COLUMN FULL-BLEED VERTICAL STRIPS) */}
      <section id="du-an" className="pt-16 pb-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.35em] text-white">
            DỰ <span className="text-[#c59d5f] font-semibold">ÁN</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#c59d5f] mx-auto mt-4" />
        </div>

        {/* Full-bleed 4-Column Vertical Strips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {(data.projectStrips || []).map((strip) => (
            <div
              key={strip.id}
              onClick={() => setSelectedStrip(strip)}
              className="group relative h-[520px] overflow-hidden border-r border-b border-white/10 cursor-pointer bg-[#141414]"
            >
              <img
                src={strip.image}
                alt={strip.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/75 via-[#1e1e1e]/25 to-[#1e1e1e]/90 group-hover:via-[#1e1e1e]/40 transition" />

              {/* Top Project Title */}
              <div className="absolute top-8 left-7 right-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c59d5f] block mb-2">
                  {strip.location} • {strip.area}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.06em] text-white leading-snug group-hover:text-[#c59d5f] transition">
                  {strip.title}
                </h3>
              </div>

              {/* Vertical Rotated Gold Category Label on Bottom-Left (Just like XD004-xay_dung_4.jpg) */}
              <div className="absolute bottom-10 left-7 origin-bottom-left -rotate-90 translate-x-5">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c59d5f] whitespace-nowrap">
                  {strip.verticalCategory}
                </span>
              </div>

              {/* Bottom Right CTA link */}
              <div className="absolute bottom-7 right-7">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#c59d5f] border-b border-transparent group-hover:border-[#c59d5f] pb-1 transition">
                  <span>XEM DỰ ÁN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. "THIẾT KẾ" (4-COLUMN FULL-BLEED VERTICAL INTERIOR STRIPS) */}
      <section id="thiet-ke" className="pt-16 pb-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.35em] text-white">
            THIẾT <span className="text-[#c59d5f] font-semibold">KẾ</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#c59d5f] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {(data.designStrips || []).map((strip) => (
            <div
              key={strip.id}
              onClick={() => setSelectedStrip(strip)}
              className="group relative h-[520px] overflow-hidden border-r border-b border-white/10 cursor-pointer bg-[#141414]"
            >
              <img
                src={strip.image}
                alt={strip.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e]/75 via-[#1e1e1e]/25 to-[#1e1e1e]/90" />

              {/* Top Title */}
              <div className="absolute top-8 left-7 right-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c59d5f] block mb-2">
                  {strip.location} • {strip.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.06em] text-white leading-snug group-hover:text-[#c59d5f] transition">
                  {strip.title}
                </h3>
              </div>

              {/* Vertical Rotated Category Label */}
              <div className="absolute bottom-10 left-7 origin-bottom-left -rotate-90 translate-x-5">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75 group-hover:text-[#c59d5f] whitespace-nowrap transition">
                  {strip.verticalCategory}
                </span>
              </div>

              {/* Bottom Right CTA */}
              <div className="absolute bottom-7 right-7">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c59d5f]">
                  <span>CHI TIẾT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. "KHÁCH HÀNG CỦA CHÚNG TÔI" (4x3 PARTNER LOGO GRID) */}
      <section id="khach-hang" className="py-24 bg-[#1e1e1e] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.32em] text-white">
              KHÁCH HÀNG{" "}
              <span className="text-[#c59d5f] font-semibold">CỦA CHÚNG TÔI</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c59d5f] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-white/10">
            {(data.clients || []).slice(0, 12).map((client, index) => (
              <div
                key={client.id || index}
                className="h-28 border-r border-b border-white/10 bg-[#252525]/50 hover:bg-[#252525] flex flex-col items-center justify-center p-4 transition group"
              >
                <Sparkles className="w-4 h-4 text-[#c59d5f]/60 group-hover:text-[#c59d5f] mb-2 transition" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#a1a1aa] group-hover:text-[#c59d5f] text-center transition">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "LIÊN HỆ" (DARK MINIMALIST CONTACT SECTION + DARK FOOTER) */}
      <section id="lien-he" className="py-24 bg-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.35em] text-white">
              LIÊN <span className="text-[#c59d5f] font-semibold">HỆ</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#c59d5f] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info */}
            <div className="lg:col-span-4 space-y-5 text-sm text-[#a1a1aa]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c59d5f] font-bold mb-1">
                  Hộp thư điện tử
                </p>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-white hover:text-[#c59d5f] transition"
                >
                  {primaryEmail}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c59d5f] font-bold mb-1">
                  Trụ sở văn phòng
                </p>
                <p className="text-white leading-relaxed">
                  {data.business.address}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c59d5f] font-bold mb-1">
                  Hotline Tư Vấn Kiến Trúc
                </p>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="text-lg font-bold text-white hover:text-[#c59d5f] tracking-wider transition"
                >
                  {primaryPhone}
                </a>
              </div>
            </div>

            {/* Right Minimalist Dark-Input Contact Form with Gold Border & Gold Submit */}
            <div className="lg:col-span-8">
              {contactSubmitted ? (
                <div className="bg-[#252525] border border-[#c59d5f] p-8 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#c59d5f] mx-auto mb-3" />
                  <h3 className="text-lg font-bold uppercase tracking-widest text-white">
                    Đã gửi yêu cầu tư vấn thành công
                  </h3>
                  <p className="text-xs text-[#a1a1aa] mt-2">
                    Kiến trúc sư chủ trì của {data.business.name} sẽ liên hệ lại với Quý khách trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Họ và tên *"
                        value={contactForm.fullName}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            fullName: e.target.value
                          })
                        }
                        className="w-full bg-[#252525] border border-white/10 focus:border-[#c59d5f] text-white placeholder:text-[#a1a1aa]/60 text-xs px-4 py-3.5 rounded focus:outline-none transition"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Số điện thoại *"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            phone: e.target.value
                          })
                        }
                        className="w-full bg-[#252525] border border-white/10 focus:border-[#c59d5f] text-white placeholder:text-[#a1a1aa]/60 text-xs px-4 py-3.5 rounded focus:outline-none transition"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            email: e.target.value
                          })
                        }
                        className="w-full bg-[#252525] border border-white/10 focus:border-[#c59d5f] text-white placeholder:text-[#a1a1aa]/60 text-xs px-4 py-3.5 rounded focus:outline-none transition"
                      />
                      <input
                        type="text"
                        placeholder="Công ty / Loại hình dự án"
                        value={contactForm.company}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            company: e.target.value
                          })
                        }
                        className="w-full bg-[#252525] border border-white/10 focus:border-[#c59d5f] text-white placeholder:text-[#a1a1aa]/60 text-xs px-4 py-3.5 rounded focus:outline-none transition"
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <textarea
                        rows={4}
                        placeholder="Lời nhắn / Yêu cầu thiết kế..."
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            message: e.target.value
                          })
                        }
                        className="w-full h-full bg-[#252525] border border-white/10 focus:border-[#c59d5f] text-white placeholder:text-[#a1a1aa]/60 text-xs px-4 py-3.5 rounded focus:outline-none transition resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="bg-[#c59d5f] hover:bg-[#b28949] text-[#1e1e1e] text-xs font-extrabold uppercase tracking-[0.25em] px-9 py-3 rounded-full transition cursor-pointer"
                    >
                      GỬI YÊU CẦU
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DARK FOOTER (Matches bottom of XD004-xay_dung_4.jpg) */}
      <footer className="bg-[#181818] border-t border-white/10 py-14 text-xs text-[#a1a1aa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Architectural Monogram + Phone */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-end gap-3 mb-2">
                <div className="w-12 h-14 border border-[#c59d5f] bg-[#252525] flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-[#c59d5f]" />
                </div>
                <div>
                  <span className="block text-base font-extrabold tracking-[0.25em] text-white uppercase">
                    {data.business.name}
                  </span>
                  <span className="text-[10px] tracking-[0.28em] text-[#c59d5f] uppercase">
                    Design & Build
                  </span>
                </div>
              </div>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-sm font-bold tracking-[0.22em] text-[#a1a1aa] hover:text-[#c59d5f] mt-1"
              >
                {primaryPhone}
              </a>
            </div>

            {/* Center Copyright */}
            <div className="text-center space-y-1">
              <p>© Bản quyền thuộc về {data.business.name}.</p>
              <p className="text-[11px] text-white/50">
                Kiến trúc đương đại & Thi công nội ngoại thất hạng sang
              </p>
            </div>

            {/* Right Company Info */}
            <div className="text-center md:text-right space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                CÔNG TY CỔ PHẦN XÂY DỰNG & ĐẦU TƯ {data.business.name}
              </p>
              <p className="inline-flex items-center gap-1.5 justify-center md:justify-end">
                <MapPin className="w-3.5 h-3.5 text-[#c59d5f] shrink-0" />
                <span>{data.business.address}</span>
              </p>
              <p className="inline-flex items-center gap-1.5 justify-center md:justify-end block">
                <Mail className="w-3.5 h-3.5 text-[#c59d5f] shrink-0" />
                <span>{primaryEmail}</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL FOR PROJECT / DESIGN STRIP DETAILS */}
      {selectedStrip && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedStrip(null)}
        >
          <div
            className="bg-[#252525] border border-[#c59d5f]/50 max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <img
                src={selectedStrip.image}
                alt={selectedStrip.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedStrip(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-[#1e1e1e]/90 border border-[#c59d5f]/50 text-white flex items-center justify-center hover:bg-[#c59d5f] hover:text-[#1e1e1e] transition"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-4 left-4 bg-[#c59d5f] text-[#1e1e1e] text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1">
                {selectedStrip.verticalCategory}
              </span>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold uppercase tracking-[0.12em] text-white mb-2">
                {selectedStrip.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.16em] text-[#c59d5f] mb-4">
                {selectedStrip.location} • Quy mô: {selectedStrip.area} • Năm:{" "}
                {selectedStrip.year}
              </p>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                {selectedStrip.description}
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedStrip(null)}
                  className="px-5 py-2.5 border border-white/20 text-xs uppercase tracking-widest text-white"
                >
                  Đóng
                </button>
                <a
                  href="#lien-he"
                  onClick={() => setSelectedStrip(null)}
                  className="px-6 py-2.5 bg-[#c59d5f] text-[#1e1e1e] text-xs font-bold uppercase tracking-widest"
                >
                  Tư vấn dự án tương tự
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
