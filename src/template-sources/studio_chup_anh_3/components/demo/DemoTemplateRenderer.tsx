"use client";

import React, { useState } from "react";
import {
  Search,
  User,
  ShoppingCart,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  X,
  Phone,
  Sparkles,
  Menu,
  ArrowUp,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  studioChupAnh3DefaultData,
  StudioChupAnh3Data,
  StudioChupAnh3Product,
} from "@/template-sources/studio_chup_anh_3/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

function FloralWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      className={`pointer-events-none select-none text-[#e8c6be]/55 ${className}`}
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <circle cx="90" cy="90" r="14" />
      <path d="M90 30C104 52 104 68 90 76C76 68 76 52 90 30Z" />
      <path d="M90 150C104 128 104 112 90 104C76 112 76 128 90 150Z" />
      <path d="M30 90C52 76 68 76 76 90C68 104 52 104 30 90Z" />
      <path d="M150 90C128 76 112 76 104 90C112 104 128 104 150 90Z" />
      <path d="M46 46C68 54 78 66 78 80C64 80 52 70 46 46Z" />
      <path d="M134 134C112 126 102 114 102 100C116 100 128 110 134 134Z" />
      <path d="M134 46C126 68 114 78 100 78C100 64 110 52 134 46Z" />
      <path d="M46 134C54 112 66 102 80 102C80 116 70 128 46 134Z" />
    </svg>
  );
}

function MonaFloraLogo({ brandName }: { brandName: string }) {
  return (
    <div className="inline-flex items-center gap-2 select-none">
      <div className="text-right leading-none">
        <span className="block text-xs sm:text-sm font-serif tracking-[0.25em] text-zinc-700 uppercase">
          {brandName.split(" ")[0] || "MONA"}
        </span>
        <span className="block text-base sm:text-lg font-serif italic text-zinc-500 -mt-0.5">
          {brandName.split(" ").slice(1).join(" ") || "Flora"}
        </span>
      </div>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-9 h-9 text-zinc-700"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <circle cx="24" cy="24" r="5" />
        <path d="M24 8C29 14 29 18 24 20C19 18 19 14 24 8Z" />
        <path d="M24 40C29 34 29 30 24 28C19 30 19 34 24 40Z" />
        <path d="M8 24C14 19 18 19 20 24C18 29 14 29 8 24Z" />
        <path d="M40 24C34 19 30 19 28 24C30 29 34 29 40 24Z" />
      </svg>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#c81e24]">
        {title}
      </h2>
      <div className="w-8 h-0.5 bg-[#c81e24] mx-auto mt-1.5" />
    </div>
  );
}

