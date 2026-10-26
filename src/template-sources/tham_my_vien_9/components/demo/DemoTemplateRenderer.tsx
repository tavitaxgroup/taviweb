"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type ThamMyVien9Data,
  type CorvnProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

/**
 * Reusable Burgundy Brush-Stroke Section Banner matching TMV012-tham_my_vien_9.jpg
 */
function BrushStrokeBanner({ title }: { title: string }) {
  return (
    <div className="my-8 flex flex-col items-center justify-center text-center">
      <div className="relative inline-flex items-center justify-center px-10 py-2.5">
        {/* SVG Brush-Stroke Background */}
        <svg
          viewBox="0 0 360 64"
          className="pointer-events-none absolute inset-0 h-full w-full text-[#8f2424] drop-shadow-xs"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M14,12 C75,3 280,4 346,13 C356,18 358,34 349,47 C295,58 78,59 16,50 C5,44 3,22 14,12 Z" />
          <path
            d="M6,28 C40,18 320,18 355,27 C348,40 315,52 20,48 Z"
            opacity="0.35"
          />
        </svg>
        <h2 className="relative z-10 text-base font-extrabold uppercase tracking-[0.14em] text-white sm:text-lg">
          {title}
        </h2>
      </div>
    </div>
  );
}

/**
 * Reusable 4-Column Product Card with Green Discount Circle & Magenta Price
 */
