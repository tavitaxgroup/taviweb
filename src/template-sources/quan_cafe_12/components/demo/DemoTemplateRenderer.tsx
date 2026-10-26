'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe12MockData } from '../../data/mockData'
import {
  Gift,
  Sparkles,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  ArrowRight,
  Star,
  Coffee,
  ShieldCheck,
} from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe12MockData, data)
  const [activeTab, setActiveTab] = useState<
    'Tất Cả' | 'Hộp Quà Trung Thu' | 'Trà & Cà Phê Organic' | 'Quà Doanh Nghiệp VIP'
  >('Tất Cả')
  const [quoteCount, setQuoteCount] = useState(0)

  const primaryPhone = mergedData.business.phone[0] || '0909 888 678'
  const primaryEmail = mergedData.business.email[0] || 'b2b@nbolivia.vn'

  const filteredItems =
    activeTab === 'Tất Cả'
      ? mergedData.collectionsSection.items
      : mergedData.collectionsSection.items.filter(
          (item) => item.collection === activeTab
        )

  return (
    <div className="min-h-screen bg-[#042331] text-white font-sans selection:bg-[#c59d52] selection:text-[#042331] overflow-x-hidden">
      {/* Top Luxury Bar */}
      <div className="bg-[#021620] border-b border-[#c59d52]/20 text-[11px] text-amber-100/80 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center gap-1.5 text-[#e2bf77] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              {mergedData.business.subBrand}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#c59d52]" />
              Hotline B2B: {primaryPhone}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#c59d52]" />
              {primaryEmail}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#052c3e]/95 backdrop-blur-md border-b border-[#c59d52]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Circular White NB Olivia Emblem + Brand Name */}
          <a href="#" className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-white p-1 shadow-lg flex items-center justify-center border-2 border-[#38bdf8]">
              <div className="w-full h-full rounded-full border border-[#0284c7] flex flex-col items-center justify-center leading-none">
                <span className="font-serif italic font-black text-sm text-[#0284c7]">
                  NB
                </span>
                <span className="font-serif italic text-[8px] text-[#0369a1]">
                  Olivia
                </span>
              </div>
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                {mergedData.business.name}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#e2bf77]">
                Maison Gourmet Cafe
              </div>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-wider uppercase text-slate-200">
            {mergedData.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#e2bf77] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Quote Cart Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuoteCount((c) => c + 1)}
              className="relative bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Giỏ Quà Báo Giá</span>
              <span className="bg-white text-[#7c3aed] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center">
                {quoteCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          HERO SECTION (EXACT MATCH TO CF012-quan_cafe_12.png)
          Deep Peacock Teal + Giant Glowing Golden Moon + Maison Gourmet Box
      ====================================================================== */}
      <section className="relative min-h-[640px] lg:min-h-[700px] bg-gradient-to-br from-[#042a3b] via-[#06384e] to-[#031d29] overflow-hidden flex items-center py-16 px-4 sm:px-8">
        {/* Giant Golden Full-Moon Circle on Right Side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full bg-gradient-to-br from-[#f3d794] via-[#c89d51] to-[#8a6421] opacity-90 shadow-[0_0_120px_rgba(212,175,55,0.35)]"
        />

        {/* Decorative Oriental Foliage Silhouette Arc */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/3 w-72 h-72 rounded-full border border-[#38bdf8]/20 opacity-40"
        />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Circular NB Olivia Logo + Bold Uppercase Headline + Purple Pill */}
          <div className="lg:col-span-6 space-y-6">
            {/* Large White Circular NB Olivia Badge */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-2 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full border-2 border-[#0284c7] flex flex-col items-center justify-center text-center">
                <Gift className="w-4 h-4 text-[#0284c7] -mb-1" />
                <span className="font-serif italic font-black text-2xl sm:text-3xl text-[#0284c7] leading-none">
                  NB
                </span>
                <span className="font-serif italic text-[11px] font-semibold text-[#0284c7]">
                  Olivia
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black uppercase leading-[1.15] tracking-tight text-white whitespace-pre-line drop-shadow">
              {mergedData.hero.headline}
            </h1>

            <p className="text-sm sm:text-base text-slate-200/95 leading-relaxed max-w-xl">
              {mergedData.hero.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_8px_25px_rgba(124,58,237,0.45)] transition-all"
              >
                {mergedData.hero.primaryCta}
              </a>
              <a
                href="#workflow"
                className="border border-[#e2bf77]/70 text-[#f3d794] hover:bg-[#e2bf77] hover:text-[#042331] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all"
              >
                {mergedData.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Column: Double-Door Golden Gift Box (MAISON GOURMET) + Emerald Gift Boxes + Pastries */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Tall Double-Door Golden Gift Box */}
            <div className="relative w-72 sm:w-80 aspect-[3/4] rounded-lg bg-gradient-to-b from-[#cbb06a] via-[#b89a52] to-[#9e7f38] border-4 border-[#334155] shadow-[0_25px_60px_rgba(0,0,0,0.55)] p-5 flex flex-col justify-between overflow-hidden">
              {/* Top Lid */}
              <div className="absolute inset-x-0 top-0 h-10 bg-[#273545] border-b border-[#e2bf77]/40" />
              {/* Center Double-Door Seam Line */}
              <div className="absolute inset-y-0 left-1/2 w-[2px] bg-[#1e293b]/60" />

              {/* Decorative Oriental Botanical Pattern */}
              <div className="mt-10 flex justify-between text-[#1e3a8a]/70 text-xs">
                <span>☁️ 🌿</span>
                <span>🌿 ☁️</span>
              </div>

              {/* Center Navy Medallion: MAISON GOURMET */}
              <div className="relative z-10 my-auto mx-auto w-32 h-32 rounded-full bg-[#0a2e46] border-4 border-[#e2bf77] shadow-xl flex flex-col items-center justify-center text-center p-3">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#f3d794]">
                  {mergedData.hero.boxBrandSubtitle}
                </span>
                <Sparkles className="w-4 h-4 text-[#f3d794] my-1" />
                <span className="font-serif text-sm font-bold tracking-widest text-white">
                  {mergedData.hero.boxBrandTitle}
                </span>
              </div>

              {/* Bottom Subtle Pattern */}
              <div className="flex justify-between text-[#1e3a8a]/60 text-xs">
                <span>🏮</span>
                <span>✨</span>
              </div>
            </div>

            {/* Bottom-Left Emerald Gift Box with Crimson Ribbon */}
            <div className="hidden sm:flex absolute -bottom-6 left-2 w-36 h-32 rounded bg-[#056847] border-2 border-[#044e35] shadow-2xl items-center justify-center">
              {/* Vertical & Horizontal Red Ribbon */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-5 bg-[#dc2626]" />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 bg-[#dc2626]" />
              {/* Ribbon Bow on Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white text-[10px] font-bold px-3 py-0.5 rounded-full shadow">
                🎀 VIP GIFT
              </div>
            </div>

            {/* Bottom-Right Golden Mooncake & Tea Plate */}
            <div className="hidden sm:block absolute -bottom-6 right-0 w-36 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-amber-100">
              <img
                src={mergedData.hero.pastryImage}
                alt="Bánh Trung Thu & Trà Thượng Hạng"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: 4 Bespoke B2B & Organic Cafe Pillars */}
      <section id="b2b-pillars" className="py-16 px-4 sm:px-8 bg-[#031c28] border-y border-[#c59d52]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mergedData.b2bPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#062d3f] border border-[#c59d52]/30 rounded-xl p-6 hover:border-[#e2bf77] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#e2bf77] bg-[#c59d52]/15 px-3 py-1 rounded-full mb-4">
                  <Award className="w-3.5 h-3.5" />
                  {pillar.metric}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Interactive Collection Showcase */}
      <section id="collections" className="py-20 px-4 sm:px-8 bg-[#042331]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e2bf77]">
              MAISON GOURMET COLLECTION
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-white">
              {mergedData.collectionsSection.heading}
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              {mergedData.collectionsSection.subtitle}
            </p>

            {/* Filter Tabs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {mergedData.collectionsSection.tabs.map((tab) => {
                const isActive = activeTab === tab
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#042331] shadow-lg'
                        : 'bg-[#062d3f] text-slate-300 border border-[#c59d52]/30 hover:border-[#e2bf77]'
                    }`}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3x2 Luxury Gift Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#062d3f] border border-[#c59d52]/30 hover:border-[#e2bf77] rounded-2xl overflow-hidden shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#031822]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#042331]/90 border border-[#e2bf77] text-[#f3d794] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#38bdf8] font-bold">
                      {item.collection}
                    </div>
                    <h3 className="mt-1 font-serif text-lg font-bold text-white group-hover:text-[#f3d794] transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                      <strong className="text-[#e2bf77]">Thành phần:</strong> {item.contents}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.minOrder}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-extrabold text-[#f3d794]">
                        {item.price}
                      </div>
                      {item.oldPrice && (
                        <div className="text-[11px] text-slate-400 line-through">
                          {item.oldPrice}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuoteCount((c) => c + 1)}
                      className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Chọn Mẫu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 3-Step Campaign Personalization + Volume Discount Table */}
      <section id="workflow" className="py-20 px-4 sm:px-8 bg-[#031924] border-t border-[#c59d52]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3 Steps */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e2bf77]">
              BESPOKE CORPORATE WORKFLOW
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Quy Trình Cá Nhân Hoá Quà Tặng Theo Chiến Dịch
            </h2>

            <div className="space-y-4 pt-2">
              {mergedData.campaignSteps.map((st) => (
                <div
                  key={st.step}
                  className="bg-[#062d3f] border border-[#c59d52]/25 rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#e2bf77] to-[#b8860b] text-[#042331] font-serif font-black text-base flex items-center justify-center shrink-0">
                    {st.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">
                      {st.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {st.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: B2B Volume Discount Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#07374d] to-[#042331] border-2 border-[#e2bf77]/60 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#f3d794] font-bold">
                  CHÍNH SÁCH B2B 2025
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Bảng Chiết Khấu Theo Số Lượng
                </h3>
              </div>
              <ShieldCheck className="w-8 h-8 text-[#f3d794]" />
            </div>

            <div className="space-y-3">
              {mergedData.volumeTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className="bg-[#031c28]/80 border border-[#c59d52]/30 rounded-xl p-3.5 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-white">{tier.quantity}</div>
                    <div className="text-[11px] text-slate-300">{tier.perks}</div>
                  </div>
                  <span className="bg-[#e2bf77]/20 border border-[#e2bf77] text-[#f3d794] text-xs font-extrabold px-3 py-1 rounded-full shrink-0">
                    {tier.discount}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#footer"
              className="mt-6 w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <Coffee className="w-4 h-4" />
              <span>Đặt Lịch Thưởng Trà & Xem Mẫu Hộp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: Enterprise Testimonials */}
      <section className="py-16 px-4 sm:px-8 bg-[#042331] border-t border-[#c59d52]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {mergedData.testimonials.map((tm) => (
            <div
              key={tm.id}
              className="bg-[#062d3f] border border-[#c59d52]/30 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-1 text-[#f3d794] mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif italic text-sm sm:text-base text-slate-100 leading-relaxed">
                {tm.quote}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs font-bold text-[#f3d794]">{tm.author}</div>
                <div className="text-[11px] text-slate-400">{tm.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-[#02141d] border-t border-[#c59d52]/30 pt-14 pb-8 px-4 sm:px-8 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="font-serif text-xl font-bold text-white mb-2">
              {mergedData.business.name}
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#e2bf77] mb-3">
              {mergedData.business.subBrand}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {mergedData.business.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#f3d794] mb-4">
              Dòng Sản Phẩm Chủ Đạo
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Hộp Quà Trung Thu Maison Gourmet</li>
              <li>Giỏ Quà Tết & Tri Ân Doanh Nghiệp</li>
              <li>Trà Shan Tuyết & Trà Hoa Organic</li>
              <li>Cà Phê Đặc Sản Rang Mộc Cầu Đất</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#f3d794] mb-4">
              Dịch Vụ Doanh Nghiệp B2B
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Thiết kế & Ép kim logo thương hiệu</li>
              <li>Gửi mẫu thử trà & bánh tận nơi</li>
              <li>Hợp đồng & Hóa đơn VAT đầy đủ</li>
              <li>Giao quà đa điểm toàn quốc</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#f3d794] mb-4">
              Thông Tin Liên Hệ
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e2bf77] shrink-0 mt-0.5" />
                <span>{mergedData.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e2bf77] shrink-0" />
                <span>{primaryPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e2bf77] shrink-0" />
                <span>{primaryEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span>© 2025 {mergedData.business.name} – Maison Gourmet. Bảo lưu mọi quyền.</span>
          <span>Premium Corporate Gifting & Organic Tea Cafe</span>
        </div>
      </footer>
    </div>
  )
}

export default DemoTemplateRenderer
