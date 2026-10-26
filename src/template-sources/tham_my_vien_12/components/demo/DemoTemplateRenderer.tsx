"use client";

import React, { useState } from "react";
import {
  Truck,
  Search,
  ChevronDown,
  User,
  Heart,
  ShoppingBag,
  MapPin,
  Phone,
  Zap,
  ArrowRight,
  Star,
  Headphones,
  RotateCcw,
  Percent,
  Mail,
  Send,
  X,
  CheckCircle2,
  ChevronUp
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien12DefaultData,
  type LookPrettyData,
  type LookPrettyProduct
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
  const merged = adaptClonedTemplateData<LookPrettyData>(
    thamMyVien12DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProductTab, setActiveProductTab] = useState<
    "all" | "may-nang-co" | "anh-sang" | "duoc-my-pham" | "thiet-bi-spa"
  >("all");
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [modalProduct, setModalProduct] = useState<LookPrettyProduct | null>(
    null
  );
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "0313728397";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "info@themona.global";

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2800);
  };

  const filteredProducts = merged.featuredProductsSection.products.filter(
    (prod) => {
      const matchTab =
        activeProductTab === "all" || prod.category === activeProductTab;
      const matchSearch =
        !searchQuery.trim() ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    }
  );

  const renderProductCard = (product: LookPrettyProduct) => (
    <div
      key={product.id}
      onClick={() => setModalProduct(product)}
      className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white transition hover:border-[#163396]/30 hover:shadow-lg"
    >
      <div className="flex h-52 items-center justify-center overflow-hidden bg-[#f2f4f9] p-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full rounded object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <h3 className="line-clamp-2 text-xs font-medium leading-relaxed text-gray-700 group-hover:text-[#163396]">
          {product.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[11px] text-gray-400 line-through">
              {product.oldPrice}
            </span>
            <span className="font-extrabold text-gray-900">{product.price}</span>
          </div>

          <div className="flex items-center gap-0.5 text-[#ffd400]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#163396] selection:text-white"
    >
      {/* Floating Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-lg bg-[#163396] px-4 py-3 text-xs font-bold text-white shadow-2xl">
          <CheckCircle2 className="h-4 w-4 text-[#ffd400]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Product Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalProduct(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#163396] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="aspect-square overflow-hidden rounded-lg bg-[#f2f4f9] p-4">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  className="h-full w-full rounded object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded bg-[#ffd400] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-gray-900">
                    CHÍNH HÃNG LOOKPRETTY
                  </span>
                  <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900">
                    {modalProduct.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-400 line-through">
                      {modalProduct.oldPrice}
                    </span>
                    <span className="text-lg font-extrabold text-[#163396]">
                      {modalProduct.price}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {modalProduct.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    showToast(`Đã thêm "${modalProduct.name}" vào giỏ hàng!`);
                    setModalProduct(null);
                  }}
                  className="mt-5 w-full rounded-md bg-[#ffd400] py-2.5 text-xs font-extrabold uppercase text-gray-900 transition hover:bg-[#f0c600]"
                >
                  Thêm Vào Giỏ Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. THREE-TIER HEADER WITH CENTER YELLOW TRAPEZOID ==================== */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-2xs">
        {/* Tier 1: Royal Blue Announcement Bar */}
        <div className="bg-[#163396] text-white">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-1.5 text-[11px]">
            <div className="flex items-center gap-2">
              <Truck className="h-3.5 w-3.5 text-[#ffd400]" />
              <span>{merged.topBarMessage}</span>
            </div>
            <span className="hidden text-blue-200 sm:inline">
              Tư vấn da liễu &amp; Thiết bị thẩm mỹ chính hãng
            </span>
          </div>
        </div>

        {/* Tier 2: Search Left + Yellow Trapezoid Logo Center + Account/Wishlist/Cart Right */}
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="grid grid-cols-1 items-center gap-4 py-2 lg:grid-cols-12">
            {/* Left Search Pill (4 Cols) */}
            <div className="lg:col-span-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex h-10 w-full items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 pl-3 pr-1"
              >
                <div className="relative flex items-center border-r border-gray-200 pr-2 text-[11px] font-medium text-gray-600">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Chọn danh mục"
                    className="appearance-none bg-transparent pr-4 focus:outline-none"
                  >
                    <option value="all">Tất cả danh mục</option>
                    {merged.categoryCards.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-1 h-3 w-3 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm"
                  className="w-full bg-transparent px-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Tìm kiếm"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#163396] text-white hover:bg-[#102570]"
                >
                  <Search className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            {/* Center Yellow Trapezoid Logo Badge (4 Cols) */}
            <div className="flex justify-center lg:col-span-4">
              <a
                href="#top"
                className="relative flex items-center gap-2.5 bg-[#ffd400] px-8 py-3.5 text-gray-900 shadow-xs"
                style={{
                  clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)"
                }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-[#ffd400]">
                  <Zap className="h-4 w-4 fill-current" />
                </span>
                <div className="leading-tight">
                  <span className="block text-sm font-black tracking-tight text-gray-900">
                    {merged.business.name}
                  </span>
                  <span className="block text-[10px] font-bold text-gray-800">
                    LookPretty Clinic
                  </span>
                </div>
              </a>
            </div>

            {/* Right User, Wishlist, Cart (4 Cols) */}
            <div className="flex items-center justify-center gap-5 lg:col-span-4 lg:justify-end">
              <button
                type="button"
                onClick={() => showToast("Chức năng Tài khoản thành viên LookPretty")}
                className="flex items-center gap-2 text-left"
              >
                <User className="h-4 w-4 text-gray-600" />
                <div className="leading-tight">
                  <span className="block text-[10px] text-gray-400">
                    Đăng Nhập
                  </span>
                  <span className="text-[11px] font-bold text-gray-800">
                    Tài Khoản
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setWishlistCount((w) => w + 1);
                  showToast("Đã thêm vào danh sách yêu thích!");
                }}
                className="flex items-center gap-2 text-left"
              >
                <div className="relative">
                  <Heart className="h-4 w-4 text-gray-600" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ffd400] text-[9px] font-extrabold text-gray-900">
                    {wishlistCount}
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] text-gray-400">
                    Wishlist
                  </span>
                  <span className="text-[11px] font-bold text-gray-800">
                    Sản Phẩm
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() =>
                  showToast(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm.`)
                }
                className="flex items-center gap-2 text-left"
              >
                <div className="relative">
                  <ShoppingBag className="h-4 w-4 text-gray-600" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ffd400] text-[9px] font-extrabold text-gray-900">
                    {cartCount}
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] text-gray-400">0 ₫</span>
                  <span className="text-[11px] font-bold text-gray-800">
                    Tổng
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Tier 3: Location Left + Nav Center + Yellow Phone Pill Right */}
        <div className="border-t border-gray-100">
          <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-4 py-2">
            <a
              href="#footer-lookpretty"
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#163396]"
            >
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span>Vị trí cửa hàng</span>
            </a>

            <nav className="flex flex-wrap items-center gap-2 sm:gap-5">
              {merged.navigation.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded px-3 py-1 text-xs font-semibold transition ${
                    idx === 0
                      ? "bg-[#ffd400] font-bold text-gray-900"
                      : "text-gray-600 hover:text-[#163396]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </a>
              ))}
            </nav>

            <a
              href={`tel:${primaryPhone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 rounded-md bg-[#ffd400] px-4 py-1.5 text-xs font-extrabold text-gray-900 shadow-2xs hover:bg-[#f0c600]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{primaryPhone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* ==================== 2. ROYAL BLUE CONCENTRIC CIRCLES HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[#122b85] py-14 text-white sm:py-20">
        {/* Decorative Concentric Circles */}
        <div className="pointer-events-none absolute right-10 top-1/2 h-[540px] w-[540px] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left 6 Cols */}
          <div className="lg:col-span-6">
            <span className="inline-block rounded bg-[#2a47a8] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-100">
              {merged.hero.badge || "TIẾT KIỆM 60%"}
            </span>

            <h1 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight text-white sm:text-5xl">
              {merged.hero.title}
            </h1>

            {/* Inset Thumbnail + Paragraph */}
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="h-20 w-28 shrink-0 overflow-hidden rounded-md border border-white/20 bg-white/10">
                <img
                  src={merged.heroThumbImage}
                  alt="Thiết bị thẩm mỹ"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs leading-relaxed text-blue-100 sm:text-sm">
                {merged.hero.subtitle}
              </p>
            </div>

            {/* Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={merged.hero.ctaLink}
                className="inline-flex items-center gap-2 rounded bg-[#ffd400] px-6 py-3 text-xs font-extrabold text-gray-900 shadow-lg transition hover:bg-[#f0c600]"
              >
                <span>{merged.hero.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={merged.hero.secondaryCtaLink || "#danh-muc"}
                className="text-xs font-semibold text-white underline underline-offset-4 hover:text-[#ffd400]"
              >
                {merged.hero.secondaryCtaText || "Xem Tất Cả"}
              </a>
            </div>
          </div>

          {/* Right 6 Cols: High-Tech Clinic Display Frame */}
          <div className="flex justify-center lg:col-span-6">
            <div className="relative w-full max-w-lg">
              <div className="overflow-hidden rounded-xl border-4 border-white/80 bg-gray-900 shadow-2xl">
                <img
                  src={merged.hero.backgroundImage}
                  alt={merged.hero.title}
                  className="h-72 w-full object-cover sm:h-80"
                />
              </div>
              {/* Monitor Stand */}
              <div className="mx-auto h-6 w-20 bg-gradient-to-b from-gray-300 to-gray-100" />
              <div className="mx-auto h-2.5 w-44 rounded-full bg-white shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. DANH MỤC SẢN PHẨM (4 CARDS) ==================== */}
      <section id="danh-muc" className="mx-auto max-w-[1180px] px-4 pt-14 pb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
            Danh Mục Sản Phẩm
          </h2>
          <a
            href="#san-pham-noi-bat"
            className="rounded bg-[#0b172a] px-4 py-2 text-xs font-bold text-white hover:bg-[#163396]"
          >
            Xem Tất Cả
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {merged.categoryCards.map((cat) => (
            <div
              key={cat.id}
              className="relative flex flex-col justify-between overflow-hidden rounded-lg bg-[#f2f4f9] p-5 transition hover:shadow-md"
            >
              <div>
                <h3 className="text-sm font-extrabold text-gray-900">
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-gray-500">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="text-gray-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-2 flex justify-end">
                <div className="h-20 w-24 overflow-hidden rounded-lg bg-white p-1.5 shadow-xs">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full rounded object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 4. ASYMMETRIC PROMO BENTO GRID ==================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-6">
        {/* Top Row: Left Yellow Banner + Right Aqua-Teal Banner */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Yellow Banner */}
          <div className="flex items-center justify-between overflow-hidden rounded-lg bg-[#ffd400] p-6 sm:p-8">
            <div className="max-w-[55%]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">
                {merged.promoBento.yellowBanner.eyebrow}
              </span>
              <h3 className="mt-1 whitespace-pre-line text-2xl font-extrabold leading-tight text-gray-900">
                {merged.promoBento.yellowBanner.title}
              </h3>
              <p className="mt-2 whitespace-pre-line text-xs text-gray-700">
                {merged.promoBento.yellowBanner.subtitle}
              </p>
              <a
                href="#san-pham-noi-bat"
                className="mt-4 inline-block rounded border border-gray-800 px-4 py-1.5 text-xs font-bold text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                {merged.promoBento.yellowBanner.ctaText}
              </a>
            </div>
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-xl bg-black/10 sm:h-44 sm:w-44">
              <img
                src={merged.promoBento.yellowBanner.image}
                alt={merged.promoBento.yellowBanner.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Teal Banner */}
          <div className="flex items-center justify-between overflow-hidden rounded-lg bg-[#00b8c8] p-6 text-white sm:p-8">
            <div className="max-w-[55%]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-100">
                {merged.promoBento.tealBanner.eyebrow}
              </span>
              <h3 className="mt-1 whitespace-pre-line text-2xl font-extrabold leading-tight text-white">
                {merged.promoBento.tealBanner.title}
              </h3>
              <p className="mt-2 whitespace-pre-line text-xs text-cyan-50">
                {merged.promoBento.tealBanner.subtitle}
              </p>
              <a
                href="#san-pham-noi-bat"
                className="mt-4 inline-block rounded border border-white px-4 py-1.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#00b8c8]"
              >
                {merged.promoBento.tealBanner.ctaText}
              </a>
            </div>
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-xl bg-white/15 sm:h-44 sm:w-44">
              <img
                src={merged.promoBento.tealBanner.image}
                alt={merged.promoBento.tealBanner.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Left 2 Product Cards + Right Ruby Red Banner */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Left 2 Product Cards (6 Cols) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            {merged.promoBento.bentoProducts.map((prod) =>
              renderProductCard(prod)
            )}
          </div>

          {/* Right Ruby Red Banner (6 Cols) */}
          <div className="flex items-center justify-between overflow-hidden rounded-lg bg-[#9e1b22] p-6 text-white sm:p-8 lg:col-span-6">
            <div className="h-44 w-40 shrink-0 overflow-hidden rounded-xl bg-white/10 sm:h-52 sm:w-48">
              <img
                src={merged.promoBento.redBanner.image}
                alt={merged.promoBento.redBanner.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pl-6">
              <span className="text-xs font-semibold text-red-200">
                {merged.promoBento.redBanner.eyebrow}
              </span>
              <h3 className="mt-0.5 text-2xl font-extrabold text-white">
                {merged.promoBento.redBanner.title}
              </h3>
              <p className="mt-1 text-lg font-extrabold text-[#ffd400]">
                {merged.promoBento.redBanner.price}
              </p>
              <p className="mt-2 whitespace-pre-line text-xs text-red-100">
                {merged.promoBento.redBanner.subtitle}
              </p>
              <a
                href="#san-pham-noi-bat"
                className="mt-4 inline-block rounded border border-white/80 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-white hover:text-[#9e1b22]"
              >
                {merged.promoBento.redBanner.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. SẢN PHẨM NỔI BẬT (4x2 GRID) ==================== */}
      <section
        id="san-pham-noi-bat"
        className="mx-auto max-w-[1180px] px-4 py-12"
      >
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {merged.featuredProductsSection.title}
          </h2>

          {/* Filter Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {merged.featuredProductsSection.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveProductTab(tab.id)}
                className={`rounded px-4 py-1.5 text-xs font-semibold transition ${
                  activeProductTab === tab.id
                    ? "bg-[#ffd400] font-bold text-gray-900"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4x2 Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => renderProductCard(product))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setActiveProductTab("all")}
            className="inline-flex items-center gap-2 rounded bg-[#ffd400] px-6 py-2.5 text-xs font-extrabold text-gray-900 shadow-xs hover:bg-[#f0c600]"
          >
            <span>Xem Tất Cả</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* ==================== 6. ƯU ĐÃI THÁNG NÀY (DARK TEAL-NAVY BANNER) ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0d6e78] via-[#09324b] to-[#08152c] py-14 text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-12">
          {/* Left Equipment Showcase */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-xs">
              <img
                src={merged.monthlyDealBanner.image}
                alt={merged.monthlyDealBanner.title}
                className="h-64 w-full rounded-lg object-cover sm:h-72"
              />
            </div>
          </div>

          {/* Right Yellow Countdown */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              {merged.monthlyDealBanner.title}
            </h2>
            <p className="mt-1 text-sm text-cyan-100">
              {merged.monthlyDealBanner.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { val: merged.monthlyDealBanner.countdown.days, label: "NGÀY" },
                { val: merged.monthlyDealBanner.countdown.hours, label: "GIỜ" },
                {
                  val: merged.monthlyDealBanner.countdown.minutes,
                  label: "PHÚT"
                },
                {
                  val: merged.monthlyDealBanner.countdown.seconds,
                  label: "GIÂY"
                }
              ].map((box) => (
                <div
                  key={box.label}
                  className="flex h-16 w-16 flex-col items-center justify-center rounded bg-[#ffd400] text-gray-900 shadow"
                >
                  <span className="text-lg font-black leading-none">
                    {box.val}
                  </span>
                  <span className="mt-1 text-[9px] font-extrabold uppercase">
                    {box.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="#san-pham-noi-bat"
                className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-xs font-extrabold text-gray-900 shadow transition hover:bg-[#ffd400]"
              >
                <span>{merged.monthlyDealBanner.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. KHÁCH HÀNG ĐÁNH GIÁ ==================== */}
      <section className="mx-auto max-w-[1180px] px-4 py-14">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
            {merged.customerReviewsSection.title}
          </h2>
          <a
            href="#tin-tuc-moi"
            className="inline-flex items-center gap-1.5 rounded bg-[#ffd400] px-4 py-2 text-xs font-extrabold text-gray-900 hover:bg-[#f0c600]"
          >
            <span>Xem Tất Cả</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Portrait on Yellow Background (4 Cols) */}
          <div className="overflow-hidden rounded-lg bg-[#ffd400] lg:col-span-4">
            <img
              src={merged.customerReviewsSection.portraitImage}
              alt="Khách hàng LookPretty"
              className="h-full min-h-[320px] w-full object-cover mix-blend-multiply"
            />
          </div>

          {/* Right 2x2 Review Cards (8 Cols) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
            {merged.customerReviewsSection.reviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-lg border border-gray-100 bg-white p-5 shadow-xs"
              >
                <div>
                  <div className="flex gap-0.5 text-[#ffd400]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      {rev.name}
                    </h4>
                    <p className="text-[10px] text-gray-400">{rev.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. TIN TỨC MỚI NHẤT (ASYMMETRIC 2-COLUMN) ==================== */}
      <section id="tin-tuc-moi" className="mx-auto max-w-[1180px] px-4 pb-14">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900">
          {merged.latestNewsSection.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: 2 Stacked Horizontal Post Cards (6 Cols) */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {merged.latestNewsSection.leftPosts.map((post) => (
              <article
                key={post.id}
                className="grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs sm:grid-cols-12"
              >
                <div className="h-48 sm:col-span-5 sm:h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:col-span-7">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400">
                    <span>🏷️ {post.category}</span>
                    <span>•</span>
                    <span>💬 {post.comments}</span>
                    <span>•</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-sm font-bold text-gray-900 hover:text-[#163396]">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                  <a
                    href="#top"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-gray-800 hover:text-[#163396]"
                  >
                    <span>Đọc Ngay</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: 1 Large Featured Post Card (6 Cols) */}
          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs lg:col-span-6">
            <div className="h-60 overflow-hidden">
              <img
                src={merged.latestNewsSection.rightFeaturedPost.image}
                alt={merged.latestNewsSection.rightFeaturedPost.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] text-gray-400">
                  <span>
                    🏷️ {merged.latestNewsSection.rightFeaturedPost.category}
                  </span>
                  <span>
                    💬 {merged.latestNewsSection.rightFeaturedPost.comments}
                  </span>
                  <span>
                    ⏱️ {merged.latestNewsSection.rightFeaturedPost.readTime}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-gray-900 hover:text-[#163396]">
                  {merged.latestNewsSection.rightFeaturedPost.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {merged.latestNewsSection.rightFeaturedPost.excerpt}
                </p>
              </div>
              <a
                href="#top"
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gray-800 hover:text-[#163396]"
              >
                <span>Đọc Ngay</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded bg-[#ffd400] px-6 py-2.5 text-xs font-extrabold text-gray-900 hover:bg-[#f0c600]"
          >
            <span>Xem Thêm</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* ==================== 9. ROYAL BLUE 4-PERK BAR ==================== */}
      <div className="bg-[#163396] py-8 text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {merged.bluePerksBar.map((perk, idx) => {
            const icons = [Truck, Headphones, RotateCcw, Percent];
            const IconComp = icons[idx % icons.length];
            return (
              <div key={perk.id} className="flex items-center gap-3.5">
                <IconComp className="h-7 w-7 shrink-0 text-[#ffd400]" />
                <div>
                  <h4 className="text-xs font-bold text-white">{perk.title}</h4>
                  <p className="text-[11px] text-blue-200">{perk.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================== 10. WHITE 5-COLUMN FOOTER ==================== */}
      <footer id="footer-lookpretty" className="bg-white pt-12 pb-8">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="grid grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Liên hệ (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold text-gray-900">Liên hệ</h4>
              <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
                Trở thành thành viên cao cấp và được giảm giá 20% cho lần mua
                hàng tiếp theo của bạn!
              </p>
              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#163396]" />
                  <div>
                    <span className="block text-[10px] text-gray-400">
                      {merged.business.workingHours}
                    </span>
                    <span className="font-bold text-gray-800">
                      {primaryPhone}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#163396]" />
                  <div>
                    <span className="block text-[10px] text-gray-400">
                      Hỗ trợ trực tuyến 24/7
                    </span>
                    <span className="font-bold text-gray-800">
                      {primaryEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: Sản phẩm (2 Cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-gray-900">Sản phẩm</h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {[
                  "Xu Hướng",
                  "Bán Chạy",
                  "Giảm Giá",
                  "Phiên Bản Mới",
                  "Còn Hàng"
                ].map((item) => (
                  <li key={item}>
                    <a href="#san-pham-noi-bat" className="hover:text-[#163396]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Liên kết (2 Cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-gray-900">Liên kết</h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {[
                  "Chính Sách Hoàn Trả",
                  "Thông Tin Giao Hàng",
                  "Điều Khoản & Dịch Vụ",
                  "Chính Sách Bảo Mật",
                  "Thông Tin Giảm Giá"
                ].map((item) => (
                  <li key={item}>
                    <a href="#top" className="hover:text-[#163396]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Danh mục (2 Cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold text-gray-900">Danh mục</h4>
              <ul className="mt-3 space-y-2 text-xs text-gray-500">
                {["Giới Thiệu", "Sản Phẩm", "Tin Tức", "FAQ", "Liên Hệ"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#top" className="hover:text-[#163396]">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Col 5: Đăng ký tin tức (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold text-gray-900">
                Đăng ký tin tức
              </h4>
              <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
                Đăng ký thành viên VIP để nhận ngay ưu đãi giảm 20% cho đơn hàng
                kế tiếp!
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterDone(true);
                    setNewsletterEmail("");
                  }
                }}
                className="mt-3 flex overflow-hidden rounded border border-gray-200 bg-gray-50"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email..."
                  required
                  className="w-full bg-transparent px-3 py-2 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Gửi"
                  className="flex items-center justify-center bg-[#ffd400] px-3.5 text-gray-900 hover:bg-[#f0c600]"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
              {newsletterDone && (
                <p className="mt-1.5 text-[11px] font-semibold text-[#163396]">
                  ✓ Đã đăng ký nhận bản tin thành công!
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6 text-[11px] text-gray-400">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-gray-700">{merged.business.name}</strong>
            </p>
            <div className="flex items-center gap-2">
              {["VISA", "PAYPAL", "MASTER", "GPAY", "APAY"].map((p) => (
                <span
                  key={p}
                  className="rounded bg-[#163396] px-2 py-0.5 text-[9px] font-bold text-white"
                >
                  {p}
                </span>
              ))}
              <a
                href="#top"
                aria-label="Lên đầu trang"
                className="ml-2 flex h-7 w-7 items-center justify-center rounded-full border border-[#163396] text-[#163396]"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
