"use client";

import React, { useState } from "react";
import {
  Search,
  Menu,
  ChevronRight,
  Wrench,
  Settings,
  Droplets,
  Home,
  Truck,
  Hammer,
  Wind,
  Gauge,
  Disc,
  Zap,
  Cpu,
  BatteryCharging,
  ThumbsUp,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct15DefaultData,
  type B2B15Data,
  type B2B15ProductItem
} from "@/template-sources/b2b_product_15/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: B2B15Data = adaptClonedTemplateData(
    b2bProduct15DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<B2B15ProductItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<B2B15ProductItem | null>(
    null
  );
  const [cartToast, setCartToast] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";
  const primaryEmail = data.business.email?.[0] || "demonhunter@gmail.com";

  const handleAddToCart = (product: B2B15ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCartItems((prev) => [...prev, product]);
    setCartToast(`Đã thêm "${product.title}" vào giỏ báo giá!`);
    setTimeout(() => setCartToast(null), 3500);
  };

  const renderCategoryIcon = (idx: number) => {
    const icons = [
      <Settings key={0} className="w-3.5 h-3.5 text-slate-600" />,
      <Wrench key={1} className="w-3.5 h-3.5 text-slate-600" />,
      <Droplets key={2} className="w-3.5 h-3.5 text-slate-600" />,
      <Home key={3} className="w-3.5 h-3.5 text-slate-600" />,
      <Truck key={4} className="w-3.5 h-3.5 text-slate-600" />,
      <Hammer key={5} className="w-3.5 h-3.5 text-slate-600" />,
      <Wind key={6} className="w-3.5 h-3.5 text-slate-600" />,
      <Gauge key={7} className="w-3.5 h-3.5 text-slate-600" />,
      <Disc key={8} className="w-3.5 h-3.5 text-slate-600" />,
      <Zap key={9} className="w-3.5 h-3.5 text-slate-600" />,
      <Cpu key={10} className="w-3.5 h-3.5 text-slate-600" />,
      <Wrench key={11} className="w-3.5 h-3.5 text-slate-600" />,
      <BatteryCharging key={12} className="w-3.5 h-3.5 text-slate-600" />
    ];
    return icons[idx % icons.length];
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f5f5f5] text-[#222222] font-sans selection:bg-[#d9251d] selection:text-white"
    >
      {/* 1. TOP UTILITY BAR + WHITE HEADER + RED CATEGORY BAR */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40 shadow-sm">
        {/* Top Utility Strip */}
        <div className="bg-[#f8f8f8] border-b border-stone-200 text-[11px] text-stone-600">
          <div className="max-w-6xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span>
                Hà Nội: <strong>{primaryPhone}</strong> - Tp.Hồ Chí Minh:{" "}
                <strong>{primaryPhone}</strong>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-stone-500">
              <a
                href="#footer-info"
                className="flex items-center gap-1 hover:text-[#d9251d]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-stone-600" />
                <span>Chính sách bán hàng</span>
              </a>
              <a href="#top" className="hover:text-[#d9251d]">
                Trang chủ
              </a>
              <a href="#footer-info" className="hover:text-[#d9251d]">
                Giới thiệu
              </a>
              <a href="#cat-section-1" className="hover:text-[#d9251d]">
                Cửa hàng
              </a>
              <a href="#hero-news" className="hover:text-[#d9251d]">
                Tin tức
              </a>
              <a href="#footer-info" className="hover:text-[#d9251d]">
                Liên hệ
              </a>
            </div>
          </div>
        </div>

        {/* Middle White Header: Red Logo + Search Bar + Login/Cart */}
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <a
            href="#top"
            className="bg-[#d9251d] text-white font-black text-lg sm:text-xl tracking-wider uppercase px-4 py-1.5 shadow-sm"
          >
            {data.business.name}
          </a>

          {/* Center Search Input + Blue Search Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              document
                .getElementById("cat-section-1")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-1 max-w-lg flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm máy nén khí, máy khoan, máy rửa xe..."
              className="w-full border border-stone-300 px-3 py-1.5 text-xs focus:outline-none focus:border-[#2196f3]"
            />
            <button
              type="submit"
              className="bg-[#2196f3] hover:bg-[#1976d2] text-white text-xs font-bold px-4 py-1.5 flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Tìm kiếm</span>
            </button>
          </form>

          {/* Right Login & Cart */}
          <div className="flex items-center gap-4 text-xs font-bold text-stone-600">
            <a href="#footer-info" className="hover:text-[#d9251d] uppercase">
              ĐĂNG NHẬP
            </a>
            <button
              type="button"
              onClick={() => {
                if (cartItems.length > 0) {
                  setSelectedProduct(cartItems[cartItems.length - 1]);
                } else {
                  setSelectedProduct(data.categorySections[0].products[0]);
                }
              }}
              className="flex items-center gap-2 hover:text-[#d9251d]"
            >
              <span className="border-2 border-[#d9251d] text-[#d9251d] px-1.5 py-0.5 text-[11px] font-extrabold">
                {cartItems.length}
              </span>
              <span>
                GIỎ HÀNG / {cartItems.length > 0 ? `${cartItems.length} SP` : "0 ₫"}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Red DANH MỤC SẢN PHẨM Header + Colorful Promo Tag Ticker */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center border-t border-stone-200">
            <div className="lg:col-span-3 bg-[#d9251d] text-white px-4 py-2.5 flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wide">
              <Menu className="w-4 h-4" />
              <span>DANH MỤC SẢN PHẨM</span>
            </div>

            <div className="lg:col-span-9 bg-white px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="flex items-center gap-1 shrink-0 font-black text-[10px] text-white">
                  <span className="bg-[#d9251d] px-1.5 py-0.5 -rotate-3">GIÁ</span>
                  <span className="bg-[#68b828] px-1.5 py-0.5 rotate-3">RẺ</span>
                  <span className="bg-[#f5a623] px-1.5 py-0.5 -rotate-2">
                    HÀNG
                  </span>
                  <span className="bg-[#ff7043] px-1.5 py-0.5 rotate-2">
                    NGÀY
                  </span>
                </div>
                <span className="font-bold text-stone-500 shrink-0">
                  KHUYẾN MÃI:
                </span>
                <span className="text-[#2196f3] truncate max-w-md">
                  {data.promoTicker}
                </span>
              </div>

              <button
                type="button"
                className="bg-[#1877f2] text-white text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1 shrink-0"
              >
                <ThumbsUp className="w-3 h-3" />
                <span>Thích 8,3K</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {cartToast && (
        <div className="fixed bottom-5 left-5 z-50 bg-emerald-700 text-white text-xs font-bold px-4 py-3 rounded shadow-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{cartToast}</span>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-4 space-y-8">
        {/* 2. HERO MEGA-MENU SIDEBAR LEFT (3 COLS) + PROMO BANNER & 3 NEWS TEASERS RIGHT (9 COLS) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left 13-Item Industrial Category Menu */}
          <div className="lg:col-span-3 bg-white border border-stone-200 divide-y divide-stone-100">
            {data.sidebarCategories.map((cat, idx) => (
              <a
                key={idx}
                href={`#cat-section-${(idx % 4) + 1}`}
                className="px-3.5 py-2 flex items-center justify-between text-xs text-stone-700 hover:bg-stone-50 hover:text-[#d9251d] transition-colors"
              >
                <span className="flex items-center gap-2.5 truncate">
                  {renderCategoryIcon(idx)}
                  <span className="truncate">{cat}</span>
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              </a>
            ))}
          </div>

          {/* Right Promo Banner + 3 News Teasers */}
          <div className="lg:col-span-9 flex flex-col justify-between gap-4">
            {/* Top Pink/Coral Promotional Banner matching screenshot */}
            <div className="relative flex-1 min-h-[300px] overflow-hidden bg-gradient-to-r from-[#f8bbd0] via-[#fce4ec] to-[#f48fb1] border border-pink-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-md z-10">
                <div className="inline-flex items-center gap-2 bg-white/90 text-[#ad1457] text-xs font-black px-3 py-1 rounded-full shadow-sm">
                  <span>08/03 - 08/04</span>
                  <span>•</span>
                  <span>Ưu Đãi Tháng 3</span>
                </div>
                <h1 className="font-serif italic text-2xl sm:text-3xl font-bold text-[#880e4f] leading-snug">
                  Sống khỏe để Yêu thương nhiều hơn!
                </h1>
                <p className="text-xs sm:text-sm font-black uppercase text-[#4a148c] leading-snug">
                  NHẬN NGAY QUÀ TẶNG CAO CẤP TỪ HÀN QUỐC KHI MUA MÁY LỌC NƯỚC, MÁY
                  LỌC KHÔNG KHÍ & THIẾT BỊ DÂN DỤNG
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-56 h-52 object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
            </div>

            {/* Bottom 3 Horizontal News Teasers (100% Vietnamese) */}
            <div
              id="hero-news"
              className="bg-white border border-stone-200 p-3 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {data.heroNewsTeasers.map((news) => (
                <a
                  key={news.id}
                  href="#footer-info"
                  className="flex items-start gap-3 group"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-16 h-12 object-cover shrink-0 border border-stone-200"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-bold text-[#2196f3] group-hover:text-[#d9251d] line-clamp-2 leading-snug">
                      {news.title}
                    </h3>
                    <span className="text-[10px] text-stone-400 block mt-0.5">
                      {news.date}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 3 TO 6: 4 SIGNATURE INDUSTRIAL CATEGORY SECTIONS */}
        {data.categorySections.map((sec, secIdx) => (
          <section
            key={sec.id}
            id={sec.id}
            className="bg-white border border-stone-200 shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Sidebar (3 Cols): Colored Header + Sublinks + 4 Brand Logos */}
              <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-stone-200 flex flex-col justify-between bg-[#fafafa]">
                <div>
                  {/* Colored Header Bar */}
                  <div
                    className="px-4 py-3 text-white font-bold text-xs sm:text-sm flex items-center gap-2"
                    style={{ backgroundColor: sec.headerColor }}
                  >
                    <Settings className="w-4 h-4 shrink-0" />
                    <h2 className="truncate">{sec.headerTitle}</h2>
                  </div>

                  {/* Subcategory Links */}
                  <ul className="p-4 space-y-2 text-xs text-stone-600">
                    {sec.subLinks.map((sub, i) => (
                      <li key={i}>
                        <a
                          href={`#${sec.id}`}
                          className="hover:text-[#d9251d] transition-colors block"
                        >
                          {sub}
                        </a>
                      </li>
                    ))}
                    <li className="pt-1">
                      <a
                        href={`#${sec.id}`}
                        className="text-[#2196f3] hover:underline text-[11px] font-semibold inline-flex items-center gap-0.5"
                      >
                        <span>Xem thêm</span>
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 4 Partner Brand Logo Boxes */}
                <div className="p-3 space-y-2 border-t border-stone-200 bg-white">
                  {sec.brands.map((brand, bIdx) => (
                    <div
                      key={bIdx}
                      className="border border-stone-200 py-2.5 px-3 text-center font-black tracking-wider text-xs sm:text-sm flex items-center justify-center"
                    >
                      {bIdx === 0 && (
                        <span className="text-stone-800">GARMIN▲</span>
                      )}
                      {bIdx === 1 && (
                        <span className="text-[#0b3b60]">◪ Electrolux</span>
                      )}
                      {bIdx === 2 && (
                        <span className="text-[#1976d2]">LS Daewon</span>
                      )}
                      {bIdx === 3 && (
                        <span className="text-[#d9251d]">⊕ BOSCH</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Main Area (9 Cols): Wide Category Banner + 5 Product Cards */}
              <div className="lg:col-span-9 flex flex-col justify-between">
                {/* Wide Category Promo Banner */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-stone-900 flex items-center">
                  <img
                    src={sec.banner.image}
                    alt={sec.banner.topTitle}
                    className="absolute inset-0 w-full h-full object-cover opacity-65"
                  />
                  <div
                    className={`absolute inset-0 ${
                      secIdx === 0
                        ? "bg-gradient-to-r from-black/85 via-black/50 to-transparent"
                        : secIdx === 1
                        ? "bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent"
                        : secIdx === 2
                        ? "bg-gradient-to-r from-transparent via-white/80 to-white/95"
                        : "bg-gradient-to-r from-[#ffca28] via-[#ffca28]/90 to-transparent"
                    }`}
                  />

                  <div
                    className={`relative z-10 px-6 sm:px-10 w-full flex flex-col ${
                      secIdx === 2 ? "items-end text-right" : "items-start text-left"
                    }`}
                  >
                    <h3
                      className={`text-lg sm:text-2xl font-black uppercase tracking-tight ${
                        secIdx === 0
                          ? "text-[#ffd600]"
                          : secIdx === 1
                          ? "text-[#111827]"
                          : secIdx === 2
                          ? "text-[#0277bd]"
                          : "text-[#0d47a1]"
                      }`}
                    >
                      {sec.banner.topTitle}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-bold mt-0.5 ${
                        secIdx === 0 ? "text-white" : "text-stone-800"
                      }`}
                    >
                      {sec.banner.subTitle}
                    </p>
                    <div
                      className={`text-2xl sm:text-5xl font-black mt-1 leading-none ${
                        secIdx === 0
                          ? "text-[#ffd600]"
                          : secIdx === 1
                          ? "text-[#d9251d]"
                          : secIdx === 2
                          ? "text-[#d9251d] text-xl sm:text-3xl"
                          : "bg-[#d9251d] text-white text-base sm:text-xl px-4 py-1.5 mt-2"
                      }`}
                    >
                      {sec.banner.highlightText}
                    </div>
                    {sec.banner.ctaText && (
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(sec.products[0])}
                        className={`mt-3 text-white text-xs font-bold uppercase px-4 py-1.5 shadow ${
                          secIdx === 1 ? "bg-[#d9251d]" : "bg-[#0288d1]"
                        }`}
                      >
                        {sec.banner.ctaText}
                      </button>
                    )}
                  </div>
                </div>

                {/* 5-Column Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 border-t border-stone-200">
                  {sec.products.map((prd) => (
                    <div
                      key={prd.id}
                      onClick={() => setSelectedProduct(prd)}
                      className="group cursor-pointer p-3.5 flex flex-col justify-between text-center hover:bg-stone-50 transition-colors"
                    >
                      <div>
                        <div className="relative h-36 mb-3 flex items-center justify-center overflow-hidden bg-white">
                          <img
                            src={prd.image}
                            alt={prd.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          {prd.discountBadge && (
                            <span className="absolute top-1 left-1 w-9 h-9 rounded-full bg-[#2997d6] text-white text-[10px] font-extrabold flex items-center justify-center shadow">
                              {prd.discountBadge}
                            </span>
                          )}
                        </div>

                        <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400 block truncate">
                          {prd.categoryLabel}
                        </span>
                        <h4 className="text-[11px] font-medium text-stone-700 group-hover:text-[#d9251d] line-clamp-2 mt-1 leading-snug min-h-[32px]">
                          {prd.title}
                        </h4>
                      </div>

                      <div className="pt-2 space-y-2">
                        <div className="text-xs font-extrabold text-[#111827]">
                          {prd.oldPrice && (
                            <span className="text-[10px] text-stone-400 line-through font-normal mr-1">
                              {prd.oldPrice}
                            </span>
                          )}
                          <span>{prd.price}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => handleAddToCart(prd, e)}
                          className="border border-[#d9251d] text-[#d9251d] hover:bg-[#d9251d] hover:text-white text-[10px] font-bold uppercase px-3 py-1 transition-colors"
                        >
                          THÊM VÀO GIỎ
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* 7. BOTTOM CATEGORY QUICK-LINKS + MULTI-COLUMN INDUSTRIAL FOOTER */}
      <footer
        id="footer-info"
        className="bg-[#efefef] border-t border-stone-300 text-stone-600 text-xs mt-10"
      >
        {/* Top 13 Category Quick-Links Grid */}
        <div className="max-w-6xl mx-auto px-4 py-6 border-b border-stone-300">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-2.5 gap-x-4 text-[11px]">
            {data.sidebarCategories.map((cat, idx) => (
              <a
                key={idx}
                href={`#cat-section-${(idx % 4) + 1}`}
                className="flex items-center gap-1.5 hover:text-[#d9251d] truncate"
              >
                {renderCategoryIcon(idx)}
                <span className="truncate">{cat}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Middle 4 Columns: TRỢ GIÚP NHANH, QUẢN LÝ TÀI KHOẢN, VỀ MONA MEDIA, KẾT NỐI VỚI CHÚNG TÔI */}
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-stone-300">
          <div className="space-y-2.5">
            <h3 className="font-extrabold uppercase text-[#222222]">
              TRỢ GIÚP NHANH
            </h3>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Khiếu nại bồi thường
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Hướng dẫn thanh toán
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Hóa đơn GTGT điện tử
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-extrabold uppercase text-[#222222]">
              QUẢN LÝ TÀI KHOẢN
            </h3>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Tài khoản của tôi
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Thanh toán
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Giỏ hàng
                </a>
              </li>
              <li>
                <a href="#cat-section-1" className="hover:text-[#d9251d]">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#cat-section-1" className="hover:text-[#d9251d]">
                  Danh sách ưa thích
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-extrabold uppercase text-[#222222]">
              VỀ {data.business.name}
            </h3>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Giới thiệu về {data.business.name}
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Liên hệ quảng cáo
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Cơ hội việc làm
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Trở thành đối tác đại lý
                </a>
              </li>
              <li>
                <a href="#footer-info" className="hover:text-[#d9251d]">
                  Đường đến kho máy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-extrabold uppercase text-[#222222]">
              KẾT NỐI VỚI CHÚNG TÔI
            </h3>
            <div className="flex items-center gap-2">
              <a
                href="#top"
                className="w-7 h-7 rounded-full bg-[#3b5998] text-white font-bold flex items-center justify-center"
              >
                f
              </a>
              <a
                href="#top"
                className="w-7 h-7 rounded-full bg-[#26a6d1] text-white font-bold flex items-center justify-center"
              >
                ig
              </a>
              <a
                href="#top"
                className="w-7 h-7 rounded-full bg-[#d9251d] text-white font-bold flex items-center justify-center"
              >
                yt
              </a>
            </div>

            <p className="text-[11px] font-bold uppercase text-[#222222] pt-1">
              TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded">
                ▶ Google Play
              </span>
              <span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded">
                 App Store
              </span>
            </div>

            <p className="text-[11px] font-bold uppercase text-[#222222] pt-1">
              CHẤP NHẬN THANH TOÁN
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold">
              <span className="bg-white border border-stone-300 px-2 py-1 text-blue-800">
                VISA
              </span>
              <span className="bg-white border border-stone-300 px-2 py-1 text-red-600">
                MasterCard
              </span>
              <span className="bg-white border border-stone-300 px-2 py-1 text-sky-700">
                SmartLink
              </span>
              <span className="bg-white border border-stone-300 px-2 py-1 text-indigo-800">
                PayPal
              </span>
            </div>
          </div>
        </div>

        {/* Company Details & Ministry Certification Row */}
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 text-[11px]">
            <h4 className="text-xs font-extrabold uppercase text-[#222222]">
              CÔNG TY TNHH {data.business.name} - Tổng kho Thiết Bị Công Nghiệp
            </h4>
            <p>
              <strong>Địa chỉ:</strong> {data.business.address}
            </p>
            <p>
              <strong>Điện thoại:</strong> {primaryPhone}
            </p>
            <p>
              <strong>Email:</strong> {primaryEmail} /{" "}
              {data.business.email?.[1] || "mon@mona.media"}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#222222] block">
              Chứng nhận:
            </span>
            <div className="flex items-center gap-2.5">
              <span className="bg-[#0288d1] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
              </span>
              <span className="bg-[#d9251d] text-white text-[10px] font-bold px-3 py-1.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#e4e4e4] py-3 px-4 text-center text-[11px] text-stone-500">
          © Bản quyền thuộc về {data.business.name}. Thiết kế website chuẩn B2B.
        </div>
      </footer>

      {/* INDUSTRIAL PRODUCT TECHNICAL SPEC & ORDER MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-md w-full rounded shadow-2xl overflow-hidden border-t-4 border-[#d9251d]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 flex items-start justify-between border-b border-stone-200">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#2196f3]">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-[#111827] mt-0.5">
                  {selectedProduct.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-48 h-44 object-contain mx-auto"
              />
              <div className="flex items-center justify-between bg-stone-50 p-3 border border-stone-200">
                <span className="text-xs font-bold text-stone-600">
                  Giá niêm yết:
                </span>
                <span className="text-base font-black text-[#d9251d]">
                  {selectedProduct.price}
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Thông số kỹ thuật:</strong> {selectedProduct.specs}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#d9251d] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase py-2.5"
                >
                  Thêm Vào Giỏ Hàng
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="flex-1 bg-[#2196f3] hover:bg-[#1976d2] text-white text-xs font-bold uppercase py-2.5 text-center"
                >
                  Gọi Tư Vấn Kỹ Thuật
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
