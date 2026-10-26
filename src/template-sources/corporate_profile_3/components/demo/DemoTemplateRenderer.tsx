"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Search,
  ArrowRight,
  Play,
  CheckCircle2,
  Target,
  Megaphone,
  Globe,
  PenTool,
  Plus,
  Minus,
  Star,
  Quote,
  Cpu,
  BarChart3,
  FileText,
  Layers
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile3DefaultData,
  type CorporateProfile3Data
} from "@/template-sources/corporate_profile_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: CorporateProfile3Data = adaptClonedTemplateData(
    corporateProfile3DefaultData,
    incomingData
  );

  const [activeAboutTab, setActiveAboutTab] = useState<string>(
    data.aboutTabs[0]?.id || "diff"
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);

  const currentTab =
    data.aboutTabs.find((t) => t.id === activeAboutTab) || data.aboutTabs[0];

  const renderServiceIcon = (icon?: string) => {
    switch (icon) {
      case "strategy":
        return <Target className="w-6 h-6 text-white" />;
      case "ads":
        return <Megaphone className="w-6 h-6 text-white" />;
      case "web":
        return <Globe className="w-6 h-6 text-white" />;
      default:
        return <PenTool className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#5B3DF5] selection:text-white">
      {/* TOP ELECTRIC PURPLE BAR */}
      <div className="bg-[#5B3DF5] text-white text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-200" />
              {data.business.address}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-purple-200" />
              {data.business.phone[0]}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-200" />
              {data.business.email[0]}
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-purple-100 font-semibold">
            <span>Tư vấn Chuyển đổi số 24/7</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B3DF5] to-[#8C6FF7] flex items-center justify-center text-white shadow-md">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight uppercase text-slate-950 block leading-none">
                {data.business.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B3DF5]">
                Digital & Tech Agency
              </span>
            </div>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-extrabold uppercase tracking-wider text-slate-700">
            <a href="#trang-chu" className="text-[#5B3DF5]">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#5B3DF5] transition">
              Giới thiệu
            </a>
            <a href="#dich-vu" className="hover:text-[#5B3DF5] transition">
              Dịch vụ
            </a>
            <a href="#quy-trinh" className="hover:text-[#5B3DF5] transition">
              Hoạt động
            </a>
            <a href="#tin-tuc" className="hover:text-[#5B3DF5] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#5B3DF5] transition">
              Liên hệ
            </a>
          </nav>

          {/* Right Search Button */}
          <div className="flex items-center gap-3">
            <a
              href="#lien-he"
              className="w-9 h-9 rounded-full bg-purple-50 hover:bg-[#5B3DF5] text-[#5B3DF5] hover:text-white flex items-center justify-center transition"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION (LAVENDER TECH GEOMETRIC BACKGROUND) */}
      <section
        id="trang-chu"
        className="relative bg-gradient-to-br from-[#F3F0FF] via-[#F9F8FF] to-[#EAE5FF] py-16 sm:py-24 overflow-hidden"
      >
        {/* Decorative Tech Rings */}
        <div className="w-72 h-72 rounded-full border border-[#5B3DF5]/15 absolute -top-12 -left-16 pointer-events-none" />
        <div className="w-96 h-96 rounded-full border border-[#5B3DF5]/10 absolute bottom-0 right-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
                {data.hero.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 leading-[1.15] tracking-tight mb-5">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mb-8">
                {data.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={data.hero.ctaLink || "#dich-vu"}
                  className="inline-flex items-center gap-2 bg-[#5B3DF5] hover:bg-[#492be0] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg shadow-[#5B3DF5]/25 transition"
                >
                  <span>{data.hero.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={data.hero.secondaryCtaLink || "#gioi-thieu"}
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="w-11 h-11 rounded-full bg-[#5B3DF5]/15 group-hover:bg-[#5B3DF5] text-[#5B3DF5] group-hover:text-white flex items-center justify-center transition">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </span>
                  <span className="text-left leading-tight">
                    <strong className="text-xs font-extrabold text-slate-900 block">
                      {data.hero.secondaryCtaText || "Xem giới thiệu"}
                    </strong>
                    <span className="text-[11px] text-slate-500">Đăng ký ngay</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Tech Team & Strategy Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5B3DF5]/35 via-transparent to-transparent" />
              </div>

              {/* Floating Analytics Card */}
              <div className="hidden sm:flex items-center gap-3 bg-white rounded-2xl p-4 shadow-xl border border-purple-100 absolute -bottom-5 -left-5">
                <div className="w-10 h-10 rounded-xl bg-[#5B3DF5] text-white flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">
                    Tăng trưởng ROI
                  </span>
                  <span className="text-sm font-black text-slate-950">+240% Hiệu suất</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT US ("PHÁT TRIỂN BẰNG CÁC CHIẾN LƯỢC MARKETING") */}
      <section id="gioi-thieu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Blob-Masked Team Image with Play Button */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-[44%_56%_48%_52%/52%_44%_56%_48%] overflow-hidden shadow-2xl border-4 border-purple-100">
              <img
                src={data.hero.images?.[1] || data.hero.backgroundImage}
                alt="Đội ngũ chuyên gia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0D1128]/25 flex items-center justify-center">
                <a
                  href="#lien-he"
                  className="w-14 h-14 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center shadow-xl ring-8 ring-white/30 hover:scale-110 transition"
                >
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content with Watermark & Interactive Tabs */}
          <div className="lg:col-span-7 relative">
            <span className="text-5xl sm:text-7xl font-black uppercase text-slate-900/[0.04] absolute -top-8 left-0 select-none pointer-events-none">
              ABOUT US
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              GIỚI THIỆU GIẢI PHÁP
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight mb-4">
              Phát Triển Bằng Các Chiến Lược{" "}
              <span className="text-[#5B3DF5]">Marketing</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {data.business.aboutText[0]}
            </p>

            {/* 2 Interactive Tabs */}
            <div className="grid grid-cols-2 rounded-lg overflow-hidden mb-5">
              {data.aboutTabs.map((tab) => {
                const isActive = tab.id === activeAboutTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAboutTab(tab.id)}
                    className={`py-3 px-4 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer ${
                      isActive
                        ? "bg-[#5B3DF5] text-white"
                        : "bg-[#0D1128] text-white hover:bg-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Box */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950 mb-2">
                {currentTab.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {currentTab.content}
              </p>
              <a
                href="#lien-he"
                className="inline-block bg-[#5B3DF5] hover:bg-[#492be0] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg transition"
              >
                TÌM HIỂU THÊM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK NAVY SERVICES SECTION */}
      <section id="dich-vu" className="bg-[#0B0F29] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14 relative">
            <span className="text-5xl sm:text-7xl font-black uppercase text-white/[0.04] absolute -top-8 left-0 select-none pointer-events-none">
              SERVICES
            </span>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8C6FF7] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#8C6FF7]" />
                MARKETING CHUYÊN NGHIỆP
              </span>
              <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white">
                Thu Hút Sự Chú Ý Và Thúc Đẩy Chuyển Đổi Với{" "}
                <span className="text-[#8C6FF7]">Marketing</span>
              </h2>
            </div>

            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 bg-[#5B3DF5] hover:bg-[#492be0] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-lg transition"
            >
              <span>Xem tất cả dịch vụ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 White Service Cards with Floating Purple Icon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {(data.services || []).map((srv) => (
              <div
                key={srv.id}
                className="bg-white text-slate-900 rounded-2xl pt-10 pb-6 px-6 text-center shadow-xl relative group hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#5B3DF5] ring-8 ring-[#5B3DF5]/20 flex items-center justify-center mx-auto -mt-16 mb-5 shadow-lg">
                  {renderServiceIcon(srv.icon)}
                </div>
                <h3 className="text-base font-extrabold text-slate-950 mb-2.5">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {srv.description}
                </p>
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-1.5 bg-[#5B3DF5] hover:bg-[#492be0] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-2 rounded-md transition"
                >
                  <span>Xem thêm</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: EXPERIENCE & CIRCULAR METRICS ("HƠN 24 NĂM KINH NGHIỆM") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text + 2 Circular Ring Cards */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              {data.experienceSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 leading-tight mb-4">
              {data.experienceSection.title}{" "}
              <span className="text-[#5B3DF5]">
                {data.experienceSection.highlightWord}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-7">
              {data.experienceSection.description}
            </p>

            {/* 2 Metric Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {data.experienceSection.metrics.map((m) => (
                <div
                  key={m.id}
                  className="bg-[#F6F5FF] border border-purple-100 rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full border-4 border-[#5B3DF5] flex items-center justify-center shrink-0 bg-white">
                    <span className="text-sm font-black text-slate-950">
                      {m.percent}%
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-950 mb-0.5">
                      {m.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 bg-[#5B3DF5] hover:bg-[#492be0] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 rounded-lg transition"
            >
              <span>Đọc thêm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Masked Photo + 10k+ Badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-[52%_48%_43%_57%/46%_54%_46%_54%] overflow-hidden shadow-2xl border-4 border-purple-100">
              <img
                src={data.experienceSection.image}
                alt="Kinh nghiệm triển khai"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-2 left-6 sm:left-12 w-24 h-24 rounded-full bg-[#5B3DF5] text-white ring-8 ring-purple-200 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-xl font-black leading-none">
                {data.experienceSection.activeClientsBadge}
              </span>
              <span className="text-[10px] font-medium mt-0.5">Khách Hàng</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING TABLE ("BẢNG GIÁ DỊCH VỤ") */}
      <section className="bg-[#F9F9FC] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 relative">
            <span className="text-5xl sm:text-7xl font-black uppercase text-slate-900/[0.04] absolute -top-7 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              PRICING
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              GÓI DỊCH VỤ GIÁ TRỊ
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              Bảng Giá <span className="text-[#5B3DF5]">Dịch Vụ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.pricing || []).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 hover:shadow-xl transition flex flex-col"
              >
                {/* Dark Navy Header with Purple Accent */}
                <div className="bg-[#0D1128] text-white p-6 relative overflow-hidden">
                  <div className="w-24 h-24 bg-[#5B3DF5] rotate-45 absolute -top-10 -right-10 opacity-90" />
                  <h3 className="text-lg font-extrabold text-white">{pkg.name}</h3>
                  <p className="text-xs text-slate-300 mt-0.5 mb-5">
                    {pkg.description}
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-300">{pkg.badge}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-3 mb-7">
                    {pkg.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#5B3DF5] shrink-0" />
                        <span>{f.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#lien-he"
                    className="inline-flex items-center justify-center gap-2 bg-[#0D1128] hover:bg-[#5B3DF5] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-lg transition w-fit"
                  >
                    <span>Mua ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: 4-STEP WORK PROCESS + PARTNER LOGOS BANNER */}
      <section id="quy-trinh" className="py-20 bg-[#F4F3FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 relative">
            <span className="text-5xl sm:text-7xl font-black uppercase text-slate-900/[0.04] absolute -top-7 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              PROCESS
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              NỘI DUNG CHẤT LƯỢNG
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              Quy Trình Làm Việc <span className="text-[#5B3DF5]">Hiệu Quả</span>
            </h2>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {data.processSteps.map((step, idx) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-purple-100 relative pt-9"
              >
                <span className="w-11 h-11 rounded-full bg-[#5B3DF5] text-white text-sm font-black flex items-center justify-center absolute -top-4 left-4 ring-4 ring-purple-200">
                  {step.stepNumber}
                </span>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5B3DF5] flex items-center justify-center mx-auto mb-4">
                  {idx === 0 ? (
                    <FileText className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Layers className="w-6 h-6" />
                  ) : idx === 2 ? (
                    <PenTool className="w-6 h-6" />
                  ) : (
                    <BarChart3 className="w-6 h-6" />
                  )}
                </div>
                <h3 className="text-sm font-extrabold text-slate-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partner Logos Dark Trapezoid Banner */}
          <div className="bg-[#0D1128] text-white rounded-2xl py-7 px-6 sm:px-10 shadow-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {data.partnerLogos.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center gap-2.5 opacity-90 hover:opacity-100 transition"
              >
                <div className="w-8 h-8 rounded-lg bg-[#5B3DF5]/30 border border-[#5B3DF5] flex items-center justify-center text-[#8C6FF7] font-black text-xs">
                  {partner.name.slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-black tracking-wide text-white leading-none">
                    {partner.name}
                  </div>
                  <div className="text-[10px] text-slate-400">{partner.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TEAM EXPERTS ("GIỚI THIỆU ĐỘI NGŨ CHUYÊN NGHIỆP") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
            ĐỘI NGŨ CHUYÊN GIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            Giới Thiệu Đội Ngũ <span className="text-[#5B3DF5]">Chuyên Nghiệp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {(data.team || []).map((member) => (
            <div key={member.id} className="group">
              <div className="h-80 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 mx-4 -mt-10 relative z-10 text-center">
                <span className="w-7 h-7 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center absolute -top-3.5 right-5 shadow-md">
                  <Plus className="w-4 h-4" />
                </span>
                <h3 className="text-base font-extrabold text-slate-950">
                  {member.name}
                </h3>
                <p className="text-xs text-[#5B3DF5] font-medium mt-0.5">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: DARK NAVY TESTIMONIALS ("NHỮNG ĐÁNH GIÁ TÍCH CỰC") */}
      <section className="bg-[#0B0F29] text-white py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14 relative">
            <span className="text-5xl sm:text-7xl font-black uppercase text-white/[0.04] absolute -top-7 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              TESTIMONIALS
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8C6FF7] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#8C6FF7]" />
              ĐÁNH GIÁ KHÁCH HÀNG
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Những Đánh Giá <span className="text-[#8C6FF7]">Tích Cực</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-6">
            {(data.testimonials || []).map((item) => (
              <div
                key={item.id}
                className="bg-white text-slate-900 rounded-2xl p-6 pt-12 relative shadow-xl"
              >
                <div className="absolute -top-7 left-6 flex items-end gap-2">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-16 h-16 rounded-xl object-cover border-2 border-white shadow-md"
                  />
                  <span className="w-7 h-7 rounded-full bg-[#5B3DF5] text-white flex items-center justify-center -ml-4 mb-1 shadow">
                    <Quote className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="flex items-center justify-end gap-0.5 text-[#5B3DF5] -mt-6 mb-5">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#5B3DF5]" />
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {item.content}
                </p>

                <div>
                  <h4 className="text-sm font-extrabold text-slate-950">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-slate-400">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ ACCORDION ("NHỮNG CÂU HỎI THƯỜNG GẶP") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Overlapping Dual Photos */}
          <div className="lg:col-span-5 relative">
            <div className="w-64 sm:w-72 h-72 rounded-3xl overflow-hidden shadow-lg ml-auto">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Tư vấn khách hàng"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 sm:w-68 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white -mt-24 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Hỗ trợ doanh nghiệp"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Feedback Pill */}
            <div className="bg-white rounded-full px-4 py-2.5 shadow-xl border border-purple-100 inline-flex items-center gap-3 absolute top-1/2 left-4 z-20">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Client"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Client"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                />
              </div>
              <span className="text-xs font-extrabold text-slate-900">
                Phản Hồi Khách Hàng
              </span>
            </div>
          </div>

          {/* Right 6-Item Accordion */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
              GIẢI ĐÁP THẮC MẮC
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mb-7">
              Những Câu Hỏi <span className="text-[#5B3DF5]">Thường Gặp</span>
            </h2>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className={`w-full flex items-center justify-between gap-4 px-5 py-3.5 text-left text-xs sm:text-sm font-bold transition cursor-pointer ${
                        isOpen
                          ? "bg-[#5B3DF5] text-white"
                          : "bg-white text-slate-900 hover:bg-purple-50/50"
                      }`}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-5 text-xs text-slate-600 leading-relaxed bg-slate-50/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTACT FORM ("LIÊN HỆ NẾU CÓ THẮC MẮC") */}
      <section id="lien-he" className="bg-[#F4F3FA] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Contact Info */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
                ĐẶT CÂU HỎI, Ý KIẾN HOẶC YÊU CẦU
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-3">
                Liên Hệ Nếu Có <span className="text-[#5B3DF5]">Thắc Mắc</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Hãy gửi cho chúng tôi những câu hỏi, ý kiến hoặc yêu cầu của bạn và chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-xs border border-purple-100">
                  <div className="w-10 h-10 rounded-lg bg-[#5B3DF5] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block">
                      Liên hệ ngay
                    </span>
                    <span className="text-xs font-extrabold text-slate-950 truncate block">
                      {data.business.phone[0]}
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-xs border border-purple-100">
                  <div className="w-10 h-10 rounded-lg bg-[#5B3DF5] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 block">Email</span>
                    <span className="text-xs font-extrabold text-slate-950 truncate block">
                      {data.business.email[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-purple-100">
              <h3 className="text-lg font-extrabold text-slate-950 text-center mb-5">
                Liên hệ ngay
              </h3>
              {contactSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#5B3DF5] mx-auto mb-3" />
                  <h4 className="text-base font-extrabold text-slate-950 mb-1">
                    Đã Gửi Yêu Cầu Tư Vấn!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Đội ngũ chuyên gia <strong>{data.business.name}</strong> sẽ liên hệ lại với bạn ngay.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="text"
                      required
                      placeholder="Họ tên *"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#5B3DF5]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#5B3DF5]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại *"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#5B3DF5]"
                    />
                    <input
                      type="text"
                      placeholder="Chủ đề *"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#5B3DF5]"
                    />
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Nội dung"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-[#5B3DF5]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#5B3DF5] hover:bg-[#492be0] text-white text-xs font-extrabold uppercase tracking-wider transition cursor-pointer"
                  >
                    GỬI LIÊN HỆ
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: NEWS & BLOG ("CẬP NHẬT TIN TỨC" - 6 CARDS) */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5B3DF5] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5B3DF5]" />
            TIN TỨC & BLOG
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            Cập Nhật <span className="text-[#5B3DF5]">Tin Tức</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data.news || []).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/80 text-white text-[9px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-[#5B3DF5] group-hover:text-slate-950 transition leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a
                    href="#tin-tuc"
                    className="inline-block text-[10px] font-extrabold uppercase text-[#5B3DF5] hover:underline mb-4"
                  >
                    XEM THÊM
                  </a>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400">
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 12: DARK NAVY FOOTER */}
      <footer className="bg-[#080B1F] text-slate-300 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Newsletter Row */}
          <div className="pb-10 border-b border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#5B3DF5] flex items-center justify-center text-white">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-lg font-black uppercase text-white">
                  {data.business.name}
                </span>
              </div>
              <div className="hidden sm:block border-l border-white/15 pl-6">
                <h4 className="text-base font-extrabold text-white">
                  Bản Tin Mới Nhất
                </h4>
                <p className="text-xs text-slate-400">
                  Đăng ký ngay để nhận ưu đãi mới nhất
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full lg:w-auto max-w-md gap-2"
            >
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 lg:w-64 px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#5B3DF5] hover:bg-[#492be0] text-white text-xs font-extrabold uppercase cursor-pointer"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>

          {/* 4 Footer Columns */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h5 className="text-xs font-extrabold uppercase text-white mb-4 pb-2 border-b border-[#5B3DF5] inline-block">
                GIỚI THIỆU CÔNG TY
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {data.business.aboutText[0]}
              </p>
              <div className="flex items-center gap-2">
                {["f", "tw", "ig", "in"].map((s) => (
                  <span
                    key={s}
                    className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white hover:bg-[#5B3DF5] transition cursor-pointer"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h5 className="text-xs font-extrabold uppercase text-white mb-4 pb-2 border-b border-[#5B3DF5] inline-block">
                LIÊN KẾT
              </h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#gioi-thieu" className="hover:text-white">› Giới thiệu</a></li>
                <li><a href="#dich-vu" className="hover:text-white">› Dịch vụ</a></li>
                <li><a href="#quy-trinh" className="hover:text-white">› Câu hỏi thường gặp</a></li>
                <li><a href="#tin-tuc" className="hover:text-white">› Dự án</a></li>
                <li><a href="#lien-he" className="hover:text-white">› Liên hệ</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h5 className="text-xs font-extrabold uppercase text-white mb-4 pb-2 border-b border-[#5B3DF5] inline-block">
                DỊCH VỤ
              </h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#dich-vu" className="hover:text-white">› Quảng cáo trực tuyến</a></li>
                <li><a href="#dich-vu" className="hover:text-white">› Sáng tạo nội dung</a></li>
                <li><a href="#dich-vu" className="hover:text-white">› Tiếp thị mạng xã hội</a></li>
                <li><a href="#dich-vu" className="hover:text-white">› Chiến lược tùy chỉnh</a></li>
                <li><a href="#dich-vu" className="hover:text-white">› Tối ưu hóa Website</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h5 className="text-xs font-extrabold uppercase text-white mb-4 pb-2 border-b border-[#5B3DF5] inline-block">
                BÀI VIẾT MỚI NHẤT
              </h5>
              <div className="space-y-3">
                {(data.news || []).slice(0, 2).map((post) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <h6 className="text-xs font-bold text-white line-clamp-1">
                        {post.title}
                      </h6>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Purple Copyright Bar */}
        <div className="bg-[#5B3DF5] text-white text-center py-3 text-xs">
          © Thiết kế và lập trình bởi {data.business.name}
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
