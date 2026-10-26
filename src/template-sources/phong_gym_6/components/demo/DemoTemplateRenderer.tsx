"use client";

import React, { useState } from "react";
import {
  Search,
  PhoneCall,
  Heart,
  User,
  ShoppingBag,
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
  Zap,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  ArrowUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym6DefaultData,
  type PhongGym6Data,
  type PhongGym6Product
} from "@/template-sources/phong_gym_6/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: PhongGym6Data = adaptClonedTemplateData(
    phongGym6DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(1);
  const [selectedProduct, setSelectedProduct] =
    useState<PhongGym6Product | null>(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const allProducts = data.products || phongGym6DefaultData.products || [];
  const bestSellers = allProducts.filter((p) => p.category === "bestseller");
  const mainGridProducts = allProducts.filter(
    (p) => p.category !== "bestseller"
  );
  const categoryBanners =
    data.categoryBanners || phongGym6DefaultData.categoryBanners || [];
  const newsList = data.news || phongGym6DefaultData.news || [];
  const partnerLogos =
    data.partnerLogos || phongGym6DefaultData.partnerLogos || [];

  const handleQuickOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCartCount((c) => c + 1);
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setSelectedProduct(null);
    }, 2000);
  };

  const renderProductCard = (prd: PhongGym6Product) => (
    <div
      key={prd.id}
      onClick={() => setSelectedProduct(prd)}
      className="bg-white border border-slate-100 rounded-xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between relative"
    >
      {prd.discountBadge && (
        <span className="absolute top-3 left-3 z-10 bg-[#fbbf24] text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
          {prd.discountBadge}
        </span>
      )}

      <div>
        <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 mb-3 p-3 flex items-center justify-center">
          <img
            src={prd.image}
            alt={prd.name}
            className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="text-xs font-medium text-slate-700 text-center line-clamp-2 group-hover:text-[#145da0] transition-colors">
          {prd.name}
        </h3>
      </div>

      <div className="mt-2.5 text-center">
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {prd.oldPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              {prd.oldPrice}
            </span>
          )}
          <span className="text-xs font-extrabold text-slate-900">
            {prd.price}
          </span>
        </div>

        {prd.rating && (
          <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
            {[...Array(prd.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#145da0] selection:text-white"
    >
      {/* 1. TWO-TIER WHITE HEADER WITH SEARCH & HOTLINE PILL (Matches GYM006) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 pt-3 pb-2">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Winged Sporty Brand Logo */}
            <a href="#top" className="flex items-center gap-1.5 shrink-0">
              <div className="flex items-center text-[#145da0] font-black italic text-xl sm:text-2xl tracking-tight">
                <span className="text-sky-400 mr-1">══</span>
                <span>{data.business.name.toUpperCase()}</span>
              </div>
            </a>

            {/* Center Search Input */}
            <div className="hidden md:flex flex-1 max-w-md relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bóng chuyền, giày chạy bộ, balo, vợt..."
                className="w-full bg-slate-100/90 border border-slate-200/80 rounded-full pl-4 pr-10 py-2 text-xs focus:outline-none focus:border-[#145da0] focus:bg-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Right Hotline Pill + Action Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="hidden sm:flex items-center gap-2 bg-[#f5c542] hover:bg-[#eab308] text-slate-900 rounded-full px-3.5 py-1.5 text-[11px] font-bold shadow-sm transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-900" />
                <div className="leading-tight">
                  <span className="block text-[9px] font-medium">
                    Tư vấn mua hàng
                  </span>
                  <span className="block font-extrabold">{primaryPhone}</span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => setWishlistCount((w) => w + 1)}
                className="relative p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#145da0]"
                aria-label="Yêu thích"
              >
                <Heart className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#145da0] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              </button>

              <a
                href="#footer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#145da0]"
                aria-label="Tài khoản"
              >
                <User className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedProduct(bestSellers[0] || allProducts[0])}
                className="relative p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#145da0]"
                aria-label="Giỏ hàng"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f5c542] text-slate-900 text-[9px] font-extrabold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bottom Nav Row */}
          <nav className="hidden md:flex items-center justify-center gap-8 pt-2.5 text-xs font-bold uppercase text-slate-700">
            <a
              href="#top"
              className="text-[#145da0] border-b-2 border-[#145da0] pb-1"
            >
              TRANG CHỦ
            </a>
            <a href="#bestsellers" className="hover:text-[#145da0]">
              GIỚI THIỆU
            </a>
            <a
              href="#newest"
              className="flex items-center gap-1 hover:text-[#145da0]"
            >
              <span>SẢN PHẨM</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            <a href="#news" className="hover:text-[#145da0]">
              TIN TỨC
            </a>
            <a href="#footer" className="hover:text-[#145da0]">
              LIÊN HỆ
            </a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-2.5 text-xs font-bold uppercase">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#145da0]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#bestsellers"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SẢN PHẨM BÁN CHẠY
            </a>
            <a
              href="#newest"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SẢN PHẨM MỚI NHẤT
            </a>
            <a
              href="#sale"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SẢN PHẨM KHUYẾN MÃI
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              TIN TỨC THỂ THAO
            </a>
          </div>
        )}
      </header>

      {/* 2. FESTIVE RED & GOLD STAGE HERO BANNER */}
      <section className="relative bg-gradient-to-r from-[#7f0909] via-[#b91c1c] to-[#880d0d] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Festive Offer Copy */}
          <div className="lg:col-span-6 text-center z-10">
            <div className="text-2xl sm:text-3xl italic font-serif text-amber-200 mb-1">
              {data.heroPromo.scriptTitle}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white drop-shadow mb-6">
              {data.heroPromo.mainTitle}
            </h1>

            {/* 3 Gold/White Offer Badges */}
            <div className="inline-flex items-stretch bg-gradient-to-b from-amber-100 to-amber-200 text-[#880d0d] rounded-2xl p-2 shadow-2xl border-2 border-amber-400 gap-2 mb-6">
              <div className="px-4 py-2 bg-white/80 rounded-xl flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase">VOUCHER</span>
                <span className="text-xl sm:text-2xl font-black">200K</span>
              </div>
              <div className="px-5 py-2.5 bg-white rounded-xl border-2 border-[#b91c1c] flex flex-col justify-center shadow">
                <span className="text-xs font-extrabold uppercase">MUA 2</span>
                <span className="text-xl sm:text-2xl font-black">TẶNG 1</span>
              </div>
              <div className="px-4 py-2 bg-white/80 rounded-xl flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase">GIẢM GIÁ</span>
                <span className="text-xl sm:text-2xl font-black">80%</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <a
                href="#bestsellers"
                className="bg-[#5c0606] hover:bg-black text-amber-200 border border-amber-400/60 text-xs font-extrabold uppercase tracking-wider px-8 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                {data.heroPromo.ctaText}
              </a>
              <div className="inline-flex items-center gap-2 bg-[#7c1212]/90 border border-amber-400/40 rounded-full px-5 py-1.5 text-[11px] font-bold text-amber-100">
                <span>{data.heroPromo.hotlineLabel}</span>
                <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-black text-white">{primaryPhone}</span>
              </div>
            </div>
          </div>

          {/* Right Podium Sports Gear Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[16/11] rounded-2xl overflow-hidden border-4 border-amber-400/50 shadow-2xl">
              <img
                src={data.heroPromo.podiumImage}
                alt="Thiết bị thể thao khuyến mãi"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 text-center">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Trang thiết bị & Phụ kiện thể thao chính hãng
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SẢN PHẨM BÁN CHẠY (4 Product Cards + 4 Blue Trust Badges) */}
      <section id="bestsellers" className="py-12 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-900 mb-8">
            SẢN PHẨM BÁN CHẠY
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {bestSellers.map(renderProductCard)}
          </div>

          {/* 4 Solid Blue Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.trustBadges.map((tb, idx) => (
              <div
                key={tb.id}
                className="bg-[#145da0] text-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  {idx === 0 && <Truck className="w-5 h-5" />}
                  {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 2 && <CreditCard className="w-5 h-5" />}
                  {idx === 3 && <Headphones className="w-5 h-5" />}
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold">{tb.title}</div>
                  <div className="text-[10px] text-sky-200 font-semibold">
                    {tb.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NGẬP TRÀN KHUYẾN MÃI (Dark Blue Galaxy Banner) */}
      <section className="py-4 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#071330] via-[#0e2954] to-[#145da0] text-white p-7 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-lg">
            <div className="md:col-span-7 text-center md:text-left z-10">
              <span className="inline-flex items-center gap-1 bg-[#fbbf24] text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3">
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                {data.galaxyPromo.flashTag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
                {data.galaxyPromo.title}
              </h2>
              <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 bg-[#0b1d3d] border border-sky-400/30 rounded-xl p-2.5 text-xs font-extrabold">
                <span className="px-3 py-1 bg-white/10 rounded text-sky-300">
                  GIẢM GIÁ <strong className="text-white text-base">80%</strong>
                </span>
                <span className="px-3 py-1 bg-sky-500 text-white rounded">
                  MUA 2 TẶNG 1
                </span>
                <span className="px-3 py-1 bg-white/10 rounded text-amber-300">
                  VOUCHER <strong className="text-white text-base">200K</strong>
                </span>
              </div>
              <div className="mt-3 text-[10px] text-sky-200 font-semibold">
                HOTLINE ĐẶT HÀNG NHANH: {primaryPhone}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border-2 border-sky-400/30 shadow-xl">
                <img
                  src={data.galaxyPromo.image}
                  alt={data.galaxyPromo.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SẢN PHẨM MỚI NHẤT (12 Product Cards + 3 Category Banners) */}
      <section id="newest" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-900 mb-8">
            SẢN PHẨM MỚI NHẤT
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {mainGridProducts.map(renderProductCard)}
          </div>

          {/* 3 Category Promo Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categoryBanners.map((cat) => (
              <div
                key={cat.id}
                className="relative h-44 rounded-xl overflow-hidden group shadow-sm"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent p-5 flex flex-col justify-end items-start text-white">
                  <span className="bg-[#fbbf24] text-slate-950 text-[9px] font-black uppercase px-2.5 py-0.5 rounded mb-1">
                    {cat.badge}
                  </span>
                  <h3 className="text-base font-extrabold mb-2">{cat.title}</h3>
                  <a
                    href="#accessories"
                    className="bg-[#145da0] hover:bg-[#0f4c81] text-white text-[9px] font-bold uppercase px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    {cat.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SẢN PHẨM KHUYẾN MÃI + MID-PAGE RED BANNER */}
      <section id="sale" className="py-10 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-900 mb-8">
            SẢN PHẨM KHUYẾN MÃI
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {mainGridProducts.slice(0, 8).map(renderProductCard)}
          </div>

          {/* Mid-Page Red Festive Sale Banner */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#7f0909] via-[#b91c1c] to-[#880d0d] text-white p-7 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-lg">
            <div className="md:col-span-7 text-center">
              <div className="text-xl italic font-serif text-amber-200">
                {data.heroPromo.scriptTitle}
              </div>
              <div className="text-2xl sm:text-3xl font-black uppercase mb-3">
                {data.heroPromo.mainTitle}
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-[#880d0d] rounded-xl px-4 py-2 text-xs font-black mb-4">
                <span>VOUCHER 200K</span>
                <span>•</span>
                <span className="underline">MUA 2 TẶNG 1</span>
                <span>•</span>
                <span>GIẢM 80%</span>
              </div>
              <div>
                <a
                  href="#accessories"
                  className="inline-block bg-[#5c0606] text-amber-200 border border-amber-300/50 text-[11px] font-bold uppercase px-6 py-2 rounded-full"
                >
                  ĐẶT HÀNG NGAY
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={data.heroPromo.podiumImage}
                alt="Sale"
                className="w-full h-44 object-cover rounded-xl border-2 border-amber-300/40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. PHỤ KIỆN THỂ THAO */}
      <section id="accessories" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-900 mb-8">
            PHỤ KIỆN THỂ THAO
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {mainGridProducts.slice(4, 12).map(renderProductCard)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categoryBanners.map((cat) => (
              <div
                key={`acc-${cat.id}`}
                className="relative h-40 rounded-xl overflow-hidden group shadow-sm"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent p-5 flex flex-col justify-end items-start text-white">
                  <span className="bg-[#fbbf24] text-slate-950 text-[9px] font-black uppercase px-2.5 py-0.5 rounded mb-1">
                    {cat.badge}
                  </span>
                  <h3 className="text-base font-extrabold mb-2">{cat.title}</h3>
                  <a
                    href="#top"
                    className="bg-[#145da0] hover:bg-[#0f4c81] text-white text-[9px] font-bold uppercase px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    {cat.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TIN TỨC MỚI NHẤT (4 Blog Cards) */}
      <section id="news" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg sm:text-xl font-extrabold uppercase text-slate-900 mb-8">
            TIN TỨC MỚI NHẤT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newsList.slice(0, 4).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/11] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] text-slate-400 font-medium mb-1">
                      {data.business.name.toUpperCase()} • {post.date}
                    </div>
                    <h3 className="text-xs font-extrabold text-slate-800 line-clamp-2 mb-2 group-hover:text-[#145da0]">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="#footer"
                    className="inline-block border border-slate-200 hover:border-[#145da0] hover:text-[#145da0] text-slate-600 text-[10px] font-semibold px-3.5 py-1 rounded-full transition-colors"
                  >
                    Xem thêm
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. THƯƠNG HIỆU (5 Brand Logo Boxes) */}
      <section className="py-12 bg-[#f3f4f6]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-lg font-extrabold uppercase text-slate-900 mb-6">
            THƯƠNG HIỆU
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg py-5 px-4 flex items-center justify-center shadow-sm border border-slate-200/70"
              >
                <span className="text-xs font-black tracking-wider text-slate-700 uppercase">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DEEP BLUE 4-COLUMN FOOTER */}
      <footer id="footer" className="bg-[#145da0] text-white">
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center text-white font-black italic text-xl tracking-tight mb-3">
              <span className="text-sky-300 mr-1">══</span>
              <span>{data.business.name.toUpperCase()}</span>
            </div>
            <p className="text-sky-100/85 text-[11px] leading-relaxed">
              {data.business.aboutText?.[0]}
            </p>
          </div>

          {/* Col 2: Danh mục */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-3">Danh mục</h4>
            <ul className="space-y-2 text-[11px] text-sky-100/85">
              <li>
                <a href="#top" className="hover:text-white">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#newest" className="hover:text-white">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-white">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Liên kết */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-3">Liên kết</h4>
            <ul className="space-y-2 text-[11px] text-sky-100/85">
              <li>Điều khoản và điều kiện</li>
              <li>Kiểm tra đơn hàng</li>
              <li>Hệ thống cửa hàng</li>
              <li>Liên hệ hỗ trợ</li>
            </ul>
          </div>

          {/* Col 4: Chính sách */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-3">Chính sách</h4>
            <ul className="space-y-2 text-[11px] text-sky-100/85">
              <li>Chính sách bảo mật</li>
              <li>Chính sách tài khoản</li>
              <li>Chính sách thanh toán</li>
              <li>Chính sách đổi trả</li>
            </ul>
          </div>

          {/* Col 5: Mạng xã hội */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-3">Mạng xã hội</h4>
            <div className="flex items-center gap-2">
              {["f", "x", "ig", "p"].map((soc, i) => (
                <a
                  key={i}
                  href="#top"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-[#145da0] transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 py-3.5 text-center text-[11px] text-sky-100/80 relative">
          © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
          <a
            href="#top"
            aria-label="Lên đầu trang"
            className="hidden sm:flex fixed bottom-5 right-5 w-8 h-12 rounded-full bg-[#f5c542] text-slate-900 items-center justify-center shadow-lg z-30"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </footer>

      {/* QUICK ORDER MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-12 h-12 text-[#145da0] mx-auto mb-3" />
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Đã thêm vào giỏ & Đặt hàng thành công!
                </h3>
                <p className="text-xs text-slate-500">
                  Nhân viên {data.business.name} sẽ gọi xác nhận giao hàng siêu tốc cho bạn.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickOrder} className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-16 h-16 rounded-lg object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">
                      {selectedProduct.name}
                    </h3>
                    <div className="text-sm font-black text-[#145da0] mt-1">
                      {selectedProduct.price}
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  required
                  placeholder="Họ và tên người nhận"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#145da0]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại nhận hàng"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#145da0]"
                />
                <input
                  type="text"
                  required
                  placeholder="Địa chỉ giao hàng toàn quốc"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-[#145da0]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#145da0] hover:bg-[#0f4c81] text-white text-xs font-bold uppercase py-3 rounded-lg transition-colors"
                >
                  ĐẶT MUA NGAY (MIỄN PHÍ SHIP)
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
