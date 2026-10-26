'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Trophy,
  Zap,
  PhoneCall,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Shirt,
  Flame,
  Sparkles,
  Layers,
  Activity,
  Award,
  ShoppingBag,
  Menu,
  X,
  Users
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import { mockData as defaultMockData } from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, any>;
  templateId?: string;
}

export function DemoTemplateRenderer({ data, templateId = 'phong_gym_16' }: DemoTemplateRendererProps) {
  const content = adaptClonedTemplateData(defaultMockData, data, templateId);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Jersey Configurator State
  const [teamName, setTeamName] = useState('FC SAIGON UNITED');
  const [playerName, setPlayerName] = useState('HOÀNG ĐỨC');
  const [playerNumber, setPlayerNumber] = useState('14');
  const [selectedColorId, setSelectedColorId] = useState('white-teal');
  const [selectedFabricId, setSelectedFabricId] = useState('jacquard-elite');
  const [selectedPrintId, setSelectedPrintId] = useState('korean-decal');
  const [quantity, setQuantity] = useState(14);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Shop Filter State
  const [activeCategory, setActiveCategory] = useState('all');

  const selectedColor =
    content.jerseyConfigurator.colorSwatches.find((c: any) => c.id === selectedColorId) ||
    content.jerseyConfigurator.colorSwatches[0];
  const selectedFabric =
    content.jerseyConfigurator.fabricTiers.find((f: any) => f.id === selectedFabricId) ||
    content.jerseyConfigurator.fabricTiers[0];
  const selectedPrint =
    content.jerseyConfigurator.printOptions.find((p: any) => p.id === selectedPrintId) ||
    content.jerseyConfigurator.printOptions[0];

  const unitPrice = (selectedFabric?.pricePerSet || 235000) + (selectedPrint?.extraPrice || 0);
  const discountRate = quantity >= 20 ? 0.12 : quantity >= 10 ? 0.07 : 0;
  const totalEstimated = Math.round(unitPrice * quantity * (1 - discountRate));

  const filteredProducts =
    activeCategory === 'all'
      ? content.products
      : content.products.filter((item: any) => item.category === activeCategory);

  return (
    <div id="top" className="min-h-screen bg-[#0c0d10] text-zinc-100 font-sans selection:bg-[#7c3aed] selection:text-white">
      {/* Top Stadium Utility Bar */}
      <div className="bg-[#111111] border-b border-amber-500/20 text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#fbbf24] tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 fill-current" />
              {content.business.domain} — HỆ THỐNG THỂ LỰC & PHỤ KIỆN BÓNG ĐÁ TPHCM
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#0d9488]" />
              {content.business.address}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#fbbf24]" />
              {content.business.hours}
            </span>
            <a
              href={`tel:${content.business.phone[0]}`}
              className="inline-flex items-center gap-1.5 font-bold text-white bg-[#7c3aed] px-3 py-1 rounded-full hover:bg-[#6d28d9] transition"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {content.business.phone[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706] flex items-center justify-center text-[#111111] font-black text-xl shadow-lg shadow-amber-500/20">
              PS
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-white leading-none">
                PRO<span className="text-[#fbbf24]">SOCCER</span>.VN
              </span>
              <span className="block text-[10px] font-bold tracking-[0.22em] text-[#2dd4bf] uppercase mt-1">
                FOOTBALL GYM & CUSTOM KITS
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {content.navigation.map((item: any, idx: number) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-extrabold tracking-[0.14em] uppercase text-zinc-200 hover:text-[#fbbf24] transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#configurator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7e22ce] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-purple-600/30 transition"
            >
              <Shirt className="w-4 h-4" />
              Đặt In Áo Đấu CLB
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-zinc-800 text-amber-400"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#14151a] border-t border-zinc-800 px-4 py-4 space-y-2">
            {content.navigation.map((item: any, idx: number) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-bold text-zinc-100 hover:bg-amber-500/10 hover:text-[#fbbf24]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION — Recreating GYM016 Golden Amber Stadium Floodlight Poster */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fbbf24] via-[#f59e0b] to-[#d97706] text-[#111111]">
        {/* Stadium Floodlight & Silhouette Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url(${content.hero.backgroundStadium})` }}
        />
        {/* Radial Floodlight Glows */}
        <div className="absolute -top-24 left-1/3 w-[520px] h-[520px] rounded-full bg-yellow-200/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-amber-700/30 blur-3xl pointer-events-none" />

        {/* Subtle Soccer Pitch Tactical Lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="w-full h-full border-[12px] border-black/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Massive Stacked Black Uppercase Poster Typography + Purple Pill CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="text-sm sm:text-base font-black tracking-[0.42em] uppercase text-[#111111] border-b-2 border-[#111111] pb-1">
                  {content.hero.eyebrow}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#111111] text-[#fbbf24] text-xs font-extrabold uppercase tracking-wider">
                  S&C + CUSTOM KIT STUDIO
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-[68px] font-black uppercase tracking-tight leading-[0.98] text-[#111111] drop-shadow-sm">
                {content.hero.headlineLines.map((line: string, index: number) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-base sm:text-xl font-bold text-[#18181b]/90 max-w-2xl leading-relaxed">
                {content.hero.subheadline}
              </p>

              {/* Signature Electric Purple Rounded-Full Pill CTA (matching GYM016 bottom-left pill) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#configurator"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#6d28d9] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-[0_14px_30px_-6px_rgba(124,58,237,0.65)] hover:scale-[1.02] active:scale-[0.99] transition"
                >
                  <span>{content.hero.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#programs"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#111111] text-[#fbbf24] font-black text-sm uppercase tracking-wider hover:bg-zinc-900 transition shadow-lg"
                >
                  <Activity className="w-4 h-4 text-[#2dd4bf]" />
                  <span>{content.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* 3 High-Contrast Achievement Pills */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {content.hero.badges.map((b: any, i: number) => (
                  <div
                    key={i}
                    className="bg-[#111111]/90 backdrop-blur-sm text-white rounded-2xl p-3.5 border border-black/20 shadow-md"
                  >
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#fbbf24]">
                      {b.label}
                    </div>
                    <div className="text-xs text-zinc-300 mt-1 font-medium">{b.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: White & Teal V-Neck Football Jersey + Match Football Composition */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Circular Stadium Halo Behind Jersey */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-3 rounded-[2.5rem] bg-[#111111]/15 blur-xl" />

                {/* Jersey Display Card */}
                <div className="relative bg-white rounded-[2rem] p-5 sm:p-6 shadow-2xl border-4 border-[#111111]">
                  {/* Teal V-Neck Collar & Sleeve Accent Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#0d9488]/20">
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#0d9488]" />
                      <span className="text-xs font-black tracking-widest uppercase text-[#0f766e]">
                        AURA EDITION • V-NECK PRO KIT
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#0d9488] text-white text-[11px] font-black uppercase">
                      PROSOCCER
                    </span>
                  </div>

                  {/* Main Jersey Photo with Teal & Geometric Side Stripes */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/4.3] border border-slate-200">
                    <img
                      src={content.hero.jerseyImage}
                      alt="Áo đấu bóng đá ProSoccer Aura trắng phối xanh ngọc"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />

                    {/* Top Left Crest Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl border border-[#0d9488] shadow">
                      <span className="block text-[10px] font-black uppercase text-[#0d9488]">
                        CHẤT LIỆU JACQUARD
                      </span>
                      <span className="block text-xs font-black text-slate-900">
                        Thoáng Khí 4 Chiều
                      </span>
                    </div>

                    {/* Jersey Front Chest Sponsor Simulation */}
                    <div className="absolute bottom-4 left-4 right-24 text-white">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-[#0d9488] text-[10px] font-black uppercase tracking-widest mb-1">
                        IN ẤN THEO YÊU CẦU
                      </span>
                      <p className="text-lg font-black tracking-tight leading-tight">
                        ÁO ĐẤU AURA TRẮNG XANH NGỌC
                      </p>
                      <p className="text-xs text-teal-200 font-semibold">
                        Miễn phí in Tên + Số + Logo Đội từ 10 bộ
                      </p>
                    </div>
                  </div>

                  {/* Overlapping Classic Match Football in Bottom-Right Foreground (exact visual cue from GYM016) */}
                  <div className="mt-4 flex items-center justify-between gap-4 bg-[#f8fafc] rounded-2xl p-3 border border-slate-200">
                    <div className="flex items-center gap-3">
                      <img
                        src={content.hero.ballImage}
                        alt="Bóng thi đấu ProSoccer FIFA Quality"
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#111111] shadow-md shrink-0"
                      />
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#7c3aed]">
                          QUÀ TẶNG ĐẶT ÁO ĐỘI
                        </span>
                        <h3 className="text-sm font-black text-slate-900">
                          Tặng Bóng Thi Đấu Số 5 Chuẩn FIFA
                        </h3>
                        <p className="text-xs text-slate-600">
                          Áp dụng cho đơn đặt áo CLB từ 20 bộ trở lên
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CUSTOM TEAM JERSEY & PRINTING CONFIGURATOR */}
      <section id="configurator" className="py-16 sm:py-24 bg-[#111318] border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/40 text-[#c4b5fd] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                CUSTOM KIT STUDIO 3D
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {content.jerseyConfigurator.title}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              {content.jerseyConfigurator.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Jersey Preview Panel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#1a1d24] to-[#12141a] rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#fbbf24]">
                  MÔ PHỎNG LƯNG ÁO CẦU THỦ
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0d9488]/20 text-[#2dd4bf] text-xs font-bold">
                  {selectedColor.name}
                </span>
              </div>

              {/* Stylized Jersey Back Graphic */}
              <div className="relative mx-auto max-w-[300px] aspect-[3/3.6] rounded-3xl p-6 flex flex-col items-center justify-between shadow-2xl border-4 transition-all duration-300"
                style={{
                  backgroundColor: selectedColor.primary,
                  borderColor: selectedColor.accent,
                  color: selectedColor.text
                }}
              >
                {/* V-Neck Collar Trim */}
                <div
                  className="w-24 h-5 rounded-b-full border-b-4 flex items-center justify-center text-[9px] font-black tracking-widest uppercase"
                  style={{ borderColor: selectedColor.accent }}
                >
                  PROSOCCER
                </div>

                {/* Team Name Arc & Player Name + Number */}
                <div className="text-center my-auto space-y-1">
                  <div
                    className="text-xs font-black tracking-[0.2em] uppercase opacity-80"
                    style={{ color: selectedColor.accent }}
                  >
                    {teamName || 'FC PROSOCCER'}
                  </div>
                  <div className="text-xl sm:text-2xl font-black tracking-wider uppercase">
                    {playerName || 'CẦU THỦ'}
                  </div>
                  <div
                    className="text-7xl sm:text-8xl font-black leading-none tracking-tighter py-2"
                    style={{ color: selectedColor.accent }}
                  >
                    {playerNumber || '10'}
                  </div>
                </div>

                {/* Bottom Hem Authentic Tag */}
                <div className="w-full flex items-center justify-between pt-3 border-t border-current/15 text-[10px] font-extrabold uppercase">
                  <span>{selectedFabric.name.split(' ')[0]} DRY-FIT</span>
                  <span>SIZE: L (CHUẨN CHÂU Á)</span>
                </div>
              </div>

              {/* Summary Price Strip */}
              <div className="mt-6 bg-[#0c0d10] rounded-2xl p-4 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Đơn giá ({selectedFabric.name}):</span>
                  <span className="font-bold text-white">{unitPrice.toLocaleString('vi-VN')}₫ / bộ</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Số lượng đặt đội ({quantity} bộ):</span>
                  <span className="font-bold text-[#2dd4bf]">
                    {discountRate > 0 ? `Giảm thêm ${Math.round(discountRate * 100)}%` : 'Tặng in Tên + Số'}
                  </span>
                </div>
                <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-sm font-extrabold uppercase text-zinc-200">Tạm tính cả đội:</span>
                  <span className="text-2xl font-black text-[#fbbf24]">
                    {totalEstimated.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Configuration Controls */}
            <div className="lg:col-span-7 bg-[#171920] rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Tên CLB / Đội bóng
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1015] border border-zinc-700 text-white font-bold text-sm focus:border-[#fbbf24] focus:outline-none"
                    placeholder="VD: FC SAIGON"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Tên in sau lưng
                  </label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1015] border border-zinc-700 text-white font-bold text-sm focus:border-[#fbbf24] focus:outline-none"
                    placeholder="VD: QUANG HẢI"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Số áo thi đấu
                  </label>
                  <input
                    type="text"
                    maxLength={2}
                    value={playerNumber}
                    onChange={(e) => setPlayerNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1015] border border-zinc-700 text-[#fbbf24] font-black text-sm focus:border-[#fbbf24] focus:outline-none"
                    placeholder="10"
                  />
                </div>
              </div>

              {/* Color Swatches */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2.5">
                  1. Chọn Phối Màu Áo Đấu Chủ Đạo
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {content.jerseyConfigurator.colorSwatches.map((swatch: any) => (
                    <button
                      key={swatch.id}
                      type="button"
                      onClick={() => setSelectedColorId(swatch.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition ${
                        selectedColorId === swatch.id
                          ? 'border-[#fbbf24] bg-amber-500/10'
                          : 'border-zinc-800 bg-[#0e1015] hover:border-zinc-700'
                      }`}
                    >
                      <span
                        className="w-7 h-7 rounded-full border-2 shrink-0"
                        style={{ backgroundColor: swatch.primary, borderColor: swatch.accent }}
                      />
                      <span className="text-xs font-bold text-white">{swatch.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric Tiers */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2.5">
                  2. Chọn Dòng Vải Thể Thao Chuyên Dụng
                </label>
                <div className="space-y-2.5">
                  {content.jerseyConfigurator.fabricTiers.map((fabric: any) => (
                    <button
                      key={fabric.id}
                      type="button"
                      onClick={() => setSelectedFabricId(fabric.id)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between gap-4 transition ${
                        selectedFabricId === fabric.id
                          ? 'border-[#0d9488] bg-[#0d9488]/15'
                          : 'border-zinc-800 bg-[#0e1015] hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-black text-white">{fabric.name}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{fabric.desc}</div>
                      </div>
                      <div className="text-sm font-black text-[#fbbf24] shrink-0">
                        {fabric.pricePerSet.toLocaleString('vi-VN')}₫/bộ
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Print Technology & Team Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    3. Công Nghệ In Tên Số
                  </label>
                  <select
                    value={selectedPrintId}
                    onChange={(e) => setSelectedPrintId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e1015] border border-zinc-700 text-white text-xs font-bold focus:border-[#fbbf24] focus:outline-none"
                  >
                    {content.jerseyConfigurator.printOptions.map((opt: any) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    4. Số Lượng Đặt Cả Đội: <span className="text-[#fbbf24]">{quantity} bộ</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-[#7c3aed] mt-2"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setOrderSubmitted(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7e22ce] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-purple-600/30 transition"
                >
                  NHẬN FILE DEMO 3D & BÁO GIÁ QUA ZALO
                </button>
                {orderSubmitted && (
                  <span className="text-xs font-bold text-[#2dd4bf] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã lưu cấu hình {quantity} bộ cho đội {teamName}!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTBALL TRAINING EQUIPMENT & KIT STORE */}
      <section id="products" className="py-16 sm:py-24 bg-[#0c0d10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#fbbf24]">
                PROSOCCER EQUIPMENT & GEAR
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Dụng Cụ Tập Thể Lực & Trang Phục Thi Đấu
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {content.productCategories.map((cat: any) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition ${
                    activeCategory === cat.id
                      ? 'bg-[#fbbf24] text-[#111111] shadow-md'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: any) => (
              <div
                key={product.id}
                className="group bg-[#15171e] rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-[#fbbf24]/70 transition flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#111111]/90 text-[#fbbf24] text-[10px] font-black uppercase tracking-wider">
                    {product.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-[#0d9488] text-white text-[10px] font-bold uppercase">
                    {product.categoryLabel}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-[#fbbf24] transition line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2">{product.specs}</p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <div>
                      <span className="block text-lg font-black text-[#fbbf24]">{product.price}</span>
                      <span className="text-xs text-zinc-500 line-through">{product.oldPrice}</span>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-extrabold uppercase transition"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Đặt Mua
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTBALL STRENGTH & CONDITIONING ACADEMY */}
      <section id="programs" className="py-16 sm:py-24 bg-[#12141b] border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#fbbf24] text-xs font-extrabold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" />
              FOOTBALL STRENGTH & CONDITIONING LAB
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Huấn Luyện Thể Lực Bóng Đá Chuyên Biệt
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Giáo trình chuẩn khoa học thể thao giúp cầu thủ phong trào và bán chuyên bứt tốc nhanh hơn, tranh chấp mạnh hơn và thi đấu trọn vẹn 90 phút.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {content.conditioningPrograms.map((prog: any) => (
              <div
                key={prog.code}
                className="bg-[#181b24] rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#0d9488] transition flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181b24] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#fbbf24] text-[#111111] text-xs font-black uppercase">
                    {prog.code}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-[#2dd4bf] uppercase tracking-wider">
                      {prog.duration}
                    </div>
                    <h3 className="text-xl font-black text-white leading-snug">{prog.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{prog.desc}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-800">
                    <div className="bg-[#101218] rounded-xl p-3 border border-zinc-800/80">
                      <span className="block text-[10px] font-extrabold uppercase text-zinc-400">
                        CAM KẾT CHỈ SỐ ĐẦU RA:
                      </span>
                      <span className="text-xs font-black text-[#fbbf24]">{prog.metrics}</span>
                    </div>
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 hover:bg-[#7c3aed] text-white text-xs font-black uppercase tracking-wider transition"
                    >
                      <span>Đăng Ký Kiểm Tra Thể Lực</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PRINTING & TRAINING PACKAGES */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#0c0d10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2dd4bf]">
              BẢNG GIÁ ƯU ĐÃI ĐỘI BÓNG & DOANH NGHIỆP
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black uppercase text-white">
              Combo Đặt Áo Đấu & Huấn Luyện Đội Bóng
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {content.teamPackages.map((pkg: any, idx: number) => (
              <div
                key={idx}
                className={`rounded-3xl p-7 border flex flex-col justify-between ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#1e1b2e] to-[#14131d] border-[#7c3aed] shadow-2xl shadow-purple-900/20'
                    : 'bg-[#15171e] border-zinc-800'
                }`}
              >
                <div>
                  {pkg.highlight && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#fbbf24] text-[#111111] text-[10px] font-black uppercase tracking-wider mb-4">
                      ĐƯỢC CÁC CLB CHỌN NHIỀU NHẤT
                    </span>
                  )}
                  <h3 className="text-lg font-black uppercase text-white">{pkg.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-[#fbbf24]">{pkg.price}</span>
                    <span className="text-xs text-zinc-400 font-semibold">{pkg.unit}</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {pkg.perks.map((perk: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`mt-8 w-full py-3.5 rounded-full text-center text-xs font-black uppercase tracking-wider transition ${
                    pkg.highlight
                      ? 'bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-lg'
                      : 'bg-[#fbbf24] hover:bg-[#f59e0b] text-[#111111]'
                  }`}
                >
                  Nhận Báo Giá Đội Bóng
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & QUICK TEAM CONSULTATION */}
      <footer id="contact" className="bg-[#090a0d] border-t border-amber-500/30 pt-16 pb-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#fbbf24] flex items-center justify-center text-[#111111] font-black text-lg">
                  PS
                </div>
                <span className="text-2xl font-black text-white">
                  PRO<span className="text-[#fbbf24]">SOCCER</span>.VN
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Hệ thống huấn luyện thể lực bóng đá chuyên nghiệp, cung cấp dụng cụ tập luyện tốc độ - sức bền và xưởng in ấn quần áo bóng đá thiết kế riêng uy tín hàng đầu tại TP.HCM.
              </p>
              <div className="space-y-2 text-sm text-zinc-300 pt-2">
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#fbbf24] shrink-0" />
                  <span>{content.business.address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#2dd4bf] shrink-0" />
                  <span>Hotline / Zalo Đặt Áo: {content.business.phone.join(' - ')}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#14161d] rounded-3xl p-6 sm:p-8 border border-zinc-800">
              <h3 className="text-lg font-black uppercase text-white mb-2">
                Đăng Ký Tư Vấn In Áo Đấu Hoặc Lịch Tập Thể Lực CLB
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Chuyên viên thiết kế 3D và HLV Thể lực ProSoccer sẽ liên hệ gửi mẫu trong vòng 15 phút.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                <input
                  type="text"
                  placeholder="Họ tên Đội trưởng / Quản lý"
                  className="px-4 py-3 rounded-xl bg-[#0c0d10] border border-zinc-700 text-sm text-white focus:border-[#fbbf24] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại Zalo"
                  className="px-4 py-3 rounded-xl bg-[#0c0d10] border border-zinc-700 text-sm text-white focus:border-[#fbbf24] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black text-xs uppercase tracking-wider transition"
                >
                  Gửi Yêu Cầu Ngay
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>{content.business.copyright}</p>
            <p className="text-zinc-400 font-semibold">
              {content.business.domain} • S&C Football Performance & Custom Kit Factory
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
