'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe11MockData } from '../../data/mockData'
import {
  Mail,
  Clock,
  Phone,
  Search,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Cat,
  Dog,
  Bone,
  Heart,
  Sparkles,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe11MockData, data)
  const [activeCategoryTab, setActiveCategoryTab] = useState<'THỨC ĂN' | 'THỰC PHẨM' | 'ĐỒ CHƠI'>('ĐỒ CHƠI')
  const [cartCount, setCartCount] = useState(1)

  const primaryPhone = mergedData.business.phone[0] || '0313728397'
  const primaryEmail = mergedData.business.email[0] || 'info@themona.global'

  const renderSectionHeading = (title: string) => (
    <div className="text-center mb-10">
      <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-slate-800">
        {title}
      </h2>
      <div className="mt-1.5 flex items-center justify-center text-slate-400">
        <Cat className="w-4 h-4" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#f25a29] selection:text-white overflow-x-hidden">
      {/* Top Orange Utility Bar */}
      <div className="bg-[#f25a29] text-white text-[11px] py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1 font-semibold uppercase">
              <Mail className="w-3 h-3" />
              CONTACT
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {mergedData.business.hours}
            </span>
            <span className="inline-flex items-center gap-1 font-bold">
              <Phone className="w-3 h-3" />
              {primaryPhone}
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="#footer" className="hover:underline">
              Đăng nhập
            </a>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="inline-flex items-center gap-1 hover:underline"
            >
              <span>Giỏ hàng</span>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="bg-white text-[#f25a29] text-[9px] font-extrabold px-1.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main White Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-1.5">
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-wider text-[#f25a29] leading-none flex items-center gap-1">
                {mergedData.business.name}
                <span className="inline-flex w-5 h-5 rounded-full border-2 border-[#f25a29] items-center justify-center text-[10px]">
                  🐾
                </span>
              </div>
              <div className="text-[10px] font-semibold text-[#f25a29] tracking-wide">
                {mergedData.business.brandSubtext}
              </div>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wide text-slate-700">
            {mergedData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`py-1 transition-colors ${
                  idx === 0
                    ? 'text-slate-900 border-b-2 border-[#f25a29]'
                    : 'hover:text-[#f25a29]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Search Icon */}
          <button
            type="button"
            aria-label="Tìm kiếm"
            className="text-slate-600 hover:text-[#f25a29] transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Split Banner with Diagonal Orange Polygon & 2 Stacked Right Feature Cards */}
      <section className="relative bg-[#3d3834] text-white overflow-hidden">
        {/* Background Pet Portrait */}
        <img
          src={mergedData.hero.bgImage}
          alt="Koneko Pet Cafe Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />

        {/* Left Diagonal Orange Geometric Polygon */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-48 sm:w-72 bg-[#f25a29] -skew-x-12 -translate-x-20 opacity-95"
        />

        {/* Slider Arrows */}
        <button
          type="button"
          aria-label="Slide trước"
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center text-white/70 hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          aria-label="Slide tiếp"
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center text-white/70 hover:text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Typography + Zig-Zag Wave */}
          <div className="lg:col-span-6">
            <h1 className="text-3xl sm:text-5xl font-black uppercase leading-tight whitespace-pre-line drop-shadow">
              {mergedData.hero.title}
            </h1>
            <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-white/90 max-w-sm leading-relaxed">
              {mergedData.hero.subtitle}
            </p>

            {/* Orange Zig-Zag Wave SVG */}
            <div className="mt-6">
              <svg
                width="200"
                height="24"
                viewBox="0 0 200 24"
                fill="none"
                className="text-[#f25a29]"
              >
                <path
                  d="M2 20 L22 4 L42 20 L62 4 L82 20 L102 4 L122 20 L142 4 L162 20"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right 2 Stacked Editorial Pet Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Horizontal White Card */}
            <div className="bg-white text-slate-800 p-4 shadow-lg grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-5 aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={mergedData.hero.topFeatureCard.image}
                  alt={mergedData.hero.topFeatureCard.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-7">
                <h3 className="text-xs font-extrabold text-slate-800 leading-snug">
                  {mergedData.hero.topFeatureCard.title}
                </h3>
                <p className="mt-1.5 text-[11px] text-slate-500 line-clamp-2">
                  {mergedData.hero.topFeatureCard.excerpt}
                </p>
                <a
                  href="#news"
                  className="mt-3 inline-block border border-[#f25a29] text-[#f25a29] hover:bg-[#f25a29] hover:text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 transition-colors"
                >
                  XEM THÊM
                </a>
              </div>
            </div>

            {/* Bottom 2-Column Split Card + Cat Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white text-slate-800 p-5 shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-extrabold uppercase text-slate-800 leading-snug">
                    {mergedData.hero.bottomFeatureCard.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-slate-500 line-clamp-3">
                    {mergedData.hero.bottomFeatureCard.excerpt}
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="#news"
                    className="inline-block border border-[#f25a29] text-[#f25a29] hover:bg-[#f25a29] hover:text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 transition-colors"
                  >
                    XEM THÊM
                  </a>
                </div>
              </div>

              <div className="aspect-square overflow-hidden bg-slate-100 shadow-lg">
                <img
                  src={mergedData.hero.bottomFeatureCard.sideImage}
                  alt="Mèo Anh Lông Ngắn Koneko"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: 4 Asymmetric Orange Illustrated Category Tiles */}
      <section id="categories" className="py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {/* Left Column */}
          <div className="space-y-1.5">
            {/* Tile 1: ĐỒ CHƠI (Peach) */}
            <div className="bg-[#f49368] text-white p-7 min-h-[160px] relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-2xl font-normal uppercase tracking-wide">
                  {mergedData.categoryTiles[0]?.title}
                </h3>
                <a
                  href="#featured"
                  className="mt-2 inline-block border border-white/80 text-white hover:bg-white hover:text-[#f25a29] text-[9px] font-bold uppercase px-3 py-1 transition-colors"
                >
                  XEM THÊM
                </a>
              </div>
              {/* Yarn Balls Illustration */}
              <div className="self-end flex items-center gap-2 mt-2">
                <div className="w-14 h-14 rounded-full bg-[#d97736] border-2 border-amber-200/50 flex items-center justify-center text-xl shadow-inner">
                  🧶
                </div>
                <div className="w-12 h-12 rounded-full bg-[#5cc6ba] border-2 border-teal-100/60 flex items-center justify-center text-lg shadow-inner">
                  🧶
                </div>
              </div>
            </div>

            {/* Tile 3: THỰC PHẨM (Orange) */}
            <div className="bg-[#f25a29] text-white p-7 min-h-[190px] relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-2xl font-normal uppercase tracking-wide">
                  {mergedData.categoryTiles[2]?.title}
                </h3>
                <a
                  href="#featured"
                  className="mt-2 inline-block border border-white/80 text-white hover:bg-white hover:text-[#f25a29] text-[9px] font-bold uppercase px-3 py-1 transition-colors"
                >
                  XEM THÊM
                </a>
              </div>
              {/* Pet Bowl Illustration */}
              <div className="self-end mt-2">
                <div className="w-36 h-14 rounded-t-2xl rounded-b-lg bg-[#2fa89c] border-b-4 border-[#1f7a70] flex items-center justify-center text-xs font-bold tracking-widest uppercase text-amber-100 shadow-md">
                  🥣 KONEKO BOWL
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-1.5">
            {/* Tile 2: PHỤ KIỆN (Orange) */}
            <div className="bg-[#f25a29] text-white p-7 min-h-[190px] relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-2xl font-normal uppercase tracking-wide">
                  {mergedData.categoryTiles[1]?.title}
                </h3>
                <a
                  href="#featured"
                  className="mt-2 inline-block border border-white/80 text-white hover:bg-white hover:text-[#f25a29] text-[9px] font-bold uppercase px-3 py-1 transition-colors"
                >
                  XEM THÊM
                </a>
              </div>
              {/* Cozy Pet Bed Illustration */}
              <div className="self-end mt-2">
                <div className="w-36 h-14 rounded-2xl bg-[#d96b1f] border-4 border-[#b4500c] flex items-center justify-center text-xs font-bold text-amber-100 shadow-md">
                  🛏️ COZY BED
                </div>
              </div>
            </div>

            {/* Tile 4: DỤNG CỤ (Coral) */}
            <div className="bg-[#f37748] text-white p-7 min-h-[160px] relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-2xl font-normal uppercase tracking-wide">
                  {mergedData.categoryTiles[3]?.title}
                </h3>
                <a
                  href="#featured"
                  className="mt-2 inline-block border border-white/80 text-white hover:bg-white hover:text-[#f25a29] text-[9px] font-bold uppercase px-3 py-1 transition-colors"
                >
                  XEM THÊM
                </a>
              </div>
              {/* Care Tray Illustration */}
              <div className="self-end mt-2">
                <div className="w-36 h-12 rounded-xl bg-[#48b2a6] border-4 border-[#2c8c81] flex items-center justify-center text-xs font-bold text-amber-50 shadow-md">
                  ✨ CARE TRAY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: SẢN PHẨM NỔI BẬT (3-Column Bordered Product Cards) */}
      <section id="featured" className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {renderSectionHeading('SẢN PHẨM NỔI BẬT')}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {mergedData.featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setCartCount((c) => c + 1)}
                className="group cursor-pointer border border-slate-200 bg-white text-center hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-2.5 px-3 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#f25a29] transition-colors">
                    {product.name}
                  </h3>
                </div>
                <div className="py-2.5 px-3">
                  <span className="text-xs font-extrabold text-[#f25a29]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: SẢN PHẨM THEO DANH MỤC (3 Icon Tabs + 3 Cards + 2 Promo Banners) */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {renderSectionHeading('SẢN PHẨM THEO DANH MỤC')}

          {/* 3 Illustrated Pet Category Icon Tabs */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 mb-8">
            {[
              { id: 'THỨC ĂN' as const, label: 'THỨC ĂN', icon: <Bone className="w-6 h-6" /> },
              { id: 'THỰC PHẨM' as const, label: 'THỰC PHẨM', icon: <Cat className="w-6 h-6" /> },
              { id: 'ĐỒ CHƠI' as const, label: 'ĐỒ CHƠI', icon: <Sparkles className="w-6 h-6" /> },
            ].map((tab) => {
              const isActive = activeCategoryTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategoryTab(tab.id)}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
                      isActive
                        ? 'border-[#f25a29] bg-[#f25a29]/10 text-[#f25a29]'
                        : 'border-slate-300 text-slate-600 group-hover:border-[#f25a29]'
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <span
                    className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-[#f25a29]' : 'text-slate-600'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* 3 Category Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {mergedData.categoryProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setCartCount((c) => c + 1)}
                className="group cursor-pointer border border-slate-200 bg-white text-center hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-2.5 px-3 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#f25a29] transition-colors">
                    {product.name}
                  </h3>
                </div>
                <div className="py-2.5 px-3">
                  <span className="text-xs font-extrabold text-[#f25a29]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 2 Dark Overlay Promo Banners (50% OFF / 25% OFF) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mergedData.promoBanners.map((banner) => (
              <div
                key={banner.id}
                className="relative aspect-[16/9] overflow-hidden bg-slate-900 flex items-center justify-center text-center text-white p-6 group"
              >
                <img
                  src={banner.image}
                  alt={banner.subtitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <div className="font-serif italic text-3xl sm:text-4xl font-black">
                    {banner.discount}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium tracking-widest uppercase">
                    {banner.subtitle}
                  </div>
                  <a
                    href="#featured"
                    className="mt-4 inline-block border border-white text-white hover:bg-[#f25a29] hover:border-[#f25a29] text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 transition-colors"
                  >
                    {banner.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: SẢN PHẨM MỚI (3-Column Product Cards) */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {renderSectionHeading('SẢN PHẨM MỚI')}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {mergedData.newProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setCartCount((c) => c + 1)}
                className="group cursor-pointer border border-slate-200 bg-white text-center hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="py-2.5 px-3 border-b border-slate-100">
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#f25a29] transition-colors">
                    {product.name}
                  </h3>
                </div>
                <div className="py-2.5 px-3">
                  <span className="text-xs font-extrabold text-[#f25a29]">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: PHẢN HỒI KHÁCH HÀNG (3-Column Avatar Testimonial Slider) */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto relative">
          {renderSectionHeading('PHẢN HỒI KHÁCH HÀNG')}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {mergedData.testimonials.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-200 mb-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-bold italic text-slate-800 mb-2">
                  {item.name}
                </div>
                <p className="text-[11px] italic text-slate-500 leading-relaxed max-w-xs">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full border border-slate-400" />
            <span className="w-2 h-2 rounded-full bg-slate-900" />
          </div>
        </div>
      </section>

      {/* Section 6: TIN TỨC MỚI (4-Column Blog Grid) */}
      <section id="news" className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {renderSectionHeading('TIN TỨC MỚI')}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mergedData.blogPosts.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="inline-block bg-slate-200 text-slate-600 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-sm">
                    {post.badge}
                  </span>
                  <h3 className="mt-1.5 text-xs font-extrabold text-slate-800 group-hover:text-[#f25a29] leading-snug transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-1 text-[10px] text-slate-400">{post.date}</div>
                  <p className="mt-2 text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: 5 Cute Grey Pet Silhouette Emblems Strip */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-around text-slate-500">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:text-[#f25a29] transition-colors">
            <Cat className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:text-[#f25a29] transition-colors">
            <Dog className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:text-[#f25a29] transition-colors">
            <Bone className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:text-[#f25a29] transition-colors">
            <Heart className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:text-[#f25a29] transition-colors">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Section 8: Full-Width 5x2 (10-Photo) Pet & Bakery Gallery Mosaic */}
      <section className="grid grid-cols-2 sm:grid-cols-5">
        {mergedData.galleryMosaic.map((imgUrl, idx) => (
          <div key={idx} className="aspect-square overflow-hidden bg-slate-100">
            <img
              src={imgUrl}
              alt={`Koneko Pet Gallery ${idx + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#f9f9f9] pt-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Brand & Contact */}
          <div>
            <div className="text-xl font-black tracking-wider text-[#f25a29] leading-none flex items-center gap-1">
              {mergedData.business.name}
              <span className="text-sm">🐾</span>
            </div>
            <div className="text-[10px] font-semibold text-[#f25a29] mb-4">
              {mergedData.business.brandSubtext}
            </div>
            <ul className="space-y-2.5 text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-800 shrink-0 mt-0.5" />
                <span>{mergedData.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Danh Mục */}
          <div>
            <h4 className="font-bold text-slate-800 mb-3">Danh Mục</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Thức Ăn & Bánh Thưởng</li>
              <li>Thực phẩm dinh dưỡng</li>
              <li>Dụng cụ chăm sóc</li>
              <li>Phụ kiện thú cưng</li>
              <li>Đồ chơi tương tác</li>
            </ul>
          </div>

          {/* Col 3: Liên Hệ */}
          <div>
            <h4 className="font-bold text-slate-800 mb-3">Liên Hệ</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Trang chủ</li>
              <li>Tin tức</li>
              <li>Cửa hàng</li>
              <li>Giới thiệu</li>
              <li>Liên Hệ</li>
              <li>Việc làm</li>
            </ul>
          </div>

          {/* Col 4: Map Card & Social Buttons */}
          <div>
            <div className="bg-slate-200 border border-slate-300 rounded p-3 h-32 flex flex-col justify-between relative overflow-hidden">
              <div className="bg-white/95 p-2 rounded shadow-sm text-[10px] text-slate-700">
                <div className="font-bold text-slate-900 truncate">
                  {mergedData.business.address}
                </div>
                <div className="text-[#1d71b8] mt-0.5">Xem bản đồ lớn hơn</div>
              </div>
              <div className="self-center text-[#f25a29]">
                <MapPin className="w-6 h-6 fill-current" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              {['F', 'IG', 'TK', '☎'].map((label, idx) => (
                <span
                  key={idx}
                  className="w-6 h-6 bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center rounded-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Solid Orange Bar */}
        <div className="bg-[#f25a29] text-white text-center py-2.5 text-[11px]">
          © Thiết kế và lập trình bởi <strong>MONA.Media / Website</strong>
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
