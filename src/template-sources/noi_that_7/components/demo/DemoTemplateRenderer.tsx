"use client";

import React, { useState } from "react";
import {
  Heart,
  User,
  ShoppingBag,
  ListFilter,
  ChevronDown,
  Phone,
  Search,
  Star,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Plus,
  Users,
  Award,
  PackageCheck,
  Store,
  Truck,
  Headphones,
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  X,
  Menu,
  Mail,
  MapPin
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat7DefaultData,
  type NoiThat7TemplateData,
  type NoiThat7ProductItem
} from "@/template-sources/noi_that_7/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat7TemplateData = adaptClonedTemplateData(
    noiThat7DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("tat-ca");
  const [categoryDropdownOpen, setCategoryDropdownOpen] =
    useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [activeHotspotId, setActiveHotspotId] = useState<string>("hs-1");
  const [selectedProduct, setSelectedProduct] =
    useState<NoiThat7ProductItem | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);
  const [heroSlide, setHeroSlide] = useState<number>(0);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "MOKITCHEN";

  const allProducts = data.products || [];
  const flashSaleProducts = allProducts.slice(0, 4);
  const newestProducts = allProducts.slice(0, 4);
  const steamerProducts = allProducts.filter(
    (p) => p.sectionKey === "sua-hat"
  );
  const airFryerProducts = allProducts.slice(1, 3);
  const bestSellerProducts = allProducts.slice(0, 4);

  const filteredSearchProducts = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const toggleWishlist = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderProductCard = (product: NoiThat7ProductItem) => {
    const isLiked = wishlistIds.includes(product.id);
    return (
      <div
        key={product.id}
        onClick={() => {
          setSelectedProduct(product);
          setOrderSuccess(false);
        }}
        className="group bg-white border border-[#ebebeb] rounded-lg p-3.5 flex flex-col justify-between hover:shadow-lg hover:border-[#f37021]/40 transition-all cursor-pointer"
      >
        <div>
          {/* Image Box */}
          <div className="relative aspect-square bg-white rounded-md overflow-hidden mb-3 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.discountBadge && (
              <span className="absolute top-2 left-2 bg-[#f37021] text-white text-[11px] font-bold px-2.5 py-0.5 rounded">
                {product.discountBadge}
              </span>
            )}
            <button
              type="button"
              onClick={(e) => toggleWishlist(product.id, e)}
              aria-label="Yêu thích"
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-white shadow-xs flex items-center justify-center text-[#888888] hover:text-[#f37021]"
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  isLiked ? "fill-[#f37021] text-[#f37021]" : ""
                }`}
              />
            </button>
          </div>

          {/* Product Name */}
          <h3 className="text-[13px] font-semibold text-[#222222] group-hover:text-[#f37021] transition-colors line-clamp-2 min-h-[38px] mb-1.5">
            {product.title}
          </h3>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center text-[#ffb800]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-3 h-3 fill-[#ffb800] text-[#ffb800]"
                />
              ))}
            </div>
            <span className="text-[11px] text-[#888888]">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price + Brand Tag */}
          <div className="flex items-end justify-between gap-2 mb-3">
            <div>
              <div className="text-[15px] font-extrabold text-[#222222]">
                {product.price}
              </div>
              {product.oldPrice && (
                <div className="text-[11px] text-[#999999] line-through">
                  {product.oldPrice}
                </div>
              )}
            </div>
            <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-[#f5f5f5] text-[#555555]">
              {product.brandName}
            </span>
          </div>
        </div>

        {/* Add To Cart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setCartCount((c) => c + 1);
            setSelectedProduct(product);
            setOrderSuccess(true);
          }}
          className="w-full py-2 px-3 rounded border border-[#e5e5e5] bg-[#f9f9f9] group-hover:bg-[#f37021] group-hover:border-[#f37021] group-hover:text-white text-[#444444] text-[11px] font-bold uppercase tracking-wide flex items-center justify-center gap-1.5 transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>THÊM VÀO GIỎ HÀNG</span>
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#f37021] selection:text-white">
      {/* 1. TOP MAIN HEADER */}
      <header id="trang-chu" className="bg-white border-b border-[#f0f0f0]">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#trang-chu"
            className="flex items-center gap-1 text-2xl sm:text-[28px] font-black tracking-tight shrink-0"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-[#f37021] uppercase tracking-tight font-black">
                {brandName}
              </span>
            )}
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-[#333333]">
            <a
              href="#trang-chu"
              className="text-[#f37021] font-bold transition-colors"
            >
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#f37021] transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#f37021] transition-colors"
            >
              Sản Phẩm
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#f37021] transition-colors"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#f37021] transition-colors"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Right User / Wishlist / Cart Icons */}
          <div className="flex items-center gap-4 text-[#333333]">
            <button
              type="button"
              onClick={() => {
                if (allProducts[0]) toggleWishlist(allProducts[0].id);
              }}
              className="relative hover:text-[#f37021] transition-colors"
              aria-label="Yêu thích"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#f37021] text-white text-[10px] font-bold flex items-center justify-center">
                {wishlistIds.length}
              </span>
            </button>

            <a
              href="#lien-he"
              className="hover:text-[#f37021] transition-colors"
              aria-label="Tài khoản"
            >
              <User className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => {
                if (allProducts[0]) {
                  setSelectedProduct(allProducts[0]);
                  setOrderSuccess(false);
                }
              }}
              className="relative hover:text-[#f37021] transition-colors"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#f37021] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 text-[#222222]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#eeeeee] bg-white px-4 py-3 space-y-2 text-sm font-semibold">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#f37021]"
            >
              Trang Chủ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f37021]"
            >
              Giới Thiệu
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f37021]"
            >
              Sản Phẩm
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f37021]"
            >
              Tin Tức
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#f37021]"
            >
              Liên Hệ
            </a>
          </div>
        )}
      </header>

      {/* 2. DARK CHARCOAL CATEGORY + SEARCH + HOTLINE BAR */}
      <div className="bg-[#23262b] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left Category Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCategoryDropdownOpen((prev) => !prev)}
              className="bg-[#f37021] hover:bg-[#df6116] text-white text-xs sm:text-[13px] font-bold px-4 py-2.5 rounded flex items-center gap-3 transition-colors"
            >
              <ListFilter className="w-4 h-4" />
              <span>Danh mục sản phẩm</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {categoryDropdownOpen && (
              <div className="absolute left-0 mt-1 w-60 bg-white text-[#222222] rounded shadow-xl border border-[#eeeeee] py-2 z-50">
                {(data.categoryCircles || []).map((cat) => (
                  <a
                    key={cat.id}
                    href="#san-sale"
                    onClick={() => {
                      setSelectedCategory(cat.filterKey);
                      setCategoryDropdownOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-2 text-xs font-medium hover:bg-[#fff4ed] hover:text-[#f37021] transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#999999]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Center Search Input */}
          <div className="flex-1 max-w-[500px] flex items-center bg-white rounded overflow-hidden p-0.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Nhập từ khóa tìm nồi chiên, chảo từ, máy sữa hạt..."
              className="w-full px-3.5 py-2 text-xs text-[#222222] focus:outline-none"
            />
            <button
              type="button"
              className="bg-[#f37021] hover:bg-[#df6116] text-white text-xs font-bold px-5 py-2 rounded transition-colors shrink-0"
            >
              Tìm kiếm
            </button>
          </div>

          {/* Right Hotline */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium">
            <Phone className="w-4 h-4 text-white fill-white" />
            <span className="text-white/90">Hotline:</span>
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="text-[#f37021] font-bold hover:underline"
            >
              {primaryPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Optional Instant Search Results Bar */}
      {filteredSearchProducts && (
        <div className="bg-[#fff7f2] border-b border-[#f37021]/20 py-4 px-4">
          <div className="max-w-[1220px] mx-auto">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-[#222222]">
                Kết quả tìm kiếm cho &ldquo;{searchQuery}&rdquo; (
                {filteredSearchProducts.length} sản phẩm)
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs text-[#f37021] font-semibold hover:underline"
              >
                Đóng tìm kiếm
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredSearchProducts.map((p) => renderProductCard(p))}
            </div>
          </div>
        </div>
      )}

      {/* 3. HERO BANNER + 2 SUB-BANNERS */}
      <section className="py-5 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 space-y-4">
          {/* Main Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#f37021] via-[#d9480f] to-[#191f6c] min-h-[300px] sm:min-h-[380px] flex items-center shadow-md">
            <img
              src={
                data.hero.images?.[heroSlide] || data.hero.backgroundImage
              }
              alt={data.hero.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-45"
            />
            <div className="relative z-10 w-full px-6 sm:px-14 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Featured Pan / Kitchen Preview */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[440px] aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border-2 border-white/25">
                  <img
                    src={data.hero.backgroundImage}
                    alt={data.hero.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#f37021] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    SIÊU SALE 11.11
                  </div>
                </div>
              </div>

              {/* Right Campaign Typography */}
              <div className="lg:col-span-6 text-center lg:text-right text-white">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-amber-200 font-bold mb-2">
                  {data.hero.eyebrow}
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl px-5 py-2 mb-3">
                  <span className="text-3xl sm:text-5xl font-black text-[#ff872b] tracking-tighter drop-shadow">
                    11.11
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-3">
                  {data.hero.title}
                </h1>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl lg:ml-auto mb-6 leading-relaxed">
                  {data.hero.subtitle}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
                  <a
                    href={data.hero.ctaLink || "#san-sale"}
                    className="bg-white text-[#d9480f] hover:bg-amber-50 font-extrabold text-xs sm:text-sm uppercase px-6 py-3 rounded-full shadow-lg transition-colors"
                  >
                    {data.hero.ctaText}
                  </a>
                  {data.hero.secondaryCtaText && (
                    <a
                      href={data.hero.secondaryCtaLink || "#danh-muc"}
                      className="border border-white/70 text-white hover:bg-white/15 font-bold text-xs sm:text-sm uppercase px-5 py-3 rounded-full transition-colors"
                    >
                      {data.hero.secondaryCtaText}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Slider Left/Right Buttons */}
            <button
              type="button"
              onClick={() =>
                setHeroSlide((prev) =>
                  prev === 0
                    ? (data.hero.images?.length || 1) - 1
                    : prev - 1
                )
              }
              aria-label="Slide trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/50 bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-colors z-20"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setHeroSlide(
                  (prev) => (prev + 1) % (data.hero.images?.length || 1)
                )
              }
              aria-label="Slide tiếp"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/50 bg-black/25 hover:bg-black/50 text-white flex items-center justify-center transition-colors z-20"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2 Sub-Hero Promotional Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(data.subHeroBanners || []).map((banner) => {
              const isMaroon = banner.theme === "maroon";
              return (
                <a
                  key={banner.id}
                  href="#san-sale"
                  className={`group relative rounded-xl overflow-hidden p-5 sm:p-6 flex items-center justify-between gap-4 min-h-[160px] shadow-xs ${
                    isMaroon
                      ? "bg-gradient-to-r from-[#d4a359] via-[#7c1d15] to-[#510f0a] text-white"
                      : "bg-gradient-to-r from-[#eab308] via-[#0284c7] to-[#1e3a8a] text-white"
                  }`}
                >
                  <div className="w-28 sm:w-36 aspect-square rounded-lg overflow-hidden shrink-0 bg-white/10 p-1.5">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 text-right">
                    <span className="inline-block bg-[#f37021] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded mb-1.5">
                      {banner.badge}
                    </span>
                    <h2 className="text-base sm:text-lg font-extrabold leading-snug mb-1">
                      {banner.title}
                    </h2>
                    <p className="text-[11px] text-white/85 mb-2 line-clamp-2">
                      {banner.subtitle}
                    </p>
                    <span className="inline-block bg-amber-300 text-[#111111] text-xs font-black px-3 py-1 rounded">
                      {banner.discountText}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 7 CIRCULAR CATEGORY ICONS ROW */}
      <section id="danh-muc" className="py-6 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {(data.categoryCircles || []).map((cat) => {
              const isSelected = selectedCategory === cat.filterKey;
              return (
                <a
                  key={cat.id}
                  href="#san-sale"
                  onClick={() => setSelectedCategory(cat.filterKey)}
                  className="group flex flex-col items-center text-center"
                >
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fcebe1] p-3 flex items-center justify-center mb-2.5 transition-all group-hover:scale-105 group-hover:shadow-md ${
                      isSelected ? "ring-2 ring-[#f37021]" : ""
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#333333] group-hover:text-[#f37021] transition-colors">
                    {cat.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="w-2 h-2 rounded-full bg-[#f37021]" />
            <span className="w-2 h-2 rounded-full bg-[#fcd5be]" />
          </div>
        </div>
      </section>

      {/* 5. SĂN SALE HÀNG NGÀY */}
      <section id="san-sale" className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="text-[#f37021]">SĂN SALE</span>{" "}
              <span className="text-[#222222]">HÀNG NGÀY</span>
            </h2>

            <div className="flex items-center gap-4">
              <div className="bg-[#f37021] text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>{data.flashSaleTimerText}</span>
              </div>
              <a
                href="#san-pham"
                className="text-xs font-bold uppercase text-[#444444] hover:text-[#f37021] flex items-center gap-1 underline underline-offset-4"
              >
                <span>XEM TẤT CẢ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {flashSaleProducts.map((product) => renderProductCard(product))}
          </div>
        </div>
      </section>

      {/* 6. 6-CARD BENTO PROMOTIONAL GRID */}
      <section className="py-6 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 space-y-5">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {data.bentoPromos?.slice(0, 3).map((card, idx) => (
              <div
                key={card.id}
                className={`${
                  idx === 1 ? "md:col-span-6" : "md:col-span-3"
                } relative rounded-xl overflow-hidden min-h-[210px] p-5 flex flex-col justify-between group border border-[#eeeeee]`}
                style={{ backgroundColor: card.accentBg }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
                <div className="relative z-10 max-w-[230px]">
                  <p className="text-[11px] text-[#666666] font-medium mb-1">
                    {card.eyebrow}
                  </p>
                  <h3 className="text-lg font-extrabold text-[#6b3423] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <a
                    href="#san-pham"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase text-[#0f5e59] hover:text-[#f37021] transition-colors"
                  >
                    <span>{card.ctaText}</span>
                    <span>»</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {data.bentoPromos?.slice(3, 6).map((card, idx) => (
              <div
                key={card.id}
                className={`${
                  idx === 0 ? "md:col-span-6" : "md:col-span-3"
                } relative rounded-xl overflow-hidden min-h-[210px] p-5 flex flex-col justify-between group border border-[#eeeeee]`}
                style={{ backgroundColor: card.accentBg }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
                <div className="relative z-10 max-w-[240px]">
                  <p className="text-[11px] text-[#666666] font-medium mb-1">
                    {card.eyebrow}
                  </p>
                  <h3 className="text-lg font-extrabold text-[#6b3423] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <a
                    href="#san-pham"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase text-[#0f5e59] hover:text-[#f37021] transition-colors"
                  >
                    <span>{card.ctaText}</span>
                    <span>»</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SẢN PHẨM MỚI NHẤT */}
      <section id="san-pham" className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="text-[#f37021]">SẢN PHẨM</span>{" "}
              <span className="text-[#222222]">MỚI NHẤT</span>
            </h2>
            <a
              href="#san-sale"
              className="text-xs font-bold uppercase text-[#444444] hover:text-[#f37021] flex items-center gap-1 underline underline-offset-4"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newestProducts.map((product) => renderProductCard(product))}
          </div>
        </div>
      </section>

      {/* 8. MÁY LÀM SỮA HẠT & NỒI HẤP ĐA NĂNG */}
      <section className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="text-[#222222]">MÁY LÀM</span>{" "}
              <span className="text-[#f37021]">SỮA HẠT</span>
            </h2>
            <a
              href="#san-pham"
              className="text-xs font-bold uppercase text-[#444444] hover:text-[#f37021] flex items-center gap-1 underline underline-offset-4"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Large Feature Banner */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden bg-[#fbeae0] min-h-[340px] p-6 sm:p-8 flex flex-col items-center text-center justify-between border border-[#f5d8c8]">
              <img
                src={data.steamerShowcaseBanner.image}
                alt={data.steamerShowcaseBanner.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35"
              />
              <div className="relative z-10 max-w-md pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#f37021] mb-1">
                  {data.steamerShowcaseBanner.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#222222] mb-4">
                  {data.steamerShowcaseBanner.title}
                </h3>
                <a
                  href="#san-sale"
                  className="inline-block bg-[#f37021] hover:bg-[#df6116] text-white text-xs font-bold uppercase px-6 py-2.5 rounded shadow transition-colors"
                >
                  {data.steamerShowcaseBanner.ctaText}
                </a>
              </div>
              <div className="relative z-10 w-full max-w-[360px] h-44 rounded-lg overflow-hidden shadow-md mt-4">
                <img
                  src={data.steamerShowcaseBanner.image}
                  alt={data.steamerShowcaseBanner.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right 2 Product Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(steamerProducts.length > 0
                ? steamerProducts
                : allProducts.slice(4, 6)
              ).map((product) => renderProductCard(product))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. NỒI CHIÊN KHÔNG DẦU */}
      <section className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="text-[#f37021]">NỒI CHIÊN</span>{" "}
              <span className="text-[#222222]">KHÔNG DẦU</span>
            </h2>
            <a
              href="#san-pham"
              className="text-xs font-bold uppercase text-[#444444] hover:text-[#f37021] flex items-center gap-1 underline underline-offset-4"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 2 Product Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {airFryerProducts.map((product) => renderProductCard(product))}
            </div>

            {/* Right Large Feature Banner */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden bg-[#f4f5f7] min-h-[340px] p-6 sm:p-8 flex flex-col items-center text-center justify-between border border-[#e6e8ec]">
              <div className="relative z-10 max-w-md pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#f37021] mb-1">
                  {data.airFryerShowcaseBanner.eyebrow}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#222222] mb-4">
                  {data.airFryerShowcaseBanner.title}
                </h3>
                <a
                  href="#san-sale"
                  className="inline-block bg-[#f37021] hover:bg-[#df6116] text-white text-xs font-bold uppercase px-6 py-2.5 rounded shadow transition-colors"
                >
                  {data.airFryerShowcaseBanner.ctaText}
                </a>
              </div>
              <div className="relative z-10 w-full max-w-[380px] h-44 rounded-lg overflow-hidden shadow-md mt-4">
                <img
                  src={data.airFryerShowcaseBanner.image}
                  alt={data.airFryerShowcaseBanner.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE KITCHEN SHOWROOM HOTSPOT BANNER */}
      <section className="py-6 bg-white">
        <div className="relative w-full max-w-[1440px] mx-auto h-[320px] sm:h-[420px] overflow-hidden bg-[#e5e5e5]">
          <img
            src={data.kitchenHotspotScene.backgroundImage}
            alt="Không gian bếp thực tế"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15" />

          {/* Interactive Hotspots */}
          {(data.kitchenHotspotScene.hotspots || []).map((spot) => {
            const isActive = activeHotspotId === spot.id;
            return (
              <div
                key={spot.id}
                style={{
                  top: `${spot.topPercent}%`,
                  left: `${spot.leftPercent}%`
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspotId(spot.id)}
                  aria-label={spot.title}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                    isActive
                      ? "bg-[#f37021] text-white scale-110 ring-4 ring-white/80"
                      : "bg-white text-[#f37021] hover:scale-110 shadow-md"
                  }`}
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>

                {isActive && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl px-4 py-2.5 min-w-[190px] text-center border border-[#eeeeee]">
                    <p className="text-xs font-bold text-[#222222] mb-0.5">
                      {spot.title}
                    </p>
                    <p className="text-sm font-extrabold text-[#f37021]">
                      {spot.price}
                    </p>
                    <div className="w-3 h-3 bg-white rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-[#eeeeee]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. SẢN PHẨM BÁN CHẠY */}
      <section className="py-8 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="text-[#f37021]">SẢN PHẨM</span>{" "}
              <span className="text-[#222222]">BÁN CHẠY</span>
            </h2>
            <a
              href="#san-sale"
              className="text-xs font-bold uppercase text-[#444444] hover:text-[#f37021] flex items-center gap-1 underline underline-offset-4"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestSellerProducts.map((product) => renderProductCard(product))}
          </div>
        </div>
      </section>

      {/* 12. 2-COLUMN FEATURE BANNERS */}
      <section className="py-6 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(data.dualBottomBanners || []).map((banner) => (
              <div
                key={banner.id}
                className="group relative rounded-xl overflow-hidden min-h-[220px] bg-[#ececec] p-6 sm:p-8 flex items-start justify-between"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
                <div className="relative z-10 max-w-[270px]">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#222222] leading-snug mb-4">
                    {banner.title}
                  </h3>
                  <a
                    href="#san-pham"
                    className="inline-block bg-[#f37021] hover:bg-[#df6116] text-white text-xs font-bold uppercase px-5 py-2.5 rounded transition-colors"
                  >
                    {banner.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. DARK CHARCOAL QUALITY & STATS BANNER */}
      <section
        id="gioi-thieu"
        className="py-14 sm:py-16 bg-[#24272c] text-white mt-6"
      >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase mb-3">
            <span className="text-[#f37021]">DỤNG CỤ</span> NẤU ĂN
            <br />
            CHẤT LƯỢNG
          </h2>
          <p className="text-xs sm:text-sm text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            {data.qualityDescription}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
            {(data.stats || []).map((st, idx) => {
              const IconComp =
                idx === 0
                  ? Users
                  : idx === 1
                  ? Award
                  : idx === 2
                  ? PackageCheck
                  : Store;
              return (
                <div
                  key={st.id}
                  className="flex items-center justify-center gap-3.5 text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#f37021] shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {st.number}
                    </div>
                    <div className="text-xs text-white/75">{st.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. ĐÁNH GIÁ TỪ KHÁCH HÀNG */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-8">
            <span className="text-[#f37021]">ĐÁNH GIÁ</span>{" "}
            <span className="text-[#222222]">TỪ KHÁCH HÀNG</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.testimonials || []).map((item) => (
              <div key={item.id} className="flex flex-col">
                {/* Speech Bubble */}
                <div className="relative bg-[#ededed] rounded-xl p-6 text-xs sm:text-[13px] text-[#444444] leading-relaxed mb-5">
                  <p>{item.content}</p>
                  <div className="w-4 h-4 bg-[#ededed] rotate-45 absolute -bottom-2 left-10" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pl-4">
                  <img
                    src={
                      item.avatar ||
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    }
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#f37021]"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#222222]">
                      {item.author}
                    </h3>
                    <p className="text-xs text-[#888888]">
                      {item.role || "Khách hàng"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. TIN TỨC MỚI NHẤT */}
      <section id="tin-tuc" className="py-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              <span className="text-[#f37021]">TIN TỨC</span>{" "}
              <span className="text-[#222222]">MỚI NHẤT</span>
            </h2>
            <a
              href="#lien-he"
              className="text-xs font-bold uppercase text-[#444444] hover:text-[#f37021] flex items-center gap-1 underline underline-offset-4"
            >
              <span>XEM TẤT CẢ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#f5f5f5] mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#f37021] block mb-1">
                  {post.category || "Kiến Thức"}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#222222] group-hover:text-[#f37021] transition-colors line-clamp-2 mb-1.5">
                  {post.title}
                </h3>
                <p className="text-xs text-[#777777] line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 16. BOTTOM APPLIANCE SHOWCASE + 15% NEWSLETTER BLOCK */}
      <section className="py-10 bg-white">
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Appliance Group Image */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden bg-[#f8f8f8] p-4">
                <img
                  src={data.newsletterPromo.image}
                  alt={data.newsletterPromo.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Dashed Orange Promo Box */}
            <div className="lg:col-span-7">
              <div className="border-2 border-dashed border-[#f37021] rounded-2xl p-6 sm:p-8 bg-[#fffaf7] grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 text-center sm:border-r border-[#f37021]/25 sm:pr-4">
                  <p className="text-xs italic text-[#555555] mb-1">
                    {data.newsletterPromo.eyebrow}
                  </p>
                  <h3 className="text-sm font-extrabold uppercase text-[#222222] mb-1">
                    {data.newsletterPromo.title}
                  </h3>
                  <div className="text-4xl sm:text-5xl font-black text-[#f37021]">
                    {data.newsletterPromo.discount}
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <h4 className="text-lg font-extrabold text-[#f37021] uppercase text-center sm:text-left mb-3">
                    {data.newsletterPromo.heading}
                  </h4>
                  {newsletterDone ? (
                    <div className="bg-white border border-[#f37021] rounded-lg p-3 text-xs text-[#222222] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                      <span>
                        Chúc mừng! Mã ưu đãi giảm 15% đã được gửi tới email của
                        bạn.
                      </span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (newsletterEmail.trim()) setNewsletterDone(true);
                      }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Nhập Email nhận mã ưu đãi..."
                        className="flex-1 bg-white border border-[#dddddd] rounded px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#f37021]"
                      />
                      <button
                        type="submit"
                        className="bg-[#f37021] hover:bg-[#df6116] text-white text-xs font-bold px-5 py-2.5 rounded transition-colors shrink-0"
                      >
                        Đăng Ký
                      </button>
                    </form>
                  )}
                  <p className="text-[11px] text-[#777777] text-center sm:text-left">
                    {data.newsletterPromo.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. FOOTER (#fbf3ec warm cream background) */}
      <footer
        id="lien-he"
        className="bg-[#fbf3ec] pt-12 pb-6 border-t border-[#f3e2d3] text-xs text-[#555555]"
      >
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#eed8c5]">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-3 space-y-2.5">
              <div className="text-2xl font-black text-[#f37021] uppercase tracking-tight mb-2">
                {brandName}
              </div>
              <p className="flex items-start gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#f37021] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#222222]">Địa chỉ:</strong>{" "}
                  {data.business.address}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f37021] shrink-0" />
                <span>
                  <strong className="text-[#222222]">Email:</strong>{" "}
                  {primaryEmail}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f37021] shrink-0" />
                <span>
                  <strong className="text-[#222222]">Hotline:</strong>{" "}
                  <a
                    href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                    className="font-bold text-[#222222] hover:text-[#f37021]"
                  >
                    {primaryPhone}
                  </a>
                </span>
              </p>
            </div>

            {/* Col 2: Liên Kết */}
            <div className="lg:col-span-2 space-y-2">
              <h3 className="text-sm font-bold text-[#222222] mb-2">
                Liên Kết
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#f37021]">
                    Giới Thiệu
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#f37021]">
                    Sản Phẩm
                  </a>
                </li>
                <li>
                  <a href="#tin-tuc" className="hover:text-[#f37021]">
                    Tin Tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#f37021]">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Danh Mục Sản Phẩm */}
            <div className="lg:col-span-2 space-y-2">
              <h3 className="text-sm font-bold text-[#222222] mb-2">
                Danh Mục Sản Phẩm
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <a href="#san-sale" className="hover:text-[#f37021]">
                    Đồ gia dụng
                  </a>
                </li>
                <li>
                  <a href="#san-sale" className="hover:text-[#f37021]">
                    Ấm đa năng cao cấp
                  </a>
                </li>
                <li>
                  <a href="#san-sale" className="hover:text-[#f37021]">
                    Lò nướng đối lưu
                  </a>
                </li>
                <li>
                  <a href="#san-sale" className="hover:text-[#f37021]">
                    Máy làm sữa hạt
                  </a>
                </li>
                <li>
                  <a href="#san-sale" className="hover:text-[#f37021]">
                    Máy nhồi bột
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Chính Sách */}
            <div className="lg:col-span-2 space-y-2">
              <h3 className="text-sm font-bold text-[#222222] mb-2">
                Chính Sách
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <a href="#lien-he" className="hover:text-[#f37021]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#f37021]">
                    Chính sách giao hàng
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#f37021]">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#f37021]">
                    Chính sách đại lý
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Fanpage */}
            <div className="lg:col-span-3 space-y-2">
              <h3 className="text-sm font-bold text-[#222222] mb-2">
                Fanpage
              </h3>
              <div className="relative rounded-lg overflow-hidden h-28 bg-[#1e293b] text-white p-3 flex flex-col justify-between">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
                  alt={brandName}
                  className="absolute inset-0 w-full h-full object-cover opacity-45"
                />
                <div className="relative z-10">
                  <p className="text-xs font-extrabold">{brandName} Official</p>
                  <p className="text-[10px] text-white/80">
                    28.500 người theo dõi
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <a
                    href="#lien-he"
                    className="bg-white text-[#222222] text-[10px] font-bold px-2.5 py-1 rounded shadow"
                  >
                    Theo dõi Trang
                  </a>
                  <a
                    href="#lien-he"
                    className="bg-[#f37021] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow"
                  >
                    Chia sẻ
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Service Policy Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-7 border-b border-[#eed8c5]">
            {(data.servicePolicies || []).map((pol, idx) => {
              const IconComp =
                idx === 0
                  ? Truck
                  : idx === 1
                  ? Headphones
                  : idx === 2
                  ? ShieldCheck
                  : RotateCcw;
              return (
                <div key={pol.id} className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#f37021] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#222222]">
                      {pol.title}
                    </h4>
                    <p className="text-[11px] text-[#777777]">{pol.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="pt-5 text-center text-[11px] text-[#777777]">
            © Thiết kế và lập trình bởi{" "}
            <span className="font-bold text-[#222222]">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-white border border-[#f37021] text-[#f37021] hover:bg-[#f37021] hover:text-white shadow-md flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#f8f8f8] aspect-square relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.discountBadge && (
                  <span className="absolute top-3 left-3 bg-[#f37021] text-white text-xs font-bold px-3 py-1 rounded">
                    {selectedProduct.discountBadge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase text-[#f37021]">
                      {selectedProduct.categoryName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(null)}
                      className="text-[#888888] hover:text-[#222222]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-[#222222] mb-2">
                    {selectedProduct.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#f37021]">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.oldPrice && (
                      <span className="text-xs text-[#999999] line-through">
                        {selectedProduct.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="space-y-1 text-xs text-[#555555] border-y border-[#eeeeee] py-3 mb-4">
                    <p>
                      <strong>Thông số:</strong> {selectedProduct.dimensions}
                    </p>
                    <p>
                      <strong>Chất liệu:</strong> {selectedProduct.material}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedProduct.warranty}
                    </p>
                  </div>
                </div>

                {orderSuccess ? (
                  <div className="bg-[#fff4ed] border border-[#f37021] rounded p-3 text-xs text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f37021] shrink-0" />
                    <span>
                      Đã thêm <strong>{selectedProduct.title}</strong> vào giỏ
                      hàng!
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setOrderSuccess(true);
                      }}
                      className="flex-1 bg-[#f37021] hover:bg-[#df6116] text-white text-xs font-bold uppercase py-3 rounded transition-colors"
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="border border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white text-xs font-bold uppercase py-3 px-4 rounded transition-colors"
                    >
                      Gọi ngay
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
