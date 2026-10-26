'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe13MockData } from '../../data/mockData'
import {
  Search,
  ThumbsUp,
  Gift,
  Palette,
  DollarSign,
  Layers,
  Truck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  CheckCircle,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe13MockData, data)
  const [selectedBrand, setSelectedBrand] = useState('Tất Cả')
  const [searchTerm, setSearchTerm] = useState('')

  const primaryPhone = mergedData.business.phone[0] || '028 3899 1994'
  const primaryEmail = mergedData.business.email[0] || 'export@gasaco.com.vn'

  const filteredProducts = mergedData.productsSection.items.filter((item) => {
    const matchesBrand =
      selectedBrand === 'Tất Cả' || item.subBrand === selectedBrand
    const matchesSearch =
      !searchTerm.trim() ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subBrand.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesBrand && matchesSearch
  })

  const renderWhyIcon = (type: string) => {
    switch (type) {
      case 'thumbsUp':
        return <ThumbsUp className="w-5 h-5" />
      case 'gift':
        return <Gift className="w-5 h-5" />
      case 'palette':
        return <Palette className="w-5 h-5" />
      case 'dollar':
        return <DollarSign className="w-5 h-5" />
      case 'layers':
        return <Layers className="w-5 h-5" />
      default:
        return <Truck className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#e1251b] selection:text-white overflow-x-hidden">
      {/* Top Export & Distribution Utility Bar */}
      <div className="bg-[#0e4e68] text-white text-[11px] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1.5 font-semibold text-cyan-200">
              <Globe className="w-3.5 h-3.5" />
              OEM / ODM Beverage Manufacturer • {mergedData.business.established}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-cyan-300" />
              {primaryPhone}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-cyan-300" />
              {primaryEmail}
            </span>
            <span className="bg-white/15 px-2 py-0.5 rounded text-[10px] font-bold">
              VN / EN
            </span>
          </div>
        </div>
      </div>

      {/* Main Header with Red GASACO Est. 1994 Badge Logo */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Iconic Red GASACO Est. 1994 Logo Box */}
          <a
            href="#"
            className="bg-[#e1251b] text-white px-5 py-2.5 rounded-lg shadow-md flex flex-col items-end leading-none"
          >
            <span className="text-xl sm:text-2xl font-black tracking-[0.14em] uppercase">
              {mergedData.business.name}
            </span>
            <span className="text-[9px] italic font-semibold tracking-wider text-white/90 mt-0.5">
              {mergedData.business.established}
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-extrabold uppercase tracking-wider text-slate-700">
            {mergedData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`transition-colors ${
                  idx === 0 ? 'text-[#e1251b]' : 'hover:text-[#e1251b]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#products"
            className="bg-[#e1251b] hover:bg-[#b91c1c] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-full shadow transition-colors"
          >
            Nhận Báo Giá Sỉ
          </a>
        </div>
      </header>

      {/* =====================================================================
          TROPICAL BEVERAGE HERO BANNER (MATCHING CF013-quan_cafe_13.png)
          Turquoise Coconut Water Splash + Purple/Pink Capacity Banners
      ====================================================================== */}
      <section className="relative bg-gradient-to-r from-[#1ba8b8] via-[#24c0c5] to-[#1a7fa3] text-white py-16 sm:py-20 px-4 sm:px-8 overflow-hidden">
        {/* Tropical Wave Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-serif italic text-2xl sm:text-3xl text-amber-200 drop-shadow">
              {mergedData.hero.scriptLead}
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow">
              {mergedData.hero.mainTitle}
            </h1>

            {/* Iconic Stacked Purple & Pink Headline Bars from Screenshot */}
            <div className="pt-2 space-y-2">
              <div className="inline-block bg-[#6b11c6] text-white font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-tight px-5 py-2 shadow-lg">
                {mergedData.hero.highlightBannerTop}
              </div>
              <br />
              <div className="inline-block bg-[#ff0f7b] text-white font-black text-xl sm:text-3xl md:text-4xl uppercase tracking-tight px-5 py-2.5 shadow-lg">
                {mergedData.hero.highlightBannerBottom}
              </div>
            </div>

            <p className="pt-2 text-xs sm:text-sm text-cyan-50 max-w-xl leading-relaxed">
              {mergedData.hero.description}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="bg-[#e1251b] hover:bg-[#b91c1c] text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg transition-colors"
              >
                Khám Phá Danh Mục Đồ Uống
              </a>
              <a
                href="#why-choose-us"
                className="bg-white text-[#0e4e68] hover:bg-cyan-50 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow transition-colors"
              >
                Dịch Vụ Gia Công OEM/ODM
              </a>
            </div>
          </div>

          {/* Right Tropical Drink Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-cyan-900">
              <img
                src={mergedData.hero.heroImage}
                alt="Vietnamese Coconut Water & Tropical Drinks"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur rounded-2xl p-3 text-slate-800 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase text-[#e1251b]">
                    100% TROPICAL TASTE
                  </div>
                  <div className="text-xs font-bold">
                    Coconut Water • Horchata • Chia Seed
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-[#22a54a] shrink-0" />
              </div>
            </div>

            <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-amber-100">
              <img
                src={mergedData.hero.secondaryImage}
                alt="OLÁ Horchata & Shi Shi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: WHY CHOOSE US? (EXACT 6 COLORFUL NUMBERED CARDS 1-6)
      ====================================================================== */}
      <section id="why-choose-us" className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#d9232a]">
              {mergedData.whyChooseUs.heading}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              {mergedData.whyChooseUs.subtitle}
            </p>
          </div>

          {/* 3x2 Grid of Colorful Numbered Cards (1 to 6) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {mergedData.whyChooseUs.cards.map((card) => (
              <div
                key={card.number}
                style={{ backgroundColor: card.bgColor }}
                className="relative rounded-2xl p-6 pt-8 text-white shadow-lg hover:-translate-y-1 transition-transform overflow-hidden"
              >
                {/* Top-Left White Circular Icon Badge */}
                <div
                  style={{ color: card.bgColor }}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-5"
                >
                  {renderWhyIcon(card.iconType)}
                </div>

                {/* Giant White Number on Top-Right */}
                <div className="absolute top-2 right-5 text-5xl sm:text-6xl font-black text-white/95 leading-none select-none">
                  {card.number}
                </div>

                <h3 className="text-sm font-black uppercase tracking-wide leading-snug">
                  {card.titleEn}
                </h3>
                <div className="mt-1 text-xs font-bold text-white/95">
                  {card.titleVi}
                </div>
                <p className="mt-3 text-xs text-white/85 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: CATEGORIES SUB-BRAND STRIP (Chia Seed, Bubbi, Basil Seed, Aloe)
      ====================================================================== */}
      <section id="categories" className="py-10 px-4 sm:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-[#d9232a]">
              CATEGORIES • DÒNG THƯƠNG HIỆU CHỦ LỰC
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mergedData.categoryBrands.map((brand) => {
              const isSelected = selectedBrand === brand.name
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => setSelectedBrand(brand.name)}
                  className={`rounded-xl p-4 text-center transition-all border ${
                    isSelected
                      ? 'bg-white border-[#e1251b] shadow-md scale-[1.02]'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div
                    style={{ color: brand.accentColor }}
                    className="font-serif italic text-lg font-black leading-none"
                  >
                    {brand.name}
                  </div>
                  <div className="mt-1.5 text-[10px] font-semibold text-slate-500">
                    {brand.subtitle}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: LIST OF PRODUCTS (With Search Input & Numbered Cards 01..08)
      ====================================================================== */}
      <section id="products" className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#d9232a]">
                {mergedData.productsSection.heading}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Đa dạng quy cách đóng lon nhôm 330ml, chai thủy tinh 290ml và chai PET xuất khẩu
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={mergedData.productsSection.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-xs border border-slate-200 rounded-full focus:outline-none focus:border-[#e1251b]"
              />
            </div>
          </div>

          {/* 4x2 Numbered Beverage Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-slate-200 hover:border-[#e1251b] rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-b from-slate-50 to-cyan-50/40 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/95 text-[#e1251b] text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
                      #{product.code}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-[#0e4e68] text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-full">
                      {product.subBrand}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-slate-400">
                    {product.code} • {product.volume}
                  </div>
                  <h3 className="mt-1 text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-[#e1251b] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">{product.packaging}</div>
                    <div className="text-xs font-black text-[#e1251b]">
                      {product.price}
                    </div>
                  </div>
                  <a
                    href="#footer"
                    className="w-8 h-8 rounded-full bg-red-50 text-[#e1251b] group-hover:bg-[#e1251b] group-hover:text-white flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: BEVERAGE INSIGHTS & NEWS (Horchata Rice Milk, Nata de Coco)
      ====================================================================== */}
      <section id="news" className="py-16 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black uppercase text-slate-900">
              {mergedData.newsSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mergedData.newsSection.items.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">
                      GASACO | {article.date}
                    </div>
                    <h3 className="mt-1.5 text-sm font-extrabold text-slate-900 leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-xs font-extrabold text-[#e1251b] inline-flex items-center gap-1">
                      See detail <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#0b394d] text-white pt-14 pb-8 px-4 sm:px-8 text-xs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
          <div>
            <div className="inline-block bg-[#e1251b] text-white px-4 py-2 rounded font-black tracking-widest text-lg mb-3">
              {mergedData.business.name}{' '}
              <span className="text-[10px] font-normal italic">
                {mergedData.business.established}
              </span>
            </div>
            <p className="text-cyan-100/80 leading-relaxed">
              {mergedData.business.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-amber-300 mb-3">
              Dòng Sản Phẩm
            </h4>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Vietnamese Coconut Water</li>
              <li>OLÁ Horchata Rice Milk</li>
              <li>Chia Seed & Basil Seed Drink</li>
              <li>Bubbi Bubble Milk Tea</li>
              <li>Aloe Vera & Shi Shi Juice</li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-amber-300 mb-3">
              Dịch Vụ OEM / ODM
            </h4>
            <ul className="space-y-2 text-cyan-100/80">
              <li>Nghiên cứu công thức R&D</li>
              <li>Miễn phí mẫu thử & thiết kế nhãn</li>
              <li>Công suất 50.000.000+ sản phẩm/năm</li>
              <li>Chứng nhận FDA, HALAL, ISO, HACCP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-amber-300 mb-3">
              Liên Hệ Nhà Máy
            </h4>
            <ul className="space-y-2.5 text-cyan-100/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{mergedData.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 text-center text-[11px] text-cyan-200/70">
          © 2025 {mergedData.business.name} ({mergedData.business.established}) – All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
