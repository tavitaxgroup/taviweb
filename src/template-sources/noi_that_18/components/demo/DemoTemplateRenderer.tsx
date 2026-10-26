"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingBag,
  Truck,
  Gift,
  PiggyBank,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  noiThat18DefaultData,
  type NoiThat18Data,
  type NoiThat18Product
} from "@/template-sources/noi_that_18/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function WatermarkSectionHeader({
  watermark,
  title,
  subtitle = "MONA FURNITURE"
}: {
  watermark: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative text-center py-6 mb-10 overflow-hidden">
      <span className="pointer-events-none select-none font-serif text-4xl sm:text-6xl font-bold uppercase tracking-widest text-stone-200/75 block leading-none">
        {watermark}
      </span>
      <div className="-mt-9 sm:-mt-12 relative z-10">
        <h2 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#111111]">
          {title}
        </h2>
        <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-stone-500 mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: NoiThat18Data = adaptClonedTemplateData(
    noiThat18DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<NoiThat18Product | null>(
    null
  );
  const [registerEmail, setRegisterEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "mon@mona.media";
  const newsList = data.news || noiThat18DefaultData.news || [];

  const handleSelectProduct = (prod: NoiThat18Product) => {
    setCartCount((c) => c + 1);
    setSelectedProduct(prod);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerEmail.trim()) return;
    setRegistered(true);
    setRegisterEmail("");
    setTimeout(() => setRegistered(false), 4000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#e5b822] selection:text-black"
    >
      {/* 1. WHITE STICKY HEADER + EXECUTIVE DESK HERO */}
      <header className="sticky top-0 z-40 bg-white border-b border-stone-200/80 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          {/* Left MONA SHOP Logo */}
          <a href="#top" className="leading-none">
            <div className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              <span className="text-[#e5b822]">
                {data.business.name.split(" ")[0] || "MONA"}
              </span>
              <span className="text-[#111111]">
                {data.business.name.split(" ").slice(1).join(" ") || "SHOP"}
              </span>
            </div>
            <span className="block text-[9px] font-bold uppercase tracking-[0.28em] text-stone-600 mt-0.5">
              OFFICE FURNITURE
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-stone-700">
            <a href="#chairs" className="hover:text-[#e5b822] transition-colors">
              GHẾ VĂN PHÒNG
            </a>
            <a href="#cabinets" className="hover:text-[#e5b822] transition-colors">
              TỦ VĂN PHÒNG
            </a>
            <a href="#promo" className="hover:text-[#e5b822] transition-colors">
              PHỤ KIỆN VĂN PHÒNG
            </a>
            <a href="#desks" className="hover:text-[#e5b822] transition-colors">
              BÀN VĂN PHÒNG
            </a>
            <a href="#footer" className="hover:text-[#e5b822] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right Search, User, Cart */}
          <div className="flex items-center gap-4 text-[#111111]">
            <a href="#desks" aria-label="Tìm kiếm" className="hover:text-[#e5b822]">
              <Search className="w-4 h-4" />
            </a>
            <a href="#footer" aria-label="Tài khoản" className="hover:text-[#e5b822]">
              <User className="w-4 h-4 fill-current" />
            </a>
            <a
              href="#desks"
              aria-label="Giỏ hàng"
              className="relative hover:text-[#e5b822]"
            >
              <ShoppingBag className="w-4 h-4 fill-current" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#e5b822] text-black text-[9px] font-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 text-stone-800"
              aria-label="Mở menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-4 space-y-2 text-xs font-bold uppercase">
            <a
              href="#desks"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#e5b822]"
            >
              Bàn văn phòng & Bàn họp
            </a>
            <a
              href="#chairs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#e5b822]"
            >
              Ghế văn phòng
            </a>
            <a
              href="#cabinets"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#e5b822]"
            >
              Tủ hồ sơ
            </a>
            <a
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 hover:text-[#e5b822]"
            >
              Thông tin hữu ích
            </a>
          </div>
        )}
      </header>

      {/* Executive Desk Hero */}
      <section className="relative h-[460px] sm:h-[540px] lg:h-[600px] flex items-center overflow-hidden bg-stone-900 text-white">
        <img
          src={data.hero.backgroundImage}
          alt={data.hero.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/20" />

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8">
          <div className="max-w-xl">
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight mb-4 drop-shadow">
              {data.hero.title}
            </h1>
            <p className="font-serif text-base sm:text-xl text-white/95 leading-snug mb-8">
              {data.hero.subtitle}
            </p>
            <a
              href={data.hero.ctaLink || "#desks"}
              className="inline-block bg-white hover:bg-[#e5b822] text-sky-600 hover:text-black text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 shadow-lg transition-colors"
            >
              {data.hero.ctaText || "MUA SẮM NGAY"}
            </a>
          </div>
        </div>

        {/* Bottom Slider Indicator Lines */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-white" />
          <span className="w-8 h-[2px] bg-white/40" />
        </div>
      </section>

      {/* 2. "BÀN VĂN PHÒNG" (with "PRODUCTS" watermark + 4 Conference Table Cards) */}
      <section id="desks" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <WatermarkSectionHeader watermark="PRODUCTS" title="BÀN VĂN PHÒNG" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.deskProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectProduct(item)}
                className="group cursor-pointer text-center p-4 hover:shadow-md transition-all border border-transparent hover:border-stone-200"
              >
                <div className="h-44 overflow-hidden mb-5 flex items-center justify-center bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-xs sm:text-[13px] font-semibold text-stone-700 group-hover:text-[#e5b822] mb-2">
                  {item.name}
                </h3>
                <p className="text-xs font-extrabold text-[#111111]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DARK PARALLAX 3-COLUMN PERKS STRIP */}
      <section className="relative py-12 lg:py-14 bg-stone-900 text-white overflow-hidden">
        <img
          src={data.perkStrip.backgroundImage}
          alt="Dịch vụ nội thất văn phòng"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.perkStrip.items.map((pk) => (
              <div key={pk.id} className="flex items-center gap-4">
                <div className="text-white shrink-0">
                  {pk.icon === "truck" && <Truck className="w-9 h-9 stroke-[1.5]" />}
                  {pk.icon === "gift" && <Gift className="w-9 h-9 stroke-[1.5]" />}
                  {pk.icon === "piggy" && <PiggyBank className="w-9 h-9 stroke-[1.5]" />}
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-0.5">
                    {pk.title}
                  </h3>
                  <p className="text-[11px] text-white/75">{pk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "GHẾ VĂN PHÒNG" (with "PRODUCTS" watermark + 4 Office Chair Cards) */}
      <section id="chairs" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative">
          <WatermarkSectionHeader watermark="PRODUCTS" title="GHẾ VĂN PHÒNG" />

          <div className="relative">
            <button
              type="button"
              aria-label="Trước"
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center text-stone-500 hover:text-black"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.chairProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectProduct(item)}
                  className={`group cursor-pointer text-center p-5 transition-all relative ${
                    item.featuredBorder
                      ? "border border-dashed border-stone-300"
                      : "border border-transparent hover:border-stone-200"
                  }`}
                >
                  <div className="h-52 overflow-hidden mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.featuredBorder && (
                      <span className="absolute bottom-2 left-2 w-7 h-7 bg-white border border-stone-300 flex items-center justify-center text-stone-700 shadow-2xs">
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xs sm:text-[13px] font-semibold text-stone-700 group-hover:text-[#e5b822] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs font-extrabold text-[#111111]">{item.price}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Tiếp"
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center text-stone-500 hover:text-black"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. 2-COLUMN FULL-BLEED PROMOTIONAL SPLIT BANNER */}
      <section id="promo" className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Banner: Open Workstation */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-800">
          <img
            src={data.promoBanners.leftImage}
            alt={data.promoBanners.leftTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-6 right-6 text-right text-white">
            <p className="text-lg sm:text-xl font-light uppercase tracking-wider">
              {data.promoBanners.leftTitle}
            </p>
            <p className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-2">
              {data.promoBanners.leftSubtitle}
            </p>
            <span className="inline-block bg-[#d9232e] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              {data.promoBanners.leftRibbon}
            </span>
          </div>
        </div>

        {/* Right Banner: Black Friday Sale 20% - 70% */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-[#181a1f] text-white flex items-center p-6 sm:p-10">
          <img
            src={data.promoBanners.rightImage}
            alt="Khuyến mãi nội thất"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 ml-auto text-right max-w-xs space-y-2">
            <div className="inline-block bg-[#d9232e] text-white px-4 py-1.5 font-black uppercase text-lg tracking-wider -rotate-2 shadow-lg">
              {data.promoBanners.rightBadge}
            </div>
            <p className="font-serif italic text-base sm:text-lg text-[#f5c518] font-bold">
              {data.promoBanners.rightTitle}
            </p>
            <p className="text-xs uppercase tracking-widest text-white/80">Bom tấn Sale</p>
            <p className="text-3xl sm:text-5xl font-black text-white leading-none">
              {data.promoBanners.rightDiscount}
            </p>
          </div>
        </div>
      </section>

      {/* 6. "TỦ HỒ SƠ" (with "PRODUCTS" watermark + 4 Filing Cabinet Cards) */}
      <section id="cabinets" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <WatermarkSectionHeader watermark="PRODUCTS" title="TỦ HỒ SƠ" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.cabinetProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectProduct(item)}
                className="group cursor-pointer text-center p-4 hover:shadow-md transition-all border border-transparent hover:border-stone-200"
              >
                <div className="h-48 overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-xs sm:text-[13px] font-semibold text-stone-700 group-hover:text-[#e5b822] mb-2">
                  {item.name}
                </h3>
                <p className="text-xs font-extrabold text-[#111111]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "THÔNG TIN HỮU ÍCH" (with "LATEST NEWS" watermark + 3 Article Cards) */}
      <section id="news" className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <WatermarkSectionHeader watermark="LATEST NEWS" title="THÔNG TIN HỮU ÍCH" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsList.map((post) => (
              <article key={post.id} className="group">
                <div className="h-48 overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-extrabold uppercase text-[#111111] group-hover:text-[#e5b822] transition-colors mb-2 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DARK 3-COLUMN WATERMARK FOOTER (#111111) */}
      <footer id="footer" className="bg-[#111111] text-white/75 pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Col 1: VỀ CHÚNG TÔI (ABOUT US watermark) */}
            <div>
              <div className="relative py-3 mb-4">
                <span className="pointer-events-none select-none font-serif text-4xl font-bold uppercase text-white/10 block leading-none">
                  ABOUT US
                </span>
                <div className="-mt-7 relative z-10">
                  <h3 className="font-serif text-base font-bold uppercase text-[#e5b822]">
                    VỀ CHÚNG TÔI
                  </h3>
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-white">
                    MONA FURNITURE
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-white/70">
                <p>
                  <strong className="text-[#e5b822]">A:</strong> {data.business.address}
                </p>
                <p>
                  <strong className="text-[#e5b822]">T:</strong> {primaryPhone}
                </p>
                <p>
                  <strong className="text-[#e5b822]">E:</strong> {primaryEmail}
                </p>
                <p>
                  <strong className="text-[#e5b822]">S:</strong> {data.business.name}
                </p>
              </div>
            </div>

            {/* Col 2: ĐĂNG KÝ NHẬN TIN (REGISTER watermark) */}
            <div>
              <div className="relative py-3 mb-4">
                <span className="pointer-events-none select-none font-serif text-4xl font-bold uppercase text-white/10 block leading-none">
                  REGISTER
                </span>
                <div className="-mt-7 relative z-10">
                  <h3 className="font-serif text-base font-bold uppercase text-[#e5b822]">
                    ĐĂNG KÝ NHẬN TIN
                  </h3>
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-white">
                    MONA FURNITURE
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Đăng ký nhận bảng báo giá sỉ nội thất văn phòng và các chương trình ưu đãi mới nhất
                từ chúng tôi.
              </p>

              {registered ? (
                <div className="inline-flex items-center gap-1.5 text-xs text-[#e5b822] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Đã đăng ký nhận bản tin!</span>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-2.5 max-w-xs mx-auto">
                  <input
                    type="email"
                    required
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="Email ..."
                    className="w-full bg-white text-stone-800 rounded px-3.5 py-2 text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#e5b822] hover:bg-[#cfa419] text-white text-[11px] font-bold uppercase px-6 py-2 rounded transition-colors"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>

            {/* Col 3: THÔNG TIN (INFORMATION watermark) */}
            <div>
              <div className="relative py-3 mb-4">
                <span className="pointer-events-none select-none font-serif text-4xl font-bold uppercase text-white/10 block leading-none">
                  INFORMATION
                </span>
                <div className="-mt-7 relative z-10">
                  <h3 className="font-serif text-base font-bold uppercase text-[#e5b822]">
                    THÔNG TIN
                  </h3>
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-white">
                    MONA FURNITURE
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-white/75 inline-block text-left">
                <li>
                  <a href="#top" className="text-[#e5b822] font-semibold">
                    ▸ Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#desks" className="hover:text-[#e5b822]">
                    ▸ Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#chairs" className="hover:text-[#e5b822]">
                    ▸ Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#news" className="hover:text-[#e5b822]">
                    ▸ Điểm tin hữu ích
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-[#e5b822]">
                    ▸ Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black py-3.5 text-center text-[11px] text-white/50 border-t border-white/10">
          © All rights reserved. Thiết kế website <strong className="text-white">{data.business.name}</strong>
        </div>
      </footer>

      {/* Product Detail / Quick Cart Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5b822]">
              {selectedProduct.categoryLabel}
            </span>
            <h3 className="text-base font-extrabold text-[#111111] mt-0.5">
              {selectedProduct.name}
            </h3>
            <p className="text-sm font-extrabold text-[#d9232e] mt-1">{selectedProduct.price}</p>
            <p className="text-xs text-stone-500 mt-2 mb-5">{selectedProduct.specs}</p>
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="w-full bg-[#111111] hover:bg-[#e5b822] hover:text-black text-white text-xs font-bold uppercase tracking-wider py-3 transition-colors"
            >
              ĐÃ THÊM VÀO GIỎ HÀNG ({cartCount})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
