"use client";

import React, { useState } from "react";
import {
  User,
  Search,
  ShoppingBag,
  Bike,
  Play,
  Star,
  ChevronUp,
  CheckCircle2,
  X,
  Menu
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto9DefaultData,
  type GarageOto9TemplateData,
  type GarageOto9BikeItem
} from "@/template-sources/garage_oto_9/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: GarageOto9TemplateData = adaptClonedTemplateData(
    garageOto9DefaultData,
    incomingData
  );

  const [activeTab, setActiveTab] = useState<string>("tat-ca");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedBike, setSelectedBike] = useState<GarageOto9BikeItem | null>(
    null
  );
  const [orderDone, setOrderDone] = useState<boolean>(false);
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const brandName = data.business.name || "MONA";

  const allBikes = data.bikes || [];
  const displayedBikes = allBikes.filter((item) => {
    const matchTab =
      activeTab === "tat-ca" || item.tabCategory === activeTab;
    const matchSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const renderSectionHeader = (title: string) => (
    <div className="text-center mb-8">
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff5a14] mb-2">
        {title}
      </h2>
      <div className="inline-flex items-center justify-center gap-3 text-[#ff5a14]">
        <span className="w-8 h-px bg-[#ff5a14]/60" />
        <Bike className="w-5 h-5 stroke-[1.8]" />
        <span className="w-8 h-px bg-[#ff5a14]/60" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#ff5a14] selection:text-white">
      {/* 1. TOP CLEAN WHITE HEADER */}
      <header
        id="trang-chu"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-[#eeeeee]"
      >
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left Diamond Emblem Logo */}
          <a
            href="#trang-chu"
            className="flex items-center gap-2 shrink-0"
          >
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={brandName}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="w-10 h-10 rotate-45 border-2 border-[#222222] flex items-center justify-center bg-white shadow-xs">
                <div className="-rotate-45 flex flex-col items-center leading-none">
                  <Bike className="w-4 h-4 text-[#ff5a14]" />
                  <span className="text-[7px] font-black uppercase text-[#222222]">
                    {brandName.split(" ")[0]}
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-[#333333]">
            <a
              href="#trang-chu"
              className="text-[#ff5a14] border-t-2 border-[#ff5a14] pt-1.5"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-[#ff5a14] pt-1.5 transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham"
              className="hover:text-[#ff5a14] pt-1.5 transition-colors"
            >
              CỬA HÀNG
            </a>
            <a
              href="#su-kien"
              className="hover:text-[#ff5a14] pt-1.5 transition-colors"
            >
              BLOG
            </a>
            <a
              href="#danh-gia"
              className="hover:text-[#ff5a14] pt-1.5 transition-colors"
            >
              CÂU HỎI THƯỜNG GẶP
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#ff5a14] pt-1.5 transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-[#333333]">
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="hover:text-[#ff5a14] transition-colors"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Tìm kiếm"
              className="hover:text-[#ff5a14] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                if (allBikes[0]) {
                  setSelectedBike(allBikes[0]);
                  setOrderDone(false);
                }
              }}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#ff5a14] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 text-[9px] font-bold text-[#222222]">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-1 text-[#222222]"
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

        {/* Search Input Bar */}
        {searchOpen && (
          <div className="border-t border-[#eeeeee] bg-[#fafafa] py-2.5 px-4">
            <div className="max-w-md mx-auto flex items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm xe đạp điện, xe địa hình..."
                className="flex-1 bg-white border border-[#dddddd] px-3 py-1.5 text-xs focus:outline-none focus:border-[#ff5a14]"
              />
              <a
                href="#san-pham"
                onClick={() => setSearchOpen(false)}
                className="bg-[#ff5a14] text-white text-xs font-bold px-4 py-1.5"
              >
                Tìm
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#eeeeee] bg-white px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#ff5a14]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CỬA HÀNG
            </a>
            <a
              href="#su-kien"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SỰ KIỆN & BLOG
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              LIÊN HỆ
            </a>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION WITH GIANT FAINT WATERMARK */}
      <section className="relative overflow-hidden py-10 sm:py-16 bg-white">
        {/* Faint MONA Watermark */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[90px] sm:text-[150px] font-black uppercase text-[#fff3ec] tracking-widest select-none pointer-events-none leading-none">
          {brandName.split(" ")[0]}
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ff5a14] block">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-[#ff5a14] tracking-tight leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed whitespace-pre-line max-w-lg">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#san-pham"}
                className="inline-block border border-[#ff5a14] text-[#ff5a14] hover:bg-[#ff5a14] hover:text-white text-[11px] font-extrabold uppercase tracking-wider px-7 py-3 transition-colors"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>

          {/* Right Studio Full-Suspension Bike */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[520px] aspect-[4/3] overflow-hidden">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Slider Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          <span className="w-2 h-2 rounded-full bg-[#222222]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#cccccc]" />
        </div>
      </section>

      {/* 3. 2-COLUMN FEATURE HIGHLIGHT ("Xe Đạp Leo Núi Tốt Nhất 2026") */}
      <section id="gioi-thieu" className="py-10 sm:py-14 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <img
                src={data.highlightSection.image}
                alt={data.highlightSection.title}
                className="w-full h-64 object-cover rounded-xs"
              />
            </div>
            <div className="md:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#ff5a14] whitespace-pre-line leading-tight">
                {data.highlightSection.title}
              </h2>
              <p className="text-xs text-[#666666] leading-relaxed">
                {data.highlightSection.quote}
              </p>
              <a
                href="#san-pham"
                className="inline-block border border-[#ff5a14] text-[#ff5a14] hover:bg-[#ff5a14] hover:text-white text-[11px] font-bold uppercase px-6 py-2.5 transition-colors"
              >
                {data.highlightSection.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: XE ĐẠP NỔI BẬT (PILL TABS + 3x2 GRID) */}
      <section id="san-pham" className="py-12 bg-white">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
          {renderSectionHeader("Xe Đạp Nổi Bật")}

          {/* 4 Pill Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            <button
              type="button"
              onClick={() => setActiveTab("tat-ca")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border transition-colors ${
                activeTab === "tat-ca"
                  ? "bg-[#ff5a14] border-[#ff5a14] text-white"
                  : "border-[#ff5a14]/60 text-[#ff5a14] hover:bg-[#ff5a14] hover:text-white"
              }`}
            >
              TẤT CẢ DÒNG XE
            </button>
            {(data.productTabs || []).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border transition-colors ${
                    isActive
                      ? "bg-[#ff5a14] border-[#ff5a14] text-white"
                      : "border-[#ff5a14]/60 text-[#ff5a14] hover:bg-[#ff5a14] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 3x2 Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {displayedBikes.map((bike) => (
              <div
                key={bike.id}
                onClick={() => {
                  setSelectedBike(bike);
                  setOrderDone(false);
                }}
                className="group cursor-pointer text-center"
              >
                <div className="relative aspect-[16/10] bg-white overflow-hidden mb-3 flex items-center justify-center p-2">
                  <img
                    src={bike.image}
                    alt={bike.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Badges */}
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    {bike.newBadge && (
                      <span className="bg-[#ff5a14] text-white text-[9px] font-bold uppercase px-2 py-0.5">
                        MỚI
                      </span>
                    )}
                    {bike.discountBadge && (
                      <span className="bg-[#ffe600] text-[#222222] text-[9px] font-extrabold px-2 py-0.5">
                        {bike.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Center Sold Out Badge if applicable */}
                  {bike.soldOut && (
                    <span className="absolute bg-[#222222]/85 text-white text-[10px] font-bold px-3 py-1 rounded-xs">
                      Hết hàng
                    </span>
                  )}
                </div>

                <h3 className="text-xs font-bold text-[#333333] group-hover:text-[#ff5a14] transition-colors mb-1">
                  {bike.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs">
                  {bike.oldPrice && (
                    <span className="text-[#999999] line-through text-[11px]">
                      {bike.oldPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-[#222222]">
                    {bike.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH VIDEO BANNER WITH PLAY BUTTON */}
      <section className="py-8 bg-white">
        <div
          onClick={() => setVideoModalOpen(true)}
          className="relative w-full h-[300px] sm:h-[440px] overflow-hidden cursor-pointer group bg-[#1a1a1a]"
        >
          <img
            src={data.videoBannerImage}
            alt="Video trải nghiệm thực tế"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

          {/* Faint Watermark */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-6xl sm:text-8xl font-black uppercase text-white/20 leading-none select-none pointer-events-none">
            {brandName}
          </div>

          {/* Center Dark Circular Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black/75 group-hover:bg-[#ff5a14] text-white border-2 border-white flex items-center justify-center shadow-2xl transition-colors">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: SỰ KIỆN SẮP TỚI (3 CARDS) */}
      <section id="su-kien" className="py-12 bg-white">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          {renderSectionHeader("Sự Kiện Sắp Tới")}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(data.events || []).map((ev) => (
              <article key={ev.id} className="group flex flex-col">
                <div className="aspect-square overflow-hidden bg-[#f4f4f4] mb-3">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {ev.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[8px] font-bold uppercase px-2 py-0.5 rounded-full border border-[#e0e0e0] text-[#777777]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] text-[#999999] uppercase mb-1">
                  {ev.date}
                </span>
                <h3 className="text-sm font-extrabold text-[#222222] group-hover:text-[#ff5a14] transition-colors line-clamp-1 mb-3">
                  {ev.title}
                </h3>

                <div className="mt-auto">
                  <a
                    href="#lien-he"
                    className="inline-block bg-[#ff5a14] hover:bg-[#e14b0a] text-white text-[10px] font-extrabold uppercase px-4 py-2 transition-colors"
                  >
                    ĐỌC THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: KHÁCH HÀNG CỦA CHÚNG TÔI NÓI GÌ */}
      <section id="danh-gia" className="py-12 bg-white">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6">
          {renderSectionHeader("Khách Hàng Của Chúng Tôi Nói Gì")}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-[#f0f0f0]">
                <img
                  src={data.customerSpotlight.image}
                  alt={data.customerSpotlight.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                {data.customerSpotlight.quote}
              </p>
              <div>
                <h3 className="text-sm font-extrabold text-[#ff5a14]">
                  {data.customerSpotlight.author}
                </h3>
                <p className="text-[10px] font-bold uppercase text-[#888888] mt-0.5">
                  {data.customerSpotlight.role}
                </p>
                <div className="flex items-center gap-0.5 text-[#ffb800] mt-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#ffb800] text-[#ffb800]"
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
                <span className="w-2 h-2 rounded-full bg-[#ff5a14]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: XE ĐẠP ĐIỆN THÀNH PHỐ (4 FULL-BLEED VERTICAL PHOTOS + 5 LOGOS) */}
      <section className="pt-10 bg-white">
        {renderSectionHeader("Xe Đạp Điện Thành Phố")}

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {(data.cityGalleryImages || []).map((imgUrl, idx) => (
            <div
              key={idx}
              className="aspect-[3/4] overflow-hidden bg-[#eaeaea] group"
            >
              <img
                src={imgUrl}
                alt={`Xe đạp điện thành phố ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* 5 Partner Logos Strip */}
        <div className="max-w-[980px] mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center text-center">
          {(data.clients || []).map((cl) => (
            <div
              key={cl.id}
              className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Bike className="w-6 h-6 text-[#333333] mb-1" />
              <span className="text-[11px] font-black uppercase tracking-wider text-[#222222] border-y border-[#333333] px-2 py-0.5">
                {cl.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. DARK CHARCOAL FOOTER (#141414) */}
      <footer
        id="lien-he"
        className="bg-[#141414] text-white/75 pt-14 pb-8 text-xs"
      >
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: VỀ CHÚNG TÔI */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                VỀ CHÚNG TÔI
              </h3>
              <p className="text-[11px] leading-relaxed text-white/65">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5a14] hover:border-[#ff5a14] transition-colors"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5a14] hover:border-[#ff5a14] transition-colors"
                >
                  𝕏
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5a14] hover:border-[#ff5a14] transition-colors"
                >
                  ▶
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#ff5a14] hover:border-[#ff5a14] transition-colors"
                >
                  IG
                </a>
              </div>
            </div>

            {/* Col 2: THÔNG TIN */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                THÔNG TIN
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ff5a14]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ff5a14]">
                    Điều khoản và điều kiện
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#ff5a14]">
                    Liên hệ showroom
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ff5a14]">
                    Về chúng tôi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: TÀI KHOẢN CỦA TÔI */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                TÀI KHOẢN CỦA TÔI
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#lien-he" className="hover:text-[#ff5a14]">
                    Tài khoản của tôi
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#ff5a14]">
                    Lịch sử đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#gioi-thieu" className="hover:text-[#ff5a14]">
                    Chính sách bảo hành pin
                  </a>
                </li>
                <li>
                  <a href="#danh-gia" className="hover:text-[#ff5a14]">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: NGƯỜI DÙNG HỮU ÍCH */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                NGƯỜI DÙNG HỮU ÍCH
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#san-pham" className="hover:text-[#ff5a14]">
                    Thủ tục thanh toán trả góp
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#ff5a14]">
                    Theo dõi đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#san-pham" className="hover:text-[#ff5a14]">
                    Giỏ hàng
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/50">
            © Thiết kế và lập trình bởi{" "}
            <span className="font-bold text-white">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* Orange Scroll To Top Button */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-[#ff5a14] hover:bg-[#e14b0a] text-white shadow-lg flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-4 h-4" />
      </a>

      {/* BIKE QUICK-VIEW MODAL */}
      {selectedBike && (
        <div
          onClick={() => setSelectedBike(null)}
          className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#f8f8f8] aspect-square flex items-center justify-center p-4">
                <img
                  src={selectedBike.image}
                  alt={selectedBike.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase text-[#ff5a14]">
                      {selectedBike.categoryName}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedBike(null)}
                      className="text-[#888888] hover:text-[#222222]"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-base font-extrabold text-[#222222] mb-2">
                    {selectedBike.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#ff5a14]">
                      {selectedBike.price}
                    </span>
                    {selectedBike.oldPrice && (
                      <span className="text-xs text-[#999999] line-through">
                        {selectedBike.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed mb-4">
                    {selectedBike.description}
                  </p>
                  <div className="space-y-1 text-xs text-[#555555] border-y border-[#eeeeee] py-3 mb-4">
                    <p>
                      <strong>Động cơ:</strong> {selectedBike.motorSpec}
                    </p>
                    <p>
                      <strong>Pin & Quãng đường:</strong>{" "}
                      {selectedBike.batteryRange}
                    </p>
                    <p>
                      <strong>Khung sườn:</strong> {selectedBike.frameMaterial}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedBike.warranty}
                    </p>
                  </div>
                </div>

                {orderDone ? (
                  <div className="bg-[#fff4ed] border border-[#ff5a14] p-3 text-xs text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5a14] shrink-0" />
                    <span>
                      Đã thêm <strong>{selectedBike.title}</strong> vào giỏ
                      hàng!
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setCartCount((c) => c + 1);
                        setOrderDone(true);
                      }}
                      className="flex-1 bg-[#ff5a14] hover:bg-[#e14b0a] text-white text-xs font-extrabold uppercase py-3 transition-colors"
                    >
                      Đặt mua ngay
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

      {/* VIDEO MODAL */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-xl w-full p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold uppercase text-[#222222]">
                Trải Nghiệm Thực Tế {brandName}
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-[#888888] hover:text-[#222222]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video relative overflow-hidden bg-black">
              <img
                src={data.videoBannerImage}
                alt={brandName}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center bg-black/35">
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff5a14] mb-2">
                  Showroom & Xưởng Bảo Dưỡng Chính Hãng
                </p>
                <p className="text-sm font-semibold max-w-md mb-4">
                  Đăng ký lái thử miễn phí tất cả các dòng xe đạp điện trợ lực
                  và xe địa hình carbon tại hệ thống {brandName}.
                </p>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="bg-[#ff5a14] text-white text-xs font-bold uppercase px-6 py-2.5"
                >
                  Hotline: {primaryPhone}
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
