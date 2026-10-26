"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type SalonToc12Data,
  type MonaStylishSaleItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

/**
 * Red Oval Emblem Logo matching ST015-salon_toc_12.png ("MONA STYLISH")
 */
function MonaStylishOvalLogo() {
  return (
    <div className="inline-flex flex-col items-center justify-center rounded-full border-2 border-[#e5322d] bg-[#e5322d] px-4 py-1 text-white shadow-xs">
      <span className="font-sans text-base font-black tracking-wider leading-none">
        MONA
      </span>
      <span className="mt-0.5 rounded-full bg-white px-2 py-0.2 text-[8px] font-extrabold uppercase tracking-widest text-[#e5322d]">
        STYLISH
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(mockData, incomingData);

  const [tickerIdx, setTickerIdx] = useState(0);
  const [cartCount, setCartCount] = useState(2);
  const [selectedSaleItem, setSelectedSaleItem] =
    useState<MonaStylishSaleItem | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const handlePrevTicker = () => {
    setTickerIdx((prev) =>
      prev === 0 ? data.promoTickerMessages.length - 1 : prev - 1,
    );
  };

  const handleNextTicker = () => {
    setTickerIdx((prev) => (prev + 1) % data.promoTickerMessages.length);
  };

  const primaryPhone = data.business.phone[0] || "0313728397";
  const primaryEmail = data.business.email[0] || "info@themona.global";

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#e5322d] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded border border-[#e5322d] bg-[#1a1a1a] px-5 py-3 text-xs font-bold text-white shadow-2xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e5322d] text-white">
            ✓
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Bottom-Right Contact Us Pill */}
      <button
        type="button"
        onClick={() =>
          notify(`Liên hệ tư vấn trực tuyến MonaStylish: ${primaryPhone}`)
        }
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-bold text-gray-800 shadow-lg transition hover:border-[#e5322d]"
      >
        <span>Tư vấn ngay</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563eb] text-white">
          💬
        </span>
      </button>

      {/* Sale Product Quick-View Modal */}
      {selectedSaleItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden border-2 border-[#e5322d] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedSaleItem(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center bg-[#e5322d] text-xs font-bold text-white"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#f5f5f5] p-6">
                <img
                  src={selectedSaleItem.image}
                  alt={selectedSaleItem.name}
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5322d]">
                    {selectedSaleItem.category}
                  </span>
                  <h3 className="mt-1.5 text-base font-extrabold uppercase text-[#222222]">
                    {selectedSaleItem.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#e5322d]">
                      {selectedSaleItem.price}
                    </span>
                    {selectedSaleItem.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {selectedSaleItem.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {selectedSaleItem.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    notify(`Đã thêm "${selectedSaleItem.name}" vào giỏ hàng!`);
                    setSelectedSaleItem(null);
                  }}
                  className="mt-6 w-full border border-[#e5322d] bg-[#e5322d] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#e5322d]"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. TOP CONTACT BAR + WHITE HEADER WITH RED OVAL LOGO + PROMO TICKER
      ===================================================================== */}
      <header id="trang-chu" className="bg-white">
        {/* Top Slim Utility Bar */}
        <div className="border-b border-gray-100 py-1.5 text-[11px] text-gray-600">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-5">
              <span>📱 {primaryPhone}</span>
              <span className="hidden sm:inline">✉ {primaryEmail}</span>
            </div>
            <button
              type="button"
              onClick={() => notify("Cổng Đăng nhập học viên & khách hàng VIP")}
              className="font-medium hover:text-[#e5322d]"
            >
              Đăng nhập
            </button>
          </div>
        </div>

        {/* Main Header Row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#trang-chu">
            <MonaStylishOvalLogo />
          </a>

          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-wider text-gray-700 md:flex">
            {data.navigation.map((item: any, idx: number) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[#e5322d]"
              >
                {item.label}
                {idx === 3 || idx === 4 ? " ⌄" : ""}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-xs font-bold text-gray-800">
            <button
              type="button"
              onClick={() => notify("Tìm kiếm thiết bị tóc & khóa học Stylist")}
              aria-label="Tìm kiếm"
              className="hover:text-[#e5322d]"
            >
              🔍
            </button>
            <button
              type="button"
              onClick={() =>
                notify(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm!`)
              }
              className="flex items-center gap-1 hover:text-[#e5322d]"
            >
              <span>GIỎ HÀNG</span>
              <span>🛒 ({cartCount})</span>
            </button>
          </div>
        </div>

        {/* Grey Promo Ticker Bar with < > Arrows */}
        <div className="border-y border-gray-200 bg-[#f3f3f3] py-2">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 text-xs font-bold text-gray-800">
            <button
              type="button"
              onClick={handlePrevTicker}
              className="px-2 text-gray-500 hover:text-black"
              aria-label="Trước"
            >
              ‹
            </button>
            <span className="text-center text-[11px] tracking-wide">
              ✉ {data.promoTickerMessages[tickerIdx]}
            </span>
            <button
              type="button"
              onClick={handleNextTicker}
              className="px-2 text-gray-500 hover:text-black"
              aria-label="Tiếp"
            >
              ›
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. FULL-WIDTH STUDIO HERO BANNER + 4 METALLIC GREY VOUCHER CARDS
      ===================================================================== */}
      <section className="bg-[#e8e8e8]">
        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="h-[360px] w-full object-cover object-center sm:h-[460px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* 4 Rounded Grey Metallic Voucher Cards */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.vouchers.map((voucher) => (
            <div
              key={voucher.id}
              onClick={() =>
                notify(`Đã sao chép mã ${voucher.code} (${voucher.title})!`)
              }
              className="cursor-pointer rounded-xl border border-gray-300 bg-gradient-to-b from-[#d8d8d8] to-[#c8c8c8] p-4 text-left shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
            >
              <h3 className="text-sm font-black uppercase tracking-wide text-[#1a1a1a]">
                {voucher.title}
              </h3>
              <div className="mt-3 space-y-0.5 text-[11px] font-semibold text-gray-800">
                <p>Hóa đơn: {voucher.minBill}</p>
                <p>Giảm ngay: {voucher.discountValue}</p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-gray-400/50 pt-2.5 text-[10px] font-bold text-gray-700">
                <span>{voucher.code}</span>
                <span>{voucher.expiry}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. RETRO OS WINDOW CUTOUT COLLAGE BANNER
      ===================================================================== */}
      <section className="relative overflow-hidden border-y border-gray-200 bg-[#f4f4f4] py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
          {/* Left Retro OS Window Frame */}
          <div className="relative flex items-center justify-center">
            <div className="w-72 overflow-hidden border-2 border-gray-600 bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-gray-400 bg-gray-200 px-2.5 py-1 text-[10px] font-mono font-bold text-gray-700">
                <span>Mona_Air_Styling_93</span>
                <span>✕</span>
              </div>
              <img
                src={data.retroCollageLeftImage}
                alt="Retro Styling Showcase Left"
                className="h-52 w-full object-cover"
              />
            </div>
          </div>

          {/* Right Retro OS Window Frame with Yellow Accent (#f3d54e) + "180" Neon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-4 top-2 z-20 border-2 border-gray-700 bg-[#141414] px-4 py-2 font-mono text-2xl font-black tracking-widest text-[#ff4d8d] shadow-lg">
              180°
            </div>
            <div className="w-72 overflow-hidden border-2 border-gray-700 bg-[#f3d54e] p-3 shadow-xl">
              <div className="mb-2 flex items-center justify-between border-b border-gray-700 bg-white px-2 py-0.5 text-[10px] font-mono font-bold">
                <span>Master_Stylist_180</span>
                <span>□</span>
              </div>
              <img
                src={data.retroCollageRightImage}
                alt="Retro Styling Showcase Right"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. EDITORIAL SECTION 1 ("AIR STYLING PRO 270") + 2 TILTED PORTRAITS
      ===================================================================== */}
      <section id="bo-suu-tap" className="mx-auto max-w-5xl px-4 py-12 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#e5322d]">
          {data.editorialSections[0].title}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-gray-500">
          {data.editorialSections[0].subtitle}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href="#sale-grid"
            className="border border-[#e5322d] px-5 py-1.5 text-[11px] font-semibold text-[#e5322d] transition hover:bg-[#e5322d] hover:text-white"
          >
            {data.editorialSections[0].primaryBtn}
          </a>
          <a
            href="#sale-grid"
            className="border border-[#e5322d] px-5 py-1.5 text-[11px] font-semibold text-[#e5322d] transition hover:bg-[#e5322d] hover:text-white"
          >
            {data.editorialSections[0].secondaryBtn}
          </a>
        </div>

        {/* 2 Tilted Cutout Lookbook Portraits */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="mx-auto w-full max-w-xs -rotate-2 overflow-hidden bg-gray-100 shadow-lg transition duration-500 hover:rotate-0">
            <img
              src={data.editorialSections[0].leftImage}
              alt="Lookbook Portrait 1"
              className="h-96 w-full object-cover"
            />
          </div>
          <div className="mx-auto w-full max-w-xs rotate-2 overflow-hidden bg-gray-100 shadow-lg transition duration-500 hover:rotate-0">
            <img
              src={data.editorialSections[0].rightImage}
              alt="Lookbook Portrait 2"
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. 2-COLUMN SPLIT STUDIO SPEC SHOWCASE (#efefef | #e6e6e6)
      ===================================================================== */}
      <section id="thiet-bi-pro" className="grid grid-cols-1 md:grid-cols-2">
        {data.specPanels.map((panel) => (
          <div
            key={panel.id}
            style={{ backgroundColor: panel.bgColor }}
            className="flex flex-col items-center justify-between px-6 py-12 text-center"
          >
            <div className="flex h-72 w-full max-w-lg items-center justify-center overflow-hidden">
              <img
                src={panel.image}
                alt={panel.modelName}
                className="h-64 w-full max-w-md rounded object-cover shadow-md transition duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                {panel.modelName}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-gray-600">
                {panel.skuCode}
              </p>
              <p className="mt-0.5 text-[10px] text-gray-400">
                {panel.levelsLabel}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* =====================================================================
          6. EDITORIAL SECTIONS 2 & 3 WITH DUAL RED-OUTLINED BUTTONS & COLLAGES
      ===================================================================== */}
      {data.editorialSections.slice(1).map((sec) => (
        <section
          key={sec.id}
          className="mx-auto max-w-5xl px-4 py-10 text-center"
        >
          <h2
            className={`text-sm font-bold uppercase tracking-widest ${
              sec.titleColor === "red" ? "text-[#e5322d]" : "text-gray-700"
            }`}
          >
            {sec.title}
          </h2>
          <p className="mx-auto mt-1.5 max-w-lg text-xs leading-relaxed text-gray-500">
            {sec.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="#sale-grid"
              className="border border-[#e5322d] px-5 py-1.5 text-[11px] font-semibold text-[#e5322d] transition hover:bg-[#e5322d] hover:text-white"
            >
              {sec.primaryBtn}
            </a>
            <a
              href="#sale-grid"
              className="border border-[#e5322d] px-5 py-1.5 text-[11px] font-semibold text-[#e5322d] transition hover:bg-[#e5322d] hover:text-white"
            >
              {sec.secondaryBtn}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="mx-auto w-full max-w-xs -rotate-1 overflow-hidden bg-gray-100 shadow-md">
              <img
                src={sec.leftImage}
                alt={sec.title}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="mx-auto w-full max-w-xs rotate-1 overflow-hidden bg-gray-100 shadow-md">
              <img
                src={sec.rightImage}
                alt={sec.title}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </section>
      ))}

      {/* =====================================================================
          7. "SALE" 4x2 BORDERED 8-ITEM GRID + 16-LOGO LUXURY BRAND MATRIX
      ===================================================================== */}
      <section id="sale-grid" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#e5322d]">
            {data.saleSectionTitle}
          </h2>
          <div className="mt-3">
            <button
              type="button"
              onClick={() =>
                notify("Đang hiển thị toàn bộ danh mục thiết bị & phụ kiện Sale!")
              }
              className="border border-[#e5322d] px-6 py-1.5 text-[11px] font-semibold text-[#e5322d] transition hover:bg-[#e5322d] hover:text-white"
            >
              {data.saleSectionButton}
            </button>
          </div>
        </div>

        {/* 4x2 Bordered Product Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.saleProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedSaleItem(item)}
              className="group relative flex cursor-pointer flex-col justify-between border border-gray-200 bg-white p-4 text-center transition hover:border-[#e5322d] hover:shadow-md"
            >
              {item.isOnSale && (
                <span className="absolute left-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#e5322d] text-[10px] font-bold text-white">
                  Sale!
                </span>
              )}
              <div className="flex h-52 items-center justify-center overflow-hidden bg-[#f6f6f6] p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-gray-400">
                  {item.category}
                </span>
                <h3 className="mt-1 line-clamp-1 text-[11px] font-bold uppercase text-gray-800 group-hover:text-[#e5322d]">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs font-extrabold text-[#e5322d]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 8x2 Luxury Partner Brand Matrix */}
        <div
          id="thuong-hieu"
          className="mt-12 grid grid-cols-2 border-t border-l border-gray-200 sm:grid-cols-4 lg:grid-cols-8"
        >
          {data.luxuryBrands.map((brand) => (
            <div
              key={brand}
              onClick={() => notify(`Lọc sản phẩm thuộc thương hiệu ${brand}`)}
              className="flex h-16 cursor-pointer items-center justify-center border-r border-b border-gray-200 bg-white px-2 text-center font-serif text-xs font-black tracking-wider text-gray-800 transition hover:bg-gray-50 hover:text-[#e5322d]"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. "ƯU ĐÃI GIẢM ĐẾN 30% TÀI KHOẢN MỚI" + SCOOTER DELIVERY GRAPHIC
      ===================================================================== */}
      <section className="relative overflow-hidden py-14">
        {/* Soft Red Ambient Radial Glow */}
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#e5322d]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
          {/* Left: Offer Text + Red Button + 4 Trust Icons */}
          <div className="lg:col-span-6">
            <p className="text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-xl">
              KHUYẾN MÃI{" "}
              <span className="text-[#e5322d]">
                {data.newAccountOffer.discountText}
              </span>
            </p>
            <h2 className="mt-1 text-4xl font-black uppercase tracking-tight text-[#111111] sm:text-5xl">
              {data.newAccountOffer.headline}
            </h2>
            <button
              type="button"
              onClick={() =>
                notify(
                  "Chào mừng thành viên mới! Voucher giảm 30% đã được kích hoạt.",
                )
              }
              className="mt-5 rounded-xs bg-[#e5322d] px-6 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow transition hover:bg-[#c4221e]"
            >
              {data.newAccountOffer.buttonLabel}
            </button>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {data.newAccountOffer.perks.map((perk) => (
                <div
                  key={perk.id}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-md">
                    {perk.icon}
                  </div>
                  <span className="mt-2 text-[11px] font-semibold text-gray-700">
                    {perk.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Delivery Scooter Illustration with Floating Pill Badges */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            {/* Floating Pill 1 */}
            <div className="absolute left-4 top-2 z-20 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-[11px] font-bold text-[#e5322d] shadow-md">
              🛍 {data.newAccountOffer.floatingPills[1]}
            </div>
            {/* Floating Pill 2 */}
            <div className="absolute right-6 -top-2 z-20 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-[11px] font-bold text-emerald-600 shadow-md">
              👤 {data.newAccountOffer.floatingPills[0]}
            </div>
            {/* Floating Pill 3 */}
            <div className="absolute bottom-2 right-10 z-20 rounded-full border border-amber-200 bg-white px-4 py-1.5 text-[11px] font-bold text-amber-600 shadow-md">
              🏷 {data.newAccountOffer.floatingPills[2]}
            </div>

            {/* Express Delivery Scooter Graphic Card */}
            <div className="relative flex h-64 w-full max-w-md flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-red-50 p-6 shadow-inner">
              <div className="text-7xl">🛵</div>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-widest text-[#e5322d]">
                MONASTYLISH EXPRESS DELIVERY
              </p>
              <p className="text-[11px] text-gray-500">
                Giao dụng cụ Salon & mỹ phẩm tóc hỏa tốc 2H nội thành
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. WHITE FOOTER WITH RED OVAL LOGO + EMBEDDED MAP + DARK COPYRIGHT BAR
      ===================================================================== */}
      <footer id="lien-he" className="border-t border-gray-200 bg-white pt-12">
        <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Logo + Contact */}
            <div className="lg:col-span-3">
              <MonaStylishOvalLogo />
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li>📍 {data.business.address}</li>
                <li>📞 {primaryPhone}</li>
                <li>✉️ {primaryEmail}</li>
              </ul>
            </div>

            {/* Col 2: MENU */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#e5322d]">
                DANH MỤC
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                <li>Cửa hàng thiết bị</li>
                <li>Thương hiệu</li>
                <li>Phụ kiện Salon</li>
                <li>Phong cách tóc</li>
                <li>Khóa học cắt tóc</li>
              </ul>
            </div>

            {/* Col 3: VỀ CHÚNG TÔI */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#e5322d]">
                VỀ CHÚNG TÔI
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                <li>Trang chủ</li>
                <li>Học viện MonaStylish</li>
                <li>Liên hệ</li>
                <li>Tin tức xu hướng</li>
              </ul>
            </div>

            {/* Col 4: PHỤ KIỆN */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#e5322d]">
                PHỤ KIỆN TÓC
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                <li>Hộp đựng kéo Pro</li>
                <li>Bộ vệ sinh tông đơ</li>
                <li>Áo choàng cắt tóc</li>
                <li>Lược phân chia tóc</li>
              </ul>
            </div>

            {/* Col 5: Map Card */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#f4f6f8] p-3 shadow-xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-800">
                  <span>📍 MonaStylish Academy</span>
                  <span className="text-[#2563eb]">Chỉ đường ↗</span>
                </div>
                <p className="mt-1 text-[10px] text-gray-500">
                  1073/23 Cách Mạng Tháng 8, Q.Tân Bình
                </p>
                <div className="mt-2 flex h-28 items-center justify-center rounded bg-gradient-to-br from-emerald-100 via-blue-50 to-amber-100 text-xs font-bold text-gray-700">
                  🗺 Bản đồ Học viện & Showroom
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dark Copyright Bar (#1a1a1a) */}
        <div className="bg-[#1a1a1a] py-3 text-center text-[11px] text-gray-300">
          © Thiết Kế Và Lập Trình Bởi{" "}
          <span className="font-bold text-white">{data.business.name}</span>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
