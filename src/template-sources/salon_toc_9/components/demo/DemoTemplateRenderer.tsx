'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { salonToc9MockData } from '../../data/mockData'
import {
  Search,
  User,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Play,
  Plus,
  Star,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(salonToc9MockData, data)
  const [activeCategory, setActiveCategory] = useState<'Nữ' | 'Nam' | 'Trẻ em' | 'Phụ kiện'>('Nữ')
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [hoveredCol, setHoveredCol] = useState<number | null>(null)

  const filteredProducts =
    activeCategory === 'Nữ'
      ? mergedData.productsSection.items.filter((item) => item.category === 'Nữ')
      : mergedData.productsSection.items.filter(
          (item) => item.category === activeCategory || item.category === 'Nữ'
        ).slice(0, 8)

  const currentQuote =
    mergedData.testimonials[activeQuoteIndex] || mergedData.testimonials[0]

  return (
    <div className="min-h-screen bg-white text-[#1b1b1b] font-sans selection:bg-[#e56b6f] selection:text-white overflow-x-hidden">
      {/* Top Minimalist Editorial Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-[10px] font-semibold tracking-[0.18em] text-slate-700 uppercase">
            {mergedData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#e56b6f] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Center Serif Logo */}
          <a
            href="#"
            className="font-serif text-xl sm:text-2xl tracking-[0.22em] font-semibold text-[#1b1b1b] uppercase text-center"
          >
            {mergedData.business.name}
          </a>

          {/* Right Utility Icons */}
          <div className="flex items-center space-x-5 text-slate-800">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="hover:text-[#e56b6f] transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="hover:text-[#e56b6f] transition-colors"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              aria-label="Giỏ hàng"
              className="relative hover:text-[#e56b6f] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-2 bg-[#e56b6f] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section: 4 Tall Vertical Split Columns */}
      <section className="relative border-b border-slate-200 bg-white">
        {/* Left & Right Slider Arrows */}
        <button
          type="button"
          aria-label="Trước"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Sau"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {mergedData.heroColumns.map((col, idx) => {
            const isHovered = hoveredCol === idx
            return (
              <div
                key={col.id}
                onMouseEnter={() => setHoveredCol(idx)}
                onMouseLeave={() => setHoveredCol(null)}
                className="group relative h-[320px] sm:h-[420px] lg:h-[520px] flex flex-col items-center justify-center px-6 text-center overflow-hidden cursor-pointer transition-all duration-500"
              >
                {/* Subtle Reveal Image on Hover */}
                <img
                  src={col.image}
                  alt={col.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? 'opacity-20 scale-105' : 'opacity-[0.06] scale-100'
                  }`}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#e56b6f] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    0{idx + 1}
                  </span>
                  <h2 className="font-serif text-lg sm:text-xl tracking-[0.15em] uppercase text-[#1b1b1b] group-hover:text-[#e56b6f] transition-colors">
                    {col.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500 max-w-[200px] opacity-80 group-hover:opacity-100 transition-opacity">
                    {col.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Section 1: ĐIỂM ĐẾN MỚI (With Decorative Coral Circles on Sides) */}
      <section id="arrivals" className="relative py-20 sm:py-24 overflow-hidden">
        {/* Decorative Coral Ring Left */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block absolute -left-20 top-24 w-56 h-56 rounded-full border-[32px] border-[#f47c7c]/85"
        />
        {/* Decorative Coral Ring Right */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block absolute -right-24 bottom-12 w-72 h-72 rounded-full border-[40px] border-[#f47c7c]/85"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.08em] uppercase text-[#1b1b1b]">
              {mergedData.newArrivals.heading}
            </h2>
            <div className="w-8 h-[1.5px] bg-[#1b1b1b] mx-auto my-3" />
            <p className="font-serif italic text-xs sm:text-sm text-slate-500">
              {mergedData.newArrivals.subtitle}
            </p>
          </div>

          {/* 3-Column Staggered Editorial Showcase */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {mergedData.newArrivals.items.map((item, index) => {
              const isCenter = index === 1
              return (
                <div
                  key={item.id}
                  className={`group flex flex-col items-center text-center ${
                    isCenter ? 'md:-my-4' : ''
                  }`}
                >
                  <div
                    className={`relative w-full overflow-hidden bg-slate-100 ${
                      isCenter ? 'aspect-[3/4] shadow-md' : 'aspect-[4/5]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="mt-4 text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1b1b1b] max-w-[240px] line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center justify-center gap-2 text-xs">
                    {item.oldPrice && (
                      <span className="text-slate-400 line-through">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-slate-700 font-medium">{item.price}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Video / Lookbook Banner */}
      <section id="about" className="py-6 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto relative overflow-hidden aspect-[16/7] min-h-[260px] flex items-center justify-center">
          <img
            src={mergedData.videoBanner.image}
            alt={mergedData.videoBanner.heading}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center px-6">
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl tracking-[0.12em] uppercase text-white drop-shadow">
              {mergedData.videoBanner.heading}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/85 max-w-lg mx-auto">
              {mergedData.videoBanner.subtitle}
            </p>
            <button
              type="button"
              aria-label="Xem video"
              className="mt-6 w-12 h-12 rounded-full bg-white text-[#1b1b1b] inline-flex items-center justify-center shadow-lg hover:bg-[#e56b6f] hover:text-white transition-colors"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: SẢN PHẨM MỚI (4x2 Product Grid with Filter Tabs & Coral Circles) */}
      <section id="products" className="relative py-20 overflow-hidden">
        {/* Decorative Soft Blush Filled Circle Top Left */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block absolute -left-16 top-52 w-44 h-44 rounded-full bg-[#fbdada]/70"
        />
        {/* Decorative Coral Ring Bottom Left */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block absolute -left-24 bottom-20 w-64 h-64 rounded-full border-[34px] border-[#f47c7c]/85"
        />
        {/* Decorative Soft Blush Ring Right */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:block absolute -right-20 top-1/2 w-56 h-56 rounded-full border-[28px] border-[#fbdada]/80"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.08em] uppercase text-[#1b1b1b]">
              {mergedData.productsSection.heading}
            </h2>
            <div className="w-8 h-[1.5px] bg-[#1b1b1b] mx-auto my-3" />

            {/* Category Tabs */}
            <div className="mt-5 flex items-center justify-center gap-6 text-xs sm:text-sm font-serif italic">
              {mergedData.productsSection.categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`transition-colors pb-1 ${
                      isActive
                        ? 'text-[#e56b6f] font-semibold border-b border-[#e56b6f]'
                        : 'text-slate-600 hover:text-[#1b1b1b]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 4x2 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/4] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* SALE Badge */}
                  {product.sale && (
                    <span className="absolute top-3 left-3 bg-white text-[#1b1b1b] text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 shadow-sm">
                      SALE!
                    </span>
                  )}

                  {/* Quick Add + Button */}
                  <button
                    type="button"
                    onClick={() => setCartCount((c) => c + 1)}
                    aria-label={`Thêm ${product.name}`}
                    className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/90 text-[#1b1b1b] flex items-center justify-center shadow-sm hover:bg-[#e56b6f] hover:text-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>

                  {/* Out of Stock Center Ribbon */}
                  {product.outOfStock && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#1b1b1b]/90 text-white text-[10px] font-bold tracking-[0.2em] uppercase py-2 text-center">
                      HẾT HÀNG
                    </div>
                  )}
                </div>

                <h3 className="mt-3.5 text-[11px] font-semibold tracking-[0.06em] uppercase text-[#1b1b1b] line-clamp-2 max-w-[210px]">
                  {product.name}
                </h3>
                <div className="mt-1 flex items-center justify-center gap-2 text-[11px]">
                  {product.oldPrice && (
                    <span className="text-slate-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-slate-700 font-medium">{product.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Bordered Trust Boxes */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mergedData.trustBoxes.map((box) => (
              <div
                key={box.id}
                className="border border-slate-300 py-4 px-5 text-center bg-white hover:border-[#1b1b1b] transition-colors"
              >
                <div className="font-serif text-xs font-bold tracking-[0.16em] uppercase text-[#1b1b1b]">
                  {box.title}
                </div>
                <div className="mt-1 text-[11px] text-slate-500">{box.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Warm Cream Editorial Testimonial Slider */}
      <section className="bg-[#f7f3f0] py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto relative text-center">
          {/* Left / Right Quote Navigation */}
          <button
            type="button"
            onClick={() =>
              setActiveQuoteIndex((prev) =>
                prev === 0 ? mergedData.testimonials.length - 1 : prev - 1
              )
            }
            aria-label="Đánh giá trước"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-slate-300 bg-white items-center justify-center text-slate-600 hover:border-[#1b1b1b] hover:text-[#1b1b1b] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveQuoteIndex((prev) =>
                prev === mergedData.testimonials.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Đánh giá tiếp theo"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-slate-300 bg-white items-center justify-center text-slate-600 hover:border-[#1b1b1b] hover:text-[#1b1b1b] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="max-w-2xl mx-auto px-4">
            <p className="font-serif italic text-base sm:text-lg md:text-xl leading-relaxed text-[#1b1b1b]">
              {currentQuote.quote}
            </p>

            {/* 5 Gold Stars */}
            <div className="mt-6 flex items-center justify-center gap-1 text-amber-400">
              {Array.from({ length: currentQuote.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <div className="mt-3 text-xs font-bold tracking-[0.15em] uppercase text-[#1b1b1b]">
              {currentQuote.author}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">{currentQuote.role}</div>
          </div>
        </div>
      </section>

      {/* Section 5: TIN TỨC NỔI BẬT (3 Arch-Topped Editorial Cards) */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.08em] uppercase text-[#1b1b1b]">
              {mergedData.newsSection.heading}
            </h2>
            <div className="w-8 h-[1.5px] bg-[#1b1b1b] mx-auto my-3" />
            <p className="font-serif italic text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              {mergedData.newsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mergedData.newsSection.items.map((post) => (
              <article key={post.id} className="group text-center flex flex-col items-center">
                {/* Arch-Topped Image Container */}
                <div className="w-full aspect-[4/3] rounded-t-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#e56b6f]">
                  {post.category} <span className="text-slate-400">/ {post.date}</span>
                </div>
                <h3 className="mt-2 font-serif text-sm sm:text-base font-medium uppercase leading-snug text-[#1b1b1b] group-hover:text-[#e56b6f] transition-colors max-w-xs">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: 6 Partner Brand Emblem Strip */}
      <section className="border-t border-slate-200 py-10 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
          {mergedData.brandEmblems.map((brand) => (
            <div
              key={brand.id}
              className="py-3 px-2 opacity-65 hover:opacity-100 transition-opacity"
            >
              <div className="font-serif text-sm sm:text-base font-semibold tracking-wider text-[#1b1b1b]">
                {brand.name}
              </div>
              <div className="text-[9px] tracking-[0.22em] uppercase text-slate-400 mt-0.5">
                {brand.subtitle}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: 6-Photo Instagram Strip with Center #SparkleStyle Pill */}
      <section className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {mergedData.instagramStrip.map((imgUrl, index) => (
            <div key={index} className="aspect-square overflow-hidden bg-slate-100">
              <img
                src={imgUrl}
                alt={`Sparkle Style Look ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        {/* Centered White Hashtag Box */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-6 py-2.5 shadow-md text-xs sm:text-sm font-serif font-medium tracking-wide text-[#1b1b1b]">
            {mergedData.business.hashtag}
          </div>
        </div>
      </section>

      {/* Dark Charcoal Editorial Footer */}
      <footer id="footer" className="bg-[#1b1b1b] text-slate-300 pt-16 pb-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand & Contact */}
            <div>
              <div className="font-serif text-xl tracking-[0.2em] uppercase text-white font-semibold mb-4">
                {mergedData.business.name}
              </div>
              <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e56b6f] shrink-0 mt-0.5" />
                  <span>{mergedData.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#e56b6f] shrink-0" />
                  <span>{mergedData.business.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#e56b6f] shrink-0" />
                  <span>{mergedData.business.email}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: LIÊN KẾT */}
            <div>
              <h4 className="font-serif text-xs font-semibold tracking-[0.18em] uppercase text-white mb-4">
                LIÊN KẾT
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#arrivals" className="hover:text-white transition-colors">
                    Xu hướng mới
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors">
                    Cửa hàng sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#footer" className="hover:text-white transition-colors">
                    Liên hệ đặt lịch
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: CỬA HÀNG */}
            <div>
              <h4 className="font-serif text-xs font-semibold tracking-[0.18em] uppercase text-white mb-4">
                DỊCH VỤ & CỬA HÀNG
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Tạo kiểu tóc Nữ cao cấp</li>
                <li>Cắt & Tạo kiểu Nam lịch lãm</li>
                <li>Tóc Trẻ em an toàn</li>
                <li>Phục hồi Keratin & Tinh dầu</li>
              </ul>
            </div>

            {/* Col 4: ĐĂNG KÝ NHẬN TIN */}
            <div>
              <h4 className="font-serif text-xs font-semibold tracking-[0.18em] uppercase text-white mb-4">
                ĐĂNG KÝ NHẬN TIN
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Nhận thông báo sớm nhất về các bộ sưu tập mẫu tóc mới và ưu đãi độc quyền.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center border-b border-white/30 pb-1.5"
              >
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  className="bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#e56b6f] hover:text-white transition-colors shrink-0 ml-2"
                >
                  GỬI
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
            <p>© 2025 {mergedData.business.name}. Bảo lưu mọi quyền.</p>
            <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase">
              <span>VISA</span>
              <span>MASTERCARD</span>
              <span>MOMO</span>
              <span>VNPAY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
