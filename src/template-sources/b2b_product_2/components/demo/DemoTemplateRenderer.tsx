"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct2DefaultData,
  type B2BProduct2Data,
  type B2BProductItem
} from "../../data/mockData";
import {
  Search,
  ShoppingCart,
  Menu,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Wrench,
  Cog,
  Cpu,
  Layers,
  Scissors,
  Hammer,
  Flame,
  Gauge,
  Truck,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface Props {
  data?: any;
  customData?: any;
}

export function DemoTemplateRenderer({ data: incomingData, customData }: Props) {
  const data: B2BProduct2Data = adaptClonedTemplateData(
    b2bProduct2DefaultData,
    incomingData || customData
  );

  const [activeTab, setActiveTab] = useState<"all" | "khuyen_mai" | "ban_chay" | "noi_bat">("all");
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterSent, setNewsletterSent] = useState<boolean>(false);
  const [quoteModalProduct, setQuoteModalProduct] = useState<B2BProductItem | null>(null);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const secondaryPhone = data.business.phone?.[1] || primaryPhone;
  const primaryEmail = data.business.email?.[0] || "demonhunter@gmail.com";

  const getCategoryIcon = (idx: number) => {
    const icons = [
      Cog,
      Cpu,
      Flame,
      Layers,
      Scissors,
      Wrench,
      Hammer,
      Gauge,
      Flame,
      Wrench,
      Gauge,
      Cog
    ];
    const IconComp = icons[idx % icons.length];
    return <IconComp className="w-3.5 h-3.5 text-slate-600 shrink-0" />;
  };

  const renderProductCard = (product: B2BProductItem) => (
    <div
      key={product.id}
      className="group bg-white border border-slate-200 hover:border-[#3b6998] hover:shadow-lg transition-all duration-200 p-4 flex flex-col justify-between relative"
    >
      {/* Top Row: Discount Circle + Brand Tag */}
      <div>
        {product.discount && (
          <div className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full bg-[#3b6998] text-white text-xs font-bold flex items-center justify-center shadow">
            {product.discount}
          </div>
        )}
        <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
          <span>{product.brand}</span>
          <span className="text-[#3b6998]">CHÍNH HÃNG</span>
        </div>

        {/* Product Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 mb-3 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category + Name */}
        <div className="text-center px-1">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
            {product.category}
          </div>
          <h3 className="text-xs font-semibold text-slate-700 group-hover:text-[#3b6998] line-clamp-2 min-h-[34px] leading-snug mb-2">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Price & Add to Cart */}
      <div className="text-center pt-1">
        <div className="flex items-center justify-center gap-2 text-xs mb-3 flex-wrap">
          {product.oldPrice && (
            <span className="text-slate-400 line-through text-[11px]">
              {product.oldPrice}
            </span>
          )}
          <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
            {product.price}
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            setCartCount((c) => c + 1);
            setQuoteModalProduct(product);
          }}
          className="inline-block px-4 py-1.5 border border-[#3b6998] text-[#3b6998] hover:bg-[#3b6998] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
        >
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#f5f5f5] border-b border-slate-200 text-[11px] text-slate-600">
        <div className="max-w-6xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4 truncate">
            <span className="text-slate-500">Hỗ trợ khách hàng</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="truncate">
              <strong className="text-slate-800">Hà Nội:</strong> {primaryPhone}{" "}
              - <strong className="text-slate-800">Tp.Hồ Chí Minh:</strong>{" "}
              {secondaryPhone}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#lien-he"
              className="hidden sm:inline-block px-2.5 py-1 bg-white border border-slate-200 hover:border-[#3b6998] text-slate-600"
            >
              Kiểm tra đơn hàng
            </a>
            <a
              href="#lien-he"
              className="hidden sm:inline-block px-2.5 py-1 bg-white border border-slate-200 hover:border-[#3b6998] text-slate-600"
            >
              Tài khoản
            </a>
            <button
              type="button"
              onClick={() => setQuoteModalProduct(data.topProducts[0])}
              className="relative px-2.5 py-1 bg-white border border-slate-200 flex items-center gap-1 text-slate-700 hover:border-[#3b6998]"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-[#3b6998]" />
              <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE HEADER */}
      <header className="bg-white py-5 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded bg-[#3b6998] text-white flex flex-col items-center justify-center shadow-sm border-2 border-slate-800">
              <Cpu className="w-6 h-6" />
              <span className="text-[8px] font-black tracking-tighter">CNC</span>
            </div>
            <div className="leading-none">
              <div className="text-2xl font-black tracking-wider text-slate-900 uppercase">
                {data.business.name}
              </div>
              <div className="text-[10px] font-bold text-[#3b6998] tracking-widest uppercase mt-0.5">
                Cơ Khí Chính Xác B2B
              </div>
            </div>
          </a>

          {/* Center Search Bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-xl flex items-center border border-slate-300 bg-white"
          >
            <select
              aria-label="Danh mục tìm kiếm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-xs text-slate-600 bg-slate-50 border-r border-slate-300 focus:outline-none"
            >
              <option value="Tất cả">Tất cả</option>
              {data.categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm máy cắt CNC, máy tiện, máy nén khí..."
              className="flex-1 px-3 py-2 text-xs text-slate-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#3b6998] hover:bg-[#2c527a] text-white text-xs font-bold uppercase flex items-center gap-1.5 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>TÌM</span>
            </button>
          </form>

          {/* Right Trust Badges */}
          <div className="hidden xl:flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-7 h-7 text-slate-700" />
              <div className="text-left leading-tight">
                <div className="text-[11px] text-slate-500">Phương thức</div>
                <div className="text-xs font-extrabold text-slate-800 uppercase">
                  THANH TOÁN
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-7 h-7 text-slate-700" />
              <div className="text-left leading-tight">
                <div className="text-[11px] text-slate-500">Hướng dẫn</div>
                <div className="text-xs font-extrabold text-slate-800 uppercase">
                  MUA HÀNG
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PRIMARY NAVIGATION BAR (`#3b6998`) */}
      <nav className="bg-[#3b6998] text-white">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          {/* Left Category Header Block */}
          <div className="w-60 bg-[#2b2b2b] px-4 py-3 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider shrink-0">
            <Menu className="w-4 h-4 text-white" />
            <span>DANH MỤC SẢN PHẨM</span>
          </div>

          {/* Horizontal Nav Links */}
          <div className="flex items-center overflow-x-auto text-xs font-semibold">
            <a
              href="#"
              className="px-5 py-3 bg-[#2c527a] text-white whitespace-nowrap"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="px-5 py-3 hover:bg-[#2c527a] transition-colors whitespace-nowrap"
            >
              Giới thiệu
            </a>
            <a
              href="#top-san-pham"
              className="px-5 py-3 hover:bg-[#2c527a] transition-colors whitespace-nowrap"
            >
              Cửa hàng
            </a>
            <a
              href="#may-cat-cnc"
              className="px-5 py-3 hover:bg-[#2c527a] transition-colors whitespace-nowrap"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="px-5 py-3 hover:bg-[#2c527a] transition-colors whitespace-nowrap"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </nav>

      {/* 4. 3-COLUMN HERO AREA */}
      <section className="max-w-6xl mx-auto px-4 pt-3 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Column 1: 12-Item Vertical Category Sidebar */}
          <div className="lg:col-span-3 border border-slate-200 bg-white divide-y divide-slate-100">
            {data.categories.map((cat, idx) => (
              <a
                key={cat.id}
                href="#top-san-pham"
                onClick={() => setSelectedCategory(cat.name)}
                className="px-3.5 py-2.5 flex items-center justify-between hover:bg-slate-50 hover:text-[#3b6998] transition-colors text-xs text-slate-700"
              >
                <span className="flex items-center gap-2.5">
                  {getCategoryIcon(idx)}
                  <span className="font-medium">{cat.name}</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </div>

          {/* Column 2: Main Industrial CNC Laser Banner */}
          <div className="lg:col-span-6 relative border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden flex flex-col justify-between p-6 min-h-[380px]">
            <div className="relative z-10 text-center space-y-1.5 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                {data.hero.eyebrow}
              </div>
              <div className="text-xs font-extrabold text-[#3b6998]">
                {data.hero.subtitle}
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#1d4ed8] uppercase tracking-tight">
                {data.hero.title}
              </h1>
              <div className="inline-flex items-center gap-3 pt-1">
                <span className="px-3 py-0.5 bg-[#1e3a8a] text-white text-[10px] font-bold uppercase rounded-sm">
                  CẮT TẤM KIM LOẠI
                </span>
                <span className="px-3 py-0.5 bg-[#1e3a8a] text-white text-[10px] font-bold uppercase rounded-sm">
                  CẮT ỐNG THÉP CNC
                </span>
              </div>
            </div>

            <div className="relative my-3 rounded overflow-hidden aspect-[16/9] border border-slate-200 shadow-inner bg-white">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3b6998]" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
          </div>

          {/* Column 3: 3 Stacked Side Sub-Banners */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-3">
            {/* Sub-banner 1 */}
            <div className="relative border border-slate-200 bg-slate-50 h-32 overflow-hidden group">
              <img
                src={data.heroSideBanners[0]?.image}
                alt={data.heroSideBanners[0]?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                <div className="text-xs font-bold">
                  {data.heroSideBanners[0]?.title}
                </div>
                <div className="text-[10px] text-blue-200">
                  {data.heroSideBanners[0]?.subtitle}
                </div>
              </div>
            </div>

            {/* Sub-banner 2 (Fast delivery green/blue highlight) */}
            <div className="relative border border-lime-300 bg-gradient-to-r from-lime-50 to-emerald-50 h-36 p-3.5 flex items-center justify-between overflow-hidden">
              <div className="space-y-1 z-10">
                <span className="inline-block px-2 py-0.5 bg-lime-600 text-white text-[9px] font-bold uppercase rounded">
                  GIAO NHANH 24H
                </span>
                <div className="text-sm font-black text-lime-800 leading-tight">
                  Chọn giao hàng siêu tốc
                </div>
                <div className="text-xs font-bold text-emerald-700">
                  Tức tốc giao hàng tận xưởng
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-lime-500/20 flex items-center justify-center shrink-0">
                <Truck className="w-9 h-9 text-lime-700" />
              </div>
            </div>

            {/* Sub-banner 3 */}
            <div className="relative border border-slate-200 bg-slate-50 h-32 overflow-hidden group">
              <img
                src={data.heroSideBanners[2]?.image}
                alt={data.heroSideBanners[2]?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                <div className="text-xs font-bold">
                  {data.heroSideBanners[2]?.title}
                </div>
                <div className="text-[10px] text-blue-200">
                  {data.heroSideBanners[2]?.subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: TOP SẢN PHẨM */}
      <section id="top-san-pham" className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-2 mb-5 gap-3">
          <h2 className="text-base font-extrabold uppercase text-slate-800 border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            TOP SẢN PHẨM
          </h2>

          <div className="flex items-center text-[11px] font-bold uppercase">
            {[
              { key: "all", label: "KHUYẾN MÃI" },
              { key: "ban_chay", label: "BÁN CHẠY" },
              { key: "noi_bat", label: "NỔI BẬT" }
            ].map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key as any)}
                className={`px-3.5 py-1.5 border transition-colors ${
                  activeTab === t.key
                    ? "border-[#3b6998] text-[#3b6998] bg-blue-50/40"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.topProducts.map((prod) => renderProductCard(prod))}
          </div>
        </div>
      </section>

      {/* 6. 3-COLUMN INDUSTRIAL WORKSHOP PROMO IMAGES */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.workshopBanners.map((imgUrl, idx) => (
            <div
              key={idx}
              className="overflow-hidden border border-slate-200 aspect-[16/10] group"
            >
              <img
                src={imgUrl}
                alt={`Xưởng gia công cơ khí CNC ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 7. SECTION: SẢN PHẨM MỚI (1 Dealer Poster + 3 Product Cards) */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b border-slate-200 pb-2 mb-5">
          <h2 className="text-base font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            SẢN PHẨM MỚI
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Left Vertical Dealer Recruitment Poster */}
          <div className="relative bg-gradient-to-b from-[#0099ff] via-[#0066cc] to-[#003380] text-white p-5 flex flex-col justify-between overflow-hidden border border-blue-400">
            <div className="relative z-10 text-center space-y-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-400 text-slate-900 text-sm font-black uppercase shadow">
                {data.dealerPoster.badge}
              </div>
              <h3 className="text-base font-black uppercase leading-snug pt-1">
                {data.dealerPoster.title}
              </h3>
              <p className="text-[11px] font-bold text-yellow-300 uppercase">
                {data.dealerPoster.subtitle}
              </p>
              <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-black rounded">
                HOTLINE: {data.dealerPoster.hotline}
              </div>
            </div>

            <div className="relative z-10 mt-4 rounded overflow-hidden h-44 border border-white/20">
              <img
                src={data.dealerPoster.image}
                alt="Tìm đại lý phân phối máy nén khí"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* 3 New Products */}
          {data.newProducts.map((prod) => renderProductCard(prod))}
        </div>
      </section>

      {/* 8. SECTION: MÁY NÉN KHÍ */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b border-slate-200 pb-2 mb-5">
          <h2 className="text-base font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            MÁY NÉN KHÍ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.airCompressors.map((prod) => renderProductCard(prod))}
        </div>

        <div className="mt-4">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 border border-slate-200 text-xs text-slate-600 hover:border-[#3b6998] hover:text-[#3b6998]"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 9. SECTION: MÁY CẮT CNC (2 Wide Promo Banners + 4 Product Cards) */}
      <section id="may-cat-cnc" className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b border-slate-200 pb-2 mb-5">
          <h2 className="text-base font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            MÁY CẮT CNC
          </h2>
        </div>

        {/* 2 Wide Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {data.cncPromoBanners.map((banner) => (
            <div
              key={banner.id}
              className={`relative h-28 px-6 flex items-center justify-between overflow-hidden border ${
                banner.theme === "blue"
                  ? "bg-gradient-to-r from-slate-100 via-blue-50 to-blue-100 border-blue-200"
                  : "bg-gradient-to-r from-teal-50 via-emerald-100 to-teal-500 border-teal-300"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-36 h-24 object-cover rounded shadow-sm border border-white"
              />
              <div
                className={`text-right ${
                  banner.theme === "teal" ? "text-white" : "text-blue-900"
                }`}
              >
                <div className="text-sm sm:text-base font-black uppercase">
                  {banner.title}
                </div>
                <div className="text-lg font-black tracking-wider">
                  {banner.brand}
                </div>
                <div className="text-[11px] opacity-90">{banner.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.cncCutters.map((prod) => renderProductCard(prod))}
        </div>

        <div className="mt-4">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 border border-slate-200 text-xs text-slate-600 hover:border-[#3b6998] hover:text-[#3b6998]"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 10. SECTION: XE NÂNG-CẨU */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b border-slate-200 pb-2 mb-5">
          <h2 className="text-base font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            XE NÂNG-CẨU
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.forklifts.map((prod) => renderProductCard(prod))}
        </div>

        <div className="mt-4">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 border border-slate-200 text-xs text-slate-600 hover:border-[#3b6998] hover:text-[#3b6998]"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 11. SECTION: TIỆN CNC */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b border-slate-200 pb-2 mb-5">
          <h2 className="text-base font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            TIỆN CNC
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.cncLathes.map((prod) => renderProductCard(prod))}
        </div>

        <div className="mt-4">
          <a
            href="#lien-he"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 border border-slate-200 text-xs text-slate-600 hover:border-[#3b6998] hover:text-[#3b6998]"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 12. BLUE NEWSLETTER & ONLINE SUPPORT BAR */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="bg-[#3b6998] text-white px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNewsletterSent(true);
            }}
            className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto"
          >
            <span className="text-sm font-extrabold uppercase tracking-wide whitespace-nowrap">
              ĐĂNG KÝ NHẬN BẢN TIN
            </span>
            <div className="flex w-full sm:w-80">
              <input
                type="email"
                required
                placeholder="Nhập email của bạn vào đây"
                className="flex-1 px-3 py-2 text-xs text-slate-800 bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-[#222222] hover:bg-black text-white text-xs font-bold uppercase transition-colors"
              >
                GỬI
              </button>
            </div>
            {newsletterSent && (
              <span className="text-xs text-yellow-300 font-semibold">
                Đã đăng ký!
              </span>
            )}
          </form>

          <div className="text-xs text-blue-100 text-center lg:text-right leading-relaxed">
            <div className="font-semibold text-white">
              Dịch vụ chăm sóc khách hàng online
            </div>
            <div>{data.business.workingHours}</div>
          </div>
        </div>
      </section>

      {/* 13. TOP THƯƠNG HIỆU */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="border-b border-slate-200 pb-2 mb-6">
          <h2 className="text-base font-extrabold uppercase text-slate-800 inline-block border-b-2 border-[#3b6998] pb-2 -mb-2.5">
            TOP THƯƠNG HIỆU
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {(data.clients || []).map((brand, idx) => (
            <div
              key={brand.id}
              className="h-16 border border-slate-100 bg-slate-50/60 flex items-center justify-center px-3 text-center hover:border-[#3b6998] transition-colors"
            >
              <span
                className={`text-sm font-black tracking-wider ${
                  idx % 2 === 0 ? "text-red-600" : "text-[#1e3a8a]"
                }`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 14. DARK CHARCOAL FOOTER (`#222222`) */}
      <footer id="lien-he" className="bg-[#222222] text-slate-300 pt-12">
        <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                THÔNG TIN LIÊN HỆ
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                THÔNG TIN CHUNG
              </h3>
              <ul className="space-y-1.5 text-slate-400">
                <li>Giới thiệu</li>
                <li>Chính sách vận chuyển</li>
                <li>Phương thức thanh toán</li>
                <li>Hướng mua hàng online</li>
              </ul>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                CHI NHÁNH
              </h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{secondaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{data.business.email?.[1] || primaryEmail}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                HỢP TÁC VÀ LIÊN KẾT
              </h3>
              <ul className="space-y-1.5 text-slate-400">
                <li>Liên hệ đại lý</li>
                <li>Quảng cáo B2B</li>
              </ul>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                TÀI KHOẢN CỦA BẠN
              </h3>
              <ul className="space-y-1.5 text-slate-400">
                <li className="text-[#5b9bd5]">Tài khoản</li>
                <li>Theo dõi đơn hàng</li>
                <li>Thanh toán</li>
                <li>Cửa hàng</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                THEO DÕI CHÚNG TÔI TRÊN
              </h3>
              <div className="flex items-center gap-3 text-slate-300">
                {["f", "◎", "G+", "▶"].map((s) => (
                  <a
                    key={s}
                    href="#lien-he"
                    className="w-7 h-7 rounded bg-white/10 hover:bg-[#3b6998] flex items-center justify-center text-xs font-bold"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                CHỨNG NHẬN
              </h3>
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1.5 rounded bg-[#0072bc] text-white flex items-center gap-1.5 text-[10px] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</span>
                </div>
                <div className="px-2.5 py-1.5 rounded bg-red-600 text-white flex items-center gap-1.5 text-[10px] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ĐÃ ĐĂNG KÝ</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase tracking-wider mb-3">
                DỊCH VỤ GIAO HÀNG
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white text-slate-800 px-2 py-1.5 rounded text-[10px] font-extrabold text-center">
                  GIAO HÀNG MONA
                </div>
                <div className="bg-white text-red-600 px-2 py-1.5 rounded text-[10px] font-extrabold text-center">
                  GHN EXPRESS
                </div>
                <div className="bg-white text-amber-600 px-2 py-1.5 rounded text-[10px] font-extrabold text-center">
                  VNPOST
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Blue Bar */}
        <div className="bg-[#2c5d8f] text-white/90 py-3 text-center text-[11px]">
          © Bản quyền thuộc về hệ thống phân phối thiết bị cơ khí{" "}
          <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* QUICK QUOTE / CART MODAL */}
      {quoteModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl border-t-4 border-[#3b6998]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold uppercase text-[#3b6998]">
                Yêu cầu báo giá / Đặt mua thiết bị
              </h3>
              <button
                type="button"
                onClick={() => setQuoteModalProduct(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 mb-4">
              <img
                src={quoteModalProduct.image}
                alt={quoteModalProduct.name}
                className="w-14 h-14 object-cover"
              />
              <div>
                <div className="text-xs font-bold text-slate-800">
                  {quoteModalProduct.name}
                </div>
                <div className="text-xs font-extrabold text-[#3b6998] mt-0.5">
                  {quoteModalProduct.price}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Liên hệ trực tiếp bộ phận kinh doanh dự án{" "}
              <strong>{data.business.name}</strong> qua hotline{" "}
              <strong className="text-[#3b6998]">{primaryPhone}</strong> để nhận
              báo giá kỹ thuật chi tiết và ưu đãi chiết khấu đại lý.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setQuoteModalProduct(null)}
                className="px-4 py-2 border border-slate-300 text-xs font-bold text-slate-600"
              >
                Đóng
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="px-4 py-2 bg-[#3b6998] text-white text-xs font-bold"
              >
                Gọi ngay: {primaryPhone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
