'use client';

import React, { useMemo, useState } from 'react';
import {
  Search,
  ShoppingCart,
  Zap,
  Star,
  Sofa,
  Monitor,
  Tv,
  BedDouble,
  Lamp,
  Clock,
  Layers,
  Sparkles,
  Home,
  Heart,
  Armchair,
  Package,
  Bath,
  TicketPercent,
  Baby,
  ChevronRight,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { adaptClonedTemplateData } from '@/lib/demo/clonedTemplateUtils';
import {
  defaultNoiThat27Data,
  type NoiThat27TemplateData,
  type MartProduct
} from '../../data/mockData';

interface Props {
  data?: Record<string, any>;
}

const formatVND = (amount: number) =>
  `${amount.toLocaleString('vi-VN')} ₫`;

export function DemoTemplateRenderer({ data }: Props) {
  const templateData = useMemo(
    () => adaptClonedTemplateData(defaultNoiThat27Data, data) as NoiThat27TemplateData,
    [data]
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<MartProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<{ product: MartProduct; qty: number }[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [gender, setGender] = useState<'nam' | 'nu'>('nam');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2600);
  };

  const addToCart = (product: MartProduct) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalCartAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const matchesSearch = (p: MartProduct) =>
    !searchQuery.trim() ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.code.toLowerCase().includes(searchQuery.toLowerCase());

  const flashSaleProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.section === 'flash-sale' && matchesSearch(p))
        .slice(0, 4),
    [templateData.products, searchQuery]
  );

  const dealHotProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.section === 'deal-hot' && matchesSearch(p))
        .slice(0, 4),
    [templateData.products, searchQuery]
  );

  const smartFurnitureProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.section === 'smart-furniture' && matchesSearch(p))
        .slice(0, 4),
    [templateData.products, searchQuery]
  );

  const familyProducts = useMemo(
    () =>
      templateData.products
        .filter((p) => p.section === 'family' && matchesSearch(p))
        .slice(0, 4),
    [templateData.products, searchQuery]
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderDirIcon = (key: string) => {
    switch (key) {
      case 'sofa':
        return <Sofa className="w-7 h-7 stroke-[1.5]" />;
      case 'desk':
        return <Monitor className="w-7 h-7 stroke-[1.5]" />;
      case 'tv':
        return <Tv className="w-7 h-7 stroke-[1.5]" />;
      case 'bed':
        return <BedDouble className="w-7 h-7 stroke-[1.5]" />;
      case 'lamp':
        return <Lamp className="w-7 h-7 stroke-[1.5]" />;
      case 'clock':
        return <Clock className="w-7 h-7 stroke-[1.5]" />;
      case 'rack':
        return <Layers className="w-7 h-7 stroke-[1.5]" />;
      case 'appliance':
        return <Sparkles className="w-7 h-7 stroke-[1.5]" />;
      case 'pillow':
        return <BedDouble className="w-7 h-7 stroke-[1.5]" />;
      case 'baby':
        return <Baby className="w-7 h-7 stroke-[1.5]" />;
      case 'home':
        return <Home className="w-7 h-7 stroke-[1.5]" />;
      case 'heart':
        return <Heart className="w-7 h-7 stroke-[1.5]" />;
      case 'chair':
        return <Armchair className="w-7 h-7 stroke-[1.5]" />;
      case 'box':
        return <Package className="w-7 h-7 stroke-[1.5]" />;
      case 'bath':
        return <Bath className="w-7 h-7 stroke-[1.5]" />;
      default:
        return <TicketPercent className="w-7 h-7 stroke-[1.5]" />;
    }
  };

  const renderProductCard = (product: MartProduct) => (
    <div
      key={product.id}
      className="bg-white border border-slate-200/80 hover:border-[#f57224] hover:shadow-md transition p-3 flex flex-col justify-between items-center text-center relative group"
    >
      {product.discountPercent && (
        <span className="absolute top-2.5 left-2.5 z-10 bg-[#f57224] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-2xs">
          -{product.discountPercent}%
        </span>
      )}

      <div
        onClick={() => setSelectedProduct(product)}
        className="w-full cursor-pointer flex-1 flex flex-col items-center justify-between"
      >
        <div className="h-40 w-full flex items-center justify-center p-2 overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="pt-2.5 w-full space-y-1">
          <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
            {product.categoryLabel}
          </p>
          <h3 className="text-xs text-slate-700 group-hover:text-[#f57224] font-medium line-clamp-2 min-h-[32px]">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center justify-center gap-0.5 text-amber-400">
              {Array.from({ length: product.rating }).map((_, idx) => (
                <Star key={idx} className="w-3 h-3 fill-current" />
              ))}
            </div>
          )}
          <div className="flex items-center justify-center gap-1.5 flex-wrap pt-0.5">
            {product.oldPrice && (
              <span className="text-[11px] text-slate-400 line-through">
                {formatVND(product.oldPrice)}
              </span>
            )}
            <span className="text-xs font-extrabold text-slate-900">
              {formatVND(product.price)}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => addToCart(product)}
        className="mt-2.5 w-full py-1 bg-slate-100 hover:bg-[#f57224] text-slate-700 hover:text-white text-[11px] font-bold rounded-2xs transition"
      >
        + Thêm vào giỏ
      </button>
    </div>
  );

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f4f4f6] text-slate-800 font-sans selection:bg-[#f57224] selection:text-white"
    >
      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#f57224] text-white px-4 py-3 rounded shadow-xl text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. Dark Navy Header (#0f2537) */}
      <header className="bg-[#102538] text-white sticky top-0 z-30 shadow-md">
        {/* Top Utility Strip */}
        <div className="bg-[#0b1b29] border-b border-white/10 text-[10px] text-slate-300">
          <div className="max-w-[1200px] mx-auto px-4 h-6 flex items-center justify-end gap-5 overflow-x-auto no-scrollbar whitespace-nowrap">
            {templateData.topUtilityLinks.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className={`hover:text-white transition ${
                  idx === 0 ? 'text-sky-400 font-bold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setSearchQuery('');
            }}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f57224] to-amber-400 flex items-center justify-center font-black text-sm">
              M
            </div>
            <div className="text-lg font-black tracking-tight">
              <span className="text-white">{templateData.business.brandTitle}</span>{' '}
              <span className="text-sky-400">{templateData.business.brandHighlight}</span>
            </div>
          </a>

          {/* Search Input + Orange Button + Cart Icon */}
          <div className="flex-1 max-w-[560px] flex items-center gap-3">
            <div className="flex-1 flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={templateData.business.searchPlaceholder}
                className="w-full h-9 px-3.5 bg-white text-slate-800 rounded-l-xs text-xs focus:outline-none"
              />
              <button
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className="h-9 px-4 bg-[#f57224] hover:bg-[#e05e12] text-white rounded-r-xs flex items-center justify-center transition"
                aria-label="Tìm kiếm"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-white hover:text-[#f57224] transition"
              aria-label="Giỏ hàng"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#f57224] text-white text-[10px] font-bold flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>

          {/* Right Campaign Logo Badge */}
          <div className="hidden lg:flex flex-col items-end leading-none bg-gradient-to-r from-[#d81b60] to-[#8e24aa] px-3 py-1.5 rounded-xs">
            <span className="text-[9px] uppercase tracking-widest text-pink-200">
              11.11
            </span>
            <span className="text-xs font-black tracking-wide text-white uppercase">
              {templateData.business.campaignBadge}
            </span>
          </div>
        </div>

        {/* Sub-Navigation Links */}
        <div className="bg-[#163047] border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 h-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar text-[11px] text-slate-200 whitespace-nowrap">
            {templateData.subNavLinks.map((label, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className={`hover:text-amber-300 transition ${
                  idx === 0 ? 'text-amber-300 font-bold' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 2. Hero Mega Campaign Section (4 Top Tabs + 3-Col Crimson Banner) */}
      <section className="bg-gradient-to-b from-pink-100/70 to-[#f4f4f6] py-3 px-4">
        <div className="max-w-[1200px] mx-auto space-y-1.5">
          {/* 4 Promo Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
            {templateData.heroTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection('section-flash-sale')}
                style={{ backgroundColor: tab.bgColor, color: tab.textColor }}
                className="py-2 px-3 text-left text-[11px] font-extrabold uppercase tracking-wide rounded-t-xs hover:opacity-95 transition"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3-Column Mega Sale Banner (#c2185b / #d81b60) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 bg-white p-1.5 border border-pink-200">
            {/* Left Col */}
            <div className="bg-gradient-to-b from-[#d81b60] to-[#ad1457] text-white p-6 flex flex-col justify-between min-h-[290px] relative overflow-hidden">
              <div className="relative z-10 text-center space-y-1">
                <p className="text-sm font-extrabold uppercase tracking-wider text-pink-100">
                  {templateData.megaCampaign.leftTitle}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-amber-300 leading-tight">
                  {templateData.megaCampaign.leftHighlight}
                </h2>
              </div>
              <div className="my-3 h-36 rounded overflow-hidden border border-white/20">
                <img
                  src={templateData.megaCampaign.leftImage}
                  alt={templateData.megaCampaign.leftHighlight}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] text-pink-200 text-center">
                {templateData.megaCampaign.leftNote}
              </p>
            </div>

            {/* Center Col */}
            <div className="bg-gradient-to-b from-[#ad1457] via-[#c2185b] to-[#880e4f] text-white p-6 flex flex-col items-center justify-between text-center min-h-[290px]">
              <div className="bg-[#1a237e] px-4 py-1.5 rounded-xs border border-pink-400/40">
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  {templateData.megaCampaign.centerBadge}
                </span>
              </div>

              <div className="my-2">
                <div className="text-4xl sm:text-5xl font-black tracking-tighter text-amber-300 drop-shadow">
                  {templateData.megaCampaign.centerDates}
                </div>
                <p className="mt-2 text-xs font-bold uppercase text-pink-100 max-w-xs">
                  {templateData.megaCampaign.centerSub}
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection('section-flash-sale')}
                className="px-6 py-1.5 border border-white/80 hover:bg-white hover:text-[#ad1457] text-xs font-bold uppercase rounded-xs transition"
              >
                {templateData.megaCampaign.centerCta}
              </button>
            </div>

            {/* Right Col */}
            <div className="bg-gradient-to-b from-[#d81b60] to-[#ad1457] text-white p-6 flex flex-col justify-between text-center min-h-[290px]">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black uppercase leading-tight text-white">
                  {templateData.megaCampaign.rightTitle}
                </h2>
                <p className="text-xs font-extrabold uppercase text-amber-300">
                  {templateData.megaCampaign.rightHighlight}
                </p>
                <p className="text-[10px] text-pink-100">
                  {templateData.megaCampaign.rightSub}
                </p>
              </div>
              <div className="mt-3 h-40 rounded overflow-hidden border border-white/20">
                <img
                  src={templateData.megaCampaign.rightImage}
                  alt={templateData.megaCampaign.rightTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-[1200px] mx-auto px-4 py-5 space-y-7">
        {/* SECTION 1: FLASH SALE */}
        <section id="section-flash-sale" className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-base font-black uppercase tracking-wide text-[#f57224]">
                <Zap className="w-5 h-5 fill-current" />
                <span>FLASH SALE</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-white">
                <span className="bg-slate-900 px-2 py-0.5 rounded-2xs">
                  {templateData.flashSale.countdown.hours}
                </span>
                <span className="text-slate-800">:</span>
                <span className="bg-slate-900 px-2 py-0.5 rounded-2xs">
                  {templateData.flashSale.countdown.minutes}
                </span>
                <span className="text-slate-800">:</span>
                <span className="bg-slate-900 px-2 py-0.5 rounded-2xs">
                  {templateData.flashSale.countdown.seconds}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('section-smart-furniture')}
              className="text-xs text-slate-500 hover:text-[#f57224] flex items-center gap-0.5"
            >
              <span>Xem Tất Cả</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Left Dark Teal Poster */}
            <div className="bg-[#0e3547] text-white p-5 flex flex-col items-center justify-between text-center min-h-[260px]">
              <p className="text-xs font-bold uppercase text-cyan-200 leading-snug">
                {templateData.flashSale.posterTitle}
              </p>
              <div className="w-28 h-28 rounded-full bg-[#f57224] border-4 border-amber-300 flex flex-col items-center justify-center shadow-lg my-2">
                <Zap className="w-6 h-6 text-amber-200 fill-current" />
                <span className="text-sm font-black uppercase leading-none mt-1">
                  {templateData.flashSale.posterBadge}
                </span>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className="w-full py-1.5 border border-cyan-300/60 text-cyan-200 hover:bg-cyan-500 hover:text-white text-[11px] font-bold uppercase transition"
              >
                {templateData.flashSale.posterCta}
              </button>
            </div>

            {flashSaleProducts.map(renderProductCard)}
          </div>
        </section>

        {/* SECTION 2: DANH MỤC (8x2 = 16 Line-Art Categories) */}
        <section className="space-y-2.5">
          <h2 className="text-xs font-extrabold uppercase text-slate-700 tracking-wide">
            DANH MỤC
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {templateData.directoryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className="bg-white border border-slate-200/80 hover:border-[#f57224] hover:shadow-xs p-3 flex flex-col items-center justify-center text-center gap-2 transition group h-28"
              >
                <div className="text-slate-700 group-hover:text-[#f57224] transition-colors">
                  {renderDirIcon(cat.iconKey)}
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-700 group-hover:text-[#f57224] leading-tight line-clamp-2">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 3: XU HƯỚNG TÌM KIẾM */}
        <section className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-extrabold uppercase text-slate-700">
                XU HƯỚNG TÌM KIẾM
              </h2>
              <span className="text-[11px] text-slate-400">
                Đã cập nhật 11AM
              </span>
            </div>
            <span className="text-xs text-slate-500">Xem Tất Cả &gt;</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {templateData.trendingSearches.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSearchQuery('Bàn');
                  scrollToSection('section-smart-furniture');
                }}
                className="relative h-20 rounded-xs overflow-hidden cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.hashtag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent flex items-end justify-center p-1.5">
                  <span className="text-[10px] font-bold text-white uppercase tracking-tight text-center">
                    {item.hashtag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Deal hot trong ngày */}
        <section className="space-y-2.5">
          <h2 className="text-xs font-extrabold text-slate-800">
            Deal hot trong ngày
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {dealHotProducts.map(renderProductCard)}

            {/* Right Top Deal Banner */}
            <div className="bg-gradient-to-b from-[#0a2342] to-[#123c69] text-white p-5 flex flex-col items-center justify-between text-center min-h-[260px]">
              <div>
                <span className="text-lg font-black uppercase text-sky-300 block">
                  TOP DEAL
                </span>
                <span className="text-xs font-bold uppercase text-white">
                  KHUYẾN MÃI KHỦNG GIẢM ĐẾN 50%
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=500&q=80"
                alt="Top Deal Nội Thất"
                className="w-full h-32 object-cover rounded my-2 border border-white/20"
              />
              <button
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className="w-full py-1.5 border border-sky-300 text-sky-200 hover:bg-sky-500 hover:text-white text-[11px] font-bold uppercase transition"
              >
                MUA NGAY
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: Nội thất thông minh (Left Lifestyle Poster + 4 Smart Furniture Products) */}
        <section id="section-smart-furniture" className="space-y-2.5">
          <h2 className="text-xs font-extrabold text-slate-800">
            Nội thất thông minh
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Left Vertical Lifestyle Poster ("Nội thất xinh Ưu đãi đến 50%") */}
            <div className="relative min-h-[260px] overflow-hidden flex flex-col justify-between p-5 text-white group">
              <img
                src={templateData.smartFurnitureBanner.image}
                alt={templateData.smartFurnitureBanner.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/45" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold">
                  {templateData.smartFurnitureBanner.title}
                </h3>
                <p className="text-xs text-slate-100">
                  {templateData.smartFurnitureBanner.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(smartFurnitureProducts[0])}
                className="relative z-10 w-full py-1.5 border border-white/80 bg-slate-900/50 hover:bg-white hover:text-slate-900 text-[11px] font-bold uppercase transition"
              >
                {templateData.smartFurnitureBanner.ctaLabel}
              </button>
            </div>

            {smartFurnitureProducts.map(renderProductCard)}
          </div>
        </section>

        {/* SECTION 6: Gia đình là số một */}
        <section className="space-y-2.5">
          <h2 className="text-xs font-extrabold text-slate-800">
            Gia đình là số một
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {familyProducts.map(renderProductCard)}

            {/* Right Vertical Lifestyle Poster */}
            <div className="relative min-h-[260px] overflow-hidden flex flex-col justify-between p-5 text-white group">
              <img
                src={templateData.smartFurnitureBanner.image}
                alt="Nội thất xinh"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/45" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold">Nội thất xinh</h3>
                <p className="text-xs text-slate-100">Ưu đãi đến 50%</p>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('section-smart-furniture')}
                className="relative z-10 w-full py-1.5 border border-white/80 bg-slate-900/50 hover:bg-white hover:text-slate-900 text-[11px] font-bold uppercase transition"
              >
                MUA NGAY
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Dark Navy Footer (#132535) matching NT030 screenshot */}
      <footer className="mt-8">
        <div className="bg-[#122636] text-slate-300 py-8 px-4 text-[11px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Col 1: LIÊN HỆ VỚI MONA */}
            <div className="md:col-span-3 space-y-1.5">
              <h4 className="text-xs font-extrabold uppercase text-white mb-2">
                LIÊN HỆ VỚI MONA HOME
              </h4>
              <p>{templateData.business.workingHours}</p>
              <p>Trung tâm DVKH: {templateData.business.address}</p>
              <p>Hotline: {templateData.business.phone.join(' - ')}</p>
              <ul className="space-y-1 pt-1 text-slate-400">
                <li>Trung tâm hỗ trợ</li>
                <li>Hướng dẫn đặt hàng</li>
                <li>Giao hàng & Nhận hàng</li>
                <li>Hướng dẫn đổi trả hàng</li>
              </ul>
            </div>

            {/* Col 2: VỀ CHÚNG TÔI */}
            <div className="md:col-span-3 space-y-1.5">
              <h4 className="text-xs font-extrabold uppercase text-white mb-2">
                MONA HOME VIỆT NAM
              </h4>
              <ul className="space-y-1 text-slate-400">
                <li>Về {templateData.business.name}</li>
                <li>Bán hàng cùng Mona</li>
                <li>Chương trình Đối tác Nội thất</li>
                <li>Tuyển dụng</li>
                <li>Điều khoản mua bán hàng hóa</li>
                <li>Chính sách bảo mật</li>
                <li>Danh mục sản phẩm</li>
              </ul>
            </div>

            {/* Col 3: ĐĂNG KÝ NHẬN TIN */}
            <div className="md:col-span-6 space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-white">
                ĐĂNG KÝ NHẬN TIN TỪ MONA HOME
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    showToast('Đã đăng ký nhận bản tin khuyến mãi nội thất!');
                    setNewsletterEmail('');
                  }
                }}
                className="flex flex-wrap items-center gap-3"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Địa chỉ email của bạn"
                  className="flex-1 min-w-[200px] h-9 px-3 bg-white text-slate-800 rounded-xs text-xs focus:outline-none"
                />
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    checked={gender === 'nam'}
                    onChange={() => setGender('nam')}
                  />
                  <span>Nam</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    checked={gender === 'nu'}
                    onChange={() => setGender('nu')}
                  />
                  <span>Nữ</span>
                </label>
                <button
                  type="submit"
                  className="h-9 px-5 bg-[#f57224] hover:bg-[#e05e12] text-white font-bold uppercase rounded-xs transition"
                >
                  ĐĂNG KÝ
                </button>
              </form>

              <div className="pt-2 space-y-1 text-slate-400 text-[10px]">
                <p className="text-amber-400 font-bold text-xs">
                  THẢNH THƠI MUA SẮM NỘI THẤT — Tải App Mona
                </p>
                <p>{templateData.business.businessLicense}</p>
                <p>Địa chỉ đăng ký kinh doanh: {templateData.business.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* White Payment & Delivery Strip */}
        <div className="bg-white border-b border-slate-200 py-5 px-4 text-xs">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-bold uppercase text-slate-700 mb-2">
                CÁCH THỨC THANH TOÁN
              </h5>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                <span className="border border-slate-200 px-2.5 py-1 rounded text-blue-800">
                  VISA
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded text-orange-600">
                  MasterCard
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded text-emerald-700">
                  JCB
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded text-slate-700">
                  THANH TOÁN KHI NHẬN HÀNG
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded text-sky-700">
                  NAPAS
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-bold uppercase text-slate-700 mb-2">
                DỊCH VỤ GIAO HÀNG & LẮP ĐẶT
              </h5>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-600">
                <span className="border border-slate-200 px-2.5 py-1 rounded">
                  Giao Hàng Nhanh
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded">
                  Mona Express
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded">
                  ViettelPost
                </span>
                <span className="border border-slate-200 px-2.5 py-1 rounded">
                  VNPost
                </span>
              </div>
            </div>

            <div>
              <h5 className="font-bold uppercase text-slate-700 mb-2">
                CHỨNG NHẬN CHÍNH HÃNG
              </h5>
              <div className="flex items-center gap-2 text-[10px] font-bold text-red-600">
                <span className="border border-red-200 bg-red-50 px-2.5 py-1 rounded">
                  ĐÃ ĐĂNG KÝ BỘ CÔNG THƯƠNG
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-3.5 text-center text-[11px] text-slate-500">
          © All rights reserved. Thiết kế website{' '}
          <strong className="text-slate-800">Mona Media</strong>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#102538] text-white px-5 py-3 flex items-center justify-between text-xs font-bold uppercase">
              <span>
                {selectedProduct.categoryLabel} • Mã: {selectedProduct.code}
              </span>
              <button type="button" onClick={() => setSelectedProduct(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center text-xs">
              <div className="h-56 border border-slate-100 p-3 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-base font-extrabold text-slate-900">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  {selectedProduct.oldPrice && (
                    <span className="text-slate-400 line-through">
                      {formatVND(selectedProduct.oldPrice)}
                    </span>
                  )}
                  <span className="text-lg font-black text-[#f57224]">
                    {formatVND(selectedProduct.price)}
                  </span>
                </div>
                <p className="text-slate-600">{selectedProduct.description}</p>
                <div className="bg-slate-50 p-2.5 rounded space-y-1">
                  <p>
                    <strong>Kích thước:</strong> {selectedProduct.dimensions}
                  </p>
                  <p>
                    <strong>Chất liệu:</strong> {selectedProduct.material}
                  </p>
                  <p>
                    <strong>Bảo hành:</strong> {selectedProduct.warranty}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-[#f57224] hover:bg-[#e05e12] text-white font-bold py-2.5 rounded-xs uppercase"
                >
                  Thêm Vào Giỏ Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end"
          onClick={() => setCartOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#102538] text-white flex items-center justify-between text-xs font-bold uppercase">
              <span>Giỏ Hàng Siêu Thị Nội Thất ({totalCartItems})</span>
              <button type="button" onClick={() => setCartOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs">
                  Giỏ hàng đang trống.
                </div>
              ) : (
                cart.map(({ product, qty }) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 border border-slate-200 p-2.5 rounded-xs text-xs"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-contain"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-800 truncate">
                        {product.name}
                      </p>
                      <p className="text-[#f57224] font-bold">
                        {formatVND(product.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => updateCartQty(product.id, -1)}
                          className="w-6 h-6 border border-slate-200 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold">{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateCartQty(product.id, 1)}
                          className="w-6 h-6 border border-slate-200 flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateCartQty(product.id, -qty)}
                      className="text-slate-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Tổng cộng:</span>
                <span className="text-[#f57224]">
                  {formatVND(totalCartAmount)}
                </span>
              </div>
              <button
                type="button"
                disabled={cart.length === 0}
                onClick={() => {
                  setCart([]);
                  setCartOpen(false);
                  showToast('Đặt hàng thành công! Miễn phí giao hàng toàn quốc.');
                }}
                className="w-full py-2.5 bg-[#f57224] hover:bg-[#e05e12] disabled:bg-slate-300 text-white text-xs font-bold uppercase rounded-xs"
              >
                ĐẶT HÀNG NGAY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoTemplateRenderer;
