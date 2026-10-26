"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Truck,
  CreditCard,
  Gift,
  Headphones,
  Calendar,
  MessageSquare,
  ArrowUp,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct14DefaultData,
  type B2B14Data,
  type B2B14ProductItem
} from "@/template-sources/b2b_product_14/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2B14Data = adaptClonedTemplateData(
    b2bProduct14DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePromoTab, setActivePromoTab] = useState(
    data.promoTabs[0] || "Balo học sinh"
  );
  const [selectedProduct, setSelectedProduct] = useState<B2B14ProductItem | null>(
    null
  );
  const [cartCount, setCartCount] = useState(1);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const newsList = data.news || b2bProduct14DefaultData.news || [];

  const renderSectionHeader = (title: string, withArrows = false) => (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <LayoutGrid className="w-4 h-4 text-[#0054a6]" />
        <h2 className="text-sm sm:text-base font-extrabold text-[#111827]">
          {title}
        </h2>
      </div>
      {withArrows && (
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="w-6 h-6 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#0054a6] hover:text-white"
            aria-label="Trước"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            className="w-6 h-6 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#0054a6] hover:text-white"
            aria-label="Sau"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );

  const renderVerticalProductCard = (item: B2B14ProductItem) => (
    <div
      key={item.id}
      onClick={() => setSelectedProduct(item)}
      className="group cursor-pointer bg-white rounded-xl border border-slate-200/80 p-3 hover:border-[#0054a6] hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50 mb-2.5 flex items-center justify-center p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {item.discountBadge && (
          <span className="absolute top-1.5 left-1.5 bg-[#e53935] text-white text-[9px] font-bold px-2 py-0.5 rounded">
            {item.discountBadge}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-[11px] font-medium text-slate-700 group-hover:text-[#0054a6] line-clamp-2 leading-snug">
          {item.title}
        </h3>
        <div className="flex items-center gap-1.5 pt-0.5">
          {item.oldPrice && (
            <span className="text-[10px] text-slate-400 line-through">
              {item.oldPrice}
            </span>
          )}
          <span className="text-xs font-extrabold text-[#0054a6]">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans selection:bg-[#0054a6] selection:text-white"
    >
      {/* 1. PROMOTIONAL TOP STRIP + ROYAL BLUE HEADER (#0054a6) */}
      <header className="sticky top-0 z-40 shadow-sm">
        {/* Top Colorful Promo Strip */}
        <div className="bg-gradient-to-r from-[#fde68a] via-[#fca5a5] to-[#bae6fd] text-[#0f172a] text-[11px] py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold text-[#0054a6] uppercase tracking-wide">
              ★ {data.topPromoStrip.leftText}
            </span>
            <span className="hidden md:inline-block bg-white/90 px-3 py-0.5 rounded-full font-bold text-[#e53935] border border-amber-300">
              {data.topPromoStrip.voucherCode}
            </span>
            <a
              href="#flash-sale"
              className="bg-[#581c87] text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full hover:bg-[#3b0764]"
            >
              {data.topPromoStrip.ctaText}
            </a>
          </div>
        </div>

        {/* Royal Blue Main Navbar */}
        <div className="bg-[#0054a6] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
            {/* Left Logo + Hamburger */}
            <div className="flex items-center gap-4">
              <a href="#top" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white text-[#0054a6] font-black text-base flex items-center justify-center shadow">
                  M
                </div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight">
                  {data.business.name}
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded hover:bg-white/10"
                aria-label="Danh mục"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Center Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-white/95">
              <a href="#top" className="hover:text-amber-300">
                Trang chủ
              </a>
              <a href="#newest-products" className="hover:text-amber-300">
                Sản phẩm
              </a>
              <a href="#enterprise-banner" className="hover:text-amber-300">
                Giới thiệu
              </a>
              <a href="#news" className="hover:text-amber-300">
                Tin tức
              </a>
              <a href="#footer-b2b" className="hover:text-amber-300">
                Liên hệ
              </a>
            </nav>

            {/* Right Viewed Products + Cart + Search */}
            <div className="flex items-center gap-4 text-xs">
              <a
                href="#popular-products"
                className="hidden sm:flex items-center gap-1 hover:text-amber-300"
              >
                <span>Sản phẩm đã xem</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedProduct(data.flashSale.items[0])}
                className="relative p-1.5 hover:text-amber-300"
                aria-label="Giỏ hàng"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span className="absolute -top-0.5 -right-1 w-4 h-4 rounded-full bg-[#e53935] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("newest-products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-1.5 hover:text-amber-300"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#004282] px-6 py-3 space-y-2 text-xs font-semibold border-t border-white/15">
              <a
                href="#top"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Trang chủ
              </a>
              <a
                href="#newest-products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Sản phẩm mới nhất
              </a>
              <a
                href="#best-sellers"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Sản phẩm bán chạy
              </a>
              <a
                href="#news"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Tin tức
              </a>
              <a
                href="#footer-b2b"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                Liên hệ báo giá B2B
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-6 space-y-8">
        {/* 2. TOP 2-COLUMN HERO BANNERS + FULL-WIDTH "DEAL HỜI RA MẮT" BANNER */}
        <section className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left 8 Cols: ĐÓN HÈ SANG DEAL RỘN RÀNG */}
            <div className="lg:col-span-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#bae6fd] via-[#e0f2fe] to-[#fef3c7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-3 z-10 text-center sm:text-left">
                <span className="inline-block bg-pink-500 text-white text-xs font-black uppercase px-3 py-1 rounded-lg shadow">
                  ĐÓN HÈ SANG
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-[#0284c7] uppercase leading-none drop-shadow-sm">
                  DEAL RỘN RÀNG
                </h1>
                {/* 3 Promo Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <div className="bg-white/95 rounded-xl px-3 py-1.5 border border-pink-200 text-center shadow-sm">
                    <span className="text-[9px] font-bold text-slate-500 block">
                      DEAL SỐC
                    </span>
                    <span className="text-sm font-black text-pink-600">9K</span>
                  </div>
                  <div className="bg-white/95 rounded-xl px-3 py-1.5 border border-sky-200 text-center shadow-sm">
                    <span className="text-[9px] font-bold text-slate-500 block">
                      ĐƠN TỪ 199K
                    </span>
                    <span className="text-[10px] font-extrabold text-[#0054a6]">
                      TẶNG 2 BÚT LÔNG
                    </span>
                  </div>
                  <div className="bg-white/95 rounded-xl px-3 py-1.5 border border-amber-200 text-center shadow-sm">
                    <span className="text-[9px] font-bold text-slate-500 block">
                      ĐƠN TỪ 500K
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-600">
                      TẶNG ỐNG CẮM BÚT
                    </span>
                  </div>
                </div>
              </div>

              <img
                src={data.hero.backgroundImage}
                alt="Văn phòng phẩm khuyến mãi"
                className="w-56 h-44 object-cover rounded-xl shadow-md shrink-0"
              />
            </div>

            {/* Right 4 Cols: BACK TO SCHOOL */}
            <div className="lg:col-span-4 relative overflow-hidden rounded-2xl bg-[#0f291e] text-white p-6 flex flex-col items-center justify-center text-center shadow-sm border-4 border-amber-700/40">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                MÙA TỰU TRƯỜNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-white mt-1">
                BACK TO <br />
                <span className="text-amber-400">SCHOOL</span>
              </h2>
              <p className="text-[11px] text-emerald-100 mt-2">
                Trọn bộ dụng cụ học tập & thiết bị văn phòng chính hãng
              </p>
              <a
                href="#newest-products"
                className="mt-4 bg-amber-400 hover:bg-amber-300 text-[#0f291e] text-xs font-black uppercase px-5 py-2 rounded-full"
              >
                Khám phá ngay
              </a>
            </div>
          </div>

          {/* Full-width Second Banner: DEAL HỜI RA MẮT */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#0ea5e9] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[#e53935] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                  NEW ARRIVAL
                </span>
                <span className="text-xs font-bold text-amber-200">
                  KHUYẾN MÃI ĐẶC BIỆT
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-amber-300 drop-shadow">
                DEAL HỜI RA MẮT
              </h2>
              <p className="text-sm sm:text-lg font-extrabold text-white uppercase">
                LỜI QUÀ THẬT TO — GIẢM ĐẾN 65% • MUA 1 TẶNG 2
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
                alt="Bộ văn phòng phẩm mới"
                className="hidden sm:block w-48 h-28 object-cover rounded-xl border-2 border-white/50 shadow"
              />
              <a
                href="#flash-sale"
                className="bg-white hover:bg-amber-300 text-[#0054a6] text-xs font-black uppercase px-6 py-3 rounded-full shadow-lg shrink-0 transition-colors"
              >
                MUA NGAY
              </a>
            </div>
          </div>
        </section>

        {/* 3. GIỜ VÀNG GIÁ SỐC (FLASH SALE COUNTDOWN BOX) */}
        <section
          id="flash-sale"
          className="bg-white rounded-2xl border-2 border-[#0054a6]/30 p-5 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 3 Cols: Countdown */}
            <div className="lg:col-span-3 space-y-4 text-center lg:text-left">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111827]">
                {data.flashSale.title}
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                {[
                  { val: data.flashSale.countdown.days, label: "Ngày" },
                  { val: data.flashSale.countdown.hours, label: "Giờ" },
                  { val: data.flashSale.countdown.mins, label: "Phút" },
                  { val: data.flashSale.countdown.secs, label: "Giây" }
                ].map((t, i) => (
                  <div key={i} className="text-center">
                    <span className="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0054a6] font-extrabold text-xs flex items-center justify-center">
                      {t.val}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <a
                  href="#newest-products"
                  className="inline-block bg-[#0054a6] hover:bg-[#003d7a] text-white text-xs font-bold px-6 py-2 rounded-lg transition-colors"
                >
                  Xem thêm
                </a>
              </div>
            </div>

            {/* Right 9 Cols: 4 Flash Sale Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {data.flashSale.items.map((item) =>
                renderVerticalProductCard(item)
              )}
            </div>
          </div>
        </section>

        {/* 4. GIẢI PHÁP VĂN PHÒNG PHẨM DOANH NGHIỆP BANNER + SẢN PHẨM MỚI NHẤT (6x2 GRID) */}
        <section id="enterprise-banner" className="space-y-6">
          {/* Enterprise Stationery Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0054a6] via-[#0284c7] to-[#38bdf8] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-lg text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                GIẢI PHÁP CUNG ỨNG B2B
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-amber-300 leading-tight">
                VĂN PHÒNG PHẨM DOANH NGHIỆP
              </h2>
              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2 text-[10px] font-extrabold">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  ĐƠN BẤT KỲ TẶNG BỘ 10 CÁI
                </span>
                <span className="bg-amber-400 text-[#0054a6] px-3 py-1 rounded-full">
                  ĐƠN 249K TẶNG QUÀ
                </span>
                <span className="bg-white text-[#0054a6] px-3 py-1 rounded-full">
                  ĐƠN 399K CHIẾT KHẤU SỈ
                </span>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
              alt="Giải pháp văn phòng phẩm doanh nghiệp"
              className="w-64 h-36 object-cover rounded-xl shadow-lg border-2 border-white/40"
            />
          </div>

          {/* Sản phẩm mới nhất (12-Card 6x2 Grid) */}
          <div id="newest-products">
            {renderSectionHeader("Sản phẩm mới nhất", true)}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {data.newestProducts.map((item) =>
                renderVerticalProductCard(item)
              )}
            </div>
          </div>
        </section>

        {/* 5. "TỰU TRƯỜNG TRI THỨC" BANNER + SẢN PHẨM BÁN CHẠY */}
        <section id="best-sellers" className="space-y-6">
          {/* Tựu Trường Tri Thức Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-sm font-serif italic font-bold text-[#1e3a8a]">
                Tựu Trường Tri Thức
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#7e22ce] leading-tight">
                SÁNG RỰC TƯƠNG LAI
              </h2>
              <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-2 text-[10px] font-black text-white">
                <span className="bg-[#0284c7] px-3 py-1 rounded-lg">
                  GIẢM 30% SẢN PHẨM
                </span>
                <span className="bg-[#2563eb] px-3 py-1 rounded-lg">
                  QUÀ TẶNG ĐƠN 399K
                </span>
                <span className="bg-[#e53935] px-3 py-1 rounded-lg">
                  FREE SHIP MỌI MIỀN
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=600&q=80"
              alt="Tựu trường tri thức"
              className="w-64 h-36 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Sản phẩm bán chạy Box */}
          <div className="bg-[#f1f5f9] rounded-2xl p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-3 space-y-2.5">
              <h2 className="text-base sm:text-lg font-extrabold text-[#0054a6]">
                Sản phẩm bán chạy
              </h2>
              <ul className="space-y-1 text-[11px] font-semibold text-slate-500 uppercase">
                {data.business.highlights?.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
              <div className="pt-2">
                <a
                  href="#popular-products"
                  className="inline-block bg-[#0054a6] hover:bg-[#003d7a] text-white text-xs font-bold px-5 py-2 rounded-lg"
                >
                  Xem thêm
                </a>
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {data.bestSellingProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className="cursor-pointer bg-white rounded-xl p-3 border border-slate-200/70 hover:border-[#0054a6] flex items-center gap-3 shadow-sm transition-all"
                >
                  <div className="relative w-16 h-16 shrink-0 bg-slate-50 rounded-lg overflow-hidden p-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                    {item.discountBadge && (
                      <span className="absolute top-0.5 left-0.5 bg-[#e53935] text-white text-[8px] font-bold px-1 rounded">
                        {item.discountBadge}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <h3 className="text-[11px] font-medium text-slate-700 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      {item.oldPrice && (
                        <span className="text-[10px] text-slate-400 line-through">
                          {item.oldPrice}
                        </span>
                      )}
                      <span className="text-xs font-extrabold text-[#0054a6]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SẢN PHẨM PHỔ BIẾN (12-CARD 6x2 GRID) */}
        <section id="popular-products">
          {renderSectionHeader("Sản phẩm phổ biến", false)}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {data.popularProducts.map((item) =>
              renderVerticalProductCard(item)
            )}
          </div>
        </section>

        {/* 7. "SIÊU PHẨM MÙA HÈ ACRYLIC MARKERS" BANNER + ĐANG KHUYẾN MÃI (WITH TABS) */}
        <section className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#bae6fd] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-amber-300">
                NEW ARRIVAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase">
                SIÊU PHẨM MÙA HÈ — ACRYLIC MARKERS
              </h2>
              <p className="text-xs text-sky-100">
                Bút lông màu Acrylic vẽ trên mọi chất liệu • Tặng ngay Túi Canvas
              </p>
            </div>
            <a
              href="#newest-products"
              className="bg-[#0054a6] hover:bg-[#003d7a] text-white text-xs font-black uppercase px-6 py-2.5 rounded-full shadow"
            >
              MUA NGAY
            </a>
          </div>

          {/* Đang khuyến mãi + Category Tabs */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-[#0054a6]" />
                <h2 className="text-sm sm:text-base font-extrabold text-[#111827]">
                  Đang khuyến mãi
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs">
                {data.promoTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActivePromoTab(tab)}
                    className={`font-semibold transition-colors ${
                      activePromoTab === tab
                        ? "text-[#0054a6] font-extrabold underline underline-offset-4"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {data.promoProducts.map((item) =>
                renderVerticalProductCard(item)
              )}
            </div>
          </div>
        </section>

        {/* 8. 2-COLUMN SPLIT: ĐƯỢC ĐỀ XUẤT & ĐÁNH GIÁ NHIỀU NHẤT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Được đề xuất */}
          <div>
            {renderSectionHeader("Được đề xuất", false)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.recommendedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className="cursor-pointer bg-white rounded-xl p-3 border border-slate-200/80 hover:border-[#0054a6] flex items-center gap-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-lg bg-slate-50 p-1 shrink-0"
                  />
                  <div className="space-y-1">
                    <h3 className="text-[11px] font-medium text-slate-700 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs font-extrabold text-[#0054a6] block">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Đánh giá nhiều nhất */}
          <div>
            {renderSectionHeader("Đánh giá nhiều nhất", false)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.topRatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className="cursor-pointer bg-white rounded-xl p-3 border border-slate-200/80 hover:border-[#0054a6] flex items-center gap-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-lg bg-slate-50 p-1 shrink-0"
                  />
                  <div className="space-y-1">
                    <h3 className="text-[11px] font-medium text-slate-700 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs font-extrabold text-[#0054a6] block">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. TIN TỨC MỚI NHẤT (4 BLOG CARDS) */}
        <section id="news" className="pt-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <LayoutGrid className="w-4 h-4 text-[#0054a6]" />
            <h2 className="text-base sm:text-lg font-extrabold text-[#111827]">
              Tin tức mới nhất
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newsList.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#0054a6] block">
                      • {post.category}
                    </span>
                    <h3 className="text-xs font-extrabold text-[#111827] line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> 0 BÌNH LUẬN
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* SERVICE COMMITMENTS BAR */}
      <section className="bg-[#f1f5f9] border-t border-slate-200 py-6 px-4 sm:px-8 mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.serviceCommitments.map((sc, idx) => (
            <div key={sc.id} className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#0054a6] text-white flex items-center justify-center shrink-0">
                {idx === 0 && <Truck className="w-5 h-5" />}
                {idx === 1 && <CreditCard className="w-5 h-5" />}
                {idx === 2 && <Gift className="w-5 h-5" />}
                {idx === 3 && <Headphones className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xs font-extrabold text-[#111827]">
                  {sc.title}
                </h3>
                <p className="text-[11px] text-slate-500">{sc.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. ROYAL BLUE FOOTER (#0054a6) */}
      <footer id="footer-b2b" className="bg-[#0054a6] text-white pt-12 pb-6 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15 text-xs">
            {/* Col 1: Brand */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white text-[#0054a6] font-black text-base flex items-center justify-center">
                  M
                </div>
                <span className="text-lg font-extrabold">
                  {data.business.name}
                </span>
              </div>
              <p className="text-[11px] text-sky-100 leading-relaxed">
                Địa chỉ: {data.business.address}
              </p>
              <p className="text-[11px] text-sky-100">
                Email: <u className="text-white">{primaryEmail}</u>
              </p>
              <p className="text-[11px] text-sky-100">
                Số điện thoại: <u className="text-white">{primaryPhone}</u>
              </p>
            </div>

            {/* Col 2: Hỗ trợ khách hàng */}
            <div className="lg:col-span-3 space-y-2.5">
              <h3 className="font-extrabold text-white">Hỗ trợ khách hàng</h3>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-base sm:text-lg font-black text-amber-400 block"
              >
                {primaryPhone}
              </a>
              <p className="text-[11px] text-sky-100">
                Thứ 2 – Thứ 7: 9:00-20:00
              </p>
              <p className="text-[11px] text-sky-100">Chủ nhật: 9:00-18:00</p>
              <div className="flex items-center gap-2 pt-1">
                {["f", "t", "yt", "ig"].map((s) => (
                  <a
                    key={s}
                    href="#top"
                    className="w-7 h-7 rounded-full bg-white text-[#0054a6] font-bold text-[11px] flex items-center justify-center"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Danh mục */}
            <div className="lg:col-span-2 space-y-2">
              <h3 className="font-extrabold text-white">Danh mục</h3>
              <ul className="space-y-1.5 text-[11px] text-sky-100">
                <li>
                  <a href="#top" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#newest-products" className="hover:text-white">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#enterprise-banner" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Chính sách */}
            <div className="lg:col-span-2 space-y-2">
              <h3 className="font-extrabold text-white">Chính sách</h3>
              <ul className="space-y-1.5 text-[11px] text-sky-100">
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Chính sách giao hàng
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Chính sách thanh toán
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Hướng dẫn */}
            <div className="lg:col-span-2 space-y-2">
              <h3 className="font-extrabold text-white">Hướng dẫn</h3>
              <ul className="space-y-1.5 text-[11px] text-sky-100">
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Hướng dẫn mua hàng
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Hướng dẫn thanh toán
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Khách hàng thân thiết
                  </a>
                </li>
                <li>
                  <a href="#footer-b2b" className="hover:text-white">
                    Khách hàng ưu tiên
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-sky-200">
            © Thiết kế và lập trình bởi {data.business.name}
          </div>
        </div>

        <a
          href="#top"
          className="fixed bottom-5 right-5 w-8 h-8 rounded bg-[#003d7a] border border-white/25 text-white shadow flex items-center justify-center hover:bg-amber-400 hover:text-[#0054a6] z-30"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* PRODUCT QUICK VIEW & B2B ORDER MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-bold uppercase bg-sky-100 text-[#0054a6] px-2.5 py-0.5 rounded">
                Mã SP: {selectedProduct.sku}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-44 h-44 object-contain mx-auto"
            />
            <h3 className="text-sm sm:text-base font-extrabold text-[#111827]">
              {selectedProduct.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-[#0054a6]">
                {selectedProduct.price}
              </span>
              {selectedProduct.oldPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {selectedProduct.oldPrice}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">
              Hàng chính hãng có sẵn tại kho {data.business.name}. Hỗ trợ xuất
              hóa đơn GTGT và chiết khấu sỉ cho đơn hàng văn phòng phẩm công ty.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setCartCount((c) => c + 1);
                  setSelectedProduct(null);
                }}
                className="flex-1 bg-[#0054a6] hover:bg-[#003d7a] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Thêm vào giỏ hàng</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
