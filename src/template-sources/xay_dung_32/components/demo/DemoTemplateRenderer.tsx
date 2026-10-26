"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Sun,
  Calendar,
  X,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung32Data,
  HowelloResortService,
  HowelloResortRoom,
  HowelloNewsArticle,
  HowelloHighlightEvent,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung32Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Hero Yellow Form State
  const [heroName, setHeroName] = useState("");
  const [heroPhone, setHeroPhone] = useState("");
  const [heroCheckIn, setHeroCheckIn] = useState("20/06/2025");
  const [heroCheckOut, setHeroCheckOut] = useState("23/06/2025");
  const [heroGuests, setHeroGuests] = useState(
    data.heroBookingForm.guestOptions[1] || "02 Người lớn (Cặp đôi)"
  );
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Interactive Modals
  const [selectedService, setSelectedService] =
    useState<HowelloResortService | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<HowelloResortRoom | null>(
    null
  );
  const [selectedArticle, setSelectedArticle] =
    useState<HowelloNewsArticle | null>(null);
  const [selectedEvent, setSelectedEvent] =
    useState<HowelloHighlightEvent | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "076 922 0162");
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "demonhunterg@gmail.com");
  const secondaryEmail =
    Array.isArray(data.business.email) && data.business.email[1]
      ? data.business.email[1]
      : "mon@mona.media";

  const filteredRooms = data.modernRoomsSection.rooms.filter(
    (r) =>
      !searchText.trim() ||
      r.name.toLowerCase().includes(searchText.toLowerCase()) ||
      r.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const displayedRooms =
    filteredRooms.length > 0 ? filteredRooms : data.modernRoomsSection.rooms;

  const handleHeroBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroName.trim() || !heroPhone.trim()) return;
    setHeroSubmitted(true);
  };

  const scrollToBookingForm = () => {
    const el = document.getElementById("hero-booking-box");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f5b400] selection:text-slate-950"
    >
      {/* 1. LIGHT UTILITY TOPBAR */}
      <div className="bg-white border-b border-slate-100 text-[11px] text-slate-500 py-1.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#f5b400] transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-700" />
              <span>{primaryPhone}</span>
            </a>
            <a
              href={`mailto:${primaryEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-[#f5b400] transition-colors"
            >
              <Mail className="w-3 h-3 text-slate-700" />
              <span>{primaryEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            {["f", "tw", "p", "g+"].map((soc) => (
              <button
                key={soc}
                type="button"
                onClick={scrollToBookingForm}
                className="hover:text-[#f5b400] font-bold uppercase transition-colors cursor-pointer"
              >
                {soc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STICKY WHITE HEADER WITH FLOWER ICON + SOLID YELLOW ĐẶT PHÒNG BUTTON */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Left Yellow/Black Flower Logo + Italic Serif Brand */}
          <a href="#trang-chu" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[#f5b400]/15 border border-[#f5b400] flex items-center justify-center text-[#f5b400]">
              <Sun className="w-6 h-6 fill-[#f5b400] text-slate-900" />
            </div>
            <div className="leading-tight">
              <div className="font-serif italic font-extrabold text-lg sm:text-xl text-slate-900 tracking-wide">
                {data.business.name}
              </div>
              <div className="font-serif italic text-xs text-slate-500 -mt-0.5">
                {data.header.brandSub}
              </div>
            </div>
          </a>

          {/* Center Navigation + Search + Yellow ĐẶT PHÒNG CTA */}
          <div className="flex items-center gap-5 sm:gap-7">
            <nav className="hidden md:flex items-center gap-6">
              {data.header.navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                    idx === 0
                      ? "text-[#f5b400]"
                      : "text-slate-700 hover:text-[#f5b400]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              className="text-slate-600 hover:text-[#f5b400] transition-colors cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={scrollToBookingForm}
              className="bg-[#f5b400] hover:bg-[#dca200] text-white px-4 sm:px-5 py-2.5 rounded-xs text-xs font-extrabold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
            >
              {data.header.ctaLabel}
            </button>
          </div>
        </div>

        {/* Optional Search Input Drawer */}
        {searchOpen && (
          <div className="bg-slate-50 border-t border-slate-200 py-2.5 px-4">
            <div className="max-w-md mx-auto flex items-center gap-2">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Tìm kiếm hạng phòng Silver, Platinum, Bronze..."
                className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xs focus:outline-none focus:border-[#f5b400]"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  const el = document.getElementById("phong-nghi");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3.5 py-1.5 bg-[#f5b400] text-white text-xs font-bold uppercase rounded-xs cursor-pointer"
              >
                Lọc
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. RESORT PATIO HERO + RIGHT-ALIGNED SOLID YELLOW (#f5b400) "ĐẶT PHÒNG" FORM CARD */}
      <section className="relative min-h-[520px] sm:min-h-[580px] w-full overflow-hidden bg-slate-900 flex items-center py-10">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 7 Cols: Subtle Resort Caption */}
          <div className="lg:col-span-7 text-white hidden lg:block">
            <div className="inline-block bg-black/45 backdrop-blur-xs px-5 py-4 rounded-xs border-l-4 border-[#f5b400] max-w-lg">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f5b400]">
                {data.hero.eyebrow}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold mt-1 leading-snug">
                {data.hero.title}
              </h1>
              <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
                {data.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Right 5 Cols: Solid Yellow (#f5b400) Vertical Booking Card matching XD032 */}
          <div id="hero-booking-box" className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-sm bg-[#f5b400] p-6 sm:p-7 shadow-2xl rounded-xs text-white">
              <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wider text-center text-white mb-5">
                {data.heroBookingForm.formTitle}
              </h2>

              {heroSubmitted ? (
                <div className="bg-white/95 text-slate-900 p-5 rounded-xs text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-sm font-extrabold uppercase">
                    Đã Nhận Yêu Cầu Đặt Phòng!
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cảm ơn <strong>{heroName}</strong>. Bộ phận Lễ tân{" "}
                    <strong>{data.business.name}</strong> sẽ gọi xác nhận qua số{" "}
                    <strong>{heroPhone}</strong> cho kỳ nghỉ ({heroCheckIn} –{" "}
                    {heroCheckOut}).
                  </p>
                  <button
                    type="button"
                    onClick={() => setHeroSubmitted(false)}
                    className="px-5 py-2 bg-[#1f1f1f] text-white text-xs font-bold uppercase cursor-pointer"
                  >
                    Đặt thêm phòng khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHeroBookingSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-white mb-1">
                      Họ & Tên
                    </label>
                    <input
                      type="text"
                      required
                      value={heroName}
                      onChange={(e) => setHeroName(e.target.value)}
                      placeholder="..."
                      className="w-full px-3 py-2 text-xs bg-transparent border border-white/80 text-white placeholder-white/70 focus:outline-none focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-white mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      required
                      value={heroPhone}
                      onChange={(e) => setHeroPhone(e.target.value)}
                      placeholder="..."
                      className="w-full px-3 py-2 text-xs bg-transparent border border-white/80 text-white placeholder-white/70 focus:outline-none focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-white mb-1">
                      Ngày nhận
                    </label>
                    <input
                      type="text"
                      value={heroCheckIn}
                      onChange={(e) => setHeroCheckIn(e.target.value)}
                      placeholder="dd/mm/yyyy"
                      className="w-full px-3 py-2 text-xs bg-transparent border border-white/80 text-white placeholder-white/80 focus:outline-none focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-white mb-1">
                      Ngày trả
                    </label>
                    <input
                      type="text"
                      value={heroCheckOut}
                      onChange={(e) => setHeroCheckOut(e.target.value)}
                      placeholder="dd/mm/yyyy"
                      className="w-full px-3 py-2 text-xs bg-transparent border border-white/80 text-white placeholder-white/80 focus:outline-none focus:bg-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-white mb-1">
                      Số người
                    </label>
                    <select
                      value={heroGuests}
                      onChange={(e) => setHeroGuests(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#f5b400] border border-white/80 text-white focus:outline-none cursor-pointer"
                    >
                      {data.heroBookingForm.guestOptions.map((opt, idx) => (
                        <option
                          key={idx}
                          value={opt}
                          className="bg-white text-slate-900"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="w-36 py-2.5 bg-[#1f1f1f] hover:bg-black text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow"
                    >
                      {data.heroBookingForm.submitLabel}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-COLUMN "DỊCH VỤ HẤP DẪN" SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
              <span className="text-[#f5b400]">
                {data.attractiveServicesSection.highlightWord}
              </span>{" "}
              <span className="text-slate-900">
                {data.attractiveServicesSection.normalWord}
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {data.attractiveServicesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.attractiveServicesSection.items.map((srv) => (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className="group relative h-64 sm:h-72 rounded-xs overflow-hidden shadow-md bg-slate-900 cursor-pointer"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-5 text-center text-white px-4">
                  <h3 className="text-lg sm:text-xl font-bold group-hover:text-[#f5b400] transition-colors">
                    {srv.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3-COLUMN "PHÒNG NGHỈ HIỆN ĐẠI" SECTION ON #f5f5f5 */}
      <section id="phong-nghi" className="py-16 sm:py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
                <span className="text-[#f5b400]">
                  {data.modernRoomsSection.highlightWord}
                </span>{" "}
                <span className="text-slate-900">
                  {data.modernRoomsSection.normalWord}
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {data.modernRoomsSection.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSearchText("")}
              className="bg-[#f5b400] hover:bg-[#dca200] text-white px-5 py-2.5 rounded-xs text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              {data.modernRoomsSection.viewAllLabel}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedRooms.map((room) => (
              <div
                key={room.id}
                className="group bg-white rounded-xs overflow-hidden shadow-xs hover:shadow-lg border border-slate-200/80 transition-all"
              >
                <div
                  onClick={() => setSelectedRoom(room)}
                  className="h-56 overflow-hidden bg-slate-100 cursor-pointer"
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-extrabold uppercase text-slate-900 mb-4">
                    {room.name}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      Giá:{" "}
                      <strong className="text-sm font-extrabold text-slate-900">
                        {room.priceUsd}
                      </strong>{" "}
                      / 1 đêm
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedRoom(room)}
                      className="bg-[#f5b400] hover:bg-[#dca200] text-white px-3.5 py-1.5 rounded-xs text-[11px] font-bold transition-colors cursor-pointer"
                    >
                      xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARALLAX "THIÊN ĐƯỜNG NGHỈ DƯỠNG" BANNER + SOLID YELLOW 4-STAT COUNTER BAR */}
      <section id="thien-duong">
        {/* Canopy Bed Tropical Parallax Banner */}
        <div className="relative py-20 sm:py-24 bg-slate-900 text-white text-center overflow-hidden">
          <img
            src={data.paradiseBanner.backgroundImage}
            alt={data.paradiseBanner.heading}
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white mb-4">
              {data.paradiseBanner.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
              {data.paradiseBanner.description}
            </p>
          </div>
        </div>

        {/* Full-Width Solid Yellow (#f5b400) 4-Stat Counter Strip matching XD032 */}
        <div className="bg-[#f5b400] text-white py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {(data.stats || []).map((st, idx) => (
              <div key={st.id || idx}>
                <div className="text-3xl sm:text-4xl font-extrabold leading-none">
                  {st.value || st.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-white/95 mt-2">
                  {st.label || st.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ASYMMETRIC "TIN TỨC MỚI NHẤT" (8 COLS) + "SỰ KIỆN NỔI BẬT" (4 COLS) */}
      <section id="tin-tuc" className="py-16 sm:py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols: TIN TỨC MỚI NHẤT (2 vertical cards) */}
            <div className="lg:col-span-8">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-6">
                <span className="text-[#f5b400]">
                  {data.newsAndEventsSection.newsHighlightWord}
                </span>{" "}
                <span className="text-slate-900">
                  {data.newsAndEventsSection.newsNormalWord}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.newsAndEventsSection.articles.map((art) => (
                  <article
                    key={art.id}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div
                        onClick={() => setSelectedArticle(art)}
                        className="h-52 overflow-hidden bg-slate-200 mb-4 cursor-pointer"
                      >
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <h3
                        onClick={() => setSelectedArticle(art)}
                        className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#f5b400] transition-colors cursor-pointer"
                      >
                        {art.title}
                      </h3>
                      <div className="text-[11px] text-slate-400 mt-1 mb-2.5">
                        {art.date}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedArticle(art)}
                        className="px-4 py-1.5 border border-[#f5b400] text-[#f5b400] hover:bg-[#f5b400] hover:text-white text-[10px] font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        ĐỌC THÊM
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right 4 Cols: SỰ KIỆN NỔI BẬT (White Box with 3 Horizontal Items) */}
            <div className="lg:col-span-4">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-6">
                <span className="text-[#f5b400]">
                  {data.newsAndEventsSection.eventsHighlightWord}
                </span>{" "}
                <span className="text-slate-900">
                  {data.newsAndEventsSection.eventsNormalWord}
                </span>
              </h2>

              <div className="bg-white p-5 shadow-xs border border-slate-200/70 space-y-4">
                {data.newsAndEventsSection.events.map((ev) => (
                  <div
                    key={ev.id}
                    onClick={() => setSelectedEvent(ev)}
                    className="group flex items-start gap-3.5 pb-4 last:pb-0 border-b last:border-b-0 border-slate-100 cursor-pointer"
                  >
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-24 h-16 object-cover shrink-0 bg-slate-100 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="min-w-0">
                      <h3 className="text-xs font-extrabold text-slate-800 group-hover:text-[#f5b400] transition-colors leading-snug line-clamp-3">
                        {ev.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DARK CHARCOAL 4-COLUMN FOOTER (#222222) */}
      <footer id="lien-he" className="bg-[#222222] text-slate-300 pt-14 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Brand + Desc */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#f5b400]/20 border border-[#f5b400] flex items-center justify-center text-[#f5b400]">
                  <Sun className="w-5 h-5 fill-[#f5b400] text-white" />
                </div>
                <div>
                  <div className="font-serif italic font-extrabold text-base text-white">
                    {data.business.name}
                  </div>
                  <div className="font-serif italic text-xs text-slate-400 -mt-0.5">
                    Resort
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {data.footer.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                {["f", "ig", "tw"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={scrollToBookingForm}
                    className="hover:text-[#f5b400] uppercase font-bold cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 2: LIÊN HỆ */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                LIÊN HỆ
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                  <div>
                    <div>{primaryEmail}</div>
                    <div>{secondaryEmail}</div>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span>{data.footer.skypeHandle}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: LIÊN KẾT + Yellow ĐẶT PHÒNG Button */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                LIÊN KẾT
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 mb-5">
                <a href="#trang-chu" className="text-[#f5b400] font-bold">
                  Trang chủ
                </a>
                <a href="#thien-duong" className="hover:text-white">
                  Giới thiệu
                </a>
                <a href="#phong-nghi" className="hover:text-white">
                  Cửa hàng
                </a>
                <a href="#tin-tuc" className="hover:text-white">
                  Tin tức
                </a>
                <a href="#lien-he" className="hover:text-white">
                  Liên hệ
                </a>
              </div>
              <button
                type="button"
                onClick={scrollToBookingForm}
                className="bg-[#f5b400] hover:bg-[#dca200] text-white px-5 py-2 rounded-xs text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer"
              >
                ĐẶT PHÒNG
              </button>
            </div>

            {/* Col 4: HÌNH ẢNH (3x2 Grid) */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                HÌNH ẢNH
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {data.footer.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxImg(imgUrl)}
                    className="h-14 overflow-hidden border border-white/10 hover:border-[#f5b400] transition-all cursor-pointer"
                  >
                    <img
                      src={imgUrl}
                      alt={`Resort Gallery ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-slate-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-52">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="text-[11px] font-bold uppercase text-[#f5b400]">
                {selectedService.location} • {selectedService.schedule}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Dịch vụ {selectedService.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>
              <ul className="space-y-1.5">
                {selectedService.highlights.map((hl, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#f5b400] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 bg-[#f5b400] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: MODERN ROOM DETAIL MODAL */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#f5b400]">
                  {selectedRoom.area} • {selectedRoom.view}
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {selectedRoom.priceUsd} ({selectedRoom.priceVnd}) / đêm
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {selectedRoom.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedRoom.description}
              </p>
              <ul className="space-y-1.5">
                {selectedRoom.amenities.map((am, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#f5b400] shrink-0 mt-0.5" />
                    <span>{am}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRoom(null);
                    scrollToBookingForm();
                  }}
                  className="px-5 py-2 bg-[#f5b400] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đặt Hạng Phòng Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: NEWS ARTICLE MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="text-xs text-[#f5b400] font-bold">
                {selectedArticle.date}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                {selectedArticle.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedArticle.fullText}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 bg-[#222222] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: EVENT MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-44">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="text-[11px] font-bold uppercase text-[#f5b400]">
                {selectedEvent.date} • {selectedEvent.location}
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {selectedEvent.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedEvent.summary}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2 bg-[#f5b400] text-white text-xs font-extrabold uppercase cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: LIGHTBOX */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
        >
          <img
            src={lightboxImg}
            alt="Resort Howello"
            className="max-w-3xl w-full max-h-[80vh] object-contain border-4 border-white"
          />
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
