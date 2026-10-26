"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  Store,
  Headphones,
  RefreshCw,
  ArrowDownLeft,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  salonToc6DefaultData,
  type SalonToc6Data,
  type StyleThreadItem
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<SalonToc6Data>(salonToc6DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNewTab, setActiveNewTab] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState<StyleThreadItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0313728397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  /* Product / Service Card matching ST009 */
  const renderCard = (item: StyleThreadItem) => (
    <div
      key={item.id}
      onClick={() => {
        setSelectedItem(item);
        setCartCount((c) => c + 1);
      }}
      className="group cursor-pointer flex flex-col"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4] mb-2.5">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Top-Left Red Rectangular Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
            {item.badges.map((badge, bIdx) => (
              <span
                key={bIdx}
                className="bg-[#c93b2b] text-white text-[9px] font-bold px-2 py-0.5 leading-tight shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="text-[11px] font-bold text-slate-800 group-hover:text-[#23408e] transition-colors line-clamp-1">
        {item.name}
      </h3>

      <div className="flex items-baseline gap-1.5 mt-1 text-[11px]">
        {item.oldPrice && (
          <span className="text-slate-400 line-through text-[10px]">{item.oldPrice}</span>
        )}
        <span className="font-extrabold text-[#23408e]">{item.price}</span>
      </div>

      <div className="flex items-center gap-0.5 text-amber-400 mt-1">
        {[...Array(item.rating || 5)].map((_, i) => (
          <Star key={i} className="w-2.5 h-2.5 fill-current" />
        ))}
        <span className="text-[9px] text-slate-400 ml-1">{item.reviews}</span>
      </div>
    </div>
  );

  const activeCategoryName = data.newProductTabs?.[activeNewTab] || "Bộ sưu tập";
  const displayedNewProducts =
    activeNewTab === 0
      ? data.newProducts
      : (data.newProducts || []).filter(
          (item) => item.category === activeCategoryName || activeNewTab > 0
        );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#23408e] selection:text-white">
      {/* Topbar — Royal Navy Blue (#23408e) */}
      <div className="bg-[#23408e] text-white text-[10px] sm:text-[11px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-8 flex items-center justify-between gap-4">
          <span className="hidden sm:inline">
            Hỗ trợ khách hàng: <strong>{primaryPhone}</strong>
          </span>
          <span className="font-semibold tracking-wide truncate mx-auto sm:mx-0">
            {data.topNotice}
          </span>
          <div className="hidden md:flex items-center gap-4">
            <a href="#footer" className="inline-flex items-center gap-1 hover:underline">
              <MapPin className="w-3 h-3" />
              <span>Địa chỉ cửa hàng</span>
            </a>
            <a href="#footer" className="inline-flex items-center gap-1 hover:underline">
              <Clock className="w-3 h-3" />
              <span>Theo dõi đơn hàng</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#" className="text-[#23408e] font-bold">
              Trang chủ
            </a>
            <a href="#danh-muc" className="hover:text-[#23408e]">
              Giới thiệu
            </a>
            <a
              href="#san-pham-moi"
              className="inline-flex items-center gap-1 hover:text-[#23408e]"
            >
              <span>Sản phẩm</span>
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="#footer" className="hover:text-[#23408e]">
              Liên hệ
            </a>
          </nav>

          {/* Center Brand Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#23408e] text-white font-serif font-extrabold text-sm flex items-center justify-center">
              F
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              {data.business.name.split(" ")[0] || "Fana"}
            </span>
          </a>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-slate-700">
            <button type="button" className="hover:text-[#23408e]" aria-label="Tìm kiếm">
              <Search className="w-4 h-4" />
            </button>
            <button type="button" className="hover:text-[#23408e]" aria-label="Tài khoản">
              <User className="w-4 h-4" />
            </button>
            <button type="button" className="hover:text-[#23408e]" aria-label="Yêu thích">
              <Heart className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative hover:text-[#23408e] cursor-pointer"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#23408e] text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section — Warm Sand Studio Backdrop (#e7ded4) */}
      <section className="relative bg-[#e7ded4] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            {/* Left Copy */}
            <div className="md:col-span-5 space-y-3">
              <p className="font-serif italic text-xl sm:text-2xl text-[#d96b52]">
                {data.hero.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.hero.subtitle}
              </p>
              <div className="pt-3">
                <a
                  href={data.hero.ctaLink || "#san-pham-moi"}
                  className="inline-block bg-[#23408e] hover:bg-[#192f6b] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 shadow-sm transition-colors"
                >
                  {data.hero.ctaText}
                </a>
              </div>
            </div>

            {/* Right Model Portrait + Rotating Stamp */}
            <div className="md:col-span-7 relative flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded overflow-hidden shadow-md">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Circular Stamp Top-Right */}
              <div className="hidden sm:flex absolute top-2 right-4 w-20 h-20 rounded-full border border-slate-400/50 bg-white/60 backdrop-blur-xs flex-col items-center justify-center text-center p-2">
                <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">
                  MUA NGAY •
                </span>
                <ArrowDownLeft className="w-4 h-4 text-[#c93b2b] my-0.5" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: ĐANG KHUYẾN MÃI (5-Column Row) */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 mb-8">
            ĐANG KHUYẾN MÃI
          </h2>

          <div className="relative">
            <button
              type="button"
              className="hidden md:flex absolute -left-4 top-1/3 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-600"
              aria-label="Trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {(data.flashSaleItems || []).map((item) => renderCard(item))}
            </div>
            <button
              type="button"
              className="hidden md:flex absolute -right-4 top-1/3 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-600"
              aria-label="Tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: SẢN PHẨM MỚI NHẤT (Interactive Tabs + 5x2 Grid) */}
      <section id="san-pham-moi" className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 mb-4">
            SẢN PHẨM MỚI NHẤT
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-8 text-xs font-semibold">
            {(data.newProductTabs || []).map((tab, idx) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveNewTab(idx)}
                className={`pb-1 border-b-2 transition-colors cursor-pointer ${
                  activeNewTab === idx
                    ? "border-[#23408e] text-[#23408e] font-bold"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-7">
            {(displayedNewProducts || []).slice(0, 10).map((item) => renderCard(item))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#ban-chay"
              className="inline-block bg-[#23408e] hover:bg-[#192f6b] text-white text-[11px] font-extrabold uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              XEM TẤT CẢ
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: SẢN PHẨM BÁN CHẠY (5x2 Grid on Soft Gray #f8f9fa) */}
      <section id="ban-chay" className="py-12 md:py-14 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 mb-8">
            SẢN PHẨM BÁN CHẠY
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-7">
            {(data.bestSellerItems || []).map((item) => renderCard(item))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#danh-muc"
              className="inline-block bg-[#23408e] hover:bg-[#192f6b] text-white text-[11px] font-extrabold uppercase tracking-wider px-6 py-2.5 transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Wide Sky-Blue Summer Hair & Style Promo Banner */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-[#d6e4f0] via-[#e5eff7] to-[#cfe0ee] rounded-xs overflow-hidden p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-xs">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-11 h-11 rounded-full bg-[#e85d4a] text-white text-[10px] font-extrabold flex flex-col items-center justify-center leading-none shadow-xs">
                <span>UP TO</span>
                <span className="text-xs">-50%</span>
              </span>
              <span className="text-xs font-bold text-[#23408e] uppercase tracking-wider">
                Tạo Mẫu Tóc &amp; Thời Trang Hè
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1d3578] max-w-lg leading-snug">
              Kiểu tóc &amp; Trang phục nữ duyên dáng tự tin tỏa sáng cùng nắng hè!
            </h3>
            <a
              href="#phai-nu"
              className="mt-4 bg-white hover:bg-[#23408e] text-slate-800 hover:text-white text-[10px] font-extrabold uppercase tracking-wider px-5 py-2 shadow-2xs transition-colors"
            >
              KHÁM PHÁ NGAY
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: DANH MỤC SẢN PHẨM (4 Portrait Cards with White Label Boxes) */}
      <section id="danh-muc" className="py-12 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900">
              DANH MỤC SẢN PHẨM
            </h2>
            <p className="text-[11px] text-slate-500 mt-1">
              Thời trang &amp; kiểu tóc phong cách hãy là chính mình
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.categoryCards || []).map((cat) => (
              <a
                key={cat.id}
                href="#phai-nu"
                className="relative aspect-[3/4] overflow-hidden group block shadow-xs"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-3 bottom-3 bg-white/95 py-2.5 px-3 text-center shadow-xs">
                  <span className="text-xs font-extrabold text-slate-800">
                    {cat.name}{" "}
                    <sup className="text-[9px] text-slate-400 font-semibold">{cat.count}</sup>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: BỘ THỜI TRANG & TẠO KIỂU PHÁI NỮ (Left Tall Banner + Right 2x2 Grid + 2 Promo Banners) */}
      <section id="phai-nu" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900">
              BỘ THỜI TRANG PHÁI NỮ
            </h2>
            <p className="text-[11px] text-slate-500 mt-1">
              Thời trang phong cách hãy là chính mình
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Tall Featured Poster */}
            <div className="lg:col-span-6 relative min-h-[420px] bg-[#eceef0] overflow-hidden flex items-start p-8">
              <img
                src={data.womenShowcase.bannerImage}
                alt={data.womenShowcase.bannerTitle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 bg-white/85 backdrop-blur-xs p-5 max-w-xs">
                <span className="text-[11px] font-bold text-[#c93b2b]">
                  {data.womenShowcase.bannerEyebrow}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight mt-1">
                  {data.womenShowcase.bannerTitle}
                </h3>
                <a
                  href="#nam-gioi"
                  className="inline-block mt-4 bg-[#23408e] text-white text-[10px] font-extrabold uppercase px-5 py-2"
                >
                  MUA NGAY
                </a>
              </div>
            </div>

            {/* Right 2x2 Product Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {(data.womenShowcase.items || []).map((item) => renderCard(item))}
            </div>
          </div>

          {/* 2 Split Promo Banners Below */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-6">
            <div className="md:col-span-8 relative bg-[#e6ebef] p-8 flex items-center overflow-hidden min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Phiên bản giới hạn"
                className="absolute right-0 inset-y-0 w-1/2 h-full object-cover"
              />
              <div className="relative z-10 max-w-xs space-y-2 bg-white/85 p-4">
                <span className="text-[10px] font-bold text-[#c93b2b]">
                  Bừng Sáng Cùng Mùa Hè
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 leading-snug">
                  Phiên bản giới hạn, độc đáo cho riêng bạn
                </h4>
                <p className="text-[11px] text-slate-600">
                  Kiểu tóc &amp; trang phục hoàn hảo cho mùa hè rực rỡ.
                </p>
                <a
                  href="#nam-gioi"
                  className="inline-block bg-[#23408e] text-white text-[10px] font-extrabold uppercase px-4 py-2 mt-1"
                >
                  KHÁM PHÁ NGAY
                </a>
              </div>
            </div>

            <div className="md:col-span-4 relative bg-[#e8dfd5] p-6 flex flex-col items-center justify-end text-center overflow-hidden min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
                alt="Lễ hội săn sale"
                className="absolute inset-0 w-full h-full object-cover opacity-55"
              />
              <div className="relative z-10 bg-white/90 p-4 w-full">
                <span className="inline-block bg-[#c93b2b] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                  35% SALE OFF
                </span>
                <h4 className="text-base font-extrabold text-slate-900">
                  Lễ Hội Ưu Đãi Tạo Kiểu Nam
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: DÀNH CHO NAM GIỚI (Left 2x2 Grid + Right Tall Banner) */}
      <section id="nam-gioi" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900">
              DÀNH CHO NAM GIỚI
            </h2>
            <p className="text-[11px] text-slate-500 mt-1">
              Các kiểu dáng sang trọng, lịch lãm dành cho phái mạnh
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 2x2 Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {(data.menShowcase.items || []).map((item) => renderCard(item))}
            </div>

            {/* Right Tall Featured Banner */}
            <div className="lg:col-span-6 relative min-h-[420px] bg-[#eceef0] overflow-hidden flex items-start p-8">
              <img
                src={data.menShowcase.bannerImage}
                alt={data.menShowcase.bannerTitle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 bg-white/90 backdrop-blur-xs p-5 max-w-xs">
                <span className="text-[11px] font-bold text-[#c93b2b]">
                  {data.menShowcase.bannerEyebrow}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug mt-1">
                  {data.menShowcase.bannerTitle}
                </h3>
                <a
                  href="#footer"
                  className="inline-block mt-4 bg-[#23408e] text-white text-[10px] font-extrabold uppercase px-5 py-2"
                >
                  MUA NGAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: PHỐI ĐỒ & TẠO KIỂU CHUẨN XU HƯỚNG 2026 (4 Blog Columns) */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 mb-8">
            PHỐI ĐỒ &amp; TẠO KIỂU CHUẨN XU HƯỚNG 2026
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.news || []).map((post) => (
              <article key={post.id} className="bg-white p-3 shadow-2xs group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-3 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[9px] text-slate-400 block mb-1">🕒 {post.date}</span>
                <h3 className="text-[11px] font-extrabold text-slate-800 group-hover:text-[#23408e] line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[10px] text-slate-500 mt-1.5 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Coral-Pink Banner + Section 10: THEO DÕI MẠNG XÃ HỘI */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
          <div className="bg-gradient-to-r from-[#d96b6b] via-[#e2817f] to-[#d96b6b] text-white py-10 px-6 text-center rounded-xs shadow-xs">
            <span className="text-[11px] font-semibold text-amber-200">
              Bừng Sáng Cùng Mùa Hè
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
              Phiên bản giới hạn, độc đáo cho riêng bạn
            </h3>
            <p className="text-xs text-white/90 mt-1">
              Kiểu tóc &amp; trang phục hoàn hảo cho mùa hè rực rỡ, nổi bật dưới ánh mặt trời!
            </p>
            <a
              href="#san-pham-moi"
              className="inline-block mt-4 bg-white text-slate-900 text-[10px] font-extrabold uppercase px-5 py-2"
            >
              XEM BỘ SƯU TẬP
            </a>
          </div>
        </div>

        <h2 className="text-center text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-900 mb-6">
          THEO DÕI MẠNG XÃ HỘI
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {(data.socialGallery || []).map((imgUrl, idx) => (
            <div key={idx} className="aspect-square overflow-hidden">
              <img
                src={imgUrl}
                alt={`Social ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer — Newsletter + 4 Service Badges + 4 Columns */}
      <footer id="footer" className="bg-[#f8f9fa] border-t border-slate-200 text-slate-600">
        {/* Newsletter Box */}
        <div className="max-w-xl mx-auto px-4 py-12 text-center">
          <p className="font-serif italic text-lg text-[#c93b2b]">Newsletter</p>
          <h3 className="text-base sm:text-lg font-bold text-slate-800 mt-1">
            Đăng ký và nhận giảm giá tới <span className="text-[#c93b2b] font-extrabold">20%</span>{" "}
            cho đơn hàng đầu tiên
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setNewsletterDone(true);
              setNewsletterEmail("");
            }}
            className="flex items-stretch gap-2 mt-4 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Nhập email..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 bg-white border border-slate-200 px-3.5 py-2 text-xs focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#23408e] text-white text-xs font-extrabold uppercase px-5 py-2 cursor-pointer"
            >
              ĐĂNG KÝ
            </button>
          </form>
          {newsletterDone && (
            <p className="text-xs text-emerald-600 font-semibold mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đã đăng ký nhận mã giảm 20%!</span>
            </p>
          )}
        </div>

        {/* 4 Service Trust Boxes */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Truck, title: "VẬN CHUYỂN TOÀN QUỐC", sub: "Đồng giá 30k" },
              { icon: Store, title: "HỆ THỐNG CỬA HÀNG", sub: "100 cửa hàng trên toàn hệ thống" },
              {
                icon: Headphones,
                title: `HOTLINE: ${primaryPhone}`,
                sub: "Hỗ trợ khách hàng tận tâm"
              },
              { icon: RefreshCw, title: "7 NGÀY ĐỔI TRẢ SẢN PHẨM", sub: "Nếu sản phẩm lỗi" }
            ].map((b, i) => {
              const IconComp = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200/80 p-3.5 flex items-center gap-3"
                >
                  <IconComp className="w-5 h-5 text-[#23408e] shrink-0" />
                  <div className="text-[10px]">
                    <strong className="block font-extrabold text-slate-800">{b.title}</strong>
                    <span className="text-slate-500">{b.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom 4 Columns */}
        <div className="bg-white border-t border-slate-100 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
            <div>
              <h4 className="font-extrabold uppercase text-slate-900 mb-3 text-[11px]">
                DANH MỤC
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Giới thiệu</li>
                <li>Sản phẩm</li>
                <li>Tin tức</li>
                <li>Liên hệ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold uppercase text-slate-900 mb-3 text-[11px]">
                LIÊN KẾT
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Chính sách đổi trả</li>
                <li>Chính sách giao hàng</li>
                <li>Chính sách bảo mật</li>
                <li>Điều khoản dịch vụ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold uppercase text-slate-900 mb-3 text-[11px]">
                LIÊN HỆ
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-500">
                <li>Tìm địa chỉ của chúng tôi</li>
                <li>{primaryPhone}</li>
                <li>{primaryEmail}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold uppercase text-slate-900 mb-3 text-[11px]">
                ĐỊA CHỈ
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{data.business.address}</p>
              <p className="text-[11px] text-slate-500 mt-1">
                <strong>Giờ hoạt động:</strong> {data.business.workingHours || "09:00 - 20:00"}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Quick Booking / Product Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-56 object-cover mb-4"
            />
            <span className="text-[10px] font-bold uppercase text-[#23408e]">
              {selectedItem.category}
            </span>
            <h3 className="text-base font-extrabold text-slate-900 mt-1">{selectedItem.name}</h3>
            <p className="text-sm font-black text-[#c93b2b] mt-1">{selectedItem.price}</p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="bg-[#23408e] text-white text-xs font-bold uppercase px-5 py-2 cursor-pointer"
              >
                Đã thêm vào giỏ ({cartCount})
              </button>
              <a
                href={`tel:${primaryPhone}`}
                className="border border-slate-300 text-slate-700 text-xs font-bold uppercase px-4 py-2"
              >
                Gọi đặt lịch
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
