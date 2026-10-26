'use client';

import React, { useState } from 'react';
import {
  Phone,
  Search,
  ShoppingBag,
  MapPin,
  Play,
  ChevronRight,
  Gem,
  Send,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  User,
  Menu,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh11Data,
  type StudioChupAnh11Data,
  type DojiProductItem,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh11Data> & Record<string, unknown>;
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh11Data, incomingData);

  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(1);
  const [activeNewsTab, setActiveNewsTab] = useState<'promo' | 'jewelry'>('promo');
  const [activeVideo, setActiveVideo] = useState(data.videoSection.videos[0]);
  const [selectedProduct, setSelectedProduct] = useState<DojiProductItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredProducts = data.featuredProducts.items.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#222222] font-sans">
      {/* TOP WHITE UTILITY BAR (Matches SC011 Top Bar) */}
      <div className="bg-white border-b border-neutral-200 text-xs text-neutral-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left Quick Links */}
          <div className="hidden md:flex items-center gap-3">
            {data.topUtilityLinks.map((lnk, idx) => (
              <React.Fragment key={lnk}>
                <a href="#san-pham-noi-bat" className="hover:text-[#d61f26] transition-colors">
                  {lnk}
                </a>
                {idx < data.topUtilityLinks.length - 1 && (
                  <span className="text-neutral-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Center System & Hotline */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-medium">
            <a
              href="#lien-he"
              className="hidden sm:inline-flex items-center gap-1 text-neutral-700 hover:text-[#d61f26]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d61f26]" />
              <span>HỆ THỐNG PHÂN PHỐI & STUDIO</span>
            </a>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <a
              href={`tel:${data.business.phone[0]}`}
              className="inline-flex items-center gap-1 text-[#d61f26] font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>HOTLINE: {data.business.phone[0]}</span>
            </a>
          </div>

          {/* Right Search Input + Auth + Cart */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <div className="relative hidden sm:block">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm mã kim cương, nhẫn cưới..."
                className="border border-neutral-300 rounded-full pl-3 pr-8 py-1 text-xs w-48 focus:outline-none focus:border-[#d61f26]"
              />
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('san-pham-noi-bat');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 hover:text-[#d61f26] cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Đăng nhập</span>
            </button>
            <span className="text-neutral-300">|</span>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('san-pham-noi-bat');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-neutral-800 hover:text-[#d61f26] font-medium cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#d61f26]" />
              <span>Giỏ hàng ({cartCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN RUBY RED NAVIGATION BAR (#d61f26) */}
      <header className="bg-[#d61f26] text-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/15 border border-amber-300/70 flex items-center justify-center">
                <Gem className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-extrabold tracking-wider leading-none">
                  {data.business.name}
                </div>
                <div className="text-[9px] tracking-[0.22em] text-amber-200 uppercase mt-0.5">
                  MONA JEWELRY
                </div>
              </div>
            </a>

            {/* Desktop Menu Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-bold uppercase tracking-wider">
              {data.mainNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 hover:text-amber-200 transition-colors border-b-2 border-transparent hover:border-amber-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xs cursor-pointer"
              aria-label="Menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileNavOpen && (
            <div className="lg:hidden py-3 border-t border-white/20 flex flex-col gap-2 text-xs font-bold uppercase">
              {data.mainNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="py-1.5 hover:text-amber-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO BANNER: DEEP ROYAL MIDNIGHT BLUE (#060b3b) WITH GOLD CALLIGRAPHY & RUBY JEWELRY */}
      <section className="relative bg-gradient-to-r from-[#050930] via-[#091352] to-[#050a36] text-white overflow-hidden">
        {/* Starry sparkle background effect */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #f5c542 1px, transparent 1px), radial-gradient(circle at 75% 25%, #ffffff 1.5px, transparent 1.5px), radial-gradient(circle at 60% 75%, #f5c542 1px, transparent 1px)',
            backgroundSize: '120px 120px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy & Gold Script Title */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-amber-300/40 rounded-full px-4 py-1 text-xs text-amber-200 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.hero.englishSub}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-[#f5c542] drop-shadow-sm leading-tight">
                {data.hero.scriptTitle}
              </h1>

              <div className="mt-5 space-y-1.5">
                <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-white/90 font-semibold">
                  {data.hero.collectionTitle}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase">
                  {data.hero.collectionHighlight}
                </h2>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#san-pham-noi-bat"
                  className="inline-flex items-center gap-2 bg-white text-[#091352] hover:bg-[#f5c542] hover:text-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-lg transition-all"
                >
                  <span>{data.hero.ctaText}</span>
                  <Play className="w-3.5 h-3.5 fill-current" />
                </a>
                <a
                  href="#video-phong-su"
                  className="inline-flex items-center gap-2 border border-amber-300/60 text-amber-200 hover:bg-white/10 text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-colors"
                >
                  <span>Xem Phim Cưới 4K</span>
                </a>
              </div>
            </div>

            {/* Right Circular Couple Medallion + Ruby/Diamond Jewelry Showcase */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Circular Couple Frame */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full p-1.5 bg-gradient-to-tr from-[#f5c542] via-amber-200 to-[#d61f26] shadow-2xl shrink-0">
                <img
                  src={data.hero.couplePortrait}
                  alt="Cô dâu chú rể DojiBridal"
                  className="w-full h-full object-cover rounded-full border-4 border-[#060b3b]"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#d61f26] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  Phóng Sự Cưới
                </span>
              </div>

              {/* Ruby & Diamond Necklace Card */}
              <div className="relative w-64 sm:w-72 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl p-4 text-center shadow-2xl">
                <img
                  src={data.hero.jewelryShowcaseImage}
                  alt={data.hero.collectionHighlight}
                  className="w-full h-44 object-cover rounded-lg"
                />
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-amber-300">
                  BST Ruby & Kim Cương 18K
                </p>
                <p className="text-[11px] text-white/80 mt-0.5">
                  Kiểm định GIA • Chế tác tinh xảo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: 3 HORIZONTAL PROMO BANNERS (99 Wedding Rings, Diamond House, Gems City) */}
      <section className="py-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.promoBanners.map((banner) => (
              <a
                key={banner.id}
                href="#san-pham-noi-bat"
                className={`group relative h-36 rounded-xs overflow-hidden bg-gradient-to-r ${banner.bgClass} text-white p-5 flex items-center justify-between shadow-xs`}
              >
                <div className="relative z-10 max-w-[62%]">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 bg-black/25 px-2 py-0.5 mb-1.5">
                    {banner.eyebrow}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase leading-snug">
                    {banner.title}
                  </h3>
                  <p className="text-[11px] text-white/80 mt-1 line-clamp-2">{banner.subtitle}</p>
                </div>
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/30 shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SẢN PHẨM NỔI BẬT (5x2 = 10 Bordered Grid Cells with Red Price) */}
      <section id="san-pham-noi-bat" className="py-12 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex items-center justify-between border-b-2 border-[#d61f26] pb-2.5 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#d61f26] text-white flex items-center justify-center">
                <Search className="w-3.5 h-3.5" />
              </span>
              <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#222222]">
                {data.featuredProducts.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-[#d61f26] cursor-pointer"
            >
              <span>{data.featuredProducts.viewAllText}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 5 Columns x 2 Rows Bordered White Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white border-t border-l border-neutral-200">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedProduct(item);
                  setCartCount((c) => c + 1);
                }}
                className="group border-r border-b border-neutral-200 p-4 flex flex-col justify-between hover:shadow-lg transition-all bg-white cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 text-center mb-2">
                    {item.categoryLabel}
                  </div>
                  <div className="aspect-square overflow-hidden bg-[#fafafa] mb-3 p-2 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs text-neutral-700 font-medium text-center line-clamp-2 leading-relaxed group-hover:text-[#d61f26] transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-neutral-100 text-center">
                  <p className="text-[10px] text-neutral-400 mb-0.5">{item.specTag}</p>
                  <p className="text-sm font-extrabold text-[#d61f26]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TIN KHUYẾN MÃI | TIN TRANG SỨC (Tabbed Header + 3 White Cards) */}
      <section id="tin-tuc" className="py-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-neutral-300 pb-2.5 mb-6">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setActiveNewsTab('promo')}
                className={`text-sm sm:text-base font-extrabold uppercase tracking-wider cursor-pointer transition-colors ${
                  activeNewsTab === 'promo'
                    ? 'text-[#d61f26] border-b-2 border-[#d61f26] pb-1'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {data.newsSection.tab1Label}
              </button>
              <span className="text-neutral-300">|</span>
              <button
                type="button"
                onClick={() => setActiveNewsTab('jewelry')}
                className={`text-sm sm:text-base font-extrabold uppercase tracking-wider cursor-pointer transition-colors ${
                  activeNewsTab === 'jewelry'
                    ? 'text-[#d61f26] border-b-2 border-[#d61f26] pb-1'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {data.newsSection.tab2Label}
              </button>
            </div>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-[#d61f26]"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.newsSection.articles.map((art) => (
              <article
                key={art.id}
                className="bg-white border border-neutral-200 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#222222] hover:text-[#d61f26] leading-snug transition-colors">
                      {art.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>Ngày đăng: {art.date}</span>
                    <span className="text-[#d61f26] font-semibold">Đọc tiếp →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VIDEO (1 Large Left Wedding Proposal Video + 2 Stacked Right Videos) */}
      <section id="video-phong-su" className="py-10 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 border-b border-neutral-300 pb-2.5 mb-6">
            <span className="w-6 h-6 rounded-full bg-[#d61f26] text-white flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
            <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#222222]">
              {data.videoSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Large Featured Video Player */}
            <div className="lg:col-span-8 bg-black relative group overflow-hidden rounded-xs shadow-sm">
              <div className="aspect-video relative">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Center Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#d61f26] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Video Title Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="inline-block bg-[#d61f26] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 mb-2">
                    PHIM CƯỚI TIÊU ĐIỂM • {activeVideo.duration}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold leading-snug">
                    {activeVideo.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1">{activeVideo.views}</p>
                </div>
              </div>
            </div>

            {/* Right 2 Stacked Secondary Videos */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {data.videoSection.videos.slice(1).map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className="group bg-white border border-neutral-200 overflow-hidden cursor-pointer hover:border-[#d61f26] transition-colors flex flex-col flex-1"
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-black">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/70 border border-white text-white flex items-center justify-center group-hover:bg-[#d61f26] transition-colors">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5">
                      {vid.duration}
                    </span>
                  </div>
                  <div className="p-3.5">
                    <h4 className="text-xs font-bold text-[#222222] group-hover:text-[#d61f26] line-clamp-2 leading-snug">
                      {vid.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-1">{vid.views}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VỀ TRANG SỨC DOJIBRIDAL (White Macro Diamond Banner) */}
      <section
        id="ve-chung-toi"
        className="relative py-16 md:py-20 bg-white border-t border-neutral-200 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={data.aboutSection.backgroundImage}
            alt={data.aboutSection.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-[#222222]">
            {data.aboutSection.title}
          </h2>
          {/* Red Diamond Emblem Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <span className="w-14 h-[1px] bg-[#d61f26]" />
            <Gem className="w-4 h-4 text-[#d61f26]" />
            <span className="w-14 h-[1px] bg-[#d61f26]" />
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {data.aboutSection.description}
          </p>
          <div className="mt-6">
            <a
              href="#lien-he"
              className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d61f26] border-b-2 border-[#d61f26] pb-1 hover:text-black hover:border-black transition-colors"
            >
              {data.aboutSection.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: RED GEOMETRIC POLYGON NEWSLETTER STRIP */}
      <section
        id="lien-he"
        className="bg-gradient-to-r from-[#b8141a] via-[#d61f26] to-[#9e0e14] text-white py-8 shadow-inner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Brand + Hotline */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2.5 pr-4 sm:border-r border-white/30">
                <Gem className="w-7 h-7 text-amber-300 shrink-0" />
                <div>
                  <div className="text-lg font-extrabold tracking-wider">
                    {data.business.name}
                  </div>
                  <div className="text-[9px] tracking-[0.2em] text-amber-200 uppercase">
                    MONA BRIDAL
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Hotline: {data.business.phone[0]}</span>
              </div>
            </div>

            {/* Right Newsletter Form */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="text-center sm:text-left shrink-0">
                  <p className="text-xs font-extrabold uppercase tracking-wider">
                    {data.newsletterBanner.title}
                  </p>
                  <p className="text-[11px] text-white/80">{data.newsletterBanner.subtitle}</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newsletterEmail.trim()) return;
                    setNewsletterDone(true);
                    setNewsletterEmail('');
                  }}
                  className="flex w-full sm:w-auto flex-1 max-w-md bg-white rounded-xs overflow-hidden p-1"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={data.newsletterBanner.placeholder}
                    className="flex-1 px-3 py-1.5 text-xs text-[#222222] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#d61f26] hover:bg-black text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
              {newsletterDone && (
                <p className="text-[11px] text-amber-200 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đăng ký thành công! DojiBridal sẽ gửi ưu đãi cưới mới nhất tới bạn.</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHITE 4-COLUMN FOOTER + DARK COPYRIGHT BAR */}
      <footer className="bg-white text-neutral-700 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            {/* Col 1: Contact Details */}
            <div>
              <h4 className="font-extrabold uppercase tracking-wider text-[#222222] mb-3 pb-1.5 border-b border-neutral-200">
                LIÊN HỆ STUDIO & SHOWROOM
              </h4>
              <ul className="space-y-2 text-neutral-600 leading-relaxed">
                <li>
                  <strong>Địa chỉ:</strong> {data.business.address}
                </li>
                <li>
                  <strong>Điện thoại:</strong> {data.business.phone.join(' - ')}
                </li>
                <li>
                  <strong>Email:</strong> {data.business.email[0]}
                </li>
                <li className="text-[11px] text-[#d61f26] font-semibold pt-1">
                  {data.business.distributionNote}
                </li>
              </ul>
            </div>

            {/* Col 2: VỀ CHÚNG TÔI */}
            <div>
              <h4 className="font-extrabold uppercase tracking-wider text-[#222222] mb-3 pb-1.5 border-b border-neutral-200">
                VỀ CHÚNG TÔI
              </h4>
              <ul className="space-y-2 text-neutral-600">
                {data.footer.aboutLinks.map((lnk) => (
                  <li key={lnk}>
                    <a href="#ve-chung-toi" className="hover:text-[#d61f26] transition-colors">
                      {lnk}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: DANH MỤC SẢN PHẨM */}
            <div>
              <h4 className="font-extrabold uppercase tracking-wider text-[#222222] mb-3 pb-1.5 border-b border-neutral-200">
                DANH MỤC SẢN PHẨM
              </h4>
              <ul className="space-y-2 text-neutral-600">
                {data.footer.categoryLinks.map((lnk) => (
                  <li key={lnk}>
                    <a href="#san-pham-noi-bat" className="hover:text-[#d61f26] transition-colors">
                      {lnk}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: KẾT NỐI VỚI CHÚNG TÔI & BỘ CÔNG THƯƠNG BADGE */}
            <div>
              <h4 className="font-extrabold uppercase tracking-wider text-[#222222] mb-3 pb-1.5 border-b border-neutral-200">
                KẾT NỐI VỚI CHÚNG TÔI
              </h4>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Theo dõi DojiBridal để cập nhật bảng giá kim cương GIA mỗi ngày và lịch triển lãm cưới.
              </p>
              <div className="space-y-2">
                {data.footer.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="inline-flex items-center gap-2 bg-[#d61f26]/10 border border-[#d61f26]/30 text-[#d61f26] px-3 py-1.5 rounded-xs font-bold text-[10px] mr-2"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dark Copyright Strip */}
        <div className="bg-[#222222] text-white/75 py-3.5 text-center text-xs">
          <div className="max-w-7xl mx-auto px-4">{data.business.copyright}</div>
        </div>
      </footer>

      {/* PRODUCT QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 border-t-4 border-[#d61f26] shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold text-[#d61f26] uppercase mb-3">
              <Award className="w-4 h-4" />
              <span>Đã lưu vào danh sách tư vấn DojiBridal</span>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-24 h-24 object-cover border border-neutral-200 shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase text-neutral-400">
                  {selectedProduct.categoryLabel}
                </span>
                <h4 className="text-xs font-bold text-[#222222] mt-0.5">{selectedProduct.name}</h4>
                <p className="text-sm font-extrabold text-[#d61f26] mt-1">
                  {selectedProduct.price}
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-xs font-semibold border border-neutral-300 hover:border-black cursor-pointer"
              >
                Đóng
              </button>
              <a
                href="#lien-he"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2 text-xs font-bold uppercase bg-[#d61f26] text-white hover:bg-black"
              >
                Đặt lịch thử tại Showroom
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
