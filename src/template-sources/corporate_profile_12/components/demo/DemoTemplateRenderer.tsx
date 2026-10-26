"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile12DefaultData,
  type CorporateProfile12Data
} from "../../data/mockData";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  User,
  Calendar,
  Compass,
  Tent,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Star,
  Play,
  Headphones,
  Globe,
  Sparkles,
  Users,
  Plus
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: CorporateProfile12Data = adaptClonedTemplateData(
    corporateProfile12DefaultData,
    incomingData || customData
  );

  const [activeAdvTabId, setActiveAdvTabId] = useState<string>(
    data.adventureTabs?.[0]?.id || "adv-1"
  );
  const [guestCount, setGuestCount] = useState<string>("2 khách");
  const [bookingAlert, setBookingAlert] = useState<string>("");

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const activeAdvTab =
    data.adventureTabs.find((t) => t.id === activeAdvTabId) ||
    data.adventureTabs[0];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#62a944] selection:text-white">
      {/* 1. TOP LEAF-GREEN BAR (`#62a944`) */}
      <div className="bg-[#62a944] text-white text-[11px]">
        <div className="max-w-6xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6 truncate">
            <span className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{data.business.address}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{primaryEmail}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#lien-he"
              className="hidden md:inline-block font-extrabold uppercase tracking-wider hover:underline"
            >
              ĐẶT TOUR NGAY
            </a>
            <div className="flex items-center gap-2.5 text-white/90">
              <a href="#lien-he" className="hover:text-amber-200 font-bold">
                f
              </a>
              <a href="#lien-he" className="hover:text-amber-200 font-bold">
                𝕏
              </a>
              <a href="#lien-he" className="hover:text-amber-200 font-bold">
                ◎
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#62a944] to-amber-400 text-white flex items-center justify-center shadow-sm">
              <Tent className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-black text-slate-900">
                {data.business.name}
              </div>
              <div className="text-[10px] font-semibold text-[#62a944]">
                Du lịch & Lữ hành
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-600">
            <a href="#" className="text-[#62a944]">
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#62a944] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#cac-dia-diem"
              className="hover:text-[#62a944] transition-colors"
            >
              Tours ▾
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#62a944] transition-colors"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#62a944] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Search & User */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="p-2 text-slate-500 hover:text-[#62a944]"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#62a944] hover:text-white flex items-center justify-center text-slate-600 transition-colors"
            >
              <User className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO BANNER + OVERLAPPING 5-FIELD TOUR SEARCH BAR */}
      <section className="relative">
        <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto px-4">
            <div className="max-w-xl space-y-5">
              <span className="inline-block px-3.5 py-1 rounded bg-[#f59e0b] text-white text-xs font-extrabold -rotate-3 shadow">
                {data.hero.eyebrow || "Du lịch & Lữ hành"}
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight">
                {data.hero.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed max-w-lg">
                {data.hero.subtitle}
              </p>

              <div className="pt-1">
                <a
                  href={data.hero.ctaLink || "#cac-dia-diem"}
                  className="inline-block px-6 py-3 rounded-lg bg-[#62a944] hover:bg-[#519037] text-white text-xs font-extrabold shadow-lg transition-colors"
                >
                  {data.hero.ctaText || "Bắt đầu ngay"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping 5-Column Search Bar */}
        <div className="max-w-5xl mx-auto px-4 relative z-20 -mt-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBookingAlert(
                "Đã tìm thấy 12 hành trình phù hợp! Đội ngũ tư vấn sẵn sàng hỗ trợ."
              );
            }}
            className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center"
          >
            <div className="flex items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
              <MapPin className="w-4 h-4 text-[#62a944] shrink-0" />
              <div className="w-full">
                <div className="text-[10px] text-slate-400">Địa điểm</div>
                <select
                  aria-label="Chọn địa điểm"
                  className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none"
                >
                  <option>Chọn địa điểm</option>
                  <option>Tây Bắc & Sapa</option>
                  <option>Vịnh Hạ Long</option>
                  <option>Thụy Sĩ & Châu Âu</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-slate-100">
              <Compass className="w-4 h-4 text-[#62a944] shrink-0" />
              <div className="w-full">
                <div className="text-[10px] text-slate-400">Loại tour</div>
                <select
                  aria-label="Chọn loại tour"
                  className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none"
                >
                  <option>Chọn loại tour</option>
                  <option>Cắm trại & Leo núi</option>
                  <option>Nghỉ dưỡng 5 sao</option>
                  <option>Tour MICE Doanh nghiệp</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
              <Calendar className="w-4 h-4 text-[#62a944] shrink-0" />
              <div className="w-full">
                <div className="text-[10px] text-slate-400">Từ ngày</div>
                <input
                  type="text"
                  defaultValue="Chọn ngày"
                  className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-1.5">
              <Users className="w-4 h-4 text-[#62a944] shrink-0" />
              <div className="w-full">
                <div className="text-[10px] text-slate-400">Khách</div>
                <input
                  type="text"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#62a944] hover:bg-[#519037] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Tìm kiếm</span>
            </button>
          </form>
          {bookingAlert && (
            <div className="mt-2 text-center text-xs font-bold text-[#62a944]">
              ✓ {bookingAlert}
            </div>
          )}
        </div>
      </section>

      {/* 4. POPULAR ACTIVITIES ("HOẠT ĐỘNG PHỔ BIẾN - Khám phá phiêu lưu") */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded bg-[#eef7ea] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider mb-2">
              HOẠT ĐỘNG PHỔ BIẾN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Khám phá phiêu lưu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.popularActivities.map((act) => (
              <div
                key={act.id}
                className="group relative rounded-2xl overflow-hidden aspect-[3/3.7] shadow-md bg-slate-900"
              >
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl p-3.5 shadow-lg flex items-center justify-between gap-2">
                  <div>
                    <div className="w-5 h-0.5 bg-[#f59e0b] mb-1.5" />
                    <h3 className="text-xs font-extrabold text-slate-900 leading-snug">
                      {act.title}
                    </h3>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-[#62a944] text-white flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION ("DỊCH VỤ CAO CẤP - Du lịch tuyệt vời") */}
      <section id="gioi-thieu" className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Collage + 18 Years Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-tr-[80px] rounded-2xl overflow-hidden shadow-xl aspect-[4/4.3] w-[85%] ml-auto">
                <img
                  src={data.aboutSection.mainImage}
                  alt="Du lịch khám phá"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 left-6 w-12 h-12 rounded-xl bg-[#62a944] text-white flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="absolute bottom-3 left-0 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={data.aboutSection.insetImage}
                  alt="Cắm trại đêm"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-white rounded-xl px-5 py-3 shadow-xl border border-amber-200 flex items-center gap-2.5">
                <span className="text-3xl font-black text-[#62a944]">
                  {data.aboutSection.yearsNumber}
                </span>
                <span className="text-[11px] font-bold text-slate-600 leading-tight">
                  Năm kinh
                  <br />
                  nghiệm
                </span>
              </div>
            </div>

            {/* Right Features */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block px-3 py-1 rounded bg-[#eef7ea] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider">
                DỊCH VỤ CAO CẤP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.business.aboutTitle}
              </h2>

              <div className="space-y-5 pt-2">
                {data.aboutSection.features.map((feat) => (
                  <div key={feat.id} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#eef7ea] text-[#62a944] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DARK FOREST ADVENTURE TABS SECTION ("HOẠT ĐỘNG NỔI BẬT - Cảm giác phiêu lưu") */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-[#1b231e] text-white rounded-3xl p-6 sm:p-12 lg:p-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-[#f59e0b] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                HOẠT ĐỘNG NỔI BẬT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Cảm giác phiêu lưu
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left White Card with 6 Interactive Tabs */}
              <div className="lg:col-span-4 bg-white text-slate-800 rounded-2xl p-4 space-y-2 shadow-xl">
                {data.adventureTabs.map((tab) => {
                  const isActive = tab.id === activeAdvTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveAdvTabId(tab.id)}
                      className={`w-full px-4 py-3 rounded-xl text-left text-xs font-extrabold flex items-center gap-3 transition-colors ${
                        isActive
                          ? "bg-[#f59e0b] text-white shadow"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Tent
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? "text-white" : "text-[#62a944]"
                        }`}
                      />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Center Details + Progress Bars */}
              <div className="lg:col-span-4 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#62a944]/20 text-[#62a944] flex items-center justify-center">
                  <Tent className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                  {activeAdvTab.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeAdvTab.description}
                </p>

                {/* Progress Bars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Khách hàng hài lòng</span>
                      <span>{activeAdvTab.satisfiedRate}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#62a944]"
                        style={{ width: `${activeAdvTab.satisfiedRate}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Đánh giá tích cực</span>
                      <span>{activeAdvTab.positiveRate}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#62a944]"
                        style={{ width: `${activeAdvTab.positiveRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Tent Image */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/4.5] shadow-xl">
                  <img
                    src={activeAdvTab.image}
                    alt={activeAdvTab.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Green CTA Strip */}
            <div className="mt-12 bg-[#62a944] rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-100">
                    Phiêu lưu độc đáo
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    Sẵn sàng phiêu lưu và tận hưởng thiên nhiên
                  </div>
                </div>
              </div>

              <a
                href="#cac-dia-diem"
                className="px-5 py-2.5 rounded-lg bg-white text-slate-900 hover:bg-amber-400 text-xs font-extrabold transition-colors"
              >
                Khám phá ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERESTING PLACES & 6 SERVICE HIGHLIGHTS */}
      <section id="cac-dia-diem" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded bg-[#eef7ea] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider mb-2">
              TRẢI NGHIỆM TUYỆT VỜI
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Các địa điểm thú vị
            </h2>
          </div>

          {/* 4 Tour Spot Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {data.tourSpots.map((spot) => (
              <div
                key={spot.id}
                className="group relative rounded-2xl overflow-hidden aspect-[3/3.8] shadow-md bg-slate-900 text-white"
              >
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2 py-0.5 rounded bg-sky-500 text-white text-[9px] font-extrabold uppercase">
                    {spot.badge}
                  </span>
                  {spot.discountBadge && (
                    <span className="px-2 py-0.5 rounded bg-[#f59e0b] text-white text-[9px] font-extrabold uppercase">
                      {spot.discountBadge}
                    </span>
                  )}
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: spot.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <h3 className="text-xs font-extrabold leading-snug line-clamp-2">
                    {spot.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] text-slate-300">
                    <MapPin className="w-3 h-3 text-[#62a944] shrink-0" />
                    <span className="truncate">{spot.location}</span>
                  </div>
                  <div className="text-[11px] pt-1">
                    Từ{" "}
                    <strong className="text-[#f59e0b]">{spot.price}</strong>
                    {spot.oldPrice && (
                      <span className="text-slate-400 line-through ml-1 text-[10px]">
                        {spot.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2x3 Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.serviceHighlights.map((sh, idx) => (
              <div
                key={sh.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eef7ea] text-[#62a944] flex items-center justify-center shrink-0">
                  {idx % 3 === 0 ? (
                    <Compass className="w-5 h-5" />
                  ) : idx % 3 === 1 ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <Headphones className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-900 mb-1">
                    {sh.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {sh.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FULL-WIDTH DARK FOREST VIDEO & 2x2 ADVENTURE GRID */}
      <section className="relative py-20 bg-[#141c17] text-white overflow-hidden">
        <img
          src={data.videoBanner.backgroundImage}
          alt={data.videoBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Video CTA */}
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#62a944] text-white flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 fill-white" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#f59e0b]">
                {data.videoBanner.eyebrow}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug">
                {data.videoBanner.title}
              </h2>
              <div className="pt-2">
                <a
                  href="#lien-he"
                  className="inline-block px-6 py-2.5 rounded-lg bg-[#62a944] hover:bg-[#519037] text-white text-xs font-extrabold shadow"
                >
                  {data.videoBanner.ctaText}
                </a>
              </div>
            </div>

            {/* Right 2x2 Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {data.videoBanner.categories.map((cat) => (
                <div
                  key={cat}
                  className="border border-white/15 bg-black/35 backdrop-blur-sm rounded-xl p-6 text-center space-y-2 hover:border-[#62a944] transition-colors"
                >
                  <Tent className="w-6 h-6 text-[#62a944] mx-auto" />
                  <div className="text-xs font-extrabold text-white leading-snug">
                    {cat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FEATURED DESTINATIONS BENTO GRID ("ĐIỂM ĐẾN NỔI BẬT") */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded bg-[#eef7ea] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider mb-2">
              KHUNG CẢNH TUYỆT ĐẸP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Điểm đến nổi bật
            </h2>
          </div>

          {/* Row 1 (3 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            {data.destinations.slice(0, 3).map((dst, idx) => (
              <div
                key={dst.id}
                className={`${
                  idx === 1 ? "md:col-span-6" : "md:col-span-3"
                } group relative rounded-2xl overflow-hidden h-56 bg-slate-900 text-white`}
              >
                <img
                  src={dst.image}
                  alt={dst.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-[#f59e0b] text-white text-[9px] font-extrabold uppercase">
                  {dst.tourCount}
                </span>
                <div className="absolute bottom-3 left-4">
                  <div className="text-[10px] text-[#62a944] font-bold">
                    Du lịch
                  </div>
                  <div className="text-base font-extrabold">{dst.country}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (3 destination cards + 1 green promo card) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.destinations.slice(3, 6).map((dst) => (
              <div
                key={dst.id}
                className="group relative rounded-2xl overflow-hidden h-56 bg-slate-900 text-white"
              >
                <img
                  src={dst.image}
                  alt={dst.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-[#f59e0b] text-white text-[9px] font-extrabold uppercase">
                  {dst.tourCount}
                </span>
                <div className="absolute bottom-3 left-4">
                  <div className="text-[10px] text-[#62a944] font-bold">
                    Du lịch
                  </div>
                  <div className="text-base font-extrabold">{dst.country}</div>
                </div>
              </div>
            ))}

            {/* Green Promo Card */}
            <div className="rounded-2xl bg-[#62a944] text-white p-6 flex flex-col justify-between h-56 shadow-md">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#f59e0b] text-white text-[9px] font-extrabold uppercase mb-3">
                  ƯU ĐÃI ĐẶC BIỆT TỚI 50%
                </span>
                <h3 className="text-base font-extrabold leading-snug">
                  Khi đăng ký tour với số lượng lớn
                </h3>
              </div>
              <div>
                <a
                  href="#lien-he"
                  className="inline-block px-4 py-2 rounded-lg bg-white text-slate-900 text-xs font-extrabold hover:bg-amber-400 transition-colors"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ACHIEVEMENTS STATS ("THÀNH TỰU ĐẠT ĐƯỢC") */}
      <section className="py-16 bg-[#f7faf6]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded bg-[#e5f3df] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider mb-2">
              Chuyến đi thú vị
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Thành tựu đạt được
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.stats || []).map((st, idx) => (
              <div
                key={st.id}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 space-y-2"
              >
                <div className="w-14 h-14 rounded-full bg-[#eef7ea] text-[#62a944] mx-auto flex items-center justify-center">
                  {idx === 0 ? (
                    <Users className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Tent className="w-6 h-6" />
                  ) : idx === 2 ? (
                    <Award className="w-6 h-6" />
                  ) : (
                    <Globe className="w-6 h-6" />
                  )}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {st.number}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {st.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CUSTOMER TESTIMONIALS ("ĐÁNH GIÁ TÍCH CỰC TỪ KHÁCH HÀNG") */}
      <section className="py-16 bg-[#f7faf6]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-block px-3 py-1 rounded bg-[#e5f3df] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider">
                CHẤT LƯỢNG DỊCH VỤ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Đánh giá tích cực từ khách hàng
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Đánh giá tích cực từ khách hàng là động lực lớn để chúng tôi
                tiếp tục cung cấp dịch vụ du lịch tốt nhất. Chúng tôi luôn cố
                gắng không ngừng nâng cao chất lượng dịch vụ và mang đến những
                trải nghiệm tuyệt vời cho mọi khách hàng.
              </p>
            </div>

            <div className="lg:col-span-7">
              {(data.testimonials || []).slice(0, 1).map((rv) => (
                <div key={rv.id} className="space-y-4">
                  <div className="relative bg-white rounded-2xl p-7 shadow-md border border-slate-100">
                    <span className="absolute -top-4 right-6 w-12 h-12 rounded-full bg-[#62a944] text-white flex items-center justify-center font-black text-lg shadow">
                      ❞
                    </span>
                    <div className="flex items-center gap-1 text-[#62a944] mb-3">
                      {Array.from({ length: rv.rating || 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#62a944] text-[#62a944]"
                        />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm italic font-semibold text-slate-700 leading-relaxed">
                      {rv.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={rv.avatar}
                      alt={rv.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#62a944]"
                    />
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">
                        {rv.author}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {rv.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. LATEST NEWS ("THÔNG TIN ĐỊA ĐIỂM HẤP DẪN VÀ THÚ VỊ") */}
      <section id="tin-tuc" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#eef7ea] text-[#62a944] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                TIN TỨC MỚI NHẤT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 max-w-md leading-snug">
                Thông tin địa điểm hấp dẫn và thú vị
              </h2>
            </div>

            <a
              href="#lien-he"
              className="px-5 py-2.5 rounded-lg bg-[#62a944] hover:bg-[#519037] text-white text-xs font-extrabold transition-colors"
            >
              Xem tất cả
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => {
              const [day, month] = post.date.split(" ");
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-[#62a944] text-white rounded px-2 py-1 text-center leading-tight shadow">
                        <div className="text-xs font-extrabold">
                          {day || "19"}
                        </div>
                        <div className="text-[9px]">{month || "Th10"}</div>
                      </div>
                      <span className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded bg-[#f59e0b] text-white text-[10px] font-bold">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="text-[10px] text-slate-400">
                        {data.business.name} • 0 Bình luận
                      </div>
                      <h3 className="text-sm font-extrabold text-slate-900 hover:text-[#62a944] line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <a
                      href="#lien-he"
                      className="text-xs font-bold text-slate-600 hover:text-[#62a944]"
                    >
                      Xem thêm →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. 5-IMAGE ADVENTURE GALLERY STRIP */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {data.galleryStrip.map((imgUrl, idx) => {
            const isCenter = idx === 2;
            return (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden aspect-square shadow-md bg-slate-900"
              >
                <img
                  src={imgUrl}
                  alt={`Khám phá thiên nhiên ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                {isCenter && (
                  <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center p-3 text-white">
                    <span className="w-8 h-8 rounded-full bg-[#f59e0b] text-white flex items-center justify-center mb-2">
                      <Plus className="w-4 h-4" />
                    </span>
                    <div className="text-xs font-extrabold">
                      Khám phá thung lũng
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-amber-300">
                      PHIÊU LƯU
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. DARK FOREST FOOTER (`#181f1a`) */}
      <footer id="lien-he" className="bg-[#181f1a] text-slate-300 pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Top 2-Column CTA Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 border-b border-white/10">
            <div className="flex items-center justify-between gap-4 bg-white/5 rounded-2xl p-5">
              <div className="flex items-center gap-3.5">
                <Headphones className="w-8 h-8 text-[#62a944] shrink-0" />
                <div className="text-sm font-extrabold text-white">
                  Bạn cần hỗ trợ gì cho chuyến du lịch ?
                </div>
              </div>
              <a
                href={`tel:${primaryPhone}`}
                className="w-9 h-9 rounded-full bg-[#62a944] text-white flex items-center justify-center shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 bg-white/5 rounded-2xl p-5">
              <div className="flex items-center gap-3.5">
                <Compass className="w-8 h-8 text-[#f59e0b] shrink-0" />
                <div className="text-sm font-extrabold text-white">
                  Sẵn sàng để bắt đầu kỳ nghỉ tuyệt vời !
                </div>
              </div>
              <a
                href={`tel:${primaryPhone}`}
                className="w-9 h-9 rounded-full bg-[#f59e0b] text-white flex items-center justify-center shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-white/10 text-xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#62a944] text-white flex items-center justify-center">
                  <Tent className="w-4 h-4" />
                </div>
                <span className="text-base font-black text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-2">
                {["𝕏", "f", "◎", "in"].map((s) => (
                  <a
                    key={s}
                    href="#lien-he"
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#62a944] text-white flex items-center justify-center text-[11px]"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-3">Liên kết</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Về chúng tôi</li>
                <li>Cộng đồng du lịch</li>
                <li>Hợp tác doanh nghiệp</li>
                <li>Chính sách bảo mật</li>
                <li>Liên hệ</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-3">Bản tin ↗</h4>
              <p className="text-slate-400 leading-relaxed">
                Đăng ký ngay để nhận bản tin ưu đãi tour mới nhất.
              </p>
            </div>

            <div>
              <h4 className="text-white font-extrabold mb-3">Liên hệ</h4>
              <ul className="space-y-2.5 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#62a944] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500">
                      Số điện thoại
                    </div>
                    <div className="text-white font-bold">{primaryPhone}</div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#62a944] shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500">Email</div>
                    <div className="text-white font-bold">{primaryEmail}</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#62a944] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-slate-500">Địa chỉ</div>
                    <div className="text-white font-bold">
                      {data.business.address}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-400">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
