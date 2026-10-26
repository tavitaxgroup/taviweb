'use client';

import React, { useMemo, useState } from 'react';
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  CreditCard,
  Disc,
  Droplets,
  FlaskConical,
  Mail,
  MapPin,
  Menu,
  Phone,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Wrench,
  X,
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultVMaxCleanData,
  VMaxCleanEquipmentItem,
  VMaxCleanTemplateData,
} from '../../data/mockData';

interface DemoTemplateRendererProps {
  data?: Record<string, unknown>;
}

export function DemoTemplateRenderer({ data }: DemoTemplateRendererProps) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultVMaxCleanData, data) as VMaxCleanTemplateData,
    [data]
  );

  const [activeTab, setActiveTab] = useState<string>(
    templateData.tabbedShowcase.tabs[0] || 'VỆ SINH CÔNG NGHIỆP'
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<VMaxCleanEquipmentItem[]>([]);
  const [selectedEquipment, setSelectedEquipment] =
    useState<VMaxCleanEquipmentItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const filteredTabItems = useMemo(() => {
    const items = templateData.tabbedShowcase.items;
    const q = searchQuery.trim().toLowerCase();
    const byQuery = q
      ? items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        )
      : items;

    if (activeTab === templateData.tabbedShowcase.tabs[0]) {
      return byQuery;
    }
    const matched = byQuery.filter(
      (item) => item.category.toLowerCase() === activeTab.toLowerCase()
    );
    return matched.length > 0 ? matched : byQuery;
  }, [templateData.tabbedShowcase, activeTab, searchQuery]);

  const handleAddToCart = (item: VMaxCleanEquipmentItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const totalCartAmount = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const num = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return sum + num;
    }, 0);
  }, [cartItems]);

  const renderTopCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'droplet':
        return <Droplets className="h-6 w-6 text-neutral-700" />;
      case 'shield':
        return <ShieldCheck className="h-6 w-6 text-neutral-700" />;
      case 'sparkles':
        return <Sparkles className="h-6 w-6 text-neutral-700" />;
      case 'disc':
        return <Disc className="h-6 w-6 text-neutral-700" />;
      case 'settings':
        return <Settings className="h-6 w-6 text-neutral-700" />;
      default:
        return <Building2 className="h-6 w-6 text-neutral-700" />;
    }
  };

  const renderFeatureCardIcon = (icon: string) => {
    switch (icon) {
      case 'flask':
        return <FlaskConical className="h-10 w-10 text-white/90" />;
      case 'cpu':
        return <Cpu className="h-10 w-10 text-white/90" />;
      case 'wrench':
        return <Wrench className="h-10 w-10 text-white/90" />;
      case 'calendar':
        return <Calendar className="h-10 w-10 text-white/90" />;
      default:
        return <Truck className="h-10 w-10 text-white/90" />;
    }
  };

  const renderGuaranteeIcon = (icon: string) => {
    switch (icon) {
      case 'truck':
        return <Truck className="h-7 w-7 text-[#d9252a]" />;
      case 'credit-card':
        return <CreditCard className="h-7 w-7 text-[#d9252a]" />;
      case 'award':
        return <Award className="h-7 w-7 text-[#d9252a]" />;
      case 'clipboard':
        return <ClipboardCheck className="h-7 w-7 text-[#d9252a]" />;
      default:
        return <RefreshCw className="h-7 w-7 text-[#d9252a]" />;
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-white text-[#333333] antialiased selection:bg-[#d9252a] selection:text-white"
    >
      {/* 1. TOP DARK UTILITY BAR (#222222) */}
      <div className="bg-[#222222] text-[11px] text-neutral-300">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2">
          <span className="hidden sm:inline-block">
            Hotline tư vấn vệ sinh tòa nhà &amp; máy chà sàn:{' '}
            <strong className="text-white">{templateData.business.phone[0]}</strong>
          </span>
          <div className="ml-auto flex flex-wrap items-center gap-3">
            {templateData.topUtilityLinks.map((label, idx) => (
              <React.Fragment key={label}>
                <a
                  href="#lien-he"
                  className="transition hover:text-white"
                >
                  {label}
                </a>
                {idx < templateData.topUtilityLinks.length - 1 && (
                  <span className="text-neutral-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 2. WHITE MAIN HEADER */}
      <header className="relative z-30 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-4">
          {/* 4-Color Block Logo M o n a */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xs bg-[#22c55e] text-lg font-black text-white shadow-2xs">
                M
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-xs bg-[#ef4444] text-lg font-black text-white shadow-2xs">
                o
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-xs bg-[#f59e0b] text-lg font-black text-white shadow-2xs">
                n
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-xs bg-[#06b6d4] text-lg font-black text-white shadow-2xs">
                a
              </span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                VMax Clean
              </span>
              <span className="text-[10px] text-neutral-500">
                Thiết bị &amp; Vệ sinh Tòa nhà
              </span>
            </div>
          </a>

          {/* Center Nav + Red Circle Search Button */}
          <nav className="hidden items-center gap-7 lg:flex">
            {templateData.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-extrabold uppercase tracking-wider transition ${
                  item.active
                    ? 'text-[#d9252a]'
                    : 'text-neutral-700 hover:text-[#d9252a]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Tìm kiếm"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9252a] text-white shadow-xs transition hover:bg-neutral-800"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </nav>

          {/* Right Cart Info */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('san-pham-chinh');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-xs font-bold uppercase text-neutral-700 transition hover:text-[#d9252a]"
            >
              <span>
                GIỎ HÀNG /{' '}
                {totalCartAmount > 0
                  ? `${totalCartAmount.toLocaleString('vi-VN')} ₫`
                  : '0 ₫'}
              </span>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-xs bg-[#d9252a] px-1.5 text-[11px] font-extrabold text-white">
                {cartItems.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-xs border border-neutral-300 p-1.5 text-neutral-700 lg:hidden"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Search Dropdown Bar */}
        {searchOpen && (
          <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-3">
            <div className="mx-auto flex max-w-[600px] items-center gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập tên máy chà sàn, hóa chất tòa nhà hoặc mã thiết bị..."
                className="w-full rounded-xs border border-neutral-300 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#d9252a]"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-xs bg-[#d9252a] px-4 py-1.5 text-xs font-bold text-white"
              >
                Đóng
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-neutral-200 bg-white px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {templateData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-xs font-bold uppercase text-neutral-700 hover:text-[#d9252a]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 3. OVERLAPPING 6-COLUMN TOP CATEGORY ICON STRIP */}
      <div className="relative z-20 mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-2 divide-x divide-y divide-neutral-200 border border-neutral-200 bg-white shadow-md sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
          {templateData.topCategoryStrip.map((cat) => (
            <a
              key={cat.id}
              href="#san-pham-chinh"
              className="group flex flex-col items-center justify-center gap-2 px-3 py-4 text-center transition hover:bg-neutral-50"
            >
              <div className="transition group-hover:scale-110 group-hover:text-[#d9252a]">
                {renderTopCategoryIcon(cat.icon)}
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-700 group-hover:text-[#d9252a]">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 4. BUILDING & INDUSTRIAL CLEANING HERO BANNER */}
      <section
        className="relative -mt-10 bg-cover bg-center pt-28 pb-28 text-white"
        style={{
          backgroundImage: `url(${templateData.hero.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/60" />
        <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
          <p className="text-lg font-medium tracking-wide text-neutral-200 sm:text-2xl">
            {templateData.hero.preTitle}
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
            {templateData.hero.mainTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-neutral-200 sm:text-sm">
            {templateData.hero.description}
          </p>
        </div>
      </section>

      {/* 5. 5-COLUMN COLORED FEATURE CARDS (OVERLAPPING HERO BOTTOM) */}
      <section
        id="gioi-thieu"
        className="relative z-20 mx-auto -mt-14 max-w-[1200px] px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {templateData.coloredServiceCards.map((card) => (
            <div
              key={card.id}
              style={{ backgroundColor: card.bgColor }}
              className="flex flex-col items-center justify-between p-6 text-center text-white shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  {renderFeatureCardIcon(card.icon)}
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-white sm:text-sm">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[11px] leading-relaxed text-white/85">
                  {card.description}
                </p>
              </div>

              <a
                href="#san-pham-chinh"
                className="mt-5 inline-block rounded-full bg-black/35 px-4 py-1.5 text-[11px] font-bold text-white transition hover:bg-white hover:text-neutral-900"
              >
                {card.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TABBED SHOWCASE (VỆ SINH CÔNG NGHIỆP / HÓA CHẤT / MÁY CHÀ SÀN) */}
      <section id="san-pham-chinh" className="mx-auto max-w-[1200px] px-4 py-14">
        {/* Pill Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {templateData.tabbedShowcase.tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-xs px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition ${
                  active
                    ? 'bg-[#d9252a] text-white shadow-xs'
                    : 'bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-[#d9252a]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 4-Column Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTabItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between border border-neutral-200 bg-white p-4 text-center transition hover:border-[#d9252a] hover:shadow-md"
            >
              <div>
                <div
                  onClick={() => setSelectedEquipment(item)}
                  className="relative mb-4 flex h-48 cursor-pointer items-center justify-center overflow-hidden bg-white p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-[#d9252a] px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3
                  onClick={() => setSelectedEquipment(item)}
                  className="line-clamp-2 cursor-pointer text-xs font-medium text-neutral-700 transition hover:text-[#d9252a]"
                >
                  {item.name}
                </h3>
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-center gap-2">
                  {item.originalPrice && (
                    <span className="text-[11px] text-neutral-400 line-through">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-extrabold text-[#d9252a]">
                    {item.price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddToCart(item)}
                  className="mt-3 inline-flex items-center justify-center border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-[11px] font-bold uppercase text-neutral-700 transition hover:border-[#d9252a] hover:bg-[#d9252a] hover:text-white"
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ƯU ĐÃI MỖI NGÀY (3x2 HORIZONTAL EQUIPMENT CARDS ON #f5f5f5) */}
      <section id="uu-dai" className="bg-[#f5f5f5] py-14">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="text-xl font-extrabold uppercase tracking-wider text-neutral-800">
              {templateData.dailyDeals.title}
            </h2>
            <div className="mt-2 h-0.5 w-14 bg-[#d9252a]" />
          </div>

          <div className="border border-neutral-200 bg-white p-6 shadow-xs">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {templateData.dailyDeals.items.map((deal) => (
                <div
                  key={deal.id}
                  className="group flex items-center gap-4 border-b border-neutral-100 pb-4 last:border-b-0"
                >
                  <div
                    onClick={() => setSelectedEquipment(deal)}
                    className="h-28 w-28 shrink-0 cursor-pointer overflow-hidden border border-neutral-100 bg-white p-2"
                  >
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="h-full w-full object-contain transition group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h3
                      onClick={() => setSelectedEquipment(deal)}
                      className="line-clamp-2 cursor-pointer text-xs font-medium text-neutral-700 transition hover:text-[#d9252a]"
                    >
                      {deal.name}
                    </h3>
                    <span className="mt-1.5 text-xs font-extrabold text-[#d9252a]">
                      {deal.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(deal)}
                      className="mt-2 border border-neutral-300 bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase text-neutral-700 transition hover:border-[#d9252a] hover:bg-[#d9252a] hover:text-white"
                    >
                      THÊM VÀO GIỎ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. SẢN PHẨM HOT (5-COLUMN GRID) + 5 GUARANTEE BOXES */}
      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-xl font-extrabold uppercase tracking-wider text-neutral-800">
            {templateData.hotProducts.title}
          </h2>
          <div className="mt-2 h-0.5 w-14 bg-[#d9252a]" />
        </div>

        {/* 5-Column Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {templateData.hotProducts.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between border border-neutral-200 bg-white p-4 text-center transition hover:border-[#d9252a]"
            >
              <div>
                <div
                  onClick={() => setSelectedEquipment(item)}
                  className="mb-3 flex h-40 cursor-pointer items-center justify-center overflow-hidden p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition group-hover:scale-105"
                  />
                </div>
                <h3
                  onClick={() => setSelectedEquipment(item)}
                  className="line-clamp-2 cursor-pointer text-xs font-medium text-neutral-700 hover:text-[#d9252a]"
                >
                  {item.name}
                </h3>
              </div>

              <div className="mt-3">
                <p className="text-xs font-extrabold text-[#d9252a]">
                  {item.price}
                </p>
                <button
                  type="button"
                  onClick={() => handleAddToCart(item)}
                  className="mt-2.5 border border-neutral-300 bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase text-neutral-700 transition hover:border-[#d9252a] hover:bg-[#d9252a] hover:text-white"
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 5 Light Gray Guarantee Boxes */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {templateData.hotProducts.guarantees.map((g) => (
            <div
              key={g.id}
              className="flex items-center gap-3.5 border border-neutral-200 bg-[#f4f4f4] px-4 py-3.5"
            >
              <div className="shrink-0">{renderGuaranteeIcon(g.icon)}</div>
              <div>
                <h4 className="text-xs font-extrabold text-neutral-800">
                  {g.title}
                </h4>
                <p className="text-[11px] text-neutral-500">{g.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. 3-COLUMN MINI PRODUCT LISTS + 6 CORPORATE CLIENT LOGOS */}
      <section className="mx-auto max-w-[1200px] border-t border-neutral-200 px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: DỊCH VỤ GẦN ĐÂY */}
          <div>
            <div className="mb-5 border-b border-neutral-200 pb-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                DỊCH VỤ &amp; VẬT TƯ GẦN ĐÂY
              </h3>
              <div className="mt-1 h-0.5 w-10 bg-[#d9252a]" />
            </div>
            <div className="space-y-4">
              {templateData.tripleColumns.recentItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 border border-neutral-200 object-contain p-1"
                  />
                  <div>
                    <h4
                      onClick={() => setSelectedEquipment(item)}
                      className="line-clamp-2 cursor-pointer text-xs font-medium text-neutral-700 hover:text-[#d9252a]"
                    >
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs font-extrabold text-[#d9252a]">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: THIẾT BỊ NỔI BẬT */}
          <div>
            <div className="mb-5 border-b border-neutral-200 pb-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                THIẾT BỊ NỔI BẬT
              </h3>
              <div className="mt-1 h-0.5 w-10 bg-[#d9252a]" />
            </div>
            <div className="space-y-4">
              {templateData.tripleColumns.featuredItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 border border-neutral-200 object-contain p-1"
                  />
                  <div>
                    <h4
                      onClick={() => setSelectedEquipment(item)}
                      className="line-clamp-2 cursor-pointer text-xs font-medium text-neutral-700 hover:text-[#d9252a]"
                    >
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs font-extrabold text-[#d9252a]">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: ĐƯỢC ĐÁNH GIÁ NHIỀU */}
          <div>
            <div className="mb-5 border-b border-neutral-200 pb-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-800">
                ĐƯỢC ĐÁNH GIÁ NHIỀU
              </h3>
              <div className="mt-1 h-0.5 w-10 bg-[#d9252a]" />
            </div>
            <div className="space-y-4">
              {templateData.tripleColumns.topRatedItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 shrink-0 border border-neutral-200 object-contain p-1"
                  />
                  <div>
                    <h4
                      onClick={() => setSelectedEquipment(item)}
                      className="line-clamp-2 cursor-pointer text-xs font-medium text-neutral-700 hover:text-[#d9252a]"
                    >
                      {item.name}
                    </h4>
                    <div className="mt-0.5 flex items-center gap-0.5 text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-3 w-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="mt-0.5 text-xs font-extrabold text-[#d9252a]">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Corporate Client Logos Strip */}
        <div className="mt-12 grid grid-cols-2 items-center gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-3 lg:grid-cols-6">
          {templateData.corporateClients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col items-center justify-center rounded-xs border border-neutral-100 bg-neutral-50/60 py-3 text-center transition hover:border-neutral-300"
            >
              <span
                className="text-xl font-black tracking-tight"
                style={{ color: client.color }}
              >
                {client.name}
              </span>
              <span className="text-[10px] font-medium text-neutral-500">
                {client.subtitle}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. DARK NEWSLETTER BAR (#262626) + 4-COLUMN FOOTER */}
      <footer id="lien-he" className="bg-white text-xs text-neutral-600">
        {/* Dark Newsletter Bar */}
        <div className="bg-[#262626] py-5 text-white">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider sm:text-sm">
              {templateData.footer.newsletterHeading}
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setNewsletterSubscribed(true);
                  setNewsletterEmail('');
                }
              }}
              className="flex w-full max-w-md items-center overflow-hidden rounded-xs bg-white sm:w-auto sm:flex-1"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email doanh nghiệp của bạn..."
                className="w-full px-3.5 py-2 text-xs text-neutral-800 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-[#d9252a] px-5 py-2 text-xs font-extrabold uppercase text-white transition hover:bg-neutral-800"
              >
                ĐĂNG KÝ
              </button>
            </form>

            {newsletterSubscribed && (
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" /> Đã nhận đăng ký!
              </span>
            )}
          </div>
        </div>

        {/* 4-Column Footer */}
        <div className="mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: THÔNG TIN LIÊN HỆ */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                THÔNG TIN LIÊN HỆ
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-600">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d9252a]" />
                  <span>{templateData.business.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#d9252a]" />
                  <span>{templateData.business.phone.join(' - ')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#d9252a]" />
                  <span>{templateData.business.email.join(' / ')}</span>
                </li>
              </ul>
            </div>

            {/* Col 2: DANH MỤC */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                DANH MỤC
              </h4>
              <ul className="space-y-2">
                {templateData.footer.categories.map((cat, idx) => (
                  <li key={cat}>
                    <a
                      href="#san-pham-chinh"
                      className={`transition hover:text-[#d9252a] ${
                        idx === 0 ? 'font-bold text-[#d9252a]' : 'text-neutral-600'
                      }`}
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: SẢN PHẨM BÁN CHẠY (3x2 grid) */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                SẢN PHẨM BÁN CHẠY
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {templateData.footer.bestSellerImages.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden border border-neutral-200 bg-neutral-50 p-1"
                  >
                    <img
                      src={imgUrl}
                      alt={`Thiết bị bán chạy ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: HÌNH THỨC THANH TOÁN */}
            <div>
              <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-neutral-800">
                HÌNH THỨC THANH TOÁN
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {templateData.footer.paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="flex items-center justify-center rounded-xs border border-neutral-200 bg-neutral-50 px-2 py-2.5 text-center text-[10px] font-bold uppercase text-neutral-700"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 bg-neutral-50 py-3.5 text-center text-[11px] text-neutral-500">
          {templateData.business.copyright}
        </div>
      </footer>

      {/* EQUIPMENT DETAIL MODAL */}
      {selectedEquipment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-lg rounded-xs bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-3 right-3 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex items-center justify-center border border-neutral-200 p-4">
                <img
                  src={selectedEquipment.image}
                  alt={selectedEquipment.name}
                  className="max-h-48 object-contain"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-neutral-100 px-2 py-0.5 text-[10px] font-bold uppercase text-neutral-600">
                    SKU: {selectedEquipment.sku}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-neutral-900">
                    {selectedEquipment.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    Quy cách: {selectedEquipment.unit}
                  </p>
                  <p className="mt-3 text-lg font-black text-[#d9252a]">
                    {selectedEquipment.price}
                  </p>
                </div>
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleAddToCart(selectedEquipment);
                      setSelectedEquipment(null);
                    }}
                    className="flex-1 bg-[#d9252a] py-2 text-xs font-bold uppercase text-white transition hover:bg-neutral-800"
                  >
                    <ShoppingCart className="mr-1 inline-block h-3.5 w-3.5" />
                    Thêm vào giỏ
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedEquipment(null)}
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
