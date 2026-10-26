"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  X,
  Check
} from "lucide-react";
import {
  adaptClonedTemplateData,
  type ClonedTemplateInput
} from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien11DefaultData,
  type MonnaClinicData,
  type MonnaProductItem
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  template?: ClonedTemplateInput;
  companyName?: string;
}

/**
 * 12-Point Geometric Starburst SVG matching TMV014-tham_my_vien_11.png
 */
function TwelvePointStarburst({
  children,
  className = "h-36 w-36"
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full text-neutral-700"
        fill="white"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="100,4 114,58 148,16 135,68 184,52 146,90 196,100 146,110 184,148 135,132 148,184 114,142 100,196 86,142 52,184 65,132 16,148 54,110 4,100 54,90 16,52 65,68 52,16 86,58" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/**
 * 8-Point Decorative Heading Star
 */
function EightPointStar({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  );
}

export function DemoTemplateRenderer({
  data,
  template,
  companyName
}: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<MonnaClinicData>(
    thamMyVien11DefaultData,
    {
      ...(data || template || {}),
      ...(companyName ? { companyName } : {})
    }
  );

  const [activeTab, setActiveTab] = useState<
    "all" | "cham-soc-da" | "lieu-trinh" | "phu-kien"
  >("all");
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState<MonnaProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const primaryPhone =
    Array.isArray(merged.business.phone) && merged.business.phone.length > 0
      ? merged.business.phone[0]
      : "(+84) 313728397";
  const primaryEmail =
    Array.isArray(merged.business.email) && merged.business.email.length > 0
      ? merged.business.email[0]
      : "info@themona.global";

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const displayedProducts = merged.bestSellersSection.products.filter((p) => {
    const matchesTab = activeTab === "all" || p.tab === activeTab;
    const matchesSearch =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div
      id="top"
      className="min-h-screen bg-white font-sans text-[#111111] selection:bg-black selection:text-white"
    >
      {/* Floating Editorial Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 border border-black bg-[#111111] px-5 py-3 text-xs font-medium tracking-wider text-white shadow-2xl">
          <Check className="h-4 w-4 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-xl border border-black bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center border border-black text-black hover:bg-black hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative aspect-[4/5] border border-black bg-[#f2f2f2]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
                {selectedProduct.isSale && (
                  <span className="absolute left-3 top-3 bg-black px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                    SALE!
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {merged.business.name} COLLECTION
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-normal uppercase leading-snug text-black">
                    {selectedProduct.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    {selectedProduct.oldPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {selectedProduct.oldPrice}
                      </span>
                    )}
                    <span className="font-bold text-black">
                      {selectedProduct.price}
                    </span>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-neutral-600">
                    {selectedProduct.description}
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCartCount((c) => c + 1);
                      triggerToast(
                        `Đã thêm "${selectedProduct.name}" vào giỏ hàng!`
                      );
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-black py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
                  >
                    THÊM VÀO GIỎ HÀNG
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setWishlistCount((w) => w + 1);
                      triggerToast("Đã lưu sản phẩm vào danh sách yêu thích!");
                    }}
                    className="w-full border border-black py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-neutral-100"
                  >
                    YÊU THÍCH
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. TOP BLACK BAR + WHITE EDITORIAL HEADER ==================== */}
      <header className="sticky top-0 z-40 bg-white">
        {/* Top Pitch-Black Announcement Bar */}
        <div className="bg-[#0f0f0f] text-[11px] text-neutral-200">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-2">
            <a href="#footer-monna" className="hover:text-white">
              Tài khoản
            </a>
            <p className="truncate px-2 text-center font-medium text-white">
              {merged.topAnnouncement}
            </p>
            <div className="hidden items-center gap-1 sm:flex">
              <span>Việt Nam</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>
        </div>

        {/* Main White Navigation Bar */}
        <div className="border-b border-neutral-100">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4">
            {/* Left Serif Brand Logo */}
            <a
              href="#top"
              className="font-serif text-xl font-bold uppercase tracking-[0.14em] text-black sm:text-2xl"
            >
              {merged.business.name}
            </a>

            {/* Center Navigation */}
            <nav className="hidden items-center gap-7 md:flex">
              {merged.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-800 transition hover:text-black"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </a>
              ))}
            </nav>

            {/* Right Icons: Search, Heart, Bag */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSearchOpen((s) => !s)}
                aria-label="Tìm kiếm"
                className="text-neutral-800 hover:text-black"
              >
                <Search className="h-4 w-4 stroke-[1.6]" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setWishlistCount((w) => w + 1);
                  triggerToast("Đã thêm vào danh sách yêu thích Monna!");
                }}
                aria-label="Yêu thích"
                className="relative text-neutral-800 hover:text-black"
              >
                <Heart className="h-4 w-4 stroke-[1.6]" />
                {wishlistCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() =>
                  triggerToast(`Giỏ hàng đang có ${cartCount} sản phẩm.`)
                }
                aria-label="Giỏ hàng"
                className="relative flex items-center text-neutral-800 hover:text-black"
              >
                <ShoppingBag className="h-4 w-4 stroke-[1.6]" />
                <span className=" -mt-2 ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Expandable Search Input */}
          {searchOpen && (
            <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-3">
              <div className="mx-auto flex max-w-md items-center gap-2 border-b border-black pb-1">
                <Search className="h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm, bộ sưu tập mùa Xuân..."
                  className="w-full bg-transparent text-xs focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
                  className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-black"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ==================== 2. EDITORIAL ASYMMETRIC HERO SECTION ==================== */}
      <section className="relative mx-auto max-w-[1180px] overflow-hidden px-4 pt-8 pb-16">
        {/* Left Vertical Outlined Watermark "2026" */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-2 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none font-sans text-7xl font-black tracking-widest text-transparent lg:block"
          style={{ WebkitTextStroke: "1px #e5e5e5" }}
        >
          {merged.heroYearWatermark}
        </div>

        <div className="relative mx-auto grid max-w-4xl grid-cols-1 items-center lg:grid-cols-12">
          {/* Left Editorial Typography Overlapping Right Portrait */}
          <div className="relative z-20 py-6 lg:col-span-6 lg:-mr-24">
            <h1 className="font-serif text-4xl font-normal uppercase leading-[1.08] tracking-wide text-black sm:text-6xl">
              <span className="block">{merged.heroHeadingLines.line1}</span>
              <span className="block italic">
                {merged.heroHeadingLines.line2Italic}
              </span>
              <span className="block">{merged.heroHeadingLines.line3}</span>
            </h1>

            <div className="mt-7">
              <a
                href={merged.hero.ctaLink}
                className="group inline-flex items-center gap-4 rounded-full border border-black bg-white py-1.5 pl-5 pr-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
              >
                <span>{merged.hero.ctaText}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition group-hover:bg-white group-hover:text-black">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Framed Editorial Portrait */}
          <div className="relative lg:col-span-6">
            <div className="aspect-[4/4.6] w-full overflow-hidden border border-black bg-[#d6d3ce]">
              <img
                src={merged.hero.backgroundImage}
                alt={merged.hero.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Bottom-Left Overlapping 12-Point Starburst with Down Arrow */}
            <a
              href="#san-pham-ban-chay"
              aria-label="Cuộn xuống"
              className="absolute -bottom-10 -left-10 z-30 hidden sm:inline-block"
            >
              <TwelvePointStarburst className="h-36 w-36 transition-transform duration-500 hover:rotate-45">
                <ArrowDown className="h-4 w-4 text-black" />
              </TwelvePointStarburst>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 3. CRISSCROSSING DIAGONAL MARQUEE RIBBONS ==================== */}
      <div className="relative my-8 overflow-hidden py-10">
        {/* White Outlined Ribbon Tilted Up */}
        <div className="w-[110%] -translate-x-4 rotate-[4deg] border-y border-neutral-300 bg-white py-3 shadow-xs">
          <div className="flex items-center justify-around whitespace-nowrap font-serif text-lg uppercase tracking-[0.22em] text-neutral-800 sm:text-xl">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="mx-4 inline-flex items-center gap-4">
                <span>{merged.marqueeText}</span>
                <EightPointStar className="h-3.5 w-3.5 text-neutral-400" />
              </span>
            ))}
          </div>
        </div>

        {/* Pitch-Black Ribbon Tilted Down Overlapping */}
        <div className="-mt-11 w-[110%] -translate-x-4 -rotate-[3deg] bg-[#0f0f0f] py-3.5 text-white shadow-md">
          <div className="flex items-center justify-around whitespace-nowrap font-serif text-lg uppercase tracking-[0.22em] sm:text-xl">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="mx-4 inline-flex items-center gap-4">
                <span>{merged.marqueeText}</span>
                <EightPointStar className="h-3.5 w-3.5 text-white/80" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== 4. ✸ SẢN PHẨM BÁN CHẠY ✸ (4x2 FRAMED GRID) ==================== */}
      <section
        id="san-pham-ban-chay"
        className="mx-auto max-w-[1040px] px-4 py-14"
      >
        {/* Section Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <EightPointStar className="h-4 w-4 text-black" />
            <h2 className="font-serif text-2xl font-normal uppercase tracking-[0.12em] text-black sm:text-3xl">
              {merged.bestSellersSection.title}
            </h2>
            <EightPointStar className="h-4 w-4 text-black" />
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            {merged.bestSellersSection.subtitle}
          </p>

          {/* Filter Tabs with Top & Bottom Black Border on Active */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`py-1.5 text-xs uppercase tracking-[0.15em] transition ${
                activeTab === "all"
                  ? "border-y border-black font-semibold text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              TẤT CẢ
            </button>
            {merged.bestSellersSection.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 text-xs uppercase tracking-[0.15em] transition ${
                  activeTab === tab.id
                    ? "border-y border-black font-semibold text-black"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4x2 Framed Product Grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/4.6] overflow-hidden border border-neutral-800 bg-[#f0f0f0]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {product.isSale && (
                  <span className="absolute left-2.5 top-2.5 bg-black px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                    SALE!
                  </span>
                )}
              </div>

              <div className="mt-2.5">
                <h3 className="line-clamp-1 text-[10px] font-medium uppercase tracking-wider text-neutral-800 group-hover:text-black">
                  {product.name}
                </h3>
                <div className="mt-0.5 flex items-center gap-1.5 text-[10px]">
                  {product.oldPrice && (
                    <span className="text-neutral-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="font-semibold text-neutral-700">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 5. PITCH-BLACK TILTED POLAROID PROMO ("ƯU ĐÃI TỚI 45%") ==================== */}
      <section
        id="uu-dai-mua-xuan"
        className="my-10 bg-[#0d0d0d] py-16 text-white sm:py-20"
      >
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-12">
          {/* Left: Tilted Portrait + Overlapping White Product Card */}
          <div className="relative flex items-center justify-center md:col-span-6">
            <div className="h-72 w-56 -rotate-6 overflow-hidden border-2 border-white/20 bg-neutral-800 shadow-2xl sm:h-80 sm:w-64">
              <img
                src={merged.blackPromoSection.tiltedPortrait}
                alt="Monna Editorial"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" -ml-10 mt-12 h-36 w-40 overflow-hidden border-4 border-white bg-[#f2f2f2] p-2 shadow-xl">
              <img
                src={merged.blackPromoSection.insetProductImage}
                alt="Sản phẩm ưu đãi"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: ƯU ĐÃI TỚI 45% + Scalloped Countdown Badges */}
          <div className="md:col-span-6">
            <h2 className="font-serif text-2xl font-normal uppercase tracking-wider text-white sm:text-3xl">
              {merged.blackPromoSection.title}
            </h2>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-neutral-300">
              {merged.blackPromoSection.description}
            </p>

            {/* 4 Scalloped / Star-Edged Countdown Circles */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {[
                { val: merged.blackPromoSection.countdown.days, label: "Ngày" },
                { val: merged.blackPromoSection.countdown.hours, label: "Giờ" },
                {
                  val: merged.blackPromoSection.countdown.minutes,
                  label: "Phút"
                },
                {
                  val: merged.blackPromoSection.countdown.seconds,
                  label: "Giây"
                }
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative flex h-16 w-16 flex-col items-center justify-center rounded-full border border-dashed border-neutral-600 bg-neutral-900/90 text-center"
                >
                  <span className="font-serif text-lg font-bold leading-none text-white">
                    {item.val}
                  </span>
                  <span className="mt-1 text-[9px] uppercase tracking-widest text-neutral-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#san-pham-ban-chay"
                className="inline-flex items-center gap-3 border border-neutral-500 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                <span>{merged.blackPromoSection.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. ✸ VỀ MONNA ✸ (4 GEOMETRIC ICONS) ==================== */}
      <section id="ve-monna" className="mx-auto max-w-[1040px] px-4 py-14">
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <EightPointStar className="h-4 w-4 text-black" />
            <h2 className="font-serif text-2xl font-normal uppercase tracking-[0.12em] text-black sm:text-3xl">
              {merged.aboutMonnaSection.title}
            </h2>
            <EightPointStar className="h-4 w-4 text-black" />
          </div>
          <p className="mt-1.5 text-xs text-neutral-500">
            {merged.aboutMonnaSection.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {merged.aboutMonnaSection.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col items-center text-center"
            >
              {/* Geometric Black Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center">
                {pillar.shape === "diamond-solid" && (
                  <div className="h-7 w-7 rotate-45 bg-black" />
                )}
                {pillar.shape === "circle-solid" && (
                  <div className="h-8 w-8 rounded-full bg-black" />
                )}
                {pillar.shape === "diamond-outline" && (
                  <div className="flex h-7 w-7 rotate-45 items-center justify-center border-[3px] border-black">
                    <div className="h-2 w-2 bg-black" />
                  </div>
                )}
                {pillar.shape === "star-burst" && (
                  <svg
                    viewBox="0 0 40 40"
                    className="h-9 w-9 text-black"
                    fill="currentColor"
                  >
                    <polygon points="20,0 24,14 36,6 28,18 40,20 28,22 36,34 24,26 20,40 16,26 4,34 12,22 0,20 12,18 4,6 16,14" />
                  </svg>
                )}
              </div>

              <h3 className="font-serif text-xs font-bold uppercase tracking-[0.14em] text-black">
                {pillar.title}
              </h3>
              <p className="mt-2.5 max-w-[220px] text-[11px] leading-relaxed text-neutral-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 7. FOUNDER EDITORIAL QUOTE SECTION ==================== */}
      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          {/* Speech Bubble Quote Icon */}
          <div className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-black text-xs font-serif">
            99
          </div>

          <div className="mt-3 flex justify-center gap-1 text-xs text-black">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <blockquote className="mt-4 font-serif text-lg font-normal uppercase leading-relaxed tracking-wide text-black sm:text-2xl">
            {merged.founderQuote.quote}
          </blockquote>

          <div className="mt-6">
            <p className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-black">
              {merged.founderQuote.author}
            </p>
            <p className="mt-0.5 text-[10px] text-neutral-400">
              {merged.founderQuote.role}
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 8. SPLIT EDITORIAL PORTRAIT + VERTICAL TEXT + STARBURST ==================== */}
      <section id="bo-suu-tap" className="mx-auto max-w-[1280px] pt-4 pb-12">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Left 7 Cols: Large Olive-Green Editorial Portrait */}
          <div className="h-[340px] overflow-hidden bg-neutral-200 sm:h-[420px] lg:col-span-7">
            <img
              src={merged.editorialFeature.image}
              alt="Monna Collections"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Center 1 Col: Vertical Rotated Serif Words */}
          <div className="flex items-center justify-center gap-8 py-4 lg:col-span-1 lg:flex-col lg:py-0">
            {merged.editorialFeature.verticalWords.map((word) => (
              <span
                key={word}
                className="font-serif text-2xl font-normal uppercase tracking-[0.2em] text-black lg:[writing-mode:vertical-rl]"
              >
                {word}
              </span>
            ))}
          </div>

          {/* Right 4 Cols: Large 12-Point Starburst with "COLLECTIONS" */}
          <div className="flex items-center justify-center py-6 lg:col-span-4">
            <a href="#san-pham-ban-chay">
              <TwelvePointStarburst className="h-52 w-52 transition-transform duration-700 hover:rotate-12">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-black">
                  {merged.editorialFeature.starLabel}
                </span>
              </TwelvePointStarburst>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 9. LUXURY BRAND LOGOS + 5-COL LOOKBOOK STRIP ==================== */}
      <section className="pt-6">
        {/* 5 Partner Logos */}
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-around gap-8 px-4 py-10">
          {merged.partnerBrands.map((brand) => (
            <div key={brand.name} className="text-center">
              <span className="block font-serif text-sm font-black uppercase tracking-[0.18em] text-black sm:text-base">
                {brand.name}
              </span>
              {brand.sub && (
                <span className="block text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  {brand.sub}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 5-Column Full-Bleed Lookbook Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5">
          {merged.lookbookStrip.map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-square overflow-hidden bg-neutral-200"
            >
              <img
                src={imgUrl}
                alt={`Monna Lookbook ${idx + 1}`}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 10. PITCH-BLACK FOOTER (#111111) ==================== */}
      <footer id="footer-monna" className="bg-[#111111] pt-14 pb-8 text-neutral-400">
        <div className="mx-auto max-w-[1040px] px-4">
          <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: MONNA Info */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl font-normal uppercase tracking-[0.14em] text-white">
                {merged.business.name}
              </h3>
              <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
                Nhận ưu đãi, thông báo sản phẩm mới và hơn thế nữa. Bằng cách
                đăng ký, bạn đồng ý với Chính sách quyền riêng tư của chúng tôi.
              </p>
              <ul className="mt-4 space-y-1.5 text-[11px] text-neutral-300">
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-neutral-400" />
                  <span>{primaryEmail}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-neutral-400" />
                  <span>{primaryPhone}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: LIÊN KẾT */}
            <div className="lg:col-span-3">
              <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-white">
                LIÊN KẾT
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                {merged.footerLinks.map((lnk) => (
                  <a
                    key={lnk}
                    href="#top"
                    className="text-neutral-400 transition hover:text-white"
                  >
                    {lnk}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: HỖ TRỢ */}
            <div className="lg:col-span-3">
              <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-white">
                HỖ TRỢ
              </h4>
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                {merged.footerSupport.map((sup) => (
                  <a
                    key={sup}
                    href="#top"
                    className="text-neutral-400 transition hover:text-white"
                  >
                    {sup}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: MAP */}
            <div className="lg:col-span-2">
              <h4 className="font-serif text-xs font-bold uppercase tracking-[0.16em] text-white">
                MAP
              </h4>
              <div className="mt-4 overflow-hidden rounded-xs border border-neutral-700 bg-neutral-200 p-2 text-neutral-800">
                <div className="bg-white p-2 text-[9px] shadow-xs">
                  <p className="font-bold text-black">
                    {merged.business.name} Clinic
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-neutral-500">
                    {merged.business.address}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1 py-2 text-[10px] font-semibold text-neutral-700">
                  <MapPin className="h-3.5 w-3.5 text-red-600" />
                  <span>Xem bản đồ lớn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6 text-center text-[11px] text-neutral-500">
            © Thiết kế và lập trình bởi{" "}
            <strong className="text-white">{merged.business.name}</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
