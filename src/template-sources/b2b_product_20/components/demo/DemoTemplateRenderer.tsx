"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Gift,
  Tag,
  Newspaper,
  Phone,
  RotateCcw,
  Truck,
  CreditCard,
  MapPin,
  Mail,
  CheckCircle2,
  X,
  Menu,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  b2bProduct20DefaultData,
  B2bProduct20Data,
  VienThongAProductItem,
  VienThongACategorySection,
} from "@/template-sources/b2b_product_20/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function VienThongALogo({ brandName }: { brandName: string }) {
  return (
    <a href="#" className="inline-flex items-center gap-2 select-none">
      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-2xs shrink-0">
        <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
          <path
            d="M6 8L18 28L30 8"
            stroke="#e11d48"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 8L18 20L25 8"
            stroke="#1e40af"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-lg sm:text-xl font-black italic tracking-tight text-[#1e3a8a]">
        {brandName}
      </span>
    </a>
  );
}

function ProductCard({
  item,
  onSelect,
  onAddCart,
}: {
  item: VienThongAProductItem;
  onSelect: (p: VienThongAProductItem) => void;
  onAddCart: () => void;
}) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bg-white border border-slate-200/80 p-3 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group"
    >
      <div>
        <div className="relative h-36 flex items-center justify-center mb-2.5 overflow-hidden bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {item.saleBadge && (
            <span className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-[#ef233c] text-white text-[10px] font-bold flex items-center justify-center shadow">
              Sale
            </span>
          )}
        </div>
        <h3 className="text-[11px] font-medium text-slate-600 line-clamp-2 group-hover:text-[#283b7a] min-h-[32px]">
          {item.title}
        </h3>
        <div className="mt-1.5 flex flex-wrap items-baseline gap-1.5">
          <span className="text-xs font-extrabold text-slate-900">
            {item.price}
          </span>
          {item.oldPrice && (
            <span className="text-[10px] text-slate-400 line-through">
              {item.oldPrice}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (item.ctaType === "cart") {
              onAddCart();
            } else {
              onSelect(item);
            }
          }}
          className="border border-[#283b7a] text-[#283b7a] hover:bg-[#283b7a] hover:text-white text-[10px] font-bold uppercase px-3 py-1 transition-colors cursor-pointer"
        >
          {item.ctaType === "cart" ? "THÊM VÀO GIỎ" : "CHỌN MẪU"}
        </button>
      </div>
    </div>
  );
}

