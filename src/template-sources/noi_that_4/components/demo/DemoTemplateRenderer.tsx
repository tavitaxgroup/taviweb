"use client";

import React, { useState } from "react";
import {
  User,
  LayoutGrid,
  ShoppingCart,
  Heart,
  RefreshCw,
  Search,
  MapPin,
  ShieldCheck,
  Calendar,
  Coins,
  Play,
  Share2,
  Clock,
  FileText,
  CheckCircle2,
  X,
  Menu,
  ChevronUp,
  Sparkles,
  Phone,
  Mail
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat4DefaultData,
  type NoiThat4TemplateData,
  type NoiThat4ProductItem
} from "@/template-sources/noi_that_4/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat4TemplateData = adaptClonedTemplateData(
    noiThat4DefaultData,
    incomingData
  );

  const [activeTab, setActiveTab] = useState<string>("tat-ca");
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [compareCount, setCompareCount] = useState<number>(0);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<NoiThat4ProductItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubmitted, setNewsletterSubmitted] =
    useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(true);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";

  const brandName = data.business.name || "mona decor";
  const brandParts = brandName.trim().split(/\s+/);
  const firstBrandWord = brandParts[0] || "mona";
  const restBrandWords =
    brandParts.length > 1 ? brandParts.slice(1).join(" ") : "";

  const toggleWishlist = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = (data.products || []).filter((item) => {
    const matchesTab =
      activeTab === "tat-ca" || item.tabCategory === activeTab;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const wideCategory =
    data.popularCategories?.find((c) => c.layout === "wide") ||
    data.popularCategories?.[0];
  const smallCategories =
    data.popularCategories?.filter((c) => c.layout === "small") ||
    data.popularCategories?.slice(1, 3) ||
    [];
  const tallCategory =
    data.popularCategories?.find((c) => c.layout === "tall") ||
    data.popularCategories?.[3];

  const renderFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case "map":
        return <MapPin className="w-7 h-7 text-[#5bc0de] stroke-[1.5]" />;
      case "shield":
        return <ShieldCheck className="w-7 h-7 text-[#5bc0de] stroke-[1.5]" />;
      case "calendar":
        return <Calendar className="w-7 h-7 text-[#5bc0de] stroke-[1.5]" />;
      default:
        return <Coins className="w-7 h-7 text-[#5bc0de] stroke-[1.5]" />;
    }
  };

  const promoBannerText = (
    data.midPromoBanner ||
    `GIẢM GIÁ LÊN 20% CHO ĐƠN HÀNG ĐẦU TIÊN KHI MUA TẠI ${brandName.toUpperCase()}`
  ).replace(/MONA\s*MEDIA|MONA\s*DECOR/gi, brandName);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#68b42e] selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="border-b border-[#efefef] bg-white text-[12px] text-[#666666]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between">
          <p className="truncate">{data.topBarPromo}</p>
          <button
            type="button"
            onClick={() => setAuthModalOpen(true)}
            className="flex items-center gap-1.5 hover:text-[#68b42e] transition-colors shrink-0 ml-4"
          >
            <User className="w-3.5 h-3.5 text-[#888888]" />
            <span>Đăng nhập / Đăng ký</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#f2f2f2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
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
              <span className="inline-flex items-baseline">
                <span className="text-[#68b42e] lowercase font-extrabold">
                  {firstBrandWord}
                </span>
                {restBrandWords && (
                  <span className="text-[#222222] lowercase font-extrabold ml-1">
                    {restBrandWords}
                  </span>
                )}
                <sup className="text-[9px] font-bold text-[#555555] ml-0.5 -top-3">
                  TM
                </sup>
              </span>
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#333333]">
            <a
              href="#trang-chu"
              className="text-[#222222] border-b-2 border-[#222222] pb-1 font-semibold"
            >
              Trang chủ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#68b42e] transition-colors pb-1"
            >
              Giới thiệu
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#68b42e] transition-colors pb-1"
            >
              Sản phẩm
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#68b42e] transition-colors pb-1"
            >
              Tin tức
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#68b42e] transition-colors pb-1"
            >
              Liên hệ
            </a>
          </nav>

          {/* Header Action Icons */}
          <div className="flex items-center gap-3.5 sm:gap-4 text-[#444444]">
            <a
              href="#danh-muc"
              title="Danh mục sản phẩm"
              className="hover:text-[#68b42e] transition-colors hidden sm:inline-flex"
            >
              <LayoutGrid className="w-5 h-5 stroke-[1.6]" />
            </a>

            <button
              type="button"
              onClick={() =>
                setSelectedProduct(data.products?.[0] || null)
              }
              title="Giỏ hàng"
              className="relative hover:text-[#68b42e] transition-colors"
            >
              <ShoppingCart className="w-5 h-5 stroke-[1.6]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#68b42e] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                if (data.products?.[0]) {
                  toggleWishlist(data.products[0].id);
                }
              }}
              title="Sản phẩm yêu thích"
              className="relative hover:text-[#68b42e] transition-colors"
            >
              <Heart className="w-5 h-5 stroke-[1.6]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#68b42e] text-white text-[10px] font-bold flex items-center justify-center">
                {wishlistIds.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCompareCount((c) => (c + 1) % 5)}
              title="So sánh sản phẩm"
              className="relative hover:text-[#68b42e] transition-colors hidden sm:inline-flex"
            >
              <RefreshCw className="w-4 h-4 stroke-[1.6]" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#68b42e] text-white text-[10px] font-bold flex items-center justify-center">
                {compareCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              title="Tìm kiếm"
              className="hover:text-[#68b42e] transition-colors"
            >
              <Search className="w-5 h-5 stroke-[1.6]" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1.5 text-[#333333] hover:text-[#68b42e]"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#eeeeee] bg-[#fafafa] py-3 px-4">
            <div className="max-w-[680px] mx-auto flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm kệ tivi, sofa Bắc Âu, bàn ghế ăn gỗ tự nhiên..."
                className="flex-1 bg-white border border-[#dddddd] px-4 py-2 text-sm focus:outline-none focus:border-[#68b42e]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-3 py-2 text-xs text-[#666666] hover:text-[#222222]"
                >
                  Xóa
                </button>
              )}
              <a
                href="#san-pham"
                onClick={() => setSearchOpen(false)}
                className="bg-[#68b42e] text-white px-5 py-2 text-sm font-semibold hover:bg-[#5aa025] transition-colors"
              >
                Tìm kiếm
              </a>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#eeeeee] bg-white px-6 py-4 space-y-3 text-sm font-medium">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-[#68b42e] font-semibold"
            >
              Trang chủ
            </a>
            <a
              href="#danh-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#68b42e]"
            >
              Danh mục phổ biến
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#68b42e]"
            >
              Sản phẩm mới nhất
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#68b42e]"
            >
              Giới thiệu
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#68b42e]"
            >
              Tin tức nổi bật
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 hover:text-[#68b42e]"
            >
              Liên hệ
            </a>
          </div>
        )}
      </header>

      {/* 3. FULL-WIDTH SCANDINAVIAN HERO BANNER */}
      <section
        id="trang-chu"
        className="relative w-full overflow-hidden bg-[#eaeceb]"
      >
        <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px]">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

          {/* Clean Floating Hero Card */}
          <div className="absolute inset-0 max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center">
            <div className="max-w-lg bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-xl border-l-4 border-[#68b42e]">
              {data.hero.eyebrow && (
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#68b42e] font-bold mb-2">
                  {data.hero.eyebrow}
                </p>
              )}
              <h1 className="text-2xl sm:text-4xl font-bold text-[#222222] leading-tight mb-3">
                {data.hero.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5">
                {data.hero.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={data.hero.ctaLink || "#san-pham"}
                  className="inline-flex items-center gap-2 bg-[#68b42e] hover:bg-[#589c24] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                >
                  {data.hero.ctaText}
                </a>
                {data.hero.secondaryCtaText && (
                  <a
                    href={data.hero.secondaryCtaLink || "#gioi-thieu"}
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#222222] border border-[#dddddd] text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3 transition-colors"
                  >
                    {data.hero.secondaryCtaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR CATEGORIES BENTO GRID ("Danh mục phổ biến") */}
      <section id="danh-muc" className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#222222] mb-1.5">
              Danh mục phổ biến
            </h2>
            <p className="text-[13px] italic text-[#888888] font-serif">
              {data.popularCategoriesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: 1 Wide Top Card + 2 Square Bottom Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {wideCategory && (
                <a
                  href="#san-pham"
                  onClick={() => setActiveTab(wideCategory.filterKey)}
                  className="group relative h-[240px] sm:h-[260px] bg-[#f6f6f6] overflow-hidden block"
                >
                  <img
                    src={wideCategory.image}
                    alt={wideCategory.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-5 left-5 bg-white px-6 py-2.5 shadow-sm group-hover:bg-[#68b42e] group-hover:text-white transition-colors">
                    <span className="text-sm font-bold tracking-wide">
                      {wideCategory.name}
                    </span>
                  </div>
                </a>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {smallCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href="#san-pham"
                    onClick={() => setActiveTab(cat.filterKey)}
                    className="group relative h-[220px] sm:h-[240px] bg-[#f6f6f6] overflow-hidden block"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-white px-5 py-2 shadow-sm group-hover:bg-[#68b42e] group-hover:text-white transition-colors">
                      <span className="text-xs sm:text-sm font-bold">
                        {cat.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: 1 Full-Height Feature Card */}
            {tallCategory && (
              <div className="lg:col-span-6">
                <a
                  href="#san-pham"
                  onClick={() => setActiveTab(tallCategory.filterKey)}
                  className="group relative h-[380px] lg:h-[524px] bg-[#f6f6f6] overflow-hidden block"
                >
                  <img
                    src={tallCategory.image}
                    alt={tallCategory.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-6 left-6 bg-white px-7 py-2.5 shadow-sm group-hover:bg-[#68b42e] group-hover:text-white transition-colors">
                    <span className="text-sm font-bold tracking-wide">
                      {tallCategory.name}
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. NEWEST PRODUCTS ("Sản phẩm mới nhất") */}
      <section id="san-pham" className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-7">
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#222222] mb-5">
              Sản phẩm mới nhất
            </h2>

            {/* Filter Tabs */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {(data.productTabs || []).map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-1.5 text-xs sm:text-[13px] font-medium transition-all border ${
                      isActive
                        ? "border-[#68b42e] text-[#68b42e] bg-white font-semibold"
                        : "border-transparent text-[#666666] hover:text-[#222222]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4x2 Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    setSelectedProduct(product);
                    setOrderSubmitted(false);
                  }}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Product Studio Thumbnail */}
                  <div className="relative aspect-[4/3] bg-[#fafafa] border border-[#f1f1f1] overflow-hidden mb-3.5 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top-left green badges */}
                    <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
                      {product.popularBadge && (
                        <span className="bg-[#68b42e] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                          PHỔ BIẾN
                        </span>
                      )}
                      {product.discountBadge && (
                        <span className="bg-[#68b42e] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          {product.discountBadge}
                        </span>
                      )}
                    </div>

                    {/* Top-right wishlist heart */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(product.id, e)}
                      aria-label="Yêu thích"
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#999999] hover:text-[#68b42e] shadow-sm transition-colors"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isWishlisted
                            ? "fill-[#68b42e] text-[#68b42e]"
                            : "text-[#888888]"
                        }`}
                      />
                    </button>

                    {/* Quick action bar on hover */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#222222]/90 text-white py-2 px-3 flex items-center justify-between text-xs">
                      <span className="font-medium">Xem chi tiết</span>
                      <span className="text-[#68b42e] font-bold">+ Giỏ hàng</span>
                    </div>
                  </div>

                  {/* Product Title & Price */}
                  <h3 className="text-[13.5px] font-medium text-[#333333] group-hover:text-[#68b42e] transition-colors line-clamp-1 mb-1">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[13.5px]">
                    {product.oldPrice && (
                      <span className="text-[#999999] line-through text-xs">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="font-bold text-[#222222]">
                      {product.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH GREEN PROMO BANNER */}
      <section className="bg-[#68b42e] py-4 px-4 text-center text-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs sm:text-[13px] font-bold tracking-wide uppercase">
            {promoBannerText}{" "}
            <a
              href="#san-pham"
              className="underline underline-offset-4 hover:opacity-90 ml-1"
            >
              {brandName}
            </a>
          </p>
        </div>
      </section>

      {/* 7. ABOUT US + VIDEO SECTION ("Giới thiệu") */}
      <section id="gioi-thieu" className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Video Player Box */}
            <div className="lg:col-span-6">
              <div
                onClick={() => setVideoModalOpen(true)}
                className="group relative aspect-[16/10] bg-[#1a1a1a] overflow-hidden cursor-pointer shadow-md"
              >
                <img
                  src={data.aboutVideoCover}
                  alt={data.aboutVideoTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                {/* Top Video Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-8 h-8 rounded-full bg-[#68b42e] text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                      {firstBrandWord.slice(0, 4)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium truncate drop-shadow">
                      {data.aboutVideoTitle}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-[11px] text-white/90 shrink-0">
                    <span className="flex flex-col items-center gap-0.5">
                      <Clock className="w-4 h-4" />
                      <span>Xem sau</span>
                    </span>
                    <span className="flex flex-col items-center gap-0.5">
                      <Share2 className="w-4 h-4" />
                      <span>Chia sẻ</span>
                    </span>
                  </div>
                </div>

                {/* Center Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-11 rounded-xl bg-[#ff0000] group-hover:bg-[#dc2626] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right About Description + 4 Feature Icons */}
            <div className="lg:col-span-6 lg:pl-4">
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#222222] mb-4">
                {data.business.aboutTitle || "Giới thiệu"}
              </h2>
              <div className="space-y-3 text-[13.5px] text-[#666666] leading-relaxed mb-8">
                {(data.business.aboutText || []).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(data.aboutFeatures || []).map((feat) => (
                  <div key={feat.id} className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-[#f0f9ff] flex items-center justify-center shrink-0">
                      {renderFeatureIcon(feat.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#222222] mb-0.5">
                        {feat.title}
                      </h3>
                      <p className="text-xs italic text-[#888888]">
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FEATURED NEWS ("Tin tức nổi bật") */}
      <section id="tin-tuc" className="py-14 sm:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-[28px] font-bold text-[#222222] mb-1.5">
              Tin tức nổi bật
            </h2>
            <p className="text-[13px] italic text-[#888888] font-serif">
              {data.newsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-[#f5f5f5] mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#999999] font-semibold mb-1">
                  {post.category || "TẠP CHÍ NỘI THẤT"}
                </p>
                <h3 className="text-base font-bold text-[#222222] group-hover:text-[#68b42e] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-[#888888]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>|</span>
                  <a
                    href="#lien-he"
                    className="inline-flex items-center gap-1 hover:text-[#68b42e] transition-colors"
                  >
                    <FileText className="w-3 h-3" />
                    Đọc thêm
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARTNER / BRAND LOGOS STRIP */}
      <section className="py-12 border-t border-[#f0f0f0] bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {(data.clients || []).map((client, idx) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center py-3 px-4 text-center opacity-75 hover:opacity-100 transition-opacity"
              >
                <div className="w-8 h-8 rounded-full border border-[#cccccc] flex items-center justify-center text-[11px] font-serif font-bold text-[#444444] mb-1">
                  0{idx + 1}
                </div>
                <span className="text-xs font-extrabold tracking-widest uppercase text-[#333333]">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer id="lien-he" className="bg-[#f8f8f8] pt-14 pb-8 border-t border-[#eeeeee] text-[13px] text-[#666666]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-4 space-y-3">
              <a
                href="#trang-chu"
                className="inline-flex items-baseline text-2xl font-black tracking-tight mb-2"
              >
                <span className="text-[#68b42e] lowercase font-extrabold">
                  {firstBrandWord}
                </span>
                {restBrandWords && (
                  <span className="text-[#222222] lowercase font-extrabold ml-1">
                    {restBrandWords}
                  </span>
                )}
                <sup className="text-[9px] font-bold text-[#555555] ml-0.5 -top-3">
                  TM
                </sup>
              </a>
              <p className="leading-relaxed">{data.business.address}</p>
              <p>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#68b42e] transition-colors"
                >
                  {primaryPhone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hover:text-[#68b42e] transition-colors"
                >
                  {primaryEmail}
                </a>
              </p>
              <div className="flex items-center gap-4 pt-2 text-[#555555]">
                <a
                  href="#lien-he"
                  aria-label="X"
                  className="hover:text-[#68b42e] font-bold"
                >
                  𝕏
                </a>
                <a
                  href="#lien-he"
                  aria-label="Facebook"
                  className="hover:text-[#68b42e] font-bold"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  aria-label="Pinterest"
                  className="hover:text-[#68b42e] font-bold"
                >
                  P
                </a>
                <a
                  href="#lien-he"
                  aria-label="Instagram"
                  className="hover:text-[#68b42e] font-bold"
                >
                  IG
                </a>
              </div>
            </div>

            {/* Col 2: Liên kết */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-sm font-bold text-[#222222] mb-3">
                Liên kết
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                    Thông tin giao hàng
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                    Chính sách giao hàng
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#68b42e]">
                    Thanh toán an toàn
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#68b42e]">
                    Chính sách hoàn trả
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Hỗ trợ */}
            <div className="lg:col-span-2 space-y-2.5">
              <h3 className="text-sm font-bold text-[#222222] mb-3">Hỗ trợ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#lien-he" className="hover:text-[#68b42e]">
                    Chăm sóc khách hàng
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                    Quy định bảo hành
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                    Điều khoản & Điều kiện
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#68b42e]">
                    Sản phẩm bán chạy
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                    Xưởng sản xuất nội thất
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Bản tin */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-sm font-bold text-[#222222] mb-3">
                Bản tin
              </h3>
              <p className="text-xs leading-relaxed text-[#666666]">
                Nhận thông tin cập nhật mới nhất về bộ sưu tập nội thất và các
                chương trình ưu đãi đặc biệt!
              </p>
              {newsletterSubmitted ? (
                <div className="flex items-center gap-2 text-[#68b42e] font-semibold text-xs bg-white p-3 border border-[#68b42e]/30">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Cảm ơn bạn đã đăng ký nhận bản tin ưu đãi 20% từ {brandName}!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) {
                      setNewsletterSubmitted(true);
                    }
                  }}
                  className="space-y-2.5"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Nhập địa chỉ Email..."
                    className="w-full bg-white border border-[#e2e2e2] px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#68b42e]"
                  />
                  <button
                    type="submit"
                    className="bg-[#68b42e] hover:bg-[#599e24] text-white text-xs font-bold uppercase px-6 py-2.5 rounded-sm transition-colors"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-[#e9e9e9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <span className="font-bold text-[#333333]">{brandName}</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                Điều khoản & Điều kiện
              </a>
              <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                Chính sách bảo mật
              </a>
              <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                Chính sách giao hàng
              </a>
              <a href="#gioi-thieu" className="hover:text-[#68b42e]">
                Giới thiệu
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING RECENT PURCHASE SOCIAL PROOF TOAST (Bottom-left like reference) */}
      {showToast && data.recentOrderToast && (
        <div className="fixed bottom-4 left-4 z-40 max-w-[300px] bg-white border border-[#e6e6e6] shadow-lg rounded-md p-2.5 flex items-center gap-3">
          <img
            src={data.recentOrderToast.image}
            alt={data.recentOrderToast.productName}
            className="w-12 h-12 rounded object-cover shrink-0"
          />
          <div className="min-w-0 flex-1 pr-4">
            <p className="text-[11px] text-[#666666] truncate">
              {data.recentOrderToast.customerName}
            </p>
            <p className="text-xs font-bold text-[#222222] line-clamp-1">
              {data.recentOrderToast.productName}
            </p>
            <div className="flex items-center gap-2 text-[10px] text-[#888888] mt-0.5">
              <span>{data.recentOrderToast.timeAgo}</span>
              <span className="inline-flex items-center gap-0.5 text-[#68b42e] font-medium">
                <CheckCircle2 className="w-3 h-3" />
                {data.recentOrderToast.verifiedText}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            aria-label="Đóng thông báo"
            className="absolute top-1.5 right-1.5 text-[#999999] hover:text-[#222222]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* BACK TO TOP BUTTON */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-white border border-[#dddddd] shadow-md flex items-center justify-center text-[#555555] hover:bg-[#68b42e] hover:text-white hover:border-[#68b42e] transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* PRODUCT QUICK-VIEW & ORDER MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl border border-[#eeeeee]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative bg-[#f8f8f8] aspect-square">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.discountBadge && (
                  <span className="absolute top-3 left-3 bg-[#68b42e] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {selectedProduct.discountBadge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#68b42e]">
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
                  <h3 className="text-lg font-bold text-[#222222] mb-2">
                    {selectedProduct.title}
                  </h3>
                  <div className="flex items-baseline gap-2.5 mb-4">
                    <span className="text-xl font-extrabold text-[#68b42e]">
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
                  <div className="space-y-1.5 text-xs text-[#555555] border-t border-b border-[#eeeeee] py-3 mb-4">
                    <p>
                      <strong className="text-[#222222]">Kích thước:</strong>{" "}
                      {selectedProduct.dimensions}
                    </p>
                    <p>
                      <strong className="text-[#222222]">Chất liệu:</strong>{" "}
                      {selectedProduct.material}
                    </p>
                    <p>
                      <strong className="text-[#222222]">Bảo hành:</strong>{" "}
                      {selectedProduct.warranty}
                    </p>
                  </div>
                </div>

                {orderSubmitted ? (
                  <div className="bg-[#f2faeb] border border-[#68b42e]/40 p-3 text-xs text-[#3b6e14] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#68b42e]" />
                    <span>
                      Đã thêm <strong>{selectedProduct.title}</strong> vào giỏ
                      hàng! Chuyên viên sẽ liên hệ xác nhận giao lắp.
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setOrderSubmitted(true);
                      }}
                      className="flex-1 bg-[#68b42e] hover:bg-[#579a24] text-white text-xs font-bold uppercase py-3 px-4 transition-colors"
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="border border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white text-xs font-bold uppercase py-3 px-4 transition-colors"
                    >
                      Gọi tư vấn
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO INTRO MODAL */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-xl w-full p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#eeeeee]">
              <h3 className="text-base font-bold text-[#222222] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#68b42e]" />
                {data.aboutVideoTitle}
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-[#888888] hover:text-[#222222]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video overflow-hidden bg-[#111111] mb-4 relative">
              <img
                src={data.aboutVideoCover}
                alt={data.aboutVideoTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white p-6 text-center">
                <p className="text-xs uppercase tracking-widest text-[#68b42e] font-bold mb-2">
                  Showroom Thực Tế {brandName}
                </p>
                <p className="text-sm sm:text-base font-semibold max-w-md mb-4">
                  Trải nghiệm trực tiếp hơn 200+ mẫu sofa Bắc Âu, kệ tivi và bàn
                  ăn gỗ tự nhiên tại hệ thống showroom của chúng tôi.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded">
                    <Phone className="w-3.5 h-3.5 text-[#68b42e]" />
                    {primaryPhone}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded">
                    <Mail className="w-3.5 h-3.5 text-[#68b42e]" />
                    {primaryEmail}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="bg-[#68b42e] text-white text-xs font-bold uppercase px-5 py-2.5"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MEMBER DISCOUNT MODAL */}
      {authModalOpen && (
        <div
          onClick={() => setAuthModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-md w-full p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#222222]">
                Đăng ký thành viên — Ưu đãi 20%
              </h3>
              <button
                type="button"
                onClick={() => setAuthModalOpen(false)}
                className="text-[#888888] hover:text-[#222222]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#666666] mb-4 leading-relaxed">
              Để lại số điện thoại hoặc email để nhận mã giảm giá 20% cho đơn
              hàng nội thất đầu tiên tại <strong>{brandName}</strong>.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubmitted(true);
                setAuthModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Họ và tên của bạn"
                className="w-full border border-[#dddddd] px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#68b42e]"
              />
              <input
                type="tel"
                required
                placeholder="Số điện thoại nhận mã ưu đãi"
                className="w-full border border-[#dddddd] px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#68b42e]"
              />
              <button
                type="submit"
                className="w-full bg-[#68b42e] hover:bg-[#589c24] text-white text-xs font-bold uppercase py-3 transition-colors"
              >
                NHẬN MÃ ƯU ĐÃI 20%
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
