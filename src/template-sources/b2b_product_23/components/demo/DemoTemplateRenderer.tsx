"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  ChevronRight,
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Watch,
  Monitor,
  Cpu,
  Gamepad2,
  ShieldCheck,
  Truck,
  PhoneCall,
  CreditCard,
  Flame,
  Zap,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Trash2,
  MapPin,
  Clock,
  Tag,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type BroShopMockData,
  type BroProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  business?: Record<string, unknown>;
  customConfig?: Record<string, unknown>;
}

function parsePriceNumber(price: string): number {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatPriceVnd(amount: number): string {
  return amount.toLocaleString("vi-VN") + "₫";
}

export function DemoTemplateRenderer({
  business,
  customConfig,
}: DemoTemplateRendererProps) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData(
        mockData,
        business,
        customConfig
      ) as BroShopMockData,
    [business, customConfig]
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrendBrand, setSelectedTrendBrand] = useState<string>("ALL");
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [cart, setCart] = useState<{ item: BroProductItem; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState<BroProductItem | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [couponCopied, setCouponCopied] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "0909 999 648";
  const primaryEmail = data.business.email?.[0] || "cskh@broshop.vn";

  const cartCount = useMemo(
    () => cart.reduce((sum, entry) => sum + entry.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (sum, entry) => sum + parsePriceNumber(entry.item.price) * entry.qty,
        0
      ),
    [cart]
  );

  const handleAddToCart = (item: BroProductItem) => {
    setCart((prev) => {
      const found = prev.find((p) => p.item.id === item.id);
      if (found) {
        return prev.map((p) =>
          p.item.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { item, qty: 1 }];
    });
    setToastMsg(`Đã thêm "${item.name}" vào giỏ hàng BROSHOP!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.item.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const filteredTrendItems = useMemo(() => {
    return data.trendSection.items.filter((item) => {
      const matchBrand =
        selectedTrendBrand === "ALL" ||
        item.brand.toLowerCase() === selectedTrendBrand.toLowerCase();
      const matchSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchSearch;
    });
  }, [data.trendSection.items, selectedTrendBrand, searchQuery]);

  const renderCategoryIcon = (label: string) => {
    const lower = label.toLowerCase();
    if (lower.includes("điện thoại")) return <Smartphone className="w-4 h-4" />;
    if (lower.includes("laptop")) return <Laptop className="w-4 h-4" />;
    if (lower.includes("tablet")) return <Tablet className="w-4 h-4" />;
    if (lower.includes("watch")) return <Watch className="w-4 h-4" />;
    if (lower.includes("tai nghe")) return <Headphones className="w-4 h-4" />;
    if (lower.includes("máy tính")) return <Monitor className="w-4 h-4" />;
    if (lower.includes("văn phòng")) return <Cpu className="w-4 h-4" />;
    return <Gamepad2 className="w-4 h-4" />;
  };

  const renderProductCard = (product: BroProductItem) => (
    <div
      key={product.id}
      className="group relative bg-white border border-slate-200/90 hover:border-[#f58220] rounded-sm p-3 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
    >
      {/* Orange Discount Badge */}
      {product.discountBadge && (
        <span className="absolute top-2.5 right-2.5 z-10 bg-[#f58220] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase shadow-sm">
          {product.discountBadge}
        </span>
      )}

      <div>
        <div
          onClick={() => setQuickProduct(product)}
          className="relative h-40 w-full bg-slate-50/60 flex items-center justify-center overflow-hidden mb-3 cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3
          onClick={() => setQuickProduct(product)}
          className="text-xs sm:text-[13px] font-semibold text-slate-800 group-hover:text-[#f58220] line-clamp-2 min-h-[36px] leading-snug cursor-pointer"
        >
          {product.name}
        </h3>
      </div>

      <div className="mt-2.5 pt-2 border-t border-slate-100">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-sm font-extrabold text-[#d9232a]">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          className="w-full py-1.5 px-2.5 text-[11px] font-bold uppercase bg-zinc-900 hover:bg-[#f58220] text-white rounded-sm transition-colors"
        >
          Chọn mua ngay
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-800 font-sans">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 bg-zinc-900 border-l-4 border-[#f58220] text-white px-4 py-3 rounded shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
          <CheckCircle2 className="w-4 h-4 text-[#f58220] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. TOP MINI BAR */}
      <div className="bg-zinc-100 border-b border-slate-200 text-slate-600 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4">
            <span>
              Hotline CSKH: <strong className="text-[#d9232a]">{primaryPhone}</strong>
            </span>
            <span>•</span>
            <span>Showroom: {data.business.address}</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            {data.topLinks.map((lnk) => (
              <a
                key={lnk}
                href="#footer"
                className="hover:text-[#f58220] transition-colors"
              >
                {lnk}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER (BRO.SHOP | SEARCH | ACCOUNT & CART) */}
      <header className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo BRO.SHOP BELONG TO TECH */}
          <a href="#top" className="flex flex-col select-none shrink-0">
            <div className="flex items-baseline text-2xl sm:text-3xl font-black tracking-tighter text-zinc-900">
              <span>{data.business.brandMain || "BRO"}</span>
              <span className="text-[#f58220] text-3xl sm:text-4xl leading-none">
                {data.business.brandDot || "."}
              </span>
              <span>{data.business.brandSub || "SHOP"}</span>
            </div>
            <span className="text-[9px] font-bold tracking-[0.28em] text-slate-400 uppercase -mt-1">
              {data.business.slogan || "BELONG TO TECH"}
            </span>
          </a>

          {/* Center Search Input + Orange Button */}
          <div className="flex-1 max-w-xl min-w-[240px]">
            <div className="flex items-center border-2 border-[#f58220] rounded-sm overflow-hidden h-10 bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm iPhone XS, MacBook 2018, Garmin, PS4 Pro, Anker, UAG..."
                className="flex-1 px-3.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none h-full"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                className="bg-[#f58220] hover:bg-[#e06f10] text-white px-5 h-full flex items-center justify-center transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Account & Cart */}
          <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
            <a
              href="#footer"
              className="hidden md:flex items-center gap-2 hover:text-[#f58220] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-normal">
                  Tài khoản
                </span>
                <span>ĐĂNG NHẬP / ĐĂNG KÝ</span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-zinc-900 hover:bg-[#f58220] text-white px-3.5 py-2 rounded-sm transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#f58220] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>GIỎ HÀNG ({cartCount})</span>
            </button>
          </div>
        </div>

        {/* 3. SUB-HEADER NAVIGATION BAR */}
        <div className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left 3-Col Orange Category Header */}
            <div className="lg:col-span-3 bg-[#f58220] text-white px-4 py-2.5 flex items-center gap-2.5 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
              <Menu className="w-4 h-4" />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>

            {/* Right 9-Col Horizontal Nav Links */}
            <nav className="lg:col-span-9 flex flex-wrap items-center gap-1 sm:gap-5 px-3 py-2 text-xs font-bold uppercase tracking-wide">
              {data.mainNav.map((item, idx) => (
                <a
                  key={item}
                  href={idx === 0 ? "#top" : "#trend"}
                  className={`px-2 py-1 rounded-sm transition-colors ${
                    idx === 0
                      ? "text-[#f58220]"
                      : "text-zinc-200 hover:text-[#f58220]"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="top" className="max-w-7xl mx-auto px-4 py-4 space-y-6">
        {/* 4. HERO SECTION: 3-COL VERTICAL MENU + 6-COL CENTER BANNER & 2 CARDS + 3-COL RIGHT POSTER */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* 3-Col Vertical Category Menu */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-sm divide-y divide-slate-100">
            {data.verticalCategories.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveCategoryId(cat.id)}
                onMouseLeave={() => setActiveCategoryId(null)}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setSearchQuery(cat.label)}
                  className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-700 hover:bg-orange-50/70 hover:text-[#f58220] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-slate-400">
                      {renderCategoryIcon(cat.label)}
                    </span>
                    <span>{cat.label}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Hover Sub-menu */}
                {activeCategoryId === cat.id && (
                  <div className="hidden lg:block absolute left-full top-0 z-30 w-56 bg-white border border-slate-200 shadow-xl p-3 space-y-1.5">
                    <p className="text-[11px] font-extrabold text-[#f58220] uppercase border-b border-slate-100 pb-1">
                      {cat.label} nổi bật
                    </p>
                    {cat.subItems.map((sub) => (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => {
                          setSearchQuery(sub);
                          setActiveCategoryId(null);
                        }}
                        className="block w-full text-left text-xs text-slate-600 hover:text-[#f58220] py-1"
                      >
                        • {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 6-Col Center Dark Tech Banner + 2 Bottom Policy Cards */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {/* Main Dark Hero Banner */}
            <div className="relative flex-1 rounded-sm overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white min-h-[250px] flex items-center p-6 border border-zinc-800">
              <img
                src={data.hero.centerBanner.image}
                alt={data.hero.centerBanner.title}
                className="absolute right-0 top-0 w-3/5 h-full object-cover opacity-35 mix-blend-luminosity"
              />
              <div className="relative z-10 max-w-md space-y-2.5">
                <span className="inline-block bg-[#f58220] text-white text-[10px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  {data.hero.centerBanner.badge}
                </span>
                <h1 className="text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight">
                  {data.hero.centerBanner.title}
                </h1>
                <p className="text-xs text-amber-300 font-bold leading-relaxed">
                  {data.hero.centerBanner.subtitle}
                </p>
                <div className="pt-1">
                  <a
                    href="#flash-sale"
                    className="inline-flex items-center gap-1.5 bg-[#f58220] hover:bg-[#e06f10] text-white text-xs font-extrabold px-4 py-2 rounded-sm uppercase transition-colors"
                  >
                    <span>{data.hero.centerBanner.cta}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2 Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.hero.bottomCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-zinc-900 text-white p-3.5 rounded-sm border-l-4 border-[#f58220] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-xs font-black text-[#f58220] uppercase">
                      {card.title}
                    </h2>
                    <span className="text-[10px] bg-white/10 text-amber-300 px-2 py-0.5 rounded-sm font-semibold">
                      {card.highlight}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Col Right Vertical Poster */}
          <div className="lg:col-span-3 relative rounded-sm overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-[#f58220] text-white p-5 flex flex-col justify-between min-h-[340px] border border-slate-200">
            <img
              src={data.hero.rightPoster.image}
              alt={data.hero.rightPoster.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="relative z-10 space-y-2">
              <span className="inline-block bg-white text-zinc-900 text-[10px] font-black px-2.5 py-0.5 rounded-sm uppercase">
                {data.hero.rightPoster.badge}
              </span>
              <h2 className="text-lg font-black uppercase leading-snug">
                {data.hero.rightPoster.title}
              </h2>
              <p className="text-xs text-orange-100 font-medium">
                {data.hero.rightPoster.subtitle}
              </p>
            </div>

            <div className="relative z-10 bg-black/45 backdrop-blur-sm p-3 rounded-sm border border-white/15 text-center">
              <p className="text-lg font-black text-amber-300 tracking-wide">
                {data.hero.rightPoster.discount}
              </p>
              <a
                href="#split-phukien"
                className="mt-1 inline-block text-[11px] font-bold text-white hover:text-amber-200 underline uppercase"
              >
                Săn deal phụ kiện ngay &gt;
              </a>
            </div>
          </div>
        </section>

        {/* 5. SECTION 1: TREND (WITH BRAND PILLS) */}
        <section id="trend" className="bg-white border border-slate-200 rounded-sm p-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-zinc-900 pb-2.5 mb-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#f58220]" />
              <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-900">
                {data.trendSection.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedTrendBrand("ALL")}
                className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${
                  selectedTrendBrand === "ALL"
                    ? "bg-[#f58220] text-white border-[#f58220]"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#f58220]"
                }`}
              >
                Tất cả
              </button>
              {data.trendSection.brands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedTrendBrand(brand)}
                  className={`px-3 py-1 text-xs font-bold rounded-full border transition-colors ${
                    selectedTrendBrand === brand
                      ? "bg-[#f58220] text-white border-[#f58220]"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#f58220]"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {filteredTrendItems.map((item) => renderProductCard(item))}
          </div>
        </section>

        {/* 6. SECTION 2: FLASH SALE + WIDE COUPON BANNER */}
        <section id="flash-sale" className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-sm p-4">
            <div className="flex items-center justify-between border-b-2 border-[#f58220] pb-2.5 mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#f58220]" />
                <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#f58220]">
                  {data.flashSaleSection.title}
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-500">
                Số lượng có hạn • Giá sốc mỗi ngày
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              {data.flashSaleSection.items.map((item) =>
                renderProductCard(item)
              )}
            </div>
          </div>

          {/* Full-width Coupon Banner */}
          <div className="bg-gradient-to-r from-zinc-900 via-[#18181b] to-orange-950 text-white rounded-sm p-5 border-l-4 border-[#f58220] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-[#f58220] text-white text-[10px] font-black px-2.5 py-0.5 rounded-sm uppercase">
                <Tag className="w-3 h-3" />
                <span>{data.flashSaleSection.wideCouponBanner.badge}</span>
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-amber-300">
                {data.flashSaleSection.wideCouponBanner.title}
              </h3>
              <p className="text-xs text-zinc-300">
                {data.flashSaleSection.wideCouponBanner.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setCouponCopied(true);
                setToastMsg(
                  `Đã sao chép mã giảm giá: ${data.flashSaleSection.wideCouponBanner.code}`
                );
                setTimeout(() => setToastMsg(null), 3000);
              }}
              className="shrink-0 bg-white hover:bg-amber-300 text-zinc-900 font-black text-xs px-4 py-2.5 rounded-sm uppercase tracking-wider transition-colors"
            >
              {couponCopied
                ? `ĐÃ LẤY MÃ: ${data.flashSaleSection.wideCouponBanner.code}`
                : `SAO CHÉP MÃ: ${data.flashSaleSection.wideCouponBanner.code}`}
            </button>
          </div>
        </section>

        {/* 7. SECTIONS 3–8: 6 SPLIT CATEGORY BLOCKS (9-COL MAIN + PROMO BANNER | 3-COL SIDEBAR LIST) */}
        {data.splitSections.map((block) => (
          <section
            key={block.id}
            id={block.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4"
          >
            {/* Left 9-Col: Header + 3 Product Cards + Category Promo Banner */}
            <div className="lg:col-span-9 bg-white border border-slate-200 rounded-sm p-4 flex flex-col justify-between space-y-4">
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-zinc-900 pb-2 mb-3.5">
                  <h2 className="text-sm sm:text-base font-black uppercase tracking-wide text-zinc-900 border-l-4 border-[#f58220] pl-2.5">
                    {block.mainTitle}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                    {block.subLinks.map((sub) => (
                      <button
                        key={sub}
                        type="button"
                        onClick={() =>
                          setSearchQuery(
                            sub === "Xem tất cả" ? block.mainTitle : sub
                          )
                        }
                        className="hover:text-[#f58220] transition-colors"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3 Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {block.products.map((prod) => renderProductCard(prod))}
                </div>
              </div>

              {/* Bottom Horizontal Promo Banner inside 9-Col */}
              <div
                className={`relative rounded-sm overflow-hidden bg-gradient-to-r ${block.promoBanner.bgClass} text-white p-4 sm:p-5 flex items-center justify-between`}
              >
                <img
                  src={block.promoBanner.image}
                  alt={block.promoBanner.title}
                  className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
                />
                <div className="relative z-10 space-y-1 max-w-xl">
                  <span className="inline-block bg-[#f58220] text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase">
                    {block.promoBanner.badge}
                  </span>
                  <h3 className="text-sm sm:text-base font-black uppercase">
                    {block.promoBanner.title}
                  </h3>
                  <p className="text-xs text-zinc-200">
                    {block.promoBanner.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchQuery(block.mainTitle)}
                  className="relative z-10 hidden sm:inline-flex items-center gap-1 bg-white text-zinc-900 hover:bg-[#f58220] hover:text-white text-[11px] font-extrabold px-3.5 py-2 rounded-sm uppercase transition-colors shrink-0"
                >
                  <span>Xem trọn bộ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 3-Col: Compact Vertical Product List */}
            <aside className="lg:col-span-3 bg-white border border-slate-200 rounded-sm p-4 flex flex-col justify-between">
              <div>
                <div className="border-b-2 border-[#f58220] pb-2 mb-3.5 flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-black uppercase text-zinc-900">
                    {block.sidebarTitle}
                  </h3>
                  <span className="text-[11px] text-[#f58220] font-bold">
                    Gợi ý
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {block.sidebarItems.map((sideItem) => (
                    <div
                      key={sideItem.id}
                      className="py-2.5 first:pt-0 last:pb-0 flex gap-2.5 items-center group"
                    >
                      <div
                        onClick={() => setQuickProduct(sideItem)}
                        className="w-16 h-16 rounded-sm border border-slate-100 bg-slate-50 p-1 shrink-0 flex items-center justify-center cursor-pointer"
                      >
                        <img
                          src={sideItem.image}
                          alt={sideItem.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4
                          onClick={() => setQuickProduct(sideItem)}
                          className="text-xs font-semibold text-slate-800 group-hover:text-[#f58220] line-clamp-2 leading-snug cursor-pointer"
                        >
                          {sideItem.name}
                        </h4>
                        <div className="flex items-baseline gap-1.5 mt-1">
                          <span className="text-xs font-extrabold text-[#d9232a]">
                            {sideItem.price}
                          </span>
                          {sideItem.oldPrice && (
                            <span className="text-[10px] text-slate-400 line-through">
                              {sideItem.oldPrice}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(sideItem)}
                          className="mt-1 text-[10px] font-bold text-[#f58220] hover:underline uppercase"
                        >
                          + Thêm vào giỏ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSearchQuery(block.sidebarTitle)}
                className="mt-3 w-full py-1.5 text-center text-xs font-bold text-slate-600 hover:text-[#f58220] bg-slate-50 hover:bg-orange-50 rounded-sm border border-slate-200 transition-colors"
              >
                Xem tất cả {block.sidebarTitle} &gt;
              </button>
            </aside>
          </section>
        ))}

        {/* 8. SECTION 9: CÓ THỂ BẠN THÍCH (4x2 GRID OF 8 ACCESSORY CATEGORIES) */}
        <section className="bg-white border border-slate-200 rounded-sm p-4">
          <div className="border-b-2 border-zinc-900 pb-2 mb-4 flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-black uppercase text-zinc-900 border-l-4 border-[#f58220] pl-2.5">
              Có thể bạn thích
            </h2>
            <span className="text-xs text-slate-500">
              Danh mục phụ kiện chính hãng bán chạy
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {data.youMayLike.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSearchQuery(cat.name)}
                className="group border border-slate-200 hover:border-[#f58220] rounded-sm p-3 flex items-center gap-3 cursor-pointer transition-all hover:shadow-sm bg-slate-50/40"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-14 h-14 object-cover rounded-sm shrink-0 border border-slate-200"
                />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-extrabold text-zinc-900 group-hover:text-[#f58220] truncate">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-400">{cat.count}</p>
                  <span className="inline-flex items-center text-[11px] font-bold text-[#f58220] mt-1">
                    Xem tất cả <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. SECTION 10: 4 SERVICE COMMITMENT BADGES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {data.serviceCommitments.map((srv, idx) => {
            const icons = [
              <ShieldCheck key="1" className="w-6 h-6 text-[#f58220]" />,
              <PhoneCall key="2" className="w-6 h-6 text-[#f58220]" />,
              <Truck key="3" className="w-6 h-6 text-[#f58220]" />,
              <CreditCard key="4" className="w-6 h-6 text-[#f58220]" />,
            ];
            return (
              <div
                key={srv.id}
                className="bg-white border border-slate-200 rounded-sm p-4 flex items-center gap-3.5"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  {icons[idx % icons.length]}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-zinc-900">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    {srv.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {/* 10. MULTI-COLUMN WHITE FOOTER */}
      <footer id="footer" className="bg-white border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-1 space-y-2.5">
            <div className="flex items-baseline text-2xl font-black tracking-tighter text-zinc-900">
              <span>{data.business.brandMain || "BRO"}</span>
              <span className="text-[#f58220] text-3xl leading-none">
                {data.business.brandDot || "."}
              </span>
              <span>{data.business.brandSub || "SHOP"}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hệ thống bán lẻ các sản phẩm công nghệ Apple, Garmin, Sony
              PlayStation, Nintendo Switch &amp; Phụ kiện chính hãng uy tín hàng
              đầu.
            </p>
            <div className="space-y-1.5 text-xs text-slate-700 pt-1">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f58220] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#f58220] shrink-0" />
                <strong>
                  {primaryPhone} - {secondaryPhone}
                </strong>
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#f58220] shrink-0" />
                <span>{data.business.workingHours}</span>
              </p>
            </div>
          </div>

          {/* Cols 2–5: Footer Links */}
          {data.footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-black uppercase text-zinc-900 mb-3 border-b border-slate-100 pb-2">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {col.links.map((lnk) => (
                  <li key={lnk}>
                    <a
                      href="#top"
                      className="hover:text-[#f58220] transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3 text-[#f58220]" />
                      <span>{lnk}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal Info */}
        <div className="bg-zinc-900 text-zinc-400 text-[11px] py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <p className="font-bold text-white">
                {data.business.companyLegal}
              </p>
              <p>{data.business.taxInfo}</p>
            </div>
            <div className="text-right">
              <p>Email: {primaryEmail}</p>
              <p>© {new Date().getFullYear()} BroShop.vn - Belong To Tech.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK PRODUCT MODAL */}
      {quickProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="bg-zinc-900 text-white px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#f58220]">
                BRO.SHOP • Chi tiết sản phẩm chính hãng
              </span>
              <button
                type="button"
                onClick={() => setQuickProduct(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
              <div className="bg-slate-50 p-4 rounded border border-slate-100 h-52 flex items-center justify-center">
                <img
                  src={quickProduct.image}
                  alt={quickProduct.name}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="space-y-2.5">
                <span className="inline-block bg-orange-100 text-[#f58220] text-[11px] font-bold px-2.5 py-0.5 rounded-sm">
                  Thương hiệu: {quickProduct.brand}
                </span>
                <h3 className="text-base font-bold text-zinc-900 leading-snug">
                  {quickProduct.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-[#d9232a]">
                    {quickProduct.price}
                  </span>
                  {quickProduct.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {quickProduct.oldPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100 leading-relaxed">
                  {quickProduct.specs}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(quickProduct);
                    setQuickProduct(null);
                  }}
                  className="w-full bg-[#f58220] hover:bg-[#e06f10] text-white font-extrabold text-xs uppercase py-2.5 rounded-sm transition-colors"
                >
                  Thêm vào giỏ hàng ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
            <div>
              <div className="bg-zinc-900 text-white px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm uppercase">
                  <ShoppingCart className="w-4 h-4 text-[#f58220]" />
                  <span>Giỏ Hàng BRO.SHOP ({cartCount})</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    Giỏ hàng của bạn đang trống.
                  </div>
                ) : (
                  cart.map(({ item, qty }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b border-slate-100 pb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-contain bg-slate-50 border border-slate-200 rounded p-1 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#d9232a] font-extrabold">
                          {item.price}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, -1)}
                            className="p-1 border border-slate-200 rounded hover:bg-slate-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, 1)}
                            className="p-1 border border-slate-200 rounded hover:bg-slate-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.id, -qty)}
                        className="text-slate-400 hover:text-rose-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Tổng thanh toán:</span>
                <span className="text-[#d9232a] text-base font-black">
                  {formatPriceVnd(cartTotal)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setIsCartOpen(false);
                  setToastMsg(
                    "Đặt hàng thành công! Tổng đài 1900 636 648 sẽ gọi xác nhận đơn hàng ngay."
                  );
                }}
                className="w-full bg-[#f58220] hover:bg-[#e06f10] disabled:bg-slate-300 text-white font-black text-xs uppercase py-3 rounded-sm transition-colors"
              >
                Thanh Toán Đơn Hàng (Miễn Phí Quẹt Thẻ)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
