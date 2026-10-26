"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ShoppingCart,
  Laptop,
  Cpu,
  Gift,
  Newspaper,
  Wrench,
  Phone,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  MapPin,
  Mail,
  ShieldCheck,
  Monitor,
  Server,
  HardDrive,
  ArrowRight,
  Sparkles,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  mockData,
  type LaptopProMockData,
  type ProductCardItem,
  type NewsArticleItem,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  business?: Record<string, unknown>;
  customConfig?: Record<string, unknown>;
}

function parseVndPrice(priceStr: string): number {
  const digits = priceStr.replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatVndPrice(amount: number): string {
  return amount.toLocaleString("vi-VN") + " ₫";
}

export function DemoTemplateRenderer({
  business,
  customConfig,
}: DemoTemplateRendererProps) {
  const data = useMemo(
    () =>
      adaptClonedTemplateData(
        mockData,
        business,
        customConfig
      ) as LaptopProMockData,
    [business, customConfig]
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [topTab, setTopTab] = useState<"best" | "new">("best");
  const [laptopBrandFilter, setLaptopBrandFilter] = useState<string>("ALL");
  const [desktopBrandFilter, setDesktopBrandFilter] = useState<string>("ALL");
  const [componentFilter, setComponentFilter] = useState<string>("ALL");

  const [cart, setCart] = useState<{ item: ProductCardItem; qty: number }[]>(
    []
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] =
    useState<ProductCardItem | null>(null);
  const [activeNewsModal, setActiveNewsModal] =
    useState<NewsArticleItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [orderNotice, setOrderNotice] = useState<string | null>(null);

  const primaryPhone = data.business.phone?.[0] || "0909 888 567";
  const secondaryPhone = data.business.phone?.[1] || "028 3868 9999";
  const primaryEmail = data.business.email?.[0] || "kinhdoanh@laptoppro.vn";
  const secondaryEmail = data.business.email?.[1] || "cskh@laptoppro.vn";

  const cartCount = useMemo(
    () => cart.reduce((acc, entry) => acc + entry.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (acc, entry) => acc + parseVndPrice(entry.item.price) * entry.qty,
        0
      ),
    [cart]
  );

  const handleAddToCart = (product: ProductCardItem) => {
    setCart((prev) => {
      const existing = prev.find((e) => e.item.id === product.id);
      if (existing) {
        return prev.map((e) =>
          e.item.id === product.id ? { ...e, qty: e.qty + 1 } : e
        );
      }
      return [...prev, { item: product, qty: 1 }];
    });
    setOrderNotice(`Đã thêm "${product.name}" vào giỏ hàng Online!`);
    setTimeout(() => setOrderNotice(null), 3000);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((e) => (e.item.id === id ? { ...e, qty: e.qty + delta } : e))
        .filter((e) => e.qty > 0)
    );
  };

  const displayedTopProducts = useMemo(() => {
    const source =
      topTab === "best"
        ? data.topProducts.bestSellers
        : [
            ...data.topProducts.newArrivals,
            ...data.topProducts.bestSellers.slice(0, 4),
          ];
    if (!searchQuery.trim()) return source;
    const q = searchQuery.toLowerCase();
    return source.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.specs.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q)
    );
  }, [topTab, data.topProducts, searchQuery]);

  const filteredLaptops = useMemo(() => {
    return data.laptopSection.items.filter((item) => {
      const matchesBrand =
        laptopBrandFilter === "ALL" ||
        laptopBrandFilter.includes("Xem tất cả") ||
        item.brand.toLowerCase() === laptopBrandFilter.toLowerCase();
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [data.laptopSection.items, laptopBrandFilter, searchQuery]);

  const filteredDesktops = useMemo(() => {
    return data.desktopSection.items.filter((item) => {
      const matchesBrand =
        desktopBrandFilter === "ALL" ||
        desktopBrandFilter.includes("Xem tất cả") ||
        desktopBrandFilter
          .toLowerCase()
          .includes(item.brand.toLowerCase());
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [data.desktopSection.items, desktopBrandFilter, searchQuery]);

  const filteredComponents = useMemo(() => {
    return data.componentSection.items.filter((item) => {
      const matchesCat =
        componentFilter === "ALL" ||
        componentFilter.includes("Xem tất cả") ||
        item.category.toLowerCase() === componentFilter.toLowerCase();
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [data.componentSection.items, componentFilter, searchQuery]);

  const renderNavIcon = (iconName: string) => {
    switch (iconName) {
      case "laptop":
        return <Laptop className="w-5 h-5 text-[#2b4c8c]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[#2b4c8c]" />;
      case "gift":
        return <Gift className="w-5 h-5 text-[#2b4c8c]" />;
      case "newspaper":
        return <Newspaper className="w-5 h-5 text-[#2b4c8c]" />;
      case "wrench":
        return <Wrench className="w-5 h-5 text-[#2b4c8c]" />;
      default:
        return <Phone className="w-5 h-5 text-[#2b4c8c]" />;
    }
  };

  const renderProductCard = (product: ProductCardItem, compact = false) => (
    <div
      key={product.id}
      className="group relative bg-white border border-slate-200 hover:border-[#2b4c8c] transition-all duration-200 flex flex-col justify-between p-3 hover:shadow-md"
    >
      {/* Circular Badge */}
      {product.badge && (
        <span
          className={`absolute top-2.5 right-2.5 z-10 w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white shadow-sm ${
            product.badge === "Sale" ? "bg-[#e11d48]" : "bg-[#2b4c8c]"
          }`}
        >
          {product.badge}
        </span>
      )}

      <div>
        {/* Product Image */}
        <div
          onClick={() => setQuickViewProduct(product)}
          className={`relative w-full ${
            compact ? "h-32" : "h-36"
          } flex items-center justify-center overflow-hidden bg-slate-50/70 mb-2.5 cursor-pointer`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Title */}
        <h3
          onClick={() => setQuickViewProduct(product)}
          className="text-xs font-medium text-slate-800 group-hover:text-[#2b4c8c] line-clamp-2 min-h-[34px] leading-snug text-center cursor-pointer"
        >
          {product.name}
        </h3>
      </div>

      {/* Price & CTA */}
      <div className="mt-2 pt-2 border-t border-slate-100 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <span className="text-xs sm:text-[13px] font-bold text-[#2b4c8c]">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-[11px] text-slate-400 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          className="w-full py-1.5 px-2 text-[11px] font-bold uppercase tracking-tight border border-[#2b4c8c] text-[#2b4c8c] bg-white hover:bg-[#2b4c8c] hover:text-white transition-colors rounded-sm"
        >
          MUA HÀNG ONLINE
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
      {/* Toast Notification */}
      {orderNotice && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#2b4c8c] text-white px-4 py-3 rounded shadow-xl flex items-center gap-2.5 text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>{orderNotice}</span>
        </div>
      )}

      {/* 1. ROYAL BLUE TOPBAR */}
      <header className="bg-[#2b4c8c] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo LAPTOP [PRO] */}
          <a
            href="#top"
            className="flex items-center gap-1.5 select-none shrink-0"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {data.business.brandPrefix || "LAPTOP"}
            </span>
            <span className="bg-white text-[#2b4c8c] text-xl sm:text-2xl font-black px-2 py-0.5 rounded shadow-sm">
              {data.business.brandSuffix || "PRO"}
            </span>
          </a>

          {/* Center Search Bar with Category Dropdown */}
          <div className="flex-1 max-w-2xl min-w-[260px]">
            <div className="flex items-center bg-white rounded overflow-hidden shadow-inner h-10">
              <div className="relative border-r border-slate-200 bg-slate-50 h-full flex items-center">
                <select
                  aria-label="Chọn danh mục tìm kiếm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-transparent text-slate-700 text-xs font-semibold pl-3 pr-7 h-full focus:outline-none cursor-pointer"
                >
                  {data.searchCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 pointer-events-none" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập thông tin cần tìm: Dell Precision, HP ZBook, Xeon, Quadro..."
                className="flex-1 px-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none h-full"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="px-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                className="bg-[#1e3a70] hover:bg-[#162c57] text-white px-4 h-full flex items-center justify-center transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Cart Pill */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-[#1e3a70] hover:bg-[#172e5c] border border-white/25 px-3.5 py-2 rounded text-xs sm:text-sm font-bold transition-colors"
            >
              <span className="uppercase tracking-wide">
                GIỎ HÀNG / {cartTotal > 0 ? formatVndPrice(cartTotal) : "0 ₫"}
              </span>
              <div className="relative">
                <ShoppingCart className="w-4 h-4 text-amber-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* 2. WHITE ICON SUB-NAVBAR */}
        <div className="bg-white text-slate-700 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-slate-100">
              {data.navigation.map((nav) => (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  className="flex flex-col sm:flex-row items-center justify-center gap-2 py-2.5 px-2 hover:bg-slate-50 hover:text-[#2b4c8c] transition-colors group"
                >
                  <div className="p-1.5 rounded-full bg-blue-50/80 group-hover:bg-blue-100 transition-colors">
                    {renderNavIcon(nav.icon)}
                  </div>
                  <span className="text-xs font-bold tracking-wide uppercase">
                    {nav.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main id="top" className="max-w-7xl mx-auto px-4 py-5 space-y-7">
        {/* 3. HERO COLLAGE (8-COL LEFT + 4-COL RIGHT STACKED) */}
        <section id="khuyen-mai" className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left 8-Col Main Promo Banner */}
          <div className="lg:col-span-8 relative rounded overflow-hidden border border-slate-200 bg-gradient-to-r from-[#172e5c] via-[#2b4c8c] to-[#1e40af] text-white min-h-[290px] sm:min-h-[330px] flex items-center">
            <img
              src={data.hero.mainBanner.image}
              alt={data.hero.mainBanner.title}
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
            />
            <div className="relative z-10 p-6 sm:p-8 max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-3 py-1 rounded-sm uppercase tracking-wider shadow">
                <Sparkles className="w-4 h-4" />
                {data.hero.mainBanner.badge}
              </div>
              <h1 className="text-2xl sm:text-3xl font-black leading-tight uppercase tracking-tight">
                {data.hero.mainBanner.title}
              </h1>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {data.hero.mainBanner.subtitle}
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3.5 py-2 rounded text-xs font-semibold text-amber-200">
                ★ {data.hero.mainBanner.highlight}
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#san-pham"
                  className="inline-flex items-center gap-2 bg-white text-[#2b4c8c] hover:bg-amber-300 hover:text-slate-950 font-bold text-xs px-4 py-2.5 rounded-sm shadow transition-colors uppercase"
                >
                  {data.hero.mainBanner.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-blue-200 font-medium">
                  Hotline kỹ thuật: <strong>{primaryPhone}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right 4-Col 2 Stacked Promo Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {data.hero.sideBanners.map((banner) => (
              <div
                key={banner.id}
                className={`relative flex-1 rounded overflow-hidden border border-slate-200 bg-gradient-to-br ${banner.bgGradient} text-white p-5 flex flex-col justify-between min-h-[155px]`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute right-0 bottom-0 w-40 h-full object-cover opacity-25 mix-blend-overlay pointer-events-none"
                />
                <div className="relative z-10 space-y-1.5">
                  <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {banner.badge}
                  </span>
                  <h2 className="text-base sm:text-lg font-extrabold leading-snug">
                    {banner.title}
                  </h2>
                  <p className="text-xs text-white/85 leading-relaxed line-clamp-2">
                    {banner.subtitle}
                  </p>
                </div>
                <div className="relative z-10 pt-2">
                  <a
                    href="#dich-vu"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:underline uppercase"
                  >
                    Tìm hiểu ngay <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECTION 1: SẢN PHẨM BÁN CHẠY / SẢN PHẨM MỚI (8-COL) + TIN TỨC SIDEBAR (4-COL) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left 8-Col Product Tabs + 4x2 Grid */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm p-3 sm:p-4">
            {/* Tab Bar */}
            <div className="flex items-center justify-between border-b-2 border-[#2b4c8c] pb-0 mb-4">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setTopTab("best")}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-colors ${
                    topTab === "best"
                      ? "bg-[#2b4c8c] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  SẢN PHẨM BÁN CHẠY
                </button>
                <button
                  type="button"
                  onClick={() => setTopTab("new")}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-colors ${
                    topTab === "new"
                      ? "bg-[#2b4c8c] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  SẢN PHẨM MỚI
                </button>
              </div>
              <span className="hidden sm:inline-block text-xs text-slate-500">
                Cam kết máy zin chuẩn Mỹ 100%
              </span>
            </div>

            {/* 4x2 Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {displayedTopProducts.slice(0, 8).map((prod) =>
                renderProductCard(prod)
              )}
            </div>
          </div>

          {/* Right 4-Col TIN TỨC Sidebar */}
          <aside
            id="tin-tuc"
            className="lg:col-span-4 bg-white border border-slate-200 rounded-sm flex flex-col justify-between"
          >
            <div>
              {/* Navy Header */}
              <div className="bg-[#2b4c8c] text-white px-4 py-2.5 flex items-center gap-2 font-bold text-sm uppercase">
                <Menu className="w-4 h-4" />
                <span>TIN TỨC CÔNG NGHỆ WORKSTATION</span>
              </div>

              <div className="p-3.5 space-y-3.5">
                {/* Featured Article */}
                {data.newsWidget[0] && (
                  <div
                    onClick={() => setActiveNewsModal(data.newsWidget[0])}
                    className="group cursor-pointer border-b border-slate-100 pb-3"
                  >
                    <div className="relative h-36 w-full rounded-sm overflow-hidden mb-2.5 bg-slate-100">
                      <img
                        src={data.newsWidget[0].image}
                        alt={data.newsWidget[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-2 left-2 bg-[#2b4c8c]/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                        {data.newsWidget[0].date}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#2b4c8c] leading-snug mb-1">
                      {data.newsWidget[0].title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {data.newsWidget[0].excerpt}
                    </p>
                  </div>
                )}

                {/* Secondary News List */}
                <div className="space-y-2.5">
                  {data.newsWidget.slice(1).map((news) => (
                    <div
                      key={news.id}
                      onClick={() => setActiveNewsModal(news)}
                      className="flex gap-2.5 items-start group cursor-pointer pb-2 border-b border-slate-100 last:border-none last:pb-0"
                    >
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-16 h-12 object-cover rounded-sm shrink-0 bg-slate-100"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-slate-700 group-hover:text-[#2b4c8c] line-clamp-2 leading-snug">
                          {news.title}
                        </h4>
                        <span className="text-[10px] text-slate-400">
                          {news.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() =>
                  setActiveNewsModal(data.newsWidget[0] || null)
                }
                className="text-xs font-bold text-[#2b4c8c] hover:underline"
              >
                Xem thêm tin tức &gt;&gt;
              </button>
            </div>
          </aside>
        </section>

        {/* 5. SECTION 2: LAPTOP (6x2 GRID = 12 ITEMS) */}
        <section id="san-pham" className="bg-white border border-slate-200 rounded-sm">
          {/* Navy Ribbon Header */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[#2b4c8c] bg-slate-50">
            <div className="bg-[#2b4c8c] text-white px-5 py-2.5 font-extrabold text-sm uppercase tracking-wide flex items-center gap-2">
              <Laptop className="w-4 h-4" />
              <span>{data.laptopSection.title}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-3 px-3 py-1.5 text-xs">
              <button
                type="button"
                onClick={() => setLaptopBrandFilter("ALL")}
                className={`px-2 py-1 rounded font-semibold transition-colors ${
                  laptopBrandFilter === "ALL"
                    ? "text-[#2b4c8c] font-bold underline"
                    : "text-slate-600 hover:text-[#2b4c8c]"
                }`}
              >
                Tất cả
              </button>
              {data.laptopSection.filters.map((filter, idx) => (
                <React.Fragment key={filter}>
                  <span className="text-slate-300">|</span>
                  <button
                    type="button"
                    onClick={() => setLaptopBrandFilter(filter)}
                    className={`px-2 py-1 rounded font-semibold transition-colors ${
                      laptopBrandFilter === filter
                        ? "text-[#2b4c8c] font-bold underline"
                        : "text-slate-600 hover:text-[#2b4c8c]"
                    }`}
                  >
                    {filter}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 6x2 Grid of 12 Business & Workstation Laptops */}
          <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredLaptops.map((item) => renderProductCard(item, true))}
          </div>
        </section>

        {/* 6. SECTION 3: DESKTOP WORKSTATION (6 TOP + 2 BOTTOM = 8 ITEMS) */}
        <section className="bg-white border border-slate-200 rounded-sm">
          {/* Navy Ribbon Header */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[#2b4c8c] bg-slate-50">
            <div className="bg-[#2b4c8c] text-white px-5 py-2.5 font-extrabold text-sm uppercase tracking-wide flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>{data.desktopSection.title}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-3 px-3 py-1.5 text-xs">
              <button
                type="button"
                onClick={() => setDesktopBrandFilter("ALL")}
                className={`px-2 py-1 rounded font-semibold transition-colors ${
                  desktopBrandFilter === "ALL"
                    ? "text-[#2b4c8c] font-bold underline"
                    : "text-slate-600 hover:text-[#2b4c8c]"
                }`}
              >
                Tất cả
              </button>
              {data.desktopSection.filters.map((filter) => (
                <React.Fragment key={filter}>
                  <span className="text-slate-300">|</span>
                  <button
                    type="button"
                    onClick={() => setDesktopBrandFilter(filter)}
                    className={`px-2 py-1 rounded font-semibold transition-colors ${
                      desktopBrandFilter === filter
                        ? "text-[#2b4c8c] font-bold underline"
                        : "text-slate-600 hover:text-[#2b4c8c]"
                    }`}
                  >
                    {filter}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 6-Column Grid (8 Workstation Towers) */}
          <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredDesktops.map((item) => renderProductCard(item, true))}
          </div>
        </section>

        {/* 7. SECTION 4: LINH KIỆN & MÀN HÌNH ĐỒ HỌA (6x2 GRID = 12 ITEMS) */}
        <section id="linh-kien" className="bg-white border border-slate-200 rounded-sm">
          {/* Navy Ribbon Header */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-[#2b4c8c] bg-slate-50">
            <div className="bg-[#2b4c8c] text-white px-5 py-2.5 font-extrabold text-sm uppercase tracking-wide flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              <span>{data.componentSection.title}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-3 px-3 py-1.5 text-xs">
              <button
                type="button"
                onClick={() => setComponentFilter("ALL")}
                className={`px-2 py-1 rounded font-semibold transition-colors ${
                  componentFilter === "ALL"
                    ? "text-[#2b4c8c] font-bold underline"
                    : "text-slate-600 hover:text-[#2b4c8c]"
                }`}
              >
                Tất cả
              </button>
              {data.componentSection.filters.map((filter) => (
                <React.Fragment key={filter}>
                  <span className="text-slate-300">|</span>
                  <button
                    type="button"
                    onClick={() => setComponentFilter(filter)}
                    className={`px-2 py-1 rounded font-semibold transition-colors ${
                      componentFilter === filter
                        ? "text-[#2b4c8c] font-bold underline"
                        : "text-slate-600 hover:text-[#2b4c8c]"
                    }`}
                  >
                    {filter}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 6x2 Grid of 12 Component / Monitor / Docking Items */}
          <div className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredComponents.map((item) => renderProductCard(item, true))}
          </div>
        </section>

        {/* 8. WIDE BOTTOM PROMO BANNER (ĐẾ SẠC NHANH KHÔNG DÂY IPEARL CHUẨN QI) */}
        <section id="dich-vu" className="relative rounded overflow-hidden border border-slate-200 bg-gradient-to-r from-[#1e293b] via-[#2b4c8c] to-[#0f172a] text-white p-6 sm:p-8">
          <img
            src={data.bottomPromoBanner.image}
            alt={data.bottomPromoBanner.title}
            className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-25 mix-blend-luminosity pointer-events-none"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block bg-rose-600 text-white text-xs font-black px-3 py-1 rounded-sm uppercase tracking-wider">
                {data.bottomPromoBanner.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                {data.bottomPromoBanner.title}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100">
                {data.bottomPromoBanner.subtitle}
              </p>
              <p className="text-sm font-bold text-amber-300">
                ★ {data.bottomPromoBanner.highlight}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                handleAddToCart({
                  id: "promo-ipearl-qi",
                  name: "Đế sạc nhanh không dây iPearl Chuẩn QI Cao Cấp",
                  price: "350.000 ₫",
                  oldPrice: "700.000 ₫",
                  image: data.bottomPromoBanner.image,
                  badge: "Sale",
                  brand: "iPearl",
                  specs: "Sạc nhanh không dây chuẩn Qi 10W, tự ngắt khi đầy pin",
                  warranty: "12 Tháng 1 đổi 1",
                  category: "Đồ Chơi Công Nghệ",
                })
              }
              className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-3 rounded shadow-lg uppercase tracking-wide transition-colors"
            >
              ĐẶT MUA ƯU ĐÃI 50% NGAY
            </button>
          </div>
        </section>
      </main>

      {/* 9. CHARCOAL NEWSLETTER BAR + WINTER-BLUE 4-COLUMN FOOTER */}
      <footer id="lien-he" className="mt-8">
        {/* Charcoal Newsletter Bar */}
        <div className="bg-[#4a4a4a] text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
              <Mail className="w-5 h-5 text-amber-300 shrink-0" />
              <span>
                Đăng ký nhận tin khuyến mãi & Báo giá sỉ Workstation từ Laptop
                Pro:
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterSubmitted(true);
                  setNewsletterEmail("");
                }
              }}
              className="flex w-full md:w-auto max-w-md"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập địa chỉ email của bạn..."
                className="flex-1 sm:w-72 px-3.5 py-2 text-xs sm:text-sm text-slate-800 bg-white rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#2b4c8c] hover:bg-[#1e3a70] text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-r uppercase tracking-wider transition-colors"
              >
                GỬI
              </button>
            </form>

            {newsletterSubmitted && (
              <span className="text-xs text-emerald-300 font-semibold">
                ✓ Đã đăng ký nhận bản tin khuyến mãi thành công!
              </span>
            )}
          </div>
        </div>

        {/* Light Winter-Blue 4-Column Footer */}
        <div className="bg-[#ebf3f9] text-slate-700 border-t border-blue-100 py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: VỀ LAPTOPPRO */}
            <div>
              <h3 className="text-sm font-extrabold text-[#2b4c8c] uppercase mb-3 border-b border-blue-200 pb-2">
                VỀ LAPTOPPRO
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {data.business.tagline}
              </p>
              <ul className="space-y-2 text-xs">
                {data.footer.aboutLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="hover:text-[#2b4c8c] flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#2b4c8c]" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: SẢN PHẨM */}
            <div>
              <h3 className="text-sm font-extrabold text-[#2b4c8c] uppercase mb-3 border-b border-blue-200 pb-2">
                SẢN PHẨM CHỦ LỰC
              </h3>
              <ul className="space-y-2 text-xs">
                {data.footer.productLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#san-pham"
                      className="hover:text-[#2b4c8c] flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#2b4c8c]" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: CHÍNH SÁCH & HỖ TRỢ */}
            <div>
              <h3 className="text-sm font-extrabold text-[#2b4c8c] uppercase mb-3 border-b border-blue-200 pb-2">
                CHÍNH SÁCH &amp; HỖ TRỢ
              </h3>
              <ul className="space-y-2 text-xs">
                {data.footer.policyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#dich-vu"
                      className="hover:text-[#2b4c8c] flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2b4c8c]" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: LIÊN HỆ CHI NHÁNH */}
            <div>
              <h3 className="text-sm font-extrabold text-[#2b4c8c] uppercase mb-3 border-b border-blue-200 pb-2">
                HỆ THỐNG LIÊN HỆ
              </h3>
              <div className="space-y-2.5 text-xs">
                {data.business.branches.map((br) => (
                  <div key={br.name} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#2b4c8c] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{br.name}:</strong>{" "}
                      <span>{br.address}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-1 border-t border-blue-200/70 space-y-1">
                  <p>
                    <strong>Kinh doanh B2B:</strong>{" "}
                    <span className="text-[#2b4c8c] font-bold">
                      {primaryPhone}
                    </span>
                  </p>
                  <p>
                    <strong>CSKH &amp; Bảo hành:</strong>{" "}
                    <span className="text-rose-600 font-bold">
                      {secondaryPhone}
                    </span>
                  </p>
                  <p>
                    <strong>Email:</strong> {primaryEmail} / {secondaryEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom SEO Tag Cloud */}
          <div className="max-w-7xl mx-auto px-4 mt-6 pt-4 border-t border-blue-200/80">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600 mr-1">
                Từ khóa thông dụng:
              </span>
              {data.footer.seoKeywords.map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setSearchQuery(kw)}
                  className="text-[11px] bg-white border border-blue-200 text-slate-600 hover:text-[#2b4c8c] hover:border-[#2b4c8c] px-2 py-0.5 rounded-sm transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-3 text-center">
              © {new Date().getFullYear()} {data.business.name}. Trụ sở chính:{" "}
              {data.business.address}. Bảo lưu mọi quyền.
            </p>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW PRODUCT MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-[#2b4c8c] text-white px-5 py-3 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase">
                Thông số kỹ thuật máy trạm / linh kiện
              </h3>
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
              <div className="bg-slate-50 p-4 rounded border border-slate-100 flex items-center justify-center h-52">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="space-y-2.5">
                <span className="inline-block bg-blue-100 text-[#2b4c8c] text-[11px] font-bold px-2.5 py-0.5 rounded">
                  Thương hiệu: {quickViewProduct.brand}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {quickViewProduct.name}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-[#2b4c8c]">
                    {quickViewProduct.price}
                  </span>
                  {quickViewProduct.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {quickViewProduct.oldPrice}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-100">
                  <strong>Cấu hình chi tiết:</strong> {quickViewProduct.specs}
                </p>
                <p className="text-xs text-emerald-700 font-semibold">
                  ✓ Bảo hành: {quickViewProduct.warranty} • Cân màu Spyder5 miễn
                  phí
                </p>
                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 bg-[#2b4c8c] hover:bg-[#1e3a70] text-white text-xs font-bold py-2.5 px-4 rounded uppercase"
                  >
                    Đặt Mua Online Ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NEWS MODAL */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="bg-[#2b4c8c] text-white px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase">
                Chuyên mục Kiến Thức Workstation
              </span>
              <button
                type="button"
                onClick={() => setActiveNewsModal(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <img
                src={activeNewsModal.image}
                alt={activeNewsModal.title}
                className="w-full h-48 object-cover rounded"
              />
              <span className="text-xs text-slate-400">
                Ngày đăng: {activeNewsModal.date}
              </span>
              <h3 className="text-base font-bold text-slate-900">
                {activeNewsModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeNewsModal.excerpt}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tại LaptopPro, mọi hệ thống máy trạm Dell Precision, HP Z-Series
                và Lenovo ThinkPad P-Series đều được kiểm định nghiêm ngặt qua
                15 bước Stress-Test nhiệt độ và hiệu năng liên tục trước khi bàn
                giao tới tay kỹ sư và doanh nghiệp.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
            <div>
              <div className="bg-[#2b4c8c] text-white px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-sm uppercase">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Giỏ Hàng LaptopPro ({cartCount})</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 space-y-3 overflow-y-auto max-h-[70vh]">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    Giỏ hàng của bạn đang trống. Hãy chọn sản phẩm cần mua!
                  </div>
                ) : (
                  cart.map(({ item, qty }) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b border-slate-100 pb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-contain bg-slate-50 border border-slate-200 rounded p-1 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#2b4c8c] font-bold">
                          {item.price}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, -1)}
                            className="p-1 border border-slate-200 rounded hover:bg-slate-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateCartQty(item.id, 1)}
                            className="p-1 border border-slate-200 rounded hover:bg-slate-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.id, -qty)}
                        className="text-slate-400 hover:text-rose-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Tổng cộng tạm tính:</span>
                <span className="text-[#2b4c8c] text-base">
                  {formatVndPrice(cartTotal)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setIsCartOpen(false);
                  setOrderNotice(
                    "Đặt hàng thành công! Chuyên viên LaptopPro sẽ liên hệ xác nhận trong 10 phút."
                  );
                }}
                className="w-full bg-[#2b4c8c] hover:bg-[#1e3a70] disabled:bg-slate-300 text-white font-bold text-xs uppercase py-3 rounded transition-colors"
              >
                Gửi Yêu Cầu Đặt Hàng &amp; Xuất Hóa Đơn VAT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
