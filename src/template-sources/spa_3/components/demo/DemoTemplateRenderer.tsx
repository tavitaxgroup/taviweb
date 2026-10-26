"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Check,
  Clock,
  ChevronLeft,
  ChevronRight,
  Flower2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa3DefaultData,
  type Spa3Data,
  type Spa3ServiceItem
} from "@/template-sources/spa_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa3Data = adaptClonedTemplateData(spa3DefaultData, incomingData);

  const story = data.storySection || spa3DefaultData.storySection;
  const spaServices = data.spaServices || spa3DefaultData.spaServices;
  const quoteBlock = data.signatureQuote || spa3DefaultData.signatureQuote;
  const banners = data.parallaxBanners || spa3DefaultData.parallaxBanners;
  const checkerItems =
    data.checkerboardFeatures || spa3DefaultData.checkerboardFeatures;
  const newsList = data.news || spa3DefaultData.news || [];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<Spa3ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState(
    spaServices[0]?.title || "Dầu massage"
  );
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const primaryEmail = data.business.email?.[0] || "booking@grandspamona.vn";
  const secondaryEmail = data.business.email?.[1] || "mon@mona.media";

  const openBooking = (serviceTitle?: string) => {
    if (serviceTitle) setBookingServiceTitle(serviceTitle);
    setSelectedServiceModal(null);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] font-sans selection:bg-[#f2a999] selection:text-white">
      {/* =====================================================================
          1. HERO + DARK TRANSLUCENT NAVBAR + OVERLAPPING BOTTOM BAR
         ===================================================================== */}
      <section
        id="trang-chu"
        className="relative min-h-[560px] md:min-h-[650px] w-full bg-[#141814] text-white flex flex-col justify-between"
      >
        {/* Background Botanical Spa Salt Treatment Photo */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/55" />
        </div>

        {/* Top Navbar */}
        <header className="relative z-20 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
            {/* Left Brand Logo: GSPA.MONA + Floral Icon */}
            <a href="#trang-chu" className="flex items-center gap-1.5 group">
              <span className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white">
                {data.brandLogoText || "GSPA.MONA"}
              </span>
              <Flower2 className="w-5 h-5 text-white/90 -mt-2 group-hover:rotate-45 transition-transform" />
            </a>

            {/* Center Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-[0.14em] uppercase text-white/90">
              <a href="#trang-chu" className="hover:text-[#f2a999] transition">
                TRANG CHỦ
              </a>
              <a href="#dich-vu" className="hover:text-[#f2a999] transition">
                DỊCH VỤ
              </a>
              <button
                type="button"
                onClick={() => openBooking()}
                className="hover:text-[#f2a999] transition uppercase cursor-pointer"
              >
                BOOKING
              </button>
              <a href="#gioi-thieu" className="hover:text-[#f2a999] transition">
                GIỚI THIỆU
              </a>
              <a href="#tin-tuc" className="hover:text-[#f2a999] transition">
                TIN TỨC
              </a>
              <a href="#bi-mat" className="hover:text-[#f2a999] transition">
                CỬA HÀNG
              </a>
              <a href="#lien-he" className="hover:text-[#f2a999] transition">
                LIÊN HỆ
              </a>
            </nav>

            {/* Right: Green BOOK button + Cart + Menu Icon */}
            <div className="flex items-center gap-3.5">
              <button
                type="button"
                onClick={() => openBooking()}
                className="bg-[#43a047] hover:bg-[#388e3c] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-xs shadow-xs transition cursor-pointer"
              >
                BOOK
              </button>
              <button
                type="button"
                onClick={() => openBooking("Combo Tinh Dầu Thảo Mộc Tại Nhà")}
                className="text-white/90 hover:text-white transition cursor-pointer"
                title="Giỏ hàng sản phẩm Spa"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-white/90 hover:text-white transition cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#1e2022]/95 backdrop-blur-md border-t border-white/10 px-6 py-5 space-y-3 text-xs tracking-wider uppercase">
              <a
                href="#gioi-thieu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-white/90 hover:text-[#f2a999]"
              >
                Giới Thiệu Grand Spa
              </a>
              <a
                href="#dich-vu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-white/90 hover:text-[#f2a999]"
              >
                Dịch Vụ Trị Liệu
              </a>
              <a
                href="#bi-mat"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-white/90 hover:text-[#f2a999]"
              >
                Bí Mật Thư Giãn
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-white/90 hover:text-[#f2a999]"
              >
                Cẩm Nang Làm Đẹp
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-white/90 hover:text-[#f2a999]"
              >
                Thông Tin Liên Lạc
              </a>
            </div>
          )}
        </header>

        {/* Centered Serif Hero Heading */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center my-auto py-16">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-snug text-white drop-shadow-sm whitespace-pre-line">
            {data.hero.title}
          </h1>
        </div>

        {/* Overlapping Bottom Bar (White Hours Box Left + Salmon-Rose Button Right) */}
        <div className="relative z-20 max-w-3xl mx-auto w-full px-4 translate-y-1/2">
          <div className="grid grid-cols-1 md:grid-cols-12 shadow-lg">
            <div className="md:col-span-8 bg-white text-neutral-600 px-6 py-4 flex items-center justify-center text-xs sm:text-[13px]">
              <span>
                {data.openHoursBanner ||
                  data.business.workingHours ||
                  "Chúng tôi mở cửa 10:00 sáng – 20:00 tối hàng ngày"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => openBooking()}
              className="md:col-span-4 bg-[#f2a999] hover:bg-[#e59584] text-white px-6 py-4 text-xs sm:text-sm font-medium transition cursor-pointer text-center"
            >
              {data.heroActionText || data.hero.ctaText || "Sẵn sàng kiểm tra"}
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. OVERLAPPING STORY CARD + MASSAGE IMAGE
         ===================================================================== */}
      <section
        id="gioi-thieu"
        className="pt-24 pb-16 md:pt-28 md:pb-24 px-4 bg-white"
      >
        <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row items-center">
          {/* Left Overlapping White Card */}
          <div className="w-full md:w-[48%] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.09)] border border-neutral-100 p-8 sm:p-11 z-10 md:-mr-16 mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#333333] leading-snug mb-4">
              {story.title}
            </h2>
            <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mb-6">
              {story.description}
            </p>
            <a
              href="#dich-vu"
              className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-neutral-600 border-b border-neutral-400 pb-1 hover:text-[#f2a999] hover:border-[#f2a999] transition"
            >
              {story.ctaText}
            </a>
          </div>

          {/* Right Massage Photo */}
          <div className="w-full md:w-[66%] ml-auto overflow-hidden shadow-md">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-[320px] sm:h-[400px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ATMOSPHERIC SPA BEDS STRIP + SALMON-ROSE BAND (#f2a999)
         ===================================================================== */}
      <div className="w-full">
        <div className="w-full h-44 sm:h-56 overflow-hidden">
          <img
            src={story.dividerStripImage}
            alt="Không gian phòng trị liệu Grand Spa"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-12 sm:h-14 bg-[#f2a999]" />
      </div>

      {/* =====================================================================
          4. DỊCH VỤ GRAND SPA (3 Cards + Signature Quote Row)
         ===================================================================== */}
      <section id="dich-vu" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Centered Heading + Lotus Emblem */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#333333] mb-1.5">
              Dịch vụ Grand Spa
            </h2>
            <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-400">
              HÃY ĐẾN TRẢI NGHIỆM BÍ MẬT THƯ GIÃN.
            </p>
            <div className="mt-3 flex justify-center">
              <Flower2 className="w-4 h-4 text-[#f2a999]" />
            </div>
          </div>

          {/* 3 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {spaServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-neutral-100 rounded-xs overflow-hidden flex flex-col text-center group"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#333333] mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed mb-5">
                      {srv.description}
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedServiceModal(srv)}
                      className="text-[11px] font-semibold tracking-[0.16em] uppercase text-neutral-600 border-b border-neutral-400 pb-0.5 hover:text-[#f2a999] hover:border-[#f2a999] transition cursor-pointer"
                    >
                      XEM GIÁ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2-Column Quote & Philosophy Row */}
          <div className="mt-14 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6">
              <blockquote className="font-serif text-lg sm:text-xl text-neutral-500 leading-relaxed">
                {quoteBlock.quote}
                <footer className="mt-1 text-base text-neutral-400">
                  – {quoteBlock.author}
                </footer>
              </blockquote>
            </div>
            <div className="md:col-span-6">
              <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed">
                {quoteBlock.companionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PARALLAX BANNER 1 ("Sự vô tận của vẻ đẹp & niềm đam mê") + SALMON BAND
         ===================================================================== */}
      <div className="w-full">
        <div className="relative h-56 sm:h-64 w-full overflow-hidden flex items-center justify-center text-center px-4">
          <img
            src={banners.middle.image}
            alt={banners.middle.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-white">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-2">
              {banners.middle.title}
            </h2>
            <p className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-white/85">
              {banners.middle.subtitle}
            </p>
          </div>
        </div>
        <div className="w-full h-14 sm:h-16 bg-[#f2a999]" />
      </div>

      {/* =====================================================================
          6. CHECKERBOARD 2x2 FEATURE GRID ("Bí mật thư giãn" & "Làm hài lòng...")
         ===================================================================== */}
      <section id="bi-mat" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {checkerItems.map((item) => {
            const isRightImage = item.imagePosition === "right";
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch"
              >
                {/* Text Card */}
                <div
                  className={`bg-white border border-neutral-200/80 shadow-[0_6px_25px_rgba(0,0,0,0.06)] p-8 sm:p-12 flex flex-col justify-center ${
                    isRightImage ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#444444] leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => openBooking(item.title)}
                      className="text-[11px] font-semibold tracking-[0.15em] uppercase text-neutral-600 border-b border-neutral-400 pb-1 hover:text-[#f2a999] hover:border-[#f2a999] transition cursor-pointer"
                    >
                      {item.ctaText}
                    </button>
                  </div>
                </div>

                {/* Image Card */}
                <div
                  className={`overflow-hidden shadow-sm min-h-[260px] sm:min-h-[300px] ${
                    isRightImage ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          7. PARALLAX BANNER 2 ("Thư giãn. Không còn vượt quá ngân sách...") + SALMON BAND
         ===================================================================== */}
      <div className="w-full">
        <div className="relative h-56 sm:h-64 w-full overflow-hidden flex items-center justify-center text-center px-4">
          <img
            src={banners.bottom.image}
            alt={banners.bottom.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 text-white">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal mb-2">
              {banners.bottom.title}
            </h2>
            <p className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-white/85">
              {banners.bottom.subtitle}
            </p>
          </div>
        </div>
        <div className="w-full h-14 sm:h-16 bg-[#f2a999]" />
      </div>

      {/* =====================================================================
          8. 3-COLUMN SPA BLOG / JOURNAL CARDS
         ===================================================================== */}
      <section id="tin-tuc" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {newsList.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white shadow-[0_8px_28px_rgba(0,0,0,0.07)] border border-neutral-100 rounded-xs overflow-hidden flex flex-col group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#333333] line-clamp-1 group-hover:text-[#f2a999] transition">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-amber-500 my-2">
                      <Calendar className="w-3 h-3" />
                      <span className="text-neutral-400">{post.date}</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. DARK CHARCOAL 3-COLUMN FOOTER (#222222)
         ===================================================================== */}
      <footer id="lien-he" className="bg-[#222222] text-neutral-400 pt-14 pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10 text-xs">
            {/* Column 1: GSPA.MONA Logo + Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-white">
                <span className="text-xl font-bold tracking-wider uppercase">
                  {data.brandLogoText || "GSPA.MONA"}
                </span>
                <Flower2 className="w-5 h-5 text-white/85 -mt-2" />
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {data.business.aboutText?.[0] ||
                  "Grand Spa Mona mang đến không gian trị liệu thảo mộc hoàng gia yên bình, giúp phục hồi năng lượng, làm đẹp da và cân bằng cảm xúc mỗi ngày."}
              </p>
            </div>

            {/* Column 2: THÔNG TIN LIÊN LẠC */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                THÔNG TIN LIÊN LẠC
              </h3>
              <ul className="space-y-2 text-[11px] text-neutral-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-500" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0 text-neutral-500" />
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:text-white transition"
                  >
                    {primaryPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0 text-neutral-500" />
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="hover:text-white transition"
                  >
                    {primaryEmail}
                  </a>
                </li>
                <li className="pl-5 text-neutral-400">{secondaryEmail}</li>
              </ul>

              {/* Colorful Circle Social Icons (Matches SPA006 Footer) */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-[#3b5998] text-white flex items-center justify-center text-[11px] font-bold"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-[#1da1f2] text-white flex items-center justify-center text-[11px] font-bold"
                >
                  tw
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-[#0077b5] text-white flex items-center justify-center text-[11px] font-bold"
                >
                  in
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-[#cd201f] text-white flex items-center justify-center text-[11px] font-bold"
                >
                  yt
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full bg-[#e4405f] text-white flex items-center justify-center text-[11px] font-bold"
                >
                  ig
                </a>
              </div>
            </div>

            {/* Column 3: ĐĂNG KÝ Newsletter */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                ĐĂNG KÝ
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Đăng ký để nhận được thông tin ưu đãi mới nhất từ chúng tôi.
              </p>

              {newsletterSubscribed ? (
                <div className="bg-white/10 text-emerald-300 p-3 rounded-xs text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Đã đăng ký nhận ưu đãi thành công!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) setNewsletterSubscribed(true);
                  }}
                  className="space-y-2.5"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email của bạn"
                    className="w-full bg-white text-neutral-800 px-3.5 py-2.5 text-xs rounded-xs text-center focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f2a999] hover:bg-[#e59584] text-white font-semibold uppercase tracking-wider text-xs py-2.5 rounded-xs transition cursor-pointer"
                  >
                    THEO DÕI
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 text-[11px] text-neutral-500">
            © Bản quyền thuộc về . Thiết kế website{" "}
            <span className="text-neutral-300 font-semibold">
              {data.business.name}
            </span>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: SERVICE PRICE & DETAILS ("XEM GIÁ")
         ===================================================================== */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#333333] max-w-md w-full rounded-xs overflow-hidden shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-48 overflow-hidden relative">
              <img
                src={selectedServiceModal.image}
                alt={selectedServiceModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#f2a999] text-white px-3 py-1 text-xs font-bold">
                {selectedServiceModal.duration} • {selectedServiceModal.price}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  {selectedServiceModal.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-[#333333] mt-0.5">
                  {selectedServiceModal.title}
                </h3>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {selectedServiceModal.description}
              </p>

              <div className="bg-[#faf8f6] p-4 space-y-2 border border-neutral-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                  Quy trình trị liệu tiêu chuẩn:
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {selectedServiceModal.details.map((step, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#f2a999] shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => openBooking(selectedServiceModal.title)}
                className="w-full bg-[#f2a999] hover:bg-[#e59584] text-white font-semibold uppercase tracking-wider text-xs py-3 transition cursor-pointer"
              >
                ĐẶT LỊCH LIỆU TRÌNH NÀY ({selectedServiceModal.price})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: SPA BOOKING ("BOOK" / "Sẵn sàng kiểm tra")
         ===================================================================== */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-[#333333] max-w-md w-full p-7 rounded-xs shadow-2xl relative border-t-4 border-[#f2a999]">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <Flower2 className="w-6 h-6 text-[#f2a999] mx-auto mb-1" />
              <h3 className="font-serif text-2xl text-[#333333]">
                Đặt Lịch Trị Liệu Grand Spa
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {data.openHoursBanner}
              </p>
            </div>

            {bookingSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#43a047] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider">
                  Đặt lịch hẹn thành công!
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Lễ tân của {data.business.name} sẽ liên hệ qua số điện thoại để
                  chuẩn bị phòng hương liệu riêng cho quý khách.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="bg-[#f2a999] text-white text-xs font-semibold uppercase px-8 py-2.5"
                >
                  Đóng
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Liệu trình quan tâm
                  </label>
                  <input
                    type="text"
                    value={bookingServiceTitle}
                    onChange={(e) => setBookingServiceTitle(e.target.value)}
                    className="w-full border border-neutral-300 px-3 py-2.5 focus:outline-none focus:border-[#f2a999]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                    Họ và tên quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Ngọc Lan Khuê"
                    className="w-full border border-neutral-300 px-3 py-2.5 focus:outline-none focus:border-[#f2a999]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0908 xxx xxx"
                      className="w-full border border-neutral-300 px-3 py-2.5 focus:outline-none focus:border-[#f2a999]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                      Khung giờ hẹn
                    </label>
                    <input
                      type="time"
                      defaultValue="14:00"
                      className="w-full border border-neutral-300 px-3 py-2.5 focus:outline-none focus:border-[#f2a999]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f2a999] hover:bg-[#e59584] text-white font-semibold uppercase tracking-wider py-3 transition cursor-pointer mt-2"
                >
                  XÁC NHẬN ĐẶT LỊCH NGAY
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
