'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  ShoppingBag,
  Menu,
  X,
  Crown,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Search,
  Heart,
  Share2,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh10Data,
  type StudioChupAnh10Data,
  type SilverProductItem,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh10Data> & Record<string, unknown>;
}

function FiligreeDivider({ light = false }: { light?: boolean }) {
  const strokeColor = light ? 'rgba(255,255,255,0.75)' : 'rgba(60,60,60,0.65)';
  return (
    <div className="flex items-center justify-center my-2.5 select-none" aria-hidden="true">
      <svg width="150" height="18" viewBox="0 0 150 18" fill="none">
        <path
          d="M5 9H56M94 9H145"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M65 9C68 4 72 4 75 9C78 14 82 14 85 9"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="75" cy="9" r="2.2" fill={strokeColor} />
        <circle cx="59" cy="9" r="1.4" fill={strokeColor} />
        <circle cx="91" cy="9" r="1.4" fill={strokeColor} />
      </svg>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh10Data, incomingData);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(2);
  const [selectedProduct, setSelectedProduct] = useState<SilverProductItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('Tất cả');

  const handleAddToCart = (item: SilverProductItem) => {
    setCartCount((prev) => prev + 1);
    setSelectedProduct(item);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#262626] selection:text-white">
      {/* HERO + OVERLAY HEADER (Matches SC010 Warm Taupe/Silver Portrait Hero) */}
      <section
        id="trang-chu"
        className="relative min-h-[580px] lg:min-h-[680px] bg-[#8c857b] text-white overflow-hidden flex flex-col justify-between"
      >
        {/* Background Portrait Image */}
        <div className="absolute inset-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.business.name}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a534a]/85 via-[#736b61]/55 to-black/30" />
        </div>

        {/* Top Transparent Navigation Bar */}
        <header className="relative z-20 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Left Contact Info */}
              <div className="hidden md:flex items-center gap-5 text-xs tracking-wide text-white/90">
                <a
                  href={`mailto:${data.business.email[0]}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-white/80" />
                  <span>{data.business.email[0]}</span>
                </a>
                <span className="text-white/40">|</span>
                <a
                  href={`tel:${data.business.phone[0]}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-white/80" />
                  <span>{data.business.phone[0]}</span>
                </a>
              </div>

              {/* Center Royal Emblem Logo */}
              <a
                href="#trang-chu"
                className="flex flex-col items-center text-center group mx-auto md:mx-0"
              >
                <div className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center bg-black/15 backdrop-blur-xs group-hover:border-white transition-colors">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <span className="mt-1 text-base sm:text-lg font-serif tracking-[0.28em] font-semibold uppercase">
                  {data.business.name}
                </span>
                <span className="text-[9px] tracking-[0.35em] text-white/75 uppercase">
                  {data.business.subName}
                </span>
              </a>

              {/* Right Cart & Hamburger */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('san-pham-moi');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 border border-white/70 hover:bg-white hover:text-[#262626] px-3.5 py-1.5 text-xs uppercase tracking-widest transition-all cursor-pointer"
                >
                  <span>GIỎ HÀNG</span>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span className="bg-white/20 px-1.5 py-0.5 rounded-xs text-[10px] font-bold">
                    {cartCount}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="p-2 border border-white/50 hover:border-white text-white transition-colors cursor-pointer"
                  aria-label="Mở menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Subtle Desktop Sub-Navigation Bar */}
            <nav className="hidden lg:flex items-center justify-center gap-8 pt-3 mt-3 border-t border-white/15 text-[11px] tracking-[0.18em] uppercase text-white/85">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Slide-down Mobile / Full Menu */}
          {mobileMenuOpen && (
            <div className="bg-[#1f1f1f]/95 backdrop-blur-md border-t border-white/15 px-6 py-5 text-white">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs uppercase tracking-widest">
                  {data.navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-amber-200 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="text-xs text-white/70 flex items-center gap-4">
                  <span>Hotline: {data.business.phone[0]}</span>
                  <span>•</span>
                  <span>{data.business.workingHours}</span>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Hero Center-Left Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 my-auto">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/85 mb-3">
              {data.hero.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal leading-[1.18] tracking-wide text-white drop-shadow-xs">
              {data.hero.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-light">
              {data.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#san-pham-moi"
                className="inline-block border border-white/85 bg-white/10 hover:bg-white hover:text-[#222222] text-white text-xs uppercase tracking-[0.24em] px-8 py-3.5 transition-all duration-300"
              >
                {data.hero.ctaText}
              </a>
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/90 hover:text-white border-b border-white/50 pb-1 transition-colors"
              >
                <span>{data.hero.secondaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/75 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-200 shrink-0" />
              <span>{data.hero.highlightNote}</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: 4 SQUARE ORNAMENTAL CATEGORY CARDS */}
      <section id="danh-muc" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setActiveCategoryFilter(cat.title);
                  const el = document.getElementById('san-pham-moi');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative aspect-square overflow-hidden bg-[#1a1a1a] cursor-pointer shadow-xs"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-4 border border-white/25 pointer-events-none group-hover:border-white/60 transition-colors" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <FiligreeDivider light />
                  <h3 className="text-base sm:text-lg font-serif tracking-[0.14em] uppercase font-medium mt-1">
                    {cat.title}
                  </h3>
                  {cat.badge && (
                    <span className="mt-1 text-[11px] text-white/75 tracking-wider">
                      {cat.badge}
                    </span>
                  )}
                  <span className="mt-3 inline-block text-xs tracking-widest text-white/90 border-b border-white/60 pb-0.5 group-hover:text-amber-200 group-hover:border-amber-200 transition-colors">
                    {cat.ctaText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PITCH-BLACK DIAMOND MACRO BANNER ("Cuộc Sống Thêm Thú Vị") */}
      <section className="relative py-20 md:py-24 bg-[#0a0b0d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-45">
          <img
            src={data.midBanner.backgroundImage}
            alt={data.midBanner.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#0a0b0d]/80 to-[#07080a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FiligreeDivider light />
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mt-2">
            {data.midBanner.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-wide text-white">
            {data.midBanner.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            {data.midBanner.description}
          </p>
          <div className="mt-8">
            <a
              href="#san-pham-giam-gia"
              className="inline-block border border-white/80 hover:bg-white hover:text-[#0a0b0d] text-white text-xs uppercase tracking-[0.25em] px-8 py-3 transition-all duration-300"
            >
              {data.midBanner.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: SẢN PHẨM MỚI (4 Cards with Circular Top-Left Badges) */}
      <section id="san-pham-moi" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.18em] uppercase text-[#222222]">
              {data.newProductsSection.title}
            </h2>
            <FiligreeDivider />
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              {data.newProductsSection.subtitle}
            </p>
            {activeCategoryFilter !== 'Tất cả' && (
              <div className="mt-3 inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                <span>Đang xem danh mục: {activeCategoryFilter}</span>
                <button
                  type="button"
                  onClick={() => setActiveCategoryFilter('Tất cả')}
                  className="text-neutral-500 hover:text-black underline cursor-pointer"
                >
                  Xem tất cả
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {data.newProductsSection.items.map((product) => (
              <div
                key={product.id}
                className="group bg-[#fafafa] border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300 flex flex-col"
              >
                {/* Product Image Area */}
                <div className="relative aspect-square bg-[#f3f3f3] overflow-hidden p-4">
                  {product.badge && (
                    <span className="absolute top-3.5 left-3.5 z-10 w-10 h-10 rounded-full bg-[#333333] text-white text-[11px] font-medium flex items-center justify-center shadow-xs">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Quick Action Hover Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white text-[11px] uppercase tracking-wider px-4 py-2 font-medium transition-colors cursor-pointer"
                    >
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>

                {/* Product Caption */}
                <div className="p-4 text-center flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-sm font-medium text-[#222222] group-hover:text-black line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-1">{product.specs}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-center gap-2">
                    {product.oldPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="text-sm font-bold text-[#222222]">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SẢN PHẨM GIẢM GIÁ (4 Cards with Discount Circle Badges) */}
      <section id="san-pham-giam-gia" className="py-12 md:py-16 bg-[#f9f9f9] border-t border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.18em] uppercase text-[#222222]">
              {data.saleProductsSection.title}
            </h2>
            <FiligreeDivider />
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              {data.saleProductsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {data.saleProductsSection.items.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square bg-[#f4f4f4] overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-3.5 left-3.5 z-10 w-10 h-10 rounded-full bg-[#3a3a3a] text-white text-[11px] font-semibold flex items-center justify-center shadow-xs">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-[#222222] hover:bg-[#222222] hover:text-white text-[11px] uppercase tracking-wider px-4 py-2 font-medium transition-colors cursor-pointer"
                    >
                      Chọn mẫu này
                    </button>
                  </div>
                </div>

                <div className="p-4 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-sm font-medium text-[#222222] line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500 mt-1">{product.specs}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-center gap-2.5">
                    {product.oldPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="text-sm font-bold text-[#222222]">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FULL-WIDTH BLACK FLOATING DIAMONDS & BRIDE PORTRAIT BANNER */}
      <section id="lookbook" className="relative bg-[#08090c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Floating Diamonds Visual + Copy */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 relative z-10">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3.5 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>{data.featureSplitBanner.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal tracking-wide leading-snug text-white">
              {data.featureSplitBanner.title}
            </h2>
            <p className="mt-2 text-sm text-amber-100/85 font-serif italic">
              {data.featureSplitBanner.subtitle}
            </p>
            <p className="mt-4 text-sm text-white/75 leading-relaxed font-light">
              {data.featureSplitBanner.description}
            </p>

            {/* 3 Highlight Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/15 py-5">
              {data.featureSplitBanner.stats.map((st) => (
                <div key={st.label}>
                  <div className="text-xl sm:text-2xl font-serif font-semibold text-white">
                    {st.value}
                  </div>
                  <div className="text-[11px] text-white/65 mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 border border-white/80 hover:bg-white hover:text-[#08090c] px-7 py-3 text-xs uppercase tracking-[0.22em] transition-all"
              >
                <span>{data.featureSplitBanner.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Model in Evening Gown Wearing Silver & Sapphire Jewelry */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] lg:h-full min-h-[420px]">
            <img
              src={data.featureSplitBanner.rightImage}
              alt={data.featureSplitBanner.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#08090c] via-[#08090c]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 6: BÀI MỚI ĐĂNG (3 Editorial Lookbook & Bridal Jewelry Cards) */}
      <section id="tin-tuc" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-[0.18em] uppercase text-[#222222]">
              {data.blogSection.title}
            </h2>
            <FiligreeDivider />
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              {data.blogSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.blogSection.posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col bg-white border border-neutral-200/70 hover:border-neutral-400 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 bg-[#262626]/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222222] leading-snug group-hover:text-neutral-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="w-8 h-[1px] bg-neutral-300 mx-auto my-3" />
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <p className="mt-4 text-[11px] text-neutral-400 italic">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SPLIT DARK CHARCOAL NEWSLETTER BOX + INTERACTIVE STUDIO MAP */}
      <section id="lien-he" className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Dark Charcoal Box: ĐĂNG KÝ NHẬN THÔNG BÁO */}
            <div className="lg:col-span-6 bg-[#2c2c2c] text-white p-8 sm:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg sm:text-xl font-serif tracking-[0.18em] uppercase">
                {data.newsletterAndMap.newsletterTitle}
              </h3>
              <FiligreeDivider light />
              <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-md leading-relaxed">
                {data.newsletterAndMap.newsletterSubtitle}
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-6 w-full max-w-md flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={data.newsletterAndMap.placeholder}
                  className="flex-1 bg-white text-[#222222] px-4 py-2.5 text-xs focus:outline-none"
                />
                <button
                  type="submit"
                  className="border border-white/80 hover:bg-white hover:text-[#2c2c2c] text-white text-xs uppercase tracking-[0.2em] px-6 py-2.5 transition-colors cursor-pointer shrink-0"
                >
                  {data.newsletterAndMap.buttonText}
                </button>
              </form>

              {newsletterSuccess && (
                <p className="mt-3 text-xs text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cảm ơn bạn! Silver Studio đã gửi ưu đãi 20% vào hộp thư của bạn.</span>
                </p>
              )}
            </div>

            {/* Right Interactive Map Visual & Studio Address Card */}
            <div className="lg:col-span-6 relative min-h-[260px] bg-[#e9e6df] border border-neutral-300 overflow-hidden flex flex-col justify-between p-6">
              {/* Stylized Street Map Grid Pattern */}
              <div
                className="absolute inset-0 opacity-45 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                }}
              />
              <div className="relative z-10 bg-white/95 backdrop-blur-xs p-4 border border-neutral-200 shadow-xs max-w-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#222222]">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Bản Đồ Showroom & Phim Trường</span>
                </div>
                <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                  {data.business.address}
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {data.newsletterAndMap.studioLocations.map((loc) => (
                  <div
                    key={loc.name}
                    className="bg-white/95 p-3.5 border border-neutral-200 text-xs"
                  >
                    <p className="font-semibold text-[#222222]">{loc.name}</p>
                    <p className="text-neutral-500 text-[11px] mt-1">{loc.address}</p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-700 font-medium">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {loc.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {loc.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK CHARCOAL FOOTER (Matches SC010 Footer with Crown Logo & Payment Icons) */}
      <footer className="bg-[#262626] text-white/80 pt-14 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10 items-center">
            {/* Column 1: Crown Emblem Logo */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-serif tracking-[0.28em] text-white font-semibold uppercase">
                    {data.business.name}
                  </div>
                  <div className="text-[10px] tracking-[0.32em] text-white/60 uppercase">
                    {data.business.subName}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/65 leading-relaxed max-w-sm">
                {data.business.description}
              </p>
            </div>

            {/* Column 2 & 3: Navigation Links */}
            <div className="md:col-span-5 grid grid-cols-2 gap-6 text-xs uppercase tracking-[0.16em]">
              <ul className="space-y-2.5">
                {data.footer.col1Links.map((lbl) => (
                  <li key={lbl}>
                    <a href="#san-pham-moi" className="hover:text-white transition-colors">
                      {lbl}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {data.footer.col2Links.map((lbl) => (
                  <li key={lbl}>
                    <a href="#lien-he" className="hover:text-white transition-colors">
                      {lbl}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Social Circles & Hotline */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-2.5">
                {[Globe, Share2, Heart, ShieldCheck].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#lien-he"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-[#262626] flex items-center justify-center transition-colors"
                    aria-label="Mạng xã hội"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
              <div className="text-xs text-white/70 text-center md:text-right">
                <p>Hotline tư vấn: {data.business.phone[0]}</p>
                <p className="mt-0.5">{data.business.email[0]}</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Payment Badges */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
            <p>{data.business.copyright}</p>
            <div className="flex flex-wrap items-center gap-2">
              {data.footer.paymentMethods.map((pm) => (
                <span
                  key={pm}
                  className="px-2.5 py-1 bg-white/10 text-white/85 rounded-xs text-[10px] font-semibold tracking-wider uppercase"
                >
                  {pm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK CART MODAL WHEN USER CLICKS PRODUCT */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 border border-neutral-200 shadow-xl relative">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã thêm vào giỏ hàng Silver Studio</span>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover bg-neutral-100 shrink-0"
              />
              <div>
                <h4 className="text-sm font-semibold text-[#222222]">{selectedProduct.name}</h4>
                <p className="text-xs text-neutral-500 mt-0.5">{selectedProduct.specs}</p>
                <p className="text-sm font-bold text-[#222222] mt-1">{selectedProduct.price}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-xs uppercase tracking-wider border border-neutral-300 hover:border-black cursor-pointer"
              >
                Tiếp tục xem
              </button>
              <a
                href="#lien-he"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider bg-[#262626] text-white hover:bg-black"
              >
                Đặt lịch thử mẫu
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
