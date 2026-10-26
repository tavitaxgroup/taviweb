'use client';

import React, { useMemo, useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronDown,
  Layers,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Star,
  Globe,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultOfficeCleanData,
  OfficeCleanProductItem,
  OfficeCleanTemplateData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultOfficeCleanData, data) as OfficeCleanTemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFirstTab, setActiveFirstTab] = useState<string>(
    templateData.firstShowcase.tabs[0] || 'DỤNG CỤ VỆ SINH'
  );
  const [activeSecondTab, setActiveSecondTab] = useState<string>(
    templateData.secondShowcase.tabs[0] || 'LƯU TRỮ & VỆ SINH'
  );
  const [cartItems, setCartItems] = useState<OfficeCleanProductItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<OfficeCleanProductItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const firstFilteredItems = useMemo(() => {
    const list = templateData.firstShowcase.items;
    const q = searchQuery.trim().toLowerCase();
    const byQuery = q
      ? list.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        )
      : list;

    if (activeFirstTab === templateData.firstShowcase.tabs[0]) {
      return byQuery;
    }
    const tabMatches = byQuery.filter(
      (item) => item.category.toLowerCase() === activeFirstTab.toLowerCase()
    );
    return tabMatches.length > 0 ? tabMatches : byQuery.slice(0, 5);
  }, [templateData.firstShowcase, activeFirstTab, searchQuery]);

  const secondFilteredItems = useMemo(() => {
    const list = templateData.secondShowcase.items;
    if (activeSecondTab === templateData.secondShowcase.tabs[0]) {
      return list;
    }
    const tabMatches = list.filter(
      (item) => item.category.toLowerCase() === activeSecondTab.toLowerCase()
    );
    return tabMatches.length > 0 ? tabMatches : list.slice(0, 5);
  }, [templateData.secondShowcase, activeSecondTab]);

  const handleAddToCart = (item: OfficeCleanProductItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const numeric = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return sum + numeric;
    }, 0);
  }, [cartItems]);

  const renderGuaranteeIcon = (icon: string) => {
    switch (icon) {
      case 'award':
        return <Award className="h-9 w-9 text-[#e51919]" />;
      case 'layers':
        return <Layers className="h-9 w-9 text-[#e51919]" />;
      case 'laptop':
        return <Laptop className="h-9 w-9 text-[#e51919]" />;
      default:
        return <ShieldCheck className="h-9 w-9 text-[#e51919]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#333333] antialiased selection:bg-[#e51919] selection:text-white">
      {/* TWO-TIER HEADER (#efefef) */}
      <header className="border-b border-neutral-300 bg-[#efefef]">
        {/* Top Row */}
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 px-4 py-4">
          {/* Logo */}
          <a href="#top" className="group flex flex-col">
            <div className="flex items-baseline gap-0.5 text-3xl font-extrabold tracking-tight">
              <span className="text-[#e51919]">Office</span>
              <span className="font-light text-neutral-700">Mona</span>
            </div>
            <span className="text-[11px] font-medium tracking-wide text-neutral-500">
              {templateData.business.tagline}
            </span>
          </a>

          {/* Center Search Bar */}
          <div className="order-3 flex w-full max-w-md items-center md:order-2 md:w-auto md:flex-1">
            <div className="flex w-full overflow-hidden rounded-sm border border-neutral-300 bg-white shadow-xs">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm dụng cụ vệ sinh, gói tạp vụ văn phòng..."
                className="w-full px-3.5 py-2 text-xs text-neutral-700 outline-none placeholder:text-neutral-400"
              />
              <button
                type="button"
                aria-label="Tìm kiếm"
                className="flex items-center justify-center bg-[#55585b] px-4 text-white transition hover:bg-[#e51919]"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Auth & Cart */}
          <div className="order-2 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-neutral-600 md:order-3">
            <a
              href="#lien-he"
              className="transition hover:text-[#e51919]"
            >
              ĐĂNG NHẬP
            </a>
            <span className="text-neutral-300">|</span>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('dung-cu');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 transition hover:text-[#e51919]"
            >
              <span>
                GIỎ HÀNG /{' '}
                {totalCartPrice > 0
                  ? `${totalCartPrice.toLocaleString('vi-VN')} ₫`
                  : '0 ₫'}
              </span>
              <span className="relative flex h-7 w-7 items-center justify-center rounded-xs border border-neutral-400 bg-white text-neutral-700">
                <ShoppingBag className="h-3.5 w-3.5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#e51919] text-[10px] font-bold text-white">
                    {cartItems.length}
                  </span>
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="ml-1 rounded-xs border border-neutral-300 bg-white p-1.5 text-neutral-700 lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Bottom Category Navigation Bar */}
        <nav className="border-t border-neutral-200/80 bg-[#e7e7e7]">
          <div className="mx-auto hidden max-w-[1220px] items-center justify-between px-4 lg:flex">
            {templateData.navigation.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className={`flex items-center gap-1 py-3 text-[11px] font-bold uppercase tracking-wider transition ${
                  nav.isHighlight
                    ? 'text-[#333333] hover:text-[#e51919]'
                    : 'text-[#555555] hover:text-[#e51919]'
                }`}
              >
                {nav.isHighlight && (
                  <Star className="h-3.5 w-3.5 fill-[#333333] text-[#333333]" />
                )}
                <span>{nav.label}</span>
                {nav.hasDropdown && (
                  <ChevronDown className="h-3 w-3 opacity-60" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="grid grid-cols-2 gap-2 border-t border-neutral-300 bg-white p-4 lg:hidden">
              {templateData.navigation.map((nav) => (
                <a
                  key={nav.label}
                  href={nav.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 rounded-xs bg-neutral-100 px-3 py-2 text-xs font-bold text-neutral-700 hover:bg-[#e51919] hover:text-white"
                >
                  {nav.isHighlight && <Star className="h-3 w-3 fill-current" />}
                  <span>{nav.label}</span>
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* FLAT-LAY STUDIO OFFICE HERO BANNER (#e8e9eb) */}
      <section
        id="chon-nhanh"
        className="relative overflow-hidden border-b border-neutral-200 bg-[#e8e9eb]"
      >
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-8 px-4 py-12 lg:grid-cols-12 lg:py-16">
          {/* Left Typography & Callout */}
          <div className="relative z-10 space-y-4 lg:col-span-5">
            <p className="font-serif text-2xl italic text-neutral-700 sm:text-3xl">
              {templateData.hero.leadText}
            </p>
            <h1 className="text-6xl font-black tracking-tight text-[#e51919] sm:text-7xl">
              {templateData.hero.discountBig}
            </h1>
            <p className="max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm">
              {templateData.hero.description}
            </p>

            {/* CTA & Dashed Connector to YOUR OFFICE */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#dung-cu"
                className="inline-flex items-center justify-center border-2 border-neutral-700 bg-transparent px-7 py-2.5 text-sm font-bold uppercase tracking-wider text-neutral-800 transition hover:border-[#e51919] hover:bg-[#e51919] hover:text-white"
              >
                {templateData.hero.ctaLabel}
              </a>

              <div className="hidden items-center sm:flex">
                <span className="h-2 w-2 rounded-full bg-neutral-700" />
                <span className="w-16 border-t-2 border-dashed border-neutral-500" />
              </div>

              <div className="relative inline-flex flex-col items-center justify-center rounded-full border-2 border-dashed border-neutral-500 bg-white/90 px-5 py-3 shadow-xs">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                  CLEAN &amp; FRESH
                </span>
                <span className="text-xs font-black tracking-wider text-[#e51919]">
                  {templateData.hero.badgeLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Right Studio Flat-lay Composition */}
          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden rounded-sm border-4 border-white bg-white shadow-md">
              <img
                src={templateData.hero.showcaseImage}
                alt={templateData.business.name}
                className="h-[320px] w-full object-cover sm:h-[390px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/35 via-transparent to-white/10" />

              {/* Flat-lay Labels */}
              <div className="absolute top-4 left-4 rounded-xs bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs">
                ★ Chuẩn Vệ Sinh Công Sở 5S
              </div>
              <div className="absolute right-4 bottom-4 rounded-xs bg-[#e51919] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                Khảo Sát Tận Nơi Miễn Phí
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TABBED PRODUCT & SERVICE SHOWCASE (5x2 Grid) */}
      <section id="dung-cu" className="mx-auto max-w-[1220px] px-4 py-12">
        {/* Centered Tab Header with Red Star above active tab */}
        <div className="mb-10 flex flex-wrap items-end justify-center gap-6 border-b border-neutral-200 pb-3 sm:gap-10">
          {templateData.firstShowcase.tabs.map((tab) => {
            const isActive = activeFirstTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFirstTab(tab)}
                className="group relative flex flex-col items-center pt-4 text-xs font-extrabold uppercase tracking-wider transition sm:text-sm"
              >
                {isActive && (
                  <Star className="mb-1 h-4 w-4 fill-[#e51919] text-[#e51919]" />
                )}
                <span
                  className={
                    isActive
                      ? 'text-[#e51919]'
                      : 'text-neutral-700 group-hover:text-[#e51919]'
                  }
                >
                  {tab}
                </span>
                {isActive && (
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full bg-[#e51919]" />
                )}
              </button>
            );
          })}
        </div>

        {/* 5-Column x 2-Row Clean White Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {firstFilteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-3 flex h-44 w-full items-center justify-center overflow-hidden bg-white p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 rounded-xs bg-[#e51919] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    {item.badge}
                  </span>
                )}
                <div className="absolute inset-x-2 bottom-2 flex justify-center gap-1.5 opacity-0 transition group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className="rounded-xs bg-[#e51919] px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-xs hover:bg-neutral-800"
                  >
                    + Giỏ hàng
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="rounded-xs bg-neutral-800/90 px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-xs hover:bg-[#e51919]"
                  >
                    Chi tiết
                  </button>
                </div>
              </div>

              <h3
                onClick={() => setSelectedItem(item)}
                className="line-clamp-2 cursor-pointer text-xs font-medium leading-snug text-neutral-600 transition hover:text-[#e51919]"
              >
                {item.name}
              </h3>

              <div className="mt-1.5 flex items-center justify-center gap-2">
                {item.originalPrice && (
                  <span className="text-[11px] text-neutral-400 line-through">
                    {item.originalPrice}
                  </span>
                )}
                <span className="text-xs font-extrabold text-neutral-900">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DARK PARALLAX 4-COLUMN GUARANTEE STRIP */}
      <section
        id="tap-vu"
        className="relative bg-cover bg-center py-14 text-white"
        style={{
          backgroundImage: `url(${templateData.guarantees.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/75" />
        <div className="relative z-10 mx-auto max-w-[1220px] px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {templateData.guarantees.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xs">
                  {renderGuaranteeIcon(item.icon)}
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-neutral-300">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SECOND TABBED SHOWCASE (LƯU TRỮ & THIẾT BỊ VỆ SINH) */}
      <section id="luu-tru" className="mx-auto max-w-[1220px] px-4 py-12">
        <div className="mb-10 flex flex-wrap items-end justify-center gap-6 border-b border-neutral-200 pb-3 sm:gap-10">
          {templateData.secondShowcase.tabs.map((tab) => {
            const isActive = activeSecondTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveSecondTab(tab)}
                className="group relative flex flex-col items-center pt-4 text-xs font-extrabold uppercase tracking-wider transition sm:text-sm"
              >
                {isActive && (
                  <Star className="mb-1 h-4 w-4 fill-[#e51919] text-[#e51919]" />
                )}
                <span
                  className={
                    isActive
                      ? 'text-[#e51919]'
                      : 'text-neutral-700 group-hover:text-[#e51919]'
                  }
                >
                  {tab}
                </span>
                {isActive && (
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full bg-[#e51919]" />
                )}
              </button>
            );
          })}
        </div>

        {/* 5-Column Grid (7 items: 5 on row 1, 2 on row 2 just like reference screenshot) */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {secondFilteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-3 flex h-44 w-full items-center justify-center overflow-hidden bg-white p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 rounded-xs bg-[#e51919] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                    {item.badge}
                  </span>
                )}
                <div className="absolute inset-x-2 bottom-2 flex justify-center gap-1.5 opacity-0 transition group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item)}
                    className="rounded-xs bg-[#e51919] px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-xs hover:bg-neutral-800"
                  >
                    + Giỏ hàng
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="rounded-xs bg-neutral-800/90 px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-xs hover:bg-[#e51919]"
                  >
                    Chi tiết
                  </button>
                </div>
              </div>

              <h3
                onClick={() => setSelectedItem(item)}
                className="line-clamp-2 cursor-pointer text-xs font-medium leading-snug text-neutral-600 transition hover:text-[#e51919]"
              >
                {item.name}
              </h3>

              <div className="mt-1.5 flex items-center justify-center gap-2">
                <span className="text-xs font-extrabold text-neutral-900">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIN TỨC (NEWS SECTION) ON DARK OFFICE WORKSPACE PARALLAX */}
      <section
        id="bao-tri"
        className="relative bg-cover bg-center py-14"
        style={{
          backgroundImage: `url(${templateData.newsSection.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/75" />
        <div className="relative z-10 mx-auto max-w-[1220px] px-4">
          <div className="mb-8 flex flex-col items-center text-center">
            <Star className="mb-1 h-4 w-4 fill-white text-white" />
            <h2 className="text-lg font-extrabold uppercase tracking-wider text-white">
              {templateData.newsSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {templateData.newsSection.posts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden bg-white shadow-md transition hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#e51919] px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 text-center">
                  <h3 className="line-clamp-2 text-sm font-bold text-neutral-800 transition group-hover:text-[#e51919]">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] text-neutral-400">
                    {post.date}
                  </p>
                  <div className="mx-auto my-2.5 h-0.5 w-8 bg-neutral-200" />
                  <p className="line-clamp-3 text-xs leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 PARTNER BRAND LOGOS STRIP */}
      <section className="border-b border-neutral-200 bg-white py-8">
        <div className="mx-auto max-w-[1220px] px-4">
          <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {templateData.partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center rounded-xs border border-transparent py-3 text-center transition hover:border-neutral-200"
              >
                <span
                  className="text-xl font-black tracking-tight sm:text-2xl"
                  style={{ color: partner.accentColor }}
                >
                  {partner.name}
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                  {partner.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-COLUMN FOOTER + BOTTOM NEWSLETTER BAR */}
      <footer id="lien-he" className="bg-white pt-12 text-xs text-neutral-600">
        <div className="mx-auto max-w-[1220px] px-4 pb-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Col 1: Brand & Contact Info (3 cols) */}
            <div className="space-y-3 lg:col-span-3">
              <div className="flex items-baseline gap-0.5 text-2xl font-extrabold tracking-tight">
                <span className="text-[#e51919]">Office</span>
                <span className="font-light text-neutral-700">Mona</span>
              </div>
              <p className="text-[11px] text-neutral-500">
                {templateData.business.tagline}
              </p>

              <ul className="space-y-2 pt-2 text-xs text-neutral-600">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e51919]" />
                  <span>{templateData.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#e51919]" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#e51919]" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: SẢN PHẨM BÁN CHẠY 3x2 Thumbnail Grid (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                SẢN PHẨM BÁN CHẠY
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {templateData.footer.bestSellers.map((bs) => (
                  <div
                    key={bs.id}
                    title={`${bs.name} - ${bs.price}`}
                    className="group relative aspect-square overflow-hidden border border-neutral-200 bg-neutral-50 p-1"
                  >
                    <img
                      src={bs.image}
                      alt={bs.name}
                      className="h-full w-full object-contain transition group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: MENU (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                MENU
              </h4>
              <ul className="space-y-2">
                {templateData.footer.menuLinks.map((link, idx) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className={`transition hover:text-[#e51919] ${
                        idx === 0 ? 'font-bold text-[#e51919]' : 'text-neutral-600'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: DANH MỤC SẢN PHẨM (4 cols with 2 sub-columns) */}
            <div className="lg:col-span-4">
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                DANH MỤC SẢN PHẨM
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {templateData.footer.categoryColumns.map((col, colIndex) => (
                  <ul key={colIndex} className="space-y-2">
                    {col.map((cat) => (
                      <li key={cat}>
                        <a
                          href="#dung-cu"
                          className="text-neutral-600 transition hover:text-[#e51919]"
                        >
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social + Payment + Newsletter Strip */}
        <div className="border-t border-neutral-200 bg-[#f9f9f9] py-6">
          <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-6 px-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {[Globe, Share2, MessageCircle, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#lien-he"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 text-white transition hover:bg-[#e51919]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            {/* Payment Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              {['VISA', 'PayPal', 'STRIPE', 'MasterCard', 'COD / VAT'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-xs border border-neutral-300 bg-white px-2.5 py-1 shadow-2xs"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterSuccess(true);
                  setNewsletterEmail('');
                }
              }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                ĐĂNG KÝ
              </span>
              <div className="flex overflow-hidden border border-neutral-300 bg-white">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email nhận báo giá tạp vụ..."
                  className="w-52 px-3 py-1.5 text-xs outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#e51919] px-4 py-1.5 text-xs font-bold uppercase text-white transition hover:bg-neutral-800"
                >
                  GỬI
                </button>
              </div>
              {newsletterSuccess && (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Đã đăng ký!
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-neutral-200 bg-white py-3 text-center text-[11px] text-neutral-500">
          {templateData.business.copyright}
        </div>
      </footer>

      {/* QUICK VIEW MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-lg rounded-sm bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex items-center justify-center border border-neutral-200 p-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="max-h-48 object-contain"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-neutral-100 px-2 py-0.5 text-[10px] font-bold uppercase text-neutral-600">
                    Mã SP: {selectedItem.sku}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-neutral-900">
                    {selectedItem.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    Đơn vị tính: {selectedItem.unit}
                  </p>
                  <p className="mt-3 text-lg font-black text-[#e51919]">
                    {selectedItem.price}
                  </p>
                </div>
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                    className="flex-1 bg-[#e51919] py-2 text-xs font-bold uppercase text-white transition hover:bg-neutral-800"
                  >
                    Thêm vào giỏ
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
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
