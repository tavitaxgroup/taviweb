"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  User,
  Heart,
  ShoppingBag,
  Star,
  Clock,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  phongGym11DefaultData,
  type Gym11Data
} from "@/template-sources/phong_gym_11/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function LineSectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-10">
      <span className="h-px flex-1 bg-gray-200" />
      <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111] shrink-0">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: Gym11Data = adaptClonedTemplateData(
    phongGym11DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedProduct, setLastAddedProduct] = useState<string | null>(null);
  const [activeGenderFilter, setActiveGenderFilter] = useState<"NAM" | "NỮ">("NAM");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  const primaryPhone = data.business.phone?.[0] || "076 922 0162";
  const primaryEmail = data.business.email?.[0] || "cskh@hoangphucsport.vn";

  const handleAddToCart = (productName: string) => {
    setCartCount((c) => c + 1);
    setLastAddedProduct(productName);
    setTimeout(() => {
      setLastAddedProduct(null);
    }, 2600);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#cc181f] selection:text-white">
      {/* Floating Cart Toast */}
      {lastAddedProduct && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#111111] text-white px-4 py-3 shadow-xl border-l-4 border-[#f5d000] flex items-center gap-2.5 text-xs">
          <CheckCircle2 className="w-4 h-4 text-[#f5d000] shrink-0" />
          <span>
            Đã thêm <strong>{lastAddedProduct}</strong> vào giỏ hàng ({cartCount})
          </span>
        </div>
      )}

      {/* 1. BLACK TOP NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#111111] text-white shadow-md">
        {/* Top Hotline Micro-bar */}
        <div className="max-w-6xl mx-auto px-4 pt-1.5 flex justify-end">
          <span className="text-[10px] text-gray-300 font-semibold">
            HỖ TRỢ KHÁCH HÀNG:{" "}
            <strong className="text-[#f5d000]">{primaryPhone}</strong>
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#trang-chu" className="leading-none shrink-0">
            <span className="block text-base sm:text-lg font-black uppercase tracking-wider text-[#f5d000]">
              {data.business.name}
            </span>
            <span className="block text-[9px] uppercase tracking-[0.32em] text-white/80 mt-0.5">
              international
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-white/90">
            <a href="#trang-chu" className="hover:text-[#f5d000] transition-colors">
              GIỚI THIỆU
            </a>
            <a
              href="#danh-muc"
              onClick={() => setActiveGenderFilter("NAM")}
              className="hover:text-[#f5d000] transition-colors"
            >
              NAM
            </a>
            <a
              href="#danh-muc"
              onClick={() => setActiveGenderFilter("NỮ")}
              className="hover:text-[#f5d000] transition-colors"
            >
              NỮ
            </a>
            <a href="#bo-suu-tap" className="hover:text-[#f5d000] transition-colors">
              NEW ARRIVAL
            </a>
            <a href="#khuyen-mai-hot" className="hover:text-[#f5d000] transition-colors">
              OUTLET SALE
            </a>
            <a href="#san-pham-ban-chay" className="hover:text-[#f5d000] transition-colors">
              BACK TO GYM
            </a>
            <a href="#lien-he" className="hover:text-[#f5d000] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Right User / Heart / Cart Icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Tài khoản"
              className="text-white/85 hover:text-[#f5d000] cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Yêu thích"
              className="text-white/85 hover:text-[#f5d000] cursor-pointer"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Giỏ hàng"
              className="relative text-white/85 hover:text-[#f5d000] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#f5d000]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#cc181f] text-white text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#f5d000]"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10 px-4 py-3 space-y-2 text-xs font-bold uppercase">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#f5d000]"
            >
              GIỚI THIỆU
            </a>
            <a
              href="#bo-suu-tap"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              NEW ARRIVAL
            </a>
            <a
              href="#khuyen-mai-hot"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              OUTLET SALE
            </a>
            <a
              href="#san-pham-ban-chay"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1"
            >
              SẢN PHẨM BÁN CHẠY
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

      {/* 2. WHITE POLICY & SEARCH SUB-BAR */}
      <div className="bg-white border-b border-gray-200 py-2.5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-wider text-gray-700">
            {(data.topPolicies || phongGym11DefaultData.topPolicies).map(
              (policy, idx) => (
                <span key={idx}>{policy}</span>
              )
            )}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center border border-gray-300 h-7 w-full md:w-64 ml-auto"
          >
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full px-2.5 text-[11px] text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Tìm kiếm"
              className="h-full px-2.5 bg-gray-500 hover:bg-[#111111] text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Search className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>

      {/* 3. CRIMSON RED "BIG SALE ONLINE 50%" HERO BANNER */}
      <section id="trang-chu" className="max-w-6xl mx-auto px-4 pt-3 pb-6">
        <div className="relative bg-gradient-to-br from-[#e32229] via-[#c81920] to-[#9b1015] text-white py-14 sm:py-20 px-6 sm:px-14 overflow-hidden shadow-lg">
          {/* Subtle Diagonal Texture */}
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {/* Left: BIG SALE ONLINE */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 text-4xl sm:text-6xl font-black tracking-tight leading-none">
                <span>B</span>
                <span className="relative inline-flex flex-col items-center">
                  <Star className="w-3.5 h-3.5 fill-white text-white -mb-1" />
                  <span>I</span>
                </span>
                <span>G SALE</span>
              </div>
              <div className="text-3xl sm:text-5xl font-light tracking-[0.15em] uppercase leading-tight mt-1">
                ONLINE
              </div>
              <div className="mt-2 inline-block border-t border-white/40 pt-1.5 text-xs sm:text-sm font-bold tracking-wider">
                {data.saleDateRange || "từ 30.07 - đến 04.08"}
              </div>
            </div>

            {/* Right: Vertical GIẢM GIÁ ĐẾN + Giant 50% */}
            <div className="flex items-center gap-2">
              <span
                className="text-[#f5d000] text-xs sm:text-sm font-extrabold uppercase tracking-widest"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                GIẢM GIÁ ĐẾN
              </span>
              <span className="text-7xl sm:text-9xl font-black leading-none tracking-tighter drop-shadow-md">
                {data.saleDiscountPercent || "50%"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KHÁM PHÁ BỘ SƯU TẬP MỚI (3 PROMO CARDS) */}
      <section id="bo-suu-tap" className="pb-10">
        <div className="bg-[#e8e8e8] py-2.5 text-center mb-5">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#222222]">
            KHÁM PHÁ BỘ SƯU TẬP MỚI
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
          {(data.newCollections || phongGym11DefaultData.newCollections).map(
            (col, idx) => (
              <div
                key={col.id}
                className="relative h-56 overflow-hidden group cursor-pointer shadow-xs"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors" />

                {idx === 1 ? (
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="border-2 border-white bg-black/65 text-white p-3 w-36">
                      <span className="block text-xs font-bold">TRY</span>
                      <span className="block text-xl font-black leading-none text-[#5ce1e6]">
                        ALL
                      </span>
                      <span className="block text-xs font-bold">THE NEW</span>
                    </div>
                    <div className="bg-black text-white text-[10px] font-extrabold uppercase px-2.5 py-1 self-start">
                      {col.subtitle} — <span className="text-[#f5d000]">{col.brandTag}</span>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <span className="self-end bg-black/70 text-white text-[10px] font-bold uppercase px-2.5 py-1">
                      {col.brandTag}
                    </span>
                    <div className="flex items-end justify-between">
                      <span className="text-white font-extrabold text-xs uppercase drop-shadow">
                        {col.title}
                      </span>
                      {col.ctaText && (
                        <span className="bg-[#111111] text-[#f5d000] text-[10px] font-extrabold uppercase px-3 py-1">
                          {col.ctaText}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* 5. KHUYẾN MÃI HOT TRONG THÁNG (2x2 COLORFUL PROMO BANNERS) */}
      <section id="khuyen-mai-hot" className="max-w-6xl mx-auto px-4 pb-8">
        <LineSectionHeading title="KHUYẾN MÃI HOT TRONG THÁNG" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top-Left: Polo & Gym T-Shirts */}
          <div
            onClick={() => handleAddToCart("Combo Áo Thun Tập Gym Best Price")}
            className="relative h-60 bg-gradient-to-r from-[#80e5d8] via-[#bff5ed] to-[#9be8de] p-6 flex items-center justify-between overflow-hidden cursor-pointer group shadow-xs"
          >
            <div className="z-10 bg-white rounded-lg p-4 shadow-md transform -rotate-6 text-center border-2 border-[#e32229]">
              <span className="block text-xs font-black uppercase text-[#111111]">
                BEST PRICE
              </span>
              <span className="block text-2xl font-black text-[#e32229]">
                299<span className="text-xs">.000vnđ</span>
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
              alt="Áo thun thể thao khuyến mãi"
              className="w-60 h-48 object-cover rounded shadow-md group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Top-Right: Dép Kẹp Kappa */}
          <div
            onClick={() => handleAddToCart("Dép Kẹp Thể Thao Kappa")}
            className="relative h-60 bg-gradient-to-tr from-[#38b6ff] via-[#ffde59] to-[#ff66c4] p-6 flex flex-col justify-between overflow-hidden cursor-pointer group shadow-xs"
          >
            <div className="flex items-center justify-between z-10">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white drop-shadow leading-tight">
                DÉP KẸP
                <br />
                KAPPA
              </h3>
              <div className="bg-[#111111] text-[#f5d000] px-4 py-1.5 font-black text-lg sm:text-xl -skew-x-12 shadow">
                483.000<span className="text-xs font-normal">vnđ</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 z-10">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80"
                alt="Dép thể thao 1"
                className="h-24 w-full object-cover rounded shadow"
              />
              <img
                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80"
                alt="Dép thể thao 2"
                className="h-24 w-full object-cover rounded shadow"
              />
              <img
                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80"
                alt="Dép thể thao 3"
                className="h-24 w-full object-cover rounded shadow"
              />
            </div>
          </div>

          {/* Bottom-Left: Best Price 129.000vnđ */}
          <div
            onClick={() => handleAddToCart("Dép Thể Thao Đi Biển & Phòng Tập")}
            className="relative h-60 bg-gradient-to-r from-[#dcf7f0] via-white to-[#b8f0e0] border border-gray-100 p-6 flex items-center justify-between overflow-hidden cursor-pointer group shadow-xs"
          >
            <div className="z-10">
              <span className="block font-serif italic text-2xl sm:text-3xl text-[#222222]">
                Best Price
              </span>
              <span className="block text-xs text-gray-500 my-0.5">chỉ với</span>
              <span className="block text-2xl sm:text-3xl font-black text-[#e32229] italic">
                129.000<span className="text-xs">vnđ</span>
              </span>
            </div>
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80"
                alt="Bộ sưu tập dép thể thao"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom-Right: Ecko Unltd Best Price 290K */}
          <div
            onClick={() => handleAddToCart("Đai Lưng & Dây Tập Ecko Unltd")}
            className="relative h-60 bg-white border border-gray-200 p-6 flex items-center justify-between overflow-hidden cursor-pointer group shadow-xs"
          >
            <div className="w-1/2 pr-4">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
                alt="Đai lưng và phụ kiện thể thao"
                className="w-full h-44 object-cover rounded"
              />
            </div>
            <div className="w-1/2 text-center">
              <span className="inline-block bg-[#e32229] text-white text-[10px] font-extrabold px-2 py-0.5 mb-1">
                eckō unltd.
              </span>
              <span className="block text-lg sm:text-xl font-extrabold uppercase text-[#333333]">
                BEST PRICE
              </span>
              <span className="block text-5xl sm:text-6xl font-black text-[#222222] leading-none border-b-4 border-[#222222] pb-1">
                290K
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SẢN PHẨM BÁN CHẠY (4 BORDERED PRODUCT CARDS) */}
      <section id="san-pham-ban-chay" className="max-w-6xl mx-auto px-4 pb-8">
        <LineSectionHeading title="SẢN PHẨM BÁN CHẠY" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.bestSellers || phongGym11DefaultData.bestSellers).map((prod) => (
            <div
              key={prod.id}
              className="border border-gray-200 p-4 text-center flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="relative h-52 overflow-hidden mb-4 bg-white flex items-center justify-center">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {prod.discountBadge && (
                    <span className="absolute top-2 left-2 w-9 h-9 rounded-full bg-[#cc181f] text-white text-[10px] font-bold flex items-center justify-center shadow">
                      {prod.discountBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-xs font-extrabold text-[#111111] line-clamp-2 min-h-[32px] mb-2">
                  {prod.name}
                </h3>

                <div className="text-xs mb-3 space-x-1.5">
                  {prod.oldPrice && (
                    <span className="line-through text-gray-400">
                      {prod.oldPrice}
                    </span>
                  )}
                  <span className="font-extrabold text-[#111111]">
                    {prod.price}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleAddToCart(prod.name)}
                className="bg-[#111111] hover:bg-[#cc181f] text-white text-[10px] font-extrabold uppercase tracking-wider px-4 py-2 mx-auto transition-colors cursor-pointer"
              >
                THÊM VÀO GIỎ
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. THƯƠNG HIỆU (4x2 DOUBLE-BORDERED BRAND BOXES) */}
      <section className="max-w-6xl mx-auto px-4 pb-8">
        <LineSectionHeading title="THƯƠNG HIỆU" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {(data.brands || phongGym11DefaultData.brands).map((br) => (
            <div
              key={br.id}
              className="border-2 border-[#d5c4a1] p-1 bg-white hover:shadow-md transition-shadow"
            >
              <div className="border border-[#e8dec8] h-28 flex flex-col items-center justify-center p-4 text-center">
                <span
                  className="text-sm sm:text-base font-black uppercase tracking-wider"
                  style={{ color: br.accentColor }}
                >
                  {br.name}
                </span>
                {br.subText && (
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 mt-1 font-semibold">
                    {br.subText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. DANH MỤC NỔI BẬT (2x2 GRAY CARDS WITH NAM / NỮ BUTTONS) */}
      <section id="danh-muc" className="max-w-6xl mx-auto px-4 pb-8">
        <LineSectionHeading title="DANH MỤC NỔI BẬT" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(
            data.featuredCategories || phongGym11DefaultData.featuredCategories
          ).map((cat) => (
            <div
              key={cat.id}
              className="bg-[#f3f3f3] p-6 grid grid-cols-12 gap-4 items-center"
            >
              <div className="col-span-7">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase text-[#111111] mb-2">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(`${cat.title} - NAM`)}
                    className={`text-[10px] font-bold uppercase px-3.5 py-1 border border-[#111111] cursor-pointer ${
                      activeGenderFilter === "NAM"
                        ? "bg-[#111111] text-white"
                        : "bg-white text-[#111111]"
                    }`}
                  >
                    NAM
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(`${cat.title} - NỮ`)}
                    className={`text-[10px] font-bold uppercase px-3.5 py-1 border border-[#111111] cursor-pointer ${
                      activeGenderFilter === "NỮ"
                        ? "bg-[#111111] text-white"
                        : "bg-white text-[#111111]"
                    }`}
                  >
                    NỮ
                  </button>
                </div>
              </div>

              <div className="col-span-5 h-36 overflow-hidden rounded bg-white p-2 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TIN TỨC (4 COLUMNS) */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <LineSectionHeading title="TIN TỨC" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.news || phongGym11DefaultData.news || []).map((post) => (
            <article key={post.id} className="text-center group">
              <div className="h-40 overflow-hidden mb-3 bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-extrabold text-xs text-[#111111] group-hover:text-[#cc181f] transition-colors line-clamp-2 mb-1">
                {post.title}
              </h3>
              <p className="inline-flex items-center gap-1 text-[10px] text-gray-400 mb-2">
                <Clock className="w-3 h-3" /> {post.date}
              </p>
              <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 10. LIGHT GRAY 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#eeeeee] pt-12 pb-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs text-gray-600">
          {/* Col 1 (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="mb-3 leading-none">
              <span className="block text-lg font-black uppercase tracking-wider text-[#d4b100]">
                {data.business.name}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-0.5">
                international
              </span>
            </div>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                <span>{data.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#111111] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2 (2 Cols): MENU */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold uppercase text-[#111111] mb-3">MENU</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#trang-chu" className="font-bold text-[#111111]">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#bo-suu-tap" className="hover:text-[#111111]">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#san-pham-ban-chay" className="hover:text-[#111111]">
                  Cửa hàng
                </a>
              </li>
              <li>
                <a href="#khuyen-mai-hot" className="hover:text-[#111111]">
                  Outlet Sale
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-[#111111]">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 Cols): CHÍNH SÁCH */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold uppercase text-[#111111] mb-3">
              CHÍNH SÁCH
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>Chính sách thẻ thành viên</li>
              <li>Hướng dẫn mua hàng</li>
              <li>Chính sách đổi trả 7 ngày</li>
              <li>Hướng dẫn chọn size giày &amp; áo</li>
              <li>Chính sách bảo hành chính hãng</li>
            </ul>
          </div>

          {/* Col 4 (3 Cols): ĐĂNG KÝ NHẬN TIN */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold uppercase text-[#111111] mb-2">
              ĐĂNG KÝ NHẬN TIN
            </h4>
            <p className="text-[11px] mb-3">
              Đăng ký để nhận được thông tin mới nhất từ chúng tôi.
            </p>
            {newsletterDone ? (
              <div className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Đã đăng ký nhận ưu đãi!</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNewsletterDone(true);
                }}
                className="flex h-9 bg-white border border-gray-300 mb-3"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email..."
                  className="w-full px-3 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#111111] hover:bg-[#cc181f] text-white text-[10px] font-extrabold uppercase px-4 shrink-0 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-gray-300/70 text-center text-[11px] text-gray-500">
          © Bản quyền thuộc về <strong className="text-[#111111]">{data.business.name}</strong>.
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
