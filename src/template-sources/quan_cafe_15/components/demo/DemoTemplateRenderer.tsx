'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe15MockData } from '../../data/mockData'
import {
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Heart,
  CloudSun,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe15MockData, data)
  const [activeCategory, setActiveCategory] = useState<
    'Tất Cả' | 'Sữa Tươi Thanh Trùng' | 'Sữa Tươi Tiệt Trùng' | 'Trà Sữa & Sữa Chua Đà Lạt'
  >('Tất Cả')
  const [cartCount, setCartCount] = useState(2)

  const primaryPhone = mergedData.business.phone[0] || '1900 555 889'
  const primaryEmail = mergedData.business.email[0] || 'cskh@dalattruemilk.vn'

  const filteredProducts =
    activeCategory === 'Tất Cả'
      ? mergedData.productsSection.items
      : mergedData.productsSection.items.filter(
          (item) => item.category === activeCategory
        )

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0072bc] selection:text-white overflow-x-hidden">
      {/* Top Highland Freshness Bar */}
      <div className="bg-[#0072bc] text-white text-[11px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1.5 font-bold">
              <CloudSun className="w-3.5 h-3.5 text-amber-300" />
              {mergedData.business.parentBrand} – {mergedData.business.subSlogan}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-sky-200" />
              Hotline Giao Sữa Tươi: {primaryPhone}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-sky-200" />
              {primaryEmail}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Đà Lạt True Milk Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-[#0072bc] to-[#0284c7] text-white px-4 py-2 rounded-2xl shadow flex flex-col items-center leading-none border-2 border-[#65a30d]">
              <span className="text-[10px] font-bold tracking-widest uppercase text-lime-200">
                VPMilk
              </span>
              <span className="text-base sm:text-lg font-black tracking-tight">
                {mergedData.business.name}
              </span>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-extrabold uppercase tracking-wide text-[#005a96]">
            {mergedData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`transition-colors ${
                  idx === 0 ? 'text-[#5eb319]' : 'hover:text-[#5eb319]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Cart Button */}
          <button
            type="button"
            onClick={() => setCartCount((c) => c + 1)}
            className="bg-[#5eb319] hover:bg-[#4d9613] text-white text-xs font-extrabold px-5 py-2.5 rounded-full shadow-md flex items-center gap-2 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Đặt Sữa Giao Ngay</span>
            <span className="bg-white text-[#5eb319] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* =====================================================================
          SECTION 1: CÂU CHUYỆN ĐÀ LẠT TRUE MILK (EXACT MATCH TO TABLET TOP)
          Sky-Blue Cloudy Backdrop + NGON 100% TỪ ĐÀ LẠT + Rolling Green Hills & Barn
      ====================================================================== */}
      <section
        id="story"
        className="relative bg-gradient-to-b from-[#bae6fd] via-[#e0f2fe] to-[#d9f99d] pt-12 pb-28 px-4 sm:px-8 overflow-hidden"
      >
        {/* Fluffy White Cloud Shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-10 w-64 h-24 rounded-full bg-white/70 blur-xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-20 right-16 w-80 h-28 rounded-full bg-white/75 blur-xl"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Centered Heading */}
          <div className="text-center mb-10">
            <h2 className="text-lg sm:text-2xl font-black uppercase tracking-wider text-[#005a96]">
              {mergedData.storyHero.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: NGON 100% TỪ ĐÀ LẠT 3D-Style Emblem */}
            <div className="lg:col-span-6 text-center lg:text-left space-y-3">
              <span className="inline-block bg-white/90 text-[#0072bc] text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                {mergedData.storyHero.brandBadge}
              </span>

              <div className="py-2">
                <div className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white drop-shadow-[0_5px_0_#0072bc]">
                  {mergedData.storyHero.headlineBig}
                </div>
                <div className="mt-1 inline-block bg-[#5eb319] text-white text-xl sm:text-3xl font-black uppercase tracking-wide px-5 py-1.5 rounded-2xl shadow-lg">
                  {mergedData.storyHero.headlineSub}
                </div>
              </div>
            </div>

            {/* Right: Sky-Blue Rounded Story Box */}
            <div className="lg:col-span-6">
              <div className="bg-white/90 backdrop-blur-md border-2 border-sky-200 rounded-3xl p-6 sm:p-8 shadow-xl">
                <p className="text-sm sm:text-base font-bold text-[#005a96] leading-relaxed">
                  {mergedData.storyHero.storyLead}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {mergedData.storyHero.storyBody}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href="#products"
                    className="bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-2.5 rounded-full shadow transition-colors"
                  >
                    {mergedData.storyHero.ctaText}
                  </a>
                  <span className="text-xs font-bold text-[#5eb319] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Chuẩn Tươi Sạch Cao Nguyên
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Rolling Green Dalat Farm Meadow & Dairy Cows Showcase */}
          <div className="mt-12 relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#5eb319]">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-7 h-56 sm:h-72 overflow-hidden">
                <img
                  src={mergedData.storyHero.farmImage}
                  alt="Nông Trại Bò Sữa Cao Nguyên Đà Lạt"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-5 p-6 sm:p-8 text-white bg-gradient-to-br from-[#5eb319] to-[#3f820b]">
                <div className="text-xs font-extrabold uppercase tracking-widest text-lime-200">
                  NÔNG TRẠI ĐƠN DƯƠNG – LÂM ĐỒNG
                </div>
                <h3 className="mt-1 text-xl sm:text-2xl font-black leading-snug">
                  Đồng Cỏ Xanh Mát & Đàn Bò Hạnh Phúc
                </h3>
                <p className="mt-2 text-xs text-lime-50 leading-relaxed">
                  Không khí se lạnh đặc trưng của Đà Lạt cùng nguồn cỏ tươi giàu dinh dưỡng tạo nên dòng sữa tươi thanh trùng thơm béo tự nhiên.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Green Hill Divider at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-r from-[#5eb319] via-[#74c627] to-[#5eb319] rounded-t-[100%]" />
      </section>

      {/* =====================================================================
          SECTION 2: SẢN PHẨM SỮA TƯƠI & TRÀ SỮA ĐÀ LẠT TRUE MILK (TABLET MIDDLE)
          Sky-Blue & Green Meadow Pedestals + Interactive Category Filter
      ====================================================================== */}
      <section
        id="products"
        className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white via-[#f0f9ff] to-[#e0f2fe]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-black uppercase text-[#005a96]">
              {mergedData.productsSection.heading}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              {mergedData.productsSection.subtitle}
            </p>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {(
                [
                  'Tất Cả',
                  ...mergedData.productsSection.categories,
                ] as const
              ).map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#0072bc] text-white shadow-md'
                        : 'bg-white text-[#005a96] border border-sky-200 hover:border-[#0072bc]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3-Column Product Cards Sitting on Green Grass Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border-2 border-sky-100 hover:border-[#5eb319] shadow-md hover:shadow-xl overflow-hidden transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Sky-Blue & Green Meadow Product Stage */}
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-[#bae6fd] to-[#e0f2fe] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#5eb319] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {product.badge}
                    </span>
                    {/* Bottom Lush Green Meadow Curve */}
                    <div className="absolute bottom-0 inset-x-0 h-3 bg-[#5eb319]" />
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-bold text-[#0072bc] uppercase">
                      {product.category} • {product.volume}
                    </div>
                    <h3 className="mt-1 text-base font-black text-slate-900 group-hover:text-[#0072bc] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-lg font-black text-[#5eb319]">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCartCount((c) => c + 1)}
                    className="bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-extrabold px-4 py-2 rounded-full transition-colors"
                  >
                    Chọn Mua +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: TIN TỨC & SỰ KIỆN (EXACT 3-CARD CAROUSEL ON LAPTOP & TABLET)
          Sky-Blue Cloud Background + 3 Rounded Banner Cards + Bold Cyan Titles
      ====================================================================== */}
      <section
        id="news"
        className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-[#c3e8fc] via-[#e4f5fe] to-white overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#004b7c]">
              {mergedData.newsSection.heading}
            </h2>
          </div>

          {/* Left & Right Carousel Arrows */}
          <button
            type="button"
            aria-label="Trước"
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow items-center justify-center text-slate-500 hover:text-[#0072bc]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Sau"
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow items-center justify-center text-slate-500 hover:text-[#0072bc]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Rounded-3xl News & Event Cards Matching CF015-quan_cafe_15.png */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mergedData.newsSection.items.map((ev) => (
              <article key={ev.id} className="group flex flex-col">
                {/* Rounded-3xl Sky-Blue & Green Meadow Promo Thumbnail */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-b from-[#8dd5f8] to-[#d9f99d] shadow-md mb-5 border-2 border-white">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004b7c]/55 via-transparent to-black/20 p-4 flex flex-col justify-between">
                    <span className="self-start bg-[#5eb319] text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {ev.bannerBadge}
                    </span>
                    <div className="text-white font-black text-xs sm:text-sm drop-shadow">
                      {ev.bannerHighlight}
                    </div>
                  </div>
                </div>

                {/* Bold Cyan-Blue Title + Excerpt */}
                <h3 className="text-xs sm:text-sm font-black uppercase leading-snug text-[#0088cc] group-hover:text-[#005a96] transition-colors">
                  {ev.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {ev.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0072bc]" />
            <span className="w-2.5 h-2.5 rounded-full border border-[#0072bc] bg-white" />
            <span className="w-2.5 h-2.5 rounded-full border border-[#0072bc] bg-white" />
          </div>
        </div>
      </section>

      {/* Section 4: 4 Farm Quality Standards */}
      <section id="standards" className="py-14 px-4 sm:px-8 bg-[#f4fce3] border-t border-lime-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mergedData.farmStandards.map((std) => (
            <div
              key={std.id}
              className="bg-white rounded-2xl p-6 border border-lime-200 shadow-sm text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#5eb319]">
                {std.metric}
              </div>
              <h3 className="mt-2 text-sm font-extrabold text-[#005a96]">
                {std.title}
              </h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                {std.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#004b7c] text-white pt-14 pb-8 px-4 sm:px-8 text-xs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
          <div>
            <div className="inline-block bg-[#5eb319] text-white font-black text-base px-4 py-1.5 rounded-xl mb-3">
              {mergedData.business.name}
            </div>
            <p className="text-sky-100/85 leading-relaxed">
              {mergedData.business.parentBrand} – Sữa tươi chuẩn ngon 100% từ cao nguyên Đà Lạt.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-lime-300 mb-3">
              Sản Phẩm Chủ Lực
            </h4>
            <ul className="space-y-2 text-sky-100/85">
              <li>Sữa tươi thanh trùng Đà Lạt True Milk</li>
              <li>Sữa tươi tiệt trùng giàu Canxi</li>
              <li>Sữa chua ăn & Sữa chua uống Đà Lạt</li>
              <li>Trà sữa Ô Long Sữa tươi Thanh trùng</li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-lime-300 mb-3">
              Chăm Sóc Khách Hàng
            </h4>
            <ul className="space-y-2 text-sky-100/85">
              <li>Đặt sữa tươi giao định kỳ mỗi sáng</li>
              <li>Chương trình Mua Sữa Tặng Rau Đà Lạt</li>
              <li>Hệ thống cửa hàng Đà Lạt True Milk</li>
              <li>Chính sách đại lý & phân phối</li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-lime-300 mb-3">
              Thông Tin Liên Hệ
            </h4>
            <ul className="space-y-2.5 text-sky-100/85">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-300 shrink-0 mt-0.5" />
                <span>{mergedData.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-300 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-300 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 text-center text-[11px] text-sky-200/75 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2025 {mergedData.business.parentBrand}. Bảo lưu mọi quyền.</span>
          <span className="inline-flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-lime-300 fill-current" />
            Ngon 100% Từ Cao Nguyên Đà Lạt
          </span>
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
