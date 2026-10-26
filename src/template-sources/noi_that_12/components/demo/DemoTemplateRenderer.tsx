"use client";

import React, { useState } from "react";
import {
  Calendar,
  Search,
  Check,
  ArrowRight,
  Star,
  BedDouble,
  Users,
  Award,
  Utensils,
  Car,
  Waves,
  ShieldCheck,
  Plane,
  Compass,
  MapPin,
  Mail,
  Phone,
  Send,
  ChevronDown,
  Sparkles,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat12DefaultData,
  type NoiThat12Data
} from "@/template-sources/noi_that_12/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NoiThat12Data = adaptClonedTemplateData(
    noiThat12DefaultData,
    incomingData
  );

  const collage = data.aboutCollageImages || noiThat12DefaultData.aboutCollageImages;
  const suites = data.featuredSuites || noiThat12DefaultData.featuredSuites;
  const amenities = data.amenitiesGrid || noiThat12DefaultData.amenitiesGrid;
  const achievement =
    data.achievementSection || noiThat12DefaultData.achievementSection;
  const stats = data.stats || noiThat12DefaultData.stats || [];
  const diverseServices =
    data.diverseServices || noiThat12DefaultData.diverseServices;
  const expCollage =
    data.experienceCollage || noiThat12DefaultData.experienceCollage;
  const gallery = data.hotelGallery || noiThat12DefaultData.hotelGallery;
  const nightBanner =
    data.nightPromoBanner || noiThat12DefaultData.nightPromoBanner;
  const reviews = data.testimonials || noiThat12DefaultData.testimonials || [];
  const newsList = data.news || noiThat12DefaultData.news || [];

  const [checkInDate, setCheckInDate] = useState("2026-05-15");
  const [checkOutDate, setCheckOutDate] = useState("2026-05-18");
  const [guestsCount, setGuestsCount] = useState("2 Khách");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomTitle, setSelectedRoomTitle] = useState("Master Suit Room");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const openBookingModal = (roomTitle?: string) => {
    if (roomTitle) setSelectedRoomTitle(roomTitle);
    setBookingSuccess(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f5a623] selection:text-white">
      {/* =====================================================================
          1. TOP WHITE NAVIGATION HEADER
         ===================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left Golden Geometric Logo */}
          <a href="#trang-chu" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg border-2 border-[#f5a623] flex items-center justify-center text-[#f5a623] rotate-45">
              <Sparkles className="w-4 h-4 -rotate-45" />
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.16em] uppercase text-slate-800 ml-1">
              {data.business.name}
            </span>
          </a>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-600">
            <a href="#trang-chu" className="text-[#f5a623] font-semibold">
              Trang chủ
            </a>
            <a href="#gioi-thieu" className="hover:text-[#f5a623] transition">
              Giới thiệu
            </a>
            <a
              href="#phong-nghi"
              className="hover:text-[#f5a623] flex items-center gap-1 transition"
            >
              Phòng nghỉ <ChevronDown className="w-3 h-3" />
            </a>
            <a
              href="#dich-vu"
              className="hover:text-[#f5a623] flex items-center gap-1 transition"
            >
              Dịch vụ <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#tin-tuc" className="hover:text-[#f5a623] transition">
              Tin tức
            </a>
            <a href="#lien-he" className="hover:text-[#f5a623] transition">
              Liên hệ
            </a>
          </nav>

          {/* Right Outlined Amber Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="border border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-xs transition cursor-pointer"
            >
              + {data.hero.ctaText || "ĐẶT PHÒNG"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-1.5 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-medium">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Giới thiệu
            </a>
            <a
              href="#phong-nghi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Phòng nghỉ Cao cấp
            </a>
            <a
              href="#tien-ich"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tiện ích Vượt trội
            </a>
            <a
              href="#hinh-anh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Hình ảnh Khách sạn
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Tin tức &amp; Sự kiện
            </a>
          </div>
        )}
      </header>

      {/* =====================================================================
          2. LUXURY RESORT HERO + CHECK-IN SEARCH BAR
         ===================================================================== */}
      <section
        id="trang-chu"
        className="relative min-h-[520px] md:min-h-[600px] bg-slate-900 text-white flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 pt-24 pb-10">
          <p className="text-sm sm:text-base font-medium tracking-[0.22em] uppercase text-white/90 mb-2">
            {data.hero.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.14em] uppercase text-white leading-none">
            {data.hero.title}
          </h1>
          <p className="text-[11px] tracking-[0.28em] uppercase text-amber-300 mt-3">
            {data.hero.subtitle} ⚜
          </p>
        </div>

        {/* Horizontal Check-in Bar */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 pb-12">
          <div className="bg-white text-slate-800 rounded-xs shadow-xl grid grid-cols-1 md:grid-cols-12 items-stretch overflow-hidden">
            <div className="md:col-span-4 px-5 py-3.5 border-b md:border-b-0 md:border-r border-slate-100 flex items-center justify-between">
              <div className="w-full">
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  NGÀY NHẬN PHÒNG
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 mt-0.5 focus:outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-4 px-5 py-3.5 border-b md:border-b-0 md:border-r border-slate-100 flex items-center justify-between">
              <div className="w-full">
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  NGÀY TRẢ PHÒNG
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 mt-0.5 focus:outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-3 px-5 py-3.5 flex items-center justify-between">
              <div className="w-full">
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  KHÁCH
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 mt-0.5 focus:outline-none bg-transparent"
                >
                  <option>1 Khách</option>
                  <option>2 Khách</option>
                  <option>4 Khách (Gia đình)</option>
                  <option>6+ Khách (Biệt thự)</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openBookingModal()}
              aria-label="Tìm phòng"
              className="md:col-span-1 bg-[#f5a623] hover:bg-[#d98e16] text-white flex items-center justify-center py-4 md:py-0 transition cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. GIỚI THIỆU — STAGGERED 2x2 BEDROOM COLLAGE + INFO
         ===================================================================== */}
      <section id="gioi-thieu" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Staggered 2x2 Bedroom Photo Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 items-center">
            <div className="space-y-3.5">
              <img
                src={collage[0]}
                alt="Nội thất phòng ngủ 1"
                className="w-36 h-28 sm:w-44 sm:h-36 ml-auto object-cover rounded-xl shadow-sm"
              />
              <img
                src={collage[2]}
                alt="Nội thất phòng ngủ 3"
                className="w-full h-44 sm:h-52 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-3.5 pt-6">
              <img
                src={collage[1]}
                alt="Nội thất phòng ngủ 2"
                className="w-full h-44 sm:h-52 object-cover rounded-xl shadow-md"
              />
              <img
                src={collage[3]}
                alt="Nội thất phòng ngủ 4"
                className="w-36 h-28 sm:w-44 sm:h-36 mr-auto object-cover rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Right Info Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              GIỚI THIỆU
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 leading-snug">
              {data.business.aboutTitle}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.business.aboutText[0]}
            </p>
            <p className="text-xs font-bold uppercase text-[#f5a623]">
              {data.business.highlights?.[0] ||
                "ĐIỂM ĐẾN CHO NHỮNG TRẢI NGHIỆM ĐÁNG NHỚ"}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-50 text-[#f5a623] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="block text-[9px] uppercase text-slate-400">
                    PHÒNG NGHỈ
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Đầy đủ tiện nghi
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-amber-50 text-[#f5a623] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div>
                  <span className="block text-[9px] uppercase text-slate-400">
                    DỊCH VỤ
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    Đa dạng
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#phong-nghi"
                className="inline-flex items-center gap-2 border border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white text-[11px] font-bold uppercase px-5 py-2 rounded-xs transition"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>KHÁM PHÁ</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PHÒNG NGHỈ CAO CẤP (2 Tall Suite Cards Left + Text Right)
         ===================================================================== */}
      <section id="phong-nghi" className="py-16 px-4 bg-[#f8f7f4]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 2 Tall Portrait Room Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {suites.map((suite) => (
              <div
                key={suite.id}
                onClick={() => openBookingModal(suite.title)}
                className="group relative h-[380px] rounded-xl overflow-hidden shadow-md cursor-pointer"
              >
                <img
                  src={suite.image}
                  alt={suite.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <span className="absolute top-3.5 left-3.5 bg-slate-900/80 text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-xs">
                  {suite.badge}
                </span>

                <div className="absolute bottom-5 inset-x-5 text-white space-y-1">
                  <div className="flex items-center gap-0.5 text-[#f5a623]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-[#f5a623]" />
                    ))}
                  </div>
                  <h3 className="text-base font-bold">{suite.title}</h3>
                  <p className="text-sm font-extrabold text-[#f5a623]">
                    {suite.price}
                    <span className="text-[11px] text-white/80 font-normal">
                      /đêm
                    </span>
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-[11px] text-white/80 border-t border-white/15">
                    <span>
                      Diện tích: <strong className="text-white">{suite.area}</strong>
                    </span>
                    <span>
                      Người: <strong className="text-white">{suite.capacity}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              PHÒNG NGHỈ
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800">
              PHÒNG NGHỈ CAO CẤP
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {data.business.aboutText[1]}
            </p>
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 border border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white text-[11px] font-bold uppercase px-5 py-2 rounded-xs transition cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>XEM THÊM</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. TIỆN ÍCH VƯỢT TRỘI (6 Cards 3x2 with Bottom-Right Amber Badge)
         ===================================================================== */}
      <section id="tien-ich" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              DỊCH VỤ VÀ TIỆN NGHI TINH TẾ
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              TIỆN ÍCH VƯỢT TRỘI
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((item) => (
              <div key={item.id} className="group text-center">
                <div className="relative h-44 rounded-xl overflow-hidden shadow-xs mb-2.5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Bottom-Right Golden Corner Badge */}
                  <div className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-lg bg-[#f5a623] text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xs font-bold text-slate-700">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. THÀNH TỰU KHÁCH SẠN — CHỨNG NHẬN VÀ UY TÍN (3 Stat Cards + Pool Image)
         ===================================================================== */}
      <section className="py-16 px-4 bg-[#f9f9fb]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {achievement.eyebrow}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800">
              {achievement.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
              {achievement.description}
            </p>
            <p className="text-xs font-bold text-[#f5a623]">
              {achievement.highlightText}
            </p>

            {/* 3 White Stat Cards */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              {stats.slice(0, 3).map((st, idx) => (
                <div
                  key={st.id}
                  className="bg-white rounded-xl p-4 shadow-xs border border-slate-100"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#f5a623]">
                      {idx === 0 ? (
                        <BedDouble className="w-5 h-5" />
                      ) : idx === 1 ? (
                        <Users className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold text-slate-800">
                      {st.number}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{st.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. DỊCH VỤ ĐA DẠNG VÀ CHẤT LƯỢNG (6 Cards with Arrow Button)
         ===================================================================== */}
      <section id="dich-vu" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              DỊCH VỤ
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              DỊCH VỤ ĐA DẠNG VÀ CHẤT LƯỢNG
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {diverseServices.map((srv) => (
              <div
                key={srv.id}
                onClick={() => openBookingModal(srv.title)}
                className="bg-white rounded-xl overflow-hidden shadow-xs border border-slate-100 hover:shadow-md transition group cursor-pointer"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400">
                      {srv.category}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 mt-0.5">
                      {srv.title}
                    </h3>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-[#f5a623] group-hover:text-white text-slate-500 flex items-center justify-center transition">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. TIỆN NGHI — TRẢI NGHIỆM TUYỆT VỜI (Asymmetric Collage + Golden Box)
         ===================================================================== */}
      <section className="py-16 px-4 bg-[#f9f9fb]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Collage: Tall Photo + Pool Photo + Golden Quote Block (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="h-full min-h-[340px] overflow-hidden rounded-xs">
              <img
                src={expCollage.tallImage}
                alt="Trải nghiệm phòng nghỉ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-44 overflow-hidden rounded-xs">
                <img
                  src={expCollage.topRightImage}
                  alt="Hồ bơi nghỉ dưỡng"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 bg-[#f5a623] text-white p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold leading-snug whitespace-pre-line">
                  {expCollage.quoteTitle}
                </h3>
                <p className="text-[10px] tracking-wider uppercase text-white/90 mt-2">
                  {expCollage.quoteSub}
                </p>
              </div>
            </div>
          </div>

          {/* Right Feature List (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:pl-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {expCollage.eyebrow}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
                {expCollage.title}
              </h2>
            </div>

            <div className="space-y-4">
              {expCollage.features.map((feat, idx) => (
                <div key={feat.id} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#f5a623] flex items-center justify-center shrink-0">
                    {idx === 0 ? (
                      <Utensils className="w-4 h-4" />
                    ) : idx === 1 ? (
                      <Car className="w-4 h-4" />
                    ) : (
                      <Waves className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#hinh-anh"
                className="text-[11px] font-bold uppercase text-slate-700 border-b border-slate-400 pb-0.5 hover:text-[#f5a623] hover:border-[#f5a623] transition"
              >
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. HÌNH ẢNH KHÁCH SẠN (3x2 Rounded Photo Grid)
         ===================================================================== */}
      <section id="hinh-anh" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              KHÁM PHÁ KHÁCH SẠN CHÚNG TÔI
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              HÌNH ẢNH KHÁCH SẠN
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-2xl overflow-hidden shadow-xs group"
              >
                <img
                  src={imgUrl}
                  alt={`Hình ảnh resort ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. DARK NIGHT RESORT BANNER + GOLDEN SHIELD RIBBON ("Dịch vụ phòng 24/7")
         ===================================================================== */}
      <section className="relative bg-slate-900 text-white py-14 px-4 overflow-hidden">
        <img
          src={nightBanner.backgroundImage}
          alt={nightBanner.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold uppercase leading-snug">
              {nightBanner.title}
            </h2>
            <p className="text-[10px] tracking-[0.25em] uppercase text-amber-300">
              {nightBanner.subtitle} ⚜
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              {nightBanner.description}
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="bg-[#f5a623] text-white p-7 rounded-b-3xl shadow-xl w-64 space-y-3 border-t-4 border-amber-200">
              <h3 className="text-lg font-extrabold leading-tight whitespace-pre-line">
                {nightBanner.ribbonTitle}
              </h3>
              <ul className="space-y-2 text-xs">
                {nightBanner.ribbonBullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI (3 Cards, Center Amber Highlighted)
         ===================================================================== */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              ĐÁNH GIÁ
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((rv, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={rv.id}
                  className={`rounded-xl overflow-hidden border text-center flex flex-col justify-between ${
                    isCenter
                      ? "border-[#f5a623] shadow-md"
                      : "border-slate-200 shadow-2xs"
                  }`}
                >
                  <div
                    className={`py-3 px-4 text-xs font-bold ${
                      isCenter
                        ? "bg-[#f5a623] text-white"
                        : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    {rv.author}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-center gap-1 text-[#f5a623]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-[#f5a623]" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {rv.content}
                    </p>
                    {rv.avatar && (
                      <img
                        src={rv.avatar}
                        alt={rv.author}
                        className="w-11 h-11 rounded-full object-cover mx-auto border-2 border-[#f5a623]"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          12. BÀI VIẾT MỚI NHẤT + PARTNER STRIP + DARK FOOTER (#1e2229)
         ===================================================================== */}
      <section id="tin-tuc" className="py-16 px-4 bg-[#f9f9fb]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              TIN TỨC &amp; SỰ KIỆN
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-slate-800 mt-1">
              BÀI VIẾT MỚI NHẤT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs border border-slate-100 flex flex-col"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Circular Amber Date Badge Straddling Bottom Edge */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#f5a623] text-slate-800 flex flex-col items-center justify-center text-[9px] font-bold leading-tight shadow-xs">
                    <span>{post.date.split(" ")[0]}</span>
                    <span className="text-[#f5a623]">
                      {post.date.split(" ")[1] || "Th12"}
                    </span>
                  </div>
                </div>
                <div className="pt-8 pb-6 px-5 text-center">
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Strip */}
      <div className="bg-[#f2f1ed] py-7 px-4 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 items-center justify-items-center text-slate-400 font-bold text-sm tracking-wider">
          <span>✦ LUXURY STAY</span>
          <span>✦ PEAKVIEW</span>
          <span className="text-slate-700">✦ MONA RESORT</span>
          <span>✦ GRAND VILLA</span>
          <span>✦ ARCHI DESIGN</span>
        </div>
      </div>

      {/* Dark Footer (#1e2229) */}
      <footer id="lien-he" className="bg-[#1e2229] text-slate-400 pt-14 pb-8 px-4 text-xs">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <div className="w-7 h-7 rounded-md border border-[#f5a623] flex items-center justify-center text-[#f5a623]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-serif text-lg font-bold tracking-widest uppercase">
                  {data.business.name}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Dù bạn đang tìm kiếm nơi nghỉ dưỡng thư giãn hay cơ sở lưu trú tiện
                nghi cho chuyến công tác, trang web của chúng tôi sẽ giúp bạn dễ dàng
                tìm kiếm, so sánh giá và đặt phòng một cách thuận tiện nhất.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#f5a623]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#phong-nghi" className="hover:text-[#f5a623]">
                    Phòng nghỉ
                  </a>
                </li>
                <li>
                  <a href="#dich-vu" className="hover:text-[#f5a623]">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#f5a623]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#f5a623]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-[11px]">
                <li className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#f5a623] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3 h-3" />
                  </span>
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#f5a623] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-3 h-3" />
                  </span>
                  <span>{primaryEmail}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#f5a623] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3 h-3" />
                  </span>
                  <span>{primaryPhone}</span>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                ĐĂNG KÝ TIN TỨC
              </h4>
              <p className="text-[11px] mb-3">
                Đăng ký ngay để nhận tin tức và cập nhật hàng tuần.
              </p>
              {newsletterDone ? (
                <p className="text-emerald-400 font-semibold text-[11px]">
                  Đã đăng ký nhận bản tin thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white/5 border border-white/15 rounded-xs overflow-hidden p-1"
                >
                  <input
                    type="email"
                    required
                    placeholder="Nhập email..."
                    className="bg-transparent text-white text-[11px] px-2.5 py-1.5 flex-1 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#f5a623] text-white p-2 rounded-xs cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-500">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-slate-300">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-2xl relative border-t-4 border-[#f5a623]">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold uppercase text-slate-800 mb-1">
              Đặt Phòng &amp; Tư Vấn Nội Thất Nghỉ Dưỡng
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Hạng phòng / Dịch vụ: <strong className="text-[#f5a623]">{selectedRoomTitle}</strong>
            </p>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-slate-800">
                  Đã xác nhận yêu cầu đặt phòng!
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-[#f5a623] text-white text-xs font-bold uppercase px-6 py-2 rounded-xs"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSuccess(true);
                }}
                className="space-y-3 text-xs"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên quý khách *"
                  className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#f5a623]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ *"
                  className="w-full border border-slate-200 rounded-xs px-3 py-2.5 focus:outline-none focus:border-[#f5a623]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#f5a623] hover:bg-[#d98e16] text-white font-bold uppercase py-3 rounded-xs transition cursor-pointer"
                >
                  XÁC NHẬN ĐẶT PHÒNG NGAY
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
