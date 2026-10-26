"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  leadGeneration2DefaultData,
  type LeadGeneration2Data
} from "../../data/mockData";
import {
  Phone,
  Mail,
  Grid,
  ArrowRight,
  ArrowLeft,
  Building2,
  Home,
  LayoutGrid,
  Plus,
  Minus,
  MapPin,
  Star,
  Sparkles,
  Award
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: LeadGeneration2Data = adaptClonedTemplateData(
    leadGeneration2DefaultData,
    incomingData || customData
  );

  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [selectedService, setSelectedService] = useState<string>(
    data.serviceOptions?.[0] || "Tư vấn và mua"
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const renderMetallicDisc = (className = "") => (
    <div
      className={`w-14 h-14 rounded-full bg-gradient-to-tr from-zinc-400 via-zinc-100 to-zinc-500 shadow-xl border border-white/60 flex items-center justify-center text-zinc-900 ${className}`}
    >
      <Sparkles className="w-6 h-6" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#e59235] selection:text-white">
      {/* 1. TOP HEADER BAR */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-2">
        <div className="bg-[#161616] text-white rounded-t-[24px] px-5 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-white/10 border border-white/20 flex items-center justify-center text-[#e59235]">
              <Home className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-black tracking-widest uppercase">
              {data.business.name}
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
            <a href="#" className="text-white hover:text-[#e59235]">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#e59235] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#du-an" className="hover:text-[#e59235] transition-colors">
              ĐẦU TƯ
            </a>
            <a href="#tin-tuc" className="hover:text-[#e59235] transition-colors">
              TIN TỨC
            </a>
            <a href="#lien-he" className="hover:text-[#e59235] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Contact Pills */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${primaryPhone}`}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/90 border border-white/10 text-[11px]"
            >
              <span className="w-5 h-5 rounded-full bg-[#e59235] text-black flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </span>
              <span className="text-zinc-300">
                Gọi ngay! <strong className="text-white">{primaryPhone}</strong>
              </span>
            </a>

            <a
              href={`mailto:${primaryEmail}`}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/90 border border-white/10 text-[11px]"
            >
              <span className="w-5 h-5 rounded-full bg-[#e59235] text-black flex items-center justify-center">
                <Mail className="w-3 h-3" />
              </span>
              <span className="text-zinc-300">
                Email: <strong className="text-white">{primaryEmail}</strong>
              </span>
            </a>

            <button
              type="button"
              aria-label="Menu"
              className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
            >
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. DARK ROUNDED HERO CONTAINER */}
        <div className="relative rounded-b-[32px] overflow-hidden bg-[#111111] text-white min-h-[540px] flex flex-col justify-between">
          {/* Background Architectural Image */}
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />

          {/* Architectural Grid Lines + Hero Columns */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-12 lg:p-16 flex-1 items-center">
            {/* Left Framed Quote Column */}
            <div className="lg:col-span-5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-[2px] bg-black/25 flex flex-col justify-between min-h-[320px]">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>/</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>

              <div className="my-6 space-y-4">
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {data.founderQuote.quote}
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <img
                    src={data.founderQuote.avatar}
                    alt={data.founderQuote.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#e59235]"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">
                      {data.founderQuote.name}
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      {data.founderQuote.role}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={data.hero.secondaryCtaLink || "#du-an"}
                className="inline-flex items-center gap-2.5 text-xs font-bold text-white group"
              >
                <span className="w-8 h-8 rounded-full bg-[#e59235] text-black flex items-center justify-center group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span>{data.hero.secondaryCtaText || "Xem dự án"}</span>
              </a>
            </div>

            {/* Right Main Title Column */}
            <div className="lg:col-span-7 lg:pl-8 space-y-6">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235]">
                <span className="w-8 h-[1px] bg-[#e59235]" />
                <span>{data.hero.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold leading-[1.15] tracking-tight max-w-xl">
                {data.hero.title}
              </h1>

              <a
                href={data.hero.ctaLink || "#gioi-thieu"}
                className="inline-flex items-center gap-3 text-xs font-bold text-white group pt-2"
              >
                <span className="w-9 h-9 rounded-full border border-[#e59235] text-[#e59235] flex items-center justify-center group-hover:bg-[#e59235] group-hover:text-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span>{data.hero.ctaText || "Tìm hiểu thêm"}</span>
              </a>
            </div>
          </div>

          {/* Bottom-Right White Cutout Card ("Tầm Nhìn -> Sứ Mệnh") */}
          <div className="relative z-10 flex justify-end">
            <div className="relative bg-white text-zinc-900 rounded-tl-[28px] px-8 py-6 max-w-sm w-full shadow-xl">
              <div className="absolute -top-7 right-6">
                {renderMetallicDisc()}
              </div>
              <div className="text-sm font-extrabold text-[#e59235] mb-1">
                {data.visionMission.title}
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {data.visionMission.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 3. ABOUT SECTION ("PHÙ HỢP VỚI NHU CẦU VÀ MONG MUỐN") */}
      <section id="gioi-thieu" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Framed Skyscraper + 24 Years Badge */}
          <div className="md:col-span-5 relative">
            <div className="border-2 border-[#e59235] p-1.5 bg-white">
              <img
                src={data.aboutHighlight.image}
                alt="Kiến trúc hiện đại"
                className="w-full aspect-[4/4.2] object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-[#161616]/95 text-white px-5 py-4 text-center border border-[#e59235]/50">
              <div className="text-4xl font-black text-[#e59235] leading-none">
                {data.aboutHighlight.yearsNumber}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider mt-1">
                {data.aboutHighlight.yearsLabel}
              </div>
            </div>
          </div>

          {/* Right About Text */}
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235]">
              <span className="w-8 h-[1px] bg-[#e59235]" />
              <span>GIỚI THIỆU</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 leading-snug">
              {data.business.aboutTitle}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#lien-he"
                className="px-6 py-2.5 rounded-full bg-[#e59235] hover:bg-[#cf7f24] text-white text-xs font-bold transition-colors shadow"
              >
                Giới thiệu
              </a>

              <a
                href={`tel:${primaryPhone}`}
                className="flex items-center gap-3"
              >
                <span className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[10px] text-[#e59235]">
                    Bạn có thắc mắc? Gọi ngay
                  </div>
                  <div className="text-xs font-extrabold text-zinc-900">
                    {primaryPhone}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION (DARK ROUNDED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="relative bg-[#111111] text-white rounded-[32px] px-6 sm:px-12 py-16">
          {/* Top-Left Metallic Badge */}
          <div className="hidden sm:block absolute -top-6 left-16">
            {renderMetallicDisc("w-16 h-16")}
          </div>

          <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0 lg:ml-64 mb-12 space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235]">
              <span className="w-8 h-[1px] bg-[#e59235]" />
              <span>DỊCH VỤ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              Dịch vụ chất lượng cao được cung cấp
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Kinh nghiệm thực chiến và khát vọng nâng tầm chuẩn mực sống giúp
              công ty trở thành chuyên gia hàng đầu trong lĩnh vực tư vấn và
              thiết kế bất động sản.
            </p>
          </div>

          {/* 3 Service Cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.services || []).map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-[#181818] border border-white/10 hover:border-[#e59235]/60 rounded-2xl p-6 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#e59235]/15 text-[#e59235] flex items-center justify-center">
                  {idx === 0 ? (
                    <Building2 className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Home className="w-5 h-5" />
                  ) : (
                    <LayoutGrid className="w-5 h-5" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-white">{srv.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Slider Indicator */}
          <div className="max-w-xs mx-auto mt-10 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>/</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="w-full h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ & 3-STEP PROCESS SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235]">
              <span className="w-8 h-[1px] bg-[#e59235]" />
              <span>CÂU HỎI VÀ TRẢ LỜI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Các vấn đề thắc mắc
            </h2>
            <p className="text-xs text-zinc-500 leading-relaxed pb-2">
              Hoạt động của chúng tôi tập trung chủ yếu vào phân khúc bất động
              sản nhà ở cao cấp và sở hữu nhiều năm kinh nghiệm tại các dự án
              thương mại.
            </p>

            <div className="border border-zinc-200 divide-y divide-zinc-200 bg-white">
              {data.faqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="p-4 sm:p-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                      className="w-full flex items-center justify-between gap-4 text-left"
                    >
                      <span className="text-xs sm:text-sm font-bold text-zinc-900">
                        {faq.question}
                      </span>
                      <span className="text-zinc-500 shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 01, 02, 03 Vertical Timeline */}
          <div className="lg:col-span-5 lg:pt-8">
            <div className="relative pl-6 space-y-10 before:content-[''] before:absolute before:left-5 before:top-4 before:bottom-4 before:w-[1px] before:bg-zinc-200">
              {data.processSteps.map((st, idx) => {
                const isLast = idx === data.processSteps.length - 1;
                return (
                  <div key={st.id} className="relative flex items-start gap-5">
                    <div
                      className={`relative z-10 -ml-6 w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 shadow ${
                        isLast
                          ? "bg-[#e59235] text-white"
                          : "bg-zinc-900 text-white"
                      }`}
                    >
                      {st.step}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-zinc-900 mb-1">
                        {st.title}
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS SECTION ("MỘT SỐ DỰ ÁN PHỔ BIẾN") */}
      <section id="du-an" className="pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235] mb-1">
              <span className="w-8 h-[1px] bg-[#e59235]" />
              <span>DỰ ÁN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Một số dự án phổ biến
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <div className="text-2xl sm:text-3xl font-black text-zinc-900">
              {data.completedProjectsCount}
            </div>
            <div className="text-[11px] text-zinc-500">
              Dự án đã hoàn thành{" "}
              <a
                href="#lien-he"
                className="text-[#e59235] font-bold hover:underline"
              >
                Khám phá các dự án ›
              </a>
            </div>
          </div>
        </div>

        {/* 2x3 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {(data.projects || []).map((prj) => (
            <div key={prj.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 mb-3">
                <img
                  src={prj.image}
                  alt={prj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-[#e59235] text-white text-[10px] font-bold shadow">
                  {prj.category}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-zinc-900 group-hover:text-[#e59235] transition-colors">
                {prj.title}
              </h3>
              <div className="flex items-center gap-1 text-[11px] text-zinc-500 mt-0.5">
                <MapPin className="w-3 h-3 text-zinc-800 shrink-0" />
                <span className="truncate">
                  {prj.location || data.business.address}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DARK MARQUEE, STATS & TESTIMONIALS SECTION */}
      <section className="bg-[#111111] text-white py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Giant Marquee + Central Gold Award Badge */}
          <div className="relative flex items-center justify-center py-8 mb-12">
            <div className="flex items-center gap-8 select-none pointer-events-none overflow-hidden">
              <span className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white">
                {data.business.name.split(" ")[0] || "Mona"}
              </span>
              <span
                className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.45)" }}
              >
                {data.business.name.split(" ")[0] || "Mona"}
              </span>
            </div>

            {/* Center Gold Seal */}
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#c88a2e] via-[#f4d068] to-[#b6761b] text-black p-3 shadow-2xl flex flex-col items-center justify-center text-center border-4 border-zinc-900">
              <Award className="w-8 h-8 text-zinc-900 mb-1" />
              <div className="text-[9px] font-black uppercase tracking-widest">
                Best Architecture
              </div>
              <div className="text-xs font-black">2024</div>
            </div>
          </div>

          {/* 4 Stats Row */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-white/10">
            {(data.stats || []).map((st) => (
              <div key={st.id} className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-zinc-500">
                  {st.number}
                </span>
                <span className="text-xs font-bold text-zinc-300 leading-tight">
                  {st.title}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonials Block */}
          <div className="max-w-3xl mx-auto pt-14">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235] mb-2">
              <span className="w-8 h-[1px] bg-[#e59235]" />
              <span>ĐÁNH GIÁ KHÁCH QUAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
              Đánh giá tích cực từ khách hàng
            </h2>

            {(data.testimonials || []).slice(0, 1).map((rv) => (
              <div
                key={rv.id}
                className="bg-[#181818] border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="relative shrink-0">
                  <span className="absolute -top-3 -left-2 text-2xl font-black text-[#e59235]">
                    ❞
                  </span>
                  <img
                    src={rv.avatar}
                    alt={rv.author}
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#e59235]"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {rv.content}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div>
                      <span className="text-sm font-extrabold text-white">
                        {rv.author}
                      </span>{" "}
                      <span className="text-xs text-[#e59235]">
                        / {rv.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#e59235]">
                      {Array.from({ length: rv.rating || 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#e59235] text-[#e59235]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROPERTY SEARCH CTA BANNER (TILTED INTERIOR CARDS) */}
      <section className="py-20 bg-zinc-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-52 sm:w-60 aspect-[4/4.5] rounded-2xl overflow-hidden shadow-xl -rotate-6 border-4 border-white bg-white">
                <img
                  src={data.ctaGallery.leftImage}
                  alt="Không gian nội thất"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-4 text-center space-y-4">
              <div className="flex justify-center">
                {renderMetallicDisc("w-12 h-12")}
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 leading-snug">
                Tìm kiếm <span className="text-[#e59235]">Bất động sản</span>{" "}
                phù hợp với nhu cầu
              </h2>
              <div>
                <a
                  href="#lien-he"
                  className="inline-block px-6 py-2.5 rounded-full bg-[#e59235] hover:bg-[#cf7f24] text-white text-xs font-bold shadow transition-colors"
                >
                  Liên hệ ngay
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-52 sm:w-60 aspect-[4/4.5] rounded-2xl overflow-hidden shadow-xl rotate-6 border-4 border-white bg-white">
                <img
                  src={data.ctaGallery.rightImage}
                  alt="Thiết kế căn hộ mẫu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TEAM / EXPERTS LIST ("GIỚI THIỆU ĐỘI NGŨ") */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#e59235] mb-1">
            <span className="w-8 h-[1px] bg-[#e59235]" />
            <span>GIÀU KINH NGHIỆM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
            Giới thiệu đội ngũ
          </h2>
        </div>

        <div className="border-t border-zinc-200 divide-y divide-zinc-200">
          {data.teamMembersDetailed.map((tm) => (
            <div
              key={tm.id}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="text-xs font-bold text-zinc-400">
                  {tm.index}
                </span>
                <div>
                  <div className="text-sm font-extrabold text-zinc-900">
                    {tm.name}
                  </div>
                  <div className="text-[11px] text-zinc-400">{tm.role}</div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-2">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {tm.bio}
                </p>
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#e59235] text-white text-[10px] font-bold">
                  {tm.badge}
                </span>
              </div>

              <div className="md:col-span-1 flex md:justify-end">
                <a
                  href="#lien-he"
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#e59235] text-white flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FEATURED BLOG SECTION (DARK ROUNDED CONTAINER) */}
      <section id="tin-tuc" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="bg-[#111111] text-white rounded-[32px] p-8 sm:p-14">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Vertical Title + Circular CTA */}
            <div className="md:col-span-3 flex md:flex-col items-center justify-between gap-6">
              <div className="space-y-1 text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#e59235]">
                  ── BLOG
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  Các tin tức nổi bật
                </h2>
              </div>

              <a
                href="#lien-he"
                className="w-20 h-20 rounded-full border border-[#e59235]/60 hover:bg-[#e59235] hover:text-black flex items-center justify-center text-xs font-bold text-center transition-colors"
              >
                Xem thêm
              </a>
            </div>

            {/* Right 2 Dark Blog Cards */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(data.news || []).slice(0, 2).map((post) => (
                <article
                  key={post.id}
                  className="bg-black border border-white/10 hover:border-[#e59235]/50 rounded-2xl p-6 flex flex-col justify-between min-h-[240px] transition-colors"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                      {post.title}
                    </h3>
                  </div>

                  <div className="pt-8 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white leading-none">
                      {post.date}
                    </span>
                    <span className="text-xs text-zinc-400">
                      / {post.excerpt}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. SOCIAL CONTACT PILLS ROW */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-lg font-extrabold text-zinc-900 mb-4">Liên hệ</h3>
        <div className="flex flex-wrap items-center gap-3">
          {["LinkedIn", "Email", "Số điện thoại", "Instagram"].map((label) => (
            <a
              key={label}
              href="#lien-he"
              className="px-6 py-2 rounded-full bg-zinc-900 hover:bg-[#e59235] text-white text-xs font-bold transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* 12. LEAD CAPTURE CONTACT SECTION (DARK ROUNDED CONTAINER) */}
      <section id="lien-he" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="relative bg-[#111111] text-white rounded-[32px] p-8 sm:p-14">
          <div className="hidden sm:block absolute -top-6 right-16">
            {renderMetallicDisc("w-16 h-16")}
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Form */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hãy khám phá trang web của chúng tôi ngay bây giờ và bắt đầu
                hành trình tìm kiếm bất động sản hoàn hảo của bạn. Chúng tôi tin
                rằng trải nghiệm tuyệt vời và giá trị thực sự sẽ đợi bạn tại
                đây.
              </p>

              {/* Service Selector Pills */}
              <div>
                <div className="text-xs font-bold text-white mb-2.5">
                  Dịch vụ
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.serviceOptions.map((opt) => {
                    const active = selectedService === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedService(opt)}
                        className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold border transition-colors ${
                          active
                            ? "border-[#e59235] bg-[#e59235]/20 text-[#e59235]"
                            : "border-white/15 bg-zinc-900 text-zinc-300 hover:border-white/40"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Fields */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-3"
              >
                <div className="text-xs font-bold text-white">Nội dung:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Họ tên"
                    className="w-full px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:border-[#e59235]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    className="w-full px-4 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:border-[#e59235]"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Nội dung..."
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-white/10 text-xs text-white focus:outline-none focus:border-[#e59235]"
                />
                <div className="flex items-center gap-4 pt-1">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full border border-white/30 hover:border-[#e59235] hover:bg-[#e59235] hover:text-black text-xs font-bold transition-colors"
                  >
                    Gửi ngay
                  </button>
                  {submitted && (
                    <span className="text-xs text-[#e59235] font-semibold">
                      ✓ Đã gửi yêu cầu tư vấn ({selectedService})!
                    </span>
                  )}
                </div>
              </form>
            </div>

            {/* Right Giant Typography */}
            <div className="lg:col-span-5 lg:pl-6 space-y-2 text-left">
              <div className="text-sm italic text-zinc-300 font-serif">
                Gửi mail ngay
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Liên hệ tìm hiểu{" "}
                <span className="text-[#e59235]">dịch vụ</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CLEAN WHITE FOOTER */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 text-xs text-zinc-500">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100">
          <div className="flex items-center gap-2 text-zinc-900 font-black uppercase tracking-wider">
            <Home className="w-4 h-4 text-[#e59235]" />
            <span>{data.business.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[11px] font-bold uppercase text-zinc-600">
            <a href="#" className="hover:text-black">
              TRANG CHỦ
            </a>
            <a href="#gioi-thieu" className="hover:text-black">
              GIỚI THIỆU
            </a>
            <a href="#du-an" className="hover:text-black">
              ĐẦU TƯ
            </a>
            <a href="#tin-tuc" className="hover:text-black">
              TIN TỨC
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#gioi-thieu"
              className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase"
            >
              DỊCH VỤ
            </a>
            <a
              href="#lien-he"
              className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase"
            >
              LIÊN HỆ
            </a>
          </div>
        </div>

        <div className="pt-5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div className="max-w-xs">{data.business.address}</div>
          <div className="flex items-center gap-5">
            <span>Chính sách bảo mật</span>
            <span>Điều khoản dịch vụ</span>
          </div>
          <div>
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-zinc-800">{data.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
