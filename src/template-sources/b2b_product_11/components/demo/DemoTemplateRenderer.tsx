"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Truck,
  Globe,
  Search,
  List,
  ChevronDown,
  ChevronRight,
  Heart,
  ShoppingCart,
  Star,
  ArrowRight,
  Phone,
  Send,
  CheckCircle2,
  X,
  Menu,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct11DefaultData,
  type B2BProduct11TemplateData,
  type B2BProduct11Product
} from "@/template-sources/b2b_product_11/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: B2BProduct11TemplateData = adaptClonedTemplateData(
    b2bProduct11DefaultData,
    incomingData
  );

  const [bestSellerFilter, setBestSellerFilter] = useState<string>("all");
  const [popularFilter, setPopularFilter] = useState<string>("all");
  const [onlineTab, setOnlineTab] = useState<string>("hang-dau");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<B2BProduct11Product | null>(null);
  const [categoryDropdownOpen, setCategoryDropdownOpen] =
    useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "MONA SMART";

  const filteredBestSellers = (data.bestSellerProducts || []).filter((p) =>
    bestSellerFilter === "all" ? true : p.category === bestSellerFilter
  );

  const filteredPopular = (data.popularProducts || []).filter((p) =>
    popularFilter === "all" ? true : p.category === popularFilter
  );

  const renderStars = (rating: number, reviews: number) => (
    <div className="flex items-center justify-center gap-0.5 my-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i <= rating
              ? "fill-[#ff9900] text-[#ff9900]"
              : "fill-zinc-200 text-zinc-200"
          }`}
        />
      ))}
      <span className="text-[10px] text-[#888888] ml-1">({reviews})</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#ff8a00] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-[#eeeeee] bg-white text-[11px] text-[#666666]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4 truncate">
            <span className="inline-flex items-center gap-1 truncate">
              <MapPin className="w-3 h-3 text-[#ff8a00] shrink-0" />
              <span className="truncate">{data.business.address}</span>
            </span>
            <span className="hidden sm:inline text-[#dddddd]">|</span>
            <a
              href={`mailto:${primaryEmail}`}
              className="hidden sm:inline-flex items-center gap-1 hover:text-[#ff8a00]"
            >
              <Mail className="w-3 h-3 text-[#ff8a00]" />
              <span>{primaryEmail}</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1 hover:text-[#ff8a00]"
            >
              <Truck className="w-3 h-3 text-[#888888]" />
              <span>Theo dõi đơn hàng</span>
            </a>
            <span className="text-[#dddddd]">|</span>
            <a href="#lien-he" className="hover:text-[#ff8a00]">
              Chính sách
            </a>
            <span className="text-[#dddddd]">|</span>
            <a href="#lien-he" className="hover:text-[#ff8a00]">
              Thanh toán
            </a>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE LOGO & SEARCH HEADER */}
      <header className="sticky top-0 z-40 bg-white shadow-xs">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#trang-chu" className="flex items-center gap-2.5 shrink-0">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-9 w-auto object-contain"
              />
            ) : (
              <>
                <div className="w-9 h-9 rounded-full bg-[#fff4e6] border border-[#ff8a00]/40 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-[#ff8a00]" />
                </div>
                <div className="leading-none">
                  <span className="block text-base sm:text-lg font-black uppercase tracking-tight text-[#222222]">
                    {brandName}
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.28em] text-[#888888] mt-0.5">
                    TECHNOLOGY
                  </span>
                </div>
              </>
            )}
          </a>

          {/* Center Search Input */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thiết bị thông minh, đồng hồ, tablet..."
              className="w-full rounded-full bg-[#f5f5f5] border border-transparent focus:border-[#ff8a00] focus:bg-white pl-4 pr-10 py-2 text-xs focus:outline-none transition-colors"
            />
            <a
              href="#mua-sam"
              aria-label="Tìm kiếm"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#ff8a00]"
            >
              <Search className="w-4 h-4" />
            </a>
          </div>

          {/* Right Social Links + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 text-xs font-bold text-[#333333]">
            <div className="hidden lg:flex items-center gap-3">
              <a href="#lien-he" className="hover:text-[#ff8a00]">
                f
              </a>
              <a href="#lien-he" className="hover:text-[#ff8a00]">
                𝕏
              </a>
              <a href="#lien-he" className="hover:text-[#ff8a00]">
                in
              </a>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden p-1.5"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 3. BOTTOM CATEGORY & NAVIGATION BAR */}
        <div className="border-t border-b border-[#efefef] bg-white">
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 h-11 flex items-center justify-between gap-4">
            {/* Left Orange Category Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoryDropdownOpen((v) => !v)}
                className="bg-[#ff8a00] hover:bg-[#e67a00] text-white text-xs font-bold px-5 h-11 inline-flex items-center gap-3 transition-colors"
              >
                <List className="w-4 h-4" />
                <span>Danh mục</span>
                <ChevronDown className="w-3.5 h-3.5 ml-2" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute left-0 top-11 w-56 bg-white border border-[#eeeeee] shadow-xl py-2 z-50 text-xs">
                  {(data.sidebarCategories || []).map((cat, idx) => (
                    <a
                      key={idx}
                      href="#mua-sam"
                      onClick={() => setCategoryDropdownOpen(false)}
                      className="block px-4 py-2 text-[#444444] hover:bg-[#fff6eb] hover:text-[#ff8a00]"
                    >
                      {cat}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Center Nav */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#333333]">
              <a
                href="#trang-chu"
                className="text-[#ff8a00] font-bold"
              >
                Trang chủ
              </a>
              <a href="#pho-bien" className="hover:text-[#ff8a00]">
                Giới thiệu
              </a>
              <a href="#san-pham" className="hover:text-[#ff8a00]">
                Sản phẩm
              </a>
              <a href="#danh-muc-so" className="hover:text-[#ff8a00]">
                Tin tức
              </a>
              <a href="#lien-he" className="hover:text-[#ff8a00]">
                Liên hệ
              </a>
            </nav>

            {/* Right Wishlist & Cart Icons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setWishlistCount((c) => c + 1)}
                className="relative text-[#333333] hover:text-[#ff8a00]"
                aria-label="Yêu thích"
              >
                <Heart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#ff8a00] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedProduct(data.bestSellerProducts?.[0] || null)
                }
                className="relative text-[#333333] hover:text-[#ff8a00]"
                aria-label="Giỏ hàng"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#ff8a00] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#eeeeee] px-6 py-4 space-y-2.5 text-xs font-bold">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#ff8a00]"
            >
              Trang chủ
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sản phẩm bán chạy
            </a>
            <a
              href="#pho-bien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Sản phẩm phổ biến
            </a>
            <a
              href="#mua-sam"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Mua sắm trực tuyến
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 4. HERO SPLIT BANNERS + 4 MINI CATEGORY CARDS */}
      <section id="trang-chu" className="pt-5 pb-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 space-y-5">
          {/* Top 8 + 4 Split Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 8-col Smartwatch Hero */}
            <div className="lg:col-span-8 bg-[#f6f6f6] rounded-sm p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative overflow-hidden">
              <div className="sm:col-span-6 z-10">
                <p className="text-[11px] font-semibold text-[#ff8a00] mb-1.5">
                  {data.hero.eyebrow}
                </p>
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#222222] leading-tight mb-2">
                  {data.hero.title}
                </h1>
                <p className="text-xs text-[#777777] mb-4">
                  {data.hero.subtitle}
                </p>

                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[10px] font-bold uppercase text-[#ff8a00]">
                    Ưu đãi
                  </span>
                  <span className="text-2xl font-black text-[#ff8a00]">
                    70%
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#ff8a00]">
                    2,990,000₫
                  </span>
                </div>

                <a
                  href={data.hero.ctaLink || "#san-pham"}
                  className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#ff8a00] text-white text-[11px] font-bold uppercase px-6 py-2.5 rounded-full transition-colors"
                >
                  <span>{data.hero.ctaText || "MUA NGAY"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="sm:col-span-6 flex justify-center">
                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-60 h-60 sm:w-72 sm:h-72 object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right 4-col Smartphone Promo */}
            <div className="lg:col-span-4 bg-[#f6f6f6] rounded-sm p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="inline-block bg-[#ff8a00] text-white text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-xs mb-2">
                  {data.heroRightPromo.badge}
                </span>
                <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#222222] leading-snug mb-2">
                  {data.heroRightPromo.title}
                </h2>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-[10px] font-bold text-[#ff8a00]">
                    Ưu đãi
                  </span>
                  <span className="text-2xl font-black text-[#ff8a00]">
                    {data.heroRightPromo.discount}
                  </span>
                </div>
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-1.5 border border-[#ff8a00] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full transition-colors"
                >
                  <span>MUA NGAY</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="mt-4 flex justify-center">
                <img
                  src={data.heroRightPromo.image}
                  alt={data.heroRightPromo.title}
                  className="h-40 w-auto object-contain rounded"
                />
              </div>
            </div>
          </div>

          {/* 4 Mini Category Promo Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.miniBanners || []).map((mb) => (
              <a
                key={mb.id}
                href="#mua-sam"
                className="group bg-[#f6f6f6] hover:bg-[#fff8f0] border border-transparent hover:border-[#ff8a00]/40 p-4 flex items-center justify-between gap-3 rounded-sm transition-all"
              >
                <img
                  src={mb.image}
                  alt={mb.title}
                  className="w-20 h-16 object-cover rounded-xs shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-extrabold uppercase text-[#222222] leading-tight mb-1">
                    {mb.title}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[9px] text-[#777777]">Ưu đãi</span>
                    <span className="text-base font-black text-[#ff8a00]">
                      {mb.discount}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#222222] group-hover:text-[#ff8a00]">
                    <span>Mua ngay</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ff8a00] text-white inline-flex items-center justify-center text-[8px]">
                      ❯
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEST SELLING PRODUCTS ("Sản Phẩm Bán Chạy") */}
      <section id="san-pham" className="pb-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Vertical Promo Card */}
            <div className="lg:col-span-2 bg-[#f6f6f6] p-5 flex flex-col justify-between rounded-sm">
              <div>
                <span className="inline-block bg-[#ff8a00] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-xs mb-2">
                  {data.bestSellerLeftCard.badge}
                </span>
                <h3 className="text-sm font-extrabold uppercase text-[#222222] leading-snug mb-2">
                  {data.bestSellerLeftCard.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[10px] text-[#ff8a00] font-bold">
                    Ưu đãi
                  </span>
                  <span className="text-xl font-black text-[#ff8a00]">
                    {data.bestSellerLeftCard.discount}
                  </span>
                </div>
                <a
                  href="#mua-sam"
                  className="inline-flex items-center gap-1 border border-[#ff8a00] text-[#ff8a00] hover:bg-[#ff8a00] hover:text-white text-[10px] font-bold uppercase px-3.5 py-1.5 rounded-full transition-colors"
                >
                  <span>KHÁM PHÁ</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <img
                src={data.bestSellerLeftCard.image}
                alt={data.bestSellerLeftCard.title}
                className="w-full h-32 object-cover rounded mt-4"
              />
            </div>

            {/* Right 10-col Header + Orange-Bordered 5-Item Row */}
            <div className="lg:col-span-10 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#eeeeee]">
                <h2 className="text-sm sm:text-base font-bold">
                  <span className="text-[#ff8a00]">Sản Phẩm</span>{" "}
                  <span className="text-[#222222]">Bán Chạy</span>
                </h2>
                <div className="flex items-center gap-4 text-xs text-[#666666]">
                  {["all", "Tai nghe", "Điện thoại", "Thiết bị"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setBestSellerFilter(tab)}
                      className={`cursor-pointer ${
                        bestSellerFilter === tab
                          ? "text-[#222222] font-bold"
                          : "hover:text-[#ff8a00]"
                      }`}
                    >
                      {tab === "all" ? "Tất cả" : tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Orange-Bordered 5-Product Box */}
              <div className="border-2 border-[#ff8a00] rounded-sm p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1">
                {filteredBestSellers.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className="group cursor-pointer text-center flex flex-col"
                  >
                    <div className="relative aspect-square bg-[#fafafa] p-3 mb-2 overflow-hidden">
                      <span className="absolute top-1.5 left-1.5 bg-[#ff8a00] text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-2xs">
                        SALE!
                      </span>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    {renderStars(prod.rating, prod.reviews)}
                    <h3 className="text-[11px] font-medium text-[#333333] group-hover:text-[#ff8a00] line-clamp-2 mb-1">
                      {prod.name}
                    </h3>
                    <div className="mt-auto text-[11px]">
                      {prod.oldPrice && (
                        <span className="text-[#999999] line-through mr-1">
                          {prod.oldPrice}
                        </span>
                      )}
                      <span className="font-bold text-[#ff8a00]">
                        {prod.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. POPULAR PRODUCTS + 2 DARK TWIN BANNERS ("Sản Phẩm Phổ Biến") */}
      <section id="pho-bien" className="pb-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-5 border-b border-[#eeeeee]">
            <h2 className="text-sm sm:text-base font-bold">
              <span className="text-[#ff8a00]">Sản Phẩm</span>{" "}
              <span className="text-[#222222]">Phổ Biến</span>
            </h2>
            <div className="flex items-center gap-4 text-xs text-[#666666]">
              {["all", "Thiết bị", "Điện thoại", "Phụ kiện"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setPopularFilter(tab)}
                  className={`cursor-pointer ${
                    popularFilter === tab
                      ? "text-[#222222] font-bold"
                      : "hover:text-[#ff8a00]"
                  }`}
                >
                  {tab === "all" ? "Tất cả" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* 5 Popular Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
            {filteredPopular.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group cursor-pointer text-center flex flex-col p-3 border border-[#f2f2f2] hover:border-[#ff8a00] transition-colors"
              >
                <div className="relative aspect-square bg-[#fafafa] p-3 mb-2 overflow-hidden">
                  <span className="absolute top-1.5 left-1.5 bg-[#ff8a00] text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-2xs">
                    SALE!
                  </span>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                {renderStars(prod.rating, prod.reviews)}
                <h3 className="text-[11px] font-medium text-[#333333] group-hover:text-[#ff8a00] line-clamp-2 mb-1">
                  {prod.name}
                </h3>
                <div className="mt-auto text-[11px]">
                  {prod.oldPrice && (
                    <span className="text-[#999999] line-through mr-1">
                      {prod.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-[#ff8a00]">{prod.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Twin Dark Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(data.twinDarkBanners || []).map((banner) => (
              <div
                key={banner.id}
                className="bg-[#111111] text-white rounded-sm p-6 flex items-center justify-between gap-4 overflow-hidden relative"
              >
                <div className="z-10">
                  <h3 className="text-sm sm:text-base font-extrabold uppercase mb-1">
                    {banner.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mb-3">
                    Chỉ từ{" "}
                    <span className="text-[#ff8a00] font-bold">
                      {banner.priceText}
                    </span>
                  </p>
                  <a
                    href="#mua-sam"
                    className="text-[11px] font-bold text-white hover:text-[#ff8a00] underline underline-offset-4"
                  >
                    Mua ngay
                  </a>
                </div>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-32 h-24 object-cover rounded opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SIDEBAR CATEGORIES + ONLINE SHOPPING 10-PRODUCT GRID ("Mua Sắm Trực Tuyến") */}
      <section id="mua-sam" className="pb-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 2-col Sidebar */}
            <div className="lg:col-span-2">
              <div className="pb-2.5 mb-3 border-b border-[#eeeeee]">
                <h3 className="text-sm font-bold text-[#222222]">Danh Mục</h3>
              </div>
              <ul className="border border-[#eeeeee] divide-y divide-[#f5f5f5] text-[11.5px] text-[#555555]">
                {(data.sidebarCategories || []).map((cat, idx) => (
                  <li key={idx}>
                    <a
                      href="#san-pham"
                      className="block px-3.5 py-2 hover:bg-[#fff7ed] hover:text-[#ff8a00] transition-colors truncate"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right 10-col 5x2 Product Grid */}
            <div className="lg:col-span-10">
              <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-[#eeeeee]">
                <h2 className="text-sm sm:text-base font-bold">
                  <span className="text-[#222222]">Mua Sắm</span>{" "}
                  <span className="text-[#ff8a00]">Trực Tuyến</span>
                </h2>
                <div className="flex items-center gap-4 text-xs">
                  <button
                    type="button"
                    onClick={() => setOnlineTab("hang-dau")}
                    className={
                      onlineTab === "hang-dau"
                        ? "font-bold text-[#222222] border-b-2 border-[#ff8a00]"
                        : "text-[#666666]"
                    }
                  >
                    Hàng đầu
                  </button>
                  <button
                    type="button"
                    onClick={() => setOnlineTab("ban-chay")}
                    className={
                      onlineTab === "ban-chay"
                        ? "font-bold text-[#222222] border-b-2 border-[#ff8a00]"
                        : "text-[#666666]"
                    }
                  >
                    Bán chạy
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {(data.onlineShoppingProducts || []).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className="group cursor-pointer text-center flex flex-col p-2.5 border border-[#f3f3f3] hover:border-[#ff8a00] transition-colors"
                  >
                    <div className="relative aspect-square bg-[#fafafa] p-2.5 mb-2 overflow-hidden">
                      <span className="absolute top-1.5 left-1.5 bg-[#ff8a00] text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-2xs">
                        SALE!
                      </span>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    {renderStars(prod.rating, prod.reviews)}
                    <h3 className="text-[11px] font-medium text-[#333333] group-hover:text-[#ff8a00] line-clamp-2 mb-1">
                      {prod.name}
                    </h3>
                    <div className="mt-auto text-[11px]">
                      {prod.oldPrice && (
                        <span className="text-[#999999] line-through mr-1">
                          {prod.oldPrice}
                        </span>
                      )}
                      <span className="font-bold text-[#ff8a00]">
                        {prod.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ORANGE-BORDERED 6-PRODUCT STRIP */}
      <section className="pb-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="border-2 border-[#ff8a00] rounded-sm p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {(data.stripProducts || []).map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group cursor-pointer text-center flex flex-col"
              >
                <div className="relative aspect-square bg-[#fafafa] p-2.5 mb-2 overflow-hidden">
                  <span className="absolute top-1.5 left-1.5 bg-[#ff8a00] text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-2xs">
                    SALE!
                  </span>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                {renderStars(prod.rating, prod.reviews)}
                <h3 className="text-[11px] font-medium text-[#333333] group-hover:text-[#ff8a00] line-clamp-2 mb-1">
                  {prod.name}
                </h3>
                <div className="mt-auto text-[11px]">
                  {prod.oldPrice && (
                    <span className="text-[#999999] line-through mr-1">
                      {prod.oldPrice}
                    </span>
                  )}
                  <span className="font-bold text-[#ff8a00]">{prod.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NUMBERED PRODUCT CATEGORIES ("Danh Mục Sản Phẩm" + Right Dark Promo Card) */}
      <section id="danh-muc-so" className="pb-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="pb-2.5 mb-4 border-b border-[#eeeeee]">
            <h2 className="text-sm sm:text-base font-bold text-[#222222]">
              Danh Mục Sản Phẩm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 9-col Orange-Bordered 3x2 Category Groups */}
            <div className="lg:col-span-9 border border-[#ff8a00]/60 rounded-sm p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(data.categoryGroups || []).map((cg) => (
                <div key={cg.id} className="flex items-start gap-3">
                  <div className="relative w-20 h-24 bg-[#fafafa] p-2 shrink-0 border border-[#f0f0f0]">
                    <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#ff8a00] text-white text-[9px] font-bold flex items-center justify-center">
                      {cg.number}
                    </span>
                    <img
                      src={cg.image}
                      alt={cg.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#222222] mb-1.5">
                      {cg.title}
                    </h3>
                    <ul className="space-y-1 text-[11px] text-[#666666]">
                      {cg.items.map((it, i) => (
                        <li key={i}>
                          <a href="#mua-sam" className="hover:text-[#ff8a00]">
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 3-col Dark Smartphone Vertical Banner */}
            <div className="lg:col-span-3 bg-[#151515] text-white rounded-sm p-6 flex flex-col items-center text-center justify-between relative overflow-hidden">
              <img
                src={data.rightTallPromo1.image}
                alt={data.rightTallPromo1.title}
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="relative z-10 my-auto space-y-2.5">
                <span className="text-[10px] font-bold uppercase text-[#ff8a00]">
                  {data.rightTallPromo1.eyebrow}
                </span>
                <h3 className="text-base font-bold leading-snug">
                  {data.rightTallPromo1.title}
                </h3>
                <p className="text-xl font-extrabold text-[#ff8a00]">
                  {data.rightTallPromo1.price}
                </p>
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-1.5 bg-[#ff8a00] hover:bg-[#e67a00] text-white text-[10px] font-bold uppercase px-5 py-2 rounded-full transition-colors"
                >
                  <span>MUA NGAY</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FULL-WIDTH DARK PROCESSOR BANNER ("Bộ vi xử lý tiên tiến với công nghệ cao") */}
      <section className="pb-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="bg-[#111111] text-white rounded-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative overflow-hidden">
            <div className="lg:col-span-5 z-10">
              <span className="inline-block bg-[#ff8a00] text-white text-[10px] font-bold px-3 py-0.5 rounded-xs mb-3">
                {data.processorBanner.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold leading-snug mb-2">
                {data.processorBanner.title}
              </h2>
              <p className="text-xs text-zinc-400 mb-5">
                {data.processorBanner.subtitle}
              </p>
              <a
                href="#mua-sam"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-white hover:text-[#ff8a00]"
              >
                <span>MUA NGAY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center relative">
              <span className="absolute -top-2 left-4 w-14 h-14 rounded-full bg-[#ff8a00] text-white text-xs font-black flex items-center justify-center text-center leading-none p-2 shadow-lg">
                {data.processorBanner.discount}
              </span>
              <img
                src={data.processorBanner.image}
                alt={data.processorBanner.title}
                className="h-40 sm:h-48 w-auto object-contain"
              />
            </div>

            <div className="lg:col-span-3 flex justify-center">
              <div className="border-2 border-zinc-400 bg-zinc-800/80 px-5 py-3 rounded -rotate-6 shadow-xl text-center">
                <span className="block text-xl sm:text-2xl font-black text-white tracking-tight">
                  {data.processorBanner.priceBadge}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#ff8a00] font-bold">
                  GIÁ ƯU ĐÃI SỈ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM MULTI-COLUMN PRODUCT LISTS ("Sản Phẩm Mới Nhất" / "Bán Chạy Nhất" / "Phổ Biến Nhất") */}
      <section className="pb-12 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Col 1: Thiết kế đẹp mini sidebar */}
            <div className="lg:col-span-2 bg-[#f8f8f8] p-4 rounded-sm">
              <h3 className="text-xs font-bold text-[#222222] mb-3">
                Thiết kế đẹp
              </h3>
              <ul className="space-y-2.5 text-[11px] text-[#555555]">
                {(data.sidebarCategories || []).slice(0, 6).map((cat, i) => (
                  <li key={i}>
                    <a
                      href="#mua-sam"
                      className="flex items-center justify-between hover:text-[#ff8a00]"
                    >
                      <span className="truncate">{cat}</span>
                      <ChevronRight className="w-3 h-3 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2, 3, 4: 3 Mini Product Columns */}
            {[
              {
                title: "Sản Phẩm Mới Nhất",
                items: (data.stripProducts || []).slice(0, 4)
              },
              {
                title: "Bán Chạy Nhất",
                items: (data.onlineShoppingProducts || []).slice(4, 8)
              },
              {
                title: "Phổ Biến Nhất",
                items: (data.bestSellerProducts || []).slice(0, 4)
              }
            ].map((col, idx) => (
              <div key={idx} className="lg:col-span-2.5 lg:col-span-2">
                <h3 className="text-xs font-bold text-[#222222] pb-2 mb-3 border-b border-[#eeeeee]">
                  {col.title}
                </h3>
                <div className="space-y-3.5">
                  {col.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedProduct(item)}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain bg-[#fafafa] p-1 border border-[#f0f0f0] shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-medium text-[#333333] group-hover:text-[#ff8a00] line-clamp-2 leading-tight">
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-bold text-[#ff8a00]">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Right 4-col Dark Promo Card */}
            <div className="lg:col-span-4 bg-[#1c1c1c] text-white rounded-sm p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <img
                src={data.rightTallPromo2.image}
                alt={data.rightTallPromo2.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 space-y-2.5">
                <span className="text-[10px] font-bold uppercase text-[#ff8a00]">
                  {data.rightTallPromo2.eyebrow}
                </span>
                <h3 className="text-base font-bold">
                  {data.rightTallPromo2.title}
                </h3>
                <p className="text-xl font-extrabold text-[#ff8a00]">
                  {data.rightTallPromo2.price}
                </p>
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-1.5 bg-[#ff8a00] hover:bg-[#e67a00] text-white text-[10px] font-bold uppercase px-5 py-2 rounded-full"
                >
                  <span>MUA NGAY</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PARTNER LOGOS STRIP */}
      <section className="py-8 border-t border-[#f0f0f0] bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="flex items-center justify-center gap-1.5 py-2 text-center"
              >
                <span className="bg-[#ff8a00] text-white text-[9px] font-black px-1.5 py-0.5 rounded-2xs">
                  PRO
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#555555]">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DARK FOOTER WITH TOP NEWSLETTER BAR */}
      <footer id="lien-he" className="bg-[#0b0b0b] text-zinc-400 text-xs">
        {/* Newsletter Bar */}
        <div className="border-b border-white/10 py-6">
          <div className="max-w-[1220px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white">
                Đăng Ký <span className="text-[#ff8a00]">Tin Tức</span>
              </h3>
              <p className="text-[11px] text-zinc-400">
                Đăng ký ngay để cập nhật bảng giá sỉ & tin tức công nghệ mới
                nhất
              </p>
            </div>

            {newsletterDone ? (
              <div className="bg-[#ff8a00]/20 border border-[#ff8a00] text-white px-4 py-2 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff8a00]" />
                <span>Đã đăng ký nhận bản tin công nghệ thành công!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="flex items-stretch w-full sm:w-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  className="bg-[#1d1d1d] border border-white/10 text-white px-4 py-2.5 text-xs w-full sm:w-64 focus:outline-none focus:border-[#ff8a00]"
                />
                <button
                  type="submit"
                  className="bg-[#ff8a00] hover:bg-[#e67a00] text-white text-xs font-bold uppercase px-6 py-2.5 shrink-0 transition-colors"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Footer Links */}
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ff8a00]/20 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#ff8a00]" />
                </div>
                <div>
                  <span className="block text-sm font-black uppercase text-white">
                    {brandName}
                  </span>
                  <span className="block text-[8px] uppercase tracking-[0.25em] text-zinc-500">
                    TECHNOLOGY
                  </span>
                </div>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-400">
                {data.business.aboutText?.[0]}
              </p>
              <p className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#ff8a00]" />
                <span>{primaryEmail}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff8a00]" />
                <span>{primaryPhone}</span>
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-xs uppercase mb-4">
                Danh mục
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#mua-sam" className="hover:text-[#ff8a00]">
                    Loa Bluetooth
                  </a>
                </li>
                <li>
                  <a href="#mua-sam" className="hover:text-[#ff8a00]">
                    Máy ảnh kỹ thuật số
                  </a>
                </li>
                <li>
                  <a href="#mua-sam" className="hover:text-[#ff8a00]">
                    Ổ cứng di động
                  </a>
                </li>
                <li>
                  <a href="#mua-sam" className="hover:text-[#ff8a00]">
                    Thiết bị gia dụng
                  </a>
                </li>
                <li>
                  <a href="#mua-sam" className="hover:text-[#ff8a00]">
                    Tivi & Màn hình
                  </a>
                </li>
                <li>
                  <a href="#mua-sam" className="hover:text-[#ff8a00]">
                    Phụ kiện thông minh
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-xs uppercase mb-4">
                Dịch vụ
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Điều khoản & Điều kiện
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Trung tâm hỗ trợ B2B
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Đổi trả bảo hành
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-xs uppercase mb-4">
                Liên kết
              </h4>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#trang-chu" className="hover:text-[#ff8a00]">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Tra cứu đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff8a00]">
                    Liên hệ đại lý
                  </a>
                </li>
                <li>
                  <a href="#danh-muc-so" className="hover:text-[#ff8a00]">
                    Tin tức công nghệ
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#ff8a00]">
                    Sản phẩm chủ lực
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-[11px] text-zinc-500">
          © Thiết kế và lập trình bởi{" "}
          <span className="text-white font-bold">{brandName}</span>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-4 right-4 z-40 w-9 h-9 rounded-full bg-[#ff8a00] text-white shadow-lg flex items-center justify-center hover:bg-[#e67a00]"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full rounded-sm overflow-hidden shadow-2xl border-t-4 border-[#ff8a00]"
          >
            <div className="aspect-video bg-[#f7f7f7] p-4 relative flex items-center justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <span className="text-[10px] font-bold uppercase text-[#ff8a00]">
                {selectedProduct.category}
              </span>
              <h3 className="text-base font-bold text-[#222222] mt-1 mb-2">
                {selectedProduct.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-lg font-extrabold text-[#ff8a00]">
                  {selectedProduct.price}
                </span>
                {selectedProduct.oldPrice && (
                  <span className="text-xs text-[#999999] line-through">
                    {selectedProduct.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 bg-[#ff8a00] hover:bg-[#e67a00] text-white text-xs font-bold uppercase py-2.5 rounded-full"
                >
                  Thêm Vào Giỏ Hàng
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="border border-[#111111] text-[#111111] text-xs font-bold uppercase px-4 py-2.5 rounded-full"
                >
                  Báo Giá Đại Lý
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
