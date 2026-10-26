"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ShoppingCart,
  PhoneCall,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  Flame,
  Building2,
  RefreshCw,
  CheckCircle2,
  ChevronRight,
  X,
  Plus,
  Minus,
  Trash2,
  FileText,
  Smartphone,
  Laptop,
  Headphones,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type BachLongMockData,
  type BachLongProduct,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  business?: Record<string, unknown>;
  customConfig?: Record<string, unknown>;
}

function parsePriceVnd(str: string): number {
  const digits = str.replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatVnd(amount: number): string {
  return amount.toLocaleString("vi-VN") + " ₫";
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
      ) as BachLongMockData,
    [business, customConfig]
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<
    Record<string, string>
  >({
    apple: "Tất cả",
    samsung: "Tất cả",
    b2b_combo: "Tất cả",
    accessory: "Tất cả",
  });

  // Trade-in estimator state
  const [selectedOldDeviceId, setSelectedOldDeviceId] = useState<string>(
    data.tradeInDevices[0]?.id || "ti-1"
  );
  const [deviceCondition, setDeviceCondition] = useState<"gradeA" | "gradeB">(
    "gradeA"
  );
  const [targetUpgradeId, setTargetUpgradeId] = useState<string>(
    data.flashSale.items[0]?.id || "fs-bl-1"
  );

  // Cart & Modals
  const [cart, setCart] = useState<
    { item: BachLongProduct; qty: number; isB2B: boolean }[]
  >([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState<BachLongProduct | null>(
    null
  );
  const [b2bModalOpen, setB2BModalOpen] = useState(false);
  const [b2bCompany, setB2BCompany] = useState("");
  const [b2bTaxCode, setB2BTaxCode] = useState("");
  const [b2bPhone, setB2BPhone] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "1900 63 64 69";
  const b2bHotline = data.business.phone?.[1] || "0908 038 038";
  const primaryEmail = data.business.email?.[0] || "b2b@bachlongmobile.com";

  const cartCount = useMemo(
    () => cart.reduce((acc, entry) => acc + entry.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (acc, entry) => acc + parsePriceVnd(entry.item.price) * entry.qty,
        0
      ),
    [cart]
  );

  const handleAddToCart = (item: BachLongProduct, isB2B = false) => {
    setCart((prev) => {
      const found = prev.find((p) => p.item.id === item.id);
      if (found) {
        return prev.map((p) =>
          p.item.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { item, qty: 1, isB2B }];
    });
    setToastMsg(
      isB2B
        ? `Đã thêm "${item.name}" vào danh mục báo giá B2B (Xuất VAT)!`
        : `Đã thêm "${item.name}" vào giỏ hàng Bạch Long!`
    );
    setTimeout(() => setToastMsg(null), 3200);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.item.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  };

  // Trade-in calculation
  const selectedOldDevice = useMemo(
    () =>
      data.tradeInDevices.find((d) => d.id === selectedOldDeviceId) ||
      data.tradeInDevices[0],
    [data.tradeInDevices, selectedOldDeviceId]
  );
  const targetNewProduct = useMemo(
    () =>
      [...data.flashSale.items, ...data.products].find(
        (p) => p.id === targetUpgradeId
      ) || data.flashSale.items[0],
    [data.flashSale.items, data.products, targetUpgradeId]
  );

  const tradeInValuation = useMemo(() => {
    if (!selectedOldDevice || !targetNewProduct) return null;
    const baseOldVal =
      deviceCondition === "gradeA"
        ? selectedOldDevice.gradeAPrice
        : selectedOldDevice.gradeBPrice;
    const totalSupport = baseOldVal + selectedOldDevice.subsidyBonus;
    const newPrice = parsePriceVnd(targetNewProduct.price);
    const diff = Math.max(0, newPrice - totalSupport);
    return {
      baseOldVal,
      bonus: selectedOldDevice.subsidyBonus,
      totalSupport,
      newPrice,
      diff,
    };
  }, [selectedOldDevice, targetNewProduct, deviceCondition]);

  const renderProductCard = (item: BachLongProduct, isFlashSale = false) => (
    <div
      key={item.id}
      className={`group relative bg-white rounded-xl border ${
        isFlashSale
          ? "border-[#ffd400] shadow-md"
          : "border-slate-200 hover:border-[#d70018]"
      } p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl`}
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <span className="bg-[#d70018] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
          Giảm {item.discountPercent}%
        </span>
        {item.badge && (
          <span className="bg-[#ffd400] text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
            {item.badge}
          </span>
        )}
      </div>

      <div>
        {/* Product Image */}
        <div
          onClick={() => setQuickProduct(item)}
          className="relative h-44 w-full bg-slate-50 rounded-lg overflow-hidden mb-3 flex items-center justify-center cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute bottom-1.5 left-1.5 bg-black/75 text-[#ffd400] text-[10px] font-bold px-2 py-0.5 rounded">
            {item.installmentText}
          </span>
        </div>

        {/* Product Name */}
        <h3
          onClick={() => setQuickProduct(item)}
          className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#d70018] line-clamp-2 min-h-[40px] leading-snug cursor-pointer"
        >
          {item.name}
        </h3>

        {/* Spec Pills */}
        <div className="flex flex-wrap gap-1 mt-2">
          {item.specs.map((sp) => (
            <span
              key={sp}
              className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium"
            >
              {sp}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing & B2B / Retail CTAs */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-2">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-black text-[#d70018]">
              {item.price}
            </span>
            <span className="text-xs text-slate-400 line-through">
              {item.oldPrice}
            </span>
          </div>
          <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 rounded px-2 py-1 mt-1">
            Giá sỉ B2B: <strong>{item.b2bBulkPrice}</strong>
          </div>
        </div>

        <p className="text-[11px] text-slate-600 line-clamp-1">
          🎁 {item.giftText}
        </p>

        <div className="grid grid-cols-2 gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => handleAddToCart(item, false)}
            className="bg-[#d70018] hover:bg-red-700 text-white font-extrabold text-[11px] py-2 px-2 rounded-lg uppercase transition-colors"
          >
            MUA NGAY
          </button>
          <button
            type="button"
            onClick={() => handleAddToCart(item, true)}
            className="bg-[#ffd400] hover:bg-amber-400 text-slate-950 font-extrabold text-[11px] py-2 px-2 rounded-lg uppercase transition-colors"
          >
            BÁO GIÁ SỈ B2B
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-900 font-sans">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-950 border-2 border-[#ffd400] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold">
          <CheckCircle2 className="w-5 h-5 text-[#ffd400] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. TOP CRIMSON PROMO STRIP */}
      <div className="bg-[#d70018] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-bold">
            <Award className="w-4 h-4 text-[#ffd400]" />
            <span>
              BẠCH LONG MOBILE &amp; B2B PRO — KỶ NIỆM 18 NĂM DẪN ĐẦU THỊ TRƯỜNG
              SMARTPHONE &amp; THIẾT BỊ CÔNG NGHỆ (2006 - 2024)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 font-semibold">
            <span>Hotline B2B Doanh Nghiệp: {b2bHotline}</span>
            <span>•</span>
            <span>Tổng đài CSKH: {primaryPhone}</span>
          </div>
        </div>
      </div>

      {/* 2. SIGNATURE BẠCH LONG GOLDEN YELLOW HEADER */}
      <header className="bg-[#ffd400] sticky top-0 z-40 shadow-md border-b border-amber-400">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Exact White Pill Logo Badge from Reference Screenshot: bach [◇] long since 2006 mobile */}
          <a
            href="#top"
            className="bg-white px-4 py-1.5 rounded-xl shadow-sm flex items-center gap-2 shrink-0 border border-amber-300"
          >
            <div className="flex flex-col items-end leading-none">
              <span className="text-xl sm:text-2xl font-black text-[#d70018] tracking-tight">
                {data.business.brandLeft || "bach"}
              </span>
              <span className="text-[9px] font-bold text-[#d70018]">
                {data.business.brandSince || "since 2006"}
              </span>
            </div>

            {/* Golden Geometric Diamond Emblem */}
            <div className="w-7 h-7 bg-gradient-to-br from-amber-400 via-[#eab308] to-amber-600 rotate-45 rounded-sm flex items-center justify-center shadow-inner mx-0.5">
              <div className="w-3 h-3 bg-white rotate-90 rounded-[1px]" />
            </div>

            <div className="flex flex-col items-start leading-none">
              <span className="text-xl sm:text-2xl font-black text-[#d70018] tracking-tight">
                {data.business.brandRight || "long"}
              </span>
              <span className="text-[9px] font-bold text-[#d70018]">
                {data.business.brandSub || "mobile"}
              </span>
            </div>
          </a>

          {/* Search Input */}
          <div className="flex-1 max-w-xl min-w-[240px]">
            <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-sm h-10 border border-amber-300">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Bạn cần tìm iPhone 15 Pro Max, Galaxy S24 Ultra, MacBook M3, Báo giá sỉ B2B..."
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
                className="bg-[#d70018] hover:bg-red-700 text-white px-4 h-full flex items-center justify-center transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setB2BModalOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-3 py-2 rounded-xl text-xs font-extrabold shadow-sm border border-amber-300 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#d70018]" />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-slate-500 font-semibold">
                  Dự án &amp; Công ty
                </div>
                <div className="text-[#d70018]">BÁO GIÁ B2B (VAT)</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-[#d70018] hover:bg-red-700 text-white px-3.5 py-2.5 rounded-xl text-xs font-black shadow-sm transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ffd400] text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>GIỎ HÀNG</span>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 sm:gap-4 overflow-x-auto py-2 text-xs font-bold whitespace-nowrap">
            {data.navigation.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="px-2.5 py-1 rounded hover:bg-white/10 hover:text-[#ffd400] transition-colors flex items-center gap-1.5"
              >
                <span>{nav.label}</span>
                {nav.badge && (
                  <span className="bg-[#d70018] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm">
                    {nav.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="top" className="max-w-7xl mx-auto px-4 py-5 space-y-8">
        {/* 3. HERO BANNER MATCHING REFERENCE SCREENSHOT B2B027 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left 8-Col Golden Studio Banner matching exact reference image */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#ffe100] via-[#facc15] to-[#eab308] text-slate-950 p-6 sm:p-8 shadow-lg border border-amber-300 flex flex-col justify-between min-h-[380px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              {/* Left Text Block */}
              <div className="md:col-span-7 space-y-3">
                {/* Inline Bach Long Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl shadow-sm">
                  <span className="text-base font-black text-[#d70018]">
                    bach
                  </span>
                  <span className="w-4 h-4 bg-amber-400 rotate-45 inline-block rounded-[2px]" />
                  <span className="text-base font-black text-[#d70018]">
                    long
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 border-l border-slate-200 pl-2">
                    since 2006
                  </span>
                </div>

                {/* Big Bold Black Condensed Headline from Screenshot */}
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-black uppercase leading-[1.12] tracking-tight text-slate-950">
                  {data.hero.titleLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <p className="text-sm sm:text-base font-semibold text-slate-900">
                  {data.hero.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#flash-sale"
                    className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-colors"
                  >
                    {data.hero.ctaSecondary}
                  </a>
                  <button
                    type="button"
                    onClick={() => setB2BModalOpen(true)}
                    className="bg-slate-950 hover:bg-slate-800 text-[#ffd400] font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-colors"
                  >
                    {data.hero.ctaPrimary}
                  </button>
                </div>
              </div>

              {/* Right Dual Smartphone Showcase */}
              <div className="md:col-span-5 relative flex items-center justify-center h-64 sm:h-72">
                <img
                  src={data.hero.mainImage}
                  alt="iPhone Sierra Blue Flagship"
                  className="w-44 sm:w-48 h-60 sm:h-64 object-cover rounded-3xl shadow-2xl border-4 border-white/80 -rotate-6 z-10"
                />
                <img
                  src={data.hero.secondaryImage}
                  alt="iPhone Pink Flagship"
                  className="w-40 sm:w-44 h-56 sm:h-60 object-cover rounded-3xl shadow-2xl border-4 border-white/80 rotate-6 -ml-10 mt-8 z-20"
                />
              </div>
            </div>

            {/* Bottom 4 Milestone Strips */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 mt-4 border-t border-amber-500/30">
              {data.hero.milestones.map((ms) => (
                <div
                  key={ms.value}
                  className="bg-white/85 backdrop-blur-sm rounded-xl p-2.5 border border-white"
                >
                  <div className="text-sm sm:text-base font-black text-[#d70018]">
                    {ms.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700 leading-tight">
                    {ms.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 4-Col Stacked B2B & Trade-In Banners */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {data.hero.rightPromos.map((promo) => (
              <div
                key={promo.id}
                className="relative flex-1 rounded-2xl overflow-hidden bg-slate-950 text-white p-5 flex flex-col justify-between border border-slate-800 shadow-md"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-25 mix-blend-luminosity pointer-events-none"
                />
                <div className="relative z-10 space-y-2">
                  <span className="inline-block bg-[#ffd400] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase">
                    {promo.tag}
                  </span>
                  <h2 className="text-base font-black leading-snug text-white">
                    {promo.title}
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {promo.desc}
                  </p>
                </div>
                <div className="relative z-10 pt-3">
                  <a
                    href="#b2b_combo"
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#ffd400] hover:underline uppercase"
                  >
                    Xem chính sách ưu đãi <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FLASH SALE 18-YEAR ANNIVERSARY */}
        <section
          id="flash-sale"
          className="bg-gradient-to-r from-[#d70018] via-red-600 to-[#b91c1c] rounded-2xl p-4 sm:p-6 shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 text-white">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Flame className="w-6 h-6 text-[#ffd400] fill-[#ffd400]" />
                <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#ffd400]">
                  {data.flashSale.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-red-100 font-medium">
                {data.flashSale.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-black/30 px-3.5 py-2 rounded-xl border border-white/15">
              <Clock className="w-4 h-4 text-[#ffd400]" />
              <span className="text-xs font-bold text-white">
                Kết thúc sau:
              </span>
              <span className="bg-[#ffd400] text-slate-950 font-black text-xs px-2 py-1 rounded">
                04 Giờ
              </span>
              <span className="bg-[#ffd400] text-slate-950 font-black text-xs px-2 py-1 rounded">
                38 Phút
              </span>
              <span className="bg-[#ffd400] text-slate-950 font-black text-xs px-2 py-1 rounded">
                19 Giây
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.flashSale.items.map((item) => renderProductCard(item, true))}
          </div>
        </section>

        {/* 5. 4 CATALOG SECTIONS (APPLE AAR, SAMSUNG, B2B COMBO, ACCESSORIES) */}
        {data.catalogSections.map((sec) => {
          const activeFilter = selectedSectionFilter[sec.id] || "Tất cả";
          const sectionProducts = data.products.filter((p) => {
            if (p.category !== sec.id) return false;
            if (
              searchQuery.trim() &&
              !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
              !p.specs.join(" ").toLowerCase().includes(searchQuery.toLowerCase())
            ) {
              return false;
            }
            return true;
          });

          return (
            <section
              key={sec.id}
              id={sec.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4"
            >
              {/* Section Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#ffd400] pb-3">
                <div>
                  <span className="inline-block bg-slate-950 text-[#ffd400] text-[10px] font-black px-2.5 py-0.5 rounded uppercase mb-1">
                    {sec.bannerTag}
                  </span>
                  <h2 className="text-base sm:text-xl font-black uppercase text-slate-950">
                    {sec.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {sec.subtitle}
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {sec.filterPills.map((pill) => (
                    <button
                      key={pill}
                      type="button"
                      onClick={() =>
                        setSelectedSectionFilter((prev) => ({
                          ...prev,
                          [sec.id]: pill,
                        }))
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                        activeFilter === pill
                          ? "bg-[#d70018] text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-[#ffd400] hover:text-slate-950"
                      }`}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4-Col Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sectionProducts.map((prod) => renderProductCard(prod))}
              </div>
            </section>
          );
        })}

        {/* 6. INTERACTIVE TRADE-IN CALCULATOR (THU CŨ ĐỔI MỚI 100%) */}
        <section
          id="trade-in"
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white rounded-2xl p-6 sm:p-8 border-2 border-[#ffd400] shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-flex items-center gap-1.5 bg-[#ffd400] text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase">
                <RefreshCw className="w-3.5 h-3.5" />
                Định Giá Thu Cũ Đổi Mới Tức Thì
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white leading-tight">
                Lên Đời Siêu Phẩm Không Bù Tiền • Trợ Giá Tới 5.000.000đ
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Áp dụng cho cả khách hàng cá nhân và doanh nghiệp thanh lý dàn
                máy cũ để nâng cấp lên iPhone 15 Series, Galaxy S24 Ultra hoặc
                MacBook M3 mới 100%.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {data.enterpriseBenefits.slice(0, 2).map((b) => (
                  <div
                    key={b.id}
                    className="bg-white/5 border border-white/10 rounded-xl p-3"
                  >
                    <div className="text-sm font-black text-[#ffd400]">
                      {b.metric}
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {b.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Estimator Box */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-black uppercase text-[#d70018] border-b border-slate-100 pb-2">
                Bảng Tính Giá Thu Cũ Lên Đời Tự Động
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    1. Chọn dòng máy cũ của bạn:
                  </label>
                  <select
                    value={selectedOldDeviceId}
                    onChange={(e) => setSelectedOldDeviceId(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#d70018]"
                  >
                    {data.tradeInDevices.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.model}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    2. Tình trạng ngoại hình máy:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeviceCondition("gradeA")}
                      className={`py-2 px-2 rounded-lg text-xs font-bold border ${
                        deviceCondition === "gradeA"
                          ? "bg-[#ffd400] border-amber-500 text-slate-950"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      Loại A (Đẹp 99%)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceCondition("gradeB")}
                      className={`py-2 px-2 rounded-lg text-xs font-bold border ${
                        deviceCondition === "gradeB"
                          ? "bg-[#ffd400] border-amber-500 text-slate-950"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      Loại B (Trầy nhẹ)
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  3. Chọn siêu phẩm muốn lên đời:
                </label>
                <select
                  value={targetUpgradeId}
                  onChange={(e) => setTargetUpgradeId(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#d70018]"
                >
                  {[...data.flashSale.items, ...data.products.slice(0, 4)].map(
                    (p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.price}
                      </option>
                    )
                  )}
                </select>
              </div>

              {tradeInValuation && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-[11px] text-slate-500">
                      Giá thu máy cũ dự kiến
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      {formatVnd(tradeInValuation.baseOldVal)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">
                      Bạch Long trợ giá thêm
                    </div>
                    <div className="text-sm font-black text-emerald-700">
                      + {formatVnd(tradeInValuation.bonus)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500">
                      Số tiền cần bù (Hoặc trả góp 0%)
                    </div>
                    <div className="text-base font-black text-[#d70018]">
                      {formatVnd(tradeInValuation.diff)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7. SHOWROOM NETWORK & 18-YEAR GUARANTEE */}
        <section
          id="showrooms"
          className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-lg font-black uppercase text-slate-950">
                HỆ THỐNG SHOWROOM BẠCH LONG MOBILE &amp; TRUNG TÂM B2B PRO
              </h2>
              <p className="text-xs text-slate-500">
                18 năm phục vụ hơn 3 triệu khách hàng cá nhân &amp; 2.500 doanh
                nghiệp toàn quốc
              </p>
            </div>
            <span className="text-xs font-extrabold text-[#d70018]">
              Mở cửa: 08:30 - 21:30 (Kể cả Chủ Nhật &amp; Lễ)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.showrooms.map((sr) => (
              <div
                key={sr.id}
                className="border border-slate-200 hover:border-[#ffd400] rounded-xl p-4 bg-slate-50/60 space-y-1.5"
              >
                <div className="flex items-center gap-1.5 text-xs font-black text-[#d70018] uppercase">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{sr.district}</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {sr.address}
                </p>
                <p className="text-[11px] text-slate-500">
                  Hotline: <strong className="text-slate-900">{sr.hotline}</strong>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 border-t-4 border-[#ffd400] mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl">
              <span className="text-lg font-black text-[#d70018]">bach</span>
              <span className="w-4 h-4 bg-amber-400 rotate-45 inline-block" />
              <span className="text-lg font-black text-[#d70018]">long</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {data.business.headline}. Đại lý Ủy quyền Apple (AAR) &amp; Đối
              tác chiến lược Samsung Việt Nam từ năm 2006.
            </p>
            <p className="text-[#ffd400] font-bold">
              Trụ sở chính: {data.business.address}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white mb-3">
              CHÍNH SÁCH BÁN HÀNG &amp; B2B
            </h4>
            <ul className="space-y-2">
              <li>• Chính sách bảo hành toàn diện 1 đổi 1</li>
              <li>• Chính sách chiết khấu dự án B2B &amp; Xuất VAT</li>
              <li>• Chương trình Thu cũ đổi mới không bù tiền</li>
              <li>• Trả góp 0% lãi suất qua 26 ngân hàng</li>
              <li>• Giao hàng hỏa tốc miễn phí trong 2 giờ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white mb-3">
              DANH MỤC CHỦ LỰC
            </h4>
            <ul className="space-y-2">
              <li>• Apple iPhone 15 Pro Max / iPad Pro M4 / MacBook M3</li>
              <li>• Samsung Galaxy S24 Ultra / Galaxy Z Fold6 / Flip6</li>
              <li>• Combo Tablet POS &amp; Smartphone cho đội ngũ Sales</li>
              <li>• Quà tặng công nghệ khắc Laser logo doanh nghiệp</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase text-white mb-3">
              TỔNG ĐÀI HỖ TRỢ MIỄN PHÍ
            </h4>
            <div className="space-y-2">
              <p>
                Tư vấn mua hàng:{" "}
                <strong className="text-[#ffd400] text-sm">{primaryPhone}</strong>
              </p>
              <p>
                Phòng Dự án B2B:{" "}
                <strong className="text-[#ffd400] text-sm">{b2bHotline}</strong>
              </p>
              <p>Email B2B: {primaryEmail}</p>
              <p>Mã số thuế: {data.business.taxCode}</p>
            </div>
          </div>
        </div>
        <div className="bg-black text-slate-500 text-[11px] py-3 text-center">
          © {new Date().getFullYear()} {data.business.name}. All rights reserved.
        </div>
      </footer>

      {/* B2B QUOTE MODAL */}
      {b2bModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div className="bg-[#ffd400] text-slate-950 px-5 py-3.5 flex items-center justify-between">
              <span className="text-sm font-black uppercase">
                Yêu Cầu Báo Giá Sỉ Doanh Nghiệp (B2B)
              </span>
              <button
                type="button"
                onClick={() => setB2BModalOpen(false)}
                className="text-slate-800 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setB2BModalOpen(false);
                setToastMsg(
                  `Đã nhận yêu cầu báo giá B2B cho "${b2bCompany}"! Chuyên viên sẽ gửi bảng giá chiết khấu trong 15 phút.`
                );
                setTimeout(() => setToastMsg(null), 4000);
              }}
              className="p-5 space-y-3 text-xs"
            >
              <div>
                <label className="font-bold block mb-1">
                  Tên Công ty / Tổ chức *
                </label>
                <input
                  required
                  value={b2bCompany}
                  onChange={(e) => setB2BCompany(e.target.value)}
                  placeholder="VD: Công ty Cổ phần Công nghệ ABC"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="font-bold block mb-1">
                  Mã số thuế (Để xuất hóa đơn VAT) *
                </label>
                <input
                  required
                  value={b2bTaxCode}
                  onChange={(e) => setB2BTaxCode(e.target.value)}
                  placeholder="VD: 0312345678"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="font-bold block mb-1">
                  Số điện thoại người phụ trách thu mua *
                </label>
                <input
                  required
                  value={b2bPhone}
                  onChange={(e) => setB2BPhone(e.target.value)}
                  placeholder="VD: 0909 123 456"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d70018] hover:bg-red-700 text-white font-black py-2.5 rounded-lg uppercase"
              >
                Nhận Bảng Giá Chiết Khấu B2B Ngay
              </button>
            </form>
          </div>
        </div>
      )}

      {/* QUICK PRODUCT MODAL */}
      {quickProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="bg-[#ffd400] text-slate-950 px-5 py-3 flex items-center justify-between font-black text-xs uppercase">
              <span>Chi tiết sản phẩm chính hãng Bạch Long</span>
              <button type="button" onClick={() => setQuickProduct(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <img
                src={quickProduct.image}
                alt={quickProduct.name}
                className="w-full h-52 object-cover rounded-xl"
              />
              <h3 className="text-base font-black text-slate-950">
                {quickProduct.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#d70018]">
                  {quickProduct.price}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  {quickProduct.oldPrice}
                </span>
              </div>
              <p className="text-xs font-bold text-emerald-700">
                Giá sỉ B2B: {quickProduct.b2bBulkPrice} • Bảo hành:{" "}
                {quickProduct.warranty}
              </p>
              <button
                type="button"
                onClick={() => {
                  handleAddToCart(quickProduct);
                  setQuickProduct(null);
                }}
                className="w-full bg-[#d70018] text-white font-black text-xs uppercase py-3 rounded-xl"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
            <div>
              <div className="bg-[#ffd400] text-slate-950 px-5 py-4 flex items-center justify-between font-black text-sm uppercase">
                <span>Giỏ Hàng Bạch Long ({cartCount})</span>
                <button type="button" onClick={() => setIsCartOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {cart.length === 0 ? (
                  <p className="text-center py-12 text-xs text-slate-400">
                    Giỏ hàng đang trống.
                  </p>
                ) : (
                  cart.map(({ item, qty }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b border-slate-100 pb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs font-black text-[#d70018]">
                          {item.price}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, -1)}
                            className="p-1 border rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, 1)}
                            className="p-1 border rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.id, -qty)}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-4 border-t bg-slate-50 space-y-3">
              <div className="flex justify-between text-sm font-black">
                <span>Tổng cộng:</span>
                <span className="text-[#d70018]">{formatVnd(cartTotal)}</span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setIsCartOpen(false);
                  setToastMsg(
                    "Đặt hàng thành công! Tổng đài Bạch Long 1900 63 64 69 sẽ liên hệ ngay."
                  );
                }}
                className="w-full bg-[#d70018] disabled:bg-slate-300 text-white font-black text-xs uppercase py-3 rounded-xl"
              >
                Hoàn Tất Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
