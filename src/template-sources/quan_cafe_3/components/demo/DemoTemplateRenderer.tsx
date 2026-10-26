"use client";

import React, { useState } from "react";
import {
  User,
  ShoppingBag,
  Search,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  ShoppingCart,
  MapPin,
  Play,
  Quote,
  ArrowUp,
  CheckCircle2,
  X,
  Menu,
  Wheat
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  quanCafe3DefaultData,
  type QuanCafe3Data
} from "@/template-sources/quan_cafe_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function BakerySealLogo({
  brandName,
  tagline,
  dark = false
}: {
  brandName: string;
  tagline: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Circular Golden-Orange Bakery Emblem */}
      <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-[#f3b659] to-[#d99b38] p-0.5 shadow-sm flex items-center justify-center shrink-0">
        <div className="w-full h-full rounded-full border border-white/70 flex flex-col items-center justify-center text-white">
          <Wheat className="w-5 h-5" />
          <span className="font-serif italic text-[8px] leading-none mt-0.5">
            Bakery
          </span>
        </div>
      </div>

      <div>
        <span
          className={`block font-sans text-xs sm:text-sm font-extrabold uppercase tracking-wider ${
            dark ? "text-white" : "text-[#1c1917]"
          }`}
        >
          {brandName}
        </span>
        <span
          className={`block font-serif italic text-xs sm:text-sm ${
            dark ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {tagline}
        </span>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: QuanCafe3Data = adaptClonedTemplateData(
    quanCafe3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [activePortfolioTab, setActivePortfolioTab] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Set Cup Mousse Tim");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const storyList = data.storyCards || quanCafe3DefaultData.storyCards;
  const spongeCake =
    data.spongeCakeFeature || quanCafe3DefaultData.spongeCakeFeature;
  const staggeredPhotos =
    data.staggeredGallery || quanCafe3DefaultData.staggeredGallery;
  const highlightsList =
    data.categoryHighlights || quanCafe3DefaultData.categoryHighlights;
  const menuProducts = data.bakeryMenu || quanCafe3DefaultData.bakeryMenu;
  const portfolioTabs =
    data.portfolioTabs || quanCafe3DefaultData.portfolioTabs;
  const testimonialsList =
    data.testimonials || quanCafe3DefaultData.testimonials || [];
  const bakerBanner = data.bakerBanner || quanCafe3DefaultData.bakerBanner;

  const currentTab = portfolioTabs[activePortfolioTab] || portfolioTabs[0];
  const currentReview =
    testimonialsList[activeTestimonialIdx] || testimonialsList[0];

  const handleOrderProduct = (productName?: string) => {
    if (productName) setSelectedProduct(productName);
    setCartCount((c) => c + 1);
    setOrderSuccess(false);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1c1917] font-sans selection:bg-[#d99b38] selection:text-white">
      {/* 1. WHITE ARTISANAL HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <a href="#trang-chu">
            <BakerySealLogo
              brandName={data.business.name}
              tagline={
                data.brandTagline || "Thưởng thức hôm nay, nhớ mãi ngày mai"
              }
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-stone-700">
            <a
              href="#trang-chu"
              className="text-[#1c1917] border-b-2 border-[#d99b38] pb-1"
            >
              TRANG CHỦ
            </a>
            <a
              href="#bong-lan-trung-muoi"
              className="hover:text-[#d99b38] transition-colors pb-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#thuc-don-banh"
              className="hover:text-[#d99b38] transition-colors pb-1"
            >
              SẢN PHẨM
            </a>
            <a
              href="#thuc-don-banh"
              className="hover:text-[#d99b38] transition-colors pb-1"
            >
              BÁNH KEM
            </a>
            <a
              href="#bo-suu-tap"
              className="hover:text-[#d99b38] transition-colors pb-1"
            >
              PORTFOLIO
            </a>
            <a
              href="#cau-chuyen-banh"
              className="hover:text-[#d99b38] transition-colors pb-1"
            >
              BLOG
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#d99b38] transition-colors pb-1"
            >
              TÌM ĐƯỜNG
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-stone-700">
            <button
              onClick={() => handleOrderProduct()}
              className="hover:text-[#d99b38] transition-colors cursor-pointer"
              aria-label="Tài khoản"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleOrderProduct()}
              className="relative hover:text-[#d99b38] transition-colors cursor-pointer"
              aria-label="Giỏ bánh"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -bottom-1.5 -right-2 w-4 h-4 rounded-full bg-[#d99b38] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              onClick={() => handleOrderProduct()}
              className="hover:text-[#d99b38] transition-colors cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-2.5 text-xs font-bold uppercase tracking-wider">
            <a
              href="#cau-chuyen-banh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#d99b38]"
            >
              Câu chuyện tiệm bánh
            </a>
            <a
              href="#bong-lan-trung-muoi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#d99b38]"
            >
              Bông lan trứng muối
            </a>
            <a
              href="#thuc-don-banh"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#d99b38]"
            >
              Thực đơn bánh tươi
            </a>
            <a
              href="#bo-suu-tap"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#d99b38]"
            >
              Bộ sưu tập bánh kem
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#d99b38]"
            >
              Liên hệ đặt bánh
            </a>
          </div>
        )}
      </header>

      {/* 2. OVERHEAD RUSTIC ARTISANAL BREADS HERO */}
      <section
        id="trang-chu"
        className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden"
      >
        <img
          src={
            heroSlide === 0
              ? data.hero.backgroundImage
              : data.hero.images?.[1] || data.hero.backgroundImage
          }
          alt={data.business.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Left & Right Slider Arrows */}
        <button
          onClick={() => setHeroSlide((s) => (s + 1) % 2)}
          className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white cursor-pointer"
          aria-label="Slide trước"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setHeroSlide((s) => (s + 1) % 2)}
          className="hidden sm:flex absolute right-14 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white cursor-pointer"
          aria-label="Slide tiếp"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Right Floating Golden Quick Action Dock */}
        <div className="hidden sm:flex flex-col gap-1 absolute right-0 top-1/3 z-30">
          <a
            href="#thuc-don-banh"
            className="w-9 h-9 bg-[#d99b38] hover:bg-[#c28728] text-white flex items-center justify-center shadow-md"
            title="Thực đơn bánh"
          >
            <LayoutGrid className="w-4 h-4" />
          </a>
          <button
            onClick={() => handleOrderProduct()}
            className="w-9 h-9 bg-[#d99b38] hover:bg-[#c28728] text-white flex items-center justify-center shadow-md cursor-pointer"
            title="Đặt bánh nhanh"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
          <a
            href="#lien-he"
            className="w-9 h-9 bg-[#d99b38] hover:bg-[#c28728] text-white flex items-center justify-center shadow-md"
            title="Địa chỉ tiệm bánh"
          >
            <MapPin className="w-4 h-4" />
          </a>
        </div>

        {/* Center Hero Typography */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 space-y-4">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-stone-100">
            {data.hero.eyebrow || "Chúng tôi làm ra bánh thơm ngon"}
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[82px] font-normal tracking-tight text-white leading-none">
            {data.hero.title}
          </h1>

          <div className="pt-4">
            <a
              href="#bong-lan-trung-muoi"
              className="inline-flex items-center gap-3 bg-[#d99b38] hover:bg-[#c28728] text-white text-xs font-semibold px-7 py-3 rounded-full shadow-lg transition-colors"
            >
              <span>{data.hero.ctaText || "Về chúng tôi"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Slider Dots */}
        <div className="absolute bottom-6 inset-x-0 z-20 flex items-center justify-center gap-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                heroSlide === idx ? "bg-[#d99b38] scale-125" : "bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. SECTION: 3 BAKERY STORY CARDS */}
      <section id="cau-chuyen-banh" className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {storyList.map((story) => (
              <article
                key={story.id}
                onClick={() => handleOrderProduct(story.title)}
                className="group cursor-pointer"
              >
                <div className="h-52 overflow-hidden mb-3.5">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[11px] text-stone-400">
                  {story.date} • {story.comments}
                </p>
                <h2 className="mt-1 font-serif text-base sm:text-lg font-normal text-[#1c1917] group-hover:text-[#d99b38] transition-colors">
                  {story.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: BÔNG LAN TRỨNG MUỐI + 5-PHOTO STAGGERED STRIP + 3 HIGHLIGHTS */}
      <section id="bong-lan-trung-muoi" className="pt-16 pb-12 bg-[#f9f6f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                {spongeCake.eyebrow}
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1c1917] leading-tight">
                {data.business.aboutTitle || spongeCake.title}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-stone-500 leading-relaxed">
              <p>{data.business.aboutText?.[0] || spongeCake.paragraph1}</p>
              <p>{data.business.aboutText?.[1] || spongeCake.paragraph2}</p>
              <div className="pt-1">
                <a
                  href="#thuc-don-banh"
                  className="inline-block text-xs font-semibold text-[#1c1917] border-b border-[#1c1917] pb-0.5 hover:text-[#d99b38] hover:border-[#d99b38] transition-colors"
                >
                  {spongeCake.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column Staggered Photo Strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center px-2 sm:px-6 max-w-7xl mx-auto">
          {staggeredPhotos.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`overflow-hidden ${
                idx % 2 === 0 ? "h-60 sm:h-72" : "h-48 sm:h-56"
              }`}
            >
              <img
                src={imgUrl}
                alt={`Bánh tươi thủ công ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3 Category Highlight Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {highlightsList.map((hl) => (
              <div
                key={hl.id}
                onClick={() => handleOrderProduct(hl.title)}
                className="group cursor-pointer pb-4 border-b border-stone-200"
              >
                <div className="h-48 overflow-hidden mb-3.5 relative">
                  <img
                    src={hl.image}
                    alt={hl.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-base font-normal text-[#1c1917] group-hover:text-[#d99b38] transition-colors">
                  {hl.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: NHỮNG SẢN PHẨM CHẤT LƯỢNG ("Thực đơn bánh thơm ngon - khó cưỡng!") */}
      <section id="thuc-don-banh" className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-lg mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-400">
              NHỮNG SẢN PHẨM CHẤT LƯỢNG
            </p>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-4xl font-normal text-[#1c1917] leading-snug">
              Thực đơn bánh
              <br />
              thơm ngon - khó cưỡng!
            </h2>
          </div>

          {/* 4x2 Bakery Product Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {menuProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOrderProduct(item.name)}
                className="group text-center cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-[#f6f5f2] mb-3 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 inset-x-2 bg-[#1c1917]/80 text-white text-[10px] font-semibold py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    + Đặt bánh ngay
                  </span>
                </div>
                <h3 className="font-serif text-xs sm:text-sm font-bold text-[#1c1917] group-hover:text-[#d99b38] transition-colors px-1">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-stone-400 font-medium">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH CROISSANT & GRAIN VIDEO BANNER (PLAY) */}
      <section className="relative h-[320px] sm:h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src={data.videoBannerImage || quanCafe3DefaultData.videoBannerImage}
          alt="Nghệ thuật nướng bánh thủ công"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <button
          onClick={() => setVideoModalOpen(true)}
          className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/80 bg-black/25 hover:bg-[#d99b38] hover:border-[#d99b38] text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center transition-all cursor-pointer"
        >
          PLAY
        </button>
      </section>

      {/* 7. INTERACTIVE PORTFOLIO TABS + ASYMMETRIC MASONRY + BAKER TESTIMONIAL */}
      <section id="bo-suu-tap" className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-stone-100 pb-2">
            {portfolioTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActivePortfolioTab(idx)}
                className={`text-xs font-semibold pb-2 transition-colors cursor-pointer ${
                  activePortfolioTab === idx
                    ? "text-[#1c1917] border-b-2 border-[#d99b38]"
                    : "text-stone-400 hover:text-[#1c1917]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3-Column Asymmetric Masonry Grid matching CF003 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Left Large Square (col-span-6) */}
            <div className="md:col-span-6 h-[320px] sm:h-[420px] overflow-hidden">
              <img
                src={currentTab.leftLargeImage}
                alt={currentTab.label}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Middle Tall Portrait (col-span-3) */}
            <div className="md:col-span-3 h-[320px] sm:h-[420px] overflow-hidden">
              <img
                src={currentTab.middleTallImage}
                alt={currentTab.label}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Stacked 2 Squares (col-span-3) */}
            <div className="md:col-span-3 grid grid-rows-2 gap-5 h-[320px] sm:h-[420px]">
              <div className="overflow-hidden">
                <img
                  src={currentTab.rightTopImage}
                  alt="Bánh nướng trong ngày"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={currentTab.rightBottomImage}
                  alt="Bánh mì thủ công"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Split Baker Testimonial Row */}
          <div className="mt-14 pt-10 border-t border-stone-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 3 Selectable Customer Avatars */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-4">
                {testimonialsList.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className="relative cursor-pointer"
                    aria-label={t.author}
                  >
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className={`w-14 h-14 rounded-full object-cover transition-all ${
                        activeTestimonialIdx === idx
                          ? "ring-2 ring-[#d99b38] opacity-100"
                          : "opacity-55 hover:opacity-85"
                      }`}
                    />
                    {activeTestimonialIdx === idx && (
                      <span className="w-5 h-5 rounded-full bg-[#d99b38] text-white flex items-center justify-center absolute -bottom-1 -right-1 shadow-xs">
                        <Quote className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div>
                <h4 className="font-serif text-sm font-bold text-[#1c1917]">
                  {currentReview?.author}
                </h4>
                <p className="text-[11px] text-stone-400">
                  {currentReview?.role}
                </p>
              </div>
            </div>

            {/* Right Review Copy + Prev/Next Buttons */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-3 text-xs sm:text-sm text-stone-500 leading-relaxed whitespace-pre-line">
                {currentReview?.content}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() =>
                    setActiveTestimonialIdx(
                      (i) =>
                        (i - 1 + testimonialsList.length) %
                        testimonialsList.length
                    )
                  }
                  className="w-8 h-8 rounded-full border border-stone-200 hover:border-[#d99b38] text-stone-500 hover:text-[#d99b38] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Đánh giá trước"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonialIdx(
                      (i) => (i + 1) % testimonialsList.length
                    )
                  }
                  className="w-8 h-8 rounded-full border border-stone-200 hover:border-[#d99b38] text-stone-500 hover:text-[#d99b38] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Đánh giá tiếp"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ATMOSPHERIC BAKER BANNER ("Những người thợ làm bánh...") */}
      <section className="relative py-20 lg:py-28 text-center text-white overflow-hidden">
        <img
          src={bakerBanner.backgroundImage}
          alt={bakerBanner.title}
          className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-[#2b1d12]/65" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-200">
            {bakerBanner.eyebrow}
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-snug whitespace-pre-line">
            {bakerBanner.title}
          </h2>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xl mx-auto">
            {bakerBanner.subtitle}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href="#lien-he"
              className="w-7 h-7 rounded-full bg-[#1877f2] text-white text-xs font-bold flex items-center justify-center"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#lien-he"
              className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-xs flex items-center justify-center"
              aria-label="Instagram"
            >
              ◎
            </a>
            <a
              href="#lien-he"
              className="w-7 h-7 rounded-full bg-black text-white text-xs flex items-center justify-center border border-white/20"
              aria-label="TikTok"
            >
              ♪
            </a>
          </div>
        </div>
      </section>

      {/* 9. DARK ESPRESSO FOOTER (#111111) */}
      <footer id="lien-he" className="bg-[#111111] text-stone-400 pt-14 pb-8 text-xs relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
            {/* Left Brand */}
            <div className="md:col-span-5">
              <BakerySealLogo
                brandName={data.business.name}
                tagline={
                  data.footerTagline || "Tình yêu bắt đầu bằng chiếc bánh thơm"
                }
                dark
              />
            </div>

            {/* Middle Hours & Address */}
            <div className="md:col-span-4 space-y-2.5">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">
                GIỜ MỞ CỬA: {data.business.workingHours || "6:30 - 22:00"}
              </h4>
              <p className="text-stone-400 leading-relaxed">
                Địa chỉ: {data.business.address}
              </p>
              <div className="flex items-center gap-2.5 pt-2">
                {["f", "◎", "♪", "▣"].map((ic, i) => (
                  <a
                    key={i}
                    href="#trang-chu"
                    className="w-7 h-7 rounded-full border border-white/20 hover:border-[#d99b38] text-stone-300 hover:text-[#d99b38] flex items-center justify-center text-[11px] transition-colors"
                  >
                    {ic}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Phone & Email */}
            <div className="md:col-span-3 space-y-2 text-stone-400">
              <p>Điện thoại đặt hàng: {primaryPhone}</p>
              <p>Hotline: {data.business.phone?.[1] || primaryPhone}</p>
              <p>Email: {primaryEmail}</p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <div className="flex items-center gap-5 uppercase font-bold tracking-wider">
              <a href="#trang-chu" className="text-[#d99b38]">
                TRANG CHỦ
              </a>
              <a href="#thuc-don-banh" className="hover:text-white">
                SẢN PHẨM
              </a>
              <a href="#bo-suu-tap" className="hover:text-white">
                BÁNH KEM
              </a>
              <a href="#cau-chuyen-banh" className="hover:text-white">
                BLOG
              </a>
            </div>

            <span>
              © Bản quyền thuộc về{" "}
              <strong className="text-stone-300">{data.business.name}</strong>
            </span>
          </div>
        </div>

        <a
          href="#trang-chu"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d99b38] text-white flex items-center justify-center absolute right-6 bottom-6 transition-colors"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* QUICK ORDER MODAL */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative">
            <button
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d99b38]">
              TIỆM BÁNH THỦ CÔNG
            </p>
            <h3 className="font-serif text-2xl font-normal text-[#1c1917] mt-1 mb-4">
              Đặt Bánh Giao Tận Nơi
            </h3>

            {orderSuccess ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#16a34a] mx-auto" />
                <h4 className="font-serif text-lg font-bold">
                  Đặt bánh thành công!
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Tiệm bánh <strong>{data.business.name}</strong> đã nhận đơn{" "}
                  <strong>{selectedProduct}</strong> và sẽ chuẩn bị mẻ bánh mới ra lò giao đến bạn.
                </p>
                <button
                  onClick={() => setOrderModalOpen(false)}
                  className="bg-[#d99b38] text-white text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOrderSuccess(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">
                    Bánh đã chọn
                  </label>
                  <input
                    type="text"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-[#f9f6f0] border border-stone-200 px-3.5 py-2.5 font-semibold text-[#1c1917]"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên người nhận *"
                  className="w-full border border-stone-200 px-3.5 py-2.5 focus:outline-none focus:border-[#d99b38]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại nhận bánh *"
                  className="w-full border border-stone-200 px-3.5 py-2.5 focus:outline-none focus:border-[#d99b38]"
                />
                <input
                  type="text"
                  placeholder="Lời chúc ghi trên bánh / Ghi chú giao hàng..."
                  className="w-full border border-stone-200 px-3.5 py-2.5 focus:outline-none focus:border-[#d99b38]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#d99b38] hover:bg-[#c28728] text-white font-semibold py-3 rounded-full transition-colors cursor-pointer"
                >
                  Xác Nhận Đặt Bánh
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <span className="font-serif text-lg font-bold text-[#1c1917]">
                Bếp Bánh Thủ Công {data.business.name}
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-stone-400 hover:text-stone-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={data.videoBannerImage || quanCafe3DefaultData.videoBannerImage}
              alt="Quy trình nướng bánh"
              className="w-full h-56 object-cover"
            />
            <p className="text-xs text-stone-600 leading-relaxed">
              Mỗi chiếc bánh mì hoa cúc Pháp và bông lan trứng muối tại{" "}
              <strong>{data.business.name}</strong> đều được nhào bột, ủ men tự nhiên và nướng
              mới mỗi sáng sớm từ 6h30.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
