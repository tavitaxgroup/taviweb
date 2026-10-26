"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile11DefaultData,
  type CorporateProfile11Data
} from "../../data/mockData";
import {
  Home,
  Phone,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Handshake,
  SearchCheck,
  Star
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: CorporateProfile11Data = adaptClonedTemplateData(
    corporateProfile11DefaultData,
    incomingData || customData
  );

  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(1);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "(+84-24) 3762 2256";
  const primaryEmail =
    data.business.email?.[0] || "tcadmin@tc-consulting.com.vn";

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#d32f2f] selection:text-white">
      {/* 1. TOP CRIMSON RED BAR (`#d32f2f`) */}
      <div className="bg-[#d32f2f] text-white text-[11px]">
        <div className="max-w-6xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6 truncate">
            <span className="flex items-center gap-1.5 truncate">
              <Home className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">
                <strong>TRỤ SỞ:</strong> {data.business.address}
              </span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>
                <strong>HOTLINE:</strong> {primaryPhone}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-white/90">
            <a href="#lien-he" className="hover:text-amber-200 font-bold">
              f
            </a>
            <a href="#lien-he" className="hover:text-amber-200 font-bold">
              ◎
            </a>
            <a href="#lien-he" className="hover:text-amber-200 font-bold">
              𝕏
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d32f2f] to-amber-500 text-white flex items-center justify-center font-black text-base shadow-sm">
              ❈
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black tracking-tight text-[#d32f2f]">
                {data.business.name.split(" ")[0] || "T&C"}
              </span>
              <span className="text-sm font-bold text-amber-600">
                {data.business.name.split(" ").slice(1).join(" ") ||
                  "Consulting"}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase text-slate-600">
            <a href="#" className="text-[#d32f2f]">
              TRANG CHỦ
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#d32f2f] transition-colors"
            >
              GIỚI THIỆU ▾
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#d32f2f] transition-colors"
            >
              DỊCH VỤ ▾
            </a>
            <a
              href="#doi-tac"
              className="hover:text-[#d32f2f] transition-colors"
            >
              DỰ ÁN ▾
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#d32f2f] transition-colors"
            >
              TIN TỨC ▾
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#d32f2f] transition-colors"
            >
              QUẢN TRỊ TRI THỨC
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#d32f2f] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>
        </div>
      </header>

      {/* 3. HERO BANNER + OVERLAPPING 4-STAT BAR */}
      <section className="relative">
        <div className="relative h-[420px] sm:h-[520px] w-full overflow-hidden bg-slate-900">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Left / Right Arrows */}
          <button
            type="button"
            aria-label="Trước"
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 hover:bg-[#d32f2f] text-white items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Tiếp"
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 hover:bg-[#d32f2f] text-white items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Overlapping White 4-Column Stats Bar */}
        <div className="max-w-5xl mx-auto px-4 relative z-20 -mt-14">
          <div className="bg-white shadow-xl border border-slate-100 py-7 px-4 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {(data.stats || []).map((st) => (
              <div key={st.id} className="text-center py-2 px-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#d32f2f]">
                  {st.number}
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mt-1">
                  {st.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 3 CORE PILLARS SECTION (CRIMSON RED `#d32f2f`) */}
      <section
        id="dich-vu"
        className="bg-[#d32f2f] text-white pt-24 pb-20 -mt-14 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.corePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="text-center flex flex-col items-center space-y-4 px-2"
              >
                <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center text-white mb-1">
                  {pillar.iconType === "consult" ? (
                    <Lightbulb className="w-10 h-10" />
                  ) : pillar.iconType === "train" ? (
                    <Handshake className="w-10 h-10" />
                  ) : (
                    <SearchCheck className="w-10 h-10" />
                  )}
                </div>
                <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
                  {pillar.title}
                </h2>
                <p className="text-xs text-red-50 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS & FEATURED NEWS SECTION (2-COLUMN EDITORIAL) */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Main Featured News */}
            <div className="lg:col-span-7">
              <div className="border-l-4 border-[#d32f2f] pl-3 mb-6">
                <h2 className="text-lg font-normal uppercase tracking-wide text-slate-700">
                  TIN TỨC
                </h2>
              </div>

              <article className="space-y-4">
                <div className="overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src={data.featuredNews.image}
                    alt={data.featuredNews.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-extrabold text-slate-800 hover:text-[#d32f2f] transition-colors leading-snug">
                  {data.featuredNews.title}
                </h3>
                <div className="text-[11px] text-slate-400">
                  {data.featuredNews.date}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {data.featuredNews.excerpt}
                </p>
                <div>
                  <a
                    href="#lien-he"
                    className="text-[11px] font-extrabold uppercase text-amber-600 hover:text-[#d32f2f]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </article>
            </div>

            {/* Right Column: 6 Highlight News Items */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-700">
                  TIN NỔI BẬT
                </h2>
              </div>

              <div className="space-y-4">
                {data.highlightNewsList.map((item) => (
                  <a
                    key={item.id}
                    href="#lien-he"
                    className="group flex items-start gap-4 pb-3 border-b border-slate-100 last:border-none"
                  >
                    <div className="w-28 h-16 overflow-hidden shrink-0 bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-slate-700 group-hover:text-[#d32f2f] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {item.date}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTNERS GRID ("| ĐỐI TÁC") */}
      <section id="doi-tac" className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-l-4 border-[#d32f2f] pl-3 mb-8">
            <h2 className="text-lg font-normal uppercase tracking-wide text-slate-700">
              ĐỐI TÁC
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-slate-200">
            {(data.clients || []).map((partner, idx) => (
              <div
                key={partner.id}
                className="h-28 border-r border-b border-slate-200 flex items-center justify-center p-4 text-center hover:bg-slate-50 transition-colors"
              >
                <span
                  className={`text-sm sm:text-base font-black tracking-wider ${
                    idx % 3 === 0
                      ? "text-[#005aab]"
                      : idx % 3 === 1
                      ? "text-[#d32f2f]"
                      : "text-emerald-700"
                  }`}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS CAROUSEL */}
      <section className="py-16 bg-[#fafafa] border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Faded Quote */}
            <div className="hidden lg:block lg:col-span-3 opacity-35 text-xs space-y-3 pt-4">
              <div className="font-bold text-slate-700">
                {data.testimonials?.[0]?.author}
              </div>
              <p className="italic text-slate-500 leading-relaxed line-clamp-5">
                {data.testimonials?.[0]?.content}
              </p>
            </div>

            {/* Center Highlighted Quote */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="text-xs sm:text-sm font-extrabold text-slate-800">
                {data.testimonials?.[activeTestimonialIdx]?.author ||
                  data.testimonials?.[1]?.author}
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed">
                {data.testimonials?.[activeTestimonialIdx]?.content ||
                  data.testimonials?.[1]?.content}
              </p>
            </div>

            {/* Right Faded Quote */}
            <div className="hidden lg:block lg:col-span-3 opacity-35 text-xs space-y-3 pt-4">
              <div className="font-bold text-slate-700">
                {data.testimonials?.[2]?.author}
              </div>
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="italic text-slate-500 leading-relaxed line-clamp-5">
                {data.testimonials?.[2]?.content}
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {(data.testimonials || []).map((rv, idx) => (
              <button
                key={rv.id}
                type="button"
                aria-label={`Đánh giá ${idx + 1}`}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeTestimonialIdx === idx
                    ? "bg-[#d32f2f]"
                    : "border border-[#d32f2f] bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. 5-IMAGE WORKSHOP & CONFERENCE STRIP */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {data.workshopGallery.map((imgUrl, idx) => (
          <div key={idx} className="aspect-[16/10] overflow-hidden bg-slate-900">
            <img
              src={imgUrl}
              alt={`Hội thảo đào tạo ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </section>

      {/* 9. DARK CHARCOAL FOOTER (`#222222`) */}
      <footer id="lien-he" className="bg-[#222222] text-slate-300 pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Centered Organization Title */}
          <div className="text-center mb-10 space-y-1">
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              {data.business.aboutTitle}
            </div>
            <div className="text-sm font-extrabold uppercase tracking-wider text-[#d32f2f]">
              {data.business.name}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10 text-xs">
            {/* Left Address Block */}
            <div className="space-y-2 text-slate-400">
              <div className="text-white font-extrabold uppercase tracking-wider">
                ĐỊA CHỈ VĂN PHÒNG
              </div>
              <div>Cơ sở 1: {data.business.address}</div>
              <div>Cơ sở 2: {data.hanoiAddress}</div>
              <div>
                Điện thoại: {secondaryPhone} | Hotline: {primaryPhone} | Fax:{" "}
                {data.fax}
              </div>
              <div>Email: {primaryEmail}</div>
            </div>

            {/* Right Social Circles */}
            <div className="flex items-center gap-3">
              {["f", "◎", "𝕏", "in", "▶"].map((soc) => (
                <a
                  key={soc}
                  href="#lien-he"
                  className="w-9 h-9 rounded-full border border-white/40 hover:border-[#d32f2f] hover:bg-[#d32f2f] text-white flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 text-right text-[11px] text-slate-400">
            © Bản quyền thuộc về{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
