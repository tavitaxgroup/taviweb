"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Search,
  ChevronDown,
  Scale,
  CheckCircle2,
  Award,
  Clock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu16DefaultData,
  type LuatSu16Data,
  type NamBinhServiceCard,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const content: LuatSu16Data = adaptClonedTemplateData(
    luatSu16DefaultData,
    data
  );

  const [selectedService, setSelectedService] =
    useState<NamBinhServiceCard | null>(null);
  const [formState, setFormState] = useState({
    clientName: "",
    phone: "",
    email: "",
    topic: content.consultationSection.topics[0] || "",
    summary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.clientName.trim() || !formState.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f6f0] text-[#1d150e] font-sans selection:bg-[#b38b3f] selection:text-white">
      {/* 1. TOP WARM GOLD STRIP (EXACT MATCH TO LUAT019 TOP BAR) */}
      <div className="bg-[#e8dcc4] text-[#3a2c1d] text-xs border-b border-[#d4c29e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="truncate font-medium">
              {content.business.address}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-bold text-[#2b1e10]">
              {content.header.hotlineLabel}
            </span>
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="text-[#3a2c1d] hover:text-[#9c752b] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER WITH 3D ARCHITECTURAL "NB" GOLD LOGO */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
          {/* Left NB Monogram Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group">
            <div className="w-14 h-14 rounded-lg border-2 border-[#b38b3f] bg-gradient-to-br from-[#fffdf9] to-[#f3ead8] flex flex-col items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-2xl font-black tracking-tighter text-[#9c752b] leading-none">
                {content.header.logoMonogram}
              </span>
              <span className="text-[7px] font-extrabold uppercase tracking-wider text-[#9c752b] mt-0.5">
                LAW FIRM
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold tracking-wide text-[#9c752b] leading-none">
                {content.header.brandName}
              </div>
              <div className="text-[10px] italic text-gray-500 mt-1">
                {content.header.brandMotto}
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {content.header.navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`inline-flex items-center gap-1 py-2 text-xs font-extrabold uppercase tracking-wider transition-colors ${
                  idx === 0
                    ? "text-[#9c752b] border-b-2 border-[#9c752b]"
                    : "text-gray-800 hover:text-[#9c752b]"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </nav>

          {/* Right Call Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#9c752b] hover:bg-[#825f1f] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded shadow transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{content.business.phone[0]}</span>
          </a>
        </div>
      </header>

      {/* 3. HERO BANNER: DARK LIBRARY & GOLDEN SCALES OF JUSTICE (EXACT MATCH TO LUAT019) */}
      <section
        id="hero"
        className="relative min-h-[460px] lg:min-h-[520px] flex items-center overflow-hidden bg-[#1d150e] text-white"
      >
        <img
          src={content.hero.backgroundImage}
          alt={content.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1109]/95 via-[#1a1109]/80 to-[#1a1109]/45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#b38b3f]/25 border border-[#b38b3f]/60 text-[#f3d48b] text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded">
              <Scale className="w-3.5 h-3.5" />
              ĐOÀN LUẬT SƯ THÀNH PHỐ HÀ NỘI
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-wide text-white leading-tight">
              {content.hero.title}
            </h1>
            <div className="text-xl sm:text-2xl font-light tracking-[0.18em] text-[#e8c87d] uppercase">
              {content.hero.motto}
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="bg-[#b38b3f] hover:bg-[#9c752b] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-lg transition-colors"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href="#services"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>

        {/* Floating Right-Side Quick Contact Pills (visible in LUAT019 screenshot) */}
        <div className="hidden sm:flex flex-col gap-2.5 absolute right-4 bottom-8 z-20">
          <a
            href="#contact"
            title="Chat trực tuyến"
            className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform font-black text-xs"
          >
            f
          </a>
          <a
            href="#contact"
            title="Zalo Luật sư"
            className="w-10 h-10 rounded-full bg-[#0068ff] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            title="Gọi Tổng đài 1900 6588"
            className="w-10 h-10 rounded-full bg-[#d97706] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 4. 3x2 PRACTICE AREA IMAGE CARD GRID WITH DARK BOTTOM LABEL BARS (EXACT MATCH TO FOREGROUND OF LUAT019) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9c752b] block mb-2">
            {content.practiceGridSection.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1d150e] mb-3">
            {content.practiceGridSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {content.practiceGridSection.subtitle}
          </p>
        </div>

        {/* 3x2 Grid of 6 Cards: Doanh nghiệp, Đầu tư - M&A, Đất đai, Hôn nhân và gia đình, Lao động, Tố tụng Dân sự - Hình sự */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.practiceGridSection.services.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-[#e5d9c3] cursor-pointer transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Dark Translucent Bottom Title Bar matching LUAT019 */}
                <div className="absolute inset-x-0 bottom-0 bg-[#1a130c]/85 backdrop-blur-xs py-3 px-4 text-center border-t border-[#b38b3f]/40">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#f3d48b] transition-colors">
                    {srv.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-[#9c752b] mb-1.5">
                    {srv.subtitle}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>
                <ul className="space-y-1.5 pt-3 border-t border-gray-100">
                  {srv.keyTasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2 text-xs text-gray-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9c752b] shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Quick Modal / Detail Banner */}
        {selectedService && (
          <div className="mt-8 bg-[#1d150e] text-white rounded-xl p-6 border-2 border-[#b38b3f] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e8c87d]">
                TƯ VẤN CHUYÊN SÂU LĨNH VỰC: {selectedService.title.toUpperCase()}
              </span>
              <h4 className="text-lg font-bold mt-1">
                {selectedService.subtitle} — Trực tiếp Luật sư Hà Công Nam phụ trách
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                Liên hệ ngay tổng đài {content.business.phone[0]} để được thẩm định hồ sơ miễn phí bước đầu.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="bg-[#b38b3f] hover:bg-[#9c752b] text-white text-xs font-extrabold uppercase px-5 py-2.5 rounded"
              >
                Gửi Hồ Sơ Ngay
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-xs text-gray-400 hover:text-white underline"
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 5. MANAGING PARTNER SPOTLIGHT: LUẬT SƯ HÀ CÔNG NAM (EXACT GOLD-FRAMED PLAQUE MATCHING LUAT019) */}
      <section
        id="founder"
        className="bg-[#efe6d5] py-20 border-y border-[#dac8a6]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#f9f5ec] border-2 border-[#b38b3f] rounded-2xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left 5 Cols: Portrait + Framed Gold Nameplate ("LUẬT SƯ HÀ CÔNG NAM") */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={content.managingPartnerSection.portraitImage}
                    alt={content.managingPartnerSection.lawyerName}
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                </div>
                {/* Gold Framed Plaque directly below portrait */}
                <div className="w-full max-w-sm -mt-6 relative z-10 bg-[#f6ebd4] border-2 border-[#9c752b] rounded-lg py-3.5 px-4 text-center shadow-md">
                  <div className="text-base sm:text-lg font-black tracking-wider text-[#2b1e10] uppercase">
                    {content.managingPartnerSection.lawyerName}
                  </div>
                  <div className="text-xs font-bold text-[#9c752b] mt-0.5">
                    {content.managingPartnerSection.position}
                  </div>
                  <div className="text-[11px] text-gray-600 mt-0.5">
                    {content.managingPartnerSection.barMembership}
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Biography & Quote */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-1.5 bg-[#9c752b] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                  <Award className="w-3.5 h-3.5" />
                  {content.managingPartnerSection.badge}
                </span>

                <blockquote className="text-base sm:text-lg font-serif italic font-bold text-[#3a2a18] border-l-4 border-[#9c752b] pl-4 py-1 leading-relaxed">
                  {content.managingPartnerSection.quote}
                </blockquote>

                {content.managingPartnerSection.bioParagraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

                <div className="pt-2 space-y-2">
                  {content.managingPartnerSection.achievements.map((ach) => (
                    <div
                      key={ach}
                      className="flex items-center gap-2.5 text-xs font-bold text-[#2b1e10]"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#9c752b] shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* 4 Firm Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {content.hero.stats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-white border border-[#dfd1b5] rounded-lg p-3 text-center"
                    >
                      <div className="text-lg font-black text-[#9c752b]">
                        {st.value}
                      </div>
                      <div className="text-[10px] text-gray-600 font-medium mt-0.5">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ASSOCIATE LAWYERS SECTION */}
      <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9c752b] block mb-2">
            {content.teamSection.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1d150e] mb-2">
            {content.teamSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {content.teamSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {content.teamSection.lawyers.map((lw) => (
            <div
              key={lw.id}
              className="bg-white rounded-xl border border-[#e5d9c3] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={lw.image}
                alt={lw.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-5">
                <span className="inline-block bg-[#f3ead8] text-[#9c752b] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded mb-2">
                  {lw.barAssociation} • {lw.experienceYears}
                </span>
                <h3 className="text-lg font-extrabold text-[#1d150e]">
                  {lw.name}
                </h3>
                <div className="text-xs font-bold text-[#9c752b] mb-2">
                  {lw.title}
                </div>
                <div className="text-xs text-gray-600 pt-2 border-t border-gray-100 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#9c752b] shrink-0" />
                  <span>Chuyên môn: {lw.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TYPICAL CASES & LEGAL ACTIVITIES */}
      <section
        id="activities"
        className="bg-white py-16 border-t border-[#e5d9c3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9c752b] block mb-1.5">
                {content.activitiesSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1d150e]">
                {content.activitiesSection.title}
              </h2>
            </div>
            <a
              href="#contact"
              className="text-xs font-extrabold uppercase text-[#9c752b] hover:underline"
            >
              Gửi hồ sơ nhờ Luật sư tư vấn →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {content.activitiesSection.cases.map((cs) => (
              <article
                key={cs.id}
                className="bg-[#f9f6f0] rounded-xl border border-[#e5d9c3] overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1d150e] text-[#f3d48b] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                      {cs.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-emerald-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded">
                      {cs.outcomeBadge}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] text-gray-400 block mb-1">
                      Ngày cập nhật: {cs.date}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#1d150e] group-hover:text-[#9c752b] leading-snug mb-2">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION FORM & HANOI PRESTIGE FOOTER */}
      <footer
        id="contact"
        className="bg-[#1d150e] text-gray-300 pt-16 pb-10 border-t-4 border-[#b38b3f]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Left 5 Cols Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#b38b3f] text-[#1d150e] font-black text-xl flex items-center justify-center">
                  {content.header.logoMonogram}
                </div>
                <div>
                  <div className="text-lg font-black text-white">
                    {content.business.name}
                  </div>
                  <div className="text-xs text-[#e8c87d]">
                    {content.business.tagline}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white pt-2">
                {content.consultationSection.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {content.consultationSection.subtitle}
              </p>

              <div className="space-y-2.5 text-xs text-gray-300 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e8c87d] shrink-0 mt-0.5" />
                  <span>{content.business.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e8c87d] shrink-0" />
                  <span>Tổng đài: {content.business.phone.join(" - ")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#e8c87d] shrink-0" />
                  <span>{content.business.email.join(" | ")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#e8c87d] shrink-0" />
                  <span>{content.business.hours}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Cols Form */}
            <div className="lg:col-span-7 bg-[#281e15] border border-[#b38b3f]/40 rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#e8c87d] mx-auto" />
                  <h4 className="text-lg font-bold text-white">
                    Đã Tiếp Nhận Yêu Cầu Tư Vấn Pháp Lý!
                  </h4>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    Văn phòng Luật sư Hà Công Nam (Công ty Luật Nam Bình) sẽ
                    liên hệ với Quý khách <strong>{formState.clientName}</strong>{" "}
                    qua số <strong>{formState.phone}</strong> trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleConsultSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#e8c87d] uppercase mb-1.5">
                      Họ và tên Quý khách *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên..."
                      value={formState.clientName}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          clientName: e.target.value,
                        }))
                      }
                      className="w-full bg-[#1d150e] border border-white/15 focus:border-[#b38b3f] rounded px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#e8c87d] uppercase mb-1.5">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0913 xxx xxx"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      className="w-full bg-[#1d150e] border border-white/15 focus:border-[#b38b3f] rounded px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#e8c87d] uppercase mb-1.5">
                      Chuyên ngành cần Luật sư tư vấn
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, topic: e.target.value }))
                      }
                      className="w-full bg-[#1d150e] border border-white/15 focus:border-[#b38b3f] rounded px-3.5 py-2.5 text-xs text-white focus:outline-none"
                    >
                      {content.consultationSection.topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#e8c87d] uppercase mb-1.5">
                      Tóm tắt nội dung vụ việc
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mô tả ngắn gọn tình huống pháp lý cần Luật sư Hà Công Nam hỗ trợ..."
                      value={formState.summary}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, summary: e.target.value }))
                      }
                      className="w-full bg-[#1d150e] border border-white/15 focus:border-[#b38b3f] rounded px-3.5 py-2.5 text-xs text-white focus:outline-none resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 pt-1">
                    <button
                      type="submit"
                      className="w-full bg-[#b38b3f] hover:bg-[#9c752b] text-white font-black text-xs uppercase tracking-widest py-3.5 rounded shadow-lg transition-colors"
                    >
                      ĐẶT LỊCH TƯ VẤN CÙNG LUẬT SƯ HÀ CÔNG NAM
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              © 2026 {content.business.name} — Giám đốc: Luật sư Hà Công Nam.
            </div>
            <div className="text-[#e8c87d]">
              Vì Công Lý - Vì Con Người • Đoàn Luật sư TP. Hà Nội
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
