"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Headphones,
  Menu,
  MapPin,
  ChevronRight,
  ChevronDown,
  Star,
  Heart,
  Play,
  ShieldCheck,
  Truck,
  RotateCcw,
  Award,
  PhoneCall,
  Mail,
  CheckCircle2,
  X
} from "lucide-react";
import { adaptClonedTemplateData, type ClonedTemplateInput } from "@/lib/demo/clonedTemplateUtils";
import {
  thamMyVien8DefaultData,
  type ThamMyVien8Data,
  type ThamMyVien8Product
} from "../../data/mockData";

export interface DemoTemplateRendererProps {
  data?: ClonedTemplateInput;
  companyName?: string;
}

export function DemoTemplateRenderer({ data, companyName }: DemoTemplateRendererProps) {
  const merged = adaptClonedTemplateData<ThamMyVien8Data>(thamMyVien8DefaultData, {
    ...(data || {}),
    ...(companyName ? { companyName } : {})
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [cartCount, setCartCount] = useState<number>(2);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [activeTabByBlock, setActiveTabByBlock] = useState<Record<string, string>>({});
  const [quickOrderProduct, setQuickOrderProduct] = useState<ThamMyVien8Product | null>(null);

  const handleAddToCart = (product: ThamMyVien8Product) => {
    setCartCount((prev) => prev + 1);
    setToastMessage(`Đã thêm "${product.name}" vào giỏ hàng!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  const renderProductCard = (product: ThamMyVien8Product) => (
    <div
      key={product.id}
      className="group relative flex flex-col justify-between border border-gray-100 bg-white p-3.5 transition-all hover:border-[#2f6e53]/40 hover:shadow-md"
    >
      {/* Orange circular discount badge */}
      {product.discountCircle && (
        <span className="absolute left-2.5 top-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#ff6600] text-[11px] font-bold text-white shadow-sm">
          {product.discountCircle}
        </span>
      )}

      <div>
        {/* Product image */}
        <div
          onClick={() => setQuickOrderProduct(product)}
          className="relative mb-3 flex h-40 w-full cursor-pointer items-center justify-center overflow-hidden bg-white p-2"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Category label */}
        <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        {/* Product title */}
        <h4
          onClick={() => setQuickOrderProduct(product)}
          className="mb-2 line-clamp-2 min-h-[34px] cursor-pointer text-center text-xs font-medium leading-snug text-gray-800 group-hover:text-[#2f6e53]"
        >
          {product.name}
        </h4>
      </div>

      {/* Prices + Add to cart button */}
      <div className="mt-1 flex flex-col items-center">
        <div className="mb-2.5 flex items-center justify-center gap-2 text-xs">
          {product.oldPrice && (
            <span className="text-[11px] text-gray-400 line-through">{product.oldPrice}</span>
          )}
          <span className="font-bold text-gray-900">{product.price}</span>
        </div>

        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          className="w-full border border-gray-300 bg-white py-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:border-[#2f6e53] hover:bg-[#2f6e53] hover:text-white"
        >
          THÊM VÀO GIỎ
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-gray-800 antialiased">
      {/* Floating Cart Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded bg-[#2f6e53] px-4 py-3 text-xs font-semibold text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-[#ff6600]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Quick Product Modal */}
      {quickOrderProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setQuickOrderProduct(null)}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-48 w-48">
                <img
                  src={quickOrderProduct.image}
                  alt={quickOrderProduct.name}
                  className="h-full w-full object-contain"
                />
                {quickOrderProduct.discountCircle && (
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6600] text-xs font-bold text-white">
                    {quickOrderProduct.discountCircle}
                  </span>
                )}
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2f6e53]">
                {quickOrderProduct.category}
              </span>
              <h3 className="mt-1 text-base font-bold text-gray-900">
                {quickOrderProduct.name}
              </h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-xs text-gray-400 line-through">
                  {quickOrderProduct.oldPrice}
                </span>
                <span className="text-lg font-extrabold text-[#ff6600]">
                  {quickOrderProduct.price}
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Cam kết hàng chính hãng 100% — Giao nhanh nội thành dưới 120 phút.
              </p>
              <div className="mt-5 flex w-full gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(quickOrderProduct);
                    setQuickOrderProduct(null);
                  }}
                  className="flex-1 bg-[#2f6e53] py-2.5 text-xs font-bold uppercase text-white hover:bg-[#245741]"
                >
                  Thêm Vào Giỏ Hàng
                </button>
                <button
                  type="button"
                  onClick={() => setQuickOrderProduct(null)}
                  className="border border-gray-300 px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 1. TOP WHITE HEADER ==================== */}
      <header className="bg-white">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 px-4 py-4">
          {/* Brand Logo: MONA SHOP - Chất lượng cho tất cả ! */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f6e53] text-white shadow-sm">
              <span className="font-serif text-lg font-bold tracking-tighter">✿</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black tracking-tight text-[#2f6e53]">
                  {merged.business.name}
                </span>
              </div>
              <p className="text-[11px] font-medium italic text-[#2f6e53]">
                {merged.slogan}
              </p>
            </div>
          </a>

          {/* Center Search Bar with All dropdown & green search button */}
          <div className="order-3 w-full max-w-xl lg:order-2 lg:w-auto lg:flex-1">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex h-10 w-full overflow-hidden rounded-sm border-2 border-[#2f6e53] bg-white"
            >
              <div className="relative flex items-center border-r border-gray-200 bg-gray-50 px-3 text-xs text-gray-700">
                <select
                  aria-label="Chọn danh mục"
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="appearance-none bg-transparent pr-4 text-xs font-medium text-gray-700 focus:outline-none"
                >
                  <option value="All">All</option>
                  {merged.sidebarCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-1.5 h-3.5 w-3.5 text-gray-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm, thương hiệu, dịch vụ làm đẹp..."
                className="flex-1 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-[#2f6e53] px-4 text-white transition-colors hover:bg-[#245741]"
                aria-label="Tìm kiếm"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Right Quick Actions: Giỏ hàng | Đăng Nhập / Đăng Ký | Hỗ Trợ Khách Hàng */}
          <div className="order-2 flex items-center gap-5 lg:order-3">
            <button
              type="button"
              onClick={() =>
                setToastMessage(`Giỏ hàng của bạn đang có ${cartCount} sản phẩm.`)
              }
              className="flex items-center gap-2 text-left group"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#2f6e53]/30 text-[#2f6e53] group-hover:bg-[#2f6e53] group-hover:text-white transition-colors">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff6600] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-bold text-gray-800">Giỏ Hàng</p>
                <p className="text-[10px] text-gray-500">{cartCount} sản phẩm</p>
              </div>
            </button>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2f6e53]/30 text-[#2f6e53]">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Đăng Nhập / Đăng Ký</p>
                <p className="text-[10px] text-gray-500">Tài khoản ▾</p>
              </div>
            </div>

            <a
              href={`tel:${merged.supportHotline.replace(/\s+/g, "")}`}
              className="hidden items-center gap-2 md:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2f6e53]/30 text-[#2f6e53]">
                <Headphones className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Hỗ Trợ</p>
                <p className="text-[10px] font-medium text-[#2f6e53]">Khách Hàng</p>
              </div>
            </a>
          </div>
        </div>

        {/* ==================== 2. SOLID JADE GREEN NAVIGATION BAR ==================== */}
        <nav className="bg-[#2f6e53] text-white">
          <div className="mx-auto flex max-w-[1220px] items-center justify-between px-4">
            <div className="flex items-center">
              {/* Left Category Menu Header matching 240px width */}
              <div className="flex w-[230px] items-center gap-2.5 bg-[#265c44] px-3.5 py-3 text-xs font-bold uppercase tracking-wide">
                <Menu className="h-4 w-4" />
                <span>DANH MỤC SẢN PHẨM</span>
              </div>

              {/* Horizontal nav links */}
              <ul className="hidden items-center md:flex">
                {[
                  { label: "TRANG CHỦ", href: "#top" },
                  { label: "GIỚI THIỆU", href: "#ve-chung-toi" },
                  { label: "CỬA HÀNG", href: "#deal-dang-dien-ra" },
                  { label: "TIN TỨC", href: "#goi-y-cho-ban" },
                  { label: "LIÊN HỆ", href: "#footer-contact" }
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/95 transition-colors hover:bg-[#245741] hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Track Order Link */}
            <a
              href="#footer-contact"
              className="flex items-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:text-[#ffcb99]"
            >
              <MapPin className="h-3.5 w-3.5 text-[#ff6600]" />
              <span>TRA CỨU ĐƠN HÀNG</span>
            </a>
          </div>
        </nav>
      </header>

      {/* ==================== 3. HERO 3-COLUMN SECTION ==================== */}
      <section className="mx-auto max-w-[1220px] px-4 pt-3">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {/* Left Vertical Sidebar Categories (11 items) */}
          <div className="hidden lg:col-span-3 lg:block xl:w-[230px]">
            <ul className="divide-y divide-gray-100 border border-gray-200 bg-white shadow-xs">
              {merged.sidebarCategories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#san-pham-duong-da"
                    className="flex items-center justify-between px-3.5 py-[9.5px] text-xs font-medium text-gray-700 transition-colors hover:bg-[#f2f9f6] hover:font-semibold hover:text-[#2f6e53]"
                  >
                    <span>{cat}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Main Promotional Banner */}
          <div className="lg:col-span-6 xl:ml-[-18px]">
            <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden border border-gray-200 bg-gradient-to-r from-[#2c333e] via-[#3a4250] to-[#232931] p-6 text-white sm:p-8">
              <img
                src={merged.hero.backgroundImage}
                alt={merged.hero.title}
                className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />

              {/* Decorative top script & headline */}
              <div className="relative z-10 mt-4 text-center">
                <p className="font-serif text-xl italic text-[#f8d49a] sm:text-2xl">
                  Chương trình tích điểm
                </p>
                <h1 className="mt-1 text-2xl font-black uppercase tracking-wider text-white sm:text-4xl">
                  {merged.hero.title}
                </h1>
                <div className="mx-auto mt-3 max-w-md">
                  <p className="text-xs leading-relaxed text-gray-200">
                    {merged.hero.subtitle}
                  </p>
                </div>
              </div>

              {/* Stylized privilege cards preview inside banner */}
              <div className="relative z-10 my-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { tier: "BẠC", pts: "500 ĐIỂM", desc: "Voucher 50.000đ" },
                  { tier: "VÀNG", pts: "1.000 ĐIỂM", desc: "Voucher 120.000đ" },
                  { tier: "BẠCH KIM", pts: "2.000 ĐIỂM", desc: "Voucher 300.000đ" },
                  { tier: "KIM CƯƠNG", pts: "5.000 ĐIỂM", desc: "Quà VIP + Giảm 15%" }
                ].map((card) => (
                  <div
                    key={card.tier}
                    className="rounded border border-white/25 bg-white/90 p-2.5 text-center text-gray-800 backdrop-blur-xs"
                  >
                    <span className="block rounded-xs bg-[#2f6e53] py-0.5 text-[10px] font-bold text-white">
                      HẠNG {card.tier}
                    </span>
                    <p className="mt-1.5 text-[11px] font-extrabold text-[#ff6600]">
                      {card.pts}
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-600">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA button */}
              <div className="relative z-10 text-center">
                <a
                  href={merged.hero.ctaLink}
                  className="inline-block rounded-xs border border-white/80 bg-[#2f6e53]/90 px-6 py-1.5 text-xs font-semibold text-white transition hover:bg-[#ff6600] hover:border-[#ff6600]"
                >
                  {merged.hero.ctaText}
                </a>
              </div>
            </div>
          </div>

          {/* Right Trust Guarantees Box ("— CHẤT LƯỢNG CHO TẤT CẢ —") */}
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col justify-between border border-gray-200 bg-white p-4">
              <div>
                <div className="mb-4 flex items-center justify-center gap-2 text-center">
                  <span className="h-[1px] w-4 bg-[#2f6e53]" />
                  <h2 className="text-[11px] font-extrabold uppercase tracking-wider text-[#2f6e53]">
                    CHẤT LƯỢNG CHO TẤT CẢ
                  </h2>
                  <span className="h-[1px] w-4 bg-[#2f6e53]" />
                </div>

                {/* 2x2 Green Badge Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {merged.trustGuarantees.map((item, idx) => {
                    const icons = [ShieldCheck, Truck, RotateCcw, Award];
                    const IconComp = icons[idx % icons.length];
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col items-center rounded border border-gray-100 bg-[#f9fbfa] p-3 text-center"
                      >
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[#2f6e53] bg-[#2f6e53] text-white shadow-xs">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <p className="whitespace-pre-line text-[11px] font-medium leading-tight text-gray-700">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Orange Headset Hotline Box */}
              <div className="mt-4 flex items-center gap-3 border-t border-dashed border-gray-200 pt-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#ff6600] bg-orange-50 text-[#ff6600]">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600">
                    Dịch vụ CSKH chu đáo
                  </p>
                  <p className="text-xs font-bold text-gray-900">
                    Hotline:{" "}
                    <a
                      href={`tel:${merged.supportHotline.replace(/\s+/g, "")}`}
                      className="text-[#ff6600] hover:underline"
                    >
                      {merged.supportHotline}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. ★ DEAL ĐANG DIỄN RA (6-COLUMN ROW) ==================== */}
      <section id="deal-dang-dien-ra" className="mx-auto mt-6 max-w-[1220px] px-4">
        <div className="border border-gray-200 bg-white">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#ff6600] text-white">
                <Star className="h-3.5 w-3.5 fill-current" />
              </span>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-[#ff6600]">
                DEAL ĐANG DIỄN RA
              </h2>
            </div>
            <a
              href="#goi-y-cho-ban"
              className="text-xs font-semibold text-[#ff6600] hover:underline"
            >
              Xem thêm &gt;&gt;
            </a>
          </div>

          {/* 6 Product Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {merged.activeDeals.map((deal) => renderProductCard(deal))}
          </div>
        </div>
      </section>

      {/* ==================== 5. ★ THƯƠNG HIỆU NỔI BẬT (8 BRAND TILES) ==================== */}
      <section className="mx-auto mt-6 max-w-[1220px] px-4">
        <div className="border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#ff6600] text-white">
                <Star className="h-3.5 w-3.5 fill-current" />
              </span>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-800">
                THƯƠNG HIỆU NỔI BẬT
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 sm:grid-cols-4 lg:grid-cols-8 lg:divide-y-0">
            {merged.featuredBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex h-20 flex-col items-center justify-center bg-white px-3 text-center transition hover:bg-gray-50"
              >
                <span
                  className="font-serif text-sm font-bold tracking-wider"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-gray-400">
                  {brand.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. THREE CATEGORY SHOWCASE BLOCKS ==================== */}
      <div id="san-pham-duong-da" className="mx-auto mt-6 max-w-[1220px] space-y-6 px-4">
        {merged.categoryShowcaseBlocks.map((block) => {
          const activeTab = activeTabByBlock[block.id] || block.tabs[0];
          return (
            <section key={block.id} className="border border-gray-200 bg-white">
              {/* Top Category Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#2f6e53] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#ff6600] text-white">
                    {block.iconType === "heart" ? (
                      <Heart className="h-3.5 w-3.5 fill-current" />
                    ) : (
                      <Play className="h-3 w-3 fill-current" />
                    )}
                  </span>
                  <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">
                    {block.title}
                  </h2>
                </div>

                {/* Category Sub-tabs + Xem thêm >> */}
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  {block.tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() =>
                        setActiveTabByBlock((prev) => ({ ...prev, [block.id]: tab }))
                      }
                      className={`transition-colors ${
                        activeTab === tab
                          ? "font-bold text-[#2f6e53]"
                          : "text-gray-600 hover:text-[#2f6e53]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                  <a
                    href="#goi-y-cho-ban"
                    className="font-semibold text-[#ff6600] hover:underline"
                  >
                    Xem thêm &gt;&gt;
                  </a>
                </div>
              </div>

              {/* Body: Left Vertical Poster (3 cols) + Right SubBanners & 4 Products (9 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Vertical Brand Poster */}
                <div
                  className={`relative flex min-h-[380px] flex-col justify-between overflow-hidden border-b border-gray-100 p-5 lg:col-span-3 lg:border-b-0 lg:border-r ${block.leftPoster.bgClass}`}
                >
                  <div
                    className={`relative z-10 ${
                      block.leftPoster.textDark ? "text-gray-900" : "text-white"
                    }`}
                  >
                    <span className="inline-block rounded-xs bg-[#2f6e53] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {block.leftPoster.brand}
                    </span>
                    <h3 className="mt-2.5 whitespace-pre-line text-lg font-extrabold leading-snug">
                      {block.leftPoster.headline}
                    </h3>
                    <a
                      href="#goi-y-cho-ban"
                      className="mt-3 inline-block rounded-xs bg-[#ff6600] px-3 py-1 text-[11px] font-bold text-white shadow-xs hover:bg-[#e55c00]"
                    >
                      {block.leftPoster.ctaText}
                    </a>
                  </div>

                  <div className="relative mt-4 flex flex-1 items-end justify-center">
                    <img
                      src={block.leftPoster.image}
                      alt={block.leftPoster.brand}
                      className="max-h-60 w-full rounded object-cover shadow-sm"
                    />
                  </div>
                </div>

                {/* Right 9 Columns: Top 3 Horizontal Sub-Banners + Bottom 4 Product Cards */}
                <div className="flex flex-col justify-between lg:col-span-9">
                  {/* Top 3 Promotional Sub-Banners */}
                  <div className="grid grid-cols-1 divide-y divide-gray-100 border-b border-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {block.topSubBanners.map((sb) => (
                      <div
                        key={sb.id}
                        className={`flex items-center justify-between gap-3 p-4 ${sb.bgClass}`}
                      >
                        <div className="max-w-[60%]">
                          <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#2f6e53]">
                            {sb.heading}
                          </h4>
                          <p className="mt-1 whitespace-pre-line text-[11px] leading-snug text-gray-600">
                            {sb.sub}
                          </p>
                        </div>
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-xs">
                          <img
                            src={sb.image}
                            alt={sb.heading}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom 4 Product Cards */}
                  <div className="grid flex-1 grid-cols-2 sm:grid-cols-4">
                    {block.products.map((prod) => renderProductCard(prod))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ==================== 7. ♥ GỢI Ý CHO BẠN (5-COLUMN PRODUCT GRID) ==================== */}
      <section id="goi-y-cho-ban" className="mx-auto mt-6 max-w-[1220px] px-4">
        <div className="border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-xs bg-[#ff6600] text-white">
                <Heart className="h-3.5 w-3.5 fill-current" />
              </span>
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">
                GỢI Ý CHO BẠN
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {merged.suggestedProducts.map((prod) => renderProductCard(prod))}
          </div>
        </div>
      </section>

      {/* ==================== 8. SẢN PHẨM ĐÃ XEM (8 THUMBNAILS) ==================== */}
      <section className="mx-auto mt-6 max-w-[1220px] px-4">
        <div className="border border-gray-200 bg-white p-4">
          <h3 className="mb-3 text-xs font-bold text-gray-700">Sản phẩm đã xem</h3>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {merged.recentlyViewed.map((rv) => (
              <div
                key={rv.id}
                className="group relative flex h-24 items-center justify-center border border-gray-100 bg-white p-2 hover:border-[#2f6e53]"
              >
                {rv.discount && (
                  <span className="absolute left-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff6600] text-[10px] font-bold text-white">
                    {rv.discount}
                  </span>
                )}
                <img
                  src={rv.image}
                  alt="Sản phẩm đã xem"
                  className="h-full w-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 9. FOOTER & TOP TÌM KIẾM TAG CLOUD ==================== */}
      <footer id="footer-contact" className="mt-8 border-t border-gray-200 bg-white">
        {/* Main 4-Column White Footer */}
        <div className="mx-auto max-w-[1220px] px-4 py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Cập nhật thông tin khuyến mãi + Fanpage */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-gray-900">
                Cập nhật thông tin khuyến mãi
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterSuccess(true);
                    setNewsletterEmail("");
                  }
                }}
                className="flex h-9 w-full overflow-hidden border border-gray-300"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email của bạn"
                  className="flex-1 px-2.5 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#2f6e53] px-3.5 text-[11px] font-bold uppercase text-white hover:bg-[#245741]"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {newsletterSuccess && (
                <p className="mt-1.5 text-[11px] font-medium text-[#2f6e53]">
                  ✓ Đăng ký nhận khuyến mãi thành công!
                </p>
              )}

              {/* Simulated Facebook Page Box */}
              <div className="mt-4 overflow-hidden rounded border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2f6e53] font-serif text-base font-bold text-white">
                    ✿
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#2f6e53]">
                      {merged.business.name} - Clinic &amp; Spa
                    </p>
                    <p className="text-[10px] text-gray-500">128.450 người theo dõi</p>
                  </div>
                </div>
                <div className="mt-2.5 flex gap-2">
                  <span className="inline-block rounded-xs border border-gray-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-gray-700">
                    👍 Theo dõi Trang
                  </span>
                  <span className="inline-block rounded-xs border border-gray-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-gray-700">
                    Chia sẻ
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: Được chứng nhận & Thông tin liên hệ */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-gray-900">
                Được chứng nhận
              </h4>
              <div className="mb-4 inline-flex items-center gap-2 rounded border border-red-200 bg-red-50 px-3 py-1.5">
                <ShieldCheck className="h-5 w-5 text-red-600" />
                <div className="leading-none">
                  <span className="block text-[10px] font-extrabold uppercase text-red-600">
                    ĐÃ ĐĂNG KÝ
                  </span>
                  <span className="text-[9px] font-semibold text-red-500">
                    BỘ CÔNG THƯƠNG
                  </span>
                </div>
              </div>

              <h5 className="mb-2 text-xs font-bold text-gray-900">
                Thông tin liên hệ
              </h5>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2f6e53]" />
                  <span>{merged.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="h-3.5 w-3.5 shrink-0 text-[#2f6e53]" />
                  <span>{merged.supportHotline}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#2f6e53]" />
                  <span>{merged.business.email.join(" — ")}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: HỖ TRỢ KHÁCH HÀNG */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-gray-900">
                HỖ TRỢ KHÁCH HÀNG
              </h4>
              <p className="text-xs font-bold text-[#ff6600]">
                Hotline: {merged.business.phone[0]}
              </p>
              <p className="mb-3 text-[11px] text-gray-500">
                (1000đ/phút , {merged.business.workingHours})
              </p>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Các câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Gửi yêu cầu hỗ trợ
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Hướng dẫn đặt hàng
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Phương thức vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Chính sách đổi trả
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: VỀ CHÚNG TÔI */}
            <div id="ve-chung-toi">
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-gray-900">
                VỀ CHÚNG TÔI
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Giới thiệu {merged.business.name}
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Tuyển Dụng
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Chính sách bảo mật thanh toán
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Chính sách bảo mật thông tin cá nhân
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Chính sách giải quyết khiếu nại
                  </a>
                </li>
                <li>
                  <a href="#top" className="hover:text-[#2f6e53]">
                    Điều khoản sử dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* TOP TÌM KIẾM Tag Cloud */}
          <div className="mt-8 border-t border-gray-200 pt-5">
            <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wide text-gray-800">
              TOP TÌM KIẾM
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {merged.topSearchTags.map((tag) => (
                <a
                  key={tag}
                  href="#san-pham-duong-da"
                  className="border border-gray-200 bg-white px-2.5 py-1 text-[11px] text-gray-600 transition-colors hover:border-[#2f6e53] hover:text-[#2f6e53]"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Dark Bottom Copyright Bar */}
        <div className="bg-[#333333] py-3 text-center text-xs text-gray-300">
          © Bản quyền thuộc về{" "}
          <span className="font-semibold text-white">{merged.business.name}</span> | Thiết
          kế và vận hành hệ thống Clinic &amp; Mỹ Phẩm Chính Hãng
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
