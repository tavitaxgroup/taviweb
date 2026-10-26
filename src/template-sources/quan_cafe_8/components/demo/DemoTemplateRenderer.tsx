'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe8MockData } from '../../data/mockData'
import {
  Mail,
  Phone,
  Search,
  User,
  ShoppingCart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Gift,
  Headphones,
  Ticket,
  MapPin,
  Sparkles,
  Percent,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe8MockData, data)
  const [activeTab, setActiveTab] = useState<'MỚI NHẤT' | 'GIẢM GIÁ' | 'BÁN CHẠY'>('MỚI NHẤT')
  const [cartCount, setCartCount] = useState(2)

  const primaryPhone = mergedData.business.phone[0] || '0313728397'
  const primaryEmail = mergedData.business.email[0] || 'info@themona.global'

  const filteredProducts =
    activeTab === 'MỚI NHẤT'
      ? mergedData.featuredSection.products
      : mergedData.featuredSection.products.filter(
          (item) => item.category === activeTab || item.featuredInPromo
        )

  const promoProducts = mergedData.featuredSection.products.slice(0, 5)

  const renderTrustIcon = (type: string) => {
    switch (type) {
      case 'truck':
        return <Truck className="w-8 h-8 text-[#0ea5e9]" />
      case 'shield':
        return <ShieldCheck className="w-8 h-8 text-[#c81e1e]" />
      case 'gift':
        return <Gift className="w-8 h-8 text-[#10b981]" />
      default:
        return <Headphones className="w-8 h-8 text-[#3b82f6]" />
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#c81e1e] selection:text-white overflow-x-hidden">
      {/* Top Crimson Contact Bar */}
      <div className="bg-[#991b1b] text-white/95 text-[11px] py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-amber-300" />
              {primaryEmail}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-amber-300" />
              {primaryPhone}
            </span>
          </div>
          <div className="hidden sm:block text-amber-200 font-medium">
            Tiệm Trà Đạo, Bánh Ngọt & Hộp Quà Xuân Thượng Hạng
          </div>
        </div>
      </div>

      {/* Main Festive Crimson Header */}
      <header className="sticky top-0 z-50 bg-[#c81e1e] text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Script Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif italic text-2xl sm:text-3xl font-bold tracking-wide text-white flex items-center gap-1.5">
              M<span className="text-amber-300 text-xl">✿</span>na Quà Tết
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-bold tracking-wider uppercase">
            {mergedData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`transition-colors ${
                  idx === 0 ? 'text-amber-300' : 'text-white hover:text-amber-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Utility Icons */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="hover:text-amber-300 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="hover:text-amber-300 transition-colors"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              aria-label="Giỏ hàng"
              className="relative hover:text-amber-300 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-2 -right-2 bg-amber-400 text-[#991b1b] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Golden Sunburst Festive Hero Banner */}
      <section className="relative bg-gradient-to-b from-[#f59e0b] via-[#fbbf24] to-[#fde68a] pt-10 pb-28 px-4 overflow-hidden">
        {/* Decorative Blossom Corners */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 rounded-full bg-amber-300/40 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-4 right-8 hidden lg:flex flex-col items-center space-y-2 text-[#c81e1e]"
        >
          <span className="text-4xl">🏮</span>
          <span className="text-3xl">🧨</span>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Festive Typography */}
          <div className="md:col-span-6 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#c81e1e]/15 text-[#991b1b] text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {mergedData.business.subtitle}
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#c81e1e] drop-shadow-[0_3px_0_#ffffff]">
              {mergedData.hero.headlineTop}
            </h1>
            <div className="mt-1 font-serif text-3xl sm:text-5xl font-black text-[#15803d] drop-shadow-[0_3px_0_#ffffff]">
              {mergedData.hero.headlineBottom}
            </div>
            <div className="mt-5 inline-block bg-white/95 text-[#c81e1e] font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-5 py-2 rounded-full shadow-md border border-amber-300">
              {mergedData.hero.ribbonText}
            </div>
          </div>

          {/* Right Gift Basket & Tea Showcase */}
          <div className="md:col-span-6 flex items-center justify-center relative">
            <div className="relative w-64 sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white">
              <img
                src={mergedData.hero.heroImage}
                alt="Giỏ Quà Trà Đạo & Bánh Ngọt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 -right-2 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={mergedData.hero.secondaryImage}
                alt="Trà Thượng Hạng"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Overlapping White Trust Cards */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mergedData.trustItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 p-5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-3">
                {renderTrustIcon(item.iconType)}
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-wide text-slate-800">
                {item.title}
              </h3>
              <p className="mt-1 text-[11px] text-slate-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1: Sản phẩm nổi bật (4x2 Grid with Apricot Blossom Side Accents) */}
      <section id="featured" className="relative py-16 px-4 overflow-hidden">
        {/* Left & Right Decorative Mai Blossom Accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden xl:flex flex-col items-center absolute left-2 top-1/2 -translate-y-1/2 space-y-2 select-none"
        >
          <span className="text-4xl">🌼</span>
          <span className="text-3xl">🧧</span>
          <span className="text-4xl">🌼</span>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none hidden xl:flex flex-col items-center absolute right-2 top-1/2 -translate-y-1/2 space-y-2 select-none"
        >
          <span className="text-4xl">🌼</span>
          <span className="text-3xl">🧧</span>
          <span className="text-4xl">🌼</span>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              {mergedData.featuredSection.heading}
            </h2>

            {/* 3 Filter Pills */}
            <div className="mt-5 flex items-center justify-center gap-3">
              {mergedData.featuredSection.tabs.map((tab) => {
                const isActive = activeTab === tab
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all ${
                      isActive
                        ? 'border border-[#c81e1e] text-[#c81e1e] bg-red-50/40'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 4x2 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all p-3 flex flex-col"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-3 text-xs font-bold text-slate-800 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 pt-1 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-[#c81e1e]">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="ml-1.5 text-[10px] text-slate-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setCartCount((c) => c + 1)}
                    aria-label={`Mua ${product.name}`}
                    className="w-7 h-7 rounded-md border border-[#c81e1e]/40 text-[#c81e1e] flex items-center justify-center hover:bg-[#c81e1e] hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Khuyến Mãi Đầu Năm (Golden Band + 5 Countdown Boxes + 5-Card Row) */}
      <section className="relative pt-12 pb-16">
        {/* Golden Top Background Band */}
        <div className="absolute inset-x-0 top-0 h-[280px] bg-[#f5b400]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center text-white mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              {mergedData.newYearPromo.heading}
            </h2>
            <p className="mt-1 text-xs text-white/90">
              {mergedData.newYearPromo.subtitle}
            </p>
          </div>

          {/* 5 Dark Countdown Boxes */}
          <div className="max-w-3xl mx-auto grid grid-cols-5 gap-2 sm:gap-4 mb-10">
            {[
              { value: mergedData.newYearPromo.countdown.weeks, label: 'TUẦN' },
              { value: mergedData.newYearPromo.countdown.days, label: 'NGÀY' },
              { value: mergedData.newYearPromo.countdown.hours, label: 'GIỜ' },
              { value: mergedData.newYearPromo.countdown.minutes, label: 'PHÚT' },
              { value: mergedData.newYearPromo.countdown.seconds, label: 'GIÂY' },
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-[#241c0c] text-white rounded-lg py-3 px-2 text-center shadow-md"
              >
                <div className="text-xl sm:text-2xl font-extrabold leading-none">
                  {box.value}
                </div>
                <div className="mt-1 text-[9px] sm:text-[10px] tracking-widest uppercase text-amber-300">
                  {box.label}
                </div>
              </div>
            ))}
          </div>

          {/* 5-Column Promo Product Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {promoProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-3 flex flex-col"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-3 text-xs font-bold text-slate-800 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#c81e1e]">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCartCount((c) => c + 1)}
                    aria-label={`Thêm ${product.name}`}
                    className="w-7 h-7 rounded-md border border-[#c81e1e]/40 text-[#c81e1e] flex items-center justify-center hover:bg-[#c81e1e] hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 5-Image Bento Gallery Mosaic */}
      <section id="gallery" className="py-10 px-4 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Large Square Image */}
          <div className="md:col-span-6 aspect-square overflow-hidden rounded-lg bg-slate-100">
            <img
              src={mergedData.bentoGallery.mainImage}
              alt="Hộp Quà Thưởng Trà Cao Cấp"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right 2x2 Grid of 4 Square Images */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {mergedData.bentoGallery.gridImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg bg-slate-100"
              >
                <img
                  src={imgUrl}
                  alt={`Bộ Sưu Tập Trà Tết ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: ƯU ĐÃI GIẢM ĐẾN 30% - COMBO QUÀ TẾT */}
      <section id="combo" className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Copy & Quotes */}
          <div className="lg:col-span-6">
            <div className="text-sm sm:text-base font-bold uppercase tracking-wide">
              <span className="text-slate-700">{mergedData.comboOffer.eyebrowPrefix} </span>
              <span className="text-[#c81e1e]">{mergedData.comboOffer.eyebrowHighlight}</span>
            </div>
            <h2 className="mt-1 text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-800">
              {mergedData.comboOffer.heading}
            </h2>

            <a
              href="#featured"
              className="mt-4 inline-flex items-center gap-2 bg-[#c81e1e] hover:bg-[#991b1b] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-colors"
            >
              <Ticket className="w-4 h-4" />
              {mergedData.comboOffer.ctaText}
            </a>

            <div className="mt-6 space-y-3">
              {mergedData.comboOffer.quotes.map((q, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm font-bold leading-relaxed text-[#b91c1c]"
                >
                  {q}
                </p>
              ))}
            </div>
          </div>

          {/* Right Festive Visual with 3 Floating White Pill Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            <div className="relative w-72 sm:w-80 aspect-square rounded-full bg-gradient-to-tr from-red-100 via-amber-100 to-red-50 p-4 flex items-center justify-center shadow-inner">
              <img
                src={mergedData.comboOffer.showcaseImage}
                alt="Combo Quà Trà Tết"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />

              {/* Floating Pill 1: Top Right */}
              <div className="absolute -top-2 right-0 bg-white rounded-full shadow-lg border border-slate-100 px-4 py-2 flex items-center gap-2 text-xs font-bold text-[#15803d]">
                <User className="w-3.5 h-3.5" />
                <span>{mergedData.comboOffer.badges[0]?.label}</span>
              </div>

              {/* Floating Pill 2: Center Left */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-full shadow-lg border border-slate-100 px-4 py-2 flex items-center gap-2 text-xs font-bold text-[#c81e1e]">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{mergedData.comboOffer.badges[1]?.label}</span>
              </div>

              {/* Floating Pill 3: Bottom Right */}
              <div className="absolute -bottom-2 right-4 bg-white rounded-full shadow-lg border border-slate-100 px-4 py-2 flex items-center gap-2 text-xs font-bold text-[#d97706]">
                <Percent className="w-3.5 h-3.5" />
                <span>{mergedData.comboOffer.badges[2]?.label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scalloped Wave Crimson Footer */}
      <footer id="footer" className="relative bg-[#b91c1c] text-white pt-16 pb-8 mt-8">
        {/* Decorative Wavy Scalloped Top Edge */}
        <div className="absolute -top-6 inset-x-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            className="w-full h-7 fill-[#b91c1c]"
          >
            <path d="M0,40 Q50,0 100,40 Q150,0 200,40 Q250,0 300,40 Q350,0 400,40 Q450,0 500,40 Q550,0 600,40 Q650,0 700,40 Q750,0 800,40 Q850,0 900,40 Q950,0 1000,40 Q1050,0 1100,40 Q1150,0 1200,40 L1200,40 L0,40 Z" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
            {/* Col 1: Brand */}
            <div>
              <div className="font-serif italic text-2xl font-bold text-white flex items-center gap-1.5 mb-3">
                M<span className="text-amber-300 text-lg">✿</span>na Quà Tết
              </div>
              <p className="text-xs text-white/85 leading-relaxed">
                {mergedData.business.tagline}
              </p>
            </div>

            {/* Col 2: Contact Info */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                  <span>{mergedData.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Menu */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                MENU
              </h4>
              <ul className="space-y-2 text-xs text-white/85">
                {mergedData.navigation.map((nav, i) => (
                  <li key={i}>
                    <a
                      href={nav.href}
                      className={`hover:text-amber-300 transition-colors ${
                        i === 0 ? 'text-amber-300 font-bold' : ''
                      }`}
                    >
                      {nav.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Policies */}
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
                CHÍNH SÁCH MUA HÀNG
              </h4>
              <ul className="space-y-2 text-xs text-white/85">
                {mergedData.footerPolicies.map((policy, idx) => (
                  <li key={idx}>
                    <a href="#footer" className="hover:text-amber-300 transition-colors">
                      {policy}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/80">
            © Thiết kế và lập trình bởi <strong className="text-white">MONA.Media / Website</strong> • {mergedData.business.name}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
