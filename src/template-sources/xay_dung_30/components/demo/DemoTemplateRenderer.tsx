"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  ChevronRight,
  X,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  defaultData,
  XayDung30Data,
  HotecPromoCard,
  HotecNewsItem,
  HotecLuxuryRoom,
} from "../../data/mockData";

interface Props {
  data?: Record<string, any>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data: XayDung30Data = adaptClonedTemplateData(
    defaultData,
    incomingData
  );

  // Interactive states
  const [selectedPromo, setSelectedPromo] = useState<HotecPromoCard | null>(
    null
  );
  const [selectedNews, setSelectedNews] = useState<HotecNewsItem | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<HotecLuxuryRoom | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string>("TẤT CẢ");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Booking form state
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState(
    data.luxuryRoomsSection.rooms[0]?.title ||
      "CLUB DELUXE ROOM – ORIENTAL SUITE"
  );
  const [bookingDone, setBookingDone] = useState(false);

  const primaryPhone = Array.isArray(data.business.phone)
    ? data.business.phone[0]
    : String(data.business.phone || "1900 636 648");
  const secondaryPhone =
    Array.isArray(data.business.phone) && data.business.phone[1]
      ? data.business.phone[1]
      : primaryPhone;
  const primaryEmail = Array.isArray(data.business.email)
    ? data.business.email[0]
    : String(data.business.email || "demophunter@gmail.com");

  const filteredRooms =
    activeCategory === "TẤT CẢ"
      ? data.luxuryRoomsSection.rooms
      : data.luxuryRoomsSection.rooms.filter(
          (r) => r.category === activeCategory
        );

