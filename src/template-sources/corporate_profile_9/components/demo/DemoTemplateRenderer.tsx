"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile9DefaultData,
  type CorporateProfile9Data
} from "../../data/mockData";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Play,
  CheckCircle2,
  Star,
  Cpu,
  BarChart3,
  Sparkles,
  Megaphone,
  ShieldCheck,
  LineChart,
  Layers,
  Globe,
  ArrowUpRight
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: CorporateProfile9Data = adaptClonedTemplateData(
    corporateProfile9DefaultData,
    incomingData || customData
  );

  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const getFeatureIcon = (idx: number) => {
    const icons = [
      Cpu,
      BarChart3,
      Sparkles,
      Megaphone,
      ShieldCheck,
      LineChart,
      Layers,
      Globe
    ];
    const IconComp = icons[idx % icons.length];
    return <IconComp className="w-5 h-5 text-slate-600" />;
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* 1. FLOATING ROUNDED WHITE NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <header className="bg-white rounded-2xl shadow-sm border border-slate-100 px-5 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-pink-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
              ∞
            </div>
            <div className="leading-none">
              <div className="text-xs sm:text-sm font-black tracking-wider uppercase text-slate-900">
                {data.business.name}
              </div>
              <div className="text-[9px] font-semibold tracking-widest uppercase text-slate-400">
                CÔNG NGHỆ SỐ
              </div>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
            <a
              href="#"
              className="px-3.5 py-1.5 rounded-full bg-[#16181d] text-white"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="px-3 py-1.5 hover:text-blue-600 transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#dich-vu"
              className="px-3 py-1.5 hover:text-blue-600 transition-colors"
            >
              DỊCH VỤ
            </a>
            <a
              href="#giai-phap"
              className="px-3 py-1.5 hover:text-blue-600 transition-colors"
            >
              GIẢI PHÁP
            </a>
            <a
              href="#tin-tuc"
              className="px-3 py-1.5 hover:text-blue-600 transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="px-3 py-1.5 hover:text-blue-600 transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Search + CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="p-2 text-slate-500 hover:text-slate-900"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="px-4 py-1.5 rounded-full border border-indigo-400 text-slate-800 hover:bg-[#16181d] hover:text-white hover:border-[#16181d] text-xs font-bold transition-colors"
            >
              Liên hệ ngay
            </button>
          </div>
        </header>
      </div>

      {/* 2. HERO SECTION (2-COLUMN BENTO LAYOUT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
              {data.hero.subtitle}
            </p>
            <div className="pt-1">
              <a
                href={data.hero.ctaLink || "#dich-vu"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181d] hover:bg-blue-600 text-white text-xs font-bold transition-colors shadow-md"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                <span>{data.hero.ctaText || "Khám phá"}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3-Card Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Left Stacked Cards */}
            <div className="sm:col-span-5 flex flex-col gap-4">
              {/* Top Dark Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#16181d] text-white p-6 flex flex-col justify-between min-h-[240px] shadow-lg">
                <img
                  src={data.heroBento.darkCardImage}
                  alt="Công nghệ AI"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 space-y-2">
                  <h3 className="text-base font-bold leading-snug">
                    {data.heroBento.cardTitle}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div className="text-[11px] text-slate-300 font-semibold">
                    {data.heroBento.customersCount}
                  </div>
                </div>

                {/* Decorative Waveform */}
                <div className="relative z-10 pt-6 flex items-end gap-1 h-14">
                  {[35, 65, 45, 85, 55, 95, 60, 40, 75, 50, 80, 45].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-full bg-gradient-to-t from-blue-500 to-pink-400"
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Bottom White Card (17+ Languages) */}
              <div className="rounded-3xl bg-white border border-slate-100 p-5 shadow-sm flex flex-col justify-between min-h-[135px]">
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold">
                    VN
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">
                    EN
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold">
                    JP
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                    KR
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                    {data.heroBento.languagesCount}
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    {data.heroBento.languagesLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tall 3D Blue Card */}
            <div className="sm:col-span-7 relative rounded-3xl overflow-hidden min-h-[390px] shadow-lg bg-blue-900">
              <img
                src={data.heroBento.rightImage}
                alt="Giải pháp số hóa"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-slate-900 text-xs font-bold shadow-md flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-slate-900" />
                <span>{data.heroBento.audioLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION ("/ giới thiệu / - Giải pháp công nghệ sáng tạo") */}
      <section id="gioi-thieu" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3.6]">
                <img
                  src={data.aboutImage}
                  alt="Đội ngũ kỹ sư công nghệ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-[11px] font-semibold text-slate-400">
                / giới thiệu /
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {data.business.aboutTitle}
              </h2>

              <div className="space-y-4 pt-1">
                {data.aboutCheckpoints.map((cp) => (
                  <div key={cp.id} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {cp.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {cp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#giai-phap"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-indigo-300 text-slate-800 hover:bg-[#16181d] hover:text-white text-xs font-bold transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Khám phá ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DUAL CROSSED MARQUEE BANNERS */}
      <div className="py-10 bg-white overflow-hidden">
        <div className="relative py-6">
          <div className="bg-[#0066ff] text-white py-3.5 -rotate-2 scale-105 shadow-md">
            <div className="whitespace-nowrap text-lg sm:text-2xl font-bold tracking-wide text-center">
              Trí tuệ Nhân tạo định hình tương lai công nghệ số • Chuyển đổi số
              toàn diện cho doanh nghiệp •
            </div>
          </div>
          <div className="bg-[#16181d] text-white py-3.5 rotate-1 scale-105 -mt-3 shadow-lg">
            <div className="whitespace-nowrap text-lg sm:text-2xl font-bold tracking-wide text-center">
              / Trí tuệ Nhân tạo kiến tạo tương lai công nghệ • Tự động hóa quy
              trình thông minh /
            </div>
          </div>
        </div>
      </div>

      {/* 5. SERVICES SECTION ("/ dịch vụ / - Nâng cao trải nghiệm và thúc đẩy thành công") */}
      <section id="dich-vu" className="py-16 bg-[#f4f6f9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[11px] font-semibold text-slate-400 mb-1">
                / dịch vụ /
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 max-w-md leading-snug">
                Nâng cao trải nghiệm và thúc đẩy thành công
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Trước"
                className="w-8 h-8 rounded-full border border-indigo-200 bg-white flex items-center justify-center text-slate-700 hover:bg-[#16181d] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Tiếp"
                className="w-8 h-8 rounded-full border border-indigo-200 bg-white flex items-center justify-center text-slate-700 hover:bg-[#16181d] hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.services || []).map((srv) => (
              <div
                key={srv.id}
                className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3.4] mb-4">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {(srv.category || "Dịch vụ • Tối ưu hóa")
                      .split("•")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full border border-slate-200 text-[10px] text-slate-500"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug pr-8">
                    {srv.title}
                  </h3>
                </div>

                <div className="flex justify-end pt-3">
                  <a
                    href="#lien-he"
                    className="w-7 h-7 rounded-full bg-[#16181d] group-hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURES GRID ("/ tính năng / - Công nghệ đột phá và những lợi ích đáng kinh ngạc") */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="text-[11px] font-semibold text-slate-400 mb-1">
              / tính năng /
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 max-w-md leading-snug">
              Công nghệ đột phá và những lợi ích đáng kinh ngạc
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.featuresGrid.map((feat, idx) => (
              <div key={feat.id} className="text-center space-y-2.5">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 mx-auto flex items-center justify-center">
                  {getFeatureIcon(idx)}
                </div>
                <h3 className="text-xs font-extrabold text-slate-900">
                  {feat.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOLUTIONS SHOWCASE (DARK ROUNDED CONTAINER) */}
      <section id="giai-phap" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="bg-[#16181d] text-white rounded-[36px] p-6 sm:p-12 lg:p-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="text-[11px] text-slate-400 mb-1">
                / giải pháp /
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold leading-snug max-w-sm">
                Giải pháp sáng tạo từ công nghệ
              </h2>
            </div>

            <div className="space-y-6">
              {data.solutionBanners.map((banner) => (
                <div
                  key={banner.id}
                  className="group relative rounded-3xl overflow-hidden aspect-[16/7.5] bg-slate-900"
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 px-5 py-2.5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15">
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {banner.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold text-slate-400 mb-1">
              / hỏi đáp /
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Các câu hỏi và thắc mắc thường gặp
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {data.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-xs text-slate-400">
                      {isOpen ? "▴" : "▾"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS MASONRY WALL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="bg-[#f2f4f8] rounded-[36px] px-6 sm:px-12 py-16 relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Đánh giá từ{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500">
                khách hàng
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(data.testimonials || []).map((rv) => (
              <div
                key={rv.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 space-y-2"
              >
                <div className="text-xs font-bold text-slate-900">
                  {rv.author}
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: rv.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {rv.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PARTNER LOGOS STRIP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {(data.clients || []).map((cl) => (
            <div
              key={cl.id}
              className="text-xs font-black tracking-widest uppercase text-slate-300 hover:text-slate-600 transition-colors"
            >
              {cl.name}
            </div>
          ))}
        </div>
      </section>

      {/* 11. BLOG SECTION ("/ tin tức / - Khám phá kiến thức công nghệ") */}
      <section id="tin-tuc" className="py-14 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-[11px] font-semibold text-slate-400 mb-1">
              / tin tức /
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Khám phá kiến thức công nghệ
            </h2>
          </div>

          <a
            href="#lien-he"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full border border-indigo-200 text-xs font-bold text-slate-700 hover:bg-[#16181d] hover:text-white transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Xem tất cả</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              className="group bg-[#f3f5f8] rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2.5 left-3 px-3 py-1 rounded-full bg-white text-slate-600 text-[10px] font-semibold shadow-sm">
                    {post.date}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  <div className="text-[10px] text-slate-400">
                    {post.category}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 12. DARK ROUNDED FOOTER */}
      <footer id="lien-he" className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-6">
        <div className="bg-[#16181d] text-slate-300 rounded-[32px] p-8 sm:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Logo Top */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-black">
                ∞
              </div>
              <div>
                <div className="text-sm font-black tracking-wider uppercase text-white">
                  {data.business.name}
                </div>
                <div className="text-[9px] tracking-widest uppercase text-slate-400">
                  TECHNOLOGY
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
              {/* Col 1 */}
              <div className="space-y-4">
                <div>
                  <div className="text-white font-bold mb-1.5">
                    Liên hệ ngay
                  </div>
                  <div className="text-slate-400">{primaryPhone}</div>
                  <div className="text-slate-400">
                    {data.business.phone?.[1] || primaryPhone}
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Email</div>
                  <div className="text-slate-400">{primaryEmail}</div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="space-y-4">
                <div>
                  <div className="text-white font-bold mb-1.5">Địa chỉ</div>
                  <div className="text-slate-400 leading-relaxed">
                    {data.business.address}
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold mb-2">Mạng xã hội</div>
                  <div className="flex items-center gap-2">
                    {["f", "𝕏", "▶", "◎"].map((s) => (
                      <a
                        key={s}
                        href="#lien-he"
                        className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center text-[11px] font-bold hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 3 */}
              <div>
                <div className="text-white font-bold mb-2">Danh mục</div>
                <ul className="space-y-1.5 text-slate-400">
                  <li className="text-white">/ Trang chủ /</li>
                  <li>Giới thiệu</li>
                  <li>Dịch vụ</li>
                  <li>Giải pháp</li>
                  <li>Tin tức</li>
                  <li>Liên hệ</li>
                </ul>
              </div>

              {/* Col 4 */}
              <div>
                <div className="text-white font-bold mb-2">Liên kết</div>
                <ul className="space-y-1.5 text-slate-400">
                  <li>Hỗ trợ khách hàng</li>
                  <li>Chính sách bảo mật</li>
                  <li>Điều khoản sử dụng</li>
                  <li>Chính sách thông tin</li>
                  <li>Điều khoản và điều kiện</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-[11px] text-slate-400 pt-5">
          © Thiết kế và lập trình bởi{" "}
          <strong className="text-slate-700">{data.business.name}</strong>
        </div>
      </footer>

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold text-slate-900">
                Tư vấn Chuyển đổi số & Giải pháp AI
              </h3>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Liên hệ trực tiếp đội ngũ kiến trúc sư hệ thống của{" "}
              <strong>{data.business.name}</strong> qua hotline{" "}
              <strong className="text-blue-600">{primaryPhone}</strong> hoặc
              email <strong>{primaryEmail}</strong>.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="px-5 py-2 rounded-full bg-[#16181d] text-white text-xs font-bold"
              >
                Gọi ngay: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
