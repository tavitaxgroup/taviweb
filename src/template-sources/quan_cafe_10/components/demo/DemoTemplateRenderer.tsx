'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe10MockData } from '../../data/mockData'
import {
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Menu,
  ChevronRight,
  ChevronDown,
  MapPin,
  BookOpen,
  Sparkles,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe10MockData, data)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(3)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const primaryPhone = mergedData.business.phone[0] || '0313728397'
  const primaryEmail = mergedData.business.email[0] || 'info@themona.global'

  const getPosterBackground = (theme: string) => {
    switch (theme) {
      case 'red':
        return 'from-[#dc2626] via-[#b91c1c] to-[#7f1d1d]'
      case 'blue':
        return 'from-[#0284c7] via-[#1d4ed8] to-[#1e3a8a]'
      case 'teal':
        return 'from-[#0d9488] via-[#0f766e] to-[#115e59]'
      default:
        return 'from-[#6ee7b7] via-[#34d399] to-[#059669]'
    }
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-800 font-sans selection:bg-[#1d71b8] selection:text-white">
      {/* Top Light Grey Utility Bar */}
      <div className="bg-slate-100 border-b border-slate-200 text-[11px] text-slate-600 py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#1d71b8]" />
              {primaryEmail}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#1d71b8]" />
              {primaryPhone}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-500">
            <a href="#footer" className="hover:text-[#1d71b8]">
              Đăng nhập / Đăng ký
            </a>
          </div>
        </div>
      </div>

      {/* Main Header: Logo + Wide Blue-Bordered Search Bar + Cart */}
      <header className="bg-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#1d71b8]/10 border border-[#1d71b8]/30 flex items-center justify-center text-[#1d71b8]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
                MONA<span className="text-[#7c3aed]">.Media</span>{' '}
                <span className="text-[#1d71b8] font-bold">/ Website</span>
              </div>
              <div className="text-[10px] text-slate-400 tracking-wide">
                {mergedData.business.subtitle}
              </div>
            </div>
          </a>

          {/* Center Search Input with Blue Outline */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-xl flex items-center border-2 border-[#1d71b8] rounded bg-white overflow-hidden"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm sản phẩm ..."
              className="w-full px-3.5 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Tìm kiếm"
              className="px-3.5 py-2 text-[#1d71b8] hover:bg-blue-50 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Right Shopping Cart */}
          <button
            type="button"
            onClick={() => setCartCount((c) => c + 1)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1d71b8] shrink-0"
          >
            <span>Giỏ hàng</span>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-[#1d71b8]" />
              <span className="absolute -top-2 -right-2 bg-[#f59e0b] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </button>
        </div>
      </header>

      {/* Navigation Bar with Blue Category Dropdown Header */}
      <div className="bg-slate-100 border-y border-slate-200 px-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-64 bg-[#1d71b8] text-white px-4 py-2.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider shrink-0">
            <span className="flex items-center gap-2">
              <Menu className="w-4 h-4" />
              DANH MỤC SẢN PHẨM
            </span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>

          <nav className="hidden sm:flex items-center space-x-6 px-6 text-xs font-semibold text-slate-600 uppercase">
            {mergedData.navigation.map((nav, idx) => (
              <a
                key={idx}
                href={nav.href}
                className="hover:text-[#1d71b8] transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section: Left Category List + Right Roadmap Banner + 3 Sub-Banners */}
      <section id="hero" className="py-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left Vertical Category Menu */}
            <div className="lg:col-span-3 border border-slate-200 rounded-sm bg-white divide-y divide-slate-100">
              {mergedData.categoriesSidebar.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full px-4 py-3 text-left text-xs flex items-center justify-between transition-colors ${
                    activeCategory === cat
                      ? 'bg-blue-50 text-[#1d71b8] font-bold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#1d71b8]'
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </button>
              ))}
            </div>

            {/* Right Illustrated STEAM-ROBOTICS & Book Cafe Roadmap Banner */}
            <div className="lg:col-span-9 relative rounded-sm overflow-hidden bg-gradient-to-br from-[#d8f3ff] via-[#bae6fd] to-[#e0f2fe] border border-sky-200 p-6 sm:p-8 flex flex-col justify-between min-h-[280px]">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1 bg-white/90 text-[#1d71b8] text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    ROBOTIS • STEAMCAFE HUB
                  </span>
                  <h1 className="mt-2 text-2xl sm:text-3xl font-black text-[#1e3a8a] tracking-tight">
                    {mergedData.heroRoadmap.title}
                  </h1>
                  <div className="text-lg sm:text-xl font-extrabold text-[#1d71b8]">
                    {mergedData.heroRoadmap.subtitle}
                  </div>
                </div>

                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 border-white shadow-lg shrink-0">
                  <img
                    src={mergedData.heroRoadmap.bannerImage}
                    alt="SteamCafe Book & Robotics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Visual Step Pathway Cards */}
              <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {mergedData.heroRoadmap.steps.map((st, idx) => (
                  <div
                    key={idx}
                    className="bg-white/95 backdrop-blur rounded p-2.5 border border-sky-200 shadow-sm hover:-translate-y-0.5 transition-transform"
                  >
                    <div className="text-[10px] font-black text-white bg-[#1d71b8] inline-block px-2 py-0.5 rounded-sm">
                      {st.step}
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold text-slate-700 leading-snug">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Promo Sub-Banners Row */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {mergedData.subBanners.map((banner) => {
              const toneClasses =
                banner.bgTone === 'navy'
                  ? 'from-[#0f2942] to-[#1e3a8a] text-white'
                  : banner.bgTone === 'amber'
                  ? 'from-[#f59e0b] to-[#ea580c] text-white'
                  : 'from-[#059669] to-[#047857] text-white'

              return (
                <div
                  key={banner.id}
                  className={`relative rounded-sm overflow-hidden bg-gradient-to-r ${toneClasses} p-4 flex items-center justify-between min-h-[120px] shadow-sm`}
                >
                  <div className="relative z-10 max-w-[65%]">
                    <span className="inline-block bg-white/20 text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {banner.badge}
                    </span>
                    <h3 className="mt-1.5 text-xs sm:text-sm font-black uppercase leading-snug">
                      {banner.title}
                    </h3>
                    <p className="mt-1 text-[10px] text-white/85 line-clamp-2">
                      {banner.subtitle}
                    </p>
                    {banner.phone && (
                      <div className="mt-1.5 inline-block bg-amber-300 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded">
                        {banner.phone}
                      </div>
                    )}
                  </div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-white/70 shrink-0">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3 Horizontal 6-Column Product Rows (NỔI BẬT, VĂN PHÒNG PHẨM, ĐỒ CHƠI GIÁ TỐT) */}
      <div id="featured-rows" className="space-y-6 py-4 px-4">
        {mergedData.horizontalRows.map((row) => (
          <section key={row.id} className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-sm p-4">
            {/* Section Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-200 gap-2">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-[#1d71b8]">
                {row.heading}
              </h2>
              <div className="flex items-center space-x-4 text-[11px]">
                {row.tabs.map((tab, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    className={`font-semibold transition-colors ${
                      tIdx === 0
                        ? 'text-[#1d71b8]'
                        : 'text-slate-500 hover:text-[#1d71b8]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* 6-Column Product Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {row.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setCartCount((c) => c + 1)}
                  className="group cursor-pointer flex flex-col items-center text-center p-2 rounded hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-square mb-3 overflow-hidden bg-slate-50 rounded">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.discount && (
                      <span className="absolute top-1.5 left-1.5 w-8 h-8 rounded-full bg-[#f59e0b] text-white text-[10px] font-extrabold flex items-center justify-center shadow">
                        {item.discount}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[11px] font-medium text-slate-700 group-hover:text-[#1d71b8] line-clamp-2 min-h-[32px]">
                    {item.name}
                  </h3>
                  <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[11px]">
                    {item.oldPrice && (
                      <span className="text-slate-400 line-through text-[10px]">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="font-extrabold text-[#f59e0b]">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 4 Alternating Book & Cafe Showcase Sections (VĂN HỌC, KINH TẾ, NUÔI DẠY CON, TÂM LÝ – KỸ NĂNG) */}
      <div id="book-sections" className="space-y-6 py-2 px-4">
        {mergedData.bookSections.map((section) => {
          const posterEl = (
            <div
              className={`lg:col-span-4 relative rounded-sm overflow-hidden bg-gradient-to-br ${getPosterBackground(
                section.poster.theme
              )} text-white p-6 flex flex-col justify-between min-h-[340px] shadow-sm`}
            >
              <img
                src={section.poster.image}
                alt={section.poster.title}
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
              />
              <div className="relative z-10">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded">
                  {section.poster.badge}
                </span>
                <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase leading-tight">
                  {section.poster.title}
                </h3>
                <p className="mt-2 text-xs text-white/90 leading-relaxed">
                  {section.poster.subtitle}
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <div className="w-full h-36 rounded overflow-hidden border-2 border-white/80 mb-4 shadow-md">
                  <img
                    src={section.poster.image}
                    alt={section.poster.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setCartCount((c) => c + 1)}
                  className="bg-slate-900/90 hover:bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-2 rounded transition-colors"
                >
                  {section.poster.ctaText}
                </button>
              </div>
            </div>
          )

          const booksGridEl = (
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {section.items.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setCartCount((c) => c + 1)}
                  className="group cursor-pointer border border-slate-100 hover:border-slate-200 rounded p-2.5 flex items-center gap-3 bg-white hover:shadow-sm transition-all"
                >
                  <div className="relative w-20 h-28 shrink-0 rounded overflow-hidden bg-slate-100">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {book.discount && (
                      <span className="absolute top-1 left-1 w-7 h-7 rounded-full bg-[#f59e0b] text-white text-[9px] font-extrabold flex items-center justify-center shadow">
                        {book.discount}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-slate-700 group-hover:text-[#1d71b8] line-clamp-2">
                      {book.name}
                    </h4>
                    {book.oldPrice && (
                      <div className="mt-1.5 text-[10px] text-slate-400 line-through">
                        {book.oldPrice}
                      </div>
                    )}
                    <div className="text-xs font-extrabold text-[#f59e0b]">
                      {book.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )

          return (
            <section
              key={section.id}
              className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-sm p-4"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-200 gap-2">
                <h2 className="text-sm font-extrabold uppercase tracking-wide text-[#1d71b8]">
                  {section.heading}
                </h2>
                <div className="flex items-center space-x-4 text-[11px]">
                  {section.tabs.map((tab, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`font-semibold transition-colors ${
                        idx === 0
                          ? 'text-[#1d71b8]'
                          : 'text-slate-500 hover:text-[#1d71b8]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {section.posterPosition === 'left' ? (
                  <>
                    {posterEl}
                    {booksGridEl}
                  </>
                ) : (
                  <>
                    {booksGridEl}
                    {posterEl}
                  </>
                )}
              </div>
            </section>
          )
        })}
      </div>

      {/* 12 Partner Publisher & Roastery Logos (6x2 Grid) */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {mergedData.publisherLogos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white border border-slate-200 rounded-sm p-4 flex flex-col items-center justify-center text-center h-24 hover:shadow-md transition-shadow"
            >
              <div
                className="font-serif text-sm sm:text-base font-black tracking-wide"
                style={{ color: logo.accentColor }}
              >
                {logo.name}
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-widest text-slate-400">
                {logo.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Charcoal Newsletter Bar */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto bg-[#4a4a4a] text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs font-bold uppercase tracking-wider">
            ĐĂNG KÝ NHẬN BẢN TIN
          </span>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Email..."
              className="w-full bg-white text-slate-800 text-xs px-3.5 py-2 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#1d71b8] hover:bg-[#155a96] text-white text-xs font-bold uppercase px-5 py-2 rounded-r shrink-0 transition-colors"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t border-slate-200 mt-6 pt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-200 text-xs">
            {/* Col 1: DỊCH VỤ */}
            <div>
              <h4 className="font-extrabold uppercase text-[#1d71b8] mb-3">
                DỊCH VỤ
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Điều khoản sử dụng</li>
                <li>Chính sách bảo mật</li>
                <li>Giới thiệu SteamCafe</li>
                <li>Hệ thống trung tâm – nhà sách</li>
              </ul>
            </div>

            {/* Col 2: HỖ TRỢ */}
            <div>
              <h4 className="font-extrabold uppercase text-[#1d71b8] mb-3">
                HỖ TRỢ
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Chính sách đổi - trả - hoàn tiền</li>
                <li>Chính sách khách sỉ</li>
                <li>Phương thức vận chuyển</li>
                <li>Phương thức thanh toán</li>
              </ul>
            </div>

            {/* Col 3: TÀI KHOẢN CỦA TÔI */}
            <div>
              <h4 className="font-extrabold uppercase text-[#1d71b8] mb-3">
                TÀI KHOẢN CỦA TÔI
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>Đăng nhập / Tạo tài khoản mới</li>
                <li>Thay đổi địa chỉ nhận hàng</li>
                <li>Chi tiết tài khoản</li>
                <li>Lịch sử mua hàng</li>
              </ul>
            </div>

            {/* Col 4: LIÊN HỆ */}
            <div>
              <h4 className="font-extrabold uppercase text-[#1d71b8] mb-3">
                LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-slate-600">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{mergedData.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{primaryPhone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{primaryEmail}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Brand & Delivery Row */}
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs text-slate-500">
            <div>
              <div className="text-base font-black text-slate-900 mb-2">
                MONA<span className="text-[#7c3aed]">.Media</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {mergedData.business.address}
                <br />
                {mergedData.business.disclaimer}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded">
                  Google Play
                </span>
                <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded">
                  App Store
                </span>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-1.5 font-black tracking-wider text-xs">
              <span className="text-red-600">NINJA VAN</span>
              <span className="text-orange-500">SPEEDLINK</span>
              <span className="text-amber-600">KERRY EXPRESS</span>
            </div>
          </div>
        </div>

        {/* Bottom Solid Blue Bar */}
        <div className="bg-[#1d71b8] text-white text-center py-2.5 text-[11px]">
          © Thiết kế và lập trình bởi <strong>MONA.Media / Website</strong>
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
