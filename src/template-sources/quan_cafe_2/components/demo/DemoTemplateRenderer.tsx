"use client";

import React, { useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Truck,
  X,
  Coffee,
  CheckCircle2,
  ArrowUp,
  Menu as MenuIcon
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  quanCafe2DefaultData,
  type QuanCafe2Data,
  type QuanCafe2Product,
  type QuanCafe2BrewMethod
} from "@/template-sources/quan_cafe_2/data/mockData";

interface DemoTemplateRendererProps {
  data?: any;
}

export function DemoTemplateRenderer({ data: incomingData }: DemoTemplateRendererProps) {
  const data: QuanCafe2Data = adaptClonedTemplateData(quanCafe2DefaultData, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [roastPage, setRoastPage] = useState(1);
  const [productPage, setProductPage] = useState(1);
  const [brewPage, setBrewPage] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);

  const [selectedProduct, setSelectedProduct] = useState<QuanCafe2Product | null>(null);
  const [selectedBrew, setSelectedBrew] = useState<QuanCafe2BrewMethod | null>(null);
  const [activeExcellenceIdx, setActiveExcellenceIdx] = useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const testimonials = data.testimonials || quanCafe2DefaultData.testimonials || [];

  const handleAddToCart = (product: QuanCafe2Product) => {
    setCartCount((c) => c + 1);
    setSelectedProduct(product);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSubscribed(false), 4000);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#1f1610] font-sans selection:bg-[#5c3720] selection:text-white"
    >
      {/* 1. DARK ESPRESSO NAVBAR + ROASTED COFFEE BEANS HERO */}
      <section className="relative bg-[#0d0806] text-white overflow-hidden">
        {/* Top Header */}
        <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between border-b border-white/10">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
            <a href="#pure-coffee" className="hover:text-[#d4a373] transition-colors">
              GIỚI THIỆU
            </a>
            <a href="#products" className="hover:text-[#d4a373] transition-colors">
              SẢN PHẨM
            </a>
            <a href="#journey" className="hover:text-[#d4a373] transition-colors">
              TIN TỨC
            </a>
            <a href="#footer" className="hover:text-[#d4a373] transition-colors">
              LIÊN HỆ
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Mở menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Center Coffee Leaf Logo + Brand Name */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-white text-[#3c2415] flex items-center justify-center shadow-sm">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                {data.business.name}
              </span>
            </div>
          </a>

          {/* Right Search + Wishlist + User + Cart */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center border-b border-white/30 pb-1 px-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm..."
                className="bg-transparent text-xs text-white placeholder:text-white/50 focus:outline-none w-32 md:w-40"
              />
              <Search className="w-3.5 h-3.5 text-white/80" />
            </div>
            <button
              type="button"
              aria-label="Yêu thích"
              className="text-white/85 hover:text-[#d4a373] transition-colors"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="text-white/85 hover:text-[#d4a373] transition-colors"
            >
              <User className="w-4 h-4" />
            </button>
            <a
              href="#products"
              className="relative text-white/90 hover:text-[#d4a373] transition-colors"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#c0392b] text-white text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </a>
          </div>
        </header>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a100b] px-6 py-4 border-b border-white/10 space-y-2.5 text-xs uppercase tracking-wider">
            <a
              href="#pure-coffee"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90 hover:text-[#d4a373]"
            >
              Giới thiệu
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90 hover:text-[#d4a373]"
            >
              Sản phẩm đóng gói
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90 hover:text-[#d4a373]"
            >
              Hành trình sản xuất
            </a>
            <a
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-white/90 hover:text-[#d4a373]"
            >
              Liên hệ
            </a>
          </div>
        )}

        {/* Roasted Coffee Beans Mound Hero Banner */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] flex items-center justify-center">
          <img
            src={data.hero.backgroundImage}
            alt={data.hero.title}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/75" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.28em] text-[#e6ccb2] mb-3">
              {data.hero.eyebrow || "ROASTERY & SPECIALTY COFFEE"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow">
              {data.hero.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed mb-7">
              {data.hero.description || data.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={data.hero.ctaLink || "#products"}
                className="bg-[#5c3720] hover:bg-[#754629] text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded transition-all shadow-lg"
              >
                {data.hero.ctaText || "KHÁM PHÁ SẢN PHẨM"}
              </a>
              <a
                href="#pure-coffee"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded transition-all"
              >
                TÌM HIỂU THÊM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "CÀ PHÊ NGUYÊN CHẤT" & "THƠM NGON CHẤT LƯỢNG" SPLIT SECTION */}
      <section id="pure-coffee" className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: CÀ PHÊ NGUYÊN CHẤT + Spilled Cup Photo */}
            <div className="lg:col-span-4">
              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#1f1610] mb-4">
                {data.pureCoffeeSection.leftTitle}
              </h2>
              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4">
                {data.business.aboutText[0]}
              </p>
              <div className="text-right mb-6">
                <a
                  href="#products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f1610] hover:text-[#5c3720] transition-colors"
                >
                  Khám phá <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="rounded-xl overflow-hidden bg-white p-2">
                <img
                  src={data.pureCoffeeSection.leftImage}
                  alt="Tách cà phê hạt nguyên chất"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Column: THƠM NGON CHẤT LƯỢNG + 3 Bordered Roast Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start mb-8">
                <div className="md:col-span-5">
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#1f1610] leading-snug">
                    {data.pureCoffeeSection.rightTitle}
                  </h2>
                </div>
                <div className="md:col-span-7">
                  <p className="text-xs sm:text-[13px] text-stone-500 leading-relaxed">
                    {data.pureCoffeeSection.rightSubtitle}
                  </p>
                </div>
              </div>

              {/* 3 Bordered Cards Featuring Circular Coffee Visuals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {data.pureCoffeeSection.roastTypes.map((roast) => (
                  <div
                    key={roast.id}
                    className="border border-stone-200 rounded-xl p-6 text-center bg-white hover:shadow-md hover:border-[#5c3720]/40 transition-all group"
                  >
                    <div className="w-28 h-28 mx-auto mb-5 rounded-full p-1.5 bg-gradient-to-tr from-[#3c2415] to-[#d4a373] shadow-inner overflow-hidden">
                      <img
                        src={roast.image}
                        alt={roast.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-[#1f1610] mb-1">
                      {roast.name}
                    </h3>
                    <p className="text-[11px] text-stone-400">{roast.roastLevel}</p>
                  </div>
                ))}
              </div>

              {/* Pagination Indicator < 1 / 4 > */}
              <div className="flex items-center justify-center gap-3 mt-7 text-xs text-stone-500">
                <button
                  type="button"
                  onClick={() => setRoastPage((p) => (p > 1 ? p - 1 : 4))}
                  className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#5c3720] hover:text-[#5c3720]"
                  aria-label="Trang trước"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="font-semibold text-[#1f1610]">{roastPage} / 4</span>
                <button
                  type="button"
                  onClick={() => setRoastPage((p) => (p < 4 ? p + 1 : 1))}
                  className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#5c3720] hover:text-[#5c3720]"
                  aria-label="Trang tiếp"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "SẢN PHẨM ĐÓNG GÓI" (#faf7f2 background) */}
      <section id="products" className="py-16 lg:py-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-tight text-[#1f1610] mb-2">
              SẢN PHẨM ĐÓNG GÓI
            </h2>
            <p className="text-xs sm:text-[13px] text-stone-500">
              Nhâm nhi mỗi ngày với những loại cà phê đặc biệt như Arabica, Robusta, Espresso và
              nhiều hơn nữa!
            </p>
          </div>

          {/* 4 White Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.packagedProducts
              .filter((p) =>
                searchQuery.trim()
                  ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
                  : true
              )
              .map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleAddToCart(product)}
                  className="bg-white border border-stone-200/80 rounded-xl p-5 flex flex-col items-center text-center relative group cursor-pointer hover:shadow-lg transition-all"
                >
                  {/* Brown "NEW" Badge */}
                  <span className="absolute top-3.5 left-3.5 bg-[#5c3720] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-xs">
                    {product.badge}
                  </span>

                  {/* Coffee Bag Photo */}
                  <div className="w-40 h-48 my-4 overflow-hidden rounded-lg bg-[#faf7f2] flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center justify-center gap-0.5 text-stone-300 group-hover:text-amber-400 transition-colors mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#1f1610] group-hover:text-[#5c3720] transition-colors mb-1">
                    {product.name}
                  </h3>

                  {/* Red Price */}
                  <p className="text-xs sm:text-sm font-extrabold text-[#c0392b]">
                    {product.price}
                  </p>
                </div>
              ))}
          </div>

          {/* Pagination < 1 / 5 > */}
          <div className="flex items-center justify-center gap-3 mt-9 text-xs text-stone-500">
            <button
              type="button"
              onClick={() => setProductPage((p) => (p > 1 ? p - 1 : 5))}
              className="w-6 h-6 rounded-full border border-stone-300 bg-white flex items-center justify-center hover:border-[#5c3720]"
              aria-label="Trang sản phẩm trước"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold text-[#1f1610]">{productPage} / 5</span>
            <button
              type="button"
              onClick={() => setProductPage((p) => (p < 5 ? p + 1 : 1))}
              className="w-6 h-6 rounded-full border border-stone-300 bg-white flex items-center justify-center hover:border-[#5c3720]"
              aria-label="Trang sản phẩm tiếp"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. "SỰ VƯỢT TRỘI HÀNG ĐẦU" ROUNDED SPLIT BOX */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12">
            {/* Left White Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="p-7 sm:p-10 lg:p-12">
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-center text-[#1f1610] mb-3">
                  {data.excellenceSection.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-stone-500 text-center leading-relaxed mb-8 max-w-md mx-auto">
                  {data.excellenceSection.subtitle}
                </p>

                {/* Numbered List 01, 02, 03 with Horizontal Dividers */}
                <div className="max-w-sm mx-auto divide-y divide-stone-200 border-b border-stone-200 mb-8">
                  {data.excellenceSection.items.map((item, idx) => (
                    <div
                      key={item.number}
                      onClick={() => setActiveExcellenceIdx(idx)}
                      className="py-3.5 cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-stone-400">
                          {item.number}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#1f1610] group-hover:text-[#5c3720] transition-colors">
                          {item.title}
                        </span>
                      </div>
                      {activeExcellenceIdx === idx && (
                        <p className="text-[11px] text-stone-500 mt-1.5 pl-8 leading-relaxed">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Brown "Khám Phá Ngay" Button */}
                <div className="text-center">
                  <a
                    href="#products"
                    className="inline-block bg-[#5c3720] hover:bg-[#3c2415] text-white text-xs font-bold px-7 py-2.5 rounded transition-colors"
                  >
                    {data.excellenceSection.ctaText}
                  </a>
                </div>
              </div>

              {/* Bottom Trust Bar */}
              <div className="border-t border-stone-200 px-6 py-3.5 bg-stone-50/50 flex flex-wrap items-center justify-center sm:justify-between gap-3 text-[11px] font-semibold text-[#1f1610]">
                <span className="flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5 text-stone-500" />
                  {data.excellenceSection.trustBadges[0]}
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-stone-600" />
                  {data.excellenceSection.trustBadges[1]}
                </span>
              </div>
            </div>

            {/* Right Panel Overhead Photo of Hands Holding Latte Art & Iced Coffee */}
            <div className="lg:col-span-6 min-h-[340px] lg:min-h-[460px] overflow-hidden">
              <img
                src={data.excellenceSection.image}
                alt="Thưởng thức Latte Art và Cà phê nguyên chất"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. "HÀNH TRÌNH SẢN XUẤT CÀ PHÊ" (#faf7f2 background) */}
      <section id="journey" className="py-16 lg:py-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-tight text-[#1f1610] mb-2">
              HÀNH TRÌNH SẢN XUẤT CÀ PHÊ
            </h2>
            <p className="text-xs sm:text-[13px] text-stone-500">
              Khám phá quy trình chất lượng hàng đầu của sản phẩm cà phê tại cửa hàng của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {data.productionJourney.map((step) => (
              <div
                key={step.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                <div className="sm:col-span-6 rounded-2xl overflow-hidden shadow-sm aspect-[4/3] bg-amber-50">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#1f1610]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.description}</p>
                  <p className="text-[11px] text-stone-500 leading-relaxed">{step.detailText}</p>
                  <div className="pt-1">
                    <a
                      href="#products"
                      className="inline-block bg-[#5c3720] hover:bg-[#3c2415] text-white text-xs font-bold px-5 py-2 rounded transition-colors"
                    >
                      Khám phá
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <span className="w-2 h-2 rounded-full bg-[#5c3720]" />
            <span className="w-2 h-2 rounded-full bg-stone-300" />
            <span className="w-2 h-2 rounded-full bg-stone-300" />
          </div>
        </div>
      </section>

      {/* 6. "KHÁM PHÁ HƯƠNG VỊ CÀ PHÊ ĐA DẠNG" (6 Circular Cream Badges) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-tight text-[#1f1610] mb-2">
              KHÁM PHÁ HƯƠNG VỊ CÀ PHÊ ĐA DẠNG
            </h2>
            <p className="text-xs sm:text-[13px] text-stone-500">
              Tìm hiểu những kiến thức cơ bản về pha cà phê, bao gồm các phương pháp pha cà phê khác
              nhau
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {data.brewingMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedBrew(method)}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#f6efe4] p-4 flex items-center justify-center mb-3 group-hover:bg-[#ecdec9] transition-all shadow-xs overflow-hidden">
                  <img
                    src={method.image}
                    alt={method.name}
                    className="w-24 h-24 rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#1f1610] group-hover:text-[#5c3720]">
                  {method.name}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Brew Method Quick Info */}
          {selectedBrew && (
            <div className="mt-8 max-w-lg mx-auto bg-[#faf7f2] border border-[#e6ccb2] rounded-xl p-4 text-center relative">
              <button
                type="button"
                onClick={() => setSelectedBrew(null)}
                className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
              <p className="text-xs font-extrabold uppercase text-[#5c3720]">
                Phương pháp {selectedBrew.name} ({selectedBrew.ratio})
              </p>
              <p className="text-xs text-stone-600 mt-1">
                Thời gian chiết xuất: <strong>{selectedBrew.brewTime}</strong> —{" "}
                {selectedBrew.flavorProfile}
              </p>
            </div>
          )}

          {/* Pagination < 1 / 3 > */}
          <div className="flex items-center justify-center gap-3 mt-8 text-xs text-stone-500">
            <button
              type="button"
              onClick={() => setBrewPage((p) => (p > 1 ? p - 1 : 3))}
              className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#5c3720]"
              aria-label="Trang pha chế trước"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold text-[#1f1610]">{brewPage} / 3</span>
            <button
              type="button"
              onClick={() => setBrewPage((p) => (p < 3 ? p + 1 : 1))}
              className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#5c3720]"
              aria-label="Trang pha chế tiếp"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. "KHÁCH HÀNG ĐÁNH GIÁ" (3 Bordered White Review Cards) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase tracking-tight text-[#1f1610] mb-2">
              KHÁCH HÀNG ĐÁNH GIÁ
            </h2>
            <p className="text-xs sm:text-[13px] text-stone-500">
              Nhâm nhi mỗi ngày với những loại cà phê đặc biệt như Arabica, Robusta, Espresso và
              nhiều hơn nữa!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((rev) => (
              <div
                key={rev.id}
                className="border border-stone-200 rounded-xl p-7 text-center bg-white hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-sm font-extrabold text-[#1f1610] mb-3">
                    {rev.role || "Sản phẩm chất lượng"}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-6">{rev.content}</p>
                </div>

                <div>
                  <div className="w-24 h-[1px] bg-stone-200 mx-auto mb-3" />
                  <p className="text-xs text-stone-600">
                    <strong className="text-[#1f1610]">
                      {(rev.author || "").split("-")[0]?.trim()}
                    </strong>
                    {(rev.author || "").includes("-") ? ` - ${(rev.author || "").split("-")[1]?.trim()}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination < 1 / 4 > */}
          <div className="flex items-center justify-center gap-3 mt-8 text-xs text-stone-500">
            <button
              type="button"
              onClick={() => setReviewPage((p) => (p > 1 ? p - 1 : 4))}
              className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#5c3720]"
              aria-label="Đánh giá trước"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold text-[#1f1610]">{reviewPage} / 4</span>
            <button
              type="button"
              onClick={() => setReviewPage((p) => (p < 4 ? p + 1 : 1))}
              className="w-6 h-6 rounded-full border border-stone-200 flex items-center justify-center hover:border-[#5c3720]"
              aria-label="Đánh giá tiếp"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. "THEO DÕI TRÊN INSTAGRAM" + 6 ROASTERY PARTNER LOGOS STRIP + DARK COFFEE BEANS FOOTER */}
      <section className="py-14 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-[26px] font-extrabold uppercase tracking-tight text-[#1f1610] mb-2">
              THEO DÕI TRÊN INSTAGRAM
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              Khám phá thế giới đa dạng của cà phê thông qua những hình ảnh tuyệt đẹp. Đắm chìm
              trong hương vị đậm đà và thơm ngon của cà phê, cùng tận hưởng sự sáng tạo và cảm nhận
              sâu lắng từ mỗi giọt cà phê!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.instagramPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-xl overflow-hidden bg-stone-100 group"
              >
                <img
                  src={photo}
                  alt={`Instagram The Mona Coffee ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Roastery Partner Logos Strip */}
      <section className="py-10 bg-[#e9dfd3]/60 border-y border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {data.partnerLogos.map((partner, idx) => (
              <div key={partner.id} className="py-2 select-none">
                <p
                  className={`text-base sm:text-lg text-[#1f1610] ${
                    idx % 2 === 1 ? "font-serif italic font-semibold" : "font-extrabold uppercase"
                  }`}
                >
                  {partner.name}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-stone-500">
                  {partner.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK COFFEE BEANS FOOTER */}
      <footer id="footer" className="relative bg-[#0f0906] text-white/80 pt-16 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={data.hero.backgroundImage}
            alt="Coffee Beans Footer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
            {/* Brand Col */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white text-[#3c2415] flex items-center justify-center">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-base font-extrabold uppercase tracking-wider text-white">
                  {data.business.name}
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Cà phê nguyên chất được chế biến 100% nguyên chất, không pha trộn với bất kỳ loại
                tạp chất nào khác. Giao hàng tận nơi toàn quốc.
              </p>
            </div>

            {/* DANH MỤC */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                DANH MỤC
              </h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li>
                  <a href="#top" className="hover:text-white">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#pure-coffee" className="hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#journey" className="hover:text-white">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* HỖ TRỢ */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                HỖ TRỢ
              </h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li>Câu hỏi thường gặp</li>
                <li>Dịch vụ khách hàng</li>
                <li>Vị trí cửa hàng</li>
                <li>Sản phẩm bán chạy</li>
                <li>Nhà máy rang xay</li>
              </ul>
            </div>

            {/* CHÍNH SÁCH */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                CHÍNH SÁCH
              </h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li>Chính sách bảo mật</li>
                <li>Chính sách giao nhận</li>
                <li>Chính sách đổi trả</li>
                <li>Chính sách bảo hành</li>
                <li>Điều khoản & điều kiện</li>
              </ul>
            </div>

            {/* ĐĂNG KÝ NHẬN TIN TỨC */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                ĐĂNG KÝ NHẬN TIN TỨC
              </h4>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                Đăng ký ngay để nhận ngay các tin tức khuyến mãi mới nhất của chúng tôi!
              </p>
              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-white/10 p-3 rounded">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Cảm ơn bạn đã đăng ký nhận bản tin!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Nhập email..."
                    className="flex-1 bg-black/50 border border-white/25 rounded-l px-3 py-2 text-xs text-white placeholder:text-white/50 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#1f1610] hover:bg-[#e6ccb2] text-xs font-bold uppercase px-4 py-2 rounded-r transition-colors"
                  >
                    ĐĂNG KÝ
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <p>© Thiết kế và lập trình bởi {data.business.name}</p>
            <a
              href="#top"
              aria-label="Lên đầu trang"
              className="w-8 h-8 rounded-full bg-white text-[#1f1610] flex items-center justify-center hover:bg-[#d4a373] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Quick Cart / Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-24 object-cover rounded-lg bg-[#faf7f2]"
              />
              <div>
                <span className="inline-block bg-[#5c3720] text-white text-[10px] font-bold px-2 py-0.5 rounded-xs mb-1">
                  ĐÃ THÊM VÀO GIỎ ({cartCount})
                </span>
                <h3 className="text-base font-extrabold text-[#1f1610]">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm font-bold text-[#c0392b] mt-0.5">
                  {selectedProduct.price} • {selectedProduct.weight}
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-600 mb-5 leading-relaxed">
              Hương vị đặc trưng: {selectedProduct.roastNote}. Rang mộc 100% nguyên chất theo đơn.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="flex-1 border border-stone-300 text-xs font-bold py-2.5 rounded-lg hover:bg-stone-50"
              >
                Tiếp tục mua sắm
              </button>
              <a
                href="#footer"
                onClick={() => setSelectedProduct(null)}
                className="flex-1 bg-[#5c3720] text-white text-xs font-bold py-2.5 rounded-lg text-center hover:bg-[#3c2415]"
              >
                Đặt giao ngay
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
