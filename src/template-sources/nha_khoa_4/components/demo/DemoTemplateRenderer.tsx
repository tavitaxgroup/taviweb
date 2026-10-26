"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  ChevronDown,
  Sparkles,
  Star,
  Globe,
  Clock,
  Menu,
  X,
  MessageCircle,
  CheckCircle2
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  nhaKhoa4DefaultData,
  type NhaKhoa4Data,
  type DentalShopItem
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data = adaptClonedTemplateData<NhaKhoa4Data>(nhaKhoa4DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState<DentalShopItem | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";

  const handleAddToCart = (item: DentalShopItem) => {
    setCartCount((prev) => prev + 1);
    setSelectedItem(item);
  };

  /* Section Header with Horizontal Flanking Black/Purple Lines matching screenshot */
  const renderSectionHeading = (title: string, isPurpleLine = false) => (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div
        className={`h-[2px] flex-1 ${
          isPurpleLine ? "bg-[#8a1d74]" : "bg-slate-900"
        }`}
      />
      <h2
        className={`text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] shrink-0 px-2 ${
          isPurpleLine ? "text-[#6b215c]" : "text-slate-800"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-[2px] flex-1 ${
          isPurpleLine ? "bg-[#8a1d74]" : "bg-slate-900"
        }`}
      />
    </div>
  );

  /* Product Card matching exact NK007 design */
  const renderProductCard = (item: DentalShopItem, hasGradientFrame = false) => (
    <div
      key={item.id}
      className={`relative bg-white flex flex-col items-center text-center transition-all group ${
        hasGradientFrame
          ? "border-[3px] border-[#b51d7a] p-4 shadow-sm hover:shadow-md"
          : "p-3 hover:-translate-y-1"
      }`}
    >
      {/* Top-Left Circular Discount Badge */}
      {item.discountBadge && (
        <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-[#9e1f63] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
          {item.discountBadge}
        </div>
      )}

      {/* Product Image */}
      <div
        onClick={() => setSelectedItem(item)}
        className="w-full h-44 sm:h-48 flex items-center justify-center overflow-hidden mb-3 cursor-pointer p-2"
      >
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded"
        />
      </div>

      {/* Category Label */}
      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
        {item.category}
      </span>

      {/* Product Title in Purple */}
      <h3
        onClick={() => setSelectedItem(item)}
        className="text-xs font-semibold text-[#6b215c] hover:text-[#d61f69] transition-colors mt-1 min-h-[32px] line-clamp-2 cursor-pointer px-1"
      >
        {item.name}
      </h3>

      {/* Price Row */}
      <div className="flex items-center justify-center gap-2 mt-1.5 text-xs">
        {item.oldPrice && (
          <span className="text-slate-400 line-through text-[11px]">{item.oldPrice}</span>
        )}
        <span className="font-extrabold text-slate-900">{item.price}</span>
      </div>

      {/* Outlined Purple THÊM VÀO GIỎ Button */}
      <button
        type="button"
        onClick={() => handleAddToCart(item)}
        className="mt-2.5 border border-[#7c2368] text-[#7c2368] hover:bg-[#7c2368] hover:text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 transition-colors cursor-pointer"
      >
        THÊM VÀO GIỎ
      </button>
    </div>
  );

  const filteredSpecialOffers = (data.specialOffers || []).filter((item) =>
    searchTerm.trim()
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#9e1f63] selection:text-white relative">
      {/* Floating Messenger Button */}
      <a
        href="#lien-he"
        className="fixed right-4 top-36 z-40 w-10 h-10 rounded-full bg-[#1890ff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Chat tư vấn nha khoa"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>

      {/* Header with Wavy Purple-Pink Ribbon Graphic */}
      <header className="relative bg-white overflow-hidden">
        {/* Decorative Wavy Ribbon SVG in Background matching NK007 top header */}
        <svg
          viewBox="0 0 1440 90"
          className="absolute inset-x-0 bottom-8 w-full h-16 pointer-events-none opacity-85"
          preserveAspectRatio="none"
        >
          <path
            d="M0,65 C220,10 420,85 720,45 C980,10 1200,80 1440,25 L1440,90 L0,90 Z"
            fill="url(#headerRibbonGrad)"
          />
          <defs>
            <linearGradient id="headerRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9c1f7e" />
              <stop offset="50%" stopColor="#c9186a" />
              <stop offset="100%" stopColor="#ff4d8d" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top Utility Links */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-1.5 flex justify-end gap-4 text-[11px] font-semibold text-[#9c1f7e]">
          <a href="#lien-he" className="hover:underline">
            Theo dõi đơn hàng
          </a>
          <a href="#lien-he" className="hover:underline">
            Liên hệ
          </a>
        </div>

        {/* Main Header Row: Logo + Search + Wishlist/Cart */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Ribbon & Cursive Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0 bg-white/90 px-3 py-1 rounded-full">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e82c81] to-[#7b1fa2] flex items-center justify-center text-white font-black text-sm shadow-xs">
              M
            </div>
            <div className="leading-none">
              <span className="block text-xl sm:text-2xl font-serif italic font-extrabold text-[#7b1fa2]">
                {data.business.name}
              </span>
              <span className="block text-[10px] italic text-slate-600 font-medium">
                fresh smile &amp; beauty
              </span>
            </div>
          </a>

          {/* Center Purple-Bordered Search Input */}
          <div className="flex-1 max-w-xs mx-auto sm:mx-4">
            <div className="relative bg-white">
              <input
                type="text"
                placeholder="Xem thương hiệu / Sản phẩm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-[#7b1fa2] pl-3 pr-8 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-[#7b1fa2] absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Right User / Wishlist / Cart */}
          <div className="flex items-center gap-4 text-xs font-bold text-[#9c1f7e] bg-white/90 px-3 py-1 rounded">
            <a href="#lien-he" className="hover:underline hidden sm:inline">
              Đăng Nhập
            </a>
            <button
              type="button"
              onClick={() => setWishlistCount((c) => c + 1)}
              className="flex items-center gap-1 hover:text-[#e82c81] cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-[#e82c81]" />
              <span>Wishlist {wishlistCount > 0 ? `(${wishlistCount})` : ""}</span>
            </button>
            <div className="flex items-center gap-1.5">
              <span className="border-2 border-[#e82c81] text-[#e82c81] px-1.5 py-0.5 text-[10px] font-extrabold leading-none rounded-xs">
                {cartCount}
              </span>
              <span>Giỏ Hàng</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#7b1fa2]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Purple Navigation Bar (#8a1d74) */}
        <div className="relative z-10 bg-gradient-to-r from-[#6d1b7b] via-[#8e1c78] to-[#b51d73] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-10 hidden lg:flex items-center justify-between text-[11px] font-bold uppercase tracking-wide">
            <a
              href="#khuyen-mai"
              className="flex items-center gap-2 bg-black/15 px-3 h-full hover:bg-black/25 transition-colors"
            >
              <span>MUA THEO HIỆU</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>
            {(data.navCategories || []).map((cat, idx) => (
              <a
                key={idx}
                href="#khuyen-mai"
                className="hover:text-pink-200 transition-colors flex items-center gap-1"
              >
                {cat === "ĐẶC BIỆT" && <Sparkles className="w-3 h-3 text-amber-300" />}
                {cat === "MỚI" && <Star className="w-3 h-3 text-amber-300 fill-current" />}
                <span>{cat}</span>
              </a>
            ))}
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden px-4 py-3 space-y-2 text-xs font-bold uppercase border-t border-white/15">
              {(data.navCategories || []).map((cat, idx) => (
                <a
                  key={idx}
                  href="#khuyen-mai"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-pink-200"
                >
                  {cat}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Promo Banner — Thick Purple-to-Pink Gradient Border Frame */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-1.5 bg-gradient-to-r from-[#7b1fa2] via-[#c2185b] to-[#ff4081] shadow-md">
            <div className="bg-white grid grid-cols-1 md:grid-cols-12 items-center p-6 sm:p-10 gap-6">
              {/* Left Promo Copy */}
              <div className="md:col-span-5 space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {data.promoBanner.topTitle}
                </h1>
                <p className="text-2xl sm:text-3xl font-bold text-[#e82c81]">
                  {data.promoBanner.highlightTitle}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 pt-1">
                  {data.promoBanner.subtitle}
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <a
                    href="#khuyen-mai"
                    className="bg-slate-900 hover:bg-[#8a1d74] text-white text-[11px] font-extrabold uppercase px-4 py-2 transition-colors"
                  >
                    {data.promoBanner.ctaText}
                  </a>
                  <span className="text-xs text-slate-500">{data.promoBanner.validUntil}</span>
                </div>
              </div>

              {/* Right High-End Product Collage */}
              <div className="md:col-span-7 grid grid-cols-3 gap-3 items-center">
                {(data.promoBanner.images || []).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="aspect-[3/4] rounded overflow-hidden bg-slate-50 border border-slate-100 shadow-xs"
                  >
                    <img
                      src={imgUrl}
                      alt={`Promo ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: KHUYẾN MÃI ĐẶC BIỆT (4x3 Grid = 12 Cards) */}
      <section id="khuyen-mai" className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionHeading("KHUYẾN MÃI ĐẶC BIỆT", false)}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
            {filteredSpecialOffers.map((item) => renderProductCard(item, false))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#goi-y"
              className="inline-block border-2 border-[#7c2368] text-[#7c2368] hover:bg-[#7c2368] hover:text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2 transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: GỢI Ý CHO BẠN (Soft Lavender-Gray #ebe6ef Background + Thick Gradient Border Cards) */}
      <section id="goi-y" className="py-12 bg-[#ebe6ef]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionHeading("GỢI Ý CHO BẠN", true)}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.suggestedItems || []).map((item) => renderProductCard(item, true))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#ban-chay"
              className="inline-block border-2 border-[#7c2368] text-[#7c2368] bg-white hover:bg-[#7c2368] hover:text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2 transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: TOP SẢN PHẨM BÁN CHẠY */}
      <section id="ban-chay" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionHeading("TOP SẢN PHẨM BÁN CHẠY", false)}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.bestSellers || []).map((item) => renderProductCard(item, false))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#moi-ve"
              className="inline-block border-2 border-[#7c2368] text-[#7c2368] hover:bg-[#7c2368] hover:text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2 transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: SẢN PHẨM MỚI VỀ */}
      <section id="moi-ve" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {renderSectionHeading("SẢN PHẨM MỚI VỀ", false)}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {(data.newArrivals || []).map((item) => renderProductCard(item, false))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#lien-he"
              className="inline-block border-2 border-[#7c2368] text-[#7c2368] hover:bg-[#7c2368] hover:text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2 transition-colors"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </section>

      {/* Footer — Deep Purple-Magenta Gradient (#831670 -> #560d4a) */}
      <footer id="lien-he" className="bg-gradient-to-b from-[#8c1974] via-[#70135d] to-[#4f0b41] text-white">
        {/* Top Newsletter & Highlights Strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 border-b border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Newsletter */}
            <div className="md:col-span-5 space-y-2.5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider">
                HÃY LUÔN KẾT NỐI
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                  setEmailInput("");
                }}
                className="flex items-stretch"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập email để nhận ưu đãi hấp dẫn"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 bg-white text-slate-800 placeholder-slate-400 text-xs px-3 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#4a0c3e] hover:bg-black text-white text-xs font-extrabold uppercase px-4 py-2 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận ưu đãi thành công!</span>
                </p>
              )}
              <div className="flex items-center gap-3 pt-1 text-sm font-bold text-white/90">
                <span>f</span>
                <span>◎</span>
                <span>𝕏</span>
                <span>G+</span>
                <span>in</span>
              </div>
            </div>

            {/* 33,000 Products Stat */}
            <div className="md:col-span-3 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-pink-200" />
              </div>
              <div className="text-xs leading-snug">
                <span>Trên </span>
                <strong className="text-base font-extrabold">33 ngàn</strong>
                <br />
                <span>sản phẩm từ</span>
                <br />
                <strong className="text-base font-extrabold">800</strong>
                <span> thương hiệu</span>
              </div>
            </div>

            {/* Free Shipping Worldwide */}
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-pink-200" />
              </div>
              <div className="text-xs leading-snug">
                <strong className="text-base font-extrabold uppercase">FREE Vận Chuyển</strong>{" "}
                <span>đến</span>
                <br />
                <strong className="text-base font-extrabold">mọi nơi</strong>
                <br />
                <span>toàn </span>
                <strong className="text-base font-extrabold">thế giới!</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Utility Bar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 border-b border-white/15 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#khuyen-mai" className="hover:text-pink-200">
              QUÀ TẶNG ĐẶC BIỆT
            </a>
            <span className="text-white/30">|</span>
            <a href="#lien-he" className="hover:text-pink-200">
              THEO DÕI ĐƠN HÀNG
            </a>
            <span className="text-white/30">|</span>
            <a href="#lien-he" className="hover:text-pink-200">
              FAQS
            </a>
            <span className="text-white/30">|</span>
            <a href="#lien-he" className="hover:text-pink-200">
              LIÊN HỆ VỚI CHÚNG TÔI
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-pink-100">
            <Clock className="w-3.5 h-3.5" />
            <span>GIỜ MỞ CỬA: {data.business.workingHours || "08:00 - 20:00"}</span>
          </div>
        </div>

        {/* Bottom 5 Columns */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 text-xs">
            {/* Col 1: THANH TOÁN BẰNG */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-extrabold uppercase mb-3">THANH TOÁN BẰNG</h4>
              <div className="grid grid-cols-3 gap-2">
                {["VISA", "PayPal", "MasterCard", "JCB", "DISCOVER", "NAPAS"].map((card) => (
                  <div
                    key={card}
                    className="bg-white text-[#1a1f71] font-black text-[9px] py-2 px-1 rounded-xs text-center shadow-xs"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: KIỂM TRA */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-extrabold uppercase mb-3">KIỂM TRA</h4>
              <ul className="space-y-1.5 text-pink-100/85 text-[11px]">
                <li>
                  <a href="#khuyen-mai" className="hover:text-white">
                    Cửa hàng
                  </a>
                </li>
                <li>
                  <a href="#goi-y" className="hover:text-white">
                    Quà tặng
                  </a>
                </li>
                <li>
                  <a href="#moi-ve" className="hover:text-white">
                    Sản phẩm mới
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Theo dõi
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: VỀ CHÚNG TÔI */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-extrabold uppercase mb-3">VỀ CHÚNG TÔI</h4>
              <ul className="space-y-1.5 text-pink-100/85 text-[11px]">
                <li>
                  <a href="#" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#khuyen-mai" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#ban-chay" className="hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="hover:text-white">
                    Liên hệ ({primaryPhone})
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: TẢI VỀ */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-extrabold uppercase mb-3">TẢI VỀ</h4>
              <div className="space-y-2">
                <div className="bg-black border border-white/30 rounded px-2.5 py-1.5 text-[10px] font-bold">
                  <span className="block text-[8px] text-slate-300 font-normal">
                    Available on the
                  </span>
                  App Store
                </div>
                <div className="bg-black border border-white/30 rounded px-2.5 py-1.5 text-[10px] font-bold">
                  <span className="block text-[8px] text-slate-300 font-normal">
                    ANDROID APP ON
                  </span>
                  Google Play
                </div>
              </div>
            </div>

            {/* Col 5: ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-extrabold uppercase mb-3">
                ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG
              </h4>
              <div className="flex items-center gap-2">
                <div className="bg-[#0072bc] text-white px-2.5 py-1.5 rounded text-[9px] font-extrabold leading-tight flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</span>
                </div>
                <div className="bg-[#d91c24] text-white px-2.5 py-1.5 rounded text-[9px] font-extrabold leading-tight flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG</span>
                </div>
              </div>
              <p className="text-[10px] text-pink-200/80 mt-2">{data.business.address}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-[#3d0732] py-3 text-center text-[11px] text-pink-200/70">
          © All rights reserved. Thiết kế bởi{" "}
          <span className="text-white font-semibold">{data.business.name}</span>
        </div>
      </footer>

      {/* Quick View Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-40 h-40 object-contain mb-3"
              />
              <span className="text-[10px] font-bold uppercase text-[#8a1d74]">
                {selectedItem.category}
              </span>
              <h3 className="text-sm font-extrabold text-slate-900 mt-1">{selectedItem.name}</h3>
              <p className="text-base font-black text-[#e82c81] mt-1">{selectedItem.price}</p>
              <p className="text-xs text-slate-600 mt-2">{selectedItem.description}</p>
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#8a1d74] text-white text-xs font-bold uppercase px-5 py-2 cursor-pointer"
                >
                  Đã thêm vào giỏ ({cartCount})
                </button>
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, "")}`}
                  className="border border-[#8a1d74] text-[#8a1d74] text-xs font-bold uppercase px-4 py-2"
                >
                  Gọi tư vấn
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
