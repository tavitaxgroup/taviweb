"use client";

import React, { useState } from "react";
import {
  Phone,
  Search,
  ShoppingBag,
  User,
  ArrowRight,
  Headphones,
  RotateCcw,
  CheckCircle2,
  X,
  ChevronUp,
  Sparkles
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien10DefaultData,
  type TrendBlendData,
  type TrendBlendProduct
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({
  data,
  template,
  companyName
}: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<TrendBlendData>(
    thamMyVien10DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<
    Array<{ product: TrendBlendProduct; qty: number }>
  >([{ product: merged.heroSpotlightProduct, qty: 1 }]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<TrendBlendProduct | null>(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "(+84) 0313-728-397";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "info@themona.global";

  const handleAddToCart = (product: TrendBlendProduct) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setToastMsg(`Đã thêm "${product.name}" vào giỏ hàng!`);
    setTimeout(() => setToastMsg(null), 2800);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const filteredProducts = merged.newProducts.filter((prod) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      prod.name.toLowerCase().includes(q) ||
      prod.category.toLowerCase().includes(q)
    );
  });

  const testimonials = merged.testimonials || [];
  const activeReview =
    testimonials[activeTestimonialIdx % (testimonials.length || 1)] ||
    testimonials[0] || {
      name: "Chị Nguyễn Minh Thư",
      role: "@minhthu.beauty",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      quote: ""
    };

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-[#1e2423] selection:bg-[#2a7d6c] selection:text-white"
    >
      {/* Floating Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-[#2a7d6c]/30 bg-[#1e2423] px-4 py-3 text-xs font-semibold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-[#52b79a]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Product Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#2a7d6c] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f4f5f7] p-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full rounded-lg object-cover"
                />
                {selectedProduct.isSale && (
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#df6c63] text-[11px] font-bold text-white shadow">
                    Sale!
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded-full bg-[#dff0ec] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#2a7d6c]">
                    {selectedProduct.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-gray-900">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    {selectedProduct.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {selectedProduct.oldPrice}
                      </span>
                    )}
                    <span className="text-lg font-extrabold text-[#2a7d6c] underline">
                      {selectedProduct.price}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {selectedProduct.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="mt-5 w-full rounded-lg bg-[#2a7d6c] py-2.5 text-xs font-bold text-white transition hover:bg-[#216356]"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Giỏ hàng ({totalCount} sản phẩm)
                </h3>
                <p className="text-[11px] text-[#2a7d6c]">
                  {merged.business.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCartDrawerOpen(false)}
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {cartItems.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-gray-800">
                      {product.name}
                    </h4>
                    <p className="mt-0.5 text-xs font-semibold text-[#2a7d6c]">
                      {product.price} × {qty}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.filter((i) => i.product.id !== product.id)
                      )
                    }
                    className="text-xs text-gray-400 hover:text-red-500"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 p-5">
              <button
                type="button"
                onClick={() => {
                  setCartDrawerOpen(false);
                  setToastMsg(
                    "Đã gửi yêu cầu đặt hàng! Chuyên viên TrendBlend sẽ liên hệ xác nhận."
                  );
                  setTimeout(() => setToastMsg(null), 3500);
                }}
                className="w-full rounded-xl bg-[#2a7d6c] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#216356]"
              >
                Tiến hành đặt hàng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. TWO-TIER CLEAN WHITE HEADER ==================== */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        {/* Top Utility Row */}
        <div className="border-b border-gray-100">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-2 px-4 py-2.5 text-xs text-gray-600">
            <a
              href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 font-medium text-gray-700 hover:text-[#2a7d6c]"
            >
              <Phone className="h-3.5 w-3.5 text-[#2a7d6c]" />
              <span>Hỗ trợ: {primaryPhone}</span>
            </a>

            {/* Center Brand Logo */}
            <a href="#top" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#dff0ec] text-[#2a7d6c]">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div className="leading-none">
                <span className="block text-[8px] font-bold uppercase tracking-[0.22em] text-gray-400">
                  MONA MEDIA
                </span>
                <span className="text-lg font-extrabold tracking-tight">
                  <span className="text-[#2a7d6c]">Trend</span>{" "}
                  <span className="text-gray-900">Blend</span>
                </span>
              </div>
            </a>

            {/* Right Utility Links & Social Badges */}
            <div className="hidden items-center gap-4 md:flex">
              {merged.topUtilityLinks.map((lnk) => (
                <a
                  key={lnk}
                  href="#footer-contact"
                  className="text-[11px] text-gray-500 hover:text-[#2a7d6c]"
                >
                  {lnk}
                </a>
              ))}
              <div className="flex items-center gap-2 pl-2 text-[#2a7d6c]">
                {["f", "t", "y", "ig"].map((soc) => (
                  <a
                    key={soc}
                    href="#instagram-feed"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dff0ec]/70 text-[10px] font-bold uppercase hover:bg-[#2a7d6c] hover:text-white"
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation & Search Row */}
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-4 py-3">
          {/* Left Rounded Search Input */}
          <div className="relative w-full max-w-[230px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm..."
              className="w-full rounded-full border border-gray-200 bg-gray-50/70 py-1.5 pl-4 pr-9 text-xs text-gray-700 placeholder-gray-400 focus:border-[#2a7d6c] focus:bg-white focus:outline-none"
            />
            <Search className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#2a7d6c]" />
          </div>

          {/* Center Nav Links */}
          <nav className="hidden items-center gap-7 md:flex">
            {merged.navigation.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-semibold transition-colors ${
                  idx === 0
                    ? "text-[#2a7d6c]"
                    : "text-gray-700 hover:text-[#2a7d6c]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Cart Pill + User Icon */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-2 rounded-md bg-[#dff0ec] px-3 py-1.5 text-xs font-bold text-[#1e2423] transition hover:bg-[#cbe4de]"
            >
              <span>1,299,000 ₫</span>
              <span className="flex items-center gap-1 text-[#2a7d6c]">
                {totalCount}
                <ShoppingBag className="h-3.5 w-3.5" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => setCartDrawerOpen(true)}
              aria-label="Tài khoản"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:border-[#2a7d6c] hover:text-[#2a7d6c]"
            >
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ==================== 2. ASYMMETRIC BENTO HERO SECTION ==================== */}
      <section className="mx-auto max-w-[1180px] px-4 pt-8 pb-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column (8 Cols) */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            {/* Top Headline + Circular Coral Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="whitespace-pre-line text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
                  {merged.hero.title}
                </h1>
                <a
                  href={merged.hero.ctaLink}
                  className="mt-4 inline-block rounded-md bg-[#dff0ec] px-5 py-2 text-xs font-bold uppercase tracking-wider text-gray-900 transition hover:bg-[#2a7d6c] hover:text-white"
                >
                  {merged.hero.ctaText}
                </a>
              </div>

              {/* Circular Stamp Badge */}
              <div className="relative hidden h-28 w-28 items-center justify-center sm:flex">
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full animate-[spin_22s_linear_infinite] text-[#e07a72]"
                >
                  <defs>
                    <path
                      id="trendCirclePath"
                      d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                    />
                  </defs>
                  <text className="fill-current text-[8.5px] font-bold uppercase tracking-[0.18em]">
                    <textPath href="#trendCirclePath">
                      {merged.heroStampText}
                    </textPath>
                  </text>
                </svg>
                <Sparkles className="absolute h-5 w-5 text-[#e07a72]" />
              </div>
            </div>

            {/* Main Rounded Hero Studio Photo */}
            <div className="relative h-[300px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[380px]">
              <img
                src={merged.hero.backgroundImage}
                alt={merged.business.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Bottom Sub-Row: Left Horizontal Promo Card + Right Floating Product Card */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
              {/* Left Horizontal Banner */}
              <div className="relative flex min-h-[195px] flex-col justify-center overflow-hidden rounded-2xl bg-[#6f7d7a] p-6 text-white sm:col-span-7">
                <img
                  src={merged.heroBottomBanner.image}
                  alt={merged.heroBottomBanner.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2e3a37]/85 via-[#2e3a37]/45 to-transparent" />
                <div className="relative z-10 max-w-[240px]">
                  <h3 className="text-xl font-extrabold leading-tight">
                    {merged.heroBottomBanner.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-100">
                    {merged.heroBottomBanner.subtitle}
                  </p>
                  <a
                    href="#san-pham-moi"
                    className="mt-4 inline-block rounded-md bg-[#dff0ec] px-4 py-1.5 text-[11px] font-bold uppercase text-gray-900 hover:bg-white"
                  >
                    {merged.heroBottomBanner.ctaText}
                  </a>
                </div>
              </div>

              {/* Right Overlapping Spotlight Product Card */}
              <div className="relative z-20 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:col-span-5 sm:-mt-28">
                <div
                  onClick={() =>
                    setSelectedProduct(merged.heroSpotlightProduct)
                  }
                  className="aspect-square cursor-pointer overflow-hidden rounded-xl bg-[#f4f5f7] p-3"
                >
                  <img
                    src={merged.heroSpotlightProduct.image}
                    alt={merged.heroSpotlightProduct.name}
                    className="h-full w-full rounded-lg object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <h4 className="mt-3 text-xs font-bold uppercase text-gray-900">
                  {merged.heroSpotlightProduct.name}
                </h4>
                <p className="mt-1 text-xs font-semibold text-gray-500">
                  {merged.heroSpotlightProduct.price}
                </p>
                <div className="mt-2.5 flex justify-end">
                  <button
                    type="button"
                    onClick={() =>
                      handleAddToCart(merged.heroSpotlightProduct)
                    }
                    className="rounded-md bg-[#dff0ec] px-3.5 py-1.5 text-[11px] font-bold text-gray-800 hover:bg-[#2a7d6c] hover:text-white"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="mt-3 flex justify-center gap-1.5">
                  {[0, 1, 2, 3, 4].map((dot) => (
                    <span
                      key={dot}
                      className={`h-1.5 w-1.5 rounded-full ${
                        dot === 2 ? "bg-gray-800" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 Cols): 2 Tall Banners + Bottom Text Callout */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {/* Right Top Tall Banner */}
            <div className="relative flex h-[230px] flex-col justify-end overflow-hidden rounded-2xl bg-[#3d6861] p-6 text-white">
              <img
                src={merged.heroRightTopBanner.image}
                alt={merged.heroRightTopBanner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f423b]/85 via-black/20 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold">
                  {merged.heroRightTopBanner.title}
                </h3>
                <p className="mt-0.5 text-xs text-gray-100">
                  {merged.heroRightTopBanner.subtitle}
                </p>
                <a
                  href="#san-pham-moi"
                  className="mt-3 inline-block rounded-md bg-[#dff0ec] px-4 py-1.5 text-[11px] font-bold uppercase text-gray-900 hover:bg-white"
                >
                  {merged.heroRightTopBanner.ctaText}
                </a>
              </div>
            </div>

            {/* Right Middle Tall Banner */}
            <div className="relative flex h-[310px] flex-col justify-end overflow-hidden rounded-2xl bg-[#7ca39b] p-6 text-white">
              <img
                src={merged.heroRightBottomBanner.image}
                alt={merged.heroRightBottomBanner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a544c]/85 via-black/20 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold leading-snug">
                  {merged.heroRightBottomBanner.title}
                </h3>
                <p className="mt-1 text-xs text-gray-100">
                  {merged.heroRightBottomBanner.subtitle}
                </p>
                <a
                  href="#uu-dai-gioi-han"
                  className="mt-3 inline-block rounded-md bg-[#dff0ec] px-4 py-1.5 text-[11px] font-bold uppercase text-gray-900 hover:bg-white"
                >
                  {merged.heroRightBottomBanner.ctaText}
                </a>
              </div>
            </div>

            {/* Right Bottom Text Callout */}
            <div className="rounded-2xl bg-white p-2">
              <h3 className="text-xl font-extrabold leading-snug text-gray-900">
                {merged.heroRightTextCallout.title}
              </h3>
              <p className="mt-1.5 text-xs font-semibold text-gray-600">
                {merged.heroRightTextCallout.subtitle}
              </p>
              <a
                href="#san-pham-moi"
                className="mt-3 inline-block rounded-md bg-[#dff0ec] px-4 py-1.5 text-[11px] font-bold uppercase text-gray-900 hover:bg-[#2a7d6c] hover:text-white"
              >
                {merged.heroRightTextCallout.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. SẢN PHẨM MỚI (5x2 = 10 PRODUCT GRID) ==================== */}
      <section id="san-pham-moi" className="mx-auto max-w-[1180px] px-4 py-10">
        <h2 className="mb-6 text-xl font-extrabold text-gray-900">
          {merged.newProductsTitle}
        </h2>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col justify-between">
              <div>
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-[#f4f5f7] p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                  />
                  {product.isSale && (
                    <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#e06d64] text-[10px] font-bold text-white shadow-xs">
                      Sale!
                    </span>
                  )}
                </div>

                <h3
                  onClick={() => setSelectedProduct(product)}
                  className="mt-3 line-clamp-2 cursor-pointer text-xs font-bold uppercase leading-snug text-gray-900 group-hover:text-[#2a7d6c]"
                >
                  {product.name}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-xs">
                  {product.oldPrice && (
                    <span className="text-[11px] text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span
                    className={`font-semibold ${
                      product.isSale
                        ? "font-bold text-gray-900 underline"
                        : "text-gray-600"
                    }`}
                  >
                    {product.price}
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="rounded-md bg-[#dff0ec] px-3.5 py-1.5 text-[11px] font-bold text-gray-800 transition hover:bg-[#2a7d6c] hover:text-white"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. DANH MỤC NỔI BẬT (ROUNDED GRAY CONTAINER) ==================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-8">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#f6f7f8] p-6 sm:p-8 lg:grid-cols-12">
          {/* Col 1: Title & Intro */}
          <div className="lg:col-span-3">
            <h2 className="whitespace-pre-line text-2xl font-extrabold leading-tight text-gray-900">
              {merged.featuredCategoriesSection.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              {merged.featuredCategoriesSection.description}
            </p>
          </div>

          {/* Col 2 & 3: Category Pill Lists */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5">
            {merged.featuredCategoriesSection.columns.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-3 text-xs font-bold text-gray-900">
                  {col.heading}
                </h3>
                <div className="flex flex-col items-start gap-2">
                  {col.links.map((lnk) => (
                    <a
                      key={lnk}
                      href="#san-pham-moi"
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#dff0ec] px-3 py-1.5 text-[11px] font-semibold text-gray-800 transition hover:bg-[#2a7d6c] hover:text-white"
                    >
                      <span>{lnk}</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  ))}
                  <a
                    href="#san-pham-moi"
                    className="mt-1 inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-[11px] font-bold text-gray-800 shadow-2xs hover:text-[#2a7d6c]"
                  >
                    <span>Xem tất cả</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Col 4: Right Promo Banner */}
          <div className="relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl bg-gray-800 p-6 text-white lg:col-span-4">
            <img
              src={merged.featuredCategoriesSection.promoBanner.image}
              alt={merged.featuredCategoriesSection.promoBanner.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9ee0cf]">
                {merged.featuredCategoriesSection.promoBanner.eyebrow}
              </span>
              <h3 className="mt-1 text-lg font-extrabold leading-snug">
                {merged.featuredCategoriesSection.promoBanner.title}
              </h3>
              <a
                href="#uu-dai-gioi-han"
                className="mt-3 inline-block rounded-md bg-[#dff0ec] px-4 py-1.5 text-[11px] font-bold uppercase text-gray-900 hover:bg-white"
              >
                {merged.featuredCategoriesSection.promoBanner.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. KHÁM PHÁ SỰ KÌ DIỆU (ASYMMETRIC COLLAGE) ==================== */}
      <section id="kham-pha" className="mx-auto max-w-[1180px] px-4 py-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Collage: Large Image + Overlapping Portrait */}
          <div className="relative lg:col-span-6">
            <div className="h-[300px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-[340px] sm:w-[85%]">
              <img
                src={merged.discoverySection.mainImage}
                alt={merged.discoverySection.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 h-48 w-44 overflow-hidden rounded-2xl border-4 border-white bg-amber-400 shadow-xl sm:absolute sm:-top-6 sm:right-2 sm:mt-0">
              <img
                src={merged.discoverySection.overlapImage}
                alt="Phong cách TrendBlend"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content + 3 Thumbnails */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {merged.discoverySection.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-gray-500 sm:text-sm">
              {merged.discoverySection.description}
            </p>
            <a
              href="#uu-dai-gioi-han"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#dff0ec] px-5 py-2.5 text-xs font-bold text-gray-900 transition hover:bg-[#2a7d6c] hover:text-white"
            >
              <span>{merged.discoverySection.ctaText}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {merged.discoverySection.smallThumbnails.map((thumb, idx) => (
                <div
                  key={idx}
                  className="h-28 overflow-hidden rounded-xl bg-gray-100"
                >
                  <img
                    src={thumb}
                    alt={`Khám phá ${idx + 1}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. ƯU ĐÃI GIỚI HẠN (SAGE-MINT COUNTDOWN + 3 PRODUCTS) ==================== */}
      <section
        id="uu-dai-gioi-han"
        className="mx-auto max-w-[1180px] px-4 py-8"
      >
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-[#cbe4de] p-6 sm:p-10 lg:grid-cols-12">
          {/* Left Countdown Box (5 Cols) */}
          <div className="text-center lg:col-span-5">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-700">
              {merged.countdownDealSection.eyebrow}
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {merged.countdownDealSection.title}
            </h2>

            {/* 4 Countdown Boxes */}
            <div className="mt-6 flex justify-center gap-3">
              {[
                {
                  val: merged.countdownDealSection.countdown.days,
                  label: "Ngày"
                },
                {
                  val: merged.countdownDealSection.countdown.hours,
                  label: "Giờ"
                },
                {
                  val: merged.countdownDealSection.countdown.minutes,
                  label: "Phút"
                },
                {
                  val: merged.countdownDealSection.countdown.seconds,
                  label: "Giây"
                }
              ].map((box) => (
                <div
                  key={box.label}
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-[#8ec2b6] text-white shadow-xs"
                >
                  <span className="text-lg font-extrabold leading-none">
                    {box.val}
                  </span>
                  <span className="mt-1 text-[10px] font-medium">
                    {box.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#san-pham-moi"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-xs font-bold text-gray-900 shadow-xs transition hover:bg-[#2a7d6c] hover:text-white"
            >
              <span>{merged.countdownDealSection.ctaText}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right 3 Deal Products (7 Cols) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7">
            {merged.countdownDealSection.dealProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col justify-between rounded-xl bg-white/95 p-3.5 shadow-xs"
              >
                <div>
                  <div
                    onClick={() => setSelectedProduct(prod)}
                    className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-[#f4f5f7] p-2"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="h-full w-full rounded object-cover"
                    />
                    {prod.isSale && (
                      <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#e06d64] text-[10px] font-bold text-white">
                        Sale!
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2.5 line-clamp-2 text-[11px] font-bold uppercase text-gray-900">
                    {prod.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs">
                    {prod.oldPrice && (
                      <span className="text-[10px] text-gray-400 line-through">
                        {prod.oldPrice}
                      </span>
                    )}
                    <span className="font-bold text-gray-800">{prod.price}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddToCart(prod)}
                  className="mt-3 w-full rounded-md bg-white border border-gray-200 py-1.5 text-[11px] font-bold text-gray-800 hover:bg-[#2a7d6c] hover:text-white"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. INSTAGRAM 8-PHOTO GRID + CUSTOMER QUOTE ==================== */}
      <section
        id="instagram-feed"
        className="mx-auto max-w-[1180px] px-4 py-10"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: 4x2 Photo Grid with Centered Instagram Overlay Card */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-4 gap-3">
              {merged.instagramSection.photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-xl bg-gray-100"
                >
                  <img
                    src={photo}
                    alt={`Instagram ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Centered Overlay Card */}
            <div className="mx-auto mt-4 max-w-[260px] rounded-2xl bg-white/95 p-5 text-center shadow-lg sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-0 sm:-translate-x-1/2 sm:-translate-y-1/2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e06d64]">
                INSTAGRAM
              </span>
              <h3 className="mt-0.5 text-xs font-extrabold text-gray-900">
                {merged.instagramSection.handle}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
                {merged.instagramSection.caption}
              </p>
            </div>
          </div>

          {/* Right: Customer Review Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#f6f7f8] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      {activeReview.name}
                    </h4>
                    <p className="text-[11px] text-gray-400">
                      {activeReview.role}
                    </p>
                  </div>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-500">
                  ★
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-600">
                &ldquo;{activeReview.quote}&rdquo;
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonialIdx(idx)}
                    aria-label={`Đánh giá ${idx + 1}`}
                    className={`h-2 w-2 rounded-full transition ${
                      idx === activeTestimonialIdx
                        ? "bg-gray-900 scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. BẢN TIN (NEWSLETTER + PORTRAIT) ==================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-8">
        <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-[#f6f7f8] p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
              {merged.newsletterSection.eyebrow}
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-gray-900">
              {merged.newsletterSection.title}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              {merged.newsletterSection.description}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterDone(true);
                  setNewsletterEmail("");
                }
              }}
              className="mt-5 flex max-w-md gap-2"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập email nhận mã ưu đãi 10%..."
                required
                className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs focus:border-[#2a7d6c] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#dff0ec] px-5 py-2.5 text-xs font-bold text-gray-900 transition hover:bg-[#2a7d6c] hover:text-white"
              >
                Đăng ký
              </button>
            </form>
            {newsletterDone && (
              <p className="mt-2 text-xs font-semibold text-[#2a7d6c]">
                ✓ Đã gửi mã giảm giá 10% vào hộp thư của bạn!
              </p>
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="h-56 overflow-hidden rounded-2xl bg-gray-200 sm:h-64">
              <img
                src={merged.newsletterSection.image}
                alt={merged.newsletterSection.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. CLEAN WHITE FOOTER ==================== */}
      <footer id="footer-contact" className="mt-8 border-t border-gray-100 bg-white pt-10 pb-8">
        <div className="mx-auto max-w-[1180px] px-4">
          {/* Top Brand + Contact Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center gap-8">
              <a href="#top" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#dff0ec] text-[#2a7d6c]">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <span className="text-lg font-extrabold">
                  <span className="text-[#2a7d6c]">Trend</span>{" "}
                  <span className="text-gray-900">Blend</span>
                </span>
              </a>

              <div className="flex items-center gap-2.5 text-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff0ec] text-[#2a7d6c]">
                  <Headphones className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{primaryEmail}</p>
                  <p className="text-[11px] text-gray-500">{primaryPhone}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {["F", "T", "Y", "IG"].map((soc) => (
                <a
                  key={soc}
                  href="#top"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-bold text-gray-700 hover:bg-[#2a7d6c] hover:text-white"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* 4 Footer Columns */}
          <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* App & Return Policy (4 Cols) */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-extrabold text-gray-900">
                Trải nghiệm APP trên di động
              </h4>
              <p className="mt-1 text-[11px] text-gray-500">
                Nhận ưu đãi 10% cho đơn hàng & lịch hẹn đầu tiên
              </p>
              <div className="mt-3 flex gap-2.5">
                <span className="inline-flex items-center rounded-md bg-black px-3.5 py-2 text-[10px] font-bold text-white">
                  App Store
                </span>
                <span className="inline-flex items-center rounded-md bg-black px-3.5 py-2 text-[10px] font-bold text-white">
                  Google Play
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dff0ec] text-[#2a7d6c]">
                  <RotateCcw className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Chính sách hoàn trả 15 ngày
                  </p>
                  <p className="text-[11px] text-gray-500">
                    từ khi nhận đơn hàng của bạn
                  </p>
                </div>
              </div>
            </div>

            {/* Liên kết (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold text-gray-900">Liên kết</h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {merged.footerColumns.links.map((item) => (
                  <li key={item}>
                    <a href="#top" className="hover:text-[#2a7d6c]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Danh mục (2 Cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-gray-900">Danh mục</h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {merged.footerColumns.categories.map((item) => (
                  <li key={item}>
                    <a href="#san-pham-moi" className="hover:text-[#2a7d6c]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sự kiện (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold text-gray-900">Sự kiện</h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {merged.footerColumns.events.map((item) => (
                  <li key={item}>
                    <a href="#uu-dai-gioi-han" className="hover:text-[#2a7d6c]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Legal & Payment Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5 text-[11px] text-gray-400">
            <div className="flex flex-wrap gap-4">
              <span>Điều khoản và điều kiện</span>
              <span>Chính sách bảo mật</span>
              <span>Chính sách hoàn trả</span>
              <span>Thanh toán an toàn</span>
            </div>
            <div className="flex items-center gap-2">
              {["VISA", "MASTER", "JCB", "PAYPAL", "NAPAS"].map((pay) => (
                <span
                  key={pay}
                  className="rounded border border-gray-200 px-2 py-0.5 text-[9px] font-bold text-gray-600"
                >
                  {pay}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-center text-[11px] text-gray-400">
            <p className="w-full">
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-gray-700">{merged.business.name}</strong> •{" "}
              {merged.business.address}
            </p>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-[#2a7d6c] hover:text-[#2a7d6c]"
            >
              <ChevronUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
