'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  ArrowRight,
  Star,
  Heart,
  CheckCircle2,
  Footprints,
  Sparkles,
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Flame
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import { mockData as defaultMockData } from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, any>;
  templateId?: string;
}

export function DemoTemplateRenderer({ data, templateId = 'phong_gym_17' }: DemoTemplateRendererProps) {
  const content = adaptClonedTemplateData(defaultMockData, data, templateId);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGoalId, setSelectedGoalId] = useState('marathon');
  const [selectedArch, setSelectedArch] = useState<'normal' | 'flat' | 'high'>('normal');
  const [cartCount, setCartCount] = useState(2);

  const activeGoal =
    content.shoeFinder.goals.find((g: any) => g.id === selectedGoalId) ||
    content.shoeFinder.goals[0];

  return (
    <div id="top" className="min-h-screen bg-[#f4f3ef] text-[#18181b] font-sans selection:bg-[#7b12d1] selection:text-white">
      {/* Top Dark Charcoal Announcement Bar (Matching GYM017 Storeframe Top Bar) */}
      <div className="bg-[#1e2328] text-zinc-200 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <p className="font-medium tracking-wide text-zinc-100">
            {content.announcementBar.text}
          </p>
          <div className="hidden md:flex items-center gap-5 font-bold tracking-wider uppercase text-[11px] text-zinc-300">
            {content.announcementBar.links.map((link: string, idx: number) => (
              <a key={idx} href="#lookbook" className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Minimalist Sneaker Store Header (Matching GIAYOI SNEAKER STORE Header) */}
      <header className="sticky top-0 z-50 bg-[#eceae4]/95 backdrop-blur-md border-b border-stone-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left Logo: GIAYOI SNEAKER STORE */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#18181b] leading-none">
                  GIAY<span className="text-[#0284c7]">OI</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#7b12d1] text-white text-[9px] font-black uppercase tracking-widest">
                  FIT
                </span>
              </div>
              <span className="text-[9px] font-extrabold tracking-[0.26em] uppercase text-stone-500 mt-0.5">
                SNEAKER & FITNESS STORE
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {content.navigation.map((item: any, idx: number) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-wider text-stone-700 hover:text-[#7b12d1] transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Store Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#shoe-finder"
              className="p-2.5 rounded-full hover:bg-stone-200/80 text-stone-800 transition"
              aria-label="Tìm kiếm giày"
            >
              <Search className="w-5 h-5" />
            </a>
            <a
              href="#run-club"
              className="hidden sm:inline-flex p-2.5 rounded-full hover:bg-stone-200/80 text-stone-800 transition"
              aria-label="Tài khoản hội viên"
            >
              <User className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setCartCount((c) => c + 1)}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#18181b] text-white text-xs font-bold hover:bg-[#7b12d1] transition"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{cartCount}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-stone-200 text-stone-900"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f4f3ef] border-t border-stone-300 px-4 py-4 space-y-2">
            {content.navigation.map((item: any, idx: number) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 rounded-lg text-xs font-extrabold uppercase text-stone-800 hover:bg-stone-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION — Recreating GYM017 Stone-Gray Sneaker Showcase + Purple/Pink Brand Ribbons */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e4e2dc] via-[#eceae4] to-[#f4f3ef] border-b border-stone-300/80">
        {/* Top Highlight Ribbons from GYM017 Presentation Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span className="px-4 py-1.5 rounded-xl bg-[#7b12d1] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
              {content.hero.purpleRibbon}
            </span>
            <span className="px-4 py-1.5 rounded-xl bg-[#ff1493] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
              {content.hero.pinkRibbon}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Impact White & Ice-Blue Sneaker Pair Showcase */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-[2rem] overflow-hidden bg-[#dcd9d0] p-6 sm:p-10 shadow-xl border border-white/60">
                {/* Decorative Watermark Text */}
                <div className="absolute top-4 left-6 text-6xl sm:text-8xl font-black tracking-tighter text-stone-900/[0.05] select-none pointer-events-none uppercase">
                  GIAYOI RUN
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-8">
                    <img
                      src={content.hero.sneakerImage}
                      alt="Giày chạy bộ và tập thể lực GiayOi mùa mới"
                      className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition duration-500"
                    />
                  </div>
                  <div className="sm:col-span-4 space-y-4">
                    <div className="bg-white/90 backdrop-blur rounded-2xl p-3.5 shadow-sm border border-stone-200">
                      <img
                        src={content.hero.secondarySneakerImage}
                        alt="Giày Sneaker Đế Carbon Ice-Blue"
                        className="w-full h-28 object-cover rounded-xl mb-2.5"
                      />
                      <span className="block text-[10px] font-black uppercase tracking-wider text-[#0284c7]">
                        ICE-BLUE CARBON EDITION
                      </span>
                      <span className="text-xs font-extrabold text-stone-900">
                        Siêu nhẹ 205g • Êm ái vượt trội
                      </span>
                    </div>

                    <div className="bg-[#18181b] text-white rounded-2xl p-3.5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#38bdf8]">
                        GIAYOI RUN CLUB
                      </span>
                      <p className="text-xs font-semibold text-zinc-200 mt-1">
                        Tặng gói đo vòm chân 3D miễn phí tại cửa hàng Quận 1.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Typography "New Season Shoes / UP TO 50% OFF / STARTING AT / SHOP NOW" */}
            <div className="lg:col-span-5 text-left lg:pl-4 space-y-5">
              <div>
                <p className="font-serif italic text-3xl sm:text-4xl text-stone-700 tracking-wide">
                  {content.hero.scriptTitle}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7b12d1] mt-1">
                  {content.hero.viScriptSubtitle}
                </p>
              </div>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-[#18181b] leading-[0.95]">
                {content.hero.headline}
              </h1>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-stone-600">
                  {content.hero.startingAtLabel}
                </span>
                <span className="px-3.5 py-1 bg-white rounded-lg border border-stone-300 text-2xl sm:text-3xl font-black text-[#18181b] shadow-sm">
                  {content.hero.startingAtPrice}
                </span>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#lookbook"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#18181b] hover:bg-[#7b12d1] text-white text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition shadow-lg"
                >
                  <span>{content.hero.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#shoe-finder"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white hover:bg-stone-100 text-[#18181b] border border-stone-300 text-xs font-black uppercase tracking-wider transition"
                >
                  <Footprints className="w-4 h-4 text-[#ff1493]" />
                  <span>Chọn Giày Theo Bàn Chân</span>
                </a>
              </div>

              {/* 3 Technical Cushioning Highlights */}
              <div className="pt-4 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {content.hero.highlights.map((item: any, i: number) => (
                  <div key={i} className="bg-white/70 rounded-xl p-3 border border-stone-200/80">
                    <div className="text-xs font-black text-stone-900">{item.label}</div>
                    <div className="text-[11px] text-stone-600 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC BENTO LOOKBOOK & PRODUCT CHECKERBOARD (Matching Right Inset Screen of GYM017) */}
      <section id="lookbook" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#7b12d1]">
                GIAYOI LOOKBOOK & PRO GEAR
              </span>
              <h2 className="mt-1 text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#18181b]">
                Giày Thể Lực, Đồng Hồ Bấm Giờ & Đồ Tập Gym
              </h2>
            </div>
            <span className="text-xs font-bold text-stone-500">
              Cam kết chính hãng 100% • Đổi size miễn phí trong 30 ngày
            </span>
          </div>

          {/* ROW 1: 2 Product Cards on Left + Women's Fitness Lookbook Banner on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 cols: 2 Product Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.lookbookRow1.products.map((prod: any) => (
                <div
                  key={prod.id}
                  className="group bg-[#f8f7f4] rounded-2xl p-4 border border-stone-200/80 hover:border-stone-400 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <button
                        type="button"
                        onClick={() => setCartCount((c) => c + 1)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-stone-700 hover:text-[#ff1493] shadow-sm"
                        aria-label="Yêu thích"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                      {prod.category}
                    </span>
                    <h3 className="text-sm font-black text-stone-900 mt-1 line-clamp-2">
                      {prod.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-3 border-t border-stone-200/70">
                    <div className="flex items-center gap-0.5 text-amber-500 mb-1.5">
                      {Array.from({ length: prod.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-black text-[#18181b]">{prod.price}</span>
                        <span className="text-xs text-stone-400 line-through ml-2">{prod.oldPrice}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCartCount((c) => c + 1)}
                        className="px-3 py-1.5 bg-[#18181b] hover:bg-[#7b12d1] text-white text-[11px] font-bold uppercase transition"
                      >
                        + Giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 6 cols: Women's Activewear Lifestyle Lookbook Card */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#e9e7e0] min-h-[360px] flex items-center">
              <img
                src={content.lookbookRow1.featureBanner.image}
                alt={content.lookbookRow1.featureBanner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#18181b]/80 via-[#18181b]/45 to-transparent" />
              <div className="relative z-10 p-8 sm:p-10 max-w-md text-white space-y-3">
                <span className="inline-block px-3 py-1 bg-[#ff1493] text-white text-[10px] font-black uppercase tracking-widest">
                  {content.lookbookRow1.featureBanner.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  {content.lookbookRow1.featureBanner.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {content.lookbookRow1.featureBanner.subtitle}
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#18181b] hover:bg-white hover:text-[#18181b] text-white text-xs font-black uppercase tracking-widest border border-white/20 transition"
                  >
                    <span>{content.lookbookRow1.featureBanner.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Men & Women Casual Athlete Banner on Left + 2 Product Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 cols: Lifestyle Banner */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#e9e7e0] min-h-[360px] flex items-center">
              <img
                src={content.lookbookRow2.featureBanner.image}
                alt={content.lookbookRow2.featureBanner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#18181b]/85 via-[#18181b]/45 to-transparent" />
              <div className="relative z-10 p-8 sm:p-10 max-w-md text-white space-y-3">
                <span className="inline-block px-3 py-1 bg-[#7b12d1] text-white text-[10px] font-black uppercase tracking-widest">
                  {content.lookbookRow2.featureBanner.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  {content.lookbookRow2.featureBanner.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {content.lookbookRow2.featureBanner.subtitle}
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#18181b] hover:bg-white hover:text-[#18181b] text-white text-xs font-black uppercase tracking-widest border border-white/20 transition"
                  >
                    <span>{content.lookbookRow2.featureBanner.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 6 cols: 2 Product Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.lookbookRow2.products.map((prod: any) => (
                <div
                  key={prod.id}
                  className="group bg-[#f8f7f4] rounded-2xl p-4 border border-stone-200/80 hover:border-stone-400 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <button
                        type="button"
                        onClick={() => setCartCount((c) => c + 1)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-stone-700 hover:text-[#ff1493] shadow-sm"
                        aria-label="Yêu thích"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                      {prod.category}
                    </span>
                    <h3 className="text-sm font-black text-stone-900 mt-1 line-clamp-2">
                      {prod.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-3 border-t border-stone-200/70">
                    <div className="flex items-center gap-0.5 text-amber-500 mb-1.5">
                      {Array.from({ length: prod.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-black text-[#18181b]">{prod.price}</span>
                        <span className="text-xs text-stone-400 line-through ml-2">{prod.oldPrice}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCartCount((c) => c + 1)}
                        className="px-3 py-1.5 bg-[#18181b] hover:bg-[#7b12d1] text-white text-[11px] font-bold uppercase transition"
                      >
                        + Giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Extra Sneaker & Training Gear Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {content.extraSneakers.map((item: any) => (
              <div
                key={item.id}
                className="group bg-[#f8f7f4] rounded-2xl p-4 border border-stone-200/80 hover:border-[#7b12d1] transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white mb-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7b12d1]">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-black text-stone-900 mt-1 line-clamp-2">
                    {item.name}
                  </h3>
                </div>
                <div className="pt-3 mt-3 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-base font-black text-[#18181b]">{item.price}</span>
                    <span className="text-xs text-stone-400 line-through ml-1.5">{item.oldPrice}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCartCount((c) => c + 1)}
                    className="px-3 py-1.5 bg-[#18181b] hover:bg-[#ff1493] text-white text-[11px] font-bold uppercase transition"
                  >
                    Mua
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GYM DUFFEL & HANDBAG COLLECTION WIDE BANNER (Matching Bottom of Right Inset Screen in GYM017) */}
      <section id="duffel-banner" className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#dedcd6] border border-stone-300 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-[#18181b] text-white text-[10px] font-black uppercase tracking-widest">
                {content.duffelBanner.priceFrom}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#18181b]">
                {content.duffelBanner.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-700 max-w-xl">
                {content.duffelBanner.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#18181b] hover:bg-[#7b12d1] text-white text-xs font-black uppercase tracking-[0.18em] transition"
                >
                  <span>{content.duffelBanner.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={content.duffelBanner.image}
                alt={content.duffelBanner.title}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE 3D FOOT ARCH & RUNNING/GYM SHOE FINDER */}
      <section id="shoe-finder" className="py-16 sm:py-24 bg-[#f4f3ef] border-t border-stone-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7b12d1]/10 text-[#7b12d1] text-xs font-black uppercase tracking-widest">
              <Footprints className="w-3.5 h-3.5" />
              BIOMECHANICS SHOE FINDER
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#18181b]">
              {content.shoeFinder.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              {content.shoeFinder.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2.5">
                  Bước 1: Chọn Mục Tiêu Tập Luyện Chính Của Bạn
                </label>
                <div className="space-y-2.5">
                  {content.shoeFinder.goals.map((g: any) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGoalId(g.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition flex items-center justify-between ${
                        selectedGoalId === g.id
                          ? 'bg-[#18181b] text-white border-[#18181b] shadow-md'
                          : 'bg-white text-stone-800 border-stone-300 hover:border-stone-500'
                      }`}
                    >
                      <span className="text-sm font-black">{g.label}</span>
                      <span
                        className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                          selectedGoalId === g.id ? 'bg-[#ff1493] text-white' : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        {g.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-2.5">
                  Bước 2: Kiểu Vòm Bàn Chân (Arch Type)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'normal', label: 'Vòm Chân Chuẩn' },
                    { id: 'flat', label: 'Bàn Chân Bẹt (Lật Trong)' },
                    { id: 'high', label: 'Vòm Chân Cao' }
                  ].map((arch) => (
                    <button
                      key={arch.id}
                      type="button"
                      onClick={() => setSelectedArch(arch.id as any)}
                      className={`py-3 px-3 rounded-xl border text-xs font-black uppercase transition ${
                        selectedArch === arch.id
                          ? 'bg-[#7b12d1] text-white border-[#7b12d1]'
                          : 'bg-white text-stone-700 border-stone-300'
                      }`}
                    >
                      {arch.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Result Box */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-7 border-2 border-[#18181b] shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#ff1493] text-white text-[10px] font-black uppercase tracking-wider">
                  ĐỀ XUẤT TỪ CHUYÊN GIA GIAYOI
                </span>
                <span className="text-xs font-bold text-stone-500">
                  {selectedArch === 'flat'
                    ? 'Lót giày chống lật cổ chân'
                    : selectedArch === 'high'
                    ? 'Tăng cường đệm giảm chấn'
                    : 'Độ ổn định cân bằng'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#18181b]">
                {activeGoal.recommendedShoe}
              </h3>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#0284c7]">
                {activeGoal.drop}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">{activeGoal.benefit}</p>
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-stone-400">GIÁ ƯU ĐÃI HỘI VIÊN</span>
                  <span className="text-2xl font-black text-[#7b12d1]">{activeGoal.price}</span>
                </div>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#18181b] hover:bg-[#7b12d1] text-white text-xs font-black uppercase tracking-wider transition"
                >
                  Đặt Giữ Size Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIAYOI RUN CLUB & CONDITIONING SCHEDULE */}
      <section id="run-club" className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#ff1493]">
                CỘNG ĐỒNG CHẠY BỘ & THỂ LỰC
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black uppercase text-[#18181b]">
                Lịch Tập Luyện Cùng CLB GiayOi Run Club
              </h2>
            </div>
            <a
              href="#contact"
              className="text-xs font-black uppercase tracking-wider text-[#7b12d1] hover:underline"
            >
              Đăng ký tham gia hoàn toàn miễn phí →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.runClubSessions.map((session: any, idx: number) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#f4f3ef] p-6 border border-stone-300/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded bg-[#18181b] text-white text-[11px] font-black uppercase tracking-wider">
                    {session.day}
                  </span>
                  <h3 className="text-lg font-black text-[#18181b]">{session.title}</h3>
                  <p className="text-xs text-stone-600 font-semibold">
                    Địa điểm: {session.location} • Phụ trách: {session.coach}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-300 flex items-center justify-between text-xs font-bold text-[#7b12d1]">
                  <span>Đặc quyền: {session.perks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#18181b] text-zinc-400 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-zinc-800">
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">
                  GIAY<span className="text-[#38bdf8]">OI</span> FIT
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#ff1493] text-white text-[10px] font-black uppercase">
                  SNEAKER STORE
                </span>
              </div>
              <p className="text-sm text-zinc-400 max-w-lg">
                Thương hiệu phân phối giày chạy bộ, giày tập thể lực đế phẳng, trang phục Gym và câu lạc bộ huấn luyện sải chân uy tín hàng đầu.
              </p>
              <div className="space-y-1.5 text-xs text-zinc-300 pt-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff1493]" />
                  <span>{content.business.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
                  <span>Hotline Tư Vấn Size Giày: {content.business.phone.join(' - ')}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#a855f7]" />
                  <span>{content.business.hours}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-base font-black uppercase text-white mb-2">
                Đặt Lịch Đo Bàn Chân 3D & Giữ Size Giày Ưu Đãi 50%
              </h3>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4"
              >
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  className="px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#ff1493]"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại + Size giày"
                  className="px-3.5 py-2.5 rounded-lg bg-[#18181b] border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#ff1493]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-[#ff1493] hover:bg-[#e01180] text-white text-xs font-black uppercase tracking-wider transition"
                >
                  Nhận Ưu Đãi 50%
                </button>
              </form>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>{content.business.copyright}</p>
            <p>GIAYOI SNEAKER STORE • New Season Running & Gym Collection</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
