"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type SalonToc11Data,
  type MiniBeProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(mockData, incomingData);

  const [dealQty, setDealQty] = useState(1);
  const [cartCount, setCartCount] = useState(1);
  const [showAllCatalog, setShowAllCatalog] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<MiniBeProductItem | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const handleAddToCart = (name: string, qty = 1) => {
    setCartCount((c) => c + qty);
    notify(`Đã thêm ${qty} × "${name}" vào giỏ hàng MiniBe Salon!`);
  };

  const visibleCatalog = showAllCatalog
    ? data.catalogProducts
    : data.catalogProducts.slice(0, 15);

  const primaryPhone = data.business.phone[0] || "0908 555 689";

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#ebb052] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded bg-[#222222] px-5 py-3 text-xs font-medium text-white shadow-2xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ebb052] text-[11px] font-bold text-black">
            ✓
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs hover:bg-[#222222] hover:text-white"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#f3f4f6] p-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4942a]">
                    {selectedProduct.category}
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold text-[#222222]">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-base font-extrabold text-[#222222]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-gray-600">
                    {selectedProduct.summary}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedProduct.name, 1);
                    setSelectedProduct(null);
                  }}
                  className="mt-6 w-full bg-[#222222] py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#ebb052] hover:text-black"
                >
                  🛒 Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. SLIM BLACK TOP BAR + WARM AMBER-GOLD HERO (#ebb052)
      ===================================================================== */}
      <div className="bg-[#1a1a1a] py-2 text-[10px] font-semibold uppercase tracking-widest text-gray-300">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 px-4 sm:px-6">
          <a href="#danh-gia" className="hover:text-white">
            BLOG LÀM ĐẸP
          </a>
          <a href="#lien-he" className="hover:text-white">
            LIÊN HỆ ({primaryPhone})
          </a>
        </div>
      </div>

      <header
        id="trang-chu"
        className="relative overflow-hidden bg-[#ebb052] text-white"
      >
        {/* Navigation Bar overlaid on Warm Amber Hero */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          {/* Left: Circular Emblem + MINIBE.Salon / Hair Studio */}
          <a href="#trang-chu" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#222222] bg-white text-[#222222] shadow-xs">
              <svg
                viewBox="0 0 36 36"
                className="h-7 w-7"
                fill="currentColor"
              >
                <circle cx="10" cy="10" r="4" />
                <circle cx="26" cy="10" r="4" />
                <circle
                  cx="18"
                  cy="19"
                  r="11"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <circle cx="14" cy="17" r="2.2" />
                <circle cx="22" cy="17" r="2.2" />
                <ellipse cx="18" cy="21" rx="2.5" ry="1.6" />
              </svg>
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-xl font-black tracking-tight text-[#222222]">
                  {data.brandPrimary}
                </span>
                <span className="text-sm font-extrabold text-[#4f359b]">
                  {data.brandAccent}
                </span>
              </div>
              <span className="block text-[10px] italic text-[#3a2c14]">
                {data.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-white md:flex">
            {data.navigation.map((item: any, idx: number) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  idx === 0
                    ? "border-b-2 border-white pb-1 text-white"
                    : "text-white/90 transition hover:text-[#222222]"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Search + Cart */}
          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              onClick={() =>
                notify("Tìm kiếm dịch vụ tạo mẫu tóc & dưỡng tóc MiniBe")
              }
              aria-label="Tìm kiếm"
              className="hover:text-[#222222]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() =>
                notify(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm!`)
              }
              className="flex items-center gap-1.5 text-xs font-bold hover:text-[#222222]"
            >
              <span>🛒</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-[#222222]">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Hero Split Content */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center px-4 pt-4 pb-12 sm:px-6 md:grid-cols-12 lg:pt-8 lg:pb-16">
          {/* Left Editorial Title */}
          <div className="py-8 text-center md:col-span-6">
            <h1 className="font-sans text-4xl font-light leading-tight tracking-wide text-white sm:text-5xl">
              {data.hero.title}
            </h1>
            <p className="mt-3 text-xs tracking-wide text-white/90 sm:text-sm">
              {data.hero.subtitle}
            </p>
            <div className="mt-6">
              <a
                href={data.hero.ctaLink}
                className="inline-block border border-white/80 px-7 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#222222]"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>

          {/* Right Blonde Hair Model Portrait */}
          <div className="flex justify-center md:col-span-6">
            <div className="relative h-80 w-72 overflow-hidden sm:h-96 sm:w-80">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="h-full w-full rounded-t-full object-cover object-top shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Slider Indicator Lines */}
        <div className="flex justify-center gap-2 pb-4">
          <span className="h-0.5 w-4 bg-white/50" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-4 bg-white/50" />
        </div>
      </header>

      {/* =====================================================================
          2. "ƯU ĐÃI TUẦN NÀY (WEEKLY DEAL)" — 2 STACKED PHOTOS LEFT + DETAILS RIGHT
      ===================================================================== */}
      <section
        id="weekly-deal"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      >
        <h2 className="mb-10 text-center text-lg font-medium tracking-wide text-[#222222]">
          {data.weeklyDeal.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left Column: 2 Stacked Large Square Photos on #f3f4f6 */}
          <div className="space-y-6 md:col-span-6">
            <div className="flex h-[380px] items-center justify-center overflow-hidden bg-[#f3f4f6] p-8">
              <img
                src={data.weeklyDeal.frontImage}
                alt={data.weeklyDeal.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[380px] items-center justify-center overflow-hidden bg-[#f3f4f6] p-8">
              <img
                src={data.weeklyDeal.backImage}
                alt={`${data.weeklyDeal.name} - Góc nhìn 2`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Sticky Product / Package Details */}
          <div className="flex flex-col justify-between md:col-span-6">
            <div className="pt-4 text-center md:px-6">
              <h3 className="text-2xl font-normal text-[#222222]">
                {data.weeklyDeal.name}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-500">
                {data.weeklyDeal.description}
              </p>

              {/* Star Rating */}
              <div className="mt-4 flex flex-col items-center">
                <div className="flex gap-1 text-xs text-[#f59e0b]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span className="mt-1 text-[11px] text-gray-400">
                  ({data.weeklyDeal.ratingCount} đánh giá của khách hàng)
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 text-xl font-bold text-[#222222]">
                {data.weeklyDeal.price}
              </div>

              {/* Quantity Selector + Add to Cart + Wishlist */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex items-center border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setDealQty((q) => Math.max(1, q - 1))}
                    className="px-3 py-2.5 text-xs text-gray-500 hover:text-black"
                  >
                    −
                  </button>
                  <span className="px-3 text-xs font-semibold text-[#222222]">
                    {dealQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDealQty((q) => q + 1)}
                    className="px-3 py-2.5 text-xs text-gray-500 hover:text-black"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleAddToCart(data.weeklyDeal.name, dealQty)
                  }
                  className="bg-[#222222] px-7 py-2.5 text-xs font-semibold text-white transition hover:bg-[#ebb052] hover:text-black"
                >
                  🛒 Thêm vào giỏ hàng
                </button>

                <button
                  type="button"
                  onClick={() =>
                    notify("Đã thêm vào danh sách yêu thích của bạn!")
                  }
                  className="border border-gray-200 px-3 py-2.5 text-xs text-gray-500 hover:border-black hover:text-black"
                >
                  ♡
                </button>
              </div>
            </div>

            {/* Bottom Meta & Social Share */}
            <div className="mt-12 border-t border-gray-100 pt-6 text-center">
              <div className="mx-auto mb-6 h-1.5 w-48 overflow-hidden bg-gray-100">
                <div className="h-full w-2/3 bg-[#222222]" />
              </div>
              <p className="border-y border-gray-100 py-3 text-[10px] uppercase tracking-widest text-gray-400">
                DANH MỤC:{" "}
                <span className="font-semibold text-gray-700">
                  {data.weeklyDeal.categoryLabel}
                </span>
              </p>
              <div className="mt-4 flex items-center justify-center gap-6 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                <button
                  type="button"
                  onClick={() => notify("Đã chia sẻ lên Facebook")}
                  className="hover:text-black"
                >
                  f FACEBOOK
                </button>
                <button
                  type="button"
                  onClick={() => notify("Đã chia sẻ lên Twitter")}
                  className="hover:text-black"
                >
                  🐦 TWITTER
                </button>
                <button
                  type="button"
                  onClick={() => notify("Đã lưu lên Pinterest")}
                  className="hover:text-black"
                >
                  📌 PINTEREST
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. "SẢN PHẨM TƯƠNG TỰ" (5-COLUMN MINIMALIST GREY-CARD GRID)
      ===================================================================== */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="mb-8 text-center text-base font-medium text-[#222222]">
          {data.relatedSectionTitle}
        </h2>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {data.relatedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item as any)}
              className="group cursor-pointer text-center"
            >
              <div className="flex h-52 items-center justify-center overflow-hidden bg-[#f3f4f6] p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-xs text-gray-600 group-hover:text-black">
                {item.name}
              </h3>
              <p className="mt-1 text-xs font-extrabold text-[#222222]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. ARTISTIC EDITORIAL BENTO COLLAGE ("16" + TÓC NỮ + TÓC NAM + DƯỠNG TÓC)
      ===================================================================== */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Half: Warm Sand (#dec59b) + Emerald "16" Typography + Model */}
          <div className="relative flex h-[420px] items-center justify-center overflow-hidden bg-[#dec59b] md:col-span-6">
            <img
              src={data.bentoCollage.leftImage}
              alt={data.bentoCollage.leftTitle}
              className="h-full w-full object-cover mix-blend-multiply opacity-85"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="select-none font-sans text-[130px] font-black leading-none tracking-tighter text-[#19b37b]/85">
                {data.bentoCollage.leftNumber}
              </span>
              <h3 className="-mt-8 text-2xl font-light tracking-wide text-white drop-shadow">
                {data.bentoCollage.leftTitle}
              </h3>
            </div>
          </div>

          {/* Right Half: Top 2 Squares (Terracotta Woman | Grey Man) + Bottom Sage Green Footwear/Haircare */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-6">
            {/* Top Mid: Terracotta Red (#c75446) */}
            <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-[#c75446]">
              <img
                src={data.bentoCollage.topMidImage}
                alt={data.bentoCollage.topMidTitle}
                className="h-full w-full object-cover opacity-85 transition duration-500 hover:scale-105"
              />
              <span className="absolute text-lg font-medium tracking-wide text-white drop-shadow">
                {data.bentoCollage.topMidTitle}
              </span>
            </div>

            {/* Top Right: Cool Grey (#d5d9dc) */}
            <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-[#d5d9dc]">
              <img
                src={data.bentoCollage.topRightImage}
                alt={data.bentoCollage.topRightTitle}
                className="h-full w-full object-cover opacity-90 transition duration-500 hover:scale-105"
              />
              <span className="absolute text-lg font-medium tracking-wide text-white drop-shadow">
                {data.bentoCollage.topRightTitle}
              </span>
            </div>

            {/* Bottom Right Full Width: Sage Mint (#76ab93) with Teal Circle (#118a8b) */}
            <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-[#76ab93] sm:col-span-2">
              <div className="pointer-events-none absolute h-36 w-36 rounded-full bg-[#118a8b]" />
              <img
                src={data.bentoCollage.bottomRightImage}
                alt={data.bentoCollage.bottomRightTitle}
                className="relative z-10 h-full w-full object-cover mix-blend-overlay"
              />
              <span className="absolute z-20 text-xl font-light tracking-wide text-white drop-shadow">
                {data.bentoCollage.bottomRightTitle}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. 15-ITEM (5x3) MINIMALIST CATALOG GRID + "XEM THÊM" BUTTON
      ===================================================================== */}
      <section id="cua-hang" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {visibleCatalog.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProduct(item as any)}
              className="group cursor-pointer text-center"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#f3f4f6] p-4">
                {item.badge && (
                  <span
                    className={`absolute left-2.5 top-2.5 px-2 py-0.5 text-[9px] font-bold uppercase text-white ${
                      item.badgeColor === "green"
                        ? "bg-[#10b981]"
                        : "bg-[#f59e0b]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 line-clamp-1 text-xs text-gray-500 group-hover:text-black">
                {item.name}
              </h3>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                <span className="font-extrabold text-[#222222]">
                  {item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-[11px] text-gray-400 line-through">
                    {item.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => {
              setShowAllCatalog((prev) => !prev);
              notify("Đã tải trọn bộ danh mục sản phẩm & dịch vụ MiniBe Salon");
            }}
            className="bg-[#222222] px-10 py-3 text-xs font-semibold text-white transition hover:bg-[#ebb052] hover:text-black"
          >
            Xem thêm
          </button>
        </div>
      </section>

      {/* =====================================================================
          6. MOODY CONCRETE-LOFT BANNER ("ĐỊNH HÌNH PHONG CÁCH MÁI TÓC CỦA BẠN")
      ===================================================================== */}
      <section id="ve-chung-toi" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="relative h-[420px] overflow-hidden bg-[#2b2b2b]">
          <img
            src={data.missionBanner.image}
            alt={data.missionBanner.title}
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center px-8 text-white sm:px-14">
            <h2 className="text-2xl font-bold tracking-wide sm:text-4xl">
              {data.missionBanner.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-gray-200 sm:text-sm">
              {data.missionBanner.subtitle}
            </p>
            <div className="mt-6">
              <a
                href="#danh-gia"
                className="inline-block bg-white px-7 py-2.5 text-xs font-bold text-[#222222] transition hover:bg-[#ebb052]"
              >
                {data.missionBanner.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. 5-COLUMN VERTICAL PORTRAIT CUSTOMER REVIEWS GRID
      ===================================================================== */}
      <section id="danh-gia" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data.reviewCards.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col items-center border border-gray-100 bg-white pb-6 text-center shadow-2xs"
            >
              <div className="h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={rev.photo}
                  alt={rev.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Overlapping White Star Pill */}
              <div className="-mt-3.5 rounded bg-white px-3 py-1 text-xs tracking-widest text-[#222222] shadow-xs">
                ★★★★★
              </div>
              <p className="mt-4 px-4 text-xs leading-relaxed text-gray-500">
                {rev.quote}
              </p>
              <p className="mt-4 text-[11px] font-semibold text-gray-700">
                {rev.name}, {rev.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. MINIMALIST NEWSLETTER + CLEAN WHITE FOOTER
      ===================================================================== */}
      <footer id="lien-he" className="border-t border-gray-100 bg-white pt-14 pb-8">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="text-lg font-medium text-[#222222]">
            {data.newsletterTitle}
          </h2>
          <p className="mt-1.5 text-xs text-gray-400">
            {data.newsletterSubtitle}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail.trim()) {
                setSubscribed(true);
                setNewsletterEmail("");
              }
            }}
            className="mt-6 flex border border-gray-200 bg-white p-1"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Nhập địa chỉ email của bạn..."
              className="flex-1 px-4 py-2.5 text-xs text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="border-l border-gray-200 px-6 py-2.5 text-xs font-semibold text-[#222222] transition hover:bg-[#222222] hover:text-white"
            >
              Đăng ký
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 text-xs font-medium text-emerald-600">
              ✓ Cảm ơn bạn đã đăng ký nhận tin từ {data.business.name}!
            </p>
          )}
        </div>

        {/* Bottom Copyright & Social Row */}
        <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-gray-100 px-4 pt-6 text-[11px] text-gray-400 sm:flex-row sm:px-6">
          <div className="flex flex-wrap items-center gap-6">
            <span>© Bản quyền thuộc về {data.business.name}</span>
            <a href="#danh-gia" className="hover:text-black">
              Blog
            </a>
            <a href="#weekly-deal" className="hover:text-black">
              Câu hỏi thường gặp
            </a>
            <a href="#lien-he" className="hover:text-black">
              Liên hệ ({data.business.address})
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            {["TW", "FB", "IG", "P", "G+"].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => notify(`Đang mở trang ${s} của MiniBe Salon`)}
                className="hover:text-black"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
