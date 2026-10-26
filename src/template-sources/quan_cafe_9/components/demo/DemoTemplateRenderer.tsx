'use client'

import React, { useState } from 'react'
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils'
import { quanCafe9MockData } from '../../data/mockData'
import { Menu, X, Phone, Mail, MapPin, Coffee, Sparkles } from 'lucide-react'

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const mergedData = adaptClonedTemplateData(quanCafe9MockData, data)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTastingDrawer, setShowTastingDrawer] = useState(false)

  const primaryPhone = mergedData.business.phone[0] || '0313728397'
  const primaryEmail = mergedData.business.email[0] || 'info@themona.global'

  const renderBrandCornerBadge = () => (
    <div className="absolute top-0 left-0 z-30 bg-[#3a0d0d] text-white px-5 py-3.5 flex items-center gap-3 shadow-md">
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="Mở menu"
        className="text-[#d4a359] hover:text-white transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>
      <span className="font-serif text-sm sm:text-base font-bold tracking-[0.14em] uppercase">
        {mergedData.business.brandBadge}
      </span>
    </div>
  )

  const renderCenterDots = (activeIdx: number) => (
    <div
      aria-hidden="true"
      className="hidden lg:flex flex-col items-center justify-center gap-1.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      {[0, 1, 2].map((dotIdx) => (
        <span
          key={dotIdx}
          className={`w-2 h-2 rounded-full border border-white/80 transition-all ${
            dotIdx === activeIdx ? 'bg-white scale-110' : 'bg-transparent opacity-70'
          }`}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0d0907] text-white font-sans selection:bg-[#d4a359] selection:text-[#0d0907] overflow-x-hidden">
      {/* Slide-out Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex">
          <div className="w-80 bg-[#1a0909] border-r border-[#d4a359]/30 p-8 flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-serif text-lg font-bold tracking-[0.16em] text-[#d4a359]">
                  {mergedData.business.brandBadge}
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Đóng menu"
                  className="text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="mt-8 space-y-4 font-serif text-sm tracking-widest uppercase">
                <a
                  href="#chapter-1"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-[#d4a359] hover:text-white transition-colors"
                >
                  01. Câu Chuyện Tri Ân
                </a>
                <a
                  href="#chapter-2"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-white/85 hover:text-[#d4a359] transition-colors"
                >
                  02. Văn Hóa Quà Tết & Trà Xuân
                </a>
                <a
                  href="#chapter-3"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-white/85 hover:text-[#d4a359] transition-colors"
                >
                  03. Nghệ Thuật Thưởng Trà & Bánh
                </a>
                <a
                  href="#tasting-menu"
                  onClick={() => {
                    setMenuOpen(false)
                    setShowTastingDrawer(true)
                  }}
                  className="block py-2 text-white/85 hover:text-[#d4a359] transition-colors"
                >
                  04. Thực Đơn Đặc Sản Mùa Xuân
                </a>
              </nav>
            </div>

            <div className="space-y-2 text-xs text-white/70 border-t border-white/10 pt-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a359] shrink-0 mt-0.5" />
                <span>{mergedData.business.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4a359] shrink-0" />
                <span>{primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4a359] shrink-0" />
                <span>{primaryEmail}</span>
              </div>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* =====================================================================
          CHAPTER 1: 50/50 SPLIT (DEEP BURGUNDY LEFT / FRAMED GOLD ORNAMENT RIGHT)
      ====================================================================== */}
      <section
        id="chapter-1"
        className="relative min-h-[680px] lg:min-h-[760px] grid grid-cols-1 lg:grid-cols-12 border-b border-black/40"
      >
        {renderBrandCornerBadge()}
        {renderCenterDots(0)}

        {/* Left 50%: Deep Burgundy Editorial Block */}
        <div className="lg:col-span-6 bg-[#7c1d1d] relative flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-24">
          {/* Subtle Floral / Oriental Texture Overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
          />

          <div className="relative z-10 max-w-lg">
            {/* Framed Monogram Heading: [T]HE MONA */}
            <div className="flex items-end mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#d4a359]/80 flex items-center justify-center mr-1">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a359]">
                  {mergedData.chapterOne.monogramLetter}
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.08em] uppercase text-white pb-1.5 -ml-3 bg-[#7c1d1d] px-2">
                {mergedData.chapterOne.titleSuffix}
              </h1>
            </div>

            {/* Bold Italic Lead */}
            <p className="font-serif italic font-semibold text-sm sm:text-base leading-relaxed text-white mb-5">
              {mergedData.chapterOne.leadItalic}
            </p>

            {/* Secondary Muted Paragraph */}
            <p className="text-xs sm:text-sm leading-relaxed text-rose-100/80 mb-8">
              {mergedData.chapterOne.bodyText}
            </p>

            {/* Outlined Gold Button */}
            <a
              href="#chapter-2"
              className="inline-block border border-[#d4a359] text-white hover:bg-[#d4a359] hover:text-[#2a0808] text-[10px] font-bold tracking-[0.2em] uppercase px-7 py-2.5 transition-colors"
            >
              {mergedData.chapterOne.ctaText}
            </a>
          </div>

          {/* Bottom-left subtle credit */}
          <div className="absolute bottom-4 left-6 text-[10px] text-rose-200/70">
            © Thiết kế website và lập trình bởi <strong className="text-white">Mona Media</strong>
          </div>
        </div>

        {/* Right 50%: Crimson Backdrop + Thick White Rectangular Frame */}
        <div className="lg:col-span-6 relative bg-[#5e0f0f] flex items-center justify-center p-8 sm:p-14 lg:p-16 overflow-hidden">
          <img
            src={mergedData.chapterOne.backdropImage}
            alt="Spring Background"
            className="absolute inset-0 w-full h-full object-cover opacity-35 blur-[2px] scale-105"
          />
          <div className="relative z-10 w-full max-w-lg aspect-square border-[12px] sm:border-[16px] border-white shadow-2xl overflow-hidden bg-[#8a1414]">
            <img
              src={mergedData.chapterOne.framedImage}
              alt="Khánh Vàng & Trà Hoa Xuân"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 2: 50/50 SPLIT (FRAMED TEA TABLE LEFT / PITCH BLACK RIGHT)
      ====================================================================== */}
      <section
        id="chapter-2"
        className="relative min-h-[680px] lg:min-h-[760px] grid grid-cols-1 lg:grid-cols-12 border-b border-white/10"
      >
        {renderBrandCornerBadge()}
        {renderCenterDots(1)}

        {/* Left 50%: Wooden Tea Table Flatlay with Thick White Frame */}
        <div className="lg:col-span-6 relative bg-[#2b170e] flex items-center justify-center p-8 sm:p-14 lg:p-16 overflow-hidden">
          <img
            src={mergedData.chapterTwo.framedImage}
            alt="Bàn Trà Ngày Xuân"
            className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[1px] scale-105"
          />
          <div className="relative z-10 w-full max-w-lg aspect-square border-[12px] sm:border-[16px] border-white shadow-2xl overflow-hidden">
            <img
              src={mergedData.chapterTwo.framedImage}
              alt="Thưởng Trà & Bánh Chưng Ngày Tết"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute bottom-4 left-6 z-20 text-[10px] text-white/75">
            © Thiết kế website và lập trình bởi <strong className="text-white">Mona Media</strong>
          </div>
        </div>

        {/* Right 50%: Pitch Black / Deep Espresso Editorial Block */}
        <div className="lg:col-span-6 bg-[#0d0907] flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-20">
          <div className="max-w-lg">
            {/* Framed Monogram Heading: [Q]UÀ TẾT */}
            <div className="flex items-end mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border border-[#d4a359]/70 flex items-center justify-center mr-1">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#d4a359]">
                  {mergedData.chapterTwo.monogramLetter}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.08em] uppercase text-white pb-1.5 -ml-3 bg-[#0d0907] px-2">
                {mergedData.chapterTwo.titleSuffix}
              </h2>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-stone-300/85 mb-6">
              {mergedData.chapterTwo.leadText}
            </p>

            <p className="font-serif text-xs sm:text-sm font-bold leading-relaxed text-white">
              {mergedData.chapterTwo.highlightBoldText}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 3: 50/50 SPLIT (CAST-IRON TEAPOT LEFT / ALABASTER WHITE RIGHT)
      ====================================================================== */}
      <section
        id="chapter-3"
        className="relative min-h-[680px] lg:min-h-[760px] grid grid-cols-1 lg:grid-cols-12"
      >
        {renderBrandCornerBadge()}
        {renderCenterDots(2)}

        {/* Left 50%: Cast-Iron Teapot & Pink Magnolia Blossom Flatlay with White Frame */}
        <div className="lg:col-span-6 relative bg-[#161618] flex items-center justify-center p-8 sm:p-14 lg:p-16 overflow-hidden">
          <img
            src={mergedData.chapterThree.framedImage}
            alt="Ấm Trà Gang & Hoa Mộc Lan"
            className="absolute inset-0 w-full h-full object-cover opacity-35 blur-[1px] scale-105"
          />
          <div className="relative z-10 w-full max-w-lg aspect-square border-[12px] sm:border-[16px] border-white shadow-2xl overflow-hidden">
            <img
              src={mergedData.chapterThree.framedImage}
              alt="Ấm Trà Đạo & Hoa Xuân"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute bottom-4 left-6 z-20 text-[10px] text-white/75">
            © Thiết kế website và lập trình bởi <strong className="text-white">Mona Media</strong>
          </div>
        </div>

        {/* Right 50%: Alabaster Off-White Editorial Pillar List + Right Vertical Line */}
        <div className="lg:col-span-6 bg-[#f8f7f4] text-[#221e1d] relative flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-20">
          {/* Right Vertical Line Ending in a Circle */}
          <div
            aria-hidden="true"
            className="hidden sm:flex flex-col items-center absolute right-8 lg:right-12 top-24 bottom-16"
          >
            <div className="w-[1.5px] flex-1 bg-[#221e1d]/70" />
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#221e1d] bg-[#f8f7f4]" />
          </div>

          <div className="max-w-lg pr-6 space-y-7">
            {mergedData.chapterThree.pillars.map((pillar) => (
              <div key={pillar.id}>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#1c1917] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-stone-500">
                  {pillar.description}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowTastingDrawer((prev) => !prev)}
                className="border border-[#c68b3e] text-[#221e1d] hover:bg-[#c68b3e] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase px-7 py-2.5 transition-colors"
              >
                {mergedData.chapterThree.ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Specialty Coffee & Spring Tea Tasting Showcase (Expandable / Footer Section) */}
      <section
        id="tasting-menu"
        className={`bg-[#140b09] border-t border-[#d4a359]/25 transition-all duration-500 ${
          showTastingDrawer ? 'py-16 opacity-100' : 'py-12 opacity-95'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#d4a359] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                <Coffee className="w-3.5 h-3.5" />
                <span>Bộ Sưu Tập Thưởng Thức Đầu Xuân</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Thực Đơn Cà Phê Đặc Sản & Trà Hoa Xuân
              </h2>
            </div>
            <div className="text-xs text-stone-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4a359]" />
              <span>Đặt bàn & Hộp quà: {primaryPhone}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mergedData.tastingCollection.map((item) => (
              <div
                key={item.id}
                className="group bg-[#1f120f] border border-[#d4a359]/20 hover:border-[#d4a359]/70 transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#d4a359]">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-serif text-base font-bold text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-stone-400 leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="font-serif text-sm font-bold text-[#d4a359]">
                      {item.price}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-white/70 group-hover:text-white">
                      Thưởng thức →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemoTemplateRenderer
