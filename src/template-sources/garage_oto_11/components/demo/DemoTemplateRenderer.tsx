"use client";

import React, { useState } from "react";
import {
  User,
  Search,
  ShoppingBag,
  Bike,
  Calendar,
  CheckCircle2,
  X,
  Menu,
  ChevronUp
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  garageOto11DefaultData,
  type GarageOto11TemplateData,
  type GarageOto11BikeItem
} from "@/template-sources/garage_oto_11/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({
  data: incomingData
}: DemoTemplateRendererProps) {
  const data: GarageOto11TemplateData = adaptClonedTemplateData(
    garageOto11DefaultData,
    incomingData
  );

  const [activeTab, setActiveTab] = useState<string>("tat-ca");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [selectedBike, setSelectedBike] = useState<GarageOto11BikeItem | null>(
    null
  );
  const [orderDone, setOrderDone] = useState<boolean>(false);

  const primaryPhone = data.business.phone?.[0] || "(+84) 0313-728-397";
  const brandName = data.business.name || "MONA SPORT AUTO";

  const allBikes = data.bikes || [];
  const filteredBikes = allBikes.filter((item) => {
    const matchTab =
      activeTab === "tat-ca" || item.tabCategory === activeTab;
    const matchSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const featuredLeftBike =
    filteredBikes.find((b) => b.featuredLarge) || filteredBikes[0];
  const rightFourBikes = filteredBikes
    .filter((b) => b.id !== featuredLeftBike?.id)
    .slice(0, 4);

  const smallExperiencePosts = (data.experiencePosts || []).filter(
    (p) => !p.featuredTall
  );
  const tallExperiencePost =
    (data.experiencePosts || []).find((p) => p.featuredTall) ||
    data.experiencePosts?.[4];

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#4b5832] selection:text-white">
      {/* 1. TOP CLEAN WHITE HEADER */}
      <header
        id="trang-chu"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-[#eeeeee]"
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left Emblem Logo: MONA BICYCLE & SPORT */}
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
              <div className="flex flex-col items-center leading-none border-y-2 border-[#222222] py-1 px-2">
                <Bike className="w-4 h-4 text-[#4b5832] mb-0.5" />
                <span className="text-sm font-black tracking-widest uppercase text-[#222222]">
                  {brandName.split(" ")[0]}
                </span>
                <span className="text-[7px] font-bold uppercase tracking-widest text-[#666666]">
                  BICYCLE &amp; SPORT
                </span>
              </div>
            )}
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-bold uppercase tracking-wider text-[#333333]">
            <a
              href="#trang-chu"
              className="text-[#4b5832] border-t-2 border-[#4b5832] pt-1.5"
            >
              TRANG CHỦ
            </a>
            <a
              href="#nang-luong"
              className="hover:text-[#4b5832] pt-1.5 transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#xe-dap-noi-bat"
              className="hover:text-[#4b5832] pt-1.5 transition-colors"
            >
              CỬA HÀNG
            </a>
            <a
              href="#chia-se"
              className="hover:text-[#4b5832] pt-1.5 transition-colors"
            >
              BLOG
            </a>
            <a
              href="#lien-he"
              className="hover:text-[#4b5832] pt-1.5 transition-colors"
            >
              LIÊN HỆ
            </a>
            <a
              href="#gia-tri"
              className="hover:text-[#4b5832] pt-1.5 transition-colors"
            >
              CÂU HỎI THƯỜNG GẶP
            </a>
            <a
              href="#thuong-hieu"
              className="hover:text-[#4b5832] pt-1.5 transition-colors"
            >
              KHÁC
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 text-[#333333]">
            <a
              href="#lien-he"
              aria-label="Tài khoản"
              className="hover:text-[#4b5832] transition-colors"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Tìm kiếm"
              className="hover:text-[#4b5832] transition-colors"
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
              className="relative hover:text-[#4b5832] transition-colors"
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
                placeholder="Tìm kiếm xe địa hình, phụ kiện Tensio..."
                className="flex-1 bg-white border border-[#dddddd] px-3 py-1.5 text-xs focus:outline-none focus:border-[#4b5832]"
              />
              <a
                href="#xe-dap-noi-bat"
                onClick={() => setSearchOpen(false)}
                className="bg-[#4b5832] text-white text-xs font-bold px-4 py-1.5"
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
              className="block py-1 text-[#4b5832]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#xe-dap-noi-bat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              XE ĐẠP NỔI BẬT
            </a>
            <a
              href="#nang-luong"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CÔNG NGHỆ TRỢ LỰC
            </a>
            <a
              href="#chia-se"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              CHIA SẺ KINH NGHIỆM
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

      {/* 2. HERO SECTION WITH OLIVE-GREEN HEADING & SUBTLE WATERMARK */}
      <section className="relative overflow-hidden py-10 sm:py-16 bg-white">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[90px] sm:text-[140px] font-black uppercase text-[#f4f6f0] tracking-widest select-none pointer-events-none leading-none">
          {brandName.split(" ")[0]}
        </div>

        <div className="relative z-10 max-w-[1060px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#666666] block">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase text-[#4b5832] tracking-tight leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed max-w-md">
              {data.hero.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#xe-dap-noi-bat"}
                className="inline-block border border-[#4b5832] text-[#4b5832] hover:bg-[#4b5832] hover:text-white text-[11px] font-extrabold uppercase tracking-wider px-7 py-3 transition-colors"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>

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

        <div className="flex items-center justify-center gap-1.5 mt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cccccc]" />
          <span className="w-2 h-2 rounded-full bg-[#222222]" />
        </div>
      </section>

      {/* 3. 3 TACTICAL OLIVE-GREEN PROMO CARDS ("XE ĐẠP THIẾT KẾ TENSIO") */}
      <section className="py-6 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(data.tensioPromos || []).map((card) => (
              <div
                key={card.id}
                className="group relative h-44 bg-[#3d4828] text-white overflow-hidden p-5 flex flex-col justify-between"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#313b1f]/90 via-[#3d4828]/70 to-transparent" />

                <div className="relative z-10">
                  <span className="text-[10px] text-white/80 block mb-1">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase whitespace-pre-line leading-snug">
                    {card.title}
                  </h3>
                </div>

                <div className="relative z-10">
                  <a
                    href="#xe-dap-noi-bat"
                    className="inline-block bg-white hover:bg-[#4b5832] hover:text-white text-[#222222] text-[10px] font-bold px-3.5 py-1.5 transition-colors"
                  >
                    {card.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: XE ĐẠP NỔI BẬT (1 LARGE LEFT + 2x2 RIGHT BENTO GRID) */}
      <section id="xe-dap-noi-bat" className="py-12 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#4b5832] mb-6">
            Xe đạp nổi bật
          </h2>

          {/* 4 Rectangular Olive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab("tat-ca")}
              className={`px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider border transition-colors ${
                activeTab === "tat-ca"
                  ? "bg-[#4b5832] border-[#4b5832] text-white"
                  : "border-[#cccccc] text-[#555555] hover:border-[#4b5832] hover:text-[#4b5832]"
              }`}
            >
              TẤT CẢ
            </button>
            {(data.productTabs || []).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider border transition-colors ${
                    isActive
                      ? "bg-[#4b5832] border-[#4b5832] text-white"
                      : "border-[#cccccc] text-[#555555] hover:border-[#4b5832] hover:text-[#4b5832]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Asymmetric Bento Grid: Left 6 Cols (Large) + Right 6 Cols (2x2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#efefef]">
            {/* Left Large Featured Bike */}
            {featuredLeftBike && (
              <div
                onClick={() => {
                  setSelectedBike(featuredLeftBike);
                  setOrderDone(false);
                }}
                className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#efefef] flex flex-col justify-between items-center text-center cursor-pointer group"
              >
                <div className="w-full flex items-center gap-1 self-start mb-2">
                  {featuredLeftBike.newBadge && (
                    <span className="bg-[#4b5832] text-white text-[9px] font-bold px-2 py-0.5">
                      Mới!
                    </span>
                  )}
                  {featuredLeftBike.saleBadge && (
                    <span className="bg-[#b91c1c] text-white text-[9px] font-bold px-2 py-0.5">
                      Giảm giá!
                    </span>
                  )}
                </div>

                <div className="w-full aspect-[4/3] flex items-center justify-center my-auto py-4 overflow-hidden">
                  <img
                    src={featuredLeftBike.image}
                    alt={featuredLeftBike.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="pt-4">
                  <h3 className="text-xs sm:text-sm font-bold text-[#333333] group-hover:text-[#4b5832] mb-1">
                    {featuredLeftBike.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-xs">
                    {featuredLeftBike.oldPrice && (
                      <span className="text-[#999999] line-through text-[11px]">
                        {featuredLeftBike.oldPrice}
                      </span>
                    )}
                    <span className="font-extrabold text-[#4b5832]">
                      {featuredLeftBike.price}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Right 2x2 Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0">
              {rightFourBikes.map((bike, idx) => (
                <div
                  key={bike.id}
                  onClick={() => {
                    setSelectedBike(bike);
                    setOrderDone(false);
                  }}
                  className={`p-5 flex flex-col justify-between items-center text-center cursor-pointer group border-[#efefef] ${
                    idx % 2 === 0 ? "sm:border-r" : ""
                  } ${idx < 2 ? "sm:border-b" : ""}`}
                >
                  <div className="w-full flex items-center gap-1 self-start mb-2">
                    {bike.newBadge && (
                      <span className="bg-[#4b5832] text-white text-[9px] font-bold px-2 py-0.5">
                        Mới!
                      </span>
                    )}
                    {bike.saleBadge && (
                      <span className="bg-[#b91c1c] text-white text-[9px] font-bold px-2 py-0.5">
                        Giảm giá!
                      </span>
                    )}
                  </div>

                  <div className="w-full aspect-[16/10] overflow-hidden my-2">
                    <img
                      src={bike.image}
                      alt={bike.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="pt-2">
                    <h3 className="text-[11px] font-bold text-[#333333] group-hover:text-[#4b5832] line-clamp-1 mb-0.5">
                      {bike.title}
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 text-[11px]">
                      {bike.oldPrice && (
                        <span className="text-[#999999] line-through text-[10px]">
                          {bike.oldPrice}
                        </span>
                      )}
                      <span className="font-extrabold text-[#4b5832]">
                        {bike.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH TECHNICAL SHOWCASE ("TURBO COMO" WATERMARK) */}
      <section
        id="nang-luong"
        className="relative py-16 sm:py-20 bg-[#f7f8f6] overflow-hidden border-y border-[#eceee9]"
      >
        {/* Giant Right Watermark TURBO COMO */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right select-none pointer-events-none leading-[0.85] text-[80px] sm:text-[140px] font-black uppercase text-[#e4e8dc]">
          <div>{data.energyShowcase.watermarkLine1}</div>
          <div>{data.energyShowcase.watermarkLine2}</div>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#222222] leading-tight">
              {data.energyShowcase.heading}
            </h2>
            <p className="text-xs text-[#666666] leading-relaxed max-w-sm">
              {data.energyShowcase.description}
            </p>
            <div className="pt-2">
              <a
                href="#xe-dap-noi-bat"
                className="inline-block bg-[#4b5832] hover:bg-[#3a4525] text-white text-[11px] font-extrabold uppercase px-6 py-2.5 transition-colors"
              >
                {data.energyShowcase.ctaText}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[560px] aspect-[16/10] rounded-lg overflow-hidden shadow-lg bg-white p-3">
              <img
                src={data.energyShowcase.image}
                alt={data.energyShowcase.heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: CHIA SẺ KINH NGHIỆM (2x2 LEFT + 1 TALL RIGHT) */}
      <section id="chia-se" className="py-14 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#4b5832] mb-8">
            CHIA SẺ KINH NGHIỆM
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 2x2 Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {smallExperiencePosts.map((post) => (
                <article
                  key={post.id}
                  className="group text-center flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#f2f2f2] mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs font-extrabold text-[#222222] group-hover:text-[#4b5832] transition-colors mb-1.5 px-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-center gap-3 text-[9px] text-[#888888] uppercase">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Right 1 Tall Featured Post */}
            {tallExperiencePost && (
              <article className="lg:col-span-6 group text-center flex flex-col">
                <div className="flex-1 min-h-[280px] sm:min-h-[380px] overflow-hidden bg-[#f2f2f2] mb-3">
                  <img
                    src={tallExperiencePost.image}
                    alt={tallExperiencePost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-extrabold text-[#222222] group-hover:text-[#4b5832] transition-colors mb-1">
                  {tallExperiencePost.title}
                </h3>
                <div className="flex items-center justify-center gap-3 text-[9px] text-[#888888] uppercase">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {tallExperiencePost.date}
                  </span>
                  <span>•</span>
                  <span>{tallExperiencePost.author}</span>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* 7. FULL-WIDTH ACTION BANNER ("ROAD BIKE WHEELS") + OLIVE-GREEN 3x2 VALUES BLOCK */}
      <section id="gia-tri">
        {/* Top Action Photo with Giant Watermark */}
        <div className="relative w-full h-[280px] sm:h-[380px] overflow-hidden bg-[#1a1a1a]">
          <img
            src={data.actionBannerImage}
            alt="Road Bike Wheels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none text-white/30 font-black uppercase text-5xl sm:text-7xl leading-[0.92]">
            <div>ROAD</div>
            <div>BIKE</div>
            <div>WHEELS</div>
          </div>
        </div>

        {/* Bottom Olive-Green (#4b5832) 3x2 Core Values Grid */}
        <div className="bg-[#4b5832] text-white py-14 px-4 sm:px-6">
          <div className="max-w-[920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 text-center">
            {(data.oliveValues || []).map((val) => (
              <div key={val.id} className="space-y-1.5">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                  {val.title}
                </h3>
                <p className="text-[11px] text-white/80 leading-relaxed max-w-[250px] mx-auto">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION: THƯƠNG HIỆU NỔI BẬT */}
      <section id="thuong-hieu" className="py-12 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-extrabold uppercase text-center text-[#4b5832] mb-8">
            THƯƠNG HIỆU NỔI BẬT
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {(data.clients || []).map((cl) => (
              <div
                key={cl.id}
                className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
              >
                <Bike className="w-6 h-6 text-[#4b5832] mb-1" />
                <span className="text-[10px] font-black uppercase tracking-wider text-[#222222] border-y border-[#333333] px-2 py-0.5">
                  {cl.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK CHARCOAL FOOTER (#161616) */}
      <footer
        id="lien-he"
        className="bg-[#161616] text-white/75 pt-14 pb-8 text-xs"
      >
        <div className="max-w-[960px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                VỀ CHÚNG TÔI
              </h3>
              <p className="text-[11px] leading-relaxed text-white/60">
                {data.business.aboutText?.[0]}
              </p>
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#4b5832] hover:border-[#4b5832]"
                >
                  f
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#4b5832] hover:border-[#4b5832]"
                >
                  𝕏
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#4b5832] hover:border-[#4b5832]"
                >
                  ▶
                </a>
                <a
                  href="#lien-he"
                  className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#4b5832] hover:border-[#4b5832]"
                >
                  IG
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                THÔNG TIN
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#xe-dap-noi-bat" className="hover:text-[#849b5c]">
                    Thông tin giao hàng
                  </a>
                </li>
                <li>
                  <a href="#nang-luong" className="hover:text-[#849b5c]">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#nang-luong" className="hover:text-[#849b5c]">
                    Điều khoản và điều kiện
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#849b5c]">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#gia-tri" className="hover:text-[#849b5c]">
                    Hoàn trả &amp; Bảo hành
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                TÀI KHOẢN CỦA TÔI
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#lien-he" className="hover:text-[#849b5c]">
                    Tài khoản của tôi
                  </a>
                </li>
                <li>
                  <a href="#xe-dap-noi-bat" className="hover:text-[#849b5c]">
                    Lịch sử đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#xe-dap-noi-bat" className="hover:text-[#849b5c]">
                    Danh sách yêu thích
                  </a>
                </li>
                <li>
                  <a href="#xe-dap-noi-bat" className="hover:text-[#849b5c]">
                    Đang vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#gia-tri" className="hover:text-[#849b5c]">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-extrabold uppercase text-white mb-3">
                NGƯỜI DÙNG HỮU ÍCH
              </h3>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <a href="#chia-se" className="hover:text-[#849b5c]">
                    Cộng đồng địa hình
                  </a>
                </li>
                <li>
                  <a href="#chia-se" className="hover:text-[#849b5c]">
                    Diễn đàn kỹ thuật
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-[#849b5c]">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#nang-luong" className="hover:text-[#849b5c]">
                    Tài liệu kỹ thuật
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/50">
            © Bản quyền thuộc về{" "}
            <span className="font-bold text-white">{brandName}</span>
          </div>
        </div>
      </footer>

      {/* Scroll To Top */}
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        className="fixed bottom-5 right-5 z-40 w-9 h-9 rounded-full bg-[#4b5832] hover:bg-[#3a4525] text-white shadow-lg flex items-center justify-center transition-colors"
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
              <div className="bg-[#f7f8f6] aspect-square flex items-center justify-center p-4">
                <img
                  src={selectedBike.image}
                  alt={selectedBike.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase text-[#4b5832]">
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
                    <span className="text-xl font-black text-[#4b5832]">
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
                      <strong>Cấu hình:</strong> {selectedBike.specs}
                    </p>
                    <p>
                      <strong>Khung sườn:</strong>{" "}
                      {selectedBike.frameMaterial}
                    </p>
                    <p>
                      <strong>Bảo hành:</strong> {selectedBike.warranty}
                    </p>
                  </div>
                </div>

                {orderDone ? (
                  <div className="bg-[#f3f6ee] border border-[#4b5832] p-3 text-xs text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4b5832] shrink-0" />
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
                      className="flex-1 bg-[#4b5832] hover:bg-[#3a4525] text-white text-xs font-extrabold uppercase py-3 transition-colors"
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
    </div>
  );
}

export default DemoTemplateRenderer;
