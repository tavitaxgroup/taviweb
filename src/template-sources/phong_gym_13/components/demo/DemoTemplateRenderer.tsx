"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Star,
  ChevronDown,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym13DefaultData,
  type Gym13Data
} from "@/template-sources/phong_gym_13/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Gym13Data = adaptClonedTemplateData(
    phongGym13DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"NEW" | "BEST" | "POPULAR">("NEW");
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@conversefit.vn";

  const handleAddToCart = (itemName: string) => {
    setCartCount((c) => c + 1);
    setLastAddedItem(itemName);
    setTimeout(() => {
      setLastAddedItem(null);
    }, 2600);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#c81920] selection:text-white">
      {/* Floating Cart Toast */}
      {lastAddedItem && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#111111] text-white px-4 py-3 shadow-xl border-l-4 border-[#c81920] flex items-center gap-2.5 text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#c81920] shrink-0" />
          <span>
            Đã thêm <strong>{lastAddedItem}</strong> vào giỏ hàng ({cartCount})
          </span>
        </div>
      )}

      {/* 1. BLACK TOP BAR + LIGHT GRAY NAV BAR */}
      <header className="sticky top-0 z-40 shadow-sm">
        {/* Top Black Bar */}
        <div className="bg-[#0d0d0d] text-white h-16">
          <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between gap-4">
            {/* Left: Login / Register */}
            <a
              href="#lien-he"
              className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white"
            >
              ĐĂNG NHẬP / ĐĂNG KÝ
            </a>

            {/* Center Brand Logo */}
            <a href="#trang-chu" className="text-center mx-auto sm:mx-0">
              <span className="block text-xl sm:text-2xl font-black uppercase tracking-widest text-white leading-none">
                {data.business.name}
              </span>
              <span className="inline-flex items-center justify-center gap-1 text-[9px] uppercase tracking-[0.28em] text-gray-300 mt-1">
                <span>S N E</span>
                <Star className="w-2.5 h-2.5 text-white" />
                <span>K E R</span>
              </span>
            </a>

            {/* Right: Search & Cart */}
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="hidden sm:flex items-center gap-2 text-gray-200 hover:text-white cursor-pointer"
              >
                <span>
                  GIỎ HÀNG / {cartCount > 0 ? `${cartCount}.250.000 ₫` : "0 ₫"}
                </span>
                <span className="w-5 h-5 border border-white/60 text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white"
                aria-label="Mở menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Gray Bar */}
        <div className="bg-[#e6e6e6] border-b border-gray-300">
          <div className="max-w-5xl mx-auto px-4 h-10 hidden lg:flex items-center justify-center gap-8 text-[11px] font-extrabold uppercase tracking-wider text-[#222222]">
            <a
              href="#trang-chu"
              className="h-full flex items-center border-b-2 border-[#c81920] text-[#111111]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#gioi-thieu"
              className="h-full flex items-center hover:text-[#c81920] transition-colors"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#san-pham-moi"
              className="h-full flex items-center gap-1 hover:text-[#c81920] transition-colors"
            >
              NỮ <ChevronDown className="w-3 h-3 opacity-70" />
            </a>
            <a
              href="#san-pham-moi"
              className="h-full flex items-center gap-1 hover:text-[#c81920] transition-colors"
            >
              NAM <ChevronDown className="w-3 h-3 opacity-70" />
            </a>
            <a
              href="#san-pham-giam-gia"
              className="h-full flex items-center hover:text-[#c81920] transition-colors"
            >
              TRẺ EM
            </a>
            <a
              href="#phu-kien-khac"
              className="h-full flex items-center hover:text-[#c81920] transition-colors"
            >
              PHỤ KIỆN KHÁC
            </a>
            <a
              href="#khuyen-mai"
              className="h-full flex items-center hover:text-[#c81920] transition-colors"
            >
              TIN TỨC
            </a>
            <a
              href="#lien-he"
              className="h-full flex items-center hover:text-[#c81920] transition-colors"
            >
              LIÊN HỆ
            </a>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden px-4 py-3 space-y-2 text-xs font-extrabold uppercase text-[#222222]">
              <a
                href="#trang-chu"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-[#c81920]"
              >
                TRANG CHỦ
              </a>
              <a
                href="#san-pham-moi"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                GIÀY SNEAKER
              </a>
              <a
                href="#phu-kien-khac"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                PHỤ KIỆN KHÁC
              </a>
              <a
                href="#san-pham-giam-gia"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1"
              >
                SẢN PHẨM GIẢM GIÁ
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
        </div>
      </header>

      {/* 2. CONTAINED INDUSTRIAL DARK STEEL HERO BANNER */}
      <section id="trang-chu" className="max-w-5xl mx-auto px-4 pt-6 pb-8">
        <div className="relative h-[340px] sm:h-[400px] bg-[#141414] overflow-hidden flex items-center shadow-lg">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/90" />

          <div className="relative z-10 w-full px-6 sm:px-12 flex justify-end">
            <div className="max-w-md text-right text-white">
              <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider mb-3 inline-flex items-center justify-end gap-1.5">
                <span>{data.business.name.toUpperCase()} SNE</span>
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white inline" />
                <span>KER</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                {data.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-COLUMN FEATURED SNEAKER SERIES STRIP */}
      <section className="pb-12">
        {/* Gray Header Bar */}
        <div className="bg-[#e6e6e6] py-3 mb-6">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
            {(data.featuredTrio || phongGym13DefaultData.featuredTrio).map(
              (trio, idx) => (
                <div key={trio.id} className="flex flex-col items-center">
                  <span
                    className={`text-sm sm:text-lg text-[#111111] leading-none mb-1 ${
                      idx === 2
                        ? "font-serif italic font-bold"
                        : "font-extrabold uppercase tracking-wider"
                    }`}
                  >
                    {trio.headerTitle}
                  </span>
                  <span className="bg-[#111111] text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-3 py-0.5">
                    {trio.badgeSub}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* 3 Sneaker Cutouts */}
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {(data.featuredTrio || phongGym13DefaultData.featuredTrio).map(
            (trio) => (
              <div
                key={trio.id}
                onClick={() => handleAddToCart(trio.name)}
                className="h-44 overflow-hidden flex items-center justify-center cursor-pointer group"
              >
                <img
                  src={trio.image}
                  alt={trio.name}
                  className="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* 4. TABBED SNEAKER SHOWCASE (SẢN PHẨM MỚI | SẢN PHẨM BÁN CHẠY | SẢN PHẨM PHỔ BIẾN) */}
      <section id="san-pham-moi" className="max-w-5xl mx-auto px-4 pb-14">
        {/* Tabs Header with Bottom Line */}
        <div className="border-b border-gray-300 flex items-center justify-center gap-1 mb-10">
          {[
            { key: "NEW" as const, label: "SẢN PHẨM MỚI" },
            { key: "BEST" as const, label: "SẢN PHẨM BÁN CHẠY" },
            { key: "POPULAR" as const, label: "SẢN PHẨM PHỔ BIẾN" }
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`text-[11px] font-extrabold uppercase tracking-wider px-4 py-2 transition-colors cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#111111] text-white"
                  : "bg-transparent text-gray-500 hover:text-[#111111]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Sneaker Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.tabSneakers || phongGym13DefaultData.tabSneakers).map(
            (item) => (
              <div
                key={item.id}
                onClick={() => handleAddToCart(item.name)}
                className="text-center cursor-pointer group"
              >
                <div className="h-36 sm:h-40 overflow-hidden mb-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[11px] text-gray-600 group-hover:text-[#111111] mb-1">
                  {item.name}
                </h3>
                <span className="text-xs font-extrabold text-[#b91c1c]">
                  {item.price}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* 5. PHỤ KIỆN KHÁC (4x2 APPAREL & GYM BAGS) */}
      <section id="phu-kien-khac" className="max-w-5xl mx-auto px-4 pb-14">
        <div className="border-b border-gray-300 pb-2 text-center mb-10">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111]">
            PHỤ KIỆN KHÁC
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-10">
          {(data.accessories || phongGym13DefaultData.accessories).map((acc) => (
            <div
              key={acc.id}
              onClick={() => handleAddToCart(acc.name)}
              className="text-center cursor-pointer group"
            >
              <div className="h-40 sm:h-44 overflow-hidden mb-3 flex items-center justify-center">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[11px] text-gray-600 group-hover:text-[#111111] line-clamp-1 mb-1">
                {acc.name}
              </h3>
              <span className="text-xs font-extrabold text-[#b91c1c]">
                {acc.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#san-pham-giam-gia"
            className="inline-block border border-gray-300 hover:border-[#111111] text-gray-600 hover:text-[#111111] text-[11px] px-5 py-1.5 transition-colors"
          >
            Xem tất cả
          </a>
        </div>
      </section>

      {/* 6. CONTAINED DARK SHOWROOM PROMO BANNER ("KHUYẾN MÃI GIẢM GIÁ 50%") */}
      <section id="khuyen-mai" className="max-w-5xl mx-auto px-4 pb-14">
        <div
          className="relative h-64 sm:h-72 bg-cover bg-center flex items-center justify-center text-center shadow-md"
          style={{
            backgroundImage: `url('${data.promoBannerImage}')`
          }}
        >
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 px-4">
            <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-gray-200 mb-2">
              {data.business.name.toUpperCase()} S N E ☆ K E R
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wide mb-5">
              <span className="text-white">
                {data.promoBannerTitleWhite || "KHUYẾN MÃI "}
              </span>
              <span className="text-[#f5d000]">
                {data.promoBannerTitleYellow || "GIẢM GIÁ 50%"}
              </span>
            </h2>
            <a
              href="#san-pham-giam-gia"
              className="inline-block border border-white/80 hover:bg-white hover:text-[#111111] text-white text-xs font-semibold px-6 py-2 transition-colors"
            >
              Xem sản phẩm
            </a>
          </div>
        </div>
      </section>

      {/* 7. SẢN PHẨM GIẢM GIÁ (4x2 SNEAKERS WITH RED -30% CIRCLE BADGE) */}
      <section id="san-pham-giam-gia" className="max-w-5xl mx-auto px-4 pb-16">
        <div className="border-b border-gray-300 pb-2 text-center mb-10">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111]">
            SẢN PHẨM GIẢM GIÁ
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {(data.saleSneakers || phongGym13DefaultData.saleSneakers).map(
            (item) => (
              <div
                key={item.id}
                onClick={() => handleAddToCart(item.name)}
                className="text-center cursor-pointer group"
              >
                <div className="relative h-36 sm:h-40 overflow-hidden mb-3 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xs group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.discountBadge && (
                    <span className="absolute top-1.5 left-1.5 w-8 h-8 rounded-full bg-[#c81920] text-white text-[10px] font-bold flex items-center justify-center shadow">
                      {item.discountBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-[11px] text-gray-600 group-hover:text-[#111111] line-clamp-1 mb-1">
                  {item.name}
                </h3>

                <div className="text-[11px] space-x-1.5">
                  {item.oldPrice && (
                    <span className="line-through text-gray-400">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-[#b91c1c]">
                    {item.price}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* 8. DARK CHARCOAL FOOTER (#191919) */}
      <footer id="lien-he" className="bg-[#191919] text-gray-300 pt-12 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          {/* Top 4 Columns */}
          <div id="gioi-thieu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10 text-xs">
            {/* Col 1: GIỚI THIỆU */}
            <div className="lg:col-span-3">
              <h4 className="font-extrabold uppercase text-white mb-3 pb-1.5 border-b border-white/20 inline-block">
                GIỚI THIỆU
              </h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                {data.business.aboutText?.[0]}
              </p>
            </div>

            {/* Col 2: ĐỊA CHỈ */}
            <div className="lg:col-span-3">
              <h4 className="font-extrabold uppercase text-white mb-3 pb-1.5 border-b border-white/20 inline-block">
                ĐỊA CHỈ
              </h4>
              <ul className="space-y-2 text-[11px] text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: MENU */}
            <div className="lg:col-span-3">
              <h4 className="font-extrabold uppercase text-white mb-3 pb-1.5 border-b border-white/20 inline-block">
                MENU
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a href="#trang-chu" className="text-[#c81920]">
                  Trang chủ
                </a>
                <a href="#gioi-thieu" className="text-gray-400 hover:text-white">
                  Giới thiệu
                </a>
                <a href="#san-pham-moi" className="text-gray-400 hover:text-white">
                  Cửa hàng
                </a>
                <a href="#khuyen-mai" className="text-gray-400 hover:text-white">
                  Tin tức
                </a>
                <a href="#lien-he" className="text-gray-400 hover:text-white">
                  Liên hệ
                </a>
              </div>
            </div>

            {/* Col 4: MẠNG XÃ HỘI */}
            <div className="lg:col-span-3">
              <h4 className="font-extrabold uppercase text-white mb-3 pb-1.5 border-b border-white/20 inline-block">
                MẠNG XÃ HỘI
              </h4>
              <div className="flex items-center gap-2">
                {[
                  { label: "f", bg: "#3b5998" },
                  { label: "ig", bg: "#2b5b84" },
                  { label: "t", bg: "#00aced" },
                  { label: "p", bg: "#cb2027" },
                  { label: "rss", bg: "#ff6600" }
                ].map((s) => (
                  <span
                    key={s.label}
                    className="w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                    style={{ backgroundColor: s.bg }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Newsletter & Payment Row */}
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <span className="text-xs font-extrabold uppercase text-white shrink-0">
                ĐĂNG KÝ NHẬN THÔNG TIN
              </span>

              {newsletterDone ? (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Đã đăng ký nhận thông tin!
                </span>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterDone(true);
                  }}
                  className="flex h-9 w-full sm:w-72"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email ..."
                    className="w-full bg-white text-[#222222] text-xs px-3 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#c81920] hover:bg-[#a6141a] text-white text-[10px] font-extrabold uppercase px-4 shrink-0 cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>

            {/* Payment Method Badges */}
            <div className="flex items-center gap-2 text-[10px] font-black uppercase">
              <span className="px-2.5 py-1 rounded-xs bg-[#003087] text-white italic">
                PayPal
              </span>
              <span className="px-2.5 py-1 rounded-xs bg-[#1a1f71] text-white">
                VISA
              </span>
              <span className="px-2.5 py-1 rounded-xs bg-[#eb001b] text-white">
                MasterCard
              </span>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#111111] py-3 text-center text-[11px] text-gray-500">
        © Bản quyền thuộc về <strong className="text-white">{data.business.name}</strong>.
      </div>
    </div>
  );
}

export default DemoTemplateRenderer;
