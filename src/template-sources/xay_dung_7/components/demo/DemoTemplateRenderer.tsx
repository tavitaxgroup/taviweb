"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Play,
  Compass,
  Building2,
  FileText,
  Hammer,
  Gift,
  Network,
  Globe,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung7DefaultData,
  type XayDung7TemplateData
} from "@/template-sources/xay_dung_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung7TemplateData = adaptClonedTemplateData(
    xayDung7DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOverviewTab, setActiveOverviewTab] = useState<string>(
    data.overviewTabs?.[0]?.id || "tab-gioi-thieu"
  );
  const [activeValueIndex, setActiveValueIndex] = useState<number>(0);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [leadForm, setLeadForm] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "info@sunshinecitysaigon.vn";

  const currentOverview =
    (data.overviewTabs || []).find((t) => t.id === activeOverviewTab) ||
    data.overviewTabs?.[0];

  const currentGoldenSlide =
    data.goldenValueSlides?.[activeValueIndex] || data.goldenValueSlides?.[0];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setLeadForm({ fullName: "", email: "", phone: "" });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white text-[#182338] font-sans selection:bg-[#c89a3e] selection:text-white">
      {/* 1. HERO SECTION WITH CENTER-TOP TOWER CREST EMBLEM (Exact match to XD007) */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden bg-[#182338]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#182338]/65 via-transparent to-[#182338]/90" />

        {/* Top Header Bar with Center Crest Badge */}
        <header className="relative z-30 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-start justify-between">
          {/* Left Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 pt-6 text-xs font-bold uppercase tracking-widest text-white/90">
            <a href="#tong-quan" className="hover:text-[#c89a3e] transition">
              Tổng quan
            </a>
            <a href="#vi-tri" className="hover:text-[#c89a3e] transition">
              Vị trí
            </a>
            <a href="#gia-tri-vang" className="hover:text-[#c89a3e] transition">
              Giá trị vàng
            </a>
          </nav>

          {/* Center Vertical Dark-Navy & Gold Crest Emblem */}
          <a
            href="#"
            className="mx-auto lg:mx-0 bg-[#182338] border-x border-b border-[#c89a3e]/60 px-6 py-5 shadow-2xl flex flex-col items-center text-center group"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <>
                <Building2 className="w-8 h-8 text-[#c89a3e] mb-1.5 group-hover:scale-105 transition" />
                <span className="text-[11px] font-serif font-bold uppercase tracking-[0.22em] text-[#c89a3e] leading-tight">
                  {data.business.name}
                </span>
              </>
            )}
          </a>

          {/* Right Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 pt-6 text-xs font-bold uppercase tracking-widest text-white/90">
            <a href="#tien-ich" className="hover:text-[#c89a3e] transition">
              Tiện ích
            </a>
            <a href="#he-sinh-thai" className="hover:text-[#c89a3e] transition">
              Hệ sinh thái
            </a>
            <a href="#tin-tuc" className="hover:text-[#c89a3e] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#c89a3e] transition">
              Liên hệ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden absolute right-4 top-4 p-2.5 rounded bg-[#182338]/80 text-[#c89a3e] border border-[#c89a3e]/40"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden relative z-30 bg-[#182338] border-b border-[#c89a3e]/30 px-6 py-4 space-y-2.5 text-white">
            {[
              { label: "Tổng quan", href: "#tong-quan" },
              { label: "Vị trí", href: "#vi-tri" },
              { label: "Giá trị vàng", href: "#gia-tri-vang" },
              { label: "Tiện ích", href: "#tien-ich" },
              { label: "Hệ sinh thái", href: "#he-sinh-thai" },
              { label: "Tin tức", href: "#tin-tuc" },
              { label: "Liên hệ", href: "#lien-he" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#c89a3e]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Bottom-Center Hero Title & 2 Circular Gold Buttons */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 pb-14 pt-24 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[0.12em] text-[#e5b84b] drop-shadow-md mb-2">
            {data.hero.title}
          </h1>
          <p className="text-base sm:text-xl font-serif italic text-white/95 mb-6">
            {data.hero.subtitle}
          </p>

          {/* Two Circular Gold Buttons: Play Video & 360° Tour */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="w-12 h-12 rounded-full bg-[#c89a3e]/90 hover:bg-[#c89a3e] text-white border-2 border-white/60 flex items-center justify-center shadow-lg transition cursor-pointer"
              title="Xem video dự án"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
            <a
              href="#gia-tri-vang"
              className="w-12 h-12 rounded-full bg-[#c89a3e]/90 hover:bg-[#c89a3e] text-white border-2 border-white/60 flex flex-col items-center justify-center shadow-lg transition text-[10px] font-extrabold"
              title="Trải nghiệm 360 độ"
            >
              <Compass className="w-4 h-4" />
              <span className="leading-none mt-0.5">360°</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. "TỔNG QUAN SUNSHINE CITY SAIGON" (WHITE SECTION WITH TABS + OVERLAPPING DARK NAVY CARD) */}
      <section id="tong-quan" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wider text-[#182338]">
              <span className="font-bold text-[#c89a3e]">TỔNG QUAN</span>{" "}
              {data.business.name}
            </h2>

            {/* Two Tabs: GIỚI THIỆU | CHỦ ĐẦU TƯ */}
            <div className="flex items-center justify-center gap-6 mt-4 text-xs sm:text-sm font-bold uppercase tracking-wider">
              {(data.overviewTabs || []).map((tab) => {
                const isActive = activeOverviewTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveOverviewTab(tab.id)}
                    className={`pb-1.5 transition cursor-pointer ${
                      isActive
                        ? "text-[#182338] border-b-2 border-[#c89a3e]"
                        : "text-slate-400 hover:text-[#182338]"
                    }`}
                  >
                    {tab.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Overlapping Split Layout */}
          {currentOverview && (
            <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center mt-8">
              {/* Left Architectural Photo */}
              <div className="lg:col-span-7 relative z-10">
                <div className="aspect-[16/10] overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img
                    src={currentOverview.image}
                    alt={currentOverview.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Dark Navy Box (#182338) */}
              <div className="lg:col-span-5 lg:-ml-12 bg-[#182338] text-white p-8 sm:p-12 lg:pl-20 shadow-2xl relative min-h-[320px] flex flex-col justify-center">
                <div className="border-l-2 border-[#c89a3e] pl-4 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white">
                    {currentOverview.heading}
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {currentOverview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div>
                  <a
                    href="#lien-he"
                    className="text-xs font-bold text-[#c89a3e] hover:underline uppercase tracking-wider"
                  >
                    Xem thêm
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. "VỊ TRÍ TRUNG TÂM ĐẮT GIÁ" (DARK NAVY #182338 SECTION + MAP + 6 TRAVEL-TIME COLUMNS) */}
      <section id="vi-tri" className="py-16 lg:py-24 bg-[#182338] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <div className="border-l-2 border-[#c89a3e] pl-4 mb-6">
                <span className="block text-xl sm:text-2xl font-light uppercase tracking-wider text-white">
                  VỊ TRÍ
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#c89a3e] mt-0.5">
                  TRUNG TÂM ĐẮT GIÁ
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {(data.locationParagraphs || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Location Connectivity Map */}
            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-[#c89a3e]/40 aspect-[4/3] bg-slate-800">
                <img
                  src={data.locationMapImage}
                  alt="Bản đồ vị trí trung tâm Quận 7"
                  className="w-full h-full object-cover"
                />
                {/* Simulated Gold Travel Time Pins */}
                <div className="absolute top-6 left-1/3 w-9 h-9 rounded-full bg-[#182338] border-2 border-[#c89a3e] text-[#c89a3e] text-[10px] font-extrabold flex items-center justify-center shadow-lg">
                  15&apos;
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded bg-[#c89a3e] text-[#182338] text-[10px] font-black uppercase tracking-wider shadow-xl">
                  {data.business.name}
                </div>
                <div className="absolute bottom-8 right-1/4 w-9 h-9 rounded-full bg-[#182338] border-2 border-[#c89a3e] text-[#c89a3e] text-[10px] font-extrabold flex items-center justify-center shadow-lg">
                  5&apos;
                </div>
              </div>
            </div>
          </div>

          {/* 6 Travel-Time Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 border-t border-slate-700/80">
            {(data.travelColumns || []).map((col) => (
              <div key={col.id}>
                <div className="text-sm font-bold text-[#c89a3e] pb-2 mb-3 border-b border-slate-700">
                  {col.timeLabel}
                </div>
                <ul className="space-y-2 text-[11px] sm:text-xs text-slate-300 leading-snug">
                  {col.places.map((pl, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#c89a3e] font-bold">•</span>
                      <span>{pl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "GIÁ TRỊ VÀNG CỦA SUNSHINE CITY SAIGON" (AERIAL BACKGROUND + GOLD RIBBON + FROSTED CARD) */}
      <section
        id="gia-tri-vang"
        className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-slate-900 py-16"
      >
        <img
          src={
            currentGoldenSlide?.image ||
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85"
          }
          alt={currentGoldenSlide?.title || "Giá trị vàng"}
          className="absolute inset-0 w-full h-full object-cover transition duration-700"
        />
        <div className="absolute inset-0 bg-[#0f172a]/55" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Gold Ribbon Title Box */}
          <div className="inline-block bg-[#c89a3e]/95 text-white px-7 py-4 shadow-xl mb-0">
            <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wider">
              GIÁ TRỊ VÀNG CỦA {data.business.name}
            </h2>
          </div>

          {/* Dark Frosted Card */}
          {currentGoldenSlide && (
            <div className="bg-[#111a2e]/90 backdrop-blur-md text-white p-7 sm:p-10 max-w-md border-l-4 border-[#c89a3e] shadow-2xl ml-0 sm:ml-10">
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#e5b84b] mb-3">
                {currentGoldenSlide.title}
              </h3>
              <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed mb-6">
                {currentGoldenSlide.description}
              </p>

              {/* Interactive Slide Dots */}
              <div className="flex items-center gap-2.5">
                {(data.goldenValueSlides || []).map((sl, idx) => (
                  <button
                    key={sl.id}
                    type="button"
                    onClick={() => setActiveValueIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${
                      activeValueIndex === idx
                        ? "bg-white scale-125"
                        : "border border-white/70 bg-transparent hover:bg-white/50"
                    }`}
                    aria-label={sl.title}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. "CHUỖI TIỆN ÍCH ĐỈNH CAO" (DARK NAVY #182338 SPLIT SECTION: LEFT 16-ITEM LIST + RIGHT SPA PHOTO) */}
      <section id="tien-ich" className="py-16 lg:py-24 bg-[#182338] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Title + Intro + 2-Column Amenity Bullets */}
            <div className="lg:col-span-6">
              <div className="border-l-2 border-[#c89a3e] pl-4 mb-5">
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wider">
                  <span className="font-bold text-[#c89a3e]">CHUỖI TIỆN ÍCH</span>{" "}
                  ĐỈNH CAO
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-7">
                {data.amenitiesIntro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-200">
                <ul className="space-y-2.5">
                  {(data.amenitiesLeft || []).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c89a3e] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2.5">
                  {(data.amenitiesRight || []).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c89a3e] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Luxury Wellness & Spa Image */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden shadow-2xl border-2 border-[#c89a3e]/30">
                <img
                  src={data.amenitiesImage}
                  alt="Chuỗi tiện ích đỉnh cao"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "HỆ SINH THÁI SUNSHINE" (WHITE SECTION: TOP SPLIT TECH + BOTTOM 4-PHOTO STRIP) */}
      <section id="he-sinh-thai" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-8">
            {/* Left Smart Ecosystem Graphic Card */}
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#1e3a8a] text-white flex flex-col items-center justify-center p-8 shadow-lg">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <Globe className="w-20 h-20 text-sky-200 mb-3 stroke-[1.25]" />
              <span className="text-lg sm:text-xl font-black uppercase tracking-[0.25em] text-white">
                SUNSHINE GROUP
              </span>
              <span className="text-[11px] uppercase tracking-widest text-sky-200 mt-1">
                SMART LIVING ECOSYSTEM 4.0
              </span>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6">
              <div className="border-l-2 border-[#c89a3e] pl-4 mb-4">
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wider text-[#182338]">
                  <span className="font-bold text-[#c89a3e]">HỆ SINH THÁI</span>{" "}
                  SUNSHINE
                </h2>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {(data.ecosystemParagraphs || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom 4-Photo Smart Card & App Strip with Gold Bottom Border */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-b-4 border-[#c89a3e] pb-1">
            {(data.ecosystemGallery || []).map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[16/10] overflow-hidden bg-slate-100"
              >
                <img
                  src={imgUrl}
                  alt={`Ứng dụng Smart Home ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "TIN TỨC SUNSHINE CITY SAIGON" (3 NEWS CARDS WITH GOLD DATE BADGE "25 TH12") */}
      <section id="tin-tuc" className="py-14 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wider text-[#182338]">
              <span className="font-bold text-[#c89a3e]">TIN TỨC</span>{" "}
              {data.business.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).slice(0, 3).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* Vertical Gold Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#c89a3e] text-white px-2.5 py-1.5 text-center leading-tight shadow">
                    <span className="block text-xs font-black">
                      {post.date.split(" ")[0] || "25"}
                    </span>
                    <span className="block text-[9px] uppercase">
                      {post.date.split(" ")[1] || "TH12"}
                    </span>
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#182338] group-hover:text-[#c89a3e] transition leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-1">
                  {post.excerpt}
                </p>
                <div>
                  <a
                    href="#lien-he"
                    className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#c89a3e] border-b border-slate-300 pb-0.5"
                  >
                    ĐỌC TIẾP
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GOLD 4-ICON QUICK-ACTION BAR (#c89a3e) */}
      <div className="bg-[#c89a3e] text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 items-center text-center">
            <a
              href="#lien-he"
              className="flex flex-col items-center gap-2 hover:opacity-85 transition"
            >
              <FileText className="w-6 h-6 stroke-[1.5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                TÀI LIỆU BÁN HÀNG
              </span>
            </a>

            <a
              href="#lien-he"
              className="flex flex-col items-center gap-2 hover:opacity-85 transition"
            >
              <Hammer className="w-6 h-6 stroke-[1.5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                TIẾN ĐỘ THI CÔNG
              </span>
            </a>

            {/* Center Tower Emblem */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
              <Building2 className="w-9 h-9 text-white mb-1" />
              <span className="text-[10px] font-serif font-bold uppercase tracking-widest">
                {data.business.name}
              </span>
            </div>

            <a
              href="#lien-he"
              className="flex flex-col items-center gap-2 hover:opacity-85 transition"
            >
              <Gift className="w-6 h-6 stroke-[1.5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                CHÍNH SÁCH BÁN HÀNG
              </span>
            </a>

            <a
              href="#lien-he"
              className="flex flex-col items-center gap-2 hover:opacity-85 transition"
            >
              <Network className="w-6 h-6 stroke-[1.5]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                ĐẠI LÝ PHÂN PHỐI
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 9. DARK NAVY 3-COLUMN FOOTER (#182338) */}
      <footer id="lien-he" className="bg-[#182338] text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-slate-700/80 divide-y lg:divide-y-0 lg:divide-x divide-slate-700/80">
            {/* Col 1: ĐĂNG KÝ NHẬN TIN */}
            <div className="p-6 sm:p-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                ĐĂNG KÝ NHẬN TIN
              </h4>
              {formSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-bold text-emerald-200">
                    Đăng ký thành công! Bộ tài liệu mặt bằng & bảng giá sẽ được gửi tới quý khách.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên"
                    value={leadForm.fullName}
                    onChange={(e) =>
                      setLeadForm({ ...leadForm, fullName: e.target.value })
                    }
                    className="w-full bg-white text-slate-900 px-3 py-2 text-xs rounded-sm focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={leadForm.email}
                    onChange={(e) =>
                      setLeadForm({ ...leadForm, email: e.target.value })
                    }
                    className="w-full bg-white text-slate-900 px-3 py-2 text-xs rounded-sm focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại"
                    value={leadForm.phone}
                    onChange={(e) =>
                      setLeadForm({ ...leadForm, phone: e.target.value })
                    }
                    className="w-full bg-white text-slate-900 px-3 py-2 text-xs rounded-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#c89a3e] hover:bg-[#b5872e] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm transition cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>

            {/* Col 2: LIÊN HỆ */}
            <div className="p-6 sm:p-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                LIÊN HỆ
              </h4>
              <p className="text-xs font-bold text-[#c89a3e] mb-3">
                Tập đoàn {data.business.name}
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c89a3e] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c89a3e] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-[#c89a3e]"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#c89a3e] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-[#c89a3e]"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: LƯU Ý */}
            <div className="p-6 sm:p-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                LƯU Ý
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {data.legalNote}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-[#182338] border border-[#c89a3e] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b border-slate-700 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c89a3e]">
                Phim Giới Thiệu Kiến Trúc {data.business.name}
              </span>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-center text-white space-y-4">
              <img
                src={data.hero.backgroundImage}
                alt={data.business.name}
                className="w-full h-64 object-cover rounded"
              />
              <p className="text-xs sm:text-sm text-slate-300">
                Liên hệ Phòng Kinh Doanh <strong className="text-[#c89a3e]">{primaryPhone}</strong> để nhận lịch tham quan nhà mẫu thực tế và sa bàn ảo VR 360°.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
