'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  CreditCard,
  Heart,
  User,
  Search,
  ShoppingBag,
  Gem,
  Award,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  X,
  Menu,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultStudioChupAnh12Data,
  type StudioChupAnh12Data,
  type PrecitaProductItem,
} from '../../data/mockData';

interface Props {
  data?: Partial<StudioChupAnh12Data> & Record<string, unknown>;
}

function SectionHeadingWithLines({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-[1px] bg-neutral-200 flex-1 max-w-[220px]" />
      <h2 className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[#222222] text-center px-2">
        {title}
      </h2>
      <div className="h-[1px] bg-neutral-200 flex-1 max-w-[220px]" />
    </div>
  );
}

function ProductGridCard({
  item,
  onSelect,
}: {
  item: PrecitaProductItem;
  onSelect: (p: PrecitaProductItem) => void;
}) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-white p-3.5 rounded-xs border border-transparent hover:border-[#2bb5c9]/50 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between text-center"
    >
      <div>
        <div className="relative aspect-square overflow-hidden bg-[#fafafa] mb-3 p-3 flex items-center justify-center">
          {item.badge && (
            <span
              className={`absolute top-2.5 left-2.5 z-10 w-9 h-9 rounded-full text-[11px] font-bold flex items-center justify-center shadow-xs ${
                item.badgeVariant === 'hot'
                  ? 'bg-[#2bb5c9] text-white'
                  : 'bg-[#bcebf2] text-[#0f5c69]'
              }`}
            >
              {item.badge}
            </span>
          )}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xs text-neutral-700 font-medium line-clamp-2 leading-relaxed group-hover:text-[#178a9c] transition-colors">
          {item.name}
        </h3>
      </div>

      <div className="mt-2.5 pt-2 border-t border-neutral-100">
        {item.oldPrice && (
          <p className="text-[11px] text-neutral-400 line-through">{item.oldPrice}</p>
        )}
        <p className="text-xs sm:text-sm font-bold text-[#222222]">{item.price}</p>
      </div>
    </div>
  );
}

export function DemoTemplateRenderer({ data: incomingData }: Props) {
  const data = adaptClonedTemplateData(defaultStudioChupAnh12Data, incomingData);

  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistCount, setWishlistCount] = useState(3);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<PrecitaProductItem | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProductClick = (item: PrecitaProductItem) => {
    setSelectedProduct(item);
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#2bb5c9] selection:text-white">
      {/* TOP TIFFANY/ICE AQUA BAR (#d8f3f8) */}
      <div id="trang-chu" className="bg-[#d8f3f8] text-[#134e57] text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          {/* Left Utility Info */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#lien-he" className="inline-flex items-center gap-1 hover:underline">
              <MapPin className="w-3.5 h-3.5 text-[#178a9c]" />
              <span>Cửa Hàng & Studio</span>
            </a>
            <a
              href={`tel:${data.business.phone[0]}`}
              className="inline-flex items-center gap-1 font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-[#178a9c]" />
              <span>{data.business.phone[0]}</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 text-[#178a9c] font-medium">
              <CreditCard className="w-3.5 h-3.5" />
              <span>{data.business.installmentNote}</span>
            </span>
          </div>

          {/* Right Wishlist & Login */}
          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <button
              type="button"
              onClick={() => setWishlistCount((w) => w + 1)}
              className="inline-flex items-center gap-1 uppercase tracking-wider font-semibold hover:text-black cursor-pointer"
            >
              <span>DANH SÁCH YÊU THÍCH ({wishlistCount})</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </button>
            <span className="text-[#9ad5df]">|</span>
            <a href="#lien-he" className="inline-flex items-center gap-1 hover:underline">
              <User className="w-3.5 h-3.5" />
              <span>Đăng nhập</span>
            </a>
          </div>
        </div>
      </div>

      {/* MIDDLE WHITE HEADER: SEARCH LEFT + PRECITA LOGO CENTER + CART RIGHT */}
      <header className="bg-white border-b border-neutral-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 grid grid-cols-2 lg:grid-cols-3 items-center gap-4">
            {/* Left Underlined Search Box */}
            <div className="hidden lg:flex items-center">
              <div className="relative w-64 border-b border-neutral-300 focus-within:border-[#2bb5c9] pb-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm trang sức, nhẫn cưới..."
                  className="w-full text-xs text-neutral-700 pr-6 focus:outline-none bg-transparent"
                />
                <Search className="w-4 h-4 text-neutral-400 absolute right-0 top-0.5" />
              </div>
            </div>

            {/* Center Diamond Emblem + PRECITA BRIDAL Logo */}
            <a
              href="#trang-chu"
              className="flex flex-col items-start lg:items-center text-left lg:text-center"
            >
              <div className="flex items-center gap-2">
                <Gem className="w-6 h-6 text-[#2bb5c9]" />
                <span className="text-xl sm:text-2xl font-serif tracking-[0.24em] font-bold text-[#222222]">
                  {data.business.name}
                </span>
              </div>
              <span className="text-[9px] tracking-[0.35em] text-neutral-400 uppercase mt-0.5">
                {data.business.subName}
              </span>
            </a>

            {/* Right Shopping Bag & Mobile Toggle */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('san-pham-ban-chay');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-700 hover:text-[#2bb5c9] cursor-pointer"
              >
                <span>GIỎ HÀNG</span>
                <span className="w-6 h-6 rounded-xs border border-neutral-300 flex items-center justify-center text-[11px] font-bold">
                  {cartCount}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 border border-neutral-200 rounded-xs cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bottom Navigation Links Row */}
          <nav className="hidden lg:flex items-center justify-center gap-8 py-3 border-t border-neutral-100 text-xs uppercase tracking-[0.16em] font-medium text-neutral-600">
            {data.navigation.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className={
                  nav.isHighlight
                    ? 'text-[#d96b43] font-bold hover:text-[#b84f2a] transition-colors'
                    : 'hover:text-[#2bb5c9] transition-colors'
                }
              >
                {nav.label}
              </a>
            ))}
          </nav>

          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-neutral-100 flex flex-col gap-2 text-xs uppercase tracking-wider">
              {data.navigation.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 font-medium text-neutral-700 hover:text-[#2bb5c9]"
                >
                  {nav.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO BANNER: ARTISAN CRAFTING DIAMOND RING + GIẢM 30% VỎ NHẪN KIM CƯƠNG */}
      <section className="relative bg-[#e8eaed] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[420px] md:min-h-[500px] items-center">
          {/* Left Craftsman / Diamond Ring Photo */}
          <div className="lg:col-span-7 relative h-[300px] sm:h-[380px] lg:h-[500px]">
            <img
              src={data.hero.backgroundImage}
              alt={data.hero.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#e8eaed]" />
          </div>

          {/* Right Offer Block (GIẢM 30% VỎ NHẪN KIM CƯƠNG) */}
          <div className="lg:col-span-5 p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-[#e8eaed]">
            <span className="text-sm sm:text-base uppercase tracking-[0.28em] text-neutral-600 font-medium">
              {data.hero.discountLabel}
            </span>
            <div className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#d63b2f] leading-none my-2">
              {data.hero.discountPercent}
            </div>
            <h1 className="text-lg sm:text-xl font-bold uppercase tracking-[0.14em] text-[#222222] mt-2">
              {data.hero.title}
            </h1>
            <p className="mt-2 text-xs text-neutral-600 tracking-wider max-w-xs leading-relaxed">
              {data.hero.subtitle}
            </p>
            <a
              href="#san-pham-ban-chay"
              className="mt-6 inline-block bg-[#d99b82] hover:bg-[#c58267] text-white text-xs font-semibold tracking-wider px-8 py-3 rounded-xs shadow-xs transition-colors"
            >
              {data.hero.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: SẢN PHẨM BÁN CHẠY (5 Clean Cards with Aqua Circle Badges) */}
      <section id="san-pham-ban-chay" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.bestSellers.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {data.bestSellers.items
              .filter(
                (i) =>
                  !searchQuery.trim() ||
                  i.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <ProductGridCard key={item.id} item={item} onSelect={handleProductClick} />
              ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: DANH MỤC SẢN PHẨM (4 Clean Jewelry Showcase Blocks) */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.categoriesSection.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.categoriesSection.items.map((cat) => (
              <a
                key={cat.id}
                href="#nhan-cuoi"
                className="group bg-[#fafafa] border border-neutral-100 hover:border-[#2bb5c9]/50 p-5 text-center transition-all flex flex-col items-center"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-white mb-4 p-3 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#222222] group-hover:text-[#178a9c]">
                  {cat.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-1">
                  {cat.countLabel}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BỘ SƯU TẬP (2 Split Banners: Ice-Blue Baubles Left + Shades of Love Right) */}
      <section id="bo-suu-tap" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.collectionSplit.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Dreamy Ice-Blue Banner */}
            <div className="group relative h-72 sm:h-80 overflow-hidden bg-[#d8f3f8]">
              <img
                src={data.collectionSplit.leftBanner.image}
                alt={data.collectionSplit.leftBanner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b42]/80 via-[#0d3b42]/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#bcebf2]">
                  PRECITA CRYSTAL & BRIDAL
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mt-1">
                  {data.collectionSplit.leftBanner.title}
                </h3>
                <p className="text-xs text-white/85 mt-1">
                  {data.collectionSplit.leftBanner.subtitle}
                </p>
              </div>
            </div>

            {/* Right Romantic Couple Hands Banner ("Shades of Love") */}
            <div className="group relative h-72 sm:h-80 overflow-hidden bg-[#f3e6e3]">
              <img
                src={data.collectionSplit.rightBanner.image}
                alt={data.collectionSplit.rightBanner.scriptTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-center text-white">
                <h3 className="text-4xl sm:text-5xl font-serif italic tracking-wide drop-shadow-sm">
                  {data.collectionSplit.rightBanner.scriptTitle}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-white/90 max-w-sm">
                  {data.collectionSplit.rightBanner.subtitle}
                </p>
                <a
                  href="#nhan-cuoi"
                  className="mt-4 inline-block border border-white/80 hover:bg-white hover:text-black text-[11px] uppercase tracking-widest px-5 py-2 transition-colors"
                >
                  Khám phá bộ sưu tập
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: NHẪN (4 Cards) */}
      <section id="nhan-cuoi" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.ringsSection.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.ringsSection.items.map((item) => (
              <ProductGridCard key={item.id} item={item} onSelect={handleProductClick} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOA TAI (4 Cards) */}
      <section id="hoa-tai" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.earringsSection.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.earringsSection.items.map((item) => (
              <ProductGridCard key={item.id} item={item} onSelect={handleProductClick} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HÀNG MỚI VỀ (5 Cards with Hot & -50% Aqua Badges) */}
      <section id="hang-moi-ve" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.newArrivalsSection.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {data.newArrivalsSection.items.map((item) => (
              <ProductGridCard key={item.id} item={item} onSelect={handleProductClick} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: GIÁ TRỊ NỔI BẬT (Pastel Ice-Blue Box #d8f3f8 with 4 Aqua Icon Columns) */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.coreValuesSection.title} />
          <div className="bg-[#d8f3f8]/75 border border-[#bcebf2] py-10 px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {data.coreValuesSection.values.map((val, idx) => {
                const Icons = [Award, ShieldCheck, RefreshCw, Sparkles];
                const IconComp = Icons[idx % Icons.length];
                return (
                  <div key={val.title} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#2bb5c9] flex items-center justify-center shadow-xs mb-3">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-bold text-[#134e57] uppercase tracking-wider">
                      {val.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#1d6570] leading-relaxed max-w-[220px]">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TIN TỨC MỚI NHẤT (3 Editorial Cards) */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeadingWithLines title={data.latestNewsSection.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {data.latestNewsSection.posts.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-3.5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#222222] group-hover:text-[#178a9c] leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-2 text-[11px] text-neutral-400">{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER BAR + WHITE 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-[#fafafa] border-t border-neutral-200 pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Newsletter Row */}
          <div className="pb-8 mb-10 border-b border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#222222]">
              {data.newsletterSection.title}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newsletterEmail.trim()) return;
                setNewsletterSubscribed(true);
                setNewsletterEmail('');
              }}
              className="flex w-full md:w-auto max-w-md flex-1"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={data.newsletterSection.placeholder}
                className="flex-1 bg-white border border-neutral-300 px-4 py-2.5 text-xs focus:outline-none focus:border-[#2bb5c9]"
              />
              <button
                type="submit"
                className="bg-[#2bb5c9] hover:bg-[#178a9c] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 transition-colors cursor-pointer shrink-0"
              >
                {data.newsletterSection.buttonText}
              </button>
            </form>
          </div>
          {newsletterSubscribed && (
            <p className="text-xs text-emerald-600 mb-6 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Cảm ơn bạn đã kết nối cùng Precita Bridal! Mã ưu đãi 30% đã được gửi.</span>
            </p>
          )}

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-neutral-600 pb-10 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Gem className="w-5 h-5 text-[#2bb5c9]" />
                <span className="text-base font-serif font-bold tracking-[0.2em] text-[#222222]">
                  {data.business.name}
                </span>
              </div>
              <p className="leading-relaxed mb-3">{data.business.description}</p>
              <p>
                <strong>Địa chỉ:</strong> {data.business.address}
              </p>
              <p className="mt-1">
                <strong>Hotline:</strong> {data.business.phone[0]}
              </p>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#222222] mb-3">
                VỀ PRECITA BRIDAL
              </h4>
              <ul className="space-y-2">
                {data.footer.col1Links.map((lnk) => (
                  <li key={lnk}>
                    <a href="#trang-chu" className="hover:text-[#178a9c]">
                      {lnk}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#222222] mb-3">
                DỊCH VỤ KHÁCH HÀNG
              </h4>
              <ul className="space-y-2">
                {data.footer.col2Links.map((lnk) => (
                  <li key={lnk}>
                    <a href="#san-pham-ban-chay" className="hover:text-[#178a9c]">
                      {lnk}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-[#222222] mb-3">
                CẨM NANG CƯỚI & KIM CƯƠNG
              </h4>
              <ul className="space-y-2">
                {data.footer.col3Links.map((lnk) => (
                  <li key={lnk}>
                    <a href="#bo-suu-tap" className="hover:text-[#178a9c]">
                      {lnk}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Payment Icons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>{data.business.copyright}</p>
            <div className="flex flex-wrap items-center gap-2">
              {data.footer.paymentBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 bg-white border border-neutral-200 text-neutral-600 rounded-xs text-[10px] font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 border-t-4 border-[#2bb5c9] shadow-xl relative">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#178a9c] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã thêm vào giỏ hàng Precita Bridal</span>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover bg-neutral-50 border border-neutral-200 shrink-0"
              />
              <div>
                <h4 className="text-xs font-bold text-[#222222]">{selectedProduct.name}</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">{selectedProduct.specs}</p>
                <p className="text-sm font-bold text-[#178a9c] mt-1">{selectedProduct.price}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-xs border border-neutral-300 hover:border-black cursor-pointer"
              >
                Tiếp tục xem
              </button>
              <a
                href="#lien-he"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2 text-xs font-bold uppercase bg-[#2bb5c9] text-white hover:bg-[#178a9c]"
              >
                Nhận ưu đãi 30%
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
