"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type SalonToc10Data,
  type SheinStyleBuyerShowItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(mockData, incomingData);

  const [cartCount, setCartCount] = useState(2);
  const [wishlistCount, setWishlistCount] = useState(3);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] =
    useState<SheinStyleBuyerShowItem | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  const handleCopyCode = (code: string) => {
    setCopiedCode(code);
    triggerToast(`Đã sao chép mã ưu đãi "${code}" vào bộ nhớ tạm!`);
  };

  const handleAddItem = (title: string) => {
    setCartCount((prev) => prev + 1);
    triggerToast(`Đã thêm "${title}" vào giỏ dịch vụ & mua sắm!`);
  };

  const primaryPhone = data.business.phone[0] || "0909 686 888";
  const primaryEmail = data.business.email[0] || "booking@sheinstyle.vn";

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#e93481] selection:text-white">
      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-md border-2 border-[#3dc7be] bg-[#111111] px-5 py-3 text-xs font-bold text-white shadow-2xl">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e93481] text-white">
            ✓
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Quick View Modal for Buyers Show */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden border-2 border-[#3dc7be] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center bg-black text-xs font-bold text-white hover:bg-[#e93481]"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative h-64 sm:h-full">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="h-full w-full object-cover grayscale"
                />
                <span className="absolute left-3 top-3 bg-black px-2.5 py-1 text-xs font-extrabold text-white">
                  {selectedItem.discountBadge}
                </span>
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="inline-block bg-[#79dfd2] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black">
                    BUYERS SHOW VERIFIED
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-black">
                    {selectedItem.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {selectedItem.stylistNote}
                  </p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-xs text-gray-400 line-through">
                      {selectedItem.originalPrice}
                    </span>
                    <span className="text-lg font-black text-[#e93481]">
                      {selectedItem.salePrice}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    Sản phẩm & gói tạo kiểu chính hãng tại {data.business.name}.
                    Áp dụng đồng thời với mã ưu đãi Cyber Monday.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleAddItem(selectedItem.name);
                    setSelectedItem(null);
                  }}
                  className="mt-6 w-full bg-[#e93481] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#c82369]"
                >
                  THÊM VÀO GIỎ NGAY &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. TOP MINT BAR + WHITE HEADER + SUB-NAV + BLACK 4-BENEFIT BAR
      ===================================================================== */}
      <header className="bg-white">
        {/* Top Mint-Turquoise Promo Strip (#79dfd2) */}
        <div className="bg-[#79dfd2] py-1.5 text-center text-[11px] font-bold tracking-wider text-white uppercase">
          <span>{data.topMintPromoText.replace("CHỈ TỪ 69K", "")} </span>
          <span className="font-black text-[#e93481]">CHỈ TỪ 69K</span>{" "}
          <a
            href="#cyber-sale"
            className="ml-1 underline decoration-white hover:text-black"
          >
            MUA NGAY
          </a>
        </div>

        {/* Main White Brand Row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Left Utility Links */}
          <div className="hidden items-center gap-4 text-xs text-gray-600 md:flex">
            <span>Hệ thống Salon Quốc Tế</span>
            <button
              type="button"
              onClick={() =>
                handleCopyCode("SVN10")
              }
              className="font-medium text-gray-700 hover:text-[#e93481]"
            >
              Đăng ký giảm ngay 10%
            </button>
          </div>

          {/* Center MONA / SheinStyle Logo */}
          <a
            href="#cyber-sale"
            className="flex flex-col items-center text-center"
          >
            <span className="font-serif text-3xl font-black tracking-[0.18em] text-[#1a1a1a] sm:text-4xl">
              {data.brandMainTitle}
            </span>
            <span className="-mt-1.5 font-serif text-base italic tracking-wide text-gray-700">
              {data.brandScriptSub}
            </span>
          </a>

          {/* Right Customer Care + Icons */}
          <div className="flex items-center gap-3 text-xs text-gray-700 sm:gap-4">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="hidden hover:text-[#e93481] lg:inline"
            >
              Chăm sóc khách hàng
            </a>
            <button
              type="button"
              onClick={() =>
                triggerToast("Cổng thành viên VIP SheinStyle đã sẵn sàng!")
              }
              className="hidden hover:text-[#e93481] sm:inline"
            >
              Đăng nhập / Đăng ký
            </button>
            <button
              type="button"
              onClick={() =>
                triggerToast("Nhập từ khóa kiểu tóc hoặc sản phẩm bạn cần tìm!")
              }
              aria-label="Tìm kiếm"
              className="text-gray-700 hover:text-[#e93481]"
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
              onClick={() => {
                setWishlistCount((c) => c + 1);
                triggerToast("Đã lưu vào danh sách kiểu tóc yêu thích!");
              }}
              aria-label="Yêu thích"
              className="relative text-gray-700 hover:text-[#e93481]"
            >
              ♥
              <span className="ml-0.5 text-[10px] font-bold text-[#e93481]">
                {wishlistCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() =>
                triggerToast(`Giỏ hàng của bạn đang có ${cartCount} mục ưu đãi!`)
              }
              className="flex h-7 min-w-[28px] items-center justify-center border border-black px-1.5 text-xs font-extrabold text-black hover:bg-black hover:text-white"
            >
              {cartCount}
            </button>
          </div>
        </div>

        {/* Light Grey Sub-Navigation Strip */}
        <div className="border-y border-gray-200 bg-[#fafafa] py-2.5">
          <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-4 text-xs text-gray-600 sm:gap-10">
            {data.navigation.map((navItem: any) => (
              <a
                key={navItem.label}
                href={navItem.href}
                className="font-medium transition hover:text-[#e93481]"
              >
                {navItem.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Black 4-Column Benefit Strip (#111111) */}
        <div className="bg-[#111111] text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/20 px-4 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {data.blackBarBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex flex-col items-center justify-center px-3 py-2.5 text-center"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                  {benefit.title}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-gray-300">
                  {benefit.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. DARK CYBER KEYBOARD "SALE CYBER MONDAY" HERO BANNER
      ===================================================================== */}
      <section
        id="cyber-sale"
        className="relative my-3 overflow-hidden bg-[#151819] py-10 text-white sm:py-14"
      >
        {/* Background Mechanical Keyboard Grid Matrix */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="mx-auto grid max-w-6xl grid-cols-12 gap-2 p-4">
            {Array.from({ length: 48 }).map((_, idx) => (
              <div
                key={idx}
                className="h-12 rounded border border-teal-500/20 bg-[#1d2224] shadow-inner"
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
          {/* Row 1 Keycaps: S A L E */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {data.cyberSaleRow1.map((letter, idx) => (
              <div
                key={idx}
                className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-[#5ce6dc] bg-gradient-to-b from-[#2ab8af] to-[#177e78] font-mono text-2xl font-black text-white shadow-[0_4px_0_#0e4f4b,0_0_18px_rgba(92,230,220,0.6)] sm:h-14 sm:w-14 sm:text-3xl"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Row 2 Keycaps: C Y B E R M O N D A Y */}
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {data.cyberSaleRow2.map((letter, idx) => (
              <div
                key={idx}
                className="flex h-10 w-9 items-center justify-center rounded-md border-2 border-[#5ce6dc] bg-gradient-to-b from-[#2ab8af] to-[#177e78] font-mono text-lg font-black text-white shadow-[0_4px_0_#0e4f4b,0_0_15px_rgba(92,230,220,0.5)] sm:h-13 sm:w-12 sm:text-2xl"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Teal Sub-banner */}
          <div className="mt-4 rounded border border-[#6ef2e8] bg-[#2ab8af] px-6 py-2 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(42,184,175,0.5)] sm:text-lg">
            {data.cyberBannerSubline}
          </div>

          {/* Hot Pink MUA NGAY Button */}
          <a
            href="#yeu-thich"
            className="mt-3.5 inline-flex items-center justify-center rounded bg-[#e93481] px-10 py-2.5 text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_4px_0_#9e1952] transition hover:brightness-110"
          >
            {data.hero.ctaText}
          </a>

          {/* 3 Pink Voucher Keycaps Row */}
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {data.voucherKeys.map((vk) => (
              <button
                key={vk.id}
                type="button"
                onClick={() => handleCopyCode(vk.code)}
                className="flex flex-col items-center justify-center rounded border border-[#ff7ab3] bg-gradient-to-b from-[#e93481] to-[#b81d5e] px-5 py-2 text-white shadow-[0_3px_0_#731039] transition hover:scale-105"
              >
                <span className="text-sm font-black uppercase tracking-wide">
                  {vk.discount}
                </span>
                <span className="text-[10px] font-semibold uppercase text-pink-100">
                  {vk.condition}
                </span>
              </button>
            ))}
          </div>

          {/* Bottom NHẬP MÃ: BFVN Button with Pointer Icon */}
          <button
            type="button"
            onClick={() => handleCopyCode(data.cyberPromoCode)}
            className="mt-3.5 inline-flex items-center gap-2 rounded border border-[#ff8ec0] bg-[#e93481] px-7 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg transition hover:bg-[#ff3d8e]"
          >
            <span>
              {copiedCode === data.cyberPromoCode
                ? `ĐÃ SAO CHÉP MÃ: ${data.cyberPromoCode}`
                : `NHẬP MÃ: ${data.cyberPromoCode}`}
            </span>
            <span className="text-base">👆</span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          3. FULL-WIDTH HOT PINK BANNER — "ĐỒNG GIÁ 99K" (#e93481)
      ===================================================================== */}
      <section className="my-4 bg-[#e93481] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center px-4 sm:px-6 md:grid-cols-12">
          <div className="flex justify-center md:col-span-5">
            <img
              src={data.pinkStripImage}
              alt="Đồng giá 99K SheinStyle"
              className="h-64 w-64 object-cover object-top sm:h-72 sm:w-72"
            />
          </div>
          <div className="py-8 text-center md:col-span-7">
            <p className="text-base font-extrabold uppercase tracking-wide text-white sm:text-xl">
              {data.pinkStripHeadline}
            </p>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-wider text-white sm:text-5xl">
              {data.pinkStripSubline}
            </h2>
            <button
              type="button"
              onClick={() =>
                handleAddItem("Combo Hấp Tóc & Phụ Kiện Đồng Giá 99K")
              }
              className="mt-5 inline-block bg-white px-8 py-2 text-xs font-extrabold uppercase tracking-widest text-[#111111] shadow transition hover:bg-black hover:text-white"
            >
              MUA NGAY &gt;
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. 2-COLUMN SPLIT SHOWCASE ("PHONG CÁCH TUYỆT ĐẸP" | "BEST SELLERS")
      ===================================================================== */}
      <section className="mx-auto my-4 max-w-6xl px-2 sm:px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Card: Blonde Wavy Hair + Overlapping Cyan/Magenta Frame + Crown */}
          <div className="relative h-[460px] overflow-hidden bg-[#dcdcdc]">
            <img
              src={data.splitLeftImage}
              alt={data.splitLeftTitle}
              className="h-full w-full object-cover"
            />
            {/* Translucent Cyan & Magenta Offset Frames */}
            <div className="absolute inset-x-10 bottom-10 top-24 border-4 border-[#3dc7be]/80 bg-[#79dfd2]/25" />
            <div className="absolute inset-x-12 bottom-8 top-28 flex flex-col items-center justify-center bg-[#7b1fa2]/75 p-6 text-center text-white backdrop-blur-[1px]">
              {/* White Crown SVG */}
              <svg
                viewBox="0 0 32 24"
                className="h-7 w-9 text-white"
                fill="currentColor"
              >
                <path d="M2 20h28v3H2v-3zm1-2L0 5l9 6 7-9 7 9 9-6-3 13H3z" />
              </svg>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-wide">
                {data.splitLeftTitle}
              </h3>
              <a
                href="#yeu-thich"
                className="mt-5 bg-white px-6 py-2 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-[#3dc7be] hover:text-white"
              >
                MUA NGAY &gt;
              </a>
            </div>
          </div>

          {/* Right Card: Pitch Black Background + Flame HOT Badge + Model */}
          <div className="relative grid h-[460px] grid-cols-12 overflow-hidden bg-[#0a0a0a] text-white">
            {/* Top-Right Pink Flame Badge "HOT" */}
            <div className="absolute right-4 top-4 z-20 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#e93481] text-xs font-black uppercase text-white shadow-lg">
              <span>🔥</span>
              <span>HOT</span>
            </div>

            <div className="z-10 col-span-6 flex flex-col justify-center pl-6 sm:pl-10">
              {data.splitRightTitle.map((line, i) => (
                <span
                  key={i}
                  className="text-2xl font-black uppercase leading-snug tracking-wider text-white sm:text-3xl"
                >
                  {line}
                </span>
              ))}
              <div className="mt-6">
                <a
                  href="#buyers-show"
                  className="inline-block bg-[#e93481] px-6 py-2 text-xs font-extrabold uppercase tracking-widest text-white transition hover:bg-[#ff4793]"
                >
                  XEM NGAY &gt;
                </a>
              </div>
            </div>

            <div className="col-span-6 h-full">
              <img
                src={data.splitRightImage}
                alt="Best Sellers Hair Collection"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. MINT FLASH STRIP ("GIẢM 70%") + 2-COL ("HOT OCCASION" | "99%")
      ===================================================================== */}
      <section className="mx-auto my-4 max-w-6xl px-2 sm:px-4">
        {/* Full-Width Mint-Turquoise Strip (#9be8de) */}
        <div className="flex flex-col items-center justify-around gap-4 bg-[#9be8de] px-6 py-6 text-center md:flex-row">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-wide text-[#e93481] sm:text-4xl">
              {data.flashMintDiscount}
            </h2>
            <p className="text-2xl font-black uppercase tracking-wider text-[#e93481] sm:text-3xl">
              {data.flashMintSub}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black uppercase tracking-wider text-[#111111] sm:text-3xl">
                {data.flashMintRightText}
              </span>
              <span className="text-3xl text-[#e93481]">⚡</span>
            </div>
            <button
              type="button"
              onClick={() =>
                handleAddItem("Voucher Flash Sale Giảm 70% Toàn Salon")
              }
              className="mt-3 bg-white px-8 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-xs transition hover:bg-[#e93481] hover:text-white"
            >
              MUA NGAY &gt;
            </button>
          </div>
        </div>

        {/* 2-Column Split Below Mint Strip */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left: Teal Card (#1d9b9c) with Model on Right */}
          <div className="relative flex min-h-[210px] items-center justify-between overflow-hidden bg-[#1d9b9c] p-6 text-white sm:p-8">
            <div className="z-10 max-w-[60%]">
              <h3 className="text-xl font-black uppercase tracking-wide sm:text-2xl">
                {data.occasionTitle}
              </h3>
              <p className="mt-1 text-xs font-semibold text-teal-50 sm:text-sm">
                {data.occasionSubtitle}
              </p>
              <a
                href="#yeu-thich"
                className="mt-4 inline-block bg-black px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#e93481]"
              >
                MUA NGAY &gt;
              </a>
            </div>
            <img
              src={data.occasionImage}
              alt={data.occasionTitle}
              className="absolute right-0 bottom-0 h-full w-44 object-cover object-top sm:w-52"
            />
          </div>

          {/* Right: Hot Pink Card (#e93481) with Giant 99% */}
          <div className="flex min-h-[210px] flex-col items-center justify-center bg-[#e93481] p-6 text-center text-white">
            <h3 className="text-lg font-extrabold uppercase tracking-wider sm:text-xl">
              {data.secondItemDealTitle}
            </h3>
            <p className="mt-1 text-5xl font-black leading-none text-white sm:text-6xl">
              {data.secondItemPercent}
            </p>
            <button
              type="button"
              onClick={() =>
                handleAddItem("Ưu đãi Sản phẩm & Dịch vụ thứ 2 giảm 99%")
              }
              className="mt-4 bg-[#2cc9bf] px-8 py-2 text-xs font-extrabold uppercase tracking-widest text-white shadow transition hover:bg-black"
            >
              MUA NGAY &gt;
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. "SẢN PHẨM BẠN YÊU THÍCH TẠI ĐÂY" (3-COL + ASYMMETRIC BENTO + 2-COL)
      ===================================================================== */}
      <section id="yeu-thich" className="mx-auto max-w-6xl px-2 py-8 sm:px-4">
        <h2 className="mb-8 text-center text-2xl font-normal uppercase tracking-[0.12em] text-[#222222] sm:text-3xl">
          SẢN PHẨM BẠN YÊU THÍCH TẠI ĐÂY
        </h2>

        {/* Row 1: 3-Column Portrait Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {data.favoriteTrioCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-[380px] overflow-hidden bg-gray-100"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-8 text-center text-white">
                <h3 className="text-base font-extrabold drop-shadow sm:text-lg">
                  {card.title}
                </h3>
                <button
                  type="button"
                  onClick={() => handleAddItem(card.title)}
                  className="mt-3 bg-[#e93481] px-6 py-2 text-xs font-extrabold tracking-wide text-white shadow transition hover:bg-black"
                >
                  {card.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Asymmetric Editorial Bento Grid (Left Tall Dark Card + Right 2 Stacked Cards) */}
        <div
          id="bento-style"
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12"
        >
          {/* Left Tall Card with Neon Cyan/Pink Left Accent Strip */}
          <div className="relative h-[440px] overflow-hidden bg-black md:col-span-6">
            {/* Left Vertical Neon Strip */}
            <div className="absolute left-0 top-0 bottom-0 z-10 w-5 bg-gradient-to-b from-[#2de2d5] via-[#e93481] to-[#e93481]" />
            <img
              src={data.bentoFeatureLeft.image}
              alt={data.bentoFeatureLeft.title}
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-6 text-center text-white">
              <h3 className="text-2xl font-black tracking-wide sm:text-3xl">
                {data.bentoFeatureLeft.title}
              </h3>
              <button
                type="button"
                onClick={() => handleAddItem(data.bentoFeatureLeft.title)}
                className="mt-4 bg-[#e93481] px-8 py-2 text-xs font-extrabold text-white transition hover:bg-[#2ab8af]"
              >
                {data.bentoFeatureLeft.ctaLabel}
              </button>
            </div>
          </div>

          {/* Right 2 Stacked Horizontal Cards */}
          <div className="flex flex-col gap-4 md:col-span-6">
            {/* Top Right Card */}
            <div className="relative flex h-[212px] items-center justify-between overflow-hidden bg-[#d8d8d8] px-6 sm:px-8">
              <div className="z-10 max-w-[60%]">
                <h3 className="text-xl font-black text-[#e93481] sm:text-2xl">
                  {data.bentoFeatureTopRight.title}
                </h3>
                <button
                  type="button"
                  onClick={() => handleAddItem(data.bentoFeatureTopRight.title)}
                  className="mt-3 bg-black px-5 py-2 text-xs font-bold text-white transition hover:bg-[#e93481]"
                >
                  {data.bentoFeatureTopRight.ctaLabel}
                </button>
              </div>
              <img
                src={data.bentoFeatureTopRight.image}
                alt={data.bentoFeatureTopRight.title}
                className="h-full w-44 object-cover object-top"
              />
            </div>

            {/* Bottom Right Card */}
            <div className="relative flex h-[212px] items-center justify-between overflow-hidden bg-[#efefef] px-6 sm:px-8">
              <div className="z-10 max-w-[60%]">
                <h3 className="text-2xl font-black uppercase text-[#e93481]">
                  {data.bentoFeatureBottomRight.title}
                </h3>
                <p className="text-lg font-extrabold text-[#e93481]">
                  {data.bentoFeatureBottomRight.subtitle}
                </p>
              </div>
              <img
                src={data.bentoFeatureBottomRight.image}
                alt={data.bentoFeatureBottomRight.title}
                className="h-full w-44 object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Row 3: 2-Column Split (Men's Styling on Mint Diagonal | Kids Styling on Black/Pink Splash) */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left: Mint-Turquoise Diagonal Card */}
          <div className="relative h-[440px] overflow-hidden bg-[#8ce3d8]">
            <img
              src={data.genderSplitLeft.image}
              alt={data.genderSplitLeft.title}
              className="h-full w-full object-cover object-top mix-blend-multiply"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-6 text-center text-white">
              <h3 className="max-w-xs text-2xl font-black uppercase leading-tight drop-shadow">
                {data.genderSplitLeft.title}
              </h3>
              <button
                type="button"
                onClick={() => handleAddItem(data.genderSplitLeft.title)}
                className="mt-4 bg-[#e93481] px-7 py-2 text-xs font-extrabold text-white shadow transition hover:bg-black"
              >
                {data.genderSplitLeft.ctaLabel}
              </button>
            </div>
          </div>

          {/* Right: Black & Neon Pink Diagonal Splash Card */}
          <div className="relative h-[440px] overflow-hidden bg-[#0c0c0c]">
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-96 rotate-12 bg-[#e93481]" />
            <img
              src={data.genderSplitRight.image}
              alt={data.genderSplitRight.title}
              className="relative z-10 h-full w-full object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/25 p-6 text-center text-white">
              <h3 className="text-2xl font-black uppercase tracking-wide drop-shadow sm:text-3xl">
                {data.genderSplitRight.title}
              </h3>
              <button
                type="button"
                onClick={() => handleAddItem(data.genderSplitRight.title)}
                className="mt-4 bg-[#53d6cb] px-7 py-2 text-xs font-extrabold text-white shadow transition hover:bg-[#e93481]"
              >
                {data.genderSplitRight.ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. "BUYERS SHOW" (5-COLUMN MONOCHROME PRODUCT CARDS WITH BADGES)
      ===================================================================== */}
      <section id="buyers-show" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-normal uppercase tracking-[0.14em] text-[#222222]">
          BUYERS SHOW
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data.buyersShowItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between text-center"
            >
              <div>
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative h-52 cursor-pointer overflow-hidden bg-gray-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  {/* Black Discount Tag (-96%, -63%, etc.) */}
                  <span className="absolute left-0 top-2 bg-black px-2 py-1 text-[11px] font-bold text-white">
                    {item.discountBadge}
                  </span>
                </div>

                <h3 className="mt-3 line-clamp-1 text-xs text-gray-600">
                  {item.name}
                </h3>
                <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                  <span className="text-[11px] text-gray-400 line-through">
                    {item.originalPrice}
                  </span>
                  <span className="font-extrabold text-[#111111]">
                    {item.salePrice}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => handleAddItem(item.name)}
                  className="border border-gray-800 px-4 py-1 text-[11px] font-medium text-gray-800 transition hover:bg-black hover:text-white"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dot */}
        <div className="mt-8 flex justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500" />
        </div>
      </section>

      {/* =====================================================================
          8. LIGHT GREY 4-COLUMN FOOTER (#f5f5f5)
      ===================================================================== */}
      <footer className="mt-6 bg-[#f5f5f5] py-12 text-xs text-gray-600">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1 */}
            <div className="lg:col-span-2">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">
                THÔNG TIN CÔNG TY
              </h4>
              <ul className="mt-3 space-y-2 text-[11px]">
                <li>Giới Thiệu {data.business.name}</li>
                <li>Chương Trình Affiliate</li>
                <li>Blogger Thời Trang & Tóc</li>
                <li>Tuyển Dụng Stylist</li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">
                TRUNG TÂM HỖ TRỢ
              </h4>
              <ul className="mt-3 space-y-2 text-[11px]">
                <li>Thông tin vận chuyển</li>
                <li>Hướng dẫn đổi trả</li>
                <li>Hướng dẫn đặt lịch hẹn</li>
                <li>Tra cứu đơn hàng</li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-3">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">
                DỊCH VỤ KHÁCH HÀNG
              </h4>
              <ul className="mt-3 space-y-2 text-[11px]">
                <li>📍 {data.business.address}</li>
                <li>📞 Hotline: {primaryPhone}</li>
                <li>✉️ Email: {primaryEmail}</li>
                <li>Trung tâm dùng thử miễn phí</li>
              </ul>
            </div>

            {/* Col 4: Social + Newsletter */}
            <div className="lg:col-span-5">
              <h4 className="font-bold uppercase tracking-wider text-gray-900">
                KẾT NỐI VỚI CHÚNG TÔI
              </h4>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-bold text-gray-500">
                {["f", "IG", "TW", "P", "G+", "YT", "TT"].map((soc) => (
                  <button
                    key={soc}
                    type="button"
                    onClick={() =>
                      triggerToast(`Đang kết nối kênh ${soc} của ${data.business.name}`)
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-gray-700 shadow-2xs hover:bg-[#e93481] hover:text-white"
                  >
                    {soc}
                  </button>
                ))}
              </div>

              <h4 className="mt-6 font-bold uppercase tracking-wider text-gray-900">
                ĐĂNG KÝ NHẬN TIN TỪ SHEINSTYLE
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (emailInput.trim()) {
                    setSubscribed(true);
                    setEmailInput("");
                  }
                }}
                className="mt-2.5 flex gap-2"
              >
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Nhập địa chỉ Email của bạn (bắt buộc)"
                  className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-xs text-gray-800 focus:border-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#111111] px-6 py-2 text-xs font-extrabold uppercase text-white transition hover:bg-[#e93481]"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-[11px] font-bold text-[#2ab8af]">
                  ✓ Đăng ký thành công! Mã giảm 10% đã được gửi vào email của bạn.
                </p>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
