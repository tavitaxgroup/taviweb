"use client";

import React, { useState } from "react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type NhaKhoa5Data,
  type VaniSmileProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<NhaKhoa5Data>(mockData, incomingData);

  const [activeTab, setActiveTab] = useState<"ban-chay" | "gia-tot" | "noi-bat">(
    "ban-chay",
  );
  const [cartItems, setCartItems] = useState<
    { product: VaniSmileProductItem; qty: number }[]
  >([
    { product: data.catalogProducts[0], qty: 1 },
    { product: data.catalogProducts[3], qty: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<VaniSmileProductItem | null>(null);
  const [bookingToast, setBookingToast] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredCatalog = data.catalogProducts.filter((item) => {
    const matchesTab =
      activeTab === "ban-chay"
        ? item.tab === "ban-chay"
        : activeTab === "gia-tot"
          ? item.tab === "gia-tot" || item.tab === "ban-chay"
          : item.tab === "noi-bat" || item.tab === "ban-chay";
    const matchesQuery =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  const displayedSixProducts = filteredCatalog.slice(0, 6);

  const handleAddToCart = (product: VaniSmileProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setBookingToast(`Đã thêm "${product.name}" vào giỏ dịch vụ & chăm sóc!`);
    setTimeout(() => setBookingToast(null), 3200);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#9b51b6] selection:text-white">
      {/* Floating Notification Toast */}
      {bookingToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-[#9b51b6] bg-[#141724] px-5 py-3.5 text-sm font-medium text-white shadow-2xl">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9b51b6] text-xs font-bold">
            ✓
          </span>
          <span>{bookingToast}</span>
        </div>
      )}

      {/* Product / Service Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/15 bg-[#141724] text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#9b51b6]"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
                {selectedProduct.badge && (
                  <span className="absolute left-3 top-3 rounded bg-[#9b51b6] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#c27be0]">
                    {selectedProduct.category}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-white">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-[#c27be0]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-300">
                    {selectedProduct.summary}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-gray-300">
                    <li>• Trực tiếp Bác sĩ Chuyên khoa Răng Hàm Mặt thăm khám</li>
                    <li>• Vật liệu & tinh chất nhập khẩu chính hãng Thụy Sĩ</li>
                    <li>• Bảo hành điện tử chính hãng tại hệ thống VaniSmile</li>
                  </ul>
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 rounded-full bg-[#8b45a6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#a255c0]"
                  >
                    Đặt lịch / Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Cart / Booking Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
          <div className="flex h-full w-full max-w-md flex-col bg-[#141724] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wide">
                  GIỎ DỊCH VỤ & SẢN PHẨM
                </h3>
                <p className="text-xs text-gray-400">
                  {totalCartCount} mục đã chọn tại {data.companyName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-white/10 p-2 text-sm hover:bg-[#8b45a6]"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {cartItems.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold leading-snug text-white">
                      {product.name}
                    </h4>
                    <p className="mt-1 text-xs font-bold text-[#c27be0]">
                      {product.price} × {qty}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.filter((i) => i.product.id !== product.id),
                      )
                    }
                    className="text-xs text-gray-400 hover:text-red-400"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 p-6">
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  setBookingToast(
                    "Đã gửi yêu cầu đặt hẹn & đơn hàng! Lễ tân VaniSmile sẽ gọi xác nhận sau 5 phút.",
                  );
                  setTimeout(() => setBookingToast(null), 4000);
                }}
                className="w-full rounded-full bg-[#8b45a6] py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#9b51b6]"
              >
                XÁC NHẬN ĐẶT LỊCH & THANH TOÁN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          1. DARK LUXURY MIDNIGHT HEADER + HERO + 3-PHOTO STRIP (#0d0f18)
      ===================================================================== */}
      <header
        id="trang-chu"
        className="relative overflow-hidden bg-[#0d0f18] text-white"
      >
        {/* Subtle ambient purple radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-[#8b45a6]/15 blur-[130px]" />

        {/* Top Utility & Brand Logo Row */}
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
          {/* Left: Login / Register */}
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <button
              type="button"
              onClick={() =>
                setBookingToast(
                  "Cổng thành viên VaniSmile VIP đã sẵn sàng phục vụ quý khách!",
                )
              }
              className="transition hover:text-[#c27be0]"
            >
              {data.topBarLoginLabel}
            </button>
          </div>

          {/* Center: Purple Silhouette Emblem + Script VaniSmile Logo */}
          <a
            href="#trang-chu"
            className="group flex flex-col items-center text-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Stylized Purple Arch / Smile Crown Silhouette */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#9b51b6]/40 to-[#5e2775]/20 ring-1 ring-[#9b51b6]/50">
                <svg
                  viewBox="0 0 48 48"
                  className="h-7 w-7 text-[#b968d9]"
                  fill="currentColor"
                >
                  <path d="M24 6C15.2 6 8 12.6 8 20.8c0 5.4 3.2 10.1 8 12.7l2.5-4.3c-3.3-1.8-5.5-5-5.5-8.4 0-5.4 4.9-9.8 11-9.8s11 4.4 11 9.8c0 3.4-2.2 6.6-5.5 8.4l2.5 4.3c4.8-2.6 8-7.3 8-12.7C40 12.6 32.8 6 24 6zm-7 17c1.7 3.6 4.2 5.5 7 5.5s5.3-1.9 7-5.5H17z" />
                </svg>
              </div>
              <span className="-ml-3 font-serif text-3xl italic tracking-wide text-white drop-shadow-[0_2px_10px_rgba(155,81,182,0.6)]">
                {data.brandScriptTitle}
              </span>
            </div>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#b886ce]">
              {data.brandTagline}
            </span>
          </a>

          {/* Right: Search & Shopping Bag */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Tìm kiếm"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-200 transition hover:border-[#9b51b6] hover:text-[#c27be0]"
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
              onClick={() => setIsCartOpen(true)}
              aria-label="Giỏ dịch vụ"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-200 transition hover:border-[#9b51b6] hover:text-[#c27be0]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#9b51b6] px-1 text-[10px] font-bold text-white">
                {totalCartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Collapsible Search Bar */}
        {isSearchOpen && (
          <div className="mx-auto max-w-xl px-4 pb-4">
            <div className="flex items-center overflow-hidden rounded-full border border-[#9b51b6]/50 bg-[#181b2a] px-4 py-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm mặt dán sứ Veneer, tẩy trắng Laser, serum dưỡng răng..."
                className="w-full bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Xóa
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bordered Navigation Bar */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="flex flex-wrap items-center justify-center gap-6 border border-white/15 bg-[#121521]/90 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] sm:gap-11">
            {data.navigation.map((item: any, idx: number) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  idx === 0
                    ? "text-[#a959c9] transition hover:text-[#c97be6]"
                    : "text-gray-200 transition hover:text-[#a959c9]"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Dark Hero Showcase: Left Kit + Center Typography + Right Radiant Smile Model */}
        <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 lg:pt-12 lg:pb-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Side: Luxury Dental & Smile Care Kit Visual */}
            <div className="order-2 flex justify-center lg:order-1 lg:col-span-4">
              <div className="relative w-full max-w-[310px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1d2030] to-[#0f111a] p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                  alt="Bộ chăm sóc răng sứ VaniSmile"
                  className="h-56 w-full rounded-xl object-cover"
                />
                <div className="mt-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-serif italic text-[#c98ce0]">
                      Swiss Oral Luxury
                    </p>
                    <p className="font-semibold text-white">
                      Bộ Kit VaniCare & Veneer Emax
                    </p>
                  </div>
                  <span className="rounded-full bg-[#8b45a6]/30 px-2.5 py-1 text-[11px] font-bold text-[#d599ec]">
                    -50%
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Hero Editorial Typography */}
            <div className="order-1 text-center lg:order-2 lg:col-span-4">
              <p className="font-serif text-xl italic text-gray-200 sm:text-2xl">
                {data.heroDiscountSubtitle}
              </p>
              <h1 className="mt-2 font-serif text-3xl font-bold tracking-[0.08em] text-white sm:text-4xl lg:text-[40px] lg:leading-tight">
                {data.heroMainTitle}
              </h1>
              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-300 sm:text-sm">
                {data.heroSubheading}
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="#cua-hang"
                  className="inline-flex items-center justify-center rounded-full bg-[#8b45a6] px-8 py-2.5 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#8b45a6]/40 transition hover:bg-[#9f54bd]"
                >
                  {data.heroCta}
                </a>
              </div>
            </div>

            {/* Right Side: Radiant Smile Model Portrait */}
            <div className="order-3 flex justify-center lg:col-span-4">
              <div className="relative w-full max-w-[310px] overflow-hidden rounded-2xl border border-white/10 bg-[#171a28] shadow-2xl">
                <img
                  src={data.heroImage}
                  alt="Nụ cười chuẩn mực VaniSmile"
                  className="h-64 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f18] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span>Thiết kế nụ cười DSD 3D</span>
                  <span className="text-[#c98ce0]">★★★★★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3-Photo Promo Strip inside Dark Hero Container */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.promoStripBanners.map((banner) => (
              <a
                key={banner.title}
                href="#cua-hang"
                className="group relative h-44 overflow-hidden border border-white/10 bg-[#171a26]"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded bg-[#8b45a6]/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                    {banner.tag}
                  </span>
                  <h3 className="mt-1.5 font-serif text-base font-bold text-white">
                    {banner.title}
                  </h3>
                  <p className="text-[11px] text-gray-200">{banner.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. TABS (BÁN CHẠY | GIÁ TỐT | NỔI BẬT) + ASYMMETRIC 1 LARGE LEFT + 3x2 RIGHT
      ===================================================================== */}
      <section id="cua-hang" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* Top Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-7 sm:gap-10">
            {data.productTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-3 font-serif text-base font-bold tracking-wider uppercase transition sm:text-lg ${
                    isActive
                      ? "text-[#222222] after:absolute after:bottom-[-13px] after:left-0 after:h-[3px] after:w-full after:bg-[#8b45a6]"
                      : "text-gray-400 hover:text-[#8b45a6]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-gray-500">
            Cam kết 100% vật liệu sứ & sản phẩm nha khoa chính hãng
          </span>
        </div>

        {/* Asymmetric Product Grid: Left Tall Hero Card (4 cols) + Right 3x2 Grid (8 cols) */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Large Featured Card */}
          <div className="flex flex-col justify-between border border-gray-200 bg-[#fafafa] p-6 transition hover:border-[#8b45a6]/50 hover:shadow-lg lg:col-span-4">
            <div>
              <div className="relative overflow-hidden bg-white">
                <img
                  src={data.heroFeaturedProduct.image}
                  alt={data.heroFeaturedProduct.name}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />
                {data.heroFeaturedProduct.badge && (
                  <span className="absolute left-3 top-3 bg-[#8b45a6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {data.heroFeaturedProduct.badge}
                  </span>
                )}
              </div>
              <div className="mt-6 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#8b45a6]">
                  {data.heroFeaturedProduct.category}
                </p>
                <h3 className="mt-1.5 font-serif text-lg font-bold text-[#222222]">
                  {data.heroFeaturedProduct.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {data.heroFeaturedProduct.summary}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2.5">
                  <span className="text-base font-bold text-[#8b45a6]">
                    {data.heroFeaturedProduct.price}
                  </span>
                  {data.heroFeaturedProduct.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {data.heroFeaturedProduct.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => handleAddToCart(data.heroFeaturedProduct)}
                className="flex-1 bg-[#222222] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#8b45a6]"
              >
                Đặt lịch / Mua ngay
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(data.heroFeaturedProduct)}
                className="border border-gray-300 px-3.5 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-[#8b45a6] hover:text-[#8b45a6]"
              >
                Chi tiết
              </button>
            </div>
          </div>

          {/* Right 3x2 Product Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8">
            {displayedSixProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between border border-gray-100 bg-white p-3.5 transition hover:border-[#8b45a6]/40 hover:shadow-md"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-[#f8f8fa]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute right-2.5 top-2.5 bg-[#8b45a6] px-2 py-0.5 text-[10px] font-bold text-white">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-black/70 py-2 transition duration-300 group-hover:translate-y-0">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className="rounded bg-[#8b45a6] px-3 py-1 text-[11px] font-semibold text-white hover:bg-[#a052be]"
                      >
                        + Giỏ hàng
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="rounded bg-white/20 px-2.5 py-1 text-[11px] text-white hover:bg-white/30"
                      >
                        Xem
                      </button>
                    </div>
                  </div>
                  <div className="mt-3.5 text-center">
                    <h4 className="line-clamp-2 text-xs font-semibold text-gray-700 group-hover:text-[#8b45a6]">
                      {product.name}
                    </h4>
                    <div className="mt-1.5 flex items-center justify-center gap-2">
                      <span className="text-xs font-bold text-[#222222]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[11px] text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. GIẢM GIÁ 50% COUNTDOWN BANNER (#f5f5f7)
      ===================================================================== */}
      <section id="gioi-thieu" className="bg-[#f4f4f6] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Heading + Description + 4 White Countdown Boxes + Purple CTA */}
            <div className="text-center lg:col-span-6">
              <p className="font-serif text-sm italic text-[#8b45a6]">
                {data.flashSale.subtitle}
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold tracking-wide text-[#222222] sm:text-4xl">
                {data.flashSale.title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-gray-600 sm:text-sm">
                {data.flashSale.description}
              </p>

              {/* 4 White Countdown Boxes */}
              <div className="mt-7 flex items-center justify-center gap-3 sm:gap-4">
                {[
                  { value: data.flashSale.countdown.days, unit: "NGÀY" },
                  { value: data.flashSale.countdown.hours, unit: "GIỜ" },
                  { value: data.flashSale.countdown.minutes, unit: "PHÚT" },
                  { value: data.flashSale.countdown.seconds, unit: "GIÂY" },
                ].map((box) => (
                  <div
                    key={box.unit}
                    className="flex h-16 w-16 flex-col items-center justify-center border border-gray-200 bg-white shadow-xs sm:h-20 sm:w-20"
                  >
                    <span className="font-serif text-xl font-bold text-[#222222] sm:text-2xl">
                      {box.value}
                    </span>
                    <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                      {box.unit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => handleAddToCart(data.heroFeaturedProduct)}
                  className="inline-flex items-center justify-center rounded-full bg-[#8b45a6] px-9 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-[#9f54bd]"
                >
                  {data.flashSale.ctaLabel}
                </button>
              </div>
            </div>

            {/* Right Column: Studio Dental / Aesthetic Care Kit Showcase */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden bg-white p-4 shadow-md">
                <img
                  src={data.flashSale.image}
                  alt={data.flashSale.title}
                  className="h-80 w-full object-cover sm:h-96"
                />
                <div className="absolute bottom-7 left-7 bg-white/95 px-4 py-2.5 shadow">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#8b45a6]">
                    VaniSmile Exclusive Kit
                  </p>
                  <p className="font-serif text-sm font-bold text-[#222222]">
                    Tặng kèm Máy Tăm Nước Sóng Âm & Serum Bù Khoáng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SẢN PHẨM NỔI BẬT (4-COLUMN GRID)
      ===================================================================== */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="text-center">
          <p className="font-serif text-lg italic text-gray-400">
            {data.brandScriptTitle}
          </p>
          <h2 className="mt-0.5 inline-block border-b-2 border-[#222222] pb-2 font-serif text-2xl font-bold uppercase tracking-wider text-[#222222]">
            SẢN PHẨM NỔI BẬT
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.featuredProducts.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between border border-gray-100 bg-white p-4 transition hover:border-[#8b45a6]/40 hover:shadow-md"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#f9f9fb]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-black/70 py-2.5 transition duration-300 group-hover:translate-y-0">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className="rounded bg-[#8b45a6] px-3.5 py-1 text-xs font-semibold text-white hover:bg-[#9f54bd]"
                    >
                      Chọn mua
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(item)}
                      className="rounded bg-white/20 px-3 py-1 text-xs text-white hover:bg-white/30"
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#8b45a6]">
                    {item.category}
                  </p>
                  <h3 className="mt-1 line-clamp-2 text-xs font-semibold text-gray-800 group-hover:text-[#8b45a6]">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-xs font-bold text-[#222222]">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-[11px] text-gray-400 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. KHÁCH HÀNG NÓI GÌ (3 CIRCULAR AVATARS) + DARK 4-PERK BAR (#222222)
      ===================================================================== */}
      <section className="bg-[#f4f4f6] pt-14">
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <div className="text-center">
            <p className="font-serif text-lg italic text-gray-400">
              {data.brandScriptTitle}
            </p>
            <h2 className="mt-0.5 inline-block border-b-2 border-[#222222] pb-2 font-serif text-2xl font-bold uppercase tracking-wider text-[#222222]">
              KHÁCH HÀNG NÓI GÌ
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.customerReviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-20 w-20 rounded-full border-2 border-white object-cover shadow-md"
                />
                <p className="mt-5 text-xs italic leading-relaxed text-gray-600 sm:text-sm">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold text-[#222222]">
                  {review.name}{" "}
                  <span className="font-normal text-gray-500">
                    / {review.source}
                  </span>
                </p>
                <span className="mt-1 text-[11px] text-[#8b45a6]">
                  Dịch vụ: {review.serviceUsed}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Charcoal 4-Perk Service Strip (#222222) */}
        <div className="bg-[#222222] text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {data.servicePerks.map((perk) => (
              <div
                key={perk.id}
                className="flex items-center justify-between px-5 py-6"
              >
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    {perk.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-400">
                    {perk.subtitle}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#c27be0]">
                  {perk.icon === "truck" && (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10h10zm0 0h8v-5l-3-4h-5v9z"
                      />
                    </svg>
                  )}
                  {perk.icon === "refresh" && (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  )}
                  {perk.icon === "shield" && (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      />
                    </svg>
                  )}
                  {perk.icon === "headset" && (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. TIN TỨC (2 ASYMMETRIC OVERLAPPING BLOG CARDS) + 6 BRAND BADGES
      ===================================================================== */}
      <section id="tin-tuc" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="text-center">
          <p className="font-serif text-lg italic text-gray-400">
            {data.brandScriptTitle}
          </p>
          <h2 className="mt-0.5 inline-block border-b-2 border-[#222222] pb-2 font-serif text-2xl font-bold uppercase tracking-wider text-[#222222]">
            TIN TỨC
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.blogArticles.map((post) => (
            <article key={post.id} className="group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-[#8b45a6] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {post.category}
                </span>
              </div>
              {/* Overlapping White Editorial Box */}
              <div className="relative mx-4 -mt-12 border border-gray-100 bg-white p-6 text-center shadow-md">
                <span className="text-[11px] text-gray-400">
                  {post.date} • {post.readTime}
                </span>
                <h3 className="mt-1.5 font-serif text-base font-bold uppercase leading-snug text-[#222222] group-hover:text-[#8b45a6]">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-gray-500">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Dark 6-Partner Dental Brand Badges Strip (#333333) */}
      <div className="border-b border-white/10 bg-[#303030] py-8 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:grid-cols-6">
          {data.brandPartners.map((bp) => (
            <div
              key={bp.id}
              className="flex flex-col items-center justify-center rounded border border-white/15 bg-white/5 px-3 py-3 text-center transition hover:border-[#9b51b6]"
            >
              <span className="text-[10px] tracking-widest text-gray-400">
                {bp.year}
              </span>
              <span className="mt-0.5 font-serif text-xs font-bold tracking-widest text-white">
                {bp.name}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#c27be0]">
                {bp.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          7. DARK CHARCOAL MULTI-ROW FOOTER (#242424)
      ===================================================================== */}
      <footer id="lien-he" className="bg-[#242424] text-gray-300">
        {/* Upper Footer Row: LIÊN HỆ | MẠNG XÃ HỘI | ĐĂNG KÝ */}
        <div className="mx-auto max-w-6xl border-b border-white/10 px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Col 1: LIÊN HỆ */}
            <div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                LIÊN HỆ
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-gray-400">
                <li>📍 {data.address}</li>
                <li>📞 Hotline: {data.phone}</li>
                <li>✉️ Email: {data.email}</li>
              </ul>
            </div>

            {/* Col 2: MẠNG XÃ HỘI */}
            <div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                MẠNG XÃ HỘI
              </h3>
              <p className="mt-4 text-xs text-gray-400">
                Kết nối cùng {data.companyName} để cập nhật ưu đãi thẩm mỹ nụ cười mới nhất.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                {["FB", "IG", "YT", "ZL", "TT"].map((soc) => (
                  <button
                    key={soc}
                    type="button"
                    onClick={() =>
                      setBookingToast(`Đang mở kênh ${soc} chính thức của VaniSmile`)
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white transition hover:bg-[#8b45a6]"
                  >
                    {soc}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 3: ĐĂNG KÝ */}
            <div>
              <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white">
                ĐĂNG KÝ
              </h3>
              <p className="mt-4 text-xs text-gray-400">
                Đăng ký để nhận thông tin ưu đãi 50% và cẩm nang chăm sóc răng sứ từ chuyên gia.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterDone(true);
                    setNewsletterEmail("");
                  }
                }}
                className="mt-4 flex overflow-hidden rounded border border-white/15 bg-white"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email của bạn..."
                  className="w-full px-3 py-2 text-xs text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#8b45a6] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#9b51b6]"
                >
                  ✉
                </button>
              </form>
              {newsletterDone && (
                <p className="mt-2 text-[11px] text-[#c27be0]">
                  ✓ Cảm ơn bạn đã đăng ký nhận bản tin VaniSmile!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Lower Footer Row: MENU | HỖ TRỢ | DỊCH VỤ | KHÁCH HÀNG | INSTAGRAM 3x2 */}
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
                MENU
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-400">
                {data.navigation.map((nav: any) => (
                  <li key={nav.label}>
                    <a href={nav.href} className="hover:text-[#c27be0]">
                      {nav.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
                Tài Khoản
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-400">
                <li>Hồ sơ nha khoa điện tử</li>
                <li>Tra cứu thẻ bảo hành sứ</li>
                <li>Lịch hẹn tái khám định kỳ</li>
                <li>Tích điểm thành viên VIP</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
                Vận Chuyển
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-400">
                <li>Giao bộ Kit tận nhà 2H</li>
                <li>Miễn phí đơn hàng từ 300K</li>
                <li>Kiểm tra tem niêm phong</li>
                <li>Hỗ trợ đổi trả trong 3 ngày</li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
                Khách Hàng
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-400">
                <li>Chính sách bảo hành 15 năm</li>
                <li>Trả góp 0% lãi suất</li>
                <li>Cam kết sứ chính hãng</li>
                <li>Tư vấn trực tuyến 24/7</li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
                INSTAGRAM
              </h4>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {data.instagramGallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`VaniSmile Gallery ${idx + 1}`}
                    className="h-14 w-full rounded-xs object-cover opacity-85 transition hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 bg-[#1c1c1c] py-4 text-center text-xs text-gray-400">
          © Bản quyền thuộc về{" "}
          <span className="font-semibold text-white">{data.companyName}</span>.
          Thiết kế chuẩn mực thẩm mỹ quốc tế.
        </div>
      </footer>
    </div>
  );
}
export default DemoTemplateRenderer;