export function DemoTemplateRenderer({
  data: incomingData,
}: DemoTemplateRendererProps) {
  const data: StudioChupAnh3Data = adaptClonedTemplateData(
    studioChupAnh3DefaultData,
    incomingData
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string>(
    data.faqs?.[0]?.id || "faq-1"
  );
  const [cartCount, setCartCount] = useState(0);
  const [selectedItemModal, setSelectedItemModal] =
    useState<StudioChupAnh3Product | null>(null);
  const [selectedComboTitle, setSelectedComboTitle] = useState<string | null>(
    null
  );
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    date: "",
    note: "",
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const newestProducts = data.products.filter((p) => p.section === "newest");
  const celebrationProducts = data.products.filter(
    (p) => p.section === "celebration"
  );
  const colorProducts = data.products.filter((p) => p.section === "color");

  const openOrderModal = (product: StudioChupAnh3Product) => {
    setBookingSuccess(false);
    setSelectedComboTitle(null);
    setSelectedItemModal(product);
  };

  const openComboModal = (comboTitle: string, price: string) => {
    setBookingSuccess(false);
    setSelectedItemModal(null);
    setSelectedComboTitle(`${comboTitle} — ${price}₫`);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) return;
    setCartCount((c) => c + 1);
    setBookingSuccess(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-zinc-800 font-sans antialiased overflow-x-hidden selection:bg-[#c81e24] selection:text-white">
      {/* Decorative Side Floral Watermarks matching SC003 */}
      <FloralWatermark className="hidden xl:block fixed top-72 -left-10 w-44 h-44 z-0" />
      <FloralWatermark className="hidden xl:block fixed bottom-36 -right-10 w-44 h-44 z-0" />

      {/* 1 & 2. BLUSH PINK HEADER + BRIDAL BOUQUET HERO */}
      <section
        id="trang-chu"
        className="relative bg-gradient-to-br from-[#f6dfeb] via-[#f9e6f0] to-[#f4d5e5] overflow-hidden"
      >
        {/* Top Bar */}
        <header className="relative z-20 max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-zinc-700">
            <a
              href="#trang-chu"
              className="text-zinc-900 border-b border-zinc-900 pb-0.5"
            >
              TRANG CHỦ
            </a>
            <a
              href="#san-pham-moi"
              className="hover:text-[#c81e24] transition-colors"
            >
              CỬA HÀNG
            </a>
            <a
              href="#tin-tuc"
              className="hover:text-[#c81e24] transition-colors"
            >
              BLOG
            </a>
            <a
              href="#cau-hoi"
              className="hover:text-[#c81e24] transition-colors"
            >
              LIÊN HỆ
            </a>
          </nav>

          <a href="#trang-chu" className="focus:outline-none">
            {data.business.logo ? (
              <img
                src={data.business.logo}
                alt={data.business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <MonaFloraLogo brandName={data.business.name} />
            )}
          </a>

          <div className="flex items-center gap-3.5 text-zinc-700">
            <a
              href="#san-pham-moi"
              aria-label="Tìm kiếm"
              className="hover:text-[#c81e24] transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => openComboModal("Đặt lịch tư vấn Hoa & Ảnh cưới", "Miễn phí")}
              aria-label="Tài khoản"
              className="hover:text-[#c81e24] transition-colors cursor-pointer"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => openOrderModal(newestProducts[0])}
              aria-label="Giỏ hàng"
              className="inline-flex items-center gap-1 hover:text-[#c81e24] transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="w-4 h-4 rounded-full bg-zinc-900 text-white text-[9px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-zinc-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-b border-pink-100 px-5 py-3 space-y-2 text-xs font-bold uppercase tracking-wider">
            <a
              href="#trang-chu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#c81e24]"
            >
              TRANG CHỦ
            </a>
            <a
              href="#combo-uu-dai"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              COMBO ƯU ĐÃI
            </a>
            <a
              href="#san-pham-moi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              SẢN PHẨM MỚI NHẤT
            </a>
            <a
              href="#tin-tuc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              TIN TỨC
            </a>
            <a
              href="#cau-hoi"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-zinc-700"
            >
              CÂU HỎI THƯỜNG GẶP
            </a>
          </div>
        )}

        {/* Hero Body */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-6 pb-16 md:py-16 grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left Typography */}
          <div className="md:col-span-6 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-600">
              {data.hero.eyebrow || "HOA TƯƠI"}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-light text-zinc-900 leading-[1.22]">
              {data.hero.title}
            </h1>
            <div className="pt-2">
              <a
                href={data.hero.ctaLink || "#san-pham-moi"}
                className="inline-flex items-center gap-1.5 bg-[#c81e24] hover:bg-[#a5171c] text-white text-[11px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full shadow transition-colors"
              >
                <span>{data.hero.ctaText || "MUA NGAY"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-12 md:pt-20 text-zinc-700">
              <span className="text-2xl font-light">02</span>
              <span className="text-xs text-zinc-400"> / 03</span>
            </div>
          </div>

          {/* Right Bouquet Visual */}
          <div className="md:col-span-6 relative flex justify-center md:justify-end">
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white/60">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom-Right Floating Cream Lifestyle Card */}
        <div className="hidden sm:flex items-center gap-4 bg-[#fdf2ea] px-6 py-4 shadow-md max-w-xs ml-auto mr-4 md:mr-12 mb-4 rounded-xs border border-amber-100">
          <div className="flex-1">
            <p className="text-xs font-medium text-zinc-800 leading-snug">
              {data.hero.subtitle || "Tạo Ra Lối Sống Sức Khỏe Và Hạnh Phúc"}
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=200&q=80"
            alt="Hoa hồng"
            className="w-16 h-12 object-cover rounded-xs shrink-0"
          />
        </div>
      </section>

      {/* 3. "COMBO ƯU ĐÃI" (3 COLORED PRICING CARDS: GREEN, GOLD, RED) */}
      <section id="combo-uu-dai" className="relative z-10 py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="COMBO ƯU ĐÃI" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.combos.map((combo) => (
              <div
                key={combo.id}
                className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-[0_6px_25px_rgba(0,0,0,0.05)] flex flex-col"
              >
                {/* Colored Header */}
                <div
                  className="py-6 px-4 text-center text-white"
                  style={{ backgroundColor: combo.headerBg }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-90 mb-1">
                    {combo.title}
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {combo.price}
                    <sup className="text-xs font-normal ml-0.5">₫</sup>
                  </div>
                  <p className="text-[11px] opacity-90 mt-1">{combo.subtitle}</p>
                </div>

                {/* Items List */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                  <ul className="space-y-3 text-[11px] text-zinc-500">
                    {combo.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between gap-2 border-b border-dashed border-gray-100 pb-2"
                      >
                        <span className="truncate">{item.name}</span>
                        <span className="font-semibold text-zinc-700 shrink-0">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={() => openComboModal(combo.title, combo.price)}
                      style={{ backgroundColor: combo.buttonBg }}
                      className="text-white text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      LIÊN HỆ NGAY
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "SẢN PHẨM NỔI BẬT" (4 CATEGORY CARDS + 3 SERVICE COLUMNS) */}
      <section className="relative z-10 py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="SẢN PHẨM NỔI BẬT" />

          {/* 4 Square Category Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {data.featuredCategories.map((cat) => (
              <a
                key={cat.id}
                href="#san-pham-moi"
                className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-zinc-100 flex items-center justify-center text-center"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-white/35 group-hover:bg-white/20 transition-colors" />
                <div className="relative z-10 px-2">
                  <h3 className="text-base font-bold text-zinc-800">
                    {cat.title}
                  </h3>
                  <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 border-b border-zinc-800 pb-0.5">
                    MUA NGAY
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* 3 Service Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 py-4 text-center">
            {data.perks.map((perk) => (
              <div key={perk.id} className="py-2 px-4">
                <h4 className="text-xs font-bold text-zinc-800 mb-0.5">
                  {perk.title}
                </h4>
                <p className="text-[11px] text-zinc-400">{perk.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "SẢN PHẨM MỚI NHẤT" (SOFT PEACH ROUNDED CONTAINER #fde8e4 WITH 4x2 GRID) */}
      <section id="san-pham-moi" className="relative z-10 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#fde8e4] rounded-2xl p-6 sm:p-8 md:p-10">
            <SectionHeading title="SẢN PHẨM MỚI NHẤT" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {newestProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openOrderModal(item)}
                  className="group text-center cursor-pointer"
                >
                  <div className="relative aspect-[4/5] rounded-xs overflow-hidden bg-white mb-2.5 shadow-xs">
                    {item.badge && (
                      <span className="absolute top-2 left-2 z-10 bg-[#f59e0b] text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-xs">
                        {item.badge}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-zinc-700 group-hover:text-[#c81e24] transition-colors">
                    {item.code}
                  </h3>
                  <p className="text-[11px] text-zinc-500 line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-xs font-bold text-[#c81e24] mt-0.5">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => openOrderModal(newestProducts[0])}
                className="bg-[#c81e24] hover:bg-[#a5171c] text-white text-xs font-bold px-8 py-2.5 rounded-full shadow transition-colors cursor-pointer"
              >
                Xem Thêm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CROSSED DIAGONAL MARQUEE RIBBONS (* Ưu đãi * Ưu đãi *) */}
      <div className="relative py-10 my-4 overflow-hidden select-none">
        {/* Back Light Gray Ribbon tilted -2deg */}
        <div
          className="bg-zinc-300/80 text-white py-2.5 text-lg sm:text-xl font-medium tracking-wider whitespace-nowrap overflow-hidden"
          style={{ transform: "rotate(-2.2deg) scale(1.05)" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-3">
              * Ưu đãi
            </span>
          ))}
        </div>

        {/* Front Bright Crimson Red Ribbon tilted +1deg */}
        <div
          className="bg-[#c81e24] text-white py-2.5 text-lg sm:text-xl font-medium tracking-wider whitespace-nowrap overflow-hidden shadow-md -mt-8"
          style={{ transform: "rotate(0.8deg) scale(1.05)" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-3">
              * Ưu đãi
            </span>
          ))}
        </div>
      </div>

      {/* 7. 5-TILE ASYMMETRIC BENTO DISCOVERY GRID */}
      <section className="relative z-10 py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          {/* Top Row of 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {data.bentoTiles.slice(0, 3).map((tile) => (
              <a
                key={tile.id}
                href="#hoa-chuc-mung"
                className="group relative aspect-square overflow-hidden bg-zinc-100 p-6 flex flex-col justify-center"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 ${
                    tile.darkText ? "bg-white/55" : "bg-black/35"
                  }`}
                />
                <div
                  className={`relative z-10 space-y-1.5 ${
                    tile.darkText ? "text-zinc-900" : "text-white"
                  }`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-80">
                    {tile.eyebrow}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">
                    {tile.title}
                  </h3>
                  <span className="inline-block pt-1 text-[10px] font-bold uppercase tracking-wider border-b border-current pb-0.5">
                    {tile.ctaText}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Row of 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
            {data.bentoTiles.slice(3, 5).map((tile, idx) => (
              <a
                key={tile.id}
                href="#hoa-chuc-mung"
                className={`${
                  idx === 0 ? "sm:col-span-6" : "sm:col-span-6"
                } group relative h-52 overflow-hidden bg-zinc-900 p-6 flex flex-col justify-center`}
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-white space-y-1.5 max-w-xs">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-85">
                    {tile.eyebrow}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">
                    {tile.title}
                  </h3>
                  <span className="inline-block pt-1 text-[10px] font-bold uppercase tracking-wider border-b border-white pb-0.5">
                    {tile.ctaText}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8A. "HOA CHÚC MỪNG" (4x2 GRID) */}
      <section id="hoa-chuc-mung" className="relative z-10 py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="HOA CHÚC MỪNG" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {celebrationProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => openOrderModal(item)}
                className="group text-center cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 mb-2.5">
                  {item.badge && (
                    <span className="absolute top-2 left-2 z-10 bg-[#f59e0b] text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-xs">
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-semibold text-zinc-700">
                  {item.code}
                </h3>
                <p className="text-[11px] text-zinc-500 line-clamp-1">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-[#c81e24] mt-0.5">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => openOrderModal(celebrationProducts[0])}
              className="bg-[#c81e24] hover:bg-[#a5171c] text-white text-xs font-bold px-8 py-2.5 rounded-full shadow transition-colors cursor-pointer"
            >
              Xem Thêm
            </button>
          </div>
        </div>
      </section>

      {/* 8B. "HOA THEO MÀU" (4x2 GRID) */}
      <section className="relative z-10 py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="HOA THEO MÀU" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {colorProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => openOrderModal(item)}
                className="group text-center cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 mb-2.5">
                  {item.badge && (
                    <span className="absolute top-2 left-2 z-10 bg-[#f59e0b] text-white text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-xs">
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs font-semibold text-zinc-700">
                  {item.code}
                </h3>
                <p className="text-[11px] text-zinc-500 line-clamp-1">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-[#c81e24] mt-0.5">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => openOrderModal(colorProducts[0])}
              className="bg-[#c81e24] hover:bg-[#a5171c] text-white text-xs font-bold px-8 py-2.5 rounded-full shadow transition-colors cursor-pointer"
            >
              Xem Thêm
            </button>
          </div>
        </div>
      </section>

      {/* 9. "TIN TỨC" (SOFT GRAY CONTAINER WITH 3 EDITORIAL CARDS) */}
      <section id="tin-tuc" className="relative z-10 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#f7f7f7] rounded-xl p-6 sm:p-8 md:p-10">
            <SectionHeading title="TIN TỨC" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(data.news || []).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xs overflow-hidden shadow-xs flex flex-col text-center"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                    <div>
                      <p className="text-[10px] text-zinc-400">
                        {post.date}{" "}
                        <span className="font-bold text-zinc-700 uppercase ml-1">
                          {post.category}
                        </span>
                      </p>
                      <h3 className="text-xs font-bold text-zinc-800 mt-1 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 leading-relaxed mt-1.5 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div>
                      <a
                        href="#cau-hoi"
                        className="inline-block text-[10px] font-bold text-zinc-700 border-b border-zinc-700 pb-0.5 hover:text-[#c81e24] hover:border-[#c81e24]"
                      >
                        Đọc thêm
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. "CÁC CÂU HỎI THƯỜNG GẶP" (ACCORDION FAQ) */}
      <section id="cau-hoi" className="relative z-10 py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading title="CÁC CÂU HỎI THƯỜNG GẶP" />

          <div className="space-y-3">
            {data.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-100 rounded-sm bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] px-5 sm:px-7 py-5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 w-20 shrink-0">
                        CÂU HỎI
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold ${
                          isOpen ? "text-[#c81e24]" : "text-zinc-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                        isOpen
                          ? "border-[#c81e24] text-[#c81e24]"
                          : "border-gray-200 text-zinc-400"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-gray-50 sm:pl-28">
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        TRẢ LỜI
                      </span>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MINIMALIST NEWSLETTER & FOOTER */}
      <footer className="relative z-10 bg-white pt-10 pb-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          {/* Newsletter Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-800">
                BẢN TIN
              </h4>
              <p className="text-[11px] text-zinc-400">
                Cập nhật những mẫu hoa cưới và ưu đãi studio mới nhất
              </p>
            </div>

            {newsletterSent ? (
              <p className="text-xs font-bold text-[#386632]">
                Cảm ơn bạn đã đăng ký nhận bản tin từ {data.business.name}!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newsletterEmail.trim()) return;
                  setNewsletterSent(true);
                }}
                className="flex w-full sm:w-auto items-center border-b border-gray-200 pb-1"
              >
                <input
                  type="email"
                  required
                  placeholder="Nhập địa chỉ Email của bạn..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-64 text-xs text-zinc-700 placeholder:text-zinc-300 focus:outline-none py-1"
                />
                <button
                  type="submit"
                  className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 hover:text-[#c81e24] pl-3 cursor-pointer"
                >
                  ĐĂNG KÝ
                </button>
              </form>
            )}
          </div>

          {/* Bottom Nav & Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <div className="flex items-center gap-5">
              <a
                href="#trang-chu"
                className="text-zinc-900 font-semibold border-b border-zinc-900"
              >
                Trang chủ
              </a>
              <a href="#san-pham-moi" className="hover:text-[#c81e24]">
                Cửa hàng
              </a>
              <a href="#tin-tuc" className="hover:text-[#c81e24]">
                Blog
              </a>
              <a href="#cau-hoi" className="hover:text-[#c81e24]">
                Liên hệ
              </a>
            </div>

            <p className="text-[11px] text-zinc-400">
              © Thiết kế và lập trình bởi{" "}
              <strong className="text-zinc-700">TaviWeb</strong> •{" "}
              <span>{data.business.name}</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ORDER / BOOKING MODAL */}
      {(selectedItemModal || selectedComboTitle) && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedItemModal(null);
            setSelectedComboTitle(null);
          }}
        >
          <div
            className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#c81e24] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-85">
                  {data.business.name}
                </p>
                <h3 className="text-base font-bold">
                  {selectedComboTitle ||
                    `${selectedItemModal?.code} — ${selectedItemModal?.price}`}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedItemModal(null);
                  setSelectedComboTitle(null);
                }}
                className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              {bookingSuccess ? (
                <div className="text-center py-4 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#386632] mx-auto" />
                  <h4 className="text-base font-bold text-zinc-900">
                    Đặt hoa &amp; lịch hẹn thành công!
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Cảm ơn <strong>{bookingForm.name}</strong>. Chuyên viên
                    Florist của <strong>{data.business.name}</strong> sẽ liên hệ
                    qua số <strong>{bookingForm.phone}</strong> trong 10 phút.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedItemModal(null);
                      setSelectedComboTitle(null);
                    }}
                    className="bg-[#c81e24] text-white text-xs font-bold px-6 py-2 rounded-full"
                  >
                    Hoàn tất
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleBookingSubmit}
                  className="space-y-3 text-xs"
                >
                  {selectedItemModal && (
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                      <img
                        src={selectedItemModal.image}
                        alt={selectedItemModal.name}
                        className="w-16 h-16 object-cover rounded-sm"
                      />
                      <div>
                        <p className="font-bold text-zinc-800">
                          {selectedItemModal.name}
                        </p>
                        <p className="text-[#c81e24] font-bold mt-0.5">
                          {selectedItemModal.price}
                        </p>
                      </div>
                    </div>
                  )}
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên người đặt *"
                    value={bookingForm.name}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, name: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:border-[#c81e24]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Số điện thoại liên hệ *"
                    value={bookingForm.phone}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, phone: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:border-[#c81e24]"
                  />
                  <input
                    type="text"
                    placeholder="Ngày nhận hoa / chụp ảnh & lời chúc trên thiệp"
                    value={bookingForm.note}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, note: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:border-[#c81e24]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#c81e24] hover:bg-[#a5171c] text-white font-bold uppercase tracking-wider py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    XÁC NHẬN ĐẶT NGAY
                  </button>
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
