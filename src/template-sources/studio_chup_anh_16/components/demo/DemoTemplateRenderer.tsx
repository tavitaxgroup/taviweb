'use client';

import React, { useState } from 'react';
import {
  Search,
  User,
  Film,
  Check,
  ChevronDown,
  Globe,
  Share2,
  Play,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh16Data,
  type StudioChupAnh16Data,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh16Data> & Record<string, unknown>;
}

function RedLineSectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-[#1a1a1a] shrink-0">
        {title}
      </h2>
      <div className="h-[2px] bg-[#d32f2f] flex-1" />
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh16Data, incomingData);

  const [activeFilter, setActiveFilter] = useState(data.latestFeedSection.filterTabs[0]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredLatest = data.latestFeedSection.items.filter((item) => {
    const matchTab =
      activeFilter === 'Mới nhất' ||
      item.category.toLowerCase() === activeFilter.toLowerCase();
    const matchSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* TOP HEADER (Matches SC016 Centered Red Emblem + Date Row + Sub-Nav Row) */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Upper Row: Logo + Vertical Divider + Date */}
          <div className="py-3 flex items-center justify-center gap-4 border-b border-neutral-100">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d32f2f] text-white flex items-center justify-center font-black text-xs shadow-xs">
                VM
              </div>
              <div className="leading-none">
                <span className="text-base sm:text-lg font-black tracking-tight text-[#d32f2f] block">
                  {data.business.name}
                </span>
                <span className="text-[8px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                  {data.business.subName}
                </span>
              </div>
            </a>
            <div className="h-6 w-[1px] bg-neutral-300" />
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
              {data.business.dateDisplay}
            </div>
          </div>

          {/* Lower Row: Navigation Links + Search/User Icons */}
          <div className="h-11 flex items-center justify-between gap-4">
            <div className="w-16 hidden md:block" />
            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-neutral-700">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#d32f2f] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#tin-moi-nhat"
                className="inline-flex items-center gap-0.5 hover:text-[#d32f2f]"
              >
                <span>Thêm</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </nav>

            <div className="flex items-center gap-2.5 ml-auto md:ml-0">
              {searchOpen && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm tin media..."
                  className="border border-neutral-300 rounded-full px-3 py-1 text-xs w-40 focus:outline-none focus:border-[#d32f2f]"
                />
              )}
              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-[#d32f2f] transition-colors cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
              <a
                href="#tin-moi-nhat"
                className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-[#d32f2f] transition-colors"
                aria-label="Tài khoản"
              >
                <User className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-1.5 text-neutral-700 cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-neutral-100 flex flex-wrap gap-3 text-xs font-semibold">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#d32f2f]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO BANNER: WIDE CINEMATIC IMAGE + CENTERED BOLD HEADLINE BELOW */}
      <section className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="aspect-[16/8] overflow-hidden bg-black rounded-2xs mb-4">
            <img
              src={data.heroBanner.image}
              alt={data.heroBanner.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1a1a1a] max-w-3xl mx-auto leading-snug">
            {data.heroBanner.title}
          </h1>
          <p className="mt-1.5 text-[11px] text-neutral-400">{data.heroBanner.timestamp}</p>
        </div>
      </section>

      {/* UPPER 2-COLUMN SECTION: TIN HOT (8 COLS) + XEM NHIỀU (4 COLS) */}
      <section id="tin-hot" className="py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT 8 COLS: TIN HOT */}
            <div className="lg:col-span-8">
              <RedLineSectionHeader title={data.hotNewsSection.title} />

              {/* Lead Horizontal Story */}
              <article className="group grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6 pb-6 border-b border-neutral-100">
                <div className="sm:col-span-6 aspect-[16/10] overflow-hidden bg-neutral-100 rounded-2xs">
                  <img
                    src={data.hotNewsSection.lead.image}
                    alt={data.hotNewsSection.lead.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-6 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d32f2f] mb-1">
                    {data.hotNewsSection.lead.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#1a1a1a] group-hover:text-[#d32f2f] leading-snug transition-colors">
                    {data.hotNewsSection.lead.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-[#d32f2f] font-medium">
                    {data.hotNewsSection.lead.author}
                  </p>
                  <p className="text-[10px] text-neutral-400">
                    {data.hotNewsSection.lead.timestamp}
                  </p>
                </div>
              </article>

              {/* 2x3 Grid of Sub-Stories */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {data.hotNewsSection.grid.map((story) => (
                  <article key={story.id} className="group flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100 rounded-2xs mb-2.5">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-xs font-extrabold text-[#1a1a1a] group-hover:text-[#d32f2f] leading-snug line-clamp-3">
                      {story.title}
                    </h4>
                    <p className="mt-1.5 text-[10px] text-[#d32f2f] font-medium">
                      {story.author}
                    </p>
                    <p className="text-[10px] text-neutral-400">{story.timestamp}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT 4 COLS: XEM NHIỀU + TITAN HARDWARE CARD */}
            <aside className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-[#1a1a1a] pb-2 border-b border-neutral-200 mb-3">
                  {data.mostViewedSidebar.title}
                </h3>
                <ul className="divide-y divide-neutral-100">
                  {data.mostViewedSidebar.items.map((item) => (
                    <li key={item.id} className="py-2.5">
                      <a
                        href="#tin-moi-nhat"
                        className="text-xs font-semibold text-neutral-700 hover:text-[#d32f2f] leading-snug block transition-colors"
                      >
                        {item.title}
                      </a>
                      <span className="text-[10px] text-neutral-400">{item.timestamp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dark Hardware Card ("TITAN RTX STUDIO") */}
              <div className="relative rounded-xl overflow-hidden bg-[#0a0e1a] text-white p-6 shadow-lg border border-neutral-800">
                <img
                  src={data.mostViewedSidebar.hardwareSpotlight.image}
                  alt={data.mostViewedSidebar.hardwareSpotlight.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="relative z-10 py-6 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                    {data.mostViewedSidebar.hardwareSpotlight.badge}
                  </span>
                  <h4 className="text-2xl font-black tracking-[0.2em] text-white mt-2">
                    {data.mostViewedSidebar.hardwareSpotlight.title}
                  </h4>
                  <p className="text-xs text-white/75 mt-2 leading-relaxed">
                    {data.mostViewedSidebar.hardwareSpotlight.subtitle}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* STACKED CATEGORY BLOCKS (TIN TỨC NỔI BẬT, CÔNG NGHỆ & THIẾT BỊ, PHIM ẢNH) */}
      {data.categoryBlocks.map((block) => (
        <section key={block.id} id={block.id} className="py-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="lg:w-8/12">
              <RedLineSectionHeader title={block.sectionTitle} />

              {/* Lead Story */}
              <article className="group grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6 pb-5 border-b border-neutral-100">
                <div className="sm:col-span-6 aspect-[16/10] overflow-hidden bg-neutral-100 rounded-2xs">
                  <img
                    src={block.leadStory.image}
                    alt={block.leadStory.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="sm:col-span-6 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d32f2f] mb-1">
                    {block.leadStory.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#1a1a1a] group-hover:text-[#d32f2f] leading-snug">
                    {block.leadStory.title}
                  </h3>
                  <p className="mt-2 text-[10px] text-[#d32f2f] font-medium">
                    {block.leadStory.author}
                  </p>
                  <p className="text-[10px] text-neutral-400">{block.leadStory.timestamp}</p>
                </div>
              </article>

              {/* 3-Column Sub Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {block.gridStories.map((st) => (
                  <article key={st.id} className="group flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100 rounded-2xs mb-2.5">
                      <img
                        src={st.image}
                        alt={st.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-xs font-extrabold text-[#1a1a1a] group-hover:text-[#d32f2f] leading-snug line-clamp-3">
                      {st.title}
                    </h4>
                    <p className="mt-1.5 text-[10px] text-[#d32f2f] font-medium">{st.author}</p>
                    <p className="text-[10px] text-neutral-400">{st.timestamp}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FULL-WIDTH DARK BAND: BAN BIÊN TẬP CHỌN (4 Colorful Show Tiles) */}
      <section
        id="ban-bien-tap"
        className="my-10 py-12 bg-gradient-to-r from-[#0e1021] via-[#171936] to-[#121324] text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-base sm:text-lg font-extrabold uppercase tracking-[0.2em] mb-8">
            {data.editorsPickShows.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.editorsPickShows.shows.map((show) => (
              <a
                key={show.id}
                href="#tin-moi-nhat"
                className="group flex flex-col items-center text-center"
              >
                <div
                  className={`w-full aspect-[16/10] rounded-xs bg-gradient-to-br ${show.bgClass} p-5 flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                >
                  <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-white drop-shadow-xs">
                    {show.codeTitle}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-widest text-white/80">
                    VISION ORIGINAL
                  </span>
                </div>
                <h3 className="mt-3 text-xs sm:text-sm font-extrabold text-white group-hover:text-amber-300">
                  {show.viTitle}
                </h3>
                <p className="text-[11px] text-white/60 mt-0.5">{show.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM FILTERABLE FEED: TIN MỚI NHẤT + RED PILL BUTTON "XEM THÊM" */}
      <section id="tin-moi-nhat" className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-[#1a1a1a] mb-4">
            {data.latestFeedSection.title}
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {data.latestFeedSection.filterTabs.map((tab) => {
              const active = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#d32f2f] text-white shadow-2xs'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {active && <Check className="w-3.5 h-3.5" />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLatest.slice(0, visibleCount).map((item) => (
              <article key={item.id} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 rounded-2xs mb-3 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#1a1a1a] group-hover:text-[#d32f2f] leading-snug transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[10px] text-[#d32f2f] font-medium">{item.author}</p>
                <p className="text-[10px] text-neutral-400">{item.timestamp}</p>
              </article>
            ))}
          </div>

          {/* Red Pill "XEM THÊM" Button */}
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  prev >= filteredLatest.length ? 6 : filteredLatest.length
                )
              }
              className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-extrabold uppercase tracking-widest px-8 py-2.5 rounded-full shadow-sm transition-colors cursor-pointer"
            >
              {visibleCount >= filteredLatest.length
                ? 'THU GỌN DANH SÁCH'
                : data.latestFeedSection.loadMoreText}
            </button>
          </div>
        </div>
      </section>

      {/* DARK FOOTER (Matches SC016 Footer) */}
      <footer className="bg-[#111319] text-white/75 pt-12 pb-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-start">
            {/* Logo */}
            <div className="md:col-span-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d32f2f] text-white flex items-center justify-center font-black text-sm">
                VM
              </div>
              <div>
                <div className="text-lg font-black text-white">{data.business.name}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">
                  {data.business.subName}
                </div>
              </div>
            </div>

            {/* Links Col 1 */}
            <div className="md:col-span-3 space-y-2 text-xs font-bold uppercase tracking-wider">
              {data.footer.col1Links.map((lnk) => (
                <div key={lnk}>
                  <a href="#tin-hot" className="hover:text-white transition-colors">
                    {lnk}
                  </a>
                </div>
              ))}
            </div>

            {/* Links Col 2 */}
            <div className="md:col-span-3 space-y-2 text-xs font-bold uppercase tracking-wider">
              {data.footer.col2Links.map((lnk) => (
                <div key={lnk}>
                  <a href="#tin-moi-nhat" className="hover:text-white transition-colors">
                    {lnk}
                  </a>
                </div>
              ))}
              <p className="text-[11px] font-normal text-white/50 pt-2">
                Hotline: {data.business.phone[0]}
              </p>
            </div>

            {/* Social Icons */}
            <div className="md:col-span-2 flex items-center gap-2.5">
              {[Globe, Share2, Play].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#tin-hot"
                  className="w-8 h-8 rounded-xs bg-white/10 hover:bg-[#d32f2f] text-white flex items-center justify-center transition-colors"
                  aria-label="Mạng xã hội"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 text-center text-[11px] text-white/45">
            {data.business.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DemoTemplateRenderer;
