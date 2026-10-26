"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type SalonToc15Data,
  type FlexStyleProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<SalonToc15Data>(mockData, incomingData);

  const [activeTab, setActiveTab] = useState<
    "best-sellers" | "new-products" | "sales-products"
  >("best-sellers");
  const [activeMagFilter, setActiveMagFilter] = useState("Tất cả");
  const [selectedItem, setSelectedItem] =
    useState<FlexStyleProductItem | null>(null);
  const [cartCount, setCartCount] = useState(1);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [consultEmail, setConsultEmail] = useState("");
  const [consultDone, setConsultDone] = useState(false);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const filteredMagazine =
    activeMagFilter === "Tất cả"
      ? data.magazineArticles
      : data.magazineArticles.filter((a) => a.category === activeMagFilter);

  const primaryPhone = data.business.phone[0] || "0313728397";
  const primaryEmail = data.business.email[0] || "info@themona.global";

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#222222] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded bg-[#222222] px-5 py-3 text-xs font-medium text-white shadow-2xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9ed5dc] text-[10px] font-bold text-black">
            ✓
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Quick View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs hover:bg-black hover:text-white"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="bg-[#f4f5f7] p-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="h-60 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    FLEXSTYLE STUDIO
                  </span>
                  <h3 className="mt-1.5 text-lg font-bold text-[#222222]">
                    {selectedItem.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-base font-extrabold text-[#222222]">
                      {selectedItem.price}
                    </span>
                    {selectedItem.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {selectedItem.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-gray-600">
                    {selectedItem.summary}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    notify(
                      `Đã thêm "${selectedItem.name}" vào giỏ hàng FlexStyle!`,
                    );
                    setSelectedItem(null);
                  }}
                  className="mt-6 w-full bg-[#222222] py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#9ed5dc] hover:text-black"
                >
                  ĐẶT LỊCH / THÊM VÀO GIỎ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. WARM SAND HERO (#d9cbb8) WITH CENTERED NAV + 3-COL PROMO STRIP
      ===================================================================== */}
      <header id="trang-chu" className="relative bg-[#d9cbb8]">
        {/* Transparent Navigation Bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-white sm:px-8">
          <button
            type="button"
            onClick={() => notify("Tìm kiếm bộ sưu tập tóc & thời trang FlexStyle")}
            aria-label="Tìm kiếm"
            className="text-xs hover:text-black"
          >
            🔍
          </button>

          <nav className="hidden items-center gap-7 text-[10px] font-bold uppercase tracking-[0.18em] md:flex">
            <a
              href="#trang-chu"
              className="border-b border-white pb-0.5 text-white"
            >
              TRANG CHỦ
            </a>
            <a href="#san-pham" className="text-white/90 hover:text-white">
              CỬA HÀNG
            </a>
            <a href="#lookbook" className="text-white/90 hover:text-white">
              VỀ CHÚNG TÔI
            </a>
            <a
              href="#trang-chu"
              className="px-3 font-serif text-lg font-black tracking-[0.22em] text-white"
            >
              MONA
            </a>
            <a href="#lookbook" className="text-white/90 hover:text-white">
              BỘ SƯU TẬP
            </a>
            <a href="#tap-chi" className="text-white/90 hover:text-white">
              TIN TỨC
            </a>
            <a href="#lien-he" className="text-white/90 hover:text-white">
              LIÊN HỆ
            </a>
          </nav>

          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => notify("Tài khoản khách hàng FlexStyle")}
              aria-label="Tài khoản"
            >
              👤
            </button>
            <button
              type="button"
              onClick={() =>
                notify(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm!`)
              }
              className="flex items-center gap-1"
            >
              <span>🛍</span>
              <span className="rounded-full bg-white px-1.5 text-[10px] font-bold text-[#222222]">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Hero Visual + Bottom-Left Translucent Box */}
        <div className="relative mx-auto flex min-h-[430px] max-w-6xl items-end px-4 pb-10 sm:px-6">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="pointer-events-none absolute right-8 bottom-0 h-[440px] w-auto max-w-md object-cover object-top"
          />

          {/* Bottom-Left Cream Box */}
          <div className="relative z-10 max-w-xs bg-[#efeae2]/95 p-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              {data.heroCollectionBox.eyebrow}
            </span>
            <h1 className="mt-1 text-xl font-medium text-[#222222]">
              {data.heroCollectionBox.title}
            </h1>
            <a
              href={data.hero.ctaLink}
              className="mt-4 inline-block bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#222222] shadow-2xs transition hover:bg-[#222222] hover:text-white"
            >
              {data.heroCollectionBox.buttonLabel}
            </a>
          </div>
        </div>

        {/* Bottom-Right Slider Arrows */}
        <div className="absolute right-4 bottom-0 z-20 flex bg-white/90 text-xs text-gray-700">
          <button
            type="button"
            onClick={() => notify("Chuyển slide trước")}
            className="px-3 py-2 hover:bg-black hover:text-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => notify("Chuyển slide tiếp theo")}
            className="px-3 py-2 hover:bg-black hover:text-white"
          >
            ›
          </button>
        </div>
      </header>

      {/* 3-Column Horizontal Promo Strip Below Hero */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {data.promoStripCards.map((card) => (
          <div
            key={card.id}
            style={{ backgroundColor: card.bgColor }}
            className="relative flex h-44 items-center justify-between overflow-hidden px-8"
          >
            <div className="z-10">
              <h3 className="text-lg font-light text-gray-700">
                {card.title}
              </h3>
              {card.subtitle && (
                <p className="text-lg font-light text-gray-700">
                  {card.subtitle}
                </p>
              )}
              <a
                href="#san-pham"
                className="mt-3 inline-block border-b border-gray-800 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:text-black"
              >
                {card.ctaLabel}
              </a>
            </div>
            <img
              src={card.image}
              alt={card.title}
              className="h-36 w-36 rounded-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* =====================================================================
          2. 3 MINIMALIST TABS + 4x2 CLEAN GREY-CARD CATALOG GRID
      ===================================================================== */}
      <section id="san-pham" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="flex items-center justify-center gap-8 border-b border-gray-100 pb-3 text-xs">
          {data.productTabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 transition ${
                  active
                    ? "border-b-2 border-[#222222] font-bold text-[#222222]"
                    : "text-gray-400 hover:text-[#222222]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {data.catalogItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer text-center"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#f4f5f7] p-4">
                {item.discountBadge && (
                  <span className="absolute left-2.5 top-2.5 bg-[#10b981] px-2 py-0.5 text-[9px] font-bold text-white">
                    {item.discountBadge}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-[11px] text-gray-500 group-hover:text-black">
                {item.name}
              </h3>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-xs">
                <span className="font-extrabold text-[#222222]">
                  {item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-[10px] text-gray-400 line-through">
                    {item.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. 2x2 CHECKERBOARD LOOKBOOK ("19SS WOMAN COLLECTION" & "19SS MAN COLLECTION")
      ===================================================================== */}
      <section id="lookbook" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Top Row: Woman Collection (Left Photo + Right Framed Photo on Rose Pink #f9c5d1) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          <div className="h-96 overflow-hidden bg-[#e5e7eb]">
            <img
              src={data.womanLookbook.leftImage}
              alt="Woman Lookbook Left"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-96 items-center justify-center bg-[#f9c5d1] p-10">
            <img
              src={data.womanLookbook.rightImage}
              alt="Woman Lookbook Right"
              className="h-full w-full max-w-xs object-cover shadow-lg"
            />
          </div>
          {/* Center Overlay Title */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-white drop-shadow-md">
            <span className="text-4xl font-thin tracking-widest sm:text-5xl">
              {data.womanLookbook.seasonCode}
            </span>
            <h2 className="text-3xl font-extrabold tracking-wide sm:text-5xl">
              Woman
            </h2>
            <p className="text-3xl font-extrabold tracking-wide sm:text-5xl">
              Collection
            </p>
          </div>
          <span className="absolute bottom-3 left-4 text-xs font-extrabold uppercase tracking-wider text-white">
            WOMAN
          </span>
          <span className="absolute bottom-3 right-4 text-xs font-extrabold uppercase tracking-wider text-[#222222]">
            WOMAN
          </span>
        </div>

        {/* Bottom Row: Man Collection (Left Framed Photo on Sky Blue #bce0fd + Right Photo) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          <div className="flex h-96 items-center justify-center bg-[#bce0fd] p-10">
            <img
              src={data.manLookbook.leftImage}
              alt="Man Lookbook Left"
              className="h-full w-full max-w-xs object-cover shadow-lg"
            />
          </div>
          <div className="h-96 overflow-hidden bg-[#d1d5db]">
            <img
              src={data.manLookbook.rightImage}
              alt="Man Lookbook Right"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Center Overlay Title */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center text-white drop-shadow-md">
            <span className="text-4xl font-thin tracking-widest sm:text-5xl">
              {data.manLookbook.seasonCode}
            </span>
            <h2 className="text-3xl font-extrabold tracking-wide sm:text-5xl">
              Man
            </h2>
            <p className="text-3xl font-extrabold tracking-wide sm:text-5xl">
              Collection
            </p>
          </div>
          <span className="absolute bottom-3 left-4 text-xs font-extrabold uppercase tracking-wider text-[#222222]">
            MAN
          </span>
          <span className="absolute bottom-3 right-4 text-xs font-extrabold uppercase tracking-wider text-white">
            MAN
          </span>
        </div>
      </section>

      {/* =====================================================================
          4. FULL-WIDTH MOODY HAIR BANNER ("CHỈ TRONG THÁNG NÀY / HOT !!! Giảm|")
      ===================================================================== */}
      <section className="relative my-10 h-64 overflow-hidden bg-[#555555]">
        <img
          src={data.monthlyHotBanner.backgroundImage}
          alt={data.monthlyHotBanner.topLabel}
          className="h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest">
            {data.monthlyHotBanner.topLabel}
          </span>
          <div className="mt-2 flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
            <span>{data.monthlyHotBanner.hotPrefix}</span>
            <span className="bg-white px-3 py-0.5 italic text-[#222222]">
              {data.monthlyHotBanner.boxedHighlight}
            </span>
          </div>
          <a
            href="#san-pham"
            className="mt-4 bg-white px-7 py-2 text-[10px] font-bold uppercase tracking-widest text-[#222222] transition hover:bg-[#222222] hover:text-white"
          >
            {data.monthlyHotBanner.buttonLabel}
          </a>
        </div>
      </section>

      {/* =====================================================================
          5. "NỔI BẬT" TICKER BAR + FILTER PILLS + 3x2 EDITORIAL MAGAZINE GRID
      ===================================================================== */}
      <section id="tap-chi" className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Top "Nổi bật" Horizontal Strip */}
        <div className="flex flex-wrap items-center justify-between border border-gray-200 bg-white">
          <div className="bg-[#222222] px-4 py-3 text-[11px] font-bold text-white">
            Nổi bật
          </div>
          <div className="grid flex-1 grid-cols-1 gap-2 px-3 py-1.5 sm:grid-cols-2 lg:grid-cols-4">
            {data.featuredTickerPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-7 w-9 shrink-0 object-cover"
                />
                <span className="line-clamp-1 text-[10px] text-gray-600">
                  {post.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Pills: Tất cả | Tạo mẫu tóc | Cảm hứng | Chăm sóc tóc */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {data.magazineFilters.map((filter) => {
            const isActive = activeMagFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveMagFilter(filter)}
                className={`px-4 py-1 text-[11px] font-medium transition ${
                  isActive
                    ? "bg-[#222222] text-white"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* 3x2 Editorial Magazine Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMagazine.map((art) => (
            <article
              key={art.id}
              className="flex flex-col justify-between border border-gray-100 bg-white shadow-2xs"
            >
              <div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-[11px] font-extrabold uppercase leading-snug text-[#222222]">
                    {art.title}
                  </h3>
                </div>
                <div className="h-60 overflow-hidden bg-gray-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block border-b border-gray-300 pb-0.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                    {art.category}
                  </span>
                  <p className="mt-2.5 text-[11px] leading-relaxed text-gray-500">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <button
                  type="button"
                  onClick={() => notify(`Đang xem bài viết: ${art.title}`)}
                  className="text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-black"
                >
                  ☑ XEM NGAY
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => notify("Đã tải toàn bộ chuyên mục Tạp chí FlexStyle!")}
            className="bg-[#222222] px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-black"
          >
            XEM THÊM
          </button>
        </div>
      </section>

      {/* =====================================================================
          6. AQUA-TEAL CONSULTATION BANNER (#9ed5dc) + MINIMALIST 4-COL FOOTER
      ===================================================================== */}
      <section className="mt-8 bg-[#9ed5dc] py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-xs text-gray-700">
            {data.consultationBanner.eyebrow}
          </p>
          <h2 className="mt-1 text-xl font-bold text-[#222222] sm:text-2xl">
            {data.consultationBanner.title}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (consultEmail.trim()) {
                setConsultDone(true);
                setConsultEmail("");
              }
            }}
            className="mx-auto mt-5 flex max-w-sm flex-col items-center gap-3"
          >
            <input
              type="email"
              value={consultEmail}
              onChange={(e) => setConsultEmail(e.target.value)}
              placeholder={data.consultationBanner.placeholder}
              className="w-full bg-white px-4 py-2.5 text-center text-xs text-gray-800 shadow-xs focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#222222] px-8 py-2 text-xs font-bold text-white transition hover:bg-black"
            >
              {data.consultationBanner.buttonLabel}
            </button>
          </form>
          {consultDone && (
            <p className="mt-2 text-xs font-bold text-[#222222]">
              ✓ Chuyên gia FlexStyle đã nhận thông tin và sẽ liên hệ tư vấn miễn phí!
            </p>
          )}
        </div>
      </section>

      {/* Clean White 4-Column Footer */}
      <footer id="lien-he" className="bg-white pt-12 pb-6 text-xs text-gray-500">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-serif text-lg font-black tracking-[0.2em] text-[#222222]">
                MONA
              </h3>
              <span className="block text-[9px] uppercase tracking-widest text-gray-400">
                — FLEXSTYLE —
              </span>
              <p className="mt-3 text-[11px] leading-relaxed">
                {data.business.tagline}
              </p>
              <div className="mt-4 flex gap-3 text-gray-700">
                <span>f</span>
                <span>🐦</span>
                <span>t</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#222222]">Về chúng tôi</h4>
              <ul className="mt-3 space-y-1.5 text-[11px]">
                <li>Thông tin mới nhất</li>
                <li>Giải đáp dịch vụ</li>
                <li>Liên hệ đặt lịch</li>
                <li>Hệ thống Studio</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#222222]">Cửa hàng</h4>
              <ul className="mt-3 space-y-1.5 text-[11px]">
                <li>Phụ kiện tóc</li>
                <li>Tinh dầu dưỡng</li>
                <li>Máy tạo kiểu</li>
                <li>Bộ sưu tập Nam</li>
                <li>Bộ sưu tập Nữ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#222222]">Liên hệ</h4>
              <ul className="mt-3 space-y-2 text-[11px]">
                <li>📍 {data.business.address}</li>
                <li>✉️ {primaryEmail}</li>
                <li>📞 {primaryPhone}</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-5 text-center text-[11px] text-gray-400">
            © Thiết kế website và lập trình bởi{" "}
            <strong className="text-[#222222]">{data.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
