"use client";

import React, { useState } from "react";
import {
  Zap,
  Search,
  User,
  ShoppingBag,
  Phone,
  ArrowRight,
  Gamepad2,
  Mouse,
  Smartphone,
  Watch,
  Keyboard,
  Monitor,
  Laptop,
  Home,
  Star,
  Truck,
  Headphones,
  RotateCcw,
  Gift,
  Mail,
  ArrowUp,
  X,
  CheckCircle2,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct16DefaultData,
  B2bProduct16Data,
  ETechProductItem,
} from "@/template-sources/b2b_product_16/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function ETechLogo({ brandName }: { brandName: string }) {
  return (
    <a href="#" className="inline-flex items-center gap-2 select-none">
      <div className="w-8 h-8 rounded-full bg-slate-950 text-[#facc15] flex items-center justify-center shadow-xs shrink-0">
        <Zap className="w-4 h-4 fill-current" />
      </div>
      <span className="text-xl sm:text-2xl font-black italic tracking-tight text-[#e63b1f]">
        {brandName}
      </span>
    </a>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: B2bProduct16Data = adaptClonedTemplateData(
    b2bProduct16DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Phổ biến");
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<ETechProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#e63b1f] selection:text-white overflow-x-hidden">
      {/* 1. TOP ORANGE-RED ACCENT BAR */}
      <div className="h-2 bg-[#e63b1f] w-full" />

      {/* 2. MAIN HEADER + SUB-CATEGORY BAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-bold text-slate-700">
            <a
              href="#"
              className="bg-[#facc15] text-slate-950 px-3.5 py-1.5 rounded-md font-extrabold"
            >
              Trang Chủ
            </a>
            <a
              href="#danh-muc"
              className="hover:text-[#e63b1f] transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#e63b1f] transition-colors"
            >
              Sản Phẩm ▾
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#e63b1f] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#e63b1f] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Center Brand Logo */}
          <ETechLogo brandName={data.business.name} />

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setQuoteSubmitted(false);
                setQuoteModalOpen(true);
              }}
              aria-label="Tìm kiếm"
              className="text-slate-700 hover:text-[#e63b1f] cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setQuoteSubmitted(false);
                setQuoteModalOpen(true);
              }}
              aria-label="Tài khoản đại lý"
              className="text-slate-700 hover:text-[#e63b1f] cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              aria-label="Giỏ hàng"
              className="relative text-slate-700 hover:text-[#e63b1f] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#facc15] text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded border border-slate-200 text-slate-700"
              aria-label="Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-Category Strip */}
        <div className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex items-center gap-6 shrink-0">
              {data.subNavCategories.map((cat) => {
                const isAct = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isAct
                        ? "text-[#e63b1f] font-bold"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
            <a
              href={`tel:${data.business.phone[0]}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#e63b1f] shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{data.business.phone[0]}</span>
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-2 text-xs font-bold">
            <a href="#" className="block py-1 text-[#e63b1f]">
              Trang Chủ
            </a>
            <a href="#danh-muc" className="block py-1">
              Giới Thiệu
            </a>
            <a href="#san-pham" className="block py-1">
              Sản Phẩm
            </a>
            <a href="#tin-tuc" className="block py-1">
              Tin Tức
            </a>
            <a href="#lien-he" className="block py-1">
              Liên Hệ
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO BENTO GRID (2 Top Cards + 3 Bottom Cards) */}
      <section className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Top 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Top Left: Samsung Galaxy Tab A8 */}
            <div className="bg-[#f1f5f9] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="space-y-2.5 max-w-xs z-10">
                <span className="text-xs font-bold text-[#e63b1f]">
                  {data.heroBento.topLeft.priceLabel}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {data.hero.title || data.heroBento.topLeft.title}
                </h1>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {data.hero.subtitle || data.heroBento.topLeft.description}
                </p>
                <div className="pt-2">
                  <a
                    href={data.hero.ctaLink || "#san-pham"}
                    className="inline-flex items-center gap-2 bg-[#e63b1f] hover:bg-[#c82d14] text-white text-xs font-bold px-5 py-2.5 rounded-md shadow-xs transition-colors"
                  >
                    <span>{data.hero.ctaText || "Mua Ngay"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative w-48 h-44 shrink-0">
                <span className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#facc15] text-slate-950 text-[10px] font-black flex items-center justify-center text-center leading-tight shadow">
                  {data.heroBento.topLeft.discountText}
                </span>
                <img
                  src={
                    data.hero.backgroundImage || data.heroBento.topLeft.image
                  }
                  alt={data.heroBento.topLeft.title}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              </div>
            </div>

            {/* Top Right: Meta Quest 2 256GB */}
            <div className="bg-[#eff2fe] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="space-y-2.5 max-w-xs z-10">
                <span className="inline-block bg-[#facc15] text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded">
                  {data.heroBento.topRight.priceBadge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {data.heroBento.topRight.title}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {data.heroBento.topRight.description}
                </p>
                <div className="pt-2">
                  <a
                    href="#san-pham"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold px-5 py-2.5 rounded-md shadow-xs transition-colors"
                  >
                    <span>{data.heroBento.topRight.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="w-48 h-44 shrink-0">
                <img
                  src={data.heroBento.topRight.image}
                  alt={data.heroBento.topRight.title}
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Bottom 3 Cards (3-col / 6-col / 3-col) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Bottom Left: Pink Card */}
            <div className="lg:col-span-3 bg-[#fce7e7] rounded-2xl p-5 text-center flex flex-col items-center justify-between">
              <img
                src={data.heroBento.bottomLeft.image}
                alt={data.heroBento.bottomLeft.title}
                className="w-32 h-28 object-cover rounded-xl mb-3 shadow-xs"
              />
              <div>
                <span className="text-[11px] font-bold text-[#e63b1f]">
                  {data.heroBento.bottomLeft.tag}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">
                  {data.heroBento.bottomLeft.title}
                </h3>
                <a
                  href="#san-pham"
                  className="mt-3 inline-block border border-[#e63b1f]/40 text-[#e63b1f] hover:bg-[#e63b1f] hover:text-white text-xs font-bold px-4 py-1.5 rounded-md transition-colors"
                >
                  {data.heroBento.bottomLeft.ctaText}
                </a>
              </div>
            </div>

            {/* Bottom Center: Mint Card */}
            <div className="lg:col-span-6 bg-[#e9f7ef] rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-block bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                  {data.heroBento.bottomCenter.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {data.heroBento.bottomCenter.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-black text-emerald-600">
                    {data.heroBento.bottomCenter.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    {data.heroBento.bottomCenter.oldPrice}
                  </span>
                </div>
                <div className="pt-1">
                  <a
                    href="#san-pham"
                    className="inline-flex items-center gap-2 bg-slate-950 hover:bg-[#e63b1f] text-white text-xs font-bold px-5 py-2.5 rounded-md transition-colors"
                  >
                    <span>{data.heroBento.bottomCenter.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <img
                src={data.heroBento.bottomCenter.image}
                alt={data.heroBento.bottomCenter.title}
                className="w-40 h-40 object-cover rounded-2xl shadow-md shrink-0"
              />
            </div>

            {/* Bottom Right: Yellow Camera Card */}
            <div className="lg:col-span-3 bg-[#fef9c3] rounded-2xl p-5 text-center flex flex-col items-center justify-between">
              <img
                src={data.heroBento.bottomRight.image}
                alt={data.heroBento.bottomRight.title}
                className="w-32 h-32 object-cover rounded-xl mb-3 shadow-xs"
              />
              <div>
                <span className="text-[11px] font-semibold text-slate-500">
                  {data.heroBento.bottomRight.tag}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">
                  {data.heroBento.bottomRight.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DANH MỤC PHỔ BIẾN (4-Col Left Text + 8-Col 4x2 Category Grid) */}
      <section id="danh-muc" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            {/* Left Copy */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#e63b1f]">
                {data.popularCategoriesSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.popularCategoriesSection.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.popularCategoriesSection.description}
              </p>
              <div className="pt-2">
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-2 bg-[#e63b1f] hover:bg-[#c82d14] text-white text-xs font-bold px-5 py-2.5 rounded-md"
                >
                  <span>{data.popularCategoriesSection.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right 4x2 Category Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {data.popularCategoriesSection.categories.map((cat) => {
                const CatIcon =
                  cat.iconType === "gamepad"
                    ? Gamepad2
                    : cat.iconType === "mouse"
                    ? Mouse
                    : cat.iconType === "phone"
                    ? Smartphone
                    : cat.iconType === "watch"
                    ? Watch
                    : cat.iconType === "keyboard"
                    ? Keyboard
                    : cat.iconType === "monitor"
                    ? Monitor
                    : cat.iconType === "laptop"
                    ? Laptop
                    : Home;

                return (
                  <a
                    key={cat.id}
                    href="#san-pham"
                    className="border border-slate-100 hover:border-[#e63b1f]/40 bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-2xs hover:shadow-md transition-all group"
                  >
                    <div className="w-11 h-11 rounded-full bg-slate-50 group-hover:bg-orange-50 text-[#e63b1f] flex items-center justify-center mb-3">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-extrabold text-slate-900">
                      {cat.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 mt-0.5">
                      {cat.countLabel}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DUAL MID PROMO BANNERS */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Dark Blue Banner */}
          <div className="lg:col-span-8 bg-[#071936] text-white rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="space-y-3 max-w-xs">
              <span className="inline-block bg-[#e63b1f] text-white text-[11px] font-bold px-3 py-1 rounded">
                {data.midPromoBanners.leftDark.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {data.midPromoBanners.leftDark.title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-extrabold text-white">
                  {data.midPromoBanners.leftDark.price}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  {data.midPromoBanners.leftDark.oldPrice}
                </span>
              </div>
              <div className="pt-1">
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-2 bg-[#facc15] hover:bg-amber-300 text-slate-950 text-xs font-extrabold px-5 py-2.5 rounded-md"
                >
                  <span>{data.midPromoBanners.leftDark.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <img
              src={data.midPromoBanners.leftDark.image}
              alt={data.midPromoBanners.leftDark.title}
              className="w-56 h-52 object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Right Light Blue Card */}
          <div className="lg:col-span-4 bg-[#dbeafe] rounded-2xl p-7 flex flex-col items-center justify-between text-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {data.midPromoBanners.rightLight.title}
              </h3>
              <a
                href="#san-pham"
                className="mt-4 inline-flex items-center gap-2 bg-[#e63b1f] hover:bg-[#c82d14] text-white text-xs font-bold px-5 py-2.5 rounded-md"
              >
                <span>{data.midPromoBanners.rightLight.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <img
              src={data.midPromoBanners.rightLight.image}
              alt={data.midPromoBanners.rightLight.title}
              className="w-48 h-36 object-cover rounded-xl mt-5 shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* 6. SẢN PHẨM NỔI BẬT (4x2 Product Grid with Countdown & Stock Bars) */}
      <section id="san-pham" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#e63b1f]">
                {data.featuredProductsSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {data.featuredProductsSection.title}
              </h2>
            </div>

            {/* 4 Circular Countdown Badges */}
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#e63b1f]">
              {[
                data.featuredProductsSection.countdown.days,
                data.featuredProductsSection.countdown.hours,
                data.featuredProductsSection.countdown.mins,
                data.featuredProductsSection.countdown.secs,
              ].map((val, idx) => (
                <React.Fragment key={idx}>
                  <span className="w-9 h-9 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                    {val}
                  </span>
                  {idx < 3 && <span className="text-slate-300">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.featuredProductsSection.products.map((prod) => {
              const progressPct = Math.min(
                100,
                Math.round((prod.availableCount / prod.totalStock) * 100)
              );
              return (
                <div
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className="bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition-all p-4 flex flex-col cursor-pointer group"
                >
                  <div className="relative bg-[#f4f6fb] rounded-xl h-44 overflow-hidden mb-3.5">
                    <span className="absolute top-2.5 left-2.5 z-10 bg-[#e63b1f] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {prod.discountBadge}
                    </span>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {prod.category}
                  </span>
                  <h3 className="mt-1 text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-[#e63b1f]">
                    {prod.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: prod.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <div className="mt-2.5">
                    <div className="text-[10px] text-slate-500 mb-1">
                      Có sẵn:{" "}
                      <strong className="text-[#e63b1f]">
                        {prod.availableCount}/{prod.totalStock}
                      </strong>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#e63b1f]"
                        style={{ width: `${Math.max(15, progressPct)}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-3 pt-2 flex items-baseline gap-2">
                    <span className="text-[11px] text-slate-400 line-through">
                      {prod.oldPrice}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900">
                      {prod.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => {
                setQuoteSubmitted(false);
                setQuoteModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-[#e63b1f] hover:bg-[#c82d14] text-white text-xs font-bold px-6 py-2.5 rounded-md cursor-pointer"
            >
              <span>Xem Tất Cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. BRIGHT YELLOW STRIP BANNER */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#facc15] rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
            <img
              src={data.yellowStripBanner.leftImage}
              alt="Tai nghe không dây"
              className="w-36 h-24 object-cover rounded-xl"
            />
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 max-w-xs leading-tight">
                {data.yellowStripBanner.title}
              </h3>
              <a
                href="#san-pham"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-[#e63b1f] text-white text-xs font-bold px-5 py-2.5 rounded-md shrink-0"
              >
                <span>{data.yellowStripBanner.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <img
              src={data.yellowStripBanner.rightImage}
              alt="Đồng hồ thông minh"
              className="w-28 h-24 object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 8. 3-COLUMN FEATURED & PROMO SHOWCASE */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Blue Vertical Card */}
          <div className="lg:col-span-4 bg-[#002684] text-white rounded-2xl p-6 text-center flex flex-col items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200">
                {data.tripleShowcaseSection.leftBanner.eyebrow}
              </span>
              <h3 className="mt-1 text-xl font-extrabold">
                {data.tripleShowcaseSection.leftBanner.title}
              </h3>
              <a
                href="#san-pham"
                className="mt-4 inline-flex items-center gap-2 bg-[#facc15] text-slate-950 text-xs font-extrabold px-5 py-2 rounded-md"
              >
                <span>{data.tripleShowcaseSection.leftBanner.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <img
              src={data.tripleShowcaseSection.leftBanner.image}
              alt={data.tripleShowcaseSection.leftBanner.title}
              className="w-48 h-40 object-cover rounded-xl mt-6"
            />
          </div>

          {/* Middle Column: Sản phẩm nổi bật */}
          <div className="lg:col-span-4 space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="text-base font-extrabold text-slate-900 inline-block border-b-2 border-[#e63b1f] pb-2 -mb-2.5">
                Sản phẩm nổi bật
              </h3>
            </div>
            <div className="space-y-3">
              {data.tripleShowcaseSection.featuredMiniList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-100 rounded-xl p-3 flex items-center gap-3.5 shadow-2xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-slate-50"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-0.5 text-amber-400 my-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] text-slate-400 line-through">
                        {item.oldPrice}
                      </span>
                      <span className="text-xs font-extrabold text-slate-900">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Khuyến mãi */}
          <div className="lg:col-span-4 space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h3 className="text-base font-extrabold text-slate-900 inline-block border-b-2 border-[#e63b1f] pb-2 -mb-2.5">
                Khuyến mãi
              </h3>
            </div>
            <div className="space-y-3">
              {data.tripleShowcaseSection.promoMiniList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-100 rounded-xl p-3 flex items-center gap-3.5 shadow-2xs"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 bg-slate-50"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-800 truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-0.5 text-amber-400 my-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] text-slate-400 line-through">
                        {item.oldPrice}
                      </span>
                      <span className="text-xs font-extrabold text-slate-900">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. 5x2 PARTNER BRAND LOGOS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {data.brandPartners.map((bp) => (
            <div
              key={bp.id}
              className="h-16 border border-slate-100 rounded-xl bg-white flex items-center justify-center px-4 shadow-2xs"
            >
              <span
                className="text-sm sm:text-base font-black tracking-wider uppercase"
                style={{ color: bp.color }}
              >
                {bp.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. SMART WATCH COUNTDOWN DEAL BANNER */}
      <section className="py-14 bg-[#eef2f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Left Earbuds Case + Starburst -20% OFF */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative">
              <span className="absolute -top-4 right-4 z-10 w-16 h-16 rounded-full bg-[#facc15] text-slate-950 text-xs font-black flex items-center justify-center text-center shadow-lg">
                {data.smartWatchDealSection.discountBadge}
              </span>
              <img
                src={data.smartWatchDealSection.image}
                alt={data.smartWatchDealSection.title}
                className="w-80 sm:w-96 h-64 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Right Countdown */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase text-[#e63b1f]">
              {data.smartWatchDealSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {data.smartWatchDealSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
              {data.smartWatchDealSection.description}
            </p>

            <div className="flex items-center gap-3 pt-1">
              {[
                {
                  val: data.smartWatchDealSection.countdown.days,
                  lbl: "NGÀY",
                },
                {
                  val: data.smartWatchDealSection.countdown.hours,
                  lbl: "GIỜ",
                },
                {
                  val: data.smartWatchDealSection.countdown.mins,
                  lbl: "PHÚT",
                },
                {
                  val: data.smartWatchDealSection.countdown.secs,
                  lbl: "GIÂY",
                },
              ].map((bx, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-white rounded-xl shadow-xs flex flex-col items-center justify-center"
                >
                  <span className="text-base font-black text-slate-900">
                    {bx.val}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400">
                    {bx.lbl}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#san-pham"
                className="inline-flex items-center gap-2 bg-[#e63b1f] hover:bg-[#c82d14] text-white text-xs font-bold px-6 py-3 rounded-md shadow"
              >
                <span>{data.smartWatchDealSection.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. ORANGE-RED SERVICE GUARANTEE STRIP */}
      <section className="bg-[#e63b1f] text-white py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.serviceGuarantees.map((sg) => {
            const SgIcon =
              sg.iconName === "truck"
                ? Truck
                : sg.iconName === "headset"
                ? Headphones
                : sg.iconName === "refund"
                ? RotateCcw
                : Gift;

            return (
              <div key={sg.id} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white/15 text-[#facc15] flex items-center justify-center shrink-0">
                  <SgIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold">{sg.title}</h4>
                  <p className="text-[11px] text-orange-100">{sg.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. TIN TỨC MỚI NHẤT */}
      <section id="tin-tuc" className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#e63b1f]">
                ĐỌC TIN TỨC MỚI NHẤT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Tin Tức Mới Nhất
              </h2>
            </div>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 bg-[#facc15] text-slate-950 text-xs font-extrabold px-4 py-2 rounded-md"
            >
              <span>Xem Tất Cả</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(data.news || []).map((post) => (
              <article
                key={post.id}
                className="relative bg-slate-50 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center p-4 gap-5 border border-slate-100"
              >
                <div className="sm:w-3/5 bg-white rounded-xl p-5 shadow-xs space-y-2.5 z-10">
                  <div className="text-[10px] text-slate-400 font-semibold">
                    {post.category} • {post.date}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#e63b1f]"
                  >
                    <span>Đọc ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="sm:w-2/5 w-full h-48 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DRONE NEWSLETTER BANNER */}
      <section className="py-12 bg-[#f4f6f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-6 flex justify-center">
            <img
              src={data.droneNewsletter.droneImage}
              alt="Flycam công nghệ"
              className="w-full max-w-md h-48 object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {data.droneNewsletter.title}
            </h2>
            <p className="text-xs text-slate-500 max-w-md">
              {data.droneNewsletter.subtitle}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-2.5 max-w-md"
            >
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={data.droneNewsletter.placeholder}
                  className="w-full bg-white border border-slate-200 rounded-md pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#e63b1f]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#facc15] hover:bg-amber-300 text-slate-950 text-xs font-extrabold px-5 py-2.5 rounded-md cursor-pointer"
              >
                {data.droneNewsletter.buttonText}
              </button>
            </form>
            {newsletterSaved && (
              <p className="text-xs font-bold text-emerald-600">
                Cảm ơn bạn đã đăng ký nhận ưu đãi từ {data.business.name}!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 14. 5-COLUMN WHITE FOOTER */}
      <footer id="lien-he" className="bg-white border-t border-slate-100 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
            <div className="lg:col-span-3 space-y-3">
              <ETechLogo brandName={data.business.name} />
              <p className="text-xs text-slate-500 leading-relaxed">
                {data.business.aboutText[0]}
              </p>
              <div className="pt-1">
                <div className="text-xs font-extrabold text-slate-900 mb-2">
                  Theo dõi
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {["f", "tw", "ig", "p"].map((s) => (
                    <a
                      key={s}
                      href="#lien-he"
                      className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#e63b1f] hover:text-white flex items-center justify-center font-bold uppercase"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-xs font-extrabold text-slate-900">
                Thông tin
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#san-pham" className="hover:text-[#e63b1f]">
                    Xu Hướng
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#e63b1f]">
                    Bán Chạy
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#e63b1f]">
                    Giảm Giá
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#e63b1f]">
                    Sản Phẩm Mới
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#e63b1f]">
                    Còn Hàng
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-xs font-extrabold text-slate-900">
                Danh mục
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#" className="hover:text-[#e63b1f]">
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a href="#danh-muc" className="hover:text-[#e63b1f]">
                    Giới Thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#e63b1f]">
                    Sản Phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#e63b1f]">
                    Tin Tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e63b1f]">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="text-xs font-extrabold text-slate-900">
                Liên Kết
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>
                  <a href="#lien-he" className="hover:text-[#e63b1f]">
                    Tài Khoản
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e63b1f]">
                    Đơn Hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e63b1f]">
                    Mục Yêu Thích
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e63b1f]">
                    Hoàn Trả
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#e63b1f]">
                    Chính Sách
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-extrabold text-slate-900">
                Thông tin cửa hàng
              </h4>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#facc15] text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">
                    Bạn cần trợ giúp?
                  </div>
                  <a
                    href={`tel:${data.business.phone[0]}`}
                    className="text-xs font-extrabold text-slate-900"
                  >
                    {data.business.phone[0]}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Địa chỉ: {data.business.address}
              </p>
              <p className="text-xs text-slate-500">
                Email: {data.business.email[0]}
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <div className="flex items-center gap-2">
              {["VISA", "MasterCard", "PayPal", "ApplePay"].map((card) => (
                <span
                  key={card}
                  className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded"
                >
                  {card}
                </span>
              ))}
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-7 h-7 rounded-full border border-[#e63b1f] text-[#e63b1f] flex items-center justify-center ml-2 cursor-pointer"
                aria-label="Lên đầu trang"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-52 bg-slate-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-[#e63b1f]">
                {selectedProduct.category}
              </span>
              <h3 className="mt-1 text-base font-extrabold text-slate-900">
                {selectedProduct.title}
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-lg font-black text-[#e63b1f]">
                  {selectedProduct.price}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  {selectedProduct.oldPrice}
                </span>
              </div>
              <div className="mt-3 space-y-1.5">
                {selectedProduct.specs.map((sp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="text-xs font-bold text-slate-500 px-4 py-2"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart();
                    setSelectedProduct(null);
                  }}
                  className="bg-[#e63b1f] text-white text-xs font-bold px-5 py-2.5 rounded-md cursor-pointer"
                >
                  Thêm vào báo giá sỉ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* B2B QUOTE MODAL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            {quoteSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Yêu cầu báo giá sỉ thành công!
                </h3>
                <p className="text-xs text-slate-600">
                  Phòng kinh doanh B2B của <strong>{data.business.name}</strong>{" "}
                  sẽ gửi bảng chiết khấu đại lý qua email/điện thoại ngay.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Đăng Ký Đại Lý &amp; Nhận Bảng Giá Sỉ
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hotline phân phối B2B: {data.business.phone[0]}
                </p>
                <form onSubmit={handleQuoteSubmit} className="mt-4 space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Tên doanh nghiệp / Cửa hàng *"
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e63b1f]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#e63b1f]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#e63b1f] text-white text-xs font-extrabold py-3 rounded-md cursor-pointer"
                  >
                    Nhận Báo Giá Ngay
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
