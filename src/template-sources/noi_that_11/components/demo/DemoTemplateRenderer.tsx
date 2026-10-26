"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBasket,
  Phone,
  MapPin,
  Heart,
  Check,
  X,
  Menu,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat11DefaultData,
  type NoiThat11Data,
  type NoiThat11Product
} from "@/template-sources/noi_that_11/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function MonaRetailLogo({ subtitle = true }: { subtitle?: boolean }) {
  return (
    <div className="flex items-end gap-2 select-none">
      <div className="flex items-center text-3xl sm:text-4xl font-black tracking-tighter leading-none">
        <span className="text-[#c41230]">mo</span>
        <span className="text-neutral-300 font-light mx-0.5">|</span>
        <span className="text-[#d6334c] font-light">na</span>
      </div>
      {subtitle && (
        <span className="text-[11px] sm:text-xs font-semibold text-[#c41230] pb-0.5">
          Siêu Thị Nội Thất &amp; Trang Trí
        </span>
      )}
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NoiThat11Data = adaptClonedTemplateData(
    noiThat11DefaultData,
    incomingData
  );

  const promo = data.promoCampaign || noiThat11DefaultData.promoCampaign;
  const products = data.featuredProducts || noiThat11DefaultData.featuredProducts;
  const decorPosts = data.decorPosts || noiThat11DefaultData.decorPosts;
  const newCollections =
    data.newCollections || noiThat11DefaultData.newCollections;
  const categoryBanners =
    data.categoryBanners || noiThat11DefaultData.categoryBanners;
  const storeLocator = data.storeLocator || noiThat11DefaultData.storeLocator;
  const footerInfo = data.footerInfo || noiThat11DefaultData.footerInfo;

  const [cartItems, setCartItems] = useState<NoiThat11Product[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("TẤT CẢ");
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0126 922 0162";

  const filteredProducts = products.filter((prd) => {
    const matchesSearch =
      !searchQuery.trim() ||
      prd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prd.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === "TẤT CẢ" || prd.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleAddToCart = (product: NoiThat11Product) => {
    setCartItems((prev) => [...prev, product]);
    setCheckoutSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#c41230] selection:text-white">
      {/* =====================================================================
          1. TOP UTILITY STRIP (#f3f3f3) + MAIN SEARCH HEADER + NAV
         ===================================================================== */}
      <div className="bg-[#f3f3f3] border-b border-neutral-200 text-[11px] text-neutral-600">
        <div className="max-w-6xl mx-auto px-4 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStoreModalOpen(true)}
              className="hover:text-[#c41230] font-medium cursor-pointer"
            >
              Cửa hàng
            </button>
            <span>
              Hotline:{" "}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                className="text-[#c41230] font-bold hover:underline"
              >
                {primaryPhone}
              </a>
            </span>
            <a href="#trang-tri" className="hidden sm:inline hover:text-[#c41230]">
              Trợ giúp
            </a>
            <a href="#dia-chi" className="hidden sm:inline hover:text-[#c41230]">
              FAQs
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-neutral-400 border-r border-neutral-300 pr-3">
              <a href="#dia-chi" className="hover:text-[#c41230] font-bold">
                f
              </a>
              <a href="#dia-chi" className="hover:text-[#c41230] font-bold">
                ig
              </a>
              <a href="#dia-chi" className="hover:text-[#c41230] font-bold">
                yt
              </a>
            </div>
            <button
              type="button"
              onClick={() => setStoreModalOpen(true)}
              className="hover:text-[#c41230] font-medium cursor-pointer"
            >
              Đăng nhập / Đăng ký
            </button>
            <button
              type="button"
              onClick={() => setCartDrawerOpen(true)}
              className="relative flex items-center gap-1 text-neutral-800 hover:text-[#c41230] cursor-pointer"
              title="Giỏ hàng"
            >
              <ShoppingBasket className="w-4 h-4" />
              {cartItems.length > 0 && (
                <span className="bg-[#c41230] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Search Bar */}
      <header className="bg-white sticky top-0 z-30 border-b border-neutral-100 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 pt-5 pb-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#trang-chu">
              <MonaRetailLogo />
            </a>

            {/* Wide Crimson-Bordered Search Input */}
            <div className="w-full md:max-w-md flex items-stretch">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm bàn, ghế, tủ hồ sơ, giường..."
                className="flex-1 border border-[#c41230] px-3.5 py-2 text-xs focus:outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("san-pham");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#c41230] hover:bg-[#a50e27] text-white px-5 flex items-center justify-center transition cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Primary Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-[13px] font-bold pt-4">
            <a href="#trang-chu" className="text-[#c41230]">
              Trang chủ
            </a>
            <a
              href="#dia-chi"
              className="text-neutral-700 hover:text-[#c41230] transition"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="text-neutral-700 hover:text-[#c41230] transition"
            >
              Cửa hàng
            </a>
            <a
              href="#hang-moi"
              className="text-neutral-700 hover:text-[#c41230] transition"
            >
              Khuyến mãi <span className="text-[#c41230]">HOT</span>
            </a>
            <a
              href="#trang-tri"
              className="text-neutral-700 hover:text-[#c41230] transition"
            >
              Tin tức
            </a>
            <a
              href="#dia-chi"
              className="text-neutral-700 hover:text-[#c41230] transition"
            >
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================================
          2. CRIMSON PROMOTIONAL HERO BANNER (Matches NT014 Red Campaign Banner)
         ===================================================================== */}
      <section id="trang-chu" className="max-w-6xl mx-auto px-4 pt-2">
        <div className="relative bg-gradient-to-r from-[#b80d19] via-[#cc1421] to-[#b00c18] text-white overflow-hidden min-h-[380px] sm:min-h-[430px] p-6 sm:p-10 flex flex-col justify-between shadow-sm">
          {/* Decorative Heart & Glow Backdrop */}
          <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-white/95 pointer-events-none hidden md:block" />
          <div className="absolute -bottom-10 left-32 w-60 h-60 rounded-full bg-white/95 pointer-events-none hidden md:block" />

          {/* Top Left Offer + Right Script Headline */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left & Center Promo Callouts (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Offer 1 */}
              <div className="border-l-2 border-white pl-3.5 max-w-xs ml-4 sm:ml-14">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                  {promo.offers[0]?.heading}
                </p>
                <p className="text-xs text-white/90">
                  {promo.offers[0]?.highlight}
                </p>
              </div>

              {/* Offer 2: HOA YÊU THƯƠNG */}
              <div className="border-l-2 border-white pl-3.5 max-w-xs ml-12 sm:ml-56 relative">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                  {promo.offers[1]?.heading}
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xs">Mua</span>
                  <span className="text-3xl sm:text-4xl font-black leading-none">
                    6
                  </span>
                  <div className="text-xs leading-tight">
                    <span className="block">hoa Cherry*</span>
                    <span className="block">Tặng thêm</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black leading-none">
                    2
                  </span>
                </div>
                {promo.offers[1]?.note && (
                  <p className="text-[10px] italic text-white/80 mt-1">
                    {promo.offers[1].note}
                  </p>
                )}
              </div>

              {/* Offer 3: CÙNG MẸ THƯ GIÃN */}
              <div className="border-l-2 border-white pl-3.5 max-w-md ml-16 sm:ml-72">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                  {promo.offers[2]?.heading}
                </p>
                <p className="text-xs sm:text-sm mt-0.5">
                  Giảm{" "}
                  <span className="text-2xl sm:text-3xl font-black">
                    20 - 50%
                  </span>{" "}
                  cho ghế bành &amp; ghế đôn
                </p>
              </div>
            </div>

            {/* Right Script Campaign Headline + Offer 4 (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right justify-between h-full space-y-6">
              <div>
                <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide leading-tight">
                  {promo.mainTitle}
                </h1>
                <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/95 mt-1">
                  {promo.subTitle}
                </p>
                <p className="text-xl sm:text-2xl font-black tracking-widest mt-2">
                  {promo.dateRange}.2026
                </p>
              </div>

              {/* Offer 4: BẾP XINH CỦA MẸ */}
              <div className="border-l-2 border-white pl-3.5 text-left max-w-xs self-start lg:self-end">
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                  {promo.offers[3]?.heading}
                </p>
                <div className="flex items-center gap-2 mt-0.5 text-xs">
                  <span>Mua trên</span>
                  <span className="text-3xl font-black leading-none">7</span>
                  <div>
                    <span className="block">sản phẩm cho bếp &amp; phòng ăn</span>
                    <span className="block">
                      Giảm ngay{" "}
                      <strong className="text-2xl font-black">5%</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mother & Child Warm Visual Bottom-Left + Slider Dots */}
          <div className="relative z-10 flex items-end justify-between pt-4">
            <div className="hidden md:flex items-center gap-3 bg-white/95 text-[#c41230] px-4 py-2 rounded-full shadow-xs">
              <Heart className="w-5 h-5 fill-[#c41230]" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                {data.business.name} — Quà Tặng Tổ Ấm Yêu Thương
              </span>
            </div>

            <div className="mx-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full border border-white/80" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. SẢN PHẨM TIÊU BIỂU (8-Product 4x2 Grid with Teal Badges & Red CTA)
         ===================================================================== */}
      <section id="san-pham" className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-neutral-800">
              SẢN PHẨM TIÊU BIỂU
            </h2>
            <div className="w-8 h-0.5 bg-[#c41230] mx-auto mt-2" />
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              "TẤT CẢ",
              "NỘI THẤT GIA ĐÌNH",
              "BÀN",
              "GHẾ",
              "TỦ TÀI LIỆU",
              "TRƯỜNG HỌC",
              "NỘI THẤT Y TẾ"
            ].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1 text-[11px] font-bold uppercase rounded-full border transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#c41230] text-white border-[#c41230]"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-[#c41230]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 4x2 Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square bg-neutral-50 border border-neutral-100 overflow-hidden mb-3 flex items-center justify-center">
                  {product.discountBadge && (
                    <span className="absolute top-2.5 left-2.5 z-10 w-9 h-9 rounded-full bg-[#00a88f] text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
                      {product.discountBadge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                  {product.category}
                </span>
                <h3 className="text-xs font-medium text-neutral-700 mt-0.5 line-clamp-2 min-h-[32px] px-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-xs mt-1 mb-2.5">
                  {product.oldPrice && (
                    <span className="text-neutral-400 line-through text-[11px]">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-neutral-900">
                    {product.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="bg-[#c41230] hover:bg-[#a30f28] text-white text-[11px] font-bold px-4 py-1.5 transition cursor-pointer"
                >
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. TRANG TRÍ NỘI THẤT (3 Inspiration Cards with Red Circle Date Badge)
         ===================================================================== */}
      <section id="trang-tri" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-neutral-800">
              TRANG TRÍ NỘI THẤT
            </h2>
            <div className="w-8 h-0.5 bg-[#c41230] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decorPosts.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Red Circular Date Badge Top-Left */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#c41230] text-white flex flex-col items-center justify-center leading-none shadow-sm">
                    <span className="text-xs font-extrabold">{post.day}</span>
                    <span className="text-[9px]">{post.month}</span>
                  </div>
                </div>

                {/* Overlapping White Text Card */}
                <div className="relative z-10 -mt-10 mx-4 bg-white p-5 text-center shadow-xs border border-neutral-100">
                  <h3 className="text-xs sm:text-[13px] font-bold text-neutral-800 leading-snug mb-2 group-hover:text-[#c41230] transition">
                    {post.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-neutral-200 mx-auto mb-2" />
                  <p className="text-[11px] text-neutral-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. HÀNG MỚI (3 Tall Collection Posters with Bottom-Right Price Tag)
         ===================================================================== */}
      <section id="hang-moi" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-neutral-800">
              HÀNG MỚI
            </h2>
            <div className="w-8 h-0.5 bg-[#c41230] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newCollections.map((col) => (
              <div key={col.id} className="group text-center">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                  <img
                    src={col.image}
                    alt={col.collectionName}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/65" />

                  {/* Top Headline Overlay */}
                  <div className="absolute top-6 inset-x-4 text-center">
                    <p className="text-sm sm:text-base font-light tracking-wider uppercase text-white whitespace-pre-line">
                      {col.topTitle}
                    </p>
                  </div>

                  {/* Bottom-Right Price Callout */}
                  <div className="absolute bottom-3 right-4 text-right text-white">
                    <span className="block text-[9px] uppercase tracking-wider text-white/80">
                      GIÁ TỪ
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-xl sm:text-2xl font-black leading-none">
                        {col.startingPrice}
                      </span>
                      <div className="text-[8px] leading-tight text-left">
                        <span className="block font-bold">VNĐ</span>
                        <span className="block">.000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xs sm:text-[13px] font-extrabold uppercase text-neutral-800 mt-3 tracking-wide">
                  {col.collectionName}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. DANH MỤC TIÊU BIỂU (2x2 Split Image + Solid Black Label Block)
         ===================================================================== */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide text-neutral-800">
              DANH MỤC TIÊU BIỂU
            </h2>
            <div className="w-8 h-0.5 bg-[#c41230] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryBanners.map((banner) => (
              <div
                key={banner.id}
                className="grid grid-cols-12 h-52 sm:h-60 overflow-hidden border border-neutral-200 group cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("san-pham");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Left Photo Half (7 cols) */}
                <div className="col-span-7 relative overflow-hidden bg-neutral-200">
                  <img
                    src={banner.image}
                    alt={banner.titleVi}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute top-4 left-4 text-white drop-shadow-xs">
                    <p className="text-xl sm:text-2xl font-extrabold lowercase leading-none whitespace-pre-line">
                      {banner.enHeading}
                    </p>
                    <p className="text-[11px] font-semibold mt-1">
                      {banner.enSub}
                    </p>
                  </div>
                </div>

                {/* Right Solid Black Block (5 cols) */}
                <div className="col-span-5 bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-base sm:text-lg font-extrabold uppercase leading-snug whitespace-pre-line">
                    {banner.titleVi}
                  </h3>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">
                    {banner.countText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. DARK MAP BANNER "ĐỊA CHỈ" + HỆ THỐNG CỬA HÀNG BUTTON
         ===================================================================== */}
      <section
        id="dia-chi"
        className="relative py-20 px-4 bg-[#1c1c1c] text-white text-center overflow-hidden"
      >
        <img
          src={storeLocator.mapImage}
          alt="Bản đồ hệ thống siêu thị nội thất"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
            {storeLocator.heading}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {storeLocator.description}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStoreModalOpen(true)}
              className="bg-[#c41230] hover:bg-[#a30f28] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-3 shadow-md transition cursor-pointer"
            >
              {storeLocator.ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. DARK CHARCOAL FOOTER (#1a1a1a)
         ===================================================================== */}
      <footer className="bg-[#1a1a1a] text-neutral-300 py-14 px-4 border-t border-neutral-800 text-xs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column: Company Info (5 cols) */}
          <div className="md:col-span-5 space-y-3 md:border-r md:border-neutral-800 md:pr-8">
            <MonaRetailLogo subtitle={false} />
            <h3 className="text-xs font-extrabold uppercase text-white pt-1">
              {footerInfo.companyFullName}
            </h3>
            <p className="text-neutral-400">
              <strong className="text-white">Địa chỉ :</strong>{" "}
              {data.business.address}
            </p>
            <p className="text-neutral-400">
              <strong className="text-white">Giấy phép kinh doanh :</strong>
              <br />
              {footerInfo.businessLicense}
            </p>
            <p className="text-neutral-400">
              <strong className="text-white">Đại diện pháp luật :</strong>{" "}
              {footerInfo.legalRepresentative}
            </p>

            <div className="pt-3">
              <p className="text-[11px] font-extrabold uppercase text-white mb-2">
                TÌM CHÚNG TÔI TẠI
              </p>
              <div className="flex items-center gap-3 text-white">
                <a
                  href="#trang-chu"
                  className="w-7 h-7 rounded-xs bg-neutral-800 hover:bg-[#c41230] flex items-center justify-center font-bold transition"
                >
                  f
                </a>
                <a
                  href="#trang-chu"
                  className="w-7 h-7 rounded-xs bg-neutral-800 hover:bg-[#c41230] flex items-center justify-center font-bold transition"
                >
                  ig
                </a>
                <a
                  href="#trang-chu"
                  className="w-7 h-7 rounded-xs bg-neutral-800 hover:bg-[#c41230] flex items-center justify-center font-bold transition"
                >
                  G+
                </a>
                <a
                  href="#trang-chu"
                  className="w-7 h-7 rounded-xs bg-neutral-800 hover:bg-[#c41230] flex items-center justify-center font-bold transition"
                >
                  yt
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns: VỀ MONA + DANH MỤC SẢN PHẨM (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* VỀ MONA */}
              <div>
                <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                  VỀ MONA
                </h4>
                <ul className="space-y-2 text-neutral-400">
                  <li>
                    <a href="#trang-chu" className="text-[#c41230] font-semibold">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#dia-chi" className="hover:text-white">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#san-pham" className="hover:text-white">
                      Cửa hàng
                    </a>
                  </li>
                  <li>
                    <a href="#hang-moi" className="hover:text-white">
                      Khuyến mãi HOT
                    </a>
                  </li>
                  <li>
                    <a href="#trang-tri" className="hover:text-white">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="#dia-chi" className="hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#dia-chi" className="hover:text-white">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>

              {/* DANH MỤC SẢN PHẨM (Subcol 1) */}
              <div>
                <h4 className="text-xs font-extrabold uppercase text-white mb-3">
                  DANH MỤC SẢN PHẨM
                </h4>
                <ul className="space-y-2 text-neutral-400">
                  {footerInfo.productCategoriesLeft.map((cat, idx) => (
                    <li key={idx}>
                      <a href="#san-pham" className="hover:text-white">
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DANH MỤC SẢN PHẨM (Subcol 2) */}
              <div className="sm:pt-7">
                <ul className="space-y-2 text-neutral-400">
                  {footerInfo.productCategoriesRight.map((cat, idx) => (
                    <li key={idx}>
                      <a href="#san-pham" className="hover:text-white">
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Copyright + App Badges */}
            <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-neutral-500">
              <p>
                © Bản quyền thuộc về . Thiết kế website{" "}
                <strong className="text-white">{data.business.name}</strong>
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-sky-600 text-white px-2.5 py-1 rounded-xs text-[10px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
                </span>
                <span className="bg-neutral-900 border border-neutral-700 text-white px-2.5 py-1 rounded-xs text-[10px] font-semibold">
                  Google Play
                </span>
                <span className="bg-neutral-900 border border-neutral-700 text-white px-2.5 py-1 rounded-xs text-[10px] font-semibold">
                  App Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SHOPPING CART DRAWER */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <h3 className="text-sm font-extrabold uppercase text-neutral-800 flex items-center gap-2">
                <ShoppingBasket className="w-4 h-4 text-[#c41230]" />
                <span>Giỏ hàng ({cartItems.length} sản phẩm)</span>
              </h3>
              <button
                type="button"
                onClick={() => setCartDrawerOpen(false)}
                className="text-neutral-400 hover:text-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {checkoutSuccess ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm uppercase">
                    Đặt hàng thành công!
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Siêu thị {data.business.name} sẽ liên hệ xác nhận giao hàng &amp;
                    lắp đặt trong vòng 30 phút.
                  </p>
                </div>
              ) : cartItems.length === 0 ? (
                <p className="text-xs text-neutral-500 text-center py-12">
                  Chưa có sản phẩm nào trong giỏ hàng. Hãy nhấn &ldquo;Thêm vào giỏ&rdquo; để
                  chọn mua nội thất!
                </p>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="flex items-center gap-3 border-b border-neutral-100 pb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover border border-neutral-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-neutral-800 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#c41230] font-extrabold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && !checkoutSuccess && (
              <div className="pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => {
                    setCheckoutSuccess(true);
                    setCartItems([]);
                  }}
                  className="w-full bg-[#c41230] hover:bg-[#a30f28] text-white font-bold uppercase text-xs py-3 cursor-pointer"
                >
                  THANH TOÁN &amp; GIAO LẮP TẬN NƠI
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* STORE LOCATOR MODAL */}
      {storeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-2xl relative border-t-4 border-[#c41230]">
            <button
              type="button"
              onClick={() => setStoreModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <MonaRetailLogo />
            <h3 className="text-sm font-extrabold uppercase text-neutral-800 mt-4 mb-2">
              Hệ Thống 16 Siêu Thị Nội Thất {data.business.name}
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed mb-4">
              Trụ sở chính: {data.business.address}
              <br />
              Hotline tư vấn &amp; đặt đóng nội thất: {primaryPhone}
            </p>
            <button
              type="button"
              onClick={() => setStoreModalOpen(false)}
              className="w-full bg-[#c41230] text-white font-bold text-xs uppercase py-2.5"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
