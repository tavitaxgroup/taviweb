"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  ArrowRight,
  ArrowLeft,
  Lamp,
  Armchair,
  CheckCircle2,
  X,
  Menu,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat9DefaultData,
  type NoiThat9TemplateData,
  type NoiThat9ProductItem
} from "@/template-sources/noi_that_9/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat9TemplateData = adaptClonedTemplateData(
    noiThat9DefaultData,
    incomingData
  );

  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("tat-ca");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<NoiThat9ProductItem | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubmitted, setNewsletterSubmitted] =
    useState<boolean>(false);
  const [footerEmail, setFooterEmail] = useState<string>("");
  const [footerSubmitted, setFooterSubmitted] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0313 728 397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "MONA DECOR";

  const heroSlides = data.heroSlides || [];
  const currentHero = heroSlides[heroIndex] || {
    slideNumber: "02",
    eyebrow: data.hero.eyebrow || "GHẾ",
    title: data.hero.title,
    ctaText: data.hero.ctaText,
    mainImage: data.hero.backgroundImage,
    nextPreviewTitle: "Ghế Lưới MONA",
    nextPreviewImage: data.hero.backgroundImage
  };

  const spotlights = data.featuredSpotlights || [];
  const currentSpotlight = spotlights[spotlightIndex] || spotlights[0];
  const prevSpotlight =
    spotlights[(spotlightIndex - 1 + spotlights.length) % spotlights.length] ||
    spotlights[0];
  const nextSpotlight =
    spotlights[(spotlightIndex + 1) % spotlights.length] || spotlights[0];

  const allProducts = data.products || [];
  const displayedProducts = allProducts.filter((item) => {
    const matchCategory =
      activeCategory === "tat-ca" || item.categoryKey === activeCategory;
    const matchQuery =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#957964] selection:text-white">
      {/* 1. WARM TAUPE FULL-SCREEN HERO WITH INTEGRATED TOP HEADER */}
      <section
        id="trang-chu"
        className="relative bg-[#957964] text-white min-h-[560px] sm:min-h-[680px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden"
      >
        {/* Top Navigation Inside Hero */}
        <header className="relative z-30 w-full px-6 sm:px-12 pt-6 pb-4 flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90">
            <a
              href="#ve-chung-toi"
              className="hover:text-white transition-colors"
            >
              VỀ CHÚNG TÔI
            </a>
            <a href="#cua-hang" className="hover:text-white transition-colors">
              CỬA HÀNG
            </a>
            <a href="#blog" className="hover:text-white transition-colors">
              BLOG
            </a>
            <a href="#lien-he" className="hover:text-white transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white p-1"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Center Minimalist Line-Art Furniture Logo */}
          <a
            href="#trang-chu"
            className="flex flex-col items-center justify-center text-center"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <>
                <div className="flex items-end gap-1 text-white/95 mb-0.5">
                  <Lamp className="w-4 h-4 stroke-[1.5]" />
                  <Armchair className="w-5 h-5 stroke-[1.5]" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white border-t border-white/60 pt-0.5">
                  {brandName}
                </span>
              </>
            )}
          </a>

          {/* Right Header Icons */}
          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Tìm kiếm"
              className="hover:opacity-80 transition-opacity"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="hover:opacity-80 transition-opacity"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                if (allProducts[0]) {
                  setSelectedProduct(allProducts[0]);
                  setOrderSuccess(false);
                }
              }}
              aria-label="Giỏ hàng"
              className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="w-4 h-4 rounded-full bg-white text-[#957964] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </header>

        {/* Expandable Search Input */}
        {searchOpen && (
          <div className="relative z-30 max-w-md mx-auto w-full px-6">
            <div className="bg-white/95 rounded-sm p-1.5 flex items-center gap-2 shadow-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm ghế gỗ, đèn bàn, đồng hồ..."
                className="flex-1 px-3 py-1.5 text-xs text-[#222222] focus:outline-none"
              />
              <a
                href="#cua-hang"
                onClick={() => setSearchOpen(false)}
                className="bg-[#222222] text-white text-[11px] font-semibold px-3 py-1.5"
              >
                Tìm
              </a>
            </div>
          </div>
        )}

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-30 bg-[#7e6451] px-6 py-4 space-y-2 text-xs font-semibold uppercase tracking-widest">
            <a
              href="#ve-chung-toi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              VỀ CHÚNG TÔI
            </a>
            <a
              href="#cua-hang"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              CỬA HÀNG
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              BLOG
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5"
            >
              LIÊN HỆ
            </a>
          </div>
        )}

        {/* Center Hero Split Showcase */}
        <div className="relative z-20 max-w-[1280px] mx-auto w-full px-6 sm:px-12 my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Typography */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 block">
              {currentHero.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.1] text-white">
              {currentHero.title.replace(/MONA/gi, brandName.split(" ")[0])}
            </h1>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#cua-hang"}
                className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:opacity-80 transition-opacity"
              >
                {currentHero.ctaText}
              </a>
            </div>
          </div>

          {/* Center Sculpted Chair Image */}
          <div className="lg:col-span-8 flex items-center justify-center">
            <div className="w-full max-w-[540px] aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-white/15">
              <img
                src={currentHero.mainImage}
                alt={currentHero.title}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Hero Bottom Row: Left Slide Counter + Right Next Slide Tan Card */}
        <div className="relative z-20 w-full pl-6 sm:pl-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="pb-6 sm:pb-8 flex items-baseline gap-1 text-white">
            <span className="text-3xl sm:text-4xl font-light tracking-tight">
              {currentHero.slideNumber}
            </span>
            <span className="text-xs text-white/70">/ 03</span>
          </div>

          {/* Bottom-Right Tan Preview Card (#c49e6c) */}
          <button
            type="button"
            onClick={() =>
              setHeroIndex((prev) => (prev + 1) % (heroSlides.length || 1))
            }
            className="bg-[#c49e6c] hover:bg-[#b8905c] text-white w-full sm:w-[400px] h-28 px-7 flex items-center justify-between gap-4 transition-colors text-left"
          >
            <div>
              <p className="text-sm font-medium leading-snug">
                {currentHero.nextPreviewTitle.replace(
                  /MONA/gi,
                  brandName.split(" ")[0]
                )}
              </p>
            </div>
            <div className="w-20 h-20 rounded-xs overflow-hidden shrink-0 border border-white/20">
              <img
                src={currentHero.nextPreviewImage}
                alt={currentHero.nextPreviewTitle}
                className="w-full h-full object-cover"
              />
            </div>
            <ArrowRight className="w-5 h-5 text-white/90 shrink-0" />
          </button>
        </div>
      </section>

      {/* 2. TOP FREE SHIPPING ANNOUNCEMENT */}
      <div className="py-10 bg-white text-center px-4">
        <a
          href="#cua-hang"
          className="text-sm sm:text-base font-medium text-[#222222] underline underline-offset-4 hover:text-[#957964] transition-colors"
        >
          {data.freeShippingNotice}
        </a>
      </div>

      {/* 3. ASYMMETRIC SPLIT EDITORIAL BANNERS */}
      <section id="ve-chung-toi" className="pb-12 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {(data.editorialSplitBanners || []).map((banner) => {
              const isWide = banner.spanCols === "wide";
              return (
                <div
                  key={banner.id}
                  className={`${
                    isWide ? "lg:col-span-7" : "lg:col-span-5"
                  } group relative h-[320px] sm:h-[400px] overflow-hidden bg-[#b8bcc2]`}
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                  <div className="absolute top-8 left-8 sm:top-10 sm:left-10 text-white max-w-[240px]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 block mb-1.5">
                      {banner.eyebrow}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-medium leading-tight whitespace-pre-line mb-4">
                      {banner.title}
                    </h2>
                    <a
                      href="#cua-hang"
                      className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-white border-b border-white pb-1 hover:opacity-80"
                    >
                      {banner.ctaText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MINIMALIST 25% DISCOUNT NEWSLETTER STRIP */}
      <section className="py-8 bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#e5dec9]">
            <div>
              <h3 className="text-base sm:text-lg font-medium text-[#222222] mb-1">
                {data.newsletterHeading}
              </h3>
              <p className="text-xs text-[#888888]">{data.newsletterSubtext}</p>
            </div>

            {newsletterSubmitted ? (
              <div className="flex items-center gap-2 text-xs text-[#957964] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Cảm ơn bạn! Mã ưu đãi giảm 25% đã được gửi về email của bạn.
                </span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) setNewsletterSubmitted(true);
                }}
                className="flex items-center border-b border-[#dcdcdc] pb-1.5 w-full md:w-[380px]"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập địa chỉ email của bạn..."
                  className="flex-1 text-xs text-[#222222] bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#222222] hover:text-[#957964] pl-3"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. SECTION: TẤT CẢ SẢN PHẨM (4x2 MINIMALIST STUDIO GRID) */}
      <section id="cua-hang" className="py-10 sm:py-14 bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-medium text-[#222222] mb-2">
              Tất Cả Sản Phẩm
            </h2>
            <p className="text-xs text-[#888888] max-w-xl mx-auto">
              {data.allProductsSubtitle}
            </p>

            {activeCategory !== "tat-ca" && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setActiveCategory("tat-ca")}
                  className="text-xs text-[#957964] underline"
                >
                  Hiển thị tất cả sản phẩm
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-12">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  setOrderSuccess(false);
                }}
                className="group cursor-pointer text-center"
              >
                <div className="relative aspect-[4/5] bg-[#f3f3f3] overflow-hidden mb-3.5 flex items-center justify-center p-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.hotBadge && (
                    <span className="absolute top-3 left-3 bg-[#ff5a4e] text-white text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider">
                      HOT
                    </span>
                  )}
                </div>
                <h3 className="text-xs font-medium text-[#444444] group-hover:text-[#957964] transition-colors mb-1">
                  {product.title}
                </h3>
                <p className="text-xs font-bold text-[#222222]">
                  {product.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setActiveCategory("tat-ca")}
              className="bg-[#22252a] hover:bg-[#957964] text-white text-xs font-medium px-10 py-3 transition-colors"
            >
              Xem Tất Cả
            </button>
          </div>
        </div>
      </section>

      {/* 6. DARK FEATURED PRODUCT SHOWCASE ("Sản Phẩm Nổi Bật") */}
      <section className="py-16 sm:py-20 bg-[#141517] text-white overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-12">
            Sản Phẩm Nổi Bật
          </h2>

          {currentSpotlight && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Peek Image */}
              <div className="hidden lg:block lg:col-span-2 opacity-45">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={prevSpotlight.image}
                    alt={prevSpotlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Left Arrow */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setSpotlightIndex(
                      (prev) =>
                        (prev - 1 + spotlights.length) % spotlights.length
                    )
                  }
                  aria-label="Trước"
                  className="text-white/70 hover:text-white transition-colors p-2"
                >
                  <ArrowLeft className="w-6 h-6 stroke-[1.2]" />
                </button>
              </div>

              {/* Center Featured Spotlight */}
              <div className="lg:col-span-6 text-center">
                <div className="aspect-[16/10] overflow-hidden bg-[#1e2024] mb-6 shadow-2xl">
                  <img
                    src={currentSpotlight.image}
                    alt={currentSpotlight.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-normal text-white mb-2">
                  {currentSpotlight.title}
                </h3>
                <p className="text-xs text-white/65 mb-4">
                  {currentSpotlight.subtitle}
                </p>
                <a
                  href="#cua-hang"
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:text-[#c49e6c] hover:border-[#c49e6c] transition-colors"
                >
                  {currentSpotlight.ctaText}
                </a>

                {/* Mobile Left/Right Controls */}
                <div className="flex lg:hidden items-center justify-center gap-6 mt-6">
                  <button
                    type="button"
                    onClick={() =>
                      setSpotlightIndex(
                        (prev) =>
                          (prev - 1 + spotlights.length) % spotlights.length
                      )
                    }
                    className="p-2 border border-white/20 rounded-full"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSpotlightIndex(
                        (prev) => (prev + 1) % spotlights.length
                      )
                    }
                    className="p-2 border border-white/20 rounded-full"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setSpotlightIndex((prev) => (prev + 1) % spotlights.length)
                  }
                  aria-label="Tiếp"
                  className="text-white/70 hover:text-white transition-colors p-2"
                >
                  <ArrowRight className="w-6 h-6 stroke-[1.2]" />
                </button>
              </div>

              {/* Right Peek Image */}
              <div className="hidden lg:block lg:col-span-2 opacity-45">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={nextSpotlight.image}
                    alt={nextSpotlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. SECTION: KHÁM PHÁ THÊM (5-COLUMN PORTRAIT CATEGORIES) */}
      <section id="kham-pha" className="py-16 bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-medium text-center text-[#222222] mb-10">
            Khám Phá Thêm
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {(data.exploreCategories || []).map((cat) => (
              <a
                key={cat.id}
                href="#cua-hang"
                onClick={() => setActiveCategory(cat.filterKey)}
                className="group text-center block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#eaeaea] mb-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-medium text-[#555555] group-hover:text-[#957964] transition-colors">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION: TRANG TRÍ NỘI THẤT (3-COLUMN EDITORIAL BLOG) */}
      <section id="blog" className="py-12 pb-16 bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-medium text-center text-[#222222] mb-10">
            Trang trí nội thất
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group text-center flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-[#f2f2f2] mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#999999] mb-1.5">
                  <span>{post.date}</span>{" "}
                  <strong className="text-[#222222] ml-1">
                    {post.category || "CẢM HỨNG"}
                  </strong>
                </div>
                <h3 className="text-sm font-medium text-[#222222] group-hover:text-[#957964] transition-colors mb-2 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-[11px] text-[#888888] leading-relaxed line-clamp-2 mb-4 px-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <a
                    href="#lien-he"
                    className="inline-block text-[11px] font-medium text-[#222222] border-b border-[#222222] pb-0.5 hover:text-[#957964] hover:border-[#957964] transition-colors"
                  >
                    Đọc thêm
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLEAN MINIMALIST FOOTER */}
      <footer
        id="lien-he"
        className="bg-white pt-14 pb-8 border-t border-[#efefef] text-xs text-[#666666]"
      >
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#efefef]">
            {/* Col 1: Logo & Contact Details */}
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex flex-col items-start mb-1">
                <div className="flex items-end gap-1 text-[#222222] mb-0.5">
                  <Lamp className="w-4 h-4 stroke-[1.6]" />
                  <Armchair className="w-5 h-5 stroke-[1.6]" />
                </div>
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#222222] border-t-2 border-[#222222] pt-0.5">
                  {brandName}
                </span>
              </div>

              <p className="text-[11px] text-[#888888] leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>

              <div className="space-y-1.5 text-[11px] pt-1">
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 uppercase text-[#999999] font-medium">
                    ĐỊA CHỈ
                  </span>
                  <span className="col-span-8 text-[#444444]">
                    {data.business.address}
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 uppercase text-[#999999] font-medium">
                    ĐIỆN THOẠI
                  </span>
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="col-span-8 text-[#444444] hover:text-[#957964]"
                  >
                    {primaryPhone}
                  </a>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <span className="col-span-4 uppercase text-[#999999] font-medium">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="col-span-8 text-[#444444] hover:text-[#957964]"
                  >
                    {primaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: DỊCH VỤ */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#222222] mb-3">
                DỊCH VỤ
              </h3>
              <ul className="space-y-2 text-[11px] text-[#777777]">
                <li>
                  <a href="#cua-hang" className="hover:text-[#222222]">
                    Chính sách giao hàng
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#222222]">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#cua-hang" className="hover:text-[#222222]">
                    Tra cứu đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#222222]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#222222]">
                    Trợ giúp khách hàng
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: DANH MỤC */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#222222] mb-3">
                DANH MỤC
              </h3>
              <ul className="space-y-2 text-[11px] text-[#777777]">
                <li>
                  <a href="#ve-chung-toi" className="hover:text-[#222222]">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#cua-hang" className="hover:text-[#222222]">
                    Cửa hàng
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#222222]">
                    Blog nội thất
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#222222]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: BẢN TIN */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#222222] mb-3">
                BẢN TIN
              </h3>
              <p className="text-[11px] text-[#777777]">
                Luôn cập nhật tất cả bản tin và bộ sưu tập nội thất mới nhất.
              </p>
              {footerSubmitted ? (
                <div className="text-xs text-[#957964] font-medium flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký nhận bản tin thành công!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (footerEmail.trim()) setFooterSubmitted(true);
                  }}
                  className="flex items-center bg-[#fafafa] border border-[#eaeaea] px-3 py-2"
                >
                  <input
                    type="email"
                    required
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    placeholder="Địa chỉ Email của bạn"
                    className="flex-1 bg-transparent text-[11px] text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-[10px] font-bold uppercase tracking-wider text-[#222222] hover:text-[#957964]"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#888888]">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <span className="font-bold text-[#222222]">{brandName}</span>
            </p>
            <div className="flex items-center gap-4 text-[#555555]">
              <a href="#lien-he" className="hover:text-[#957964]">
                𝕏
              </a>
              <a href="#lien-he" className="hover:text-[#957964]">
                f
              </a>
              <a href="#lien-he" className="hover:text-[#957964]">
                IG
              </a>
              <a href="#lien-he" className="hover:text-[#957964]">
                P
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-white border border-[#dddddd] text-[#222222] hover:bg-[#957964] hover:text-white hover:border-[#957964] shadow-md flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#f3f3f3] aspect-square relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#957964]">
                      {selectedProduct.categoryName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="text-[#888888] hover:text-[#222222]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-lg font-medium text-[#222222] mb-2">
                    {selectedProduct.title}
                  </h3>
                  <div className="text-lg font-bold text-[#957964] mb-4">
                    {selectedProduct.price}
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-1 text-xs text-[#555555] border-y border-[#eeeeee] py-3 mb-4">
                    <p>
                      <strong>Kích thước:</strong> {selectedProduct.dimensions}
                    </p>
                    <p>
                      <strong>Chất liệu:</strong> {selectedProduct.material}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedProduct.warranty}
                    </p>
                  </div>
                </div>

                {orderSuccess ? (
                  <div className="bg-[#f9f6f3] border border-[#957964] p-3 text-xs text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#957964] shrink-0" />
                    <span>
                      Đã thêm <strong>{selectedProduct.title}</strong> vào giỏ
                      hàng!
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setOrderSuccess(true);
                      }}
                      className="flex-1 bg-[#22252a] hover:bg-[#957964] text-white text-xs font-medium uppercase tracking-wider py-3 transition-colors"
                    >
                      Thêm vào giỏ
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="border border-[#22252a] text-[#22252a] hover:bg-[#22252a] hover:text-white text-xs font-medium uppercase py-3 px-4 transition-colors"
                    >
                      Tư vấn
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