  const displayedRooms =
    filteredRooms.length > 0 ? filteredRooms : data.luxuryRoomsSection.rooms;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  const handleOpenBooking = (roomTitle?: string) => {
    if (roomTitle) setSelectedRoomType(roomTitle);
    setBookingDone(false);
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) return;
    setBookingDone(true);
  };

  return (
    <div
      id="trang-chu"
      className="min-h-screen bg-[#f4f4f4] text-slate-700 font-sans selection:bg-[#2ab5b2] selection:text-white"
    >
      {/* 1. DARK CHARCOAL TOPBAR (#1e1e1e) */}
      <div className="bg-[#1e1e1e] text-slate-300 text-[11px] py-2 border-b border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            {data.header.topLinks.map((lnk, idx) => (
              <a
                key={idx}
                href={lnk.href}
                className="uppercase tracking-wider hover:text-white transition-colors"
              >
                {lnk.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#b5a273]" />
              <span className="uppercase">{data.business.address}</span>
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-white font-semibold"
            >
              <Phone className="w-3 h-3 text-[#2ab5b2]" />
              <span>{primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY CRISP WHITE HEADER WITH TURQUOISE ĐẶT PHÒNG BUTTON */}
      <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Left MONA Logo */}
          <a href="#trang-chu" className="flex flex-col items-center group">
            <span className="text-2xl sm:text-3xl font-black tracking-[0.14em] text-slate-900 leading-none">
              {data.header.brandMain}
            </span>
            <span className="text-[9px] font-bold tracking-[0.18em] text-slate-500 mt-1 uppercase">
              {data.header.brandSub}
            </span>
          </a>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {data.header.navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  idx === 0
                    ? "text-[#b5a273]"
                    : "text-slate-600 hover:text-[#2ab5b2]"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </nav>

          {/* Right Turquoise Button (#2ab5b2) */}
          <button
            type="button"
            onClick={() => handleOpenBooking()}
            className="bg-[#2ab5b2] hover:bg-[#219693] text-white px-4 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{data.header.ctaButton}</span>
          </button>
        </div>
      </header>

      {/* 3. WIDE ARCHITECTURAL INTERIOR HERO WITH SEMI-TRANSPARENT OVERLAY BOX */}
      <section className="relative h-[400px] sm:h-[470px] lg:h-[520px] w-full overflow-hidden bg-slate-900">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Semi-Transparent Dark Box matching XD030 */}
        <div className="relative z-10 max-w-5xl mx-auto h-full px-4 sm:px-6 flex items-start pt-12 sm:pt-16">
          <div className="bg-black/65 backdrop-blur-[2px] px-6 sm:px-8 py-5 sm:py-6 max-w-2xl text-white border-l-4 border-[#b5a273]">
            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold uppercase tracking-wide leading-snug text-white">
              {data.hero.title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {data.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 4. BOXED WHITE CENTRAL CONTAINER OVERLAPPING HERO (-mt-20) */}
      <main className="relative z-20 max-w-5xl mx-auto px-4 sm:px-0 -mt-16 sm:-mt-24 pb-12">
        <div className="bg-white shadow-md border border-slate-200/70 p-5 sm:p-8 space-y-12">
          {/* ROW A: 3 PROMO FEATURE CARDS WITH TOP DARK OVERLAY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.promoCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedPromo(card)}
                className="group relative h-48 sm:h-52 overflow-hidden bg-slate-900 cursor-pointer border border-slate-200"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Top Dark Overlay Banner matching XD030 */}
                <div className="absolute inset-x-0 top-0 bg-black/70 px-4 py-3 text-white">
                  <h3 className="text-xs font-extrabold uppercase tracking-wide leading-snug group-hover:text-[#2ab5b2] transition-colors">
                    {card.title}
                  </h3>
                  <span className="mt-1 inline-block text-[11px] text-slate-300 group-hover:text-white">
                    {card.linkLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ROW B: ASYMMETRIC 2-COLUMN SPLIT (KHÁCH SẠN LUXURY VÀ BOUTIQUE + TIN TỨC VỀ MONA) */}
          <div
            id="khach-san-luxury"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left 8 Cols: KHÁCH SẠN LUXURY VÀ BOUTIQUE */}
            <div className="lg:col-span-8">
              <div className="pb-2.5 mb-5 border-b-2 border-dotted border-slate-200">
                <h2 className="text-sm sm:text-base font-normal uppercase tracking-wider text-slate-600">
                  {data.business.aboutTitle || data.aboutTower.heading}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Vertical Skyscraper Tower Photo */}
                <div className="sm:col-span-5 overflow-hidden border border-slate-100">
                  <img
                    src={data.aboutTower.towerImage}
                    alt={data.business.name}
                    className="w-full h-72 sm:h-80 object-cover object-bottom hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Right Text + Cursive Gold Signature */}
                <div className="sm:col-span-7 space-y-3.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {(data.business.aboutText && data.business.aboutText.length > 0
                    ? data.business.aboutText
                    : data.aboutTower.paragraphs
                  ).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  <div className="pt-2">
                    <span className="font-serif italic text-xl sm:text-2xl text-[#b5a273] tracking-wide select-none">
                      {data.aboutTower.signatureText}
                    </span>
                  </div>

                  {/* Key Tower Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                    {data.aboutTower.keyMetrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-xs font-extrabold text-slate-800">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: TIN TỨC VỀ MONA */}
            <div id="tin-tuc-mona" className="lg:col-span-4">
              <div className="pb-2.5 mb-5 border-b-2 border-dotted border-slate-200">
                <h2 className="text-sm sm:text-base font-normal uppercase tracking-wider text-slate-600">
                  {data.sidebarNews.heading}
                </h2>
              </div>

              <div className="space-y-5">
                {data.sidebarNews.items.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => setSelectedNews(news)}
                    className="group flex items-start gap-3.5 cursor-pointer"
                  >
                    {/* Gold Bordered Square Date Box matching XD030 */}
                    <div className="w-11 h-12 shrink-0 border border-[#b5a273] flex flex-col items-center justify-center text-center bg-white group-hover:bg-[#b5a273] group-hover:text-white transition-colors">
                      <span className="text-xs font-extrabold text-slate-700 group-hover:text-white leading-none">
                        {news.day}
                      </span>
                      <span className="text-[10px] text-slate-400 group-hover:text-white/90 mt-0.5">
                        {news.month}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold text-slate-700 group-hover:text-[#2ab5b2] transition-colors line-clamp-1 mb-1">
                        {news.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                        {news.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROW C: 3-COLUMN "PHÒNG LUXURY" SECTION */}
          <div id="phong-luxury">
            <div className="pb-2.5 mb-6 border-b-2 border-dotted border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm sm:text-base font-normal uppercase tracking-wider text-slate-600">
                {data.luxuryRoomsSection.heading}
              </h2>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {["TẤT CẢ", ...data.footer.roomCategories].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-xs transition-colors cursor-pointer ${
                      activeCategory === cat
                        ? "bg-[#2ab5b2] text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedRooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className="group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#b5a273] group-hover:text-slate-900 transition-colors">
                    {room.title}
                  </h3>
                  <div className="mt-1 text-xs italic font-medium text-[#2ab5b2]">
                    {room.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW D: INLINE NEWSLETTER BAR AT BOTTOM OF BOXED CONTAINER */}
          <div className="pt-6 border-t border-slate-200">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <label className="text-xs italic text-slate-500">
                {data.newsletterBar.promptText}
              </label>
              <div className="flex items-center w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={data.newsletterBar.placeholder}
                  className="w-full sm:w-64 px-3 py-1.5 text-xs border border-slate-200 focus:outline-none focus:border-[#b5a273]"
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-1.5 bg-[#b5a273] hover:bg-[#9e8b5c] text-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  {data.newsletterBar.buttonLabel}
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-center text-xs text-[#2ab5b2] font-semibold mt-2">
                ✓ Đăng ký nhận bảng giá ưu đãi thành công!
              </p>
            )}
          </div>
        </div>
      </main>

      {/* 5. DARK CHARCOAL 4-COLUMN FOOTER (#1e1e1e) */}
      <footer id="lien-he" className="bg-[#1e1e1e] text-slate-400 pt-14 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: KHÁCH SẠN HOTEC */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-5">
                {data.footer.hotelColTitle}
              </h3>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span>{secondaryPhone}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                {["f", "ig", "tw", "p", "in"].map((soc) => (
                  <button
                    key={soc}
                    type="button"
                    onClick={() => handleOpenBooking()}
                    className="hover:text-white uppercase font-bold transition-colors cursor-pointer"
                  >
                    {soc}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 2: LIÊN KẾT TRANG WEB */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-5">
                {data.footer.linksColTitle}
              </h3>
              <ul className="space-y-2.5 text-xs divide-y divide-white/5">
                {data.sidebarNews.items.map((item) => (
                  <li key={item.id} className="pt-2 first:pt-0">
                    <button
                      type="button"
                      onClick={() => setSelectedNews(item)}
                      className="hover:text-[#2ab5b2] transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
                      <span className="line-clamp-1">{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: LOẠI PHÒNG */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-5">
                {data.footer.roomTypesColTitle}
              </h3>
              <ul className="space-y-2.5 text-xs divide-y divide-white/5">
                {data.footer.roomCategories.map((cat) => (
                  <li key={cat} className="pt-2 first:pt-0">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat);
                        const el = document.getElementById("phong-luxury");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="hover:text-[#b5a273] transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-500" />
                      <span>{cat}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: BỘ SƯU TẬP (3x2 Thumbnail Grid) */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-5">
                {data.footer.galleryColTitle}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {data.footer.galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxImage(imgUrl)}
                    className="h-14 overflow-hidden border border-white/15 hover:border-[#2ab5b2] transition-all cursor-pointer"
                  >
                    <img
                      src={imgUrl}
                      alt={`Bộ sưu tập Hotec ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-slate-500">
            {data.footer.copyright}
          </div>
        </div>
      </footer>

      {/* MODAL 1: PROMO CARD MODAL */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-48">
              <img
                src={selectedPromo.image}
                alt={selectedPromo.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPromo(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-base font-extrabold uppercase text-slate-900">
                {selectedPromo.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedPromo.summary}
              </p>
              <ul className="space-y-1.5 pt-1">
                {selectedPromo.highlights.map((hl, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2ab5b2] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPromo(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPromo(null);
                    handleOpenBooking();
                  }}
                  className="px-5 py-2 bg-[#2ab5b2] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đặt phòng ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: NEWS MODAL */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative h-48">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <span className="inline-block px-2.5 py-0.5 bg-[#b5a273] text-white text-[10px] font-bold">
                Ngày {selectedNews.day} {selectedNews.month}
              </span>
              <h3 className="text-base font-extrabold text-slate-900">
                {selectedNews.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedNews.fullContent}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 bg-[#1e1e1e] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: LUXURY ROOM DETAIL MODAL */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="relative h-52">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.title}
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
                <span className="text-[11px] font-bold uppercase text-[#b5a273]">
                  Hạng phòng: {selectedRoom.category} • {selectedRoom.area}
                </span>
                <span className="text-sm font-extrabold text-[#2ab5b2]">
                  {selectedRoom.price} / đêm
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                {selectedRoom.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedRoom.description}
              </p>
              <ul className="space-y-1.5 pt-1">
                {selectedRoom.specs.map((sp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b5a273] shrink-0 mt-0.5" />
                    <span>{sp}</span>
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
                    const title = selectedRoom.title;
                    setSelectedRoom(null);
                    handleOpenBooking(title);
                  }}
                  className="px-5 py-2 bg-[#2ab5b2] hover:bg-[#219693] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Đặt Hạng Phòng Này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: GALLERY LIGHTBOX */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-3xl w-full">
            <img
              src={lightboxImage}
              alt="Bộ sưu tập Hotec"
              className="w-full max-h-[80vh] object-contain border-4 border-white"
            />
          </div>
        </div>
      )}

      {/* MODAL 5: BOOKING MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full overflow-hidden shadow-2xl">
            <div className="bg-[#1e1e1e] text-white px-5 py-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase text-[#b5a273]">
                  {data.business.name}
                </div>
                <h3 className="text-base font-extrabold uppercase">
                  Đặt Phòng Trực Tuyến Hotec
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              {bookingDone ? (
                <div className="text-center py-5 space-y-3">
                  <CheckCircle2 className="w-11 h-11 text-[#2ab5b2] mx-auto" />
                  <h4 className="text-base font-extrabold text-slate-900">
                    Đã Ghi Nhận Yêu Cầu Đặt Phòng!
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cảm ơn <strong>{customerName}</strong>. Bộ phận Đặt phòng
                    Hotec sẽ liên hệ qua số <strong>{customerPhone}</strong> để
                    xác nhận hạng phòng <strong>{selectedRoomType}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-6 py-2 bg-[#2ab5b2] text-white text-xs font-bold uppercase cursor-pointer"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitBooking} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên quý khách *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Nhập họ và tên..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#2ab5b2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Nhập số điện thoại..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-[#2ab5b2]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Chọn hạng phòng Luxury
                    </label>
                    <select
                      value={selectedRoomType}
                      onChange={(e) => setSelectedRoomType(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 bg-white focus:outline-none focus:border-[#2ab5b2]"
                    >
                      {data.luxuryRoomsSection.rooms.map((r) => (
                        <option key={r.id} value={r.title}>
                          {r.title} ({r.price})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-[#2ab5b2] hover:bg-[#219693] text-white text-xs font-bold uppercase cursor-pointer"
                    >
                      Gửi Yêu Cầu
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