function CorvnProductCard({
  product,
  onAddToCart,
  onQuickView,
}: {
  product: CorvnProductItem;
  onAddToCart: (item: CorvnProductItem) => void;
  onQuickView: (item: CorvnProductItem) => void;
}) {
  return (
    <div className="group flex flex-col justify-between rounded-sm border border-[#cce5d8] bg-white p-3.5 transition hover:border-[#229263] hover:shadow-md">
      <div>
        <div className="relative h-52 overflow-hidden bg-[#f9fbfa]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {product.discountBadge && (
            <span className="absolute left-2.5 top-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#229263] text-xs font-extrabold text-white shadow">
              {product.discountBadge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-[#229263]/90 py-2 transition duration-300 group-hover:translate-y-0">
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="rounded-xs bg-white px-3 py-1 text-[11px] font-bold text-[#229263] hover:bg-pink-50"
            >
              + Giỏ hàng
            </button>
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="rounded-xs border border-white/60 px-2.5 py-1 text-[11px] text-white hover:bg-white/20"
            >
              Chi tiết
            </button>
          </div>
        </div>

        <div className="mt-3.5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#229263]">
            {product.brand}
          </p>
          <h3 className="mt-1 line-clamp-2 min-h-[34px] text-xs font-medium leading-snug text-gray-700 group-hover:text-[#229263]">
            {product.name}
          </h3>
          <div className="mt-2 flex items-center justify-center gap-2">
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
            <span className="text-sm font-extrabold text-[#d61f69]">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<ThamMyVien9Data>(mockData, incomingData);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | null>(
    null,
  );
  const [cart, setCart] = useState<{ item: CorvnProductItem; qty: number }[]>([
    { item: data.favoriteProducts[0], qty: 1 },
    { item: data.skincareProducts[2], qty: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState<CorvnProductItem | null>(
    null,
  );
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleAddToCart = (item: CorvnProductItem) => {
    setCart((prev) => {
      const found = prev.find((entry) => entry.item.id === item.id);
      if (found) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, qty: entry.qty + 1 }
            : entry,
        );
      }
      return [...prev, { item, qty: 1 }];
    });
    setToastMsg(`Đã thêm "${item.name}" vào giỏ hàng CorVN!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filterBySearch = (list: CorvnProductItem[]) => {
    if (!searchTerm.trim()) return list;
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const totalCartItems = cart.reduce((acc, c) => acc + c.qty, 0);
  const testimonialsList = data.testimonials || [];
  const currentTestimonial =
    testimonialsList[activeTestimonialIdx % (testimonialsList.length || 1)] ||
    testimonialsList[0] ||
    { name: "", role: "", quote: "", avatar: "" };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#229263] selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-md border border-[#229263] bg-white px-4 py-3 text-xs font-bold text-[#1d7f55] shadow-xl">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#229263] text-white">
            ✓
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg border-2 border-[#229263] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setQuickViewItem(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#229263] hover:text-white"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative h-64 sm:h-full">
                <img
                  src={quickViewItem.image}
                  alt={quickViewItem.name}
                  className="h-full w-full object-cover"
                />
                {quickViewItem.discountBadge && (
                  <span className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#229263] text-xs font-extrabold text-white">
                    {quickViewItem.discountBadge}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded bg-[#e8f6ef] px-2.5 py-0.5 text-[11px] font-bold text-[#229263]">
                    {quickViewItem.brand}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-gray-900">
                    {quickViewItem.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2.5">
                    <span className="text-xl font-extrabold text-[#d61f69]">
                      {quickViewItem.price}
                    </span>
                    {quickViewItem.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {quickViewItem.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {quickViewItem.summary}
                  </p>
                  <ul className="mt-4 space-y-1 text-[11px] text-gray-600">
                    <li>✓ Nhập khẩu chính hãng Hàn Quốc 100%</li>
                    <li>✓ Miễn phí soi da & tư vấn phác đồ tại Viện CorVN</li>
                    <li>✓ Giao hàng COD toàn quốc – Kiểm tra trước khi nhận</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(quickViewItem);
                    setQuickViewItem(null);
                  }}
                  className="mt-5 w-full rounded bg-[#229263] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#19734d]"
                >
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#229263] px-6 py-4 text-white">
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider">
                  GIỎ HÀNG CORVN BEAUTY ({totalCartItems})
                </h3>
                <p className="text-[11px] text-emerald-100">
                  Cam kết chính hãng Hàn Quốc 100%
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-bold hover:bg-white/30"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {cart.map(({ item, qty }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded border border-gray-200 p-2.5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="mt-0.5 text-xs font-extrabold text-[#d61f69]">
                      {item.price} × {qty}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setCart((prev) =>
                        prev.filter((c) => c.item.id !== item.id),
                      )
                    }
                    className="text-xs text-gray-400 hover:text-red-500"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 p-5">
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  setToastMsg(
                    "Đặt hàng thành công! Chuyên viên CorVN sẽ liên hệ xác nhận ngay.",
                  );
                  setTimeout(() => setToastMsg(null), 4000);
                }}
                className="w-full rounded bg-[#8f2424] py-3 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#741b1b]"
              >
                TIẾN HÀNH ĐẶT HÀNG COD
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. WHITE BOTANICAL TOP HEADER + HERBAL GREEN NAV BAR (#229263)
      ===================================================================== */}
      <header id="trang-chu" className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row">
          {/* Left: Botanical Wreath Emblem + CorVN Logo */}
          <a href="#trang-chu" className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#229263]/40 bg-[#f2fbf6]">
              <svg
                viewBox="0 0 64 64"
                className="h-11 w-11 text-[#229263]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="32" cy="32" r="24" strokeDasharray="4 3" />
                <path
                  d="M20 38c4-10 12-16 24-18-2 12-8 20-18 24-3 1-5-3-6-6z"
                  fill="#cdebd8"
                />
              </svg>
              <span className="absolute font-serif text-xs font-extrabold tracking-tighter text-[#1d7f55]">
                CorVN
              </span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-extrabold tracking-tight text-[#229263]">
                CorVN
              </span>
              <span className="block text-[11px] font-medium text-gray-500">
                Thẩm Mỹ & Mỹ Phẩm Hàn Quốc
              </span>
            </div>
          </a>

          {/* Center: Mint-Green Search Input + Green Button */}
          <div className="flex w-full max-w-md items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={data.searchPlaceholder}
              className="w-full rounded-l border border-[#bfe3d0] bg-[#d7efe2]/60 px-4 py-2 text-xs text-gray-800 placeholder-gray-500 focus:border-[#229263] focus:bg-white focus:outline-none"
            />
            <button
              type="button"
              className="flex items-center justify-center rounded-r bg-[#229263] px-4 py-2 text-white transition hover:bg-[#19754d]"
              aria-label="Tìm kiếm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Right: Green GIỎ HÀNG Button + HOTLINE */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 rounded bg-[#229263] px-3.5 py-2 text-xs font-bold uppercase text-white shadow-xs transition hover:bg-[#19754d]"
            >
              <span>GIỎ HÀNG</span>
              <span className="rounded-full bg-white px-1.5 py-0.2 text-[10px] font-extrabold text-[#229263]">
                {totalCartItems}
              </span>
            </button>
            <div className="text-right">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                HOTLINE TƯ VẤN:
              </span>
              <a
                href={`tel:${data.phone.replace(/\s+/g, "")}`}
                className="text-sm font-extrabold text-[#229263]"
              >
                {data.hotlineDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Herbal Green Navigation Bar (#229263) */}
        <div className="bg-[#229263] text-white shadow-xs">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-4">
            {data.navigation.map((item: any, idx: number) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                  idx === 0
                    ? "bg-white text-[#229263]"
                    : "text-white hover:bg-[#19754d]"
                }`}
              >
                {item.label}
                {idx >= 1 && idx <= 5 ? " ⌄" : ""}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. SPLIT PINK PAPER-CUT / BLACK NEON "SALE UP TO 40%" HERO BANNER
      ===================================================================== */}
      <section id="khuyen-mai" className="relative overflow-hidden bg-black">
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12">
          {/* Left Half: Soft Pastel Pink Torn-Paper Frame with Glossy Beauty Portrait */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#f7b5ca] p-6 lg:col-span-6">
            {/* Decorative layered pink paper-cut ring */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-[12px] border-[#f39db9] shadow-2xl sm:h-72 sm:w-72">
              <img
                src={data.heroLeftPortrait}
                alt="Thẩm mỹ & Trang điểm Hàn Quốc CorVN"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-6 rounded-full bg-white/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#d61f69] shadow">
              K-Beauty Glass Skin & Lip Makeup
            </div>
          </div>

          {/* Right Half: Pitch Black Background + 3D Neon Pink "SALE UP TO 40%" Typography */}
          <div className="relative flex min-h-[320px] flex-col items-center justify-center bg-[#080808] px-6 py-10 text-center text-white lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5c9e]">
              CORVN KOREAN BEAUTY FESTIVAL
            </span>
            <h1 className="mt-2 font-sans text-5xl font-black uppercase tracking-tight text-[#ff2e7e] drop-shadow-[0_6px_20px_rgba(255,46,126,0.55)] sm:text-6xl">
              SALE
            </h1>
            <p className="mt-1 text-2xl font-black uppercase tracking-widest text-white sm:text-3xl">
              UP TO <span className="text-[#ff2e7e]">40%</span>
            </p>
            <div className="mt-4 inline-block -rotate-2 bg-[#ff2e7e] px-6 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg">
              {data.heroSaleSubline}
            </div>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-300">
              {data.heroSubtitle}
            </p>
            <a
              href="#yeu-thich"
              className="mt-6 inline-flex items-center rounded-full border border-[#ff2e7e] bg-[#ff2e7e]/20 px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#ff2e7e]"
            >
              {data.heroCta} →
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. THƯƠNG HIỆU (BURGUNDY BRUSH BANNER + 8 KOREAN BRAND CARDS)
      ===================================================================== */}
      <section className="mx-auto max-w-6xl px-4 pt-6 pb-4 sm:px-6">
        <BrushStrokeBanner title={data.brandsSectionTitle} />

        {selectedBrandFilter && (
          <div className="mb-4 flex items-center justify-center gap-2 text-xs">
            <span>
              Đang lọc theo thương hiệu:{" "}
              <strong className="text-[#229263]">{selectedBrandFilter}</strong>
            </span>
            <button
              type="button"
              onClick={() => setSelectedBrandFilter(null)}
              className="rounded bg-gray-200 px-2 py-0.5 text-[11px] hover:bg-gray-300"
            >
              Bỏ lọc
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {data.brandCards.map((brand) => (
            <button
              key={brand.id}
              type="button"
              onClick={() =>
                setSelectedBrandFilter((prev) =>
                  prev === brand.name ? null : brand.name,
                )
              }
              style={{
                backgroundColor: brand.bgColor,
                color: brand.textColor,
              }}
              className="group flex h-28 flex-col items-center justify-center rounded-xs border border-[#bce0ce] p-4 text-center shadow-2xs transition hover:-translate-y-0.5 hover:border-[#229263] hover:shadow-md"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-75">
                {brand.origin}
              </span>
              <span className="mt-1 font-serif text-xl font-black tracking-wide sm:text-2xl">
                {brand.name}
              </span>
              <span className="mt-1 text-[10px] font-medium tracking-wider opacity-85">
                {brand.tag}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. MỸ PHẨM ĐƯỢC YÊU THÍCH (BRUSH BANNER + 4 PRODUCT CARDS)
      ===================================================================== */}
      <section id="yeu-thich" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <BrushStrokeBanner title={data.favoriteSectionTitle} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filterBySearch(data.favoriteProducts).map((product) => (
            <CorvnProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onQuickView={setQuickViewItem}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. TRANG ĐIỂM (BRUSH BANNER + 4 MAKEUP PRODUCT CARDS)
      ===================================================================== */}
      <section id="trang-diem" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <BrushStrokeBanner title={data.makeupSectionTitle} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filterBySearch(data.makeupProducts).map((product) => (
            <CorvnProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onQuickView={setQuickViewItem}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. CHĂM SÓC DA (BRUSH BANNER + 4 SKINCARE PRODUCT CARDS)
      ===================================================================== */}
      <section id="cham-soc-da" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <BrushStrokeBanner title={data.skincareSectionTitle} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filterBySearch(data.skincareProducts).map((product) => (
            <CorvnProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onQuickView={setQuickViewItem}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. TẠP CHÍ LÀM ĐẸP (BRUSH BANNER + 4 BLOG CARDS WITH GREEN DATE BADGE)
      ===================================================================== */}
      <section id="tap-chi" className="mx-auto max-w-6xl px-4 pt-4 pb-12 sm:px-6">
        <BrushStrokeBanner title={data.journalSectionTitle} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.journalPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden bg-white"
            >
              <div className="relative h-44 overflow-hidden rounded-xs bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {/* Top-Left Green Square Date Badge (29 Th8) */}
                <div className="absolute left-2.5 top-2.5 flex h-11 w-11 flex-col items-center justify-center rounded-xs bg-[#229263] text-white shadow">
                  <span className="text-xs font-extrabold leading-none">
                    {post.day}
                  </span>
                  <span className="mt-0.5 text-[10px] font-medium">
                    {post.month}
                  </span>
                </div>
              </div>
              <div className="pt-3 text-center">
                <h3 className="line-clamp-2 text-xs font-bold leading-snug text-gray-800 group-hover:text-[#229263]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. Ý KIẾN KHÁCH HÀNG (BOTANICAL PRESSED-FLOWERS BANNER + AVATAR REVIEW)
      ===================================================================== */}
      <section className="relative overflow-hidden py-14">
        {/* Pressed Botanical Flowers Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.testimonialBannerBg})` }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <BrushStrokeBanner title={data.testimonialSectionTitle} />

          <div className="mt-4 flex flex-col items-center">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
            />
            <div className="mt-3 flex gap-1 text-amber-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="mt-3 max-w-2xl text-xs italic leading-relaxed text-gray-700 sm:text-sm">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>
            <p className="mt-3 text-xs font-extrabold text-[#1a1a1a]">
              {currentTestimonial.name}{" "}
              <span className="font-normal text-gray-600">
                / {currentTestimonial.role}
              </span>
            </p>

            {/* Carousel Switch Dots */}
            <div className="mt-5 flex items-center gap-2">
              {testimonialsList.map((t: any, idx: number) => (
                <button
                  key={t.name || idx}
                  type="button"
                  onClick={() => setActiveTestimonialIdx(idx)}
                  aria-label={`Đánh giá ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    idx === activeTestimonialIdx
                      ? "bg-[#8f2424] scale-125"
                      : "bg-gray-400/60 hover:bg-[#229263]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. SOFT MINT-GREEN 3-PERK STRIP (#cdebd8)
      ===================================================================== */}
      <div className="border-y border-[#b4dfc4] bg-[#cdebd8] py-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {data.servicePerks.map((perk) => (
            <div
              key={perk.id}
              className="flex items-center justify-center gap-3.5 text-left"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#229263] bg-white text-[#229263]">
                {perk.icon === "truck" && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zm0 0h8v-5l-3-4h-5v9z"
                    />
                  </svg>
                )}
                {perk.icon === "check" && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {perk.icon === "phone" && (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase text-gray-900">
                  {perk.title}
                </h3>
                <p className="text-xs text-gray-700">{perk.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          10. WHITE FOOTER WITH PINK COSMETIC LINE-ART ILLUSTRATIONS
      ===================================================================== */}
      <footer className="relative overflow-hidden bg-white pt-12 pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Col 1: Botanical Logo + Address & Contact */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#229263] bg-[#f2fbf6] font-serif text-xs font-extrabold text-[#229263]">
                  CorVN
                </div>
                <span className="font-serif text-xl font-extrabold text-[#229263]">
                  {data.companyName}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li>📍 {data.address}</li>
                <li>📞 {data.phone}</li>
                <li>✉️ {data.email}</li>
              </ul>
            </div>

            {/* Col 2: MENU */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900">
                MENU
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-600">
                {data.navigation.map((nav: any) => (
                  <a
                    key={nav.label}
                    href={nav.href}
                    className="hover:text-[#229263]"
                  >
                    {nav.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: ĐĂNG KÝ NEWSLETTER */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900">
                ĐĂNG KÝ
              </h3>
              <p className="mt-3 text-xs text-gray-600">
                Đăng ký để nhận được thông tin ưu đãi mới nhất từ chúng tôi.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (subscriberEmail.trim()) {
                    setSubscribed(true);
                    setSubscriberEmail("");
                  }
                }}
                className="mt-4 flex overflow-hidden rounded border border-gray-300"
              >
                <input
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Email..."
                  className="w-full px-3 py-2 text-xs text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#229263] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#19754d]"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-[11px] font-semibold text-[#229263]">
                  ✓ Đăng ký nhận ưu đãi làm đẹp CorVN thành công!
                </p>
              )}

              <div className="mt-4 flex items-center gap-2.5">
                {["f", "IG", "P", "YT"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() =>
                      setToastMsg(`Đang kết nối trang ${s} của Viện Thẩm Mỹ CorVN`)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs font-bold text-gray-700 hover:border-[#229263] hover:text-[#229263]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Pink Cosmetic Bottle Line-Art Vector Strip */}
          <div className="mt-8 border-t border-pink-100 pt-6">
            <svg
              viewBox="0 0 1200 70"
              className="h-12 w-full text-pink-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {Array.from({ length: 15 }).map((_, idx) => {
                const x = idx * 80 + 20;
                return (
                  <g key={idx} transform={`translate(${x}, 5)`}>
                    <rect x="8" y="18" width="22" height="42" rx="3" />
                    <rect x="13" y="8" width="12" height="10" />
                    <line x1="19" y1="2" x2="19" y2="8" />
                    <circle cx="19" cy="38" r="5" />
                    <rect x="42" y="26" width="18" height="34" rx="2" />
                    <path d="M45 26 L51 12 L57 26 Z" />
                  </g>
                );
              })}
            </svg>
            <p className="mt-2 text-center text-xs text-gray-500">
              © Bản quyền thuộc về{" "}
              <span className="font-bold text-[#229263]">
                {data.companyName}
              </span>
              . Hệ thống Thẩm mỹ & Phân phối Mỹ phẩm Hàn Quốc chính hãng.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default DemoTemplateRenderer;
