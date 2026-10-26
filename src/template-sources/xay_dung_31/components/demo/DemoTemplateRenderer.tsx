"use client";

import React, { useState } from "react";
import {
  Menu,
  Search,
  Star,
  Building2,
  X,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung31Data,
  LuxuryMosaicSpace,
  LuxurySpecialOffer,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung31Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive states
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMosaic, setSelectedMosaic] =
    useState<LuxuryMosaicSpace | null>(null);
  const [selectedOffer, setSelectedOffer] =
    useState<LuxurySpecialOffer | null>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [showReserveModal, setShowReserveModal] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Reservation form state
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [selectedPackageName, setSelectedPackageName] = useState(
    data.interiorMosaic[0]?.title || "Nordic Atelier Bedroom Suite"
  );
  const [reserveSuccess, setReserveSuccess] = useState(false);

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "076 922 0162");
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "mon@mona.media");

  const currentReview =
    data.reviewsSection.reviews[activeReviewIndex] ||
    data.reviewsSection.reviews[0];

  const handleNextReview = () => {
    setActiveReviewIndex(
      (prev) => (prev + 1) % data.reviewsSection.reviews.length
    );
  };

  const handleOpenReserve = (pkgName?: string) => {
    if (pkgName) setSelectedPackageName(pkgName);
    setReserveSuccess(false);
    setShowReserveModal(true);
  };

  const handleSubmitReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) return;
    setReserveSuccess(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
    setNewsletterEmail("");
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#111927] selection:text-white"
    >
      {/* 1. DARK ATMOSPHERIC LUXURY BEDROOM HERO WITH OVERLAID MINIMALIST HEADER */}
      <section className="relative h-[560px] sm:h-[640px] lg:h-[720px] w-full overflow-hidden bg-[#0e1520] text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center opacity-80 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18]/85 via-[#0a0f18]/45 to-transparent" />

        {/* Minimalist Top Bar Overlaid on Hero matching XD031 */}
        <header className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 pt-6 flex items-start justify-between">
          {/* Left Hamburger Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="p-2 text-white/90 hover:text-amber-300 transition-colors cursor-pointer"
            aria-label="Mở menu điều hướng"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center Iconic Tower + 5 Stars Crest Logo */}
          <a
            href="#trang-chu"
            className="flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 flex flex-col items-center justify-center text-white">
              <Building2 className="w-8 h-8 stroke-[1.5] text-white group-hover:text-amber-200 transition-colors" />
            </div>
            <div className="flex items-center gap-0.5 my-1 text-white">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-2.5 h-2.5 fill-white ${
                    idx === 2 ? "w-3 h-3 -mt-0.5" : ""
                  }`}
                />
              ))}
            </div>
            <span className="font-serif text-sm sm:text-base tracking-[0.2em] uppercase font-bold text-white">
              {data.business.name}
            </span>
            <span className="font-serif italic text-[10px] tracking-widest text-slate-300 mt-0.5">
              {data.header.establishedText}
            </span>
          </a>

          {/* Right Search Icon */}
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            className="p-2 text-white/90 hover:text-amber-300 transition-colors cursor-pointer"
            aria-label="Tìm kiếm"
          >
            <Search className="w-5 h-5" />
          </button>
        </header>

        {/* Optional Inline Search Bar */}
        {searchOpen && (
          <div className="relative z-20 max-w-md mx-auto px-6 mt-4">
            <div className="bg-black/75 backdrop-blur-md border border-white/25 p-2 flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm hạng Suite, ưu đãi..."
                className="w-full bg-transparent text-xs text-white px-2 py-1 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  const el = document.getElementById("khong-gian-song");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3 py-1 bg-white text-slate-950 text-[11px] font-bold uppercase cursor-pointer"
              >
                Tìm
              </button>
            </div>
          </div>
        )}

        {/* Left-Aligned Condensed Display Title matching XD031 */}
        <div className="relative z-10 max-w-6xl mx-auto h-[calc(100%-120px)] px-6 sm:px-12 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-bold leading-[1.08] tracking-tight text-white">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-200 font-light tracking-wide">
              {data.hero.subtitle}
            </p>
            <div className="mt-7">
              <a
                href={data.hero.ctaLink || "#di-san"}
                className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-white border-b-2 border-white pb-1 hover:text-amber-200 hover:border-amber-200 transition-colors"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE-OUT NAVIGATION DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex">
          <div className="bg-[#111927] text-white w-80 max-w-full h-full p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="font-serif text-base font-bold tracking-widest uppercase">
                    {data.business.name}
                  </div>
                  <div className="text-[10px] italic text-slate-400">
                    {data.header.establishedText}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 space-y-4">
                {data.header.navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-200 hover:text-amber-300 transition-colors py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-slate-400">
              <div>{data.business.address}</div>
              <div>Tel: {primaryPhone}</div>
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  handleOpenReserve();
                }}
                className="w-full py-2.5 bg-white text-slate-950 font-extrabold text-xs uppercase tracking-widest cursor-pointer"
              >
                Đặt Phòng Đặc Quyền
              </button>
            </div>
          </div>
          <div
            className="flex-1"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}

      {/* 2. ASYMMETRIC "Khách sạn sang trọng nhất tọa lạc trung tâm thành phố" SECTION */}
      <section id="di-san" className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#f9f9f9] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 5 Cols: Heritage Text + Director Signature */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {data.business.aboutTitle || data.heritageSection.heading}
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                {data.business.aboutText?.[0] || data.heritageSection.body}
              </p>
              <div className="pt-3">
                <div className="font-serif italic text-2xl sm:text-3xl text-slate-800 tracking-wide select-none">
                  {data.heritageSection.directorSignature}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-900 mt-1">
                  {data.heritageSection.directorNameAndRole}
                </div>
              </div>
            </div>

            {/* Right 7 Cols: 2 Vertical Architectural Photos Side by Side matching XD031 */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="h-72 sm:h-80 overflow-hidden bg-slate-200 shadow-sm">
                <img
                  src={data.heritageSection.leftImage}
                  alt="Xe sang Rolls-Royce đón khách tại sảnh Mona Hotel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-72 sm:h-80 overflow-hidden bg-slate-200 shadow-sm">
                <img
                  src={data.heritageSection.rightImage}
                  alt="Kiến trúc di sản trung tâm thành phố"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL-BLEED 2x2 ARCHITECTURAL INTERIOR PHOTO GRID (FLUSH 4-PANEL MOSAIC) */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {data.interiorMosaic.map((space) => (
            <div
              key={space.id}
              onClick={() => setSelectedMosaic(space)}
              className="group relative h-[320px] sm:h-[420px] lg:h-[460px] overflow-hidden bg-slate-900 cursor-pointer"
            >
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle hover architectural specification overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-end p-6 sm:p-8">
                <div className="text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold">
                    {space.area} • {space.architect}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                    {space.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1">
                    {space.subtitle} — Nhấn để xem chi tiết vật liệu
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CENTERED EDITORIAL "Không gian sống đỉnh cao — TẠI HỒ CHÍ MINH" + 3 VERTICAL PHOTOS */}
      <section id="khong-gian-song" className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              {data.livingSpaceSection.heading}
            </h2>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500 mt-2">
              {data.livingSpaceSection.subHeading}
            </div>
          </div>

          {/* 2-Column Balanced Editorial Paragraph Block matching XD031 */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16">
            <div className="space-y-6">
              <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-relaxed">
                {data.livingSpaceSection.leftColumnText}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleOpenReserve()}
                  className="px-6 py-2.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-[11px] font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  {data.livingSpaceSection.buttonText}
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                {data.livingSpaceSection.rightColumnText}
              </p>
            </div>
          </div>

          {/* 3 Tall Vertical Lifestyle / Interior Photos matching XD031 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.livingSpaceSection.triptychImages.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenReserve(item.title)}
                className="group relative h-[380px] sm:h-[440px] overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/25 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-serif text-base font-bold">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-200 mt-0.5">
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3-COLUMN FULL-BLEED "Ưu đãi đặc biệt — TẬN HƯỞNG ĐẶC QUYỀN CAO CẤP CỦA MONA" */}
      <section id="uu-dai" className="pt-4 pb-16 bg-white">
        <div className="text-center mb-10 px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            {data.specialOffersSection.heading}
          </h2>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">
            {data.specialOffersSection.subHeading}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {data.specialOffersSection.offers.map((offer) => (
            <div
              key={offer.id}
              onClick={() => setSelectedOffer(offer)}
              className="group relative h-64 sm:h-72 overflow-hidden bg-slate-900 cursor-pointer"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-6 text-center text-white px-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold drop-shadow">
                  {offer.title}
                </h3>
                <span className="mt-1.5 inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/90 border-b border-white/60 pb-0.5 group-hover:text-amber-300 group-hover:border-amber-300 transition-colors">
                  {offer.ctaLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. "Nhận xét" HEADER + FULL-WIDTH DARK MIDNIGHT (#111927) SHOWCASE */}
      <section id="nhan-xet">
        {/* White Heading Strip */}
        <div className="py-12 text-center bg-white px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            {data.reviewsSection.topHeading}
          </h2>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">
            {data.reviewsSection.topSubHeading}
          </div>
        </div>

        {/* Dark Midnight Showcase Block (#111927) matching XD031 */}
        <div className="bg-[#111927] text-white py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Cols: Headline + Quote + XEM NHẬN XÉT switcher */}
            <div className="lg:col-span-4 space-y-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug text-white">
                {currentReview.headline}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                {currentReview.quote}
              </p>
              <div className="pt-1">
                <div className="text-xs font-bold text-amber-300">
                  {currentReview.guestName}
                </div>
                <div className="text-[11px] text-slate-400">
                  {currentReview.guestTitle} • {currentReview.staySuite}
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleNextReview}
                  className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:text-amber-300 hover:border-amber-300 transition-colors cursor-pointer"
                >
                  {data.reviewsSection.ctaLinkText} (
                  {activeReviewIndex + 1}/{data.reviewsSection.reviews.length})
                </button>
              </div>
            </div>

            {/* Middle 4 Cols: Tall Vertical Hot Tub / Wellness Photo */}
            <div className="lg:col-span-4 h-[380px] sm:h-[430px] overflow-hidden bg-slate-800">
              <img
                src={data.reviewsSection.verticalFeatureImage}
                alt="Không gian thư giãn bồn tắm gỗ nhìn ra thiên nhiên"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right 4 Cols: 2 Stacked Horizontal Photos (Pool + Fine Dining) */}
            <div className="lg:col-span-4 flex flex-col gap-6 h-[380px] sm:h-[430px]">
              <div className="flex-1 overflow-hidden bg-slate-800">
                <img
                  src={data.reviewsSection.topRightImage}
                  alt="Hồ bơi khoáng xanh ngọc bích"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 overflow-hidden bg-slate-800">
                <img
                  src={data.reviewsSection.bottomRightImage}
                  alt="Bàn tiệc rượu vang sang trọng"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MINIMALIST WHITE FOOTER WITH CENTERED CREST LOGO + 4-COLUMN INFO */}
      <footer id="lien-he" className="bg-white text-slate-800 pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Centered Tower Crest Logo matching XD031 */}
          <div className="flex flex-col items-center text-center mb-14">
            <Building2 className="w-10 h-10 text-[#111927] stroke-[1.5]" />
            <div className="flex items-center gap-0.5 my-1 text-[#111927]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-2.5 h-2.5 fill-[#111927] text-[#111927]"
                />
              ))}
            </div>
            <div className="font-serif text-base font-bold tracking-[0.22em] uppercase text-[#111927]">
              {data.business.name}
            </div>
            <div className="font-serif italic text-[10px] tracking-widest text-slate-400">
              {data.header.establishedText}
            </div>
          </div>

          {/* 4-Column Footer Info: ĐỊA CHỈ | ĐẶT CHỖ | NHẬN TIN | GIẢI THƯỞNG */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-100">
            {/* Col 1: ĐỊA CHỈ */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                {data.footer.addressTitle}
              </h4>
              <div className="text-xs font-extrabold text-slate-900 mb-1">
                {data.footer.hotelNameLine}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.business.address}
              </p>
            </div>

            {/* Col 2: ĐẶT CHỖ */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                {data.footer.bookingTitle}
              </h4>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>Tel : {primaryPhone}</li>
                <li>Fax : {data.footer.faxNumber}</li>
                <li className="font-semibold text-slate-900">{primaryEmail}</li>
              </ul>
            </div>

            {/* Col 3: NHẬN TIN */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                {data.footer.newsletterTitle}
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="w-full pb-1.5 text-xs border-b border-slate-300 focus:outline-none focus:border-slate-900"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#111927] hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
                {newsletterDone && (
                  <p className="text-[11px] text-emerald-600 font-semibold">
                    ✓ Đã đăng ký nhận bản tin đặc quyền!
                  </p>
                )}
              </form>
            </div>

            {/* Col 4: GIẢI THƯỞNG */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                {data.footer.awardsTitle}
              </h4>
              <div className="flex items-center gap-4">
                {data.footer.awards.map((aw, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-20 rounded-full border-2 border-emerald-600/40 bg-emerald-50/40 flex flex-col items-center justify-center text-center p-2"
                  >
                    <Award className="w-4 h-4 text-emerald-700 mb-0.5" />
                    <span className="text-[8px] font-extrabold uppercase tracking-tighter text-slate-800 leading-tight">
                      {aw.title}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-700">
                      {aw.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-400">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: MOSAIC ARCHITECTURAL SUITE MODAL */}
      {selectedMosaic && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedMosaic.image}
                alt={selectedMosaic.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedMosaic(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Diện tích: {selectedMosaic.area} • Thiết kế:{" "}
                {selectedMosaic.architect}
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {selectedMosaic.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedMosaic.description}
              </p>
              <div className="pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                  Vật liệu & Hoàn thiện Nội thất:
                </h4>
                <ul className="space-y-1">
                  {selectedMosaic.materials.map((m, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#111927] shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMosaic(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedMosaic.title;
                    setSelectedMosaic(null);
                    handleOpenReserve(name);
                  }}
                  className="px-6 py-2 bg-[#111927] text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
                >
                  Đặt Không Gian Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: SPECIAL OFFER PACKAGE MODAL */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedOffer.image}
                alt={selectedOffer.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700">
                {selectedOffer.duration} • {selectedOffer.pricePackage}
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {selectedOffer.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedOffer.description}
              </p>
              <ul className="space-y-1.5">
                {selectedOffer.perks.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#111927] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedOffer(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedOffer.title;
                    setSelectedOffer(null);
                    handleOpenReserve(title);
                  }}
                  className="px-6 py-2 bg-[#111927] text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
                >
                  Nhận Ưu Đãi Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: RESERVATION MODAL */}
      {showReserveModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full overflow-hidden shadow-2xl">
            <div className="bg-[#111927] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400">
                  {data.business.name} • {data.header.establishedText}
                </div>
                <h3 className="font-serif text-lg font-bold">
                  Đặt Chỗ & Đặc Quyền Lưu Trú
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowReserveModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {reserveSuccess ? (
                <div className="text-center py-5 space-y-3">
                  <CheckCircle2 className="w-11 h-11 text-[#111927] mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-slate-900">
                    Yêu Cầu Đặt Chỗ Đã Được Ghi Nhận
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cảm ơn quý khách <strong>{guestName}</strong>. Quản gia riêng
                    của <strong>{data.business.name}</strong> sẽ liên hệ qua số{" "}
                    <strong>{guestPhone}</strong> để xác nhận gói{" "}
                    <strong>{selectedPackageName}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowReserveModal(false)}
                    className="px-6 py-2 bg-[#111927] text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitReserve} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Quý danh khách hàng *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Nhập họ và tên..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#111927]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#111927]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Hạng Suite / Gói Ưu Đãi
                    </label>
                    <input
                      type="text"
                      value={selectedPackageName}
                      onChange={(e) => setSelectedPackageName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#111927]"
                    />
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowReserveModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#111927] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
                    >
                      Xác Nhận Đặt Chỗ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
