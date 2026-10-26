"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Heart,
  RefreshCw,
  List,
  ChevronLeft,
  ChevronRight,
  Truck,
  Headphones,
  RotateCcw,
  ShieldCheck,
  Calendar,
  FileText,
  X,
  CheckCircle2,
  Phone,
  MapPin,
  Mail,
  Wrench,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto2DefaultData,
  GarageOto2Data,
  GarageOto2Product,
} from "@/template-sources/garage_oto_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function AutoSpotLogo({
  brandName,
  dark = false,
}: {
  brandName: string;
  dark?: boolean;
}) {
  return (
    <div className="inline-flex flex-col items-center select-none">
      {/* Sleek Sports Car Roof Silhouette */}
      <svg
        viewBox="0 0 140 34"
        className="w-32 h-8 -mb-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 25C26 14 48 7 76 7C99 7 116 14 129 23"
          stroke={dark ? "#ffffff" : "#d32f2f"}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M28 23C44 14 66 11 94 14L122 22"
          stroke={dark ? "#d32f2f" : "#18181b"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`text-lg sm:text-xl font-black italic tracking-wider uppercase leading-none ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {brandName.replace(/\s+GARAGE$/i, "") || "AUTO SPOT"}
      </span>
      <span
        className={`text-[8px] font-bold tracking-[0.28em] uppercase mt-1 ${
          dark ? "text-zinc-400" : "text-zinc-500"
        }`}
      >
        GARAGE &amp; AUTO PARTS
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: GarageOto2Data = adaptClonedTemplateData(
    garageOto2DefaultData,
    incomingData
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [activeTab, setActiveTab] = useState<
    "Tất cả" | "Mới nhất" | "Phổ biến" | "Bán chạy" | "Khuyến mãi"
  >("Mới nhất");
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Deal slider index
  const [dealIndex, setDealIndex] = useState(0);

  // Cart & Wishlist interactive state
  const [wishlistIds, setWishlistIds] = useState<string[]>(["prd-1", "prd-6"]);
  const [cartCount, setCartCount] = useState<number>(2);
  const [selectedProductModal, setSelectedProductModal] =
    useState<GarageOto2Product | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    customerName: "",
    phone: "",
    carPlate: "",
    note: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "0908 777 111";

  const toggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter products for 5x2 grid
  const filteredProducts = data.products.filter((product) => {
    if (
      searchQuery.trim() &&
      !product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (
      selectedService &&
      selectedService !== "Tất cả phụ tùng & dịch vụ" &&
      product.category !== selectedService
    ) {
      return false;
    }
    return true;
  });

  // Reorder according to activeTab while keeping 10 items visible when possible
  const displayedProducts = [...filteredProducts].sort((a, b) => {
    if (activeTab === "Tất cả") return 0;
    const aMatch = a.tab === activeTab ? -1 : 1;
    const bMatch = b.tab === activeTab ? -1 : 1;
    return aMatch - bMatch;
  });

  const currentDeal =
    data.featuredDeals[dealIndex % data.featuredDeals.length] ||
    data.featuredDeals[0];

  const handleVehicleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("san-pham");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.customerName.trim() || !bookingForm.phone.trim()) return;
    setCartCount((c) => c + 1);
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-[#d32f2f] selection:text-white">
      {/* 1. HEADER WITH SEARCH BAR + RED CATEGORY BAR */}
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Top Row: Logo + Wide Search Bar + Utility Icons */}
        <div className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <a href="#trang-chu" className="shrink-0 focus:outline-none">
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={data.business.name}
                  className="h-11 w-auto object-contain"
                />
              ) : (
                <AutoSpotLogo brandName={data.business.name} />
              )}
            </a>

            {/* Wide Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById("san-pham");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden md:flex flex-1 max-w-xl mx-4 items-stretch"
            >
              <input
                type="text"
                placeholder="Đang tìm kiếm phụ tùng, mâm lốp, đèn Bi-LED, bảo dưỡng......"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border border-r-0 border-gray-200 px-4 py-2.5 text-xs text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:border-[#d32f2f]"
              />
              <button
                type="submit"
                className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>TÌM KIẾM</span>
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Right Utility Icons */}
            <div className="flex items-center gap-3 sm:gap-4 text-zinc-600">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                title="Hotline cứu hộ & đặt lịch"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-[#d32f2f] mr-1"
              >
                <Phone className="w-3.5 h-3.5" />
                {primaryPhone}
              </a>
              <button
                type="button"
                onClick={() => setSelectedProductModal(data.products[0])}
                className="hover:text-[#d32f2f] transition-colors cursor-pointer"
                title="Đặt lịch dịch vụ"
              >
                <User className="w-5 h-5 stroke-[1.6]" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedProductModal(data.products[0])}
                className="relative hover:text-[#d32f2f] transition-colors cursor-pointer"
                title="Giỏ hàng"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#d32f2f] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
              <a
                href="#san-pham"
                className="relative hover:text-[#d32f2f] transition-colors"
                title="Sản phẩm yêu thích"
              >
                <Heart className="w-5 h-5 stroke-[1.6]" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-zinc-800 text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistIds.length}
                </span>
              </a>
              <a
                href="#khuyen-mai"
                className="hover:text-[#d32f2f] transition-colors hidden sm:inline-flex"
                title="So sánh phụ tùng"
              >
                <RefreshCw className="w-4 h-4 stroke-[1.6]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-zinc-700"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Second Row: Red "DANH MỤC SẢN PHẨM" Dropdown + Horizontal Nav Links */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between relative">
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 sm:px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-colors cursor-pointer"
              >
                <List className="w-4 h-4" />
                <span>DANH MỤC SẢN PHẨM</span>
              </button>

              {categoryMenuOpen && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-xl border border-gray-200 py-2 z-50 text-xs">
                  {data.serviceTypes.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedService(
                          cat === "Tất cả phụ tùng & dịch vụ" ? "" : cat
                        );
                        setCategoryMenuOpen(false);
                        const el = document.getElementById("san-pham");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-red-50 hover:text-[#d32f2f] font-medium text-zinc-700 flex items-center justify-between"
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-700">
              <a
                href="#trang-chu"
                className="text-zinc-900 font-bold border-b-2 border-zinc-900 py-3.5"
              >
                Trang chủ
              </a>
              <a
                href="#doi-tac"
                className="hover:text-[#d32f2f] transition-colors py-3.5"
              >
                Giới thiệu
              </a>
              <a
                href="#san-pham"
                className="hover:text-[#d32f2f] transition-colors py-3.5"
              >
                Sản phẩm
              </a>
              <a
                href="#tin-tuc"
                className="hover:text-[#d32f2f] transition-colors py-3.5"
              >
                Tin tức
              </a>
              <a
                href="#lien-he"
                className="hover:text-[#d32f2f] transition-colors py-3.5"
              >
                Liên hệ
              </a>
            </nav>

            <div className="hidden lg:block text-xs text-zinc-400">
              Cam kết phụ tùng chính hãng 100%
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 px-4 py-3 space-y-2.5 text-xs font-medium bg-white">
              <input
                type="text"
                placeholder="Tìm kiếm phụ tùng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-200 px-3 py-2 text-xs mb-2"
              />
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 font-bold text-[#d32f2f]"
              >
                Trang chủ
              </a>
              <a
                href="#san-pham"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                Sản phẩm &amp; Dịch vụ
              </a>
              <a
                href="#khuyen-mai"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                Khuyến mãi giới hạn
              </a>
              <a
                href="#tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                Khám phá tin tức
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-700"
              >
                Liên hệ Garage
              </a>
            </div>
          )}
        </div>
      </header>

      {/* 2. PORSCHE MOUNTAIN HERO + 4-COLUMN VEHICLE FILTER BAR */}
      <section
        id="trang-chu"
        className="relative min-h-[380px] md:min-h-[440px] bg-zinc-900 flex items-center justify-center overflow-hidden"
      >
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 py-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-2">
            <span className="font-light">Lựa chọn </span>
            <span className="font-bold">chất lượng</span>
          </h1>
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/90 mb-8">
            {data.hero.subtitle}
          </p>

          {/* 4-Column Vehicle Filter Bar */}
          <form
            onSubmit={handleVehicleFilterSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 max-w-4xl mx-auto text-left"
          >
            {/* 1. Chọn thương hiệu */}
            <div className="lg:col-span-3 bg-white rounded-sm flex items-center px-3.5 py-2.5 shadow">
              <span className="text-xs font-bold text-zinc-400 pr-2.5 border-r border-gray-200">
                1
              </span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full pl-2.5 text-xs text-zinc-600 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="">Chọn thương hiệu</option>
                {data.vehicleBrands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Chọn dòng xe */}
            <div className="lg:col-span-4 bg-white rounded-sm flex items-center px-3.5 py-2.5 shadow">
              <span className="text-xs font-bold text-zinc-400 pr-2.5 border-r border-gray-200">
                2
              </span>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full pl-2.5 text-xs text-zinc-600 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="">Chọn mẫu xe</option>
                {data.vehicleModels.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Chọn kiểu / dịch vụ */}
            <div className="lg:col-span-3 bg-white rounded-sm flex items-center px-3.5 py-2.5 shadow">
              <span className="text-xs font-bold text-zinc-400 pr-2.5 border-r border-gray-200">
                3
              </span>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full pl-2.5 text-xs text-zinc-600 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="">Chọn kiểu phụ tùng</option>
                {data.serviceTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Red LỰA CHỌN button */}
            <button
              type="submit"
              className="lg:col-span-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white rounded-sm py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{data.hero.ctaText || "LỰA CHỌN"}</span>
            </button>
          </form>
        </div>
      </section>

      {/* 3. 6 PARTNER BRAND BADGES + 2 SPLIT PROMO BANNERS */}
      <section id="doi-tac" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* 6 Partner Brand Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center py-4 mb-8 border-b border-gray-100">
            {data.partnerBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center justify-center text-center py-2 px-3 grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all select-none"
              >
                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-900 mb-1">
                  {badge.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-extrabold tracking-tight text-zinc-800 uppercase">
                  {badge.name}
                </span>
                <span className="text-[8px] font-semibold tracking-[0.2em] text-zinc-400 uppercase">
                  {badge.tagline}
                </span>
              </div>
            ))}
          </div>

          {/* 2 Split Promo Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.promoBanners.map((banner) => (
              <div
                key={banner.id}
                className="bg-[#f6f6f6] border border-gray-100 p-6 sm:p-8 flex items-center justify-between gap-4 overflow-hidden group relative"
              >
                <div className="space-y-2 z-10 max-w-[58%]">
                  <h3 className="text-lg sm:text-xl leading-snug text-zinc-900">
                    <span className="font-bold block">{banner.titleLine1}</span>
                    <span className="font-bold">{banner.titleLine2Bold} </span>
                    <span className="font-light text-zinc-600">
                      {banner.titleLine2Light}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 pt-1">
                    {banner.pricePrefix}{" "}
                    <span
                      className={`text-base sm:text-lg font-bold ${
                        banner.highlightColor === "green"
                          ? "text-[#4caf50]"
                          : "text-[#d32f2f]"
                      }`}
                    >
                      {banner.priceHighlight}
                    </span>
                  </p>
                  <div className="pt-2">
                    <a
                      href="#san-pham"
                      className="inline-block bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-xs transition-colors"
                    >
                      {banner.ctaText}
                    </a>
                  </div>
                </div>

                <div className="w-36 sm:w-44 h-32 sm:h-36 shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={banner.image}
                    alt={banner.titleLine1}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "SẢN PHẨM" (5x2 GRID WITH FILTER TABS) */}
      <section id="san-pham" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header with Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-7 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
                Sản phẩm &amp; Dịch vụ
              </h2>
              {(selectedBrand || selectedModel || selectedService || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBrand("");
                    setSelectedModel("");
                    setSelectedService("");
                    setSearchQuery("");
                  }}
                  className="text-[11px] text-[#d32f2f] underline font-semibold cursor-pointer"
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-medium">
              {(["Mới nhất", "Phổ biến", "Bán chạy", "Khuyến mãi"] as const).map(
                (tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`pb-1.5 transition-colors cursor-pointer ${
                      activeTab === tab
                        ? "text-zinc-900 font-bold border-b-2 border-zinc-900"
                        : "text-zinc-400 hover:text-zinc-700"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </div>

          {/* 5x2 Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {displayedProducts.slice(0, 10).map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div key={product.id} className="group flex flex-col">
                  {/* Bordered Square Thumbnail Box */}
                  <div className="relative aspect-square border border-gray-100 bg-white p-4 mb-3 flex items-center justify-center overflow-hidden group-hover:border-gray-300 transition-colors">
                    {product.discountBadge && (
                      <span className="absolute top-2.5 left-2.5 z-10 bg-[#4caf50] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs">
                        {product.discountBadge}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Yêu thích"
                      className={`absolute top-2.5 right-2.5 z-10 transition-colors cursor-pointer ${
                        isWishlisted
                          ? "text-[#d32f2f]"
                          : "text-zinc-300 hover:text-[#d32f2f]"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-current" : ""
                        }`}
                      />
                    </button>

                    <img
                      src={product.image}
                      alt={product.title}
                      onClick={() => {
                        setBookingSuccess(false);
                        setSelectedProductModal(product);
                      }}
                      className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                  </div>

                  {/* Product Title & Price below box */}
                  <h3
                    onClick={() => {
                      setBookingSuccess(false);
                      setSelectedProductModal(product);
                    }}
                    className="text-xs font-bold text-zinc-800 group-hover:text-[#d32f2f] transition-colors line-clamp-1 cursor-pointer mb-1"
                  >
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    {product.oldPrice && (
                      <span className="line-through text-zinc-400 text-[11px]">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="font-bold text-zinc-700">
                      {product.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WIDE PROMO BANNER (SHELL MOTOR OILS) */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative bg-[#f3f4f6] border border-gray-200/80 px-6 sm:px-12 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            {/* Left Oil Bottles Image */}
            <div className="w-full md:w-5/12 flex justify-center">
              <div className="relative flex items-end gap-3">
                <img
                  src={data.shellBanner.image}
                  alt={data.shellBanner.title}
                  className="h-40 sm:h-44 w-64 object-cover rounded-sm shadow-md border-2 border-white"
                />
                <div className="bg-[#d32f2f] text-white px-3 py-2 rounded-xs shadow-md -ml-8 mb-2">
                  <span className="text-[10px] font-bold uppercase block">
                    Shell Helix Ultra
                  </span>
                  <span className="text-sm font-black">15W-40 / 5W-30</span>
                </div>
              </div>
            </div>

            {/* Right Centered Offer Copy */}
            <div className="w-full md:w-7/12 text-center space-y-2">
              <p className="text-xs font-bold text-sky-600">
                {data.shellBanner.eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-light tracking-widest text-zinc-800 uppercase">
                {data.shellBanner.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 pb-2">
                {data.shellBanner.subtitlePrefix}{" "}
                <span className="text-[#4caf50] font-bold text-base">
                  {data.shellBanner.discountHighlight}
                </span>{" "}
                {data.shellBanner.subtitleSuffix}
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setBookingSuccess(false);
                    setSelectedProductModal(data.products[8]);
                  }}
                  className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-xs transition-colors cursor-pointer"
                >
                  {data.shellBanner.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "KHUYẾN MÃI GIỚI HẠN" SPLIT DEAL BOX */}
      <section id="khuyen-mai" className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Red-Bordered Deal Card (8 Cols) */}
            <div className="lg:col-span-8 border border-[#ef5350] p-6 sm:p-8 flex flex-col justify-between bg-white">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                  Khuyến mãi giới hạn
                </h3>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <button
                    type="button"
                    onClick={() =>
                      setDealIndex(
                        (prev) =>
                          (prev - 1 + data.featuredDeals.length) %
                          data.featuredDeals.length
                      )
                    }
                    className="hover:text-zinc-800 flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Trước</span>
                  </button>
                  <span>|</span>
                  <button
                    type="button"
                    onClick={() =>
                      setDealIndex(
                        (prev) => (prev + 1) % data.featuredDeals.length
                      )
                    }
                    className="hover:text-zinc-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tiếp theo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Deal Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto">
                <div className="sm:col-span-5 flex items-center justify-center">
                  <img
                    src={currentDeal.image}
                    alt={currentDeal.title}
                    className="w-48 h-48 object-cover rounded-full border-4 border-zinc-100 shadow-md"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    {currentDeal.category}
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-900">
                    {currentDeal.title}
                  </h4>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-sm line-through text-zinc-400">
                      {currentDeal.oldPrice}
                    </span>
                    <span className="text-lg font-bold text-[#d32f2f]">
                      {currentDeal.price}
                    </span>
                  </div>

                  {/* 4 Countdown Boxes */}
                  <div className="flex items-center gap-2.5 pt-2 pb-3">
                    {[
                      { val: currentDeal.countdown.days, label: "DAYS" },
                      { val: currentDeal.countdown.hours, label: "HOURS" },
                      { val: currentDeal.countdown.mins, label: "MINS" },
                      { val: currentDeal.countdown.secs, label: "SECS" },
                    ].map((box, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-11 h-10 bg-zinc-100 border border-gray-200 flex items-center justify-center text-xs font-extrabold text-zinc-800 rounded-xs">
                          {box.val}
                        </div>
                        <span className="text-[9px] font-bold text-zinc-400 uppercase mt-1 block">
                          {box.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setBookingSuccess(false);
                      setSelectedProductModal(data.products[0]);
                    }}
                    className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 rounded-xs transition-colors cursor-pointer"
                  >
                    THÊM VÀO GIỎ HÀNG
                  </button>
                </div>
              </div>
            </div>

            {/* Right Stack of 4 Horizontal Bordered Mini Cards (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3.5">
              {data.sideMiniDeals.map((mini) => (
                <div
                  key={mini.id}
                  onClick={() => {
                    setBookingSuccess(false);
                    setSelectedProductModal(data.products[0]);
                  }}
                  className="border border-gray-200 p-3 flex items-center gap-3.5 hover:border-[#d32f2f] transition-colors cursor-pointer bg-white"
                >
                  <img
                    src={mini.image}
                    alt={mini.title}
                    className="w-14 h-14 object-cover rounded-xs shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-zinc-800 line-clamp-2 leading-snug mb-1">
                      {mini.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="line-through text-zinc-400">
                        {mini.oldPrice}
                      </span>
                      <span className="font-bold text-[#d32f2f]">
                        {mini.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. 3-COLUMN MINI LIST ("Mới nhất", "Bán chạy", "Khuyến mãi") + 4 TRUST BADGES */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* 3-Column Mini List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
            {[
              {
                heading: "Mới nhất",
                items: data.products.slice(0, 3),
              },
              {
                heading: "Bán chạy",
                items: [data.products[3], data.products[1], data.products[7]],
              },
              {
                heading: "Khuyến mãi",
                items: [data.products[8], data.products[0], data.products[9]],
              },
            ].map((col, colIdx) => (
              <div key={colIdx}>
                <h3 className="text-sm font-bold text-zinc-900 mb-5">
                  {col.heading}
                </h3>
                <div className="space-y-4">
                  {col.items.map((item) => (
                    <div
                      key={`${col.heading}-${item.id}`}
                      onClick={() => {
                        setBookingSuccess(false);
                        setSelectedProductModal(item);
                      }}
                      className="flex items-center gap-3.5 group cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-xs border border-gray-100 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-zinc-800 group-hover:text-[#d32f2f] transition-colors mb-1">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs">
                          {item.oldPrice && (
                            <span className="line-through text-zinc-400 text-[11px]">
                              {item.oldPrice}
                            </span>
                          )}
                          <span className="font-bold text-zinc-700">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Red Line-Icon Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-b border-gray-100">
            {data.trustBadges.map((badge) => (
              <div key={badge.id} className="flex items-center gap-3.5">
                <div className="text-[#ef5350] shrink-0">
                  {badge.icon === "truck" && (
                    <Truck className="w-7 h-7 stroke-[1.5]" />
                  )}
                  {badge.icon === "headset" && (
                    <Headphones className="w-7 h-7 stroke-[1.5]" />
                  )}
                  {badge.icon === "refresh" && (
                    <RotateCcw className="w-7 h-7 stroke-[1.5]" />
                  )}
                  {badge.icon === "shield" && (
                    <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-800">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "KHÁM PHÁ TIN TỨC" (3 AUTOMOTIVE BLOG CARDS) */}
      <section id="tin-tuc" className="py-10 pb-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-7">
            Khám phá tin tức
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.news || []).map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-square overflow-hidden bg-zinc-900 mb-3.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  {post.category || "TIN TỨC"}
                </span>
                <h3 className="text-xs sm:text-[13.5px] font-bold text-zinc-900 group-hover:text-[#d32f2f] transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>|</span>
                  <span>Admin</span>
                  <span>|</span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <FileText className="w-3 h-3" />
                    Đọc thêm
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#lien-he"
              className="inline-block bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-[11px] font-bold uppercase tracking-wider px-7 py-2.5 rounded-xs transition-colors"
            >
              TẤT CẢ BÀI VIẾT
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER BAR */}
      <section className="bg-[#f5f5f5] py-10 border-t border-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-1">
              Tin tức mới nhất
            </h3>
            <p className="text-xs text-zinc-500">
              Đăng ký nhận bảng giá khuyến mãi phụ tùng và lịch nhắc bảo dưỡng
              định kỳ miễn phí.
            </p>
          </div>

          {newsletterSubmitted ? (
            <div className="text-xs font-bold text-[#4caf50] bg-white px-5 py-3 border border-green-200">
              Đã đăng ký nhận thông báo ưu đãi từ {data.business.name}!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newsletterEmail.trim()) return;
                setNewsletterSubmitted(true);
              }}
              className="flex w-full md:w-auto max-w-md items-stretch"
            >
              <input
                type="email"
                required
                placeholder="Nhập địa chỉ Email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 sm:w-72 bg-white border border-r-0 border-gray-200 px-4 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#d32f2f]"
              />
              <button
                type="submit"
                className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors cursor-pointer"
              >
                ĐĂNG KÝ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* DARK CARBON 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#222222] text-zinc-400 pt-14">
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            {/* Col 1: Brand + About */}
            <div className="space-y-4">
              <AutoSpotLogo brandName={data.business.name} dark />
              <p className="leading-relaxed text-zinc-400">
                {data.business.aboutText[0]}
              </p>
              <div className="space-y-1.5 text-zinc-300 pt-1">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#d32f2f] shrink-0" />
                  <span>{data.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d32f2f] shrink-0" />
                  <span>{primaryPhone}</span>
                </p>
              </div>
            </div>

            {/* Col 2: Liên kết */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Liên kết</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#san-pham" className="hover:text-white transition-colors">
                    Thông tin giao hàng
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-white transition-colors">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-white transition-colors">
                    Chính sách bảo hành phụ tùng
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-white transition-colors">
                    Thanh toán an toàn
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-white transition-colors">
                    Chính sách hoàn trả 30 ngày
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Danh mục */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Danh mục</h4>
              <ul className="space-y-2.5">
                {data.serviceTypes.slice(1, 6).map((cat) => (
                  <li key={cat}>
                    <a
                      href="#san-pham"
                      onClick={() => setSelectedService(cat)}
                      className="hover:text-white transition-colors"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Xã hội */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4">Xã hội</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#lien-he" className="hover:text-white transition-colors">
                    Đặt lịch bảo dưỡng trực tuyến
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white transition-colors">
                    Cứu hộ giao thông 24/7
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white transition-colors">
                    Cộng đồng Độ xe &amp; Detailing
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white transition-colors">
                    Tra cứu bảo hành điện tử
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white transition-colors">
                    Hỗ trợ kỹ thuật trực tuyến
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-[#1a1a1a] py-4 border-t border-white/5 text-[11px] text-zinc-400">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              © Thiết kế và lập trình bởi{" "}
              <span className="text-white font-bold">TaviWeb</span> •{" "}
              <span className="text-zinc-300">{data.business.name}</span>
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#lien-he" className="hover:text-white">
                Điều khoản &amp; Điều kiện
              </a>
              <a href="#lien-he" className="hover:text-white">
                Chính sách bảo mật
              </a>
              <a href="#lien-he" className="hover:text-white">
                Chính sách giao hàng
              </a>
              <a href="#doi-tac" className="hover:text-white">
                Giới thiệu
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* PRODUCT QUICK-VIEW & SERVICE BOOKING MODAL */}
      {selectedProductModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedProductModal(null)}
        >
          <div
            className="bg-white max-w-lg w-full overflow-hidden shadow-2xl rounded-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#d32f2f]">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#d32f2f]" />
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  Đặt Mua Phụ Tùng / Đặt Lịch Lắp Đặt Tại Xưởng
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d32f2f]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 pb-4 mb-4 border-b border-gray-100">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.title}
                  className="w-20 h-20 object-cover border border-gray-200 shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase text-zinc-400">
                    {selectedProductModal.category}
                  </span>
                  <h4 className="text-base font-bold text-zinc-900">
                    {selectedProductModal.title}
                  </h4>
                  <p className="text-sm font-bold text-[#d32f2f] mt-0.5">
                    {selectedProductModal.price}
                  </p>
                </div>
              </div>

              {bookingSuccess ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#4caf50] mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đã ghi nhận đơn hàng &amp; lịch hẹn!
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Cố vấn dịch vụ của <strong>{data.business.name}</strong> sẽ
                    gọi điện tới số <strong>{bookingForm.phone}</strong> trong
                    10 phút để xác nhận phụ tùng và khoang dịch vụ cho xe của
                    bạn.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProductModal(null)}
                    className="bg-[#d32f2f] text-white text-xs font-bold uppercase px-6 py-2.5"
                  >
                    Đóng
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleBookingSubmit}
                  className="space-y-3 text-xs"
                >
                  <p className="text-zinc-500 leading-relaxed mb-2">
                    {selectedProductModal.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên chủ xe *"
                      value={bookingForm.customerName}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          customerName: e.target.value,
                        })
                      }
                      className="border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#d32f2f]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại *"
                      value={bookingForm.phone}
                      onChange={(e) =>
                        setBookingForm({
                          ...bookingForm,
                          phone: e.target.value,
                        })
                      }
                      className="border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#d32f2f]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Dòng xe / Biển số (VD: Porsche Macan - 51K-888.88)"
                    value={bookingForm.carPlate}
                    onChange={(e) =>
                      setBookingForm({
                        ...bookingForm,
                        carPlate: e.target.value,
                      })
                    }
                    className="w-full border border-gray-200 px-3 py-2.5 focus:outline-none focus:border-[#d32f2f]"
                  />
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProductModal(null)}
                      className="px-4 py-2 text-zinc-500 hover:text-zinc-800 font-semibold"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold uppercase tracking-wider px-6 py-2.5 cursor-pointer"
                    >
                      XÁC NHẬN ĐẶT MUA / LẮP ĐẶT
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
