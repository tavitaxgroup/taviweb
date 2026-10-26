"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile2DefaultData,
  type CorporateProfile2Data
} from "../../data/mockData";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  Plus,
  Minus,
  Star,
  Globe,
  Sun,
  Wind,
  Zap,
  BarChart3,
  MessageSquare,
  UserCheck
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: CorporateProfile2Data = adaptClonedTemplateData(
    corporateProfile2DefaultData,
    incomingData || customData
  );

  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0eb582] selection:text-white">
      {/* 1. TOPBAR */}
      <div className="bg-[#0b132b] text-slate-300 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6 overflow-hidden">
            <span className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#0eb582] shrink-0" />
              <span className="truncate">{data.business.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0eb582] shrink-0" />
              <span>{primaryEmail}</span>
            </span>
          </div>
          <div className="flex items-center gap-3.5 text-white/80">
            <a
              href="#lien-he"
              aria-label="Facebook"
              className="hover:text-[#0eb582] transition-colors font-semibold"
            >
              f
            </a>
            <a
              href="#lien-he"
              aria-label="X"
              className="hover:text-[#0eb582] transition-colors font-semibold"
            >
              𝕏
            </a>
            <a
              href="#lien-he"
              aria-label="Instagram"
              className="hover:text-[#0eb582] transition-colors font-semibold"
            >
              ◎
            </a>
            <a
              href="#lien-he"
              aria-label="LinkedIn"
              className="hover:text-[#0eb582] transition-colors font-semibold"
            >
              in
            </a>
          </div>
        </div>
      </div>

      {/* 2. HERO BANNER + OVERLAY NAVBAR */}
      <header className="relative bg-[#0f1c3f] text-white overflow-hidden">
        {/* Background Image & Navy/Emerald Gradients */}
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/95 via-[#13265c]/80 to-[#0eb582]/35" />
          {/* Decorative teal wave shape bottom-right */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#0eb582]/30 blur-2xl pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#0eb582]/20 blur-2xl pointer-events-none" />
        </div>

        {/* Navigation Row */}
        <div className="relative z-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0eb582] to-teal-300 flex items-center justify-center shadow-lg shadow-[#0eb582]/30">
                <Globe className="w-5 h-5 text-[#0b132b]" />
              </div>
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                {data.business.name}
              </span>
            </a>

            {/* Main Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-white/90">
              <a
                href="#"
                className="text-[#0eb582] border-b-2 border-[#0eb582] pb-1"
              >
                Trang chủ
              </a>
              <a
                href="#gioi-thieu"
                className="hover:text-[#0eb582] transition-colors"
              >
                Giới thiệu
              </a>
              <a
                href="#giai-phap"
                className="hover:text-[#0eb582] transition-colors"
              >
                Dịch vụ
              </a>
              <a
                href="#du-an"
                className="hover:text-[#0eb582] transition-colors"
              >
                Dự án ▾
              </a>
              <a
                href="#tin-tuc"
                className="hover:text-[#0eb582] transition-colors"
              >
                Tin tức
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#0eb582] transition-colors"
              >
                Liên hệ
              </a>
            </nav>

            {/* Hotline Call Box */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="p-2 text-white/80 hover:text-white transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="hidden sm:flex items-center gap-3 pl-3 border-l border-white/15"
              >
                <span className="w-9 h-9 rounded-full bg-[#0eb582] text-white flex items-center justify-center shadow-md">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="text-left leading-tight">
                  <div className="text-[11px] text-slate-300">Liên Hệ Ngay</div>
                  <div className="text-xs font-bold text-white">
                    {primaryPhone}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-bold uppercase tracking-widest text-white mb-5">
              <Sun className="w-3.5 h-3.5 text-[#0eb582]" />
              <span>{data.hero.eyebrow || data.business.name}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight mb-6">
              {data.hero.title.includes("giải pháp") ? (
                <>
                  Cung cấp{" "}
                  <span className="text-[#10d498]">
                    giải pháp tái tạo năng lượng
                  </span>
                </>
              ) : (
                data.hero.title
              )}
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              {data.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={data.hero.ctaLink || "#lien-he"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0eb582] hover:bg-[#0ca072] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#0eb582]/30 transition-all"
              >
                <span>{data.hero.ctaText || "Liên Hệ"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={data.hero.secondaryCtaLink || "#du-an"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all"
              >
                <span>{data.hero.secondaryCtaText || "Khám Phá Ngay"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center justify-center gap-2 mt-14">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0eb582] ring-4 ring-[#0eb582]/30" />
            <span className="w-2 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </header>

      {/* 3. ABOUT SECTION ("GIẢI PHÁP NĂNG LƯỢNG MẶT TRỜI") */}
      <section id="gioi-thieu" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] w-[88%]">
                <img
                  src={data.aboutFeature.mainImage}
                  alt="Kỹ sư điện mặt trời"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-0 w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                <img
                  src={data.aboutFeature.secondaryImage}
                  alt="Lắp đặt pin năng lượng mặt trời"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#e6f8f2] text-[#0eb582] text-[11px] font-bold uppercase tracking-wider">
                {data.aboutFeature.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Giải Pháp{" "}
                <span className="text-[#0eb582]">
                  {data.aboutFeature.titleHighlight}
                </span>{" "}
                của {data.business.name}
              </h2>

              <p className="text-slate-700 font-semibold text-sm leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {data.business.aboutText?.[1]}
              </p>

              {/* Trust Partner Box */}
              <div className="pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f7fcfa] border border-[#d6f3e9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#0eb582]/30 flex flex-col items-center justify-center text-[#0eb582] shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="text-[8px] font-extrabold tracking-tighter">
                      TRUST
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {data.aboutFeature.partnerTitle}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {data.aboutFeature.partnerDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS BAR & PROJECTS SECTION */}
      <section
        id="du-an"
        className="py-16 bg-gradient-to-b from-[#f4fbf8] via-[#eefaf5] to-white border-t border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4-Column Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-emerald-900/10">
            {(data.stats || []).map((st) => (
              <div key={st.id} className="text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {st.number}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {st.title}
                </div>
              </div>
            ))}
          </div>

          {/* Projects Header */}
          <div className="pt-14 pb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#d8f5eb] text-[#0eb582] text-[10px] font-bold uppercase tracking-wider mb-2">
                DỰ ÁN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Dự án <span className="text-[#0eb582]">năng lượng sạch</span>
              </h2>
            </div>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#0eb582] text-[#0eb582] hover:bg-[#0eb582] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.projects || []).map((prj, idx) => {
              const isActive = idx === activeProjectIndex;
              return (
                <div
                  key={prj.id}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl ${
                    isActive
                      ? "bg-[#0eb582] text-white shadow-lg shadow-[#0eb582]/25"
                      : "bg-white text-slate-900 border border-slate-100"
                  }`}
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                        isActive
                          ? "bg-white text-[#0eb582]"
                          : "bg-[#eafaf4] text-[#0eb582]"
                      }`}
                    >
                      {idx % 2 === 0 ? (
                        <Sun className="w-5 h-5" />
                      ) : (
                        <Zap className="w-5 h-5" />
                      )}
                    </div>
                    <h3
                      className={`text-sm font-bold leading-snug mb-4 line-clamp-2 min-h-[40px] ${
                        isActive ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {prj.title}
                    </h3>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-[16/11]">
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-full object-cover"
                    />
                    <span
                      className={`absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                        isActive
                          ? "bg-[#0eb582] text-white border border-white/40"
                          : "bg-white text-[#0eb582]"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS & PROGRESS BARS + 5-IMAGE STRIP */}
      <section
        id="giai-phap"
        className="py-20 bg-[#f6faf9] relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 3-Image Collage with Central Badge */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-2xl overflow-hidden h-52 shadow-md">
                  <img
                    src={data.solutions.images[0]}
                    alt="Giải pháp điện mặt trời"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                  <img
                    src={data.solutions.images[1]}
                    alt="Kỹ thuật viên năng lượng"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                  <img
                    src={data.solutions.images[2]}
                    alt="Trạm năng lượng gió"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center Floating Consulting Seal */}
              <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white shadow-xl border-4 border-[#e8f8f2] flex flex-col items-center justify-center text-center p-2">
                <BarChart3 className="w-7 h-7 text-[#0eb582] mb-0.5" />
                <span className="text-[8px] font-extrabold uppercase tracking-wider text-slate-700 leading-tight">
                  {data.business.name} Consulting
                </span>
              </div>
            </div>

            {/* Right Progress Bars */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#dff7ee] text-[#0eb582] text-[10px] font-bold uppercase tracking-wider">
                {data.solutions.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Giải pháp{" "}
                <span className="text-[#0eb582]">năng lượng xanh tại</span>{" "}
                {data.business.name}
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {data.solutions.description}
              </p>

              <div className="space-y-4 pt-2">
                {data.solutions.progressBars.map((pb) => (
                  <div key={pb.id}>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                      <span>{pb.label}</span>
                      <span className="text-[#0eb582]">{pb.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full relative">
                      <div
                        className="h-full bg-[#0eb582] rounded-full relative"
                        style={{ width: `${pb.percentage}%` }}
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#0eb582] shadow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#0eb582] text-[#0eb582] hover:bg-[#0eb582] hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>KHÁM PHÁ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 5-Column Gallery Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
            {data.solutions.galleryStrip.map((item, idx) => {
              const isCenter = idx === 2;
              return (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3.6] shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      isCenter
                        ? "bg-gradient-to-t from-[#0e2a66]/90 via-[#0e2a66]/40 to-transparent opacity-100"
                        : "bg-gradient-to-t from-[#0e2a66]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`absolute top-3 right-3 w-7 h-7 rounded-full bg-[#0e2a66] text-white flex items-center justify-center transition-opacity ${
                      isCenter
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                  <div
                    className={`absolute bottom-3 left-3 right-3 transition-opacity ${
                      isCenter
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <span className="inline-block px-2 py-0.5 rounded bg-white text-[#0eb582] text-[9px] font-bold mb-1">
                      {item.category}
                    </span>
                    <div className="text-white text-xs font-bold leading-snug">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TEAM SECTION ("ĐỘI NGŨ CỦA CHÚNG TÔI") */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#e6f8f2] text-[#0eb582] text-[10px] font-bold uppercase tracking-wider mb-2">
              ĐỘI NGŨ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Đội ngũ <span className="text-[#0eb582]">của chúng tôi</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {(data.team || []).map((member, idx) => {
              const isTopLabel = idx % 2 === 0;
              return (
                <div key={member.id} className="flex flex-col items-center">
                  {isTopLabel && (
                    <div className="w-full text-left mb-3 pb-2 border-b-2 border-[#0eb582]/40">
                      <div className="text-sm font-extrabold text-slate-900">
                        {member.name}
                      </div>
                      <div className="text-[11px] font-medium text-[#0eb582]">
                        {member.position}
                      </div>
                    </div>
                  )}

                  {/* Hexagon-like Octagonal Frame */}
                  <div className="relative group w-48 h-52 rounded-[28px] overflow-hidden border-2 border-[#0eb582]/30 shadow-lg bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {idx === 1 && (
                      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
                        {["f", "𝕏", "◎", "in"].map((soc) => (
                          <span
                            key={soc}
                            className="w-6 h-6 rounded-full bg-[#0b132b]/85 text-white text-[10px] flex items-center justify-center hover:bg-[#0eb582]"
                          >
                            {soc}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {!isTopLabel && (
                    <div className="w-full text-left mt-3 pt-2 border-t-2 border-[#0eb582]/40">
                      <div className="text-sm font-extrabold text-slate-900">
                        {member.name}
                      </div>
                      <div className="text-[11px] font-medium text-[#0eb582]">
                        {member.position}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. GREEN ENERGY APPROACH BANNER */}
      <section className="relative py-20 bg-gradient-to-r from-[#eef8f3] via-[#e2f3ea] to-[#cbe8d8] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#0eb582] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  {data.approach.badge}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#0eb582] text-white flex items-center justify-center shadow-md">
                  <Phone className="w-3.5 h-3.5" />
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Cách <span className="text-[#0eb582]">tiếp cận</span> năng lượng
                sạch
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {data.approach.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
                {data.approach.checkpoints.map((cp) => (
                  <div
                    key={cp}
                    className="flex items-center gap-2 text-xs font-bold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0eb582] shrink-0" />
                    <span>{cp}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0eb582] hover:bg-[#0ca072] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  <span>LIÊN HỆ NGAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#du-an"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white border border-[#0eb582] text-[#0eb582] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>KHÁM PHÁ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Crystal Globe Green Tree Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-3 bg-gradient-to-tr from-[#0eb582]/40 via-white/60 to-blue-500/30 shadow-2xl">
                <img
                  src={data.approach.image}
                  alt="Hệ sinh thái năng lượng xanh"
                  className="w-full h-full object-cover rounded-full border-4 border-white/80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION ("CÂU HỎI THƯỜNG GẶP VỀ NĂNG LƯỢNG SẠCH") */}
      <section className="py-20 bg-[#f6fbf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Accordion */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#dff7ee] text-[#0eb582] text-[10px] font-bold uppercase tracking-wider">
                CÂU TRẢ LỜI THƯỜNG GẶP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug pb-2">
                Câu hỏi thường gặp{" "}
                <span className="text-[#0eb582]">về năng lượng sạch</span>
              </h2>

              <div className="space-y-3">
                {data.faqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaqId(isOpen ? "" : faq.id)
                        }
                        className="w-full px-5 py-4 flex items-center gap-3 text-left"
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                            isOpen
                              ? "bg-[#0eb582] text-white"
                              : "bg-[#0b132b] text-white"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold ${
                            isOpen ? "text-[#0eb582]" : "text-slate-800"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 pt-0 text-xs text-slate-500 leading-relaxed border-t border-slate-50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Wind & Solar Images */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/4.3] w-[86%]">
                <img
                  src={data.faqImages.main}
                  alt="Năng lượng gió và mặt trời"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-0 w-44 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={data.faqImages.inset}
                  alt="Kỹ sư kiểm tra tấm pin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM SECTION ("LIÊN HỆ NGAY CHO CHÚNG TÔI") */}
      <section id="lien-he" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0e1738] text-white p-8 sm:p-12 shadow-2xl">
            <img
              src={data.hero.backgroundImage}
              alt="Liên hệ tư vấn"
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block px-3 py-1 rounded bg-[#0eb582] text-white text-[10px] font-bold uppercase tracking-wider">
                  LIÊN HỆ NGAY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                  Liên hệ ngay cho chúng tôi
                </h2>

                <div className="space-y-5 pt-2">
                  {data.contactFeatures.map((feat, idx) => (
                    <div key={feat.id} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#0eb582] text-white flex items-center justify-center shrink-0 shadow-md">
                        {idx === 0 ? (
                          <Headphones className="w-5 h-5" />
                        ) : (
                          <ShieldCheck className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {feat.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right White Form Card */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="bg-white text-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Họ tên*"
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#0eb582]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#0eb582]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại*"
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#0eb582]"
                    />
                    <input
                      type="text"
                      placeholder="Chủ đề*"
                      className="w-full px-4 py-3 rounded-lg bg-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#0eb582]"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Nội dung"
                    className="w-full px-4 py-3 rounded-lg bg-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-[#0eb582]"
                  />
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#0eb582] hover:bg-[#0ca072] text-white text-xs font-bold transition-colors shadow-md"
                    >
                      Gửi liên hệ
                    </button>
                    {submitted && (
                      <span className="text-xs font-semibold text-[#0eb582]">
                        ✓ Đã gửi yêu cầu tư vấn thành công!
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION ("KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI") */}
      <section className="py-20 bg-[#f5faf8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#dff7ee] text-[#0eb582] text-[10px] font-bold uppercase tracking-wider mb-2">
              ĐÁNH GIÁ CỦA KHÁCH HÀNG
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Khách hàng{" "}
              <span className="text-[#0eb582]">nói gì về chúng tôi</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.testimonials || []).map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                {/* Top Row: Quote Icon + Avatar */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-4xl font-serif font-black text-[#0eb582] leading-none">
                      ❞
                    </span>
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#0eb582]/30 shadow-sm"
                      />
                    )}
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900">
                    {item.author}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#0eb582] mb-3">
                    {item.role}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">
                    {item.content}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[#0eb582]">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#0eb582] text-[#0eb582]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. NEWS / BLOG SECTION + PARTNER LOGOS */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#e6f8f2] text-[#0eb582] text-[10px] font-bold uppercase tracking-wider mb-2">
                TIN TỨC MỚI NHẤT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Tin tức mới{" "}
                <span className="text-[#0eb582]">năng lượng sạch</span>
              </h2>
            </div>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#0eb582] text-[#0eb582] hover:bg-[#0eb582] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).map((post) => {
              const [day, month] = post.date.split(" ");
              return (
                <article
                  key={post.id}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0eb582] text-white rounded-lg px-2.5 py-1 text-center leading-tight shadow">
                      <div className="text-xs font-extrabold">{day || "24"}</div>
                      <div className="text-[9px] uppercase">
                        {month || "Th5"}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#0eb582] transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <UserCheck className="w-3.5 h-3.5 text-[#0eb582]" />
                        {data.business.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-[#0eb582]" />
                        0 Bình Luận
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Partner Logos Box */}
          <div className="mt-16 rounded-2xl border border-slate-100 bg-white shadow-sm px-6 py-6 flex flex-wrap items-center justify-between gap-6">
            <div className="text-xs font-extrabold text-slate-800">
              Đối tác của chúng tôi
            </div>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              {(data.clients || []).map((cl, idx) => (
                <div
                  key={cl.id}
                  className="flex items-center gap-2 text-[#0eb582] opacity-85 hover:opacity-100 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#e8f8f2] flex items-center justify-center">
                    {idx % 3 === 0 ? (
                      <Sun className="w-5 h-5" />
                    ) : idx % 3 === 1 ? (
                      <Wind className="w-5 h-5" />
                    ) : (
                      <Globe className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-slate-600 hidden sm:inline">
                    {cl.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#0e1738] text-slate-300 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Emerald Contact Bar */}
          <div className="rounded-2xl bg-[#0eb582] text-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white text-[#0eb582] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-emerald-100">Địa chỉ</div>
                <div className="text-xs font-bold leading-snug">
                  {data.business.address}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white text-[#0eb582] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-emerald-100">Email</div>
                <div className="text-xs font-bold">{primaryEmail}</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white text-[#0eb582] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-emerald-100">Số điện thoại</div>
                <div className="text-xs font-bold">{primaryPhone}</div>
              </div>
            </div>
          </div>

          {/* 4 Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#0eb582] flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xl font-extrabold text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-2.5 pt-1">
                {["𝕏", "f", "◎", "in"].map((soc) => (
                  <a
                    key={soc}
                    href="#lien-he"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white hover:bg-[#0eb582] hover:border-[#0eb582] transition-colors"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#0eb582] inline-block pb-1">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#0eb582]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#giai-phap" className="hover:text-[#0eb582]">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#du-an" className="hover:text-[#0eb582]">
                    Dự án
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#0eb582]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#0eb582]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#0eb582] inline-block pb-1">
                Dịch vụ
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Công nghệ năng lượng xanh</li>
                <li>Dịch vụ khí hậu & ESG</li>
                <li>Giải pháp lưu trữ điện ESS</li>
                <li>Giải pháp Mobility</li>
                <li>Hệ thống làm mát khu vực</li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#0eb582] inline-block pb-1">
                Tin tức
              </h4>
              <div className="space-y-3">
                {(data.news || []).slice(0, 2).map((post) => (
                  <a
                    key={post.id}
                    href="#tin-tuc"
                    className="flex items-center gap-3 group"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-14 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <div className="text-[10px] text-[#0eb582]">
                        {data.business.name} • 0 Bình Luận
                      </div>
                      <div className="text-xs font-bold text-white group-hover:text-[#0eb582] line-clamp-2 leading-snug">
                        {post.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-400">
            © Thiết kế và lập trình bởi{" "}
            <span className="text-white font-bold">{data.business.name}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
