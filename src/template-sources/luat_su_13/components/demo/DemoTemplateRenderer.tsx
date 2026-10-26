"use client";

import React, { useState } from "react";
import {
  Menu,
  Search,
  Play,
  Megaphone,
  ArrowRight,
  Clock,
  User,
  Eye,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { adaptClonedTemplateData } from "@/lib/demo/clonedTemplateUtils";
import {
  luatSu13DefaultData,
  type LuatSu13Data,
  type ENewsArticleCard,
} from "../../data/mockData";

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const content: LuatSu13Data = adaptClonedTemplateData(
    luatSu13DefaultData,
    data
  );

  const [activeSidebarTab, setActiveSidebarTab] = useState<string>(
    content.mainFeedSection.sidebar.tabs[0] || "DOANH NGHIỆP"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentTabArticles =
    content.mainFeedSection.sidebar.tabArticles[activeSidebarTab] ||
    content.mainFeedSection.sidebar.tabArticles["DOANH NGHIỆP"] ||
    [];

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#111827] font-sans selection:bg-[#e51c23] selection:text-white">
      {/* 1. PITCH-BLACK MASTHEAD & NAVBAR (#0a0a0a) */}
      <header className="bg-[#0a0a0a] text-white sticky top-0 z-40 shadow-lg">
        {/* Top Bar */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
            {/* Left Quick Links */}
            <div className="hidden md:flex items-center gap-5 text-xs text-gray-300 font-medium">
              {content.header.topLinks.map((lnk) => (
                <a
                  key={lnk}
                  href="#daily"
                  className="hover:text-[#e51c23] transition-colors"
                >
                  {lnk}
                </a>
              ))}
            </div>

            {/* Center Brand Logo: THE MONA [NEWS] */}
            <a
              href="#hero"
              className="flex items-center gap-2 mx-auto md:mx-0 group"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {content.header.logoPrefix}
              </span>
              <span className="bg-[#e51c23] text-white text-xl sm:text-2xl font-black px-2.5 py-0.5 rounded-sm tracking-wider shadow-md">
                {content.header.logoHighlight}
              </span>
            </a>

            {/* Right Socials & Hotline */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs text-gray-400 mr-1">
                Hotline:{" "}
                <strong className="text-white">
                  {content.business.phone[0]}
                </strong>
              </span>
              {content.header.socials.map((soc) => (
                <a
                  key={soc}
                  href="#footer"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#e51c23] text-[10px] font-extrabold flex items-center justify-center transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Navigation Bar */}
        <div className="bg-[#121212] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở danh mục"
              className="w-9 h-9 rounded bg-white/5 hover:bg-[#e51c23] flex items-center justify-center text-white transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>

            <nav className="hidden lg:flex items-center gap-7">
              {content.header.navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-extrabold uppercase tracking-wider transition-colors ${
                    idx === 0
                      ? "text-[#e51c23]"
                      : "text-gray-200 hover:text-[#e51c23]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Tìm kiếm"
              className="w-9 h-9 rounded bg-white/5 hover:bg-[#e51c23] flex items-center justify-center text-white transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#161616] px-4 py-3 border-t border-white/10 flex flex-wrap gap-3">
              {content.header.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold text-gray-200 hover:text-[#e51c23] px-2.5 py-1 rounded bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* 2. TOP ASYMMETRIC 3-CARD HERO GRID */}
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left 8-Col Large Overlay Card */}
          <div className="lg:col-span-8 relative rounded-xl overflow-hidden group min-h-[420px] sm:min-h-[470px] flex flex-col justify-end shadow-md">
            <img
              src={content.heroGrid.mainLeft.image}
              alt={content.heroGrid.mainLeft.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {content.heroGrid.mainLeft.categories.map((cat) => (
                  <span
                    key={cat.label}
                    className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded text-white"
                    style={{ backgroundColor: cat.color }}
                  >
                    {cat.label}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3 group-hover:text-amber-300 transition-colors">
                {content.heroGrid.mainLeft.title}
              </h1>
              {content.heroGrid.mainLeft.excerpt && (
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 mb-4 max-w-3xl">
                  {content.heroGrid.mainLeft.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <User className="w-3.5 h-3.5 text-[#e51c23]" />
                  {content.heroGrid.mainLeft.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#e51c23]" />
                  {content.heroGrid.mainLeft.date}
                </span>
                {content.heroGrid.mainLeft.views && (
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#e51c23]" />
                    {content.heroGrid.mainLeft.views}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right 4-Col 2 Stacked Overlay Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {content.heroGrid.stackedRight.map((card) => (
              <div
                key={card.id}
                className="relative rounded-xl overflow-hidden group min-h-[220px] flex-1 flex flex-col justify-end shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="relative z-10 p-5 text-white">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    {card.categories.map((cat) => (
                      <span
                        key={cat.label}
                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded text-white"
                        style={{ backgroundColor: cat.color }}
                      >
                        {cat.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-base font-extrabold leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h2>
                  <div className="text-[11px] text-gray-300">
                    {card.author} • {card.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL CAMPAIGN BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-gradient-to-r from-[#111827] via-[#1e293b] to-[#0f172a] rounded-xl p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-white/10 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block bg-[#e51c23] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
              {content.topCampaignBanner.badge}
            </span>
            <h3 className="text-base sm:text-lg font-black tracking-tight text-amber-400">
              {content.topCampaignBanner.title}
            </h3>
            <p className="text-xs text-gray-300 max-w-2xl">
              {content.topCampaignBanner.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#footer"
              className="bg-[#e51c23] hover:bg-[#c6141b] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors shadow"
            >
              {content.topCampaignBanner.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* 4. SECTION: TIN TỨC TRONG NGÀY (4 Tall Vertical Dark-Overlay Cards) */}
      <section id="daily" className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <SectionBarHeader
          title={content.dailyNewsSection.title}
          actionText={content.dailyNewsSection.viewAllText}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.dailyNewsSection.cards.map((card) => (
            <TallOverlayCard key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* 5. PITCH-BLACK SECTION: VIDEOS HOT (#0a0a0a) */}
      <section id="videos" className="bg-[#0a0a0a] text-white py-14 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="w-2 h-6 bg-[#e51c23] rounded-sm" />
              <h2 className="text-2xl font-black tracking-tight">
                {content.hotVideosSection.title}
              </h2>
            </div>
            <a
              href="#feed"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-gray-300 hover:text-[#e51c23] transition-colors"
            >
              {content.hotVideosSection.viewAllText}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Left 7-Col Featured Video Player Card */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden group min-h-[380px] flex flex-col justify-end">
              <img
                src={content.hotVideosSection.featuredVideo.image}
                alt={content.hotVideosSection.featuredVideo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-[#e51c23] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {content.hotVideosSection.featuredVideo.categories.map(
                    (cat) => (
                      <span
                        key={cat.label}
                        className="text-[10px] font-black uppercase px-2.5 py-1 rounded text-white"
                        style={{ backgroundColor: cat.color }}
                      >
                        {cat.label}
                      </span>
                    )
                  )}
                  {content.hotVideosSection.featuredVideo.duration && (
                    <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded font-bold">
                      {content.hotVideosSection.featuredVideo.duration}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug mb-2 group-hover:text-amber-300 transition-colors">
                  {content.hotVideosSection.featuredVideo.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mb-3">
                  {content.hotVideosSection.featuredVideo.excerpt}
                </p>
                <div className="text-xs text-gray-400">
                  {content.hotVideosSection.featuredVideo.author} •{" "}
                  {content.hotVideosSection.featuredVideo.date}
                </div>
              </div>
            </div>

            {/* Right 5-Col 3 Horizontal Video Items */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              {content.hotVideosSection.sideVideos.map((vid) => (
                <article
                  key={vid.id}
                  className="bg-[#141414] border border-white/10 rounded-xl p-3.5 flex items-center gap-4 group cursor-pointer hover:border-[#e51c23]/60 transition-colors"
                >
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={vid.image}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#e51c23] text-white flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      {vid.categories.map((cat) => (
                        <span
                          key={cat.label}
                          className="text-[9px] font-black uppercase px-2 py-0.5 rounded text-white"
                          style={{ backgroundColor: cat.color }}
                        >
                          {cat.label}
                        </span>
                      ))}
                      <span className="text-[10px] text-gray-400">
                        {vid.duration}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 line-clamp-2 leading-snug">
                      {vid.title}
                    </h4>
                    <span className="text-[11px] text-gray-400 mt-1 block">
                      {vid.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MAIN 2-COLUMN SECTION: CÓ THỂ BẠN QUAN TÂM (8 COLS) + SIDEBAR (4 COLS) */}
      <section id="feed" className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 8 Cols: 8 Horizontal Article Cards */}
          <div className="lg:col-span-8">
            <SectionBarHeader
              title={content.mainFeedSection.title}
              actionText="CẬP NHẬT MỚI NHẤT"
            />

            <div className="space-y-5">
              {content.mainFeedSection.articles.map((art) => (
                <article
                  key={art.id}
                  className="bg-white rounded-xl border border-gray-200/80 p-4 sm:p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-shadow group"
                >
                  <div className="sm:w-52 sm:h-40 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {art.categories.map((cat) => (
                          <span
                            key={cat.label}
                            className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded text-white"
                            style={{ backgroundColor: cat.color }}
                          >
                            {cat.label}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-[#e51c23] leading-snug mb-2 transition-colors">
                        {art.title}
                      </h3>
                      {art.excerpt && (
                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3">
                          {art.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-t border-gray-100">
                      <span className="font-bold text-gray-700">
                        {art.author}
                      </span>
                      <span>•</span>
                      <span>{art.date}</span>
                      {art.views && (
                        <>
                          <span>•</span>
                          <span>{art.views}</span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right 4 Cols: Sidebar */}
          <aside className="lg:col-span-4 space-y-7">
            {/* A. Red Megaphone Banner: SỰ KIỆN NỔI BẬT HÔM NAY */}
            <div className="bg-gradient-to-r from-[#e51c23] to-[#b81218] text-white rounded-xl p-5 flex items-center gap-4 shadow-md">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider">
                  {content.mainFeedSection.sidebar.highlightBannerTitle}
                </h3>
                <p className="text-xs text-red-100 mt-0.5">
                  {content.mainFeedSection.sidebar.highlightBannerSubtitle}
                </p>
              </div>
            </div>

            {/* B. Chuyên Mục Đáng Quan Tâm (2x2 Numbered Square Image Grid) */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-5">
              <h3 className="text-base font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#e51c23] rounded-sm" />
                {content.mainFeedSection.sidebar.featuredCategoriesTitle}
              </h3>
              <div className="grid grid-cols-2 gap-3.5">
                {content.mainFeedSection.sidebar.featuredCategories.map(
                  (cat) => (
                    <a
                      key={cat.number}
                      href="#for-you"
                      className="relative aspect-square rounded-lg overflow-hidden group flex flex-col justify-end p-3"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                      <span className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-[#e51c23] text-white text-xs font-black flex items-center justify-center shadow">
                        {cat.number}
                      </span>
                      <div className="relative z-10 text-white">
                        <div className="text-xs font-extrabold leading-tight">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-gray-300 mt-0.5">
                          {cat.count}
                        </div>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* C. 3-Tab Widget (DOANH NGHIỆP / SỞ HỮU TRÍ TUỆ / ĐỜI SỐNG) */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-5">
              <div className="grid grid-cols-3 gap-1.5 bg-gray-100 p-1 rounded-lg mb-5">
                {content.mainFeedSection.sidebar.tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveSidebarTab(tab)}
                    className={`py-2 px-1 text-[10px] font-black uppercase rounded-md transition-colors truncate ${
                      activeSidebarTab === tab
                        ? "bg-[#e51c23] text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {currentTabArticles.map((item) => (
                  <article
                    key={item.id}
                    className="flex items-start gap-3.5 group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-16 rounded-lg object-cover shrink-0 group-hover:opacity-90"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        {item.categories.map((c) => (
                          <span
                            key={c.label}
                            className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded text-white"
                            style={{ backgroundColor: c.color }}
                          >
                            {c.label}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#e51c23] line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 mt-0.5 block">
                        {item.date}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* D. Tall Vertical Editorial Poster */}
            <div className="relative rounded-xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 text-white shadow-md group">
              <img
                src={content.mainFeedSection.sidebar.editorialPoster.image}
                alt={content.mainFeedSection.sidebar.editorialPoster.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/20" />
              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-[#e51c23] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                  {content.mainFeedSection.sidebar.editorialPoster.badge}
                </span>
                <h3 className="text-xl font-black leading-snug text-amber-300">
                  {content.mainFeedSection.sidebar.editorialPoster.title}
                </h3>
                <p className="text-xs text-gray-200 italic leading-relaxed">
                  “{content.mainFeedSection.sidebar.editorialPoster.quote}”
                </p>
                <div className="pt-2 border-t border-white/15 text-[11px] font-bold text-gray-300">
                  {content.mainFeedSection.sidebar.editorialPoster.author}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 7. FULL-WIDTH RED PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-gradient-to-r from-[#b80d13] via-[#e51c23] to-[#9e0b10] rounded-xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-block bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
              {content.redPromoBanner.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              {content.redPromoBanner.title}
            </h2>
            <p className="text-xs sm:text-sm text-red-100 max-w-3xl">
              {content.redPromoBanner.subtitle}
            </p>
          </div>
          <a
            href="#footer"
            className="bg-white hover:bg-amber-300 text-[#b80d13] hover:text-black font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shrink-0 transition-colors shadow"
          >
            {content.redPromoBanner.ctaText}
          </a>
        </div>
      </section>

      {/* 8. SECTION: TIN DÀNH CHO BẠN (4 Tall Vertical Dark-Overlay Cards) */}
      <section id="for-you" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <SectionBarHeader
          title={content.forYouSection.title}
          actionText={content.forYouSection.viewAllText}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.forYouSection.cards.map((card) => (
            <TallOverlayCard key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* 9. PITCH-BLACK 6-COLUMN FOOTER (#0a0a0a) */}
      <footer id="footer" className="bg-[#0a0a0a] text-gray-300 pt-14 pb-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* 6 Category Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pb-12 border-b border-white/10">
            {content.footer.columns.map((col) => (
              <div key={col.id}>
                <h4 className="text-xs font-black uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/10">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-400">
                  {col.links.map((lnk) => (
                    <li key={lnk}>
                      <a
                        href="#hero"
                        className="hover:text-[#e51c23] transition-colors"
                      >
                        {lnk}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar with THE MONA NEWS Logo & Contact Info */}
          <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">
                  {content.header.logoPrefix}
                </span>
                <span className="bg-[#e51c23] text-white text-xl font-black px-2 py-0.5 rounded-sm">
                  {content.header.logoHighlight}
                </span>
              </div>
              <div className="text-xs text-gray-400 space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e51c23] shrink-0" />
                  <span>{content.business.address}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#e51c23]" />
                    {content.business.phone.join(" - ")}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#e51c23]" />
                    {content.business.email[0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                {content.business.tagline}
              </div>
              <p className="text-[11px] text-gray-500 text-center lg:text-right">
                {content.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionBarHeader({
  title,
  actionText,
}: {
  title: string;
  actionText: string;
}) {
  return (
    <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <span className="w-2 h-6 bg-[#e51c23] rounded-sm" />
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>
      <a
        href="#feed"
        className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-gray-500 hover:text-[#e51c23] transition-colors"
      >
        {actionText}
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

function TallOverlayCard({ card }: { card: ENewsArticleCard }) {
  return (
    <article className="relative rounded-xl overflow-hidden group min-h-[340px] flex flex-col justify-end shadow-sm cursor-pointer">
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
      <div className="relative z-10 p-5 text-white">
        <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
          {card.categories.map((cat) => (
            <span
              key={cat.label}
              className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded text-white"
              style={{ backgroundColor: cat.color }}
            >
              {cat.label}
            </span>
          ))}
        </div>
        <h3 className="text-sm sm:text-base font-extrabold leading-snug mb-2.5 group-hover:text-amber-300 transition-colors">
          {card.title}
        </h3>
        <div className="text-[11px] text-gray-300">
          {card.author} • {card.date}
        </div>
      </div>
    </article>
  );
}

export default DemoTemplateRenderer;
