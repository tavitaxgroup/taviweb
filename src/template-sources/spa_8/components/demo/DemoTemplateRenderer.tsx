"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  LayoutGrid,
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  Star,
  ArrowRight,
  Sparkles,
  Leaf,
  Check,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  spa8DefaultData,
  type Spa8Data,
  type Spa8ProductItem
} from "@/template-sources/spa_8/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function ProductCard({
  item,
  onAdd
}: {
  item: Spa8ProductItem;
  onAdd: (p: Spa8ProductItem) => void;
}) {
  return (
    <div
      onClick={() => onAdd(item)}
      className="group cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[4/5] bg-[#f8f8f8] rounded-xs overflow-hidden mb-2.5">
          {item.featured && (
            <span className="absolute top-2.5 left-2.5 z-10 bg-[#dcf5e7] text-[#15803d] text-[9px] font-bold uppercase px-2 py-0.5 rounded-xs">
              FEATURED
            </span>
          )}
          {item.discountTag && (
            <span className="absolute top-2.5 left-2.5 z-10 bg-[#fde8ea] text-[#e11d48] text-[9px] font-bold px-2 py-0.5 rounded-xs">
              {item.discountTag}
            </span>
          )}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-1">
          <div className="flex text-amber-400">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-2.5 h-2.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-[10px] text-neutral-400">
            {item.reviewsCount}
          </span>
        </div>

        <h3 className="text-xs font-medium text-neutral-700 group-hover:text-[#2d7a89] transition line-clamp-1">
          {item.name}
        </h3>

        <div className="flex items-center gap-1.5 mt-0.5 text-xs">
          {item.oldPrice && (
            <span className="text-[10px] text-neutral-400 line-through">
              {item.oldPrice}
            </span>
          )}
          <span className="font-bold text-[#2d7a89]">{item.price}</span>
        </div>
      </div>

      {item.colors && item.colors.length > 0 && (
        <div className="flex items-center gap-1.5 mt-2">
          {item.colors.map((c, idx) => (
            <span
              key={idx}
              className="w-3.5 h-3.5 rounded-full border border-neutral-200"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Spa8Data = adaptClonedTemplateData(spa8DefaultData, incomingData);

  const heroRight = data.heroRightBanners || spa8DefaultData.heroRightBanners;
  const topMini = data.topMiniBanners || spa8DefaultData.topMiniBanners;
  const limitedDeals = data.limitedDeals || spa8DefaultData.limitedDeals;
  const bestSellers = data.bestSellers || spa8DefaultData.bestSellers;
  const patchBanner =
    data.patchCollectionBanner || spa8DefaultData.patchCollectionBanner;
  const categoryTiles = data.categoryTiles || spa8DefaultData.categoryTiles;
  const newest = data.newestProducts || spa8DefaultData.newestProducts;
  const trending = data.trendingSection || spa8DefaultData.trendingSection;

  const [activeTab, setActiveTab] = useState("Back area");
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [toastProduct, setToastProduct] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const handleAddProduct = (p: Spa8ProductItem) => {
    setCartCount((c) => c + 1);
    setToastProduct(p.name);
    setTimeout(() => setToastProduct(null), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans selection:bg-[#2d7a89] selection:text-white">
      {/* =====================================================================
          1. TOP UTILITY BAR + MAIN E-COMMERCE HEADER
         ===================================================================== */}
      <div className="border-b border-neutral-100 text-[11px] text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3 text-neutral-400">
            <a href="#lien-he" className="hover:text-[#2d7a89]">
              f
            </a>
            <a href="#lien-he" className="hover:text-[#2d7a89]">
              tw
            </a>
            <a href="#lien-he" className="hover:text-[#2d7a89]">
              ig
            </a>
            <a href="#lien-he" className="hover:text-[#2d7a89]">
              yt
            </a>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#2d7a89]" />
              {data.business.address}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#2d7a89]" />
              {primaryEmail}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#2d7a89]" />
              {primaryPhone}
            </span>
          </div>
        </div>
      </div>

      {/* Main Search & Brand Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 pt-4 pb-3 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Brand + Category Button */}
            <div className="flex items-center gap-5">
              <a href="#trang-chu" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#2d7a89] text-[#2d7a89] flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {data.business.name}
                </span>
              </a>

              <a
                href="#danh-muc"
                className="hidden sm:inline-flex items-center gap-2 bg-[#2d7a89] text-white text-xs font-medium px-4 py-2 rounded-xs"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Danh mục</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Center Search Input */}
            <div className="flex-1 max-w-md flex items-stretch">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Tìm kiếm serum, kem dưỡng, mặt nạ..."
                className="flex-1 bg-neutral-100/80 border border-neutral-200 px-3.5 py-2 text-xs focus:outline-none focus:border-[#2d7a89]"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="bg-[#2d7a89] hover:bg-[#23626e] text-white px-3.5 flex items-center justify-center cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Right User + Wishlist + Cart Icons */}
            <div className="flex items-center gap-4 text-neutral-700">
              <button type="button" className="hover:text-[#2d7a89] cursor-pointer">
                <User className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setWishlistCount((w) => w + 1)}
                className="relative hover:text-[#2d7a89] cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#2d7a89] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              </button>
              <button
                type="button"
                className="relative hover:text-[#2d7a89] cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#2d7a89] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Sub-Navigation Row */}
          <div className="flex items-center justify-between text-xs pt-1">
            <nav className="flex items-center gap-6 font-medium text-neutral-600">
              <a href="#trang-chu" className="text-[#2d7a89] font-semibold">
                Trang chủ
              </a>
              <a href="#patch-banner" className="hover:text-[#2d7a89]">
                Giới thiệu
              </a>
              <a href="#san-pham-ban-chay" className="hover:text-[#2d7a89]">
                Sản phẩm
              </a>
              <a href="#xu-huong" className="hover:text-[#2d7a89]">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-[#2d7a89]">
                Liên hệ
              </a>
            </nav>

            <span className="hidden sm:flex items-center gap-1 text-neutral-500">
              Xem gần đây <ChevronDown className="w-3 h-3" />
            </span>
          </div>
        </div>
      </header>

      {/* =====================================================================
          2. BENTO HERO GRID (Left Pink Organic Cosmetics + Right 2 Stacked Banners)
         ===================================================================== */}
      <section id="trang-chu" className="max-w-6xl mx-auto px-4 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Main Banner (8 cols) */}
          <div className="lg:col-span-8 relative bg-[#f9e7e4] rounded-xs overflow-hidden min-h-[360px] sm:min-h-[420px] p-8 sm:p-12 flex items-center">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="absolute inset-0 w-full h-full object-cover object-right opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9e7e4] via-[#f9e7e4]/85 to-transparent" />

            <div className="relative z-10 max-w-xs space-y-3">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#d96b70]">
                {data.hero.eyebrow}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight whitespace-pre-line">
                {data.hero.title}
              </h1>
              <p className="text-xs text-neutral-600 leading-relaxed whitespace-pre-line">
                {data.hero.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#san-pham-ban-chay"
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 hover:text-[#2d7a89] transition"
                >
                  <span>{data.hero.ctaText || "Mua ngay"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 2 Stacked Banners (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {heroRight.map((banner, idx) => (
              <div
                key={banner.id}
                className={`relative flex-1 min-h-[195px] rounded-xs overflow-hidden p-6 flex flex-col justify-center ${
                  idx === 0 ? "bg-[#f3ece4]" : "bg-[#f4eae6]"
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover object-right opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f3ece4] via-[#f3ece4]/80 to-transparent" />

                <div className="relative z-10 max-w-[180px] space-y-1.5">
                  {banner.eyebrow && (
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-500">
                      {banner.eyebrow}
                    </span>
                  )}
                  <h2 className="text-base font-bold text-neutral-900 leading-snug">
                    {banner.title}
                  </h2>
                  <p
                    className={`text-xs ${
                      idx === 0
                        ? "text-[#e11d48] font-semibold"
                        : "text-neutral-500"
                    }`}
                  >
                    {banner.subtitle}
                  </p>
                  <a
                    href="#san-pham-ban-chay"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-neutral-800 pt-1 hover:text-[#2d7a89]"
                  >
                    <span>{banner.ctaText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Mini Promo Banners Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {topMini.map((mini) => (
            <div
              key={mini.id}
              className={`${mini.bgClass} rounded-xs p-5 flex items-center justify-between overflow-hidden h-32`}
            >
              <div className="space-y-1">
                {mini.eyebrow && (
                  <span className="text-xs font-extrabold text-[#16a34a]">
                    {mini.eyebrow}
                  </span>
                )}
                <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                  {mini.title}
                </h3>
                {mini.subtitle && (
                  <p className="text-xs text-neutral-600">{mini.subtitle}</p>
                )}
                {!mini.eyebrow && (
                  <div className="pt-1">
                    <span className="block text-[9px] uppercase text-neutral-400">
                      CHỈ
                    </span>
                    <span className="text-xs font-extrabold text-[#16a34a]">
                      {mini.priceText}
                    </span>
                  </div>
                )}
              </div>
              <img
                src={mini.image}
                alt={mini.title}
                className="w-24 h-24 object-cover rounded-lg shrink-0"
              />
            </div>
          ))}
        </div>

        {/* Pink Savings Strip */}
        <div className="mt-6 bg-[#fde8ea] text-[#e11d48] text-center py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xs">
          {data.pinkPromoStripText}
        </div>
      </section>

      {/* =====================================================================
          3. KHUYẾN MÃI GIỚI HẠN (Countdown Timer + 2 Bordered Deal Cards)
         ===================================================================== */}
      <section id="khuyen-mai" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="text-lg font-bold text-neutral-900">
            Khuyến mãi giới hạn
          </h2>

          {/* 4 Red Countdown Boxes */}
          <div className="flex items-center gap-1.5">
            {["106", "19", "59", "20"].map((num, idx) => (
              <span
                key={idx}
                className="bg-[#e11d48] text-white text-[11px] font-extrabold px-2 py-1 rounded-xs"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-[#f8b4be] rounded-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {limitedDeals.map((deal) => {
            const pct = Math.round((deal.soldCount / deal.totalStock) * 100);
            return (
              <div
                key={deal.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center"
              >
                <div className="sm:col-span-5 relative bg-[#f8f8f8] aspect-square rounded-xs overflow-hidden">
                  <span className="absolute top-2 left-2 bg-[#fde8ea] text-[#e11d48] text-[9px] font-bold px-2 py-0.5 rounded-xs">
                    {deal.discountBadge}
                  </span>
                  {deal.featuredBadge && (
                    <span className="absolute top-7 left-2 bg-[#dcf5e7] text-[#15803d] text-[8px] font-bold uppercase px-2 py-0.5 rounded-xs">
                      FEATURED
                    </span>
                  )}
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <h3 className="text-sm font-bold text-neutral-900">
                    {deal.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-neutral-400 line-through">
                      {deal.oldPrice}
                    </span>
                    <span className="text-sm font-extrabold text-[#2d7a89]">
                      {deal.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    {deal.description}
                  </p>
                  <div className="pt-2 space-y-1">
                    <span className="text-[10px] text-neutral-500">
                      Đã bán:{" "}
                      <strong className="text-neutral-800">
                        {deal.soldCount}/{deal.totalStock}
                      </strong>
                    </span>
                    <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2d7a89]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          4. SẢN PHẨM BÁN CHẠY (Tabs + 4x2 Grid)
         ===================================================================== */}
      <section id="san-pham-ban-chay" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-bold text-neutral-900">
            Sản phẩm bán chạy
          </h2>

          <div className="flex items-center gap-5 text-xs">
            {[
              { id: "Back area", label: "Back area" },
              { id: "Hand zone", label: "Hand zone" },
              { id: "Skin Care", label: "Skin Care" },
              { id: "Zone of life", label: "Zone of life" }
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`pb-1 transition cursor-pointer ${
                  activeTab === t.id
                    ? "text-[#2d7a89] font-bold border-b-2 border-[#2d7a89]"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onAdd={handleAddProduct}
            />
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. PATCH — BỘ SƯU TẬP MỸ PHẨM ĐA DẠNG BANNER (#eee4d7)
         ===================================================================== */}
      <section id="patch-banner" className="bg-[#eee4d7] py-14 px-4 my-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2d7a89]">
              {patchBanner.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight whitespace-pre-line">
              {patchBanner.title}
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              {patchBanner.subtitle}
            </p>
            <div className="pt-2">
              <a
                href="#san-pham-moi"
                className="inline-flex items-center gap-2 bg-[#2d7a89] hover:bg-[#23626e] text-white text-xs font-semibold px-5 py-2.5 rounded-xs transition"
              >
                <span>{patchBanner.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-6">
            <img
              src={patchBanner.image}
              alt={patchBanner.title}
              className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. DANH MỤC SẢN PHẨM (6 Square Icon Tiles)
         ===================================================================== */}
      <section id="danh-muc" className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-neutral-900">
            Danh mục sản phẩm
          </h2>
          <a
            href="#san-pham-moi"
            className="text-xs text-neutral-500 hover:text-[#2d7a89] inline-flex items-center gap-1"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryTiles.map((tile) => (
            <div
              key={tile.id}
              onClick={() => setActiveTab(tile.label)}
              className="bg-[#f4f5f7] hover:bg-[#e8f2f4] p-6 rounded-xs flex flex-col items-center justify-center text-center cursor-pointer transition group"
            >
              <Sparkles className="w-7 h-7 text-[#2d7a89] mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-neutral-800">
                {tile.label}
              </span>
              <span className="text-[10px] text-neutral-400 mt-0.5">
                {tile.subVi}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. SẢN PHẨM MỚI NHẤT (Left Tall Banner + Right 3x2 Grid + 3 Mini Banners)
         ===================================================================== */}
      <section id="san-pham-moi" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-neutral-900">
            Sản phẩm mới nhất
          </h2>
          <a
            href="#xu-huong"
            className="text-xs text-neutral-500 hover:text-[#2d7a89] inline-flex items-center gap-1"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Tall Vertical Banner (3 cols) */}
          <div className="lg:col-span-3 rounded-xs overflow-hidden min-h-[380px]">
            <img
              src={newest.sideBannerImage}
              alt="Sản phẩm mới nhất"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right 3x2 Product Grid (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {newest.items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onAdd={handleAddProduct}
              />
            ))}
          </div>
        </div>

        {/* Bottom 3 Mini Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {newest.bottomMiniBanners.map((mini) => (
            <div
              key={mini.id}
              className={`${mini.bgClass} rounded-xs p-5 flex items-center justify-between h-32 overflow-hidden`}
            >
              <div>
                {mini.eyebrow && (
                  <span className="text-xs font-extrabold text-[#16a34a]">
                    {mini.eyebrow}
                  </span>
                )}
                <h3 className="text-sm font-bold text-neutral-900">
                  {mini.title}
                </h3>
                <p className="text-xs text-neutral-600">{mini.subtitle}</p>
                {!mini.eyebrow && (
                  <div className="pt-1">
                    <span className="block text-[9px] uppercase text-neutral-400">
                      CHỈ
                    </span>
                    <span className="text-xs font-extrabold text-[#16a34a]">
                      {mini.priceText}
                    </span>
                  </div>
                )}
              </div>
              <img
                src={mini.image}
                alt={mini.title}
                className="w-24 h-24 object-cover rounded-lg shrink-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          8. XU HƯỚNG (Left 3x2 Grid + Right Tall Banner + 2 Wide Bottom Banners)
         ===================================================================== */}
      <section id="xu-huong" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-neutral-900">Xu hướng</h2>
          <a
            href="#lien-he"
            className="text-xs text-neutral-500 hover:text-[#2d7a89] inline-flex items-center gap-1"
          >
            <span>Xem tất cả</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 3x2 Product Grid (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {trending.items.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onAdd={handleAddProduct}
              />
            ))}
          </div>

          {/* Right Tall Vertical Banner (3 cols) */}
          <div className="lg:col-span-3 rounded-xs overflow-hidden min-h-[380px]">
            <img
              src={trending.sideBannerImage}
              alt="Xu hướng mỹ phẩm"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom 2 Wide Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {trending.bottomWideBanners.map((wb) => (
            <div
              key={wb.id}
              className={`${wb.bgClass} rounded-xs p-6 flex items-center justify-between h-36 overflow-hidden`}
            >
              <div className="space-y-1">
                <h3 className="text-base font-bold text-neutral-900">
                  {wb.title}
                </h3>
                <p className="text-xs font-semibold text-neutral-700">
                  {wb.subtitle}
                </p>
                <div className="pt-1">
                  <span className="block text-[9px] uppercase text-neutral-400">
                    CHỈ
                  </span>
                  <span className="text-xs font-extrabold text-[#16a34a]">
                    {wb.priceText}
                  </span>
                </div>
              </div>
              <img
                src={wb.image}
                alt={wb.title}
                className="w-36 h-28 object-cover rounded-lg shrink-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          9. LIGHT GRAY 4-COLUMN FOOTER (#f5f6f7)
         ===================================================================== */}
      <footer
        id="lien-he"
        className="bg-[#f5f6f7] text-neutral-600 pt-14 pb-6 px-4 mt-8 border-t border-neutral-200/70 text-xs"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-200">
            {/* Col 1: Liên hệ */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-neutral-900">Liên hệ</h4>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Để liên hệ với chúng tôi, vui lòng sử dụng thông tin liên hệ sau
                đây{" "}
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-[#2d7a89] underline"
                >
                  {primaryEmail}
                </a>
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                <div className="w-9 h-9 rounded-lg border border-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700">
                  24
                </div>
                <div>
                  <span className="block text-[9px] uppercase text-neutral-400">
                    GỌI CHO CHÚNG TÔI
                  </span>
                  <span className="text-xs font-bold text-neutral-900">
                    {primaryPhone}
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: Danh mục */}
            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-3">
                Danh mục
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#trang-chu" className="hover:text-[#2d7a89]">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#patch-banner" className="hover:text-[#2d7a89]">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham-ban-chay" className="hover:text-[#2d7a89]">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#xu-huong" className="hover:text-[#2d7a89]">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#2d7a89]">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Liên kết */}
            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-3">
                Liên kết
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#khuyen-mai" className="hover:text-[#2d7a89]">
                    Giao hàng &amp; Đổi trả
                  </a>
                </li>
                <li>
                  <a href="#khuyen-mai" className="hover:text-[#2d7a89]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#khuyen-mai" className="hover:text-[#2d7a89]">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href="#san-pham-moi" className="hover:text-[#2d7a89]">
                    So sánh sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#2d7a89]">
                    Đăng ký thành viên
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Vị trí cửa hàng & Giờ hoạt động */}
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-2">
                  Vị trí cửa hàng
                </h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  Địa chỉ: {data.business.address}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                  Giờ hoạt động
                </h4>
                <p className="text-[11px] text-neutral-500">
                  {data.business.workingHours}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-neutral-400">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-neutral-700">{data.business.name}</strong>
            </p>
            <div className="flex gap-4">
              <span>Giới thiệu</span>
              <span>FAQs</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ADD TO CART TOAST */}
      {toastProduct && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#2d7a89] text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-xs">
          <Check className="w-4 h-4" />
          <span>Đã thêm &ldquo;{toastProduct}&rdquo; vào giỏ hàng!</span>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
