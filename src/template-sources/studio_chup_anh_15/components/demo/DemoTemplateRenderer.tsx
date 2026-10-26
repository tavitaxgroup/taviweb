'use client';

import React, { useState } from 'react';
import {
  Search,
  Box,
  Play,
  Globe,
  Rss,
  Share2,
  MessageSquare,
  Film,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh15Data,
  type StudioChupAnh15Data,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh15Data> & Record<string, unknown>;
}

function GreenPillHeader({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-[#7cb342] mb-4">
      <span className="inline-block bg-[#7cb342] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1">
        {title}
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh15Data, incomingData);

  const [activeVideo, setActiveVideo] = useState(data.heroSection.videos[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredFeed = data.mainFeed.filter(
    (item) =>
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      {/* TOP HEADER WITH LIME GREEN 3D CUBE LOGO ("Mona VFX") */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left Logo + Top Nav */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2.5 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-[#7cb342] text-white flex items-center justify-center shadow-xs">
                  <Box className="w-6 h-6" />
                </div>
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#7cb342]">
                  {data.business.name}
                </span>
              </a>

              <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-neutral-700">
                {data.topNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="hover:text-[#7cb342] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Social Icons */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-neutral-500">
                {[Globe, Rss, Share2, Play].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#tin-tuc-vfx"
                    className="p-1.5 hover:text-[#7cb342] transition-colors"
                    aria-label="Kênh truyền thông"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-neutral-700 cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Second Sub-Navigation Strip (#f8f8f8) */}
        <div className="bg-[#f8f8f8] border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
            <nav className="hidden md:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
              {data.subNav.map((sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  className="hover:text-[#7cb342] transition-colors"
                >
                  {sub.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 ml-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài viết CGI, máy ảnh..."
                className="bg-white border border-neutral-300 rounded-xs px-2.5 py-1 text-xs w-44 sm:w-56 focus:outline-none focus:border-[#7cb342]"
              />
              <Search className="w-3.5 h-3.5 text-neutral-400" />
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-4 py-3 flex flex-wrap gap-3 text-xs font-bold uppercase">
            {data.topNav.concat(data.subNav).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#7cb342]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* TOP HORIZONTAL PROMO BANNER (Matches SC015 "ĐUA TOP NHẬN NGAY...") */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        <div className="relative rounded-xs overflow-hidden bg-gradient-to-r from-[#1a237e] via-[#283593] to-[#4a148c] text-white p-4 sm:px-8 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <img
            src={data.topPromoBanner.image}
            alt={data.topPromoBanner.headline}
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-10 flex items-center gap-3">
            <span className="bg-black/60 border border-white/30 text-[10px] font-extrabold px-2 py-1 rounded-2xs">
              4K VFX
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                {data.topPromoBanner.badge}
              </p>
              <h2 className="text-base sm:text-xl font-black uppercase tracking-wide text-white">
                {data.topPromoBanner.headline} –{' '}
                <span className="text-amber-300">{data.topPromoBanner.highlight}</span>
              </h2>
            </div>
          </div>
          <a
            href="#tin-tuc-vfx"
            className="relative z-10 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2 rounded-full shadow-md transition-colors shrink-0"
          >
            {data.topPromoBanner.ctaText}
          </a>
        </div>
      </div>

      {/* HERO 3-COLUMN SECTION: LEFT (6 COLS FEATURE + 2x2 GRID) | MIDDLE (3 COLS PRESET) | RIGHT (3 COLS VIDEO PLAYLIST) */}
      <section id="thiet-bi" className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 6 COLS: Main Feature + 2x2 Sub-Cards */}
            <div className="lg:col-span-6 space-y-5">
              {/* Large Feature Banner ("Life is Strange 2...") */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black group">
                <img
                  src={data.heroSection.mainFeature.image}
                  alt={data.heroSection.mainFeature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8bc34a]">
                    {data.heroSection.mainFeature.category}
                  </span>
                  <h1 className="text-base sm:text-xl font-bold leading-snug mt-1">
                    {data.heroSection.mainFeature.title}
                  </h1>
                </div>
              </div>

              {/* 2x2 Hardware & Camera Sub-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.heroSection.subCards.map((card) => (
                  <article key={card.id} className="group">
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-2">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#222222] group-hover:text-[#7cb342] leading-snug line-clamp-2">
                      {card.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>

            {/* MIDDLE 3 COLS: KHO PRESET & VIPCODE */}
            <div id="kho-preset" className="lg:col-span-3">
              <GreenPillHeader title={data.heroSection.presetListTitle} />
              <div className="space-y-3.5">
                {data.heroSection.presetItems.map((item) => (
                  <article
                    key={item.id}
                    className="group flex gap-3 items-start pb-3 border-b border-neutral-100 last:border-none"
                  >
                    <div className="w-20 h-14 overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#222222] group-hover:text-[#7cb342] leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-neutral-400 mt-1">{item.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT 3 COLS: VIDEO PLAYER + GREEN PLAYLIST HEADER + PROMO CARD */}
            <div className="lg:col-span-3">
              <GreenPillHeader title={data.heroSection.videoWidgetTitle} />

              <div className="bg-[#1e1e1e] text-white rounded-xs overflow-hidden shadow-sm">
                {/* Active Video Player */}
                <div className="relative aspect-video bg-black group cursor-pointer">
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-black/70 border border-white flex items-center justify-center group-hover:bg-[#7cb342] transition-colors">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bright Green Playlist Header Bar */}
                <div className="bg-[#5eb530] px-3.5 py-2.5 flex items-center gap-2">
                  <Play className="w-4 h-4 fill-current shrink-0" />
                  <div className="text-xs font-bold leading-tight">
                    {data.heroSection.playlistBannerTitle}
                  </div>
                </div>

                {/* Dark Playlist Items */}
                <div className="divide-y divide-white/10 max-h-64 overflow-y-auto">
                  {data.heroSection.videos.map((vid) => (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => setActiveVideo(vid)}
                      className={`w-full text-left p-2.5 flex gap-2.5 items-center hover:bg-white/10 transition-colors cursor-pointer ${
                        activeVideo.id === vid.id ? 'bg-white/10' : ''
                      }`}
                    >
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-16 h-11 object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium text-white/90 line-clamp-2 leading-snug">
                          {vid.title}
                        </p>
                        <span className="text-[10px] text-white/45">{vid.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Compact Vertical Promo Box Under Video */}
              <div className="mt-5 relative rounded-xs overflow-hidden bg-[#1a237e] text-white p-4 text-center">
                <img
                  src={data.sidebarLatest.promoPosters[0].image}
                  alt={data.sidebarLatest.promoPosters[0].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative z-10 py-4">
                  <span className="inline-block bg-amber-400 text-black text-[10px] font-extrabold px-2 py-0.5 uppercase mb-2">
                    VFX CONTEST
                  </span>
                  <h4 className="text-sm font-black uppercase">
                    {data.sidebarLatest.promoPosters[0].title}
                  </h4>
                  <p className="text-[11px] text-white/85 mt-1">
                    {data.sidebarLatest.promoPosters[0].subtitle}
                  </p>
                  <a
                    href="#tin-tuc-vfx"
                    className="mt-3 inline-block bg-[#d32f2f] text-white text-[10px] font-bold uppercase px-4 py-1.5 rounded-full"
                  >
                    {data.sidebarLatest.promoPosters[0].cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOWER MAIN SECTION: LEFT 8-COL VERTICAL ARTICLE FEED + RIGHT 4-COL BÀI VIẾT MỚI SIDEBAR */}
      <section id="tin-tuc-vfx" className="py-10 border-t border-neutral-200 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT 8 COLS: Article Rows */}
            <div className="lg:col-span-8 space-y-6">
              {filteredFeed.map((article) => (
                <article
                  key={article.id}
                  className="group flex flex-col sm:flex-row gap-5 pb-6 border-b border-neutral-100 last:border-none"
                >
                  <div className="sm:w-60 aspect-[16/10] overflow-hidden bg-neutral-100 shrink-0 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/75 text-[#8bc34a] text-[10px] font-bold uppercase px-2 py-0.5">
                      {article.tag}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#7cb342] leading-snug transition-colors">
                        {article.title}
                      </h3>
                      <div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-400">
                        <span>
                          <strong className="text-neutral-700">{article.author}</strong> -{' '}
                          {article.date}
                        </span>
                        <span className="bg-[#222222] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-2xs">
                          {article.comments}
                        </span>
                      </div>
                      <p className="mt-2.5 text-xs text-neutral-500 leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* RIGHT 4 COLS: BÀI VIẾT MỚI + VERTICAL PROMO BANNERS */}
            <aside className="lg:col-span-4 space-y-6">
              <div>
                <GreenPillHeader title={data.sidebarLatest.title} />
                <ul className="divide-y divide-neutral-100 border border-neutral-100 bg-[#fcfcfc] p-4">
                  {data.sidebarLatest.headlines.map((hl, idx) => (
                    <li key={idx} className="py-2.5 first:pt-0 last:pb-0">
                      <a
                        href="#tin-tuc-vfx"
                        className="text-xs font-medium text-neutral-700 hover:text-[#7cb342] leading-snug block transition-colors"
                      >
                        {hl}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stacked Vertical Promo Banners */}
              {data.sidebarLatest.promoPosters.map((poster) => (
                <div
                  key={poster.id}
                  className="relative rounded-xs overflow-hidden bg-gradient-to-b from-[#1a237e] to-[#0d1346] text-white p-6 text-center shadow-sm"
                >
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10 py-6">
                    <span className="inline-block bg-[#7cb342] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 mb-2">
                      MONA VFX STUDIO
                    </span>
                    <h4 className="text-base font-black uppercase tracking-wide">
                      {poster.title}
                    </h4>
                    <p className="text-xs text-white/80 mt-1.5">{poster.subtitle}</p>
                    <a
                      href="#kho-preset"
                      className="mt-4 inline-block bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase px-6 py-2 rounded-full transition-colors"
                    >
                      {poster.cta}
                    </a>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* DARK CENTERED FOOTER (Matches SC015 Footer with Green Cube Logo) */}
      <footer className="bg-[#1e1e1e] text-white/75 pt-12 pb-8 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#7cb342] text-white flex items-center justify-center">
              <Box className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold text-[#7cb342]">
              {data.business.name}
            </span>
          </div>

          <div className="text-xs text-white/70 space-y-1 max-w-md mx-auto">
            <p>Địa chỉ: {data.business.address}</p>
            <p>Điện thoại: {data.business.phone[0]}</p>
            <p>Email: {data.business.email[0]}</p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2.5">
            {[Globe, Rss, Share2, Play].map((Icon, idx) => (
              <a
                key={idx}
                href="#tin-tuc-vfx"
                className="w-8 h-8 bg-white/10 hover:bg-[#7cb342] text-white flex items-center justify-center rounded-2xs transition-colors"
                aria-label="Mạng xã hội"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 text-[11px] text-white/45 text-left">
            {data.business.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
