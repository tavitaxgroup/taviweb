"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  User,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  HelpCircle,
  Mail,
  Phone,
  ArrowRight,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien7DefaultData,
  type ThamMyVien7Data,
  type ThamMyVien7Product
} from "@/template-sources/tham_my_vien_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function FlawlessProductCard({
  item,
  onSelect
}: {
  item: ThamMyVien7Product;
  onSelect: (p: ThamMyVien7Product) => void;
}) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[4/5] bg-[#f8f8f8] rounded-xs overflow-hidden mb-2.5 flex items-center justify-center">
          {item.saleBadge && (
            <span className="absolute top-2 left-2 z-10 bg-[#e67e22] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-xs">
              GIẢM GIÁ!
            </span>
          )}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {item.rating && (
          <div className="flex items-center gap-0.5 text-neutral-800 mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-2.5 h-2.5 fill-neutral-800" />
            ))}
          </div>
        )}

        <h3 className="text-[11px] font-medium text-neutral-600 group-hover:text-[#2d6846] transition line-clamp-2">
          {item.name}
        </h3>
      </div>

      <div className="flex items-center gap-1.5 mt-1 text-xs">
        {item.oldPrice && (
          <span className="text-[10px] text-neutral-400 line-through">
            {item.oldPrice}
          </span>
        )}
        <span className="font-extrabold text-neutral-900">{item.price}</span>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: ThamMyVien7Data = adaptClonedTemplateData(
    thamMyVien7DefaultData,
    incomingData
  );

  const navCategories =
    data.navCategories || thamMyVien7DefaultData.navCategories;
  const featuredCard =
    data.bestSellerFeaturedCard ||
    thamMyVien7DefaultData.bestSellerFeaturedCard;
  const bestSellers = data.bestSellers || thamMyVien7DefaultData.bestSellers;
  const flashOffers = data.flashOffers || thamMyVien7DefaultData.flashOffers;
  const circleCategories =
    data.circleCategories || thamMyVien7DefaultData.circleCategories;
  const qaBanner = data.qaBanner || thamMyVien7DefaultData.qaBanner;
  const recommended =
    data.recommendedProducts || thamMyVien7DefaultData.recommendedProducts;
  const topTags = data.topSearchTags || thamMyVien7DefaultData.topSearchTags;
  const posters = data.campaignPosters || thamMyVien7DefaultData.campaignPosters;
  const newsList = data.news || thamMyVien7DefaultData.news || [];
  const reviews = data.testimonials || thamMyVien7DefaultData.testimonials || [];
  const trustSeals = data.trustSeals || thamMyVien7DefaultData.trustSeals;

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [qaModalOpen, setQaModalOpen] = useState(false);
  const [qaSubmitted, setQaSubmitted] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [activeTag, setActiveTag] = useState(topTags[0] || "Chăm sóc cơ thể");
  const [searchText, setSearchText] = useState("");

  const primaryPhone = data.business.phone?.[0] || "1900 636 648";
  const secondaryPhone = data.business.phone?.[1] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handleSelectProduct = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#2d6846] selection:text-white">
      {/* =====================================================================
          1. 2-TIER CLEAN WHITE HEADER
         ===================================================================== */}
      <header className="bg-white sticky top-0 z-40 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 pt-3.5 pb-2.5">
          {/* Top Tier */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <a href="#trang-chu" className="text-center">
              <span className="block font-serif text-xl sm:text-2xl tracking-[0.14em] uppercase text-neutral-900 leading-none">
                {data.business.name}
              </span>
              <span className="block text-[7px] tracking-[0.28em] uppercase text-[#2d6846] mt-1 font-semibold">
                ORGANIC COSMETICS
              </span>
            </a>

            {/* Rounded Gray Search Input */}
            <div className="flex-1 max-w-md flex items-center bg-neutral-100 rounded-full px-4 py-2">
              <Search className="w-3.5 h-3.5 text-neutral-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Tìm kiếm..."
                className="bg-transparent text-xs text-neutral-700 w-full focus:outline-none"
              />
            </div>

            {/* Right Utility Links */}
            <div className="flex items-center gap-5 text-[11px] text-neutral-600">
              <a
                href="#lien-he"
                className="hidden md:flex items-center gap-1.5 hover:text-[#2d6846]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#2d6846]" />
                <span>Hệ thống cửa hàng</span>
              </a>
              <button
                type="button"
                onClick={() => setQaModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 hover:text-[#2d6846] cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-[#2d6846]" />
                <span>Quản lý tài khoản</span>
              </button>

              <button
                type="button"
                onClick={() => setWishlistCount((w) => w + 1)}
                className="relative text-neutral-700 hover:text-[#2d6846] cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-[#e67e22] text-white text-[8px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCartCount((c) => c + 1)}
                className="relative text-neutral-700 hover:text-[#2d6846] cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-[#e67e22] text-white text-[8px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Category Nav Row */}
          <div className="flex items-center justify-between pt-3 mt-2 border-t border-neutral-100 overflow-x-auto">
            <nav className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-wider text-neutral-600 whitespace-nowrap">
              {navCategories.map((cat, idx) => (
                <a
                  key={idx}
                  href="#ban-chay"
                  className="hover:text-[#2d6846] transition"
                >
                  {cat}
                </a>
              ))}
            </nav>

            <a
              href="#uu-dai"
              className="hidden lg:inline-block bg-[#ef5350] text-white text-[9px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-xs shadow-2xs shrink-0"
            >
              MO&apos;S GIFT SHOP
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. CHERRY BLOSSOM PINK HERO BANNER
         ===================================================================== */}
      <section
        id="trang-chu"
        className="relative bg-gradient-to-r from-[#f8c1ce] via-[#f6a7ba] to-[#f496ad] overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center px-4 py-12"
      >
        {/* Decorative Blossom Circles */}
        <div className="absolute -top-12 left-1/3 w-64 h-64 rounded-full bg-white/15 blur-2xl pointer-events-none" />
        <div className="absolute bottom-4 right-10 w-72 h-72 rounded-full bg-rose-200/30 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-800">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-800/80 max-w-md">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href="#ban-chay"
                className="inline-block bg-[#222222] hover:bg-[#2d6846] text-white text-xs font-semibold px-7 py-2.5 rounded-full shadow-md transition"
              >
                {data.hero.ctaText || "Mua ngay"}
              </a>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-4 border-white/60 bg-white/40 backdrop-blur-xs">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. BÁN CHẠY (1 Featured Model Card + 4 Product Cards)
         ===================================================================== */}
      <section id="ban-chay" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-900">
            BÁN CHẠY
          </h2>
          <a
            href="#uu-dai"
            className="text-[11px] text-neutral-600 underline hover:text-[#2d6846]"
          >
            Mua ngay
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Model Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-xs overflow-hidden mb-2.5 bg-[#f9b8c6]">
              <img
                src={featuredCard.image}
                alt={featuredCard.caption}
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-neutral-800">
                {featuredCard.caption}
              </span>
              <a
                href="#uu-dai"
                className="text-[11px] text-neutral-600 underline hover:text-[#2d6846]"
              >
                {featuredCard.ctaText}
              </a>
            </div>
          </div>

          {/* Right 4 Product Cards (8 cols) */}
          <div className="lg:col-span-8 relative grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bestSellers.map((item) => (
              <FlawlessProductCard
                key={item.id}
                item={item}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. ƯU ĐÃI HẤP DẪN (Soft Sage Green #f2f7f4 Section)
         ===================================================================== */}
      <section id="uu-dai" className="bg-[#f2f7f4] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Text Info (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-sm font-extrabold uppercase text-[#2d6846]">
              {flashOffers.heading}
            </h2>
            <p className="text-xs text-neutral-600">
              <strong className="text-[#2d6846]">
                {flashOffers.highlightText}
              </strong>{" "}
              {flashOffers.subText}
            </p>
            <div className="pt-2">
              <a
                href="#goi-y"
                className="text-[11px] font-semibold text-neutral-700 underline hover:text-[#2d6846]"
              >
                {flashOffers.ctaText}
              </a>
            </div>
          </div>

          {/* Right 4 Flash Sale Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {flashOffers.items.map((item) => (
              <FlawlessProductCard
                key={item.id}
                item={item}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. DANH MỤC (8 Circular Thumbnails) + ĐẶT CÂU HỎI BANNER
         ===================================================================== */}
      <section id="hoi-dap" className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase text-neutral-900">
              DANH MỤC
            </h2>
            <p className="text-[11px] text-neutral-500 mt-1">
              Bộ sản phẩm chính hãng
            </p>
          </div>

          <div className="lg:col-span-10 grid grid-cols-4 sm:grid-cols-8 gap-4">
            {circleCategories.map((cat) => (
              <a
                key={cat.id}
                href="#goi-y"
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-sky-50 border-2 border-neutral-100 group-hover:border-[#2d6846] transition mb-2">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-medium text-neutral-600 group-hover:text-[#2d6846]">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Q&A Sage Strip */}
        <div className="bg-[#f4f6f4] rounded-md px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#2d6846]">
              {qaBanner.heading}
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">{qaBanner.subText}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setQaSubmitted(false);
              setQaModalOpen(true);
            }}
            className="bg-[#2d6846] hover:bg-[#225236] text-white text-xs font-semibold px-6 py-2 rounded-full transition cursor-pointer"
          >
            {qaBanner.ctaText}
          </button>
        </div>
      </section>

      {/* =====================================================================
          6. GỢI Ý CHO BẠN (6-Product Grid)
         ===================================================================== */}
      <section id="goi-y" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase text-neutral-900">
            GỢI Ý CHO BẠN
          </h2>
          <a
            href="#top-tim-kiem"
            className="text-[11px] text-neutral-600 underline hover:text-[#2d6846]"
          >
            Mua ngay
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {recommended.map((item) => (
            <FlawlessProductCard
              key={item.id}
              item={item}
              onSelect={handleSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. TOP TÌM KIẾM (Filter Pills + 5 Square Campaign Posters)
         ===================================================================== */}
      <section id="top-tim-kiem" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase text-neutral-900">
            TOP TÌM KIẾM
          </h2>
          <a
            href="#tin-tuc"
            className="text-[11px] text-neutral-600 underline hover:text-[#2d6846]"
          >
            Xem thêm
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-[11px] text-neutral-500 mr-3">
            Thương hiệu uy tín toàn cầu
          </span>
          {topTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] transition cursor-pointer ${
                activeTag === tag
                  ? "bg-[#2d6846] text-white font-semibold"
                  : "bg-[#f6f1ea] text-neutral-600 hover:bg-[#eaddcf]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 5 Square Campaign Posters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {posters.map((ps) => (
            <div
              key={ps.id}
              className="relative aspect-square rounded-xs overflow-hidden group"
            >
              <img
                src={ps.image}
                alt={ps.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 p-4 flex flex-col justify-between text-white">
                <span className="text-[9px] font-bold tracking-widest uppercase text-white/85">
                  {ps.sub}
                </span>
                <h3 className="text-xs font-bold">{ps.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. TIN TỨC & SỰ KIỆN (2 Large Framed Cards Side-by-Side)
         ===================================================================== */}
      <section id="tin-tuc" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xs sm:text-sm font-extrabold uppercase text-neutral-900 mb-4">
          TIN TỨC &amp; SỰ KIỆN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsList.slice(0, 2).map((item) => (
            <article key={item.id} className="space-y-2.5">
              <div className="flex items-center justify-between text-[11px] text-neutral-600">
                <span>{item.date}</span>
                <a href="#lien-he" className="underline hover:text-[#2d6846]">
                  {item.category}
                </a>
              </div>

              <div className="p-2.5 bg-[#d6ab94]/45 rounded-xs">
                <div className="relative h-64 sm:h-72 overflow-hidden border border-white/70">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-semibold text-neutral-700">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          9. KHÁCH HÀNG ĐÁNH GIÁ + TRUST SEALS BAR + FOREST GREEN FOOTER (#2d6846)
         ===================================================================== */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xs sm:text-sm font-extrabold uppercase text-neutral-900 mb-6">
          KHÁCH HÀNG ĐÁNH GIÁ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rv) => (
            <div key={rv.id} className="flex items-start gap-3.5">
              {rv.avatar && (
                <img
                  src={rv.avatar}
                  alt={rv.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#2d6846] shrink-0"
                />
              )}
              <div className="space-y-1">
                <div className="flex text-[#e67e22]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-[#e67e22]" />
                  ))}
                </div>
                <h3 className="text-xs font-extrabold text-neutral-900">
                  {rv.author}
                </h3>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {rv.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mint Trust Seals Bar */}
      <div className="bg-[#f2f7f4] py-8 px-4 border-t border-neutral-200/60">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {trustSeals.map((seal) => (
            <div key={seal.id} className="flex flex-col items-center space-y-1.5">
              <div className="w-12 h-12 rounded-full border-2 border-[#2d6846] text-[#2d6846] flex items-center justify-center text-[9px] font-black">
                {seal.badgeText}
              </div>
              <span className="text-[11px] text-neutral-600">{seal.title}</span>
            </div>
          ))}

          {/* Hotline CSKH Pill */}
          <div className="flex flex-col items-center space-y-1.5">
            <span className="text-[10px] font-bold uppercase text-neutral-600 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-[#2d6846]" /> HOTLINE CSKH
            </span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="bg-[#2d6846] text-white text-xs font-bold px-4 py-1.5 rounded-full"
            >
              {primaryPhone}
            </a>
          </div>

          {/* Tìm Chi Nhánh Pill */}
          <div className="flex flex-col items-center space-y-1.5">
            <span className="text-[10px] font-bold uppercase text-neutral-600 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2d6846]" /> TÌM CHI NHÁNH
            </span>
            <a
              href="#lien-he"
              className="bg-[#2d6846] text-white text-xs font-bold px-4 py-1.5 rounded-full"
            >
              Hệ thống Mona
            </a>
          </div>
        </div>
      </div>

      {/* Forest Green Footer (#2d6846) */}
      <footer id="lien-he" className="bg-[#2d6846] text-white/90 pt-12 pb-6 px-4 text-xs">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/15">
            {/* Col 1: HỖ TRỢ KHÁCH HÀNG (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase text-white">
                HỖ TRỢ KHÁCH HÀNG
              </h4>
              <div className="flex items-center gap-2">
                {["p", "f", "tw", "g", "ig", "t"].map((ic, idx) => (
                  <span
                    key={idx}
                    className="w-6 h-6 rounded-full bg-[#e67e22] text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {ic}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5 text-[11px] text-white/85 pt-1">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>{secondaryPhone}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: DANH MỤC (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-[11px] text-white/80">
                <li>
                  <a href="#trang-chu" className="hover:text-white">
                    Về Chúng Tôi
                  </a>
                </li>
                <li>
                  <a href="#ban-chay" className="hover:text-white">
                    Sản Phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-white">
                    Tin Tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: LIÊN KẾT (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase text-white mb-3">
                LIÊN KẾT
              </h4>
              <ul className="space-y-2 text-[11px] text-white/80">
                <li>
                  <a href="#ban-chay" className="hover:text-white">
                    Kem Chống Nắng
                  </a>
                </li>
                <li>
                  <a href="#ban-chay" className="hover:text-white">
                    Dưỡng Da
                  </a>
                </li>
                <li>
                  <a href="#ban-chay" className="hover:text-white">
                    Serum Dưỡng
                  </a>
                </li>
                <li>
                  <a href="#ban-chay" className="hover:text-white">
                    Dầu Dưỡng
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Nhận thông tin khuyến mãi (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white">
                Nhận thông tin khuyến mãi
              </h4>
              <p className="text-[11px] text-white/80 leading-relaxed">
                Chúng tôi rất vui mừng khi được đồng hành cùng bạn trên hành
                trình chăm sóc sắc đẹp.
              </p>

              {newsletterDone ? (
                <p className="text-amber-300 font-semibold text-xs">
                  Đã đăng ký nhận ưu đãi thành công!
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white rounded-full overflow-hidden p-1"
                >
                  <input
                    type="email"
                    required
                    placeholder="Email..."
                    className="flex-1 px-4 py-1.5 text-xs text-neutral-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full text-neutral-600 hover:text-[#2d6846] flex items-center justify-center cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-5 text-center text-[11px] text-white/70">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-white">{data.business.name}</strong>
          </div>
        </div>
      </footer>

      {/* Q&A MODAL */}
      {qaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-2xl relative border-t-4 border-[#2d6846]">
            <button
              type="button"
              onClick={() => setQaModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-sm font-extrabold uppercase text-[#2d6846] mb-1">
              Đặt Câu Hỏi Cùng Bác Sĩ Da Liễu
            </h3>
            <p className="text-xs text-neutral-500 mb-4">
              Gửi tình trạng da của bạn để chuyên gia {data.business.name} tư vấn
              phác đồ phù hợp.
            </p>
            {qaSubmitted ? (
              <div className="text-center py-6 space-y-2">
                <Check className="w-10 h-10 text-[#2d6846] mx-auto" />
                <p className="text-xs font-bold">Đã gửi câu hỏi thành công!</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQaSubmitted(true);
                }}
                className="space-y-3 text-xs"
              >
                <input
                  type="text"
                  required
                  placeholder="Họ và tên *"
                  className="w-full border border-neutral-200 rounded-md px-3 py-2.5 focus:outline-none focus:border-[#2d6846]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại nhận tư vấn *"
                  className="w-full border border-neutral-200 rounded-md px-3 py-2.5 focus:outline-none focus:border-[#2d6846]"
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Câu hỏi về kem chống nắng / tình trạng da..."
                  className="w-full border border-neutral-200 rounded-md px-3 py-2.5 focus:outline-none focus:border-[#2d6846] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#2d6846] text-white font-bold uppercase py-2.5 rounded-full cursor-pointer"
                >
                  Gửi câu hỏi ngay
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
