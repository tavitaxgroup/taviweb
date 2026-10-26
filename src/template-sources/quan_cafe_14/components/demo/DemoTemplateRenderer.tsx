'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe14MockData } from '../../data/mockData'
import {
  Phone,
  ShoppingBag,
  Search,
  ChevronDown,
  CheckCircle2,
  Wrench,
  Award,
  ShieldCheck,
  MapPin,
  Mail,
  ArrowRight,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe14MockData, data)
  const [activeCategory, setActiveCategory] = useState<
    | 'Tất Cả'
    | 'Máy Pha Cà Phê Chuyên Nghiệp'
    | 'Máy Xay Cà Phê'
    | 'Máy Sinh Tố & Quầy Bar'
    | 'Linh Kiện Chính Hãng'
  >('Tất Cả')
  const [searchQuery, setSearchQuery] = useState('')
  const [bagCount, setBagCount] = useState(0)

  const primaryPhone = mergedData.business.phone[0] || '0905 555 909'
  const primaryEmail = mergedData.business.email[0] || 'info@kiennambarista.com'

  const filteredMachines = mergedData.catalogSection.items.filter((item) => {
    const matchesCat =
      activeCategory === 'Tất Cả' || item.category === activeCategory
    const matchesSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#1e3a8a] selection:text-white overflow-x-hidden">
      {/* =====================================================================
          EXACT 2-TIER HEADER FROM CF014-quan_cafe_14.jpg
      ====================================================================== */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-3 pb-3">
          {/* Top Utility Row (Right-Aligned Hotline, Bag Icon with Red 0 Badge, Grey Search Box, Language Toggle) */}
          <div className="flex flex-wrap items-center justify-end gap-4 pb-2.5 border-b border-slate-100 text-xs">
            <a
              href={`tel:${primaryPhone}`}
              className="inline-flex items-center gap-1.5 font-serif text-slate-700 hover:text-[#1e3a8a]"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Hotline: {primaryPhone}</span>
            </a>

            {/* Shopping Bag with Red Circle Badge */}
            <button
              type="button"
              onClick={() => setBagCount((c) => c + 1)}
              aria-label="Giỏ hàng báo giá"
              className="relative p-1 text-slate-700 hover:text-[#1e3a8a]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1.5 bg-[#dc2626] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {bagCount}
              </span>
            </button>

            {/* Grey Search Input */}
            <div className="relative w-52 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm ..."
                className="w-full bg-slate-100 border border-slate-200 rounded pl-8 pr-3 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-[#1e3a8a]"
              />
            </div>

            {/* Vietnamese Flag Language Selector */}
            <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded px-2.5 py-1.5 text-[11px] text-slate-700">
              <span className="inline-block w-4 h-3 bg-[#da251d] text-[#ffff00] text-[8px] leading-3 text-center font-bold rounded-[1px]">
                ★
              </span>
              <span>Tiếng Việt</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          {/* Main Navigation Row: Left KIEN NAM BARISTA Logo + Right Nav Links */}
          <div className="pt-3 flex items-center justify-between gap-4">
            {/* Iconic Blue Building + Red House Roof Logo */}
            <a href="#" className="flex flex-col items-center shrink-0 group">
              <div className="flex items-end gap-0.5">
                {/* Blue High-Rise Grid */}
                <div className="w-3.5 h-9 bg-[#1d428a] grid grid-cols-2 gap-[1px] p-[2px]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="bg-white/80 block" />
                  ))}
                </div>
                {/* Blue & Red Roofed House */}
                <div className="flex items-end">
                  <div className="w-3 h-7 bg-[#1d428a] rounded-tl" />
                  <div className="w-6 h-8 bg-[#e02b20] relative flex items-center justify-center rounded-tr">
                    <span className="w-2.5 h-2.5 bg-white block" />
                  </div>
                </div>
              </div>
              <div className="mt-1 font-serif text-[11px] sm:text-xs font-extrabold tracking-tight text-[#1d428a] border-b-2 border-[#1d428a] pb-0.5 leading-none">
                {mergedData.business.name}
              </div>
            </a>

            {/* Right Uppercase Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-xs font-serif font-bold uppercase tracking-wide text-slate-800">
              {mergedData.navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`py-1 inline-flex items-center gap-1 transition-colors ${
                    idx === 0
                      ? 'border-b-2 border-slate-900 text-slate-900'
                      : 'hover:text-[#e02b20]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* =====================================================================
          HERO SECTION (EXACT MATCH TO CF014-quan_cafe_14.jpg)
          Dark Studio Navy-Black Backdrop + BFC Logo + BFC GALILEO + Espresso Machine
      ====================================================================== */}
      <section className="relative bg-gradient-to-r from-[#070b11] via-[#0d2137] to-[#08121e] text-white py-16 sm:py-20 px-4 sm:px-8 overflow-hidden">
        {/* Subtle Radial Blue Studio Spotlight behind the Espresso Machine */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1d639e]/30 blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top-Right BFC Coffee Machines Italian Emblem */}
          <div className="flex justify-end mb-4">
            <div className="text-right">
              <div className="inline-flex items-center justify-center border-2 border-white/80 rounded-full px-5 py-1.5">
                <span className="font-serif italic font-black text-2xl sm:text-3xl tracking-wider text-white">
                  {mergedData.hero.featuredBrandLogo}
                </span>
              </div>
              <div className="font-serif italic text-xs text-[#e02b20] mt-1">
                {mergedData.hero.featuredBrandMotto}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: BFC GALILEO + Exact Vietnamese Company Intro */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-block bg-[#6b11c6] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded">
                {mergedData.hero.headlineHighlight}
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide uppercase text-white">
                {mergedData.hero.modelTitle}
              </h1>

              <p className="font-serif text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {mergedData.hero.description}
              </p>

              {/* Technical Spec Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {mergedData.hero.specsBadges.map((spec, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 border border-white/20 text-cyan-100 text-[11px] font-medium px-3 py-1 rounded"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#catalog"
                  className="bg-[#e02b20] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded shadow-lg transition-colors"
                >
                  Báo Giá Máy Pha Cà Phê
                </a>
                <a
                  href="#combos"
                  className="border border-white/50 hover:border-white text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors"
                >
                  Combo Mở Quán Trọn Gói
                </a>
              </div>
            </div>

            {/* Right Column: Gleaming Stainless Steel Commercial Espresso Machine */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.75)] bg-[#0b1929]">
                <img
                  src={mergedData.hero.machineImage}
                  alt="BFC Galileo Commercial Espresso Machine"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur border border-white/20 px-3 py-1.5 rounded flex items-center gap-2 text-[11px]">
                  <span className="inline-block w-3 h-2 bg-gradient-to-r from-green-600 via-white to-red-600" />
                  <span className="font-bold text-white">100% Made in Italy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Authorized World-Class Brands Strip */}
      <section id="brands" className="bg-slate-100 border-b border-slate-200 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">
            NHÀ PHÂN PHỐI CHÍNH HÃNG CÁC THƯƠNG HIỆU THIẾT BỊ PHA CHẾ HÀNG ĐẦU THẾ GIỚI
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {mergedData.authorizedBrands.map((b, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded p-3.5 text-center hover:border-[#1d428a] transition-colors"
              >
                <div className="font-serif text-xs sm:text-sm font-black text-[#1d428a] uppercase">
                  {b.name}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{b.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Commercial Espresso Machine & Equipment Catalog */}
      <section id="catalog" className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              {mergedData.catalogSection.heading}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              {mergedData.catalogSection.subtitle}
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {mergedData.catalogSection.categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#1d428a] text-white shadow'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 4x2 Commercial Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMachines.map((machine) => (
              <div
                key={machine.id}
                className="group border border-slate-200 hover:border-[#1d428a] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {machine.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#e02b20] text-white text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded">
                        {machine.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 bg-slate-900/85 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                      {machine.origin}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#1d428a]">
                      {machine.brand}
                    </div>
                    <h3 className="mt-1 font-serif text-sm font-bold text-slate-900 group-hover:text-[#1d428a] line-clamp-2">
                      {machine.name}
                    </h3>
                    <p className="mt-2 text-[11px] text-slate-500 bg-slate-50 border border-slate-100 rounded px-2.5 py-1.5">
                      {machine.specs}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-[#e02b20]">
                      {machine.price}
                    </div>
                    {machine.oldPrice && (
                      <div className="text-[10px] text-slate-400 line-through">
                        {machine.oldPrice}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setBagCount((c) => c + 1)}
                    className="bg-[#1d428a] hover:bg-[#153169] text-white text-[11px] font-bold px-3 py-1.5 rounded inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Báo giá</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Turnkey Cafe Setup Combos */}
      <section id="combos" className="py-16 px-4 sm:px-8 bg-[#0b1929] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              TURNKEY BARISTA SOLUTIONS
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold">
              Giải Pháp Combo Mở Quán Cà Phê Trọn Gói Tiết Kiệm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mergedData.turnkeyCombos.map((combo) => (
              <div
                key={combo.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border ${
                  combo.highlight
                    ? 'bg-gradient-to-b from-[#163458] to-[#0f243d] border-amber-400 shadow-2xl'
                    : 'bg-[#11243a] border-white/15'
                }`}
              >
                <div>
                  <span className="inline-block bg-white/10 text-cyan-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {combo.targetScale}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold text-white">
                    {combo.name}
                  </h3>
                  <div className="mt-3 text-2xl font-black text-amber-400">
                    {combo.price}
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs text-slate-200">
                    {combo.itemsIncluded.map((line, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setBagCount((c) => c + 1)}
                  className={`mt-8 w-full py-3 rounded font-bold text-xs uppercase tracking-wider transition-colors ${
                    combo.highlight
                      ? 'bg-[#e02b20] hover:bg-[#b91c1c] text-white'
                      : 'bg-white text-[#0b1929] hover:bg-slate-100'
                  }`}
                >
                  Nhận Tư Vấn Gói Này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 4 Technical & Barista Training Services */}
      <section id="services" className="py-16 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mergedData.technicalServices.map((srv, idx) => (
              <div
                key={srv.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1d428a]/10 text-[#1d428a] flex items-center justify-center mb-4">
                  {idx % 2 === 0 ? (
                    <Wrench className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#070f1a] text-slate-300 pt-14 pb-8 px-4 sm:px-8 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="font-serif text-lg font-extrabold text-white mb-2">
              {mergedData.business.name}
            </div>
            <p className="text-slate-400 leading-relaxed">
              {mergedData.business.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase text-white mb-3">
              Thiết Bị Phân Phối
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Máy pha cà phê BFC & La Marzocco</li>
              <li>Máy xay Fiorenzato, Anfim, Ditting</li>
              <li>Máy sinh tố Hamilton Beach USA</li>
              <li>Linh kiện máy pha chính hãng Ý</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase text-white mb-3">
              Dịch Vụ Kỹ Thuật
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Tư vấn & Thiết kế quầy bar 3D</li>
              <li>Bảo hành chính hãng 24 tháng</li>
              <li>Sửa chữa máy pha cà phê 24/7</li>
              <li>Đào tạo Barista chuyên nghiệp</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold uppercase text-white mb-3">
              Showroom & Trung Tâm Kỹ Thuật
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e02b20] shrink-0 mt-0.5" />
                <span>{mergedData.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e02b20] shrink-0" />
                <span>Hotline: {primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e02b20] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 text-center text-[11px] text-slate-500">
          © 2025 {mergedData.business.name}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
