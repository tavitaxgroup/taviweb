"use client";

import React, { useState } from "react";
import {
  Search,
  Car,
  Users,
  Settings,
  Check,
  ArrowRight,
  Paperclip,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  X,
  Menu,
  Quote
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto8DefaultData,
  type GarageOto8TemplateData,
  type GarageOto8RentalSlide
} from "@/template-sources/garage_oto_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: GarageOto8TemplateData = adaptClonedTemplateData(
    garageOto8DefaultData,
    incomingData
  );

  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(2); // Default "03" like screenshot
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] =
    useState<GarageOto8RentalSlide | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [footerEmail, setFooterEmail] = useState<string>("");
  const [footerSubscribed, setFooterSubscribed] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0879 327 932";
  const primaryEmail = data.business.email?.[0] || "info@thuexevip24h.vn";
  const brandName = data.business.name || "THUEXEVIP24H";

  const slides = data.rentalSlides || [];
  const currentSlide = slides[activeSlideIdx] || slides[0];

  const testimonials = data.testimonials || [];
  const currentTestimonial =
    testimonials[activeTestimonialIdx] || testimonials[0];

  const renderPillButton = (
    label: string,
    href?: string,
    onClick?: () => void,
    darkVariant = false
  ) => {
    const baseClasses = `inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-xs font-bold transition-all ${
      darkVariant
        ? "bg-[#111722] text-white hover:bg-[#1e2638]"
        : "bg-white/90 border border-[#cbb76b] text-[#222222] hover:border-[#e6be3a] hover:shadow-md"
    }`;

    if (onClick) {
      return (
        <button type="button" onClick={onClick} className={baseClasses}>
          <span>{label}</span>
          <span className="w-7 h-7 rounded-full bg-[#f4ce50] text-[#111722] flex items-center justify-center">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      );
    }

    return (
      <a href={href || "#lien-he"} className={baseClasses}>
        <span>{label}</span>
        <span className="w-7 h-7 rounded-full bg-[#f4ce50] text-[#111722] flex items-center justify-center">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </a>
    );
  };

  return (
    <div
      className="min-h-screen bg-[#fffef9] text-[#222222] font-sans selection:bg-[#f4ce50] selection:text-[#0b111e]"
      style={{
        backgroundImage:
          "radial-gradient(#f3eac2 0.75px, transparent 0.75px)",
        backgroundSize: "28px 28px"
      }}
    >
      {/* 1. TOP UTILITY BAR */}
      <div id="trang-chu" className="bg-white border-b border-[#efefef] py-2 px-4">
        <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-[#555555] font-medium">
              Liên hệ với chúng tôi
            </span>
            <a
              href="#lien-he"
              className="w-5 h-5 rounded-full bg-[#1877f2] text-white text-[10px] font-bold flex items-center justify-center"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#lien-he"
              className="w-5 h-5 rounded-full bg-[#ff0000] text-white text-[10px] font-bold flex items-center justify-center"
              aria-label="YouTube"
            >
              ▶
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="w-5 h-5 rounded-full bg-[#0068ff] text-white text-[9px] font-bold flex items-center justify-center"
              aria-label="Zalo"
            >
              Z
            </a>
          </div>

          <div className="flex items-center bg-[#f6f6f6] border border-[#e5e5e5] rounded-full px-3.5 py-1 w-48 sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm dòng xe..."
              className="bg-transparent w-full text-xs text-[#222222] focus:outline-none"
            />
            <Search className="w-3.5 h-3.5 text-[#666666] shrink-0" />
          </div>
        </div>
      </div>

      {/* 2. MAIN DARK NAVY HEADER (#0b111e) */}
      <header className="sticky top-0 z-40 bg-[#0b111e] text-white shadow-lg">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Overlapping Circular SUV Badge Logo */}
          <a
            href="#trang-chu"
            className="relative z-20 flex items-center gap-2.5 shrink-0"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl border-2 border-[#f4ce50] flex flex-col items-center justify-center text-[#0b111e] translate-y-2 p-1.5">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={brandName}
                  className="w-full h-full object-contain rounded-full"
                />
              ) : (
                <>
                  <Car className="w-6 h-6 text-[#0b111e] stroke-[2]" />
                  <span className="text-[7px] font-black uppercase tracking-tighter text-center leading-tight mt-0.5">
                    {brandName.slice(0, 12)}
                  </span>
                </>
              )}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11.5px] font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              className="text-[#f4ce50] transition-colors"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#f4ce50] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#f4ce50] transition-colors"
            >
              THUÊ XE DU LỊCH
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#f4ce50] transition-colors"
            >
              DỊCH VỤ THUÊ XE KHÁC
            </a>
            <a
              href="#uu-dai"
              className="hover:text-[#f4ce50] transition-colors"
            >
              BẢNG GIÁ
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#f4ce50] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#f4ce50] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden text-white p-1.5"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121a2d] border-t border-white/10 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#f4ce50]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              DỊCH VỤ CHO THUÊ XE
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO BANNER WITH 3 OVERLAPPING CIRCULAR FRAMES & GOLD WAVE */}
      <section className="relative w-full h-[440px] sm:h-[520px] overflow-hidden bg-[#1c222e]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ead586]/90 via-black/25 to-transparent" />

        <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-6 py-10">
          {/* Left 3 Circular Photo Frames */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-auto lg:mb-8">
            {(data.heroCircles || []).map((imgUrl, idx) => (
              <div
                key={idx}
                className={`rounded-full overflow-hidden shadow-2xl shrink-0 ${
                  idx === 0
                    ? "w-24 h-24 sm:w-32 sm:h-32 border-4 border-[#f4ce50]"
                    : idx === 1
                    ? "w-24 h-24 sm:w-32 sm:h-32 border-4 border-white translate-y-3"
                    : "w-28 h-28 sm:w-40 sm:h-40 border-4 border-white -translate-y-2"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Xe hạng sang ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Brand Hero Typography */}
          <div className="text-center lg:text-center max-w-md lg:mt-auto lg:mb-10">
            <h1 className="text-3xl sm:text-4xl font-black uppercase text-[#f4ce50] drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] tracking-wide mb-2">
              {data.hero.title}
            </h1>
            <p className="text-sm sm:text-base font-bold text-white drop-shadow mb-5">
              {data.hero.subtitle}
            </p>
            {renderPillButton(data.hero.ctaText, data.hero.ctaLink)}
          </div>
        </div>
      </section>

      {/* 4. DARK NAVY ROUNDED-LEFT STATS BAR */}
      <section className="relative z-20 flex justify-end">
        <div className="w-full lg:w-[84%] bg-[#0b111e] text-white rounded-bl-[64px] sm:rounded-bl-[90px] py-8 px-6 sm:px-14 shadow-xl">
          <div className="max-w-[920px] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 gap-6">
            {(data.stats || []).map((stat, idx) => {
              const IconComp =
                idx === 0 ? Car : idx === 1 ? Users : Settings;
              return (
                <div
                  key={stat.id}
                  className="flex items-center justify-center gap-4 pt-4 sm:pt-0 first:pt-0"
                >
                  <IconComp className="w-10 h-10 text-white stroke-[1.8] shrink-0" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/80">{stat.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION ("THUEXEVIP24H") */}
      <section id="gioi-thieu" className="py-16 sm:py-20">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy & Checkmarks */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ecc545] tracking-wide">
                {data.business.aboutTitle || brandName}
              </h2>
              <div className="space-y-3 text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                {(data.business.aboutText || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <p className="text-xs font-semibold text-[#444444] pt-1">
                Ba điểm mạnh nổi bật của {brandName}:
              </p>
              <ul className="space-y-2.5 pb-3">
                {(data.aboutStrengths || []).map((str, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs font-bold text-[#222222]"
                  >
                    <span className="w-5 h-5 rounded-full border border-[#ecc545] text-[#d4a71c] flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
              {renderPillButton("Xem thêm", "#dich-vu")}
            </div>

            {/* Right White Van / Limousine Cutout */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white max-w-[460px] w-full">
                <img
                  src={data.aboutVehicleImage}
                  alt={brandName}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: DỊCH VỤ CHO THUÊ XE (INTERACTIVE SLIDER 01 - 04) */}
      <section id="dich-vu" className="py-12 sm:py-16">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-center text-[#ecc545] tracking-wide mb-12">
            DỊCH VỤ CHO THUÊ XE
          </h2>

          {currentSlide && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info + Giant Watermark Number */}
              <div className="lg:col-span-5 relative pt-8">
                <div className="text-[110px] sm:text-[140px] font-black text-[#faebae] leading-none select-none pointer-events-none -mb-12">
                  {currentSlide.number}
                </div>
                <div className="relative z-10 space-y-4 pl-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#222222] leading-snug">
                    {currentSlide.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#555555]">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#ecc545] stroke-[2.5]" />
                      <span>{currentSlide.brandSpec}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#ecc545] stroke-[2.5]" />
                      <span>{currentSlide.seatSpec}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#ecc545] stroke-[2.5]" />
                      <span>{currentSlide.colorSpec}</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    {renderPillButton("Xem chi tiết", undefined, () => {
                      setSelectedService(currentSlide);
                      setBookingSubmitted(false);
                    })}
                  </div>
                </div>
              </div>

              {/* Right Rounded Vehicle Showcase + Numbered Pagination */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => {
                    setSelectedService(currentSlide);
                    setBookingSubmitted(false);
                  }}
                  className="rounded-3xl overflow-hidden shadow-xl border-4 border-white cursor-pointer group"
                >
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Slide Number Pagination (01 02 03 ━━━ 04) */}
                <div className="flex items-center justify-center gap-3 mt-4 text-xs">
                  {slides.map((sl, idx) => {
                    const isActive = idx === activeSlideIdx;
                    return (
                      <button
                        key={sl.id}
                        type="button"
                        onClick={() => setActiveSlideIdx(idx)}
                        className="inline-flex items-center gap-2 focus:outline-none"
                      >
                        <span
                          className={
                            isActive
                              ? "text-sm font-black text-[#e6b822]"
                              : "text-[#999999] hover:text-[#222222]"
                          }
                        >
                          {sl.number}
                        </span>
                        {isActive && (
                          <span className="w-12 h-0.5 bg-[#e6b822] inline-block" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. YELLOW ROUNDED PROMOTIONAL BANNER WITH PAPERCLIP */}
      <section id="uu-dai" className="py-12">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#f8df72] via-[#f4ce50] to-[#f1c438] p-6 sm:p-10 shadow-lg overflow-visible">
            {/* Decorative Paperclip Top-Left */}
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#333333] -rotate-12">
              <Paperclip className="w-5 h-5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Consultants Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white/80">
                  <img
                    src={data.promoBanner.consultantImage}
                    alt="Chuyên viên tư vấn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Offer Details */}
              <div className="lg:col-span-7 space-y-3">
                <p className="font-serif italic text-base sm:text-lg text-[#222222]">
                  {data.promoBanner.scriptEyebrow.replace(
                    /THUEXEVIP24H/gi,
                    brandName
                  )}
                </p>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white drop-shadow-xs leading-tight">
                  {data.promoBanner.heading}
                </h2>

                {/* Black Speech Ribbon */}
                <div className="inline-block bg-[#0b111e] text-white text-sm sm:text-base font-extrabold px-6 py-2.5 rounded-lg shadow-md">
                  {data.promoBanner.ribbonText}
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold text-white mb-1.5">
                    {data.promoBanner.benefitsTitle}
                  </p>
                  <ul className="space-y-1 text-xs text-white/95 font-medium">
                    {(data.promoBanner.benefits || []).map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  {renderPillButton(
                    data.promoBanner.ctaText,
                    "#lien-he",
                    undefined,
                    true
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: TIN TỨC (ASYMMETRIC 2-COLUMN LAYOUT) */}
      <section id="tin-tuc" className="py-14">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 2 Horizontal Blog Cards */}
            <div className="lg:col-span-7 space-y-4">
              {(data.news || []).map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-[#f2e4a6] rounded-2xl p-3.5 flex flex-col sm:flex-row gap-4 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-full sm:w-44 h-32 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[10px] text-[#d4a71c] font-semibold mb-1">
                      <span>{post.category || "Cẩm nang du lịch"}</span>
                      <span className="mx-1.5 text-[#999999]">•</span>
                      <span className="text-[#888888]">{post.date}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-[#222222] mb-1.5 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-[#666666] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Heading & Summary */}
            <div className="lg:col-span-5 lg:pl-4 pt-2 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#ecc545]">
                TIN TỨC
              </h2>
              <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                {data.newsSectionSummary.replace(/THUEXEVIP24H/gi, brandName)}
              </p>
              {renderPillButton("Xem tất cả", "#lien-he")}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: NHẬN XÉT CỦA KHÁCH HÀNG */}
      <section className="py-12">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-center text-[#ecc545] mb-10">
            NHẬN XÉT CỦA KHÁCH HÀNG
          </h2>

          {currentTestimonial && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Cream Quote Card */}
              <div className="lg:col-span-8 relative bg-[#fdfaf0] border border-[#f5eac4] rounded-2xl p-6 sm:p-8 shadow-xs">
                <Quote className="w-12 h-12 text-[#f6e39c] absolute -top-5 right-8 rotate-180" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <img
                    src={
                      currentTestimonial.avatar ||
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    }
                    alt={currentTestimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#f4ce50] shrink-0"
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-[#e6b822]">
                      {currentTestimonial.author}
                    </h3>
                    <p className="text-xs text-[#777777]">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  {currentTestimonial.content}
                </p>
              </div>

              {/* Right Avatar Cluster Switcher */}
              <div className="lg:col-span-4 flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === activeTestimonialIdx
                          ? "bg-[#e6b822]"
                          : "bg-[#e5dec0]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 max-w-[160px]">
                  {testimonials.map((tm, idx) => (
                    <button
                      key={tm.id}
                      type="button"
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                        idx === activeTestimonialIdx
                          ? "border-[#f4ce50] scale-110 shadow-md"
                          : "border-white opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={tm.avatar}
                        alt={tm.author}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 10. SECTION: LIÊN HỆ TƯ VẤN + CONSULTANT WITH FLOATING BADGES */}
      <section id="lien-he" className="py-14">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Cream Rounded Form */}
            <div className="lg:col-span-7 bg-[#fbf8ec] rounded-3xl p-6 sm:p-10 border border-[#f2e8c4]">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-center text-[#ecc545] mb-1.5">
                {data.contactSection.heading}
              </h2>
              <p className="text-xs text-center text-[#666666] mb-8">
                {data.contactSection.subtitle}
              </p>

              {contactSubmitted ? (
                <div className="bg-white border border-[#ecc545] rounded-xl p-5 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#e6b822] mx-auto" />
                  <h3 className="text-sm font-bold text-[#222222]">
                    Đã gửi yêu cầu tư vấn & báo giá thành công!
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Điều hành viên {brandName} sẽ liên hệ lại với quý khách qua
                    số điện thoại trong 5 phút.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên*"
                      className="bg-transparent border-b border-[#d8d0b5] py-2 text-xs focus:outline-none focus:border-[#e6b822]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại*"
                      className="bg-transparent border-b border-[#d8d0b5] py-2 text-xs focus:outline-none focus:border-[#e6b822]"
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      className="bg-transparent border-b border-[#d8d0b5] py-2 text-xs focus:outline-none focus:border-[#e6b822]"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Bạn cần tư vấn dịch vụ thuê xe hay lộ trình nào của chúng tôi?"
                    className="w-full bg-transparent border-b border-[#d8d0b5] py-2 text-xs focus:outline-none focus:border-[#e6b822]"
                  />
                  <div className="text-center pt-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 bg-white border border-[#e6b822] rounded-full pl-2 pr-5 py-1.5 text-xs font-bold text-[#222222] hover:bg-[#f4ce50] transition-colors shadow-xs"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#f4ce50] text-[#111722] flex items-center justify-center">
                        <Send className="w-3.5 h-3.5" />
                      </span>
                      <span>Gửi yêu cầu</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Yellow Circle Consultant with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#f4ce50] p-3 flex items-center justify-center shadow-lg">
                <img
                  src={data.contactSection.supportAgentImage}
                  alt="Tư vấn viên 24/7"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Top Right Tilted Badge */}
                <div className="absolute -top-3 right-0 bg-[#f4ce50] text-white text-xs font-extrabold px-4 py-1.5 rounded-lg shadow-md rotate-12 border border-white">
                  {data.contactSection.badgeTop}
                </div>
                {/* Mid Left White Tilted Badge */}
                <div className="absolute top-1/3 -left-6 bg-white text-[#e6b822] text-xs font-extrabold px-4 py-1.5 rounded-lg shadow-md -rotate-12 border border-[#f4ce50]">
                  {data.contactSection.badgeBottom}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. DARK NAVY MARQUEE TICKER BAR */}
      <div className="bg-[#0b111e] text-white py-3.5 overflow-hidden">
        <div className="flex items-center justify-around gap-8 text-[10px] font-extrabold uppercase tracking-widest whitespace-nowrap px-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <span key={idx} className="inline-flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f4ce50]" />
              <span>{brandName}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 12. FOOTER (#fcfaf2) */}
      <footer className="bg-[#fcfaf2] pt-14 pb-8 text-xs text-[#555555] border-t border-[#f0e8c9]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#ece2be]">
            {/* Left Brand & Newsletter */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#f4ce50] flex flex-col items-center justify-center text-[#0b111e]">
                <Car className="w-6 h-6" />
                <span className="text-[7px] font-black uppercase">
                  {brandName.slice(0, 10)}
                </span>
              </div>
              <p className="text-[11px] font-bold text-[#222222] max-w-[180px]">
                “Nhanh Chóng - Tận Tâm - Chuyên Nghiệp!”
              </p>

              <div className="w-full pt-2">
                <p className="text-[10px] font-extrabold uppercase text-[#222222] mb-2">
                  ĐĂNG KÝ NHẬN ƯU ĐÃI TỪ {brandName}
                </p>
                {footerSubscribed ? (
                  <p className="text-xs text-[#d4a71c] font-bold">
                    Cảm ơn quý khách đã đăng ký nhận ưu đãi!
                  </p>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (footerEmail.trim()) setFooterSubscribed(true);
                    }}
                    className="flex items-center bg-[#f4ce50] rounded-full px-4 py-2"
                  >
                    <input
                      type="email"
                      required
                      value={footerEmail}
                      onChange={(e) => setFooterEmail(e.target.value)}
                      placeholder="Nhập email của bạn"
                      className="flex-1 bg-transparent text-xs text-[#111722] placeholder-[#111722]/70 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Gửi"
                      className="text-[#111722]"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Col 2: VỀ CHÚNG TÔI */}
            <div className="md:col-span-2 space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-[#222222] mb-3">
                VỀ CHÚNG TÔI
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#d4a71c]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#d4a71c]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#d4a71c]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: LIÊN HỆ VỚI CHÚNG TÔI */}
            <div className="md:col-span-4 space-y-2.5">
              <h3 className="text-xs font-extrabold uppercase text-[#222222] mb-3">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h3>
              <p className="flex items-start gap-2 text-[11px] leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#e6b822] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <Phone className="w-3.5 h-3.5 text-[#e6b822] shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#d4a71c]"
                >
                  {primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-[#e6b822] shrink-0" />
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hover:text-[#d4a71c]"
                >
                  {primaryEmail}
                </a>
              </p>
              <p className="flex items-center gap-2 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-[#e6b822] shrink-0" />
                <span>{data.business.workingHours}</span>
              </p>
            </div>

            {/* Col 4: FANPAGE */}
            <div className="md:col-span-2 space-y-3">
              <h3 className="text-xs font-extrabold uppercase text-[#222222] mb-3">
                FANPAGE
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#1877f2] text-white text-[10px] font-bold flex items-center justify-center"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-6 h-6 rounded-full bg-[#ff0000] text-white text-[10px] font-bold flex items-center justify-center"
                >
                  ▶
                </a>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="w-6 h-6 rounded-full bg-[#0068ff] text-white text-[9px] font-bold flex items-center justify-center"
                >
                  Z
                </a>
              </div>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-[#777777]">
            Lập trình và thiết kế bởi{" "}
            <span className="font-bold text-[#222222]">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* SERVICE QUICK-VIEW & BOOKING MODAL */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl"
          >
            <div className="aspect-video relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs font-extrabold uppercase text-[#e6b822]">
                Dịch vụ #{selectedService.number} — {selectedService.pricePerDay}
              </span>
              <h3 className="text-lg font-extrabold text-[#111722]">
                {selectedService.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                {selectedService.description}
              </p>
              <div className="text-xs text-[#444444] space-y-1 border-y border-[#eeeeee] py-3">
                <p>• {selectedService.brandSpec}</p>
                <p>• {selectedService.seatSpec}</p>
                <p>• {selectedService.colorSpec}</p>
              </div>
              {bookingSubmitted ? (
                <div className="bg-[#fdfaf0] border border-[#f4ce50] p-3 rounded-lg text-xs text-[#222222] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e6b822] shrink-0" />
                  <span>
                    Đã ghi nhận yêu cầu đặt xe! Tổng đài {primaryPhone} sẽ gọi
                    xác nhận ngay.
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setBookingSubmitted(true)}
                    className="flex-1 bg-[#f4ce50] hover:bg-[#e6be3a] text-[#0b111e] text-xs font-extrabold uppercase py-3 rounded-full transition-colors"
                  >
                    Đặt thuê xe ngay
                  </button>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="bg-[#0b111e] text-white text-xs font-bold uppercase py-3 px-5 rounded-full"
                  >
                    Gọi {primaryPhone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
