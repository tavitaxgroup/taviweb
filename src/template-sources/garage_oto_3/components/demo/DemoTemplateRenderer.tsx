"use client";

import React, { useState } from "react";
import {
  MapPin,
  Smartphone,
  Phone,
  Search,
  Car,
  ShieldCheck,
  CheckCircle2,
  ArrowUp,
  Menu,
  X,
  Plus,
  Minus
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto3DefaultData,
  type GarageOto3Data
} from "@/template-sources/garage_oto_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: GarageOto3Data = adaptClonedTemplateData(
    garageOto3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricePageDot, setPricePageDot] = useState(0);
  const [newsPageDot, setNewsPageDot] = useState(0);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [valuationModalItem, setValuationModalItem] = useState<string | null>(
    null
  );

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const highlightCards =
    data.highlightCards || garageOto3DefaultData.highlightCards || [];
  const priceTableCards =
    data.priceTableCards || garageOto3DefaultData.priceTableCards || [];
  const statsList = data.stats || garageOto3DefaultData.stats || [];
  const newsList = data.news || garageOto3DefaultData.news || [];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setTimeout(() => {
      setContactSubmitted(false);
      setValuationModalItem(null);
    }, 3000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#a61b1b] selection:text-white"
    >
      {/* 1. TOP UTILITY BAR + WHITE STICKY HEADER (Matches OTO003) */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Top Utility Strip */}
        <div className="border-b border-slate-100 text-[11px] text-slate-600">
          <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#a61b1b]" />
                <span>{data.business.address}</span>
              </span>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-[#a61b1b] transition-colors border-l border-slate-200 pl-4"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#a61b1b]" />
                <span>Điện thoại: {primaryPhone}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setValuationModalItem("Tra cứu bảng giá thu mua xe")}
              aria-label="Tìm kiếm"
              className="text-slate-500 hover:text-[#a61b1b] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center border-2 border-[#a61b1b] shadow-sm">
              <Car className="w-5 h-5 text-[#e11d48]" />
            </div>
            <div className="leading-none">
              <div className="text-base sm:text-lg font-black tracking-tight text-slate-900">
                {data.business.name}
                <span className="text-[#a61b1b] font-semibold text-xs ml-1.5">
                  / Showroom
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                Thu Mua & Bảo Dưỡng Ô Tô Uy Tín
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wide text-slate-800">
            <a
              href="#top"
              className="text-[#a61b1b] border-b-2 border-[#a61b1b] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#about" className="hover:text-[#a61b1b] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#highlights"
              className="hover:text-[#a61b1b] transition-colors"
            >
              DỊCH VỤ Ô TÔ
            </a>
            <a href="#pricing" className="hover:text-[#a61b1b] transition-colors">
              BẢNG GIÁ XE Ô TÔ CŨ
            </a>
            <a href="#news" className="hover:text-[#a61b1b] transition-colors">
              TIN TỨC
            </a>
            <a href="#contact" className="hover:text-[#a61b1b] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold uppercase text-slate-800">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#a61b1b]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#highlights"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              DỊCH VỤ Ô TÔ
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              BẢNG GIÁ XE Ô TÔ CŨ
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER WITH FROSTED WHITE OVERLAY CARD */}
      <section className="relative min-h-[420px] sm:min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-7 sm:p-9 max-w-md shadow-xl border border-white/60">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#a61b1b] leading-snug mb-3">
              {data.hero.title.includes("Mona")
                ? `${data.business.name} – Dịch Vụ Thu Mua Ô Tô Cũ Giá Cao`
                : data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              {data.hero.description}
            </p>
            <a
              href={data.hero.ctaLink || "#about"}
              className="inline-block border border-[#a61b1b] text-[#a61b1b] hover:bg-[#a61b1b] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded transition-colors"
            >
              {data.hero.ctaText || "XEM THÊM"}
            </a>
          </div>
        </div>
      </section>

      {/* 3. THREE HIGHLIGHT PROMO CARDS */}
      <section id="highlights" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setValuationModalItem(card.title)}
                className="group relative h-44 sm:h-48 rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center p-6 text-center">
                  <h3 className="text-white text-xs sm:text-sm font-extrabold uppercase leading-snug tracking-wide drop-shadow">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VỀ CHÚNG TÔI + RED COUPE PARALLAX BANNER + MULTI-CAR LINEUP STRIP */}
      <section id="about" className="pt-6 bg-white">
        {/* Heading */}
        <div className="max-w-3xl mx-auto px-4 text-center mb-10">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#a61b1b] tracking-wide">
            VỀ {data.business.name.toUpperCase()}
          </h2>
          <div className="w-12 h-0.5 bg-[#a61b1b] mx-auto my-3" />
          <p className="text-xs text-slate-500">
            {data.business.name} đã giúp nhiều chủ xe thanh lý ô tô cũ của mình được giá cao hơn các đơn vị khác.
          </p>
        </div>

        {/* Red Coupe Banner with Left Frosted Card */}
        <div className="relative min-h-[400px] sm:min-h-[450px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${data.aboutBanner.backgroundImage}')`
            }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-7 sm:p-9 max-w-md shadow-xl border border-white/60">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#a61b1b] leading-snug mb-3">
                {data.business.name} – Thu Mua Ô Tô Cũ Giá Cao
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                <strong className="text-slate-900">{data.business.name}</strong>{" "}
                {data.aboutBanner.leadText}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                {data.aboutBanner.subText}
              </p>
              <p className="text-xs sm:text-sm text-slate-800 mb-5">
                Hotline:{" "}
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="font-extrabold text-slate-900 hover:text-[#a61b1b]"
                >
                  {primaryPhone}
                </a>
              </p>
              <button
                type="button"
                onClick={() =>
                  setValuationModalItem("Định giá thu mua ô tô cũ tận nơi")
                }
                className="inline-block border border-[#a61b1b] text-[#a61b1b] hover:bg-[#a61b1b] hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded transition-colors"
              >
                XEM THÊM
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Car Lineup Panoramic Strip */}
        <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden bg-slate-900">
          <img
            src={data.aboutBanner.lineupBannerImage}
            alt="Dàn xe ô tô trưng bày tại Showroom"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* 5. BẢNG GIÁ XE Ô TÔ CŨ MỚI NHẤT (3 Cards with Square Top-Left Date Badge) */}
      <section id="pricing" className="py-16 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#a61b1b] tracking-wide">
              BẢNG GIÁ XE Ô TÔ CŨ MỚI NHẤT
            </h2>
            <div className="w-12 h-0.5 bg-[#a61b1b] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {priceTableCards.map((item) => (
              <div
                key={item.id}
                onClick={() => setValuationModalItem(item.title)}
                className="bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Square Date Badge in Top-Left */}
                  <div className="absolute top-2.5 left-2.5 bg-white border border-[#a61b1b] text-[#a61b1b] w-9 h-9 flex flex-col items-center justify-center leading-none shadow-sm">
                    <span className="text-xs font-extrabold">{item.day}</span>
                    <span className="text-[9px] font-bold">{item.month}</span>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xs sm:text-sm font-bold text-[#a61b1b] mb-2 group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Dots + Button */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-1.5">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setPricePageDot(dot)}
                  aria-label={`Trang ${dot + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    pricePageDot === dot ? "bg-slate-800" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setValuationModalItem("Nhận toàn bộ bảng giá xe ô tô cũ 2026")
              }
              className="border border-[#a61b1b] text-[#a61b1b] hover:bg-[#a61b1b] hover:text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2 rounded transition-colors"
            >
              XEM TẤT CẢ BẢNG GIÁ
            </button>
          </div>
        </div>
      </section>

      {/* 6. TẠI SAO BẠN NÊN LỰA CHỌN CHÚNG TÔI ? (Dark Banner + 4 Corner-Bracket Counters) */}
      <section className="relative py-14 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.whyChooseBannerImage}')` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-base sm:text-lg font-extrabold">
            TẠI SAO BẠN NÊN LỰA CHỌN {data.business.name} ?
          </h2>
          <div className="w-12 h-0.5 bg-[#a61b1b] mx-auto mt-2.5 mb-10" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsList.slice(0, 4).map((stat) => (
              <div
                key={stat.id}
                className="relative py-6 px-4 text-center"
              >
                {/* Top-Left Corner Bracket */}
                <span className="absolute top-0 left-0 w-10 h-6 border-t border-l border-white/70 pointer-events-none" />
                {/* Bottom-Right Corner Bracket */}
                <span className="absolute bottom-0 right-0 w-10 h-6 border-b border-r border-white/70 pointer-events-none" />

                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-white/85">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIN TỨC – KINH NGHIỆM HAY (3 Cards with Circular Red Date Badge) */}
      <section id="news" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase text-[#a61b1b] tracking-wide">
              TIN TỨC – KINH NGHIỆM HAY
            </h2>
            <div className="w-12 h-0.5 bg-[#a61b1b] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.slice(0, 3).map((post) => {
              const [dayPart = "24", monthPart = "Th5"] = (
                post.date || "24 Th5"
              ).split(" ");
              return (
                <article
                  key={post.id}
                  onClick={() => setValuationModalItem(post.title)}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Circular Red Date Badge in Top-Left */}
                    <div className="absolute top-2.5 left-2.5 bg-[#a61b1b] text-white w-9 h-9 rounded-full flex flex-col items-center justify-center leading-none shadow">
                      <span className="text-[11px] font-extrabold">
                        {dayPart}
                      </span>
                      <span className="text-[8px] font-semibold">
                        {monthPart}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-xs sm:text-sm font-bold text-[#a61b1b] mb-2 group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Slider Dots + Button */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-1.5">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setNewsPageDot(dot)}
                  aria-label={`Trang tin tức ${dot + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    newsPageDot === dot ? "bg-slate-800" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <a
              href="#contact"
              className="border border-[#a61b1b] text-[#a61b1b] hover:bg-[#a61b1b] hover:text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2 rounded transition-colors"
            >
              XEM TẤT CẢ TIN TỨC
            </a>
          </div>
        </div>
      </section>

      {/* 8. BẠN CÓ BẤT KÌ CÂU HỎI ? HÃY LIÊN HỆ VỚI CHÚNG TÔI ! (Split Contact Form) */}
      <section id="contact" className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Headline */}
          <div className="md:col-span-5">
            <h2 className="text-xl sm:text-2xl font-normal uppercase text-[#333333] leading-snug tracking-wide">
              BẠN CÓ BẤT KÌ CÂU HỎI ?
              <span className="block mt-1">HÃY LIÊN HỆ VỚI CHÚNG TÔI !</span>
            </h2>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7">
            {contactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-5 text-xs font-medium flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Cảm ơn quý khách! Chuyên viên thẩm định {data.business.name} sẽ liên hệ lại ngay.
                </span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Họ và tên"
                    className="w-full border border-slate-200 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a61b1b]"
                  />
                  <input
                    type="text"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Số điện thoại / Email"
                    className="w-full border border-slate-200 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a61b1b]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <input
                    type="text"
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Lời nhắn (Dòng xe, năm sản xuất, nhu cầu mua/bán...)"
                    className="sm:col-span-8 w-full border border-slate-200 rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#a61b1b]"
                  />
                  <button
                    type="submit"
                    className="sm:col-span-4 w-full bg-[#a61b1b] hover:bg-[#8b1515] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded transition-colors"
                  >
                    GỬI
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. LIGHT GREY 4-COLUMN FOOTER + BLACK COPYRIGHT STRIP */}
      <footer className="bg-[#f4f4f4] text-slate-700 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: Brand Emblem & Intro */}
          <div className="lg:col-span-3">
            <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-800 flex flex-col items-center justify-center mx-auto sm:mx-0 mb-4 shadow-sm">
              <Car className="w-10 h-10 text-[#a61b1b]" />
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-900 mt-1">
                AUTO PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {data.business.name} tự hào là đơn vị{" "}
              <strong className="text-slate-900">
                chuyên thu mua, trao đổi và bảo dưỡng ô tô hàng đầu Việt Nam
              </strong>{" "}
              đã qua kiểm định uy tín và chất lượng tại Việt Nam.
            </p>
          </div>

          {/* Col 2: DỊCH VỤ */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase text-[#a61b1b] mb-4">
              DỊCH VỤ
            </h4>
            <ul className="divide-y divide-slate-200/80 text-[11px] text-slate-600">
              <li className="py-2">
                <a href="#about" className="hover:text-[#a61b1b]">
                  Giới thiệu
                </a>
              </li>
              <li className="py-2">
                <a href="#highlights" className="hover:text-[#a61b1b]">
                  Dịch vụ ô tô
                </a>
              </li>
              <li className="py-2">
                <a href="#pricing" className="hover:text-[#a61b1b]">
                  Bảng giá xe ô tô cũ
                </a>
              </li>
              <li className="py-2">
                <a href="#news" className="hover:text-[#a61b1b]">
                  Tin tức
                </a>
              </li>
              <li className="py-2">
                <a href="#contact" className="hover:text-[#a61b1b]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: LIÊN HỆ */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase text-[#a61b1b] mb-4">
              LIÊN HỆ
            </h4>
            <ul className="space-y-3 text-[11px] text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#a61b1b] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#a61b1b] shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#a61b1b]"
                >
                  {primaryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#a61b1b] shrink-0" />
                <span>{ data.business.phone?.[1] || primaryPhone }</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Interactive Map Card */}
          <div className="lg:col-span-3">
            <div className="relative h-44 rounded border border-slate-300 bg-[#e8ecef] overflow-hidden shadow-sm">
              {/* Stylized Map Roads & Marker */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #cbd5e1 1px, transparent 1px), linear-gradient(180deg, #cbd5e1 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />
              {/* Top-left Map Info Box */}
              <div className="absolute top-2.5 left-2.5 bg-white rounded shadow px-2.5 py-1.5 max-w-[165px] z-10">
                <div className="text-[10px] font-bold text-slate-900 truncate">
                  {data.business.address}
                </div>
                <a
                  href="#contact"
                  className="text-[9px] text-blue-600 hover:underline"
                >
                  Xem bản đồ lớn hơn
                </a>
              </div>

              {/* Center Red Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-1 bg-white/90 px-2.5 py-1 rounded-full shadow">
                  <MapPin className="w-5 h-5 text-[#a61b1b] fill-[#a61b1b]/20" />
                  <span className="text-[10px] font-bold text-[#a61b1b]">
                    {data.business.name}
                  </span>
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-2.5 right-2.5 bg-white rounded shadow flex flex-col divide-y divide-slate-200">
                <span className="p-1 text-slate-600">
                  <Plus className="w-3 h-3" />
                </span>
                <span className="p-1 text-slate-600">
                  <Minus className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-[#0d0d0d] text-slate-400 py-3.5 text-center text-[11px] relative">
          <div className="max-w-5xl mx-auto px-4">
            © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong> – Hệ thống Thu Mua & Bảo Dưỡng Ô Tô Cũ Toàn Quốc.
          </div>
          <a
            href="#top"
            aria-label="Lên đầu trang"
            className="hidden sm:flex fixed bottom-5 right-5 w-9 h-9 rounded-full border border-slate-500 bg-black/70 hover:bg-[#a61b1b] hover:border-[#a61b1b] text-white items-center justify-center transition-colors z-30"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </footer>

      {/* QUICK CAR VALUATION MODAL */}
      {valuationModalItem && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setValuationModalItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#a61b1b] mx-auto mb-3" />
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Đã nhận yêu cầu báo giá!
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyên viên thẩm định {data.business.name} sẽ liên hệ báo giá thu mua/bán xe trong 10 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a61b1b]">
                    {data.business.name}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
                    {valuationModalItem}
                  </h3>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên quý khách
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#a61b1b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại liên hệ
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#a61b1b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Dòng xe & Năm sản xuất cần định giá
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Honda CR-V 2022, Hyundai Accent 2021..."
                    className="w-full border border-slate-200 rounded px-3.5 py-2 text-xs focus:outline-none focus:border-[#a61b1b]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#a61b1b] hover:bg-[#8b1515] text-white text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors"
                >
                  NHẬN BÁO GIÁ TẬN NƠI MIỄN PHÍ
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
