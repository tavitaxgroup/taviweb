'use client';

import React, { useState } from 'react';
import {
  Search,
  Play,
  Globe,
  Rss,
  Share2,
  Camera,
  Sparkles,
  Cloud,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh17Data,
  type StudioChupAnh17Data,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh17Data> & Record<string, unknown>;
}

function OrangeUnderlineHeader({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-neutral-200 mb-5 flex items-center">
      <h2 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#222222] border-b-2 border-[#f7941d] -mb-[2px] pb-2 pr-4">
        {title}
      </h2>
    </div>
  );
}

function PandaMonaLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col items-center select-none">
      <div
        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center ${
          dark
            ? 'border-white bg-[#1a1a1a] text-white'
            : 'border-[#222222] bg-white text-[#222222]'
        }`}
      >
        <Camera className="w-5 h-5" />
      </div>
      <span className="text-lg font-serif italic font-bold text-[#f7941d] -mt-1 leading-none">
        mona
      </span>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh17Data, incomingData);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeEpisode, setActiveEpisode] = useState(data.videoSidebar.episodes[0]);
  const [showAllFeed, setShowAllFeed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const displayedArticles = showAllFeed
    ? data.allArticlesSection.articles
    : data.allArticlesSection.articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      {/* HEADER: TOP WHITE ROW WITH PANDA "mona" LOGO + ROUNDED SEARCH INPUT + SOLID ORANGE BAR (#f7941d) */}
      <header className="bg-white sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Left Panda Logo + Main Nav */}
            <div className="flex items-center gap-7">
              <a href="#" className="shrink-0">
                <PandaMonaLogo />
              </a>

              <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wider text-[#222222]">
                {data.topNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="hover:text-[#f7941d] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Rounded Search Bar with Orange Circle Button */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm cosplay, studio..."
                  className="border border-neutral-200 bg-neutral-50 rounded-full pl-4 pr-10 py-1.5 text-xs w-48 sm:w-60 focus:outline-none focus:border-[#f7941d]"
                />
                <span className="w-7 h-7 rounded-full bg-[#f7941d] text-white flex items-center justify-center absolute right-1">
                  <Search className="w-3.5 h-3.5" />
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-neutral-700 cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Solid Amber-Orange Sub-Bar (#f7941d) */}
        <div className="bg-[#f7941d] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between">
            <nav className="flex items-center gap-5 overflow-x-auto text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
              {data.orangeBarNav.map((sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  className="hover:text-black transition-colors"
                >
                  {sub.label}
                </a>
              ))}
            </nav>

            <div className="hidden sm:flex items-center gap-1.5">
              {[Globe, Rss, Share2, Play].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#tin-tuc"
                  className="w-6 h-6 bg-white/20 hover:bg-white hover:text-[#f7941d] rounded-2xs flex items-center justify-center transition-colors"
                  aria-label="Mạng xã hội"
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 py-3 flex flex-wrap gap-3 text-xs font-bold uppercase">
            {data.topNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#f7941d]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* TOP WIDE TECH/STUDIO PROMO BANNER (Matches SC017 "GIÁ CHỈ TỪ: 3.650.000Đ") */}
      <section id="uu-dai" className="pt-5 pb-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-xs overflow-hidden bg-gradient-to-r from-[#0d47a1] via-[#1565c0] to-[#1a237e] text-white p-5 sm:px-8 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <img
              src={data.topPromoBanner.image}
              alt={data.topPromoBanner.productTitle}
              className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
            />
            <div className="relative z-10 text-center md:text-left">
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-300">
                {data.topPromoBanner.eyebrow}
              </p>
              <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                {data.topPromoBanner.productTitle}
              </h2>
              <a
                href="#tat-ca-bai-viet"
                className="mt-3 inline-block bg-amber-400 hover:bg-amber-300 text-black text-xs font-extrabold uppercase px-5 py-1.5 rounded-full shadow-xs transition-colors"
              >
                {data.topPromoBanner.ctaText}
              </a>
            </div>

            <div className="relative z-10 bg-[#082866]/90 border-2 border-amber-400/80 rounded-lg px-6 py-3 text-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/85">
                {data.topPromoBanner.priceLabel}
              </p>
              <p className="text-2xl sm:text-3xl font-black text-amber-400">
                {data.topPromoBanner.priceValue}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO ASYMMETRIC 4-TILE MOSAIC (1 Large Left + 1 Wide Top Right + 2 Split Bottom Right) */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* Left Large Feature Tile (6 cols) */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[380px] overflow-hidden bg-black group">
              <img
                src={data.heroMosaic.leftMain.image}
                alt={data.heroMosaic.leftMain.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h1 className="text-lg sm:text-2xl font-extrabold leading-snug">
                  {data.heroMosaic.leftMain.title}
                </h1>
                <p className="mt-2 text-[11px] text-white/75">
                  <strong>{data.heroMosaic.leftMain.author}</strong> -{' '}
                  {data.heroMosaic.leftMain.date}
                </p>
              </div>
            </div>

            {/* Right 6 Cols: 1 Wide Top + 2 Split Bottom */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Top Wide Tile */}
              <div className="sm:col-span-2 relative h-48 overflow-hidden bg-black group">
                <img
                  src={data.heroMosaic.rightTop.image}
                  alt={data.heroMosaic.rightTop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 text-white">
                  <h2 className="text-sm sm:text-base font-extrabold leading-snug">
                    {data.heroMosaic.rightTop.title}
                  </h2>
                </div>
              </div>

              {/* Bottom Left Tile */}
              <div className="relative h-44 overflow-hidden bg-black group">
                <img
                  src={data.heroMosaic.rightBottomLeft.image}
                  alt={data.heroMosaic.rightBottomLeft.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3.5 text-white">
                  <h3 className="text-xs font-bold leading-snug line-clamp-2">
                    {data.heroMosaic.rightBottomLeft.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Right Tile */}
              <div className="relative h-44 overflow-hidden bg-black group">
                <img
                  src={data.heroMosaic.rightBottomRight.image}
                  alt={data.heroMosaic.rightBottomRight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3.5 text-white">
                  <h3 className="text-xs font-bold leading-snug line-clamp-2">
                    {data.heroMosaic.rightBottomRight.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLE 2-COLUMN SECTION: TIN TỨC (LEFT 8 COLS) + VIDEO PLAYLIST & CLOUD BANNER (RIGHT 4 COLS) */}
      <section id="tin-tuc" className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT 8 COLS: TIN TỨC */}
            <div className="lg:col-span-8">
              <OrangeUnderlineHeader title={data.middleNewsSection.title} />

              {/* Large Lead Photo Banner ("Nhà thờ Đức Bà Paris...") */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black mb-6 group">
                <img
                  src={data.middleNewsSection.leadBanner.image}
                  alt={data.middleNewsSection.leadBanner.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                  <h3 className="text-base sm:text-xl font-bold leading-snug">
                    {data.middleNewsSection.leadBanner.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-white/80">
                    <span className="bg-white text-black font-bold px-2 py-0.5 text-[9px] uppercase">
                      {data.middleNewsSection.leadBanner.category}
                    </span>
                    <span>
                      <strong>{data.middleNewsSection.leadBanner.author}</strong> -{' '}
                      {data.middleNewsSection.leadBanner.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Horizontal Article List */}
              <div className="space-y-5">
                {data.middleNewsSection.articles.map((art) => (
                  <article
                    key={art.id}
                    className="group flex flex-col sm:flex-row gap-4 pb-5 border-b border-neutral-100 last:border-none"
                  >
                    <div className="sm:w-52 aspect-[16/10] overflow-hidden bg-neutral-100 shrink-0">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-[#222222] group-hover:text-[#f7941d] leading-snug transition-colors">
                        {art.title}
                      </h4>
                      <div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-400">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-white text-[9px] font-bold uppercase px-2 py-0.5 ${
                              art.badgeColor === 'blue'
                                ? 'bg-[#0288d1]'
                                : art.badgeColor === 'orange'
                                ? 'bg-[#f7941d]'
                                : 'bg-[#222222]'
                            }`}
                          >
                            {art.badge}
                          </span>
                          <span>
                            <strong className="text-neutral-600">{art.author}</strong> -{' '}
                            {art.date}
                          </span>
                        </div>
                        <span className="bg-[#f7941d] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-2xs">
                          {art.comments}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-neutral-500 leading-relaxed line-clamp-2">
                        {art.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT 4 COLS: VIDEO PLAYLIST + CYAN CLOUD BANNER */}
            <aside id="video-studio" className="lg:col-span-4 space-y-6">
              <div>
                <OrangeUnderlineHeader title={data.videoSidebar.title} />

                <div className="bg-[#1f1f1f] text-white rounded-xs overflow-hidden">
                  {/* Top Active Player */}
                  <div className="relative aspect-video bg-black group">
                    <img
                      src={activeEpisode.thumbnail}
                      alt={activeEpisode.title}
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#f7941d] text-white flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                      <p className="text-xs font-bold text-[#f7941d] line-clamp-2">
                        {activeEpisode.title}
                      </p>
                    </div>
                  </div>

                  {/* Episode Playlist */}
                  <div className="divide-y divide-white/10">
                    {data.videoSidebar.episodes.map((ep) => (
                      <button
                        key={ep.id}
                        type="button"
                        onClick={() => setActiveEpisode(ep)}
                        className={`w-full text-left p-2.5 flex gap-3 items-center hover:bg-white/10 transition-colors cursor-pointer ${
                          activeEpisode.id === ep.id ? 'bg-white/10' : ''
                        }`}
                      >
                        <img
                          src={ep.thumbnail}
                          alt={ep.title}
                          className="w-16 h-11 object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-medium text-white/90 line-clamp-2 leading-snug">
                            {ep.title}
                          </p>
                          <span className="text-[10px] text-white/45">{ep.duration}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cyan Cloud Promo Card */}
              <div className="bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] border border-[#4dd0e1] p-5 rounded-xs text-center">
                <div className="w-12 h-12 rounded-full bg-white text-[#00838f] flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Cloud className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#006064]">
                  {data.videoSidebar.cloudPromoTitle}
                </h4>
                <p className="text-[11px] text-[#00838f] mt-1">
                  {data.videoSidebar.cloudPromoSub}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* LOWER 2-COLUMN SECTION: TẤT CẢ BÀI VIẾT (8 COLS) + BÀI VIẾT MỚI / TRÀ ĐÁ STUDIO / ĐÁNH GIÁ (4 COLS) */}
      <section id="tat-ca-bai-viet" className="py-6 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT 8 COLS: TẤT CẢ BÀI VIẾT */}
            <div className="lg:col-span-8">
              <OrangeUnderlineHeader title={data.allArticlesSection.title} />

              <div className="space-y-5">
                {displayedArticles
                  .filter(
                    (a) =>
                      !searchQuery.trim() ||
                      a.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((art) => (
                    <article
                      key={art.id}
                      className="group flex flex-col sm:flex-row gap-4 pb-5 border-b border-neutral-100 last:border-none"
                    >
                      <div className="sm:w-52 aspect-[16/10] overflow-hidden bg-neutral-100 shrink-0">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-bold text-[#222222] group-hover:text-[#f7941d] leading-snug transition-colors">
                          {art.title}
                        </h3>
                        <div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-400">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-white text-[9px] font-bold uppercase px-2 py-0.5 ${
                                art.badgeColor === 'blue'
                                  ? 'bg-[#0288d1]'
                                  : art.badgeColor === 'orange'
                                  ? 'bg-[#f7941d]'
                                  : 'bg-[#222222]'
                              }`}
                            >
                              {art.badge}
                            </span>
                            <span>
                              <strong className="text-neutral-600">{art.author}</strong> -{' '}
                              {art.date}
                            </span>
                          </div>
                          <span className="bg-[#f7941d] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-2xs">
                            {art.comments}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-500 leading-relaxed line-clamp-2">
                          {art.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setShowAllFeed((prev) => !prev)}
                  className="inline-flex items-center gap-1 border border-neutral-300 hover:border-[#f7941d] hover:text-[#f7941d] text-xs text-neutral-600 px-5 py-2 rounded-2xs transition-colors cursor-pointer"
                >
                  <span>{showAllFeed ? 'Thu gọn' : 'Xem thêm'}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* RIGHT 4 COLS: BÀI VIẾT MỚI NHẤT + TRÀ ĐÁ STUDIO + ĐÁNH GIÁ */}
            <aside id="danh-gia" className="lg:col-span-4 space-y-8">
              {/* Widget 1: BÀI VIẾT MỚI NHẤT */}
              <div>
                <OrangeUnderlineHeader title={data.lowerRightSidebar.latestTitle} />
                <ul className="space-y-3">
                  {data.lowerRightSidebar.latestLinks.map((lnk, idx) => (
                    <li key={idx} className="pb-2.5 border-b border-neutral-100 last:border-none">
                      <a
                        href="#tat-ca-bai-viet"
                        className="text-xs font-bold text-[#222222] hover:text-[#f7941d] leading-snug block"
                      >
                        {lnk.title}
                      </a>
                      <span className="text-[10px] text-neutral-400">{lnk.date}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Widget 2: TRÀ ĐÁ STUDIO */}
              <div>
                <OrangeUnderlineHeader title={data.lowerRightSidebar.loungeTitle} />
                <div className="mb-4">
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 mb-2">
                    <img
                      src={data.lowerRightSidebar.loungeLead.image}
                      alt={data.lowerRightSidebar.loungeLead.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#0288d1] text-white text-[9px] font-bold uppercase px-2 py-0.5">
                      {data.lowerRightSidebar.loungeLead.category}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#222222] hover:text-[#f7941d] leading-snug">
                    {data.lowerRightSidebar.loungeLead.title}
                  </h4>
                  <p className="text-[10px] text-neutral-400 mt-1">
                    <strong>{data.lowerRightSidebar.loungeLead.author}</strong> -{' '}
                    {data.lowerRightSidebar.loungeLead.date}
                  </p>
                </div>

                <div className="space-y-3">
                  {data.lowerRightSidebar.loungeSubItems.map((sub) => (
                    <div key={sub.id} className="flex gap-3 items-center">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-20 h-14 object-cover shrink-0"
                      />
                      <div>
                        <h5 className="text-xs font-bold text-[#222222] hover:text-[#f7941d] leading-snug line-clamp-2">
                          {sub.title}
                        </h5>
                        <span className="text-[10px] text-neutral-400">{sub.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 3: ĐÁNH GIÁ (With Orange Score Badge) */}
              <div>
                <OrangeUnderlineHeader title={data.lowerRightSidebar.reviewsTitle} />
                <div className="space-y-3.5">
                  {data.lowerRightSidebar.reviews.map((rev) => (
                    <div key={rev.id} className="flex gap-3 items-center">
                      <div className="relative w-24 h-16 overflow-hidden bg-neutral-100 shrink-0">
                        <img
                          src={rev.image}
                          alt={rev.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#f7941d] text-white text-[10px] font-extrabold flex items-center justify-center shadow-xs">
                          {rev.score}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-[#222222] hover:text-[#f7941d] leading-snug line-clamp-2">
                          {rev.title}
                        </h5>
                        <span className="text-[10px] text-neutral-400">{rev.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DARK FOOTER WITH PANDA MONA LOGO */}
      <footer className="bg-[#262626] text-white/80 pt-12 pb-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <PandaMonaLogo dark />
            </div>

            <div className="md:col-span-6 text-xs text-white/75 space-y-2">
              <h4 className="font-extrabold uppercase tracking-wider text-white">
                VỀ CHÚNG TÔI
              </h4>
              <p className="leading-relaxed">{data.business.description}</p>
              <p className="pt-1">
                Email liên hệ:{' '}
                <strong className="text-[#f7941d]">{data.business.email[0]}</strong> • Hotline:{' '}
                <strong>{data.business.phone[0]}</strong>
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
                MẠNG XÃ HỘI
              </h4>
              <div className="flex items-center gap-2">
                {[Globe, Rss, Share2, Play].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#tin-tuc"
                    className="w-8 h-8 bg-white/10 hover:bg-[#f7941d] text-white flex items-center justify-center rounded-2xs transition-colors"
                    aria-label="Mạng xã hội"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 text-[11px] text-white/45">{data.business.copyright}</div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
