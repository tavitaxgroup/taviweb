'use client';

import React, { useState } from 'react';
import {
  Phone,
  Clock,
  Mail,
  MapPin,
  Search,
  ShoppingBag,
  Gem,
  Award,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Send,
  Globe,
  Share2,
  Heart,
  CheckCircle2,
  Menu,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh13Data,
  type StudioChupAnh13Data,
  type KaroProductItem,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh13Data> & Record<string, unknown>;
}

function GoldDiamondHeading({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-[0.2em] text-white">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-3">
        <span className="w-16 h-[1px] bg-[#c59d5f]/60" />
        <Gem className="w-4 h-4 text-[#c59d5f]" />
        <span className="w-16 h-[1px] bg-[#c59d5f]/60" />
      </div>
    </div>
  );
}

function WhiteProductCard({
  item,
  onSelect,
}: {
  item: KaroProductItem;
  onSelect: (p: KaroProductItem) => void;
}) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-white text-[#111111] p-4 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all duration-300 relative"
    >
      <div>
        <div className="relative aspect-square overflow-hidden bg-[#f8f8f8] mb-3.5 p-3 flex items-center justify-center">
          {item.badge && (
            <span className="absolute top-2.5 left-2.5 z-10 w-10 h-10 rounded-full bg-[#b8860b] text-white text-[11px] font-bold flex items-center justify-center shadow-md">
              {item.badge}
            </span>
          )}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 text-center">
          {item.category}
        </p>
        <h3 className="mt-1 text-xs sm:text-sm font-semibold text-center text-[#141414] group-hover:text-[#b8860b] line-clamp-2 transition-colors">
          {item.name}
        </h3>
      </div>

      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-center gap-2">
        {item.oldPrice && (
          <span className="text-xs text-neutral-400 line-through">{item.oldPrice}</span>
        )}
        <span className="text-sm font-bold text-[#b8860b]">{item.price}</span>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh13Data, incomingData);

  const [activeNav, setActiveNav] = useState('TRANG CHỦ');
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<KaroProductItem | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentTestimonial =
    data.testimonialsSection.items[
      testimonialIndex % data.testimonialsSection.items.length
    ];

  const handleSelectProduct = (item: KaroProductItem) => {
    setSelectedProduct(item);
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#c59d5f] selection:text-black">
      {/* TOP DARK UTILITY BAR */}
      <div
        id="trang-chu"
        className="bg-[#080808] border-b border-white/10 text-[11px] text-white/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5">
            <a
              href="#lien-he"
              className="inline-flex items-center gap-1.5 hover:text-[#c59d5f] transition-colors uppercase tracking-wider"
            >
              <Mail className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>LIÊN HỆ</span>
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{data.business.workingHours}</span>
            </span>
            <a
              href={`tel:${data.business.phone[0]}`}
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#c59d5f]"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59d5f]" />
              <span>{data.business.phone[0]}</span>
            </a>
          </div>
          <div className="hidden md:block text-white/50 tracking-wider">
            {data.business.tagline}
          </div>
        </div>
      </div>

      {/* MAIN NOIR HEADER WITH GOLD BORDERED ACTIVE LINK */}
      <header className="bg-[#121212]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Left Logo: Diamond + KARO STUDIO */}
            <a href="#trang-chu" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full border border-[#c59d5f] flex items-center justify-center bg-black">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-serif font-bold tracking-[0.22em] text-white leading-none">
                  {data.business.name}
                </div>
                <div className="text-[9px] tracking-[0.3em] text-[#c59d5f] uppercase mt-1">
                  MONA STORE
                </div>
              </div>
            </a>

            {/* Center Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs uppercase tracking-[0.14em] font-medium">
              {data.navigation.map((item) => {
                const isActive = activeNav === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveNav(item.label)}
                    className={`px-3.5 py-2 transition-all ${
                      isActive
                        ? 'border border-[#c59d5f] text-[#c59d5f]'
                        : 'text-white/80 hover:text-[#c59d5f] border border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Search & Cart Counter */}
            <div className="flex items-center gap-4">
              <a
                href="#san-pham-mua-nhieu"
                className="p-2 text-white/80 hover:text-[#c59d5f] transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('san-pham-mua-nhieu');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 border border-white/25 hover:border-[#c59d5f] px-3.5 py-1.5 text-xs text-white cursor-pointer transition-colors"
              >
                <span className="text-[#c59d5f] font-semibold">
                  {cartCount > 0 ? `${(cartCount * 3250000).toLocaleString('vi-VN')} ₫` : '0 ₫'}
                </span>
                <ShoppingBag className="w-4 h-4" />
                <span className="bg-[#c59d5f] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-xs">
                  {cartCount}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 border border-white/20 text-white cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 flex flex-col gap-2 text-xs uppercase tracking-widest">
              {data.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-white/85 hover:text-[#c59d5f]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO BANNER: NOIR STUDIO PORTRAIT ("KARO STUDIO / SINH RA CHO PHỤ NỮ") */}
      <section className="relative bg-[#070707] overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[620px] items-center">
          {/* Left Poetic Copy */}
          <div className="lg:col-span-6 px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#c59d5f] font-semibold mb-3">
              {data.hero.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold uppercase tracking-wider text-white leading-[1.15]">
              {data.hero.title}
            </h1>
            <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed font-light max-w-xl">
              {data.hero.poeticDescription}
            </p>
            <div className="mt-8">
              <a
                href="#bo-suu-tap-moi"
                className="inline-block border border-[#c59d5f] text-[#c59d5f] hover:bg-[#c59d5f] hover:text-black text-xs font-bold uppercase tracking-[0.24em] px-8 py-3.5 transition-all duration-300"
              >
                {data.hero.ctaText}
              </a>
            </div>
          </div>

          {/* Right Dramatic Noir Model Portrait with Chandelier Earrings */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[620px]">
            <img
              src={data.hero.portraitImage}
              alt={data.hero.title}
              className="w-full h-full object-cover object-center grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#070707] via-[#070707]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 1: 3 NOIR PROMO TILES */}
      <section className="py-12 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.promoTiles.map((tile) => (
              <a
                key={tile.id}
                href="#bo-suu-tap-moi"
                className="group relative h-48 overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#c59d5f]/60 transition-all flex items-center p-6"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
                <div className="relative z-10 max-w-[80%]">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#c59d5f] font-semibold">
                    {tile.eyebrow}
                  </span>
                  <h3 className="mt-1.5 text-lg font-serif font-bold text-white leading-snug">
                    {tile.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">{tile.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: BỘ SƯU TẬP MỚI (Asymmetric 2-Row Noir Showcase) */}
      <section id="bo-suu-tap-moi" className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoldDiamondHeading title={data.newCollectionSection.title} />

          {/* Row 1: 2 Product Cards Left + 2-Col Pearl Rings Banner Right */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {data.newCollectionSection.row1Products.map((prod) => (
              <WhiteProductCard
                key={prod.id}
                item={prod}
                onSelect={handleSelectProduct}
              />
            ))}

            <div className="lg:col-span-2 relative min-h-[340px] overflow-hidden bg-black border border-white/10 group">
              <img
                src={data.newCollectionSection.row1Banner.image}
                alt={data.newCollectionSection.row1Banner.title}
                className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c59d5f]">
                  {data.newCollectionSection.row1Banner.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {data.newCollectionSection.row1Banner.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-md">
                  {data.newCollectionSection.row1Banner.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 2-Col Noir Model Lookbook Left + 2 Product Cards Right */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 relative min-h-[340px] overflow-hidden bg-black border border-white/10 group">
              <img
                src={data.newCollectionSection.row2Banner.image}
                alt={data.newCollectionSection.row2Banner.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c59d5f]">
                  {data.newCollectionSection.row2Banner.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  {data.newCollectionSection.row2Banner.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-md">
                  {data.newCollectionSection.row2Banner.subtitle}
                </p>
              </div>
            </div>

            {data.newCollectionSection.row2Products.map((prod) => (
              <WhiteProductCard
                key={prod.id}
                item={prod}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 4 TRUST BADGES LEFT + FRAMED "Về chúng tôi KARO STUDIO" BOX RIGHT */}
      <section id="ve-karo-studio" className="py-16 bg-[#0d0d0d] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 4 Vertical Trust Badges */}
            <div className="lg:col-span-5 space-y-7">
              {data.trustAndStorySection.badges.map((bdg, idx) => {
                const Icons = [Award, ShieldCheck, RefreshCw, Sparkles];
                const IconComp = Icons[idx % Icons.length];
                return (
                  <div key={bdg.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#c59d5f]/60 bg-[#171717] text-[#c59d5f] flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                        {bdg.title}
                      </h3>
                      <p className="text-xs text-white/65 mt-1 leading-relaxed">
                        {bdg.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Double-Framed Story Box */}
            <div className="lg:col-span-7 relative overflow-hidden border border-white/30 p-3 sm:p-5 bg-[#141414]">
              <div className="relative overflow-hidden border border-white/20 p-8 sm:p-12 text-center">
                <img
                  src={data.trustAndStorySection.backgroundImage}
                  alt={data.trustAndStorySection.storyTitle}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 max-w-lg mx-auto">
                  <p className="text-sm font-serif italic text-[#c59d5f]">
                    {data.trustAndStorySection.storyEyebrow}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-[0.22em] uppercase text-white mt-1">
                    {data.trustAndStorySection.storyTitle}
                  </h2>
                  <div className="w-12 h-[1px] bg-[#c59d5f] mx-auto my-4" />
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {data.trustAndStorySection.storyParagraph1}
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-3">
                    {data.trustAndStorySection.storyParagraph2}
                  </p>
                  <div className="mt-7">
                    <a
                      href="#lien-he"
                      className="inline-block bg-white text-black hover:bg-[#c59d5f] text-xs font-bold uppercase tracking-[0.2em] px-7 py-2.5 rounded-full transition-colors"
                    >
                      {data.trustAndStorySection.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: KHÁCH HÀNG NHẬN XÉT (Dark Parallax Slider with White Center Card) */}
      <section className="relative py-20 bg-black overflow-hidden">
        <img
          src={data.testimonialsSection.backgroundImage}
          alt={data.testimonialsSection.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoldDiamondHeading title={data.testimonialsSection.title} />

          <div className="relative flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setTestimonialIndex((prev) =>
                  prev === 0 ? data.testimonialsSection.items.length - 1 : prev - 1
                )
              }
              className="hidden sm:flex w-10 h-10 rounded-full border border-white/40 hover:border-[#c59d5f] text-white items-center justify-center mr-6 cursor-pointer transition-colors"
              aria-label="Trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Center Crisp White Testimonial Card */}
            <div className="bg-white text-[#141414] max-w-2xl w-full p-8 sm:p-10 text-center shadow-2xl">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.author}
                className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-[#c59d5f] mb-4"
              />
              <p className="text-xs sm:text-sm italic text-neutral-600 leading-relaxed">
                “{currentTestimonial.quote}”
              </p>
              <div className="mt-5">
                <span className="font-bold text-sm text-[#111111]">
                  {currentTestimonial.author}
                </span>
                <span className="text-xs text-neutral-400"> / {currentTestimonial.role}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setTestimonialIndex(
                  (prev) => (prev + 1) % data.testimonialsSection.items.length
                )
              }
              className="hidden sm:flex w-10 h-10 rounded-full border border-white/40 hover:border-[#c59d5f] text-white items-center justify-center ml-6 cursor-pointer transition-colors"
              aria-label="Tiếp"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: SẢN PHẨM MUA NHIỀU (4 White Cards on Dark Background) */}
      <section id="san-pham-mua-nhieu" className="py-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoldDiamondHeading title={data.bestSellingSection.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.bestSellingSection.items.map((item) => (
              <WhiteProductCard
                key={item.id}
                item={item}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TIN TỨC (3 Noir Editorial Cards with Outlined ĐỌC THÊM Button) */}
      <section id="tin-tuc" className="py-16 bg-[#0f0f0f] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoldDiamondHeading title={data.newsSection.title} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.newsSection.posts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#161616] border border-white/10 hover:border-[#c59d5f]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-black relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 border border-[#c59d5f]/50 text-[#c59d5f] text-[10px] uppercase tracking-widest px-2.5 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] text-white/45 mb-1.5">{post.date}</p>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#c59d5f] leading-snug transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-xs text-white/65 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="#lien-he"
                    className="inline-block border border-white/40 hover:border-[#c59d5f] hover:text-[#c59d5f] text-white text-[11px] uppercase tracking-[0.2em] px-5 py-2 transition-colors"
                  >
                    ĐỌC THÊM
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DARK 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#090909] border-t border-white/10 text-white/70 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs">
            {/* Col 1: Brand Emblem */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-[#c59d5f] flex items-center justify-center">
                  <Gem className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-serif font-bold tracking-[0.22em] text-white">
                    {data.business.name}
                  </div>
                  <div className="text-[9px] tracking-[0.3em] text-[#c59d5f] uppercase">
                    MONA STORE
                  </div>
                </div>
              </div>
              <p className="leading-relaxed text-white/60">{data.business.description}</p>
            </div>

            {/* Col 2: Address & Phone */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#c59d5f] shrink-0 mt-0.5" />
                  <span>{data.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#c59d5f] shrink-0" />
                  <span>{data.business.phone.join(' • ')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#c59d5f] shrink-0" />
                  <span>{data.business.email[0]}</span>
                </li>
              </ul>
            </div>

            {/* Col 3: THEO DÕI CHÚNG TÔI */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
                {data.footer.socialLabel}
              </h4>
              <p className="text-white/60 mb-4 leading-relaxed">
                Kết nối với Karo Studio để chiêm ngưỡng các bộ ảnh Lookbook trang sức cưới mới nhất.
              </p>
              <div className="flex items-center gap-2.5">
                {[Globe, Share2, Heart, Sparkles].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#trang-chu"
                    className="w-9 h-9 rounded-full border border-white/25 hover:border-[#c59d5f] hover:text-[#c59d5f] flex items-center justify-center transition-colors"
                    aria-label="Mạng xã hội"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: ĐĂNG KÝ NHẬN BẢN TIN */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
                {data.footer.newsletterLabel}
              </h4>
              <p className="text-white/60 mb-4 leading-relaxed">{data.footer.newsletterNote}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newsletterEmail.trim()) return;
                  setNewsletterSent(true);
                  setNewsletterEmail('');
                }}
                className="flex bg-[#161616] border border-white/20 focus-within:border-[#c59d5f]"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={data.footer.placeholder}
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-xs text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white px-4 py-2.5 flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Gửi"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {newsletterSent && (
                <p className="mt-2 text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Đã đăng ký nhận ưu đãi Lookbook Karo Studio!</span>
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-white/45">{data.business.copyright}</div>
        </div>
      </footer>

      {/* QUICK MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-[#c59d5f] max-w-md w-full p-6 text-white shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-white/50 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c59d5f] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã thêm vào giỏ hàng Karo Studio</span>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover bg-white p-1 shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{selectedProduct.name}</h4>
                <p className="text-xs text-white/65 mt-0.5">{selectedProduct.specs}</p>
                <p className="text-sm font-bold text-[#c59d5f] mt-1">{selectedProduct.price}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-xs border border-white/30 hover:border-white cursor-pointer"
              >
                Đóng
              </button>
              <a
                href="#lien-he"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2 text-xs font-bold uppercase bg-[#c59d5f] text-black hover:bg-white"
              >
                Đặt lịch thử & chụp Lookbook
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
