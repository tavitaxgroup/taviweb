"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type SalonToc13Data,
  type MonaFashionProductCard,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

/**
 * Split Boxed Logo `[MONA][FASHION]` matching ST016-salon_toc_13.png
 */
function MonaFashionSplitLogo() {
  return (
    <div className="inline-flex items-center border-2 border-[#111111] text-xs font-black tracking-widest uppercase">
      <span className="bg-[#111111] px-2.5 py-1.5 text-white">MONA</span>
      <span className="bg-white px-2.5 py-1.5 text-[#111111]">FASHION</span>
    </div>
  );
}

/**
 * Rounded-2xl Product Card with Orange "Sale" Circle Badge matching ST016
 */
function RoundedSalonProductCard({
  item,
  onSelect,
}: {
  item: MonaFashionProductCard;
  onSelect: (card: MonaFashionProductCard) => void;
}) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-3.5 shadow-2xs transition hover:-translate-y-1 hover:border-[#f25a29] hover:shadow-md"
    >
      {item.isSale && (
        <span className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#f25a29] text-[10px] font-extrabold text-white shadow">
          Sale
        </span>
      )}
      <div className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-[#f7f7f7] p-3">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full rounded-lg object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 text-left">
        <h3 className="line-clamp-1 text-[11px] font-medium text-gray-600 group-hover:text-[#f25a29]">
          {item.name}
        </h3>
        <div className="mt-1 flex flex-wrap items-baseline gap-1.5 text-xs">
          {item.originalPrice && (
            <span className="text-[10px] text-gray-400 line-through">
              {item.originalPrice}
            </span>
          )}
          <span className="font-extrabold text-[#111111]">
            {item.priceRange}
          </span>
        </div>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(mockData, incomingData);

  const [activeTopTab, setActiveTopTab] = useState<"best-seller" | "giam-gia">(
    "best-seller",
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] =
    useState<MonaFashionProductCard | null>(null);
  const [cartCount, setCartCount] = useState(2);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactNote, setContactNote] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const primaryPhone = data.business.phone[0] || "0313728397";
  const primaryEmail = data.business.email[0] || "info@themona.global";

  const filteredNewest = selectedCategory
    ? data.newestProducts.filter((p) => p.category === selectedCategory)
    : data.newestProducts;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#f25a29] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-xl border border-[#f25a29] bg-[#141414] px-5 py-3 text-xs font-bold text-white shadow-2xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f25a29] text-white">
            ✓
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Product / Service Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border-2 border-[#f25a29] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#f25a29] text-xs font-bold text-white"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#f7f7f7] p-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-60 w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded-full bg-orange-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#f25a29]">
                    {selectedProduct.category}
                  </span>
                  <h3 className="mt-2 text-base font-extrabold text-[#111111]">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#f25a29]">
                      {selectedProduct.priceRange}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {selectedProduct.summary}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    notify(
                      `Đã thêm "${selectedProduct.name}" vào giỏ dịch vụ MonaFashion!`,
                    );
                    setSelectedProduct(null);
                  }}
                  className="mt-6 w-full rounded-full bg-[#f25a29] py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#d84819]"
                >
                  ĐẶT LỊCH / MUA NGAY &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. WHITE HEADER + FRAMED ORANGE BRUSH-SPLASH "BIG SALE" HERO
      ===================================================================== */}
      <header id="trang-chu" className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#trang-chu">
            <MonaFashionSplitLogo />
          </a>

          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-wider md:flex">
            {data.navigation.map((item: any, idx: number) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  idx === 0
                    ? "text-[#f25a29]"
                    : "text-gray-700 transition hover:text-[#f25a29]"
                }
              >
                {item.label}
                {idx === 2 ? " ⌄" : ""}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm text-gray-800">
            <button
              type="button"
              onClick={() =>
                notify("Tìm kiếm kiểu tóc, dịch vụ makeup hoặc phụ kiện!")
              }
              aria-label="Tìm kiếm"
              className="hover:text-[#f25a29]"
            >
              🔍
            </button>
            <button
              type="button"
              onClick={() =>
                notify("Tài khoản thành viên MonaFashion giảm ngay 50%!")
              }
              aria-label="Tài khoản"
              className="hover:text-[#f25a29]"
            >
              👤
            </button>
            <button
              type="button"
              onClick={() =>
                notify(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm!`)
              }
              aria-label="Giỏ hàng"
              className="relative hover:text-[#f25a29]"
            >
              🛒
              <span className="ml-0.5 rounded-full bg-[#f25a29] px-1.5 py-0.2 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Framed Orange Brush-Splash "BIG SALE UP TO 50% OFF" Hero */}
        <div className="bg-[#f3f4f6] px-4 py-6 sm:py-10">
          <div className="relative mx-auto max-w-5xl border-[8px] border-[#111111] bg-white px-6 py-10 text-center shadow-xl sm:px-12 sm:py-14">
            {/* Vibrant Orange Paint Brush Splash Backdrop */}
            <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center rounded-[36px] bg-gradient-to-r from-[#ff6a33] via-[#f25a29] to-[#ff5722] px-6 py-10 text-white shadow-inner sm:py-12">
              <p className="text-lg font-extrabold uppercase tracking-[0.2em] text-white sm:text-2xl">
                {data.heroTopLabel}
              </p>
              <h1 className="mt-1 font-sans text-6xl font-black uppercase leading-none tracking-tight text-white drop-shadow sm:text-8xl">
                {data.heroMainHeadline}
              </h1>
              <p className="mt-2 text-base font-extrabold uppercase tracking-[0.18em] text-white sm:text-2xl">
                {data.heroBottomLabel}
              </p>
            </div>
          </div>
          {/* Slider Dots */}
          <div className="mt-4 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="h-2 w-2 rounded-full bg-gray-400" />
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. 12 PILL-SHAPED CATEGORY CHIPS + TABS (BEST SELLER | GIẢM GIÁ) + 5 CARDS
      ===================================================================== */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-6 sm:px-6">
        {/* 6x2 Pill Category Chips */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {data.categoryChips.map((chip) => {
            const isSelected = selectedCategory === chip.label;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() =>
                  setSelectedCategory((prev) =>
                    prev === chip.label ? null : chip.label,
                  )
                }
                className={`flex items-center gap-2.5 rounded-full border p-1.5 pr-3 text-left transition ${
                  isSelected
                    ? "border-[#f25a29] bg-orange-50 text-[#f25a29]"
                    : "border-gray-300 bg-white text-gray-800 hover:border-[#f25a29]"
                }`}
              >
                <img
                  src={chip.image}
                  alt={chip.label}
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />
                <span className="line-clamp-2 text-[10px] font-extrabold uppercase leading-tight">
                  {chip.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Centered Pill Tabs: BEST SELLER | GIẢM GIÁ */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {data.topTabs.map((tab) => {
            const isActive = activeTopTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTopTab(tab.id as any)}
                className={`rounded-full border px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider transition ${
                  isActive
                    ? "border-[#f25a29] text-[#f25a29]"
                    : "border-gray-300 text-gray-600 hover:border-[#f25a29]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 5-Column Top Featured Product Row */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {data.topTabProducts.map((item) => (
            <RoundedSalonProductCard
              key={item.id}
              item={item as any}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. CRISS-CROSSED DIAGONAL MARQUEE RIBBONS (ORANGE #f25a29 + BLACK #181818)
      ===================================================================== */}
      <div className="relative my-10 overflow-hidden py-8">
        {/* Top Tilted Orange Ribbon */}
        <div className="-mx-8 -rotate-2 bg-[#f25a29] py-3 text-center text-2xl font-normal tracking-wide text-white shadow-md sm:text-3xl">
          <div className="whitespace-nowrap">
            {data.marqueeText} &nbsp; {data.marqueeText}
          </div>
        </div>
        {/* Overlapping Black Ribbon */}
        <div className="-mx-8 -mt-4 rotate-1 bg-[#181818] py-3 text-center text-2xl font-normal tracking-wide text-white shadow-lg sm:text-3xl">
          <div className="whitespace-nowrap">
            {data.marqueeText} &nbsp; {data.marqueeText}
          </div>
        </div>
      </div>

      {/* =====================================================================
          4. "SẢN PHẨM MỚI NHẤT" (ORANGE TITLE + XEM TẤT CẢ PILL + 14 CARDS)
      ===================================================================== */}
      <section id="san-pham-moi" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-extrabold text-[#f25a29] sm:text-2xl">
              {data.newestSectionTitle}
            </h2>
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="rounded-full bg-orange-100 px-3 py-0.5 text-[11px] font-bold text-[#f25a29]"
              >
                {selectedCategory} ✕
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedCategory(null);
              notify("Đang hiển thị tất cả sản phẩm & gói tạo kiểu mới nhất!");
            }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-50 py-1 pl-1.5 pr-4 text-[11px] font-bold uppercase text-[#f25a29] transition hover:bg-[#f25a29] hover:text-white"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f25a29] text-white">
              ›
            </span>
            <span>XEM TẤT CẢ</span>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {filteredNewest.map((item) => (
            <RoundedSalonProductCard
              key={item.id}
              item={item as any}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. DARK FULL-WIDTH COUNTDOWN BANNER ("ƯU ĐÃI LÊN TỚI 35%")
      ===================================================================== */}
      <section className="my-10 bg-[#111111] py-14 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-10 px-4 sm:px-6 md:flex-row">
          {/* Left Portrait Card with Orange Offset Corner Shadow */}
          <div className="relative shrink-0">
            <div className="absolute -bottom-2.5 -left-2.5 h-full w-full rounded-2xl bg-[#f25a29]" />
            <img
              src={data.countdownBanner.image}
              alt={data.countdownBanner.title}
              className="relative z-10 h-64 w-52 rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Right Heading + 5 Metallic 3D Circular Dials + Orange CTA */}
          <div>
            <h2 className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
              {data.countdownBanner.title}
            </h2>
            <p className="mt-1.5 max-w-md text-xs text-gray-300">
              {data.countdownBanner.subtitle}
            </p>

            {/* 5 Circular Metallic Countdown Dials */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                { val: data.countdownBanner.timer.weeks, label: "TUẦN" },
                { val: data.countdownBanner.timer.days, label: "NGÀY" },
                { val: data.countdownBanner.timer.hours, label: "GIỜ" },
                { val: data.countdownBanner.timer.minutes, label: "PHÚT" },
                { val: data.countdownBanner.timer.seconds, label: "GIÂY" },
              ].map((dial) => (
                <div
                  key={dial.label}
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-gray-400 bg-gradient-to-b from-white to-gray-200 text-[#111111] shadow-lg"
                >
                  <span className="text-lg font-black leading-none">
                    {dial.val}
                  </span>
                  <span className="mt-0.5 text-[9px] font-bold uppercase text-gray-600">
                    {dial.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="#spotlight"
                className="inline-flex items-center rounded-lg bg-[#f25a29] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow transition hover:bg-[#ff6b3d]"
              >
                {data.countdownBanner.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. "SPOTLIGHT" SECTION (ORANGE TITLE + XEM TẤT CẢ + 10 ROUNDED CARDS)
      ===================================================================== */}
      <section id="spotlight" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-[#f25a29] sm:text-2xl">
            {data.spotlightSectionTitle}
          </h2>
          <button
            type="button"
            onClick={() => notify("Đang hiển thị trọn bộ sản phẩm Spotlight!")}
            className="inline-flex items-center gap-2 rounded-full bg-orange-50 py-1 pl-1.5 pr-4 text-[11px] font-bold uppercase text-[#f25a29] transition hover:bg-[#f25a29] hover:text-white"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f25a29] text-white">
              ›
            </span>
            <span>XEM TẤT CẢ</span>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {data.spotlightProducts.map((item) => (
            <RoundedSalonProductCard
              key={item.id}
              item={item as any}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. "VỀ MONA FASHION" (4 BLACK ICONS + ARCHED PORTRAIT & CONTACT FORM)
      ===================================================================== */}
      <section id="ve-mona" className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-[#111111]">
            {data.aboutSectionHeading}
          </h2>
          <p className="mt-1 text-xs text-gray-500">{data.aboutSectionSub}</p>
        </div>

        {/* 4 Black Circular Icon Perks */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.valuePerks.map((perk) => (
            <div
              key={perk.id}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-lg text-white">
                {perk.iconType === "heart" && "♥"}
                {perk.iconType === "dollar" && "$"}
                {perk.iconType === "circle" && "●"}
                {perk.iconType === "star" && "★"}
              </div>
              <h3 className="mt-3 text-xs font-extrabold uppercase text-[#111111]">
                {perk.title}
              </h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

        {/* Split Asymmetric Rounded Portrait Left + Contact Form Right */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-tl-[64px] rounded-br-[64px] shadow-xl">
              <img
                src={data.contactPortraitImage}
                alt="MonaFashion Hair & Style"
                className="h-96 w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#111111]">
              {data.contactFormHeading}
            </h3>
            <p className="mt-1 text-xs font-extrabold uppercase text-[#111111]">
              {data.contactFormSubheading}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSent(true);
                notify(
                  "Đã gửi lời nhắn thành công! MonaFashion sẽ phản hồi bạn ngay.",
                );
              }}
              className="mt-4 space-y-3"
            >
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Họ và tên *"
                className="w-full rounded border border-gray-200 px-3.5 py-2 text-xs focus:border-[#f25a29] focus:outline-none"
              />
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Email *"
                className="w-full rounded border border-gray-200 px-3.5 py-2 text-xs focus:border-[#f25a29] focus:outline-none"
              />
              <input
                type="tel"
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Số điện thoại *"
                className="w-full rounded border border-gray-200 px-3.5 py-2 text-xs focus:border-[#f25a29] focus:outline-none"
              />
              <textarea
                rows={3}
                value={contactNote}
                onChange={(e) => setContactNote(e.target.value)}
                placeholder="Lời nhắn hoặc kiểu tóc bạn muốn tư vấn..."
                className="w-full rounded border border-gray-200 px-3.5 py-2 text-xs focus:border-[#f25a29] focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-orange-50 py-1.5 pl-1.5 pr-6 text-xs font-extrabold uppercase text-[#f25a29] transition hover:bg-[#f25a29] hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f25a29] text-white">
                  ›
                </span>
                <span>GỬI ĐI</span>
              </button>
              {contactSent && (
                <p className="text-xs font-bold text-emerald-600">
                  ✓ Cảm ơn bạn! Chuyên viên tư vấn đã nhận được yêu cầu.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. "ƯU ĐÃI GIẢM ĐẾN 50% TÀI KHOẢN MỚI" + 3D SMARTPHONE SHOPPING GRAPHIC
      ===================================================================== */}
      <section className="relative overflow-hidden py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12">
          {/* Left: Offer Text + 4 Trust Badges */}
          <div className="lg:col-span-6">
            <p className="text-lg font-bold uppercase text-gray-800">
              ƯU ĐÃI{" "}
              <span className="text-[#f25a29]">GIẢM ĐẾN 50%</span>
            </p>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-tight text-gray-800 sm:text-4xl">
              {data.newAccountPromo.mainHeading}
            </h2>
            <button
              type="button"
              onClick={() =>
                notify("Đã kích hoạt gói ưu đãi 50% dành cho Tài khoản mới!")
              }
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-50 py-1 pl-1.5 pr-5 text-xs font-bold uppercase text-[#f25a29] shadow-2xs transition hover:bg-[#f25a29] hover:text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f25a29] text-white">
                ›
              </span>
              <span>{data.newAccountPromo.buttonLabel}</span>
            </button>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {data.newAccountPromo.trustBadges.map((tb) => (
                <div
                  key={tb.id}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl shadow-xs">
                    {tb.icon}
                  </div>
                  <span className="mt-2 text-[10px] font-bold text-gray-700">
                    {tb.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Smartphone E-Commerce Visual with Floating Pills */}
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="absolute right-6 -top-2 z-20 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-bold text-emerald-600 shadow-md">
              👤 Khách hàng tin tưởng
            </div>
            <div className="absolute left-2 top-1/2 z-20 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-bold text-[#f25a29] shadow-md">
              🛍 Sản phẩm chính hãng
            </div>
            <div className="absolute bottom-0 right-8 z-20 rounded-full border border-amber-200 bg-white px-4 py-1.5 text-xs font-bold text-amber-600 shadow-md">
              % Vô vàn ưu đãi
            </div>

            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-[32px] border-4 border-gray-800 bg-gradient-to-b from-[#ff9f43] to-[#f25a29] p-6 text-center text-white shadow-2xl">
              <span className="text-5xl">📱</span>
              <span className="mt-2 text-sm font-black uppercase">
                MONAFASHION APP
              </span>
              <span className="mt-1 rounded-full bg-white px-4 py-1 text-[10px] font-extrabold text-[#f25a29]">
                MUA NGAY -50%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. SOFT CREAM FOOTER (#fdf6ee) + SOLID ORANGE COPYRIGHT BAR (#f25a29)
      ===================================================================== */}
      <footer id="lien-he" className="bg-[#fdf6ee] pt-12">
        <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Split Logo + Contact */}
            <div className="lg:col-span-4">
              <MonaFashionSplitLogo />
              <ul className="mt-4 space-y-2 text-xs text-gray-700">
                <li>📍 {data.business.address}</li>
                <li>📞 {primaryPhone}</li>
                <li>✉️ {primaryEmail}</li>
              </ul>
            </div>

            {/* Col 2: DỊCH VỤ */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold uppercase text-[#111111]">
                DỊCH VỤ
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                <li>Chăm sóc khách hàng</li>
                <li>Bảo hành kiểu tóc</li>
                <li>Thanh toán linh hoạt</li>
                <li>Phục hồi – Bảo dưỡng tóc</li>
              </ul>
            </div>

            {/* Col 3: CHÍNH SÁCH & HỖ TRỢ */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold uppercase text-[#111111]">
                CHÍNH SÁCH & HỖ TRỢ
              </h4>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-600">
                <li>Hướng dẫn đặt lịch & mua hàng</li>
                <li>Hướng dẫn trả góp 0%</li>
                <li>Chính sách giao hàng</li>
                <li>Quy chế hoạt động</li>
                <li>Chính sách bảo mật thông tin</li>
                <li>Hóa đơn điện tử</li>
              </ul>
            </div>

            {/* Col 4: Rounded Map Card */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border-2 border-[#f25a29]/40 bg-white p-3 shadow-xs">
                <p className="text-[11px] font-bold text-gray-800">
                  📍 MonaFashion Studio
                </p>
                <p className="text-[10px] text-gray-500">
                  1073/23 Cách Mạng Tháng 8, Q.Tân Bình
                </p>
                <div className="mt-2 flex h-24 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-100 via-amber-50 to-emerald-50 text-xs font-bold text-[#f25a29]">
                  🗺 Xem bản đồ đường đi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Solid Orange Copyright Bar (#f25a29) */}
        <div className="bg-[#f25a29] py-2.5 text-center text-xs font-semibold text-white">
          © Thiết kế và lập trình bởi{" "}
          <span className="font-extrabold">{data.business.name}</span>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
