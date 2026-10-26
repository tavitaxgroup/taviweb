"use client";

import React, { useState } from "react";
import {
  Phone,
  Clock,
  Search,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  MapPin,
  Mail,
  Send,
  Disc,
  CheckCircle2,
  X,
  Menu,
  TreePine
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat10DefaultData,
  type NoiThat10TemplateData,
  type NoiThat10ProductItem
} from "@/template-sources/noi_that_10/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: NoiThat10TemplateData = adaptClonedTemplateData(
    noiThat10DefaultData,
    incomingData
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("tat-ca");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] =
    useState<NoiThat10ProductItem | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterDone, setNewsletterDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "0126 - 922 - 0162";
  const primaryEmail = data.business.email?.[0] || "info@themona.global";
  const brandName = data.business.name || "MONA WOODEN";

  const allProducts = data.products || [];
  const sidebarBestsellers = allProducts.filter(
    (p) => p.sectionKey === "sidebar-bestseller"
  );
  const sidebarDiscountProduct =
    sidebarBestsellers.find((p) => p.discountBadge) || sidebarBestsellers[1];
  const featuredGridProducts = allProducts.filter(
    (p) => p.sectionKey === "tieu-bieu"
  );
  const fengShuiStatues = allProducts.filter(
    (p) => p.sectionKey === "tuong-phong-thuy"
  );
  const solidSlabProducts = allProducts.filter(
    (p) => p.sectionKey === "go-lien-tam"
  );

  const filteredSearchProducts = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const renderDualPromoBanners = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {(data.promoBanners || []).map((banner) => (
        <div
          key={banner.id}
          className="group bg-[#f2f2f2] p-6 sm:p-7 flex items-center justify-between gap-4 min-h-[160px] overflow-hidden border border-[#eaeaea]"
        >
          <div className="space-y-3 z-10">
            <h3 className="text-base sm:text-lg font-black text-[#111111] uppercase leading-tight tracking-wide">
              {banner.line1}
              <br />
              {banner.line2}
            </h3>
            <a
              href="#san-pham-tieu-bieu"
              className="inline-flex items-center gap-1.5 border border-[#444444] hover:border-[#26b9d9] hover:bg-[#26b9d9] hover:text-white text-[#222222] text-[10px] font-extrabold uppercase px-3.5 py-1.5 transition-colors"
            >
              <span>{banner.ctaText}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="w-32 h-28 sm:w-40 sm:h-32 overflow-hidden rounded-xs shrink-0">
            <img
              src={banner.image}
              alt={`${banner.line1} ${banner.line2}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#26b9d9] selection:text-white">
      {/* 1. TOP DARK SLATE UTILITY BAR (#243238) */}
      <div
        id="trang-chu"
        className="bg-[#243238] text-white/85 text-[11px] py-2 px-4"
      >
        <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#26b9d9] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#26b9d9]" />
              <span>{primaryPhone}</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-white/75">
              <Clock className="w-3.5 h-3.5 text-[#26b9d9]" />
              <span>
                {data.business.workingHours || "9h - 18h : Thứ 2 - Thứ 6"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#lien-he"
              className="hover:text-[#26b9d9] transition-colors"
            >
              Đăng nhập / Đăng ký
            </a>
            <span className="text-white/25">|</span>
            <div className="flex items-center gap-2.5 text-white/80">
              <a href="#lien-he" className="hover:text-[#26b9d9] font-bold">
                f
              </a>
              <a href="#lien-he" className="hover:text-[#26b9d9] font-bold">
                IG
              </a>
              <a href="#lien-he" className="hover:text-[#26b9d9] font-bold">
                𝕏
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER + NAVIGATION */}
      <header className="bg-white border-b border-[#eeeeee]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-6 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#f0f0f0]">
            {/* Left Logo: MONA WOODEN with Cyan Wood Ring */}
            <a
              href="#trang-chu"
              className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tight text-[#2b2b2b] shrink-0"
            >
              {data.business.logo ? (
                <img
                  src={data.business.logo}
                  alt={brandName}
                  className="h-11 w-auto object-contain"
                />
              ) : (
                <div className="flex items-center gap-1.5">
                  <div className="leading-none text-right">
                    <span className="block text-lg font-black tracking-wider">
                      M
                    </span>
                    <span className="block text-lg font-black tracking-wider">
                      W
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#26b9d9] text-white flex items-center justify-center shadow-xs">
                    <Disc className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="leading-none text-left">
                    <span className="block text-lg font-black tracking-wider">
                      {brandName.split(" ")[0] || "MONA"}
                    </span>
                    <span className="block text-lg font-black tracking-wider text-[#26b9d9]">
                      {brandName.split(" ").slice(1).join(" ") || "WOODEN"}
                    </span>
                  </div>
                </div>
              )}
            </a>

            {/* Center Category Select + Search Input + Cyan Button */}
            <div className="flex-1 max-w-[520px] flex items-center border border-[#e2e2e2] bg-[#f9f9f9]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Chọn danh mục"
                className="bg-transparent text-xs text-[#555555] px-3 py-2.5 border-r border-[#e2e2e2] focus:outline-none hidden sm:block"
              >
                <option value="tat-ca">Tất cả danh mục</option>
                <option value="tieu-bieu">Sản phẩm tiêu biểu</option>
                <option value="tuong-phong-thuy">Tượng gỗ phong thủy</option>
                <option value="go-lien-tam">Gỗ liền tấm</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                className="flex-1 bg-transparent px-3.5 py-2.5 text-xs text-[#222222] focus:outline-none"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="bg-[#26b9d9] hover:bg-[#1da1be] text-white px-4 py-2.5 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Right Shopping Cart Status */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (allProducts[0]) {
                    setSelectedProduct(allProducts[0]);
                    setOrderSuccess(false);
                  }
                }}
                className="flex items-center gap-2.5 text-xs font-bold text-[#444444] hover:text-[#26b9d9] transition-colors"
              >
                <span>GIỎ HÀNG / {cartCount > 0 ? `${cartCount} SP` : "0 ₫"}</span>
                <span className="w-8 h-8 border-2 border-[#26b9d9] text-[#26b9d9] flex items-center justify-center font-extrabold text-xs">
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

          {/* Centered Uppercase Navigation Bar */}
          <nav className="hidden md:flex items-center justify-center gap-7 pt-4 text-xs font-extrabold uppercase tracking-wider text-[#222222]">
            <a
              href="#trang-chu"
              className="text-[#888888] hover:text-[#26b9d9] transition-colors"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#26b9d9] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham-tieu-bieu"
              className="hover:text-[#26b9d9] transition-colors"
            >
              SẢN PHẨM
            </a>
            <a
              href="#tuong-go-phong-thuy"
              className="hover:text-[#26b9d9] transition-colors"
            >
              TƯỢNG PHONG THỦY
            </a>
            <a
              href="#go-lien-tam"
              className="hover:text-[#26b9d9] transition-colors"
            >
              GỖ LIỀN TẤM
            </a>
            <a
              href="#bao-hanh"
              className="hover:text-[#26b9d9] transition-colors"
            >
              BẢO HÀNH
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#26b9d9] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-3 space-y-2 text-xs font-bold uppercase">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-[#26b9d9]"
              >
                TRANG CHỦ
              </a>
              <a
                href="#san-pham-tieu-bieu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                SẢN PHẨM TIÊU BIỂU
              </a>
              <a
                href="#tuong-go-phong-thuy"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                TƯỢNG GỖ PHONG THỦY
              </a>
              <a
                href="#go-lien-tam"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                GỖ LIỀN TẤM
              </a>
              <a
                href="#lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5"
              >
                LIÊN HỆ
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Instant Search Results */}
      {filteredSearchProducts && (
        <div className="bg-[#f0fafe] border-b border-[#26b9d9]/30 py-5 px-4">
          <div className="max-w-[1180px] mx-auto">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-[#222222]">
                Tìm thấy {filteredSearchProducts.length} tác phẩm cho &ldquo;
                {searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-[#26b9d9] hover:underline"
              >
                Xóa tìm kiếm
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {filteredSearchProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedProduct(item);
                    setOrderSuccess(false);
                  }}
                  className="bg-white p-3 border border-[#e5e5e5] cursor-pointer hover:border-[#26b9d9]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover mb-2"
                  />
                  <h4 className="text-xs font-semibold line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-[#26b9d9]">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. HERO BANNER (Centered Overlay on Bright Wooden Craft Scene) */}
      <section className="py-5 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="relative h-[320px] sm:h-[420px] bg-[#eaeaea] overflow-hidden flex items-center justify-center text-center">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-white/45" />

            <div className="relative z-10 max-w-2xl px-6">
              <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#222222] mb-2">
                {data.hero.eyebrow || "VẺ ĐẸP SANG TRỌNG"}
              </p>
              <h1 className="text-2xl sm:text-5xl font-black uppercase text-[#1c242b] tracking-tight mb-4">
                {data.hero.title}
              </h1>
              <div className="w-40 h-0.5 bg-[#26b9d9] mx-auto mb-6" />

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={data.hero.ctaLink || "#san-pham-tieu-bieu"}
                  className="bg-[#333333] hover:bg-[#111111] text-white text-xs font-extrabold uppercase px-6 py-2.5 rounded-xs transition-colors"
                >
                  {data.hero.ctaText}
                </a>
                {data.hero.secondaryCtaText && (
                  <a
                    href={data.hero.secondaryCtaLink || "#tuong-go-phong-thuy"}
                    className="bg-[#26b9d9] hover:bg-[#1da1be] text-white text-xs font-extrabold uppercase px-6 py-2.5 rounded-xs transition-colors"
                  >
                    {data.hero.secondaryCtaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN 2-COLUMN LAYOUT (LEFT SIDEBAR + RIGHT MAIN CONTENT) */}
      <section id="san-pham-tieu-bieu" className="py-8 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            {/* LEFT SIDEBAR (3 Cols) */}
            <aside className="lg:col-span-3 space-y-7">
              {/* Widget 1: BÁN CHẠY */}
              <div className="border border-[#eaeaea]">
                <div className="bg-[#2c2c2c] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-3">
                  BÁN CHẠY
                </div>
                <div className="divide-y divide-[#efefef] p-3">
                  {sidebarBestsellers.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedProduct(item);
                        setOrderSuccess(false);
                      }}
                      className="py-2.5 first:pt-1 last:pb-1 flex items-center gap-3 cursor-pointer group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover shrink-0 border border-[#eeeeee]"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs text-[#444444] group-hover:text-[#26b9d9] transition-colors truncate mb-1">
                          {item.title}
                        </h4>
                        {item.oldPrice && (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-[#999999] line-through">
                              {item.oldPrice}
                            </span>
                            {item.discountBadge && (
                              <span className="bg-[#26b9d9] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs">
                                {item.discountBadge}
                              </span>
                            )}
                          </div>
                        )}
                        <p className="text-xs font-extrabold text-[#222222]">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 2: CYAN MEGA SALE BANNER */}
              <div className="bg-[#19b5d8] p-4 text-white text-center">
                <div className="border border-white/60 py-8 px-4">
                  <div className="flex items-center justify-center gap-2 text-[11px] font-extrabold uppercase tracking-widest mb-2">
                    <span className="w-5 h-px bg-white/70" />
                    <span>SIÊU KHUYẾN MÃI</span>
                    <span className="w-5 h-px bg-white/70" />
                  </div>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-xs font-bold uppercase">
                      GIẢM ĐẾN
                    </span>
                    <span className="text-4xl font-black leading-none">
                      {data.sidebarMegaSalePercent || "29%"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Widget 3: GIẢM GIÁ */}
              {sidebarDiscountProduct && (
                <div className="border border-[#eaeaea]">
                  <div className="bg-[#2c2c2c] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-3">
                    GIẢM GIÁ
                  </div>
                  <div
                    onClick={() => {
                      setSelectedProduct(sidebarDiscountProduct);
                      setOrderSuccess(false);
                    }}
                    className="p-4 bg-[#f5f5f5] cursor-pointer group"
                  >
                    <div className="bg-white p-3 border border-[#e8e8e8] text-center">
                      <div className="relative aspect-[3/4] overflow-hidden mb-3">
                        <img
                          src={sidebarDiscountProduct.image}
                          alt={sidebarDiscountProduct.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {sidebarDiscountProduct.discountBadge && (
                          <span className="absolute top-2.5 left-2.5 bg-[#26b9d9] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs">
                            {sidebarDiscountProduct.discountBadge}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-medium text-[#444444] group-hover:text-[#26b9d9] line-clamp-1 mb-1">
                        {sidebarDiscountProduct.title}
                      </h4>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        {sidebarDiscountProduct.oldPrice && (
                          <span className="text-[#999999] line-through text-[11px]">
                            {sidebarDiscountProduct.oldPrice}
                          </span>
                        )}
                        <span className="font-extrabold text-[#222222]">
                          {sidebarDiscountProduct.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </aside>

            {/* RIGHT MAIN CONTENT (9 Cols) */}
            <div className="lg:col-span-9 space-y-8">
              {/* Top 2 Promo Banners */}
              {renderDualPromoBanners()}

              {/* Section: SẢN PHẨM TIÊU BIỂU */}
              <div>
                <div className="mb-6">
                  <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#222222] mb-1">
                    SẢN PHẨM TIÊU BIỂU
                  </h2>
                  <p className="text-xs text-[#777777]">
                    {data.featuredSubtitle}
                  </p>
                </div>

                {/* 3x3 Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {featuredGridProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product);
                        setOrderSuccess(false);
                      }}
                      className="group cursor-pointer text-center"
                    >
                      <div className="relative aspect-square bg-[#f7f7f7] border border-[#eeeeee] overflow-hidden mb-3">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#243238]/90 text-white text-[11px] font-bold uppercase py-2">
                          Xem chi tiết & Đặt mua
                        </div>
                      </div>
                      <h3 className="text-xs text-[#555555] group-hover:text-[#26b9d9] transition-colors line-clamp-1 mb-1">
                        {product.title}
                      </h3>
                      <p className="text-xs font-extrabold text-[#222222]">
                        {product.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH DUAL PROMO BANNERS */}
      <section className="py-8 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 border-t border-[#f0f0f0] pt-8">
          {renderDualPromoBanners()}
        </div>
      </section>

      {/* 6. FULL-WIDTH SECTION: TƯỢNG GỖ PHONG THỦY (5 COLUMNS) */}
      <section id="tuong-go-phong-thuy" className="py-10 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#222222] mb-1">
              TƯỢNG GỖ PHONG THỦY
            </h2>
            <p className="text-xs text-[#777777]">{data.statuesSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {fengShuiStatues.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedProduct(item);
                  setOrderSuccess(false);
                }}
                className="group cursor-pointer text-center"
              >
                <div className="aspect-square bg-[#f7f7f7] border border-[#eeeeee] overflow-hidden mb-2.5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs text-[#555555] group-hover:text-[#26b9d9] transition-colors line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-extrabold text-[#222222]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH SECTION: GỖ LIỀN TẤM (5 COLUMNS) */}
      <section id="go-lien-tam" className="py-10 pb-16 bg-white">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-base sm:text-lg font-extrabold uppercase text-[#222222] mb-1">
              GỖ LIỀN TẤM
            </h2>
            <p className="text-xs text-[#777777]">{data.solidSlabsSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {solidSlabProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedProduct(item);
                  setOrderSuccess(false);
                }}
                className="group cursor-pointer text-center"
              >
                <div className="relative aspect-[4/3] bg-[#f7f7f7] border border-[#eeeeee] overflow-hidden mb-2.5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.discountBadge && (
                    <span className="absolute top-2.5 left-2.5 bg-[#26b9d9] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs">
                      {item.discountBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-xs text-[#555555] group-hover:text-[#26b9d9] transition-colors line-clamp-1 mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs font-extrabold text-[#222222]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK CHARCOAL FOOTER WITH CYAN DIAMOND SCROLL-TO-TOP */}
      <footer
        id="lien-he"
        className="relative bg-[#313537] text-white/80 text-xs pt-14"
      >
        {/* Center Cyan Diamond Scroll-to-Top Button on Top Border */}
        <a
          href="#trang-chu"
          aria-label="Lên đầu trang"
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#26b9d9] hover:bg-[#1da1be] rotate-45 flex items-center justify-center text-white shadow-lg transition-colors"
        >
          <TreePine className="w-4 h-4 -rotate-45" />
        </a>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Col 1: THÔNG TIN LIÊN HỆ */}
            <div className="md:col-span-5 space-y-3">
              <h3 className="text-sm font-extrabold uppercase text-white tracking-wider mb-4">
                THÔNG TIN LIÊN HỆ
              </h3>
              <p className="flex items-start gap-2.5 text-white/75 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#26b9d9] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-white/75">
                <Phone className="w-4 h-4 text-[#26b9d9] shrink-0" />
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="hover:text-[#26b9d9]"
                >
                  {primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-white/75">
                <Mail className="w-4 h-4 text-[#26b9d9] shrink-0" />
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hover:text-[#26b9d9]"
                >
                  {primaryEmail}
                </a>
              </p>
            </div>

            {/* Col 2: MENU */}
            <div id="bao-hanh" className="md:col-span-4">
              <h3 className="text-sm font-extrabold uppercase text-white tracking-wider mb-4">
                DANH MỤC MENU
              </h3>
              <div className="grid grid-cols-2 gap-2.5 text-white/75">
                <a
                  href="#gioi-thieu"
                  className="inline-flex items-center gap-1 hover:text-[#26b9d9]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#26b9d9]" />
                  <span>Giới thiệu</span>
                </a>
                <a
                  href="#tuong-go-phong-thuy"
                  className="inline-flex items-center gap-1 hover:text-[#26b9d9]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#26b9d9]" />
                  <span>Tượng phong thủy</span>
                </a>
                <a
                  href="#san-pham-tieu-bieu"
                  className="inline-flex items-center gap-1 hover:text-[#26b9d9]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#26b9d9]" />
                  <span>Hướng dẫn mua hàng</span>
                </a>
                <a
                  href="#go-lien-tam"
                  className="inline-flex items-center gap-1 hover:text-[#26b9d9]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#26b9d9]" />
                  <span>Khách hàng</span>
                </a>
                <a
                  href="#bao-hanh"
                  className="inline-flex items-center gap-1 hover:text-[#26b9d9]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#26b9d9]" />
                  <span>Bảo hành trọn đời</span>
                </a>
                <a
                  href="#lien-he"
                  className="inline-flex items-center gap-1 hover:text-[#26b9d9]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#26b9d9]" />
                  <span>Liên hệ</span>
                </a>
              </div>
            </div>

            {/* Col 3: ĐĂNG KÝ */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-sm font-extrabold uppercase text-white tracking-wider mb-4">
                ĐĂNG KÝ
              </h3>
              <p className="text-white/70 leading-relaxed">
                Đăng ký nhận báo giá các tác phẩm gỗ liền tấm và tượng phong
                thủy độc bản mới nhất từ xưởng.
              </p>
              {newsletterDone ? (
                <div className="bg-white/10 border border-[#26b9d9] p-2.5 text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#26b9d9] shrink-0" />
                  <span>Đã đăng ký nhận thông báo thành công!</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail.trim()) setNewsletterDone(true);
                  }}
                  className="flex items-center bg-white rounded-xs overflow-hidden"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email của bạn..."
                    className="flex-1 px-3 py-2 text-xs text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Gửi"
                    className="px-3 py-2 text-[#26b9d9] hover:text-[#1da1be]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Darker Bottom Bar with Centered Logo */}
        <div className="bg-[#25282a] py-6 text-center border-t border-white/5">
          <div className="inline-flex items-center gap-1.5 mb-2">
            <div className="leading-none text-right text-white">
              <span className="block text-sm font-black">M</span>
              <span className="block text-sm font-black">W</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#26b9d9] text-white flex items-center justify-center">
              <Disc className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="leading-none text-left">
              <span className="block text-sm font-black text-white">
                {brandName.split(" ")[0] || "MONA"}
              </span>
              <span className="block text-sm font-black text-[#26b9d9]">
                {brandName.split(" ").slice(1).join(" ") || "WOODEN"}
              </span>
            </div>
          </div>
          <p className="text-[11px] text-white/60">
            © Bản quyền thuộc về . Thiết kế website{" "}
            <span className="font-bold text-white">{brandName}</span>
          </p>
        </div>
      </footer>

      {/* PRODUCT QUICK-VIEW MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl border border-[#eeeeee]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#f5f5f5] aspect-square relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                {selectedProduct.discountBadge && (
                  <span className="absolute top-3 left-3 bg-[#26b9d9] text-white text-xs font-bold px-2.5 py-1">
                    {selectedProduct.discountBadge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase text-[#26b9d9]">
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
                  <h3 className="text-base font-extrabold text-[#222222] mb-2">
                    {selectedProduct.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#26b9d9]">
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
                      <strong>Kích thước:</strong> {selectedProduct.dimensions}
                    </p>
                    <p>
                      <strong>Chất liệu gỗ:</strong> {selectedProduct.material}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedProduct.warranty}
                    </p>
                  </div>
                </div>

                {orderSuccess ? (
                  <div className="bg-[#f0fafe] border border-[#26b9d9] p-3 text-xs text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#26b9d9] shrink-0" />
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
                      className="flex-1 bg-[#26b9d9] hover:bg-[#1da1be] text-white text-xs font-extrabold uppercase py-3 transition-colors"
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                      className="border border-[#243238] text-[#243238] hover:bg-[#243238] hover:text-white text-xs font-extrabold uppercase py-3 px-4 transition-colors"
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
    </div>
  );
}

export default DemoTemplateRenderer;
