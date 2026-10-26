"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  Smartphone,
  Laptop,
  Tablet,
  Cable,
  Watch,
  Printer,
  Monitor,
  Headphones,
  ChevronRight,
  Zap,
  ShieldCheck,
  Truck,
  PhoneCall,
  Percent,
  CheckCircle2,
  X,
  Copy,
  Sparkles,
  MapPin,
  Mail,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  corporateProfile20MockData,
  CorporateProfile20Data,
  SmartTechProductItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  companyName?: string;
  customData?: Partial<CorporateProfile20Data>;
}

export function DemoTemplateRenderer({
  companyName,
  customData,
}: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData(corporateProfile20MockData, {
    ...customData,
    business: {
      ...corporateProfile20MockData.business,
      ...(customData?.business || {}),
      ...(companyName ? { name: companyName } : {}),
    },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrendBrand, setSelectedTrendBrand] = useState<string>("Tất cả");
  const [selectedSidebarCategory, setSelectedSidebarCategory] = useState<
    string | null
  >(null);
  const [cart, setCart] = useState<SmartTechProductItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] =
    useState<SmartTechProductItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Laptop":
        return <Laptop className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Tablet":
        return <Tablet className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Cable":
        return <Cable className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Watch":
        return <Watch className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Printer":
        return <Printer className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Monitor":
        return <Monitor className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
      case "Headphones":
      default:
        return <Headphones className="w-4 h-4 text-gray-500 group-hover:text-[#0066ff]" />;
    }
  };

  const handleAddToCart = (product: SmartTechProductItem) => {
    setCart((prev) => [...prev, product]);
    setQuickViewProduct(product);
  };

  const handleCopyPromoCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const displayedTrendProducts = data.trendProducts.filter((prod) => {
    const matchesBrand =
      selectedTrendBrand === "Tất cả" ||
      prod.brand.toLowerCase() === selectedTrendBrand.toLowerCase();
    const matchesSearch =
      !searchQuery.trim() ||
      prod.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#1c2430] font-sans antialiased selection:bg-[#0066ff] selection:text-white">
      {/* 1. WHITE 2-ROW TECH RETAIL HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1220px] mx-auto px-4">
          {/* Header Row 1: Logo + Rounded Search Bar + User + Cart */}
          <div className="h-20 flex items-center justify-between gap-4">
            {/* Brand Logo: Mona SmartTech */}
            <a
              href="#"
              onClick={() => {
                setSelectedSidebarCategory(null);
                setSelectedTrendBrand("Tất cả");
                setSearchQuery("");
              }}
              className="flex items-center gap-2 shrink-0 select-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066ff] to-[#00c6ff] flex items-center justify-center text-white font-black text-xl shadow-sm">
                M
              </div>
              <div className="leading-none">
                <span className="block text-xl sm:text-2xl font-black tracking-tight text-[#0066ff]">
                  Mona <span className="text-[#1c2430]">SmartTech</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  Authorized Tech Store
                </span>
              </div>
            </a>

            {/* Center Search Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById("trend-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden md:flex items-center flex-1 max-w-md mx-4"
            >
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Bạn tìm gì..."
                  className="w-full h-10 pl-4 pr-12 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-[#0066ff] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  aria-label="Tìm kiếm"
                  className="absolute right-1 top-1 bottom-1 px-3.5 bg-[#0066ff] hover:bg-[#0052cc] text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Right Account & Cart */}
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href="#footer-section"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase text-gray-700 hover:text-[#0066ff] transition-colors"
              >
                <span>MONA</span>
                <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <User className="w-3.5 h-3.5" />
                </span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (cart.length > 0) {
                    setQuickViewProduct(cart[cart.length - 1]);
                  } else {
                    setQuickViewProduct(data.trendProducts[0]);
                  }
                }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase text-gray-800 hover:text-[#0066ff] transition-colors"
              >
                <span className="hidden sm:inline">GIỎ HÀNG</span>
                <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-[#0066ff] text-white text-xs font-extrabold">
                  <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                  {cart.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#0066ff]"
                aria-label="Mở menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Header Row 2: Blue Category Button + Horizontal Navigation */}
          <div className="border-t border-gray-100 flex items-center justify-between h-11">
            <div className="flex items-center gap-2 bg-[#0066ff] text-white px-4 h-full text-xs sm:text-[13px] font-bold uppercase tracking-wide rounded-t-sm">
              <Menu className="w-4 h-4" />
              <span>Danh mục sản phẩm</span>
            </div>

            <nav className="hidden lg:flex items-center gap-7">
              {data.headerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-extrabold uppercase tracking-wider text-gray-700 hover:text-[#0066ff] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-gray-200 space-y-2">
              {data.headerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-xs font-bold uppercase text-gray-700 hover:text-[#0066ff]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-[1220px] mx-auto px-4 py-5 space-y-8">
        {/* 2. 3-COLUMN HERO GRID: LEFT SIDEBAR (3 COLS) + CENTER BANNERS (6 COLS) + RIGHT TALL BANNER (3 COLS) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left 3 Cols: 9-Item Vertical Category Sidebar */}
          <div className="lg:col-span-3 bg-white rounded border border-gray-200 overflow-hidden shadow-xs">
            <ul className="divide-y divide-gray-100">
              {data.sidebarCategories.map((cat) => {
                const isSelected = selectedSidebarCategory === cat.label;
                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSidebarCategory(
                          isSelected ? null : cat.label
                        );
                        const el = document.getElementById("trend-section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`group w-full px-3.5 py-2.5 flex items-center justify-between text-left text-xs sm:text-[13px] transition-colors ${
                        isSelected
                          ? "bg-[#0066ff]/10 text-[#0066ff] font-bold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#0066ff]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 truncate">
                        {renderCategoryIcon(cat.iconName)}
                        <span className="truncate">{cat.label}</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0066ff] shrink-0" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Center 6 Cols: Main Blue Promo Banner + 2 Sub-Banners */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Center Promo Banner */}
            <div className="relative rounded overflow-hidden bg-gradient-to-r from-[#071a3e] via-[#0b3578] to-[#0066ff] text-white p-6 sm:p-7 min-h-[235px] flex items-center justify-between shadow-sm">
              <div className="relative z-10 max-w-[62%]">
                <span className="inline-block bg-[#ff5722] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-2.5">
                  {data.heroBanners.mainBanner.badge}
                </span>
                <h1 className="text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight">
                  {data.heroBanners.mainBanner.title}
                </h1>
                <p className="text-base sm:text-lg font-extrabold text-[#ffd166] uppercase mt-0.5">
                  {data.heroBanners.mainBanner.subtitle}
                </p>
                <p className="text-[11px] sm:text-xs text-white/90 font-semibold mt-2 mb-4">
                  {data.heroBanners.mainBanner.highlight}
                </p>
                <a
                  href="#flash-sale-section"
                  className="inline-flex items-center gap-1.5 bg-white text-[#0066ff] hover:bg-[#ffd166] hover:text-[#071a3e] font-extrabold text-xs uppercase px-4 py-2 rounded-sm transition-colors shadow"
                >
                  <span>{data.heroBanners.mainBanner.ctaText}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-[36%] h-44 rounded overflow-hidden border-2 border-white/20 shadow-lg shrink-0 hidden sm:block">
                <img
                  src={data.heroBanners.mainBanner.image}
                  alt={data.heroBanners.mainBanner.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2 Sub-Banners Below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {data.heroBanners.subBanners.map((sub) => (
                <a
                  key={sub.id}
                  href="#flash-sale-section"
                  className={`rounded p-4 bg-gradient-to-r ${sub.bgClass} text-white flex flex-col justify-center shadow-xs hover:opacity-95 transition-opacity`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7dd3fc] mb-1">
                    {sub.badge}
                  </span>
                  <h3 className="text-sm sm:text-base font-black uppercase leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-[11px] text-white/85 font-medium mt-1">
                    {sub.subtitle}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Right 3 Cols: Tall Vertical Promo Banner */}
          <div className="lg:col-span-3 relative rounded overflow-hidden bg-[#0c192c] text-white min-h-[340px] flex flex-col justify-between p-5 shadow-sm group">
            <img
              src={data.heroBanners.rightTallBanner.image}
              alt={data.heroBanners.rightTallBanner.title}
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-[#081221]/50 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block bg-[#0066ff] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-sm">
                {data.heroBanners.rightTallBanner.badge}
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <span className="inline-block bg-[#ff5722] text-white text-xs font-black uppercase px-2.5 py-0.5 rounded-sm mb-2">
                {data.heroBanners.rightTallBanner.discountText}
              </span>
              <h2 className="text-lg font-black uppercase leading-snug mb-1.5">
                {data.heroBanners.rightTallBanner.title}
              </h2>
              <p className="text-xs text-white/85 leading-relaxed mb-3">
                {data.heroBanners.rightTallBanner.subtitle}
              </p>
              <a
                href="#block-accessories"
                className="inline-flex items-center gap-1 text-xs font-extrabold uppercase text-[#60a5fa] hover:text-white"
              >
                <span>Mua phụ kiện ngay</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 3. TREND SECTION (HEADER WITH BRAND PILLS + 4 PRODUCT CARDS) */}
        <section
          id="trend-section"
          className="bg-white rounded border border-gray-200 p-4 sm:p-5 shadow-xs"
        >
          {/* Section Header + Brand Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#1c2430]">
                TREND
              </h2>
              {selectedSidebarCategory && (
                <span className="inline-flex items-center gap-1 text-xs font-bold bg-[#0066ff]/10 text-[#0066ff] px-2.5 py-0.5 rounded-full">
                  {selectedSidebarCategory}
                  <button
                    type="button"
                    onClick={() => setSelectedSidebarCategory(null)}
                    className="hover:text-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {["Tất cả", ...data.trendBrands].map((brand) => {
                const active = selectedTrendBrand === brand;
                return (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedTrendBrand(brand)}
                    className={`px-3 py-1 rounded text-xs font-bold transition-colors border ${
                      active
                        ? "bg-[#0066ff] text-white border-[#0066ff]"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#0066ff] hover:text-[#0066ff]"
                    }`}
                  >
                    {brand}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4-Column Trend Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(displayedTrendProducts.length > 0
              ? displayedTrendProducts
              : data.trendProducts
            ).map((product) => (
              <div
                key={product.id}
                onClick={() => handleAddToCart(product)}
                className="group bg-white border border-gray-100 hover:border-[#0066ff]/40 rounded p-3.5 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Orange • Giảm giá Pill Badge */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 bg-[#ff5722] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      Giảm giá
                    </span>
                    {product.discountPercent && (
                      <span className="text-[11px] font-extrabold text-[#d32f2f]">
                        {product.discountPercent}
                      </span>
                    )}
                  </div>

                  {/* Product Thumbnail */}
                  <div className="aspect-square w-full overflow-hidden rounded bg-gray-50 mb-3 p-2 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-gray-800 group-hover:text-[#0066ff] line-clamp-2 mb-1.5">
                    {product.name}
                  </h3>
                  {product.specs && (
                    <p className="text-[11px] text-gray-400 line-clamp-1 mb-2">
                      {product.specs}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-gray-50 flex items-baseline gap-2">
                  {product.oldPrice && (
                    <span className="text-[11px] text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-sm font-extrabold text-[#d32f2f]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FLASH SALE SECTION + FULL-WIDTH WEEKLY COUPON BANNER */}
        <section
          id="flash-sale-section"
          className="bg-white rounded border border-gray-200 p-4 sm:p-5 shadow-xs space-y-6"
        >
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#ff5722] fill-[#ff5722]" />
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#1c2430]">
                FLASH SALE
              </h2>
            </div>
            <span className="text-xs font-bold text-[#ff5722]">
              Săn deal giá sốc mỗi ngày
            </span>
          </div>

          {/* 4-Column Flash Sale Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.flashSaleProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleAddToCart(product)}
                className="group bg-white border border-gray-100 hover:border-[#ff5722]/50 rounded p-3.5 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 bg-[#ff5722] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      Giảm giá
                    </span>
                    {product.discountPercent && (
                      <span className="text-[11px] font-extrabold text-[#d32f2f]">
                        {product.discountPercent}
                      </span>
                    )}
                  </div>

                  <div className="aspect-square w-full overflow-hidden rounded bg-gray-50 mb-3 p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-gray-800 group-hover:text-[#0066ff] line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                </div>

                <div className="pt-2 border-t border-gray-50 flex items-baseline gap-2">
                  {product.oldPrice && (
                    <span className="text-[11px] text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-sm font-extrabold text-[#d32f2f]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Full-Width Weekly Promo Banner */}
          <div className="relative rounded overflow-hidden bg-gradient-to-r from-[#091e3a] via-[#004e92] to-[#0066ff] text-white p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-block bg-[#ff5722] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-sm">
                {data.weeklyPromoBanner.badge}
              </span>
              <h3 className="text-base sm:text-xl font-black uppercase tracking-wide">
                {data.weeklyPromoBanner.title}
              </h3>
              <p className="text-xs text-white/90">
                {data.weeklyPromoBanner.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyPromoCode}
              className="inline-flex items-center gap-2 bg-white text-[#0066ff] hover:bg-[#ffd166] hover:text-[#091e3a] font-extrabold text-xs uppercase px-4 py-2.5 rounded shadow transition-colors shrink-0"
            >
              <Copy className="w-4 h-4" />
              <span>
                {copiedCode
                  ? "ĐÃ SAO CHÉP MÃ: SMARTTECH500"
                  : `MÃ: ${data.weeklyPromoBanner.code}`}
              </span>
            </button>
          </div>
        </section>

        {/* 5. SIX SIGNATURE 2-COLUMN SPLIT CATEGORY BLOCKS (9 COLS LEFT + 3 COLS RIGHT) */}
        {data.splitCategoryBlocks.map((block) => (
          <section
            key={block.id}
            id={block.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5"
          >
            {/* Left 9 Columns: 3 Product Cards + Wide Horizontal Banner */}
            <div className="lg:col-span-9 bg-white rounded border border-gray-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                  <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#1c2430]">
                    {block.leftTitle}
                  </h2>
                  <a
                    href="#footer-section"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0066ff] hover:underline"
                  >
                    <span>Xem tất cả</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {block.leftProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleAddToCart(product)}
                      className="group border border-gray-100 hover:border-[#0066ff]/40 rounded p-3 transition-all hover:shadow-sm cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        {product.isOnSale && (
                          <div className="mb-2">
                            <span className="inline-flex items-center gap-1 bg-[#ff5722] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              Giảm giá
                            </span>
                          </div>
                        )}
                        <div className="aspect-square w-full overflow-hidden rounded bg-gray-50 mb-3 p-2">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-xs sm:text-[13px] font-bold text-gray-800 group-hover:text-[#0066ff] line-clamp-2 mb-2">
                          {product.name}
                        </h3>
                      </div>

                      <div className="pt-2 border-t border-gray-50 flex items-baseline gap-2">
                        {product.oldPrice && (
                          <span className="text-[11px] text-gray-400 line-through">
                            {product.oldPrice}
                          </span>
                        )}
                        <span className="text-sm font-extrabold text-[#d32f2f]">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wide Category Promo Banner Under the 3 Cards */}
              <div
                className={`relative rounded overflow-hidden bg-gradient-to-r ${block.leftBanner.bgGradient} text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4`}
              >
                <div className="space-y-1 text-center sm:text-left">
                  <span className="inline-block bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                    {block.leftBanner.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-black uppercase">
                    {block.leftBanner.title}
                  </h3>
                  <p className="text-xs text-white/85">
                    {block.leftBanner.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddToCart(block.leftProducts[0])}
                  className="bg-white text-[#1c2430] hover:bg-[#ffd166] font-extrabold text-xs uppercase px-4 py-2 rounded shadow-xs transition-colors shrink-0"
                >
                  {block.leftBanner.ctaLabel}
                </button>
              </div>
            </div>

            {/* Right 3 Columns: Secondary Category Sidebar Stack */}
            <div className="lg:col-span-3 bg-white rounded border border-gray-200 p-4 sm:p-5 shadow-xs flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                <h2 className="text-sm sm:text-base font-black uppercase tracking-wide text-[#1c2430]">
                  {block.rightTitle}
                </h2>
              </div>

              <div className="space-y-3.5 flex-1">
                {block.rightProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleAddToCart(item)}
                    className="group flex items-start gap-3 p-2 rounded border border-transparent hover:border-gray-200 hover:bg-gray-50/70 transition-all cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded bg-gray-100 overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      {item.isOnSale && (
                        <span className="inline-flex items-center gap-1 bg-[#ff5722] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full mb-1">
                          <span className="w-1 h-1 rounded-full bg-white" />
                          Giảm giá
                        </span>
                      )}
                      <h4 className="text-xs font-bold text-gray-800 group-hover:text-[#0066ff] line-clamp-2 leading-snug">
                        {item.name}
                      </h4>
                      <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                        {item.oldPrice && (
                          <span className="text-[10px] text-gray-400 line-through">
                            {item.oldPrice}
                          </span>
                        )}
                        <span className="text-xs font-extrabold text-[#d32f2f]">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 6. CÓ THỂ BẠN THÍCH (4x2 QUICK-LINK ACCESSORY GRID) */}
        <section
          id="co-the-ban-thich"
          className="bg-white rounded border border-gray-200 p-4 sm:p-5 shadow-xs"
        >
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-100">
            <Sparkles className="w-4 h-4 text-[#0066ff]" />
            <h2 className="text-base font-black text-[#1c2430]">
              Có thể bạn thích
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {data.youMayLikeItems.map((item) => (
              <a
                key={item.id}
                href="#trend-section"
                className="group flex items-center justify-between p-3.5 rounded border border-gray-200 hover:border-[#0066ff] hover:shadow-xs transition-all bg-white"
              >
                <div className="pr-2">
                  <h3 className="text-sm font-extrabold text-[#1c2430] group-hover:text-[#0066ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-14 h-14 rounded overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* 7. TRUST STRIP + 5-COLUMN WHITE FOOTER + ROYAL BLUE COPYRIGHT BAR */}
      <footer
        id="footer-section"
        className="bg-white border-t border-gray-200 mt-8"
      >
        {/* 4-Column Trust Feature Strip */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1220px] mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#1c2430]">
                  {data.trustFeatures[0].title}
                </h4>
                <p className="text-xs text-gray-500">
                  {data.trustFeatures[0].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#1c2430]">
                  {data.trustFeatures[1].title}
                </h4>
                <p className="text-xs text-gray-500">
                  {data.trustFeatures[1].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#1c2430]">
                  {data.trustFeatures[2].title}
                </h4>
                <p className="text-xs text-gray-500">
                  {data.trustFeatures[2].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#1c2430]">
                  {data.trustFeatures[3].title}
                </h4>
                <p className="text-xs text-gray-500">
                  {data.trustFeatures[3].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column White Footer Links */}
        <div
          id="gioi-thieu"
          className="max-w-[1220px] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {data.footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c2430] mb-3.5">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs text-gray-600">
                {col.links.map((linkText) => (
                  <li key={linkText}>
                    <a
                      href="#trend-section"
                      className="hover:text-[#0066ff] transition-colors"
                    >
                      {linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 5: EMAIL LIÊN HỆ */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1c2430] mb-3.5">
              EMAIL LIÊN HỆ
            </h4>
            <div className="space-y-2.5 text-xs text-gray-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0066ff] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066ff] shrink-0" />
                <a
                  href={`mailto:${data.business.email[0]}`}
                  className="text-[#0066ff] font-semibold hover:underline"
                >
                  {data.business.email[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#0066ff] shrink-0" />
                <a
                  href={`tel:${data.business.phone[0]}`}
                  className="font-bold text-[#1c2430] hover:text-[#0066ff]"
                >
                  {data.business.phone[0]}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Royal Blue Copyright Bottom Bar */}
        <div className="bg-[#0052cc] text-white text-xs py-3.5">
          <div className="max-w-[1220px] mx-auto px-4 text-center">
            © Bản quyền thuộc về{" "}
            <span className="font-bold">{data.business.name}</span>. Thiết kế
            website bởi hệ thống MonaMedia SmartTech.
          </div>
        </div>
      </footer>

      {/* QUICK VIEW & CART MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
          <div className="bg-white rounded-md max-w-md w-full overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#0066ff] text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã thêm vào giỏ hàng ({cart.length})</span>
              </div>
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-20 h-20 rounded object-cover border border-gray-200 shrink-0"
                />
                <div>
                  <span className="inline-block bg-[#ff5722] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">
                    Chính hãng VN/A
                  </span>
                  <h4 className="text-sm font-bold text-[#1c2430]">
                    {quickViewProduct.name}
                  </h4>
                  <p className="text-sm font-extrabold text-[#d32f2f] mt-1">
                    {quickViewProduct.price}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-5">
                Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng hoặc duyệt hồ sơ
                online trong 15 phút. Giao hàng tận nhà miễn phí!
              </p>
              <div className="flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setQuickViewProduct(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 border border-gray-200 rounded hover:bg-gray-50"
                >
                  Tiếp tục mua sắm
                </button>
                <a
                  href={`tel:${data.business.phone[0]}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="px-4 py-2 text-xs font-bold bg-[#0066ff] hover:bg-[#0052cc] text-white rounded"
                >
                  Đặt Mua Ngay
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
