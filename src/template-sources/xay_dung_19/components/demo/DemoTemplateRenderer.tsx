"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  ChevronDown,
  Award,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  xayDung19DefaultData,
  type XayDung19TemplateData
} from "@/template-sources/xay_dung_19/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: XayDung19TemplateData = adaptClonedTemplateData(
    xayDung19DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSuiteIndex, setActiveSuiteIndex] = useState(0);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSuiteTitle, setSelectedSuiteTitle] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "info@monalux.vn";

  const suites = data.roomSuites || [];
  const activeSuite = suites[activeSuiteIndex] || suites[0];

  const renderSectionHeader = (watermark: string, title: string) => (
    <div className="relative text-center py-6 mb-6 select-none">
      <span className="block font-serif italic text-5xl sm:text-6xl text-slate-200/80 leading-none tracking-wide">
        {watermark}
      </span>
      <h2 className="-mt-5 sm:-mt-6 relative z-10 text-xl sm:text-2xl font-serif uppercase tracking-[0.14em] text-[#1a1a1a]">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#c5a47e] selection:text-white">
      {/* 1. HEADER NAVBAR (SPLIT BLACK LOGO BLOCK + WHITE NAV + CHAMPAGNE GOLD CTA - Exact match to XD019) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 h-16 flex items-stretch justify-between shadow-sm">
        {/* Far-Left Black Brand Block */}
        <a
          href="#"
          className="bg-[#111111] text-white px-6 sm:px-9 flex items-center justify-center shrink-0"
        >
          {data.business.logo ? (
            <img
              src={data.business.logo}
              alt={data.business.name}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          ) : (
            <span className="text-base sm:text-lg font-serif uppercase tracking-[0.18em]">
              {data.business.name}
            </span>
          )}
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600 flex-1">
          <a href="#" className="text-[#c5a47e] transition">
            TRANG CHỦ
          </a>
          <a
            href="#loai-phong"
            className="inline-flex items-center gap-1 hover:text-[#c5a47e] transition"
          >
            <span>LOẠI PHÒNG</span>
            <ChevronDown className="w-3 h-3" />
          </a>
          <a href="#dich-vu" className="hover:text-[#c5a47e] transition">
            TIN TỨC
          </a>
          <a href="#gioi-thieu" className="hover:text-[#c5a47e] transition">
            GIỚI THIỆU
          </a>
          <a href="#lien-he" className="hover:text-[#c5a47e] transition">
            LIÊN HỆ
          </a>
        </nav>

        {/* Right Icons + Full-Height Champagne Gold CTA */}
        <div className="flex items-center">
          <div className="hidden sm:flex items-center gap-5 px-6 text-slate-700">
            <a
              href="#loai-phong"
              aria-label="Tìm kiếm"
              className="hover:text-[#c5a47e] transition"
            >
              <Search className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                setSelectedSuiteTitle(activeSuite?.title || "Tư vấn đặt phòng");
                setBookingModalOpen(true);
              }}
              aria-label="Giỏ dịch vụ"
              className="hover:text-[#c5a47e] transition cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedSuiteTitle("Đặt phòng & Tư vấn thượng lưu");
              setBookingModalOpen(true);
            }}
            className="h-full bg-[#c5a47e] hover:bg-[#b38f66] text-white text-[11px] font-bold uppercase tracking-[0.18em] px-6 sm:px-8 flex items-center justify-center transition cursor-pointer"
          >
            ĐẶT NGAY
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-4 h-full text-slate-700 border-l border-slate-100"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] text-white px-6 py-4 space-y-2.5 border-b border-white/10">
          {[
            { label: "TRANG CHỦ", href: "#" },
            { label: "LOẠI PHÒNG", href: "#loai-phong" },
            { label: "DỊCH VỤ", href: "#dich-vu" },
            { label: "GIỚI THIỆU", href: "#gioi-thieu" },
            { label: "LIÊN HỆ", href: "#lien-he" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-xs uppercase tracking-widest hover:text-[#c5a47e]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* 2. HERO BANNER (WARM ATMOSPHERIC SUITE WITH BOKEH LIGHTS) */}
      <section className="relative min-h-[460px] lg:min-h-[540px] flex items-center justify-center text-center overflow-hidden bg-[#1c1917]">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle bokeh light particles */}
        <span className="w-2 h-2 rounded-full bg-amber-100/60 blur-[1px] absolute top-1/4 left-1/4" />
        <span className="w-3 h-3 rounded-full bg-amber-100/50 blur-[1px] absolute top-1/3 right-1/4" />
        <span className="w-2 h-2 rounded-full bg-amber-100/60 blur-[1px] absolute bottom-1/4 right-1/3" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 text-white">
          <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-white/90 mb-3">
            {data.hero.eyebrow || "BỘ SƯU TẬP KHÁCH SẠN THƯỢNG LƯU"}
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal tracking-wide text-white mb-7">
            {data.hero.title}
          </h1>
          <a
            href={data.hero.ctaLink || "#loai-phong"}
            className="inline-block bg-[#c5a47e] hover:bg-[#b38f66] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 transition"
          >
            {data.hero.ctaText || "TÌM HIỂU THÊM"}
          </a>
        </div>
      </section>

      {/* 3. "Welcome / KHÁCH SẠN TUYỆT VỜI Ở TRUNG TÂM THÀNH PHỐ." + 3 PORTRAIT PHOTOS */}
      <section id="gioi-thieu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center mb-6 select-none">
            <span className="block font-serif italic text-5xl sm:text-7xl text-slate-200/75 leading-none">
              {data.welcomeWatermark || "Welcome"}
            </span>
            <h2 className="-mt-6 sm:-mt-8 relative z-10 text-xl sm:text-3xl font-serif uppercase tracking-[0.1em] text-[#1a1a1a] max-w-lg mx-auto leading-snug">
              {data.business.aboutTitle || data.welcomeHeading}
            </h2>
          </div>

          <div className="max-w-lg mx-auto text-center text-xs text-slate-500 leading-relaxed space-y-3 mb-6">
            {(data.business.aboutText || []).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="text-center mb-12">
            <a
              href="#dich-vu"
              className="font-serif italic text-sm text-[#c5a47e] hover:underline"
            >
              {data.welcomeLinkText || "Xem dịch vụ của chúng tôi"}
            </a>
          </div>

          {/* 3 Portrait Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(data.welcomeImages || []).slice(0, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[3/4] overflow-hidden bg-slate-100 shadow-sm"
              >
                <img
                  src={imgUrl}
                  alt={`Không gian thượng lưu ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Luxury / LOẠI PHÒNG" (INTERACTIVE SPLIT SHOWCASE CARD ON #f8f8f8) */}
      <section id="loai-phong" className="py-16 lg:py-24 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderSectionHeader("Luxury", "LOẠI PHÒNG")}

          {activeSuite && (
            <div className="bg-white shadow-sm grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              {/* Left Suite Image */}
              <div className="md:col-span-6 aspect-[4/3] md:aspect-auto min-h-[280px] overflow-hidden bg-slate-100">
                <img
                  src={activeSuite.image}
                  alt={activeSuite.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Suite Details */}
              <div className="md:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-serif uppercase tracking-wider text-[#1a1a1a] leading-snug mb-1">
                  {activeSuite.title}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#c5a47e] mb-4">
                  {activeSuite.priceText}
                </p>
                <p className="text-xs font-serif font-bold text-slate-800 mb-3">
                  {activeSuite.subtitle}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {activeSuite.description}
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSuiteTitle(activeSuite.title);
                      setBookingModalOpen(true);
                    }}
                    className="bg-[#c5a47e] hover:bg-[#b38f66] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-5 py-2.5 transition cursor-pointer"
                  >
                    ĐẶT PHÒNG NÀY
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {suites.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSuiteIndex(idx)}
                className={`w-2 h-2 rounded-full transition cursor-pointer ${
                  activeSuiteIndex === idx
                    ? "bg-[#1a1a1a] scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={s.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Services / DỊCH VỤ" (4 TALL PORTRAIT CARDS WITH CENTERED WHITE OVERLAY TITLES) */}
      <section id="dich-vu" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderSectionHeader("Services", "DỊCH VỤ")}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {(data.serviceCards || []).map((srv) => (
              <div
                key={srv.id}
                onClick={() => {
                  setSelectedSuiteTitle(srv.title);
                  setBookingModalOpen(true);
                }}
                className="group relative aspect-[3/5] overflow-hidden bg-slate-900 cursor-pointer shadow-sm"
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="text-sm sm:text-base font-serif uppercase tracking-[0.18em]">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] text-white/85 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Client / NHẬN XÉT" + 4 LUXURY AWARD LOGOS */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {renderSectionHeader("Client", "NHẬN XÉT")}

          <img
            src={
              data.testimonials?.[0]?.avatar ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
            }
            alt={data.testimonials?.[0]?.author || "Chị Ngân"}
            className="w-16 h-16 rounded-full object-cover mx-auto mb-5 shadow-md"
          />

          <blockquote className="font-serif italic text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-4">
            “ {data.testimonials?.[0]?.content} ”
          </blockquote>

          <p className="text-xs text-slate-800 font-bold mb-14">
            {data.testimonials?.[0]?.author || "Chị Ngân"}{" "}
            <span className="font-normal text-slate-400">
              / {data.testimonials?.[0]?.role || "Khách hàng"}
            </span>
          </p>

          {/* 4 Award Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center pt-4 border-t border-slate-100">
            {(data.awards || []).map((aw) => (
              <div
                key={aw.id}
                className="flex flex-col items-center text-center text-slate-700"
              >
                <Award className="w-6 h-6 text-[#c5a47e] mb-1 stroke-[1.5]" />
                <span className="text-[10px] font-serif italic text-slate-400">
                  {aw.topText}
                </span>
                <span className="text-xs font-serif font-bold tracking-widest text-slate-800">
                  {aw.mainTitle}
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">
                  {aw.subText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "Discount / TẬN DỤNG ƯU ĐÃI ĐẶC BIỆT THEO MÙA CỦA CHÚNG TÔI." BANNER */}
      <section className="relative py-20 lg:py-28 bg-slate-900 text-white overflow-hidden">
        <img
          src={data.discountBanner.backgroundImage}
          alt={data.discountBanner.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-lg">
            <span className="block font-serif italic text-5xl sm:text-7xl text-white/20 leading-none select-none">
              {data.discountBanner.watermark}
            </span>
            <h2 className="-mt-6 sm:-mt-8 text-xl sm:text-3xl font-serif uppercase tracking-wider leading-snug mb-4">
              {data.discountBanner.title}
            </h2>
            <button
              type="button"
              onClick={() => {
                setSelectedSuiteTitle("Ưu đãi đặc biệt theo mùa");
                setBookingModalOpen(true);
              }}
              className="font-serif italic text-sm text-[#c5a47e] hover:underline cursor-pointer"
            >
              {data.discountBanner.ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* 8. DARK CHARCOAL FOOTER (#141414) */}
      <footer id="lien-he" className="bg-[#141414] text-slate-400 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: THÔNG TIN */}
            <div>
              <h4 className="text-[11px] font-serif uppercase tracking-[0.18em] text-white mb-5">
                THÔNG TIN
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a47e] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#c5a47e] shrink-0" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#c5a47e] shrink-0" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-white"
                  >
                    {primaryEmail}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: VỀ CHÚNG TÔI */}
            <div>
              <h4 className="text-[11px] font-serif uppercase tracking-[0.18em] text-white mb-5">
                VỀ CHÚNG TÔI
              </h4>
              <ul className="divide-y divide-white/10 text-xs">
                {[
                  { label: "Giới thiệu", href: "#gioi-thieu" },
                  { label: "Dịch vụ", href: "#dich-vu" },
                  { label: "Loại phòng", href: "#loai-phong" },
                  { label: "Liên hệ", href: "#lien-he" }
                ].map((lnk) => (
                  <li key={lnk.label} className="py-2 first:pt-0">
                    <a href={lnk.href} className="hover:text-[#c5a47e] transition">
                      {lnk.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: MẠNG XÃ HỘI */}
            <div>
              <h4 className="text-[11px] font-serif uppercase tracking-[0.18em] text-white mb-5">
                MẠNG XÃ HỘI
              </h4>
              <ul className="divide-y divide-white/10 text-xs">
                {["Facebook", "Instagram", "Youtube", "Pinterest"].map((soc) => (
                  <li key={soc} className="py-2 first:pt-0">
                    <a
                      href="#lien-he"
                      className="hover:text-[#c5a47e] transition"
                    >
                      {soc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: NEWSLETTER */}
            <div>
              {newsletterSubmitted ? (
                <div className="p-4 bg-white/5 border border-[#c5a47e]/40 text-xs text-[#c5a47e]">
                  <CheckCircle2 className="w-5 h-5 mb-1.5" />
                  Cảm ơn quý khách đã đăng ký nhận ưu đãi từ {data.business.name}.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email của bạn"
                    className="w-full bg-[#222222] border border-white/10 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a47e]"
                  />
                  <button
                    type="submit"
                    className="bg-[#c5a47e] hover:bg-[#b38f66] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-6 py-2.5 transition cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Centered Logo & Copyright */}
          <div className="pt-10 text-center space-y-4">
            <div className="text-xl sm:text-2xl font-serif uppercase tracking-[0.22em] text-white">
              {data.business.name}
            </div>
            <p className="text-[11px] text-slate-500">
              © Bản quyền thuộc về {data.business.name} • Thiết kế & Vận hành Khách Sạn Thượng Lưu
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {bookingModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setBookingModalOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full p-7 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a47e]">
              {data.business.name} CONCIERGE
            </span>
            <h3 className="text-lg font-serif uppercase tracking-wider text-slate-900 mt-1 mb-4">
              {selectedSuiteTitle || "Đặt phòng & Tư vấn"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBookingModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên quý khách"
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c5a47e]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại liên hệ"
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c5a47e]"
              />
              <input
                type="text"
                placeholder="Ngày nhận phòng dự kiến & Số lượng khách"
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#c5a47e]"
              />
              <button
                type="submit"
                className="w-full bg-[#c5a47e] hover:bg-[#b38f66] text-white text-xs font-bold uppercase tracking-[0.18em] py-3 transition cursor-pointer"
              >
                XÁC NHẬN YÊU CẦU
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