function CategoryBlockSection({
  section,
  onSelectProduct,
  onAddCart,
}: {
  section: VienThongACategorySection;
  onSelectProduct: (p: VienThongAProductItem) => void;
  onAddCart: () => void;
}) {
  return (
    <section id={section.id} className="py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navy Ribbon Header */}
        <div className="bg-slate-100 border border-slate-200 flex flex-wrap items-center justify-between mb-3">
          <div className="bg-[#283b7a] text-white px-4 py-2 flex items-center gap-2 font-extrabold text-xs uppercase relative pr-7">
            <span>{section.title}</span>
            <span className="w-5 h-5 rounded-full bg-white text-[#ef233c] flex items-center justify-center text-[10px] font-black">
              ★
            </span>
          </div>
          <div className="px-3 py-1.5 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
            {section.brandLinks.map((b, idx) => (
              <React.Fragment key={b}>
                <a href={`#${section.id}`} className="hover:text-[#283b7a]">
                  {b}
                </a>
                {idx < section.brandLinks.length - 1 && (
                  <span className="text-slate-300">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Top Row: 4-Col Poster + 4 Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">
          <div
            className={`lg:col-span-4 rounded-xs overflow-hidden bg-gradient-to-br ${section.poster.bgClass} p-5 flex flex-col justify-between relative min-h-[260px] shadow-xs`}
          >
            <div className="z-10 space-y-1.5">
              <div className="text-xs font-extrabold uppercase tracking-wide opacity-90">
                {section.poster.eyebrow}
              </div>
              <div className="text-xl sm:text-2xl font-black leading-tight">
                {section.poster.title}
              </div>
              <div className="inline-block bg-amber-400 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-xs">
                {section.poster.highlight}
              </div>
              <p className="text-[11px] opacity-85">{section.poster.subtext}</p>
            </div>
            <img
              src={section.poster.image}
              alt={section.poster.title}
              className="mt-3 w-full h-36 object-cover rounded shadow-sm"
            />
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {section.topRowProducts.map((p) => (
              <ProductCard
                key={p.id}
                item={p}
                onSelect={onSelectProduct}
                onAddCart={onAddCart}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row: 6 Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {section.bottomRowProducts.map((p) => (
            <ProductCard
              key={p.id}
              item={p}
              onSelect={onSelectProduct}
              onAddCart={onAddCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: B2bProduct20Data = adaptClonedTemplateData(
    b2bProduct20DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProductTab, setActiveProductTab] = useState<"NEW" | "BEST">(
    "NEW"
  );
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] =
    useState<VienThongAProductItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSaved, setNewsletterSaved] = useState(false);

  const displayedTopProducts =
    activeProductTab === "NEW"
      ? data.newAndBestProducts
      : [...data.newAndBestProducts].reverse();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSaved(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#283b7a] selection:text-white overflow-x-hidden">
      {/* 1. SKY-BLUE TOP HEADER BAR */}
      <header className="sticky top-0 z-40 bg-white shadow-xs">
        <div className="bg-[#a2d9f7] py-2.5 border-b border-sky-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <VienThongALogo brandName={data.business.name} />

            {/* Search Bar */}
            <div className="flex-1 max-w-lg hidden sm:flex items-center bg-white rounded-xs overflow-hidden shadow-2xs border border-sky-300">
              <select className="bg-slate-50 border-r border-slate-200 text-xs text-slate-600 px-3 py-2 focus:outline-none">
                <option value="all">Tất cả</option>
                <option value="phone">Điện thoại</option>
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="accessory">Phụ kiện</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập thông tin cần tìm..."
                className="w-full px-3 py-1.5 text-xs text-slate-700 focus:outline-none"
              />
              <button
                type="button"
                aria-label="Tìm"
                className="px-3 py-2 text-slate-600 hover:text-[#283b7a]"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Right Cart */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCartCount((c) => c + 1)}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#283b7a] cursor-pointer"
              >
                <span>GIỎ HÀNG / {cartCount * 90}.000 ₫</span>
                <span className="relative w-7 h-7 rounded bg-[#283b7a] text-white flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#ef233c] text-white text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-1.5 rounded bg-white text-slate-800"
                aria-label="Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 7 Category Icons Bar */}
        <div className="bg-white border-b border-slate-200 py-2">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between gap-4 overflow-x-auto">
            {data.topNavIcons.map((nav) => {
              const IconComp =
                nav.iconType === "phone"
                  ? Smartphone
                  : nav.iconType === "laptop"
                  ? Laptop
                  : nav.iconType === "tablet"
                  ? Tablet
                  : nav.iconType === "accessory"
                  ? Headphones
                  : nav.iconType === "promo"
                  ? Gift
                  : nav.iconType === "clearance"
                  ? Tag
                  : Newspaper;

              const targetHref =
                nav.iconType === "phone"
                  ? "#dien-thoai"
                  : nav.iconType === "laptop"
                  ? "#may-tinh-xach-tay"
                  : nav.iconType === "tablet"
                  ? "#may-tinh-bang"
                  : nav.iconType === "accessory"
                  ? "#linh-phu-kien"
                  : nav.iconType === "news"
                  ? "#tin-tuc"
                  : "#san-pham-moi";

              return (
                <a
                  key={nav.id}
                  href={targetHref}
                  className="flex flex-col items-center gap-1 text-slate-700 hover:text-[#283b7a] shrink-0 group px-2"
                >
                  <IconComp className="w-4 h-4 text-slate-600 group-hover:text-[#ef233c] transition-colors" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wide">
                    {nav.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 p-3 space-y-2 text-xs font-bold">
            <a href="#dien-thoai" className="block py-1">
              ĐIỆN THOẠI
            </a>
            <a href="#may-tinh-xach-tay" className="block py-1">
              LAPTOP
            </a>
            <a href="#may-tinh-bang" className="block py-1">
              TABLET
            </a>
            <a href="#linh-phu-kien" className="block py-1">
              PHỤ KIỆN
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER GRID (8-Col Left Samsung Note8 + 4-Col Right 2 Stacked Banners) */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left 8-Col Main Promo */}
            <div className="lg:col-span-8 flex flex-col border border-slate-200">
              <div className="relative bg-gradient-to-r from-[#0c4a9e] via-[#136f63] to-[#1e3a8a] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 flex-1 overflow-hidden">
                <div className="space-y-2.5 z-10 max-w-md">
                  <span className="inline-block bg-amber-400 text-slate-950 text-[11px] font-black uppercase px-3 py-0.5 rounded-full">
                    {data.hero.eyebrow}
                  </span>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight text-amber-300">
                    {data.hero.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <div className="bg-amber-400 text-slate-950 px-3 py-1.5 rounded font-black text-xs">
                      Trả góp <span className="text-lg">0%</span>
                    </div>
                    <div className="bg-white/15 backdrop-blur-xs border border-white/30 px-3 py-1.5 rounded text-xs font-bold">
                      Tặng Gear VR + Trợ giá đến 8.000.000đ
                    </div>
                  </div>
                  <p className="text-[11px] text-sky-100 pt-1">
                    VÒNG QUAY PMH PK 100.000đ – 1 TRIỆU
                  </p>
                </div>

                <img
                  src={data.hero.backgroundImage}
                  alt={data.hero.title}
                  className="w-44 h-44 object-cover rounded-xl shadow-2xl border-2 border-white/20 shrink-0"
                />
              </div>
              <div className="bg-white py-2.5 px-4 text-center text-xs font-semibold text-slate-700 border-t border-slate-200">
                {data.hero.subtitle}
              </div>
            </div>

            {/* Right 4-Col 2 Stacked Banners */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Top Red Banner */}
              <div className="flex-1 bg-gradient-to-r from-[#b91c1c] to-[#ef233c] text-white p-5 rounded-xs flex items-center justify-between gap-3 relative overflow-hidden">
                <div className="space-y-1 z-10">
                  <div className="text-lg font-black uppercase text-amber-300 leading-none">
                    {data.heroSideBanners.topBanner.title}
                  </div>
                  <div className="text-sm font-extrabold uppercase">
                    {data.heroSideBanners.topBanner.subtitle}
                  </div>
                  <div className="text-[10px] text-red-100">
                    {data.heroSideBanners.topBanner.note}
                  </div>
                </div>
                <img
                  src={data.heroSideBanners.topBanner.image}
                  alt="Trả góp 0%"
                  className="w-20 h-20 object-cover rounded-lg shrink-0"
                />
              </div>

              {/* Bottom Blue Banner */}
              <div className="flex-1 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white p-5 rounded-xs flex items-center justify-between gap-3 relative overflow-hidden">
                <div className="space-y-1 z-10">
                  <div className="text-xs font-extrabold uppercase text-amber-300">
                    {data.heroSideBanners.bottomBanner.title}
                  </div>
                  <div className="text-xl font-black text-amber-400 leading-none">
                    {data.heroSideBanners.bottomBanner.highlight}
                  </div>
                  <span className="inline-block bg-sky-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-xs">
                    {data.heroSideBanners.bottomBanner.badge}
                  </span>
                </div>
                <img
                  src={data.heroSideBanners.bottomBanner.image}
                  alt="Sắm Samsung"
                  className="w-20 h-20 object-cover rounded-lg shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SẢN PHẨM MỚI / SẢN PHẨM BÁN CHẠY (8-Col) + TIN TỨC (4-Col) */}
      <section id="san-pham-moi" className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left 8-Col Product Tabs & 4x2 Grid */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-6 border-b border-slate-200 pb-2 mb-3">
                <button
                  type="button"
                  onClick={() => setActiveProductTab("NEW")}
                  className={`text-xs sm:text-sm font-extrabold uppercase cursor-pointer ${
                    activeProductTab === "NEW"
                      ? "text-slate-900 border-b-2 border-[#283b7a] pb-2 -mb-2.5"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  SẢN PHẨM MỚI
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProductTab("BEST")}
                  className={`text-xs sm:text-sm font-extrabold uppercase cursor-pointer ${
                    activeProductTab === "BEST"
                      ? "text-slate-900 border-b-2 border-[#283b7a] pb-2 -mb-2.5"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  SẢN PHẨM BÁN CHẠY
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {displayedTopProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    item={p}
                    onSelect={setSelectedProduct}
                    onAddCart={() => setCartCount((c) => c + 1)}
                  />
                ))}
              </div>
            </div>

            {/* Right 4-Col TIN TỨC */}
            <div id="tin-tuc" className="lg:col-span-4">
              <div className="border-b-2 border-[#283b7a] mb-3">
                <span className="inline-block bg-[#283b7a] text-white text-xs font-extrabold uppercase px-4 py-1.5">
                  ☰ TIN TỨC
                </span>
              </div>

              <div className="border border-slate-200 bg-white p-3 space-y-3">
                {data.news && data.news[0] && (
                  <div className="relative rounded-xs overflow-hidden">
                    <img
                      src={data.news[0].image}
                      alt={data.news[0].title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="bg-slate-200/90 p-2.5 text-xs font-semibold text-slate-800">
                      {data.news[0].title}
                    </div>
                  </div>
                )}

                <div className="space-y-2.5 divide-y divide-slate-100">
                  {(data.news || []).map((n) => (
                    <a
                      key={n.id}
                      href="#tin-tuc"
                      className="pt-2.5 first:pt-0 flex items-start gap-2.5 group"
                    >
                      <img
                        src={n.image}
                        alt={n.title}
                        className="w-16 h-11 object-cover shrink-0 rounded-2xs"
                      />
                      <span className="text-[11px] text-slate-700 group-hover:text-[#283b7a] line-clamp-2 leading-snug">
                        {n.title}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="text-right pt-1">
                  <a
                    href="#lien-he"
                    className="text-[11px] font-semibold text-slate-500 hover:text-[#283b7a]"
                  >
                    Xem thêm tin tức &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ĐIỆN THOẠI (Tall Left Poster + 4x2 Smartphone Grid) */}
      <section id="dien-thoai" className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 border border-slate-200 flex flex-wrap items-center justify-between mb-3">
            <div className="bg-[#283b7a] text-white px-4 py-2 flex items-center gap-2 font-extrabold text-xs uppercase">
              <span>{data.phoneSection.title}</span>
              <Phone className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="px-3 py-1.5 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
              {data.phoneSection.brandLinks.map((b, idx) => (
                <React.Fragment key={b}>
                  <a href="#dien-thoai" className="hover:text-[#283b7a]">
                    {b}
                  </a>
                  {idx < data.phoneSection.brandLinks.length - 1 && (
                    <span className="text-slate-300">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Left Tall Poster */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#155ca2] via-[#5ba4df] to-[#d9effc] rounded-xs p-6 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="text-white space-y-1">
                <h3 className="text-2xl font-black uppercase tracking-wide">
                  {data.phoneSection.poster.title}
                </h3>
                <p className="text-xs text-sky-100">
                  {data.phoneSection.poster.subtitle}
                </p>
              </div>

              <div className="my-4 flex justify-center">
                <img
                  src={data.phoneSection.poster.image}
                  alt={data.phoneSection.poster.title}
                  className="w-52 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/30"
                />
              </div>

              <div className="bg-white/85 backdrop-blur-xs rounded-lg p-3 text-slate-900">
                <div className="text-xs font-black text-[#155ca2]">
                  {data.phoneSection.poster.promoText}
                </div>
              </div>
            </div>

            {/* Right 4x2 Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {data.phoneSection.products.map((p) => (
                <ProductCard
                  key={p.id}
                  item={p}
                  onSelect={setSelectedProduct}
                  onAddCart={() => setCartCount((c) => c + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MÁY TÍNH BẢNG */}
      <CategoryBlockSection
        section={data.tabletSection}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 6. MÁY TÍNH XÁCH TAY */}
      <CategoryBlockSection
        section={data.laptopSection}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 7. LINH PHỤ KIỆN */}
      <CategoryBlockSection
        section={data.accessorySection}
        onSelectProduct={setSelectedProduct}
        onAddCart={() => setCartCount((c) => c + 1)}
      />

      {/* 8. BOTTOM HORIZONTAL ACCESSORY BANNER */}
      <section className="py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#134e5e] via-[#1d4ed8] to-[#1e1b4b] text-white rounded-xs p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-sm sm:text-base font-extrabold">
                {data.bottomAccessoryBanner.title}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="bg-[#ef233c] text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                  {data.bottomAccessoryBanner.discountLabel}
                </span>
                <span className="text-xs line-through text-sky-200">
                  {data.bottomAccessoryBanner.oldPrice}
                </span>
                <span className="text-lg font-black text-amber-300">
                  {data.bottomAccessoryBanner.price}
                </span>
              </div>
            </div>

            <div className="text-lg sm:text-2xl font-black uppercase tracking-wide text-pink-300 text-center">
              {data.bottomAccessoryBanner.highlight}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DARK GRAY GUARANTEE STRIP + WINTER FOOTER */}
      <footer id="lien-he" className="mt-6">
        <div className="bg-[#525866] text-white py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs font-bold uppercase">
            <div className="flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4 text-sky-300" />
              <span>ĐỔI TRẢ HÀNG TRONG VÒNG 30 NGÀY</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-sky-300" />
              <span>GIAO HÀNG TOÀN QUỐC</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4 text-sky-300" />
              <span>THANH TOÁN KHI NHẬN HÀNG</span>
            </div>
          </div>
        </div>

        {/* Main Footer Body */}
        <div className="bg-[#ebf3f9] text-slate-600 py-10 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
              <div className="lg:col-span-2 space-y-2">
                <h4 className="font-extrabold uppercase text-slate-800">
                  VỀ {data.business.name}
                </h4>
                <ul className="space-y-1.5 text-[11px]">
                  <li>Tổng quan</li>
                  <li>Giới thiệu</li>
                  <li>Dự án doanh nghiệp</li>
                  <li>Tin công nghệ</li>
                  <li>Đặt hàng sỉ</li>
                </ul>
              </div>

              <div className="lg:col-span-2 space-y-2">
                <h4 className="font-extrabold uppercase text-slate-800">
                  SẢN PHẨM
                </h4>
                <ul className="space-y-1.5 text-[11px]">
                  <li>Điện thoại</li>
                  <li>Laptop</li>
                  <li>Tablet</li>
                  <li>Phụ kiện</li>
                  <li>Khuyến mãi</li>
                  <li>Xả hàng</li>
                </ul>
              </div>

              <div className="lg:col-span-3 space-y-2">
                <h4 className="font-extrabold uppercase text-slate-800">
                  CHÍNH SÁCH &amp; HỖ TRỢ
                </h4>
                <ul className="space-y-1.5 text-[11px]">
                  <li>Hướng dẫn mua hàng</li>
                  <li>Hướng dẫn mua trả góp</li>
                  <li>Chính sách giao hàng</li>
                  <li>Quy chế hoạt động</li>
                  <li>Chính sách bảo mật thông tin</li>
                  <li>Hóa đơn điện tử</li>
                </ul>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white/80 p-3.5 rounded border border-sky-200">
                  <div className="text-[11px] font-semibold text-slate-700 mb-2">
                    Đăng ký nhận tin khuyến mãi hàng tuần từ{" "}
                    {data.business.name}
                  </div>
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Địa chỉ email"
                      className="w-full bg-white border border-slate-200 px-3 py-1.5 text-xs focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#283b7a] text-white text-xs font-bold uppercase px-4 py-1.5 shrink-0 cursor-pointer"
                    >
                      GỬI
                    </button>
                  </form>
                  {newsletterSaved && (
                    <p className="text-[11px] font-bold text-emerald-600 mt-1">
                      Đăng ký thành công!
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <h4 className="font-extrabold uppercase text-slate-800">
                    LIÊN HỆ
                  </h4>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#283b7a]" />
                    <span>{data.business.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#283b7a]" />
                    <a
                      href={`tel:${data.business.phone[0]}`}
                      className="font-bold text-[#283b7a]"
                    >
                      {data.business.phone[0]}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#283b7a]" />
                    <span>{data.business.email[0]}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row: Support Hotlines */}
            <div className="pt-6 border-t border-sky-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <VienThongALogo brandName={data.business.name} />
                <p className="text-[11px] text-slate-500 mt-2">
                  {data.business.aboutText[0]}
                </p>
              </div>
              <div>
                <h4 className="font-extrabold uppercase text-slate-800 mb-2">
                  DỊCH VỤ
                </h4>
                <ul className="space-y-1 text-[11px] text-sky-700">
                  <li>Chăm sóc khách hàng</li>
                  <li>Bảo hiểm điện thoại</li>
                  <li>Thanh toán</li>
                  <li>Sửa chữa – Bảo hành</li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#283b7a] text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#283b7a]">
                      {data.business.phone[0]}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      KHIẾU NẠI &amp; CHĂM SÓC KHÁCH HÀNG (7h - 21h30)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#283b7a] text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#283b7a]">
                      {data.business.phone[1] || data.business.phone[0]}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      TƯ VẤN &amp; MUA HÀNG ONLINE / TRẢ GÓP (7h - 21h30)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tag Cloud */}
        <div className="bg-white py-5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-400">
            {data.footerTags.map((tag, i) => (
              <a
                key={i}
                href="#san-pham-moi"
                className="hover:text-[#283b7a] transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-[#525866] text-white py-3 text-center text-[11px]">
          © Bản quyền thuộc về <strong>{data.business.name}</strong>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl">
            <div className="relative h-52 bg-slate-100 flex items-center justify-center p-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="max-h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-[#283b7a]">
                Thương hiệu: {selectedProduct.brand}
              </span>
              <h3 className="mt-1 text-base font-extrabold text-slate-900">
                {selectedProduct.title}
              </h3>
              <div className="mt-2 text-lg font-extrabold text-[#ef233c]">
                {selectedProduct.price}
              </div>
              <div className="mt-3 space-y-1.5">
                {selectedProduct.specs.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-600"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#283b7a] shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="text-xs font-bold text-slate-500 px-4 py-2"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCartCount((c) => c + 1);
                    setSelectedProduct(null);
                  }}
                  className="bg-[#283b7a] text-white text-xs font-bold uppercase px-5 py-2.5 cursor-pointer"
                >
                  Đặt Mua Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
