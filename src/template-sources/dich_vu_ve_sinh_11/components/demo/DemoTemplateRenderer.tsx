'use client';

import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  CleanCampusServiceItem,
  CleanCampusTemplateData,
  defaultCleanCampusData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () =>
      adaptClonedTemplateData(
        defaultCleanCampusData,
        data
      ) as CleanCampusTemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CleanCampusServiceItem[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeModalItem, setActiveModalItem] =
    useState<CleanCampusServiceItem | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleAddToCart = (item: CleanCampusServiceItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleCopyCoupon = (code: string) => {
    setCopiedCode(code);
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const renderProductCard = (item: CleanCampusServiceItem) => (
    <div
      key={item.id}
      className="group flex flex-col justify-between rounded-xs border border-transparent bg-white p-2.5 transition hover:border-amber-400 hover:shadow-md"
    >
      <div>
        <div
          onClick={() => setActiveModalItem(item)}
          className="relative mb-2.5 aspect-[3/4] w-full cursor-pointer overflow-hidden border border-neutral-100 bg-neutral-50"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          {item.discountBadge && (
            <span className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b] text-[11px] font-extrabold text-white shadow-xs">
              {item.discountBadge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/75 py-1.5 text-center text-[10px] font-bold uppercase text-white transition group-hover:translate-y-0">
            Xem chi tiết gói
          </div>
        </div>

        <h4
          onClick={() => setActiveModalItem(item)}
          className="line-clamp-2 cursor-pointer text-xs font-medium leading-snug text-neutral-700 transition hover:text-[#f59e0b]"
        >
          {item.name}
        </h4>
      </div>

      <div className="mt-2 pt-1">
        <div className="flex flex-wrap items-baseline gap-1.5">
          <span className="text-xs font-extrabold text-neutral-900">
            {item.price}
          </span>
          {item.originalPrice && (
            <span className="text-[10px] text-neutral-400 line-through">
              {item.originalPrice}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => handleAddToCart(item)}
          className="mt-2 w-full rounded-xs border border-amber-500/40 bg-amber-50/70 py-1 text-[10px] font-bold uppercase text-amber-800 transition hover:bg-[#f59e0b] hover:text-white"
        >
          + Chọn dịch vụ
        </button>
      </div>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#333333] antialiased selection:bg-[#f59e0b] selection:text-white"
    >
      {/* TIER 1: TOP UTILITY BAR */}
      <div className="border-b border-neutral-200 bg-[#f7f7f7] text-[11px] text-neutral-500">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-4 py-1.5">
          <span className="hidden sm:inline-block">
            Hệ thống vệ sinh trường học &amp; khử khuẩn thư viện đạt chuẩn Bộ Y Tế
          </span>
          <div className="ml-auto flex flex-wrap items-center gap-3">
            {templateData.topLinks.map((link, idx) => (
              <React.Fragment key={link}>
                <a href="#lien-he" className="transition hover:text-[#f59e0b]">
                  {link}
                </a>
                {idx < templateData.topLinks.length - 1 && (
                  <span className="text-neutral-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* TIER 2: MAIN HEADER WITH STACKED LOGO + LONG ORANGE SEARCH BAR + CART */}
      <header className="bg-white py-5">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 px-4">
          {/* Stacked Campus/Book Emblem + MONA */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex flex-col items-center justify-center rounded-xs bg-gradient-to-br from-amber-500 via-emerald-500 to-sky-600 p-2 text-white shadow-xs">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="block text-2xl font-black tracking-tight text-neutral-800">
                {templateData.business.name}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#f59e0b]">
                CleanCampus
              </span>
            </div>
          </a>

          {/* Long Orange-Bordered Search Input */}
          <div className="order-3 flex w-full max-w-2xl items-center md:order-2 md:w-auto md:flex-1">
            <div className="flex w-full overflow-hidden rounded-xs border-2 border-[#f59e0b] bg-white">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm gói vệ sinh lớp học, khử nấm mốc thư viện, hóa chất mầm non..."
                className="w-full px-3.5 py-2 text-xs text-neutral-700 outline-none placeholder:text-neutral-400"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="flex items-center justify-center bg-white px-4 text-[#f59e0b] transition hover:bg-[#f59e0b] hover:text-white"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Cart Button */}
          <div className="order-2 flex items-center gap-3 md:order-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('noi-bat');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 rounded-xs border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs font-bold text-neutral-700 transition hover:border-[#f59e0b]"
            >
              <span>Giỏ hàng</span>
              <span className="relative flex items-center justify-center text-[#f59e0b]">
                <ShoppingCart className="h-4 w-4" />
                {cartItems.length > 0 && (
                  <span className=" -top-2 -right-2.5 absolute flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[9px] font-bold text-white">
                    {cartItems.length}
                  </span>
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileSidebarOpen((v) => !v)}
              className="rounded-xs border border-neutral-300 p-2 text-neutral-700 lg:hidden"
              aria-label="Danh mục"
            >
              {mobileSidebarOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* TIER 3: NAVIGATION BAR WITH DARK #444444 CATEGORY HEADER */}
      <nav className="border-y border-neutral-200 bg-[#f3f3f3]">
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 lg:grid-cols-12">
          <div className="flex items-center gap-2.5 bg-[#444444] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white lg:col-span-3">
            <Menu className="h-4 w-4 text-[#f59e0b]" />
            <span>DANH MỤC SẢN PHẨM &amp; DỊCH VỤ</span>
          </div>
          <div className="flex flex-wrap items-center justify-between px-4 py-2.5 lg:col-span-9">
            <div className="flex flex-wrap items-center gap-6">
              {templateData.navLinks.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  className="text-xs font-bold text-neutral-700 transition hover:text-[#f59e0b]"
                >
                  {nav.label}
                </a>
              ))}
            </div>
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="text-[11px] font-semibold text-[#f59e0b] underline"
              >
                Đang lọc: {selectedCategory} (Xóa)
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* HERO SECTION: LEFT 3-COL SIDEBAR + RIGHT 9-COL ROYAL BLUE CAMPUS BANNER */}
      <section className="mx-auto max-w-[1220px] px-4 pt-4 pb-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Left 10-Item Vertical Sidebar */}
          <aside
            className={`${
              mobileSidebarOpen ? 'block' : 'hidden'
            } border border-neutral-200 bg-white lg:col-span-3 lg:block`}
          >
            <ul className="divide-y divide-neutral-100">
              {templateData.sidebarCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(isSelected ? null : cat);
                        setMobileSidebarOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs transition ${
                        isSelected
                          ? 'bg-amber-50 font-bold text-[#f59e0b]'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-[#f59e0b]'
                      }`}
                    >
                      <span className="line-clamp-1">{cat}</span>
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-40" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right 9-Col Royal Blue Campus Hero Banner */}
          <div className="lg:col-span-9">
            <div className="relative flex h-full min-h-[370px] flex-col justify-between overflow-hidden rounded-xs bg-gradient-to-r from-[#0a2e73] via-[#0d47a1] to-[#1565c0] p-6 text-white shadow-md sm:p-10">
              <img
                src={templateData.hero.backgroundImage}
                alt={templateData.hero.title}
                className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
              />
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-300 ring-1 ring-amber-300/40">
                  <Sparkles className="h-3.5 w-3.5" />
                  {templateData.hero.programTag}
                </span>
                <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                  {templateData.hero.title}
                </h1>
                <p className="mt-2.5 text-xs leading-relaxed text-sky-100 sm:text-sm">
                  {templateData.hero.subtitle}
                </p>
              </div>

              {/* 3 Featured School & Library Cards inside Hero */}
              <div className="relative z-10 mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {templateData.hero.featuredPackages.map((pkg) => (
                  <div
                    key={pkg.title}
                    className="flex items-center gap-3 rounded-xs border border-white/20 bg-white/10 p-2.5 backdrop-blur-xs transition hover:bg-white/20"
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="h-14 w-14 shrink-0 rounded-xs object-cover"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-300">
                        {pkg.tag}
                      </span>
                      <h3 className="text-xs font-extrabold text-white">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Hero Highlight Note + CTA */}
              <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  ★ {templateData.hero.highlightNote}
                </span>
                <a
                  href="#noi-bat"
                  className="rounded-xs bg-[#f59e0b] px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition hover:bg-amber-600"
                >
                  {templateData.hero.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-COLUMN BLUE COUPON BANNERS */}
      <section id="uu-dai-coupon" className="mx-auto max-w-[1220px] px-4 pb-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {templateData.couponBanners.map((cp) => (
            <div
              key={cp.id}
              className={`relative overflow-hidden rounded-xs bg-gradient-to-r ${cp.bgGradient} p-5 text-white shadow-sm`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="inline-block rounded-xs bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    {cp.badgeText}
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-wide text-white">
                    {cp.headline}
                  </h3>
                  <p className="text-[11px] text-sky-100">{cp.subtext}</p>
                </div>
                <div className="flex shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-300 bg-amber-400/20 h-16 w-16 text-center">
                  <span className="text-[9px] font-bold uppercase text-amber-200">
                    GIẢM
                  </span>
                  <span className="text-lg font-black leading-none text-amber-300">
                    {cp.discountPercent}
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2.5 text-[11px]">
                <span>
                  Mã ưu đãi: <strong className="text-amber-300">{cp.code}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyCoupon(cp.code)}
                  className="inline-flex items-center gap-1 rounded-xs bg-white px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#0d47a1] transition hover:bg-amber-300"
                >
                  <Copy className="h-3 w-3" />
                  {copiedCode === cp.code ? 'Đã chép' : 'Sao chép'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 HORIZONTAL 6-COLUMN SERVICE/SUPPLY ROWS (NỔI BẬT / VẬT TƯ / THIẾT BỊ) */}
      {templateData.horizontalRows.map((row) => {
        const filteredRowItems = row.items.filter((item) => {
          const matchesQuery = searchQuery.trim()
            ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
            : true;
          const matchesCat = selectedCategory
            ? item.category.toLowerCase() === selectedCategory.toLowerCase()
            : true;
          return matchesQuery && matchesCat;
        });

        const displayItems =
          filteredRowItems.length > 0 ? filteredRowItems : row.items;

        return (
          <section
            key={row.id}
            id={row.id}
            className="mx-auto max-w-[1220px] px-4 pb-12"
          >
            {/* Section Title with Orange Bottom Line & Right Arrows */}
            <div className="mb-5 flex items-center justify-between border-b border-neutral-200 pb-2">
              <div className="relative">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800 sm:text-base">
                  {row.title}
                </h2>
                <span className="absolute -bottom-[9px] left-0 h-0.5 w-24 bg-[#f59e0b]" />
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Trước"
                  className="flex h-6 w-6 items-center justify-center rounded-xs border border-neutral-300 text-neutral-500 hover:border-[#f59e0b] hover:text-[#f59e0b]"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Tiếp"
                  className="flex h-6 w-6 items-center justify-center rounded-xs border border-neutral-300 text-neutral-500 hover:border-[#f59e0b] hover:text-[#f59e0b]"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 6-Column Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {displayItems.map((item) => renderProductCard(item))}
            </div>
          </section>
        );
      })}

      {/* 4 ALTERNATING SPLIT SHOWCASE BLOCKS (BANNER + 3x2 GRID) */}
      {templateData.splitShowcases.map((block) => {
        const bannerCard = (
          <div
            style={{ backgroundColor: block.bannerBgColor }}
            className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-xs p-6 text-white shadow-sm lg:col-span-4"
          >
            <div className="relative z-10 space-y-2">
              <span className="inline-block rounded-xs bg-black/20 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
                {block.bannerTag}
              </span>
              <h3 className="text-xl font-black leading-snug uppercase sm:text-2xl">
                {block.bannerTitle}
              </h3>
              <p className="text-xs leading-relaxed text-white/90">
                {block.bannerSubtitle}
              </p>
            </div>

            <div className="relative z-10 my-4 overflow-hidden rounded-xs border-2 border-white/30 shadow-md">
              <img
                src={block.bannerImage}
                alt={block.bannerTitle}
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-white/25 pt-3">
              <span className="text-sm font-black uppercase tracking-wider text-yellow-200">
                {block.bannerDiscount}
              </span>
              <a
                href="#lien-he"
                className="rounded-xs bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Nhận báo giá
              </a>
            </div>
          </div>
        );

        const productGrid = (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-8">
            {block.items.map((item) => renderProductCard(item))}
          </div>
        );

        return (
          <section
            key={block.id}
            id={block.id}
            className="mx-auto max-w-[1220px] px-4 pb-14"
          >
            {/* Header */}
            <div className="mb-5 flex items-center justify-between border-b border-neutral-200 pb-2">
              <div className="relative">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800 sm:text-base">
                  {block.sectionTitle}
                </h2>
                <span className="absolute -bottom-[9px] left-0 h-0.5 w-28 bg-[#f59e0b]" />
              </div>
              <a
                href="#lien-he"
                className="text-xs font-bold text-[#f59e0b] hover:underline"
              >
                Xem toàn bộ gói &rarr;
              </a>
            </div>

            {/* Split Grid: Left Banner + Right 3x2 OR Left 3x2 + Right Banner */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
              {block.bannerPosition === 'left' ? (
                <>
                  {bannerCard}
                  {productGrid}
                </>
              ) : (
                <>
                  {productGrid}
                  {bannerCard}
                </>
              )}
            </div>
          </section>
        );
      })}

      {/* 6x2 GRID OF 12 EDUCATIONAL INSTITUTION & LIBRARY PARTNER LOGOS ON #f2f2f2 */}
      <section className="bg-[#f2f2f2] py-10">
        <div className="mx-auto max-w-[1220px] px-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {templateData.educationPartners.map((partner) => (
              <div
                key={partner.id}
                className="flex h-20 flex-col items-center justify-center rounded-xs border border-neutral-200/80 bg-white px-3 text-center shadow-2xs transition hover:border-[#f59e0b]"
              >
                <span
                  className="text-base font-black tracking-tight sm:text-lg"
                  style={{ color: partner.color }}
                >
                  {partner.name}
                </span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
                  {partner.subline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK #555555 NEWSLETTER BAR + 4-COLUMN FOOTER + BOTTOM BRAND & LOGISTICS ROW */}
      <footer id="lien-he" className="bg-white text-xs text-neutral-600">
        {/* Newsletter Bar */}
        <div className="bg-[#555555] py-4 text-white">
          <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 px-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterDone(true);
                  setNewsletterEmail('');
                }
              }}
              className="flex w-full max-w-xl items-center overflow-hidden rounded-xs bg-white sm:w-auto sm:flex-1"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Nhập email phòng Hành chính - Quản trị nhà trường để nhận bảng giá..."
                className="w-full px-3.5 py-2 text-xs text-neutral-800 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-[#f59e0b] px-5 py-2 text-xs font-extrabold uppercase text-white transition hover:bg-amber-600"
              >
                ĐĂNG KÝ
              </button>
            </form>

            {newsletterDone && (
              <span className="flex items-center gap-1 text-xs font-semibold text-amber-300">
                <CheckCircle2 className="h-4 w-4" /> Đã đăng ký nhận báo giá!
              </span>
            )}

            {/* Right Social Circles */}
            <div className="flex items-center gap-2">
              {[Globe, Share2, MessageCircle, ShieldCheck].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 text-white transition hover:bg-[#f59e0b]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Column Links Section */}
        <div className="mx-auto max-w-[1220px] border-b border-neutral-200 px-4 py-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: DỊCH VỤ */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                DỊCH VỤ HỌC ĐƯỜNG
              </h4>
              <ul className="space-y-2">
                {templateData.footer.serviceLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#noi-bat"
                      className="text-neutral-600 transition hover:text-[#f59e0b]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: HỖ TRỢ */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                HỖ TRỢ NHÀ TRƯỜNG
              </h4>
              <ul className="space-y-2">
                {templateData.footer.supportLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#noi-bat"
                      className="text-neutral-600 transition hover:text-[#f59e0b]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: TÀI KHOẢN CỦA TÔI */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                TÀI KHOẢN CỦA TÔI
              </h4>
              <ul className="space-y-2">
                {templateData.footer.accountLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#lien-he"
                      className="text-neutral-600 transition hover:text-[#f59e0b]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: LIÊN HỆ */}
            <div>
              <h4 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                LIÊN HỆ
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#f59e0b]" />
                  <span>{templateData.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#f59e0b]" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#f59e0b]" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Brand + Tax Info + 3 Logistics Partners Row */}
        <div className="mx-auto max-w-[1220px] px-4 py-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            {/* Logo */}
            <div className="flex items-center gap-2.5 lg:col-span-2">
              <div className="flex flex-col items-center justify-center rounded-xs bg-gradient-to-br from-amber-500 via-emerald-500 to-sky-600 p-2 text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-xl font-black text-neutral-800">
                  {templateData.business.name}
                </span>
                <span className="block text-[9px] font-bold uppercase text-[#f59e0b]">
                  CleanCampus
                </span>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-1 text-[11px] leading-relaxed text-neutral-500 lg:col-span-5">
              <p className="font-bold text-neutral-700">
                {templateData.business.tagline}
              </p>
              <p>{templateData.business.taxInfo}</p>
            </div>

            {/* 3 Logistics Badges */}
            <div className="grid grid-cols-3 gap-2 lg:col-span-5">
              {templateData.footer.logisticsPartners.map((lp) => (
                <div
                  key={lp.name}
                  className="flex flex-col items-center justify-center rounded-xs border border-neutral-200 bg-neutral-50 p-2.5 text-center"
                >
                  <span
                    className="text-xs font-black tracking-tight sm:text-sm"
                    style={{ color: lp.color }}
                  >
                    {lp.name}
                  </span>
                  <span className="text-[9px] text-neutral-400">
                    {lp.tagline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 bg-[#f9f9f9] py-3 text-center text-[11px] text-neutral-500">
          {templateData.business.copyright}
        </div>
      </footer>

      {/* QUICK DETAIL MODAL */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-lg rounded-xs bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="overflow-hidden border border-neutral-200 bg-neutral-50">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.name}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-800">
                    Mã gói: {activeModalItem.sku}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-neutral-900">
                    {activeModalItem.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    Đơn vị tính: {activeModalItem.unit}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-black text-[#f59e0b]">
                      {activeModalItem.price}
                    </span>
                    {activeModalItem.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {activeModalItem.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(activeModalItem);
                      setActiveModalItem(null);
                    }}
                    className="flex-1 bg-[#f59e0b] py-2 text-xs font-bold uppercase text-white transition hover:bg-amber-600"
                  >
                    Đăng ký gói này
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(null)}
                    className="border border-neutral-300 px-3 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-100"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
